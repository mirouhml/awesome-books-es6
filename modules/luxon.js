/* eslint-disable */
class e extends Error {}
class r extends e {
  constructor(e) {
    super("Invalid DateTime: " + e.toMessage());
  }
}
class n extends e {
  constructor(e) {
    super("Invalid Interval: " + e.toMessage());
  }
}
class s extends e {
  constructor(e) {
    super("Invalid Duration: " + e.toMessage());
  }
}
class N extends e {}
class i extends e {
  constructor(e) {
    super("Invalid unit " + e);
  }
}
class o extends e {}
class a extends e {
  constructor() {
    super("Zone is an abstract class");
  }
}
var t = "numeric",
  u = "short",
  l = "long";
const c = { year: t, month: t, day: t },
  h = { year: t, month: u, day: t },
  d = { year: t, month: u, day: t, weekday: u },
  m = { year: t, month: l, day: t },
  f = { year: t, month: l, day: t, weekday: l },
  y = { hour: t, minute: t },
  g = { hour: t, minute: t, second: t },
  w = { hour: t, minute: t, second: t, timeZoneName: u },
  v = { hour: t, minute: t, second: t, timeZoneName: l },
  p = { hour: t, minute: t, hourCycle: "h23" },
  T = { hour: t, minute: t, second: t, hourCycle: "h23" },
  S = { hour: t, minute: t, second: t, hourCycle: "h23", timeZoneName: u },
  O = { hour: t, minute: t, second: t, hourCycle: "h23", timeZoneName: l },
  b = { year: t, month: t, day: t, hour: t, minute: t },
  k = { year: t, month: t, day: t, hour: t, minute: t, second: t },
  M = { year: t, month: u, day: t, hour: t, minute: t },
  D = { year: t, month: u, day: t, hour: t, minute: t, second: t },
  E = { year: t, month: u, day: t, weekday: u, hour: t, minute: t },
  V = { year: t, month: l, day: t, hour: t, minute: t, timeZoneName: u },
  I = {
    year: t,
    month: l,
    day: t,
    hour: t,
    minute: t,
    second: t,
    timeZoneName: u,
  },
  x = {
    year: t,
    month: l,
    day: t,
    weekday: l,
    hour: t,
    minute: t,
    timeZoneName: l,
  },
  C = {
    year: t,
    month: l,
    day: t,
    weekday: l,
    hour: t,
    minute: t,
    second: t,
    timeZoneName: l,
  };
function F(e) {
  return void 0 === e;
}
function L(e) {
  return "number" == typeof e;
}
function Z(e) {
  return "number" == typeof e && e % 1 == 0;
}
function z() {
  try {
    return "undefined" != typeof Intl && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return !1;
  }
}
function q(e, r, n) {
  if (0 !== e.length)
    return e.reduce((e, t) => {
      t = [r(t), t];
      return e && n(e[0], t[0]) === e[0] ? e : t;
    }, null)[1];
}
function A(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function j(e, t, r) {
  return Z(e) && t <= e && e <= r;
}
function _(e, t = 2) {
  let r;
  return (
    (r = e < 0 ? "-" + ("" + -e).padStart(t, "0") : ("" + e).padStart(t, "0")),
    r
  );
}
function U(e) {
  if (!F(e) && null !== e && "" !== e) return parseInt(e, 10);
}
function $(e) {
  if (!F(e) && null !== e && "" !== e) return parseFloat(e);
}
function H(e) {
  if (!F(e) && null !== e && "" !== e) {
    e = 1e3 * parseFloat("0." + e);
    return Math.floor(e);
  }
}
function W(e, t, r = !1) {
  const n = 10 ** t,
    s = r ? Math.trunc : Math.round;
  return s(e * n) / n;
}
function R(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function J(e) {
  return R(e) ? 366 : 365;
}
function P(e, t) {
  var r,
    n = (r = t - 1) - (n = 12) * Math.floor(r / n) + 1;
  return 2 == n
    ? R(e + (t - n) / 12)
      ? 29
      : 28
    : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function Y(e) {
  let t = Date.UTC(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second,
    e.millisecond
  );
  return (
    e.year < 100 &&
      0 <= e.year &&
      ((t = new Date(t)), t.setUTCFullYear(t.getUTCFullYear() - 1900)),
    +t
  );
}
function G(e) {
  var t =
      (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7,
    e = e - 1,
    e = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7;
  return 4 == t || 3 == e ? 53 : 52;
}
function B(e) {
  return 99 < e ? e : 60 < e ? 1900 + e : 2e3 + e;
}
function Q(e, t, r, n = null) {
  const s = new Date(e),
    i = {
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
  n && (i.timeZone = n);
  (t = { timeZoneName: t, ...i }),
    (t = new Intl.DateTimeFormat(r, t)
      .formatToParts(s)
      .find((e) => "timezonename" === e.type.toLowerCase()));
  return t ? t.value : null;
}
function K(e, t) {
  let r = parseInt(e, 10);
  Number.isNaN(r) && (r = 0);
  (t = parseInt(t, 10) || 0), (t = r < 0 || Object.is(r, -0) ? -t : t);
  return 60 * r + t;
}
function X(e) {
  var t = Number(e);
  if ("boolean" == typeof e || "" === e || Number.isNaN(t))
    throw new o("Invalid unit value " + e);
  return t;
}
function ee(e, t) {
  const r = {};
  for (const s in e) {
    var n;
    !A(e, s) || (null != (n = e[s]) && (r[t(s)] = X(n)));
  }
  return r;
}
function te(e, t) {
  var r = Math.trunc(Math.abs(e / 60)),
    n = Math.trunc(Math.abs(e % 60)),
    s = 0 <= e ? "+" : "-";
  switch (t) {
    case "short":
      return s + _(r, 2) + ":" + _(n, 2);
    case "narrow":
      return s + r + (0 < n ? ":" + n : "");
    case "techie":
      return s + _(r, 2) + _(n, 2);
    default:
      throw new RangeError(
        `Value format ${t} is out of range for property format`
      );
  }
}
function re(e) {
  return (
    (r = e),
    ["hour", "minute", "second", "millisecond"].reduce(
      (e, t) => ((e[t] = r[t]), e),
      {}
    )
  );
  var r;
}
var ne =
  /[A-Za-z_+-]{1,256}(:?\/[A-Za-z0-9_+-]{1,256}(\/[A-Za-z0-9_+-]{1,256})?)?/;
const se = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  ie = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  ae = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function oe(e) {
  switch (e) {
    case "narrow":
      return [...ae];
    case "short":
      return [...ie];
    case "long":
      return [...se];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ];
    default:
      return null;
  }
}
const ue = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  le = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  ce = ["M", "T", "W", "T", "F", "S", "S"];
function he(e) {
  switch (e) {
    case "narrow":
      return [...ce];
    case "short":
      return [...le];
    case "long":
      return [...ue];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const de = ["AM", "PM"],
  me = ["Before Christ", "Anno Domini"],
  fe = ["BC", "AD"],
  ye = ["B", "A"];
function ge(e) {
  switch (e) {
    case "narrow":
      return [...ye];
    case "short":
      return [...fe];
    case "long":
      return [...me];
    default:
      return null;
  }
}
function we(e, t) {
  let r = "";
  for (const n of e) n.literal ? (r += n.val) : (r += t(n.val));
  return r;
}
const ve = {
  D: c,
  DD: h,
  DDD: m,
  DDDD: f,
  t: y,
  tt: g,
  ttt: w,
  tttt: v,
  T: p,
  TT: T,
  TTT: S,
  TTTT: O,
  f: b,
  ff: M,
  fff: V,
  ffff: x,
  F: k,
  FF: D,
  FFF: I,
  FFFF: C,
};
class pe {
  static create(e, t = {}) {
    return new pe(e, t);
  }
  static parseFormat(t) {
    let r = null,
      n = "",
      s = !1;
    const i = [];
    for (let e = 0; e < t.length; e++) {
      var a = t.charAt(e);
      "'" === a
        ? (0 < n.length && i.push({ literal: s, val: n }),
          (r = null),
          (n = ""),
          (s = !s))
        : s || a === r
        ? (n += a)
        : (0 < n.length && i.push({ literal: !1, val: n }), (n = a), (r = a));
    }
    return 0 < n.length && i.push({ literal: s, val: n }), i;
  }
  static macroTokenToFormatOpts(e) {
    return ve[e];
  }
  constructor(e, t) {
    (this.opts = t), (this.loc = e), (this.systemLoc = null);
  }
  formatWithSystemDefault(e, t) {
    null === this.systemLoc && (this.systemLoc = this.loc.redefaultToSystem());
    const r = this.systemLoc.dtFormatter(e, { ...this.opts, ...t });
    return r.format();
  }
  formatDateTime(e, t = {}) {
    const r = this.loc.dtFormatter(e, { ...this.opts, ...t });
    return r.format();
  }
  formatDateTimeParts(e, t = {}) {
    const r = this.loc.dtFormatter(e, { ...this.opts, ...t });
    return r.formatToParts();
  }
  resolvedOptions(e, t = {}) {
    const r = this.loc.dtFormatter(e, { ...this.opts, ...t });
    return r.resolvedOptions();
  }
  num(e, t = 0) {
    if (this.opts.forceSimple) return _(e, t);
    const r = { ...this.opts };
    return 0 < t && (r.padTo = t), this.loc.numberFormatter(r).format(e);
  }
  formatDateTimeFromString(r, e) {
    const n = "en" === this.loc.listingMode(),
      t = this.loc.outputCalendar && "gregory" !== this.loc.outputCalendar,
      s = (e, t) => this.loc.extract(r, e, t),
      i = (e) =>
        r.isOffsetFixed && 0 === r.offset && e.allowZ
          ? "Z"
          : r.isValid
          ? r.zone.formatOffset(r.ts, e.format)
          : "",
      a = () =>
        n
          ? (function (e) {
              return de[e.hour < 12 ? 0 : 1];
            })(r)
          : s({ hour: "numeric", hourCycle: "h12" }, "dayperiod"),
      o = (e, t) =>
        n
          ? (function (e, t) {
              return oe(t)[e.month - 1];
            })(r, e)
          : s(t ? { month: e } : { month: e, day: "numeric" }, "month"),
      u = (e, t) =>
        n
          ? (function (e, t) {
              return he(t)[e.weekday - 1];
            })(r, e)
          : s(
              t
                ? { weekday: e }
                : { weekday: e, month: "long", day: "numeric" },
              "weekday"
            ),
      l = (e) => {
        var t = pe.macroTokenToFormatOpts(e);
        return t ? this.formatWithSystemDefault(r, t) : e;
      },
      c = (e) =>
        n
          ? (function (e, t) {
              return ge(t)[e.year < 0 ? 0 : 1];
            })(r, e)
          : s({ era: e }, "era");
    return we(pe.parseFormat(e), (e) => {
      switch (e) {
        case "S":
          return this.num(r.millisecond);
        case "u":
        case "SSS":
          return this.num(r.millisecond, 3);
        case "s":
          return this.num(r.second);
        case "ss":
          return this.num(r.second, 2);
        case "uu":
          return this.num(Math.floor(r.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(r.millisecond / 100));
        case "m":
          return this.num(r.minute);
        case "mm":
          return this.num(r.minute, 2);
        case "h":
          return this.num(r.hour % 12 == 0 ? 12 : r.hour % 12);
        case "hh":
          return this.num(r.hour % 12 == 0 ? 12 : r.hour % 12, 2);
        case "H":
          return this.num(r.hour);
        case "HH":
          return this.num(r.hour, 2);
        case "Z":
          return i({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return i({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return i({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return r.zone.offsetName(r.ts, {
            format: "short",
            locale: this.loc.locale,
          });
        case "ZZZZZ":
          return r.zone.offsetName(r.ts, {
            format: "long",
            locale: this.loc.locale,
          });
        case "z":
          return r.zoneName;
        case "a":
          return a();
        case "d":
          return t ? s({ day: "numeric" }, "day") : this.num(r.day);
        case "dd":
          return t ? s({ day: "2-digit" }, "day") : this.num(r.day, 2);
        case "c":
          return this.num(r.weekday);
        case "ccc":
          return u("short", !0);
        case "cccc":
          return u("long", !0);
        case "ccccc":
          return u("narrow", !0);
        case "E":
          return this.num(r.weekday);
        case "EEE":
          return u("short", !1);
        case "EEEE":
          return u("long", !1);
        case "EEEEE":
          return u("narrow", !1);
        case "L":
          return t
            ? s({ month: "numeric", day: "numeric" }, "month")
            : this.num(r.month);
        case "LL":
          return t
            ? s({ month: "2-digit", day: "numeric" }, "month")
            : this.num(r.month, 2);
        case "LLL":
          return o("short", !0);
        case "LLLL":
          return o("long", !0);
        case "LLLLL":
          return o("narrow", !0);
        case "M":
          return t ? s({ month: "numeric" }, "month") : this.num(r.month);
        case "MM":
          return t ? s({ month: "2-digit" }, "month") : this.num(r.month, 2);
        case "MMM":
          return o("short", !1);
        case "MMMM":
          return o("long", !1);
        case "MMMMM":
          return o("narrow", !1);
        case "y":
          return t ? s({ year: "numeric" }, "year") : this.num(r.year);
        case "yy":
          return t
            ? s({ year: "2-digit" }, "year")
            : this.num(r.year.toString().slice(-2), 2);
        case "yyyy":
          return t ? s({ year: "numeric" }, "year") : this.num(r.year, 4);
        case "yyyyyy":
          return t ? s({ year: "numeric" }, "year") : this.num(r.year, 6);
        case "G":
          return c("short");
        case "GG":
          return c("long");
        case "GGGGG":
          return c("narrow");
        case "kk":
          return this.num(r.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(r.weekYear, 4);
        case "W":
          return this.num(r.weekNumber);
        case "WW":
          return this.num(r.weekNumber, 2);
        case "o":
          return this.num(r.ordinal);
        case "ooo":
          return this.num(r.ordinal, 3);
        case "q":
          return this.num(r.quarter);
        case "qq":
          return this.num(r.quarter, 2);
        case "X":
          return this.num(Math.floor(r.ts / 1e3));
        case "x":
          return this.num(r.ts);
        default:
          return l(e);
      }
    });
  }
  formatDurationFromString(e, t) {
    const r = (e) => {
        switch (e[0]) {
          case "S":
            return "millisecond";
          case "s":
            return "second";
          case "m":
            return "minute";
          case "h":
            return "hour";
          case "d":
            return "day";
          case "M":
            return "month";
          case "y":
            return "year";
          default:
            return null;
        }
      },
      n = pe.parseFormat(t),
      s = n.reduce((e, { literal: t, val: r }) => (t ? e : e.concat(r)), []),
      i = e.shiftTo(...s.map(r).filter((e) => e));
    return we(
      n,
      ((a = i),
      (e) => {
        var t = r(e);
        return t ? this.num(a.get(t), e.length) : e;
      })
    );
    var a;
  }
}
class Te {
  constructor(e, t) {
    (this.reason = e), (this.explanation = t);
  }
  toMessage() {
    return this.explanation
      ? this.reason + ": " + this.explanation
      : this.reason;
  }
}
class Se {
  get type() {
    throw new a();
  }
  get name() {
    throw new a();
  }
  get isUniversal() {
    throw new a();
  }
  offsetName(e, t) {
    throw new a();
  }
  formatOffset(e, t) {
    throw new a();
  }
  offset(e) {
    throw new a();
  }
  equals(e) {
    throw new a();
  }
  get isValid() {
    throw new a();
  }
}
let Oe = null;
class be extends Se {
  static get instance() {
    return null === Oe && (Oe = new be()), Oe;
  }
  get type() {
    return "system";
  }
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(e, { format: t, locale: r }) {
    return Q(e, t, r);
  }
  formatOffset(e, t) {
    return te(this.offset(e), t);
  }
  offset(e) {
    return -new Date(e).getTimezoneOffset();
  }
  equals(e) {
    return "system" === e.type;
  }
  get isValid() {
    return !0;
  }
}
const ke = RegExp(`^${ne.source}$`);
let Me = {};
const Ne = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 };
let De = {};
class Ee extends Se {
  static create(e) {
    return De[e] || (De[e] = new Ee(e)), De[e];
  }
  static resetCache() {
    (De = {}), (Me = {});
  }
  static isValidSpecifier(e) {
    return !(!e || !e.match(ke));
  }
  static isValidZone(e) {
    if (!e) return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0;
    } catch (e) {
      return !1;
    }
  }
  constructor(e) {
    super(), (this.zoneName = e), (this.valid = Ee.isValidZone(e));
  }
  get type() {
    return "iana";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(e, { format: t, locale: r }) {
    return Q(e, t, r, this.name);
  }
  formatOffset(e, t) {
    return te(this.offset(e), t);
  }
  offset(e) {
    var t = new Date(e);
    if (isNaN(t)) return NaN;
    var r =
        ((o = this.name),
        Me[o] ||
          (Me[o] = new Intl.DateTimeFormat("en-US", {
            hour12: !1,
            timeZone: o,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })),
        Me[o]),
      [n, s, i, a, e, o] = (
        r.formatToParts
          ? function (e, t) {
              const r = e.formatToParts(t),
                n = [];
              for (let e = 0; e < r.length; e++) {
                var { type: s, value: i } = r[e],
                  s = Ne[s];
                F(s) || (n[s] = parseInt(i, 10));
              }
              return n;
            }
          : function (e, t) {
              var r = e.format(t).replace(/\u200E/g, ""),
                [, n, s, i, e, t, r] =
                  /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(r);
              return [i, n, s, e, t, r];
            }
      )(r, t),
      r = +t,
      t = r % 1e3;
    return (
      (Y({
        year: n,
        month: s,
        day: i,
        hour: 24 === a ? 0 : a,
        minute: e,
        second: o,
        millisecond: 0,
      }) -
        (r -= 0 <= t ? t : 1e3 + t)) /
      6e4
    );
  }
  equals(e) {
    return "iana" === e.type && e.name === this.name;
  }
  get isValid() {
    return this.valid;
  }
}
let Ve = null;
class Ie extends Se {
  static get utcInstance() {
    return null === Ve && (Ve = new Ie(0)), Ve;
  }
  static instance(e) {
    return 0 === e ? Ie.utcInstance : new Ie(e);
  }
  static parseSpecifier(e) {
    if (e) {
      e = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (e) return new Ie(K(e[1], e[2]));
    }
    return null;
  }
  constructor(e) {
    super(), (this.fixed = e);
  }
  get type() {
    return "fixed";
  }
  get name() {
    return 0 === this.fixed ? "UTC" : "UTC" + te(this.fixed, "narrow");
  }
  offsetName() {
    return this.name;
  }
  formatOffset(e, t) {
    return te(this.fixed, t);
  }
  get isUniversal() {
    return !0;
  }
  offset() {
    return this.fixed;
  }
  equals(e) {
    return "fixed" === e.type && e.fixed === this.fixed;
  }
  get isValid() {
    return !0;
  }
}
class xe extends Se {
  constructor(e) {
    super(), (this.zoneName = e);
  }
  get type() {
    return "invalid";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName() {
    return null;
  }
  formatOffset() {
    return "";
  }
  offset() {
    return NaN;
  }
  equals() {
    return !1;
  }
  get isValid() {
    return !1;
  }
}
function Ce(e, t) {
  if (F(e) || null === e) return t;
  if (e instanceof Se) return e;
  if ("string" != typeof e)
    return L(e)
      ? Ie.instance(e)
      : "object" == typeof e && e.offset && "number" == typeof e.offset
      ? e
      : new xe(e);
  var r = e.toLowerCase();
  return "local" === r || "system" === r
    ? t
    : "utc" === r || "gmt" === r
    ? Ie.utcInstance
    : Ee.isValidSpecifier(r)
    ? Ee.create(e)
    : Ie.parseSpecifier(r) || new xe(e);
}
let Fe = () => Date.now(),
  Le = "system",
  Ze = null,
  ze = null,
  qe = null,
  Ae;
class je {
  static get now() {
    return Fe;
  }
  static set now(e) {
    Fe = e;
  }
  static set defaultZone(e) {
    Le = e;
  }
  static get defaultZone() {
    return Ce(Le, be.instance);
  }
  static get defaultLocale() {
    return Ze;
  }
  static set defaultLocale(e) {
    Ze = e;
  }
  static get defaultNumberingSystem() {
    return ze;
  }
  static set defaultNumberingSystem(e) {
    ze = e;
  }
  static get defaultOutputCalendar() {
    return qe;
  }
  static set defaultOutputCalendar(e) {
    qe = e;
  }
  static get throwOnInvalid() {
    return Ae;
  }
  static set throwOnInvalid(e) {
    Ae = e;
  }
  static resetCaches() {
    Be.resetCache(), Ee.resetCache();
  }
}
let _e = {};
let Ue = {};
function $e(e, t = {}) {
  var r = JSON.stringify([e, t]);
  let n = Ue[r];
  return n || ((n = new Intl.DateTimeFormat(e, t)), (Ue[r] = n)), n;
}
let He = {};
let We = {};
let Re = null;
function Je(e, t, r, n, s) {
  r = e.listingMode(r);
  return "error" === r ? null : ("en" === r ? n : s)(t);
}
class Pe {
  constructor(e, t, r) {
    (this.padTo = r.padTo || 0), (this.floor = r.floor || !1);
    const { padTo: n, floor: s, ...i } = r;
    if (!t || 0 < Object.keys(i).length) {
      const a = { useGrouping: !1, ...r };
      0 < r.padTo && (a.minimumIntegerDigits = r.padTo),
        (this.inf = (function (e, t = {}) {
          var r = JSON.stringify([e, t]);
          let n = He[r];
          return n || ((n = new Intl.NumberFormat(e, t)), (He[r] = n)), n;
        })(e, a));
    }
  }
  format(e) {
    if (this.inf) {
      var t = this.floor ? Math.floor(e) : e;
      return this.inf.format(t);
    }
    return _(this.floor ? Math.floor(e) : W(e, 3), this.padTo);
  }
}
class Ye {
  constructor(e, t, r) {
    this.opts = r;
    let n;
    var s;
    e.zone.isUniversal
      ? ((s = 0 <= (s = (e.offset / 60) * -1) ? "Etc/GMT+" + s : "Etc/GMT" + s),
        0 !== e.offset && Ee.create(s).valid
          ? ((n = s), (this.dt = e))
          : ((n = "UTC"),
            r.timeZoneName
              ? (this.dt = e)
              : (this.dt =
                  0 === e.offset
                    ? e
                    : Jr.fromMillis(e.ts + 60 * e.offset * 1e3))))
      : "system" === e.zone.type
      ? (this.dt = e)
      : ((this.dt = e), (n = e.zone.name));
    const i = { ...this.opts };
    n && (i.timeZone = n), (this.dtf = $e(t, i));
  }
  format() {
    return this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class Ge {
  constructor(e, t, r) {
    (this.opts = { style: "long", ...r }),
      !t &&
        z() &&
        (this.rtf = (function (e, t = {}) {
          const { base: r, ...n } = t;
          var s = JSON.stringify([e, n]);
          let i = We[s];
          return i || ((i = new Intl.RelativeTimeFormat(e, t)), (We[s] = i)), i;
        })(e, r));
  }
  format(e, t) {
    return this.rtf
      ? this.rtf.format(e, t)
      : (function (e, t, r = "always", n) {
          var s = {
              years: ["year", "yr."],
              quarters: ["quarter", "qtr."],
              months: ["month", "mo."],
              weeks: ["week", "wk."],
              days: ["day", "day", "days"],
              hours: ["hour", "hr."],
              minutes: ["minute", "min."],
              seconds: ["second", "sec."],
            },
            i = -1 === ["hours", "minutes", "seconds"].indexOf(e);
          if ("auto" === r && i) {
            var a = "days" === e;
            switch (t) {
              case 1:
                return a ? "tomorrow" : "next " + s[e][0];
              case -1:
                return a ? "yesterday" : "last " + s[e][0];
              case 0:
                return a ? "today" : "this " + s[e][0];
            }
          }
          var o = Object.is(t, -0) || t < 0,
            i = 1 === (r = Math.abs(t)),
            t = s[e],
            i = n ? (!i && t[2]) || t[1] : i ? s[e][0] : e;
          return o ? r + ` ${i} ago` : `in ${r} ` + i;
        })(t, e, this.opts.numeric, "long" !== this.opts.style);
  }
  formatToParts(e, t) {
    return this.rtf ? this.rtf.formatToParts(e, t) : [];
  }
}
class Be {
  static fromOpts(e) {
    return Be.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.defaultToEN
    );
  }
  static create(e, t, r, n = !1) {
    (e = e || je.defaultLocale),
      (n =
        e ||
        (n
          ? "en-US"
          : Re ||
            ((Re = new Intl.DateTimeFormat().resolvedOptions().locale), Re))),
      (t = t || je.defaultNumberingSystem),
      (r = r || je.defaultOutputCalendar);
    return new Be(n, t, r, e);
  }
  static resetCache() {
    (Re = null), (Ue = {}), (He = {}), (We = {});
  }
  static fromObject({ locale: e, numberingSystem: t, outputCalendar: r } = {}) {
    return Be.create(e, t, r);
  }
  constructor(e, t, r, n) {
    var [s, i, e] = (function (e) {
      if (-1 === (n = e.indexOf("-u-"))) return [e];
      {
        let t;
        var r = e.substring(0, n);
        try {
          t = $e(e).resolvedOptions();
        } catch (e) {
          t = $e(r).resolvedOptions();
        }
        var { numberingSystem: n, calendar: e } = t;
        return [r, n, e];
      }
    })(e);
    (this.locale = s),
      (this.numberingSystem = t || i || null),
      (this.outputCalendar = r || e || null),
      (this.intl =
        ((i = this.locale),
        (r = this.numberingSystem),
        ((e = this.outputCalendar) || r) &&
          ((i += "-u"), e && (i += "-ca-" + e), r && (i += "-nu-" + r)),
        i)),
      (this.weekdaysCache = { format: {}, standalone: {} }),
      (this.monthsCache = { format: {}, standalone: {} }),
      (this.meridiemCache = null),
      (this.eraCache = {}),
      (this.specifiedLocale = n),
      (this.fastNumbersCached = null);
  }
  get fastNumbers() {
    var e;
    return (
      null == this.fastNumbersCached &&
        (this.fastNumbersCached =
          (!(e = this).numberingSystem || "latn" === e.numberingSystem) &&
          ("latn" === e.numberingSystem ||
            !e.locale ||
            e.locale.startsWith("en") ||
            "latn" ===
              new Intl.DateTimeFormat(e.intl).resolvedOptions()
                .numberingSystem)),
      this.fastNumbersCached
    );
  }
  listingMode() {
    var e = this.isEnglish(),
      t = !(
        (null !== this.numberingSystem && "latn" !== this.numberingSystem) ||
        (null !== this.outputCalendar && "gregory" !== this.outputCalendar)
      );
    return e && t ? "en" : "intl";
  }
  clone(e) {
    return e && 0 !== Object.getOwnPropertyNames(e).length
      ? Be.create(
          e.locale || this.specifiedLocale,
          e.numberingSystem || this.numberingSystem,
          e.outputCalendar || this.outputCalendar,
          e.defaultToEN || !1
        )
      : this;
  }
  redefaultToEN(e = {}) {
    return this.clone({ ...e, defaultToEN: !0 });
  }
  redefaultToSystem(e = {}) {
    return this.clone({ ...e, defaultToEN: !1 });
  }
  months(r, n = !1, e = !0) {
    return Je(this, r, e, oe, () => {
      const t = n ? { month: r, day: "numeric" } : { month: r },
        e = n ? "format" : "standalone";
      return (
        this.monthsCache[e][r] ||
          (this.monthsCache[e][r] = (function (t) {
            const r = [];
            for (let e = 1; e <= 12; e++) {
              var n = Jr.utc(2016, e, 1);
              r.push(t(n));
            }
            return r;
          })((e) => this.extract(e, t, "month"))),
        this.monthsCache[e][r]
      );
    });
  }
  weekdays(r, n = !1, e = !0) {
    return Je(this, r, e, he, () => {
      const t = n
          ? { weekday: r, year: "numeric", month: "long", day: "numeric" }
          : { weekday: r },
        e = n ? "format" : "standalone";
      return (
        this.weekdaysCache[e][r] ||
          (this.weekdaysCache[e][r] = (function (t) {
            const r = [];
            for (let e = 1; e <= 7; e++) {
              var n = Jr.utc(2016, 11, 13 + e);
              r.push(t(n));
            }
            return r;
          })((e) => this.extract(e, t, "weekday"))),
        this.weekdaysCache[e][r]
      );
    });
  }
  meridiems(e = !0) {
    return Je(
      this,
      void 0,
      e,
      () => de,
      () => {
        if (!this.meridiemCache) {
          const t = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [
            Jr.utc(2016, 11, 13, 9),
            Jr.utc(2016, 11, 13, 19),
          ].map((e) => this.extract(e, t, "dayperiod"));
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e, t = !0) {
    return Je(this, e, t, ge, () => {
      const t = { era: e };
      return (
        this.eraCache[e] ||
          (this.eraCache[e] = [Jr.utc(-40, 1, 1), Jr.utc(2017, 1, 1)].map((e) =>
            this.extract(e, t, "era")
          )),
        this.eraCache[e]
      );
    });
  }
  extract(e, t, r) {
    const n = this.dtFormatter(e, t),
      s = n.formatToParts(),
      i = s.find((e) => e.type.toLowerCase() === r);
    return i ? i.value : null;
  }
  numberFormatter(e = {}) {
    return new Pe(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, t = {}) {
    return new Ye(e, this.intl, t);
  }
  relFormatter(e = {}) {
    return new Ge(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return (function (e, t = {}) {
      var r = JSON.stringify([e, t]);
      let n = _e[r];
      return n || ((n = new Intl.ListFormat(e, t)), (_e[r] = n)), n;
    })(this.intl, e);
  }
  isEnglish() {
    return (
      "en" === this.locale ||
      "en-us" === this.locale.toLowerCase() ||
      new Intl.DateTimeFormat(this.intl)
        .resolvedOptions()
        .locale.startsWith("en-us")
    );
  }
  equals(e) {
    return (
      this.locale === e.locale &&
      this.numberingSystem === e.numberingSystem &&
      this.outputCalendar === e.outputCalendar
    );
  }
}
function Qe(...e) {
  e = e.reduce((e, t) => e + t.source, "");
  return RegExp(`^${e}$`);
}
function Ke(...e) {
  return (i) =>
    e
      .reduce(
        ([e, t, r], n) => {
          var [s, n, r] = n(i, r);
          return [{ ...e, ...s }, t || n, r];
        },
        [{}, null, 1]
      )
      .slice(0, 2);
}
function Xe(e, ...t) {
  if (null == e) return [null, null];
  for (var [r, n] of t) {
    r = r.exec(e);
    if (r) return n(r);
  }
  return [null, null];
}
function et(...s) {
  return (e, t) => {
    const r = {};
    let n;
    for (n = 0; n < s.length; n++) r[s[n]] = U(e[t + n]);
    return [r, null, t + n];
  };
}
var tt = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
  rt = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
  nt = RegExp("" + rt.source + tt.source + "?"),
  u = RegExp(`(?:T${nt.source})?`),
  t = et("weekYear", "weekNumber", "weekDay"),
  l = et("year", "ordinal"),
  tt = RegExp(rt.source + ` ?(?:${tt.source}|(${ne.source}))?`),
  ne = RegExp(`(?: ${tt.source})?`);
function st(e, t, r) {
  t = e[t];
  return F(t) ? r : U(t);
}
function it(e, t) {
  return [
    { year: st(e, t), month: st(e, t + 1, 1), day: st(e, t + 2, 1) },
    null,
    t + 3,
  ];
}
function at(e, t) {
  return [
    {
      hours: st(e, t, 0),
      minutes: st(e, t + 1, 0),
      seconds: st(e, t + 2, 0),
      milliseconds: H(e[t + 3]),
    },
    null,
    t + 4,
  ];
}
function ot(e, t) {
  var r = !e[t] && !e[t + 1],
    e = K(e[t + 1], e[t + 2]);
  return [{}, r ? null : Ie.instance(e), t + 3];
}
function ut(e, t) {
  return [{}, e[t] ? Ee.create(e[t]) : null, t + 1];
}
const lt = RegExp(`^T?${rt.source}$`),
  ct =
    /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
function ht(e) {
  var [t, r, n, s, i, a, o, u, l] = e;
  const c = "-" === t[0];
  (e = u && "-" === u[0]),
    (t = (e, t = !1) => (void 0 !== e && (t || (e && c)) ? -e : e));
  return [
    {
      years: t($(r)),
      months: t($(n)),
      weeks: t($(s)),
      days: t($(i)),
      hours: t($(a)),
      minutes: t($(o)),
      seconds: t($(u), "-0" === u),
      milliseconds: t(H(l), e),
    },
  ];
}
const dt = {
  GMT: 0,
  EDT: -240,
  EST: -300,
  CDT: -300,
  CST: -360,
  MDT: -360,
  MST: -420,
  PDT: -420,
  PST: -480,
};
function mt(e, t, r, n, s, i, a) {
  const o = {
    year: 2 === t.length ? B(U(t)) : U(t),
    month: ie.indexOf(r) + 1,
    day: U(n),
    hour: U(s),
    minute: U(i),
  };
  return (
    a && (o.second = U(a)),
    e && (o.weekday = 3 < e.length ? ue.indexOf(e) + 1 : le.indexOf(e) + 1),
    o
  );
}
const ft =
  /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function yt(e) {
  var [, t, r, n, s, i, a, o, u, l, c, e] = e,
    o = mt(t, s, n, r, i, a, o);
  let h;
  return (h = u ? dt[u] : l ? 0 : K(c, e)), [o, new Ie(h)];
}
const gt =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
  wt =
    /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
  vt =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function pt(e) {
  var [, t, r, n, s, i, a, e] = e;
  return [mt(t, s, n, r, i, a, e), Ie.utcInstance];
}
function Tt(e) {
  var [, t, r, n, s, i, a, e] = e;
  return [mt(t, e, r, n, s, i, a), Ie.utcInstance];
}
const St = Qe(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, u),
  Ot = Qe(/(\d{4})-?W(\d\d)(?:-?(\d))?/, u),
  bt = Qe(/(\d{4})-?(\d{3})/, u),
  kt = Qe(nt),
  Mt = Ke(it, at, ot),
  Nt = Ke(t, at, ot),
  Dt = Ke(l, at, ot),
  Et = Ke(at, ot);
const Vt = Ke(at);
const It = Qe(/(\d{4})-(\d\d)-(\d\d)/, ne),
  xt = Qe(tt),
  Ct = Ke(it, at, ot, ut),
  Ft = Ke(at, ot, ut);
const Lt = {
    weeks: {
      days: 7,
      hours: 168,
      minutes: 10080,
      seconds: 604800,
      milliseconds: 6048e5,
    },
    days: { hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5 },
    hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 },
    minutes: { seconds: 60, milliseconds: 6e4 },
    seconds: { milliseconds: 1e3 },
  },
  Zt = {
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 8760,
      minutes: 525600,
      seconds: 31536e3,
      milliseconds: 31536e6,
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 2184,
      minutes: 131040,
      seconds: 7862400,
      milliseconds: 78624e5,
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 720,
      minutes: 43200,
      seconds: 2592e3,
      milliseconds: 2592e6,
    },
    ...Lt,
  },
  zt = 365.2425,
  qt = 30.436875,
  At = {
    years: {
      quarters: 4,
      months: 12,
      weeks: zt / 7,
      days: zt,
      hours: 24 * zt,
      minutes: 525949.2,
      seconds: 525949.2 * 60,
      milliseconds: 525949.2 * 60 * 1e3,
    },
    quarters: {
      months: 3,
      weeks: zt / 28,
      days: zt / 4,
      hours: (24 * zt) / 4,
      minutes: 131487.3,
      seconds: (525949.2 * 60) / 4,
      milliseconds: 7889237999.999999,
    },
    months: {
      weeks: qt / 7,
      days: qt,
      hours: 24 * qt,
      minutes: 43829.1,
      seconds: 2629746,
      milliseconds: 2629746e3,
    },
    ...Lt,
  },
  jt = [
    "years",
    "quarters",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds",
  ],
  _t = jt.slice(0).reverse();
function Ut(e, t, r = !1) {
  e = {
    values: r ? t.values : { ...e.values, ...(t.values || {}) },
    loc: e.loc.clone(t.loc),
    conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
  };
  return new Ht(e);
}
function $t(e, t, r, n, s) {
  var i = e[s][r],
    a = t[r] / i,
    a =
      !(Math.sign(a) === Math.sign(n[s])) && 0 !== n[s] && Math.abs(a) <= 1
        ? (e = a) < 0
          ? Math.floor(e)
          : Math.ceil(e)
        : Math.trunc(a);
  (n[s] += a), (t[r] -= a * i);
}
class Ht {
  constructor(e) {
    var t = "longterm" === e.conversionAccuracy || !1;
    (this.values = e.values),
      (this.loc = e.loc || Be.create()),
      (this.conversionAccuracy = t ? "longterm" : "casual"),
      (this.invalid = e.invalid || null),
      (this.matrix = t ? At : Zt),
      (this.isLuxonDuration = !0);
  }
  static fromMillis(e, t) {
    return Ht.fromObject({ milliseconds: e }, t);
  }
  static fromObject(e, t = {}) {
    if (null == e || "object" != typeof e)
      throw new o(
        "Duration.fromObject: argument expected to be an object, got " +
          (null === e ? "null" : typeof e)
      );
    return new Ht({
      values: ee(e, Ht.normalizeUnit),
      loc: Be.fromObject(t),
      conversionAccuracy: t.conversionAccuracy,
    });
  }
  static fromDurationLike(e) {
    if (L(e)) return Ht.fromMillis(e);
    if (Ht.isDuration(e)) return e;
    if ("object" == typeof e) return Ht.fromObject(e);
    throw new o(`Unknown duration argument ${e} of type ` + typeof e);
  }
  static fromISO(e, t) {
    var [r] = Xe(e, [ct, ht]);
    return r
      ? Ht.fromObject(r, t)
      : Ht.invalid(
          "unparsable",
          `the input "${e}" can't be parsed as ISO 8601`
        );
  }
  static fromISOTime(e, t) {
    var [r] = Xe(e, [lt, Vt]);
    return r
      ? Ht.fromObject(r, t)
      : Ht.invalid(
          "unparsable",
          `the input "${e}" can't be parsed as ISO 8601`
        );
  }
  static invalid(e, t = null) {
    if (!e) throw new o("need to specify a reason the Duration is invalid");
    t = e instanceof Te ? e : new Te(e, t);
    if (je.throwOnInvalid) throw new s(t);
    return new Ht({ invalid: t });
  }
  static normalizeUnit(e) {
    var t = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds",
    }[e && e.toLowerCase()];
    if (!t) throw new i(e);
    return t;
  }
  static isDuration(e) {
    return (e && e.isLuxonDuration) || !1;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  toFormat(e, t = {}) {
    t = { ...t, floor: !1 !== t.round && !1 !== t.floor };
    return this.isValid
      ? pe.create(this.loc, t).formatDurationFromString(this, e)
      : "Invalid Duration";
  }
  toHuman(r = {}) {
    var e = jt
      .map((e) => {
        var t = this.values[e];
        return F(t)
          ? null
          : this.loc
              .numberFormatter({
                style: "unit",
                unitDisplay: "long",
                ...r,
                unit: e.slice(0, -1),
              })
              .format(t);
      })
      .filter((e) => e);
    return this.loc
      .listFormatter({
        type: "conjunction",
        style: r.listStyle || "narrow",
        ...r,
      })
      .format(e);
  }
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  toISO() {
    if (!this.isValid) return null;
    let e = "P";
    return (
      0 !== this.years && (e += this.years + "Y"),
      (0 === this.months && 0 === this.quarters) ||
        (e += this.months + 3 * this.quarters + "M"),
      0 !== this.weeks && (e += this.weeks + "W"),
      0 !== this.days && (e += this.days + "D"),
      (0 === this.hours &&
        0 === this.minutes &&
        0 === this.seconds &&
        0 === this.milliseconds) ||
        (e += "T"),
      0 !== this.hours && (e += this.hours + "H"),
      0 !== this.minutes && (e += this.minutes + "M"),
      (0 === this.seconds && 0 === this.milliseconds) ||
        (e += W(this.seconds + this.milliseconds / 1e3, 3) + "S"),
      "P" === e && (e += "T0S"),
      e
    );
  }
  toISOTime(e = {}) {
    if (!this.isValid) return null;
    var t = this.toMillis();
    if (t < 0 || 864e5 <= t) return null;
    e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...e,
    };
    const r = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    let n = "basic" === e.format ? "hhmm" : "hh:mm";
    (e.suppressSeconds && 0 === r.seconds && 0 === r.milliseconds) ||
      ((n += "basic" === e.format ? "ss" : ":ss"),
      (e.suppressMilliseconds && 0 === r.milliseconds) || (n += ".SSS"));
    let s = r.toFormat(n);
    return e.includePrefix && (s = "T" + s), s;
  }
  toJSON() {
    return this.toISO();
  }
  toString() {
    return this.toISO();
  }
  toMillis() {
    return this.as("milliseconds");
  }
  valueOf() {
    return this.toMillis();
  }
  plus(e) {
    if (!this.isValid) return this;
    const t = Ht.fromDurationLike(e),
      r = {};
    for (const n of jt)
      (A(t.values, n) || A(this.values, n)) && (r[n] = t.get(n) + this.get(n));
    return Ut(this, { values: r }, !0);
  }
  minus(e) {
    if (!this.isValid) return this;
    const t = Ht.fromDurationLike(e);
    return this.plus(t.negate());
  }
  mapUnits(e) {
    if (!this.isValid) return this;
    const t = {};
    for (const r of Object.keys(this.values)) t[r] = X(e(this.values[r], r));
    return Ut(this, { values: t }, !0);
  }
  get(e) {
    return this[Ht.normalizeUnit(e)];
  }
  set(e) {
    return this.isValid
      ? Ut(this, { values: { ...this.values, ...ee(e, Ht.normalizeUnit) } })
      : this;
  }
  reconfigure({ locale: e, numberingSystem: t, conversionAccuracy: r } = {}) {
    const n = this.loc.clone({ locale: e, numberingSystem: t }),
      s = { loc: n };
    return r && (s.conversionAccuracy = r), Ut(this, s);
  }
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  normalize() {
    if (!this.isValid) return this;
    var r,
      n,
      e = this.toObject();
    return (
      (r = this.matrix),
      (n = e),
      _t.reduce((e, t) => (F(n[t]) ? e : (e && $t(r, n, e, n, t), t)), null),
      Ut(this, { values: e }, !0)
    );
  }
  shiftTo(...e) {
    if (!this.isValid) return this;
    if (0 === e.length) return this;
    e = e.map((e) => Ht.normalizeUnit(e));
    const t = {},
      r = {},
      n = this.toObject();
    let s;
    for (const a of jt)
      if (0 <= e.indexOf(a)) {
        s = a;
        let e = 0;
        for (const o in r) (e += this.matrix[o][a] * r[o]), (r[o] = 0);
        L(n[a]) && (e += n[a]);
        var i = Math.trunc(e);
        (t[a] = i), (r[a] = (1e3 * e - 1e3 * i) / 1e3);
        for (const u in n)
          jt.indexOf(u) > jt.indexOf(a) && $t(this.matrix, n, u, t, a);
      } else L(n[a]) && (r[a] = n[a]);
    for (const l in r)
      0 !== r[l] && (t[s] += l === s ? r[l] : r[l] / this.matrix[s][l]);
    return Ut(this, { values: t }, !0).normalize();
  }
  negate() {
    if (!this.isValid) return this;
    const e = {};
    for (const t of Object.keys(this.values)) e[t] = -this.values[t];
    return Ut(this, { values: e }, !0);
  }
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  get isValid() {
    return null === this.invalid;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  equals(e) {
    if (!this.isValid || !e.isValid) return !1;
    if (!this.loc.equals(e.loc)) return !1;
    for (const n of jt)
      if (
        ((t = this.values[n]),
        (r = e.values[n]),
        !(void 0 === t || 0 === t ? void 0 === r || 0 === r : t === r))
      )
        return !1;
    var t, r;
    return !0;
  }
}
const Wt = "Invalid Interval";
class Rt {
  constructor(e) {
    (this.s = e.start),
      (this.e = e.end),
      (this.invalid = e.invalid || null),
      (this.isLuxonInterval = !0);
  }
  static invalid(e, t = null) {
    if (!e) throw new o("need to specify a reason the Interval is invalid");
    t = e instanceof Te ? e : new Te(e, t);
    if (je.throwOnInvalid) throw new n(t);
    return new Rt({ invalid: t });
  }
  static fromDateTimes(e, t) {
    var r = Pr(e),
      n = Pr(t),
      e =
        ((e = n),
        (t = r) && t.isValid
          ? e && e.isValid
            ? e < t
              ? Rt.invalid(
                  "end before start",
                  `The end of an interval must be after its start, but you had start=${t.toISO()} and end=` +
                    e.toISO()
                )
              : null
            : Rt.invalid("missing or invalid end")
          : Rt.invalid("missing or invalid start"));
    return null == e ? new Rt({ start: r, end: n }) : e;
  }
  static after(e, t) {
    const r = Ht.fromDurationLike(t),
      n = Pr(e);
    return Rt.fromDateTimes(n, n.plus(r));
  }
  static before(e, t) {
    const r = Ht.fromDurationLike(t),
      n = Pr(e);
    return Rt.fromDateTimes(n.minus(r), n);
  }
  static fromISO(e, s) {
    var [i, a] = (e || "").split("/", 2);
    if (i && a) {
      let e, t;
      try {
        (e = Jr.fromISO(i, s)), (t = e.isValid);
      } catch (a) {
        t = !1;
      }
      let r, n;
      try {
        (r = Jr.fromISO(a, s)), (n = r.isValid);
      } catch (a) {
        n = !1;
      }
      if (t && n) return Rt.fromDateTimes(e, r);
      if (t) {
        var o = Ht.fromISO(a, s);
        if (o.isValid) return Rt.after(e, o);
      } else if (n) {
        s = Ht.fromISO(i, s);
        if (s.isValid) return Rt.before(r, s);
      }
    }
    return Rt.invalid(
      "unparsable",
      `the input "${e}" can't be parsed as ISO 8601`
    );
  }
  static isInterval(e) {
    return (e && e.isLuxonInterval) || !1;
  }
  get start() {
    return this.isValid ? this.s : null;
  }
  get end() {
    return this.isValid ? this.e : null;
  }
  get isValid() {
    return null === this.invalidReason;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  length(e = "milliseconds") {
    return this.isValid ? this.toDuration(e).get(e) : NaN;
  }
  count(e = "milliseconds") {
    if (!this.isValid) return NaN;
    const t = this.start.startOf(e),
      r = this.end.startOf(e);
    return Math.floor(r.diff(t, e).get(e)) + 1;
  }
  hasSame(e) {
    return (
      !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, e))
    );
  }
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  isAfter(e) {
    return !!this.isValid && this.s > e;
  }
  isBefore(e) {
    return !!this.isValid && this.e <= e;
  }
  contains(e) {
    return !!this.isValid && this.s <= e && this.e > e;
  }
  set({ start: e, end: t } = {}) {
    return this.isValid ? Rt.fromDateTimes(e || this.s, t || this.e) : this;
  }
  splitAt(...e) {
    if (!this.isValid) return [];
    const t = e
        .map(Pr)
        .filter((e) => this.contains(e))
        .sort(),
      r = [];
    let n = this["s"],
      s = 0;
    for (; n < this.e; ) {
      var i = t[s] || this.e,
        i = +i > +this.e ? this.e : i;
      r.push(Rt.fromDateTimes(n, i)), (n = i), (s += 1);
    }
    return r;
  }
  splitBy(e) {
    const t = Ht.fromDurationLike(e);
    if (!this.isValid || !t.isValid || 0 === t.as("milliseconds")) return [];
    let r = this["s"],
      n = 1,
      s;
    const i = [];
    for (; r < this.e; ) {
      var a = this.start.plus(t.mapUnits((e) => e * n));
      (s = +a > +this.e ? this.e : a),
        i.push(Rt.fromDateTimes(r, s)),
        (r = s),
        (n += 1);
    }
    return i;
  }
  divideEqually(e) {
    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
  }
  overlaps(e) {
    return this.e > e.s && this.s < e.e;
  }
  abutsStart(e) {
    return !!this.isValid && +this.e == +e.s;
  }
  abutsEnd(e) {
    return !!this.isValid && +e.e == +this.s;
  }
  engulfs(e) {
    return !!this.isValid && this.s <= e.s && this.e >= e.e;
  }
  equals(e) {
    return (
      !(!this.isValid || !e.isValid) && this.s.equals(e.s) && this.e.equals(e.e)
    );
  }
  intersection(e) {
    if (!this.isValid) return this;
    var t = (this.s > e.s ? this : e).s,
      e = (this.e < e.e ? this : e).e;
    return e <= t ? null : Rt.fromDateTimes(t, e);
  }
  union(e) {
    if (!this.isValid) return this;
    var t = (this.s < e.s ? this : e).s,
      e = (this.e > e.e ? this : e).e;
    return Rt.fromDateTimes(t, e);
  }
  static merge(e) {
    const [t, r] = e
      .sort((e, t) => e.s - t.s)
      .reduce(
        ([e, t], r) =>
          t
            ? t.overlaps(r) || t.abutsStart(r)
              ? [e, t.union(r)]
              : [e.concat([t]), r]
            : [e, r],
        [[], null]
      );
    return r && t.push(r), t;
  }
  static xor(e) {
    let t = null,
      r = 0;
    const n = [],
      s = e.map((e) => [
        { time: e.s, type: "s" },
        { time: e.e, type: "e" },
      ]),
      i = Array.prototype.concat(...s),
      a = i.sort((e, t) => e.time - t.time);
    for (const o of a)
      (r += "s" === o.type ? 1 : -1),
        (t =
          1 === r
            ? o.time
            : (t && +t != +o.time && n.push(Rt.fromDateTimes(t, o.time)),
              null));
    return Rt.merge(n);
  }
  difference(...e) {
    return Rt.xor([this].concat(e))
      .map((e) => this.intersection(e))
      .filter((e) => e && !e.isEmpty());
  }
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Wt;
  }
  toISO(e) {
    return this.isValid ? this.s.toISO(e) + "/" + this.e.toISO(e) : Wt;
  }
  toISODate() {
    return this.isValid ? this.s.toISODate() + "/" + this.e.toISODate() : Wt;
  }
  toISOTime(e) {
    return this.isValid ? this.s.toISOTime(e) + "/" + this.e.toISOTime(e) : Wt;
  }
  toFormat(e, { separator: t = " – " } = {}) {
    return this.isValid ? "" + this.s.toFormat(e) + t + this.e.toFormat(e) : Wt;
  }
  toDuration(e, t) {
    return this.isValid
      ? this.e.diff(this.s, e, t)
      : Ht.invalid(this.invalidReason);
  }
  mapEndpoints(e) {
    return Rt.fromDateTimes(e(this.s), e(this.e));
  }
}
class Jt {
  static hasDST(e = je.defaultZone) {
    const t = Jr.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && t.offset !== t.set({ month: 6 }).offset;
  }
  static isValidIANAZone(e) {
    return Ee.isValidSpecifier(e) && Ee.isValidZone(e);
  }
  static normalizeZone(e) {
    return Ce(e, je.defaultZone);
  }
  static months(
    e = "long",
    {
      locale: t = null,
      numberingSystem: r = null,
      locObj: n = null,
      outputCalendar: s = "gregory",
    } = {}
  ) {
    return (n || Be.create(t, r, s)).months(e);
  }
  static monthsFormat(
    e = "long",
    {
      locale: t = null,
      numberingSystem: r = null,
      locObj: n = null,
      outputCalendar: s = "gregory",
    } = {}
  ) {
    return (n || Be.create(t, r, s)).months(e, !0);
  }
  static weekdays(
    e = "long",
    { locale: t = null, numberingSystem: r = null, locObj: n = null } = {}
  ) {
    return (n || Be.create(t, r, null)).weekdays(e);
  }
  static weekdaysFormat(
    e = "long",
    { locale: t = null, numberingSystem: r = null, locObj: n = null } = {}
  ) {
    return (n || Be.create(t, r, null)).weekdays(e, !0);
  }
  static meridiems({ locale: e = null } = {}) {
    return Be.create(e).meridiems();
  }
  static eras(e = "short", { locale: t = null } = {}) {
    return Be.create(t, null, "gregory").eras(e);
  }
  static features() {
    return { relative: z() };
  }
}
function Pt(e, t) {
  var r = (e) => e.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(),
    e = r(t) - r(e);
  return Math.floor(Ht.fromMillis(e).as("days"));
}
function Yt(e, t, r, n) {
  let [s, i, a, o] = (function (t, r, e) {
    var n, s;
    const i = {};
    let a, o;
    for ([n, s] of [
      ["years", (e, t) => t.year - e.year],
      ["quarters", (e, t) => t.quarter - e.quarter],
      ["months", (e, t) => t.month - e.month + 12 * (t.year - e.year)],
      [
        "weeks",
        (e, t) => {
          t = Pt(e, t);
          return (t - (t % 7)) / 7;
        },
      ],
      ["days", Pt],
    ])
      if (0 <= e.indexOf(n)) {
        a = n;
        let e = s(t, r);
        (o = t.plus({ [n]: e })),
          o > r ? ((t = t.plus({ [n]: e - 1 })), --e) : (t = o),
          (i[n] = e);
      }
    return [t, i, o, a];
  })(e, t, r);
  (e = t - s),
    (r = r.filter(
      (e) => 0 <= ["hours", "minutes", "seconds", "milliseconds"].indexOf(e)
    ));
  0 === r.length &&
    (a < t && (a = s.plus({ [o]: 1 })),
    a !== s && (i[o] = (i[o] || 0) + e / (a - s)));
  t = Ht.fromObject(i, n);
  return 0 < r.length
    ? Ht.fromMillis(e, n)
        .shiftTo(...r)
        .plus(t)
    : t;
}
const Gt = {
    arab: "[٠-٩]",
    arabext: "[۰-۹]",
    bali: "[᭐-᭙]",
    beng: "[০-৯]",
    deva: "[०-९]",
    fullwide: "[０-９]",
    gujr: "[૦-૯]",
    hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
    khmr: "[០-៩]",
    knda: "[೦-೯]",
    laoo: "[໐-໙]",
    limb: "[᥆-᥏]",
    mlym: "[൦-൯]",
    mong: "[᠐-᠙]",
    mymr: "[၀-၉]",
    orya: "[୦-୯]",
    tamldec: "[௦-௯]",
    telu: "[౦-౯]",
    thai: "[๐-๙]",
    tibt: "[༠-༩]",
    latn: "\\d",
  },
  Bt = {
    arab: [1632, 1641],
    arabext: [1776, 1785],
    bali: [6992, 7001],
    beng: [2534, 2543],
    deva: [2406, 2415],
    fullwide: [65296, 65303],
    gujr: [2790, 2799],
    khmr: [6112, 6121],
    knda: [3302, 3311],
    laoo: [3792, 3801],
    limb: [6470, 6479],
    mlym: [3430, 3439],
    mong: [6160, 6169],
    mymr: [4160, 4169],
    orya: [2918, 2927],
    tamldec: [3046, 3055],
    telu: [3174, 3183],
    thai: [3664, 3673],
    tibt: [3872, 3881],
  },
  Qt = Gt.hanidec.replace(/[\[|\]]/g, "").split("");
function Kt({ numberingSystem: e }, t = "") {
  return new RegExp("" + Gt[e || "latn"] + t);
}
const Xt = "missing Intl.DateTimeFormat.formatToParts support";
function er(e, t = (e) => e) {
  return {
    regex: e,
    deser: ([e]) =>
      t(
        (function (t) {
          let r = parseInt(t, 10);
          if (isNaN(r)) {
            r = "";
            for (let e = 0; e < t.length; e++) {
              var n = t.charCodeAt(e);
              if (-1 !== t[e].search(Gt.hanidec)) r += Qt.indexOf(t[e]);
              else
                for (const a in Bt) {
                  var [s, i] = Bt[a];
                  s <= n && n <= i && (r += n - s);
                }
            }
            return parseInt(r, 10);
          }
          return r;
        })(e)
      ),
  };
}
const tr = `( |${String.fromCharCode(160)})`,
  rr = new RegExp(tr, "g");
function nr(e) {
  return e.replace(/\./g, "\\.?").replace(rr, tr);
}
function sr(e) {
  return e.replace(/\./g, "").replace(rr, " ").toLowerCase();
}
function ir(e, r) {
  return null === e
    ? null
    : {
        regex: RegExp(e.map(nr).join("|")),
        deser: ([t]) => e.findIndex((e) => sr(t) === sr(e)) + r,
      };
}
function ar(e, t) {
  return { regex: e, deser: ([, e, t]) => K(e, t), groups: t };
}
function or(e) {
  return { regex: e, deser: ([e]) => e };
}
const ur = {
  year: { "2-digit": "yy", numeric: "yyyyy" },
  month: { numeric: "M", "2-digit": "MM", short: "MMM", long: "MMMM" },
  day: { numeric: "d", "2-digit": "dd" },
  weekday: { short: "EEE", long: "EEEE" },
  dayperiod: "a",
  dayPeriod: "a",
  hour: { numeric: "h", "2-digit": "hh" },
  minute: { numeric: "m", "2-digit": "mm" },
  second: { numeric: "s", "2-digit": "ss" },
};
let lr = null;
function cr(e, t) {
  if (e.literal) return e;
  const r = pe.macroTokenToFormatOpts(e.val);
  if (!r) return e;
  const n = pe.create(t, r),
    s = n.formatDateTimeParts(((lr = lr || Jr.fromMillis(1555555555555)), lr)),
    i = s.map((e) =>
      (function (e, t) {
        var { type: r, value: e } = e;
        if ("literal" === r) return { literal: !0, val: e };
        t = t[r];
        let n = ur[r];
        return (
          "object" == typeof n && (n = n[t]),
          n ? { literal: !1, val: n } : void 0
        );
      })(e, r)
    );
  return i.includes(void 0) ? e : i;
}
function hr(t, e, r) {
  const n =
      ((c = pe.parseFormat(r)),
      (a = t),
      Array.prototype.concat(...c.map((e) => cr(e, a)))),
    s = n.map((e) =>
      (function (t, r) {
        const n = Kt(r),
          s = Kt(r, "{2}"),
          i = Kt(r, "{3}"),
          a = Kt(r, "{4}"),
          o = Kt(r, "{6}"),
          u = Kt(r, "{1,2}"),
          l = Kt(r, "{1,3}"),
          c = Kt(r, "{1,6}"),
          h = Kt(r, "{1,9}"),
          d = Kt(r, "{2,4}"),
          m = Kt(r, "{4,6}"),
          f = (e) => ({
            regex: RegExp(e.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")),
            deser: ([e]) => e,
            literal: !0,
          }),
          e = ((e) => {
            if (t.literal) return f(e);
            switch (e.val) {
              case "G":
                return ir(r.eras("short", !1), 0);
              case "GG":
                return ir(r.eras("long", !1), 0);
              case "y":
                return er(c);
              case "yy":
                return er(d, B);
              case "yyyy":
                return er(a);
              case "yyyyy":
                return er(m);
              case "yyyyyy":
                return er(o);
              case "M":
                return er(u);
              case "MM":
                return er(s);
              case "MMM":
                return ir(r.months("short", !0, !1), 1);
              case "MMMM":
                return ir(r.months("long", !0, !1), 1);
              case "L":
                return er(u);
              case "LL":
                return er(s);
              case "LLL":
                return ir(r.months("short", !1, !1), 1);
              case "LLLL":
                return ir(r.months("long", !1, !1), 1);
              case "d":
                return er(u);
              case "dd":
                return er(s);
              case "o":
                return er(l);
              case "ooo":
                return er(i);
              case "HH":
                return er(s);
              case "H":
                return er(u);
              case "hh":
                return er(s);
              case "h":
                return er(u);
              case "mm":
                return er(s);
              case "m":
              case "q":
                return er(u);
              case "qq":
                return er(s);
              case "s":
                return er(u);
              case "ss":
                return er(s);
              case "S":
                return er(l);
              case "SSS":
                return er(i);
              case "u":
                return or(h);
              case "uu":
                return or(u);
              case "uuu":
                return er(n);
              case "a":
                return ir(r.meridiems(), 0);
              case "kkkk":
                return er(a);
              case "kk":
                return er(d, B);
              case "W":
                return er(u);
              case "WW":
                return er(s);
              case "E":
              case "c":
                return er(n);
              case "EEE":
                return ir(r.weekdays("short", !1, !1), 1);
              case "EEEE":
                return ir(r.weekdays("long", !1, !1), 1);
              case "ccc":
                return ir(r.weekdays("short", !0, !1), 1);
              case "cccc":
                return ir(r.weekdays("long", !0, !1), 1);
              case "Z":
              case "ZZ":
                return ar(
                  new RegExp(`([+-]${u.source})(?::(${s.source}))?`),
                  2
                );
              case "ZZZ":
                return ar(new RegExp(`([+-]${u.source})(${s.source})?`), 2);
              case "z":
                return or(/[a-z_+-/]{1,256}?/i);
              default:
                return f(e);
            }
          })(t) || { invalidReason: Xt };
        return (e.token = t), e;
      })(e, t)
    ),
    i = s.find((e) => e.invalidReason);
  var a;
  if (i) return { input: e, tokens: n, invalidReason: i.invalidReason };
  var [o, u] = [
      `^${(h = s)
        .map((e) => e.regex)
        .reduce((e, t) => `${e}(${t.source})`, "")}$`,
      h,
    ],
    l = RegExp(o, "i"),
    [r, c] = (function (e, t, r) {
      const n = e.match(t);
      if (n) {
        const s = {};
        let e = 1;
        for (const i in r)
          if (A(r, i)) {
            const a = r[i],
              o = a.groups ? a.groups + 1 : 1;
            !a.literal &&
              a.token &&
              (s[a.token.val[0]] = a.deser(n.slice(e, e + o))),
              (e += o);
          }
        return [n, s];
      }
      return [n, {}];
    })(e, l, u),
    [h, o, u] = c
      ? (function (n) {
          let e = null,
            t;
          return (
            F(n.z) || (e = Ee.create(n.z)),
            F(n.Z) || ((e = e || new Ie(n.Z)), (t = n.Z)),
            F(n.q) || (n.M = 3 * (n.q - 1) + 1),
            F(n.h) ||
              (n.h < 12 && 1 === n.a
                ? (n.h += 12)
                : 12 === n.h && 0 === n.a && (n.h = 0)),
            0 === n.G && n.y && (n.y = -n.y),
            F(n.u) || (n.S = H(n.u)),
            [
              Object.keys(n).reduce((e, t) => {
                var r = ((e) => {
                  switch (e) {
                    case "S":
                      return "millisecond";
                    case "s":
                      return "second";
                    case "m":
                      return "minute";
                    case "h":
                    case "H":
                      return "hour";
                    case "d":
                      return "day";
                    case "o":
                      return "ordinal";
                    case "L":
                    case "M":
                      return "month";
                    case "y":
                      return "year";
                    case "E":
                    case "c":
                      return "weekday";
                    case "W":
                      return "weekNumber";
                    case "k":
                      return "weekYear";
                    case "q":
                      return "quarter";
                    default:
                      return null;
                  }
                })(t);
                return r && (e[r] = n[t]), e;
              }, {}),
              e,
              t,
            ]
          );
        })(c)
      : [null, null, void 0];
  if (A(c, "a") && A(c, "H"))
    throw new N("Can't include meridiem when specifying 24-hour format");
  return {
    input: e,
    tokens: n,
    regex: l,
    rawMatches: r,
    matches: c,
    result: h,
    zone: o,
    specificOffset: u,
  };
}
const dr = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  mr = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function fr(e, t) {
  return new Te(
    "unit out of range",
    `you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`
  );
}
function yr(e, t, r) {
  r = new Date(Date.UTC(e, t - 1, r)).getUTCDay();
  return 0 === r ? 7 : r;
}
function gr(e, t, r) {
  return r + (R(e) ? mr : dr)[t - 1];
}
function wr(e, t) {
  const r = R(e) ? mr : dr,
    n = r.findIndex((e) => e < t),
    s = t - r[n];
  return { month: n + 1, day: s };
}
function vr(e) {
  var { year: t, month: r, day: n } = e,
    s = gr(t, r, n),
    n = yr(t, r, n);
  let i = Math.floor((s - n + 10) / 7),
    a;
  return (
    i < 1
      ? ((a = t - 1), (i = G(a)))
      : i > G(t)
      ? ((a = t + 1), (i = 1))
      : (a = t),
    { weekYear: a, weekNumber: i, weekday: n, ...re(e) }
  );
}
function pr(e) {
  var { weekYear: t, weekNumber: r, weekday: n } = e,
    s = yr(t, 1, 4),
    i = J(t);
  let a = 7 * r + n - s - 3,
    o;
  a < 1
    ? ((o = t - 1), (a += J(o)))
    : a > i
    ? ((o = t + 1), (a -= J(t)))
    : (o = t);
  var { month: i, day: t } = wr(o, a);
  return { year: o, month: i, day: t, ...re(e) };
}
function Tr(e) {
  var { year: t, month: r, day: n } = e;
  return { year: t, ordinal: gr(t, r, n), ...re(e) };
}
function Sr(e) {
  var { year: t, ordinal: r } = e,
    { month: n, day: r } = wr(t, r);
  return { year: t, month: n, day: r, ...re(e) };
}
function Or(e) {
  var t = Z(e.year),
    r = j(e.month, 1, 12),
    n = j(e.day, 1, P(e.year, e.month));
  return t
    ? r
      ? !n && fr("day", e.day)
      : fr("month", e.month)
    : fr("year", e.year);
}
function br(e) {
  var { hour: t, minute: r, second: n, millisecond: s } = e,
    i = j(t, 0, 23) || (24 === t && 0 === r && 0 === n && 0 === s),
    a = j(r, 0, 59),
    o = j(n, 0, 59),
    e = j(s, 0, 999);
  return i
    ? a
      ? o
        ? !e && fr("millisecond", s)
        : fr("second", n)
      : fr("minute", r)
    : fr("hour", t);
}
const kr = "Invalid DateTime";
function Mr(e) {
  return new Te("unsupported zone", `the zone "${e.name}" is not supported`);
}
function Nr(e) {
  return null === e.weekData && (e.weekData = vr(e.c)), e.weekData;
}
function Dr(e, t) {
  e = {
    ts: e.ts,
    zone: e.zone,
    c: e.c,
    o: e.o,
    loc: e.loc,
    invalid: e.invalid,
  };
  return new Jr({ ...e, ...t, old: e });
}
function Er(e, t, r) {
  let n = e - 60 * t * 1e3;
  var s = r.offset(n);
  if (t === s) return [n, t];
  n -= 60 * (s - t) * 1e3;
  r = r.offset(n);
  return s === r ? [n, s] : [e - 60 * Math.min(s, r) * 1e3, Math.max(s, r)];
}
function Vr(e, t) {
  e += 60 * t * 1e3;
  const r = new Date(e);
  return {
    year: r.getUTCFullYear(),
    month: r.getUTCMonth() + 1,
    day: r.getUTCDate(),
    hour: r.getUTCHours(),
    minute: r.getUTCMinutes(),
    second: r.getUTCSeconds(),
    millisecond: r.getUTCMilliseconds(),
  };
}
function Ir(e, t, r) {
  return Er(Y(e), t, r);
}
function xr(e, t) {
  var r = e.o,
    n = e.c.year + Math.trunc(t.years),
    s = e.c.month + Math.trunc(t.months) + 3 * Math.trunc(t.quarters),
    s = {
      ...e.c,
      year: n,
      month: s,
      day:
        Math.min(e.c.day, P(n, s)) +
        Math.trunc(t.days) +
        7 * Math.trunc(t.weeks),
    },
    t = Ht.fromObject({
      years: t.years - Math.trunc(t.years),
      quarters: t.quarters - Math.trunc(t.quarters),
      months: t.months - Math.trunc(t.months),
      weeks: t.weeks - Math.trunc(t.weeks),
      days: t.days - Math.trunc(t.days),
      hours: t.hours,
      minutes: t.minutes,
      seconds: t.seconds,
      milliseconds: t.milliseconds,
    }).as("milliseconds");
  let [i, a] = Er(Y(s), r, e.zone);
  return 0 !== t && ((i += t), (a = e.zone.offset(i))), { ts: i, o: a };
}
function Cr(e, t, r, n, s, i) {
  var { setZone: a, zone: o } = r;
  if (e && 0 !== Object.keys(e).length) {
    const u = t || o,
      l = Jr.fromObject(e, { ...r, zone: u, specificOffset: i });
    return a ? l : l.setZone(o);
  }
  return Jr.invalid(
    new Te("unparsable", `the input "${s}" can't be parsed as ` + n)
  );
}
function Fr(e, t, r = !0) {
  return e.isValid
    ? pe
        .create(Be.create("en-US"), { allowZ: r, forceSimple: !0 })
        .formatDateTimeFromString(e, t)
    : null;
}
function Lr(e, t) {
  var r = 9999 < e.c.year || e.c.year < 0;
  let n = "";
  return (
    r && 0 <= e.c.year && (n += "+"),
    (n += _(e.c.year, r ? 6 : 4)),
    t ? ((n += "-"), (n += _(e.c.month)), (n += "-")) : (n += _(e.c.month)),
    (n += _(e.c.day)),
    n
  );
}
function Zr(e, t, r, n, s) {
  let i = _(e.c.hour);
  return (
    t
      ? ((i += ":"),
        (i += _(e.c.minute)),
        (0 === e.c.second && r) || (i += ":"))
      : (i += _(e.c.minute)),
    (0 === e.c.second && r) ||
      ((i += _(e.c.second)),
      (0 === e.c.millisecond && n) ||
        ((i += "."), (i += _(e.c.millisecond, 3)))),
    s &&
      (e.isOffsetFixed && 0 === e.offset
        ? (i += "Z")
        : e.o < 0
        ? ((i += "-"),
          (i += _(Math.trunc(-e.o / 60))),
          (i += ":"),
          (i += _(Math.trunc(-e.o % 60))))
        : ((i += "+"),
          (i += _(Math.trunc(e.o / 60))),
          (i += ":"),
          (i += _(Math.trunc(e.o % 60))))),
    i
  );
}
const zr = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
  qr = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  Ar = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
  jr = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
  _r = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond",
  ],
  Ur = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function $r(e) {
  var t = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal",
  }[e.toLowerCase()];
  if (!t) throw new i(e);
  return t;
}
function Hr(e, t) {
  const r = Ce(t.zone, je.defaultZone),
    n = Be.fromObject(t),
    s = je.now();
  let i, a;
  if (F(e.year)) i = s;
  else {
    for (const o of jr) F(e[o]) && (e[o] = zr[o]);
    t = Or(e) || br(e);
    if (t) return Jr.invalid(t);
    t = r.offset(s);
    [i, a] = Ir(e, t, r);
  }
  return new Jr({ ts: i, zone: r, loc: n, o: a });
}
function Wr(t, n, s) {
  const i = !!F(s.round) || s.round,
    e = (e, t) => {
      e = W(e, i || s.calendary ? 0 : 2, !0);
      const r = n.loc.clone(s).relFormatter(s);
      return r.format(e, t);
    },
    r = (e) =>
      s.calendary
        ? n.hasSame(t, e)
          ? 0
          : n.startOf(e).diff(t.startOf(e), e).get(e)
        : n.diff(t, e).get(e);
  if (s.unit) return e(r(s.unit), s.unit);
  for (const o of s.units) {
    var a = r(o);
    if (1 <= Math.abs(a)) return e(a, o);
  }
  return e(n < t ? -0 : 0, s.units[s.units.length - 1]);
}
function Rr(e) {
  let t = {},
    r;
  return (
    (r =
      0 < e.length && "object" == typeof e[e.length - 1]
        ? ((t = e[e.length - 1]), Array.from(e).slice(0, e.length - 1))
        : Array.from(e)),
    [t, r]
  );
}
class Jr {
  constructor(e) {
    const t = e.zone || je.defaultZone;
    let r =
      e.invalid ||
      (Number.isNaN(e.ts) ? new Te("invalid input") : null) ||
      (t.isValid ? null : Mr(t));
    this.ts = F(e.ts) ? je.now() : e.ts;
    let n = null,
      s = null;
    var i;
    r ||
      (e.old && e.old.ts === this.ts && e.old.zone.equals(t)
        ? ([n, s] = [e.old.c, e.old.o])
        : ((i = t.offset(this.ts)),
          (n = Vr(this.ts, i)),
          (r = Number.isNaN(n.year) ? new Te("invalid input") : null),
          (n = r ? null : n),
          (s = r ? null : i))),
      (this._zone = t),
      (this.loc = e.loc || Be.create()),
      (this.invalid = r),
      (this.weekData = null),
      (this.c = n),
      (this.o = s),
      (this.isLuxonDateTime = !0);
  }
  static now() {
    return new Jr({});
  }
  static local() {
    var [e, t] = Rr(arguments),
      [r, n, s, i, a, o, t] = t;
    return Hr(
      {
        year: r,
        month: n,
        day: s,
        hour: i,
        minute: a,
        second: o,
        millisecond: t,
      },
      e
    );
  }
  static utc() {
    const [e, t] = Rr(arguments),
      [r, n, s, i, a, o, u] = t;
    return (
      (e.zone = Ie.utcInstance),
      Hr(
        {
          year: r,
          month: n,
          day: s,
          hour: i,
          minute: a,
          second: o,
          millisecond: u,
        },
        e
      )
    );
  }
  static fromJSDate(e, t = {}) {
    var r =
      "[object Date]" === Object.prototype.toString.call(e) ? e.valueOf() : NaN;
    if (Number.isNaN(r)) return Jr.invalid("invalid input");
    e = Ce(t.zone, je.defaultZone);
    return e.isValid
      ? new Jr({ ts: r, zone: e, loc: Be.fromObject(t) })
      : Jr.invalid(Mr(e));
  }
  static fromMillis(e, t = {}) {
    if (L(e))
      return e < -864e13 || 864e13 < e
        ? Jr.invalid("Timestamp out of range")
        : new Jr({
            ts: e,
            zone: Ce(t.zone, je.defaultZone),
            loc: Be.fromObject(t),
          });
    throw new o(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ` +
        e
    );
  }
  static fromSeconds(e, t = {}) {
    if (L(e))
      return new Jr({
        ts: 1e3 * e,
        zone: Ce(t.zone, je.defaultZone),
        loc: Be.fromObject(t),
      });
    throw new o("fromSeconds requires a numerical input");
  }
  static fromObject(e, t = {}) {
    e = e || {};
    const r = Ce(t.zone, je.defaultZone);
    if (!r.isValid) return Jr.invalid(Mr(r));
    const n = je.now(),
      s = F(t.specificOffset) ? r.offset(n) : t.specificOffset,
      i = ee(e, $r),
      a = !F(i.ordinal),
      o = !F(i.year),
      u = !F(i.month) || !F(i.day),
      l = o || u,
      c = i.weekYear || i.weekNumber,
      h = Be.fromObject(t);
    if ((l || a) && c)
      throw new N(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (u && a) throw new N("Can't mix ordinal dates with month/day");
    var d = c || (i.weekday && !l);
    let m,
      f,
      y = Vr(n, s);
    d
      ? ((m = _r), (f = qr), (y = vr(y)))
      : a
      ? ((m = Ur), (f = Ar), (y = Tr(y)))
      : ((m = jr), (f = zr));
    let g = !1;
    for (const M of m) F(i[M]) ? (g ? (i[M] = f[M]) : (i[M] = y[M])) : (g = !0);
    var w,
      v,
      p,
      T =
        (d
          ? ((w = i),
            (v = Z(w.weekYear)),
            (t = j(w.weekNumber, 1, G(w.weekYear))),
            (p = j(w.weekday, 1, 7)),
            v
              ? t
                ? !p && fr("weekday", w.weekday)
                : fr("week", w.week)
              : fr("weekYear", w.weekYear))
          : a
          ? ((T = i),
            (p = Z(T.year)),
            (w = j(T.ordinal, 1, J(T.year))),
            p ? !w && fr("ordinal", T.ordinal) : fr("year", T.year))
          : Or(i)) || br(i);
    if (T) return Jr.invalid(T);
    const S = d ? pr(i) : a ? Sr(i) : i,
      [O, b] = Ir(S, s, r),
      k = new Jr({ ts: O, zone: r, o: b, loc: h });
    return i.weekday && l && e.weekday !== k.weekday
      ? Jr.invalid(
          "mismatched weekday",
          `you can't specify both a weekday of ${i.weekday} and a date of ` +
            k.toISO()
        )
      : k;
  }
  static fromISO(e, t = {}) {
    var [r, n] = Xe(e, [St, Mt], [Ot, Nt], [bt, Dt], [kt, Et]);
    return Cr(r, n, t, "ISO 8601", e);
  }
  static fromRFC2822(e, t = {}) {
    var [r, n] = Xe(
      e
        .replace(/\([^)]*\)|[\n\t]/g, " ")
        .replace(/(\s\s+)/g, " ")
        .trim(),
      [ft, yt]
    );
    return Cr(r, n, t, "RFC 2822", e);
  }
  static fromHTTP(e, t = {}) {
    var [r, e] = Xe(e, [gt, pt], [wt, pt], [vt, Tt]);
    return Cr(r, e, t, "HTTP", t);
  }
  static fromFormat(e, t, r = {}) {
    if (F(e) || F(t))
      throw new o("fromFormat requires an input string and a format");
    var { locale: n = null, numberingSystem: s = null } = r,
      [i, a, n, s] = (function (e, t, r) {
        var {
          result: n,
          zone: e,
          specificOffset: t,
          invalidReason: r,
        } = hr(e, t, r);
        return [n, e, t, r];
      })(Be.fromOpts({ locale: n, numberingSystem: s, defaultToEN: !0 }), e, t);
    return s ? Jr.invalid(s) : Cr(i, a, r, "format " + t, e, n);
  }
  static fromString(e, t, r = {}) {
    return Jr.fromFormat(e, t, r);
  }
  static fromSQL(e, t = {}) {
    var [r, n] = Xe(e, [It, Ct], [xt, Ft]);
    return Cr(r, n, t, "SQL", e);
  }
  static invalid(e, t = null) {
    if (!e) throw new o("need to specify a reason the DateTime is invalid");
    t = e instanceof Te ? e : new Te(e, t);
    if (je.throwOnInvalid) throw new r(t);
    return new Jr({ invalid: t });
  }
  static isDateTime(e) {
    return (e && e.isLuxonDateTime) || !1;
  }
  get(e) {
    return this[e];
  }
  get isValid() {
    return null === this.invalid;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  get zone() {
    return this._zone;
  }
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  get weekYear() {
    return this.isValid ? Nr(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? Nr(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? Nr(this).weekday : NaN;
  }
  get ordinal() {
    return this.isValid ? Tr(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid
      ? Jt.months("short", { locObj: this.loc })[this.month - 1]
      : null;
  }
  get monthLong() {
    return this.isValid
      ? Jt.months("long", { locObj: this.loc })[this.month - 1]
      : null;
  }
  get weekdayShort() {
    return this.isValid
      ? Jt.weekdays("short", { locObj: this.loc })[this.weekday - 1]
      : null;
  }
  get weekdayLong() {
    return this.isValid
      ? Jt.weekdays("long", { locObj: this.loc })[this.weekday - 1]
      : null;
  }
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  get offsetNameShort() {
    return this.isValid
      ? this.zone.offsetName(this.ts, { format: "short", locale: this.locale })
      : null;
  }
  get offsetNameLong() {
    return this.isValid
      ? this.zone.offsetName(this.ts, { format: "long", locale: this.locale })
      : null;
  }
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  get isInDST() {
    return (
      !this.isOffsetFixed &&
      (this.offset > this.set({ month: 1 }).offset ||
        this.offset > this.set({ month: 5 }).offset)
    );
  }
  get isInLeapYear() {
    return R(this.year);
  }
  get daysInMonth() {
    return P(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? J(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? G(this.weekYear) : NaN;
  }
  resolvedLocaleOptions(e = {}) {
    var {
      locale: t,
      numberingSystem: r,
      calendar: e,
    } = pe.create(this.loc.clone(e), e).resolvedOptions(this);
    return { locale: t, numberingSystem: r, outputCalendar: e };
  }
  toUTC(e = 0, t = {}) {
    return this.setZone(Ie.instance(e), t);
  }
  toLocal() {
    return this.setZone(je.defaultZone);
  }
  setZone(t, { keepLocalTime: r = !1, keepCalendarTime: n = !1 } = {}) {
    if ((t = Ce(t, je.defaultZone)).equals(this.zone)) return this;
    if (t.isValid) {
      let e = this.ts;
      return (
        (r || n) &&
          ((r = t.offset(this.ts)), (n = this.toObject()), ([e] = Ir(n, r, t))),
        Dr(this, { ts: e, zone: t })
      );
    }
    return Jr.invalid(Mr(t));
  }
  reconfigure({ locale: e, numberingSystem: t, outputCalendar: r } = {}) {
    r = this.loc.clone({ locale: e, numberingSystem: t, outputCalendar: r });
    return Dr(this, { loc: r });
  }
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  set(e) {
    if (!this.isValid) return this;
    var t = ee(e, $r),
      r = !F(t.weekYear) || !F(t.weekNumber) || !F(t.weekday),
      n = !F(t.ordinal),
      s = !F(t.year),
      i = !F(t.month) || !F(t.day),
      e = t.weekYear || t.weekNumber;
    if ((s || i || n) && e)
      throw new N(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (i && n) throw new N("Can't mix ordinal dates with month/day");
    let a;
    r
      ? (a = pr({ ...vr(this.c), ...t }))
      : F(t.ordinal)
      ? ((a = { ...this.toObject(), ...t }),
        F(t.day) && (a.day = Math.min(P(a.year, a.month), a.day)))
      : (a = Sr({ ...Tr(this.c), ...t }));
    var [r, t] = Ir(a, this.o, this.zone);
    return Dr(this, { ts: r, o: t });
  }
  plus(e) {
    return this.isValid ? Dr(this, xr(this, Ht.fromDurationLike(e))) : this;
  }
  minus(e) {
    return this.isValid
      ? Dr(this, xr(this, Ht.fromDurationLike(e).negate()))
      : this;
  }
  startOf(e) {
    if (!this.isValid) return this;
    const t = {},
      r = Ht.normalizeUnit(e);
    switch (r) {
      case "years":
        t.month = 1;
      case "quarters":
      case "months":
        t.day = 1;
      case "weeks":
      case "days":
        t.hour = 0;
      case "hours":
        t.minute = 0;
      case "minutes":
        t.second = 0;
      case "seconds":
        t.millisecond = 0;
    }
    return (
      "weeks" === r && (t.weekday = 1),
      "quarters" === r &&
        ((e = Math.ceil(this.month / 3)), (t.month = 3 * (e - 1) + 1)),
      this.set(t)
    );
  }
  endOf(e) {
    return this.isValid
      ? this.plus({ [e]: 1 })
          .startOf(e)
          .minus(1)
      : this;
  }
  toFormat(e, t = {}) {
    return this.isValid
      ? pe.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e)
      : kr;
  }
  toLocaleString(e = c, t = {}) {
    return this.isValid
      ? pe.create(this.loc.clone(t), e).formatDateTime(this)
      : kr;
  }
  toLocaleParts(e = {}) {
    return this.isValid
      ? pe.create(this.loc.clone(e), e).formatDateTimeParts(this)
      : [];
  }
  toISO({
    format: e = "extended",
    suppressSeconds: t = !1,
    suppressMilliseconds: r = !1,
    includeOffset: n = !0,
  } = {}) {
    if (!this.isValid) return null;
    var s = "extended" === e,
      e = Lr(this, s);
    return (e += "T"), (e += Zr(this, s, t, r, n));
  }
  toISODate({ format: e = "extended" } = {}) {
    return this.isValid ? Lr(this, "extended" === e) : null;
  }
  toISOWeekDate() {
    return Fr(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: t = !1,
    includeOffset: r = !0,
    includePrefix: n = !1,
    format: s = "extended",
  } = {}) {
    return this.isValid
      ? (n ? "T" : "") + Zr(this, "extended" === s, t, e, r)
      : null;
  }
  toRFC2822() {
    return Fr(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  toHTTP() {
    return Fr(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    return this.isValid ? Lr(this, !0) : null;
  }
  toSQLTime({ includeOffset: e = !0, includeZone: t = !1 } = {}) {
    let r = "HH:mm:ss.SSS";
    return (
      (t || e) && ((r += " "), t ? (r += "z") : e && (r += "ZZ")),
      Fr(this, r, !0)
    );
  }
  toSQL(e = {}) {
    return this.isValid ? this.toSQLDate() + " " + this.toSQLTime(e) : null;
  }
  toString() {
    return this.isValid ? this.toISO() : kr;
  }
  valueOf() {
    return this.toMillis();
  }
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  toJSON() {
    return this.toISO();
  }
  toBSON() {
    return this.toJSDate();
  }
  toObject(e = {}) {
    if (!this.isValid) return {};
    const t = { ...this.c };
    return (
      e.includeConfig &&
        ((t.outputCalendar = this.outputCalendar),
        (t.numberingSystem = this.loc.numberingSystem),
        (t.locale = this.loc.locale)),
      t
    );
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(e, t = "milliseconds", r = {}) {
    if (!this.isValid || !e.isValid)
      return Ht.invalid("created by diffing an invalid DateTime");
    r = { locale: this.locale, numberingSystem: this.numberingSystem, ...r };
    const n = ((t = t), (Array.isArray(t) ? t : [t]).map(Ht.normalizeUnit)),
      s = e.valueOf() > this.valueOf(),
      i = s ? this : e,
      a = s ? e : this,
      o = Yt(i, a, n, r);
    return s ? o.negate() : o;
  }
  diffNow(e = "milliseconds", t = {}) {
    return this.diff(Jr.now(), e, t);
  }
  until(e) {
    return this.isValid ? Rt.fromDateTimes(this, e) : this;
  }
  hasSame(e, t) {
    if (!this.isValid) return !1;
    var r = e.valueOf();
    const n = this.setZone(e.zone, { keepLocalTime: !0 });
    return n.startOf(t) <= r && r <= n.endOf(t);
  }
  equals(e) {
    return (
      this.isValid &&
      e.isValid &&
      this.valueOf() === e.valueOf() &&
      this.zone.equals(e.zone) &&
      this.loc.equals(e.loc)
    );
  }
  toRelative(e = {}) {
    if (!this.isValid) return null;
    var t = e.base || Jr.fromObject({}, { zone: this.zone }),
      r = e.padding ? (this < t ? -e.padding : e.padding) : 0;
    let n = ["years", "months", "days", "hours", "minutes", "seconds"],
      s = e.unit;
    return (
      Array.isArray(e.unit) && ((n = e.unit), (s = void 0)),
      Wr(t, this.plus(r), { ...e, numeric: "always", units: n, unit: s })
    );
  }
  toRelativeCalendar(e = {}) {
    return this.isValid
      ? Wr(e.base || Jr.fromObject({}, { zone: this.zone }), this, {
          ...e,
          numeric: "auto",
          units: ["years", "months", "days"],
          calendary: !0,
        })
      : null;
  }
  static min(...e) {
    if (!e.every(Jr.isDateTime))
      throw new o("min requires all arguments be DateTimes");
    return q(e, (e) => e.valueOf(), Math.min);
  }
  static max(...e) {
    if (!e.every(Jr.isDateTime))
      throw new o("max requires all arguments be DateTimes");
    return q(e, (e) => e.valueOf(), Math.max);
  }
  static fromFormatExplain(e, t, r = {}) {
    var { locale: n = null, numberingSystem: r = null } = r;
    return hr(
      Be.fromOpts({ locale: n, numberingSystem: r, defaultToEN: !0 }),
      e,
      t
    );
  }
  static fromStringExplain(e, t, r = {}) {
    return Jr.fromFormatExplain(e, t, r);
  }
  static get DATE_SHORT() {
    return c;
  }
  static get DATE_MED() {
    return h;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return d;
  }
  static get DATE_FULL() {
    return m;
  }
  static get DATE_HUGE() {
    return f;
  }
  static get TIME_SIMPLE() {
    return y;
  }
  static get TIME_WITH_SECONDS() {
    return g;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return w;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return v;
  }
  static get TIME_24_SIMPLE() {
    return p;
  }
  static get TIME_24_WITH_SECONDS() {
    return T;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return S;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return O;
  }
  static get DATETIME_SHORT() {
    return b;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return k;
  }
  static get DATETIME_MED() {
    return M;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return D;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return E;
  }
  static get DATETIME_FULL() {
    return V;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return I;
  }
  static get DATETIME_HUGE() {
    return x;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return C;
  }
}
function Pr(e) {
  if (Jr.isDateTime(e)) return e;
  if (e && e.valueOf && L(e.valueOf())) return Jr.fromJSDate(e);
  if (e && "object" == typeof e) return Jr.fromObject(e);
  throw new o(`Unknown datetime argument: ${e}, of type ` + typeof e);
}
tt = "2.3.0";
export {
  Jr as DateTime,
  Ht as Duration,
  Ie as FixedOffsetZone,
  Ee as IANAZone,
  Jt as Info,
  Rt as Interval,
  xe as InvalidZone,
  je as Settings,
  be as SystemZone,
  tt as VERSION,
  Se as Zone,
};
