"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(g,s(s({ref:t},d),{},{components:n})):a.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},325:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),r=n(7294),o=n(9493);function s(e){const t=(0,r.useRef)(null),[n,a]=(0,r.useState)(e.className||""),[s,i]=(0,r.useState)(e.style||{}),[l,c]=(0,r.useState)(e.height),[d,p]=(0,r.useState)(),[m,u]=(0,r.useState)(JSON.stringify(e.config||"")),[g,h]=(0,r.useState)("");return(0,r.useEffect)((()=>{if(!t.current)return;const{className:n,style:r,height:s,sdkReady:l,config:f,...v}=e;if(a(n||""),i(r||{}),c(s),d&&g===JSON.stringify(v)){if(m===JSON.stringify(f))return;u(JSON.stringify(f)),"string"==typeof f?fetch(f).then((e=>e.json())).then((e=>{d?.setConfig(e)})):f&&d.setConfig(f)}else h(JSON.stringify(v)),d?.destroy(),(0,o.T)(t.current,{config:f,...v}).then((e=>{p(e),"function"==typeof l&&l(e)}))}),[e]),(0,r.useEffect)((()=>()=>{d?.destroy()}),[]),r.createElement("div",{ref:t,className:n,style:s,"data-height":l})}var i=n(1446),l=n(412),c=n(452),d=n(4866),p=n(5162),m=n(2134),u=n(420);function g(e){const[t,n]=(0,r.useState)(e.js),[a,o]=(0,r.useState)(e.ts),[s,i]=(0,r.useState)(e.react),[g,h]=(0,r.useState)(e.vue),[f,v]=(0,r.useState)(e.svelte),y="3.7rem",[b,w]=(0,r.useState)(!0),[k,E]=(0,r.useState)(y),N=(0,r.useRef)(null),S=()=>{setTimeout((()=>{E(`calc(${N.current.offsetHeight}px + ${y})`)}),5),setTimeout((()=>{E(`calc(${N.current.offsetHeight}px + ${y})`)}),255)};return(0,r.useEffect)((()=>{if(l.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),o(e(a,"ts")),i(e(s,"jsx")),h(e(g,"html")),v(e(f,"html"))}}),[]),r.createElement("details",{className:`alert alert--info ${m.Z.details} ${u.Z.details}`,"data-collapsed":b,style:{height:b?y:k,overflow:"hidden",willChange:"height",transition:`height ${b?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},r.createElement("summary",{onClick:()=>{w(!b),S()}},"show code"),r.createElement("div",{ref:N,style:{display:"block",overflow:"hidden"}},r.createElement("div",{className:m.Z.collapsibleContent},r.createElement(d.Z,{groupId:"sdk-code"},r.createElement(p.Z,{value:"js",label:"JS",attributes:{onMouseDown:S}},r.createElement(c.Z,{language:"js"},t)),r.createElement(p.Z,{value:"ts",label:"TS",attributes:{onMouseDown:S}},r.createElement(c.Z,{language:"ts"},a)),r.createElement(p.Z,{value:"react",label:"React",attributes:{onMouseDown:S}},r.createElement(c.Z,{language:"jsx"},s)),r.createElement(p.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:S}},r.createElement(c.Z,{language:"html"},g)),r.createElement(p.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:S}},r.createElement(c.Z,{language:"html"},f))))))}const h="container_Egsj";function f(e){const{className:t,style:n,showCode:o,height:l,...c}=e,d=e=>JSON.stringify(e,null,2),p=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),u=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${d(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),f=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${d(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,v=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return r.createElement(r.Fragment,null,r.createElement(s,(0,a.Z)({className:`${h} ${e.className}`,style:{height:l||"50vh",...e.style},appUrl:i.G},e)),!1!==e.showCode&&r.createElement(g,{js:p,ts:m,react:u,vue:f,svelte:v}))}},9493:(e,t,n)=>{n.d(t,{T:()=>r,r:()=>o});var a=n(7728);async function r(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://gigamaster.github.io/livecodes/",params:a={},config:r={},import:o,lite:s,loading:i="lazy",template:l,view:c="split"}=t,d="headless"===c;let p,m=null;if("string"==typeof e)m=document.querySelector(e);else if(e instanceof HTMLElement)m=e;else if(!d||"object"!=typeof e)throw new Error("A valid container element is required.");if(!m){if(!d)throw new Error(`Cannot find element: "${e}"`);m=document.createElement("div"),S(m),document.body.appendChild(m)}try{p=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const u=p.origin;if("object"==typeof a&&Object.keys(a).forEach((e=>{p.searchParams.set(e,String(a[e]))})),"string"==typeof r)try{new URL(r),p.searchParams.set("config",r)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof r)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(r).length>0&&p.searchParams.set("config","sdk")}l&&p.searchParams.set("template",l),o&&p.searchParams.set("x",o),s&&p.searchParams.set("lite","true"),p.searchParams.set("embed","true"),p.searchParams.set("loading",d?"eager":i),p.searchParams.set("view",c);let g=!1;const h="Cannot call API methods after calling `destroy()`.",f=await new Promise((e=>{if(!m)return;const t=m.dataset.height||m.style.height;if(t&&!d){const e=isNaN(Number(t))?t:t+"px";m.style.height=e}"false"===m.dataset.defaultStyles||d||(m.style.backgroundColor||="#fff",m.style.border||="1px solid black",m.style.borderRadius||="8px",m.style.boxSizing||="border-box",m.style.padding||="0",m.style.width||="100%",m.style.height||=m.style.height||"300px",m.style.minHeight="200px",m.style.flexGrow="1",m.style.overflow||="hidden",m.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const a="eager"===i?"eager":"lazy";n.setAttribute("loading",a),n.classList.add("livecodes"),d?S(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=m.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===u&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:r},u))})),n.onload=()=>{e(n)},n.src=p.href,m.appendChild(n)})),v=new Promise((e=>{addEventListener("message",(function t(n){n.source===f.contentWindow&&n.origin===u&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),v.settled=!0)}))})),y=()=>g?Promise.reject(h):new Promise((async e=>{v.settled&&e();f.contentWindow?.postMessage({type:"livecodes-load"},u),await v,e()})),b=(e,t)=>new Promise((async(n,a)=>{if(g)return a(h);await y();const r=C();addEventListener("message",(function t(o){if(o.source===f.contentWindow&&o.origin===u&&"livecodes-api-response"===o.data?.type&&o.data?.id===r&&o.data.method===e){removeEventListener("message",t);const e=o.data.payload;e?.error?a(e.error):n(e)}})),f.contentWindow?.postMessage({method:e,id:r,args:t},u)})),w={},k=["load","ready","code","console","tests","destroy"],E=(e,t)=>{if(g)throw new Error(h);return k.includes(e)?(b("watch",[e]),w[e]||(w[e]=[]),w[e]?.push(t),{remove:()=>{w[e]=w[e]?.filter((e=>e!==t)),0===w[e]?.length&&b("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==f.contentWindow||e.origin!==u||!t||!w[t])return;const n=e.data?.payload;w[t]?.forEach((e=>{e(n)}))}));const N=()=>{Object.values(w).forEach((e=>{e.length=0})),f?.remove?.(),g=!0};if("lazy"===i&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await y(),t.unobserve(m))}))}),{rootMargin:"150px"}).observe(m)}function S(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const C=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>y(),run:()=>b("run"),format:e=>b("format",[e]),getShareUrl:e=>b("getShareUrl",[e]),getConfig:e=>b("getConfig",[e]),setConfig:e=>b("setConfig",[e]),getCode:()=>b("getCode"),show:(e,t)=>b("show",[e,t]),runTests:()=>b("runTests"),onChange:e=>E("code",e),watch:E,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return b("exec",[e,...n])},destroy:()=>v.settled?b("destroy").then(N):g?Promise.reject(h):(N(),Promise.resolve())}}function o(e){void 0===e&&(e={});const{appUrl:t,params:n,config:r,import:o,...s}=e,i="string"==typeof r?{config:r}:"object"==typeof r?{x:"code/"+(0,a.compressToEncodedURIComponent)(JSON.stringify(r))}:{},l=new URLSearchParams(JSON.parse(JSON.stringify({...s,...n,x:o,...i}))).toString();return(t||"https://gigamaster.github.io/livecodes/")+(l?"?"+l:"")}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let a;const o=e.dataset.config||e.dataset.prefill;if(o)try{a=JSON.parse(o)}catch{}const s=encodeURIComponent(e.outerHTML);e.innerHTML="",r(e,{import:"dom/"+s,...t,...a?{config:a}:{}})}))}))},8085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,config:()=>p,config2:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,params:()=>m,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(325);const s={},i="Haml",l={unversionedId:"languages/haml",id:"languages/haml",title:"Haml",description:"Haml compiler for client side javascript view templates using clientside-haml-js.",source:"@site/docs/languages/haml.md",sourceDirName:"languages",slug:"/languages/haml",permalink:"/livecodes/docs/languages/haml",draft:!1,editUrl:"https://github.com/gigamaster/livecodes/tree/develop/docs/docs/languages/haml.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Go (Golang)",permalink:"/livecodes/docs/languages/go"},next:{title:"Handlebars",permalink:"/livecodes/docs/languages/handlebars"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Pre-rendered (Default)",id:"pre-rendered-default",level:3},{value:"Dynamic",id:"dynamic",level:3},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Extension",id:"extension",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Version",id:"version",level:3},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Custom Settings",id:"custom-settings",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Pre-rendered",id:"pre-rendered",level:3},{value:"Dynamic",id:"dynamic-1",level:3},{value:"Links",id:"links",level:2}],p={markup:{language:"haml",content:"%p Hello, #{name}!"},customSettings:{template:{data:{name:"LiveCodes"}}}},m={compiled:"open"},u={markup:{language:"haml",content:"%p Hello, #{name}!"},script:{language:"javascript",content:'window.livecodes.templateData = { name: "LiveCodes" };'},customSettings:{template:{prerender:!1}},activeEditor:"script"},g={toc:d,config:p,params:m,config2:u};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"haml"},"Haml"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://haml.info/"},"Haml")," compiler for client side javascript view templates using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/uglyog/clientside-haml-js"},"clientside-haml-js"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"There are 2 modes for rendering:"),(0,r.kt)("h3",{id:"pre-rendered-default"},"Pre-rendered (Default)"),(0,r.kt)("p",null,"The values of the expressions are evaluated and added to the template during compilation of the ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/result"},"result page"),"."),(0,r.kt)("p",null,"The values of all expressions should be supplied in advance using ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/advanced/custom-settings"},"custom settings")," to the property ",(0,r.kt)("inlineCode",{parentName:"p"},"template.data")," which accepts an object of key-value pairs."),(0,r.kt)("p",null,"Example: This provides the value of the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"name")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Custom Settings"',title:'"Custom','Settings"':!0},'{\n  "template": {\n    "data": {\n      "name": "LiveCodes"\n    }\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#pre-rendered"},"Full example below")),(0,r.kt)("h3",{id:"dynamic"},"Dynamic"),(0,r.kt)("p",null,"To use this mode, the property ",(0,r.kt)("inlineCode",{parentName:"p"},"template.prerender")," in ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/advanced/custom-settings"},"custom settings")," should be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Custom Settings"',title:'"Custom','Settings"':!0},'{\n  "template": {\n    "prerender": false\n  }\n}\n')),(0,r.kt)("p",null,"In this mode, in addition to values supplied in custom settings (see above), expressions can have values that are evaluated during the ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/result"},"result page")," runtime."),(0,r.kt)("p",null,"This can be achieved in JavaScript (or any ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/"},"language")," that compiles to it) by assigning ",(0,r.kt)("inlineCode",{parentName:"p"},"window.livecodes.templateData")," to an object with the data."),(0,r.kt)("p",null,"Please note that template rendering occurs on ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event"},"page load"),", so the assignment must occur before that."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Script Editor (JS)"',title:'"Script',Editor:!0,'(JS)"':!0},"window.livecodes.templateData = { name: 'LiveCodes' };\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#dynamic-1"},"Full example below")),(0,r.kt)("h2",{id:"language-info"},"Language Info"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"haml")),(0,r.kt)("h3",{id:"extension"},"Extension"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".haml")),(0,r.kt)("h3",{id:"editor"},"Editor"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"markup")),(0,r.kt)("h2",{id:"compiler"},"Compiler"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/uglyog/clientside-haml-js"},"clientside-haml-js"),"."),(0,r.kt)("h3",{id:"version"},"Version"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"clientside-haml-js"),": v5.4"),(0,r.kt)("h2",{id:"code-formatting"},"Code Formatting"),(0,r.kt)("p",null,"Not supported."),(0,r.kt)("h2",{id:"custom-settings"},"Custom Settings"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/advanced/custom-settings"},"Custom settings")," added to the property ",(0,r.kt)("inlineCode",{parentName:"p"},"haml")," are passed as a JSON object to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/uglyog/clientside-haml-js#client-side-haml-api"},(0,r.kt)("inlineCode",{parentName:"a"},"haml.compileHaml"))," method during compile. Please check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/uglyog/clientside-haml-js#client-side-haml-api"},"documentation")," for full reference."),(0,r.kt)("p",null,"Please note that custom settings should be valid JSON (i.e. functions are not allowed)."),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)("h3",{id:"pre-rendered"},"Pre-rendered"),(0,r.kt)(o.Z,{config:p,params:m,mdxType:"LiveCodes"}),(0,r.kt)("h3",{id:"dynamic-1"},"Dynamic"),(0,r.kt)(o.Z,{config:u,mdxType:"LiveCodes"}),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://haml.info/"},"Haml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/uglyog/clientside-haml-js"},"clientside-haml-js"))))}h.isMDXComponent=!0}}]);