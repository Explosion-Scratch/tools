import{S as U,i as D,s as F,e as w,k as S,t as M,l as T,J as G,c as j,a as g,d as h,m as x,h as A,U as J,b as f,H as _,g as b,a6 as C,O as Z,E as I,v as X,F as R,G as q,j as H,P as Y}from"./index-070274e8.js";function B(c,t,r){const e=c.slice();return e[7]=t[r][0],e[8]=t[r][1],e}function z(c){let t,r=Object.entries(c[2]),e=[];for(let s=0;s<r.length;s+=1)e[s]=V(B(c,r,s));return{c(){for(let s=0;s<e.length;s+=1)e[s].c();t=T()},l(s){for(let l=0;l<e.length;l+=1)e[l].l(s);t=T()},m(s,l){for(let i=0;i<e.length;i+=1)e[i].m(s,l);b(s,t,l)},p(s,l){if(l&4){r=Object.entries(s[2]);let i;for(i=0;i<r.length;i+=1){const u=B(s,r,i);e[i]?e[i].p(u,l):(e[i]=V(u),e[i].c(),e[i].m(t.parentNode,t))}for(;i<e.length;i+=1)e[i].d(1);e.length=r.length}},d(s){Y(e,s),s&&h(t)}}}function K(c){let t,r=(c[1]||"No data given")+"",e;return{c(){t=w("span"),e=M(r),this.h()},l(s){t=j(s,"SPAN",{class:!0});var l=g(t);e=A(l,r),l.forEach(h),this.h()},h(){f(t,"class","nothing svelte-emfu9j")},m(s,l){b(s,t,l),_(t,e)},p(s,l){l&2&&r!==(r=(s[1]||"No data given")+"")&&H(e,r)},d(s){s&&h(t)}}}function V(c){let t,r=c[7]+"",e,s,l,i=c[8]+"",u,v,p,n,d,y,E,k;function m(){return c[6](c[8])}return{c(){t=w("div"),e=M(r),s=M(": "),l=w("span"),u=M(i),v=S(),p=w("button"),n=R("svg"),d=R("path"),y=S(),this.h()},l(a){t=j(a,"DIV",{class:!0});var o=g(t);e=A(o,r),s=A(o,": "),l=j(o,"SPAN",{class:!0});var P=g(l);u=A(P,i),P.forEach(h),v=x(o),p=j(o,"BUTTON",{class:!0});var N=g(p);n=q(N,"svg",{xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,role:!0,class:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var O=g(n);d=q(O,"path",{fill:!0,d:!0,class:!0}),g(d).forEach(h),O.forEach(h),N.forEach(h),y=x(o),o.forEach(h),this.h()},h(){f(l,"class","result svelte-emfu9j"),f(d,"fill","#4f4f4f"),f(d,"d","M220 40v144a4 4 0 0 1-8 0V44H72a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4Zm-32 32v144a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Zm-8 4H44v136h136Z"),f(d,"class","svelte-emfu9j"),f(n,"xmlns","http://www.w3.org/2000/svg"),f(n,"xmlns:xlink","http://www.w3.org/1999/xlink"),f(n,"aria-hidden","true"),f(n,"role","img"),f(n,"class","iconify iconify--ph svelte-emfu9j"),f(n,"width","32"),f(n,"height","32"),f(n,"preserveAspectRatio","xMidYMid meet"),f(n,"viewBox","0 0 256 256"),f(p,"class","copy svelte-emfu9j"),f(t,"class","thing svelte-emfu9j")},m(a,o){b(a,t,o),_(t,e),_(t,s),_(t,l),_(l,u),_(t,v),_(t,p),_(p,n),_(n,d),_(t,y),E||(k=Z(t,"click",m),E=!0)},p(a,o){c=a,o&4&&r!==(r=c[7]+"")&&H(e,r),o&4&&i!==(i=c[8]+"")&&H(u,i)},d(a){a&&h(t),E=!1,k()}}}function L(c){let t,r,e,s,l,i,u,v,p,n,d,y;function E(a,o){return o&6&&(p=null),p==null&&(p=!!(!a[2]||!Object.keys(a[2]).length||a[1])),p?K:z}let k=E(c,-1),m=k(c);return{c(){t=w("script"),e=S(),s=w("h2"),l=M("Statistics calculator"),i=S(),u=w("textarea"),v=S(),m.c(),n=T(),this.h()},l(a){const o=G('[data-svelte="svelte-1p83kpv"]',document.head);t=j(o,"SCRIPT",{src:!0,class:!0});var P=g(t);P.forEach(h),o.forEach(h),e=x(a),s=j(a,"H2",{class:!0});var N=g(s);l=A(N,"Statistics calculator"),N.forEach(h),i=x(a),u=j(a,"TEXTAREA",{placeholder:!0,class:!0}),g(u).forEach(h),v=x(a),m.l(a),n=T(),this.h()},h(){J(t.src,r="https://unpkg.com/mathjs@10.5.0/lib/browser/math.js")||f(t,"src",r),f(t,"class","svelte-emfu9j"),f(s,"class","svelte-emfu9j"),f(u,"placeholder","Comma or space seperated list of numbers"),f(u,"class","svelte-emfu9j")},m(a,o){_(document.head,t),b(a,e,o),b(a,s,o),_(s,l),b(a,i,o),b(a,u,o),C(u,c[0]),b(a,v,o),m.m(a,o),b(a,n,o),d||(y=Z(u,"input",c[5]),d=!0)},p(a,[o]){o&1&&C(u,a[0]),k===(k=E(a,o))&&m?m.p(a,o):(m.d(1),m=k(a),m&&(m.c(),m.m(n.parentNode,n)))},i:I,o:I,d(a){h(t),a&&h(e),a&&h(s),a&&h(i),a&&h(u),a&&h(v),m.d(a),a&&h(n),d=!1,y()}}}function Q(c){navigator.clipboard.writeText(c).then(()=>{},()=>prompt("Copy: ",c))}function W(c,t,r){let e,s,l=new Proxy({},{get(){return()=>1}}),i=null,u="1, 1, 2, 3";X(()=>{r(3,l=window.math)});function v(){u=this.value,r(0,u)}const p=n=>Q(n);return c.$$.update=()=>{c.$$.dirty&1&&r(4,e=u.split(",").map(n=>n.split(" ")).flat().filter(n=>n.trim()).map(n=>+n)),c.$$.dirty&16&&r(1,i=e.some(isNaN)?"Invalid data":""),c.$$.dirty&24&&r(2,s=(()=>{if(!!l)return e.some(isNaN)?r(1,i="Invalid data"):(r(1,i=null),e.length?{Mean:l.mean(e),Mode:l.mode(e),Media:l.median(e),"Standard deviation":l.std(e),Min:l.min(e),Max:l.max(e),Sum:l.sum(e),Product:l.prod(e)}:{})})())},[u,i,s,l,e,v,p]}class ee extends U{constructor(t){super(),D(this,t,W,L,F,{})}}export{ee as default};
