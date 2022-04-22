var k=Object.defineProperty;var y=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var x=(a,t,o)=>t in a?k(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,u=(a,t)=>{for(var o in t||(t={}))E.call(t,o)&&x(a,o,t[o]);if(y)for(var o of y(t))S.call(t,o)&&x(a,o,t[o]);return a};import{S as T,i as I,s as P,e as c,t as q,J as C,c as b,a as f,d as r,h as j,T as w,b as s,H as n,E as d}from"./index-d503e6f5.js";async function Y(a,t){await R(()=>window.tippy);let o=window.tippy(a,u({placement:"top",theme:"light"},t));return{update:e=>{o.setProps(e)},destroy:()=>{o.destroy()}}}function R(a,t){return a()?a():new Promise(o=>{let e=setInterval(()=>{a()&&(clearInterval(e),o(a()))},t)})}function H(a){let t,o,e,g,l,i;return{c(){t=c("script"),e=c("script"),l=c("style"),i=q(`:global(.tippy-box[data-theme~='light']) {
			color: #26323d;
			font-family: monospace;
			box-shadow: 0 0 20px 4px rgba(154, 161, 177, 0.15), 0 4px 80px -8px rgba(36, 40, 47, 0.25),
				0 4px 4px -2px rgba(91, 94, 105, 0.15);
			background-color: #fff;
		}
		:global(.tippy-box[data-theme~='light'][data-placement^='top']) > :global(.tippy-arrow:before) {
			border-top-color: #fff;
		}
		:global(.tippy-box[data-theme~='light'][data-placement^='bottom']) > :global(.tippy-arrow:before) {
			border-bottom-color: #fff;
		}
		:global(.tippy-box[data-theme~='light'][data-placement^='left']) > :global(.tippy-arrow:before) {
			border-left-color: #fff;
		}
		:global(.tippy-box[data-theme~='light'][data-placement^='right']) > :global(.tippy-arrow:before) {
			border-right-color: #fff;
		}
		:global(.tippy-box[data-theme~='light']) > :global(.tippy-backdrop) {
			background-color: #fff;
		}
		:global(.tippy-box[data-theme~='light']) > :global(.tippy-svg-arrow) {
			fill: #fff;
		}`),this.h()},l(h){const p=C('[data-svelte="svelte-19lgixc"]',document.head);t=b(p,"SCRIPT",{src:!0});var _=f(t);_.forEach(r),e=b(p,"SCRIPT",{src:!0});var v=f(e);v.forEach(r),l=b(p,"STYLE",{global:!0});var m=f(l);i=j(m,`:global(.tippy-box[data-theme~='light']) {
			color: #26323d;
			font-family: monospace;
			box-shadow: 0 0 20px 4px rgba(154, 161, 177, 0.15), 0 4px 80px -8px rgba(36, 40, 47, 0.25),
				0 4px 4px -2px rgba(91, 94, 105, 0.15);
			background-color: #fff;
		}
		:global(.tippy-box[data-theme~='light'][data-placement^='top']) > :global(.tippy-arrow:before) {
			border-top-color: #fff;
		}
		:global(.tippy-box[data-theme~='light'][data-placement^='bottom']) > :global(.tippy-arrow:before) {
			border-bottom-color: #fff;
		}
		:global(.tippy-box[data-theme~='light'][data-placement^='left']) > :global(.tippy-arrow:before) {
			border-left-color: #fff;
		}
		:global(.tippy-box[data-theme~='light'][data-placement^='right']) > :global(.tippy-arrow:before) {
			border-right-color: #fff;
		}
		:global(.tippy-box[data-theme~='light']) > :global(.tippy-backdrop) {
			background-color: #fff;
		}
		:global(.tippy-box[data-theme~='light']) > :global(.tippy-svg-arrow) {
			fill: #fff;
		}`),m.forEach(r),p.forEach(r),this.h()},h(){w(t.src,o="https://unpkg.com/@popperjs/core@2")||s(t,"src",o),w(e.src,g="https://unpkg.com/tippy.js@6")||s(e,"src",g),s(l,"global","")},m(h,p){n(document.head,t),n(document.head,e),n(document.head,l),n(l,i)},p:d,i:d,o:d,d(h){r(t),r(e),r(l)}}}class z extends T{constructor(t){super(),I(this,t,null,H,P,{})}}export{z as T,Y as t};
