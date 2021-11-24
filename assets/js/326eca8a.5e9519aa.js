"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3236],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8163:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],s={id:"erc20-extension",title:"ERC20"},l=void 0,d={unversionedId:"contracts/extensions/erc20-extension",id:"contracts/extensions/erc20-extension",isDocsHomePage:!1,title:"ERC20",description:"An ERC20 contract safely manages the transfers of tokens that represent the voting power of each member of the DAO.",source:"@site/docs/contracts/extensions/ERC20.md",sourceDirName:"contracts/extensions",slug:"/contracts/extensions/erc20-extension",permalink:"/docs/contracts/extensions/erc20-extension",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/contracts/extensions/ERC20.md",tags:[],version:"current",frontMatter:{id:"erc20-extension",title:"ERC20"},sidebar:"docs",previous:{title:"Bank",permalink:"/docs/contracts/extensions/bank-extension"},next:{title:"NFT",permalink:"/docs/contracts/extensions/nft-extension"}},c=[{value:"Access Flags",id:"access-flags",children:[{value:"DAO Registry",id:"dao-registry",children:[]},{value:"Bank Extension",id:"bank-extension",children:[]}]},{value:"Storage",id:"storage",children:[{value:"public dao",id:"public-dao",children:[]},{value:"public constant ERC20_EXT_TRANSFER_TYPE",id:"public-constant-erc20_ext_transfer_type",children:[]},{value:"public initialized",id:"public-initialized",children:[]},{value:"public tokenAddress",id:"public-tokenaddress",children:[]},{value:"public tokenName",id:"public-tokenname",children:[]},{value:"public tokenSymbol",id:"public-tokensymbol",children:[]},{value:"public tokenDecimals",id:"public-tokendecimals",children:[]},{value:"private _allowances",id:"private-_allowances",children:[]}]},{value:"Functions",id:"functions",children:[{value:"initialize",id:"initialize",children:[]},{value:"token",id:"token",children:[]},{value:"setToken",id:"settoken",children:[]},{value:"name",id:"name",children:[]},{value:"setName",id:"setname",children:[]},{value:"symbol",id:"symbol",children:[]},{value:"setSymbol",id:"setsymbol",children:[]},{value:"decimals",id:"decimals",children:[]},{value:"setDecimals",id:"setdecimals",children:[]},{value:"totalSupply",id:"totalsupply",children:[]},{value:"balanceOf",id:"balanceof",children:[]},{value:"allowance",id:"allowance",children:[]},{value:"approve",id:"approve",children:[]},{value:"transfer",id:"transfer",children:[]},{value:"transferFrom",id:"transferfrom",children:[]}]},{value:"Events",id:"events",children:[{value:"Approval",id:"approval",children:[]},{value:"Transfer",id:"transfer-1",children:[]}]}],u={toc:c};function p(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/contracts/3.x/api/token/erc20"},"ERC20")," contract safely manages the transfers of tokens that represent the voting power of each member of the DAO."),(0,i.kt)("p",null,"The extension adds to the DAO the capability of managing the voting power of members and external individuals in the DAO. It does that by tracking the token transfers between DAO members, or even, transfer from members to external accounts. That enhances the DAO features by allowing individuals that are not part of the DAO receive voting rights."),(0,i.kt)("h2",{id:"access-flags"},"Access Flags"),(0,i.kt)("h3",{id:"dao-registry"},"DAO Registry"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NEW_MEMBER"))),(0,i.kt)("h3",{id:"bank-extension"},"Bank Extension"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INTERNAL_TRANSFER"))),(0,i.kt)("h2",{id:"storage"},"Storage"),(0,i.kt)("h3",{id:"public-dao"},"public dao"),(0,i.kt)("p",null,"The DAO address that this extension belongs to"),(0,i.kt)("h3",{id:"public-constant-erc20_ext_transfer_type"},"public constant ERC20_EXT_TRANSFER_TYPE"),(0,i.kt)("p",null,"Value: ",(0,i.kt)("inlineCode",{parentName:"p"},'keccak256("erc20ExtTransferType")'),"."),(0,i.kt)("p",null,"The custom configuration to set the transfer type, e.g:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0"),": transfers are enabled only between dao members"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1"),": transfers are enabled between dao members and external accounts"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2"),": all transfers are paused")),(0,i.kt)("p",null,"It needs to be set via a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/contracts/adapters/configuration/configuration-adapter"},"Configuration Adapter")),", if the proposal pass, the new configuration gets stored in the DAO. By default, only transfers between members are allowed (",(0,i.kt)("inlineCode",{parentName:"p"},"0"),")."),(0,i.kt)("h3",{id:"public-initialized"},"public initialized"),(0,i.kt)("p",null,"Internally tracks deployment under eip-1167 proxy pattern. By default it starts as ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", and is updated to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", when the ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize")," function is called."),(0,i.kt)("h3",{id:"public-tokenaddress"},"public tokenAddress"),(0,i.kt)("p",null,"The token address managed by the DAO that tracks the internal transfers."),(0,i.kt)("h3",{id:"public-tokenname"},"public tokenName"),(0,i.kt)("p",null,"The name of the token managed by the DAO."),(0,i.kt)("h3",{id:"public-tokensymbol"},"public tokenSymbol"),(0,i.kt)("p",null,"The symbol of the token managed by the DAO."),(0,i.kt)("h3",{id:"public-tokendecimals"},"public tokenDecimals"),(0,i.kt)("p",null,"The number of decimals of the token managed by the DAO. The default number of decimals is 0 in ",(0,i.kt)("inlineCode",{parentName:"p"},"utils/DeploymentUtils.js."),' It is set to 0, because then the number of Units issued by the Bank Extension is tracked on a 1:1 basis with the number of tokens. For example, in the DAO issues 1 Unit to a member, then the display in a wallet such as MetaMask will be equal "1" Token. Otherwise, if the default was to the standard 18 decimals, then it would display in MetaMask as "0.000000000000000001" Token.'),(0,i.kt)("h3",{id:"private-_allowances"},"private ","_","allowances"),(0,i.kt)("p",null,"Tracks all the token allowances: owner => spender => amount."),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"initialize"},"initialize"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @notice Initializes the extension with the DAO that it belongs to,\n  * and checks if the parameters were set.\n  * @param _dao The address of the DAO that owns the extension.\n  * @param creator The owner of the DAO and Extension that is also a member of the DAO.\n  */\nfunction initialize(DaoRegistry _dao, address creator) external override\n")),(0,i.kt)("h3",{id:"token"},"token"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @dev Returns the token address managed by the DAO that tracks the\n  * internal transfers.\n  */\nfunction token() public view virtual returns (address)\n")),(0,i.kt)("h3",{id:"settoken"},"setToken"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @dev Sets the token address if the extension is not initialized,\n  * not reserved and not zero.\n  */\nfunction setToken(address _tokenAddress) external\n")),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @dev Returns the name of the token.\n  */\nfunction name() public view virtual returns (string memory)\n")),(0,i.kt)("h3",{id:"setname"},"setName"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @dev Sets the name of the token if the extension is not initialized.\n  */\nfunction setName(string memory _name) external\n")),(0,i.kt)("h3",{id:"symbol"},"symbol"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @dev Returns the symbol of the token, usually a shorter version of the\n  * name.\n  */\nfunction symbol() public view virtual returns (string memory)\n")),(0,i.kt)("h3",{id:"setsymbol"},"setSymbol"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @dev Sets the token symbol if the extension is not initialized.\n  */\nfunction setSymbol(string memory _symbol) external\n")),(0,i.kt)("h3",{id:"decimals"},"decimals"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @dev Returns the number of decimals used to get its user representation.\n  * For example, if `decimals` equals `2`, a balance of `505` tokens should\n  * be displayed to a user as `5,05` (`505 / 10 ** 2`).\n  */\nfunction decimals() public view virtual returns (uint8)\n")),(0,i.kt)("h3",{id:"setdecimals"},"setDecimals"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @dev Sets the token decimals if the extension is not initialized.\n  */\nfunction setDecimals(uint8 _decimals) external\n")),(0,i.kt)("h3",{id:"totalsupply"},"totalSupply"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @dev Returns the amount of tokens in existence.\n  */\nfunction totalSupply() public view override returns (uint256)\n")),(0,i.kt)("h3",{id:"balanceof"},"balanceOf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @dev Returns the amount of tokens owned by `account`.\n  */\nfunction balanceOf(address account) public view override returns (uint256)\n")),(0,i.kt)("h3",{id:"allowance"},"allowance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @dev Returns the remaining number of tokens that `spender` will be\n  * allowed to spend on behalf of `owner` through {transferFrom}. This is\n  * zero by default.\n  *\n  * This value changes when {approve} or {transferFrom} are called.\n  */\nfunction allowance(address owner, address spender)\n    public\n    view\n    override\n    returns (uint256)\n")),(0,i.kt)("h3",{id:"approve"},"approve"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n  * @param spender The address account that will have the units decremented.\n  * @param amount The amount to decrement from the spender account.\n  * @return a boolean value indicating whether the operation succeeded.\n  *\n  * Emits an {Approval} event.\n  */\nfunction approve(address spender, uint256 amount)\n    public\n    override\n    reentrancyGuard(dao)\n    returns (bool)\n")),(0,i.kt)("h3",{id:"transfer"},"transfer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @dev Moves `amount` tokens from the caller's account to `recipient`.\n  * @dev The transfer operation follows the DAO configuration specified\n  * by the ERC20_EXT_TRANSFER_TYPE property.\n  * @param recipient The address account that will have the units incremented.\n  * @param amount The amount to increment in the recipient account.\n  * @return a boolean value indicating whether the operation succeeded.\n  *\n  * Emits a {Transfer} event.\n  */\nfunction transfer(address recipient, uint256 amount)\n    public\n    override\n    reentrancyGuard(dao)\n    returns (bool)\n")),(0,i.kt)("h3",{id:"transferfrom"},"transferFrom"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n  * @dev Moves `amount` tokens from `sender` to `recipient` using the\n  * allowance mechanism. `amount` is then deducted from the caller's\n  * allowance.\n  * @dev The transfer operation follows the DAO configuration specified\n  * by the ERC20_EXT_TRANSFER_TYPE property.\n  * @param sender The address account that will have the units decremented.\n  * @param recipient The address account that will have the units incremented.\n  * @param amount The amount to decrement from the sender account.\n  * @return a boolean value indicating whether the operation succeeded.\n  *\n  * Emits a {Transfer} event.\n  */\nfunction transferFrom(\n    address sender,\n    address recipient,\n    uint256 amount\n) public override reentrancyGuard(dao) returns (bool)\n")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"approval"},"Approval"),(0,i.kt)("p",null,"When the sender approves a spender to transfer a certain amount."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event Approval(address indexed owner, address indexed spender, uint256 value);"))),(0,i.kt)("h3",{id:"transfer-1"},"Transfer"),(0,i.kt)("p",null,"When the transfer happens between DAO members and/or external accounts."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event Transfer(address indexed from, address indexed to, uint256 value);"))))}p.isMDXComponent=!0}}]);