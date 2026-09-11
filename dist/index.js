"use strict";var y=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var c=y(function(F,l){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=require('@stdlib/assert-is-number/dist').isPrimitive,v=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/symbol-iterator/dist'),h=require('@stdlib/constants-float64-pinf/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist');function s(e,r){var n,u,t,i;if(!o(e)||v(e))throw new TypeError(f('0QB49',e));if(arguments.length>1){if(!o(r)||v(r))throw new TypeError(f('0QB4A',r));n=r}else n=h;return t=e-1,u={},a(u,"next",d),a(u,"return",g),m&&a(u,m,q),u;function d(){return i?{done:!0}:(t+=1,t>n?(i=!0,{done:!0}):{value:t,done:!1})}function g(b){return i=!0,arguments.length?{value:b,done:!0}:{done:!0}}function q(){return s(e,n)}}l.exports=s
});var w=c();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
