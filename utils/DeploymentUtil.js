// Whole-script strict mode syntax
"use strict";

/**
MIT License

Copyright (c) 2020 Openlaw

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

// GOERLI
const goerliContracts = {
  BankAdapter: "",
  BankFactory: "",
  Configuration: "",
  CouponOnboarding: "",
  DaoFactory: "",
  DaoRegistryAdapter: "",
  ERC20TokenExtensionFactory: "",
  GuildKick: "",
  KycOnboarding: "",
  Manager: "",
  Managing: "",
  OffchainVoting: "",
  Ragequit: "",
  Voting: "",
};

const { UNITS, sha3, toBN } = require("./ContractUtil");

const deployDao = async (options) => {
  let {
    deployFunction,
    owner,
    finalize,
    DaoRegistry,
    BankExtension,
    BankFactory,
    ERC20Extension,
    ERC20TokenExtensionFactory,
    Multicall,
    WETH,
    wethAddress,
  } = options;

  const erc20TokenName = options.erc20TokenName
    ? options.erc20TokenName
    : "Unit Test Tokens";
  const erc20TokenSymbol = options.erc20TokenSymbol
    ? options.erc20TokenSymbol
    : "UTT";
  const erc20TokenDecimals = options.erc20TokenDecimals
    ? parseInt(options.erc20TokenDecimals) || 0
    : 0;

  if (!wethAddress) {
    const weth = await deployFunction(WETH);
    wethAddress = weth.address;
    // options.wethAddress = wethAddress;
  }

  const identityDao = await deployFunction(DaoRegistry);
  const identityBank = await deployFunction(BankExtension);
  const bankFactory = await deployFunction(BankFactory, [identityBank.address]);
  // const bankFactory = await BankFactory.at(goerliContracts.BankFactory);

  const identityERC20Ext = await deployFunction(ERC20Extension);
  const erc20TokenExtFactory = await deployFunction(
    ERC20TokenExtensionFactory,
    [identityERC20Ext.address]
  );
  // const erc20TokenExtFactory = await ERC20TokenExtensionFactory.at(
  //   goerliContracts.ERC20TokenExtensionFactory
  // );

  console.log("clone dao ...");
  const { dao, daoFactory } = await cloneDao({
    ...options,
    identityDao,
    name: options.daoName || "test-dao",
  });

  console.log("create bank");
  // Start the BankExtension deployment and configuration
  await bankFactory.createBank(options.maxExternalTokens);
  let pastEvent;
  while (pastEvent === undefined) {
    let pastEvents = await bankFactory.getPastEvents();
    pastEvent = pastEvents[0];
  }
  const { bankAddress } = pastEvent.returnValues;
  const bankExtension = await BankExtension.at(bankAddress);
  console.log("add bank to Dao");
  await dao.addExtension(sha3("bank"), bankExtension.address, owner, {
    from: owner,
  });

  console.log("create erc20 extension");
  // Start the Erc20TokenExtension deployment & configuration
  await erc20TokenExtFactory.create(UNITS, erc20TokenDecimals);

  pastEvent = undefined;
  while (pastEvent === undefined) {
    let pastEvents = await erc20TokenExtFactory.getPastEvents();
    pastEvent = pastEvents[0];
  }
  const { erc20ExtTokenAddress } = pastEvent.returnValues;
  const erc20TokenExtension = await ERC20Extension.at(erc20ExtTokenAddress);
  console.log("add erc20 extension to dao");
  await dao.addExtension(sha3("erc20-ext"), erc20ExtTokenAddress, owner, {
    from: owner,
  });

  const extensions = {
    bank: bankExtension,
    erc20Ext: erc20TokenExtension,
  };

  const { adapters } = await addDefaultAdapters({
    erc20TokenName,
    erc20TokenSymbol,
    dao,
    options,
    daoFactory,
  });

  const votingAddress = await dao.getAdapterAddress(sha3("voting"));
  const votingHelpers = {
    offchainVoting: null,
    batchVoting: null,
  };

  if (options.offchainVoting) {
    const { offchainVoting } = await configureOffchainVoting({
      ...options,
      dao,
      daoFactory,
      votingAddress,
      bankAddress,
    });
    votingHelpers.offchainVoting = offchainVoting;
  }

  // deploy test token contracts (for testing convenience)
  const testContracts = {
    oltToken: null,
    testToken1: null,
    testToken2: null,
    multicall: await deployFunction(Multicall),
    // multicall: null,
    pixelNFT: null,
  };

  if (finalize) {
    console.log("finalize dao");
    await dao.finalizeDao({ from: owner });
  }

  return {
    dao: dao,
    adapters: adapters,
    extensions: extensions,
    testContracts: testContracts,
    votingHelpers: votingHelpers,
    factories: { daoFactory, bankFactory, erc20TokenExtFactory },
    wethAddress,
  };
};

const configureOffchainVoting = async ({
  dao,
  daoFactory,
  owner,
  offchainAdmin,
  votingAddress,
  bankAddress,
  votingPeriod,
  gracePeriod,
  SnapshotProposalContract,
  KickBadReporterAdapter,
  OffchainVotingContract,
  deployFunction,
  chainId,
}) => {
  let snapshotProposalContract = await deployFunction(
    SnapshotProposalContract,
    [chainId]
  );
  let handleBadReporterAdapter = await deployFunction(KickBadReporterAdapter);
  let offchainVoting = await deployFunction(OffchainVotingContract, [
    votingAddress,
    snapshotProposalContract.address,
    handleBadReporterAdapter.address,
    offchainAdmin,
  ]);
  // let offchainVoting = await OffchainVotingContract.at(
  //   goerliContracts.OffchainVoting
  // );
  console.log("add offchain voting");
  await daoFactory.updateAdapter(
    dao.address,
    entryDao("voting", offchainVoting, {}),
    { from: owner }
  );

  console.log("configure bank / offchain voting");
  await dao.setAclToExtensionForAdapter(
    bankAddress,
    offchainVoting.address,
    entryBank(offchainVoting, {
      ADD_TO_BALANCE: true,
      SUB_FROM_BALANCE: true,
      INTERNAL_TRANSFER: true,
    }).flags,
    { from: owner }
  );
  console.log("configure offchain voting");
  await offchainVoting.configureDao(
    dao.address,
    votingPeriod,
    gracePeriod,
    10,
    { from: owner }
  );

  return { offchainVoting };
};

const prepareAdapters = async ({
  deployFunction,
  VotingContract,
  ConfigurationContract,
  RagequitContract,
  ManagingContract,
  ManagerContract,
  KycOnboardingContract,
  GuildKickContract,
  DaoRegistryAdapterContract,
  BankAdapterContract,
  CouponOnboardingContract,
  wethAddress,
}) => {
  let voting,
    configuration,
    ragequit,
    managing,
    manager,
    kycOnboarding,
    guildkick,
    daoRegistryAdapter,
    bankAdapter,
    couponOnboarding;

  voting = await deployFunction(VotingContract);
  // voting = await VotingContract.at(goerliContracts.Voting);
  configuration = await deployFunction(ConfigurationContract);
  // configuration = await ConfigurationContract.at(goerliContracts.Configuration);
  ragequit = await deployFunction(RagequitContract);
  // ragequit = await RagequitContract.at(goerliContracts.Ragequit);
  managing = await deployFunction(ManagingContract);
  // managing = await ManagingContract.at(goerliContracts.Managing);
  manager = await deployFunction(ManagerContract);
  // manager = await ManagerContract.at(goerliContracts.Manager);
  kycOnboarding = await deployFunction(KycOnboardingContract, [wethAddress]);
  // kycOnboarding = await KycOnboardingContract.at(goerliContracts.KycOnboarding);
  guildkick = await deployFunction(GuildKickContract);
  // guildkick = await GuildKickContract.at(goerliContracts.GuildKick);
  daoRegistryAdapter = await deployFunction(DaoRegistryAdapterContract);
  // daoRegistryAdapter = await DaoRegistryAdapterContract.at(
  //   goerliContracts.DaoRegistryAdapter
  // );
  bankAdapter = await deployFunction(BankAdapterContract);
  // bankAdapter = await BankAdapterContract.at(goerliContracts.BankAdapter);
  couponOnboarding = await deployFunction(CouponOnboardingContract);
  // couponOnboarding = await CouponOnboardingContract.at(
  //   goerliContracts.CouponOnboarding
  // );

  return {
    voting,
    configuration,
    ragequit,
    guildkick,
    managing,
    manager,
    kycOnboarding,
    daoRegistryAdapter,
    bankAdapter,
    couponOnboarding,
  };
};

const createIdentityDao = async (options) => {
  let { DaoRegistry } = options;

  return await DaoRegistry.new({
    from: options.owner,
    gasPrice: toBN("0"),
  });
};

const addDefaultAdapters = async ({
  erc20TokenName,
  erc20TokenSymbol,
  dao,
  options,
  daoFactory,
}) => {
  const {
    voting,
    configuration,
    ragequit,
    guildkick,
    managing,
    manager,
    kycOnboarding,
    daoRegistryAdapter,
    bankAdapter,
    couponOnboarding,
  } = await prepareAdapters(options);

  let { BankExtension, ERC20Extension } = options;

  const bankAddress = await dao.getExtensionAddress(sha3("bank"));
  const bankExtension = await BankExtension.at(bankAddress);

  const unitTokenExtAddr = await dao.getExtensionAddress(sha3("erc20-ext"));
  const erc20TokenExtension = await ERC20Extension.at(unitTokenExtAddr);

  await configureDao({
    erc20TokenName,
    erc20TokenSymbol,
    owner: options.owner,
    daoFactory,
    dao,
    ragequit,
    guildkick,
    managing,
    manager,
    kycOnboarding,
    daoRegistryAdapter,
    bankAdapter,
    voting,
    configuration,
    couponOnboarding,
    bankExtension,
    erc20TokenExtension,
    ...options,
  });

  return {
    dao,
    adapters: {
      voting,
      configuration,
      ragequit,
      guildkick,
      managing,
      manager,
      kycOnboarding,
      daoRegistryAdapter,
      bankAdapter,
      couponOnboarding,
    },
  };
};

const configureDao = async ({
  owner,
  erc20TokenName,
  erc20TokenSymbol,
  daoFactory,
  dao,
  ragequit,
  guildkick,
  managing,
  manager,
  kycOnboarding,
  daoRegistryAdapter,
  bankAdapter,
  bankExtension,
  erc20TokenExtension,
  voting,
  configuration,
  couponOnboarding,
  unitPrice,
  maxChunks,
  maxUnits,
  maxMembers,
  nbUnits,
  votingPeriod,
  gracePeriod,
  couponCreatorAddress,
  fundTargetAddress,
  managerSignerAddress,
  kycPaymentToken,
}) => {
  console.log("add adapters!");
  await daoFactory.addAdapters(
    dao.address,
    [
      entryDao("voting", voting, {}),
      entryDao("configuration", configuration, {
        SUBMIT_PROPOSAL: true,
        SET_CONFIGURATION: true,
      }),
      entryDao("ragequit", ragequit, {}),
      entryDao("guildkick", guildkick, {
        SUBMIT_PROPOSAL: true,
      }),
      entryDao("managing", managing, {
        SUBMIT_PROPOSAL: true,
        REPLACE_ADAPTER: true,
        ADD_EXTENSION: true,
        REMOVE_EXTENSION: true,
      }),
      entryDao("manager", manager, {
        SUBMIT_PROPOSAL: true,
        REPLACE_ADAPTER: true,
        ADD_EXTENSION: true,
        REMOVE_EXTENSION: true,
        SET_CONFIGURATION: true,
      }),
      entryDao("kyc-onboarding", kycOnboarding, {
        NEW_MEMBER: true,
      }),
      entryDao("coupon-onboarding", couponOnboarding, {
        ADD_TO_BALANCE: true,
        NEW_MEMBER: true,
      }),
      entryDao("daoRegistry", daoRegistryAdapter, {
        UPDATE_DELEGATE_KEY: true,
      }),
      entryDao("bank", bankAdapter, {}),
      // Declare the erc20 token extension as an adapter to be able to call the bank extension
      entryDao("erc20-ext", erc20TokenExtension, {
        NEW_MEMBER: true,
      }),
    ],
    { from: owner }
  );

  console.log("configure manager");
  await manager.configureDao(dao.address, managerSignerAddress, {
    from: owner,
  });

  console.log("configure bank");
  await daoFactory.configureExtension(
    dao.address,
    bankExtension.address,
    [
      entryBank(ragequit, {
        INTERNAL_TRANSFER: true,
        SUB_FROM_BALANCE: true,
        ADD_TO_BALANCE: true,
      }),
      entryBank(guildkick, {
        INTERNAL_TRANSFER: true,
        SUB_FROM_BALANCE: true,
        ADD_TO_BALANCE: true,
      }),
      entryBank(bankAdapter, {
        WITHDRAW: true,
        SUB_FROM_BALANCE: true,
        UPDATE_TOKEN: true,
      }),
      entryBank(kycOnboarding, {
        ADD_TO_BALANCE: true,
      }),
      entryBank(couponOnboarding, {
        ADD_TO_BALANCE: true,
      }),
      // Let the unit-token extension to execute internal transfers in the bank as an adapter
      entryBank(erc20TokenExtension, {
        INTERNAL_TRANSFER: true,
      }),
    ],
    { from: owner }
  );

  console.log("configure erc20");

  await daoFactory.configureExtension(
    dao.address,
    erc20TokenExtension.address,
    [],
    { from: owner }
  );

  await bankAdapter.configureDao(
    dao.address,
    erc20TokenName,
    erc20TokenSymbol,
    { from: owner }
  );

  console.log("configure kycOnboarding");

  await kycOnboarding.configureDao(
    dao.address,
    couponCreatorAddress,
    unitPrice,
    nbUnits,
    maxChunks,
    maxUnits,
    maxMembers,
    0, // canTopUp default false
    fundTargetAddress,
    kycPaymentToken,
    UNITS,
    {
      from: owner,
    }
  );
  console.log("configure coupon onboarding");
  await couponOnboarding.configureDao(
    dao.address,
    couponCreatorAddress,
    UNITS,
    {
      from: owner,
    }
  );

  console.log("configure voting");

  await voting.configureDao(dao.address, votingPeriod, gracePeriod, {
    from: owner,
  });
};

const cloneDao = async ({
  identityDao,
  owner,
  creator,
  deployFunction,
  DaoRegistry,
  DaoFactory,
  name,
}) => {
  let daoFactory = await deployFunction(
    DaoFactory,
    [identityDao.address],
    owner
  );
  // let daoFactory = await DaoFactory.at(goerliContracts.DaoFactory);

  await daoFactory.createDao(name, creator ? creator : owner, { from: owner });

  // checking the gas usage to clone a contract
  let address = await daoFactory.getDaoAddress(name);

  let newDao = await DaoRegistry.at(address);
  return { dao: newDao, daoFactory, daoName: name };
};

const entryNft = (contract, flags) => {
  const values = [
    flags.WITHDRAW_NFT,
    flags.COLLECT_NFT,
    flags.INTERNAL_TRANSFER,
  ];

  const acl = entry(values);

  return {
    id: sha3("n/a"),
    addr: contract.address,
    flags: acl,
  };
};

const entryBank = (contract, flags) => {
  const values = [
    flags.ADD_TO_BALANCE,
    flags.SUB_FROM_BALANCE,
    flags.INTERNAL_TRANSFER,
    flags.WITHDRAW,
    flags.EXECUTE,
    flags.REGISTER_NEW_TOKEN,
    flags.REGISTER_NEW_INTERNAL_TOKEN,
  ];

  const acl = entry(values);

  return {
    id: sha3("n/a"),
    addr: contract.address,
    flags: acl,
  };
};

const entryDao = (name, contract, flags) => {
  const values = [
    flags.REPLACE_ADAPTER,
    flags.SUBMIT_PROPOSAL,
    flags.UPDATE_DELEGATE_KEY,
    flags.SET_CONFIGURATION,
    flags.ADD_EXTENSION,
    flags.REMOVE_EXTENSION,
    flags.NEW_MEMBER,
  ];

  const acl = entry(values);

  return {
    id: sha3(name),
    addr: contract.address,
    flags: acl,
  };
};

const entry = (values) => {
  return values
    .map((v, idx) => (v === true ? 2 ** idx : 0))
    .reduce((a, b) => a + b);
};

const networks = [
  {
    name: "ganache",
    chainId: 1337,
  },
  {
    name: "goerli",
    chainId: 5,
  },
  {
    name: "mainnet",
    chainId: 1,
  },
  {
    name: "test",
    chainId: 1,
  },
  {
    name: "coverage",
    chainId: 1,
  },
];

const getNetworkDetails = (name) => {
  return networks.find((n) => n.name === name);
};

module.exports = {
  deployDao,
  createIdentityDao,
  cloneDao,
  prepareAdapters,
  addDefaultAdapters,
  entry,
  entryBank,
  entryDao,
  getNetworkDetails,
};
