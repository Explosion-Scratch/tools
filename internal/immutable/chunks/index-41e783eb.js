function w(){}const J=t=>t;function vt(t,e){for(const n in e)t[n]=e[n];return t}function Et(t){return t&&typeof t=="object"&&typeof t.then=="function"}function ft(t){return t()}function lt(){return Object.create(null)}function C(t){t.forEach(ft)}function B(t){return typeof t=="function"}function Zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function te(t,e){return q||(q=document.createElement("a")),q.href=e,t===q.href}function At(t){return Object.keys(t).length===0}function Ct(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ee(t,e,n){t.$$.on_destroy.push(Ct(e,n))}function ne(t,e,n,i){if(t){const s=_t(t,e,n,i);return t[0](s)}}function _t(t,e,n,i){return t[1]&&i?vt(n.ctx.slice(),t[1](i(e))):n.ctx}function ie(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let a=0;a<r;a+=1)l[a]=e.dirty[a]|s[a];return l}return e.dirty|s}return e.dirty}function se(t,e,n,i,s,l){if(s){const r=_t(e,n,i,l);t.p(r,s)}}function re(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ce(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function le(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function ae(t,e,n){return t.set(n),e}function oe(t){return t&&B(t.destroy)?t.destroy:w}const dt=typeof window!="undefined";let K=dt?()=>window.performance.now():()=>Date.now(),tt=dt?t=>requestAnimationFrame(t):w;const S=new Set;function ht(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&tt(ht)}function Q(t){let e;return S.size===0&&tt(ht),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let U=!1;function St(){U=!0}function Tt(){U=!1}function Nt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function jt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const _=e[o];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=o?s+1:Nt(1,s,u=>e[n[u]].claim_order,o))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const l=[],r=[];let a=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);a>=c;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);l.reverse(),r.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<r.length;c++){for(;o<l.length&&r[c].claim_order>=l[o].claim_order;)o++;const _=o<l.length?l[o]:null;t.insertBefore(r[c],_)}}function Mt(t,e){t.appendChild(e)}function mt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Rt(t){const e=et("style");return Dt(mt(t),e),e.sheet}function Dt(t,e){Mt(t.head||t,e)}function Bt(t,e){if(U){for(jt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){t.insertBefore(e,n||null)}function Lt(t,e,n){U&&!n?Bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function G(t){t.parentNode.removeChild(t)}function ue(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function Ot(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function nt(t){return document.createTextNode(t)}function fe(){return nt(" ")}function _e(){return nt("")}function de(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function he(t){return function(e){return e.preventDefault(),t.call(this,e)}}function pt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function me(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:pt(t,i,e[i])}function pe(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:pt(t,e,n)}function qt(t){return Array.from(t.childNodes)}function gt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function yt(t,e,n,i,s=!1){gt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function bt(t,e,n,i){return yt(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const a=s.attributes[r];n[a.name]||l.push(a.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ge(t,e,n){return bt(t,e,n,et)}function ye(t,e,n){return bt(t,e,n,Ot)}function Pt(t,e){return yt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>nt(e),!0)}function be(t){return Pt(t," ")}function at(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function xe(t){const e=at(t,"HTML_TAG_START",0),n=at(t,"HTML_TAG_END",e);if(e===n)return new ot;gt(t);const i=t.splice(e,n-e+1);G(i[0]),G(i[i.length-1]);const s=i.slice(1,i.length-1);for(const l of s)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new ot(s)}function we(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $e(t,e){t.value=e==null?"":e}function ke(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ve(t,e,n){t.classList[n?"add":"remove"](e)}function xt(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function Ee(t,e=document.body){return Array.from(e.querySelectorAll(t))}class zt{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.e=et(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Ht(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(G)}}class ot extends zt{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Lt(this.t,this.n[n],e)}}const I=new Map;let W=0;function Ft(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Gt(t,e){const n={stylesheet:Rt(e),rules:{}};return I.set(t,n),n}function M(t,e,n,i,s,l,r,a=0){const c=16.666/i;let o=`{
`;for(let m=0;m<=1;m+=c){const y=e+(n-e)*l(m);o+=m*100+`%{${r(y,1-y)}}
`}const _=o+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Ft(_)}_${a}`,u=mt(t),{stylesheet:d,rules:h}=I.get(u)||Gt(u,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,W+=1,f}function R(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),W-=s,W||It())}function It(){tt(()=>{W||(I.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),I.clear())})}function Ae(t,e,n,i){if(!e)return w;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return w;const{delay:l=0,duration:r=300,easing:a=J,start:c=K()+l,end:o=c+r,tick:_=w,css:f}=n(t,{from:e,to:s},i);let u=!0,d=!1,h;function p(){f&&(h=M(t,0,1,r,l,a,f)),l||(d=!0)}function m(){f&&R(t,h),u=!1}return Q(y=>{if(!d&&y>=c&&(d=!0),d&&y>=o&&(_(1,0),m()),!u)return!1;if(d){const b=y-c,x=0+1*a(b/r);_(x,1-x)}return!0}),p(),_(0,1),m}function Ce(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Wt(t,s)}}function Wt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let D;function E(t){D=t}function H(){if(!D)throw new Error("Function called outside component initialization");return D}function Se(t){H().$$.on_mount.push(t)}function Te(t){H().$$.after_update.push(t)}function Ne(){const t=H();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=xt(e,n);i.slice().forEach(l=>{l.call(t,s)})}}}function je(t,e){H().$$.context.set(t,e)}function Me(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const j=[],ut=[],z=[],Y=[],wt=Promise.resolve();let Z=!1;function $t(){Z||(Z=!0,wt.then(it))}function Re(){return $t(),wt}function T(t){z.push(t)}function De(t){Y.push(t)}const X=new Set;let P=0;function it(){const t=D;do{for(;P<j.length;){const e=j[P];P++,E(e),Jt(e.$$)}for(E(null),j.length=0,P=0;ut.length;)ut.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];X.has(n)||(X.add(n),n())}z.length=0}while(j.length);for(;Y.length;)Y.pop()();Z=!1,X.clear(),E(t)}function Jt(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let N;function st(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function A(t,e,n){t.dispatchEvent(xt(`${e?"intro":"outro"}${n}`))}const F=new Set;let v;function Kt(){v={r:0,c:[],p:v}}function Qt(){v.r||C(v.c),v=v.p}function rt(t,e){t&&t.i&&(F.delete(t),t.i(e))}function kt(t,e,n,i){if(t&&t.o){if(F.has(t))return;F.add(t),v.c.push(()=>{F.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const ct={duration:0};function Be(t,e,n){let i=e(t,n),s=!1,l,r,a=0;function c(){l&&R(t,l)}function o(){const{delay:f=0,duration:u=300,easing:d=J,tick:h=w,css:p}=i||ct;p&&(l=M(t,0,1,u,f,d,p,a++)),h(0,1);const m=K()+f,y=m+u;r&&r.abort(),s=!0,T(()=>A(t,!0,"start")),r=Q(b=>{if(s){if(b>=y)return h(1,0),A(t,!0,"end"),c(),s=!1;if(b>=m){const x=d((b-m)/u);h(x,1-x)}}return s})}let _=!1;return{start(){_||(_=!0,R(t),B(i)?(i=i(),st().then(o)):o())},invalidate(){_=!1},end(){s&&(c(),s=!1)}}}function He(t,e,n){let i=e(t,n),s=!0,l;const r=v;r.r+=1;function a(){const{delay:c=0,duration:o=300,easing:_=J,tick:f=w,css:u}=i||ct;u&&(l=M(t,1,0,o,c,_,u));const d=K()+c,h=d+o;T(()=>A(t,!1,"start")),Q(p=>{if(s){if(p>=h)return f(0,1),A(t,!1,"end"),--r.r||C(r.c),!1;if(p>=d){const m=_((p-d)/o);f(1-m,m)}}return s})}return B(i)?st().then(()=>{i=i(),a()}):a(),{end(c){c&&i.tick&&i.tick(1,0),s&&(l&&R(t,l),s=!1)}}}function Le(t,e,n,i){let s=e(t,n),l=i?0:1,r=null,a=null,c=null;function o(){c&&R(t,c)}function _(u,d){const h=u.b-l;return d*=Math.abs(h),{a:l,b:u.b,d:h,duration:d,start:u.start,end:u.start+d,group:u.group}}function f(u){const{delay:d=0,duration:h=300,easing:p=J,tick:m=w,css:y}=s||ct,b={start:K()+d,b:u};u||(b.group=v,v.r+=1),r||a?a=b:(y&&(o(),c=M(t,l,u,h,d,p,y)),u&&m(0,1),r=_(b,h),T(()=>A(t,u,"start")),Q(x=>{if(a&&x>a.start&&(r=_(a,h),a=null,A(t,r.b,"start"),y&&(o(),c=M(t,l,r.b,r.duration,0,p,s.css))),r){if(x>=r.end)m(l=r.b,1-l),A(t,r.b,"end"),a||(r.b?o():--r.group.r||C(r.group.c)),r=null;else if(x>=r.start){const L=x-r.start;l=r.a+r.d*p(L/r.duration),m(l,1-l)}}return!!(r||a)}))}return{run(u){B(s)?st().then(()=>{s=s(),f(u)}):f(u)},end(){o(),r=a=null}}}function Oe(t,e){const n=e.token={};function i(s,l,r,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;r!==void 0&&(c=c.slice(),c[r]=a);const o=s&&(e.current=s)(c);let _=!1;e.block&&(e.blocks?e.blocks.forEach((f,u)=>{u!==l&&f&&(Kt(),kt(f,1,1,()=>{e.blocks[u]===f&&(e.blocks[u]=null)}),Qt())}):e.block.d(1),o.c(),rt(o,1),o.m(e.mount(),e.anchor),_=!0),e.block=o,e.blocks&&(e.blocks[l]=o),_&&it()}if(Et(t)){const s=H();if(t.then(l=>{E(s),i(e.then,1,e.value,l),E(null)},l=>{if(E(s),i(e.catch,2,e.error,l),E(null),!e.hasCatch)throw l}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function qe(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}const Pe=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Ut(t,e){kt(t,1,1,()=>{e.delete(t.key)})}function ze(t,e){t.f(),Ut(t,e)}function Fe(t,e,n,i,s,l,r,a,c,o,_,f){let u=t.length,d=l.length,h=u;const p={};for(;h--;)p[t[h].key]=h;const m=[],y=new Map,b=new Map;for(h=d;h--;){const g=f(s,l,h),$=n(g);let k=r.get($);k?i&&k.p(g,e):(k=o($,g),k.c()),y.set($,m[h]=k),$ in p&&b.set($,Math.abs(h-p[$]))}const x=new Set,L=new Set;function V(g){rt(g,1),g.m(a,_),r.set(g.key,g),_=g.first,d--}for(;u&&d;){const g=m[d-1],$=t[u-1],k=g.key,O=$.key;g===$?(_=g.first,u--,d--):y.has(O)?!r.has(k)||x.has(k)?V(g):L.has(O)?u--:b.get(k)>b.get(O)?(L.add(k),V(g)):(x.add(O),u--):(c($,r),u--)}for(;u--;){const g=t[u];y.has(g.key)||c(g,r)}for(;d;)V(m[d-1]);return m}function Ge(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],a=e[l];if(a){for(const c in r)c in a||(i[c]=1);for(const c in a)s[c]||(n[c]=a[c],s[c]=1);t[l]=a}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ie(t){return typeof t=="object"&&t!==null?t:{}}function We(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Je(t){t&&t.c()}function Ke(t,e){t&&t.l(e)}function Vt(t,e,n,i){const{fragment:s,on_mount:l,on_destroy:r,after_update:a}=t.$$;s&&s.m(e,n),i||T(()=>{const c=l.map(ft).filter(B);r?r.push(...c):C(c),t.$$.on_mount=[]}),a.forEach(T)}function Xt(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Yt(t,e){t.$$.dirty[0]===-1&&(j.push(t),$t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qe(t,e,n,i,s,l,r,a=[-1]){const c=D;E(t);const o=t.$$={fragment:null,ctx:null,props:l,update:w,not_equal:s,bound:lt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:lt(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};r&&r(o.root);let _=!1;if(o.ctx=n?n(t,e.props||{},(f,u,...d)=>{const h=d.length?d[0]:u;return o.ctx&&s(o.ctx[f],o.ctx[f]=h)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](h),_&&Yt(t,f)),u}):[],o.update(),_=!0,C(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){St();const f=qt(e.target);o.fragment&&o.fragment.l(f),f.forEach(G)}else o.fragment&&o.fragment.c();e.intro&&rt(t.$$.fragment),Vt(t,e.target,e.anchor,e.customElement),Tt(),it()}E(c)}class Ue{$destroy(){Xt(this,1),this.$destroy=w}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!At(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{We as $,Ie as A,Xt as B,vt as C,Re as D,w as E,Bt as F,T as G,Le as H,Ot as I,ye as J,me as K,ue as L,ne as M,Ee as N,de as O,B as P,se as Q,re as R,Ue as S,ie as T,C as U,ee as V,ae as W,Pe as X,J as Y,oe as Z,ut as _,qt as a,te as a0,De as a1,Ce as a2,Wt as a3,Ae as a4,Be as a5,He as a6,Fe as a7,ze as a8,ve as a9,le as aa,Ne as ab,ce as ac,ot as ad,xe as ae,Oe as af,he as ag,qe as ah,$e as ai,pe as aj,Me as ak,pt as b,ge as c,G as d,et as e,ke as f,Lt as g,Pt as h,Qe as i,we as j,fe as k,_e as l,be as m,Kt as n,kt as o,Qt as p,rt as q,je as r,Zt as s,nt as t,Te as u,Se as v,Je as w,Ke as x,Vt as y,Ge as z};
