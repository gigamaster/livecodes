"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[132],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},325:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(7462),o=r(7294),s=r(9493);function a(e){const t=(0,o.useRef)(null),[r,n]=(0,o.useState)(e.className||""),[a,i]=(0,o.useState)(e.style||{}),[l,c]=(0,o.useState)(e.height),[d,u]=(0,o.useState)(),[p,m]=(0,o.useState)(JSON.stringify(e.config||"")),[f,y]=(0,o.useState)("");return(0,o.useEffect)((()=>{if(!t.current)return;const{className:r,style:o,height:a,sdkReady:l,config:g,...h}=e;if(n(r||""),i(o||{}),c(a),d&&f===JSON.stringify(h)){if(p===JSON.stringify(g))return;m(JSON.stringify(g)),"string"==typeof g?fetch(g).then((e=>e.json())).then((e=>{d?.setConfig(e)})):g&&d.setConfig(g)}else y(JSON.stringify(h)),d?.destroy(),(0,s.T)(t.current,{config:g,...h}).then((e=>{u(e),"function"==typeof l&&l(e)}))}),[e]),(0,o.useEffect)((()=>()=>{d?.destroy()}),[]),o.createElement("div",{ref:t,className:r,style:a,"data-height":l})}var i=r(1446),l=r(412),c=r(452),d=r(4866),u=r(5162),p=r(2134),m=r(420);function f(e){const[t,r]=(0,o.useState)(e.js),[n,s]=(0,o.useState)(e.ts),[a,i]=(0,o.useState)(e.react),[f,y]=(0,o.useState)(e.vue),[g,h]=(0,o.useState)(e.svelte),v="3.7rem",[w,b]=(0,o.useState)(!0),[E,S]=(0,o.useState)(v),O=(0,o.useRef)(null),x=()=>{setTimeout((()=>{S(`calc(${O.current.offsetHeight}px + ${v})`)}),5),setTimeout((()=>{S(`calc(${O.current.offsetHeight}px + ${v})`)}),255)};return(0,o.useEffect)((()=>{if(l.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};r(e(t,"js")),s(e(n,"ts")),i(e(a,"jsx")),y(e(f,"html")),h(e(g,"html"))}}),[]),o.createElement("details",{className:`alert alert--info ${p.Z.details} ${m.Z.details}`,"data-collapsed":w,style:{height:w?v:E,overflow:"hidden",willChange:"height",transition:`height ${w?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},o.createElement("summary",{onClick:()=>{b(!w),x()}},"show code"),o.createElement("div",{ref:O,style:{display:"block",overflow:"hidden"}},o.createElement("div",{className:p.Z.collapsibleContent},o.createElement(d.Z,{groupId:"sdk-code"},o.createElement(u.Z,{value:"js",label:"JS",attributes:{onMouseDown:x}},o.createElement(c.Z,{language:"js"},t)),o.createElement(u.Z,{value:"ts",label:"TS",attributes:{onMouseDown:x}},o.createElement(c.Z,{language:"ts"},n)),o.createElement(u.Z,{value:"react",label:"React",attributes:{onMouseDown:x}},o.createElement(c.Z,{language:"jsx"},a)),o.createElement(u.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:x}},o.createElement(c.Z,{language:"html"},f)),o.createElement(u.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:x}},o.createElement(c.Z,{language:"html"},g))))))}const y="container_Egsj";function g(e){const{className:t,style:r,showCode:s,height:l,...c}=e,d=e=>JSON.stringify(e,null,2),u=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),p=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${d(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),g=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${d(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,h=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return o.createElement(o.Fragment,null,o.createElement(a,(0,n.Z)({className:`${y} ${e.className}`,style:{height:l||"50vh",...e.style},appUrl:i.G},e)),!1!==e.showCode&&o.createElement(f,{js:u,ts:p,react:m,vue:g,svelte:h}))}},9493:(e,t,r)=>{r.d(t,{T:()=>o,r:()=>s});var n=r(7728);async function o(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:r="https://gigamaster.github.io/livecodes/",params:n={},config:o={},import:s,lite:a,loading:i="lazy",template:l,view:c="split"}=t,d="headless"===c;let u,p=null;if("string"==typeof e)p=document.querySelector(e);else if(e instanceof HTMLElement)p=e;else if(!d||"object"!=typeof e)throw new Error("A valid container element is required.");if(!p){if(!d)throw new Error(`Cannot find element: "${e}"`);p=document.createElement("div"),x(p),document.body.appendChild(p)}try{u=new URL(r)}catch{throw new Error(`"${r}" is not a valid URL.`)}const m=u.origin;if("object"==typeof n&&Object.keys(n).forEach((e=>{u.searchParams.set(e,String(n[e]))})),"string"==typeof o)try{new URL(o),u.searchParams.set("config",o)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof o)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(o).length>0&&u.searchParams.set("config","sdk")}l&&u.searchParams.set("template",l),s&&u.searchParams.set("x",s),a&&u.searchParams.set("lite","true"),u.searchParams.set("embed","true"),u.searchParams.set("loading",d?"eager":i),u.searchParams.set("view",c);let f=!1;const y="Cannot call API methods after calling `destroy()`.",g=await new Promise((e=>{if(!p)return;const t=p.dataset.height||p.style.height;if(t&&!d){const e=isNaN(Number(t))?t:t+"px";p.style.height=e}"false"===p.dataset.defaultStyles||d||(p.style.backgroundColor||="#fff",p.style.border||="1px solid black",p.style.borderRadius||="8px",p.style.boxSizing||="border-box",p.style.padding||="0",p.style.width||="100%",p.style.height||=p.style.height||"300px",p.style.minHeight="200px",p.style.flexGrow="1",p.style.overflow||="hidden",p.style.resize||="vertical");const r=document.createElement("iframe");r.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),r.setAttribute("allowtransparency","true"),r.setAttribute("allowpaymentrequest","true"),r.setAttribute("allowfullscreen","true"),r.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const n="eager"===i?"eager":"lazy";r.setAttribute("loading",n),r.classList.add("livecodes"),d?x(r):(r.style.height="100%",r.style.minHeight="200px",r.style.width="100%",r.style.margin="0",r.style.border="0",r.style.borderRadius=p.style.borderRadius),addEventListener("message",(function e(t){t.source===r.contentWindow&&t.origin===m&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),r.contentWindow?.postMessage({type:"livecodes-config",payload:o},m))})),r.onload=()=>{e(r)},r.src=u.href,p.appendChild(r)})),h=new Promise((e=>{addEventListener("message",(function t(r){r.source===g.contentWindow&&r.origin===m&&"livecodes-ready"===r.data?.type&&(removeEventListener("message",t),e(),h.settled=!0)}))})),v=()=>f?Promise.reject(y):new Promise((async e=>{h.settled&&e();g.contentWindow?.postMessage({type:"livecodes-load"},m),await h,e()})),w=(e,t)=>new Promise((async(r,n)=>{if(f)return n(y);await v();const o=j();addEventListener("message",(function t(s){if(s.source===g.contentWindow&&s.origin===m&&"livecodes-api-response"===s.data?.type&&s.data?.id===o&&s.data.method===e){removeEventListener("message",t);const e=s.data.payload;e?.error?n(e.error):r(e)}})),g.contentWindow?.postMessage({method:e,id:o,args:t},m)})),b={},E=["load","ready","code","console","tests","destroy"],S=(e,t)=>{if(f)throw new Error(y);return E.includes(e)?(w("watch",[e]),b[e]||(b[e]=[]),b[e]?.push(t),{remove:()=>{b[e]=b[e]?.filter((e=>e!==t)),0===b[e]?.length&&w("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==g.contentWindow||e.origin!==m||!t||!b[t])return;const r=e.data?.payload;b[t]?.forEach((e=>{e(r)}))}));const O=()=>{Object.values(b).forEach((e=>{e.length=0})),g?.remove?.(),f=!0};if("lazy"===i&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await v(),t.unobserve(p))}))}),{rootMargin:"150px"}).observe(p)}function x(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const j=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>v(),run:()=>w("run"),format:e=>w("format",[e]),getShareUrl:e=>w("getShareUrl",[e]),getConfig:e=>w("getConfig",[e]),setConfig:e=>w("setConfig",[e]),getCode:()=>w("getCode"),show:(e,t)=>w("show",[e,t]),runTests:()=>w("runTests"),onChange:e=>S("code",e),watch:S,exec:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return w("exec",[e,...r])},destroy:()=>h.settled?w("destroy").then(O):f?Promise.reject(y):(O(),Promise.resolve())}}function s(e){void 0===e&&(e={});const{appUrl:t,params:r,config:o,import:s,...a}=e,i="string"==typeof o?{config:o}:"object"==typeof o?{x:"code/"+(0,n.compressToEncodedURIComponent)(JSON.stringify(o))}:{},l=new URLSearchParams(JSON.parse(JSON.stringify({...a,...r,x:s,...i}))).toString();return(t||"https://gigamaster.github.io/livecodes/")+(l?"?"+l:"")}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const r=e.dataset.options;if(r)try{t=JSON.parse(r)}catch{}let n;const s=e.dataset.config||e.dataset.prefill;if(s)try{n=JSON.parse(s)}catch{}const a=encodeURIComponent(e.outerHTML);e.innerHTML="",o(e,{import:"dom/"+a,...t,...n?{config:n}:{}})}))}))},9388:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(7462),o=(r(7294),r(3905)),s=r(325);const a={title:"result"},i="Display Mode: result",l={unversionedId:"examples/display-modes/result",id:"examples/display-modes/result",title:"result",description:"",source:"@site/docs/examples/display-modes/result.md",sourceDirName:"examples/display-modes",slug:"/examples/display-modes/result",permalink:"/livecodes/docs/examples/display-modes/result",draft:!1,editUrl:"https://github.com/gigamaster/livecodes/tree/develop/docs/docs/examples/display-modes/result.md",tags:[],version:"current",frontMatter:{title:"result"},sidebar:"examplesSidebar",previous:{title:"codeblock",permalink:"/livecodes/docs/examples/display-modes/codeblock"}},c={},d=[],u={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"display-mode-result"},"Display Mode: result"),(0,o.kt)(s.Z,{config:{mode:"result"},template:"react",mdxType:"LiveCodes"}))}p.isMDXComponent=!0}}]);