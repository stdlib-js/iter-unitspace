// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function o(d,m){var l,p,f,j;if(!t(d)||n(d))throw new TypeError(i("0D04M",d));if(arguments.length>1){if(!t(m)||n(m))throw new TypeError(i("0D04N",m));l=m}else l=s;return f=d-1,e(p={},"next",h),e(p,"return",a),r&&e(p,r,u),p;function h(){return j?{done:!0}:(f+=1)>l?(j=!0,{done:!0}):{value:f,done:!1}}function a(e){return j=!0,arguments.length?{value:e,done:!0}:{done:!0}}function u(){return o(d,l)}}export{o as default};
//# sourceMappingURL=index.mjs.map
