// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function m(d,o){var l,a,u,f;if(!t(d)||n(d))throw new TypeError(i("invalid argument. First argument must be a number. Value: `%s`.",d));if(arguments.length>1){if(!t(o)||n(o))throw new TypeError(i("invalid argument. Second argument must be a number. Value: `%s`.",o));l=o}else l=s;return u=d-1,e(a={},"next",j),e(a,"return",p),r&&e(a,r,h),a;function j(){return f?{done:!0}:(u+=1)>l?(f=!0,{done:!0}):{value:u,done:!1}}function p(e){return f=!0,arguments.length?{value:e,done:!0}:{done:!0}}function h(){return m(d,l)}}export{m as default};
//# sourceMappingURL=index.mjs.map
