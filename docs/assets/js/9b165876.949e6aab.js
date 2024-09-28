"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},325:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7462),o=n(7294),s=n(9493);function a(e){const t=(0,o.useRef)(null),[n,r]=(0,o.useState)(e.className||""),[a,i]=(0,o.useState)(e.style||{}),[l,c]=(0,o.useState)(e.height),[d,u]=(0,o.useState)(),[p,m]=(0,o.useState)(JSON.stringify(e.config||"")),[f,y]=(0,o.useState)("");return(0,o.useEffect)((()=>{if(!t.current)return;const{className:n,style:o,height:a,sdkReady:l,config:g,...h}=e;if(r(n||""),i(o||{}),c(a),d&&f===JSON.stringify(h)){if(p===JSON.stringify(g))return;m(JSON.stringify(g)),"string"==typeof g?fetch(g).then((e=>e.json())).then((e=>{d?.setConfig(e)})):g&&d.setConfig(g)}else y(JSON.stringify(h)),d?.destroy(),(0,s.T)(t.current,{config:g,...h}).then((e=>{u(e),"function"==typeof l&&l(e)}))}),[e]),(0,o.useEffect)((()=>()=>{d?.destroy()}),[]),o.createElement("div",{ref:t,className:n,style:a,"data-height":l})}var i=n(1446),l=n(412),c=n(452),d=n(4866),u=n(5162),p=n(2134),m=n(420);function f(e){const[t,n]=(0,o.useState)(e.js),[r,s]=(0,o.useState)(e.ts),[a,i]=(0,o.useState)(e.react),[f,y]=(0,o.useState)(e.vue),[g,h]=(0,o.useState)(e.svelte),v="3.7rem",[w,b]=(0,o.useState)(!0),[E,S]=(0,o.useState)(v),O=(0,o.useRef)(null),x=()=>{setTimeout((()=>{S(`calc(${O.current.offsetHeight}px + ${v})`)}),5),setTimeout((()=>{S(`calc(${O.current.offsetHeight}px + ${v})`)}),255)};return(0,o.useEffect)((()=>{if(l.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),s(e(r,"ts")),i(e(a,"jsx")),y(e(f,"html")),h(e(g,"html"))}}),[]),o.createElement("details",{className:`alert alert--info ${p.Z.details} ${m.Z.details}`,"data-collapsed":w,style:{height:w?v:E,overflow:"hidden",willChange:"height",transition:`height ${w?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},o.createElement("summary",{onClick:()=>{b(!w),x()}},"show code"),o.createElement("div",{ref:O,style:{display:"block",overflow:"hidden"}},o.createElement("div",{className:p.Z.collapsibleContent},o.createElement(d.Z,{groupId:"sdk-code"},o.createElement(u.Z,{value:"js",label:"JS",attributes:{onMouseDown:x}},o.createElement(c.Z,{language:"js"},t)),o.createElement(u.Z,{value:"ts",label:"TS",attributes:{onMouseDown:x}},o.createElement(c.Z,{language:"ts"},r)),o.createElement(u.Z,{value:"react",label:"React",attributes:{onMouseDown:x}},o.createElement(c.Z,{language:"jsx"},a)),o.createElement(u.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:x}},o.createElement(c.Z,{language:"html"},f)),o.createElement(u.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:x}},o.createElement(c.Z,{language:"html"},g))))))}const y="container_Egsj";function g(e){const{className:t,style:n,showCode:s,height:l,...c}=e,d=e=>JSON.stringify(e,null,2),u=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),p=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${d(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),g=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${d(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,h=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return o.createElement(o.Fragment,null,o.createElement(a,(0,r.Z)({className:`${y} ${e.className}`,style:{height:l||"50vh",...e.style},appUrl:i.G},e)),!1!==e.showCode&&o.createElement(f,{js:u,ts:p,react:m,vue:g,svelte:h}))}},9493:(e,t,n)=>{n.d(t,{T:()=>o,r:()=>s});var r=n(7728);async function o(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://gigamaster.github.io/livecodes/",params:r={},config:o={},import:s,lite:a,loading:i="lazy",template:l,view:c="split"}=t,d="headless"===c;let u,p=null;if("string"==typeof e)p=document.querySelector(e);else if(e instanceof HTMLElement)p=e;else if(!d||"object"!=typeof e)throw new Error("A valid container element is required.");if(!p){if(!d)throw new Error(`Cannot find element: "${e}"`);p=document.createElement("div"),x(p),document.body.appendChild(p)}try{u=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const m=u.origin;if("object"==typeof r&&Object.keys(r).forEach((e=>{u.searchParams.set(e,String(r[e]))})),"string"==typeof o)try{new URL(o),u.searchParams.set("config",o)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof o)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(o).length>0&&u.searchParams.set("config","sdk")}l&&u.searchParams.set("template",l),s&&u.searchParams.set("x",s),a&&u.searchParams.set("lite","true"),u.searchParams.set("embed","true"),u.searchParams.set("loading",d?"eager":i),u.searchParams.set("view",c);let f=!1;const y="Cannot call API methods after calling `destroy()`.",g=await new Promise((e=>{if(!p)return;const t=p.dataset.height||p.style.height;if(t&&!d){const e=isNaN(Number(t))?t:t+"px";p.style.height=e}"false"===p.dataset.defaultStyles||d||(p.style.backgroundColor||="#fff",p.style.border||="1px solid black",p.style.borderRadius||="5px",p.style.boxSizing||="border-box",p.style.padding||="0",p.style.width||="100%",p.style.height||=p.style.height||"300px",p.style.minHeight="200px",p.style.flexGrow="1",p.style.overflow||="hidden",p.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const r="eager"===i?"eager":"lazy";n.setAttribute("loading",r),n.classList.add("livecodes"),d?x(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=p.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===m&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:o},m))})),n.onload=()=>{e(n)},n.src=u.href,p.appendChild(n)})),h=new Promise((e=>{addEventListener("message",(function t(n){n.source===g.contentWindow&&n.origin===m&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),h.settled=!0)}))})),v=()=>f?Promise.reject(y):new Promise((async e=>{h.settled&&e();g.contentWindow?.postMessage({type:"livecodes-load"},m),await h,e()})),w=(e,t)=>new Promise((async(n,r)=>{if(f)return r(y);await v();const o=j();addEventListener("message",(function t(s){if(s.source===g.contentWindow&&s.origin===m&&"livecodes-api-response"===s.data?.type&&s.data?.id===o&&s.data.method===e){removeEventListener("message",t);const e=s.data.payload;e?.error?r(e.error):n(e)}})),g.contentWindow?.postMessage({method:e,id:o,args:t},m)})),b={},E=["load","ready","code","console","tests","destroy"],S=(e,t)=>{if(f)throw new Error(y);return E.includes(e)?(w("watch",[e]),b[e]||(b[e]=[]),b[e]?.push(t),{remove:()=>{b[e]=b[e]?.filter((e=>e!==t)),0===b[e]?.length&&w("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==g.contentWindow||e.origin!==m||!t||!b[t])return;const n=e.data?.payload;b[t]?.forEach((e=>{e(n)}))}));const O=()=>{Object.values(b).forEach((e=>{e.length=0})),g?.remove?.(),f=!0};if("lazy"===i&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await v(),t.unobserve(p))}))}),{rootMargin:"150px"}).observe(p)}function x(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const j=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>v(),run:()=>w("run"),format:e=>w("format",[e]),getShareUrl:e=>w("getShareUrl",[e]),getConfig:e=>w("getConfig",[e]),setConfig:e=>w("setConfig",[e]),getCode:()=>w("getCode"),show:(e,t)=>w("show",[e,t]),runTests:()=>w("runTests"),onChange:e=>S("code",e),watch:S,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return w("exec",[e,...n])},destroy:()=>h.settled?w("destroy").then(O):f?Promise.reject(y):(O(),Promise.resolve())}}function s(e){void 0===e&&(e={});const{appUrl:t,params:n,config:o,import:s,...a}=e,i="string"==typeof o?{config:o}:"object"==typeof o?{x:"code/"+(0,r.compressToEncodedURIComponent)(JSON.stringify(o))}:{},l=new URLSearchParams(JSON.parse(JSON.stringify({...a,...n,x:s,...i}))).toString();return(t||"https://gigamaster.github.io/livecodes")+(l?"?"+l:"")}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let r;const s=e.dataset.config||e.dataset.prefill;if(s)try{r=JSON.parse(s)}catch{}const a=encodeURIComponent(e.outerHTML);e.innerHTML="",o(e,{import:"dom/"+a,...t,...r?{config:r}:{}})}))}))},4840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905)),s=n(325);const a={title:"full"},i="Display Mode: full",l={unversionedId:"examples/display-modes/full",id:"examples/display-modes/full",title:"full",description:"",source:"@site/docs/examples/display-modes/full.md",sourceDirName:"examples/display-modes",slug:"/examples/display-modes/full",permalink:"/livecodes/docs/examples/display-modes/full",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/examples/display-modes/full.md",tags:[],version:"current",frontMatter:{title:"full"},sidebar:"examplesSidebar",previous:{title:"Display Modes",permalink:"/livecodes/docs/examples/display-modes/"},next:{title:"editor",permalink:"/livecodes/docs/examples/display-modes/editor"}},c={},d=[],u={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"display-mode-full"},"Display Mode: full"),(0,o.kt)(s.Z,{template:"react",mdxType:"LiveCodes"}))}p.isMDXComponent=!0}}]);