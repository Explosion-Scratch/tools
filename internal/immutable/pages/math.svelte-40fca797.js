var be=Object.defineProperty,ke=Object.defineProperties;var we=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var Ee=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var ee=(n,e,l)=>e in n?be(n,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[e]=l,B=(n,e)=>{for(var l in e||(e={}))Ee.call(e,l)&&ee(n,l,e[l]);if(Z)for(var l of Z(e))Se.call(e,l)&&ee(n,l,e[l]);return n},F=(n,e)=>ke(n,we(e));import{S as ue,i as he,s as fe,e as k,t as N,k as R,c as w,a as E,h as T,d as f,m as M,b as g,g as I,F as m,j as O,L as K,E as C,v as pe,u as ye,_ as de,N as $e,a0 as J,aj as H,O as te,o as L,p as _e,q as P,U as Ie,V as Ve,W as se,n as ve,l as le,w as De,x as Ne,y as Te,B as Re}from"../chunks/index-0ee63240.js";import{l as U}from"../chunks/store-5cff5e15.js";import"../chunks/index-8bd30b3e.js";function re(n,e,l){const s=n.slice();return s[3]=e[l],s}function ae(n,e,l){const s=n.slice();return s[6]=e[l],s}function oe(n,e,l){const s=n.slice();return s[9]=e[l],s}function ne(n){let e,l,s=n[9].prevExpression+"",r,o,t,p=n[9].expression+"",i,d,a,c=n[9].step+"",_;return{c(){e=k("div"),l=k("div"),r=N(s),o=R(),t=k("div"),i=N(p),d=R(),a=k("div"),_=N(c),this.h()},l(u){e=w(u,"DIV",{class:!0});var h=E(e);l=w(h,"DIV",{class:!0});var V=E(l);r=T(V,s),V.forEach(f),o=M(h),t=w(h,"DIV",{class:!0});var S=E(t);i=T(S,p),S.forEach(f),h.forEach(f),d=M(u),a=w(u,"DIV",{class:!0});var b=E(a);_=T(b,c),b.forEach(f),this.h()},h(){g(l,"class","from svelte-a8kia8"),g(t,"class","to svelte-a8kia8"),g(e,"class","from_to_container svelte-a8kia8"),g(a,"class","text svelte-a8kia8")},m(u,h){I(u,e,h),m(e,l),m(l,r),m(e,o),m(e,t),m(t,i),I(u,d,h),I(u,a,h),m(a,_)},p(u,h){h&1&&s!==(s=u[9].prevExpression+"")&&O(r,s),h&1&&p!==(p=u[9].expression+"")&&O(i,p),h&1&&c!==(c=u[9].step+"")&&O(_,c)},d(u){u&&f(e),u&&f(d),u&&f(a)}}}function ie(n){let e,l=n[6].templateName+"",s,r,o,t=n[6].steps,p=[];for(let i=0;i<t.length;i+=1)p[i]=ne(oe(n,t,i));return{c(){e=k("h4"),s=N(l),r=R(),o=k("div");for(let i=0;i<p.length;i+=1)p[i].c();this.h()},l(i){e=w(i,"H4",{class:!0});var d=E(e);s=T(d,l),d.forEach(f),r=M(i),o=w(i,"DIV",{class:!0});var a=E(o);for(let c=0;c<p.length;c+=1)p[c].l(a);a.forEach(f),this.h()},h(){g(e,"class","solutionName svelte-a8kia8"),g(o,"class","steps svelte-a8kia8")},m(i,d){I(i,e,d),m(e,s),I(i,r,d),I(i,o,d);for(let a=0;a<p.length;a+=1)p[a].m(o,null)},p(i,d){if(d&1&&l!==(l=i[6].templateName+"")&&O(s,l),d&1){t=i[6].steps;let a;for(a=0;a<t.length;a+=1){const c=oe(i,t,a);p[a]?p[a].p(c,d):(p[a]=ne(c),p[a].c(),p[a].m(o,null))}for(;a<p.length;a+=1)p[a].d(1);p.length=t.length}},d(i){i&&f(e),i&&f(r),i&&f(o),K(p,i)}}}function ce(n){let e,l,s=n[3].actionName+"",r,o,t,p=n[3].solution+"",i,d,a=n[3].templateSteps,c=[];for(let _=0;_<a.length;_+=1)c[_]=ie(ae(n,a,_));return{c(){e=k("div"),l=k("h2"),r=N(s),o=R(),t=k("div"),i=R();for(let _=0;_<c.length;_+=1)c[_].c();d=R(),this.h()},l(_){e=w(_,"DIV",{class:!0});var u=E(e);l=w(u,"H2",{class:!0});var h=E(l);r=T(h,s),h.forEach(f),o=M(u),t=w(u,"DIV",{class:!0});var V=E(t);V.forEach(f),i=M(u);for(let S=0;S<c.length;S+=1)c[S].l(u);d=M(u),u.forEach(f),this.h()},h(){g(l,"class","actionName svelte-a8kia8"),g(t,"class","solution_text svelte-a8kia8"),g(e,"class","action svelte-a8kia8")},m(_,u){I(_,e,u),m(e,l),m(l,r),m(e,o),m(e,t),t.innerHTML=p,m(e,i);for(let h=0;h<c.length;h+=1)c[h].m(e,null);m(e,d)},p(_,u){if(u&1&&s!==(s=_[3].actionName+"")&&O(r,s),u&1&&p!==(p=_[3].solution+"")&&(t.innerHTML=p),u&1){a=_[3].templateSteps;let h;for(h=0;h<a.length;h+=1){const V=ae(_,a,h);c[h]?c[h].p(V,u):(c[h]=ie(V),c[h].c(),c[h].m(e,d))}for(;h<c.length;h+=1)c[h].d(1);c.length=a.length}},d(_){_&&f(e),K(c,_)}}}function Me(n){let e,l=n[0].actions,s=[];for(let r=0;r<l.length;r+=1)s[r]=ce(re(n,l,r));return{c(){e=k("div");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=w(r,"DIV",{class:!0});var o=E(e);for(let t=0;t<s.length;t+=1)s[t].l(o);o.forEach(f),this.h()},h(){g(e,"class","result_container")},m(r,o){I(r,e,o);for(let t=0;t<s.length;t+=1)s[t].m(e,null);n[2](e)},p(r,[o]){if(o&1){l=r[0].actions;let t;for(t=0;t<l.length;t+=1){const p=re(r,l,t);s[t]?s[t].p(p,o):(s[t]=ce(p),s[t].c(),s[t].m(e,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=l.length}},i:C,o:C,d(r){r&&f(e),K(s,r),n[2](null)}}}function qe(n,e,l){let{result:s={}}=e,r=document.body;pe(()=>{console.log("Result component: ",s)}),ye(()=>{var t;console.log(window.renderMathInElement),(t=window==null?void 0:window.renderMathInElement)==null||t.call(window,r,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}]})});function o(t){de[t?"unshift":"push"](()=>{r=t,l(1,r)})}return n.$$set=t=>{"result"in t&&l(0,s=t.result)},[s,r,o]}class je extends ue{constructor(e){super(),he(this,e,qe,Me,fe,{result:0})}}function xe(n){let e;function l(o,t){return o[2]&&o[2].value?Ae:Ce}let s=l(n),r=s(n);return{c(){e=k("div"),r.c(),this.h()},l(o){e=w(o,"DIV",{class:!0});var t=E(e);r.l(t),t.forEach(f),this.h()},h(){g(e,"class","prompt_message svelte-1ar066e")},m(o,t){I(o,e,t),r.m(e,null)},p(o,t){s!==(s=l(o))&&(r.d(1),r=s(o),r&&(r.c(),r.m(e,null)))},i:C,o:C,d(o){o&&f(e),r.d()}}}function Oe(n){let e,l,s,r;const o=[Pe,Le],t=[];function p(i,d){return i[0].isError?0:1}return e=p(n),l=t[e]=o[e](n),{c(){l.c(),s=le()},l(i){l.l(i),s=le()},m(i,d){t[e].m(i,d),I(i,s,d),r=!0},p(i,d){let a=e;e=p(i),e===a?t[e].p(i,d):(ve(),L(t[a],1,1,()=>{t[a]=null}),_e(),l=t[e],l?l.p(i,d):(l=t[e]=o[e](i),l.c()),P(l,1),l.m(s.parentNode,s))},i(i){r||(P(l),r=!0)},o(i){L(l),r=!1},d(i){t[e].d(i),i&&f(s)}}}function Ce(n){let e;return{c(){e=N("Enter a math formula to solve!")},l(l){e=T(l,"Enter a math formula to solve!")},m(l,s){I(l,e,s)},d(l){l&&f(e)}}}function Ae(n){let e;return{c(){e=N("Click solve to try to solve!")},l(l){e=T(l,"Click solve to try to solve!")},m(l,s){I(l,e,s)},d(l){l&&f(e)}}}function Le(n){let e,l;return e=new je({props:{result:n[0]}}),{c(){De(e.$$.fragment)},l(s){Ne(e.$$.fragment,s)},m(s,r){Te(e,s,r),l=!0},p(s,r){const o={};r&1&&(o.result=s[0]),e.$set(o)},i(s){l||(P(e.$$.fragment,s),l=!0)},o(s){L(e.$$.fragment,s),l=!1},d(s){Re(e,s)}}}function Pe(n){let e,l,s=(n[0].errorDisplayMessage||n[0].errorMessage||"Math invalid")+"",r;return{c(){e=k("span"),l=N("There was an error: "),r=N(s),this.h()},l(o){e=w(o,"SPAN",{class:!0});var t=E(e);l=T(t,"There was an error: "),r=T(t,s),t.forEach(f),this.h()},h(){g(e,"class","error svelte-1ar066e")},m(o,t){I(o,e,t),m(e,l),m(e,r)},p(o,t){t&1&&s!==(s=(o[0].errorDisplayMessage||o[0].errorMessage||"Math invalid")+"")&&O(r,s)},i:C,o:C,d(o){o&&f(e)}}}function We(n){let e,l,s,r,o,t,p,i,d,a,c,_,u,h,V,S,b,v,$,j,W;const G=[Oe,xe],q=[];function z(y,D){return y[0]?0:1}return b=z(n),v=q[b]=G[b](n),{c(){e=k("script"),s=k("link"),r=k("script"),t=k("script"),i=R(),d=k("div"),a=k("div"),c=k("math-field"),_=R(),u=k("button"),h=N("Solve"),V=R(),S=k("div"),v.c(),this.h()},l(y){const D=$e('[data-svelte="svelte-1e56vpb"]',document.head);e=w(D,"SCRIPT",{src:!0,class:!0});var A=E(e);A.forEach(f),s=w(D,"LINK",{rel:!0,href:!0,class:!0}),r=w(D,"SCRIPT",{src:!0,class:!0});var me=E(r);me.forEach(f),t=w(D,"SCRIPT",{src:!0,class:!0});var ge=E(t);ge.forEach(f),D.forEach(f),i=M(y),d=w(y,"DIV",{class:!0});var Q=E(d);a=w(Q,"DIV",{class:!0});var x=E(a);c=w(x,"MATH-FIELD",{"smart-mode":!0,defaultmode:!0,"virtual-keyboard-mode":!0,class:!0}),E(c).forEach(f),_=M(x),u=w(x,"BUTTON",{class:!0});var X=E(u);h=T(X,"Solve"),X.forEach(f),V=M(x),S=w(x,"DIV",{class:!0});var Y=E(S);v.l(Y),Y.forEach(f),x.forEach(f),Q.forEach(f),this.h()},h(){J(e.src,l="https://unpkg.com/mathlive@0.73.4/dist/mathlive.min.js")||g(e,"src",l),g(e,"class","svelte-1ar066e"),g(s,"rel","stylesheet"),g(s,"href","https://cdn.jsdelivr.net/npm/katex@0.15.6/dist/katex.min.css"),g(s,"class","svelte-1ar066e"),r.defer=!0,J(r.src,o="https://cdn.jsdelivr.net/npm/katex@0.15.6/dist/katex.min.js")||g(r,"src",o),g(r,"class","svelte-1ar066e"),t.defer=!0,J(t.src,p="https://cdn.jsdelivr.net/npm/katex@0.15.6/dist/contrib/auto-render.min.js")||g(t,"src",p),g(t,"class","svelte-1ar066e"),H(c,"smart-mode",""),H(c,"defaultmode","math"),H(c,"virtual-keyboard-mode","manual"),H(c,"class","svelte-1ar066e"),g(u,"class","solve svelte-1ar066e"),g(S,"class","result svelte-1ar066e"),g(a,"class","inner_container svelte-1ar066e"),g(d,"class","container svelte-1ar066e")},m(y,D){m(document.head,e),m(document.head,s),m(document.head,r),m(document.head,t),I(y,i,D),I(y,d,D),m(d,a),m(a,c),n[5](c),m(a,_),m(a,u),m(u,h),m(a,V),m(a,S),q[b].m(S,null),$=!0,j||(W=[te(c,"input",n[4]),te(u,"click",n[3])],j=!0)},p(y,[D]){let A=b;b=z(y),b===A?q[b].p(y,D):(ve(),L(q[A],1,1,()=>{q[A]=null}),_e(),v=q[b],v?v.p(y,D):(v=q[b]=G[b](y),v.c()),P(v,1),v.m(S,null))},i(y){$||(P(v),$=!0)},o(y){L(v),$=!1},d(y){f(e),f(s),f(r),f(t),y&&f(i),y&&f(d),n[5](null),q[b].d(),j=!1,Ie(W)}}}function He(n,e,l){let s;Ve(n,U,a=>l(6,s=a));let r=null,o=String.raw`x = 3, y = x^2`,t=null;pe(()=>{window.mathField=t,t.setValue(o),t.setOptions(F(B({},t.getOptions()),{smartSuperscript:!0,onKeystroke(a,c,_){console.log({mf:a,key:c,ev:_}),c==="ctrl+[KeyA]"&&a.executeCommand("selectAll");const u=String.raw`\left.\begin{cases}`,h=String.raw`\end{cases}\right.`,V=String.raw`\placeholder{New equation}`,S=String.raw`\\{${V}}${h}`;if(c==="shift+[Enter]"){let v=t.value;if(v.startsWith(u)){console.log({START:u,ENDCASES:h},v.includes(h));let $=v.replace(new RegExp(`^${b(u)}`),"").replace(new RegExp(`${b(h)}$`),"");console.log($),a.setValue(`${u}${$}${S}`)}else{let $=t.position;a.setValue(u+`{${t.value}}`+S),l(2,t.position=$+7,t)}}function b(v){return v.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}if(c==="[Backspace]"){if(t.value===String.raw`\left.\begin{cases}{}\end{cases}\right.`){t.setValue("");return}let v=t.value,$=String.raw`\\ {}`;if(console.log({val:v},v.startsWith(u),v.endsWith($+h),$+h),v.startsWith(u)&&(v.endsWith($+h)||v.endsWith($+" "+h))){let j=v.replace(new RegExp(`^${b(u)}`),"").replace(new RegExp(`${b($)}[ \\\\]*${b(h)}$`),"");console.log(j);let W=t.position;t.setValue(`${u}${j}${h}`),l(2,t.position=W-3,t)}}return c==="ctrl+[Backspace]"&&a.setValue(""),(c==="ctrl+[Enter]"||c==="[Enter]")&&p(),!0},inlineShortcuts:F(B({},t.getOptions("inlineShortcuts")),{"*":"\\cdot","**":"\\ast","***":"\\star","//":"\\slash","\\":"\\backslash",setminus:"\\backslash","|><":"\\ltimes","><|":"\\rtimes","|><|":"\\bowtie","-:":"\\div",divide:"\\div","@":"\\circ","o+":"\\oplus",ox:"\\otimes","o.":"\\odot","^^":"\\wedge","^^^":"\\bigwedge",vv:"\\vee",vvv:"\\bigvee",nn:"\\cap",nnn:"\\bigcap",uu:"\\cup",uuu:"\\bigcup","-=":"\\equiv","~=":"\\cong",lt:"<","lt=":"\\leq",gt:">","gt=":"\\geq","-<":"\\prec","-lt":"\\prec","-<=":"\\preceq",">-=":"\\succeq",prop:"\\propto",diamond:"\\diamond",square:"\\square",iff:"\\iff",sub:"\\subset",sup:"\\supset",sube:"\\subseteq",supe:"\\supseteq",uarr:"\\uparrow",darr:"\\downarrow",rarr:"\\rightarrow",rArr:"\\Rightarrow",larr:"\\leftarrow",lArr:"\\Leftarrow",harr:"\\leftrightarrow",hArr:"\\Leftrightarrow",aleph:"\\aleph",and:"\\land",or:"\\lor",not:"\\neg","_|_":"\\bot",TT:"\\top","|--":"\\vdash","|==":"\\models","|__":"\\lfloor","__|":"\\rfloor","|~":"\\lceiling","~|":"\\rceiling",">->":"\\rightarrowtail","->>":"\\twoheadrightarrow",">->>":"\\twoheadrightarrowtail"})}))});async function p(){se(U,s=!0,s);let a=o,c=await fetch("https://apis.explosionscratc.repl.co/fetch",{method:"POST",body:JSON.stringify({url:"https://mathsolver.microsoft.com/cameraexp/api/v1/solvelatex",args:{headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify({latexExpression:a,clientInfo:{platform:"web",mkt:"en",skipGraphOutput:!0,skipBingVideoEntity:!0},customLatex:a,showCustomResult:!1}),referrer:`https://mathsolver.microsoft.com/en/solve-problem/${encodeURIComponent(a)}`,referrerPolicy:"strict-origin-when-cross-origin",method:"POST"}})}).then(_=>_.json());l(0,r=JSON.parse(JSON.parse(c.json.results[0].tags[0].actions[0].customData).previewText).mathSolverResult),se(U,s=!1,s)}const i=a=>l(1,o=a.target.value);function d(a){de[a?"unshift":"push"](()=>{t=a,l(2,t)})}return[r,o,t,p,i,d]}class Ke extends ue{constructor(e){super(),he(this,e,He,We,fe,{})}}export{Ke as default};
