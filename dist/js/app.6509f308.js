(function(e){function t(t){for(var i,r,o=t[0],s=t[1],u=t[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],i=!0,r=1;r<n.length;r++){var o=n[r];0!==a[o]&&(i=!1)}i&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},a={app:0},c=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-34f4ef52":"836f8109","chunk-34f7b894":"a0fa84a7","chunk-351df5da":"be42a422","chunk-35207384":"1199fd28","chunk-3522c860":"db3f2120","chunk-3523399a":"0ccdf35a","chunk-3524f418":"7450f59f","chunk-41366bcf":"59874d04","chunk-47890388":"279de118","chunk-479d12ee":"8639190c","chunk-50fc5177":"ee0cbced","chunk-2311397e":"c84b58f4","chunk-488d2d6c":"6b6ce822","chunk-60368ac2":"ad318e0c","chunk-7bde9337":"26d927cd","chunk-2d0c778c":"9881f91c","chunk-530a5d47":"8ac2cb46","chunk-debd3eec":"0edff03c","chunk-832c7fcc":"ab11f724"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-50fc5177":1,"chunk-2311397e":1,"chunk-488d2d6c":1,"chunk-60368ac2":1,"chunk-7bde9337":1,"chunk-530a5d47":1,"chunk-debd3eec":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var i="css/"+({}[e]||e)+"."+{"chunk-34f4ef52":"31d6cfe0","chunk-34f7b894":"31d6cfe0","chunk-351df5da":"31d6cfe0","chunk-35207384":"31d6cfe0","chunk-3522c860":"31d6cfe0","chunk-3523399a":"31d6cfe0","chunk-3524f418":"31d6cfe0","chunk-41366bcf":"31d6cfe0","chunk-47890388":"31d6cfe0","chunk-479d12ee":"31d6cfe0","chunk-50fc5177":"c287b5c6","chunk-2311397e":"e1664636","chunk-488d2d6c":"32632a65","chunk-60368ac2":"9ae69cc1","chunk-7bde9337":"fe35a78a","chunk-2d0c778c":"31d6cfe0","chunk-530a5d47":"3635099b","chunk-debd3eec":"25763032","chunk-832c7fcc":"31d6cfe0"}[e]+".css",a=s.p+i,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var u=c[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===a))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===i||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var i=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=i,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var i=a[e];if(0!==i)if(i)t.push(i[2]);else{var c=new Promise((function(t,n){i=a[e]=[t,n]}));t.push(i[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",d.name="ChunkLoadError",d.type=i,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"025e":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("fb6a"),n("d3b7"),n("25f0");function i(){return Math.random().toString(16).slice(2)}},"029a":function(e,t,n){},"381d":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="381d"},"3dfd":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-navigation-drawer",{attrs:{color:e.color,"expand-on-hover":e.expandOnHover,"mini-variant":e.miniVariant,left:e.left,src:e.bg,app:"",clipped:""},scopedSlots:e._u([{key:"append",fn:function(){return[i("div",[i("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},e._l(e.menuItems,(function(t,n){return i("v-list-item",{key:n,attrs:{to:t.url}},[i("v-list-item-icon",[i("v-icon",[e._v(e._s(t.icon))])],1),i("v-list-item-title",[e._v(e._s(t.title))])],1)})),1)],1)]},proxy:!0}]),model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[i("v-list",{staticClass:"py-1",attrs:{dense:"",nav:""}},[i("v-list-item",{class:e.miniVariant&&"px-0",attrs:{"two-line":"",to:"profile"}},[i("v-list-item-avatar",[i("img",{attrs:{src:"https://randomuser.me/api/portraits/men/29.jpg"}})]),i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(e.profile.name))]),i("v-list-item-subtitle",[e._v(e._s(e.profile.title))])],1)],1),i("v-divider",{staticClass:"mb-4"}),e._l(e.items,(function(t){return i("v-list-item",{key:t.title,attrs:{link:"",to:t.url}},[i("v-list-item-icon",[i("v-icon",[e._v(e._s(t.icon))])],1),i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(t.title))])],1)],1)}))],2)],1),i("v-app-bar",{attrs:{app:"",dark:"","clipped-left":""}},[i("v-btn",{staticClass:"d-lg-none",attrs:{text:"",icon:""},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[i("v-icon",[e._v("mdi-menu")])],1),i("div",{staticClass:"d-none d-lg-block"},[i("img",{attrs:{src:n("a55d"),height:"40px"}})]),i("v-spacer"),i("v-app-bar-title",{staticClass:"text-center"},[i("h2",[e._v(e._s(e.client.name))])]),i("v-spacer"),i("v-btn",{staticClass:"mr-2",attrs:{text:""},on:{click:e.toggleTheme}},[i("v-icon",[e._v("mdi-brightness-6")])],1),i("v-menu",{attrs:{"offset-y":"","max-width":"400px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[i("v-btn",e._g({attrs:{icon:""}},n),[i("v-icon",[e._v("mdi-bell")])],1)]}}])},[i("v-list",e._l(e.notifications,(function(e){return i("v-list-item",{key:""+e.id,staticClass:"px-0"},[i("Notifications",{staticClass:"d-inline-block text-truncate",attrs:{notification:e}})],1)})),1)],1)],1),i("v-content",[i("router-view"),i("v-speed-dial",{attrs:{top:e.top,left:e.left,direction:e.direction,"open-on-hover":e.hover,transition:e.transition,absolute:"true",bottom:"",right:"",fixed:"true"},scopedSlots:e._u([{key:"activator",fn:function(){return[i("v-btn",{attrs:{color:"primary",fab:""},model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}},[e.fab?i("v-icon",[e._v("mdi-close")]):i("v-icon",[e._v("mdi-chat")])],1)]},proxy:!0}]),model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}})],1)],1)},r=[],a=n("025e"),c=n("e985"),o={name:"App",components:{Notifications:c["a"]},data:function(){return{client:{name:"My Company"},profile:{name:"Owen Maestro",title:"Chief Executive Officer"},signin:{url:"/sign-in"},drawer:!0,items:[{title:"Dashboard",icon:"mdi-view-dashboard",url:"/"},{title:"Workflow",icon:"mdi-graph",url:"/workflow-list"},{title:"Sites",icon:"mdi-map-marker",url:"/sites"},{title:"Analysis",icon:"mdi-tune",url:"/analysis"},{title:"Generators",icon:"mdi-city",url:"/generators"},{title:"Inbox",icon:"mdi-email",url:"/inbox"}],color:"dark",colors:["primary","primary"],menuItems:[{title:"Support",icon:"mdi-face-agent",url:"/support"},{title:"Company Profile",icon:"mdi-domain",url:"/company-profile"},{title:"Sign out",icon:"mdi-logout-variant",url:"/sign-out"}],notifications:[{id:Object(a["a"])(),date:"12 FEB 2020",description:"PWR PPA • Added External Legal Counsel as Reviewer",details:"Harry McCammond",url:"/notifications/#"},{id:Object(a["a"])(),date:"27 OCT 2019",description:"CLR PPA • Initiated by Harry McCammond on 23rd Dec 2019",details:"Awaiting contract initiation with CLR",url:"/notifications/#"},{id:Object(a["a"])(),date:"21 NOV 2019",description:"Contrast PPA • By Małgorzata Switoniak-Jabłonska",details:"Needs further discussion",url:"/notifications/#"}],right:!1,miniVariant:!0,expandOnHover:!0,background:!1}},methods:{toggleTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},s=o,u=(n("cf25"),n("2877")),l=n("6544"),d=n.n(l),f=n("7496"),p=n("40dc"),h=n("8336"),m=n("a75b"),v=n("ce7e"),b=n("132d"),k=n("8860"),g=n("da13"),y=n("8270"),w=n("5d23"),_=n("34c3"),C=n("e449"),x=n("f774"),V=n("2fa4"),O=n("c73b"),S=Object(u["a"])(s,i,r,!1,null,null,null);t["a"]=S.exports;d()(S,{VApp:f["a"],VAppBar:p["a"],VBtn:h["a"],VContent:m["a"],VDivider:v["a"],VIcon:b["a"],VList:k["a"],VListItem:g["a"],VListItemAvatar:y["a"],VListItemContent:w["a"],VListItemIcon:_["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VMenu:C["a"],VNavigationDrawer:x["a"],VSpacer:V["a"],VSpeedDial:O["a"]})},"402c":function(e,t,n){"use strict";var i=n("2b0e"),r=n("f309");i["default"].use(r["a"]),t["a"]=new r["a"]({theme:{dark:!1,themes:{light:{primary:"#1c475c",secondary:"#FFDD05",accent:"#56bdf2",error:"#650000",success:"#4CAF50",palegreen:"#E5F1EA",palered:"#FAE8E8",darkamber:"#9B6600",paleamber:"#FEF3D0",grey:"#DDDDDD"},dark:{primary:"#56bdf2",secondary:"#FFDD05",accent:"#ccebfb",error:"#eb3e46",success:"#1FB966",palegreen:"#7C9F8A",palered:"#B49F9F",darkamber:"#9B6600",paleamber:"#BAAF8B",grey:"#333333"}}}})},"56d7":function(e,t,n){"use strict";n.r(t),function(e){n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("7d14"),i=n("2b0e"),r=n("3dfd"),a=(n("ddb8"),n("402c")),c=n("a18c"),o=n("6210");i["default"].config.productionTip=!1,i["default"].component("Cards",o["a"]),Object(t["configure"])(n("381d"),e),new i["default"]({vuetify:a["a"],router:c["a"],render:function(e){return e(r["a"])}}).$mount("#app")}.call(this,n("dd40")(e))},6210:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",{staticClass:"primary--text font-weight-bold"},[e._v(e._s(e.card.headline))]),n("v-divider"),n("v-card-text",{staticClass:"mt-4 font-weight-bold display-2"},[e._v(e._s(e.card.title))]),n("v-card-text",[e._v(e._s(e.card.description))])],1)},r=[],a={name:"Cards",props:{card:{type:String}},data:function(){return{}}},c=a,o=n("2877"),s=n("6544"),u=n.n(s),l=n("b0af"),d=n("99d9"),f=n("ce7e"),p=Object(o["a"])(c,i,r,!1,null,null,null);t["a"]=p.exports;u()(p,{VCard:l["a"],VCardText:d["c"],VCardTitle:d["d"],VDivider:f["a"]})},a18c:function(e,t,n){"use strict";n("d3b7");var i=n("2b0e"),r=n("8c4f");i["default"].use(r["a"]);var a=[{path:"/sign-in",name:"Sign in",component:function(){return n.e("chunk-41366bcf").then(n.bind(null,"54e2"))}},{path:"/sign-out",name:"Sign out",component:function(){return n.e("chunk-35207384").then(n.bind(null,"5982"))}},{path:"/",name:"Dashboard",component:function(){return n.e("chunk-47890388").then(n.bind(null,"7277"))}},{path:"/workflow",name:"Workflow",component:function(){return Promise.all([n.e("chunk-50fc5177"),n.e("chunk-2311397e"),n.e("chunk-7bde9337"),n.e("chunk-2d0c778c")]).then(n.bind(null,"5182"))}},{path:"/workflow-list",name:"Workflow-list",component:function(){return Promise.all([n.e("chunk-50fc5177"),n.e("chunk-2311397e"),n.e("chunk-7bde9337"),n.e("chunk-530a5d47")]).then(n.bind(null,"1990"))}},{path:"/sites",name:"Sites",component:function(){return Promise.all([n.e("chunk-50fc5177"),n.e("chunk-2311397e"),n.e("chunk-debd3eec")]).then(n.bind(null,"987c"))}},{path:"/analysis",name:"Analysis",component:function(){return Promise.all([n.e("chunk-50fc5177"),n.e("chunk-2311397e"),n.e("chunk-488d2d6c"),n.e("chunk-60368ac2")]).then(n.bind(null,"9aef"))}},{path:"/generators",name:"Generators",component:function(){return n.e("chunk-34f7b894").then(n.bind(null,"b327"))}},{path:"/inbox",name:"Inbox",component:function(){return n.e("chunk-34f4ef52").then(n.bind(null,"e529"))}},{path:"/notifications",name:"Notifications",component:function(){return n.e("chunk-3524f418").then(n.bind(null,"09f1"))}},{path:"/support",name:"Support",component:function(){return n.e("chunk-3522c860").then(n.bind(null,"1deb"))}},{path:"/profile",name:"Profile",component:function(){return n.e("chunk-479d12ee").then(n.bind(null,"c66d"))}},{path:"/company-profile",name:"CompanyProfile",component:function(){return n.e("chunk-351df5da").then(n.bind(null,"8160"))}},{path:"/settings",name:"Settings",component:function(){return n.e("chunk-3523399a").then(n.bind(null,"26d3"))}},{path:"/components",name:"Components",component:function(){return Promise.all([n.e("chunk-50fc5177"),n.e("chunk-488d2d6c"),n.e("chunk-832c7fcc")]).then(n.bind(null,"2311"))}}],c=new r["a"]({mode:"history",base:"/",routes:a});t["a"]=c},a55d:function(e,t,n){e.exports=n.p+"img/NeuerEnergy_Logotype-white.9295e2f6.png"},cf25:function(e,t,n){"use strict";var i=n("029a"),r=n.n(i);r.a},ddb8:function(e,t,n){"use strict";var i=n("9483");Object(i["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}})},e985:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",{staticClass:"py-0 my-0",attrs:{dense:"",nav:""}},[n("v-list-item",{attrs:{link:"",to:e.notification.url}},[n("v-col",{attrs:{cols:"11"}},[n("v-list-item-subtitle",{staticClass:"subtitle-2 pb-2"},[e._v(e._s(e.notification.date))]),n("v-list-item-title",{staticClass:"subtitle-1 font-weight-bold py-2"},[e._v(e._s(e.notification.description))]),n("v-list-item-subtitle",{staticClass:"body-1 py-2"},[e._v(e._s(e.notification.details))])],1),n("v-col",{staticClass:"my-auto",attrs:{cols:"1","align-items":"end"}},[n("div",{staticClass:"text-center"},[n("v-icon",{attrs:{large:""}},[e._v("mdi-chevron-right")])],1)])],1)],1)},r=[],a={name:"Notifications",props:{notification:{type:String}}},c=a,o=n("2877"),s=n("6544"),u=n.n(s),l=n("62ad"),d=n("132d"),f=n("8860"),p=n("da13"),h=n("5d23"),m=Object(o["a"])(c,i,r,!1,null,null,null);t["a"]=m.exports;u()(m,{VCol:l["a"],VIcon:d["a"],VList:f["a"],VListItem:p["a"],VListItemSubtitle:h["b"],VListItemTitle:h["c"]})}});
//# sourceMappingURL=app.6509f308.js.map