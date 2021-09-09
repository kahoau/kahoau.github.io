(function(e){function t(t){for(var r,s,i=t[0],c=t[1],u=t[2],d=0,m=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(m.length)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0435":function(e){e.exports=JSON.parse('{"calculator":{"title":"計算機","formula":"方程式"}}')},"0c7a":function(e,t,n){"use strict";n("cabc")},"15c5":function(e,t,n){"use strict";n("2c27")},2558:function(e,t,n){},"2c27":function(e,t,n){},"49f8":function(e,t,n){var r={"./en.json":"edd4","./tc.json":"0435"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="49f8"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("SiteNav"),n("router-view")],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[r("b-navbar-brand",{attrs:{href:"/"}},[e._v("  Ka Portal")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"#"}},[r("b-link",{attrs:{to:"/calculator"}},[e._v("calculator")])],1),e.getUserProfile?r("b-nav-item",{attrs:{href:"#"}},[r("b-link",{attrs:{to:"/cards"}},[e._v("card")])],1):e._e()],1),r("b-navbar-nav",{staticClass:"mr-auto"},[r("b-nav-item-dropdown",{attrs:{text:"Lang"}},e._l(e.langs,(function(t,n){return r("b-dropdown-item",{key:"lang"+n,attrs:{href:"#",value:t},on:{click:function(n){e.$i18n.locale=t}}},[e._v(" "+e._s(t))])})),1)],1),e.getUserProfile?r("b-navbar-nav",[r("b-nav-item-dropdown",{scopedSlots:e._u([{key:"button-content",fn:function(){return[r("em",[e._v("User")])]},proxy:!0}],null,!1,4258386881)},[r("b-dropdown-item",{attrs:{href:"#"},on:{click:e.doLogout}},[e._v("Sign Out")])],1)],1):r("b-navbar-nav",{staticClass:"ms-auto"},[r("b-nav-item",{attrs:{href:"#"}},[r("b-link",{attrs:{to:"/login"}},[r("img",{attrs:{src:n("778a"),fluid:"",alt:"Responsive image"}})])],1)],1)],1)],1)},i=[],c=n("5530"),u=n("2f62"),l={userLogin:"login",userLogout:"logout",fetchCards:"fetchCards"},d=l,m={data:function(){return{langs:["en","tc"]}},computed:Object(c["a"])({},Object(u["b"])(["getUserProfile"])),methods:{doLogout:function(){this.$store.dispatch(d.userLogout,{username:this.usernameLogin,password:this.passwordLogin})}}},h=m,p=(n("d20c"),n("2877")),f=Object(p["a"])(h,s,i,!1,null,"e0669426",null),g=f.exports,A="INITIALISE_STORE",v="SET_USER_PROFILE",V="SET_CARDS",b={components:{SiteNav:g},computed:{},beforeCreate:function(){this.$store.commit(A)}},W=b,K=Object(p["a"])(W,a,o,!1,null,null,null),w=K.exports,R=(n("4160"),n("159b"),n("d3b7"),n("ddb0"),n("ac1f"),n("466d"),n("a925"));function C(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var a=r[1];t[a]=e(n)}})),t}r["default"].use(R["a"]);var O=new R["a"]({locale:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_LOCALE||"en",fallbackLocale:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_FALLBACK_LOCALE||"en",messages:C()}),_=n("8c4f"),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-page"},[n("transition",{attrs:{name:"fade"}},[e.registerActive?e._e():n("div",{staticClass:"wallpaper-login"})]),n("div",{staticClass:"wallpaper-register"}),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4 col-md-6 col-sm-8 mx-auto"},[e.registerActive?n("div",{staticClass:"card register",class:{error:e.emptyFields}},[n("h1",[e._v("Sign Up")]),n("form",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.usernameReg,expression:"usernameReg"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username",required:""},domProps:{value:e.usernameReg},on:{input:function(t){t.target.composing||(e.usernameReg=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordReg,expression:"passwordReg"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:e.passwordReg},on:{input:function(t){t.target.composing||(e.passwordReg=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmReg,expression:"confirmReg"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm Password",required:""},domProps:{value:e.confirmReg},on:{input:function(t){t.target.composing||(e.confirmReg=t.target.value)}}}),n("input",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:e.doRegister}}),n("p",[e._v("Already have an account? "),n("a",{attrs:{href:"#"},on:{click:function(t){e.registerActive=!e.registerActive,e.emptyFields=!1}}},[e._v("Sign in here")])])])]):n("div",{staticClass:"card login",class:{error:e.emptyFields}},[n("h1",[e._v("Sign In")]),n("form",{staticClass:"form-group",on:{submit:function(e){e.preventDefault()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.usernameLogin,expression:"usernameLogin"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username",required:""},domProps:{value:e.usernameLogin},on:{input:function(t){t.target.composing||(e.usernameLogin=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordLogin,expression:"passwordLogin"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:e.passwordLogin},on:{input:function(t){t.target.composing||(e.passwordLogin=t.target.value)}}}),n("input",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:e.doLogin}})])])])])])],1)},x=[],y={data:function(){return{registerActive:!1,usernameLogin:"",passwordLogin:"",usernameReg:"",passwordReg:"",confirmReg:"",emptyFields:!1}},methods:{doLogin:function(){""===this.usernameLogin||""===this.passwordLogin?this.emptyFields=!0:this.$store.dispatch(d.userLogin,{username:this.usernameLogin,password:this.passwordLogin})},doRegister:function(){""===this.usernameReg||""===this.passwordReg||""===this.confirmReg?this.emptyFields=!0:alert("You are now registered")}}},E=y,j=(n("0c7a"),Object(p["a"])(E,S,x,!1,null,"8a107eba",null)),L=j.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"calculator"}},[n("div",{staticClass:"col1"},[n("h2",[n("p",[e._v(e._s(e.$t("calculator.title")))])]),n("b-container",[n("b-row",[n("b-col",[e._v(" Sign "),n("b-form-select",{attrs:{options:e.options},model:{value:e.selectedCalculatorSign,callback:function(t){e.selectedCalculatorSign=t},expression:"selectedCalculatorSign"}})],1)],1),n("b-row",[n("b-col",[e._v(" Digits "),n("b-form-spinbutton",{attrs:{id:"sbutton-decimal",min:"1",max:"3",placeholder:"digits",inline:""},model:{value:e.digitsValue,callback:function(t){e.digitsValue=t},expression:"digitsValue"}})],1)],1),n("b-row",[n("b-col",[e._v(" Decimal "),n("b-form-spinbutton",{attrs:{id:"sbutton-decimal",min:"0",max:"3",placeholder:"decimal",inline:""},model:{value:e.decimalValue,callback:function(t){e.decimalValue=t},expression:"decimalValue"}})],1)],1),n("b-row",[n("b-col",[n("b-jumbotron",{attrs:{lead:e.$t("calculator.formula"),"text-variant":"dark"}},[n("h6",[e._v(e._s(e.num1)+" "+e._s(e.calculatorSign)+" "+e._s(e.num2)+" = "+e._s(e.answer))])]),n("form",{on:{submit:function(e){e.preventDefault()}}},[n("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.refresh()}}},[e._v("Refresh")]),e._v("   "),n("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.calcAnswer()}}},[e._v("Answer")]),e._v("   ")],1)],1)],1)],1)],1)])},F=[],N=(n("b680"),n("a9e3"),{mounted:function(){this.refresh()},data:function(){return{calculatorSign:"",selectedCalculatorSign:"-",options:[{text:"+",value:"+"},{text:"-",value:"-"}],digitsValue:2,decimalValue:2,num1:"",num2:"",answer:""}},methods:{genRandomNum:function(){return Number(Math.random()*Math.pow(10,this.digitsValue)).toFixed(this.decimalValue)},refresh:function(){if(this.num1=this.genRandomNum(),this.num2=this.genRandomNum(),Number(this.num2)>Number(this.num1)){var e=this.num1;this.num1=this.num2,this.num2=e}this.calculatorSign=this.selectedCalculatorSign,this.answer=""},calcAnswer:function(){var e="-"==this.calculatorSign?Number(this.num1)-Number(this.num2):Number(this.num1)+Number(this.num2);this.answer=e.toFixed(this.decimalValue)}}}),P=N,I=(n("d05a"),Object(p["a"])(P,k,F,!1,null,"1f342c27",null)),M=I.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:""}},[n("b-row",{attrs:{cols:"1","cols-sm":"1","cols-md":"2","cols-lg":"4"}},e._l(e.getCards,(function(t){return n("b-col",{key:t.id},[n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.title,"img-src":t.imgSrc,"img-alt":"Image","img-top":"",tag:"article"}},[n("b-card-text",[e._v(" "+e._s(t.desc)+" ")])],1)],1)})),1)],1)},U=[],Z={mounted:function(){this.$store.dispatch(d.fetchCards)},data:function(){return{}},computed:Object(c["a"])({},Object(u["b"])(["getCards"])),methods:{}},B=Z,J=(n("15c5"),Object(p["a"])(B,T,U,!1,null,"63bf7c18",null)),G=J.exports;r["default"].use(_["a"]);var Q=[{path:"/login",name:"Login",component:L},{path:"/",name:"Calculator",component:M},{path:"/calculator",name:"Calculator",component:M},{path:"/cards",name:"Card",component:G}],Y=new _["a"]({mode:"hash",base:"/",routes:Q});Y.beforeEach((function(e,t,n){n()}));var D,X=Y,z=n("1da1"),H=n("ade3"),$=(n("96cf"),n("d4ec")),q=n("bee2"),ee=function(){function e(){Object($["a"])(this,e)}return Object(q["a"])(e,null,[{key:"saveToLocal",value:function(e,t){localStorage.setItem(e,t)}},{key:"getFromLocal",value:function(e){return localStorage.getItem(e)}},{key:"removeFromLocal",value:function(e){localStorage.removeItem(e)}},{key:"saveToSession",value:function(e,t){sessionStorage.setItem(e,t)}},{key:"getFromSession",value:function(e){return sessionStorage.getItem(e)}},{key:"removeFromSession",value:function(e){sessionStorage.removeItem(e)}},{key:"removeAllFromSession",value:function(){sessionStorage.clear()}}]),e}(),te=ee,ne={state:{userProfile:null},mutations:(D={},Object(H["a"])(D,v,(function(e,t){e.userProfile=t;var n=t&&t.username?t.username:null;te.saveToSession("username",n)})),Object(H["a"])(D,A,(function(e){te.getFromSession("username")&&(e.userProfile={username:te.getFromSession("username")})})),D),actions:{login:function(e,t){return Object(z["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.dispatch,r=e.commit,""!==t.username&&""!==t.password){n.next=3;break}return n.abrupt("return",!1);case 3:if(r(v,{username:t.username}),"/login"!==X.currentRoute.path){n.next=7;break}return n.next=7,X.push("/");case 7:case"end":return n.stop()}}),n)})))()},logout:function(e){return Object(z["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,n(v,null),te.removeFromSession("username"),"/"===X.currentRoute.path){t.next=6;break}return t.next=6,X.push("/");case 6:case"end":return t.stop()}}),t)})))()}},getters:{getUserProfile:function(e){return e.userProfile}}},re={state:{cards:[]},mutations:Object(H["a"])({},V,(function(e,t){e.cards=t})),actions:{fetchCards:function(e){return Object(z["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fetch("cards.json");case 3:return r=t.sent,t.t0=n,t.t1=V,t.next=8,r.json();case 8:t.t2=t.sent,(0,t.t0)(t.t1,t.t2);case 10:case"end":return t.stop()}}),t)})))()}},getters:{getCards:function(e){return e.cards}}};r["default"].use(u["a"]);var ae=new u["a"].Store({modules:{user:ne,card:re}}),oe=(n("7e7d"),n("5f5b")),se=n("b1e0");n("f9e3"),n("2dd8");r["default"].config.productionTip=!1,r["default"].use(oe["a"]),r["default"].use(se["a"]);new r["default"]({i18n:O,router:X,store:ae,render:function(e){return e(w)}}).$mount("#app")},"778a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABRFBMVEUAAABKVWZKVmlKVWhIVnFKVmhJVWhEVmhNWGtLVWpKVWhKVWhKVWhKVWhJVWdKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVGhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWj///+Up2+zAAAAanRSTlMAAAAAAAAAAAAACBweEAEMX7Xd4cmEJJX6zDF5/eutlp/W/rsSItxIBAEhtPteT4U98JNpj1cCM88YHd+hCZDaXK4aA6kXNOyCZmpEBcDuEcI20OeBNaQWqJ0Hi1HbRSCvfhOa+c0yZLYbpcoOngAAAAFiS0dEa1JlpZgAAAAJcEhZcwABOvYAATr2ATqxVzoAAAAHdElNRQfkCQoLKQhlZIkZAAABMklEQVQ4y72TZ0PCMBiEi6eolTrAUXEgFRVcKHVVRVBQUZy4cW99//8PsFZakg78pPctuSdpc7kIwv/IVye2BCxJrbD5aGvvCIYsdXZ1g0Mg9cjEqTcMH+PX9/XTwGDE1FBUoeEYswVGRik4Fm8wh4nxCZqcYoFpmZLwMxMzs5RiAZVINcZAeG5+AQiEKOIGAItLFNWA5RVXwPBpNQ2Ia5msE/jx1ze+0bSWcwCGr+Q37SFWgS19/XZhR2W0W9yDBUj7eoKKwid6UKwCh0e/ADguEZ2cen8COCuRcn7h+ZOCQdCl5nVMoUJclYHytVtQFaJG1EbYqazLZd3IVGA75rhuvTC3d3FzBon7B74w/sZHZ+We2OMi9vzCJ/j6hia+9u8fbO2TttrrD6dZ/Kz1cP5YX+TPZ3logobbAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTEwVDExOjQxOjA4KzAwOjAweRReRAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0xMFQxMTo0MTowOCswMDowMAhJ5vgAAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQANTEyj41TgQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA1MTIcfAPcAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE1OTk3MzgwNjh2xVBtAAAAE3RFWHRUaHVtYjo6U2l6ZQAxMTgyM0JCRnqKXQAAAEF0RVh0VGh1bWI6OlVSSQBmaWxlOi8vLi91cGxvYWRzLzU2LzJBdXJ6UHUvMjU1MS9sb2dpbl9pY29uXzE1MjgxMy5wbmeplRcAAAAAAElFTkSuQmCC"},"7e7d":function(e,t,n){},c1e0:function(e,t,n){},cabc:function(e,t,n){},d05a:function(e,t,n){"use strict";n("2558")},d20c:function(e,t,n){"use strict";n("c1e0")},edd4:function(e){e.exports=JSON.parse('{"calculator":{"title":"Calculator","formula":"Formula"}}')}});
//# sourceMappingURL=app.43b951eb.js.map