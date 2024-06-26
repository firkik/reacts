var Rp = Object.defineProperty;
var zp = (e, t, n) =>
  t in e
    ? Rp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var D = (e, t, n) => (zp(e, typeof t != "symbol" ? t + "" : t, n), n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
})();
function Np(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ff = { exports: {} },
  no = {},
  If = { exports: {} },
  N = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vr = Symbol.for("react.element"),
  Fp = Symbol.for("react.portal"),
  Ip = Symbol.for("react.fragment"),
  jp = Symbol.for("react.strict_mode"),
  Bp = Symbol.for("react.profiler"),
  Hp = Symbol.for("react.provider"),
  Wp = Symbol.for("react.context"),
  Vp = Symbol.for("react.forward_ref"),
  Up = Symbol.for("react.suspense"),
  Yp = Symbol.for("react.memo"),
  Qp = Symbol.for("react.lazy"),
  gu = Symbol.iterator;
function Xp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gu && e[gu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var jf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Bf = Object.assign,
  Hf = {};
function ci(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hf),
    (this.updater = n || jf);
}
ci.prototype.isReactComponent = {};
ci.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ci.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wf() {}
Wf.prototype = ci.prototype;
function sa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hf),
    (this.updater = n || jf);
}
var oa = (sa.prototype = new Wf());
oa.constructor = sa;
Bf(oa, ci.prototype);
oa.isPureReactComponent = !0;
var mu = Array.isArray,
  Vf = Object.prototype.hasOwnProperty,
  la = { current: null },
  Uf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yf(e, t, n) {
  var i,
    r = {},
    s = null,
    o = null;
  if (t != null)
    for (i in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Vf.call(t, i) && !Uf.hasOwnProperty(i) && (r[i] = t[i]);
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  if (e && e.defaultProps)
    for (i in ((l = e.defaultProps), l)) r[i] === void 0 && (r[i] = l[i]);
  return {
    $$typeof: vr,
    type: e,
    key: s,
    ref: o,
    props: r,
    _owner: la.current,
  };
}
function Kp(e, t) {
  return {
    $$typeof: vr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function aa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === vr;
}
function Gp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var yu = /\/+/g;
function bo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Gp("" + e.key)
    : t.toString(36);
}
function is(e, t, n, i, r) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case vr:
          case Fp:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (r = r(o)),
      (e = i === "" ? "." + bo(o, 0) : i),
      mu(r)
        ? ((n = ""),
          e != null && (n = e.replace(yu, "$&/") + "/"),
          is(r, t, n, "", function (u) {
            return u;
          }))
        : r != null &&
          (aa(r) &&
            (r = Kp(
              r,
              n +
                (!r.key || (o && o.key === r.key)
                  ? ""
                  : ("" + r.key).replace(yu, "$&/") + "/") +
                e
            )),
          t.push(r)),
      1
    );
  if (((o = 0), (i = i === "" ? "." : i + ":"), mu(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = i + bo(s, l);
      o += is(s, t, n, a, r);
    }
  else if (((a = Xp(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = i + bo(s, l++)), (o += is(s, t, n, a, r));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Mr(e, t, n) {
  if (e == null) return e;
  var i = [],
    r = 0;
  return (
    is(e, i, "", "", function (s) {
      return t.call(n, s, r++);
    }),
    i
  );
}
function $p(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var At = { current: null },
  rs = { transition: null },
  Zp = {
    ReactCurrentDispatcher: At,
    ReactCurrentBatchConfig: rs,
    ReactCurrentOwner: la,
  };
N.Children = {
  map: Mr,
  forEach: function (e, t, n) {
    Mr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Mr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Mr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!aa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
N.Component = ci;
N.Fragment = Ip;
N.Profiler = Bp;
N.PureComponent = sa;
N.StrictMode = jp;
N.Suspense = Up;
N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zp;
N.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var i = Bf({}, e.props),
    r = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = la.current)),
      t.key !== void 0 && (r = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Vf.call(t, a) &&
        !Uf.hasOwnProperty(a) &&
        (i[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  return { $$typeof: vr, type: e.type, key: r, ref: s, props: i, _owner: o };
};
N.createContext = function (e) {
  return (
    (e = {
      $$typeof: Wp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Hp, _context: e }),
    (e.Consumer = e)
  );
};
N.createElement = Yf;
N.createFactory = function (e) {
  var t = Yf.bind(null, e);
  return (t.type = e), t;
};
N.createRef = function () {
  return { current: null };
};
N.forwardRef = function (e) {
  return { $$typeof: Vp, render: e };
};
N.isValidElement = aa;
N.lazy = function (e) {
  return { $$typeof: Qp, _payload: { _status: -1, _result: e }, _init: $p };
};
N.memo = function (e, t) {
  return { $$typeof: Yp, type: e, compare: t === void 0 ? null : t };
};
N.startTransition = function (e) {
  var t = rs.transition;
  rs.transition = {};
  try {
    e();
  } finally {
    rs.transition = t;
  }
};
N.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
N.useCallback = function (e, t) {
  return At.current.useCallback(e, t);
};
N.useContext = function (e) {
  return At.current.useContext(e);
};
N.useDebugValue = function () {};
N.useDeferredValue = function (e) {
  return At.current.useDeferredValue(e);
};
N.useEffect = function (e, t) {
  return At.current.useEffect(e, t);
};
N.useId = function () {
  return At.current.useId();
};
N.useImperativeHandle = function (e, t, n) {
  return At.current.useImperativeHandle(e, t, n);
};
N.useInsertionEffect = function (e, t) {
  return At.current.useInsertionEffect(e, t);
};
N.useLayoutEffect = function (e, t) {
  return At.current.useLayoutEffect(e, t);
};
N.useMemo = function (e, t) {
  return At.current.useMemo(e, t);
};
N.useReducer = function (e, t, n) {
  return At.current.useReducer(e, t, n);
};
N.useRef = function (e) {
  return At.current.useRef(e);
};
N.useState = function (e) {
  return At.current.useState(e);
};
N.useSyncExternalStore = function (e, t, n) {
  return At.current.useSyncExternalStore(e, t, n);
};
N.useTransition = function () {
  return At.current.useTransition();
};
N.version = "18.2.0";
If.exports = N;
var Ht = If.exports;
const ua = Np(Ht);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qp = Ht,
  Jp = Symbol.for("react.element"),
  tg = Symbol.for("react.fragment"),
  eg = Object.prototype.hasOwnProperty,
  ng = qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ig = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qf(e, t, n) {
  var i,
    r = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (i in t) eg.call(t, i) && !ig.hasOwnProperty(i) && (r[i] = t[i]);
  if (e && e.defaultProps)
    for (i in ((t = e.defaultProps), t)) r[i] === void 0 && (r[i] = t[i]);
  return {
    $$typeof: Jp,
    type: e,
    key: s,
    ref: o,
    props: r,
    _owner: ng.current,
  };
}
no.Fragment = tg;
no.jsx = Qf;
no.jsxs = Qf;
Ff.exports = no;
var C = Ff.exports,
  rl = {},
  Xf = { exports: {} },
  Qt = {},
  Kf = { exports: {} },
  Gf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, L) {
    var R = E.length;
    E.push(L);
    t: for (; 0 < R; ) {
      var U = (R - 1) >>> 1,
        K = E[U];
      if (0 < r(K, L)) (E[U] = L), (E[R] = K), (R = U);
      else break t;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function i(E) {
    if (E.length === 0) return null;
    var L = E[0],
      R = E.pop();
    if (R !== L) {
      E[0] = R;
      t: for (var U = 0, K = E.length, ue = K >>> 1; U < ue; ) {
        var Ct = 2 * (U + 1) - 1,
          xe = E[Ct],
          Mt = Ct + 1,
          Cr = E[Mt];
        if (0 > r(xe, R))
          Mt < K && 0 > r(Cr, xe)
            ? ((E[U] = Cr), (E[Mt] = R), (U = Mt))
            : ((E[U] = xe), (E[Ct] = R), (U = Ct));
        else if (Mt < K && 0 > r(Cr, R)) (E[U] = Cr), (E[Mt] = R), (U = Mt);
        else break t;
      }
    }
    return L;
  }
  function r(E, L) {
    var R = E.sortIndex - L.sortIndex;
    return R !== 0 ? R : E.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    p = !1,
    y = !1,
    v = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(E) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) i(u);
      else if (L.startTime <= E)
        i(u), (L.sortIndex = L.expirationTime), t(a, L);
      else break;
      L = n(u);
    }
  }
  function _(E) {
    if (((v = !1), m(E), !y))
      if (n(a) !== null) (y = !0), V(w);
      else {
        var L = n(u);
        L !== null && X(_, L.startTime - E);
      }
  }
  function w(E, L) {
    (y = !1), v && ((v = !1), g(b), (b = -1)), (p = !0);
    var R = d;
    try {
      for (
        m(L), f = n(a);
        f !== null && (!(f.expirationTime > L) || (E && !O()));

      ) {
        var U = f.callback;
        if (typeof U == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var K = U(f.expirationTime <= L);
          (L = e.unstable_now()),
            typeof K == "function" ? (f.callback = K) : f === n(a) && i(a),
            m(L);
        } else i(a);
        f = n(a);
      }
      if (f !== null) var ue = !0;
      else {
        var Ct = n(u);
        Ct !== null && X(_, Ct.startTime - L), (ue = !1);
      }
      return ue;
    } finally {
      (f = null), (d = R), (p = !1);
    }
  }
  var k = !1,
    S = null,
    b = -1,
    A = 5,
    P = -1;
  function O() {
    return !(e.unstable_now() - P < A);
  }
  function z() {
    if (S !== null) {
      var E = e.unstable_now();
      P = E;
      var L = !0;
      try {
        L = S(!0, E);
      } finally {
        L ? q() : ((k = !1), (S = null));
      }
    } else k = !1;
  }
  var q;
  if (typeof h == "function")
    q = function () {
      h(z);
    };
  else if (typeof MessageChannel < "u") {
    var _t = new MessageChannel(),
      j = _t.port2;
    (_t.port1.onmessage = z),
      (q = function () {
        j.postMessage(null);
      });
  } else
    q = function () {
      x(z, 0);
    };
  function V(E) {
    (S = E), k || ((k = !0), q());
  }
  function X(E, L) {
    b = x(function () {
      E(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || p || ((y = !0), V(w));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (E) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = d;
      }
      var R = d;
      d = L;
      try {
        return E();
      } finally {
        d = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, L) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var R = d;
      d = E;
      try {
        return L();
      } finally {
        d = R;
      }
    }),
    (e.unstable_scheduleCallback = function (E, L, R) {
      var U = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? U + R : U))
          : (R = U),
        E)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = R + K),
        (E = {
          id: c++,
          callback: L,
          priorityLevel: E,
          startTime: R,
          expirationTime: K,
          sortIndex: -1,
        }),
        R > U
          ? ((E.sortIndex = R),
            t(u, E),
            n(a) === null &&
              E === n(u) &&
              (v ? (g(b), (b = -1)) : (v = !0), X(_, R - U)))
          : ((E.sortIndex = K), t(a, E), y || p || ((y = !0), V(w))),
        E
      );
    }),
    (e.unstable_shouldYield = O),
    (e.unstable_wrapCallback = function (E) {
      var L = d;
      return function () {
        var R = d;
        d = L;
        try {
          return E.apply(this, arguments);
        } finally {
          d = R;
        }
      };
    });
})(Gf);
Kf.exports = Gf;
var rg = Kf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $f = Ht,
  Yt = rg;
function M(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Zf = new Set(),
  $i = {};
function Pn(e, t) {
  ei(e, t), ei(e + "Capture", t);
}
function ei(e, t) {
  for ($i[e] = t, e = 0; e < t.length; e++) Zf.add(t[e]);
}
var Te = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  sl = Object.prototype.hasOwnProperty,
  sg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  vu = {},
  xu = {};
function og(e) {
  return sl.call(xu, e)
    ? !0
    : sl.call(vu, e)
    ? !1
    : sg.test(e)
    ? (xu[e] = !0)
    : ((vu[e] = !0), !1);
}
function lg(e, t, n, i) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return i
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ag(e, t, n, i) {
  if (t === null || typeof t > "u" || lg(e, t, n, i)) return !0;
  if (i) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Lt(e, t, n, i, r, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = i),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var xt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    xt[e] = new Lt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  xt[t] = new Lt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  xt[e] = new Lt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  xt[e] = new Lt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    xt[e] = new Lt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  xt[e] = new Lt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  xt[e] = new Lt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  xt[e] = new Lt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  xt[e] = new Lt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ca = /[\-:]([a-z])/g;
function fa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ca, fa);
    xt[t] = new Lt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ca, fa);
    xt[t] = new Lt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ca, fa);
  xt[t] = new Lt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  xt[e] = new Lt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xt.xlinkHref = new Lt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  xt[e] = new Lt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function da(e, t, n, i) {
  var r = xt.hasOwnProperty(t) ? xt[t] : null;
  (r !== null
    ? r.type !== 0
    : i ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ag(t, n, r, i) && (n = null),
    i || r === null
      ? og(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : r.mustUseProperty
      ? (e[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
      : ((t = r.attributeName),
        (i = r.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((r = r.type),
            (n = r === 3 || (r === 4 && n === !0) ? "" : "" + n),
            i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
}
var De = $f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Er = Symbol.for("react.element"),
  Rn = Symbol.for("react.portal"),
  zn = Symbol.for("react.fragment"),
  ha = Symbol.for("react.strict_mode"),
  ol = Symbol.for("react.profiler"),
  qf = Symbol.for("react.provider"),
  Jf = Symbol.for("react.context"),
  pa = Symbol.for("react.forward_ref"),
  ll = Symbol.for("react.suspense"),
  al = Symbol.for("react.suspense_list"),
  ga = Symbol.for("react.memo"),
  Ne = Symbol.for("react.lazy"),
  td = Symbol.for("react.offscreen"),
  _u = Symbol.iterator;
function pi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_u && e[_u]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var nt = Object.assign,
  Co;
function Ei(e) {
  if (Co === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Co = (t && t[1]) || "";
    }
  return (
    `
` +
    Co +
    e
  );
}
var Mo = !1;
function Eo(e, t) {
  if (!e || Mo) return "";
  Mo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var i = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          i = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        i = u;
      }
      e();
    }
  } catch (u) {
    if (u && i && typeof u.stack == "string") {
      for (
        var r = u.stack.split(`
`),
          s = i.stack.split(`
`),
          o = r.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && r[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (r[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || r[o] !== s[l])) {
                var a =
                  `
` + r[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (Mo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ei(e) : "";
}
function ug(e) {
  switch (e.tag) {
    case 5:
      return Ei(e.type);
    case 16:
      return Ei("Lazy");
    case 13:
      return Ei("Suspense");
    case 19:
      return Ei("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Eo(e.type, !1)), e;
    case 11:
      return (e = Eo(e.type.render, !1)), e;
    case 1:
      return (e = Eo(e.type, !0)), e;
    default:
      return "";
  }
}
function ul(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case zn:
      return "Fragment";
    case Rn:
      return "Portal";
    case ol:
      return "Profiler";
    case ha:
      return "StrictMode";
    case ll:
      return "Suspense";
    case al:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Jf:
        return (e.displayName || "Context") + ".Consumer";
      case qf:
        return (e._context.displayName || "Context") + ".Provider";
      case pa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ga:
        return (
          (t = e.displayName || null), t !== null ? t : ul(e.type) || "Memo"
        );
      case Ne:
        (t = e._payload), (e = e._init);
        try {
          return ul(e(t));
        } catch {}
    }
  return null;
}
function cg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ul(t);
    case 8:
      return t === ha ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function en(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ed(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function fg(e) {
  var t = ed(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    i = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var r = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (o) {
          (i = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i;
        },
        setValue: function (o) {
          i = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Pr(e) {
  e._valueTracker || (e._valueTracker = fg(e));
}
function nd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    i = "";
  return (
    e && (i = ed(e) ? (e.checked ? "true" : "false") : e.value),
    (e = i),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function vs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function cl(e, t) {
  var n = t.checked;
  return nt({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function wu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    i = t.checked != null ? t.checked : t.defaultChecked;
  (n = en(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function id(e, t) {
  (t = t.checked), t != null && da(e, "checked", t, !1);
}
function fl(e, t) {
  id(e, t);
  var n = en(t.value),
    i = t.type;
  if (n != null)
    i === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (i === "submit" || i === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? dl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && dl(e, t.type, en(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ku(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var i = t.type;
    if (
      !(
        (i !== "submit" && i !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function dl(e, t, n) {
  (t !== "number" || vs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pi = Array.isArray;
function Xn(e, t, n, i) {
  if (((e = e.options), t)) {
    t = {};
    for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
    for (n = 0; n < e.length; n++)
      (r = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== r && (e[n].selected = r),
        r && i && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + en(n), t = null, r = 0; r < e.length; r++) {
      if (e[r].value === n) {
        (e[r].selected = !0), i && (e[r].defaultSelected = !0);
        return;
      }
      t !== null || e[r].disabled || (t = e[r]);
    }
    t !== null && (t.selected = !0);
  }
}
function hl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return nt({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Su(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (Pi(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: en(n) };
}
function rd(e, t) {
  var n = en(t.value),
    i = en(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    i != null && (e.defaultValue = "" + i);
}
function bu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function sd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? sd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Tr,
  od = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, i, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, i, r);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Tr = Tr || document.createElement("div"),
          Tr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Tr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Zi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  dg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fi).forEach(function (e) {
  dg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fi[t] = Fi[e]);
  });
});
function ld(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Fi.hasOwnProperty(e) && Fi[e])
    ? ("" + t).trim()
    : t + "px";
}
function ad(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0,
        r = ld(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, r) : (e[n] = r);
    }
}
var hg = nt(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function gl(e, t) {
  if (t) {
    if (hg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function ml(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var yl = null;
function ma(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var vl = null,
  Kn = null,
  Gn = null;
function Cu(e) {
  if ((e = wr(e))) {
    if (typeof vl != "function") throw Error(M(280));
    var t = e.stateNode;
    t && ((t = lo(t)), vl(e.stateNode, e.type, t));
  }
}
function ud(e) {
  Kn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Kn = e);
}
function cd() {
  if (Kn) {
    var e = Kn,
      t = Gn;
    if (((Gn = Kn = null), Cu(e), t)) for (e = 0; e < t.length; e++) Cu(t[e]);
  }
}
function fd(e, t) {
  return e(t);
}
function dd() {}
var Po = !1;
function hd(e, t, n) {
  if (Po) return e(t, n);
  Po = !0;
  try {
    return fd(e, t, n);
  } finally {
    (Po = !1), (Kn !== null || Gn !== null) && (dd(), cd());
  }
}
function qi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var i = lo(n);
  if (i === null) return null;
  n = i[t];
  t: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (i = !i.disabled) ||
        ((e = e.type),
        (i = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !i);
      break t;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var xl = !1;
if (Te)
  try {
    var gi = {};
    Object.defineProperty(gi, "passive", {
      get: function () {
        xl = !0;
      },
    }),
      window.addEventListener("test", gi, gi),
      window.removeEventListener("test", gi, gi);
  } catch {
    xl = !1;
  }
function pg(e, t, n, i, r, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ii = !1,
  xs = null,
  _s = !1,
  _l = null,
  gg = {
    onError: function (e) {
      (Ii = !0), (xs = e);
    },
  };
function mg(e, t, n, i, r, s, o, l, a) {
  (Ii = !1), (xs = null), pg.apply(gg, arguments);
}
function yg(e, t, n, i, r, s, o, l, a) {
  if ((mg.apply(this, arguments), Ii)) {
    if (Ii) {
      var u = xs;
      (Ii = !1), (xs = null);
    } else throw Error(M(198));
    _s || ((_s = !0), (_l = u));
  }
}
function Tn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function pd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Mu(e) {
  if (Tn(e) !== e) throw Error(M(188));
}
function vg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tn(e)), t === null)) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, i = t; ; ) {
    var r = n.return;
    if (r === null) break;
    var s = r.alternate;
    if (s === null) {
      if (((i = r.return), i !== null)) {
        n = i;
        continue;
      }
      break;
    }
    if (r.child === s.child) {
      for (s = r.child; s; ) {
        if (s === n) return Mu(r), e;
        if (s === i) return Mu(r), t;
        s = s.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== i.return) (n = r), (i = s);
    else {
      for (var o = !1, l = r.child; l; ) {
        if (l === n) {
          (o = !0), (n = r), (i = s);
          break;
        }
        if (l === i) {
          (o = !0), (i = r), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (i = r);
            break;
          }
          if (l === i) {
            (o = !0), (i = s), (n = r);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(M(189));
      }
    }
    if (n.alternate !== i) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function gd(e) {
  return (e = vg(e)), e !== null ? md(e) : null;
}
function md(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = md(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var yd = Yt.unstable_scheduleCallback,
  Eu = Yt.unstable_cancelCallback,
  xg = Yt.unstable_shouldYield,
  _g = Yt.unstable_requestPaint,
  lt = Yt.unstable_now,
  wg = Yt.unstable_getCurrentPriorityLevel,
  ya = Yt.unstable_ImmediatePriority,
  vd = Yt.unstable_UserBlockingPriority,
  ws = Yt.unstable_NormalPriority,
  kg = Yt.unstable_LowPriority,
  xd = Yt.unstable_IdlePriority,
  io = null,
  ye = null;
function Sg(e) {
  if (ye && typeof ye.onCommitFiberRoot == "function")
    try {
      ye.onCommitFiberRoot(io, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var oe = Math.clz32 ? Math.clz32 : Mg,
  bg = Math.log,
  Cg = Math.LN2;
function Mg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((bg(e) / Cg) | 0)) | 0;
}
var Ar = 64,
  Lr = 4194304;
function Ti(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ks(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var i = 0,
    r = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~r;
    l !== 0 ? (i = Ti(l)) : ((s &= o), s !== 0 && (i = Ti(s)));
  } else (o = n & ~r), o !== 0 ? (i = Ti(o)) : s !== 0 && (i = Ti(s));
  if (i === 0) return 0;
  if (
    t !== 0 &&
    t !== i &&
    !(t & r) &&
    ((r = i & -i), (s = t & -t), r >= s || (r === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((i & 4 && (i |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= i; 0 < t; )
      (n = 31 - oe(t)), (r = 1 << n), (i |= e[n]), (t &= ~r);
  return i;
}
function Eg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Pg(e, t) {
  for (
    var n = e.suspendedLanes,
      i = e.pingedLanes,
      r = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - oe(s),
      l = 1 << o,
      a = r[o];
    a === -1
      ? (!(l & n) || l & i) && (r[o] = Eg(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function wl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function _d() {
  var e = Ar;
  return (Ar <<= 1), !(Ar & 4194240) && (Ar = 64), e;
}
function To(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function xr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - oe(t)),
    (e[t] = n);
}
function Tg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var i = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var r = 31 - oe(n),
      s = 1 << r;
    (t[r] = 0), (i[r] = -1), (e[r] = -1), (n &= ~s);
  }
}
function va(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var i = 31 - oe(n),
      r = 1 << i;
    (r & t) | (e[i] & t) && (e[i] |= t), (n &= ~r);
  }
}
var W = 0;
function wd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var kd,
  xa,
  Sd,
  bd,
  Cd,
  kl = !1,
  Or = [],
  Qe = null,
  Xe = null,
  Ke = null,
  Ji = new Map(),
  tr = new Map(),
  Ie = [],
  Ag =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Pu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Qe = null;
      break;
    case "dragenter":
    case "dragleave":
      Xe = null;
      break;
    case "mouseover":
    case "mouseout":
      Ke = null;
      break;
    case "pointerover":
    case "pointerout":
      Ji.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      tr.delete(t.pointerId);
  }
}
function mi(e, t, n, i, r, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: s,
        targetContainers: [r],
      }),
      t !== null && ((t = wr(t)), t !== null && xa(t)),
      e)
    : ((e.eventSystemFlags |= i),
      (t = e.targetContainers),
      r !== null && t.indexOf(r) === -1 && t.push(r),
      e);
}
function Lg(e, t, n, i, r) {
  switch (t) {
    case "focusin":
      return (Qe = mi(Qe, e, t, n, i, r)), !0;
    case "dragenter":
      return (Xe = mi(Xe, e, t, n, i, r)), !0;
    case "mouseover":
      return (Ke = mi(Ke, e, t, n, i, r)), !0;
    case "pointerover":
      var s = r.pointerId;
      return Ji.set(s, mi(Ji.get(s) || null, e, t, n, i, r)), !0;
    case "gotpointercapture":
      return (
        (s = r.pointerId), tr.set(s, mi(tr.get(s) || null, e, t, n, i, r)), !0
      );
  }
  return !1;
}
function Md(e) {
  var t = gn(e.target);
  if (t !== null) {
    var n = Tn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = pd(n)), t !== null)) {
          (e.blockedOn = t),
            Cd(e.priority, function () {
              Sd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ss(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Sl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var i = new n.constructor(n.type, n);
      (yl = i), n.target.dispatchEvent(i), (yl = null);
    } else return (t = wr(n)), t !== null && xa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Tu(e, t, n) {
  ss(e) && n.delete(t);
}
function Og() {
  (kl = !1),
    Qe !== null && ss(Qe) && (Qe = null),
    Xe !== null && ss(Xe) && (Xe = null),
    Ke !== null && ss(Ke) && (Ke = null),
    Ji.forEach(Tu),
    tr.forEach(Tu);
}
function yi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    kl ||
      ((kl = !0),
      Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority, Og)));
}
function er(e) {
  function t(r) {
    return yi(r, e);
  }
  if (0 < Or.length) {
    yi(Or[0], e);
    for (var n = 1; n < Or.length; n++) {
      var i = Or[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
  }
  for (
    Qe !== null && yi(Qe, e),
      Xe !== null && yi(Xe, e),
      Ke !== null && yi(Ke, e),
      Ji.forEach(t),
      tr.forEach(t),
      n = 0;
    n < Ie.length;
    n++
  )
    (i = Ie[n]), i.blockedOn === e && (i.blockedOn = null);
  for (; 0 < Ie.length && ((n = Ie[0]), n.blockedOn === null); )
    Md(n), n.blockedOn === null && Ie.shift();
}
var $n = De.ReactCurrentBatchConfig,
  Ss = !0;
function Dg(e, t, n, i) {
  var r = W,
    s = $n.transition;
  $n.transition = null;
  try {
    (W = 1), _a(e, t, n, i);
  } finally {
    (W = r), ($n.transition = s);
  }
}
function Rg(e, t, n, i) {
  var r = W,
    s = $n.transition;
  $n.transition = null;
  try {
    (W = 4), _a(e, t, n, i);
  } finally {
    (W = r), ($n.transition = s);
  }
}
function _a(e, t, n, i) {
  if (Ss) {
    var r = Sl(e, t, n, i);
    if (r === null) jo(e, t, i, bs, n), Pu(e, i);
    else if (Lg(r, e, t, n, i)) i.stopPropagation();
    else if ((Pu(e, i), t & 4 && -1 < Ag.indexOf(e))) {
      for (; r !== null; ) {
        var s = wr(r);
        if (
          (s !== null && kd(s),
          (s = Sl(e, t, n, i)),
          s === null && jo(e, t, i, bs, n),
          s === r)
        )
          break;
        r = s;
      }
      r !== null && i.stopPropagation();
    } else jo(e, t, i, null, n);
  }
}
var bs = null;
function Sl(e, t, n, i) {
  if (((bs = null), (e = ma(i)), (e = gn(e)), e !== null))
    if (((t = Tn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = pd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (bs = e), null;
}
function Ed(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (wg()) {
        case ya:
          return 1;
        case vd:
          return 4;
        case ws:
        case kg:
          return 16;
        case xd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var He = null,
  wa = null,
  os = null;
function Pd() {
  if (os) return os;
  var e,
    t = wa,
    n = t.length,
    i,
    r = "value" in He ? He.value : He.textContent,
    s = r.length;
  for (e = 0; e < n && t[e] === r[e]; e++);
  var o = n - e;
  for (i = 1; i <= o && t[n - i] === r[s - i]; i++);
  return (os = r.slice(e, 1 < i ? 1 - i : void 0));
}
function ls(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Dr() {
  return !0;
}
function Au() {
  return !1;
}
function Xt(e) {
  function t(n, i, r, s, o) {
    (this._reactName = n),
      (this._targetInst = r),
      (this.type = i),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Dr
        : Au),
      (this.isPropagationStopped = Au),
      this
    );
  }
  return (
    nt(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Dr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Dr));
      },
      persist: function () {},
      isPersistent: Dr,
    }),
    t
  );
}
var fi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ka = Xt(fi),
  _r = nt({}, fi, { view: 0, detail: 0 }),
  zg = Xt(_r),
  Ao,
  Lo,
  vi,
  ro = nt({}, _r, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Sa,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== vi &&
            (vi && e.type === "mousemove"
              ? ((Ao = e.screenX - vi.screenX), (Lo = e.screenY - vi.screenY))
              : (Lo = Ao = 0),
            (vi = e)),
          Ao);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Lo;
    },
  }),
  Lu = Xt(ro),
  Ng = nt({}, ro, { dataTransfer: 0 }),
  Fg = Xt(Ng),
  Ig = nt({}, _r, { relatedTarget: 0 }),
  Oo = Xt(Ig),
  jg = nt({}, fi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bg = Xt(jg),
  Hg = nt({}, fi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Wg = Xt(Hg),
  Vg = nt({}, fi, { data: 0 }),
  Ou = Xt(Vg),
  Ug = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Yg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Qg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Xg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Qg[e]) ? !!t[e] : !1;
}
function Sa() {
  return Xg;
}
var Kg = nt({}, _r, {
    key: function (e) {
      if (e.key) {
        var t = Ug[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ls(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Yg[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Sa,
    charCode: function (e) {
      return e.type === "keypress" ? ls(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ls(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Gg = Xt(Kg),
  $g = nt({}, ro, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Du = Xt($g),
  Zg = nt({}, _r, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Sa,
  }),
  qg = Xt(Zg),
  Jg = nt({}, fi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  tm = Xt(Jg),
  em = nt({}, ro, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  nm = Xt(em),
  im = [9, 13, 27, 32],
  ba = Te && "CompositionEvent" in window,
  ji = null;
Te && "documentMode" in document && (ji = document.documentMode);
var rm = Te && "TextEvent" in window && !ji,
  Td = Te && (!ba || (ji && 8 < ji && 11 >= ji)),
  Ru = " ",
  zu = !1;
function Ad(e, t) {
  switch (e) {
    case "keyup":
      return im.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ld(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Nn = !1;
function sm(e, t) {
  switch (e) {
    case "compositionend":
      return Ld(t);
    case "keypress":
      return t.which !== 32 ? null : ((zu = !0), Ru);
    case "textInput":
      return (e = t.data), e === Ru && zu ? null : e;
    default:
      return null;
  }
}
function om(e, t) {
  if (Nn)
    return e === "compositionend" || (!ba && Ad(e, t))
      ? ((e = Pd()), (os = wa = He = null), (Nn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Td && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var lm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!lm[e.type] : t === "textarea";
}
function Od(e, t, n, i) {
  ud(i),
    (t = Cs(t, "onChange")),
    0 < t.length &&
      ((n = new ka("onChange", "change", null, n, i)),
      e.push({ event: n, listeners: t }));
}
var Bi = null,
  nr = null;
function am(e) {
  Vd(e, 0);
}
function so(e) {
  var t = jn(e);
  if (nd(t)) return e;
}
function um(e, t) {
  if (e === "change") return t;
}
var Dd = !1;
if (Te) {
  var Do;
  if (Te) {
    var Ro = "oninput" in document;
    if (!Ro) {
      var Fu = document.createElement("div");
      Fu.setAttribute("oninput", "return;"),
        (Ro = typeof Fu.oninput == "function");
    }
    Do = Ro;
  } else Do = !1;
  Dd = Do && (!document.documentMode || 9 < document.documentMode);
}
function Iu() {
  Bi && (Bi.detachEvent("onpropertychange", Rd), (nr = Bi = null));
}
function Rd(e) {
  if (e.propertyName === "value" && so(nr)) {
    var t = [];
    Od(t, nr, e, ma(e)), hd(am, t);
  }
}
function cm(e, t, n) {
  e === "focusin"
    ? (Iu(), (Bi = t), (nr = n), Bi.attachEvent("onpropertychange", Rd))
    : e === "focusout" && Iu();
}
function fm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return so(nr);
}
function dm(e, t) {
  if (e === "click") return so(t);
}
function hm(e, t) {
  if (e === "input" || e === "change") return so(t);
}
function pm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ae = typeof Object.is == "function" ? Object.is : pm;
function ir(e, t) {
  if (ae(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    i = Object.keys(t);
  if (n.length !== i.length) return !1;
  for (i = 0; i < n.length; i++) {
    var r = n[i];
    if (!sl.call(t, r) || !ae(e[r], t[r])) return !1;
  }
  return !0;
}
function ju(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Bu(e, t) {
  var n = ju(e);
  e = 0;
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (((i = e + n.textContent.length), e <= t && i >= t))
        return { node: n, offset: t - e };
      e = i;
    }
    t: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break t;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ju(n);
  }
}
function zd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? zd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Nd() {
  for (var e = window, t = vs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = vs(e.document);
  }
  return t;
}
function Ca(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function gm(e) {
  var t = Nd(),
    n = e.focusedElem,
    i = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zd(n.ownerDocument.documentElement, n)
  ) {
    if (i !== null && Ca(n)) {
      if (
        ((t = i.start),
        (e = i.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var r = n.textContent.length,
          s = Math.min(i.start, r);
        (i = i.end === void 0 ? s : Math.min(i.end, r)),
          !e.extend && s > i && ((r = i), (i = s), (s = r)),
          (r = Bu(n, s));
        var o = Bu(n, i);
        r &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== r.node ||
            e.anchorOffset !== r.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(r.node, r.offset),
          e.removeAllRanges(),
          s > i
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var mm = Te && "documentMode" in document && 11 >= document.documentMode,
  Fn = null,
  bl = null,
  Hi = null,
  Cl = !1;
function Hu(e, t, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Cl ||
    Fn == null ||
    Fn !== vs(i) ||
    ((i = Fn),
    "selectionStart" in i && Ca(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = (
          (i.ownerDocument && i.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset,
        })),
    (Hi && ir(Hi, i)) ||
      ((Hi = i),
      (i = Cs(bl, "onSelect")),
      0 < i.length &&
        ((t = new ka("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: i }),
        (t.target = Fn))));
}
function Rr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var In = {
    animationend: Rr("Animation", "AnimationEnd"),
    animationiteration: Rr("Animation", "AnimationIteration"),
    animationstart: Rr("Animation", "AnimationStart"),
    transitionend: Rr("Transition", "TransitionEnd"),
  },
  zo = {},
  Fd = {};
Te &&
  ((Fd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete In.animationend.animation,
    delete In.animationiteration.animation,
    delete In.animationstart.animation),
  "TransitionEvent" in window || delete In.transitionend.transition);
function oo(e) {
  if (zo[e]) return zo[e];
  if (!In[e]) return e;
  var t = In[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Fd) return (zo[e] = t[n]);
  return e;
}
var Id = oo("animationend"),
  jd = oo("animationiteration"),
  Bd = oo("animationstart"),
  Hd = oo("transitionend"),
  Wd = new Map(),
  Wu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function sn(e, t) {
  Wd.set(e, t), Pn(t, [e]);
}
for (var No = 0; No < Wu.length; No++) {
  var Fo = Wu[No],
    ym = Fo.toLowerCase(),
    vm = Fo[0].toUpperCase() + Fo.slice(1);
  sn(ym, "on" + vm);
}
sn(Id, "onAnimationEnd");
sn(jd, "onAnimationIteration");
sn(Bd, "onAnimationStart");
sn("dblclick", "onDoubleClick");
sn("focusin", "onFocus");
sn("focusout", "onBlur");
sn(Hd, "onTransitionEnd");
ei("onMouseEnter", ["mouseout", "mouseover"]);
ei("onMouseLeave", ["mouseout", "mouseover"]);
ei("onPointerEnter", ["pointerout", "pointerover"]);
ei("onPointerLeave", ["pointerout", "pointerover"]);
Pn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Pn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Pn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Pn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ai =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  xm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ai));
function Vu(e, t, n) {
  var i = e.type || "unknown-event";
  (e.currentTarget = n), yg(i, t, void 0, e), (e.currentTarget = null);
}
function Vd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var i = e[n],
      r = i.event;
    i = i.listeners;
    t: {
      var s = void 0;
      if (t)
        for (var o = i.length - 1; 0 <= o; o--) {
          var l = i[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && r.isPropagationStopped())) break t;
          Vu(r, l, u), (s = a);
        }
      else
        for (o = 0; o < i.length; o++) {
          if (
            ((l = i[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && r.isPropagationStopped())
          )
            break t;
          Vu(r, l, u), (s = a);
        }
    }
  }
  if (_s) throw ((e = _l), (_s = !1), (_l = null), e);
}
function G(e, t) {
  var n = t[Al];
  n === void 0 && (n = t[Al] = new Set());
  var i = e + "__bubble";
  n.has(i) || (Ud(t, e, 2, !1), n.add(i));
}
function Io(e, t, n) {
  var i = 0;
  t && (i |= 4), Ud(n, e, i, t);
}
var zr = "_reactListening" + Math.random().toString(36).slice(2);
function rr(e) {
  if (!e[zr]) {
    (e[zr] = !0),
      Zf.forEach(function (n) {
        n !== "selectionchange" && (xm.has(n) || Io(n, !1, e), Io(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zr] || ((t[zr] = !0), Io("selectionchange", !1, t));
  }
}
function Ud(e, t, n, i) {
  switch (Ed(t)) {
    case 1:
      var r = Dg;
      break;
    case 4:
      r = Rg;
      break;
    default:
      r = _a;
  }
  (n = r.bind(null, t, n, e)),
    (r = void 0),
    !xl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (r = !0),
    i
      ? r !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: r })
        : e.addEventListener(t, n, !0)
      : r !== void 0
      ? e.addEventListener(t, n, { passive: r })
      : e.addEventListener(t, n, !1);
}
function jo(e, t, n, i, r) {
  var s = i;
  if (!(t & 1) && !(t & 2) && i !== null)
    t: for (;;) {
      if (i === null) return;
      var o = i.tag;
      if (o === 3 || o === 4) {
        var l = i.stateNode.containerInfo;
        if (l === r || (l.nodeType === 8 && l.parentNode === r)) break;
        if (o === 4)
          for (o = i.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === r || (a.nodeType === 8 && a.parentNode === r))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = gn(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            i = s = o;
            continue t;
          }
          l = l.parentNode;
        }
      }
      i = i.return;
    }
  hd(function () {
    var u = s,
      c = ma(n),
      f = [];
    t: {
      var d = Wd.get(e);
      if (d !== void 0) {
        var p = ka,
          y = e;
        switch (e) {
          case "keypress":
            if (ls(n) === 0) break t;
          case "keydown":
          case "keyup":
            p = Gg;
            break;
          case "focusin":
            (y = "focus"), (p = Oo);
            break;
          case "focusout":
            (y = "blur"), (p = Oo);
            break;
          case "beforeblur":
          case "afterblur":
            p = Oo;
            break;
          case "click":
            if (n.button === 2) break t;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = Lu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = Fg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = qg;
            break;
          case Id:
          case jd:
          case Bd:
            p = Bg;
            break;
          case Hd:
            p = tm;
            break;
          case "scroll":
            p = zg;
            break;
          case "wheel":
            p = nm;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = Wg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Du;
        }
        var v = (t & 4) !== 0,
          x = !v && e === "scroll",
          g = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var _ = m.stateNode;
          if (
            (m.tag === 5 &&
              _ !== null &&
              ((m = _),
              g !== null && ((_ = qi(h, g)), _ != null && v.push(sr(h, _, m)))),
            x)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((d = new p(d, y, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      t: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          d &&
            n !== yl &&
            (y = n.relatedTarget || n.fromElement) &&
            (gn(y) || y[Ae]))
        )
          break t;
        if (
          (p || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          p
            ? ((y = n.relatedTarget || n.toElement),
              (p = u),
              (y = y ? gn(y) : null),
              y !== null &&
                ((x = Tn(y)), y !== x || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((p = null), (y = u)),
          p !== y)
        ) {
          if (
            ((v = Lu),
            (_ = "onMouseLeave"),
            (g = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Du),
              (_ = "onPointerLeave"),
              (g = "onPointerEnter"),
              (h = "pointer")),
            (x = p == null ? d : jn(p)),
            (m = y == null ? d : jn(y)),
            (d = new v(_, h + "leave", p, n, c)),
            (d.target = x),
            (d.relatedTarget = m),
            (_ = null),
            gn(c) === u &&
              ((v = new v(g, h + "enter", y, n, c)),
              (v.target = m),
              (v.relatedTarget = x),
              (_ = v)),
            (x = _),
            p && y)
          )
            e: {
              for (v = p, g = y, h = 0, m = v; m; m = Ln(m)) h++;
              for (m = 0, _ = g; _; _ = Ln(_)) m++;
              for (; 0 < h - m; ) (v = Ln(v)), h--;
              for (; 0 < m - h; ) (g = Ln(g)), m--;
              for (; h--; ) {
                if (v === g || (g !== null && v === g.alternate)) break e;
                (v = Ln(v)), (g = Ln(g));
              }
              v = null;
            }
          else v = null;
          p !== null && Uu(f, d, p, v, !1),
            y !== null && x !== null && Uu(f, x, y, v, !0);
        }
      }
      t: {
        if (
          ((d = u ? jn(u) : window),
          (p = d.nodeName && d.nodeName.toLowerCase()),
          p === "select" || (p === "input" && d.type === "file"))
        )
          var w = um;
        else if (Nu(d))
          if (Dd) w = hm;
          else {
            w = fm;
            var k = cm;
          }
        else
          (p = d.nodeName) &&
            p.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (w = dm);
        if (w && (w = w(e, u))) {
          Od(f, w, n, c);
          break t;
        }
        k && k(e, d, u),
          e === "focusout" &&
            (k = d._wrapperState) &&
            k.controlled &&
            d.type === "number" &&
            dl(d, "number", d.value);
      }
      switch (((k = u ? jn(u) : window), e)) {
        case "focusin":
          (Nu(k) || k.contentEditable === "true") &&
            ((Fn = k), (bl = u), (Hi = null));
          break;
        case "focusout":
          Hi = bl = Fn = null;
          break;
        case "mousedown":
          Cl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Cl = !1), Hu(f, n, c);
          break;
        case "selectionchange":
          if (mm) break;
        case "keydown":
        case "keyup":
          Hu(f, n, c);
      }
      var S;
      if (ba)
        t: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break t;
            case "compositionend":
              b = "onCompositionEnd";
              break t;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break t;
          }
          b = void 0;
        }
      else
        Nn
          ? Ad(e, n) && (b = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b &&
        (Td &&
          n.locale !== "ko" &&
          (Nn || b !== "onCompositionStart"
            ? b === "onCompositionEnd" && Nn && (S = Pd())
            : ((He = c),
              (wa = "value" in He ? He.value : He.textContent),
              (Nn = !0))),
        (k = Cs(u, b)),
        0 < k.length &&
          ((b = new Ou(b, e, null, n, c)),
          f.push({ event: b, listeners: k }),
          S ? (b.data = S) : ((S = Ld(n)), S !== null && (b.data = S)))),
        (S = rm ? sm(e, n) : om(e, n)) &&
          ((u = Cs(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Ou("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = S)));
    }
    Vd(f, t);
  });
}
function sr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Cs(e, t) {
  for (var n = t + "Capture", i = []; e !== null; ) {
    var r = e,
      s = r.stateNode;
    r.tag === 5 &&
      s !== null &&
      ((r = s),
      (s = qi(e, n)),
      s != null && i.unshift(sr(e, s, r)),
      (s = qi(e, t)),
      s != null && i.push(sr(e, s, r))),
      (e = e.return);
  }
  return i;
}
function Ln(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Uu(e, t, n, i, r) {
  for (var s = t._reactName, o = []; n !== null && n !== i; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === i) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      r
        ? ((a = qi(n, s)), a != null && o.unshift(sr(n, a, l)))
        : r || ((a = qi(n, s)), a != null && o.push(sr(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var _m = /\r\n?/g,
  wm = /\u0000|\uFFFD/g;
function Yu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      _m,
      `
`
    )
    .replace(wm, "");
}
function Nr(e, t, n) {
  if (((t = Yu(t)), Yu(e) !== t && n)) throw Error(M(425));
}
function Ms() {}
var Ml = null,
  El = null;
function Pl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Tl = typeof setTimeout == "function" ? setTimeout : void 0,
  km = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Qu = typeof Promise == "function" ? Promise : void 0,
  Sm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Qu < "u"
      ? function (e) {
          return Qu.resolve(null).then(e).catch(bm);
        }
      : Tl;
function bm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Bo(e, t) {
  var n = t,
    i = 0;
  do {
    var r = n.nextSibling;
    if ((e.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === "/$")) {
        if (i === 0) {
          e.removeChild(r), er(t);
          return;
        }
        i--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
    n = r;
  } while (n);
  er(t);
}
function Ge(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Xu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var di = Math.random().toString(36).slice(2),
  ge = "__reactFiber$" + di,
  or = "__reactProps$" + di,
  Ae = "__reactContainer$" + di,
  Al = "__reactEvents$" + di,
  Cm = "__reactListeners$" + di,
  Mm = "__reactHandles$" + di;
function gn(e) {
  var t = e[ge];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ae] || n[ge])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Xu(e); e !== null; ) {
          if ((n = e[ge])) return n;
          e = Xu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function wr(e) {
  return (
    (e = e[ge] || e[Ae]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function lo(e) {
  return e[or] || null;
}
var Ll = [],
  Bn = -1;
function on(e) {
  return { current: e };
}
function $(e) {
  0 > Bn || ((e.current = Ll[Bn]), (Ll[Bn] = null), Bn--);
}
function Q(e, t) {
  Bn++, (Ll[Bn] = e.current), (e.current = t);
}
var nn = {},
  bt = on(nn),
  Nt = on(!1),
  wn = nn;
function ni(e, t) {
  var n = e.type.contextTypes;
  if (!n) return nn;
  var i = e.stateNode;
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
    return i.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    s;
  for (s in n) r[s] = t[s];
  return (
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function Ft(e) {
  return (e = e.childContextTypes), e != null;
}
function Es() {
  $(Nt), $(bt);
}
function Ku(e, t, n) {
  if (bt.current !== nn) throw Error(M(168));
  Q(bt, t), Q(Nt, n);
}
function Yd(e, t, n) {
  var i = e.stateNode;
  if (((t = t.childContextTypes), typeof i.getChildContext != "function"))
    return n;
  i = i.getChildContext();
  for (var r in i) if (!(r in t)) throw Error(M(108, cg(e) || "Unknown", r));
  return nt({}, n, i);
}
function Ps(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || nn),
    (wn = bt.current),
    Q(bt, e),
    Q(Nt, Nt.current),
    !0
  );
}
function Gu(e, t, n) {
  var i = e.stateNode;
  if (!i) throw Error(M(169));
  n
    ? ((e = Yd(e, t, wn)),
      (i.__reactInternalMemoizedMergedChildContext = e),
      $(Nt),
      $(bt),
      Q(bt, e))
    : $(Nt),
    Q(Nt, n);
}
var be = null,
  ao = !1,
  Ho = !1;
function Qd(e) {
  be === null ? (be = [e]) : be.push(e);
}
function Em(e) {
  (ao = !0), Qd(e);
}
function ln() {
  if (!Ho && be !== null) {
    Ho = !0;
    var e = 0,
      t = W;
    try {
      var n = be;
      for (W = 1; e < n.length; e++) {
        var i = n[e];
        do i = i(!0);
        while (i !== null);
      }
      (be = null), (ao = !1);
    } catch (r) {
      throw (be !== null && (be = be.slice(e + 1)), yd(ya, ln), r);
    } finally {
      (W = t), (Ho = !1);
    }
  }
  return null;
}
var Hn = [],
  Wn = 0,
  Ts = null,
  As = 0,
  Gt = [],
  $t = 0,
  kn = null,
  Me = 1,
  Ee = "";
function dn(e, t) {
  (Hn[Wn++] = As), (Hn[Wn++] = Ts), (Ts = e), (As = t);
}
function Xd(e, t, n) {
  (Gt[$t++] = Me), (Gt[$t++] = Ee), (Gt[$t++] = kn), (kn = e);
  var i = Me;
  e = Ee;
  var r = 32 - oe(i) - 1;
  (i &= ~(1 << r)), (n += 1);
  var s = 32 - oe(t) + r;
  if (30 < s) {
    var o = r - (r % 5);
    (s = (i & ((1 << o) - 1)).toString(32)),
      (i >>= o),
      (r -= o),
      (Me = (1 << (32 - oe(t) + r)) | (n << r) | i),
      (Ee = s + e);
  } else (Me = (1 << s) | (n << r) | i), (Ee = e);
}
function Ma(e) {
  e.return !== null && (dn(e, 1), Xd(e, 1, 0));
}
function Ea(e) {
  for (; e === Ts; )
    (Ts = Hn[--Wn]), (Hn[Wn] = null), (As = Hn[--Wn]), (Hn[Wn] = null);
  for (; e === kn; )
    (kn = Gt[--$t]),
      (Gt[$t] = null),
      (Ee = Gt[--$t]),
      (Gt[$t] = null),
      (Me = Gt[--$t]),
      (Gt[$t] = null);
}
var Ut = null,
  Vt = null,
  Z = !1,
  se = null;
function Kd(e, t) {
  var n = Zt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function $u(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ut = e), (Vt = Ge(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ut = e), (Vt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = kn !== null ? { id: Me, overflow: Ee } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Zt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ut = e),
            (Vt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ol(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Dl(e) {
  if (Z) {
    var t = Vt;
    if (t) {
      var n = t;
      if (!$u(e, t)) {
        if (Ol(e)) throw Error(M(418));
        t = Ge(n.nextSibling);
        var i = Ut;
        t && $u(e, t)
          ? Kd(i, n)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (Ut = e));
      }
    } else {
      if (Ol(e)) throw Error(M(418));
      (e.flags = (e.flags & -4097) | 2), (Z = !1), (Ut = e);
    }
  }
}
function Zu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ut = e;
}
function Fr(e) {
  if (e !== Ut) return !1;
  if (!Z) return Zu(e), (Z = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Pl(e.type, e.memoizedProps))),
    t && (t = Vt))
  ) {
    if (Ol(e)) throw (Gd(), Error(M(418)));
    for (; t; ) Kd(e, t), (t = Ge(t.nextSibling));
  }
  if ((Zu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317));
    t: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Vt = Ge(e.nextSibling);
              break t;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Vt = null;
    }
  } else Vt = Ut ? Ge(e.stateNode.nextSibling) : null;
  return !0;
}
function Gd() {
  for (var e = Vt; e; ) e = Ge(e.nextSibling);
}
function ii() {
  (Vt = Ut = null), (Z = !1);
}
function Pa(e) {
  se === null ? (se = [e]) : se.push(e);
}
var Pm = De.ReactCurrentBatchConfig;
function ie(e, t) {
  if (e && e.defaultProps) {
    (t = nt({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ls = on(null),
  Os = null,
  Vn = null,
  Ta = null;
function Aa() {
  Ta = Vn = Os = null;
}
function La(e) {
  var t = Ls.current;
  $(Ls), (e._currentValue = t);
}
function Rl(e, t, n) {
  for (; e !== null; ) {
    var i = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
        : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zn(e, t) {
  (Os = e),
    (Ta = Vn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (zt = !0), (e.firstContext = null));
}
function te(e) {
  var t = e._currentValue;
  if (Ta !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vn === null)) {
      if (Os === null) throw Error(M(308));
      (Vn = e), (Os.dependencies = { lanes: 0, firstContext: e });
    } else Vn = Vn.next = e;
  return t;
}
var mn = null;
function Oa(e) {
  mn === null ? (mn = [e]) : mn.push(e);
}
function $d(e, t, n, i) {
  var r = t.interleaved;
  return (
    r === null ? ((n.next = n), Oa(t)) : ((n.next = r.next), (r.next = n)),
    (t.interleaved = n),
    Le(e, i)
  );
}
function Le(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Fe = !1;
function Da(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Zd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Pe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function $e(e, t, n) {
  var i = e.updateQueue;
  if (i === null) return null;
  if (((i = i.shared), F & 2)) {
    var r = i.pending;
    return (
      r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (i.pending = t),
      Le(e, n)
    );
  }
  return (
    (r = i.interleaved),
    r === null ? ((t.next = t), Oa(i)) : ((t.next = r.next), (r.next = t)),
    (i.interleaved = t),
    Le(e, n)
  );
}
function as(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var i = t.lanes;
    (i &= e.pendingLanes), (n |= i), (t.lanes = n), va(e, n);
  }
}
function qu(e, t) {
  var n = e.updateQueue,
    i = e.alternate;
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var r = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (r = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (r = s = t) : (s = s.next = t);
    } else r = s = t;
    (n = {
      baseState: i.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: s,
      shared: i.shared,
      effects: i.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ds(e, t, n, i) {
  var r = e.updateQueue;
  Fe = !1;
  var s = r.firstBaseUpdate,
    o = r.lastBaseUpdate,
    l = r.shared.pending;
  if (l !== null) {
    r.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var f = r.baseState;
    (o = 0), (c = u = a = null), (l = s);
    do {
      var d = l.lane,
        p = l.eventTime;
      if ((i & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        t: {
          var y = e,
            v = l;
          switch (((d = t), (p = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(p, f, d);
                break t;
              }
              f = y;
              break t;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(p, f, d) : y),
                d == null)
              )
                break t;
              f = nt({}, f, d);
              break t;
            case 2:
              Fe = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = r.effects),
          d === null ? (r.effects = [l]) : d.push(l));
      } else
        (p = {
          eventTime: p,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (a = f)) : (c = c.next = p),
          (o |= d);
      if (((l = l.next), l === null)) {
        if (((l = r.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (r.lastBaseUpdate = d),
          (r.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (r.baseState = a),
      (r.firstBaseUpdate = u),
      (r.lastBaseUpdate = c),
      (t = r.shared.interleaved),
      t !== null)
    ) {
      r = t;
      do (o |= r.lane), (r = r.next);
      while (r !== t);
    } else s === null && (r.shared.lanes = 0);
    (bn |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function Ju(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var i = e[t],
        r = i.callback;
      if (r !== null) {
        if (((i.callback = null), (i = n), typeof r != "function"))
          throw Error(M(191, r));
        r.call(i);
      }
    }
}
var qd = new $f.Component().refs;
function zl(e, t, n, i) {
  (t = e.memoizedState),
    (n = n(i, t)),
    (n = n == null ? t : nt({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var uo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var i = Pt(),
      r = qe(e),
      s = Pe(i, r);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = $e(e, s, r)),
      t !== null && (le(t, e, r, i), as(t, e, r));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var i = Pt(),
      r = qe(e),
      s = Pe(i, r);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = $e(e, s, r)),
      t !== null && (le(t, e, r, i), as(t, e, r));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Pt(),
      i = qe(e),
      r = Pe(n, i);
    (r.tag = 2),
      t != null && (r.callback = t),
      (t = $e(e, r, i)),
      t !== null && (le(t, e, i, n), as(t, e, i));
  },
};
function tc(e, t, n, i, r, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(i, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ir(n, i) || !ir(r, s)
      : !0
  );
}
function Jd(e, t, n) {
  var i = !1,
    r = nn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = te(s))
      : ((r = Ft(t) ? wn : bt.current),
        (i = t.contextTypes),
        (s = (i = i != null) ? ni(e, r) : nn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = uo),
    (e.stateNode = t),
    (t._reactInternals = e),
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = r),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function ec(e, t, n, i) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, i),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, i),
    t.state !== e && uo.enqueueReplaceState(t, t.state, null);
}
function Nl(e, t, n, i) {
  var r = e.stateNode;
  (r.props = n), (r.state = e.memoizedState), (r.refs = qd), Da(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (r.context = te(s))
    : ((s = Ft(t) ? wn : bt.current), (r.context = ni(e, s))),
    (r.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (zl(e, t, s, n), (r.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((t = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      t !== r.state && uo.enqueueReplaceState(r, r.state, null),
      Ds(e, n, r, i),
      (r.state = e.memoizedState)),
    typeof r.componentDidMount == "function" && (e.flags |= 4194308);
}
function xi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var i = n.stateNode;
      }
      if (!i) throw Error(M(147, e));
      var r = i,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = r.refs;
            l === qd && (l = r.refs = {}),
              o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function Ir(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function nc(e) {
  var t = e._init;
  return t(e._payload);
}
function th(e) {
  function t(g, h) {
    if (e) {
      var m = g.deletions;
      m === null ? ((g.deletions = [h]), (g.flags |= 16)) : m.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), (h = h.sibling);
    return null;
  }
  function i(g, h) {
    for (g = new Map(); h !== null; )
      h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
    return g;
  }
  function r(g, h) {
    return (g = Je(g, h)), (g.index = 0), (g.sibling = null), g;
  }
  function s(g, h, m) {
    return (
      (g.index = m),
      e
        ? ((m = g.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((g.flags |= 2), h) : m)
            : ((g.flags |= 2), h))
        : ((g.flags |= 1048576), h)
    );
  }
  function o(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, h, m, _) {
    return h === null || h.tag !== 6
      ? ((h = Ko(m, g.mode, _)), (h.return = g), h)
      : ((h = r(h, m)), (h.return = g), h);
  }
  function a(g, h, m, _) {
    var w = m.type;
    return w === zn
      ? c(g, h, m.props.children, _, m.key)
      : h !== null &&
        (h.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === Ne &&
            nc(w) === h.type))
      ? ((_ = r(h, m.props)), (_.ref = xi(g, h, m)), (_.return = g), _)
      : ((_ = ps(m.type, m.key, m.props, null, g.mode, _)),
        (_.ref = xi(g, h, m)),
        (_.return = g),
        _);
  }
  function u(g, h, m, _) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = Go(m, g.mode, _)), (h.return = g), h)
      : ((h = r(h, m.children || [])), (h.return = g), h);
  }
  function c(g, h, m, _, w) {
    return h === null || h.tag !== 7
      ? ((h = xn(m, g.mode, _, w)), (h.return = g), h)
      : ((h = r(h, m)), (h.return = g), h);
  }
  function f(g, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Ko("" + h, g.mode, m)), (h.return = g), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Er:
          return (
            (m = ps(h.type, h.key, h.props, null, g.mode, m)),
            (m.ref = xi(g, null, h)),
            (m.return = g),
            m
          );
        case Rn:
          return (h = Go(h, g.mode, m)), (h.return = g), h;
        case Ne:
          var _ = h._init;
          return f(g, _(h._payload), m);
      }
      if (Pi(h) || pi(h))
        return (h = xn(h, g.mode, m, null)), (h.return = g), h;
      Ir(g, h);
    }
    return null;
  }
  function d(g, h, m, _) {
    var w = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return w !== null ? null : l(g, h, "" + m, _);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Er:
          return m.key === w ? a(g, h, m, _) : null;
        case Rn:
          return m.key === w ? u(g, h, m, _) : null;
        case Ne:
          return (w = m._init), d(g, h, w(m._payload), _);
      }
      if (Pi(m) || pi(m)) return w !== null ? null : c(g, h, m, _, null);
      Ir(g, m);
    }
    return null;
  }
  function p(g, h, m, _, w) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (g = g.get(m) || null), l(h, g, "" + _, w);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Er:
          return (g = g.get(_.key === null ? m : _.key) || null), a(h, g, _, w);
        case Rn:
          return (g = g.get(_.key === null ? m : _.key) || null), u(h, g, _, w);
        case Ne:
          var k = _._init;
          return p(g, h, m, k(_._payload), w);
      }
      if (Pi(_) || pi(_)) return (g = g.get(m) || null), c(h, g, _, w, null);
      Ir(h, _);
    }
    return null;
  }
  function y(g, h, m, _) {
    for (
      var w = null, k = null, S = h, b = (h = 0), A = null;
      S !== null && b < m.length;
      b++
    ) {
      S.index > b ? ((A = S), (S = null)) : (A = S.sibling);
      var P = d(g, S, m[b], _);
      if (P === null) {
        S === null && (S = A);
        break;
      }
      e && S && P.alternate === null && t(g, S),
        (h = s(P, h, b)),
        k === null ? (w = P) : (k.sibling = P),
        (k = P),
        (S = A);
    }
    if (b === m.length) return n(g, S), Z && dn(g, b), w;
    if (S === null) {
      for (; b < m.length; b++)
        (S = f(g, m[b], _)),
          S !== null &&
            ((h = s(S, h, b)), k === null ? (w = S) : (k.sibling = S), (k = S));
      return Z && dn(g, b), w;
    }
    for (S = i(g, S); b < m.length; b++)
      (A = p(S, g, b, m[b], _)),
        A !== null &&
          (e && A.alternate !== null && S.delete(A.key === null ? b : A.key),
          (h = s(A, h, b)),
          k === null ? (w = A) : (k.sibling = A),
          (k = A));
    return (
      e &&
        S.forEach(function (O) {
          return t(g, O);
        }),
      Z && dn(g, b),
      w
    );
  }
  function v(g, h, m, _) {
    var w = pi(m);
    if (typeof w != "function") throw Error(M(150));
    if (((m = w.call(m)), m == null)) throw Error(M(151));
    for (
      var k = (w = null), S = h, b = (h = 0), A = null, P = m.next();
      S !== null && !P.done;
      b++, P = m.next()
    ) {
      S.index > b ? ((A = S), (S = null)) : (A = S.sibling);
      var O = d(g, S, P.value, _);
      if (O === null) {
        S === null && (S = A);
        break;
      }
      e && S && O.alternate === null && t(g, S),
        (h = s(O, h, b)),
        k === null ? (w = O) : (k.sibling = O),
        (k = O),
        (S = A);
    }
    if (P.done) return n(g, S), Z && dn(g, b), w;
    if (S === null) {
      for (; !P.done; b++, P = m.next())
        (P = f(g, P.value, _)),
          P !== null &&
            ((h = s(P, h, b)), k === null ? (w = P) : (k.sibling = P), (k = P));
      return Z && dn(g, b), w;
    }
    for (S = i(g, S); !P.done; b++, P = m.next())
      (P = p(S, g, b, P.value, _)),
        P !== null &&
          (e && P.alternate !== null && S.delete(P.key === null ? b : P.key),
          (h = s(P, h, b)),
          k === null ? (w = P) : (k.sibling = P),
          (k = P));
    return (
      e &&
        S.forEach(function (z) {
          return t(g, z);
        }),
      Z && dn(g, b),
      w
    );
  }
  function x(g, h, m, _) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === zn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Er:
          t: {
            for (var w = m.key, k = h; k !== null; ) {
              if (k.key === w) {
                if (((w = m.type), w === zn)) {
                  if (k.tag === 7) {
                    n(g, k.sibling),
                      (h = r(k, m.props.children)),
                      (h.return = g),
                      (g = h);
                    break t;
                  }
                } else if (
                  k.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === Ne &&
                    nc(w) === k.type)
                ) {
                  n(g, k.sibling),
                    (h = r(k, m.props)),
                    (h.ref = xi(g, k, m)),
                    (h.return = g),
                    (g = h);
                  break t;
                }
                n(g, k);
                break;
              } else t(g, k);
              k = k.sibling;
            }
            m.type === zn
              ? ((h = xn(m.props.children, g.mode, _, m.key)),
                (h.return = g),
                (g = h))
              : ((_ = ps(m.type, m.key, m.props, null, g.mode, _)),
                (_.ref = xi(g, h, m)),
                (_.return = g),
                (g = _));
          }
          return o(g);
        case Rn:
          t: {
            for (k = m.key; h !== null; ) {
              if (h.key === k)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(g, h.sibling),
                    (h = r(h, m.children || [])),
                    (h.return = g),
                    (g = h);
                  break t;
                } else {
                  n(g, h);
                  break;
                }
              else t(g, h);
              h = h.sibling;
            }
            (h = Go(m, g.mode, _)), (h.return = g), (g = h);
          }
          return o(g);
        case Ne:
          return (k = m._init), x(g, h, k(m._payload), _);
      }
      if (Pi(m)) return y(g, h, m, _);
      if (pi(m)) return v(g, h, m, _);
      Ir(g, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(g, h.sibling), (h = r(h, m)), (h.return = g), (g = h))
          : (n(g, h), (h = Ko(m, g.mode, _)), (h.return = g), (g = h)),
        o(g))
      : n(g, h);
  }
  return x;
}
var ri = th(!0),
  eh = th(!1),
  kr = {},
  ve = on(kr),
  lr = on(kr),
  ar = on(kr);
function yn(e) {
  if (e === kr) throw Error(M(174));
  return e;
}
function Ra(e, t) {
  switch ((Q(ar, t), Q(lr, e), Q(ve, kr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : pl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = pl(t, e));
  }
  $(ve), Q(ve, t);
}
function si() {
  $(ve), $(lr), $(ar);
}
function nh(e) {
  yn(ar.current);
  var t = yn(ve.current),
    n = pl(t, e.type);
  t !== n && (Q(lr, e), Q(ve, n));
}
function za(e) {
  lr.current === e && ($(ve), $(lr));
}
var J = on(0);
function Rs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Wo = [];
function Na() {
  for (var e = 0; e < Wo.length; e++)
    Wo[e]._workInProgressVersionPrimary = null;
  Wo.length = 0;
}
var us = De.ReactCurrentDispatcher,
  Vo = De.ReactCurrentBatchConfig,
  Sn = 0,
  et = null,
  ft = null,
  ht = null,
  zs = !1,
  Wi = !1,
  ur = 0,
  Tm = 0;
function wt() {
  throw Error(M(321));
}
function Fa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ae(e[n], t[n])) return !1;
  return !0;
}
function Ia(e, t, n, i, r, s) {
  if (
    ((Sn = s),
    (et = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (us.current = e === null || e.memoizedState === null ? Dm : Rm),
    (e = n(i, r)),
    Wi)
  ) {
    s = 0;
    do {
      if (((Wi = !1), (ur = 0), 25 <= s)) throw Error(M(301));
      (s += 1),
        (ht = ft = null),
        (t.updateQueue = null),
        (us.current = zm),
        (e = n(i, r));
    } while (Wi);
  }
  if (
    ((us.current = Ns),
    (t = ft !== null && ft.next !== null),
    (Sn = 0),
    (ht = ft = et = null),
    (zs = !1),
    t)
  )
    throw Error(M(300));
  return e;
}
function ja() {
  var e = ur !== 0;
  return (ur = 0), e;
}
function de() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ht === null ? (et.memoizedState = ht = e) : (ht = ht.next = e), ht;
}
function ee() {
  if (ft === null) {
    var e = et.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ft.next;
  var t = ht === null ? et.memoizedState : ht.next;
  if (t !== null) (ht = t), (ft = e);
  else {
    if (e === null) throw Error(M(310));
    (ft = e),
      (e = {
        memoizedState: ft.memoizedState,
        baseState: ft.baseState,
        baseQueue: ft.baseQueue,
        queue: ft.queue,
        next: null,
      }),
      ht === null ? (et.memoizedState = ht = e) : (ht = ht.next = e);
  }
  return ht;
}
function cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Uo(e) {
  var t = ee(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var i = ft,
    r = i.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (r !== null) {
      var o = r.next;
      (r.next = s.next), (s.next = o);
    }
    (i.baseQueue = r = s), (n.pending = null);
  }
  if (r !== null) {
    (s = r.next), (i = i.baseState);
    var l = (o = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((Sn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (i = u.hasEagerState ? u.eagerState : e(i, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (o = i)) : (a = a.next = f),
          (et.lanes |= c),
          (bn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (o = i) : (a.next = l),
      ae(i, t.memoizedState) || (zt = !0),
      (t.memoizedState = i),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = i);
  }
  if (((e = n.interleaved), e !== null)) {
    r = e;
    do (s = r.lane), (et.lanes |= s), (bn |= s), (r = r.next);
    while (r !== e);
  } else r === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yo(e) {
  var t = ee(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var i = n.dispatch,
    r = n.pending,
    s = t.memoizedState;
  if (r !== null) {
    n.pending = null;
    var o = (r = r.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== r);
    ae(s, t.memoizedState) || (zt = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, i];
}
function ih() {}
function rh(e, t) {
  var n = et,
    i = ee(),
    r = t(),
    s = !ae(i.memoizedState, r);
  if (
    (s && ((i.memoizedState = r), (zt = !0)),
    (i = i.queue),
    Ba(lh.bind(null, n, i, e), [e]),
    i.getSnapshot !== t || s || (ht !== null && ht.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      fr(9, oh.bind(null, n, i, r, t), void 0, null),
      gt === null)
    )
      throw Error(M(349));
    Sn & 30 || sh(n, t, r);
  }
  return r;
}
function sh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = et.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (et.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function oh(e, t, n, i) {
  (t.value = n), (t.getSnapshot = i), ah(t) && uh(e);
}
function lh(e, t, n) {
  return n(function () {
    ah(t) && uh(e);
  });
}
function ah(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ae(e, n);
  } catch {
    return !0;
  }
}
function uh(e) {
  var t = Le(e, 1);
  t !== null && le(t, e, 1, -1);
}
function ic(e) {
  var t = de();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Om.bind(null, et, e)),
    [t.memoizedState, e]
  );
}
function fr(e, t, n, i) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
    (t = et.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (et.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
    e
  );
}
function ch() {
  return ee().memoizedState;
}
function cs(e, t, n, i) {
  var r = de();
  (et.flags |= e),
    (r.memoizedState = fr(1 | t, n, void 0, i === void 0 ? null : i));
}
function co(e, t, n, i) {
  var r = ee();
  i = i === void 0 ? null : i;
  var s = void 0;
  if (ft !== null) {
    var o = ft.memoizedState;
    if (((s = o.destroy), i !== null && Fa(i, o.deps))) {
      r.memoizedState = fr(t, n, s, i);
      return;
    }
  }
  (et.flags |= e), (r.memoizedState = fr(1 | t, n, s, i));
}
function rc(e, t) {
  return cs(8390656, 8, e, t);
}
function Ba(e, t) {
  return co(2048, 8, e, t);
}
function fh(e, t) {
  return co(4, 2, e, t);
}
function dh(e, t) {
  return co(4, 4, e, t);
}
function hh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ph(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), co(4, 4, hh.bind(null, t, e), n)
  );
}
function Ha() {}
function gh(e, t) {
  var n = ee();
  t = t === void 0 ? null : t;
  var i = n.memoizedState;
  return i !== null && t !== null && Fa(t, i[1])
    ? i[0]
    : ((n.memoizedState = [e, t]), e);
}
function mh(e, t) {
  var n = ee();
  t = t === void 0 ? null : t;
  var i = n.memoizedState;
  return i !== null && t !== null && Fa(t, i[1])
    ? i[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function yh(e, t, n) {
  return Sn & 21
    ? (ae(n, t) || ((n = _d()), (et.lanes |= n), (bn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (zt = !0)), (e.memoizedState = n));
}
function Am(e, t) {
  var n = W;
  (W = n !== 0 && 4 > n ? n : 4), e(!0);
  var i = Vo.transition;
  Vo.transition = {};
  try {
    e(!1), t();
  } finally {
    (W = n), (Vo.transition = i);
  }
}
function vh() {
  return ee().memoizedState;
}
function Lm(e, t, n) {
  var i = qe(e);
  if (
    ((n = {
      lane: i,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    xh(e))
  )
    _h(t, n);
  else if (((n = $d(e, t, n, i)), n !== null)) {
    var r = Pt();
    le(n, e, i, r), wh(n, t, i);
  }
}
function Om(e, t, n) {
  var i = qe(e),
    r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (xh(e)) _h(t, r);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((r.hasEagerState = !0), (r.eagerState = l), ae(l, o))) {
          var a = t.interleaved;
          a === null
            ? ((r.next = r), Oa(t))
            : ((r.next = a.next), (a.next = r)),
            (t.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (n = $d(e, t, r, i)),
      n !== null && ((r = Pt()), le(n, e, i, r), wh(n, t, i));
  }
}
function xh(e) {
  var t = e.alternate;
  return e === et || (t !== null && t === et);
}
function _h(e, t) {
  Wi = zs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function wh(e, t, n) {
  if (n & 4194240) {
    var i = t.lanes;
    (i &= e.pendingLanes), (n |= i), (t.lanes = n), va(e, n);
  }
}
var Ns = {
    readContext: te,
    useCallback: wt,
    useContext: wt,
    useEffect: wt,
    useImperativeHandle: wt,
    useInsertionEffect: wt,
    useLayoutEffect: wt,
    useMemo: wt,
    useReducer: wt,
    useRef: wt,
    useState: wt,
    useDebugValue: wt,
    useDeferredValue: wt,
    useTransition: wt,
    useMutableSource: wt,
    useSyncExternalStore: wt,
    useId: wt,
    unstable_isNewReconciler: !1,
  },
  Dm = {
    readContext: te,
    useCallback: function (e, t) {
      return (de().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: te,
    useEffect: rc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        cs(4194308, 4, hh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return cs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return cs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = de();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var i = de();
      return (
        (t = n !== void 0 ? n(t) : t),
        (i.memoizedState = i.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (i.queue = e),
        (e = e.dispatch = Lm.bind(null, et, e)),
        [i.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = de();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ic,
    useDebugValue: Ha,
    useDeferredValue: function (e) {
      return (de().memoizedState = e);
    },
    useTransition: function () {
      var e = ic(!1),
        t = e[0];
      return (e = Am.bind(null, e[1])), (de().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var i = et,
        r = de();
      if (Z) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), gt === null)) throw Error(M(349));
        Sn & 30 || sh(i, t, n);
      }
      r.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (r.queue = s),
        rc(lh.bind(null, i, s, e), [e]),
        (i.flags |= 2048),
        fr(9, oh.bind(null, i, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = de(),
        t = gt.identifierPrefix;
      if (Z) {
        var n = Ee,
          i = Me;
        (n = (i & ~(1 << (32 - oe(i) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ur++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Tm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Rm = {
    readContext: te,
    useCallback: gh,
    useContext: te,
    useEffect: Ba,
    useImperativeHandle: ph,
    useInsertionEffect: fh,
    useLayoutEffect: dh,
    useMemo: mh,
    useReducer: Uo,
    useRef: ch,
    useState: function () {
      return Uo(cr);
    },
    useDebugValue: Ha,
    useDeferredValue: function (e) {
      var t = ee();
      return yh(t, ft.memoizedState, e);
    },
    useTransition: function () {
      var e = Uo(cr)[0],
        t = ee().memoizedState;
      return [e, t];
    },
    useMutableSource: ih,
    useSyncExternalStore: rh,
    useId: vh,
    unstable_isNewReconciler: !1,
  },
  zm = {
    readContext: te,
    useCallback: gh,
    useContext: te,
    useEffect: Ba,
    useImperativeHandle: ph,
    useInsertionEffect: fh,
    useLayoutEffect: dh,
    useMemo: mh,
    useReducer: Yo,
    useRef: ch,
    useState: function () {
      return Yo(cr);
    },
    useDebugValue: Ha,
    useDeferredValue: function (e) {
      var t = ee();
      return ft === null ? (t.memoizedState = e) : yh(t, ft.memoizedState, e);
    },
    useTransition: function () {
      var e = Yo(cr)[0],
        t = ee().memoizedState;
      return [e, t];
    },
    useMutableSource: ih,
    useSyncExternalStore: rh,
    useId: vh,
    unstable_isNewReconciler: !1,
  };
function oi(e, t) {
  try {
    var n = "",
      i = t;
    do (n += ug(i)), (i = i.return);
    while (i);
    var r = n;
  } catch (s) {
    r =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: r, digest: null };
}
function Qo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Fl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Nm = typeof WeakMap == "function" ? WeakMap : Map;
function kh(e, t, n) {
  (n = Pe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var i = t.value;
  return (
    (n.callback = function () {
      Is || ((Is = !0), (Xl = i)), Fl(e, t);
    }),
    n
  );
}
function Sh(e, t, n) {
  (n = Pe(-1, n)), (n.tag = 3);
  var i = e.type.getDerivedStateFromError;
  if (typeof i == "function") {
    var r = t.value;
    (n.payload = function () {
      return i(r);
    }),
      (n.callback = function () {
        Fl(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Fl(e, t),
          typeof i != "function" &&
            (Ze === null ? (Ze = new Set([this])) : Ze.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function sc(e, t, n) {
  var i = e.pingCache;
  if (i === null) {
    i = e.pingCache = new Nm();
    var r = new Set();
    i.set(t, r);
  } else (r = i.get(t)), r === void 0 && ((r = new Set()), i.set(t, r));
  r.has(n) || (r.add(n), (e = $m.bind(null, e, t, n)), t.then(e, e));
}
function oc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function lc(e, t, n, i, r) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = r), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Pe(-1, 1)), (t.tag = 2), $e(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Fm = De.ReactCurrentOwner,
  zt = !1;
function Et(e, t, n, i) {
  t.child = e === null ? eh(t, null, n, i) : ri(t, e.child, n, i);
}
function ac(e, t, n, i, r) {
  n = n.render;
  var s = t.ref;
  return (
    Zn(t, r),
    (i = Ia(e, t, n, i, s, r)),
    (n = ja()),
    e !== null && !zt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        Oe(e, t, r))
      : (Z && n && Ma(t), (t.flags |= 1), Et(e, t, i, r), t.child)
  );
}
function uc(e, t, n, i, r) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Ga(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), bh(e, t, s, i, r))
      : ((e = ps(n.type, null, i, t, t.mode, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & r))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ir), n(o, i) && e.ref === t.ref)
    )
      return Oe(e, t, r);
  }
  return (
    (t.flags |= 1),
    (e = Je(s, i)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function bh(e, t, n, i, r) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (ir(s, i) && e.ref === t.ref)
      if (((zt = !1), (t.pendingProps = i = s), (e.lanes & r) !== 0))
        e.flags & 131072 && (zt = !0);
      else return (t.lanes = e.lanes), Oe(e, t, r);
  }
  return Il(e, t, n, i, r);
}
function Ch(e, t, n) {
  var i = t.pendingProps,
    r = i.children,
    s = e !== null ? e.memoizedState : null;
  if (i.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Q(Yn, Wt),
        (Wt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Q(Yn, Wt),
          (Wt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = s !== null ? s.baseLanes : n),
        Q(Yn, Wt),
        (Wt |= i);
    }
  else
    s !== null ? ((i = s.baseLanes | n), (t.memoizedState = null)) : (i = n),
      Q(Yn, Wt),
      (Wt |= i);
  return Et(e, t, r, n), t.child;
}
function Mh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Il(e, t, n, i, r) {
  var s = Ft(n) ? wn : bt.current;
  return (
    (s = ni(t, s)),
    Zn(t, r),
    (n = Ia(e, t, n, i, s, r)),
    (i = ja()),
    e !== null && !zt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        Oe(e, t, r))
      : (Z && i && Ma(t), (t.flags |= 1), Et(e, t, n, r), t.child)
  );
}
function cc(e, t, n, i, r) {
  if (Ft(n)) {
    var s = !0;
    Ps(t);
  } else s = !1;
  if ((Zn(t, r), t.stateNode === null))
    fs(e, t), Jd(t, n, i), Nl(t, n, i, r), (i = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = te(u))
      : ((u = Ft(n) ? wn : bt.current), (u = ni(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== i || a !== u) && ec(t, o, i, u)),
      (Fe = !1);
    var d = t.memoizedState;
    (o.state = d),
      Ds(t, i, o, r),
      (a = t.memoizedState),
      l !== i || d !== a || Nt.current || Fe
        ? (typeof c == "function" && (zl(t, n, c, i), (a = t.memoizedState)),
          (l = Fe || tc(t, n, l, i, d, a, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = i),
              (t.memoizedState = a)),
          (o.props = i),
          (o.state = a),
          (o.context = u),
          (i = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (i = !1));
  } else {
    (o = t.stateNode),
      Zd(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : ie(t.type, l)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = te(a))
        : ((a = Ft(n) ? wn : bt.current), (a = ni(t, a)));
    var p = n.getDerivedStateFromProps;
    (c =
      typeof p == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && ec(t, o, i, a)),
      (Fe = !1),
      (d = t.memoizedState),
      (o.state = d),
      Ds(t, i, o, r);
    var y = t.memoizedState;
    l !== f || d !== y || Nt.current || Fe
      ? (typeof p == "function" && (zl(t, n, p, i), (y = t.memoizedState)),
        (u = Fe || tc(t, n, u, i, d, y, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(i, y, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(i, y, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = i),
            (t.memoizedState = y)),
        (o.props = i),
        (o.state = y),
        (o.context = a),
        (i = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (i = !1));
  }
  return jl(e, t, n, i, s, r);
}
function jl(e, t, n, i, r, s) {
  Mh(e, t);
  var o = (t.flags & 128) !== 0;
  if (!i && !o) return r && Gu(t, n, !1), Oe(e, t, s);
  (i = t.stateNode), (Fm.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : i.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = ri(t, e.child, null, s)), (t.child = ri(t, null, l, s)))
      : Et(e, t, l, s),
    (t.memoizedState = i.state),
    r && Gu(t, n, !0),
    t.child
  );
}
function Eh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ku(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ku(e, t.context, !1),
    Ra(e, t.containerInfo);
}
function fc(e, t, n, i, r) {
  return ii(), Pa(r), (t.flags |= 256), Et(e, t, n, i), t.child;
}
var Bl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Hl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ph(e, t, n) {
  var i = t.pendingProps,
    r = J.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (r |= 1),
    Q(J, r & 1),
    e === null)
  )
    return (
      Dl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = i.children),
          (e = i.fallback),
          s
            ? ((i = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(i & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = po(o, i, 0, null)),
              (e = xn(e, i, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Hl(n)),
              (t.memoizedState = Bl),
              e)
            : Wa(t, o))
    );
  if (((r = e.memoizedState), r !== null && ((l = r.dehydrated), l !== null)))
    return Im(e, t, o, i, l, r, n);
  if (s) {
    (s = i.fallback), (o = t.mode), (r = e.child), (l = r.sibling);
    var a = { mode: "hidden", children: i.children };
    return (
      !(o & 1) && t.child !== r
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = a),
          (t.deletions = null))
        : ((i = Je(r, a)), (i.subtreeFlags = r.subtreeFlags & 14680064)),
      l !== null ? (s = Je(l, s)) : ((s = xn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (i.return = t),
      (i.sibling = s),
      (t.child = i),
      (i = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Hl(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Bl),
      i
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (i = Je(s, { mode: "visible", children: i.children })),
    !(t.mode & 1) && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  );
}
function Wa(e, t) {
  return (
    (t = po({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function jr(e, t, n, i) {
  return (
    i !== null && Pa(i),
    ri(t, e.child, null, n),
    (e = Wa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Im(e, t, n, i, r, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (i = Qo(Error(M(422)))), jr(e, t, o, i))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = i.fallback),
        (r = t.mode),
        (i = po({ mode: "visible", children: i.children }, r, 0, null)),
        (s = xn(s, r, o, null)),
        (s.flags |= 2),
        (i.return = t),
        (s.return = t),
        (i.sibling = s),
        (t.child = i),
        t.mode & 1 && ri(t, e.child, null, o),
        (t.child.memoizedState = Hl(o)),
        (t.memoizedState = Bl),
        s);
  if (!(t.mode & 1)) return jr(e, t, o, null);
  if (r.data === "$!") {
    if (((i = r.nextSibling && r.nextSibling.dataset), i)) var l = i.dgst;
    return (i = l), (s = Error(M(419))), (i = Qo(s, i, void 0)), jr(e, t, o, i);
  }
  if (((l = (o & e.childLanes) !== 0), zt || l)) {
    if (((i = gt), i !== null)) {
      switch (o & -o) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = r & (i.suspendedLanes | o) ? 0 : r),
        r !== 0 &&
          r !== s.retryLane &&
          ((s.retryLane = r), Le(e, r), le(i, e, r, -1));
    }
    return Ka(), (i = Qo(Error(M(421)))), jr(e, t, o, i);
  }
  return r.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Zm.bind(null, e)),
      (r._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Vt = Ge(r.nextSibling)),
      (Ut = t),
      (Z = !0),
      (se = null),
      e !== null &&
        ((Gt[$t++] = Me),
        (Gt[$t++] = Ee),
        (Gt[$t++] = kn),
        (Me = e.id),
        (Ee = e.overflow),
        (kn = t)),
      (t = Wa(t, i.children)),
      (t.flags |= 4096),
      t);
}
function dc(e, t, n) {
  e.lanes |= t;
  var i = e.alternate;
  i !== null && (i.lanes |= t), Rl(e.return, t, n);
}
function Xo(e, t, n, i, r) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: r,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = i),
      (s.tail = n),
      (s.tailMode = r));
}
function Th(e, t, n) {
  var i = t.pendingProps,
    r = i.revealOrder,
    s = i.tail;
  if ((Et(e, t, i.children, n), (i = J.current), i & 2))
    (i = (i & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      t: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && dc(e, n, t);
        else if (e.tag === 19) dc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break t;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break t;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    i &= 1;
  }
  if ((Q(J, i), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (n = t.child, r = null; n !== null; )
          (e = n.alternate),
            e !== null && Rs(e) === null && (r = n),
            (n = n.sibling);
        (n = r),
          n === null
            ? ((r = t.child), (t.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          Xo(t, !1, r, n, s);
        break;
      case "backwards":
        for (n = null, r = t.child, t.child = null; r !== null; ) {
          if (((e = r.alternate), e !== null && Rs(e) === null)) {
            t.child = r;
            break;
          }
          (e = r.sibling), (r.sibling = n), (n = r), (r = e);
        }
        Xo(t, !0, n, null, s);
        break;
      case "together":
        Xo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function fs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Oe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (bn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Je(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Je(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function jm(e, t, n) {
  switch (t.tag) {
    case 3:
      Eh(t), ii();
      break;
    case 5:
      nh(t);
      break;
    case 1:
      Ft(t.type) && Ps(t);
      break;
    case 4:
      Ra(t, t.stateNode.containerInfo);
      break;
    case 10:
      var i = t.type._context,
        r = t.memoizedProps.value;
      Q(Ls, i._currentValue), (i._currentValue = r);
      break;
    case 13:
      if (((i = t.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (Q(J, J.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ph(e, t, n)
          : (Q(J, J.current & 1),
            (e = Oe(e, t, n)),
            e !== null ? e.sibling : null);
      Q(J, J.current & 1);
      break;
    case 19:
      if (((i = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (i) return Th(e, t, n);
        t.flags |= 128;
      }
      if (
        ((r = t.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        Q(J, J.current),
        i)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ch(e, t, n);
  }
  return Oe(e, t, n);
}
var Ah, Wl, Lh, Oh;
Ah = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Wl = function () {};
Lh = function (e, t, n, i) {
  var r = e.memoizedProps;
  if (r !== i) {
    (e = t.stateNode), yn(ve.current);
    var s = null;
    switch (n) {
      case "input":
        (r = cl(e, r)), (i = cl(e, i)), (s = []);
        break;
      case "select":
        (r = nt({}, r, { value: void 0 })),
          (i = nt({}, i, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (r = hl(e, r)), (i = hl(e, i)), (s = []);
        break;
      default:
        typeof r.onClick != "function" &&
          typeof i.onClick == "function" &&
          (e.onclick = Ms);
    }
    gl(n, i);
    var o;
    n = null;
    for (u in r)
      if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && r[u] != null)
        if (u === "style") {
          var l = r[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            ($i.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in i) {
      var a = i[u];
      if (
        ((l = r != null ? r[u] : void 0),
        i.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              ($i.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && G("scroll", e),
                  s || l === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Oh = function (e, t, n, i) {
  n !== i && (t.flags |= 4);
};
function _i(e, t) {
  if (!Z)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var i = null; n !== null; )
          n.alternate !== null && (i = n), (n = n.sibling);
        i === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (i.sibling = null);
    }
}
function kt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    i = 0;
  if (t)
    for (var r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags & 14680064),
        (i |= r.flags & 14680064),
        (r.return = e),
        (r = r.sibling);
  else
    for (r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags),
        (i |= r.flags),
        (r.return = e),
        (r = r.sibling);
  return (e.subtreeFlags |= i), (e.childLanes = n), t;
}
function Bm(e, t, n) {
  var i = t.pendingProps;
  switch ((Ea(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return kt(t), null;
    case 1:
      return Ft(t.type) && Es(), kt(t), null;
    case 3:
      return (
        (i = t.stateNode),
        si(),
        $(Nt),
        $(bt),
        Na(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (e === null || e.child === null) &&
          (Fr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), se !== null && ($l(se), (se = null)))),
        Wl(e, t),
        kt(t),
        null
      );
    case 5:
      za(t);
      var r = yn(ar.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Lh(e, t, n, i, r),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!i) {
          if (t.stateNode === null) throw Error(M(166));
          return kt(t), null;
        }
        if (((e = yn(ve.current)), Fr(t))) {
          (i = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((i[ge] = t), (i[or] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              G("cancel", i), G("close", i);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", i);
              break;
            case "video":
            case "audio":
              for (r = 0; r < Ai.length; r++) G(Ai[r], i);
              break;
            case "source":
              G("error", i);
              break;
            case "img":
            case "image":
            case "link":
              G("error", i), G("load", i);
              break;
            case "details":
              G("toggle", i);
              break;
            case "input":
              wu(i, s), G("invalid", i);
              break;
            case "select":
              (i._wrapperState = { wasMultiple: !!s.multiple }),
                G("invalid", i);
              break;
            case "textarea":
              Su(i, s), G("invalid", i);
          }
          gl(n, s), (r = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? i.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Nr(i.textContent, l, e),
                    (r = ["children", l]))
                  : typeof l == "number" &&
                    i.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Nr(i.textContent, l, e),
                    (r = ["children", "" + l]))
                : $i.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  G("scroll", i);
            }
          switch (n) {
            case "input":
              Pr(i), ku(i, s, !0);
              break;
            case "textarea":
              Pr(i), bu(i);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (i.onclick = Ms);
          }
          (i = r), (t.updateQueue = i), i !== null && (t.flags |= 4);
        } else {
          (o = r.nodeType === 9 ? r : r.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = sd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof i.is == "string"
                ? (e = o.createElement(n, { is: i.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    i.multiple
                      ? (o.multiple = !0)
                      : i.size && (o.size = i.size)))
              : (e = o.createElementNS(e, n)),
            (e[ge] = t),
            (e[or] = i),
            Ah(e, t, !1, !1),
            (t.stateNode = e);
          t: {
            switch (((o = ml(n, i)), n)) {
              case "dialog":
                G("cancel", e), G("close", e), (r = i);
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", e), (r = i);
                break;
              case "video":
              case "audio":
                for (r = 0; r < Ai.length; r++) G(Ai[r], e);
                r = i;
                break;
              case "source":
                G("error", e), (r = i);
                break;
              case "img":
              case "image":
              case "link":
                G("error", e), G("load", e), (r = i);
                break;
              case "details":
                G("toggle", e), (r = i);
                break;
              case "input":
                wu(e, i), (r = cl(e, i)), G("invalid", e);
                break;
              case "option":
                r = i;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!i.multiple }),
                  (r = nt({}, i, { value: void 0 })),
                  G("invalid", e);
                break;
              case "textarea":
                Su(e, i), (r = hl(e, i)), G("invalid", e);
                break;
              default:
                r = i;
            }
            gl(n, r), (l = r);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? ad(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && od(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Zi(e, a)
                    : typeof a == "number" && Zi(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    ($i.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && G("scroll", e)
                      : a != null && da(e, s, a, o));
              }
            switch (n) {
              case "input":
                Pr(e), ku(e, i, !1);
                break;
              case "textarea":
                Pr(e), bu(e);
                break;
              case "option":
                i.value != null && e.setAttribute("value", "" + en(i.value));
                break;
              case "select":
                (e.multiple = !!i.multiple),
                  (s = i.value),
                  s != null
                    ? Xn(e, !!i.multiple, s, !1)
                    : i.defaultValue != null &&
                      Xn(e, !!i.multiple, i.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (e.onclick = Ms);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break t;
              case "img":
                i = !0;
                break t;
              default:
                i = !1;
            }
          }
          i && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return kt(t), null;
    case 6:
      if (e && t.stateNode != null) Oh(e, t, e.memoizedProps, i);
      else {
        if (typeof i != "string" && t.stateNode === null) throw Error(M(166));
        if (((n = yn(ar.current)), yn(ve.current), Fr(t))) {
          if (
            ((i = t.stateNode),
            (n = t.memoizedProps),
            (i[ge] = t),
            (s = i.nodeValue !== n) && ((e = Ut), e !== null))
          )
            switch (e.tag) {
              case 3:
                Nr(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Nr(i.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[ge] = t),
            (t.stateNode = i);
      }
      return kt(t), null;
    case 13:
      if (
        ($(J),
        (i = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && Vt !== null && t.mode & 1 && !(t.flags & 128))
          Gd(), ii(), (t.flags |= 98560), (s = !1);
        else if (((s = Fr(t)), i !== null && i.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(M(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(M(317));
            s[ge] = t;
          } else
            ii(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          kt(t), (s = !1);
        } else se !== null && ($l(se), (se = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((i = i !== null),
          i !== (e !== null && e.memoizedState !== null) &&
            i &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || J.current & 1 ? dt === 0 && (dt = 3) : Ka())),
          t.updateQueue !== null && (t.flags |= 4),
          kt(t),
          null);
    case 4:
      return (
        si(), Wl(e, t), e === null && rr(t.stateNode.containerInfo), kt(t), null
      );
    case 10:
      return La(t.type._context), kt(t), null;
    case 17:
      return Ft(t.type) && Es(), kt(t), null;
    case 19:
      if (($(J), (s = t.memoizedState), s === null)) return kt(t), null;
      if (((i = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (i) _i(s, !1);
        else {
          if (dt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Rs(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    _i(s, !1),
                    i = o.updateQueue,
                    i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    i = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = i),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Q(J, (J.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            lt() > li &&
            ((t.flags |= 128), (i = !0), _i(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!i)
          if (((e = Rs(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (i = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              _i(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !Z)
            )
              return kt(t), null;
          } else
            2 * lt() - s.renderingStartTime > li &&
              n !== 1073741824 &&
              ((t.flags |= 128), (i = !0), _i(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = lt()),
          (t.sibling = null),
          (n = J.current),
          Q(J, i ? (n & 1) | 2 : n & 1),
          t)
        : (kt(t), null);
    case 22:
    case 23:
      return (
        Xa(),
        (i = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
        i && t.mode & 1
          ? Wt & 1073741824 && (kt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : kt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function Hm(e, t) {
  switch ((Ea(t), t.tag)) {
    case 1:
      return (
        Ft(t.type) && Es(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        si(),
        $(Nt),
        $(bt),
        Na(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return za(t), null;
    case 13:
      if (($(J), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(M(340));
        ii();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $(J), null;
    case 4:
      return si(), null;
    case 10:
      return La(t.type._context), null;
    case 22:
    case 23:
      return Xa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Br = !1,
  St = !1,
  Wm = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function Un(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (i) {
        it(e, t, i);
      }
    else n.current = null;
}
function Vl(e, t, n) {
  try {
    n();
  } catch (i) {
    it(e, t, i);
  }
}
var hc = !1;
function Vm(e, t) {
  if (((Ml = Ss), (e = Nd()), Ca(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      t: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var r = i.anchorOffset,
            s = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break t;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          e: for (;;) {
            for (
              var p;
              f !== n || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                f !== s || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (p = f.firstChild) !== null;

            )
              (d = f), (f = p);
            for (;;) {
              if (f === e) break e;
              if (
                (d === n && ++u === r && (l = o),
                d === s && ++c === i && (a = o),
                (p = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = p;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (El = { focusedElem: e, selectionRange: n }, Ss = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (T = e);
    else
      for (; T !== null; ) {
        t = T;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    x = y.memoizedState,
                    g = t.stateNode,
                    h = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : ie(t.type, v),
                      x
                    );
                  g.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (_) {
          it(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (T = e);
          break;
        }
        T = t.return;
      }
  return (y = hc), (hc = !1), y;
}
function Vi(e, t, n) {
  var i = t.updateQueue;
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var r = (i = i.next);
    do {
      if ((r.tag & e) === e) {
        var s = r.destroy;
        (r.destroy = void 0), s !== void 0 && Vl(t, n, s);
      }
      r = r.next;
    } while (r !== i);
  }
}
function fo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var i = n.create;
        n.destroy = i();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ul(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Dh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Dh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ge], delete t[or], delete t[Al], delete t[Cm], delete t[Mm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Rh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function pc(e) {
  t: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue t;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Yl(e, t, n) {
  var i = e.tag;
  if (i === 5 || i === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ms));
  else if (i !== 4 && ((e = e.child), e !== null))
    for (Yl(e, t, n), e = e.sibling; e !== null; ) Yl(e, t, n), (e = e.sibling);
}
function Ql(e, t, n) {
  var i = e.tag;
  if (i === 5 || i === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (i !== 4 && ((e = e.child), e !== null))
    for (Ql(e, t, n), e = e.sibling; e !== null; ) Ql(e, t, n), (e = e.sibling);
}
var mt = null,
  re = !1;
function Re(e, t, n) {
  for (n = n.child; n !== null; ) zh(e, t, n), (n = n.sibling);
}
function zh(e, t, n) {
  if (ye && typeof ye.onCommitFiberUnmount == "function")
    try {
      ye.onCommitFiberUnmount(io, n);
    } catch {}
  switch (n.tag) {
    case 5:
      St || Un(n, t);
    case 6:
      var i = mt,
        r = re;
      (mt = null),
        Re(e, t, n),
        (mt = i),
        (re = r),
        mt !== null &&
          (re
            ? ((e = mt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : mt.removeChild(n.stateNode));
      break;
    case 18:
      mt !== null &&
        (re
          ? ((e = mt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Bo(e.parentNode, n)
              : e.nodeType === 1 && Bo(e, n),
            er(e))
          : Bo(mt, n.stateNode));
      break;
    case 4:
      (i = mt),
        (r = re),
        (mt = n.stateNode.containerInfo),
        (re = !0),
        Re(e, t, n),
        (mt = i),
        (re = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !St &&
        ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
      ) {
        r = i = i.next;
        do {
          var s = r,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Vl(n, t, o),
            (r = r.next);
        } while (r !== i);
      }
      Re(e, t, n);
      break;
    case 1:
      if (
        !St &&
        (Un(n, t),
        (i = n.stateNode),
        typeof i.componentWillUnmount == "function")
      )
        try {
          (i.props = n.memoizedProps),
            (i.state = n.memoizedState),
            i.componentWillUnmount();
        } catch (l) {
          it(n, t, l);
        }
      Re(e, t, n);
      break;
    case 21:
      Re(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((St = (i = St) || n.memoizedState !== null), Re(e, t, n), (St = i))
        : Re(e, t, n);
      break;
    default:
      Re(e, t, n);
  }
}
function gc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Wm()),
      t.forEach(function (i) {
        var r = qm.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(r, r));
      });
  }
}
function ne(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      try {
        var s = e,
          o = t,
          l = o;
        t: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (mt = l.stateNode), (re = !1);
              break t;
            case 3:
              (mt = l.stateNode.containerInfo), (re = !0);
              break t;
            case 4:
              (mt = l.stateNode.containerInfo), (re = !0);
              break t;
          }
          l = l.return;
        }
        if (mt === null) throw Error(M(160));
        zh(s, o, r), (mt = null), (re = !1);
        var a = r.alternate;
        a !== null && (a.return = null), (r.return = null);
      } catch (u) {
        it(r, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Nh(t, e), (t = t.sibling);
}
function Nh(e, t) {
  var n = e.alternate,
    i = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ne(t, e), ce(e), i & 4)) {
        try {
          Vi(3, e, e.return), fo(3, e);
        } catch (v) {
          it(e, e.return, v);
        }
        try {
          Vi(5, e, e.return);
        } catch (v) {
          it(e, e.return, v);
        }
      }
      break;
    case 1:
      ne(t, e), ce(e), i & 512 && n !== null && Un(n, n.return);
      break;
    case 5:
      if (
        (ne(t, e),
        ce(e),
        i & 512 && n !== null && Un(n, n.return),
        e.flags & 32)
      ) {
        var r = e.stateNode;
        try {
          Zi(r, "");
        } catch (v) {
          it(e, e.return, v);
        }
      }
      if (i & 4 && ((r = e.stateNode), r != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && id(r, s),
              ml(l, o);
            var u = ml(l, s);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                f = a[o + 1];
              c === "style"
                ? ad(r, f)
                : c === "dangerouslySetInnerHTML"
                ? od(r, f)
                : c === "children"
                ? Zi(r, f)
                : da(r, c, f, u);
            }
            switch (l) {
              case "input":
                fl(r, s);
                break;
              case "textarea":
                rd(r, s);
                break;
              case "select":
                var d = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!s.multiple;
                var p = s.value;
                p != null
                  ? Xn(r, !!s.multiple, p, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Xn(r, !!s.multiple, s.defaultValue, !0)
                      : Xn(r, !!s.multiple, s.multiple ? [] : "", !1));
            }
            r[or] = s;
          } catch (v) {
            it(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((ne(t, e), ce(e), i & 4)) {
        if (e.stateNode === null) throw Error(M(162));
        (r = e.stateNode), (s = e.memoizedProps);
        try {
          r.nodeValue = s;
        } catch (v) {
          it(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (ne(t, e), ce(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          er(t.containerInfo);
        } catch (v) {
          it(e, e.return, v);
        }
      break;
    case 4:
      ne(t, e), ce(e);
      break;
    case 13:
      ne(t, e),
        ce(e),
        (r = e.child),
        r.flags & 8192 &&
          ((s = r.memoizedState !== null),
          (r.stateNode.isHidden = s),
          !s ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (Ya = lt())),
        i & 4 && gc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((St = (u = St) || c), ne(t, e), (St = u)) : ne(t, e),
        ce(e),
        i & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (T = e, c = e.child; c !== null; ) {
            for (f = T = c; T !== null; ) {
              switch (((d = T), (p = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vi(4, d, d.return);
                  break;
                case 1:
                  Un(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (i = d), (n = d.return);
                    try {
                      (t = i),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      it(i, n, v);
                    }
                  }
                  break;
                case 5:
                  Un(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    yc(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = d), (T = p)) : yc(f);
            }
            c = c.sibling;
          }
        t: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (r = f.stateNode),
                  u
                    ? ((s = r.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = ld("display", o)));
              } catch (v) {
                it(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                it(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break t;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break t;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      ne(t, e), ce(e), i & 4 && gc(e);
      break;
    case 21:
      break;
    default:
      ne(t, e), ce(e);
  }
}
function ce(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      t: {
        for (var n = e.return; n !== null; ) {
          if (Rh(n)) {
            var i = n;
            break t;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (i.tag) {
        case 5:
          var r = i.stateNode;
          i.flags & 32 && (Zi(r, ""), (i.flags &= -33));
          var s = pc(e);
          Ql(e, s, r);
          break;
        case 3:
        case 4:
          var o = i.stateNode.containerInfo,
            l = pc(e);
          Yl(e, l, o);
          break;
        default:
          throw Error(M(161));
      }
    } catch (a) {
      it(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Um(e, t, n) {
  (T = e), Fh(e);
}
function Fh(e, t, n) {
  for (var i = (e.mode & 1) !== 0; T !== null; ) {
    var r = T,
      s = r.child;
    if (r.tag === 22 && i) {
      var o = r.memoizedState !== null || Br;
      if (!o) {
        var l = r.alternate,
          a = (l !== null && l.memoizedState !== null) || St;
        l = Br;
        var u = St;
        if (((Br = o), (St = a) && !u))
          for (T = r; T !== null; )
            (o = T),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? vc(r)
                : a !== null
                ? ((a.return = o), (T = a))
                : vc(r);
        for (; s !== null; ) (T = s), Fh(s), (s = s.sibling);
        (T = r), (Br = l), (St = u);
      }
      mc(e);
    } else
      r.subtreeFlags & 8772 && s !== null ? ((s.return = r), (T = s)) : mc(e);
  }
}
function mc(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              St || fo(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !St)
                if (n === null) i.componentDidMount();
                else {
                  var r =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ie(t.type, n.memoizedProps);
                  i.componentDidUpdate(
                    r,
                    n.memoizedState,
                    i.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Ju(t, s, i);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ju(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && er(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(M(163));
          }
        St || (t.flags & 512 && Ul(t));
      } catch (d) {
        it(t, t.return, d);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function yc(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function vc(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            fo(4, t);
          } catch (a) {
            it(t, n, a);
          }
          break;
        case 1:
          var i = t.stateNode;
          if (typeof i.componentDidMount == "function") {
            var r = t.return;
            try {
              i.componentDidMount();
            } catch (a) {
              it(t, r, a);
            }
          }
          var s = t.return;
          try {
            Ul(t);
          } catch (a) {
            it(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ul(t);
          } catch (a) {
            it(t, o, a);
          }
      }
    } catch (a) {
      it(t, t.return, a);
    }
    if (t === e) {
      T = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (T = l);
      break;
    }
    T = t.return;
  }
}
var Ym = Math.ceil,
  Fs = De.ReactCurrentDispatcher,
  Va = De.ReactCurrentOwner,
  Jt = De.ReactCurrentBatchConfig,
  F = 0,
  gt = null,
  ut = null,
  vt = 0,
  Wt = 0,
  Yn = on(0),
  dt = 0,
  dr = null,
  bn = 0,
  ho = 0,
  Ua = 0,
  Ui = null,
  Dt = null,
  Ya = 0,
  li = 1 / 0,
  Se = null,
  Is = !1,
  Xl = null,
  Ze = null,
  Hr = !1,
  We = null,
  js = 0,
  Yi = 0,
  Kl = null,
  ds = -1,
  hs = 0;
function Pt() {
  return F & 6 ? lt() : ds !== -1 ? ds : (ds = lt());
}
function qe(e) {
  return e.mode & 1
    ? F & 2 && vt !== 0
      ? vt & -vt
      : Pm.transition !== null
      ? (hs === 0 && (hs = _d()), hs)
      : ((e = W),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ed(e.type))),
        e)
    : 1;
}
function le(e, t, n, i) {
  if (50 < Yi) throw ((Yi = 0), (Kl = null), Error(M(185)));
  xr(e, n, i),
    (!(F & 2) || e !== gt) &&
      (e === gt && (!(F & 2) && (ho |= n), dt === 4 && je(e, vt)),
      It(e, i),
      n === 1 && F === 0 && !(t.mode & 1) && ((li = lt() + 500), ao && ln()));
}
function It(e, t) {
  var n = e.callbackNode;
  Pg(e, t);
  var i = ks(e, e === gt ? vt : 0);
  if (i === 0)
    n !== null && Eu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = i & -i), e.callbackPriority !== t)) {
    if ((n != null && Eu(n), t === 1))
      e.tag === 0 ? Em(xc.bind(null, e)) : Qd(xc.bind(null, e)),
        Sm(function () {
          !(F & 6) && ln();
        }),
        (n = null);
    else {
      switch (wd(i)) {
        case 1:
          n = ya;
          break;
        case 4:
          n = vd;
          break;
        case 16:
          n = ws;
          break;
        case 536870912:
          n = xd;
          break;
        default:
          n = ws;
      }
      n = Yh(n, Ih.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ih(e, t) {
  if (((ds = -1), (hs = 0), F & 6)) throw Error(M(327));
  var n = e.callbackNode;
  if (qn() && e.callbackNode !== n) return null;
  var i = ks(e, e === gt ? vt : 0);
  if (i === 0) return null;
  if (i & 30 || i & e.expiredLanes || t) t = Bs(e, i);
  else {
    t = i;
    var r = F;
    F |= 2;
    var s = Bh();
    (gt !== e || vt !== t) && ((Se = null), (li = lt() + 500), vn(e, t));
    do
      try {
        Km();
        break;
      } catch (l) {
        jh(e, l);
      }
    while (!0);
    Aa(),
      (Fs.current = s),
      (F = r),
      ut !== null ? (t = 0) : ((gt = null), (vt = 0), (t = dt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((r = wl(e)), r !== 0 && ((i = r), (t = Gl(e, r)))), t === 1)
    )
      throw ((n = dr), vn(e, 0), je(e, i), It(e, lt()), n);
    if (t === 6) je(e, i);
    else {
      if (
        ((r = e.current.alternate),
        !(i & 30) &&
          !Qm(r) &&
          ((t = Bs(e, i)),
          t === 2 && ((s = wl(e)), s !== 0 && ((i = s), (t = Gl(e, s)))),
          t === 1))
      )
        throw ((n = dr), vn(e, 0), je(e, i), It(e, lt()), n);
      switch (((e.finishedWork = r), (e.finishedLanes = i), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          hn(e, Dt, Se);
          break;
        case 3:
          if (
            (je(e, i), (i & 130023424) === i && ((t = Ya + 500 - lt()), 10 < t))
          ) {
            if (ks(e, 0) !== 0) break;
            if (((r = e.suspendedLanes), (r & i) !== i)) {
              Pt(), (e.pingedLanes |= e.suspendedLanes & r);
              break;
            }
            e.timeoutHandle = Tl(hn.bind(null, e, Dt, Se), t);
            break;
          }
          hn(e, Dt, Se);
          break;
        case 4:
          if ((je(e, i), (i & 4194240) === i)) break;
          for (t = e.eventTimes, r = -1; 0 < i; ) {
            var o = 31 - oe(i);
            (s = 1 << o), (o = t[o]), o > r && (r = o), (i &= ~s);
          }
          if (
            ((i = r),
            (i = lt() - i),
            (i =
              (120 > i
                ? 120
                : 480 > i
                ? 480
                : 1080 > i
                ? 1080
                : 1920 > i
                ? 1920
                : 3e3 > i
                ? 3e3
                : 4320 > i
                ? 4320
                : 1960 * Ym(i / 1960)) - i),
            10 < i)
          ) {
            e.timeoutHandle = Tl(hn.bind(null, e, Dt, Se), i);
            break;
          }
          hn(e, Dt, Se);
          break;
        case 5:
          hn(e, Dt, Se);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return It(e, lt()), e.callbackNode === n ? Ih.bind(null, e) : null;
}
function Gl(e, t) {
  var n = Ui;
  return (
    e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256),
    (e = Bs(e, t)),
    e !== 2 && ((t = Dt), (Dt = n), t !== null && $l(t)),
    e
  );
}
function $l(e) {
  Dt === null ? (Dt = e) : Dt.push.apply(Dt, e);
}
function Qm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var r = n[i],
            s = r.getSnapshot;
          r = r.value;
          try {
            if (!ae(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function je(e, t) {
  for (
    t &= ~Ua,
      t &= ~ho,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - oe(t),
      i = 1 << n;
    (e[n] = -1), (t &= ~i);
  }
}
function xc(e) {
  if (F & 6) throw Error(M(327));
  qn();
  var t = ks(e, 0);
  if (!(t & 1)) return It(e, lt()), null;
  var n = Bs(e, t);
  if (e.tag !== 0 && n === 2) {
    var i = wl(e);
    i !== 0 && ((t = i), (n = Gl(e, i)));
  }
  if (n === 1) throw ((n = dr), vn(e, 0), je(e, t), It(e, lt()), n);
  if (n === 6) throw Error(M(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    hn(e, Dt, Se),
    It(e, lt()),
    null
  );
}
function Qa(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((li = lt() + 500), ao && ln());
  }
}
function Cn(e) {
  We !== null && We.tag === 0 && !(F & 6) && qn();
  var t = F;
  F |= 1;
  var n = Jt.transition,
    i = W;
  try {
    if (((Jt.transition = null), (W = 1), e)) return e();
  } finally {
    (W = i), (Jt.transition = n), (F = t), !(F & 6) && ln();
  }
}
function Xa() {
  (Wt = Yn.current), $(Yn);
}
function vn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), km(n)), ut !== null))
    for (n = ut.return; n !== null; ) {
      var i = n;
      switch ((Ea(i), i.tag)) {
        case 1:
          (i = i.type.childContextTypes), i != null && Es();
          break;
        case 3:
          si(), $(Nt), $(bt), Na();
          break;
        case 5:
          za(i);
          break;
        case 4:
          si();
          break;
        case 13:
          $(J);
          break;
        case 19:
          $(J);
          break;
        case 10:
          La(i.type._context);
          break;
        case 22:
        case 23:
          Xa();
      }
      n = n.return;
    }
  if (
    ((gt = e),
    (ut = e = Je(e.current, null)),
    (vt = Wt = t),
    (dt = 0),
    (dr = null),
    (Ua = ho = bn = 0),
    (Dt = Ui = null),
    mn !== null)
  ) {
    for (t = 0; t < mn.length; t++)
      if (((n = mn[t]), (i = n.interleaved), i !== null)) {
        n.interleaved = null;
        var r = i.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = r), (i.next = o);
        }
        n.pending = i;
      }
    mn = null;
  }
  return e;
}
function jh(e, t) {
  do {
    var n = ut;
    try {
      if ((Aa(), (us.current = Ns), zs)) {
        for (var i = et.memoizedState; i !== null; ) {
          var r = i.queue;
          r !== null && (r.pending = null), (i = i.next);
        }
        zs = !1;
      }
      if (
        ((Sn = 0),
        (ht = ft = et = null),
        (Wi = !1),
        (ur = 0),
        (Va.current = null),
        n === null || n.return === null)
      ) {
        (dt = 1), (dr = t), (ut = null);
        break;
      }
      t: {
        var s = e,
          o = n.return,
          l = n,
          a = t;
        if (
          ((t = vt),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = oc(o);
          if (p !== null) {
            (p.flags &= -257),
              lc(p, o, l, s, t),
              p.mode & 1 && sc(s, u, t),
              (t = p),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else y.add(a);
            break t;
          } else {
            if (!(t & 1)) {
              sc(s, u, t), Ka();
              break t;
            }
            a = Error(M(426));
          }
        } else if (Z && l.mode & 1) {
          var x = oc(o);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              lc(x, o, l, s, t),
              Pa(oi(a, l));
            break t;
          }
        }
        (s = a = oi(a, l)),
          dt !== 4 && (dt = 2),
          Ui === null ? (Ui = [s]) : Ui.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var g = kh(s, a, t);
              qu(s, g);
              break t;
            case 1:
              l = a;
              var h = s.type,
                m = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Ze === null || !Ze.has(m))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var _ = Sh(s, l, t);
                qu(s, _);
                break t;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Wh(n);
    } catch (w) {
      (t = w), ut === n && n !== null && (ut = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Bh() {
  var e = Fs.current;
  return (Fs.current = Ns), e === null ? Ns : e;
}
function Ka() {
  (dt === 0 || dt === 3 || dt === 2) && (dt = 4),
    gt === null || (!(bn & 268435455) && !(ho & 268435455)) || je(gt, vt);
}
function Bs(e, t) {
  var n = F;
  F |= 2;
  var i = Bh();
  (gt !== e || vt !== t) && ((Se = null), vn(e, t));
  do
    try {
      Xm();
      break;
    } catch (r) {
      jh(e, r);
    }
  while (!0);
  if ((Aa(), (F = n), (Fs.current = i), ut !== null)) throw Error(M(261));
  return (gt = null), (vt = 0), dt;
}
function Xm() {
  for (; ut !== null; ) Hh(ut);
}
function Km() {
  for (; ut !== null && !xg(); ) Hh(ut);
}
function Hh(e) {
  var t = Uh(e.alternate, e, Wt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Wh(e) : (ut = t),
    (Va.current = null);
}
function Wh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Hm(n, t)), n !== null)) {
        (n.flags &= 32767), (ut = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (dt = 6), (ut = null);
        return;
      }
    } else if (((n = Bm(n, t, Wt)), n !== null)) {
      ut = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ut = t;
      return;
    }
    ut = t = e;
  } while (t !== null);
  dt === 0 && (dt = 5);
}
function hn(e, t, n) {
  var i = W,
    r = Jt.transition;
  try {
    (Jt.transition = null), (W = 1), Gm(e, t, n, i);
  } finally {
    (Jt.transition = r), (W = i);
  }
  return null;
}
function Gm(e, t, n, i) {
  do qn();
  while (We !== null);
  if (F & 6) throw Error(M(327));
  n = e.finishedWork;
  var r = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(M(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Tg(e, s),
    e === gt && ((ut = gt = null), (vt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Hr ||
      ((Hr = !0),
      Yh(ws, function () {
        return qn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Jt.transition), (Jt.transition = null);
    var o = W;
    W = 1;
    var l = F;
    (F |= 4),
      (Va.current = null),
      Vm(e, n),
      Nh(n, e),
      gm(El),
      (Ss = !!Ml),
      (El = Ml = null),
      (e.current = n),
      Um(n),
      _g(),
      (F = l),
      (W = o),
      (Jt.transition = s);
  } else e.current = n;
  if (
    (Hr && ((Hr = !1), (We = e), (js = r)),
    (s = e.pendingLanes),
    s === 0 && (Ze = null),
    Sg(n.stateNode),
    It(e, lt()),
    t !== null)
  )
    for (i = e.onRecoverableError, n = 0; n < t.length; n++)
      (r = t[n]), i(r.value, { componentStack: r.stack, digest: r.digest });
  if (Is) throw ((Is = !1), (e = Xl), (Xl = null), e);
  return (
    js & 1 && e.tag !== 0 && qn(),
    (s = e.pendingLanes),
    s & 1 ? (e === Kl ? Yi++ : ((Yi = 0), (Kl = e))) : (Yi = 0),
    ln(),
    null
  );
}
function qn() {
  if (We !== null) {
    var e = wd(js),
      t = Jt.transition,
      n = W;
    try {
      if (((Jt.transition = null), (W = 16 > e ? 16 : e), We === null))
        var i = !1;
      else {
        if (((e = We), (We = null), (js = 0), F & 6)) throw Error(M(331));
        var r = F;
        for (F |= 4, T = e.current; T !== null; ) {
          var s = T,
            o = s.child;
          if (T.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (T = u; T !== null; ) {
                  var c = T;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vi(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (T = f);
                  else
                    for (; T !== null; ) {
                      c = T;
                      var d = c.sibling,
                        p = c.return;
                      if ((Dh(c), c === u)) {
                        T = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = p), (T = d);
                        break;
                      }
                      T = p;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var x = v.sibling;
                    (v.sibling = null), (v = x);
                  } while (v !== null);
                }
              }
              T = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (T = o);
          else
            t: for (; T !== null; ) {
              if (((s = T), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vi(9, s, s.return);
                }
              var g = s.sibling;
              if (g !== null) {
                (g.return = s.return), (T = g);
                break t;
              }
              T = s.return;
            }
        }
        var h = e.current;
        for (T = h; T !== null; ) {
          o = T;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (T = m);
          else
            t: for (o = h; T !== null; ) {
              if (((l = T), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fo(9, l);
                  }
                } catch (w) {
                  it(l, l.return, w);
                }
              if (l === o) {
                T = null;
                break t;
              }
              var _ = l.sibling;
              if (_ !== null) {
                (_.return = l.return), (T = _);
                break t;
              }
              T = l.return;
            }
        }
        if (
          ((F = r), ln(), ye && typeof ye.onPostCommitFiberRoot == "function")
        )
          try {
            ye.onPostCommitFiberRoot(io, e);
          } catch {}
        i = !0;
      }
      return i;
    } finally {
      (W = n), (Jt.transition = t);
    }
  }
  return !1;
}
function _c(e, t, n) {
  (t = oi(n, t)),
    (t = kh(e, t, 1)),
    (e = $e(e, t, 1)),
    (t = Pt()),
    e !== null && (xr(e, 1, t), It(e, t));
}
function it(e, t, n) {
  if (e.tag === 3) _c(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        _c(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof i.componentDidCatch == "function" &&
            (Ze === null || !Ze.has(i)))
        ) {
          (e = oi(n, e)),
            (e = Sh(t, e, 1)),
            (t = $e(t, e, 1)),
            (e = Pt()),
            t !== null && (xr(t, 1, e), It(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function $m(e, t, n) {
  var i = e.pingCache;
  i !== null && i.delete(t),
    (t = Pt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    gt === e &&
      (vt & n) === n &&
      (dt === 4 || (dt === 3 && (vt & 130023424) === vt && 500 > lt() - Ya)
        ? vn(e, 0)
        : (Ua |= n)),
    It(e, t);
}
function Vh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Lr), (Lr <<= 1), !(Lr & 130023424) && (Lr = 4194304))
      : (t = 1));
  var n = Pt();
  (e = Le(e, t)), e !== null && (xr(e, t, n), It(e, n));
}
function Zm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Vh(e, n);
}
function qm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var i = e.stateNode,
        r = e.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      i = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  i !== null && i.delete(t), Vh(e, n);
}
var Uh;
Uh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Nt.current) zt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (zt = !1), jm(e, t, n);
      zt = !!(e.flags & 131072);
    }
  else (zt = !1), Z && t.flags & 1048576 && Xd(t, As, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var i = t.type;
      fs(e, t), (e = t.pendingProps);
      var r = ni(t, bt.current);
      Zn(t, n), (r = Ia(null, t, i, e, r, n));
      var s = ja();
      return (
        (t.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ft(i) ? ((s = !0), Ps(t)) : (s = !1),
            (t.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            Da(t),
            (r.updater = uo),
            (t.stateNode = r),
            (r._reactInternals = t),
            Nl(t, i, e, n),
            (t = jl(null, t, i, !0, s, n)))
          : ((t.tag = 0), Z && s && Ma(t), Et(null, t, r, n), (t = t.child)),
        t
      );
    case 16:
      i = t.elementType;
      t: {
        switch (
          (fs(e, t),
          (e = t.pendingProps),
          (r = i._init),
          (i = r(i._payload)),
          (t.type = i),
          (r = t.tag = t0(i)),
          (e = ie(i, e)),
          r)
        ) {
          case 0:
            t = Il(null, t, i, e, n);
            break t;
          case 1:
            t = cc(null, t, i, e, n);
            break t;
          case 11:
            t = ac(null, t, i, e, n);
            break t;
          case 14:
            t = uc(null, t, i, ie(i.type, e), n);
            break t;
        }
        throw Error(M(306, i, ""));
      }
      return t;
    case 0:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : ie(i, r)),
        Il(e, t, i, r, n)
      );
    case 1:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : ie(i, r)),
        cc(e, t, i, r, n)
      );
    case 3:
      t: {
        if ((Eh(t), e === null)) throw Error(M(387));
        (i = t.pendingProps),
          (s = t.memoizedState),
          (r = s.element),
          Zd(e, t),
          Ds(t, i, null, n);
        var o = t.memoizedState;
        if (((i = o.element), s.isDehydrated))
          if (
            ((s = {
              element: i,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (r = oi(Error(M(423)), t)), (t = fc(e, t, i, n, r));
            break t;
          } else if (i !== r) {
            (r = oi(Error(M(424)), t)), (t = fc(e, t, i, n, r));
            break t;
          } else
            for (
              Vt = Ge(t.stateNode.containerInfo.firstChild),
                Ut = t,
                Z = !0,
                se = null,
                n = eh(t, null, i, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ii(), i === r)) {
            t = Oe(e, t, n);
            break t;
          }
          Et(e, t, i, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        nh(t),
        e === null && Dl(t),
        (i = t.type),
        (r = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = r.children),
        Pl(i, r) ? (o = null) : s !== null && Pl(i, s) && (t.flags |= 32),
        Mh(e, t),
        Et(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Dl(t), null;
    case 13:
      return Ph(e, t, n);
    case 4:
      return (
        Ra(t, t.stateNode.containerInfo),
        (i = t.pendingProps),
        e === null ? (t.child = ri(t, null, i, n)) : Et(e, t, i, n),
        t.child
      );
    case 11:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : ie(i, r)),
        ac(e, t, i, r, n)
      );
    case 7:
      return Et(e, t, t.pendingProps, n), t.child;
    case 8:
      return Et(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Et(e, t, t.pendingProps.children, n), t.child;
    case 10:
      t: {
        if (
          ((i = t.type._context),
          (r = t.pendingProps),
          (s = t.memoizedProps),
          (o = r.value),
          Q(Ls, i._currentValue),
          (i._currentValue = o),
          s !== null)
        )
          if (ae(s.value, o)) {
            if (s.children === r.children && !Nt.current) {
              t = Oe(e, t, n);
              break t;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === i) {
                    if (s.tag === 1) {
                      (a = Pe(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      Rl(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(M(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  Rl(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Et(e, t, r.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (r = t.type),
        (i = t.pendingProps.children),
        Zn(t, n),
        (r = te(r)),
        (i = i(r)),
        (t.flags |= 1),
        Et(e, t, i, n),
        t.child
      );
    case 14:
      return (
        (i = t.type),
        (r = ie(i, t.pendingProps)),
        (r = ie(i.type, r)),
        uc(e, t, i, r, n)
      );
    case 15:
      return bh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : ie(i, r)),
        fs(e, t),
        (t.tag = 1),
        Ft(i) ? ((e = !0), Ps(t)) : (e = !1),
        Zn(t, n),
        Jd(t, i, r),
        Nl(t, i, r, n),
        jl(null, t, i, !0, e, n)
      );
    case 19:
      return Th(e, t, n);
    case 22:
      return Ch(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function Yh(e, t) {
  return yd(e, t);
}
function Jm(e, t, n, i) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = i),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Zt(e, t, n, i) {
  return new Jm(e, t, n, i);
}
function Ga(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function t0(e) {
  if (typeof e == "function") return Ga(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === pa)) return 11;
    if (e === ga) return 14;
  }
  return 2;
}
function Je(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Zt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ps(e, t, n, i, r, s) {
  var o = 2;
  if (((i = e), typeof e == "function")) Ga(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    t: switch (e) {
      case zn:
        return xn(n.children, r, s, t);
      case ha:
        (o = 8), (r |= 8);
        break;
      case ol:
        return (
          (e = Zt(12, n, t, r | 2)), (e.elementType = ol), (e.lanes = s), e
        );
      case ll:
        return (e = Zt(13, n, t, r)), (e.elementType = ll), (e.lanes = s), e;
      case al:
        return (e = Zt(19, n, t, r)), (e.elementType = al), (e.lanes = s), e;
      case td:
        return po(n, r, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case qf:
              o = 10;
              break t;
            case Jf:
              o = 9;
              break t;
            case pa:
              o = 11;
              break t;
            case ga:
              o = 14;
              break t;
            case Ne:
              (o = 16), (i = null);
              break t;
          }
        throw Error(M(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Zt(o, n, t, r)), (t.elementType = e), (t.type = i), (t.lanes = s), t
  );
}
function xn(e, t, n, i) {
  return (e = Zt(7, e, i, t)), (e.lanes = n), e;
}
function po(e, t, n, i) {
  return (
    (e = Zt(22, e, i, t)),
    (e.elementType = td),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ko(e, t, n) {
  return (e = Zt(6, e, null, t)), (e.lanes = n), e;
}
function Go(e, t, n) {
  return (
    (t = Zt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function e0(e, t, n, i, r) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = To(0)),
    (this.expirationTimes = To(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = To(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function $a(e, t, n, i, r, s, o, l, a) {
  return (
    (e = new e0(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Zt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Da(s),
    e
  );
}
function n0(e, t, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Rn,
    key: i == null ? null : "" + i,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Qh(e) {
  if (!e) return nn;
  e = e._reactInternals;
  t: {
    if (Tn(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break t;
        case 1:
          if (Ft(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break t;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ft(n)) return Yd(e, n, t);
  }
  return t;
}
function Xh(e, t, n, i, r, s, o, l, a) {
  return (
    (e = $a(n, i, !0, e, r, s, o, l, a)),
    (e.context = Qh(null)),
    (n = e.current),
    (i = Pt()),
    (r = qe(n)),
    (s = Pe(i, r)),
    (s.callback = t ?? null),
    $e(n, s, r),
    (e.current.lanes = r),
    xr(e, r, i),
    It(e, i),
    e
  );
}
function go(e, t, n, i) {
  var r = t.current,
    s = Pt(),
    o = qe(r);
  return (
    (n = Qh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Pe(s, o)),
    (t.payload = { element: e }),
    (i = i === void 0 ? null : i),
    i !== null && (t.callback = i),
    (e = $e(r, t, o)),
    e !== null && (le(e, r, o, s), as(e, r, o)),
    o
  );
}
function Hs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function wc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Za(e, t) {
  wc(e, t), (e = e.alternate) && wc(e, t);
}
function i0() {
  return null;
}
var Kh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function qa(e) {
  this._internalRoot = e;
}
mo.prototype.render = qa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  go(e, t, null, null);
};
mo.prototype.unmount = qa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cn(function () {
      go(null, e, null, null);
    }),
      (t[Ae] = null);
  }
};
function mo(e) {
  this._internalRoot = e;
}
mo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = bd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ie.length && t !== 0 && t < Ie[n].priority; n++);
    Ie.splice(n, 0, e), n === 0 && Md(e);
  }
};
function Ja(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function kc() {}
function r0(e, t, n, i, r) {
  if (r) {
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var u = Hs(o);
        s.call(u);
      };
    }
    var o = Xh(t, i, e, 0, null, !1, !1, "", kc);
    return (
      (e._reactRootContainer = o),
      (e[Ae] = o.current),
      rr(e.nodeType === 8 ? e.parentNode : e),
      Cn(),
      o
    );
  }
  for (; (r = e.lastChild); ) e.removeChild(r);
  if (typeof i == "function") {
    var l = i;
    i = function () {
      var u = Hs(a);
      l.call(u);
    };
  }
  var a = $a(e, 0, !1, null, null, !1, !1, "", kc);
  return (
    (e._reactRootContainer = a),
    (e[Ae] = a.current),
    rr(e.nodeType === 8 ? e.parentNode : e),
    Cn(function () {
      go(t, a, n, i);
    }),
    a
  );
}
function vo(e, t, n, i, r) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var a = Hs(o);
        l.call(a);
      };
    }
    go(t, o, e, r);
  } else o = r0(n, t, e, r, i);
  return Hs(o);
}
kd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ti(t.pendingLanes);
        n !== 0 &&
          (va(t, n | 1), It(t, lt()), !(F & 6) && ((li = lt() + 500), ln()));
      }
      break;
    case 13:
      Cn(function () {
        var i = Le(e, 1);
        if (i !== null) {
          var r = Pt();
          le(i, e, 1, r);
        }
      }),
        Za(e, 1);
  }
};
xa = function (e) {
  if (e.tag === 13) {
    var t = Le(e, 134217728);
    if (t !== null) {
      var n = Pt();
      le(t, e, 134217728, n);
    }
    Za(e, 134217728);
  }
};
Sd = function (e) {
  if (e.tag === 13) {
    var t = qe(e),
      n = Le(e, t);
    if (n !== null) {
      var i = Pt();
      le(n, e, t, i);
    }
    Za(e, t);
  }
};
bd = function () {
  return W;
};
Cd = function (e, t) {
  var n = W;
  try {
    return (W = e), t();
  } finally {
    W = n;
  }
};
vl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((fl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var i = n[t];
          if (i !== e && i.form === e.form) {
            var r = lo(i);
            if (!r) throw Error(M(90));
            nd(i), fl(i, r);
          }
        }
      }
      break;
    case "textarea":
      rd(e, n);
      break;
    case "select":
      (t = n.value), t != null && Xn(e, !!n.multiple, t, !1);
  }
};
fd = Qa;
dd = Cn;
var s0 = { usingClientEntryPoint: !1, Events: [wr, jn, lo, ud, cd, Qa] },
  wi = {
    findFiberByHostInstance: gn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  o0 = {
    bundleType: wi.bundleType,
    version: wi.version,
    rendererPackageName: wi.rendererPackageName,
    rendererConfig: wi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: De.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = gd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wi.findFiberByHostInstance || i0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Wr.isDisabled && Wr.supportsFiber)
    try {
      (io = Wr.inject(o0)), (ye = Wr);
    } catch {}
}
Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = s0;
Qt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ja(t)) throw Error(M(200));
  return n0(e, t, null, n);
};
Qt.createRoot = function (e, t) {
  if (!Ja(e)) throw Error(M(299));
  var n = !1,
    i = "",
    r = Kh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
    (t = $a(e, 1, !1, null, null, n, !1, i, r)),
    (e[Ae] = t.current),
    rr(e.nodeType === 8 ? e.parentNode : e),
    new qa(t)
  );
};
Qt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(M(188))
      : ((e = Object.keys(e).join(",")), Error(M(268, e)));
  return (e = gd(t)), (e = e === null ? null : e.stateNode), e;
};
Qt.flushSync = function (e) {
  return Cn(e);
};
Qt.hydrate = function (e, t, n) {
  if (!yo(t)) throw Error(M(200));
  return vo(null, e, t, !0, n);
};
Qt.hydrateRoot = function (e, t, n) {
  if (!Ja(e)) throw Error(M(405));
  var i = (n != null && n.hydratedSources) || null,
    r = !1,
    s = "",
    o = Kh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Xh(t, null, e, 1, n ?? null, r, !1, s, o)),
    (e[Ae] = t.current),
    rr(e),
    i)
  )
    for (e = 0; e < i.length; e++)
      (n = i[e]),
        (r = n._getVersion),
        (r = r(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, r])
          : t.mutableSourceEagerHydrationData.push(n, r);
  return new mo(t);
};
Qt.render = function (e, t, n) {
  if (!yo(t)) throw Error(M(200));
  return vo(null, e, t, !1, n);
};
Qt.unmountComponentAtNode = function (e) {
  if (!yo(e)) throw Error(M(40));
  return e._reactRootContainer
    ? (Cn(function () {
        vo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ae] = null);
        });
      }),
      !0)
    : !1;
};
Qt.unstable_batchedUpdates = Qa;
Qt.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
  if (!yo(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return vo(e, t, n, !1, i);
};
Qt.version = "18.2.0-next-9e3b772b8-20220608";
function Gh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gh);
    } catch (e) {
      console.error(e);
    }
}
Gh(), (Xf.exports = Qt);
var l0 = Xf.exports,
  Sc = l0;
(rl.createRoot = Sc.createRoot), (rl.hydrateRoot = Sc.hydrateRoot);
const a0 = "/assets/cookie-book-U6z3ThHp.png",
  Be = {
    twitter: "https://x.com/CookiesTokens?t=rxqfhoGon_K5BuKxnVK0JQ&s=09",
    telegram: "https://t.me/cookiestokens",
    bot: "https://t.me/cookienft_bot",
    getGems:
      "https://getgems.io/collection/EQAfIQSXAcjCI50UxKOFk7Tjo7o6w-Vc4dPS9Q8MwrFYM8Tm",
    locks:
      "https://tonraffles.app/lock/EQDdKkzOKps7IlK0Fv4EJmHDIvOZQ7LtsCa-ve4qJpopF4oq",
    buy: "https://dedust.io/swap/TON/EQDdKkzOKps7IlK0Fv4EJmHDIvOZQ7LtsCa-ve4qJpopF4oq?amount=1000000000",
    contact: "https://t.me/cookietokenmanager",
  };
function u0() {
  return C.jsxs("section", {
    id: "nft",
    className: "relative",
    children: [
      C.jsx("div", {
        className:
          "grid container mx-auto items-center gap-[100px] pt-[100px] mb-[200px]",
        children: C.jsxs("div", {
          className: "relative z-[1]",
          children: [
            C.jsx("h1", {
              className:
                "font-medium text-[40px] sm:text-[66px] xl:text-[96px] mb-7",
              children: "NFT Collection",
            }),
            C.jsxs("p", {
              className:
                "text-[28px] xl:text-[48px] text-[#E0E0E0] max-w-[1115px] mb-[88px]",
              children: [
                "We don`t like the idea of buying NFT as just pictures. Our NFTs are designed to join the private chat of NFT holders. This gives great potential to the growth of NFT. You can join the club thanks to the",
                " ",
                C.jsx("a", {
                  href: Be.bot,
                  target: "_blanck",
                  className:
                    "transition hover:text-[#000000] active:text-[#ffffff] focus:text-[#000000]",
                  children: "bot.",
                }),
              ],
            }),
            C.jsx("a", {
              href: Be.getGems,
              target: "_blanck",
              className:
                "px-[70px] w-fit transition hover:bg-white hover:text-[#000000] active:bg-[#735B05] active:text-[#ffffff] focus:bg-white focus:text-[#000000] font-medium py-2 rounded-[50px] bg-[#735B05] text-[28px] sm:text-[48px]",
              children: "Get Gems",
            }),
          ],
        }),
      }),
      C.jsx("img", {
        className:
          "absolute w-[336px] sm:w-[436px] lg:w-[736px] right-5 bottom-[20%] md:bottom-1/2 translate-y-1/2",
        src: a0,
      }),
    ],
  });
}
const c0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABRCAYAAACnkTpxAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA+FSURBVHgB7V0LdI1XFt6JdxDikYcgCPIgQRFKIpGISDzykAdBPII0WmnCdJJUUEsTERrKoDotSevRZbIoVaXRiYpWm9FptaZjUbSlD/WYttIgL/PtSGYh++fg3uTeZPZaZ5Hce/c9Z//n7P3tb59zYkKQ06dPN5kyZcqKixcvdjMxMTGlu6X81q1b/O+tql/g51t4n0nljyb3vJ8qXzIxNTVtwO8tLy8vxc/Xx48fv2rlypVHycgEQzAdPHhw4uXLl4fRbXvwAMtZeKwuLi5Hd+/evQL/LxUVTJgwIaJJkyZ/0G0j6qV16dLlFDphRUYkMGRDT0/P5zFR2HDVxtS2bdvT0dHRTg9S0uDJJ59cBOuXk56My7qHDh2avWfPHjMyAuEZOmrUqLmYdNdJGE/79u3PxcTEDFBSlpeX19Te3j6P9Dh70dGSoKCgZDJwYcPCVU7QmrEtW7a8hBnb72F0UmJiYhcrK6sTpEcDYyldyczMdCMDloCAgMAWLVr8h4T+N2/e/OfJkyf70qMInpinlv81Nzcvs7a2/rJdu3YFWBb5aIfQ8u5oH8J4H3Hj183MzK5Kerp3737q8OHD7ckAJTY2tj9m5k8k9Ltp06aFWHnhlUHt4YWj46BBg1IaNmx4817lDRo0KE9ISJiuqnzSpEkj0dFfpI7Cx287d+5cUzIgmTZtmgf6e4Zkw/4xevToqWwfehx54403mnfr1m2P9CWYuT8uXLhwoIqexYsXm/r4+MRJgRKdLZ46dWrcI88CHcuLL75o16pVK9GwmFSlHh4euosV7H+xtM9KX+bk5PTPI0eOtFTRs2/fviYODg67JD0YzNUZM2YMp1oWBKfuiDVfktBHDmpAOckI+A1Jl4IvHdW4cWMRioSGhr6sOuuys7Pb2tjY/EvS4+zs/Hl+fr4F1ZJs2LDBEhj87yQbtszV1XXDsWPHGpGuhY3HT02CJAyrZs+ePVPVwHgYXs2aNfudhEH4+vr+jTNFqmHZuXNnW7i/I1KfuD3xxBOreOWRvmTZsmUWwL/7pC+H2/g5LS3NUUXPjh07GiDbSYb/KiEhUCI9nlWT/hff1QioZQdpGBZj3quXGXuvwNnbtmnTRvS//fr1K8AMsFTRw7OzZ8+e20mGeVcXLFgwjGpA2H8ibrymlZHC6Dlr1qwxp5qSkJCQCMCzG/d2pDKtXcMzU0UPyBs7CwuLb0kYFEiQLzHw1qRHYb6gf//+y9DvMqkPnTt3/hhJgg3VpPCShW9M1IJVwL8TVHU988wzmv4X+fxmnUfmSuExDBs27GWtGWtra3t08+bNen24msL8A5bMASIxrb20fPlypbS2MlDGS/4X6KQULJ3O8S+7JH9//0Qtw8LtfT1z5syuVJuSkpLSAx35hoQOdu3aNR/RVclXHThwoDn8noh/W7dufTUjI6Mv6Uj4QcGw84FwijW+79RTTz3VmwxBwsPDxzZq1Kia/2Vc6OXltVI1rUUG1xk8xWckDLh3794fb9++vRPpQJCGB2vxHMxwBQcHu5OhCOfXWNap0hLDsr4RGRk5SVUXEhUfLaLI3d19k2qgvI/+oWC4fpX0w+8XIkP0J0MT5h8cHR3fIaHTSCUv5uTkuKroYf4BQSxO40GVYLnG0CMKGL4BMOwFqY8Iwr8juEWQoUpSUlI34NMfSOh8nz59Pj9+/HhzFT2VgP49SQ9g269ZWVn96SEFDJcLguy/JZ2AlMXDhw+f89gMlz6FA0VgYGAwCGSRWAZFt4JxpYouMGT2YNyOkxwoP0UAVEpUWMAX2FpaWn4h6WKGC4Z9/nHdTY0IY1JkaUs08O81YNrJKnr4QTH/i0BZjUfmQAnX8ZoK/8B8ARKBT0kwLDfwyKlGYdgq4eXfo0ePwyQMBrTiLyhKdlbRU5moPK/lf5E5zb7f55kHsbOzE90Lz1hkgGuMyrBVsnTpUnvgXzF4uLm5fXD+/PlmKnp4dgL/7iU5UPKDEomi119/vSUC7FatJKFXr15b161b14KMVbB0gzHDiuiegfGA8dpGRgYqeoAQbIF/T5FgJKyQr3jp3/l+Zq/gmu5HxBxg45MxC5ZcY3Cgy3kJkuB/wf8Gqeh5UKAEhFp34sSJxvxesFdNBg4cuEoyLP+uU6dOeehXK6oLwvgXzP77JBgFs/HCihUrlNJMNjAKpUmS0ZBtFYMHiObNLDC0Jl/QsWPHTwDJrKkuCfyvA/J1Ef8OGDAgD8tYadcNvw+VAvFBQf8FQKr1WtkdoNhxrBQlIt/oJCoqKlDiH3iWRURErFZlvcC0dUTFQ6zKajUglJ/i4uIMg4jRh7Dx2P8yRqXq/rcYs2q6qi74Xz9OV0nNsGcQEB9uq5ExChPPiO65JBihQ4cO37755pvdVfQwNgWJk6K1d6uqIQBeQVY4muqLgHVyYFqPBGP07ds3V5X5ZyiFQLmbNAyLmV2EIqefoWwyqTEBXzpDY3tUqZ+f30JVgwAnd0ei8h0JxgXOPX/mzJm6AbkeRiprVy9IkImrA6j6hqnqio2NHcyYmQQDwzdnGzTTpS9hIA/cKRIqNjY2F7du3dpNVReqt+nSg8LqKAVRFEX1UeLj45206m/I/ffn5uYqLeuNGze2QkorbhQEbPs+PT3dheqjgGOYKPlfYOIyFBHTVf0viPruSCS0NgoeQqCsW5mZirDxAKtWkwylbiJp8FHVBYJ9nPSguHl7e2fWO+TAwuV3wCqR/wXRcjY7O1uV/zVFCrxESlRQfLyZnJwcSvVReJ+A1vZ4Z2fng6hwKHGvzI6hDCTyD6ihXQZRpFQorVPCSzYkJCQUUKwarOKqAxKtJapVg+eee64HDCnyv/C/+QcPHmxL9U14WSNLyyTBKJjVRcjuxqnqCg0NDeGq7r16GLKNGDFiDdOTVN+Et//37NnzEMn49yzgmXL9TWujCgLl9enTpxvuHgV9CSL+UMzSK6TBGQwePHif6vYo9tPgfz8g+UFd2LZtW93kdyVBUGPDnicNw1Llsvbx8UlTTWuZILewsBB1Ojg4fHHy5EnjrqWpCDgCVxhBiQTnvV7z5s1TOvXD7iEsLCxSq0KBILqwTvtfsFs9kQY/VHUB/O85fM5ZRT8bDyxZmuR/gX//gP9VJuqNSlB+6QxDiVuN2BhAD+8z6S29jvrbblX/CyLIAonKIUkP+IcfUEit3Y3OupaMjAxrBJwPSRgwZ1koC73C5fkxY8ZMksrz3MLDw19Q/b61a9d2wAr5XtLTp0+fj1QLpQYvMFobBBRxyz83zNitb7/9dkWw4bNfYMm2a8Cqm6AVvVW/19fXd6KUqLBuLy+v9Bo5DqVPgWGbwVjbSMOwvCMGhM1dURz+tZ2dnd1B6f2oy51DWqu0rDnLgztZLj0oIJVCIJbxRkvwcO7v4uLyitbGDfACufv3728jfXbixImuWNY/kuyb3+VzFaQgvEHP1tY2j2T8+92cOXOcyNiE9+Yia0rS8p9gwD7FEu9wPx28BUq6CoUNjIJkEikKVoYDyu4XpX64ubm9h742JmMRXmrIrlKl41B0e8bk89JX0GOK+hvf/1BNj7m5+Y1FixaNJ0XBShgr4V9+UAEBAcuNov7Ghg0KCpoq8azcOHkAk2Wvqo/L71rbmlCX+4l3kqvqAkp4RTo9iaLnzZiYmLEG7X+5c2ChZklbSen2bDuLQSglA3dKQkKCZlln4MCB76ne/8CIxN7e/l2S8e/3WVlZvcgQhZdVVFTUTDMzs0ISOg8YdSkiImIkPaKMHDlyNmlgZFCOiap65s+f74i+/CbpQmU5zyDxL4LTXBhWhFs8GPCzj3WYjtNaR0fHLEk/YNX11NRU5fobH/zTOigeGBiYajDugWcsyt2RgDvVOssNld1rfn5+U0gHAgPawJBi1QHp7lngWiX8yw8K/vcljf2/RU8//XQwGYK8+uqr0xD9xXO1fDoHPjhKlzMBwXIk35YkfV/v3r33qvIPaWlpfPJHvCkE/vcSAmkXqk3hDRioJFwmoYOMbwHHXtA1xccrBbWxBVJZvfLUz59UrxVAhuYGSlPcqA3/u3PXrl21c0UAM09wBV+T0DFuyN0X6Mt3McGDqP+W9L0w1jWwbwGquvz9/aM0rocpAzeRXuP+l5cUZqzIF/CM5WtO9A3K+WYlZHmfSH0AL/E10mOlU+88y8E//EXSw/xvfHz8CKop4UstXF1dt2vxBWC/dtTUbaOZmZndtG7dc3d3f0f1eCwfVOQrWCQ9WJ3nVQ8qPpYwBkQuvlYrrcVS3T137twavaeRrwGErxXTWqS881RXEJ9yB/8gHlR0dnbeX0WJ6kUq8/zV97kj5mPVm0J0Kex/+eip1C++dQT8g5+KHvat48aNC5PwL1BPKVDKYr3U35g69PDwWKR1qxFKN5/BNynvsdW1rF+/nss6R6W+gX84hQegtKz5QQHO/VXSA/x7jU8pkS6FZ6ynp2eCdPSJbs+Ok8nJybW+JwC0ohP68jMJfUR5/i3VWcf7hBEoCyQ9eIBnwD/r5mqsyj1ds6Wj+nTbsBdAqhgM2eHt7T1N2tbE/AN4jSWqekCw80Ud4kZBEEWHVS/q0BSesWPHjp3C99aQjCcvxcbGDiEDki1btpgDBr6lUX8rQtVBmd9AfIkB/yseFEcQffT9Dzxjo6Ojw9Ah8fIdLn8z+UEGKKtXr7aytLQ8RjKaOaGa1nLxErP0ZUkP4N+1Z599Vnmj4F3CDJbWsoCLKEH5W6d8ga4lMjIyUJp13AAl96riXxBS7aysrESiCH75G96HIX1O0zApKSlOyH72X7lypdoH+cZQQJLEnJwcZpRukYEK3+1QUFAQhyxtZXl5+V3Ll8cQHh6+CPEip6yszIQb/00NZGPwgI1Ni4qKSvC7UpBDZfi5vLi4eAzIqZdKSkqq4WUgqHcRSMOGDBly/YGdgtN3wpMST9wwUYKo+2djKUXzstYq6+iqcaBEopLxQJssXbq0BzDhPyQlzBcg/15lbHfEbNq0qT2SG9H/6qrxRc1JSUnaG1WY4QInW6CloFevXqvgf4xy+8+sWbOGIAHQ3AOsi4ZAeZInZ7Uv5+Iecuf3tT6I1HKLsW/7AWGfoE/3wPAMKzu36nqYCuGtRn379hVPg7M/gdG31MZ94roWHjQGv+l+f3+IX+MxVzV2hXwNgerfLGL+AfA0qeIPb/GXMhBG9B9UWFhohqhYcX62qkMMuWD4rzIyMq5RHRBMpBbAuMMxzv/FDaCCijHDDpyB3gR+rRg/jFpxlzpeN8X7G964caMJ7NGg8jP858gYYZgyYqpq+H2JtbX1b0hkPqP/i/7kv0BKwBRUjxy5AAAAAElFTkSuQmCC",
  f0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAABLCAYAAABz5qkHAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAz8SURBVHgB7Z15dBRFHsd/Vd09V+4Ecs3kBGVVLvFiQVwn4AVCAGEMNwEEvFZd13VdD4zrW9/zeeCBuy7ItQhmOFRALhVQEFFuRUAgx2QSIfc9R7q7arsR30MgyRzdQ6PzeS//9FTPS+pb9atf/X6/qgCECRMmTJgw2gBBGEWZuak6ZXuV+0+EQFy3SO7LTfckH0EIUQiCsEgK8Ngup/Hzk2RIuZc+0iLQgSKlBvk5Rog3m/DCKenpDxVYkQABEhYpQCil6I7CymuOuLwzar1kfBulXS/WDgOIfWN1o/aMt6yDAGEhjM/Y7ZR5weXMdFG4LW5+yQMtAlxDz+jQPgSAqWoj+ZKo6wM1e2GROkGeMbetLI52erj+jzSXTqnjYYRAaIQ/39HcRrLhZ6sVFklJ7nrzhL4uXtctfYFjVBNh8luImC0pFtDywLGoDQIUSCYs0jmcWWc+rOx6spkfckAQJ9c2iTmSueIgSJINuByCICySxKTNpyMOnhZ6py1xjG70kskuERJBQbJNKCg3/Hcr0pxtlN1R6cw45qZj1pe5723maZ/OnIBAwAhoPIe3QBD8rkSSzdmg5WWxdaI45K0TpaNdhN7NE4gEFdFjaOqeZvoeguB3IdJdG6i+0lXeI3lB6TgPgXtaCOoeqBPgL9EcU+TpFdMIQfCbFukGe0lyjYcdtrvCMdolkMECBT2EmCiOflOAEIEg+M2J9PCGE/rPqvQ31Ql07NE6kusmfBoEg7SmSJ3UGMWh4y087c1TMPjzusXAffkjBMdvQqSza01WmZdMXOyECW5RuIIqEPJiMHKlGfG8q+LYl9cNT63NXux8q8wtPOjr+xyGti4REXsgSC5rkSZsOBG9t9pk7fJeycPNPEiBTf9GeXtI6tIYFn3brys3e8tI8yH52VVLyyZXeMWp/nyPAaHqnMSYU4UQHJedSHL87BVS0fNUqzB5jZPaeNGbqqTrzCKo7xbJPHWjQJYsHmXxPD9nG1uY3e3PxS7xX6Kfa1q0Dh+ZdR24IUguC5FkczZsZWnSSQ++7b6G0gelzWZvQqkRFETaz/ApBnZTepTu0Z1jkouPSM/G2g/rljZHveh0iY9R6n9fRTD4awgylySjaZFmrq0wfVorDEt6zzGykad3iiDGSZ2luOscyaGj6Sb2r89yls22MUiUnz2wrSpyVVHrwro2cUwg65tsMqNZ+A4UQHMinXECPqzofbJOzF1xyjvBTSA7kFHsC5Jpa0k3MfP6GnWvrrSlVNvOPh+5pjyh8LirsEGkgyFAdBha403kKCiAZkSa+mFJ7NY6PCJpgWO81DkDREKjQCV+HuVoZ1cdfurY5PRd58bVcuxO87Ya4eMWkVwHQWDCqGxclt6xEYLnkmZm51DKbljkuLGMSlEAno71EmqhKv9OegaqzXrmmdxr9e+/0ie59dzPrPbqHvvrW1a2iLQXBEm6CS8rnpIxGV2Oa5JszoauqTAfbuSHv7XAMamZF/sRQKpHAhjJMUjQ4fVmDj+3d3L64VfO+3zgsvL+e+tbV7hEmgkKoGOYvUoIJBMykc4UaxTB0Pj5JflS/OyGNgpdf46fqT+ZoyXHoAvHPTF+inmzFKL5VUGIPGiuW+q07Wvm5/GUJoACMAiJcRj/AAqhag/NmTMHf3XVrB5HW7yz6gUYwhPSQ5o1IRsYHIJms5F9o09ixLtrhiZckHiTBfrDEse0UjeZK8X1FIuGR7CobtoVsdfNtcaVggKoItLYTY3xP1Q3jHW6yDhp2PZpE2kshJhYHfo6EqHHS6dl7L6Y2ZHzSUsdzid/8ohPCgo7KUl6/NXaaRnW6xHiQQEUG9WyE/DJ+2U3OTx0xieOukGSMNn0EjgmBil/kxXF/t0a533/raFXNKHpF7aZuqjEsLjY+eqpNuE+KYoQdHr8fKJYtFcpgWSCFmncZ5VJu5zu6a/OLx3Oi7SvoFD8zG+kaHUyh1alRDIv7M1LP3y4nWZyvG9TOSyoEYQxag0iliEHQEECEulNKYk2v6Z88GkveXT18VareIn3W9LIdVwVx03fNca8tSOPatTm04mbHe719QK9AVSClSLfyUbDEcW8BvCzc+9eVXXFwRbPzKecpVM84sUrNkMJA1Qwm5i51yczL62801LX0bQYvOp09naHe3WTQPuCikQy6PTkq8Xiz0E5fJruo1eXW3bWC3PreTKCqGDDAyGWQ3syTPj+/RMy9nXWdsCikr7feWG1m9BsUJl0I7OueGp6rlJ7JJlOZ9LtH5T32VTDf+wVaQZoACne5rkymntidKqwoMCa4emsfZ8lTusBl/BBG6WKlmm1hxHDfiUFkulQJLvdzsxqaHvRK8IlF0iOGEiu7arukVzBNpv5R1/Kb6REXd6xVv5dyZmJhhAgJbWIjkWKOg1nv7cDxo6VUsD4kgdhTQw6nmZgbdMcGRNlgTprL20HcK8ljllFreLCUAkko5Oi6lkx7HFQmE7XpOuXV1z7YwtvdwmkO4QYKREnJhvxSyMs8XPnDYmu9eUdeZNa6Ch7tsgl/oOE2OuUoupHVvQ33WTtmdgCCuKT43D/+oa4LVWNtkZCbc08uVkanTpQmQQ93pVtok/vHpe13dd3pm4rMWwtxa//5CYzKVDFq1E748oIZtnRKRmTQGH83sxN+6g6dUtD610eHoZJ3lKO5IrHgIIYMGqWBHquIDP9P/lW1Klj8AtyPmpjLV5Sy4vD1cje+sKV0boHj060vAMKE9QfI6eYP63w9HO1ieOb2miui0AyBIiciEs0MGsHJhlnrxyWeNqfd3OWVyYdaHZvbBLJtXCJkLxOvn88d8cX96ZtA4VRbMTNsVPdSr68b2ubmNvAE1urAN18DbuYWFTeI0r34J681HX+uq+32E9nHar3rJIyqf3gEmLEqPbxHtF9C6wJQR1zuRiqmAXZu1q/svya+lYyuJGnkxpF0vtidQpYyrukmph3h6UbnnzH6v9iO8Be3vdwvbC6VSSqb1I7I55DB6tmZN6AUOAHmNtDddt95mDWusrMokbvoCYPyW8Q6CApasFEsXj/LUkwY21uZkD7ioGFTuvBBmGFtCYmgQbIkpyGkyo4DTKqu6hnzVfJ2Z+lszc3J35TXdtrhDnji0COzcuz1P6/8vy9dfxrodwDdcSZwhYd/hJU4rK6IsBuP6x73hMz+2Qr/7J4CU5ItIcOIfetcZCzMS9rN6hAyPcSgSJ7kk82Rz5zvJV/VUsCyXCY1ky8Oi7YwxPtclmING55RZe1Re7XnF7yjFqFksGgZ3DR+F4xDaASmq8FH7iiLHVrC/92jUBHgkbNc1c9OqR05PtcNC/SyRbx7RqejgKNggCROD37NaiI5s2dm8A1oGH0mLZeHaFTPD1xLpoWSdpjYcmGKBobVBoDgyvy47o4QUU0LVJpKehEAqoV7iuBDsPRAQNQ0AfFOkLTIu2prdeLQDVRU9EeKSZ2L6iMpkX6ocoVJYeQQKOwiAqxjBj0weXO0LRI37tJCtHw78hhXPvHBHwEVEbTIlV5ccD5qVCgx1A2JMdSCSqjaZHqRTHOn/YsBsXqr33BxDCHrSqkJs5H0yLxBPl8HEVKfZTc0lVv7aLDL8lnYUFlEAJqMcBOCAHaFkkkKb60i2bxsWuj2VGf3mP+qnJ6xtPdTEy+EeNiUBHJ5fSk6JmDEAI0LZKULzJ31iaKQwd6xurv2ZZnOXNziXxvwpEpGasGJRlvj2fRFimmJoIK6BlUPTw7VdWB8AuaFslLUHxHn8ewaE/PKC5vhy3lAg9r46ikoqd6siNTDfifUoBS8Qi1gUFFpR9BE4QATYskEtJu5jWaQzu6x6J7d+ZZ2q0Y/cuANHdZfkZBdpRuopFBx0BBEvT4UEFBcFek+YqmRSIILurdSR20sXukbsK3tswS8IGjkyyfDE823ZqiZ99jELSBAqTq8S4IEZoVSS5gIYAuECnZgDek6WD6nnFmv4KaK3KTKl+LSpuVauD+xiGogiCQaxrSIpEiV9L4gpZnEpLM3a8uSTcbmY9TI+n0fZMyT0EA2GxILM1Pe6N/nCk3CqP9KMC7uiNZXDfpD6kOCBGaFWkfAEPPuYQjxcQsy05gZ+yxZflV3Xoxtucl77Z1i8lJ1LP/lvZULvCTBB3abc3yvQQ6WLQr0vbmGJ5So1xAaTHgV9JM+JHtI8w1oBD/vS2+sWJa2kOZRvSQASO/zF+XEG1if0Gz6XNjvMudFcnOtBh1X3w+JrlYDdtyti5h0ex1zi2FP4mFTSIZ6Mt7HGJ3QAgJ/2ues9gpZZ5Y6Hj5VBt5uKO7HUwM1M3oxVlel9x7CBGXTd2d2tgks+qYnvn4zXH6u6WNartF92lGvCiUAsmERTqPrXnmLcOTIm+KZtFGfF5IqaueOTkqg3sDQkzY3HVAzgel/b5vgaGAUZIOkSJbCrv09TvT6iBMmDCXIf8Hg5Uer7NzjQgAAAAASUVORK5CYII=";
function d0() {
  return C.jsxs("header", {
    className:
      "flex z-[2] flex-col sm:flex-row pt-4 sm:pt-0 absolute top-0 left-0 right-0 gap-4 sm:gap-[50px] items-center justify-center",
    children: [
      C.jsxs("div", {
        className: "flex items-center",
        children: [
          C.jsx("a", {
            href: Be.twitter,
            target: "_blanck",
            className:
              "transition hover:scale-110 focus:scale-110 active:scale-100",
            children: C.jsx("img", {
              className: "w-[38px] md:w-[58px]",
              src: c0,
            }),
          }),
          C.jsx("a", {
            href: Be.telegram,
            target: "_blanck",
            className:
              "transition hover:scale-110 focus:scale-110 active:scale-100",
            children: C.jsx("img", {
              className: "w-[50px] md:w-[70px]",
              src: f0,
            }),
          }),
        ],
      }),
      C.jsxs("nav", {
        className:
          "flex gap-4 md:gap-[50px] items-center text-xl sm:text-2xl lg:text-4xl",
        children: [
          C.jsx("a", {
            className:
              "py-2 sm:py-[25px] transition outline-none hover:text-[#FFFBA4] active:text-[#ffffff] focus:text-[#FFFBA4]",
            href: "#nft",
            children: "NFT",
          }),
          C.jsx("a", {
            className:
              "py-2 sm:py-[25px] transition outline-none hover:text-[#FFFBA4] active:text-[#ffffff] focus:text-[#FFFBA4]",
            href: Be.buy,
            target: "_blanck",
            children: "Buy Cookie",
          }),
          C.jsx("a", {
            className:
              "py-2 sm:py-[25px] transition outline-none hover:text-[#FFFBA4] active:text-[#ffffff] focus:text-[#FFFBA4]",
            href: Be.bot,
            target: "_blanck",
            children: "Products",
          }),
          C.jsx("a", {
            className:
              "py-2 sm:py-[25px] transition outline-none hover:text-[#FFFBA4] active:text-[#ffffff] focus:text-[#FFFBA4]",
            href: Be.contact,
            target: "_blanck",
            children: "Contact",
          }),
        ],
      }),
    ],
  });
}
const $h = "/assets/cookie-BdlQc59Y.png";
function h0() {
  return C.jsxs("section", {
    className:
      "md:grid relative container mx-auto md:grid-cols-[1fr,1fr] items-center gap-[30px] md:gap-[100px] pt-[150px] sm:py-[100px]",
    children: [
      C.jsx("img", {
        className: "w-[200px] md:w-auto absolute md:static right-0 bottom-0",
        src: $h,
      }),
      C.jsxs("div", {
        className: "relative z-[1] grid gap-[40px] sm:gap-0",
        children: [
          C.jsx("h1", {
            className:
              "font-medium text-[40px] sm:text-[66px] xl:text-[96px] sm:mb-7",
            children: "Cookie Token",
          }),
          C.jsx("p", {
            className:
              "text-[28px] xl:text-[48px] text-[#E0E0E0] mb-10 sm:mb-[88px]",
            children:
              "A meme token on the TON blockchain with open functionality! A fair distribution model, a Fair Launch on Ton Raffles, no private or public sales, offers by investors, etc.",
          }),
          C.jsx("a", {
            href: "#about",
            className:
              "px-[50px] w-fit transition hover:bg-white hover:text-[#000000] active:bg-[#735B05] active:text-[#ffffff] focus:bg-white focus:text-[#000000] font-medium py-2 rounded-[50px] bg-[#735B05] text-[28px] lg:text-[48px]",
            children: "About coin",
          }),
        ],
      }),
    ],
  });
}
const p0 = "/assets/cookie-farmer-DXMH-nCT.png";
function g0() {
  return C.jsxs("section", {
    className: "grid relative items-center gap-[60px] pb-[100px]",
    children: [
      C.jsx("div", {
        className: "relative z-[1]",
        children: C.jsxs("div", {
          className: "flex flex-col justify-center text-center",
          children: [
            C.jsx("h1", {
              className: "font-medium text-[34px] sm:text-[64px]",
              children: "Road-Map",
            }),
            C.jsx("p", {
              className:
                "text-[26px] sm:text-[36px] font-medium text-[#E0E0E0]",
              children: "Some points can be changed or supplemented.",
            }),
          ],
        }),
      }),
      C.jsxs("div", {
        className:
          "grid relative z-[1] grid-cols-[150px,16px,150px] sm:grid-cols-[300px,16px,300px] xl:grid-cols-[530px,16px,530px] mx-auto",
        children: [
          C.jsxs("div", {
            children: [
              C.jsx("div", { className: "h-[200px]" }),
              C.jsxs("div", {
                className: "h-[300px] relative",
                children: [
                  C.jsx("div", {
                    className:
                      "text-2xl xl:text-4xl font-medium text-[#FFFBA4]",
                    children: "The end of the Fair Launch",
                  }),
                  C.jsx("p", {
                    className: "text-xl xl:text-[32px]",
                    children:
                      "After the end of FairLaunch, we collected 2325.98 TON, thereby creating the first liquidity on DeDust, in the amount of 1,400 TONS, as well as 590 TON were allocated for development.",
                  }),
                  C.jsx("i", {
                    className:
                      "absolute block w-[30px] h-[30px] bg-white rounded-[50%] -right-[23px] top-0",
                  }),
                ],
              }),
              C.jsx("div", { className: "h-[200px]" }),
            ],
          }),
          C.jsx("div", { className: "bg-white  rounded-[15px]" }),
          C.jsxs("div", {
            className: "pl-2 xl:pl-7",
            children: [
              C.jsxs("div", {
                className: "h-[200px] relative",
                children: [
                  C.jsx("div", {
                    className:
                      "text-2xl xl:text-4xl font-medium text-[#FFFBA4]",
                    children: "Initial Stage",
                  }),
                  C.jsx("p", {
                    className: "text-xl xl:text-[32px]",
                    children:
                      "Creating a coin, and launching it on Ton Raffles.",
                  }),
                  C.jsx("i", {
                    className:
                      "absolute block w-[30px] h-[30px] bg-white rounded-[50%] -left-[31px] xl:-left-[51px] top-0",
                  }),
                ],
              }),
              C.jsx("div", { className: "h-[300px]" }),
              C.jsxs("div", {
                className: "h-[200px] relative",
                children: [
                  C.jsx("div", {
                    className:
                      "text-2xl xl:text-4xl font-medium text-[#FFFBA4]",
                    children: "Development and integrations",
                  }),
                  C.jsx("p", {
                    className: "text-xl xl:text-[32px]",
                    children:
                      "Successful listing on DeDust, confirmation in TonKepeer and token promotion.",
                  }),
                  C.jsx("i", {
                    className:
                      "absolute block w-[30px] h-[30px] bg-white rounded-[50%] -left-[31px] xl:-left-[51px] top-0",
                  }),
                ],
              }),
            ],
          }),
          C.jsxs("div", {
            className:
              "flex mt-[100px] col-span-3 sm:mt-9 relative z-[1] flex-col items-center justify-center gap-2 text-center",
            children: [
              C.jsx("i", {
                className: "block w-[30px] h-[30px] bg-white rounded-[50%]",
              }),
              C.jsx("div", {
                className: "text-xl xl:text-[32px]",
                children: "No one knows what will happen next",
              }),
            ],
          }),
        ],
      }),
      C.jsx("img", {
        className:
          "w-[240px] lg:w-[540px] absolute pointer-events-none right-0 bottom-1/2 translate-y-1/2 xl:translate-y-0 xl:bottom-0",
        src: p0,
      }),
      C.jsx("img", {
        className:
          "absolute w-[436px] lg:w-[736px] pointer-events-none opacity-50 -left-[200px] top-0 xl:-bottom-[50px]",
        src: $h,
      }),
    ],
  });
}
const m0 = "/assets/cookie-bg-CuYurwZo.png";
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function Sr(e) {
  return (e + 0.5) | 0;
}
const Ve = (e, t, n) => Math.max(Math.min(e, n), t);
function Li(e) {
  return Ve(Sr(e * 2.55), 0, 255);
}
function tn(e) {
  return Ve(Sr(e * 255), 0, 255);
}
function Ce(e) {
  return Ve(Sr(e / 2.55) / 100, 0, 1);
}
function bc(e) {
  return Ve(Sr(e * 100), 0, 100);
}
const Kt = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  Zl = [..."0123456789ABCDEF"],
  y0 = (e) => Zl[e & 15],
  v0 = (e) => Zl[(e & 240) >> 4] + Zl[e & 15],
  Vr = (e) => (e & 240) >> 4 === (e & 15),
  x0 = (e) => Vr(e.r) && Vr(e.g) && Vr(e.b) && Vr(e.a);
function _0(e) {
  var t = e.length,
    n;
  return (
    e[0] === "#" &&
      (t === 4 || t === 5
        ? (n = {
            r: 255 & (Kt[e[1]] * 17),
            g: 255 & (Kt[e[2]] * 17),
            b: 255 & (Kt[e[3]] * 17),
            a: t === 5 ? Kt[e[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (n = {
            r: (Kt[e[1]] << 4) | Kt[e[2]],
            g: (Kt[e[3]] << 4) | Kt[e[4]],
            b: (Kt[e[5]] << 4) | Kt[e[6]],
            a: t === 9 ? (Kt[e[7]] << 4) | Kt[e[8]] : 255,
          })),
    n
  );
}
const w0 = (e, t) => (e < 255 ? t(e) : "");
function k0(e) {
  var t = x0(e) ? y0 : v0;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + w0(e.a, t) : void 0;
}
const S0 =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Zh(e, t, n) {
  const i = t * Math.min(n, 1 - n),
    r = (s, o = (s + e / 30) % 12) =>
      n - i * Math.max(Math.min(o - 3, 9 - o, 1), -1);
  return [r(0), r(8), r(4)];
}
function b0(e, t, n) {
  const i = (r, s = (r + e / 60) % 6) =>
    n - n * t * Math.max(Math.min(s, 4 - s, 1), 0);
  return [i(5), i(3), i(1)];
}
function C0(e, t, n) {
  const i = Zh(e, 1, 0.5);
  let r;
  for (t + n > 1 && ((r = 1 / (t + n)), (t *= r), (n *= r)), r = 0; r < 3; r++)
    (i[r] *= 1 - t - n), (i[r] += t);
  return i;
}
function M0(e, t, n, i, r) {
  return e === r
    ? (t - n) / i + (t < n ? 6 : 0)
    : t === r
    ? (n - e) / i + 2
    : (e - t) / i + 4;
}
function tu(e) {
  const n = e.r / 255,
    i = e.g / 255,
    r = e.b / 255,
    s = Math.max(n, i, r),
    o = Math.min(n, i, r),
    l = (s + o) / 2;
  let a, u, c;
  return (
    s !== o &&
      ((c = s - o),
      (u = l > 0.5 ? c / (2 - s - o) : c / (s + o)),
      (a = M0(n, i, r, c, s)),
      (a = a * 60 + 0.5)),
    [a | 0, u || 0, l]
  );
}
function eu(e, t, n, i) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, i)).map(tn);
}
function nu(e, t, n) {
  return eu(Zh, e, t, n);
}
function E0(e, t, n) {
  return eu(C0, e, t, n);
}
function P0(e, t, n) {
  return eu(b0, e, t, n);
}
function qh(e) {
  return ((e % 360) + 360) % 360;
}
function T0(e) {
  const t = S0.exec(e);
  let n = 255,
    i;
  if (!t) return;
  t[5] !== i && (n = t[6] ? Li(+t[5]) : tn(+t[5]));
  const r = qh(+t[2]),
    s = +t[3] / 100,
    o = +t[4] / 100;
  return (
    t[1] === "hwb"
      ? (i = E0(r, s, o))
      : t[1] === "hsv"
      ? (i = P0(r, s, o))
      : (i = nu(r, s, o)),
    { r: i[0], g: i[1], b: i[2], a: n }
  );
}
function A0(e, t) {
  var n = tu(e);
  (n[0] = qh(n[0] + t)), (n = nu(n)), (e.r = n[0]), (e.g = n[1]), (e.b = n[2]);
}
function L0(e) {
  if (!e) return;
  const t = tu(e),
    n = t[0],
    i = bc(t[1]),
    r = bc(t[2]);
  return e.a < 255
    ? `hsla(${n}, ${i}%, ${r}%, ${Ce(e.a)})`
    : `hsl(${n}, ${i}%, ${r}%)`;
}
const Cc = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  Mc = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function O0() {
  const e = {},
    t = Object.keys(Mc),
    n = Object.keys(Cc);
  let i, r, s, o, l;
  for (i = 0; i < t.length; i++) {
    for (o = l = t[i], r = 0; r < n.length; r++)
      (s = n[r]), (l = l.replace(s, Cc[s]));
    (s = parseInt(Mc[o], 16)),
      (e[l] = [(s >> 16) & 255, (s >> 8) & 255, s & 255]);
  }
  return e;
}
let Ur;
function D0(e) {
  Ur || ((Ur = O0()), (Ur.transparent = [0, 0, 0, 0]));
  const t = Ur[e.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const R0 =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function z0(e) {
  const t = R0.exec(e);
  let n = 255,
    i,
    r,
    s;
  if (t) {
    if (t[7] !== i) {
      const o = +t[7];
      n = t[8] ? Li(o) : Ve(o * 255, 0, 255);
    }
    return (
      (i = +t[1]),
      (r = +t[3]),
      (s = +t[5]),
      (i = 255 & (t[2] ? Li(i) : Ve(i, 0, 255))),
      (r = 255 & (t[4] ? Li(r) : Ve(r, 0, 255))),
      (s = 255 & (t[6] ? Li(s) : Ve(s, 0, 255))),
      { r: i, g: r, b: s, a: n }
    );
  }
}
function N0(e) {
  return (
    e &&
    (e.a < 255
      ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Ce(e.a)})`
      : `rgb(${e.r}, ${e.g}, ${e.b})`)
  );
}
const $o = (e) =>
    e <= 0.0031308 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055,
  On = (e) => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4));
function F0(e, t, n) {
  const i = On(Ce(e.r)),
    r = On(Ce(e.g)),
    s = On(Ce(e.b));
  return {
    r: tn($o(i + n * (On(Ce(t.r)) - i))),
    g: tn($o(r + n * (On(Ce(t.g)) - r))),
    b: tn($o(s + n * (On(Ce(t.b)) - s))),
    a: e.a + n * (t.a - e.a),
  };
}
function Yr(e, t, n) {
  if (e) {
    let i = tu(e);
    (i[t] = Math.max(0, Math.min(i[t] + i[t] * n, t === 0 ? 360 : 1))),
      (i = nu(i)),
      (e.r = i[0]),
      (e.g = i[1]),
      (e.b = i[2]);
  }
}
function Jh(e, t) {
  return e && Object.assign(t || {}, e);
}
function Ec(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(e)
      ? e.length >= 3 &&
        ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
        e.length > 3 && (t.a = tn(e[3])))
      : ((t = Jh(e, { r: 0, g: 0, b: 0, a: 1 })), (t.a = tn(t.a))),
    t
  );
}
function I0(e) {
  return e.charAt(0) === "r" ? z0(e) : T0(e);
}
class hr {
  constructor(t) {
    if (t instanceof hr) return t;
    const n = typeof t;
    let i;
    n === "object"
      ? (i = Ec(t))
      : n === "string" && (i = _0(t) || D0(t) || I0(t)),
      (this._rgb = i),
      (this._valid = !!i);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Jh(this._rgb);
    return t && (t.a = Ce(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Ec(t);
  }
  rgbString() {
    return this._valid ? N0(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? k0(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? L0(this._rgb) : void 0;
  }
  mix(t, n) {
    if (t) {
      const i = this.rgb,
        r = t.rgb;
      let s;
      const o = n === s ? 0.5 : n,
        l = 2 * o - 1,
        a = i.a - r.a,
        u = ((l * a === -1 ? l : (l + a) / (1 + l * a)) + 1) / 2;
      (s = 1 - u),
        (i.r = 255 & (u * i.r + s * r.r + 0.5)),
        (i.g = 255 & (u * i.g + s * r.g + 0.5)),
        (i.b = 255 & (u * i.b + s * r.b + 0.5)),
        (i.a = o * i.a + (1 - o) * r.a),
        (this.rgb = i);
    }
    return this;
  }
  interpolate(t, n) {
    return t && (this._rgb = F0(this._rgb, t._rgb, n)), this;
  }
  clone() {
    return new hr(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = tn(t)), this;
  }
  clearer(t) {
    const n = this._rgb;
    return (n.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      n = Sr(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return (t.r = t.g = t.b = n), this;
  }
  opaquer(t) {
    const n = this._rgb;
    return (n.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return Yr(this._rgb, 2, t), this;
  }
  darken(t) {
    return Yr(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Yr(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Yr(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return A0(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.2
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ function _e() {}
const j0 = (() => {
  let e = 0;
  return () => e++;
})();
function tt(e) {
  return e === null || typeof e > "u";
}
function rt(e) {
  if (Array.isArray && Array.isArray(e)) return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function I(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function pt(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function Bt(e, t) {
  return pt(e) ? e : t;
}
function B(e, t) {
  return typeof e > "u" ? t : e;
}
const B0 = (e, t) =>
    typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 : +e / t,
  tp = (e, t) =>
    typeof e == "string" && e.endsWith("%") ? (parseFloat(e) / 100) * t : +e;
function Y(e, t, n) {
  if (e && typeof e.call == "function") return e.apply(n, t);
}
function H(e, t, n, i) {
  let r, s, o;
  if (rt(e))
    if (((s = e.length), i)) for (r = s - 1; r >= 0; r--) t.call(n, e[r], r);
    else for (r = 0; r < s; r++) t.call(n, e[r], r);
  else if (I(e))
    for (o = Object.keys(e), s = o.length, r = 0; r < s; r++)
      t.call(n, e[o[r]], o[r]);
}
function Ws(e, t) {
  let n, i, r, s;
  if (!e || !t || e.length !== t.length) return !1;
  for (n = 0, i = e.length; n < i; ++n)
    if (
      ((r = e[n]),
      (s = t[n]),
      r.datasetIndex !== s.datasetIndex || r.index !== s.index)
    )
      return !1;
  return !0;
}
function Vs(e) {
  if (rt(e)) return e.map(Vs);
  if (I(e)) {
    const t = Object.create(null),
      n = Object.keys(e),
      i = n.length;
    let r = 0;
    for (; r < i; ++r) t[n[r]] = Vs(e[n[r]]);
    return t;
  }
  return e;
}
function ep(e) {
  return ["__proto__", "prototype", "constructor"].indexOf(e) === -1;
}
function H0(e, t, n, i) {
  if (!ep(e)) return;
  const r = t[e],
    s = n[e];
  I(r) && I(s) ? pr(r, s, i) : (t[e] = Vs(s));
}
function pr(e, t, n) {
  const i = rt(t) ? t : [t],
    r = i.length;
  if (!I(e)) return e;
  n = n || {};
  const s = n.merger || H0;
  let o;
  for (let l = 0; l < r; ++l) {
    if (((o = i[l]), !I(o))) continue;
    const a = Object.keys(o);
    for (let u = 0, c = a.length; u < c; ++u) s(a[u], e, o, n);
  }
  return e;
}
function Qi(e, t) {
  return pr(e, t, { merger: W0 });
}
function W0(e, t, n) {
  if (!ep(e)) return;
  const i = t[e],
    r = n[e];
  I(i) && I(r)
    ? Qi(i, r)
    : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = Vs(r));
}
const Pc = { "": (e) => e, x: (e) => e.x, y: (e) => e.y };
function V0(e) {
  const t = e.split("."),
    n = [];
  let i = "";
  for (const r of t)
    (i += r),
      i.endsWith("\\") ? (i = i.slice(0, -1) + ".") : (n.push(i), (i = ""));
  return n;
}
function U0(e) {
  const t = V0(e);
  return (n) => {
    for (const i of t) {
      if (i === "") break;
      n = n && n[i];
    }
    return n;
  };
}
function gr(e, t) {
  return (Pc[t] || (Pc[t] = U0(t)))(e);
}
function iu(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Us = (e) => typeof e < "u",
  rn = (e) => typeof e == "function",
  Tc = (e, t) => {
    if (e.size !== t.size) return !1;
    for (const n of e) if (!t.has(n)) return !1;
    return !0;
  };
function Y0(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const ct = Math.PI,
  st = 2 * ct,
  Ys = Number.POSITIVE_INFINITY,
  Q0 = ct / 180,
  at = ct / 2,
  an = ct / 4,
  Ac = (ct * 2) / 3,
  Ue = Math.log10,
  Qs = Math.sign;
function gs(e, t, n) {
  return Math.abs(e - t) < n;
}
function Lc(e) {
  const t = Math.round(e);
  e = gs(e, t, e / 1e3) ? t : e;
  const n = Math.pow(10, Math.floor(Ue(e))),
    i = e / n;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
}
function X0(e) {
  const t = [],
    n = Math.sqrt(e);
  let i;
  for (i = 1; i < n; i++) e % i === 0 && (t.push(i), t.push(e / i));
  return n === (n | 0) && t.push(n), t.sort((r, s) => r - s).pop(), t;
}
function Xs(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function K0(e, t) {
  const n = Math.round(e);
  return n - t <= e && n + t >= e;
}
function np(e, t, n) {
  let i, r, s;
  for (i = 0, r = e.length; i < r; i++)
    (s = e[i][n]),
      isNaN(s) || ((t.min = Math.min(t.min, s)), (t.max = Math.max(t.max, s)));
}
function me(e) {
  return e * (ct / 180);
}
function ru(e) {
  return e * (180 / ct);
}
function Oc(e) {
  if (!pt(e)) return;
  let t = 1,
    n = 0;
  for (; Math.round(e * t) / t !== e; ) (t *= 10), n++;
  return n;
}
function ip(e, t) {
  const n = t.x - e.x,
    i = t.y - e.y,
    r = Math.sqrt(n * n + i * i);
  let s = Math.atan2(i, n);
  return s < -0.5 * ct && (s += st), { angle: s, distance: r };
}
function G0(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function pe(e) {
  return ((e % st) + st) % st;
}
function Ks(e, t, n, i) {
  const r = pe(e),
    s = pe(t),
    o = pe(n),
    l = pe(s - r),
    a = pe(o - r),
    u = pe(r - s),
    c = pe(r - o);
  return r === s || r === o || (i && s === o) || (l > a && u < c);
}
function qt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function $0(e) {
  return qt(e, -32768, 32767);
}
function Oi(e, t, n, i = 1e-6) {
  return e >= Math.min(t, n) - i && e <= Math.max(t, n) + i;
}
function su(e, t, n) {
  n = n || ((o) => e[o] < t);
  let i = e.length - 1,
    r = 0,
    s;
  for (; i - r > 1; ) (s = (r + i) >> 1), n(s) ? (r = s) : (i = s);
  return { lo: r, hi: i };
}
const ql = (e, t, n, i) =>
    su(
      e,
      n,
      i
        ? (r) => {
            const s = e[r][t];
            return s < n || (s === n && e[r + 1][t] === n);
          }
        : (r) => e[r][t] < n
    ),
  Z0 = (e, t, n) => su(e, n, (i) => e[i][t] >= n);
function q0(e, t, n) {
  let i = 0,
    r = e.length;
  for (; i < r && e[i] < t; ) i++;
  for (; r > i && e[r - 1] > n; ) r--;
  return i > 0 || r < e.length ? e.slice(i, r) : e;
}
const rp = ["push", "pop", "shift", "splice", "unshift"];
function J0(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    rp.forEach((n) => {
      const i = "_onData" + iu(n),
        r = e[n];
      Object.defineProperty(e, n, {
        configurable: !0,
        enumerable: !1,
        value(...s) {
          const o = r.apply(this, s);
          return (
            e._chartjs.listeners.forEach((l) => {
              typeof l[i] == "function" && l[i](...s);
            }),
            o
          );
        },
      });
    });
}
function Dc(e, t) {
  const n = e._chartjs;
  if (!n) return;
  const i = n.listeners,
    r = i.indexOf(t);
  r !== -1 && i.splice(r, 1),
    !(i.length > 0) &&
      (rp.forEach((s) => {
        delete e[s];
      }),
      delete e._chartjs);
}
function ty(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const sp = (function () {
  return typeof window > "u"
    ? function (e) {
        return e();
      }
    : window.requestAnimationFrame;
})();
function op(e, t) {
  let n = [],
    i = !1;
  return function (...r) {
    (n = r),
      i ||
        ((i = !0),
        sp.call(window, () => {
          (i = !1), e.apply(t, n);
        }));
  };
}
function ey(e, t) {
  let n;
  return function (...i) {
    return (
      t ? (clearTimeout(n), (n = setTimeout(e, t, i))) : e.apply(this, i), t
    );
  };
}
const lp = (e) => (e === "start" ? "left" : e === "end" ? "right" : "center"),
  jt = (e, t, n) => (e === "start" ? t : e === "end" ? n : (t + n) / 2),
  ny = (e, t, n, i) =>
    e === (i ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t,
  Qr = (e) => e === 0 || e === 1,
  Rc = (e, t, n) =>
    -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * st) / n)),
  zc = (e, t, n) => Math.pow(2, -10 * e) * Math.sin(((e - t) * st) / n) + 1,
  Xi = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => -e * (e - 2),
    easeInOutQuad: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => (e -= 1) * e * e + 1,
    easeInOutCubic: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
    easeInOutQuart: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
    easeInOutQuint: (e) =>
      (e /= 0.5) < 1
        ? 0.5 * e * e * e * e * e
        : 0.5 * ((e -= 2) * e * e * e * e + 2),
    easeInSine: (e) => -Math.cos(e * at) + 1,
    easeOutSine: (e) => Math.sin(e * at),
    easeInOutSine: (e) => -0.5 * (Math.cos(ct * e) - 1),
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * (e - 1))),
    easeOutExpo: (e) => (e === 1 ? 1 : -Math.pow(2, -10 * e) + 1),
    easeInOutExpo: (e) =>
      Qr(e)
        ? e
        : e < 0.5
        ? 0.5 * Math.pow(2, 10 * (e * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
    easeInCirc: (e) => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
    easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
    easeInOutCirc: (e) =>
      (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
    easeInElastic: (e) => (Qr(e) ? e : Rc(e, 0.075, 0.3)),
    easeOutElastic: (e) => (Qr(e) ? e : zc(e, 0.075, 0.3)),
    easeInOutElastic(e) {
      return Qr(e)
        ? e
        : e < 0.5
        ? 0.5 * Rc(e * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * zc(e * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(e) {
      return e * e * ((1.70158 + 1) * e - 1.70158);
    },
    easeOutBack(e) {
      return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
    },
    easeInOutBack(e) {
      let t = 1.70158;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    },
    easeInBounce: (e) => 1 - Xi.easeOutBounce(1 - e),
    easeOutBounce(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    },
    easeInOutBounce: (e) =>
      e < 0.5
        ? Xi.easeInBounce(e * 2) * 0.5
        : Xi.easeOutBounce(e * 2 - 1) * 0.5 + 0.5,
  };
function ap(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Nc(e) {
  return ap(e) ? e : new hr(e);
}
function Zo(e) {
  return ap(e) ? e : new hr(e).saturate(0.5).darken(0.1).hexString();
}
const iy = ["x", "y", "borderWidth", "radius", "tension"],
  ry = ["color", "borderColor", "backgroundColor"];
function sy(e) {
  e.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    e.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (t) =>
        t !== "onProgress" && t !== "onComplete" && t !== "fn",
    }),
    e.set("animations", {
      colors: { type: "color", properties: ry },
      numbers: { type: "number", properties: iy },
    }),
    e.describe("animations", { _fallback: "animation" }),
    e.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (t) => t | 0 },
        },
      },
    });
}
function oy(e) {
  e.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const Fc = new Map();
function ly(e, t) {
  t = t || {};
  const n = e + JSON.stringify(t);
  let i = Fc.get(n);
  return i || ((i = new Intl.NumberFormat(e, t)), Fc.set(n, i)), i;
}
function xo(e, t, n) {
  return ly(t, n).format(e);
}
const up = {
  values(e) {
    return rt(e) ? e : "" + e;
  },
  numeric(e, t, n) {
    if (e === 0) return "0";
    const i = this.chart.options.locale;
    let r,
      s = e;
    if (n.length > 1) {
      const u = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (u < 1e-4 || u > 1e15) && (r = "scientific"), (s = ay(e, n));
    }
    const o = Ue(Math.abs(s)),
      l = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0),
      a = { notation: r, minimumFractionDigits: l, maximumFractionDigits: l };
    return Object.assign(a, this.options.ticks.format), xo(e, i, a);
  },
  logarithmic(e, t, n) {
    if (e === 0) return "0";
    const i = n[t].significand || e / Math.pow(10, Math.floor(Ue(e)));
    return [1, 2, 3, 5, 10, 15].includes(i) || t > 0.8 * n.length
      ? up.numeric.call(this, e, t, n)
      : "";
  },
};
function ay(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n;
}
var _o = { formatters: up };
function uy(e) {
  e.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, n) => n.lineWidth,
      tickColor: (t, n) => n.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: _o.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    e.route("scale.ticks", "color", "", "color"),
    e.route("scale.grid", "color", "", "borderColor"),
    e.route("scale.border", "color", "", "borderColor"),
    e.route("scale.title", "color", "", "color"),
    e.describe("scale", {
      _fallback: !1,
      _scriptable: (t) =>
        !t.startsWith("before") &&
        !t.startsWith("after") &&
        t !== "callback" &&
        t !== "parser",
      _indexable: (t) =>
        t !== "borderDash" && t !== "tickBorderDash" && t !== "dash",
    }),
    e.describe("scales", { _fallback: "scale" }),
    e.describe("scale.ticks", {
      _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
      _indexable: (t) => t !== "backdropPadding",
    });
}
const Mn = Object.create(null),
  Jl = Object.create(null);
function Ki(e, t) {
  if (!t) return e;
  const n = t.split(".");
  for (let i = 0, r = n.length; i < r; ++i) {
    const s = n[i];
    e = e[s] || (e[s] = Object.create(null));
  }
  return e;
}
function qo(e, t, n) {
  return typeof t == "string" ? pr(Ki(e, t), n) : pr(Ki(e, ""), t);
}
class cy {
  constructor(t, n) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (i, r) => Zo(r.backgroundColor)),
      (this.hoverBorderColor = (i, r) => Zo(r.borderColor)),
      (this.hoverColor = (i, r) => Zo(r.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(n);
  }
  set(t, n) {
    return qo(this, t, n);
  }
  get(t) {
    return Ki(this, t);
  }
  describe(t, n) {
    return qo(Jl, t, n);
  }
  override(t, n) {
    return qo(Mn, t, n);
  }
  route(t, n, i, r) {
    const s = Ki(this, t),
      o = Ki(this, i),
      l = "_" + n;
    Object.defineProperties(s, {
      [l]: { value: s[n], writable: !0 },
      [n]: {
        enumerable: !0,
        get() {
          const a = this[l],
            u = o[r];
          return I(a) ? Object.assign({}, u, a) : B(a, u);
        },
        set(a) {
          this[l] = a;
        },
      },
    });
  }
  apply(t) {
    t.forEach((n) => n(this));
  }
}
var ot = new cy(
  {
    _scriptable: (e) => !e.startsWith("on"),
    _indexable: (e) => e !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [sy, oy, uy]
);
function fy(e) {
  return !e || tt(e.size) || tt(e.family)
    ? null
    : (e.style ? e.style + " " : "") +
        (e.weight ? e.weight + " " : "") +
        e.size +
        "px " +
        e.family;
}
function Gs(e, t, n, i, r) {
  let s = t[r];
  return (
    s || ((s = t[r] = e.measureText(r).width), n.push(r)), s > i && (i = s), i
  );
}
function dy(e, t, n, i) {
  i = i || {};
  let r = (i.data = i.data || {}),
    s = (i.garbageCollect = i.garbageCollect || []);
  i.font !== t &&
    ((r = i.data = {}), (s = i.garbageCollect = []), (i.font = t)),
    e.save(),
    (e.font = t);
  let o = 0;
  const l = n.length;
  let a, u, c, f, d;
  for (a = 0; a < l; a++)
    if (((f = n[a]), f != null && !rt(f))) o = Gs(e, r, s, o, f);
    else if (rt(f))
      for (u = 0, c = f.length; u < c; u++)
        (d = f[u]), d != null && !rt(d) && (o = Gs(e, r, s, o, d));
  e.restore();
  const p = s.length / 2;
  if (p > n.length) {
    for (a = 0; a < p; a++) delete r[s[a]];
    s.splice(0, p);
  }
  return o;
}
function un(e, t, n) {
  const i = e.currentDevicePixelRatio,
    r = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((t - r) * i) / i + r;
}
function Ic(e, t) {
  (t = t || e.getContext("2d")),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, e.width, e.height),
    t.restore();
}
function jc(e, t, n, i) {
  cp(e, t, n, i, null);
}
function cp(e, t, n, i, r) {
  let s, o, l, a, u, c, f, d;
  const p = t.pointStyle,
    y = t.rotation,
    v = t.radius;
  let x = (y || 0) * Q0;
  if (
    p &&
    typeof p == "object" &&
    ((s = p.toString()),
    s === "[object HTMLImageElement]" || s === "[object HTMLCanvasElement]")
  ) {
    e.save(),
      e.translate(n, i),
      e.rotate(x),
      e.drawImage(p, -p.width / 2, -p.height / 2, p.width, p.height),
      e.restore();
    return;
  }
  if (!(isNaN(v) || v <= 0)) {
    switch ((e.beginPath(), p)) {
      default:
        r ? e.ellipse(n, i, r / 2, v, 0, 0, st) : e.arc(n, i, v, 0, st),
          e.closePath();
        break;
      case "triangle":
        (c = r ? r / 2 : v),
          e.moveTo(n + Math.sin(x) * c, i - Math.cos(x) * v),
          (x += Ac),
          e.lineTo(n + Math.sin(x) * c, i - Math.cos(x) * v),
          (x += Ac),
          e.lineTo(n + Math.sin(x) * c, i - Math.cos(x) * v),
          e.closePath();
        break;
      case "rectRounded":
        (u = v * 0.516),
          (a = v - u),
          (o = Math.cos(x + an) * a),
          (f = Math.cos(x + an) * (r ? r / 2 - u : a)),
          (l = Math.sin(x + an) * a),
          (d = Math.sin(x + an) * (r ? r / 2 - u : a)),
          e.arc(n - f, i - l, u, x - ct, x - at),
          e.arc(n + d, i - o, u, x - at, x),
          e.arc(n + f, i + l, u, x, x + at),
          e.arc(n - d, i + o, u, x + at, x + ct),
          e.closePath();
        break;
      case "rect":
        if (!y) {
          (a = Math.SQRT1_2 * v),
            (c = r ? r / 2 : a),
            e.rect(n - c, i - a, 2 * c, 2 * a);
          break;
        }
        x += an;
      case "rectRot":
        (f = Math.cos(x) * (r ? r / 2 : v)),
          (o = Math.cos(x) * v),
          (l = Math.sin(x) * v),
          (d = Math.sin(x) * (r ? r / 2 : v)),
          e.moveTo(n - f, i - l),
          e.lineTo(n + d, i - o),
          e.lineTo(n + f, i + l),
          e.lineTo(n - d, i + o),
          e.closePath();
        break;
      case "crossRot":
        x += an;
      case "cross":
        (f = Math.cos(x) * (r ? r / 2 : v)),
          (o = Math.cos(x) * v),
          (l = Math.sin(x) * v),
          (d = Math.sin(x) * (r ? r / 2 : v)),
          e.moveTo(n - f, i - l),
          e.lineTo(n + f, i + l),
          e.moveTo(n + d, i - o),
          e.lineTo(n - d, i + o);
        break;
      case "star":
        (f = Math.cos(x) * (r ? r / 2 : v)),
          (o = Math.cos(x) * v),
          (l = Math.sin(x) * v),
          (d = Math.sin(x) * (r ? r / 2 : v)),
          e.moveTo(n - f, i - l),
          e.lineTo(n + f, i + l),
          e.moveTo(n + d, i - o),
          e.lineTo(n - d, i + o),
          (x += an),
          (f = Math.cos(x) * (r ? r / 2 : v)),
          (o = Math.cos(x) * v),
          (l = Math.sin(x) * v),
          (d = Math.sin(x) * (r ? r / 2 : v)),
          e.moveTo(n - f, i - l),
          e.lineTo(n + f, i + l),
          e.moveTo(n + d, i - o),
          e.lineTo(n - d, i + o);
        break;
      case "line":
        (o = r ? r / 2 : Math.cos(x) * v),
          (l = Math.sin(x) * v),
          e.moveTo(n - o, i - l),
          e.lineTo(n + o, i + l);
        break;
      case "dash":
        e.moveTo(n, i),
          e.lineTo(n + Math.cos(x) * (r ? r / 2 : v), i + Math.sin(x) * v);
        break;
      case !1:
        e.closePath();
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function Qn(e, t, n) {
  return (
    (n = n || 0.5),
    !t ||
      (e &&
        e.x > t.left - n &&
        e.x < t.right + n &&
        e.y > t.top - n &&
        e.y < t.bottom + n)
  );
}
function ou(e, t) {
  e.save(),
    e.beginPath(),
    e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    e.clip();
}
function lu(e) {
  e.restore();
}
function hy(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]),
    tt(t.rotation) || e.rotate(t.rotation),
    t.color && (e.fillStyle = t.color),
    t.textAlign && (e.textAlign = t.textAlign),
    t.textBaseline && (e.textBaseline = t.textBaseline);
}
function py(e, t, n, i, r) {
  if (r.strikethrough || r.underline) {
    const s = e.measureText(i),
      o = t - s.actualBoundingBoxLeft,
      l = t + s.actualBoundingBoxRight,
      a = n - s.actualBoundingBoxAscent,
      u = n + s.actualBoundingBoxDescent,
      c = r.strikethrough ? (a + u) / 2 : u;
    (e.strokeStyle = e.fillStyle),
      e.beginPath(),
      (e.lineWidth = r.decorationWidth || 2),
      e.moveTo(o, c),
      e.lineTo(l, c),
      e.stroke();
  }
}
function gy(e, t) {
  const n = e.fillStyle;
  (e.fillStyle = t.color),
    e.fillRect(t.left, t.top, t.width, t.height),
    (e.fillStyle = n);
}
function ai(e, t, n, i, r, s = {}) {
  const o = rt(t) ? t : [t],
    l = s.strokeWidth > 0 && s.strokeColor !== "";
  let a, u;
  for (e.save(), e.font = r.string, hy(e, s), a = 0; a < o.length; ++a)
    (u = o[a]),
      s.backdrop && gy(e, s.backdrop),
      l &&
        (s.strokeColor && (e.strokeStyle = s.strokeColor),
        tt(s.strokeWidth) || (e.lineWidth = s.strokeWidth),
        e.strokeText(u, n, i, s.maxWidth)),
      e.fillText(u, n, i, s.maxWidth),
      py(e, n, i, u, s),
      (i += Number(r.lineHeight));
  e.restore();
}
function $s(e, t) {
  const { x: n, y: i, w: r, h: s, radius: o } = t;
  e.arc(n + o.topLeft, i + o.topLeft, o.topLeft, 1.5 * ct, ct, !0),
    e.lineTo(n, i + s - o.bottomLeft),
    e.arc(n + o.bottomLeft, i + s - o.bottomLeft, o.bottomLeft, ct, at, !0),
    e.lineTo(n + r - o.bottomRight, i + s),
    e.arc(
      n + r - o.bottomRight,
      i + s - o.bottomRight,
      o.bottomRight,
      at,
      0,
      !0
    ),
    e.lineTo(n + r, i + o.topRight),
    e.arc(n + r - o.topRight, i + o.topRight, o.topRight, 0, -at, !0),
    e.lineTo(n + o.topLeft, i);
}
const my = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  yy = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function vy(e, t) {
  const n = ("" + e).match(my);
  if (!n || n[1] === "normal") return t * 1.2;
  switch (((e = +n[2]), n[3])) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const xy = (e) => +e || 0;
function au(e, t) {
  const n = {},
    i = I(t),
    r = i ? Object.keys(t) : t,
    s = I(e) ? (i ? (o) => B(e[o], e[t[o]]) : (o) => e[o]) : () => e;
  for (const o of r) n[o] = xy(s(o));
  return n;
}
function _y(e) {
  return au(e, { top: "y", right: "x", bottom: "y", left: "x" });
}
function Jn(e) {
  return au(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function Tt(e) {
  const t = _y(e);
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function yt(e, t) {
  (e = e || {}), (t = t || ot.font);
  let n = B(e.size, t.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let i = B(e.style, t.style);
  i &&
    !("" + i).match(yy) &&
    (console.warn('Invalid font style specified: "' + i + '"'), (i = void 0));
  const r = {
    family: B(e.family, t.family),
    lineHeight: vy(B(e.lineHeight, t.lineHeight), n),
    size: n,
    style: i,
    weight: B(e.weight, t.weight),
    string: "",
  };
  return (r.string = fy(r)), r;
}
function Xr(e, t, n, i) {
  let r = !0,
    s,
    o,
    l;
  for (s = 0, o = e.length; s < o; ++s)
    if (
      ((l = e[s]),
      l !== void 0 &&
        (t !== void 0 && typeof l == "function" && ((l = l(t)), (r = !1)),
        n !== void 0 && rt(l) && ((l = l[n % l.length]), (r = !1)),
        l !== void 0))
    )
      return i && !r && (i.cacheable = !1), l;
}
function wy(e, t, n) {
  const { min: i, max: r } = e,
    s = tp(t, (r - i) / 2),
    o = (l, a) => (n && l === 0 ? 0 : l + a);
  return { min: o(i, -Math.abs(s)), max: o(r, s) };
}
function An(e, t) {
  return Object.assign(Object.create(e), t);
}
function uu(e, t = [""], n, i, r = () => e[0]) {
  const s = n || e;
  typeof i > "u" && (i = pp("_fallback", e));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: s,
    _fallback: i,
    _getTarget: r,
    override: (l) => uu([l, ...e], t, s, i),
  };
  return new Proxy(o, {
    deleteProperty(l, a) {
      return delete l[a], delete l._keys, delete e[0][a], !0;
    },
    get(l, a) {
      return dp(l, a, () => Ty(a, t, e, l));
    },
    getOwnPropertyDescriptor(l, a) {
      return Reflect.getOwnPropertyDescriptor(l._scopes[0], a);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0]);
    },
    has(l, a) {
      return Hc(l).includes(a);
    },
    ownKeys(l) {
      return Hc(l);
    },
    set(l, a, u) {
      const c = l._storage || (l._storage = r());
      return (l[a] = c[a] = u), delete l._keys, !0;
    },
  });
}
function ui(e, t, n, i) {
  const r = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: new Set(),
    _descriptors: fp(e, i),
    setContext: (s) => ui(e, s, n, i),
    override: (s) => ui(e.override(s), t, n, i),
  };
  return new Proxy(r, {
    deleteProperty(s, o) {
      return delete s[o], delete e[o], !0;
    },
    get(s, o, l) {
      return dp(s, o, () => Sy(s, o, l));
    },
    getOwnPropertyDescriptor(s, o) {
      return s._descriptors.allKeys
        ? Reflect.has(e, o)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(e, o);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e);
    },
    has(s, o) {
      return Reflect.has(e, o);
    },
    ownKeys() {
      return Reflect.ownKeys(e);
    },
    set(s, o, l) {
      return (e[o] = l), delete s[o], !0;
    },
  });
}
function fp(e, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: n = t.scriptable,
    _indexable: i = t.indexable,
    _allKeys: r = t.allKeys,
  } = e;
  return {
    allKeys: r,
    scriptable: n,
    indexable: i,
    isScriptable: rn(n) ? n : () => n,
    isIndexable: rn(i) ? i : () => i,
  };
}
const ky = (e, t) => (e ? e + iu(t) : t),
  cu = (e, t) =>
    I(t) &&
    e !== "adapters" &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object);
function dp(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
  const i = n();
  return (e[t] = i), i;
}
function Sy(e, t, n) {
  const { _proxy: i, _context: r, _subProxy: s, _descriptors: o } = e;
  let l = i[t];
  return (
    rn(l) && o.isScriptable(t) && (l = by(t, l, e, n)),
    rt(l) && l.length && (l = Cy(t, l, e, o.isIndexable)),
    cu(t, l) && (l = ui(l, r, s && s[t], o)),
    l
  );
}
function by(e, t, n, i) {
  const { _proxy: r, _context: s, _subProxy: o, _stack: l } = n;
  if (l.has(e))
    throw new Error(
      "Recursion detected: " + Array.from(l).join("->") + "->" + e
    );
  l.add(e);
  let a = t(s, o || i);
  return l.delete(e), cu(e, a) && (a = fu(r._scopes, r, e, a)), a;
}
function Cy(e, t, n, i) {
  const { _proxy: r, _context: s, _subProxy: o, _descriptors: l } = n;
  if (typeof s.index < "u" && i(e)) return t[s.index % t.length];
  if (I(t[0])) {
    const a = t,
      u = r._scopes.filter((c) => c !== a);
    t = [];
    for (const c of a) {
      const f = fu(u, r, e, c);
      t.push(ui(f, s, o && o[e], l));
    }
  }
  return t;
}
function hp(e, t, n) {
  return rn(e) ? e(t, n) : e;
}
const My = (e, t) => (e === !0 ? t : typeof e == "string" ? gr(t, e) : void 0);
function Ey(e, t, n, i, r) {
  for (const s of t) {
    const o = My(n, s);
    if (o) {
      e.add(o);
      const l = hp(o._fallback, n, r);
      if (typeof l < "u" && l !== n && l !== i) return l;
    } else if (o === !1 && typeof i < "u" && n !== i) return null;
  }
  return !1;
}
function fu(e, t, n, i) {
  const r = t._rootScopes,
    s = hp(t._fallback, n, i),
    o = [...e, ...r],
    l = new Set();
  l.add(i);
  let a = Bc(l, o, n, s || n, i);
  return a === null ||
    (typeof s < "u" && s !== n && ((a = Bc(l, o, s, a, i)), a === null))
    ? !1
    : uu(Array.from(l), [""], r, s, () => Py(t, n, i));
}
function Bc(e, t, n, i, r) {
  for (; n; ) n = Ey(e, t, n, i, r);
  return n;
}
function Py(e, t, n) {
  const i = e._getTarget();
  t in i || (i[t] = {});
  const r = i[t];
  return rt(r) && I(n) ? n : r || {};
}
function Ty(e, t, n, i) {
  let r;
  for (const s of t)
    if (((r = pp(ky(s, e), n)), typeof r < "u"))
      return cu(e, r) ? fu(n, i, e, r) : r;
}
function pp(e, t) {
  for (const n of t) {
    if (!n) continue;
    const i = n[e];
    if (typeof i < "u") return i;
  }
}
function Hc(e) {
  let t = e._keys;
  return t || (t = e._keys = Ay(e._scopes)), t;
}
function Ay(e) {
  const t = new Set();
  for (const n of e)
    for (const i of Object.keys(n).filter((r) => !r.startsWith("_"))) t.add(i);
  return Array.from(t);
}
function du() {
  return typeof window < "u" && typeof document < "u";
}
function hu(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Zs(e, t, n) {
  let i;
  return (
    typeof e == "string"
      ? ((i = parseInt(e, 10)),
        e.indexOf("%") !== -1 && (i = (i / 100) * t.parentNode[n]))
      : (i = e),
    i
  );
}
const wo = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function Ly(e, t) {
  return wo(e).getPropertyValue(t);
}
const Oy = ["top", "right", "bottom", "left"];
function _n(e, t, n) {
  const i = {};
  n = n ? "-" + n : "";
  for (let r = 0; r < 4; r++) {
    const s = Oy[r];
    i[s] = parseFloat(e[t + "-" + s + n]) || 0;
  }
  return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
}
const Dy = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
function Ry(e, t) {
  const n = e.touches,
    i = n && n.length ? n[0] : e,
    { offsetX: r, offsetY: s } = i;
  let o = !1,
    l,
    a;
  if (Dy(r, s, e.target)) (l = r), (a = s);
  else {
    const u = t.getBoundingClientRect();
    (l = i.clientX - u.left), (a = i.clientY - u.top), (o = !0);
  }
  return { x: l, y: a, box: o };
}
function pn(e, t) {
  if ("native" in e) return e;
  const { canvas: n, currentDevicePixelRatio: i } = t,
    r = wo(n),
    s = r.boxSizing === "border-box",
    o = _n(r, "padding"),
    l = _n(r, "border", "width"),
    { x: a, y: u, box: c } = Ry(e, n),
    f = o.left + (c && l.left),
    d = o.top + (c && l.top);
  let { width: p, height: y } = t;
  return (
    s && ((p -= o.width + l.width), (y -= o.height + l.height)),
    {
      x: Math.round((((a - f) / p) * n.width) / i),
      y: Math.round((((u - d) / y) * n.height) / i),
    }
  );
}
function zy(e, t, n) {
  let i, r;
  if (t === void 0 || n === void 0) {
    const s = hu(e);
    if (!s) (t = e.clientWidth), (n = e.clientHeight);
    else {
      const o = s.getBoundingClientRect(),
        l = wo(s),
        a = _n(l, "border", "width"),
        u = _n(l, "padding");
      (t = o.width - u.width - a.width),
        (n = o.height - u.height - a.height),
        (i = Zs(l.maxWidth, s, "clientWidth")),
        (r = Zs(l.maxHeight, s, "clientHeight"));
    }
  }
  return { width: t, height: n, maxWidth: i || Ys, maxHeight: r || Ys };
}
const Kr = (e) => Math.round(e * 10) / 10;
function Ny(e, t, n, i) {
  const r = wo(e),
    s = _n(r, "margin"),
    o = Zs(r.maxWidth, e, "clientWidth") || Ys,
    l = Zs(r.maxHeight, e, "clientHeight") || Ys,
    a = zy(e, t, n);
  let { width: u, height: c } = a;
  if (r.boxSizing === "content-box") {
    const d = _n(r, "border", "width"),
      p = _n(r, "padding");
    (u -= p.width + d.width), (c -= p.height + d.height);
  }
  return (
    (u = Math.max(0, u - s.width)),
    (c = Math.max(0, i ? u / i : c - s.height)),
    (u = Kr(Math.min(u, o, a.maxWidth))),
    (c = Kr(Math.min(c, l, a.maxHeight))),
    u && !c && (c = Kr(u / 2)),
    (t !== void 0 || n !== void 0) &&
      i &&
      a.height &&
      c > a.height &&
      ((c = a.height), (u = Kr(Math.floor(c * i)))),
    { width: u, height: c }
  );
}
function Wc(e, t, n) {
  const i = t || 1,
    r = Math.floor(e.height * i),
    s = Math.floor(e.width * i);
  (e.height = Math.floor(e.height)), (e.width = Math.floor(e.width));
  const o = e.canvas;
  return (
    o.style &&
      (n || (!o.style.height && !o.style.width)) &&
      ((o.style.height = `${e.height}px`), (o.style.width = `${e.width}px`)),
    e.currentDevicePixelRatio !== i || o.height !== r || o.width !== s
      ? ((e.currentDevicePixelRatio = i),
        (o.height = r),
        (o.width = s),
        e.ctx.setTransform(i, 0, 0, i, 0, 0),
        !0)
      : !1
  );
}
const Fy = (function () {
  let e = !1;
  try {
    const t = {
      get passive() {
        return (e = !0), !1;
      },
    };
    du() &&
      (window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t));
  } catch {}
  return e;
})();
function Vc(e, t) {
  const n = Ly(e, t),
    i = n && n.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
const Iy = function (e, t) {
    return {
      x(n) {
        return e + e + t - n;
      },
      setWidth(n) {
        t = n;
      },
      textAlign(n) {
        return n === "center" ? n : n === "right" ? "left" : "right";
      },
      xPlus(n, i) {
        return n - i;
      },
      leftForLtr(n, i) {
        return n - i;
      },
    };
  },
  jy = function () {
    return {
      x(e) {
        return e;
      },
      setWidth(e) {},
      textAlign(e) {
        return e;
      },
      xPlus(e, t) {
        return e + t;
      },
      leftForLtr(e, t) {
        return e;
      },
    };
  };
function ti(e, t, n) {
  return e ? Iy(t, n) : jy();
}
function gp(e, t) {
  let n, i;
  (t === "ltr" || t === "rtl") &&
    ((n = e.canvas.style),
    (i = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")]),
    n.setProperty("direction", t, "important"),
    (e.prevTextDirection = i));
}
function mp(e, t) {
  t !== void 0 &&
    (delete e.prevTextDirection,
    e.canvas.style.setProperty("direction", t[0], t[1]));
}
/*!
 * Chart.js v4.4.2
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ class By {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, n, i, r) {
    const s = n.listeners[r],
      o = n.duration;
    s.forEach((l) =>
      l({
        chart: t,
        initial: n.initial,
        numSteps: o,
        currentStep: Math.min(i - n.start, o),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = sp.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(t = Date.now()) {
    let n = 0;
    this._charts.forEach((i, r) => {
      if (!i.running || !i.items.length) return;
      const s = i.items;
      let o = s.length - 1,
        l = !1,
        a;
      for (; o >= 0; --o)
        (a = s[o]),
          a._active
            ? (a._total > i.duration && (i.duration = a._total),
              a.tick(t),
              (l = !0))
            : ((s[o] = s[s.length - 1]), s.pop());
      l && (r.draw(), this._notify(r, i, t, "progress")),
        s.length ||
          ((i.running = !1),
          this._notify(r, i, t, "complete"),
          (i.initial = !1)),
        (n += s.length);
    }),
      (this._lastDate = t),
      n === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const n = this._charts;
    let i = n.get(t);
    return (
      i ||
        ((i = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        n.set(t, i)),
      i
    );
  }
  listen(t, n, i) {
    this._getAnims(t).listeners[n].push(i);
  }
  add(t, n) {
    !n || !n.length || this._getAnims(t).items.push(...n);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const n = this._charts.get(t);
    n &&
      ((n.running = !0),
      (n.start = Date.now()),
      (n.duration = n.items.reduce((i, r) => Math.max(i, r._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const n = this._charts.get(t);
    return !(!n || !n.running || !n.items.length);
  }
  stop(t) {
    const n = this._charts.get(t);
    if (!n || !n.items.length) return;
    const i = n.items;
    let r = i.length - 1;
    for (; r >= 0; --r) i[r].cancel();
    (n.items = []), this._notify(t, n, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var we = new By();
const Uc = "transparent",
  Hy = {
    boolean(e, t, n) {
      return n > 0.5 ? t : e;
    },
    color(e, t, n) {
      const i = Nc(e || Uc),
        r = i.valid && Nc(t || Uc);
      return r && r.valid ? r.mix(i, n).hexString() : t;
    },
    number(e, t, n) {
      return e + (t - e) * n;
    },
  };
class Wy {
  constructor(t, n, i, r) {
    const s = n[i];
    r = Xr([t.to, r, s, t.from]);
    const o = Xr([t.from, s, r]);
    (this._active = !0),
      (this._fn = t.fn || Hy[t.type || typeof o]),
      (this._easing = Xi[t.easing] || Xi.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = n),
      (this._prop = i),
      (this._from = o),
      (this._to = r),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, n, i) {
    if (this._active) {
      this._notify(!1);
      const r = this._target[this._prop],
        s = i - this._start,
        o = this._duration - s;
      (this._start = i),
        (this._duration = Math.floor(Math.max(o, t.duration))),
        (this._total += s),
        (this._loop = !!t.loop),
        (this._to = Xr([t.to, n, r, t.from])),
        (this._from = Xr([t.from, r, n]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const n = t - this._start,
      i = this._duration,
      r = this._prop,
      s = this._from,
      o = this._loop,
      l = this._to;
    let a;
    if (((this._active = s !== l && (o || n < i)), !this._active)) {
      (this._target[r] = l), this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[r] = s;
      return;
    }
    (a = (n / i) % 2),
      (a = o && a > 1 ? 2 - a : a),
      (a = this._easing(Math.min(1, Math.max(0, a)))),
      (this._target[r] = this._fn(s, l, a));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((n, i) => {
      t.push({ res: n, rej: i });
    });
  }
  _notify(t) {
    const n = t ? "res" : "rej",
      i = this._promises || [];
    for (let r = 0; r < i.length; r++) i[r][n]();
  }
}
class yp {
  constructor(t, n) {
    (this._chart = t), (this._properties = new Map()), this.configure(n);
  }
  configure(t) {
    if (!I(t)) return;
    const n = Object.keys(ot.animation),
      i = this._properties;
    Object.getOwnPropertyNames(t).forEach((r) => {
      const s = t[r];
      if (!I(s)) return;
      const o = {};
      for (const l of n) o[l] = s[l];
      ((rt(s.properties) && s.properties) || [r]).forEach((l) => {
        (l === r || !i.has(l)) && i.set(l, o);
      });
    });
  }
  _animateOptions(t, n) {
    const i = n.options,
      r = Uy(t, i);
    if (!r) return [];
    const s = this._createAnimations(r, i);
    return (
      i.$shared &&
        Vy(t.options.$animations, i).then(
          () => {
            t.options = i;
          },
          () => {}
        ),
      s
    );
  }
  _createAnimations(t, n) {
    const i = this._properties,
      r = [],
      s = t.$animations || (t.$animations = {}),
      o = Object.keys(n),
      l = Date.now();
    let a;
    for (a = o.length - 1; a >= 0; --a) {
      const u = o[a];
      if (u.charAt(0) === "$") continue;
      if (u === "options") {
        r.push(...this._animateOptions(t, n));
        continue;
      }
      const c = n[u];
      let f = s[u];
      const d = i.get(u);
      if (f)
        if (d && f.active()) {
          f.update(d, c, l);
          continue;
        } else f.cancel();
      if (!d || !d.duration) {
        t[u] = c;
        continue;
      }
      (s[u] = f = new Wy(d, t, u, c)), r.push(f);
    }
    return r;
  }
  update(t, n) {
    if (this._properties.size === 0) {
      Object.assign(t, n);
      return;
    }
    const i = this._createAnimations(t, n);
    if (i.length) return we.add(this._chart, i), !0;
  }
}
function Vy(e, t) {
  const n = [],
    i = Object.keys(t);
  for (let r = 0; r < i.length; r++) {
    const s = e[i[r]];
    s && s.active() && n.push(s.wait());
  }
  return Promise.all(n);
}
function Uy(e, t) {
  if (!t) return;
  let n = e.options;
  if (!n) {
    e.options = t;
    return;
  }
  return (
    n.$shared &&
      (e.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })),
    n
  );
}
function Yc(e, t) {
  const n = (e && e.options) || {},
    i = n.reverse,
    r = n.min === void 0 ? t : 0,
    s = n.max === void 0 ? t : 0;
  return { start: i ? s : r, end: i ? r : s };
}
function Yy(e, t, n) {
  if (n === !1) return !1;
  const i = Yc(e, n),
    r = Yc(t, n);
  return { top: r.end, right: i.end, bottom: r.start, left: i.start };
}
function Qy(e) {
  let t, n, i, r;
  return (
    I(e)
      ? ((t = e.top), (n = e.right), (i = e.bottom), (r = e.left))
      : (t = n = i = r = e),
    { top: t, right: n, bottom: i, left: r, disabled: e === !1 }
  );
}
function vp(e, t) {
  const n = [],
    i = e._getSortedDatasetMetas(t);
  let r, s;
  for (r = 0, s = i.length; r < s; ++r) n.push(i[r].index);
  return n;
}
function Qc(e, t, n, i = {}) {
  const r = e.keys,
    s = i.mode === "single";
  let o, l, a, u;
  if (t !== null) {
    for (o = 0, l = r.length; o < l; ++o) {
      if (((a = +r[o]), a === n)) {
        if (i.all) continue;
        break;
      }
      (u = e.values[a]), pt(u) && (s || t === 0 || Qs(t) === Qs(u)) && (t += u);
    }
    return t;
  }
}
function Xy(e) {
  const t = Object.keys(e),
    n = new Array(t.length);
  let i, r, s;
  for (i = 0, r = t.length; i < r; ++i) (s = t[i]), (n[i] = { x: s, y: e[s] });
  return n;
}
function Xc(e, t) {
  const n = e && e.options.stacked;
  return n || (n === void 0 && t.stack !== void 0);
}
function Ky(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`;
}
function Gy(e) {
  const { min: t, max: n, minDefined: i, maxDefined: r } = e.getUserBounds();
  return {
    min: i ? t : Number.NEGATIVE_INFINITY,
    max: r ? n : Number.POSITIVE_INFINITY,
  };
}
function $y(e, t, n) {
  const i = e[t] || (e[t] = {});
  return i[n] || (i[n] = {});
}
function Kc(e, t, n, i) {
  for (const r of t.getMatchingVisibleMetas(i).reverse()) {
    const s = e[r.index];
    if ((n && s > 0) || (!n && s < 0)) return r.index;
  }
  return null;
}
function Gc(e, t) {
  const { chart: n, _cachedMeta: i } = e,
    r = n._stacks || (n._stacks = {}),
    { iScale: s, vScale: o, index: l } = i,
    a = s.axis,
    u = o.axis,
    c = Ky(s, o, i),
    f = t.length;
  let d;
  for (let p = 0; p < f; ++p) {
    const y = t[p],
      { [a]: v, [u]: x } = y,
      g = y._stacks || (y._stacks = {});
    (d = g[u] = $y(r, c, v)),
      (d[l] = x),
      (d._top = Kc(d, o, !0, i.type)),
      (d._bottom = Kc(d, o, !1, i.type));
    const h = d._visualValues || (d._visualValues = {});
    h[l] = x;
  }
}
function Jo(e, t) {
  const n = e.scales;
  return Object.keys(n)
    .filter((i) => n[i].axis === t)
    .shift();
}
function Zy(e, t) {
  return An(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset",
  });
}
function qy(e, t, n) {
  return An(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: t,
    mode: "default",
    type: "data",
  });
}
function ki(e, t) {
  const n = e.controller.index,
    i = e.vScale && e.vScale.axis;
  if (i) {
    t = t || e._parsed;
    for (const r of t) {
      const s = r._stacks;
      if (!s || s[i] === void 0 || s[i][n] === void 0) return;
      delete s[i][n],
        s[i]._visualValues !== void 0 &&
          s[i]._visualValues[n] !== void 0 &&
          delete s[i]._visualValues[n];
    }
  }
}
const tl = (e) => e === "reset" || e === "none",
  $c = (e, t) => (t ? e : Object.assign({}, e)),
  Jy = (e, t, n) =>
    e && !t.hidden && t._stacked && { keys: vp(n, !0), values: null };
class Gi {
  constructor(t, n) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = n),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (t._stacked = Xc(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        );
  }
  updateIndex(t) {
    this.index !== t && ki(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      n = this._cachedMeta,
      i = this.getDataset(),
      r = (f, d, p, y) => (f === "x" ? d : f === "r" ? y : p),
      s = (n.xAxisID = B(i.xAxisID, Jo(t, "x"))),
      o = (n.yAxisID = B(i.yAxisID, Jo(t, "y"))),
      l = (n.rAxisID = B(i.rAxisID, Jo(t, "r"))),
      a = n.indexAxis,
      u = (n.iAxisID = r(a, s, o, l)),
      c = (n.vAxisID = r(a, o, s, l));
    (n.xScale = this.getScaleForId(s)),
      (n.yScale = this.getScaleForId(o)),
      (n.rScale = this.getScaleForId(l)),
      (n.iScale = this.getScaleForId(u)),
      (n.vScale = this.getScaleForId(c));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const n = this._cachedMeta;
    return t === n.iScale ? n.vScale : n.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && Dc(this._data, this), t._stacked && ki(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      n = t.data || (t.data = []),
      i = this._data;
    if (I(n)) this._data = Xy(n);
    else if (i !== n) {
      if (i) {
        Dc(i, this);
        const r = this._cachedMeta;
        ki(r), (r._parsed = []);
      }
      n && Object.isExtensible(n) && J0(n, this),
        (this._syncList = []),
        (this._data = n);
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const n = this._cachedMeta,
      i = this.getDataset();
    let r = !1;
    this._dataCheck();
    const s = n._stacked;
    (n._stacked = Xc(n.vScale, n)),
      n.stack !== i.stack && ((r = !0), ki(n), (n.stack = i.stack)),
      this._resyncElements(t),
      (r || s !== n._stacked) && Gc(this, n._parsed);
  }
  configure() {
    const t = this.chart.config,
      n = t.datasetScopeKeys(this._type),
      i = t.getOptionScopes(this.getDataset(), n, !0);
    (this.options = t.createResolver(i, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(t, n) {
    const { _cachedMeta: i, _data: r } = this,
      { iScale: s, _stacked: o } = i,
      l = s.axis;
    let a = t === 0 && n === r.length ? !0 : i._sorted,
      u = t > 0 && i._parsed[t - 1],
      c,
      f,
      d;
    if (this._parsing === !1) (i._parsed = r), (i._sorted = !0), (d = r);
    else {
      rt(r[t])
        ? (d = this.parseArrayData(i, r, t, n))
        : I(r[t])
        ? (d = this.parseObjectData(i, r, t, n))
        : (d = this.parsePrimitiveData(i, r, t, n));
      const p = () => f[l] === null || (u && f[l] < u[l]);
      for (c = 0; c < n; ++c)
        (i._parsed[c + t] = f = d[c]), a && (p() && (a = !1), (u = f));
      i._sorted = a;
    }
    o && Gc(this, d);
  }
  parsePrimitiveData(t, n, i, r) {
    const { iScale: s, vScale: o } = t,
      l = s.axis,
      a = o.axis,
      u = s.getLabels(),
      c = s === o,
      f = new Array(r);
    let d, p, y;
    for (d = 0, p = r; d < p; ++d)
      (y = d + i),
        (f[d] = { [l]: c || s.parse(u[y], y), [a]: o.parse(n[y], y) });
    return f;
  }
  parseArrayData(t, n, i, r) {
    const { xScale: s, yScale: o } = t,
      l = new Array(r);
    let a, u, c, f;
    for (a = 0, u = r; a < u; ++a)
      (c = a + i),
        (f = n[c]),
        (l[a] = { x: s.parse(f[0], c), y: o.parse(f[1], c) });
    return l;
  }
  parseObjectData(t, n, i, r) {
    const { xScale: s, yScale: o } = t,
      { xAxisKey: l = "x", yAxisKey: a = "y" } = this._parsing,
      u = new Array(r);
    let c, f, d, p;
    for (c = 0, f = r; c < f; ++c)
      (d = c + i),
        (p = n[d]),
        (u[c] = { x: s.parse(gr(p, l), d), y: o.parse(gr(p, a), d) });
    return u;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, n, i) {
    const r = this.chart,
      s = this._cachedMeta,
      o = n[t.axis],
      l = { keys: vp(r, !0), values: n._stacks[t.axis]._visualValues };
    return Qc(l, o, s.index, { mode: i });
  }
  updateRangeFromParsed(t, n, i, r) {
    const s = i[n.axis];
    let o = s === null ? NaN : s;
    const l = r && i._stacks[n.axis];
    r && l && ((r.values = l), (o = Qc(r, s, this._cachedMeta.index))),
      (t.min = Math.min(t.min, o)),
      (t.max = Math.max(t.max, o));
  }
  getMinMax(t, n) {
    const i = this._cachedMeta,
      r = i._parsed,
      s = i._sorted && t === i.iScale,
      o = r.length,
      l = this._getOtherScale(t),
      a = Jy(n, i, this.chart),
      u = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: c, max: f } = Gy(l);
    let d, p;
    function y() {
      p = r[d];
      const v = p[l.axis];
      return !pt(p[t.axis]) || c > v || f < v;
    }
    for (
      d = 0;
      d < o && !(!y() && (this.updateRangeFromParsed(u, t, p, a), s));
      ++d
    );
    if (s) {
      for (d = o - 1; d >= 0; --d)
        if (!y()) {
          this.updateRangeFromParsed(u, t, p, a);
          break;
        }
    }
    return u;
  }
  getAllParsedValues(t) {
    const n = this._cachedMeta._parsed,
      i = [];
    let r, s, o;
    for (r = 0, s = n.length; r < s; ++r)
      (o = n[r][t.axis]), pt(o) && i.push(o);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      i = n.iScale,
      r = n.vScale,
      s = this.getParsed(t);
    return {
      label: i ? "" + i.getLabelForValue(s[i.axis]) : "",
      value: r ? "" + r.getLabelForValue(s[r.axis]) : "",
    };
  }
  _update(t) {
    const n = this._cachedMeta;
    this.update(t || "default"),
      (n._clip = Qy(
        B(this.options.clip, Yy(n.xScale, n.yScale, this.getMaxOverflow()))
      ));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      n = this.chart,
      i = this._cachedMeta,
      r = i.data || [],
      s = n.chartArea,
      o = [],
      l = this._drawStart || 0,
      a = this._drawCount || r.length - l,
      u = this.options.drawActiveElementsOnTop;
    let c;
    for (i.dataset && i.dataset.draw(t, s, l, a), c = l; c < l + a; ++c) {
      const f = r[c];
      f.hidden || (f.active && u ? o.push(f) : f.draw(t, s));
    }
    for (c = 0; c < o.length; ++c) o[c].draw(t, s);
  }
  getStyle(t, n) {
    const i = n ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(i)
      : this.resolveDataElementOptions(t || 0, i);
  }
  getContext(t, n, i) {
    const r = this.getDataset();
    let s;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const o = this._cachedMeta.data[t];
      (s = o.$context || (o.$context = qy(this.getContext(), t, o))),
        (s.parsed = this.getParsed(t)),
        (s.raw = r.data[t]),
        (s.index = s.dataIndex = t);
    } else
      (s =
        this.$context ||
        (this.$context = Zy(this.chart.getContext(), this.index))),
        (s.dataset = r),
        (s.index = s.datasetIndex = this.index);
    return (s.active = !!n), (s.mode = i), s;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t);
  }
  _resolveElementOptions(t, n = "default", i) {
    const r = n === "active",
      s = this._cachedDataOpts,
      o = t + "-" + n,
      l = s[o],
      a = this.enableOptionSharing && Us(i);
    if (l) return $c(l, a);
    const u = this.chart.config,
      c = u.datasetElementScopeKeys(this._type, t),
      f = r ? [`${t}Hover`, "hover", t, ""] : [t, ""],
      d = u.getOptionScopes(this.getDataset(), c),
      p = Object.keys(ot.elements[t]),
      y = () => this.getContext(i, r, n),
      v = u.resolveNamedOptions(d, p, y, f);
    return v.$shared && ((v.$shared = a), (s[o] = Object.freeze($c(v, a)))), v;
  }
  _resolveAnimations(t, n, i) {
    const r = this.chart,
      s = this._cachedDataOpts,
      o = `animation-${n}`,
      l = s[o];
    if (l) return l;
    let a;
    if (r.options.animation !== !1) {
      const c = this.chart.config,
        f = c.datasetAnimationScopeKeys(this._type, n),
        d = c.getOptionScopes(this.getDataset(), f);
      a = c.createResolver(d, this.getContext(t, i, n));
    }
    const u = new yp(r, a && a.animations);
    return a && a._cacheable && (s[o] = Object.freeze(u)), u;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, n) {
    return !n || tl(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, n) {
    const i = this.resolveDataElementOptions(t, n),
      r = this._sharedOptions,
      s = this.getSharedOptions(i),
      o = this.includeOptions(n, s) || s !== r;
    return (
      this.updateSharedOptions(s, n, i), { sharedOptions: s, includeOptions: o }
    );
  }
  updateElement(t, n, i, r) {
    tl(r) ? Object.assign(t, i) : this._resolveAnimations(n, r).update(t, i);
  }
  updateSharedOptions(t, n, i) {
    t && !tl(n) && this._resolveAnimations(void 0, n).update(t, i);
  }
  _setStyle(t, n, i, r) {
    t.active = r;
    const s = this.getStyle(n, r);
    this._resolveAnimations(n, i, r).update(t, {
      options: (!r && this.getSharedOptions(s)) || s,
    });
  }
  removeHoverStyle(t, n, i) {
    this._setStyle(t, i, "active", !1);
  }
  setHoverStyle(t, n, i) {
    this._setStyle(t, i, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const n = this._data,
      i = this._cachedMeta.data;
    for (const [l, a, u] of this._syncList) this[l](a, u);
    this._syncList = [];
    const r = i.length,
      s = n.length,
      o = Math.min(s, r);
    o && this.parse(0, o),
      s > r
        ? this._insertElements(r, s - r, t)
        : s < r && this._removeElements(s, r - s);
  }
  _insertElements(t, n, i = !0) {
    const r = this._cachedMeta,
      s = r.data,
      o = t + n;
    let l;
    const a = (u) => {
      for (u.length += n, l = u.length - 1; l >= o; l--) u[l] = u[l - n];
    };
    for (a(s), l = t; l < o; ++l) s[l] = new this.dataElementType();
    this._parsing && a(r._parsed),
      this.parse(t, n),
      i && this.updateElements(s, t, n, "reset");
  }
  updateElements(t, n, i, r) {}
  _removeElements(t, n) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const r = i._parsed.splice(t, n);
      i._stacked && ki(i, r);
    }
    i.data.splice(t, n);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [n, i, r] = t;
      this[n](i, r);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(t, n) {
    n && this._sync(["_removeElements", t, n]);
    const i = arguments.length - 2;
    i && this._sync(["_insertElements", t, i]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
D(Gi, "defaults", {}),
  D(Gi, "datasetElementType", null),
  D(Gi, "dataElementType", null);
function tv(e, t, n) {
  let i = 1,
    r = 1,
    s = 0,
    o = 0;
  if (t < st) {
    const l = e,
      a = l + t,
      u = Math.cos(l),
      c = Math.sin(l),
      f = Math.cos(a),
      d = Math.sin(a),
      p = (m, _, w) => (Ks(m, l, a, !0) ? 1 : Math.max(_, _ * n, w, w * n)),
      y = (m, _, w) => (Ks(m, l, a, !0) ? -1 : Math.min(_, _ * n, w, w * n)),
      v = p(0, u, f),
      x = p(at, c, d),
      g = y(ct, u, f),
      h = y(ct + at, c, d);
    (i = (v - g) / 2),
      (r = (x - h) / 2),
      (s = -(v + g) / 2),
      (o = -(x + h) / 2);
  }
  return { ratioX: i, ratioY: r, offsetX: s, offsetY: o };
}
class Di extends Gi {
  constructor(t, n) {
    super(t, n),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0);
  }
  linkScales() {}
  parse(t, n) {
    const i = this.getDataset().data,
      r = this._cachedMeta;
    if (this._parsing === !1) r._parsed = i;
    else {
      let s = (a) => +i[a];
      if (I(i[t])) {
        const { key: a = "value" } = this._parsing;
        s = (u) => +gr(i[u], a);
      }
      let o, l;
      for (o = t, l = t + n; o < l; ++o) r._parsed[o] = s(o);
    }
  }
  _getRotation() {
    return me(this.options.rotation - 90);
  }
  _getCircumference() {
    return me(this.options.circumference);
  }
  _getRotationExtents() {
    let t = st,
      n = -st;
    for (let i = 0; i < this.chart.data.datasets.length; ++i)
      if (
        this.chart.isDatasetVisible(i) &&
        this.chart.getDatasetMeta(i).type === this._type
      ) {
        const r = this.chart.getDatasetMeta(i).controller,
          s = r._getRotation(),
          o = r._getCircumference();
        (t = Math.min(t, s)), (n = Math.max(n, s + o));
      }
    return { rotation: t, circumference: n - t };
  }
  update(t) {
    const n = this.chart,
      { chartArea: i } = n,
      r = this._cachedMeta,
      s = r.data,
      o =
        this.getMaxBorderWidth() + this.getMaxOffset(s) + this.options.spacing,
      l = Math.max((Math.min(i.width, i.height) - o) / 2, 0),
      a = Math.min(B0(this.options.cutout, l), 1),
      u = this._getRingWeight(this.index),
      { circumference: c, rotation: f } = this._getRotationExtents(),
      { ratioX: d, ratioY: p, offsetX: y, offsetY: v } = tv(f, c, a),
      x = (i.width - o) / d,
      g = (i.height - o) / p,
      h = Math.max(Math.min(x, g) / 2, 0),
      m = tp(this.options.radius, h),
      _ = Math.max(m * a, 0),
      w = (m - _) / this._getVisibleDatasetWeightTotal();
    (this.offsetX = y * m),
      (this.offsetY = v * m),
      (r.total = this.calculateTotal()),
      (this.outerRadius = m - w * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - w * u, 0)),
      this.updateElements(s, 0, s.length, t);
  }
  _circumference(t, n) {
    const i = this.options,
      r = this._cachedMeta,
      s = this._getCircumference();
    return (n && i.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      r._parsed[t] === null ||
      r.data[t].hidden
      ? 0
      : this.calculateCircumference((r._parsed[t] * s) / st);
  }
  updateElements(t, n, i, r) {
    const s = r === "reset",
      o = this.chart,
      l = o.chartArea,
      u = o.options.animation,
      c = (l.left + l.right) / 2,
      f = (l.top + l.bottom) / 2,
      d = s && u.animateScale,
      p = d ? 0 : this.innerRadius,
      y = d ? 0 : this.outerRadius,
      { sharedOptions: v, includeOptions: x } = this._getSharedOptions(n, r);
    let g = this._getRotation(),
      h;
    for (h = 0; h < n; ++h) g += this._circumference(h, s);
    for (h = n; h < n + i; ++h) {
      const m = this._circumference(h, s),
        _ = t[h],
        w = {
          x: c + this.offsetX,
          y: f + this.offsetY,
          startAngle: g,
          endAngle: g + m,
          circumference: m,
          outerRadius: y,
          innerRadius: p,
        };
      x &&
        (w.options =
          v || this.resolveDataElementOptions(h, _.active ? "active" : r)),
        (g += m),
        this.updateElement(_, h, w, r);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta,
      n = t.data;
    let i = 0,
      r;
    for (r = 0; r < n.length; r++) {
      const s = t._parsed[r];
      s !== null &&
        !isNaN(s) &&
        this.chart.getDataVisibility(r) &&
        !n[r].hidden &&
        (i += Math.abs(s));
    }
    return i;
  }
  calculateCircumference(t) {
    const n = this._cachedMeta.total;
    return n > 0 && !isNaN(t) ? st * (Math.abs(t) / n) : 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      i = this.chart,
      r = i.data.labels || [],
      s = xo(n._parsed[t], i.options.locale);
    return { label: r[t] || "", value: s };
  }
  getMaxBorderWidth(t) {
    let n = 0;
    const i = this.chart;
    let r, s, o, l, a;
    if (!t) {
      for (r = 0, s = i.data.datasets.length; r < s; ++r)
        if (i.isDatasetVisible(r)) {
          (o = i.getDatasetMeta(r)), (t = o.data), (l = o.controller);
          break;
        }
    }
    if (!t) return 0;
    for (r = 0, s = t.length; r < s; ++r)
      (a = l.resolveDataElementOptions(r)),
        a.borderAlign !== "inner" &&
          (n = Math.max(n, a.borderWidth || 0, a.hoverBorderWidth || 0));
    return n;
  }
  getMaxOffset(t) {
    let n = 0;
    for (let i = 0, r = t.length; i < r; ++i) {
      const s = this.resolveDataElementOptions(i);
      n = Math.max(n, s.offset || 0, s.hoverOffset || 0);
    }
    return n;
  }
  _getRingWeightOffset(t) {
    let n = 0;
    for (let i = 0; i < t; ++i)
      this.chart.isDatasetVisible(i) && (n += this._getRingWeight(i));
    return n;
  }
  _getRingWeight(t) {
    return Math.max(B(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
D(Di, "id", "doughnut"),
  D(Di, "defaults", {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "circumference",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "startAngle",
          "x",
          "y",
          "offset",
          "borderWidth",
          "spacing",
        ],
      },
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r",
  }),
  D(Di, "descriptors", {
    _scriptable: (t) => t !== "spacing",
    _indexable: (t) =>
      t !== "spacing" &&
      !t.startsWith("borderDash") &&
      !t.startsWith("hoverBorderDash"),
  }),
  D(Di, "overrides", {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const n = t.data;
            if (n.labels.length && n.datasets.length) {
              const {
                labels: { pointStyle: i, color: r },
              } = t.legend.options;
              return n.labels.map((s, o) => {
                const a = t.getDatasetMeta(0).controller.getStyle(o);
                return {
                  text: s,
                  fillStyle: a.backgroundColor,
                  strokeStyle: a.borderColor,
                  fontColor: r,
                  lineWidth: a.borderWidth,
                  pointStyle: i,
                  hidden: !t.getDataVisibility(o),
                  index: o,
                };
              });
            }
            return [];
          },
        },
        onClick(t, n, i) {
          i.chart.toggleDataVisibility(n.index), i.chart.update();
        },
      },
    },
  });
class ta extends Di {}
D(ta, "id", "pie"),
  D(ta, "defaults", {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%",
  });
function cn() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
class pu {
  constructor(t) {
    D(this, "options");
    this.options = t || {};
  }
  static override(t) {
    Object.assign(pu.prototype, t);
  }
  init() {}
  formats() {
    return cn();
  }
  parse() {
    return cn();
  }
  format() {
    return cn();
  }
  add() {
    return cn();
  }
  diff() {
    return cn();
  }
  startOf() {
    return cn();
  }
  endOf() {
    return cn();
  }
}
var ev = { _date: pu };
function nv(e, t, n, i) {
  const { controller: r, data: s, _sorted: o } = e,
    l = r._cachedMeta.iScale;
  if (l && t === l.axis && t !== "r" && o && s.length) {
    const a = l._reversePixels ? Z0 : ql;
    if (i) {
      if (r._sharedOptions) {
        const u = s[0],
          c = typeof u.getRange == "function" && u.getRange(t);
        if (c) {
          const f = a(s, t, n - c),
            d = a(s, t, n + c);
          return { lo: f.lo, hi: d.hi };
        }
      }
    } else return a(s, t, n);
  }
  return { lo: 0, hi: s.length - 1 };
}
function br(e, t, n, i, r) {
  const s = e.getSortedVisibleDatasetMetas(),
    o = n[t];
  for (let l = 0, a = s.length; l < a; ++l) {
    const { index: u, data: c } = s[l],
      { lo: f, hi: d } = nv(s[l], t, o, r);
    for (let p = f; p <= d; ++p) {
      const y = c[p];
      y.skip || i(y, u, p);
    }
  }
}
function iv(e) {
  const t = e.indexOf("x") !== -1,
    n = e.indexOf("y") !== -1;
  return function (i, r) {
    const s = t ? Math.abs(i.x - r.x) : 0,
      o = n ? Math.abs(i.y - r.y) : 0;
    return Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2));
  };
}
function el(e, t, n, i, r) {
  const s = [];
  return (
    (!r && !e.isPointInArea(t)) ||
      br(
        e,
        n,
        t,
        function (l, a, u) {
          (!r && !Qn(l, e.chartArea, 0)) ||
            (l.inRange(t.x, t.y, i) &&
              s.push({ element: l, datasetIndex: a, index: u }));
        },
        !0
      ),
    s
  );
}
function rv(e, t, n, i) {
  let r = [];
  function s(o, l, a) {
    const { startAngle: u, endAngle: c } = o.getProps(
        ["startAngle", "endAngle"],
        i
      ),
      { angle: f } = ip(o, { x: t.x, y: t.y });
    Ks(f, u, c) && r.push({ element: o, datasetIndex: l, index: a });
  }
  return br(e, n, t, s), r;
}
function sv(e, t, n, i, r, s) {
  let o = [];
  const l = iv(n);
  let a = Number.POSITIVE_INFINITY;
  function u(c, f, d) {
    const p = c.inRange(t.x, t.y, r);
    if (i && !p) return;
    const y = c.getCenterPoint(r);
    if (!(!!s || e.isPointInArea(y)) && !p) return;
    const x = l(t, y);
    x < a
      ? ((o = [{ element: c, datasetIndex: f, index: d }]), (a = x))
      : x === a && o.push({ element: c, datasetIndex: f, index: d });
  }
  return br(e, n, t, u), o;
}
function nl(e, t, n, i, r, s) {
  return !s && !e.isPointInArea(t)
    ? []
    : n === "r" && !i
    ? rv(e, t, n, r)
    : sv(e, t, n, i, r, s);
}
function Zc(e, t, n, i, r) {
  const s = [],
    o = n === "x" ? "inXRange" : "inYRange";
  let l = !1;
  return (
    br(e, n, t, (a, u, c) => {
      a[o](t[n], r) &&
        (s.push({ element: a, datasetIndex: u, index: c }),
        (l = l || a.inRange(t.x, t.y, r)));
    }),
    i && !l ? [] : s
  );
}
var ov = {
  evaluateInteractionItems: br,
  modes: {
    index(e, t, n, i) {
      const r = pn(t, e),
        s = n.axis || "x",
        o = n.includeInvisible || !1,
        l = n.intersect ? el(e, r, s, i, o) : nl(e, r, s, !1, i, o),
        a = [];
      return l.length
        ? (e.getSortedVisibleDatasetMetas().forEach((u) => {
            const c = l[0].index,
              f = u.data[c];
            f &&
              !f.skip &&
              a.push({ element: f, datasetIndex: u.index, index: c });
          }),
          a)
        : [];
    },
    dataset(e, t, n, i) {
      const r = pn(t, e),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      let l = n.intersect ? el(e, r, s, i, o) : nl(e, r, s, !1, i, o);
      if (l.length > 0) {
        const a = l[0].datasetIndex,
          u = e.getDatasetMeta(a).data;
        l = [];
        for (let c = 0; c < u.length; ++c)
          l.push({ element: u[c], datasetIndex: a, index: c });
      }
      return l;
    },
    point(e, t, n, i) {
      const r = pn(t, e),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      return el(e, r, s, i, o);
    },
    nearest(e, t, n, i) {
      const r = pn(t, e),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      return nl(e, r, s, n.intersect, i, o);
    },
    x(e, t, n, i) {
      const r = pn(t, e);
      return Zc(e, r, "x", n.intersect, i);
    },
    y(e, t, n, i) {
      const r = pn(t, e);
      return Zc(e, r, "y", n.intersect, i);
    },
  },
};
const xp = ["left", "top", "right", "bottom"];
function Si(e, t) {
  return e.filter((n) => n.pos === t);
}
function qc(e, t) {
  return e.filter((n) => xp.indexOf(n.pos) === -1 && n.box.axis === t);
}
function bi(e, t) {
  return e.sort((n, i) => {
    const r = t ? i : n,
      s = t ? n : i;
    return r.weight === s.weight ? r.index - s.index : r.weight - s.weight;
  });
}
function lv(e) {
  const t = [];
  let n, i, r, s, o, l;
  for (n = 0, i = (e || []).length; n < i; ++n)
    (r = e[n]),
      ({
        position: s,
        options: { stack: o, stackWeight: l = 1 },
      } = r),
      t.push({
        index: n,
        box: r,
        pos: s,
        horizontal: r.isHorizontal(),
        weight: r.weight,
        stack: o && s + o,
        stackWeight: l,
      });
  return t;
}
function av(e) {
  const t = {};
  for (const n of e) {
    const { stack: i, pos: r, stackWeight: s } = n;
    if (!i || !xp.includes(r)) continue;
    const o = t[i] || (t[i] = { count: 0, placed: 0, weight: 0, size: 0 });
    o.count++, (o.weight += s);
  }
  return t;
}
function uv(e, t) {
  const n = av(e),
    { vBoxMaxWidth: i, hBoxMaxHeight: r } = t;
  let s, o, l;
  for (s = 0, o = e.length; s < o; ++s) {
    l = e[s];
    const { fullSize: a } = l.box,
      u = n[l.stack],
      c = u && l.stackWeight / u.weight;
    l.horizontal
      ? ((l.width = c ? c * i : a && t.availableWidth), (l.height = r))
      : ((l.width = i), (l.height = c ? c * r : a && t.availableHeight));
  }
  return n;
}
function cv(e) {
  const t = lv(e),
    n = bi(
      t.filter((u) => u.box.fullSize),
      !0
    ),
    i = bi(Si(t, "left"), !0),
    r = bi(Si(t, "right")),
    s = bi(Si(t, "top"), !0),
    o = bi(Si(t, "bottom")),
    l = qc(t, "x"),
    a = qc(t, "y");
  return {
    fullSize: n,
    leftAndTop: i.concat(s),
    rightAndBottom: r.concat(a).concat(o).concat(l),
    chartArea: Si(t, "chartArea"),
    vertical: i.concat(r).concat(a),
    horizontal: s.concat(o).concat(l),
  };
}
function Jc(e, t, n, i) {
  return Math.max(e[n], t[n]) + Math.max(e[i], t[i]);
}
function _p(e, t) {
  (e.top = Math.max(e.top, t.top)),
    (e.left = Math.max(e.left, t.left)),
    (e.bottom = Math.max(e.bottom, t.bottom)),
    (e.right = Math.max(e.right, t.right));
}
function fv(e, t, n, i) {
  const { pos: r, box: s } = n,
    o = e.maxPadding;
  if (!I(r)) {
    n.size && (e[r] -= n.size);
    const f = i[n.stack] || { size: 0, count: 1 };
    (f.size = Math.max(f.size, n.horizontal ? s.height : s.width)),
      (n.size = f.size / f.count),
      (e[r] += n.size);
  }
  s.getPadding && _p(o, s.getPadding());
  const l = Math.max(0, t.outerWidth - Jc(o, e, "left", "right")),
    a = Math.max(0, t.outerHeight - Jc(o, e, "top", "bottom")),
    u = l !== e.w,
    c = a !== e.h;
  return (
    (e.w = l),
    (e.h = a),
    n.horizontal ? { same: u, other: c } : { same: c, other: u }
  );
}
function dv(e) {
  const t = e.maxPadding;
  function n(i) {
    const r = Math.max(t[i] - e[i], 0);
    return (e[i] += r), r;
  }
  (e.y += n("top")), (e.x += n("left")), n("right"), n("bottom");
}
function hv(e, t) {
  const n = t.maxPadding;
  function i(r) {
    const s = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      r.forEach((o) => {
        s[o] = Math.max(t[o], n[o]);
      }),
      s
    );
  }
  return i(e ? ["left", "right"] : ["top", "bottom"]);
}
function Ri(e, t, n, i) {
  const r = [];
  let s, o, l, a, u, c;
  for (s = 0, o = e.length, u = 0; s < o; ++s) {
    (l = e[s]),
      (a = l.box),
      a.update(l.width || t.w, l.height || t.h, hv(l.horizontal, t));
    const { same: f, other: d } = fv(t, n, l, i);
    (u |= f && r.length), (c = c || d), a.fullSize || r.push(l);
  }
  return (u && Ri(r, t, n, i)) || c;
}
function Gr(e, t, n, i, r) {
  (e.top = n),
    (e.left = t),
    (e.right = t + i),
    (e.bottom = n + r),
    (e.width = i),
    (e.height = r);
}
function tf(e, t, n, i) {
  const r = n.padding;
  let { x: s, y: o } = t;
  for (const l of e) {
    const a = l.box,
      u = i[l.stack] || { count: 1, placed: 0, weight: 1 },
      c = l.stackWeight / u.weight || 1;
    if (l.horizontal) {
      const f = t.w * c,
        d = u.size || a.height;
      Us(u.start) && (o = u.start),
        a.fullSize
          ? Gr(a, r.left, o, n.outerWidth - r.right - r.left, d)
          : Gr(a, t.left + u.placed, o, f, d),
        (u.start = o),
        (u.placed += f),
        (o = a.bottom);
    } else {
      const f = t.h * c,
        d = u.size || a.width;
      Us(u.start) && (s = u.start),
        a.fullSize
          ? Gr(a, s, r.top, d, n.outerHeight - r.bottom - r.top)
          : Gr(a, s, t.top + u.placed, d, f),
        (u.start = s),
        (u.placed += f),
        (s = a.right);
    }
  }
  (t.x = s), (t.y = o);
}
var Ye = {
  addBox(e, t) {
    e.boxes || (e.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || "top"),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(n) {
                t.draw(n);
              },
            },
          ];
        }),
      e.boxes.push(t);
  },
  removeBox(e, t) {
    const n = e.boxes ? e.boxes.indexOf(t) : -1;
    n !== -1 && e.boxes.splice(n, 1);
  },
  configure(e, t, n) {
    (t.fullSize = n.fullSize), (t.position = n.position), (t.weight = n.weight);
  },
  update(e, t, n, i) {
    if (!e) return;
    const r = Tt(e.options.layout.padding),
      s = Math.max(t - r.width, 0),
      o = Math.max(n - r.height, 0),
      l = cv(e.boxes),
      a = l.vertical,
      u = l.horizontal;
    H(e.boxes, (v) => {
      typeof v.beforeLayout == "function" && v.beforeLayout();
    });
    const c =
        a.reduce(
          (v, x) => (x.box.options && x.box.options.display === !1 ? v : v + 1),
          0
        ) || 1,
      f = Object.freeze({
        outerWidth: t,
        outerHeight: n,
        padding: r,
        availableWidth: s,
        availableHeight: o,
        vBoxMaxWidth: s / 2 / c,
        hBoxMaxHeight: o / 2,
      }),
      d = Object.assign({}, r);
    _p(d, Tt(i));
    const p = Object.assign(
        { maxPadding: d, w: s, h: o, x: r.left, y: r.top },
        r
      ),
      y = uv(a.concat(u), f);
    Ri(l.fullSize, p, f, y),
      Ri(a, p, f, y),
      Ri(u, p, f, y) && Ri(a, p, f, y),
      dv(p),
      tf(l.leftAndTop, p, f, y),
      (p.x += p.w),
      (p.y += p.h),
      tf(l.rightAndBottom, p, f, y),
      (e.chartArea = {
        left: p.left,
        top: p.top,
        right: p.left + p.w,
        bottom: p.top + p.h,
        height: p.h,
        width: p.w,
      }),
      H(l.chartArea, (v) => {
        const x = v.box;
        Object.assign(x, e.chartArea),
          x.update(p.w, p.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class wp {
  acquireContext(t, n) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, n, i) {}
  removeEventListener(t, n, i) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, n, i, r) {
    return (
      (n = Math.max(0, n || t.width)),
      (i = i || t.height),
      { width: n, height: Math.max(0, r ? Math.floor(n / r) : i) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class pv extends wp {
  acquireContext(t) {
    return (t && t.getContext && t.getContext("2d")) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const ms = "$chartjs",
  gv = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  ef = (e) => e === null || e === "";
function mv(e, t) {
  const n = e.style,
    i = e.getAttribute("height"),
    r = e.getAttribute("width");
  if (
    ((e[ms] = {
      initial: {
        height: i,
        width: r,
        style: { display: n.display, height: n.height, width: n.width },
      },
    }),
    (n.display = n.display || "block"),
    (n.boxSizing = n.boxSizing || "border-box"),
    ef(r))
  ) {
    const s = Vc(e, "width");
    s !== void 0 && (e.width = s);
  }
  if (ef(i))
    if (e.style.height === "") e.height = e.width / (t || 2);
    else {
      const s = Vc(e, "height");
      s !== void 0 && (e.height = s);
    }
  return e;
}
const kp = Fy ? { passive: !0 } : !1;
function yv(e, t, n) {
  e && e.addEventListener(t, n, kp);
}
function vv(e, t, n) {
  e && e.canvas && e.canvas.removeEventListener(t, n, kp);
}
function xv(e, t) {
  const n = gv[e.type] || e.type,
    { x: i, y: r } = pn(e, t);
  return {
    type: n,
    chart: t,
    native: e,
    x: i !== void 0 ? i : null,
    y: r !== void 0 ? r : null,
  };
}
function qs(e, t) {
  for (const n of e) if (n === t || n.contains(t)) return !0;
}
function _v(e, t, n) {
  const i = e.canvas,
    r = new MutationObserver((s) => {
      let o = !1;
      for (const l of s)
        (o = o || qs(l.addedNodes, i)), (o = o && !qs(l.removedNodes, i));
      o && n();
    });
  return r.observe(document, { childList: !0, subtree: !0 }), r;
}
function wv(e, t, n) {
  const i = e.canvas,
    r = new MutationObserver((s) => {
      let o = !1;
      for (const l of s)
        (o = o || qs(l.removedNodes, i)), (o = o && !qs(l.addedNodes, i));
      o && n();
    });
  return r.observe(document, { childList: !0, subtree: !0 }), r;
}
const mr = new Map();
let nf = 0;
function Sp() {
  const e = window.devicePixelRatio;
  e !== nf &&
    ((nf = e),
    mr.forEach((t, n) => {
      n.currentDevicePixelRatio !== e && t();
    }));
}
function kv(e, t) {
  mr.size || window.addEventListener("resize", Sp), mr.set(e, t);
}
function Sv(e) {
  mr.delete(e), mr.size || window.removeEventListener("resize", Sp);
}
function bv(e, t, n) {
  const i = e.canvas,
    r = i && hu(i);
  if (!r) return;
  const s = op((l, a) => {
      const u = r.clientWidth;
      n(l, a), u < r.clientWidth && n();
    }, window),
    o = new ResizeObserver((l) => {
      const a = l[0],
        u = a.contentRect.width,
        c = a.contentRect.height;
      (u === 0 && c === 0) || s(u, c);
    });
  return o.observe(r), kv(e, s), o;
}
function il(e, t, n) {
  n && n.disconnect(), t === "resize" && Sv(e);
}
function Cv(e, t, n) {
  const i = e.canvas,
    r = op((s) => {
      e.ctx !== null && n(xv(s, e));
    }, e);
  return yv(i, t, r), r;
}
class Mv extends wp {
  acquireContext(t, n) {
    const i = t && t.getContext && t.getContext("2d");
    return i && i.canvas === t ? (mv(t, n), i) : null;
  }
  releaseContext(t) {
    const n = t.canvas;
    if (!n[ms]) return !1;
    const i = n[ms].initial;
    ["height", "width"].forEach((s) => {
      const o = i[s];
      tt(o) ? n.removeAttribute(s) : n.setAttribute(s, o);
    });
    const r = i.style || {};
    return (
      Object.keys(r).forEach((s) => {
        n.style[s] = r[s];
      }),
      (n.width = n.width),
      delete n[ms],
      !0
    );
  }
  addEventListener(t, n, i) {
    this.removeEventListener(t, n);
    const r = t.$proxies || (t.$proxies = {}),
      o = { attach: _v, detach: wv, resize: bv }[n] || Cv;
    r[n] = o(t, n, i);
  }
  removeEventListener(t, n) {
    const i = t.$proxies || (t.$proxies = {}),
      r = i[n];
    if (!r) return;
    (({ attach: il, detach: il, resize: il })[n] || vv)(t, n, r),
      (i[n] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, n, i, r) {
    return Ny(t, n, i, r);
  }
  isAttached(t) {
    const n = hu(t);
    return !!(n && n.isConnected);
  }
}
function Ev(e) {
  return !du() || (typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas)
    ? pv
    : Mv;
}
class En {
  constructor() {
    D(this, "x");
    D(this, "y");
    D(this, "active", !1);
    D(this, "options");
    D(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: n, y: i } = this.getProps(["x", "y"], t);
    return { x: n, y: i };
  }
  hasValue() {
    return Xs(this.x) && Xs(this.y);
  }
  getProps(t, n) {
    const i = this.$animations;
    if (!n || !i) return this;
    const r = {};
    return (
      t.forEach((s) => {
        r[s] = i[s] && i[s].active() ? i[s]._to : this[s];
      }),
      r
    );
  }
}
D(En, "defaults", {}), D(En, "defaultRoutes");
function Pv(e, t) {
  const n = e.options.ticks,
    i = Tv(e),
    r = Math.min(n.maxTicksLimit || i, i),
    s = n.major.enabled ? Lv(t) : [],
    o = s.length,
    l = s[0],
    a = s[o - 1],
    u = [];
  if (o > r) return Ov(t, u, s, o / r), u;
  const c = Av(s, t, r);
  if (o > 0) {
    let f, d;
    const p = o > 1 ? Math.round((a - l) / (o - 1)) : null;
    for ($r(t, u, c, tt(p) ? 0 : l - p, l), f = 0, d = o - 1; f < d; f++)
      $r(t, u, c, s[f], s[f + 1]);
    return $r(t, u, c, a, tt(p) ? t.length : a + p), u;
  }
  return $r(t, u, c), u;
}
function Tv(e) {
  const t = e.options.offset,
    n = e._tickSize(),
    i = e._length / n + (t ? 0 : 1),
    r = e._maxLength / n;
  return Math.floor(Math.min(i, r));
}
function Av(e, t, n) {
  const i = Dv(e),
    r = t.length / n;
  if (!i) return Math.max(r, 1);
  const s = X0(i);
  for (let o = 0, l = s.length - 1; o < l; o++) {
    const a = s[o];
    if (a > r) return a;
  }
  return Math.max(r, 1);
}
function Lv(e) {
  const t = [];
  let n, i;
  for (n = 0, i = e.length; n < i; n++) e[n].major && t.push(n);
  return t;
}
function Ov(e, t, n, i) {
  let r = 0,
    s = n[0],
    o;
  for (i = Math.ceil(i), o = 0; o < e.length; o++)
    o === s && (t.push(e[o]), r++, (s = n[r * i]));
}
function $r(e, t, n, i, r) {
  const s = B(i, 0),
    o = Math.min(B(r, e.length), e.length);
  let l = 0,
    a,
    u,
    c;
  for (
    n = Math.ceil(n), r && ((a = r - i), (n = a / Math.floor(a / n))), c = s;
    c < 0;

  )
    l++, (c = Math.round(s + l * n));
  for (u = Math.max(s, 0); u < o; u++)
    u === c && (t.push(e[u]), l++, (c = Math.round(s + l * n)));
}
function Dv(e) {
  const t = e.length;
  let n, i;
  if (t < 2) return !1;
  for (i = e[0], n = 1; n < t; ++n) if (e[n] - e[n - 1] !== i) return !1;
  return i;
}
const Rv = (e) => (e === "left" ? "right" : e === "right" ? "left" : e),
  rf = (e, t, n) => (t === "top" || t === "left" ? e[t] + n : e[t] - n),
  sf = (e, t) => Math.min(t || e, e);
function of(e, t) {
  const n = [],
    i = e.length / t,
    r = e.length;
  let s = 0;
  for (; s < r; s += i) n.push(e[Math.floor(s)]);
  return n;
}
function zv(e, t, n) {
  const i = e.ticks.length,
    r = Math.min(t, i - 1),
    s = e._startPixel,
    o = e._endPixel,
    l = 1e-6;
  let a = e.getPixelForTick(r),
    u;
  if (
    !(
      n &&
      (i === 1
        ? (u = Math.max(a - s, o - a))
        : t === 0
        ? (u = (e.getPixelForTick(1) - a) / 2)
        : (u = (a - e.getPixelForTick(r - 1)) / 2),
      (a += r < t ? u : -u),
      a < s - l || a > o + l)
    )
  )
    return a;
}
function Nv(e, t) {
  H(e, (n) => {
    const i = n.gc,
      r = i.length / 2;
    let s;
    if (r > t) {
      for (s = 0; s < r; ++s) delete n.data[i[s]];
      i.splice(0, r);
    }
  });
}
function Ci(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function lf(e, t) {
  if (!e.display) return 0;
  const n = yt(e.font, t),
    i = Tt(e.padding);
  return (rt(e.text) ? e.text.length : 1) * n.lineHeight + i.height;
}
function Fv(e, t) {
  return An(e, { scale: t, type: "scale" });
}
function Iv(e, t, n) {
  return An(e, { tick: n, index: t, type: "tick" });
}
function jv(e, t, n) {
  let i = lp(e);
  return ((n && t !== "right") || (!n && t === "right")) && (i = Rv(i)), i;
}
function Bv(e, t, n, i) {
  const { top: r, left: s, bottom: o, right: l, chart: a } = e,
    { chartArea: u, scales: c } = a;
  let f = 0,
    d,
    p,
    y;
  const v = o - r,
    x = l - s;
  if (e.isHorizontal()) {
    if (((p = jt(i, s, l)), I(n))) {
      const g = Object.keys(n)[0],
        h = n[g];
      y = c[g].getPixelForValue(h) + v - t;
    } else
      n === "center" ? (y = (u.bottom + u.top) / 2 + v - t) : (y = rf(e, n, t));
    d = l - s;
  } else {
    if (I(n)) {
      const g = Object.keys(n)[0],
        h = n[g];
      p = c[g].getPixelForValue(h) - x + t;
    } else
      n === "center" ? (p = (u.left + u.right) / 2 - x + t) : (p = rf(e, n, t));
    (y = jt(i, o, r)), (f = n === "left" ? -at : at);
  }
  return { titleX: p, titleY: y, maxWidth: d, rotation: f };
}
class hi extends En {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    (this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax));
  }
  parse(t, n) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: n, _suggestedMin: i, _suggestedMax: r } = this;
    return (
      (t = Bt(t, Number.POSITIVE_INFINITY)),
      (n = Bt(n, Number.NEGATIVE_INFINITY)),
      (i = Bt(i, Number.POSITIVE_INFINITY)),
      (r = Bt(r, Number.NEGATIVE_INFINITY)),
      { min: Bt(t, i), max: Bt(n, r), minDefined: pt(t), maxDefined: pt(n) }
    );
  }
  getMinMax(t) {
    let { min: n, max: i, minDefined: r, maxDefined: s } = this.getUserBounds(),
      o;
    if (r && s) return { min: n, max: i };
    const l = this.getMatchingVisibleMetas();
    for (let a = 0, u = l.length; a < u; ++a)
      (o = l[a].controller.getMinMax(this, t)),
        r || (n = Math.min(n, o.min)),
        s || (i = Math.max(i, o.max));
    return (
      (n = s && n > i ? i : n),
      (i = r && n > i ? n : i),
      { min: Bt(n, Bt(i, n)), max: Bt(i, Bt(n, i)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    Y(this.options.beforeUpdate, [this]);
  }
  update(t, n, i) {
    const { beginAtZero: r, grace: s, ticks: o } = this.options,
      l = o.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = i =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + i.left + i.right
        : this.height + i.top + i.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = wy(this, s, r)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const a = l < this.ticks.length;
    this._convertTicksToLabels(a ? of(this.ticks, l) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      o.display &&
        (o.autoSkip || o.source === "auto") &&
        ((this.ticks = Pv(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      a && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse,
      n,
      i;
    this.isHorizontal()
      ? ((n = this.left), (i = this.right))
      : ((n = this.top), (i = this.bottom), (t = !t)),
      (this._startPixel = n),
      (this._endPixel = i),
      (this._reversePixels = t),
      (this._length = i - n),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    Y(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    Y(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    Y(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), Y(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    Y(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const n = this.options.ticks;
    let i, r, s;
    for (i = 0, r = t.length; i < r; i++)
      (s = t[i]), (s.label = Y(n.callback, [s.value, i, t], this));
  }
  afterTickToLabelConversion() {
    Y(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    Y(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      n = t.ticks,
      i = sf(this.ticks.length, t.ticks.maxTicksLimit),
      r = n.minRotation || 0,
      s = n.maxRotation;
    let o = r,
      l,
      a,
      u;
    if (
      !this._isVisible() ||
      !n.display ||
      r >= s ||
      i <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = r;
      return;
    }
    const c = this._getLabelSizes(),
      f = c.widest.width,
      d = c.highest.height,
      p = qt(this.chart.width - f, 0, this.maxWidth);
    (l = t.offset ? this.maxWidth / i : p / (i - 1)),
      f + 6 > l &&
        ((l = p / (i - (t.offset ? 0.5 : 1))),
        (a =
          this.maxHeight -
          Ci(t.grid) -
          n.padding -
          lf(t.title, this.chart.options.font)),
        (u = Math.sqrt(f * f + d * d)),
        (o = ru(
          Math.min(
            Math.asin(qt((c.highest.height + 6) / l, -1, 1)),
            Math.asin(qt(a / u, -1, 1)) - Math.asin(qt(d / u, -1, 1))
          )
        )),
        (o = Math.max(r, Math.min(s, o)))),
      (this.labelRotation = o);
  }
  afterCalculateLabelRotation() {
    Y(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    Y(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: n,
        options: { ticks: i, title: r, grid: s },
      } = this,
      o = this._isVisible(),
      l = this.isHorizontal();
    if (o) {
      const a = lf(r, n.options.font);
      if (
        (l
          ? ((t.width = this.maxWidth), (t.height = Ci(s) + a))
          : ((t.height = this.maxHeight), (t.width = Ci(s) + a)),
        i.display && this.ticks.length)
      ) {
        const {
            first: u,
            last: c,
            widest: f,
            highest: d,
          } = this._getLabelSizes(),
          p = i.padding * 2,
          y = me(this.labelRotation),
          v = Math.cos(y),
          x = Math.sin(y);
        if (l) {
          const g = i.mirror ? 0 : x * f.width + v * d.height;
          t.height = Math.min(this.maxHeight, t.height + g + p);
        } else {
          const g = i.mirror ? 0 : v * f.width + x * d.height;
          t.width = Math.min(this.maxWidth, t.width + g + p);
        }
        this._calculatePadding(u, c, x, v);
      }
    }
    this._handleMargins(),
      l
        ? ((this.width = this._length =
            n.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            n.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(t, n, i, r) {
    const {
        ticks: { align: s, padding: o },
        position: l,
      } = this.options,
      a = this.labelRotation !== 0,
      u = l !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const c = this.getPixelForTick(0) - this.left,
        f = this.right - this.getPixelForTick(this.ticks.length - 1);
      let d = 0,
        p = 0;
      a
        ? u
          ? ((d = r * t.width), (p = i * n.height))
          : ((d = i * t.height), (p = r * n.width))
        : s === "start"
        ? (p = n.width)
        : s === "end"
        ? (d = t.width)
        : s !== "inner" && ((d = t.width / 2), (p = n.width / 2)),
        (this.paddingLeft = Math.max(
          ((d - c + o) * this.width) / (this.width - c),
          0
        )),
        (this.paddingRight = Math.max(
          ((p - f + o) * this.width) / (this.width - f),
          0
        ));
    } else {
      let c = n.height / 2,
        f = t.height / 2;
      s === "start"
        ? ((c = 0), (f = t.height))
        : s === "end" && ((c = n.height), (f = 0)),
        (this.paddingTop = c + o),
        (this.paddingBottom = f + o);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    Y(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: n } = this.options;
    return n === "top" || n === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let n, i;
    for (n = 0, i = t.length; n < i; n++)
      tt(t[n].label) && (t.splice(n, 1), i--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const n = this.options.ticks.sampleSize;
      let i = this.ticks;
      n < i.length && (i = of(i, n)),
        (this._labelSizes = t =
          this._computeLabelSizes(
            i,
            i.length,
            this.options.ticks.maxTicksLimit
          ));
    }
    return t;
  }
  _computeLabelSizes(t, n, i) {
    const { ctx: r, _longestTextCache: s } = this,
      o = [],
      l = [],
      a = Math.floor(n / sf(n, i));
    let u = 0,
      c = 0,
      f,
      d,
      p,
      y,
      v,
      x,
      g,
      h,
      m,
      _,
      w;
    for (f = 0; f < n; f += a) {
      if (
        ((y = t[f].label),
        (v = this._resolveTickFontOptions(f)),
        (r.font = x = v.string),
        (g = s[x] = s[x] || { data: {}, gc: [] }),
        (h = v.lineHeight),
        (m = _ = 0),
        !tt(y) && !rt(y))
      )
        (m = Gs(r, g.data, g.gc, m, y)), (_ = h);
      else if (rt(y))
        for (d = 0, p = y.length; d < p; ++d)
          (w = y[d]),
            !tt(w) && !rt(w) && ((m = Gs(r, g.data, g.gc, m, w)), (_ += h));
      o.push(m), l.push(_), (u = Math.max(m, u)), (c = Math.max(_, c));
    }
    Nv(s, n);
    const k = o.indexOf(u),
      S = l.indexOf(c),
      b = (A) => ({ width: o[A] || 0, height: l[A] || 0 });
    return {
      first: b(0),
      last: b(n - 1),
      widest: b(k),
      highest: b(S),
      widths: o,
      heights: l,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, n) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const n = this._startPixel + t * this._length;
    return $0(this._alignToPixels ? un(this.chart, n, 0) : n);
  }
  getDecimalForPixel(t) {
    const n = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - n : n;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: n } = this;
    return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0;
  }
  getContext(t) {
    const n = this.ticks || [];
    if (t >= 0 && t < n.length) {
      const i = n[t];
      return i.$context || (i.$context = Iv(this.getContext(), t, i));
    }
    return this.$context || (this.$context = Fv(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      n = me(this.labelRotation),
      i = Math.abs(Math.cos(n)),
      r = Math.abs(Math.sin(n)),
      s = this._getLabelSizes(),
      o = t.autoSkipPadding || 0,
      l = s ? s.widest.width + o : 0,
      a = s ? s.highest.height + o : 0;
    return this.isHorizontal()
      ? a * i > l * r
        ? l / i
        : a / r
      : a * r < l * i
      ? a / i
      : l / r;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const n = this.axis,
      i = this.chart,
      r = this.options,
      { grid: s, position: o, border: l } = r,
      a = s.offset,
      u = this.isHorizontal(),
      f = this.ticks.length + (a ? 1 : 0),
      d = Ci(s),
      p = [],
      y = l.setContext(this.getContext()),
      v = y.display ? y.width : 0,
      x = v / 2,
      g = function (V) {
        return un(i, V, v);
      };
    let h, m, _, w, k, S, b, A, P, O, z, q;
    if (o === "top")
      (h = g(this.bottom)),
        (S = this.bottom - d),
        (A = h - x),
        (O = g(t.top) + x),
        (q = t.bottom);
    else if (o === "bottom")
      (h = g(this.top)),
        (O = t.top),
        (q = g(t.bottom) - x),
        (S = h + x),
        (A = this.top + d);
    else if (o === "left")
      (h = g(this.right)),
        (k = this.right - d),
        (b = h - x),
        (P = g(t.left) + x),
        (z = t.right);
    else if (o === "right")
      (h = g(this.left)),
        (P = t.left),
        (z = g(t.right) - x),
        (k = h + x),
        (b = this.left + d);
    else if (n === "x") {
      if (o === "center") h = g((t.top + t.bottom) / 2 + 0.5);
      else if (I(o)) {
        const V = Object.keys(o)[0],
          X = o[V];
        h = g(this.chart.scales[V].getPixelForValue(X));
      }
      (O = t.top), (q = t.bottom), (S = h + x), (A = S + d);
    } else if (n === "y") {
      if (o === "center") h = g((t.left + t.right) / 2);
      else if (I(o)) {
        const V = Object.keys(o)[0],
          X = o[V];
        h = g(this.chart.scales[V].getPixelForValue(X));
      }
      (k = h - x), (b = k - d), (P = t.left), (z = t.right);
    }
    const _t = B(r.ticks.maxTicksLimit, f),
      j = Math.max(1, Math.ceil(f / _t));
    for (m = 0; m < f; m += j) {
      const V = this.getContext(m),
        X = s.setContext(V),
        E = l.setContext(V),
        L = X.lineWidth,
        R = X.color,
        U = E.dash || [],
        K = E.dashOffset,
        ue = X.tickWidth,
        Ct = X.tickColor,
        xe = X.tickBorderDash || [],
        Mt = X.tickBorderDashOffset;
      (_ = zv(this, m, a)),
        _ !== void 0 &&
          ((w = un(i, _, L)),
          u ? (k = b = P = z = w) : (S = A = O = q = w),
          p.push({
            tx1: k,
            ty1: S,
            tx2: b,
            ty2: A,
            x1: P,
            y1: O,
            x2: z,
            y2: q,
            width: L,
            color: R,
            borderDash: U,
            borderDashOffset: K,
            tickWidth: ue,
            tickColor: Ct,
            tickBorderDash: xe,
            tickBorderDashOffset: Mt,
          }));
    }
    return (this._ticksLength = f), (this._borderValue = h), p;
  }
  _computeLabelItems(t) {
    const n = this.axis,
      i = this.options,
      { position: r, ticks: s } = i,
      o = this.isHorizontal(),
      l = this.ticks,
      { align: a, crossAlign: u, padding: c, mirror: f } = s,
      d = Ci(i.grid),
      p = d + c,
      y = f ? -c : p,
      v = -me(this.labelRotation),
      x = [];
    let g,
      h,
      m,
      _,
      w,
      k,
      S,
      b,
      A,
      P,
      O,
      z,
      q = "middle";
    if (r === "top")
      (k = this.bottom - y), (S = this._getXAxisLabelAlignment());
    else if (r === "bottom")
      (k = this.top + y), (S = this._getXAxisLabelAlignment());
    else if (r === "left") {
      const j = this._getYAxisLabelAlignment(d);
      (S = j.textAlign), (w = j.x);
    } else if (r === "right") {
      const j = this._getYAxisLabelAlignment(d);
      (S = j.textAlign), (w = j.x);
    } else if (n === "x") {
      if (r === "center") k = (t.top + t.bottom) / 2 + p;
      else if (I(r)) {
        const j = Object.keys(r)[0],
          V = r[j];
        k = this.chart.scales[j].getPixelForValue(V) + p;
      }
      S = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (r === "center") w = (t.left + t.right) / 2 - p;
      else if (I(r)) {
        const j = Object.keys(r)[0],
          V = r[j];
        w = this.chart.scales[j].getPixelForValue(V);
      }
      S = this._getYAxisLabelAlignment(d).textAlign;
    }
    n === "y" && (a === "start" ? (q = "top") : a === "end" && (q = "bottom"));
    const _t = this._getLabelSizes();
    for (g = 0, h = l.length; g < h; ++g) {
      (m = l[g]), (_ = m.label);
      const j = s.setContext(this.getContext(g));
      (b = this.getPixelForTick(g) + s.labelOffset),
        (A = this._resolveTickFontOptions(g)),
        (P = A.lineHeight),
        (O = rt(_) ? _.length : 1);
      const V = O / 2,
        X = j.color,
        E = j.textStrokeColor,
        L = j.textStrokeWidth;
      let R = S;
      o
        ? ((w = b),
          S === "inner" &&
            (g === h - 1
              ? (R = this.options.reverse ? "left" : "right")
              : g === 0
              ? (R = this.options.reverse ? "right" : "left")
              : (R = "center")),
          r === "top"
            ? u === "near" || v !== 0
              ? (z = -O * P + P / 2)
              : u === "center"
              ? (z = -_t.highest.height / 2 - V * P + P)
              : (z = -_t.highest.height + P / 2)
            : u === "near" || v !== 0
            ? (z = P / 2)
            : u === "center"
            ? (z = _t.highest.height / 2 - V * P)
            : (z = _t.highest.height - O * P),
          f && (z *= -1),
          v !== 0 && !j.showLabelBackdrop && (w += (P / 2) * Math.sin(v)))
        : ((k = b), (z = ((1 - O) * P) / 2));
      let U;
      if (j.showLabelBackdrop) {
        const K = Tt(j.backdropPadding),
          ue = _t.heights[g],
          Ct = _t.widths[g];
        let xe = z - K.top,
          Mt = 0 - K.left;
        switch (q) {
          case "middle":
            xe -= ue / 2;
            break;
          case "bottom":
            xe -= ue;
            break;
        }
        switch (S) {
          case "center":
            Mt -= Ct / 2;
            break;
          case "right":
            Mt -= Ct;
            break;
          case "inner":
            g === h - 1 ? (Mt -= Ct) : g > 0 && (Mt -= Ct / 2);
            break;
        }
        U = {
          left: Mt,
          top: xe,
          width: Ct + K.width,
          height: ue + K.height,
          color: j.backdropColor,
        };
      }
      x.push({
        label: _,
        font: A,
        textOffset: z,
        options: {
          rotation: v,
          color: X,
          strokeColor: E,
          strokeWidth: L,
          textAlign: R,
          textBaseline: q,
          translation: [w, k],
          backdrop: U,
        },
      });
    }
    return x;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options;
    if (-me(this.labelRotation)) return t === "top" ? "left" : "right";
    let r = "center";
    return (
      n.align === "start"
        ? (r = "left")
        : n.align === "end"
        ? (r = "right")
        : n.align === "inner" && (r = "inner"),
      r
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: n,
        ticks: { crossAlign: i, mirror: r, padding: s },
      } = this.options,
      o = this._getLabelSizes(),
      l = t + s,
      a = o.widest.width;
    let u, c;
    return (
      n === "left"
        ? r
          ? ((c = this.right + s),
            i === "near"
              ? (u = "left")
              : i === "center"
              ? ((u = "center"), (c += a / 2))
              : ((u = "right"), (c += a)))
          : ((c = this.right - l),
            i === "near"
              ? (u = "right")
              : i === "center"
              ? ((u = "center"), (c -= a / 2))
              : ((u = "left"), (c = this.left)))
        : n === "right"
        ? r
          ? ((c = this.left + s),
            i === "near"
              ? (u = "right")
              : i === "center"
              ? ((u = "center"), (c -= a / 2))
              : ((u = "left"), (c -= a)))
          : ((c = this.left + l),
            i === "near"
              ? (u = "left")
              : i === "center"
              ? ((u = "center"), (c += a / 2))
              : ((u = "right"), (c = this.right)))
        : (u = "right"),
      { textAlign: u, x: c }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      n = this.options.position;
    if (n === "left" || n === "right")
      return { top: 0, left: this.left, bottom: t.height, right: this.right };
    if (n === "top" || n === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: n },
      left: i,
      top: r,
      width: s,
      height: o,
    } = this;
    n && (t.save(), (t.fillStyle = n), t.fillRect(i, r, s, o), t.restore());
  }
  getLineWidthForValue(t) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display) return 0;
    const r = this.ticks.findIndex((s) => s.value === t);
    return r >= 0 ? n.setContext(this.getContext(r)).lineWidth : 0;
  }
  drawGrid(t) {
    const n = this.options.grid,
      i = this.ctx,
      r =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t));
    let s, o;
    const l = (a, u, c) => {
      !c.width ||
        !c.color ||
        (i.save(),
        (i.lineWidth = c.width),
        (i.strokeStyle = c.color),
        i.setLineDash(c.borderDash || []),
        (i.lineDashOffset = c.borderDashOffset),
        i.beginPath(),
        i.moveTo(a.x, a.y),
        i.lineTo(u.x, u.y),
        i.stroke(),
        i.restore());
    };
    if (n.display)
      for (s = 0, o = r.length; s < o; ++s) {
        const a = r[s];
        n.drawOnChartArea && l({ x: a.x1, y: a.y1 }, { x: a.x2, y: a.y2 }, a),
          n.drawTicks &&
            l(
              { x: a.tx1, y: a.ty1 },
              { x: a.tx2, y: a.ty2 },
              {
                color: a.tickColor,
                width: a.tickWidth,
                borderDash: a.tickBorderDash,
                borderDashOffset: a.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: n,
        options: { border: i, grid: r },
      } = this,
      s = i.setContext(this.getContext()),
      o = i.display ? s.width : 0;
    if (!o) return;
    const l = r.setContext(this.getContext(0)).lineWidth,
      a = this._borderValue;
    let u, c, f, d;
    this.isHorizontal()
      ? ((u = un(t, this.left, o) - o / 2),
        (c = un(t, this.right, l) + l / 2),
        (f = d = a))
      : ((f = un(t, this.top, o) - o / 2),
        (d = un(t, this.bottom, l) + l / 2),
        (u = c = a)),
      n.save(),
      (n.lineWidth = s.width),
      (n.strokeStyle = s.color),
      n.beginPath(),
      n.moveTo(u, f),
      n.lineTo(c, d),
      n.stroke(),
      n.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const i = this.ctx,
      r = this._computeLabelArea();
    r && ou(i, r);
    const s = this.getLabelItems(t);
    for (const o of s) {
      const l = o.options,
        a = o.font,
        u = o.label,
        c = o.textOffset;
      ai(i, u, 0, c, a, l);
    }
    r && lu(i);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: n, title: i, reverse: r },
    } = this;
    if (!i.display) return;
    const s = yt(i.font),
      o = Tt(i.padding),
      l = i.align;
    let a = s.lineHeight / 2;
    n === "bottom" || n === "center" || I(n)
      ? ((a += o.bottom),
        rt(i.text) && (a += s.lineHeight * (i.text.length - 1)))
      : (a += o.top);
    const {
      titleX: u,
      titleY: c,
      maxWidth: f,
      rotation: d,
    } = Bv(this, a, n, l);
    ai(t, i.text, 0, 0, s, {
      color: i.color,
      maxWidth: f,
      rotation: d,
      textAlign: jv(l, n, r),
      textBaseline: "middle",
      translation: [u, c],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      n = (t.ticks && t.ticks.z) || 0,
      i = B(t.grid && t.grid.z, -1),
      r = B(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== hi.prototype.draw
      ? [
          {
            z: n,
            draw: (s) => {
              this.draw(s);
            },
          },
        ]
      : [
          {
            z: i,
            draw: (s) => {
              this.drawBackground(), this.drawGrid(s), this.drawTitle();
            },
          },
          {
            z: r,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: n,
            draw: (s) => {
              this.drawLabels(s);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const n = this.chart.getSortedVisibleDatasetMetas(),
      i = this.axis + "AxisID",
      r = [];
    let s, o;
    for (s = 0, o = n.length; s < o; ++s) {
      const l = n[s];
      l[i] === this.id && (!t || l.type === t) && r.push(l);
    }
    return r;
  }
  _resolveTickFontOptions(t) {
    const n = this.options.ticks.setContext(this.getContext(t));
    return yt(n.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Zr {
  constructor(t, n, i) {
    (this.type = t),
      (this.scope = n),
      (this.override = i),
      (this.items = Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype
    );
  }
  register(t) {
    const n = Object.getPrototypeOf(t);
    let i;
    Vv(n) && (i = this.register(n));
    const r = this.items,
      s = t.id,
      o = this.scope + "." + s;
    if (!s) throw new Error("class does not have id: " + t);
    return (
      s in r ||
        ((r[s] = t),
        Hv(t, o, i),
        this.override && ot.override(t.id, t.overrides)),
      o
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const n = this.items,
      i = t.id,
      r = this.scope;
    i in n && delete n[i],
      r && i in ot[r] && (delete ot[r][i], this.override && delete Mn[i]);
  }
}
function Hv(e, t, n) {
  const i = pr(Object.create(null), [
    n ? ot.get(n) : {},
    ot.get(t),
    e.defaults,
  ]);
  ot.set(t, i),
    e.defaultRoutes && Wv(t, e.defaultRoutes),
    e.descriptors && ot.describe(t, e.descriptors);
}
function Wv(e, t) {
  Object.keys(t).forEach((n) => {
    const i = n.split("."),
      r = i.pop(),
      s = [e].concat(i).join("."),
      o = t[n].split("."),
      l = o.pop(),
      a = o.join(".");
    ot.route(s, r, a, l);
  });
}
function Vv(e) {
  return "id" in e && "defaults" in e;
}
class Uv {
  constructor() {
    (this.controllers = new Zr(Gi, "datasets", !0)),
      (this.elements = new Zr(En, "elements")),
      (this.plugins = new Zr(Object, "plugins")),
      (this.scales = new Zr(hi, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, n, i) {
    [...n].forEach((r) => {
      const s = i || this._getRegistryForType(r);
      i || s.isForType(r) || (s === this.plugins && r.id)
        ? this._exec(t, s, r)
        : H(r, (o) => {
            const l = i || this._getRegistryForType(o);
            this._exec(t, l, o);
          });
    });
  }
  _exec(t, n, i) {
    const r = iu(t);
    Y(i["before" + r], [], i), n[t](i), Y(i["after" + r], [], i);
  }
  _getRegistryForType(t) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const i = this._typedRegistries[n];
      if (i.isForType(t)) return i;
    }
    return this.plugins;
  }
  _get(t, n, i) {
    const r = n.get(t);
    if (r === void 0)
      throw new Error('"' + t + '" is not a registered ' + i + ".");
    return r;
  }
}
var he = new Uv();
class Yv {
  constructor() {
    this._init = [];
  }
  notify(t, n, i, r) {
    n === "beforeInit" &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, "install"));
    const s = r ? this._descriptors(t).filter(r) : this._descriptors(t),
      o = this._notify(s, t, n, i);
    return (
      n === "afterDestroy" &&
        (this._notify(s, t, "stop"), this._notify(this._init, t, "uninstall")),
      o
    );
  }
  _notify(t, n, i, r) {
    r = r || {};
    for (const s of t) {
      const o = s.plugin,
        l = o[i],
        a = [n, r, s.options];
      if (Y(l, a, o) === !1 && r.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    tt(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const n = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), n;
  }
  _createDescriptors(t, n) {
    const i = t && t.config,
      r = B(i.options && i.options.plugins, {}),
      s = Qv(i);
    return r === !1 && !n ? [] : Kv(t, s, r, n);
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [],
      i = this._cache,
      r = (s, o) =>
        s.filter((l) => !o.some((a) => l.plugin.id === a.plugin.id));
    this._notify(r(n, i), t, "stop"), this._notify(r(i, n), t, "start");
  }
}
function Qv(e) {
  const t = {},
    n = [],
    i = Object.keys(he.plugins.items);
  for (let s = 0; s < i.length; s++) n.push(he.getPlugin(i[s]));
  const r = e.plugins || [];
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    n.indexOf(o) === -1 && (n.push(o), (t[o.id] = !0));
  }
  return { plugins: n, localIds: t };
}
function Xv(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function Kv(e, { plugins: t, localIds: n }, i, r) {
  const s = [],
    o = e.getContext();
  for (const l of t) {
    const a = l.id,
      u = Xv(i[a], r);
    u !== null &&
      s.push({
        plugin: l,
        options: Gv(e.config, { plugin: l, local: n[a] }, u, o),
      });
  }
  return s;
}
function Gv(e, { plugin: t, local: n }, i, r) {
  const s = e.pluginScopeKeys(t),
    o = e.getOptionScopes(i, s);
  return (
    n && t.defaults && o.push(t.defaults),
    e.createResolver(o, r, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function ea(e, t) {
  const n = ot.datasets[e] || {};
  return (
    ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x"
  );
}
function $v(e, t) {
  let n = e;
  return (
    e === "_index_" ? (n = t) : e === "_value_" && (n = t === "x" ? "y" : "x"),
    n
  );
}
function Zv(e, t) {
  return e === t ? "_index_" : "_value_";
}
function af(e) {
  if (e === "x" || e === "y" || e === "r") return e;
}
function qv(e) {
  if (e === "top" || e === "bottom") return "x";
  if (e === "left" || e === "right") return "y";
}
function na(e, ...t) {
  if (af(e)) return e;
  for (const n of t) {
    const i =
      n.axis || qv(n.position) || (e.length > 1 && af(e[0].toLowerCase()));
    if (i) return i;
  }
  throw new Error(
    `Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`
  );
}
function uf(e, t, n) {
  if (n[t + "AxisID"] === e) return { axis: t };
}
function Jv(e, t) {
  if (t.data && t.data.datasets) {
    const n = t.data.datasets.filter((i) => i.xAxisID === e || i.yAxisID === e);
    if (n.length) return uf(e, "x", n[0]) || uf(e, "y", n[0]);
  }
  return {};
}
function tx(e, t) {
  const n = Mn[e.type] || { scales: {} },
    i = t.scales || {},
    r = ea(e.type, t),
    s = Object.create(null);
  return (
    Object.keys(i).forEach((o) => {
      const l = i[o];
      if (!I(l))
        return console.error(`Invalid scale configuration for scale: ${o}`);
      if (l._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${o}`
        );
      const a = na(o, l, Jv(o, e), ot.scales[l.type]),
        u = Zv(a, r),
        c = n.scales || {};
      s[o] = Qi(Object.create(null), [{ axis: a }, l, c[a], c[u]]);
    }),
    e.data.datasets.forEach((o) => {
      const l = o.type || e.type,
        a = o.indexAxis || ea(l, t),
        c = (Mn[l] || {}).scales || {};
      Object.keys(c).forEach((f) => {
        const d = $v(f, a),
          p = o[d + "AxisID"] || d;
        (s[p] = s[p] || Object.create(null)),
          Qi(s[p], [{ axis: d }, i[p], c[f]]);
      });
    }),
    Object.keys(s).forEach((o) => {
      const l = s[o];
      Qi(l, [ot.scales[l.type], ot.scale]);
    }),
    s
  );
}
function bp(e) {
  const t = e.options || (e.options = {});
  (t.plugins = B(t.plugins, {})), (t.scales = tx(e, t));
}
function Cp(e) {
  return (
    (e = e || {}),
    (e.datasets = e.datasets || []),
    (e.labels = e.labels || []),
    e
  );
}
function ex(e) {
  return (e = e || {}), (e.data = Cp(e.data)), bp(e), e;
}
const cf = new Map(),
  Mp = new Set();
function qr(e, t) {
  let n = cf.get(e);
  return n || ((n = t()), cf.set(e, n), Mp.add(n)), n;
}
const Mi = (e, t, n) => {
  const i = gr(t, n);
  i !== void 0 && e.add(i);
};
class nx {
  constructor(t) {
    (this._config = ex(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = Cp(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), bp(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return qr(t, () => [[`datasets.${t}`, ""]]);
  }
  datasetAnimationScopeKeys(t, n) {
    return qr(`${t}.transition.${n}`, () => [
      [`datasets.${t}.transitions.${n}`, `transitions.${n}`],
      [`datasets.${t}`, ""],
    ]);
  }
  datasetElementScopeKeys(t, n) {
    return qr(`${t}-${n}`, () => [
      [`datasets.${t}.elements.${n}`, `datasets.${t}`, `elements.${n}`, ""],
    ]);
  }
  pluginScopeKeys(t) {
    const n = t.id,
      i = this.type;
    return qr(`${i}-plugin-${n}`, () => [
      [`plugins.${n}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, n) {
    const i = this._scopeCache;
    let r = i.get(t);
    return (!r || n) && ((r = new Map()), i.set(t, r)), r;
  }
  getOptionScopes(t, n, i) {
    const { options: r, type: s } = this,
      o = this._cachedScopes(t, i),
      l = o.get(n);
    if (l) return l;
    const a = new Set();
    n.forEach((c) => {
      t && (a.add(t), c.forEach((f) => Mi(a, t, f))),
        c.forEach((f) => Mi(a, r, f)),
        c.forEach((f) => Mi(a, Mn[s] || {}, f)),
        c.forEach((f) => Mi(a, ot, f)),
        c.forEach((f) => Mi(a, Jl, f));
    });
    const u = Array.from(a);
    return (
      u.length === 0 && u.push(Object.create(null)), Mp.has(n) && o.set(n, u), u
    );
  }
  chartOptionScopes() {
    const { options: t, type: n } = this;
    return [t, Mn[n] || {}, ot.datasets[n] || {}, { type: n }, ot, Jl];
  }
  resolveNamedOptions(t, n, i, r = [""]) {
    const s = { $shared: !0 },
      { resolver: o, subPrefixes: l } = ff(this._resolverCache, t, r);
    let a = o;
    if (rx(o, n)) {
      (s.$shared = !1), (i = rn(i) ? i() : i);
      const u = this.createResolver(t, i, l);
      a = ui(o, i, u);
    }
    for (const u of n) s[u] = a[u];
    return s;
  }
  createResolver(t, n, i = [""], r) {
    const { resolver: s } = ff(this._resolverCache, t, i);
    return I(n) ? ui(s, n, void 0, r) : s;
  }
}
function ff(e, t, n) {
  let i = e.get(t);
  i || ((i = new Map()), e.set(t, i));
  const r = n.join();
  let s = i.get(r);
  return (
    s ||
      ((s = {
        resolver: uu(t, n),
        subPrefixes: n.filter((l) => !l.toLowerCase().includes("hover")),
      }),
      i.set(r, s)),
    s
  );
}
const ix = (e) => I(e) && Object.getOwnPropertyNames(e).some((t) => rn(e[t]));
function rx(e, t) {
  const { isScriptable: n, isIndexable: i } = fp(e);
  for (const r of t) {
    const s = n(r),
      o = i(r),
      l = (o || s) && e[r];
    if ((s && (rn(l) || ix(l))) || (o && rt(l))) return !0;
  }
  return !1;
}
var sx = "4.4.2";
const ox = ["top", "bottom", "left", "right", "chartArea"];
function df(e, t) {
  return e === "top" || e === "bottom" || (ox.indexOf(e) === -1 && t === "x");
}
function hf(e, t) {
  return function (n, i) {
    return n[e] === i[e] ? n[t] - i[t] : n[e] - i[e];
  };
}
function pf(e) {
  const t = e.chart,
    n = t.options.animation;
  t.notifyPlugins("afterRender"), Y(n && n.onComplete, [e], t);
}
function lx(e) {
  const t = e.chart,
    n = t.options.animation;
  Y(n && n.onProgress, [e], t);
}
function Ep(e) {
  return (
    du() && typeof e == "string"
      ? (e = document.getElementById(e))
      : e && e.length && (e = e[0]),
    e && e.canvas && (e = e.canvas),
    e
  );
}
const ys = {},
  gf = (e) => {
    const t = Ep(e);
    return Object.values(ys)
      .filter((n) => n.canvas === t)
      .pop();
  };
function ax(e, t, n) {
  const i = Object.keys(e);
  for (const r of i) {
    const s = +r;
    if (s >= t) {
      const o = e[r];
      delete e[r], (n > 0 || s > t) && (e[s + n] = o);
    }
  }
}
function ux(e, t, n, i) {
  return !n || e.type === "mouseout" ? null : i ? t : e;
}
function Jr(e, t, n) {
  return e.options.clip ? e[n] : t[n];
}
function cx(e, t) {
  const { xScale: n, yScale: i } = e;
  return n && i
    ? {
        left: Jr(n, t, "left"),
        right: Jr(n, t, "right"),
        top: Jr(i, t, "top"),
        bottom: Jr(i, t, "bottom"),
      }
    : t;
}
var ze;
let ko =
  ((ze = class {
    static register(...t) {
      he.add(...t), mf();
    }
    static unregister(...t) {
      he.remove(...t), mf();
    }
    constructor(t, n) {
      const i = (this.config = new nx(n)),
        r = Ep(t),
        s = gf(r);
      if (s)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            s.id +
            "' must be destroyed before the canvas with ID '" +
            s.canvas.id +
            "' can be reused."
        );
      const o = i.createResolver(i.chartOptionScopes(), this.getContext());
      (this.platform = new (i.platform || Ev(r))()),
        this.platform.updateConfig(i);
      const l = this.platform.acquireContext(r, o.aspectRatio),
        a = l && l.canvas,
        u = a && a.height,
        c = a && a.width;
      if (
        ((this.id = j0()),
        (this.ctx = l),
        (this.canvas = a),
        (this.width = c),
        (this.height = u),
        (this._options = o),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new Yv()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = ey((f) => this.update(f), o.resizeDelay || 0)),
        (this._dataChanges = []),
        (ys[this.id] = this),
        !l || !a)
      ) {
        console.error(
          "Failed to create chart: can't acquire context from the given item"
        );
        return;
      }
      we.listen(this, "complete", pf),
        we.listen(this, "progress", lx),
        this._initialize(),
        this.attached && this.update();
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: t, maintainAspectRatio: n },
        width: i,
        height: r,
        _aspectRatio: s,
      } = this;
      return tt(t) ? (n && s ? s : r ? i / r : null) : t;
    }
    get data() {
      return this.config.data;
    }
    set data(t) {
      this.config.data = t;
    }
    get options() {
      return this._options;
    }
    set options(t) {
      this.config.options = t;
    }
    get registry() {
      return he;
    }
    _initialize() {
      return (
        this.notifyPlugins("beforeInit"),
        this.options.responsive
          ? this.resize()
          : Wc(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins("afterInit"),
        this
      );
    }
    clear() {
      return Ic(this.canvas, this.ctx), this;
    }
    stop() {
      return we.stop(this), this;
    }
    resize(t, n) {
      we.running(this)
        ? (this._resizeBeforeDraw = { width: t, height: n })
        : this._resize(t, n);
    }
    _resize(t, n) {
      const i = this.options,
        r = this.canvas,
        s = i.maintainAspectRatio && this.aspectRatio,
        o = this.platform.getMaximumSize(r, t, n, s),
        l = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
        a = this.width ? "resize" : "attach";
      (this.width = o.width),
        (this.height = o.height),
        (this._aspectRatio = this.aspectRatio),
        Wc(this, l, !0) &&
          (this.notifyPlugins("resize", { size: o }),
          Y(i.onResize, [this, o], this),
          this.attached && this._doResize(a) && this.render());
    }
    ensureScalesHaveIDs() {
      const n = this.options.scales || {};
      H(n, (i, r) => {
        i.id = r;
      });
    }
    buildOrUpdateScales() {
      const t = this.options,
        n = t.scales,
        i = this.scales,
        r = Object.keys(i).reduce((o, l) => ((o[l] = !1), o), {});
      let s = [];
      n &&
        (s = s.concat(
          Object.keys(n).map((o) => {
            const l = n[o],
              a = na(o, l),
              u = a === "r",
              c = a === "x";
            return {
              options: l,
              dposition: u ? "chartArea" : c ? "bottom" : "left",
              dtype: u ? "radialLinear" : c ? "category" : "linear",
            };
          })
        )),
        H(s, (o) => {
          const l = o.options,
            a = l.id,
            u = na(a, l),
            c = B(l.type, o.dtype);
          (l.position === void 0 || df(l.position, u) !== df(o.dposition)) &&
            (l.position = o.dposition),
            (r[a] = !0);
          let f = null;
          if (a in i && i[a].type === c) f = i[a];
          else {
            const d = he.getScale(c);
            (f = new d({ id: a, type: c, ctx: this.ctx, chart: this })),
              (i[f.id] = f);
          }
          f.init(l, t);
        }),
        H(r, (o, l) => {
          o || delete i[l];
        }),
        H(i, (o) => {
          Ye.configure(this, o, o.options), Ye.addBox(this, o);
        });
    }
    _updateMetasets() {
      const t = this._metasets,
        n = this.data.datasets.length,
        i = t.length;
      if ((t.sort((r, s) => r.index - s.index), i > n)) {
        for (let r = n; r < i; ++r) this._destroyDatasetMeta(r);
        t.splice(n, i - n);
      }
      this._sortedMetasets = t.slice(0).sort(hf("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: t,
        data: { datasets: n },
      } = this;
      t.length > n.length && delete this._stacks,
        t.forEach((i, r) => {
          n.filter((s) => s === i._dataset).length === 0 &&
            this._destroyDatasetMeta(r);
        });
    }
    buildOrUpdateControllers() {
      const t = [],
        n = this.data.datasets;
      let i, r;
      for (
        this._removeUnreferencedMetasets(), i = 0, r = n.length;
        i < r;
        i++
      ) {
        const s = n[i];
        let o = this.getDatasetMeta(i);
        const l = s.type || this.config.type;
        if (
          (o.type &&
            o.type !== l &&
            (this._destroyDatasetMeta(i), (o = this.getDatasetMeta(i))),
          (o.type = l),
          (o.indexAxis = s.indexAxis || ea(l, this.options)),
          (o.order = s.order || 0),
          (o.index = i),
          (o.label = "" + s.label),
          (o.visible = this.isDatasetVisible(i)),
          o.controller)
        )
          o.controller.updateIndex(i), o.controller.linkScales();
        else {
          const a = he.getController(l),
            { datasetElementType: u, dataElementType: c } = ot.datasets[l];
          Object.assign(a, {
            dataElementType: he.getElement(c),
            datasetElementType: u && he.getElement(u),
          }),
            (o.controller = new a(this, i)),
            t.push(o.controller);
        }
      }
      return this._updateMetasets(), t;
    }
    _resetElements() {
      H(
        this.data.datasets,
        (t, n) => {
          this.getDatasetMeta(n).controller.reset();
        },
        this
      );
    }
    reset() {
      this._resetElements(), this.notifyPlugins("reset");
    }
    update(t) {
      const n = this.config;
      n.update();
      const i = (this._options = n.createResolver(
          n.chartOptionScopes(),
          this.getContext()
        )),
        r = (this._animationsDisabled = !i.animation);
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1)
      )
        return;
      const s = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let o = 0;
      for (let u = 0, c = this.data.datasets.length; u < c; u++) {
        const { controller: f } = this.getDatasetMeta(u),
          d = !r && s.indexOf(f) === -1;
        f.buildOrUpdateElements(d), (o = Math.max(+f.getMaxOverflow(), o));
      }
      (o = this._minPadding = i.layout.autoPadding ? o : 0),
        this._updateLayout(o),
        r ||
          H(s, (u) => {
            u.reset();
          }),
        this._updateDatasets(t),
        this.notifyPlugins("afterUpdate", { mode: t }),
        this._layers.sort(hf("z", "_idx"));
      const { _active: l, _lastEvent: a } = this;
      a
        ? this._eventHandler(a, !0)
        : l.length && this._updateHoverStyles(l, l, !0),
        this.render();
    }
    _updateScales() {
      H(this.scales, (t) => {
        Ye.removeBox(this, t);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const t = this.options,
        n = new Set(Object.keys(this._listeners)),
        i = new Set(t.events);
      (!Tc(n, i) || !!this._responsiveListeners !== t.responsive) &&
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: t } = this,
        n = this._getUniformDataChanges() || [];
      for (const { method: i, start: r, count: s } of n) {
        const o = i === "_removeElements" ? -s : s;
        ax(t, r, o);
      }
    }
    _getUniformDataChanges() {
      const t = this._dataChanges;
      if (!t || !t.length) return;
      this._dataChanges = [];
      const n = this.data.datasets.length,
        i = (s) =>
          new Set(
            t
              .filter((o) => o[0] === s)
              .map((o, l) => l + "," + o.splice(1).join(","))
          ),
        r = i(0);
      for (let s = 1; s < n; s++) if (!Tc(r, i(s))) return;
      return Array.from(r)
        .map((s) => s.split(","))
        .map((s) => ({ method: s[1], start: +s[2], count: +s[3] }));
    }
    _updateLayout(t) {
      if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
      Ye.update(this, this.width, this.height, t);
      const n = this.chartArea,
        i = n.width <= 0 || n.height <= 0;
      (this._layers = []),
        H(
          this.boxes,
          (r) => {
            (i && r.position === "chartArea") ||
              (r.configure && r.configure(), this._layers.push(...r._layers()));
          },
          this
        ),
        this._layers.forEach((r, s) => {
          r._idx = s;
        }),
        this.notifyPlugins("afterLayout");
    }
    _updateDatasets(t) {
      if (
        this.notifyPlugins("beforeDatasetsUpdate", {
          mode: t,
          cancelable: !0,
        }) !== !1
      ) {
        for (let n = 0, i = this.data.datasets.length; n < i; ++n)
          this.getDatasetMeta(n).controller.configure();
        for (let n = 0, i = this.data.datasets.length; n < i; ++n)
          this._updateDataset(n, rn(t) ? t({ datasetIndex: n }) : t);
        this.notifyPlugins("afterDatasetsUpdate", { mode: t });
      }
    }
    _updateDataset(t, n) {
      const i = this.getDatasetMeta(t),
        r = { meta: i, index: t, mode: n, cancelable: !0 };
      this.notifyPlugins("beforeDatasetUpdate", r) !== !1 &&
        (i.controller._update(n),
        (r.cancelable = !1),
        this.notifyPlugins("afterDatasetUpdate", r));
    }
    render() {
      this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
        (we.has(this)
          ? this.attached && !we.running(this) && we.start(this)
          : (this.draw(), pf({ chart: this })));
    }
    draw() {
      let t;
      if (this._resizeBeforeDraw) {
        const { width: i, height: r } = this._resizeBeforeDraw;
        this._resize(i, r), (this._resizeBeforeDraw = null);
      }
      if (
        (this.clear(),
        this.width <= 0 ||
          this.height <= 0 ||
          this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
      )
        return;
      const n = this._layers;
      for (t = 0; t < n.length && n[t].z <= 0; ++t) n[t].draw(this.chartArea);
      for (this._drawDatasets(); t < n.length; ++t) n[t].draw(this.chartArea);
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(t) {
      const n = this._sortedMetasets,
        i = [];
      let r, s;
      for (r = 0, s = n.length; r < s; ++r) {
        const o = n[r];
        (!t || o.visible) && i.push(o);
      }
      return i;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
        return;
      const t = this.getSortedVisibleDatasetMetas();
      for (let n = t.length - 1; n >= 0; --n) this._drawDataset(t[n]);
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(t) {
      const n = this.ctx,
        i = t._clip,
        r = !i.disabled,
        s = cx(t, this.chartArea),
        o = { meta: t, index: t.index, cancelable: !0 };
      this.notifyPlugins("beforeDatasetDraw", o) !== !1 &&
        (r &&
          ou(n, {
            left: i.left === !1 ? 0 : s.left - i.left,
            right: i.right === !1 ? this.width : s.right + i.right,
            top: i.top === !1 ? 0 : s.top - i.top,
            bottom: i.bottom === !1 ? this.height : s.bottom + i.bottom,
          }),
        t.controller.draw(),
        r && lu(n),
        (o.cancelable = !1),
        this.notifyPlugins("afterDatasetDraw", o));
    }
    isPointInArea(t) {
      return Qn(t, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(t, n, i, r) {
      const s = ov.modes[n];
      return typeof s == "function" ? s(this, t, i, r) : [];
    }
    getDatasetMeta(t) {
      const n = this.data.datasets[t],
        i = this._metasets;
      let r = i.filter((s) => s && s._dataset === n).pop();
      return (
        r ||
          ((r = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (n && n.order) || 0,
            index: t,
            _dataset: n,
            _parsed: [],
            _sorted: !1,
          }),
          i.push(r)),
        r
      );
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = An(null, { chart: this, type: "chart" }))
      );
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t) {
      const n = this.data.datasets[t];
      if (!n) return !1;
      const i = this.getDatasetMeta(t);
      return typeof i.hidden == "boolean" ? !i.hidden : !n.hidden;
    }
    setDatasetVisibility(t, n) {
      const i = this.getDatasetMeta(t);
      i.hidden = !n;
    }
    toggleDataVisibility(t) {
      this._hiddenIndices[t] = !this._hiddenIndices[t];
    }
    getDataVisibility(t) {
      return !this._hiddenIndices[t];
    }
    _updateVisibility(t, n, i) {
      const r = i ? "show" : "hide",
        s = this.getDatasetMeta(t),
        o = s.controller._resolveAnimations(void 0, r);
      Us(n)
        ? ((s.data[n].hidden = !i), this.update())
        : (this.setDatasetVisibility(t, i),
          o.update(s, { visible: i }),
          this.update((l) => (l.datasetIndex === t ? r : void 0)));
    }
    hide(t, n) {
      this._updateVisibility(t, n, !1);
    }
    show(t, n) {
      this._updateVisibility(t, n, !0);
    }
    _destroyDatasetMeta(t) {
      const n = this._metasets[t];
      n && n.controller && n.controller._destroy(), delete this._metasets[t];
    }
    _stop() {
      let t, n;
      for (
        this.stop(), we.remove(this), t = 0, n = this.data.datasets.length;
        t < n;
        ++t
      )
        this._destroyDatasetMeta(t);
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const { canvas: t, ctx: n } = this;
      this._stop(),
        this.config.clearCache(),
        t &&
          (this.unbindEvents(),
          Ic(t, n),
          this.platform.releaseContext(n),
          (this.canvas = null),
          (this.ctx = null)),
        delete ys[this.id],
        this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...t) {
      return this.canvas.toDataURL(...t);
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive
          ? this.bindResponsiveEvents()
          : (this.attached = !0);
    }
    bindUserEvents() {
      const t = this._listeners,
        n = this.platform,
        i = (s, o) => {
          n.addEventListener(this, s, o), (t[s] = o);
        },
        r = (s, o, l) => {
          (s.offsetX = o), (s.offsetY = l), this._eventHandler(s);
        };
      H(this.options.events, (s) => i(s, r));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const t = this._responsiveListeners,
        n = this.platform,
        i = (a, u) => {
          n.addEventListener(this, a, u), (t[a] = u);
        },
        r = (a, u) => {
          t[a] && (n.removeEventListener(this, a, u), delete t[a]);
        },
        s = (a, u) => {
          this.canvas && this.resize(a, u);
        };
      let o;
      const l = () => {
        r("attach", l),
          (this.attached = !0),
          this.resize(),
          i("resize", s),
          i("detach", o);
      };
      (o = () => {
        (this.attached = !1),
          r("resize", s),
          this._stop(),
          this._resize(0, 0),
          i("attach", l);
      }),
        n.isAttached(this.canvas) ? l() : o();
    }
    unbindEvents() {
      H(this._listeners, (t, n) => {
        this.platform.removeEventListener(this, n, t);
      }),
        (this._listeners = {}),
        H(this._responsiveListeners, (t, n) => {
          this.platform.removeEventListener(this, n, t);
        }),
        (this._responsiveListeners = void 0);
    }
    updateHoverStyle(t, n, i) {
      const r = i ? "set" : "remove";
      let s, o, l, a;
      for (
        n === "dataset" &&
          ((s = this.getDatasetMeta(t[0].datasetIndex)),
          s.controller["_" + r + "DatasetHoverStyle"]()),
          l = 0,
          a = t.length;
        l < a;
        ++l
      ) {
        o = t[l];
        const u = o && this.getDatasetMeta(o.datasetIndex).controller;
        u && u[r + "HoverStyle"](o.element, o.datasetIndex, o.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t) {
      const n = this._active || [],
        i = t.map(({ datasetIndex: s, index: o }) => {
          const l = this.getDatasetMeta(s);
          if (!l) throw new Error("No dataset found at index " + s);
          return { datasetIndex: s, element: l.data[o], index: o };
        });
      !Ws(i, n) &&
        ((this._active = i),
        (this._lastEvent = null),
        this._updateHoverStyles(i, n));
    }
    notifyPlugins(t, n, i) {
      return this._plugins.notify(this, t, n, i);
    }
    isPluginEnabled(t) {
      return this._plugins._cache.filter((n) => n.plugin.id === t).length === 1;
    }
    _updateHoverStyles(t, n, i) {
      const r = this.options.hover,
        s = (a, u) =>
          a.filter(
            (c) =>
              !u.some(
                (f) => c.datasetIndex === f.datasetIndex && c.index === f.index
              )
          ),
        o = s(n, t),
        l = i ? t : s(t, n);
      o.length && this.updateHoverStyle(o, r.mode, !1),
        l.length && r.mode && this.updateHoverStyle(l, r.mode, !0);
    }
    _eventHandler(t, n) {
      const i = {
          event: t,
          replay: n,
          cancelable: !0,
          inChartArea: this.isPointInArea(t),
        },
        r = (o) =>
          (o.options.events || this.options.events).includes(t.native.type);
      if (this.notifyPlugins("beforeEvent", i, r) === !1) return;
      const s = this._handleEvent(t, n, i.inChartArea);
      return (
        (i.cancelable = !1),
        this.notifyPlugins("afterEvent", i, r),
        (s || i.changed) && this.render(),
        this
      );
    }
    _handleEvent(t, n, i) {
      const { _active: r = [], options: s } = this,
        o = n,
        l = this._getActiveElements(t, r, i, o),
        a = Y0(t),
        u = ux(t, this._lastEvent, i, a);
      i &&
        ((this._lastEvent = null),
        Y(s.onHover, [t, l, this], this),
        a && Y(s.onClick, [t, l, this], this));
      const c = !Ws(l, r);
      return (
        (c || n) && ((this._active = l), this._updateHoverStyles(l, r, n)),
        (this._lastEvent = u),
        c
      );
    }
    _getActiveElements(t, n, i, r) {
      if (t.type === "mouseout") return [];
      if (!i) return n;
      const s = this.options.hover;
      return this.getElementsAtEventForMode(t, s.mode, s, r);
    }
  }),
  D(ze, "defaults", ot),
  D(ze, "instances", ys),
  D(ze, "overrides", Mn),
  D(ze, "registry", he),
  D(ze, "version", sx),
  D(ze, "getChart", gf),
  ze);
function mf() {
  return H(ko.instances, (e) => e._plugins.invalidate());
}
function fx(e, t, n) {
  const {
    startAngle: i,
    pixelMargin: r,
    x: s,
    y: o,
    outerRadius: l,
    innerRadius: a,
  } = t;
  let u = r / l;
  e.beginPath(),
    e.arc(s, o, l, i - u, n + u),
    a > r
      ? ((u = r / a), e.arc(s, o, a, n + u, i - u, !0))
      : e.arc(s, o, r, n + at, i - at),
    e.closePath(),
    e.clip();
}
function dx(e) {
  return au(e, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
}
function hx(e, t, n, i) {
  const r = dx(e.options.borderRadius),
    s = (n - t) / 2,
    o = Math.min(s, (i * t) / 2),
    l = (a) => {
      const u = ((n - Math.min(s, a)) * i) / 2;
      return qt(a, 0, Math.min(s, u));
    };
  return {
    outerStart: l(r.outerStart),
    outerEnd: l(r.outerEnd),
    innerStart: qt(r.innerStart, 0, o),
    innerEnd: qt(r.innerEnd, 0, o),
  };
}
function Dn(e, t, n, i) {
  return { x: n + e * Math.cos(t), y: i + e * Math.sin(t) };
}
function Js(e, t, n, i, r, s) {
  const { x: o, y: l, startAngle: a, pixelMargin: u, innerRadius: c } = t,
    f = Math.max(t.outerRadius + i + n - u, 0),
    d = c > 0 ? c + i + n + u : 0;
  let p = 0;
  const y = r - a;
  if (i) {
    const j = c > 0 ? c - i : 0,
      V = f > 0 ? f - i : 0,
      X = (j + V) / 2,
      E = X !== 0 ? (y * X) / (X + i) : y;
    p = (y - E) / 2;
  }
  const v = Math.max(0.001, y * f - n / ct) / f,
    x = (y - v) / 2,
    g = a + x + p,
    h = r - x - p,
    {
      outerStart: m,
      outerEnd: _,
      innerStart: w,
      innerEnd: k,
    } = hx(t, d, f, h - g),
    S = f - m,
    b = f - _,
    A = g + m / S,
    P = h - _ / b,
    O = d + w,
    z = d + k,
    q = g + w / O,
    _t = h - k / z;
  if ((e.beginPath(), s)) {
    const j = (A + P) / 2;
    if ((e.arc(o, l, f, A, j), e.arc(o, l, f, j, P), _ > 0)) {
      const L = Dn(b, P, o, l);
      e.arc(L.x, L.y, _, P, h + at);
    }
    const V = Dn(z, h, o, l);
    if ((e.lineTo(V.x, V.y), k > 0)) {
      const L = Dn(z, _t, o, l);
      e.arc(L.x, L.y, k, h + at, _t + Math.PI);
    }
    const X = (h - k / d + (g + w / d)) / 2;
    if (
      (e.arc(o, l, d, h - k / d, X, !0),
      e.arc(o, l, d, X, g + w / d, !0),
      w > 0)
    ) {
      const L = Dn(O, q, o, l);
      e.arc(L.x, L.y, w, q + Math.PI, g - at);
    }
    const E = Dn(S, g, o, l);
    if ((e.lineTo(E.x, E.y), m > 0)) {
      const L = Dn(S, A, o, l);
      e.arc(L.x, L.y, m, g - at, A);
    }
  } else {
    e.moveTo(o, l);
    const j = Math.cos(A) * f + o,
      V = Math.sin(A) * f + l;
    e.lineTo(j, V);
    const X = Math.cos(P) * f + o,
      E = Math.sin(P) * f + l;
    e.lineTo(X, E);
  }
  e.closePath();
}
function px(e, t, n, i, r) {
  const { fullCircles: s, startAngle: o, circumference: l } = t;
  let a = t.endAngle;
  if (s) {
    Js(e, t, n, i, a, r);
    for (let u = 0; u < s; ++u) e.fill();
    isNaN(l) || (a = o + (l % st || st));
  }
  return Js(e, t, n, i, a, r), e.fill(), a;
}
function gx(e, t, n, i, r) {
  const { fullCircles: s, startAngle: o, circumference: l, options: a } = t,
    {
      borderWidth: u,
      borderJoinStyle: c,
      borderDash: f,
      borderDashOffset: d,
    } = a,
    p = a.borderAlign === "inner";
  if (!u) return;
  e.setLineDash(f || []),
    (e.lineDashOffset = d),
    p
      ? ((e.lineWidth = u * 2), (e.lineJoin = c || "round"))
      : ((e.lineWidth = u), (e.lineJoin = c || "bevel"));
  let y = t.endAngle;
  if (s) {
    Js(e, t, n, i, y, r);
    for (let v = 0; v < s; ++v) e.stroke();
    isNaN(l) || (y = o + (l % st || st));
  }
  p && fx(e, t, y), s || (Js(e, t, n, i, y, r), e.stroke());
}
class zi extends En {
  constructor(n) {
    super();
    D(this, "circumference");
    D(this, "endAngle");
    D(this, "fullCircles");
    D(this, "innerRadius");
    D(this, "outerRadius");
    D(this, "pixelMargin");
    D(this, "startAngle");
    (this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      n && Object.assign(this, n);
  }
  inRange(n, i, r) {
    const s = this.getProps(["x", "y"], r),
      { angle: o, distance: l } = ip(s, { x: n, y: i }),
      {
        startAngle: a,
        endAngle: u,
        innerRadius: c,
        outerRadius: f,
        circumference: d,
      } = this.getProps(
        [
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "circumference",
        ],
        r
      ),
      p = (this.options.spacing + this.options.borderWidth) / 2,
      v = B(d, u - a) >= st || Ks(o, a, u),
      x = Oi(l, c + p, f + p);
    return v && x;
  }
  getCenterPoint(n) {
    const {
        x: i,
        y: r,
        startAngle: s,
        endAngle: o,
        innerRadius: l,
        outerRadius: a,
      } = this.getProps(
        ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"],
        n
      ),
      { offset: u, spacing: c } = this.options,
      f = (s + o) / 2,
      d = (l + a + c + u) / 2;
    return { x: i + Math.cos(f) * d, y: r + Math.sin(f) * d };
  }
  tooltipPosition(n) {
    return this.getCenterPoint(n);
  }
  draw(n) {
    const { options: i, circumference: r } = this,
      s = (i.offset || 0) / 4,
      o = (i.spacing || 0) / 2,
      l = i.circular;
    if (
      ((this.pixelMargin = i.borderAlign === "inner" ? 0.33 : 0),
      (this.fullCircles = r > st ? Math.floor(r / st) : 0),
      r === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return;
    n.save();
    const a = (this.startAngle + this.endAngle) / 2;
    n.translate(Math.cos(a) * s, Math.sin(a) * s);
    const u = 1 - Math.sin(Math.min(ct, r || 0)),
      c = s * u;
    (n.fillStyle = i.backgroundColor),
      (n.strokeStyle = i.borderColor),
      px(n, this, c, o, l),
      gx(n, this, c, o, l),
      n.restore();
  }
}
D(zi, "id", "arc"),
  D(zi, "defaults", {
    borderAlign: "center",
    borderColor: "#fff",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
  }),
  D(zi, "defaultRoutes", { backgroundColor: "backgroundColor" }),
  D(zi, "descriptors", {
    _scriptable: !0,
    _indexable: (n) => n !== "borderDash",
  });
const yf = (e, t) => {
    let { boxHeight: n = t, boxWidth: i = t } = e;
    return (
      e.usePointStyle &&
        ((n = Math.min(n, t)), (i = e.pointStyleWidth || Math.min(i, t))),
      { boxWidth: i, boxHeight: n, itemHeight: Math.max(t, n) }
    );
  },
  mx = (e, t) =>
    e !== null &&
    t !== null &&
    e.datasetIndex === t.datasetIndex &&
    e.index === t.index;
class vf extends En {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, n, i) {
    (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = i),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let n = Y(t.generateLabels, [this.chart], this) || [];
    t.filter && (n = n.filter((i) => t.filter(i, this.chart.data))),
      t.sort && (n = n.sort((i, r) => t.sort(i, r, this.chart.data))),
      this.options.reverse && n.reverse(),
      (this.legendItems = n);
  }
  fit() {
    const { options: t, ctx: n } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const i = t.labels,
      r = yt(i.font),
      s = r.size,
      o = this._computeTitleHeight(),
      { boxWidth: l, itemHeight: a } = yf(i, s);
    let u, c;
    (n.font = r.string),
      this.isHorizontal()
        ? ((u = this.maxWidth), (c = this._fitRows(o, s, l, a) + 10))
        : ((c = this.maxHeight), (u = this._fitCols(o, r, l, a) + 10)),
      (this.width = Math.min(u, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(c, t.maxHeight || this.maxHeight));
  }
  _fitRows(t, n, i, r) {
    const {
        ctx: s,
        maxWidth: o,
        options: {
          labels: { padding: l },
        },
      } = this,
      a = (this.legendHitBoxes = []),
      u = (this.lineWidths = [0]),
      c = r + l;
    let f = t;
    (s.textAlign = "left"), (s.textBaseline = "middle");
    let d = -1,
      p = -c;
    return (
      this.legendItems.forEach((y, v) => {
        const x = i + n / 2 + s.measureText(y.text).width;
        (v === 0 || u[u.length - 1] + x + 2 * l > o) &&
          ((f += c), (u[u.length - (v > 0 ? 0 : 1)] = 0), (p += c), d++),
          (a[v] = { left: 0, top: p, row: d, width: x, height: r }),
          (u[u.length - 1] += x + l);
      }),
      f
    );
  }
  _fitCols(t, n, i, r) {
    const {
        ctx: s,
        maxHeight: o,
        options: {
          labels: { padding: l },
        },
      } = this,
      a = (this.legendHitBoxes = []),
      u = (this.columnSizes = []),
      c = o - t;
    let f = l,
      d = 0,
      p = 0,
      y = 0,
      v = 0;
    return (
      this.legendItems.forEach((x, g) => {
        const { itemWidth: h, itemHeight: m } = yx(i, n, s, x, r);
        g > 0 &&
          p + m + 2 * l > c &&
          ((f += d + l),
          u.push({ width: d, height: p }),
          (y += d + l),
          v++,
          (d = p = 0)),
          (a[g] = { left: y, top: p, col: v, width: h, height: m }),
          (d = Math.max(d, h)),
          (p += m + l);
      }),
      (f += d),
      u.push({ width: d, height: p }),
      f
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: n,
        options: {
          align: i,
          labels: { padding: r },
          rtl: s,
        },
      } = this,
      o = ti(s, this.left, this.width);
    if (this.isHorizontal()) {
      let l = 0,
        a = jt(i, this.left + r, this.right - this.lineWidths[l]);
      for (const u of n)
        l !== u.row &&
          ((l = u.row),
          (a = jt(i, this.left + r, this.right - this.lineWidths[l]))),
          (u.top += this.top + t + r),
          (u.left = o.leftForLtr(o.x(a), u.width)),
          (a += u.width + r);
    } else {
      let l = 0,
        a = jt(i, this.top + t + r, this.bottom - this.columnSizes[l].height);
      for (const u of n)
        u.col !== l &&
          ((l = u.col),
          (a = jt(
            i,
            this.top + t + r,
            this.bottom - this.columnSizes[l].height
          ))),
          (u.top = a),
          (u.left += this.left + r),
          (u.left = o.leftForLtr(o.x(u.left), u.width)),
          (a += u.height + r);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      ou(t, this), this._draw(), lu(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: n, lineWidths: i, ctx: r } = this,
      { align: s, labels: o } = t,
      l = ot.color,
      a = ti(t.rtl, this.left, this.width),
      u = yt(o.font),
      { padding: c } = o,
      f = u.size,
      d = f / 2;
    let p;
    this.drawTitle(),
      (r.textAlign = a.textAlign("left")),
      (r.textBaseline = "middle"),
      (r.lineWidth = 0.5),
      (r.font = u.string);
    const { boxWidth: y, boxHeight: v, itemHeight: x } = yf(o, f),
      g = function (k, S, b) {
        if (isNaN(y) || y <= 0 || isNaN(v) || v < 0) return;
        r.save();
        const A = B(b.lineWidth, 1);
        if (
          ((r.fillStyle = B(b.fillStyle, l)),
          (r.lineCap = B(b.lineCap, "butt")),
          (r.lineDashOffset = B(b.lineDashOffset, 0)),
          (r.lineJoin = B(b.lineJoin, "miter")),
          (r.lineWidth = A),
          (r.strokeStyle = B(b.strokeStyle, l)),
          r.setLineDash(B(b.lineDash, [])),
          o.usePointStyle)
        ) {
          const P = {
              radius: (v * Math.SQRT2) / 2,
              pointStyle: b.pointStyle,
              rotation: b.rotation,
              borderWidth: A,
            },
            O = a.xPlus(k, y / 2),
            z = S + d;
          cp(r, P, O, z, o.pointStyleWidth && y);
        } else {
          const P = S + Math.max((f - v) / 2, 0),
            O = a.leftForLtr(k, y),
            z = Jn(b.borderRadius);
          r.beginPath(),
            Object.values(z).some((q) => q !== 0)
              ? $s(r, { x: O, y: P, w: y, h: v, radius: z })
              : r.rect(O, P, y, v),
            r.fill(),
            A !== 0 && r.stroke();
        }
        r.restore();
      },
      h = function (k, S, b) {
        ai(r, b.text, k, S + x / 2, u, {
          strikethrough: b.hidden,
          textAlign: a.textAlign(b.textAlign),
        });
      },
      m = this.isHorizontal(),
      _ = this._computeTitleHeight();
    m
      ? (p = {
          x: jt(s, this.left + c, this.right - i[0]),
          y: this.top + c + _,
          line: 0,
        })
      : (p = {
          x: this.left + c,
          y: jt(s, this.top + _ + c, this.bottom - n[0].height),
          line: 0,
        }),
      gp(this.ctx, t.textDirection);
    const w = x + c;
    this.legendItems.forEach((k, S) => {
      (r.strokeStyle = k.fontColor), (r.fillStyle = k.fontColor);
      const b = r.measureText(k.text).width,
        A = a.textAlign(k.textAlign || (k.textAlign = o.textAlign)),
        P = y + d + b;
      let O = p.x,
        z = p.y;
      a.setWidth(this.width),
        m
          ? S > 0 &&
            O + P + c > this.right &&
            ((z = p.y += w),
            p.line++,
            (O = p.x = jt(s, this.left + c, this.right - i[p.line])))
          : S > 0 &&
            z + w > this.bottom &&
            ((O = p.x = O + n[p.line].width + c),
            p.line++,
            (z = p.y =
              jt(s, this.top + _ + c, this.bottom - n[p.line].height)));
      const q = a.x(O);
      if (
        (g(q, z, k),
        (O = ny(A, O + y + d, m ? O + P : this.right, t.rtl)),
        h(a.x(O), z, k),
        m)
      )
        p.x += P + c;
      else if (typeof k.text != "string") {
        const _t = u.lineHeight;
        p.y += Pp(k, _t) + c;
      } else p.y += w;
    }),
      mp(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      n = t.title,
      i = yt(n.font),
      r = Tt(n.padding);
    if (!n.display) return;
    const s = ti(t.rtl, this.left, this.width),
      o = this.ctx,
      l = n.position,
      a = i.size / 2,
      u = r.top + a;
    let c,
      f = this.left,
      d = this.width;
    if (this.isHorizontal())
      (d = Math.max(...this.lineWidths)),
        (c = this.top + u),
        (f = jt(t.align, f, this.right - d));
    else {
      const y = this.columnSizes.reduce((v, x) => Math.max(v, x.height), 0);
      c =
        u +
        jt(
          t.align,
          this.top,
          this.bottom - y - t.labels.padding - this._computeTitleHeight()
        );
    }
    const p = jt(l, f, f + d);
    (o.textAlign = s.textAlign(lp(l))),
      (o.textBaseline = "middle"),
      (o.strokeStyle = n.color),
      (o.fillStyle = n.color),
      (o.font = i.string),
      ai(o, n.text, p, c, i);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      n = yt(t.font),
      i = Tt(t.padding);
    return t.display ? n.lineHeight + i.height : 0;
  }
  _getLegendItemAt(t, n) {
    let i, r, s;
    if (Oi(t, this.left, this.right) && Oi(n, this.top, this.bottom)) {
      for (s = this.legendHitBoxes, i = 0; i < s.length; ++i)
        if (
          ((r = s[i]),
          Oi(t, r.left, r.left + r.width) && Oi(n, r.top, r.top + r.height))
        )
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(t) {
    const n = this.options;
    if (!_x(t.type, n)) return;
    const i = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const r = this._hoveredItem,
        s = mx(r, i);
      r && !s && Y(n.onLeave, [t, r, this], this),
        (this._hoveredItem = i),
        i && !s && Y(n.onHover, [t, i, this], this);
    } else i && Y(n.onClick, [t, i, this], this);
  }
}
function yx(e, t, n, i, r) {
  const s = vx(i, e, t, n),
    o = xx(r, i, t.lineHeight);
  return { itemWidth: s, itemHeight: o };
}
function vx(e, t, n, i) {
  let r = e.text;
  return (
    r &&
      typeof r != "string" &&
      (r = r.reduce((s, o) => (s.length > o.length ? s : o))),
    t + n.size / 2 + i.measureText(r).width
  );
}
function xx(e, t, n) {
  let i = e;
  return typeof t.text != "string" && (i = Pp(t, n)), i;
}
function Pp(e, t) {
  const n = e.text ? e.text.length : 0;
  return t * n;
}
function _x(e, t) {
  return !!(
    ((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave)) ||
    (t.onClick && (e === "click" || e === "mouseup"))
  );
}
var wx = {
  id: "legend",
  _element: vf,
  start(e, t, n) {
    const i = (e.legend = new vf({ ctx: e.ctx, options: n, chart: e }));
    Ye.configure(e, i, n), Ye.addBox(e, i);
  },
  stop(e) {
    Ye.removeBox(e, e.legend), delete e.legend;
  },
  beforeUpdate(e, t, n) {
    const i = e.legend;
    Ye.configure(e, i, n), (i.options = n);
  },
  afterUpdate(e) {
    const t = e.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, n) {
      const i = t.datasetIndex,
        r = n.chart;
      r.isDatasetVisible(i)
        ? (r.hide(i), (t.hidden = !0))
        : (r.show(i), (t.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (e) => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets,
          {
            labels: {
              usePointStyle: n,
              pointStyle: i,
              textAlign: r,
              color: s,
              useBorderRadius: o,
              borderRadius: l,
            },
          } = e.legend.options;
        return e._getSortedDatasetMetas().map((a) => {
          const u = a.controller.getStyle(n ? 0 : void 0),
            c = Tt(u.borderWidth);
          return {
            text: t[a.index].label,
            fillStyle: u.backgroundColor,
            fontColor: s,
            hidden: !a.visible,
            lineCap: u.borderCapStyle,
            lineDash: u.borderDash,
            lineDashOffset: u.borderDashOffset,
            lineJoin: u.borderJoinStyle,
            lineWidth: (c.width + c.height) / 4,
            strokeStyle: u.borderColor,
            pointStyle: i || u.pointStyle,
            rotation: u.rotation,
            textAlign: r || u.textAlign,
            borderRadius: o && (l || u.borderRadius),
            datasetIndex: a.index,
          };
        }, this);
      },
    },
    title: {
      color: (e) => e.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (e) => !e.startsWith("on"),
    labels: {
      _scriptable: (e) => !["generateLabels", "filter", "sort"].includes(e),
    },
  },
};
const Ni = {
  average(e) {
    if (!e.length) return !1;
    let t,
      n,
      i = new Set(),
      r = 0,
      s = 0;
    for (t = 0, n = e.length; t < n; ++t) {
      const l = e[t].element;
      if (l && l.hasValue()) {
        const a = l.tooltipPosition();
        i.add(a.x), (r += a.y), ++s;
      }
    }
    return { x: [...i].reduce((l, a) => l + a) / i.size, y: r / s };
  },
  nearest(e, t) {
    if (!e.length) return !1;
    let n = t.x,
      i = t.y,
      r = Number.POSITIVE_INFINITY,
      s,
      o,
      l;
    for (s = 0, o = e.length; s < o; ++s) {
      const a = e[s].element;
      if (a && a.hasValue()) {
        const u = a.getCenterPoint(),
          c = G0(t, u);
        c < r && ((r = c), (l = a));
      }
    }
    if (l) {
      const a = l.tooltipPosition();
      (n = a.x), (i = a.y);
    }
    return { x: n, y: i };
  },
};
function fe(e, t) {
  return t && (rt(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function ke(e) {
  return (typeof e == "string" || e instanceof String) &&
    e.indexOf(`
`) > -1
    ? e.split(`
`)
    : e;
}
function kx(e, t) {
  const { element: n, datasetIndex: i, index: r } = t,
    s = e.getDatasetMeta(i).controller,
    { label: o, value: l } = s.getLabelAndValue(r);
  return {
    chart: e,
    label: o,
    parsed: s.getParsed(r),
    raw: e.data.datasets[i].data[r],
    formattedValue: l,
    dataset: s.getDataset(),
    dataIndex: r,
    datasetIndex: i,
    element: n,
  };
}
function xf(e, t) {
  const n = e.chart.ctx,
    { body: i, footer: r, title: s } = e,
    { boxWidth: o, boxHeight: l } = t,
    a = yt(t.bodyFont),
    u = yt(t.titleFont),
    c = yt(t.footerFont),
    f = s.length,
    d = r.length,
    p = i.length,
    y = Tt(t.padding);
  let v = y.height,
    x = 0,
    g = i.reduce(
      (_, w) => _ + w.before.length + w.lines.length + w.after.length,
      0
    );
  if (
    ((g += e.beforeBody.length + e.afterBody.length),
    f &&
      (v += f * u.lineHeight + (f - 1) * t.titleSpacing + t.titleMarginBottom),
    g)
  ) {
    const _ = t.displayColors ? Math.max(l, a.lineHeight) : a.lineHeight;
    v += p * _ + (g - p) * a.lineHeight + (g - 1) * t.bodySpacing;
  }
  d && (v += t.footerMarginTop + d * c.lineHeight + (d - 1) * t.footerSpacing);
  let h = 0;
  const m = function (_) {
    x = Math.max(x, n.measureText(_).width + h);
  };
  return (
    n.save(),
    (n.font = u.string),
    H(e.title, m),
    (n.font = a.string),
    H(e.beforeBody.concat(e.afterBody), m),
    (h = t.displayColors ? o + 2 + t.boxPadding : 0),
    H(i, (_) => {
      H(_.before, m), H(_.lines, m), H(_.after, m);
    }),
    (h = 0),
    (n.font = c.string),
    H(e.footer, m),
    n.restore(),
    (x += y.width),
    { width: x, height: v }
  );
}
function Sx(e, t) {
  const { y: n, height: i } = t;
  return n < i / 2 ? "top" : n > e.height - i / 2 ? "bottom" : "center";
}
function bx(e, t, n, i) {
  const { x: r, width: s } = i,
    o = n.caretSize + n.caretPadding;
  if ((e === "left" && r + s + o > t.width) || (e === "right" && r - s - o < 0))
    return !0;
}
function Cx(e, t, n, i) {
  const { x: r, width: s } = n,
    {
      width: o,
      chartArea: { left: l, right: a },
    } = e;
  let u = "center";
  return (
    i === "center"
      ? (u = r <= (l + a) / 2 ? "left" : "right")
      : r <= s / 2
      ? (u = "left")
      : r >= o - s / 2 && (u = "right"),
    bx(u, e, t, n) && (u = "center"),
    u
  );
}
function _f(e, t, n) {
  const i = n.yAlign || t.yAlign || Sx(e, n);
  return { xAlign: n.xAlign || t.xAlign || Cx(e, t, n, i), yAlign: i };
}
function Mx(e, t) {
  let { x: n, width: i } = e;
  return t === "right" ? (n -= i) : t === "center" && (n -= i / 2), n;
}
function Ex(e, t, n) {
  let { y: i, height: r } = e;
  return (
    t === "top" ? (i += n) : t === "bottom" ? (i -= r + n) : (i -= r / 2), i
  );
}
function wf(e, t, n, i) {
  const { caretSize: r, caretPadding: s, cornerRadius: o } = e,
    { xAlign: l, yAlign: a } = n,
    u = r + s,
    { topLeft: c, topRight: f, bottomLeft: d, bottomRight: p } = Jn(o);
  let y = Mx(t, l);
  const v = Ex(t, a, u);
  return (
    a === "center"
      ? l === "left"
        ? (y += u)
        : l === "right" && (y -= u)
      : l === "left"
      ? (y -= Math.max(c, d) + r)
      : l === "right" && (y += Math.max(f, p) + r),
    { x: qt(y, 0, i.width - t.width), y: qt(v, 0, i.height - t.height) }
  );
}
function ts(e, t, n) {
  const i = Tt(n.padding);
  return t === "center"
    ? e.x + e.width / 2
    : t === "right"
    ? e.x + e.width - i.right
    : e.x + i.left;
}
function kf(e) {
  return fe([], ke(e));
}
function Px(e, t, n) {
  return An(e, { tooltip: t, tooltipItems: n, type: "tooltip" });
}
function Sf(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return n ? e.override(n) : e;
}
const Tp = {
  beforeTitle: _e,
  title(e) {
    if (e.length > 0) {
      const t = e[0],
        n = t.chart.data.labels,
        i = n ? n.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label) return t.label;
      if (i > 0 && t.dataIndex < i) return n[t.dataIndex];
    }
    return "";
  },
  afterTitle: _e,
  beforeBody: _e,
  beforeLabel: _e,
  label(e) {
    if (this && this.options && this.options.mode === "dataset")
      return e.label + ": " + e.formattedValue || e.formattedValue;
    let t = e.dataset.label || "";
    t && (t += ": ");
    const n = e.formattedValue;
    return tt(n) || (t += n), t;
  },
  labelColor(e) {
    const n = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex);
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(e) {
    const n = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex);
    return { pointStyle: n.pointStyle, rotation: n.rotation };
  },
  afterLabel: _e,
  afterBody: _e,
  beforeFooter: _e,
  footer: _e,
  afterFooter: _e,
};
function Ot(e, t, n, i) {
  const r = e[t].call(n, i);
  return typeof r > "u" ? Tp[t].call(n, i) : r;
}
class ia extends En {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const n = this.chart,
      i = this.options.setContext(this.getContext()),
      r = i.enabled && n.options.animation && i.animations,
      s = new yp(this.chart, r);
    return r._cacheable && (this._cachedAnimations = Object.freeze(s)), s;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = Px(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(t, n) {
    const { callbacks: i } = n,
      r = Ot(i, "beforeTitle", this, t),
      s = Ot(i, "title", this, t),
      o = Ot(i, "afterTitle", this, t);
    let l = [];
    return (l = fe(l, ke(r))), (l = fe(l, ke(s))), (l = fe(l, ke(o))), l;
  }
  getBeforeBody(t, n) {
    return kf(Ot(n.callbacks, "beforeBody", this, t));
  }
  getBody(t, n) {
    const { callbacks: i } = n,
      r = [];
    return (
      H(t, (s) => {
        const o = { before: [], lines: [], after: [] },
          l = Sf(i, s);
        fe(o.before, ke(Ot(l, "beforeLabel", this, s))),
          fe(o.lines, Ot(l, "label", this, s)),
          fe(o.after, ke(Ot(l, "afterLabel", this, s))),
          r.push(o);
      }),
      r
    );
  }
  getAfterBody(t, n) {
    return kf(Ot(n.callbacks, "afterBody", this, t));
  }
  getFooter(t, n) {
    const { callbacks: i } = n,
      r = Ot(i, "beforeFooter", this, t),
      s = Ot(i, "footer", this, t),
      o = Ot(i, "afterFooter", this, t);
    let l = [];
    return (l = fe(l, ke(r))), (l = fe(l, ke(s))), (l = fe(l, ke(o))), l;
  }
  _createItems(t) {
    const n = this._active,
      i = this.chart.data,
      r = [],
      s = [],
      o = [];
    let l = [],
      a,
      u;
    for (a = 0, u = n.length; a < u; ++a) l.push(kx(this.chart, n[a]));
    return (
      t.filter && (l = l.filter((c, f, d) => t.filter(c, f, d, i))),
      t.itemSort && (l = l.sort((c, f) => t.itemSort(c, f, i))),
      H(l, (c) => {
        const f = Sf(t.callbacks, c);
        r.push(Ot(f, "labelColor", this, c)),
          s.push(Ot(f, "labelPointStyle", this, c)),
          o.push(Ot(f, "labelTextColor", this, c));
      }),
      (this.labelColors = r),
      (this.labelPointStyles = s),
      (this.labelTextColors = o),
      (this.dataPoints = l),
      l
    );
  }
  update(t, n) {
    const i = this.options.setContext(this.getContext()),
      r = this._active;
    let s,
      o = [];
    if (!r.length) this.opacity !== 0 && (s = { opacity: 0 });
    else {
      const l = Ni[i.position].call(this, r, this._eventPosition);
      (o = this._createItems(i)),
        (this.title = this.getTitle(o, i)),
        (this.beforeBody = this.getBeforeBody(o, i)),
        (this.body = this.getBody(o, i)),
        (this.afterBody = this.getAfterBody(o, i)),
        (this.footer = this.getFooter(o, i));
      const a = (this._size = xf(this, i)),
        u = Object.assign({}, l, a),
        c = _f(this.chart, i, u),
        f = wf(i, u, c, this.chart);
      (this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (s = {
          opacity: 1,
          x: f.x,
          y: f.y,
          width: a.width,
          height: a.height,
          caretX: l.x,
          caretY: l.y,
        });
    }
    (this._tooltipItems = o),
      (this.$context = void 0),
      s && this._resolveAnimations().update(this, s),
      t &&
        i.external &&
        i.external.call(this, { chart: this.chart, tooltip: this, replay: n });
  }
  drawCaret(t, n, i, r) {
    const s = this.getCaretPosition(t, i, r);
    n.lineTo(s.x1, s.y1), n.lineTo(s.x2, s.y2), n.lineTo(s.x3, s.y3);
  }
  getCaretPosition(t, n, i) {
    const { xAlign: r, yAlign: s } = this,
      { caretSize: o, cornerRadius: l } = i,
      { topLeft: a, topRight: u, bottomLeft: c, bottomRight: f } = Jn(l),
      { x: d, y: p } = t,
      { width: y, height: v } = n;
    let x, g, h, m, _, w;
    return (
      s === "center"
        ? ((_ = p + v / 2),
          r === "left"
            ? ((x = d), (g = x - o), (m = _ + o), (w = _ - o))
            : ((x = d + y), (g = x + o), (m = _ - o), (w = _ + o)),
          (h = x))
        : (r === "left"
            ? (g = d + Math.max(a, c) + o)
            : r === "right"
            ? (g = d + y - Math.max(u, f) - o)
            : (g = this.caretX),
          s === "top"
            ? ((m = p), (_ = m - o), (x = g - o), (h = g + o))
            : ((m = p + v), (_ = m + o), (x = g + o), (h = g - o)),
          (w = m)),
      { x1: x, x2: g, x3: h, y1: m, y2: _, y3: w }
    );
  }
  drawTitle(t, n, i) {
    const r = this.title,
      s = r.length;
    let o, l, a;
    if (s) {
      const u = ti(i.rtl, this.x, this.width);
      for (
        t.x = ts(this, i.titleAlign, i),
          n.textAlign = u.textAlign(i.titleAlign),
          n.textBaseline = "middle",
          o = yt(i.titleFont),
          l = i.titleSpacing,
          n.fillStyle = i.titleColor,
          n.font = o.string,
          a = 0;
        a < s;
        ++a
      )
        n.fillText(r[a], u.x(t.x), t.y + o.lineHeight / 2),
          (t.y += o.lineHeight + l),
          a + 1 === s && (t.y += i.titleMarginBottom - l);
    }
  }
  _drawColorBox(t, n, i, r, s) {
    const o = this.labelColors[i],
      l = this.labelPointStyles[i],
      { boxHeight: a, boxWidth: u } = s,
      c = yt(s.bodyFont),
      f = ts(this, "left", s),
      d = r.x(f),
      p = a < c.lineHeight ? (c.lineHeight - a) / 2 : 0,
      y = n.y + p;
    if (s.usePointStyle) {
      const v = {
          radius: Math.min(u, a) / 2,
          pointStyle: l.pointStyle,
          rotation: l.rotation,
          borderWidth: 1,
        },
        x = r.leftForLtr(d, u) + u / 2,
        g = y + a / 2;
      (t.strokeStyle = s.multiKeyBackground),
        (t.fillStyle = s.multiKeyBackground),
        jc(t, v, x, g),
        (t.strokeStyle = o.borderColor),
        (t.fillStyle = o.backgroundColor),
        jc(t, v, x, g);
    } else {
      (t.lineWidth = I(o.borderWidth)
        ? Math.max(...Object.values(o.borderWidth))
        : o.borderWidth || 1),
        (t.strokeStyle = o.borderColor),
        t.setLineDash(o.borderDash || []),
        (t.lineDashOffset = o.borderDashOffset || 0);
      const v = r.leftForLtr(d, u),
        x = r.leftForLtr(r.xPlus(d, 1), u - 2),
        g = Jn(o.borderRadius);
      Object.values(g).some((h) => h !== 0)
        ? (t.beginPath(),
          (t.fillStyle = s.multiKeyBackground),
          $s(t, { x: v, y, w: u, h: a, radius: g }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = o.backgroundColor),
          t.beginPath(),
          $s(t, { x, y: y + 1, w: u - 2, h: a - 2, radius: g }),
          t.fill())
        : ((t.fillStyle = s.multiKeyBackground),
          t.fillRect(v, y, u, a),
          t.strokeRect(v, y, u, a),
          (t.fillStyle = o.backgroundColor),
          t.fillRect(x, y + 1, u - 2, a - 2));
    }
    t.fillStyle = this.labelTextColors[i];
  }
  drawBody(t, n, i) {
    const { body: r } = this,
      {
        bodySpacing: s,
        bodyAlign: o,
        displayColors: l,
        boxHeight: a,
        boxWidth: u,
        boxPadding: c,
      } = i,
      f = yt(i.bodyFont);
    let d = f.lineHeight,
      p = 0;
    const y = ti(i.rtl, this.x, this.width),
      v = function (b) {
        n.fillText(b, y.x(t.x + p), t.y + d / 2), (t.y += d + s);
      },
      x = y.textAlign(o);
    let g, h, m, _, w, k, S;
    for (
      n.textAlign = o,
        n.textBaseline = "middle",
        n.font = f.string,
        t.x = ts(this, x, i),
        n.fillStyle = i.bodyColor,
        H(this.beforeBody, v),
        p = l && x !== "right" ? (o === "center" ? u / 2 + c : u + 2 + c) : 0,
        _ = 0,
        k = r.length;
      _ < k;
      ++_
    ) {
      for (
        g = r[_],
          h = this.labelTextColors[_],
          n.fillStyle = h,
          H(g.before, v),
          m = g.lines,
          l &&
            m.length &&
            (this._drawColorBox(n, t, _, y, i),
            (d = Math.max(f.lineHeight, a))),
          w = 0,
          S = m.length;
        w < S;
        ++w
      )
        v(m[w]), (d = f.lineHeight);
      H(g.after, v);
    }
    (p = 0), (d = f.lineHeight), H(this.afterBody, v), (t.y -= s);
  }
  drawFooter(t, n, i) {
    const r = this.footer,
      s = r.length;
    let o, l;
    if (s) {
      const a = ti(i.rtl, this.x, this.width);
      for (
        t.x = ts(this, i.footerAlign, i),
          t.y += i.footerMarginTop,
          n.textAlign = a.textAlign(i.footerAlign),
          n.textBaseline = "middle",
          o = yt(i.footerFont),
          n.fillStyle = i.footerColor,
          n.font = o.string,
          l = 0;
        l < s;
        ++l
      )
        n.fillText(r[l], a.x(t.x), t.y + o.lineHeight / 2),
          (t.y += o.lineHeight + i.footerSpacing);
    }
  }
  drawBackground(t, n, i, r) {
    const { xAlign: s, yAlign: o } = this,
      { x: l, y: a } = t,
      { width: u, height: c } = i,
      {
        topLeft: f,
        topRight: d,
        bottomLeft: p,
        bottomRight: y,
      } = Jn(r.cornerRadius);
    (n.fillStyle = r.backgroundColor),
      (n.strokeStyle = r.borderColor),
      (n.lineWidth = r.borderWidth),
      n.beginPath(),
      n.moveTo(l + f, a),
      o === "top" && this.drawCaret(t, n, i, r),
      n.lineTo(l + u - d, a),
      n.quadraticCurveTo(l + u, a, l + u, a + d),
      o === "center" && s === "right" && this.drawCaret(t, n, i, r),
      n.lineTo(l + u, a + c - y),
      n.quadraticCurveTo(l + u, a + c, l + u - y, a + c),
      o === "bottom" && this.drawCaret(t, n, i, r),
      n.lineTo(l + p, a + c),
      n.quadraticCurveTo(l, a + c, l, a + c - p),
      o === "center" && s === "left" && this.drawCaret(t, n, i, r),
      n.lineTo(l, a + f),
      n.quadraticCurveTo(l, a, l + f, a),
      n.closePath(),
      n.fill(),
      r.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(t) {
    const n = this.chart,
      i = this.$animations,
      r = i && i.x,
      s = i && i.y;
    if (r || s) {
      const o = Ni[t.position].call(this, this._active, this._eventPosition);
      if (!o) return;
      const l = (this._size = xf(this, t)),
        a = Object.assign({}, o, this._size),
        u = _f(n, t, a),
        c = wf(t, a, u, n);
      (r._to !== c.x || s._to !== c.y) &&
        ((this.xAlign = u.xAlign),
        (this.yAlign = u.yAlign),
        (this.width = l.width),
        (this.height = l.height),
        (this.caretX = o.x),
        (this.caretY = o.y),
        this._resolveAnimations().update(this, c));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const n = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i) return;
    this._updateAnimationTarget(n);
    const r = { width: this.width, height: this.height },
      s = { x: this.x, y: this.y };
    i = Math.abs(i) < 0.001 ? 0 : i;
    const o = Tt(n.padding),
      l =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    n.enabled &&
      l &&
      (t.save(),
      (t.globalAlpha = i),
      this.drawBackground(s, t, r, n),
      gp(t, n.textDirection),
      (s.y += o.top),
      this.drawTitle(s, t, n),
      this.drawBody(s, t, n),
      this.drawFooter(s, t, n),
      mp(t, n.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, n) {
    const i = this._active,
      r = t.map(({ datasetIndex: l, index: a }) => {
        const u = this.chart.getDatasetMeta(l);
        if (!u) throw new Error("Cannot find a dataset at index " + l);
        return { datasetIndex: l, element: u.data[a], index: a };
      }),
      s = !Ws(i, r),
      o = this._positionChanged(r, n);
    (s || o) &&
      ((this._active = r),
      (this._eventPosition = n),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, n, i = !0) {
    if (n && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const r = this.options,
      s = this._active || [],
      o = this._getActiveElements(t, s, n, i),
      l = this._positionChanged(o, t),
      a = n || !Ws(o, s) || l;
    return (
      a &&
        ((this._active = o),
        (r.enabled || r.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, n))),
      a
    );
  }
  _getActiveElements(t, n, i, r) {
    const s = this.options;
    if (t.type === "mouseout") return [];
    if (!r)
      return n.filter(
        (l) =>
          this.chart.data.datasets[l.datasetIndex] &&
          this.chart
            .getDatasetMeta(l.datasetIndex)
            .controller.getParsed(l.index) !== void 0
      );
    const o = this.chart.getElementsAtEventForMode(t, s.mode, s, i);
    return s.reverse && o.reverse(), o;
  }
  _positionChanged(t, n) {
    const { caretX: i, caretY: r, options: s } = this,
      o = Ni[s.position].call(this, t, n);
    return o !== !1 && (i !== o.x || r !== o.y);
  }
}
D(ia, "positioners", Ni);
var Tx = {
  id: "tooltip",
  _element: ia,
  positioners: Ni,
  afterInit(e, t, n) {
    n && (e.tooltip = new ia({ chart: e, options: n }));
  },
  beforeUpdate(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  reset(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  afterDraw(e) {
    const t = e.tooltip;
    if (t && t._willRender()) {
      const n = { tooltip: t };
      if (e.notifyPlugins("beforeTooltipDraw", { ...n, cancelable: !0 }) === !1)
        return;
      t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n);
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const n = t.replay;
      e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: Tp,
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (e) => e !== "filter" && e !== "itemSort" && e !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
function Ax(e, t) {
  const n = [],
    {
      bounds: r,
      step: s,
      min: o,
      max: l,
      precision: a,
      count: u,
      maxTicks: c,
      maxDigits: f,
      includeBounds: d,
    } = e,
    p = s || 1,
    y = c - 1,
    { min: v, max: x } = t,
    g = !tt(o),
    h = !tt(l),
    m = !tt(u),
    _ = (x - v) / (f + 1);
  let w = Lc((x - v) / y / p) * p,
    k,
    S,
    b,
    A;
  if (w < 1e-14 && !g && !h) return [{ value: v }, { value: x }];
  (A = Math.ceil(x / w) - Math.floor(v / w)),
    A > y && (w = Lc((A * w) / y / p) * p),
    tt(a) || ((k = Math.pow(10, a)), (w = Math.ceil(w * k) / k)),
    r === "ticks"
      ? ((S = Math.floor(v / w) * w), (b = Math.ceil(x / w) * w))
      : ((S = v), (b = x)),
    g && h && s && K0((l - o) / s, w / 1e3)
      ? ((A = Math.round(Math.min((l - o) / w, c))),
        (w = (l - o) / A),
        (S = o),
        (b = l))
      : m
      ? ((S = g ? o : S), (b = h ? l : b), (A = u - 1), (w = (b - S) / A))
      : ((A = (b - S) / w),
        gs(A, Math.round(A), w / 1e3)
          ? (A = Math.round(A))
          : (A = Math.ceil(A)));
  const P = Math.max(Oc(w), Oc(S));
  (k = Math.pow(10, tt(a) ? P : a)),
    (S = Math.round(S * k) / k),
    (b = Math.round(b * k) / k);
  let O = 0;
  for (
    g &&
    (d && S !== o
      ? (n.push({ value: o }),
        S < o && O++,
        gs(Math.round((S + O * w) * k) / k, o, bf(o, _, e)) && O++)
      : S < o && O++);
    O < A;
    ++O
  ) {
    const z = Math.round((S + O * w) * k) / k;
    if (h && z > l) break;
    n.push({ value: z });
  }
  return (
    h && d && b !== l
      ? n.length && gs(n[n.length - 1].value, l, bf(l, _, e))
        ? (n[n.length - 1].value = l)
        : n.push({ value: l })
      : (!h || b === l) && n.push({ value: b }),
    n
  );
}
function bf(e, t, { horizontal: n, minRotation: i }) {
  const r = me(i),
    s = (n ? Math.sin(r) : Math.cos(r)) || 0.001,
    o = 0.75 * t * ("" + e).length;
  return Math.min(t / s, o);
}
class to extends hi {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, n) {
    return tt(t) ||
      ((typeof t == "number" || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: n, maxDefined: i } = this.getUserBounds();
    let { min: r, max: s } = this;
    const o = (a) => (r = n ? r : a),
      l = (a) => (s = i ? s : a);
    if (t) {
      const a = Qs(r),
        u = Qs(s);
      a < 0 && u < 0 ? l(0) : a > 0 && u > 0 && o(0);
    }
    if (r === s) {
      let a = s === 0 ? 1 : Math.abs(s * 0.05);
      l(s + a), t || o(r - a);
    }
    (this.min = r), (this.max = s);
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: n, stepSize: i } = t,
      r;
    return (
      i
        ? ((r = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
          r > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`
            ),
            (r = 1e3)))
        : ((r = this.computeTickLimit()), (n = n || 11)),
      n && (r = Math.min(n, r)),
      r
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      n = t.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const r = {
        maxTicks: i,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: n.precision,
        step: n.stepSize,
        count: n.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: n.minRotation || 0,
        includeBounds: n.includeBounds !== !1,
      },
      s = this._range || this,
      o = Ax(r, s);
    return (
      t.bounds === "ticks" && np(o, this, "value"),
      t.reverse
        ? (o.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      o
    );
  }
  configure() {
    const t = this.ticks;
    let n = this.min,
      i = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const r = (i - n) / Math.max(t.length - 1, 1) / 2;
      (n -= r), (i += r);
    }
    (this._startValue = n), (this._endValue = i), (this._valueRange = i - n);
  }
  getLabelForValue(t) {
    return xo(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Cf extends to {
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    (this.min = pt(t) ? t : 0),
      (this.max = pt(n) ? n : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      n = t ? this.width : this.height,
      i = me(this.options.ticks.minRotation),
      r = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
      s = this._resolveTickFontOptions(0);
    return Math.ceil(n / Math.min(40, s.lineHeight / r));
  }
  getPixelForValue(t) {
    return t === null
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
D(Cf, "id", "linear"),
  D(Cf, "defaults", { ticks: { callback: _o.formatters.numeric } });
const yr = (e) => Math.floor(Ue(e)),
  fn = (e, t) => Math.pow(10, yr(e) + t);
function Mf(e) {
  return e / Math.pow(10, yr(e)) === 1;
}
function Ef(e, t, n) {
  const i = Math.pow(10, n),
    r = Math.floor(e / i);
  return Math.ceil(t / i) - r;
}
function Lx(e, t) {
  const n = t - e;
  let i = yr(n);
  for (; Ef(e, t, i) > 10; ) i++;
  for (; Ef(e, t, i) < 10; ) i--;
  return Math.min(i, yr(e));
}
function Ox(e, { min: t, max: n }) {
  t = Bt(e.min, t);
  const i = [],
    r = yr(t);
  let s = Lx(t, n),
    o = s < 0 ? Math.pow(10, Math.abs(s)) : 1;
  const l = Math.pow(10, s),
    a = r > s ? Math.pow(10, r) : 0,
    u = Math.round((t - a) * o) / o,
    c = Math.floor((t - a) / l / 10) * l * 10;
  let f = Math.floor((u - c) / Math.pow(10, s)),
    d = Bt(e.min, Math.round((a + c + f * Math.pow(10, s)) * o) / o);
  for (; d < n; )
    i.push({ value: d, major: Mf(d), significand: f }),
      f >= 10 ? (f = f < 15 ? 15 : 20) : f++,
      f >= 20 && (s++, (f = 2), (o = s >= 0 ? 1 : o)),
      (d = Math.round((a + c + f * Math.pow(10, s)) * o) / o);
  const p = Bt(e.max, d);
  return i.push({ value: p, major: Mf(p), significand: f }), i;
}
class Pf extends hi {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, n) {
    const i = to.prototype.parse.apply(this, [t, n]);
    if (i === 0) {
      this._zero = !0;
      return;
    }
    return pt(i) && i > 0 ? i : null;
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    (this.min = pt(t) ? Math.max(0, t) : null),
      (this.max = pt(n) ? Math.max(0, n) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !pt(this._userMin) &&
        (this.min = t === fn(this.min, 0) ? fn(this.min, -1) : fn(this.min, 0)),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let i = this.min,
      r = this.max;
    const s = (l) => (i = t ? i : l),
      o = (l) => (r = n ? r : l);
    i === r && (i <= 0 ? (s(1), o(10)) : (s(fn(i, -1)), o(fn(r, 1)))),
      i <= 0 && s(fn(r, -1)),
      r <= 0 && o(fn(i, 1)),
      (this.min = i),
      (this.max = r);
  }
  buildTicks() {
    const t = this.options,
      n = { min: this._userMin, max: this._userMax },
      i = Ox(n, this);
    return (
      t.bounds === "ticks" && np(i, this, "value"),
      t.reverse
        ? (i.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      i
    );
  }
  getLabelForValue(t) {
    return t === void 0
      ? "0"
      : xo(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(),
      (this._startValue = Ue(t)),
      (this._valueRange = Ue(this.max) - Ue(t));
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (Ue(t) - this._startValue) / this._valueRange
          )
    );
  }
  getValueForPixel(t) {
    const n = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + n * this._valueRange);
  }
}
D(Pf, "id", "logarithmic"),
  D(Pf, "defaults", {
    ticks: { callback: _o.formatters.logarithmic, major: { enabled: !0 } },
  });
function ra(e) {
  const t = e.ticks;
  if (t.display && e.display) {
    const n = Tt(t.backdropPadding);
    return B(t.font && t.font.size, ot.font.size) + n.height;
  }
  return 0;
}
function Dx(e, t, n) {
  return (
    (n = rt(n) ? n : [n]), { w: dy(e, t.string, n), h: n.length * t.lineHeight }
  );
}
function Tf(e, t, n, i, r) {
  return e === i || e === r
    ? { start: t - n / 2, end: t + n / 2 }
    : e < i || e > r
    ? { start: t - n, end: t }
    : { start: t, end: t + n };
}
function Rx(e) {
  const t = {
      l: e.left + e._padding.left,
      r: e.right - e._padding.right,
      t: e.top + e._padding.top,
      b: e.bottom - e._padding.bottom,
    },
    n = Object.assign({}, t),
    i = [],
    r = [],
    s = e._pointLabels.length,
    o = e.options.pointLabels,
    l = o.centerPointLabels ? ct / s : 0;
  for (let a = 0; a < s; a++) {
    const u = o.setContext(e.getPointLabelContext(a));
    r[a] = u.padding;
    const c = e.getPointPosition(a, e.drawingArea + r[a], l),
      f = yt(u.font),
      d = Dx(e.ctx, f, e._pointLabels[a]);
    i[a] = d;
    const p = pe(e.getIndexAngle(a) + l),
      y = Math.round(ru(p)),
      v = Tf(y, c.x, d.w, 0, 180),
      x = Tf(y, c.y, d.h, 90, 270);
    zx(n, t, p, v, x);
  }
  e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b),
    (e._pointLabelItems = Ix(e, i, r));
}
function zx(e, t, n, i, r) {
  const s = Math.abs(Math.sin(n)),
    o = Math.abs(Math.cos(n));
  let l = 0,
    a = 0;
  i.start < t.l
    ? ((l = (t.l - i.start) / s), (e.l = Math.min(e.l, t.l - l)))
    : i.end > t.r && ((l = (i.end - t.r) / s), (e.r = Math.max(e.r, t.r + l))),
    r.start < t.t
      ? ((a = (t.t - r.start) / o), (e.t = Math.min(e.t, t.t - a)))
      : r.end > t.b &&
        ((a = (r.end - t.b) / o), (e.b = Math.max(e.b, t.b + a)));
}
function Nx(e, t, n) {
  const i = e.drawingArea,
    { extra: r, additionalAngle: s, padding: o, size: l } = n,
    a = e.getPointPosition(t, i + r + o, s),
    u = Math.round(ru(pe(a.angle + at))),
    c = Hx(a.y, l.h, u),
    f = jx(u),
    d = Bx(a.x, l.w, f);
  return {
    visible: !0,
    x: a.x,
    y: c,
    textAlign: f,
    left: d,
    top: c,
    right: d + l.w,
    bottom: c + l.h,
  };
}
function Fx(e, t) {
  if (!t) return !0;
  const { left: n, top: i, right: r, bottom: s } = e;
  return !(
    Qn({ x: n, y: i }, t) ||
    Qn({ x: n, y: s }, t) ||
    Qn({ x: r, y: i }, t) ||
    Qn({ x: r, y: s }, t)
  );
}
function Ix(e, t, n) {
  const i = [],
    r = e._pointLabels.length,
    s = e.options,
    { centerPointLabels: o, display: l } = s.pointLabels,
    a = { extra: ra(s) / 2, additionalAngle: o ? ct / r : 0 };
  let u;
  for (let c = 0; c < r; c++) {
    (a.padding = n[c]), (a.size = t[c]);
    const f = Nx(e, c, a);
    i.push(f), l === "auto" && ((f.visible = Fx(f, u)), f.visible && (u = f));
  }
  return i;
}
function jx(e) {
  return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
}
function Bx(e, t, n) {
  return n === "right" ? (e -= t) : n === "center" && (e -= t / 2), e;
}
function Hx(e, t, n) {
  return (
    n === 90 || n === 270 ? (e -= t / 2) : (n > 270 || n < 90) && (e -= t), e
  );
}
function Wx(e, t, n) {
  const { left: i, top: r, right: s, bottom: o } = n,
    { backdropColor: l } = t;
  if (!tt(l)) {
    const a = Jn(t.borderRadius),
      u = Tt(t.backdropPadding);
    e.fillStyle = l;
    const c = i - u.left,
      f = r - u.top,
      d = s - i + u.width,
      p = o - r + u.height;
    Object.values(a).some((y) => y !== 0)
      ? (e.beginPath(), $s(e, { x: c, y: f, w: d, h: p, radius: a }), e.fill())
      : e.fillRect(c, f, d, p);
  }
}
function Vx(e, t) {
  const {
    ctx: n,
    options: { pointLabels: i },
  } = e;
  for (let r = t - 1; r >= 0; r--) {
    const s = e._pointLabelItems[r];
    if (!s.visible) continue;
    const o = i.setContext(e.getPointLabelContext(r));
    Wx(n, o, s);
    const l = yt(o.font),
      { x: a, y: u, textAlign: c } = s;
    ai(n, e._pointLabels[r], a, u + l.lineHeight / 2, l, {
      color: o.color,
      textAlign: c,
      textBaseline: "middle",
    });
  }
}
function Ap(e, t, n, i) {
  const { ctx: r } = e;
  if (n) r.arc(e.xCenter, e.yCenter, t, 0, st);
  else {
    let s = e.getPointPosition(0, t);
    r.moveTo(s.x, s.y);
    for (let o = 1; o < i; o++)
      (s = e.getPointPosition(o, t)), r.lineTo(s.x, s.y);
  }
}
function Ux(e, t, n, i, r) {
  const s = e.ctx,
    o = t.circular,
    { color: l, lineWidth: a } = t;
  (!o && !i) ||
    !l ||
    !a ||
    n < 0 ||
    (s.save(),
    (s.strokeStyle = l),
    (s.lineWidth = a),
    s.setLineDash(r.dash),
    (s.lineDashOffset = r.dashOffset),
    s.beginPath(),
    Ap(e, n, o, i),
    s.closePath(),
    s.stroke(),
    s.restore());
}
function Yx(e, t, n) {
  return An(e, { label: n, index: t, type: "pointLabel" });
}
class es extends to {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const t = (this._padding = Tt(ra(this.options) / 2)),
      n = (this.width = this.maxWidth - t.width),
      i = (this.height = this.maxHeight - t.height);
    (this.xCenter = Math.floor(this.left + n / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(n, i) / 2));
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!1);
    (this.min = pt(t) && !isNaN(t) ? t : 0),
      (this.max = pt(n) && !isNaN(n) ? n : 0),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / ra(this.options));
  }
  generateTickLabels(t) {
    to.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((n, i) => {
          const r = Y(this.options.pointLabels.callback, [n, i], this);
          return r || r === 0 ? r : "";
        })
        .filter((n, i) => this.chart.getDataVisibility(i)));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display
      ? Rx(this)
      : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, n, i, r) {
    (this.xCenter += Math.floor((t - n) / 2)),
      (this.yCenter += Math.floor((i - r) / 2)),
      (this.drawingArea -= Math.min(
        this.drawingArea / 2,
        Math.max(t, n, i, r)
      ));
  }
  getIndexAngle(t) {
    const n = st / (this._pointLabels.length || 1),
      i = this.options.startAngle || 0;
    return pe(t * n + me(i));
  }
  getDistanceFromCenterForValue(t) {
    if (tt(t)) return NaN;
    const n = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * n : (t - this.min) * n;
  }
  getValueForDistanceFromCenter(t) {
    if (tt(t)) return NaN;
    const n = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - n : this.min + n;
  }
  getPointLabelContext(t) {
    const n = this._pointLabels || [];
    if (t >= 0 && t < n.length) {
      const i = n[t];
      return Yx(this.getContext(), t, i);
    }
  }
  getPointPosition(t, n, i = 0) {
    const r = this.getIndexAngle(t) - at + i;
    return {
      x: Math.cos(r) * n + this.xCenter,
      y: Math.sin(r) * n + this.yCenter,
      angle: r,
    };
  }
  getPointPositionForValue(t, n) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(n));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: n, top: i, right: r, bottom: s } = this._pointLabelItems[t];
    return { left: n, top: i, right: r, bottom: s };
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: n },
    } = this.options;
    if (t) {
      const i = this.ctx;
      i.save(),
        i.beginPath(),
        Ap(
          this,
          this.getDistanceFromCenterForValue(this._endValue),
          n,
          this._pointLabels.length
        ),
        i.closePath(),
        (i.fillStyle = t),
        i.fill(),
        i.restore();
    }
  }
  drawGrid() {
    const t = this.ctx,
      n = this.options,
      { angleLines: i, grid: r, border: s } = n,
      o = this._pointLabels.length;
    let l, a, u;
    if (
      (n.pointLabels.display && Vx(this, o),
      r.display &&
        this.ticks.forEach((c, f) => {
          if (f !== 0 || (f === 0 && this.min < 0)) {
            a = this.getDistanceFromCenterForValue(c.value);
            const d = this.getContext(f),
              p = r.setContext(d),
              y = s.setContext(d);
            Ux(this, p, a, o, y);
          }
        }),
      i.display)
    ) {
      for (t.save(), l = o - 1; l >= 0; l--) {
        const c = i.setContext(this.getPointLabelContext(l)),
          { color: f, lineWidth: d } = c;
        !d ||
          !f ||
          ((t.lineWidth = d),
          (t.strokeStyle = f),
          t.setLineDash(c.borderDash),
          (t.lineDashOffset = c.borderDashOffset),
          (a = this.getDistanceFromCenterForValue(
            n.ticks.reverse ? this.min : this.max
          )),
          (u = this.getPointPosition(l, a)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(u.x, u.y),
          t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      n = this.options,
      i = n.ticks;
    if (!i.display) return;
    const r = this.getIndexAngle(0);
    let s, o;
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(r),
      (t.textAlign = "center"),
      (t.textBaseline = "middle"),
      this.ticks.forEach((l, a) => {
        if (a === 0 && this.min >= 0 && !n.reverse) return;
        const u = i.setContext(this.getContext(a)),
          c = yt(u.font);
        if (
          ((s = this.getDistanceFromCenterForValue(this.ticks[a].value)),
          u.showLabelBackdrop)
        ) {
          (t.font = c.string),
            (o = t.measureText(l.label).width),
            (t.fillStyle = u.backdropColor);
          const f = Tt(u.backdropPadding);
          t.fillRect(
            -o / 2 - f.left,
            -s - c.size / 2 - f.top,
            o + f.width,
            c.size + f.height
          );
        }
        ai(t, l.label, 0, -s, c, {
          color: u.color,
          strokeColor: u.textStrokeColor,
          strokeWidth: u.textStrokeWidth,
        });
      }),
      t.restore();
  }
  drawTitle() {}
}
D(es, "id", "radialLinear"),
  D(es, "defaults", {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0,
    },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: _o.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: !1,
    },
  }),
  D(es, "defaultRoutes", {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color",
  }),
  D(es, "descriptors", { angleLines: { _fallback: "grid" } });
const So = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Rt = Object.keys(So);
function Af(e, t) {
  return e - t;
}
function Lf(e, t) {
  if (tt(t)) return null;
  const n = e._adapter,
    { parser: i, round: r, isoWeekday: s } = e._parseOpts;
  let o = t;
  return (
    typeof i == "function" && (o = i(o)),
    pt(o) || (o = typeof i == "string" ? n.parse(o, i) : n.parse(o)),
    o === null
      ? null
      : (r &&
          (o =
            r === "week" && (Xs(s) || s === !0)
              ? n.startOf(o, "isoWeek", s)
              : n.startOf(o, r)),
        +o)
  );
}
function Of(e, t, n, i) {
  const r = Rt.length;
  for (let s = Rt.indexOf(e); s < r - 1; ++s) {
    const o = So[Rt[s]],
      l = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
    if (o.common && Math.ceil((n - t) / (l * o.size)) <= i) return Rt[s];
  }
  return Rt[r - 1];
}
function Qx(e, t, n, i, r) {
  for (let s = Rt.length - 1; s >= Rt.indexOf(n); s--) {
    const o = Rt[s];
    if (So[o].common && e._adapter.diff(r, i, o) >= t - 1) return o;
  }
  return Rt[n ? Rt.indexOf(n) : 0];
}
function Xx(e) {
  for (let t = Rt.indexOf(e) + 1, n = Rt.length; t < n; ++t)
    if (So[Rt[t]].common) return Rt[t];
}
function Df(e, t, n) {
  if (!n) e[t] = !0;
  else if (n.length) {
    const { lo: i, hi: r } = su(n, t),
      s = n[i] >= t ? n[i] : n[r];
    e[s] = !0;
  }
}
function Kx(e, t, n, i) {
  const r = e._adapter,
    s = +r.startOf(t[0].value, i),
    o = t[t.length - 1].value;
  let l, a;
  for (l = s; l <= o; l = +r.add(l, 1, i))
    (a = n[l]), a >= 0 && (t[a].major = !0);
  return t;
}
function Rf(e, t, n) {
  const i = [],
    r = {},
    s = t.length;
  let o, l;
  for (o = 0; o < s; ++o)
    (l = t[o]), (r[l] = o), i.push({ value: l, major: !1 });
  return s === 0 || !n ? i : Kx(e, i, r, n);
}
class eo extends hi {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, n = {}) {
    const i = t.time || (t.time = {}),
      r = (this._adapter = new ev._date(t.adapters.date));
    r.init(n),
      Qi(i.displayFormats, r.formats()),
      (this._parseOpts = {
        parser: i.parser,
        round: i.round,
        isoWeekday: i.isoWeekday,
      }),
      super.init(t),
      (this._normalized = n.normalized);
  }
  parse(t, n) {
    return t === void 0 ? null : Lf(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const t = this.options,
      n = this._adapter,
      i = t.time.unit || "day";
    let { min: r, max: s, minDefined: o, maxDefined: l } = this.getUserBounds();
    function a(u) {
      !o && !isNaN(u.min) && (r = Math.min(r, u.min)),
        !l && !isNaN(u.max) && (s = Math.max(s, u.max));
    }
    (!o || !l) &&
      (a(this._getLabelBounds()),
      (t.bounds !== "ticks" || t.ticks.source !== "labels") &&
        a(this.getMinMax(!1))),
      (r = pt(r) && !isNaN(r) ? r : +n.startOf(Date.now(), i)),
      (s = pt(s) && !isNaN(s) ? s : +n.endOf(Date.now(), i) + 1),
      (this.min = Math.min(r, s - 1)),
      (this.max = Math.max(r + 1, s));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY,
      i = Number.NEGATIVE_INFINITY;
    return t.length && ((n = t[0]), (i = t[t.length - 1])), { min: n, max: i };
  }
  buildTicks() {
    const t = this.options,
      n = t.time,
      i = t.ticks,
      r = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" &&
      r.length &&
      ((this.min = this._userMin || r[0]),
      (this.max = this._userMax || r[r.length - 1]));
    const s = this.min,
      o = this.max,
      l = q0(r, s, o);
    return (
      (this._unit =
        n.unit ||
        (i.autoSkip
          ? Of(n.minUnit, this.min, this.max, this._getLabelCapacity(s))
          : Qx(this, l.length, n.minUnit, this.min, this.max))),
      (this._majorUnit =
        !i.major.enabled || this._unit === "year" ? void 0 : Xx(this._unit)),
      this.initOffsets(r),
      t.reverse && l.reverse(),
      Rf(this, l, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let n = 0,
      i = 0,
      r,
      s;
    this.options.offset &&
      t.length &&
      ((r = this.getDecimalForValue(t[0])),
      t.length === 1
        ? (n = 1 - r)
        : (n = (this.getDecimalForValue(t[1]) - r) / 2),
      (s = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1
        ? (i = s)
        : (i = (s - this.getDecimalForValue(t[t.length - 2])) / 2));
    const o = t.length < 3 ? 0.5 : 0.25;
    (n = qt(n, 0, o)),
      (i = qt(i, 0, o)),
      (this._offsets = { start: n, end: i, factor: 1 / (n + 1 + i) });
  }
  _generate() {
    const t = this._adapter,
      n = this.min,
      i = this.max,
      r = this.options,
      s = r.time,
      o = s.unit || Of(s.minUnit, n, i, this._getLabelCapacity(n)),
      l = B(r.ticks.stepSize, 1),
      a = o === "week" ? s.isoWeekday : !1,
      u = Xs(a) || a === !0,
      c = {};
    let f = n,
      d,
      p;
    if (
      (u && (f = +t.startOf(f, "isoWeek", a)),
      (f = +t.startOf(f, u ? "day" : o)),
      t.diff(i, n, o) > 1e5 * l)
    )
      throw new Error(
        n + " and " + i + " are too far apart with stepSize of " + l + " " + o
      );
    const y = r.ticks.source === "data" && this.getDataTimestamps();
    for (d = f, p = 0; d < i; d = +t.add(d, l, o), p++) Df(c, d, y);
    return (
      (d === i || r.bounds === "ticks" || p === 1) && Df(c, d, y),
      Object.keys(c)
        .sort(Af)
        .map((v) => +v)
    );
  }
  getLabelForValue(t) {
    const n = this._adapter,
      i = this.options.time;
    return i.tooltipFormat
      ? n.format(t, i.tooltipFormat)
      : n.format(t, i.displayFormats.datetime);
  }
  format(t, n) {
    const r = this.options.time.displayFormats,
      s = this._unit,
      o = n || r[s];
    return this._adapter.format(t, o);
  }
  _tickFormatFunction(t, n, i, r) {
    const s = this.options,
      o = s.ticks.callback;
    if (o) return Y(o, [t, n, i], this);
    const l = s.time.displayFormats,
      a = this._unit,
      u = this._majorUnit,
      c = a && l[a],
      f = u && l[u],
      d = i[n],
      p = u && f && d && d.major;
    return this._adapter.format(t, r || (p ? f : c));
  }
  generateTickLabels(t) {
    let n, i, r;
    for (n = 0, i = t.length; n < i; ++n)
      (r = t[n]), (r.label = this._tickFormatFunction(r.value, n, t));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const n = this._offsets,
      i = this.getDecimalForValue(t);
    return this.getPixelForDecimal((n.start + i) * n.factor);
  }
  getValueForPixel(t) {
    const n = this._offsets,
      i = this.getDecimalForPixel(t) / n.factor - n.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(t) {
    const n = this.options.ticks,
      i = this.ctx.measureText(t).width,
      r = me(this.isHorizontal() ? n.maxRotation : n.minRotation),
      s = Math.cos(r),
      o = Math.sin(r),
      l = this._resolveTickFontOptions(0).size;
    return { w: i * s + l * o, h: i * o + l * s };
  }
  _getLabelCapacity(t) {
    const n = this.options.time,
      i = n.displayFormats,
      r = i[n.unit] || i.millisecond,
      s = this._tickFormatFunction(t, 0, Rf(this, [t], this._majorUnit), r),
      o = this._getLabelSize(s),
      l =
        Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) -
        1;
    return l > 0 ? l : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      n,
      i;
    if (t.length) return t;
    const r = this.getMatchingVisibleMetas();
    if (this._normalized && r.length)
      return (this._cache.data = r[0].controller.getAllParsedValues(this));
    for (n = 0, i = r.length; n < i; ++n)
      t = t.concat(r[n].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(t));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let n, i;
    if (t.length) return t;
    const r = this.getLabels();
    for (n = 0, i = r.length; n < i; ++n) t.push(Lf(this, r[n]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return ty(t.sort(Af));
  }
}
D(eo, "id", "time"),
  D(eo, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  });
function ns(e, t, n) {
  let i = 0,
    r = e.length - 1,
    s,
    o,
    l,
    a;
  n
    ? (t >= e[i].pos && t <= e[r].pos && ({ lo: i, hi: r } = ql(e, "pos", t)),
      ({ pos: s, time: l } = e[i]),
      ({ pos: o, time: a } = e[r]))
    : (t >= e[i].time &&
        t <= e[r].time &&
        ({ lo: i, hi: r } = ql(e, "time", t)),
      ({ time: s, pos: l } = e[i]),
      ({ time: o, pos: a } = e[r]));
  const u = o - s;
  return u ? l + ((a - l) * (t - s)) / u : l;
}
class zf extends eo {
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      n = (this._table = this.buildLookupTable(t));
    (this._minPos = ns(n, this.min)),
      (this._tableRange = ns(n, this.max) - this._minPos),
      super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: n, max: i } = this,
      r = [],
      s = [];
    let o, l, a, u, c;
    for (o = 0, l = t.length; o < l; ++o)
      (u = t[o]), u >= n && u <= i && r.push(u);
    if (r.length < 2)
      return [
        { time: n, pos: 0 },
        { time: i, pos: 1 },
      ];
    for (o = 0, l = r.length; o < l; ++o)
      (c = r[o + 1]),
        (a = r[o - 1]),
        (u = r[o]),
        Math.round((c + a) / 2) !== u && s.push({ time: u, pos: o / (l - 1) });
    return s;
  }
  _generate() {
    const t = this.min,
      n = this.max;
    let i = super.getDataTimestamps();
    return (
      (!i.includes(t) || !i.length) && i.splice(0, 0, t),
      (!i.includes(n) || i.length === 1) && i.push(n),
      i.sort((r, s) => r - s)
    );
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const n = this.getDataTimestamps(),
      i = this.getLabelTimestamps();
    return (
      n.length && i.length
        ? (t = this.normalize(n.concat(i)))
        : (t = n.length ? n : i),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (ns(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const n = this._offsets,
      i = this.getDecimalForPixel(t) / n.factor - n.end;
    return ns(this._table, i * this._tableRange + this._minPos, !0);
  }
}
D(zf, "id", "timeseries"), D(zf, "defaults", eo.defaults);
const Lp = "label";
function Nf(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Gx(e, t) {
  const n = e.options;
  n && t && Object.assign(n, t);
}
function Op(e, t) {
  e.labels = t;
}
function Dp(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lp;
  const i = [];
  e.datasets = t.map((r) => {
    const s = e.datasets.find((o) => o[n] === r[n]);
    return !s || !r.data || i.includes(s)
      ? { ...r }
      : (i.push(s), Object.assign(s, r), s);
  });
}
function $x(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Lp;
  const n = { labels: [], datasets: [] };
  return Op(n, e.labels), Dp(n, e.datasets, t), n;
}
function Zx(e, t) {
  const {
      height: n = 150,
      width: i = 300,
      redraw: r = !1,
      datasetIdKey: s,
      type: o,
      data: l,
      options: a,
      plugins: u = [],
      fallbackContent: c,
      updateMode: f,
      ...d
    } = e,
    p = Ht.useRef(null),
    y = Ht.useRef(),
    v = () => {
      p.current &&
        ((y.current = new ko(p.current, {
          type: o,
          data: $x(l, s),
          options: a && { ...a },
          plugins: u,
        })),
        Nf(t, y.current));
    },
    x = () => {
      Nf(t, null), y.current && (y.current.destroy(), (y.current = null));
    };
  return (
    Ht.useEffect(() => {
      !r && y.current && a && Gx(y.current, a);
    }, [r, a]),
    Ht.useEffect(() => {
      !r && y.current && Op(y.current.config.data, l.labels);
    }, [r, l.labels]),
    Ht.useEffect(() => {
      !r && y.current && l.datasets && Dp(y.current.config.data, l.datasets, s);
    }, [r, l.datasets]),
    Ht.useEffect(() => {
      y.current && (r ? (x(), setTimeout(v)) : y.current.update(f));
    }, [r, a, l.labels, l.datasets, f]),
    Ht.useEffect(() => {
      y.current && (x(), setTimeout(v));
    }, [o]),
    Ht.useEffect(() => (v(), () => x()), []),
    ua.createElement(
      "canvas",
      Object.assign({ ref: p, role: "img", height: n, width: i }, d),
      c
    )
  );
}
const qx = Ht.forwardRef(Zx);
function Jx(e, t) {
  return (
    ko.register(t),
    Ht.forwardRef((n, i) =>
      ua.createElement(qx, Object.assign({}, n, { ref: i, type: e }))
    )
  );
}
const t1 = Jx("pie", ta);
ko.register(zi, Tx, wx);
const e1 = {
  labels: ["Fairlaunch", "DEXs kisting", "Airdrop", "Team", "Reserve"],
  datasets: [
    {
      label: "% of",
      data: [35, 22.05, 10, 22.95, 10],
      backgroundColor: [
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
        "rgba(153, 102, 255)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
    },
  ],
};
function n1() {
  return C.jsx("section", {
    id: "about",
    style: { backgroundImage: `url(${m0})`, backgroundSize: "100% 100%" },
    className: "mb-20 sm:mb-0",
    children: C.jsxs("div", {
      className: "container mx-auto",
      children: [
        C.jsx("h1", {
          className:
            "font-medium text-[34px] text-center sm:text-[64px] mb-20 md:mb-[200px]",
          children: "Cookie Token Tokenomics",
        }),
        C.jsxs("div", {
          className:
            "flex flex-col lg:flex-row gap-10 sm:gap-20 2xl:gap-[160px]",
          children: [
            C.jsxs("div", {
              className:
                "flex flex-col md:flex-row items-center gap-10 sm:gap-20",
              children: [
                C.jsx("div", {
                  className: "w-[280px] sm:w-[300px] mx-auto",
                  children: C.jsx(t1, {
                    options: { plugins: { legend: { display: !1 } } },
                    data: e1,
                  }),
                }),
                C.jsxs("div", {
                  children: [
                    C.jsxs("ul", {
                      className: "text-[25px] xl:text-[40px] mb-10",
                      children: [
                        C.jsxs("li", {
                          className:
                            "flex items-center gap-4 whitespace-nowrap",
                          children: [
                            C.jsx("i", {
                              className:
                                "block w-[20px] min-w-[20px] rounded-[50%] h-[20px] bg-[#05d0c4]",
                            }),
                            "Fairlaunch (35%)",
                          ],
                        }),
                        C.jsxs("li", {
                          className:
                            "flex items-center gap-4 whitespace-nowrap",
                          children: [
                            C.jsx("i", {
                              className:
                                "block w-[20px] min-w-[20px] rounded-[50%] h-[20px] bg-[#ffdf8c]",
                            }),
                            "DEXs listing (22.05%)",
                          ],
                        }),
                        C.jsxs("li", {
                          className:
                            "flex items-center gap-4 whitespace-nowrap",
                          children: [
                            C.jsx("i", {
                              className:
                                "block w-[20px] min-w-[20px] rounded-[50%] h-[20px] bg-[#af7eff]",
                            }),
                            "Airdrop (10%)",
                          ],
                        }),
                        C.jsxs("li", {
                          className:
                            "flex items-center gap-4 whitespace-nowrap",
                          children: [
                            C.jsx("i", {
                              className:
                                "block w-[20px] min-w-[20px] rounded-[50%] h-[20px] bg-[#f382d4]",
                            }),
                            "Team (22.95%)",
                          ],
                        }),
                        C.jsxs("li", {
                          className:
                            "flex items-center gap-4 whitespace-nowrap",
                          children: [
                            C.jsx("i", {
                              className:
                                "block w-[20px] min-w-[20px] rounded-[50%] h-[20px] bg-[#ffdf8c]",
                            }),
                            "Reserve (10%)",
                          ],
                        }),
                      ],
                    }),
                    C.jsx("a", {
                      href: Be.locks,
                      target: "_blanck",
                      className:
                        "px-[50px] w-fit transition hover:bg-white hover:text-[#000000] active:bg-[#735B05] active:text-[#ffffff] focus:bg-white focus:text-[#000000] font-medium py-2 rounded-[50px] bg-[#735B05] text-[28px] lg:text-[48px]",
                      children: "Links to locks",
                    }),
                  ],
                }),
              ],
            }),
            C.jsx("div", {
              className: "flex flex-col items-center gap-[100px] ",
              children: C.jsx("p", {
                className: "text-[25px] xl:text-[36px]",
                children:
                  "Tokens allocated to the team will also be spent on development and promotion. And the tokens allocated to Reserve will either be burned or added to the liquidity.",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const i1 = "/assets/damaged-cookie-CMx3DDKQ.png";
function r1() {
  return C.jsx("footer", {
    className: "relative",
    children: C.jsxs("div", {
      className:
        "container mx-auto items-center gap-10 sm:gap-[100px] pb-[100px]",
      children: [
        C.jsxs("div", {
          className: "relative z-[1]",
          children: [
            C.jsx("h1", {
              className:
                "font-medium text-[34px] text-center sm:text-[64px] mb-7",
              children: "White Paper",
            }),
            C.jsxs("div", {
              className: "max-w-[1175px]",
              children: [
                C.jsx("p", {
                  className:
                    "text-[25px] xl:text-[36px] text-[#FFFFFF] mb-10 sm:mb-[88px]",
                  children:
                    "This is an integral utility mem token. Economically this is an asset freely wrapped in the crypto market. All actions of our team are aimed at the development of social services and interaction between users of the TON blockchain and other blockchains of the cryptospace.",
                }),
                C.jsx("p", {
                  className:
                    "text-[25px] xl:text-[36px] text-[#FFFFFF] mb-10 sm:mb-[88px]",
                  children:
                    "We will strive for the widest possible introduction of the Cookie into our and third-party products, services and communities, developing its recognition and demand at the level of the most popular crypto assets.",
                }),
              ],
            }),
          ],
        }),
        C.jsx("img", {
          className: "absolute w-[1161px] -right-[20px] sm:right-0 bottom-0",
          src: i1,
        }),
      ],
    }),
  });
}
function s1() {
  return C.jsxs("div", {
    className: "mx-auto px-5 sm:px-0",
    children: [
      C.jsx(d0, {}),
      C.jsxs("main", {
        className: "grid md:grid-rows-[repeat(4,1080px)]",
        children: [C.jsx(h0, {}), C.jsx(u0, {}), C.jsx(g0, {}), C.jsx(n1, {})],
      }),
      C.jsx(r1, {}),
    ],
  });
}
rl.createRoot(document.getElementById("root")).render(
  C.jsx(ua.StrictMode, { children: C.jsx(s1, {}) })
);
