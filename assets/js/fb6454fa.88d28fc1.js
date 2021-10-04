"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2158],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(a),u=o,f=h["".concat(s,".").concat(u)]||h[u]||p[u]||i;return a?n.createElement(f,r(r({ref:t},d),{},{components:a})):n.createElement(f,r({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},437:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],l={id:"offchain-voting-adapter",title:"Offchain"},s=void 0,c={unversionedId:"contracts/adapters/voting/offchain-voting-adapter",id:"contracts/adapters/voting/offchain-voting-adapter",isDocsHomePage:!1,title:"Offchain",description:"The Offchain adapter is under development, this documentation is not up to date.",source:"@site/docs/contracts/adapters/voting/OffchainVoting.md",sourceDirName:"contracts/adapters/voting",slug:"/contracts/adapters/voting/offchain-voting-adapter",permalink:"/docs/contracts/adapters/voting/offchain-voting-adapter",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/contracts/adapters/voting/OffchainVoting.md",tags:[],version:"current",frontMatter:{id:"offchain-voting-adapter",title:"Offchain"},sidebar:"docs",previous:{title:"Basic",permalink:"/docs/contracts/adapters/voting/basic-voting-adapter"},next:{title:"Bank",permalink:"/docs/contracts/adapters/utils/bank-adapter"}},d=[{value:"Workflow",id:"workflow",children:[]},{value:"Access Flags",id:"access-flags",children:[{value:"BankExtension",id:"bankextension",children:[]}]},{value:"Dependencies",id:"dependencies",children:[{value:"DaoRegistry",id:"daoregistry",children:[]},{value:"BankExtension",id:"bankextension-1",children:[]},{value:"Signatures",id:"signatures",children:[]},{value:"KickBadReporterAdapter",id:"kickbadreporteradapter",children:[]},{value:"OnchainVoting",id:"onchainvoting",children:[]},{value:"SnapshotProposalContract",id:"snapshotproposalcontract",children:[]},{value:"MerkleProof",id:"merkleproof",children:[]}]},{value:"Structs",id:"structs",children:[{value:"ProposalChallenge",id:"proposalchallenge",children:[]},{value:"VoteStepParams",id:"votestepparams",children:[]},{value:"Voting",id:"voting",children:[]},{value:"VoteResultNode",id:"voteresultnode",children:[]}]},{value:"Storage",id:"storage",children:[{value:"fallbackVoting",id:"fallbackvoting",children:[]},{value:"challengeProposals",id:"challengeproposals",children:[]},{value:"votes",id:"votes",children:[]},{value:"_snapshotContract",id:"_snapshotcontract",children:[]},{value:"_handleBadReporterAdapter",id:"_handlebadreporteradapter",children:[]}]},{value:"Functions",id:"functions",children:[{value:"adminFailProposal",id:"adminfailproposal",children:[]},{value:"submitVoteResult",id:"submitvoteresult",children:[]},{value:"voteResult",id:"voteresult",children:[]},{value:"challengeBadNode",id:"challengebadnode",children:[]},{value:"_isValidChoice",id:"_isvalidchoice",children:[]},{value:"challengeBadStep",id:"challengebadstep",children:[]},{value:"requestFallback",id:"requestfallback",children:[]},{value:"sponsorChallengeProposal",id:"sponsorchallengeproposal",children:[]},{value:"processChallengeProposal",id:"processchallengeproposal",children:[]}]},{value:"Events",id:"events",children:[]}],p={toc:d};function h(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Offchain adapter is under development, this documentation is not up to date."))),(0,i.kt)("p",null,"The Offchain Voting Adapter manages offchain voting using a merkle tree to commit to a result that can be challenge during the grace period if necessary."),(0,i.kt)("p",null,"There are also two fallback solutions implemented:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"fallback voting that falls back to simple onchain voting if something is wrong"),(0,i.kt)("li",{parentName:"ul"},"admin force fail proposal to mark a proposal as failed by an admin if necessary. This is present until a more formal verfication of the system is done")),(0,i.kt)("h2",{id:"workflow"},"Workflow"),(0,i.kt)("p",null,"The idea is to use a merkle tree to commit to a computation (calculate the result) and have a way to challenge a result if anyone sees an issue in the computation. The approach assumes data availability."),(0,i.kt)("p",null,'Each leaf in the merkle tree is a "step" in computing the vote result. The last leaf is the result (and the leaf submitted). This works with a modified version of snapshot that uses ERC-712 for hashing / signing proposals and votes.'),(0,i.kt)("p",null,"Available configurations:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"voting.votingPeriod"),": How long after the starting time is the voting valid (seconds)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"voting.gracePeriod"),": How long after the end of the voting period is the result settled (seconds)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"offchainvoting.fallbackThreshold"),": The threshold ( in % ) of members needed to request a fallback voting for it to kick in.")),(0,i.kt)("h2",{id:"access-flags"},"Access Flags"),(0,i.kt)("h3",{id:"bankextension"},"BankExtension"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ADD_TO_BALANCE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SUB_FROM_BALANCE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INTERNAL_TRANSFER"))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"daoregistry"},"DaoRegistry"),(0,i.kt)("h3",{id:"bankextension-1"},"BankExtension"),(0,i.kt)("h3",{id:"signatures"},"Signatures"),(0,i.kt)("h3",{id:"kickbadreporteradapter"},"KickBadReporterAdapter"),(0,i.kt)("h3",{id:"onchainvoting"},"OnchainVoting"),(0,i.kt)("h3",{id:"snapshotproposalcontract"},"SnapshotProposalContract"),(0,i.kt)("h3",{id:"merkleproof"},"MerkleProof"),(0,i.kt)("h2",{id:"structs"},"Structs"),(0,i.kt)("h3",{id:"proposalchallenge"},"ProposalChallenge"),(0,i.kt)("h3",{id:"votestepparams"},"VoteStepParams"),(0,i.kt)("h3",{id:"voting"},"Voting"),(0,i.kt)("h3",{id:"voteresultnode"},"VoteResultNode"),(0,i.kt)("h2",{id:"storage"},"Storage"),(0,i.kt)("h3",{id:"fallbackvoting"},"fallbackVoting"),(0,i.kt)("h3",{id:"challengeproposals"},"challengeProposals"),(0,i.kt)("h3",{id:"votes"},"votes"),(0,i.kt)("h3",{id:"_snapshotcontract"},"_","snapshotContract"),(0,i.kt)("h3",{id:"_handlebadreporteradapter"},"_","handleBadReporterAdapter"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"adminfailproposal"},"adminFailProposal"),(0,i.kt)("p",null,"Admin function (only owner can call it) to fail a proposal. Used as a failsafe if anything goes wrong since the adapter is still new"),(0,i.kt)("h3",{id:"submitvoteresult"},"submitVoteResult"),(0,i.kt)("p",null,"Submits a new vote result for a specific dao / proposalId.\nresult is the last step that contains the vote result.\nresultRoot is the merkle root of the computation merkle tree."),(0,i.kt)("p",null,"If a result has been already published, it checks whether this one has more steps (index is higher) or if the vote is already finished."),(0,i.kt)("p",null,"If the voting period is not done yet but the result cannot be changed anymore (50+% have voted either yes or no), the grace period starts right away"),(0,i.kt)("h3",{id:"voteresult"},"voteResult"),(0,i.kt)("p",null,"Returns the status of a vote session."),(0,i.kt)("h3",{id:"challengebadnode"},"challengeBadNode"),(0,i.kt)("p",null,"Checks and marks a result as bad if a specific node has bad data.\nThe checks are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"bad signature"),(0,i.kt)("li",{parentName:"ul"},"invalid choice"),(0,i.kt)("li",{parentName:"ul"},"bad proposalHash"),(0,i.kt)("li",{parentName:"ul"},"vote timestamp is after the current grace period started")),(0,i.kt)("h3",{id:"_isvalidchoice"},"_","isValidChoice"),(0,i.kt)("p",null,"function defining what a valid choice is"),(0,i.kt)("h3",{id:"challengebadstep"},"challengeBadStep"),(0,i.kt)("p",null,"Checks that the step from a node to another is correct or not\nlet's define a step function S(state, choice) that creates a new state based on a previous one and a choice\nWe check that S(previousState, currentChoice) = currentState\nIf not, we challenge the result"),(0,i.kt)("h3",{id:"requestfallback"},"requestFallback"),(0,i.kt)("p",null,"If something is wrong with the vote but it is not possible to challenge it, members can request a fallback"),(0,i.kt)("h3",{id:"sponsorchallengeproposal"},"sponsorChallengeProposal"),(0,i.kt)("p",null,"If a result has been challenged, it is needed to vote on the faith of the reporter. Should he continue being a member or should he be banned."),(0,i.kt)("h3",{id:"processchallengeproposal"},"processChallengeProposal"),(0,i.kt)("p",null,"Process the vote for the faith of a bad reporter"),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No event are emitted.")))}h.isMDXComponent=!0}}]);