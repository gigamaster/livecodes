"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7778:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7462),o=n(7294);n(7728);async function a(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://livecodes.io/",params:r={},config:o={},import:a,lite:s,loading:i="lazy",template:l,view:c="split"}=t,d="headless"===c;let u,p=null;if("string"==typeof e)p=document.querySelector(e);else if(e instanceof HTMLElement)p=e;else if(!d||"object"!=typeof e)throw new Error("A valid container element is required.");if(!p){if(!d)throw new Error(`Cannot find element: "${e}"`);p=document.createElement("div"),O(p),document.body.appendChild(p)}try{u=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const m=u.origin;if("object"==typeof r&&Object.keys(r).forEach((e=>{u.searchParams.set(e,String(r[e]))})),"string"==typeof o)try{new URL(o),u.searchParams.set("config",o)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof o)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(o).length>0&&u.searchParams.set("config","sdk")}l&&u.searchParams.set("template",l),a&&u.searchParams.set("x",a),s&&u.searchParams.set("lite","true"),u.searchParams.set("embed","true"),u.searchParams.set("loading",d?"eager":i),u.searchParams.set("view",c);let f=!1;const g="Cannot call API methods after calling `destroy()`.",y=await new Promise((e=>{if(!p)return;const t=p.dataset.height||p.style.height;if(t&&!d){const e=isNaN(Number(t))?t:t+"px";p.style.height=e}"false"===p.dataset.defaultStyles||d||(p.style.backgroundColor||="#fff",p.style.border||="1px solid black",p.style.borderRadius||="5px",p.style.boxSizing||="border-box",p.style.padding||="0",p.style.width||="100%",p.style.height||=p.style.height||"300px",p.style.minHeight="200px",p.style.flexGrow="1",p.style.overflow||="hidden",p.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const r="eager"===i?"eager":"lazy";n.setAttribute("loading",r),n.classList.add("livecodes"),d?O(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=p.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===m&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:o},m))})),n.onload=()=>{e(n)},n.src=u.href,p.appendChild(n)})),h=new Promise((e=>{addEventListener("message",(function t(n){n.source===y.contentWindow&&n.origin===m&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),h.settled=!0)}))})),v=()=>f?Promise.reject(g):new Promise((async e=>{h.settled&&e();y.contentWindow?.postMessage({type:"livecodes-load"},m),await h,e()})),w=(e,t)=>new Promise((async(n,r)=>{if(f)return r(g);await v();const o=N();addEventListener("message",(function t(a){if(a.source===y.contentWindow&&a.origin===m&&"livecodes-api-response"===a.data?.type&&a.data?.id===o&&a.data.method===e){removeEventListener("message",t);const e=a.data.payload;e?.error?r(e.error):n(e)}})),y.contentWindow?.postMessage({method:e,id:o,args:t},m)})),b={},k=["load","ready","code","console","tests","destroy"],E=(e,t)=>{if(f)throw new Error(g);return k.includes(e)?(w("watch",[e]),b[e]||(b[e]=[]),b[e]?.push(t),{remove:()=>{b[e]=b[e]?.filter((e=>e!==t)),0===b[e]?.length&&w("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==y.contentWindow||e.origin!==m||!t||!b[t])return;const n=e.data?.payload;b[t]?.forEach((e=>{e(n)}))}));const j=()=>{Object.values(b).forEach((e=>{e.length=0})),y?.remove?.(),f=!0};if("lazy"===i&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await v(),t.unobserve(p))}))}),{rootMargin:"150px"}).observe(p)}function O(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const N=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>v(),run:()=>w("run"),format:e=>w("format",[e]),getShareUrl:e=>w("getShareUrl",[e]),getConfig:e=>w("getConfig",[e]),setConfig:e=>w("setConfig",[e]),getCode:()=>w("getCode"),show:(e,t)=>w("show",[e,t]),runTests:()=>w("runTests"),onChange:e=>E("code",e),watch:E,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return w("exec",[e,...n])},destroy:()=>h.settled?w("destroy").then(j):f?Promise.reject(g):(j(),Promise.resolve())}}function s(e){const t=(0,o.useRef)(null),[n,r]=(0,o.useState)(e.className||""),[s,i]=(0,o.useState)(e.style||{}),[l,c]=(0,o.useState)(e.height),[d,u]=(0,o.useState)(),[p,m]=(0,o.useState)(JSON.stringify(e.config||"")),[f,g]=(0,o.useState)("");return(0,o.useEffect)((()=>{if(!t.current)return;const{className:n,style:o,height:s,sdkReady:l,config:y,...h}=e;if(r(n||""),i(o||{}),c(s),d&&f===JSON.stringify(h)){if(p===JSON.stringify(y))return;m(JSON.stringify(y)),"string"==typeof y?fetch(y).then((e=>e.json())).then((e=>{d?.setConfig(e)})):y&&d.setConfig(y)}else g(JSON.stringify(h)),d?.destroy(),a(t.current,{config:y,...h}).then((e=>{u(e),"function"==typeof l&&l(e)}))}),[e]),(0,o.useEffect)((()=>()=>{d?.destroy()}),[]),o.createElement("div",{ref:t,className:n,style:s,"data-height":l})}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let r;const o=e.dataset.config||e.dataset.prefill;if(o)try{r=JSON.parse(o)}catch{}const s=encodeURIComponent(e.outerHTML);e.innerHTML="",a(e,{import:"dom/"+s,...t,...r?{config:r}:{}})}))}));var i=n(1446),l=n(412),c=n(814),d=n(4866),u=n(5162),p=n(2134),m=n(420);function f(e){const[t,n]=(0,o.useState)(e.js),[r,a]=(0,o.useState)(e.ts),[s,i]=(0,o.useState)(e.react),[f,g]=(0,o.useState)(e.vue),[y,h]=(0,o.useState)(e.svelte),v="3.7rem",[w,b]=(0,o.useState)(!0),[k,E]=(0,o.useState)(v),j=(0,o.useRef)(null),O=()=>{setTimeout((()=>{E(`calc(${j.current.offsetHeight}px + ${v})`)}),5),setTimeout((()=>{E(`calc(${j.current.offsetHeight}px + ${v})`)}),255)};return(0,o.useEffect)((()=>{if(l.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),a(e(r,"ts")),i(e(s,"jsx")),g(e(f,"html")),h(e(y,"html"))}}),[]),o.createElement("details",{className:`alert alert--info ${p.Z.details} ${m.Z.details}`,"data-collapsed":w,style:{height:w?v:k,overflow:"hidden",willChange:"height",transition:`height ${w?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},o.createElement("summary",{onClick:()=>{b(!w),O()}},"show code"),o.createElement("div",{ref:j,style:{display:"block",overflow:"hidden"}},o.createElement("div",{className:p.Z.collapsibleContent},o.createElement(d.Z,{groupId:"sdk-code"},o.createElement(u.Z,{value:"js",label:"JS",attributes:{onMouseDown:O}},o.createElement(c.Z,{language:"js"},t)),o.createElement(u.Z,{value:"ts",label:"TS",attributes:{onMouseDown:O}},o.createElement(c.Z,{language:"ts"},r)),o.createElement(u.Z,{value:"react",label:"React",attributes:{onMouseDown:O}},o.createElement(c.Z,{language:"jsx"},s)),o.createElement(u.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:O}},o.createElement(c.Z,{language:"html"},f)),o.createElement(u.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:O}},o.createElement(c.Z,{language:"html"},y))))))}const g="container_Egsj";function y(e){const{className:t,style:n,showCode:a,height:l,...c}=e,d=e=>JSON.stringify(e,null,2),u=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),p=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${d(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),y=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${d(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,h=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return o.createElement(o.Fragment,null,o.createElement(s,(0,r.Z)({className:`${g} ${e.className}`,style:{height:l||"50vh",...e.style},appUrl:i.G},e)),!1!==e.showCode&&o.createElement(f,{js:u,ts:p,react:m,vue:y,svelte:h}))}},97:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905)),a=n(7778);const s={},i="Read-Only",l={unversionedId:"features/read-only",id:"features/read-only",title:"Read-Only",description:"In case you need to embed a playground in your web page to show case some code and want users to read through the code and not allow edits, you may use the readonly setting.",source:"@site/docs/features/read-only.md",sourceDirName:"features",slug:"/features/read-only",permalink:"/livecodes/docs/features/read-only",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/features/read-only.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Lite Mode",permalink:"/livecodes/docs/features/lite"},next:{title:"Permanent URL",permalink:"/livecodes/docs/features/permanent-url"}},c={},d=[{value:"Using SDK",id:"using-sdk",level:2},{value:"Using query params",id:"using-query-params",level:2},{value:"Related",id:"related",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"read-only"},"Read-Only"),(0,o.kt)("p",null,"In case you need to embed a playground in your web page to show case some code and want users to read through the code and not allow edits, you may use the ",(0,o.kt)("inlineCode",{parentName:"p"},"readonly")," setting."),(0,o.kt)("p",null,"Code editing, ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/code-format"},"formatting"),", and ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/console"},"console input")," are not available. However, any language supported by LiveCodes can be used, with syntax highlighting. Code can be ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/code-prefill"},"prefilled"),", and is compiled and shown in the ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/result"},"result page")," as usual."),(0,o.kt)("p",null,"By default, a light-weight, minimal ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/editor-settings#code-editor"},"code editor")," is used. This can be changed by explicitly setting the ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/configuration-object"},"configuration object")," property ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/configuration-object#editor"},(0,o.kt)("inlineCode",{parentName:"a"},"editor"))," (e.g. to show hover intellisense)."),(0,o.kt)("p",null,"Demo:"),(0,o.kt)(a.Z,{template:"javascript",config:{readonly:!0},mdxType:"LiveCodes"}),(0,o.kt)("h2",{id:"using-sdk"},"Using SDK"),(0,o.kt)("p",null,"set the ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/configuration-object"},"configuration object")," property ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/configuration-object#readonly"},(0,o.kt)("inlineCode",{parentName:"a"},"readonly"))," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { createPlayground } from 'livecodes';\n\ncreatePlayground('#container', { template: 'javascript', config: { readonly: true } });\n")),(0,o.kt)("h2",{id:"using-query-params"},"Using query params"),(0,o.kt)("p",null,"add the ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/query-params"},"query parameter")," ",(0,o.kt)("inlineCode",{parentName:"p"},"readonly")," (no need to set a value)."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://livecodes.io?template=javascript&readonly"},"https://livecodes.io?template=javascript&readonly")),(0,o.kt)("h2",{id:"related"},"Related"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livecodes/docs/features/code-prefill"},"Code prefill")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livecodes/docs/features/lite"},"Lite mode"))))}p.isMDXComponent=!0}}]);