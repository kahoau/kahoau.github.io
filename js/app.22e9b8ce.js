(function(e){function t(t){for(var s,o,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},n={app:0},r=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0435":function(e){e.exports=JSON.parse('{"calculator":{"title":"計算機","formula":"方程式","sign":"符號","digit":"位數","decimal":"小數位","refresh":"刷新","answer":"答案"},"countdown":{"title":"倒數","to":"到","calendarDays":"日曆日","workingDays":"工作日"}}')},"0c7a":function(e,t,a){"use strict";a("cabc")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"49f8":function(e,t,a){var s={"./en.json":"edd4","./tc.json":"0435"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="49f8"},"49f87":function(e,t,a){"use strict";a("f7e4")},"55d9":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t),a.d(t,"app",(function(){return Re}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("SiteNav"),a("router-view")],1)},r=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[s("b-navbar-brand",{attrs:{href:"/"}},[e._v("  Vue Portal")]),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",[s("b-nav-item",{attrs:{href:"#"}},[s("b-link",{attrs:{to:"/calculator"}},[e._v("calculator")])],1),s("b-nav-item",{attrs:{href:"#"}},[s("b-link",{attrs:{to:"/countdown"}},[e._v("countdown")])],1),e.isAuthenticated?s("b-nav-item",{attrs:{href:"#"}},[s("b-link",{attrs:{to:"/cards"}},[e._v("cards")])],1):e._e()],1),s("b-navbar-nav",{staticClass:"mr-auto"},[s("b-nav-item-dropdown",{attrs:{text:"Lang"}},e._l(e.langs,(function(t,a){return s("b-dropdown-item",{key:"lang"+a,attrs:{href:"#",value:t},on:{click:function(a){return e.setLocale(t)}}},[e._v(" "+e._s(t))])})),1)],1),e.isAuthenticated?s("b-navbar-nav",[s("b-nav-item-dropdown",{scopedSlots:e._u([{key:"button-content",fn:function(){return[s("em",[e._v("User")])]},proxy:!0}],null,!1,4258386881)},[s("b-dropdown-item",{attrs:{href:"#"},on:{click:e.doLogout}},[e._v("Sign Out")])],1)],1):s("b-navbar-nav",{staticClass:"ms-auto"},[s("b-nav-item",{attrs:{href:"#"}},[s("b-link",{attrs:{to:"/login"}},[s("img",{attrs:{src:a("778a"),fluid:"",alt:"Responsive image"}})])],1)],1)],1)],1)},i=[],c=a("5530"),l=a("2f62"),u={setLocale:"setLocale",userLogin:"login",userLogout:"logout",fetchCards:"fetchCards"},d=u,f={locale:{availableLocale:["en","tc"],default:"en"}},m=f,h={data:function(){return{langs:m.locale.availableLocale}},computed:Object(c["a"])({},Object(l["b"])(["isAuthenticated"])),methods:{setLocale:function(e){this.$store.dispatch(d.setLocale,{locale:e})},doLogout:function(){this.$store.dispatch(d.userLogout,{username:this.usernameLogin,password:this.passwordLogin})}}},g=h,b=(a("8238"),a("2877")),p=Object(b["a"])(g,o,i,!1,null,"3584a6df",null),v=p.exports,j="INITIALISE_STORE",A="SET_LOCALE",V="SET_USER_PROFILE",w="SET_CARDS",W={components:{SiteNav:v},computed:{},beforeCreate:function(){this.$store.commit(j)}},y=W,K=Object(b["a"])(y,n,r,!1,null,null,null),k=K.exports,_=(a("4160"),a("159b"),a("d3b7"),a("ddb0"),a("ac1f"),a("466d"),a("a925")),C=a("d4ec"),D=a("bee2"),O=function(){function e(){Object(C["a"])(this,e)}return Object(D["a"])(e,null,[{key:"saveToLocal",value:function(e,t){localStorage.setItem(e,t)}},{key:"getFromLocal",value:function(e){return localStorage.getItem(e)}},{key:"removeFromLocal",value:function(e){localStorage.removeItem(e)}},{key:"saveToSession",value:function(e,t){sessionStorage.setItem(e,t)}},{key:"getFromSession",value:function(e){return sessionStorage.getItem(e)}},{key:"removeFromSession",value:function(e){sessionStorage.removeItem(e)}},{key:"removeAllFromSession",value:function(){sessionStorage.clear()}}]),e}(),R=O;function x(){var e=a("49f8"),t={};return e.keys().forEach((function(a){var s=a.match(/([A-Za-z0-9-_]+)\./i);if(s&&s.length>1){var n=s[1];t[n]=e(a)}})),t}s["default"].use(_["a"]);var L=new _["a"]({locale:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_LOCALE||R.getFromLocal("locale")||m.locale["default"],fallbackLocale:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_FALLBACK_LOCALE||R.getFromLocal("locale")||m.locale["default"],messages:x()}),S=a("8c4f"),E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-page"},[a("transition",{attrs:{name:"fade"}},[e.registerActive?e._e():a("div",{staticClass:"wallpaper-login"})]),a("div",{staticClass:"wallpaper-register"}),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 col-md-6 col-sm-8 mx-auto"},[e.registerActive?a("div",{staticClass:"card register",class:{error:e.emptyFields}},[a("h1",[e._v("Sign Up")]),a("form",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.usernameReg,expression:"usernameReg"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username",required:""},domProps:{value:e.usernameReg},on:{input:function(t){t.target.composing||(e.usernameReg=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordReg,expression:"passwordReg"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:e.passwordReg},on:{input:function(t){t.target.composing||(e.passwordReg=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmReg,expression:"confirmReg"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm Password",required:""},domProps:{value:e.confirmReg},on:{input:function(t){t.target.composing||(e.confirmReg=t.target.value)}}}),a("input",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:e.doRegister}}),a("p",[e._v("Already have an account? "),a("a",{attrs:{href:"#"},on:{click:function(t){e.registerActive=!e.registerActive,e.emptyFields=!1}}},[e._v("Sign in here")])])])]):a("div",{staticClass:"card login",class:{error:e.emptyFields}},[a("h1",[e._v("Sign In")]),a("form",{staticClass:"form-group",on:{submit:function(e){e.preventDefault()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.usernameLogin,expression:"usernameLogin"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username",required:""},domProps:{value:e.usernameLogin},on:{input:function(t){t.target.composing||(e.usernameLogin=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordLogin,expression:"passwordLogin"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:e.passwordLogin},on:{input:function(t){t.target.composing||(e.passwordLogin=t.target.value)}}}),a("input",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:e.doLogin}})])])])])])],1)},N=[],F={data:function(){return{registerActive:!1,usernameLogin:"",passwordLogin:"",usernameReg:"",passwordReg:"",confirmReg:"",emptyFields:!1}},methods:{doLogin:function(){""===this.usernameLogin||""===this.passwordLogin?this.emptyFields=!0:this.$store.dispatch(d.userLogin,{username:this.usernameLogin,password:this.passwordLogin})},doRegister:function(){""===this.usernameReg||""===this.passwordReg||""===this.confirmReg?this.emptyFields=!0:alert("You are now registered")}}},z=F,B=(a("0c7a"),Object(b["a"])(z,E,N,!1,null,"8a107eba",null)),P=B.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"calculator"}},[a("div",{staticClass:"col1"},[a("h2",[a("p",[e._v(e._s(e.$t("calculator.title")))])]),a("b-container",[a("b-row",[a("b-col",[e._v(" "+e._s(e.$t("calculator.sign"))+" "),a("b-form-select",{attrs:{options:e.options},model:{value:e.selectedCalculatorSign,callback:function(t){e.selectedCalculatorSign=t},expression:"selectedCalculatorSign"}})],1)],1),a("b-row",[a("b-col",[e._v(" "+e._s(e.$t("calculator.digit"))+" "),a("b-form-spinbutton",{attrs:{id:"sbutton-decimal",min:"1",max:"3",placeholder:"digits",inline:""},model:{value:e.digitsValue,callback:function(t){e.digitsValue=t},expression:"digitsValue"}})],1)],1),a("b-row",[a("b-col",[e._v(" "+e._s(e.$t("calculator.decimal"))+" "),a("b-form-spinbutton",{attrs:{id:"sbutton-decimal",min:"0",max:"3",placeholder:"decimal",inline:""},model:{value:e.decimalValue,callback:function(t){e.decimalValue=t},expression:"decimalValue"}})],1)],1),a("b-row",[a("b-col",[a("b-jumbotron",{attrs:{lead:e.$t("calculator.formula"),"text-variant":"dark"}},[a("h6",[e._v(e._s(e.num1)+" "+e._s(e.calculatorSign)+" "+e._s(e.num2)+" = "+e._s(e.answer))])]),a("form",{on:{submit:function(e){e.preventDefault()}}},[a("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.refresh()}}},[e._v(e._s(e.$t("calculator.refresh")))]),e._v("   "),a("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.calcAnswer()}}},[e._v(e._s(e.$t("calculator.answer")))]),e._v("   ")],1)],1)],1)],1)],1)])},I=[],M=(a("b680"),a("a9e3"),{mounted:function(){this.refresh()},data:function(){return{calculatorSign:"",selectedCalculatorSign:"-",options:[{text:"+",value:"+"},{text:"-",value:"-"}],digitsValue:2,decimalValue:2,num1:"",num2:"",answer:""}},methods:{genRandomNum:function(){return Number(Math.random()*Math.pow(10,this.digitsValue)).toFixed(this.decimalValue)},refresh:function(){if(this.num1=this.genRandomNum(),this.num2=this.genRandomNum(),Number(this.num2)>Number(this.num1)){var e=this.num1;this.num1=this.num2,this.num2=e}this.calculatorSign=this.selectedCalculatorSign,this.answer=""},calcAnswer:function(){var e="-"==this.calculatorSign?Number(this.num1)-Number(this.num2):Number(this.num1)+Number(this.num2);this.answer=e.toFixed(this.decimalValue)}}}),Z=M,U=(a("f203"),Object(b["a"])(Z,T,I,!1,null,"6aa896be",null)),$=U.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"countdown"}},[a("div",{staticClass:"col1"},[a("h5",[a("p",[e._v(e._s(e.$t("countdown.title"))+" "+e._s(e.$t("countdown.to"))+" "+e._s(e.getDec2021BonusDay()))])]),a("count-down",{attrs:{"calendar-days":e.getCalendarDays(e.getDec2021BonusDay()),"working-days":e.getWorkingDays(e.getDec2021BonusDay())}})],1),a("div",{staticClass:"col1"},[a("h5",[a("p",[e._v(e._s(e.$t("countdown.title"))+" "+e._s(e.$t("countdown.to"))+" "+e._s(e.getApr2022BonusDay()))])]),a("count-down",{attrs:{"calendar-days":e.getCalendarDays(e.getApr2022BonusDay()),"working-days":e.getWorkingDays(e.getApr2022BonusDay())}})],1)])},G=[],Q=(a("caad"),a("45fc"),a("7f45")),Y=a.n(Q),H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("b-row",[a("b-col",[a("div",{staticClass:"clockdiv"},[a("div",[a("span",{staticClass:"days day"},[e._v(e._s(e.calendarDays))])])]),e._v(" "+e._s(e.$t("countdown.calendarDays"))+" ")])],1),a("b-row",[a("b-col",[a("div",{staticClass:"clockdiv"},[a("div",[a("span",{staticClass:"days day"},[e._v(e._s(e.workingDays))])])]),e._v(" "+e._s(e.$t("countdown.workingDays"))+" ")])],1)],1)},X=[],q={props:["calendarDays","workingDays"],methods:{}},ee=q,te=(a("b45f"),Object(b["a"])(ee,H,X,!1,null,"33e6dd2e",null)),ae=te.exports,se={components:{CountDown:ae},mounted:function(){},data:function(){return{}},methods:{getDec2021BonusDay:function(){return"2021/12/20"},getApr2022BonusDay:function(){return"2022/04/20"},getCalendarDays:function(e){var t=this.getDate().startOf("day"),a=this.getDate(e).startOf("day");return a.diff(t,"days")},getWorkingDays:function(e){var t=this.getDate().startOf("day"),a=this.getDate(e).add(1,"days").startOf("day"),s=t.clone(),n=0;while(a.diff(s.add(1,"days"))>0)[0,6].includes(s.day())||this.isNonWeekendPublicHolidays(s)||n++;return n},isNonWeekendPublicHolidays:function(e){return this.getNonWeekendPublicHolidays().some((function(t){return t.isSame(e,"day")}))},getNonWeekendPublicHolidays:function(){return[this.getDate("2021-01-01"),this.getDate("2021-02-12"),this.getDate("2021-02-15"),this.getDate("2021-04-02"),this.getDate("2021-04-05"),this.getDate("2021-04-06"),this.getDate("2021-05-19"),this.getDate("2021-06-14"),this.getDate("2021-07-01"),this.getDate("2021-09-22"),this.getDate("2021-10-01"),this.getDate("2021-10-14"),this.getDate("2021-12-27"),this.getDate("2022-02-01"),this.getDate("2022-02-02"),this.getDate("2022-02-03"),this.getDate("2022-04-05"),this.getDate("2022-04-15"),this.getDate("2022-04-18"),this.getDate("2022-05-02"),this.getDate("2022-05-09"),this.getDate("2022-06-03"),this.getDate("2022-07-01"),this.getDate("2022-09-12"),this.getDate("2022-10-04"),this.getDate("2022-12-26"),this.getDate("2022-12-27")]},getDate:function(e){return void 0!==e?Y.a.tz(e,"Asia/Taipei").startOf("day"):Y.a.tz("Asia/Taipei").startOf("day")}}},ne=se,re=Object(b["a"])(ne,J,G,!1,null,"d343c614",null),oe=re.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"bv-example-row",attrs:{fluid:""}},[a("b-row",{attrs:{cols:"1","cols-sm":"2","cols-md":"3","cols-lg":"4"}},e._l(e.getCards,(function(e){return a("b-col",{key:e.id,staticClass:"mb-2",attrs:{col:"","no-gutters":""}},[a("post-card",{key:e.id,attrs:{name:e.name,desc:e.desc,id:e.id,"img-src":e.imgSrc}})],1)})),1)],1)},ce=[],le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{directives:[{name:"b-modal",rawName:"v-b-modal",value:e.modalId,expression:"modalId"}],staticClass:"h-100",attrs:{title:e.name,"img-src":e.imgSrc,"border-variant":"secondary","img-width":"100%",align:"center"}},[a("b-modal",{attrs:{id:e.modalId,title:e.name,"ok-only":""}},[a("div",{staticClass:"modal-body"},[a("img",{staticClass:"modal-img",attrs:{src:e.imgSrc,alt:"Responsive image"}}),a("p",[e._v(e._s(e.desc))])])])],1)},ue=[],de={props:["id","name","desc","imgSrc"],computed:{modalId:function(){return"modal-".concat(this.id)}},methods:{}},fe=de,me=(a("49f87"),Object(b["a"])(fe,le,ue,!1,null,"8ec5643e",null)),he=me.exports,ge={components:{PostCard:he},mounted:function(){this.$store.dispatch(d.fetchCards)},data:function(){return{}},computed:Object(c["a"])({},Object(l["b"])(["getCards"])),methods:{}},be=ge,pe=(a("cafe"),Object(b["a"])(be,ie,ce,!1,null,"992a0076",null)),ve=pe.exports;s["default"].use(S["a"]);var je=[{path:"/login",name:"Login",component:P},{path:"/",component:$},{path:"/calculator",name:"CalculatorView",component:$},{path:"/countdown",name:"CountDown",component:oe},{path:"/cards",name:"CardView",component:ve}],Ae=new S["a"]({mode:"hash",base:"/",routes:je});Ae.beforeEach((function(e,t,a){a()}));var Ve,we=Ae,We=a("ade3"),ye={state:{locale:R.getFromLocal("locale")||m.locale["default"]},mutations:Object(We["a"])({},A,(function(e,t){Re.$i18n.locale=t.locale,e.locale=t.locale,R.saveToLocal("locale",t.locale)})),actions:{setLocale:function(e,t){e.dispatch;var a=e.commit;a(A,{locale:t.locale})}},getters:{getLocale:function(e){return e.locale}}},Ke=a("1da1"),ke=(a("96cf"),{state:{userProfile:null},mutations:(Ve={},Object(We["a"])(Ve,V,(function(e,t){e.userProfile=t;var a=t&&t.username?t.username:null;R.saveToSession("username",a)})),Object(We["a"])(Ve,j,(function(e){R.getFromSession("username")&&(e.userProfile={username:R.getFromSession("username")})})),Ve),actions:{login:function(e,t){return Object(Ke["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.dispatch,s=e.commit,""!==t.username&&""!==t.password){a.next=3;break}return a.abrupt("return",!1);case 3:if(s(V,{username:t.username}),"/login"!==we.currentRoute.path){a.next=7;break}return a.next=7,we.push("/");case 7:case"end":return a.stop()}}),a)})))()},logout:function(e){return Object(Ke["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.commit,a(V,null),R.removeFromSession("username"),"/"===we.currentRoute.path){t.next=6;break}return t.next=6,we.push("/");case 6:case"end":return t.stop()}}),t)})))()}},getters:{isAuthenticated:function(e){return e.userProfile}}}),_e={state:{cards:[]},mutations:Object(We["a"])({},w,(function(e,t){e.cards=t})),actions:{fetchCards:function(e){return Object(Ke["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,fetch("cards.json");case 3:return s=t.sent,t.t0=a,t.t1=w,t.next=8,s.json();case 8:t.t2=t.sent,(0,t.t0)(t.t1,t.t2);case 10:case"end":return t.stop()}}),t)})))()}},getters:{getCards:function(e){return e.cards}}};s["default"].use(l["a"]);var Ce=new l["a"].Store({modules:{settings:ye,user:ke,card:_e}}),De=(a("7e7d"),a("5f5b")),Oe=a("b1e0");a("f9e3"),a("2dd8");s["default"].config.productionTip=!1,s["default"].use(De["a"]),s["default"].use(Oe["a"]);var Re=new s["default"]({i18n:L,router:we,store:Ce,render:function(e){return e(k)}}).$mount("#app")},"778a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABRFBMVEUAAABKVWZKVmlKVWhIVnFKVmhJVWhEVmhNWGtLVWpKVWhKVWhKVWhKVWhJVWdKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVGhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWhKVWj///+Up2+zAAAAanRSTlMAAAAAAAAAAAAACBweEAEMX7Xd4cmEJJX6zDF5/eutlp/W/rsSItxIBAEhtPteT4U98JNpj1cCM88YHd+hCZDaXK4aA6kXNOyCZmpEBcDuEcI20OeBNaQWqJ0Hi1HbRSCvfhOa+c0yZLYbpcoOngAAAAFiS0dEa1JlpZgAAAAJcEhZcwABOvYAATr2ATqxVzoAAAAHdElNRQfkCQoLKQhlZIkZAAABMklEQVQ4y72TZ0PCMBiEi6eolTrAUXEgFRVcKHVVRVBQUZy4cW99//8PsFZakg78pPctuSdpc7kIwv/IVye2BCxJrbD5aGvvCIYsdXZ1g0Mg9cjEqTcMH+PX9/XTwGDE1FBUoeEYswVGRik4Fm8wh4nxCZqcYoFpmZLwMxMzs5RiAZVINcZAeG5+AQiEKOIGAItLFNWA5RVXwPBpNQ2Ia5msE/jx1ze+0bSWcwCGr+Q37SFWgS19/XZhR2W0W9yDBUj7eoKKwid6UKwCh0e/ADguEZ2cen8COCuRcn7h+ZOCQdCl5nVMoUJclYHytVtQFaJG1EbYqazLZd3IVGA75rhuvTC3d3FzBon7B74w/sZHZ+We2OMi9vzCJ/j6hia+9u8fbO2TttrrD6dZ/Kz1cP5YX+TPZ3logobbAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTEwVDExOjQxOjA4KzAwOjAweRReRAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0xMFQxMTo0MTowOCswMDowMAhJ5vgAAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQANTEyj41TgQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA1MTIcfAPcAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE1OTk3MzgwNjh2xVBtAAAAE3RFWHRUaHVtYjo6U2l6ZQAxMTgyM0JCRnqKXQAAAEF0RVh0VGh1bWI6OlVSSQBmaWxlOi8vLi91cGxvYWRzLzU2LzJBdXJ6UHUvMjU1MS9sb2dpbl9pY29uXzE1MjgxMy5wbmeplRcAAAAAAElFTkSuQmCC"},"7e7d":function(e,t,a){},"809e":function(e,t,a){},8238:function(e,t,a){"use strict";a("55d9")},aee2:function(e,t,a){},b45f:function(e,t,a){"use strict";a("809e")},c8df:function(e,t,a){},cabc:function(e,t,a){},cafe:function(e,t,a){"use strict";a("c8df")},edd4:function(e){e.exports=JSON.parse('{"calculator":{"title":"Calculator","formula":"Formula","sign":"Sign","digit":"Digit","decimal":"Decimal","refresh":"Refresh","answer":"Answer"},"countdown":{"title":"Count Down","to":"to","calendarDays":"Calendar Days","workingDays":"Working Days"}}')},f203:function(e,t,a){"use strict";a("aee2")},f7e4:function(e,t,a){}});
//# sourceMappingURL=app.22e9b8ce.js.map