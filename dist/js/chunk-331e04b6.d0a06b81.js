(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-331e04b6"],{"025e":function(t,a,n){"use strict";n.d(a,"a",(function(){return i}));n("fb6a"),n("d3b7"),n("25f0");function i(){return Math.random().toString(16).slice(2)}},6210:function(t,a,n){"use strict";var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-card",[n("v-card-title",{staticClass:"font-weight-bold"},[t._v(t._s(t.card.headline))]),n("v-divider"),n("v-card-text",{staticClass:"mt-4 primary--text font-weight-medium display-2"},[t._v(t._s(t.card.title))]),n("v-card-text",[t._v(t._s(t.card.description))])],1)},r=[],o={name:"Cards",props:{card:{type:String}},data:function(){return{}}},s=o,c=n("2877"),e=n("6544"),d=n.n(e),l=n("b0af"),u=n("99d9"),f=n("ce7e"),v=Object(c["a"])(s,i,r,!1,null,null,null);a["a"]=v.exports;d()(v,{VCard:l["a"],VCardText:u["c"],VCardTitle:u["d"],VDivider:f["a"]})},7277:function(t,a,n){"use strict";n.r(a);var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-container",[n("v-row",{staticClass:"mt-8",attrs:{dense:""}},[n("v-col",{attrs:{cols:"12",md:"10"}},[n("h1",[t._v("Dashboard")])]),n("v-col",{attrs:{cols:"2","align-self":"end"}},[n("div",{staticClass:"text-right"},[n("v-btn",{staticClass:"primary",attrs:{to:"/workflow-list"}},[n("v-icon",{staticClass:"mr-4"},[t._v("mdi-star")]),t._v("New goal ")],1)],1)])],1),n("v-row",{staticClass:"mt-4"},[n("v-col",{attrs:{cols:"12"}},[n("h4",[t._v("Today")]),n("h1",{staticClass:"primary--text"},[t._v("11 Feb 2020")])])],1),n("v-row",t._l(t.cards,(function(t){return n("v-col",{key:""+t.id,attrs:{cols:"12",md:"6"}},[n("Cards",{attrs:{card:t}})],1)})),1),n("v-row",{staticClass:"mt-8"},[n("v-col",{attrs:{cols:"6"}},[n("h2",[t._v("Notifications")])])],1),n("v-row",t._l(t.notificationCards,(function(t){return n("v-col",{key:""+t.id,attrs:{cols:"12"}},[n("NotificationCards",{attrs:{notificationCard:t}})],1)})),1)],1)},r=[],o=(n("d3b7"),n("025e")),s=n("6210"),c=n("bf4b"),e={name:"Dashboard",mounted:function(){this.getDashboardSummaryCardsData()},components:{Cards:s["a"],NotificationCards:c["a"]},data:function(){return{cards:[],notificationCards:[{id:Object(o["a"])(),headline:"PPAs"}]}},methods:{getDashboardSummaryCardsData:function(){var t=this;fetch("/data/dashboardSummaryCards.json").then((function(t){return t.json()})).then((function(a){return t.cards=a}))}}},d=e,l=n("2877"),u=n("6544"),f=n.n(u),v=n("8336"),b=n("62ad"),h=n("a523"),m=n("132d"),C=n("0fd9"),_=Object(l["a"])(d,i,r,!1,null,null,null);a["default"]=_.exports;f()(_,{VBtn:v["a"],VCol:b["a"],VContainer:h["a"],VIcon:m["a"],VRow:C["a"]})},"99d9":function(t,a,n){"use strict";n.d(a,"a",(function(){return o})),n.d(a,"b",(function(){return s})),n.d(a,"c",(function(){return c})),n.d(a,"d",(function(){return e}));var i=n("b0af"),r=n("80d2"),o=Object(r["i"])("v-card__actions"),s=Object(r["i"])("v-card__subtitle"),c=Object(r["i"])("v-card__text"),e=Object(r["i"])("v-card__title");i["a"]},bf4b:function(t,a,n){"use strict";var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-card",[n("v-card-title",{staticClass:"font-weight-bold grey",attrs:{cols:"8"}},[n("div",[t._v(t._s(t.notificationCard.headline))]),n("v-spacer"),n("div",[n("v-btn",{staticClass:"mx-auto"},[t._v("See more")])],1)],1),n("v-card-content",[n("v-row",t._l(t.notifications,(function(t){return n("v-col",{key:""+t.id,attrs:{cols:"12"}},[n("Notifications",{attrs:{notification:t}})],1)})),1)],1)],1)},r=[],o=(n("d3b7"),n("e985")),s={name:"NotificationCards",mounted:function(){this.getNotificationsData()},components:{Notifications:o["a"]},props:{notificationCard:{type:String}},data:function(){return{notifications:[]}},methods:{getNotificationsData:function(){var t=this;fetch("/data/notificationsData.json").then((function(t){return t.json()})).then((function(a){return t.notifications=a}))}}},c=s,e=n("2877"),d=n("6544"),l=n.n(d),u=n("8336"),f=n("b0af"),v=n("99d9"),b=n("62ad"),h=n("0fd9"),m=n("2fa4"),C=Object(e["a"])(c,i,r,!1,null,null,null);a["a"]=C.exports;l()(C,{VBtn:u["a"],VCard:f["a"],VCardTitle:v["d"],VCol:b["a"],VRow:h["a"],VSpacer:m["a"]})}}]);