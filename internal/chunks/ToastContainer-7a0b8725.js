import{U as T,C as E,S as F,i as G,s as H,e as $,t as D,k as x,c as q,a as O,h as N,d as v,m as P,b as g,g as j,H as k,j as Y,P as Z,Y as J,Z as K,_ as L,$ as Q,a0 as W,a1 as X,n as tt,a2 as et,p as nt,q as it,o as st,a3 as ot,E as at,a4 as rt,a5 as lt}from"./index-d503e6f5.js";import{w as ct}from"./index-ffd8c7ff.js";var mt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function vt(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}let w=ct([]),S=[];w.subscribe(n=>S=n);var bt={show(n,{timeout:e=1e3,dismissable:t=!0}={}){let s=Math.random().toString(36).slice(2);return w.update(a=>[...a,{timer:setTimeout(()=>{this.hide(s)},e),dismissable:t,id:s,text:n}]),setInterval(()=>{S.length>3&&this.hide(S[0].id)},100),{dismiss(){this.hide(s)}}},hide(n){w.update(e=>e.filter(t=>t.id!==n))}};function U(n){const e=n-1;return e*e*e+1}function dt(n){return--n*n*n*n*n+1}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function ft(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(n);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(n,s[a])&&(t[s[a]]=n[s[a]]);return t}function ut(n){var{fallback:e}=n,t=ft(n,["fallback"]);const s=new Map,a=new Map;function c(o,i,r){const{delay:u=0,duration:d=m=>Math.sqrt(m)*30,easing:y=U}=E(E({},t),r),h=i.getBoundingClientRect(),l=o.left-h.left,p=o.top-h.top,_=o.width/h.width,b=o.height/h.height,C=Math.sqrt(l*l+p*p),M=getComputedStyle(i),V=M.transform==="none"?"":M.transform,A=+M.opacity;return{delay:u,duration:T(d)?d(C):d,easing:y,css:(m,z)=>`
				opacity: ${m*A};
				transform-origin: top left;
				transform: ${V} translate(${z*l}px,${z*p}px) scale(${m+(1-m)*_}, ${m+(1-m)*b});
			`}}function f(o,i,r){return(u,d)=>(o.set(d.key,{rect:u.getBoundingClientRect()}),()=>{if(i.has(d.key)){const{rect:y}=i.get(d.key);return i.delete(d.key),c(y,u,d)}return o.delete(d.key),e&&e(u,d,r)})}return[f(a,s,!1),f(s,a,!0)]}function ht(n,{from:e,to:t},s={}){const a=getComputedStyle(n),c=a.transform==="none"?"":a.transform,[f,o]=a.transformOrigin.split(" ").map(parseFloat),i=e.left+e.width*f/t.width-(t.left+f),r=e.top+e.height*o/t.height-(t.top+o),{delay:u=0,duration:d=h=>Math.sqrt(h)*120,easing:y=U}=s;return{delay:u,duration:T(d)?d(Math.sqrt(i*i+r*r)):d,easing:y,css:(h,l)=>{const p=l*i,_=l*r,b=h+l*e.width/t.width,C=h+l*e.height/t.height;return`transform: ${c} translate(${p}px, ${_}px) scale(${b}, ${C});`}}}function R(n,e,t){const s=n.slice();return s[5]=e[t],s}function B(n){let e,t,s,a;return{c(){e=$("button"),t=D("x"),this.h()},l(c){e=q(c,"BUTTON",{class:!0});var f=O(e);t=N(f,"x"),f.forEach(v),this.h()},h(){g(e,"class","dismiss svelte-z0v7lz")},m(c,f){j(c,e,f),k(e,t),s||(a=Z(e,"click",function(){T(n[1](n[5].id))&&n[1](n[5].id).apply(this,arguments)}),s=!0)},p(c,f){n=c},d(c){c&&v(e),s=!1,a()}}}function I(n,e){let t,s,a=e[5].text+"",c,f,o,i,r,u,d,y=at,h,l=e[5].dismissable&&B(e);return{key:n,first:null,c(){t=$("div"),s=$("span"),c=D(a),f=x(),l&&l.c(),o=x(),this.h()},l(p){t=q(p,"DIV",{class:!0,id:!0});var _=O(t);s=q(_,"SPAN",{id:!0,class:!0});var b=O(s);c=N(b,a),b.forEach(v),f=P(_),l&&l.l(_),o=P(_),_.forEach(v),this.h()},h(){g(s,"id","text"),g(s,"class","svelte-z0v7lz"),g(t,"class","notification svelte-z0v7lz"),g(t,"id",i=e[5].id),this.first=t},m(p,_){j(p,t,_),k(t,s),k(s,c),k(t,f),l&&l.m(t,null),k(t,o),h=!0},p(p,_){e=p,(!h||_&1)&&a!==(a=e[5].text+"")&&Y(c,a),e[5].dismissable?l?l.p(e,_):(l=B(e),l.c(),l.m(t,o)):l&&(l.d(1),l=null),(!h||_&1&&i!==(i=e[5].id))&&g(t,"id",i)},r(){d=t.getBoundingClientRect()},f(){J(t),y(),K(t,d)},a(){y(),y=L(t,d,ht,{duration:200})},i(p){h||(Q(()=>{u&&u.end(1),r=W(t,e[3],{key:e[5].id}),r.start()}),h=!0)},o(p){r&&r.invalidate(),u=X(t,e[2],{key:e[5].id}),h=!1},d(p){p&&v(t),l&&l.d(),p&&u&&u.end()}}}function pt(n){let e,t=[],s=new Map,a,c=n[0];const f=o=>o[5].id;for(let o=0;o<c.length;o+=1){let i=R(n,c,o),r=f(i);s.set(r,t[o]=I(r,i))}return{c(){e=$("div");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=q(o,"DIV",{id:!0,class:!0});var i=O(e);for(let r=0;r<t.length;r+=1)t[r].l(i);i.forEach(v),this.h()},h(){g(e,"id","notifications_container"),g(e,"class","svelte-z0v7lz")},m(o,i){j(o,e,i);for(let r=0;r<t.length;r+=1)t[r].m(e,null);a=!0},p(o,[i]){if(i&3){c=o[0],tt();for(let r=0;r<t.length;r+=1)t[r].r();t=et(t,i,f,1,o,c,s,e,rt,I,null,R);for(let r=0;r<t.length;r+=1)t[r].a();nt()}},i(o){if(!a){for(let i=0;i<c.length;i+=1)it(t[i]);a=!0}},o(o){for(let i=0;i<t.length;i+=1)st(t[i]);a=!1},d(o){o&&v(e);for(let i=0;i<t.length;i+=1)t[i].d()}}}function _t(n,e,t){let s,a;ot(n,w,i=>t(4,a=i));function c(i){return()=>{lt(w,a=a.filter(r=>r.id!==i),a)}}const[f,o]=ut({duration:i=>Math.sqrt(i*200),fallback(i,r){const u=getComputedStyle(i),d=u.transform==="none"?"":u.transform;return{duration:600,easing:dt,css:y=>`
					transform: ${d} scale(${y});
					opacity: ${y}
				`}}});return n.$$.update=()=>{n.$$.dirty&16&&t(0,s=a)},[s,c,f,o,a]}class kt extends F{constructor(e){super(),G(this,e,_t,pt,H,{})}}export{kt as T,vt as a,mt as c,bt as n};
