import{_ as s}from"../chunks/preload-helper-8dd09053.js";import{S as v,i as E,s as w,w as c,l,x as $,y as m,g as P,o as f,p as h,q as p,d as y,B as d,n as g}from"../chunks/index-d503e6f5.js";import{t as D}from"../chunks/tools-e8f7e206.js";function L(r){switch(r){case"../tools/base64Encode.svelte":return s(()=>import("../chunks/base64Encode-ccf4a683.js"),["chunks/base64Encode-ccf4a683.js","chunks/index-d503e6f5.js"]);case"../tools/beautify.svelte":return s(()=>import("../chunks/beautify-065b931f.js"),["chunks/beautify-065b931f.js","assets/beautify-76460fd6.css","chunks/index-d503e6f5.js","chunks/ToastContainer-3f84850c.js","assets/ToastContainer-b2ea7ee0.css","chunks/index-ffd8c7ff.js","chunks/TippyStyles-cb1a82ad.js"]);case"../tools/blankPage.svelte":return s(()=>import("../chunks/blankPage-2789ac37.js"),["chunks/blankPage-2789ac37.js","chunks/index-d503e6f5.js"]);case"../tools/dictionary.svelte":return s(()=>import("../chunks/dictionary-bc61d0c0.js"),["chunks/dictionary-bc61d0c0.js","assets/dictionary-5cfd15f7.css","chunks/index-d503e6f5.js","chunks/bijou-106d2215.js"]);case"../tools/emojiPicker.svelte":return s(()=>import("../chunks/emojiPicker-199ea1ca.js"),["chunks/emojiPicker-199ea1ca.js","assets/emojiPicker-d0a98c5f.css","chunks/index-d503e6f5.js","chunks/TippyStyles-cb1a82ad.js","chunks/ToastContainer-3f84850c.js","assets/ToastContainer-b2ea7ee0.css","chunks/index-ffd8c7ff.js","chunks/bijou-106d2215.js"]);case"../tools/morse.svelte":return s(()=>import("../chunks/morse-f2c3f06f.js"),["chunks/morse-f2c3f06f.js","assets/morse-ff737053.css","chunks/index-d503e6f5.js"]);case"../tools/statistics.svelte":return s(()=>import("../chunks/statistics-682c2ea7.js"),["chunks/statistics-682c2ea7.js","assets/statistics-7a68c10b.css","chunks/index-d503e6f5.js"]);default:return new Promise(function(t,o){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+r)))})}}function I(r){let t,o,i;var n=r[0];function _(e){return{}}return n&&(t=new n(_())),{c(){t&&c(t.$$.fragment),o=l()},l(e){t&&$(t.$$.fragment,e),o=l()},m(e,a){t&&m(t,e,a),P(e,o,a),i=!0},p(e,[a]){if(n!==(n=e[0])){if(t){g();const u=t;f(u.$$.fragment,1,0,()=>{d(u,1)}),h()}n?(t=new n(_()),c(t.$$.fragment),p(t.$$.fragment,1),m(t,o.parentNode,o)):t=null}},i(e){i||(t&&p(t.$$.fragment,e),i=!0)},o(e){t&&f(t.$$.fragment,e),i=!1},d(e){e&&y(o),t&&d(t,e)}}}async function V({params:r,fetch:t}){let o=D.find(n=>n.id.toLowerCase()===r.path.toLowerCase());if(!o)throw new Error("Page not found");let{default:i}=await L(`../tools/${o.file.split(".")[0]}.svelte`);return{props:{component:i}}}function R(r,t,o){let{component:i=null}=t;return r.$$set=n=>{"component"in n&&o(0,i=n.component)},[i]}class b extends v{constructor(t){super(),E(this,t,R,I,w,{component:0})}}export{b as default,V as load};