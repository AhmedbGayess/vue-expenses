(function(e){function t(t){for(var n,o,i=t[0],c=t[1],u=t[2],d=0,f=[];d<i.length;d++)o=i[d],a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,i=1;i<s.length;i++){var c=s[i];0!==a[c]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},a={app:0},r=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"02c0":function(e,t,s){},"0532":function(e,t,s){},"0c30":function(e,t,s){"use strict";var n=s("4b87"),a=s.n(n);a.a},"0fcc":function(e,t,s){"use strict";var n=s("49cd"),a=s.n(n);a.a},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){var t=n[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"49cd":function(e,t,s){},"4b87":function(e,t,s){},"4d12":function(e,t,s){},"4f70":function(e,t,s){"use strict";var n=s("4d12"),a=s.n(n);a.a},"56d7":function(e,t,s){"use strict";s.r(t);var n=s("0a0d"),a=s.n(n),r=(s("cadf"),s("551c"),s("097d"),s("2b0e")),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Header"),s("div",{staticClass:"container mb-5"},[s("router-view")],1)],1)},i=[],c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"navbar navbar-dark bg-dark"},[s("div",{staticClass:"container"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/dashboard"}},[e._v("Vue Expenses")]),s("a",{directives:[{name:"show",rawName:"v-show",value:e.loggedIn,expression:"loggedIn"}],staticClass:"nav-link logout",attrs:{href:"#"},on:{click:e.logoutUser}},[e._v("Logout")])],1)])},u=[],l={computed:{loggedIn:function(){return this.$store.getters.isLoggedIn}},methods:{logoutUser:function(){this.$store.commit("LOGOUT")}}},d=l,f=(s("7fe8"),s("2877")),p=Object(f["a"])(d,c,u,!1,null,"6ae02efe",null);p.options.__file="Header.vue";var m=p.exports,v={components:{Header:m}},b=v,h=Object(f["a"])(b,o,i,!1,null,null,null);h.options.__file="App.vue";var _=h.exports,j=s("8c4f"),x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",{staticClass:"text-center"},[e._v("Login")]),s("login-form")],1)},g=[],E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("form",{on:{submit:e.loginUser}},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2",attrs:{for:"email"}},[e._v("Email")]),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e.errors.email?s("div",{staticClass:"invalid"},[s("small",[e._v(e._s(e.errors.email))])]):e._e()])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2",attrs:{for:"password"}},[e._v("Password")]),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e.errors.password?s("div",{staticClass:"invalid"},[s("small",[e._v(e._s(e.errors.password))])]):e._e()])]),e._m(0),s("router-link",{attrs:{to:"create_user"}},[s("p",{staticClass:"text-center"},[e._v("Create Account")])])],1)])},C=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn btn-primary text-center mb-5",attrs:{type:"submit"}},[e._v("Login")])])}],w={data:function(){return{email:"",password:""}},methods:{loginUser:function(e){e.preventDefault();var t={email:this.email,password:this.password};this.$store.dispatch("login",t)}},computed:{errors:function(){return this.$store.getters.errors}},created:function(){this.$store.commit("CLEAR_ERRORS")}},y=w,k=(s("0c30"),Object(f["a"])(y,E,C,!1,null,"6ff443e0",null));k.options.__file="LoginForm.vue";var O=k.exports,S={components:{LoginForm:O}},R=S,$=(s("4f70"),Object(f["a"])(R,x,g,!1,null,"2abbfee4",null));$.options.__file="Login.vue";var P=$.exports,N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",{staticClass:"text-center"},[e._v("Create User")]),s("create-user-from")],1)},T=[],U=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("form",{on:{submit:e.createUser}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"firstname"}},[e._v("First Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.firstname,expression:"firstname"}],staticClass:"form-control",attrs:{type:"text",id:"firstname"},domProps:{value:e.firstname},on:{input:function(t){t.target.composing||(e.firstname=t.target.value)}}}),e.errors.firstname?s("div",{staticClass:"invalid"},[s("small",[e._v(e._s(e.errors.firstname))])]):e._e()]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"lastname"}},[e._v("Last Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.lastname,expression:"lastname"}],staticClass:"form-control",attrs:{type:"text",id:"lastname"},domProps:{value:e.lastname},on:{input:function(t){t.target.composing||(e.lastname=t.target.value)}}}),e.errors.lastname?s("div",{staticClass:"invalid"},[s("small",[e._v(e._s(e.errors.lastname))])]):e._e()]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"email"}},[e._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e.errors.email?s("div",{staticClass:"invalid"},[s("small",[e._v(e._s(e.errors.email))])]):e._e()]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[e._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e.errors.password?s("div",{staticClass:"invalid"},[s("small",[e._v(e._s(e.errors.password))])]):e._e()]),e._m(0)])])},z=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Login")])])}],A=s("bc3a"),L=s.n(A),D=L.a.create({baseURL:"api/"}),F={data:function(){return{firstname:"",lastname:"",email:"",password:""}},methods:{createUser:function(e){e.preventDefault();var t={firstname:this.firstname,lastname:this.lastname,email:this.email,password:this.password};this.$store.dispatch("registerUser",t)}},computed:{errors:function(){return this.$store.getters.errors}},created:function(){this.$store.commit("CLEAR_ERRORS")}},I=F,M=(s("0fcc"),Object(f["a"])(I,U,z,!1,null,"373863b3",null));M.options.__file="CreateUserForm.vue";var X=M.exports,q={components:{CreateUserFrom:X}},Y=q,H=(s("d684"),Object(f["a"])(Y,N,T,!1,null,"3a83fce6",null));H.options.__file="CreateUser.vue";var V=H.exports,G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",{staticClass:"text-center"},[e._v("Dashboard")]),s("h5",{staticClass:"text-center mb-3"},[e._v("Welcome "+e._s(e.user))]),s("expense-list")],1)},J=[],W=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("button",{staticClass:"btn btn-success mb-5",on:{click:e.addExpense}},[e._v("+Add Expense")]),s("div",{staticClass:"list-group"},[e.expenses.length>0?s("div",[e._m(0),e._l(e.expenses,function(e){return s("expense-list-item",{key:e._id,attrs:{expense:e}})})],2):s("div",{staticClass:"card"},[e._m(1)])])])},B=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"list-group-item list-group-item-action"},[s("h3",[e._v("Expenses")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card-body text-center"},[s("i",[e._v("No expenses saved")])])}],K=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"list-group-item list-group-item-action"},[s("router-link",{attrs:{to:e.link}},[s("p",[s("strong",[e._v(e._s(e.expense.description))])]),s("p",[e._v(e._s(e.expense.amount))]),s("p",[e._v(e._s(e.date))])]),s("button",{staticClass:"btn btn-danger",on:{click:e.deleteExpense}},[e._v("Delete")])],1)},Q=[],Z=s("c1df"),ee=s.n(Z),te={props:{expense:{type:Object,required:!0}},computed:{date:function(){return ee()(this.expense.date).format("YYYY/MM/DD")},link:function(){return"/edit_expense/".concat(this.expense._id)}},methods:{deleteExpense:function(){this.$store.dispatch("removeExpense",this.expense._id)}}},se=te,ne=(s("8148"),Object(f["a"])(se,K,Q,!1,null,"4ecfcf2e",null));ne.options.__file="ExpenseListItem.vue";var ae=ne.exports,re={methods:{addExpense:function(){this.$router.push("/create_expense")}},created:function(){this.$store.dispatch("setExpenses")},components:{ExpenseListItem:ae},computed:{expenses:function(){return this.$store.getters.expenses}}},oe=re,ie=Object(f["a"])(oe,W,B,!1,null,"621be981",null);ie.options.__file="ExpensesList.vue";var ce=ie.exports,ue={components:{ExpenseList:ce},computed:{user:function(){return this.$store.getters.user}}},le=ue,de=Object(f["a"])(le,G,J,!1,null,null,null);de.options.__file="Dashboard.vue";var fe=de.exports,pe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",{staticClass:"text-center"},[e._v("Create Expense")]),s("expense-form",{attrs:{submitExpense:e.submitExpense}})],1)},me=[],ve=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("form",{on:{submit:e.submit}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"description"}},[e._v("Description")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",id:"description"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),e.errors.description?s("div",{staticClass:"invalid"},[s("small",[e._v(e._s(e.errors.description))])]):e._e()]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"amount"}},[e._v("Amount")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],staticClass:"form-control",attrs:{type:"number",id:"amount"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}}),e.errors.amount?s("div",{staticClass:"invalid"},[s("small",[e._v(e._s(e.errors.amount))])]):e._e()]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"date"}},[e._v("Date")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],staticClass:"form-control",attrs:{type:"date",id:"date"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"note"}},[e._v("Note (Optional)")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.note,expression:"note"}],staticClass:"form-control",attrs:{id:"note"},domProps:{value:e.note},on:{input:function(t){t.target.composing||(e.note=t.target.value)}}})]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")])])])},be=[],he={data:function(){return{description:"",amount:0,date:"",note:""}},methods:{submit:function(e){e.preventDefault();var t={description:this.description,amount:this.amount,date:this.date,note:this.note};this.submitExpense(t)}},props:{submitExpense:{type:Function,required:!0},expense:{type:Object}},computed:{errors:function(){return this.$store.getters.errors}},created:function(){this.expense&&(this.description=this.expense.description,this.amount=this.expense.amount,this.date=this.expense.date,this.note=this.expense.note),this.$store.commit("CLEAR_ERRORS")}},_e=he,je=(s("c7c1"),Object(f["a"])(_e,ve,be,!1,null,"27fc6094",null));je.options.__file="ExpenseForm.vue";var xe=je.exports,ge={components:{ExpenseForm:xe},methods:{submitExpense:function(e){this.$store.dispatch("addExpense",e)}}},Ee=ge,Ce=(s("c40b"),Object(f["a"])(Ee,pe,me,!1,null,"f00697fa",null));Ce.options.__file="CreateExpense.vue";var we=Ce.exports,ye=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",{staticClass:"text-center"},[e._v("Edit Expense")]),s("expense-form",{attrs:{submitExpense:e.submitExpense,expense:e.expense}})],1)},ke=[],Oe=(s("7514"),{name:"EditExpense",components:{ExpenseForm:xe},methods:{submitExpense:function(e){this.$store.dispatch("editExpense",{id:this.expense._id,expense:e})}},computed:{expense:function(){var e=this;return this.$store.getters.expenses.find(function(t){return t._id===e.$route.params.id})}}}),Se=Oe,Re=(s("f6a6"),Object(f["a"])(Se,ye,ke,!1,null,"aaefcfd2",null));Re.options.__file="EditExpense.vue";var $e=Re.exports,Pe=s("2f62"),Ne=s("75fc"),Te={state:{expenses:[]},mutations:{SET_EXPENSES:function(e,t){e.expenses=t},ADD_EXPENSE:function(e,t){e.expenses=[].concat(Object(Ne["a"])(e.expenses),[t]),Me.push("/dashboard")},REMOVE_EXPENSE:function(e,t){e.expenses=e.expenses.filter(function(e){return e._id!==t})},UPDATE_EXPENSE:function(e,t){var s=e.expenses.find(function(e){return e.id===t.id});s&&(s=t),Me.push("/dashboard")}},actions:{setExpenses:function(e){var t=e.commit;D.get("expenses").then(function(e){t("SET_EXPENSES",e.data)}).catch(function(e){console.log(e)})},addExpense:function(e,t){var s=e.commit;D.post("expenses",t).then(function(e){s("ADD_EXPENSE",e)}).catch(function(e){s("SET_ERRORS",e.response.data)})},removeExpense:function(e,t){var s=e.commit;D.delete("expenses/".concat(t)).then(function(){s("REMOVE_EXPENSE",t)}).catch(function(e){return console.log(e)})},editExpense:function(e,t){var s=e.commit,n=t.id,a=t.expense;D.patch("expenses/".concat(n),a).then(function(e){s("UPDATE_EXPENSE",e)}).catch(function(e){s("SET_ERRORS",e.response.data)})}},getters:{expenses:function(e){return e.expenses}}},Ue=s("04e1"),ze=s.n(Ue),Ae=function(e){e?L.a.defaults.headers.common["Authorization"]=e:delete L.a.defaults.headers.common["Authorization"]},Le=Ae,De={state:{isAuthenticated:!1,user:{},errors:{}},mutations:{SET_CURRENT_USER:function(e,t){e.user=t,e.isAuthenticated=!0,Me.push("/dashboard")},LOGOUT:function(e){localStorage.removeItem("jwtToken"),Le(!1),e.user={},e.isAuthenticated=!1,Me.push("/")}},actions:{login:function(e,t){var s=e.commit;D.post("users/login",t).then(function(e){var t=e.data.token;localStorage.setItem("jwtToken",t),Le(t);var n=ze()(t);s("SET_CURRENT_USER",n)}).catch(function(e){s("SET_ERRORS",e.response.data)})},registerUser:function(e,t){var s=e.commit;D.post("users/register",t).then(function(e){Me.push("/")}).catch(function(e){s("SET_ERRORS",e.response.data)})}},getters:{isLoggedIn:function(e){return e.isAuthenticated},user:function(e){var t=e.user,s=t.firstname,n=t.lastname;return"".concat(s," ").concat(n)}}},Fe={state:{errors:{}},mutations:{SET_ERRORS:function(e,t){e.errors=t},CLEAR_ERRORS:function(e){e.errors={}}},getters:{errors:function(e){return e.errors}}};r["a"].use(Pe["a"]);var Ie=new Pe["a"].Store({modules:{expenses:Te,auth:De,errors:Fe}});r["a"].use(j["a"]);var Me=new j["a"]({routes:[{name:"Login",path:"/",component:P,beforeEnter:function(e,t,s){Ie.state.auth.isAuthenticated?s("/dashboard"):s()}},{name:"CreateUserPage",path:"/create_user",component:V,beforeEnter:function(e,t,s){Ie.state.auth.isAuthenticated?s("/"):s()}},{name:"Dashboard",path:"/dashboard",component:fe,beforeEnter:function(e,t,s){Ie.state.auth.isAuthenticated?s():s("/")}},{name:"CreateExpensePage",path:"/create_expense",component:we,beforeEnter:function(e,t,s){Ie.state.auth.isAuthenticated?s():s("/")}},{name:"EditExpensePage",path:"/edit_expense/:id",component:$e,beforeEnter:function(e,t,s){Ie.state.isAuthenticated?s():s("/")}}],mode:"history"});s("ab8b");if(r["a"].config.productionTip=!1,localStorage.jwtToken){Le(localStorage.jwtToken);var Xe=ze()(localStorage.jwtToken);Ie.commit("SET_CURRENT_USER",Xe);var qe=a()()/1e3;Xe.exp<qe&&(Ie.dispatch("logout"),Me.push("/"))}new r["a"]({router:Me,store:Ie,render:function(e){return e(_)}}).$mount("#app")},7303:function(e,t,s){},"7fe8":function(e,t,s){"use strict";var n=s("7303"),a=s.n(n);a.a},8148:function(e,t,s){"use strict";var n=s("f920"),a=s.n(n);a.a},b38e:function(e,t,s){},bf97:function(e,t,s){},c40b:function(e,t,s){"use strict";var n=s("b38e"),a=s.n(n);a.a},c7c1:function(e,t,s){"use strict";var n=s("0532"),a=s.n(n);a.a},d684:function(e,t,s){"use strict";var n=s("02c0"),a=s.n(n);a.a},f6a6:function(e,t,s){"use strict";var n=s("bf97"),a=s.n(n);a.a},f920:function(e,t,s){}});
//# sourceMappingURL=app.c84ea66d.js.map