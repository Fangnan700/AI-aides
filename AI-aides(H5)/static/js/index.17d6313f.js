(function(n) {
    function e(e) {
        for (var i, t, d = e[0], l = e[1], u = e[2], s = 0, f = []; s < d.length; s++) t = d[s], Object.prototype.hasOwnProperty.call(r, t) && r[t] && f.push(r[t][0]), r[t] = 0;
        for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (n[i] = l[i]);
        c && c(e);
        while (f.length) f.shift()();
        return a.push.apply(a, u || []), o()
    }

    function o() {
        for (var n, e = 0; e < a.length; e++) {
            for (var o = a[e], i = !0, d = 1; d < o.length; d++) {
                var l = o[d];
                0 !== r[l] && (i = !1)
            }
            i && (a.splice(e--, 1), n = t(t.s = o[0]))
        }
        return n
    }
    var i = {},
        r = {
            index: 0
        },
        a = [];

    function t(e) {
        if (i[e]) return i[e].exports;
        var o = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    t.e = function(n) {
        var e = [],
            o = r[n];
        if (0 !== o)
            if (o) e.push(o[2]);
            else {
                var i = new Promise((function(e, i) {
                    o = r[n] = [e, i]
                }));
                e.push(o[2] = i);
                var a, d = document.createElement("script");
                d.charset = "utf-8", d.timeout = 120, t.nc && d.setAttribute("nonce", t.nc), d.src = function(n) {
                    return t.p + "static/js/" + ({
                        "pages-main-form-index": "pages-main-form-index",
                        "pages-main-index-index~pages-main-login-login": "pages-main-index-index~pages-main-login-login",
                        "pages-main-index-index": "pages-main-index-index",
                        "pages-main-login-login": "pages-main-login-login"
                    } [n] || n) + "." + {
                        "pages-main-form-index": "5990799a",
                        "pages-main-index-index~pages-main-login-login": "6f99fe87",
                        "pages-main-index-index": "889095e6",
                        "pages-main-login-login": "70f92203"
                    } [n] + ".js"
                }(n);
                var l = new Error;
                a = function(e) {
                    d.onerror = d.onload = null, clearTimeout(u);
                    var o = r[n];
                    if (0 !== o) {
                        if (o) {
                            var i = e && ("load" === e.type ? "missing" : e.type),
                                a = e && e.target && e.target.src;
                            l.message = "Loading chunk " + n + " failed.\n(" + i + ": " + a + ")", l.name = "ChunkLoadError", l.type = i, l.request = a, o[1](l)
                        }
                        r[n] = void 0
                    }
                };
                var u = setTimeout((function() {
                    a({
                        type: "timeout",
                        target: d
                    })
                }), 12e4);
                d.onerror = d.onload = a, document.head.appendChild(d)
            } return Promise.all(e)
    }, t.m = n, t.c = i, t.d = function(n, e, o) {
        t.o(n, e) || Object.defineProperty(n, e, {
            enumerable: !0,
            get: o
        })
    }, t.r = function(n) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, t.t = function(n, e) {
        if (1 & e && (n = t(n)), 8 & e) return n;
        if (4 & e && "object" === typeof n && n && n.__esModule) return n;
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: n
            }), 2 & e && "string" != typeof n)
            for (var i in n) t.d(o, i, function(e) {
                return n[e]
            }.bind(null, i));
        return o
    }, t.n = function(n) {
        var e = n && n.__esModule ? function() {
            return n["default"]
        } : function() {
            return n
        };
        return t.d(e, "a", e), e
    }, t.o = function(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }, t.p = "./", t.oe = function(n) {
        throw console.error(n), n
    };
    var d = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = d.push.bind(d);
    d.push = e, d = d.slice();
    for (var u = 0; u < d.length; u++) e(d[u]);
    var c = l;
    a.push([0, "chunk-vendors"]), o()
})({
    0: function(n, e, o) {
        n.exports = o("a4da")
    },
    1897: function(n, e, o) {
        "use strict";
        (function(n) {
            o("7a82"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {
                onLaunch: function() {
                    n("log", "App Launch", " at App.vue:4")
                },
                onShow: function() {
                    n("log", "App Show", " at App.vue:7")
                },
                onHide: function() {
                    n("log", "App Hide", " at App.vue:10")
                }
            };
            e.default = i
        }).call(this, o("0de9")["log"])
    },
    "25b5": function(n, e, o) {
        "use strict";
        o.r(e);
        var i = o("1897"),
            r = o.n(i);
        for (var a in i)["default"].indexOf(a) < 0 && function(n) {
            o.d(e, n, (function() {
                return i[n]
            }))
        }(a);
        e["default"] = r.a
    },
    5678: function(n, e, o) {
        "use strict";
        (function(n) {
            var e = o("4ea4").default;
            o("13d5"), o("d3b7"), o("ddb0"), o("ac1f"), o("5319");
            var i = e(o("e143")),
                r = {
                    keys: function() {
                        return []
                    }
                };
            n["____5DE6B0A____"] = !0, delete n["____5DE6B0A____"], n.__uniConfig = {
                easycom: {
                    "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue",
                    "^unicloud-db$": "@dcloudio/uni-cli-shared/components/unicloud-db.vue",
                    "^uniad$": "@dcloudio/uni-cli-shared/components/uniad.vue",
                    "^ad-rewarded-video$": "@dcloudio/uni-cli-shared/components/ad-rewarded-video.vue",
                    "^ad-fullscreen-video$": "@dcloudio/uni-cli-shared/components/ad-fullscreen-video.vue",
                    "^ad-interstitial$": "@dcloudio/uni-cli-shared/components/ad-interstitial.vue",
                    "^ad-interactive$": "@dcloudio/uni-cli-shared/components/ad-interactive.vue",
                    "^page-meta$": "@dcloudio/uni-cli-shared/components/page-meta.vue",
                    "^navigation-bar$": "@dcloudio/uni-cli-shared/components/navigation-bar.vue",
                    "^uni-match-media$": "@dcloudio/uni-cli-shared/components/uni-match-media.vue"
                },
                globalStyle: {
                    navigationBarTextStyle: "black",
                    navigationBarTitleText: "AI小助手",
                    navigationBarBackgroundColor: "#ffffff",
                    backgroundColor: "#ffffff"
                },
                uniIdRouter: {}
            }, n.__uniConfig.compilerVersion = "3.7.3", n.__uniConfig.darkmode = !1, n.__uniConfig.themeConfig = {}, n.__uniConfig.uniPlatform = "h5", n.__uniConfig.appId = "__UNI__5DE6B0A", n.__uniConfig.appName = "AI小助手", n.__uniConfig.appVersion = "2.2.0", n.__uniConfig.appVersionCode = "220", n.__uniConfig.router = {
                mode: "hash",
                base: "./"
            }, n.__uniConfig.publicPath = "./", n.__uniConfig["async"] = {
                loading: "AsyncLoading",
                error: "AsyncError",
                delay: 200,
                timeout: 6e4
            }, n.__uniConfig.debug = !1, n.__uniConfig.networkTimeout = {
                request: 6e4,
                connectSocket: 6e4,
                uploadFile: 6e4,
                downloadFile: 6e4
            }, n.__uniConfig.sdkConfigs = {}, n.__uniConfig.qqMapKey = void 0, n.__uniConfig.googleMapKey = void 0, n.__uniConfig.aMapKey = void 0, n.__uniConfig.aMapSecurityJsCode = void 0, n.__uniConfig.aMapServiceHost = void 0, n.__uniConfig.locale = "", n.__uniConfig.fallbackLocale = void 0, n.__uniConfig.locales = r.keys().reduce((function(n, e) {
                var o = e.replace(/\.\/(uni-app.)?(.*).json/, "$2"),
                    i = r(e);
                return Object.assign(n[o] || (n[o] = {}), i.common || i), n
            }), {}), n.__uniConfig.nvue = {
                "flex-direction": "column"
            }, n.__uniConfig.__webpack_chunk_load__ = o.e, i.default.component("pages-main-index-index", (function(n) {
                var e = {
                    component: Promise.all([o.e("pages-main-index-index~pages-main-login-login"), o.e("pages-main-index-index")]).then(function() {
                        return n(o("08fe"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (e.loading = {
                    name: "SystemAsyncLoading",
                    render: function(n) {
                        return n(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (e.error = {
                    name: "SystemAsyncError",
                    render: function(n) {
                        return n(__uniConfig["async"]["error"])
                    }
                }), e
            })), i.default.component("pages-main-form-index", (function(n) {
                var e = {
                    component: o.e("pages-main-form-index").then(function() {
                        return n(o("71e0"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (e.loading = {
                    name: "SystemAsyncLoading",
                    render: function(n) {
                        return n(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (e.error = {
                    name: "SystemAsyncError",
                    render: function(n) {
                        return n(__uniConfig["async"]["error"])
                    }
                }), e
            })), i.default.component("pages-main-login-login", (function(n) {
                var e = {
                    component: Promise.all([o.e("pages-main-index-index~pages-main-login-login"), o.e("pages-main-login-login")]).then(function() {
                        return n(o("f7d2"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (e.loading = {
                    name: "SystemAsyncLoading",
                    render: function(n) {
                        return n(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (e.error = {
                    name: "SystemAsyncError",
                    render: function(n) {
                        return n(__uniConfig["async"]["error"])
                    }
                }), e
            })), n.__uniRoutes = [{
                path: "/",
                alias: "/pages/main/index/index",
                component: {
                    render: function(n) {
                        return n("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isEntry: !0
                            }, __uniConfig.globalStyle, {
                                navigationBarTitleText: "AI小助手",
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [n("pages-main-index-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 1,
                    name: "pages-main-index-index",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/main/index/index",
                    isQuit: !0,
                    isEntry: !0,
                    windowTop: 0
                }
            }, {
                path: "/pages/main/form/index",
                component: {
                    render: function(n) {
                        return n("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "AI小助手",
                                enablePullDownRefresh: !1,
                                navigationBarBackgroundColor: "#26B3A0",
                                navigationBarTextStyle: "white"
                            })
                        }, [n("pages-main-form-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-main-form-index",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/main/form/index",
                    windowTop: 44
                }
            }, {
                path: "/pages/main/login/login",
                component: {
                    render: function(n) {
                        return n("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "登录ChatGPT",
                                enablePullDownRefresh: !1
                            })
                        }, [n("pages-main-login-login", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-main-login-login",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/main/login/login",
                    windowTop: 44
                }
            }, {
                path: "/choose-location",
                component: {
                    render: function(n) {
                        return n("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [n("system-choose-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "choose-location",
                    pagePath: "/choose-location"
                }
            }, {
                path: "/open-location",
                component: {
                    render: function(n) {
                        return n("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [n("system-open-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "open-location",
                    pagePath: "/open-location"
                }
            }], n.UniApp && new n.UniApp
        }).call(this, o("c8ba"))
    },
    8531: function(n, e, o) {
        var i = o("24fb");
        e = i(!1), e.push([n.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */.u-line-1{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important}.u-line-2{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.u-line-3{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.u-line-4{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.u-line-5{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}.u-border{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.u-border-top{border-top-width:.5px!important;border-color:#dadbde!important;border-top-style:solid}.u-border-left{border-left-width:.5px!important;border-color:#dadbde!important;border-left-style:solid}.u-border-right{border-right-width:.5px!important;border-color:#dadbde!important;border-right-style:solid}.u-border-bottom{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.u-border-top-bottom{border-top-width:.5px!important;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-bottom-style:solid}.u-reset-button{padding:0;background-color:initial;font-size:inherit;line-height:inherit;color:inherit}.u-reset-button::after{border:none}.u-hover-class{opacity:.7}.u-primary-light{color:#ecf5ff}.u-warning-light{color:#fdf6ec}.u-success-light{color:#f5fff0}.u-error-light{color:#fef0f0}.u-info-light{color:#f4f4f5}.u-primary-light-bg{background-color:#ecf5ff}.u-warning-light-bg{background-color:#fdf6ec}.u-success-light-bg{background-color:#f5fff0}.u-error-light-bg{background-color:#fef0f0}.u-info-light-bg{background-color:#f4f4f5}.u-primary-dark{color:#398ade}.u-warning-dark{color:#f1a532}.u-success-dark{color:#53c21d}.u-error-dark{color:#e45656}.u-info-dark{color:#767a82}.u-primary-dark-bg{background-color:#398ade}.u-warning-dark-bg{background-color:#f1a532}.u-success-dark-bg{background-color:#53c21d}.u-error-dark-bg{background-color:#e45656}.u-info-dark-bg{background-color:#767a82}.u-primary-disabled{color:#9acafc}.u-warning-disabled{color:#f9d39b}.u-success-disabled{color:#a9e08f}.u-error-disabled{color:#f7b2b2}.u-info-disabled{color:#c4c6c9}.u-primary{color:#3c9cff}.u-warning{color:#f9ae3d}.u-success{color:#5ac725}.u-error{color:#f56c6c}.u-info{color:#909399}.u-primary-bg{background-color:#3c9cff}.u-warning-bg{background-color:#f9ae3d}.u-success-bg{background-color:#5ac725}.u-error-bg{background-color:#f56c6c}.u-info-bg{background-color:#909399}.u-main-color{color:#303133}.u-content-color{color:#606266}.u-tips-color{color:#909193}.u-light-color{color:#c0c4cc}.u-safe-area-inset-top{padding-top:0;padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.u-safe-area-inset-right{padding-right:0;padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right)}.u-safe-area-inset-bottom{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.u-safe-area-inset-left{padding-left:0;padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left)}uni-toast{z-index:10090}uni-toast .uni-toast{z-index:10090}::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}uni-page-body{font-size:%?28?%;overflow-y:hidden}', ""]), n.exports = e
    },
    "89f8": function(n, e, o) {
        var i = o("8531");
        i.__esModule && (i = i.default), "string" === typeof i && (i = [
            [n.i, i, ""]
        ]), i.locals && (n.exports = i.locals);
        var r = o("4f06").default;
        r("6ce4d7e1", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    a130: function(n, e, o) {
        "use strict";
        o.d(e, "b", (function() {
            return i
        })), o.d(e, "c", (function() {
            return r
        })), o.d(e, "a", (function() {}));
        var i = function() {
                var n = this.$createElement,
                    e = this._self._c || n;
                return e("App", {
                    attrs: {
                        keepAliveInclude: this.keepAliveInclude
                    }
                })
            },
            r = []
    },
    a4da: function(n, e, o) {
        "use strict";
        var i = o("4ea4").default,
            r = i(o("5530"));
        o("e260"), o("e6cf"), o("cca6"), o("a79d"), o("5678"), o("1c31");
        var a = i(o("f090")),
            t = i(o("e143")),
            d = i(o("5919"));
        t.default.use(d.default), t.default.config.productionTip = !1, a.default.mpType = "app";
        var l = new t.default((0, r.default)({}, a.default));
        l.$mount()
    },
    ecfd: function(n, e, o) {
        "use strict";
        var i = o("89f8"),
            r = o.n(i);
        r.a
    },
    f090: function(n, e, o) {
        "use strict";
        o.r(e);
        var i = o("a130"),
            r = o("25b5");
        for (var a in r)["default"].indexOf(a) < 0 && function(n) {
            o.d(e, n, (function() {
                return r[n]
            }))
        }(a);
        o("ecfd");
        var t = o("f0c5"),
            d = Object(t["a"])(r["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], void 0);
        e["default"] = d.exports
    }
});