(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf19744a"],{"025e":function(t,n,a){"use strict";a.d(n,"a",(function(){return i}));a("fb6a"),a("d3b7"),a("25f0");function i(){return Math.random().toString(16).slice(2)}},2311:function(t,n,a){"use strict";a.r(n);var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("h1",[t._v("Components")])])],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("h2",[t._v("Cards")]),a("v-row",t._l(t.cards,(function(t){return a("v-col",{key:""+t.id,attrs:{cols:"12",md:"6"}},[a("Cards",{attrs:{card:t}})],1)})),1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("h2",[t._v("Notification Cards")]),a("v-row",t._l(t.notificationCards,(function(t){return a("v-col",{key:""+t.id,attrs:{cols:"12",md:"6"}},[a("NotificationCards",{attrs:{notificationCard:t}})],1)})),1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("h2",[t._v("Slider Cards")]),a("v-row",t._l(t.sliders,(function(t){return a("v-col",{key:""+t.id,attrs:{cols:"12",md:"4"}},[a("SliderCards",{attrs:{card:t}})],1)})),1)],1)],1)],1)},o=[],r=a("025e"),c=a("6210"),e=a("bf4b"),s=a("08c8"),d={name:"Dashboard",components:{Cards:c["a"],SliderCards:s["a"],NotificationCards:e["a"]},data:function(){return{cards:[{id:Object(r["a"])(),headline:"Total MWh purchased",title:"0"}],notificationCards:[{id:Object(r["a"])(),headline:"In-Negotiation PPAs"}],sliders:[{id:Object(r["a"])(),headline:"CO₂ reduction target",title:"50%",description:"24,149.90 Tonnes CO₂ per year"}]}}},l=d,u=a("2877"),f=a("6544"),v=a.n(f),b=a("62ad"),C=a("a523"),h=a("0fd9"),_=Object(u["a"])(l,i,o,!1,null,null,null);n["default"]=_.exports;v()(_,{VCol:b["a"],VContainer:C["a"],VRow:h["a"]})},"99d9":function(t,n,a){"use strict";a.d(n,"a",(function(){return r})),a.d(n,"b",(function(){return c})),a.d(n,"c",(function(){return e})),a.d(n,"d",(function(){return s}));var i=a("b0af"),o=a("80d2"),r=Object(o["i"])("v-card__actions"),c=Object(o["i"])("v-card__subtitle"),e=Object(o["i"])("v-card__text"),s=Object(o["i"])("v-card__title");i["a"]},bf4b:function(t,n,a){"use strict";var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-card",[a("v-card-title",{staticClass:"font-weight-bold grey",attrs:{cols:"8"}},[a("div",[t._v(t._s(t.notificationCard.headline))]),a("v-spacer"),a("div",[a("v-btn",{staticClass:"mx-auto"},[t._v("See more")])],1)],1),a("v-card-content",[a("v-row",t._l(t.notifications,(function(t){return a("v-col",{key:""+t.id,attrs:{cols:"12"}},[a("Notifications",{attrs:{notification:t}})],1)})),1)],1)],1)},o=[],r=(a("d3b7"),a("e985")),c={name:"NotificationCards",mounted:function(){this.getNotificationsData()},components:{Notifications:r["a"]},props:{notificationCard:{type:String}},data:function(){return{notifications:[]}},methods:{getNotificationsData:function(){var t=this;fetch("/data/notificationsData.json").then((function(t){return t.json()})).then((function(n){return t.notifications=n}))}}},e=c,s=a("2877"),d=a("6544"),l=a.n(d),u=a("8336"),f=a("b0af"),v=a("99d9"),b=a("62ad"),C=a("0fd9"),h=a("2fa4"),_=Object(s["a"])(e,i,o,!1,null,null,null);n["a"]=_.exports;l()(_,{VBtn:u["a"],VCard:f["a"],VCardTitle:v["d"],VCol:b["a"],VRow:C["a"],VSpacer:h["a"]})}}]);
//# sourceMappingURL=chunk-bf19744a.058144f9.js.map