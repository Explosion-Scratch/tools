import{_ as i}from"../chunks/preload-helper-1dabcde2.js";import{S as v,i as E,s as w,w as c,l,x as $,y as m,g as P,o as f,p as h,q as p,d as g,B as d,n as y}from"../chunks/index-5ae6d557.js";import{t as D}from"../chunks/tools-a59d1f99.js";function L(r){switch(r){case"../tools/base64Encode.svelte":return i(()=>import("../chunks/base64Encode-de6243b7.js"),["chunks/base64Encode-de6243b7.js","chunks/index-5ae6d557.js"]);case"../tools/beautify.svelte":return i(()=>import("../chunks/beautify-89d7b0fa.js"),["chunks/beautify-89d7b0fa.js","assets/beautify-76460fd6.css","chunks/index-5ae6d557.js","chunks/ToastContainer-910eb6e0.js","assets/ToastContainer-b2ea7ee0.css","chunks/index-d9c746fe.js","chunks/index-cdbb486a.js","chunks/TippyStyles-a1a2a87b.js","chunks/tooltip-899db86d.js"]);case"../tools/blankPage.svelte":return i(()=>import("../chunks/blankPage-9f77b4ea.js"),["chunks/blankPage-9f77b4ea.js","chunks/index-5ae6d557.js"]);case"../tools/bookmarklets.svelte":return i(()=>import("../chunks/bookmarklets-4b6969f2.js"),["chunks/bookmarklets-4b6969f2.js","assets/bookmarklets-84dc1bca.css","chunks/index-5ae6d557.js","chunks/tooltip-899db86d.js","chunks/index-cdbb486a.js"]);case"../tools/dictionary.svelte":return i(()=>import("../chunks/dictionary-d217a896.js"),["chunks/dictionary-d217a896.js","assets/dictionary-5cfd15f7.css","chunks/index-5ae6d557.js","chunks/bijou-106d2215.js"]);case"../tools/emojiPicker.svelte":return i(()=>import("../chunks/emojiPicker-9a67a0b8.js"),["chunks/emojiPicker-9a67a0b8.js","assets/emojiPicker-d0a98c5f.css","chunks/index-5ae6d557.js","chunks/TippyStyles-a1a2a87b.js","chunks/ToastContainer-910eb6e0.js","assets/ToastContainer-b2ea7ee0.css","chunks/index-d9c746fe.js","chunks/index-cdbb486a.js","chunks/bijou-106d2215.js","chunks/tooltip-899db86d.js"]);case"../tools/hashing.svelte":return i(()=>import("../chunks/hashing-ab4fbda8.js"),["chunks/hashing-ab4fbda8.js","assets/hashing-6eab339b.css","chunks/index-5ae6d557.js","chunks/ToastContainer-910eb6e0.js","assets/ToastContainer-b2ea7ee0.css","chunks/index-d9c746fe.js","chunks/index-cdbb486a.js"]);case"../tools/morse.svelte":return i(()=>import("../chunks/morse-48b47fcc.js"),["chunks/morse-48b47fcc.js","assets/morse-ff737053.css","chunks/index-5ae6d557.js"]);case"../tools/statistics.svelte":return i(()=>import("../chunks/statistics-1550acb1.js"),["chunks/statistics-1550acb1.js","assets/statistics-7a68c10b.css","chunks/index-5ae6d557.js"]);default:return new Promise(function(t,o){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+r)))})}}function I(r){let t,o,s;var n=r[0];function _(e){return{}}return n&&(t=new n(_())),{c(){t&&c(t.$$.fragment),o=l()},l(e){t&&$(t.$$.fragment,e),o=l()},m(e,a){t&&m(t,e,a),P(e,o,a),s=!0},p(e,[a]){if(n!==(n=e[0])){if(t){y();const u=t;f(u.$$.fragment,1,0,()=>{d(u,1)}),h()}n?(t=new n(_()),c(t.$$.fragment),p(t.$$.fragment,1),m(t,o.parentNode,o)):t=null}},i(e){s||(t&&p(t.$$.fragment,e),s=!0)},o(e){t&&f(t.$$.fragment,e),s=!1},d(e){e&&g(o),t&&d(t,e)}}}async function V({params:r,fetch:t}){let o=D.find(n=>n.id.toLowerCase()===r.path.toLowerCase());if(!o)throw new Error("Page not found");let{default:s}=await L(`../tools/${o.file.split(".")[0]}.svelte`);return{props:{component:s}}}function R(r,t,o){let{component:s=null}=t;return r.$$set=n=>{"component"in n&&o(0,s=n.component)},[s]}class k extends v{constructor(t){super(),E(this,t,R,I,w,{component:0})}}export{k as default,V as load};