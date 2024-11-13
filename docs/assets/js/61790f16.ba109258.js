"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(g,s(s({ref:t},d),{},{components:n})):a.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},325:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),o=n(7294),r=n(9493);function s(e){const t=(0,o.useRef)(null),[n,a]=(0,o.useState)(e.className||""),[s,i]=(0,o.useState)(e.style||{}),[l,c]=(0,o.useState)(e.height),[d,p]=(0,o.useState)(),[u,m]=(0,o.useState)(JSON.stringify(e.config||"")),[g,f]=(0,o.useState)("");return(0,o.useEffect)((()=>{if(!t.current)return;const{className:n,style:o,height:s,sdkReady:l,config:v,...h}=e;if(a(n||""),i(o||{}),c(s),d&&g===JSON.stringify(h)){if(u===JSON.stringify(v))return;m(JSON.stringify(v)),"string"==typeof v?fetch(v).then((e=>e.json())).then((e=>{d?.setConfig(e)})):v&&d.setConfig(v)}else f(JSON.stringify(h)),d?.destroy(),(0,r.T)(t.current,{config:v,...h}).then((e=>{p(e),"function"==typeof l&&l(e)}))}),[e]),(0,o.useEffect)((()=>()=>{d?.destroy()}),[]),o.createElement("div",{ref:t,className:n,style:s,"data-height":l})}var i=n(1446),l=n(412),c=n(452),d=n(4866),p=n(5162),u=n(2134),m=n(420);function g(e){const[t,n]=(0,o.useState)(e.js),[a,r]=(0,o.useState)(e.ts),[s,i]=(0,o.useState)(e.react),[g,f]=(0,o.useState)(e.vue),[v,h]=(0,o.useState)(e.svelte),y="3.7rem",[k,w]=(0,o.useState)(!0),[b,E]=(0,o.useState)(y),N=(0,o.useRef)(null),S=()=>{setTimeout((()=>{E(`calc(${N.current.offsetHeight}px + ${y})`)}),5),setTimeout((()=>{E(`calc(${N.current.offsetHeight}px + ${y})`)}),255)};return(0,o.useEffect)((()=>{if(l.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),r(e(a,"ts")),i(e(s,"jsx")),f(e(g,"html")),h(e(v,"html"))}}),[]),o.createElement("details",{className:`alert alert--info ${u.Z.details} ${m.Z.details}`,"data-collapsed":k,style:{height:k?y:b,overflow:"hidden",willChange:"height",transition:`height ${k?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},o.createElement("summary",{onClick:()=>{w(!k),S()}},"show code"),o.createElement("div",{ref:N,style:{display:"block",overflow:"hidden"}},o.createElement("div",{className:u.Z.collapsibleContent},o.createElement(d.Z,{groupId:"sdk-code"},o.createElement(p.Z,{value:"js",label:"JS",attributes:{onMouseDown:S}},o.createElement(c.Z,{language:"js"},t)),o.createElement(p.Z,{value:"ts",label:"TS",attributes:{onMouseDown:S}},o.createElement(c.Z,{language:"ts"},a)),o.createElement(p.Z,{value:"react",label:"React",attributes:{onMouseDown:S}},o.createElement(c.Z,{language:"jsx"},s)),o.createElement(p.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:S}},o.createElement(c.Z,{language:"html"},g)),o.createElement(p.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:S}},o.createElement(c.Z,{language:"html"},v))))))}const f="container_Egsj";function v(e){const{className:t,style:n,showCode:r,height:l,...c}=e,d=e=>JSON.stringify(e,null,2),p=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),u=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${d(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),v=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${d(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,h=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return o.createElement(o.Fragment,null,o.createElement(s,(0,a.Z)({className:`${f} ${e.className}`,style:{height:l||"50vh",...e.style},appUrl:i.G},e)),!1!==e.showCode&&o.createElement(g,{js:p,ts:u,react:m,vue:v,svelte:h}))}},9493:(e,t,n)=>{n.d(t,{T:()=>o,r:()=>r});var a=n(7728);async function o(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://gigamaster.github.io/livecodes/",params:a={},config:o={},import:r,lite:s,loading:i="lazy",template:l,view:c="split"}=t,d="headless"===c;let p,u=null;if("string"==typeof e)u=document.querySelector(e);else if(e instanceof HTMLElement)u=e;else if(!d||"object"!=typeof e)throw new Error("A valid container element is required.");if(!u){if(!d)throw new Error(`Cannot find element: "${e}"`);u=document.createElement("div"),S(u),document.body.appendChild(u)}try{p=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const m=p.origin;if("object"==typeof a&&Object.keys(a).forEach((e=>{p.searchParams.set(e,String(a[e]))})),"string"==typeof o)try{new URL(o),p.searchParams.set("config",o)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof o)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(o).length>0&&p.searchParams.set("config","sdk")}l&&p.searchParams.set("template",l),r&&p.searchParams.set("x",r),s&&p.searchParams.set("lite","true"),p.searchParams.set("embed","true"),p.searchParams.set("loading",d?"eager":i),p.searchParams.set("view",c);let g=!1;const f="Cannot call API methods after calling `destroy()`.",v=await new Promise((e=>{if(!u)return;const t=u.dataset.height||u.style.height;if(t&&!d){const e=isNaN(Number(t))?t:t+"px";u.style.height=e}"false"===u.dataset.defaultStyles||d||(u.style.backgroundColor||="#fff",u.style.border||="1px solid black",u.style.borderRadius||="8px",u.style.boxSizing||="border-box",u.style.padding||="0",u.style.width||="100%",u.style.height||=u.style.height||"300px",u.style.minHeight="200px",u.style.flexGrow="1",u.style.overflow||="hidden",u.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const a="eager"===i?"eager":"lazy";n.setAttribute("loading",a),n.classList.add("livecodes"),d?S(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=u.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===m&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:o},m))})),n.onload=()=>{e(n)},n.src=p.href,u.appendChild(n)})),h=new Promise((e=>{addEventListener("message",(function t(n){n.source===v.contentWindow&&n.origin===m&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),h.settled=!0)}))})),y=()=>g?Promise.reject(f):new Promise((async e=>{h.settled&&e();v.contentWindow?.postMessage({type:"livecodes-load"},m),await h,e()})),k=(e,t)=>new Promise((async(n,a)=>{if(g)return a(f);await y();const o=C();addEventListener("message",(function t(r){if(r.source===v.contentWindow&&r.origin===m&&"livecodes-api-response"===r.data?.type&&r.data?.id===o&&r.data.method===e){removeEventListener("message",t);const e=r.data.payload;e?.error?a(e.error):n(e)}})),v.contentWindow?.postMessage({method:e,id:o,args:t},m)})),w={},b=["load","ready","code","console","tests","destroy"],E=(e,t)=>{if(g)throw new Error(f);return b.includes(e)?(k("watch",[e]),w[e]||(w[e]=[]),w[e]?.push(t),{remove:()=>{w[e]=w[e]?.filter((e=>e!==t)),0===w[e]?.length&&k("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==v.contentWindow||e.origin!==m||!t||!w[t])return;const n=e.data?.payload;w[t]?.forEach((e=>{e(n)}))}));const N=()=>{Object.values(w).forEach((e=>{e.length=0})),v?.remove?.(),g=!0};if("lazy"===i&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await y(),t.unobserve(u))}))}),{rootMargin:"150px"}).observe(u)}function S(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const C=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>y(),run:()=>k("run"),format:e=>k("format",[e]),getShareUrl:e=>k("getShareUrl",[e]),getConfig:e=>k("getConfig",[e]),setConfig:e=>k("setConfig",[e]),getCode:()=>k("getCode"),show:(e,t)=>k("show",[e,t]),runTests:()=>k("runTests"),onChange:e=>E("code",e),watch:E,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return k("exec",[e,...n])},destroy:()=>h.settled?k("destroy").then(N):g?Promise.reject(f):(N(),Promise.resolve())}}function r(e){void 0===e&&(e={});const{appUrl:t,params:n,config:o,import:r,...s}=e,i="string"==typeof o?{config:o}:"object"==typeof o?{x:"code/"+(0,a.compressToEncodedURIComponent)(JSON.stringify(o))}:{},l=new URLSearchParams(JSON.parse(JSON.stringify({...s,...n,x:r,...i}))).toString();return(t||"https://gigamaster.github.io/livecodes/")+(l?"?"+l:"")}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let a;const r=e.dataset.config||e.dataset.prefill;if(r)try{a=JSON.parse(r)}catch{}const s=encodeURIComponent(e.outerHTML);e.innerHTML="",o(e,{import:"dom/"+s,...t,...a?{config:a}:{}})}))}))},9707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,config:()=>p,config2:()=>m,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>l,params:()=>u,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(325);const s={},i="Vento",l={unversionedId:"languages/vento",id:"languages/vento",title:"Vento",description:"Vento is a template engine for Deno. It's inspired by other engines, such as Nunjucks, Liquid, Eta, and Mustache.",source:"@site/docs/languages/vento.md",sourceDirName:"languages",slug:"/languages/vento",permalink:"/livecodes/docs/languages/vento",draft:!1,editUrl:"https://github.com/gigamaster/livecodes/tree/develop/docs/docs/languages/vento.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"UnoCSS",permalink:"/livecodes/docs/languages/unocss"},next:{title:"Vue 3 SFC",permalink:"/livecodes/docs/languages/vue"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Pre-rendered (Default)",id:"pre-rendered-default",level:3},{value:"Dynamic",id:"dynamic",level:3},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Extension",id:"extension",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Version",id:"version",level:3},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Custom Settings",id:"custom-settings",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Pre-rendered",id:"pre-rendered",level:3},{value:"Dynamic",id:"dynamic-1",level:3},{value:"Links",id:"links",level:2}],p={markup:{language:"vento",content:"Hello, {{ name }}!"},customSettings:{template:{data:{name:"LiveCodes"}}}},u={compiled:"open"},m={markup:{language:"vento",content:"Hello, {{ name }}!"},script:{language:"javascript",content:'window.livecodes.templateData = { name: "LiveCodes" };'},customSettings:{template:{prerender:!1}},activeEditor:"script"},g={toc:d,config:p,params:u,config2:m};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vento"},"Vento"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://vento.js.org/"},"Vento")," is a template engine for Deno. It's inspired by other engines, such as ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/nunjucks"},"Nunjucks"),", ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/liquid"},"Liquid"),", ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/eta"},"Eta"),", and ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/mustache"},"Mustache"),"."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"There are 2 modes for rendering:"),(0,o.kt)("h3",{id:"pre-rendered-default"},"Pre-rendered (Default)"),(0,o.kt)("p",null,"The values of the expressions are evaluated and added to the template during compilation of the ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/result"},"result page"),"."),(0,o.kt)("p",null,"The values of all expressions should be supplied in advance using ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/advanced/custom-settings"},"custom settings")," to the property ",(0,o.kt)("inlineCode",{parentName:"p"},"template.data")," which accepts an object of key-value pairs."),(0,o.kt)("p",null,"Example: This provides the value of the expression ",(0,o.kt)("inlineCode",{parentName:"p"},"name")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Custom Settings"',title:'"Custom','Settings"':!0},'{\n  "template": {\n    "data": {\n      "name": "LiveCodes"\n    }\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#pre-rendered"},"Full example below")),(0,o.kt)("h3",{id:"dynamic"},"Dynamic"),(0,o.kt)("p",null,"To use this mode, the property ",(0,o.kt)("inlineCode",{parentName:"p"},"template.prerender")," in ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/advanced/custom-settings"},"custom settings")," should be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Custom Settings"',title:'"Custom','Settings"':!0},'{\n  "template": {\n    "prerender": false\n  }\n}\n')),(0,o.kt)("p",null,"In this mode, in addition to values supplied in custom settings (see above), expressions can have values that are evaluated during the ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/result"},"result page")," runtime."),(0,o.kt)("p",null,"This can be achieved in JavaScript (or any ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/"},"language")," that compiles to it) by assigning ",(0,o.kt)("inlineCode",{parentName:"p"},"window.livecodes.templateData")," to an object with the data."),(0,o.kt)("p",null,"Please note that template rendering occurs on ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event"},"page load"),", so the assignment must occur before that."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Script Editor (JS)"',title:'"Script',Editor:!0,'(JS)"':!0},"window.livecodes.templateData = { name: 'LiveCodes' };\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#dynamic-1"},"Full example below")),(0,o.kt)("h2",{id:"language-info"},"Language Info"),(0,o.kt)("h3",{id:"name"},"Name"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vento")),(0,o.kt)("h3",{id:"extension"},"Extension"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},".vto")),(0,o.kt)("h3",{id:"editor"},"Editor"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"markup")),(0,o.kt)("h2",{id:"compiler"},"Compiler"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://vento.js.org/"},"Vento"),"."),(0,o.kt)("h3",{id:"version"},"Version"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ventojs"),": v0.12.8"),(0,o.kt)("h2",{id:"code-formatting"},"Code Formatting"),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier"),"."),(0,o.kt)("h2",{id:"custom-settings"},"Custom Settings"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/advanced/custom-settings"},"Custom settings")," added to the property ",(0,o.kt)("inlineCode",{parentName:"p"},"vento")," are passed as a JSON object to the ",(0,o.kt)("a",{parentName:"p",href:"https://vento.js.org/getting-started/#usage"},(0,o.kt)("inlineCode",{parentName:"a"},"vento()"))," function during compile. Please check the ",(0,o.kt)("a",{parentName:"p",href:"https://vento.js.org/configuration/"},"documentation")," for full reference."),(0,o.kt)("p",null,"Please note that custom settings should be valid JSON (i.e. functions are not allowed)."),(0,o.kt)("h2",{id:"example-usage"},"Example Usage"),(0,o.kt)("h3",{id:"pre-rendered"},"Pre-rendered"),(0,o.kt)(r.Z,{config:p,params:u,mdxType:"LiveCodes"}),(0,o.kt)("h3",{id:"dynamic-1"},"Dynamic"),(0,o.kt)(r.Z,{config:m,mdxType:"LiveCodes"}),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vento.js.org/"},"Vento"))))}f.isMDXComponent=!0}}]);