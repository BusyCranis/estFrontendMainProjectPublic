!(function () {
  "use strict";
  var e = (e) => (t, n) => {
    if (0 !== t) return;
    if ("function" != typeof e) return n(0, () => {}), void n(2);
    let i,
      o = !1;
    n(0, (e) => {
      o || ((o = 2 === e), o && "function" == typeof i && i());
    }),
      o ||
        (i = e(
          (e) => {
            o || n(1, e);
          },
          (e) => {
            o || void 0 === e || ((o = !0), n(2, e));
          },
          () => {
            o || ((o = !0), n(2));
          }
        ));
  };
  const t = (e) => (t, n) => {
    if (0 !== t) return;
    let i, o;
    function r(e, t) {
      1 === e && (o || i)(1, t), 2 === e && (o && o(2), i && i(2));
    }
    e(0, (e, t) => {
      if (0 === e) (i = t), n(0, r);
      else if (1 === e) {
        const e = t;
        o && o(2),
          e(0, (e, t) => {
            0 === e
              ? ((o = t), o(1))
              : 1 === e
              ? n(1, t)
              : 2 === e && t
              ? (i && i(2), n(2, t))
              : 2 === e && (i ? ((o = void 0), i(1)) : n(2));
          });
      } else
        2 === e && t
          ? (o && o(2), n(2, t))
          : 2 === e && (o ? (i = void 0) : n(2));
    });
  };
  var n = function (e, t) {
    return e === t;
  };
  function i(e) {
    return (
      void 0 === e && (e = n),
      function (t) {
        return function (n, i) {
          if (0 === n) {
            var o,
              r,
              a = !1;
            t(0, function (t, n) {
              0 === t && (r = n),
                1 === t
                  ? a && e(o, n)
                    ? r(1)
                    : ((a = !0), (o = n), i(1, n))
                  : i(t, n);
            });
          }
        };
      }
    );
  }
  var o = (e) => (t) => (n, i) => {
    if (0 !== n) return;
    let o;
    t(0, (t, n) => {
      0 === t
        ? ((o = n), i(t, n))
        : 1 === t
        ? e(n)
          ? i(t, n)
          : o(1)
        : i(t, n);
    });
  };
  var r = (e) => (t) => {
    let n;
    t(0, (t, i) => {
      0 === t && (n = i), 1 === t && e(i), (1 !== t && 0 !== t) || n(1);
    });
  };
  const a = (e, t, n) => (i, o) => {
    if (0 !== i) return;
    let r = !1;
    const a = (e) => {
      o(1, e);
    };
    o(0, (i) => {
      2 === i && ((r = !0), e.removeEventListener(t, a, n));
    }),
      r || e.addEventListener(t, a, n);
  };
  var s = function () {
    for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
      t[n] = arguments[n];
    return (e, n) => {
      if (0 !== e) return;
      const i = t.length,
        o = Array(i);
      let r = 0,
        a = 0;
      const s = (e) => {
        if (0 !== e) for (let t = 0; i > t; t++) o[t] && o[t](e);
      };
      for (let e = 0; i > e; e++)
        t[e](0, (t, c) => {
          0 === t
            ? ((o[e] = c), 1 == ++r && n(0, s))
            : 2 === t
            ? ((o[e] = void 0), ++a === i && n(2))
            : n(t, c);
        });
    };
  };
  function c(t, n) {
    return e(
      (e) => (
        t.on(n, e),
        () => {
          t.off(n, e);
        }
      )
    );
  }
  !(function (e) {
    var t,
      n = e.Symbol;
    "function" == typeof n
      ? n.observable
        ? (t = n.observable)
        : ((t = n("observable")), (n.observable = t))
      : (t = "@@observable");
  })(
    "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof module
      ? module
      : Function("return this")()
  );
  var d = function () {
    for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
      t[n] = arguments[n];
    let i = t[0];
    for (let e = 1, n = t.length; n > e; e++) i = t[e](i);
    return i;
  };
  var l = (e) => (t) => (n, i) => {
    if (0 !== n) return;
    let o;
    t(0, (t, n) => {
      0 === t
        ? ((o = n),
          i(0, (e, t) => {
            0 !== e && o(e, t);
          }),
          i(1, e))
        : i(t, n);
    });
  };
  var u = (e) => (t) => (n, i) => {
    0 === n &&
      t(0, (t, n) => {
        i(t, 1 === t ? e(n) : n);
      });
  };
  function p(e) {
    return (n) => t(u(e)(n));
  }
  var m = function () {};
  function h(e, t) {
    0 === e && t(0, m);
  }
  function f() {
    for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
      t[n] = arguments[n];
    return function (e, n) {
      if (0 === e) {
        var i = !1;
        for (
          n(0, function (e) {
            2 === e && ((i = !0), (t.length = 0));
          });
          0 !== t.length;

        )
          n(1, t.shift());
        i || n(2);
      }
    };
  }
  function g(e) {
    return function (t, n) {
      if (0 === t) {
        var i,
          o,
          r,
          a = 0;
        e(0, function (e, t) {
          if ((0 === e && (r = t), 1 === e)) {
            var s = [o, t];
            (i = s[0]), (o = s[1]), 2 > ++a ? r(1) : n(1, [i, o]);
          } else n(e, t);
        });
      }
    };
  }
  var _ = function () {},
    v = {};
  function w(e) {
    var t,
      n,
      i = [],
      o = !1,
      r = v;
    return function (a, s) {
      if (0 === a) {
        if (r !== v) return s(0, _), o && s(1, n), void s(2, r);
        i.push(s);
        var c = function (e, n) {
          if (2 !== e) r === v && t(e, n);
          else {
            var o = i.indexOf(s);
            -1 !== o && i.splice(o, 1);
          }
        };
        1 !== i.length
          ? (s(0, c), o && r === v && s(1, n))
          : e(0, function (e, a) {
              if (0 === e) return (t = a), void s(0, c);
              1 === e && ((o = !0), (n = a));
              var d = i.slice(0);
              2 === e && ((r = a), (i = null)),
                d.forEach(function (t) {
                  t(e, a);
                });
            });
      }
    };
  }
  var y = (e) => (t) => (n, i) => {
    if (0 !== n) return;
    let o,
      r = 0;
    t(0, (t, n) => {
      0 === t ? ((o = n), i(t, n)) : 1 === t && e > r ? (r++, o(1)) : i(t, n);
    });
  };
  const b = function (e) {
    return (
      void 0 === e && (e = {}),
      (t) => {
        "function" == typeof e && (e = { next: e });
        let n,
          { next: i, error: o, complete: r } = e;
        t(0, (e, t) => {
          0 === e && (n = t),
            1 === e && i && i(t),
            (1 !== e && 0 !== e) || n(1),
            2 === e && !t && r && r(),
            2 === e && t && o && o(t);
        });
        return () => {
          n && n(2);
        };
      }
    );
  };
  var k = (e) => (t) => (n, i) => {
    if (0 !== n) return;
    let o,
      r = 0;
    function a(t, n) {
      e > r && o(t, n);
    }
    t(0, (t, n) => {
      0 === t
        ? ((o = n), i(0, a))
        : 1 === t
        ? e > r && (r++, i(t, n), r === e && (i(2), o(2)))
        : i(t, n);
    });
  };
  const I = {},
    x = (e) => (t) => (n, i) => {
      if (0 !== n) return;
      let o,
        r,
        a = !1,
        s = I;
      t(0, (t, n) => {
        if (0 === t)
          return (
            (o = n),
            e(0, (e, t) =>
              0 === e
                ? ((r = t), void r(1))
                : 1 === e
                ? ((s = void 0), r(2), o(2), void (a && i(2)))
                : void (
                    2 === e && ((r = null), t && ((s = t), o(2), a && i(e, t)))
                  )
            ),
            (a = !0),
            i(0, (e, t) => {
              s === I && (2 === e && r && r(2), o(e, t));
            }),
            void (s !== I && i(2, s))
          );
        2 === t && r(2), i(t, n);
      });
    };
  function C(e) {
    return new Promise(function (t, n) {
      b({
        next: t,
        error: n,
        complete: function () {
          var e = Error("No elements in sequence.");
          (e.code = "NO_ELEMENTS"), n(e);
        },
      })(
        (function (e) {
          return function (t, n) {
            if (0 === t) {
              var i,
                o,
                r = !1,
                a = !1;
              e(0, function (e, t) {
                return 0 === e
                  ? ((i = t),
                    void n(0, function (e, t) {
                      2 === e && (a = !0), i(e, t);
                    }))
                  : 1 === e
                  ? ((r = !0), (o = t), void i(1))
                  : void ((2 === e && !t && r && (n(1, o), a)) || n(e, t));
              });
            }
          };
        })(e)
      );
    });
  }
  var E = (function (e, t, n) {
      return (
        e(
          (n = {
            path: t,
            exports: {},
            require: function (e, t) {
              return (function () {
                throw Error(
                  "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                );
              })();
            },
          }),
          n.exports
        ),
        n.exports
      );
    })(function (e, t) {
      function n(e, t) {
        return e === t;
      }
      function i(e, t, n) {
        if (null === t || null === n || t.length !== n.length) return !1;
        for (var i = t.length, o = 0; i > o; o++) if (!e(t[o], n[o])) return !1;
        return !0;
      }
      function o(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n,
          o = null,
          r = null;
        return function () {
          return (
            i(t, o, arguments) || (r = e.apply(null, arguments)),
            (o = arguments),
            r
          );
        };
      }
      function r(e) {
        var t = Array.isArray(e[0]) ? e[0] : e;
        if (
          !t.every(function (e) {
            return "function" == typeof e;
          })
        ) {
          var n = t
            .map(function (e) {
              return typeof e;
            })
            .join(", ");
          throw Error(
            "Selector creators expect all input-selectors to be functions, instead received the following types: [" +
              n +
              "]"
          );
        }
        return t;
      }
      function a(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
          t > i;
          i++
        )
          n[i - 1] = arguments[i];
        return function () {
          for (var t = arguments.length, i = Array(t), a = 0; t > a; a++)
            i[a] = arguments[a];
          var s = 0,
            c = i.pop(),
            d = r(i),
            l = e.apply(
              void 0,
              [
                function () {
                  return s++, c.apply(null, arguments);
                },
              ].concat(n)
            ),
            u = o(function () {
              for (var e = [], t = d.length, n = 0; t > n; n++)
                e.push(d[n].apply(null, arguments));
              return l.apply(null, e);
            });
          return (
            (u.resultFunc = c),
            (u.recomputations = function () {
              return s;
            }),
            (u.resetRecomputations = function () {
              return (s = 0);
            }),
            u
          );
        };
      }
      (t.__esModule = !0),
        (t.defaultMemoize = o),
        (t.createSelectorCreator = a),
        (t.createStructuredSelector = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
          if ("object" != typeof e)
            throw Error(
              "createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " +
                typeof e
            );
          var n = Object.keys(e);
          return t(
            n.map(function (t) {
              return e[t];
            }),
            function () {
              for (var e = arguments.length, t = Array(e), i = 0; e > i; i++)
                t[i] = arguments[i];
              return t.reduce(function (e, t, i) {
                return (e[n[i]] = t), e;
              }, {});
            }
          );
        });
      var s = (t.createSelector = a(o));
    }),
    L = function (e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    },
    A = (function () {
      function e() {
        L(this, e), (this._cache = {});
      }
      return (
        (e.prototype.set = function (e, t) {
          this._cache[e] = t;
        }),
        (e.prototype.get = function (e) {
          return this._cache[e];
        }),
        (e.prototype.remove = function (e) {
          delete this._cache[e];
        }),
        (e.prototype.clear = function () {
          this._cache = {};
        }),
        e
      );
    })();
  (function () {
    function e() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = t.cacheSize;
      if ((L(this, e), void 0 === n))
        throw Error("Missing the required property `cacheSize`.");
      if (!Number.isInteger(n) || 0 >= n)
        throw Error(
          "The `cacheSize` property must be a positive integer value."
        );
      (this._cache = {}), (this._cacheOrdering = []), (this._cacheSize = n);
    }
    (e.prototype.set = function (e, t) {
      ((this._cache[e] = t),
      this._cacheOrdering.push(e),
      this._cacheOrdering.length > this._cacheSize) &&
        this.remove(this._cacheOrdering[0]);
    }),
      (e.prototype.get = function (e) {
        return this._cache[e];
      }),
      (e.prototype.remove = function (e) {
        var t = this._cacheOrdering.indexOf(e);
        t > -1 && this._cacheOrdering.splice(t, 1), delete this._cache[e];
      }),
      (e.prototype.clear = function () {
        (this._cache = {}), (this._cacheOrdering = []);
      });
  })(),
    (function () {
      function e() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = t.cacheSize;
        if ((L(this, e), void 0 === n))
          throw Error("Missing the required property `cacheSize`.");
        if (!Number.isInteger(n) || 0 >= n)
          throw Error(
            "The `cacheSize` property must be a positive integer value."
          );
        (this._cache = {}), (this._cacheOrdering = []), (this._cacheSize = n);
      }
      (e.prototype.set = function (e, t) {
        ((this._cache[e] = t),
        this._registerCacheHit(e),
        this._cacheOrdering.length > this._cacheSize) &&
          this.remove(this._cacheOrdering[0]);
      }),
        (e.prototype.get = function (e) {
          return this._registerCacheHit(e), this._cache[e];
        }),
        (e.prototype.remove = function (e) {
          this._deleteCacheHit(e), delete this._cache[e];
        }),
        (e.prototype.clear = function () {
          (this._cache = {}), (this._cacheOrdering = []);
        }),
        (e.prototype._registerCacheHit = function (e) {
          this._deleteCacheHit(e), this._cacheOrdering.push(e);
        }),
        (e.prototype._deleteCacheHit = function (e) {
          var t = this._cacheOrdering.indexOf(e);
          t > -1 && this._cacheOrdering.splice(t, 1);
        });
    })();
  function P() {
    for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
      t[n] = arguments[n];
    var i = A;
    return function (e) {
      var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        o = void 0,
        r = void 0;
      "function" == typeof n
        ? (console.warn(
            '[re-reselect] Deprecation warning: "selectorCreator" argument is discouraged and will be removed in the upcoming major release. Please use "options.selectorCreator" instead.'
          ),
          (o = new i()),
          (r = n))
        : ((o = n.cacheObject || new i()),
          (r = n.selectorCreator || E.createSelector));
      var a = function () {
        var n = e.apply(void 0, arguments);
        if ("string" == typeof n || "number" == typeof n) {
          var i = o.get(n);
          return (
            void 0 === i && ((i = r.apply(void 0, t)), o.set(n, i)),
            i.apply(void 0, arguments)
          );
        }
      };
      return (
        (a.getMatchingSelector = function () {
          var t = e.apply(void 0, arguments);
          return o.get(t);
        }),
        (a.removeMatchingSelector = function () {
          var t = e.apply(void 0, arguments);
          o.remove(t);
        }),
        (a.clearCache = function () {
          o.clear();
        }),
        (a.resultFunc = t[t.length - 1]),
        a
      );
    };
  }
  function T(e, t) {
    return e + t;
  }
  const { hasOwnProperty: z } = {};
  function O(e, t) {
    return z.call(t, e);
  }
  function S() {
    return (S =
      Object.assign ||
      function (e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
          t > i;
          i++
        )
          n[i - 1] = arguments[i];
        return (
          n.forEach((t) => {
            for (const n in t) O(n, t) && (e[n] = t[n]);
          }),
          e
        );
      }).apply(void 0, arguments);
  }
  function M(e) {
    return Array.isArray(e);
  }
  function N(e) {
    return "object" == typeof e && null !== e && !M(e);
  }
  function j(e) {
    if ("keys" in Object && "function" == typeof Object.keys)
      return Object.keys(e);
    const t = [];
    for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
    return t;
  }
  function D(e, t) {
    return j(t).reduce((n, i) => ((n[i] = e(t[i])), n), {});
  }
  function q(e) {
    return M(e) ? e.map(q) : N(e) ? D(q, e) : e;
  }
  function W(e) {
    return M(e)
      ? e.filter((e) => null != e && !Number.isNaN(e))
      : Object.keys(e).reduce((t, n) => {
          const i = e[n];
          return null == i || Number.isNaN(i) || (t[n] = i), t;
        }, {});
  }
  function H(e, t) {
    for (let n = 0; t.length > n; n++) {
      const i = t[n];
      if (e(i)) return i;
    }
  }
  function B(e, t) {
    for (let n = t.length - 1; n >= 0; n--) if (e(t[n])) return t[n];
  }
  function F(e) {
    return e;
  }
  function V(e, t) {
    return j(t).forEach((n) => {
      e(t[n], n);
    });
  }
  function R() {
    return Math.random().toString(36).substring(2);
  }
  function G(e) {
    const t = R();
    return O(t, e) ? G(e) : t;
  }
  function U(e, t, n) {
    const i = (function (e, t) {
      const n = "string" == typeof e ? e.split(".") : e;
      let i = 0,
        o = t;
      for (; o && n.length > i; ) o = o[n[i++]];
      return o;
    })(t, n);
    return null != i ? i : e;
  }
  function J(e, t) {
    return -1 !== t.indexOf(e);
  }
  function X(e) {
    return 0 === (M(e) ? e : Object.keys(e)).length;
  }
  function Y(e) {
    return !e;
  }
  function $(e) {
    return !!e;
  }
  function K(e) {
    return e.length > 0 ? e[e.length - 1] : void 0;
  }
  function Q(e, t) {
    return j(t).reduce(
      (n, i) => (
        Object.defineProperty(n, e(i), { value: t[i], enumerable: !0 }), n
      ),
      {}
    );
  }
  function Z(e, t) {
    if (X(t)) return e;
    const n = {};
    return (
      V((i, o) => {
        if (O(o, t))
          if (N(e[o]) && N(t[o])) n[o] = Z(e[o], t[o]);
          else if (M(e[o]) && M(t[o])) {
            const i = Math.max(e[o].length, t[o].length);
            n[o] = Array(i);
            for (let r = 0; i > r; r++)
              r in t[o]
                ? (n[o][r] = t[o][r])
                : r in e[o] && (n[o][r] = e[o][r]);
          } else n[o] = t[o];
        else n[o] = e[o];
      }, e),
      V((e, i) => {
        O(i, n) || (n[i] = t[i]);
      }, t),
      n
    );
  }
  function ee(e) {
    if (0 === e.length) return {};
    const [t, ...n] = e;
    return n.reduce((e, t) => Z(e, t), t);
  }
  function te(e) {
    return (function (e, t) {
      const n = {};
      return function () {
        const i = e.apply(void 0, arguments);
        if (O(i, n)) return n[i];
        const o = t.apply(void 0, arguments);
        return (n[i] = o), o;
      };
    })(F, e);
  }
  function ne() {}
  function ie(e, t) {
    return e.reduce((e, n) => ((e[n] = t[n]), e), {});
  }
  function oe(e, t) {
    return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
  }
  function re(e, t) {
    if (oe(e, t)) return !0;
    if (
      "object" != typeof e ||
      null === e ||
      "object" != typeof t ||
      null === t
    )
      return !1;
    const n = Object.keys(e);
    if (n.length !== Object.keys(t).length) return !1;
    for (let i = 0; n.length > i; i++)
      if (!O(n[i], t) || !oe(e[n[i]], t[n[i]])) return !1;
    return !0;
  }
  function ae(e) {
    return e.reduce(T, 0);
  }
  function se(e) {
    return Array.prototype.slice.call(e);
  }
  function ce(e) {
    return j(e).map((t) => [t, e[t]]);
  }
  const de = (e, t) => t,
    le = (e, t) => ((e) => e.entities.chats.byIds)(e)[t],
    ue = P(
      [(e, t) => le(e, t).events.orderedIds, (e, t) => le(e, t).events.byIds],
      (e, t) => e.map((e) => t[e])
    )(de),
    pe = P([le, ue], (e, t) => ({ ...e, events: t }))(de),
    me = (e) => e.entities.users.byIds,
    he = (e) => me(e)[((e) => e.session.id)(e)],
    fe = (e, t) => me(e)[t],
    ge = (e) => he(e).id,
    _e =
      (P([ue, ge], (e, t) =>
        B((e) => {
          let { delivered: n, author: i } = e;
          return n && i === t;
        }, e)
      )(de),
      P([ue, ge], (e, t) =>
        B((e) => {
          let { seen: n, author: i } = e;
          return n && i === t;
        }, e)
      )(de),
      { boosters: !0, form: !0, system_message: !0 });
  E.createSelector([ue, (e) => he(e).id], (e, t) => {
    return (function (e, t, n) {
      for (let i = t; i >= 0; i--) if (e(n[i])) return i;
      return -1;
    })(
      (e) =>
        (e.author === t &&
          "message" === e.type &&
          !(e.properties && "file" === e.properties.serverType)) ||
        (!0 === e.seen && !_e[e.type] && !!e.serverId),
      (n = e).length - 1,
      n
    );
    var n;
  }),
    P([(e, t) => le(e, t).participants, me], (e, t) => e.map((e) => t[e]))(de);
  function ve(e, t) {
    if (void 0 === t) return e.application;
    return e.application[t];
  }
  var we = (e, t) => {
      V((e, n) => {
        t.style[n] = e;
      }, e);
    },
    ye = (e, t) => {
      V((e, n) => {
        "style" !== n ? t.setAttribute(n, e) : we(e, t);
      }, e);
    };
  const be = () => !!document.documentElement.currentStyle,
    ke = (e, t) => {
      const n = window.getComputedStyle(t),
        i = "border-box" === n.boxSizing,
        o = ie(e, n);
      if (be() && i && O("width", o) && null !== o.width) {
        o.width =
          ae(
            [
              o.width,
              n.paddingLeft,
              n.paddingRight,
              n.borderLeftWidth,
              n.borderRightWidth,
            ].map(parseFloat)
          ) + "px";
      }
      if (be() && i && O("height", o) && null !== o.height) {
        o.height =
          ae(
            [
              o.height,
              n.paddingTop,
              n.paddingBottom,
              n.borderTopWidth,
              n.borderBottomWidth,
            ].map(parseFloat)
          ) + "px";
      }
      return o;
    };
  function Ie() {
    return new Promise((e) => {
      const t = () => {
        document.body ? e(document.body) : setTimeout(t, 100);
      };
      t();
    });
  }
  function xe(e) {
    const { parentNode: t } = e;
    t && t.removeChild(e);
  }
  const Ce = (e, t) => {
      const n = document.createElement(e);
      return ye(t, n), n;
    },
    Ee = (e) =>
      ce(e)
        .map((e) => e.map(encodeURIComponent).join("="))
        .join("&"),
    Le = (e) =>
      (function (e) {
        return e.reduce((e, t) => {
          let [n, i] = t;
          return (e[n] = i), e;
        }, {});
      })(
        e
          .split("&")
          .filter(Boolean)
          .map((e) =>
            e.split("=").map((e) => decodeURIComponent(e.replace("+", "%20")))
          )
          .map((e) => (2 === e.length ? e : [e[0], ""]))
      ),
    Ae = /(?:[^:]+:\/\/)?([^/\s]+)/;
  const Pe = /[^:]+:\/\/[^(/|?)\s]+/,
    Te = (e) => {
      const t = e.match(Pe);
      return t && t[0];
    },
    ze = /.*?\?([^#]+)/,
    Oe = (e) => {
      const t = e.match(ze);
      return t ? "?" + t[1] : "";
    },
    Se = (e) => e.replace(/^\?/, ""),
    Me = (e) => {
      if (null === Te(e)) return Le(Se(e));
      const t = Se(Oe(e));
      return t ? Le(t) : {};
    },
    Ne = /^(?:https?:)?\/\/[^/]+\/([^?#]+)/,
    je = (e) => {
      const t = e.match(Ne);
      return "/" + ((t && t[1]) || "");
    },
    De = (e) => e.replace(/\w/g, "$&[\\r\\n\\t]*"),
    qe =
      (RegExp("^[\0-]*(" + De("javascript") + "|" + De("data") + "):", "i"),
      /^((http(s)?:)?\/\/)/),
    We = (e, t) => {
      if (-1 === e.indexOf("?")) return e;
      const n = Me(e);
      if (X(n)) return e;
      if (Object.keys(n).every((e) => !t.includes(e))) return e;
      t.forEach((e) => delete n[e]);
      const [i] = e.split("?"),
        o = ((e, t) => {
          if (0 === Object.keys(t).length) return e;
          const n = Te(e),
            i = je(e),
            o = Oe(e) ? Me(e) : {},
            r = Ee({ ...o, ...t });
          return e.indexOf("#") > -1
            ? "" + n + i + "?" + r + "#" + e.split("#")[1]
            : "" + n + i + "?" + r;
        })(i, n);
      return e.indexOf("#") > -1 ? o + "#" + e.split("#")[1] : o;
    },
    He = (e) => "https://" + ((e) => e.replace(qe, ""))(e),
    Be = "chat-widget",
    Fe = "chat-widget-minimized",
    Ve = "LiveChat chat widget",
    Re = "OpenWidget widget",
    Ge = { opacity: 0, visibility: "hidden", zIndex: -1 },
    Ue = { opacity: 1, visibility: "visible", zIndex: 2147483639 },
    Je = {
      id: Be + "-container",
      style: {
        ...Ge,
        position: "fixed",
        bottom: 0,
        width: 0,
        height: 0,
        maxWidth: "100%",
        maxHeight: "100%",
        minHeight: 0,
        minWidth: 0,
        backgroundColor: "transparent",
        border: 0,
        overflow: "hidden",
      },
    },
    Xe = {
      id: "livechat-eye-catcher",
      style: {
        position: "fixed",
        visibility: "visible",
        zIndex: 2147483639,
        background: "transparent",
        border: 0,
        padding: "10px 10px 0 0",
        float: "left",
        marginRight: "-10px",
        webkitBackfaceVisibility: "hidden",
      },
    },
    Ye = {
      style: {
        position: "absolute",
        display: "none",
        top: "-5px",
        right: "-5px",
        width: "16px",
        lineHeight: "16px",
        textAlign: "center",
        cursor: "pointer",
        textDecoration: "none",
        color: "#000",
        fontSize: "20px",
        fontFamily: "Arial, sans-serif",
        borderRadius: "50%",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      },
    },
    $e = {
      id: "livechat-eye-catcher-img",
      style: { display: "block", overflow: "hidden", cursor: "pointer" },
    },
    Ke = { alt: "", style: { display: "block", border: 0, float: "right" } },
    Qe = {
      position: "absolute",
      top: "0px",
      left: "0px",
      bottom: "0px",
      right: "0px",
    },
    Ze = {
      id: Be,
      name: Be,
      title: Ve,
      scrolling: "no",
      style: {
        width: "100%",
        height: "100%",
        "min-height": "0px",
        "min-width": "0px",
        margin: "0px",
        padding: "0px",
        "background-image": "none",
        "background-position-x": "0%",
        "background-position-y": "0%",
        "background-size": "initial",
        "background-attachment": "scroll",
        "background-origin": "initial",
        "background-clip": "initial",
        "background-color": "rgba(0, 0, 0, 0)",
        "border-width": "0px",
        float: "none",
        "color-scheme": "normal",
      },
    },
    et = { ...Ze, id: Fe, name: Fe },
    tt = (e) => "lc-aria-announcer-" + e;
  function nt(e) {
    if ("Google Inc." !== navigator.vendor || "Win32" !== navigator.platform)
      return;
    const { frame: t } = e,
      n = (function (e, t) {
        let n;
        return function () {
          clearTimeout(n);
          for (var i = arguments.length, o = Array(i), r = 0; i > r; r++)
            o[r] = arguments[r];
          n = setTimeout.apply(void 0, [t, e].concat(o));
        };
      })(100, () => {
        we(ke(["width"], t), t),
          requestAnimationFrame(() => {
            we({ width: Ze.style.width }, t);
          });
      });
    document.addEventListener("scroll", n);
    const i = () => {
      e.off("unbind", i), document.removeEventListener("scroll", n);
    };
    e.on("unbind", i);
  }
  const it = function (e, t) {
      return (
        void 0 === t && (t = !1),
        t && e.__unsafeProperties.group.hasCustomMobileSettings
      );
    },
    ot = (e, t) => {
      const n = e.__unsafeProperties.group;
      return it(e, t) ? n.screenPositionOnMobile : n.screenPosition;
    },
    rt = (e, t) => {
      const n = e.__unsafeProperties.group;
      return it(e, t)
        ? { x: n.offsetXOnMobile, y: n.offsetYOnMobile }
        : { x: n.offsetX, y: n.offsetY };
    };
  const at = "new_message",
    st = (e) => "function" == typeof e.start && "function" == typeof e.stop,
    ct = (e) => {
      st(e) ? e.start(0) : e.noteOn(0);
    },
    dt = () => {
      const e = new (window.AudioContext || window.webkitAudioContext)();
      let t = !0,
        n = [];
      const i = (t) =>
          new Promise((n, i) => {
            e.decodeAudioData(t, n, i);
          }),
        o = (t) => ({
          play: () => {
            const n = e.createBufferSource();
            n.connect(e.destination), (n.buffer = t);
            return {
              playback: new Promise((t, i) => {
                if (((n.onended = () => t()), ct(n), "running" !== e.state)) {
                  const t = Error(
                    "Playback failed, AudioContext is in incorrect state '" +
                      e.state +
                      "'"
                  );
                  (t.name = "PlaybackError"), i(t);
                }
              }),
              stop() {
                ((e) => {
                  st(e) ? e.stop(0) : e.noteOff(0);
                })(n);
              },
            };
          },
        });
      return {
        preload: (e) =>
          ((e) =>
            new Promise((t, n) => {
              const i = new XMLHttpRequest();
              (i.onload = () => {
                t(i.response);
              }),
                (i.onerror = n),
                i.open("GET", e),
                (i.responseType = "arraybuffer"),
                i.send();
            }))(e)
            .then(i)
            .then(o),
        playSound: (e) => {
          const i = e.play();
          return t && n.push(i), i.playback;
        },
        unlock: () =>
          new Promise((i) => {
            const o = () => {
              document.removeEventListener("click", o, !0),
                t &&
                  (n.forEach((e) => {
                    e.stop();
                  }),
                  (n = []),
                  (t = !1)),
                e.resume(),
                (() => {
                  const t = e.createBuffer(1, 1, 22050),
                    n = e.createBufferSource();
                  (n.buffer = t), n.connect(e.destination), ct(n);
                })(),
                i();
            };
            document.addEventListener("click", o, !0);
          }),
      };
    };
  const lt = /\.(\w+)$/i,
    ut = new Audio(),
    pt = { mp3: "audio/mpeg", ogg: "audio/ogg" },
    mt = (e) => {
      const t = ((e) => {
        const t = e.match(lt);
        return t ? t[1].toLowerCase() : "";
      })(e);
      return t in pt && "" !== ut.canPlayType(pt[t]);
    },
    ht = (e) =>
      new Promise((t, n) => {
        const i = new Audio(e);
        (i.onloadeddata = () => {
          t(i);
        }),
          (i.onerror = n);
      }),
    ft = (e) => {
      const t = e.play();
      return (n = t) && "function" == typeof n.then ? t : Promise.resolve();
      var n;
    };
  const gt = () =>
      "function" == typeof window.webkitAudioContext ||
      "function" == typeof window.AudioContext
        ? (() => {
            const e = dt(),
              t = te((t) => {
                const n = e.preload(t);
                return n.catch(ne), n;
              });
            return {
              play: (n) => {
                const i = t(n).then(e.playSound);
                return i.catch(ne), i;
              },
              preload: t,
              unlock: () => e.unlock(),
            };
          })()
        : (() => {
            const e = te(ht);
            return {
              play: (t) => e(t).then(ft),
              preload: e,
              unlock: () => Promise.resolve(),
            };
          })(),
    _t = (e) =>
      Object.keys(e).reduce((t, n) => {
        const i = H((e) => mt(e), M((o = e[n])) ? o : [o]);
        var o;
        return (t[n] = i), t;
      }, {});
  const vt = () => {
      const e = ((e) => {
        const t = gt(),
          n = _t(e);
        return {
          play: (e) => {
            t.play(n[e]).then(ne, ne);
          },
          preload: (e) => {
            t.preload(n[e]).then(ne, ne);
          },
          unlock: () => t.unlock(),
        };
      })({
        [at]: [
          "https://cdn.openwidget.com/widget/static/media/new_message.CTorF0S8.ogg",
          "https://cdn.openwidget.com/widget/static/media/new_message.C32z5SiC.mp3",
        ],
      });
      return e.unlock().then(() =>
        (function (e, t) {
          let n = 0;
          return function () {
            const i = Date.now();
            e > i - n || ((n = Date.now()), t.apply(void 0, arguments));
          };
        })(2e3, (t) => {
          e.play(t);
        })
      );
    },
    wt = (e) => !!e && /native code/.test(e + ""),
    yt = () =>
      J(navigator.platform, [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ]) && J("Version/15", navigator.userAgent),
    bt = () =>
      /mobile/gi.test(navigator.userAgent) &&
      !("MacIntel" === navigator.platform && J("iPad", navigator.userAgent)),
    kt = () => J("Chrome", navigator.userAgent),
    It = () => {
      const e = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
      return e ? parseInt(e[2], 10) : 0;
    },
    xt = () => /Firefox/.test(navigator.userAgent),
    Ct = (e, t) => ve(e, "visibility").state === t;
  var Et = "__test_storage_support__",
    Lt = "@@test",
    At = (function () {
      var e = Object.create(null);
      return {
        getItem: function (t) {
          var n = e[t];
          return "string" == typeof n ? n : null;
        },
        setItem: function (t, n) {
          e[t] = n;
        },
        removeItem: function (t) {
          delete e[t];
        },
        clear: function () {
          e = Object.create(null);
        },
      };
    })();
  function Pt(e) {
    try {
      return window.localStorage;
    } catch (t) {
      return "SecurityError" === t.name && e
        ? e
        : (function (e) {
            void 0 === e && (e = "local");
            try {
              var t =
                "session" === e ? window.sessionStorage : window.localStorage;
              return (
                t.setItem(Et, Lt),
                t.getItem(Et) === Lt && (t.removeItem(Et), !0)
              );
            } catch (e) {
              return !1;
            }
          })()
        ? window.localStorage
        : At;
    }
  }
  !(function (e) {
    const t = Pt(e);
  })();
  const Tt = () => {
    const { all: e, ...t } = {
      all: (n = n || new Map()),
      on: function (e, t) {
        var i = n.get(e);
        i ? i.push(t) : n.set(e, [t]);
      },
      off: function (e, t) {
        var i = n.get(e);
        i && (t ? i.splice(i.indexOf(t) >>> 0, 1) : n.set(e, []));
      },
      emit: function (e, t) {
        var i = n.get(e);
        i &&
          i.slice().map(function (e) {
            e(t);
          }),
          (i = n.get("*")) &&
            i.slice().map(function (n) {
              n(e, t);
            });
      },
    };
    var n;
    return {
      ...t,
      off: (n, i) => {
        n ? t.off(n, i) : e.clear();
      },
      once: (e, n) => {
        t.on(e, function i(o, r) {
          t.off(e, i), n(o, r);
        });
      },
    };
  };
  function zt(e, t) {
    let {
      retriesCount: n = 1 / 0,
      minTime: i = 100,
      maxTime: o = 1e4,
    } = void 0 === t ? {} : t;
    const r = ((e) => {
      let { min: t = 1e3, max: n = 5e3, jitter: i = 0.5 } = e,
        o = 0;
      return {
        duration: () => {
          let e = t * Math.pow(2, o++);
          if (i) {
            const t = Math.random(),
              n = Math.floor(t * i * e);
            e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n;
          }
          return 0 | Math.min(e, n);
        },
        reset: () => {
          o = 0;
        },
      };
    })({ min: i, max: o, jitter: 0 });
    return new Promise((t, i) => {
      let o = 0;
      const a = () =>
        e().then(t, () => {
          n === 1 / 0 || o++ < n
            ? setTimeout(a, r.duration())
            : i(Error("Maximum retries count (" + n + ") reached"));
        });
      a();
    });
  }
  Object.freeze({ success: !0 });
  const Ot = (e) =>
      e.map((e) => {
        switch (e.type) {
          case "group_chooser":
            return {
              ...e,
              options: e.options.map((e) => {
                let { group_id: t, ...n } = e;
                return { ...n, groupId: t };
              }),
            };
          case "rating": {
            const { comment_label: t, ...n } = e;
            return { ...n, commentLabel: t };
          }
          default:
            return e;
        }
      }),
    St = (e) => {
      const t = e.map((e, t) => ({ ...e, id: t + "" }));
      return Ot(t);
    },
    Mt = (e) => ({
      id: e.id,
      fields: !("id" in e.fields[0]) ? St(e.fields) : Ot(e.fields),
    }),
    Nt = {};
  function jt(e, t) {
    let {
      query: n = {},
      jsonpParam: i = "jsonp",
      callbackName: o,
    } = void 0 === t ? {} : t;
    return new Promise((t, r) => {
      Ie().then((a) => {
        const s = document.createElement("script"),
          c = o || G(Nt);
        Nt[c] = !0;
        const d = "__" + c;
        (window[d] = (e) => {
          delete Nt[c], delete window[d], xe(s), t(e);
        }),
          (s.src = e + "?" + Ee({ ...n, [i]: d })),
          s.addEventListener("error", () => {
            setTimeout(() => r(Error("JSONP request failed.")), 100);
          }),
          a.appendChild(s);
      });
    });
  }
  const Dt = "not_ready",
    qt = "ready",
    Wt = "bootstrapped",
    Ht = /\.([a-z]{1,})$/i,
    Bt = (e) => {
      let { __priv: t } = e;
      const n = {
        enabled: !0,
        x: parseInt(t.group["embedded_chat.eye_grabber.x"]) + 15,
        y: parseInt(t.group["embedded_chat.eye_grabber.y"]),
        src: He(t.group["embedded_chat.eye_grabber.path"]),
      };
      if (-1 !== n.src.indexOf("/default/eyeCatchers/")) {
        const e = n.src.match(Ht)[1];
        n.srcset = {
          "1x": n.src,
          "2x": n.src.replace(RegExp("\\." + e, "i"), "-2x." + e),
        };
      }
      return n;
    },
    Ft = (e, t) => {
      const n = "get_dynamic_configuration" === e ? "v3.6" : "v3.4";
      return (
        ((e) => {
          let { licenseId: t, region: n } = e;
          return (
            "https://api" +
            ((e) => (e && "dal" !== e ? "-" + e : ""))(n) +
            ((e) => (1520 === e ? ".staging" : ""))(t) +
            ".livechatinc.com"
          );
        })(t) +
        "/" +
        n +
        "/customer/action/" +
        e
      );
    },
    Vt = function (e, t) {
      let { validateDefaultWidget: n = !0 } = void 0 === t ? {} : t;
      return jt(Ft("get_dynamic_configuration", e), {
        query: {
          license_id: e.licenseId,
          client_id:
            null != "c5e4f61e1a6c3b1521b541bc5c5a2ac5"
              ? "c5e4f61e1a6c3b1521b541bc5c5a2ac5"
              : "",
          url: We(e.url, ["cw_configurator"]),
          ...("number" == typeof e.groupId && { group_id: e.groupId }),
          ...(e.channelType && { channel_type: e.channelType }),
          ...(e.skipCodeInstallationTracking && { test: 1 }),
          ...(e.productName && { origin: e.productName }),
          ...(e.integrationName && { implementation_type: e.integrationName }),
        },
      }).then((t) => {
        if (t.error)
          switch (t.error.type) {
            case "misdirected_request":
              return Vt({ ...e, region: t.error.data.region });
            case "license_not_found": {
              if ("direct_link" === e.channelType) {
                const t = Ee({
                  utm_source: "expired_chat_link",
                  utm_medium: "referral",
                  utm_campaign: "lc_" + e.licenseId,
                });
                window.location.replace(
                  "https://www.livechat.com/expired-chat-link/?" + t
                );
              }
              const t = Error("License not found");
              throw ((t.code = "LICENSE_NOT_FOUND"), t);
            }
            default: {
              const e = Error(t.error.message);
              throw ((e.code = t.error.type.toUpperCase()), e);
            }
          }
        if (
          (1520 === e.licenseId && (t.default_widget = "livechat"),
          n && "livechat" !== t.default_widget)
        ) {
          const e = Error(
            "The 'default_widget' is not 'livechat', but instead: '" +
              t.default_widget +
              "'"
          );
          throw (
            ((e.code = "DEFAULT_WIDGET_NOT_LIVECHAT"),
            (e.organizationId = t.organization_id),
            (e.defaultWidget = t.default_widget),
            e)
          );
        }
        if (!t.livechat_active) {
          if ("direct_link" === e.channelType) {
            const t = Ee({
              utm_source: "expired_chat_link",
              utm_medium: "referral",
              utm_campaign: "lc_" + e.licenseId,
            });
            window.location.replace(
              "https://www.livechat.com/expired-chat-link/?" + t
            );
          }
          const t = Error("License expired");
          throw ((t.code = "LICENSE_EXPIRED"), t);
        }
        if (!t.livechat.domain_allowed) {
          const e = Error("Current domain is not added to the allowlist.");
          throw ((e.code = "DOMAIN_NOT_ALLOWED"), e);
        }
        return {
          organizationId: (i = t).organization_id,
          groupId: i.livechat.group_id,
          clientLimitExceeded: i.livechat.client_limit_exceeded,
          configVersion: i.livechat.config_version,
          localizationVersion: i.livechat.localization_version,
          onlineGroupIds: i.livechat.online_group_ids || [],
          region: e.region || null,
          language: i.livechat.language,
        };
        var i;
      });
    },
    Rt = (e) => {
      var t, n;
      const i = "feade1d6c3f17748ae4c8d917a1e1068",
        o = !!(null == (t = e.properties.group[i])
          ? void 0
          : t.forwardTicketFormToHelpdesk),
        r = null == (n = e.properties.license[i]) ? void 0 : n.hdLicenseID;
      return (
        "number" == typeof r &&
        r > -1 &&
        (o || "1" === e.__priv.license["helpdesk.inbound_forwarding"])
      );
    },
    Gt = (e, t) => (t.includes(e) ? e : t[0]),
    Ut = (e) => {
      const {
          buttons: t,
          allowed_domains: n,
          prechat_form: i,
          ticket_form: o,
          __priv: r,
          properties: a,
          ...s
        } = e,
        c = "0" === r.group.tickets_enabled,
        d = !!!r.disable_native_tickets && !!o,
        l = Rt(e),
        u = c || l || d;
      return {
        ...s,
        ...(i && { prechatForm: Mt(i) }),
        ...(u && o && { ticketForm: Mt(o) }),
        properties: a,
        buttons: t.map((e) =>
          "image" === e.type
            ? {
                id: e.id,
                type: e.type,
                onlineValue: He(e.online_value),
                offlineValue: He(e.offline_value),
              }
            : {
                id: e.id,
                type: e.type,
                onlineValue: e.online_value,
                offlineValue: e.offline_value,
              }
        ),
        ...(n && { allowedDomains: n }),
        __unsafeProperties: {
          ...(r.s && { s: !0 }),
          group: {
            chatBoosters: r.group.chat_boosters,
            disabledMinimized: "1" === r.group["chat_window.disable_minimized"],
            disabledMinimizedOnMobile:
              "1" === r.group["chat_window.mobile_disable_minimized"],
            disabledOnMobile: "1" === r.group["chat_window.hide_on_mobile"],
            eyeCatcher:
              "1" === r.group["embedded_chat.display_eye_catcher"]
                ? Bt(e)
                : { enabled: !1 },
            hasAgentAvatarsEnabled:
              "1" === r.group["chat_window.display_avatar"],
            hasCustomMobileSettings:
              "1" === r.group["chat_window.custom_mobile_settings"],
            hasHiddenTrademark: "1" === r.group["chat_window.hide_trademark"],
            hasSoundsEnabled: "0" === r.group["chat_window.disable_sounds"],
            initiallyHidden:
              "1" === r.group["chat_window.hide_on_init"] ||
              "1" === r.group["chat_window.disable_minimized"],
            initiallyHiddenOnMobile:
              "1" === r.group["chat_window.mobile_hide_on_init"] ||
              "1" === r.group["chat_window.mobile_disable_minimized"],
            hideOnInit: "1" === r.group["chat_window.hide_on_init"],
            language: r.group.language,
            linksUnfurlingEnabled: "1" === r.group.links_unfurling,
            logo:
              "1" === r.group["chat_window.display_logo"]
                ? { enabled: !0, src: r.group["chat_window.logo_path"] }
                : { enabled: !1 },
            minimizedType: Gt(r.group["chat_window.theme.minimized"], [
              "circle",
              "bar",
            ]),
            minimizedTypeOnMobile:
              r.group["chat_window.mobile_minimized_theme"],
            offlineMessagesEnabled: c,
            offsetX: parseInt(r.group["chat_window.offset_x"]),
            offsetXOnMobile: parseInt(r.group["chat_window.mobile_offset_x"]),
            offsetY: parseInt(r.group["chat_window.offset_y"]),
            offsetYOnMobile: parseInt(r.group["chat_window.mobile_offset_y"]),
            prechatFormAfterGreetingEnabled:
              "1" === r.group.pre_chat_survey_after_greeting,
            ratingEnabled: "1" === r.group["rate_me.enabled"],
            screenPosition: Gt(r.group["chat_window.screen_position"], [
              "right",
              "left",
            ]),
            screenPositionOnMobile: Gt(
              r.group["chat_window.mobile_screen_position"],
              ["right", "left"]
            ),
            transcriptButtonEnabled:
              "1" === r.group["chat_window.display_transcript_button"],
            theme: {
              name: Gt(r.group["chat_window.new_theme.name"], [
                "smooth",
                "modern",
              ]),
              variant: Gt(r.group["chat_window.new_theme.variant"], [
                "light",
                "dark",
              ]),
              customJson: r.group["chat_window.new_theme.custom_json"],
              agentbarBackgroundColor:
                r.group["chat_window.new_theme.agentbar_background_color"],
              agentbarText: r.group["chat_window.new_theme.agentbar_text"],
              agentMessageColorBackground:
                r.group["chat_window.new_theme.agent_message_color_background"],
              agentMessageColorText:
                r.group["chat_window.new_theme.agent_message_color_text"],
              backgroundColor:
                r.group["chat_window.new_theme.background_color"],
              ctaColor: r.group["chat_window.new_theme.cta_color"],
              minimizedColorBackground:
                r.group["chat_window.new_theme.minimized_color_background"],
              minimizedColorIcon:
                r.group["chat_window.new_theme.minimized_color_icon"],
              minimizedColorText:
                r.group["chat_window.new_theme.minimized_color_text"],
              systemMessageColor:
                r.group["chat_window.new_theme.system_message_color"],
              titlebarBackgroundColor:
                r.group["chat_window.new_theme.titlebar_background_color"],
              titlebarText: r.group["chat_window.new_theme.titlebar_text"],
              visitorMessageColorBackground:
                r.group[
                  "chat_window.new_theme.visitor_message_color_background"
                ],
              visitorMessageColorText:
                r.group["chat_window.new_theme.visitor_message_color_text"],
            },
          },
          license: {
            creditCardMaskingEnabled: "1" === r.license.mask_credit_cards,
            nonProfit: "1" === r.license.non_profit,
            licenseinboundForwardingToHelpdeskEnabled:
              "1" === r.license["helpdesk.inbound_forwarding"],
          },
          helpdeskIntegrationEnabled: l,
          ticketFormMode:
            ((p = e),
            Rt(p)
              ? "helpdesk"
              : "0" === p.__priv.group.tickets_enabled
              ? "offline_message"
              : "livechat"),
        },
      };
      var p;
    },
    Jt = (e) => {
      const t = Ft("get_localization", e);
      return ((n =
        t +
        "?" +
        Ee({
          organization_id: e.organizationId,
          version: e.version,
          language: e.language,
          ...("number" == typeof e.groupId && { group_id: e.groupId }),
        })),
      (i = i || {}),
      new Promise(function (e, t) {
        var o = new XMLHttpRequest(),
          r = [],
          a = [],
          s = {},
          c = function () {
            return {
              ok: 2 == ((o.status / 100) | 0),
              statusText: o.statusText,
              status: o.status,
              url: o.responseURL,
              text: function () {
                return Promise.resolve(o.responseText);
              },
              json: function () {
                return Promise.resolve(o.responseText).then(JSON.parse);
              },
              blob: function () {
                return Promise.resolve(new Blob([o.response]));
              },
              clone: c,
              headers: {
                keys: function () {
                  return r;
                },
                entries: function () {
                  return a;
                },
                get: function (e) {
                  return s[e.toLowerCase()];
                },
                has: function (e) {
                  return e.toLowerCase() in s;
                },
              },
            };
          };
        for (var d in (o.open(i.method || "get", n, !0),
        (o.onload = function () {
          o
            .getAllResponseHeaders()
            .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, t, n) {
              r.push((t = t.toLowerCase())),
                a.push([t, n]),
                (s[t] = s[t] ? s[t] + "," + n : n);
            }),
            e(c());
        }),
        (o.onerror = t),
        (o.withCredentials = "include" == i.credentials),
        i.headers))
          o.setRequestHeader(d, i.headers[d]);
        o.send(i.body || null);
      }))
        .then((e) => e.json())
        .then((e) => Q((e) => e.toLowerCase(), e));
      var n, i;
    },
    Xt = (e, t, n, i, o) => {
      const r = "https://api.openwidget.com/v1.0/configuration/" + e;
      return zt(
        () =>
          jt(r, {
            callbackName: "ow_config",
            query: {
              ...(t && { integration_name: t }),
              ...(n && { tid: n }),
              ...(i && { test: !0 }),
              ...(o && { url: o }),
            },
          }).then((t) => {
            let { staticConfig: i, localization: o, ...r } = t;
            return {
              ...r,
              ...Ut(i),
              localization: Q((e) => e.toLowerCase(), o),
              organizationId: e,
              templateId: null != n ? n : e,
            };
          }),
        { minTime: 500, maxTime: 5e3, retriesCount: 20 }
      );
    },
    Yt = (e) => {
      const t = document.createElement("textarea");
      (t.value = e),
        (t.style.position = "fixed"),
        (t.style.top = "0"),
        (t.style.left = "0"),
        (t.style.opacity = "0"),
        document.body.appendChild(t),
        t.select(),
        document.execCommand("copy"),
        document.body.removeChild(t);
    },
    $t = "data-lc-focus",
    Kt = "data-lc-event",
    Qt = "data-lc-prop",
    Zt = "data-lc-action",
    en = "data-lc-action-value",
    tn = "data-lc-action-success";
  let nn = ne;
  const on = (e) => {
      let {
          allowAutoplay: t,
          allowVideoConferencing: n,
          allowClipboardWrite: i,
          allowDisplayCapture: o,
        } = e,
        r = ["clipboard-read; clipboard-write;"];
      if (
        (t && !xt() && r.push("autoplay;"),
        o && r.push("display-capture *;"),
        n)
      ) {
        const e = {
          "display-capture *;": !kt() || It() >= 94,
          "picture-in-picture *;": "PictureInPictureEvent" in window,
          "fullscreen *;":
            "function" == typeof Element.prototype.requestFullscreen,
        };
        r = [].concat(
          r,
          ["microphone *;", "camera *;"],
          Object.keys(
            ((a = Boolean),
            j((s = e)).reduce((e, t) => (a(s[t]) && (e[t] = s[t]), e), {}))
          )
        );
      }
      var a, s;
      return i && !xt() && r.push("clipboard-write *;"), r.join(" ");
    },
    rn = (e) => e.replace(/\?+$/, "");
  function an(e, n) {
    return t(
      ((o = () =>
        d(
          c(e, "state_diff"),
          u(() => e.state),
          l(e.state),
          u(n),
          i(re),
          x(c(e, "unbind"))
        )),
      (e, t) => {
        if (0 === e) {
          let e = !1;
          t(0, (t) => {
            2 === t && (e = !0);
          }),
            t(1, o()),
            e || t(2);
        }
      })
    );
    var o;
  }
  const sn = (e, t) => d(an(e, t), y(1)),
    cn = ["maximize", "minimize"],
    dn = { maximize: ["feature", "messageDraft"], minimize: [] },
    ln = (e, t) => {
      const n = e.target;
      if (!(n instanceof Element)) return;
      const i = n.closest("[data-openwidget-action]");
      if (!i) return;
      const o = i.getAttribute("data-openwidget-action");
      if (!o)
        return void console.error(
          "OpenWidget: Action attribute value not found."
        );
      if (!((e) => J(e, cn))(o))
        return void console.error(
          'OpenWidget: Action "' +
            o +
            '" is not allowed. Allowed actions: ' +
            cn.join(", ")
        );
      const r = ((e, t) => {
        const n = {},
          i = dn[t];
        return (
          i &&
            i.forEach((t) => {
              const i = e.getAttribute("data-openwidget-" + t);
              i && (n[t] = i);
            }),
          n
        );
      })(i, o);
      t[o](r);
    };
  let un = null;
  const pn = () => {
      if (un) throw Error("Title notification service already initialized");
      un = (() => {
        try {
          let e = document.title,
            t = null,
            n = void 0;
          const i = document.querySelector("title");
          return (
            i &&
              new MutationObserver((n) => {
                const i = n[0].target.textContent;
                i && ![e, t].includes(i) && (e = i);
              }).observe(i, { subtree: !0, characterData: !0, childList: !0 }),
            {
              setTitleNotification: (i) => {
                i !== t &&
                  ((t = i),
                  (e = document.title),
                  (document.title = t),
                  clearInterval(n),
                  (n = window.setInterval(() => {
                    document.title = document.title === e && t ? t : e;
                  }, 2e3)));
              },
              clearTitleNotification: () => {
                (document.title = e), clearInterval(n), (t = null);
              },
              getOriginalPageTitle: () => e,
            }
          );
        } catch (e) {
          return (
            console.error("Error while creating title notification service", e),
            null
          );
        }
      })();
    },
    mn = () => {
      if (!un) throw Error("Title notification service not initialized");
      return un;
    },
    hn = () => ({
      title: un ? un.getOriginalPageTitle() : document.title,
      url: rn(document.location + ""),
      referrer: document.referrer,
    }),
    fn = (t) => {
      d(
        (function (t, n) {
          return e((e) => {
            const i = new MutationObserver(e);
            return (
              i.observe(t, n),
              () => {
                i.disconnect();
              }
            );
          });
        })(document.body, { childList: !0, subtree: !0 }),
        u(hn),
        i((e, t) => e.url === t.url),
        x(c(t, "unbind")),
        r((e) => {
          t.call("storeMethod", ["setApplicationState", { page: e }]);
        })
      );
    };
  var gn = "application/x-postmate-v1+json",
    _n = 0,
    vn = {
      handshake: 1,
      "handshake-reply": 1,
      call: 1,
      emit: 1,
      reply: 1,
      request: 1,
    },
    wn = function (e, t) {
      return (
        ("string" != typeof t || e.origin === t) &&
        !!e.data &&
        "object" == typeof e.data &&
        "postmate" in e.data &&
        e.data.type === gn &&
        !!vn[e.data.postmate]
      );
    },
    yn = (function () {
      function e(e) {
        var t = this;
        (this.parent = e.parent),
          (this.frame = e.frame),
          (this.child = e.child),
          (this.childOrigin = e.childOrigin),
          (this.events = {}),
          (this.listener = function (e) {
            if (!wn(e, t.childOrigin)) return !1;
            var n = ((e || {}).data || {}).value || {},
              i = n.name;
            "emit" === e.data.postmate &&
              i in t.events &&
              t.events[i].call(t, n.data);
          }),
          this.parent.addEventListener("message", this.listener, !1);
      }
      var t = e.prototype;
      return (
        (t.get = function (e) {
          var t = this;
          return new kn.Promise(function (n) {
            var i = ++_n;
            t.parent.addEventListener(
              "message",
              function e(o) {
                o.data.uid === i &&
                  "reply" === o.data.postmate &&
                  (t.parent.removeEventListener("message", e, !1),
                  n(o.data.value));
              },
              !1
            ),
              t.child.postMessage(
                { postmate: "request", type: gn, property: e, uid: i },
                t.childOrigin
              );
          });
        }),
        (t.call = function (e, t) {
          this.child.postMessage(
            { postmate: "call", type: gn, property: e, data: t },
            this.childOrigin
          );
        }),
        (t.on = function (e, t) {
          this.events[e] = t;
        }),
        (t.destroy = function () {
          window.removeEventListener("message", this.listener, !1),
            this.frame.parentNode.removeChild(this.frame);
        }),
        e
      );
    })(),
    bn = (function () {
      function e(e) {
        var t = this;
        (this.model = e.model),
          (this.parent = e.parent),
          (this.parentOrigin = e.parentOrigin),
          (this.child = e.child),
          this.child.addEventListener("message", function (e) {
            if (wn(e, t.parentOrigin)) {
              var n = e.data,
                i = n.property,
                o = n.uid,
                r = n.data;
              "call" !== e.data.postmate
                ? (function (e, t) {
                    var n = "function" == typeof e[t] ? e[t]() : e[t];
                    return kn.Promise.resolve(n);
                  })(t.model, i).then(function (t) {
                    return e.source.postMessage(
                      {
                        property: i,
                        postmate: "reply",
                        type: gn,
                        uid: o,
                        value: t,
                      },
                      e.origin
                    );
                  })
                : i in t.model &&
                  "function" == typeof t.model[i] &&
                  t.model[i].call(t, r);
            }
          });
      }
      return (
        (e.prototype.emit = function (e, t) {
          this.parent.postMessage(
            { postmate: "emit", type: gn, value: { name: e, data: t } },
            this.parentOrigin
          );
        }),
        e
      );
    })(),
    kn = (function () {
      function e(e) {
        var t = e.container,
          n = void 0 === t ? (void 0 !== n ? n : document.body) : t,
          i = e.model,
          o = e.url,
          r = e.iframeAllowedProperties;
        return (
          (this.parent = window),
          (this.frame = document.createElement("iframe")),
          r && (this.frame.allow = r),
          n.appendChild(this.frame),
          (this.child =
            this.frame.contentWindow ||
            this.frame.contentDocument.parentWindow),
          (this.model = i || {}),
          this.sendHandshake(o)
        );
      }
      return (
        (e.prototype.sendHandshake = function (t) {
          var n,
            i = this,
            o = (function (e) {
              var t = document.createElement("a");
              t.href = e;
              var n =
                  t.protocol.length > 4 ? t.protocol : window.location.protocol,
                i = t.host.length
                  ? "80" === t.port || "443" === t.port
                    ? t.hostname
                    : t.host
                  : window.location.host;
              return t.origin || n + "//" + i;
            })(t),
            r = 0;
          return new e.Promise(function (e, a) {
            i.parent.addEventListener(
              "message",
              function t(r) {
                return (
                  !!wn(r, o) &&
                  ("handshake-reply" === r.data.postmate
                    ? (clearInterval(n),
                      i.parent.removeEventListener("message", t, !1),
                      (i.childOrigin = r.origin),
                      e(new yn(i)))
                    : a("Failed handshake"))
                );
              },
              !1
            );
            var s = function () {
                r++,
                  i.child.postMessage(
                    { postmate: "handshake", type: gn, model: i.model },
                    o
                  ),
                  5 === r && clearInterval(n);
              },
              c = function () {
                s(), (n = setInterval(s, 500));
              };
            i.frame.attachEvent
              ? i.frame.attachEvent("onload", c)
              : i.frame.addEventListener("load", c),
              (i.frame.src = t);
          });
        }),
        e
      );
    })();
  (kn.debug = !1),
    (kn.Promise = (function () {
      try {
        return window ? window.Promise : Promise;
      } catch (e) {
        return null;
      }
    })()),
    (kn.Model = (function () {
      function e(e) {
        return (
          (this.child = window),
          (this.model = e),
          (this.parent = this.child.parent),
          this.sendHandshakeReply()
        );
      }
      return (
        (e.prototype.sendHandshakeReply = function () {
          var e = this;
          return new kn.Promise(function (t, n) {
            e.child.addEventListener(
              "message",
              function i(o) {
                if (o.data.postmate) {
                  if ("handshake" === o.data.postmate) {
                    e.child.removeEventListener("message", i, !1),
                      o.source.postMessage(
                        { postmate: "handshake-reply", type: gn },
                        o.origin
                      ),
                      (e.parentOrigin = o.origin);
                    var r = o.data.model;
                    return (
                      r &&
                        Object.keys(r).forEach(function (t) {
                          e.model[t] = r[t];
                        }),
                      t(new bn(e))
                    );
                  }
                  return n("Handshake Reply Failed");
                }
              },
              !1
            );
          });
        }),
        e
      );
    })()),
    (kn.Promise = Promise);
  let In = function (e) {
    let { methods: t, ...n } = e;
    return new kn(n).then((e) => {
      const n = e.on,
        i = e.call,
        o = function () {
          for (var t = arguments.length, n = Array(t), o = 0; t > o; o++)
            n[o] = arguments[o];
          return i.apply(e, n);
        },
        r = Tt(),
        a = {},
        s = {};
      return (
        (t.resolveRemoteCall = (e) => {
          let { id: t, value: n } = e;
          const i = s[t];
          delete s[t], i(n);
        }),
        (e.on = (t, i) => {
          r.on(t, i),
            a[t] ||
              ((a[t] = !0),
              (function () {
                for (var t = arguments.length, i = Array(t), o = 0; t > o; o++)
                  i[o] = arguments[o];
                n.apply(e, i);
              })(t, (e) => {
                r.emit(t, e);
              }));
        }),
        (e.off = r.off),
        e.on("remote-call", (n) => {
          let { id: i, method: r, args: a } = n;
          const s = "function" == typeof t[r] ? t[r].apply(e, a) : void 0;
          s && "function" == typeof s.then
            ? s.then((e) => {
                o("resolveRemoteCall", { id: i, value: e });
              })
            : o("resolveRemoteCall", { id: i, value: s });
        }),
        (e.emit = (e, t) => {
          o("emitEvent", { event: e, data: t });
        }),
        (e._emit = r.emit),
        (e.call = function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
            t > i;
            i++
          )
            n[i - 1] = arguments[i];
          return new Promise((t) => {
            const i = G(s);
            (s[i] = t), o("remoteCall", { id: i, method: e, args: n });
          });
        }),
        S(e, t)
      );
    });
  };
  const xn = window.Wix;
  var Cn = () =>
    new Promise((e) => {
      xn.getSiteInfo((t) => {
        let n = t.url;
        const i = t.referrer || t.referer || "";
        t.baseUrl && -1 === n.indexOf(t.baseUrl) && (n = t.baseUrl);
        e({ title: t.pageTitle, referrer: i, url: n });
      });
    });
  const En = Promise.resolve(),
    Ln = (e) => {
      En.then(e);
    },
    An = (e) =>
      Ln(() => {
        throw e;
      });
  function Pn(e) {
    return d(
      an(e, (e) => ve(e, "availability")),
      o($)
    );
  }
  const Tn = "liveChatChatId";
  function zn(e) {
    return d(
      an(e, (e) => pe(e, Tn).active),
      y(1),
      p((t) =>
        t
          ? d(
              an(e, (e) => pe(e, Tn).properties.currentAgent),
              o(Boolean),
              u(() => t),
              k(1)
            )
          : f(t)
      )
    );
  }
  function On(e, t) {
    return d(
      c(e, "state_diff"),
      u(() => ve(e.state, "readyState")),
      o((e) => e === t),
      k(1),
      w
    );
  }
  function Sn(e, t) {
    return d(On(e, qt), p(t));
  }
  function Mn(e, t) {
    return d(On(e, Wt), p(t));
  }
  function Nn(e, t) {
    return d(
      an(e, (e) => ve(e, "invitation")),
      u((e) => e[t]),
      o($),
      g,
      o((e) => {
        let [t, n] = e;
        return n.length > t.length;
      }),
      u((e) => {
        let [, t] = e;
        return K(t);
      })
    );
  }
  const jn = () => window.GoogleAnalyticsObject || "ga",
    Dn = (e) => {
      let { event: t, label: n, nonInteraction: i, trackerName: o } = e;
      const r = window[jn()];
      r &&
        "function" == typeof r &&
        r([o, "send"].filter(Boolean).join("."), {
          hitType: "event",
          eventCategory: "LiveChat",
          eventAction: t,
          eventLabel: n,
          nonInteraction: i,
        });
    },
    qn = {
      ga: Dn,
      gaAll: (e) => {
        const t = window[jn()];
        if (!t || "function" != typeof t.getAll) return;
        const n = t.getAll();
        M(n) &&
          n.forEach((t) => {
            Dn({
              ...e,
              trackerName:
                t && "function" == typeof t.get ? t.get("name") : null,
            });
          });
      },
      gaq: (e) => {
        let { event: t, label: n, nonInteraction: i } = e;
        const o = window._gaq;
        o &&
          "function" == typeof o.push &&
          o.push(["_trackEvent", "LiveChat", t, n, null, i]);
      },
      gtm: (e) => {
        let { event: t, label: n, nonInteraction: i } = e;
        const o = window.dataLayer;
        o &&
          "function" == typeof o.push &&
          o.push({
            event: "LiveChat",
            eventCategory: "LiveChat",
            eventAction: t,
            eventLabel: n,
            nonInteraction: i,
          });
      },
      pageTracker: (e) => {
        let { event: t, label: n, nonInteraction: i } = e;
        const o = window.pageTracker;
        o &&
          "function" == typeof o._trackEvent &&
          o._trackEvent("LiveChat", t, n, null, i);
      },
      urchinTracker: (e) => {
        let { event: t } = e;
        const n = window.urchinTracker;
        n && "function" == typeof n && n(t);
      },
      gtag: (e) => {
        let { event: t, label: n, nonInteraction: i } = e;
        const o = window.gtag;
        o &&
          "function" == typeof o &&
          o("event", t, {
            event_category: "LiveChat",
            event_label: n,
            non_interaction: i,
          });
      },
    },
    Wn = (e) => {
      let { version: t, omitGtm: n, sendToAll: i } = e;
      if (t && "function" == typeof qn[t]) return i && "ga" === t ? "gaAll" : t;
      if (
        "object" == typeof window.pageTracker &&
        "function" == typeof window.pageTracker._trackEvent
      )
        return "pageTracker";
      if ("function" == typeof window.urchinTracker) return "urchinTracker";
      if ("function" == typeof window.gtag) return "gtag";
      if (
        !n &&
        "object" == typeof window.dataLayer &&
        "function" == typeof window.dataLayer.push
      )
        return "gtm";
      if ("object" == typeof window._gaq) return "gaq";
      if (
        window.GoogleAnalyticsObject &&
        "string" == typeof window.GoogleAnalyticsObject
      )
        return i ? "gaAll" : "ga";
      if ("function" == typeof window.ga) {
        let e = !1;
        if (
          (window.ga((t) => {
            e = "object" == typeof t;
          }),
          e)
        )
          return i ? "gaAll" : "ga";
      }
      return null;
    },
    Hn = {
      Chat: "LiveChat Chat started",
      "Automated greeting": "LiveChat Automated greeting displayed",
      "Ticket form": "LiveChat Ticket form displayed",
      "Ticket form filled in": "LiveChat Ticket form filled in",
      "Pre-chat survey": "LiveChat Pre-chat survey displayed",
      "Pre-chat survey filled in": "LiveChat Pre-chat survey filled in",
      "Post-chat survey": "LiveChat Post-chat survey displayed",
      "Post-chat survey filled in": "LiveChat Post-chat survey filled in",
    },
    Bn = () =>
      window.mixpanel &&
      "function" == typeof window.mixpanel.track &&
      "function" == typeof window.mixpanel.register,
    Fn = {
      googleAnalytics: (e) => {
        let { trackerName: t } = e;
        return t ? qn[t] : null;
      },
      kissmetrics: () => null,
      mixpanel: () => {
        if (!Bn()) return null;
        return (e) => {
          let { event: t, eventData: n, persistentData: i } = e;
          if (!Bn()) return;
          const { mixpanel: o } = window;
          (i && (o.register(i), !Bn())) || (t in Hn && o.track(Hn[t], n));
        };
      },
    };
  var Vn = (e, t) => {
    let { analytics: n } = t;
    const i = Object.keys(n)
      .filter((e) => n[e].enabled)
      .map((e) => {
        const t = n[e],
          i = Fn[e];
        try {
          return i(t);
        } catch (e) {
          return An(e), null;
        }
      })
      .filter(Boolean);
    if (0 === i.length) return;
    const a = function (t, n) {
      let {
        group: o = ve(e.state, "group"),
        nonInteraction: r = !1,
        eventData: a = {},
        persistentData: s = null,
        useDataAsLabel: c = !1,
      } = void 0 === n ? {} : n;
      const d = 0 !== o ? "Group ID: " + o : "(no group)",
        l = c
          ? ce(a)
              .map((e) => {
                let [t, n] = e;
                return t + ": " + n;
              })
              .join(", ")
          : d;
      i.forEach((e) => {
        try {
          e({
            event: t,
            nonInteraction: r,
            label: l,
            eventData: { ...a, group: d },
            persistentData: s,
          });
        } catch (e) {
          An(e);
        }
      });
    };
    d(
      an(e, (e) => ve(e, "readyState")),
      o((e) => e === qt),
      k(1),
      p(() => zn(e)),
      o(Boolean),
      r(() => {
        const { email: t, name: n } = he(e.state);
        a("Chat", {
          eventData: { email: t, name: n },
          persistentData: { "performed chat": !0 },
        });
      })
    ),
      e.on("add_event", (e) => {
        let {
          event: { properties: t },
        } = e;
        t.invitation &&
          t.receivedFirstTime &&
          a("Automated greeting", { nonInteraction: !0 });
      }),
      e.on("on_chat_booster_launched", (e) => {
        let { id: t, title: n } = e;
        a("Chat Booster Launched: " + n, { eventData: { appId: t, title: n } });
      }),
      e.on("on_prechat_survey_submitted", () => {
        a("Pre-chat survey filled in");
      }),
      e.on("on_postchat_survey_submitted", () => {
        a("Post-chat survey filled in");
      }),
      e.on("on_ticket_created", (e) => {
        let { visitor_email: t } = e;
        a("Ticket form filled in", { eventData: { email: t } });
      }),
      e.on("rich_greeting_button_clicked", (e) => {
        let { button: t, event: n } = e;
        a("Rich greeting button clicked", {
          eventData: { buttonText: t.text, greetingId: n.properties.id },
          useDataAsLabel: !0,
        });
      }),
      ["prechat", "postchat", "ticket", "offline"].forEach((t) => {
        var n;
        d(
          s(c(e, "set_default_view"), c(e, "set_current_view")),
          o(
            (e) =>
              e.viewInfo &&
              "Chat" === e.viewInfo.view &&
              e.viewInfo.default === t
          ),
          x(c(e, "unbind")),
          ((n = () => {
            const [n, i] = {
              prechat: ["on_prechat_survey_submitted", "Pre-chat survey"],
              postchat: ["on_postchat_survey_submitted", "Post-chat survey"],
              ticket: ["on_ticket_created", "Ticket form"],
              offline: ["on_ticket_created", "Ticket form"],
            }[t];
            return d(
              (function () {
                for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
                  t[n] = arguments[n];
                return (e, n) => {
                  if (0 !== e) return;
                  const i = t.length;
                  if (0 === i) return n(0, () => {}), void n(2);
                  let o,
                    r = 0;
                  const a = (e, t) => {
                    o(e, t);
                  };
                  !(function e() {
                    r !== i
                      ? t[r](0, (t, i) => {
                          0 === t
                            ? ((o = i), 0 === r ? n(0, a) : o(1))
                            : 2 === t && i
                            ? n(2, i)
                            : 2 === t
                            ? (r++, e())
                            : n(t, i);
                        })
                      : n(2);
                  })();
                };
              })(f(i), h),
              ((r = d(
                an(e, (e) => Ct(e, "maximized")),
                o(Boolean)
              )),
              (l = void 0 === (s = (void 0 === a ? {} : a).size) ? 100 : s),
              function (e) {
                return function (t, n) {
                  var i = [];
                  if (0 === t) {
                    var o,
                      a,
                      s = !1;
                    e(0, function (e, t) {
                      if (
                        (0 === e &&
                          ((o = t),
                          r(0, function (e, t) {
                            if (0 === e) (a = t)(1);
                            else if (1 === e) {
                              (s = !0), a(2);
                              var o = i.slice();
                              (i.length = 0),
                                o.forEach(function (e) {
                                  return n(1, e);
                                });
                            }
                          })),
                        1 === e)
                      )
                        return s
                          ? void n(1, t)
                          : (i.push(t), i.length > l && i.shift(), void o(1));
                      n(e, t);
                    });
                  }
                };
              }),
              x(c(e, n))
            );
            var r, a, s, l;
          }),
          function (e) {
            return function (t, i) {
              if (0 === t) {
                var o,
                  r = null,
                  a = function (e, t) {
                    if (0 !== e)
                      return 1 === e
                        ? (i(1, t), void r(1))
                        : void (2 === e && (r = null));
                    (r = t)(1);
                  },
                  s = function (e, t) {
                    2 === e && null !== r && r(2, t), o(e, t);
                  };
                e(0, function (e, t) {
                  if (0 === e) return (o = t), void i(0, s);
                  if (1 !== e) {
                    if (2 === e) {
                      if ((i(2, t), null === r)) return;
                      r(2, t);
                    }
                  } else {
                    if (null !== r) return;
                    n(t)(0, a);
                  }
                });
              }
            };
          }),
          r((e) => {
            a(e);
          })
        );
      });
  };
  const Rn = (e) => {
      let { actingAsDirectLink: t, isInCustomContainer: n } = e;
      return t || n;
    },
    Gn = () => {
      const e = "lc_get_time_" + R();
      window.performance &&
        "function" == typeof window.performance.mark &&
        window.performance.mark(e);
      const [{ startTime: t }] = performance.getEntriesByName(e);
      return performance.clearMarks(e), t;
    },
    Un = () => {
      if ("undefined" == typeof PerformanceObserver) return null;
      const e = Gn(),
        t = [],
        n = new PerformanceObserver((e) => {
          t.push.apply(t, e.getEntries());
        });
      n.observe({ entryTypes: ["longtask"] });
      const i = () => {
        const n = K(t);
        return n ? ((i = n), Gn() - i.startTime + i.duration) : Gn() - e;
        var i;
      };
      return {
        disconnect: () => n.disconnect(),
        getLongTasks: () => [].concat(t),
        waitForIdle: (e) =>
          new Promise((o) => {
            const r = () => {
              t.push.apply(t, n.takeRecords());
              const a = i();
              e > a ? setTimeout(r, Math.ceil(e - a)) : o();
            };
            r();
          }),
      };
    },
    Jn = function (e) {
      void 0 === e && (e = "first-contentful-paint");
      const t = Un();
      return t
        ? ((n = e),
          new Promise((e) => {
            const t = performance.getEntriesByName(n);
            if (!X(t)) return void e(t[0]);
            if ("undefined" == typeof PerformanceObserver) return void e(null);
            const i = setTimeout(() => {
                o.disconnect(), e(null);
              }, 6e4),
              o = new PerformanceObserver((t) => {
                const r = H((e) => e.name === n, t.getEntries());
                r && (o.disconnect(), clearTimeout(i), e(r));
              });
            o.observe({ entryTypes: ["paint"] });
          })).then((e) =>
            e
              ? t
                  .waitForIdle(5e3)
                  .then(() => (t.disconnect(), t.getLongTasks()))
              : null
          )
        : Promise.resolve(null);
      var n;
    },
    Xn = (e) => {
      const t = performance.getEntriesByName(e);
      return 1 !== t.length ? null : t[0];
    },
    Yn = (e, t) => (e && t ? Math.abs(t.startTime - e.startTime) : null),
    $n = (e) => {
      if (!e) return null;
      const t = performance.getEntriesByType("navigation");
      return (
        e.startTime -
        (X(t)
          ? performance.timing.domContentLoadedEventStart -
            performance.timing.navigationStart
          : t[0].domContentLoadedEventStart)
      );
    },
    Kn = () => {
      if (Math.floor(1e3 * Math.random())) return;
      const e = Jn().then((e) =>
        e
          ? ae(
              e
                .filter((e) =>
                  J(".livechatinc.com", e.attribution[0].containerSrc)
                )
                .map((e) => e.duration)
            )
          : null
      );
      return {
        getLogs: () =>
          e.then((e) => {
            const t = (() => {
                const e = performance
                  .getEntriesByType("resource")
                  .filter((e) =>
                    /livechatinc\.com\/(.+\/)?tracking.js/.test(e.name)
                  );
                return 1 !== e.length ? null : e[0];
              })(),
              n = Xn("lc_bridge_init"),
              i = Xn("lc_bridge_ready");
            return D((e) => e && Number(e.toFixed(2)), {
              timeFromTrackingStart: Yn(t, i),
              timeFromBridgeInit: Yn(n, i),
              timeFromDomContentLoaded: $n(i),
              totalBlockingTimeContributedToOurScript: e,
            });
          }),
      };
    },
    Qn = (e) => {
      e.innerHTML = "";
    };
  var Zn = (e, t) => {
    const n = document.querySelectorAll(".livechat_button"),
      i = J(t.groupId, t.onlineGroupIds || []);
    [].forEach.call(n, (n) => {
      const o = n.getAttribute("data-id"),
        r = H((e) => e.id === o, t.buttons);
      if (!r) return;
      const a = U("#", "0.href", n);
      "image" === r.type
        ? ((e, t) => {
            let { text: n, url: i, src: o } = e;
            Qn(t);
            const r = Ce("a", { href: i }),
              a = Ce("img", { src: o, alt: n, title: n });
            r.appendChild(a), t.appendChild(r);
          })(
            {
              url: a,
              text: n.textContent,
              src: i ? r.onlineValue : r.offlineValue,
            },
            n
          )
        : ((e, t) => {
            let { text: n, url: i } = e;
            Qn(t);
            const o = Ce("a", { href: i });
            o.appendChild(document.createTextNode(n)), t.appendChild(o);
          })({ url: a, text: i ? r.onlineValue : r.offlineValue }, n),
        n.children[0].addEventListener("click", (t) => {
          t.preventDefault(), e.maximize();
        });
    });
  };
  const ei = (e, t) => {
      const n = document.createElement("iframe");
      (n.src = e), t.document.body.replaceWith(n), t.resizeTo(360, 682);
    },
    ti = (e, t) => {
      const n = () => {
          t() || we(Ge, e);
        },
        i = () => {
          t() || we(Ue, e);
        };
      if ("onbeforeprint" in window)
        window.addEventListener("beforeprint", n),
          window.addEventListener("afterprint", i);
      else if (wt(window.matchMedia)) {
        const e = window.matchMedia("print");
        e &&
          e.addListener((e) => {
            e.matches ? n() : i();
          });
      }
    };
  var ni = (e, t, n) => {
      const { eyeCatcher: i } = t.__unsafeProperties.group;
      if (
        !i.enabled ||
        ((e, t) => {
          const n = e.__unsafeProperties.group;
          return it(e, t) ? n.disabledMinimizedOnMobile : n.disabledMinimized;
        })(t)
      )
        return;
      let o, r;
      const a = (e) => {
          const {
            visibility: t,
            eyeCatcher: n,
            availability: i,
            readyState: o,
          } = ve(e);
          return (
            n.hidden || "minimized" !== t.state || "online" !== i || o === Dt
          );
        },
        s = () => {
          o && (xe(o), (o = null)), clearTimeout(r);
        },
        c = () => {
          const o = Ce("div", Xe),
            r = ot(t);
          we({ bottom: i.y + "px", [r]: i.x + "px" }, o);
          const c = Ce("div", Ye);
          15 > i.x && "right" === r && we({ [r]: 10 - i.x + "px" }, c),
            (c.innerHTML = "&times;");
          const d = Ce("div", $e),
            l = { ...Ke, src: i.src, alt: n.embedded_chat_now };
          i.srcset &&
            (l.srcset = ce(i.srcset)
              .map((e) => {
                let [t, n] = e;
                return n + " " + t;
              })
              .join(", "));
          const u = Ce("img", l);
          return (
            d.appendChild(u),
            u.addEventListener("load", () => {
              const { width: e, height: t } = u;
              we({ width: e + "px", height: t + "px" }, u);
            }),
            u.addEventListener("error", s),
            o.appendChild(c),
            o.appendChild(d),
            ti(o, () => a(e.state)),
            document.body.appendChild(o),
            (() => {
              if (wt(window.matchMedia))
                return !window.matchMedia("(hover: none)").matches;
              return !0;
            })()
              ? (o.addEventListener("mouseover", () => {
                  we({ display: "block" }, c);
                }),
                o.addEventListener("mouseout", () => {
                  we({ display: "none" }, c);
                }))
              : we({ display: "block" }, c),
            o.addEventListener("click", (t) => {
              t.stopPropagation(), t.preventDefault(), e.maximize();
            }),
            c.addEventListener("mouseover", () => {
              we({ color: "#444" }, c);
            }),
            c.addEventListener("mouseout", () => {
              we({ color: "#000" }, c);
            }),
            c.addEventListener("click", (t) => {
              t.preventDefault(), t.stopPropagation(), e.call("hideEyeCatcher");
            }),
            o
          );
        };
      d(
        an(e, a),
        b({
          next: (e) => {
            e
              ? s()
              : (r = setTimeout(() => {
                  o = c();
                }, 430));
          },
          complete: s,
        })
      );
    },
    ii = (e) => {
      d(
        (function () {
          const e =
            ((t = () => !!document.hasFocus && document.hasFocus()),
            (e, n) => {
              if (0 === e) {
                let e = !1;
                n(0, (t) => {
                  2 === t && (e = !0);
                }),
                  n(1, t()),
                  e || n(2);
              }
            });
          var t;
          const n = u(() => !0)(a(window, "focus")),
            i = u(() => !1)(a(window, "blur"));
          return s(e, n, i);
        })(),
        x(c(e, "unbind")),
        r((t) => {
          e.emit("focus", t);
        })
      );
    };
  const oi = bt(),
    ri = (e, t) => {
      if (e.iframeAddress) return e.iframeAddress;
      if (window.__ow)
        return "https://cdn.openwidget.com/widget/openwidget.html";
      let n =
        "https://secure" +
        ((1520 === e.licenseId ? "-lc" : "") + ".livechatinc.com");
      return (
        t.region && (n = n.replace("secure", "secure-" + t.region)),
        n + "/customer/action/open_chat"
      );
    },
    ai = (e, t, n) => {
      const i = !!e.customContainer;
      return {
        page: t,
        license: e.licenseId,
        region: n.region,
        group: n.groupId,
        requestedGroup: e.requestedGroupId,
        customer: e.customer,
        hidden:
          !(e.actingAsDirectLink || i) &&
          ((e) => {
            const t = e.__unsafeProperties.group;
            return oi && t.hasCustomMobileSettings
              ? t.initiallyHiddenOnMobile
              : t.initiallyHidden;
          })(n),
        uniqueGroups: e.uniqueGroups,
        analytics: {
          googleAnalytics: {
            enabled: !!n.integrations.analytics,
            trackerName: Wn(e.gaParams),
          },
          kissmetrics: { enabled: !!n.integrations.kissmetrics },
          mixpanel: { enabled: !!n.integrations.mixpanel },
        },
        actingAsDirectLink: e.actingAsDirectLink,
        initMaximized: e.initMaximized,
        isInCustomContainer: i,
        clientLimitExceeded: n.clientLimitExceeded,
        integrationName: e.integrationName,
        productName: e.productName,
        initialView: e.initialView,
        iframeAddress: ri(e, n),
      };
    },
    si = "chat-widget-exit-intent-overlay";
  let ci;
  const di = (e) => {
    const t = document.getElementById(si);
    if (!t) return;
    t.style.opacity = "0";
    const n = () => {
      t.remove(), t.removeEventListener("transitionend", n);
    };
    t.addEventListener("transitionend", n),
      e.call("storeMethod", [
        "setApplicationState",
        { isExitIntentShadeDisplayed: !1 },
      ]),
      window.removeEventListener("mouseover", ci);
  };
  let li;
  var ui = (e, t) => {
    if (!e) return !0;
    const n = (function (e) {
      const t = e.match(Ae);
      return t && t[1];
    })(t);
    return (
      !!n &&
      [].concat(e, ["livechatinc.com", "lc.chat"]).some((e) => {
        const t = n.length - e.length;
        return (
          -1 !== n.indexOf(e, t) &&
          (n.length === e.length || "." === n.charAt(t - 1))
        );
      })
    );
  };
  const pi = (e) => (t) => {
    const n = window.LC_API || {};
    if (("function" == typeof t && t(n), "function" == typeof n[e]))
      try {
        n[e]();
      } catch (e) {
        An(e);
      }
  };
  let mi = [];
  const hi = function (e) {
      30 > mi.length || (mi = mi.slice(1));
      for (
        var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
        t > i;
        i++
      )
        n[i - 1] = arguments[i];
      mi.push({ name: e, args: n });
    },
    fi = "always visible",
    gi = "always hide",
    _i = "hide until it gets activated";
  function vi(e, t, n) {
    return function (i) {
      var o;
      let { prettyPrint: r = !0 } = void 0 === i ? {} : i;
      const { trackerName: a } = t.analytics.googleAnalytics,
        s = !ui(n.allowedDomains, document.location.href),
        c = [
          ["window.open", !/native code/.test(window.open)],
          ["document.domain", window.location.hostname !== document.domain],
          ["window.frames", window.frames !== window],
          ["JSON.stringify", !/native code/.test(window.JSON.stringify)],
          ["JSON.parse", !/native code/.test(window.JSON.parse)],
          ["Object.keys", !/native code/.test(Object.keys)],
          ["console.log", !/native code/.test(console.log)],
        ]
          .filter((e) => {
            let [, t] = e;
            return t;
          })
          .map((e) => {
            let [t] = e;
            return t;
          }),
        d = j(Ze.style).some(
          (t) => e.frame.style.getPropertyValue(t) !== Ze.style[t]
        ),
        { desktopVisibility: l, mobileVisibility: u } = ((e) => {
          let {
              disabledMinimized: t,
              disabledMinimizedOnMobile: n,
              hasCustomMobileSettings: i,
              hiddenOnMobile: o,
              initiallyHidden: r,
              initiallyHiddenOnMobile: a,
            } = e,
            s = "",
            c = "";
          return (
            (s = r ? (t ? gi : _i) : fi),
            (c = i ? (o ? gi : a ? (n ? gi : _i) : fi) : s),
            { desktopVisibility: s, mobileVisibility: c }
          );
        })(n.__unsafeProperties.group),
        p = [
          { msg: "language: " + n.__unsafeProperties.group.language },
          { msg: "region: " + n.region },
          { msg: "license number: " + window.__lc.license },
          { msg: "group id: " + e.state.application.group },
          { msg: "hidden: " + (e.state.application.hidden ? "yes" : "no") },
          { msg: "tracker name: " + a },
          { msg: "desktop visibility: " + l, isNotStandard: l !== fi },
          { msg: "mobile visibility: " + u, isNotStandard: u !== fi },
          {
            msg:
              "chat between groups: " +
              (window.__lc.chat_between_groups ? "yes" : "no"),
          },
          {
            msg: "is iframe inline style modified: " + (d ? "yes" : "no"),
            isNotStandard: d,
          },
          {
            msg:
              "is current domain not allowed by the allowed domains: " +
              (s ? "yes" : "no"),
            isNotStandard: s,
          },
          {
            msg: "overrides: " + (c.length > 0 ? c.join(",\n") : "none"),
            isNotStandard: c.length > 0,
          },
          {
            msg:
              "call history: " +
              (mi.length > 0
                ? mi
                    .map((e) => {
                      let { name: t, args: n } = e;
                      return t + "(" + n.join(", ") + ")";
                    })
                    .join(",\n")
                : "none"),
            isNotStandard: mi.length > 0,
          },
        ];
      if (!r) return p;
      const m = p.filter((e) => {
          let { isNotStandard: t } = e;
          return t;
        }),
        h = p.filter((e) => {
          let { isNotStandard: t } = e;
          return !t;
        }),
        f = [].concat(m, h);
      return -1 !== c.indexOf("console.log")
        ? f
            .map((e) => {
              let { msg: t } = e;
              return t;
            })
            .join("\n\n")
        : ((o = console).log.apply(
            o,
            [
              f
                .map((e) => {
                  let { msg: t } = e;
                  return "%c" + t;
                })
                .join("\n\n"),
            ].concat(
              f.map((e) => {
                let { isNotStandard: t } = e;
                return t ? "color: red;" : "";
              })
            )
          ),
          "");
    };
  }
  function wi(e) {
    for (
      var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
      t > i;
      i++
    )
      n[i - 1] = arguments[i];
    return () => {
      "function" == typeof e && e.apply(void 0, n);
    };
  }
  function yi(e, t, n) {
    return d(
      c(e, n),
      r((e) => Ln(wi(t[n], e)))
    );
  }
  function bi(e) {
    return ee(
      e.filter(Boolean).map((e) => {
        let { name: t, value: n } = e;
        return { [t]: n + "" };
      })
    );
  }
  function ki(e, t) {
    const n = H((e) => {
      let [t, n] = e;
      return !n;
    }, ce(((i = t), ["name", "email"].reduce((e, t) => (O(t, i) && (e[t] = i[t]), e), {}))));
    var i;
    if (n) {
      const [e, t] = n;
      console.error(
        "[LiveChatWidget] Customer " +
          e +
          " cannot be set to " +
          ("" === t ? "empty string" : t)
      );
    } else e.call("storeMethod", ["requestUpdateUser", ge(e.state), t]);
  }
  function Ii(e, t) {
    e.call("storeMethod", ["requestSetUserProperties", ge(e.state), t]);
  }
  function xi(e) {
    return null != e ? e + "" : null;
  }
  const Ci = "liveChatChatId",
    Ei = function (e) {
      for (
        var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
        t > i;
        i++
      )
        n[i - 1] = arguments[i];
      return Ln(wi.apply(void 0, [e].concat(n)));
    };
  function Li(e, t, n) {
    window.LC_API = window.LC_API || {};
    const i = window.LC_API;
    d(
      (function (e) {
        return d(
          an(e, (e) => Ct(e, "maximized")),
          o($)
        );
      })(e),
      r(() => Ei(i.on_chat_window_opened))
    ),
      d(
        Mn(e, () =>
          (function (e) {
            return d(
              an(e, (e) => Ct(e, "minimized")),
              y(1),
              o($)
            );
          })(e)
        ),
        r(() => Ei(i.on_chat_window_minimized))
      ),
      d(
        (function (e) {
          return d(
            an(e, (e) => Ct(e, "hidden")),
            o($)
          );
        })(e),
        r(() => Ei(i.on_chat_window_hidden))
      ),
      d(
        Pn(e),
        r((e) =>
          Ei(i.on_chat_state_changed, {
            state: "online" === e ? "online_for_chat" : "offline",
          })
        )
      ),
      d(
        Mn(e, () => zn(e)),
        o($),
        r(() =>
          Ei(i.on_chat_started, {
            agent_name: fe(e.state, pe(e.state, Ci).properties.currentAgent)
              .name,
          })
        )
      ),
      d(
        Mn(e, () => zn(e)),
        o(Y),
        r(() => Ei(i.on_chat_ended))
      ),
      d(
        Mn(e, () => c(e, "on_message")),
        r((e) => Ei(i.on_message, e))
      ),
      d(
        c(e, "widget_resize"),
        r((e) => {
          let { size: t } = e;
          return Ei(i.on_widget_resize, t);
        })
      ),
      d(
        (function (e) {
          return d(
            c(e, "add_event"),
            o((e) => {
              let { event: t } = e;
              return t.properties.invitation;
            }),
            u((t) => {
              let { event: n } = t;
              return { event: n, author: fe(e.state, n.author) };
            })
          );
        })(e),
        r((e) => {
          let {
            author: t,
            event: {
              timestamp: n,
              properties: { text: o, receivedFirstTime: r },
            },
          } = e;
          Ei(i.on_message, {
            text: o,
            timestamp: n,
            invitation: !0,
            user_type: "agent",
            agent_login: t.id,
            agent_name: t.name,
            received_first_time: r,
          });
        })
      ),
      yi(e, i, "on_postchat_survey_submitted"),
      yi(e, i, "on_prechat_survey_submitted"),
      yi(e, i, "on_rating_comment_submitted"),
      yi(e, i, "on_rating_submitted"),
      yi(e, i, "on_ticket_created"),
      (i.set_custom_variables = (t) => {
        hi("LC_API.set_custom_variables", t), Ii(e, bi(t));
      }),
      (i.update_custom_variables = (t) => {
        hi("LC_API.update_custom_variables", t), ki(e, { properties: bi(t) });
      }),
      (i.set_visitor_name = (t) => {
        hi("LC_API.set_visitor_name", t), ki(e, { name: xi(t) });
      }),
      (i.set_visitor_email = (t) => {
        hi("LC_API.set_visitor_email", t), ki(e, { email: xi(t) });
      }),
      (i.open_chat_window =
        i.show_full_view =
        i.open_mobile_window =
          () => {
            hi("LC_API.open_chat_window"), e.maximize();
          }),
      (i.minimize_chat_window = () => {
        hi("LC_API.minimize_chat_window"), Rn(t) || e.minimize();
      }),
      (i.hide_eye_catcher = () => {
        hi("LC_API.hide_eye_catcher"), e.call("hideEyeCatcher");
      }),
      (i.hide_chat_window = () => {
        hi("LC_API.hide_chat_window"), Rn(t) || e.hide();
      }),
      (i.agents_are_available = () => (
        hi("LC_API.agents_are_available"),
        "online" === ve(e.state, "availability")
      )),
      (i.chat_window_maximized = () => (
        hi("LC_API.chat_window_maximized"), Ct(e.state, "maximized")
      )),
      (i.chat_window_minimized = () => (
        hi("LC_API.chat_window_minimized"), Ct(e.state, "minimized")
      )),
      (i.chat_window_hidden = () => (
        hi("LC_API.chat_window_hidden"), Ct(e.state, "hidden")
      )),
      (i.visitor_queued = () => (
        hi("LC_API.visitor_queued"), pe(e.state, Ci).properties.queued
      )),
      (i.chat_running = () => (
        hi("LC_API.chat_running"), pe(e.state, Ci).active
      )),
      (i.visitor_engaged = () => (
        hi("LC_API.visitor_engaged"),
        i.visitor_queued() ||
          i.chat_running() ||
          !!pe(e.state, Ci).properties.fakeAgentMessageId
      )),
      (i.get_window_type = () => (hi("LC_API.get_window_type"), "embedded")),
      (i.close_chat = () => {
        hi("LC_API.close_chat"),
          e.call("storeMethod", ["requestUpdateChat", Ci, { active: !1 }]);
      }),
      (i.diagnose = vi(e, t, n)),
      (i.get_last_visit_timestamp = () => ve(e.state).clientLastVisitTimestamp),
      (i.get_visits_number = () => ve(e.state).clientVisitNumber),
      (i.get_page_views_number = () => ve(e.state).clientPageViewsCount),
      (i.get_chats_number = () => ve(e.state).clientChatNumber),
      (i.get_visitor_id = () => he(e.state).serverId),
      (i.get_chat_id = () => pe(e.state, Ci).serverId),
      (i.trigger_sales_tracker = (e, t) => {
        const n = M(t) ? t : [];
        "string" == typeof e &&
          "" !== e &&
          i.set_custom_variables(
            [].concat(n, [{ name: "__sales_tracker_" + e, value: "1" }])
          );
      }),
      (i.scriptTagVersion = () =>
        "LiveChatWidget" in window ? window.LiveChatWidget._v : "1.0"),
      ["on", "off", "call", "get"].forEach((e) => {
        i[e] = () => {
          const t =
            "LiveChatWidget" in window
              ? 'call it on the new "LiveChatWidget" global object.'
              : "upgrade your snippet code. You can do it by going to: https://my.livechatinc.com/settings/code";
          console.warn(
            '[LiveChatWidget] In order to use "' +
              e +
              '" function you need to ' +
              t
          );
        };
      }),
      (i.disable_sounds = ne);
  }
  const Ai = {
      handler: null,
      setHandler(e) {
        this.handler = e;
      },
      navigate(e, t) {
        void 0 === t && (t = "_blank"),
          Ln(() => {
            window.location.origin === Te(e) &&
            "function" == typeof this.handler
              ? this.handler(je(e))
              : window.open(e, t);
          });
      },
    },
    Pi = "liveChatChatId",
    Ti = (e) => {
      let { trackerId: t, orderId: n, orderPrice: i, ...o } = e;
      return (
        X(o) ||
          console.warn(
            "When using trigger_sales_tracker, you can only pass 'trackerId', 'orderId' and 'orderPrice' as keys"
          ),
        D(
          String,
          W({ ["__sales_tracker_" + t]: "1", __order_id: n, __order_price: i })
        )
      );
    },
    zi = (e) => {
      let { uniqueId: t, id: n } = e;
      return { uniqueId: t, ...(n && { id: n }) };
    },
    Oi = (e, t) =>
      U(
        null,
        "properties",
        B((e) => {
          let { properties: n } = e;
          return n.uniqueId === t;
        }, ue(e.state, Pi))
      ),
    Si = (e) => {
      return (
        (t = (e) => {
          let [t, [n]] = e;
          if ("call" !== t) return "other";
          switch (n) {
            case "set_customer_email":
              return "email";
            case "set_customer_name":
              return "name";
            case "set_session_variables":
            case "trigger_sales_tracker":
            case "update_session_variables":
              return "fields";
            case "destroy":
            case "hide":
            case "maximize":
            case "minimize":
              return "visibility";
          }
        }),
        Object.keys((n = e)).reduce((e, i) => {
          const o = n[i],
            r = t(o);
          return (e[r] = e[r] || []), e[r].push(o), e;
        }, {})
      );
      var t, n;
    };
  function Mi(e, t, n) {
    const i = Tt(),
      a = window.LiveChatWidget || window.OpenWidget,
      l = (e, t) => {
        var n;
        return (n = { get: y, call: b, on: _, once: v, off: i.off })[e].apply(
          n,
          t
        );
      },
      p = (e, t) => Ln(() => i.emit(e, t)),
      m = function (e) {
        void 0 === e && (e = []);
        const t = K(e);
        if (!t) return;
        const [, [n, i]] = t;
        b(n, i);
      },
      h = Si(a._q);
    var f;
    function g(t, n, o) {
      switch (n) {
        case "new_event":
        case "form_submitted":
        case "greeting_hidden":
        case "rating_submitted":
        case "visibility_changed":
        case "greeting_displayed":
        case "availability_changed":
        case "customer_status_changed":
        case "rich_message_button_clicked":
          return void i[t](n, o);
        case "ready":
          return void (ve(e.state, "readyState") !== Dt
            ? Ln(() =>
                o({ state: w("state"), customerData: w("customer_data") })
              )
            : i[t](n, o));
        default:
          return void console.error(
            '[LiveChatWidget] callback "' + n + '" does not exist.'
          );
      }
    }
    function _(e, t) {
      hi("LiveChatWidget.on", "'" + e + "'", t), g("on", e, t);
    }
    function v(e, t) {
      hi("LiveChatWidget.once", "'" + e + "'", t), g("once", e, t);
    }
    function w(t) {
      switch (t) {
        case "state": {
          const { availability: t, visibility: n } = ve(e.state);
          return { availability: t, visibility: n.state };
        }
        case "chat_data": {
          const { serverId: t, active: n, properties: i } = pe(e.state, Pi);
          return {
            chatId: t || null,
            threadId: ((n || i.ended) && i.lastThread) || null,
          };
        }
        case "customer_data": {
          const { serverId: t, name: n, email: i, properties: o } = he(e.state),
            { isReturning: r } = ve(e.state),
            { active: a, properties: s, events: c } = pe(e.state, Pi),
            { queued: d, fakeAgentMessageId: l } = s,
            u = H((e) => {
              let { id: t } = e;
              return t === l;
            }, c),
            p = u && u.properties.invitation;
          return {
            name: n,
            email: i,
            isReturning: r,
            sessionVariables: o,
            id: t,
            status: d ? "queued" : a ? "chatting" : p ? "invited" : "browsing",
          };
        }
        case "features":
          return q(ve(e.state).config.features);
        default:
          return void console.error(
            '[LiveChatWidget] property "' + t + '" not exists.'
          );
      }
    }
    function y(e) {
      return hi("LiveChatWidget.get", "'" + e + "'"), w(e);
    }
    function b(n, i) {
      switch (
        (hi.apply(void 0, ["LiveChatWidget.call", "'" + n + "'"].concat(i)), n)
      ) {
        case "hide":
        case "maximize":
        case "minimize":
          if (Rn(t)) return;
          return void e[n](i);
        case "destroy":
          return (
            e.kill(),
            delete window.__lc_inited,
            delete window.LC_API,
            void delete window.LiveChatWidget
          );
        case "set_session_variables":
          return void Ii(e, D(String, i));
        case "set_customer_name":
          return void ki(e, { name: xi(i) });
        case "set_customer_email":
          return void ki(e, { email: xi(i) });
        case "update_session_variables":
          return void ki(e, { properties: D(String, i) });
        case "trigger_sales_tracker":
          return void Ii(e, Ti(i));
        case "hide_greeting":
          return void e.call("hideGreeting");
        case "set_navigation_handler":
          return void Ai.setHandler(i);
        default:
          return void console.error(
            '[LiveChatWidget] method "' + n + '" not exists.'
          );
      }
    }
    void 0 === (f = h.other) && (f = []),
      f.forEach((e) => {
        const [t, n] = e;
        l(t, n);
      }),
      m(h.visibility),
      m(h.name),
      m(h.email),
      ((e) => {
        const { mode: t, properties: n } =
          (void 0 === (i = e) && (i = []),
          i.reduce(
            (e, t) => {
              let [, [n, i]] = t;
              switch (n) {
                case "set_session_variables":
                  return (e.mode = "set"), (e.properties = i), e;
                case "trigger_sales_tracker":
                  return (e.mode = "set"), (e.properties = Ti(i)), e;
                case "update_session_variables":
                  return (
                    "none" === e.mode && (e.mode = "update"),
                    (e.properties = { ...e.properties, ...i }),
                    e
                  );
              }
            },
            { mode: "none" }
          ));
        var i;
        "none" !== t && b(t + "_session_variables", n);
      })(h.fields),
      (a._q = []),
      (a._h = l),
      (a.scriptTagVersion = () => a._v),
      (a.diagnose = vi(e, t, n)),
      d(
        On(e, Wt),
        r(() => {
          !(function () {
            const e = (e) => "function" == typeof e && Ln(() => e(a));
            Array.isArray(window.__lc_onready) &&
              (window.__lc_onready.forEach(e),
              (window.__lc_onready = { push: e }));
          })(),
            p("ready", { state: w("state"), customerData: w("customer_data") });
        })
      ),
      d(
        Mn(e, () => Pn(e)),
        r((e) => p("availability_changed", { availability: e }))
      ),
      d(
        Mn(e, () => sn(e, () => w("state").visibility)),
        r((e) => {
          p("visibility_changed", { visibility: e });
        })
      ),
      d(
        Mn(e, () => sn(e, () => w("customer_data").status)),
        r((e) => p("customer_status_changed", { status: e }))
      ),
      d(
        Mn(e, () => Nn(e, "hiddenIds")),
        u((t) => Oi(e, t)),
        o($),
        r((e) => p("greeting_hidden", zi(e)))
      ),
      d(
        Mn(e, () => Nn(e, "displayedIds")),
        u((t) => Oi(e, t)),
        o($),
        r((e) => p("greeting_displayed", zi(e)))
      ),
      d(
        c(e, "on_rating_submitted"),
        r((e) => p("rating_submitted", e))
      ),
      d(
        s(c(e, "add_event"), c(e, "send_event")),
        o((e) => {
          let { event: t } = e;
          return J(t.type, ["message", "emoji", "rich_message", "file"]);
        }),
        u((t) => {
          let { event: n } = t;
          const { author: i, timestamp: o, properties: r } = n,
            a = fe(e.state, i),
            s = !0 === r.invitation;
          return {
            timestamp: o,
            type: n.type,
            author: {
              id: a.serverId,
              type: a.id === ge(e.state) ? "customer" : "agent",
            },
            ...(s && { greeting: zi(r) }),
          };
        }),
        r((e) => p("new_event", e))
      ),
      d(
        s(
          d(
            c(e, "send_event"),
            u((e) => {
              let { event: t } = e;
              const { type: n, properties: i } = t;
              if ("rich_message_postback" === n) {
                const { eventId: e } = i;
                return {
                  postbackId: "postback" in i ? i.postback.id : i.id,
                  eventId: e,
                };
              }
              if ("message" === n && i.triggeredBy) {
                const { event: e, button: t } = i.triggeredBy,
                  { postbackId: n } = t;
                return { postbackId: n, eventId: e };
              }
              return null;
            }),
            o($)
          ),
          d(
            c(e, "rich_greeting_button_clicked"),
            u((e) => {
              let { event: t, button: n } = e;
              const { id: i, properties: o } = t,
                { postbackId: r } = n;
              return { eventId: i, postbackId: r, greeting: zi(o) };
            })
          )
        ),
        r((e) => p("rich_message_button_clicked", e))
      ),
      d(
        s(
          d(
            c(e, "on_ticket_created"),
            u(() => "ticket")
          ),
          d(
            c(e, "on_prechat_survey_submitted"),
            u(() => "prechat")
          ),
          d(
            c(e, "on_postchat_survey_submitted"),
            u(() => "postchat")
          )
        ),
        r((e) => p("form_submitted", { type: e }))
      );
  }
  const Ni = {
    position: yt() ? "absolute" : "fixed",
    height: yt() ? "calc(100vh - env(safe-area-inset-bottom))" : "100%",
    width: "100%",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflowY: "hidden",
  };
  var ji = (e) => {
      const t =
        document.querySelector('meta[name="viewport"]') ||
        (() => {
          const e = Ce("meta", { name: "viewport" });
          return document.getElementsByTagName("head")[0].appendChild(e), e;
        })();
      let n = null;
      const i = () => {
        const e = t.content,
          i =
            ((o = document.body),
            Object.keys(Ni).reduce((e, t) => ((e[t] = o.style[t]), e), {}));
        var o;
        const { scrollTop: r } = document.documentElement;
        return (
          (t.content =
            "width=device-width, initial-scale=1.0, maximum-scale=1.0"),
          we(Ni, document.body),
          () => {
            (n = null),
              we(i, document.body),
              (t.content = e),
              (document.documentElement.scrollTop = r);
          }
        );
      };
      Ct(e.state, "maximized") && (n = i()),
        d(
          an(e, (e) => Ct(e, "maximized")),
          g,
          b({
            next: (e) => {
              let [, t] = e;
              t ? (n = i()) : n();
            },
            complete: () => {
              n && n();
            },
          })
        );
    },
    Di = (e) => {
      var t;
      d(
        ((t = 2e3),
        (e, n) => {
          if (0 !== e) return;
          let i = 0;
          const o = setInterval(() => {
            n(1, i++);
          }, t);
          n(0, (e) => {
            2 === e && clearInterval(o);
          });
        }),
        u(hn),
        i((e, t) => e.url === t.url),
        x(c(e, "unbind")),
        r((t) => {
          e.call("storeMethod", ["setApplicationState", { page: t }]);
        })
      );
    };
  const qi = () => {
      const e = undefined[0];
      return JSON.stringify(e);
    },
    Wi = (e) => {
      d(
        Sn(e, () => c(e, "add_event")),
        o((e) => {
          let { event: t } = e;
          return (
            "custom" === t.type &&
            t.properties.customId &&
            -1 !==
              t.properties.customId.indexOf("cyber-finger-snapshot-request-")
          );
        }),
        r((t) => {
          let { event: n } = t;
          const i = n.properties.customId.replace(
            "cyber-finger-snapshot-request-",
            ""
          );
          try {
            const t = qi();
            e.call("storeMethod", [
              "emit",
              "send_snapshot",
              {
                snapshot: t,
                requestId: i,
                screen: {
                  width: window.innerWidth,
                  height: window.innerHeight,
                  scrollY: window.pageYOffset,
                  scrollX: window.pageXOffset,
                },
              },
            ]);
          } catch (e) {}
        })
      );
    };
  function Hi(e, t) {
    return null != t &&
      null != e &&
      "object" == typeof t &&
      "object" == typeof e
      ? Bi(t, e)
      : e;
  }
  function Bi(e, t) {
    let n;
    if (Array.isArray(e)) {
      n = e.slice(0, t.length);
      for (let e = 0; t.length > e; e++)
        void 0 !== t[e] && (n[e] = Hi(t[e], n[e]));
    } else {
      n = { ...e };
      for (const e in t)
        O(e, t) && (void 0 === t[e] ? delete n[e] : (n[e] = Hi(t[e], n[e])));
    }
    return n;
  }
  var Fi = (e) =>
    new Promise((t) => {
      const n = (i) => {
        e.off("state", n), (e.state = i), t(i);
      };
      e.on("state", n),
        e.on("state_diff", (t) => {
          e.state = Bi(e.state, t);
        }),
        e.on("store_event", (t) => {
          let [n, i] = t;
          e._emit(n, i);
        }),
        e.call("startStateSync");
    });
  const Vi = bt(),
    Ri = (e) =>
      Vi
        ? { width: "100%", height: "100%" }
        : "modern" === e.__unsafeProperties.group.theme.name
        ? { width: "400px", height: "465px" }
        : { width: "392px", height: "714px" },
    Gi = (e, t) =>
      Object.keys(e.properties.license).some((n) => e.properties.license[n][t]),
    Ui = (e, t, n) => {
      const i = rt(t, Vi);
      return !e && n
        ? { [ot(t, Vi)]: "0", bottom: i.y + "px", maxHeight: "100%" }
        : Vi && e
        ? { [ot(t, Vi)]: "0", bottom: "0", maxHeight: "100%" }
        : {
            [ot(t, Vi)]: i.x + "px",
            bottom: i.y + "px",
            maxHeight: "calc(100% - " + i.y + "px)",
          };
    },
    Ji = (e) => e.style.setProperty("transition", "none", "important"),
    Xi = (e) => {
      const t = document.createElement("div");
      return (
        ye(
          ((e) => ({
            "aria-live": e,
            id: tt(e),
            tabIndex: -1,
            style: {
              "clip-path": "rect(0px, 0px, 0px, 0px)",
              height: "1px",
              width: "1px",
              margin: "-1px",
              overflow: "hidden",
              "white-space": "nowrap",
              border: "0px",
              padding: "0px",
              position: "absolute",
            },
          }))(e),
          t
        ),
        t
      );
    },
    Yi = (e, t) => {
      const n = Ce("div", Je),
        i = rt(e, Vi),
        o = Ui(t, e),
        { width: r, height: a } = Ri(e);
      return we({ width: r, height: a, [ot(e, Vi)]: i.x + "px", ...o }, n), n;
    },
    $i = (e, t, n, i, o, r, a) => {
      var s, c;
      let d = Ee(
        W({
          license_id: t.license,
          group: t.group,
          embedded: 1,
          widget_version: 3,
          initial_view: t.initialView,
          unique_groups: Number(t.uniqueGroups),
          ...(!!i && { custom_identity_provider: 1 }),
          ...(!!o && { use_parent_storage: 1 }),
          ...(!!r && { features: r }),
          ...("openwidget" === a ? { organizationId: t.organizationId } : {}),
        })
      );
      pn();
      const l = {
          kill() {
            this._emit("widget_resize", {
              size: { width: "0px", height: "0px" },
            }),
              this.unbind(),
              e.custom || xe(e.element);
          },
          applyHiddenStyles() {
            we(Ge, e.element);
          },
          isFocused: () => !!document.hasFocus && document.hasFocus(),
          resize(t) {
            let {
              width: i,
              height: o,
              maximized: r,
              ignoreHorizontalOffset: a,
            } = void 0 === t ? {} : t;
            const s = { width: i, height: o },
              c = Ui(r, n, a);
            we({ ...s, ...c }, e.element);
            const d = ke(["width", "height"], e.element);
            this._emit("widget_resize", { size: s, computedSize: d });
          },
          show() {
            we(Ue, e.element);
          },
          hide() {
            this.call("hide");
          },
          focusMinimized() {
            const e = document.getElementById(Fe);
            if (e && e.contentDocument) {
              const t = e.contentDocument.querySelector("button");
              t && t.focus();
            }
          },
          minimize() {
            this.call("minimize");
          },
          maximize(e) {
            const { activeElement: t } = document,
              n =
                window.event && window.event.isTrusted
                  ? window.event.type
                  : null,
              i = () => {
                t.removeEventListener("blur", i),
                  this.emit("host_focus_shifted");
              };
            t.addEventListener("blur", i), this.call("maximize", n, e);
          },
          unbind() {
            this.hide(),
              this.destroy(),
              this._emit("unbind"),
              this.off(),
              (this.call = ne),
              Object.keys(l).forEach((e) => {
                this[e] = ne;
              });
          },
          callIdentityProvider: (e) => (null == i ? void 0 : i[e]()),
          callParentStorageMethod(e) {
            for (
              var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
              t > i;
              i++
            )
              n[i - 1] = arguments[i];
            return null == o ? void 0 : o[e].apply(o, n);
          },
          applyFramesStyle(e) {
            let { minimizedFrameStyle: t, maximizedFrameStyle: n } = e;
            const i = document.getElementById(Be),
              o = document.getElementById(Fe);
            i && we(n, i), o && we(t, o);
          },
          setLiveAnnouncerMessage(e) {
            let { message: t, ariaLevel: n } = e;
            const i = document.getElementById(tt(n));
            i
              ? (i.textContent = t)
              : console.error(
                  '[LiveChat] Aria announcer element with level "' +
                    n +
                    '" not found'
                );
          },
          renderCrossFrameMarkup(t) {
            let [n, i] = t,
              o = document.getElementById(Fe);
            o ||
              ((o = document.createElement("iframe")),
              ye({ ...et, title: "openwidget" === a ? Re : Ve }, o),
              e.element.appendChild(o),
              e.element.appendChild(Xi("polite")),
              e.element.appendChild(Xi("assertive")),
              o.contentDocument.fonts.ready
                .then(() => this.emit("minimized_frame_fonts_ready"))
                .catch(ne)),
              (function (e, t, n, i) {
                var o;
                const r = n.contentDocument,
                  a = null != (o = i.state.application.language) ? o : "en";
                if (null === r)
                  throw Error(
                    "Parameter `frame` needs to be inserted into any document before rendering"
                  );
                kt()
                  ? ((r.documentElement.lang = a),
                    (r.head.innerHTML = e),
                    (r.body.innerHTML = t))
                  : (r.open(),
                    r.write(
                      '\n\t\t\t<!DOCTYPE html>\n\t\t\t<html lang="' +
                        a +
                        '">\n\t\t\t\t<head>' +
                        e +
                        "</head>\n\t\t\t\t<body>" +
                        t +
                        "</body>\n\t\t\t</html>\n\t\t"
                    ),
                    r.close());
                const s = r.documentElement,
                  c = se(s.querySelectorAll("[" + Kt + "]"));
                for (const e of c) {
                  const t = e.getAttribute(Kt);
                  if ("string" == typeof t)
                    for (const n of t.split(";")) {
                      const [t, o] = n.split(":");
                      t &&
                        o &&
                        (e.removeAttribute(Kt),
                        e.addEventListener(t, (n) => {
                          var r, a, s, c, d, l, u, p, m, h;
                          n.stopPropagation();
                          const f = {
                            type: n.type,
                            bubbles: !0,
                            isTrusted: n.isTrusted,
                            cancelBubble: n.cancelBubble,
                            cancelable: n.cancelable,
                            composed: n.composed,
                            defaultPrevented: n.defaultPrevented,
                            eventPhase: n.eventPhase,
                            timeStamp: n.timeStamp,
                            currentTarget: {
                              value:
                                null == (r = n.currentTarget)
                                  ? void 0
                                  : r.value,
                              checked:
                                null == (a = n.currentTarget)
                                  ? void 0
                                  : a.checked,
                              disabled:
                                null == (s = n.currentTarget)
                                  ? void 0
                                  : s.disabled,
                              draggable:
                                null == (c = n.currentTarget)
                                  ? void 0
                                  : c.draggable,
                              hidden:
                                null == (d = n.currentTarget)
                                  ? void 0
                                  : d.hidden,
                            },
                            target: {
                              value: null == (l = n.target) ? void 0 : l.value,
                              checked:
                                null == (u = n.target) ? void 0 : u.checked,
                              disabled:
                                null == (p = n.target) ? void 0 : p.disabled,
                              draggable:
                                null == (m = n.target) ? void 0 : m.draggable,
                              hidden:
                                null == (h = n.target) ? void 0 : h.hidden,
                            },
                          };
                          if ("click" === t && "copy" === e.getAttribute(Zt))
                            return (
                              (g = e.getAttribute(en)),
                              navigator.clipboard
                                ? navigator.clipboard.writeText(g).catch(Yt)
                                : Yt(g),
                              void (e.innerHTML = e.getAttribute(tn))
                            );
                          var g;
                          i.call("crossFrameEvent", o, JSON.stringify(f));
                        }));
                    }
                }
                const d = s.querySelector("[" + $t + "]");
                d &&
                  (d.removeAttribute($t), d.focus(), "INPUT" === d.nodeName) &&
                  d.setSelectionRange(d.value.length, d.value.length);
                const l = [],
                  u = se(s.querySelectorAll("[" + Qt + "]"));
                for (const e of u) {
                  const t = e.getAttribute(Qt);
                  if ("string" != typeof t) continue;
                  e.removeAttribute(Qt);
                  const [n, i] = t.split(":");
                  l.push((t) => {
                    var o;
                    let r =
                      null == (o = t.views) || null == (o = o.minimized)
                        ? void 0
                        : o[i.replace("!", "")];
                    "string" == typeof r && (r = r.trim()),
                      "disabled" === n && (r = i.includes("!") ? !r : !!r),
                      "boolean" == typeof r
                        ? e.toggleAttribute(n, r)
                        : r
                        ? e.setAttribute(n, r)
                        : e.removeAttribute(n);
                  });
                }
                l.forEach((e) => e(i.state)),
                  i.off("state_diff", nn),
                  (nn = (e) => {
                    var t;
                    null != e &&
                      null != (t = e.views) &&
                      t.minimized &&
                      l.forEach((t) => t(e));
                  }),
                  i.on("state_diff", nn);
              })(n, i, o, this);
          },
          getMinimizedDimensions() {
            const e = document
              .getElementById(Fe)
              .contentDocument.querySelector('[role="main"]');
            return ke(["width", "height"], e);
          },
          callElementMethod(e) {
            var t, n;
            let [i, o, ...r] = e;
            null ==
              (t = document
                .getElementById(Fe)
                .contentDocument.querySelector(i)) ||
              null == (n = t[o]) ||
              n.call.apply(n, [t].concat(r));
          },
          getElementProperties(e) {
            let [t, n] = e;
            const i = document.getElementById(Fe),
              o = i && i.contentDocument.querySelector(t);
            return o ? ie(n, o) : {};
          },
          setTitleNotification(e) {
            const t = mn();
            e ? t.setTitleNotification(e) : t.clearTitleNotification();
          },
        },
        u = t.iframeAddress + "?" + d,
        p = new MutationObserver((t) =>
          t.forEach((t) => {
            const n = H(
              (e) => "IFRAME" === e.tagName && e.getAttribute("src") === u,
              t.addedNodes
            );
            n &&
              ((e, t, n) => {
                ye({ ...Ze, title: "openwidget" === n ? Re : Ve }, t),
                  e.custom || we(Qe, t);
              })(e, n, a);
          })
        );
      p.observe(e.element, { childList: !0 });
      let m = 1520 === t.license || !1;
      if ("openwidget" === a) {
        var h;
        const e = !!(null == (h = n.features.find((e) => "forms" === e.name)) ||
        null == (h = h.properties) ||
        null == (h = h.templates)
          ? void 0
          : h.bugreport);
        m = m || e;
      }
      return new In({
        container: e.element,
        url: u,
        methods: l,
        iframeAllowedProperties: on({
          allowAutoplay: !0,
          allowVideoConferencing: Gi(n, "microphone"),
          allowClipboardWrite: Gi(n, "clipboard_write"),
          allowDisplayCapture: m,
        }),
        model: {
          ...t,
          fullWidth: null == (s = e.size) ? void 0 : s.width,
          fullHeight: null == (c = e.size) ? void 0 : c.height,
          serverConfig: n,
          parentWidth: window.innerWidth,
          parentHeight: window.innerHeight,
          defaultWidget: a,
        },
      })
        .then((e) => Promise.all([e, Fi(e)]))
        .then((e) => {
          let [t] = e;
          return p.disconnect(), t;
        });
    },
    Ki = (e, t, n, i, a, s) => {
      e.call("storeMethod", ["setLocalization", i]),
        ((e) => {
          let t = !1,
            n = null;
          function i(t) {
            (e.state.application.visibility.interactionModality === t &&
              t === n) ||
              (e.call("setInteractionModality", t), (n = t));
          }
          function o(e) {
            (t = !0),
              (function (e) {
                const t = "Tab" === e.key && e.shiftKey;
                return (
                  [
                    "Tab",
                    " ",
                    "Enter",
                    "ArrowUp",
                    "ArrowDown",
                    "ArrowLeft",
                    "ArrowRight",
                    "Home",
                    "End",
                    "PageUp",
                    "PageDown",
                  ].includes(e.key) || t
                );
              })(e) && i("keyboard");
          }
          function r(e) {
            i("pointer"),
              ("mousedown" !== e.type && "pointerdown" !== e.type) || (t = !0);
          }
          function a(e) {
            e.target !== window &&
              e.target !== document &&
              (t || i("keyboard"), (t = !1));
          }
          function s() {
            t = !1;
          }
          document.addEventListener("keydown", o, !0),
            document.addEventListener("keyup", o, !0),
            window.addEventListener("focus", a, !0),
            window.addEventListener("blur", s, !1),
            "undefined" != typeof PointerEvent
              ? (document.addEventListener("pointerdown", r, !0),
                document.addEventListener("pointermove", r, !0),
                document.addEventListener("pointerup", r, !0))
              : (document.addEventListener("mousedown", r, !0),
                document.addEventListener("mousemove", r, !0),
                document.addEventListener("mouseup", r, !0));
        })(e),
        n.custom || ti(n.element, () => Ct(e.state, "hidden")),
        Vi || "wix" === t.integrationName || ni(e, a, i),
        Ji(e.frame),
        (function (e, t, n) {
          Li(e, t, n),
            ("LiveChatWidget" in window || "OpenWidget" in window) &&
              Mi(e, t, n);
        })(e, t, a),
        Vn(e, t),
        d(
          Sn(
            e,
            () => (
              ((e) => {
                let t = !1;
                e.on("iframe_sound_unlocked", () => (t = !0)),
                  vt().then((n) => {
                    t ||
                      (e.emit("bridge_sound_unlocked"),
                      e.on("add_event", (t) => {
                        let { event: i } = t;
                        ve(e.state, "muted") ||
                          (((e, t) =>
                            "system" !== e.author &&
                            !e.properties.welcomeMessage &&
                            e.author !== t &&
                            "custom" !== e.type)(i, ge(e.state)) &&
                            n(at));
                      }),
                      e.on("reaction_received", (t) => {
                        let { event: i } = t;
                        ve(e.state, "muted") ||
                          (ge(e.state) === i.author && n(at));
                      }));
                  });
              })(e),
              h
            )
          ),
          r(ne)
        ),
        "wix" === t.integrationName
          ? ((e) => {
              xn.addEventListener(xn.Events.PAGE_NAVIGATION, () => {
                Cn().then((t) =>
                  e.call("storeMethod", ["setApplicationState", { page: t }])
                );
              });
            })(e)
          : (Di(e),
            "openwidget" === s &&
              (fn(e),
              ((e) => {
                const t = (t) => ln(t, e);
                d(
                  an(e, (e) => e.application.readyState),
                  o((e) => e === qt),
                  k(1),
                  r(() => {
                    document.addEventListener("click", t);
                  })
                ),
                  d(
                    c(e, "unbind"),
                    r(() => {
                      document.removeEventListener("click", t);
                    })
                  );
              })(e))),
        ii(e),
        "livechat" === s &&
          ((e, t) => {
            if ("1520" !== e.license) return;
            if (!("documentPictureInPicture" in window)) return;
            let n = null,
              i = ve(t.state).pipConsent;
            const o = Ee(
                W({
                  license_id: e.license,
                  group: e.group,
                  unique_groups: Number(e.uniqueGroups),
                  pip_mode: 1,
                })
              ),
              r = e.iframeAddress + "?" + o;
            window.addEventListener("visibilitychange", () => {
              if (!document.hidden || "deny" === i || "dismissed" === i)
                return void (n && n.close());
              const e = pe(t.state, "liveChatChatId").active,
                o = "maximized" === ve(t.state).visibility.state;
              if (!e || !o) return;
              const a = window.documentPictureInPicture.window;
              if (a) return void a.focus();
              const s = {
                width: 360,
                height: 300,
                preferInitialWindowPlacement: !0,
              };
              "allow" === i && (s.preferInitialWindowPlacement = !1),
                t.call("logInfo", "picture_in_picture_window_requested", {
                  user_consent: i,
                }),
                window.documentPictureInPicture
                  .requestWindow(s)
                  .then((e) => {
                    t.call("logInfo", "picture_in_picture_window_opened", {
                      user_consent: i,
                    }),
                      (n = e);
                    const o = e.document.createElement("style");
                    (o.textContent =
                      "\n  body {\n\t\tfont-family: system-ui, sans-serif;\n\t\tbackground-color: #202124;\n\t\tcolor: #fff;\n\t\t-webkit-font-smoothing: antialiased;\n\t}\n\n\t* {\n\t  box-sizing: border-box;\n\t}\n\n\th1 {\n\t  font-size: 16px;\n\t\tmargin-top: 0;\n\t}\n\n\t#container {\n\t  display: grid;\n\t\tplace-content: center;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tpadding: 20px;\n\t}\n\n\t#allow-button {\n\t  background-color: #fff;\n\t\tcolor: #000;\n\t}\n\n\tbutton {\n\t  font-family: inherit;\n\t\tappearance: none;\n\t\tborder: none;\n\t\tborder-radius: 6px;\n\t\tbackground-color: #858585;\n\t\tdisplay: block;\n\t\tmargin: 5px 0;\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t\tfont-size: inherit;\n\t\tfont-weight: bold;\n\t\tpadding: 15px;\n\t\tcursor: pointer;\n\t}\n\n\tiframe {\n\t  position: fixed;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tborder: none;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n"),
                      e.document.head.append(o),
                      n.addEventListener("pagehide", () => {
                        document.hidden &&
                          "allow" === i &&
                          ((i = "dismissed"), t.call("setPipConsent", null));
                      }),
                      i ||
                        ((e, t, n) => {
                          const i = e.document.createElement("div");
                          i.id = "container";
                          const o = e.document.createElement("h1"),
                            r = e.document.createElement("p"),
                            a = e.document.createElement("button");
                          (a.id = "allow-button"), (a.textContent = "Allow");
                          const s = e.document.createElement("button");
                          (s.textContent = "Deny"),
                            (o.textContent = "LiveChat wants to"),
                            (r.textContent =
                              "Enter picture-in-picture automatically, so you can use it on top of other tabs and windows."),
                            i.append(o, r, a, s),
                            e.document.body.append(i),
                            e.document.body.addEventListener("click", (e) => {
                              e.target === a && t(), e.target === s && n();
                            });
                        })(
                          e,
                          () => {
                            (i = "allow"),
                              t.call("setPipConsent", "allow"),
                              e && ei(r, e),
                              t.call(
                                "logInfo",
                                "picture_in_picture_consent_allowed"
                              );
                          },
                          () => {
                            (i = "deny"),
                              t.call("setPipConsent", "deny"),
                              null == e || e.close(),
                              t.call(
                                "logInfo",
                                "picture_in_picture_consent_denied"
                              );
                          }
                        ),
                      "allow" === i && ei(r, e);
                  })
                  .catch(ne);
            });
          })(t, e);
      t.actingAsDirectLink ||
        n.custom ||
        (function (e) {
          d(
            an(e, (e) => Ct(e, "hidden")),
            y(1),
            r((t) => {
              t ? e.applyHiddenStyles() : e.show();
            })
          );
        })(e),
        nt(e),
        (function (e) {
          const t = () => {
            setTimeout(() => {
              document.addEventListener("touchstart", ne),
                setTimeout(() => {
                  document.removeEventListener("touchstart", ne);
                }, 500);
            }, 500);
          };
          window.addEventListener("orientationchange", t);
          const n = () => {
            e.off("unbind", n),
              window.removeEventListener("orientationchange", t);
          };
          e.on("unbind", n);
        })(e),
        Zn(e, a),
        Vi && ji(e),
        Wi(e),
        e.on("rich_greeting_button_clicked", (e) => {
          let { button: t } = e;
          "url" === t.type &&
            Ai.navigate(t.value, "current" === t.target ? "_parent" : "_blank");
        }),
        e.on("open_in_new_tab", (e) => {
          Ai.navigate(e);
        }),
        e.on("register_exit_intent_listener", () => {
          const t = ((e, t) => {
            const n = (n) => {
              (n.currentTarget && n.relatedTarget) ||
                (e.call("storeMethod", ["emit", "exit_intent_detected"]), t());
            };
            return (
              window &&
                (li && window.removeEventListener("mouseout", li),
                window.addEventListener("mouseout", n),
                (li = n)),
              () => {
                window && window.removeEventListener("mouseout", n);
              }
            );
          })(e, () => {
            t();
          });
        }),
        e.on("apply_exit_intent_shade", () => {
          ((e, t) => {
            t.call("storeMethod", [
              "setApplicationState",
              { isExitIntentShadeDisplayed: !0 },
            ]);
            const n = document.createElement("div");
            (n.id = si),
              we(
                ((e) => ({
                  position: "fixed",
                  bottom: "0",
                  [e]: "0",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to " +
                    ("left" === e ? "right" : "left") +
                    " top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
                  zIndex: 999999,
                  "pointer-events": "none",
                  opacity: 0,
                  transition: "opacity 100ms ease-in-out",
                }))(e),
                n
              ),
              document.body.appendChild(n),
              setTimeout(() => {
                n.style.opacity = "1";
              }, 0),
              ci && window.removeEventListener("mouseover", ci),
              (ci = () => di(t)),
              window.addEventListener("mouseover", ci);
          })(ot(a, !1), e);
        }),
        e.on("remove_exit_intent_shade", () => {
          di(e);
        });
    };
  var Qi = (e, t) => {
    window.performance &&
      "function" == typeof window.performance.mark &&
      window.performance.mark("lc_bridge_init");
    let n = !1,
      i = e;
    (window.LC_API = window.LC_API || {}), (window.LC_API.is_loaded = () => n);
    const {
        region: r,
        licenseId: a,
        organizationId: s,
        requestedGroupId: c,
        actingAsDirectLink: l,
        skipCodeInstallationTracking: p,
        integrationName: m,
        productName: h,
        customIdentityProviderInitializer: f,
        templateId: g,
      } = t,
      _ = {
        licenseId: a,
        skipCodeInstallationTracking: p,
        productName: h,
        integrationName: m,
        channelType: l ? "direct_link" : "code",
        url: rn(document.location + ""),
        ...("number" == typeof c && { groupId: c }),
        ...("string" == typeof r && { region: r }),
      },
      v =
        "livechat" === i
          ? ((e) =>
              Vt(e).then((t) => {
                return Promise.all([
                  t,
                  ((n = {
                    organizationId: t.organizationId,
                    licenseId: e.licenseId,
                    groupId: t.groupId,
                    region: t.region,
                    version: t.configVersion,
                  }),
                  jt(Ft("get_configuration", n), {
                    callbackName: "lc_static_config",
                    query: {
                      organization_id: n.organizationId,
                      version: n.version,
                      ...("number" == typeof n.groupId && {
                        group_id: n.groupId,
                      }),
                    },
                  }).then((e) => Ut(e))),
                ]).then((e) => {
                  let [t, n] = e;
                  return { ...t, ...n };
                });
                var n;
              }))(_).catch((e) => {
              if (
                "DEFAULT_WIDGET_NOT_LIVECHAT" === e.code &&
                "openwidget" === e.defaultWidget
              )
                return (
                  (i = e.defaultWidget),
                  (window.__ow = window.__ow || {}),
                  (window.__ow.organizationId = e.organizationId),
                  (window.OpenWidget = { ...window.LiveChatWidget }),
                  Xt(e.organizationId, m, null, p)
                );
              throw e;
            })
          : Xt(s, m, g, p, _.url);
    Promise.all([v, "wix" === m ? Cn() : hn(), Ie()])
      .then((e) => {
        let [r, a, c] = e;
        if (
          !ui(
            r.allowedDomains,
            window.top === window ? window.location.hostname : document.referrer
          )
        )
          return void console.log(
            "[LiveChat] Current domain is not added to the allowed domains. LiveChat has been disabled."
          );
        if ("openwidget" === i && !1 === r.isWidgetEnabled) return;
        if (
          Vi &&
          r.__unsafeProperties.group.disabledOnMobile &&
          !t.actingAsDirectLink
        )
          return;
        const l = Kn(),
          p = ((e) => {
            if (null === e) return null;
            const t = e();
            return "object" != typeof t ||
              "function" != typeof t.getToken ||
              "function" != typeof t.getFreshToken ||
              "function" != typeof t.hasToken ||
              "function" != typeof t.invalidate
              ? (console.error(
                  "custom_identity_provider() does not return proper handlers. ({getFreshToken: () => Promise<Token>, getToken: () => Promise<Token>, hasToken: () => Promise<boolean>, invalidate: () => Promise<void> })"
                ),
                null)
              : t;
          })(f),
          m = window.localStorage,
          h = ai(t, a, r),
          g = ((e, t) =>
            e.customContainer
              ? { custom: !0, element: e.customContainer }
              : {
                  custom: !1,
                  element: Yi(t, e.actingAsDirectLink),
                  size: Ri(t),
                })(t, r),
          _ = {};
        let v = !1;
        const w = pi("on_before_load"),
          y = pi("on_after_load");
        w((e) => {
          (e.disable_sounds = ne),
            (e.mobile_is_detected = () => Vi),
            (e.chat_running = () => !1),
            (e.visitor_engaged = () => !1),
            (e.agents_are_available = () =>
              -1 !== r.onlineGroupIds.indexOf(r.groupId)),
            (e.get_window_type = () => "embedded"),
            (e.hide_chat_window = Rn(h) ? ne : () => (v = !0)),
            (e.set_visitor_name = (e) => (_.name = xi(e))),
            (e.set_visitor_email = (e) => (_.email = xi(e))),
            (e.set_custom_variables = (e) => (_.properties = e ? bi(e) : {})),
            (e.update_custom_variables = (e) => {
              e && (_.properties = { ..._.properties, ...bi(e) });
            });
        });
        const b = {
          ...h,
          ...(r.licenseId && { license: r.licenseId }),
          customer: { ...h.customer, ..._ },
          hidden: h.hidden || v,
          ...(s ? { organizationId: s } : { organizationId: r.organizationId }),
        };
        var I;
        g.custom || c.appendChild(g.element),
          window.performance &&
            "function" == typeof window.performance.mark &&
            window.performance.mark("lc_bind_child"),
          Promise.all([
            $i(g, b, r, p, m, null, i),
            "openwidget" === i
              ? Promise.resolve(r.localization)
              : ((I = {
                  organizationId: b.organizationId,
                  licenseId: b.license,
                  groupId: b.group,
                  region: b.region,
                  version: r.localizationVersion,
                  language: r.__unsafeProperties.group.language,
                }),
                jt(Ft("get_localization", I), {
                  callbackName: "lc_localization",
                  query: {
                    organization_id: I.organizationId,
                    version: I.version,
                    language: I.language,
                    ...("number" == typeof I.groupId && {
                      group_id: I.groupId,
                    }),
                  },
                }).then((e) => Q((e) => e.toLowerCase(), e))),
          ])
            .then((e) => {
              let [t, n] = e;
              return (
                g.custom || Ji(g.element),
                Ki(t, b, g, n, r, i),
                d(
                  an(t, (e) => ve(e, "readyState")),
                  o((e) => e === qt),
                  k(1),
                  u(() => t),
                  C
                )
              );
            })
            .then((e) => {
              window.performance &&
                "function" == typeof window.performance.mark &&
                window.performance.mark("lc_bridge_ready"),
                l &&
                  l.getLogs().then((t) => {
                    e.call("logInfo", "loading_time_measured", W(t));
                  }),
                y(() => (n = !0)),
                "openwidget" === i ||
                  Math.floor(10 * Math.random()) ||
                  setTimeout(() => {
                    Jt({
                      organizationId: b.organizationId,
                      licenseId: h.license,
                      groupId: h.group,
                      region: h.region,
                      version: r.localizationVersion,
                      language: r.__unsafeProperties.group.language,
                    }).catch(() => {
                      e.call("logInfo", "potential_csp_problem", {
                        url: window.location + "",
                      });
                    });
                  }, 1e4);
            });
      })
      .catch((e) => {
        switch (null == e ? void 0 : e.code) {
          case "ACCESS_NOT_RESOLVED":
          case "CUSTOMER_BANNED":
            return void console.warn("[LiveChat] " + e.message);
          default:
            throw e;
        }
      });
  };
  window.__ow_inited ||
    ((window.__ow_inited = !0),
    "msCrypto" in window
      ? console.error("[OpenWidget] We don't support Internet Explorer")
      : Qi("openwidget", {
          gaParams: {},
          customIdentityProviderInitializer: null,
          integrationName: window.__ow.integration_name,
          organizationId: window.__ow.organizationId,
          initMaximized: !0 === window.__ow.init_maximized,
          initialView:
            "string" == typeof window.__ow.initial_view
              ? window.__ow.initial_view
              : null,
          productName: window.__ow.product_name,
          templateId:
            "string" == typeof window.__ow.template_id &&
            window.__ow.template_id !== window.__ow.organizationId
              ? window.__ow.template_id
              : null,
          customContainer: window.__ow.custom_container || null,
          skipCodeInstallationTracking: !!window.__ow.test,
          iframeAddress: null,
        }));
})();
