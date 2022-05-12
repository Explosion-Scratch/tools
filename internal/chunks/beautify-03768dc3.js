var qt=Object.defineProperty;var ht=Object.getOwnPropertySymbols;var Dt=Object.prototype.hasOwnProperty,Rt=Object.prototype.propertyIsEnumerable;var Ot=(u,v,a)=>v in u?qt(u,v,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[v]=a,dt=(u,v)=>{for(var a in v||(v={}))Dt.call(v,a)&&Ot(u,a,v[a]);if(ht)for(var a of ht(v))Rt.call(v,a)&&Ot(u,a,v[a]);return u};var $t=(u,v)=>{var a={};for(var c in u)Dt.call(u,c)&&v.indexOf(c)<0&&(a[c]=u[c]);if(u!=null&&ht)for(var c of ht(u))v.indexOf(c)<0&&Rt.call(u,c)&&(a[c]=u[c]);return a};import{S as jt,i as Ht,s as It,e as Y,k as rt,t as Vt,c as X,a as j,d as F,m as ot,J as Pt,h as Gt,b as s,g as st,H as B,V as tt,L as pt,E as Bt,v as Ut,U as Zt,X as Wt,w as vt,F as et,x as bt,G as nt,W as mt,y as wt,K as lt,Y as Jt,q as yt,o as kt,B as xt,P as Yt,Q as Xt}from"./index-2f2d55da.js";import{c as zt,T as Qt,n as ut}from"./ToastContainer-df8edda7.js";import{T as te}from"./TippyStyles-043a8ebe.js";import{t as gt}from"./tooltip-899db86d.js";import"./index-18e1b684.js";import"./index-c83230f2.js";function ee(u,v,a={}){const c=Object.assign({tab:"	",indentOn:/[({\[]$/,moveToNewLine:/^[)}\]]/,spellcheck:!1,catchTab:!0,preserveIdent:!0,addClosing:!0,history:!0,window:globalThis},a),w=c.window,b=w.document;let z=[],i=[],_=-1,T=!1,C,S;u.setAttribute("contenteditable","plaintext-only"),u.setAttribute("spellcheck",c.spellcheck?"true":"false"),u.style.outline="none",u.style.overflowWrap="break-word",u.style.overflowY="auto",u.style.whiteSpace="pre-wrap";let $=!1;v(u),u.contentEditable!=="plaintext-only"&&($=!0),$&&u.setAttribute("contenteditable","true");const q=L(()=>{const n=e();v(u,n),t(n)},30);let N=!1;const A=n=>!U(n)&&!Q(n)&&n.key!=="Meta"&&n.key!=="Control"&&n.key!=="Alt"&&!n.key.startsWith("Arrow"),y=L(n=>{A(n)&&(E(),N=!1)},300),h=(n,d)=>{z.push([n,d]),u.addEventListener(n,d)};h("keydown",n=>{n.defaultPrevented||(S=P(),c.preserveIdent?o(n):f(n),c.catchTab&&m(n),c.addClosing&&x(n),c.history&&(M(n),A(n)&&!N&&(E(),N=!0)),$&&t(e()))}),h("keyup",n=>{n.defaultPrevented||n.isComposing||(S!==P()&&q(),y(n),C&&C(P()))}),h("focus",n=>{T=!0}),h("blur",n=>{T=!1}),h("paste",n=>{E(),Z(n),E(),C&&C(P())});function e(){const n=I(),d={start:0,end:0,dir:void 0};let{anchorNode:p,anchorOffset:g,focusNode:k,focusOffset:O}=n;if(!p||!k)throw"error1";if(p.nodeType===Node.ELEMENT_NODE){const R=b.createTextNode("");p.insertBefore(R,p.childNodes[g]),p=R,g=0}if(k.nodeType===Node.ELEMENT_NODE){const R=b.createTextNode("");k.insertBefore(R,k.childNodes[O]),k=R,O=0}return at(u,R=>{if(R===p&&R===k)return d.start+=g,d.end+=O,d.dir=g<=O?"->":"<-","stop";if(R===p)if(d.start+=g,!d.dir)d.dir="->";else return"stop";else if(R===k)if(d.end+=O,!d.dir)d.dir="<-";else return"stop";R.nodeType===Node.TEXT_NODE&&(d.dir!="->"&&(d.start+=R.nodeValue.length),d.dir!="<-"&&(d.end+=R.nodeValue.length))}),u.normalize(),d}function t(n){const d=I();let p,g=0,k,O=0;if(n.dir||(n.dir="->"),n.start<0&&(n.start=0),n.end<0&&(n.end=0),n.dir=="<-"){const{start:H,end:W}=n;n.start=W,n.end=H}let R=0;at(u,H=>{if(H.nodeType!==Node.TEXT_NODE)return;const W=(H.nodeValue||"").length;if(R+W>n.start&&(p||(p=H,g=n.start-R),R+W>n.end))return k=H,O=n.end-R,"stop";R+=W}),p||(p=u,g=u.childNodes.length),k||(k=u,O=u.childNodes.length),n.dir=="<-"&&([p,g,k,O]=[k,O,p,g]),d.setBaseAndExtent(p,g,k,O)}function r(){const d=I().getRangeAt(0),p=b.createRange();return p.selectNodeContents(u),p.setEnd(d.startContainer,d.startOffset),p.toString()}function l(){const d=I().getRangeAt(0),p=b.createRange();return p.selectNodeContents(u),p.setStart(d.endContainer,d.endOffset),p.toString()}function o(n){if(n.key==="Enter"){const d=r(),p=l();let[g]=D(d),k=g;if(c.indentOn.test(d)&&(k+=c.tab),k.length>0?(K(n),n.stopPropagation(),G(`
`+k)):f(n),k!==g&&c.moveToNewLine.test(p)){const O=e();G(`
`+g),t(O)}}}function f(n){if($&&n.key==="Enter")if(K(n),n.stopPropagation(),l()==""){G(`
 `);const d=e();d.start=--d.end,t(d)}else G(`
`)}function x(n){const d=`([{'"`,p=`)]}'"`,g=l(),k=r(),O=k.substr(k.length-1)==="\\",R=g.substr(0,1);if(p.includes(n.key)&&!O&&R===n.key){const H=e();K(n),H.start=++H.end,t(H)}else if(d.includes(n.key)&&!O&&(`"'`.includes(n.key)||[""," ",`
`].includes(R))){K(n);const H=e(),W=H.start==H.end?"":I().toString(),J=n.key+W+p[d.indexOf(n.key)];G(J),H.start++,H.end++,t(H)}}function m(n){if(n.key==="Tab")if(K(n),n.shiftKey){const d=r();let[p,g]=D(d);if(p.length>0){const k=e(),O=Math.min(c.tab.length,p.length);t({start:g,end:g+O}),b.execCommand("delete"),k.start-=O,k.end-=O,t(k)}}else G(c.tab)}function M(n){if(U(n)){K(n),_--;const d=i[_];d&&(u.innerHTML=d.html,t(d.pos)),_<0&&(_=0)}if(Q(n)){K(n),_++;const d=i[_];d&&(u.innerHTML=d.html,t(d.pos)),_>=i.length&&_--}}function E(){if(!T)return;const n=u.innerHTML,d=e(),p=i[_];if(p&&p.html===n&&p.pos.start===d.start&&p.pos.end===d.end)return;_++,i[_]={html:n,pos:d},i.splice(_+1);const g=300;_>g&&(_=g,i.splice(0,1))}function Z(n){K(n);const d=(n.originalEvent||n).clipboardData.getData("text/plain").replace(/\r/g,""),p=e();G(d),v(u),t({start:Math.min(p.start,p.end)+d.length,end:Math.min(p.start,p.end)+d.length,dir:"<-"})}function at(n,d){const p=[];n.firstChild&&p.push(n.firstChild);let g=p.pop();for(;g&&d(g)!=="stop";)g.nextSibling&&p.push(g.nextSibling),g.firstChild&&p.push(g.firstChild),g=p.pop()}function V(n){return n.metaKey||n.ctrlKey}function U(n){return V(n)&&!n.shiftKey&&n.code==="KeyZ"}function Q(n){return V(n)&&n.shiftKey&&n.code==="KeyZ"}function G(n){n=n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),b.execCommand("insertHTML",!1,n)}function L(n,d){let p=0;return(...g)=>{clearTimeout(p),p=w.setTimeout(()=>n(...g),d)}}function D(n){let d=n.length-1;for(;d>=0&&n[d]!==`
`;)d--;d++;let p=d;for(;p<n.length&&/[ \t]/.test(n[p]);)p++;return[n.substring(d,p)||"",d,p]}function P(){return u.textContent||""}function K(n){n.preventDefault()}function I(){var n;return((n=u.parentNode)===null||n===void 0?void 0:n.nodeType)==Node.DOCUMENT_FRAGMENT_NODE?u.parentNode.getSelection():w.getSelection()}return{updateOptions(n){Object.assign(c,n)},updateCode(n){u.textContent=n,v(u)},onUpdate(n){C=n},toString:P,save:e,restore:t,recordHistory:E,destroy(){for(let[n,d]of z)u.removeEventListener(n,d)}}}var Kt={exports:{}};(function(u){var v=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(c){var w=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,b=0,z={},i={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof _?new _(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++b}),e.__id},clone:function e(t,r){r=r||{};var l,o;switch(i.util.type(t)){case"Object":if(o=i.util.objId(t),r[o])return r[o];l={},r[o]=l;for(var f in t)t.hasOwnProperty(f)&&(l[f]=e(t[f],r));return l;case"Array":return o=i.util.objId(t),r[o]?r[o]:(l=[],r[o]=l,t.forEach(function(x,m){l[m]=e(x,r)}),l);default:return t}},getLanguage:function(e){for(;e;){var t=w.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(w,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(l){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(l.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var r in t)if(t[r].src==e)return t[r]}return null}},isActive:function(e,t,r){for(var l="no-"+t;e;){var o=e.classList;if(o.contains(t))return!0;if(o.contains(l))return!1;e=e.parentElement}return!!r}},languages:{plain:z,plaintext:z,text:z,txt:z,extend:function(e,t){var r=i.util.clone(i.languages[e]);for(var l in t)r[l]=t[l];return r},insertBefore:function(e,t,r,l){l=l||i.languages;var o=l[e],f={};for(var x in o)if(o.hasOwnProperty(x)){if(x==t)for(var m in r)r.hasOwnProperty(m)&&(f[m]=r[m]);r.hasOwnProperty(x)||(f[x]=o[x])}var M=l[e];return l[e]=f,i.languages.DFS(i.languages,function(E,Z){Z===M&&E!=e&&(this[E]=f)}),f},DFS:function e(t,r,l,o){o=o||{};var f=i.util.objId;for(var x in t)if(t.hasOwnProperty(x)){r.call(t,x,t[x],l||x);var m=t[x],M=i.util.type(m);M==="Object"&&!o[f(m)]?(o[f(m)]=!0,e(m,r,null,o)):M==="Array"&&!o[f(m)]&&(o[f(m)]=!0,e(m,r,x,o))}}},plugins:{},highlightAll:function(e,t){i.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,r){var l={callback:r,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",l),l.elements=Array.prototype.slice.apply(l.container.querySelectorAll(l.selector)),i.hooks.run("before-all-elements-highlight",l);for(var o=0,f;f=l.elements[o++];)i.highlightElement(f,t===!0,l.callback)},highlightElement:function(e,t,r){var l=i.util.getLanguage(e),o=i.languages[l];i.util.setLanguage(e,l);var f=e.parentElement;f&&f.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(f,l);var x=e.textContent,m={element:e,language:l,grammar:o,code:x};function M(Z){m.highlightedCode=Z,i.hooks.run("before-insert",m),m.element.innerHTML=m.highlightedCode,i.hooks.run("after-highlight",m),i.hooks.run("complete",m),r&&r.call(m.element)}if(i.hooks.run("before-sanity-check",m),f=m.element.parentElement,f&&f.nodeName.toLowerCase()==="pre"&&!f.hasAttribute("tabindex")&&f.setAttribute("tabindex","0"),!m.code){i.hooks.run("complete",m),r&&r.call(m.element);return}if(i.hooks.run("before-highlight",m),!m.grammar){M(i.util.encode(m.code));return}if(t&&c.Worker){var E=new Worker(i.filename);E.onmessage=function(Z){M(Z.data)},E.postMessage(JSON.stringify({language:m.language,code:m.code,immediateClose:!0}))}else M(i.highlight(m.code,m.grammar,m.language))},highlight:function(e,t,r){var l={code:e,grammar:t,language:r};if(i.hooks.run("before-tokenize",l),!l.grammar)throw new Error('The language "'+l.language+'" has no grammar.');return l.tokens=i.tokenize(l.code,l.grammar),i.hooks.run("after-tokenize",l),_.stringify(i.util.encode(l.tokens),l.language)},tokenize:function(e,t){var r=t.rest;if(r){for(var l in r)t[l]=r[l];delete t.rest}var o=new S;return $(o,o.head,e),C(e,o,t,o.head,0),N(o)},hooks:{all:{},add:function(e,t){var r=i.hooks.all;r[e]=r[e]||[],r[e].push(t)},run:function(e,t){var r=i.hooks.all[e];if(!(!r||!r.length))for(var l=0,o;o=r[l++];)o(t)}},Token:_};c.Prism=i;function _(e,t,r,l){this.type=e,this.content=t,this.alias=r,this.length=(l||"").length|0}_.stringify=function e(t,r){if(typeof t=="string")return t;if(Array.isArray(t)){var l="";return t.forEach(function(M){l+=e(M,r)}),l}var o={type:t.type,content:e(t.content,r),tag:"span",classes:["token",t.type],attributes:{},language:r},f=t.alias;f&&(Array.isArray(f)?Array.prototype.push.apply(o.classes,f):o.classes.push(f)),i.hooks.run("wrap",o);var x="";for(var m in o.attributes)x+=" "+m+'="'+(o.attributes[m]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+x+">"+o.content+"</"+o.tag+">"};function T(e,t,r,l){e.lastIndex=t;var o=e.exec(r);if(o&&l&&o[1]){var f=o[1].length;o.index+=f,o[0]=o[0].slice(f)}return o}function C(e,t,r,l,o,f){for(var x in r)if(!(!r.hasOwnProperty(x)||!r[x])){var m=r[x];m=Array.isArray(m)?m:[m];for(var M=0;M<m.length;++M){if(f&&f.cause==x+","+M)return;var E=m[M],Z=E.inside,at=!!E.lookbehind,V=!!E.greedy,U=E.alias;if(V&&!E.pattern.global){var Q=E.pattern.toString().match(/[imsuy]*$/)[0];E.pattern=RegExp(E.pattern.source,Q+"g")}for(var G=E.pattern||E,L=l.next,D=o;L!==t.tail&&!(f&&D>=f.reach);D+=L.value.length,L=L.next){var P=L.value;if(t.length>e.length)return;if(!(P instanceof _)){var K=1,I;if(V){if(I=T(G,D,e,at),!I||I.index>=e.length)break;var g=I.index,n=I.index+I[0].length,d=D;for(d+=L.value.length;g>=d;)L=L.next,d+=L.value.length;if(d-=L.value.length,D=d,L.value instanceof _)continue;for(var p=L;p!==t.tail&&(d<n||typeof p.value=="string");p=p.next)K++,d+=p.value.length;K--,P=e.slice(D,d),I.index-=D}else if(I=T(G,0,P,at),!I)continue;var g=I.index,k=I[0],O=P.slice(0,g),R=P.slice(g+k.length),H=D+P.length;f&&H>f.reach&&(f.reach=H);var W=L.prev;O&&(W=$(t,W,O),D+=O.length),q(t,W,K);var J=new _(x,Z?i.tokenize(k,Z):k,U,k);if(L=$(t,W,J),R&&$(t,L,R),K>1){var it={cause:x+","+M,reach:H};C(e,t,r,L.prev,D,it),f&&it.reach>f.reach&&(f.reach=it.reach)}}}}}}function S(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function $(e,t,r){var l=t.next,o={value:r,prev:t,next:l};return t.next=o,l.prev=o,e.length++,o}function q(e,t,r){for(var l=t.next,o=0;o<r&&l!==e.tail;o++)l=l.next;t.next=l,l.prev=t,e.length-=o}function N(e){for(var t=[],r=e.head.next;r!==e.tail;)t.push(r.value),r=r.next;return t}if(!c.document)return c.addEventListener&&(i.disableWorkerMessageHandler||c.addEventListener("message",function(e){var t=JSON.parse(e.data),r=t.language,l=t.code,o=t.immediateClose;c.postMessage(i.highlight(l,i.languages[r],r)),o&&c.close()},!1)),i;var A=i.util.currentScript();A&&(i.filename=A.src,A.hasAttribute("data-manual")&&(i.manual=!0));function y(){i.manual||i.highlightAll()}if(!i.manual){var h=document.readyState;h==="loading"||h==="interactive"&&A&&A.defer?document.addEventListener("DOMContentLoaded",y):window.requestAnimationFrame?window.requestAnimationFrame(y):window.setTimeout(y,16)}return i}(v);u.exports&&(u.exports=a),typeof zt!="undefined"&&(zt.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(c){c.type==="entity"&&(c.attributes.title=c.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(w,b){var z={};z["language-"+b]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[b]},z.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:z}};i["language-"+b]={pattern:/[\s\S]+/,inside:a.languages[b]};var _={};_[w]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return w}),"i"),lookbehind:!0,greedy:!0,inside:i},a.languages.insertBefore("markup","cdata",_)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(c,w){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+c+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[w,"language-"+w],inside:a.languages[w]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(c){var w=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;c.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+w.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+w.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+w.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:w,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},c.languages.css.atrule.inside.rest=c.languages.css;var b=c.languages.markup;b&&(b.tag.addInlined("style","css"),b.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(typeof a=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var c="Loading\u2026",w=function(A,y){return"\u2716 Error "+A+" while fetching file: "+y},b="\u2716 Error: File does not exist or is empty",z={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",_="loading",T="loaded",C="failed",S="pre[data-src]:not(["+i+'="'+T+'"]):not(['+i+'="'+_+'"])';function $(A,y,h){var e=new XMLHttpRequest;e.open("GET",A,!0),e.onreadystatechange=function(){e.readyState==4&&(e.status<400&&e.responseText?y(e.responseText):e.status>=400?h(w(e.status,e.statusText)):h(b))},e.send(null)}function q(A){var y=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(A||"");if(y){var h=Number(y[1]),e=y[2],t=y[3];return e?t?[h,Number(t)]:[h,void 0]:[h,h]}}a.hooks.add("before-highlightall",function(A){A.selector+=", "+S}),a.hooks.add("before-sanity-check",function(A){var y=A.element;if(y.matches(S)){A.code="",y.setAttribute(i,_);var h=y.appendChild(document.createElement("CODE"));h.textContent=c;var e=y.getAttribute("data-src"),t=A.language;if(t==="none"){var r=(/\.(\w+)$/.exec(e)||[,"none"])[1];t=z[r]||r}a.util.setLanguage(h,t),a.util.setLanguage(y,t);var l=a.plugins.autoloader;l&&l.loadLanguages(t),$(e,function(o){y.setAttribute(i,T);var f=q(y.getAttribute("data-range"));if(f){var x=o.split(/\r\n?|\n/g),m=f[0],M=f[1]==null?x.length:f[1];m<0&&(m+=x.length),m=Math.max(0,Math.min(m-1,x.length)),M<0&&(M+=x.length),M=Math.max(0,Math.min(M,x.length)),o=x.slice(m,M).join(`
`),y.hasAttribute("data-start")||y.setAttribute("data-start",String(m+1))}h.textContent=o,a.highlightElement(h)},function(o){y.setAttribute(i,C),h.textContent=o})}}),a.plugins.fileHighlight={highlight:function(y){for(var h=(y||document).querySelectorAll(S),e=0,t;t=h[e++];)a.highlightElement(t)}};var N=!1;a.fileHighlight=function(){N||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),N=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Kt);var Nt=Kt.exports;function ne(u){let v,a,c,w,b,z,i,_;return{c(){v=Y("div"),a=Y("div"),w=rt(),b=Y("style"),z=Vt(`/*
    
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
		}`),this.h()},l(T){v=X(T,"DIV",{id:!0,class:!0});var C=j(v);a=X(C,"DIV",{id:!0,class:!0}),j(a).forEach(F),C.forEach(F),w=ot(T);const S=Pt('[data-svelte="svelte-1ahzjnp"]',document.head);b=X(S,"STYLE",{});var $=j(b);z=Gt($,`/*
    
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
		}`),$.forEach(F),S.forEach(F),this.h()},h(){s(a,"id",u[1]),s(a,"class","svelte-olhsz4"),s(v,"id","code_editor_container"),s(v,"class","svelte-olhsz4")},m(T,C){st(T,v,C),B(v,a),u[6](v),st(T,w,C),B(document.head,b),B(b,z),i||(_=tt(c=u[5].call(null,a,{code:u[0],options:u[2],language:u[3]})),i=!0)},p(T,[C]){C&2&&s(a,"id",T[1]),c&&pt(c.update)&&C&13&&c.update.call(null,{code:T[0],options:T[2],language:T[3]})},i:Bt,o:Bt,d(T){T&&F(v),u[6](null),T&&F(w),F(b),i=!1,_()}}}function ae(u,v,a){let c,w,{code:b="//Hello world"}=v,{options:z={}}=v,{language:i="javascript"}=v,{id:_=Math.random().toString(36).slice(2)}=v;_="code_editor_",Ut(()=>{});function T(S,{code:$,language:q,options:N}){const A=function(h){let e=(q==null?void 0:q.toLowerCase())||"javascript";h.innerHTML=Nt.highlight(h.textContent,Nt.languages[e],e)};c=new ee(S,A),window.CODEJAR_EDITOR=c,c.onUpdate(h=>{console.log("Editor updated"),a(0,b=h)}),y({_code:$,options:N});function y({_code:h,options:e={}}){h!==c.toString()&&(c.updateOptions(e),c.updateCode(h))}return{update({code:h,options:e}){y({_code:h,options:e})}}}function C(S){Zt[S?"unshift":"push"](()=>{w=S,a(4,w)})}return u.$$set=S=>{"code"in S&&a(0,b=S.code),"options"in S&&a(2,z=S.options),"language"in S&&a(3,i=S.language),"id"in S&&a(1,_=S.id)},[b,_,z,i,w,T,C]}class re extends jt{constructor(v){super(),Ht(this,v,ae,ne,It,{code:0,options:2,language:3,id:1})}}var ct=(u,v)=>{let a;const c=()=>window.removeEventListener("keydown",a),w=()=>{c(),v&&(a=b=>{!!v.alt!=b.altKey||!!v.shift!=b.shiftKey||!!v.control!=(b.ctrlKey||b.metaKey)||v.code!=b.code||(b.preventDefault(),v.callback?v.callback():u.click())},window.addEventListener("keydown",a))};return w(),{update:w,destroy:c}};const{document:ft,window:oe}=Xt;function se(u){let v,a,c,w,b,z,i,_,T,C,S,$,q,N,A,y,h,e,t,r,l,o,f,x,m,M,E,Z,at,V,U,Q,G,L,D,P,K,I,n;v=new te({}),$=new Qt({});function d(g){u[4](g)}let p={};return u[1]!==void 0&&(p.code=u[1]),N=new re({props:p}),Zt.push(()=>Wt(N,"code",d)),N.$on("change",function(){pt(u[0].updated)&&u[0].updated.apply(this,arguments)}),{c(){vt(v.$$.fragment),a=rt(),c=Y("script"),b=Y("script"),i=Y("script"),T=Y("script"),S=rt(),vt($.$$.fragment),q=rt(),vt(N.$$.fragment),y=rt(),h=Y("div"),e=Y("button"),t=et("svg"),r=et("path"),l=rt(),o=Y("button"),f=et("svg"),x=et("path"),m=rt(),M=Y("button"),E=et("svg"),Z=et("path"),at=rt(),V=Y("button"),U=et("svg"),Q=et("path"),G=rt(),L=Y("button"),D=et("svg"),P=et("path"),this.h()},l(g){bt(v.$$.fragment,g),a=ot(g);const k=Pt('[data-svelte="svelte-q0waaa"]',ft.head);c=X(k,"SCRIPT",{src:!0,class:!0});var O=j(c);O.forEach(F),b=X(k,"SCRIPT",{src:!0,class:!0});var R=j(b);R.forEach(F),i=X(k,"SCRIPT",{src:!0,class:!0});var H=j(i);H.forEach(F),T=X(k,"SCRIPT",{src:!0,class:!0});var W=j(T);W.forEach(F),k.forEach(F),S=ot(g),bt($.$$.fragment,g),q=ot(g),bt(N.$$.fragment,g),y=ot(g),h=X(g,"DIV",{class:!0});var J=j(h);e=X(J,"BUTTON",{alt:!0,class:!0});var it=j(e);t=nt(it,"svg",{xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,role:!0,class:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var At=j(t);r=nt(At,"path",{fill:!0,d:!0,class:!0}),j(r).forEach(F),At.forEach(F),it.forEach(F),l=ot(J),o=X(J,"BUTTON",{alt:!0,class:!0});var _t=j(o);f=nt(_t,"svg",{xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,role:!0,class:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var Et=j(f);x=nt(Et,"path",{fill:!0,d:!0,class:!0}),j(x).forEach(F),Et.forEach(F),_t.forEach(F),m=ot(J),M=X(J,"BUTTON",{class:!0,alt:!0});var Ft=j(M);E=nt(Ft,"svg",{xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,role:!0,class:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var Ct=j(E);Z=nt(Ct,"path",{fill:!0,d:!0,class:!0}),j(Z).forEach(F),Ct.forEach(F),Ft.forEach(F),at=ot(J),V=X(J,"BUTTON",{class:!0,alt:!0});var St=j(V);U=nt(St,"svg",{xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,role:!0,class:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var Tt=j(U);Q=nt(Tt,"path",{fill:!0,d:!0,class:!0}),j(Q).forEach(F),Tt.forEach(F),St.forEach(F),G=ot(J),L=X(J,"BUTTON",{class:!0,alt:!0});var Mt=j(L);D=nt(Mt,"svg",{xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,role:!0,class:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var Lt=j(D);P=nt(Lt,"path",{fill:!0,d:!0,class:!0}),j(P).forEach(F),Lt.forEach(F),Mt.forEach(F),J.forEach(F),this.h()},h(){mt(c.src,w="https://cdnjs.cloudflare.com/ajax/libs/prettier/2.6.2/standalone.js")||s(c,"src",w),s(c,"class","svelte-6ull7x"),mt(b.src,z="https://cdnjs.cloudflare.com/ajax/libs/prettier/2.6.2/parser-babel.min.js")||s(b,"src",z),s(b,"class","svelte-6ull7x"),mt(i.src,_="https://cdn.jsdelivr.net/npm/source-map@0.7.3/dist/source-map.js")||s(i,"src",_),s(i,"class","svelte-6ull7x"),mt(T.src,C="https://cdn.jsdelivr.net/npm/terser/dist/bundle.min.js")||s(T,"src",C),s(T,"class","svelte-6ull7x"),s(r,"fill","currentColor"),s(r,"d","M12 5a1 1 0 0 0-1 1v12a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1Zm-1.29 6.29l-2.5-2.5a1 1 0 1 0-1.42 1.42l.8.79H3a1 1 0 0 0 0 2h4.59l-.8.79a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.5-2.5a1 1 0 0 0 .21-.33a.94.94 0 0 0 0-.76a1 1 0 0 0-.21-.33ZM21 11h-4.59l.8-.79a1 1 0 0 0-1.42-1.42l-2.5 2.5a1 1 0 0 0 0 1.42l2.5 2.5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-.8-.79H21a1 1 0 0 0 0-2Z"),s(r,"class","svelte-6ull7x"),s(t,"xmlns","http://www.w3.org/2000/svg"),s(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),s(t,"aria-hidden","true"),s(t,"role","img"),s(t,"class","iconify iconify--uil svelte-6ull7x"),s(t,"width","32"),s(t,"height","32"),s(t,"preserveAspectRatio","xMidYMid meet"),s(t,"viewBox","0 0 24 24"),s(e,"alt","Minify"),s(e,"class","svelte-6ull7x"),s(x,"fill","currentColor"),s(x,"d","M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4zm5.2 0l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4z"),s(x,"class","svelte-6ull7x"),s(f,"xmlns","http://www.w3.org/2000/svg"),s(f,"xmlns:xlink","http://www.w3.org/1999/xlink"),s(f,"aria-hidden","true"),s(f,"role","img"),s(f,"class","iconify iconify--ic svelte-6ull7x"),s(f,"width","32"),s(f,"height","32"),s(f,"preserveAspectRatio","xMidYMid meet"),s(f,"viewBox","0 0 24 24"),s(o,"alt","Beautify"),s(o,"class","svelte-6ull7x"),s(Z,"fill","currentColor"),s(Z,"d","M232 36v140a12 12 0 0 1-24 0V48H80a12 12 0 0 1 0-24h140a12 12 0 0 1 12 12Zm-40 40v140a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V76a12 12 0 0 1 12-12h140a12 12 0 0 1 12 12Zm-24 12H52v116h116Z"),s(Z,"class","svelte-6ull7x"),s(E,"xmlns","http://www.w3.org/2000/svg"),s(E,"xmlns:xlink","http://www.w3.org/1999/xlink"),s(E,"aria-hidden","true"),s(E,"role","img"),s(E,"class","iconify iconify--ph svelte-6ull7x"),s(E,"width","32"),s(E,"height","32"),s(E,"preserveAspectRatio","xMidYMid meet"),s(E,"viewBox","0 0 256 256"),s(M,"class","sm svelte-6ull7x"),s(M,"alt","Copy"),s(Q,"fill","currentColor"),s(Q,"d","M47.5 112.5a12 12 0 0 1 17-17L116 147V32a12 12 0 0 1 24 0v115l51.5-51.5a12 12 0 0 1 17 17l-72 72a12.1 12.1 0 0 1-17 0ZM216 204H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24Z"),s(Q,"class","svelte-6ull7x"),s(U,"xmlns","http://www.w3.org/2000/svg"),s(U,"xmlns:xlink","http://www.w3.org/1999/xlink"),s(U,"aria-hidden","true"),s(U,"role","img"),s(U,"class","iconify iconify--ph svelte-6ull7x"),s(U,"width","32"),s(U,"height","32"),s(U,"preserveAspectRatio","xMidYMid meet"),s(U,"viewBox","0 0 256 256"),s(V,"class","sm svelte-6ull7x"),s(V,"alt","Save"),s(P,"fill","currentColor"),s(P,"d","M216 36H68.5a20 20 0 0 0-17.1 9.7L5.7 121.8a12 12 0 0 0 0 12.4l45.7 76.1a20 20 0 0 0 17.1 9.7H216a20.1 20.1 0 0 0 20-20V56a20.1 20.1 0 0 0-20-20Zm-4 160H70.8L30 128l40.8-68H212Zm-108.5-52.5L119 128l-15.5-15.5a12 12 0 0 1 17-17L136 111l15.5-15.5a12 12 0 0 1 17 17L153 128l15.5 15.5a12 12 0 0 1 0 17a12.1 12.1 0 0 1-17 0L136 145l-15.5 15.5a12.1 12.1 0 0 1-17 0a12 12 0 0 1 0-17Z"),s(P,"class","svelte-6ull7x"),s(D,"xmlns","http://www.w3.org/2000/svg"),s(D,"xmlns:xlink","http://www.w3.org/1999/xlink"),s(D,"aria-hidden","true"),s(D,"role","img"),s(D,"class","iconify iconify--ph svelte-6ull7x"),s(D,"width","32"),s(D,"height","32"),s(D,"preserveAspectRatio","xMidYMid meet"),s(D,"viewBox","0 0 256 256"),s(L,"class","sm svelte-6ull7x"),s(L,"alt","Clear"),s(h,"class","buttons svelte-6ull7x")},m(g,k){wt(v,g,k),st(g,a,k),B(ft.head,c),B(ft.head,b),B(ft.head,i),B(ft.head,T),st(g,S,k),wt($,g,k),st(g,q,k),wt(N,g,k),st(g,y,k),st(g,h,k),B(h,e),B(e,t),B(t,r),B(h,l),B(h,o),B(o,f),B(f,x),B(h,m),B(h,M),B(M,E),B(E,Z),B(h,at),B(h,V),B(V,U),B(U,Q),B(h,G),B(h,L),B(L,D),B(D,P),K=!0,I||(n=[lt(oe,"paste",u[3]),tt(ct.call(null,e,{control:!0,code:"KeyM"})),lt(e,"click",function(){pt(u[0].min)&&u[0].min.apply(this,arguments)}),tt(gt.call(null,e,{content:"Minify",placement:"left"})),tt(ct.call(null,o,{control:!0,code:"Enter"})),tt(ct.call(null,o,{control:!0,code:"KeyB"})),lt(o,"click",function(){pt(u[0].format)&&u[0].format.apply(this,arguments)}),tt(gt.call(null,o,{content:"Beautify",placement:"left"})),tt(ct.call(null,M,{control:!0,code:"KeyC"})),lt(M,"click",function(){pt(u[0].copy)&&u[0].copy.apply(this,arguments)}),tt(gt.call(null,M,{content:"Copy",placement:"left"})),tt(ct.call(null,V,{control:!0,code:"KeyS"})),lt(V,"click",u[5]),tt(gt.call(null,V,{content:"Save",placement:"left"})),tt(ct.call(null,L,{control:!0,code:"Escape"})),lt(L,"click",u[6]),tt(gt.call(null,L,{content:"Clear",placement:"left"}))],I=!0)},p(g,[k]){u=g;const O={};!A&&k&2&&(A=!0,O.code=u[1],Jt(()=>A=!1)),N.$set(O)},i(g){K||(yt(v.$$.fragment,g),yt($.$$.fragment,g),yt(N.$$.fragment,g),K=!0)},o(g){kt(v.$$.fragment,g),kt($.$$.fragment,g),kt(N.$$.fragment,g),K=!1},d(g){xt(v,g),g&&F(a),F(c),F(b),F(i),F(T),g&&F(S),xt($,g),g&&F(q),xt(N,g),g&&F(y),g&&F(h),I=!1,Yt(n)}}}function ie(u,v,a){let c=new Proxy({},{get(){return()=>{}}}),w=`
	/*
	Keyboard shortcuts:
	Control + M:          Minify
	Control + B:          Beautify
	Control + C:          Copy all code (or selection)
	Control + Enter:      Beautify code
	Control + S:          Save code
	Control + Escape:     Clear editor
	*/`.trim().split(`
`).map(C=>C.trim()).join(`
`),b=()=>{};Ut(()=>{a(2,b=e=>{var t=e,{code:A,updateCursor:y=!0}=t,h=$t(t,["code","updateCursor"]);let r={};if(y){if(!window.CODEJAR_EDITOR&&window.CODEJAR_EDITOR.save)return;r=window.CODEJAR_EDITOR.save()}a(1,w=A),y&&(console.log(dt(dt({},r),h)),window.CODEJAR_EDITOR.restore(dt(dt({},r),h)))}),console.log("Mounted"),b({code:w,updateCursor:!1});async function C(){try{let A=await window.Terser.minify(w);window.prettier.format(w,{parser:"babel",plugins:window.prettierPlugins}),b({code:A.code})}catch{ut.show("Couldn't minify code")}}a(0,c={format:S,min:C,copy:q,updated:$,download:N}),window.actions=c,console.log({actions:c});async function S(){var A;console.log("Formatting");try{let{start:y,end:h,dir:e}=(A=window==null?void 0:window.CODEJAR_EDITOR)==null?void 0:A.save();if(y===void 0||h===void 0)throw new Error("Couldn't save cursor pos");console.log({start:y,end:h,dir:e,code:w});let t=window.prettier.formatWithCursor(w,{parser:"babel",plugins:window.prettierPlugins,cursorOffset:y});console.log("Did stuff"),b({code:t.formatted,start:t.cursorOffset,end:t.cursorOffset}),ut.show("Beautified")}catch{ut.show("Couldn't beautify code")}}function $({detail:{detail:A}}){b({code:A})}function q(){var h;if((h=window.getSelection().toString().trim())!=null&&h.length){const e=()=>ut.show("Copied selection");navigator.clipboard.writeText(window.getSelection().toString()).then(e,()=>{prompt("Copy the code below: ",window.getSelection().toString()),e()});return}let A=w;navigator.clipboard.writeText(A).then(y,()=>{prompt("Copy the code below: ",A),y()});function y(){ut.show("Copied code!")}}function N(A,y,h){var e=new Blob([A],{type:h});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(e,y);else{var t=document.createElement("a"),r=URL.createObjectURL(e);t.href=r,t.download=y,document.body.appendChild(t),t.click(),setTimeout(function(){document.body.removeChild(t),window.URL.revokeObjectURL(r)},0)}ut.show(`Saved ${y}`)}});async function z(C){console.log(w,C,C.clipboardData.getData("text/plain")),/\/\*([\s\S]*?)\*\/$/.test(w.replace(C.clipboardData.getData("text/plain"),""))&&(C.preventDefault(),b({code:C.clipboardData.getData("text/plain")})),console.log("Formatting (paste ev)"),c.format();let S=w.length;setTimeout(()=>window.CODEJAR_EDITOR.restore({start:S,end:S})),console.log("Set cursor at end",S)}function i(C){w=C,a(1,w)}return[c,w,b,z,i,()=>c.download(w,"code.js","application/javascript"),()=>b({code:""})]}class he extends jt{constructor(v){super(),Ht(this,v,ie,se,It,{})}}export{he as default};
