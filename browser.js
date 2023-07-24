// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).readFileList=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,t=Object.prototype,i=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,u=t.__lookupGetter__,f=t.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,e,n){var c,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(u.call(r,e)||f.call(r,e)?(c=r.__proto__,r.__proto__=t,delete r[e],r[e]=n.value,r.__proto__=c):r[e]=n.value),s="get"in n,p="set"in n,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&o&&o.call(r,e,n.get),p&&a&&a.call(r,e,n.set),r};var c=e;function l(r,e,n){c(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function s(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var n=function r(){if(this instanceof r){var n=[null];n.push.apply(n,arguments);var t=Function.bind.apply(e,n);return new t}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var t=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:function(){return r[e]}})})),n}var p=s(Object.freeze({__proto__:null,default:()=>()=>{}}));var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return d&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function h(r,e){return null!=r&&v.call(r,e)}var b="function"==typeof Symbol?Symbol.toStringTag:"";var w=y()?function(r){var e,n,t;if(null==r)return g.call(r);n=r[b],e=h(r,b);try{r[b]=void 0}catch(e){return g.call(r)}return t=g.call(r),e?r[b]=n:delete r[b],t}:function(r){return g.call(r)};var m=Array.isArray?Array.isArray:function(r){return"[object Array]"===w(r)};function j(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var n,t;if(!m(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}function E(r){return"string"==typeof r}var A=String.prototype.valueOf;var O=y();function _(r){return"object"==typeof r&&(r instanceof String||(O?function(r){try{return A.call(r),!0}catch(r){return!1}}(r):"[object String]"===w(r)))}function S(r){return E(r)||_(r)}l(S,"isPrimitive",E),l(S,"isObject",_);var I=j(S.isPrimitive),T=j(S.isObject),x=j(S);l(x,"primitives",I),l(x,"objects",T);var F=/./;function k(r){return"boolean"==typeof r}var U=Boolean.prototype.toString;var P=y();function V(r){return"object"==typeof r&&(r instanceof Boolean||(P?function(r){try{return U.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===w(r)))}function N(r){return k(r)||V(r)}function C(){return new Function("return this;")()}l(N,"isPrimitive",k),l(N,"isObject",V);var L="object"==typeof self?self:null,R="object"==typeof window?window:null,M="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},W="object"==typeof M?M:null;var G=function(r){if(arguments.length){if(!k(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return C()}if(L)return L;if(R)return R;if(W)return W;throw new Error("unexpected error. Unable to resolve global object.")}(),H=G.document&&G.document.childNodes,$=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var X=/^\s*function\s*([^(]*)/i;function Z(r){return null!==r&&"object"==typeof r}function Y(r){var e,n,t,i;if(("Object"===(n=w(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=X.exec(t.toString()))return e[1]}return Z(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}l(B,"REGEXP",X),l(Z,"isObjectLikeArray",j(Z));var z="function"==typeof F||"object"==typeof $||"function"==typeof H?function(r){return Y(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Y(r).toLowerCase():e};function D(r){return"function"===z(r)}var q=D(Object.assign),J=Object.assign;function K(r){return Object.keys(Object(r))}var Q,rr=void 0!==Object.keys;function er(r){return"[object Arguments]"===w(r)}Q=function(){return er(arguments)}();var nr=Q;function tr(r){return"number"==typeof r}var ir=Number,or=ir.prototype.toString;var ar=y();function ur(r){return"object"==typeof r&&(r instanceof ir||(ar?function(r){try{return or.call(r),!0}catch(r){return!1}}(r):"[object Number]"===w(r)))}function fr(r){return tr(r)||ur(r)}function cr(r){return r!=r}function lr(r){return tr(r)&&cr(r)}function sr(r){return ur(r)&&cr(r.valueOf())}function pr(r){return lr(r)||sr(r)}l(fr,"isPrimitive",tr),l(fr,"isObject",ur),l(pr,"isPrimitive",lr),l(pr,"isObject",sr);var dr=Number.POSITIVE_INFINITY,yr=ir.NEGATIVE_INFINITY,gr=Math.floor;function vr(r){return gr(r)===r}function hr(r){return r<dr&&r>yr&&vr(r)}function br(r){return tr(r)&&hr(r)}function wr(r){return ur(r)&&hr(r.valueOf())}function mr(r){return br(r)||wr(r)}l(mr,"isPrimitive",br),l(mr,"isObject",wr);var jr=Object.prototype.propertyIsEnumerable;var Er=!jr.call("beep","0");function Ar(r,e){var n;return null!=r&&(!(n=jr.call(r,e))&&Er&&S(r)?!lr(e=+e)&&br(e)&&e>=0&&e<r.length:n)}var Or=4294967295;var _r=nr?er:function(r){return null!==r&&"object"==typeof r&&!m(r)&&"number"==typeof r.length&&vr(r.length)&&r.length>=0&&r.length<=Or&&h(r,"callee")&&!Ar(r,"callee")},Sr=Array.prototype.slice;var Ir=Ar((function(){}),"prototype"),Tr=!Ar({toString:null},"toString");function xr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&vr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Fr(r,e,n){var t,i;if(!xr(r)&&!E(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(t=r.length))return-1;if(3===arguments.length){if(!br(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=t)return-1;i=n}else(i=t+n)<0&&(i=0)}else i=0;if(pr(e)){for(;i<t;i++)if(pr(r[i]))return i}else for(;i<t;i++)if(r[i]===e)return i;return-1}function kr(r){return r.constructor&&r.constructor.prototype===r}var Ur=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Pr="undefined"==typeof window?void 0:window;var Vr=function(){var r;if("undefined"===z(Pr))return!1;for(r in Pr)try{-1===Fr(Ur,r)&&h(Pr,r)&&null!==Pr[r]&&"object"===z(Pr[r])&&kr(Pr[r])}catch(r){return!0}return!1}(),Nr="undefined"!=typeof window;var Cr,Lr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Cr=rr?function(){return 2!==(K(arguments)||"").length}(1,2)?function(r){return _r(r)?K(Sr.call(r)):K(r)}:K:function(r){var e,n,t,i,o,a,u;if(i=[],_r(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!h(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(t="function"==typeof r)&&!Z(r))return i;n=Ir&&t}for(o in r)n&&"prototype"===o||!h(r,o)||i.push(String(o));if(Tr)for(e=function(r){if(!1===Nr&&!Vr)return kr(r);try{return kr(r)}catch(r){return!1}}(r),u=0;u<Lr.length;u++)a=Lr[u],e&&"constructor"===a||!h(r,a)||i.push(String(a));return i};var Rr=Cr,Mr=void 0!==Object.getOwnPropertySymbols,Wr=Object.getOwnPropertySymbols;var Gr=Mr?function(r){return Wr(Object(r))}:function(){return[]};function Hr(r){var e,n,t;for(e=Rr(r),n=Gr(r),t=0;t<n.length;t++)Ar(r,n[t])&&e.push(n[t]);return e}var $r=Object;function Br(r){return"number"==typeof r}function Xr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function Zr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+Xr(i):Xr(i)+r,t&&(r="-"+r)),r}var Yr=String.prototype.toLowerCase,zr=String.prototype.toUpperCase;function Dr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!Br(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=Zr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=Zr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===zr.call(r.specifier)?zr.call(n):Yr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function qr(r){return"string"==typeof r}var Jr=Math.abs,Kr=String.prototype.toLowerCase,Qr=String.prototype.toUpperCase,re=String.prototype.replace,ee=/e\+(\d)$/,ne=/e-(\d)$/,te=/^(\d+)$/,ie=/^(\d+)e/,oe=/\.0$/,ae=/\.0*e/,ue=/(\..*[^0])0*e/;function fe(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!Br(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":Jr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=re.call(n,ue,"$1e"),n=re.call(n,ae,"e"),n=re.call(n,oe,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=re.call(n,ee,"e+0$1"),n=re.call(n,ne,"e-0$1"),r.alternate&&(n=re.call(n,te,"$1."),n=re.call(n,ie,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Qr.call(r.specifier)?Qr.call(n):Kr.call(n)}function ce(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function le(r,e,n){var t=e-r.length;return t<0?r:r=n?r+ce(t):ce(t)+r}var se=String.fromCharCode,pe=isNaN,de=Array.isArray;function ye(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function ge(r){var e,n,t,i,o,a,u,f,c;if(!de(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(qr(t=r[f]))a+=t;else{if(e=void 0!==t.precision,!(t=ye(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,pe(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,pe(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=Dr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!pe(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=pe(o)?String(t.arg):se(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=fe(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Zr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=le(t.arg,t.width,t.padRight)),a+=t.arg||"",u+=1}return a}var ve,he=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function be(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function we(r){var e,n,t,i;for(n=[],i=0,t=he.exec(r);t;)(e=r.slice(i,he.lastIndex-t[0].length)).length&&n.push(e),n.push(be(t)),i=he.lastIndex,t=he.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function me(r){return"string"==typeof r}function je(r){var e,n,t;if(!me(r))throw new TypeError(je("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=we(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return ge.apply(null,n)}ve=q?J:function(r){var e,n,t,i,o,a,u;if(null==r)throw new TypeError(je("invalid argument. First argument must be a non-null object. Value: %s"));for(o=$r(r),a=1;a<arguments.length;a++)if(null!=(e=arguments[a]))for(i=(n=Hr($r(e))).length,u=0;u<i;u++)o[t=n[u]]=e[t];return o};var Ee=ve,Ae=s(Object.freeze({__proto__:null,default:{}})),Oe=Ae.readFile;function _e(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);Oe.apply(null,r)}var Se=Ae.readFileSync;function Ie(r,e){var n;try{n=arguments.length>1?Se(r,e):Se(r)}catch(r){return r}return n}function Te(){var r,e=arguments,n=e[0],t="https://stdlib.io/e/"+n+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}l(_e,"sync",Ie);var xe=100,Fe=18e5;function ke(r){return vr(r/2)}function Ue(r){return ke(r>0?r-1:r+1)}function Pe(r){return r===dr||r===yr}var Ve=Math.sqrt;function Ne(r){return Math.abs(r)}var Ce="function"==typeof Uint32Array;var Le="function"==typeof Uint32Array?Uint32Array:null;var Re,Me="function"==typeof Uint32Array?Uint32Array:void 0;Re=function(){var r,e,n;if("function"!=typeof Le)return!1;try{e=new Le(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(Ce&&n instanceof Uint32Array||"[object Uint32Array]"===w(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Me:function(){throw new Error("not implemented")};var We=Re,Ge="function"==typeof Float64Array;var He="function"==typeof Float64Array?Float64Array:null;var $e,Be="function"==typeof Float64Array?Float64Array:void 0;$e=function(){var r,e,n;if("function"!=typeof He)return!1;try{e=new He([1,3.14,-3.14,NaN]),n=e,r=(Ge&&n instanceof Float64Array||"[object Float64Array]"===w(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Be:function(){throw new Error("not implemented")};var Xe=$e,Ze="function"==typeof Uint8Array;var Ye="function"==typeof Uint8Array?Uint8Array:null;var ze,De="function"==typeof Uint8Array?Uint8Array:void 0;ze=function(){var r,e,n;if("function"!=typeof Ye)return!1;try{e=new Ye(e=[1,3.14,-3.14,256,257]),n=e,r=(Ze&&n instanceof Uint8Array||"[object Uint8Array]"===w(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?De:function(){throw new Error("not implemented")};var qe=ze,Je="function"==typeof Uint16Array;var Ke="function"==typeof Uint16Array?Uint16Array:null;var Qe,rn="function"==typeof Uint16Array?Uint16Array:void 0;Qe=function(){var r,e,n;if("function"!=typeof Ke)return!1;try{e=new Ke(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Je&&n instanceof Uint16Array||"[object Uint16Array]"===w(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?rn:function(){throw new Error("not implemented")};var en,nn={uint16:Qe,uint8:qe};(en=new nn.uint16(1))[0]=4660;var tn,on,an=52===new nn.uint8(en.buffer)[0];!0===an?(tn=1,on=0):(tn=0,on=1);var un={HIGH:tn,LOW:on},fn=new Xe(1),cn=new We(fn.buffer),ln=un.HIGH,sn=un.LOW;function pn(r,e,n,t){return fn[0]=r,e[t]=cn[ln],e[t+n]=cn[sn],e}function dn(r){return pn(r,[0,0],1,0)}l(dn,"assign",pn);var yn=!0===an?0:1,gn=new Xe(1),vn=new We(gn.buffer);function hn(r,e){return gn[0]=r,vn[yn]=e>>>0,gn[0]}function bn(r){return 0|r}var wn,mn,jn=2147483647,En=!0===an?1:0,An=new Xe(1),On=new We(An.buffer);function _n(r){return An[0]=r,On[En]}!0===an?(wn=1,mn=0):(wn=0,mn=1);var Sn={HIGH:wn,LOW:mn},In=new Xe(1),Tn=new We(In.buffer),xn=Sn.HIGH,Fn=Sn.LOW;function kn(r,e){return Tn[xn]=r,Tn[Fn]=e,In[0]}var Un=[0,0];function Pn(r,e){var n,t;return dn.assign(r,Un,1,0),n=Un[0],n&=jn,t=_n(e),kn(n|=t&=2147483648,Un[1])}var Vn=!0===an?1:0,Nn=new Xe(1),Cn=new We(Nn.buffer);function Ln(r,e){return Nn[0]=r,Cn[Vn]=e>>>0,Nn[0]}var Rn=1023;var Mn=1048576,Wn=[1,1.5],Gn=[0,.5849624872207642],Hn=[0,1.350039202129749e-8];function $n(r,e,n,t){return cr(r)||Pe(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Ne(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}l((function(r){return $n(r,[0,0],1,0)}),"assign",$n);var Bn=[0,0],Xn=[0,0];function Zn(r,e){var n,t;return 0===e||0===r||cr(r)||Pe(r)?r:($n(r,Bn,1,0),e+=Bn[1],e+=function(r){var e=_n(r);return(e=(2146435072&e)>>>20)-Rn|0}(r=Bn[0]),e<-1074?Pn(0,r):e>1023?r<0?yr:dr:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,dn.assign(r,Xn,1,0),n=Xn[0],n&=2148532223,t*kn(n|=e+Rn<<20,Xn[1])))}var Yn=1048575;var zn=1048576;var Dn=1083179008,qn=1e300,Jn=1e-300,Kn=[0,0],Qn=[0,0];function rt(r,e){var n,t,i,o,a,u,f,c,l,s,p,d,y,g;if(cr(r)||cr(e))return NaN;if(dn.assign(e,Kn,1,0),a=Kn[0],0===Kn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Ve(r);if(-.5===e)return 1/Ve(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Pe(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Ne(r)<1==(e===dr)?0:dr}(r,e)}if(dn.assign(r,Kn,1,0),o=Kn[0],0===Kn[1]){if(0===o)return function(r,e){return e===yr?dr:e===dr?0:e>0?Ue(e)?r:0:Ue(e)?Pn(dr,r):dr}(r,e);if(1===r)return 1;if(-1===r&&Ue(e))return-1;if(Pe(r))return r===yr?rt(-0,-e):e<0?0:dr}if(r<0&&!1===vr(e))return(r-r)/(r-r);if(i=Ne(r),n=o&jn|0,t=a&jn|0,f=a>>>31|0,u=(u=o>>>31|0)&&Ue(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(_n(r)&jn)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*qn*qn:u*Jn*Jn;if(n>1072693248)return 0===f?u*qn*qn:u*Jn*Jn;p=function(r,e){var n,t,i,o,a,u;return n=(a=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=hn(t=(o=1.4426950216293335*i)+a,0))-o),r[0]=t,r[1]=n,r}(Qn,i)}else p=function(r,e,n){var t,i,o,a,u,f,c,l,s,p,d,y,g,v,h,b,w,m,j,E,A;return m=0,n<Mn&&(m-=53,n=_n(e*=9007199254740992)),m+=(n>>20)-Rn|0,n=1072693248|(j=1048575&n|0),j<=235662?E=0:j<767610?E=1:(E=0,m+=1,n-=Mn),a=hn(i=(b=(e=Ln(e,n))-(c=Wn[E]))*(w=1/(e+c)),0),t=524288+(n>>1|536870912),f=Ln(0,t+=E<<18),h=(o=i*i)*o*(0===(A=o)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),f=hn(f=3+(o=a*a)+(h+=(u=w*(b-a*f-a*(e-(f-c))))*(a+i)),0),g=(d=-7.028461650952758e-9*(s=hn(s=(b=a*f)+(w=u*f+(h-(f-3-o))*i),0))+.9617966939259756*(w-(s-b))+Hn[E])-((y=hn(y=(p=.9617967009544373*s)+d+(l=Gn[E])+(v=m),0))-v-l-p),r[0]=y,r[1]=g,r}(Qn,i,n);if(d=(s=(e-(c=hn(e,0)))*p[0]+e*p[1])+(l=c*p[0]),dn.assign(d,Kn,1,0),y=bn(Kn[0]),g=bn(Kn[1]),y>=Dn){if(0!=(y-Dn|g))return u*qn*qn;if(s+8008566259537294e-32>d-l)return u*qn*qn}else if((y&jn)>=1083231232){if(0!=(y-3230714880|g))return u*Jn*Jn;if(s<=d-l)return u*Jn*Jn}return d=function(r,e,n){var t,i,o,a,u,f,c,l,s,p;return s=((l=r&jn|0)>>20)-Rn|0,c=0,l>1071644672&&(i=Ln(0,((c=r+(zn>>s+1)>>>0)&~(Yn>>(s=((c&jn)>>20)-Rn|0)))>>>0),c=(c&Yn|zn)>>20-s>>>0,r<0&&(c=-c),e-=i),r=bn(r=_n(f=1-((f=(o=.6931471824645996*(i=hn(i=n+e,0)))+(a=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Zn(f,c):Ln(f,r)}(y,l,s),u*d}function et(r,e){var n=rt(2,r)-1;return n>e&&(n=e),n}var nt=clearTimeout;function tt(r){var e,n;for(e=Rr(r),n=0;n<e.length;n++)nt(r[e[n]])}var it=p("read-file-list:async"),ot=xe,at=Fe;function ut(r,e,n){var t,i,o,a,u,f,c,l;if(!I(r))throw new TypeError(Te("0C1CX",r));if(arguments.length<3?(u={},c=e):(u=Ee({},e),c=n),!D(c))throw new TypeError(Te("0C12n",c));for(f=r.length,i=new Array(f),t={},a=0,it("Reading %d files...",f),l=0;l<f;l++)it("Reading file: %s (%d of %d).",r[l],l+1,f),_e(r[l],u,s(l));function s(e){var n,c,l;function s(){delete t[e],it("Reading file: %s (%d of %d). Retry: %d of %d.",c,l,f,n,ot),_e(c,u,d)}function d(r,u){var d;if(!o)return r?(it("Encountered an error when reading %s (%d of %d). Error: %s",c,l,f,r.message),"EMFILE"===r.code||"ENFILE"===r.code?(n+=1)>ot?(it("Maximum number of retries exceeded. Too many open files."),p(r=new Error("unexpected error. Max retries exceeded. Too many open files."))):(d=et(n,at),it("Too many open files. Will retry reading file %d of %d in %s seconds.",l,f,d/1e3),void(t[e]=setTimeout(s,d))):p(r)):(it("Successfully read file: %s (%d of %d).",c,l,f),i[e]={file:c,data:u},it("Read %d of %d files.",a+=1,f),a===f?p():void 0);it("An error has already been returned. Discarding data for file: %s (%d of %d).",c,l,f)}return c=r[e],l=e+1,n=0,d}function p(r){if(tt(t),r)return o=!0,c(r);it("Successfully read all files."),c(null,i)}}var ft=p("read-file-list:sync");return l(ut,"sync",(function(r,e){var n,t,i,o,a;if(!I(r))throw new TypeError(Te("0C1CX",r));for(t=arguments.length>1?e:{},o=r.length,n=new Array(o),ft("Reading %d files...",o),a=0;a<o;a++){if(ft("Reading file: %s (%d of %d).",r[a],a+1,o),(i=Ie(r[a],t))instanceof Error)return ft("Encountered an error when reading file: %s (%d of %d). Error: %s",r[a],a,o,i.message),i;ft("Successfully read file: %s (%d of %d).",r[a],a,o),n[a]={file:r[a],data:i}}return ft("Finished reading files."),n})),ut}));
//# sourceMappingURL=browser.js.map
