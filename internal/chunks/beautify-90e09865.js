import{S as Bt,i as Ot,s as zt,e as X,k as rt,t as Dt,c as J,a as H,d as F,m as it,J as Nt,h as Pt,b as o,g as ot,H as R,R as tt,V as ft,E as Mt,v as Rt,Q as jt,W as It,w as ht,F as et,x as mt,G as nt,U as pt,y as vt,O as ct,X as Ut,q as bt,o as yt,B as wt,T as Zt,N as Kt}from"./index-070274e8.js";import{c as Lt,T as qt,n as lt}from"./ToastContainer-77bb0423.js";import{T as Vt,t as dt}from"./TippyStyles-46636d1a.js";import"./index-fb52bf78.js";function Gt(p,k,a={}){const g=Object.assign({tab:"	",indentOn:/[({\[]$/,moveToNewLine:/^[)}\]]/,spellcheck:!1,catchTab:!0,preserveIdent:!0,addClosing:!0,history:!0,window:globalThis},a),y=g.window,v=y.document;let j=[],s=[],A=-1,x=!1,z,M;p.setAttribute("contenteditable","plaintext-only"),p.setAttribute("spellcheck",g.spellcheck?"true":"false"),p.style.outline="none",p.style.overflowWrap="break-word",p.style.overflowY="auto",p.style.whiteSpace="pre-wrap";let N=!1;k(p),p.contentEditable!=="plaintext-only"&&(N=!0),N&&p.setAttribute("contenteditable","true");const q=L(()=>{const n=t();k(p,n),e(n)},30);let C=!1;const T=n=>!U(n)&&!Q(n)&&n.key!=="Meta"&&n.key!=="Control"&&n.key!=="Alt"&&!n.key.startsWith("Arrow"),_=L(n=>{T(n)&&(E(),C=!1)},300),m=(n,u)=>{j.push([n,u]),p.addEventListener(n,u)};m("keydown",n=>{n.defaultPrevented||(M=I(),g.preserveIdent?i(n):d(n),g.catchTab&&h(n),g.addClosing&&w(n),g.history&&(S(n),T(n)&&!C&&(E(),C=!0)),N&&e(t()))}),m("keyup",n=>{n.defaultPrevented||n.isComposing||(M!==I()&&q(),_(n),z&&z(I()))}),m("focus",n=>{x=!0}),m("blur",n=>{x=!1}),m("paste",n=>{E(),Z(n),E(),z&&z(I())});function t(){const n=P(),u={start:0,end:0,dir:void 0};let{anchorNode:f,anchorOffset:c,focusNode:b,focusOffset:$}=n;if(!f||!b)throw"error1";if(f.nodeType===Node.ELEMENT_NODE){const O=v.createTextNode("");f.insertBefore(O,f.childNodes[c]),f=O,c=0}if(b.nodeType===Node.ELEMENT_NODE){const O=v.createTextNode("");b.insertBefore(O,b.childNodes[$]),b=O,$=0}return at(p,O=>{if(O===f&&O===b)return u.start+=c,u.end+=$,u.dir=c<=$?"->":"<-","stop";if(O===f)if(u.start+=c,!u.dir)u.dir="->";else return"stop";else if(O===b)if(u.end+=$,!u.dir)u.dir="<-";else return"stop";O.nodeType===Node.TEXT_NODE&&(u.dir!="->"&&(u.start+=O.nodeValue.length),u.dir!="<-"&&(u.end+=O.nodeValue.length))}),p.normalize(),u}function e(n){const u=P();let f,c=0,b,$=0;if(n.dir||(n.dir="->"),n.start<0&&(n.start=0),n.end<0&&(n.end=0),n.dir=="<-"){const{start:D,end:W}=n;n.start=W,n.end=D}let O=0;at(p,D=>{if(D.nodeType!==Node.TEXT_NODE)return;const W=(D.nodeValue||"").length;if(O+W>n.start&&(f||(f=D,c=n.start-O),O+W>n.end))return b=D,$=n.end-O,"stop";O+=W}),f||(f=p,c=p.childNodes.length),b||(b=p,$=p.childNodes.length),n.dir=="<-"&&([f,c,b,$]=[b,$,f,c]),u.setBaseAndExtent(f,c,b,$)}function r(){const u=P().getRangeAt(0),f=v.createRange();return f.selectNodeContents(p),f.setEnd(u.startContainer,u.startOffset),f.toString()}function l(){const u=P().getRangeAt(0),f=v.createRange();return f.selectNodeContents(p),f.setStart(u.endContainer,u.endOffset),f.toString()}function i(n){if(n.key==="Enter"){const u=r(),f=l();let[c]=B(u),b=c;if(g.indentOn.test(u)&&(b+=g.tab),b.length>0?(K(n),n.stopPropagation(),G(`
`+b)):d(n),b!==c&&g.moveToNewLine.test(f)){const $=t();G(`
`+c),e($)}}}function d(n){if(N&&n.key==="Enter")if(K(n),n.stopPropagation(),l()==""){G(`
 `);const u=t();u.start=--u.end,e(u)}else G(`
`)}function w(n){const u=`([{'"`,f=`)]}'"`,c=l(),b=r(),$=b.substr(b.length-1)==="\\",O=c.substr(0,1);if(f.includes(n.key)&&!$&&O===n.key){const D=t();K(n),D.start=++D.end,e(D)}else if(u.includes(n.key)&&!$&&(`"'`.includes(n.key)||[""," ",`
`].includes(O))){K(n);const D=t(),W=D.start==D.end?"":P().toString(),Y=n.key+W+f[u.indexOf(n.key)];G(Y),D.start++,D.end++,e(D)}}function h(n){if(n.key==="Tab")if(K(n),n.shiftKey){const u=r();let[f,c]=B(u);if(f.length>0){const b=t(),$=Math.min(g.tab.length,f.length);e({start:c,end:c+$}),v.execCommand("delete"),b.start-=$,b.end-=$,e(b)}}else G(g.tab)}function S(n){if(U(n)){K(n),A--;const u=s[A];u&&(p.innerHTML=u.html,e(u.pos)),A<0&&(A=0)}if(Q(n)){K(n),A++;const u=s[A];u&&(p.innerHTML=u.html,e(u.pos)),A>=s.length&&A--}}function E(){if(!x)return;const n=p.innerHTML,u=t(),f=s[A];if(f&&f.html===n&&f.pos.start===u.start&&f.pos.end===u.end)return;A++,s[A]={html:n,pos:u},s.splice(A+1);const c=300;A>c&&(A=c,s.splice(0,1))}function Z(n){K(n);const u=(n.originalEvent||n).clipboardData.getData("text/plain").replace(/\r/g,""),f=t();G(u),k(p),e({start:Math.min(f.start,f.end)+u.length,end:Math.min(f.start,f.end)+u.length,dir:"<-"})}function at(n,u){const f=[];n.firstChild&&f.push(n.firstChild);let c=f.pop();for(;c&&u(c)!=="stop";)c.nextSibling&&f.push(c.nextSibling),c.firstChild&&f.push(c.firstChild),c=f.pop()}function V(n){return n.metaKey||n.ctrlKey}function U(n){return V(n)&&!n.shiftKey&&n.code==="KeyZ"}function Q(n){return V(n)&&n.shiftKey&&n.code==="KeyZ"}function G(n){n=n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),v.execCommand("insertHTML",!1,n)}function L(n,u){let f=0;return(...c)=>{clearTimeout(f),f=y.setTimeout(()=>n(...c),u)}}function B(n){let u=n.length-1;for(;u>=0&&n[u]!==`
`;)u--;u++;let f=u;for(;f<n.length&&/[ \t]/.test(n[f]);)f++;return[n.substring(u,f)||"",u,f]}function I(){return p.textContent||""}function K(n){n.preventDefault()}function P(){var n;return((n=p.parentNode)===null||n===void 0?void 0:n.nodeType)==Node.DOCUMENT_FRAGMENT_NODE?p.parentNode.getSelection():y.getSelection()}return{updateOptions(n){Object.assign(g,n)},updateCode(n){p.textContent=n,k(p)},onUpdate(n){z=n},toString:I,save:t,restore:e,recordHistory:E,destroy(){for(let[n,u]of j)p.removeEventListener(n,u)}}}var Ht={exports:{}};(function(p){var k=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(g){var y=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,v=0,j={},s={manual:g.Prism&&g.Prism.manual,disableWorkerMessageHandler:g.Prism&&g.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof A?new A(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++v}),t.__id},clone:function t(e,r){r=r||{};var l,i;switch(s.util.type(e)){case"Object":if(i=s.util.objId(e),r[i])return r[i];l={},r[i]=l;for(var d in e)e.hasOwnProperty(d)&&(l[d]=t(e[d],r));return l;case"Array":return i=s.util.objId(e),r[i]?r[i]:(l=[],r[i]=l,e.forEach(function(w,h){l[h]=t(w,r)}),l);default:return e}},getLanguage:function(t){for(;t;){var e=y.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(y,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(l){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(l.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var r in e)if(e[r].src==t)return e[r]}return null}},isActive:function(t,e,r){for(var l="no-"+e;t;){var i=t.classList;if(i.contains(e))return!0;if(i.contains(l))return!1;t=t.parentElement}return!!r}},languages:{plain:j,plaintext:j,text:j,txt:j,extend:function(t,e){var r=s.util.clone(s.languages[t]);for(var l in e)r[l]=e[l];return r},insertBefore:function(t,e,r,l){l=l||s.languages;var i=l[t],d={};for(var w in i)if(i.hasOwnProperty(w)){if(w==e)for(var h in r)r.hasOwnProperty(h)&&(d[h]=r[h]);r.hasOwnProperty(w)||(d[w]=i[w])}var S=l[t];return l[t]=d,s.languages.DFS(s.languages,function(E,Z){Z===S&&E!=t&&(this[E]=d)}),d},DFS:function t(e,r,l,i){i=i||{};var d=s.util.objId;for(var w in e)if(e.hasOwnProperty(w)){r.call(e,w,e[w],l||w);var h=e[w],S=s.util.type(h);S==="Object"&&!i[d(h)]?(i[d(h)]=!0,t(h,r,null,i)):S==="Array"&&!i[d(h)]&&(i[d(h)]=!0,t(h,r,w,i))}}},plugins:{},highlightAll:function(t,e){s.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,r){var l={callback:r,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",l),l.elements=Array.prototype.slice.apply(l.container.querySelectorAll(l.selector)),s.hooks.run("before-all-elements-highlight",l);for(var i=0,d;d=l.elements[i++];)s.highlightElement(d,e===!0,l.callback)},highlightElement:function(t,e,r){var l=s.util.getLanguage(t),i=s.languages[l];s.util.setLanguage(t,l);var d=t.parentElement;d&&d.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(d,l);var w=t.textContent,h={element:t,language:l,grammar:i,code:w};function S(Z){h.highlightedCode=Z,s.hooks.run("before-insert",h),h.element.innerHTML=h.highlightedCode,s.hooks.run("after-highlight",h),s.hooks.run("complete",h),r&&r.call(h.element)}if(s.hooks.run("before-sanity-check",h),d=h.element.parentElement,d&&d.nodeName.toLowerCase()==="pre"&&!d.hasAttribute("tabindex")&&d.setAttribute("tabindex","0"),!h.code){s.hooks.run("complete",h),r&&r.call(h.element);return}if(s.hooks.run("before-highlight",h),!h.grammar){S(s.util.encode(h.code));return}if(e&&g.Worker){var E=new Worker(s.filename);E.onmessage=function(Z){S(Z.data)},E.postMessage(JSON.stringify({language:h.language,code:h.code,immediateClose:!0}))}else S(s.highlight(h.code,h.grammar,h.language))},highlight:function(t,e,r){var l={code:t,grammar:e,language:r};if(s.hooks.run("before-tokenize",l),!l.grammar)throw new Error('The language "'+l.language+'" has no grammar.');return l.tokens=s.tokenize(l.code,l.grammar),s.hooks.run("after-tokenize",l),A.stringify(s.util.encode(l.tokens),l.language)},tokenize:function(t,e){var r=e.rest;if(r){for(var l in r)e[l]=r[l];delete e.rest}var i=new M;return N(i,i.head,t),z(t,i,e,i.head,0),C(i)},hooks:{all:{},add:function(t,e){var r=s.hooks.all;r[t]=r[t]||[],r[t].push(e)},run:function(t,e){var r=s.hooks.all[t];if(!(!r||!r.length))for(var l=0,i;i=r[l++];)i(e)}},Token:A};g.Prism=s;function A(t,e,r,l){this.type=t,this.content=e,this.alias=r,this.length=(l||"").length|0}A.stringify=function t(e,r){if(typeof e=="string")return e;if(Array.isArray(e)){var l="";return e.forEach(function(S){l+=t(S,r)}),l}var i={type:e.type,content:t(e.content,r),tag:"span",classes:["token",e.type],attributes:{},language:r},d=e.alias;d&&(Array.isArray(d)?Array.prototype.push.apply(i.classes,d):i.classes.push(d)),s.hooks.run("wrap",i);var w="";for(var h in i.attributes)w+=" "+h+'="'+(i.attributes[h]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+w+">"+i.content+"</"+i.tag+">"};function x(t,e,r,l){t.lastIndex=e;var i=t.exec(r);if(i&&l&&i[1]){var d=i[1].length;i.index+=d,i[0]=i[0].slice(d)}return i}function z(t,e,r,l,i,d){for(var w in r)if(!(!r.hasOwnProperty(w)||!r[w])){var h=r[w];h=Array.isArray(h)?h:[h];for(var S=0;S<h.length;++S){if(d&&d.cause==w+","+S)return;var E=h[S],Z=E.inside,at=!!E.lookbehind,V=!!E.greedy,U=E.alias;if(V&&!E.pattern.global){var Q=E.pattern.toString().match(/[imsuy]*$/)[0];E.pattern=RegExp(E.pattern.source,Q+"g")}for(var G=E.pattern||E,L=l.next,B=i;L!==e.tail&&!(d&&B>=d.reach);B+=L.value.length,L=L.next){var I=L.value;if(e.length>t.length)return;if(!(I instanceof A)){var K=1,P;if(V){if(P=x(G,B,t,at),!P||P.index>=t.length)break;var c=P.index,n=P.index+P[0].length,u=B;for(u+=L.value.length;c>=u;)L=L.next,u+=L.value.length;if(u-=L.value.length,B=u,L.value instanceof A)continue;for(var f=L;f!==e.tail&&(u<n||typeof f.value=="string");f=f.next)K++,u+=f.value.length;K--,I=t.slice(B,u),P.index-=B}else if(P=x(G,0,I,at),!P)continue;var c=P.index,b=P[0],$=I.slice(0,c),O=I.slice(c+b.length),D=B+I.length;d&&D>d.reach&&(d.reach=D);var W=L.prev;$&&(W=N(e,W,$),B+=$.length),q(e,W,K);var Y=new A(w,Z?s.tokenize(b,Z):b,U,b);if(L=N(e,W,Y),O&&N(e,L,O),K>1){var st={cause:w+","+S,reach:D};z(t,e,r,L.prev,B,st),d&&st.reach>d.reach&&(d.reach=st.reach)}}}}}}function M(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function N(t,e,r){var l=e.next,i={value:r,prev:e,next:l};return e.next=i,l.prev=i,t.length++,i}function q(t,e,r){for(var l=e.next,i=0;i<r&&l!==t.tail;i++)l=l.next;e.next=l,l.prev=e,t.length-=i}function C(t){for(var e=[],r=t.head.next;r!==t.tail;)e.push(r.value),r=r.next;return e}if(!g.document)return g.addEventListener&&(s.disableWorkerMessageHandler||g.addEventListener("message",function(t){var e=JSON.parse(t.data),r=e.language,l=e.code,i=e.immediateClose;g.postMessage(s.highlight(l,s.languages[r],r)),i&&g.close()},!1)),s;var T=s.util.currentScript();T&&(s.filename=T.src,T.hasAttribute("data-manual")&&(s.manual=!0));function _(){s.manual||s.highlightAll()}if(!s.manual){var m=document.readyState;m==="loading"||m==="interactive"&&T&&T.defer?document.addEventListener("DOMContentLoaded",_):window.requestAnimationFrame?window.requestAnimationFrame(_):window.setTimeout(_,16)}return s}(k);p.exports&&(p.exports=a),typeof Lt!="undefined"&&(Lt.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(g){g.type==="entity"&&(g.attributes.title=g.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(y,v){var j={};j["language-"+v]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[v]},j.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:j}};s["language-"+v]={pattern:/[\s\S]+/,inside:a.languages[v]};var A={};A[y]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return y}),"i"),lookbehind:!0,greedy:!0,inside:s},a.languages.insertBefore("markup","cdata",A)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(g,y){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+g+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[y,"language-"+y],inside:a.languages[y]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(g){var y=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;g.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+y.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+y.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+y.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:y,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},g.languages.css.atrule.inside.rest=g.languages.css;var v=g.languages.markup;v&&(v.tag.addInlined("style","css"),v.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(typeof a=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var g="Loading\u2026",y=function(T,_){return"\u2716 Error "+T+" while fetching file: "+_},v="\u2716 Error: File does not exist or is empty",j={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",A="loading",x="loaded",z="failed",M="pre[data-src]:not(["+s+'="'+x+'"]):not(['+s+'="'+A+'"])';function N(T,_,m){var t=new XMLHttpRequest;t.open("GET",T,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?_(t.responseText):t.status>=400?m(y(t.status,t.statusText)):m(v))},t.send(null)}function q(T){var _=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(T||"");if(_){var m=Number(_[1]),t=_[2],e=_[3];return t?e?[m,Number(e)]:[m,void 0]:[m,m]}}a.hooks.add("before-highlightall",function(T){T.selector+=", "+M}),a.hooks.add("before-sanity-check",function(T){var _=T.element;if(_.matches(M)){T.code="",_.setAttribute(s,A);var m=_.appendChild(document.createElement("CODE"));m.textContent=g;var t=_.getAttribute("data-src"),e=T.language;if(e==="none"){var r=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=j[r]||r}a.util.setLanguage(m,e),a.util.setLanguage(_,e);var l=a.plugins.autoloader;l&&l.loadLanguages(e),N(t,function(i){_.setAttribute(s,x);var d=q(_.getAttribute("data-range"));if(d){var w=i.split(/\r\n?|\n/g),h=d[0],S=d[1]==null?w.length:d[1];h<0&&(h+=w.length),h=Math.max(0,Math.min(h-1,w.length)),S<0&&(S+=w.length),S=Math.max(0,Math.min(S,w.length)),i=w.slice(h,S).join(`
`),_.hasAttribute("data-start")||_.setAttribute("data-start",String(h+1))}m.textContent=i,a.highlightElement(m)},function(i){_.setAttribute(s,z),m.textContent=i})}}),a.plugins.fileHighlight={highlight:function(_){for(var m=(_||document).querySelectorAll(M),t=0,e;e=m[t++];)a.highlightElement(e)}};var C=!1;a.fileHighlight=function(){C||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),C=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Ht);var $t=Ht.exports;function Wt(p){let k,a,g,y,v,j,s,A;return{c(){k=X("div"),a=X("div"),y=rt(),v=X("style"),j=Dt(`/*
    
    Name:       Base16 Atelier Sulphurpool Light
    Author:     Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/sulphurpool)
    
    Prism template by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/prism/)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)
    
    */
		code[class*='language-'],
		pre[class*='language-'] {
			font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
				'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono',
				'Nimbus Mono L', 'Courier New', Courier, monospace;
			font-size: 14px;
			line-height: 1.375;
			direction: ltr;
			text-align: left;
			white-space: pre;
			word-spacing: normal;
			word-break: normal;
			-moz-tab-size: 4;
			-o-tab-size: 4;
			tab-size: 4;
			-webkit-hyphens: none;
			-moz-hyphens: none;
			-ms-hyphens: none;
			hyphens: none;
			background: #f5f7ff;
			color: #5e6687;
		}

		pre > code[class*='language-'] {
			font-size: 1em;
		}

		pre[class*='language-']::-moz-selection,
		pre[class*='language-'] ::-moz-selection,
		code[class*='language-']::-moz-selection,
		code[class*='language-'] ::-moz-selection {
			text-shadow: none;
			background: #dfe2f1;
		}

		pre[class*='language-']::selection,
		pre[class*='language-'] ::selection,
		code[class*='language-']::selection,
		code[class*='language-'] ::selection {
			text-shadow: none;
			background: #dfe2f1;
		}

		/* Code blocks */
		pre[class*='language-'] {
			padding: 1em;
			margin: 0.5em 0;
			overflow: auto;
		}

		/* Inline code */
		:not(pre) > code[class*='language-'] {
			padding: 0.1em;
			border-radius: 0.3em;
		}

		.token.comment,
		.token.prolog,
		.token.doctype,
		.token.cdata {
			color: #898ea4;
		}

		.token.punctuation {
			color: #5e6687;
		}

		.token.namespace {
			opacity: 0.7;
		}

		.token.operator,
		.token.boolean,
		.token.number {
			color: #c76b29;
		}

		.token.property {
			color: #c08b30;
		}

		.token.tag {
			color: #3d8fd1;
		}

		.token.string {
			color: #22a2c9;
		}

		.token.selector {
			color: #6679cc;
		}

		.token.attr-name {
			color: #c76b29;
		}

		.token.entity,
		.token.url,
		.language-css .token.string,
		.style .token.string {
			color: #22a2c9;
		}

		.token.attr-value,
		.token.keyword,
		.token.control,
		.token.directive,
		.token.unit {
			color: #ac9739;
		}

		.token.statement,
		.token.regex,
		.token.atrule {
			color: #22a2c9;
		}

		.token.placeholder,
		.token.variable {
			color: #3d8fd1;
		}

		.token.deleted {
			text-decoration: line-through;
		}

		.token.inserted {
			border-bottom: 1px dotted #202746;
			text-decoration: none;
		}

		.token.italic {
			font-style: italic;
		}

		.token.important,
		.token.bold {
			font-weight: bold;
		}

		.token.important {
			color: #c94922;
		}

		.token.entity {
			cursor: help;
		}

		pre > code.highlight {
			outline: 0.4em solid #c94922;
			outline-offset: 0.4em;
		}

		/* overrides color-values for the Line Numbers plugin
     * http://prismjs.com/plugins/line-numbers/
     */
		.line-numbers.line-numbers .line-numbers-rows {
			border-right-color: #dfe2f1;
		}

		.line-numbers .line-numbers-rows > span:before {
			color: #979db4;
		}

		/* overrides color-values for the Line Highlight plugin
     * http://prismjs.com/plugins/line-highlight/
     */
		.line-highlight.line-highlight {
			background: rgba(107, 115, 148, 0.2);
			background: -webkit-linear-gradient(
				left,
				rgba(107, 115, 148, 0.2) 70%,
				rgba(107, 115, 148, 0)
			);
			background: linear-gradient(to right, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0));
		}`),this.h()},l(x){k=J(x,"DIV",{id:!0,class:!0});var z=H(k);a=J(z,"DIV",{id:!0,class:!0}),H(a).forEach(F),z.forEach(F),y=it(x);const M=Nt('[data-svelte="svelte-1ahzjnp"]',document.head);v=J(M,"STYLE",{});var N=H(v);j=Pt(N,`/*
    
    Name:       Base16 Atelier Sulphurpool Light
    Author:     Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/sulphurpool)
    
    Prism template by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/prism/)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)
    
    */
		code[class*='language-'],
		pre[class*='language-'] {
			font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
				'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono',
				'Nimbus Mono L', 'Courier New', Courier, monospace;
			font-size: 14px;
			line-height: 1.375;
			direction: ltr;
			text-align: left;
			white-space: pre;
			word-spacing: normal;
			word-break: normal;
			-moz-tab-size: 4;
			-o-tab-size: 4;
			tab-size: 4;
			-webkit-hyphens: none;
			-moz-hyphens: none;
			-ms-hyphens: none;
			hyphens: none;
			background: #f5f7ff;
			color: #5e6687;
		}

		pre > code[class*='language-'] {
			font-size: 1em;
		}

		pre[class*='language-']::-moz-selection,
		pre[class*='language-'] ::-moz-selection,
		code[class*='language-']::-moz-selection,
		code[class*='language-'] ::-moz-selection {
			text-shadow: none;
			background: #dfe2f1;
		}

		pre[class*='language-']::selection,
		pre[class*='language-'] ::selection,
		code[class*='language-']::selection,
		code[class*='language-'] ::selection {
			text-shadow: none;
			background: #dfe2f1;
		}

		/* Code blocks */
		pre[class*='language-'] {
			padding: 1em;
			margin: 0.5em 0;
			overflow: auto;
		}

		/* Inline code */
		:not(pre) > code[class*='language-'] {
			padding: 0.1em;
			border-radius: 0.3em;
		}

		.token.comment,
		.token.prolog,
		.token.doctype,
		.token.cdata {
			color: #898ea4;
		}

		.token.punctuation {
			color: #5e6687;
		}

		.token.namespace {
			opacity: 0.7;
		}

		.token.operator,
		.token.boolean,
		.token.number {
			color: #c76b29;
		}

		.token.property {
			color: #c08b30;
		}

		.token.tag {
			color: #3d8fd1;
		}

		.token.string {
			color: #22a2c9;
		}

		.token.selector {
			color: #6679cc;
		}

		.token.attr-name {
			color: #c76b29;
		}

		.token.entity,
		.token.url,
		.language-css .token.string,
		.style .token.string {
			color: #22a2c9;
		}

		.token.attr-value,
		.token.keyword,
		.token.control,
		.token.directive,
		.token.unit {
			color: #ac9739;
		}

		.token.statement,
		.token.regex,
		.token.atrule {
			color: #22a2c9;
		}

		.token.placeholder,
		.token.variable {
			color: #3d8fd1;
		}

		.token.deleted {
			text-decoration: line-through;
		}

		.token.inserted {
			border-bottom: 1px dotted #202746;
			text-decoration: none;
		}

		.token.italic {
			font-style: italic;
		}

		.token.important,
		.token.bold {
			font-weight: bold;
		}

		.token.important {
			color: #c94922;
		}

		.token.entity {
			cursor: help;
		}

		pre > code.highlight {
			outline: 0.4em solid #c94922;
			outline-offset: 0.4em;
		}

		/* overrides color-values for the Line Numbers plugin
     * http://prismjs.com/plugins/line-numbers/
     */
		.line-numbers.line-numbers .line-numbers-rows {
			border-right-color: #dfe2f1;
		}

		.line-numbers .line-numbers-rows > span:before {
			color: #979db4;
		}

		/* overrides color-values for the Line Highlight plugin
     * http://prismjs.com/plugins/line-highlight/
     */
		.line-highlight.line-highlight {
			background: rgba(107, 115, 148, 0.2);
			background: -webkit-linear-gradient(
				left,
				rgba(107, 115, 148, 0.2) 70%,
				rgba(107, 115, 148, 0)
			);
			background: linear-gradient(to right, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0));
		}`),N.forEach(F),M.forEach(F),this.h()},h(){o(a,"id",p[1]),o(a,"class","svelte-olhsz4"),o(k,"id","code_editor_container"),o(k,"class","svelte-olhsz4")},m(x,z){ot(x,k,z),R(k,a),p[6](k),ot(x,y,z),R(document.head,v),R(v,j),s||(A=tt(g=p[5].call(null,a,{code:p[0],options:p[2],language:p[3]})),s=!0)},p(x,[z]){z&2&&o(a,"id",x[1]),g&&ft(g.update)&&z&13&&g.update.call(null,{code:x[0],options:x[2],language:x[3]})},i:Mt,o:Mt,d(x){x&&F(k),p[6](null),x&&F(y),F(v),s=!1,A()}}}function Yt(p,k,a){let g,y,{code:v="//Hello world"}=k,{options:j={}}=k,{language:s="javascript"}=k,{id:A=Math.random().toString(36).slice(2)}=k;A="code_editor_",Rt(()=>{});function x(M,{code:N,language:q,options:C}){const T=function(m){let t=(q==null?void 0:q.toLowerCase())||"javascript";m.innerHTML=$t.highlight(m.textContent,$t.languages[t],t)};g=new Gt(M,T),g.onUpdate(m=>{console.log("Editor updated"),a(0,v=m)}),_({_code:N,options:C});function _({_code:m,options:t={}}){m!==g.toString()&&(g.updateOptions(t),g.updateCode(m))}return{update({code:m,options:t}){_({_code:m,options:t})}}}function z(M){jt[M?"unshift":"push"](()=>{y=M,a(4,y)})}return p.$$set=M=>{"code"in M&&a(0,v=M.code),"options"in M&&a(2,j=M.options),"language"in M&&a(3,s=M.language),"id"in M&&a(1,A=M.id)},[v,A,j,s,y,x,z]}class Xt extends Bt{constructor(k){super(),Ot(this,k,Yt,Wt,zt,{code:0,options:2,language:3,id:1})}}var ut=(p,k)=>{let a;const g=()=>window.removeEventListener("keydown",a),y=()=>{g(),k&&(a=v=>{!!k.alt!=v.altKey||!!k.shift!=v.shiftKey||!!k.control!=(v.ctrlKey||v.metaKey)||k.code!=v.code||(v.preventDefault(),k.callback?k.callback():p.click())},window.addEventListener("keydown",a))};return y(),{update:y,destroy:g}};const{document:gt}=Kt;function Jt(p){let k,a,g,y,v,j,s,A,x,z,M,N,q,C,T,_,m,t,e,r,l,i,d,w,h,S,E,Z,at,V,U,Q,G,L,B,I,K,P,n;k=new Vt({}),N=new qt({});function u(c){p[3](c)}let f={};return p[1]!==void 0&&(f.code=p[1]),C=new Xt({props:f}),jt.push(()=>It(C,"code",u)),C.$on("change",function(){ft(p[0].updated)&&p[0].updated.apply(this,arguments)}),{c(){ht(k.$$.fragment),a=rt(),g=X("script"),v=X("script"),s=X("script"),x=X("script"),M=rt(),ht(N.$$.fragment),q=rt(),ht(C.$$.fragment),_=rt(),m=X("div"),t=X("button"),e=et("svg"),r=et("path"),l=rt(),i=X("button"),d=et("svg"),w=et("path"),h=rt(),S=X("button"),E=et("svg"),Z=et("path"),at=rt(),V=X("button"),U=et("svg"),Q=et("path"),G=rt(),L=X("button"),B=et("svg"),I=et("path"),this.h()},l(c){mt(k.$$.fragment,c),a=it(c);const b=Nt('[data-svelte="svelte-q0waaa"]',gt.head);g=J(b,"SCRIPT",{src:!0,class:!0});var $=H(g);$.forEach(F),v=J(b,"SCRIPT",{src:!0,class:!0});var O=H(v);O.forEach(F),s=J(b,"SCRIPT",{src:!0,class:!0});var D=H(s);D.forEach(F),x=J(b,"SCRIPT",{src:!0,class:!0});var W=H(x);W.forEach(F),b.forEach(F),M=it(c),mt(N.$$.fragment,c),q=it(c),mt(C.$$.fragment,c),_=it(c),m=J(c,"DIV",{class:!0});var Y=H(m);t=J(Y,"BUTTON",{alt:!0,class:!0});var st=H(t);e=nt(st,"svg",{xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,role:!0,class:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var kt=H(e);r=nt(kt,"path",{fill:!0,d:!0,class:!0}),H(r).forEach(F),kt.forEach(F),st.forEach(F),l=it(Y),i=J(Y,"BUTTON",{alt:!0,class:!0});var xt=H(i);d=nt(xt,"svg",{xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,role:!0,class:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var At=H(d);w=nt(At,"path",{fill:!0,d:!0,class:!0}),H(w).forEach(F),At.forEach(F),xt.forEach(F),h=it(Y),S=J(Y,"BUTTON",{class:!0,alt:!0});var _t=H(S);E=nt(_t,"svg",{xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,role:!0,class:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var Et=H(E);Z=nt(Et,"path",{fill:!0,d:!0,class:!0}),H(Z).forEach(F),Et.forEach(F),_t.forEach(F),at=it(Y),V=J(Y,"BUTTON",{class:!0,alt:!0});var Ft=H(V);U=nt(Ft,"svg",{xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,role:!0,class:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var Ct=H(U);Q=nt(Ct,"path",{fill:!0,d:!0,class:!0}),H(Q).forEach(F),Ct.forEach(F),Ft.forEach(F),G=it(Y),L=J(Y,"BUTTON",{class:!0,alt:!0});var St=H(L);B=nt(St,"svg",{xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,role:!0,class:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var Tt=H(B);I=nt(Tt,"path",{fill:!0,d:!0,class:!0}),H(I).forEach(F),Tt.forEach(F),St.forEach(F),Y.forEach(F),this.h()},h(){pt(g.src,y="https://cdnjs.cloudflare.com/ajax/libs/prettier/2.6.2/standalone.js")||o(g,"src",y),o(g,"class","svelte-6ull7x"),pt(v.src,j="https://cdnjs.cloudflare.com/ajax/libs/prettier/2.6.2/parser-babel.min.js")||o(v,"src",j),o(v,"class","svelte-6ull7x"),pt(s.src,A="https://cdn.jsdelivr.net/npm/source-map@0.7.3/dist/source-map.js")||o(s,"src",A),o(s,"class","svelte-6ull7x"),pt(x.src,z="https://cdn.jsdelivr.net/npm/terser/dist/bundle.min.js")||o(x,"src",z),o(x,"class","svelte-6ull7x"),o(r,"fill","currentColor"),o(r,"d","M12 5a1 1 0 0 0-1 1v12a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1Zm-1.29 6.29l-2.5-2.5a1 1 0 1 0-1.42 1.42l.8.79H3a1 1 0 0 0 0 2h4.59l-.8.79a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.5-2.5a1 1 0 0 0 .21-.33a.94.94 0 0 0 0-.76a1 1 0 0 0-.21-.33ZM21 11h-4.59l.8-.79a1 1 0 0 0-1.42-1.42l-2.5 2.5a1 1 0 0 0 0 1.42l2.5 2.5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-.8-.79H21a1 1 0 0 0 0-2Z"),o(r,"class","svelte-6ull7x"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),o(e,"aria-hidden","true"),o(e,"role","img"),o(e,"class","iconify iconify--uil svelte-6ull7x"),o(e,"width","32"),o(e,"height","32"),o(e,"preserveAspectRatio","xMidYMid meet"),o(e,"viewBox","0 0 24 24"),o(t,"alt","Minify"),o(t,"class","svelte-6ull7x"),o(w,"fill","currentColor"),o(w,"d","M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4zm5.2 0l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4z"),o(w,"class","svelte-6ull7x"),o(d,"xmlns","http://www.w3.org/2000/svg"),o(d,"xmlns:xlink","http://www.w3.org/1999/xlink"),o(d,"aria-hidden","true"),o(d,"role","img"),o(d,"class","iconify iconify--ic svelte-6ull7x"),o(d,"width","32"),o(d,"height","32"),o(d,"preserveAspectRatio","xMidYMid meet"),o(d,"viewBox","0 0 24 24"),o(i,"alt","Beautify"),o(i,"class","svelte-6ull7x"),o(Z,"fill","currentColor"),o(Z,"d","M232 36v140a12 12 0 0 1-24 0V48H80a12 12 0 0 1 0-24h140a12 12 0 0 1 12 12Zm-40 40v140a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V76a12 12 0 0 1 12-12h140a12 12 0 0 1 12 12Zm-24 12H52v116h116Z"),o(Z,"class","svelte-6ull7x"),o(E,"xmlns","http://www.w3.org/2000/svg"),o(E,"xmlns:xlink","http://www.w3.org/1999/xlink"),o(E,"aria-hidden","true"),o(E,"role","img"),o(E,"class","iconify iconify--ph svelte-6ull7x"),o(E,"width","32"),o(E,"height","32"),o(E,"preserveAspectRatio","xMidYMid meet"),o(E,"viewBox","0 0 256 256"),o(S,"class","sm svelte-6ull7x"),o(S,"alt","Copy"),o(Q,"fill","currentColor"),o(Q,"d","M47.5 112.5a12 12 0 0 1 17-17L116 147V32a12 12 0 0 1 24 0v115l51.5-51.5a12 12 0 0 1 17 17l-72 72a12.1 12.1 0 0 1-17 0ZM216 204H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24Z"),o(Q,"class","svelte-6ull7x"),o(U,"xmlns","http://www.w3.org/2000/svg"),o(U,"xmlns:xlink","http://www.w3.org/1999/xlink"),o(U,"aria-hidden","true"),o(U,"role","img"),o(U,"class","iconify iconify--ph svelte-6ull7x"),o(U,"width","32"),o(U,"height","32"),o(U,"preserveAspectRatio","xMidYMid meet"),o(U,"viewBox","0 0 256 256"),o(V,"class","sm svelte-6ull7x"),o(V,"alt","Save"),o(I,"fill","currentColor"),o(I,"d","M216 36H68.5a20 20 0 0 0-17.1 9.7L5.7 121.8a12 12 0 0 0 0 12.4l45.7 76.1a20 20 0 0 0 17.1 9.7H216a20.1 20.1 0 0 0 20-20V56a20.1 20.1 0 0 0-20-20Zm-4 160H70.8L30 128l40.8-68H212Zm-108.5-52.5L119 128l-15.5-15.5a12 12 0 0 1 17-17L136 111l15.5-15.5a12 12 0 0 1 17 17L153 128l15.5 15.5a12 12 0 0 1 0 17a12.1 12.1 0 0 1-17 0L136 145l-15.5 15.5a12.1 12.1 0 0 1-17 0a12 12 0 0 1 0-17Z"),o(I,"class","svelte-6ull7x"),o(B,"xmlns","http://www.w3.org/2000/svg"),o(B,"xmlns:xlink","http://www.w3.org/1999/xlink"),o(B,"aria-hidden","true"),o(B,"role","img"),o(B,"class","iconify iconify--ph svelte-6ull7x"),o(B,"width","32"),o(B,"height","32"),o(B,"preserveAspectRatio","xMidYMid meet"),o(B,"viewBox","0 0 256 256"),o(L,"class","sm svelte-6ull7x"),o(L,"alt","Clear"),o(m,"class","buttons svelte-6ull7x")},m(c,b){vt(k,c,b),ot(c,a,b),R(gt.head,g),R(gt.head,v),R(gt.head,s),R(gt.head,x),ot(c,M,b),vt(N,c,b),ot(c,q,b),vt(C,c,b),ot(c,_,b),ot(c,m,b),R(m,t),R(t,e),R(e,r),R(m,l),R(m,i),R(i,d),R(d,w),R(m,h),R(m,S),R(S,E),R(E,Z),R(m,at),R(m,V),R(V,U),R(U,Q),R(m,G),R(m,L),R(L,B),R(B,I),K=!0,P||(n=[tt(ut.call(null,t,{control:!0,code:"KeyM"})),ct(t,"click",function(){ft(p[0].min)&&p[0].min.apply(this,arguments)}),tt(dt.call(null,t,{content:"Minify",placement:"left"})),tt(ut.call(null,i,{control:!0,code:"Enter"})),tt(ut.call(null,i,{control:!0,code:"KeyB"})),ct(i,"click",function(){ft(p[0].format)&&p[0].format.apply(this,arguments)}),tt(dt.call(null,i,{content:"Beautify",placement:"left"})),tt(ut.call(null,S,{control:!0,code:"KeyC"})),ct(S,"click",function(){ft(p[0].copy)&&p[0].copy.apply(this,arguments)}),tt(dt.call(null,S,{content:"Copy",placement:"left"})),tt(ut.call(null,V,{control:!0,code:"KeyS"})),ct(V,"click",p[4]),tt(dt.call(null,V,{content:"Save",placement:"left"})),tt(ut.call(null,L,{control:!0,code:"Escape"})),ct(L,"click",p[5]),tt(dt.call(null,L,{content:"Clear",placement:"left"}))],P=!0)},p(c,[b]){p=c;const $={};!T&&b&2&&(T=!0,$.code=p[1],Ut(()=>T=!1)),C.$set($)},i(c){K||(bt(k.$$.fragment,c),bt(N.$$.fragment,c),bt(C.$$.fragment,c),K=!0)},o(c){yt(k.$$.fragment,c),yt(N.$$.fragment,c),yt(C.$$.fragment,c),K=!1},d(c){wt(k,c),c&&F(a),F(g),F(v),F(s),F(x),c&&F(M),wt(N,c),c&&F(q),wt(C,c),c&&F(_),c&&F(m),P=!1,Zt(n)}}}function Qt(p,k,a){let g=new Proxy({},{get(){return()=>{}}}),y=`
	/*
	Keyboard shortcuts:
	Control + M:          Minify
	Control + B:          Beautify
	Control + C:          Copy all code (or selection)
	Control + Enter:      Beautify code
	Control + S:          Save code
	Control + Escape:     Clear editor
	*/`.trim().split(`
`).map(x=>x.trim()).join(`
`);const v=({code:x})=>{a(1,y=x)};Rt(()=>{v({code:y}),window.onpaste=C=>{C.preventDefault(),v({code:C.clipboardData.getData("text/plain")})};async function x(){try{let C=await window.Terser.minify(y);window.prettier.format(y,{parser:"babel",plugins:window.prettierPlugins}),v({code:C.code})}catch{lt.show("Couldn't minify code")}}a(0,g={format:z,min:x,copy:N,updated:M,download:q});async function z(){try{v({code:window.prettier.format(y,{parser:"babel",plugins:window.prettierPlugins})}),lt.show("Beautified")}catch{lt.show("Couldn't beautify code")}}function M({detail:{detail:C}}){v({code:C})}function N(){var _;if((_=window.getSelection().toString().trim())!=null&&_.length){const m=()=>lt.show("Copied selection");navigator.clipboard.writeText(window.getSelection().toString()).then(m,()=>{prompt("Copy the code below: ",window.getSelection().toString()),m()});return}let C=y;navigator.clipboard.writeText(C).then(T,()=>{prompt("Copy the code below: ",C),T()});function T(){lt.show("Copied code!")}}function q(C,T,_){var m=new Blob([C],{type:_});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(m,T);else{var t=document.createElement("a"),e=URL.createObjectURL(m);t.href=e,t.download=T,document.body.appendChild(t),t.click(),setTimeout(function(){document.body.removeChild(t),window.URL.revokeObjectURL(e)},0)}lt.show(`Saved ${T}`)}});function j(x){y=x,a(1,y)}return[g,y,v,j,()=>g.download(y,"code.js","application/javascript"),()=>v({code:""})]}class re extends Bt{constructor(k){super(),Ot(this,k,Qt,Jt,zt,{})}}export{re as default};
