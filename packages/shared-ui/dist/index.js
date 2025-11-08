import Pe, { createContext as pr, useReducer as hr, useEffect as gr, useContext as yr, useState as we } from "react";
var H = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function br() {
  if (Oe) return L;
  Oe = 1;
  var l = Pe, u = Symbol.for("react.element"), i = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, y = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(h, d, E) {
    var g, C = {}, j = null, U = null;
    E !== void 0 && (j = "" + E), d.key !== void 0 && (j = "" + d.key), d.ref !== void 0 && (U = d.ref);
    for (g in d) m.call(d, g) && !_.hasOwnProperty(g) && (C[g] = d[g]);
    if (h && h.defaultProps) for (g in d = h.defaultProps, d) C[g] === void 0 && (C[g] = d[g]);
    return { $$typeof: u, type: h, key: j, ref: U, props: C, _owner: y.current };
  }
  return L.Fragment = i, L.jsx = S, L.jsxs = S, L;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function xr() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var l = Pe, u = Symbol.for("react.element"), i = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), h = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), re = Symbol.iterator, ke = "@@iterator";
    function Ie(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = re && e[re] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var A = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Fe("error", e, t);
      }
    }
    function Fe(e, r, t) {
      {
        var a = A.ReactDebugCurrentFrame, c = a.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var f = t.map(function(s) {
          return String(s);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var De = !1, Le = !1, We = !1, Ue = !1, Ye = !1, te;
    te = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === _ || Ye || e === y || e === E || e === g || Ue || e === U || De || Le || We || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === C || e.$$typeof === S || e.$$typeof === h || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case i:
          return "Portal";
        case _:
          return "Profiler";
        case y:
          return "StrictMode";
        case E:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return ne(r) + ".Consumer";
          case S:
            var t = e;
            return ne(t._context) + ".Provider";
          case d:
            return Ne(e, e.render, "ForwardRef");
          case C:
            var a = e.displayName || null;
            return a !== null ? a : O(e.type) || "Memo";
          case j: {
            var c = e, f = c._payload, s = c._init;
            try {
              return O(s(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, F = 0, ae, oe, ie, se, le, ue, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function ze() {
      {
        if (F === 0) {
          ae = console.log, oe = console.info, ie = console.warn, se = console.error, le = console.group, ue = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Be() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, e, {
              value: ae
            }),
            info: T({}, e, {
              value: oe
            }),
            warn: T({}, e, {
              value: ie
            }),
            error: T({}, e, {
              value: se
            }),
            group: T({}, e, {
              value: le
            }),
            groupCollapsed: T({}, e, {
              value: ue
            }),
            groupEnd: T({}, e, {
              value: ce
            })
          });
        }
        F < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = A.ReactCurrentDispatcher, V;
    function Y(e, r, t) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (c) {
            var a = c.stack.trim().match(/\n( *(at )?)/);
            V = a && a[1] || "";
          }
        return `
` + V + e;
      }
    }
    var M = !1, $;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new Ve();
    }
    function de(e, r) {
      if (!e || M)
        return "";
      {
        var t = $.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      M = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = B.current, B.current = null, ze();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (R) {
              a = R;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (R) {
              a = R;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            a = R;
          }
          e();
        }
      } catch (R) {
        if (R && a && typeof R.stack == "string") {
          for (var o = R.stack.split(`
`), x = a.stack.split(`
`), v = o.length - 1, p = x.length - 1; v >= 1 && p >= 0 && o[v] !== x[p]; )
            p--;
          for (; v >= 1 && p >= 0; v--, p--)
            if (o[v] !== x[p]) {
              if (v !== 1 || p !== 1)
                do
                  if (v--, p--, p < 0 || o[v] !== x[p]) {
                    var w = `
` + o[v].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && $.set(e, w), w;
                  }
                while (v >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        M = !1, B.current = f, Be(), Error.prepareStackTrace = c;
      }
      var I = e ? e.displayName || e.name : "", P = I ? Y(I) : "";
      return typeof e == "function" && $.set(e, P), P;
    }
    function Me(e, r, t) {
      return de(e, !1);
    }
    function Ge(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function N(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Ge(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case E:
          return Y("Suspense");
        case g:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Me(e.render);
          case C:
            return N(e.type, r, t);
          case j: {
            var a = e, c = a._payload, f = a._init;
            try {
              return N(f(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var D = Object.prototype.hasOwnProperty, me = {}, ve = A.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Je(e, r, t, a, c) {
      {
        var f = Function.call.bind(D);
        for (var s in e)
          if (f(e, s)) {
            var o = void 0;
            try {
              if (typeof e[s] != "function") {
                var x = Error((a || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              o = e[s](r, s, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              o = v;
            }
            o && !(o instanceof Error) && (z(c), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, s, typeof o), z(null)), o instanceof Error && !(o.message in me) && (me[o.message] = !0, z(c), b("Failed %s type: %s", t, o.message), z(null));
          }
      }
    }
    var qe = Array.isArray;
    function G(e) {
      return qe(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function he(e) {
      if (Xe(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), pe(e);
    }
    var ge = A.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, be;
    function Ze(e) {
      if (D.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (D.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && ge.current;
    }
    function rr(e, r) {
      {
        var t = function() {
          ye || (ye = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          be || (be = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, a, c, f, s) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ar(e, r, t, a, c) {
      {
        var f, s = {}, o = null, x = null;
        t !== void 0 && (he(t), o = "" + t), Qe(r) && (he(r.key), o = "" + r.key), Ze(r) && (x = r.ref, er(r, c));
        for (f in r)
          D.call(r, f) && !He.hasOwnProperty(f) && (s[f] = r[f]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (f in v)
            s[f] === void 0 && (s[f] = v[f]);
        }
        if (o || x) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && rr(s, p), x && tr(s, p);
        }
        return nr(e, o, x, c, a, ge.current, s);
      }
    }
    var J = A.ReactCurrentOwner, xe = A.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    var q;
    q = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function Ee() {
      {
        if (J.current) {
          var e = O(J.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var Re = {};
    function ir(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var a = "";
        e && e._owner && e._owner !== J.current && (a = " It was passed a child from " + O(e._owner.type) + "."), k(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), k(null);
      }
    }
    function Se(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            K(a) && _e(a, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = Ie(e);
          if (typeof c == "function" && c !== e.entries)
            for (var f = c.call(e), s; !(s = f.next()).done; )
              K(s.value) && _e(s.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === C))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = O(r);
          Je(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !q) {
          q = !0;
          var c = O(r);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            k(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    var je = {};
    function Ce(e, r, t, a, c, f) {
      {
        var s = $e(e);
        if (!s) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = or();
          x ? o += x : o += Ee();
          var v;
          e === null ? v = "null" : G(e) ? v = "array" : e !== void 0 && e.$$typeof === u ? (v = "<" + (O(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, o);
        }
        var p = ar(e, r, t, c, f);
        if (p == null)
          return p;
        if (s) {
          var w = r.children;
          if (w !== void 0)
            if (a)
              if (G(w)) {
                for (var I = 0; I < w.length; I++)
                  Se(w[I], e);
                Object.freeze && Object.freeze(w);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Se(w, e);
        }
        if (D.call(r, "key")) {
          var P = O(e), R = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), X = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[P + X]) {
            var mr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, X, P, mr, P), je[P + X] = !0;
          }
        }
        return e === m ? lr(p) : sr(p), p;
      }
    }
    function ur(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var fr = cr, dr = ur;
    W.Fragment = m, W.jsx = fr, W.jsxs = dr;
  }()), W;
}
process.env.NODE_ENV === "production" ? H.exports = br() : H.exports = xr();
var n = H.exports;
const Z = ({
  children: l,
  onClick: u,
  variant: i = "primary",
  disabled: m = !1,
  type: y = "button",
  style: _ = {}
}) => {
  const S = {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "0.25rem",
    cursor: m ? "not-allowed" : "pointer",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "all 0.2s ease",
    opacity: m ? 0.6 : 1
  }, h = {
    primary: {
      backgroundColor: "#3b82f6",
      color: "white"
    },
    secondary: {
      backgroundColor: "#e5e7eb",
      color: "#374151"
    }
  };
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      style: { ...S, ...h[i], ..._ },
      onClick: u,
      disabled: m,
      type: y,
      children: l
    }
  );
}, Q = ({ children: l, title: u, className: i = "" }) => {
  const m = {
    border: "1px solid #e5e7eb",
    borderRadius: "0.5rem",
    padding: "1.5rem",
    backgroundColor: "white",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
  }, y = {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "1rem",
    color: "#111827"
  };
  return /* @__PURE__ */ n.jsxs("div", { style: m, className: i, children: [
    u && /* @__PURE__ */ n.jsx("h3", { style: y, children: u }),
    l
  ] });
}, Er = {
  user: null,
  isAuthenticated: !1,
  isLoading: !1,
  error: null
};
function Rr(l, u) {
  switch (u.type) {
    case "LOGIN_START":
      return {
        ...l,
        isLoading: !0,
        error: null
      };
    case "LOGIN_SUCCESS":
      return {
        ...l,
        user: u.user,
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      };
    case "LOGIN_FAILURE":
      return {
        ...l,
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: u.error
      };
    case "LOGOUT":
      return {
        ...l,
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      };
    case "RESTORE_SESSION":
      return {
        ...l,
        user: u.user,
        isAuthenticated: !0,
        isLoading: !1
      };
    case "CLEAR_ERROR":
      return {
        ...l,
        error: null
      };
    default:
      return l;
  }
}
const Ae = pr(void 0), _r = {
  async login(l, u) {
    if (await new Promise((i) => setTimeout(i, 1e3)), l === "admin@example.com" && u === "admin123")
      return {
        id: "1",
        email: "admin@example.com",
        name: "Admin User",
        role: "admin"
      };
    if (l === "user@example.com" && u === "user123")
      return {
        id: "2",
        email: "user@example.com",
        name: "Regular User",
        role: "user"
      };
    throw new Error("Invalid credentials");
  }
}, Cr = ({ children: l }) => {
  const [u, i] = hr(Rr, Er);
  gr(() => {
    const h = localStorage.getItem("micro-frontend-user");
    if (h)
      try {
        const d = JSON.parse(h);
        i({ type: "RESTORE_SESSION", user: d });
      } catch {
        localStorage.removeItem("micro-frontend-user");
      }
  }, []);
  const S = {
    ...u,
    login: async (h, d) => {
      i({ type: "LOGIN_START" });
      try {
        const E = await _r.login(h, d);
        localStorage.setItem("micro-frontend-user", JSON.stringify(E)), i({ type: "LOGIN_SUCCESS", user: E });
      } catch (E) {
        i({
          type: "LOGIN_FAILURE",
          error: E instanceof Error ? E.message : "Login failed"
        });
      }
    },
    logout: () => {
      localStorage.removeItem("micro-frontend-user"), i({ type: "LOGOUT" });
    },
    clearError: () => {
      i({ type: "CLEAR_ERROR" });
    }
  };
  return /* @__PURE__ */ n.jsx(Ae.Provider, { value: S, children: l });
}, ee = () => {
  const l = yr(Ae);
  if (l === void 0)
    throw new Error("useAuth must be used within an AuthProvider");
  return l;
}, Sr = ({ onSuccess: l }) => {
  const [u, i] = we(""), [m, y] = we(""), { login: _, error: S, isLoading: h, clearError: d } = ee(), E = async (j) => {
    j.preventDefault(), d();
    try {
      await _(u, m), l == null || l();
    } catch {
    }
  }, g = {
    width: "100%",
    padding: "0.75rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.375rem",
    fontSize: "1rem",
    marginBottom: "1rem"
  }, C = {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#374151",
    marginBottom: "0.5rem"
  };
  return /* @__PURE__ */ n.jsx("div", { style: { maxWidth: "400px", margin: "0 auto" }, children: /* @__PURE__ */ n.jsxs(Q, { title: "🔐 Login to Continue", children: [
    /* @__PURE__ */ n.jsxs("form", { onSubmit: E, children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("label", { style: C, htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            id: "email",
            type: "email",
            value: u,
            onChange: (j) => i(j.target.value),
            placeholder: "Enter your email",
            required: !0,
            style: g
          }
        )
      ] }),
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("label", { style: C, htmlFor: "password", children: "Password" }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            id: "password",
            type: "password",
            value: m,
            onChange: (j) => y(j.target.value),
            placeholder: "Enter your password",
            required: !0,
            style: g
          }
        )
      ] }),
      S && /* @__PURE__ */ n.jsx("div", { style: {
        padding: "0.75rem",
        backgroundColor: "#fef2f2",
        border: "1px solid #fecaca",
        borderRadius: "0.375rem",
        color: "#dc2626",
        fontSize: "0.875rem",
        marginBottom: "1rem"
      }, children: S }),
      /* @__PURE__ */ n.jsx(
        Z,
        {
          type: "submit",
          variant: "primary",
          disabled: h,
          style: { width: "100%", marginBottom: "1rem" },
          children: h ? "Signing in..." : "Sign In"
        }
      )
    ] }),
    /* @__PURE__ */ n.jsxs("div", { style: {
      padding: "1rem",
      backgroundColor: "#f8fafc",
      borderRadius: "0.375rem",
      fontSize: "0.875rem",
      color: "#64748b"
    }, children: [
      /* @__PURE__ */ n.jsx("strong", { children: "Demo Credentials:" }),
      /* @__PURE__ */ n.jsx("br", {}),
      "Admin: admin@example.com / admin123",
      /* @__PURE__ */ n.jsx("br", {}),
      "User: user@example.com / user123"
    ] })
  ] }) });
}, wr = ({
  showRole: l = !0,
  compact: u = !1
}) => {
  const { user: i, logout: m, isAuthenticated: y } = ee();
  return !y || !i ? null : u ? /* @__PURE__ */ n.jsxs("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.5rem"
  }, children: [
    /* @__PURE__ */ n.jsx("div", { style: {
      width: "32px",
      height: "32px",
      backgroundColor: i.role === "admin" ? "#dc2626" : "#3b82f6",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "0.875rem",
      fontWeight: "600"
    }, children: i.name.charAt(0) }),
    /* @__PURE__ */ n.jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
      /* @__PURE__ */ n.jsx("div", { style: {
        fontSize: "0.875rem",
        fontWeight: "500",
        color: "#374151",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }, children: i.name }),
      l && /* @__PURE__ */ n.jsx("div", { style: {
        fontSize: "0.75rem",
        color: "#6b7280",
        textTransform: "capitalize"
      }, children: i.role })
    ] }),
    /* @__PURE__ */ n.jsx(
      Z,
      {
        onClick: m,
        variant: "secondary",
        style: {
          padding: "0.375rem 0.75rem",
          fontSize: "0.875rem"
        },
        children: "Logout"
      }
    )
  ] }) : /* @__PURE__ */ n.jsxs("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem",
    backgroundColor: "#f8fafc",
    borderRadius: "0.5rem",
    border: "1px solid #e2e8f0"
  }, children: [
    /* @__PURE__ */ n.jsx("div", { style: {
      width: "48px",
      height: "48px",
      backgroundColor: i.role === "admin" ? "#dc2626" : "#3b82f6",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "1.25rem",
      fontWeight: "600"
    }, children: i.name.charAt(0) }),
    /* @__PURE__ */ n.jsxs("div", { style: { flex: 1 }, children: [
      /* @__PURE__ */ n.jsx("div", { style: {
        fontSize: "1.125rem",
        fontWeight: "600",
        color: "#1f2937",
        marginBottom: "0.25rem"
      }, children: i.name }),
      /* @__PURE__ */ n.jsx("div", { style: {
        fontSize: "0.875rem",
        color: "#6b7280",
        marginBottom: "0.25rem"
      }, children: i.email }),
      l && /* @__PURE__ */ n.jsx("span", { style: {
        fontSize: "0.75rem",
        fontWeight: "500",
        color: i.role === "admin" ? "#dc2626" : "#3b82f6",
        backgroundColor: i.role === "admin" ? "#fef2f2" : "#dbeafe",
        padding: "0.25rem 0.5rem",
        borderRadius: "0.25rem",
        textTransform: "uppercase"
      }, children: i.role })
    ] }),
    /* @__PURE__ */ n.jsx(
      Z,
      {
        onClick: m,
        variant: "secondary",
        children: "Logout"
      }
    )
  ] });
}, Or = ({
  children: l,
  requiredRole: u,
  fallback: i,
  showLoginForm: m = !1
}) => {
  const { isAuthenticated: y, user: _ } = ee();
  return y ? u && _ && !(u === "user" || u === "admin" && _.role === "admin") ? i || /* @__PURE__ */ n.jsx(Q, { title: "🚫 Access Denied", children: /* @__PURE__ */ n.jsxs("div", { style: { textAlign: "center", padding: "2rem" }, children: [
    /* @__PURE__ */ n.jsx("p", { style: { color: "#dc2626", marginBottom: "1rem" }, children: "You don't have permission to access this feature." }),
    /* @__PURE__ */ n.jsxs("p", { style: { color: "#6b7280", fontSize: "0.875rem" }, children: [
      "Required role: ",
      /* @__PURE__ */ n.jsx("strong", { children: u }),
      /* @__PURE__ */ n.jsx("br", {}),
      "Your role: ",
      /* @__PURE__ */ n.jsx("strong", { children: _.role })
    ] })
  ] }) }) : /* @__PURE__ */ n.jsx(n.Fragment, { children: l }) : m ? /* @__PURE__ */ n.jsx(Sr, {}) : i || /* @__PURE__ */ n.jsx(Q, { title: "🔒 Authentication Required", children: /* @__PURE__ */ n.jsxs("div", { style: { textAlign: "center", padding: "2rem" }, children: [
    /* @__PURE__ */ n.jsx("p", { style: { color: "#6b7280", marginBottom: "1rem" }, children: "Please log in to access this feature." }),
    /* @__PURE__ */ n.jsxs("div", { style: {
      padding: "1rem",
      backgroundColor: "#f8fafc",
      borderRadius: "0.375rem",
      fontSize: "0.875rem",
      color: "#64748b"
    }, children: [
      /* @__PURE__ */ n.jsx("strong", { children: "Demo Credentials:" }),
      /* @__PURE__ */ n.jsx("br", {}),
      "Admin: admin@example.com / admin123",
      /* @__PURE__ */ n.jsx("br", {}),
      "User: user@example.com / user123"
    ] })
  ] }) });
};
export {
  Cr as AuthProvider,
  Z as Button,
  Q as Card,
  Sr as LoginForm,
  Or as ProtectedWrapper,
  wr as UserProfile,
  ee as useAuth
};
