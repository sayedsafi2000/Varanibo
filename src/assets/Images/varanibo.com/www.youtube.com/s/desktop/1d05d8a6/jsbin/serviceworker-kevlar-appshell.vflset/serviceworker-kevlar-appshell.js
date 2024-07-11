'use strict';
var aa = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var ca = ba(this);

function da(a, b) {
    if (b) a: {
        var c = ca;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && aa(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}

function ea(a) {
    function b(d) {
        return a.next(d)
    }

    function c(d) {
        return a.throw(d)
    }
    return new Promise(function(d, e) {
        function f(g) {
            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
        }
        f(a.next())
    })
}

function r(a) {
    return ea(a())
}
da("Symbol.dispose", function(a) {
    return a ? a : Symbol("Symbol.dispose")
});

function fa(a, b) {
    a instanceof String && (a += "");
    var c = 0,
        d = !1,
        e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
    e[Symbol.iterator] = function() {
        return e
    };
    return e
}
da("Array.prototype.values", function(a) {
    return a ? a : function() {
        return fa(this, function(b, c) {
            return c
        })
    }
});
da("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
        return c
    }
});
da("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
        }
        return !1
    }
});
da("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});
da("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global) throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
            d = this,
            e = !1,
            f = {
                next: function() {
                    if (e) return {
                        value: void 0,
                        done: !0
                    };
                    var g = c.exec(d);
                    if (!g) return e = !0, {
                        value: void 0,
                        done: !0
                    };
                    g[0] === "" && (c.lastIndex += 1);
                    return {
                        value: g,
                        done: !1
                    }
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    }
});
da("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var t = this || self;

function ha(a, b) {
    var c = v("CLOSURE_FLAGS");
    a = c && c[a];
    return a != null ? a : b
}

function v(a, b) {
    a = a.split(".");
    b = b || t;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], b == null) return null;
    return b
}

function ia(a) {
    var b = typeof a;
    b = b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null";
    return b == "array" || b == "object" && typeof a.length == "number"
}

function ja(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function ka(a, b, c) {
    if (!a) throw Error();
    if (arguments.length > 2) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function la(a, b, c) {
    la = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ja : ka;
    return la.apply(null, arguments)
}

function w(a, b) {
    a = a.split(".");
    var c = t;
    a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}

function ma(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Ma = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Mb = function(d, e, f) {
        for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
        return b.prototype[e].apply(d, g)
    }
}

function na(a) {
    return a
};

function oa(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, oa);
    else {
        const c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    b !== void 0 && (this.cause = b)
}
ma(oa, Error);
oa.prototype.name = "CustomError";
var pa = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};
var ra;

function sa(a, b) {
    this.h = a === ta && b || ""
}
sa.prototype.toString = function() {
    return this.h
};

function ua(a) {
    return new sa(ta, a)
}
var ta = {};
ua("");
var va = class {
        constructor(a) {
            this.h = a
        }
        toString() {
            return this.h + ""
        }
    },
    wa = {};

function xa(a, b) {
    Array.prototype.forEach.call(a, b, void 0)
}

function ya(a, b) {
    return Array.prototype.map.call(a, b, void 0)
}

function za(a, b) {
    b = Array.prototype.indexOf.call(a, b, void 0);
    b >= 0 && Array.prototype.splice.call(a, b, 1)
}

function Aa(a, b) {
    for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c];
        if (ia(d)) {
            const e = a.length || 0,
                f = d.length || 0;
            a.length = e + f;
            for (let g = 0; g < f; g++) a[e + g] = d[g]
        } else a.push(d)
    }
};

function Ba(a) {
    for (const b in a) return !1;
    return !0
}

function Ca(a) {
    if (!a || typeof a !== "object") return a;
    if (typeof a.clone === "function") return a.clone();
    if (typeof Map !== "undefined" && a instanceof Map) return new Map(a);
    if (typeof Set !== "undefined" && a instanceof Set) return new Set(a);
    if (a instanceof Date) return new Date(a.getTime());
    const b = Array.isArray(a) ? [] : typeof ArrayBuffer !== "function" || typeof ArrayBuffer.isView !== "function" || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a) b[c] = Ca(a[c]);
    return b
}
const Da = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Ea(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (let f = 0; f < Da.length; f++) c = Da[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};

function Fa(a, b = `unexpected value ${a}!`) {
    throw Error(b);
};

function Ga(a, b) {
    a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b
};

function Ha(a) {
    var b = v("window.location.href");
    a == null && (a = 'Unknown Error of type "null/undefined"');
    if (typeof a === "string") return {
        message: a,
        name: "Unknown error",
        lineNumber: "Not available",
        fileName: b,
        stack: "Not available"
    };
    var c = !1;
    try {
        var d = a.lineNumber || a.line || "Not available"
    } catch (g) {
        d = "Not available", c = !0
    }
    try {
        var e = a.fileName || a.filename || a.sourceURL || t.$googDebugFname || b
    } catch (g) {
        e = "Not available", c = !0
    }
    b = Ia(a);
    if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        c = a.message;
        if (c ==
            null) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name) c = a.constructor.name;
                else if (c = a.constructor, Ja[c]) c = Ja[c];
                else {
                    c = String(c);
                    if (!Ja[c]) {
                        var f = /function\s+([^\(]+)/m.exec(c);
                        Ja[c] = f ? f[1] : "[Anonymous]"
                    }
                    c = Ja[c]
                }
                c = 'Unknown Error of type "' + c + '"'
            } else c = "Unknown Error of unknown type";
            typeof a.toString === "function" && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
        }
        return {
            message: c,
            name: a.name || "UnknownError",
            lineNumber: d,
            fileName: e,
            stack: b || "Not available"
        }
    }
    return {
        message: a.message,
        name: a.name,
        lineNumber: a.lineNumber,
        fileName: a.fileName,
        stack: b
    }
}

function Ia(a, b) {
    b || (b = {});
    b[Ka(a)] = !0;
    var c = a.stack || "";
    (a = a.cause) && !b[Ka(a)] && (c += "\nCaused by: ", a.stack && a.stack.indexOf(a.toString()) == 0 || (c += typeof a === "string" ? a : a.message + "\n"), c += Ia(a, b));
    return c
}

function Ka(a) {
    var b = "";
    typeof a.toString === "function" && (b = "" + a);
    return b + a.stack
}
var Ja = {};
var La = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

function Ma(a) {
    return a ? decodeURI(a) : a
}

function Na(a, b, c) {
    if (Array.isArray(b))
        for (var d = 0; d < b.length; d++) Na(a, String(b[d]), c);
    else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
}

function Oa(a) {
    var b = [],
        c;
    for (c in a) Na(c, a[c], b);
    return b.join("&")
};

function Pa() {
    this.l = this.l;
    this.i = this.i
}
Pa.prototype.l = !1;
Pa.prototype.dispose = function() {
    this.l || (this.l = !0, this.m())
};
Pa.prototype[Symbol.dispose] = function() {
    this.dispose()
};
Pa.prototype.addOnDisposeCallback = function(a, b) {
    this.l ? b !== void 0 ? a.call(b) : a() : (this.i || (this.i = []), this.i.push(b !== void 0 ? la(a, b) : a))
};
Pa.prototype.m = function() {
    if (this.i)
        for (; this.i.length;) this.i.shift()()
};
const Qa = ha(1, !0);
var Ra = ha(610401301, !1),
    Sa = ha(188588736, Qa),
    Ta = ha(645172343, Qa);

function Ua() {
    var a = t.navigator;
    return a && (a = a.userAgent) ? a : ""
}
var Va;
const Wa = t.navigator;
Va = Wa ? Wa.userAgentData || null : null;

function Xa(a) {
    return Ra ? Va ? Va.brands.some(({
        brand: b
    }) => b && b.indexOf(a) != -1) : !1 : !1
}

function x(a) {
    return Ua().indexOf(a) != -1
};

function Ya() {
    return Ra ? !!Va && Va.brands.length > 0 : !1
}

function Za() {
    return Ya() ? Xa("Chromium") : (x("Chrome") || x("CriOS")) && !(Ya() ? 0 : x("Edge")) || x("Silk")
};
var $a = Ya() ? !1 : x("Trident") || x("MSIE");

function ab(a, b) {
    a.l(b);
    a.i < 100 && (a.i++, b.next = a.h, a.h = b)
}
class bb {
    constructor(a, b) {
        this.j = a;
        this.l = b;
        this.i = 0;
        this.h = null
    }
    get() {
        let a;
        this.i > 0 ? (this.i--, a = this.h, this.h = a.next, a.next = null) : a = this.j();
        return a
    }
};

function cb() {};

function db(a) {
    t.setTimeout(() => {
        throw a;
    }, 0)
};
class eb {
    constructor() {
        this.i = this.h = null
    }
    add(a, b) {
        const c = fb.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.h = c;
        this.i = c
    }
    remove() {
        let a = null;
        this.h && (a = this.h, this.h = this.h.next, this.h || (this.i = null), a.next = null);
        return a
    }
}
var fb = new bb(() => new gb, a => a.reset());
class gb {
    constructor() {
        this.next = this.scope = this.h = null
    }
    set(a, b) {
        this.h = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.h = null
    }
};
let hb, ib = !1,
    jb = new eb,
    lb = (a, b) => {
        hb || kb();
        ib || (hb(), ib = !0);
        jb.add(a, b)
    },
    kb = () => {
        const a = t.Promise.resolve(void 0);
        hb = () => {
            a.then(mb)
        }
    };
var mb = () => {
    let a;
    for (; a = jb.remove();) {
        try {
            a.h.call(a.scope)
        } catch (b) {
            db(b)
        }
        ab(fb, a)
    }
    ib = !1
};

function z(a) {
    this.h = 0;
    this.v = void 0;
    this.l = this.i = this.j = null;
    this.m = this.s = !1;
    if (a != cb) try {
        var b = this;
        a.call(void 0, function(c) {
            nb(b, 2, c)
        }, function(c) {
            nb(b, 3, c)
        })
    } catch (c) {
        nb(this, 3, c)
    }
}

function ob() {
    this.next = this.context = this.i = this.j = this.h = null;
    this.l = !1
}
ob.prototype.reset = function() {
    this.context = this.i = this.j = this.h = null;
    this.l = !1
};
var pb = new bb(function() {
    return new ob
}, function(a) {
    a.reset()
});

function qb(a, b, c) {
    var d = pb.get();
    d.j = a;
    d.i = b;
    d.context = c;
    return d
}

function rb(a) {
    if (a instanceof z) return a;
    var b = new z(cb);
    nb(b, 2, a);
    return b
}
z.prototype.then = function(a, b, c) {
    return sb(this, typeof a === "function" ? a : null, typeof b === "function" ? b : null, c)
};
z.prototype.$goog_Thenable = !0;
z.prototype.F = function(a, b) {
    return sb(this, null, a, b)
};
z.prototype.catch = z.prototype.F;
z.prototype.cancel = function(a) {
    if (this.h == 0) {
        var b = new tb(a);
        lb(function() {
            ub(this, b)
        }, this)
    }
};

function ub(a, b) {
    if (a.h == 0)
        if (a.j) {
            var c = a.j;
            if (c.i) {
                for (var d = 0, e = null, f = null, g = c.i; g && (g.l || (d++, g.h == a && (e = g), !(e && d > 1))); g = g.next) e || (f = g);
                e && (c.h == 0 && d == 1 ? ub(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : vb(c), wb(c, e, 3, b)))
            }
            a.j = null
        } else nb(a, 3, b)
}

function xb(a, b) {
    a.i || a.h != 2 && a.h != 3 || yb(a);
    a.l ? a.l.next = b : a.i = b;
    a.l = b
}

function sb(a, b, c, d) {
    var e = qb(null, null, null);
    e.h = new z(function(f, g) {
        e.j = b ? function(k) {
            try {
                var h = b.call(d, k);
                f(h)
            } catch (l) {
                g(l)
            }
        } : f;
        e.i = c ? function(k) {
            try {
                var h = c.call(d, k);
                h === void 0 && k instanceof tb ? g(k) : f(h)
            } catch (l) {
                g(l)
            }
        } : g
    });
    e.h.j = a;
    xb(a, e);
    return e.h
}
z.prototype.K = function(a) {
    this.h = 0;
    nb(this, 2, a)
};
z.prototype.M = function(a) {
    this.h = 0;
    nb(this, 3, a)
};

function nb(a, b, c) {
    if (a.h == 0) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.h = 1;
        a: {
            var d = c,
                e = a.K,
                f = a.M;
            if (d instanceof z) {
                xb(d, qb(e || cb, f || null, a));
                var g = !0
            } else {
                if (d) try {
                    var k = !!d.$goog_Thenable
                } catch (l) {
                    k = !1
                } else k = !1;
                if (k) d.then(e, f, a), g = !0;
                else {
                    k = typeof d;
                    if (k == "object" && d != null || k == "function") try {
                        var h = d.then;
                        if (typeof h === "function") {
                            zb(d, h, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (l) {
                        f.call(a, l);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
        }
        g || (a.v = c, a.h = b, a.j = null, yb(a), b != 3 || c instanceof tb || Ab(a, c))
    }
}

function zb(a, b, c, d, e) {
    function f(h) {
        k || (k = !0, d.call(e, h))
    }

    function g(h) {
        k || (k = !0, c.call(e, h))
    }
    var k = !1;
    try {
        b.call(a, g, f)
    } catch (h) {
        f(h)
    }
}

function yb(a) {
    a.s || (a.s = !0, lb(a.B, a))
}

function vb(a) {
    var b = null;
    a.i && (b = a.i, a.i = b.next, b.next = null);
    a.i || (a.l = null);
    return b
}
z.prototype.B = function() {
    for (var a; a = vb(this);) wb(this, a, this.h, this.v);
    this.s = !1
};

function wb(a, b, c, d) {
    if (c == 3 && b.i && !b.l)
        for (; a && a.m; a = a.j) a.m = !1;
    if (b.h) b.h.j = null, Bb(b, c, d);
    else try {
        b.l ? b.j.call(b.context) : Bb(b, c, d)
    } catch (e) {
        Cb.call(null, e)
    }
    ab(pb, b)
}

function Bb(a, b, c) {
    b == 2 ? a.j.call(a.context, c) : a.i && a.i.call(a.context, c)
}

function Ab(a, b) {
    a.m = !0;
    lb(function() {
        a.m && Cb.call(null, b)
    })
}
var Cb = db;

function tb(a) {
    oa.call(this, a)
}
ma(tb, oa);
tb.prototype.name = "cancel";

function Db() {
    throw Error("Invalid UTF8");
}

function Eb(a, b) {
    b = String.fromCharCode.apply(null, b);
    return a == null ? b : a + b
}
let Fb = void 0,
    Gb;
const Hb = typeof TextDecoder !== "undefined";
!x("Android") || Za();
Za();
var Ib = x("Safari") && !(Za() || (Ya() ? 0 : x("Coast")) || (Ya() ? 0 : x("Opera")) || (Ya() ? 0 : x("Edge")) || (Ya() ? Xa("Microsoft Edge") : x("Edg/")) || (Ya() ? Xa("Opera") : x("OPR")) || x("Firefox") || x("FxiOS") || x("Silk") || x("Android")) && !(x("iPhone") && !x("iPod") && !x("iPad") || x("iPad") || x("iPod"));
var Jb = {},
    Kb = null;

function Lb(a, b) {
    b === void 0 && (b = 0);
    Mb();
    b = Jb[b];
    const c = Array(Math.floor(a.length / 3)),
        d = b[64] || "";
    let e = 0,
        f = 0;
    for (; e < a.length - 2; e += 3) {
        var g = a[e],
            k = a[e + 1],
            h = a[e + 2],
            l = b[g >> 2];
        g = b[(g & 3) << 4 | k >> 4];
        k = b[(k & 15) << 2 | h >> 6];
        h = b[h & 63];
        c[f++] = "" + l + g + k + h
    }
    l = 0;
    h = d;
    switch (a.length - e) {
        case 2:
            l = a[e + 1], h = b[(l & 15) << 2] || d;
        case 1:
            a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + h + d
    }
    return c.join("")
}

function Nb(a) {
    var b = a.length,
        c = b * 3 / 4;
    c % 3 ? c = Math.floor(c) : "=.".indexOf(a[b - 1]) != -1 && (c = "=.".indexOf(a[b - 2]) != -1 ? c - 2 : c - 1);
    var d = new Uint8Array(c),
        e = 0;
    Ob(a, function(f) {
        d[e++] = f
    });
    return e !== c ? d.subarray(0, e) : d
}

function Ob(a, b) {
    function c(h) {
        for (; d < a.length;) {
            var l = a.charAt(d++),
                n = Kb[l];
            if (n != null) return n;
            if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
        }
        return h
    }
    Mb();
    for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            k = c(64);
        if (k === 64 && e === -1) break;
        b(e << 2 | f >> 4);
        g != 64 && (b(f << 4 & 240 | g >> 2), k != 64 && b(g << 6 & 192 | k))
    }
}

function Mb() {
    if (!Kb) {
        Kb = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
            var d = a.concat(b[c].split(""));
            Jb[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                Kb[f] === void 0 && (Kb[f] = e)
            }
        }
    }
};
var Pb = typeof Uint8Array !== "undefined",
    Qb = !$a && typeof btoa === "function";

function Rb(a) {
    if (!Qb) return Lb(a);
    let b = "",
        c = 0;
    const d = a.length - 10240;
    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
    return btoa(b)
}
const Sb = /[-_.]/g,
    Tb = {
        "-": "+",
        _: "/",
        ".": "="
    };

function Ub(a) {
    return Tb[a] || ""
}

function Vb(a) {
    if (!Qb) return Nb(a);
    Sb.test(a) && (a = a.replace(Sb, Ub));
    a = atob(a);
    const b = new Uint8Array(a.length);
    for (let c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
    return b
}

function Wb(a) {
    return Pb && a != null && a instanceof Uint8Array
}
var Xb = {};
let Yb;

function Zb(a) {
    if (a !== Xb) throw Error("illegal external caller");
}

function $b() {
    return Yb || (Yb = new ac(null, Xb))
}

function bc(a) {
    Zb(Xb);
    var b = a.h;
    b = b == null || Wb(b) ? b : typeof b === "string" ? Vb(b) : null;
    return b == null ? b : a.h = b
}
var ac = class {
    constructor(a, b) {
        Zb(b);
        this.h = a;
        if (a != null && a.length === 0) throw Error("ByteString should be constructed with non-empty values");
    }
    sizeBytes() {
        const a = bc(this);
        return a ? a.length : 0
    }
};

function cc(a, b) {
    return Error(`Invalid wire type: ${a} (at position ${b})`)
}

function dc() {
    return Error("Failed to read varint, encoding is invalid.")
}

function ec(a, b) {
    return Error(`Tried to read past the end of the data ${b} > ${a}`)
};

function fc(a) {
    if (typeof a === "string") return {
        buffer: Vb(a),
        L: !1
    };
    if (Array.isArray(a)) return {
        buffer: new Uint8Array(a),
        L: !1
    };
    if (a.constructor === Uint8Array) return {
        buffer: a,
        L: !1
    };
    if (a.constructor === ArrayBuffer) return {
        buffer: new Uint8Array(a),
        L: !1
    };
    if (a.constructor === ac) return {
        buffer: bc(a) || new Uint8Array(0),
        L: !0
    };
    if (a instanceof Uint8Array) return {
        buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
        L: !1
    };
    throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
};

function gc() {
    return typeof BigInt === "function"
};
const hc = typeof Uint8Array.prototype.slice === "function";
let A = 0,
    ic = 0;

function jc(a) {
    const b = a >>> 0;
    A = b;
    ic = (a - b) / 4294967296 >>> 0
}

function kc(a) {
    if (a < 0) {
        jc(0 - a);
        const [b, c] = lc(A, ic);
        A = b >>> 0;
        ic = c >>> 0
    } else jc(a)
}

function mc(a, b) {
    b >>>= 0;
    a >>>= 0;
    if (b <= 2097151) var c = "" + (4294967296 * b + a);
    else gc() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + c * 6777216 + b * 6710656, c += b * 8147497, b *= 2, a >= 1E7 && (c += a / 1E7 >>> 0, a %= 1E7), c >= 1E7 && (b += c / 1E7 >>> 0, c %= 1E7), c = b + nc(c) + nc(a));
    return c
}

function nc(a) {
    a = String(a);
    return "0000000".slice(a.length) + a
}

function oc() {
    var a = A,
        b = ic;
    if (b & 2147483648)
        if (gc()) a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
        else {
            const [c, d] = lc(a, b);
            a = "-" + mc(c, d)
        }
    else a = mc(a, b);
    return a
}

function lc(a, b) {
    b = ~b;
    a ? a = ~a + 1 : b += 1;
    return [a, b]
};

function pc(a) {
    const b = a.j;
    let c = a.h,
        d = b[c++],
        e = d & 127;
    if (d & 128 && (d = b[c++], e |= (d & 127) << 7, d & 128 && (d = b[c++], e |= (d & 127) << 14, d & 128 && (d = b[c++], e |= (d & 127) << 21, d & 128 && (d = b[c++], e |= d << 28, d & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128))))) throw dc();
    qc(a, c);
    return e
}

function qc(a, b) {
    a.h = b;
    if (b > a.i) throw ec(a.i, b);
}

function rc(a, b) {
    if (b < 0) throw Error(`Tried to read a negative byte length: ${b}`);
    const c = a.h,
        d = c + b;
    if (d > a.i) throw ec(b, a.i - c);
    a.h = d;
    return c
}
var sc = class {
        constructor(a, b) {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.init(a, void 0, void 0, b)
        }
        init(a, b, c, {
            ba: d = !1
        } = {}) {
            this.ba = d;
            a && (a = fc(a), this.j = a.buffer, this.m = a.L, this.l = b || 0, this.i = c !== void 0 ? this.l + c : this.j.length, this.h = this.l)
        }
        clear() {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.ba = !1
        }
        reset() {
            this.h = this.l
        }
    },
    tc = [];

function uc(a, {
    ka: b = !1
} = {}) {
    a.ka = b
}

function vc(a) {
    var b = a.h;
    if (b.h == b.i) return !1;
    a.j = a.h.h;
    var c = pc(a.h) >>> 0;
    b = c >>> 3;
    c &= 7;
    if (!(c >= 0 && c <= 5)) throw cc(c, a.j);
    if (b < 1) throw Error(`Invalid field number: ${b} (at position ${a.j})`);
    a.l = b;
    a.i = c;
    return !0
}

function wc(a) {
    switch (a.i) {
        case 0:
            if (a.i != 0) wc(a);
            else a: {
                a = a.h;
                var b = a.h;
                const c = b + 10,
                    d = a.j;
                for (; b < c;)
                    if ((d[b++] & 128) === 0) {
                        qc(a, b);
                        break a
                    }
                throw dc();
            }
            break;
        case 1:
            a = a.h;
            qc(a, a.h + 8);
            break;
        case 2:
            a.i != 2 ? wc(a) : (b = pc(a.h) >>> 0, a = a.h, qc(a, a.h + b));
            break;
        case 5:
            a = a.h;
            qc(a, a.h + 4);
            break;
        case 3:
            b = a.l;
            do {
                if (!vc(a)) throw Error("Unmatched start-group tag: stream EOF");
                if (a.i == 4) {
                    if (a.l != b) throw Error("Unmatched end-group tag");
                    break
                }
                wc(a)
            } while (1);
            break;
        default:
            throw cc(a.i, a.j);
    }
}

function xc(a, b, c) {
    const d = a.h.i,
        e = pc(a.h) >>> 0,
        f = a.h.h + e;
    let g = f - d;
    g <= 0 && (a.h.i = f, c(b, a, void 0, void 0, void 0), g = f - a.h.h);
    if (g) throw Error("Message parsing ended unexpectedly. Expected to read " + `${e} bytes, instead read ${e-g} bytes, either the ` + "data ended unexpectedly or the message misreported its own length");
    a.h.h = f;
    a.h.i = d
}
var yc = class {
        constructor(a, b) {
            if (tc.length) {
                const c = tc.pop();
                c.init(a, void 0, void 0, b);
                a = c
            } else a = new sc(a, b);
            this.h = a;
            this.j = this.h.h;
            this.i = this.l = -1;
            uc(this, b)
        }
        reset() {
            this.h.reset();
            this.j = this.h.h;
            this.i = this.l = -1
        }
    },
    zc = [];
class Ac {
    constructor(a, b, c) {
        this.Z = a;
        this.h = b;
        this.qa = c
    }
};

function Bc(a) {
    return Array.prototype.slice.call(a)
};
var Cc = typeof Symbol === "function" && typeof Symbol() === "symbol";

function Dc(a) {
    return typeof Symbol === "function" && typeof Symbol() === "symbol" ? Symbol() : a
}
var Ec = Dc(),
    Fc = Dc("2ex"),
    Gc = Dc("1oa");
[...Object.values({
    yb: 1,
    wb: 2,
    vb: 4,
    Db: 8,
    Cb: 16,
    Bb: 32,
    Sa: 64,
    Ib: 128,
    Za: 256,
    Ya: 512,
    xb: 1024,
    Wa: 2048,
    Hb: 4096,
    Xa: 8192
})];
var Hc = Cc ? (a, b) => {
        a[Ec] |= b
    } : (a, b) => {
        a.D !== void 0 ? a.D |= b : Object.defineProperties(a, {
            D: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    },
    Ic = Cc ? (a, b) => {
        a[Ec] &= ~b
    } : (a, b) => {
        a.D !== void 0 && (a.D &= ~b)
    },
    B = Cc ? a => a[Ec] | 0 : a => a.D | 0,
    C = Cc ? a => a[Ec] : a => a.D,
    E = Cc ? (a, b) => {
        a[Ec] = b
    } : (a, b) => {
        a.D !== void 0 ? a.D = b : Object.defineProperties(a, {
            D: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };

function Jc(a, b) {
    E(b, (a | 0) & -14591)
}

function Kc(a, b) {
    E(b, (a | 34) & -14557)
};
var Lc = {},
    Mc = {};

function Nc(a) {
    return !(!a || typeof a !== "object" || a.h !== Mc)
}

function Oc(a) {
    return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
}

function Pc(a, b, c) {
    if (!Array.isArray(a) || a.length) return !1;
    const d = B(a);
    if (d & 1) return !0;
    if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
    E(a, d | 1);
    return !0
}
var Qc;
const Rc = [];
E(Rc, 55);
Qc = Object.freeze(Rc);

function Sc(a) {
    if (a & 2) throw Error();
}
let Tc;

function Uc(a, b) {
    (b = Tc ? b[Tc] : void 0) && (a[Tc] = Bc(b))
}
let Vc;
var Wc = Object.freeze({});
let Xc;

function Yc() {
    const a = Error();
    Ga(a, "incident");
    db(a)
}

function Zc(a) {
    a = Error(a);
    Ga(a, "warning");
    return a
};

function $c(a) {
    return a.displayName || a.name || "unknown type name"
}
const ad = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

function bd(a) {
    const b = typeof a;
    return b === "number" ? Number.isFinite(a) : b !== "string" ? !1 : ad.test(a)
}

function cd(a) {
    if (a == null) return a;
    if (typeof a === "string") {
        if (!a) return;
        a = +a
    }
    if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
}

function dd(a, b) {
    b = !!b;
    if (!bd(a)) throw Zc("int64");
    if (typeof a === "string")
        if (bd(a), b = Math.trunc(Number(a)), Number.isSafeInteger(b)) a = String(b);
        else {
            if (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), !ed(a)) {
                if (a.length < 16) kc(Number(a));
                else if (gc()) a = BigInt(a), A = Number(a & BigInt(4294967295)) >>> 0, ic = Number(a >> BigInt(32) & BigInt(4294967295));
                else {
                    b = +(a[0] === "-");
                    ic = A = 0;
                    var c = a.length;
                    for (let d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) {
                        const f = Number(a.slice(d, e));
                        ic *= 1E6;
                        A = A * 1E6 + f;
                        A >= 4294967296 && (ic += Math.trunc(A /
                            4294967296), ic >>>= 0, A >>>= 0)
                    }
                    if (b) {
                        const [d, e] = lc(A, ic);
                        A = d;
                        ic = e
                    }
                }
                a = oc()
            }
        }
    else if (b) bd(a), a = Math.trunc(a), Number.isSafeInteger(a) ? a = String(a) : (b = String(a), ed(b) ? a = b : (kc(a), a = oc()));
    else if (bd(a), a = Math.trunc(a), !Number.isSafeInteger(a)) {
        kc(a);
        b = A;
        c = ic;
        if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
        b = c * 4294967296 + (b >>> 0);
        a = a ? -b : b
    }
    return a
}

function ed(a) {
    return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
}

function fd(a) {
    if (a != null && typeof a !== "string") throw Error();
    return a
}

function gd(a, b) {
    if (!(a instanceof b)) throw Error(`Expected instanceof ${$c(b)} but got ${a&&$c(a.constructor)}`);
    return a
}

function hd(a, b, c) {
    if (a != null && typeof a === "object" && a.W === Lc) return a;
    if (Array.isArray(a)) {
        var d = B(a),
            e = d;
        e === 0 && (e |= c & 32);
        e |= c & 2;
        e !== d && E(a, e);
        return new b(a)
    }
};
let id, jd, kd;

function ld(a) {
    switch (typeof a) {
        case "boolean":
            return jd || (jd = [0, void 0, !0]);
        case "number":
            return a > 0 ? void 0 : a === 0 ? kd || (kd = [0, void 0]) : [-a, void 0];
        case "string":
            return [0, a];
        case "object":
            return a
    }
}

function md(a, b, c) {
    a == null && (a = id);
    id = void 0;
    if (a == null) {
        var d = 96;
        c ? (a = [c], d |= 512) : a = [];
        b && (d = d & -16760833 | (b & 1023) << 14)
    } else {
        if (!Array.isArray(a)) throw Error("narr");
        d = B(a);
        if (d & 2048) throw Error("farr");
        if (d & 64) return a;
        d |= 64;
        if (c && (d |= 512, c !== a[0])) throw Error("mid");
        a: {
            c = a;
            const e = c.length;
            if (e) {
                const f = e - 1;
                if (Oc(c[f])) {
                    d |= 256;
                    b = f - (+!!(d & 512) - 1);
                    if (b >= 1024) throw Error("pvtlmt");
                    d = d & -16760833 | (b & 1023) << 14;
                    break a
                }
            }
            if (b) {
                b = Math.max(b, e - (+!!(d & 512) - 1));
                if (b > 1024) throw Error("spvt");
                d = d & -16760833 | (b &
                    1023) << 14
            }
        }
    }
    E(a, d);
    return a
};

function nd(a) {
    if (typeof Proxy !== "function") return a;
    let b = od(a);
    if (b) return b;
    b = new Proxy(a, {
        set(c, d, e) {
            pd();
            c[d] = e;
            return !0
        }
    });
    qd(a, b);
    return b
}

function pd() {
    Yc()
}
let rd = void 0,
    sd = void 0;

function od(a) {
    let b;
    return (b = rd) == null ? void 0 : b.get(a)
}

function qd(a, b) {
    (rd || (rd = new WeakMap)).set(a, b);
    (sd || (sd = new WeakMap)).set(b, a)
};

function td(a, b) {
    return ud(b)
}

function ud(a) {
    switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a)
                if (Array.isArray(a)) {
                    if (Pc(a, void 0, 0)) return
                } else {
                    if (Wb(a)) return Rb(a);
                    if (a instanceof ac) {
                        const b = a.h;
                        return b == null ? "" : typeof b === "string" ? b : a.h = Rb(b)
                    }
                }
    }
    return a
};

function vd(a, b, c) {
    const d = Bc(a);
    var e = d.length;
    const f = b & 256 ? d[e - 1] : void 0;
    e += f ? -1 : 0;
    for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
    if (f) {
        b = d[b] = {};
        for (const g in f) b[g] = c(f[g])
    }
    Uc(d, a);
    return d
}

function wd(a, b, c, d, e) {
    if (a != null) {
        if (Array.isArray(a)) a = Pc(a, void 0, 0) ? void 0 : e && B(a) & 2 ? a : xd(a, b, c, d !== void 0, e);
        else if (Oc(a)) {
            const f = {};
            for (let g in a) f[g] = wd(a[g], b, c, d, e);
            a = f
        } else a = b(a, d);
        return a
    }
}

function xd(a, b, c, d, e) {
    const f = d || c ? B(a) : 0;
    d = d ? !!(f & 32) : void 0;
    const g = Bc(a);
    for (let k = 0; k < g.length; k++) g[k] = wd(g[k], b, c, d, e);
    c && (Uc(g, a), c(f, g));
    return g
}

function yd(a) {
    return a.W === Lc ? a.toJSON() : ud(a)
};

function zd(a, b, c = Kc) {
    if (a != null) {
        if (Pb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
        if (Array.isArray(a)) {
            var d = B(a);
            if (d & 2) return a;
            b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
            return b ? (E(a, (d | 34) & -12293), a) : xd(a, zd, d & 4 ? Kc : c, !0, !0)
        }
        a.W === Lc && (c = a.o, d = C(c), a = d & 2 ? a : Ad(a, c, d, !0));
        return a
    }
}

function Ad(a, b, c, d) {
    a = a.constructor;
    id = b = Bd(b, c, d);
    b = new a(b);
    id = void 0;
    return b
}

function Bd(a, b, c) {
    const d = c || b & 2 ? Kc : Jc,
        e = !!(b & 32);
    a = vd(a, b, f => zd(f, e, d));
    Hc(a, 32 | (c ? 2 : 0));
    return a
}

function Cd(a) {
    const b = a.o,
        c = C(b);
    return c & 2 ? Ad(a, b, c, !1) : a
};

function Dd(a, b) {
    a = a.o;
    return Ed(a, C(a), b)
}

function Fd(a, b, c, d) {
    b = d + (+!!(b & 512) - 1);
    if (!(b < 0 || b >= a.length || b >= c)) return a[b]
}

function Ed(a, b, c, d) {
    if (c === -1) return null;
    const e = b >> 14 & 1023 || 536870912;
    if (c >= e) {
        if (b & 256) return a[a.length - 1][c]
    } else {
        var f = a.length;
        if (d && b & 256 && (d = a[f - 1][c], d != null)) {
            if (Fd(a, b, e, c) && Fc != null) {
                var g;
                a = (g = Xc) != null ? g : Xc = {};
                g = a[Fc] || 0;
                g >= 4 || (a[Fc] = g + 1, Yc())
            }
            return d
        }
        return Fd(a, b, e, c)
    }
}

function Gd(a, b, c) {
    const d = a.o;
    let e = C(d);
    Sc(e);
    F(d, e, b, c);
    return a
}

function F(a, b, c, d, e) {
    const f = b >> 14 & 1023 || 536870912;
    if (c >= f || e && !Ta) {
        let g = b;
        if (b & 256) e = a[a.length - 1];
        else {
            if (d == null) return g;
            e = a[f + (+!!(b & 512) - 1)] = {};
            g |= 256
        }
        e[c] = d;
        c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
        g !== b && E(a, g);
        return g
    }
    a[c + (+!!(b & 512) - 1)] = d;
    b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
    return b
}

function Hd(a) {
    return Id(a, H, 2) !== void 0
}

function Jd(a, b, c, d) {
    var e = b & 2;
    let f = Ed(a, b, c);
    Array.isArray(f) || (f = Qc);
    const g = !(d & 2);
    d = !(d & 1);
    const k = !!(b & 32);
    let h = B(f);
    h !== 0 || !k || e || g ? h & 1 || (h |= 1, E(f, h)) : (h |= 33, E(f, h));
    e ? (a = !1, h & 2 || (Hc(f, 34), a = !!(4 & h)), (d || a) && Object.freeze(f)) : (e = !!(2 & h) || !!(2048 & h), d && e ? (f = Bc(f), d = 1, k && !g && (d |= 32), E(f, d), F(a, b, c, f)) : g && h & 32 && !e && Ic(f, 32));
    return f
}

function Kd(a) {
    return !!(2 & a) && !!(4 & a) || !!(2048 & a)
}

function Ld(a, b, c, d) {
    const e = a.o;
    var f = C(e);
    Sc(f);
    if (d == null) {
        var g = Md(e);
        if (Nd(g, e, f, c) === b) g.set(c, 0);
        else return a
    } else {
        c.includes(b);
        g = Md(e);
        const k = Nd(g, e, f, c);
        k !== b && (k && (f = F(e, f, k)), g.set(c, b))
    }
    F(e, f, b, d);
    return a
}

function Md(a) {
    if (Cc) {
        var b;
        return (b = a[Gc]) != null ? b : a[Gc] = new Map
    }
    if (Gc in a) return a[Gc];
    b = new Map;
    Object.defineProperty(a, Gc, {
        value: b
    });
    return b
}

function Nd(a, b, c, d) {
    let e = a.get(d);
    if (e != null) return e;
    e = 0;
    for (let f = 0; f < d.length; f++) {
        const g = d[f];
        Ed(b, c, g) != null && (e !== 0 && (c = F(b, c, e)), e = g)
    }
    a.set(d, e);
    return e
}

function Od(a, b, c, d) {
    let e = C(a);
    const f = Ed(a, e, c, d);
    let g;
    if (f != null && f.W === Lc) return b = Cd(f), b !== f && F(a, e, c, b, d), b.o;
    if (Array.isArray(f)) {
        const k = B(f);
        k & 2 ? g = Bd(f, k, !1) : g = f;
        g = md(g, b[0], b[1])
    } else g = md(void 0, b[0], b[1]);
    g !== f && F(a, e, c, g, d);
    return g
}

function Id(a, b, c) {
    a = a.o;
    let d = C(a);
    const e = Ed(a, d, c, !1);
    b = hd(e, b, d);
    b !== e && b != null && F(a, d, c, b, !1);
    return b
}

function Pd(a, b, c) {
    b = Id(a, b, c);
    if (b == null) return b;
    a = a.o;
    let d = C(a);
    if (!(d & 2)) {
        const e = Cd(b);
        e !== b && (b = e, F(a, d, c, b, !1))
    }
    return b
}

function Qd(a, b, c, d, e, f, g) {
    var k = !!(2 & b);
    e = k ? 1 : e;
    f = !!f;
    g && (g = !k);
    k = Ed(a, b, d);
    k = Array.isArray(k) ? k : Qc;
    var h = B(k),
        l = !!(4 & h);
    if (!l) {
        var n = h;
        n === 0 && (n = Rd(n, b));
        h = k;
        n |= 1;
        var m = b;
        const q = !!(2 & n);
        q && (m |= 2);
        let p = !q,
            u = !0,
            y = 0,
            D = 0;
        for (; y < h.length; y++) {
            const P = hd(h[y], c, m);
            if (P instanceof c) {
                if (!q) {
                    const G = !!(B(P.o) & 2);
                    p && (p = !G);
                    u && (u = G)
                }
                h[D++] = P
            }
        }
        D < y && (h.length = D);
        n |= 4;
        n = u ? n | 16 : n & -17;
        n = p ? n | 8 : n & -9;
        E(h, n);
        q && Object.freeze(h);
        h = n
    }
    if (g && !(8 & h || !k.length && (e === 1 || e === 4 && 32 & h))) {
        Kd(h) && (k = Bc(k), h = Rd(h, b), b = F(a, b,
            d, k));
        c = k;
        g = h;
        for (h = 0; h < c.length; h++) n = c[h], m = Cd(n), n !== m && (c[h] = m);
        g |= 8;
        g = c.length ? g & -17 : g | 16;
        E(c, g);
        h = g
    }
    e === 1 || e === 4 && 32 & h ? Kd(h) || (b = h, f = !!(32 & h), h |= !k.length || 16 & h && (!l || f) ? 2 : 2048, h !== b && E(k, h), Object.freeze(k)) : (l = e !== 5 ? !1 : !!(32 & h) || Kd(h) || !!od(k), (e === 2 || l) && Kd(h) && (k = Bc(k), h = Rd(h, b), h = Sd(h, b, f), E(k, h), b = F(a, b, d, k)), Kd(h) || (a = h, h = Sd(h, b, f), h !== a && E(k, h)), l && (k = nd(k)));
    return k
}

function I(a, b, c, d) {
    d != null ? gd(d, b) : d = void 0;
    return Gd(a, c, d)
}

function Td(a, b, c, d, e) {
    e != null ? gd(e, b) : e = void 0;
    Ld(a, c, d, e)
}

function Rd(a, b) {
    a = (2 & b ? a | 2 : a & -3) | 32;
    return a &= -2049
}

function Sd(a, b, c) {
    32 & b && c || (a &= -33);
    return a
}

function Ud(a, b, c, d) {
    a = a.o;
    const e = C(a);
    Sc(e);
    b = Qd(a, e, c, b, 2, !0);
    c = d != null ? gd(d, c) : new c;
    b.push(c);
    B(c.o) & 2 ? Ic(b, 8) : Ic(b, 16)
}

function Vd(a, b) {
    a = Dd(a, b);
    return a == null || typeof a === "string" ? a : void 0
}

function Wd(a, b) {
    a = Vd(a, b);
    return a != null ? a : ""
}

function Xd(a, b) {
    var c = Yd;
    const d = a.o;
    c = Nd(Md(d), d, C(d), c);
    return Vd(a, c === b ? b : -1)
}

function Zd(a, b, c) {
    if (c != null) {
        if (typeof c !== "number") throw Zc("int32");
        if (!Number.isFinite(c)) throw Zc("int32");
        c |= 0
    }
    return Gd(a, b, c)
}

function $d(a, b, c) {
    Gd(a, b, c == null ? c : dd(c))
}

function J(a, b, c) {
    return Gd(a, b, fd(c))
}

function K(a, b, c) {
    if (c != null) {
        if (!Number.isFinite(c)) throw Zc("enum");
        c |= 0
    }
    return Gd(a, b, c)
};
let ae;
var L = class {
    constructor(a, b, c) {
        this.o = md(a, b, c)
    }
    toJSON() {
        return be(this)
    }
    clone() {
        const a = this.o;
        return Ad(this, a, C(a), !1)
    }
    L() {
        return !!(B(this.o) & 2)
    }
};
L.prototype.W = Lc;

function be(a) {
    var b = ae ? a.o : xd(a.o, yd, void 0, void 0, !1);
    var c = !ae;
    var d = Sa ? void 0 : a.constructor.A;
    var e = C(c ? a.o : b);
    if (a = b.length) {
        var f = b[a - 1],
            g = Oc(f);
        g ? a-- : f = void 0;
        e = +!!(e & 512) - 1;
        var k = b;
        if (g) {
            b: {
                var h = f;
                var l = {};g = !1;
                if (h)
                    for (var n in h) {
                        if (isNaN(+n)) {
                            l[n] = h[n];
                            continue
                        }
                        let p = h[n];
                        Array.isArray(p) && (Pc(p, d, +n) || Nc(p) && p.size === 0) && (p = null);
                        p == null && (g = !0);
                        p != null && (l[n] = p)
                    }
                if (g) {
                    for (var m in l) break b;
                    l = null
                } else l = h
            }
            h = l == null ? f != null : l !== f
        }
        for (var q; a > 0; a--) {
            m = a - 1;
            n = k[m];
            m -= e;
            if (!(n == null || Pc(n,
                    d, m) || Nc(n) && n.size === 0)) break;
            q = !0
        }
        if (k !== b || h || q) {
            if (!c) k = Array.prototype.slice.call(k, 0, a);
            else if (q || h || l) k.length = a;
            l && k.push(l)
        }
        b = k
    }
    return b
};
const ce = Symbol();

function de(a) {
    let b = a[ce];
    if (!b) {
        const c = ee(a),
            d = fe(a),
            e = d.j;
        b = e ? (f, g) => e(f, g, d) : (f, g) => {
            for (; vc(g) && g.i != 4;) {
                var k = g.l,
                    h = d[k];
                if (!h) {
                    var l = d.extensions;
                    l && (l = l[k]) && (h = d[k] = ge(l))
                }
                if (!h || !h(g, f, k)) {
                    h = g;
                    k = h.j;
                    wc(h);
                    if (h.ka) h = void 0;
                    else {
                        l = h.h.h - k;
                        h.h.h = k;
                        b: {
                            h = h.h;k = l;
                            if (k == 0) {
                                h = $b();
                                break b
                            }
                            const n = rc(h, k);h.ba && h.m ? k = h.j.subarray(n, n + k) : (h = h.j, l = n, k = n + k, k = l === k ? new Uint8Array(0) : hc ? h.slice(l, k) : new Uint8Array(h.subarray(l, k)));h = k.length == 0 ? $b() : new ac(k, Xb)
                        }
                    }
                    k = f;
                    h && (Tc || (Tc = Symbol()), (l = k[Tc]) ? l.push(h) : k[Tc] = [h])
                }
            }
            c === he || c === ie || c.l || (f[Vc || (Vc = Symbol())] = c)
        };
        a[ce] = b
    }
    return b
}

function ge(a) {
    a = Array.isArray(a) ? a[0] instanceof Ac ? a : [je, a] : [a, void 0];
    const b = a[0].Z;
    if (a = a[1]) {
        const c = de(a),
            d = fe(a).V;
        return (e, f, g) => b(e, f, g, d, c)
    }
    return b
}
class ke {}
let he, ie;
const le = Symbol();

function me(a, b, c) {
    const d = c[1];
    let e;
    if (d) {
        const f = d[le];
        e = f ? f.V : ld(d[0]);
        a[b] = f != null ? f : d
    }
    e && e === jd ? (a.h || (a.h = new Set)).add(b) : c[0] && (a.i || (a.i = new Set)).add(b)
}

function ne(a, b) {
    return [a.h, !b || b[0] > 0 ? void 0 : b]
}

function ee(a) {
    var b = a[le];
    if (b) return b;
    b = oe(a, a[le] = new ke, ne, ne, me);
    if (!b.extensions && !b.i && !b.h) {
        let c = !0;
        for (let d in b) isNaN(d) || (c = !1);
        c ? (ld(a[0]) === jd ? ie ? b = ie : (b = new ke, b.V = ld(!0), b = ie = b) : b = he || (he = new ke), b = a[le] = b) : b.l = !0
    }
    return b
}

function pe(a, b, c) {
    a[b] = c
}

function oe(a, b, c, d, e = pe) {
    b.V = ld(a[0]);
    let f = 0;
    var g = a[++f];
    g && g.constructor === Object && (b.extensions = g, g = a[++f], typeof g === "function" && (b.j = g, b.m = a[++f], g = a[++f]));
    const k = {};
    for (; Array.isArray(g) && typeof g[0] === "number" && g[0] > 0;) {
        for (var h = 0; h < g.length; h++) k[g[h]] = g;
        g = a[++f]
    }
    for (h = 1; g !== void 0;) {
        typeof g === "number" && (h += g, g = a[++f]);
        let m;
        var l = void 0;
        g instanceof Ac ? m = g : (m = qe, f--);
        if (m.qa) {
            g = a[++f];
            l = a;
            var n = f;
            typeof g == "function" && (g = g(), l[n] = g);
            l = g
        }
        g = a[++f];
        n = h + 1;
        typeof g === "number" && g < 0 && (n -=
            g, g = a[++f]);
        for (; h < n; h++) {
            const q = k[h];
            e(b, h, l ? d(m, l, q) : c(m, q))
        }
    }
    return b
}
const re = Symbol(),
    se = Symbol();

function te(a, b) {
    const c = a.Z;
    return b ? (d, e, f) => c(d, e, f, b) : c
}

function ue(a, b, c) {
    const d = a.Z;
    let e, f;
    return (g, k, h) => d(g, k, h, f || (f = fe(b).V), e || (e = de(b)), c)
}

function fe(a) {
    let b = a[se];
    if (b) return b;
    ee(a);
    b = oe(a, a[se] = {}, te, ue);
    se in a && le in a && re in a && (a.length = 0);
    return b
}
var ve;
ve = new Ac(function(a, b, c) {
    if (a.i !== 2) return !1;
    var d = pc(a.h) >>> 0;
    a = a.h;
    var e = rc(a, d);
    a = a.j;
    if (Hb) {
        var f = a,
            g;
        (g = Gb) || (g = Gb = new TextDecoder("utf-8", {
            fatal: !0
        }));
        d = e + d;
        f = e === 0 && d === f.length ? f : f.subarray(e, d);
        try {
            var k = g.decode(f)
        } catch (l) {
            if (Fb === void 0) {
                try {
                    g.decode(new Uint8Array([128]))
                } catch (n) {}
                try {
                    g.decode(new Uint8Array([97])), Fb = !0
                } catch (n) {
                    Fb = !1
                }
            }!Fb && (Gb = void 0);
            throw l;
        }
    } else {
        k = e;
        d = k + d;
        e = [];
        let l = null;
        let n;
        for (; k < d;) {
            var h = a[k++];
            h < 128 ? e.push(h) : h < 224 ? k >= d ? Db() : (n = a[k++], h < 194 || (n & 192) !==
                128 ? (k--, Db()) : e.push((h & 31) << 6 | n & 63)) : h < 240 ? k >= d - 1 ? Db() : (n = a[k++], (n & 192) !== 128 || h === 224 && n < 160 || h === 237 && n >= 160 || ((g = a[k++]) & 192) !== 128 ? (k--, Db()) : e.push((h & 15) << 12 | (n & 63) << 6 | g & 63)) : h <= 244 ? k >= d - 2 ? Db() : (n = a[k++], (n & 192) !== 128 || (h << 28) + (n - 144) >> 30 !== 0 || ((g = a[k++]) & 192) !== 128 || ((f = a[k++]) & 192) !== 128 ? (k--, Db()) : (h = (h & 7) << 18 | (n & 63) << 12 | (g & 63) << 6 | f & 63, h -= 65536, e.push((h >> 10 & 1023) + 55296, (h & 1023) + 56320))) : Db();
            e.length >= 8192 && (l = Eb(l, e), e.length = 0)
        }
        k = Eb(l, e)
    }
    F(b, C(b), c, k);
    return !0
}, !1, !1);
var je = new Ac(function(a, b, c, d, e) {
        if (a.i !== 2) return !1;
        xc(a, Od(b, d, c, !0), e);
        return !0
    }, !1, !0),
    qe = new Ac(function(a, b, c, d, e) {
        if (a.i !== 2) return !1;
        xc(a, Od(b, d, c), e);
        return !0
    }, !1, !0),
    we;
we = new Ac(function(a, b, c, d, e) {
    if (a.i !== 2) return !1;
    d = md(void 0, d[0], d[1]);
    let f = C(b);
    Sc(f);
    let g = Jd(b, f, c, 3);
    f = C(b);
    B(g) & 4 && (g = Bc(g), E(g, (B(g) | 1) & -2079), F(b, f, c, g));
    g.push(d);
    xc(a, d, e);
    return !0
}, !0, !0);
ua("csi.gstatic.com");
ua("googleads.g.doubleclick.net");
ua("partner.googleadservices.com");
ua("pubads.g.doubleclick.net");
ua("securepubads.g.doubleclick.net");
ua("tpc.googlesyndication.com");

function xe(a) {
    if (!a) return "";
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
    a.indexOf("blob:") === 0 && (a = a.substring(5));
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    a.indexOf("//") == 0 && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/");
    c != -1 && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if (c !== "http" && c !== "https" && c !== "chrome-extension" &&
        c !== "moz-extension" && c !== "file" && c !== "android-app" && c !== "chrome-search" && c !== "chrome-untrusted" && c !== "chrome" && c !== "app" && c !== "devtools") throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (d != -1) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if (c === "http" && e !== "80" || c === "https" && e !== "443") a = ":" + e
    }
    return c + "://" + b + a
};

function ye() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        n = l = 0
    }

    function b(m) {
        for (var q = g, p = 0; p < 64; p += 4) q[p / 4] = m[p] << 24 | m[p + 1] << 16 | m[p + 2] << 8 | m[p + 3];
        for (p = 16; p < 80; p++) m = q[p - 3] ^ q[p - 8] ^ q[p - 14] ^ q[p - 16], q[p] = (m << 1 | m >>> 31) & 4294967295;
        m = e[0];
        var u = e[1],
            y = e[2],
            D = e[3],
            P = e[4];
        for (p = 0; p < 80; p++) {
            if (p < 40)
                if (p < 20) {
                    var G = D ^ u & (y ^ D);
                    var qa = 1518500249
                } else G = u ^ y ^ D, qa = 1859775393;
            else p < 60 ? (G = u & y | D & (u | y), qa = 2400959708) : (G = u ^ y ^ D, qa = 3395469782);
            G = ((m << 5 | m >>> 27) & 4294967295) + G + P + qa + q[p] & 4294967295;
            P = D;
            D = y;
            y = (u << 30 | u >>> 2) & 4294967295;
            u = m;
            m = G
        }
        e[0] = e[0] + m & 4294967295;
        e[1] = e[1] + u & 4294967295;
        e[2] = e[2] + y & 4294967295;
        e[3] = e[3] + D & 4294967295;
        e[4] = e[4] + P & 4294967295
    }

    function c(m, q) {
        if (typeof m === "string") {
            m = unescape(encodeURIComponent(m));
            for (var p = [], u = 0, y = m.length; u < y; ++u) p.push(m.charCodeAt(u));
            m = p
        }
        q || (q = m.length);
        p = 0;
        if (l == 0)
            for (; p + 64 < q;) b(m.slice(p, p + 64)), p += 64, n += 64;
        for (; p < q;)
            if (f[l++] = m[p++], n++, l == 64)
                for (l = 0, b(f); p + 64 < q;) b(m.slice(p, p + 64)), p += 64, n += 64
    }

    function d() {
        var m = [],
            q = n * 8;
        l < 56 ? c(k, 56 - l) : c(k, 64 - (l - 56));
        for (var p = 63; p >= 56; p--) f[p] = q & 255, q >>>= 8;
        b(f);
        for (p = q = 0; p < 5; p++)
            for (var u = 24; u >= 0; u -= 8) m[q++] = e[p] >> u & 255;
        return m
    }
    for (var e = [], f = [], g = [], k = [128], h = 1; h < 64; ++h) k[h] = 0;
    var l, n;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        Ba: function() {
            for (var m = d(), q = "", p = 0; p < m.length; p++) q += "0123456789ABCDEF".charAt(Math.floor(m[p] / 16)) + "0123456789ABCDEF".charAt(m[p] % 16);
            return q
        }
    }
};

function ze(a, b, c) {
    var d = String(t.location.href);
    return d && a && b ? [b, Ae(xe(d), a, c || null)].join(" ") : null
}

function Ae(a, b, c) {
    var d = [],
        e = [];
    if ((Array.isArray(c) ? 2 : 1) == 1) return e = [b, a], xa(d, function(k) {
        e.push(k)
    }), Be(e.join(" "));
    var f = [],
        g = [];
    xa(c, function(k) {
        g.push(k.key);
        f.push(k.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = f.length == 0 ? [c, b, a] : [f.join(":"), c, b, a];
    xa(d, function(k) {
        e.push(k)
    });
    a = Be(e.join(" "));
    a = [c, a];
    g.length == 0 || a.push(g.join(""));
    return a.join("_")
}

function Be(a) {
    var b = ye();
    b.update(a);
    return b.Ba().toLowerCase()
};
const Ce = {};

function De() {
    this.h = document || {
        cookie: ""
    }
}
De.prototype.isEnabled = function() {
    if (!t.navigator.cookieEnabled) return !1;
    if (this.h.cookie) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        na: 60
    });
    if (this.get("TESTCOOKIESENABLED") !== "1") return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
};
De.prototype.set = function(a, b, c) {
    let d, e, f, g = !1,
        k;
    typeof c === "object" && (k = c.dc, g = c.ec || !1, f = c.domain || void 0, e = c.path || void 0, d = c.na);
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    d === void 0 && (d = -1);
    this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + d * 1E3)).toUTCString()) + (g ? ";secure" : "") + (k != null ? ";samesite=" + k : "")
};
De.prototype.get = function(a, b) {
    const c = a + "=",
        d = (this.h.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = pa(d[e]);
        if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
        if (f == a) return ""
    }
    return b
};
De.prototype.remove = function(a, b, c) {
    const d = this.get(a) !== void 0;
    this.set(a, "", {
        na: 0,
        path: b,
        domain: c
    });
    return d
};
De.prototype.clear = function() {
    var a = (this.h.cookie || "").split(";");
    const b = [],
        c = [];
    let d, e;
    for (let f = 0; f < a.length; f++) e = pa(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; a >= 0; a--) this.remove(b[a])
};

function Ee() {
    return !!Ce.FPA_SAMESITE_PHASE2_MOD || !1
}

function Fe(a, b, c, d) {
    (a = t[a]) || typeof document === "undefined" || (a = (new De).get(b));
    return a ? ze(a, c, d) : null
};
const Ge = self;
class He {
    constructor() {
        this.promise = new Promise((a, b) => {
            this.resolve = a;
            this.reject = b
        })
    }
};

function M(a) {
    Pa.call(this);
    this.K = 1;
    this.s = [];
    this.v = 0;
    this.h = [];
    this.j = {};
    this.aa = !!a
}
ma(M, Pa);
M.prototype.M = function(a, b, c) {
    var d = this.j[a];
    d || (d = this.j[a] = []);
    var e = this.K;
    this.h[e] = a;
    this.h[e + 1] = b;
    this.h[e + 2] = c;
    this.K = e + 3;
    d.push(e);
    return e
};
M.prototype.F = function(a) {
    var b = this.h[a];
    if (b) {
        var c = this.j[b];
        this.v != 0 ? (this.s.push(a), this.h[a + 1] = () => {}) : (c && za(c, a), delete this.h[a], delete this.h[a + 1], delete this.h[a + 2])
    }
    return !!b
};
M.prototype.B = function(a, b) {
    var c = this.j[a];
    if (c) {
        for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
        if (this.aa)
            for (e = 0; e < c.length; e++) {
                var g = c[e];
                Ie(this.h[g + 1], this.h[g + 2], d)
            } else {
                this.v++;
                try {
                    for (e = 0, f = c.length; e < f && !this.l; e++) g = c[e], this.h[g + 1].apply(this.h[g + 2], d)
                } finally {
                    if (this.v--, this.s.length > 0 && this.v == 0)
                        for (; c = this.s.pop();) this.F(c)
                }
            }
        return e != 0
    }
    return !1
};

function Ie(a, b, c) {
    lb(function() {
        a.apply(b, c)
    })
}
M.prototype.clear = function(a) {
    if (a) {
        var b = this.j[a];
        b && (b.forEach(this.F, this), delete this.j[a])
    } else this.h.length = 0, this.j = {}
};
M.prototype.m = function() {
    M.Ma.m.call(this);
    this.clear();
    this.s.length = 0
};
/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let N = {};
var Je = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
N.assign = function(a) {
    for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
        var c = b.shift();
        if (c) {
            if (typeof c !== "object") throw new TypeError(c + "must be non-object");
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
        }
    }
    return a
};
N.ic = function(a, b) {
    if (a.length === b) return a;
    if (a.subarray) return a.subarray(0, b);
    a.length = b;
    return a
};
var Ke = {
        ya: function(a, b, c, d, e) {
            if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
            else
                for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        Ca: function(a) {
            var b, c;
            var d = c = 0;
            for (b = a.length; d < b; d++) c += a[d].length;
            var e = new Uint8Array(c);
            d = c = 0;
            for (b = a.length; d < b; d++) {
                var f = a[d];
                e.set(f, c);
                c += f.length
            }
            return e
        }
    },
    Le = {
        ya: function(a, b, c, d, e) {
            for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        Ca: function(a) {
            return [].concat.apply([], a)
        }
    };
N.La = function() {
    Je ? (N.ta = Uint8Array, N.ra = Uint16Array, N.sa = Int32Array, N.assign(N, Ke)) : (N.ta = Array, N.ra = Array, N.sa = Array, N.assign(N, Le))
};
N.La();
try {
    new Uint8Array(1)
} catch (a) {};

function Me(a) {
    for (var b = a.length; --b >= 0;) a[b] = 0
}
Me(Array(576));
Me(Array(60));
Me(Array(512));
Me(Array(256));
Me(Array(29));
Me(Array(30));
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Ne = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var Oe = class {
    constructor(a) {
        this.name = a
    }
};
var Pe = new Oe("rawColdConfigGroup");
var Qe = new Oe("rawHotConfigGroup");

function Re(a, b) {
    return Zd(a, 1, b)
}
var Se = class extends L {
    constructor(a) {
        super(a)
    }
};
var Te = class extends L {
    constructor(a) {
        super(a)
    }
};
Te.A = [1];
var Ue = class extends L {
    constructor(a) {
        super(a)
    }
};
var Ve = class extends L {
    constructor(a) {
        super(a)
    }
};
var We = class extends L {
    constructor(a) {
        super(a)
    }
};
We.A = [2];
var Xe = class extends L {
    constructor(a) {
        super(a)
    }
    getPlayerType() {
        var a = Dd(this, 36);
        a = a == null ? a : Number.isFinite(a) ? a | 0 : void 0;
        return a != null ? a : 0
    }
    setHomeGroupInfo(a) {
        return I(this, We, 81, a)
    }
    clearLocationPlayabilityToken() {
        return Gd(this, 89)
    }
};
Xe.A = [9, 66, 32, 86, 100, 101];
var Ye = class extends L {
        constructor(a) {
            super(a)
        }
        getKey() {
            return Wd(this, 1)
        }
    },
    Ze = [2, 3, 4, 5, 6];
var $e = class extends L {
    constructor(a) {
        super(a)
    }
};
$e.A = [15, 26, 28];
var af = class extends L {
    constructor(a) {
        super(a)
    }
};
af.A = [5];
var bf = class extends L {
    constructor(a) {
        super(a)
    }
};
var cf = class extends L {
    constructor(a) {
        super(a)
    }
    setSafetyMode(a) {
        return K(this, 5, a)
    }
};
cf.A = [12];
var df = class extends L {
    constructor(a) {
        super(a)
    }
    j(a) {
        return I(this, Xe, 1, a)
    }
};
df.A = [12];
var ef = class extends L {
    constructor(a) {
        super(a)
    }
    getKey() {
        return Wd(this, 1)
    }
};
var ff = class extends L {
    constructor(a) {
        super(a)
    }
};
ff.A = [4, 5];
var gf = class extends L {
    constructor(a) {
        super(a)
    }
};
var hf = class extends L {
        constructor(a) {
            super(a)
        }
    },
    jf = [2, 3, 4, 5];
var kf = class extends L {
    constructor(a) {
        super(a)
    }
};
var lf = class extends L {
    constructor(a) {
        super(a)
    }
};
var mf = class extends L {
    constructor(a) {
        super(a)
    }
};
var nf = class extends L {
    constructor(a) {
        super(a)
    }
};
nf.A = [10, 17];
var of = class extends L {
    constructor(a) {
        super(a)
    }
};
var H = class extends L {
    constructor(a) {
        super(a)
    }
    setTrackingParams(a) {
        if (a != null)
            if (typeof a === "string") a = a ? new ac(a, Xb) : $b();
            else if (a.constructor !== ac)
            if (Wb(a)) a = a.length ? new ac(new Uint8Array(a), Xb) : $b();
            else throw Error();
        return Gd(this, 1, a)
    }
};
var pf = class extends L {
    constructor(a) {
        super(a)
    }
};
var qf = class extends L {
    constructor(a) {
        super(a)
    }
};
var rf = class extends L {
    constructor(a) {
        super(a)
    }
    getVideoData() {
        return Pd(this, qf, 15)
    }
};
rf.A = [4];

function sf(a, b) {
    I(a, H, 1, b)
}
var tf = class extends L {
    constructor(a) {
        super(a)
    }
};

function uf(a, b) {
    return I(a, H, 1, b)
}
var vf = class extends L {
    constructor(a) {
        super(a)
    }
    h(a) {
        return J(this, 2, a)
    }
};

function wf(a, b) {
    return I(a, H, 2, b)
}
var xf = class extends L {
    constructor(a) {
        super(a)
    }
    h(a) {
        return J(this, 1, a)
    }
};
xf.A = [3];
var yf = class extends L {
    constructor(a) {
        super(a)
    }
    h(a) {
        return J(this, 1, a)
    }
    hasVe() {
        return Hd(this)
    }
};
var zf = class extends L {
    constructor(a) {
        super(a)
    }
    h(a) {
        return J(this, 1, a)
    }
    hasVe() {
        return Hd(this)
    }
};
var Af = class extends L {
    constructor(a) {
        super(a)
    }
    h(a) {
        return J(this, 1, a)
    }
    hasVe() {
        return Hd(this)
    }
};
var Bf = class extends L {
    constructor(a) {
        super(a)
    }
    h(a) {
        return J(this, 1, a)
    }
    hasVe() {
        return Hd(this)
    }
};
var Cf = class extends L {
    constructor(a) {
        super(a)
    }
};
var Df = class extends L {
    constructor(a) {
        super(a)
    }
};
var O = class extends L {
        constructor(a) {
            super(a, 497)
        }
    },
    Ef = [2, 3, 5, 6, 7, 11, 13, 20, 21, 22, 23, 24, 28, 32, 37, 45, 59, 72, 73, 74, 76, 78, 79, 80, 85, 91, 97, 100, 102, 105, 111, 117, 119, 126, 127, 136, 146, 148, 151, 156, 157, 158, 159, 163, 164, 168, 176, 177, 178, 179, 184, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 208, 209, 215, 219, 222, 225, 226, 227, 229, 232, 233, 234, 240, 241, 244, 247, 248, 249, 251, 254, 255, 256, 257, 258, 259, 260, 261, 266, 270, 272, 278, 288, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314, 319, 320, 321, 323, 324, 327, 328, 330, 331,
        332, 334, 337, 338, 340, 344, 348, 350, 351, 352, 353, 354, 355, 356, 357, 358, 361, 363, 364, 368, 369, 370, 373, 374, 375, 378, 380, 381, 383, 388, 389, 399, 402, 403, 410, 411, 412, 413, 414, 415, 416, 417, 418, 423, 424, 425, 426, 427, 429, 430, 431, 439, 441, 444, 448, 458, 469, 471, 473, 474, 480, 481, 482, 484, 485, 486, 491, 495, 496
    ];
var Ff = {
    ub: 0,
    ab: 1,
    hb: 2,
    ib: 4,
    ob: 8,
    jb: 16,
    kb: 32,
    tb: 64,
    sb: 128,
    cb: 256,
    fb: 512,
    mb: 1024,
    eb: 2048,
    gb: 4096,
    bb: 8192,
    lb: 16384,
    pb: 32768,
    nb: 65536,
    qb: 131072,
    rb: 262144
};
var Gf = class extends L {
    constructor(a) {
        super(a)
    }
};
var Hf = class extends L {
        constructor(a) {
            super(a)
        }
        setVideoId(a) {
            return Ld(this, 1, Yd, fd(a))
        }
        getPlaylistId() {
            return Xd(this, 2)
        }
    },
    Yd = [1, 2];
var If = class extends L {
    constructor() {
        super()
    }
};
If.A = [3];
var Jf = new Oe("recordNotificationInteractionsEndpoint");
var Kf = ["notification/convert_endpoint_to_url"],
    Lf = ["notification/record_interactions"],
    Mf = ["notification_registration/set_registration"];
var Nf = a => self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var Of = ["notifications_register", "notifications_check_registration"];
var Pf = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b]
    }
};
let Qf = null;

function Q(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return Rf().then(d => new Promise((e, f) => {
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = () => {
                e()
            };
            g.onerror = () => {
                f()
            }
        } catch (g) {
            f(g)
        }
    }))
}

function Sf() {
    return Q("IndexedDBCheck", "testing IndexedDB").then(() => Tf("IndexedDBCheck")).then(a => a === "testing IndexedDB" ? Promise.resolve() : Promise.reject()).then(() => !0).catch(() => !1)
}

function Tf(a) {
    const b = new Pf("Error accessing DB");
    return Rf().then(c => new Promise((d, e) => {
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = () => {
                const g = f.result;
                d(g ? g.value : null)
            };
            f.onerror = () => {
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            }, e(b)
        }
    }), () => null)
}

function Rf() {
    return Qf ? Promise.resolve(Qf) : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore")) Qf = d, a(Qf);
            else return self.indexedDB.deleteDatabase("swpushnotificationsdb"), Rf()
        };
        c.onupgradeneeded = Uf
    })
}

function Uf(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
};
const Vf = {
    WEB_UNPLUGGED: "^unplugged/",
    WEB_UNPLUGGED_ONBOARDING: "^unplugged/",
    WEB_UNPLUGGED_OPS: "^unplugged/",
    WEB_UNPLUGGED_PUBLIC: "^unplugged/",
    WEB_CREATOR: "^creator/",
    WEB_KIDS: "^kids/",
    WEB_EXPERIMENTS: "^experiments/",
    WEB_MUSIC: "^music/",
    WEB_REMIX: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^main_app/|^sfv/"
};

function Wf(a) {
    if (a.length === 1) return a[0];
    var b = Vf.UNKNOWN_INTERFACE;
    if (b) {
        b = new RegExp(b);
        for (var c of a)
            if (b.exec(c)) return c
    }
    const d = [];
    Object.entries(Vf).forEach(([e, f]) => {
        "UNKNOWN_INTERFACE" !== e && d.push(f)
    });
    c = new RegExp(d.join("|"));
    a.sort((e, f) => e.length - f.length);
    for (const e of a)
        if (!c.exec(e)) return e;
    return a[0]
}

function Xf(a) {
    return `/youtubei/v1/${Wf(a)}`
};
var Yf = class extends L {
    constructor(a) {
        super(a)
    }
};
var Zf = class extends L {
    constructor(a) {
        super(a, 0, "yt.sw.adr")
    }
};
const $f = t.window;
let ag, bg;
const cg = ($f == null ? void 0 : (ag = $f.yt) == null ? void 0 : ag.config_) || ($f == null ? void 0 : (bg = $f.ytcfg) == null ? void 0 : bg.data_) || {};
w("yt.config_", cg);

function R(...a) {
    a = arguments;
    a.length > 1 ? cg[a[0]] = a[1] : a.length === 1 && Object.assign(cg, a[0])
}

function S(a, b) {
    return a in cg ? cg[a] : b
}

function dg() {
    return S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")
}

function eg() {
    const a = cg.EXPERIMENT_FLAGS;
    return a ? a.web_disable_gel_stp_ecatcher_killswitch : void 0
};
const fg = [];

function gg(a) {
    fg.forEach(b => b(a))
}

function hg(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            ig(b)
        }
    } : a
}

function ig(a) {
    var b = v("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0, void 0, void 0) : (b = S("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0, void 0, void 0]), R("ERRORS", b));
    gg(a)
}

function jg(a) {
    var b = v("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0, void 0, void 0) : (b = S("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0, void 0, void 0]), R("ERRORS", b))
};
const kg = /^[\w.]*$/,
    lg = {
        q: !0,
        search_query: !0
    };

function mg(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const k = b[f].split("=");
        if (k.length === 1 && k[0] || k.length === 2) try {
            const h = ng(k[0] || ""),
                l = ng(k[1] || "");
            if (h in c) {
                const n = c[h];
                Array.isArray(n) ? Aa(n, l) : c[h] = [n, l]
            } else c[h] = l
        } catch (h) {
            var d = h,
                e = k[0];
            const l = String(mg);
            d.args = [{
                key: e,
                value: k[1],
                query: a,
                method: og === l ? "unchanged" : l
            }];
            lg.hasOwnProperty(e) || jg(d)
        }
    }
    return c
}
const og = String(mg);

function pg(a) {
    a.charAt(0) === "?" && (a = a.substring(1));
    return mg(a, "&")
}

function qg(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = d.length > 1 ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = pg(e[1] || "");
    for (var f in b) !c && e !== null && f in e || (e[f] = b[f]);
    b = a;
    a = Oa(e);
    a ? (c = b.indexOf("#"), c < 0 && (c = b.length), f = b.indexOf("?"), f < 0 || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.slice(0, f), e, b.slice(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
    return a + d
}

function rg(a) {
    if (!b) var b = window.location.href;
    const c = a.match(La)[1] || null,
        d = Ma(a.match(La)[3] || null);
    c && d ? (a = a.match(La), b = b.match(La), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? Ma(b.match(La)[3] || null) === d && (Number(b.match(La)[4] || null) || null) === (Number(a.match(La)[4] || null) || null) : !0;
    return a
}

function ng(a) {
    return a && a.match(kg) ? a : decodeURIComponent(a.replace(/\+/g, " "))
};

function sg(a, b) {
    typeof a === "function" && (a = hg(a));
    return window.setTimeout(a, b)
};
var tg = "client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),
    ug = [...tg, "client_dev_set_cookie"];

function T(a) {
    a = vg(a);
    return typeof a === "string" && a === "false" ? !1 : !!a
}

function wg(a, b) {
    a = vg(a);
    return a === void 0 && b !== void 0 ? b : Number(a || 0)
}

function xg() {
    return S("EXPERIMENTS_TOKEN", "")
}

function vg(a) {
    return S("EXPERIMENT_FLAGS", {})[a]
}

function yg() {
    const a = [],
        b = S("EXPERIMENTS_FORCED_FLAGS", {});
    for (var c of Object.keys(b)) a.push({
        key: c,
        value: String(b[c])
    });
    c = S("EXPERIMENT_FLAGS", {});
    for (const d of Object.keys(c)) d.startsWith("force_") && b[d] === void 0 && a.push({
        key: d,
        value: String(c[d])
    });
    return a
};
[...tg];
let zg = !1;

function Ag(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    a = Bg(a, b);
    const d = Cg(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    const e = b.context || t;
    let f = !1,
        g;
    fetch(a, c).then(k => {
        if (!f) {
            f = !0;
            g && window.clearTimeout(g);
            var h = k.ok,
                l = n => {
                    n = n || {};
                    h ? b.onSuccess && b.onSuccess.call(e, n, k) : b.onError && b.onError.call(e, n, k);
                    b.onFinish && b.onFinish.call(e, n, k)
                };
            (b.format || "JSON") === "JSON" && (h || k.status >= 400 && k.status < 500) ? k.json().then(l, () => {
                l(null)
            }): l(null)
        }
    }).catch(() => {
        b.onError && b.onError.call(e, {}, {})
    });
    a = b.timeout || 0;
    b.onFetchTimeout && a > 0 && (g = sg(() => {
        f || (f = !0, window.clearTimeout(g), b.onFetchTimeout.call(b.context || t))
    }, a))
}

function Bg(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = S("XSRF_FIELD_NAME");
    if (b = b.urlParams) b[c] && delete b[c], a = qg(a, b || {}, !0);
    return a
}

function Cg(a, b) {
    const c = S("XSRF_FIELD_NAME"),
        d = S("XSRF_TOKEN");
    var e = b.postBody || "",
        f = b.postParams;
    const g = S("XSRF_FIELD_NAME");
    let k;
    b.headers && (k = b.headers["Content-Type"]);
    b.excludeXsrf || Ma(a.match(La)[3] || null) && !b.withCredentials && Ma(a.match(La)[3] || null) !== document.location.hostname || b.method !== "POST" || k && k !== "application/x-www-form-urlencoded" || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
    (T("ajax_parse_query_data_only_when_filled") && f && Object.keys(f).length > 0 || f) && typeof e === "string" &&
        (e = pg(e), Ea(e, f), e = b.postBodyFormat && b.postBodyFormat === "JSON" ? JSON.stringify(e) : Oa(e));
    f = e || f && !Ba(f);
    !zg && f && b.method !== "POST" && (zg = !0, ig(Error("AJAX request with postData should use POST")));
    return e
};
const Dg = [{
    ea: a => `Cannot read property '${a.key}'`,
    X: {
        Error: [{
            u: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }],
        TypeError: [{
            u: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            u: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            u: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            u: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            u: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }, {
            u: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
            groups: ["value", "base", "key"]
        }]
    }
}, {
    ea: a => `Cannot call '${a.key}'`,
    X: {
        TypeError: [{
            u: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
            groups: ["base", "key"]
        }, {
            u: /([^ ]+) called on (null or undefined)/,
            groups: ["key", "value"]
        }, {
            u: /Object (.*) has no method '([^ ]+)'/,
            groups: ["base", "key"]
        }, {
            u: /Object doesn't support property or method '([^ ]+)'/,
            groups: ["key"]
        }, {
            u: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
            groups: ["key"]
        }, {
            u: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
            groups: ["key"]
        }]
    }
}, {
    ea: a => `${a.key} is not defined`,
    X: {
        ReferenceError: [{
            u: /(.*) is not defined/,
            groups: ["key"]
        }, {
            u: /Can't find variable: (.*)/,
            groups: ["key"]
        }]
    }
}];
var Fg = {
    H: [],
    G: [{
        callback: Eg,
        weight: 500
    }]
};

function Eg(a) {
    if (a.name === "JavaException") return !0;
    a = a.stack;
    return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
};

function Gg() {
    if (!Hg) {
        var a = Hg = new Ig;
        a.H.length = 0;
        a.G.length = 0;
        Jg(a, Fg)
    }
    return Hg
}

function Jg(a, b) {
    b.H && a.H.push.apply(a.H, b.H);
    b.G && a.G.push.apply(a.G, b.G)
}
var Ig = class {
        constructor() {
            this.G = [];
            this.H = []
        }
    },
    Hg;
const Kg = new M;

function Lg(a) {
    const b = a.length;
    let c = 0;
    const d = () => a.charCodeAt(c++);
    do {
        var e = Mg(d);
        if (e === Infinity) break;
        const f = e >> 3;
        switch (e & 7) {
            case 0:
                e = Mg(d);
                if (f === 2) return e;
                break;
            case 1:
                if (f === 2) return;
                c += 8;
                break;
            case 2:
                e = Mg(d);
                if (f === 2) return a.substr(c, e);
                c += e;
                break;
            case 5:
                if (f === 2) return;
                c += 4;
                break;
            default:
                return
        }
    } while (c < b)
}

function Mg(a) {
    let b = a(),
        c = b & 127;
    if (b < 128) return c;
    b = a();
    c |= (b & 127) << 7;
    if (b < 128) return c;
    b = a();
    c |= (b & 127) << 14;
    if (b < 128) return c;
    b = a();
    return b < 128 ? c | (b & 127) << 21 : Infinity
};

function Ng(a, b, c, d) {
    if (a)
        if (Array.isArray(a)) {
            var e = d;
            for (d = 0; d < a.length && !(a[d] && (e += Og(d, a[d], b, c), e > 500)); d++);
            d = e
        } else if (typeof a === "object")
        for (e in a) {
            if (a[e]) {
                var f = e;
                var g = a[e],
                    k = b,
                    h = c;
                f = typeof g !== "string" || f !== "clickTrackingParams" && f !== "trackingParams" ? 0 : (g = Lg(atob(g.replace(/-/g, "+").replace(/_/g, "/")))) ? Og(`${f}.ve`, g, k, h) : 0;
                d += f;
                d += Og(e, a[e], b, c);
                if (d > 500) break
            }
        } else c[b] = Pg(a), d += c[b].length;
    else c[b] = Pg(a), d += c[b].length;
    return d
}

function Og(a, b, c, d) {
    c += `.${a}`;
    a = Pg(b);
    d[c] = a;
    return c.length + a.length
}

function Pg(a) {
    try {
        return (typeof a === "string" ? a : String(JSON.stringify(a))).substr(0, 500)
    } catch (b) {
        return `unable to serialize ${typeof a} (${b.message})`
    }
};

function Qg() {
    Rg.h || (Rg.h = new Rg);
    return Rg.h
}

function Sg(a, b) {
    a = {};
    var c = [];
    "SESSION_ID" in cg && c.push({
        key: "u",
        value: S("SESSION_ID")
    });
    var d = xe(String(t.location.href));
    var e = [];
    var f = t.__SAPISID || t.__APISID || t.__3PSAPISID || t.__OVERRIDE_SID;
    Ee() && (f = f || t.__1PSAPISID);
    if (f) f = !0;
    else {
        if (typeof document !== "undefined") {
            const g = new De;
            f = g.get("SAPISID") || g.get("APISID") || g.get("__Secure-3PAPISID");
            Ee() && (f = f || g.get("__Secure-1PAPISID"))
        }
        f = !!f
    }
    f && (f = (d = d.indexOf("https:") == 0 || d.indexOf("chrome-extension:") == 0 || d.indexOf("chrome-untrusted://new-tab-page") ==
        0 || d.indexOf("moz-extension:") == 0) ? t.__SAPISID : t.__APISID, f || typeof document === "undefined" || (f = new De, f = f.get(d ? "SAPISID" : "APISID") || f.get("__Secure-3PAPISID")), (f = f ? ze(f, d ? "SAPISIDHASH" : "APISIDHASH", c) : null) && e.push(f), d && Ee() && ((d = Fe("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", c)) && e.push(d), (c = Fe("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", c)) && e.push(c)));
    if (e = e.length == 0 ? null : e.join(" ")) a.Authorization = e, e = b = b == null ? void 0 : b.sessionIndex, e === void 0 && (e = Number(S("SESSION_INDEX", 0)),
        e = isNaN(e) ? 0 : e), T("voice_search_auth_header_removal") || (a["X-Goog-AuthUser"] = e.toString()), "INNERTUBE_HOST_OVERRIDE" in cg || (a["X-Origin"] = window.location.origin), b === void 0 && "DELEGATED_SESSION_ID" in cg && (a["X-Goog-PageId"] = S("DELEGATED_SESSION_ID"));
    return a
}
var Rg = class {
    constructor() {
        this.Na = !0
    }
};
var Tg = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
};

function Ug(a) {
    switch (a) {
        case "DESKTOP":
            return 1;
        case "UNKNOWN_PLATFORM":
            return 0;
        case "TV":
            return 2;
        case "GAME_CONSOLE":
            return 3;
        case "MOBILE":
            return 4;
        case "TABLET":
            return 5
    }
};
w("ytglobal.prefsUserPrefsPrefs_", v("ytglobal.prefsUserPrefsPrefs_") || {});

function Vg() {
    if (S("DATASYNC_ID") !== void 0) return S("DATASYNC_ID");
    throw new Pf("Datasync ID not set", "unknown");
};

function Wg(a, b) {
    return Xg(a, 0, b)
}

function Yg(a) {
    const b = v("yt.scheduler.instance.addImmediateJob");
    b ? b(a) : a()
}
var Zg = class {
    h(a) {
        Xg(a, 1)
    }
};

function $g() {
    ah.h || (ah.h = new ah);
    return ah.h
}

function Xg(a, b, c) {
    c !== void 0 && Number.isNaN(Number(c)) && (c = void 0);
    const d = v("yt.scheduler.instance.addJob");
    return d ? d(a, b, c) : c === void 0 ? (a(), NaN) : sg(a, c || 0)
}
var ah = class extends Zg {
        T(a) {
            if (a === void 0 || !Number.isNaN(Number(a))) {
                var b = v("yt.scheduler.instance.cancelJob");
                b ? b(a) : window.clearTimeout(a)
            }
        }
        start() {
            const a = v("yt.scheduler.instance.start");
            a && a()
        }
    },
    bh = $g();
const ch = [];
let dh, eh = !1;

function fh(a) {
    eh || (dh ? dh.handleError(a) : (ch.push({
        type: "ERROR",
        payload: a
    }), ch.length > 10 && ch.shift()))
}

function gh(a, b) {
    eh || (dh ? dh.U(a, b) : (ch.push({
        type: "EVENT",
        eventType: a,
        payload: b
    }), ch.length > 10 && ch.shift()))
};

function hh(a) {
    if (a.indexOf(":") >= 0) throw Error("Database name cannot contain ':'");
}

function ih(a) {
    return a.substr(0, a.indexOf(":")) || a
};
const jh = {
        AUTH_INVALID: "No user identifier specified.",
        EXPLICIT_ABORT: "Transaction was explicitly aborted.",
        IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
        MISSING_INDEX: "Index not created.",
        MISSING_OBJECT_STORES: "Object stores not created.",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "Database is deleted because expected object stores were not created.",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "Database is reopened because expected object stores were not created.",
        UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
        QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
        QUOTA_MAYBE_EXCEEDED: "The current transaction may have failed because of exceeding quota limitations.",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "Can't start a transaction on a closed database",
        INCOMPATIBLE_DB_VERSION: "The binary is incompatible with the database version"
    },
    kh = {
        AUTH_INVALID: "ERROR",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
        EXPLICIT_ABORT: "IGNORED",
        IDB_NOT_SUPPORTED: "ERROR",
        MISSING_INDEX: "WARNING",
        MISSING_OBJECT_STORES: "ERROR",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
        QUOTA_EXCEEDED: "WARNING",
        QUOTA_MAYBE_EXCEEDED: "WARNING",
        UNKNOWN_ABORT: "WARNING",
        INCOMPATIBLE_DB_VERSION: "WARNING"
    },
    lh = {
        AUTH_INVALID: !1,
        EXECUTE_TRANSACTION_ON_CLOSED_DB: !1,
        EXPLICIT_ABORT: !1,
        IDB_NOT_SUPPORTED: !1,
        MISSING_INDEX: !1,
        MISSING_OBJECT_STORES: !1,
        DB_DELETED_BY_MISSING_OBJECT_STORES: !1,
        DB_REOPENED_BY_MISSING_OBJECT_STORES: !1,
        QUOTA_EXCEEDED: !1,
        QUOTA_MAYBE_EXCEEDED: !0,
        UNKNOWN_ABORT: !0,
        INCOMPATIBLE_DB_VERSION: !1
    };
var U = class extends Pf {
        constructor(a, b = {}, c = jh[a], d = kh[a], e = lh[a]) {
            super(c, Object.assign({}, {
                name: "YtIdbKnownError",
                isSw: self.document === void 0,
                isIframe: self !== self.top,
                type: a
            }, b));
            this.type = a;
            this.message = c;
            this.level = d;
            this.h = e;
            Object.setPrototypeOf(this, U.prototype)
        }
    },
    mh = class extends U {
        constructor(a, b) {
            super("MISSING_OBJECT_STORES", {
                expectedObjectStores: b,
                foundObjectStores: a
            }, jh.MISSING_OBJECT_STORES);
            Object.setPrototypeOf(this, mh.prototype)
        }
    },
    nh = class extends Error {
        constructor(a, b) {
            super();
            this.index =
                a;
            this.objectStore = b;
            Object.setPrototypeOf(this, nh.prototype)
        }
    };
const oh = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

function ph(a, b, c, d) {
    b = ih(b);
    let e;
    e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
    if (e instanceof U) return e;
    a = {
        objectStoreNames: c,
        dbName: b,
        dbVersion: d
    };
    if (e.name === "QuotaExceededError") return new U("QUOTA_EXCEEDED", a);
    if (Ib && e.name === "UnknownError") return new U("QUOTA_MAYBE_EXCEEDED", a);
    if (e instanceof nh) return new U("MISSING_INDEX", Object.assign({}, a, {
        objectStore: e.objectStore,
        index: e.index
    }));
    if (e.name === "InvalidStateError" && oh.some(f => e.message.includes(f))) return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
        a);
    if (e.name === "AbortError") return new U("UNKNOWN_ABORT", a, e.message);
    e.args = [Object.assign({}, a, {
        name: "IdbError",
        Ub: e.name
    })];
    e.level = "WARNING";
    return e
}

function qh(a, b, c) {
    return new U("IDB_NOT_SUPPORTED", {
        context: {
            caller: a,
            publicName: b,
            version: c,
            hasSucceededOnce: void 0
        }
    })
};

function rh(a) {
    if (!a) throw Error();
    throw a;
}

function sh(a) {
    return a
}
var th = class {
    constructor(a) {
        this.h = a
    }
};

function uh(a, b, c, d, e) {
    try {
        if (a.state.status !== "FULFILLED") throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof vh ? wh(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function xh(a, b, c, d, e) {
    try {
        if (a.state.status !== "REJECTED") throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof vh ? wh(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function wh(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f => {
        f instanceof vh ? wh(a, b, f, d, e) : d(f)
    }, f => {
        e(f)
    })
}
var vh = class {
    constructor(a) {
        this.state = {
            status: "PENDING"
        };
        this.h = [];
        this.i = [];
        a = a.h;
        const b = d => {
                if (this.state.status === "PENDING") {
                    this.state = {
                        status: "FULFILLED",
                        value: d
                    };
                    for (const e of this.h) e()
                }
            },
            c = d => {
                if (this.state.status === "PENDING") {
                    this.state = {
                        status: "REJECTED",
                        reason: d
                    };
                    for (const e of this.i) e()
                }
            };
        try {
            a(b, c)
        } catch (d) {
            c(d)
        }
    }
    static all(a) {
        return new vh(new th((b, c) => {
            const d = [];
            let e = a.length;
            e === 0 && b(d);
            for (let f = 0; f < a.length; ++f) vh.resolve(a[f]).then(g => {
                d[f] = g;
                e--;
                e === 0 && b(d)
            }).catch(g => {
                c(g)
            })
        }))
    }
    static resolve(a) {
        return new vh(new th((b, c) => {
            a instanceof vh ? a.then(b, c) : b(a)
        }))
    }
    static reject(a) {
        return new vh(new th((b, c) => {
            c(a)
        }))
    }
    then(a, b) {
        const c = a != null ? a : sh,
            d = b != null ? b : rh;
        return new vh(new th((e, f) => {
            this.state.status === "PENDING" ? (this.h.push(() => {
                uh(this, this, c, e, f)
            }), this.i.push(() => {
                xh(this, this, d, e, f)
            })) : this.state.status === "FULFILLED" ? uh(this, this, c, e, f) : this.state.status === "REJECTED" && xh(this, this, d, e, f)
        }))
    } catch (a) {
        return this.then(void 0, a)
    }
};

function yh(a, b, c) {
    const d = () => {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", f)
            } catch (g) {}
        },
        e = () => {
            b(a.result);
            d()
        },
        f = () => {
            c(a.error);
            d()
        };
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}

function zh(a) {
    return new Promise((b, c) => {
        yh(a, b, c)
    })
}

function V(a) {
    return new vh(new th((b, c) => {
        yh(a, b, c)
    }))
};

function Ah(a, b) {
    return new vh(new th((c, d) => {
        const e = () => {
            const f = a ? b(a) : null;
            f ? f.then(g => {
                a = g;
                e()
            }, d) : c()
        };
        e()
    }))
};
const Bh = window;
var W = Bh.ytcsi && Bh.ytcsi.now ? Bh.ytcsi.now : Bh.performance && Bh.performance.timing && Bh.performance.now && Bh.performance.timing.navigationStart ? () => Bh.performance.timing.navigationStart + Bh.performance.now() : () => (new Date).getTime();

function X(a, b, c, d) {
    return r(function*() {
        const e = {
            mode: "readonly",
            C: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN"
        };
        typeof c === "string" ? e.mode = c : Object.assign(e, c);
        a.transactionCount++;
        const f = e.C ? 3 : 1;
        let g = 0,
            k;
        for (; !k;) {
            g++;
            const n = Math.round(W());
            try {
                var h = a.h.transaction(b, e.mode),
                    l = d;
                const m = new Ch(h),
                    q = yield Dh(m, l), p = Math.round(W());
                Eh(a, n, p, g, void 0, b.join(), e);
                return q
            } catch (m) {
                l = Math.round(W());
                const q = ph(m, a.h.name, b.join(), a.h.version);
                if (q instanceof U && !q.h || g >= f) Eh(a, n, l, g, q, b.join(), e), k = q
            }
        }
        return Promise.reject(k)
    })
}

function Fh(a, b, c) {
    a = a.h.createObjectStore(b, c);
    return new Gh(a)
}

function Hh(a, b, c, d) {
    return X(a, [b], {
        mode: "readwrite",
        C: !0
    }, e => {
        e = e.objectStore(b);
        return V(e.h.put(c, d))
    })
}

function Eh(a, b, c, d, e, f, g) {
    b = c - b;
    e ? (e instanceof U && (e.type === "QUOTA_EXCEEDED" || e.type === "QUOTA_MAYBE_EXCEEDED") && gh("QUOTA_EXCEEDED", {
        dbName: ih(a.h.name),
        objectStoreNames: f,
        transactionCount: a.transactionCount,
        transactionMode: g.mode
    }), e instanceof U && e.type === "UNKNOWN_ABORT" && (c -= a.j, c < 0 && c >= Math.pow(2, 31) && (c = 0), gh("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: f,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c
    }), a.i = !0), Ih(a, !1, d, f, b, g.tag), fh(e)) : Ih(a, !0, d, f, b, g.tag)
}

function Ih(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
    gh("TRANSACTION_ENDED", {
        objectStoreNames: d,
        connectionHasUnknownAbortedTransaction: a.i,
        duration: e,
        isSuccessful: b,
        tryCount: c,
        tag: f
    })
}
var Jh = class {
    constructor(a, b) {
        this.h = a;
        this.options = b;
        this.transactionCount = 0;
        this.j = Math.round(W());
        this.i = !1
    }
    add(a, b, c) {
        return X(this, [a], {
            mode: "readwrite",
            C: !0
        }, d => d.objectStore(a).add(b, c))
    }
    clear(a) {
        return X(this, [a], {
            mode: "readwrite",
            C: !0
        }, b => b.objectStore(a).clear())
    }
    close() {
        this.h.close();
        let a;
        ((a = this.options) == null ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return X(this, [a], {
            mode: "readonly",
            C: !0
        }, c => c.objectStore(a).count(b))
    }
    delete(a, b) {
        return X(this, [a], {
            mode: "readwrite",
            C: !0
        }, c => c.objectStore(a).delete(b))
    }
    get(a, b) {
        return X(this, [a], {
            mode: "readonly",
            C: !0
        }, c => c.objectStore(a).get(b))
    }
    getAll(a, b, c) {
        return X(this, [a], {
            mode: "readonly",
            C: !0
        }, d => d.objectStore(a).getAll(b, c))
    }
    objectStoreNames() {
        return Array.from(this.h.objectStoreNames)
    }
    getName() {
        return this.h.name
    }
};

function Kh(a, b, c) {
    a = a.h.openCursor(b.query, b.direction);
    return Lh(a).then(d => Ah(d, c))
}

function Mh(a, b) {
    return Kh(a, {
        query: b
    }, c => c.delete().then(() => Nh(c))).then(() => {})
}

function Oh(a, b, c) {
    const d = [];
    return Kh(a, {
        query: b
    }, e => {
        if (!(c !== void 0 && d.length >= c)) return d.push(e.cursor.value), Nh(e)
    }).then(() => d)
}
var Gh = class {
    constructor(a) {
        this.h = a
    }
    add(a, b) {
        return V(this.h.add(a, b))
    }
    autoIncrement() {
        return this.h.autoIncrement
    }
    clear() {
        return V(this.h.clear()).then(() => {})
    }
    count(a) {
        return V(this.h.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? Mh(this, a) : V(this.h.delete(a))
    }
    get(a) {
        return V(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBObjectStore.prototype ? V(this.h.getAll(a, b)) : Oh(this, a, b)
    }
    index(a) {
        try {
            return new Ph(this.h.index(a))
        } catch (b) {
            if (b instanceof Error && b.name === "NotFoundError") throw new nh(a,
                this.h.name);
            throw b;
        }
    }
    getName() {
        return this.h.name
    }
    keyPath() {
        return this.h.keyPath
    }
};

function Dh(a, b) {
    const c = new Promise((d, e) => {
        try {
            b(a).then(f => {
                d(f)
            }).catch(e)
        } catch (f) {
            e(f), a.abort()
        }
    });
    return Promise.all([c, a.done]).then(([d]) => d)
}
var Ch = class {
    constructor(a) {
        this.h = a;
        this.j = new Map;
        this.i = !1;
        this.done = new Promise((b, c) => {
            this.h.addEventListener("complete", () => {
                b()
            });
            this.h.addEventListener("error", d => {
                d.currentTarget === d.target && c(this.h.error)
            });
            this.h.addEventListener("abort", () => {
                var d = this.h.error;
                if (d) c(d);
                else if (!this.i) {
                    d = U;
                    var e = this.h.objectStoreNames;
                    const f = [];
                    for (let g = 0; g < e.length; g++) {
                        const k = e.item(g);
                        if (k === null) throw Error("Invariant: item in DOMStringList is null");
                        f.push(k)
                    }
                    d = new d("UNKNOWN_ABORT", {
                        objectStoreNames: f.join(),
                        dbName: this.h.db.name,
                        mode: this.h.mode
                    });
                    c(d)
                }
            })
        })
    }
    abort() {
        this.h.abort();
        this.i = !0;
        throw new U("EXPLICIT_ABORT");
    }
    objectStore(a) {
        a = this.h.objectStore(a);
        let b = this.j.get(a);
        b || (b = new Gh(a), this.j.set(a, b));
        return b
    }
};

function Qh(a, b, c) {
    const {
        query: d = null,
        direction: e = "next"
    } = b;
    a = a.h.openCursor(d, e);
    return Lh(a).then(f => Ah(f, c))
}

function Rh(a, b, c) {
    const d = [];
    return Qh(a, {
        query: b
    }, e => {
        if (!(c !== void 0 && d.length >= c)) return d.push(e.cursor.value), Nh(e)
    }).then(() => d)
}
var Ph = class {
    constructor(a) {
        this.h = a
    }
    count(a) {
        return V(this.h.count(a))
    }
    delete(a) {
        return Qh(this, {
            query: a
        }, b => b.delete().then(() => Nh(b)))
    }
    get(a) {
        return V(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBIndex.prototype ? V(this.h.getAll(a, b)) : Rh(this, a, b)
    }
    getKey(a) {
        return V(this.h.getKey(a))
    }
    keyPath() {
        return this.h.keyPath
    }
    unique() {
        return this.h.unique
    }
};

function Lh(a) {
    return V(a).then(b => b ? new Sh(a, b) : null)
}

function Nh(a) {
    a.cursor.continue(void 0);
    return Lh(a.request)
}

function Th(a) {
    a.cursor.advance(5);
    return Lh(a.request)
}
var Sh = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    delete() {
        return V(this.cursor.delete()).then(() => {})
    }
    getKey() {
        return this.cursor.key
    }
    update(a) {
        return V(this.cursor.update(a))
    }
};

function Uh(a, b, c) {
    return new Promise((d, e) => {
        let f;
        f = b !== void 0 ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
        const g = c.za,
            k = c.blocking,
            h = c.Oa,
            l = c.upgrade,
            n = c.closed;
        let m;
        const q = () => {
            m || (m = new Jh(f.result, {
                closed: n
            }));
            return m
        };
        f.addEventListener("upgradeneeded", p => {
            try {
                if (p.newVersion === null) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                if (f.transaction === null) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                p.dataLoss && p.dataLoss !== "none" && gh("IDB_DATA_CORRUPTED", {
                    reason: p.dataLossMessage || "unknown reason",
                    dbName: ih(a)
                });
                const u = q(),
                    y = new Ch(f.transaction);
                l && l(u, D => p.oldVersion < D && p.newVersion >= D, y);
                y.done.catch(D => {
                    e(D)
                })
            } catch (u) {
                e(u)
            }
        });
        f.addEventListener("success", () => {
            const p = f.result;
            k && p.addEventListener("versionchange", () => {
                k(q())
            });
            p.addEventListener("close", () => {
                gh("IDB_UNEXPECTEDLY_CLOSED", {
                    dbName: ih(a),
                    dbVersion: p.version
                });
                h && h()
            });
            d(q())
        });
        f.addEventListener("error", () => {
            e(f.error)
        });
        g && f.addEventListener("blocked", () => {
            g()
        })
    })
}

function Vh(a, b, c = {}) {
    return Uh(a, b, c)
}

function Wh(a, b = {}) {
    return r(function*() {
        try {
            const c = self.indexedDB.deleteDatabase(a),
                d = b.za;
            d && c.addEventListener("blocked", () => {
                d()
            });
            yield zh(c)
        } catch (c) {
            throw ph(c, a, "", -1);
        }
    })
};

function Xh(a, b) {
    return new U("INCOMPATIBLE_DB_VERSION", {
        dbName: a.name,
        oldVersion: a.options.version,
        newVersion: b
    })
}

function Yh(a, b) {
    if (!b) throw qh("openWithToken", ih(a.name));
    return a.open()
}
var Zh = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.j = !0;
        this.m = this.l = 0
    }
    i(a, b, c = {}) {
        return Vh(a, b, c)
    }
    delete(a = {}) {
        return Wh(this.name, a)
    }
    open() {
        if (!this.j) throw Xh(this);
        if (this.h) return this.h;
        let a;
        const b = () => {
                this.h === a && (this.h = void 0)
            },
            c = {
                blocking: e => {
                    e.close()
                },
                closed: b,
                Oa: b,
                upgrade: this.options.upgrade
            },
            d = () => {
                const e = this;
                return r(function*() {
                    var f, g = (f = Error().stack) != null ? f : "";
                    try {
                        const h = yield e.i(e.name, e.options.version, c);
                        f = h;
                        var k = e.options;
                        const l = [];
                        for (const n of Object.keys(k.O)) {
                            const {
                                N: m,
                                Zb: q = Number.MAX_VALUE
                            } = k.O[n];
                            !(f.h.version >= m) || f.h.version >= q || f.h.objectStoreNames.contains(n) || l.push(n)
                        }
                        if (l.length !== 0) {
                            const n = Object.keys(e.options.O),
                                m = h.objectStoreNames();
                            if (e.m < wg("ytidb_reopen_db_retries", 0)) return e.m++, h.close(), fh(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: n,
                                foundObjectStores: m
                            })), d();
                            if (e.l < wg("ytidb_remake_db_retries", 1)) return e.l++, yield e.delete(), fh(new U("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: n,
                                foundObjectStores: m
                            })), d();
                            throw new mh(m, n);
                        }
                        return h
                    } catch (h) {
                        if (h instanceof DOMException ? h.name === "VersionError" : "DOMError" in self && h instanceof DOMError ? h.name === "VersionError" : h instanceof Object && "message" in h && h.message === "An attempt was made to open a database using a lower version than the existing version.") {
                            g =
                                yield e.i(e.name, void 0, Object.assign({}, c, {
                                    upgrade: void 0
                                }));
                            k = g.h.version;
                            if (e.options.version !== void 0 && k > e.options.version + 1) throw g.close(), e.j = !1, Xh(e, k);
                            return g
                        }
                        b();
                        h instanceof Error && !T("ytidb_async_stack_killswitch") && (h.stack = `${h.stack}\n${g.substring(g.indexOf("\n")+1)}`);
                        let l;
                        throw ph(h, e.name, "", (l = e.options.version) != null ? l : -1);
                    }
                })
            };
        return this.h = a = d()
    }
};
const $h = new Zh("YtIdbMeta", {
    O: {
        databases: {
            N: 1
        }
    },
    upgrade(a, b) {
        b(1) && Fh(a, "databases", {
            keyPath: "actualName"
        })
    }
});

function ai(a, b) {
    return r(function*() {
        return X(yield Yh($h, b), ["databases"], {
            C: !0,
            mode: "readwrite"
        }, c => {
            const d = c.objectStore("databases");
            return d.get(a.actualName).then(e => {
                if (e ? a.actualName !== e.actualName || a.publicName !== e.publicName || a.userIdentifier !== e.userIdentifier : 1) return V(d.h.put(a, void 0)).then(() => {})
            })
        })
    })
}

function bi(a, b) {
    return r(function*() {
        if (a) return (yield Yh($h, b)).delete("databases", a)
    })
};
let ci;
const di = new class {
    constructor() {}
}(new class {
    constructor() {}
});

function ei() {
    return r(function*() {
        return !0
    })
}

function fi() {
    if (ci !== void 0) return ci;
    eh = !0;
    return ci = ei().then(a => {
        eh = !1;
        return a
    })
}

function gi() {
    return v("ytglobal.idbToken_") || void 0
}

function hi() {
    const a = gi();
    return a ? Promise.resolve(a) : fi().then(b => {
        (b = b ? di : void 0) && w("ytglobal.idbToken_", b);
        return b
    })
};
new He;

function ii(a) {
    try {
        Vg();
        var b = !0
    } catch (c) {
        b = !1
    }
    if (!b) throw a = new U("AUTH_INVALID", {
        dbName: a
    }), fh(a), a;
    b = Vg();
    return {
        actualName: `${a}:${b}`,
        publicName: a,
        userIdentifier: b
    }
}

function ji(a, b, c, d) {
    return r(function*() {
        var e, f = (e = Error().stack) != null ? e : "";
        e = yield hi();
        if (!e) throw e = qh("openDbImpl", a, b), T("ytidb_async_stack_killswitch") || (e.stack = `${e.stack}\n${f.substring(f.indexOf("\n")+1)}`), fh(e), e;
        hh(a);
        f = c ? {
            actualName: a,
            publicName: a,
            userIdentifier: void 0
        } : ii(a);
        try {
            return yield ai(f, e), yield Vh(f.actualName, b, d)
        } catch (g) {
            try {
                yield bi(f.actualName, e)
            } catch (k) {}
            throw g;
        }
    })
}

function ki(a, b, c = {}) {
    return ji(a, b, !1, c)
}

function li(a, b, c = {}) {
    return ji(a, b, !0, c)
}

function mi(a, b = {}) {
    return r(function*() {
        const c = yield hi();
        if (c) {
            hh(a);
            var d = ii(a);
            yield Wh(d.actualName, b);
            yield bi(d.actualName, c)
        }
    })
}

function ni(a, b = {}) {
    return r(function*() {
        const c = yield hi();
        c && (hh(a), yield Wh(a, b), yield bi(a, c))
    })
};

function oi(a, b) {
    let c;
    return () => {
        c || (c = new pi(a, b));
        return c
    }
}
var pi = class extends Zh {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        hh(a)
    }
    i(a, b, c = {}) {
        return (this.options.shared ? li : ki)(a, b, Object.assign({}, c))
    }
    delete(a = {}) {
        return (this.options.shared ? ni : mi)(this.name, a)
    }
};

function qi(a, b) {
    return oi(a, b)
};
var ri = qi("ytGcfConfig", {
    O: {
        coldConfigStore: {
            N: 1
        },
        hotConfigStore: {
            N: 1
        }
    },
    shared: !1,
    upgrade(a, b) {
        b(1) && (Fh(a, "hotConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("hotTimestampIndex", "timestamp", {
            unique: !1
        }), Fh(a, "coldConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("coldTimestampIndex", "timestamp", {
            unique: !1
        }))
    },
    version: 1
});

function si(a) {
    return Yh(ri(), a)
}

function ti(a, b, c) {
    return r(function*() {
        const d = {
                config: a,
                hashData: b,
                timestamp: W()
            },
            e = yield si(c);
        yield e.clear("hotConfigStore");
        return yield Hh(e, "hotConfigStore", d)
    })
}

function ui(a, b, c, d) {
    return r(function*() {
        const e = {
                config: a,
                hashData: b,
                configData: c,
                timestamp: W()
            },
            f = yield si(d);
        yield f.clear("coldConfigStore");
        return yield Hh(f, "coldConfigStore", e)
    })
}

function vi(a) {
    return r(function*() {
        let b = void 0;
        yield X(yield si(a), ["coldConfigStore"], {
            mode: "readwrite",
            C: !0
        }, c => Qh(c.objectStore("coldConfigStore").index("coldTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.cursor.value
        }));
        return b
    })
}

function wi(a) {
    return r(function*() {
        let b = void 0;
        yield X(yield si(a), ["hotConfigStore"], {
            mode: "readwrite",
            C: !0
        }, c => Qh(c.objectStore("hotConfigStore").index("hotTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.cursor.value
        }));
        return b
    })
};
var xi = class extends Pa {
    constructor() {
        super();
        this.j = [];
        this.h = [];
        const a = v("yt.gcf.config.hotUpdateCallbacks");
        a ? (this.j = [...a], this.h = a) : (this.h = [], w("yt.gcf.config.hotUpdateCallbacks", this.h))
    }
    m() {
        for (const b of this.j) {
            var a = this.h;
            const c = a.indexOf(b);
            c >= 0 && a.splice(c, 1)
        }
        this.j.length = 0;
        super.m()
    }
};

function yi(a, b, c) {
    return r(function*() {
        if (T("start_client_gcf")) {
            c && (a.j = c, w("yt.gcf.config.hotConfigGroup", a.j || null));
            a.hotHashData = b;
            w("yt.gcf.config.hotHashData", a.hotHashData || null);
            var d = gi();
            if (d) {
                if (!c) {
                    var e;
                    c = (e = yield wi(d)) == null ? void 0 : e.config
                }
                yield ti(c, b, d)
            }
            if (c) {
                d = a.i;
                e = c;
                for (const f of d.h) f(e)
            }
        }
    })
}

function zi(a, b, c) {
    return r(function*() {
        if (T("start_client_gcf")) {
            a.coldHashData = b;
            w("yt.gcf.config.coldHashData", a.coldHashData || null);
            const d = gi();
            if (d) {
                if (!c) {
                    let e;
                    c = (e = yield vi(d)) == null ? void 0 : e.config
                }
                c && (yield ui(c, b, c.configData, d))
            }
        }
    })
}
var Ai = class {
    constructor() {
        this.h = 0;
        this.i = new xi
    }
};

function Bi() {
    return "INNERTUBE_API_KEY" in cg && "INNERTUBE_API_VERSION" in cg
}

function Ci() {
    return {
        innertubeApiKey: S("INNERTUBE_API_KEY"),
        innertubeApiVersion: S("INNERTUBE_API_VERSION"),
        ca: S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        Da: S("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        Ea: S("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
        innertubeContextClientVersion: S("INNERTUBE_CONTEXT_CLIENT_VERSION"),
        ma: S("INNERTUBE_CONTEXT_HL"),
        la: S("INNERTUBE_CONTEXT_GL"),
        Fa: S("INNERTUBE_HOST_OVERRIDE") || "",
        Ha: !!S("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        Ga: !!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: S("SERIALIZED_CLIENT_CONFIG_DATA")
    }
}

function Di(a) {
    const b = {
        client: {
            hl: a.ma,
            gl: a.la,
            clientName: a.Da,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.ca
        }
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = t.devicePixelRatio;
    c && c != 1 && (b.client.screenDensityFloat = String(c));
    c = xg();
    c !== "" && (b.client.experimentsToken = c);
    c = yg();
    c.length > 0 && (b.request = {
        internalExperimentFlags: c
    });
    Ei(void 0, b);
    Fi(a, void 0, b);
    T("start_client_gcf") && Gi(void 0, b);
    S("DELEGATED_SESSION_ID") && !T("pageid_as_header_web") && (b.user = {
        onBehalfOfUser: S("DELEGATED_SESSION_ID")
    });
    !T("fill_delegate_context_in_gel_killswitch") && (a = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) && (b.user = Object.assign({}, b.user, {
        serializedDelegationContext: a
    }));
    a = Object;
    c = a.assign;
    var d = b.client,
        e = S("DEVICE", "");
    const f = {};
    for (const [g, k] of Object.entries(pg(e))) {
        e = g;
        const h = k;
        e === "cbrand" ? f.deviceMake = h : e === "cmodel" ? f.deviceModel = h : e === "cbr" ? f.browserName = h : e === "cbrver" ? f.browserVersion = h : e === "cos" ? f.osName = h : e === "cosver" ? f.osVersion = h : e === "cplatform" &&
            (f.platform = h)
    }
    b.client = c.call(a, d, f);
    return b
}

function Ei(a, b) {
    const c = v("yt.embedded_player.embed_url");
    c && (a ? (b = Pd(a, af, 7) || new af, J(b, 4, c), I(a, af, 7, b)) : b && (b.thirdParty = {
        embedUrl: c
    }))
}

function Fi(a, b, c) {
    if (a.appInstallData)
        if (b) {
            let d;
            c = (d = Pd(b, Ve, 62)) != null ? d : new Ve;
            J(c, 6, a.appInstallData);
            I(b, Ve, 62, c)
        } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
}

function Hi(a, b, c = {}) {
    let d = {};
    S("EOM_VISITOR_DATA") ? d = {
        "X-Goog-EOM-Visitor-Id": S("EOM_VISITOR_DATA")
    } : d = {
        "X-Goog-Visitor-Id": c.visitorData || S("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    b = c.Lb || S("AUTHORIZATION");
    b || (a ? b = `Bearer ${v("gapi.auth.getToken")().Kb}` : (a = Sg(Qg()), T("pageid_as_header_web") || delete a["X-Goog-PageId"], d = Object.assign({}, d, a)));
    b && (d.Authorization = b);
    return d
}

function Gi(a, b) {
    if (!Ai.h) {
        var c = new Ai;
        Ai.h = c
    }
    c = Ai.h;
    var d = W() - c.h;
    if (c.h !== 0 && d < wg("send_config_hash_timer")) c = void 0;
    else {
        d = v("yt.gcf.config.coldConfigData");
        var e = v("yt.gcf.config.hotHashData"),
            f = v("yt.gcf.config.coldHashData");
        d && e && f && (c.h = W());
        c = {
            coldConfigData: d,
            hotHashData: e,
            coldHashData: f
        }
    }
    if (d = c)
        if (e = d.coldConfigData, c = d.coldHashData, d = d.hotHashData, a) {
            var g;
            b = (g = Pd(a, Ve, 62)) != null ? g : new Ve;
            g = J(b, 1, e);
            g = J(g, 3, c);
            J(g, 5, d);
            I(a, Ve, 62, b)
        } else b && (b.client.configInfo = b.client.configInfo || {},
            e && (b.client.configInfo.coldConfigData = e), c && (b.client.configInfo.coldHashData = c), d && (b.client.configInfo.hotHashData = d))
};
typeof TextEncoder !== "undefined" && new TextEncoder;

function Ii(a) {
    this.version = 1;
    this.args = a
};

function Ji() {
    var a = Ki;
    this.topic = "screen-created";
    this.h = a
}
Ji.prototype.toString = function() {
    return this.topic
};
const Li = v("ytPubsub2Pubsub2Instance") || new M;
M.prototype.subscribe = M.prototype.M;
M.prototype.unsubscribeByKey = M.prototype.F;
M.prototype.publish = M.prototype.B;
M.prototype.clear = M.prototype.clear;
w("ytPubsub2Pubsub2Instance", Li);
const Mi = v("ytPubsub2Pubsub2SubscribedKeys") || {};
w("ytPubsub2Pubsub2SubscribedKeys", Mi);
const Ni = v("ytPubsub2Pubsub2TopicToKeys") || {};
w("ytPubsub2Pubsub2TopicToKeys", Ni);
const Oi = v("ytPubsub2Pubsub2IsAsync") || {};
w("ytPubsub2Pubsub2IsAsync", Oi);
w("ytPubsub2Pubsub2SkipSubKey", null);

function Pi(a, b) {
    const c = Qi();
    c && c.publish.call(c, a.toString(), a, b)
}

function Ri(a) {
    var b = Si;
    const c = Qi();
    if (!c) return 0;
    const d = c.subscribe(b.toString(), (e, f) => {
        var g = v("ytPubsub2Pubsub2SkipSubKey");
        g && g == d || (g = () => {
            if (Mi[d]) try {
                if (f && b instanceof Ji && b != e) try {
                    var k = b.h,
                        h = f;
                    if (!h.args || !h.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                    try {
                        if (!k.pa) {
                            const p = new k;
                            k.pa = p.version
                        }
                        var l = k.pa
                    } catch (p) {}
                    if (!l || h.version != l) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                    try {
                        l = Reflect;
                        var n = l.construct; {
                            var m = h.args;
                            const p = m.length;
                            if (p > 0) {
                                const u = Array(p);
                                for (h = 0; h < p; h++) u[h] = m[h];
                                var q = u
                            } else q = []
                        }
                        f = n.call(l, k, q)
                    } catch (p) {
                        throw p.message = "yt.pubsub2.Data.deserialize(): " + p.message, p;
                    }
                } catch (p) {
                    throw p.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + b.toString() + ": " + p.message, p;
                }
                a.call(window, f)
            } catch (p) {
                ig(p)
            }
        }, Oi[b.toString()] ? v("yt.scheduler.instance") ? bh.h(g) : sg(g, 0) : g())
    });
    Mi[d] = !0;
    Ni[b.toString()] || (Ni[b.toString()] = []);
    Ni[b.toString()].push(d);
    return d
}

function Ti() {
    var a = Ui;
    const b = Ri(function(c) {
        a.apply(void 0, arguments);
        Vi(b)
    });
    return b
}

function Vi(a) {
    const b = Qi();
    b && (typeof a === "number" && (a = [a]), xa(a, c => {
        b.unsubscribeByKey(c);
        delete Mi[c]
    }))
}

function Qi() {
    return v("ytPubsub2Pubsub2Instance")
};
let Wi = void 0,
    Xi = void 0;
var Yi = {
    accountStateChangeSignedIn: 23,
    accountStateChangeSignedOut: 24,
    delayedEventMetricCaptured: 11,
    latencyActionBaselined: 6,
    latencyActionInfo: 7,
    latencyActionTicked: 5,
    offlineTransferStatusChanged: 2,
    offlineImageDownload: 335,
    playbackStartStateChanged: 9,
    systemHealthCaptured: 3,
    mangoOnboardingCompleted: 10,
    mangoPushNotificationReceived: 230,
    mangoUnforkDbMigrationError: 121,
    mangoUnforkDbMigrationSummary: 122,
    mangoUnforkDbMigrationPreunforkDbVersionNumber: 133,
    mangoUnforkDbMigrationPhoneMetadata: 134,
    mangoUnforkDbMigrationPhoneStorage: 135,
    mangoUnforkDbMigrationStep: 142,
    mangoAsyncApiMigrationEvent: 223,
    mangoDownloadVideoResult: 224,
    mangoHomepageVideoCount: 279,
    mangoHomeV3State: 295,
    mangoImageClientCacheHitEvent: 273,
    sdCardStatusChanged: 98,
    framesDropped: 12,
    thumbnailHovered: 13,
    deviceRetentionInfoCaptured: 14,
    thumbnailLoaded: 15,
    backToAppEvent: 318,
    streamingStatsCaptured: 17,
    offlineVideoShared: 19,
    appCrashed: 20,
    youThere: 21,
    offlineStateSnapshot: 22,
    mdxSessionStarted: 25,
    mdxSessionConnected: 26,
    mdxSessionDisconnected: 27,
    bedrockResourceConsumptionSnapshot: 28,
    nextGenWatchWatchSwiped: 29,
    kidsAccountsSnapshot: 30,
    zeroStepChannelCreated: 31,
    tvhtml5SearchCompleted: 32,
    offlineSharePairing: 34,
    offlineShareUnlock: 35,
    mdxRouteDistributionSnapshot: 36,
    bedrockRepetitiveActionTimed: 37,
    unpluggedDegradationInfo: 229,
    uploadMp4HeaderMoved: 38,
    uploadVideoTranscoded: 39,
    uploadProcessorStarted: 46,
    uploadProcessorEnded: 47,
    uploadProcessorReady: 94,
    uploadProcessorRequirementPending: 95,
    uploadProcessorInterrupted: 96,
    uploadFrontendEvent: 241,
    assetPackDownloadStarted: 41,
    assetPackDownloaded: 42,
    assetPackApplied: 43,
    assetPackDeleted: 44,
    appInstallAttributionEvent: 459,
    playbackSessionStopped: 45,
    adBlockerMessagingShown: 48,
    distributionChannelCaptured: 49,
    dataPlanCpidRequested: 51,
    detailedNetworkTypeCaptured: 52,
    sendStateUpdated: 53,
    receiveStateUpdated: 54,
    sendDebugStateUpdated: 55,
    receiveDebugStateUpdated: 56,
    kidsErrored: 57,
    mdxMsnSessionStatsFinished: 58,
    appSettingsCaptured: 59,
    mdxWebSocketServerHttpError: 60,
    mdxWebSocketServer: 61,
    startupCrashesDetected: 62,
    coldStartInfo: 435,
    offlinePlaybackStarted: 63,
    liveChatMessageSent: 225,
    liveChatUserPresent: 434,
    liveChatBeingModerated: 457,
    liveCreationCameraUpdated: 64,
    liveCreationEncodingCaptured: 65,
    liveCreationError: 66,
    liveCreationHealthUpdated: 67,
    liveCreationVideoEffectsCaptured: 68,
    liveCreationStageOccured: 75,
    liveCreationBroadcastScheduled: 123,
    liveCreationArchiveReplacement: 149,
    liveCreationCostreamingConnection: 421,
    liveCreationStreamWebrtcStats: 288,
    mdxSessionRecoveryStarted: 69,
    mdxSessionRecoveryCompleted: 70,
    mdxSessionRecoveryStopped: 71,
    visualElementShown: 72,
    visualElementHidden: 73,
    visualElementGestured: 78,
    visualElementStateChanged: 208,
    screenCreated: 156,
    playbackAssociated: 202,
    visualElementAttached: 215,
    playbackContextEvent: 214,
    cloudCastingPlaybackStarted: 74,
    webPlayerApiCalled: 76,
    tvhtml5AccountDialogOpened: 79,
    foregroundHeartbeat: 80,
    foregroundHeartbeatScreenAssociated: 111,
    kidsOfflineSnapshot: 81,
    mdxEncryptionSessionStatsFinished: 82,
    playerRequestCompleted: 83,
    liteSchedulerStatistics: 84,
    mdxSignIn: 85,
    spacecastMetadataLookupRequested: 86,
    spacecastBatchLookupRequested: 87,
    spacecastSummaryRequested: 88,
    spacecastPlayback: 89,
    spacecastDiscovery: 90,
    tvhtml5LaunchUrlComponentChanged: 91,
    mdxBackgroundPlaybackRequestCompleted: 92,
    mdxBrokenAdditionalDataDeviceDetected: 93,
    tvhtml5LocalStorage: 97,
    tvhtml5DeviceStorageStatus: 147,
    autoCaptionsAvailable: 99,
    playbackScrubbingEvent: 339,
    flexyState: 100,
    interfaceOrientationCaptured: 101,
    mainAppBrowseFragmentCache: 102,
    offlineCacheVerificationFailure: 103,
    offlinePlaybackExceptionDigest: 217,
    vrCopresenceStats: 104,
    vrCopresenceSyncStats: 130,
    vrCopresenceCommsStats: 137,
    vrCopresencePartyStats: 153,
    vrCopresenceEmojiStats: 213,
    vrCopresenceEvent: 141,
    vrCopresenceFlowTransitEvent: 160,
    vrCowatchPartyEvent: 492,
    vrPlaybackEvent: 345,
    kidsAgeGateTracking: 105,
    offlineDelayAllowedTracking: 106,
    mainAppAutoOfflineState: 107,
    videoAsThumbnailDownload: 108,
    videoAsThumbnailPlayback: 109,
    liteShowMore: 110,
    renderingError: 118,
    kidsProfilePinGateTracking: 119,
    abrTrajectory: 124,
    scrollEvent: 125,
    streamzIncremented: 126,
    kidsProfileSwitcherTracking: 127,
    kidsProfileCreationTracking: 129,
    buyFlowStarted: 136,
    mbsConnectionInitiated: 138,
    mbsPlaybackInitiated: 139,
    mbsLoadChildren: 140,
    liteProfileFetcher: 144,
    mdxRemoteTransaction: 146,
    reelPlaybackError: 148,
    reachabilityDetectionEvent: 150,
    mobilePlaybackEvent: 151,
    courtsidePlayerStateChanged: 152,
    musicPersistentCacheChecked: 154,
    musicPersistentCacheCleared: 155,
    playbackInterrupted: 157,
    playbackInterruptionResolved: 158,
    fixFopFlow: 159,
    anrDetection: 161,
    backstagePostCreationFlowEnded: 162,
    clientError: 163,
    gamingAccountLinkStatusChanged: 164,
    liteHousewarming: 165,
    buyFlowEvent: 167,
    kidsParentalGateTracking: 168,
    kidsSignedOutSettingsStatus: 437,
    kidsSignedOutPauseHistoryFixStatus: 438,
    tvhtml5WatchdogViolation: 444,
    ypcUpgradeFlow: 169,
    yongleStudy: 170,
    ypcUpdateFlowStarted: 171,
    ypcUpdateFlowCancelled: 172,
    ypcUpdateFlowSucceeded: 173,
    ypcUpdateFlowFailed: 174,
    liteGrowthkitPromo: 175,
    paymentFlowStarted: 341,
    transactionFlowShowPaymentDialog: 405,
    transactionFlowStarted: 176,
    transactionFlowSecondaryDeviceStarted: 222,
    transactionFlowSecondaryDeviceSignedOutStarted: 383,
    transactionFlowCancelled: 177,
    transactionFlowPaymentCallBackReceived: 387,
    transactionFlowPaymentSubmitted: 460,
    transactionFlowPaymentSucceeded: 329,
    transactionFlowSucceeded: 178,
    transactionFlowFailed: 179,
    transactionFlowPlayBillingConnectionStartEvent: 428,
    transactionFlowSecondaryDeviceSuccess: 458,
    transactionFlowErrorEvent: 411,
    liteVideoQualityChanged: 180,
    watchBreakEnablementSettingEvent: 181,
    watchBreakFrequencySettingEvent: 182,
    videoEffectsCameraPerformanceMetrics: 183,
    adNotify: 184,
    startupTelemetry: 185,
    playbackOfflineFallbackUsed: 186,
    outOfMemory: 187,
    ypcPauseFlowStarted: 188,
    ypcPauseFlowCancelled: 189,
    ypcPauseFlowSucceeded: 190,
    ypcPauseFlowFailed: 191,
    uploadFileSelected: 192,
    ypcResumeFlowStarted: 193,
    ypcResumeFlowCancelled: 194,
    ypcResumeFlowSucceeded: 195,
    ypcResumeFlowFailed: 196,
    adsClientStateChange: 197,
    ypcCancelFlowStarted: 198,
    ypcCancelFlowCancelled: 199,
    ypcCancelFlowSucceeded: 200,
    ypcCancelFlowFailed: 201,
    ypcCancelFlowGoToPaymentProcessor: 402,
    ypcDeactivateFlowStarted: 320,
    ypcRedeemFlowStarted: 203,
    ypcRedeemFlowCancelled: 204,
    ypcRedeemFlowSucceeded: 205,
    ypcRedeemFlowFailed: 206,
    ypcFamilyCreateFlowStarted: 258,
    ypcFamilyCreateFlowCancelled: 259,
    ypcFamilyCreateFlowSucceeded: 260,
    ypcFamilyCreateFlowFailed: 261,
    ypcFamilyManageFlowStarted: 262,
    ypcFamilyManageFlowCancelled: 263,
    ypcFamilyManageFlowSucceeded: 264,
    ypcFamilyManageFlowFailed: 265,
    restoreContextEvent: 207,
    embedsAdEvent: 327,
    autoplayTriggered: 209,
    clientDataErrorEvent: 210,
    experimentalVssValidation: 211,
    tvhtml5TriggeredEvent: 212,
    tvhtml5FrameworksFieldTrialResult: 216,
    tvhtml5FrameworksFieldTrialStart: 220,
    musicOfflinePreferences: 218,
    watchTimeSegment: 219,
    appWidthLayoutError: 221,
    accountRegistryChange: 226,
    userMentionAutoCompleteBoxEvent: 227,
    downloadRecommendationEnablementSettingEvent: 228,
    musicPlaybackContentModeChangeEvent: 231,
    offlineDbOpenCompleted: 232,
    kidsFlowEvent: 233,
    kidsFlowCorpusSelectedEvent: 234,
    videoEffectsEvent: 235,
    unpluggedOpsEogAnalyticsEvent: 236,
    playbackAudioRouteEvent: 237,
    interactionLoggingDebugModeError: 238,
    offlineYtbRefreshed: 239,
    kidsFlowError: 240,
    musicAutoplayOnLaunchAttempted: 242,
    deviceContextActivityEvent: 243,
    deviceContextEvent: 244,
    templateResolutionException: 245,
    musicSideloadedPlaylistServiceCalled: 246,
    embedsStorageAccessNotChecked: 247,
    embedsHasStorageAccessResult: 248,
    embedsItpPlayedOnReload: 249,
    embedsRequestStorageAccessResult: 250,
    embedsShouldRequestStorageAccessResult: 251,
    embedsRequestStorageAccessState: 256,
    embedsRequestStorageAccessFailedState: 257,
    embedsItpWatchLaterResult: 266,
    searchSuggestDecodingPayloadFailure: 252,
    siriShortcutActivated: 253,
    tvhtml5KeyboardPerformance: 254,
    latencyActionSpan: 255,
    elementsLog: 267,
    ytbFileOpened: 268,
    tfliteModelError: 269,
    apiTest: 270,
    yongleUsbSetup: 271,
    touStrikeInterstitialEvent: 272,
    liteStreamToSave: 274,
    appBundleClientEvent: 275,
    ytbFileCreationFailed: 276,
    adNotifyFailure: 278,
    ytbTransferFailed: 280,
    blockingRequestFailed: 281,
    liteAccountSelector: 282,
    liteAccountUiCallbacks: 283,
    dummyPayload: 284,
    browseResponseValidationEvent: 285,
    entitiesError: 286,
    musicIosBackgroundFetch: 287,
    mdxNotificationEvent: 289,
    layersValidationError: 290,
    musicPwaInstalled: 291,
    liteAccountCleanup: 292,
    html5PlayerHealthEvent: 293,
    watchRestoreAttempt: 294,
    liteAccountSignIn: 296,
    notaireEvent: 298,
    kidsVoiceSearchEvent: 299,
    adNotifyFilled: 300,
    delayedEventDropped: 301,
    analyticsSearchEvent: 302,
    systemDarkThemeOptOutEvent: 303,
    flowEvent: 304,
    networkConnectivityBaselineEvent: 305,
    ytbFileImported: 306,
    downloadStreamUrlExpired: 307,
    directSignInEvent: 308,
    lyricImpressionEvent: 309,
    accessibilityStateEvent: 310,
    tokenRefreshEvent: 311,
    genericAttestationExecution: 312,
    tvhtml5VideoSeek: 313,
    unpluggedAutoPause: 314,
    scrubbingEvent: 315,
    bedtimeReminderEvent: 317,
    tvhtml5UnexpectedRestart: 319,
    tvhtml5StabilityTraceEvent: 478,
    tvhtml5OperationHealth: 467,
    tvhtml5WatchKeyEvent: 321,
    voiceLanguageChanged: 322,
    tvhtml5LiveChatStatus: 323,
    parentToolsCorpusSelectedEvent: 324,
    offerAdsEnrollmentInitiated: 325,
    networkQualityIntervalEvent: 326,
    deviceStartupMetrics: 328,
    heartbeatActionPlayerTransitioned: 330,
    tvhtml5Lifecycle: 331,
    heartbeatActionPlayerHalted: 332,
    adaptiveInlineMutedSettingEvent: 333,
    mainAppLibraryLoadingState: 334,
    thirdPartyLogMonitoringEvent: 336,
    appShellAssetLoadReport: 337,
    tvhtml5AndroidAttestation: 338,
    tvhtml5StartupSoundEvent: 340,
    iosBackgroundRefreshTask: 342,
    iosBackgroundProcessingTask: 343,
    sliEventBatch: 344,
    postImpressionEvent: 346,
    musicSideloadedPlaylistExport: 347,
    idbUnexpectedlyClosed: 348,
    voiceSearchEvent: 349,
    mdxSessionCastEvent: 350,
    idbQuotaExceeded: 351,
    idbTransactionEnded: 352,
    idbTransactionAborted: 353,
    tvhtml5KeyboardLogging: 354,
    idbIsSupportedCompleted: 355,
    creatorStudioMobileEvent: 356,
    idbDataCorrupted: 357,
    parentToolsAppChosenEvent: 358,
    webViewBottomSheetResized: 359,
    activeStateControllerScrollPerformanceSummary: 360,
    navigatorValidation: 361,
    mdxSessionHeartbeat: 362,
    clientHintsPolyfillDiagnostics: 363,
    clientHintsPolyfillEvent: 364,
    proofOfOriginTokenError: 365,
    kidsAddedAccountSummary: 366,
    musicWearableDevice: 367,
    ypcRefundFlowEvent: 368,
    tvhtml5PlaybackMeasurementEvent: 369,
    tvhtml5WatermarkMeasurementEvent: 370,
    clientExpGcfPropagationEvent: 371,
    mainAppReferrerIntent: 372,
    leaderLockEnded: 373,
    leaderLockAcquired: 374,
    googleHatsEvent: 375,
    persistentLensLaunchEvent: 376,
    parentToolsChildWelcomeChosenEvent: 378,
    browseThumbnailPreloadEvent: 379,
    finalPayload: 380,
    mdxDialAdditionalDataUpdateEvent: 381,
    webOrchestrationTaskLifecycleRecord: 382,
    startupSignalEvent: 384,
    accountError: 385,
    gmsDeviceCheckEvent: 386,
    accountSelectorEvent: 388,
    accountUiCallbacks: 389,
    mdxDialAdditionalDataProbeEvent: 390,
    downloadsSearchIcingApiStats: 391,
    downloadsSearchIndexUpdatedEvent: 397,
    downloadsSearchIndexSnapshot: 398,
    dataPushClientEvent: 392,
    kidsCategorySelectedEvent: 393,
    mdxDeviceManagementSnapshotEvent: 394,
    prefetchRequested: 395,
    prefetchableCommandExecuted: 396,
    gelDebuggingEvent: 399,
    webLinkTtsPlayEnd: 400,
    clipViewInvalid: 401,
    persistentStorageStateChecked: 403,
    cacheWipeoutEvent: 404,
    playerEvent: 410,
    sfvEffectPipelineStartedEvent: 412,
    sfvEffectPipelinePausedEvent: 429,
    sfvEffectPipelineEndedEvent: 413,
    sfvEffectChosenEvent: 414,
    sfvEffectLoadedEvent: 415,
    sfvEffectUserInteractionEvent: 465,
    sfvEffectFirstFrameProcessedLatencyEvent: 416,
    sfvEffectAggregatedFramesProcessedLatencyEvent: 417,
    sfvEffectAggregatedFramesDroppedEvent: 418,
    sfvEffectPipelineErrorEvent: 430,
    sfvEffectGraphFrozenEvent: 419,
    sfvEffectGlThreadBlockedEvent: 420,
    mdeVideoChangedEvent: 442,
    mdePlayerPerformanceMetrics: 472,
    mdeExporterEvent: 497,
    genericClientExperimentEvent: 423,
    homePreloadTaskScheduled: 424,
    homePreloadTaskExecuted: 425,
    homePreloadCacheHit: 426,
    polymerPropertyChangedInObserver: 427,
    applicationStarted: 431,
    networkCronetRttBatch: 432,
    networkCronetRttSummary: 433,
    repeatChapterLoopEvent: 436,
    seekCancellationEvent: 462,
    lockModeTimeoutEvent: 483,
    externalVideoShareToYoutubeAttempt: 501,
    parentCodeEvent: 502,
    offlineTransferStarted: 4,
    musicOfflineMixtapePreferencesChanged: 16,
    mangoDailyNewVideosNotificationAttempt: 40,
    mangoDailyNewVideosNotificationError: 77,
    dtwsPlaybackStarted: 112,
    dtwsTileFetchStarted: 113,
    dtwsTileFetchCompleted: 114,
    dtwsTileFetchStatusChanged: 145,
    dtwsKeyframeDecoderBufferSent: 115,
    dtwsTileUnderflowedOnNonkeyframe: 116,
    dtwsBackfillFetchStatusChanged: 143,
    dtwsBackfillUnderflowed: 117,
    dtwsAdaptiveLevelChanged: 128,
    blockingVisitorIdTimeout: 277,
    liteSocial: 18,
    mobileJsInvocation: 297,
    biscottiBasedDetection: 439,
    coWatchStateChange: 440,
    embedsVideoDataDidChange: 441,
    shortsFirst: 443,
    cruiseControlEvent: 445,
    qoeClientLoggingContext: 446,
    atvRecommendationJobExecuted: 447,
    tvhtml5UserFeedback: 448,
    producerProjectCreated: 449,
    producerProjectOpened: 450,
    producerProjectDeleted: 451,
    producerProjectElementAdded: 453,
    producerProjectElementRemoved: 454,
    tvhtml5ShowClockEvent: 455,
    deviceCapabilityCheckMetrics: 456,
    youtubeClearcutEvent: 461,
    offlineBrowseFallbackEvent: 463,
    getCtvTokenEvent: 464,
    startupDroppedFramesSummary: 466,
    screenshotEvent: 468,
    miniAppPlayEvent: 469,
    elementsDebugCounters: 470,
    fontLoadEvent: 471,
    webKillswitchReceived: 473,
    webKillswitchExecuted: 474,
    cameraOpenEvent: 475,
    manualSmoothnessMeasurement: 476,
    tvhtml5AppQualityEvent: 477,
    polymerPropertyAccessEvent: 479,
    miniAppSdkUsage: 480,
    cobaltTelemetryEvent: 481,
    crossDevicePlayback: 482,
    channelCreatedWithObakeImage: 484,
    channelEditedWithObakeImage: 485,
    offlineDeleteEvent: 486,
    crossDeviceNotificationTransfer: 487,
    androidIntentEvent: 488,
    unpluggedAmbientInterludesCounterfactualEvent: 489,
    keyPlaysPlayback: 490,
    shortsCreationFallbackEvent: 493,
    vssData: 491,
    castMatch: 494,
    miniAppPerformanceMetrics: 495,
    userFeedbackEvent: 496,
    kidsGuestSessionMismatch: 498,
    musicSideloadedPlaylistMigrationEvent: 499,
    sleepTimerSessionFinishEvent: 500
};
const Zi = ["client.name", "client.version"];

function $i(a) {
    if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
    a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter(b => b.key ? Zi.includes(b.key) : !1);
    return a
};
var aj = qi("ServiceWorkerLogsDatabase", {
    O: {
        SWHealthLog: {
            N: 1
        }
    },
    shared: !0,
    upgrade: (a, b) => {
        b(1) && Fh(a, "SWHealthLog", {
            keyPath: "id",
            autoIncrement: !0
        }).h.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
            unique: !1
        })
    },
    version: 1
});

function bj(a, b) {
    return r(function*() {
        var c = yield Yh(aj(), b), d = S("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
        const e = Object.assign({}, a);
        e.clientError && (e.clientError = $i(e.clientError));
        e.interface = d;
        return Hh(c, "SWHealthLog", e)
    })
};
w("ytNetworklessLoggingInitializationOptions", t.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1
});

function cj(a, b, c, d) {
    !S("VISITOR_DATA") && b !== "visitor_id" && Math.random() < .01 && jg(new Pf("Missing VISITOR_DATA when sending innertube request.", b, c, d));
    if (!a.isReady()) throw a = new Pf("innertube xhrclient not ready", b, c, d), ig(a), a;
    c = {
        headers: d.headers || {},
        method: "POST",
        postParams: c,
        postBody: d.postBody,
        postBodyFormat: d.postBodyFormat || "JSON",
        onTimeout: () => {
            d.onTimeout()
        },
        onFetchTimeout: d.onTimeout,
        onSuccess: (h, l) => {
            if (d.onSuccess) d.onSuccess(l)
        },
        onFetchSuccess: h => {
            if (d.onSuccess) d.onSuccess(h)
        },
        onError: (h, l) => {
            if (d.onError) d.onError(l)
        },
        onFetchError: h => {
            if (d.onError) d.onError(h)
        },
        timeout: d.timeout,
        withCredentials: !0,
        compress: d.compress
    };
    c.headers["Content-Type"] || (c.headers["Content-Type"] = "application/json");
    let e = "";
    var f = a.config_.Fa;
    f && (e = f);
    var g = a.config_.Ha || !1;
    f = Hi(g, e, d);
    Object.assign(c.headers, f);
    (f = c.headers.Authorization) && !e && g && (c.headers["x-origin"] = window.location.origin);
    b = `/${"youtubei"}/${a.config_.innertubeApiVersion}/${b}`;
    g = {
        alt: "json"
    };
    let k = a.config_.Ga && f;
    k = k && f.startsWith("Bearer");
    k || (g.key = a.config_.innertubeApiKey);
    a = qg(`${e}${b}`, g || {}, !0);
    try {
        Ag(a,
            c)
    } catch (h) {
        if (h.name === "InvalidAccessError") jg(Error("An extension is blocking network request."));
        else throw h;
    }
}
var dj = class {
    constructor(a) {
        this.config_ = null;
        a ? this.config_ = a : Bi() && (this.config_ = Ci())
    }
    isReady() {
        !this.config_ && Bi() && (this.config_ = Ci());
        return !!this.config_
    }
};
let ej = 0;
w("ytDomDomGetNextId", v("ytDomDomGetNextId") || (() => ++ej));
w("ytEventsEventsListeners", t.ytEventsEventsListeners || {});
w("ytEventsEventsCounter", t.ytEventsEventsCounter || {
    count: 0
});

function fj() {
    const a = v("_lact", window);
    return a == null ? -1 : Math.max(Date.now() - a, 0)
};
t.ytPubsubPubsubInstance || new M;
var gj = Symbol("injectionDeps"),
    hj = class {
        constructor() {
            this.name = "INNERTUBE_TRANSPORT_TOKEN"
        }
        toString() {
            return `InjectionToken(${this.name})`
        }
    },
    ij = class {
        constructor() {
            this.key = Ai
        }
    };

function jj(a) {
    var b = {
        fa: kj,
        oa: lj.h
    };
    a.i.set(b.fa, b);
    const c = a.j.get(b.fa);
    if (c) try {
        c.bc(a.resolve(b.fa))
    } catch (d) {
        c.Yb(d)
    }
}

function mj(a, b, c, d = !1) {
    if (c.indexOf(b) > -1) throw Error(`Deps cycle for: ${b}`);
    if (a.h.has(b)) return a.h.get(b);
    if (!a.i.has(b)) {
        if (d) return;
        throw Error(`No provider for: ${b}`);
    }
    d = a.i.get(b);
    c.push(b);
    if (d.oa !== void 0) var e = d.oa;
    else if (d.Qa) e = d[gj] ? nj(a, d[gj], c) : [], e = d.Qa(...e);
    else if (d.Pa) {
        e = d.Pa;
        const f = e[gj] ? nj(a, e[gj], c) : [];
        e = new e(...f)
    } else throw Error(`Could not resolve providers for: ${b}`);
    c.pop();
    d.jc || a.h.set(b, e);
    return e
}

function nj(a, b, c) {
    return b ? b.map(d => d instanceof ij ? mj(a, d.key, c, !0) : mj(a, d, c)) : []
}
var oj = class {
    constructor() {
        this.i = new Map;
        this.j = new Map;
        this.h = new Map
    }
    resolve(a) {
        return a instanceof ij ? mj(this, a.key, [], !0) : mj(this, a, [])
    }
};
let pj;

function qj() {
    pj || (pj = new oj);
    return pj
};
let rj = window;

function sj() {
    let a, b;
    return "h5vcc" in rj && ((a = rj.h5vcc.traceEvent) == null ? 0 : a.traceBegin) && ((b = rj.h5vcc.traceEvent) == null ? 0 : b.traceEnd) ? 1 : "performance" in rj && rj.performance.mark && rj.performance.measure ? 2 : 0
}

function tj(a) {
    const b = sj();
    switch (b) {
        case 1:
            rj.h5vcc.traceEvent.traceBegin("YTLR", a);
            break;
        case 2:
            rj.performance.mark(`${a}-start`);
            break;
        case 0:
            break;
        default:
            Fa(b, "unknown trace type")
    }
}

function uj(a) {
    var b = sj();
    switch (b) {
        case 1:
            rj.h5vcc.traceEvent.traceEnd("YTLR", a);
            break;
        case 2:
            b = `${a}-start`;
            const c = `${a}-end`;
            rj.performance.mark(c);
            rj.performance.measure(a, b, c);
            break;
        case 0:
            break;
        default:
            Fa(b, "unknown trace type")
    }
};
var vj = T("web_enable_lifecycle_monitoring") && sj() !== 0,
    wj = T("web_enable_lifecycle_monitoring");

function xj(a) {
    let b;
    return (b = a.priority) != null ? b : 0
}

function yj(a) {
    var b = Array.from(a.h.keys()).sort((c, d) => xj(a.h[d]) - xj(a.h[c]));
    for (const c of b) b = a.h[c], b.jobId === void 0 || b.Y || (a.scheduler.T(b.jobId), Xg(b.da, 10))
}
var zj = class {
    constructor(a) {
        this.scheduler = $g();
        this.i = new He;
        this.h = a;
        for (let b = 0; b < this.h.length; b++) {
            const c = this.h[b];
            a = () => {
                c.da();
                this.h[b].Y = !0;
                this.h.every(e => e.Y === !0) && this.i.resolve()
            };
            const d = Xg(a, xj(c));
            this.h[b] = Object.assign({}, c, {
                da: a,
                jobId: d
            })
        }
    }
    cancel() {
        for (const a of this.h) a.jobId === void 0 || a.Y || this.scheduler.T(a.jobId), a.Y = !0;
        this.i.resolve()
    }
};

function Aj(a, b, c) {
    wj && console.groupCollapsed && console.groupEnd && (console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`), console.log("with message: ", c), console.groupEnd())
}

function Bj(a, b) {
    const c = b.filter(e => Cj(a, e) === 10),
        d = b.filter(e => Cj(a, e) !== 10);
    return a.l.hc ? (...e) => r(function*() {
        yield Dj(c, ...e);
        Ej(a, d, ...e)
    }) : (...e) => {
        Fj(c, ...e);
        Ej(a, d, ...e)
    }
}

function Cj(a, b) {
    let c, d;
    return (d = (c = a.j) != null ? c : b.priority) != null ? d : 0
}

function Dj(a, ...b) {
    return r(function*() {
        $g();
        for (const c of a) {
            let d;
            Yg(() => {
                Gj(c.name);
                const e = c.callback(...b);
                typeof(e == null ? void 0 : e.then) === "function" ? d = e.then(() => {
                    Hj(c.name)
                }): Hj(c.name)
            });
            d && (yield d)
        }
    })
}

function Ej(a, b, ...c) {
    b = b.map(d => ({
        da: () => {
            Gj(d.name);
            d.callback(...c);
            Hj(d.name)
        },
        priority: Cj(a, d)
    }));
    b.length && (a.i = new zj(b))
}

function Fj(a, ...b) {
    $g();
    for (const c of a) Yg(() => {
        Gj(c.name);
        c.callback(...b);
        Hj(c.name)
    })
}

function Gj(a) {
    vj && a && tj(a)
}

function Hj(a) {
    vj && a && uj(a)
}
var Ij = class {
    constructor() {
        this.state = "none";
        this.plugins = [];
        this.j = void 0;
        this.l = {};
        vj && tj(this.state)
    }
    get currentState() {
        return this.state
    }
    install(a) {
        this.plugins.push(a);
        return this
    }
    transition(a, b) {
        vj && uj(this.state);
        var c = this.transitions.find(d => Array.isArray(d.from) ? d.from.find(e => e === this.state && d.S === a) : d.from === this.state && d.S === a);
        if (c) {
            this.i && (yj(this.i), this.i = void 0);
            Aj(this, a, b);
            this.state = a;
            vj && tj(this.state);
            c = c.action.bind(this);
            const d = this.plugins.filter(e => e[a]).map(e => e[a]);
            c(Bj(this, d), b)
        } else throw Error(`no transition specified from ${this.state} to ${a}`);
    }
};

function Jj() {
    Kj || (Kj = new Lj);
    return Kj
}
var Lj = class extends Ij {
        constructor() {
            super();
            this.h = null;
            this.j = 10;
            this.transitions = [{
                    from: "none",
                    S: "application_navigating",
                    action: this.m
                }, {
                    from: "application_navigating",
                    S: "none",
                    action: this.s
                }, {
                    from: "application_navigating",
                    S: "application_navigating",
                    action: () => {}
                },
                {
                    from: "none",
                    S: "none",
                    action: () => {}
                }
            ]
        }
        m(a, b) {
            this.h = Wg(() => {
                this.currentState === "application_navigating" && this.transition("none")
            }, 5E3);
            a(b == null ? void 0 : b.event)
        }
        s(a, b) {
            this.h && (bh.T(this.h), this.h = null);
            a(b == null ? void 0 : b.event)
        }
    },
    Kj;
let Mj = [];
w("yt.logging.transport.getScrapedGelPayloads", function() {
    return Mj
});

function Nj(a, b) {
    const c = Oj(b);
    if (a.h[c]) return a.h[c];
    const d = Object.keys(a.store) || [];
    if (d.length <= 1 && Oj(b) === d[0]) return d;
    const e = [];
    for (let g = 0; g < d.length; g++) {
        const k = d[g].split("/");
        if (Pj(b.auth, k[0])) {
            var f = b.isJspb;
            Pj(f === void 0 ? "undefined" : f ? "true" : "false", k[1]) && Pj(b.cttAuthInfo, k[2]) && (f = b.tier, f = f === void 0 ? "undefined" : JSON.stringify(f), Pj(f, k[3]) && e.push(d[g]))
        }
    }
    return a.h[c] = e
}

function Pj(a, b) {
    return a === void 0 || a === "undefined" ? !0 : a === b
}
var Qj = class {
    constructor() {
        this.store = {};
        this.h = {}
    }
    storePayload(a, b) {
        a = Oj(a);
        this.store[a] ? this.store[a].push(b) : (this.h = {}, this.store[a] = [b]);
        return a
    }
    smartExtractMatchingEntries(a) {
        if (!a.keys.length) return [];
        const b = Nj(this, a.keys.splice(0, 1)[0]),
            c = [];
        for (let d = 0; d < b.length; d++) this.store[b[d]] && a.sizeLimit && (this.store[b[d]].length <= a.sizeLimit ? (c.push(...this.store[b[d]]), delete this.store[b[d]]) : c.push(...this.store[b[d]].splice(0, a.sizeLimit)));
        (a == null ? 0 : a.sizeLimit) && c.length < (a == null ? void 0 :
            a.sizeLimit) && (a.sizeLimit -= c.length, c.push(...this.smartExtractMatchingEntries(a)));
        return c
    }
    extractMatchingEntries(a) {
        a = Nj(this, a);
        const b = [];
        for (let c = 0; c < a.length; c++) this.store[a[c]] && (b.push(...this.store[a[c]]), delete this.store[a[c]]);
        return b
    }
    getSequenceCount(a) {
        a = Nj(this, a);
        let b = 0;
        for (let c = 0; c < a.length; c++) {
            let d;
            b += ((d = this.store[a[c]]) == null ? void 0 : d.length) || 0
        }
        return b
    }
};
Qj.prototype.getSequenceCount = Qj.prototype.getSequenceCount;
Qj.prototype.extractMatchingEntries = Qj.prototype.extractMatchingEntries;
Qj.prototype.smartExtractMatchingEntries = Qj.prototype.smartExtractMatchingEntries;
Qj.prototype.storePayload = Qj.prototype.storePayload;

function Oj(a) {
    return [a.auth === void 0 ? "undefined" : a.auth, a.isJspb === void 0 ? "undefined" : a.isJspb, a.cttAuthInfo === void 0 ? "undefined" : a.cttAuthInfo, a.tier === void 0 ? "undefined" : a.tier].join("/")
};

function Rj(a, b) {
    if (a) return a[b.name]
};
/*

 SPDX-License-Identifier: Apache-2.0
*/
const Sj = wg("initial_gel_batch_timeout", 2E3),
    Tj = wg("gel_queue_timeout_max_ms", 6E4),
    Uj = Math.pow(2, 16) - 1,
    Vj = wg("gel_min_batch_size", 5);
let Wj = void 0;
class Xj {
    constructor() {
        this.l = this.h = this.i = 0;
        this.j = !1
    }
}
const Yj = new Xj,
    Zj = new Xj,
    ak = new Xj,
    bk = new Xj;
let ck, dk = !0,
    ek = 1;
const fk = new Map,
    gk = t.ytLoggingTransportTokensToCttTargetIds_ || {},
    hk = t.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
let ik = {};

function jk() {
    let a = v("yt.logging.ims");
    a || (a = new Qj, w("yt.logging.ims", a));
    return a
}

function kk(a, b) {
    if (a.endpoint === "log_event") {
        lk();
        var c = mk(a),
            d = nk(a.payload) || "",
            e = ok(d),
            f = 200;
        if (e) {
            if (e.enabled === !1 && !T("web_payload_policy_disabled_killswitch")) return;
            f = pk(e.tier);
            if (f === 400) {
                qk(a, b);
                return
            }
        }
        ik[c] = !0;
        e = {
            cttAuthInfo: c,
            isJspb: !1,
            tier: f
        };
        jk().storePayload(e, a.payload);
        rk(b, c, !1, e, sk(d))
    }
}

function tk(a, b, c) {
    if (b.endpoint === "log_event") {
        lk();
        var d = mk(b, !0),
            e = ok(a),
            f = 200;
        if (e) {
            if (e.enabled === !1 && !T("web_payload_policy_disabled_killswitch")) return;
            f = pk(e.tier);
            if (f === 400) {
                uk(a, b, c);
                return
            }
        }
        ik[d] = !0;
        e = {
            cttAuthInfo: d,
            isJspb: !0,
            tier: f
        };
        jk().storePayload(e, be(b.payload));
        rk(c, d, !0, e, sk(a))
    }
}

function rk(a, b, c = !1, d, e = !1) {
    a && (Wj = new a);
    a = wg("tvhtml5_logging_max_batch_ads_fork") || wg("web_logging_max_batch") || 100;
    const f = W(),
        g = vk(c, d.tier),
        k = g.l;
    e && (g.j = !0);
    e = 0;
    d && (e = jk().getSequenceCount(d));
    const h = () => {
        wk({
            writeThenSend: !0
        }, T("flush_only_full_queue") ? b : void 0, c, d.tier)
    };
    e >= 1E3 ? h() : e >= a ? ck || (ck = xk(() => {
        h();
        ck = void 0
    }, 0)) : f - k >= 10 && (yk(c, d.tier), g.l = f)
}

function qk(a, b) {
    if (a.endpoint === "log_event") {
        lk();
        var c = mk(a),
            d = new Map;
        d.set(c, [a.payload]);
        var e = nk(a.payload) || "";
        b && (Wj = new b);
        return new z((f, g) => {
            Wj && Wj.isReady() ? zk(d, Wj, f, g, {
                bypassNetworkless: !0
            }, !0, sk(e)) : f()
        })
    }
}

function uk(a, b, c) {
    if (b.endpoint === "log_event") {
        lk();
        var d = mk(b, !0),
            e = new Map;
        e.set(d, [be(b.payload)]);
        c && (Wj = new c);
        return new z(f => {
            Wj && Wj.isReady() ? Ak(e, Wj, f, {
                bypassNetworkless: !0
            }, !0, sk(a)) : f()
        })
    }
}

function mk(a, b = !1) {
    var c = "";
    if (a.dangerousLogToVisitorSession) c = "visitorOnlyApprovedKey";
    else if (a.cttAuthInfo) {
        if (b) {
            b = a.cttAuthInfo.token;
            c = a.cttAuthInfo;
            const d = new Hf;
            c.videoId ? d.setVideoId(c.videoId) : c.playlistId && Ld(d, 2, Yd, fd(c.playlistId));
            hk[b] = d
        } else b = a.cttAuthInfo, c = {}, b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId), gk[a.cttAuthInfo.token] = c;
        c = a.cttAuthInfo.token
    }
    return c
}

function wk(a = {}, b, c = !1, d) {
    new z((e, f) => {
        const g = vk(c, d),
            k = g.j;
        g.j = !1;
        Bk(g.i);
        Bk(g.h);
        g.h = 0;
        Wj && Wj.isReady() ? d === void 0 && T("enable_web_tiered_gel") ? Ck(e, f, a, b, c, 300, k) : Ck(e, f, a, b, c, d, k) : (yk(c, d), e())
    })
}

function Ck(a, b, c = {}, d, e = !1, f = 200, g = !1) {
    var k = Wj,
        h = new Map;
    const l = new Map,
        n = {
            isJspb: e,
            cttAuthInfo: d,
            tier: f
        },
        m = {
            isJspb: e,
            cttAuthInfo: d
        };
    if (d !== void 0) e ? (b = T("enable_web_tiered_gel") ? jk().smartExtractMatchingEntries({
        keys: [n, m],
        sizeLimit: 1E3
    }) : jk().extractMatchingEntries(m), h.set(d, b), Ak(h, k, a, c, !1, g)) : (h = T("enable_web_tiered_gel") ? jk().smartExtractMatchingEntries({
        keys: [n, m],
        sizeLimit: 1E3
    }) : jk().extractMatchingEntries(m), l.set(d, h), zk(l, k, a, b, c, !1, g));
    else if (e) {
        for (const q of Object.keys(ik)) b = T("enable_web_tiered_gel") ?
            jk().smartExtractMatchingEntries({
                keys: [n, m],
                sizeLimit: 1E3
            }) : jk().extractMatchingEntries({
                isJspb: !0,
                cttAuthInfo: q
            }), b.length > 0 && h.set(q, b), (T("web_fp_via_jspb_and_json") && c.writeThenSend || !T("web_fp_via_jspb_and_json")) && delete ik[q];
        Ak(h, k, a, c, !1, g)
    } else {
        for (const q of Object.keys(ik)) d = T("enable_web_tiered_gel") ? jk().smartExtractMatchingEntries({
            keys: [{
                isJspb: !1,
                cttAuthInfo: q,
                tier: f
            }, {
                isJspb: !1,
                cttAuthInfo: q
            }],
            sizeLimit: 1E3
        }) : jk().extractMatchingEntries({
            isJspb: !1,
            cttAuthInfo: q
        }), d.length > 0 && l.set(q,
            d), (T("web_fp_via_jspb_and_json") && c.writeThenSend || !T("web_fp_via_jspb_and_json")) && delete ik[q];
        zk(l, k, a, b, c, !1, g)
    }
}

function yk(a = !1, b = 200) {
    const c = () => {
            wk({
                writeThenSend: !0
            }, void 0, a, b)
        },
        d = vk(a, b);
    var e = d === bk || d === ak ? 5E3 : Tj;
    T("web_gel_timeout_cap") && !d.h && (e = xk(() => {
        c()
    }, e), d.h = e);
    Bk(d.i);
    e = S("LOGGING_BATCH_TIMEOUT", wg("web_gel_debounce_ms", 1E4));
    T("shorten_initial_gel_batch_timeout") && dk && (e = Sj);
    e = xk(() => {
        wg("gel_min_batch_size") > 0 ? jk().getSequenceCount({
            cttAuthInfo: void 0,
            isJspb: a,
            tier: b
        }) >= Vj && c() : c()
    }, e);
    d.i = e
}

function zk(a, b, c, d, e = {}, f, g) {
    const k = Math.round(W());
    let h = a.size;
    const l = Dk(g);
    for (const [n, m] of a) {
        a = n;
        g = m;
        const q = Ca({
            context: Di(b.config_ || Ci())
        });
        if (!ia(g) && !T("throw_err_when_logevent_malformed_killswitch")) {
            d();
            break
        }
        q.events = g;
        (g = gk[a]) && Ek(q, a, g);
        delete gk[a];
        const p = a === "visitorOnlyApprovedKey";
        Fk(q, k, p);
        Gk(e);
        const u = P => {
            T("start_client_gcf") && bh.h(() => r(function*() {
                yield Hk(P)
            }));
            h--;
            h || c()
        };
        let y = 0;
        const D = () => {
            y++;
            if (e.bypassNetworkless && y === 1) try {
                cj(b, l, q, Ik({
                    writeThenSend: !0
                }, p, u, D, f)), dk = !1
            } catch (P) {
                ig(P), d()
            }
            h--;
            h || c()
        };
        try {
            cj(b, l, q, Ik(e, p, u, D, f)), dk = !1
        } catch (P) {
            ig(P), d()
        }
    }
}

function Ak(a, b, c, d = {}, e, f) {
    const g = Math.round(W()),
        k = {
            value: a.size
        };
    var h = new Map([...a]);
    for (const [P] of h) {
        var l = P,
            n = a.get(l);
        h = new If;
        var m = b.config_ || Ci(),
            q = new df,
            p = new Xe;
        J(p, 1, m.ma);
        J(p, 2, m.la);
        K(p, 16, m.Ea);
        J(p, 17, m.innertubeContextClientVersion);
        if (m.ca) {
            var u = m.ca,
                y = new Ve;
            u.coldConfigData && J(y, 1, u.coldConfigData);
            u.appInstallData && J(y, 6, u.appInstallData);
            u.coldHashData && J(y, 3, u.coldHashData);
            u.hotHashData && J(y, 5, u.hotHashData);
            I(p, Ve, 62, y)
        }
        if ((u = t.devicePixelRatio) && u != 1) {
            if (u != null && typeof u !==
                "number") throw Error(`Value of float/double field must be a number, found ${typeof u}: ${u}`);
            Gd(p, 65, u)
        }
        u = xg();
        u !== "" && J(p, 54, u);
        u = yg();
        if (u.length > 0) {
            y = new $e;
            for (let G = 0; G < u.length; G++) {
                const qa = new Ye;
                J(qa, 1, u[G].key);
                Ld(qa, 2, Ze, fd(u[G].value));
                Ud(y, 15, Ye, qa)
            }
            I(q, $e, 5, y)
        }
        Ei(q);
        Fi(m, p);
        T("start_client_gcf") && Gi(p);
        S("DELEGATED_SESSION_ID") && !T("pageid_as_header_web") && (m = new cf, J(m, 3, S("DELEGATED_SESSION_ID")));
        !T("fill_delegate_context_in_gel_killswitch") && (u = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) &&
            (y = Pd(q, cf, 3) || new cf, m = q, u = J(y, 18, u), I(m, cf, 3, u));
        m = p;
        u = S("DEVICE", "");
        for (const [G, qa] of Object.entries(pg(u))) u = G, y = qa, u === "cbrand" ? J(m, 12, y) : u === "cmodel" ? J(m, 13, y) : u === "cbr" ? J(m, 87, y) : u === "cbrver" ? J(m, 88, y) : u === "cos" ? J(m, 18, y) : u === "cosver" ? J(m, 19, y) : u === "cplatform" && K(m, 42, Ug(y));
        q.j(p);
        I(h, df, 1, q);
        if (p = hk[l]) a: {
            if (Xd(p, 1)) q = 1;
            else if (p.getPlaylistId()) q = 2;
            else break a;I(h, Hf, 4, p);p = Pd(h, df, 1) || new df;m = Pd(p, cf, 3) || new cf;u = new bf;J(u, 2, l);K(u, 1, q);Ud(m, 12, bf, u);I(p, cf, 3, m)
        }
        delete hk[l];
        l = l ===
            "visitorOnlyApprovedKey";
        Jk() || $d(h, 2, g);
        !l && (q = S("EVENT_ID")) && (p = Kk(), m = new Gf, J(m, 1, q), $d(m, 2, p), I(h, Gf, 5, m));
        Gk(d);
        if (T("jspb_serialize_with_worker")) {
            if (!Xi)
                if (q = S("WORKER_SERIALIZATION_URL")) {
                    if (q = q.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue) {
                        if (ra === void 0)
                            if (p = null, (m = t.trustedTypes) && m.createPolicy) {
                                try {
                                    p = m.createPolicy("goog#html", {
                                        createHTML: na,
                                        createScript: na,
                                        createScriptURL: na
                                    })
                                } catch (G) {
                                    t.console && t.console.error(G.message)
                                }
                                ra = p
                            } else ra = p;
                        q = (p = ra) ? p.createScriptURL(q) : q;
                        q = new va(q, wa)
                    } else q = null;
                    Xi = q
                } else Xi = null;
            q = Xi || void 0;
            Wi || q === void 0 || (Wi = new Worker(q instanceof va && q.constructor === va ? q.h : "type_error:TrustedResourceUrl", void 0));
            if ((q = Wi) && d.writeThenSend) {
                fk.set(ek, {
                    client: b,
                    resolve: c,
                    networklessOptions: d,
                    isIsolated: e,
                    useVSSEndpoint: f,
                    dangerousLogToVisitorSession: l,
                    requestsOutstanding: k
                });
                q.postMessage({
                    op: "gelBatchToSerialize",
                    batchRequest: be(h),
                    clientEvents: n,
                    key: ek
                });
                ek++;
                break
            }
        }
        if (n) {
            q = [];
            for (p = 0; p < n.length; p++) try {
                q.push(new O(n[p]))
            } catch (G) {
                ig(new Pf("Transport failed to deserialize " +
                    String(n[p])))
            }
            n = q
        } else n = [];
        for (const G of n) Ud(h, 3, O, G);
        n = {
            startTime: W(),
            ticks: {},
            infos: {}
        };
        try {
            ae = !0;
            var D = JSON.stringify(be(h), td)
        } finally {
            ae = !1
        }
        h = D;
        n.ticks.geljspc = W();
        T("log_jspb_serialize_latency") && Math.random() < .001 && Pi("meta_logging_csi_event", {
            timerName: "gel_jspb_serialize",
            kc: n
        });
        Lk(h, b, c, d, e, f, l, k)
    }
}

function Lk(a, b, c, d = {}, e, f, g, k = {
    value: 0
}) {
    f = Dk(f);
    d = Ik(d, g, h => {
        T("start_client_gcf") && bh.h(() => r(function*() {
            yield Hk(h)
        }));
        k.value--;
        k.value || c()
    }, () => {
        k.value--;
        k.value || c()
    }, e);
    d.headers["Content-Type"] = "application/json+protobuf";
    d.postBodyFormat = "JSPB";
    d.postBody = a;
    cj(b, f, "", d);
    dk = !1
}

function Gk(a) {
    T("always_send_and_write") && (a.writeThenSend = !1)
}

function Ik(a, b, c, d, e) {
    a = {
        retry: !0,
        onSuccess: c,
        onError: d,
        networklessOptions: a,
        dangerousLogToVisitorSession: b,
        Nb: !!e,
        headers: {},
        postBodyFormat: "",
        postBody: "",
        compress: T("compress_gel") || T("compress_gel_lr")
    };
    Jk() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(W())));
    return a
}

function Fk(a, b, c) {
    Jk() || (a.requestTimeMs = String(b));
    T("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c && (b = S("EVENT_ID")) && (c = Kk(), a.serializedClientEventId = {
        serializedEventId: b,
        clientCounter: String(c)
    })
}

function Kk() {
    let a = S("BATCH_CLIENT_COUNTER") || 0;
    a || (a = Math.floor(Math.random() * Uj / 2));
    a++;
    a > Uj && (a = 1);
    R("BATCH_CLIENT_COUNTER", a);
    return a
}

function Ek(a, b, c) {
    let d;
    if (c.videoId) d = "VIDEO";
    else if (c.playlistId) d = "PLAYLIST";
    else return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{
        token: b,
        scope: d
    }]
}

function lk() {
    var a;
    (a = v("yt.logging.transport.enableScrapingForTest")) || (a = vg("il_payload_scraping"), a = (a !== void 0 ? String(a) : "") !== "enable_il_payload_scraping");
    a || (Mj = [], w("yt.logging.transport.enableScrapingForTest", !0), w("yt.logging.transport.scrapedPayloadsForTesting", Mj), w("yt.logging.transport.payloadToScrape", "visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")), w("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
        w("yt.logging.transport.scrapeClientEvent", !0))
}

function Jk() {
    return T("use_request_time_ms_header") || T("lr_use_request_time_ms_header")
}

function xk(a, b) {
    return T("transport_use_scheduler") === !1 ? sg(a, b) : T("logging_avoid_blocking_during_navigation") || T("lr_logging_avoid_blocking_during_navigation") ? Wg(() => {
        Jj().currentState === "none" ? a() : Jj().install({
            none: {
                callback: a
            }
        })
    }, b) : Wg(a, b)
}

function Bk(a) {
    T("transport_use_scheduler") ? bh.T(a) : window.clearTimeout(a)
}

function Hk(a) {
    return r(function*() {
        var b, c = a == null ? void 0 : (b = a.responseContext) == null ? void 0 : b.globalConfigGroup;
        b = Rj(c, Qe);
        const d = c == null ? void 0 : c.hotHashData,
            e = Rj(c, Pe);
        c = c == null ? void 0 : c.coldHashData;
        const f = qj().resolve(new ij);
        f && (d && (b ? yield yi(f, d, b): yield yi(f, d)), c && (e ? yield zi(f, c, e): yield zi(f, c)))
    })
}

function vk(a, b = 200) {
    return a ? b === 300 ? bk : Zj : b === 300 ? ak : Yj
}

function ok(a) {
    if (T("enable_web_tiered_gel")) {
        a = Yi[a || ""];
        var b, c;
        if (qj().resolve(new ij) == null) var d = void 0;
        else {
            var e = (d = v("yt.gcf.config.hotConfigGroup")) != null ? d : S("RAW_HOT_CONFIG_GROUP");
            d = e == null ? void 0 : (b = e.loggingHotConfig) == null ? void 0 : (c = b.eventLoggingConfig) == null ? void 0 : c.payloadPolicies
        }
        if (b = d)
            for (c = 0; c < b.length; c++)
                if (b[c].payloadNumber === a) return b[c]
    }
}

function nk(a) {
    a = Object.keys(a);
    for (const b of a)
        if (Yi[b]) return b
}

function pk(a) {
    switch (a) {
        case "DELAYED_EVENT_TIER_UNSPECIFIED":
            return 0;
        case "DELAYED_EVENT_TIER_DEFAULT":
            return 100;
        case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":
            return 200;
        case "DELAYED_EVENT_TIER_FAST":
            return 300;
        case "DELAYED_EVENT_TIER_IMMEDIATE":
            return 400;
        default:
            return 200
    }
}

function sk(a) {
    return a === "gelDebuggingEvent"
}

function Dk(a = !1) {
    return a && T("vss_through_gel_video_stats") ? "video_stats" : "log_event"
};
const Mk = t.ytLoggingGelSequenceIdObj_ || {};

function Nk(a, b, c, d = {}) {
    const e = {},
        f = Math.round(d.timestamp || W());
    e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
    e[a] = b;
    a = fj();
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    d.sequenceGroup && !T("web_gel_sequence_info_killswitch") && (a = e.context, b = d.sequenceGroup, b = {
        index: Ok(b),
        groupKey: b
    }, a.sequence = b, d.endOfSequence && delete Mk[d.sequenceGroup]);
    (d.sendIsolatedPayload ? qk : kk)({
        endpoint: "log_event",
        payload: e,
        cttAuthInfo: d.cttAuthInfo,
        dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
    }, c)
}

function Pk(a = !1) {
    wk(void 0, void 0, a)
}

function Ok(a) {
    Mk[a] = a in Mk ? Mk[a] + 1 : 0;
    return Mk[a]
};
let Qk = [];

function Y(a, b, c = {}) {
    let d = dj;
    S("ytLoggingEventsDefaultDisabled", !1) && dj === dj && (d = null);
    T("web_all_payloads_via_jspb") && !c.timestamp && (c.lact = fj(), c.timestamp = W());
    Nk(a, b, d, c)
};
const Rk = t.ytLoggingGelSequenceIdObj_ || {};

function Sk(a, b, c, d = {}) {
    var e = Math.round(d.timestamp || W());
    $d(b, 1, e < Number.MAX_SAFE_INTEGER ? e : 0);
    e = new Df;
    if (d.lact) $d(e, 1, isFinite(d.lact) ? d.lact : -1);
    else if (d.timestamp) $d(e, 1, -1);
    else {
        var f = fj();
        $d(e, 1, isFinite(f) ? f : -1)
    }
    if (d.sequenceGroup && !T("web_gel_sequence_info_killswitch")) {
        f = d.sequenceGroup;
        const g = Ok(f),
            k = new Cf;
        $d(k, 2, g);
        J(k, 1, f);
        I(e, Cf, 3, k);
        d.endOfSequence && delete Rk[d.sequenceGroup]
    }
    I(b, Df, 33, e);
    (d.sendIsolatedPayload ? uk : tk)(a, {
        endpoint: "log_event",
        payload: b,
        cttAuthInfo: d.cttAuthInfo,
        dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
    }, c)
};

function Tk(a, b, c = {}) {
    let d = !1;
    S("ytLoggingEventsDefaultDisabled", !1) && (d = !0);
    Sk(a, b, d ? null : dj, c)
};

function Uk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
    Td(d, Af, 72, Ef, a);
    c ? Sk("visualElementShown", d, c, b) : Tk("visualElementShown", d, b)
}

function Vk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
    Td(d, zf, 73, Ef, a);
    c ? Sk("visualElementHidden", d, c, b) : Tk("visualElementHidden", d, b)
}

function Wk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
    Td(d, yf, 78, Ef, a);
    c ? Sk("visualElementGestured", d, c, b) : Tk("visualElementGestured", d, b)
}

function Xk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
    Td(d, Bf, 208, Ef, a);
    c ? Sk("visualElementStateChanged", d, c, b) : Tk("visualElementStateChanged", d, b)
}

function Yk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
    Td(d, vf, 156, Ef, a);
    c ? Sk("screenCreated", d, c, b) : Tk("screenCreated", d, b)
}

function Zk(a, b, c) {
    const d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
    Td(d, xf, 215, Ef, a);
    c ? Sk("visualElementAttached", d, c, b) : Tk("visualElementAttached", d, b)
};
var $k = new Set,
    al = 0,
    bl = 0,
    cl = 0,
    dl = [];
const el = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

function fl(a) {
    gl(a)
}

function hl(a) {
    gl(a, "WARNING")
}

function gl(a, b = "ERROR") {
    var c = {};
    c.name = S("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = S("INNERTUBE_CONTEXT_CLIENT_VERSION");
    il(a, c, b)
}

function il(a, b, c = "ERROR") {
    if (a) {
        a.hasOwnProperty("level") && a.level && (c = a.level);
        if (T("console_log_js_exceptions")) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            a.hasOwnProperty("args") && d.push(`Error args: ${JSON.stringify(a.args)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(al >= 5)) {
            d = dl;
            var e = Ha(a);
            const m = e.message || "Unknown Error",
                q = e.name || "UnknownError";
            var f = e.stack || a.i || "Not available";
            if (f.startsWith(`${q}: ${m}`)) {
                var g = f.split("\n");
                g.shift();
                f = g.join("\n")
            }
            g = e.lineNumber || "Not available";
            e = e.fileName || "Not available";
            let p = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var k = 0; k < a.args.length && !(p = Ng(a.args[k], `params.${k}`, b, p), p >= 500); k++);
            else if (a.hasOwnProperty("params") && a.params) {
                const u = a.params;
                if (typeof a.params === "object")
                    for (k in u) {
                        if (!u[k]) continue;
                        const y = `params.${k}`,
                            D = Pg(u[k]);
                        b[y] = D;
                        p +=
                            y.length + D.length;
                        if (p > 500) break
                    } else b.params = Pg(u)
            }
            if (d.length)
                for (k = 0; k < d.length && !(p = Ng(d[k], `params.context.${k}`, b, p), p >= 500); k++);
            navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
            b = {
                message: m,
                name: q,
                lineNumber: g,
                fileName: e,
                stack: f,
                params: b,
                sampleWeight: 1
            };
            d = Number(a.columnNumber);
            isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
            if (a.level === "IGNORED") var h = 0;
            else a: {
                a = Gg();
                for (h of a.H)
                    if (b.message && b.message.match(h.Ia)) {
                        h = h.weight;
                        break a
                    }
                for (var l of a.G)
                    if (l.callback(b)) {
                        h =
                            l.weight;
                        break a
                    }
                h = 1
            }
            b.sampleWeight = h;
            h = b;
            for (var n of Dg)
                if (n.X[h.name]) {
                    l = n.X[h.name];
                    for (const u of l)
                        if (l = h.message.match(u.u)) {
                            h.params["params.error.original"] = l[0];
                            a = u.groups;
                            b = {};
                            for (d = 0; d < a.length; d++) b[a[d]] = l[d + 1], h.params[`params.error.${a[d]}`] = l[d + 1];
                            h.message = n.ea(b);
                            break
                        }
                }
            h.params || (h.params = {});
            n = Gg();
            h.params["params.errorServiceSignature"] = `msg=${n.H.length}&cb=${n.G.length}`;
            h.params["params.serviceWorker"] = "true";
            t.document && t.document.querySelectorAll && (h.params["params.fscripts"] =
                String(document.querySelectorAll("script:not([nonce])").length));
            ua("sample").constructor !== sa && (h.params["params.fconst"] = "true");
            window.yterr && typeof window.yterr === "function" && window.yterr(h);
            h.sampleWeight === 0 || $k.has(h.message) || jl(h, c)
        }
    }
}

function jl(a, b = "ERROR") {
    if (b === "ERROR") {
        Kg.B("handleError", a);
        if (T("record_app_crashed_web") && cl === 0 && a.sampleWeight === 1)
            if (cl++, T("errors_via_jspb")) {
                var c = new of ;
                c = K(c, 1, 1);
                if (!T("report_client_error_with_app_crash_ks")) {
                    var d = new nf;
                    var e = new mf;
                    var f = new lf;
                    var g = new kf;
                    g = J(g, 1, a.message);
                    f = I(f, kf, 3, g);
                    e = I(e, lf, 5, f);
                    d = I(d, mf, 9, e);
                    I(c, nf, 4, d)
                }
                d = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
                Td(d, of , 20, Ef, c);
                Tk("appCrashed", d)
            } else c = {
                    appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                }, T("report_client_error_with_app_crash_ks") ||
                (c.systemHealth = {
                    crashData: {
                        clientError: {
                            logMessage: {
                                message: a.message
                            }
                        }
                    }
                }), Y("appCrashed", c);
        bl++
    } else b === "WARNING" && Kg.B("handleWarning", a);
    a: {
        if (T("errors_via_jspb")) {
            if (kl()) var k = void 0;
            else {
                c = new gf;
                J(c, 1, a.stack);
                a.fileName && J(c, 4, a.fileName);
                var h = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
                h.length !== 0 && (h.length !== 1 || isNaN(Number(h[0])) ? h.length !== 2 || isNaN(Number(h[0])) || isNaN(Number(h[1])) || (Zd(c, 2, Number(h[0])), Zd(c, 3, Number(h[1]))) : Zd(c, 2, Number(h[0])));
                h = new kf;
                J(h,
                    1, a.message);
                J(h, 3, a.name);
                Zd(h, 6, a.sampleWeight);
                b === "ERROR" ? K(h, 2, 2) : b === "WARNING" ? K(h, 2, 1) : K(h, 2, 0);
                var l = new hf;
                Gd(l, 1, !0);
                Td(l, gf, 3, jf, c);
                c = new ff;
                J(c, 3, window.location.href);
                d = S("FEXP_EXPERIMENTS", []);
                for (f = 0; f < d.length; f++) {
                    g = c.o;
                    e = d[f];
                    var n = C(g);
                    Sc(n);
                    g = Jd(g, n, 5, 2);
                    n = B(g);
                    e = dd(e, !!(4 & n) && !!(4096 & n));
                    g.push(e)
                }
                d = dg();
                if (!eg() && d)
                    for (var m of Object.keys(d)) e = new ef, J(e, 1, m), J(e, 2, String(d[m])), Ud(c, 4, ef, e);
                if (m = a.params)
                    for (k of Object.keys(m)) d = new ef, J(d, 1, `client.${k}`), J(d, 2, String(m[k])),
                        Ud(c, 4, ef, d);
                m = S("SERVER_NAME");
                k = S("SERVER_VERSION");
                m && k && (d = new ef, J(d, 1, "server.name"), J(d, 2, m), Ud(c, 4, ef, d), m = new ef, J(m, 1, "server.version"), J(m, 2, k), Ud(c, 4, ef, m));
                k = new lf;
                I(k, ff, 1, c);
                I(k, hf, 2, l);
                I(k, kf, 3, h)
            }
            if (!k) break a;
            m = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
            Td(m, lf, 163, Ef, k);
            Tk("clientError", m)
        } else {
            k = {};
            if (kl()) k = void 0;
            else {
                c = {
                    stackTrace: a.stack
                };
                a.fileName && (c.filename = a.fileName);
                m = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
                m.length !== 0 && (m.length !== 1 || isNaN(Number(m[0])) ?
                    m.length !== 2 || isNaN(Number(m[0])) || isNaN(Number(m[1])) || (c.lineNumber = Number(m[0]), c.columnNumber = Number(m[1])) : c.lineNumber = Number(m[0]));
                m = {
                    level: "ERROR_LEVEL_UNKNOWN",
                    message: a.message,
                    errorClassName: a.name,
                    sampleWeight: a.sampleWeight
                };
                b === "ERROR" ? m.level = "ERROR_LEVEL_ERROR" : b === "WARNING" && (m.level = "ERROR_LEVEL_WARNNING");
                c = {
                    isObfuscated: !0,
                    browserStackInfo: c
                };
                k.pageUrl = window.location.href;
                k.kvPairs = [];
                S("FEXP_EXPERIMENTS") && (k.experimentIds = S("FEXP_EXPERIMENTS"));
                d = dg();
                if (!eg() && d)
                    for (l of Object.keys(d)) k.kvPairs.push({
                        key: l,
                        value: String(d[l])
                    });
                if (l = a.params)
                    for (h of Object.keys(l)) k.kvPairs.push({
                        key: `client.${h}`,
                        value: String(l[h])
                    });
                h = S("SERVER_NAME");
                l = S("SERVER_VERSION");
                h && l && (k.kvPairs.push({
                    key: "server.name",
                    value: h
                }), k.kvPairs.push({
                    key: "server.version",
                    value: l
                }));
                k = {
                    errorMetadata: k,
                    stackTrace: c,
                    logMessage: m
                }
            }
            if (!k) break a;
            Y("clientError", k)
        }
        if (b === "ERROR" || T("errors_flush_gel_always_killswitch")) b: {
            if (T("web_fp_via_jspb")) {
                b = Qk;
                Qk = [];
                if (b)
                    for (const q of b) Nk(q.P, q.payload, dj, q.options);
                Pk(!0);
                if (!T("web_fp_via_jspb_and_json")) break b
            }
            Pk()
        }
    }
    try {
        $k.add(a.message)
    } catch (q) {}
    al++
}

function kl() {
    for (const a of el) {
        const b = Ua();
        if (b && b.toLowerCase().indexOf(a.toLowerCase()) >= 0) return !0
    }
    return !1
}

function ll(a, ...b) {
    a.args || (a.args = []);
    a.args.push(...b)
};

function ml(a) {
    return r(function*() {
        var b = yield t.fetch(a.i);
        if (b.status !== 200) return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n")) return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if (b[c][0] === "yt.sw.adr") {
                    b = new Zf(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}

function nl(a = !1) {
    const b = ol.h;
    return r(function*() {
        if (a || !b.h) b.h = ml(b).then(b.j).catch(c => {
            delete b.h;
            gl(c)
        });
        return b.h
    })
}
var ol = class {
    constructor() {
        this.i = pl("/sw.js_data")
    }
    j(a) {
        const b = Pd(a, Yf, 2);
        if (b) {
            var c = Wd(b, 5);
            c && (t.__SAPISID = c);
            Vd(b, 10) != null ? R("EOM_VISITOR_DATA", Wd(b, 10)) : Vd(b, 7) != null && R("VISITOR_DATA", Wd(b, 7));
            if (cd(Dd(b, 4)) != null) {
                c = String;
                var d = cd(Dd(b, 4));
                R("SESSION_INDEX", c(d != null ? d : 0))
            }
            Vd(b, 8) != null && R("DELEGATED_SESSION_ID", Wd(b, 8));
            Vd(b, 11) != null && R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", Wd(b, 11))
        }
        return a
    }
};

function ql(a, b) {
    b.encryptedTokenJarContents && (a.h[b.encryptedTokenJarContents] = b, typeof b.expirationSeconds === "string" && setTimeout(() => {
        delete a.h[b.encryptedTokenJarContents]
    }, Number(b.expirationSeconds) * 1E3))
}
var rl = class {
    constructor() {
        this.h = {}
    }
    handleResponse(a, b) {
        if (!b) throw Error("request needs to be passed into ConsistencyService");
        let c, d;
        b = ((c = b.I.context) == null ? void 0 : (d = c.request) == null ? void 0 : d.consistencyTokenJars) || [];
        let e;
        if (a = (e = a.responseContext) == null ? void 0 : e.consistencyTokenJar) {
            for (const f of b) delete this.h[f.encryptedTokenJarContents];
            ql(this, a)
        }
    }
};
let sl = Date.now().toString();

function tl() {
    if (window.crypto && window.crypto.getRandomValues) try {
        var a = Array(16),
            b = new Uint8Array(16);
        window.crypto.getRandomValues(b);
        for (var c = 0; c < a.length; c++) a[c] = b[c];
        return a
    } catch (d) {}
    a = Array(16);
    for (b = 0; b < 16; b++) {
        c = Date.now();
        for (let d = 0; d < c % 23; d++) a[b] = Math.random();
        a[b] = Math.floor(Math.random() * 256)
    }
    if (sl)
        for (b = 1, c = 0; c < sl.length; c++) a[b % 16] = a[b % 16] ^ a[(b - 1) % 16] / 4 ^ sl.charCodeAt(c), b++;
    return a
};
let ul = t.ytLoggingDocDocumentNonce_;
if (!ul) {
    const a = tl(),
        b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    ul = b.join("")
}
var vl = ul;
var wl = {
    Ua: 0,
    Ra: 1,
    Ta: 2,
    zb: 3,
    Va: 4,
    Jb: 5,
    Ab: 6,
    Gb: 7,
    Eb: 8,
    Fb: 9,
    0: "DEFAULT",
    1: "CHAT",
    2: "CONVERSATIONS",
    3: "MINIPLAYER",
    4: "DIALOG",
    5: "VOZ",
    6: "MUSIC_WATCH_TABS",
    7: "SHARE",
    8: "PUSH_NOTIFICATIONS",
    9: "RICH_GRID_WATCH"
};
let xl = 1;

function yl(a) {
    return new zl({
        trackingParams: a
    })
}

function Al(a) {
    const b = xl++;
    return new zl({
        veType: a,
        veCounter: b,
        elementIndex: void 0,
        dataElement: void 0,
        youtubeData: void 0,
        jspbYoutubeData: void 0,
        loggingDirectives: void 0
    })
}
var zl = class {
    constructor(a) {
        this.h = a
    }
    getAsJson() {
        const a = {};
        this.h.trackingParams !== void 0 ? a.trackingParams = this.h.trackingParams : (a.veType = this.h.veType, this.h.veCounter !== void 0 && (a.veCounter = this.h.veCounter), this.h.elementIndex !== void 0 && (a.elementIndex = this.h.elementIndex));
        this.h.dataElement !== void 0 && (a.dataElement = this.h.dataElement.getAsJson());
        this.h.youtubeData !== void 0 && (a.youtubeData = this.h.youtubeData);
        this.h.isCounterfactual && (a.isCounterfactual = !0);
        return a
    }
    getAsJspb() {
        const a = new H;
        this.h.trackingParams !== void 0 ? a.setTrackingParams(this.h.trackingParams) : (this.h.veType !== void 0 && Zd(a, 2, this.h.veType), this.h.veCounter !== void 0 && Zd(a, 6, this.h.veCounter), this.h.elementIndex !== void 0 && Zd(a, 3, this.h.elementIndex), this.h.isCounterfactual && Gd(a, 5, !0));
        if (this.h.dataElement !== void 0) {
            var b = this.h.dataElement.getAsJspb();
            I(a, H, 7, b)
        }
        this.h.youtubeData !== void 0 && I(a, Ue, 8, this.h.jspbYoutubeData);
        return a
    }
    toString() {
        return JSON.stringify(this.getAsJson())
    }
    isClientVe() {
        return !this.h.trackingParams &&
            !!this.h.veType
    }
    getLoggingDirectives() {
        return this.h.loggingDirectives
    }
};

function Bl(a = 0) {
    return S("client-screen-nonce-store", {})[a]
}

function Cl(a, b = 0) {
    let c = S("client-screen-nonce-store");
    c || (c = {}, R("client-screen-nonce-store", c));
    c[b] = a
}

function Dl(a = 0) {
    return a === 0 ? "ROOT_VE_TYPE" : `${"ROOT_VE_TYPE"}.${a}`
}

function El(a = 0) {
    return S(Dl(a))
}

function Fl(a = 0) {
    return (a = El(a)) ? new zl({
        veType: a,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    }) : null
}

function Gl() {
    let a = S("csn-to-ctt-auth-info");
    a || (a = {}, R("csn-to-ctt-auth-info", a));
    return a
}

function Hl() {
    return Object.values(S("client-screen-nonce-store", {})).filter(a => a !== void 0)
}

function Il(a = 0) {
    a = Bl(a);
    if (!a && !S("USE_CSN_FALLBACK", !0)) return null;
    a || (a = "UNDEFINED_CSN");
    return a ? a : null
}

function Jl(a) {
    for (const b of Object.values(wl))
        if (Il(b) === a) return !0;
    return !1
}

function Kl(a, b, c) {
    const d = Gl();
    (c = Il(c)) && delete d[c];
    b && (d[a] = b)
}

function Ll(a) {
    return Gl()[a]
}

function Ml(a, b, c = 0, d) {
    if (a !== Bl(c) || b !== S(Dl(c)))
        if (Kl(a, d, c), Cl(a, c), R(Dl(c), b), b = () => {
                setTimeout(() => {
                    if (a)
                        if (T("web_time_via_jspb")) {
                            const e = new pf;
                            J(e, 1, vl);
                            J(e, 2, a);
                            const f = T("jspb_sparse_encoded_pivot") ? new O([{}]) : new O;
                            Td(f, pf, 111, Ef, e);
                            Tk("foregroundHeartbeatScreenAssociated", f)
                        } else Y("foregroundHeartbeatScreenAssociated", {
                            clientDocumentNonce: vl,
                            clientScreenNonce: a
                        })
                }, 0)
            }, "requestAnimationFrame" in window) try {
            window.requestAnimationFrame(b)
        } catch (e) {
            b()
        } else b()
};

function Nl() {
    var a = S("INNERTUBE_CONTEXT");
    if (!a) return gl(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {};
    a = Ca(a);
    T("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
    a.client || (a.client = {});
    var b = a.client;
    b.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var c = xg();
    c ? b.experimentsToken = c : delete b.experimentsToken;
    rl.h || (rl.h = new rl);
    b = rl.h.h;
    c = [];
    let d = 0;
    for (var e in b) c[d++] = b[e];
    a.request = Object.assign({}, a.request, {
        consistencyTokenJars: c
    });
    a.user = Object.assign({}, a.user);
    if (e = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) a.user.serializedDelegationContext = e;
    return a
};

function Ol(a) {
    var b = a;
    if (a = S("INNERTUBE_HOST_OVERRIDE")) {
        a = String(a);
        var c = String,
            d = b.match(La);
        b = d[5];
        var e = d[6];
        d = d[7];
        var f = "";
        b && (f += b);
        e && (f += "?" + e);
        d && (f += "#" + d);
        b = a + c(f)
    }
    return b
};

function Pl(a) {
    const b = {
        "Content-Type": "application/json"
    };
    S("EOM_VISITOR_DATA") ? b["X-Goog-EOM-Visitor-Id"] = S("EOM_VISITOR_DATA") : S("VISITOR_DATA") && (b["X-Goog-Visitor-Id"] = S("VISITOR_DATA"));
    b["X-Youtube-Bootstrap-Logged-In"] = S("LOGGED_IN", !1);
    S("DEBUG_SETTINGS_METADATA") && (b["X-Debug-Settings-Metadata"] = S("DEBUG_SETTINGS_METADATA"));
    a !== "cors" && ((a = S("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = S("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a =
        S("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a), (a = S("DOMAIN_ADMIN_STATE")) && (b["X-Youtube-Domain-Admin-State"] = a));
    return b
};
var Ql = class {
    constructor() {
        this.h = {}
    }
    get(a) {
        if (Object.prototype.hasOwnProperty.call(this.h, a)) return this.h[a]
    }
    set(a, b) {
        this.h[a] = b
    }
    remove(a) {
        delete this.h[a]
    }
};
new class {
    constructor() {
        this.mappings = new Ql
    }
    get(a) {
        a: {
            var b = this.mappings.get(a.toString());
            switch (b.type) {
                case "mapping":
                    a = b.value;
                    break a;
                case "factory":
                    b = b.value();
                    this.mappings.set(a.toString(), {
                        type: "mapping",
                        value: b
                    });
                    a = b;
                    break a;
                default:
                    a = Fa(b, void 0)
            }
        }
        return a
    }
};
var Rl = class {},
    Sl = class extends Rl {};
const Tl = {
    GET_DATASYNC_IDS: function(a) {
        return () => new a
    }(class extends Sl {})
};
class Ki extends Ii {
    constructor(a) {
        super(arguments);
        this.csn = a
    }
}
const Si = new Ji,
    Ul = [];
let Wl = Vl,
    Xl = 0;
const Yl = new Map,
    Zl = new Map,
    $l = new Map;

function am(a, b, c, d, e, f, g, k) {
    const h = Wl(),
        l = new zl({
            veType: b,
            youtubeData: f,
            jspbYoutubeData: void 0
        });
    f = bm({}, h);
    e && (f.cttAuthInfo = e);
    var n = () => {
        hl(new Pf("newScreen() parent element does not have a VE - rootVe", b))
    };
    if (T("il_via_jspb")) {
        e = uf((new vf).h(h), l.getAsJspb());
        c && c.visualElement ? (n = new tf, c.clientScreenNonce && J(n, 2, c.clientScreenNonce), sf(n, c.visualElement.getAsJspb()), g && K(n, 4, Ff[g]), I(e, tf, 5, n)) : c && n();
        d && J(e, 3, d);
        if (T("expectation_logging") && k && k.screenCreatedLoggingExpectations) {
            c = new Te;
            k = k.screenCreatedLoggingExpectations.expectedParentScreens || [];
            for (var m of k) m.screenVeType && (k = Re(new Se, m.screenVeType), Ud(c, 1, Se, k));
            I(e, Te, 7, c)
        }
        Yk(e, f, a)
    } else m = {
            csn: h,
            pageVe: l.getAsJson()
        }, T("expectation_logging") &&
        k && k.screenCreatedLoggingExpectations && (m.screenCreatedLoggingExpectations = k.screenCreatedLoggingExpectations), c && c.visualElement ? (m.implicitGesture = {
            parentCsn: c.clientScreenNonce,
            gesturedVe: c.visualElement.getAsJson()
        }, g && (m.implicitGesture.gestureType = g)) : c && n(), d && (m.cloneCsn = d), a ? Nk("screenCreated", m, a, f) : Y("screenCreated", m, f);
    Pi(Si, new Ki(h));
    Yl.clear();
    Zl.clear();
    $l.clear();
    return h
}

function cm(a, b, c, d, e = !1) {
    dm(a, b, c, [d], e)
}

function dm(a, b, c, d, e = !1) {
    const f = bm({
        cttAuthInfo: Ll(b) || void 0
    }, b);
    for (const k of d) {
        var g = k.getAsJson();
        (Ba(g) || !g.trackingParams && !g.veType) && hl(Error("Child VE logged with no data"));
        if (T("no_client_ve_attach_unless_shown")) {
            const h = em(k, b);
            if (g.veType && !Zl.has(h) && !$l.has(h) && !e) {
                if (!T("il_attach_cache_limit") || Yl.size < 1E3) {
                    Yl.set(h, [a, b, c, k]);
                    return
                }
                T("il_attach_cache_limit") && Yl.size > 1E3 && hl(new Pf("IL Attach cache exceeded limit"))
            }
            g = em(c, b);
            Yl.has(g) ? fm(c, b) : $l.set(g, !0)
        }
    }
    d = d.filter(k => {
        k.csn !==
            b ? (k.csn = b, k = !0) : k = !1;
        return k
    });
    if (T("il_via_jspb")) {
        const k = wf((new xf).h(b), c.getAsJspb());
        ya(d, h => {
            h = h.getAsJspb();
            Ud(k, 3, H, h)
        });
        b === "UNDEFINED_CSN" ? Z("visualElementAttached", f, void 0, k) : Zk(k, f, a)
    } else c = {
        csn: b,
        parentVe: c.getAsJson(),
        childVes: ya(d, k => k.getAsJson())
    }, b === "UNDEFINED_CSN" ? Z("visualElementAttached", f, c) : a ? Nk("visualElementAttached", c, a, f) : Y("visualElementAttached", c, f)
}

function gm(a, b, c, d, e, f) {
    hm(a, b, c, e, f)
}

function hm(a, b, c, d, e) {
    im(c, b);
    const f = bm({
        cttAuthInfo: Ll(b) || void 0
    }, b);
    T("il_via_jspb") ? (d = (new Af).h(b), c = c.getAsJspb(), c = I(d, H, 2, c), c = K(c, 4, 1), e && I(c, rf, 3, e), b === "UNDEFINED_CSN" ? Z("visualElementShown", f, void 0, c) : Uk(c, f, a)) : (e = {
        csn: b,
        ve: c.getAsJson(),
        eventType: 1
    }, d && (e.clientData = d), b === "UNDEFINED_CSN" ? Z("visualElementShown", f, e) : a ? Nk("visualElementShown", e, a, f) : Y("visualElementShown", e, f))
}

function jm(a, b, c, d = !1) {
    var e = d ? 16 : 8;
    const f = bm({
        cttAuthInfo: Ll(b) || void 0,
        endOfSequence: d
    }, b);
    T("il_via_jspb") ? (e = (new zf).h(b), c = c.getAsJspb(), c = I(e, H, 2, c), K(c, 4, d ? 16 : 8), b === "UNDEFINED_CSN" ? Z("visualElementHidden", f, void 0, c) : Vk(c, f, a)) : (d = {
        csn: b,
        ve: c.getAsJson(),
        eventType: e
    }, b === "UNDEFINED_CSN" ? Z("visualElementHidden", f, d) : a ? Nk("visualElementHidden", d, a, f) : Y("visualElementHidden", d, f))
}

function km(a, b, c, d) {
    var e = void 0;
    im(c, b);
    e = e || "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";
    const f = bm({
        cttAuthInfo: Ll(b) || void 0
    }, b);
    T("il_via_jspb") ? (d = (new yf).h(b), c = c.getAsJspb(), c = I(d, H, 2, c), K(c, 4, Ff[e]), b === "UNDEFINED_CSN" ? Z("visualElementGestured", f, void 0, c) : Wk(c, f, a)) : (e = {
        csn: b,
        ve: c.getAsJson(),
        gestureType: e
    }, d && (e.clientData = d), b === "UNDEFINED_CSN" ? Z("visualElementGestured", f, e) : a ? Nk("visualElementGestured", e, a, f) : Y("visualElementGestured", e, f))
}

function Vl() {
    let a;
    a = tl();
    const b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    return b.join("")
}

function Z(a, b, c, d) {
    Ul.push({
        P: a,
        payload: c,
        J: d,
        options: b
    });
    Xl || (Xl = Ti())
}

function Ui(a) {
    if (Ul) {
        for (const b of Ul)
            if (T("il_via_jspb") && b.J) switch (b.J.h(a.csn), b.P) {
                case "screenCreated":
                    Yk(b.J, b.options);
                    break;
                case "visualElementAttached":
                    Zk(b.J, b.options);
                    break;
                case "visualElementShown":
                    Uk(b.J, b.options);
                    break;
                case "visualElementHidden":
                    Vk(b.J, b.options);
                    break;
                case "visualElementGestured":
                    Wk(b.J, b.options);
                    break;
                case "visualElementStateChanged":
                    Xk(b.J, b.options);
                    break;
                default:
                    hl(new Pf("flushQueue unable to map payloadName to JSPB setter"))
            } else b.payload && (b.payload.csn =
                a.csn, Y(b.P, b.payload, b.options));
        Ul.length = 0
    }
    Xl = 0
}

function em(a, b) {
    return `${a.getAsJson().veType}${a.getAsJson().veCounter}${b}`
}

function im(a, b) {
    if (T("no_client_ve_attach_unless_shown")) {
        var c = em(a, b);
        Zl.set(c, !0);
        fm(a, b)
    }
}

function fm(a, b) {
    a = em(a, b);
    Yl.has(a) && (b = Yl.get(a) || [], cm(b[0], b[1], b[2], b[3], !0), Yl.delete(a))
}

function bm(a, b) {
    T("log_sequence_info_on_gel_web") && (a.sequenceGroup = b);
    return a
};
w("ytLoggingLatencyUsageStats_", t.ytLoggingLatencyUsageStats_ || {});
const lm = window;
class mm {
    constructor() {
        this.timing = {};
        this.clearResourceTimings = () => {};
        this.webkitClearResourceTimings = () => {};
        this.mozClearResourceTimings = () => {};
        this.msClearResourceTimings = () => {};
        this.oClearResourceTimings = () => {}
    }
}
var nm = lm.performance || lm.mozPerformance || lm.msPerformance || lm.webkitPerformance || new mm;
la(nm.clearResourceTimings || nm.webkitClearResourceTimings || nm.mozClearResourceTimings || nm.msClearResourceTimings || nm.oClearResourceTimings || cb, nm);
const om = ["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse", "type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];

function pm(a) {
    var b = {
            Pb: {}
        },
        c = Qg();
    if (lj.h !== void 0) {
        const d = lj.h;
        a = [b !== d.m, a !== d.l, c !== d.j, !1, !1, !1, void 0 !== d.i];
        if (a.some(e => e)) throw new Pf("InnerTubeTransportService is already initialized", a);
    } else lj.h = new lj(b, a, c)
}

function qm(a, b) {
    return r(function*() {
        var c;
        const d = a == null ? void 0 : (c = a.ha) == null ? void 0 : c.sessionIndex;
        c = yield rb(Sg(0, {
            sessionIndex: d
        }));
        return Promise.resolve(Object.assign({}, Pl(b), c))
    })
}

function rm(a, b, c, d = () => {}) {
    return r(function*() {
        var e;
        if (b == null ? 0 : (e = b.I) == null ? 0 : e.context) {
            e = b.I.context;
            for (var f of []) yield f.Xb(e)
        }
        var g;
        if ((g = a.i) == null ? 0 : g.fc(b.input, b.I)) return yield a.i.Tb(b.input, b.I);
        var k;
        if ((g = (k = b.config) == null ? void 0 : k.ac) && a.h.has(g)) var h = a.h.get(g);
        else {
            k = JSON.stringify(b.I);
            let q;
            f = (q = (h = b.R) == null ? void 0 : h.headers) != null ? q : {};
            b.R = Object.assign({}, b.R, {
                headers: Object.assign({}, f, c)
            });
            h = Object.assign({}, b.R);
            b.R.method === "POST" && (h = Object.assign({}, h, {
                body: k
            }));
            h = a.l.fetch(b.input, h, b.config);
            g && a.h.set(g, h)
        }
        h = yield h;
        var l;
        let n;
        if (h && "error" in h && ((l = h) == null ? 0 : (n = l.error) == null ? 0 : n.details)) {
            l = h.error.details;
            for (const q of l)(l = q["@type"]) && om.indexOf(l) > -1 && (delete q["@type"], h = q)
        }
        g && a.h.has(g) && a.h.delete(g);
        let m;
        !h && ((m = a.i) == null ? 0 : m.Ob(b.input, b.I)) && (h = yield a.i.Sb(b.input, b.I));
        d();
        return h || void 0
    })
}

function sm(a, b, c) {
    var d = {
        ha: {
            identity: Tg
        }
    };
    let e = () => {};
    b.context || (b.context = Nl());
    return new z(f => r(function*() {
        var g = Ol(c);
        g = rg(g) ? "same-origin" : "cors";
        if (a.j.Na) {
            var k, h = d == null ? void 0 : (k = d.ha) == null ? void 0 : k.sessionIndex;
            k = Sg(0, {
                sessionIndex: h
            });
            g = Object.assign({}, Pl(g), k)
        } else g = yield qm(d, g);
        k = Ol(c);
        h = {};
        T("web_api_key_killswitch") && (S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") && (g == null ? 0 : g.Authorization) || (h.key = S("INNERTUBE_API_KEY")));
        T("json_condensed_response") && (h.prettyPrint = "false");
        k = qg(k, h || {}, !1);
        h = {
            method: "POST",
            mode: rg(k) ?
                "same-origin" : "cors",
            credentials: rg(k) ? "same-origin" : "include"
        };
        var l = {};
        const n = {};
        for (const m of Object.keys(l)) l[m] && (n[m] = l[m]);
        Object.keys(n).length > 0 && (h.headers = n);
        f(rm(a, {
            input: k,
            R: h,
            I: b,
            config: d
        }, g, e))
    }))
}
var lj = class {
    constructor(a, b, c) {
        this.m = a;
        this.l = b;
        this.j = c;
        this.i = void 0;
        this.h = new Map;
        a.ga || (a.ga = {});
        a.ga = Object.assign({}, Tl, a.ga)
    }
};
var kj = new hj;
let tm;

function um() {
    if (!tm) {
        const a = qj();
        pm({
            fetch: (b, c) => rb(fetch(new Request(b, c)))
        });
        jj(a);
        tm = a.resolve(kj)
    }
    return tm
};

function vm(a) {
    return r(function*() {
        yield wm();
        hl(a)
    })
}

function xm(a) {
    return r(function*() {
        yield wm();
        gl(a)
    })
}

function ym(a) {
    r(function*() {
        var b = yield hi();
        b ? yield bj(a, b): (yield nl(), b = {
            timestamp: a.timestamp
        }, b = a.appShellAssetLoadReport ? {
            P: "appShellAssetLoadReport",
            payload: a.appShellAssetLoadReport,
            options: b
        } : a.clientError ? {
            P: "clientError",
            payload: a.clientError,
            options: b
        } : void 0, b && Y(b.P, b.payload))
    })
}

function wm() {
    return r(function*() {
        try {
            yield nl()
        } catch (a) {}
    })
};
var zm = Symbol("trackingData"),
    Am = new WeakMap;

function Bm() {
    Cm.h || (Cm.h = new Cm);
    return Cm.h
}

function Dm(a, b, c) {
    const d = Il(c);
    return a.csn === null || d === a.csn || c ? d : (a = new Pf("VisibilityLogger called before newScreen", {
        caller: b.tagName,
        previous_csn: a.csn,
        current_csn: d
    }), hl(a), null)
}

function Em(a) {
    let b;
    return !((b = Fm(a)) == null || !b.loggingDirectives)
}

function Gm(a) {
    a = Fm(a);
    return Math.floor(Number(a && a.loggingDirectives && a.loggingDirectives.visibility && a.loggingDirectives.visibility.types || "")) || 1
}

function Fm(a) {
    let b, c = a.data || ((b = a.props) == null ? void 0 : b.data);
    if (!c && a.isWebComponentWrapper && T("read_data_from_web_component_wrapper")) {
        let d;
        c = (d = Am.get(a)) == null ? void 0 : d[zm]
    }
    return c
}
var Cm = class {
    constructor() {
        this.m = new Set;
        this.l = new Set;
        this.h = new Map;
        this.client = void 0;
        this.csn = null
    }
    j(a) {
        this.client = a
    }
    s() {
        this.clear();
        this.csn = Il()
    }
    clear() {
        this.m.clear();
        this.l.clear();
        this.h.clear();
        this.csn = null
    }
    B(a, b, c) {
        b = this.i(a);
        var d = a.visualElement ? a.visualElement : b,
            e = this.m.has(d),
            f = this.h.get(d);
        this.m.add(d);
        this.h.set(d, !0);
        a.impressionLog && !e && a.impressionLog();
        if (b || a.visualElement)
            if (c = Dm(this, a, c)) {
                var g = Em(a);
                if (Gm(a) || g) {
                    d = a.visualElement ? a.visualElement : yl(b);
                    var k = a.interactionLoggingClientData;
                    b = a.interactionLoggingClientDataJspbType;
                    g || e ? Gm(a) & 4 ? f || (a = this.client, im(d, c), e = bm({
                        cttAuthInfo: Ll(c) || void 0
                    }, c), T("il_via_jspb") ? (f = (new Af).h(c), d = d.getAsJspb(), f = I(f, H, 2, d), f = K(f, 4, 4), b && I(f, rf, 3, b), c === "UNDEFINED_CSN" ? Z("visualElementShown", e, void 0, f) : Uk(f, e, a)) : (b = {
                        csn: c,
                        ve: d.getAsJson(),
                        eventType: 4
                    }, k && (b.clientData = k), c === "UNDEFINED_CSN" ? Z("visualElementShown", e, b) : a ? Nk("visualElementShown", b, a, e) : Y("visualElementShown", b, e))) : Gm(a) & 1 && !e && hm(this.client, c, d, k, b) : hm(this.client, c, d, k, b)
                }
            }
    }
    v(a,
        b, c) {
        var d = this.i(a),
            e = a.visualElement ? a.visualElement : d;
        b = this.l.has(e);
        const f = this.h.get(e);
        this.l.add(e);
        this.h.set(e, !1);
        if (f === !1) return !0;
        if (!d && !a.visualElement) return !1;
        c = Dm(this, a, c);
        if (!c || !Gm(a) && Em(a)) return !1;
        d = a.visualElement ? a.visualElement : yl(d);
        Gm(a) & 8 ? jm(this.client, c, d) : Gm(a) & 2 && !b && (a = this.client, b = bm({
            cttAuthInfo: Ll(c) || void 0
        }, c), T("il_via_jspb") ? (e = (new zf).h(c), d = d.getAsJspb(), d = I(e, H, 2, d), d = K(d, 4, 2), c === "UNDEFINED_CSN" ? Z("visualElementHidden", b, void 0, d) : Vk(d, b, a)) : (d = {
            csn: c,
            ve: d.getAsJson(),
            eventType: 2
        }, c === "UNDEFINED_CSN" ? Z("visualElementHidden", b, d) : a ? Nk("visualElementHidden", d, a, b) : Y("visualElementHidden", d, b)));
        return !0
    }
    i(a) {
        const b = Fm(a);
        let c, d;
        if (T("il_use_view_model_logging_context") && (b == null ? 0 : (c = b.context) == null ? 0 : (d = c.loggingContext) == null ? 0 : d.loggingDirectives)) return b.context.loggingContext.loggingDirectives.trackingParams || "";
        let e, f;
        if (b == null ? 0 : (e = b.rendererContext) == null ? 0 : (f = e.loggingContext) == null ? 0 : f.loggingDirectives) return b.rendererContext.loggingContext.loggingDirectives.trackingParams ||
            "";
        if (b == null ? 0 : b.loggingDirectives) return b.loggingDirectives.trackingParams || "";
        let g;
        return ((g = a.veContainer) == null ? 0 : g.trackingParams) ? a.veContainer.trackingParams : (b == null ? void 0 : b.trackingParams) || ""
    }
};

function Hm() {
    Im.h || (Im.h = new Im)
}

function Jm(a) {
    Hm();
    hg(Bm().B).bind(Bm())(a, void 0, 8)
}

function Km(a) {
    Hm();
    hg(Bm().v).bind(Bm())(a, void 0, 8)
}
var Im = class {
    j(a) {
        hg(Bm().j).bind(Bm())(a)
    }
    clear() {
        hg(Bm().clear).bind(Bm())()
    }
};

function Lm() {
    Mm.h || (Mm.h = new Mm);
    return Mm.h
}

function Nm(a, b, c = {}) {
    a.i.add(c.layer || 0);
    a.m = () => {
        Om(a, b, c);
        const d = Fl(c.layer);
        if (d) {
            for (const e of a.B) Pm(a, e[0], e[1] || d, c.layer);
            for (const e of a.F) Qm(a, e[0], e[1])
        }
    };
    Il(c.layer) || a.m();
    if (c.ja)
        for (const d of c.ja) Rm(a, d, c.layer);
    else gl(Error("Delayed screen needs a data promise."))
}

function Om(a, b, c = {}) {
    var d = void 0;
    c.layer || (c.layer = 0);
    d = c.Ja !== void 0 ? c.Ja : c.layer;
    const e = Il(d);
    d = Fl(d);
    let f;
    d && (c.parentCsn !== void 0 ? f = {
        clientScreenNonce: c.parentCsn,
        visualElement: d
    } : e && e !== "UNDEFINED_CSN" && (f = {
        clientScreenNonce: e,
        visualElement: d
    }));
    let g;
    const k = S("EVENT_ID");
    e === "UNDEFINED_CSN" && k && (g = {
        servletData: {
            serializedServletEventId: k
        }
    });
    T("combine_ve_grafts") && e && Sm(a, e);
    T("no_client_ve_attach_unless_shown") && d && e && fm(d, e);
    let h;
    try {
        h = am(a.client, b, f, c.ia, c.cttAuthInfo, g, c.Rb, c.loggingExpectations)
    } catch (m) {
        ll(m, {
            cc: b,
            rootVe: d,
            Wb: void 0,
            Qb: e,
            Vb: f,
            ia: c.ia
        });
        gl(m);
        return
    }
    Ml(h, b, c.layer, c.cttAuthInfo);
    e && e !== "UNDEFINED_CSN" && d && !Jl(e) && jm(a.client, e, d, !0);
    a.h[a.h.length - 1] && !a.h[a.h.length - 1].csn && (a.h[a.h.length - 1].csn = h || "");
    Hm();
    hg(Bm().s).bind(Bm())();
    const l = Fl(c.layer);
    e && e !== "UNDEFINED_CSN" && l && (T("web_mark_root_visible") || T("music_web_mark_root_visible")) && hg(gm)(void 0, h, l, void 0, void 0, void 0);
    a.i.delete(c.layer || 0);
    a.m = void 0;
    let n;
    (n = a.aa.get(c.layer)) == null || n.forEach((m, q) => {
        m ? Pm(a, q, m, c.layer) :
            l && Pm(a, q, l, c.layer)
    });
    Tm(a)
}

function Um(a) {
    var b = 28631,
        c = {
            layer: 8
        };
    hg(() => {
        [28631].includes(b) || (hl(new Pf("createClientScreen() called with a non-page VE", b)), b = 83769);
        c.isHistoryNavigation || a.h.push({
            rootVe: b,
            key: c.key || ""
        });
        a.B = [];
        a.F = [];
        c.ja ? Nm(a, b, c) : Om(a, b, c)
    })()
}

function Rm(a, b, c = 0) {
    hg(() => {
        b.then(d => {
            a.i.has(c) && a.m && a.m();
            const e = Il(c),
                f = Fl(c);
            if (e && f) {
                var g;
                (d == null ? 0 : (g = d.response) == null ? 0 : g.trackingParams) && cm(a.client, e, f, yl(d.response.trackingParams));
                var k;
                (d == null ? 0 : (k = d.playerResponse) == null ? 0 : k.trackingParams) && cm(a.client, e, f, yl(d.playerResponse.trackingParams))
            }
        })
    })()
}

function Pm(a, b, c, d = 0) {
    hg(() => {
        if (a.i.has(d)) return a.B.push([b, c]), !0;
        const e = Il(d),
            f = c || Fl(d);
        if (e && f) {
            if (T("combine_ve_grafts")) {
                const g = a.l.get(f.toString());
                g ? g.push(b) : (a.v.set(f.toString(), f), a.l.set(f.toString(), [b]));
                a.M || (a.M = Wg(() => {
                    Sm(a, e)
                }, 1200))
            } else cm(a.client, e, f, b);
            return !0
        }
        return !1
    })()
}

function Vm(a, b) {
    return hg(() => {
        const c = yl(b);
        Pm(a, c, void 0, 8);
        return c
    })()
}

function Sm(a, b) {
    if (b === void 0) {
        const c = Hl();
        for (let d = 0; d < c.length; d++) c[d] !== void 0 && Sm(a, c[d])
    } else a.l.forEach((c, d) => {
        (d = a.v.get(d)) && dm(a.client, b, d, c)
    }), a.l.clear(), a.v.clear(), a.M = void 0
}

function Wm(a, b, c = 0) {
    (c = Il(c)) && km(a.client, c, b)
}

function Xm(a, b, c, d = 0) {
    if (!b) return !1;
    d = Il(d);
    if (!d) return !1;
    km(a.client, d, yl(b), c);
    return !0
}

function Ym(a, b) {
    const c = b.getScreenLayer && b.getScreenLayer();
    b.visualElement ? Wm(a, b.visualElement, c) : (Hm(), b = hg(Bm().i).bind(Bm())(b), Xm(a, b, void 0, c))
}

function Qm(a, b, c, d = 0) {
    const e = Il(d);
    d = b || Fl(d);
    if (e && d)
        if (a = a.client, b = bm({
                cttAuthInfo: Ll(e) || void 0
            }, e), T("il_via_jspb")) {
            const f = new Bf;
            f.h(e);
            c = f;
            d = d.getAsJspb();
            I(c, H, 2, d);
            e === "UNDEFINED_CSN" ? Z("visualElementStateChanged", b, void 0, f) : Xk(f, b, a)
        } else c = {
            csn: e,
            ve: d.getAsJson(),
            clientData: c
        }, e === "UNDEFINED_CSN" ? Z("visualElementStateChanged", b, c) : a ? Nk("visualElementStateChanged", c, a, b) : Y("visualElementStateChanged", c, b)
}

function Tm(a) {
    for (var b = 0; b < a.s.length; b++) {
        var c = a.s[b];
        try {
            c()
        } catch (d) {
            gl(d)
        }
    }
    a.s.length = 0;
    for (b = 0; b < a.K.length; b++) {
        c = a.K[b];
        try {
            c()
        } catch (d) {
            gl(d)
        }
    }
}
var Mm = class {
    constructor() {
        this.B = [];
        this.F = [];
        this.h = [];
        this.s = [];
        this.K = [];
        this.l = new Map;
        this.v = new Map;
        this.i = new Set;
        this.aa = new Map
    }
    j(a) {
        this.client = a
    }
    clickCommand(a, b, c = 0) {
        return Xm(this, a.clickTrackingParams, b, c)
    }
    stateChanged(a, b, c = 0) {
        this.visualElementStateChanged(yl(a), b, c)
    }
    visualElementStateChanged(a, b, c = 0) {
        c === 0 && this.i.has(c) ? this.F.push([a, b]) : Qm(this, a, b, c)
    }
};
const Zm = {
        granted: "GRANTED",
        denied: "DENIED",
        unknown: "UNKNOWN"
    },
    $m = RegExp("^(?:[a-z]+:)?//", "i");

function an(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    a === "notifications_register" ? (Q("IDToken", b), bn()) : a === "notifications_check_registration" && cn(b)
}

function dn() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a => {
        if (a)
            for (const b of a) b.postMessage({
                type: "update_unseen_notifications_count_signal"
            })
    })
}

function en(a) {
    const b = [];
    a.forEach(c => {
        b.push({
            key: c.key,
            value: c.value
        })
    });
    return b
}

function fn(a) {
    return r(function*() {
        const b = en(a.payload.chrome.extraUrlParams),
            c = {
                recipientId: a.recipientId,
                endpoint: a.payload.chrome.endpoint,
                extraUrlParams: b
            },
            d = Xf(Kf);
        return gn().then(e => sm(e, c, d).then(f => {
            f.json().then(g => g && g.endpointUrl ? hn(a, g.endpointUrl) : Promise.resolve()).catch(g => {
                xm(g);
                Promise.reject(g)
            })
        }))
    })
}

function jn(a, b) {
    var c = Il(8);
    if (c == null || !b) return a;
    a = $m.test(a) ? new URL(a) : new URL(a, self.registration.scope);
    a.searchParams.set("parentCsn", c);
    a.searchParams.set("parentTrackingParams", b);
    return a.toString()
}

function hn(a, b) {
    a.deviceId && Q("DeviceId", a.deviceId);
    a.timestampSec && Q("TimestampLowerBound", a.timestampSec);
    const c = a.payload.chrome,
        d = Lm();
    Um(d);
    var e;
    const f = (e = c.postedEndpoint) == null ? void 0 : e.clickTrackingParams;
    e = c.title;
    const g = {
        body: c.body,
        icon: c.iconUrl,
        data: {
            nav: jn(b, f),
            id: c.notificationId,
            attributionTag: c.attributionTag,
            clickEndpoint: c.clickEndpoint,
            postedEndpoint: c.postedEndpoint,
            clickTrackingParams: f,
            isDismissed: !0
        },
        tag: c.notificationTag || c.title + c.body + c.iconUrl,
        requireInteraction: !0
    };
    return self.registration.showNotification(e, g).then(() => {
        var k;
        ((k = g.data) == null ? 0 : k.postedEndpoint) && kn(g.data.postedEndpoint);
        let h;
        if ((h = g.data) == null ? 0 : h.clickTrackingParams) k = {
            screenLayer: 8,
            visualElement: Vm(d, g.data.clickTrackingParams)
        }, Jm(k);
        ln(a.displayCap)
    }).catch(() => {})
}

function kn(a) {
    if (!Rj(a, Jf)) return Promise.reject();
    const b = {
            serializedRecordNotificationInteractionsRequest: Rj(a, Jf).serializedInteractionsRequest
        },
        c = Xf(Lf);
    return gn().then(d => sm(d, b, c)).then(d => d)
}

function ln(a) {
    a !== -1 && self.registration.getNotifications().then(b => {
        for (let d = 0; d < b.length - a; d++) {
            b[d].data.isDismissed = !1;
            b[d].close();
            let e;
            if ((e = b[d].data) == null ? 0 : e.clickTrackingParams) {
                let f;
                var c = yl((f = b[d].data) == null ? void 0 : f.clickTrackingParams);
                const g = {
                        screenLayer: 8,
                        visualElement: c
                    },
                    k = Al(82046),
                    h = Lm();
                Pm(h, k, c, 8);
                c = {
                    screenLayer: 8,
                    visualElement: k
                };
                Jm(c);
                Ym(h, c);
                Km(g)
            }
        }
    })
}

function cn(a) {
    const b = [mn(a), Tf("RegistrationTimestamp").then(nn), on(), pn(), qn()];
    Promise.all(b).catch(() => {
        Q("IDToken", a);
        bn();
        return Promise.resolve()
    })
}

function nn(a) {
    return Date.now() - (a || 0) <= 9E7 ? Promise.resolve() : Promise.reject()
}

function mn(a) {
    return Tf("IDToken").then(b => a === b ? Promise.resolve() : Promise.reject())
}

function on() {
    return Tf("Permission").then(a => Notification.permission === a ? Promise.resolve() : Promise.reject())
}

function pn() {
    return Tf("Endpoint").then(a => rn().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function qn() {
    return Tf("application_server_key").then(a => sn().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function tn() {
    var a = Notification.permission;
    if (Zm[a]) return Zm[a]
}

function bn() {
    Q("RegistrationTimestamp", 0);
    Promise.all([rn(), un(), vn(), sn()]).then(([a, b, c, d]) => {
        b = b ? Nf(b) : null;
        c = c ? Nf(c) : null;
        d = d ? Lb(new Uint8Array(d), 4) : null;
        wn(a, b, c, d)
    }).catch(() => {
        wn()
    })
}

function wn(a = null, b = null, c = null, d = null) {
    Sf().then(e => {
        e && (Q("Endpoint", a), Q("P256dhKey", b), Q("AuthKey", c), Q("application_server_key", d), Q("Permission", Notification.permission), Promise.all([Tf("DeviceId"), Tf("NotificationsDisabled")]).then(([f, g]) => {
            if (f != null) var k = f;
            else {
                f = [];
                var h;
                k = k || Ne.length;
                for (h = 0; h < 256; h++) f[h] = Ne[0 | Math.random() * k];
                k = f.join("")
            }
            xn(k, a != null ? a : void 0, b != null ? b : void 0, c != null ? c : void 0, d != null ? d : void 0, g != null ? g : void 0)
        }))
    })
}

function xn(a, b, c, d, e, f) {
    r(function*() {
        const g = {
                notificationRegistration: {
                    chromeRegistration: {
                        deviceId: a,
                        pushParams: {
                            applicationServerKey: e,
                            authKey: d,
                            p256dhKey: c,
                            browserEndpoint: b
                        },
                        notificationsDisabledInApp: f,
                        permission: tn()
                    }
                }
            },
            k = Xf(Mf);
        return gn().then(h => sm(h, g, k).then(() => {
            Q("DeviceId", a);
            Q("RegistrationTimestamp", Date.now());
            Q("TimestampLowerBound", Date.now())
        }, l => {
            vm(l)
        }))
    })
}

function rn() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}

function un() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}

function vn() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}

function sn() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}

function gn() {
    return r(function*() {
        try {
            return yield nl(!0), um()
        } catch (a) {
            return yield vm(a), Promise.reject(a)
        }
    })
};
let yn = self.location.origin + "/";

function pl(a) {
    let b = typeof ServiceWorkerGlobalScope !== "undefined" && self instanceof ServiceWorkerGlobalScope ? Ge.registration.scope : yn;
    b.endsWith("/") && (b = b.slice(0, -1));
    return b + a
};
let zn = void 0;

function An(a) {
    return r(function*() {
        zn || (zn = yield a.open("yt-appshell-assets"));
        return zn
    })
}

function Bn(a, b) {
    return r(function*() {
        const c = yield An(a), d = b.map(e => Cn(c, e));
        return Promise.all(d)
    })
}

function Dn(a, b) {
    return r(function*() {
        let c;
        try {
            c = yield a.match(b, {
                cacheName: "yt-appshell-assets"
            })
        } catch (d) {}
        return c
    })
}

function En(a, b) {
    return r(function*() {
        const c = yield An(a), d = (yield c.keys()).filter(e => !b.includes(e.url)).map(e => c.delete(e));
        return Promise.all(d)
    })
}

function Fn(a, b, c) {
    return r(function*() {
        yield(yield An(a)).put(b, c)
    })
}

function Gn(a, b) {
    r(function*() {
        yield(yield An(a)).delete(b)
    })
}

function Cn(a, b) {
    return r(function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
};
var Hn = qi("yt-serviceworker-metadata", {
    O: {
        auth: {
            N: 1
        },
        ["resource-manifest-assets"]: {
            N: 2
        }
    },
    shared: !0,
    upgrade(a, b) {
        b(1) && Fh(a, "resource-manifest-assets");
        b(2) && Fh(a, "auth")
    },
    version: 2
});
let In = null;

function Jn(a) {
    return Yh(Hn(), a)
}

function Kn() {
    return r(function*() {
        const a = yield hi();
        if (a) return Ln.h || (Ln.h = new Ln(a)), Ln.h
    })
}

function Mn(a, b) {
    return r(function*() {
        yield X(yield Jn(a.token), ["resource-manifest-assets"], "readwrite", c => {
            const d = c.objectStore("resource-manifest-assets"),
                e = Date.now();
            return V(d.h.put(b, e)).then(() => {
                In = e;
                let f = !0;
                return Kh(d, {
                    query: IDBKeyRange.bound(0, Date.now()),
                    direction: "prev"
                }, g => f ? (f = !1, Th(g)) : d.delete(g.getKey()).then(() => Nh(g)))
            })
        })
    })
}

function Nn(a, b) {
    return r(function*() {
        let c = !1,
            d = 0;
        yield X(yield Jn(a.token), ["resource-manifest-assets"], "readonly", e => Kh(e.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, f => {
            if (f.cursor.value.includes(b)) c = !0;
            else return d += 1, Nh(f)
        }));
        return c ? d : -1
    })
}

function On(a) {
    return r(function*() {
        In || (yield X(yield Jn(a.token), ["resource-manifest-assets"], "readonly", b => Kh(b.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, c => {
            In = c.getKey()
        })));
        return In
    })
}
var Ln = class {
    constructor(a) {
        this.token = a
    }
};

function Pn() {
    return r(function*() {
        const a = yield hi();
        if (a) return Qn.h || (Qn.h = new Qn(a)), Qn.h
    })
}

function Rn(a, b) {
    return r(function*() {
        yield Hh(yield Jn(a.token), "auth", b, "shell_identifier_key")
    })
}

function Sn(a) {
    return r(function*() {
        return (yield(yield Jn(a.token)).get("auth", "shell_identifier_key")) || ""
    })
}

function Tn(a) {
    return r(function*() {
        yield(yield Jn(a.token)).clear("auth")
    })
}
var Qn = class {
    constructor(a) {
        this.token = a
    }
};

function Un() {
    r(function*() {
        const a = yield Pn();
        a && (yield Tn(a))
    })
};
var Vn = class extends L {
        constructor(a) {
            super(a)
        }
        hasUrl() {
            return Vd(this, 1) != null
        }
    },
    Wn = [0, ve];

function Xn(a) {
    var b;
    void 0 === Wc ? b = 2 : b = 2;
    a = a.o;
    const c = C(a);
    return Qd(a, c, Vn, 1, b, !1, !(2 & c))
}
var Yn = class extends L {
    constructor(a) {
        super(a)
    }
};
Yn.A = [1];
var Zn = function(a, b) {
    return (c, d) => {
        if (zc.length) {
            const f = zc.pop();
            uc(f, d);
            f.h.init(c, void 0, void 0, d);
            c = f
        } else c = new yc(c, d);
        try {
            const f = new a,
                g = f.o;
            de(b)(g, c);
            var e = f
        } finally {
            c.h.clear(), c.l = -1, c.i = -1, zc.length < 100 && zc.push(c)
        }
        return e
    }
}(Yn, [0,
    we, Wn
]);

function $n(a) {
    return r(function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(ao(b)) : Promise.reject(Error("No resource manifest header"))
    })
}

function ao(a) {
    return Xn(Zn(decodeURIComponent(a))).reduce((b, c) => {
        (c = Wd(c, 1)) && b.push(c);
        return b
    }, [])
};

function bo(a) {
    return r(function*() {
        const b = yield nl();
        if (b && Vd(b, 3) != null) {
            var c = yield Pn();
            c && (c = yield Sn(c), Vd(b, 3) !== c && (Gn(a.caches, a.h), Un()))
        }
    })
}

function co(a) {
    return r(function*() {
        let b, c;
        try {
            c = yield eo(a.i), b = yield $n(c), yield Bn(a.caches, b)
        } catch (d) {
            return Promise.reject(d)
        }
        try {
            yield fo(), yield Fn(a.caches, a.h, c)
        } catch (d) {
            return Promise.reject(d)
        }
        if (b) try {
            yield go(a, b, a.h)
        } catch (d) {}
        return Promise.resolve()
    })
}

function ho(a) {
    return r(function*() {
        yield bo(a);
        return co(a)
    })
}

function eo(a) {
    return r(function*() {
        try {
            return yield t.fetch(new Request(a))
        } catch (b) {
            return Promise.reject(b)
        }
    })
}

function fo() {
    return r(function*() {
        var a = yield nl();
        let b;
        a && Vd(a, 3) != null && (b = Wd(a, 3));
        return b ? (a = yield Pn()) ? Promise.resolve(Rn(a, b)) : Promise.reject(Error("Could not get AuthMonitor instance")) : Promise.reject(Error("Could not get datasync ID"))
    })
}

function go(a, b, c) {
    return r(function*() {
        const d = yield Kn();
        if (d) try {
            yield Mn(d, b)
        } catch (e) {
            yield vm(e)
        }
        b.push(c);
        try {
            yield En(a.caches, b)
        } catch (e) {
            yield vm(e)
        }
        return Promise.resolve()
    })
}

function io(a, b) {
    return r(function*() {
        return Dn(a.caches, b)
    })
}

function jo(a) {
    return r(function*() {
        return Dn(a.caches, a.h)
    })
}
var ko = class {
    constructor() {
        var a = self.caches;
        let b = pl("/app_shell");
        T("service_worker_forward_exp_params") && (b += self.location.search);
        var c = pl("/app_shell_home");
        this.caches = a;
        this.i = b;
        this.h = c
    }
};
var lo = class {
    constructor() {
        const a = this;
        this.stream = new ReadableStream({
            start(b) {
                a.close = () => void b.close();
                a.h = c => {
                    const d = c.getReader();
                    return d.read().then(function k({
                        done: f,
                        value: g
                    }) {
                        if (f) return Promise.resolve();
                        b.enqueue(g);
                        return d.read().then(k)
                    })
                };
                a.i = () => {
                    const c = (new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");
                    b.enqueue(c)
                }
            }
        })
    }
};

function mo(a, b) {
    return r(function*() {
        const c = b.request,
            d = yield io(a.h, c.url);
        if (d) return a.i && ym({
            appShellAssetLoadReport: {
                assetPath: c.url,
                cacheHit: !0
            },
            timestamp: W()
        }), d;
        no(a, c);
        return oo(b)
    })
}

function po(a, b) {
    return r(function*() {
        const c = yield qo(b);
        if (c.response && (c.response.ok || c.response.type === "opaqueredirect" || c.response.status === 429 || c.response.status === 303 || c.response.status >= 300 && c.response.status < 400)) return c.response;
        const d = yield jo(a.h);
        if (d) return ro(a), so(d, b);
        to(a);
        return c.response ? c.response : Promise.reject(c.error)
    })
}

function uo(a, b) {
    b = new URL(b);
    if (!a.config.va.includes(b.pathname)) return !1;
    if (!b.search) return !0;
    b = new URLSearchParams(b.search);
    for (const c of a.config.xa)
        if (a = b.get(c.key), c.value === void 0 || a === c.value)
            if (b.delete(c.key), !b.toString()) return !0;
    return !1
}

function vo(a, b) {
    return r(function*() {
        const c = yield jo(a.h);
        if (!c) return to(a), oo(b);
        ro(a);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d), !isNaN(d))) {
                d = Math.round(W() - d);
                break a
            }
            d = -1
        }
        if (!(d > -1 && d / 864E5 >= 7)) return so(c, b);
        d = yield qo(b);
        return d.response && d.response.ok ? d.response : so(c, b)
    })
}

function oo(a) {
    return Promise.resolve(a.preloadResponse).then(b => b && !wo(b) ? b : t.fetch(a.request))
}

function no(a, b) {
    if (a.i) {
        var c = {
            assetPath: b.url,
            cacheHit: !1
        };
        Kn().then(d => {
            if (d) {
                var e = On(d).then(f => {
                    f && (c.currentAppBundleTimestampSec = String(Math.floor(f / 1E3)))
                });
                d = Nn(d, b.url).then(f => {
                    c.appBundleVersionDiffCount = f
                });
                Promise.all([e, d]).catch(f => {
                    vm(f)
                }).finally(() => {
                    ym({
                        appShellAssetLoadReport: c,
                        timestamp: W()
                    })
                })
            } else ym({
                appShellAssetLoadReport: c,
                timestamp: W()
            })
        })
    }
}

function ro(a) {
    a.i && ym({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !0
        },
        timestamp: W()
    })
}

function to(a) {
    a.i && ym({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !1
        },
        timestamp: W()
    })
}

function so(a, b) {
    if (!T("sw_nav_preload_pbj")) return a;
    const c = new lo,
        d = c.h(a.body);
    Promise.resolve(b.preloadResponse).then(e => {
        if (!e || !wo(e)) throw Error("no pbj preload response available");
        d.then(() => c.h(e.body)).then(() => void c.close())
    }).catch(() => {
        d.then(() => {
            c.i();
            c.close()
        })
    });
    return new Response(c.stream, {
        status: a.status,
        statusText: a.statusText,
        headers: a.headers
    })
}

function qo(a) {
    return r(function*() {
        try {
            return {
                response: yield oo(a)
            }
        } catch (b) {
            return {
                error: b
            }
        }
    })
}

function wo(a) {
    return a.headers.get("x-navigation-preload-response-type") === "pbj"
}
var Fo = class {
    constructor() {
        var a = xo;
        var b = {
            Aa: yo,
            Ka: zo([Ao, /\/signin/, /\/logout/]),
            va: ["/", "/feed/downloads"],
            xa: Bo([{
                key: "feature",
                value: "ytca"
            }]),
            wa: Co(T("kevlar_sw_app_wide_fallback") ? Do : Eo)
        };
        this.h = a;
        this.config = b;
        a = wg("app_shell_asset_log_fraction");
        this.i = !0;
        a && (this.i = Math.random() < a)
    }
};
const Go = /^\/$/,
    Eo = [Go, /^\/feed\/downloads$/],
    Do = [Go, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/, /^\/channel\/\w*/];

function Co(a) {
    return new RegExp(a.map(b => b.source).join("|"))
}
const Ho = /^https:\/\/([\w-]*\.)*youtube\.com.*/;

function zo(a) {
    a = Co(a);
    return new RegExp(`${Ho.source}(${a.source})`)
}
const Io = Co([/\.css$/, /\.js$/, /\.ico$/, /\/ytmweb\/_\/js\//, /\/ytmweb\/_\/ss\//, /\/kabuki\/_\/js\//, /\/kabuki\/_\/ss\//, /\/ytmainappweb\/_\/ss\//]),
    yo = new RegExp(`${Ho.source}(${Io.source})`),
    Ao = /purge_shell=1/;

function Bo(a = []) {
    const b = [];
    for (const c of ug) b.push({
        key: c
    });
    for (const c of a) b.push(c);
    return b
}
zo([Ao]);
Bo();
var Ko = class {
    constructor() {
        var a = xo,
            b = Jo,
            c = self;
        if (t.URLPattern) {
            var d = [];
            T("service_worker_static_routing_exclude_embed") && d.push({
                condition: {
                    urlPattern: new URLPattern({
                        pathname: "/embed*"
                    })
                },
                source: "network"
            });
            T("service_worker_static_routing_exclude_innertube") && d.push({
                condition: {
                    urlPattern: new URLPattern({
                        pathname: "/youtubei/v1/*"
                    })
                },
                source: "network"
            })
        } else d = [];
        this.h = c;
        this.i = a;
        this.s = b;
        this.F = Of;
        this.j = d
    }
    init() {
        this.h.oninstall = this.v.bind(this);
        this.h.onactivate = this.l.bind(this);
        this.h.onfetch =
            this.m.bind(this);
        this.h.onmessage = this.B.bind(this)
    }
    v(a) {
        this.h.skipWaiting();
        if (T("service_worker_static_routing_registration") && this.j.length > 0 && a.addRoutes) try {
            a.addRoutes(this.j)
        } catch (c) {}
        const b = ho(this.i).catch(c => {
            vm(c);
            return Promise.resolve()
        });
        a.waitUntil(b)
    }
    l(a) {
        const b = [this.h.clients.claim()],
            c = this.h.registration;
        c.navigationPreload && (b.push(c.navigationPreload.enable()), T("sw_nav_preload_pbj") && b.push(c.navigationPreload.setHeaderValue("pbj")));
        a.waitUntil(Promise.all(b))
    }
    m(a) {
        const b = this;
        return r(function*() {
            var c = b.s,
                d = !!b.h.registration.navigationPreload;
            const e = a.request;
            if (c.config.Ka.test(e.url)) ol.h && (delete ol.h.h, t.__SAPISID = void 0, R("VISITOR_DATA", void 0), R("SESSION_INDEX", void 0), R("DELEGATED_SESSION_ID", void 0), R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
                void 0)), d = a.respondWith, c = c.h, Gn(c.caches, c.h), Un(), c = oo(a), d.call(a, c);
            else if (c.config.Aa.test(e.url)) a.respondWith(mo(c, a));
            else if (e.mode === "navigate") {
                const f = new URL(e.url);
                c.config.wa.test(f.pathname) ? a.respondWith(po(c, a)) : uo(c, e.url) ? a.respondWith(vo(c, a)) : d && a.respondWith(oo(a))
            }
        })
    }
    B(a) {
        const b = a.data;
        this.F.includes(b.type) ? an(a) : b.type === "refresh_shell" && co(this.i).catch(c => {
            vm(c)
        })
    }
};

function Lo() {
    let a = v("ytglobal.storage_");
    a || (a = new Mo, w("ytglobal.storage_", a));
    return a
}
var Mo = class {
    estimate() {
        return r(function*() {
            const a = navigator;
            let b;
            if ((b = a.storage) == null ? 0 : b.estimate) return a.storage.estimate();
            let c;
            if ((c = a.webkitTemporaryStorage) == null ? 0 : c.queryUsageAndQuota) return No()
        })
    }
};

function No() {
    const a = navigator;
    return new Promise((b, c) => {
        let d;
        (d = a.webkitTemporaryStorage) != null && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota((e, f) => {
            b({
                usage: e,
                quota: f
            })
        }, e => {
            c(e)
        }) : c(Error("webkitTemporaryStorage is not supported."))
    })
}
w("ytglobal.storageClass_", Mo);

function Oo(a, b) {
    Lo().estimate().then(c => {
        c = Object.assign({}, b, {
            isSw: self.document === void 0,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: Po(c == null ? void 0 : c.usage),
            deviceStorageQuotaMbytes: Po(c == null ? void 0 : c.quota)
        });
        a.h("idbQuotaExceeded", c)
    })
}
class Qo {
    constructor() {
        var a = Ro;
        this.handleError = So;
        this.h = a;
        this.i = !1;
        self.document === void 0 || self.addEventListener("beforeunload", () => {
            this.i = !0
        });
        this.j = Math.random() <= .2
    }
    U(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                T("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.h("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                T("idb_is_supported_completed_killswitch") || this.h("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                Oo(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.j && Math.random() <= .1 && this.h("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a = Object.assign({},
                    b, {
                        hasWindowUnloaded: this.i
                    }), this.h("idbTransactionAborted", a)
        }
    }
}

function Po(a) {
    return typeof a === "undefined" ? "-1" : String(Math.ceil(a / 1048576))
};
Jg(Gg(), {
    H: [{
        Ia: /Failed to fetch/,
        weight: 500
    }],
    G: []
});
({
    handleError: So = fl,
    U: Ro = Y
} = {
    handleError: xm,
    U: function(a, b) {
        return r(function*() {
            yield wm();
            Y(a, b)
        })
    }
});
var Ro, So;
for (dh = new Qo; ch.length > 0;) {
    const a = ch.shift();
    switch (a.type) {
        case "ERROR":
            dh.handleError(a.payload);
            break;
        case "EVENT":
            dh.U(a.eventType, a.payload)
    }
}
ol.h = new ol;
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data;
    b.isDismissed = !1;
    const c = self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    });
    c.then(d => {
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    });
    a.waitUntil(c);
    a.waitUntil(kn(b.clickEndpoint))
};
self.onnotificationclose = function(a) {
    var b = a.notification.data;
    if (b == null ? 0 : b.clickTrackingParams) {
        var c = yl(b.clickTrackingParams);
        a = {
            screenLayer: 8,
            visualElement: c
        };
        if (b.isDismissed) {
            const d = Al(74726);
            b = Lm();
            Pm(b, d, c, 8);
            c = {
                screenLayer: 8,
                visualElement: d
            };
            Jm(c);
            Ym(b, c)
        }
        Km(a)
    }
};
self.onpush = function(a) {
    a.waitUntil(Tf("NotificationsDisabled").then(b => {
        if (b) return Promise.resolve();
        if (a.data && a.data.text().length) try {
            return fn(a.data.json())
        } catch (c) {
            return Promise.resolve(c.message)
        }
        return Promise.resolve()
    }));
    a.waitUntil(dn())
};
self.onpushsubscriptionchange = function() {
    bn()
};
const xo = new ko,
    Jo = new Fo;
(new Ko).init();