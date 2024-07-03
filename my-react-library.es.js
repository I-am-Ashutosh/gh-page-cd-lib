import i from "react";
var _ = { exports: {} }, n = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = i, y = Symbol.for("react.element"), m = Symbol.for("react.fragment"), x = Object.prototype.hasOwnProperty, c = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
function f(t, r, s) {
  var e, o = {}, p = null, u = null;
  s !== void 0 && (p = "" + s), r.key !== void 0 && (p = "" + r.key), r.ref !== void 0 && (u = r.ref);
  for (e in r) x.call(r, e) && !d.hasOwnProperty(e) && (o[e] = r[e]);
  if (t && t.defaultProps) for (e in r = t.defaultProps, r) o[e] === void 0 && (o[e] = r[e]);
  return { $$typeof: y, type: t, key: p, ref: u, props: o, _owner: c.current };
}
n.Fragment = m;
n.jsx = f;
n.jsxs = f;
_.exports = n;
var v = _.exports;
const R = ({ label: t, onClick: r }) => v.jsx("button", { type: "button", onClick: r, children: t });
export {
  R as MyButton
};
