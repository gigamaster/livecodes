var F=Object.create;var Q=Object.defineProperty;var V=Object.getOwnPropertyDescriptor;var ee=Object.getOwnPropertyNames;var te=Object.getPrototypeOf,oe=Object.prototype.hasOwnProperty;var ne=(c,g)=>()=>(g||c((g={exports:{}}).exports,g),g.exports);var re=(c,g,C,O)=>{if(g&&typeof g=="object"||typeof g=="function")for(let v of ee(g))!oe.call(c,v)&&v!==C&&Q(c,v,{get:()=>g[v],enumerable:!(O=V(g,v))||O.enumerable});return c};var ie=(c,g,C)=>(C=c!=null?F(te(c)):{},re(g||!c||!c.__esModule?Q(C,"default",{value:c,enumerable:!0}):C,c));var G=ne((me,j)=>{var se=function(){var c=String.fromCharCode,g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",O={};function v(o,r){if(!O[o]){O[o]={};for(var d=0;d<o.length;d++)O[o][o.charAt(d)]=d}return O[o][r]}var b={compressToBase64:function(o){if(o==null)return"";var r=b._compress(o,6,function(d){return g.charAt(d)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:b._decompress(o.length,32,function(r){return v(g,o.charAt(r))})},compressToUTF16:function(o){return o==null?"":b._compress(o,15,function(r){return c(r+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:b._decompress(o.length,16384,function(r){return o.charCodeAt(r)-32})},compressToUint8Array:function(o){for(var r=b.compress(o),d=new Uint8Array(r.length*2),i=0,a=r.length;i<a;i++){var n=r.charCodeAt(i);d[i*2]=n>>>8,d[i*2+1]=n%256}return d},decompressFromUint8Array:function(o){if(o==null)return b.decompress(o);for(var r=new Array(o.length/2),d=0,i=r.length;d<i;d++)r[d]=o[d*2]*256+o[d*2+1];var a=[];return r.forEach(function(n){a.push(c(n))}),b.decompress(a.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":b._compress(o,6,function(r){return C.charAt(r)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),b._decompress(o.length,32,function(r){return v(C,o.charAt(r))}))},compress:function(o){return b._compress(o,16,function(r){return c(r)})},_compress:function(o,r,d){if(o==null)return"";var i,a,n={},u={},E="",S="",m="",P=2,w=3,f=2,y=[],e=0,t=0,x;for(x=0;x<o.length;x+=1)if(E=o.charAt(x),Object.prototype.hasOwnProperty.call(n,E)||(n[E]=w++,u[E]=!0),S=m+E,Object.prototype.hasOwnProperty.call(n,S))m=S;else{if(Object.prototype.hasOwnProperty.call(u,m)){if(m.charCodeAt(0)<256){for(i=0;i<f;i++)e=e<<1,t==r-1?(t=0,y.push(d(e)),e=0):t++;for(a=m.charCodeAt(0),i=0;i<8;i++)e=e<<1|a&1,t==r-1?(t=0,y.push(d(e)),e=0):t++,a=a>>1}else{for(a=1,i=0;i<f;i++)e=e<<1|a,t==r-1?(t=0,y.push(d(e)),e=0):t++,a=0;for(a=m.charCodeAt(0),i=0;i<16;i++)e=e<<1|a&1,t==r-1?(t=0,y.push(d(e)),e=0):t++,a=a>>1}P--,P==0&&(P=Math.pow(2,f),f++),delete u[m]}else for(a=n[m],i=0;i<f;i++)e=e<<1|a&1,t==r-1?(t=0,y.push(d(e)),e=0):t++,a=a>>1;P--,P==0&&(P=Math.pow(2,f),f++),n[S]=w++,m=String(E)}if(m!==""){if(Object.prototype.hasOwnProperty.call(u,m)){if(m.charCodeAt(0)<256){for(i=0;i<f;i++)e=e<<1,t==r-1?(t=0,y.push(d(e)),e=0):t++;for(a=m.charCodeAt(0),i=0;i<8;i++)e=e<<1|a&1,t==r-1?(t=0,y.push(d(e)),e=0):t++,a=a>>1}else{for(a=1,i=0;i<f;i++)e=e<<1|a,t==r-1?(t=0,y.push(d(e)),e=0):t++,a=0;for(a=m.charCodeAt(0),i=0;i<16;i++)e=e<<1|a&1,t==r-1?(t=0,y.push(d(e)),e=0):t++,a=a>>1}P--,P==0&&(P=Math.pow(2,f),f++),delete u[m]}else for(a=n[m],i=0;i<f;i++)e=e<<1|a&1,t==r-1?(t=0,y.push(d(e)),e=0):t++,a=a>>1;P--,P==0&&(P=Math.pow(2,f),f++)}for(a=2,i=0;i<f;i++)e=e<<1|a&1,t==r-1?(t=0,y.push(d(e)),e=0):t++,a=a>>1;for(;;)if(e=e<<1,t==r-1){y.push(d(e));break}else t++;return y.join("")},decompress:function(o){return o==null?"":o==""?null:b._decompress(o.length,32768,function(r){return o.charCodeAt(r)})},_decompress:function(o,r,d){var i=[],a,n=4,u=4,E=3,S="",m=[],P,w,f,y,e,t,x,l={val:d(0),position:r,index:1};for(P=0;P<3;P+=1)i[P]=P;for(f=0,e=Math.pow(2,2),t=1;t!=e;)y=l.val&l.position,l.position>>=1,l.position==0&&(l.position=r,l.val=d(l.index++)),f|=(y>0?1:0)*t,t<<=1;switch(a=f){case 0:for(f=0,e=Math.pow(2,8),t=1;t!=e;)y=l.val&l.position,l.position>>=1,l.position==0&&(l.position=r,l.val=d(l.index++)),f|=(y>0?1:0)*t,t<<=1;x=c(f);break;case 1:for(f=0,e=Math.pow(2,16),t=1;t!=e;)y=l.val&l.position,l.position>>=1,l.position==0&&(l.position=r,l.val=d(l.index++)),f|=(y>0?1:0)*t,t<<=1;x=c(f);break;case 2:return""}for(i[3]=x,w=x,m.push(x);;){if(l.index>o)return"";for(f=0,e=Math.pow(2,E),t=1;t!=e;)y=l.val&l.position,l.position>>=1,l.position==0&&(l.position=r,l.val=d(l.index++)),f|=(y>0?1:0)*t,t<<=1;switch(x=f){case 0:for(f=0,e=Math.pow(2,8),t=1;t!=e;)y=l.val&l.position,l.position>>=1,l.position==0&&(l.position=r,l.val=d(l.index++)),f|=(y>0?1:0)*t,t<<=1;i[u++]=c(f),x=u-1,n--;break;case 1:for(f=0,e=Math.pow(2,16),t=1;t!=e;)y=l.val&l.position,l.position>>=1,l.position==0&&(l.position=r,l.val=d(l.index++)),f|=(y>0?1:0)*t,t<<=1;i[u++]=c(f),x=u-1,n--;break;case 2:return m.join("")}if(n==0&&(n=Math.pow(2,E),E++),i[x])S=i[x];else if(x===u)S=w+w.charAt(0);else return null;m.push(S),i[u++]=w+S.charAt(0),n--,w=S,n==0&&(n=Math.pow(2,E),E++)}}};return b}();typeof j!="undefined"&&j!=null&&(j.exports=se)});import{h as le,onMounted as ce,onUnmounted as de,ref as J,watch as fe}from"vue";var ae=ie(G());async function H(c,g={}){typeof c=="object"&&!(c instanceof HTMLElement)&&c.view==="headless"&&(g=c,c=null);let{appUrl:C="https://gigamaster.github.io/livecodes/",params:O={},config:v={},import:b,lite:o,loading:r="lazy",template:d,view:i="split"}=g,a=i==="headless",n=null;if(typeof c=="string")n=document.querySelector(c);else if(c instanceof HTMLElement)n=c;else if(!(a&&typeof c=="object"))throw new Error("A valid container element is required.");if(!n)if(a)n=document.createElement("div"),z(n),document.body.appendChild(n);else throw new Error(`Cannot find element: "${c}"`);let u;try{u=new URL(C)}catch(s){throw new Error(`"${C}" is not a valid URL.`)}let E=u.origin;if(typeof O=="object"&&Object.keys(O).forEach(s=>{u.searchParams.set(s,String(O[s]))}),typeof v=="string")try{new URL(v),u.searchParams.set("config",v)}catch(s){throw new Error('"config" is not a valid URL or configuration object.')}else if(typeof v=="object")Object.keys(v).length>0&&u.searchParams.set("config","sdk");else throw new Error('"config" is not a valid URL or configuration object.');d&&u.searchParams.set("template",d),b&&u.searchParams.set("x",b),o&&u.searchParams.set("lite","true"),u.searchParams.set("embed","true"),u.searchParams.set("loading",a?"eager":r),u.searchParams.set("view",i);let S=!1,m="Cannot call API methods after calling `destroy()`.",w=await new Promise(s=>{var L,R,U,M,k,_,T,B,W;if(!n)return;let h=n.dataset.height||n.style.height;if(h&&!a){let N=isNaN(Number(h))?h:h+"px";n.style.height=N}n.dataset.defaultStyles!=="false"&&!a&&((L=n.style).backgroundColor||(L.backgroundColor="#fff"),(R=n.style).border||(R.border="1px solid black"),(U=n.style).borderRadius||(U.borderRadius="4px"),(M=n.style).boxSizing||(M.boxSizing="border-box"),(k=n.style).padding||(k.padding="0"),(_=n.style).width||(_.width="100%"),(T=n.style).height||(T.height=n.style.height||"300px"),n.style.minHeight="200px",n.style.flexGrow="1",(B=n.style).overflow||(B.overflow="hidden"),(W=n.style).resize||(W.resize="vertical"));let p=document.createElement("iframe");p.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),p.setAttribute("allowtransparency","true"),p.setAttribute("allowpaymentrequest","true"),p.setAttribute("allowfullscreen","true"),p.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");let A=r==="eager"?"eager":"lazy";p.setAttribute("loading",A),p.classList.add("livecodes"),a?z(p):(p.style.height="100%",p.style.minHeight="200px",p.style.width="100%",p.style.margin="0",p.style.border="0",p.style.borderRadius=n.style.borderRadius),addEventListener("message",function N(D){var q,Z;D.source!==p.contentWindow||D.origin!==E||((q=D.data)==null?void 0:q.type)!=="livecodes-get-config"||(removeEventListener("message",N),(Z=p.contentWindow)==null||Z.postMessage({type:"livecodes-config",payload:v},E))}),p.onload=()=>{s(p)},p.src=u.href,n.appendChild(p)}),f=new Promise(s=>{addEventListener("message",function h(p){var A;p.source!==w.contentWindow||p.origin!==E||((A=p.data)==null?void 0:A.type)!=="livecodes-ready"||(removeEventListener("message",h),s(),f.settled=!0)})}),y=()=>S?Promise.reject(m):new Promise(async s=>{var p;f.settled&&s();let h={type:"livecodes-load"};(p=w.contentWindow)==null||p.postMessage(h,E),await f,s()}),e=(s,h)=>new Promise(async(p,A)=>{var R;if(S)return A(m);await y();let L=Y();addEventListener("message",function U(M){var k,_;if(!(M.source!==w.contentWindow||M.origin!==E||((k=M.data)==null?void 0:k.type)!=="livecodes-api-response"||((_=M.data)==null?void 0:_.id)!==L)&&M.data.method===s){removeEventListener("message",U);let T=M.data.payload;T!=null&&T.error?A(T.error):p(T)}}),(R=w.contentWindow)==null||R.postMessage({method:s,id:L,args:h},E)}),t={},x=["load","ready","code","console","tests","destroy"],l=(s,h)=>{var p;if(S)throw new Error(m);return x.includes(s)?(e("watch",[s]),t[s]||(t[s]=[]),(p=t[s])==null||p.push(h),{remove:()=>{var A,L;t[s]=(A=t[s])==null?void 0:A.filter(R=>R!==h),((L=t[s])==null?void 0:L.length)===0&&e("watch",[s,"unsubscribe"])}}):{remove:()=>{}}},X=s=>({"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"})[s];addEventListener("message",async s=>{var A,L,R,U;let h=X((L=(A=s.data)==null?void 0:A.type)!=null?L:"");if(s.source!==w.contentWindow||s.origin!==E||!h||!t[h])return;let p=(R=s.data)==null?void 0:R.payload;(U=t[h])==null||U.forEach(M=>{M(p)})});let K=()=>{var s;Object.values(t).forEach(h=>{h.length=0}),(s=w==null?void 0:w.remove)==null||s.call(w),S=!0};r==="lazy"&&"IntersectionObserver"in window&&new IntersectionObserver((h,p)=>{h.forEach(async A=>{A.isIntersecting&&(await y(),p.unobserve(n))})},{rootMargin:"150px"}).observe(n);function z(s){s.style.position="absolute",s.style.top="0",s.style.visibility="hidden",s.style.opacity="0"}let Y=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>y(),run:()=>e("run"),format:s=>e("format",[s]),getShareUrl:s=>e("getShareUrl",[s]),getConfig:s=>e("getConfig",[s]),setConfig:s=>e("setConfig",[s]),getCode:()=>e("getCode"),show:(s,h)=>e("show",[s,h]),runTests:()=>e("runTests"),onChange:s=>l("code",s),watch:l,exec:(s,...h)=>e("exec",[s,...h]),destroy:()=>f.settled?e("destroy").then(K):S?Promise.reject(m):(K(),Promise.resolve())}}var $;globalThis.document&&document.currentScript&&"prefill"in(($=document.currentScript)==null?void 0:$.dataset)&&window.addEventListener("load",()=>{document.querySelectorAll(".livecodes").forEach(c=>{let g,C=c.dataset.options;if(C)try{g=JSON.parse(C)}catch(o){}let O,v=c.dataset.config||c.dataset.prefill;if(v)try{O=JSON.parse(v)}catch(o){}let b=encodeURIComponent(c.outerHTML);c.innerHTML="",H(c,{import:"dom/"+b,...g,...O?{config:O}:{}})})});var pe={appUrl:String,config:[Object,String],import:String,lite:Boolean,loading:String,params:Object,template:String,view:String,height:String},I=c=>JSON.parse(JSON.stringify(c)),ue={props:pe,emits:["sdkReady"],setup(c,g){let{height:C,...O}=c,v=J(),b=J(C||""),o=J(),{config:r,...d}=O,i=JSON.stringify(r),a=JSON.stringify(d);return ce(()=>{v.value&&H(v.value,I(O)).then(n=>{o.value=n,g.emit("sdkReady",n)})}),fe(c,async n=>{var P;if(!v.value||!o.value)return;let{height:u,...E}=n;b.value=u||"";let{config:S,...m}=E;typeof S=="string"&&(S=await fetch(S).then(w=>w.json())),JSON.stringify(m)!==a?(await((P=o.value)==null?void 0:P.destroy()),H(v.value,I(E)).then(w=>{o.value=w,g.emit("sdkReady",w)})):JSON.stringify(S)!==i&&o.value.setConfig(I(S)||{}),i=JSON.stringify(S),a=JSON.stringify(m)}),de(()=>{var n;(n=o.value)==null||n.destroy()}),()=>{var n,u;return le("div",{ref:v,"data-height":b},((u=(n=g.slots).default)==null?void 0:u.call(n))||"")}}},we=ue;export{we as default};
