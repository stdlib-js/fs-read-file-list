// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("fs")):"function"==typeof define&&define.amd?define(["fs"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).readFileList=e(r.require$$0$1)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(o):i(o)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function f(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,d=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,b,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,d,"e+0$1"),t=p.call(t,y,"e-0$1"),r.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,v,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):l.call(t)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var E=String.fromCharCode,O=Array.isArray;function A(r){return r!=r}function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function _(r){var e,t,n,i,a,u,c,l,s,p,d,y,g;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",c=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,A(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,d=n.width,y=n.padRight,g=void 0,(g=d-p.length)<0?p:p=y?p+j(g):j(g)+p)),u+=n.arg||"",c+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function k(r){var e,t;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[F(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return _.apply(null,e)}var x,U=Object.prototype,P=U.toString,V=U.__defineGetter__,R=U.__defineSetter__,L=U.__lookupGetter__,N=U.__lookupSetter__;x=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=U,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var $=x;function H(r,e,t){$(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var C=W(Object.freeze({__proto__:null,default:()=>()=>{}}));var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return G&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function X(r,e){return null!=r&&D.call(r,e)}var Z="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof Z?Z.toStringTag:"";var q=M()?function(r){var e,t,n;if(null==r)return B.call(r);t=r[Y],e=X(r,Y);try{r[Y]=void 0}catch(e){return B.call(r)}return n=B.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return B.call(r)};var z=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function J(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!z(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}function K(r){return"string"==typeof r}var Q=String.prototype.valueOf;var rr=M();function er(r){return"object"==typeof r&&(r instanceof String||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object String]"===q(r)))}function tr(r){return K(r)||er(r)}H(tr,"isPrimitive",K),H(tr,"isObject",er);var nr=J(tr.isPrimitive),ir=J(tr.isObject),or=J(tr);H(or,"primitives",nr),H(or,"objects",ir);var ar=/./;function ur(r){return"boolean"==typeof r}var fr=Boolean,cr=Boolean.prototype.toString;var lr=M();function sr(r){return"object"==typeof r&&(r instanceof fr||(lr?function(r){try{return cr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function pr(r){return ur(r)||sr(r)}H(pr,"isPrimitive",ur),H(pr,"isObject",sr);var dr="object"==typeof self?self:null,yr="object"==typeof window?window:null,gr="object"==typeof global?global:null,vr="object"==typeof globalThis?globalThis:null;var hr=function(r){if(arguments.length){if(!ur(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(vr)return vr;if(dr)return dr;if(yr)return yr;if(gr)return gr;throw new Error("unexpected error. Unable to resolve global object.")}(),br=hr.document&&hr.document.childNodes,wr=Int8Array;function mr(){return/^\s*function\s*([^(]*)/i}var jr=/^\s*function\s*([^(]*)/i;function Er(r){return null!==r&&"object"==typeof r}function Or(r){var e,t,n,i;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=jr.exec(n.toString()))return e[1]}return Er(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}H(mr,"REGEXP",jr),H(Er,"isObjectLikeArray",J(Er));var Ar="function"==typeof ar||"object"==typeof wr||"function"==typeof br?function(r){return Or(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Or(r).toLowerCase():e};function Sr(r){return"function"===Ar(r)}var _r=Sr(Object.assign),Tr=Object.assign;function Ir(r){return Object.keys(Object(r))}var Fr,kr=void 0!==Object.keys;function xr(r){return"[object Arguments]"===q(r)}Fr=function(){return xr(arguments)}();var Ur=Fr;function Pr(r){return"number"==typeof r}var Vr=Number,Rr=Vr.prototype.toString;var Lr=M();function Nr(r){return"object"==typeof r&&(r instanceof Vr||(Lr?function(r){try{return Rr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function $r(r){return Pr(r)||Nr(r)}function Hr(r){return r!=r}function Wr(r){return Pr(r)&&Hr(r)}function Cr(r){return Nr(r)&&Hr(r.valueOf())}function Gr(r){return Wr(r)||Cr(r)}H($r,"isPrimitive",Pr),H($r,"isObject",Nr),H(Gr,"isPrimitive",Wr),H(Gr,"isObject",Cr);var Mr=Number.POSITIVE_INFINITY,Br=Vr.NEGATIVE_INFINITY,Dr=Math.floor;function Xr(r){return Dr(r)===r}function Zr(r){return r<Mr&&r>Br&&Xr(r)}function Yr(r){return Pr(r)&&Zr(r)}function qr(r){return Nr(r)&&Zr(r.valueOf())}function zr(r){return Yr(r)||qr(r)}H(zr,"isPrimitive",Yr),H(zr,"isObject",qr);var Jr=Object.prototype.propertyIsEnumerable;var Kr=!Jr.call("beep","0");function Qr(r,e){var t;return null!=r&&(!(t=Jr.call(r,e))&&Kr&&tr(r)?!Wr(e=+e)&&Yr(e)&&e>=0&&e<r.length:t)}var re=4294967295;var ee=Ur?xr:function(r){return null!==r&&"object"==typeof r&&!z(r)&&"number"==typeof r.length&&Xr(r.length)&&r.length>=0&&r.length<=re&&X(r,"callee")&&!Qr(r,"callee")},te=Array.prototype.slice;var ne=Qr((function(){}),"prototype"),ie=!Qr({toString:null},"toString"),oe=9007199254740991;function ae(r,e,t){var n,i,o;if(!(o=r,"object"==typeof o&&null!==o&&"number"==typeof o.length&&Xr(o.length)&&o.length>=0&&o.length<=oe||K(r)))throw new TypeError(k("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Yr(t))throw new TypeError(k("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Gr(e)){for(;i<n;i++)if(Gr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}function ue(r){return r.constructor&&r.constructor.prototype===r}var fe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ce="undefined"==typeof window?void 0:window;var le=function(){var r;if("undefined"===Ar(ce))return!1;for(r in ce)try{-1===ae(fe,r)&&X(ce,r)&&null!==ce[r]&&"object"===Ar(ce[r])&&ue(ce[r])}catch(r){return!0}return!1}(),se="undefined"!=typeof window;var pe,de=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];pe=kr?function(){return 2!==(Ir(arguments)||"").length}(1,2)?function(r){return ee(r)?Ir(te.call(r)):Ir(r)}:Ir:function(r){var e,t,n,i,o,a,u;if(i=[],ee(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!X(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Er(r))return i;t=ne&&n}for(o in r)t&&"prototype"===o||!X(r,o)||i.push(String(o));if(ie)for(e=function(r){if(!1===se&&!le)return ue(r);try{return ue(r)}catch(r){return!1}}(r),u=0;u<de.length;u++)a=de[u],e&&"constructor"===a||!X(r,a)||i.push(String(a));return i};var ye=pe,ge=void 0!==Object.getOwnPropertySymbols,ve=Object,he=ve.getOwnPropertySymbols;var be,we=ge?function(r){return he(ve(r))}:function(){return[]};function me(r){var e,t,n;for(e=ye(r),t=we(r),n=0;n<t.length;n++)Qr(r,t[n])&&e.push(t[n]);return e}be=_r?Tr:function(r){var e,t,n,i,o,a,u;if(null==r)throw new TypeError(k("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(o=ve(r),a=1;a<arguments.length;a++)if(null!=(e=arguments[a]))for(i=(t=me(ve(e))).length,u=0;u<i;u++)o[n=t[u]]=e[n];return o};var je=be,Ee=r.readFile;function Oe(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);Ee.apply(null,r)}var Ae=r.readFileSync;function Se(r,e){var t;try{t=arguments.length>1?Ae(r,e):Ae(r)}catch(r){return r}return t}function _e(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}H(Oe,"sync",Se);var Te=100,Ie=18e5;function Fe(r){return Xr(r/2)}function ke(r){return Fe(r>0?r-1:r+1)}function xe(r){return r===Mr||r===Br}var Ue=Math.sqrt;function Pe(r){return Math.abs(r)}var Ve="function"==typeof Uint32Array;var Re="function"==typeof Uint32Array?Uint32Array:null;var Le,Ne="function"==typeof Uint32Array?Uint32Array:void 0;Le=function(){var r,e,t;if("function"!=typeof Re)return!1;try{e=new Re(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Ve&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ne:function(){throw new Error("not implemented")};var $e=Le,He="function"==typeof Float64Array;var We="function"==typeof Float64Array?Float64Array:null;var Ce,Ge="function"==typeof Float64Array?Float64Array:void 0;Ce=function(){var r,e,t;if("function"!=typeof We)return!1;try{e=new We([1,3.14,-3.14,NaN]),t=e,r=(He&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Ge:function(){throw new Error("not implemented")};var Me=Ce,Be="function"==typeof Uint8Array;var De="function"==typeof Uint8Array?Uint8Array:null;var Xe,Ze="function"==typeof Uint8Array?Uint8Array:void 0;Xe=function(){var r,e,t;if("function"!=typeof De)return!1;try{e=new De(e=[1,3.14,-3.14,256,257]),t=e,r=(Be&&t instanceof Uint8Array||"[object Uint8Array]"===q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ze:function(){throw new Error("not implemented")};var Ye=Xe,qe="function"==typeof Uint16Array;var ze="function"==typeof Uint16Array?Uint16Array:null;var Je,Ke="function"==typeof Uint16Array?Uint16Array:void 0;Je=function(){var r,e,t;if("function"!=typeof ze)return!1;try{e=new ze(e=[1,3.14,-3.14,65536,65537]),t=e,r=(qe&&t instanceof Uint16Array||"[object Uint16Array]"===q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ke:function(){throw new Error("not implemented")};var Qe,rt={uint16:Je,uint8:Ye};(Qe=new rt.uint16(1))[0]=4660;var et,tt,nt=52===new rt.uint8(Qe.buffer)[0];!0===nt?(et=1,tt=0):(et=0,tt=1);var it={HIGH:et,LOW:tt},ot=new Me(1),at=new $e(ot.buffer),ut=it.HIGH,ft=it.LOW;function ct(r,e,t,n){return ot[0]=r,e[n]=at[ut],e[n+t]=at[ft],e}function lt(r){return ct(r,[0,0],1,0)}H(lt,"assign",ct);var st=!0===nt?0:1,pt=new Me(1),dt=new $e(pt.buffer);function yt(r,e){return pt[0]=r,dt[st]=e>>>0,pt[0]}function gt(r){return 0|r}var vt,ht,bt=2147483647,wt=2147483648,mt=!0===nt?1:0,jt=new Me(1),Et=new $e(jt.buffer);function Ot(r){return jt[0]=r,Et[mt]}!0===nt?(vt=1,ht=0):(vt=0,ht=1);var At={HIGH:vt,LOW:ht},St=new Me(1),_t=new $e(St.buffer),Tt=At.HIGH,It=At.LOW;function Ft(r,e){return _t[Tt]=r,_t[It]=e,St[0]}var kt=[0,0];function xt(r,e){var t,n;return lt.assign(r,kt,1,0),t=kt[0],t&=bt,n=Ot(e),Ft(t|=n&=wt,kt[1])}var Ut=1072693247,Pt=1e300,Vt=1e-300;var Rt=!0===nt?1:0,Lt=new Me(1),Nt=new $e(Lt.buffer);function $t(r,e){return Lt[0]=r,Nt[Rt]=e>>>0,Lt[0]}var Ht=1023;var Wt=1048575,Ct=1048576,Gt=1072693248,Mt=536870912,Bt=524288,Dt=20,Xt=9007199254740992,Zt=.9617966939259756,Yt=.9617967009544373,qt=-7.028461650952758e-9,zt=[1,1.5],Jt=[0,.5849624872207642],Kt=[0,1.350039202129749e-8];var Qt=1.4426950408889634,rn=1.4426950216293335,en=1.9259629911266175e-8;var tn=1023,nn=-1023,on=-1074,an=22250738585072014e-324,un=4503599627370496;function fn(r,e,t,n){return Hr(r)||xe(r)?(e[n]=r,e[n+t]=0,e):0!==r&&Pe(r)<an?(e[n]=r*un,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}H((function(r){return fn(r,[0,0],1,0)}),"assign",fn);var cn=2146435072;var ln=2220446049250313e-31,sn=2148532223,pn=[0,0],dn=[0,0];function yn(r,e){var t,n;return 0===e||0===r||Hr(r)||xe(r)?r:(fn(r,pn,1,0),r=pn[0],e+=pn[1],e+=function(r){var e=Ot(r);return(e=(e&cn)>>>20)-Ht|0}(r),e<on?xt(0,r):e>tn?r<0?Br:Mr:(e<=nn?(e+=52,n=ln):n=1,lt.assign(r,dn,1,0),t=dn[0],t&=sn,n*Ft(t|=e+Ht<<20,dn[1])))}var gn=.6931471805599453,vn=1048575;var hn=1048576,bn=1071644672,wn=20,mn=.6931471824645996,jn=-1.904654299957768e-9;var En=1072693247,On=1105199104,An=1139802112,Sn=1083179008,_n=1072693248,Tn=1083231232,In=3230714880,Fn=31,kn=1e300,xn=1e-300,Un=8008566259537294e-32,Pn=[0,0],Vn=[0,0];function Rn(r,e){var t,n,i,o,a,u,f,c,l,s,p,d,y,g;if(Hr(r)||Hr(e))return NaN;if(lt.assign(e,Pn,1,0),a=Pn[0],0===Pn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Ue(r);if(-.5===e)return 1/Ue(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(xe(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Pe(r)<1==(e===Mr)?0:Mr}(r,e)}if(lt.assign(r,Pn,1,0),o=Pn[0],0===Pn[1]){if(0===o)return function(r,e){return e===Br?Mr:e===Mr?0:e>0?ke(e)?r:0:ke(e)?xt(Mr,r):Mr}(r,e);if(1===r)return 1;if(-1===r&&ke(e))return-1;if(xe(r))return r===Br?Rn(-0,-e):e<0?0:Mr}if(r<0&&!1===Xr(e))return(r-r)/(r-r);if(i=Pe(r),t=o&bt|0,n=a&bt|0,f=a>>>Fn|0,u=(u=o>>>Fn|0)&&ke(e)?-1:1,n>On){if(n>An)return function(r,e){return(Ot(r)&bt)<=Ut?e<0?Pt*Pt:Vt*Vt:e>0?Pt*Pt:Vt*Vt}(r,e);if(t<En)return 1===f?u*kn*kn:u*xn*xn;if(t>_n)return 0===f?u*kn*kn:u*xn*xn;p=function(r,e){var t,n,i,o,a,u,f;return o=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(u=i*en-o*Qt)-((n=yt(n=(a=rn*i)+u,0))-a),r[0]=n,r[1]=t,r}(Vn,i)}else p=function(r,e,t){var n,i,o,a,u,f,c,l,s,p,d,y,g,v,h,b,w,m,j,E,O;return m=0,t<Ct&&(m-=53,t=Ot(e*=Xt)),m+=(t>>Dt)-Ht|0,t=(j=t&Wt|0)|Gt|0,j<=235662?E=0:j<767610?E=1:(E=0,m+=1,t-=Ct),a=yt(i=(b=(e=$t(e,t))-(c=zt[E]))*(w=1/(e+c)),0),n=(t>>1|Mt)+Bt,f=$t(0,n+=E<<18),h=(o=i*i)*o*(0===(O=o)?.5999999999999946:.5999999999999946+O*(.4285714285785502+O*(.33333332981837743+O*(.272728123808534+O*(.23066074577556175+.20697501780033842*O))))),f=yt(f=3+(o=a*a)+(h+=(u=w*(b-a*f-a*(e-(f-c))))*(a+i)),0),s=yt(s=(b=a*f)+(w=u*f+(h-(f-3-o))*i),0),p=Yt*s,g=(d=qt*s+(w-(s-b))*Zt+Kt[E])-((y=yt(y=p+d+(l=Jt[E])+(v=m),0))-v-l-p),r[0]=y,r[1]=g,r}(Vn,i,t);if(d=(s=(e-(c=yt(e,0)))*p[0]+e*p[1])+(l=c*p[0]),lt.assign(d,Pn,1,0),y=gt(Pn[0]),g=gt(Pn[1]),y>=Sn){if(0!=(y-Sn|g))return u*kn*kn;if(s+Un>d-l)return u*kn*kn}else if((y&bt)>=Tn){if(0!=(y-In|g))return u*xn*xn;if(s<=d-l)return u*xn*xn}return d=function(r,e,t){var n,i,o,a,u,f,c,l,s,p;return s=((l=r&bt|0)>>wn)-Ht|0,c=0,l>bn&&(i=$t(0,((c=r+(hn>>s+1)>>>0)&~(vn>>(s=((c&bt)>>wn)-Ht|0)))>>>0),c=(c&vn|hn)>>wn-s>>>0,r<0&&(c=-c),e-=i),r=gt(r=Ot(f=1-((f=(o=(i=yt(i=t+e,0))*mn)+(a=(t-(i-e))*gn+i*jn))*(n=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<wn>>>0)>>wn<=0?yn(f,c):$t(f,r)}(y,l,s),u*d}var Ln=clearTimeout;var Nn=C("read-file-list:async"),$n=Te,Hn=Ie;function Wn(r,e,t){var n,i,o,a,u,f,c,l;if(!nr(r))throw new TypeError(_e("0OD3s",r));if(arguments.length<3?(u={},c=e):(u=K(e)?e:je({},e),c=t),!Sr(c))throw new TypeError(_e("0OD2b",c));for(f=r.length,i=new Array(f),n={},a=0,Nn("Reading %d files...",f),l=0;l<f;l++)Nn("Reading file: %s (%d of %d).",r[l],l+1,f),Oe(r[l],u,s(l));function s(e){var t,c,l;function s(){delete n[e],Nn("Reading file: %s (%d of %d). Retry: %d of %d.",c,l,f,t,$n),Oe(c,u,d)}function d(r,u){var d;if(!o)return r?(Nn("Encountered an error when reading %s (%d of %d). Error: %s",c,l,f,r.message),"EMFILE"===r.code||"ENFILE"===r.code?(t+=1)>$n?(Nn("Maximum number of retries exceeded. Too many open files."),p(r=new Error(_e("0OD0H")))):(d=function(r,e){var t=Rn(2,r)-1;return t>e&&(t=e),t}(t,Hn),Nn("Too many open files. Will retry reading file %d of %d in %s seconds.",l,f,d/1e3),void(n[e]=setTimeout(s,d))):p(r)):(Nn("Successfully read file: %s (%d of %d).",c,l,f),i[e]={file:c,data:u},Nn("Read %d of %d files.",a+=1,f),a===f?p():void 0);Nn("An error has already been returned. Discarding data for file: %s (%d of %d).",c,l,f)}return c=r[e],l=e+1,t=0,d}function p(r){if(function(r){var e,t;for(e=ye(r),t=0;t<e.length;t++)Ln(r[e[t]])}(n),r)return o=!0,c(r);Nn("Successfully read all files."),c(null,i)}}var Cn=C("read-file-list:sync");return H(Wn,"sync",(function(r,e){var t,n,i,o,a;if(!nr(r))throw new TypeError(_e("0OD3s",r));for(n=arguments.length>1?e:{},o=r.length,t=new Array(o),Cn("Reading %d files...",o),a=0;a<o;a++){if(Cn("Reading file: %s (%d of %d).",r[a],a+1,o),(i=Se(r[a],n))instanceof Error)return Cn("Encountered an error when reading file: %s (%d of %d). Error: %s",r[a],a,o,i.message),i;Cn("Successfully read file: %s (%d of %d).",r[a],a,o),t[a]={file:r[a],data:i}}return Cn("Finished reading files."),t})),Wn}));
//# sourceMappingURL=index.js.map
