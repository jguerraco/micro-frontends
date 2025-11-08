import ke, { useState as B, useEffect as Oe } from "react";
import { useLocation as pr, Link as yr, Routes as vr, Route as J, Navigate as br } from "react-router-dom";
import { Card as k, ProtectedWrapper as xr } from "shared-ui";
var re = { exports: {} }, D = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function jr() {
  if (_e) return D;
  _e = 1;
  var f = ke, h = Symbol.for("react.element"), S = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, E = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, p, O) {
    var x, w = {}, C = null, L = null;
    O !== void 0 && (C = "" + O), p.key !== void 0 && (C = "" + p.key), p.ref !== void 0 && (L = p.ref);
    for (x in p) u.call(p, x) && !j.hasOwnProperty(x) && (w[x] = p[x]);
    if (c && c.defaultProps) for (x in p = c.defaultProps, p) w[x] === void 0 && (w[x] = p[x]);
    return { $$typeof: h, type: c, key: C, ref: L, props: w, _owner: E.current };
  }
  return D.Fragment = S, D.jsx = s, D.jsxs = s, D;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function Rr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var f = ke, h = Symbol.for("react.element"), S = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), te = Symbol.iterator, Ie = "@@iterator";
    function Fe(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = te && e[te] || e[Ie];
      return typeof t == "function" ? t : null;
    }
    var A = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        Be("error", e, n);
      }
    }
    function Be(e, t, n) {
      {
        var o = A.ReactDebugCurrentFrame, l = o.getStackAddendum();
        l !== "" && (t += "%s", n = n.concat([l]));
        var d = n.map(function(a) {
          return String(a);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var We = !1, ze = !1, De = !1, Ue = !1, $e = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === j || $e || e === E || e === O || e === x || Ue || e === L || We || ze || De || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === w || e.$$typeof === s || e.$$typeof === c || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Ye(e, t, n) {
      var o = e.displayName;
      if (o)
        return o;
      var l = t.displayName || t.name || "";
      return l !== "" ? n + "(" + l + ")" : n;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case S:
          return "Portal";
        case j:
          return "Profiler";
        case E:
          return "StrictMode";
        case O:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var t = e;
            return oe(t) + ".Consumer";
          case s:
            var n = e;
            return oe(n._context) + ".Provider";
          case p:
            return Ye(e, e.render, "ForwardRef");
          case w:
            var o = e.displayName || null;
            return o !== null ? o : T(e.type) || "Memo";
          case C: {
            var l = e, d = l._payload, a = l._init;
            try {
              return T(a(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _ = Object.assign, W = 0, ie, ae, se, le, ce, de, ue;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Ne() {
      {
        if (W === 0) {
          ie = console.log, ae = console.info, se = console.warn, le = console.error, ce = console.group, de = console.groupCollapsed, ue = console.groupEnd;
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
        W++;
      }
    }
    function Me() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _({}, e, {
              value: ie
            }),
            info: _({}, e, {
              value: ae
            }),
            warn: _({}, e, {
              value: se
            }),
            error: _({}, e, {
              value: le
            }),
            group: _({}, e, {
              value: ce
            }),
            groupCollapsed: _({}, e, {
              value: de
            }),
            groupEnd: _({}, e, {
              value: ue
            })
          });
        }
        W < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = A.ReactCurrentDispatcher, G;
    function Y(e, t, n) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (l) {
            var o = l.stack.trim().match(/\n( *(at )?)/);
            G = o && o[1] || "";
          }
        return `
` + G + e;
      }
    }
    var q = !1, N;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Ve();
    }
    function me(e, t) {
      if (!e || q)
        return "";
      {
        var n = N.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      q = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = H.current, H.current = null, Ne();
      try {
        if (t) {
          var a = function() {
            throw Error();
          };
          if (Object.defineProperty(a.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(a, []);
            } catch (b) {
              o = b;
            }
            Reflect.construct(e, [], a);
          } else {
            try {
              a.call();
            } catch (b) {
              o = b;
            }
            e.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            o = b;
          }
          e();
        }
      } catch (b) {
        if (b && o && typeof b.stack == "string") {
          for (var i = b.stack.split(`
`), v = o.stack.split(`
`), m = i.length - 1, g = v.length - 1; m >= 1 && g >= 0 && i[m] !== v[g]; )
            g--;
          for (; m >= 1 && g >= 0; m--, g--)
            if (i[m] !== v[g]) {
              if (m !== 1 || g !== 1)
                do
                  if (m--, g--, g < 0 || i[m] !== v[g]) {
                    var R = `
` + i[m].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, R), R;
                  }
                while (m >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        q = !1, H.current = d, Me(), Error.prepareStackTrace = l;
      }
      var F = e ? e.displayName || e.name : "", P = F ? Y(F) : "";
      return typeof e == "function" && N.set(e, P), P;
    }
    function Je(e, t, n) {
      return me(e, !1);
    }
    function He(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function M(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, He(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case O:
          return Y("Suspense");
        case x:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Je(e.render);
          case w:
            return M(e.type, t, n);
          case C: {
            var o = e, l = o._payload, d = o._init;
            try {
              return M(d(l), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, he = {}, ge = A.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var t = e._owner, n = M(e.type, e._source, t ? t.type : null);
        ge.setExtraStackFrame(n);
      } else
        ge.setExtraStackFrame(null);
    }
    function Ge(e, t, n, o, l) {
      {
        var d = Function.call.bind(z);
        for (var a in e)
          if (d(e, a)) {
            var i = void 0;
            try {
              if (typeof e[a] != "function") {
                var v = Error((o || "React class") + ": " + n + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              i = e[a](t, a, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              i = m;
            }
            i && !(i instanceof Error) && (V(l), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, a, typeof i), V(null)), i instanceof Error && !(i.message in he) && (he[i.message] = !0, V(l), y("Failed %s type: %s", n, i.message), V(null));
          }
      }
    }
    var qe = Array.isArray;
    function K(e) {
      return qe(e);
    }
    function Ke(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
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
    function ye(e) {
      if (Xe(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), pe(e);
    }
    var ve = A.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, xe;
    function Qe(e) {
      if (z.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function er(e) {
      if (z.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rr(e, t) {
      typeof e.ref == "string" && ve.current;
    }
    function tr(e, t) {
      {
        var n = function() {
          be || (be = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function nr(e, t) {
      {
        var n = function() {
          xe || (xe = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var or = function(e, t, n, o, l, d, a) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: n,
        props: a,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function ir(e, t, n, o, l) {
      {
        var d, a = {}, i = null, v = null;
        n !== void 0 && (ye(n), i = "" + n), er(t) && (ye(t.key), i = "" + t.key), Qe(t) && (v = t.ref, rr(t, l));
        for (d in t)
          z.call(t, d) && !Ze.hasOwnProperty(d) && (a[d] = t[d]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (d in m)
            a[d] === void 0 && (a[d] = m[d]);
        }
        if (i || v) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && tr(a, g), v && nr(a, g);
        }
        return or(e, i, v, l, o, ve.current, a);
      }
    }
    var X = A.ReactCurrentOwner, je = A.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var t = e._owner, n = M(e.type, e._source, t ? t.type : null);
        je.setExtraStackFrame(n);
      } else
        je.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function Re() {
      {
        if (X.current) {
          var e = T(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var Ee = {};
    function sr(e) {
      {
        var t = Re();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function Se(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = sr(t);
        if (Ee[n])
          return;
        Ee[n] = !0;
        var o = "";
        e && e._owner && e._owner !== X.current && (o = " It was passed a child from " + T(e._owner.type) + "."), I(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, o), I(null);
      }
    }
    function we(e, t) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            Q(o) && Se(o, t);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = Fe(e);
          if (typeof l == "function" && l !== e.entries)
            for (var d = l.call(e), a; !(a = d.next()).done; )
              Q(a.value) && Se(a.value, t);
        }
      }
    }
    function lr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === w))
          n = t.propTypes;
        else
          return;
        if (n) {
          var o = T(t);
          Ge(n, e.props, "prop", o, e);
        } else if (t.PropTypes !== void 0 && !Z) {
          Z = !0;
          var l = T(t);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var o = t[n];
          if (o !== "children" && o !== "key") {
            I(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var Te = {};
    function Ce(e, t, n, o, l, d) {
      {
        var a = Le(e);
        if (!a) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = ar();
          v ? i += v : i += Re();
          var m;
          e === null ? m = "null" : K(e) ? m = "array" : e !== void 0 && e.$$typeof === h ? (m = "<" + (T(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, i);
        }
        var g = ir(e, t, n, l, d);
        if (g == null)
          return g;
        if (a) {
          var R = t.children;
          if (R !== void 0)
            if (o)
              if (K(R)) {
                for (var F = 0; F < R.length; F++)
                  we(R[F], e);
                Object.freeze && Object.freeze(R);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(R, e);
        }
        if (z.call(t, "key")) {
          var P = T(e), b = Object.keys(t).filter(function(gr) {
            return gr !== "key";
          }), ee = b.length > 0 ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[P + ee]) {
            var hr = b.length > 0 ? "{" + b.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, P, hr, P), Te[P + ee] = !0;
          }
        }
        return e === u ? cr(g) : lr(g), g;
      }
    }
    function dr(e, t, n) {
      return Ce(e, t, n, !0);
    }
    function ur(e, t, n) {
      return Ce(e, t, n, !1);
    }
    var fr = ur, mr = dr;
    U.Fragment = u, U.jsx = fr, U.jsxs = mr;
  }()), U;
}
process.env.NODE_ENV === "production" ? re.exports = jr() : re.exports = Rr();
var r = re.exports;
const $ = "https://jsonplaceholder.typicode.com", Ae = {
  // Posts endpoints
  async getPosts() {
    const f = await fetch(`${$}/posts`);
    if (!f.ok) throw new Error("Failed to fetch posts");
    return f.json();
  },
  async getPost(f) {
    const h = await fetch(`${$}/posts/${f}`);
    if (!h.ok) throw new Error("Failed to fetch post");
    return h.json();
  },
  async getPostComments(f) {
    const h = await fetch(`${$}/posts/${f}/comments`);
    if (!h.ok) throw new Error("Failed to fetch comments");
    return h.json();
  },
  // Users endpoints
  async getUsers() {
    const f = await fetch(`${$}/users`);
    if (!f.ok) throw new Error("Failed to fetch users");
    return f.json();
  },
  async getUser(f) {
    const h = await fetch(`${$}/users/${f}`);
    if (!h.ok) throw new Error("Failed to fetch user");
    return h.json();
  }
}, Er = () => {
  const [f, h] = B([]), [S, u] = B(!0), [E, j] = B(null);
  return Oe(() => {
    (async () => {
      try {
        u(!0);
        const c = await Ae.getPosts();
        h(c.slice(0, 10));
      } catch (c) {
        j(c instanceof Error ? c.message : "Failed to load posts");
      } finally {
        u(!1);
      }
    })();
  }, []), S ? /* @__PURE__ */ r.jsx(k, { title: "📝 Blog Posts", children: /* @__PURE__ */ r.jsx("div", { style: {
    padding: "3rem",
    textAlign: "center",
    color: "#6b7280"
  }, children: "Loading posts..." }) }) : E ? /* @__PURE__ */ r.jsx(k, { title: "📝 Blog Posts", children: /* @__PURE__ */ r.jsxs("div", { style: {
    padding: "2rem",
    textAlign: "center",
    color: "#dc2626"
  }, children: [
    /* @__PURE__ */ r.jsxs("p", { children: [
      "❌ Error loading posts: ",
      E
    ] }),
    /* @__PURE__ */ r.jsx(
      "button",
      {
        onClick: () => window.location.reload(),
        style: {
          padding: "0.5rem 1rem",
          backgroundColor: "#dc2626",
          color: "white",
          border: "none",
          borderRadius: "0.25rem",
          cursor: "pointer",
          marginTop: "1rem"
        },
        children: "Retry"
      }
    )
  ] }) }) : /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsxs(k, { title: "📝 Blog Posts", children: [
    /* @__PURE__ */ r.jsx("p", { style: {
      marginBottom: "1.5rem",
      color: "#6b7280"
    }, children: "Latest blog posts from JSONPlaceholder API" }),
    /* @__PURE__ */ r.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "1rem"
    }, children: f.map((s) => /* @__PURE__ */ r.jsxs(
      "div",
      {
        style: {
          backgroundColor: "#f8fafc",
          border: "1px solid #e5e7eb",
          borderRadius: "0.5rem",
          padding: "1.5rem",
          transition: "all 0.2s ease"
        },
        onMouseOver: (c) => {
          c.currentTarget.style.backgroundColor = "#f1f5f9", c.currentTarget.style.borderColor = "#cbd5e1", c.currentTarget.style.transform = "translateY(-2px)", c.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
        },
        onMouseOut: (c) => {
          c.currentTarget.style.backgroundColor = "#f8fafc", c.currentTarget.style.borderColor = "#e5e7eb", c.currentTarget.style.transform = "none", c.currentTarget.style.boxShadow = "none";
        },
        children: [
          /* @__PURE__ */ r.jsx("h3", { style: {
            margin: "0 0 0.75rem 0",
            color: "#374151",
            fontSize: "1.125rem",
            fontWeight: "600",
            lineHeight: "1.4",
            textTransform: "capitalize"
          }, children: s.title }),
          /* @__PURE__ */ r.jsx("p", { style: {
            margin: "0 0 1rem 0",
            color: "#6b7280",
            fontSize: "0.875rem",
            lineHeight: "1.5",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical"
          }, children: s.body }),
          /* @__PURE__ */ r.jsxs("div", { style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.75rem",
            color: "#9ca3af"
          }, children: [
            /* @__PURE__ */ r.jsxs("span", { children: [
              "Post #",
              s.id
            ] }),
            /* @__PURE__ */ r.jsxs("span", { children: [
              "Author: User ",
              s.userId
            ] })
          ] })
        ]
      },
      s.id
    )) }),
    /* @__PURE__ */ r.jsx("div", { style: {
      marginTop: "2rem",
      padding: "1rem",
      backgroundColor: "#f0f9ff",
      border: "1px solid #0ea5e9",
      borderRadius: "0.5rem"
    }, children: /* @__PURE__ */ r.jsx("p", { style: {
      margin: 0,
      color: "#0c4a6e",
      fontSize: "0.875rem"
    }, children: "💡 This page demonstrates API integration with JSONPlaceholder. Posts are fetched dynamically and displayed with responsive design." }) })
  ] }) });
}, Sr = () => {
  const [f, h] = B([]), [S, u] = B(!0), [E, j] = B(null);
  return Oe(() => {
    (async () => {
      try {
        u(!0);
        const c = await Ae.getUsers();
        h(c);
      } catch (c) {
        j(c instanceof Error ? c.message : "Failed to load users");
      } finally {
        u(!1);
      }
    })();
  }, []), S ? /* @__PURE__ */ r.jsx(k, { title: "👥 Users Directory", children: /* @__PURE__ */ r.jsx("div", { style: {
    padding: "3rem",
    textAlign: "center",
    color: "#6b7280"
  }, children: "Loading users..." }) }) : E ? /* @__PURE__ */ r.jsx(k, { title: "👥 Users Directory", children: /* @__PURE__ */ r.jsxs("div", { style: {
    padding: "2rem",
    textAlign: "center",
    color: "#dc2626"
  }, children: [
    /* @__PURE__ */ r.jsxs("p", { children: [
      "❌ Error loading users: ",
      E
    ] }),
    /* @__PURE__ */ r.jsx(
      "button",
      {
        onClick: () => globalThis.location.reload(),
        style: {
          padding: "0.5rem 1rem",
          backgroundColor: "#dc2626",
          color: "white",
          border: "none",
          borderRadius: "0.25rem",
          cursor: "pointer",
          marginTop: "1rem"
        },
        children: "Retry"
      }
    )
  ] }) }) : /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsxs(k, { title: "👥 Users Directory", children: [
    /* @__PURE__ */ r.jsx("p", { style: {
      marginBottom: "1.5rem",
      color: "#6b7280"
    }, children: "User profiles from JSONPlaceholder API" }),
    /* @__PURE__ */ r.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
      gap: "1.5rem"
    }, children: f.map((s) => /* @__PURE__ */ r.jsxs(
      "div",
      {
        style: {
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "0.75rem",
          padding: "1.5rem",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
        },
        children: [
          /* @__PURE__ */ r.jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem"
          }, children: [
            /* @__PURE__ */ r.jsx("div", { style: {
              width: "3rem",
              height: "3rem",
              backgroundColor: "#3b82f6",
              color: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.25rem",
              fontWeight: "bold",
              marginRight: "1rem"
            }, children: s.name.charAt(0) }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("h3", { style: {
                margin: 0,
                color: "#374151",
                fontSize: "1.125rem",
                fontWeight: "600"
              }, children: s.name }),
              /* @__PURE__ */ r.jsxs("p", { style: {
                margin: 0,
                color: "#6b7280",
                fontSize: "0.875rem"
              }, children: [
                "@",
                s.username
              ] })
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { style: { marginBottom: "1rem" }, children: [
            /* @__PURE__ */ r.jsxs("div", { style: {
              display: "flex",
              alignItems: "center",
              marginBottom: "0.5rem"
            }, children: [
              /* @__PURE__ */ r.jsx("span", { style: { marginRight: "0.5rem" }, children: "📧" }),
              /* @__PURE__ */ r.jsx("span", { style: { color: "#6b7280", fontSize: "0.875rem" }, children: s.email })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { style: {
              display: "flex",
              alignItems: "center",
              marginBottom: "0.5rem"
            }, children: [
              /* @__PURE__ */ r.jsx("span", { style: { marginRight: "0.5rem" }, children: "📞" }),
              /* @__PURE__ */ r.jsx("span", { style: { color: "#6b7280", fontSize: "0.875rem" }, children: s.phone })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { style: {
              display: "flex",
              alignItems: "center",
              marginBottom: "0.5rem"
            }, children: [
              /* @__PURE__ */ r.jsx("span", { style: { marginRight: "0.5rem" }, children: "🌐" }),
              /* @__PURE__ */ r.jsx("span", { style: { color: "#6b7280", fontSize: "0.875rem" }, children: s.website })
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { style: {
            backgroundColor: "#f8fafc",
            padding: "1rem",
            borderRadius: "0.5rem",
            marginBottom: "1rem"
          }, children: [
            /* @__PURE__ */ r.jsx("h4", { style: {
              margin: "0 0 0.5rem 0",
              color: "#374151",
              fontSize: "0.875rem",
              fontWeight: "600"
            }, children: "📍 Address" }),
            /* @__PURE__ */ r.jsxs("p", { style: {
              margin: 0,
              color: "#6b7280",
              fontSize: "0.75rem",
              lineHeight: "1.4"
            }, children: [
              s.address.street,
              ", ",
              s.address.suite,
              /* @__PURE__ */ r.jsx("br", {}),
              s.address.city,
              " ",
              s.address.zipcode
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { style: {
            backgroundColor: "#f0f9ff",
            padding: "1rem",
            borderRadius: "0.5rem"
          }, children: [
            /* @__PURE__ */ r.jsx("h4", { style: {
              margin: "0 0 0.5rem 0",
              color: "#0c4a6e",
              fontSize: "0.875rem",
              fontWeight: "600"
            }, children: "🏢 Company" }),
            /* @__PURE__ */ r.jsx("p", { style: {
              margin: "0 0 0.25rem 0",
              color: "#0369a1",
              fontSize: "0.875rem",
              fontWeight: "500"
            }, children: s.company.name }),
            /* @__PURE__ */ r.jsxs("p", { style: {
              margin: 0,
              color: "#0284c7",
              fontSize: "0.75rem",
              fontStyle: "italic"
            }, children: [
              '"',
              s.company.catchPhrase,
              '"'
            ] })
          ] })
        ]
      },
      s.id
    )) }),
    /* @__PURE__ */ r.jsx("div", { style: {
      marginTop: "2rem",
      padding: "1rem",
      backgroundColor: "#f0fdf4",
      border: "1px solid #22c55e",
      borderRadius: "0.5rem"
    }, children: /* @__PURE__ */ r.jsx("p", { style: {
      margin: 0,
      color: "#14532d",
      fontSize: "0.875rem"
    }, children: "👥 This page showcases user data from JSONPlaceholder with rich profile cards displaying contact information, addresses, and company details." }) })
  ] }) });
}, wr = () => /* @__PURE__ */ r.jsx("div", { style: { maxWidth: "800px", margin: "0 auto" }, children: /* @__PURE__ */ r.jsx(k, { title: "ℹ️ About Content Hub", children: /* @__PURE__ */ r.jsxs("div", { style: { lineHeight: "1.6", color: "#374151" }, children: [
  /* @__PURE__ */ r.jsx("p", { style: { fontSize: "1.125rem", marginBottom: "1.5rem", color: "#6b7280" }, children: "Welcome to the Content Hub - a demonstration of advanced micro-frontend architecture with nested routing and API integration." }),
  /* @__PURE__ */ r.jsx("h3", { style: {
    color: "#374151",
    marginTop: "2rem",
    marginBottom: "1rem",
    fontSize: "1.25rem",
    fontWeight: "600"
  }, children: "🎯 Purpose" }),
  /* @__PURE__ */ r.jsx("p", { style: { marginBottom: "1.5rem" }, children: "This micro-frontend demonstrates how to build a content-focused application that integrates with external APIs while maintaining clean architecture patterns. It showcases nested routing within a micro-frontend and seamless integration with a host application." }),
  /* @__PURE__ */ r.jsx("h3", { style: {
    color: "#374151",
    marginTop: "2rem",
    marginBottom: "1rem",
    fontSize: "1.25rem",
    fontWeight: "600"
  }, children: "🔧 Technical Features" }),
  /* @__PURE__ */ r.jsxs("ul", { style: {
    paddingLeft: "1.5rem",
    marginBottom: "1.5rem",
    listStyleType: "disc"
  }, children: [
    /* @__PURE__ */ r.jsxs("li", { style: { marginBottom: "0.5rem" }, children: [
      /* @__PURE__ */ r.jsx("strong", { children: "React Router v6:" }),
      " Nested routing within the micro-frontend"
    ] }),
    /* @__PURE__ */ r.jsxs("li", { style: { marginBottom: "0.5rem" }, children: [
      /* @__PURE__ */ r.jsx("strong", { children: "API Integration:" }),
      " JSONPlaceholder REST API consumption"
    ] }),
    /* @__PURE__ */ r.jsxs("li", { style: { marginBottom: "0.5rem" }, children: [
      /* @__PURE__ */ r.jsx("strong", { children: "TypeScript:" }),
      " Fully typed components and API responses"
    ] }),
    /* @__PURE__ */ r.jsxs("li", { style: { marginBottom: "0.5rem" }, children: [
      /* @__PURE__ */ r.jsx("strong", { children: "Error Handling:" }),
      " Graceful error states and loading indicators"
    ] }),
    /* @__PURE__ */ r.jsxs("li", { style: { marginBottom: "0.5rem" }, children: [
      /* @__PURE__ */ r.jsx("strong", { children: "Responsive Design:" }),
      " Mobile-first responsive layouts"
    ] }),
    /* @__PURE__ */ r.jsxs("li", { style: { marginBottom: "0.5rem" }, children: [
      /* @__PURE__ */ r.jsx("strong", { children: "Shared Components:" }),
      " Leverages shared-ui component library"
    ] })
  ] }),
  /* @__PURE__ */ r.jsx("h3", { style: {
    color: "#374151",
    marginTop: "2rem",
    marginBottom: "1rem",
    fontSize: "1.25rem",
    fontWeight: "600"
  }, children: "📊 API Endpoints Used" }),
  /* @__PURE__ */ r.jsx("div", { style: {
    backgroundColor: "#f8fafc",
    padding: "1rem",
    borderRadius: "0.5rem",
    border: "1px solid #e5e7eb",
    marginBottom: "1.5rem"
  }, children: /* @__PURE__ */ r.jsxs("ul", { style: {
    margin: 0,
    paddingLeft: "1.5rem",
    fontSize: "0.875rem",
    fontFamily: "monospace"
  }, children: [
    /* @__PURE__ */ r.jsxs("li", { style: { marginBottom: "0.5rem" }, children: [
      /* @__PURE__ */ r.jsx("strong", { children: "GET" }),
      " /posts - Fetch blog posts"
    ] }),
    /* @__PURE__ */ r.jsxs("li", { style: { marginBottom: "0.5rem" }, children: [
      /* @__PURE__ */ r.jsx("strong", { children: "GET" }),
      " /users - Fetch user profiles"
    ] }),
    /* @__PURE__ */ r.jsxs("li", { style: { marginBottom: "0.5rem" }, children: [
      /* @__PURE__ */ r.jsx("strong", { children: "GET" }),
      " /posts/:id/comments - Fetch post comments"
    ] })
  ] }) }),
  /* @__PURE__ */ r.jsx("h3", { style: {
    color: "#374151",
    marginTop: "2rem",
    marginBottom: "1rem",
    fontSize: "1.25rem",
    fontWeight: "600"
  }, children: "🏗️ Architecture Benefits" }),
  /* @__PURE__ */ r.jsxs("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
    marginBottom: "1.5rem"
  }, children: [
    /* @__PURE__ */ r.jsxs("div", { style: {
      backgroundColor: "#f0f9ff",
      padding: "1rem",
      borderRadius: "0.5rem",
      border: "1px solid #0ea5e9"
    }, children: [
      /* @__PURE__ */ r.jsx("h4", { style: {
        margin: "0 0 0.5rem 0",
        color: "#0c4a6e",
        fontSize: "1rem",
        fontWeight: "600"
      }, children: "🎯 Independence" }),
      /* @__PURE__ */ r.jsx("p", { style: {
        margin: 0,
        color: "#0369a1",
        fontSize: "0.875rem"
      }, children: "Can be developed and deployed independently from other micro-frontends" })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { style: {
      backgroundColor: "#f0fdf4",
      padding: "1rem",
      borderRadius: "0.5rem",
      border: "1px solid #22c55e"
    }, children: [
      /* @__PURE__ */ r.jsx("h4", { style: {
        margin: "0 0 0.5rem 0",
        color: "#14532d",
        fontSize: "1rem",
        fontWeight: "600"
      }, children: "🔄 Reusability" }),
      /* @__PURE__ */ r.jsx("p", { style: {
        margin: 0,
        color: "#15803d",
        fontSize: "0.875rem"
      }, children: "Shared components and patterns can be reused across applications" })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { style: {
      backgroundColor: "#fef2f2",
      padding: "1rem",
      borderRadius: "0.5rem",
      border: "1px solid #ef4444"
    }, children: [
      /* @__PURE__ */ r.jsx("h4", { style: {
        margin: "0 0 0.5rem 0",
        color: "#991b1b",
        fontSize: "1rem",
        fontWeight: "600"
      }, children: "⚡ Performance" }),
      /* @__PURE__ */ r.jsx("p", { style: {
        margin: 0,
        color: "#dc2626",
        fontSize: "0.875rem"
      }, children: "Lazy loading and code splitting optimize bundle sizes" })
    ] })
  ] }),
  /* @__PURE__ */ r.jsx("h3", { style: {
    color: "#374151",
    marginTop: "2rem",
    marginBottom: "1rem",
    fontSize: "1.25rem",
    fontWeight: "600"
  }, children: "🚀 Getting Started" }),
  /* @__PURE__ */ r.jsxs("div", { style: {
    backgroundColor: "#fffbeb",
    padding: "1rem",
    borderRadius: "0.5rem",
    border: "1px solid #f59e0b",
    marginBottom: "1.5rem"
  }, children: [
    /* @__PURE__ */ r.jsxs("p", { style: {
      margin: "0 0 1rem 0",
      color: "#92400e",
      fontSize: "0.875rem"
    }, children: [
      /* @__PURE__ */ r.jsx("strong", { children: "🎨 Navigation:" }),
      " Use the header navigation to explore different sections:"
    ] }),
    /* @__PURE__ */ r.jsxs("ul", { style: {
      margin: 0,
      paddingLeft: "1.5rem",
      color: "#92400e",
      fontSize: "0.875rem"
    }, children: [
      /* @__PURE__ */ r.jsxs("li", { children: [
        "📝 ",
        /* @__PURE__ */ r.jsx("strong", { children: "Posts:" }),
        " Browse blog content from JSONPlaceholder"
      ] }),
      /* @__PURE__ */ r.jsxs("li", { children: [
        "👥 ",
        /* @__PURE__ */ r.jsx("strong", { children: "Users:" }),
        " View user profiles and contact information"
      ] }),
      /* @__PURE__ */ r.jsxs("li", { children: [
        "ℹ️ ",
        /* @__PURE__ */ r.jsx("strong", { children: "About:" }),
        " Learn about the architecture (this page)"
      ] })
    ] })
  ] }),
  /* @__PURE__ */ r.jsx("div", { style: {
    backgroundColor: "#f3f4f6",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    marginTop: "2rem",
    textAlign: "center"
  }, children: /* @__PURE__ */ r.jsx("p", { style: {
    margin: 0,
    color: "#6b7280",
    fontSize: "0.875rem"
  }, children: "💡 This micro-frontend demonstrates real-world patterns for building scalable, maintainable applications with modern React architecture." }) })
] }) }) }), Tr = () => {
  const f = pr(), h = [
    { path: "", label: "📝 Posts", icon: "📝" },
    { path: "users", label: "👥 Users", icon: "👥" },
    { path: "about", label: "ℹ️ About", icon: "ℹ️" }
  ], S = (u) => ({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    textDecoration: "none",
    fontSize: "0.875rem",
    fontWeight: "500",
    transition: "all 0.2s ease",
    backgroundColor: u ? "#3b82f6" : "transparent",
    color: u ? "white" : "#374151",
    border: "1px solid",
    borderColor: u ? "#3b82f6" : "#d1d5db"
  });
  return /* @__PURE__ */ r.jsx("div", { style: {
    backgroundColor: "white",
    borderBottom: "1px solid #e5e7eb",
    padding: "1rem 0",
    marginBottom: "1.5rem"
  }, children: /* @__PURE__ */ r.jsx("div", { style: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center"
  }, children: h.map((u) => {
    const j = (f.pathname.split("/").pop() || "") === u.path;
    return /* @__PURE__ */ r.jsxs(
      yr,
      {
        to: u.path,
        style: S(j),
        onMouseOver: (s) => {
          j || (s.currentTarget.style.backgroundColor = "#f3f4f6", s.currentTarget.style.borderColor = "#9ca3af");
        },
        onMouseOut: (s) => {
          j || (s.currentTarget.style.backgroundColor = "transparent", s.currentTarget.style.borderColor = "#d1d5db");
        },
        children: [
          /* @__PURE__ */ r.jsx("span", { children: u.icon }),
          /* @__PURE__ */ r.jsx("span", { children: u.label })
        ]
      },
      u.path
    );
  }) }) });
}, kr = () => /* @__PURE__ */ r.jsx(xr, { children: /* @__PURE__ */ r.jsx("div", { style: {
  backgroundColor: "#f8fafc",
  minHeight: "100vh",
  padding: "1rem"
}, children: /* @__PURE__ */ r.jsx("div", { style: { maxWidth: "1200px", margin: "0 auto" }, children: /* @__PURE__ */ r.jsxs("div", { style: {
  backgroundColor: "white",
  borderRadius: "0.75rem",
  border: "1px solid #e5e7eb",
  overflow: "hidden",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  minHeight: "80vh"
}, children: [
  /* @__PURE__ */ r.jsxs("div", { style: {
    backgroundColor: "#1f2937",
    color: "white",
    padding: "1.5rem 2rem",
    textAlign: "center"
  }, children: [
    /* @__PURE__ */ r.jsx("h1", { style: {
      margin: "0 0 0.5rem 0",
      fontSize: "2rem",
      fontWeight: "700"
    }, children: "📰 Content Hub" }),
    /* @__PURE__ */ r.jsx("p", { style: {
      margin: 0,
      fontSize: "1rem",
      opacity: 0.9
    }, children: "Advanced micro-frontend with nested routing and API integration" })
  ] }),
  /* @__PURE__ */ r.jsx(Tr, {}),
  /* @__PURE__ */ r.jsx("div", { style: { padding: "0 2rem 2rem" }, children: /* @__PURE__ */ r.jsxs(vr, { children: [
    /* @__PURE__ */ r.jsx(J, { index: !0, element: /* @__PURE__ */ r.jsx(Er, {}) }),
    /* @__PURE__ */ r.jsx(J, { path: "users", element: /* @__PURE__ */ r.jsx(Sr, {}) }),
    /* @__PURE__ */ r.jsx(J, { path: "about", element: /* @__PURE__ */ r.jsx(wr, {}) }),
    /* @__PURE__ */ r.jsx(J, { path: "*", element: /* @__PURE__ */ r.jsx(br, { to: "", replace: !0 }) })
  ] }) })
] }) }) }) });
export {
  kr as App3,
  kr as default
};
