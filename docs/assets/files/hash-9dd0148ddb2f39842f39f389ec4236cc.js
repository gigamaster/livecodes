const fs=require("fs"),crypto=require("crypto"),applyHash=async({devMode:e=!1,buildDir:t="build/livecodes/",entryPoint:s="index.js",patchFiles:i=["build/index.html"],hashPattern:r=/{{hash:([\w\.-]+)}}/g}={})=>{const a=["js","css","html","svg","ico","png","json"],o=async e=>(await fs.promises.readdir(e)).filter((t=>!fs.statSync(e+t).isDirectory())).filter((e=>a.some((t=>e.endsWith("."+t)))));if(e)return(async()=>{const e=await(async e=>{const t=[];for(const s of e)(await o(s)).forEach((e=>{t.push(s+e)}));return t})([t]);for(const t of[...i,...e]){const e=(await fs.promises.readFile(t,"utf8")).replace(new RegExp(r),((e,t)=>t));await fs.promises.writeFile(t,e,"utf8")}})();const n=e=>{const t=e.split(".");return e.length<35||t.length<3?e:t.filter(((e,t)=>32!==e.length||0===t)).join(".")},c={},f=async s=>{if(c[s])return;c[s]="waiting";const i=await fs.promises.readFile(t+s,"utf8").catch((t=>{if(e)return"";throw t})),o=i.matchAll(new RegExp(r));for(const e of o){const t=e[1];t&&!c[t]&&await f(t)}const l=i.replace(new RegExp(r),((e,t)=>c[t]));if(e)return c[s]=s,void await fs.promises.writeFile(t+s,l,"utf8");const p=(e=>crypto.createHash("md5").update(e).digest("hex"))(l),h=((e,t)=>{const s=a.find((t=>e.endsWith("."+t)));return s&&(e=n(e).replace(`.${s}`,`.${t}.${s}`)),e})(s,p);c[s]=h,await fs.promises.writeFile(t+h,l,"utf8")};await f(s);for(const l of Object.keys(c))c[l]!==l&&await fs.promises.unlink(t+l).catch((t=>{if(!e)throw t}));for(const l of i){const e=(await fs.promises.readFile(l,"utf8")).replace(new RegExp(r),((e,t)=>c[t]));await fs.promises.writeFile(l,e,"utf8")}};module.exports={applyHash:applyHash},require.main===module&&applyHash();