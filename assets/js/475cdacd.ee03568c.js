"use strict";(self.webpackChunkuxuy_doc_site=self.webpackChunkuxuy_doc_site||[]).push([[360],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<n;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4526:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294);const i=e=>{const{title:t,description:r,link:i,linkDownload:n}=e;return a.createElement("article",{class:"col col--6 margin-bottom--lg",style:{padding:"0px",marginTop:"30px"}},a.createElement("a",{class:"card padding--lg cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module",href:i,target:"_blank"},a.createElement("h2",{class:"text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module",title:t||""},"\ud83d\udcc4\ufe0f",t),a.createElement("p",{class:"text--truncate cardDescription_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module",title:r},r)))}},1435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(7462),i=(r(7294),r(3905)),n=r(4526);const o={sidebar_position:1,sidebar_label:"Smart Contract Audit Report"},c="Smart Contract Audit Report",s={unversionedId:"security-audit/audit-report",id:"security-audit/audit-report",title:"Smart Contract Audit Report",description:"Executive Summary",source:"@site/docs/security-audit/audit-report.md",sourceDirName:"security-audit",slug:"/security-audit/audit-report",permalink:"/security-audit/audit-report",draft:!1,editUrl:"https://github.com/uxuycom/uxuy-docsite/blob/main/docs/security-audit/audit-report.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Smart Contract Audit Report"},sidebar:"tutorialSidebar",previous:{title:"Security & Audit",permalink:"/category/security--audit"},next:{title:"MPC algorithm",permalink:"/security-audit/mpc-algorithm"}},l={},u=[{value:"Executive Summary",id:"executive-summary",level:3},{value:"Scope",id:"scope",level:3},{value:"Methodology",id:"methodology",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"Attachments",id:"attachments",level:3}],d={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"smart-contract-audit-report"},"Smart Contract Audit Report"),(0,i.kt)("h3",{id:"executive-summary"},"Executive Summary"),(0,i.kt)("p",null,"This report presents the findings of a security audit conducted on the smart contract for ",(0,i.kt)("a",{parentName:"p",href:"https://uxuy.com"},"UXUY"),", ",(0,i.kt)("a",{parentName:"p",href:"https://uxuy.com"},"UXUY")," aims to develop a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Decentralized_finance#Decentralized_exchanges"},"decentralized exchange (DEX)")," wallet with ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Secure_multi-party_computation"},"multi-party computation (MPC)")," technology, which allows for secure private key management and transaction signing without exposing the private key to any single participant. The smart contract audit was conducted to ensure the security and integrity of the project's code. The audit was conducted by ",(0,i.kt)("a",{parentName:"p",href:"https://slowmist.com"},"SlowMist")," on 8 May, 2023."),(0,i.kt)("p",null,"Overall, the smart contract was found to be well-designed and implemented, with no major security vulnerabilities identified. However, the audit did identify several minor issues and recommendations for improvement, which are detailed in the following sections."),(0,i.kt)("h3",{id:"scope"},"Scope"),(0,i.kt)("p",null,"The scope of the audit covered the smart contract code for ",(0,i.kt)("a",{parentName:"p",href:"https://uxuy.com"},"UXUY"),", as well as any relevant dependencies and libraries."),(0,i.kt)("h3",{id:"methodology"},"Methodology"),(0,i.kt)("p",null,"The audit was conducted using a combination of manual code review and automated analysis tools, with a focus on identifying security vulnerabilities and potential attack vectors. The audit methodology followed industry best practices and standards, including the OpenZeppelin audit checklist."),(0,i.kt)("h3",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Overall, the smart contract for ",(0,i.kt)("a",{parentName:"p",href:"https://uxuy.com"},"UXUY")," was found to be well-designed and implemented, with no major security vulnerabilities identified. The minor issues and recommendations identified during the audit can be easily addressed to further improve the security and functionality of the smart contract."),(0,i.kt)("h3",{id:"attachments"},"Attachments"),(0,i.kt)("p",null,"More Details in the Reports"),(0,i.kt)(n.Z,{title:"SlowMist-Audit-Report-UXUY-Protocol-Phase2.pdf",description:"DownLoad SlowMist-Audit-Report-UXUY-Protocol-Phase2.pdf",link:"pathname:///assets/SlowMist-Audit-Report-UXUY-Protocol-Phase2.pdf",mdxType:"CustomCard"}))}m.isMDXComponent=!0}}]);