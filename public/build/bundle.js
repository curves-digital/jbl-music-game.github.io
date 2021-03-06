var app = (function () {
  "use strict";
  function e() {}
  const t = (e) => e;
  function n(e) {
    return e();
  }
  function c() {
    return Object.create(null);
  }
  function r(e) {
    e.forEach(n);
  }
  function a(e) {
    return "function" == typeof e;
  }
  function o(e, t) {
    return e != e
      ? t == t
      : e !== t || (e && "object" == typeof e) || "function" == typeof e;
  }
  const l = "undefined" != typeof window;
  let s = l ? () => window.performance.now() : () => Date.now(),
    i = l ? (e) => requestAnimationFrame(e) : e;
  const g = new Set();
  function d(e) {
    g.forEach((t) => {
      t.c(e) || (g.delete(t), t.f());
    }),
      0 !== g.size && i(d);
  }
  function u(e, t) {
    e.appendChild(t);
  }
  function p(e, t, n) {
    e.insertBefore(t, n || null);
  }
  function h(e) {
    e.parentNode.removeChild(e);
  }
  function m(e) {
    return document.createElement(e);
  }
  function f(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e);
  }
  function v(e) {
    return document.createTextNode(e);
  }
  function w() {
    return v(" ");
  }
  function b() {
    return v("");
  }
  function C(e, t, n, c) {
    return e.addEventListener(t, n, c), () => e.removeEventListener(t, n, c);
  }
  function y(e, t, n) {
    null == n
      ? e.removeAttribute(t)
      : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }
  function $(e, t) {
    (t = "" + t), e.wholeText !== t && (e.data = t);
  }
  const x = new Set();
  let B,
    D = 0;
  function k(e, t) {
    const n = (e.style.animation || "").split(", "),
      c = n.filter(
        t ? (e) => e.indexOf(t) < 0 : (e) => -1 === e.indexOf("__svelte")
      ),
      r = n.length - c.length;
    r &&
      ((e.style.animation = c.join(", ")),
      (D -= r),
      D ||
        i(() => {
          D ||
            (x.forEach((e) => {
              const t = e.__svelte_stylesheet;
              let n = t.cssRules.length;
              for (; n--; ) t.deleteRule(n);
              e.__svelte_rules = {};
            }),
            x.clear());
        }));
  }
  function _(e) {
    B = e;
  }
  function E() {
    if (!B) throw new Error("Function called outside component initialization");
    return B;
  }
  function M(e) {
    E().$$.on_mount.push(e);
  }
  function L(e) {
    E().$$.on_destroy.push(e);
  }
  const H = [],
    V = [],
    z = [],
    I = [],
    S = Promise.resolve();
  let A = !1;
  function N(e) {
    z.push(e);
  }
  let T = !1;
  const P = new Set();
  function G() {
    if (!T) {
      T = !0;
      do {
        for (let e = 0; e < H.length; e += 1) {
          const t = H[e];
          _(t), j(t.$$);
        }
        for (_(null), H.length = 0; V.length; ) V.pop()();
        for (let e = 0; e < z.length; e += 1) {
          const t = z[e];
          P.has(t) || (P.add(t), t());
        }
        z.length = 0;
      } while (H.length);
      for (; I.length; ) I.pop()();
      (A = !1), (T = !1), P.clear();
    }
  }
  function j(e) {
    if (null !== e.fragment) {
      e.update(), r(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]),
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(N);
    }
  }
  let U;
  function J(e, t, n) {
    e.dispatchEvent(
      (function (e, t) {
        const n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, !1, !1, t), n;
      })(`${t ? "intro" : "outro"}${n}`)
    );
  }
  const R = new Set();
  let O;
  function W() {
    O = { r: 0, c: [], p: O };
  }
  function K() {
    O.r || r(O.c), (O = O.p);
  }
  function F(e, t) {
    e && e.i && (R.delete(e), e.i(t));
  }
  function Z(e, t, n, c) {
    if (e && e.o) {
      if (R.has(e)) return;
      R.add(e),
        O.c.push(() => {
          R.delete(e), c && (n && e.d(1), c());
        }),
        e.o(t);
    }
  }
  const q = { duration: 0 };
  function Y(n, c, r) {
    let o,
      l,
      u = c(n, r),
      p = !1,
      h = 0;
    function f() {
      o && k(n, o);
    }
    function v() {
      const {
        delay: c = 0,
        duration: r = 300,
        easing: a = t,
        tick: v = e,
        css: w,
      } = u || q;
      w &&
        (o = (function (e, t, n, c, r, a, o, l = 0) {
          const s = 16.666 / c;
          let i = "{\n";
          for (let e = 0; e <= 1; e += s) {
            const c = t + (n - t) * a(e);
            i += 100 * e + `%{${o(c, 1 - c)}}\n`;
          }
          const g = i + `100% {${o(n, 1 - n)}}\n}`,
            d = `__svelte_${(function (e) {
              let t = 5381,
                n = e.length;
              for (; n--; ) t = ((t << 5) - t) ^ e.charCodeAt(n);
              return t >>> 0;
            })(g)}_${l}`,
            u = e.ownerDocument;
          x.add(u);
          const p =
              u.__svelte_stylesheet ||
              (u.__svelte_stylesheet = u.head.appendChild(m("style")).sheet),
            h = u.__svelte_rules || (u.__svelte_rules = {});
          h[d] ||
            ((h[d] = !0),
            p.insertRule(`@keyframes ${d} ${g}`, p.cssRules.length));
          const f = e.style.animation || "";
          return (
            (e.style.animation = `${
              f ? `${f}, ` : ""
            }${d} ${c}ms linear ${r}ms 1 both`),
            (D += 1),
            d
          );
        })(n, 0, 1, r, c, a, w, h++)),
        v(0, 1);
      const b = s() + c,
        C = b + r;
      l && l.abort(),
        (p = !0),
        N(() => J(n, !0, "start")),
        (l = (function (e) {
          let t;
          return (
            0 === g.size && i(d),
            {
              promise: new Promise((n) => {
                g.add((t = { c: e, f: n }));
              }),
              abort() {
                g.delete(t);
              },
            }
          );
        })((e) => {
          if (p) {
            if (e >= C) return v(1, 0), J(n, !0, "end"), f(), (p = !1);
            if (e >= b) {
              const t = a((e - b) / r);
              v(t, 1 - t);
            }
          }
          return p;
        }));
    }
    let w = !1;
    return {
      start() {
        w ||
          (k(n),
          a(u)
            ? ((u = u()),
              (U ||
                ((U = Promise.resolve()),
                U.then(() => {
                  U = null;
                })),
              U).then(v))
            : v());
      },
      invalidate() {
        w = !1;
      },
      end() {
        p && (f(), (p = !1));
      },
    };
  }
  function Q(e) {
    e && e.c();
  }
  function X(e, t, c, o) {
    const { fragment: l, on_mount: s, on_destroy: i, after_update: g } = e.$$;
    l && l.m(t, c),
      o ||
        N(() => {
          const t = s.map(n).filter(a);
          i ? i.push(...t) : r(t), (e.$$.on_mount = []);
        }),
      g.forEach(N);
  }
  function ee(e, t) {
    const n = e.$$;
    null !== n.fragment &&
      (r(n.on_destroy),
      n.fragment && n.fragment.d(t),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function te(e, t) {
    -1 === e.$$.dirty[0] &&
      (H.push(e), A || ((A = !0), S.then(G)), e.$$.dirty.fill(0)),
      (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
  }
  function ne(t, n, a, o, l, s, i = [-1]) {
    const g = B;
    _(t);
    const d = (t.$$ = {
      fragment: null,
      ctx: null,
      props: s,
      update: e,
      not_equal: l,
      bound: c(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(g ? g.$$.context : []),
      callbacks: c(),
      dirty: i,
      skip_bound: !1,
    });
    let u = !1;
    if (
      ((d.ctx = a
        ? a(t, n.props || {}, (e, n, ...c) => {
            const r = c.length ? c[0] : n;
            return (
              d.ctx &&
                l(d.ctx[e], (d.ctx[e] = r)) &&
                (!d.skip_bound && d.bound[e] && d.bound[e](r), u && te(t, e)),
              n
            );
          })
        : []),
      d.update(),
      (u = !0),
      r(d.before_update),
      (d.fragment = !!o && o(d.ctx)),
      n.target)
    ) {
      if (n.hydrate) {
        const e = (function (e) {
          return Array.from(e.childNodes);
        })(n.target);
        d.fragment && d.fragment.l(e), e.forEach(h);
      } else d.fragment && d.fragment.c();
      n.intro && F(t.$$.fragment),
        X(t, n.target, n.anchor, n.customElement),
        G();
    }
    _(g);
  }
  class ce {
    $destroy() {
      ee(this, 1), (this.$destroy = e);
    }
    $on(e, t) {
      const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        n.push(t),
        () => {
          const e = n.indexOf(t);
          -1 !== e && n.splice(e, 1);
        }
      );
    }
    $set(e) {
      var t;
      this.$$set &&
        ((t = e), 0 !== Object.keys(t).length) &&
        ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
  }
  const re = [];
  var ae = {
    classic: {
      genre: "Classic",
      title: "??????????????????????",
      backgroundImage: "images/bgs/classic.jpg",
      headphoneImage: "images/white.png",
      backgroundSoundKey: "bgClassic",
      tapValue: 1,
      maxScore: 10,
    },
    jazz: {
      genre: "jazz",
      title: "??????????",
      backgroundImage: "images/bgs/jazz.jpg",
      headphoneImage: "images/pink.png",
      backgroundSoundKey: "bgJazz",
      tapValue: 1,
      maxScore: 20,
    },
    rock: {
      genre: "rock",
      title: "????????????????",
      backgroundImage: "images/bgs/rock.jpg",
      headphoneImage: "images/blue.png",
      backgroundSoundKey: "bgRock",
      tapValue: 1,
      maxScore: 30,
    },
    pop: {
      genre: "pop",
      title: "????????????",
      backgroundImage: "images/bgs/pop.jpg",
      headphoneImage: "images/grey.png",
      backgroundSoundKey: "bgPop",
      tapValue: 1,
      maxScore: 40,
    },
    rap: {
      genre: "rap",
      title: "?????????? ????????????",
      backgroundImage: "images/bgs/rap.jpg",
      headphoneImage: "images/gold.png",
      backgroundSoundKey: "bgRap",
      tapValue: 1,
      maxScore: 50,
    },
    metal: {
      genre: "metal",
      title: "????????????????????",
      backgroundImage: "images/bgs/metal.jpg",
      headphoneImage: "images/black.png",
      backgroundSoundKey: "bgMetal",
      tapValue: 1,
      maxScore: 60,
    },
  };
  const oe = {
    countdownTick: { src: "sounds/countdownTick.mp3" },
    tap: { src: "sounds/buttonTap.mp3" },
    bgClassic: { src: "sounds/bg_classic.mp3" },
    bgJazz: { src: "sounds/bg_jazz.mp3" },
    bgRock: { src: "sounds/bg_rock.mp3" },
    bgPop: { src: "sounds/bg_pop.mp3" },
    bgRap: { src: "sounds/bg_rap.mp3" },
    bgMetal: { src: "sounds/bg_metal.mp3" },
    victory: { src: "sounds/victory.mp3" },
    defeat: { src: "sounds/defeat.mp3" },
  };
  let le = Object.keys(oe).length,
    se = 0;
  function ie() {
    (se += 1), se == le && ue.update((e) => ({ ...e, soundsReady: !0 }));
  }
  for (let [e, t] of Object.entries(oe)) {
    const e = new Audio();
    (e.preload = "auto"),
      e.addEventListener("canplaythrough", ie, !1),
      e.addEventListener(
        "error",
        () => {
          alert("??????-???? ?????????? ???? ??????! ???????????????????? ?????????????????????????? ????????????????");
        },
        !1
      ),
      (t.player = e),
      (t.player.preload = "auto"),
      (t.player.src = t.src),
      t.player.load();
  }
  const ge = [
      {
        title: "???? ?????? ???? ??????!",
        text:
          "????????????, ???????????????? ???????????? ?? ???????????????? ???????????? ???? ????????????. ?? JBL TUNE 225TWS ?? ?????????????? ?????? ???????????? ????????-?????????????? ?????????????????? ?????????? ???? ?????????? ???? ??????????????????: ?????? ?????????????? ????????????????.\n?????????????????? ?????? ???????",
      },
      {
        title: "??, ??????! ???????? ??????????????",
        text:
          "?? ?????????????????? ???????? ??????????????. ????????????, ?????? ???????? ???? JBL TUNE 225 TWS, ?????????????? ?????????? ???????????????????? ???????????????? ???? 5 ??????????, ?? ?? ???????????? ?????? ?? ?????? 25! ???????? ???????????????????? ??????????!",
      },
      {
        title: "?????? ????????????!",
        text:
          "??????????????, ???????????? ???????????? ???? ???? ????????????. ?? ?????? ?? JBL TUNE 225 TWS ?????? ???????????? - ?? ?????? ??????????????????, ???????????????????? ????????????, ?? ???????????? ???? ??????????????????. ??????????, ?????????????????",
      },
      {
        title: "????, ???????????? ?????????????? ???????????????? ???????????????? ???? ????????????",
        text:
          "?? ???????? ?? JBL TUNE 225 TWS ???????????? ?????????? ???? ???????????????????????? ????????????: ?????? ???????????????? ?? ???? ????????????, ???????????? ?????? ?? ???????????? ???????? ????????????????. ?????? ???????? ??????????????!",
      },
      {
        title: "?????? ??????????????!",
        text:
          "?????? ?? ???????????????????? ???? ????????????????????. ????????, ?????? ?????? ???????? ????  JBL TUNE 225 TWS: ?????? ?????????????????? ???????????????????????? ?? ???????????????????? ???? ???????? ???????????????????? Fast Pair ?? ???????????????????????? ???????????????????? ??????????. ???????? ?????????????????????? ?????? ??????!",
      },
    ],
    de = [
      {
        title: "?? ?????? ????????????????????!",
        text:
          "???? ????????-??-???????? ?????? JBL TUNE 225 TWS: ??????????????, ?? ?????????????? ???????????? ?? ?????????????????????? ?????????????????? JBL. ?????????????? ??????????????????, ???? ?????? ???? ?????? ????????????????: ???????????????? ???????????????? ?? ???????????????????? ???????????? ???????? ???? ???????????? ??????????????.",
      },
      {
        title: "???? ?????????????? ??????!",
        text:
          "???? ???????????? ?? ??????, ?????? ?? JBL TUNE 225 TWS ??? ?????????????????? ???????????????????????? ????????????????, ?????????????? ???????????????? ?? ???????????????? ???? 5 ?????????? ?????? ???????????????????? (?? ?? ???????????? ?????? ?? ?????? 25). ???????????????? ???????????????? ?? ???????????????????? ???????????????? ???? ???????????? ????????????.",
      },
      {
        title: "?????? ?????? ?????? ???????????????",
        text:
          "??????????????, ?? ???????? ???????? ?????????????? ??? ????????????????, JBL TUNE 225 TWS ???????? ???? ??????????????????, ?????? ???? ?????????????? ???????????????????? ???????????? ???????????????? ?? ???????????? ????????. ?????? ???????????????? ??????????, ???? ???? ???????????????? ???? ??????????????: ???????????????? ???????? ???? ???????????? ??????????????.",
      },
      {
        title: "???? ?????????????????? ??????????!",
        text:
          "?????? ????????????, ?????????? ?????? ??????????????????: ?????? ?? JBL TUNE 225 TWS ???????????? ???????? ??????????????????, ????????????????????. ?? ?????? ???????????????? ??????, ???? ??????????????. ???????????????????? ?????????????? ?????? ??????, ???????????? ???????????? ?????????????? ??? ?? ???? ???????????????? ???????????????? ????????????????.",
      },
      {
        title: "???????????? ??????????????????!",
        text:
          "?????? ?????? ????????! ???? ?????????????? ?????? ???????????? ?? ?????????? ??? ???????????????? ?????? ???? ?????????? JBL TUNE 225TWS ???????????????????????? ?? ?????????????????? ???? ???????? ???????????????????? Google Fast Pair. ????????????, ?????? ?? ???????????? ???????????? ?????????? ???? ??????????: ???????????????????? ?????????????? ?????? ??????.",
      },
      {
        title: "????????????????????!",
        text:
          "???? ???????????????? ???????? ?? ?????????????? ????????????????????. ?????????? ?????????????????? ???? ??????????: ???? ?? JBL TUNE 225TWS ?? ?????????????????????? ???????????? JBL, ?????????????? ???????????? ?? ?????????????????????? ?????????????????????? ?????? ???????????????????? ??????????. ???????????? ?????????????????????? ???????????? ???????????????",
      },
    ],
    ue = (function (t, n = e) {
      let c;
      const r = [];
      function a(e) {
        if (o(t, e) && ((t = e), c)) {
          const e = !re.length;
          for (let e = 0; e < r.length; e += 1) {
            const n = r[e];
            n[1](), re.push(n, t);
          }
          if (e) {
            for (let e = 0; e < re.length; e += 2) re[e][0](re[e + 1]);
            re.length = 0;
          }
        }
      }
      return {
        set: a,
        update: function (e) {
          a(e(t));
        },
        subscribe: function (o, l = e) {
          const s = [o, l];
          return (
            r.push(s),
            1 === r.length && (c = n(a) || e),
            o(t),
            () => {
              const e = r.indexOf(s);
              -1 !== e && r.splice(e, 1), 0 === r.length && (c(), (c = null));
            }
          );
        },
      };
    })({
      currentPage: "GAME_MENU_PAGE",
      levelNumber: null,
      levelProps: {},
      regenerateLevel: !0,
      totalTime: 60,
      timeLeft: 0,
      progressBarValue: 100,
      soundsReady: !1,
      score: 0,
      maxScore: 0,
    });
  function pe() {
    ue.update((e) => ({
      currentPage: "GAME_MENU_PAGE",
      levelNumber: null,
      levelProps: {},
      regenerateLevel: !0,
      totalTime: 60,
      timeLeft: 0,
      progressBarValue: 100,
      soundsReady: !0,
      score: 0,
      maxScore: 0,
    }));
  }
  function he(e) {
    ue.update((t) => {
      const n = t.levelProps.backgroundSoundKey;
      return n && oe[n].player.pause(), { ...t, currentPage: e };
    });
  }
  function me() {
    ue.update((e) => {
      const t = e.levelProps.backgroundSoundKey;
      return (
        t && oe[t].player.pause(),
        { ...e, currentPage: "GAME_PAUSE", isNewGame: !1 }
      );
    });
  }
  function fe() {
    ue.update((e) => {
      const t = e.levelProps.backgroundSoundKey;
      return (
        oe[t].player.play(),
        { ...e, currentPage: "GAME_PAGE", regenerateLevel: !0 }
      );
    });
  }
  function ve(e) {
    oe.tap.player.play(),
      e.isBad
        ? ue.update((e) => {
            const t = e.levelProps.backgroundSoundKey;
            return (
              oe[t].player.pause(),
              oe.defeat.player.play(),
              {
                ...e,
                currentPage: "GAME_END",
                regenerateLevel: !0,
                isVictory: !1,
              }
            );
          })
        : ue.update((e) => {
            const t = e.score + e.levelProps.tapValue;
            if (t >= e.maxScore) {
              const n = e.levelProps.backgroundSoundKey;
              return (
                n && oe[n].player.pause(),
                oe.victory.player.play(),
                {
                  ...e,
                  score: t,
                  currentPage: "GAME_END",
                  isNewGame: !0,
                  isVictory: !0,
                }
              );
            }
            return { ...e, score: t, regenerateLevel: !0 };
          });
  }
  function we(t) {
    let n, c, r, a, o, l, s, i, g, d, f, b, x, B;
    return {
      c() {
        (n = m("div")),
          (c = m("h1")),
          (r = v(t[2])),
          (o = w()),
          (l = m("div")),
          (s = m("div")),
          (i = m("h2")),
          (g = v(t[0])),
          (d = w()),
          (f = m("h2")),
          (b = v(t[1])),
          y(c, "class", (a = "huge _" + t[2])),
          y(i, "class", "heading2"),
          y(f, "class", "paragraph level"),
          y(s, "class", "div-block-4"),
          y(l, "class", "heading_wrap"),
          y(n, "class", "feature-card level");
      },
      m(e, a) {
        p(e, n, a),
          u(n, c),
          u(c, r),
          u(n, o),
          u(n, l),
          u(l, s),
          u(s, i),
          u(i, g),
          u(s, d),
          u(s, f),
          u(f, b),
          x || ((B = C(n, "click", t[4])), (x = !0));
      },
      p(e, [t]) {
        4 & t && $(r, e[2]),
          4 & t && a !== (a = "huge _" + e[2]) && y(c, "class", a),
          1 & t && $(g, e[0]),
          2 & t && $(b, e[1]);
      },
      i: e,
      o: e,
      d(e) {
        e && h(n), (x = !1), B();
      },
    };
  }
  function be(e, t, n) {
    let { genre: c } = t,
      { complexity: r } = t,
      { levelNumber: a } = t;
    function o(e) {
      he("GAME_TUTORIAL_PAGE"),
        ue.update((t) => ({
          ...t,
          levelNumber: e,
          levelProps: ae[c],
          maxScore: ae[c].maxScore,
        }));
    }
    return (
      (e.$$set = (e) => {
        "genre" in e && n(0, (c = e.genre)),
          "complexity" in e && n(1, (r = e.complexity)),
          "levelNumber" in e && n(2, (a = e.levelNumber));
      }),
      [c, r, a, o, () => o(a)]
    );
  }
  class Ce extends ce {
    constructor(e) {
      super(),
        ne(this, e, be, we, o, { genre: 0, complexity: 1, levelNumber: 2 });
    }
  }
  function ye(t) {
    let n, c, r, a, o, l, s, i, g, d, f, v, b, C, $, x, B;
    return (
      (l = new Ce({
        props: {
          genre: "classic",
          complexity: "??????????????????????",
          levelNumber: "1",
        },
      })),
      (i = new Ce({
        props: { genre: "jazz", complexity: "??????????", levelNumber: "2" },
      })),
      (d = new Ce({
        props: { genre: "rock", complexity: "????????????????", levelNumber: "3" },
      })),
      (v = new Ce({
        props: { genre: "pop", complexity: "????????????", levelNumber: "4" },
      })),
      (C = new Ce({
        props: { genre: "rap", complexity: "?????????? ????????????", levelNumber: "5" },
      })),
      (x = new Ce({
        props: { genre: "metal", complexity: "????????????????????", levelNumber: "6" },
      })),
      {
        c() {
          (n = m("div")),
            (c = m("div")),
            (r = m("h3")),
            (r.textContent = "???????????????? ??????????????"),
            (a = w()),
            (o = m("div")),
            Q(l.$$.fragment),
            (s = w()),
            Q(i.$$.fragment),
            (g = w()),
            Q(d.$$.fragment),
            (f = w()),
            Q(v.$$.fragment),
            (b = w()),
            Q(C.$$.fragment),
            ($ = w()),
            Q(x.$$.fragment),
            y(r, "class", "paragraph subheadline"),
            y(o, "class", "w-layout-grid grid-2"),
            y(c, "class", "hero centerd"),
            y(n, "id", "2nd"),
            y(n, "class", "section");
        },
        m(e, t) {
          p(e, n, t),
            u(n, c),
            u(c, r),
            u(c, a),
            u(c, o),
            X(l, o, null),
            u(o, s),
            X(i, o, null),
            u(o, g),
            X(d, o, null),
            u(o, f),
            X(v, o, null),
            u(o, b),
            X(C, o, null),
            u(o, $),
            X(x, o, null),
            (B = !0);
        },
        p: e,
        i(e) {
          B ||
            (F(l.$$.fragment, e),
            F(i.$$.fragment, e),
            F(d.$$.fragment, e),
            F(v.$$.fragment, e),
            F(C.$$.fragment, e),
            F(x.$$.fragment, e),
            (B = !0));
        },
        o(e) {
          Z(l.$$.fragment, e),
            Z(i.$$.fragment, e),
            Z(d.$$.fragment, e),
            Z(v.$$.fragment, e),
            Z(C.$$.fragment, e),
            Z(x.$$.fragment, e),
            (B = !1);
        },
        d(e) {
          e && h(n), ee(l), ee(i), ee(d), ee(v), ee(C), ee(x);
        },
      }
    );
  }
  class $e extends ce {
    constructor(e) {
      super(), ne(this, e, null, ye, o, {});
    }
  }
  function xe(t) {
    let n, c, a, o, l, s, i, g, d, f, b, x, B, D, k, _, E, M, L, H, V;
    return {
      c() {
        (n = m("div")),
          (c = m("div")),
          (o = w()),
          (l = m("div")),
          (s = m("h3")),
          (i = v(t[0])),
          (g = w()),
          (d = m("h3")),
          (f = v(t[1])),
          (b = v("/")),
          (x = v(t[2])),
          (B = w()),
          (D = m("div")),
          (k = m("div")),
          (k.textContent = "????????????????????"),
          (_ = w()),
          (E = m("div")),
          (E.textContent = "????????????"),
          (M = w()),
          (L = m("a")),
          (L.textContent = "???? ??????????????"),
          y(c, "class", "div-block-6"),
          y(c, "style", (a = `width: ${t[3]}%`)),
          y(s, "class", "heading2"),
          y(d, "class", "heading2 score"),
          y(l, "class", "score-wrap vertical"),
          y(k, "class", "button-hero screen\n            w-button"),
          y(E, "class", "button-hero screen w-button"),
          y(L, "href", "/"),
          y(
            L,
            "class",
            "button-hero screen w-button custom-white svelte-1xqqk6j"
          ),
          y(D, "class", "button-wrap"),
          y(n, "class", "container pause-screen"),
          y(n, "style", t[4]);
      },
      m(e, t) {
        p(e, n, t),
          u(n, c),
          u(n, o),
          u(n, l),
          u(l, s),
          u(s, i),
          u(l, g),
          u(l, d),
          u(d, f),
          u(d, b),
          u(d, x),
          u(n, B),
          u(n, D),
          u(D, k),
          u(D, _),
          u(D, E),
          u(D, M),
          u(D, L),
          H || ((V = [C(k, "click", fe), C(E, "click", pe)]), (H = !0));
      },
      p(e, [t]) {
        8 & t && a !== (a = `width: ${e[3]}%`) && y(c, "style", a),
          1 & t && $(i, e[0]),
          2 & t && $(f, e[1]),
          4 & t && $(x, e[2]);
      },
      i: e,
      o: e,
      d(e) {
        e && h(n), (H = !1), r(V);
      },
    };
  }
  function Be(e, t, n) {
    let { genre: c } = t,
      { score: r } = t,
      { maxScore: a } = t,
      { backgroundImage: o } = t,
      l = "100%";
    ue.subscribe((e) => {
      n(3, (l = e.progressBarValue));
    });
    let s = `background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("${o}");`;
    return (
      (e.$$set = (e) => {
        "genre" in e && n(0, (c = e.genre)),
          "score" in e && n(1, (r = e.score)),
          "maxScore" in e && n(2, (a = e.maxScore)),
          "backgroundImage" in e && n(5, (o = e.backgroundImage));
      }),
      [c, r, a, l, s, o]
    );
  }
  class De extends ce {
    constructor(e) {
      super(),
        ne(this, e, Be, xe, o, {
          genre: 0,
          score: 1,
          maxScore: 2,
          backgroundImage: 5,
        });
    }
  }
  function ke(t) {
    let n, c, r, a, o, l, s, i, g, d, f, v;
    return {
      c() {
        (n = m("div")),
          (c = m("div")),
          (r = m("div")),
          (r.innerHTML =
            '<div class="turn-on-the-sound-icon"><div class="sound-on-icon w-embed"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd"></path></svg></div></div> \n            <h3 class="paragraph">???? ???????????????? ???????????????? ????????!<br/></h3>'),
          (a = w()),
          (o = m("div")),
          (l = m("h3")),
          (l.innerHTML =
            "???????????? ???????????? ???????? ?? ???????????? ????????????.<br/>???? ????????????????????????????: ????????\n                ???????????? ??????????????, ???????? ???? ????????????????.<br/>"),
          (s = w()),
          (i = m("div")),
          (i.innerHTML =
            '<div class="note-wrap"><img src="images/jazz_note.png" loading="lazy" alt="" class="image"/> \n                    <div class="like w-embed"><svg width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" fill="white"><g><g><path d="M469.51,317c7.14-7.97,11.49-18.49,11.49-30c0-24.81-20.19-45-45-45h-87.34c8.65-26.25,12.34-61.08,12.34-76.01V151\n\t\t\tc0-33.08-26.92-60-60-60h-15c-6.88,0-12.88,4.68-14.55,11.36l-8.17,32.69c-11.45,45.78-47.8,96.29-85.42,105.47\n\t\t\tC171.27,223.84,155,212,136,212H46c-8.28,0-15,6.72-15,15v270c0,8.28,6.72,15,15,15h90c17.89,0,33.37-10.49,40.62-25.65\n\t\t\tl51.54,17.18c16.85,5.62,34.41,8.47,52.18,8.47H406c24.81,0,45-20.19,45-45c0-5.85-1.12-11.45-3.16-16.58\n\t\t\tC466.92,445.21,481,427.72,481,407c0-11.51-4.35-22.03-11.49-30c7.14-7.97,11.49-18.49,11.49-30S476.65,324.97,469.51,317z\n\t\t\t M151,467c0,8.27-6.73,15-15,15H61V242h75c8.27,0,15,6.73,15,15V467z M406,332h30c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15h-30\n\t\t\tc-8.28,0-15,6.72-15,15c0,8.28,6.72,15,15,15h30c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15h-30c-8.28,0-15,6.72-15,15\n\t\t\tc0,8.28,6.72,15,15,15c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15H280.34c-14.54,0-28.91-2.33-42.7-6.93L181,456.19V270.58\n\t\t\tc23.53-4.47,46.56-19.37,67.35-43.76c20.3-23.82,36.76-55.4,44.03-84.49l5.33-21.33H301c16.54,0,30,13.46,30,30v14.99\n\t\t\tc0,20.14-6.3,58.77-14.36,76.01H286c-8.28,0-15,6.72-15,15c0,8.28,6.72,15,15,15h150c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15\n\t\t\th-30c-8.28,0-15,6.72-15,15C391,325.28,397.72,332,406,332z"></path></g></g><g><g><circle cx="106" cy="437" r="15"></circle></g></g><g><g><path d="M316,0c-8.284,0-15,6.716-15,15v31c0,8.284,6.716,15,15,15s15-6.716,15-15V15C331,6.716,324.284,0,316,0z"></path></g></g><g><g><path d="M252.36,66.148l-21.213-21.213c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l21.213,21.213\n\t\t\tc5.857,5.857,15.356,5.858,21.213,0C258.218,81.503,258.218,72.006,252.36,66.148z"></path></g></g><g><g><path d="M422.066,44.935c-5.857-5.858-15.355-5.858-21.213,0L379.64,66.147c-5.858,5.858-5.858,15.355,0,21.213\n\t\t\tc5.857,5.858,15.355,5.859,21.213,0.001l21.213-21.213C427.924,60.29,427.924,50.793,422.066,44.935z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div></div> \n                <div class="note-wrap _2"><img src="images/jazz_note_bad.png" loading="lazy" alt="" class="image"/> \n                    <div class="like w-embed"><svg width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="54px" y="54px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" fill="white"><g><g><path d="M42.5,264c-7.1,8-11.5,18.5-11.5,30c0,24.8,20.2,45,45,45h87.3c-8.6,26.3-12.3,61.1-12.3,76v15c0,33.1,26.9,60,60,60h15\n\t\t\tc6.9,0,12.9-4.7,14.5-11.4l8.2-32.7c11.4-45.8,47.8-96.3,85.4-105.5C340.7,357.2,357,369,376,369h90c8.3,0,15-6.7,15-15V84\n\t\t\tc0-8.3-6.7-15-15-15h-90c-17.9,0-33.4,10.5-40.6,25.6l-51.5-17.2C267,71.9,249.4,69,231.7,69H106c-24.8,0-45,20.2-45,45\n\t\t\tc0,5.9,1.1,11.5,3.2,16.6C45.1,135.8,31,153.3,31,174c0,11.5,4.4,22,11.5,30c-7.1,8-11.5,18.5-11.5,30S35.4,256,42.5,264z\n\t\t\t M361,114c0-8.3,6.7-15,15-15h75v240h-75c-8.3,0-15-6.7-15-15V114z M106,249H76c-8.3,0-15-6.7-15-15s6.7-15,15-15h30\n\t\t\tc8.3,0,15-6.7,15-15s-6.7-15-15-15H76c-8.3,0-15-6.7-15-15s6.7-15,15-15h30c8.3,0,15-6.7,15-15s-6.7-15-15-15c-8.3,0-15-6.7-15-15\n\t\t\ts6.7-15,15-15h125.7c14.5,0,28.9,2.3,42.7,6.9l56.6,18.9v185.6c-23.5,4.5-46.6,19.4-67.4,43.8c-20.3,23.8-36.8,55.4-44,84.5\n\t\t\tl-5.3,21.3H211c-16.5,0-30-13.5-30-30v-15c0-20.1,6.3-58.8,14.4-76H226c8.3,0,15-6.7,15-15s-6.7-15-15-15H76c-8.3,0-15-6.7-15-15\n\t\t\ts6.7-15,15-15h30c8.3,0,15-6.7,15-15S114.3,249,106,249z"></path></g></g><g><g><circle cx="406" cy="144" r="15"></circle></g></g></svg></div></div>'),
          (g = w()),
          (d = m("div")),
          (d.textContent = "??????????????!"),
          y(r, "class", "turn-on-the-sound"),
          y(l, "class", "paragraph subheadline centered"),
          y(i, "class", "note-container"),
          y(d, "class", "button-hero _300px w-button"),
          y(d, "data-gtm", "pognali"),
          y(o, "class", "wrap-rules centerd"),
          y(c, "id", "2nd"),
          y(c, "class", "section how"),
          y(n, "class", "container svelte-y3cq0f"),
          y(n, "style", t[0]);
      },
      m(e, h) {
        p(e, n, h),
          u(n, c),
          u(c, r),
          u(c, a),
          u(c, o),
          u(o, l),
          u(o, s),
          u(o, i),
          u(o, g),
          u(o, d),
          f || ((v = C(d, "click", t[2])), (f = !0));
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && h(n), (f = !1), v();
      },
    };
  }
  function _e(e, t, n) {
    let { backgroundImage: c } = t;
    M(() => {
      let e = 0.01 * window.innerHeight;
      document.documentElement.style.setProperty("--vh", `${e}px`),
        window.addEventListener("resize", () => {
          let e = 0.01 * window.innerHeight;
          document.documentElement.style.setProperty("--vh", `${e}px`);
        }),
        (document.body.style.overflow = "hidden"),
        (document.body.style.height = "100vh");
    }),
      L(() => {
        (document.documentElement.style = ""),
          (document.body.style.overflow = "");
      });
    let r = `background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("${c}");`;
    return (
      (e.$$set = (e) => {
        "backgroundImage" in e && n(1, (c = e.backgroundImage));
      }),
      [r, c, () => he("GAME_COUNTDOWN_PAGE")]
    );
  }
  class Ee extends ce {
    constructor(e) {
      super(), ne(this, e, _e, ke, o, { backgroundImage: 1 });
    }
  }
  function Me(e) {
    const t = e * e;
    return e < 4 / 11
      ? 7.5625 * t
      : e < 8 / 11
      ? 9.075 * t - 9.9 * e + 3.4
      : e < 0.9
      ? (4356 / 361) * t - (35442 / 1805) * e + 16061 / 1805
      : 10.8 * e * e - 20.52 * e + 10.72;
  }
  function Le(e) {
    const t = e - 1;
    return t * t * t + 1;
  }
  function He(
    e,
    {
      delay: t = 0,
      duration: n = 400,
      easing: c = Le,
      start: r = 0,
      opacity: a = 0,
    } = {}
  ) {
    const o = getComputedStyle(e),
      l = +o.opacity,
      s = "none" === o.transform ? "" : o.transform,
      i = 1 - r,
      g = l * (1 - a);
    return {
      delay: t,
      duration: n,
      easing: c,
      css: (e, t) =>
        `\n\t\t\ttransform: ${s} scale(${1 - i * t});\n\t\t\topacity: ${
          l - g * t
        }\n\t\t`,
    };
  }
  function Ve(t) {
    let n, c, a, o, l, s, i;
    return {
      c() {
        var e;
        (n = m("div")),
          (c = m("img")),
          c.src !== (a = t[5]) && y(c, "src", a),
          y(c, "alt", ""),
          y(c, "class", "image"),
          y(
            n,
            "class",
            (null == (e = `note-tap ${t[4]} w-embed`) ? "" : e) +
              " svelte-1oe0h4r"
          ),
          y(n, "style", (l = `left: ${t[2]}; top: ${t[3]}`));
      },
      m(e, r) {
        p(e, n, r),
          u(n, c),
          s ||
            ((i = [
              C(c, "mousedown", t[6]),
              C(c, "touchstart", t[6], { passive: !0 }),
            ]),
            (s = !0));
      },
      p(e, [c]) {
        (t = e),
          12 & c &&
            l !== (l = `left: ${t[2]}; top: ${t[3]}`) &&
            y(n, "style", l);
      },
      i(e) {
        o ||
          N(() => {
            (o = Y(c, He, { duration: t[0], delay: t[1], easing: Me })),
              o.start();
          });
      },
      o: e,
      d(e) {
        e && h(n), (s = !1), r(i);
      },
    };
  }
  function ze(e, t, n) {
    let { isBad: c = !1 } = t,
      { duration: r = 500 } = t,
      { delay: a = 100 } = t,
      { left: o } = t,
      { top: l } = t,
      s = c ? "bad" : "",
      i = c ? "images/jazz_note_bad.png" : "images/jazz_note.png";
    return (
      (e.$$set = (e) => {
        "isBad" in e && n(7, (c = e.isBad)),
          "duration" in e && n(0, (r = e.duration)),
          "delay" in e && n(1, (a = e.delay)),
          "left" in e && n(2, (o = e.left)),
          "top" in e && n(3, (l = e.top));
      }),
      [
        r,
        a,
        o,
        l,
        s,
        i,
        function () {
          ve({ isBad: c });
        },
        c,
      ]
    );
  }
  class Ie extends ce {
    constructor(e) {
      super(),
        ne(this, e, ze, Ve, o, {
          isBad: 7,
          duration: 0,
          delay: 1,
          left: 2,
          top: 3,
        });
    }
  }
  if (
    "undefined" != typeof navigator &&
    "ReactNative" === navigator.product &&
    "undefined" == typeof crypto
  )
    throw new Error(
      "React Native does not have a built-in secure random generator. If you don???t need unpredictable IDs use `nanoid/non-secure`. For secure IDs, import `react-native-get-random-values` before Nano ID."
    );
  if ("undefined" != typeof msCrypto && "undefined" == typeof crypto)
    throw new Error(
      "Import file with `if (!window.crypto) window.crypto = window.msCrypto` before importing Nano ID to fix IE 11 support"
    );
  if ("undefined" == typeof crypto)
    throw new Error(
      "Your browser does not have secure random generator. If you don???t need unpredictable IDs, you can use nanoid/non-secure."
    );
  let Se = (e = 21) => {
    let t = "",
      n = crypto.getRandomValues(new Uint8Array(e));
    for (; e--; ) {
      let c = 63 & n[e];
      t +=
        c < 36
          ? c.toString(36)
          : c < 62
          ? (c - 26).toString(36).toUpperCase()
          : c < 63
          ? "_"
          : "-";
    }
    return t;
  };
  function Ae(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e;
  }
  function Ne(e, t = !0, n = 500, c = 200) {
    const r = e.offsetWidth,
      a = e.offsetHeight;
    return {
      key: Se(),
      duration: n,
      delay: c,
      isBad: t,
      left: Ae(70, r - 70) + "px",
      top: Ae(70, a - 70) + "px",
    };
  }
  function Te(e, t, n) {
    const c = e.slice();
    return (c[14] = t[n]), c;
  }
  function Pe(e) {
    let t, n;
    return (
      (t = new Ie({
        props: {
          isBad: e[14].isBad,
          duration: e[14].duration,
          delay: e[14].delay,
          left: e[14].left,
          top: e[14].top,
        },
      })),
      {
        c() {
          Q(t.$$.fragment);
        },
        m(e, c) {
          X(t, e, c), (n = !0);
        },
        p(e, n) {
          const c = {};
          64 & n && (c.isBad = e[14].isBad),
            64 & n && (c.duration = e[14].duration),
            64 & n && (c.delay = e[14].delay),
            64 & n && (c.left = e[14].left),
            64 & n && (c.top = e[14].top),
            t.$set(c);
        },
        i(e) {
          n || (F(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          Z(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          ee(t, e);
        },
      }
    );
  }
  function Ge(t) {
    let n,
      c,
      r = t[14].key,
      a = Pe(t);
    return {
      c() {
        a.c(), (n = b());
      },
      m(e, t) {
        a.m(e, t), p(e, n, t), (c = !0);
      },
      p(t, c) {
        64 & c && o(r, (r = t[14].key))
          ? (W(),
            Z(a, 1, 1, e),
            K(),
            (a = Pe(t)),
            a.c(),
            F(a),
            a.m(n.parentNode, n))
          : a.p(t, c);
      },
      i(e) {
        c || (F(a), (c = !0));
      },
      o(e) {
        Z(a), (c = !1);
      },
      d(e) {
        e && h(n), a.d(e);
      },
    };
  }
  function je(e) {
    let t,
      n,
      c,
      r,
      a,
      o,
      l,
      s,
      i,
      g,
      d,
      f,
      b,
      x,
      B,
      D,
      k,
      _,
      E,
      M,
      L,
      H,
      V,
      z,
      I,
      S,
      A,
      N = e[6],
      T = [];
    for (let t = 0; t < N.length; t += 1) T[t] = Ge(Te(e, N, t));
    const P = (e) =>
      Z(T[e], 1, 1, () => {
        T[e] = null;
      });
    return {
      c() {
        t = m("div");
        for (let e = 0; e < T.length; e += 1) T[e].c();
        (n = w()),
          (c = m("div")),
          (a = w()),
          (o = m("div")),
          (l = m("div")),
          (s = m("div")),
          (s.innerHTML =
            '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>'),
          (i = w()),
          (g = m("div")),
          (g.innerHTML =
            '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd"></path></svg>'),
          (d = w()),
          (f = m("div")),
          (b = m("div")),
          (x = m("img")),
          (D = w()),
          (k = m("div")),
          (_ = m("h3")),
          (E = v(e[0])),
          (M = w()),
          (L = m("h3")),
          (H = v(e[3])),
          (V = v("/")),
          (z = v(e[4])),
          y(c, "class", "div-block-6"),
          y(c, "style", (r = `width: ${e[5]}%`)),
          y(s, "class", "sound-icon w-embed"),
          y(g, "class", "sound-icon-on w-embed"),
          y(l, "class", "pause svelte-1oszmd9"),
          y(o, "class", "head"),
          x.src !== (B = e[1]) && y(x, "src", B),
          y(x, "class", "img_game"),
          y(x, "alt", ""),
          y(b, "class", "photo-wrap"),
          y(_, "class", "heading2"),
          y(L, "class", "heading2 score"),
          y(f, "class", "score-wrap"),
          y(t, "class", "container svelte-1oszmd9"),
          y(t, "style", e[7]);
      },
      m(r, h) {
        p(r, t, h);
        for (let e = 0; e < T.length; e += 1) T[e].m(t, null);
        u(t, n),
          u(t, c),
          u(t, a),
          u(t, o),
          u(o, l),
          u(l, s),
          u(l, i),
          u(l, g),
          u(t, d),
          u(t, f),
          u(f, b),
          u(b, x),
          u(f, D),
          u(f, k),
          u(k, _),
          u(_, E),
          u(k, M),
          u(k, L),
          u(L, H),
          u(L, V),
          u(L, z),
          e[9](t),
          (I = !0),
          S || ((A = C(s, "click", me)), (S = !0));
      },
      p(e, [a]) {
        if (64 & a) {
          let c;
          for (N = e[6], c = 0; c < N.length; c += 1) {
            const r = Te(e, N, c);
            T[c]
              ? (T[c].p(r, a), F(T[c], 1))
              : ((T[c] = Ge(r)), T[c].c(), F(T[c], 1), T[c].m(t, n));
          }
          for (W(), c = N.length; c < T.length; c += 1) P(c);
          K();
        }
        (!I || (32 & a && r !== (r = `width: ${e[5]}%`))) && y(c, "style", r),
          (!I || (2 & a && x.src !== (B = e[1]))) && y(x, "src", B),
          (!I || 1 & a) && $(E, e[0]),
          (!I || 8 & a) && $(H, e[3]),
          (!I || 16 & a) && $(z, e[4]);
      },
      i(e) {
        if (!I) {
          for (let e = 0; e < N.length; e += 1) F(T[e]);
          I = !0;
        }
      },
      o(e) {
        T = T.filter(Boolean);
        for (let e = 0; e < T.length; e += 1) Z(T[e]);
        I = !1;
      },
      d(n) {
        n && h(t),
          (function (e, t) {
            for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
          })(T, n),
          e[9](null),
          (S = !1),
          A();
      },
    };
  }
  function Ue(e, t, n) {
    let c,
      r,
      a,
      o,
      l,
      { genre: s } = t,
      { headphoneImage: i } = t,
      { backgroundImage: g } = t,
      d = null,
      u = [],
      p = !0;
    ue.subscribe((e) => {
      (a = e.totalTime),
        (o = e.timeLeft),
        n(5, (l = e.progressBarValue)),
        n(3, (c = e.score)),
        n(4, (r = e.maxScore)),
        (p = e.regenerateLevel);
    });
    let h = setInterval(() => {
      var e;
      n(5, (l = (100 * o) / a + 100)),
        o--,
        (e = { progressBarValue: l, timeLeft: o }),
        ue.update((t) => ({ ...t, ...e })),
        l <= 0 &&
          ue.update((e) => {
            const t = e.levelProps.backgroundSoundKey;
            return (
              oe[t].player.pause(),
              oe.defeat.player.play(),
              { ...e, currentPage: "GAME_END", isNewGame: !0, isVictory: !1 }
            );
          });
    }, 1e3);
    var m;
    L(() => {
      clearInterval(h),
        (document.documentElement.style = ""),
        (document.body.style.overflow = "");
    }),
      M(() => {
        let e = 0.01 * window.innerHeight;
        document.documentElement.style.setProperty("--vh", `${e}px`),
          window.addEventListener("resize", () => {
            let e = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", `${e}px`);
          }),
          (document.body.style.overflow = "hidden"),
          dataLayer.push({ event: "game_start" });
      }),
      (m = () => {
        p &&
          (n(
            6,
            (u = (function (e, t) {
              let n = 50;
              const c = [Ne(t, !1, 500, n)];
              for (let r = 1; r <= e; r++) {
                const e = Ne(t, !0, 500, n);
                c.push(e), (n += 50);
              }
              return c;
            })(10, d))
          ),
          ue.update((e) => ({ ...e, regenerateLevel: !1 })));
      }),
      E().$$.after_update.push(m);
    let f = `background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("${g}");`;
    return (
      (e.$$set = (e) => {
        "genre" in e && n(0, (s = e.genre)),
          "headphoneImage" in e && n(1, (i = e.headphoneImage)),
          "backgroundImage" in e && n(8, (g = e.backgroundImage));
      }),
      [
        s,
        i,
        d,
        c,
        r,
        l,
        u,
        f,
        g,
        function (e) {
          V[e ? "unshift" : "push"](() => {
            (d = e), n(2, d);
          });
        },
      ]
    );
  }
  class Je extends ce {
    constructor(e) {
      super(),
        ne(this, e, Ue, je, o, {
          genre: 0,
          headphoneImage: 1,
          backgroundImage: 8,
        });
    }
  }
  function Re(t) {
    let n, c, r;
    return {
      c() {
        (n = f("svg")),
          (c = f("path")),
          (r = f("circle")),
          y(
            c,
            "d",
            "M96.24 81.8C96.12 76.28 100.44 73.76 104.4 73.76C108.96 73.76 111.84 77.48 111.84 82.16C111.84 91.16 103.08 91.4 100.32 91.4H98.04V106.52H100.8C103.92 106.52 118.2 106.52 118.2 121.64C118.2 129.68 112.32 136.04 104.04 136.04C95.04 136.04 90.48 129.32 89.76 122.72H73.8C74.76 138.92 87.12 151.16 103.92 151.16C120.6 151.16 134.16 139.52 134.16 121.76C134.16 110.96 129.48 101.96 120.12 98.12C126.6 93.08 127.8 86.36 127.8 82.28C127.8 67.64 117.12 58.64 104.16 58.64C89.76 58.64 80.16 68.36 80.28 81.8H96.24Z"
          ),
          y(c, "fill", "white"),
          y(r, "cx", "106"),
          y(r, "cy", "106"),
          y(r, "r", "105"),
          y(r, "stroke", "white"),
          y(r, "stroke-width", "2"),
          y(n, "width", "212"),
          y(n, "height", "212"),
          y(n, "viewBox", "0 0 212 212"),
          y(n, "fill", "none"),
          y(n, "xmlns", "http://www.w3.org/2000/svg");
      },
      m(e, t) {
        p(e, n, t), u(n, c), u(n, r);
      },
      p: e,
      d(e) {
        e && h(n);
      },
    };
  }
  function Oe(e) {
    let t,
      n,
      c = 2 == e[0] && We(),
      r = 1 == e[0] && Ke();
    return {
      c() {
        c && c.c(), (t = w()), r && r.c(), (n = b());
      },
      m(e, a) {
        c && c.m(e, a), p(e, t, a), r && r.m(e, a), p(e, n, a);
      },
      p(e, a) {
        2 == e[0]
          ? c || ((c = We()), c.c(), c.m(t.parentNode, t))
          : c && (c.d(1), (c = null)),
          1 == e[0]
            ? r || ((r = Ke()), r.c(), r.m(n.parentNode, n))
            : r && (r.d(1), (r = null));
      },
      d(e) {
        c && c.d(e), e && h(t), r && r.d(e), e && h(n);
      },
    };
  }
  function We(e) {
    let t, n, c;
    return {
      c() {
        (t = f("svg")),
          (n = f("path")),
          (c = f("circle")),
          y(
            n,
            "d",
            "M77.04 149H134.4V133.88H99.36L116.28 118.76C129.48 107 134.4 98 134.4 87.44C134.4 69.68 121.8 58.64 105.24 58.64C84.36 58.64 75.48 75.08 76.08 90.92H92.04C91.44 83 95.52 73.76 105.72 73.76C114.6 73.76 118.44 80.48 118.44 87.2C118.44 95.96 112.68 100.76 107.64 105.44L77.04 133.88V149Z"
          ),
          y(n, "fill", "white"),
          y(c, "cx", "106"),
          y(c, "cy", "106"),
          y(c, "r", "105"),
          y(c, "stroke", "white"),
          y(c, "stroke-width", "2"),
          y(t, "width", "212"),
          y(t, "height", "212"),
          y(t, "viewBox", "0 0 212 212"),
          y(t, "fill", "none"),
          y(t, "xmlns", "http://www.w3.org/2000/svg");
      },
      m(e, r) {
        p(e, t, r), u(t, n), u(t, c);
      },
      d(e) {
        e && h(t);
      },
    };
  }
  function Ke(e) {
    let t, n, c;
    return {
      c() {
        (t = f("svg")),
          (n = f("path")),
          (c = f("circle")),
          y(
            n,
            "d",
            "M106.84 149H122.8V60.2H104.44L76 96.8L88.6 106.4L106.84 82.52V149Z"
          ),
          y(n, "fill", "white"),
          y(c, "cx", "106"),
          y(c, "cy", "106"),
          y(c, "r", "105"),
          y(c, "stroke", "white"),
          y(c, "stroke-width", "2"),
          y(t, "width", "212"),
          y(t, "height", "212"),
          y(t, "viewBox", "0 0 212 212"),
          y(t, "fill", "none"),
          y(t, "xmlns", "http://www.w3.org/2000/svg");
      },
      m(e, r) {
        p(e, t, r), u(t, n), u(t, c);
      },
      d(e) {
        e && h(t);
      },
    };
  }
  function Fe(t) {
    let n;
    function c(e, t) {
      return e[0] < 3 ? Oe : Re;
    }
    let r = c(t),
      a = r(t);
    return {
      c() {
        (n = m("div")),
          a.c(),
          y(n, "class", "container pause-screen svelte-y3cq0f"),
          y(n, "style", t[1]);
      },
      m(e, t) {
        p(e, n, t), a.m(n, null);
      },
      p(e, [t]) {
        r === (r = c(e)) && a
          ? a.p(e, t)
          : (a.d(1), (a = r(e)), a && (a.c(), a.m(n, null)));
      },
      i: e,
      o: e,
      d(e) {
        e && h(n), a.d();
      },
    };
  }
  function Ze(e, t, n) {
    let { backgroundImage: c } = t,
      r = 3;
    oe.countdownTick.player.play();
    const a = setInterval(() => {
      r > 0 && (oe.countdownTick.player.play(), n(0, (r -= 1))),
        0 == r &&
          ue.update((e) => {
            const t = e.levelProps.backgroundSoundKey;
            return (
              (oe[t].player.currentTime = 0),
              oe[t].player.play(),
              { ...e, currentPage: "GAME_PAGE", regenerateLevel: !0 }
            );
          });
    }, 1e3);
    M(() => {
      let e = 0.01 * window.innerHeight;
      document.documentElement.style.setProperty("--vh", `${e}px`),
        window.addEventListener("resize", () => {
          let e = 0.01 * window.innerHeight;
          document.documentElement.style.setProperty("--vh", `${e}px`);
        }),
        (document.body.style.overflow = "hidden"),
        (document.body.style.height = "100vh");
    }),
      L(() => {
        clearInterval(a),
          (document.documentElement.style = ""),
          (document.body.style.overflow = "");
      });
    let o = `background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("${c}");`;
    return (
      (e.$$set = (e) => {
        "backgroundImage" in e && n(2, (c = e.backgroundImage));
      }),
      [r, o, c]
    );
  }
  class qe extends ce {
    constructor(e) {
      super(), ne(this, e, Ze, Fe, o, { backgroundImage: 2 });
    }
  }
  function Ye(e) {
    let t, n;
    return {
      c() {
        (t = m("img")),
          t.src !== (n = "images/fireworks.png") &&
            y(t, "src", "images/fireworks.png"),
          y(t, "loading", "lazy"),
          y(t, "alt", ""),
          y(t, "class", "fireworks");
      },
      m(e, n) {
        p(e, t, n);
      },
      d(e) {
        e && h(t);
      },
    };
  }
  function Qe(e) {
    let t, n, c, r;
    return {
      c() {
        (t = m("div")),
          (n = m("h3")),
          (c = v("????????????????: ")),
          (r = v(e[3])),
          y(n, "class", "heading2 score"),
          y(t, "class", "promo");
      },
      m(e, a) {
        p(e, t, a), u(t, n), u(n, c), u(n, r);
      },
      p(e, t) {
        8 & t && $(r, e[3]);
      },
      d(e) {
        e && h(t);
      },
    };
  }
  function Xe(e) {
    let t;
    return {
      c() {
        (t = m("a")),
          (t.textContent = "?????????????? ?? ??????????????"),
          y(t, "href", "https://bit.ly/2K0zV5a"),
          y(t, "data-w-id", "99ac7538-7bbf-360e-c98c-c864cf7751f3"),
          y(t, "class", "button-hero small w-button"),
          y(t, "data-gtm", "buy_discount");
      },
      m(e, n) {
        p(e, t, n);
      },
      d(e) {
        e && h(t);
      },
    };
  }
  function et(e) {
    let t;
    return {
      c() {
        (t = m("a")),
          (t.textContent = "???????????? ???? ??????????????"),
          y(t, "href", "https://bit.ly/2K0zV5a"),
          y(t, "data-w-id", "99ac7538-7bbf-360e-c98c-c864cf7751f3"),
          y(t, "class", "button-hero small w-button"),
          y(t, "data-gtm", "buy_discount");
      },
      m(e, n) {
        p(e, t, n);
      },
      d(e) {
        e && h(t);
      },
    };
  }
  function tt(t) {
    let n,
      c,
      r,
      a,
      o,
      l,
      s,
      i,
      g,
      d,
      f,
      b,
      x,
      B,
      D,
      k,
      _,
      E,
      M,
      L,
      H,
      V,
      z,
      I,
      S,
      A,
      N,
      T,
      P,
      G,
      j,
      U,
      J,
      R,
      O,
      W,
      K,
      F = t[0] && Ye(),
      Z = t[0] && Qe(t);
    function q(e, t) {
      return e[0] ? et : Xe;
    }
    let Y = q(t),
      Q = Y(t);
    return {
      c() {
        var e, u, p;
        (n = m("div")),
          (c = m("div")),
          (c.innerHTML =
            '<a href="https://ichip.ru" target="_blank"><img src="images/chip-1-2.png" loading="lazy" alt="" class="logo"/></a> \n        <div class="jbl-logo"><div class="bg-white-logo"></div> \n            <a href="https://bit.ly/388SagD" target="_blank" data-gtm="jbl_logo"><img src="images/Group-2.png" loading="lazy" alt="" class="logo _2"/></a></div>'),
          (r = w()),
          (a = m("div")),
          F && F.c(),
          (o = w()),
          (l = m("div")),
          (s = m("div")),
          (i = m("h3")),
          (i.textContent = "Score"),
          (g = w()),
          (d = m("h3")),
          (f = v(t[1])),
          (b = v("/")),
          (x = v(t[2])),
          (B = w()),
          (D = m("h1")),
          (D.textContent = `${t[5]}`),
          (k = w()),
          (_ = m("p")),
          (_.textContent = `${t[6]}`),
          (E = w()),
          Z && Z.c(),
          (M = w()),
          (L = m("div")),
          (H = m("img")),
          (z = w()),
          (I = m("div")),
          (I.innerHTML =
            '<svg width="30" height="30" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" fill="white"><g><g><path d="M469.51,317c7.14-7.97,11.49-18.49,11.49-30c0-24.81-20.19-45-45-45h-87.34c8.65-26.25,12.34-61.08,12.34-76.01V151\n\t\t\tc0-33.08-26.92-60-60-60h-15c-6.88,0-12.88,4.68-14.55,11.36l-8.17,32.69c-11.45,45.78-47.8,96.29-85.42,105.47\n\t\t\tC171.27,223.84,155,212,136,212H46c-8.28,0-15,6.72-15,15v270c0,8.28,6.72,15,15,15h90c17.89,0,33.37-10.49,40.62-25.65\n\t\t\tl51.54,17.18c16.85,5.62,34.41,8.47,52.18,8.47H406c24.81,0,45-20.19,45-45c0-5.85-1.12-11.45-3.16-16.58\n\t\t\tC466.92,445.21,481,427.72,481,407c0-11.51-4.35-22.03-11.49-30c7.14-7.97,11.49-18.49,11.49-30S476.65,324.97,469.51,317z\n\t\t\t M151,467c0,8.27-6.73,15-15,15H61V242h75c8.27,0,15,6.73,15,15V467z M406,332h30c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15h-30\n\t\t\tc-8.28,0-15,6.72-15,15c0,8.28,6.72,15,15,15h30c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15h-30c-8.28,0-15,6.72-15,15\n\t\t\tc0,8.28,6.72,15,15,15c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15H280.34c-14.54,0-28.91-2.33-42.7-6.93L181,456.19V270.58\n\t\t\tc23.53-4.47,46.56-19.37,67.35-43.76c20.3-23.82,36.76-55.4,44.03-84.49l5.33-21.33H301c16.54,0,30,13.46,30,30v14.99\n\t\t\tc0,20.14-6.3,58.77-14.36,76.01H286c-8.28,0-15,6.72-15,15c0,8.28,6.72,15,15,15h150c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15\n\t\t\th-30c-8.28,0-15,6.72-15,15C391,325.28,397.72,332,406,332z"></path></g></g><g><g><circle cx="106" cy="437" r="15"></circle></g></g><g><g><path d="M316,0c-8.284,0-15,6.716-15,15v31c0,8.284,6.716,15,15,15s15-6.716,15-15V15C331,6.716,324.284,0,316,0z"></path></g></g><g><g><path d="M252.36,66.148l-21.213-21.213c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l21.213,21.213\n\t\t\tc5.857,5.857,15.356,5.858,21.213,0C258.218,81.503,258.218,72.006,252.36,66.148z"></path></g></g><g><g><path d="M422.066,44.935c-5.857-5.858-15.355-5.858-21.213,0L379.64,66.147c-5.858,5.858-5.858,15.355,0,21.213\n\t\t\tc5.857,5.858,15.355,5.859,21.213,0.001l21.213-21.213C427.924,60.29,427.924,50.793,422.066,44.935z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'),
          (S = w()),
          (A = m("div")),
          (A.innerHTML =
            '<svg width="30" height="30" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" fill="white"><g><g><path d="M469.51,317c7.14-7.97,11.49-18.49,11.49-30c0-24.81-20.19-45-45-45h-87.34c8.65-26.25,12.34-61.08,12.34-76.01V151\n\t\t\tc0-33.08-26.92-60-60-60h-15c-6.88,0-12.88,4.68-14.55,11.36l-8.17,32.69c-11.45,45.78-47.8,96.29-85.42,105.47\n\t\t\tC171.27,223.84,155,212,136,212H46c-8.28,0-15,6.72-15,15v270c0,8.28,6.72,15,15,15h90c17.89,0,33.37-10.49,40.62-25.65\n\t\t\tl51.54,17.18c16.85,5.62,34.41,8.47,52.18,8.47H406c24.81,0,45-20.19,45-45c0-5.85-1.12-11.45-3.16-16.58\n\t\t\tC466.92,445.21,481,427.72,481,407c0-11.51-4.35-22.03-11.49-30c7.14-7.97,11.49-18.49,11.49-30S476.65,324.97,469.51,317z\n\t\t\t M151,467c0,8.27-6.73,15-15,15H61V242h75c8.27,0,15,6.73,15,15V467z M406,332h30c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15h-30\n\t\t\tc-8.28,0-15,6.72-15,15c0,8.28,6.72,15,15,15h30c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15h-30c-8.28,0-15,6.72-15,15\n\t\t\tc0,8.28,6.72,15,15,15c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15H280.34c-14.54,0-28.91-2.33-42.7-6.93L181,456.19V270.58\n\t\t\tc23.53-4.47,46.56-19.37,67.35-43.76c20.3-23.82,36.76-55.4,44.03-84.49l5.33-21.33H301c16.54,0,30,13.46,30,30v14.99\n\t\t\tc0,20.14-6.3,58.77-14.36,76.01H286c-8.28,0-15,6.72-15,15c0,8.28,6.72,15,15,15h150c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15\n\t\t\th-30c-8.28,0-15,6.72-15,15C391,325.28,397.72,332,406,332z"></path></g></g><g><g><circle cx="106" cy="437" r="15"></circle></g></g><g><g><path d="M316,0c-8.284,0-15,6.716-15,15v31c0,8.284,6.716,15,15,15s15-6.716,15-15V15C331,6.716,324.284,0,316,0z"></path></g></g><g><g><path d="M252.36,66.148l-21.213-21.213c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l21.213,21.213\n\t\t\tc5.857,5.857,15.356,5.858,21.213,0C258.218,81.503,258.218,72.006,252.36,66.148z"></path></g></g><g><g><path d="M422.066,44.935c-5.857-5.858-15.355-5.858-21.213,0L379.64,66.147c-5.858,5.858-5.858,15.355,0,21.213\n\t\t\tc5.857,5.858,15.355,5.859,21.213,0.001l21.213-21.213C427.924,60.29,427.924,50.793,422.066,44.935z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'),
          (N = w()),
          (T = m("div")),
          (T.innerHTML =
            '<svg width="30" height="30" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" fill="white"><g><g><path d="M469.51,317c7.14-7.97,11.49-18.49,11.49-30c0-24.81-20.19-45-45-45h-87.34c8.65-26.25,12.34-61.08,12.34-76.01V151\n\t\t\tc0-33.08-26.92-60-60-60h-15c-6.88,0-12.88,4.68-14.55,11.36l-8.17,32.69c-11.45,45.78-47.8,96.29-85.42,105.47\n\t\t\tC171.27,223.84,155,212,136,212H46c-8.28,0-15,6.72-15,15v270c0,8.28,6.72,15,15,15h90c17.89,0,33.37-10.49,40.62-25.65\n\t\t\tl51.54,17.18c16.85,5.62,34.41,8.47,52.18,8.47H406c24.81,0,45-20.19,45-45c0-5.85-1.12-11.45-3.16-16.58\n\t\t\tC466.92,445.21,481,427.72,481,407c0-11.51-4.35-22.03-11.49-30c7.14-7.97,11.49-18.49,11.49-30S476.65,324.97,469.51,317z\n\t\t\t M151,467c0,8.27-6.73,15-15,15H61V242h75c8.27,0,15,6.73,15,15V467z M406,332h30c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15h-30\n\t\t\tc-8.28,0-15,6.72-15,15c0,8.28,6.72,15,15,15h30c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15h-30c-8.28,0-15,6.72-15,15\n\t\t\tc0,8.28,6.72,15,15,15c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15H280.34c-14.54,0-28.91-2.33-42.7-6.93L181,456.19V270.58\n\t\t\tc23.53-4.47,46.56-19.37,67.35-43.76c20.3-23.82,36.76-55.4,44.03-84.49l5.33-21.33H301c16.54,0,30,13.46,30,30v14.99\n\t\t\tc0,20.14-6.3,58.77-14.36,76.01H286c-8.28,0-15,6.72-15,15c0,8.28,6.72,15,15,15h150c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15\n\t\t\th-30c-8.28,0-15,6.72-15,15C391,325.28,397.72,332,406,332z"></path></g></g><g><g><circle cx="106" cy="437" r="15"></circle></g></g><g><g><path d="M316,0c-8.284,0-15,6.716-15,15v31c0,8.284,6.716,15,15,15s15-6.716,15-15V15C331,6.716,324.284,0,316,0z"></path></g></g><g><g><path d="M252.36,66.148l-21.213-21.213c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l21.213,21.213\n\t\t\tc5.857,5.857,15.356,5.858,21.213,0C258.218,81.503,258.218,72.006,252.36,66.148z"></path></g></g><g><g><path d="M422.066,44.935c-5.857-5.858-15.355-5.858-21.213,0L379.64,66.147c-5.858,5.858-5.858,15.355,0,21.213\n\t\t\tc5.857,5.858,15.355,5.859,21.213,0.001l21.213-21.213C427.924,60.29,427.924,50.793,422.066,44.935z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'),
          (P = w()),
          (G = m("div")),
          (G.innerHTML =
            '<svg width="30" height="30" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" fill="white"><g><g><path d="M469.51,317c7.14-7.97,11.49-18.49,11.49-30c0-24.81-20.19-45-45-45h-87.34c8.65-26.25,12.34-61.08,12.34-76.01V151\n\t\t\tc0-33.08-26.92-60-60-60h-15c-6.88,0-12.88,4.68-14.55,11.36l-8.17,32.69c-11.45,45.78-47.8,96.29-85.42,105.47\n\t\t\tC171.27,223.84,155,212,136,212H46c-8.28,0-15,6.72-15,15v270c0,8.28,6.72,15,15,15h90c17.89,0,33.37-10.49,40.62-25.65\n\t\t\tl51.54,17.18c16.85,5.62,34.41,8.47,52.18,8.47H406c24.81,0,45-20.19,45-45c0-5.85-1.12-11.45-3.16-16.58\n\t\t\tC466.92,445.21,481,427.72,481,407c0-11.51-4.35-22.03-11.49-30c7.14-7.97,11.49-18.49,11.49-30S476.65,324.97,469.51,317z\n\t\t\t M151,467c0,8.27-6.73,15-15,15H61V242h75c8.27,0,15,6.73,15,15V467z M406,332h30c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15h-30\n\t\t\tc-8.28,0-15,6.72-15,15c0,8.28,6.72,15,15,15h30c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15h-30c-8.28,0-15,6.72-15,15\n\t\t\tc0,8.28,6.72,15,15,15c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15H280.34c-14.54,0-28.91-2.33-42.7-6.93L181,456.19V270.58\n\t\t\tc23.53-4.47,46.56-19.37,67.35-43.76c20.3-23.82,36.76-55.4,44.03-84.49l5.33-21.33H301c16.54,0,30,13.46,30,30v14.99\n\t\t\tc0,20.14-6.3,58.77-14.36,76.01H286c-8.28,0-15,6.72-15,15c0,8.28,6.72,15,15,15h150c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15\n\t\t\th-30c-8.28,0-15,6.72-15,15C391,325.28,397.72,332,406,332z"></path></g></g><g><g><circle cx="106" cy="437" r="15"></circle></g></g><g><g><path d="M316,0c-8.284,0-15,6.716-15,15v31c0,8.284,6.716,15,15,15s15-6.716,15-15V15C331,6.716,324.284,0,316,0z"></path></g></g><g><g><path d="M252.36,66.148l-21.213-21.213c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l21.213,21.213\n\t\t\tc5.857,5.857,15.356,5.858,21.213,0C258.218,81.503,258.218,72.006,252.36,66.148z"></path></g></g><g><g><path d="M422.066,44.935c-5.857-5.858-15.355-5.858-21.213,0L379.64,66.147c-5.858,5.858-5.858,15.355,0,21.213\n\t\t\tc5.857,5.858,15.355,5.859,21.213,0.001l21.213-21.213C427.924,60.29,427.924,50.793,422.066,44.935z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'),
          (j = w()),
          Q.c(),
          (U = w()),
          (J = m("div")),
          (J.textContent = "?????????????????????? ?????? ??????"),
          (R = w()),
          (O = m("div")),
          (O.innerHTML =
            '<h4 class="paragraph subheadline centered">????????????????????</h4> \n                <div class="social-wrap"><a href="http://vk.com/share.php?url=https://ichip.ru/jbl-game" data-gtm="social" target="_blank" class="social-icon w-embed svelte-88vrxs"><svg width="28" height="16" viewBox="0 0 28 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M25.7419 15.6643H21.6774C21 15.6643 20.3226 15.4406 19.871 14.8811L17.5 12.5315C17.0484 12.0839 16.4839 12.0839 16.0323 12.5315C15.8065 12.7552 15.6935 12.979 15.6935 13.2028V14.2098C15.6935 14.993 15.0161 15.5524 14.3387 15.5524H10.7258C8.12903 15.5524 3.95161 9.84615 0.903226 4.92308C0.33871 4.02797 0 2.90909 0 1.79021V1.45455C0 0.671329 0.677419 0 1.46774 0H5.08065C5.30645 0 5.53226 0.111888 5.53226 0.335664C6.32258 1.9021 8.58065 6.04196 9.37097 6.93706C9.59677 7.16084 9.82258 7.27273 9.93548 7.27273C10.0484 7.27273 10.0484 7.27273 10.1613 7.16084V2.7972C10.1613 2.23776 9.93548 1.67832 9.48387 1.23077L9.14516 1.00699C8.91936 0.783217 8.91936 0.447552 9.14516 0.223776C9.25807 0.111888 9.48387 0 9.59677 0H14.5645C15.2419 0 15.8065 0.559441 15.8065 1.23077V6.93706C16.1452 7.04895 16.7097 7.27273 17.1613 6.82517C17.6129 6.37762 18.8548 4.02797 20.2097 0.895105C20.3226 0.335664 20.8871 0 21.5645 0H25.5161C26.4194 0 27.0968 0.671329 27.0968 1.56643C27.0968 2.46154 26.7581 3.35664 26.1936 4.02797L22.5806 8.5035V9.17482L26.6452 13.2028C27.4355 13.2028 28 13.7622 28 14.5455C28 15.3287 27.4355 15.8881 26.6452 15.8881C26.3065 16 25.9677 15.8881 25.7419 15.6643ZM16.8226 11.1888C17.3871 11.1888 17.9516 11.4126 18.4032 11.8601L20.7742 14.2098C21 14.4336 21.4516 14.6573 21.7903 14.6573H25.8548C25.9677 14.6573 26.0806 14.6573 26.0806 14.5455C26.0806 14.4336 26.0806 14.3217 26.0806 14.3217L21.7903 10.0699C21.5645 9.84615 21.4516 9.62238 21.4516 9.51049V8.39161C21.4516 8.27972 21.4516 8.16783 21.5645 8.05594L25.2903 3.35664C25.7419 2.90909 25.9677 2.23776 25.9677 1.56643C25.9677 1.34266 25.7419 1.11888 25.5161 1.11888H21.5645C21.4516 1.11888 21.2258 1.23077 21.2258 1.34266C20.2097 3.8042 18.7419 6.93706 17.9516 7.72028C16.9355 8.61539 15.5806 8.16783 15.0161 7.72028C14.7903 7.60839 14.6774 7.4965 14.6774 7.27273V1.23077C14.6774 1.11888 14.6774 1.11888 14.5645 1.11888H10.8387C11.1774 1.67832 11.2903 2.23776 11.2903 2.7972V7.27273C11.2903 7.38462 11.2903 7.4965 11.1774 7.60839C11.1774 7.72028 10.7258 8.27972 10.0484 8.27972C9.59677 8.39161 9.14516 8.16783 8.58064 7.72028C7.67742 6.71329 5.41935 2.34965 4.74194 1.11888H1.46774C1.24194 1.11888 1.12903 1.23077 1.12903 1.45455V1.79021C1.12903 2.68531 1.35484 3.69231 1.91935 4.47552C5.75806 10.6294 9.14516 14.5455 10.7258 14.5455H14.4516C14.5645 14.5455 14.6774 14.4336 14.6774 14.3217V13.3147C14.6774 12.1958 15.6935 11.1888 16.8226 11.1888Z"></path></svg></a> \n\n                    <a href="https://t.me/share/url?url=https%3A%2F%2Fichip.ru%2Fjbl-game&amp;text=%D0%97%D0%B0%D0%BB%D0%B8%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%B8%D0%B3%D1%80%D0%B0%20%D0%BE%D1%82%20ICHIP%20%D0%B8%20JBL.%20%D0%9F%D1%80%D0%BE%D1%85%D0%BE%D0%B4%D0%B8%20%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%83%D1%80%D0%BE%D0%B2%D0%BD%D0%B8%3A%20%D0%BB%D0%BE%D0%B2%D0%B8%20%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%BD%D0%BE%D1%82%D1%8B%20%D0%BD%D0%B0%20%D0%BB%D0%B5%D1%82%D1%83%20%D0%B8%20%D0%B7%D0%B0%D0%B1%D0%B8%D1%80%D0%B0%D0%B9%20%D1%81%D0%BA%D0%B8%D0%B4%D0%BE%D1%87%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%BC%D0%BE%D0%BA%D0%BE%D0%B4%20%D0%BD%D0%B0%20%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BD%D0%B0%D1%83%D1%88%D0%BD%D0%B8%D0%BA%D0%B8%20JBL%20TUNE%20225TWS" data-gtm="social" target="_blank" class="social-icon w-embed svelte-88vrxs"><svg width="23" height="24" viewBox="0 0 23 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0.397687 11.5956L6.02215 14.8863C6.23969 15.0123 6.49652 15.0033 6.70448 14.8604L11.7108 11.4438L8.68056 14.596C8.52627 14.7569 8.4381 14.9864 8.4381 15.2283V22.9064C8.4381 23.7164 9.31881 24.0573 9.73185 23.4138L12.1631 19.6191L18.1757 23.6388C18.5974 23.9234 19.1379 23.6376 19.2356 23.0718L22.9856 1.13427C23.0977 0.475015 22.539 -0.0627345 22.0196 0.182516L0.457104 10.0544C-0.12173 10.3199 -0.159105 11.2705 0.397687 11.5956ZM21.3181 2.31552L18.0224 21.5946L12.3251 17.7854C12.0146 17.5773 11.615 17.6695 11.3946 18.0115L9.8756 20.3819V15.6074L18.0703 7.08439C18.7191 6.41052 17.9735 5.21239 17.2327 5.72314L6.31731 13.1729L2.49165 10.9353L21.3181 2.31552Z"></path></svg></a> \n\n                    <a href="https://twitter.com/intent/tweet?url=https://ichip.ru/jbl-game&amp;text=?????????????????????????? ???????? ???? ICHIP ?? JBL. ?????????????? ?????????????????????? ????????????: ???????? ???????????????????????? ???????? ???? ???????? ?? ?????????????? ?????????????????? ???????????????? ???? ?????????? ???????????????? JBL TUNE 225TWS" data-gtm="social" target="_blank" class="social-icon w-embed svelte-88vrxs"><svg width="24" height="19" viewBox="0 0 24 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0.472992 16.7785C2.69499 18.1298 5.28099 18.8437 7.95099 18.8437C11.861 18.8437 15.444 17.4043 18.041 14.7909C20.526 12.2897 21.893 8.92879 21.825 5.51808C22.767 4.74567 23.875 3.27079 23.875 1.83329C23.875 1.28225 23.251 0.932457 22.745 1.21325C21.86 1.71158 21.053 1.84192 20.223 1.61862C18.528 0.0354574 16.005 -0.298043 13.879 0.800207C12.021 1.75854 10.988 3.51229 11.081 5.42896C7.94199 5.06192 5.04199 3.5535 3.01999 1.20942C2.68799 0.827041 2.05799 0.872082 1.79399 1.30525C0.819992 2.90375 0.829992 4.75621 1.67699 6.25217C1.27399 6.32021 1.02499 6.64508 1.02499 6.99679C1.02499 8.50042 1.73099 9.88233 2.86799 10.8253C2.65599 11.0208 2.58599 11.3112 2.67599 11.57C3.17599 13.0094 4.30799 14.1345 5.72299 14.698C4.18399 15.4023 2.48199 15.6371 0.966992 15.4589C0.182992 15.3573 -0.204008 16.3674 0.472992 16.7785ZM8.15599 14.9443C8.71699 14.5312 8.41899 13.6706 7.71499 13.6563C6.47499 13.6313 5.34599 13.0458 4.64299 12.1248C4.98199 12.1038 5.33299 12.0539 5.66699 11.9677C6.42799 11.7703 6.39199 10.718 5.61899 10.5695C4.21599 10.2992 3.11499 9.31979 2.70199 8.05863C3.07899 8.14775 3.46299 8.19758 3.84599 8.20429C4.60499 8.20813 4.89199 7.27567 4.27299 6.88563C2.87799 6.00492 2.28299 4.44954 2.67699 2.98712C5.11299 5.35229 8.41799 6.77733 11.914 6.93833C12.415 6.96804 12.791 6.51667 12.681 6.05954C12.206 4.08633 13.356 2.70346 14.591 2.06617C15.813 1.43367 17.775 1.23625 19.279 2.7485C19.726 3.19987 21.234 3.21712 22.001 3.04558C21.657 3.66658 21.128 4.25596 20.633 4.58754C20.422 4.72937 20.301 4.96513 20.314 5.21142C20.475 8.35954 19.251 11.4895 16.956 13.7981C14.644 16.124 11.447 17.4053 7.95199 17.4053C6.56199 17.4053 5.19899 17.1887 3.91099 16.7708C5.45099 16.4853 6.91399 15.8604 8.15599 14.9443Z"></path></svg></a> \n                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://ichip.ru/jbl-game" data-gtm="social" target="_blank" class="social-icon w-embed svelte-88vrxs"><svg width="14" height="23" viewBox="0 0 14 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.62036 22.9551H4.76946C4.12623 22.9551 3.603 22.4546 3.603 21.8394V13.5317H1.3563C0.713073 13.5317 0.189835 13.031 0.189835 12.416V8.8561C0.189835 8.24088 0.713073 7.74043 1.3563 7.74043H3.603V5.95776C3.603 4.19019 4.18329 2.68636 5.28095 1.60912C6.38357 0.526955 7.92448 -0.0449219 9.73711 -0.0449219L12.674 -0.0403595C13.3161 -0.0393066 13.8384 0.461151 13.8384 1.07532V4.38059C13.8384 4.9958 13.3154 5.49626 12.6723 5.49626L10.695 5.49696C10.0919 5.49696 9.93837 5.6126 9.90553 5.64805C9.85141 5.70683 9.78701 5.87301 9.78701 6.33188V7.74025H12.5237C12.7298 7.74025 12.9294 7.78886 13.1009 7.88046C13.471 8.07822 13.701 8.45216 13.701 8.85628L13.6996 12.4162C13.6996 13.031 13.1763 13.5315 12.5331 13.5315H9.78701V21.8394C9.78701 22.4546 9.26359 22.9551 8.62036 22.9551ZM5.01273 21.6067H8.37709V12.928C8.37709 12.5172 8.72659 12.1831 9.15589 12.1831H12.2898L12.2911 9.08878H9.15571C8.72641 9.08878 8.37709 8.75468 8.37709 8.34389V6.33188C8.37709 5.8051 8.43305 5.20602 8.84877 4.75575C9.3511 4.21143 10.1427 4.14861 10.6946 4.14861L12.4287 4.1479V1.30765L9.73601 1.30344C6.82297 1.30344 5.01273 3.08698 5.01273 5.95776V8.34389C5.01273 8.7545 4.66342 9.08878 4.23411 9.08878H1.59957V12.1831H4.23411C4.66342 12.1831 5.01273 12.5172 5.01273 12.928V21.6067ZM12.6712 1.308H12.6714H12.6712Z"></path></svg></a></div>'),
          y(c, "class", "header"),
          y(i, "class", "heading2"),
          y(d, "class", "heading2 score"),
          y(s, "class", "score-wrap vertical end"),
          y(D, "class", "heading1 margin-bottom centered"),
          y(_, "class", "paragraph subheadline centered"),
          H.src !== (V = t[4]) && y(H, "src", V),
          y(H, "alt", ""),
          y(H, "loading", "lazy"),
          y(H, "class", "tune"),
          y(I, "class", "like abs w-embed"),
          y(A, "class", "like abs _2 w-embed"),
          y(T, "class", "like abs _3 w-embed"),
          y(G, "class", "like abs _4 w-embed"),
          y(L, "class", "lose-image-wrap"),
          y(J, "data-w-id", "99ac7538-7bbf-360e-c98c-c864cf7751f3"),
          y(
            J,
            "class",
            "button-hero small w-button custom-white svelte-88vrxs"
          ),
          (e = "margin-top"),
          (u = "0"),
          J.style.setProperty(e, u, p ? "important" : ""),
          y(J, "data-gtm", "try_again"),
          y(O, "class", "share-block"),
          y(l, "class", "hero lose"),
          y(a, "class", "section"),
          y(n, "class", "wrap");
      },
      m(e, h) {
        p(e, n, h),
          u(n, c),
          u(n, r),
          u(n, a),
          F && F.m(a, null),
          u(a, o),
          u(a, l),
          u(l, s),
          u(s, i),
          u(s, g),
          u(s, d),
          u(d, f),
          u(d, b),
          u(d, x),
          u(l, B),
          u(l, D),
          u(l, k),
          u(l, _),
          u(l, E),
          Z && Z.m(l, null),
          u(l, M),
          u(l, L),
          u(L, H),
          u(L, z),
          u(L, I),
          u(L, S),
          u(L, A),
          u(L, N),
          u(L, T),
          u(L, P),
          u(L, G),
          u(l, j),
          Q.m(l, null),
          u(l, U),
          u(l, J),
          u(l, R),
          u(l, O),
          W || ((K = C(J, "click", t[7])), (W = !0));
      },
      p(e, [t]) {
        e[0] ? F || ((F = Ye()), F.c(), F.m(a, o)) : F && (F.d(1), (F = null)),
          2 & t && $(f, e[1]),
          4 & t && $(x, e[2]),
          e[0]
            ? Z
              ? Z.p(e, t)
              : ((Z = Qe(e)), Z.c(), Z.m(l, M))
            : Z && (Z.d(1), (Z = null)),
          16 & t && H.src !== (V = e[4]) && y(H, "src", V),
          Y !== (Y = q(e)) && (Q.d(1), (Q = Y(e)), Q && (Q.c(), Q.m(l, U)));
      },
      i: e,
      o: e,
      d(e) {
        e && h(n), F && F.d(), Z && Z.d(), Q.d(), (W = !1), K();
      },
    };
  }
  function nt(e, t, n) {
    let { isVictory: c = !1 } = t,
      { score: r } = t,
      { maxScore: a } = t,
      { promoCode: o = "muzikanaletu" } = t,
      { levelHeadphonesImage: l } = t;
    const s = c ? de : ge;
    let { title: i, text: g } = (function (e) {
      let t = e.length;
      return e[Math.floor(Math.random() * (t - 0) + 0)];
    })(s);
    M(() => {
      dataLayer.push({ event: "game_finish" });
    });
    return (
      (e.$$set = (e) => {
        "isVictory" in e && n(0, (c = e.isVictory)),
          "score" in e && n(1, (r = e.score)),
          "maxScore" in e && n(2, (a = e.maxScore)),
          "promoCode" in e && n(3, (o = e.promoCode)),
          "levelHeadphonesImage" in e && n(4, (l = e.levelHeadphonesImage));
      }),
      [c, r, a, o, l, i, g, () => pe()]
    );
  }
  class ct extends ce {
    constructor(e) {
      super(),
        ne(this, e, nt, tt, o, {
          isVictory: 0,
          score: 1,
          maxScore: 2,
          promoCode: 3,
          levelHeadphonesImage: 4,
        });
    }
  }
  function rt(t) {
    let n;
    return {
      c() {
        (n = m("div")),
          (n.innerHTML =
            '<img src="images/jazz_note.png" loading="lazy" alt="" class="img-loader"/> \n    <h1 class="heading2">???????????????????? ????????</h1>'),
          y(n, "class", "container-loader");
      },
      m(e, t) {
        p(e, n, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && h(n);
      },
    };
  }
  class at extends ce {
    constructor(e) {
      super(), ne(this, e, null, rt, o, {});
    }
  }
  function ot(e) {
    let t,
      n,
      c,
      r,
      a,
      o,
      l,
      s = "GAME_MENU_PAGE" == e[0] && st(),
      i = "GAME_TUTORIAL_PAGE" == e[0] && it(e),
      g = "GAME_COUNTDOWN_PAGE" == e[0] && gt(e),
      d = "GAME_PAGE" == e[0] && dt(e),
      u = "GAME_PAUSE" == e[0] && ut(e),
      m = "GAME_END" == e[0] && pt(e);
    return {
      c() {
        s && s.c(),
          (t = w()),
          i && i.c(),
          (n = w()),
          g && g.c(),
          (c = w()),
          d && d.c(),
          (r = w()),
          u && u.c(),
          (a = w()),
          m && m.c(),
          (o = b());
      },
      m(e, h) {
        s && s.m(e, h),
          p(e, t, h),
          i && i.m(e, h),
          p(e, n, h),
          g && g.m(e, h),
          p(e, c, h),
          d && d.m(e, h),
          p(e, r, h),
          u && u.m(e, h),
          p(e, a, h),
          m && m.m(e, h),
          p(e, o, h),
          (l = !0);
      },
      p(e, l) {
        "GAME_MENU_PAGE" == e[0]
          ? s
            ? 1 & l && F(s, 1)
            : ((s = st()), s.c(), F(s, 1), s.m(t.parentNode, t))
          : s &&
            (W(),
            Z(s, 1, 1, () => {
              s = null;
            }),
            K()),
          "GAME_TUTORIAL_PAGE" == e[0]
            ? i
              ? (i.p(e, l), 1 & l && F(i, 1))
              : ((i = it(e)), i.c(), F(i, 1), i.m(n.parentNode, n))
            : i &&
              (W(),
              Z(i, 1, 1, () => {
                i = null;
              }),
              K()),
          "GAME_COUNTDOWN_PAGE" == e[0]
            ? g
              ? (g.p(e, l), 1 & l && F(g, 1))
              : ((g = gt(e)), g.c(), F(g, 1), g.m(c.parentNode, c))
            : g &&
              (W(),
              Z(g, 1, 1, () => {
                g = null;
              }),
              K()),
          "GAME_PAGE" == e[0]
            ? d
              ? (d.p(e, l), 1 & l && F(d, 1))
              : ((d = dt(e)), d.c(), F(d, 1), d.m(r.parentNode, r))
            : d &&
              (W(),
              Z(d, 1, 1, () => {
                d = null;
              }),
              K()),
          "GAME_PAUSE" == e[0]
            ? u
              ? (u.p(e, l), 1 & l && F(u, 1))
              : ((u = ut(e)), u.c(), F(u, 1), u.m(a.parentNode, a))
            : u &&
              (W(),
              Z(u, 1, 1, () => {
                u = null;
              }),
              K()),
          "GAME_END" == e[0]
            ? m
              ? (m.p(e, l), 1 & l && F(m, 1))
              : ((m = pt(e)), m.c(), F(m, 1), m.m(o.parentNode, o))
            : m &&
              (W(),
              Z(m, 1, 1, () => {
                m = null;
              }),
              K());
      },
      i(e) {
        l || (F(s), F(i), F(g), F(d), F(u), F(m), (l = !0));
      },
      o(e) {
        Z(s), Z(i), Z(g), Z(d), Z(u), Z(m), (l = !1);
      },
      d(e) {
        s && s.d(e),
          e && h(t),
          i && i.d(e),
          e && h(n),
          g && g.d(e),
          e && h(c),
          d && d.d(e),
          e && h(r),
          u && u.d(e),
          e && h(a),
          m && m.d(e),
          e && h(o);
      },
    };
  }
  function lt(t) {
    let n, c;
    return (
      (n = new at({})),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          X(n, e, t), (c = !0);
        },
        p: e,
        i(e) {
          c || (F(n.$$.fragment, e), (c = !0));
        },
        o(e) {
          Z(n.$$.fragment, e), (c = !1);
        },
        d(e) {
          ee(n, e);
        },
      }
    );
  }
  function st(e) {
    let t, n;
    return (
      (t = new $e({})),
      {
        c() {
          Q(t.$$.fragment);
        },
        m(e, c) {
          X(t, e, c), (n = !0);
        },
        i(e) {
          n || (F(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          Z(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          ee(t, e);
        },
      }
    );
  }
  function it(e) {
    let t, n;
    return (
      (t = new Ee({ props: { backgroundImage: e[1].backgroundImage } })),
      {
        c() {
          Q(t.$$.fragment);
        },
        m(e, c) {
          X(t, e, c), (n = !0);
        },
        p(e, n) {
          const c = {};
          2 & n && (c.backgroundImage = e[1].backgroundImage), t.$set(c);
        },
        i(e) {
          n || (F(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          Z(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          ee(t, e);
        },
      }
    );
  }
  function gt(e) {
    let t, n;
    return (
      (t = new qe({ props: { backgroundImage: e[1].backgroundImage } })),
      {
        c() {
          Q(t.$$.fragment);
        },
        m(e, c) {
          X(t, e, c), (n = !0);
        },
        p(e, n) {
          const c = {};
          2 & n && (c.backgroundImage = e[1].backgroundImage), t.$set(c);
        },
        i(e) {
          n || (F(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          Z(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          ee(t, e);
        },
      }
    );
  }
  function dt(e) {
    let t, n;
    return (
      (t = new Je({
        props: {
          backgroundImage: e[1].backgroundImage,
          headphoneImage: e[1].headphoneImage,
          genre: e[1].genre,
          isNewGame: e[7],
          score: e[3],
          maxScore: e[4],
        },
      })),
      {
        c() {
          Q(t.$$.fragment);
        },
        m(e, c) {
          X(t, e, c), (n = !0);
        },
        p(e, n) {
          const c = {};
          2 & n && (c.backgroundImage = e[1].backgroundImage),
            2 & n && (c.headphoneImage = e[1].headphoneImage),
            2 & n && (c.genre = e[1].genre),
            8 & n && (c.score = e[3]),
            16 & n && (c.maxScore = e[4]),
            t.$set(c);
        },
        i(e) {
          n || (F(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          Z(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          ee(t, e);
        },
      }
    );
  }
  function ut(e) {
    let t, n;
    return (
      (t = new De({
        props: {
          genre: e[1].genre,
          backgroundImage: e[1].backgroundImage,
          score: e[3],
          maxScore: e[4],
        },
      })),
      {
        c() {
          Q(t.$$.fragment);
        },
        m(e, c) {
          X(t, e, c), (n = !0);
        },
        p(e, n) {
          const c = {};
          2 & n && (c.genre = e[1].genre),
            2 & n && (c.backgroundImage = e[1].backgroundImage),
            8 & n && (c.score = e[3]),
            16 & n && (c.maxScore = e[4]),
            t.$set(c);
        },
        i(e) {
          n || (F(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          Z(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          ee(t, e);
        },
      }
    );
  }
  function pt(e) {
    let t, n;
    return (
      (t = new ct({
        props: {
          score: e[3],
          maxScore: e[4],
          isVictory: e[5],
          levelHeadphonesImage: e[6],
        },
      })),
      {
        c() {
          Q(t.$$.fragment);
        },
        m(e, c) {
          X(t, e, c), (n = !0);
        },
        p(e, n) {
          const c = {};
          8 & n && (c.score = e[3]),
            16 & n && (c.maxScore = e[4]),
            32 & n && (c.isVictory = e[5]),
            64 & n && (c.levelHeadphonesImage = e[6]),
            t.$set(c);
        },
        i(e) {
          n || (F(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          Z(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          ee(t, e);
        },
      }
    );
  }
  function ht(e) {
    let t, n, c, r;
    const a = [lt, ot],
      o = [];
    function l(e, t) {
      return e[2] ? 1 : 0;
    }
    return (
      (t = l(e)),
      (n = o[t] = a[t](e)),
      {
        c() {
          n.c(), (c = b());
        },
        m(e, n) {
          o[t].m(e, n), p(e, c, n), (r = !0);
        },
        p(e, [r]) {
          let s = t;
          (t = l(e)),
            t === s
              ? o[t].p(e, r)
              : (W(),
                Z(o[s], 1, 1, () => {
                  o[s] = null;
                }),
                K(),
                (n = o[t]),
                n ? n.p(e, r) : ((n = o[t] = a[t](e)), n.c()),
                F(n, 1),
                n.m(c.parentNode, c));
        },
        i(e) {
          r || (F(n), (r = !0));
        },
        o(e) {
          Z(n), (r = !1);
        },
        d(e) {
          o[t].d(e), e && h(c);
        },
      }
    );
  }
  function mt(e, t, n) {
    let c,
      r,
      a,
      o,
      l,
      s,
      i = !1;
    return (
      ue.subscribe((e) => {
        n(0, (c = e.currentPage)),
          n(1, (r = e.levelProps)),
          n(2, (i = e.soundsReady)),
          n(4, (o = r.maxScore)),
          n(3, (a = e.score)),
          n(5, (l = e.isVictory)),
          n(6, (s = r.headphoneImage));
      }),
      (c = c || "GAME_MENU_PAGE"),
      [c, r, i, a, o, l, s, undefined]
    );
  }
  return new (class extends ce {
    constructor(e) {
      super(), ne(this, e, mt, ht, o, {});
    }
  })({ target: document.querySelector(".gameapp"), props: {} });
})();
//# sourceMappingURL=bundle.js.map
