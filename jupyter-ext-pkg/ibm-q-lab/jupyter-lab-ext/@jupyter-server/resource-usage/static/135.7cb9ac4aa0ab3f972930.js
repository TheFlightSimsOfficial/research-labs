"use strict";
(self.webpackChunk_jupyter_server_resource_usage = self.webpackChunk_jupyter_server_resource_usage || []).push([
    [135], {
        135: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => N
            });
            var r = s(142),
                a = s(544),
                n = s(740),
                o = s(992),
                i = s(271),
                l = s.n(i),
                c = s(15),
                m = s(305);
            const u = {
                B: 1,
                KB: 1024,
                MB: 1048576,
                GB: 1073741824,
                TB: 1099511627776,
                PB: 0x4000000000000
            };

            function d(e) {
                const t = _(e);
                return t[0].toFixed(2) + " " + t[1]
            }

            function _(e) {
                return e ? e < u.KB ? [e, "B"] : u.KB === e || e < u.MB ? [e / u.KB, "KB"] : u.MB === e || e < u.GB ? [e / u.MB, "MB"] : u.GB === e || e < u.TB ? [e / u.GB, "GB"] : u.TB === e || e < u.PB ? [e / u.TB, "TB"] : [e / u.PB, "PB"] : [0, "B"]
            }
            let h = null;
            const p = e => {
                var t;
                const {
                    panel: s
                } = e, [r, a] = (0, i.useState)(), [n, o] = (0, i.useState)(), [u, _] = (0, i.useState)();
                ((e, t) => {
                    const s = (0, i.useRef)();
                    (0, i.useEffect)((() => {
                        s.current = e
                    }), [e]), (0, i.useEffect)((() => {
                        if (null !== t) {
                            const e = setInterval((function() {
                                s.current && s.current()
                            }), t);
                            return () => {
                                clearInterval(e)
                            }
                        }
                    }), [e, t])
                })((async () => {
                    r && s.isVisible && p(r).then((e => _(e))).catch((() => {
                        console.warn(`Request failed for ${r}. Kernel restarting?`)
                    }))
                }), 5e3);
                const p = e => async function(e = "", t = {}) {
                    const s = m.ServerConnection.makeSettings(),
                        r = c.URLExt.join(s.baseUrl, "api/metrics/v1/kernel_usage", e);
                    let a;
                    try {
                        a = await m.ServerConnection.makeRequest(r, t, s)
                    } catch (e) {
                        throw new m.ServerConnection.NetworkError(e)
                    }
                    let n = await a.text();
                    if (n.length > 0) try {
                        n = JSON.parse(n)
                    } catch (e) {
                        console.log("Not a JSON response body.", a)
                    }
                    if (!a.ok) throw new m.ServerConnection.ResponseError(a, n.message || n);
                    return n
                }(`get_usage/${e}`).then((t => Object.assign(Object.assign({}, t.content), {
                    kernelId: e,
                    timestamp: new Date
                })));
                return (0, i.useEffect)((() => {
                    const t = e => (t, s) => {
                            var r, n;
                            const i = null === (r = s.newValue) || void 0 === r ? void 0 : r.id;
                            if (i) {
                                a(i);
                                const t = null === (n = null == e ? void 0 : e.sessionContext.session) || void 0 === n ? void 0 : n.model.path;
                                o(t), p(i).then((e => _(e)))
                            } else a(i)
                        },
                        s = (e, s) => {
                            var n, i, l, c, m;
                            if (null !== s && (h && h.panel.sessionContext.kernelChanged.disconnect(h.callback), h = {
                                    callback: t(s),
                                    panel: s
                                }, s.sessionContext.kernelChanged.connect(h.callback), (null === (i = null === (n = s.sessionContext.session) || void 0 === n ? void 0 : n.kernel) || void 0 === i ? void 0 : i.id) !== r)) {
                                const e = null === (c = null === (l = s.sessionContext.session) || void 0 === l ? void 0 : l.kernel) || void 0 === c ? void 0 : c.id;
                                if (e) {
                                    a(e);
                                    const t = null === (m = s.sessionContext.session) || void 0 === m ? void 0 : m.model.path;
                                    o(t), p(e).then((e => _(e)))
                                }
                            }
                        };
                    return e.currentNotebookChanged.connect(s), () => {
                        e.currentNotebookChanged.disconnect(s)
                    }
                }), [r]), r && u ? u.hostname ? l().createElement(l().Fragment, null, l().createElement("h3", {
                    className: "jp-KernelUsage-section-separator"
                }, e.trans.__("Kernel usage")), l().createElement("div", {
                    className: "jp-KernelUsage-separator"
                }, e.trans.__("Kernel Host:"), " ", u.hostname), l().createElement("div", {
                    className: "jp-KernelUsage-separator"
                }, e.trans.__("Notebook:"), " ", n), l().createElement("div", {
                    className: "jp-KernelUsage-separator"
                }, e.trans.__("Kernel ID:"), " ", r), l().createElement("div", {
                    className: "jp-KernelUsage-separator"
                }, e.trans.__("Timestamp:"), " ", null === (t = u.timestamp) || void 0 === t ? void 0 : t.toLocaleString()), l().createElement("div", {
                    className: "jp-KernelUsage-separator"
                }, e.trans.__("Process ID:"), " ", u.pid), l().createElement("div", {
                    className: "jp-KernelUsage-separator"
                }, e.trans.__("CPU:"), " ", u.kernel_cpu), l().createElement("div", {
                    className: "jp-KernelUsage-separator"
                }, e.trans.__("Memory:"), " ", d(u.kernel_memory)), l().createElement("hr", {
                    className: "jp-KernelUsage-section-separator"
                }), l().createElement("h4", {
                    className: "jp-KernelUsage-section-separator"
                }, e.trans.__("Host CPU")), u.host_cpu_percent && l().createElement("div", {
                    className: "jp-KernelUsage-separator"
                }, e.trans._n("%2%% used on %1 CPU", "%2%% used on %1 CPUs", u.cpu_count, u.host_cpu_percent.toFixed(1))), l().createElement("h4", {
                    className: "jp-KernelUsage-section-separator"
                }, e.trans.__("Host Virtual Memory")), l().createElement("div", {
                    className: "jp-KernelUsage-separator"
                }, e.trans.__("Active:"), " ", d(u.host_virtual_memory.active)), l().createElement("div", {
                    className: "jp-KernelUsage-separator"
                }, e.trans.__("Available:"), " ", d(u.host_virtual_memory.available)), l().createElement("div", {
                    className: "jp-KernelUsage-separator"
                }, e.trans.__("Free:"), " ", d(u.host_virtual_memory.free)), l().createElement("div", {
                    className: "jp-KernelUsage-separator"
                }, e.trans.__("Inactive:"), " ", d(u.host_virtual_memory.inactive)), u.host_virtual_memory.percent && l().createElement("div", {
                    className: "jp-KernelUsage-separator"
                }, e.trans.__("Percent used:"), " ", u.host_virtual_memory.percent.toFixed(1), "%"), l().createElement("div", {
                    className: "jp-KernelUsage-separator"
                }, e.trans.__("Total:"), " ", d(u.host_virtual_memory.total)), l().createElement("div", {
                    className: "jp-KernelUsage-separator"
                }, e.trans.__("Used:"), " ", d(u.host_virtual_memory.used)), l().createElement("div", {
                    className: "jp-KernelUsage-separator"
                }, e.trans.__("Wired:"), " ", d(u.host_virtual_memory.wired))) : l().createElement(l().Fragment, null, l().createElement("h3", {
                    className: "jp-KernelUsage-section-separator"
                }, e.trans.__("Kernel usage details are not available")), l().createElement("div", {
                    className: "jp-KernelUsage-section-separator"
                }, e.trans.__("Please check with your system administrator that you are running IPyKernel version 6.10.0 or above."))) : l().createElement("h3", null, e.trans.__("Kernel usage is not available"))
            };
            class g extends n.ReactWidget {
                constructor(e) {
                    super(), this._widgetAdded = e.widgetAdded, this._currentNotebookChanged = e.currentNotebookChanged, this._panel = e.panel, this._trans = e.trans
                }
                render() {
                    return l().createElement(p, {
                        widgetAdded: this._widgetAdded,
                        currentNotebookChanged: this._currentNotebookChanged,
                        panel: this._panel,
                        trans: this._trans
                    })
                }
            }
            const v = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\r\n  <g class="jp-icon3" fill="#616161">\r\n    <path d="m256 43c-141 0-256 115-256 256 0 62 22 118 59 163l6 8h383l6-8c37-44 59-101 59-163-0.1-141-115-256-256-256zm0 43c118 0 213 95 213 213 0 48-17 92-44 128h-339c-27-36-44-80-44-128 0-118 95-213 213-213zm0 21c-12 0-21 9.6-21 21s9.6 21 21 21 21-9.6 21-21-9.5-21-21-21zm-85 23c-12 0-21 9.6-21 21s9.6 21 21 21 21-9.6 21-21-9.6-21-21-21zm171 0c-12 0-21 9.6-21 21s9.6 21 21 21 21-9.6 21-21-9.5-21-21-21zm-233 63c-12 0-21 9.6-21 21s9.6 21 21 21 21-9.6 21-21-9.5-21-21-21zm290 0.7-121 69c-6.3-3.7-14-6-21-6-24 0-43 19-43 43s19 43 43 43c23 0 42-19 43-42v-0.7l121-69-21-37zm-313 85c-12 0-21 9.6-21 21s9.6 21 21 21 21-9.6 21-21-9.5-21-21-21zm341 0c-12 0-21 9.6-21 21s9.6 21 21 21 21-9.6 21-21-9.6-21-21-21zm-319 85c-12 0-21 9.6-21 21s9.6 21 21 21 21-9.6 21-21-9.5-21-21-21zm296 0c-12 0-21 9.6-21 21s9.6 21 21 21 21-9.6 21-21-9.5-21-21-21z"/>\r\n  </g>\r\n</svg>\r\n\x3c!-- Downloaded from https://seekicon.com/free-icon/tachometer-alt_1 under MIT License. --\x3e\r\n';
            class y extends o.StackedPanel {
                constructor(e) {
                    super(), this.addClass("jp-KernelUsage-view"), this.id = "kernelusage-panel-id", this.title.caption = e.trans.__("Kernel Usage"), this.title.icon = new a.LabIcon({
                        name: "jupyterlab-kernel-usage:icon",
                        svgstr: v
                    }), this.title.closable = !0;
                    const t = new g({
                        widgetAdded: e.widgetAdded,
                        currentNotebookChanged: e.currentNotebookChanged,
                        panel: this,
                        trans: e.trans
                    });
                    this.addWidget(t)
                }
                dispose() {
                    super.dispose()
                }
                onCloseRequest(e) {
                    super.onCloseRequest(e), this.dispose()
                }
            }
            var C = s(134),
                f = s(191),
                b = s(722);
            const k = (0, s(519).style)({
                fontSize: "var(--jp-ui-font-size1)",
                fontFamily: "var(--jp-ui-font-family)"
            }, {
                backgroundColor: "#FFD2D2",
                color: "#D8000C"
            });
            class w extends n.VDomRenderer {
                constructor(e) {
                    super(new w.Model({
                        refreshRate: 5e3
                    })), this._trans = e
                }
                render() {
                    if (!this.model) return l().createElement("div", null);
                    let e;
                    return e = null === this.model.memoryLimit ? this._trans.__("Mem: %1 %2", this.model.currentMemory.toFixed(E.DECIMAL_PLACES), this.model.units) : this._trans.__("Mem: %1 / %2 %3", this.model.currentMemory.toFixed(E.DECIMAL_PLACES), this.model.memoryLimit.toFixed(E.DECIMAL_PLACES), this.model.units), this.model.usageWarning ? l().createElement(C.TextItem, {
                        title: this._trans.__("Current memory usage"),
                        source: e,
                        className: k
                    }) : l().createElement(C.TextItem, {
                        title: this._trans.__("Current memory usage"),
                        source: e
                    })
                }
            }
            var E, K;
            ! function(e) {
                class t extends n.VDomModel {
                    constructor(e) {
                        super(), this._currentMemory = 0, this._memoryLimit = null, this._metricsAvailable = !1, this._units = "B", this._warn = !1, this._poll = new b.Poll({
                            factory: () => E.factory(),
                            frequency: {
                                interval: e.refreshRate,
                                backoff: !0
                            },
                            name: "@jupyterlab/statusbar:MemoryUsage#metrics"
                        }), this._poll.ticked.connect((e => {
                            const {
                                payload: t,
                                phase: s
                            } = e.state;
                            if ("resolved" !== s) {
                                if ("rejected" === s) {
                                    const e = this._metricsAvailable;
                                    return this._metricsAvailable = !1, this._currentMemory = 0, this._memoryLimit = null, this._units = "B", void(e && this.stateChanged.emit())
                                }
                            } else this._updateMetricsValues(t)
                        }))
                    }
                    get metricsAvailable() {
                        return this._metricsAvailable
                    }
                    get currentMemory() {
                        return this._currentMemory
                    }
                    get memoryLimit() {
                        return this._memoryLimit
                    }
                    get units() {
                        return this._units
                    }
                    get usageWarning() {
                        return this._warn
                    }
                    dispose() {
                        super.dispose(), this._poll.dispose()
                    }
                    _updateMetricsValues(e) {
                        const t = this._metricsAvailable,
                            s = this._currentMemory,
                            r = this._memoryLimit,
                            a = this._units,
                            n = this._warn;
                        if (null === e) this._metricsAvailable = !1, this._currentMemory = 0, this._memoryLimit = null, this._units = "B", this._warn = !1;
                        else {
                            const t = e.rss,
                                s = e.limits.memory ? e.limits.memory.rss : null,
                                [r, a] = _(t),
                                n = !!e.limits.memory && e.limits.memory.warn;
                            this._metricsAvailable = !0, this._currentMemory = r, this._units = a, this._memoryLimit = s ? s / u[a] : null, this._warn = n
                        }
                        this._currentMemory === s && this._units === a && this._memoryLimit === r && this._metricsAvailable === t && this._warn === n || this.stateChanged.emit(void 0)
                    }
                }
                e.Model = t
            }(w || (w = {})),
            function(e) {
                e.DECIMAL_PLACES = 2;
                const t = m.ServerConnection.makeSettings(),
                    s = c.URLExt.join(t.baseUrl, "api/metrics/v1");
                e.factory = async function() {
                    const e = m.ServerConnection.makeRequest(s, {}, t),
                        r = await e;
                    return await r.json()
                }
            }(E || (E = {})),
            function(e) {
                e.getKernelUsage = "kernel-usage:get"
            }(K || (K = {}));
            const j = {
                    id: "@jupyter-server/resource-usage:memory-status-item",
                    autoStart: !0,
                    requires: [C.IStatusBar, f.ITranslator],
                    activate: (e, t, s) => {
                        const r = s.load("jupyter-resource-usage"),
                            a = new w(r);
                        t.registerStatusItem(j.id, {
                            item: a,
                            align: "left",
                            rank: 2,
                            isActive: () => a.model.metricsAvailable,
                            activeStateChanged: a.model.stateChanged
                        })
                    }
                },
                U = {
                    id: "@jupyter-server/resource-usage:kernel-panel-item",
                    autoStart: !0,
                    optional: [n.ICommandPalette],
                    requires: [f.ITranslator, r.INotebookTracker],
                    activate: (e, t, s, r) => {
                        const n = t.load("jupyter-resource-usage"),
                            {
                                commands: o,
                                shell: i
                            } = e,
                            l = n.__("Kernel Resource");
                        let c = null;

                        function m() {
                            c && !c.isDisposed || !s || (c = new y({
                                widgetAdded: s.widgetAdded,
                                currentNotebookChanged: s.currentChanged,
                                trans: n
                            }), i.add(c, "right", {
                                rank: 200
                            }))
                        }
                        o.addCommand(K.getKernelUsage, {
                            label: n.__("Kernel Usage"),
                            caption: n.__("Kernel Usage"),
                            icon: new a.LabIcon({
                                name: "jupyterlab-kernel-usage:icon",
                                svgstr: v
                            }),
                            execute: m
                        }), r && r.addItem({
                            command: K.getKernelUsage,
                            category: l
                        }), m()
                    }
                },
                N = [j, U]
        }
    }
]);