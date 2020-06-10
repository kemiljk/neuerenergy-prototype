(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8e9f"],{"8aff":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"mt-8"},[a("v-col",{attrs:{cols:"6"}},[a("h1",[t._v("To-Do")])]),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":"",color:"secondary"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{"single-select":t.singleSelect,"item-key":"id","show-select":"",headers:t.headers,items:t.actions,search:t.search,"sort-by":"date"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{staticClass:"br-top",attrs:{flat:"",color:"grey"}},[a("v-toolbar-title",{staticClass:"font-weight-bold"},[t._v("Actions")]),a("v-spacer"),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({staticClass:"my-2",attrs:{color:"primary"}},i),[a("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v("Add new ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"ACTION"},model:{value:t.editedItem.title,callback:function(e){t.$set(t.editedItem,"title",e)},expression:"editedItem.title"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"DESCRIPTION"},model:{value:t.editedItem.task,callback:function(e){t.$set(t.editedItem,"task",e)},expression:"editedItem.task"}})],1),a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"12",md:"12"}},[a("v-dialog",{ref:"dialog",attrs:{"return-value":t.editedItem.date,persistent:"",width:"290px"},on:{"update:returnValue":function(e){return t.$set(t.editedItem,"date",e)},"update:return-value":function(e){return t.$set(t.editedItem,"date",e)}},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-text-field",t._g({attrs:{label:"DUE DATE","prepend-icon":"mdi-calendar"},model:{value:t.editedItem.date,callback:function(e){t.$set(t.editedItem,"date",e)},expression:"editedItem.date"}},i))]}}]),model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-date-picker",{attrs:{scrollable:""},model:{value:t.actions.date,callback:function(e){t.$set(t.actions,"date",e)},expression:"actions.date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.modal=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.actions.date)}}},[t._v("OK")])],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-select",{attrs:{items:t.items,label:"To-Do",solo:""},model:{value:t.editedItem.status,callback:function(e){t.$set(t.editedItem,"status",e)},expression:"editedItem.status"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",outlined:""},on:{click:t.close}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"primary"},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var i=e.item;return[a("v-btn",{staticClass:"mr-6",attrs:{text:"",icon:""},on:{click:function(e){return t.editItem(i)}}},[a("v-icon",[t._v("mdi-pen")])],1),a("v-btn",{staticClass:"mr-5",attrs:{text:"",color:"error",icon:""},on:{click:function(e){return t.deleteItem(i)}}},[a("v-icon",[t._v("mdi-delete")])],1),a("v-btn",{attrs:{to:"/to-do/#id",color:"primary",icon:""}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-chevron-right")])],1)]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])]},proxy:!0},{key:"item.status",fn:function(e){var i=e.item;return[a("v-chip",{attrs:{color:t.getColor(i.status),dark:""}},[t._v(t._s(i.status))])]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1)},n=[],s=(a("c975"),a("a434"),a("d3b7"),{name:"To-Do",mounted:function(){this.getActionsData(),this.getActionsHeaderData(),this.getItemsData()},data:function(){return{singleSelect:!1,selected:[],search:"",dialog:!1,headers:[],actions:[],items:[],editedIndex:-1,editedItem:[],defaultItem:[],modal:!0}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(t){t||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){this.actions=[]},getActionsData:function(){var t=this;fetch("/data/actionsData.json").then((function(t){return t.json()})).then((function(e){return t.actions=e}))},getActionsHeaderData:function(){var t=this;fetch("/data/actionsHeaderData.json").then((function(t){return t.json()})).then((function(e){return t.headers=e}))},getItemsData:function(){var t=this;fetch("/data/actionsItemsData.json").then((function(t){return t.json()})).then((function(e){return t.items=e}))},getColor:function(t){return"Overdue"===t?"red":"In-Progress"===t?"orange darken-3":"To-Do"===t?"primary":"success"},editItem:function(t){this.editedIndex=this.actions.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this.actions.indexOf(t);confirm("Are you sure you want to delete this item?")&&this.actions.splice(e,1)},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},save:function(){this.editedIndex>-1?Object.assign(this.actions[this.editedIndex],this.editedItem):this.actions.push(this.editedItem),this.close()}}}),o=s,c=a("2877"),r=a("6544"),l=a.n(r),d=a("8336"),u=a("b0af"),m=a("99d9"),v=a("cc20"),f=a("62ad"),h=a("a523"),p=a("8fea"),b=a("2e4b"),I=a("169a"),g=a("132d"),x=a("0fd9"),k=a("b974"),y=a("2fa4"),_=a("8654"),C=a("71d9"),D=a("2a7f"),V=Object(c["a"])(o,i,n,!1,null,null,null);e["default"]=V.exports;l()(V,{VBtn:d["a"],VCard:u["a"],VCardActions:m["a"],VCardText:m["c"],VCardTitle:m["d"],VChip:v["a"],VCol:f["a"],VContainer:h["a"],VDataTable:p["a"],VDatePicker:b["a"],VDialog:I["a"],VIcon:g["a"],VRow:x["a"],VSelect:k["a"],VSpacer:y["a"],VTextField:_["a"],VToolbar:C["a"],VToolbarTitle:D["a"]})}}]);