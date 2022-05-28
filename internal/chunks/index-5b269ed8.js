import{Y as S,P as _,C as $}from"./index-ca2aee43.js";function w(t){const o=t-1;return o*o*o+1}function M(t){return--t*t*t*t*t+1}/*! *****************************************************************************
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
***************************************************************************** */function j(t,o){var s={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&o.indexOf(n)<0&&(s[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(s[n[r]]=t[n[r]]);return s}function P(t,{delay:o=0,duration:s=400,easing:n=S}={}){const r=+getComputedStyle(t).opacity;return{delay:o,duration:s,easing:n,css:l=>`opacity: ${l*r}`}}function B(t,{delay:o=0,duration:s=400,easing:n=w,x:r=0,y:l=0,opacity:d=0}={}){const c=getComputedStyle(t),a=+c.opacity,u=c.transform==="none"?"":c.transform,i=a*(1-d);return{delay:o,duration:s,easing:n,css:(e,y)=>`
			transform: ${u} translate(${(1-e)*r}px, ${(1-e)*l}px);
			opacity: ${a-i*y}`}}function R(t){var{fallback:o}=t,s=j(t,["fallback"]);const n=new Map,r=new Map;function l(c,a,u){const{delay:i=0,duration:e=f=>Math.sqrt(f)*30,easing:y=w}=$($({},s),u),p=a.getBoundingClientRect(),g=c.left-p.left,h=c.top-p.top,x=c.width/p.width,k=c.height/p.height,m=Math.sqrt(g*g+h*h),b=getComputedStyle(a),C=b.transform==="none"?"":b.transform,v=+b.opacity;return{delay:i,duration:_(e)?e(m):e,easing:y,css:(f,O)=>`
				opacity: ${f*v};
				transform-origin: top left;
				transform: ${C} translate(${O*g}px,${O*h}px) scale(${f+(1-f)*x}, ${f+(1-f)*k});
			`}}function d(c,a,u){return(i,e)=>(c.set(e.key,{rect:i.getBoundingClientRect()}),()=>{if(a.has(e.key)){const{rect:y}=a.get(e.key);return a.delete(e.key),l(y,i,e)}return c.delete(e.key),o&&o(i,e,u)})}return[d(r,n,!1),d(n,r,!0)]}export{R as a,B as b,w as c,P as f,M as q};
