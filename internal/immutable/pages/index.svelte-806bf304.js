import{S as X,i as Y,s as Z,e as w,c as $,a as E,d as m,b as _,g as x,O as tt,E as W,L as et,v as lt,$ as N,t as V,k as z,h as q,m as A,F as y,a1 as nt,U as st,w as j,x as L,y as P,q as R,o as F,B as O}from"../chunks/index-b92f0203.js";import{t as U,g as ot}from"../chunks/navigation-92a5dec0.js";import{t as rt}from"../chunks/tooltip-f617373c.js";import{T as at}from"../chunks/TippyStyles-f191e2a6.js";import"../chunks/singletons-d1fb5791.js";function G(n,t,r){const a=n.slice();return a[5]=t[r],a[6]=t,a[7]=r,a}function J(n){let t,r,a,d=n[7];const f=()=>n[3](t,d),s=()=>n[3](null,d);return{c(){t=w("div"),this.h()},l(l){t=$(l,"DIV",{style:!0,class:!0,id:!0}),E(t).forEach(m),this.h()},h(){_(t,"style",r=`width: ${M}px; height: ${M}px;`),_(t,"class","block svelte-1i22o2"),_(t,"id",a=`block_${n[7]}`)},m(l,o){x(l,t,o),f()},p(l,o){n=l,d!==n[7]&&(s(),d=n[7],f())},d(l){l&&m(t),s()}}}function it(n){let t,r,a,d,f=n[0],s=[];for(let l=0;l<f.length;l+=1)s[l]=J(G(n,f,l));return{c(){t=w("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){t=$(l,"DIV",{class:!0,style:!0});var o=E(t);for(let h=0;h<s.length;h+=1)s[h].l(o);o.forEach(m),this.h()},h(){var l;_(t,"class","background svelte-1i22o2"),_(t,"style",r=`grid-template-columns: repeat(${~~(((l=n[1])==null?void 0:l.clientWidth)/M)}, 1fr);`)},m(l,o){x(l,t,o);for(let h=0;h<s.length;h+=1)s[h].m(t,null);n[4](t),a||(d=tt(t,"mousemove",n[2]),a=!0)},p(l,[o]){var h;if(o&1){f=l[0];let i;for(i=0;i<f.length;i+=1){const u=G(l,f,i);s[i]?s[i].p(u,o):(s[i]=J(u),s[i].c(),s[i].m(t,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=f.length}o&2&&r!==(r=`grid-template-columns: repeat(${~~(((h=l[1])==null?void 0:h.clientWidth)/M)}, 1fr);`)&&_(t,"style",r)},i:W,o:W,d(l){l&&m(t),et(s,l),n[4](null),a=!1,d()}}}const M=50;function ct(n,t,r){let a=[],d;lt(()=>{r(0,a=new Array(Math.floor(d.clientWidth/M)*Math.floor(d.clientHeight/M)).fill({})),window.addEventListener("resize",()=>{r(0,a=new Array(Math.floor(d.clientWidth/M)*Math.floor(d.clientHeight/M)).fill({}))})});const f=o=>{a.forEach((i,u)=>{const g=document.querySelector(`#block_${u}`);if(h(o,g)>100)return g.style.opacity="0.1";g.style.opacity=10/h(o,g)});function h(i,u){const{left:g,width:b,top:v,height:e}=u.getBoundingClientRect(),{x:p,y:c}=i;return Math.floor(Math.sqrt(Math.pow(p-(g+b/2),2)+Math.pow(c-(v+e/2),2)))}};function s(o,h){N[o?"unshift":"push"](()=>{a[h]=o,r(0,a)})}function l(o){N[o?"unshift":"push"](()=>{d=o,r(1,d)})}return[a,d,f,s,l]}class dt extends X{constructor(t){super(),Y(this,t,ct,it,Z,{})}}function K(n,t,r){const a=n.slice();return a[1]=t[r],a}function Q(n){let t,r,a=n[1].name+"",d,f,s,l=n[1].description+"",o,h,i,u,g,b,v,e,p,c,I;function T(){return n[0](n[1])}return{c(){t=w("div"),r=w("h2"),d=V(a),f=z(),s=w("span"),o=V(l),h=z(),i=w("a"),u=w("div"),g=V("View"),p=z(),this.h()},l(S){t=$(S,"DIV",{class:!0});var k=E(t);r=$(k,"H2",{id:!0,class:!0});var B=E(r);d=q(B,a),B.forEach(m),f=A(k),s=$(k,"SPAN",{id:!0,class:!0});var C=E(s);o=q(C,l),C.forEach(m),h=A(k),i=$(k,"A",{href:!0,"sveltekit:reload":!0,alt:!0,class:!0});var D=E(i);u=$(D,"DIV",{class:!0});var H=E(u);g=q(H,"View"),H.forEach(m),D.forEach(m),p=A(k),k.forEach(m),this.h()},h(){_(r,"id","title"),_(r,"class","svelte-tnr0a1"),_(s,"id","description"),_(s,"class","svelte-tnr0a1"),_(u,"class","text svelte-tnr0a1"),_(i,"href",b=`/tools/${n[1].id}`),_(i,"sveltekit:reload",""),_(i,"alt",v=`${n[1].name} link`),_(i,"class","link svelte-tnr0a1"),_(t,"class","tool svelte-tnr0a1")},m(S,k){x(S,t,k),y(t,r),y(r,d),y(t,f),y(t,s),y(s,o),y(t,h),y(t,i),y(i,u),y(u,g),y(t,p),c||(I=[nt(e=rt.call(null,i,{content:`/tools/${n[1].id}`,theme:"light"})),tt(t,"click",T)],c=!0)},p(S,k){n=S},d(S){S&&m(t),c=!1,st(I)}}}function ft(n){let t,r,a,d,f,s,l,o,h,i,u,g;t=new dt({}),a=new at({});let b=U,v=[];for(let e=0;e<b.length;e+=1)v[e]=Q(K(n,b,e));return{c(){j(t.$$.fragment),r=z(),j(a.$$.fragment),d=z(),f=w("h2"),s=V("Tools"),l=z(),o=w("span"),h=V("Tools that I made because I wanted to. I might add more sometime."),i=z(),u=w("main");for(let e=0;e<v.length;e+=1)v[e].c();this.h()},l(e){L(t.$$.fragment,e),r=A(e),L(a.$$.fragment,e),d=A(e),f=$(e,"H2",{class:!0});var p=E(f);s=q(p,"Tools"),p.forEach(m),l=A(e),o=$(e,"SPAN",{id:!0,class:!0});var c=E(o);h=q(c,"Tools that I made because I wanted to. I might add more sometime."),c.forEach(m),i=A(e),u=$(e,"MAIN",{class:!0});var I=E(u);for(let T=0;T<v.length;T+=1)v[T].l(I);I.forEach(m),this.h()},h(){_(f,"class","title svelte-tnr0a1"),_(o,"id","desc"),_(o,"class","svelte-tnr0a1"),_(u,"class","container svelte-tnr0a1")},m(e,p){P(t,e,p),x(e,r,p),P(a,e,p),x(e,d,p),x(e,f,p),y(f,s),x(e,l,p),x(e,o,p),y(o,h),x(e,i,p),x(e,u,p);for(let c=0;c<v.length;c+=1)v[c].m(u,null);g=!0},p(e,[p]){if(p&0){b=U;let c;for(c=0;c<b.length;c+=1){const I=K(e,b,c);v[c]?v[c].p(I,p):(v[c]=Q(I),v[c].c(),v[c].m(u,null))}for(;c<v.length;c+=1)v[c].d(1);v.length=b.length}},i(e){g||(R(t.$$.fragment,e),R(a.$$.fragment,e),g=!0)},o(e){F(t.$$.fragment,e),F(a.$$.fragment,e),g=!1},d(e){O(t,e),e&&m(r),O(a,e),e&&m(d),e&&m(f),e&&m(l),e&&m(o),e&&m(i),e&&m(u),et(v,e)}}}function ht(n){return[r=>ot(`/tools/${r.id}`,!1)]}class gt extends X{constructor(t){super(),Y(this,t,ht,ft,Z,{})}}export{gt as default};
