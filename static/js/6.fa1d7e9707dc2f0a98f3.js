webpackJsonp([6],{"5pDX":function(e,t){},YDhy:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Dd8w"),s=r.n(n),a=r("NYxO"),o={data:function(){return{username:"",password:""}},methods:s()({},Object(a.b)(["register"]),{onRegister:function(){var e=this;this.register({username:this.username,password:this.password}).then(function(){e.$router.push({path:"/"})})}})},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"register"}},[r("h4",[e._v("用户名")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"用户名"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),r("h4",[e._v("密码")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onRegister.apply(null,arguments)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),r("el-button",{attrs:{size:"medium"},on:{click:e.onRegister}},[e._v("立即注册")]),e._v(" "),r("p",{staticClass:"notice"},[e._v("已有账号？"),r("router-link",{attrs:{to:"/login"}},[e._v("立即登录")])],1)],1)},staticRenderFns:[]};var u=r("VU/8")(o,i,!1,function(e){r("5pDX")},"data-v-39ce0ab2",null);t.default=u.exports}});
//# sourceMappingURL=6.fa1d7e9707dc2f0a98f3.js.map