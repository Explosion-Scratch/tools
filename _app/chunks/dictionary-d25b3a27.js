var te=Object.defineProperty,le=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var R=(a,e,t)=>e in a?te(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,T=(a,e)=>{for(var t in e||(e={}))ae.call(e,t)&&R(a,t,e[t]);if(C)for(var t of C(e))ie.call(e,t)&&R(a,t,e[t]);return a},U=(a,e)=>le(a,se(e));import{S as ne,i as oe,s as re,e as w,t as P,k as E,c as y,a as b,h as D,d as m,m as A,b as p,g as N,H as _,a6 as W,N as O,E as Z,O as ce,j as M,F as q,G as F,P as ee,l as G}from"./index-207fcf87.js";import{_ as fe}from"./bijou-106d2215.js";function Y(a,e,t){const l=a.slice();return l[1]=e[t],l}function z(a,e,t){const l=a.slice();return l[7]=e[t],l}function he(a){let e,t;return{c(){e=w("span"),t=P("No definition found"),this.h()},l(l){e=y(l,"SPAN",{class:!0});var s=b(e);t=D(s,"No definition found"),s.forEach(m),this.h()},h(){p(e,"class","noWords svelte-1jobvmf")},m(l,s){N(l,e,s),_(e,t)},p:Z,d(l){l&&m(e)}}}function ue(a){let e,t=a[0],l=[];for(let s=0;s<t.length;s+=1)l[s]=$(Y(a,t,s));return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=G()},l(s){for(let i=0;i<l.length;i+=1)l[i].l(s);e=G()},m(s,i){for(let o=0;o<l.length;o+=1)l[o].m(s,i);N(s,e,i)},p(s,i){if(i&1){t=s[0];let o;for(o=0;o<t.length;o+=1){const n=Y(s,t,o);l[o]?l[o].p(n,i):(l[o]=$(n),l[o].c(),l[o].m(e.parentNode,e))}for(;o<l.length;o+=1)l[o].d(1);l.length=t.length}},d(s){ee(l,s),s&&m(e)}}}function J(a){let e,t,l,s,i;function o(){return a[4](a[1])}return{c(){e=w("button"),t=q("svg"),l=q("path"),this.h()},l(n){e=y(n,"BUTTON",{class:!0});var c=b(e);t=F(c,"svg",{xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,role:!0,class:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var v=b(t);l=F(v,"path",{fill:!0,d:!0,class:!0}),b(l).forEach(m),v.forEach(m),c.forEach(m),this.h()},h(){p(l,"fill","#4f4f4f"),p(l,"d","M246 128a77.5 77.5 0 0 1-22.9 55.2a6 6 0 0 1-8.4 0a5.9 5.9 0 0 1 0-8.5a66.1 66.1 0 0 0 0-93.4a6 6 0 1 1 8.4-8.5A77.5 77.5 0 0 1 246 128Zm-88-96v192a6 6 0 0 1-3.4 5.4a5.8 5.8 0 0 1-2.6.6a5.8 5.8 0 0 1-3.7-1.3L77.9 174H32a14 14 0 0 1-14-14V96a14 14 0 0 1 14-14h45.9l70.4-54.7A6 6 0 0 1 158 32ZM32 162h42V94H32a2 2 0 0 0-2 2v64a2 2 0 0 0 2 2ZM146 44.3L86 90.9v74.2l60 46.6Zm40.4 56.8a5.9 5.9 0 0 0 0 8.5a26.1 26.1 0 0 1 0 36.8a5.9 5.9 0 0 0 0 8.5a6.1 6.1 0 0 0 4.2 1.7a6.5 6.5 0 0 0 4.3-1.7a38.1 38.1 0 0 0 0-53.8a6.1 6.1 0 0 0-8.5 0Z"),p(l,"class","svelte-1jobvmf"),p(t,"xmlns","http://www.w3.org/2000/svg"),p(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),p(t,"aria-hidden","true"),p(t,"role","img"),p(t,"class","iconify iconify--ph svelte-1jobvmf"),p(t,"width","32"),p(t,"height","32"),p(t,"preserveAspectRatio","xMidYMid meet"),p(t,"viewBox","0 0 256 256"),p(e,"class","play svelte-1jobvmf")},m(n,c){N(n,e,c),_(e,t),_(t,l),s||(i=O(e,"click",o),s=!0)},p(n,c){a=n},d(n){n&&m(e),s=!1,i()}}}function K(a){let e,t=a[1].phonetic+"",l;return{c(){e=w("span"),l=P(t),this.h()},l(s){e=y(s,"SPAN",{class:!0});var i=b(e);l=D(i,t),i.forEach(m),this.h()},h(){p(e,"class","phonetic svelte-1jobvmf")},m(s,i){N(s,e,i),_(e,l)},p(s,i){i&1&&t!==(t=s[1].phonetic+"")&&M(l,t)},d(s){s&&m(e)}}}function Q(a){let e,t=a[7].example+"",l;return{c(){e=w("span"),l=P(t),this.h()},l(s){e=y(s,"SPAN",{class:!0});var i=b(e);l=D(i,t),i.forEach(m),this.h()},h(){p(e,"class","example svelte-1jobvmf")},m(s,i){N(s,e,i),_(e,l)},p(s,i){i&1&&t!==(t=s[7].example+"")&&M(l,t)},d(s){s&&m(e)}}}function X(a){let e,t,l=a[7].definition+"",s,i,o,n=a[7].example&&Q(a);return{c(){e=w("li"),t=w("span"),s=P(l),i=E(),n&&n.c(),o=E(),this.h()},l(c){e=y(c,"LI",{class:!0});var v=b(e);t=y(v,"SPAN",{class:!0});var h=b(t);s=D(h,l),h.forEach(m),i=A(v),n&&n.l(v),o=A(v),v.forEach(m),this.h()},h(){p(t,"class","def svelte-1jobvmf"),p(e,"class","svelte-1jobvmf")},m(c,v){N(c,e,v),_(e,t),_(t,s),_(e,i),n&&n.m(e,null),_(e,o)},p(c,v){v&1&&l!==(l=c[7].definition+"")&&M(s,l),c[7].example?n?n.p(c,v):(n=Q(c),n.c(),n.m(e,o)):n&&(n.d(1),n=null)},d(c){c&&m(e),n&&n.d()}}}function $(a){var H,L,V;let e,t,l=a[1].word+"",s,i,o,n,c,v,h=((V=(L=(H=a[1])==null?void 0:H.phonetics)==null?void 0:L[0])==null?void 0:V.audio)&&J(a),r=a[1].phonetic&&K(a),d=a[1].meanings.map(x).flat(),f=[];for(let u=0;u<d.length;u+=1)f[u]=X(z(a,d,u));return{c(){e=w("div"),t=w("h2"),s=P(l),i=E(),h&&h.c(),o=E(),r&&r.c(),n=E(),c=w("ol");for(let u=0;u<f.length;u+=1)f[u].c();v=E(),this.h()},l(u){e=y(u,"DIV",{class:!0});var g=b(e);t=y(g,"H2",{class:!0});var j=b(t);s=D(j,l),i=A(j),h&&h.l(j),j.forEach(m),o=A(g),r&&r.l(g),n=A(g),c=y(g,"OL",{class:!0});var I=b(c);for(let S=0;S<f.length;S+=1)f[S].l(I);I.forEach(m),v=A(g),g.forEach(m),this.h()},h(){p(t,"class","wordword svelte-1jobvmf"),p(c,"class","svelte-1jobvmf"),p(e,"class","word svelte-1jobvmf")},m(u,g){N(u,e,g),_(e,t),_(t,s),_(t,i),h&&h.m(t,null),_(e,o),r&&r.m(e,null),_(e,n),_(e,c);for(let j=0;j<f.length;j+=1)f[j].m(c,null);_(e,v)},p(u,g){var j,I,S;if(g&1&&l!==(l=u[1].word+"")&&M(s,l),(S=(I=(j=u[1])==null?void 0:j.phonetics)==null?void 0:I[0])!=null&&S.audio?h?h.p(u,g):(h=J(u),h.c(),h.m(t,null)):h&&(h.d(1),h=null),u[1].phonetic?r?r.p(u,g):(r=K(u),r.c(),r.m(e,n)):r&&(r.d(1),r=null),g&1){d=u[1].meanings.map(x).flat();let k;for(k=0;k<d.length;k+=1){const B=z(u,d,k);f[k]?f[k].p(B,g):(f[k]=X(B),f[k].c(),f[k].m(c,null))}for(;k<f.length;k+=1)f[k].d(1);f.length=d.length}},d(u){u&&m(e),h&&h.d(),r&&r.d(),ee(f,u)}}}function pe(a){let e,t,l,s,i,o,n,c;function v(d,f){if(d[0]&&d[0].length)return ue;if(d[1].length)return he}let h=v(a),r=h&&h(a);return{c(){e=w("div"),t=w("h2"),l=P("Dictionary"),s=E(),i=w("input"),o=E(),r&&r.c(),this.h()},l(d){e=y(d,"DIV",{class:!0});var f=b(e);t=y(f,"H2",{class:!0});var H=b(t);l=D(H,"Dictionary"),H.forEach(m),s=A(f),i=y(f,"INPUT",{placeholder:!0,class:!0}),o=A(f),r&&r.l(f),f.forEach(m),this.h()},h(){p(t,"class","lookup svelte-1jobvmf"),p(i,"placeholder","Word to look up"),p(i,"class","svelte-1jobvmf"),p(e,"class","container svelte-1jobvmf")},m(d,f){N(d,e,f),_(e,t),_(t,l),_(e,s),_(e,i),W(i,a[1]),_(e,o),r&&r.m(e,null),n||(c=[O(i,"input",a[3]),O(i,"keyup",fe.throttle(a[2],1e3))],n=!0)},p(d,[f]){f&2&&i.value!==d[1]&&W(i,d[1]),h===(h=v(d))&&r?r.p(d,f):(r&&r.d(1),r=h&&h(d),r&&(r.c(),r.m(e,null)))},i:Z,o:Z,d(d){d&&m(e),r&&r.d(),n=!1,ce(c)}}}function de(a){if(console.log(a),!a)return;let e=document.createElement("audio");return e.src=a,e.onload=()=>e.remove(),document.body.appendChild(e),()=>e.play()}const x=a=>a.definitions.map(e=>U(T({},e),{partOfSpeech:a.partOfSpeech}));function _e(a,e,t){let l="smile",s=[];i();async function i(){l.trim().length||t(0,s=[]),t(0,s=await fetch(`https://cors.explosionscratc.repl.co/api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(l)}`).then(c=>c.json())),Array.isArray(s)||t(0,s=[])}function o(){l=this.value,t(1,l)}return[s,l,i,o,c=>de(c.phonetics[0].audio)()]}class be extends ne{constructor(e){super(),oe(this,e,_e,pe,re,{})}}export{be as default};
