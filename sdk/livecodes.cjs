"use strict";var F=Object.create;var H=Object.defineProperty;var V=Object.getOwnPropertyDescriptor;var ee=Object.getOwnPropertyNames;var te=Object.getPrototypeOf,oe=Object.prototype.hasOwnProperty;var ne=(c,y)=>()=>(y||c((y={exports:{}}).exports,y),y.exports),re=(c,y)=>{for(var b in y)H(c,b,{get:y[b],enumerable:!0})},Z=(c,y,b,w)=>{if(y&&typeof y=="object"||typeof y=="function")for(let v of ee(y))!oe.call(c,v)&&v!==b&&H(c,v,{get:()=>y[v],enumerable:!(w=V(y,v))||w.enumerable});return c};var se=(c,y,b)=>(b=c!=null?F(te(c)):{},Z(y||!c||!c.__esModule?H(b,"default",{value:c,enumerable:!0}):b,c)),ie=c=>Z(H({},"__esModule",{value:!0}),c);var N=ne((fe,k)=>{var ae=function(){var c=String.fromCharCode,y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",w={};function v(o,n){if(!w[o]){w[o]={};for(var d=0;d<o.length;d++)w[o][o.charAt(d)]=d}return w[o][n]}var S={compressToBase64:function(o){if(o==null)return"";var n=S._compress(o,6,function(d){return y.charAt(d)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:S._decompress(o.length,32,function(n){return v(y,o.charAt(n))})},compressToUTF16:function(o){return o==null?"":S._compress(o,15,function(n){return c(n+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:S._decompress(o.length,16384,function(n){return o.charCodeAt(n)-32})},compressToUint8Array:function(o){for(var n=S.compress(o),d=new Uint8Array(n.length*2),s=0,i=n.length;s<i;s++){var a=n.charCodeAt(s);d[s*2]=a>>>8,d[s*2+1]=a%256}return d},decompressFromUint8Array:function(o){if(o==null)return S.decompress(o);for(var n=new Array(o.length/2),d=0,s=n.length;d<s;d++)n[d]=o[d*2]*256+o[d*2+1];var i=[];return n.forEach(function(a){i.push(c(a))}),S.decompress(i.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":S._compress(o,6,function(n){return b.charAt(n)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),S._decompress(o.length,32,function(n){return v(b,o.charAt(n))}))},compress:function(o){return S._compress(o,16,function(n){return c(n)})},_compress:function(o,n,d){if(o==null)return"";var s,i,a={},m={},E="",P="",h="",x=2,A=3,f=2,p=[],e=0,t=0,L;for(L=0;L<o.length;L+=1)if(E=o.charAt(L),Object.prototype.hasOwnProperty.call(a,E)||(a[E]=A++,m[E]=!0),P=h+E,Object.prototype.hasOwnProperty.call(a,P))h=P;else{if(Object.prototype.hasOwnProperty.call(m,h)){if(h.charCodeAt(0)<256){for(s=0;s<f;s++)e=e<<1,t==n-1?(t=0,p.push(d(e)),e=0):t++;for(i=h.charCodeAt(0),s=0;s<8;s++)e=e<<1|i&1,t==n-1?(t=0,p.push(d(e)),e=0):t++,i=i>>1}else{for(i=1,s=0;s<f;s++)e=e<<1|i,t==n-1?(t=0,p.push(d(e)),e=0):t++,i=0;for(i=h.charCodeAt(0),s=0;s<16;s++)e=e<<1|i&1,t==n-1?(t=0,p.push(d(e)),e=0):t++,i=i>>1}x--,x==0&&(x=Math.pow(2,f),f++),delete m[h]}else for(i=a[h],s=0;s<f;s++)e=e<<1|i&1,t==n-1?(t=0,p.push(d(e)),e=0):t++,i=i>>1;x--,x==0&&(x=Math.pow(2,f),f++),a[P]=A++,h=String(E)}if(h!==""){if(Object.prototype.hasOwnProperty.call(m,h)){if(h.charCodeAt(0)<256){for(s=0;s<f;s++)e=e<<1,t==n-1?(t=0,p.push(d(e)),e=0):t++;for(i=h.charCodeAt(0),s=0;s<8;s++)e=e<<1|i&1,t==n-1?(t=0,p.push(d(e)),e=0):t++,i=i>>1}else{for(i=1,s=0;s<f;s++)e=e<<1|i,t==n-1?(t=0,p.push(d(e)),e=0):t++,i=0;for(i=h.charCodeAt(0),s=0;s<16;s++)e=e<<1|i&1,t==n-1?(t=0,p.push(d(e)),e=0):t++,i=i>>1}x--,x==0&&(x=Math.pow(2,f),f++),delete m[h]}else for(i=a[h],s=0;s<f;s++)e=e<<1|i&1,t==n-1?(t=0,p.push(d(e)),e=0):t++,i=i>>1;x--,x==0&&(x=Math.pow(2,f),f++)}for(i=2,s=0;s<f;s++)e=e<<1|i&1,t==n-1?(t=0,p.push(d(e)),e=0):t++,i=i>>1;for(;;)if(e=e<<1,t==n-1){p.push(d(e));break}else t++;return p.join("")},decompress:function(o){return o==null?"":o==""?null:S._decompress(o.length,32768,function(n){return o.charCodeAt(n)})},_decompress:function(o,n,d){var s=[],i,a=4,m=4,E=3,P="",h=[],x,A,f,p,e,t,L,l={val:d(0),position:n,index:1};for(x=0;x<3;x+=1)s[x]=x;for(f=0,e=Math.pow(2,2),t=1;t!=e;)p=l.val&l.position,l.position>>=1,l.position==0&&(l.position=n,l.val=d(l.index++)),f|=(p>0?1:0)*t,t<<=1;switch(i=f){case 0:for(f=0,e=Math.pow(2,8),t=1;t!=e;)p=l.val&l.position,l.position>>=1,l.position==0&&(l.position=n,l.val=d(l.index++)),f|=(p>0?1:0)*t,t<<=1;L=c(f);break;case 1:for(f=0,e=Math.pow(2,16),t=1;t!=e;)p=l.val&l.position,l.position>>=1,l.position==0&&(l.position=n,l.val=d(l.index++)),f|=(p>0?1:0)*t,t<<=1;L=c(f);break;case 2:return""}for(s[3]=L,A=L,h.push(L);;){if(l.index>o)return"";for(f=0,e=Math.pow(2,E),t=1;t!=e;)p=l.val&l.position,l.position>>=1,l.position==0&&(l.position=n,l.val=d(l.index++)),f|=(p>0?1:0)*t,t<<=1;switch(L=f){case 0:for(f=0,e=Math.pow(2,8),t=1;t!=e;)p=l.val&l.position,l.position>>=1,l.position==0&&(l.position=n,l.val=d(l.index++)),f|=(p>0?1:0)*t,t<<=1;s[m++]=c(f),L=m-1,a--;break;case 1:for(f=0,e=Math.pow(2,16),t=1;t!=e;)p=l.val&l.position,l.position>>=1,l.position==0&&(l.position=n,l.val=d(l.index++)),f|=(p>0?1:0)*t,t<<=1;s[m++]=c(f),L=m-1,a--;break;case 2:return h.join("")}if(a==0&&(a=Math.pow(2,E),E++),s[L])P=s[L];else if(L===m)P=A+A.charAt(0);else return null;h.push(P),s[m++]=A+P.charAt(0),a--,A=P,a==0&&(a=Math.pow(2,E),E++)}}};return S}();typeof k!="undefined"&&k!=null&&(k.exports=ae)});var ce={};re(ce,{createPlayground:()=>$,getPlaygroundUrl:()=>le});module.exports=ie(ce);var G=se(N());async function $(c,y={}){typeof c=="object"&&!(c instanceof HTMLElement)&&c.view==="headless"&&(y=c,c=null);let{appUrl:b="https://gigamaster.github.io/livecodes/",params:w={},config:v={},import:S,lite:o,loading:n="lazy",template:d,view:s="split"}=y,i=s==="headless",a=null;if(typeof c=="string")a=document.querySelector(c);else if(c instanceof HTMLElement)a=c;else if(!(i&&typeof c=="object"))throw new Error("A valid container element is required.");if(!a)if(i)a=document.createElement("div"),z(a),document.body.appendChild(a);else throw new Error(`Cannot find element: "${c}"`);let m;try{m=new URL(b)}catch(r){throw new Error(`"${b}" is not a valid URL.`)}let E=m.origin;if(typeof w=="object"&&Object.keys(w).forEach(r=>{m.searchParams.set(r,String(w[r]))}),typeof v=="string")try{new URL(v),m.searchParams.set("config",v)}catch(r){throw new Error('"config" is not a valid URL or configuration object.')}else if(typeof v=="object")Object.keys(v).length>0&&m.searchParams.set("config","sdk");else throw new Error('"config" is not a valid URL or configuration object.');d&&m.searchParams.set("template",d),S&&m.searchParams.set("x",S),o&&m.searchParams.set("lite","true"),m.searchParams.set("embed","true"),m.searchParams.set("loading",i?"eager":n),m.searchParams.set("view",s);let P=!1,h="Cannot call API methods after calling `destroy()`.",A=await new Promise(r=>{var O,T,C,U,R,j,_,W,B;if(!a)return;let g=a.dataset.height||a.style.height;if(g&&!i){let D=isNaN(Number(g))?g:g+"px";a.style.height=D}a.dataset.defaultStyles!=="false"&&!i&&((O=a.style).backgroundColor||(O.backgroundColor="#fff"),(T=a.style).border||(T.border="1px solid black"),(C=a.style).borderRadius||(C.borderRadius="4px"),(U=a.style).boxSizing||(U.boxSizing="border-box"),(R=a.style).padding||(R.padding="0"),(j=a.style).width||(j.width="100%"),(_=a.style).height||(_.height=a.style.height||"300px"),a.style.minHeight="200px",a.style.flexGrow="1",(W=a.style).overflow||(W.overflow="hidden"),(B=a.style).resize||(B.resize="vertical"));let u=document.createElement("iframe");u.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),u.setAttribute("allowtransparency","true"),u.setAttribute("allowpaymentrequest","true"),u.setAttribute("allowfullscreen","true"),u.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");let M=n==="eager"?"eager":"lazy";u.setAttribute("loading",M),u.classList.add("livecodes"),i?z(u):(u.style.height="100%",u.style.minHeight="200px",u.style.width="100%",u.style.margin="0",u.style.border="0",u.style.borderRadius=a.style.borderRadius),addEventListener("message",function D(I){var J,q;I.source!==u.contentWindow||I.origin!==E||((J=I.data)==null?void 0:J.type)!=="livecodes-get-config"||(removeEventListener("message",D),(q=u.contentWindow)==null||q.postMessage({type:"livecodes-config",payload:v},E))}),u.onload=()=>{r(u)},u.src=m.href,a.appendChild(u)}),f=new Promise(r=>{addEventListener("message",function g(u){var M;u.source!==A.contentWindow||u.origin!==E||((M=u.data)==null?void 0:M.type)!=="livecodes-ready"||(removeEventListener("message",g),r(),f.settled=!0)})}),p=()=>P?Promise.reject(h):new Promise(async r=>{var u;f.settled&&r();let g={type:"livecodes-load"};(u=A.contentWindow)==null||u.postMessage(g,E),await f,r()}),e=(r,g)=>new Promise(async(u,M)=>{var T;if(P)return M(h);await p();let O=Y();addEventListener("message",function C(U){var R,j;if(!(U.source!==A.contentWindow||U.origin!==E||((R=U.data)==null?void 0:R.type)!=="livecodes-api-response"||((j=U.data)==null?void 0:j.id)!==O)&&U.data.method===r){removeEventListener("message",C);let _=U.data.payload;_!=null&&_.error?M(_.error):u(_)}}),(T=A.contentWindow)==null||T.postMessage({method:r,id:O,args:g},E)}),t={},L=["load","ready","code","console","tests","destroy"],l=(r,g)=>{var u;if(P)throw new Error(h);return L.includes(r)?(e("watch",[r]),t[r]||(t[r]=[]),(u=t[r])==null||u.push(g),{remove:()=>{var M,O;t[r]=(M=t[r])==null?void 0:M.filter(T=>T!==g),((O=t[r])==null?void 0:O.length)===0&&e("watch",[r,"unsubscribe"])}}):{remove:()=>{}}},X=r=>({"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"})[r];addEventListener("message",async r=>{var M,O,T,C;let g=X((O=(M=r.data)==null?void 0:M.type)!=null?O:"");if(r.source!==A.contentWindow||r.origin!==E||!g||!t[g])return;let u=(T=r.data)==null?void 0:T.payload;(C=t[g])==null||C.forEach(U=>{U(u)})});let K=()=>{var r;Object.values(t).forEach(g=>{g.length=0}),(r=A==null?void 0:A.remove)==null||r.call(A),P=!0};n==="lazy"&&"IntersectionObserver"in window&&new IntersectionObserver((g,u)=>{g.forEach(async M=>{M.isIntersecting&&(await p(),u.unobserve(a))})},{rootMargin:"150px"}).observe(a);function z(r){r.style.position="absolute",r.style.top="0",r.style.visibility="hidden",r.style.opacity="0"}let Y=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>p(),run:()=>e("run"),format:r=>e("format",[r]),getShareUrl:r=>e("getShareUrl",[r]),getConfig:r=>e("getConfig",[r]),setConfig:r=>e("setConfig",[r]),getCode:()=>e("getCode"),show:(r,g)=>e("show",[r,g]),runTests:()=>e("runTests"),onChange:r=>l("code",r),watch:l,exec:(r,...g)=>e("exec",[r,...g]),destroy:()=>f.settled?e("destroy").then(K):P?Promise.reject(h):(K(),Promise.resolve())}}function le(c={}){let{appUrl:y,params:b,config:w,import:v,...S}=c,o=typeof w=="string"?{config:w}:typeof w=="object"?{x:"code/"+(0,G.compressToEncodedURIComponent)(JSON.stringify(w))}:{},n=new URLSearchParams(JSON.parse(JSON.stringify({...S,...b,x:v,...o}))).toString();return(y||"https://gigamaster.github.io/livecodes/")+(n?"?"+n:"")}var Q;globalThis.document&&document.currentScript&&"prefill"in((Q=document.currentScript)==null?void 0:Q.dataset)&&window.addEventListener("load",()=>{document.querySelectorAll(".livecodes").forEach(c=>{let y,b=c.dataset.options;if(b)try{y=JSON.parse(b)}catch(o){}let w,v=c.dataset.config||c.dataset.prefill;if(v)try{w=JSON.parse(v)}catch(o){}let S=encodeURIComponent(c.outerHTML);c.innerHTML="",$(c,{import:"dom/"+S,...y,...w?{config:w}:{}})})});
