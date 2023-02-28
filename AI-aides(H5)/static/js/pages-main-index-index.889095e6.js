(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-main-index-index"], {
        "08fe": function(n, t, i) {
            "use strict";
            i.r(t);
            var e = i("9e21"),
                o = i("87af");
            for (var r in o)["default"].indexOf(r) < 0 && function(n) {
                i.d(t, n, (function() {
                    return o[n]
                }))
            }(r);
            i("0ed9");
            var a = i("f0c5"),
                c = Object(a["a"])(o["default"], e["b"], e["c"], !1, null, "62cfc90e", null, !1, e["a"], void 0);
            t["default"] = c.exports
        },
        "0ed9": function(n, t, i) {
            "use strict";
            var e = i("89c9"),
                o = i.n(e);
            o.a
        },
        "50b6": function(n, t, i) {
            var e = i("24fb");
            t = e(!1), t.push([n.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.form[data-v-62cfc90e]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:%?400?%;overflow-y:hidden}.form .title[data-v-62cfc90e]{font-size:%?38?%;font-weight:bolder;margin-top:%?15?%}.form .desc[data-v-62cfc90e]{margin-top:%?15?%;font-size:%?28?%;color:#666}.form .btn-group[data-v-62cfc90e]{width:%?600?%}.form .btn-group .btn[data-v-62cfc90e]{margin:%?30?% %?0?%}.form .btn-group .btn .u-button[data-v-62cfc90e]{height:%?100?%}', ""]), n.exports = t
        },
        "87af": function(n, t, i) {
            "use strict";
            i.r(t);
            var e = i("9ba1"),
                o = i.n(e);
            for (var r in e)["default"].indexOf(r) < 0 && function(n) {
                i.d(t, n, (function() {
                    return e[n]
                }))
            }(r);
            t["default"] = o.a
        },
        "89c9": function(n, t, i) {
            var e = i("50b6");
            e.__esModule && (e = e.default), "string" === typeof e && (e = [
                [n.i, e, ""]
            ]), e.locals && (n.exports = e.locals);
            var o = i("4f06").default;
            o("1b1e9ea4", e, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        "9ba1": function(n, t, i) {
            "use strict";
            i("7a82"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var e = {
                data: function() {
                    return {
                        show: !0
                    }
                },
                mounted: function() {},
                methods: {
                    onToForm: function() {
                        uni.navigateTo({
                            url: "/pages/main/form/index"
                        })
                    },
                    onToLogin: function() {
                        uni.navigateTo({
                            url: "/pages/main/login/login"
                        })
                    },
                    gotoGitHub: function() {
                        plus.runtime.openURL("https://github.com/Fangnan700/AI-aides")
                    }
                }
            };
            t.default = e
        },
        "9e21": function(n, t, i) {
            "use strict";
            i.d(t, "b", (function() {
                return o
            })), i.d(t, "c", (function() {
                return r
            })), i.d(t, "a", (function() {
                return e
            }));
            var e = {
                    "u-Image": i("277c").default,
                    uTransition: i("4e39").default,
                    uButton: i("5400").default
                },
                o = function() {
                    var n = this,
                        t = n.$createElement,
                        i = n._self._c || t;
                    return i("v-uni-view", {
                        staticClass: "container"
                    }, [i("v-uni-view", {
                        staticClass: "form"
                    }, [i("v-uni-view", {
                        staticClass: "logo"
                    }, [i("u--image", {
                        attrs: {
                            src: "/static/wxlogo.png",
                            shape: "circle",
                            width: "200rpx",
                            height: "200rpx"
                        }
                    })], 1), i("u-transition", {
                        attrs: {
                            show: !0,
                            mode: "slide-left"
                        }
                    }, [i("v-uni-view", {
                        staticClass: "title"
                    }, [n._v("AI小助手")])], 1), i("u-transition", {
                        attrs: {
                            show: !0,
                            mode: "slide-right"
                        }
                    }, [i("v-uni-view", {
                        staticClass: "desc"
                    }, [n._v("基于Chat-GPT实现的智能小助手")])], 1), i("v-uni-view", {
                        staticClass: "btn-group"
                    }, [i("v-uni-view", {
                        staticClass: "btn",
                        on: {
                            click: function(t) {
                                arguments[0] = t = n.$handleEvent(t), n.onToLogin.apply(void 0, arguments)
                            }
                        }
                    }, [i("u-button", {
                        attrs: {
                            shape: "circle",
                            iconColor: "#ffffff",
                            color: "#26B3A0",
                            icon: "chat",
                            text: "开始体验"
                        }
                    })], 1), i("v-uni-view", {
                        staticClass: "btn"
                    }, [i("u-button", {
                        attrs: {
                            shape: "circle",
                            color: "#26B3A0",
                            plain: !0,
                            icon: "share",
                            text: "项目GitHub地址"
                        },
                        on: {
                            click: function(t) {
                                arguments[0] = t = n.$handleEvent(t), n.gotoGitHub.apply(void 0, arguments)
                            }
                        }
                    })], 1)], 1)], 1)], 1)
                },
                r = []
        }
    }
]);