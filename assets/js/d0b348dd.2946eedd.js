"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8669],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||o;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8277:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={id:"interacting",title:"Tribute UI"},l=void 0,p={unversionedId:"tutorial/dao/interacting",id:"tutorial/dao/interacting",isDocsHomePage:!1,title:"Tribute UI",description:"\u26a1\ufe0f TributeDAO Framework provides you a set of modular and extensible smart contracts to launch your DAO with minimal costs.",source:"@site/docs/tutorial/dao/TributeUI.md",sourceDirName:"tutorial/dao",slug:"/tutorial/dao/interacting",permalink:"/docs/tutorial/dao/interacting",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/tutorial/dao/TributeUI.md",tags:[],version:"current",frontMatter:{id:"interacting",title:"Tribute UI"},sidebar:"docs",previous:{title:"Deployment",permalink:"/docs/tutorial/dao/deployment"},next:{title:"How to create an Adapter",permalink:"/docs/tutorial/adapters/creating-an-adapter"}},c=[{value:"Requirements",id:"requirements",children:[]},{value:"Install the project",id:"install-the-project",children:[]},{value:"Configure the environment",id:"configure-the-environment",children:[]},{value:"Deploy the Subgraph",id:"deploy-the-subgraph",children:[]},{value:"Launch the Snapshot Hub ERC712 service",id:"launch-the-snapshot-hub-erc712-service",children:[]},{value:"Running the Tribute UI dApp",id:"running-the-tribute-ui-dapp",children:[]},{value:"Interacting with the DAO",id:"interacting-with-the-dao",children:[]},{value:"Problems?",id:"problems",children:[]}],h={toc:c};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u26a1\ufe0f ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/openlawteam/tribute-contracts"},"TributeDAO Framework"))," provides you a set of modular and extensible smart contracts to launch your DAO with minimal costs."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://infura.io/product/ethereum"},"Infura Ethereum API KEY")),", you can use the same key you created in the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/tutorial/dao/configuration#requirements"},"Configuration step"))," of the tutorial."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://thegraph.com/legacy-explorer/dashboard"},"The Graph API Access Token")),", you need to use the Access Token created in the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/tutorial/dao/configuration#requirements"},"Configuration step"))," of the tutorial."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/openlawteam/snapshot-hub/tree/erc-712"},"Snapshot Hub ERC712 Service"))," to manage the offchain voting."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.alchemy.com/"},"Alchemy API Access Token"))," you can sign up to ",(0,o.kt)("a",{parentName:"li",href:"https://www.alchemy.com"},"https://www.alchemy.com"),", create an App called ",(0,o.kt)("em",{parentName:"li"},"Tribute DAO Tutorial"),", select ",(0,o.kt)("em",{parentName:"li"},"Rinkeby")," as default network, and finsh the creation process to get the integration URL."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.docker.com/compose/install/"},"Docker Compose"))," install Docker Compose (",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"https://docs.docker.com/compose/install/"),"). This will be used in this tutorial to launch the snapshot-hub service."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://metamask.io/download.html"},"MetaMask"))," download and install MetaMask from ",(0,o.kt)("a",{parentName:"li",href:"https://metamask.io/download.html"},"https://metamask.io/download.html")," into your browser to access the DAO dApp.")),(0,o.kt)("h2",{id:"install-the-project"},"Install the project"),(0,o.kt)("p",null,"Use the command line tool to clone the Github repository and install all the project dependencies."),(0,o.kt)("p",null,"First, make sure you are in the root of ",(0,o.kt)("em",{parentName:"p"},"tribute-tutorial")," folder."),(0,o.kt)("p",null,"Then clone and access the ",(0,o.kt)("em",{parentName:"p"},"tribute-ui")," Github repo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/openlawteam/tribute-ui.git && cd tribute-ui\n")),(0,o.kt)("h2",{id:"configure-the-environment"},"Configure the environment"),(0,o.kt)("p",null,"After you cloned the Tribute UI repo, let's set up the environment variables in the root of ",(0,o.kt)("em",{parentName:"p"},"tribute-ui")," folder, and deploy the subgraph."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch .env\n")),(0,o.kt)("p",null,"Then add the following environment variables:"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can find the ",(0,o.kt)("strong",{parentName:"p"},"REACT_APP_DAO_REGISTRY_CONTRACT_ADDRESS")," and ",(0,o.kt)("strong",{parentName:"p"},"REACT_APP_MULTICALL_CONTRACT_ADDRESS")," values in the tribute-contracts/logs/rinkeby-deploy.log."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# It can be the same value you used for the Tribute DAO deployment.\nREACT_APP_INFURA_PROJECT_ID_DEV=...\n\n# The address of the DaoRegistry smart contract deployed to the Rinkeby network.\nREACT_APP_DAO_REGISTRY_CONTRACT_ADDRESS=...\n\n# The address of the Multicall smart contract deployed to the Rinkeby network.\nREACT_APP_MULTICALL_CONTRACT_ADDRESS=...\n\n# The url of snaphot-hub running locally in a container.\nREACT_APP_SNAPSHOT_HUB_API_URL=http://localhost:8081\n\n# The unique name registered in Snapshot Hub under which proposals, votes, etc. will be stored.\nREACT_APP_SNAPSHOT_SPACE=tribute\n\n# The url of the subgraph running locally in a container.\nREACT_APP_GRAPH_API_URL=https://api.thegraph.com/subgraphs/name/<GITHUB_USERNAME>/tribute-dao-tutorial\n\n# Make sure it is set to development mode\nREACT_APP_ENVIRONMENT=development\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please do not change the REACT_APP_SNAPSHOT_SPACE, keep it as is, so it will work with the snapshot-hub service."))),(0,o.kt)("p",null,"Open the Rinkeby deployment logs, scroll to the end of the file and you should see an output like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"************************\nDaoRegistry: 0x...\nMulticall: 0x...\n...\n************************\n")),(0,o.kt)("p",null,"These are the address of the contracts you have deployed to Rinkeby. Just copy the address of ",(0,o.kt)("strong",{parentName:"p"},"DaoRegistry")," and ",(0,o.kt)("strong",{parentName:"p"},"Multicall"),", set them to ",(0,o.kt)("strong",{parentName:"p"},"REACT_APP_DAO_REGISTRY_CONTRACT_ADDRESS")," and ",(0,o.kt)("strong",{parentName:"p"},"REACT_APP_MULTICALL_CONTRACT_ADDRESS")," respectivelly."),(0,o.kt)("p",null,"Then set your Github username to ",(0,o.kt)("em",{parentName:"p"},"<GITHUB_USERNAME>")," in ",(0,o.kt)("strong",{parentName:"p"},"REACT_APP_GRAPH_API_URL"),", that will indicate where your subgraph needs to be created."),(0,o.kt)("h2",{id:"deploy-the-subgraph"},"Deploy the Subgraph"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You need to checkout branch v1.1.0 of ",(0,o.kt)("em",{parentName:"p"},"tribute-contracts")," to make it work with the tribute-ui."))),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"tribute-tutorial/tribute-contracts")," directory and check out the the tag ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openlawteam/tribute-contracts/releases/tag/v1.1.0"},"v1.1.0")," which is the version that contains the subgraph that works with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openlawteam/tribute-ui"},"TributeUI"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ../tribute-contracts\n")),(0,o.kt)("p",null,"Then checkout the correct branch ",(0,o.kt)("em",{parentName:"p"},"v1.1.0"),", install the project dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout tags/v1.1.0 -b branch-v1.1.0 && npm ci\n")),(0,o.kt)("p",null,"Access the ",(0,o.kt)("inlineCode",{parentName:"p"},"subgraph")," folder in ",(0,o.kt)("inlineCode",{parentName:"p"},"tribute-contracts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd subgraph\n")),(0,o.kt)("p",null,"Then open the config file: ",(0,o.kt)("em",{parentName:"p"},"subgraph/config/subgraph-config.json"),", remove all the entries and add your subgraph config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "network": "rinkeby",\n    "daoFactoryAddress": "0x...",\n    "daoFactoryStartBlock": ...,\n    "GITHUB_USERNAME": "<YOUR_GITHUB_USERNAME>",\n    "SUBGRAPH_NAME": "tribute-dao-tutorial"\n  }\n]\n')),(0,o.kt)("p",null,"In the rinkeby deployment logs at ",(0,o.kt)("em",{parentName:"p"},"tribute-contracts/logs/rinkeby-deploy.log")," search by ",(0,o.kt)("strong",{parentName:"p"},"DaoFactory")," and copy the ",(0,o.kt)("strong",{parentName:"p"},"contract address")," and ",(0,o.kt)("strong",{parentName:"p"},"block number"),", set the values to ",(0,o.kt)("strong",{parentName:"p"},"daoFactoryAddress")," and ",(0,o.kt)("strong",{parentName:"p"},"daoFactoryStartBlock")," respectively."),(0,o.kt)("p",null,"Finally, set your Github username to ",(0,o.kt)("strong",{parentName:"p"},"GITHUB_USERNAME"),", it must be the same Github account that you used to connect to thegraph.com."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("strong",{parentName:"p"},"SUBGRAPH_NAME")," should be lowercase and any spaces should be hyphenated, it needs to match the subgraph slug you picked when you created the subgraph in thegraph.com. If you're not sure, go to the ",(0,o.kt)("a",{parentName:"p",href:"https://thegraph.com/legacy-explorer/dashboard"},"Subgraph Legacy Explorer"),', navigate to your subgraph, and look for "subgraph slug." or once you click on your subgraph, copy the slug from the browser URL. You should see something like: ',(0,o.kt)("a",{parentName:"p",href:"https://thegraph.com/legacy-explorer/subgraph/%5Byour-github-user%5D/%5Bslug%5D"},"https://thegraph.com/legacy-explorer/subgraph/[your-github-user]/[slug]"),"."))),(0,o.kt)("p",null,"From the ",(0,o.kt)("inlineCode",{parentName:"p"},"tribute-tutorial/tribute-contracts/subgraph")," folder, install the dependencies using Node v14.x:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm ci\n")),(0,o.kt)("p",null,"Create the ",(0,o.kt)("strong",{parentName:"p"},".env")," file under the ",(0,o.kt)("em",{parentName:"p"},"subgraph")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch .env\n")),(0,o.kt)("p",null,"Add the subgraph API access token:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# The Graph API Access Token that will be used to deploy the Subgraph.\n# Copy the Access Token from: https://thegraph.com/legacy-explorer/dashboard\nGRAPH_ACCESS_TOKEN=\n")),(0,o.kt)("p",null,"Start the Subgraph deployment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx ts-node subgraph-deployer.ts\n")),(0,o.kt)("p",null,"At the end of the process you should see an output like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u2714 Upload subgraph to IPFS\n\nBuild completed: ...\n\nDeployed to https://thegraph.com/explorer/subgraph/<your-github-username>/tribute-dao-tutorial\n\nSubgraph endpoints:\nQueries (HTTP):     https://api.thegraph.com/subgraphs/name/<your-github-username>/tribute-dao-tutorial\nSubscriptions (WS): wss://api.thegraph.com/subgraphs/name/<your-github-username>/tribute-dao-tutorial\n\n\ud83d\udc4f ### Done.\n\ud83c\udf89 ### 1 Deployment(s) Successful!\n")),(0,o.kt)("h2",{id:"launch-the-snapshot-hub-erc712-service"},"Launch the Snapshot Hub ERC712 service"),(0,o.kt)("p",null,"Use the command line tool to clone the Github repository and launch the docker container.\nThis can be done in any directory, but to keep it consistent let's checkout the project from the ",(0,o.kt)("em",{parentName:"p"},"tribute-tutorial")," folder."),(0,o.kt)("p",null,"Clone and access the ",(0,o.kt)("em",{parentName:"p"},"snapshot-hub")," Github repo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/openlawteam/snapshot-hub.git && cd snapshot-hub\n")),(0,o.kt)("p",null,"Checkout the correct branch and create the ",(0,o.kt)("em",{parentName:"p"},".env.local")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git fetch origin erc-712 && git checkout erc-712 && touch .env.local\n")),(0,o.kt)("p",null,"Copy the following content to the new ",(0,o.kt)("em",{parentName:"p"},".env.local")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# The port number to start the service.\nPORT=8080\n# The type of the ethereum network.\nNETWORK=testnet\n# The flag to indicate if the snapshot-hub should use IPFS to store data.\nUSE_IPFS=false\n# The 64 digits private key of the hd wallet that will be used to sign messages.\n# Feel free to generate a new random 64 digit hexadecimal number for this.\nRELAYER_PK=0x..\n# The allow list of domain that will be using the service.\nALLOWED_DOMAINS=http://localhost:3000\n# The Alchemy API URL and access token to talk to Rinkeby ethereum network.\nALCHEMY_API_URL=https://eth-rinkeby.alchemyapi.io/v2/<ACCESS_TOKEN>\n")),(0,o.kt)("p",null,"Add your Alchemy API access token to ",(0,o.kt)("inlineCode",{parentName:"p"},"ALCHEMY_API_URL")," in ",(0,o.kt)("inlineCode",{parentName:"p"},".env.local")),(0,o.kt)("p",null,"Next add a 64 digit hexadecimal number to ",(0,o.kt)("inlineCode",{parentName:"p"},"RELAYER_PK")," in ",(0,o.kt)("inlineCode",{parentName:"p"},".env.local"),".\nA hexadecimal creator can be found here: ",(0,o.kt)("a",{parentName:"p",href:"https://numbergenerator.org/random-64-digit-hex-codes-generator"},"https://numbergenerator.org/random-64-digit-hex-codes-generator")),(0,o.kt)("p",null,"From the ",(0,o.kt)("inlineCode",{parentName:"p"},"snapshot-hub")," root folder install the dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm ci\n")),(0,o.kt)("p",null,"Finally, start the snapshot-hub erc712 service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,o.kt)("p",null,"You should see this in the terminal:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6320310/134381117-80075a7d-db3a-46b8-a1d8-55f187d89c0e.png",alt:"image"})),(0,o.kt)("h2",{id:"running-the-tribute-ui-dapp"},"Running the Tribute UI dApp"),(0,o.kt)("p",null,"Alright, we are almost done. Now we will set up the Tribute UI dApp, so you can interact with your DAO that was deployed to Rinkeby."),(0,o.kt)("p",null,"You already deployed the Subgraph, and prepared the Snapshot Hub service, now let's start use the command line to start the dApp."),(0,o.kt)("p",null,"From the ",(0,o.kt)("inlineCode",{parentName:"p"},"tribute-ui")," root folder, execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm ci\n")),(0,o.kt)("p",null,"Start the dApp:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,o.kt)("p",null,"You should see this in your terminal:\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6320310/134383377-77226885-20b9-4042-bc33-9364cc878852.png",alt:"image"})),(0,o.kt)("h2",{id:"interacting-with-the-dao"},"Interacting with the DAO"),(0,o.kt)("p",null,"Open your browser and access http://localhost:3001."),(0,o.kt)("p",null,"You should see the Tribute UI onboarding page:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Join Tribute DAO",src:a(8830).Z})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Connect to TributeUI using the same MetaMask account you used to deploy the DAO to Rinkeby, since that address is considered the owner of the DAO you will have access to all features, and will hold 1 unit token."))),(0,o.kt)("p",null,"Connected:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connected",src:a(3970).Z})),(0,o.kt)("p",null,"Access the ",(0,o.kt)("em",{parentName:"p"},"Governance")," page and hit ",(0,o.kt)("em",{parentName:"p"},"new proposal")," to create a proposal for vote, e.g:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Governance",src:a(204).Z})),(0,o.kt)("p",null,"\ud83d\udc4f Well Done!!!"),(0,o.kt)("p",null,"\ud83c\udf89 You have launched your DAO using Tribute DAO Framework and now you can interact with it using the TributeUI dApp!"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It was a lengthy tutorial, but we are constantly working to improve the deployment and configuration process."))),(0,o.kt)("h2",{id:"problems"},"Problems?"),(0,o.kt)("p",null,"Ask for help on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://discord.gg/xXMA2DYqNf"},"Discord"))," or on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/openlawteam/tribute-contracts/discussions/new"},"GitHub Discussions")),"."))}u.isMDXComponent=!0},3970:function(e,t,a){t.Z=a.p+"assets/images/connected-90fa856b19131eeb906d00269a91139e.png"},204:function(e,t,a){t.Z=a.p+"assets/images/governance-ac6e1f569835edd2a12a5148ba2b00cd.png"},8830:function(e,t,a){t.Z=a.p+"assets/images/join-0c5b763343ac4433eedb6d2855d7bb35.png"}}]);