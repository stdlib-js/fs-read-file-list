"use strict";var y=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var F=y(function(fe,K){K.exports={max_retries:100,max_delay:18e5}});var R=y(function(oe,b){
var N=require('@stdlib/math-base-special-pow/dist');function O(e,a){var i=N(2,e)-1;return i>a&&(i=a),i}b.exports=O
});var T=y(function(le,x){
x.exports=clearTimeout
});var L=y(function(ce,A){
var W=require('@stdlib/utils-keys/dist'),Y=T();function z(e){var a,i;for(a=W(e),i=0;i<a.length;i++)Y(e[a[i]])}A.exports=z
});var V=y(function(ve,I){
var B=require("debug"),H=require('@stdlib/assert-is-string-array/dist').primitives,J=require('@stdlib/assert-is-function/dist'),Q=require('@stdlib/object-assign/dist'),S=require('@stdlib/fs-read-file/dist'),_=require('@stdlib/error-tools-fmtprodmsg/dist'),k=F(),U=R(),Z=L(),s=B("read-file-list:async"),M=k.max_retries,$=k.max_delay;function ee(e,a,i){var d,u,t,r,p,n,v,o;if(!H(e))throw new TypeError(_('0OD3s',e));if(arguments.length<3?(p={},v=a):(p=Q({},a),v=i),!J(v))throw new TypeError(_('0OD2b',v));for(n=e.length,u=new Array(n),d={},r=0,s("Reading %d files...",n),o=0;o<n;o++)s("Reading file: %s (%d of %d).",e[o],o+1,n),S(e[o],p,X(o));function X(f){var m,l,g;l=e[f],g=f+1,m=0;function j(){delete d[f],s("Reading file: %s (%d of %d). Retry: %d of %d.",l,g,n,m,M),S(l,p,w)}function w(c,G){var h;if(t){s("An error has already been returned. Discarding data for file: %s (%d of %d).",l,g,n);return}if(c){if(s("Encountered an error when reading %s (%d of %d). Error: %s",l,g,n,c.message),c.code==="EMFILE"||c.code==="ENFILE"){if(m+=1,m>M)return s("Maximum number of retries exceeded. Too many open files."),c=new Error(format('0OD0H')),E(c);h=U(m,$),s("Too many open files. Will retry reading file %d of %d in %s seconds.",g,n,h/1e3),d[f]=setTimeout(j,h);return}return E(c)}if(s("Successfully read file: %s (%d of %d).",l,g,n),u[f]={file:l,data:G},r+=1,s("Read %d of %d files.",r,n),r===n)return E()}return w}function E(f){if(Z(d),f)return t=!0,v(f);s("Successfully read all files."),v(null,u)}}I.exports=ee
});var D=y(function(ge,C){
var re=require("debug"),ae=require('@stdlib/fs-read-file/dist').sync,ie=require('@stdlib/assert-is-string-array/dist').primitives,ne=require('@stdlib/error-tools-fmtprodmsg/dist'),q=re("read-file-list:sync");function te(e,a){var i,d,u,t,r;if(!ie(e))throw new TypeError(ne('0OD3s',e));for(arguments.length>1?d=a:d={},t=e.length,i=new Array(t),q("Reading %d files...",t),r=0;r<t;r++){if(q("Reading file: %s (%d of %d).",e[r],r+1,t),u=ae(e[r],d),u instanceof Error)return q("Encountered an error when reading file: %s (%d of %d). Error: %s",e[r],r,t,u.message),u;q("Successfully read file: %s (%d of %d).",e[r],r,t),i[r]={file:e[r],data:u}}return q("Finished reading files."),i}C.exports=te
});var se=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=V(),ue=D();se(P,"sync",ue);module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
