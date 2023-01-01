// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("buffer"),require("fs")):"function"==typeof define&&define.amd?define(["buffer","fs"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).readFileList=e(r.require$$0$1,r.require$$0$2)}(this,(function(r,e){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,i=Object.defineProperty,o=Object.prototype,a=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;t=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?i:function(r,e,n){var t,i,s,p;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===a.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((i="value"in n)&&(c.call(r,e)||l.call(r,e)?(t=r.__proto__,r.__proto__=o,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),s="get"in n,p="set"in n,i&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,e,n.get),p&&f&&f.call(r,e,n.set),r};var s=t;function p(r,e,n){s(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function y(r){var e=r.default;if("function"==typeof e){var n=function(){return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var t=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:function(){return r[e]}})})),n}var v=y(Object.freeze({__proto__:null,default:()=>()=>{}}));var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return d&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;function w(r,e){return null!=r&&h.call(r,e)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=g()?function(r){var e,n,t;if(null==r)return b.call(r);n=r[m],e=w(r,m);try{r[m]=void 0}catch(e){return b.call(r)}return t=b.call(r),e?r[m]=n:delete r[m],t}:function(r){return b.call(r)};var A=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function O(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var n,t;if(!A(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}function E(r){return"string"==typeof r}var I=String.prototype.valueOf;var S=g();function _(r){return"object"==typeof r&&(r instanceof String||(S?function(r){try{return I.call(r),!0}catch(r){return!1}}(r):"[object String]"===j(r)))}function x(r){return E(r)||_(r)}p(x,"isPrimitive",E),p(x,"isObject",_);var F=O(x.isPrimitive),T=O(x.isObject),U=O(x);p(U,"primitives",F),p(U,"objects",T);var k=/./;function P(r){return"boolean"==typeof r}var C=Boolean.prototype.toString;var V=g();function $(r){return"object"==typeof r&&(r instanceof Boolean||(V?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function N(r){return P(r)||$(r)}function R(){return new Function("return this;")()}p(N,"isPrimitive",P),p(N,"isObject",$);var L="object"==typeof self?self:null,M="object"==typeof window?window:null,B="object"==typeof global?global:null;var G=function(r){if(arguments.length){if(!P(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return R()}if(L)return L;if(M)return M;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}(),W=G.document&&G.document.childNodes,H=Int8Array;function X(){return/^\s*function\s*([^(]*)/i}var z=/^\s*function\s*([^(]*)/i;function D(r){return null!==r&&"object"==typeof r}function q(r){return D(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function Z(r){var e,n,t;if(("Object"===(n=j(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=z.exec(t.toString()))return e[1]}return q(r)?"Buffer":n}p(X,"REGEXP",z),p(D,"isObjectLikeArray",O(D));var Y="function"==typeof k||"object"==typeof H||"function"==typeof W?function(r){return Z(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Z(r).toLowerCase():e};function J(r){return"function"===Y(r)}function K(r){return"number"==typeof r}var Q=Number,rr=Q.prototype.toString;var er=g();function nr(r){return"object"==typeof r&&(r instanceof Q||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function tr(r){return K(r)||nr(r)}p(tr,"isPrimitive",K),p(tr,"isObject",nr);var ir=Number.POSITIVE_INFINITY,or=Q.NEGATIVE_INFINITY,ar=Math.floor;function ur(r){return ar(r)===r}function fr(r){return r<ir&&r>or&&ur(r)}function cr(r){return K(r)&&fr(r)}function lr(r){return nr(r)&&fr(r.valueOf())}function sr(r){return cr(r)||lr(r)}function pr(r){return cr(r)&&r>=0}function yr(r){return lr(r)&&r.valueOf()>=0}function vr(r){return pr(r)||yr(r)}p(sr,"isPrimitive",cr),p(sr,"isObject",lr),p(vr,"isPrimitive",pr),p(vr,"isObject",yr);var dr,gr=Object.getPrototypeOf;dr=J(Object.getPrototypeOf)?gr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var br=dr;function hr(r){return null==r?null:(r=Object(r),br(r))}function wr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function mr(r){return"number"==typeof r}function jr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function Ar(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+jr(i):jr(i)+r,t&&(r="-"+r)),r}p(wr,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/);var Or=String.prototype.toLowerCase,Er=String.prototype.toUpperCase;function Ir(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!mr(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=Ar(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=Ar(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===Er.call(r.specifier)?Er.call(n):Or.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function Sr(r){return"string"==typeof r}var _r=Math.abs,xr=String.prototype.toLowerCase,Fr=String.prototype.toUpperCase,Tr=String.prototype.replace,Ur=/e\+(\d)$/,kr=/e-(\d)$/,Pr=/^(\d+)$/,Cr=/^(\d+)e/,Vr=/\.0$/,$r=/\.0*e/,Nr=/(\..*[^0])0*e/;function Rr(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!mr(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":_r(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=Tr.call(n,Nr,"$1e"),n=Tr.call(n,$r,"e"),n=Tr.call(n,Vr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=Tr.call(n,Ur,"e+0$1"),n=Tr.call(n,kr,"e-0$1"),r.alternate&&(n=Tr.call(n,Pr,"$1."),n=Tr.call(n,Cr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Fr.call(r.specifier)?Fr.call(n):xr.call(n)}function Lr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function Mr(r,e,n){var t=e-r.length;return t<0?r:r=n?r+Lr(t):Lr(t)+r}var Br=String.fromCharCode,Gr=isNaN,Wr=Array.isArray;function Hr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Xr(r){var e,n,t,i,o,a,u,f,c;if(!Wr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(Sr(t=r[f]))a+=t;else{if(e=void 0!==t.precision,!(t=Hr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Gr(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,Gr(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=Ir(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Gr(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Gr(o)?String(t.arg):Br(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Rr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Ar(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Mr(t.arg,t.width,t.padRight)),a+=t.arg||"",u+=1}return a}var zr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Dr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function qr(r){var e,n,t,i;for(n=[],i=0,t=zr.exec(r);t;)(e=r.slice(i,zr.lastIndex-t[0].length)).length&&n.push(e),n.push(Dr(t)),i=zr.lastIndex,t=zr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Zr(r){return"string"==typeof r}function Yr(r){var e,n,t;if(!Zr(r))throw new TypeError(Yr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=qr(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return Xr.apply(null,n)}function Jr(r){if(!E(r))throw new TypeError(Yr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}function Kr(r){return r!=r}function Qr(r){return K(r)&&Kr(r)}function re(r){return nr(r)&&Kr(r.valueOf())}function ee(r){return Qr(r)||re(r)}p(ee,"isPrimitive",Qr),p(ee,"isObject",re);function ne(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ur(r.length)&&r.length>=0&&r.length<=9007199254740991}function te(r,e,n){var t,i;if(!ne(r)&&!E(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(t=r.length))return-1;if(3===arguments.length){if(!cr(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=t)return-1;i=n}else(i=t+n)<0&&(i=0)}else i=0;if(ee(e)){for(;i<t;i++)if(ee(r[i]))return i}else for(;i<t;i++)if(r[i]===e)return i;return-1}function ie(r){return Object.keys(Object(r))}var oe,ae=void 0!==Object.keys;function ue(r){return"[object Arguments]"===j(r)}oe=function(){return ue(arguments)}();var fe=oe,ce=Object.prototype.propertyIsEnumerable;var le=!ce.call("beep","0");function se(r,e){var n;return null!=r&&(!(n=ce.call(r,e))&&le&&x(r)?!Qr(e=+e)&&cr(e)&&e>=0&&e<r.length:n)}var pe=4294967295;var ye=fe?ue:function(r){return null!==r&&"object"==typeof r&&!A(r)&&"number"==typeof r.length&&ur(r.length)&&r.length>=0&&r.length<=pe&&w(r,"callee")&&!se(r,"callee")},ve=Array.prototype.slice;var de=se((function(){}),"prototype"),ge=!se({toString:null},"toString");function be(r){return r.constructor&&r.constructor.prototype===r}var he=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],we="undefined"==typeof window?void 0:window;var me=function(){var r;if("undefined"===Y(we))return!1;for(r in we)try{-1===te(he,r)&&w(we,r)&&null!==we[r]&&"object"===Y(we[r])&&be(we[r])}catch(r){return!0}return!1}(),je="undefined"!=typeof window;var Ae,Oe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ae=ae?function(){return 2!==(ie(arguments)||"").length}(1,2)?function(r){return ye(r)?ie(ve.call(r)):ie(r)}:ie:function(r){var e,n,t,i,o,a,u;if(i=[],ye(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!w(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(t="function"==typeof r)&&!D(r))return i;n=de&&t}for(o in r)n&&"prototype"===o||!w(r,o)||i.push(String(o));if(ge)for(e=function(r){if(!1===je&&!me)return be(r);try{return be(r)}catch(r){return!1}}(r),u=0;u<Oe.length;u++)a=Oe[u],e&&"constructor"===a||!w(r,a)||i.push(String(a));return i};var Ee=Ae,Ie=void 0!==Object.getOwnPropertyNames,Se=Object.getOwnPropertyNames;var _e=Ie?function(r){return Se(Object(r))}:function(r){return Ee(Object(r))},xe=void 0!==Object.getOwnPropertyDescriptor,Fe=Object.getOwnPropertyDescriptor;var Te=xe?function(r,e){var n;return null==r||void 0===(n=Fe(r,e))?null:n}:function(r,e){return w(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null},Ue="function"==typeof Buffer?Buffer:null;var ke,Pe=r.Buffer;ke=function(){var r,e;if("function"!=typeof Ue)return!1;try{r=q(e="function"==typeof Ue.from?Ue.from([1,2,3,4]):new Ue([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?Pe:function(){throw new Error("not implemented")};var Ce=ke;var Ve=J(Ce.from)?function(r){if(!q(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return Ce.from(r)}:function(r){if(!q(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new Ce(r)},$e="function"==typeof Int8Array;var Ne="function"==typeof Int8Array?Int8Array:null;var Re,Le="function"==typeof Int8Array?Int8Array:void 0;Re=function(){var r,e,n;if("function"!=typeof Ne)return!1;try{e=new Ne([1,3.14,-3.14,128]),n=e,r=($e&&n instanceof Int8Array||"[object Int8Array]"===j(n))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Le:function(){throw new Error("not implemented")};var Me=Re,Be="function"==typeof Uint8Array;var Ge="function"==typeof Uint8Array?Uint8Array:null;var We,He="function"==typeof Uint8Array?Uint8Array:void 0;We=function(){var r,e,n;if("function"!=typeof Ge)return!1;try{e=new Ge(e=[1,3.14,-3.14,256,257]),n=e,r=(Be&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?He:function(){throw new Error("not implemented")};var Xe=We,ze="function"==typeof Uint8ClampedArray;var De="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var qe,Ze="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;qe=function(){var r,e,n;if("function"!=typeof De)return!1;try{e=new De([-1,0,1,3.14,4.99,255,256]),n=e,r=(ze&&n instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===j(n))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Ze:function(){throw new Error("not implemented")};var Ye=qe,Je="function"==typeof Int16Array;var Ke="function"==typeof Int16Array?Int16Array:null;var Qe,rn="function"==typeof Int16Array?Int16Array:void 0;Qe=function(){var r,e,n;if("function"!=typeof Ke)return!1;try{e=new Ke([1,3.14,-3.14,32768]),n=e,r=(Je&&n instanceof Int16Array||"[object Int16Array]"===j(n))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?rn:function(){throw new Error("not implemented")};var en=Qe,nn="function"==typeof Uint16Array;var tn="function"==typeof Uint16Array?Uint16Array:null;var on,an="function"==typeof Uint16Array?Uint16Array:void 0;on=function(){var r,e,n;if("function"!=typeof tn)return!1;try{e=new tn(e=[1,3.14,-3.14,65536,65537]),n=e,r=(nn&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?an:function(){throw new Error("not implemented")};var un=on,fn="function"==typeof Int32Array;var cn="function"==typeof Int32Array?Int32Array:null;var ln,sn="function"==typeof Int32Array?Int32Array:void 0;ln=function(){var r,e,n;if("function"!=typeof cn)return!1;try{e=new cn([1,3.14,-3.14,2147483648]),n=e,r=(fn&&n instanceof Int32Array||"[object Int32Array]"===j(n))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?sn:function(){throw new Error("not implemented")};var pn=ln,yn="function"==typeof Uint32Array;var vn="function"==typeof Uint32Array?Uint32Array:null;var dn,gn="function"==typeof Uint32Array?Uint32Array:void 0;dn=function(){var r,e,n;if("function"!=typeof vn)return!1;try{e=new vn(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(yn&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gn:function(){throw new Error("not implemented")};var bn=dn,hn="function"==typeof Float32Array;var wn="function"==typeof Float32Array?Float32Array:null;var mn,jn="function"==typeof Float32Array?Float32Array:void 0;mn=function(){var r,e,n;if("function"!=typeof wn)return!1;try{e=new wn([1,3.14,-3.14,5e40]),n=e,r=(hn&&n instanceof Float32Array||"[object Float32Array]"===j(n))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===ir}catch(e){r=!1}return r}()?jn:function(){throw new Error("not implemented")};var An=mn,On="function"==typeof Float64Array;var En="function"==typeof Float64Array?Float64Array:null;var In,Sn="function"==typeof Float64Array?Float64Array:void 0;In=function(){var r,e,n;if("function"!=typeof En)return!1;try{e=new En([1,3.14,-3.14,NaN]),n=e,r=(On&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Sn:function(){throw new Error("not implemented")};var _n=In;function xn(r){return new Me(r)}function Fn(r){return new Xe(r)}function Tn(r){return new Ye(r)}function Un(r){return new en(r)}function kn(r){return new un(r)}function Pn(r){return new pn(r)}function Cn(r){return new bn(r)}function Vn(r){return new An(r)}function $n(r){return new _n(r)}var Nn={int8array:xn,uint8array:Fn,uint8clampedarray:Tn,int16array:Un,uint16array:kn,int32array:Pn,uint32array:Cn,float32array:Vn,float64array:$n};function Rn(r,e,n,t,i){var o,a,u,f,c,l,p,y,v,d;if(i-=1,"object"!=typeof r||null===r)return r;if(q(r))return Ve(r);if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===j(r))return!0;r=hr(r)}return!1}(r))return function(r){var e,n,t,i,o,a,u=[],f=[];for(o=new r.constructor(r.message),u.push(r),f.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),e=Ee(r),a=0;a<e.length;a++)i=e[a],w(n=Te(r,i),"value")&&(t=A(r[i])?[]:{},n.value=Rn(r[i],t,u,f,-1)),s(o,i,n);return o}(r);if("date"===(u=Y(r)))return new Date(+r);if("regexp"===u)return Jr(r.toString());if("set"===u)return new Set(r);if("map"===u)return new Map(r);if("string"===u||"boolean"===u||"number"===u)return r.valueOf();if(c=Nn[u])return c(r);if("array"!==u&&"object"!==u)return"function"==typeof Object.freeze?function(r){var e,n,t,i,o,a,u,f;for(e=[],i=[],u=Object.create(hr(r)),e.push(r),i.push(u),n=_e(r),f=0;f<n.length;f++)t=n[f],w(o=Te(r,t),"value")&&(a=A(r[t])?[]:{},o.value=Rn(r[t],a,e,i,-1)),s(u,t,o);return Object.isExtensible(r)||Object.preventExtensions(u),Object.isSealed(r)&&Object.seal(u),Object.isFrozen(r)&&Object.freeze(u),u}(r):{};if(a=Ee(r),i>0)for(o=u,d=0;d<a.length;d++)y=r[l=a[d]],u=Y(y),"object"!=typeof y||null===y||"array"!==u&&"object"!==u||q(y)?"object"===o?(w(f=Te(r,l),"value")&&(f.value=Rn(y)),s(e,l,f)):e[l]=Rn(y):-1===(v=te(n,y))?(p=A(y)?new Array(y.length):{},n.push(y),t.push(p),"array"===o?e[l]=Rn(y,p,n,t,i):(w(f=Te(r,l),"value")&&(f.value=Rn(y,p,n,t,i)),s(e,l,f))):e[l]=t[v];else if("array"===u)for(d=0;d<a.length;d++)e[l=a[d]]=r[l];else for(d=0;d<a.length;d++)l=a[d],f=Te(r,l),s(e,l,f);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}function Ln(r,e){var n;if(arguments.length>1){if(!pr(e))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+e+"`.");if(0===e)return r}else e=ir;return Rn(r,n=A(r)?new Array(r.length):{},[r],[n],e)}var Mn=e.readFile;function Bn(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);Mn.apply(null,r)}var Gn=e.readFileSync;function Wn(r,e){var n;try{n=arguments.length>1?Gn(r,e):Gn(r)}catch(r){return r}return n}function Hn(){var r,e=arguments,n=e[0],t="https://stdlib.io/e/"+n+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}p(Bn,"sync",Wn);var Xn=100,zn=18e5;function Dn(r){return ur(r/2)}function qn(r){return Dn(r>0?r-1:r+1)}function Zn(r){return r===ir||r===or}var Yn=Math.sqrt;function Jn(r){return Math.abs(r)}var Kn,Qn={uint16:un,uint8:Xe};(Kn=new Qn.uint16(1))[0]=4660;var rt,et,nt=52===new Qn.uint8(Kn.buffer)[0];!0===nt?(rt=1,et=0):(rt=0,et=1);var tt={HIGH:rt,LOW:et},it=new _n(1),ot=new bn(it.buffer),at=tt.HIGH,ut=tt.LOW;function ft(r,e,n,t){return it[0]=r,e[t]=ot[at],e[t+n]=ot[ut],e}function ct(r){return ft(r,[0,0],1,0)}p(ct,"assign",ft);var lt=!0===nt?0:1,st=new _n(1),pt=new bn(st.buffer);function yt(r,e){return st[0]=r,pt[lt]=e>>>0,st[0]}function vt(r){return 0|r}var dt,gt,bt=2147483647,ht=!0===nt?1:0,wt=new _n(1),mt=new bn(wt.buffer);function jt(r){return wt[0]=r,mt[ht]}!0===nt?(dt=1,gt=0):(dt=0,gt=1);var At={HIGH:dt,LOW:gt},Ot=new _n(1),Et=new bn(Ot.buffer),It=At.HIGH,St=At.LOW;function _t(r,e){return Et[It]=r,Et[St]=e,Ot[0]}var xt=[0,0];function Ft(r,e){var n,t;return ct.assign(r,xt,1,0),n=xt[0],n&=bt,t=jt(e),_t(n|=t&=2147483648,xt[1])}var Tt=!0===nt?1:0,Ut=new _n(1),kt=new bn(Ut.buffer);function Pt(r,e){return Ut[0]=r,kt[Tt]=e>>>0,Ut[0]}var Ct=1023;var Vt=1048576,$t=[1,1.5],Nt=[0,.5849624872207642],Rt=[0,1.350039202129749e-8];function Lt(r,e,n,t){return Kr(r)||Zn(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Jn(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}p((function(r){return Lt(r,[0,0],1,0)}),"assign",Lt);var Mt=[0,0],Bt=[0,0];function Gt(r,e){var n,t;return 0===e||0===r||Kr(r)||Zn(r)?r:(Lt(r,Mt,1,0),e+=Mt[1],e+=function(r){var e=jt(r);return(e=(2146435072&e)>>>20)-Ct|0}(r=Mt[0]),e<-1074?Ft(0,r):e>1023?r<0?or:ir:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,ct.assign(r,Bt,1,0),n=Bt[0],n&=2148532223,t*_t(n|=e+Ct<<20,Bt[1])))}var Wt=1048575;var Ht=1048576;var Xt=1083179008,zt=1e300,Dt=1e-300,qt=[0,0],Zt=[0,0];function Yt(r,e){var n,t,i,o,a,u,f,c,l,s,p,y,v,d;if(Kr(r)||Kr(e))return NaN;if(ct.assign(e,qt,1,0),a=qt[0],0===qt[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Yn(r);if(-.5===e)return 1/Yn(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Zn(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Jn(r)<1==(e===ir)?0:ir}(r,e)}if(ct.assign(r,qt,1,0),o=qt[0],0===qt[1]){if(0===o)return function(r,e){return e===or?ir:e===ir?0:e>0?qn(e)?r:0:qn(e)?Ft(ir,r):ir}(r,e);if(1===r)return 1;if(-1===r&&qn(e))return-1;if(Zn(r))return r===or?Yt(-0,-e):e<0?0:ir}if(r<0&&!1===ur(e))return(r-r)/(r-r);if(i=Jn(r),n=o&bt|0,t=a&bt|0,f=a>>>31|0,u=(u=o>>>31|0)&&qn(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(jt(r)&bt)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*zt*zt:u*Dt*Dt;if(n>1072693248)return 0===f?u*zt*zt:u*Dt*Dt;p=function(r,e){var n,t,i,o,a,u;return n=(a=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=yt(t=(o=1.4426950216293335*i)+a,0))-o),r[0]=t,r[1]=n,r}(Zt,i)}else p=function(r,e,n){var t,i,o,a,u,f,c,l,s,p,y,v,d,g,b,h,w,m,j,A,O;return m=0,n<Vt&&(m-=53,n=jt(e*=9007199254740992)),m+=(n>>20)-Ct|0,n=1072693248|(j=1048575&n|0),j<=235662?A=0:j<767610?A=1:(A=0,m+=1,n-=Vt),a=yt(i=(h=(e=Pt(e,n))-(c=$t[A]))*(w=1/(e+c)),0),t=524288+(n>>1|536870912),f=Pt(0,t+=A<<18),b=(o=i*i)*o*(0===(O=o)?.5999999999999946:.5999999999999946+O*(.4285714285785502+O*(.33333332981837743+O*(.272728123808534+O*(.23066074577556175+.20697501780033842*O))))),f=yt(f=3+(o=a*a)+(b+=(u=w*(h-a*f-a*(e-(f-c))))*(a+i)),0),d=(y=-7.028461650952758e-9*(s=yt(s=(h=a*f)+(w=u*f+(b-(f-3-o))*i),0))+.9617966939259756*(w-(s-h))+Rt[A])-((v=yt(v=(p=.9617967009544373*s)+y+(l=Nt[A])+(g=m),0))-g-l-p),r[0]=v,r[1]=d,r}(Zt,i,n);if(y=(s=(e-(c=yt(e,0)))*p[0]+e*p[1])+(l=c*p[0]),ct.assign(y,qt,1,0),v=vt(qt[0]),d=vt(qt[1]),v>=Xt){if(0!=(v-Xt|d))return u*zt*zt;if(s+8008566259537294e-32>y-l)return u*zt*zt}else if((v&bt)>=1083231232){if(0!=(v-3230714880|d))return u*Dt*Dt;if(s<=y-l)return u*Dt*Dt}return y=function(r,e,n){var t,i,o,a,u,f,c,l,s,p;return s=((l=r&bt|0)>>20)-Ct|0,c=0,l>1071644672&&(i=Pt(0,((c=r+(Ht>>s+1)>>>0)&~(Wt>>(s=((c&bt)>>20)-Ct|0)))>>>0),c=(c&Wt|Ht)>>20-s>>>0,r<0&&(c=-c),e-=i),r=vt(r=jt(f=1-((f=(o=.6931471824645996*(i=yt(i=n+e,0)))+(a=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Gt(f,c):Pt(f,r)}(v,l,s),u*y}function Jt(r,e){var n=Yt(2,r)-1;return n>e&&(n=e),n}var Kt=clearTimeout;function Qt(r){var e,n;for(e=Ee(r),n=0;n<e.length;n++)Kt(r[e[n]])}var ri=v("read-file-list:async"),ei=Xn,ni=zn;function ti(r,e,n){var t,i,o,a,u,f,c,l;if(!F(r))throw new TypeError(Hn("0C1CX",r));if(arguments.length<3?(u={},c=e):(u=Ln(e),c=n),!J(c))throw new TypeError(Hn("0C12n",c));for(f=r.length,i=new Array(f),t={},a=0,ri("Reading %d files...",f),l=0;l<f;l++)ri("Reading file: %s (%d of %d).",r[l],l+1,f),Bn(r[l],u,s(l));function s(e){var n,c,l;function s(){delete t[e],ri("Reading file: %s (%d of %d). Retry: %d of %d.",c,l,f,n,ei),Bn(c,u,y)}function y(r,u){var y;if(!o)return r?(ri("Encountered an error when reading %s (%d of %d). Error: %s",c,l,f,r.message),"EMFILE"===r.code||"ENFILE"===r.code?(n+=1)>ei?(ri("Maximum number of retries exceeded. Too many open files."),p(r=new Error("unexpected error. Max retries exceeded. Too many open files."))):(y=Jt(n,ni),ri("Too many open files. Will retry reading file %d of %d in %s seconds.",l,f,y/1e3),void(t[e]=setTimeout(s,y))):p(r)):(ri("Successfully read file: %s (%d of %d).",c,l,f),i[e]={file:c,data:u},ri("Read %d of %d files.",a+=1,f),a===f?p():void 0);ri("An error has already been returned. Discarding data for file: %s (%d of %d).",c,l,f)}return c=r[e],l=e+1,n=0,y}function p(r){if(Qt(t),r)return o=!0,c(r);ri("Successfully read all files."),c(null,i)}}var ii=v("read-file-list:sync");return p(ti,"sync",(function(r,e){var n,t,i,o,a;if(!F(r))throw new TypeError(Hn("0C1CX",r));for(t=arguments.length>1?e:{},o=r.length,n=new Array(o),ii("Reading %d files...",o),a=0;a<o;a++){if(ii("Reading file: %s (%d of %d).",r[a],a+1,o),(i=Wn(r[a],t))instanceof Error)return ii("Encountered an error when reading file: %s (%d of %d). Error: %s",r[a],a,o,i.message),i;ii("Successfully read file: %s (%d of %d).",r[a],a,o),n[a]={file:r[a],data:i}}return ii("Finished reading files."),n})),ti}));
//# sourceMappingURL=index.js.map
