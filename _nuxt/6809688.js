(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4],{280:function(t,e,o){var content=o(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("9d750b42",content,!0,{sourceMap:!1})},281:function(t,e,o){"use strict";o(280)},282:function(t,e,o){var n=o(36)(!1);n.push([t.i,".pageTitle[data-v-f5af8d00]{width:100%;padding-bottom:2em;text-align:center}.pageTitle__head[data-v-f5af8d00]{border-bottom:1px solid #fff;padding:1rem 0;margin:1rem 0;font-size:2em}.pageTitle__body[data-v-f5af8d00]{width:clamp(60%,600px,100%);margin:0 auto;font-size:1.5em;font-weight:100}",""]),t.exports=n},286:function(t,e,o){"use strict";o.r(e);var n={},c=(o(281),o(22)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pageTitle"},[e("h1",{staticClass:"pageTitle__head"},[t._t("head")],2),t._v(" "),e("h3",{staticClass:"pageTitle__subhead"},[t._t("subhead")],2),t._v(" "),e("div",{staticClass:"pageTitle__body"},[t._t("body")],2)])}),[],!1,null,"f5af8d00",null);e.default=component.exports},299:function(t,e,o){var content=o(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("65fa4ebc",content,!0,{sourceMap:!1})},303:function(t,e,o){"use strict";o(299)},304:function(t,e,o){var n=o(36)(!1);n.push([t.i,"\n.login[data-v-031c9aa4] {\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n}\n",""]),t.exports=n},311:function(t,e,o){"use strict";o.r(e);var n={computed:{docCheckId:function(){return"2000000019411"},authenticated:function(){return this.$cookies.get("dc_access_token")}},methods:{logout:function(){this.$cookies.remove("dc_access_token"),this.$cookies.remove("dc_refresh_token"),window.location.reload()}}},c=(o(303),o(22)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("PageTitle",{scopedSlots:t._u([{key:"head",fn:function(){return[t._v(" DocCheck Login ")]},proxy:!0}])}),t._v(" "),t.authenticated?e("div",[e("h3",[t._v("Sie sind bereits angemeldet")]),t._v(" "),e("div",[e("NuxtLink",{attrs:{to:"/"}},[t._v(" zur Startseite ")])],1),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"button",on:{click:t.logout}},[t._v("Logout")])]):e("div",{staticClass:"login"},[e("iframe",{attrs:{id:"dc_login_iframe",align:"left",frameborder:"0",scrolling:"no",width:"467",height:"231",name:"dc_login_iframe",src:"https://login.doccheck.com/code/de/".concat(t.docCheckId,"/login_xl/")}},[e("a",{attrs:{href:"https://login.doccheck.com/code/de/".concat(t.docCheckId,"/login_xl/"),target:"_blank"}},[t._v("LOGIN")])])])],1)}),[],!1,null,"031c9aa4",null);e.default=component.exports;installComponents(component,{PageTitle:o(286).default})}}]);