"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4878],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7358:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={id:"proposal",title:"proposal"},p=void 0,s={unversionedId:"schema/subscriptions/proposal",id:"schema/subscriptions/proposal",isDocsHomePage:!1,title:"proposal",description:"No description",source:"@site/docs/schema/subscriptions/proposal.mdx",sourceDirName:"schema/subscriptions",slug:"/schema/subscriptions/proposal",permalink:"/docs/schema/subscriptions/proposal",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/schema/subscriptions/proposal.mdx",tags:[],version:"current",frontMatter:{id:"proposal",title:"proposal"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"proposal(\n  id: ID!\n  block: Block_height\n): Proposal\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")),(0,i.kt)("h4",{id:"block-block_height"},(0,i.kt)("inlineCode",{parentName:"h4"},"block")," (","[",(0,i.kt)("inlineCode",{parentName:"h4"},"Block_height"),"]"),(0,i.kt)("p",null,"The block at which the query should be executed. Can either be an ",(0,i.kt)("inlineCode",{parentName:"p"},"{ number: Int }")," containing the block number or a ",(0,i.kt)("inlineCode",{parentName:"p"},"{ hash: Bytes }")," value containing a block hash. Defaults to the latest block when omitted."),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"proposal"},"[",(0,i.kt)("inlineCode",{parentName:"h4"},"Proposal"),"]"))}m.isMDXComponent=!0}}]);