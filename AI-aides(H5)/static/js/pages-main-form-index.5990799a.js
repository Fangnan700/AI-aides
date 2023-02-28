(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-main-form-index"], {
        "0790": function(t, i, e) {
            "use strict";
            e("7a82"), Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0, e("b64b"), e("14d9");
            var n = {
                data: function() {
                    return {
                        msgList: [],
                        send_text: "",
                        num: 0,
                        position: "",
                        token: "",
                        bot_number: 0
                    }
                },
                onLoad: function(t) {
                    this.token = t.token
                },
                mounted: function() {
                    this.welcome()
                },
                updated: function() {},
                methods: {
                    welcome: function() {
                        this.msgList.push({
                            from: "ai",
                            text: "欢迎使用AI小助手~"
                        }), this.msgList.push({
                            from: "ai",
                            text: "这是一个基于Chat-GPT实现的人工智能助手，可以帮助您解答学习、生活以及工作中的各种问题。"
                        })
                    },
                    send: function() {
                        if ("" !== this.send_text) {
                            var t = this,
                                i = {
                                    from: "me",
                                    text: this.send_text
                                };
                            this.msgList.push(i);
                            var e = this.send_text;
                            this.send_text = "";
                            this.msgList.push({
                                from: "ai",
                                text: "AI小助手正在思考..."
                            }), setTimeout((function() {
                                t.num = t.msgList.length, t.position = "msg" + t.num
                            }), 100), uni.request({
                            	// 这里的接口根据自己的服务器来修改
                                url: "https://chat.api.aliyungpt.com/chat",
                                method: "POST",
                                data: {
                                    token: t.token,
                                    content: e
                                },
                                success: function(i) {
                                    t.msgList.pop();
                                    if(i.data.code === "1") {
                                        var e = {
                                            from: "ai",
                                            text: i.data.text
                                        };
                                        t.msgList.push(e), setTimeout((function() {
                                            t.num = t.msgList.length, t.position = "msg" + t.num
                                        }), 100)
                                    } else {
                                        var e = {
                                            from: "ai",
                                            text: "未登录，请登录后重试"
                                        };
                                        t.msgList.push(e), setTimeout((function() {
                                            t.num = t.msgList.length, t.position = "msg" + t.num
                                        }), 100)
                                    }
                                    
                                },
                                fail: function(i) {
                                    t.msgList.pop();
                                    t.msgList.push({
                                        from: "ai",
                                        text: "服务器出了点问题，稍后再试试吧~"
                                    }), setTimeout((function() {
                                        t.num = t.msgList.length, t.position = "msg" + t.num
                                    }), 100)
                                }
                            })
                        }
                    }
                }
            };
            i.default = n
        },
        1223: function(t, i, e) {
            "use strict";
            e.d(i, "b", (function() {
                return n
            })), e.d(i, "c", (function() {
                return s
            })), e.d(i, "a", (function() {}));
            var n = function() {
                    var t = this,
                        i = t.$createElement,
                        n = t._self._c || i;
                    return n("v-uni-view", {
                        staticClass: "container"
                    }, [n("v-uni-scroll-view", {
                        staticClass: "scrollview",
                        attrs: {
                            id: "scrollview",
                            "scroll-y": "true",
                            "scroll-into-view": t.position
                        }
                    }, [t._l(t.msgList, (function(i, s) {
                        return n("v-uni-view", {
                            staticClass: "uni-chatMsgCnt"
                        }, [n("v-uni-view", {
                            staticClass: "msg-l"
                        }, [n("v-uni-image", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: "ai" == i.from,
                                expression: "item.from=='ai'"
                            }],
                            staticStyle: {
                                width: "40px",
                                height: "40px",
                                "margin-top": "10px",
                                "margin-left": "10px"
                            },
                            attrs: {
                                src: e("374a")
                            }
                        }), n("v-uni-view", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: "ai" == i.from,
                                expression: "item.from=='ai'"
                            }],
                            staticClass: "msgitem-ai"
                        }, [t._v(t._s(i.text))])], 1), n("v-uni-view", {
                            staticClass: "msg-r"
                        }, [n("v-uni-view", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: "me" == i.from,
                                expression: "item.from=='me'"
                            }],
                            staticClass: "msgitem-me"
                        }, [t._v(t._s(i.text))]), n("v-uni-image", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: "me" == i.from,
                                expression: "item.from=='me'"
                            }],
                            staticStyle: {
                                width: "40px",
                                height: "40px",
                                "margin-top": "10px",
                                "margin-right": "10px"
                            },
                            attrs: {
                                src: e("200e")
                            }
                        })], 1)], 1)
                    })), n("v-uni-view", {
                        attrs: {
                            id: "msg" + t.msgList.length
                        }
                    })], 2), n("v-uni-view", {
                        staticClass: "inputframe",
                        attrs: {
                            id: "inputframe"
                        }
                    }, [n("v-uni-input", {
                        staticClass: "input",
                        attrs: {
                            "cursor-spacing": "10",
                            type: "text",
                            placeholder: " 请输入信息"
                        },
                        on: {
                            keydown: function(i) {
                                if (!i.type.indexOf("key") && t._k(i.keyCode, "enter", 13, i.key, "Enter")) return null;
                                arguments[0] = i = t.$handleEvent(i), t.send.apply(void 0, arguments)
                            }
                        },
                        model: {
                            value: t.send_text,
                            callback: function(i) {
                                t.send_text = i
                            },
                            expression: "send_text"
                        }
                    }), n("v-uni-button", {
                        staticClass: "btn",
                        on: {
                            click: function(i) {
                                arguments[0] = i = t.$handleEvent(i), t.send.apply(void 0, arguments)
                            }
                        }
                    }, [t._v("发送")])], 1)], 1)
                },
                s = []
        },
        "200e": function(t, i, e) {
            t.exports = e.p + "static/img/me.6583f813.png"
        },
        "22c5": function(t, i, e) {
            "use strict";
            e.r(i);
            var n = e("0790"),
                s = e.n(n);
            for (var a in n)["default"].indexOf(a) < 0 && function(t) {
                e.d(i, t, (function() {
                    return n[t]
                }))
            }(a);
            i["default"] = s.a
        },
        "374a": function(t, i, e) {
            t.exports = e.p + "static/img/wxlogo.93cfc72b.png"
        },
        "71e0": function(t, i, e) {
            "use strict";
            e.r(i);
            var n = e("1223"),
                s = e("22c5");
            for (var a in s)["default"].indexOf(a) < 0 && function(t) {
                e.d(i, t, (function() {
                    return s[t]
                }))
            }(a);
            e("fc65");
            var r = e("f0c5"),
                o = Object(r["a"])(s["default"], n["b"], n["c"], !1, null, "7c7c5fd8", null, !1, n["a"], void 0);
            i["default"] = o.exports
        },
        b549: function(t, i, e) {
            var n = e("c2d8");
            n.__esModule && (n = n.default), "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            var s = e("4f06").default;
            s("100bd431", n, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        c2d8: function(t, i, e) {
            var n = e("24fb");
            i = n(!1), i.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.scrollview[data-v-7c7c5fd8]{height:calc(100vh - %?150?% - env(safe-area-inset-bottom))}.uni-chatMsgCnt[data-v-7c7c5fd8]{width:100%}.uni-chatMsgCnt .msg-l[data-v-7c7c5fd8]{width:100%;display:flex;justify-content:flex-start}.uni-chatMsgCnt .msg-r[data-v-7c7c5fd8]{width:100%;display:flex;justify-content:flex-end}.uni-chatMsgCnt .msgitem-ai[data-v-7c7c5fd8]{width:-webkit-fit-content;width:fit-content;height:-webkit-fit-content;height:fit-content;max-width:60%;margin:10px;padding:10px;border-radius:10px;background-color:#f0f8ff;word-break:break-all;white-space:pre-line;font-size:14px}.uni-chatMsgCnt .msgitem-me[data-v-7c7c5fd8]{width:-webkit-fit-content;width:fit-content;height:-webkit-fit-content;height:fit-content;max-width:60%;margin:10px;padding:10px;border-radius:10px;background-color:#26b3a0;word-break:break-all;white-space:pre-line;font-size:14px}.inputframe[data-v-7c7c5fd8]{position:fixed;left:0;bottom:0;width:100%;height:60px;display:flex;flex-direction:row;background-color:#66cdaa}.inputframe .input[data-v-7c7c5fd8]{background-color:#fff;flex:1;height:40px;bottom:10px;line-height:40px;margin-top:10px;margin-left:10px;margin-right:5px;padding-left:10px;padding-right:10px;border-radius:10px}.inputframe .btn[data-v-7c7c5fd8]{height:40px;margin-top:10px;margin-right:10px;border-radius:10px;background-color:#fff;text-align:center;font-size:16px}', ""]), t.exports = i
        },
        fc65: function(t, i, e) {
            "use strict";
            var n = e("b549"),
                s = e.n(n);
            s.a
        }
    }
]);
