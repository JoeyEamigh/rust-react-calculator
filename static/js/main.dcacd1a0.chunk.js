(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,,,,function(n,e,c){},function(n,e,c){},function(n,e,c){},,function(n,e,c){},function(n,e,c){},function(n,e,c){"use strict";c.r(e);var t=c(1),i=c.n(t),r=c(6),u=c.n(r),l=(c(12),c(2)),s=(c(13),c(14),c(0));function o(){return Object(s.jsx)("main",{className:"loading-wasm",children:Object(s.jsx)("h1",{children:"Loading WASM..."})})}var a;c(16);function j(n){var e=n.rust,c=Object(t.useState)(0),i=Object(l.a)(c,2),r=i[0],u=i[1],o=Object(t.useState)(null),j=Object(l.a)(o,2),d=j[0],b=j[1],O=Object(t.useState)(null),f=Object(l.a)(O,2),h=f[0],x=f[1],v=Object(t.useState)(null),m=Object(l.a)(v,2),C=m[0],k=m[1],p=Object(t.useState)(""),N=Object(l.a)(p,2),g=N[0],w=N[1];return Object(s.jsxs)("main",{className:"calculator",children:[Object(s.jsxs)("section",{className:"screen",children:[Object(s.jsx)("span",{className:"buffer",children:g||r}),Object(s.jsxs)("span",{className:"operations",children:[h," ",d," ",C," ",r?" =":""]})]}),Object(s.jsxs)("section",{className:"buttons",children:[Object(s.jsx)("div",{onClick:function(){g?w(""):(x(null),k(null),b(null),u(0))},children:g?"CE":"AC"}),Object(s.jsx)("div",{onClick:function(){if(g){var n,e=Number(g);n=e>0?-Math.abs(e):Math.abs(e),w(n.toString())}},children:"+/-"}),Object(s.jsx)("div",{onClick:function(){if(h){var n=e.percent_decimal(Number(g)),c=e.multiply(h,n);w(c.toString())}else w("")},children:"%"}),Object(s.jsx)("div",{onClick:function(){return S(a.DIVIDE)},children:"\xf7"}),Object(s.jsx)("div",{onClick:function(){return T(7)},children:"7"}),Object(s.jsx)("div",{onClick:function(){return T(8)},children:"8"}),Object(s.jsx)("div",{onClick:function(){return T(9)},children:"9"}),Object(s.jsx)("div",{onClick:function(){return S(a.MULTIPLY)},children:"x"}),Object(s.jsx)("div",{onClick:function(){return T(4)},children:"4"}),Object(s.jsx)("div",{onClick:function(){return T(5)},children:"5"}),Object(s.jsx)("div",{onClick:function(){return T(6)},children:"6"}),Object(s.jsx)("div",{onClick:function(){return S(a.SUBTRACT)},children:"-"}),Object(s.jsx)("div",{onClick:function(){return T(1)},children:"1"}),Object(s.jsx)("div",{onClick:function(){return T(2)},children:"2"}),Object(s.jsx)("div",{onClick:function(){return T(3)},children:"3"}),Object(s.jsx)("div",{onClick:function(){return S(a.ADD)},children:"+"}),Object(s.jsx)("div",{onClick:function(){return T("00")},children:"00"}),Object(s.jsx)("div",{onClick:function(){return T(0)},children:"0"}),Object(s.jsx)("div",{onClick:function(){return T(".")},children:"."}),Object(s.jsx)("div",{onClick:D,children:"="})]})]});function D(){if("NO / 0"!==g){var n,c=Number(g),t=h;if(0===c&&0===t&&d===a.DIVIDE)return k(0),void w("NO / 0");if(g&&h){switch(r&&t&&C&&(c=C,t=r),d){case a.ADD:n=e.add(t,c);break;case a.SUBTRACT:n=e.subtract(t,c);break;case a.MULTIPLY:n=e.multiply(t,c);break;case a.DIVIDE:n=e.divide(t,c)}var i=e.round_for_calc(n);return x(t),k(c),u(i),w(""),i}}}function S(n){if(r)return b(n),x(r),k(null),void u(null);if(g&&h){var e=D();return b(n),x(e),k(null),void u(null)}if(g)return b(n),x(Number(g)),void w("");d&&b(n)}function T(n){w(g+n)}}!function(n){n.ADD="+",n.SUBTRACT="-",n.MULTIPLY="x",n.DIVIDE="\xf7"}(a||(a={}));var d,b=c(7);!function(n){n.FourFunc="Four Function",n.Triangle="Triangle"}(d||(d={}));c(17);function O(n){n.rust;return Object(s.jsx)("main",{className:"triangle",children:"Coming soon..."})}var f=function(){var n=Object(t.useState)(null),e=Object(l.a)(n,2),i=e[0],r=e[1],u=Object(t.useRef)(),a=Object(t.useState)(d.FourFunc),f=Object(l.a)(a,2),h=f[0],x=f[1];return Object(t.useEffect)((function(){new b.a(u.current),c.e(3).then(c.bind(null,24)).then((function(n){return r(n)}))}),[]),Object(s.jsxs)("main",{className:"rusty-calc",children:[Object(s.jsx)("h1",{children:"Rusty Calculator"}),Object(s.jsxs)("div",{className:"dropdown",children:[Object(s.jsxs)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown",ref:u,children:["Mode: ",h]}),Object(s.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){return v(d.FourFunc)},children:d.FourFunc})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){return v(d.Triangle)},children:d.Triangle})})]})]}),i?function(){switch(h){case d.FourFunc:return Object(s.jsx)(j,{rust:i});case d.Triangle:return Object(s.jsx)(O,{rust:i});default:return Object(s.jsx)(j,{rust:i})}}():Object(s.jsx)(o,{})]});function v(n){x(n)}};u.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.dcacd1a0.chunk.js.map