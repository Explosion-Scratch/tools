import{S as B,i as j,s as C,e as y,c as b,a as M,d,f as q,b as c,g as S,F as p,G as we,H as ie,l as L,I as ae,J as oe,E as I,v as ge,K as se,z as pe,L as ye,C as be,w as D,x as K,y as O,q as A,o as T,B as P,M as ke,k as R,t as Ee,m as z,N as xe,h as Se,O as re,P as ce,p as Ne,Q as Ae,R as Me,T as Te,U as qe,V as Le,W as fe,X as Ie,n as Be}from"../chunks/index-ca2aee43.js";import{t as ve,b as je,a as Ce}from"../chunks/navigation-0febced9.js";import{l as H}from"../chunks/store-9ade76e8.js";import{f as ue}from"../chunks/index-5b269ed8.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/index-62dbb4c6.js";function Ve(i){let t,l,e,n;return{c(){t=y("div"),l=y("span"),this.h()},l(a){t=b(a,"DIV",{class:!0});var o=M(t);l=b(o,"SPAN",{style:!0,class:!0}),M(l).forEach(d),o.forEach(d),this.h()},h(){q(l,"--color1",i[0]),q(l,"color2",i[1]),c(l,"class","loader svelte-xwmiqd"),c(t,"class","loader_container svelte-xwmiqd")},m(a,o){S(a,t,o),p(t,l),n=!0},p(a,[o]){(!n||o&1)&&q(l,"--color1",a[0]),(!n||o&2)&&q(l,"color2",a[1])},i(a){n||(we(()=>{e||(e=ie(t,ue,{},!0)),e.run(1)}),n=!0)},o(a){e||(e=ie(t,ue,{},!1)),e.run(0),n=!1},d(a){a&&d(t),a&&e&&e.end()}}}function Re(i,t,l){let{color1:e="#666"}=t,{color2:n="#333"}=t;return i.$$set=a=>{"color1"in a&&l(0,e=a.color1),"color2"in a&&l(1,n=a.color2)},[e,n]}class ze extends B{constructor(t){super(),j(this,t,Re,Ve,C,{color1:0,color2:1})}}function me(i){let t,l,e,n;return{c(){t=y("div"),l=y("a"),e=ae("svg"),n=ae("path"),this.h()},l(a){t=b(a,"DIV",{id:!0,class:!0});var o=M(t);l=b(o,"A",{href:!0,"sveltekit:prefetch":!0,alt:!0,class:!0});var m=M(l);e=oe(m,"svg",{xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,role:!0,class:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var f=M(e);n=oe(f,"path",{fill:!0,d:!0}),M(n).forEach(d),f.forEach(d),m.forEach(d),o.forEach(d),this.h()},h(){c(n,"fill","currentColor"),c(n,"d","M208 222h-48a14 14 0 0 1-14-14v-48a2 2 0 0 0-2-2h-32a2 2 0 0 0-2 2v48a14 14 0 0 1-14 14H48a14.3 14.3 0 0 1-9.9-4.1A14.1 14.1 0 0 1 34 208v-92.5a13.9 13.9 0 0 1 4.6-10.3l80-72.8a14.1 14.1 0 0 1 18.8 0l80 72.8a13.9 13.9 0 0 1 4.6 10.3V208a14 14 0 0 1-14 14Zm-96-76h32a14 14 0 0 1 14 14v48a2 2 0 0 0 2 2h48a2.1 2.1 0 0 0 2-2v-92.5a1.8 1.8 0 0 0-.6-1.4l-80.1-72.8a1.9 1.9 0 0 0-2.6 0l-80 72.8a1.6 1.6 0 0 0-.7 1.4V208a2.1 2.1 0 0 0 2 2h48a2 2 0 0 0 2-2v-48a14 14 0 0 1 14-14Z"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),c(e,"aria-hidden","true"),c(e,"role","img"),c(e,"class","iconify iconify--ph svelte-1ny6qk1"),c(e,"width","32"),c(e,"height","32"),c(e,"preserveAspectRatio","xMidYMid meet"),c(e,"viewBox","0 0 256 256"),c(l,"href","/tools/"),c(l,"sveltekit:prefetch",""),c(l,"alt","Home"),c(l,"class","svelte-1ny6qk1"),c(t,"id","nav"),c(t,"class","svelte-1ny6qk1")},m(a,o){S(a,t,o),p(t,l),p(l,e),p(e,n)},d(a){a&&d(t)}}}function He(i){let t=!i[1].includes(i[0]),l,e=t&&me();return{c(){e&&e.c(),l=L()},l(n){e&&e.l(n),l=L()},m(n,a){e&&e.m(n,a),S(n,l,a)},p(n,[a]){a&1&&(t=!n[1].includes(n[0])),t?e||(e=me(),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},i:I,o:I,d(n){e&&e.d(n),n&&d(l)}}}function De(i,t,l){let e="/nonexistant",n=["beautify","","blank"];return ge(()=>{setInterval(()=>{l(0,e=location.pathname.replace(/\/$/,"").split("/").slice(-1)[0])},100)}),[e,n]}class Ke extends B{constructor(t){super(),j(this,t,De,He,C,{})}}function de(i,t,l){const e=i.slice();return e[11]=t[l],e}function he(i){let t,l=[i[11]],e={};for(let n=0;n<l.length;n+=1)e=be(e,l[n]);return{c(){t=y("meta"),this.h()},l(n){t=b(n,"META",{}),this.h()},h(){se(t,e)},m(n,a){S(n,t,a)},p(n,a){se(t,e=pe(l,[n[11]]))},d(n){n&&d(t)}}}function Oe(i){let t,l=i[0],e=[];for(let n=0;n<l.length;n+=1)e[n]=he(de(i,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=L()},l(n){for(let a=0;a<e.length;a+=1)e[a].l(n);t=L()},m(n,a){for(let o=0;o<e.length;o+=1)e[o].m(n,a);S(n,t,a)},p(n,[a]){if(a&1){l=n[0];let o;for(o=0;o<l.length;o+=1){const m=de(n,l,o);e[o]?e[o].p(m,a):(e[o]=he(m),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=l.length}},i:I,o:I,d(n){ye(e,n),n&&d(t)}}}function Pe(i,t,l){let{title:e=""}=t,{author:n="Explosion-Scratch"}=t,{keywords:a=""}=t,{language:o="English"}=t,{color:m="#00bbbb"}=t,{image:f=""}=t,{site:_=""}=t,{url:g=""}=t,{description:w=""}=t,N=(s=>[{charset:"utf-8"},{lang:"en"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"format-detection",content:"telephone=no"},{name:"title",content:s.title},{name:"author",content:s.author},{name:"keywords",content:s.keywords||""},{name:"robots",content:"index,follow"},{name:"language",content:s.language||"English"},{name:"description",content:s.description||s.title},{name:"theme-color",content:s.color},{name:"og:type",content:"website"},{name:"apple-mobile-web-app-title",content:s.title},{name:"og_site_name",content:s.site||s.title},{name:"og:site_name",content:s.site||s.title},{name:"og:locale",content:"en_US"},{name:"og:url",content:s.url},{name:"og:title",content:s.title},{name:"og:description",content:s.description},{name:"og:image",content:s.image},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:url",content:s.url},{name:"twitter:title",content:s.title},{name:"twitter:description",content:s.description},{name:"twitter:image",content:s.image}])({title:e,author:n,keywords:a,language:o,color:m,image:f,site:_,url:g,description:w});return i.$$set=s=>{"title"in s&&l(1,e=s.title),"author"in s&&l(2,n=s.author),"keywords"in s&&l(3,a=s.keywords),"language"in s&&l(4,o=s.language),"color"in s&&l(5,m=s.color),"image"in s&&l(6,f=s.image),"site"in s&&l(7,_=s.site),"url"in s&&l(8,g=s.url),"description"in s&&l(9,w=s.description)},[N,e,n,a,o,m,f,_,g,w]}class Ue extends B{constructor(t){super(),j(this,t,Pe,Oe,C,{title:1,author:2,keywords:3,language:4,color:5,image:6,site:7,url:8,description:9})}}const{document:x}=Ie;function _e(i){let t,l;return t=new ze({}),{c(){D(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,n){O(t,e,n),l=!0},i(e){l||(A(t.$$.fragment,e),l=!0)},o(e){T(t.$$.fragment,e),l=!1},d(e){P(t,e)}}}function Ye(i){var U,Y,Z,F,G,J,Q;let t,l,e,n,a,o,m,f,_,g,w,k,N,s,h=i[2]&&_e();l=new Ke({});const V=i[4].default,v=ke(V,i,i[3],null);return a=new Ue({props:{title:((U=i[0])==null?void 0:U.title)||((Y=i[0])==null?void 0:Y.name)||"Tools",description:((Z=i[0])==null?void 0:Z.description)||((F=i[0])==null?void 0:F.name)||"Svelte tools",keywords:"code,javascript,"+(((G=i[0])==null?void 0:G.keywords)||((J=i[0])==null?void 0:J.id)),site:"Explosion's Tools",image:((Q=i[0])==null?void 0:Q.image)||"thumbnail.png",color:"#a7c9d9"}}),{c(){h&&h.c(),t=R(),D(l.$$.fragment),e=R(),v&&v.c(),n=R(),D(a.$$.fragment),o=y("base"),m=y("meta"),f=y("meta"),_=y("link"),g=y("style"),w=Ee(`@media print {
			.hidden-print {
				display: none !important;
			}
		}
		.screenshot .hidden-print {
			display: none !important;
		}`),this.h()},l(r){h&&h.l(r),t=z(r),K(l.$$.fragment,r),e=z(r),v&&v.l(r),n=z(r);const u=xe('[data-svelte="svelte-vha7u9"]',x.head);K(a.$$.fragment,u),o=b(u,"BASE",{href:!0}),m=b(u,"META",{charset:!0}),f=b(u,"META",{name:!0,content:!0}),_=b(u,"LINK",{rel:!0,type:!0,href:!0}),g=b(u,"STYLE",{});var E=M(g);w=Se(E,`@media print {
			.hidden-print {
				display: none !important;
			}
		}
		.screenshot .hidden-print {
			display: none !important;
		}`),E.forEach(d),u.forEach(d),this.h()},h(){c(o,"href","/tools/"),c(m,"charset","utf-8"),c(f,"name","viewport"),c(f,"content","width=device-width,initial-scale=1"),x.title="Tools",c(_,"rel","icon"),c(_,"type","image/svg+xml"),c(_,"href","data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%232ec7ce%22></rect><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2276%22>\u{1F604}</text></svg>")},m(r,u){h&&h.m(r,u),S(r,t,u),O(l,r,u),S(r,e,u),v&&v.m(r,u),S(r,n,u),O(a,x.head,null),p(x.head,o),p(x.head,m),p(x.head,f),p(x.head,_),p(x.head,g),p(g,w),k=!0,N||(s=[re(window,"blur",function(){ce(i[1].onblur)&&i[1].onblur.apply(this,arguments)}),re(window,"focus",function(){ce(i[1].onfocus)&&i[1].onfocus.apply(this,arguments)})],N=!0)},p(r,[u]){var W,X,$,ee,te,ne,le;i=r,i[2]?h?u&4&&A(h,1):(h=_e(),h.c(),A(h,1),h.m(t.parentNode,t)):h&&(Be(),T(h,1,1,()=>{h=null}),Ne()),v&&v.p&&(!k||u&8)&&Ae(v,V,i,i[3],k?Te(V,i[3],u,null):Me(i[3]),null);const E={};u&1&&(E.title=((W=i[0])==null?void 0:W.title)||((X=i[0])==null?void 0:X.name)||"Tools"),u&1&&(E.description=(($=i[0])==null?void 0:$.description)||((ee=i[0])==null?void 0:ee.name)||"Svelte tools"),u&1&&(E.keywords="code,javascript,"+(((te=i[0])==null?void 0:te.keywords)||((ne=i[0])==null?void 0:ne.id))),u&1&&(E.image=((le=i[0])==null?void 0:le.image)||"thumbnail.png"),a.$set(E)},i(r){k||(A(h),A(l.$$.fragment,r),A(v,r),A(a.$$.fragment,r),k=!0)},o(r){T(h),T(l.$$.fragment,r),T(v,r),T(a.$$.fragment,r),k=!1},d(r){h&&h.d(r),r&&d(t),P(l,r),r&&d(e),v&&v.d(r),r&&d(n),P(a),d(o),d(m),d(f),d(_),d(g),N=!1,qe(s)}}}console.log(ve);async function $e({params:i,url:t}){let l=t.pathname.split("/").slice(-1)[0],e=ve.find(n=>n.id.toLowerCase()===l.toLowerCase());return e?(console.log(e),{props:{tool:e}}):{tool:{}}}function Ze(i,t,l){let e;Le(i,H,f=>l(2,e=f));let{$$slots:n={},$$scope:a}=t,{tool:o={}}=t,m={};return je(()=>fe(H,e=!0,e)),Ce(()=>fe(H,e=!1,e)),ge(()=>{setInterval(_,2e3);let f=!1;l(1,m.onfocus=()=>(f=!1,_()),m),l(1,m.onblur=()=>(f=!0,_()),m),_();function _(){let g=["\u{1F604}","\u{1F61B}","\u{1F61D}","\u{1F601}","\u{1F643}","\u{1F920}","\u{1F913}"],w=g,k=f?w[~~(Math.random()*1e3)%w.length]:g[~~(Math.random()*1e3)%g.length];[...document.querySelectorAll("link[rel=icon]")].forEach(N=>N.href=`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%232ec7ce%22></rect><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2276%22>${k}</text></svg>`)}}),i.$$set=f=>{"tool"in f&&l(0,o=f.tool),"$$scope"in f&&l(3,a=f.$$scope)},[o,m,e,a,n]}class et extends B{constructor(t){super(),j(this,t,Ze,Ye,C,{tool:0})}}export{et as default,$e as load};
