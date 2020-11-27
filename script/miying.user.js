/**
 * 名称：miying.user.js
 * 地址：https://greasyfork.org/scripts/416744-%E8%A7%85%E5%BD%B1/code/%E8%A7%85%E5%BD%B1.user.js
 *
 ******** 以下为 tamperJS 自动生成的 rewrite 相关信息，可能需要根据情况适当调整 ********

[rewrite]
^http?:\/\/.*\.iqiyi\.com\/ url script-response-body https://raw.fastgit.org/shangrenxi/Rules/master/script/miying.user.js
^http?:\/\/.*\.youku\.com\/ url script-response-body https://raw.fastgit.org/shangrenxi/Rules/master/script/miying.user.js
^http?:\/\/.*\.le\.com\/ url script-response-body https://raw.fastgit.org/shangrenxi/Rules/master/script/miying.user.js
^http?:\/\/.*v\.qq\.com\/ url script-response-body https://raw.fastgit.org/shangrenxi/Rules/master/script/miying.user.js
^http?:\/\/.*film\.qq\.com\/ url script-response-body https://raw.fastgit.org/shangrenxi/Rules/master/script/miying.user.js
^http?:\/\/.*\.tudou\.com\/ url script-response-body https://raw.fastgit.org/shangrenxi/Rules/master/script/miying.user.js
^http?:\/\/.*\.mgtv\.com\/ url script-response-body https://raw.fastgit.org/shangrenxi/Rules/master/script/miying.user.js
^http?:\/\/.*film\.sohu\.com\/ url script-response-body https://raw.fastgit.org/shangrenxi/Rules/master/script/miying.user.js
^http?:\/\/.*tv\.sohu\.com\/ url script-response-body https://raw.fastgit.org/shangrenxi/Rules/master/script/miying.user.js
^http?:\/\/.*\.acfun\.cn\/ url script-response-body https://raw.fastgit.org/shangrenxi/Rules/master/script/miying.user.js
^http?:\/\/.*\.bilibili\.com\/ url script-response-body https://raw.fastgit.org/shangrenxi/Rules/master/script/miying.user.js
^http?:\/\/.*\.pptv\.com\/ url script-response-body https://raw.fastgit.org/shangrenxi/Rules/master/script/miying.user.js
^http?:\/\/.*vip\.1905\.com\/ url script-response-body https://raw.fastgit.org/shangrenxi/Rules/master/script/miying.user.js
^http?:\/\/.*\.fun\.tv\/ url script-response-body https://raw.fastgit.org/shangrenxi/Rules/master/script/miying.user.js
^http?:\/\/.*\.56\.com\/ url script-response-body https://raw.fastgit.org/shangrenxi/Rules/master/script/miying.user.js
^http?:\/\/.*\.wasu\.cn\/ url script-response-body https://raw.fastgit.org/shangrenxi/Rules/master/script/miying.user.js
[mitm]
*v.qq.com,*film.qq.com,*.youku.com,*.tudou.com,*.le.com,*.iqiyi.com,*.bilibili.com,*tv.sohu.com,*film.sohu.com,*.mgtv.com,*.acfun.cn, *.pptv.com, *vip.1905.com, *.fun.tv,*.56.com, *.wasu.cn

 ********
 * 工具: tamperJS BY @elecV2
 * 频道: https://t.me/elecV2
 *
**/

let body = $response.body

if (/<\/html>|<\/body>/.test(body)) {
  body = body.replace('</body>', `
<script>
function GM_openInTab(e){return window.open(e)}function GM_addStyle(e){"use strict";let t=document.getElementsByTagName("head")[0];if(t){let s=document.createElement("style");return s.setAttribute("type","text/css"),s.textContent=e,t.appendChild(s),s}return null}const GM_log=console.log;function GM_xmlhttpRequest(e){"use strict";let t=new XMLHttpRequest;if(__setupRequestEvent(e,t,"abort"),__setupRequestEvent(e,t,"error"),__setupRequestEvent(e,t,"load"),__setupRequestEvent(e,t,"progress"),__setupRequestEvent(e,t,"readystatechange"),t.open(e.method,e.url,!e.synchronous,e.user||"",e.password||""),e.overrideMimeType&&t.overrideMimeType(e.overrideMimeType),e.headers)for(let s in e.headers)Object.prototype.hasOwnProperty.call(e.headers,s)&&t.setRequestHeader(s,e.headers[s]);let s=e.data?e.data:null;return e.binary?t.sendAsBinary(s):t.send(s)}function __setupRequestEvent(e,t,s){"use strict";e["on"+s]&&t.addEventListener(s,function(n){let r={responseText:t.responseText,responseXML:t.responseXML,readyState:t.readyState,responseHeaders:null,status:null,statusText:null,finalUrl:null};switch(s){case"progress":r.lengthComputable=n.lengthComputable,r.loaded=n.loaded,r.total=n.total;break;case"error":break;default:if(4!=t.readyState)break;r.responseHeaders=t.getAllResponseHeaders(),r.status=t.status,r.statusText=t.statusText}e["on"+s](r)})}const GM_info={script:{name:"elecV2",namespace:"https://t.me/elecV2"},uuid:"47c23801-2b5c-4dbc-88a0-636297fd6b86"},__GM_STORAGE_PREFIX=["",GM_info.script.namespace,GM_info.script.name,""].join("***");function GM_deleteValue(e){"use strict";localStorage.removeItem(__GM_STORAGE_PREFIX+e)}function GM_getValue(e,t){"use strict";let s=localStorage.getItem(__GM_STORAGE_PREFIX+e);return null===s&&void 0!==t?t:s}function GM_listValues(){"use strict";let e=__GM_STORAGE_PREFIX.length,t=[];for(let s=0;s<localStorage.length;s++){let n=localStorage.key(s);n.substr(0,e)===__GM_STORAGE_PREFIX&&t.push(n.substr(e))}return t}function GM_setValue(e,t){"use strict";localStorage.setItem(__GM_STORAGE_PREFIX+e,t)}function GM_getResourceURL(e){"use strict";return"greasemonkey-script:"+GM_info.uuid+"/"+e}
</script>
<script>const elecJSPack = function(elecV2){

// ==UserScript==
// @name         觅影
// @version      20.20.final
// @author       (o˘◡˘o)
// @description  支持移动端；加速跳广告；VIP 视频解析；支持自动解析；隐藏视频水印；快捷跳转搜索源；自定义解析和搜索源；豆瓣·选影视 净化
// @namespace    (o˘◡˘o)
// @icon         https://p.pstatp.com/origin/fe690000c9141955bbac
// @license      GPL License
// @include      *
// @run-at       document-start
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        unsafeWindow
// ==/UserScript==

!async function() {
  function _tO() {
    const e = _tTLL([ "", "" ]);
    return _tO = function() {
      return e;
    }, e;
  }
  function _tTLL(e, t) {
    return t || (t = e.slice(0)), e.raw = t, e;
  }
  function _tCA(e) {
    return _aWH(e) || _iTA(e) || _uITA(e) || _nIS();
  }
  function _nIS() {
    throw new TypeError("TypeError");
  }
  function _uITA(e, t) {
    if (e) {
      if ("string" == typeof e) return _aLTA(e, t);
      var i = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _aLTA(e, t) : void 0;
    }
  }
  function _iTA(e) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
  }
  function _aWH(e) {
    if (Array.isArray(e)) return _aLTA(e);
  }
  function _aLTA(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
    return n;
  }
  var _Mathfloor = Math.floor, _Mathmin = Math.min, _Mathmax = Math.max;
  function h(e) {
    let t = "";
    const i = {};
    for (var n = arguments.length, a = Array(1 < n ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
    for (let n = 0; n < a.length; n++) if (a[n] instanceof HTMLElement) {
      const o = "id" + n;
      i[o] = a[n], t += e[n] + '<div append="' + o + '"></div>';
    } else t += e[n] + a[n];
    t += e[e.length - 1];
    const r = document.createElement("template");
    r.innerHTML = t;
    const s = r.content;
    return _tCA(s.querySelectorAll("[append]")).forEach((function(e) {
      const t = i[e.getAttribute("append")];
      e.parentNode.insertBefore(t, e), e.parentNode.removeChild(e);
    })), s.collect = function() {
      let {attr: e = "ref", keepAttribute: t, to: i = {}} = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      const n = s.querySelectorAll("[" + e + "]");
      return _tCA(n).reduce((function(i, n) {
        const a = n.getAttribute(e).trim();
        return t || n.removeAttribute(e), i[a] = i[a] ? Array.isArray(i[a]) ? [].concat(_tCA(i[a]), [ n ]) : [ i[a], n ] : n, 
        i;
      }), i);
    }, s;
  }
  function DOM() {
    const e = {};
    let t = function(e) {
      var t, i;
      let n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      for (var a = arguments.length, o = Array(2 < a ? a - 2 : 0), r = 2; r < a; r++) o[r - 2] = arguments[r];
      return {
        $: e,
        a: !n || n.$ || n.concat ? {
          c: (t = []).concat.apply(t, [ n || [] ].concat(o))
        } : (n.c = (i = []).concat.apply(i, o), n)
      };
    }, i = function() {
      let e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], t = 1 < arguments.length ? arguments[1] : void 0, i = 2 < arguments.length ? arguments[2] : void 0;
      return e.map((function(e) {
        return e(t, i);
      }));
    }, n = function(e) {
      return new Proxy(e, {
        get: function(e, t, i) {
          return n((function() {
            return (i = e.apply(void 0, arguments)).a.className = (i.a.className || " ") + " " + t, 
            i;
          }));
        }
      });
    }, a = e.R = function(e, t) {
      let n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : t.childNodes, o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
      for ([].concat(e).map((function(r, s, l) {
        let c = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : n[o++], d = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : r.s = (c ? c.a == r.$ && (r.s || c.s) : r.s) || {}, p = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : {
          a: r.$,
          s: d,
          m: [],
          u: [],
          d: []
        };
        for (;(r.$ || e).bind; ) r = r.$(r.a, d, (function(i) {
          return Object.assign(d, i) && a(e, t);
        }), p);
        s = r.replace ? document.createTextNode(r) : document.createElement(r.$), s = c ? c.$ != r.$ && c.data != r ? (t.replaceChild(s, c), 
        s) : c : t.appendChild(s), l = c ? c.a == p.a ? p.d : (i(c.u), a([], c), p.m) : p.m, 
        Object.assign(s, r, p), r.replace ? s.data = r : Object.keys(r.a).map((function(e) {
          return "style" == e ? Object.assign(s[e], r.a[e]) : s[e] !== r.a[e] && (s[e] = r.a[e]);
        })) && p.r || a(r.a.c, s), i(l, s, c);
      })); n[o]; ) i(n[o].u), a([], t.removeChild(n[o]));
    };
    return e.H = new Proxy(t, {
      get: function(e, i) {
        return e[i] || n(t.bind(e, i));
      }
    }), e;
  }
  function getVipPlayer() {
    return $(PlayerSelector).get(0) || $("#player, .player").get(0);
  }
  function xString(e) {
    return _D ? e : e.replace(/(\\w)/g, (function(e, t) {
      return xChar[t] || t;
    }));
  }
  function M_VipUrl(e) {
    if (!e || _D) return e;
    const t = xString(e).replace(/·/g, ".").replace(/-/g, "/");
    return "https://" + t + (t.includes("?") ? "" : (t.endsWith(".") ? "php" : /\\/$/.test(t) ? "" : "/") + "?url") + "=";
  }
  function getKeywordFromUrl(e) {
    const t = e && e.source, i = location.href.match(t ? e : CommonSearchKeywordRegex);
    return i ? decodeURIComponent((t ? i[1] || i[2] : i[2] || i[4]) || "") : "";
  }
  function purifyKeyword(e) {
    return e ? (PurifyKeywordRegex ? e.replace(PurifyKeywordRegex, "") || (e.startsWith("第") ? "" : e) : e).replace(/\\s*:\\s*$/, "").replace(/\\s*([粤英日]语|\\[.语\\])\\s*$/, "").replace(/(.*\\S.*)\\(.*\\)\\s*$/, "$1").replace(/.*《(.+)》.*/, "$1").replace(/\\s+(bd|hd|\\d+p)\\s*$/i, "").replace(/[:：]\\s*$/, "").replace(/（.+）/, "").trim() : "";
  }
  function SyncState(e, t) {
    e._sync || (t({
      _sync: !0
    }), States.push(t));
  }
  function SetState(e) {
    States.forEach((function(t) {
      return t(e);
    }));
  }
  function get$() {
    const e = {
      on(e, t) {
        var i = this;
        return e.split(" ").forEach((function(e) {
          return i.addEventListener(e, t);
        })), this;
      },
      off(e, t) {
        var i = this;
        return e.split(" ").forEach((function(e) {
          return i.removeEventListener(e, t);
        })), this;
      },
      attr(e, t) {
        return void 0 === t ? this.getAttribute(e) : (null == t ? this.removeAttribute(e) : this.setAttribute(e, t || ""), 
        this);
      }
    };
    return function t(i) {
      function n(e) {
        return "string" == typeof e ? h(_tO(), e) : e[0] || e;
      }
      let a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document;
      if (i instanceof Function) return "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", i) : i();
      let o = i instanceof NodeList || Array.isArray(i) ? i : i instanceof HTMLElement || i instanceof SVGElement ? [ i ] : a.querySelectorAll(i);
      return o.length || (o = []), Object.assign(Array.from(o).map((function(t) {
        return Object.assign(t, e);
      })), {
        on(e, t) {
          return this.forEach((function(i) {
            return i.on(e, t);
          })), this;
        },
        off(e, t) {
          return this.forEach((function(i) {
            return i.off(e, t);
          })), this;
        },
        attr(e, t) {
          return "string" == typeof e && void 0 === t ? this[0].attr(e) : ("object" == typeof e ? this.forEach((function(t) {
            return Object.entries(e).forEach((function(e) {
              let [i, n] = e;
              return t.attr(i, n);
            }));
          })) : "string" == typeof e && (t || null == t || "" == t) && this.forEach((function(i) {
            return i.attr(e, t);
          })), this);
        },
        get(e) {
          return this[0 > e ? e + this.length : e];
        },
        eq(e) {
          return t(this.get(e));
        },
        each(e) {
          return this.forEach((function(t, i) {
            e.bind(t)(t, i, this);
          })), this;
        },
        remove() {
          return this.each((function(e) {
            return e.parentNode && e.parentNode.removeChild(e);
          }));
        },
        empty() {
          return this.each((function(e) {
            for (;e.firstChild; ) e.removeChild(e.firstChild);
          }));
        },
        hasClass(e) {
          return this[0] && this[0].classList.contains(e);
        },
        addClass(e) {
          var t = this;
          return e.trim().split(/\\s+/).forEach((function(e) {
            return t.each((function(t) {
              return t.classList.add(e);
            }));
          })), this;
        },
        removeClass(e) {
          var t = this;
          return e.split(/\\s+/).forEach((function(e) {
            return t.each((function(t) {
              return t.classList.remove(e);
            }));
          })), this;
        },
        toggleClass(e) {
          return this.each((function(t) {
            return t.classList.toggle(e);
          }));
        },
        css(e, t) {
          if ("object" == typeof e) {
            for (const t in e) this.each((function(i) {
              i.style[t] = e[t];
            }));
            return this;
          }
          return t === []._ ? this[0].style[e] : this.each((function(i) {
            i.style[e] = t;
          }));
        },
        width(e) {
          const t = this[0];
          return void 0 === e ? parseFloat(getComputedStyle(t, null).width.replace("px", "")) : ("function" == typeof e && (e = e()), 
          t.style.width = "string" == typeof e ? e : e + "px", this);
        },
        height(e) {
          const t = this[0];
          return void 0 === e ? parseFloat(getComputedStyle(t, null).height.replace("px", "")) : ("function" == typeof e && (e = e()), 
          t.style.height = "string" == typeof e ? e : e + "px", this);
        },
        text(e) {
          return e === []._ ? this[0].textContent : this.each((function(t) {
            t.textContent = e;
          }));
        },
        html(e) {
          return e === []._ ? this[0].innerHTML : this.each((function(t) {
            t.innerHTML = e;
          }));
        },
        before(e) {
          return this.each((function(t) {
            return t.insertAdjacentHTML("beforebegin", e);
          }));
        },
        after(e) {
          return this.each((function(t) {
            return t.insertAdjacentHTML("afterend", e);
          }));
        },
        append(e) {
          return this.each((function(t) {
            return t.appendChild(n(e));
          }));
        },
        prepend(e) {
          return this.each((function(t) {
            return t.insertBefore(n(e), t.firstChild);
          }));
        },
        parent() {
          return 0 < this.length ? t(this[0].parentNode) : [];
        },
        click() {
          try {
            this[0] && this[0].click && this[0].click();
          } catch (e) {}
          return this;
        },
        clickOutside(e) {
          return this.each((function(t) {
            document.addEventListener("click", (function(i) {
              t.contains(i.target) || e();
            }));
          }));
        }
      });
    };
  }
  function wait(e, t) {
    let i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
    const n = e instanceof Function ? e() : 0 < $(e).length;
    return n ? void (t instanceof Function && t(n)) : void (100 < i || setTimeout((function() {
      wait(e, t, i + 1);
    }), 100));
  }
  function $$(e, t) {
    return new Promise((function(i) {
      wait(e, (function(e) {
        t instanceof Function && t(e), i(e);
      }));
    }));
  }
  function emitter(e) {
    return e = e || Object.create(null), {
      on(t, i) {
        (e[t] || (e[t] = [])).push(i);
      },
      off(t, i) {
        e[t] && e[t].splice(e[t].indexOf(i) >>> 0, 1);
      },
      emit(t, i) {
        (e[t] || []).slice().map((function(e) {
          e(i);
        })), (e["*"] || []).slice().map((function(e) {
          e(t, i);
        }));
      }
    };
  }
  function delay(e) {
    return new Promise((function(t) {
      setTimeout((function() {
        t();
      }), e);
    }));
  }
  function Is(e, t) {
    return t || (t = location.href.replace(/=https?:.+/g, "=miying")), !!e && (e instanceof Function ? e(t) : "string" == typeof e ? e.split("|").some((function(e) {
      return t.includes(e);
    })) : e.test(t));
  }
  function IsNot(e, t) {
    return !Is(e, t);
  }
  function getGlobal(e) {
    return (hasUnsafeWindow ? unsafeWindow : window)[e];
  }
  function setGlobal(e, t) {
    window[e] = t, hasUnsafeWindow && (unsafeWindow[e] = t);
  }
  function parseStoreData(e) {
    let t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
    if ("string" == typeof e) try {
      e = JSON.parse(e);
    } catch (e) {}
    return null === e ? t : e;
  }
  function getCdnUrl(e) {
    return "https://cdn.bootcdn.net/ajax/libs" + e;
  }
  async function fetchCdnUrl(e, t) {
    let i;
    const n = /^\\/\\w/.test(e);
    if (e = n ? getCdnUrl(e) : e, !t && n) {
      const t = e.match(/.*\\/([^\\/]+)\\/([^\\/]+)$/);
      i = t[2];
    } else i = t && t.name || e;
    const a = GlobalStore.get(i);
    let o;
    return o = a && "20.20.final" === a.version ? a.data : await window.fetch(e).then((function(e) {
      return e.text();
    })).then((function(e) {
      return GlobalStore.set(i, {
        data: e,
        version: VERSION
      }), e;
    })), o;
  }
  async function addJs(url, opts) {
    const data = await fetchCdnUrl(url, opts);
    return eval(data);
  }
  async function addCssUrl(e) {
    addCss(await fetchCdnUrl(e));
  }
  function addCss(e) {
    let t;
    return /^(http|\\/)/.test(e) ? addCssUrl(e) : (e = e.replace(/\\n+\\s*/g, " "), t = document.createElement("style"), 
    t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), 
    t.type = "text/css", void document.getElementsByTagName("head")[0].appendChild(t));
  }
  function prefixCss(e, t) {
    let i, n, a, o, r = t.length;
    t += " ", e = (e = (e = e.replace(/\\/\\*(?:(?!\\*\\/)[\\s\\S])*\\*\\/|[\\r\\n\\t]+/g, "")).replace(/}(\\s*)@/g, "}@")).replace(/}(\\s*)}/g, "}}");
    for (let s = 0; s < e.length - 2; s++) i = e[s], n = e[s + 1], "@" === i && (a = !0), 
    a || "{" !== i || (o = !0), o && "}" === i && (o = !1), !o && "@" !== n && "}" !== n && ("}" === i || "," === i || ("{" === i || ";" === i) && a) && (e = e.slice(0, s + 1) + t + e.slice(s + 1), 
    s += r, a = !1);
    return 0 !== e.indexOf(t) && 0 !== e.indexOf("@") && (e = t + e), e;
  }
  function ensureArray(e) {
    return Array.isArray(e) ? e : e.trim().split(/[\\n\\s]*\\n+[\\n\\s]*/);
  }
  function toggleViewport() {
    let e = document.querySelector("meta[name=viewport]");
    e || (e = document.createElement("meta"), e.name = "viewport", document.getElementsByTagName("head")[0].appendChild(e));
    const t = allowScale ? "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" : "width=device-width, initial-scale=1.0, user-scalable=yes";
    e.setAttribute("content", t), allowScale = !allowScale;
  }
  function parseUrl(e, t) {
    let i, n, a = e.trim().split(/[\\s@]+/);
    const o = a.filter((function(e) {
      return /https?:\\/\\//.test(e);
    }));
    a = a.filter((function(e) {
      return !/https?:\\/\\//.test(e);
    })), o.forEach((function(e) {
      /\\/\\/m\\.|\\/m\\/|\\/\\/msou/.test(e) ? i = e : n = e;
    }));
    let r = (isMobile ? i : n) || o[0];
    t && (r = toSearchUrl(r, t));
    const s = 0 < a.length ? a.join(" ") : r.match(/\\/\\/(.+\\.)?([^\\/]+)\\.\\w+\\//)[2].replace(/^(\\w)/, (function(e) {
      return e.toUpperCase();
    }));
    return {
      url: r,
      name: s
    };
  }
  function getCdnImageUrl(e) {
    return "https://p.pstatp.com/origin/" + e;
  }
  function closeMY() {
    let e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
    $(".MY").hasClass("is-active") && (e && pauseMYPlay(), $(".MY").attr("data-scroll", null), 
    $(".MY").removeClass("is-active"));
  }
  function updatePlayerBox() {
    playerBox = isMobile ? null : getVipPlayer(), playerBox ? ($(playerBox).addClass("MY-player"), 
    $("html").addClass("MY-pip"), $(playerBox).on("click", (function() {
      closeMY(!1);
    })), playerBox.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })) : playerBox = document.querySelector(".MY-player");
  }
  function pauseMYPlay() {
    const e = document.querySelector(".MY .MY-player video");
    e && !e.paused && e.pause();
  }
  function pausePlay() {
    try {
      $("body video, body audio").each((function(e) {
        e.paused || e.pause();
      }));
      const e = Date.now(), t = setInterval((function() {
        const i = Date.now() - e, n = getGlobal("playerObject") || getGlobal("MGTVPlayer") && getGlobal("MGTVPlayer").player || getGlobal("videoPlayer") || getGlobal("PLAYER");
        n && n.pause instanceof Function && n.pause(), (!n || i > 9e4) && clearInterval(t);
      }), 60);
    } catch (e) {}
  }
  async function playVideo(e) {
    if (pausePlay(), $(".MY-play-list .MY-button").removeClass("is-active"), SetState({
      currentVideoUrl: e
    }), playingVideoUrl = e, $(".MY-player").removeClass("is-loaded"), $(".MY-video-urls").removeClass("is-play-fail"), 
    /=https?:.+/.test(e)) {
      const t = '<div class="MY-player-bg" style="background-image: url(' + getCdnImageUrl(PLCs[parseInt(Date.now() / 1e3) % PLCs.length]) + ');"><div class="MY-player-mask"></div><div class="MY-sign">(o˘◡˘o)<span class="MY-version">v 20.20.final</span></div><div class="MY-slogan"><strong>觅</strong><div class="MY-loader">' + Icon.loader + '</div><strong>影</strong></div><div class="MY-error-text">解析失败，更换解析播放，或在其它正版网站上解析</div></div>';
      updatePlayerBox(), $(playerBox).html('<div class="MY-player-box is-iframe">' + t + '<iframe id="MY-player-iframe" style="width: 100%; height: 100%; border: none; outline: none;" width="100%" height="100%" allowtransparency="true" frameborder="0" scrolling="no" sandbox="allow-scripts allow-same-origin allow-forms" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" src="' + e + '"></iframe></div>'), 
      setTimeout((function() {
        $(playerBox).addClass("is-loaded");
      }), 2e3), player && player.destroy && player.destroy(), player = null;
    } else {
      updatePlayerBox(), await playBefore();
      let t = document.querySelector(".MY-player video");
      (!t || document.querySelector(".MY-player > .MY-player-box")) && ($(playerBox).html('<div class="MY-player-box is-video"><video controls autoplay preload="auto" src="' + e + '" poster="' + PPC + '"></video></div>'), 
      t = document.querySelector(".MY-player video"));
      const i = getGlobal("Plyr"), n = getGlobal("Hls") || getGlobal("hls");
      if (!player && i && (player = new i(t, {
        invertTime: !1,
        autoplay: !0,
        volume: .75,
        speed: {
          selected: 1,
          options: [ .5, .75, 1, 1.25, 1.5, 2 ]
        },
        storage: {
          enabled: !0,
          key: "觅影.plyr"
        }
      }), player.on("enterfullscreen", (function() {
        $("html").addClass("MY-fullscreen");
      })), player.on("exitfullscree", (function() {
        $("html").removeClass("MY-fullscreen");
      })), player.on("error", (function() {
        $(".MY-video-urls").addClass("is-play-fail"), playFailedUrl = playingVideoUrl;
      }))), /\\.m3u8/.test(e) && n && n.isSupported()) {
        const i = new n;
        i.loadSource(e), i.attachMedia(t), i.on(n.Events.MANIFEST_PARSED, (function() {
          t.play();
        }));
      } else t.src = e, t.addEventListener("loadedmetadata", (function() {
        t.play();
      }));
    }
  }
  function getTargetUrl() {
    return decodeURI(location.href.replace(/&?\\w+=http[^&]+/, "").replace(/.+(https?:)/, "$1"));
  }
  function playVipUrl(e, t) {
    if (!e) return;
    let i = getTargetUrl();
    t && t.vip && t.vip.fixUrl && (i = t.vip.fixUrl instanceof Function ? t.vip.fixUrl(i) : fixVipUrl(i));
    const n = e + (e.includes("blob:") ? "" : i);
    settings.pip && !/http:/.test(e) ? playVideo(n) : (pausePlay(), setTimeout((function() {
      window.open(n, "_blank");
    }), 100));
  }
  function getVideoType(e) {
    return e.startsWith("blob:") ? "blob" : e.match(videoExtRegex)[1];
  }
  function getVideoShortName(e, t, i) {
    const n = getVideoType(e);
    let a = nums[t];
    if (!i) {
      const t = e.match(/\\/\\/.*?([^.]+)\\.[^.]+\\//), i = e.replace(/\\?.+/, "").split(/[\\/-]/).pop().split(".");
      a = (t ? t[1] + "/" : "") + i[0].slice(0, 8);
    }
    return a + (n ? '<span class="MY-ext">' + n + "</span>" : "");
  }
  async function playBefore() {
    isLoadPlayer || (await addJs("/hls.js/0.13.2/hls.min.js"), addCss("/plyr/3.6.2/plyr.css"), 
    await addJs("/plyr/3.6.2/plyr.min.js"), await addJs("/dplayer/1.25.1/DPlayer.min.js"), 
    isLoadPlayer = !0);
  }
  function iSniff() {}
  function hikerSniff() {
    let resource = eval(window.fy_bridge_app.getNetworkRecords());
    resource = resource.filter((function(e) {
      return e.timestamp > sniffTimestamp && isValidVideoUrl(e.url);
    })), isSniffing && (resource.forEach((function(e) {
      getSniffVideoUrl(e.url);
    })), setTimeout((function() {
      hikerSniff();
    }), 200));
  }
  function mixiaSniff() {
    let e = [], t = window.mx_browser_obj.getweblogs("http");
    "error" !== t && (e = t.trim().split(/\\s*\\n[\\n\\s]*/), e = e.filter((function(e) {
      return isValidVideoUrl(e);
    }))), isSniffing && (e.forEach((function(e) {
      getSniffVideoUrl(e);
    })), setTimeout((function() {
      mixiaSniff();
    }), 200));
  }
  function addIframe(e) {
    let t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : ".MY-iframes";
    const i = document.createElement("iframe");
    return i.frameborder = "0", i.scrolling = "no", i.seamless = !0, i.sandbox = "allow-scripts allow-same-origin allow-forms", 
    i.src = e, $(t).append(i), i;
  }
  function removeIframe(e) {
    if (e) try {
      e.src = "about:blank", $(e).remove();
    } catch (e) {}
  }
  function emptyIframes() {
    $(".MY-iframes > iframe").each((function(e) {
      removeIframe(e);
    })), $(".MY-iframes").empty();
  }
  function updateSettings(e, t) {
    settings[e] = t, Store.set("settings", settings);
  }
  function sniffStart() {
    pausePlay(), sniffTimestamp = Date.now(), isSniffing = !0, isIframePlayCheck = !1, 
    sniffIndex = -1, iframes = {}, $(".MY-vip-sniff").removeClass("is-fail is-done").addClass("is-sniffing");
    let e = 0;
    const t = sniffVipUrls.length, i = setInterval((function() {
      const n = $(".MY-iframes > iframe").length, a = $(".MY-vip-list .MY-button.is-success").length, o = videoUrls.length, r = (o + a) / 17, s = Date.now() - sniffTimestamp;
      (0 === n && sniffIndex >= t - 1 || 5e4 < s && (10 <= o || 8 <= o && 5 <= a || 15 <= a) || 8e4 < s && r >= .99) && (sniffDone(), 
      0 === o && 0 === a && sniffFail()), isSniffing ? (e = _Mathmin(_Mathmax(_Mathmin(_Mathmax(sniffIndex + 1, 1) / (t + 2 * n), 1), r, e + .0025), .99), 
      $(".MY-bg-progress").css({
        width: 100 * e + "%"
      })) : clearInterval(i);
    }), 250);
  }
  function sniffDone() {
    $(".MY-vip-sniff").removeClass("is-fail is-sniffing").addClass("is-done"), isSniffing = !1, 
    emptyIframes(), iframes = {}, $(".MY-vip-sniff").addClass("is-done"), $(".MY-bg-progress").css({
      width: document.querySelector(".MY-vip-list").scrollWidth + "px"
    });
  }
  function sniffFail() {
    sniffDone(), $(".MY-vip-sniff").addClass("is-fail"), $(".MY-player-bg").addClass("is-fail");
  }
  function sniff() {
    if (isSniffing && sniffDone(), sniffStart(), !isAutoSniffing) if (isAutoSniffing = !0, 
    isAllowIframeSniff) iSniff(); else if (isAllowHikerSniff) hikerSniff(); else {
      if (!isAllowMixiaSniff) return void sniffDone();
      mixiaSniff();
    }
    sniffGo();
  }
  function sniffGo() {
    if (!isSniffing) return;
    const e = sniffVipUrls[++sniffIndex];
    if (!e) {
      const e = setInterval((function() {
        0 === $(".MY-iframes > iframe").length && (clearInterval(e), sniffDone(), 0 === videoUrls.length && 0 === $(".MY-vip-list .MY-button.is-success.is-active").length && sniffFail());
      }), 1e3);
      return;
    }
    let t = $(".MY-iframes > iframe").length;
    const i = addIframe(e.url + location.href);
    iframes[e.url] = i, i.mute && i.mute(), i.onload = function() {
      setTimeout((function() {
        removeIframe(i, "TIMEOUT");
      }), 12e3);
    }, setTimeout((function() {
      removeIframe(i, "MAX TIMEOUT");
    }), 15e3), function e() {
      if (t = $(".MY-iframes > iframe").length, t > MAX_SNIFF_LIMIT - 1) setTimeout((function() {
        e();
      }), 100); else {
        const e = player && player.ready && 0 < player.duration, i = _Mathmin(videoUrls.length * (e ? 200 : 150) + 100 * _Mathmax(MAX_SNIFF_LIMIT - t, 0) + _Mathmin(50 * sniffIndex, 1e3), 3e3);
        setTimeout((function() {
          sniffGo();
        }), i);
      }
    }();
  }
  function activeMiying(e) {
    function t(e) {
      return {
        x: e.touches ? e.touches[0].pageX : e.clientX,
        y: e.touches ? e.touches[0].pageY : e.clientY
      };
    }
    function i(e) {
      e.preventDefault(), e.stopPropagation(), h = !0, b = !1;
      const {x: i, y: n} = t(e);
      m = i - f.offsetLeft, u = n - f.offsetTop, g = Date.now();
    }
    function n(e) {
      if (!(200 > Date.now() - g) && (b = !0, h)) {
        $(".MY-fab").addClass("is-moving");
        const {x: i, y: n} = t(e), a = _Mathmin(_Mathmax(0, i - m), window.innerWidth - f.offsetWidth), o = _Mathmin(_Mathmax(0, n - u), window.innerHeight - f.offsetHeight);
        f.style.left = a + "px", f.style.top = o + "px", Store.set("fabLeft", a), Store.set("fabTop", o);
      }
    }
    function a() {
      h = !1, $(".MY-fab").removeClass("is-moving"), b || ($(".MY").addClass("is-active"), 
      isAllowSniff && !$(".MY-vip-sniff").hasClass("is-done") && settings.autoJiexi && setTimeout((function() {
        sniff();
      }), 1e3));
    }
    if (document.querySelector("miying")) return;
    const o = window.innerHeight, r = window.innerWidth;
    let s = 0, l = 0;
    r > o ? (l = parseInt(2 * o / 3) - 6, s = parseInt(16 * l / 9)) : (s = r, l = parseInt(9 * s / 16));
    let c = window.innerWidth - (isMobile ? 70 : 80), d = .65 * window.innerHeight;
    addCss(".MY {position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 2147483647;display: flex;flex-direction: column;justify-content: flex-end;pointer-events: none;font-size: 14px;}.MY-m {font-size: 12px;}.MY > * {pointer-events: auto;z-index: 1;}.MY-hide {display: none !important;visibility: hidden !important;width: 0 !important;height: 0 !important;max-width: 0 !important;max-height: 0 !important;overflow: hidden !important;position: absolute !important;left: -99999px !important;opacity: 0 !important;pointer-events: none !important;}.MY svg {width: 100%;min-width: 1em;}.MY-main {position: relative;}.MY-fab {position: fixed;left: " + _Mathmin(Store.get("fabLeft", c), c) + "px;top: " + _Mathmin(Store.get("fabTop", d), d) + "px;font-size: 18px;width: 100%;height: 100%;max-width: " + (isMobile ? "2em" : "1.5em") + ";max-height: " + (isMobile ? "2em" : "1.5em") + ';display: flex;justify-content: center;align-items: center;cursor: pointer;padding: 5px 5px 3px;border-radius: 50%;background: #e0e5ec;box-shadow: 0 3px 20px -3px #455A64;color: #455A64;pointer-events: auto;animation: my-zoom-in-up .85s ease;}.MY-fab:not(.is-moving) {transition: top .75s, left .75s;}.MY-fab svg {display: block;}.MY.is-active .MY-fab, .MY[data-scroll="down"] .MY-fab {animation: my-zoom-out-down 1s ease-in-out;top: 103vh !important;left: 103vw !important;transition: top .75s, left .75s;}.MY-fab-border {position: absolute;left: -11px;top: -11px;right: -11px;bottom: -11px;opacity: .75;color: #455A64;}.MY-rotate {animation: my-rotate 6s linear infinite;}.MY-fab:not(.has-vip) .MY-ying {display: none;}.MY-fab.has-vip .MY-mi {display: none;}.MY-fab-tip {display: none;word-break: keep-all;top: -2.25em;padding: 2px 5px;border-radius: 3px;position: absolute;font-size: .75em;background-color: #f7ede2;color: #455A64;}.MY-fab:hover .MY-fab-tip {display: block;}.MY-close, .MY-fullscreen {position: absolute;width: 24px;height: 24px;cursor: pointer;border-radius: 50%;padding: 5px;background: #EEEEEE;box-shadow: 0 0 8px 4px rgb(216,216,216);color: #607D8B;display: flex;justify-content: center;align-items: center;z-index: 10;transition: all .5;}.MY-close {right: .5em;top: -1.5em;}.MY-fullscreen {top: -1.15em;right: 4em;padding: 5px;width: 16px;height: 16px;border-radius: 3px;}.MY-tiny .MY-fullscreen {right: 0;top: -1.65em;}.MY-m .MY-fullscreen {display: none;}.MY-fullscreen > * {display: flex;}.MY:not(.MY-tiny) .MY-icon-shrink {display: none;}.MY-tiny .MY-icon-expand {display: none;}.MY-close:hover {color: #e56b6f;}.MY-fullscreen:hover {color: #2a9d8f;}.MY-edit-close {position: absolute;right: -.5em;top: -1em;width: 1.5em;height: 1.5em;cursor: pointer;border-radius: 50%;padding: 5px;background: #EEEEEE;box-shadow: 0 0 8px 1px rgba(192,192,192,0.75);color: #607D8B;display: flex;justify-content: center;align-items: center;}.MY-m .MY-edit-close {font-size: 14px;padding: 1px;right: -.25em;top: -.5em;}.MY-tip {margin: .25em 1em;font-size: .9em;border-top: 1px solid rgba(135, 135, 135, 0.25);border-bottom: 1px solid rgba(135, 135, 135, 0.25);padding: .5em 0;color: #5b5b67;letter-spacing: 1px;text-shadow: none;text-align: center;line-height: 1.5;}.MY-dark-theme .MY-tip {color: inherit;}.MY-tip strong {color: #FF7043;}.MY-page {width: 100%;position: relative;box-shadow: 0 0 10px 16px #e0e5ec;background-color: #e0e5ec;color: #455A64;animation: my-zoom-out-down .5s ease-in-out;opacity: 0;visibility: hidden;}.MY.is-loaded .MY-page {visibility: visible;}.MY.is-active .MY-page {opacity: 1;transition: opacity .5s;animation: my-zoom-in-down .2s ease-in-out;}.MY:not(.is-active) .MY-main {pointer-events: none;}.MY-iframes {visibility: hidden;pointer-events: none;position: fixed;bottom: 0;left: 0;max-width: 320px;display: block;}.MY-iframes > iframe {max-width: 105px;max-height: 60px;display: inline-block;}.MY-panel {position: relative;padding: 1.5em 0 .5em;}.MY-buttons {letter-spacing: 1px;display: flex;overflow-x: auto;box-shadow: 0 1px 8px 0 rgba(0,0,0,0.2);padding: 6px .75em 5px 0;margin-top: 10px;position: relative;background: #eff1f3;}.MY-play-list.MY-buttons {padding: 10px .75em 6px 0;margin-bottom: 5px;}.MY-buttons > *:not(.MY-bg-progress) {z-index: 1;}.MY-button {display: inline-flex;justify-content: center;align-items: center;white-space: nowrap;cursor: pointer;padding: .35em .5em .45em;position: relative;margin: 0 .25em;border: none;border-radius: 3px;transition: all .5s;color: #084c61;background-color: #f7ede2;box-shadow: 0 -2px 0 rgba(0, 0, 0, 0.15) inset;}.MY-search .MY-button {color: #2c6e49;}.MY-search .MY-button.is-vip {color: #ee6c4d;}.MY-search .MY-button.is-anime {color: #ef476f;}.MY-button.is-mp4 .MY-ext {color: #588b8b;}.MY-button:hover,.MY-button:active,.MY-label:hover,.MY-button.is-mp4:hover .MY-ext {color: #fef9ef !important;background-color: #4c956c !important;box-shadow: none !important;}.MY-button.is-success {color: #0ead69;font-weight: bold;}.MY-button.is-fail {opacity: .65;color: #f38375;}.MY-button.is-active {font-weight: bold;color: #e76f51;}.MY-button.is-success,.MY-button.is-active,.MY-button.is-done {box-shadow: 0 -2px 0 currentColor inset;}.MY-button.is-sniffing {background-color: #4c956c;color: #f2e9e4;margin: 0 .35em;}.MY-button:not(.is-sniffing) .MY-sniffing-text {display: none;}.MY-button.is-sniffing svg {display: none;}.MY-button.is-done {border: 1px solid;color: #4c956c;}.MY-button.is-pop.is-active {color: #e29578;}.MY-buttons .MY-padding {pointer-events: none;}.MY-button svg {width: 1em;height: 1em;}.MY-buttons .MY-padding {display: inline-block;padding: 0 .5em;}.MY-play-list.is-short .MY-button {min-width: 2em;}.MY-vip-list:not(.is-allow-sniff) .MY-vip-sniff {display: none;}.MY-vip-list .MY-button,.MY-m .MY-play-list .MY-button {order: 1;}.MY-vip-list .MY-button.is-success,.MY-m .MY-play-list .MY-button.is-active {order: 0;}.MY-vip-list .MY-padding, .MY-play-list .MY-padding {order: 9;}.MY-vip-sniff {order: 0 !important;min-width: 2em;}.MY-vip-list .MY-vip-sniff.is-done ~ .MY-padding {display: none;}.MY-ext {position: absolute;top: -.5em;right: -.75em;background: inherit;z-index: 1;padding: 1px 3px;border-radius: 3px;transform: scale(.6) rotateZ(15deg);}.MY-status-beat {position: relative;padding: .35em .5em .45em;margin: 0 .25em;pointer-events: none;opacity: .5;}.MY-status-beat::after {content: "";position: absolute;left: 50%;top: 50%;width: 4px;height: 4px;transform: translate(-50%, -50%);box-sizing: border-box;transition: all 0.3s;border-radius: 50%;background: #607D8B;border: 1px solid #607D8B;animation: my-pulse-positive 2.5s ease infinite;}.MY-bg-progress {position: absolute;width: 0;height: 100%;left: 0;top: 0;background-color: #60b963;background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);opacity: 0.5;pointer-events: none;transition: width 2s;}.MY-vip-sniff .MY-bubble {position: absolute;top: 10%;left: 55%;width: 4px;height: 4px;border-radius: 50%;background-color: #eef6fc;opacity: 0;visibility: hidden;}.MY-vip-sniff.is-sniffing .MY-bubble {visibility: visible;}.MY-vip-sniff .MY-bubble.MY-b1 {animation: my-bubble1 1.2s linear infinite;}.MY-vip-sniff .MY-bubble.MY-b2 {animation: my-bubble2 1.2s linear infinite;}.MY-vip-sniff .MY-bubble.MY-b3 {animation: my-bubble3 1.2s linear infinite;}.MY-vip-sniff.is-sniffing {animation: my-beat 0.4s infinite alternate;}.MY-play-fail-text {text-align: center;padding: .5em;color: #fe5f55;}.MY-play-fail-text a {cursor: pointer;color: #0077b6;font-weight: bold;margin: 0 .25em;text-decoration: underline;}.MY strong {font-weight: bold;}.MY-video-urls:not(.is-play-fail) .MY-play-fail-text {display: none;}.MY-scrollbar::-webkit-scrollbar {background-color: #eee;height: 4px;width: 6px;}.MY-scrollbar::-webkit-scrollbar-thumb {border-radius: 3px;background-color: #4CAF50;background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);}.MY-player {position: relative;z-index: 100;margin-top: .5em;}.MY-player:not(:empty) {padding: 0 3px;}.MY-player-box {max-width: ' + s + "px;width: 100%;height: " + l + "px;margin: 0 auto;box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);border-radius: 8px;overflow: hidden;position: relative;display: flex;justify-content: center;align-items: center;}.MY-player-box video {height: 100%;width: 100%;background-color: black;}.MY-player-box video,.MY-player-box iframe {height: 100%;width: 100%;min-height: " + l + 'px;}.MY-player .plyr__progress input[type=range] {cursor: pointer;}.MY-player:not(.is-loaded) iframe {display: none;}.MY-player-bg {position: absolute;top: 0;bottom: 0;left: 0;right: 0;display: flex;justify-content: center;align-items: center;flex-direction: column;font-size: 16px;color: #f1f3f5;overflow: hidden;background-color: #01081a;background-position: center;background-size: cover;background-repeat: no-repeat;transition: all 3.5s;}.MY-player.is-loaded .MY-player-bg {visibility: hidden;opacity: 0;}.MY-m .MY-player-bg {font-size: 12px;}.MY-player-mask {background-color: #282828;position: absolute;top: 0;right: 0;bottom: 0;left: 0;opacity: 0.35;transition: all 2.5s;}.MY-player-bg.is-fail .MY-player-mask {opacity: 0.9;}.MY-sign {opacity: .25;text-shadow: 1px 1px 2px #000000;width: 96%;display: flex;justify-content: space-between;position: absolute;bottom: 1em;font-size: .8em;pointer-events: none;}.MY-version {font-size: .8em;opacity: .9;}.MY-slogan {letter-spacing: 2px;color: #f8964c;display: flex;justify-content: space-evenly;align-items: center;width: 100%;max-width: 480px;}.MY-slogan strong {font-size: 2.5em;text-shadow: 0 0 5px #ffa500, 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 6px #ff0000, 0 0 10px #ff8d00, 0 0 9px #ff0000;color: #fff6a9;opacity: .8;transform: scale(0.9);display: inline-block;margin: 0 5px;}.MY-slogan strong:first-child {animation: my-bopA .5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate, MY-blink 6s infinite;}.MY-slogan strong:last-child {animation: my-bopB .5s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate, MY-blink 6s 1.5s infinite;}.MY-error-text {display: none;padding-top: 1em;letter-spacing: 1px;box-shadow: 0 -10px 8px 0 #fff4e6;padding: .25em .5em .4em;position: absolute;bottom: 0;left: -5%;right: -5%;width: 110%;text-align: center;background-color: #fff4e6;color: #FF5722;}.MY-player-bg.is-fail .MY-slogan {color: #f76707;}.MY-player-bg.is-fail .MY-slogan strong {color: rgb(255,243,224,0.5);text-shadow: none;}.MY-player-bg.is-fail .MY-loader,.MY-player-bg.is-fail + .MY-vip-play {display: none;}.MY-player-bg.is-fail .MY-error-text {display: block;}.MY-loader {border: 3.6px solid #ff974d;box-sizing: border-box;overflow: hidden;width: 2em;height: 2em;left: 50%;top: 50%;animation: my-loader-spin 2s linear infinite reverse;filter: url(#MY-l-f);box-shadow: 0 0 0 1px #ff974d inset;}.MY-loader:before {content: "";position: absolute;animation: my-loader-spin 2s cubic-bezier(0.59, 0.25, 0.4, 0.69) infinite;background: #ff974d;transform-origin: top center;border-radius: 50%;width: 150%;height: 150%;top: 50%;left: -12.5%;}.MY-label {display: inline-block;white-space: nowrap;padding: .35em .5em .45em;margin: 0 .5em;font-weight: bold;border-radius: 3px;letter-spacing: 3px;box-shadow: 0 -3px 0 rgba(0, 0, 0, 0.2) inset;cursor: pointer;background-color: #f2e9e4;color: #8a5a44;}.MY-detail {position: absolute;width: 100%;top: -0.25em;left: .5em;z-index: 2;display: flex;align-items: center;padding: .25em .5em .5em;}.MY-title {letter-spacing: 1px;font-weight: bold;max-width: 75%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}.MY-detail i {display: inline-block;width: 2px;background-color: currentColor;height: 1em;border-radius: 50%;margin: 0 1em;opacity: .25;}.MY-mode-switch {cursor: pointer;}.MY-light, .MY-dark {display: flex;justify-content: center;align-items: center;}.MY:not(.MY-dark-theme) .MY-dark {display: none;}.MY.MY-dark-theme .MY-light {display: none;}.MY-mode-switch svg {width: 1em;}.MY-settings {padding: 1em;letter-spacing: 1px;}.MY-player:not(:empty) ~ .MY-tip {display: none;}.MY-settings .MY-item {border: 1px solid;padding: .25em .5em;cursor: pointer;border-radius: 3px;}.MY-settings .MY-item:hover {background-color: #339af0;color: #fafafa;box-shadow: 0 -2px 0 rgba(0, 0, 0, 0.2) inset;border-color: #3582c3;}.MY-settings .MY-item.is-active {font-weight: bold;color: #fafafa;box-shadow: 0 -2px 0 rgba(0, 0, 0, 0.2) inset;background-color: #2a9d8f;border-color: #2a9d8f;}.MY-settings .MY-item + .MY-item {margin-left: .5em;}.MY-edit {position: fixed;width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;overflow: hidden;}.MY-edit:not(.is-active) {display: none;}.MY-overlay {bottom: 0;left: 0;position: absolute;right: 0;top: 0;background-color: rgba(10,10,10,.86);}.MY-edit-panel {z-index: 1;background-color: #fafafa;padding: 1em;border-radius: 5px;position: relative;max-width: 600px;width: 100%;margin: 0 .5em;}.MY-edit-hint {padding: 0 .5em 1em .5em;}.MY-edit textarea {padding: .75em;font-size: 16px;line-height: 1.4;letter-spacing: 1px;border-radius: 5px;width: calc(100% - 1.5em);min-height: 60vh;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);border: 1px solid #eee;overflow-y: auto;word-break: break-all;}.MY-dark-theme .MY-bg-progress {background-color: #f7fff7;}.MY-dark-theme .MY-fab-border {color: #f5deb3;}.MY-dark-theme .MY-fab {background: #25272ae6;box-shadow: 0 3px 20px -3px #f5deb3;color: #f5deb3;}.MY-dark-theme .MY-page {background-color: #25272a;box-shadow: 0 0 10px 16px rgb(37,39,42);color: wheat;}.MY-dark-theme .MY-close,.MY-dark-theme .MY-fullscreen {background: rgb(37,39,42);box-shadow: 0 0 8px 4px rgb(53,59,63);color: wheat;}.MY-dark-theme .MY-player-box {box-shadow: 9px 9px 16px rgb(53,59,63);}.MY-dark-theme .MY-buttons {background: #253237;}.MY-dark-theme .MY-status-beat::after {background: #EEEEEE;border-color: #EEEEEE;animation: my-pulse-positive-dark 2.5s ease infinite;}.MY-tiny .MY-detail,.MY-tiny .MY-close,.MY-tiny .MY-tip,.MY-tiny .MY-settings,.MY-tiny .MY-search {display: none !important;}.MY-tiny .MY-panel {padding-top: 0;padding-bottom: 0;}.MY-pip .MY-player:not(:empty) {padding: 0;}.MY-pip .MY-player {position: relative;height: 100%;max-height: 100%;background-color: #01081a;overflow: hidden;z-index: 2147483647;}.MY-pip .MY-player-box {border-radius: 0;box-shadow: none;width: 100%;height: 100%;max-width: 100%;min-height: auto;}.o--vip, .o--jump {display: none !important;visibility: hidden !important;width: 0 !important;height: 0 !important;max-width: 0 !important;max-height: 0 !important;overflow: hidden !important;position: absolute !important;left: -99999px !important;opacity: 0 !important;pointer-events: none !important;}' + KEYFRAMES_STYLES);
    let p = "";
    if (e.vip) {
      const e = [ {
        key: "pip",
        text: (isMobile ? "本" : "原网") + "页解析"
      } ];
      isMobile || e.push({
        key: "skipAd",
        text: "加速跳广告"
      }, {
        key: "hideWatermark",
        text: "去视频水印"
      }), isAllowSniff && e.unshift({
        key: "autoJiexi",
        text: "自动解析"
      }), p = '<div class="MY-settings">' + e.map((function(e) {
        return '<span class="MY-item' + (settings[e.key] ? " is-active" : "") + '" key="' + e.key + '">' + e.text + "</span>";
      })).join("") + "</div>";
    }
    $("html").append('<miying class="MY' + (isDarkMode ? " MY-dark-theme" : "") + (hasTinyMode && isTinyMode ? " MY-tiny" : "") + '"><div class="MY-fab"><span class="MY-fab-tip">可拖拽</span><span class="MY-fab-border">' + Icon.encircle + '</span><span class="MY-mi">' + Icon.mi + '</span><span class="MY-ying">' + Icon.ying + '</span></div><div class="MY-main"><div class="MY-page MY-scrollbar"><div class="MY-detail"><span class="MY-mode-switch"><span class="MY-dark">' + Icon.moon + '</span><span class="MY-light">' + Icon.sun + '</span></span><i></i><span class="MY-version">v20.20.final</span></div><div class="MY-panel"><div class="MY-fullscreen' + (hasTinyMode ? "" : " MY-hide") + '"><span class="MY-icon-shrink">' + Icon.shrink + '</span><span class="MY-icon-expand">' + Icon.expand + '</span></div><div class="MY-close">' + Icon.x + "</div>" + p + '<div class="MY-player"></div><div class="MY-tip' + (Is(isVipSiteRegex) ? "" : " MY-hide") + '"><div>点击<strong>解析</strong>和<strong>搜索</strong>可以自定义' + (isMobile ? "<br>多数解析会在移动端显示<strong>图片广告</strong>，需手动拦截。<br>配合浏览器的<strong>嗅探功能</strong>使用，体验更佳。" : "") + '</div></div><div class="MY-video-urls"></div></div></div></div><div class="MY-edit"><div class="MY-overlay"></div><div class="MY-edit-panel"><div class="MY-edit-close">' + Icon.x + '</div><div class="MY-edit-hint"></div><textarea placeholder="清空会使用默认值"></textarea></div></div><div class="MY-iframes"></div></miying>'), 
    $(".MY-mode-switch").on("click", (function() {
      $(this).toggleClass("is-dark"), $(".MY").toggleClass("MY-dark-theme"), isDarkMode = !isDarkMode, 
      Store.set("isDarkMode", isDarkMode);
    })), $(".MY-settings .MY-item").on("click", (function() {
      $(this).toggleClass("is-active"), updateSettings($(this).attr("key"), $(this).hasClass("is-active"));
    })), $(".MY-edit textarea").off("input").on("input", (function() {
      const e = $(this).attr("key"), t = $(this).get(0).value;
      editData[e] = t, GlobalStore.set(e, t);
    })), $(".MY-edit-close, .MY-edit .MY-overlay").on("click", (function() {
      $(".MY-edit").removeClass("is-active");
    }));
    const f = document.querySelector(".MY-fab");
    let m, u, h = !1, b = !1, g = Date.now();
    f.addEventListener("touchstart", i), f.addEventListener("mousedown", i), window.addEventListener("touchmove", n), 
    window.addEventListener("mousemove", n), window.addEventListener("touchend", a), 
    window.addEventListener("mouseup", a), $(".MY").clickOutside((function() {
      $(".MY").hasClass("is-active") && closeMY();
    })), $(".MY-close").on("click", closeMY), $("body").on("click", closeMY);
    let v = GlobalStore.get("displayVideoShortName", !0);
    setGlobal("MY_clickVideoUrl", (function(e, t, i) {
      return e.preventDefault(), e.stopImmediatePropagation(), $(t).hasClass("is-active") ? (pauseMYPlay(), 
      isHiker && window.fy_bridge_app.playVideo ? window.fy_bridge_app.playVideo(i) : window.open(i, "_blank")) : ($(".MY-vip-list .MY-button.is-pip").removeClass("is-active"), 
      void playVideo(i));
    })), setGlobal("MY_clickPlaylistLabel", (function(e) {
      e.preventDefault(), e.stopImmediatePropagation(), v = !v, SetState({
        DisplayVideoShortName: v
      }), GlobalStore.set("displayVideoShortName", v);
    })), setGlobal("MY_clickNewTabPlay", (function() {
      window.open($(".MY-play-list .MY-button.is-active").attr("_href"), "_blank");
    })), R(H((function(e, t, i, n) {
      SyncState(t, i), n.r = 1;
      const {videoUrls: a, currentVideoUrl: o, DisplayVideoShortName: r = !0} = t;
      return a && 0 < a.length ? H("div", {
        className: "MY-list-box",
        innerHTML: '<div class="MY-play-fail-text"><strong>播放失败！</strong>该线路可能无法在当前页面播放，可以再次点击该线路，在<a onclick="MY_clickNewTabPlay()">新窗口打开</a>播放或下载</div><div class="MY-play-list MY-buttons MY-scrollbar' + (r ? " is-short" : "") + '"><span class="MY-label" onclick="MY_clickPlaylistLabel(event)">线路</span>' + a.map((function(e, t) {
          return '<span class="MY-button is-' + getVideoType(e) + (o === e ? " is-active" : "") + '" _href="' + e + '" onclick="MY_clickVideoUrl(event, this, \\'' + e + "')\\">" + getVideoShortName(e, t, r) + "</span>";
        })).join("") + '<span class="MY-padding"></span></div>'
      }) : "";
    })), document.querySelector(".MY-video-urls"));
    let y = 0, M = isMobile ? 200 : 250;
    const x = throttle((function() {
      const e = window.pageYOffset || document.documentElement.scrollTop;
      let t = "";
      e < M || (t = e > y ? "down" : "up"), y = 0 >= e ? 0 : e, $(".MY").attr("data-scroll", t);
    }));
    setTimeout((function() {
      window.addEventListener("scroll", x, {
        passive: !0
      });
    }), 2e3), $(".MY").addClass((isMobile ? "MY-m" : "MY-pc") + (_D ? " MY-debug" : "")), 
    setTimeout((function() {
      $(".MY").addClass("is-loaded");
    }), 1e3), document.addEventListener("fullscreenchange", (function() {
      document.querySelector(".MY .MY-player") || (document.fullscreenElement ? $(".MY").addClass("MY-hide") : $(".MY").removeClass("MY-hide"));
    }));
  }
  function getUrlName(e) {
    return e.match(/\\/\\/(.+\\.)?([^\\/]+)\\.\\w+\\//)[2].replace(/^(\\w)/, (function(e) {
      return e.toUpperCase();
    })).slice(0, 5);
  }
  function parseToUrls(e) {
    return ensureArray(e).map((function(e) {
      let t = e.split(/\\s+/);
      return e = t.pop(), /^http.+=/.test(e) ? {
        url: e,
        name: 0 < t.length ? t.join(" ") : getUrlName(e)
      } : {};
    })).filter((function(e) {
      return e.url;
    }));
  }
  function fixVipUrl(e) {
    return e.replace(/[\\?#].+/g, "");
  }
  function skipAd(e) {
    let t = !1;
    if ($("video source[src], video[src]").each((function(e) {
      "VIDEO" !== e.tagName && (e = $(e).parent()), e.paused || (t = !0);
    })), !t) return void setTimeout((function() {
      skipAd(e);
    }), 500);
    const i = e.adPlaybackRate || 16, n = setInterval((function() {
      settings.skipAd || clearInterval(n), $("video source[src], video[src]").each((function(e) {
        "VIDEO" !== e.tagName && (e = $(e).parent()), !e || isNaN(e.duration) || 90 < e.duration || e.currentTime > e.duration - 2 || (e.currentTime, 
        e.playbackRate = i, e.paused && e.play());
      })), e.skipAd && e.skipAd();
    }), 100);
  }
  function openEdit(e, t) {
    $(".MY-edit").addClass("is-active");
    const i = $(".MY-edit textarea");
    i.get(0).value = (editData[e] || "").trim(), i.attr("key", e), $(".MY-edit-hint").html(t ? "刷新生效，清空恢复默认，" + t : defaultHint);
  }
  function activeVip(e) {
    if (!document.querySelector(".MY-vip-list")) {
      if (activeMiying(e), !isMobile && settings.skipAd && skipAd(e), settings.hideWatermark && e.vip.watermark && addCss(e.vip.watermark + " {display: none !important;visibility: hidden !important;width: 0 !important;height: 0 !important;max-width: 0 !important;max-height: 0 !important;overflow: hidden !important;position: absolute !important;left: -99999px !important;opacity: 0 !important;pointer-events: none !important;}"), 
      $(".MY-fab").addClass("has-vip"), !isAllowIframeSniff) {
        const e = addIframe(SniffCheckUrl);
        setTimeout((function() {
          removeIframe(e);
        }), 5e3);
      }
      let t = (GlobalStore.get("VipUrls") || "").trim() || V_U;
      vipUrls = t, editData.VipUrls = t, vipUrls = parseToUrls(vipUrls), Arr.chunks(D_V_U.replace(/=\\s.+/g, "=").trim().split(/,|\\n/), 7).forEach((function(e) {
        Arr.shuffle(e).forEach((function(e) {
          const t = _D ? e : M_VipUrl(e);
          sniffVipUrls.push({
            url: t,
            _url: sniffVipUrls.length,
            name: getUrlName(t)
          });
        }));
      })), vipUrls = vipUrls.concat(sniffVipUrls), $(".MY-panel").append('<div class="MY-vip-list MY-buttons MY-scrollbar' + (isAllowSniff ? " is-allow-sniff" : "") + '"><span class="MY-bg-progress"></span><span class="MY-label">解析</span><span class="MY-button MY-vip-sniff"><span class="MY-sniffing-text">停</span>' + Icon.vip + '<i class="MY-bubble MY-b1"></i><i class="MY-bubble MY-b2"></i><i class="MY-bubble MY-b3"></i></span>' + vipUrls.map((function(e) {
        return '<span class="MY-button ' + (e.url.startsWith("https") ? "is-pip" : "is-pop") + '" _href="' + (e._url || e.url) + '">' + e.name + "</span>";
      })).join("\\n") + '<span class="MY-padding"></span></div>'), $(".MY-fullscreen").on("click", (function() {
        $(".MY").toggleClass("MY-tiny"), isTinyMode = !isTinyMode, Store.set("isTinyMode", isTinyMode);
      })), $(".MY-vip-list .MY-button").on("click", (function() {
        const t = $(this).hasClass("is-active");
        if ($(".MY-vip-list .MY-button.is-pip").removeClass("is-active"), $(this).hasClass("MY-vip-sniff")) return $(this).hasClass("is-sniffing") ? sniffDone() : sniff();
        SetState({
          currentVideoUrl: null
        }), playingVideoUrl = null;
        let i = $(this).attr("_href"), n = !1;
        return i.includes("http") || (i = sniffVipUrls[i].url, n = !0), !t || !_D && n ? ($(this).hasClass("is-pop") ? $(".MY-vip-list .MY-button.is-pop").removeClass("is-active") : $(".MY-vip-list .MY-button").removeClass("is-active"), 
        $(this).addClass("is-active"), void playVipUrl(i, e)) : (pauseMYPlay(), $(".MY-player").empty(), 
        window.open(i + getTargetUrl(), "_blank"));
      })), $(".MY-vip-list .MY-label").on("click", (function() {
        openEdit("VipUrls", "原网页解析只支持 https 解析");
      }));
    }
  }
  function insertSearch(e, t) {
    if (!e || document.querySelector(".MY-search")) return;
    activeMiying(t);
    let i = (GlobalStore.get("SearchUrls") || "").trim() || SEARCH_URLS;
    editData.SearchUrls = i, IsNot(/douban\\.com/) && (i = "觅影  https://movie.douban.com/tag/\\n\\n" + i), 
    i = ensureArray(i).map((function(e) {
      const {url: t, name: i} = parseUrl(e), n = Is(isAnimeSiteRegex, t), a = Is(isVipSiteRegex, t);
      return {
        url: t,
        name: i,
        weight: /douban.com/.test(t) ? 10 : (Is(/bilibili.com/) || Is(isAnimeSiteRegex)) && n ? 5 : (Is(isVipSiteRegex) || Is(/douban.com/)) && a ? 3 : n ? 1 : a ? 0 : 2
      };
    })), i.sort((function(e, t) {
      return t.weight - e.weight;
    })), $(".MY-panel").append('<div class="MY-search MY-buttons MY-scrollbar"><span class="MY-label">搜索</span>' + function() {
      const e = Href.match(/\\/\\/.*?(\\w+)\\.\\w+\\//)[1];
      return i.map((function(t) {
        const i = isVipSiteRegex.test(t.url) ? "is-vip" : isAnimeSiteRegex.test(t.url) ? "is-anime" : "", n = t.url.match(/\\/\\/.*?(\\w+)\\.\\w+\\//)[1];
        return t.url.includes(e) || Href.includes(n) ? '<span class="MY-status-beat"></span>' : '<span class="MY-button ' + i + '" ' + (_D ? 'data-weight="' + t.weight + '" ' : "") + '_href="' + t.url + '">' + t.name + "</span>";
      })).join("\\n");
    }() + '<span class="MY-padding"></span></div>'), $(".MY-detail").append('<i></i><span class="MY-title">' + e + "</span>"), 
    $(".MY-search .MY-button").on("click", (function() {
      let t = $(this).attr("_href").replace("**", e);
      window.open(t, "_blank");
    })), $(".MY-search .MY-label").on("click", (function() {
      openEdit("SearchUrls", "** 表示搜索词");
    })), $("title").html(e);
  }
  function activeSearch(e) {
    let t = getKeywordFromUrl(e.search);
    const i = e.search;
    $$((function() {
      if (!t) if ("string" == typeof i) $(i).each((function(e) {
        t = $(e).text() || t;
      })); else if (i instanceof Function) t = i(); else {
        const e = document.querySelector("h1.title") || document.querySelector("h1");
        e && (t = e.textContent);
      }
      return t = purifyKeyword(t), t;
    }), (function() {
      insertSearch(t, e);
    }));
  }
  function fixM3u8Playing() {
    function e(e) {
      e.from = Href, e.origin = Href, e.url = n, isNotTop && window.parent.postMessage(Object.assign({}, e, {
        _id: MESSAGE_ID,
        action: "MY:log",
        parent: !0
      }), "*");
    }
    const t = Date.now();
    let i, n;
    const a = setInterval((function() {
      const o = Date.now() - t;
      n = "", i = document.querySelector("video source[src], video[src]"), i && (n = i.src), 
      "VIDEO" !== i.tagName && (i = $(i).parent()), /(\\.m3u8|\\/m3u8play)[^\\/]*$/.test(n) ? (clearInterval(a), 
      setTimeout((async function() {
        if (0 === i.readyState) {
          let t = getGlobal("Hls");
          if (t || (await addJs("/hls.js/0.13.2/hls.min.js"), t = getGlobal("Hls")), t.isSupported()) {
            i.pause();
            const a = new t;
            a.loadSource(n), a.attachMedia(i), a.on(t.Events.MANIFEST_PARSED, (function() {
              i.play();
            })), e({
              text: "✔ Fix m3u8 play"
            });
          }
        }
      }), 1500)) : o >= 15e3 && (clearInterval(a), e({
        text: "× Fix m3u8 play failed"
      }));
    }), 100);
  }
  function isValidVideoUrl(e) {
    return isVideoUrlRegex.test(e) && !isInvalidSniffUrlRegex.test(e);
  }
  function getSniffVideoUrl(e) {
    if (e = decodeURIComponent(e.trim()).replace(/^(http:)?\\/\\//, "https://"), !sniffVideoUrls.includes(e)) if (sniffVideoUrls.push(e), 
    isNotTop || /^blob:/.test(e)) window.parent.postMessage({
      url: e.trim(),
      pageInfo: pageInfo,
      _id: MESSAGE_ID,
      action: "MY:sniff.video",
      from: Href,
      origin: Href,
      parent: isNotTop,
      dplayer: document.querySelectorAll(".dplayer").length
    }, "*"); else {
      if (isSniffing && !document.querySelector(".MY-play-list .MY-button.is-active, .MY-vip-list .MY-button.is-pip.is-active")) {
        $(".MY-vip-list .MY-button.is-pip").removeClass("is-active"), playVideo(e);
        let t, i = 0, n = 0;
        setTimeout((function e() {
          if (t = document.querySelector(".MY-play-list .MY-button.is-active + .MY-button"), 
          (!(0 < n) || t) && document.querySelector(".MY-play-list .MY-button.is-active")) {
            if ($(".MY-play-list .MY-button.is-active").each((function() {
              $(this).attr("_href") !== playingVideoUrl && $(this).removeClass("is-active");
            })), playFailedUrl !== playingVideoUrl && player && player.ready) {
              if (isMobile && 0 < player.duration || player.currentTime > (isMobile ? 3 : 10)) return;
              if (!isSniffing && !t || 0 < player.currentTime && i !== player.currentTime) return i = player.currentTime, 
              void setTimeout(e, 3e3);
            }
            i = 0, t ? t.click() : 1 < videoUrls.length && (t = document.querySelector(".MY-play-list .MY-button"), 
            t && t.click(), n++), setTimeout(e, 4500);
          }
        }), 4e3);
      }
      videoUrls.push(e), SetState({
        videoUrls: videoUrls
      });
    }
  }
  function muteSniffVideo(e) {
    e && "VIDEO" !== e.tagName && (e = $(e).parent()), e && (/^blob:/.test(e.src) && (e.__src = e.src, 
    e.src = ""), e.muted = !0, e.volume = 0, e.autoplay = !1, e.preload = "none", e.pause && e.pause(), 
    e.play = function() {});
  }
  function sniffVideo() {
    let e;
    isSniffIframe ? (e = localStorage.getItem("dplayer-volume"), localStorage.setItem("dplayer-volume", 0), 
    localStorage.setItem("MY.dplayer-volume", e), $("video source[src], video[src]").each((function(e) {
      muteSniffVideo(e);
    }))) : (e = +localStorage.getItem("MY.dplayer-volume"), localStorage.removeItem("MY.dplayer-volume"), 
    0 < e ? localStorage.setItem("dplayer-volume", e) : localStorage.removeItem("dplayer-volume"));
    const t = setInterval((function() {
      $("video source[src], video[src]").each((function(e) {
        isSniffIframe && muteSniffVideo(e);
        let i = e.__src || e.src;
        if (i) {
          "VIDEO" !== e.tagName && (e = $(e).parent()), /^\\/[^\\/]/.test(i) && (i = location.origin + i);
          const n = /^blob:/.test(i);
          if (isSniffIframe) e.src = "", clearInterval(t), $("video, iframe").remove(), $("body").html(""); else if (n && (isNaN(e.duration) || 180 > e.duration)) return;
          n || isValidVideoUrl(i) ? getSniffVideoUrl(i) : window.parent.postMessage({
            pageInfo: pageInfo,
            text: "NOT MATCH VIDEO URL",
            _id: MESSAGE_ID,
            action: "MY:log",
            from: location.href,
            origin: location.href,
            url: i,
            parent: !0
          }, "*");
        }
      }));
      const e = document.querySelector("iframe[src]");
      if (e) {
        const t = e.scr, i = decodeURIComponent(t).match(/=(http[^&=]+\\.(m3u8|mp4))/);
        (/dplayer/.test(t) || isVideoUrlRegex.test(t)) && window.parent.postMessage({
          pageInfo: pageInfo,
          text: "iframe player url",
          _id: MESSAGE_ID,
          action: "MY:log",
          from: location.href,
          origin: location.href,
          url: i ? i[1] : t,
          isMatch: i && isValidVideoUrl(i[1]),
          parent: !0
        }, "*"), i && isValidVideoUrl(i[1]) && ($("iframe").remove(), getSniffVideoUrl(i[1]));
      }
    }), 100);
  }
  function getVideoInfo(e) {
    return {
      src: e.src,
      duration: e.duration,
      paused: e.paused,
      currentTime: e.currentTime,
      playbackRate: e.playbackRate
    };
  }
  function urlDetect() {
    setInterval((function() {
      !function() {
        if (Href !== window.location.href) {
          const e = Href;
          Href = window.location.href, E.emit("url.change", {
            newUrl: Href,
            oldUrl: e
          });
        }
      }();
    }), 250);
  }
  function RULES_GO() {
    let e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : RULES;
    for (const t of e) if (Is(t.match)) {
      if (!1 === t.enable) break;
      let e = "";
      if (t.hide && (e += "\\n" + t.hide + " {display: none !important;visibility: hidden !important;width: 0 !important;height: 0 !important;max-width: 0 !important;max-height: 0 !important;overflow: hidden !important;position: absolute !important;left: -99999px !important;opacity: 0 !important;pointer-events: none !important;}"), 
      t.css && (e += t.css), addCss(e), t._js instanceof Function && t._js(), t.js instanceof Function && $((function() {
        t.js();
      })), t.rules && RULES_GO(t.rules, !1), t.result) {
        const e = "string" == typeof t.result ? {
          title: t.result,
          url: t.result
        } : t.result;
        if (1 === $(e.title).length) {
          const t = $(e.title).text();
          if (!/第.{1,3}[季集话部].*$/.test(t)) {
            const t = $(e.url).eq(0).attr("href");
            t && (location.href = t);
          }
        }
      }
      $((function() {
        t.vip && activeVip(t), t.search && activeSearch(t), isUrlDetect || (isUrlDetect = !0, 
        urlDetect());
      }));
    }
  }
  const VERSION = "20.20.final", NAME = "觅影";
  if (document.querySelector("miying")) return;
  const _D = !1, hasUnsafeWindow = "undefined" != typeof unsafeWindow, isGM = "undefined" != typeof GM && hasUnsafeWindow, isTop = window.top === window.self, isNotTop = !isTop, screenWidth = window.screen.width;
  let Href = location.href;
  const isMobile = 600 >= screenWidth || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || !1, MAX_Z_INDEX = 2147483647;
  if (isTop && Is(/vwecam.tc.qq.com|\\.titan.mgtv.com/) && !document.querySelector("video")) return void (IsNot(/miying/) && (location.href = Href + (Href.includes("?") ? "&" : "?") + "miying=" + (new Date).getFullYear()));
  const RULES = [ {
    name: "豆瓣",
    match: "movie.douban.com",
    rules: [ {
      name: "详情",
      match: "/subject/",
      search: "title"
    } ]
  }, {
    name: "豆瓣·移动端",
    match: "m.douban.com",
    rules: [ {
      name: "详情",
      match: "/movie/subject/",
      search: ".sub-title"
    } ],
    hide: ".score-write, a[href*='to_app']:not(.sub-honor):not(.sub-cover), a[href*='doubanapp'], div[id*='BAIDU'], div[id*='google'], section + .center, .bottom_ad_download, .sub-vendor, .to_pc, .sub-detail .mark-movie, .sub-detail .mark-tv, .subject-banner, .bottom_ad_download, .cover-count, #google_esf, .adsbygoogle, .Advertisement, .TalionNav-primary .nav-btns.cancel",
    css: ".page .subject-header-wrap .sub-honor {font-size: 12px;}.page .subject-header-wrap .sub-honor .info-rank {padding: 0 5px;min-width: auto;}.page .subject-header-wrap .sub-honor .info-scope {padding: 0 5px;min-width: auto;}.subject-intro {margin-top: 15px;}"
  }, {
    name: "哔哩哔哩",
    match: ".bilibili.com",
    rules: [ {
      name: "搜索",
      match: /\\/search|search\\./,
      search: !0
    }, {
      name: "播放",
      match: /\\/bangumi\\/play\\//,
      search: ".media-title, .ep-info-title"
    } ],
    hide: ".index__openAppBtn__src-commonComponent-topArea-, .index__container__src-commonComponent-bottomOpenApp-, .bili-app, .recom-wrapper, .b-footer, .open-app-bar, .open-app-float, .more-review-wrapper, #bannerAd, .banner-card, #slide_ad"
  }, {
    name: "腾讯视频",
    match: "v.qq.com",
    rules: [ {
      name: "搜索",
      match: "/search",
      search: !0
    }, {
      name: "播放",
      match: /\\/cover\\/|\\/play/,
      vip: {
        watermark: ".txp-watermark",
        fixUrl(e) {
          if (e.includes("cid=")) {
            const t = e.match(/cid=(\\w+)/)[1];
            let i = e.match(/vid=(\\w+)/);
            return i = i ? "/" + i[1] : "", "https://v.qq.com/x/cover/" + t + i + ".html";
          }
          return e.includes("/x/cover") ? e.replace(/\\.html.*/, ".html") : e;
        }
      },
      search: ".mod_video_info .video_title, ._main_title, .player_title",
      skipAd() {
        $('txpdiv[data-role="hd-ad-adapter-adlayer"] video[src]').each((function(e) {
          e.muted = !0;
        }));
      }
    } ],
    hide: '.mod_source, .video_function, .mod_promotion, #vip_privilege, #vip_activity, .U_bg_b, .btn_open_v, .btn_openapp, #vip_header, .btn_user_hd, .mod_sideslip_privileges, .mod_game_rec, .mod_source, .mod_promotion, .mod_sideslip_h, .btn_open, .btn_pay, .mod_box_lastview, .mod_vip_popup, .mod_vip_popup + .mask_layer, txpdiv[data-role="hd-ad-adapter-interactivelayer"], .mod_ad, .tvp_app_bar, .mod_recommend',
    css: "\\nbody, #vip_title {padding-bottom: 0 !important;}.mod_episodes_numbers.is-vip .item {width: auto;padding: 0 1em;}.U_html_bg .container {padding-bottom: 30px;}.mod_play .mod_player_viptips .btn_try {left: 30%;}.mod_box .mod_video_info {margin-top: 1em;}"
  }, {
    name: "爱奇艺",
    match: ".iqiyi.com",
    rules: [ {
      name: "搜索",
      match: /\\/search|so\\.iqiyi/,
      search: !0
    }, {
      name: "播放",
      match: "/v_",
      vip: {
        watermark: ".iqp-logo-box",
        fixUrl: e => e.replace(/\\.html.*/, ".html").replace("tw.", "www.")
      },
      search: "#widget-videotitle, .video-title, .c-title-link, .player-title a, .tw-play-title .drama-name, .tw-play-title",
      skipAd() {
        $("video[src]").each((function(e) {
          91 > e.duration && $(".skippable-after").click();
        }));
      }
    } ],
    hide: '.m-iqyDown, .header-login + div, .m-video-action, div[name="m-vipRights"], div[name="m-extendBar"], .m-iqylink-diversion, .m-iqylink-guide, .c-openVip, .c-score-btn, .m-videoUser-spacing, .m-pp-entrance, .m-hotWords-bottom, div[template-type="ALBUM"] .m-player-tip, .iqp-box-integral, .btn-ticket, .btn-yuyue, .btn-download, .m-iqyDown, .iqp-player div[adid], .detail-sd, .scroll-anchor > *:not(:last-child), #iProgress ~ div[style]'
  }, {
    name: "优酷",
    match: "youku.com",
    rules: [ {
      name: "搜索",
      match: "/search_video",
      vip: !0,
      search: !0
    }, {
      name: "播放",
      match: /\\/v_|\\/video\\/|alipay_video\\/id_/,
      vip: {
        fixUrl: !0,
        watermark: ".youku-layer-wuliao"
      },
      search: ".player-title .subtitle a, .module-name h1, .anthology-title-wrap .title, .title-link",
      skipAd() {
        document.querySelector(".h5-ext-layer video[src]") && ($(".h5-ext-layer").empty(), 
        !$(".h5player-dashboard .control-play-icon").hasClass("control-pause-icon") && $(".h5player-dashboard .control-play-icon").click(), 
        $(".information-tips").css("display", "none"));
      },
      js() {
        isMobile || $$(".quality-dashboard .youku_vip_pay_btn, .quality-dashboard .login-canuse", (function() {
          $(".quality-dashboard .youku_vip_pay_btn, .quality-dashboard .login-canuse").removeClass("youku_vip_pay_btn disable login-canuse"), 
          $(".quality-item").on("click", (function() {
            setTimeout((function() {
              $(".h5player-dashboard .control-play-icon").hasClass("control-pause-icon") || $(".h5player-dashboard .control-play-icon").click();
            }), 1500);
          }));
        }));
      }
    } ],
    hide: '.h5-detail-guide, .h5-detail-ad, .brief-btm, .smartBannerBtn, .cmt-user-action, #right-title-ad-banner, .Corner-container, .qr-wrap, .quality-item[class*="p"] .vip-label, .award-pass, .iconshoucang ~ div .modal-position-container, .js-top-icon'
  }, {
    name: "芒果",
    match: ".mgtv.com",
    rules: [ {
      name: "搜索",
      match: "/so",
      search: /k[-=]([^&\\?\\/\\.]+)/
    }, {
      name: "播放",
      match: /\\/[bl]\\//,
      vip: {
        fixUrl: !0
      },
      search: ".v-panel-title, .vt-txt, .m-player-open .control-left .title",
      skipAd() {
        $(".as_icon--unmute").click();
      }
    } ],
    hide: ".ad-banner, .video-area-bar, .video-error .btn, .m-vip-list, .m-vip-list + div:not([class]), .toapp, .video-comment .ft, .mg-app-swip, mango-plugin-ad, mango-control-tip, .MY-player .m-player-error, .MY-player container > *:not(.plyr)"
  }, {
    name: "搜狐",
    match: /(film|tv)\\.sohu\\.com/,
    rules: [ {
      name: "搜索",
      match: /(key|wd)=/,
      search: !0
    }, {
      name: "播放",
      match: /\\/(v|album\\/|phone_play_film|\\d+\\/n\\d+.shtml)/,
      vip: {
        fixUrl(e) {
          if (/phone_play_film.+channeled=/.test(e)) {
            const t = e.match(/channeled=(\\w+)/)[1];
            return "https://film.sohu.com/album/" + e.match(/aid=(\\w+)/)[1] + ".html?channeled=" + t;
          }
          return e;
        }
      },
      search: "#vinfobox h2, .t-info, .movie-t h3",
      skipAd() {
        $(".x-video-adv video").each((function(e) {
          e.muted = !0;
        }));
      }
    } ],
    hide: ".actv-banner, .btn-xz-app, .twinfo_iconwrap, .btn-comment-app, #ad_banner, .advertise, .main-ad-view-box, .foot.sohu-swiper, .app-star-vbox, .app-guess-vbox, .main-rec-view-box, .app-qianfan-box, .comment-empty-bg, .copyinfo, .ph-vbox, .btn_m_action, .btn-xz-app, #film_top_banner, .btn-comment-app, .adv, .x-adv-pause-nonlinear-panel"
  }, {
    name: "乐视",
    match: ".le.com",
    rules: [ {
      name: "搜索",
      match: /\\/search|so.le.com\\/s/,
      search: !0
    }, {
      name: "播放",
      match: /\\/(ptv\\/vplay\\/|vplay_)/,
      vip: {
        fixUrl: !0
      },
      search: ".briefIntro_info .info_tit, #j-introduction h2",
      adPlaybackRate: 4,
      skipAd() {
        const e = document.querySelector("#video video");
        e && 90 >= e.duration ? e.muted = !0 : !window.__skipAd && (e.muted = !1, window.__skipAd = !0);
      }
    } ],
    hide: ".gamePromotion, .gamePromotionTxt, #j-leappMore, .lbzDaoliu, .arkBox"
  }, {
    name: "咪咕",
    match: "miguvideo.com",
    rules: [ {
      name: "搜索",
      match: "search.html",
      search: /keywords=([^&\\?\\/\\.]+)|\\?.*#([^&\\?\\/\\.]+)/
    }, {
      name: "播放",
      match: "detail.html",
      vip: !0,
      search: ".left-box .title, .episodeTitle, .video_title"
    } ],
    hide: '.group-item[name*="广告"], .openClient'
  }, {
    name: "PPTV",
    match: ".pptv.com",
    rules: [ {
      name: "搜索",
      match: /sou.+(kw|keyword)=/,
      search: !0
    }, {
      name: "播放",
      match: "/show/",
      vip: {
        fixUrl: !0
      },
      search: "#video-info h1, .vod-tit-in span, .tit"
    } ],
    hide: '.w-video-vastad, #video-download-game, div[class*="openapp"], div[class*="side-adv"], div[id*="afp_"], div[id*="-afp"], iframe[src*="/game/"], .afpPosition, .download-iconbar'
  }, {
    name: "华数",
    match: "wasu.cn",
    rules: [ {
      name: "搜索",
      match: /Search\\/.+k=/,
      search: !0
    }, {
      name: "播放",
      match: /[pP]lay\\/show\\//,
      vip: {
        fixUrl: !0
      },
      search: ".movie_title h2"
    } ],
    hide: 'div[id*="BAIDU"], .player_menu_con, body > div[style*="fixed"]'
  }, {
    name: "1905",
    match: "1905.com",
    rules: [ {
      name: "搜索",
      match: /\\/search/i,
      search: !0
    }, {
      name: "播放",
      match: "/v_",
      vip: {
        fixUrl: !0
      },
      search: "#movie_info .infoInner .title, .movie-title, .tv_title"
    } ],
    hide: "#app_store, .openMembershipBtn, body > div[id]:not([class]) > iframe, .pv2-advertisement, .open-app"
  }, {
    name: "1080影视",
    match: "k1080.net",
    rules: [ {
      name: "搜索",
      match: "wd=",
      search: !0,
      result: ".detail .btn-warm"
    }, {
      name: "详情",
      match: "/voddetail/",
      search: !0
    }, {
      name: "播放",
      match: "/vodplay",
      search: ".myui-player__data h3 a, .col-pd > .myui-panel__head h3"
    } ],
    hide: "body > *:not(script) + script ~ *[id]"
  }, {
    name: "1090影视",
    match: /1090ys\\d?.com/,
    rules: [ {
      name: "搜索",
      match: "c=search",
      search() {
        const e = location.href.match(/wd=([^-&]+)/);
        return e ? e[1] : document.querySelector(".more + .title").textContent;
      },
      result: "h3.title a"
    }, {
      name: "详情",
      match: "/show/",
      search: ".stui-content__detail h3.title"
    }, {
      name: "播放",
      match: "/play",
      search() {
        const e = document.querySelector("h4 font");
        return e && e.textContent.replace(/-.+/, "");
      }
    } ],
    hide: ".container ~ *[id], body > .container > p[style], .row > p[style]"
  }, {
    name: "完美看看",
    match: "wanmeikk.me",
    rules: [ {
      name: "搜索",
      match: "/so/",
      search: !0,
      result: "h3.title a"
    }, {
      name: "详情",
      match: "/project",
      search: () => document.querySelector("h1.title").childNodes[0].nodeValue
    }, {
      name: "播放",
      match: "/play",
      search: "h1 a"
    } ],
    hide: ".container ~ *[id]"
  }, {
    name: "在线之家",
    match: "zxzj.me",
    rules: [ {
      name: "搜索",
      match: "wd=",
      search: !0,
      result: ".stui-vodlist .title a"
    }, {
      name: "详情",
      match: "/detail",
      search: !0
    }, {
      name: "播放",
      match: "/video",
      search: "h1"
    } ],
    hide: 'body > div[class^="AD"], body > *:not(script) + script ~ *[id]'
  }, {
    name: "91美剧",
    match: "91mjw.com",
    rules: [ {
      name: "搜索",
      match: "s=",
      search: /s=(.+)/,
      result: {
        title: ".m-movies .u-movie h2",
        url: ".m-movies .u-movie a"
      }
    }, {
      name: "详情",
      match: "/video",
      search: () => document.querySelector(".article-title a").textContent.match(/《(.+?)》/)[1]
    }, {
      name: "播放",
      match: "/vplay",
      search: ".vtitle a"
    } ],
    hide: "body > *:not(script) + script ~ *[id], div:not([id]) > iframe, a > iframe, .ads"
  }, {
    name: "神马",
    match: "shenma4480.com",
    rules: [ {
      name: "搜索",
      match: "/search",
      search: !0,
      result: ".stui-vodlist__title a"
    }, {
      name: "详情",
      match: "/detail",
      search: !0
    }, {
      name: "播放",
      match: "/play",
      search: "h1 a"
    } ]
  }, {
    name: "TVB",
    match: "hktvyb.com",
    rules: [ {
      name: "搜索",
      match: "/search",
      search: !0,
      result: ".searchkey"
    }, {
      name: "播放",
      match: "/vod/play",
      search: "h3 a"
    } ],
    hide: "body > iframe, body > div[style]:not([class]), body > div[id]:not([class]), .myui-panel ~ div[id], .nav-menu > .hidden-md, script + a[id], a[id] + div[style]:not([class])"
  }, {
    name: "飞极速",
    match: "feijisu8.com",
    rules: [ {
      name: "搜索",
      match: "/search",
      search: !0,
      result: "#result h2 a"
    }, {
      name: "播放",
      match: /acg\\/\\d+\\/\\d+/,
      search: "h1 a"
    } ],
    hide: ".index-top ~ div, .v-top ~ div, .footer ~ div, .footer ~ brde, body > div:not([class])"
  }, {
    name: "东方城动漫",
    match: "dfcdm.com",
    rules: [ {
      name: "搜索",
      match: "/search",
      search: () => document.querySelector("#key_result").textContent.match(/.*?"(.+)".*/)[1]
    }, {
      name: "详情+播放",
      match: "/tv/",
      search: () => location.href.includes(".html") ? Array.from(document.querySelectorAll(".h2 a")).slice(-1)[0].textContent : document.querySelector(".name").childNodes[0].nodeValue
    } ]
  }, {
    name: "真不卡",
    match: "zhenbuka.com",
    rules: [ {
      name: "搜索",
      match: "/vodsearch",
      search() {
        const e = location.href.match(/wd\\/([^\\/]+)/);
        return e ? e[1] : document.querySelector("h3").textContent;
      },
      result: ".stui-vodlist__media h3.title a"
    }, {
      name: "详情",
      match: "/voddetail/",
      search: !0
    }, {
      name: "播放",
      match: "/vodplay",
      search: ".detail h1",
      hide: "body > div[id]:not([class]), .stui-player__item ~ div[style]"
    } ],
    hide: ".container > a, body > div[style]"
  }, {
    name: "碟影",
    match: /dvdhd.me|952780.com/,
    rules: [ {
      name: "搜索",
      match: "/search",
      search: !0,
      result: {
        title: ".m-movies .u-movie h2",
        url: ".m-movies .u-movie a"
      }
    }, {
      name: "播放",
      match: "/video",
      search: ".vtitle a",
      hide: 'body > brde, body > div[id]:not([class]), body > a, .header ~ div[class*="ad"], .widget_ads'
    } ]
  }, {
    name: "ZzzFun",
    match: /www.zzzfun.com/,
    rules: [ {
      name: "搜索",
      match: "/vod-search",
      search: !0,
      result: ".show-list h2 a"
    }, {
      name: "详情",
      match: "/vod-detail",
      search: !0
    }, {
      name: "播放",
      match: "/vod-play",
      search() {
        const e = document.querySelector(".bread-crumb-nav, .leo-bg-a h1");
        return e ? e.textContent.replace(/.*当前播放：(.+?) -.*/, "$1") : "";
      }
    } ],
    hide: "#navbar + div[style]",
    js() {
      $("input[onclick]").each((function() {
        this.value.includes("继续访问") && this.click();
      }));
    }
  }, {
    name: "迅播",
    match: "xbdm.org",
    rules: [ {
      name: "搜索",
      match: "/search",
      search: !0
    }, {
      name: "播放",
      match: "/video",
      search: ".myui-panel__head h3 a"
    } ],
    hide: "body > div"
  }, {
    name: "哔咪哔咪",
    match: "bimibimi.me",
    rules: [ {
      name: "搜索",
      match: "/search",
      search() {
        const e = location.href.match(/wd\\/([^\\/]+)/);
        return e ? e[1] : document.querySelector(".p_tab strong, .leo-search-wd").textContent;
      },
      result: {
        title: ".info a, .leo-detail-media h1",
        url: ".info a, .leo-detail-media .leo-po-ab a"
      }
    }, {
      name: "详情",
      match: "/bi/",
      search: "h1"
    }, {
      name: "播放",
      match: "/play/",
      search: ".v_path .current, header a + font, h1.leo-fs-l"
    } ],
    hide: "body > div[id]:not([class]), body > div[style]:not([class]), .tuiguang, body > .leo-container ~ [id], .ssr1, .ssr1 + div:not([class]), ins[id], section + div[id]",
    css: ".leo-detail-wrap {background-color: #6ea7b8;margin-bottom: 10px;border-radius: 5px;box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);}"
  }, {
    name: "妮可",
    match: /nicotv\\.(me|club)/,
    rules: [ {
      name: "搜索",
      match: "/search",
      search: !0,
      result: "h2 a"
    }, {
      name: "详情",
      match: "/video/detail/",
      search: ".media-body .ff-text"
    }, {
      name: "播放",
      match: "/play/",
      search: () => document.querySelector("title").text.match(/《(.+?)》/)[1]
    } ],
    hide: "body > brde, body > div[id]:not([class]), body > div[style]:not([class]), body > a, .ff-ads, body > div[classname], #ff-totop ~ div[id]"
  }, {
    name: "AGE",
    match: "agefans.tv",
    rules: [ {
      name: "搜索",
      match: "/search",
      search: !0,
      result: ".cell_imform_name"
    }, {
      name: "详情",
      match: "/detail",
      search: ".detail_imform_name"
    }, {
      name: "播放",
      match: /\\/play\\/.+playid=/,
      search: "#detailname a"
    } ],
    hide: "div[style]:not([class]) > a",
    css: "\\ndiv, span {color: inherit;}"
  }, {
    name: "次元",
    match: "cyloli.com",
    rules: [ {
      name: "搜索",
      match: "/vodsearch",
      search() {
        const e = location.href.match(/vodsearch\\/([^-]+)/);
        return e ? e[1] : document.querySelector(".main-head .title b, .re-info b").textContent;
      },
      result: ".search .title"
    }, {
      name: "详情",
      match: /\\/cy\\d+/,
      search: ".drama-tit h3"
    }, {
      name: "播放",
      match: /\\/yv\\d+/,
      search: ".u-title a, .title a"
    } ],
    hide: ".column-rgt #play"
  }, {
    name: "Mikan",
    match: "mikanani.me",
    rules: [ {
      name: "搜索",
      match: "/Search",
      search: !0
    } ]
  }, {
    name: "茶杯狐",
    match: "cupfox.com/search",
    search: !0
  }, {
    match: "m1907.cn",
    hide: "#s-player + .show > div[title], #s-controls + div > div:nth-child(n+5):not(:last-child)",
    _js() {
      let e = 0;
      const t = setInterval((function() {
        (document.querySelector("#s-player + .show") || 30 < e++) && (clearInterval(t), 
        document.querySelector("#s-controls > div img + span").click());
      }), 100);
      window.alert = function() {};
    }
  }, {
    match: "okjx.cc",
    hide: ".WANG-WANG"
  }, {
    name: "北极xs",
    match: /beijixs\\.cn.*url=http/,
    js() {
      if (isMobile && toggleViewport(), document.querySelector("#TextBox1").value) {
        $("#form1").prepend($(".video-js").parent());
        let e = 0;
        const t = setInterval((function() {
          const i = document.querySelector("video");
          if (i && 390 > i.duration) {
            i.pause();
            const e = document.querySelector("#TextBox2").value || "", n = document.querySelector("video");
            n.classList.add("MY-fail"), n.innerHTML = "<div><div>解析失败</div>" + (e ? "<div>" + e + "</div>" : "") + "</div>", 
            clearInterval(t);
          }
          100 < e++ && clearInterval(t);
        }), 100);
      } else {
        let e = Href.split("url=")[1];
        if (e) {
          e = decodeURI(e), document.querySelector("#TextBox1").value = e;
          const t = document.querySelector("#Button1");
          t && (document.querySelector(".video-js").style.display = "none !important", t.click());
        }
        let t = 0;
        const i = setInterval((function() {
          const e = document.querySelector("video");
          e && 360 > e.duration ? e.pause() : e.play(), 100 < t++ && clearInterval(i);
        }), 100);
      }
    },
    css: "\\nbody > form {position: absolute !important;left: 0 !important;right: 0 !important;top: 0 !important;bottom: 0 !important;background: #eee8d3 !important;z-index: " + MAX_Z_INDEX + " !important;}div,input,form {max-width: 100% !important;}form #divcss5 {height: auto;padding: 0 1em;border: none;width: auto;}.MY-fail {height: auto !important;}.MY-fail > div {text-align: center;border-top: 1px solid #495057;border-bottom: 1px solid #495057;padding: 1em;color: #d9480f;font-weight: bold;font-size: 16px;background-color: #fff4e6;}.MY-fail > div > div + div {margin-top: 1em;}" + (isMobile ? '\\nh5 input[type="text"] {width: 90% !important;margin: .5em 0 !important;padding: 0 .5em !important;}.video-js {width: 100% !important;height: 100vh !important;}' : "\\nform #divcss5 {max-width: 570px !important;}")
  } ], PurifyStyle = "display: none !important;visibility: hidden !important;width: 0 !important;height: 0 !important;max-width: 0 !important;max-height: 0 !important;overflow: hidden !important;position: absolute !important;left: -99999px !important;opacity: 0 !important;pointer-events: none !important;", V_U = "\\nhttps://z1.m1907.cn/?jx=\\n北极 http://beijixs.cn/?url=\\n", SEARCH_URLS = "\\n豆瓣  https://search.douban.com/movie/subject_search?search_text=**  https://m.douban.com/search/?type=movie&query=**\\n\\n腾讯  https://m.v.qq.com/search.html?act=0&keyWord=**  https://v.qq.com/x/search/?q=**\\n\\n爱奇艺  https://m.iqiyi.com/search.html?source=default&key=**  https://so.iqiyi.com/so/q_**\\n\\n优酷  https://search.youku.com/search_video?keyword=**  https://so.youku.com/search_video/q_**\\n\\n芒果  https://m.mgtv.com/so?k=**  https://so.mgtv.com/so?k=**\\n\\n1905  https://vip.1905.com/Search?q=**\\n\\n搜狐  https://m.tv.sohu.com/upload/h5/m/mso.html?key=**  https://so.tv.sohu.com/mts?wd=**\\n\\n茶杯狐  https://www.cupfox.com/search?key=**\\n\\n1080  https://www.k1080.net/vodsearch/-------------.html?wd=**\\n\\n1090  https://1090ys.com/?c=search&sort=addtime&order=desc&page=1&wd=**\\n\\n完美  https://www.wanmeikk.me/so/-------------.html?wd=**\\n\\n在线  https://www.zxzj.me/vodsearch/-------------.html?wd=**\\n\\n神马  https://www.shenma4480.com/search/-------------/?wd=**\\n\\n飞极速  http://m.feijisu8.com/search/**  http://feijisu8.com/search/**\\n\\n真不卡  https://www.zhenbuka.com/vodsearch/-------------/?wd=**\\n\\n碟影  https://dvdhd.me/search.php?searchword=**\\n\\n美剧  https://91mjw.com/?s=**\\n\\nTVB  https://www.hktvyb.com/vod/search.html?wd=**\\n\\n哔哩哔哩  https://m.bilibili.com/search?keyword=**  https://search.bilibili.com/all?keyword=**\\n\\n迅播  https://www.xbdm.org/search.php?searchword=**\\n\\nZzzFun  http://www.zzzfun.com/vod-search.html?wd=**\\n\\n妮可  http://www.nicotv.me/video/search/**.html\\n\\nAGE  https://www.agefans.tv/search?page=1&query=**\\n\\n次元  https://cyloli.com/vodsearch/**----------1---/\\n\\n哔咪  http://bimibimi.me/vod/search/wd/**/page/1/\\n\\nMikan  https://mikanani.me/Home/Search?searchstr=**\\n", D_V_U = "ix·xja01augynu·c0w,ijexj·pw6jg·cu,0kix·cc,vjb·52ijexj·t0b,idaaa·c0w-ix·,ix·y0nyjtv·c0w,mmm·xqja0sj·c0w-vjb,ix·ijnp0ix·c0w-vjb·,ix·nr1ki·c0w,mmm·uxf1v·c0w,ix·98a·juk,mmm·h8ix·c0w-ijexj·,b1ay·f097·cu,mmm·baugnijexj·cc-ijexj·,mmm·8o9og·cu-ijexj,abj·ijexj·1a,mmm·b1ayw3n8·cu-ijexj·,abj·927ix·c0w-vjb,66oe·c0w,ix·1ache·we-cc,ix·6l8g·c0w,vjb·wb0s·reu-v,ix·ta0fj1w·cu-vjb,ix·e1mtc·c0w-vjb,mmm·l7l7ynu·c0w-ix-ty·,abj·3ix·t0b-vjb,cqu·yaugin·vjb-k,ix·oool8o·t0b-ix,abj·65352o·t0b-vjb,ix·ta0fj1w·cu-ijexj,ix·99yym·c0w,ijexj·38ok·c0w,v·7cyq·c0w-vjb,abj·tv92o·c0w-ix,abj·sjgnix·c0w,ix·ap33·t0b-vjb,ix·kw58·t0b-ix,mmm·ya0s0n·cc-ijexj-?v,ijexjabj·yj1aus·uet-ijexj,peaacc·c0w-abj·,ix·ta0fj1w·cu-ix", PlayerSelector = "#iframaWrapper, #sohuplayer .x-player, .c-player-video, #wPlayer, #video-box, #playerbox, .td-h5__player, .td-playbox, .iqp-player, .g-play .video-area, #mod_player, #playBox, #j-player, #video, .m-video-player, .site_player", isVipSiteRegex = /(v\\.qq|tv\\.sohu|iqiyi|youku|mgtv|1905|pptv|le)\\.(com|cn)/, isAnimeSiteRegex = /(bilibili|cyloli|nicotv|zzzfun|mikanani|xbdm|agefans|bimibimi)\\.(com|me|org|tv|video)/, Dom = DOM(), R = Dom.R, H = Dom.H, Arr = {
    shuffle(e) {
      for (let t = e.length; 0 < t; ) {
        const i = _Mathfloor(Math.random() * t);
        t--;
        const n = e[t];
        e[t] = e[i], e[i] = n;
      }
      return e;
    },
    chunks: (e, t) => e.reduce((function(e, i, n) {
      const a = _Mathfloor(n / t);
      return e[a] = [].concat(e[a] || [], i), e;
    }), [])
  }, xChar = {
    b: "p",
    p: "b",
    d: "q",
    q: "d",
    i: "j",
    j: "i",
    l: "1",
    1: "l",
    m: "w",
    w: "m",
    n: "u",
    u: "n",
    o: "0",
    0: "o"
  }, PurifyKeywordRegex = /.*《|》.*|[-\\s]*第.{1,3}[季集话部].*|\\s+\\d{2,3}\\s*$/g, CommonSearchKeywordRegex = /(wd|key|keyword|searchword|query|kw|q|searchstr)=([^&\\?\\/\\.-]+)|(search\\/|seacher-|[\\W]q_)([^&\\?\\/\\.-]+)/i, States = [], throttle = function(e) {
    let t, i = null;
    const n = function(n) {
      return function() {
        i = null, e.apply(n, t);
      };
    }, a = function() {
      for (var e = arguments.length, a = Array(e), o = 0; o < e; o++) a[o] = arguments[o];
      t = a, null === i && (i = requestAnimationFrame(n(this)));
    };
    return a.cancel = function() {
      cancelAnimationFrame(i), i = null;
    }, a;
  }, $ = get$(), E = emitter();
  let winW = window.innerWidth || 0;
  for (const e = Date.now(); 3e3 > Date.now() - e && 0 === (winW = window.innerWidth || 0); ) await delay(100);
  const maxSniffIframeWidth = 105, isSniffIframe = 0 < winW && 110 >= winW;
  pageInfo = {
    isSniffIframe: isSniffIframe,
    winW: winW,
    screenWidth: screenWidth
  }, E.on("MY:log", (function() {})), E.on("enable.sniff", (function(e) {
    e.from === SniffCheckUrl && $(".MY-iframes > iframe").each((function(e) {
      e.src === SniffCheckUrl && removeIframe(e);
    })), isAllowIframeSniff || (isAllowIframeSniff = !0, isAllowSniff = !0, GlobalStore.set("isAllowIframeSniff", !0), 
    $(".MY-vip-list").addClass("is-allow-sniff"));
  })), E.on("MY:sniff.video", (function(e) {
    const t = e.from.replace(/=https?:.+/, "=");
    removeIframe(iframes[t], "SNIFF SUCCESS"), e.url.startsWith("blob:") ? $(".MY-vip-list .MY-button[_href]").each((function(e) {
      let i = $(this).attr("_href");
      i && !i.includes("http") && (i = sniffVipUrls[i].url), i === t && ($(e).addClass("is-success"), 
      isSniffing && !isIframePlayCheck && (isIframePlayCheck = !0, setTimeout((function() {
        0 === videoUrls.length && 0 === $(".MY-vip-list .MY-button.is-success.is-active").length && document.querySelector(".MY-vip-list .MY-button.is-success").click();
      }), 11e3)));
    })) : getSniffVideoUrl(e.url);
  }));
  const storePrefix = NAME + ".", Store = {
    get(e) {
      let t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
      return parseStoreData(window.localStorage.getItem(storePrefix + e), t);
    },
    set(e) {
      let t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
      window.localStorage.setItem(storePrefix + e, JSON.stringify(t));
    },
    remove(e) {
      window.localStorage.removeItem(storePrefix + e);
    }
  }, GlobalStore = {
    get(e) {
      let t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
      return isGM ? parseStoreData(GM_getValue(storePrefix + e, t), t) : Store.get(e, t);
    },
    set(e) {
      let t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
      isGM ? GM_setValue(storePrefix + e, JSON.stringify(t)) : Store.set(e, t);
    },
    remove(e) {
      isGM ? GM_deleteValue(e) : Store.remove(e);
    }
  };
  let allowScale = !0;
  const day = new Date, SniffCheckUrl = getCdnImageUrl("fe23000139a023cedc4c"), PPCs = "fe8d0001e71b421af470;fe9d0001a23fa4ba12e6;febc0001f7dca601acaa;fed8000143c1c9977f0a;fedd0001f8dbf113a9e4;ff15000173e7a91b2bdf;ff1800015827bd5a70fc;ff19000149336b0edadc;ff3400021ad5dc99bcba;ff810001019d7b986cd3;ff980000a0bdd0ffac71;ffa00002c7b08703a79c".trim().split(/;|\\n/), PPC = getCdnImageUrl(PPCs[(day.getDay() + day.getHours()) % PPCs.length]), PLCs = "1000000008c00c6f9096f;10003000093941116d81a;dc0e00062b2c5eb493bd;dc0f00054064f8c380f5;dc1000045c075dd30656;dc110005e8b72a1ce583;fe2300013baa4cde2890;fe2f000129d006c2a139;fe34000135a421254486;fe360001ec336a96d0bc;fe3b0000eb53f8449038;fe3c00015043d37d7be5;fe42000218b9f7f5a55b;fe42000218c5f11c2ed9;fe430001043448994846;fe460000b3fae6aa1bb1;fe4d00010cf5c48c9b6b;fe510000f1fb19801e38;fe5f000154a794261138;fe630001b222d8a6eb7e;fe6d000226452faaf640;fe720001f24f9e93046f;fe7a00015706929e1d37;fe7d0002548cfd1152bb;fe8b0001c2706bfe3e77;fe8f00027fdd79dda7fd;fe960001b1ea0aa7e463;fea40002bfaa57d0ede4;fea6000127426b4d3bda;fea70000881c53694724;fea80002b0fd162e79fa;fea900012ca6c49d658e;feaa0002c59ed8a9dedf;fead000117ca9fd25054;feb000014b98fae777af;feb000014e2c84228ef9;feb100014198ca804c96;feb3000155028619db92;feb90000fab0c934c7cc;febc000164174a579b12;fec500013cb3f2492087;fec6000146799db82ddc;fec8000107f04dd9bea1;fece000145c7e8ab38ac;fecf0001f1c37ba62e0a;fed20001d74b7e6ef17c;fedb0000b2fb0630d6ec;fee10000fcf9e0f8a0ea;fee20000cbfe1d94035a;fee20000cbff18b0fa78;fee90001664117078084;fef500022fa8b5e54884;fef900011ed65de1bf72;fefa0000c8f25fbf889b;fefd000255b6928f4a32;ff000001080380c127ab;ff000001576d6d164dd5;ff08000171884e2e46c0;ff080001718cebbe8501;ff080001718eb948b1b4;ff1300010f3da17290d5;ff160001cb3fcc952e68;ff1700009db11e2d3555;ff1c00011675a444a9af;ff2400017249d15b1b83;ff250001a8dc0c4b1e37;ff2600020854079038ec;ff270001ec2048e95669;ff280001b41f37c4f5ac;ff2d0000c217f776cd0f;ff2f0003a17605741222;ff32000120ffbfa379d7;ff33000098bc3e5c764e;ff360000b232c77947c5;ff44000292bbf8164af2;ff55000105c2c5f00b6a;ff5e00017f49a36b2736;ff5e00018310eb5829ca;ff640000e2bd55b26e27;ff650001343066b7a407;ff6a0001f3bb184d6b00;ff7300009d5dbef7f5eb;ff7300009d5fb1c0a7ea;ff77000188c8c124297d;ff8d00018e87f58fcbec;ff940001c74763521d5e;ff960000c1e181a4de0e;ff980000c0a203eb34bb;ff9a0001c79480443798;ffa00001c50ada56505b;ffa40000e75742e72d7c;ffa40000e931066afc47;ffa90000e7d6f9c8319e;ffad0001246ecc8dc1c6;ffba00017bed9148a744;ffca0000bb9fb5e59f1f;ffcc0000de1c18886223;ffcd00017ed0bd476aaf;ffd1000086050c452015;ffd2000090b39567fed5;ffd4000133a992d6feaa;ffd50000a6a3c08f2f65;ffd70000ef199c32dc7b;ffdb0000848a6ac113f5;ffe20001218b3ce6ccff;ffe30000a3fc4e84210c;ffe90000daf1b7bf726d;ffec00017021c028b3fd;fff40000e4f8f277a6bd;fff90001a7d7337447cf".trim().split(/;|\\n/).map((function(e) {
    return e.replace(/\\s.+/g, "");
  }));
  let player, playerBox, playFailedUrl;
  const videoExtRegex = /\\.(mp4|m3u8)/, nums = "①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳";
  let isLoadPlayer = !1, isSniffing = !1, sniffTimestamp = Date.now(), isAllowIframeSniff = GlobalStore.get("isAllowIframeSniff") || !1;
  const isHiker = !!window.fy_bridge_app, isMixia = !!window.mx_browser_obj, isAllowHikerSniff = isHiker && !!window.fy_bridge_app.getNetworkRecords, isAllowMixiaSniff = isMixia && !!window.mx_browser_obj.getweblog;
  let isAllowSniff = isAllowHikerSniff || isAllowMixiaSniff || isAllowIframeSniff, settings = {
    pip: !isMobile || isAllowSniff,
    skipAd: !0,
    hideWatermark: !0,
    autoJiexi: !0
  };
  Object.assign(settings, Store.get("settings", {}));
  let vipUrls = [], isAutoSniffing = !1, sniffIndex = 0;
  const MAX_SNIFF_LIMIT = isMobile ? 6 : 5;
  let isIframePlayCheck = !1;
  const KEYFRAMES_STYLES = "\\n@keyframes my-pulse-positive {0% {box-shadow: 0 0 0 0 #607D8B;}100% {box-shadow: 0 0 0 5px transparent;}}@keyframes my-pulse-positive-dark {0% {box-shadow: 0 0 0 0 #EEEEEE;}100% {box-shadow: 0 0 0 5px transparent;}}@keyframes my-beat {to {transform: scale(1.2);}}@keyframes my-bubble1 {40% {transform: translate(2px,2px) scale(.79);opacity: .8;}to {transform: translate(6px,-4px) scale(.57);opacity: 0;}}@keyframes my-bubble2 {0% {transform: translate(4px,3px);}16% {transform: translate(4px,3px);opacity: 0;}28% {transform: translate(7px);opacity: .8;}60% {transform: translate(11px,-2px);}72% {transform: translate(14px,-3px) scale(.57);opacity: 0;}}@keyframes my-bubble3 {0% {transform: translate(10px,-4px) scale(.71)\\n}16% {transform: translate(10px,-4px) scale(.71);opacity: 0;}28% {transform: translate(10px,-4px) scale(.71);opacity: .5;}72% {transform: translate(14px,-9px) scale(.57);opacity: 0;}}@keyframes my-rotate {\\t100% {\\t\\ttransform: rotate(1turn);\\t}}@keyframes my-zoom-in-up {from {opacity: 0;transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);}60% {opacity: 1;transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);}}@keyframes my-zoom-in-down {from {opacity: 0;transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);}60% {opacity: 1;transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);}}@keyframes my-zoom-out-down {40% {opacity: 1;transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);}to {opacity: 0;transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);}}@keyframes my-bopA {0% {transform: scale(0.9);opacity: .8;}50%,100% {transform: scale(1);opacity: 1;}}@keyframes my-bopB {0% {transform: scale(0.9);opacity: .8;}80%,100% {transform: scale(1) rotateZ(-3deg);opacity: 1;}}@keyframes my-loader-spin {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}";
  let isDarkMode = Store.get("isDarkMode", !1);
  const hasTinyMode = Is(isVipSiteRegex) && !isMobile;
  let isTinyMode = Store.get("isTinyMode", !1), sniffVipUrls = [];
  const editData = {}, defaultHint = "刷新生效，清空恢复默认", Icon = {
    vip: '<svg fill="currentColor" viewBox="0 0 18 18"><path d="M17.731,6.27l-2.771-4.464c-0.332-0.534-0.906-0.852-1.538-0.852h-2.364c-0.553,0-1,0.448-1,1s0.447,1,1,1h2.261l2.628,4.232l-6.955,7.58L2.053,7.187l2.628-4.233h2.33c0.552,0,1-0.448,1-1s-0.448-1-1-1H4.577c-0.623,0-1.212,0.327-1.537,0.853L0.267,6.272c-0.416,0.671-0.346,1.521,0.189,2.133l7.475,8.167c0.275,0.313,0.663,0.475,1.056,0.475c0.324,0,0.651-0.11,0.92-0.336l7.648-8.321C18.077,7.794,18.148,6.943,17.731,6.27z"></path><path d="M4.517,6.167C4.108,6.538,4.078,7.171,4.45,7.58l3.81,4.19c0.189,0.208,0.458,0.327,0.739,0.327c0,0,0,0,0,0c0.281,0,0.55-0.118,0.739-0.327l3.81-4.184c0.372-0.409,0.343-1.041-0.066-1.413c-0.407-0.372-1.039-0.342-1.412,0.066L9,9.612L5.929,6.234C5.558,5.826,4.926,5.796,4.517,6.167z"></path></svg>',
    x: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',
    encircle: '<svg viewBox="-65 -65 130 130"><defs><filter id="MY-blur"><feGaussianBlur stdDeviation="3"></feGaussianBlur></filter></defs><g fill="currentColor"><g class="MY-rotate"><g fill="currentColor" stroke="none"><path filter="url(#MY-blur)" opacity="0.5" d="M 0 40 a 35 35 0 0 1 0 -70 10 10 0 0 0 0 -20 45 45 0 0 0 0 90"></path><path d="M 0 40 a 39 39 0 0 1 0 -78 2 2 0 0 0 0 -4 41 41 0 0 0 0 82"></path></g></g></g></svg>',
    mi: '<svg fill="currentColor" viewBox="0, 0, 400,400"><path d="M154.254 14.333 C 153.940 14.883,152.922 17.733,151.990 20.667 C 151.059 23.600,148.034 30.530,145.268 36.066 C 140.349 45.912,133.801 64.912,134.936 66.047 C 135.250 66.361,140.216 62.415,145.970 57.276 C 151.724 52.138,160.535 44.805,165.549 40.981 C 176.057 32.967,176.095 32.845,170.333 25.572 C 163.893 17.443,155.733 11.739,154.254 14.333 M211.355 47.667 C 205.748 77.222,195.547 93.580,160.121 129.823 C 137.251 153.221,128.493 160.099,117.303 163.451 C 102.523 167.878,99.483 173.870,103.832 190.000 C 106.461 199.754,105.602 208.492,100.522 223.647 C 93.357 245.026,95.481 256.562,109.268 271.140 L 116.019 278.278 113.958 284.139 C 110.224 294.755,105.849 299.682,92.626 308.163 C 85.682 312.616,80.001 316.352,80.001 316.464 C 80.010 317.988,87.974 345.752,88.575 346.353 C 91.518 349.296,117.453 317.470,131.482 293.700 C 136.379 285.403,144.565 273.076,149.674 266.307 L 158.964 254.000 158.082 262.000 C 157.598 266.400,155.652 279.280,153.758 290.623 C 149.081 318.642,153.727 338.115,167.194 346.943 C 169.649 348.553,172.335 351.740,173.162 354.027 C 178.630 369.149,199.749 381.937,224.901 385.356 C 251.286 388.942,339.653 380.573,349.333 373.572 C 365.191 362.103,367.379 284.231,352.074 276.040 C 345.059 272.285,344.677 273.176,344.531 293.673 C 344.281 328.842,333.851 351.750,313.939 360.866 C 298.747 367.821,226.734 373.275,209.333 368.789 C 177.347 360.541,170.044 351.439,170.186 320.000 C 170.278 299.633,179.282 250.667,182.935 250.667 C 186.085 250.667,196.877 260.122,206.830 271.602 C 225.075 292.646,226.145 292.359,231.860 264.890 C 249.332 180.902,246.510 146.440,219.986 119.900 L 209.892 109.800 216.198 102.027 C 227.515 88.077,236.290 65.777,233.426 58.243 C 228.865 46.246,213.061 38.674,211.355 47.667 M149.667 71.482 C 144.064 73.970,150.588 94.369,160.373 104.960 C 163.613 108.465,166.898 112.509,167.674 113.947 C 170.438 119.063,171.156 104.978,168.876 90.365 C 166.275 73.688,159.563 67.090,149.667 71.482 M89.333 102.474 C 89.333 109.649,112.734 130.930,120.000 130.364 C 131.381 129.477,119.838 109.851,104.667 104.294 C 98.340 101.977,89.333 100.908,89.333 102.474 M211.321 141.667 C 219.376 148.631,219.059 182.276,210.730 204.279 C 205.652 217.697,206.147 217.484,186.199 214.815 C 167.304 212.287,168.157 212.806,163.318 200.877 C 160.709 194.446,154.315 187.908,152.454 189.769 C 151.946 190.276,151.107 195.936,150.590 202.346 C 148.695 225.837,123.703 282.814,117.857 276.968 C 115.217 274.328,128.449 187.632,132.855 178.705 C 144.411 155.288,171.079 140.397,204.259 138.836 C 206.269 138.741,209.380 139.988,211.321 141.667"></path></svg>',
    ying: '<svg fill="currentColor" viewBox="0, 0, 400,400"><path d="M158.667 18.741 C 148.033 22.336,136.620 26.528,133.304 28.058 L 127.274 30.838 116.800 27.419 C 103.989 23.237,99.838 23.233,94.893 27.399 C 94.650 27.603,98.196 32.472,102.771 38.218 C 118.196 57.592,123.973 75.045,124.029 102.451 C 124.063 119.054,125.903 124.346,134.508 132.604 C 143.838 141.558,141.706 148.142,128.667 150.637 C 124.267 151.479,115.267 153.690,108.667 155.552 C 102.067 157.413,81.727 161.855,63.467 165.423 C 36.647 170.663,29.665 172.476,27.134 174.854 C 24.108 177.696,22.941 181.272,25.000 181.391 C 25.550 181.423,28.700 181.983,32.000 182.635 C 36.787 183.581,44.739 182.713,71.333 178.338 C 116.823 170.855,116.133 170.543,117.486 199.268 C 118.485 220.479,121.409 229.479,130.139 238.209 C 140.570 248.640,148.000 243.574,148.000 226.029 C 148.000 213.920,150.602 208.000,155.156 209.747 C 158.839 211.161,159.232 214.627,156.593 222.393 C 153.312 232.044,153.516 241.851,157.144 248.963 C 160.679 255.891,160.707 257.614,157.333 260.667 C 153.945 263.733,153.981 266.110,157.536 274.147 C 163.414 287.436,161.994 313.598,154.955 321.667 C 151.330 325.823,128.567 324.205,114.287 318.776 C 109.010 316.770,111.585 312.363,127.939 295.413 C 145.665 277.041,148.571 272.591,141.519 274.613 C 135.725 276.275,132.781 278.119,124.874 285.038 C 107.160 300.539,91.120 302.678,75.150 291.667 C 64.272 284.166,62.363 283.956,57.001 289.667 C 39.590 308.208,50.889 328.267,82.000 334.052 C 99.687 337.341,114.769 342.022,126.376 347.825 C 163.534 366.406,175.674 369.781,182.130 363.325 L 185.472 359.983 184.536 321.581 C 183.143 264.385,186.604 244.889,197.360 249.345 C 201.234 250.949,220.000 269.936,220.000 272.250 C 220.000 274.413,230.223 273.369,232.240 271.000 C 237.404 264.935,240.384 257.761,242.216 246.986 C 245.313 228.767,250.515 215.184,267.871 180.000 C 286.203 142.838,292.000 135.252,292.000 148.425 C 292.000 160.756,301.747 179.707,306.560 176.733 C 310.234 174.462,306.609 190.314,300.792 201.955 C 293.490 216.569,292.869 223.417,297.870 234.158 C 303.041 245.263,309.081 248.001,314.768 241.819 C 326.766 228.776,345.348 226.859,350.486 238.135 C 358.988 256.795,320.002 321.748,278.667 357.791 C 251.392 381.574,248.054 385.333,254.212 385.333 C 255.341 385.333,265.656 379.739,277.133 372.902 C 288.610 366.065,302.219 358.016,307.376 355.015 C 353.237 328.329,389.727 258.885,372.915 230.285 C 368.008 221.937,358.997 215.549,347.177 212.040 C 333.726 208.047,333.059 207.061,335.424 194.663 C 339.087 175.457,337.854 165.982,330.619 157.742 C 325.348 151.738,325.571 149.812,333.126 136.118 C 347.442 110.168,354.883 87.378,356.673 64.000 C 357.206 57.033,358.539 49.586,359.635 47.450 C 373.351 20.704,316.946 14.266,300.447 40.694 C 298.368 44.024,295.093 48.817,293.170 51.344 C 291.246 53.872,288.674 59.916,287.453 64.776 C 284.810 75.300,279.094 88.295,273.588 96.297 C 271.394 99.485,267.649 106.740,265.265 112.419 C 259.879 125.249,253.750 131.338,247.479 130.088 C 235.178 127.635,229.787 127.835,216.854 131.223 C 203.243 134.788,194.072 135.608,192.696 133.381 C 191.355 131.211,198.231 112.829,206.715 95.904 C 232.811 43.845,228.031 20.125,190.088 13.402 C 179.471 11.521,180.583 11.332,158.667 18.741 M147.861 40.095 C 151.524 40.880,161.303 42.230,169.594 43.095 C 183.775 44.574,184.692 44.849,185.102 47.740 C 185.783 52.543,183.045 54.667,176.170 54.666 C 172.777 54.666,166.381 55.964,161.957 57.550 C 151.676 61.237,147.932 60.339,142.934 52.989 C 133.819 39.580,134.701 37.272,147.861 40.095 M188.745 135.376 C 185.871 137.549,171.313 138.125,170.070 136.114 C 168.895 134.211,171.896 133.549,182.000 133.481 C 190.486 133.424,191.098 133.596,188.745 135.376 M244.000 148.172 C 244.000 149.000,236.430 166.698,227.178 187.500 L 210.356 225.322 203.053 229.890 C 182.873 242.513,175.012 242.398,182.337 229.586 C 198.714 200.941,202.274 186.880,194.611 181.112 C 189.527 177.285,168.872 174.944,159.685 177.154 C 143.721 180.993,138.084 179.788,132.559 171.355 C 129.239 166.289,130.451 165.968,151.487 166.341 C 172.582 166.715,176.048 165.937,184.987 158.825 C 193.552 152.009,203.061 149.014,219.333 148.007 C 242.792 146.555,244.000 146.563,244.000 148.172 M148.612 269.422 C 147.048 271.952,149.329 272.576,151.651 270.254 C 153.729 268.175,153.733 268.000,151.698 268.000 C 150.484 268.000,149.095 268.640,148.612 269.422"></path></svg>',
    loader: '<svg><defs><filter id="MY-l-f"><feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" /><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 5 -2" result="gooey" /><feComposite in="SourceGraphic" in2="gooey" operator="atop"/></filter></defs></svg>',
    expand: '<svg fill="currentColor" viewBox="0 0 64 64" fill="#012e52"><path d="m48 8h-26c-1.104 0-2 .896-2 2s.896 2 2 2h26c2.206 0 4 1.794 4 4v32c0 2.206-1.794 4-4 4h-32c-2.206 0-4-1.794-4-4v-26c0-1.104-.896-2-2-2s-2 .896-2 2v26c0 4.411 3.589 8 8 8h32c4.411 0 8-3.589 8-8v-32c0-4.411-3.589-8-8-8z"/><path d="m29 42c0 1.104.896 2 2 2h11c1.104 0 2-.896 2-2v-11c0-1.104-.896-2-2-2s-2 .896-2 2v6.172l-16.586-16.586c-.78-.781-2.048-.781-2.828 0-.781.781-.781 2.047 0 2.828l16.586 16.586h-6.172c-1.104 0-2 .896-2 2z"/></svg>',
    shrink: '<svg fill="currentColor" viewBox="0 0 64 64"><path d="m48 8h-32c-4.411 0-8 3.589-8 8v32c0 4.411 3.589 8 8 8h26c1.104 0 2-.896 2-2s-.896-2-2-2h-26c-2.206 0-4-1.794-4-4v-32c0-2.206 1.794-4 4-4h32c2.206 0 4 1.794 4 4v26c0 1.104.896 2 2 2s2-.896 2-2v-26c0-4.411-3.589-8-8-8z"/><path d="m35 22c0-1.104-.896-2-2-2h-11c-1.104 0-2 .896-2 2v11c0 1.104.896 2 2 2s2-.896 2-2v-6.172l16.586 16.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-16.586-16.586h6.172c1.104 0 2-.896 2-2z"/></svg>'
  }, isJiexiRegex = /(jx|url|v)=https?:/i;
  let m3u8Video;
  !isSniffIframe && (Is(isJiexiRegex) && Is(isVipSiteRegex, Href.replace(/.+=(https?:)/, "$1")) || isNotTop && (Is(/=https?:.+\\.m3u8/) || (m3u8Video = document.querySelector("video source[src], video[src]")) && /\\.m3u8/.test(m3u8Video.src))) && (addCss("\\nbody > *:not(script) + script ~ *[id]:not([class]) {" + PurifyStyle + "}"), 
  fixM3u8Playing());
  const MESSAGE_ID = NAME + "20.20.final";
  if (window.addEventListener("message", (function(e) {
    const t = e.data;
    t && t._id === MESSAGE_ID && (isNotTop && t.parent ? (t.from = location.href, window.parent.postMessage(t, "*")) : isTop && t.action && E.emit(t.action, t));
  })), isNotTop && location.href === SniffCheckUrl) return void window.top.postMessage({
    _id: MESSAGE_ID,
    action: "enable.sniff",
    from: location.href
  }, "*");
  const isVideoUrlRegex = /^(http|\\/\\/).+(\\.(mp4|m3u8)|m3u8play.php)/, isInvalidSniffUrlRegex = /btrace.video.qq.com|lmsjy.qq.com|vlive.qqvideo.tc.qq.com|qzonestyle.gtimg.cn|img.baidu.com|dplayer\\/\\w+.mp4|vip.fwwmy1.cn|com-t-iqiyi.com|hz189cloud.oos-hz.ctyunapi.cn|video.da.mgtv.com|(titan.mgtv.com|cdn.oss-cn.aliyuncs.com.gms-lighting.com).+m3u8|jieshuo-okzy.com|manhoo.cn|\\/{3}|\\.(js|css)/, videoUrls = [], sniffVideoUrls = [];
  let iframes = {};
  isNotTop && sniffVideo();
  let isUrlDetect = !1;
  E.on("url.change", (function(e) {
    let {oldUrl: t, newUrl: i} = e;
    RULES_GO();
  })), RULES_GO(), Is(/movie\\.douban\\.com\\/tag\\//) && (addCss(".aside, .extra,.dale_movie_tag_bottom_banner {" + PurifyStyle + "}" + prefixCss(".grid-16-8 .article {width: auto;float: unset;}h1 {display: none;}#db-nav-movie {margin-bottom: 20px;}#db-nav-movie .MY-nav-item-a {background-color: #27a;color: #fafafa;padding: 3px 5px;border-radius: 3px;}.list-wp {display: flex;flex-wrap: wrap;justify-content: space-between;margin-top: 25px;}a.item {width: 118px;margin: 0 8px;}div.item {width: 100%;margin-left: 8px;margin-right: 8px;margin-bottom: 16px;}a.item p {padding-right: 0;text-align: center;}a.item .cover-wp, div.item .poster {overflow: hidden;border-radius: 3px;box-shadow: 0 1px 4px rgba(0, 0, 0, 0.39);border: 3px solid #f1eded;height: auto;}@media only screen and (max-width: 320px) {a.item .cover-wp {border-width: 0;}}a.item .cover-wp:hover, div.item .poster:hover {box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);}a.item .pic img {width: 100%;height: 163px;object-fit: cover;}a.item .cover-wp:after {display: none;}.tag-nav {margin-right: 0;}.MY-item-divider {width: 100%;}.MY-item-divider + .MY-item-divider {display: none;}", ".MY-miying") + prefixCss(".category {width: 100%;white-space: nowrap;overflow-x: auto;}.tags {margin-bottom: 1em !important;}.tags, .MY-douban-search {padding-left: 6px;padding-right: 6px;}.checkbox__input {vertical-align: text-top;}.tag-nav {margin: 0 auto;font-size: 12px;width: 100%;}.tag-nav .tabs, .tag-nav .check {display: flex;justify-content: space-around;width: 100%;}.tag-nav .tabs a {padding: 7.5px 5px 5px;}.tabs a:not(.tab-checked) {border: 1px solid #dfdfdf;}.tabs .tab-checked {border: 1px solid #258dcd!important;}.tab-checked:after {display: none;}.checkbox, .range {margin-right: 5px;}.check {float: none;margin-top: 5px;}.list-wp {margin-top: 40px;justify-content: space-evenly;}.list-wp, .item .cover-wp {overflow: unset;}a.item {width: calc((100% - 15px) / 3);text-align: center;margin: 0 2px;}a.item p {padding-right: 0;}a.item .cover-wp:after, .poster:after {display: none;}.tag-nav .range-dropdown {left: 0 !important;width: auto !important;right: 0 !important;top: -4em !important;}.article .more {margin: 1em !important;}", ".MY") + (isMobile ? prefixCss("\\nbody > *:not(.MY) {" + PurifyStyle + "}#app .article, .article.MY {position: absolute;top: 0;left: 0;right: 0;padding: 10px 0;transition: all 0.8s;}.category::-webkit-scrollbar {width: 1px;height: 1px;background-color: rgba(223, 223, 223, 0.25);}.category::-webkit-scrollbar-track {background: transparent;border: 0px none #ffffff;border-radius: 50px;}.category::-webkit-scrollbar-thumb {-webkit-box-shadow: inset 0 0 2.5px rgba(0, 0, 0, 0.1);box-shadow: inset 0 0 2.5px rgba(0, 0, 0, 0.1);border-radius: 2.5px;background-color: rgba(223, 223, 223, 0.25);opacity: 0.7;transition: opacity ease-in-out 200ms;}.category::-webkit-scrollbar-thumb:hover {opacity: 1;background-color: rgba(223, 223, 223, 0.25);}.MY-douban-search {position: relative;display: flex;margin-bottom: 5px;}.MY-douban-search .inp {height: 34px;text-align: center;cursor: text;width: 90%;border-top: 1px solid #dedede;border-left: 1px solid #dedede;border-top-left-radius: 3px;border-bottom-left-radius: 5px;}.MY-douban-search .inp input {background: #fff;width: 96%;margin: 0;text-align: left;height: 30px;padding-left: 10px;outline: none;}.MY-douban-search input {-webkit-appearance: none;border: none;background: transparent;}.MY-douban-search .inp-btn {position: relative;width: 37px;height: 34px;}.MY-douban-search .inp-btn input {width: 100%;height: 100%;font-size: 0;padding: 35px 0 0 0;overflow: hidden;color: transparent;cursor: pointer;}.MY-douban-search .inp-btn input:focus {outline: none;}.MY-douban-search .inp {background-image: url(//img3.doubanio.com/dae/accounts/resources/a4a38a5/movie/assets/nav_mv_bg.png?s=1);}.MY-douban-search .inp-btn input {background: url(//img3.doubanio.com/dae/accounts/resources/a4a38a5/movie/assets/nav_mv_bg.png?s=1) no-repeat 0 -40px;}.MY-item-balancer {margin-left: 11%;margin-right: 11%;}", "html") : "")), 
  $("html").addClass("MY-miying"), $((function() {
    const e = document.querySelector(".list-wp");
    let t = !1, i = !1;
    new MutationObserver((function(e) {
      if (i) i = !1; else {
        for (const i of e) "childList" == i.type && (t = !0);
        t && (i = !0, $(".list-wp").append('<div class="MY-item-divider"></div>'));
      }
    })).observe(e, {
      attributes: !0,
      childList: !0
    }), $(".nav-items li a").each((function(e) {
      $(e).text().includes("分类") && $(e).addClass("MY-nav-item-a").html(NAME);
    })), $("title").html(NAME), isMobile && ($("#app .article .tags").before('<div class="MY-douban-search"><div class="inp"><input size="22" maxlength="60" placeholder="搜索电影、电视剧、综艺、影人" value="" autocomplete="off"></div><div class="inp-btn"><input type="submit" value="搜索"></div></div>'), 
    $("body").prepend($("#app .article").addClass("MY")), $(".MY-douban-search input").on("keyup", (function(e) {
      13 === e.keyCode && (e.preventDefault(), location.href = "https://m.douban.com/search/?query=" + e.target.value + "&type=movie");
    })), $(".MY-douban-search .inp-btn input").on("click", (function(e) {
      e.preventDefault();
      const t = $(".MY-douban-search input").val();
      location.href = "https://m.douban.com/search/?query=" + t + "&type=movie";
    })), setInterval((function() {
      $(".list-wp [href]").each((function(e) {
        const t = $(e).attr("href");
        t.includes("movie.douban.com") && $(e).attr("href", t.replace("movie.douban.com", "m.douban.com/movie")).attr("target", "_blank");
      }));
    }), 500));
  })));
}();
}(console)</script></body>`)

  console.log('添加 tamperJS：miying.user.js')
}

$done({ body })