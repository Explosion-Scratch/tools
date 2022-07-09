import{S as z,i as Y,s as D,e as b,k as N,t as S,l as I,N as F,c as w,a as g,d as m,m as M,h as A,Z as J,b as c,F as d,g as j,$ as C,O as V,E as H,v as L,I as R,J as Z,j as O,L as U}from"../chunks/index-580bca92.js";function q(u,t,r){const e=u.slice();return e[7]=t[r][0],e[8]=t[r][1],e}function X(u){let t,r=Object.entries(u[2]),e=[];for(let s=0;s<r.length;s+=1)e[s]=B(q(u,r,s));return{c(){for(let s=0;s<e.length;s+=1)e[s].c();t=I()},l(s){for(let l=0;l<e.length;l+=1)e[l].l(s);t=I()},m(s,l){for(let i=0;i<e.length;i+=1)e[i].m(s,l);j(s,t,l)},p(s,l){if(l&4){r=Object.entries(s[2]);let i;for(i=0;i<r.length;i+=1){const f=q(s,r,i);e[i]?e[i].p(f,l):(e[i]=B(f),e[i].c(),e[i].m(t.parentNode,t))}for(;i<e.length;i+=1)e[i].d(1);e.length=r.length}},d(s){U(e,s),s&&m(t)}}}function G(u){let t,r=(u[1]||"No data given")+"",e;return{c(){t=b("span"),e=S(r),this.h()},l(s){t=w(s,"SPAN",{class:!0});var l=g(t);e=A(l,r),l.forEach(m),this.h()},h(){c(t,"class","nothing svelte-emfu9j")},m(s,l){j(s,t,l),d(t,e)},p(s,l){l&2&&r!==(r=(s[1]||"No data given")+"")&&O(e,r)},d(s){s&&m(t)}}}function B(u){let t,r=u[7]+"",e,s,l,i=u[8]+"",f,_,h,n,v,y,k,x;function p(){return u[6](u[8])}return{c(){t=b("div"),e=S(r),s=S(": "),l=b("span"),f=S(i),_=N(),h=b("button"),n=R("svg"),v=R("path"),y=N(),this.h()},l(a){t=w(a,"DIV",{class:!0});var o=g(t);e=A(o,r),s=A(o,": "),l=w(o,"SPAN",{class:!0});var T=g(l);f=A(T,i),T.forEach(m),_=M(o),h=w(o,"BUTTON",{class:!0});var E=g(h);n=Z(E,"svg",{xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,role:!0,class:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var P=g(n);v=Z(P,"path",{fill:!0,d:!0,class:!0}),g(v).forEach(m),P.forEach(m),E.forEach(m),y=M(o),o.forEach(m),this.h()},h(){c(l,"class","result svelte-emfu9j"),c(v,"fill","#4f4f4f"),c(v,"d","M220 40v144a4 4 0 0 1-8 0V44H72a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4Zm-32 32v144a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Zm-8 4H44v136h136Z"),c(v,"class","svelte-emfu9j"),c(n,"xmlns","http://www.w3.org/2000/svg"),c(n,"xmlns:xlink","http://www.w3.org/1999/xlink"),c(n,"aria-hidden","true"),c(n,"role","img"),c(n,"class","iconify iconify--ph svelte-emfu9j"),c(n,"width","32"),c(n,"height","32"),c(n,"preserveAspectRatio","xMidYMid meet"),c(n,"viewBox","0 0 256 256"),c(h,"class","copy svelte-emfu9j"),c(t,"class","thing svelte-emfu9j")},m(a,o){j(a,t,o),d(t,e),d(t,s),d(t,l),d(l,f),d(t,_),d(t,h),d(h,n),d(n,v),d(t,y),k||(x=V(t,"click",p),k=!0)},p(a,o){u=a,o&4&&r!==(r=u[7]+"")&&O(e,r),o&4&&i!==(i=u[8]+"")&&O(f,i)},d(a){a&&m(t),k=!1,x()}}}function K(u){let t,r,e,s,l,i,f,_,h,n,v,y;function k(a,o){return o&6&&(h=null),h==null&&(h=!!(!a[2]||!Object.keys(a[2]).length||a[1])),h?G:X}let x=k(u,-1),p=x(u);return{c(){t=b("script"),e=N(),s=b("h2"),l=S("Statistics calculator"),i=N(),f=b("textarea"),_=N(),p.c(),n=I(),this.h()},l(a){const o=F('[data-svelte="svelte-1p83kpv"]',document.head);t=w(o,"SCRIPT",{src:!0,class:!0});var T=g(t);T.forEach(m),o.forEach(m),e=M(a),s=w(a,"H2",{class:!0});var E=g(s);l=A(E,"Statistics calculator"),E.forEach(m),i=M(a),f=w(a,"TEXTAREA",{placeholder:!0,class:!0}),g(f).forEach(m),_=M(a),p.l(a),n=I(),this.h()},h(){J(t.src,r="https://unpkg.com/mathjs@10.5.0/lib/browser/math.js")||c(t,"src",r),c(t,"class","svelte-emfu9j"),c(s,"class","svelte-emfu9j"),c(f,"placeholder","Comma or space seperated list of numbers"),c(f,"class","svelte-emfu9j")},m(a,o){d(document.head,t),j(a,e,o),j(a,s,o),d(s,l),j(a,i,o),j(a,f,o),C(f,u[0]),j(a,_,o),p.m(a,o),j(a,n,o),v||(y=V(f,"input",u[5]),v=!0)},p(a,[o]){o&1&&C(f,a[0]),x===(x=k(a,o))&&p?p.p(a,o):(p.d(1),p=x(a),p&&(p.c(),p.m(n.parentNode,n)))},i:H,o:H,d(a){m(t),a&&m(e),a&&m(s),a&&m(i),a&&m(f),a&&m(_),p.d(a),a&&m(n),v=!1,y()}}}function Q(u){navigator.clipboard.writeText(u).then(()=>{},()=>prompt("Copy: ",u))}function W(u,t,r){let e,s,l=new Proxy({},{get(){return()=>1}}),i=null,f="1, 1, 2, 3";L(()=>{r(3,l=window.math)});function _(){f=this.value,r(0,f)}const h=n=>Q(n);return u.$$.update=()=>{u.$$.dirty&1&&r(4,e=f.split(",").map(n=>n.split(" ")).flat().filter(n=>n.trim()).map(n=>+n)),u.$$.dirty&16&&r(1,i=e.some(isNaN)?"Invalid data":""),u.$$.dirty&24&&r(2,s=(()=>{if(!!l)return e.some(isNaN)?r(1,i="Invalid data"):(r(1,i=null),e.length?{Mean:l.mean(e),Mode:l.mode(e),Media:l.median(e),"Standard deviation":l.std(e),Min:l.min(e),Max:l.max(e),Sum:l.sum(e),Product:l.prod(e)}:{})})())},[f,i,s,l,e,_,h]}class ee extends z{constructor(t){super(),Y(this,t,W,K,D,{})}}export{ee as default};