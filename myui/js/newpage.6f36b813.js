(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["newpage"],{"036e":function(t,e,n){},"159b":function(t,e,n){var r=n("da84"),a=n("fdbc"),i=n("17c2"),o=n("9112");for(var s in a){var l=r[s],c=l&&l.prototype;if(c&&c.forEach!==i)try{o(c,"forEach",i)}catch(u){c.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,a=n("a640"),i=n("ae40"),o=a("forEach"),s=i("forEach");t.exports=o&&s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var r=n("d039"),a=n("b622"),i=n("2d00"),o=a("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"223d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("H3",[t._v("Welcome Page2")])],1)},a=[],i=n("2877"),o={},s=Object(i["a"])(o,r,a,!1,null,null,null);e["default"]=s.exports},2286:function(t,e,n){"use strict";var r=n("3376"),a=n.n(r);a.a},3376:function(t,e,n){},4160:function(t,e,n){"use strict";var r=n("23e7"),a=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"4de4":function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").filter,i=n("1dde"),o=n("ae40"),s=i("filter"),l=o("filter");r({target:"Array",proto:!0,forced:!s||!l},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,n){var r=n("861d"),a=n("e8b5"),i=n("b622"),o=i("species");t.exports=function(t,e){var n;return a(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"6c93":function(t,e,n){"use strict";var r=n("9937"),a=n.n(r);a.a},7687:function(t,e,n){"use strict";var r=n("036e"),a=n.n(r);a.a},9915:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("el-container",{staticStyle:{height:"500px",border:"1px solid #eee"}},[n("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[n("el-menu",{attrs:{"default-openeds":["1","3"]}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-message"}),t._v("导航一")]),n("el-menu-item-group",[n("template",{slot:"title"},[t._v("分组一")]),n("el-menu-item",{attrs:{index:"1-1"}},[t._v("选项1")]),n("el-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],2),n("el-menu-item-group",{attrs:{title:"分组2"}},[n("el-menu-item",{attrs:{index:"1-3"}},[t._v("选项3")])],1),n("el-submenu",{attrs:{index:"1-4"}},[n("template",{slot:"title"},[t._v("选项4")]),n("el-menu-item",{attrs:{index:"1-4-1"}},[t._v("选项4-1")])],2)],2),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),t._v("导航二")]),n("el-menu-item-group",[n("template",{slot:"title"},[t._v("分组一")]),n("el-menu-item",{attrs:{index:"2-1"}},[t._v("选项1")]),n("el-menu-item",{attrs:{index:"2-2"}},[t._v("选项2")])],2),n("el-menu-item-group",{attrs:{title:"分组2"}},[n("el-menu-item",{attrs:{index:"2-3"}},[t._v("选项3")])],1),n("el-submenu",{attrs:{index:"2-4"}},[n("template",{slot:"title"},[t._v("选项4")]),n("el-menu-item",{attrs:{index:"2-4-1"}},[t._v("选项4-1")])],2)],2),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-setting"}),t._v("导航三")]),n("el-menu-item-group",[n("template",{slot:"title"},[t._v("分组一")]),n("el-menu-item",{attrs:{index:"3-1"}},[t._v("选项1")]),n("el-menu-item",{attrs:{index:"3-2"}},[t._v("选项2")])],2),n("el-menu-item-group",{attrs:{title:"分组2"}},[n("el-menu-item",{attrs:{index:"3-3"}},[t._v("选项3")])],1),n("el-submenu",{attrs:{index:"3-4"}},[n("template",{slot:"title"},[t._v("选项4")]),n("el-menu-item",{attrs:{index:"3-4-1"}},[t._v("选项4-1")])],2)],2)],1)],1),n("el-container",[n("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[n("el-dropdown",[n("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[t._v("查看")]),n("el-dropdown-item",[t._v("新增")]),n("el-dropdown-item",[t._v("删除")])],1)],1),n("span",[t._v("王小虎")])],1),n("el-main",[n("el-table",{attrs:{data:t.tableData}},[n("el-table-column",{attrs:{prop:"date",label:"日期",width:"140"}}),n("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),n("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)],1)],1)],1)},a=[],i=(n("cb29"),{data:function(){var t={date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"};return{tableData:Array(20).fill(t)}}}),o=i,s=(n("6c93"),n("2877")),l=Object(s["a"])(o,r,a,!1,null,null,null);e["default"]=l.exports},9937:function(t,e,n){},a55b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login_container"},[n("div",{staticClass:"login_box"},[t._m(0),n("el-form",{ref:"loginformref",staticClass:"login_form",attrs:{model:t.loginform,rules:t.loginrules,"label-position":"left"}},[n("el-form-item",{attrs:{label:"用户名","label-width":"80px",prop:"username"}},[n("el-input",{attrs:{"prefix-icon":"el-icon-user-solid",placeholder:"please input you username"},model:{value:t.loginform.username,callback:function(e){t.$set(t.loginform,"username",e)},expression:"loginform.username"}})],1),n("el-form-item",{attrs:{label:"密码","label-width":"80px",prop:"password"}},[n("el-input",{attrs:{"prefix-icon":"el-icon-lock",placeholder:"请输入密码","show-password":""},model:{value:t.loginform.password,callback:function(e){t.$set(t.loginform,"password",e)},expression:"loginform.password"}})],1),n("el-form-item",{staticClass:"btns"},[n("el-button",{attrs:{type:"primary"},on:{click:t.login}},[t._v("login")]),n("el-button",{attrs:{type:"info"},on:{click:t.resetloginform}},[t._v("reset")]),n("el-button",{attrs:{type:"primary"},on:{click:t.register}},[t._v("register")])],1)],1)],1)])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"avatar_box"},[r("img",{attrs:{src:n("cf05"),alt:""}})])}],i=(n("96cf"),n("1da1")),o={data:function(){return{loginform:{username:"admin",password:"1234567"},loginrules:{username:[{required:!0,message:"用户名不能为空",trigger:"blur"},{min:5,max:12,message:"长度在 5 到 12 个字符",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:12,message:"长度在 6 到 12 个字符",trigger:"blur"}]}}},methods:{resetloginform:function(){this.$refs.loginformref.resetFields()},register:function(){var t=this;this.$refs.loginformref.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n&&t.$http({method:"post",url:"api/register",data:t.$Qs.stringify(t.loginform)}).then((function(e){if(400==e.code)return console.log("user is exist2"),void t.$message.error("该用户名已存在");200==e.code?(console.log("register succsee"),t.$message({message:"恭喜你，注册成功",type:"success"})):console.log("error")}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},login:function(){var t=this;this.$refs.loginformref.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n){e.next=3;break}e.next=7;break;case 3:return e.next=5,t.$http({method:"post",url:"api/login",data:t.$Qs.stringify(t.loginform)});case 5:a=e.sent,200==a.code&&(t.$store.dispatch("settoken",a.data),window.localStorage.setItem("token",t.$store.state.token),t.$message({message:"登录成功",type:"success"}),t.$router.push("/tabsmain"));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},login2:function(){var t=this;this.$refs.loginformref.validate((function(e,n){if(console.log(e),e){var r="sys/try/ajax/json_demo.json";console.log("url",r);var a=t.$http.get("sys/try/ajax/json_demo.json","");console.log("result",a.then((function(t){console.log("then",t)})))}else;}))}}},s=o,l=(n("d6db"),n("2877")),c=Object(l["a"])(s,r,a,!1,null,null,null);e["default"]=c.exports},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ab3a:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8}},[n("el-input",{attrs:{placeholder:"请输入内容"},on:{blur:t.saveHistoryData},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),n("el-col",{attrs:{span:4}},[n("el-button",{attrs:{type:"primary"}},[t._v("添加用户")])],1)],1),n("el-table",{attrs:{data:t.userList,stripe:"",border:""}},[n("el-table-column",{attrs:{prop:"username",label:"用户名"}}),n("el-table-column",{attrs:{prop:"password",label:"密码"}}),n("el-table-column",{attrs:{prop:"name",label:"姓名"}})],1)],1)},a=[],i=(n("96cf"),n("1da1")),o={data:function(){return{input1:"",pageInfo:{page:1,size:5,total:0},userList:[]}},created:function(){this.setHistoryData(),this.getUserlist()},methods:{getUserlist:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return window.localStorage.getItem("token"),t.next=3,this.$http.get("api/getuserlist",{params:this.pageInfo});case 3:e=t.sent,200!=e.code?this.$message.error("获取用户列表失败"):(this.userList=e.data.object,this.pageInfo.total=e.data.total);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),saveHistoryData:function(){console.log("savein"),window.sessionStorage.setItem("userinput1",this.input1)},setHistoryData:function(){console.log(window.sessionStorage.getItem("userinput1")),window.sessionStorage.getItem("userinput1")&&(this.input1=window.sessionStorage.getItem("userinput1"))}}},s=o,l=(n("2286"),n("2877")),c=Object(l["a"])(s,r,a,!1,null,null,null);e["default"]=c.exports},ae40:function(t,e,n){var r=n("83ab"),a=n("d039"),i=n("5135"),o=Object.defineProperty,s={},l=function(t){throw t};t.exports=function(t,e){if(i(s,t))return s[t];e||(e={});var n=[][t],c=!!i(e,"ACCESSORS")&&e.ACCESSORS,u=i(e,0)?e[0]:l,d=i(e,1)?e[1]:void 0;return s[t]=!!n&&!a((function(){if(c&&!r)return!0;var t={length:-1};c?o(t,1,{enumerable:!0,get:l}):t[1]=1,n.call(t,u,d)}))}},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,i=Function.prototype,o=i.toString,s=/^\s*function ([^ (]*)/,l="name";!r||l in i||a(i,l,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},b727:function(t,e,n){var r=n("0366"),a=n("44ad"),i=n("7b0b"),o=n("50c4"),s=n("65f0"),l=[].push,c=function(t){var e=1==t,n=2==t,c=3==t,u=4==t,d=6==t,f=5==t||d;return function(m,p,g,h){for(var b,v,w=i(m),x=a(w),_=r(p,g,3),y=o(x.length),k=0,S=h||s,C=e?S(m,y):n?S(m,0):void 0;y>k;k++)if((f||k in x)&&(b=x[k],v=_(b,k,w),t))if(e)C[k]=v;else if(v)switch(t){case 3:return!0;case 5:return b;case 6:return k;case 2:l.call(C,b)}else if(u)return!1;return d?-1:c||u?u:C}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},d6db:function(t,e,n){"use strict";var r=n("e67a"),a=n.n(r);a.a},e41a:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%"}},[n("el-container",{staticClass:".home-container"},[n("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[n("el-dropdown",[n("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[t._v("查看")]),n("el-dropdown-item",[t._v("新增")]),n("el-dropdown-item",{nativeOn:{click:function(e){return t.logout(e)}}},[t._v("登出")]),n("el-dropdown-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.logout}},[t._v("logout")])],1)],1)],1),n("span",[t._v("王小虎")])],1),n("el-container",[n("el-aside",{attrs:{width:t.isCollapse?"":"200px"}},[n("div",{staticClass:"toggle-botton",on:{click:t.toggleCollapse}},[n("i",{class:t.isCollapse?"el-icon-arrow-right":"el-icon-arrow-left"})]),n("el-menu",{staticStyle:{"border-right":"0"},attrs:{"default-active":t.$route.path,"background-color":"#545c64","text-color":"#fff","active-text-color":"#409bff","unique-opened":!0,collapse:t.isCollapse,"collapse-transition":!1,router:!1}},t._l(t.menuList,(function(e){return n("el-submenu",{key:e.id,attrs:{index:e.id+""}},[n("template",{slot:"title"},[n("i",{class:t.iconsObj[e.id]}),n("span",[t._v(t._s(e.authName))])]),t._l(e.children,(function(e){return n("el-menu-item-group",{key:e.authName},[n("el-menu-item",{attrs:{index:"/"+e.path},on:{click:function(n){return t.subclick(e.path,e.authName)}}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),n("span",[t._v(t._s(e.authName))])])],2)],1)}))],2)})),1)],1),n("el-main",[n("el-tabs",{attrs:{type:"border-card",closable:""},on:{"tab-remove":t.removeTab,"tab-click":t.handleClick},model:{value:t.editableTabsValue,callback:function(e){t.editableTabsValue=e},expression:"editableTabsValue"}},t._l(t.editableTabs,(function(t){return n("el-tab-pane",{key:t.name,attrs:{label:t.title,name:t.name}},[n("router-view")],1)})),1)],1)],1),n("el-footer",{staticStyle:{"text-align":"right","font-size":"12px"}},[t._v("footer")])],1)],1)},a=[],i=(n("cb29"),n("4de4"),n("4160"),n("b0c0"),n("ac1f"),n("5319"),n("159b"),n("96cf"),n("1da1")),o={data:function(){var t={date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"};return{tableData:Array(10).fill(t),menuList:[],iconsObj:{100:"el-icon-location",200:"el-icon-menu"},isCollapse:!1,toggleBottonIconObj:{open:"el-icon-d-arrow-right",close:"el-icon-d-arrow-left"},editableTabsValue:"welcome",editableTabs:[{title:"欢迎使用",name:"welcome"}]}},created:function(){this.getMenulist()},methods:{logout:function(){console.log("logout"),window.localStorage.setItem("token",""),this.$router.replace({path:"/login"})},subclick:function(t,e){this.addTab(t,e),this.checkRoute(t)},checkRoute:function(t){this.$route.path!="/"+t&&this.$router.replace({path:"/"+t})},getMenulist:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=window.localStorage.getItem("token"),t.next=3,this.$http.get("api/menus",{params:{token:e}});case 3:n=t.sent,this.menuList=n.data;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),toggleCollapse:function(){this.isCollapse=!this.isCollapse},addTab:function(t,e){var n=this.editableTabs,r=!1;n.forEach((function(e,n){e.name!=t||(r=!0)})),console.log(r),r||this.editableTabs.push({title:e,name:t}),this.editableTabsValue=t},removeTab:function(t){var e=this,n=this.editableTabs,r=this.editableTabsValue;r===t&&n.forEach((function(a,i){if(a.name===t){var o=n[i+1]||n[i-1];o&&(r=o.name,e.checkRoute(r))}})),this.editableTabsValue=r,this.editableTabs=n.filter((function(e){return e.name!==t}))},handleClick:function(t,e){this.checkRoute(t.name)}}},s=o,l=(n("7687"),n("2877")),c=Object(l["a"])(s,r,a,!1,null,null,null);e["default"]=c.exports},e67a:function(t,e,n){},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=newpage.6f36b813.js.map