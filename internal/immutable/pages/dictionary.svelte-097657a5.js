var te=Object.defineProperty,le=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var z=(s,e,t)=>e in s?te(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,B=(s,e)=>{for(var t in e||(e={}))se.call(e,t)&&z(s,t,e[t]);if(V)for(var t of V(e))ie.call(e,t)&&z(s,t,e[t]);return s},C=(s,e)=>le(s,oe(e));import{S as ne,i as ae,s as re,e as w,t as S,k as y,c as x,a as g,h as I,d,m as E,b as p,g as A,F as u,aj as R,O,E as P,U as fe,j as M,I as T,J as W,L as ee,l as q}from"../chunks/index-ae76fa84.js";import{_ as ce}from"../chunks/bijou-59a56aa5.js";function F(s,e,t){const l=s.slice();return l[1]=e[t],l}function J(s,e,t){const l=s.slice();return l[7]=e[t],l}function he(s){let e,t;return{c(){e=w("span"),t=S("No definition found"),this.h()},l(l){e=x(l,"SPAN",{class:!0});var o=g(e);t=I(o,"No definition found"),o.forEach(d),this.h()},h(){p(e,"class","noWords svelte-1jobvmf")},m(l,o){A(l,e,o),u(e,t)},p:P,d(l){l&&d(e)}}}function ve(s){let e,t=s[0],l=[];for(let o=0;o<t.length;o+=1)l[o]=X(F(s,t,o));return{c(){for(let o=0;o<l.length;o+=1)l[o].c();e=q()},l(o){for(let i=0;i<l.length;i+=1)l[i].l(o);e=q()},m(o,i){for(let a=0;a<l.length;a+=1)l[a].m(o,i);A(o,e,i)},p(o,i){if(i&1){t=o[0];let a;for(a=0;a<t.length;a+=1){const n=F(o,t,a);l[a]?l[a].p(n,i):(l[a]=X(n),l[a].c(),l[a].m(e.parentNode,e))}for(;a<l.length;a+=1)l[a].d(1);l.length=t.length}},d(o){ee(l,o),o&&d(e)}}}function Y(s){let e,t,l,o,i;function a(){return s[4](s[1])}return{c(){e=w("button"),t=T("svg"),l=T("path"),this.h()},l(n){e=x(n,"BUTTON",{class:!0});var f=g(e);t=W(f,"svg",{xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,role:!0,class:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var _=g(t);l=W(_,"path",{fill:!0,d:!0,class:!0}),g(l).forEach(d),_.forEach(d),f.forEach(d),this.h()},h(){p(l,"fill","#4f4f4f"),p(l,"d","M246 128a77.5 77.5 0 0 1-22.9 55.2a6 6 0 0 1-8.4 0a5.9 5.9 0 0 1 0-8.5a66.1 66.1 0 0 0 0-93.4a6 6 0 1 1 8.4-8.5A77.5 77.5 0 0 1 246 128Zm-88-96v192a6 6 0 0 1-3.4 5.4a5.8 5.8 0 0 1-2.6.6a5.8 5.8 0 0 1-3.7-1.3L77.9 174H32a14 14 0 0 1-14-14V96a14 14 0 0 1 14-14h45.9l70.4-54.7A6 6 0 0 1 158 32ZM32 162h42V94H32a2 2 0 0 0-2 2v64a2 2 0 0 0 2 2ZM146 44.3L86 90.9v74.2l60 46.6Zm40.4 56.8a5.9 5.9 0 0 0 0 8.5a26.1 26.1 0 0 1 0 36.8a5.9 5.9 0 0 0 0 8.5a6.1 6.1 0 0 0 4.2 1.7a6.5 6.5 0 0 0 4.3-1.7a38.1 38.1 0 0 0 0-53.8a6.1 6.1 0 0 0-8.5 0Z"),p(l,"class","svelte-1jobvmf"),p(t,"xmlns","http://www.w3.org/2000/svg"),p(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),p(t,"aria-hidden","true"),p(t,"role","img"),p(t,"class","iconify iconify--ph svelte-1jobvmf"),p(t,"width","32"),p(t,"height","32"),p(t,"preserveAspectRatio","xMidYMid meet"),p(t,"viewBox","0 0 256 256"),p(e,"class","play svelte-1jobvmf")},m(n,f){A(n,e,f),u(e,t),u(t,l),o||(i=O(e,"click",a),o=!0)},p(n,f){s=n},d(n){n&&d(e),o=!1,i()}}}function G(s){let e,t=s[1].phonetic+"",l;return{c(){e=w("span"),l=S(t),this.h()},l(o){e=x(o,"SPAN",{class:!0});var i=g(e);l=I(i,t),i.forEach(d),this.h()},h(){p(e,"class","phonetic svelte-1jobvmf")},m(o,i){A(o,e,i),u(e,l)},p(o,i){i&1&&t!==(t=o[1].phonetic+"")&&M(l,t)},d(o){o&&d(e)}}}function K(s){let e,t=s[7].example+"",l;return{c(){e=w("span"),l=S(t),this.h()},l(o){e=x(o,"SPAN",{class:!0});var i=g(e);l=I(i,t),i.forEach(d),this.h()},h(){p(e,"class","example svelte-1jobvmf")},m(o,i){A(o,e,i),u(e,l)},p(o,i){i&1&&t!==(t=o[7].example+"")&&M(l,t)},d(o){o&&d(e)}}}function Q(s){let e,t,l=s[7].definition+"",o,i,a,n=s[7].example&&K(s);return{c(){e=w("li"),t=w("span"),o=S(l),i=y(),n&&n.c(),a=y(),this.h()},l(f){e=x(f,"LI",{class:!0});var _=g(e);t=x(_,"SPAN",{class:!0});var h=g(t);o=I(h,l),h.forEach(d),i=E(_),n&&n.l(_),a=E(_),_.forEach(d),this.h()},h(){p(t,"class","def svelte-1jobvmf"),p(e,"class","svelte-1jobvmf")},m(f,_){A(f,e,_),u(e,t),u(t,o),u(e,i),n&&n.m(e,null),u(e,a)},p(f,_){_&1&&l!==(l=f[7].definition+"")&&M(o,l),f[7].example?n?n.p(f,_):(n=K(f),n.c(),n.m(e,a)):n&&(n.d(1),n=null)},d(f){f&&d(e),n&&n.d()}}}function X(s){var D,Z,H;let e,t,l=s[1].word+"",o,i,a,n,f,_,h=((H=(Z=(D=s[1])==null?void 0:D.phonetics)==null?void 0:Z[0])==null?void 0:H.audio)&&Y(s),r=s[1].phonetic&&G(s),m=s[1].meanings.map($).flat(),c=[];for(let v=0;v<m.length;v+=1)c[v]=Q(J(s,m,v));return{c(){e=w("div"),t=w("h2"),o=S(l),i=y(),h&&h.c(),a=y(),r&&r.c(),n=y(),f=w("ol");for(let v=0;v<c.length;v+=1)c[v].c();_=y(),this.h()},l(v){e=x(v,"DIV",{class:!0});var b=g(e);t=x(b,"H2",{class:!0});var k=g(t);o=I(k,l),i=E(k),h&&h.l(k),k.forEach(d),a=E(b),r&&r.l(b),n=E(b),f=x(b,"OL",{class:!0});var L=g(f);for(let N=0;N<c.length;N+=1)c[N].l(L);L.forEach(d),_=E(b),b.forEach(d),this.h()},h(){p(t,"class","wordword svelte-1jobvmf"),p(f,"class","svelte-1jobvmf"),p(e,"class","word svelte-1jobvmf")},m(v,b){A(v,e,b),u(e,t),u(t,o),u(t,i),h&&h.m(t,null),u(e,a),r&&r.m(e,null),u(e,n),u(e,f);for(let k=0;k<c.length;k+=1)c[k].m(f,null);u(e,_)},p(v,b){var k,L,N;if(b&1&&l!==(l=v[1].word+"")&&M(o,l),(N=(L=(k=v[1])==null?void 0:k.phonetics)==null?void 0:L[0])!=null&&N.audio?h?h.p(v,b):(h=Y(v),h.c(),h.m(t,null)):h&&(h.d(1),h=null),v[1].phonetic?r?r.p(v,b):(r=G(v),r.c(),r.m(e,n)):r&&(r.d(1),r=null),b&1){m=v[1].meanings.map($).flat();let j;for(j=0;j<m.length;j+=1){const U=J(v,m,j);c[j]?c[j].p(U,b):(c[j]=Q(U),c[j].c(),c[j].m(f,null))}for(;j<c.length;j+=1)c[j].d(1);c.length=m.length}},d(v){v&&d(e),h&&h.d(),r&&r.d(),ee(c,v)}}}function pe(s){let e,t,l,o,i,a,n,f;function _(m,c){if(m[0]&&m[0].length)return ve;if(m[1].length)return he}let h=_(s),r=h&&h(s);return{c(){e=w("div"),t=w("h2"),l=S("Dictionary"),o=y(),i=w("input"),a=y(),r&&r.c(),this.h()},l(m){e=x(m,"DIV",{class:!0});var c=g(e);t=x(c,"H2",{class:!0});var D=g(t);l=I(D,"Dictionary"),D.forEach(d),o=E(c),i=x(c,"INPUT",{placeholder:!0,class:!0}),a=E(c),r&&r.l(c),c.forEach(d),this.h()},h(){p(t,"class","lookup svelte-1jobvmf"),p(i,"placeholder","Word to look up"),p(i,"class","svelte-1jobvmf"),p(e,"class","container svelte-1jobvmf")},m(m,c){A(m,e,c),u(e,t),u(t,l),u(e,o),u(e,i),R(i,s[1]),u(e,a),r&&r.m(e,null),n||(f=[O(i,"input",s[3]),O(i,"keyup",ce.throttle(s[2],1e3))],n=!0)},p(m,[c]){c&2&&i.value!==m[1]&&R(i,m[1]),h===(h=_(m))&&r?r.p(m,c):(r&&r.d(1),r=h&&h(m),r&&(r.c(),r.m(e,null)))},i:P,o:P,d(m){m&&d(e),r&&r.d(),n=!1,fe(f)}}}function me(s){if(console.log(s),!s)return;let e=document.createElement("audio");return e.src=s,e.onload=()=>e.remove(),document.body.appendChild(e),()=>e.play()}const $=s=>s.definitions.map(e=>C(B({},e),{partOfSpeech:s.partOfSpeech}));function ue(s,e,t){let l="smile",o=[];i();async function i(){l.trim().length||t(0,o=[]),t(0,o=await fetch(`https://cors.explosionscratc.repl.co/api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(l)}`).then(f=>f.json())),Array.isArray(o)||t(0,o=[])}function a(){l=this.value,t(1,l)}return[o,l,i,a,f=>me(f.phonetics[0].audio)()]}class ge extends ne{constructor(e){super(),ae(this,e,ue,pe,re,{})}}export{ge as default};
