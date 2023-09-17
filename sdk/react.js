import $,{useEffect as B,useRef as G}from"react";async function A(n,h={}){typeof n=="object"&&!(n instanceof HTMLElement)&&n.view==="headless"&&(h=n,n=null);let{appUrl:v="https://livecodes.io/",params:m={},config:a={},import:b,lite:L,loading:g="lazy",template:C,view:D="split"}=h,P=D==="headless",s=null;if(typeof n=="string")s=document.querySelector(n);else if(n instanceof HTMLElement)s=n;else if(!(P&&typeof n=="object"))throw new Error("A valid container element is required.");if(!s)if(P)s=document.createElement("div"),j(s),document.body.appendChild(s);else throw new Error(`Cannot find element: "${n}"`);let i;try{i=new URL(v)}catch(e){throw new Error(`"${v}" is not a valid URL.`)}let w=i.origin;if(typeof m=="object"&&Object.keys(m).forEach(e=>{i.searchParams.set(e,String(m[e]))}),typeof a=="string")try{new URL(a),i.searchParams.set("config",a)}catch(e){throw new Error('"config" is not a valid URL or configuration object.')}else if(typeof a=="object")Object.keys(a).length>0&&i.searchParams.set("config","sdk");else throw new Error('"config" is not a valid URL or configuration object.');C&&i.searchParams.set("template",C),b&&i.searchParams.set("x",b),L&&i.searchParams.set("lite","true"),i.searchParams.set("embed","true"),i.searchParams.set("loading",P?"eager":g),i.searchParams.set("view",D);let S=!1,R="Cannot call API methods after calling `destroy()`.",y=await(()=>new Promise(e=>{var l,f,E,c,x,M,p,K,N;if(!s)return;let o=s.dataset.height||s.style.height;if(o&&!P){let O=isNaN(Number(o))?o:o+"px";s.style.height=O}s.dataset.defaultStyles!=="false"&&!P&&((l=s.style).backgroundColor||(l.backgroundColor="#fff"),(f=s.style).border||(f.border="1px solid black"),(E=s.style).borderRadius||(E.borderRadius="5px"),(c=s.style).boxSizing||(c.boxSizing="border-box"),(x=s.style).padding||(x.padding="0"),(M=s.style).width||(M.width="100%"),(p=s.style).height||(p.height=s.style.height||"300px"),s.style.minHeight="200px",(K=s.style).overflow||(K.overflow="hidden"),(N=s.style).resize||(N.resize="vertical"));let t=document.createElement("iframe");t.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),t.setAttribute("allowtransparency","true"),t.setAttribute("allowpaymentrequest","true"),t.setAttribute("allowfullscreen","true"),t.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");let r=g==="eager"?"eager":"lazy";t.setAttribute("loading",r),t.classList.add("livecodes"),P?j(t):(t.style.height="100%",t.style.minHeight="200px",t.style.width="100%",t.style.margin="0",t.style.border="0",t.style.borderRadius=s.style.borderRadius),addEventListener("message",function O(T){var W,z;T.source!==t.contentWindow||T.origin!==w||((W=T.data)==null?void 0:W.type)!=="livecodes-get-config"||(removeEventListener("message",O),(z=t.contentWindow)==null||z.postMessage({type:"livecodes-config",payload:a},w))}),t.onload=()=>{e(t)},t.src=i.href,s.appendChild(t)}))(),H=new Promise(e=>{addEventListener("message",function o(t){var r;t.source!==y.contentWindow||t.origin!==w||((r=t.data)==null?void 0:r.type)!=="livecodes-ready"||(removeEventListener("message",o),e(),H.settled=!0)})}),I=()=>S?Promise.reject(R):new Promise(async e=>{var t;H.settled&&e();let o={type:"livecodes-load"};(t=y.contentWindow)==null||t.postMessage(o,w),await H,e()}),d=(e,o)=>new Promise(async(t,r)=>{var f;if(S)return r(R);await I();let l=Q();addEventListener("message",function E(c){var x,M;if(!(c.source!==y.contentWindow||c.origin!==w||((x=c.data)==null?void 0:x.type)!=="livecodes-api-response"||((M=c.data)==null?void 0:M.id)!==l)&&c.data.method===e){removeEventListener("message",E);let p=c.data.payload;p!=null&&p.error?r(p.error):t(p)}}),(f=y.contentWindow)==null||f.postMessage({method:e,id:l,args:o},w)}),u={},F=["load","ready","code","console","tests","destroy"],U=(e,o)=>{var t;if(S)throw new Error(R);return F.includes(e)?(d("watch",[e]),u[e]||(u[e]=[]),(t=u[e])==null||t.push(o),{remove:()=>{var r,l;u[e]=(r=u[e])==null?void 0:r.filter(f=>f!==o),((l=u[e])==null?void 0:l.length)===0&&d("watch",[e,"unsubscribe"])}}):{remove:()=>{}}},J=e=>({"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"})[e];addEventListener("message",async e=>{var r,l,f,E;let o=J((l=(r=e.data)==null?void 0:r.type)!=null?l:"");if(e.source!==y.contentWindow||e.origin!==w||!o||!u[o])return;let t=(f=e.data)==null?void 0:f.payload;(E=u[o])==null||E.forEach(c=>{c(t)})});let k=()=>{var e;Object.values(u).forEach(o=>{o.length=0}),(e=y==null?void 0:y.remove)==null||e.call(y),S=!0};g==="lazy"&&"IntersectionObserver"in window&&new IntersectionObserver((o,t)=>{o.forEach(async r=>{r.isIntersecting&&(await I(),t.unobserve(s))})},{rootMargin:"150px"}).observe(s);function j(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}let Q=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>I(),run:()=>d("run"),format:e=>d("format",[e]),getShareUrl:e=>d("getShareUrl",[e]),getConfig:e=>d("getConfig",[e]),setConfig:e=>d("setConfig",[e]),getCode:()=>d("getCode"),show:(e,o)=>d("show",[e,o]),runTests:()=>d("runTests"),onChange:e=>U("code",e),watch:U,exec:(e,...o)=>d("exec",[e,...o]),destroy:()=>H.settled?d("destroy").then(k):S?Promise.reject(R):(k(),Promise.resolve())}}var q;globalThis.document&&document.currentScript&&"prefill"in((q=document.currentScript)==null?void 0:q.dataset)&&window.addEventListener("load",()=>{document.querySelectorAll(".livecodes").forEach(n=>{let h,v=n.dataset.options;if(v)try{h=JSON.parse(v)}catch(b){}let m,a=n.dataset.config||n.dataset.prefill;if(a)try{m=JSON.parse(a)}catch(b){}A(n,{import:"dom/"+encodeURIComponent(n.outerHTML),...h,...m?{config:m}:{}})})});function V(n){let{className:h,style:v,height:m,sdkReady:a,...b}=n,L=G(null),g;return B(()=>{if(L.current)return A(L.current,b).then(C=>{g=C,typeof a=="function"&&a(C)}),()=>{g==null||g.destroy()}},[]),$.createElement("div",{ref:L,className:h,style:v,"data-height":m})}export{V as default};