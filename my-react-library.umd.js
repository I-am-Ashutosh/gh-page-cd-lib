(function(r,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],o):(r=typeof globalThis<"u"?globalThis:r||self,o(r.MyReactLibrary={},r.React))})(this,function(r,o){"use strict";var s={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=o,l=Symbol.for("react.element"),_=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,a=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function p(n,e,d){var t,f={},u=null,y=null;d!==void 0&&(u=""+d),e.key!==void 0&&(u=""+e.key),e.ref!==void 0&&(y=e.ref);for(t in e)m.call(e,t)&&!x.hasOwnProperty(t)&&(f[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps,e)f[t]===void 0&&(f[t]=e[t]);return{$$typeof:l,type:n,key:u,ref:y,props:f,_owner:a.current}}i.Fragment=_,i.jsx=p,i.jsxs=p,s.exports=i;var v=s.exports;const R=({label:n,onClick:e})=>v.jsx("button",{type:"button",onClick:e,children:n});r.MyButton=R,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
