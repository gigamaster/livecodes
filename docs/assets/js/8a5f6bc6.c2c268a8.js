"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},325:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7462),o=n(7294),a=n(9493);function s(e){const t=(0,o.useRef)(null),[n,r]=(0,o.useState)(e.className||""),[s,i]=(0,o.useState)(e.style||{}),[l,c]=(0,o.useState)(e.height),[p,d]=(0,o.useState)(),[u,m]=(0,o.useState)(JSON.stringify(e.config||"")),[f,g]=(0,o.useState)("");return(0,o.useEffect)((()=>{if(!t.current)return;const{className:n,style:o,height:s,sdkReady:l,config:h,...y}=e;if(r(n||""),i(o||{}),c(s),p&&f===JSON.stringify(y)){if(u===JSON.stringify(h))return;m(JSON.stringify(h)),"string"==typeof h?fetch(h).then((e=>e.json())).then((e=>{p?.setConfig(e)})):h&&p.setConfig(h)}else g(JSON.stringify(y)),p?.destroy(),(0,a.T)(t.current,{config:h,...y}).then((e=>{d(e),"function"==typeof l&&l(e)}))}),[e]),(0,o.useEffect)((()=>()=>{p?.destroy()}),[]),o.createElement("div",{ref:t,className:n,style:s,"data-height":l})}var i=n(1446),l=n(412),c=n(452),p=n(4866),d=n(5162),u=n(2134),m=n(420);function f(e){const[t,n]=(0,o.useState)(e.js),[r,a]=(0,o.useState)(e.ts),[s,i]=(0,o.useState)(e.react),[f,g]=(0,o.useState)(e.vue),[h,y]=(0,o.useState)(e.svelte),v="3.7rem",[b,w]=(0,o.useState)(!0),[k,j]=(0,o.useState)(v),C=(0,o.useRef)(null),E=()=>{setTimeout((()=>{j(`calc(${C.current.offsetHeight}px + ${v})`)}),5),setTimeout((()=>{j(`calc(${C.current.offsetHeight}px + ${v})`)}),255)};return(0,o.useEffect)((()=>{if(l.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),a(e(r,"ts")),i(e(s,"jsx")),g(e(f,"html")),y(e(h,"html"))}}),[]),o.createElement("details",{className:`alert alert--info ${u.Z.details} ${m.Z.details}`,"data-collapsed":b,style:{height:b?v:k,overflow:"hidden",willChange:"height",transition:`height ${b?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},o.createElement("summary",{onClick:()=>{w(!b),E()}},"show code"),o.createElement("div",{ref:C,style:{display:"block",overflow:"hidden"}},o.createElement("div",{className:u.Z.collapsibleContent},o.createElement(p.Z,{groupId:"sdk-code"},o.createElement(d.Z,{value:"js",label:"JS",attributes:{onMouseDown:E}},o.createElement(c.Z,{language:"js"},t)),o.createElement(d.Z,{value:"ts",label:"TS",attributes:{onMouseDown:E}},o.createElement(c.Z,{language:"ts"},r)),o.createElement(d.Z,{value:"react",label:"React",attributes:{onMouseDown:E}},o.createElement(c.Z,{language:"jsx"},s)),o.createElement(d.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:E}},o.createElement(c.Z,{language:"html"},f)),o.createElement(d.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:E}},o.createElement(c.Z,{language:"html"},h))))))}const g="container_Egsj";function h(e){const{className:t,style:n,showCode:a,height:l,...c}=e,p=e=>JSON.stringify(e,null,2),d=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${p(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),u=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${p(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${p(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),h=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${p(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,y=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${p(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return o.createElement(o.Fragment,null,o.createElement(s,(0,r.Z)({className:`${g} ${e.className}`,style:{height:l||"50vh",...e.style},appUrl:i.G},e)),!1!==e.showCode&&o.createElement(f,{js:d,ts:u,react:m,vue:h,svelte:y}))}},9493:(e,t,n)=>{n.d(t,{T:()=>o,r:()=>a});var r=n(7728);async function o(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://gigamaster.github.io/livecodes/",params:r={},config:o={},import:a,lite:s,loading:i="lazy",template:l,view:c="split"}=t,p="headless"===c;let d,u=null;if("string"==typeof e)u=document.querySelector(e);else if(e instanceof HTMLElement)u=e;else if(!p||"object"!=typeof e)throw new Error("A valid container element is required.");if(!u){if(!p)throw new Error(`Cannot find element: "${e}"`);u=document.createElement("div"),E(u),document.body.appendChild(u)}try{d=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const m=d.origin;if("object"==typeof r&&Object.keys(r).forEach((e=>{d.searchParams.set(e,String(r[e]))})),"string"==typeof o)try{new URL(o),d.searchParams.set("config",o)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof o)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(o).length>0&&d.searchParams.set("config","sdk")}l&&d.searchParams.set("template",l),a&&d.searchParams.set("x",a),s&&d.searchParams.set("lite","true"),d.searchParams.set("embed","true"),d.searchParams.set("loading",p?"eager":i),d.searchParams.set("view",c);let f=!1;const g="Cannot call API methods after calling `destroy()`.",h=await new Promise((e=>{if(!u)return;const t=u.dataset.height||u.style.height;if(t&&!p){const e=isNaN(Number(t))?t:t+"px";u.style.height=e}"false"===u.dataset.defaultStyles||p||(u.style.backgroundColor||="#fff",u.style.border||="1px solid black",u.style.borderRadius||="8px",u.style.boxSizing||="border-box",u.style.padding||="0",u.style.width||="100%",u.style.height||=u.style.height||"300px",u.style.minHeight="200px",u.style.flexGrow="1",u.style.overflow||="hidden",u.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const r="eager"===i?"eager":"lazy";n.setAttribute("loading",r),n.classList.add("livecodes"),p?E(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=u.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===m&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:o},m))})),n.onload=()=>{e(n)},n.src=d.href,u.appendChild(n)})),y=new Promise((e=>{addEventListener("message",(function t(n){n.source===h.contentWindow&&n.origin===m&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),y.settled=!0)}))})),v=()=>f?Promise.reject(g):new Promise((async e=>{y.settled&&e();h.contentWindow?.postMessage({type:"livecodes-load"},m),await y,e()})),b=(e,t)=>new Promise((async(n,r)=>{if(f)return r(g);await v();const o=S();addEventListener("message",(function t(a){if(a.source===h.contentWindow&&a.origin===m&&"livecodes-api-response"===a.data?.type&&a.data?.id===o&&a.data.method===e){removeEventListener("message",t);const e=a.data.payload;e?.error?r(e.error):n(e)}})),h.contentWindow?.postMessage({method:e,id:o,args:t},m)})),w={},k=["load","ready","code","console","tests","destroy"],j=(e,t)=>{if(f)throw new Error(g);return k.includes(e)?(b("watch",[e]),w[e]||(w[e]=[]),w[e]?.push(t),{remove:()=>{w[e]=w[e]?.filter((e=>e!==t)),0===w[e]?.length&&b("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==h.contentWindow||e.origin!==m||!t||!w[t])return;const n=e.data?.payload;w[t]?.forEach((e=>{e(n)}))}));const C=()=>{Object.values(w).forEach((e=>{e.length=0})),h?.remove?.(),f=!0};if("lazy"===i&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await v(),t.unobserve(u))}))}),{rootMargin:"150px"}).observe(u)}function E(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const S=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>v(),run:()=>b("run"),format:e=>b("format",[e]),getShareUrl:e=>b("getShareUrl",[e]),getConfig:e=>b("getConfig",[e]),setConfig:e=>b("setConfig",[e]),getCode:()=>b("getCode"),show:(e,t)=>b("show",[e,t]),runTests:()=>b("runTests"),onChange:e=>j("code",e),watch:j,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b("exec",[e,...n])},destroy:()=>y.settled?b("destroy").then(C):f?Promise.reject(g):(C(),Promise.resolve())}}function a(e){void 0===e&&(e={});const{appUrl:t,params:n,config:o,import:a,...s}=e,i="string"==typeof o?{config:o}:"object"==typeof o?{x:"code/"+(0,r.compressToEncodedURIComponent)(JSON.stringify(o))}:{},l=new URLSearchParams(JSON.parse(JSON.stringify({...s,...n,x:a,...i}))).toString();return(t||"https://gigamaster.github.io/livecodes/")+(l?"?"+l:"")}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let r;const a=e.dataset.config||e.dataset.prefill;if(a)try{r=JSON.parse(a)}catch{}const s=encodeURIComponent(e.outerHTML);e.innerHTML="",o(e,{import:"dom/"+s,...t,...r?{config:r}:{}})}))}))},3559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,params:()=>d,toc:()=>p});var r=n(7462),o=(n(7294),n(3905)),a=n(325);const s={},i="ClojureScript",l={unversionedId:"languages/clojurescript",id:"languages/clojurescript",title:"ClojureScript",description:"ClojureScript is a robust, practical, and fast programming language with a set of useful features that together form a simple, coherent, and powerful tool.",source:"@site/docs/languages/clojurescript.md",sourceDirName:"languages",slug:"/languages/clojurescript",permalink:"/livecodes/docs/languages/clojurescript",draft:!1,editUrl:"https://github.com/gigamaster/livecodes/tree/develop/docs/docs/languages/clojurescript.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Clio",permalink:"/livecodes/docs/languages/clio"},next:{title:"CoffeeScript",permalink:"/livecodes/docs/languages/coffeescript"}},c={},p=[{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Version",id:"version",level:3},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Starter Template",id:"starter-template",level:2},{value:"Links",id:"links",level:2}],d={cljs:'(ns demo\n  ;; you can use npm modules\n  (:require ["canvas-confetti$default" :as confetti]))\n\n(let [el (js/document.getElementById "test")]\n  (.addEventListener el "click"\n    (fn []\n      (confetti)\n      (println "test"))))\n',html:'<button id="test">test</button>',console:"open"},u={toc:p,params:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clojurescript"},"ClojureScript"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clojurescript.org/"},"ClojureScript")," is a robust, practical, and fast programming language with a set of useful features that together form a simple, coherent, and powerful tool."),(0,o.kt)("p",null,"ClojureScript is a compiler for ",(0,o.kt)("a",{parentName:"p",href:"https://clojure.org/"},"Clojure")," that targets\nJavaScript. ",(0,o.kt)("br",null),"In LiveCodes, it runs in the browser using\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/squint-cljs/cherry"},"Cherry"),"."),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Lisp language family supported in LiveCodes includes ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/commonlisp"},"Common Lisp"),", ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/scheme"},"Scheme"),", ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/clojurescript"},"ClojureScript")," and ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/fennel"},"Fennel"),".")),(0,o.kt)("h2",{id:"language-info"},"Language Info"),(0,o.kt)("h3",{id:"name"},"Name"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"clojurescript")),(0,o.kt)("h3",{id:"extensions"},"Extensions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cljs"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cljc"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"clj"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"edn"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"clojure")),(0,o.kt)("h3",{id:"editor"},"Editor"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"script")),(0,o.kt)("h2",{id:"compiler"},"Compiler"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/squint-cljs/cherry"},"Cherry")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"JSX")," is used (using ",(0,o.kt)("inlineCode",{parentName:"p"},"#jsx")," reader tag - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/squint-cljs/cherry/blob/60adcf6e3a8fb940a80c6a193599da0272fe3058/examples/jsx/pages/component.cljs"},"example"),"), it is also compiled (",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/jsx"},"JSX"),"). See ",(0,o.kt)("a",{parentName:"p",href:"#example-usage"},"example usage"),"."),(0,o.kt)("h3",{id:"version"},"Version"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cherry-cljs"),": v0.2.18"),(0,o.kt)("h2",{id:"code-formatting"},"Code Formatting"),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://shaunlebron.github.io/parinfer/"},"Parinfer"),"."),(0,o.kt)("h2",{id:"example-usage"},"Example Usage"),(0,o.kt)(a.Z,{params:d,mdxType:"LiveCodes"}),(0,o.kt)("p",null,"Using React (with JSX):"),(0,o.kt)(a.Z,{template:"clojurescript",mdxType:"LiveCodes"}),(0,o.kt)("h2",{id:"starter-template"},"Starter Template"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://livecodes.io/?template=clojurescript"},"https://livecodes.io/?template=clojurescript")),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://clojurescript.org/"},"ClojureScript official website")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://clojure.org/"},"Clojure official website")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/squint-cljs/cherry"},"Cherry repo"))))}m.isMDXComponent=!0}}]);