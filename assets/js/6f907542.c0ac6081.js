"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4693],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1819:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={id:"access-control",title:"Access Control"},s=void 0,l={unversionedId:"contracts/core/access-control",id:"contracts/core/access-control",isDocsHomePage:!1,title:"Access Control",description:"Access Control Layer",source:"@site/docs/contracts/core/AccessControl.md",sourceDirName:"contracts/core",slug:"/contracts/core/access-control",permalink:"/docs/contracts/core/access-control",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/contracts/core/AccessControl.md",tags:[],version:"current",frontMatter:{id:"access-control",title:"Access Control"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"access-control-layer"},"Access Control Layer"),(0,a.kt)("p",null,"The Access Control Layer (ACL) is implemented using Access Flags to indicate which permissions an adapter must have in order to access and modify the DAO state. The are 3 main categories of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openlawteam/tribute-contracts/blob/master/docs/core/DaoRegistry.md#access-flags"},"Access Flags"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MemberFlag: ",(0,a.kt)("inlineCode",{parentName:"li"},"EXISTS"),"."),(0,a.kt)("li",{parentName:"ul"},"ProposalFlag: ",(0,a.kt)("inlineCode",{parentName:"li"},"EXISTS"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"SPONSORED"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"PROCESSED"),"."),(0,a.kt)("li",{parentName:"ul"},"AclFlag: ",(0,a.kt)("inlineCode",{parentName:"li"},"REPLACE_ADAPTER"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"SUBMIT_PROPOSAL"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"UPDATE_DELEGATE_KEY"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"SET_CONFIGURATION"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ADD_EXTENSION"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"REMOVE_EXTENSION"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"NEW_MEMBER"),".")),(0,a.kt)("p",null,"The Access Flags of each adapter must be provided to the DAOFactory when the ",(0,a.kt)("inlineCode",{parentName:"p"},"daoFactory.addAdapters")," function is called passing the new adapters. These flags will grant the access to the DAORegistry contract, and the same process must be done to grant the access of each Adapter to each Extension (function ",(0,a.kt)("inlineCode",{parentName:"p"},"daoFactory.configureExtension"),")."),(0,a.kt)("p",null,"The Access Flags are defined in the DAORegistry using the modifier ",(0,a.kt)("inlineCode",{parentName:"p"},"hasAccess"),". For example, a function with the modifier ",(0,a.kt)("inlineCode",{parentName:"p"},"hasAccess(this, AclFlag.REPLACE_ADAPTER)")," means the adapter calling this function needs to have the Access Flag ",(0,a.kt)("inlineCode",{parentName:"p"},"REPLACE_ADAPTER")," enabled, otherwise the call will revert. In order to create an Adapter with the proper Access Flags one needs to first map out all the functions that the Adapter will be calling in the DAORegistry and Extensions, and provide these Access Flags using the DAO Factory as described above."),(0,a.kt)("p",null,"You can find more information about the purpose of each access flag at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openlawteam/tribute-contracts/blob/master/docs/core/DaoRegistry.md#access-flags"},"DAO Registry - Access Flags"),"."))}d.isMDXComponent=!0}}]);