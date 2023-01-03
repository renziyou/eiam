/*
 * eiam-console - Employee Identity and Access Management Program
 * Copyright © 2020-2023 TopIAM (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
"use strict";(self.webpackChunktopiam_console=self.webpackChunktopiam_console||[]).push([[5546],{28058:function(Z,A,c){c.d(A,{Z:function(){return s}});var p=c(1413),x=c(67294),P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}}]},name:"warning",theme:"outlined"},E=P,j=c(84089),m=function(O,b){return x.createElement(j.Z,(0,p.Z)((0,p.Z)({},O),{},{ref:b,icon:E}))};m.displayName="WarningOutlined";var s=x.forwardRef(m)},5966:function(Z,A,c){var p=c(1413),x=c(91),P=c(85893),E=c(7772),j=["fieldProps","proFieldProps"],m=["fieldProps","proFieldProps"],s="text",w=function(g){var d=g.fieldProps,B=g.proFieldProps,U=(0,x.Z)(g,j);return(0,P.jsx)(E.Z,(0,p.Z)({valueType:s,fieldProps:d,filedConfig:{valueType:s},proFieldProps:B},U))},O=function(g){var d=g.fieldProps,B=g.proFieldProps,U=(0,x.Z)(g,m);return(0,P.jsx)(E.Z,(0,p.Z)({valueType:"password",fieldProps:d,proFieldProps:B,filedConfig:{valueType:s}},U))},b=w;b.Password=O,b.displayName="ProFormComponent",A.Z=b},90672:function(Z,A,c){var p=c(1413),x=c(91),P=c(85893),E=c(67294),j=c(7772),m=["fieldProps","proFieldProps"],s=function(O,b){var D=O.fieldProps,g=O.proFieldProps,d=(0,x.Z)(O,m);return(0,P.jsx)(j.Z,(0,p.Z)({ref:b,valueType:"textarea",fieldProps:D,proFieldProps:g},d))};A.Z=E.forwardRef(s)},2093:function(Z,A,c){var p=c(70655),x=c(67294),P=c(92770);function E(j,m){function s(w){return(0,P.mf)(w[Symbol.asyncIterator])}(0,x.useEffect)(()=>{const w=j();let O=!1;function b(){return(0,p.mG)(this,void 0,void 0,function*(){if(s(w))for(;!((yield w.next()).done||O););else yield w})}return b(),()=>{O=!0}},m)}A.Z=E},92770:function(Z,A,c){c.d(A,{mf:function(){return x}});const p=s=>s!==null&&typeof s=="object",x=s=>typeof s=="function",P=s=>typeof s=="string",E=s=>typeof s=="boolean",j=s=>typeof s=="number",m=s=>typeof s=="undefined"},70655:function(Z,A,c){c.d(A,{CR:function(){return d},Jh:function(){return O},XA:function(){return g},ZT:function(){return x},_T:function(){return E},ev:function(){return z},mG:function(){return w},pi:function(){return P},pr:function(){return U}});var p=function(t,n){return p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},p(t,n)};function x(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");p(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}var P=function(){return P=Object.assign||function(n){for(var r,o=1,i=arguments.length;o<i;o++){r=arguments[o];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])}return n},P.apply(this,arguments)};function E(t,n){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(t);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(r[o[i]]=t[o[i]]);return r}function j(t,n,r,o){var i=arguments.length,a=i<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,r):o,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,n,r,o);else for(var _=t.length-1;_>=0;_--)(f=t[_])&&(a=(i<3?f(a):i>3?f(n,r,a):f(n,r))||a);return i>3&&a&&Object.defineProperty(n,r,a),a}function m(t,n){return function(r,o){n(r,o,t)}}function s(t,n){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,n)}function w(t,n,r,o){function i(a){return a instanceof r?a:new r(function(f){f(a)})}return new(r||(r=Promise))(function(a,f){function _(v){try{l(o.next(v))}catch(S){f(S)}}function C(v){try{l(o.throw(v))}catch(S){f(S)}}function l(v){v.done?a(v.value):i(v.value).then(_,C)}l((o=o.apply(t,n||[])).next())})}function O(t,n){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},o,i,a,f;return f={next:_(0),throw:_(1),return:_(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function _(l){return function(v){return C([l,v])}}function C(l){if(o)throw new TypeError("Generator is already executing.");for(;f&&(f=0,l[0]&&(r=0)),r;)try{if(o=1,i&&(a=l[0]&2?i.return:l[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,l[1])).done)return a;switch(i=0,a&&(l=[l[0]&2,a.value]),l[0]){case 0:case 1:a=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){r.label=l[1];break}if(l[0]===6&&r.label<a[1]){r.label=a[1],a=l;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(l);break}a[2]&&r.ops.pop(),r.trys.pop();continue}l=n.call(t,r)}catch(v){l=[6,v],i=0}finally{o=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var b=Object.create?function(t,n,r,o){o===void 0&&(o=r);var i=Object.getOwnPropertyDescriptor(n,r);(!i||("get"in i?!n.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return n[r]}}),Object.defineProperty(t,o,i)}:function(t,n,r,o){o===void 0&&(o=r),t[o]=n[r]};function D(t,n){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(n,r)&&b(n,t,r)}function g(t){var n=typeof Symbol=="function"&&Symbol.iterator,r=n&&t[n],o=0;if(r)return r.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(t,n){var r=typeof Symbol=="function"&&t[Symbol.iterator];if(!r)return t;var o=r.call(t),i,a=[],f;try{for(;(n===void 0||n-- >0)&&!(i=o.next()).done;)a.push(i.value)}catch(_){f={error:_}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(f)throw f.error}}return a}function B(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(d(arguments[n]));return t}function U(){for(var t=0,n=0,r=arguments.length;n<r;n++)t+=arguments[n].length;for(var o=Array(t),i=0,n=0;n<r;n++)for(var a=arguments[n],f=0,_=a.length;f<_;f++,i++)o[i]=a[f];return o}function z(t,n,r){if(r||arguments.length===2)for(var o=0,i=n.length,a;o<i;o++)(a||!(o in n))&&(a||(a=Array.prototype.slice.call(n,0,o)),a[o]=n[o]);return t.concat(a||Array.prototype.slice.call(n))}function R(t){return this instanceof R?(this.v=t,this):new R(t)}function G(t,n,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=r.apply(t,n||[]),i,a=[];return i={},f("next"),f("throw"),f("return"),i[Symbol.asyncIterator]=function(){return this},i;function f(y){o[y]&&(i[y]=function(M){return new Promise(function(K,e){a.push([y,M,K,e])>1||_(y,M)})})}function _(y,M){try{C(o[y](M))}catch(K){S(a[0][3],K)}}function C(y){y.value instanceof R?Promise.resolve(y.value.v).then(l,v):S(a[0][2],y)}function l(y){_("next",y)}function v(y){_("throw",y)}function S(y,M){y(M),a.shift(),a.length&&_(a[0][0],a[0][1])}}function V(t){var n,r;return n={},o("next"),o("throw",function(i){throw i}),o("return"),n[Symbol.iterator]=function(){return this},n;function o(i,a){n[i]=t[i]?function(f){return(r=!r)?{value:R(t[i](f)),done:i==="return"}:a?a(f):f}:a}}function L(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],r;return n?n.call(t):(t=typeof g=="function"?g(t):t[Symbol.iterator](),r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r);function o(a){r[a]=t[a]&&function(f){return new Promise(function(_,C){f=t[a](f),i(_,C,f.done,f.value)})}}function i(a,f,_,C){Promise.resolve(C).then(function(l){a({value:l,done:_})},f)}}function Y(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t}var H=Object.create?function(t,n){Object.defineProperty(t,"default",{enumerable:!0,value:n})}:function(t,n){t.default=n};function J(t){if(t&&t.__esModule)return t;var n={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&b(n,t,r);return H(n,t),n}function X(t){return t&&t.__esModule?t:{default:t}}function I(t,n,r,o){if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof n=="function"?t!==n||!o:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?o:r==="a"?o.call(t):o?o.value:n.get(t)}function $(t,n,r,o,i){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof n=="function"?t!==n||!i:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?i.call(t,r):i?i.value=r:n.set(t,r),r}function q(t,n){if(n===null||typeof n!="object"&&typeof n!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof t=="function"?n===t:t.has(n)}},52300:function(Z,A,c){c.d(A,{DS:function(){return K}});var p=c(48764).lW;const x="3.7.3",P=x,E=typeof atob=="function",j=typeof btoa=="function",m=typeof p=="function",s=typeof TextDecoder=="function"?new TextDecoder:void 0,w=typeof TextEncoder=="function"?new TextEncoder:void 0,O="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",b=Array.prototype.slice.call(O),D=(e=>{let u={};return e.forEach((h,T)=>u[h]=T),u})(b),g=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,d=String.fromCharCode.bind(String),B=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):(e,u=h=>h)=>new Uint8Array(Array.prototype.slice.call(e,0).map(u)),U=e=>e.replace(/=/g,"").replace(/[+\/]/g,u=>u=="+"?"-":"_"),z=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),R=e=>{let u,h,T,W,F="";const Q=e.length%3;for(let N=0;N<e.length;){if((h=e.charCodeAt(N++))>255||(T=e.charCodeAt(N++))>255||(W=e.charCodeAt(N++))>255)throw new TypeError("invalid character found");u=h<<16|T<<8|W,F+=b[u>>18&63]+b[u>>12&63]+b[u>>6&63]+b[u&63]}return Q?F.slice(0,Q-3)+"===".substring(Q):F},G=j?e=>btoa(e):m?e=>p.from(e,"binary").toString("base64"):R,V=m?e=>p.from(e).toString("base64"):e=>{let h=[];for(let T=0,W=e.length;T<W;T+=4096)h.push(d.apply(null,e.subarray(T,T+4096)));return G(h.join(""))},L=(e,u=!1)=>u?U(V(e)):V(e),Y=e=>{if(e.length<2){var u=e.charCodeAt(0);return u<128?e:u<2048?d(192|u>>>6)+d(128|u&63):d(224|u>>>12&15)+d(128|u>>>6&63)+d(128|u&63)}else{var u=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return d(240|u>>>18&7)+d(128|u>>>12&63)+d(128|u>>>6&63)+d(128|u&63)}},H=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,J=e=>e.replace(H,Y),X=m?e=>p.from(e,"utf8").toString("base64"):w?e=>V(w.encode(e)):e=>G(J(e)),I=(e,u=!1)=>u?U(X(e)):X(e),$=e=>I(e,!0),q=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,t=e=>{switch(e.length){case 4:var u=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),h=u-65536;return d((h>>>10)+55296)+d((h&1023)+56320);case 3:return d((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return d((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},n=e=>e.replace(q,t),r=e=>{if(e=e.replace(/\s+/g,""),!g.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(e.length&3));let u,h="",T,W;for(let F=0;F<e.length;)u=D[e.charAt(F++)]<<18|D[e.charAt(F++)]<<12|(T=D[e.charAt(F++)])<<6|(W=D[e.charAt(F++)]),h+=T===64?d(u>>16&255):W===64?d(u>>16&255,u>>8&255):d(u>>16&255,u>>8&255,u&255);return h},o=E?e=>atob(z(e)):m?e=>p.from(e,"base64").toString("binary"):r,i=m?e=>B(p.from(e,"base64")):e=>B(o(e),u=>u.charCodeAt(0)),a=e=>i(_(e)),f=m?e=>p.from(e,"base64").toString("utf8"):s?e=>s.decode(i(e)):e=>n(o(e)),_=e=>z(e.replace(/[-_]/g,u=>u=="-"?"+":"/")),C=e=>f(_(e)),l=e=>{if(typeof e!="string")return!1;const u=e.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(u)||!/[^\s0-9a-zA-Z\-_]/.test(u)},v=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),S=function(){const e=(u,h)=>Object.defineProperty(String.prototype,u,v(h));e("fromBase64",function(){return C(this)}),e("toBase64",function(u){return I(this,u)}),e("toBase64URI",function(){return I(this,!0)}),e("toBase64URL",function(){return I(this,!0)}),e("toUint8Array",function(){return a(this)})},y=function(){const e=(u,h)=>Object.defineProperty(Uint8Array.prototype,u,v(h));e("toBase64",function(u){return L(this,u)}),e("toBase64URI",function(){return L(this,!0)}),e("toBase64URL",function(){return L(this,!0)})},K={version:x,VERSION:P,atob:o,atobPolyfill:r,btoa:G,btoaPolyfill:R,fromBase64:C,toBase64:I,encode:I,encodeURI:$,encodeURL:$,utob:J,btou:n,decode:C,isValid:l,fromUint8Array:L,toUint8Array:a,extendString:S,extendUint8Array:y,extendBuiltins:()=>{S(),y()}}}}]);
