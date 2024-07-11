(function(g) {
    var window = this;
    'use strict';
    var b8 = function(a) {
            g.pq(a, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ g.kb()).toString(36));
            return a
        },
        c8 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.Iga(a.C, b, c)
        },
        MDb = function(a) {
            if (a instanceof g.Dt) return a;
            if (typeof a.mm == "function") return a.mm(!1);
            if (g.bb(a)) {
                var b = 0,
                    c = new g.Dt;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.n2;
                        if (b in a) return g.Et(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        NDb = function(a, b, c) {
            if (g.bb(a)) g.Zb(a, b, c);
            else
                for (a = MDb(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        ODb = function(a, b) {
            var c = [];
            NDb(b, function(d) {
                try {
                    var e = g.dw.prototype.B.call(this, d, !0)
                } catch (f) {
                    if (f == "Storage: Invalid value was encountered") return;
                    throw f;
                }
                e === void 0 ? c.push(d) : g.Ila(e) && c.push(d)
            }, a);
            return c
        },
        PDb = function(a, b) {
            ODb(a, b).forEach(function(c) {
                g.dw.prototype.remove.call(this, c)
            }, a)
        },
        QDb = function(a) {
            if (a.ra) {
                if (a.ra.locationOverrideToken) return {
                    locationOverrideToken: a.ra.locationOverrideToken
                };
                if (a.ra.latitudeE7 != null && a.ra.longitudeE7 != null) return {
                    latitudeE7: a.ra.latitudeE7,
                    longitudeE7: a.ra.longitudeE7
                }
            }
            return null
        },
        RDb = function(a, b) {
            g.Eb(a, b) || a.push(b)
        },
        SDb = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        TDb = function(a, b) {
            return g.ed(a, b)
        },
        UDb = function(a) {
            try {
                return g.Ua.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        d8 = function(a) {
            if (g.Ua.JSON) try {
                return g.Ua.JSON.parse(a)
            } catch (b) {}
            return UDb(a)
        },
        VDb = function(a) {
            if (a.Hm && typeof a.Hm == "function") return a.Hm();
            if (typeof Map !== "undefined" && a instanceof Map || typeof Set !== "undefined" && a instanceof Set) return Array.from(a.values());
            if (typeof a === "string") return a.split("");
            if (g.bb(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return g.ad(a)
        },
        WDb = function(a) {
            if (a.Rn && typeof a.Rn == "function") return a.Rn();
            if (!a.Hm || typeof a.Hm != "function") {
                if (typeof Map !== "undefined" && a instanceof Map) return Array.from(a.keys());
                if (!(typeof Set !== "undefined" && a instanceof Set)) {
                    if (g.bb(a) || typeof a === "string") {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++) b.push(c);
                        return b
                    }
                    return g.bd(a)
                }
            }
        },
        XDb = function(a, b) {
            if (a.forEach && typeof a.forEach == "function") a.forEach(b, void 0);
            else if (g.bb(a) || typeof a === "string") Array.prototype.forEach.call(a, b, void 0);
            else
                for (var c = WDb(a), d = VDb(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        },
        YDb = function(a, b, c, d) {
            var e = new g.hq(null);
            a && g.iq(e, a);
            b && g.jq(e, b);
            c && g.kq(e, c);
            d && (e.B = d);
            return e
        },
        ZDb = function() {
            this.j = e8();
            this.j.Vj("/client_streamz/youtube/living_room/mdx/channel/opened", {
                yd: 3,
                xd: "channel_type"
            })
        },
        $Db = function(a, b) {
            a.j.gm("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        aEb = function() {
            this.j = e8();
            this.j.Vj("/client_streamz/youtube/living_room/mdx/channel/closed", {
                yd: 3,
                xd: "channel_type"
            })
        },
        bEb = function(a, b) {
            a.j.gm("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        cEb = function() {
            this.j = e8();
            this.j.Vj("/client_streamz/youtube/living_room/mdx/channel/message_received", {
                yd: 3,
                xd: "channel_type"
            })
        },
        dEb = function(a, b) {
            a.j.gm("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        eEb = function() {
            this.j = e8();
            this.j.Vj("/client_streamz/youtube/living_room/mdx/channel/error", {
                yd: 3,
                xd: "channel_type"
            })
        },
        fEb = function(a, b) {
            a.j.gm("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        gEb = function() {
            this.j = e8();
            this.j.Vj("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        hEb = function() {
            this.j = e8();
            this.j.Vj("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        iEb = function(a, b) {
            return new g.ila(a, b)
        },
        f8 = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        g8 = function(a, b) {
            this.B = {};
            this.j = [];
            this.Cv = this.size = 0;
            var c = arguments.length;
            if (c > 1) {
                if (c % 2) throw Error("Uneven number of arguments");
                for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
            } else if (a)
                if (a instanceof g8)
                    for (c = a.Rn(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
                else
                    for (d in a) this.set(d, a[d])
        },
        h8 = function(a) {
            if (a.size != a.j.length) {
                for (var b = 0, c = 0; b < a.j.length;) {
                    var d = a.j[b];
                    f8(a.B, d) && (a.j[c++] = d);
                    b++
                }
                a.j.length = c
            }
            if (a.size != a.j.length) {
                var e = {};
                for (c = b = 0; b < a.j.length;) d = a.j[b], f8(e, d) || (a.j[c++] = d, e[d] = 1), b++;
                a.j.length = c
            }
        },
        mEb = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.ownerObfuscatedGaiaId = this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g8;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE",
                this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.ownerObfuscatedGaiaId = a.ownerObfuscatedGaiaId || "", this.theme = a.theme || "u", jEb(this, a.capabilities || ""), kEb(this, a.compatibleSenderThemes || ""), lEb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType ||
                "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        jEb = function(a, b) {
            a.capabilities.clear();
            g.It(b.split(","), g.jb(TDb, nEb)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        kEb = function(a, b) {
            a.compatibleSenderThemes.clear();
            g.It(b.split(","), g.jb(TDb, oEb)).forEach(function(c) {
                a.compatibleSenderThemes.add(c)
            })
        },
        lEb = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        i8 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        j8 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        pEb = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        qEb = function(a) {
            return new i8(a)
        },
        rEb = function(a) {
            return Array.isArray(a) ? g.Wr(a, qEb) : []
        },
        k8 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        sEb = function(a) {
            return Array.isArray(a) ? "[" + g.Wr(a, k8).join(",") + "]" : "null"
        },
        tEb = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = Math.random() * 16 | 0;
                    return (a == "x" ? b : b & 3 | 8).toString(16)
                })
        },
        uEb = function(a) {
            return g.Wr(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        vEb = function(a, b) {
            return g.Cb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        l8 = function(a, b) {
            return g.Cb(a, function(c) {
                return j8(c, b)
            })
        },
        wEb = function() {
            var a = (0, g.vB)();
            a && PDb(a, a.j.mm(!0))
        },
        m8 = function() {
            var a = g.xB("yt-remote-connected-devices") || [];
            g.Sb(a);
            return a
        },
        xEb = function(a) {
            if (a.length == 0) return [];
            var b = a[0].indexOf("#"),
                c = b == -1 ? a[0] : a[0].substring(0, b);
            return g.Wr(a, function(d, e) {
                return e == 0 ? d : d.substring(c.length)
            })
        },
        yEb = function(a) {
            g.wB("yt-remote-connected-devices", a, 86400)
        },
        n8 = function() {
            if (zEb) return zEb;
            var a = g.xB("yt-remote-device-id");
            a || (a = tEb(), g.wB("yt-remote-device-id", a, 31536E3));
            for (var b = m8(), c = 1, d = a; g.Eb(b, d);) c++, d = a + "#" + c;
            return zEb = d
        },
        AEb = function() {
            var a = m8(),
                b = n8();
            g.zB() && g.Xb(a, b);
            a = xEb(a);
            if (a.length == 0) try {
                g.ara("remote_sid")
            } catch (c) {} else try {
                g.PA("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        BEb = function() {
            return g.xB("yt-remote-session-browser-channel")
        },
        CEb = function() {
            return g.xB("yt-remote-local-screens") || []
        },
        DEb = function() {
            g.wB("yt-remote-lounge-token-expiration", !0, 86400)
        },
        EEb = function(a) {
            a.length > 5 && (a = a.slice(a.length - 5));
            var b = g.Wr(CEb(), function(d) {
                    return d.loungeToken
                }),
                c = g.Wr(a, function(d) {
                    return d.loungeToken
                });
            g.Xr(c, function(d) {
                return !g.Eb(b, d)
            }) && DEb();
            g.wB("yt-remote-local-screens", a, 31536E3)
        },
        o8 = function(a) {
            a || (g.yB("yt-remote-session-screen-id"), g.yB("yt-remote-session-video-id"));
            AEb();
            a = m8();
            g.Gb(a, n8());
            yEb(a)
        },
        FEb = function() {
            if (!p8) {
                var a = g.iw();
                a && (p8 = new g.aw(a))
            }
        },
        GEb = function() {
            FEb();
            return p8 ? !!p8.get("yt-remote-use-staging-server") : !1
        },
        q8 = function(a, b) {
            g.nD[a] = !0;
            var c = g.lD();
            c && c.publish.apply(c, arguments);
            g.nD[a] = !1
        },
        HEb = function() {},
        e8 = function() {
            if (!r8) {
                r8 = new g.pg(new HEb);
                var a = g.FA("client_streamz_web_flush_count", -1);
                a !== -1 && (r8.C = a)
            }
            return r8
        },
        IEb = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        JEb = function(a) {
            return !!document.currentScript && (document.currentScript.src.indexOf("?" + a) != -1 || document.currentScript.src.indexOf("&" + a) != -1)
        },
        KEb = function() {
            return typeof window.__onGCastApiAvailable == "function" ? window.__onGCastApiAvailable : null
        },
        s8 = function(a) {
            a.length ? LEb(a.shift(), function() {
                s8(a)
            }) : MEb()
        },
        NEb = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        LEb = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.Ye(d, g.Ema(a));
            (document.head || document.documentElement).appendChild(d)
        },
        OEb = function() {
            var a = IEb(),
                b = [];
            if (a > 1) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        MEb = function() {
            var a = KEb();
            a && a(!1, "No cast extension found")
        },
        QEb = function() {
            if (PEb) {
                var a = 2,
                    b = KEb(),
                    c = function() {
                        a--;
                        a == 0 && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                LEb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", MEb, c)
            }
        },
        REb = function() {
            QEb();
            var a = OEb();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            s8(a)
        },
        TEb = function() {
            QEb();
            var a = OEb();
            a.push.apply(a, g.ra(SEb.map(NEb)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            s8(a)
        },
        t8 = function(a, b, c) {
            g.I.call(this);
            this.K = c != null ? (0, g.ib)(a, c) : a;
            this.Xi = b;
            this.G = (0, g.ib)(this.l5, this);
            this.j = !1;
            this.B = 0;
            this.C = this.rd = null;
            this.D = []
        },
        u8 = function(a, b, c) {
            g.I.call(this);
            this.D = c != null ? a.bind(c) : a;
            this.Xi = b;
            this.C = null;
            this.j = !1;
            this.B = 0;
            this.rd = null
        },
        UEb = function(a) {
            a.rd = g.ng(function() {
                a.rd = null;
                a.j && !a.B && (a.j = !1, UEb(a))
            }, a.Xi);
            var b = a.C;
            a.C = null;
            a.D.apply(null, b)
        },
        v8 = function() {},
        VEb = function() {
            g.yb.call(this, "p")
        },
        WEb = function() {
            g.yb.call(this, "o")
        },
        YEb = function() {
            return XEb = XEb || new g.Fd
        },
        ZEb = function(a) {
            g.yb.call(this, "serverreachability", a)
        },
        w8 = function(a) {
            var b = YEb();
            b.dispatchEvent(new ZEb(b, a))
        },
        $Eb = function(a) {
            g.yb.call(this, "statevent", a)
        },
        x8 = function(a) {
            var b = YEb();
            b.dispatchEvent(new $Eb(b, a))
        },
        aFb = function(a, b, c, d) {
            g.yb.call(this, "timingevent", a);
            this.size = b;
            this.retries = d
        },
        y8 = function(a, b) {
            if (typeof a !== "function") throw Error("Fn must not be null and must be a function");
            return g.Ua.setTimeout(function() {
                a()
            }, b)
        },
        z8 = function() {},
        A8 = function(a, b, c, d) {
            this.C = a;
            this.D = b;
            this.Ub = c;
            this.Qb = d || 1;
            this.Cb = new g.uq(this);
            this.ib = 45E3;
            this.Oa = null;
            this.K = !1;
            this.Y = this.eb = this.Z = this.Sa = this.Da = this.rb = this.ra = null;
            this.va = [];
            this.j = null;
            this.N = 0;
            this.G = this.Ha = null;
            this.Kb = -1;
            this.Ma = !1;
            this.Ya = 0;
            this.Xa = null;
            this.Lb = this.Wa = this.Ab = this.Ga = !1;
            this.B = new bFb
        },
        bFb = function() {
            this.C = null;
            this.j = "";
            this.B = !1
        },
        dFb = function(a, b, c) {
            a.Sa = 1;
            a.Z = b8(b.clone());
            a.Y = c;
            a.Ga = !0;
            cFb(a, null)
        },
        cFb = function(a, b) {
            a.Da = Date.now();
            B8(a);
            a.eb = a.Z.clone();
            c8(a.eb, "t", a.Qb);
            a.N = 0;
            var c = a.C.Sa;
            a.B = new bFb;
            a.j = eFb(a.C, c ? b : null, !a.Y);
            a.Ya > 0 && (a.Xa = new u8((0, g.ib)(a.UU, a, a.j), a.Ya));
            a.Cb.listen(a.j, "readystatechange", a.n5);
            b = a.Oa ? g.jd(a.Oa) : {};
            a.Y ? (a.Ha || (a.Ha = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.eb, a.Ha, a.Y, b)) : (a.Ha = "GET", a.j.send(a.eb, a.Ha, null, b));
            w8(1)
        },
        gFb = function(a) {
            if (!fFb(a)) return g.zo(a.j);
            var b = g.Ao(a.j);
            if (b === "") return "";
            var c = "",
                d = b.length,
                e = g.xo(a.j) == 4;
            if (!a.B.C) {
                if (typeof TextDecoder === "undefined") return C8(a), D8(a), "";
                a.B.C = new g.Ua.TextDecoder
            }
            for (var f = 0; f < d; f++) a.B.B = !0, c += a.B.C.decode(b[f], {
                stream: !(e && f == d - 1)
            });
            b.length = 0;
            a.B.j += c;
            a.N = 0;
            return a.B.j
        },
        fFb = function(a) {
            return a.j ? a.Ha == "GET" && a.Sa != 2 && a.C.kf : !1
        },
        jFb = function(a, b) {
            var c = a.N,
                d = b.indexOf("\n", c);
            if (d == -1) return hFb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return iFb;
            d += 1;
            if (d + c > b.length) return hFb;
            b = b.slice(d, d + c);
            a.N = d + c;
            return b
        },
        B8 = function(a) {
            a.rb = Date.now() + a.ib;
            kFb(a, a.ib)
        },
        kFb = function(a, b) {
            if (a.ra != null) throw Error("WatchDog timer not null");
            a.ra = y8((0, g.ib)(a.m5, a), b)
        },
        lFb = function(a) {
            a.ra && (g.Ua.clearTimeout(a.ra), a.ra = null)
        },
        D8 = function(a) {
            a.C.Pg() || a.Ma || mFb(a.C, a)
        },
        C8 = function(a) {
            lFb(a);
            g.ub(a.Xa);
            a.Xa = null;
            a.Cb.removeAll();
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        uFb = function(a, b) {
            try {
                var c = a.C;
                if (c.Rh != 0 && (c.j == a || nFb(c.B, a)))
                    if (!a.Wa && nFb(c.B, a) && c.Rh == 3) {
                        try {
                            var d = c.rf.j.parse(b)
                        } catch (w) {
                            d = null
                        }
                        if (Array.isArray(d) && d.length == 3) {
                            var e = d;
                            if (e[0] == 0) a: {
                                if (!c.Z) {
                                    if (c.j)
                                        if (c.j.Da + 3E3 < a.Da) E8(c), F8(c);
                                        else break a;
                                    oFb(c);
                                    x8(18)
                                }
                            }
                            else c.Je = e[1], 0 < c.Je - c.Xa && e[2] < 37500 && c.Wa && c.va == 0 && !c.ra && (c.ra = y8((0, g.ib)(c.o5, c), 6E3));
                            if (pFb(c.B) <= 1 && c.Sc) {
                                try {
                                    c.Sc()
                                } catch (w) {}
                                c.Sc = void 0
                            }
                        } else G8(c, 11)
                    } else if ((a.Wa || c.j == a) && E8(c), !g.fc(b))
                    for (e = c.rf.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Xa = f[0];
                        f = f[1];
                        if (c.Rh == 2)
                            if (f[0] == "c") {
                                c.D = f[1];
                                c.Qb = f[2];
                                var h = f[3];
                                h != null && (c.VU = h);
                                var l = f[5];
                                l != null && typeof l === "number" && l > 0 && (c.Ya = 1.5 * l);
                                d = c;
                                var m = a.YP();
                                if (m) {
                                    var n = g.Bo(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.B;
                                        !p.j && (g.hc(n, "spdy") || g.hc(n, "quic") || g.hc(n, "h2")) && (p.D = p.G, p.j = new Set, p.B && (qFb(p, p.B), p.B = null))
                                    }
                                    if (d.Ga) {
                                        var q = g.Bo(m, "X-HTTP-Session-Id");
                                        q && (d.Ae = q, g.pq(d.Oa, d.Ga, q))
                                    }
                                }
                                c.Rh = 3;
                                c.G && c.G.bV();
                                c.Cc && (c.Zc = Date.now() - a.Da);
                                d = c;
                                var r = a;
                                d.Ed = rFb(d, d.Sa ? d.Qb : null, d.Ub);
                                if (r.Wa) {
                                    sFb(d.B,
                                        r);
                                    var t = r,
                                        u = d.Ya;
                                    u && t.setTimeout(u);
                                    t.ra && (lFb(t), B8(t));
                                    d.j = r
                                } else tFb(d);
                                c.C.length > 0 && H8(c)
                            } else f[0] != "stop" && f[0] != "close" || G8(c, 7);
                        else c.Rh == 3 && (f[0] == "stop" || f[0] == "close" ? f[0] == "stop" ? G8(c, 7) : c.disconnect() : f[0] != "noop" && c.G && c.G.aV(f), c.va = 0)
                    }
                w8(4)
            } catch (w) {}
        },
        vFb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        wFb = function(a) {
            this.G = a || 10;
            g.Ua.PerformanceNavigationTiming ? (a = g.Ua.performance.getEntriesByType("navigation"), a = a.length > 0 && (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2")) : a = !!(g.Ua.chrome && g.Ua.chrome.loadTimes && g.Ua.chrome.loadTimes() && g.Ua.chrome.loadTimes().wasFetchedViaSpdy);
            this.D = a ? this.G : 1;
            this.j = null;
            this.D > 1 && (this.j = new Set);
            this.B = null;
            this.C = []
        },
        xFb = function(a) {
            return a.B ? !0 : a.j ? a.j.size >= a.D : !1
        },
        pFb = function(a) {
            return a.B ? 1 : a.j ? a.j.size : 0
        },
        nFb = function(a, b) {
            return a.B ? a.B == b : a.j ? a.j.has(b) : !1
        },
        qFb =
        function(a, b) {
            a.j ? a.j.add(b) : a.B = b
        },
        sFb = function(a, b) {
            a.B && a.B == b ? a.B = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        yFb = function(a) {
            if (a.B != null) return a.C.concat(a.B.va);
            if (a.j != null && a.j.size !== 0) {
                var b = a.C;
                a = g.v(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.va);
                return b
            }
            return g.Kb(a.C)
        },
        zFb = function(a, b) {
            var c = new z8;
            if (g.Ua.Image) {
                var d = new Image;
                d.onload = g.jb(I8, c, "TestLoadImage: loaded", !0, b, d);
                d.onerror = g.jb(I8, c, "TestLoadImage: error", !1, b, d);
                d.onabort = g.jb(I8, c, "TestLoadImage: abort", !1, b, d);
                d.ontimeout = g.jb(I8, c, "TestLoadImage: timeout", !1, b, d);
                g.Ua.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        AFb = function(a, b) {
            var c = new z8,
                d = new AbortController,
                e = setTimeout(function() {
                    d.abort();
                    I8(c, "TestPingServer: timeout", !1, b)
                }, 1E4);
            fetch(a, {
                signal: d.signal
            }).then(function(f) {
                clearTimeout(e);
                f.ok ? I8(c, "TestPingServer: ok", !0, b) : I8(c, "TestPingServer: server error", !1, b)
            }).catch(function() {
                clearTimeout(e);
                I8(c, "TestPingServer: error", !1, b)
            })
        },
        I8 = function(a, b, c, d, e) {
            try {
                e && (e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null), d(c)
            } catch (f) {}
        },
        BFb = function() {
            this.j = new v8
        },
        CFb = function(a, b, c) {
            var d = c || "";
            try {
                XDb(a, function(e, f) {
                    var h = e;
                    g.db(e) && (h = g.nn(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        J8 = function(a, b, c) {
            return c && c.h$ ? c.h$[a] || b : b
        },
        DFb = function(a) {
            this.C = [];
            this.Qb = this.Ed = this.Oa = this.Ub = this.j = this.Ae = this.Ga = this.Ma = this.N = this.Kb = this.Y = null;
            this.Rf = this.eb = 0;
            this.Qf = J8("failFast", !1, a);
            this.Wa = this.ra = this.Z = this.K = this.G = null;
            this.Bc = !0;
            this.Je = this.Xa = -1;
            this.Lb = this.va = this.Da = 0;
            this.Pf = J8("baseRetryDelayMs", 5E3, a);
            this.Sf = J8("retryDelaySeedMs", 1E4, a);
            this.wh = J8("forwardChannelMaxRetries", 2, a);
            this.Fd = J8("forwardChannelRequestTimeoutMs", 2E4, a);
            this.Zd = a && a.Msb || void 0;
            this.Uf = a && a.yrb || void 0;
            this.kf = a && a.Jsb || !1;
            this.Ya = void 0;
            this.Sa = a && a.Gea ||
                !1;
            this.D = "";
            this.B = new wFb(a && a.Hpb);
            this.rf = new BFb;
            this.Cb = a && a.Zpb || !1;
            this.rb = a && a.Opb || !1;
            this.Cb && this.rb && (this.rb = !1);
            this.Tf = a && a.ypb || !1;
            a && a.bqb && (this.Bc = !1);
            this.Cc = !this.Cb && this.Bc && a && a.Mpb || !1;
            this.Yd = void 0;
            a && a.f_ && a.f_ > 0 && (this.Yd = a.f_);
            this.Sc = void 0;
            this.Zc = 0;
            this.ib = !1;
            this.Ab = this.Ha = null
        },
        F8 = function(a) {
            a.j && (EFb(a), a.j.cancel(), a.j = null)
        },
        FFb = function(a) {
            F8(a);
            a.Z && (g.Ua.clearTimeout(a.Z), a.Z = null);
            E8(a);
            a.B.cancel();
            a.K && (typeof a.K === "number" && g.Ua.clearTimeout(a.K), a.K = null)
        },
        H8 = function(a) {
            xFb(a.B) || a.K || (a.K = !0, g.dg(a.XU, a), a.Da = 0)
        },
        HFb = function(a, b) {
            if (pFb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
            if (a.K) return a.C = b.va.concat(a.C), !0;
            if (a.Rh == 1 || a.Rh == 2 || a.Da >= (a.Qf ? 0 : a.wh)) return !1;
            a.K = y8((0, g.ib)(a.XU, a, b), GFb(a, a.Da));
            a.Da++;
            return !0
        },
        JFb = function(a, b) {
            var c;
            b ? c = b.Ub : c = a.eb++;
            var d = a.Oa.clone();
            g.pq(d, "SID", a.D);
            g.pq(d, "RID", c);
            g.pq(d, "AID", a.Xa);
            K8(a, d);
            a.N && a.Y && g.tq(d, a.N, a.Y);
            c = new A8(a, a.D, c, a.Da + 1);
            a.N === null && (c.Oa = a.Y);
            b && (a.C = b.va.concat(a.C));
            b = IFb(a, c, 1E3);
            c.setTimeout(Math.round(a.Fd * .5) + Math.round(a.Fd * .5 * Math.random()));
            qFb(a.B, c);
            dFb(c, d, b)
        },
        K8 = function(a, b) {
            a.Ma && g.Tc(a.Ma, function(c, d) {
                g.pq(b, d, c)
            });
            a.G && XDb({}, function(c, d) {
                g.pq(b, d, c)
            })
        },
        IFb = function(a, b, c) {
            c = Math.min(a.C.length, c);
            var d = a.G ? (0, g.ib)(a.G.p5, a.G, a) : null;
            a: {
                for (var e = a.C, f = -1;;) {
                    var h = ["count=" + c];
                    f == -1 ? c > 0 ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                    for (var l = !0, m = 0; m < c; m++) {
                        var n = e[m].j,
                            p = e[m].map;
                        n -= f;
                        if (n < 0) f = Math.max(0, e[m].j - 100), l = !1;
                        else try {
                            CFb(p, h, "req" + n + "_")
                        } catch (q) {
                            d && d(p)
                        }
                    }
                    if (l) {
                        d = h.join("&");
                        break a
                    }
                }
                d = void 0
            }
            a = a.C.splice(0, c);
            b.va = a;
            return d
        },
        tFb = function(a) {
            a.j || a.Z || (a.Lb = 1, g.dg(a.WU, a), a.va = 0)
        },
        oFb = function(a) {
            if (a.j || a.Z || a.va >= 3) return !1;
            a.Lb++;
            a.Z = y8((0, g.ib)(a.WU, a), GFb(a, a.va));
            a.va++;
            return !0
        },
        EFb = function(a) {
            a.Ha != null && (g.Ua.clearTimeout(a.Ha), a.Ha = null)
        },
        KFb = function(a) {
            a.j = new A8(a, a.D, "rpc", a.Lb);
            a.N === null && (a.j.Oa = a.Y);
            a.j.Ya = 0;
            var b = a.Ed.clone();
            g.pq(b, "RID", "rpc");
            g.pq(b, "SID", a.D);
            g.pq(b, "AID", a.Xa);
            g.pq(b, "CI", a.Wa ? "0" : "1");
            !a.Wa && a.Yd && g.pq(b, "TO", a.Yd);
            g.pq(b, "TYPE", "xmlhttp");
            K8(a, b);
            a.N && a.Y && g.tq(b, a.N, a.Y);
            a.Ya && a.j.setTimeout(a.Ya);
            var c = a.j;
            a = a.Qb;
            c.Sa = 1;
            c.Z = b8(b.clone());
            c.Y = null;
            c.Ga = !0;
            cFb(c, a)
        },
        E8 = function(a) {
            a.ra != null && (g.Ua.clearTimeout(a.ra), a.ra = null)
        },
        mFb = function(a, b) {
            var c = null;
            if (a.j == b) {
                E8(a);
                EFb(a);
                a.j = null;
                var d = 2
            } else if (nFb(a.B, b)) c = b.va, sFb(a.B, b), d = 1;
            else return;
            if (a.Rh != 0)
                if (b.K)
                    if (d == 1) {
                        c = b.Y ? b.Y.length : 0;
                        b = Date.now() - b.Da;
                        var e = a.Da;
                        d = YEb();
                        d.dispatchEvent(new aFb(d, c, b, e));
                        H8(a)
                    } else tFb(a);
            else {
                var f = b.Kb;
                e = b.getLastError();
                if (e == 3 || e == 0 && f > 0 || !(d == 1 && HFb(a, b) || d == 2 && oFb(a))) switch (c && c.length > 0 && (b = a.B, b.C = b.C.concat(c)), e) {
                    case 1:
                        G8(a, 5);
                        break;
                    case 4:
                        G8(a, 10);
                        break;
                    case 3:
                        G8(a, 6);
                        break;
                    default:
                        G8(a, 2)
                }
            }
        },
        GFb = function(a, b) {
            var c = a.Pf + Math.floor(Math.random() *
                a.Sf);
            a.isActive() || (c *= 2);
            return c * b
        },
        G8 = function(a, b) {
            if (b == 2) {
                var c = (0, g.ib)(a.Nea, a),
                    d = a.Uf,
                    e = !d;
                d = new g.hq(d || "//www.google.com/images/cleardot.gif");
                g.Ua.location && g.Ua.location.protocol == "http" || g.iq(d, "https");
                b8(d);
                e ? zFb(d.toString(), c) : AFb(d.toString(), c)
            } else x8(2);
            a.Rh = 0;
            a.G && a.G.ZU(b);
            LFb(a);
            FFb(a)
        },
        LFb = function(a) {
            a.Rh = 0;
            a.Ab = [];
            if (a.G) {
                var b = yFb(a.B);
                if (b.length != 0 || a.C.length != 0) g.Lb(a.Ab, b), g.Lb(a.Ab, a.C), a.B.C.length = 0, g.Kb(a.C), a.C.length = 0;
                a.G.YU()
            }
        },
        MFb = function(a) {
            if (a.Rh == 0) return a.Ab;
            var b = [];
            g.Lb(b, yFb(a.B));
            g.Lb(b, a.C);
            return b
        },
        rFb = function(a, b, c) {
            var d = g.qq(c);
            d.j != "" ? (b && g.jq(d, b + "." + d.j), g.kq(d, d.D)) : (d = g.Ua.location, d = YDb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Ga;
            c = a.Ae;
            b && c && g.pq(d, b, c);
            g.pq(d, "VER", a.VU);
            K8(a, d);
            return d
        },
        eFb = function(a, b, c) {
            if (b && !a.Sa) throw Error("Can't create secondary domain capable XhrIo object.");
            b = a.kf && !a.Zd ? new g.uo(new g.sp({
                t2: c
            })) : new g.uo(a.Zd);
            b.K = a.Sa;
            return b
        },
        NFb = function() {},
        OFb = function() {},
        M8 = function(a, b) {
            g.Fd.call(this);
            this.j = new DFb(b);
            this.G = a;
            this.B = b && b.V$ || null;
            a = b && b.U$ || null;
            b && b.Fpb && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.Y = a;
            a = b && b.frb || null;
            b && b.r_ && (a ? a["X-WebChannel-Content-Type"] = b.r_ : a = {
                "X-WebChannel-Content-Type": b.r_
            });
            b && b.oX && (a ? a["X-WebChannel-Client-Profile"] = b.oX : a = {
                "X-WebChannel-Client-Profile": b.oX
            });
            this.j.Kb = a;
            (a = b && b.erb) && !g.fc(a) && (this.j.N = a);
            this.K = b && b.Gea || !1;
            this.D = b && b.Yrb || !1;
            (b = b && b.d$) && !g.fc(b) && (this.j.Ga = b, g.dd(this.B, b) && (a = this.B,
                b in a && delete a[b]));
            this.C = new L8(this)
        },
        PFb = function(a) {
            VEb.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.j = g.Yc(b)) ? g.hd(b, this.j) : b : this.data = a
        },
        QFb = function(a) {
            WEb.call(this);
            this.status = 1;
            this.errorCode = a
        },
        L8 = function(a) {
            this.j = a
        },
        RFb = function(a, b) {
            this.B = a;
            this.j = b
        },
        SFb = function(a) {
            return MFb(a.j).map(function(b) {
                var c = a.B;
                b = b.map;
                "__data__" in b ? (b = b.__data__, c = c.D ? UDb(b) : b) : c = b;
                return c
            })
        },
        N8 = function(a, b) {
            if (typeof a !== "function") throw Error("Fn must not be null and must be a function");
            return g.Ua.setTimeout(function() {
                a()
            }, b)
        },
        P8 = function(a) {
            O8.dispatchEvent(new TFb(O8, a))
        },
        TFb = function(a) {
            g.yb.call(this, "statevent", a)
        },
        Q8 = function(a, b, c, d) {
            this.j = a;
            this.D = b;
            this.N = c;
            this.K = d || 1;
            this.B = 45E3;
            this.C = new g.uq(this);
            this.G = new g.mg;
            this.G.setInterval(250)
        },
        VFb = function(a, b, c) {
            a.fI = 1;
            a.kD = b8(b.clone());
            a.Rv = c;
            a.Ga = !0;
            UFb(a, null)
        },
        WFb = function(a, b, c, d, e) {
            a.fI = 1;
            a.kD = b8(b.clone());
            a.Rv = null;
            a.Ga = c;
            e && (a.J1 = !1);
            UFb(a, d)
        },
        UFb = function(a, b) {
            a.nD = Date.now();
            XFb(a);
            a.eI = a.kD.clone();
            c8(a.eI, "t", a.K);
            a.hI = 0;
            a.pj = a.j.dN(a.j.oD() ? b : null);
            a.bN > 0 && (a.dI = new u8((0, g.ib)(a.cV, a, a.pj), a.bN));
            a.C.listen(a.pj, "readystatechange", a.r5);
            b = a.Pv ? g.jd(a.Pv) : {};
            a.Rv ? (a.gI = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.pj.send(a.eI, a.gI, a.Rv, b)) : (a.gI = "GET", a.J1 && !g.Nc && (b.Connection = "close"), a.pj.send(a.eI, a.gI, null, b));
            a.j.gs(1)
        },
        $Fb = function(a, b) {
            var c = a.hI,
                d = b.indexOf("\n", c);
            if (d == -1) return YFb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return ZFb;
            d += 1;
            if (d + c > b.length) return YFb;
            b = b.slice(d, d + c);
            a.hI = d + c;
            return b
        },
        XFb = function(a) {
            a.cN = Date.now() + a.B;
            aGb(a, a.B)
        },
        aGb = function(a, b) {
            if (a.Wy != null) throw Error("WatchDog timer not null");
            a.Wy = N8((0, g.ib)(a.q5, a), b)
        },
        bGb = function(a) {
            a.Wy && (g.Ua.clearTimeout(a.Wy), a.Wy = null)
        },
        cGb = function(a) {
            a.j.Pg() || a.lD || a.j.fN(a)
        },
        R8 = function(a) {
            bGb(a);
            g.ub(a.dI);
            a.dI = null;
            a.G.stop();
            a.C.removeAll();
            if (a.pj) {
                var b = a.pj;
                a.pj = null;
                b.abort();
                b.dispose()
            }
            a.O2 && (a.O2 = null)
        },
        dGb = function(a, b) {
            try {
                a.j.dV(a, b), a.j.gs(4)
            } catch (c) {}
        },
        fGb = function(a, b, c, d, e) {
            if (d == 0) c(!1);
            else {
                var f = e || 0;
                d--;
                eGb(a, b, function(h) {
                    h ? c(!0) : g.Ua.setTimeout(function() {
                        fGb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        eGb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    S8(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            g.Ua.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        S8 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        gGb = function(a) {
            this.j = a;
            this.B = new v8
        },
        hGb = function(a) {
            var b = T8(a.j, a.aE, "/mail/images/cleardot.gif");
            b8(b);
            fGb(b.toString(), 5E3, (0, g.ib)(a.F7, a), 3, 2E3);
            a.gs(1)
        },
        iGb = function(a) {
            var b = a.j.K;
            b != null ? (P8(5), b ? (P8(11), U8(a.j, a, !1)) : (P8(12), U8(a.j, a, !0))) : (a.Uk = new Q8(a), a.Uk.Pv = a.eN, b = a.j, b = T8(b, b.oD() ? a.iI : null, a.gN), P8(5), c8(b, "TYPE", "xmlhttp"), WFb(a.Uk, b, !1, a.iI, !1))
        },
        jGb = function(a, b, c) {
            this.j = 1;
            this.B = [];
            this.C = [];
            this.G = new v8;
            this.Y = a || null;
            this.K = b != null ? b : null;
            this.Z = c || !1
        },
        kGb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        lGb = function(a, b, c, d) {
            g.yb.call(this, "timingevent", a);
            this.size = b;
            this.retries = d
        },
        mGb = function(a) {
            g.yb.call(this, "serverreachability", a)
        },
        oGb = function(a) {
            a.s5(1, 0);
            a.jI = T8(a, null, a.iN);
            nGb(a)
        },
        pGb = function(a) {
            a.Ct && (a.Ct.abort(), a.Ct = null);
            a.Wg && (a.Wg.cancel(), a.Wg = null);
            a.Wq && (g.Ua.clearTimeout(a.Wq), a.Wq = null);
            V8(a);
            a.jk && (a.jk.cancel(), a.jk = null);
            a.Ws && (g.Ua.clearTimeout(a.Ws), a.Ws = null)
        },
        qGb = function(a, b) {
            if (a.j == 0) throw Error("Invalid operation: sending map when state is closed");
            a.B.push(new kGb(a.t5++, b));
            a.j != 2 && a.j != 3 || nGb(a)
        },
        rGb = function(a) {
            var b = 0;
            a.Wg && b++;
            a.jk && b++;
            return b
        },
        nGb = function(a) {
            a.jk || a.Ws || (a.Ws = N8((0, g.ib)(a.hV, a), 0), a.Yy = 0)
        },
        uGb = function(a, b) {
            if (a.j == 1) {
                if (!b) {
                    a.qD = Math.floor(Math.random() * 1E5);
                    b = a.qD++;
                    var c = new Q8(a, "", b);
                    c.Pv = a.ip;
                    var d = sGb(a),
                        e = a.jI.clone();
                    g.pq(e, "RID", b);
                    g.pq(e, "CVER", "1");
                    W8(a, e);
                    VFb(c, e, d);
                    a.jk = c;
                    a.j = 2
                }
            } else a.j == 3 && (b ? tGb(a, b) : a.B.length == 0 || a.jk || tGb(a))
        },
        tGb = function(a, b) {
            if (b)
                if (a.Sv > 6) {
                    a.B = a.C.concat(a.B);
                    a.C.length = 0;
                    var c = a.qD - 1;
                    b = sGb(a)
                } else c = b.N, b = b.Rv;
            else c = a.qD++, b = sGb(a);
            var d = a.jI.clone();
            g.pq(d, "SID", a.D);
            g.pq(d, "RID", c);
            g.pq(d, "AID", a.Zy);
            W8(a, d);
            c = new Q8(a, a.D, c, a.Yy + 1);
            c.Pv = a.ip;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.jk = c;
            VFb(c, d, b)
        },
        W8 = function(a, b) {
            a.Pi && (a = a.Pi.lV()) && g.Tc(a, function(c, d) {
                g.pq(b, d, c)
            })
        },
        sGb = function(a) {
            var b = Math.min(a.B.length, 1E3),
                c = ["count=" + b];
            if (a.Sv > 6 && b > 0) {
                var d = a.B[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    SF: void 0
                }, f++) {
                e.SF = a.B[f].j;
                var h = a.B[f].map;
                e.SF = a.Sv <= 6 ? f : e.SF - d;
                try {
                    g.Tc(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.SF + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.SF + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.C = a.C.concat(a.B.splice(0, b));
            return c.join("&")
        },
        vGb = function(a) {
            a.Wg || a.Wq || (a.N = 1, a.Wq = N8((0, g.ib)(a.gV, a), 0), a.Xy = 0)
        },
        xGb = function(a) {
            if (a.Wg || a.Wq || a.Xy >= 3) return !1;
            a.N++;
            a.Wq = N8((0, g.ib)(a.gV, a), wGb(a, a.Xy));
            a.Xy++;
            return !0
        },
        U8 = function(a, b, c) {
            a.JM = a.K == null ? c : !a.K;
            a.jp = b.Vq;
            a.Z || oGb(a)
        },
        V8 = function(a) {
            a.Tv != null && (g.Ua.clearTimeout(a.Tv), a.Tv = null)
        },
        wGb = function(a, b) {
            var c = 5E3 + Math.floor(Math.random() * 1E4);
            a.isActive() || (c *= 2);
            return c * b
        },
        X8 = function(a, b) {
            if (b == 2 || b == 9) {
                var c = null;
                a.Pi && (c = null);
                var d = (0, g.ib)(a.Mea, a);
                c || (c = new g.hq("//www.google.com/images/cleardot.gif"), b8(c));
                eGb(c.toString(), 1E4, d)
            } else P8(2);
            yGb(a, b)
        },
        yGb = function(a, b) {
            a.j = 0;
            a.Pi && a.Pi.iV(b);
            zGb(a);
            pGb(a)
        },
        zGb = function(a) {
            a.j = 0;
            a.jp = -1;
            if (a.Pi)
                if (a.C.length == 0 && a.B.length == 0) a.Pi.jN();
                else {
                    var b = g.Kb(a.C),
                        c = g.Kb(a.B);
                    a.C.length = 0;
                    a.B.length = 0;
                    a.Pi.jN(b, c)
                }
        },
        T8 = function(a, b, c) {
            var d = g.qq(c);
            if (d.j != "") b && g.jq(d, b + "." + d.j), g.kq(d, d.D);
            else {
                var e = window.location;
                d = YDb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.pD && g.Tc(a.pD, function(f, h) {
                g.pq(d, h, f)
            });
            g.pq(d, "VER", a.Sv);
            W8(a, d);
            return d
        },
        AGb = function() {},
        BGb = function() {
            this.j = [];
            this.B = []
        },
        CGb = function(a) {
            g.yb.call(this, "channelMessage");
            this.message = a
        },
        DGb = function(a) {
            g.yb.call(this, "channelError");
            this.error = a
        },
        EGb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        Y8 = function(a, b) {
            g.I.call(this);
            this.j = new g.Cv(this.Eca, 0, this);
            g.M(this, this.j);
            this.Xi = 5E3;
            this.B = 0;
            if (typeof a === "function") b && (a = (0, g.ib)(a, b));
            else if (a && typeof a.handleEvent === "function") a = (0, g.ib)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.C = a
        },
        FGb = function(a, b, c, d, e) {
            c = c === void 0 ? !1 : c;
            d = d === void 0 ? function() {
                return ""
            } : d;
            e = e === void 0 ? !1 : e;
            this.Da = a;
            this.N = b;
            this.C = new g.$v;
            this.B = new Y8(this.Sda, this);
            this.j = null;
            this.ra = !1;
            this.K = null;
            this.Y = "";
            this.Z = this.G = 0;
            this.D = [];
            this.Sa = c;
            this.va = d;
            this.Wa = e;
            this.Oa = new ZDb;
            this.Ha = new aEb;
            this.Ma = new cEb;
            this.Ga = new eEb;
            this.Xa = new gEb;
            this.eb = new hEb
        },
        GGb = function(a) {
            if (a.j) {
                var b = a.va(),
                    c = a.j.ip || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.ip = c
            }
        },
        Z8 = function(a) {
            this.scheme = "https";
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.B = !0;
            a = a || document.location.href;
            var b = Number(g.un(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.vn(a) || "";
            a = g.oc();
            a.search("MSIE") >= 0 && (a = a.match(/MSIE ([\d.]+)/)[1], g.nc(a, "10.0") < 0 && (this.B = !1))
        },
        $8 = function(a, b) {
            var c = a.j;
            a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
            return g.Bn(c + b, {})
        },
        HGb = function(a, b) {
            g.Fd.call(this);
            var c = this;
            this.Hd = a();
            this.Hd.subscribe("handlerOpened", this.v5, this);
            this.Hd.subscribe("handlerClosed", this.onClosed, this);
            this.Hd.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Hd.subscribe("handlerMessage", this.onMessage, this);
            this.j = b
        },
        IGb = function(a, b, c) {
            var d = this;
            c = c === void 0 ? function() {
                return ""
            } : c;
            var e = e === void 0 ? new OFb : e;
            var f = f === void 0 ? new g.$v : f;
            this.pathPrefix = a;
            this.j = b;
            this.Da = c;
            this.G = f;
            this.Z = null;
            this.Y = this.N = 0;
            this.channel = null;
            this.K = 0;
            this.C = new Y8(function() {
                d.C.isActive();
                var h;
                ((h = d.channel) == null ? void 0 : pFb((new RFb(h, h.j)).j.B)) === 0 && d.connect(d.Z, d.N)
            });
            this.D = {};
            this.B = {};
            this.ra = !1;
            this.logger = null;
            this.va = [];
            this.Ag = void 0;
            this.Oa = new ZDb;
            this.Ha = new aEb;
            this.Ma = new cEb;
            this.Ga = new eEb
        },
        JGb = function(a) {
            g.vd(a.channel, "m", function() {
                a.K = 3;
                a.C.reset();
                a.Z = null;
                a.N = 0;
                for (var b = g.v(a.va), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.va = [];
                a.publish("webChannelOpened");
                $Db(a.Oa, "WEB_CHANNEL")
            });
            g.vd(a.channel, "n", function() {
                a.K = 0;
                a.C.isActive() || a.publish("webChannelClosed");
                var b, c = (b = a.channel) == null ? void 0 : SFb(new RFb(b, b.j));
                c && (a.va = [].concat(g.ra(c)));
                bEb(a.Ha, "WEB_CHANNEL")
            });
            g.vd(a.channel, "p", function(b) {
                var c = b.data;
                c[0] === "gracefulReconnect" ? (a.C.start(), a.channel && a.channel.close()) : a.publish("webChannelMessage", new EGb(c[0], c[1]));
                a.Ag = b.statusCode;
                dEb(a.Ma, "WEB_CHANNEL")
            });
            g.vd(a.channel, "o", function() {
                a.Ag === 401 || a.C.start();
                a.publish("webChannelError");
                fEb(a.Ga, "WEB_CHANNEL")
            })
        },
        KGb = function(a) {
            var b = a.Da();
            b ? a.D["x-youtube-lounge-xsrf-token"] = b : delete a.D["x-youtube-lounge-xsrf-token"]
        },
        LGb = function(a) {
            g.Fd.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.w5, this);
            this.j.subscribe("webChannelClosed", this.onClosed, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.onMessage, this)
        },
        MGb = function(a, b, c, d, e) {
            function f() {
                return new FGb($8(a, "/bc"), b, !1, c, d)
            }
            c = c === void 0 ? function() {
                return ""
            } : c;
            return g.EA("enable_mdx_web_channel_desktop") ? new LGb(function() {
                return new IGb($8(a, "/wc"), b, c)
            }) : new HGb(f, e)
        },
        QGb = function() {
            var a = NGb;
            OGb();
            a9.push(a);
            PGb()
        },
        b9 = function(a, b) {
            OGb();
            var c = RGb(a, String(b));
            a9.length == 0 ? SGb(c) : (PGb(), g.Zb(a9, function(d) {
                d(c)
            }))
        },
        c9 = function(a) {
            b9("CP", a)
        },
        OGb = function() {
            a9 || (a9 = g.Wa("yt.mdx.remote.debug.handlers_") || [], g.Va("yt.mdx.remote.debug.handlers_", a9))
        },
        SGb = function(a) {
            var b = (d9 + 1) % 50;
            d9 = b;
            e9[b] = a;
            f9 || (f9 = b == 49)
        },
        PGb = function() {
            var a = a9;
            if (e9[0]) {
                var b = f9 ? d9 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = e9[b];
                    g.Zb(a, function(d) {
                        d(c)
                    })
                } while (b != d9);
                e9 = Array(50);
                d9 = -1;
                f9 = !1
            }
        },
        RGb = function(a, b) {
            var c = (Date.now() - TGb) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        g9 = function(a) {
            g.FE.call(this);
            this.K = a;
            this.screens = []
        },
        UGb = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        VGb = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.It(a.screens, function(f) {
                return !!vEb(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = UGb(a, b[d]) || c;
            return c
        },
        WGb = function(a, b) {
            var c = a.screens.length;
            a.screens = g.It(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        XGb = function(a, b, c, d, e) {
            g.FE.call(this);
            this.C = a;
            this.N = b;
            this.D = c;
            this.K = d;
            this.G = e;
            this.B = 0;
            this.j = null;
            this.rd = NaN
        },
        i9 = function(a) {
            g9.call(this, "LocalScreenService");
            this.B = a;
            this.j = NaN;
            h9(this);
            this.info("Initializing with " + sEb(this.screens))
        },
        YGb = function(a) {
            if (a.screens.length) {
                var b = g.Wr(a.screens, function(d) {
                        return d.id
                    }),
                    c = $8(a.B, "/pairing/get_lounge_token_batch");
                a.B.sendRequest("POST", c, {
                    screen_ids: b.join(",")
                }, (0, g.ib)(a.C9, a), (0, g.ib)(a.B9, a))
            }
        },
        h9 = function(a) {
            if (g.EA("deprecate_pair_servlet_enabled")) return VGb(a, []);
            var b = rEb(CEb());
            b = g.It(b, function(c) {
                return !c.uuid
            });
            return VGb(a, b)
        },
        j9 = function(a, b) {
            EEb(g.Wr(a.screens, pEb));
            b && DEb()
        },
        $Gb = function(a, b) {
            g.FE.call(this);
            this.K = b;
            b = (b = g.xB("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
                var h = d[f].id;
                c[h] = g.Eb(b, h)
            }
            this.j = c;
            this.G = a;
            this.C = this.D = NaN;
            this.B = null;
            ZGb("Initialized with " + g.nn(this.j))
        },
        aHb = function(a, b, c) {
            var d = $8(a.G, "/pairing/get_screen_availability");
            a.G.sendRequest("POST", d, {
                lounge_token: b.token
            }, (0, g.ib)(function(e) {
                e = e.screens || [];
                for (var f = e.length, h = 0; h < f; ++h)
                    if (e[h].loungeToken == b.token) {
                        c(e[h].status == "online");
                        return
                    }
                c(!1)
            }, a), (0, g.ib)(function() {
                c(!1)
            }, a))
        },
        cHb = function(a, b) {
            a: if (SDb(b) != SDb(a.j)) var c = !1;
                else {
                    c = g.bd(b);
                    for (var d = c.length, e = 0; e < d; ++e)
                        if (!a.j[c[e]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (ZGb("Updated online screens: " + g.nn(a.j)), a.j = b, a.publish("screenChange"));bHb(a)
        },
        k9 = function(a) {
            isNaN(a.C) || g.CA(a.C);
            a.C = g.AA((0, g.ib)(a.RS, a), a.D > 0 && a.D < g.kb() ? 2E4 : 1E4)
        },
        ZGb = function(a) {
            b9("OnlineScreenService", a)
        },
        dHb = function(a) {
            var b = {};
            g.Zb(a.K(), function(c) {
                c.token ? b[c.token] = c.id : this.eg("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        bHb = function(a) {
            a = g.bd(g.Uc(a.j, function(b) {
                return b
            }));
            g.Sb(a);
            a.length ? g.wB("yt-remote-online-screen-ids", a.join(","), 60) : g.yB("yt-remote-online-screen-ids")
        },
        l9 = function(a, b) {
            b = b === void 0 ? !1 : b;
            g9.call(this, "ScreenService");
            this.D = a;
            this.N = b;
            this.j = this.B = null;
            this.C = [];
            this.G = {};
            eHb(this)
        },
        gHb = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.G[b]);
            var h = a.ql(),
                l = c ? l8(h, c) : null;
            c && (a.N || l) || (l = l8(h, b));
            if (l) {
                l.uuid = b;
                var m = m9(a, l);
                aHb(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? fHb(a, c, (0, g.ib)(function(n) {
                var p = m9(this, new i8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                aHb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        hHb = function(a, b) {
            for (var c = a.screens.length, d = 0; d < c; ++d)
                if (a.screens[d].name == b) return a.screens[d];
            return null
        },
        iHb = function(a, b, c) {
            aHb(a.j, b, c)
        },
        fHb = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.GA($8(a.D, "/pairing/get_lounge_token_batch"), e)
        },
        jHb = function(a) {
            a.screens = a.B.ql();
            var b = a.G,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = a.screens.length;
            for (d = 0; d < b; ++d) {
                var e = a.screens[d];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + sEb(a.screens))
        },
        eHb = function(a) {
            kHb(a);
            a.B = new i9(a.D);
            a.B.subscribe("screenChange", (0, g.ib)(a.M9, a));
            jHb(a);
            a.N || (a.C = rEb(g.xB("yt-remote-automatic-screen-cache") || []));
            kHb(a);
            a.info("Initializing automatic screens: " + sEb(a.C));
            a.j = new $Gb(a.D, (0, g.ib)(a.ql, a, !0));
            a.j.subscribe("screenChange", (0, g.ib)(function() {
                this.publish("onlineScreenChange")
            }, a))
        },
        m9 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = l8(a.C, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.C.push(b), a.N || lHb(a));
            kHb(a);
            a.G[b.uuid] = b.id;
            g.wB("yt-remote-device-id-map", a.G, 31536E3);
            return b
        },
        lHb = function(a) {
            a = g.It(a.C, function(b) {
                return b.idType != "shortLived"
            });
            g.wB("yt-remote-automatic-screen-cache", g.Wr(a, pEb))
        },
        kHb = function(a) {
            a.G = g.xB("yt-remote-device-id-map") || {}
        },
        n9 = function(a, b, c) {
            g.FE.call(this);
            this.Ga = c;
            this.D = a;
            this.B = b;
            this.j = null
        },
        o9 = function(a, b) {
            a.j = b;
            a.publish("sessionScreen", a.j)
        },
        mHb = function(a, b) {
            a.j && (a.j.token = b, m9(a.D, a.j));
            a.publish("sessionScreen", a.j)
        },
        p9 = function(a, b) {
            b9(a.Ga, b)
        },
        q9 = function(a, b, c) {
            n9.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.C = null;
            this.va = (0, g.ib)(this.B5, this);
            this.Ha = (0, g.ib)(this.Rca, this);
            this.ra = g.AA(function() {
                nHb(d, null)
            }, 12E4);
            this.N = this.G = this.K = this.Z = 0;
            this.Da = !1;
            this.Y = "unknown"
        },
        pHb = function(a, b) {
            g.CA(a.N);
            a.N = 0;
            b == 0 ? oHb(a) : a.N = g.AA(function() {
                oHb(a)
            }, b)
        },
        oHb = function(a) {
            qHb(a, "getLoungeToken");
            g.CA(a.G);
            a.G = g.AA(function() {
                rHb(a, null)
            }, 3E4)
        },
        qHb = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.nn());
            var c = {};
            c.type = b;
            a.C ? a.C.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.ib)(function() {
                p9(this, "Failed to send message: " + b + ".")
            }, a)) : p9(a, "Sending yt message without session: " + g.nn(c))
        },
        sHb = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.yY(b, function(c) {
                o9(a, c)
            }, function() {
                return a.Ej()
            }, 5)) : a.Ej(Error("Waiting for session status timed out."))
        },
        uHb = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new i8(b);
            tHb(a, d, function(e) {
                e ? (a.Da = !0, m9(a.D, d), o9(a, d), a.Y = "unknown", pHb(a, c)) : (g.lA(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Ej())
            }, 5)
        },
        nHb = function(a, b) {
            g.CA(a.ra);
            a.ra = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? uHb(a, {
                    name: a.B.friendlyName,
                    screenId: b.screenId,
                    loungeToken: b.loungeToken,
                    dialId: b.deviceId,
                    screenIdType: "shortLived"
                }, b.loungeTokenRefreshIntervalMs) : (g.lA(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), sHb(a, b.screenId))) : (g.lA(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), sHb(a, b.screenId)) :
                sHb(a, b.screenId) : a.Ej(Error("Waiting for session status timed out."))
        },
        rHb = function(a, b) {
            g.CA(a.G);
            a.G = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    ((d = a.j) == null ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.Y = c, pHb(a, 3E4)) : (mHb(a, b.loungeToken), a.Da = !1, a.Y = "unknown", pHb(a, b.loungeTokenRefreshIntervalMs))
        },
        tHb = function(a, b, c, d) {
            g.CA(a.K);
            a.K = 0;
            iHb(a.D, b, function(e) {
                e || d < 0 ? c(e) : a.K = g.AA(function() {
                    tHb(a, b, c, d - 1)
                }, 300)
            })
        },
        vHb = function(a) {
            g.CA(a.Z);
            a.Z = 0;
            g.CA(a.K);
            a.K = 0;
            g.CA(a.ra);
            a.ra = 0;
            g.CA(a.G);
            a.G = 0;
            g.CA(a.N);
            a.N = 0
        },
        r9 = function(a, b, c, d) {
            n9.call(this, a, b, "DialSession");
            this.config_ = d;
            this.C = this.Z = null;
            this.Ha = "";
            this.Sa = c;
            this.Oa = null;
            this.ra = function() {};
            this.Y = NaN;
            this.Ma = (0, g.ib)(this.C5, this);
            this.G = function() {};
            this.N = this.K = 0;
            this.va = !1;
            this.Da = "unknown"
        },
        s9 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && ((b = a.C) == null ? 0 : b.getDialAppInfo))
        },
        wHb = function(a) {
            a.G = a.D.nV(a.Ha, a.B.label, a.B.friendlyName, s9(a), function(b, c) {
                a.G = function() {};
                a.va = !0;
                o9(a, b);
                b.idType == "shortLived" && c > 0 && t9(a, c)
            }, function(b) {
                a.G = function() {};
                a.Ej(b)
            })
        },
        xHb = function(a) {
            var b = {};
            b.pairingCode = a.Ha;
            b.theme = a.Sa;
            GEb() && (b.env_useStageMdx = 1);
            return g.An(b)
        },
        yHb = function(a) {
            return new Promise(function(b) {
                a.Ha = tEb();
                if (a.Oa) {
                    var c = new chrome.cast.DialLaunchResponse(!0, xHb(a));
                    b(c);
                    wHb(a)
                } else a.ra = function() {
                    g.CA(a.Y);
                    a.ra = function() {};
                    a.Y = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, xHb(a));
                    b(d);
                    wHb(a)
                }, a.Y = g.AA(function() {
                    a.ra()
                }, 100)
            })
        },
        AHb = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new i8(b);
            return (new Promise(function(e) {
                zHb(a, d, function(f) {
                    f ? (a.va = !0, m9(a.D, d), o9(a, d), t9(a, c)) : g.lA(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : yHb(a)
            })
        },
        BHb = function(a, b) {
            var c = a.Z.receiver.label,
                d = a.B.friendlyName;
            return (new Promise(function(e) {
                gHb(a.D, c, b, d, function(f) {
                    f && f.token && o9(a, f);
                    e(f)
                }, function(f) {
                    p9(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : yHb(a)
            })
        },
        zHb = function(a, b, c, d) {
            g.CA(a.K);
            a.K = 0;
            iHb(a.D, b, function(e) {
                e || d < 0 ? c(e) : a.K = g.AA(function() {
                    zHb(a, b, c, d - 1)
                }, 300)
            })
        },
        t9 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            s9(a) && (g.CA(a.N), a.N = 0, b == 0 ? CHb(a) : a.N = g.AA(function() {
                CHb(a)
            }, b))
        },
        CHb = function(a) {
            s9(a) && a.C.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    ((d = a.j) == null ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.Da = c, t9(a, 3E4)) : (a.va = !1, a.Da = "unknown", mHb(a, b.loungeToken), t9(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.Da = "noLoungeTokenResponse";
                t9(a, 3E4)
            })
        },
        DHb = function(a) {
            g.CA(a.K);
            a.K = 0;
            g.CA(a.N);
            a.N = 0;
            a.G();
            a.G = function() {};
            g.CA(a.Y)
        },
        u9 = function(a, b) {
            n9.call(this, a, b, "ManualSession");
            this.C = g.AA((0, g.ib)(this.VA, this, null), 150)
        },
        v9 = function(a, b) {
            g.FE.call(this);
            this.config_ = b;
            this.B = a;
            this.Z = b.appId || "233637DE";
            this.D = b.theme || "cl";
            this.Y = b.disableCastApi || !1;
            this.K = b.forceMirroring || !1;
            this.j = null;
            this.N = !1;
            this.C = [];
            this.G = (0, g.ib)(this.Rba, this)
        },
        EHb = function(a, b) {
            return b ? g.Cb(a.C, function(c) {
                return j8(b, c.label)
            }, a) : null
        },
        w9 = function(a) {
            b9("Controller", a)
        },
        NGb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        x9 = function(a) {
            return a.N || !!a.C.length || !!a.j
        },
        y9 = function(a, b, c) {
            b != a.j && (g.ub(a.j), (a.j = b) ? (c ? a.publish("yt-remote-cast2-receiver-resumed",
                b.B) : a.publish("yt-remote-cast2-receiver-selected", b.B), b.subscribe("sessionScreen", (0, g.ib)(a.q0, a, b)), b.subscribe("sessionFailed", function() {
                return FHb(a, b)
            }), b.j ? a.publish("yt-remote-cast2-session-change", b.j) : c && a.j.VA(null)) : a.publish("yt-remote-cast2-session-change", null))
        },
        FHb = function(a, b) {
            a.j == b && a.publish("yt-remote-cast2-session-failed")
        },
        GHb = function(a) {
            var b = a.B.mV(),
                c = a.j && a.j.B;
            a = g.Wr(b, function(d) {
                c && j8(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = EHb(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        NHb = function(a, b, c, d) {
            d.disableCastApi ? z9("Cannot initialize because disabled by Mdx config.") : HHb() ? IHb(b, d) && (JHb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? KHb(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? KHb(a, c) : (A9("Failed to load cast API: " + f), LHb(!1), JHb(!1), g.yB("yt-remote-cast-available"), g.yB("yt-remote-cast-receiver"),
                    MHb(), c(!1))
            }, d.loadCastApiSetupScript ? g.hva("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : window.navigator.userAgent.indexOf("Android") >= 0 && window.navigator.userAgent.indexOf("Chrome/") >= 0 && window.navigator.presentation ? IEb() >= 60 && REb() : !window.chrome || !window.navigator.presentation || window.navigator.userAgent.indexOf("Edge") >= 0 ? MEb() : IEb() >= 89 ? TEb() : (QEb(), s8(SEb.map(NEb))))) : z9("Cannot initialize because not running Chrome")
        },
        MHb = function() {
            z9("dispose");
            var a = B9();
            a && a.dispose();
            g.Va("yt.mdx.remote.cloudview.instance_", null);
            OHb(!1);
            g.qD(PHb);
            PHb.length = 0
        },
        C9 = function() {
            return !!g.xB("yt-remote-cast-installed")
        },
        QHb = function() {
            var a = g.xB("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        RHb = function() {
            z9("clearCurrentReceiver");
            g.yB("yt-remote-cast-receiver")
        },
        SHb = function() {
            return C9() ? B9() ? B9().getCastSession() : (A9("getCastSelector: Cast is not initialized."), null) : (A9("getCastSelector: Cast API is not installed!"), null)
        },
        THb = function() {
            C9() ? B9() ? D9() ? (z9("Requesting cast selector."), B9().requestSession()) : (z9("Wait for cast API to be ready to request the session."), PHb.push(g.pD("yt-remote-cast2-api-ready", THb))) : A9("requestCastSelector: Cast is not initialized.") : A9("requestCastSelector: Cast API is not installed!")
        },
        E9 = function(a, b) {
            D9() ? B9().setConnectedScreenStatus(a, b) : A9("setConnectedScreenStatus called before ready.")
        },
        HHb = function() {
            var a = g.oc().search(/ (CrMo|Chrome|CriOS)\//) >= 0;
            return g.KJ || a
        },
        UHb = function(a, b) {
            B9().init(a, b)
        },
        IHb = function(a, b) {
            var c = !1;
            B9() || (a = new v9(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.wB("yt-remote-cast-available", d);
                q8("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                z9("onReceiverSelected: " + d.friendlyName);
                g.wB("yt-remote-cast-receiver", d);
                q8("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                z9("onReceiverResumed: " + d.friendlyName);
                g.wB("yt-remote-cast-receiver", d);
                q8("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                z9("onSessionChange: " + k8(d));
                d || g.yB("yt-remote-cast-receiver");
                q8("yt-remote-cast2-session-change", d)
            }), g.Va("yt.mdx.remote.cloudview.instance_", a), c = !0);
            z9("cloudview.createSingleton_: " + c);
            return c
        },
        B9 = function() {
            return g.Wa("yt.mdx.remote.cloudview.instance_")
        },
        KHb = function(a, b) {
            LHb(!0);
            JHb(!1);
            UHb(a, function(c) {
                c ? (OHb(!0), g.rD("yt-remote-cast2-api-ready")) : (A9("Failed to initialize cast API."), LHb(!1), g.yB("yt-remote-cast-available"), g.yB("yt-remote-cast-receiver"), MHb());
                b(c)
            })
        },
        z9 = function(a) {
            b9("cloudview", a)
        },
        A9 = function(a) {
            b9("cloudview", a)
        },
        LHb = function(a) {
            z9("setCastInstalled_ " + a);
            g.wB("yt-remote-cast-installed", a)
        },
        D9 = function() {
            return !!g.Wa("yt.mdx.remote.cloudview.apiReady_")
        },
        OHb = function(a) {
            z9("setApiReady_ " + a);
            g.Va("yt.mdx.remote.cloudview.apiReady_", a)
        },
        JHb = function(a) {
            g.Va("yt.mdx.remote.cloudview.initializing_", a)
        },
        F9 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.K = this.N = 0;
            this.trackData = null;
            this.wl = this.Sp = !1;
            this.Z = this.G = this.j = this.D = 0;
            this.C = NaN;
            this.B = !1;
            this.reset(a)
        },
        VHb = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.Sp = !1;
            a.wl = !1;
            a.N = 0;
            a.K = g.kb();
            a.D = 0;
            a.j = 0;
            a.G = 0;
            a.Z = 0;
            a.C = NaN;
            a.B = !1
        },
        G9 = function(a) {
            return a.isPlaying() ? (g.kb() - a.K) / 1E3 : 0
        },
        H9 = function(a, b) {
            a.N = b;
            a.K = g.kb()
        },
        I9 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.kb() - a.K) / 1E3 + a.N;
                case -1E3:
                    return 0
            }
            return a.N
        },
        J9 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && VHb(a)
        },
        WHb = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.kd(a.trackData);
            b.hasPrevious = a.Sp;
            b.hasNext = a.wl;
            b.playerTime = a.N;
            b.playerTimeAt = a.K;
            b.seekableStart = a.D;
            b.seekableEnd = a.j;
            b.duration = a.G;
            b.loadedTime = a.Z;
            b.liveIngestionTime = a.C;
            return b
        },
        L9 = function(a, b) {
            g.FE.call(this);
            var c = this;
            this.C = 0;
            this.D = a;
            this.K = [];
            this.G = new BGb;
            this.B = this.j = null;
            this.Y = (0, g.ib)(this.Faa, this);
            this.N = (0, g.ib)(this.gG, this);
            this.Z = (0, g.ib)(this.Eaa, this);
            this.ra = (0, g.ib)(this.Haa, this);
            var d = 0;
            a ? (d = a.getProxyState(), d != 3 && (a.subscribe("proxyStateChange", this.qT, this), XHb(this))) : d = 3;
            d != 0 && (b ? this.qT(d) : g.AA(function() {
                c.qT(d)
            }, 0));
            (a = SHb()) && K9(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.ra)
        },
        M9 = function(a) {
            return new F9(a.D.getPlayerContextData())
        },
        XHb = function(a) {
            g.Zb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.K.push(this.D.subscribe(b, g.jb(this.Pba, b), this))
            }, a)
        },
        YHb = function(a) {
            g.Zb(a.K, function(b) {
                this.D.unsubscribeByKey(b)
            }, a);
            a.K.length = 0
        },
        N9 = function(a) {
            return a.getState() == 1
        },
        O9 = function(a, b) {
            var c = a.G;
            c.j.length + c.B.length < 50 && a.G.enqueue(b)
        },
        ZHb = function(a, b, c) {
            var d = M9(a);
            H9(d, c);
            d.playerState != -1E3 && (d.playerState = b);
            P9(a, d)
        },
        Q9 = function(a, b, c) {
            a.D.sendMessage(b, c)
        },
        P9 = function(a, b) {
            YHb(a);
            a.D.setPlayerContextData(WHb(b));
            XHb(a)
        },
        K9 = function(a, b) {
            a.B && (a.B.removeUpdateListener(a.Y), a.B.removeMediaListener(a.N), a.gG(null));
            a.B = b;
            a.B && (c9("Setting cast session: " + a.B.sessionId), a.B.addUpdateListener(a.Y), a.B.addMediaListener(a.N), a.B.media.length && a.gG(a.B.media[0]))
        },
        $Hb = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = M9(a);
                b.contentId != d.videoId && c9("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                H9(d, a.j.getEstimatedTime());
                P9(a, d)
            } else c9("No cast media video. Ignoring state update.")
        },
        R9 = function(a, b, c) {
            return (0, g.ib)(function(d) {
                this.eg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.eg("Retrying " + b + " using MDx browser channel."), Q9(this, b, c))
            }, a)
        },
        U9 = function(a, b, c, d) {
            d = d === void 0 ? !1 : d;
            g.FE.call(this);
            var e = this;
            this.K = NaN;
            this.Ha = !1;
            this.Y = this.Z = this.va = this.Da = NaN;
            this.ra = [];
            this.G = this.N = this.D = this.j = this.B = null;
            this.Oa = a;
            this.Ma = d;
            this.ra.push(g.nB(window, "beforeunload", function() {
                e.Wz(2)
            }));
            this.C = [];
            this.j = new F9;
            this.Sa = b.id;
            this.Ga = b.idType;
            this.B = MGb(this.Oa, c, this.rV, this.Ga == "shortLived", this.Sa);
            this.B.listen("channelOpened", function() {
                aIb(e)
            });
            this.B.listen("channelClosed", function() {
                S9("Channel closed");
                isNaN(e.K) ? o8(!0) : o8();
                e.dispose()
            });
            this.B.listen("channelError", function(f) {
                o8();
                isNaN(e.bF()) ? (f == 1 && e.Ga == "shortLived" && e.publish("browserChannelAuthError", f), S9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Ha = !0, S9("Channel error: " + f + " with reconnection in " + e.bF() + " ms"), T9(e, 2))
            });
            this.B.listen("channelMessage", function(f) {
                bIb(e, f)
            });
            this.B.Fs(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.zB() && g.wB("yt-remote-session-video-id", f)
            })
        },
        cIb = function(a) {
            return g.Cb(a.C, function(b) {
                return b.type == "LOUNGE_SCREEN"
            })
        },
        S9 = function(a) {
            b9("conn", a)
        },
        T9 = function(a, b) {
            a.publish("proxyStateChange", b)
        },
        dIb = function(a) {
            a.K = g.AA(function() {
                S9("Connecting timeout");
                a.Wz(1)
            }, 2E4)
        },
        eIb = function(a) {
            g.CA(a.K);
            a.K = NaN
        },
        fIb = function(a) {
            g.CA(a.Da);
            a.Da = NaN
        },
        hIb = function(a) {
            gIb(a);
            a.va = g.AA(function() {
                V9(a, "getNowPlaying")
            }, 2E4)
        },
        gIb = function(a) {
            g.CA(a.va);
            a.va = NaN
        },
        aIb = function(a) {
            S9("Channel opened");
            a.Ha && (a.Ha = !1, fIb(a), a.Da = g.AA(function() {
                S9("Timing out waiting for a screen.");
                a.Wz(1)
            }, 15E3))
        },
        jIb = function(a, b) {
            var c = null;
            if (b) {
                var d = cIb(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Va("yt.mdx.remote.remoteClient_", c);
            b && (eIb(a), fIb(a));
            c = a.B.HA() && isNaN(a.K);
            b == c ? b && (T9(a, 1), V9(a, "getSubtitlesTrack")) : b ? (a.tY() && a.j.reset(), T9(a, 1), V9(a, "getNowPlaying"), iIb(a)) : a.Wz(1)
        },
        kIb = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.gd(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.publish("remotePlayerChange"))
        },
        lIb = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            J9(a.j, d, e);
            a.publish("remoteQueueChange", c)
        },
        nIb = function(a, b) {
            b.params = b.params || {};
            lIb(a, b, "NOW_PLAYING_MAY_CHANGE");
            mIb(a, b);
            a.publish("autoplayDismissed")
        },
        mIb = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            H9(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c;
            c == -1 && a.j.playerState == -1E3 && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.Z = isNaN(c) ? 0 : c;
            a.j.Jl(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.C = d;
            c.B = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.D = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            a.j.playerState == 1 ? hIb(a) : gIb(a);
            a.publish("remotePlayerChange")
        },
        oIb = function(a, b) {
            if (a.j.playerState != -1E3) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                H9(a.j, isNaN(b) ? 0 : b);
                a.publish("remotePlayerChange")
            }
        },
        pIb = function(a, b) {
            var c = b.params.muted == "true";
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.publish("remotePlayerChange")
        },
        qIb = function(a, b) {
            a.N = b.params.videoId;
            a.publish("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        rIb = function(a, b) {
            a.N = b.params.videoId || null;
            a.publish("autoplayUpNext", a.N)
        },
        sIb = function(a, b) {
            a.G = b.params.autoplayMode;
            a.publish("autoplayModeChange", a.G);
            a.G == "DISABLED" && a.publish("autoplayDismissed")
        },
        tIb = function(a, b) {
            var c = b.params.hasNext == "true";
            a.j.Sp = b.params.hasPrevious == "true";
            a.j.wl = c;
            a.publish("previousNextChange")
        },
        bIb = function(a, b) {
            b = b.message;
            b.params ? S9("Received: action=" + b.action + ", params=" + g.nn(b.params)) : S9("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = d8(b.params.devices);
                    a.C = g.Wr(b, function(d) {
                        return new mEb(d)
                    });
                    b = !!g.Cb(a.C, function(d) {
                        return d.type == "LOUNGE_SCREEN"
                    });
                    jIb(a, b);
                    b = a.wZ("mlm");
                    a.publish("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.Ib(a.C, function(d) {
                        return d.type == "LOUNGE_SCREEN"
                    });
                    jIb(a, !1);
                    break;
                case "remoteConnected":
                    var c = new mEb(d8(b.params.device));
                    g.Cb(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    }) || RDb(a.C, c);
                    break;
                case "remoteDisconnected":
                    c = new mEb(d8(b.params.device));
                    g.Ib(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    lIb(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    nIb(a, b);
                    break;
                case "onStateChange":
                    mIb(a, b);
                    break;
                case "onAdStateChange":
                    oIb(a, b);
                    break;
                case "onVolumeChanged":
                    pIb(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    kIb(a, b);
                    break;
                case "nowAutoplaying":
                    qIb(a, b);
                    break;
                case "autoplayDismissed":
                    a.publish("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    rIb(a, b);
                    break;
                case "onAutoplayModeChanged":
                    sIb(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    tIb(a,
                        b);
                    break;
                case "requestAssistedSignIn":
                    a.publish("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.publish("loopModeChange", b.params.loopMode);
                    break;
                default:
                    S9("Unrecognized action: " + b.action)
            }
        },
        iIb = function(a) {
            g.CA(a.Y);
            a.Y = g.AA(function() {
                a.Wz(1)
            }, 864E5)
        },
        V9 = function(a, b, c) {
            c ? S9("Sending: action=" + b + ", params=" + g.nn(c)) : S9("Sending: action=" + b);
            a.B.sendMessage(b, c)
        },
        uIb = function(a) {
            g9.call(this, "ScreenServiceProxy");
            this.ih = a;
            this.j = [];
            this.j.push(this.ih.$_s("screenChange", (0, g.ib)(this.G5, this)));
            this.j.push(this.ih.$_s("onlineScreenChange", (0, g.ib)(this.yba, this)))
        },
        zIb = function(a, b) {
            FEb();
            if (!p8 || !p8.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.iA("MDX_CONFIG") || b;
                wEb();
                AEb();
                W9 || (W9 = new Z8(b ? b.loungeApiHost : void 0), GEb() && (W9.j = "/api/loungedev"));
                X9 || (X9 = g.Wa("yt.mdx.remote.deferredProxies_") || [], g.Va("yt.mdx.remote.deferredProxies_", X9));
                vIb();
                var c = Y9();
                if (!c) {
                    var d = new l9(W9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Va("yt.mdx.remote.screenService_", d);
                    c = Y9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Va("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    NHb(a, d, function(f) {
                        f ? Z9() && E9(Z9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            q8("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Wa("yt.mdx.remote.initialized_") && (g.Va("yt.mdx.remote.initialized_", !0), $9("Initializing: " + g.nn(b)),
                    a$.push(g.pD("yt-remote-cast2-api-ready", function() {
                        q8("yt-remote-api-ready")
                    })), a$.push(g.pD("yt-remote-cast2-availability-change", function() {
                        q8("yt-remote-receiver-availability-change")
                    })), a$.push(g.pD("yt-remote-cast2-receiver-selected", function() {
                        b$(null);
                        q8("yt-remote-auto-connect", "cast-selector-receiver")
                    })), a$.push(g.pD("yt-remote-cast2-receiver-resumed", function() {
                        q8("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), a$.push(g.pD("yt-remote-cast2-session-change", wIb)), a$.push(g.pD("yt-remote-connection-change", function(f) {
                        f ? E9(Z9(), "YouTube TV") : c$() || (E9(null, null), RHb())
                    })), a$.push(g.pD("yt-remote-cast2-session-failed", function() {
                        q8("yt-remote-connection-failed")
                    })), a = xIb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.EA("desktop_enable_autoplay") &&
                    e.push("atp"), e.length > 0 && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), $9(" -- with channel params: " + g.nn(a)), a ? (g.wB("yt-remote-session-app", a.app), g.wB("yt-remote-session-name", a.name)) : (g.yB("yt-remote-session-app"), g.yB("yt-remote-session-name")), g.Va("yt.mdx.remote.channelParams_", a), c.start(), Z9() || yIb())
            }
        },
        AIb = function() {
            var a = Y9().ih.$_gos();
            var b = d$();
            b && e$() && (vEb(a, b) || a.push(b));
            return uEb(a)
        },
        CIb = function() {
            var a = BIb();
            !a && C9() && QHb() && (a = {
                key: "cast-selector-receiver",
                name: QHb()
            });
            return a
        },
        BIb = function() {
            var a = AIb(),
                b = d$();
            b || (b = c$());
            return g.Cb(a, function(c) {
                return b && j8(b, c.key) ? !0 : !1
            })
        },
        d$ = function() {
            var a = Z9();
            if (!a) return null;
            var b = Y9().ql();
            return l8(b, a)
        },
        wIb = function(a) {
            $9("remote.onCastSessionChange_: " + k8(a));
            if (a) {
                var b = d$();
                if (b && b.id == a.id) {
                    if (E9(b.id, "YouTube TV"), a.idType == "shortLived" && (a = a.token)) f$ && (f$.token = a), (b = e$()) && b.Fs(a)
                } else b && g$(), h$(a, 1)
            } else e$() && g$()
        },
        g$ = function() {
            D9() ? B9().stopSession() : A9("stopSession called before API ready.");
            var a = e$();
            a && (a.disconnect(1), DIb(null))
        },
        EIb = function() {
            var a = e$();
            return !!a && a.getProxyState() != 3
        },
        $9 = function(a) {
            b9("remote", a)
        },
        Y9 = function() {
            if (!FIb) {
                var a = g.Wa("yt.mdx.remote.screenService_");
                FIb = a ? new uIb(a) : null
            }
            return FIb
        },
        Z9 = function() {
            return g.Wa("yt.mdx.remote.currentScreenId_")
        },
        GIb = function(a) {
            g.Va("yt.mdx.remote.currentScreenId_", a)
        },
        HIb = function() {
            return g.Wa("yt.mdx.remote.connectData_")
        },
        b$ = function(a) {
            g.Va("yt.mdx.remote.connectData_", a)
        },
        e$ = function() {
            return g.Wa("yt.mdx.remote.connection_")
        },
        DIb = function(a) {
            var b = e$();
            b$(null);
            a || GIb("");
            g.Va("yt.mdx.remote.connection_", a);
            X9 && (g.Zb(X9, function(c) {
                c(a)
            }), X9.length = 0);
            b && !a ? q8("yt-remote-connection-change", !1) : !b && a && q8("yt-remote-connection-change", !0)
        },
        c$ = function() {
            var a = g.zB();
            if (!a) return null;
            var b = Y9();
            if (!b) return null;
            b = b.ql();
            return l8(b, a)
        },
        h$ = function(a, b) {
            Z9();
            d$() && d$();
            if (i$) f$ = a;
            else {
                GIb(a.id);
                var c = g.Wa("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new U9(W9, a, xIb(), c);
                a.connect(b, HIb());
                a.subscribe("beforeDisconnect", function(d) {
                    q8("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    e$() && (e$(), DIb(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = d$();
                    d && d.idType == "shortLived" && (D9() ? B9().handleBrowserChannelAuthError() : A9("refreshLoungeToken called before API ready."))
                });
                DIb(a)
            }
        },
        yIb = function() {
            var a = c$();
            a ? ($9("Resume connection to: " + k8(a)), h$(a, 0)) : (o8(), RHb(), $9("Skipping connecting because no session screen found."))
        },
        vIb = function() {
            var a = xIb();
            if (g.gd(a)) {
                a = n8();
                var b = g.xB("yt-remote-session-name") || "",
                    c = g.xB("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                a.authuser = String(g.iA("SESSION_INDEX", "0"));
                (b = g.iA("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
                g.Va("yt.mdx.remote.channelParams_", a)
            }
        },
        xIb = function() {
            return g.Wa("yt.mdx.remote.channelParams_") || {}
        },
        KIb = function(a, b, c) {
            g.I.call(this);
            var d = this;
            this.module = a;
            this.J = b;
            this.Kc = c;
            this.events = new g.MJ(this);
            this.Y = this.events.T(this.J, "onVolumeChange", function(e) {
                IIb(d, e)
            });
            this.D = !1;
            this.G = new g.zK(64);
            this.j = new g.Cv(this.n2, 500, this);
            this.B = new g.Cv(this.o2, 1E3, this);
            this.N = new t8(this.kfa, 0, this);
            this.C = {};
            this.Z = new g.Cv(this.o3, 1E3, this);
            this.K = new u8(this.seekTo, 1E3, this);
            g.M(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.hba);
            this.events.T(b, "captionschanged", this.Caa);
            this.events.T(b, "captionssettingschanged", this.A2);
            this.events.T(b, "videoplayerreset", this.rL);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Kc.EX()
            });
            b.L("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
                JIb(d.module) || j$(d) || k$(d, 0)
            });
            a = this.Kc;
            a.Na();
            a.subscribe("proxyStateChange", this.l0, this);
            a.subscribe("remotePlayerChange", this.qG, this);
            a.subscribe("remoteQueueChange", this.rL, this);
            a.subscribe("previousNextChange", this.h0, this);
            a.subscribe("nowAutoplaying", this.d0, this);
            a.subscribe("autoplayDismissed", this.K_, this);
            g.M(this, this.j);
            g.M(this, this.B);
            g.M(this, this.N);
            g.M(this, this.Z);
            g.M(this, this.K);
            this.A2();
            this.rL();
            this.qG()
        },
        IIb = function(a, b) {
            if (j$(a)) {
                a.Kc.unsubscribe("remotePlayerChange", a.qG, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = M9(a.Kc);
                if (c !== d.volume || b !== d.muted) a.Kc.setVolume(c, b), a.Z.start();
                a.Kc.subscribe("remotePlayerChange", a.qG, a)
            }
        },
        LIb = function(a) {
            a.Tc(0);
            a.j.stop();
            a.Hc(new g.zK(64))
        },
        MIb = function(a, b) {
            if (j$(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.J.getSubtitlesUserSettings()
                }, g.md(c, b));
                a.Kc.qV(a.J.getVideoData(1).videoId, c);
                a.C = M9(a.Kc).trackData
            }
        },
        k$ = function(a, b) {
            var c = a.J.getPlaylist();
            if (c == null ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.J.getVideoData(1);
            a.Kc.playVideo(c.videoId, b, d, e, c.playerParams, c.va, QDb(c));
            a.Hc(new g.zK(1))
        },
        NIb = function(a, b) {
            if (b) {
                var c = a.J.getOption("captions", "tracklist", {
                    jZ: 1
                });
                c && c.length ? (a.J.setOption("captions", "track", b), a.D = !1) : (a.J.loadModule("captions"), a.D = !0)
            } else a.J.setOption("captions", "track", {})
        },
        j$ = function(a) {
            return M9(a.Kc).videoId === a.J.getVideoData(1).videoId
        },
        l$ = function() {
            g.W.call(this, {
                I: "div",
                S: "ytp-mdx-popup-dialog",
                W: {
                    role: "dialog"
                },
                V: [{
                    I: "div",
                    S: "ytp-mdx-popup-dialog-inner-content",
                    V: [{
                        I: "div",
                        S: "ytp-mdx-popup-title",
                        xa: "You're signed out"
                    }, {
                        I: "div",
                        S: "ytp-mdx-popup-description",
                        xa: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        I: "div",
                        S: "ytp-mdx-privacy-popup-buttons",
                        V: [{
                            I: "button",
                            La: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            xa: "Cancel"
                        }, {
                            I: "button",
                            La: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            xa: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.qF(this, 250);
            this.cancelButton = this.Fa("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Fa("ytp-mdx-privacy-popup-confirm");
            g.M(this, this.j);
            this.T(this.cancelButton, "click", this.B);
            this.T(this.confirmButton, "click", this.C)
        },
        m$ = function(a) {
            g.W.call(this, {
                I: "div",
                S: "ytp-remote",
                V: [{
                    I: "div",
                    S: "ytp-remote-display-status",
                    V: [{
                        I: "div",
                        S: "ytp-remote-display-status-icon",
                        V: [g.dya()]
                    }, {
                        I: "div",
                        S: "ytp-remote-display-status-text",
                        xa: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.qF(this, 250);
            g.M(this, this.j);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.Ic(a.getPlayerStateObject())
        },
        n$ = function(a, b) {
            g.AU.call(this, "Play on", 1, a, b);
            this.J = a;
            this.Vu = {};
            this.T(a, "onMdxReceiversChange", this.D);
            this.T(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        OIb = function(a) {
            g.fV.call(this, a);
            this.hq = {
                key: tEb(),
                name: "This computer"
            };
            this.pm = null;
            this.subscriptions = [];
            this.xS = this.Kc = null;
            this.Vu = [this.hq];
            this.Ft = this.hq;
            this.Ge = new g.zK(64);
            this.KZ = 0;
            this.ai = -1;
            this.JG = !1;
            this.IG = this.PB = null;
            if (!g.sR(this.player.U()) && !g.PF(this.player.U())) {
                a = this.player;
                var b = g.uT(a);
                b && (b = b.Gm()) && (b = new n$(a, b), g.M(this, b));
                b = new m$(a);
                g.M(this, b);
                g.GT(a, b.element, 4);
                this.PB = new l$;
                g.M(this, this.PB);
                g.GT(a, this.PB.element, 4);
                this.JG = !!c$()
            }
        },
        o$ = function(a) {
            a.IG && (a.player.removeEventListener("presentingplayerstatechange",
                a.IG), a.IG = null)
        },
        PIb = function(a, b, c) {
            a.Ge = c;
            a.player.publish("presentingplayerstatechange", new g.wF(c, b))
        },
        p$ = function(a, b) {
            if (b.key !== a.Ft.key)
                if (b.key === a.hq.key) g$();
                else if (JIb(a) && QIb(a), a.Ft = b, !a.player.U().L("disable_mdx_connection_in_mdx_module_for_music_web") || !g.PF(a.player.U())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (a.player.getAppState() === 2 || a.player.getAppState() === 1) && a.player.U().L("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.length; l++) h[l] = g.cV(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.va,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: f === 0 ? void 0 : f
                    };
                    (d = QDb(d)) && (a.locationInfo = d);
                    d = a
                }
                $9("Connecting to: " + g.nn(b));
                b.key == "cast-selector-receiver" ? (b$(d || null), b = d || null, D9() ? B9().setLaunchParams(b) : A9("setLaunchParams called before ready.")) : !d && EIb() && Z9() == b.key ? q8("yt-remote-connection-change", !0) : (g$(), b$(d || null), d = Y9().ql(), (b = l8(d, b.key)) && h$(b, 1))
            }
        },
        JIb = function(a) {
            var b = a.player.U();
            return !b.L("mdx_enable_privacy_disclosure_ui") || a.isLoggedIn() || a.JG || !a.PB ? !1 : g.DR(b) || g.FR(b)
        },
        QIb = function(a) {
            a.player.getPlayerStateObject().isPlaying() ? a.player.pauseVideo() : (a.IG = function(b) {
                !a.JG && g.zF(b, 8) && (a.player.pauseVideo(), o$(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.IG));
            a.PB && a.PB.od();
            e$() || (i$ = !0)
        };
    g.k = g8.prototype;
    g.k.Hm = function() {
        h8(this);
        for (var a = [], b = 0; b < this.j.length; b++) a.push(this.B[this.j[b]]);
        return a
    };
    g.k.Rn = function() {
        h8(this);
        return this.j.concat()
    };
    g.k.has = function(a) {
        return f8(this.B, a)
    };
    g.k.isEmpty = function() {
        return this.size == 0
    };
    g.k.clear = function() {
        this.B = {};
        this.Cv = this.size = this.j.length = 0
    };
    g.k.remove = function(a) {
        return this.delete(a)
    };
    g.k.delete = function(a) {
        return f8(this.B, a) ? (delete this.B[a], --this.size, this.Cv++, this.j.length > 2 * this.size && h8(this), !0) : !1
    };
    g.k.get = function(a, b) {
        return f8(this.B, a) ? this.B[a] : b
    };
    g.k.set = function(a, b) {
        f8(this.B, a) || (this.size += 1, this.j.push(a), this.Cv++);
        this.B[a] = b
    };
    g.k.forEach = function(a, b) {
        for (var c = this.Rn(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    g.k.clone = function() {
        return new g8(this)
    };
    g.k.keys = function() {
        return g.Cla(this.mm(!0)).j()
    };
    g.k.values = function() {
        return g.Cla(this.mm(!1)).j()
    };
    g.k.entries = function() {
        var a = this;
        return iEb(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    g.k.mm = function(a) {
        h8(this);
        var b = 0,
            c = this.Cv,
            d = this,
            e = new g.Dt;
        e.next = function() {
            if (c != d.Cv) throw Error("The map has changed since the iterator was created");
            if (b >= d.j.length) return g.n2;
            var f = d.j[b++];
            return g.Et(a ? f : d.B[f])
        };
        return e
    };
    var nEb = {
            hra: "atp",
            D9a: "ska",
            I5a: "que",
            NXa: "mus",
            B9a: "sus",
            AIa: "dsp",
            z7a: "seq",
            kWa: "mic",
            Sya: "dpa",
            Jsa: "cds",
            BXa: "mlm",
            Gya: "dsdtr",
            nYa: "ntb",
            zlb: "vsp",
            Hza: "scn",
            W5a: "rpe",
            Dya: "dcn",
            Eya: "dcp",
            h2a: "pas",
            Fya: "drq",
            N0a: "opf",
            Gza: "els",
            R7a: "svq",
            CXa: "mvp"
        },
        oEb = {
            W6: "u",
            Z3: "cl",
            B6: "k",
            y4: "i",
            d4: "cr",
            I6: "m",
            v4: "g",
            mW: "up"
        },
        zEb = "",
        p8 = null;
    HEb.prototype.flush = function(a, b) {
        a = a === void 0 ? [] : a;
        b = b === void 0 ? !1 : b;
        if (g.EA("enable_client_streamz_web")) {
            a = g.v(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.ifa(c.value), c = {
                serializedIncrementBatch: g.Bg(c.j())
            }, g.UB("streamzIncremented", c, {
                sendIsolatedPayload: b
            })
        }
    };
    var r8, PEb = JEb("loadCastFramework") || JEb("loadCastApplicationFramework"),
        SEb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.lb(t8, g.I);
    g.k = t8.prototype;
    g.k.k5 = function(a) {
        this.D = arguments;
        this.j = !1;
        this.rd ? this.C = g.kb() + this.Xi : this.rd = g.ng(this.G, this.Xi)
    };
    g.k.stop = function() {
        this.rd && (g.Ua.clearTimeout(this.rd), this.rd = null);
        this.C = null;
        this.j = !1;
        this.D = []
    };
    g.k.pause = function() {
        ++this.B
    };
    g.k.resume = function() {
        this.B && (--this.B, !this.B && this.j && (this.j = !1, this.K.apply(null, this.D)))
    };
    g.k.ya = function() {
        this.stop();
        t8.Of.ya.call(this)
    };
    g.k.l5 = function() {
        this.rd && (g.Ua.clearTimeout(this.rd), this.rd = null);
        this.C ? (this.rd = g.ng(this.G, this.C - g.kb()), this.C = null) : this.B ? this.j = !0 : (this.j = !1, this.K.apply(null, this.D))
    };
    g.x(u8, g.I);
    g.k = u8.prototype;
    g.k.aN = function(a) {
        this.C = arguments;
        this.rd || this.B ? this.j = !0 : UEb(this)
    };
    g.k.stop = function() {
        this.rd && (g.Ua.clearTimeout(this.rd), this.rd = null, this.j = !1, this.C = null)
    };
    g.k.pause = function() {
        this.B++
    };
    g.k.resume = function() {
        this.B--;
        this.B || !this.j || this.rd || (this.j = !1, UEb(this))
    };
    g.k.ya = function() {
        g.I.prototype.ya.call(this);
        this.stop()
    };
    v8.prototype.stringify = function(a) {
        return g.Ua.JSON.stringify(a, void 0)
    };
    v8.prototype.parse = function(a) {
        return g.Ua.JSON.parse(a, void 0)
    };
    g.lb(VEb, g.yb);
    g.lb(WEb, g.yb);
    var XEb = null;
    g.lb(ZEb, g.yb);
    g.lb($Eb, g.yb);
    g.lb(aFb, g.yb);
    z8.prototype.debug = function() {};
    z8.prototype.info = function() {};
    z8.prototype.warning = function() {};
    var iFb = {},
        hFb = {};
    g.k = A8.prototype;
    g.k.setTimeout = function(a) {
        this.ib = a
    };
    g.k.n5 = function(a) {
        a = a.target;
        var b = this.Xa;
        b && g.xo(a) == 3 ? b.aN() : this.UU(a)
    };
    g.k.UU = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.xo(this.j),
                    c = this.j.B,
                    d = this.j.getStatus();
                if (!(b < 3) && (b != 3 || this.j && (this.B.B || g.zo(this.j) || g.Ao(this.j)))) {
                    this.Ma || b != 4 || c == 7 || (c == 8 || d <= 0 ? w8(3) : w8(2));
                    lFb(this);
                    var e = this.j.getStatus();
                    this.Kb = e;
                    var f = gFb(this);
                    if (this.K = e == 200) {
                        if (this.Ab && !this.Wa) {
                            b: {
                                if (this.j) {
                                    var h = g.Bo(this.j, "X-HTTP-Initial-Response");
                                    if (h && !g.fc(h)) {
                                        var l = h;
                                        break b
                                    }
                                }
                                l = null
                            }
                            if (a = l) this.Wa = !0,
                            uFb(this, a);
                            else {
                                this.K = !1;
                                this.G = 3;
                                x8(12);
                                C8(this);
                                D8(this);
                                break a
                            }
                        }
                        if (this.Ga) {
                            a = !0;
                            for (var m; !this.Ma && this.N < f.length;)
                                if (m = jFb(this, f), m == hFb) {
                                    b == 4 && (this.G = 4, x8(14), a = !1);
                                    break
                                } else if (m == iFb) {
                                this.G = 4;
                                x8(15);
                                a = !1;
                                break
                            } else uFb(this, m);
                            fFb(this) && this.N != 0 && (this.B.j = this.B.j.slice(this.N), this.N = 0);
                            b != 4 || f.length != 0 || this.B.B || (this.G = 1, x8(16), a = !1);
                            this.K = this.K && a;
                            a ? f.length > 0 && !this.Lb && (this.Lb = !0, this.C.GR(this)) : (C8(this), D8(this))
                        } else uFb(this, f);
                        b == 4 && C8(this);
                        this.K && !this.Ma && (b == 4 ? mFb(this.C, this) : (this.K = !1, B8(this)))
                    } else g.Wfa(this.j), e == 400 && f.indexOf("Unknown SID") >
                        0 ? (this.G = 3, x8(12)) : (this.G = 0, x8(13)), C8(this), D8(this)
                }
            }
        } catch (n) {} finally {}
    };
    g.k.cancel = function() {
        this.Ma = !0;
        C8(this)
    };
    g.k.m5 = function() {
        this.ra = null;
        var a = Date.now();
        a - this.rb >= 0 ? (this.Sa != 2 && (w8(3), x8(17)), C8(this), this.G = 2, D8(this)) : kFb(this, this.rb - a)
    };
    g.k.getLastError = function() {
        return this.G
    };
    g.k.YP = function() {
        return this.j
    };
    wFb.prototype.cancel = function() {
        this.C = yFb(this);
        if (this.B) this.B.cancel(), this.B = null;
        else if (this.j && this.j.size !== 0) {
            for (var a = g.v(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = DFb.prototype;
    g.k.VU = 8;
    g.k.Rh = 1;
    g.k.connect = function(a, b, c, d) {
        x8(0);
        this.Ub = a;
        this.Ma = b || {};
        c && d !== void 0 && (this.Ma.OSID = c, this.Ma.OAID = d);
        this.Wa = this.Bc;
        this.Oa = rFb(this, null, this.Ub);
        H8(this)
    };
    g.k.disconnect = function() {
        FFb(this);
        if (this.Rh == 3) {
            var a = this.eb++,
                b = this.Oa.clone();
            g.pq(b, "SID", this.D);
            g.pq(b, "RID", a);
            g.pq(b, "TYPE", "terminate");
            K8(this, b);
            a = new A8(this, this.D, a);
            a.Sa = 2;
            a.Z = b8(b.clone());
            b = !1;
            if (g.Ua.navigator && g.Ua.navigator.sendBeacon) try {
                b = g.Ua.navigator.sendBeacon(a.Z.toString(), "")
            } catch (c) {}!b && g.Ua.Image && ((new Image).src = a.Z, b = !0);
            b || (a.j = eFb(a.C, null), a.j.send(a.Z));
            a.Da = Date.now();
            B8(a)
        }
        LFb(this)
    };
    g.k.Pg = function() {
        return this.Rh == 0
    };
    g.k.getState = function() {
        return this.Rh
    };
    g.k.XU = function(a) {
        if (this.K)
            if (this.K = null, this.Rh == 1) {
                if (!a) {
                    this.eb = Math.floor(Math.random() * 1E5);
                    a = this.eb++;
                    var b = new A8(this, "", a),
                        c = this.Y;
                    this.Kb && (c ? (c = g.jd(c), g.md(c, this.Kb)) : c = this.Kb);
                    this.N !== null || this.rb || (b.Oa = c, c = null);
                    var d;
                    if (this.Cb) a: {
                        for (var e = d = 0; e < this.C.length; e++) {
                            b: {
                                var f = this.C[e];
                                if ("__data__" in f.map && (f = f.map.__data__, typeof f === "string")) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (f === void 0) break;d += f;
                            if (d > 4096) {
                                d = e;
                                break a
                            }
                            if (d === 4096 || e === this.C.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = IFb(this, b, d);
                    e = this.Oa.clone();
                    g.pq(e, "RID", a);
                    g.pq(e, "CVER", 22);
                    this.Ga && g.pq(e, "X-HTTP-Session-Id", this.Ga);
                    K8(this, e);
                    c && (this.rb ? d = "headers=" + g.Ze(g.Jga(c)) + "&" + d : this.N && g.tq(e, this.N, c));
                    qFb(this.B, b);
                    this.Tf && g.pq(e, "TYPE", "init");
                    this.Cb ? (g.pq(e, "$req", d), g.pq(e, "SID", "null"), b.Ab = !0, dFb(b, e, null)) : dFb(b, e, d);
                    this.Rh = 2
                }
            } else this.Rh == 3 && (a ? JFb(this, a) : this.C.length == 0 || xFb(this.B) || JFb(this))
    };
    g.k.WU = function() {
        this.Z = null;
        KFb(this);
        if (this.Cc && !(this.ib || this.j == null || this.Zc <= 0)) {
            var a = 2 * this.Zc;
            this.Ha = y8((0, g.ib)(this.Baa, this), a)
        }
    };
    g.k.Baa = function() {
        this.Ha && (this.Ha = null, this.Wa = !1, this.ib = !0, x8(10), F8(this), KFb(this))
    };
    g.k.GR = function(a) {
        this.j == a && this.Cc && !this.ib && (EFb(this), this.ib = !0, x8(11))
    };
    g.k.o5 = function() {
        this.ra != null && (this.ra = null, F8(this), oFb(this), x8(19))
    };
    g.k.Nea = function(a) {
        a ? x8(2) : x8(1)
    };
    g.k.isActive = function() {
        return !!this.G && this.G.isActive(this)
    };
    g.k = NFb.prototype;
    g.k.bV = function() {};
    g.k.aV = function() {};
    g.k.ZU = function() {};
    g.k.YU = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.p5 = function() {};
    g.lb(M8, g.Fd);
    M8.prototype.open = function() {
        this.j.G = this.C;
        this.K && (this.j.Sa = !0);
        this.j.connect(this.G, this.B || void 0)
    };
    M8.prototype.close = function() {
        this.j.disconnect()
    };
    M8.prototype.send = function(a) {
        var b = this.j;
        if (typeof a === "string") {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.D && (c = {}, c.__data__ = g.nn(a), a = c);
        b.C.push(new vFb(b.Rf++, a));
        b.Rh == 3 && H8(b)
    };
    M8.prototype.ya = function() {
        this.j.G = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        M8.Of.ya.call(this)
    };
    g.lb(PFb, VEb);
    g.lb(QFb, WEb);
    g.lb(L8, NFb);
    L8.prototype.bV = function() {
        this.j.dispatchEvent("m")
    };
    L8.prototype.aV = function(a) {
        this.j.dispatchEvent(new PFb(a))
    };
    L8.prototype.ZU = function(a) {
        this.j.dispatchEvent(new QFb(a))
    };
    L8.prototype.YU = function() {
        this.j.dispatchEvent("n")
    };
    var O8 = new g.Fd;
    g.x(TFb, g.yb);
    g.k = Q8.prototype;
    g.k.Pv = null;
    g.k.Vs = !1;
    g.k.Wy = null;
    g.k.cN = null;
    g.k.nD = null;
    g.k.fI = null;
    g.k.kD = null;
    g.k.eI = null;
    g.k.Rv = null;
    g.k.pj = null;
    g.k.hI = 0;
    g.k.O2 = null;
    g.k.gI = null;
    g.k.Qv = null;
    g.k.mD = -1;
    g.k.J1 = !0;
    g.k.lD = !1;
    g.k.bN = 0;
    g.k.dI = null;
    var ZFb = {},
        YFb = {};
    g.k = Q8.prototype;
    g.k.setTimeout = function(a) {
        this.B = a
    };
    g.k.r5 = function(a) {
        a = a.target;
        var b = this.dI;
        b && g.xo(a) == 3 ? b.aN() : this.cV(a)
    };
    g.k.cV = function(a) {
        try {
            if (a == this.pj) a: {
                var b = g.xo(this.pj),
                    c = this.pj.B,
                    d = this.pj.getStatus();
                if (g.Nc && !g.Mc("420+")) {
                    if (b < 4) break a
                } else if (b < 3 || b == 3 && !g.zo(this.pj)) break a;this.lD || b != 4 || c == 7 || (c == 8 || d <= 0 ? this.j.gs(3) : this.j.gs(2));bGb(this);
                var e = this.pj.getStatus();this.mD = e;
                var f = g.zo(this.pj);
                if (this.Vs = e == 200) {
                    b == 4 && R8(this);
                    if (this.Ga) {
                        for (a = !0; !this.lD && this.hI < f.length;) {
                            var h = $Fb(this, f);
                            if (h == YFb) {
                                b == 4 && (this.Qv = 4, P8(15), a = !1);
                                break
                            } else if (h == ZFb) {
                                this.Qv = 4;
                                P8(16);
                                a = !1;
                                break
                            } else dGb(this,
                                h)
                        }
                        b == 4 && f.length == 0 && (this.Qv = 1, P8(17), a = !1);
                        this.Vs = this.Vs && a;
                        a || (R8(this), cGb(this))
                    } else dGb(this, f);
                    this.Vs && !this.lD && (b == 4 ? this.j.fN(this) : (this.Vs = !1, XFb(this)))
                } else e == 400 && f.indexOf("Unknown SID") > 0 ? (this.Qv = 3, P8(13)) : (this.Qv = 0, P8(14)),
                R8(this),
                cGb(this)
            }
        } catch (l) {} finally {}
    };
    g.k.cancel = function() {
        this.lD = !0;
        R8(this)
    };
    g.k.q5 = function() {
        this.Wy = null;
        var a = Date.now();
        a - this.cN >= 0 ? (this.fI != 2 && this.j.gs(3), R8(this), this.Qv = 2, P8(18), cGb(this)) : aGb(this, this.cN - a)
    };
    g.k.getLastError = function() {
        return this.Qv
    };
    g.k = gGb.prototype;
    g.k.eN = null;
    g.k.Uk = null;
    g.k.PL = !1;
    g.k.gN = null;
    g.k.Zl = null;
    g.k.Vq = -1;
    g.k.iI = null;
    g.k.aE = null;
    g.k.connect = function(a) {
        this.gN = a;
        a = T8(this.j, null, this.gN);
        P8(3);
        Date.now();
        var b = this.j.Y;
        b != null ? (this.iI = b[0], (this.aE = b[1]) ? (this.Zl = 1, hGb(this)) : (this.Zl = 2, iGb(this))) : (c8(a, "MODE", "init"), this.Uk = new Q8(this), this.Uk.Pv = this.eN, WFb(this.Uk, a, !1, null, !0), this.Zl = 0)
    };
    g.k.F7 = function(a) {
        if (a) this.Zl = 2, iGb(this);
        else {
            P8(4);
            var b = this.j;
            b.jp = b.Ct.Vq;
            X8(b, 9)
        }
        a && this.gs(2)
    };
    g.k.dN = function(a) {
        return this.j.dN(a)
    };
    g.k.abort = function() {
        this.Uk && (this.Uk.cancel(), this.Uk = null);
        this.Vq = -1
    };
    g.k.Pg = function() {
        return !1
    };
    g.k.dV = function(a, b) {
        this.Vq = a.mD;
        if (this.Zl == 0)
            if (b) {
                try {
                    var c = this.B.parse(b)
                } catch (d) {
                    a = this.j;
                    a.jp = this.Vq;
                    X8(a, 2);
                    return
                }
                this.iI = c[0];
                this.aE = c[1]
            } else a = this.j, a.jp = this.Vq, X8(a, 2);
        else this.Zl == 2 && (this.PL ? (P8(7), Date.now()) : b == "11111" ? (P8(6), this.PL = !0, Date.now(), this.Vq = 200, this.Uk.cancel(), P8(12), U8(this.j, this, !0)) : (P8(8), Date.now(), this.PL = !1))
    };
    g.k.fN = function() {
        this.Vq = this.Uk.mD;
        if (this.Uk.Vs) this.Zl == 0 ? this.aE ? (this.Zl = 1, hGb(this)) : (this.Zl = 2, iGb(this)) : this.Zl == 2 && (this.PL ? (P8(12), U8(this.j, this, !0)) : (P8(11), U8(this.j, this, !1)));
        else {
            this.Zl == 0 ? P8(9) : this.Zl == 2 && P8(10);
            var a = this.j;
            this.Uk.getLastError();
            a.jp = this.Vq;
            X8(a, 2)
        }
    };
    g.k.oD = function() {
        return this.j.oD()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.gs = function(a) {
        this.j.gs(a)
    };
    g.k = jGb.prototype;
    g.k.ip = null;
    g.k.pD = null;
    g.k.jk = null;
    g.k.Wg = null;
    g.k.iN = null;
    g.k.jI = null;
    g.k.eV = null;
    g.k.hN = null;
    g.k.qD = 0;
    g.k.t5 = 0;
    g.k.Pi = null;
    g.k.Ws = null;
    g.k.Wq = null;
    g.k.Tv = null;
    g.k.Ct = null;
    g.k.JM = null;
    g.k.Zy = -1;
    g.k.fV = -1;
    g.k.jp = -1;
    g.k.Yy = 0;
    g.k.Xy = 0;
    g.k.Sv = 8;
    g.lb(lGb, g.yb);
    g.lb(mGb, g.yb);
    g.k = jGb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        P8(0);
        this.iN = b;
        this.pD = c || {};
        d && e !== void 0 && (this.pD.OSID = d, this.pD.OAID = e);
        this.Z ? (N8((0, g.ib)(this.qX, this, a), 100), oGb(this)) : this.qX(a)
    };
    g.k.disconnect = function() {
        pGb(this);
        if (this.j == 3) {
            var a = this.qD++,
                b = this.jI.clone();
            g.pq(b, "SID", this.D);
            g.pq(b, "RID", a);
            g.pq(b, "TYPE", "terminate");
            W8(this, b);
            a = new Q8(this, this.D, a);
            a.fI = 2;
            a.kD = b8(b.clone());
            (new Image).src = a.kD.toString();
            a.nD = Date.now();
            XFb(a)
        }
        zGb(this)
    };
    g.k.qX = function(a) {
        this.Ct = new gGb(this);
        this.Ct.eN = this.ip;
        this.Ct.B = this.G;
        this.Ct.connect(a)
    };
    g.k.Pg = function() {
        return this.j == 0
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.hV = function(a) {
        this.Ws = null;
        uGb(this, a)
    };
    g.k.gV = function() {
        this.Wq = null;
        this.Wg = new Q8(this, this.D, "rpc", this.N);
        this.Wg.Pv = this.ip;
        this.Wg.bN = 0;
        var a = this.eV.clone();
        g.pq(a, "RID", "rpc");
        g.pq(a, "SID", this.D);
        g.pq(a, "CI", this.JM ? "0" : "1");
        g.pq(a, "AID", this.Zy);
        W8(this, a);
        g.pq(a, "TYPE", "xmlhttp");
        WFb(this.Wg, a, !0, this.hN, !1)
    };
    g.k.dV = function(a, b) {
        if (this.j != 0 && (this.Wg == a || this.jk == a))
            if (this.jp = a.mD, this.jk == a && this.j == 3)
                if (this.Sv > 7) {
                    try {
                        var c = this.G.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && c.length == 3)
                        if (a = c, a[0] == 0) a: {
                            if (!this.Wq) {
                                if (this.Wg)
                                    if (this.Wg.nD + 3E3 < this.jk.nD) V8(this), this.Wg.cancel(), this.Wg = null;
                                    else break a;
                                xGb(this);
                                P8(19)
                            }
                        }
                    else this.fV = a[1], 0 < this.fV - this.Zy && a[2] < 37500 && this.JM && this.Xy == 0 && !this.Tv && (this.Tv = N8((0, g.ib)(this.u5, this), 6E3));
                    else X8(this, 11)
                } else b != null && X8(this, 11);
        else if (this.Wg ==
            a && V8(this), !g.fc(b))
            for (a = this.G.parse(b), b = 0; b < a.length; b++) c = a[b], this.Zy = c[0], c = c[1], this.j == 2 ? c[0] == "c" ? (this.D = c[1], this.hN = c[2], c = c[3], c != null ? this.Sv = c : this.Sv = 6, this.j = 3, this.Pi && this.Pi.kV(), this.eV = T8(this, this.oD() ? this.hN : null, this.iN), vGb(this)) : c[0] == "stop" && X8(this, 7) : this.j == 3 && (c[0] == "stop" ? X8(this, 7) : c[0] != "noop" && this.Pi && this.Pi.jV(c), this.Xy = 0)
    };
    g.k.u5 = function() {
        this.Tv != null && (this.Tv = null, this.Wg.cancel(), this.Wg = null, xGb(this), P8(20))
    };
    g.k.fN = function(a) {
        if (this.Wg == a) {
            V8(this);
            this.Wg = null;
            var b = 2
        } else if (this.jk == a) this.jk = null, b = 1;
        else return;
        this.jp = a.mD;
        if (this.j != 0)
            if (a.Vs)
                if (b == 1) {
                    b = a.Rv ? a.Rv.length : 0;
                    a = Date.now() - a.nD;
                    var c = O8;
                    c.dispatchEvent(new lGb(c, b, a, this.Yy));
                    nGb(this);
                    this.C.length = 0
                } else vGb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = c == 3 || c == 7 || c == 0 && this.jp > 0)) {
                if (d = b == 1) this.jk || this.Ws || this.j == 1 || this.Yy >= 2 ? d = !1 : (this.Ws = N8((0, g.ib)(this.hV, this, a), wGb(this, this.Yy)), this.Yy++, d = !0);
                d = !(d || b == 2 && xGb(this))
            }
            if (d) switch (c) {
                case 1:
                    X8(this,
                        5);
                    break;
                case 4:
                    X8(this, 10);
                    break;
                case 3:
                    X8(this, 6);
                    break;
                case 7:
                    X8(this, 12);
                    break;
                default:
                    X8(this, 2)
            }
        }
    };
    g.k.s5 = function(a) {
        if (!g.Eb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.Mea = function(a) {
        a ? P8(2) : (P8(1), yGb(this, 8))
    };
    g.k.dN = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.uo;
        a.K = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Pi && this.Pi.isActive(this)
    };
    g.k.gs = function(a) {
        var b = O8;
        b.dispatchEvent(new mGb(b, a))
    };
    g.k.oD = function() {
        return !1
    };
    g.k = AGb.prototype;
    g.k.kV = function() {};
    g.k.jV = function() {};
    g.k.iV = function() {};
    g.k.jN = function() {};
    g.k.lV = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = BGb.prototype;
    g.k.enqueue = function(a) {
        this.B.push(a)
    };
    g.k.isEmpty = function() {
        return this.j.length === 0 && this.B.length === 0
    };
    g.k.clear = function() {
        this.j = [];
        this.B = []
    };
    g.k.contains = function(a) {
        return g.Eb(this.j, a) || g.Eb(this.B, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.Fkb)(b, a);
        c >= 0 ? (g.Fb(b, c), b = !0) : b = !1;
        return b || g.Gb(this.B, a)
    };
    g.k.Hm = function() {
        for (var a = [], b = this.j.length - 1; b >= 0; --b) a.push(this.j[b]);
        var c = this.B.length;
        for (b = 0; b < c; ++b) a.push(this.B[b]);
        return a
    };
    g.x(CGb, g.yb);
    g.x(DGb, g.yb);
    g.lb(Y8, g.I);
    g.k = Y8.prototype;
    g.k.Eca = function() {
        this.Xi = Math.min(3E5, this.Xi * 2);
        this.C();
        this.B && this.start()
    };
    g.k.start = function() {
        var a = this.Xi + 15E3 * Math.random();
        g.Dv(this.j, a);
        this.B = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.B = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.Xi = 5E3
    };
    g.lb(FGb, AGb);
    g.k = FGb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.C.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.C.unsubscribe(a, b, c)
    };
    g.k.Qh = function(a) {
        return this.C.Qh(a)
    };
    g.k.publish = function(a, b) {
        return this.C.publish.apply(this.C, arguments)
    };
    g.k.dispose = function() {
        this.ra || (this.ra = !0, g.ub(this.C), this.disconnect(), g.ub(this.B), this.B = null, this.va = function() {
            return ""
        })
    };
    g.k.Na = function() {
        return this.ra
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || this.j.getState() != 2) {
            this.Y = "";
            this.B.stop();
            this.K = a || null;
            this.G = b || 0;
            a = this.Da + "/test";
            b = this.Da + "/bind";
            var d = new jGb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Sa),
                e = this.j;
            e && (e.Pi = null);
            d.Pi = this;
            this.j = d;
            GGb(this);
            if (this.j) {
                d = g.iA("ID_TOKEN");
                var f = this.j.ip || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.ip = f
            }
            e ? (e.getState() != 3 && rGb(e) == 0 || e.getState(), this.j.connect(a, b, this.N, e.D, e.Zy)) : c ? this.j.connect(a,
                b, this.N, c.sessionId, c.arrayId) : this.j.connect(a, b, this.N)
        }
    };
    g.k.disconnect = function(a) {
        this.Z = a || 0;
        this.B.stop();
        GGb(this);
        this.j && (this.j.getState() == 3 && uGb(this.j), this.j.disconnect());
        this.Z = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.md(a, b);
        this.B.isActive() || (this.j ? this.j.getState() : 0) == 2 ? this.D.push(a) : this.HA() && (GGb(this), qGb(this.j, a))
    };
    g.k.kV = function() {
        this.B.reset();
        this.K = null;
        this.G = 0;
        if (this.D.length) {
            var a = this.D;
            this.D = [];
            for (var b = 0, c = a.length; b < c; ++b) qGb(this.j, a[b])
        }
        this.publish("handlerOpened");
        $Db(this.Oa, "BROWSER_CHANNEL")
    };
    g.k.iV = function(a) {
        var b = a == 2 && this.j.jp == 401;
        a == 4 || b || this.B.start();
        this.publish("handlerError", a, b);
        fEb(this.Ga, "BROWSER_CHANNEL")
    };
    g.k.jN = function(a, b) {
        if (!this.B.isActive()) this.publish("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.D.push(e)
            }
        bEb(this.Ha, "BROWSER_CHANNEL");
        a && this.Xa.j.lN("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.eb.j.lN("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.lV = function() {
        var a = {
            v: 2
        };
        this.Y && (a.gsessionid = this.Y);
        this.G != 0 && (a.ui = "" + this.G);
        this.Z != 0 && (a.ui = "" + this.Z);
        this.K && g.md(a, this.K);
        return a
    };
    g.k.jV = function(a) {
        a[0] == "S" ? this.Y = a[1] : a[0] == "gracefulReconnect" ? (this.B.start(), this.j.disconnect()) : this.publish("handlerMessage", new EGb(a[0], a[1]));
        dEb(this.Ma, "BROWSER_CHANNEL")
    };
    g.k.HA = function() {
        return !!this.j && this.j.getState() == 3
    };
    g.k.Fs = function(a) {
        (this.N.loungeIdToken = a) || this.B.stop();
        if (this.Wa && this.j) {
            var b = this.j.ip || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.ip = b
        }
    };
    g.k.getDeviceId = function() {
        return this.N.id
    };
    g.k.Tt = function() {
        return this.B.isActive() ? this.B.B - Date.now() : NaN
    };
    g.k.jy = function() {
        var a = this.B;
        g.Ev(a.j);
        a.start()
    };
    g.k.Sda = function() {
        this.B.isActive();
        rGb(this.j) == 0 && this.connect(this.K, this.G)
    };
    Z8.prototype.sendRequest = function(a, b, c, d, e, f, h) {
        a = {
            format: f ? "RAW" : "JSON",
            method: a,
            context: this,
            timeout: 5E3,
            withCredentials: !!h,
            onSuccess: g.jb(this.D, d, !f),
            onError: g.jb(this.C, e),
            onTimeout: g.jb(this.G, e)
        };
        c && (a.postParams = c, a.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return g.GA(b, a)
    };
    Z8.prototype.D = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    Z8.prototype.C = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    Z8.prototype.G = function(a) {
        a(Error("request timed out"))
    };
    g.x(HGb, g.Fd);
    g.k = HGb.prototype;
    g.k.connect = function(a, b, c) {
        this.Hd.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.Hd.disconnect(a)
    };
    g.k.jy = function() {
        this.Hd.jy()
    };
    g.k.getDeviceId = function() {
        return this.Hd.getDeviceId()
    };
    g.k.Tt = function() {
        return this.Hd.Tt()
    };
    g.k.HA = function() {
        return this.Hd.HA()
    };
    g.k.v5 = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Hd,
            b = this.j;
        g.wB("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.JM,
            sessionId: a.j.D,
            arrayId: a.j.Zy
        });
        g.wB("yt-remote-session-screen-id", b);
        a = m8();
        b = n8();
        g.Eb(a, b) || a.push(b);
        yEb(a);
        AEb()
    };
    g.k.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.onMessage = function(a) {
        this.dispatchEvent(new CGb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new DGb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.Hd.sendMessage(a, b)
    };
    g.k.Fs = function(a) {
        this.Hd.Fs(a)
    };
    g.k.dispose = function() {
        this.Hd.dispose()
    };
    g.k = IGb.prototype;
    g.k.connect = function(a, b) {
        a = a === void 0 ? {} : a;
        b = b === void 0 ? 0 : b;
        this.K !== 2 && (this.C.stop(), this.Z = a, this.N = b, KGb(this), (a = g.iA("ID_TOKEN")) ? this.D["x-youtube-identity-token"] = a : delete this.D["x-youtube-identity-token"], this.j && (this.B.device = this.j.device, this.B.name = this.j.name, this.B.app = this.j.app, this.B.id = this.j.id, this.j.Q$ && (this.B.mdxVersion = "" + this.j.Q$), this.j.theme && (this.B.theme = this.j.theme), this.j.capabilities && (this.B.capabilities = this.j.capabilities), this.j.V7 && (this.B.cst = this.j.V7),
            this.j.authuser && (this.B.authuser = this.j.authuser), this.j.pageId && (this.B.pageId = this.j.pageId)), this.N !== 0 ? this.B.ui = "" + this.N : delete this.B.ui, Object.assign(this.B, this.Z), this.channel = new M8(this.pathPrefix, {
            d$: "gsessionid",
            U$: this.D,
            V$: this.B
        }), this.channel.open(), this.K = 2, JGb(this))
    };
    g.k.disconnect = function(a) {
        this.Y = a === void 0 ? 0 : a;
        this.C.stop();
        KGb(this);
        this.channel && (this.Y !== 0 ? this.B.ui = "" + this.Y : delete this.B.ui, this.channel.close());
        this.Y = 0
    };
    g.k.Tt = function() {
        return this.C.isActive() ? this.C.B - Date.now() : NaN
    };
    g.k.jy = function() {
        var a = this.C;
        g.Ev(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (KGb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.Fs = function(a) {
        a || this.C.stop();
        a ? this.D["X-YouTube-LoungeId-Token"] = a : delete this.D["X-YouTube-LoungeId-Token"]
    };
    g.k.getDeviceId = function() {
        return this.j ? this.j.id : ""
    };
    g.k.publish = function(a) {
        return this.G.publish.apply(this.G, [a].concat(g.ra(g.Ja.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.G.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.G.unsubscribe(a, b, c)
    };
    g.k.Qh = function(a) {
        return this.G.Qh(a)
    };
    g.k.dispose = function() {
        this.ra || (this.ra = !0, g.ub(this.G), this.disconnect(), g.ub(this.C), this.Da = function() {
            return ""
        })
    };
    g.k.Na = function() {
        return this.ra
    };
    g.x(LGb, g.Fd);
    g.k = LGb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.jy = function() {
        this.j.jy()
    };
    g.k.getDeviceId = function() {
        return this.j.getDeviceId()
    };
    g.k.Tt = function() {
        return this.j.Tt()
    };
    g.k.HA = function() {
        return this.j.K === 3
    };
    g.k.w5 = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.onMessage = function(a) {
        this.dispatchEvent(new CGb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new DGb(this.j.Ag === 401 ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.Fs = function(a) {
        this.j.Fs(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var TGb = Date.now(),
        a9 = null,
        e9 = Array(50),
        d9 = -1,
        f9 = !1;
    g.lb(g9, g.FE);
    g9.prototype.ql = function() {
        return this.screens
    };
    g9.prototype.contains = function(a) {
        return !!vEb(this.screens, a)
    };
    g9.prototype.get = function(a) {
        return a ? l8(this.screens, a) : null
    };
    g9.prototype.info = function(a) {
        b9(this.K, a)
    };
    g.x(XGb, g.FE);
    g.k = XGb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.rd) && this.N0()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.rd) || (g.CA(this.rd), this.rd = NaN)
    };
    g.k.ya = function() {
        this.stop();
        g.FE.prototype.ya.call(this)
    };
    g.k.N0 = function() {
        this.rd = NaN;
        this.j = g.GA($8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.N
            },
            timeout: 5E3,
            onSuccess: (0, g.ib)(this.y5, this),
            onError: (0, g.ib)(this.x5, this),
            onTimeout: (0, g.ib)(this.z5, this)
        })
    };
    g.k.y5 = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.D;
        a.name = this.K;
        b = -1;
        this.G && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.publish("pairingComplete", new i8(a), b)
    };
    g.k.x5 = function(a) {
        this.j = null;
        a.status && a.status == 404 ? this.B >= RIb.length ? this.publish("pairingFailed", Error("DIAL polling timed out")) : (a = RIb[this.B], this.rd = g.AA((0, g.ib)(this.N0, this), a), this.B++) : this.publish("pairingFailed", Error("Server error " + a.status))
    };
    g.k.z5 = function() {
        this.j = null;
        this.publish("pairingFailed", Error("Server not responding"))
    };
    var RIb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.lb(i9, g9);
    g.k = i9.prototype;
    g.k.start = function() {
        h9(this) && this.publish("screenChange");
        !g.xB("yt-remote-lounge-token-expiration") && YGb(this);
        g.CA(this.j);
        this.j = g.AA((0, g.ib)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        h9(this);
        UGb(this, a);
        j9(this, !1);
        this.publish("screenChange");
        b(a);
        a.token || YGb(this)
    };
    g.k.remove = function(a, b) {
        var c = h9(this);
        WGb(this, a) && (j9(this, !1), c = !0);
        b(a);
        c && this.publish("screenChange")
    };
    g.k.IM = function(a, b, c, d) {
        var e = h9(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, j9(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.publish("screenChange")
    };
    g.k.ya = function() {
        g.CA(this.j);
        i9.Of.ya.call(this)
    };
    g.k.C9 = function(a) {
        h9(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        j9(this, !b);
        b && b9(this.K, "Missed " + b + " lounge tokens.")
    };
    g.k.B9 = function(a) {
        b9(this.K, "Requesting lounge tokens failed: " + a)
    };
    g.x($Gb, g.FE);
    g.k = $Gb.prototype;
    g.k.start = function() {
        var a = parseInt(g.xB("yt-remote-fast-check-period") || "0", 10);
        (this.D = g.kb() - 144E5 < a ? 0 : a) ? k9(this): (this.D = g.kb() + 3E5, g.wB("yt-remote-fast-check-period", this.D), this.RS())
    };
    g.k.isEmpty = function() {
        return g.gd(this.j)
    };
    g.k.update = function() {
        ZGb("Updating availability on schedule.");
        var a = this.K(),
            b = g.Uc(this.j, function(c, d) {
                return c && !!l8(a, d)
            }, this);
        cHb(this, b)
    };
    g.k.ya = function() {
        g.CA(this.C);
        this.C = NaN;
        this.B && (this.B.abort(), this.B = null);
        g.FE.prototype.ya.call(this)
    };
    g.k.RS = function() {
        g.CA(this.C);
        this.C = NaN;
        this.B && this.B.abort();
        var a = dHb(this);
        if (SDb(a)) {
            var b = $8(this.G, "/pairing/get_screen_availability");
            this.B = this.G.sendRequest("POST", b, {
                lounge_token: g.bd(a).join(",")
            }, (0, g.ib)(this.mca, this, a), (0, g.ib)(this.lca, this))
        } else cHb(this, {}), k9(this)
    };
    g.k.mca = function(a, b) {
        this.B = null;
        var c = g.bd(dHb(this));
        if (g.Wb(c, g.bd(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = b[e].status == "online";
            cHb(this, c);
            k9(this)
        } else this.eg("Changing Screen set during request."), this.RS()
    };
    g.k.lca = function(a) {
        this.eg("Screen availability failed: " + a);
        this.B = null;
        k9(this)
    };
    g.k.eg = function(a) {
        b9("OnlineScreenService", a)
    };
    g.lb(l9, g9);
    g.k = l9.prototype;
    g.k.start = function() {
        this.B.start();
        this.j.start();
        this.screens.length && (this.publish("screenChange"), this.j.isEmpty() || this.publish("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.B.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.B.remove(a, b, c);
        this.j.update()
    };
    g.k.IM = function(a, b, c, d) {
        this.B.contains(a) ? this.B.IM(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, b9(this.K, a), d(Error(a)))
    };
    g.k.ql = function(a) {
        return a ? this.screens : g.Jb(this.screens, g.It(this.C, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.mV = function() {
        return g.It(this.ql(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.nV = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new XGb(this.D, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.ub(l);
            e(m9(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.ub(l);
            f(m)
        });
        l.start();
        return (0, g.ib)(l.stop, l)
    };
    g.k.A5 = function(a, b, c, d) {
        g.GA($8(this.D, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.ib)(function(e, f) {
                e = new i8(f.screen || {});
                if (!e.name || hHb(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); hHb(this, l);) {
                            h++;
                            if (h > 20) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(m9(this, e))
            }, this),
            onError: (0, g.ib)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.ib)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.ya = function() {
        g.ub(this.B);
        g.ub(this.j);
        l9.Of.ya.call(this)
    };
    g.k.M9 = function() {
        jHb(this);
        this.publish("screenChange");
        this.j.update()
    };
    l9.prototype.dispose = l9.prototype.dispose;
    g.lb(n9, g.FE);
    g.k = n9.prototype;
    g.k.Ej = function(a) {
        this.Na() || (a && (p9(this, "" + a), this.publish("sessionFailed")), this.j = null, this.publish("sessionScreen", null))
    };
    g.k.info = function(a) {
        b9(this.Ga, a)
    };
    g.k.oV = function() {
        return null
    };
    g.k.mT = function(a) {
        var b = this.B;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.ib)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.ib)(function() {
            p9(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.ya = function() {
        this.mT("");
        n9.Of.ya.call(this)
    };
    g.x(q9, n9);
    g.k = q9.prototype;
    g.k.jT = function(a) {
        if (this.C) {
            if (this.C == a) return;
            p9(this, "Overriding cast session with new session object");
            vHb(this);
            this.Da = !1;
            this.Y = "unknown";
            this.C.removeUpdateListener(this.va);
            this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ha)
        }
        this.C = a;
        this.C.addUpdateListener(this.va);
        this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ha);
        qHb(this, "getMdxSessionStatus")
    };
    g.k.VA = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.nn(a))
    };
    g.k.stop = function() {
        this.C ? this.C.stop((0, g.ib)(function() {
            this.Ej()
        }, this), (0, g.ib)(function() {
            this.Ej(Error("Failed to stop receiver app."))
        }, this)) : this.Ej(Error("Stopping cast device without session."))
    };
    g.k.mT = function() {};
    g.k.ya = function() {
        this.info("disposeInternal");
        vHb(this);
        this.C && (this.C.removeUpdateListener(this.va), this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ha));
        this.C = null;
        n9.prototype.ya.call(this)
    };
    g.k.Rca = function(a, b) {
        if (!this.Na())
            if (b)
                if (b = d8(b), g.db(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.nn(b)), a) {
                    case "mdxSessionStatus":
                        nHb(this, b);
                        break;
                    case "loungeToken":
                        rHb(this, b);
                        break;
                    default:
                        p9(this, "Unknown youtube message: " + a)
                } else p9(this, "Unable to parse message.");
                else p9(this, "No data in message.")
    };
    g.k.yY = function(a, b, c, d) {
        g.CA(this.Z);
        this.Z = 0;
        gHb(this.D, this.B.label, a, this.B.friendlyName, (0, g.ib)(function(e) {
            e ? b(e) : d >= 0 ? (p9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.Z = g.AA((0, g.ib)(this.yY, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.oV = function() {
        return this.C
    };
    g.k.B5 = function(a) {
        this.Na() || a || (p9(this, "Cast session died."), this.Ej())
    };
    g.x(r9, n9);
    g.k = r9.prototype;
    g.k.jT = function(a) {
        this.C = a;
        this.C.addUpdateListener(this.Ma)
    };
    g.k.VA = function(a) {
        this.Oa = a;
        this.ra()
    };
    g.k.stop = function() {
        DHb(this);
        this.C ? this.C.stop((0, g.ib)(this.Ej, this, null), (0, g.ib)(this.Ej, this, "Failed to stop DIAL device.")) : this.Ej()
    };
    g.k.ya = function() {
        DHb(this);
        this.C && this.C.removeUpdateListener(this.Ma);
        this.C = null;
        n9.prototype.ya.call(this)
    };
    g.k.C5 = function(a) {
        this.Na() || a || (p9(this, "DIAL session died."), this.G(), this.G = function() {}, this.Ej())
    };
    g.x(u9, n9);
    u9.prototype.stop = function() {
        this.Ej()
    };
    u9.prototype.jT = function() {};
    u9.prototype.VA = function() {
        g.CA(this.C);
        this.C = NaN;
        var a = l8(this.D.ql(), this.B.label);
        a ? o9(this, a) : this.Ej(Error("No such screen"))
    };
    u9.prototype.ya = function() {
        g.CA(this.C);
        this.C = NaN;
        n9.prototype.ya.call(this)
    };
    g.x(v9, g.FE);
    g.k = v9.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.Z, [chrome.cast.Capability.AUDIO_OUT]);
        g.EA("desktop_enable_cast_connect") && (c.androidReceiverCompatible = !0);
        this.Y || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.K ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.ib)(this.Uba, this);
        c = new chrome.cast.ApiConfig(c, (0, g.ib)(this.n0,
            this), e, d, a);
        c.customDialLaunchCallback = (0, g.ib)(this.Oaa, this);
        chrome.cast.initialize(c, (0, g.ib)(function() {
            this.Na() || (chrome.cast.addReceiverActionListener(this.G), QGb(), this.B.subscribe("onlineScreenChange", (0, g.ib)(this.pV, this)), this.C = GHb(this), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.ib)(function(f) {
                this.eg("Failed to set initial custom receivers: " + g.nn(f))
            }, this)), this.publish("yt-remote-cast2-availability-change", x9(this)), b(!0))
        }, this), (0, g.ib)(function(f) {
            this.eg("Failed to initialize API: " +
                g.nn(f));
            b(!1)
        }, this))
    };
    g.k.eea = function(a, b) {
        w9("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a) w9("Unsetting old screen status: " + this.j.B.friendlyName), y9(this, null)
        }
        if (a && b) {
            if (!this.j) {
                a = l8(this.B.ql(), a);
                if (!a) {
                    w9("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if (a.idType == "shortLived") {
                    w9("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                c = EHb(this, a);
                c || (w9("setConnectedScreenStatus: Connected receiver not custom..."), c = new chrome.cast.Receiver(a.uuid ?
                    a.uuid : a.id, a.name), c.receiverType = chrome.cast.ReceiverType.CUSTOM, this.C.push(c), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.ib)(function(d) {
                    this.eg("Failed to set initial custom receivers: " + g.nn(d))
                }, this)));
                w9("setConnectedScreenStatus: new active receiver: " + c.friendlyName);
                y9(this, new u9(this.B, c), !0)
            }
            this.j.mT(b)
        } else w9("setConnectedScreenStatus: no screen.")
    };
    g.k.hea = function(a) {
        this.Na() ? this.eg("Setting connection data on disposed cast v2") : this.j ? this.j.VA(a) : this.eg("Setting connection data without a session")
    };
    g.k.E5 = function() {
        this.Na() ? this.eg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), y9(this, null)) : w9("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.ib)(this.n0, this), (0, g.ib)(this.pca, this))
    };
    g.k.ya = function() {
        this.B.unsubscribe("onlineScreenChange", (0, g.ib)(this.pV, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.G);
        var a = NGb,
            b = g.Wa("yt.mdx.remote.debug.handlers_");
        g.Gb(b || [], a);
        g.ub(this.j);
        g.FE.prototype.ya.call(this)
    };
    g.k.eg = function(a) {
        b9("Controller", a)
    };
    g.k.q0 = function(a, b) {
        this.j == a && (b || y9(this, null), this.publish("yt-remote-cast2-session-change", b))
    };
    g.k.Rba = function(a, b) {
        if (!this.Na())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), w9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.B.label != a.label) w9("onReceiverAction_: Stopping active receiver: " + this.j.B.friendlyName), this.j.stop();
                        else {
                            w9("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.publish("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            y9(this,
                                new u9(this.B, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            y9(this, new r9(this.B, a, this.D, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            y9(this, new q9(this.B, a, this.config_));
                            break;
                        default:
                            this.eg("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.B.label == a.label ? this.j.stop() : this.eg("Stopping receiver w/o session: " + a.friendlyName)
            } else this.eg("onReceiverAction_ called without receiver.")
    };
    g.k.Oaa = function(a) {
        if (this.Na()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.eg("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.B : null;
        if (!c || c.label != b.label) return this.eg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return w9("Reselecting dial screen."),
                this.publish("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.eg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            y9(this, new r9(this.B, b, this.D, this.config_))
        }
        b = this.j;
        b.Z = a;
        b.Z.appState == chrome.cast.DialAppState.RUNNING ? (a = b.Z.extraData || {}, c = a.screenId || null, s9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = AHb(b, {
            name: b.B.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.Z.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.lA(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = BHb(b, c)) : a = BHb(b, c)) : a = yHb(b);
        return a
    };
    g.k.n0 = function(a) {
        var b = this;
        if (!this.Na() && !this.K) {
            w9("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) w9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), y9(this, new q9(this.B, c, this.config_), !0);
                    else {
                        this.eg("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.B,
                    e = l8(this.B.ql(),
                        d.label);
                e && j8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (w9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.ub(this.j), this.j = new q9(this.B, c, this.config_), this.j.subscribe("sessionScreen", (0, g.ib)(this.q0, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return FHb(b, b.j)
                }), this.j.VA(null));
                this.j.jT(a)
            }
        }
    };
    g.k.D5 = function() {
        return this.j ? this.j.oV() : null
    };
    g.k.pca = function(a) {
        this.Na() || (this.eg("Failed to estabilish a session: " + g.nn(a)), a.code != chrome.cast.ErrorCode.CANCEL && y9(this, null), this.publish("yt-remote-cast2-session-failed"))
    };
    g.k.Uba = function(a) {
        w9("Receiver availability updated: " + a);
        if (!this.Na()) {
            var b = x9(this);
            this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            x9(this) != b && this.publish("yt-remote-cast2-availability-change", x9(this))
        }
    };
    g.k.pV = function() {
        this.Na() || (this.C = GHb(this), w9("Updating custom receivers: " + g.nn(this.C)), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.ib)(function() {
            this.eg("Failed to set custom receivers.")
        }, this)), this.publish("yt-remote-cast2-availability-change", x9(this)))
    };
    v9.prototype.setLaunchParams = v9.prototype.hea;
    v9.prototype.setConnectedScreenStatus = v9.prototype.eea;
    v9.prototype.stopSession = v9.prototype.E5;
    v9.prototype.getCastSession = v9.prototype.D5;
    v9.prototype.requestSession = v9.prototype.requestSession;
    v9.prototype.init = v9.prototype.init;
    v9.prototype.dispose = v9.prototype.dispose;
    var PHb = [];
    g.k = F9.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        VHb(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Sp = a.hasPrevious, this.wl = a.hasNext, this.N = a.playerTime, this.K = a.playerTimeAt, this.D = a.seekableStart, this.j = a.seekableEnd, this.G = a.duration, this.Z = a.loadedTime, this.C = a.liveIngestionTime, this.B = !isNaN(this.C))
    };
    g.k.isPlaying = function() {
        return this.playerState == 1
    };
    g.k.isBuffering = function() {
        return this.playerState == 3
    };
    g.k.xl = function() {
        return this.playerState == 1081
    };
    g.k.Jl = function(a) {
        this.G = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.B ? this.G + G9(this) : this.G
    };
    g.k.clone = function() {
        return new F9(WHb(this))
    };
    g.x(L9, g.FE);
    g.k = L9.prototype;
    g.k.getState = function() {
        return this.C
    };
    g.k.Tt = function() {
        return this.D.getReconnectTimeout()
    };
    g.k.jy = function() {
        this.D.reconnect()
    };
    g.k.play = function() {
        N9(this) ? (this.j ? this.j.play(null, g.Jd, R9(this, "play")) : Q9(this, "play"), ZHb(this, 1, I9(M9(this))), this.publish("remotePlayerChange")) : O9(this, this.play)
    };
    g.k.pause = function() {
        N9(this) ? (this.j ? this.j.pause(null, g.Jd, R9(this, "pause")) : Q9(this, "pause"), ZHb(this, 2, I9(M9(this))), this.publish("remotePlayerChange")) : O9(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (N9(this)) {
            if (this.j) {
                var b = M9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.isPlaying() || b.isBuffering() ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.Jd, R9(this, "seekTo", {
                    newTime: a
                }))
            } else Q9(this, "seekTo", {
                newTime: a
            });
            ZHb(this, 3, a);
            this.publish("remotePlayerChange")
        } else O9(this, g.jb(this.seekTo, a))
    };
    g.k.stop = function() {
        if (N9(this)) {
            this.j ? this.j.stop(null, g.Jd, R9(this, "stopVideo")) : Q9(this, "stopVideo");
            var a = M9(this);
            a.index = -1;
            a.videoId = "";
            VHb(a);
            P9(this, a);
            this.publish("remotePlayerChange")
        } else O9(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (N9(this)) {
            var c = M9(this);
            if (this.B) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.B.setReceiverVolumeLevel(d, (0, g.ib)(function() {
                        c9("set receiver volume: " + d)
                    }, this), (0, g.ib)(function() {
                        this.eg("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.B.setReceiverMuted(b, (0, g.ib)(function() {
                    c9("set receiver muted: " + b)
                }, this), (0, g.ib)(function() {
                    this.eg("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                };
                c.volume != -1 && (e.delta = a - c.volume);
                Q9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            P9(this, c)
        } else O9(this, g.jb(this.setVolume, a, b))
    };
    g.k.qV = function(a, b) {
        if (N9(this)) {
            var c = M9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.nn(b.style), g.md(a, c.trackData));
            Q9(this, "setSubtitlesTrack", a);
            P9(this, c)
        } else O9(this, g.jb(this.qV, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        N9(this) ? (b = b.getLanguageInfo().getId(), Q9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = M9(this), a.audioTrackId = b, P9(this, a)) : O9(this, g.jb(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = d === void 0 ? null : d;
        e = e === void 0 ? null : e;
        f = f === void 0 ? null : f;
        h = h === void 0 ? null : h;
        var l = M9(this),
            m = {
                videoId: a
            };
        c !== void 0 && (m.currentIndex = c);
        J9(l, a, c || 0);
        b !== void 0 && (H9(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.nn(h));
        Q9(this, "setPlaylist", m);
        d || P9(this, l)
    };
    g.k.JL = function(a, b) {
        if (N9(this)) {
            if (a && b) {
                var c = M9(this);
                J9(c, a, b);
                P9(this, c)
            }
            Q9(this, "previous")
        } else O9(this, g.jb(this.JL, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (N9(this)) {
            if (a && b) {
                var c = M9(this);
                J9(c, a, b);
                P9(this, c)
            }
            Q9(this, "next")
        } else O9(this, g.jb(this.nextVideo, a, b))
    };
    g.k.CO = function() {
        if (N9(this)) {
            Q9(this, "clearPlaylist");
            var a = M9(this);
            a.reset();
            P9(this, a);
            this.publish("remotePlayerChange")
        } else O9(this, this.CO)
    };
    g.k.EX = function() {
        N9(this) ? Q9(this, "dismissAutoplay") : O9(this, this.EX)
    };
    g.k.dispose = function() {
        if (this.C != 3) {
            var a = this.C;
            this.C = 3;
            this.publish("proxyStateChange", a, this.C)
        }
        g.FE.prototype.dispose.call(this)
    };
    g.k.ya = function() {
        YHb(this);
        this.D = null;
        this.G.clear();
        K9(this, null);
        g.FE.prototype.ya.call(this)
    };
    g.k.qT = function(a) {
        if ((a != this.C || a == 2) && this.C != 3 && a != 0) {
            var b = this.C;
            this.C = a;
            this.publish("proxyStateChange", b, a);
            if (a == 1)
                for (; !this.G.isEmpty();) b = a = this.G, b.j.length === 0 && (b.j = b.B, b.j.reverse(), b.B = []), a.j.pop().apply(this);
            else a == 3 && this.dispose()
        }
    };
    g.k.Pba = function(a, b) {
        this.publish(a, b)
    };
    g.k.Faa = function(a) {
        if (!a) this.gG(null), K9(this, null);
        else if (this.B.receiver.volume) {
            a = this.B.receiver.volume;
            var b = M9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) c9("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, P9(this, b)
        }
    };
    g.k.gG = function(a) {
        c9("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.Z);
        if (this.j = a) this.j.addUpdateListener(this.Z), $Hb(this), this.publish("remotePlayerChange")
    };
    g.k.Eaa = function(a) {
        a ? ($Hb(this), this.publish("remotePlayerChange")) : this.gG(null)
    };
    g.k.UT = function() {
        Q9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.Haa = function() {
        var a = SHb();
        a && K9(this, a)
    };
    g.k.eg = function(a) {
        b9("CP", a)
    };
    g.x(U9, g.FE);
    g.k = U9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            n !== void 0 && (m.currentTime = n <= 5 ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && e.length > 0 && (m.videoIds = e.join(","));
            l !== void 0 && (m.currentIndex = l);
            this.Ma && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            H9(this.j,
                n);
            this.G = "UNSUPPORTED";
            c = this.Ma ? "setInitialState" : "setPlaylist";
            S9("Connecting with " + c + " and params: " + g.nn(m));
            this.B.connect({
                method: c,
                params: g.nn(m)
            }, a, BEb())
        } else S9("Connecting without params"), this.B.connect({}, a, BEb());
        dIb(this)
    };
    g.k.Fs = function(a) {
        this.B.Fs(a)
    };
    g.k.dispose = function() {
        this.Na() || (g.Va("yt.mdx.remote.remoteClient_", null), this.publish("beforeDispose"), T9(this, 3));
        g.FE.prototype.dispose.call(this)
    };
    g.k.ya = function() {
        eIb(this);
        gIb(this);
        fIb(this);
        g.CA(this.Z);
        this.Z = NaN;
        g.CA(this.Y);
        this.Y = NaN;
        this.D = null;
        g.oB(this.ra);
        this.ra.length = 0;
        this.B.dispose();
        g.FE.prototype.ya.call(this);
        this.G = this.N = this.C = this.j = this.B = null
    };
    g.k.wZ = function(a) {
        if (!this.C || this.C.length === 0) return !1;
        for (var b = g.v(this.C), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.j9 = function() {
        var a = 3;
        this.Na() || (a = 0, isNaN(this.bF()) ? this.B.HA() && isNaN(this.K) && (a = 1) : a = 2);
        return a
    };
    g.k.Wz = function(a) {
        S9("Disconnecting with " + a);
        g.Va("yt.mdx.remote.remoteClient_", null);
        eIb(this);
        this.publish("beforeDisconnect", a);
        a == 1 && o8();
        this.B.disconnect(a);
        this.dispose()
    };
    g.k.d9 = function() {
        var a = this.j;
        this.D && (a = this.j.clone(), J9(a, this.D, a.index));
        return WHb(a)
    };
    g.k.lea = function(a) {
        var b = this,
            c = new F9(a);
        c.videoId && c.videoId != this.j.videoId && (this.D = c.videoId, g.CA(this.Z), this.Z = g.AA(function() {
            if (b.D) {
                var e = b.D;
                b.D = null;
                b.j.videoId != e && V9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && I9(this.j) == I9(c) && g.nn(this.j.trackData) == g.nn(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.Zb(d, function(e) {
            this.publish(e)
        }, this)
    };
    g.k.tY = function() {
        var a = this.B.getDeviceId(),
            b = g.Cb(this.C, function(c) {
                return c.type == "REMOTE_CONTROL" && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.bF = function() {
        return this.B.Tt()
    };
    g.k.M8 = function() {
        return this.G || "UNSUPPORTED"
    };
    g.k.N8 = function() {
        return this.N || ""
    };
    g.k.F5 = function() {
        !isNaN(this.bF()) && this.B.jy()
    };
    g.k.bea = function(a, b) {
        V9(this, a, b);
        iIb(this)
    };
    g.k.rV = function() {
        var a = g.QA("SAPISID", "") || g.QA("__Secure-1PAPISID") || "",
            b = g.QA("__Secure-3PAPISID", "") || "";
        if (!a && !b) return "";
        a = g.Bg(g.Ag(a), 2);
        b = g.Bg(g.Ag(b), 2);
        return g.Bg(g.Ag("," + a + "," + b), 2)
    };
    U9.prototype.subscribe = U9.prototype.subscribe;
    U9.prototype.unsubscribeByKey = U9.prototype.Qh;
    U9.prototype.getProxyState = U9.prototype.j9;
    U9.prototype.disconnect = U9.prototype.Wz;
    U9.prototype.getPlayerContextData = U9.prototype.d9;
    U9.prototype.setPlayerContextData = U9.prototype.lea;
    U9.prototype.getOtherConnectedRemoteId = U9.prototype.tY;
    U9.prototype.getReconnectTimeout = U9.prototype.bF;
    U9.prototype.getAutoplayMode = U9.prototype.M8;
    U9.prototype.getAutoplayVideoId = U9.prototype.N8;
    U9.prototype.reconnect = U9.prototype.F5;
    U9.prototype.sendMessage = U9.prototype.bea;
    U9.prototype.getXsrfToken = U9.prototype.rV;
    U9.prototype.isCapabilitySupportedOnConnectedDevices = U9.prototype.wZ;
    g.x(uIb, g9);
    g.k = uIb.prototype;
    g.k.ql = function(a) {
        return this.ih.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.ih.$_c(a)
    };
    g.k.get = function(a) {
        return this.ih.$_g(a)
    };
    g.k.start = function() {
        this.ih.$_st()
    };
    g.k.add = function(a, b, c) {
        this.ih.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.ih.$_r(a, b, c)
    };
    g.k.IM = function(a, b, c, d) {
        this.ih.$_un(a, b, c, d)
    };
    g.k.ya = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.ih.$_ubk(this.j[a]);
        this.j.length = 0;
        this.ih = null;
        g9.prototype.ya.call(this)
    };
    g.k.G5 = function() {
        this.publish("screenChange")
    };
    g.k.yba = function() {
        this.publish("onlineScreenChange")
    };
    l9.prototype.$_st = l9.prototype.start;
    l9.prototype.$_gspc = l9.prototype.A5;
    l9.prototype.$_gsppc = l9.prototype.nV;
    l9.prototype.$_c = l9.prototype.contains;
    l9.prototype.$_g = l9.prototype.get;
    l9.prototype.$_a = l9.prototype.add;
    l9.prototype.$_un = l9.prototype.IM;
    l9.prototype.$_r = l9.prototype.remove;
    l9.prototype.$_gs = l9.prototype.ql;
    l9.prototype.$_gos = l9.prototype.mV;
    l9.prototype.$_s = l9.prototype.subscribe;
    l9.prototype.$_ubk = l9.prototype.Qh;
    var f$ = null,
        i$ = !1,
        W9 = null,
        X9 = null,
        FIb = null,
        a$ = [];
    g.x(KIb, g.I);
    g.k = KIb.prototype;
    g.k.ya = function() {
        g.I.prototype.ya.call(this);
        this.j.stop();
        this.B.stop();
        this.N.stop();
        var a = this.Kc;
        a.unsubscribe("proxyStateChange", this.l0, this);
        a.unsubscribe("remotePlayerChange", this.qG, this);
        a.unsubscribe("remoteQueueChange", this.rL, this);
        a.unsubscribe("previousNextChange", this.h0, this);
        a.unsubscribe("nowAutoplaying", this.d0, this);
        a.unsubscribe("autoplayDismissed", this.K_, this);
        this.Kc = this.module = null
    };
    g.k.vl = function(a) {
        var b = g.Ja.apply(1, arguments);
        if (this.Kc.C != 2)
            if (j$(this)) {
                if (!M9(this.Kc).xl() || a !== "control_seek") switch (a) {
                    case "control_toggle_play_pause":
                        M9(this.Kc).isPlaying() ? this.Kc.pause() : this.Kc.play();
                        break;
                    case "control_play":
                        this.Kc.play();
                        break;
                    case "control_pause":
                        this.Kc.pause();
                        break;
                    case "control_seek":
                        this.K.aN(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        MIb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.J.getCurrentTime();
                    k$(this, b === 0 ? void 0 : b);
                    break;
                case "control_seek":
                    k$(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    MIb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.Caa = function(a) {
        this.N.k5(a)
    };
    g.k.kfa = function(a) {
        this.vl("control_subtitles_set_track", g.gd(a) ? null : a)
    };
    g.k.A2 = function() {
        var a = this.J.getOption("captions", "track");
        g.gd(a) || MIb(this, a)
    };
    g.k.Tc = function(a) {
        this.module.Tc(a, this.J.getVideoData().lengthSeconds)
    };
    g.k.hba = function() {
        g.gd(this.C) || NIb(this, this.C);
        this.D = !1
    };
    g.k.l0 = function(a, b) {
        this.B.stop();
        b === 2 && this.o2()
    };
    g.k.qG = function() {
        if (j$(this)) {
            this.j.stop();
            var a = M9(this.Kc);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.ai = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.ai = 0;
                    break;
                default:
                    this.module.ai = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Hc(new g.zK(8));
                    this.n2();
                    break;
                case 1085:
                case 3:
                    this.Hc(new g.zK(9));
                    break;
                case 1083:
                case 0:
                    this.Hc(new g.zK(2));
                    this.K.stop();
                    this.Tc(this.J.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Hc(new g.zK(4));
                    break;
                case 2:
                    this.Hc(new g.zK(4));
                    this.Tc(I9(a));
                    break;
                case -1:
                    this.Hc(new g.zK(64));
                    break;
                case -1E3:
                    this.Hc(new g.zK(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        tJ: 2
                    }))
            }
            a = M9(this.Kc).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, NIb(this, a));
            a = M9(this.Kc);
            a.volume === -1 || Math.round(this.J.getVolume()) === a.volume && this.J.isMuted() === a.muted || this.Z.isActive() || this.o3()
        } else LIb(this)
    };
    g.k.h0 = function() {
        this.J.publish("mdxpreviousnextchange")
    };
    g.k.rL = function() {
        j$(this) || LIb(this)
    };
    g.k.d0 = function(a) {
        isNaN(a) || this.J.publish("mdxnowautoplaying", a)
    };
    g.k.K_ = function() {
        this.J.publish("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        j$(this) && this.Kc.setAudioTrack(this.J.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        M9(this.Kc).playerState === -1 ? k$(this, a) : b && this.Kc.seekTo(a)
    };
    g.k.o3 = function() {
        var a = this;
        if (j$(this)) {
            var b = M9(this.Kc);
            this.events.Oc(this.Y);
            b.muted ? this.J.mute() : this.J.unMute();
            this.J.setVolume(b.volume);
            this.Y = this.events.T(this.J, "onVolumeChange", function(c) {
                IIb(a, c)
            })
        }
    };
    g.k.n2 = function() {
        this.j.stop();
        if (!this.Kc.Na()) {
            var a = M9(this.Kc);
            a.isPlaying() && this.Hc(new g.zK(8));
            this.Tc(I9(a));
            this.j.start()
        }
    };
    g.k.o2 = function() {
        this.B.stop();
        this.j.stop();
        var a = this.Kc.Tt();
        this.Kc.C == 2 && !isNaN(a) && this.B.start()
    };
    g.k.Hc = function(a) {
        this.B.stop();
        var b = this.G;
        if (!g.gFa(b, a)) {
            var c = g.xF(a, 2);
            c !== g.xF(this.G, 2) && this.J.mC(c);
            this.G = a;
            PIb(this.module, b, a)
        }
    };
    g.x(l$, g.W);
    l$.prototype.od = function() {
        this.j.show()
    };
    l$.prototype.Nb = function() {
        this.j.hide()
    };
    l$.prototype.B = function() {
        q8("mdx-privacy-popup-cancel");
        this.Nb()
    };
    l$.prototype.C = function() {
        q8("mdx-privacy-popup-confirm");
        this.Nb()
    };
    g.x(m$, g.W);
    m$.prototype.onStateChange = function(a) {
        this.Ic(a.state)
    };
    m$.prototype.Ic = function(a) {
        if (this.api.getPresentingPlayerType() === 3) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.xF(a, 128) ? g.$I("Error on $RECEIVER_NAME", b) : a.isPlaying() || a.isPaused() ? g.$I("Playing on $RECEIVER_NAME", b) : g.$I("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.x(n$, g.AU);
    n$.prototype.D = function() {
        var a = this.J.getOption("remote", "receivers");
        a && a.length > 1 && !this.J.getOption("remote", "quickCast") ? (this.Vu = g.cc(a, this.j, this), g.BU(this, g.Wr(a, this.j)), a = this.J.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Qi(a), this.enable(!0)) : this.enable(!1)
    };
    n$.prototype.j = function(a) {
        return a.key
    };
    n$.prototype.Wk = function(a) {
        return a === "cast-selector-receiver" ? "Cast..." : this.Vu[a].name
    };
    n$.prototype.Jg = function(a) {
        g.AU.prototype.Jg.call(this, a);
        this.J.setOption("remote", "currentReceiver", this.Vu[a]);
        this.Gb.Nb()
    };
    g.x(OIb, g.fV);
    g.k = OIb.prototype;
    g.k.create = function() {
        var a = this.player.U(),
            b = g.rR(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token")
        };
        zIb(b, a);
        this.subscriptions.push(g.pD("yt-remote-before-disconnect", this.Aaa, this));
        this.subscriptions.push(g.pD("yt-remote-connection-change", this.Vba, this));
        this.subscriptions.push(g.pD("yt-remote-receiver-availability-change", this.k0,
            this));
        this.subscriptions.push(g.pD("yt-remote-auto-connect", this.Tba, this));
        this.subscriptions.push(g.pD("yt-remote-receiver-resumed", this.Sba, this));
        this.subscriptions.push(g.pD("mdx-privacy-popup-confirm", this.pda, this));
        this.subscriptions.push(g.pD("mdx-privacy-popup-cancel", this.oda, this));
        this.k0()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.fV.prototype.load.call(this);
        this.pm = new KIb(this, this.player, this.Kc);
        var a = (a = HIb()) ? a.currentTime : 0;
        var b = EIb() ? new L9(e$(), void 0) : null;
        a == 0 && b && (a = I9(M9(b)));
        a !== 0 && this.Tc(a);
        PIb(this, this.Ge, this.Ge);
        this.player.Fq(6)
    };
    g.k.unload = function() {
        this.player.publish("mdxautoplaycanceled");
        this.Ft = this.hq;
        g.vb(this.pm, this.Kc);
        this.Kc = this.pm = null;
        g.fV.prototype.unload.call(this);
        this.player.Fq(5);
        o$(this)
    };
    g.k.ya = function() {
        g.qD(this.subscriptions);
        g.fV.prototype.ya.call(this)
    };
    g.k.lG = function(a) {
        var b = g.Ja.apply(1, arguments);
        this.loaded && this.pm.vl.apply(this.pm, [a].concat(g.ra(b)))
    };
    g.k.getAdState = function() {
        return this.ai
    };
    g.k.Sp = function() {
        return this.Kc ? M9(this.Kc).Sp : !1
    };
    g.k.wl = function() {
        return this.Kc ? M9(this.Kc).wl : !1
    };
    g.k.Tc = function(a, b) {
        this.KZ = a || 0;
        this.player.publish("progresssync", a, b);
        this.player.Ac("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.KZ
    };
    g.k.getProgressState = function() {
        var a = M9(this.Kc),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: !a.xl() && this.player.Zh(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.B ? a.C + G9(a) : a.C,
            isAtLiveHead: (a.B ? a.j + G9(a) : a.j) - this.getCurrentTime() <= 1,
            loaded: a.Z,
            seekableEnd: a.B ? a.j + G9(a) : a.j,
            seekableStart: a.D > 0 ? a.D + G9(a) : a.D,
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    };
    g.k.nextVideo = function() {
        this.Kc && this.Kc.nextVideo()
    };
    g.k.JL = function() {
        this.Kc && this.Kc.JL()
    };
    g.k.Aaa = function(a) {
        a === 1 && (this.xS = this.Kc ? M9(this.Kc) : null)
    };
    g.k.Vba = function() {
        var a = EIb() ? new L9(e$(), void 0) : null;
        if (a) {
            var b = this.Ft;
            this.loaded && this.unload();
            this.Kc = a;
            this.xS = null;
            b.key !== this.hq.key && (this.Ft = b, this.load())
        } else g.ub(this.Kc), this.Kc = null, this.loaded && (this.unload(), (a = this.xS) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, I9(a)));
        this.player.publish("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.k0 = function() {
        var a = [this.hq],
            b = a.concat,
            c = AIb();
        C9() && g.xB("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Vu = b.call(a, c);
        a = CIb() || this.hq;
        p$(this, a);
        this.player.Ac("onMdxReceiversChange")
    };
    g.k.Tba = function() {
        var a = CIb();
        p$(this, a)
    };
    g.k.Sba = function() {
        this.Ft = CIb()
    };
    g.k.pda = function() {
        this.JG = !0;
        o$(this);
        i$ = !1;
        f$ && h$(f$, 1);
        f$ = null
    };
    g.k.oda = function() {
        this.JG = !1;
        o$(this);
        p$(this, this.hq);
        this.Ft = this.hq;
        i$ = !1;
        f$ = null;
        this.player.playVideo()
    };
    g.k.Th = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Vu;
            case "currentReceiver":
                return b && (b.key === "cast-selector-receiver" ? THb() : p$(this, b)), this.loaded ? this.Ft : this.hq;
            case "quickCast":
                return this.Vu.length === 2 && this.Vu[1].key === "cast-selector-receiver" ? (b && THb(), !0) : !1
        }
    };
    g.k.UT = function() {
        this.Kc.UT()
    };
    g.k.dn = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.k.isLoggedIn = function() {
        var a, b;
        return ((a = g.iA("PLAYER_CONFIG")) == null ? void 0 : (b = a.args) == null ? void 0 : b.authuser) !== void 0 ? !0 : !(!g.iA("SESSION_INDEX") && !g.iA("LOGGED_IN"))
    };
    g.eV("remote", OIb);
})(_yt_player);