(this["webpackJsonpweb-authentication-example-client"]=this["webpackJsonpweb-authentication-example-client"]||[]).push([[0],{16:function(e,t,a){e.exports=a(30)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(14),r=a.n(l),i=a(6),m=a(1),o=function(){return c.a.createElement("div",{className:"header"},c.a.createElement(i.c,{exact:!0,to:"/",activeClassName:"active"},"Home"),c.a.createElement("div",{className:"right-navs"},c.a.createElement(i.c,{to:"/login",activeClassName:"active",className:"logout"},"Logout")))},u=(a(26),o),s=function(){return c.a.createElement("div",{className:"home"},c.a.createElement(u,null),c.a.createElement("div",{className:"content"},"Home"))},p=(a(27),s),E=function(e){var t=e.className,a=void 0===t?"":t,l=e.title,r=void 0===l?"Welcome":l,m=e.formType,o=e.onSubmit,u=Object(n.useMemo)((function(){return"login"===m&&c.a.createElement("div",{className:"links"},c.a.createElement(i.b,{to:"/signup"},"Signup"),c.a.createElement("span",{className:"partition"},"|"),c.a.createElement(i.b,{to:"/"},"Skip"))}),[m]);return c.a.createElement("div",{className:"user-form ".concat(a)},c.a.createElement("form",{onSubmit:o},c.a.createElement("div",{className:"title"},r),c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{id:"email",type:"email",required:!0}),c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{id:"password",type:"password",required:!0}),c.a.createElement("button",{type:"submit"},"Submit"),u))},b=(a(28),E),f=function(){var e=Object(m.f)(),t=Object(n.useCallback)((function(t){t.preventDefault(),e.push("/")}),[e]);return c.a.createElement(b,{formType:"login",onSubmit:t})},d=function(){var e=Object(m.f)(),t=Object(n.useCallback)((function(t){t.preventDefault(),e.push("/")}),[e]);return c.a.createElement(b,{title:"Sign up",formType:"signup",onSubmit:t})},v=(a(29),function(){return c.a.createElement("div",null,c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/",component:p}),c.a.createElement(m.a,{path:"/login",component:f}),c.a.createElement(m.a,{path:"/signup",component:d})))});r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{basename:"/web-authentication-example"},c.a.createElement(v,null))),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d7fe75d3.chunk.js.map