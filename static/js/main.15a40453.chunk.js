(this["webpackJsonpreadme-react-go"]=this["webpackJsonpreadme-react-go"]||[]).push([[0],{323:function(e,t,n){"use strict";n.r(t);var c=n(1),r=(n(64),n(0)),a=n.n(r),s=n(54),i=n.n(s),o=n(2),l=n(11),u=n(9),d=n(326),j=n(37),b=n(36),m=n(55);var h,p=n(61),x=n(21);!function(e){e[e.add=0]="add",e[e.remove=1]="remove",e[e.reset=2]="reset",e[e.search=3]="search"}(h||(h={}));var O=[];function f(e){return["\u5173\u4e8e react/fre","egg.js \u4e2dgrpc\u7684\u6b63\u786e\u4f7f\u7528\u65b9\u5f0f\u662f\u4ec0\u4e48\uff1f","\u6df1\u5165\u7406\u89e3\u51fd\u6570\u8c03\u7528\u539f\u7406"].map((function(e){return{text:e,keyId:Object(x.a)(5)}}))}function v(e,t){var n=Object(p.a)(e);switch(t.type){case h.add:n.unshift({text:Object(x.a)(),keyId:Object(x.a)(5)});break;case h.remove:n=n.filter((function(e){return e.keyId!==t.keyId}));break;case h.search:n=t.keyId?n.filter((function(e){return e.keyId===t.keyId})):f();break;case h.reset:n=f();break;default:throw new Error("".concat(t.type," \u9519\u8bef"))}return n}var g=[{path:"/codeview",exact:!0,component:function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),a=t[0],s=t[1],i=Object(r.useState)(j.a),l=Object(u.a)(i,2),h=l[0],p=l[1],x=Object(r.useState)("okaidia"),O=Object(u.a)(x,2),f=O[0],v=O[1],g=Object(r.useState)(!1),y=Object(u.a)(g,2),k=y[0],N=y[1],C=Object(o.f)().search,w=new URLSearchParams(C).get("origin");return n(75)("./".concat(w,".source.js")).then((function(e){s(e.default)})),Object(c.jsxs)("div",{className:"d-flex flex-column h100p overflow-hidden",children:[Object(c.jsxs)("div",{className:"d-flex pb-2 align-items-center justify-content-between",children:[Object(c.jsx)("h4",{children:"\u6e90\u7801\u6f14\u793a"}),Object(c.jsxs)("div",{className:"d-flex align-items-center",children:[Object(c.jsxs)("div",{className:"input-group ",children:[Object(c.jsx)("div",{className:"input-group-prepend",children:Object(c.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"\u5f53\u524d\u4e3b\u9898\uff1a"})}),Object(c.jsx)("select",{className:"form-control w-auto",defaultValue:f,onChange:function(e){var t=e.target.value;v(t),p(b[t])},children:Object.keys(b).map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))})]}),Object(c.jsx)(m.CopyToClipboard,{text:a,onCopy:function(){N(!0),setTimeout((function(){N(!1)}),800)},children:Object(c.jsx)("button",{className:["btn ml-5 nowrap",k?"btn-success":"btn-primary"].join(" "),disabled:k,children:k?"\u590d\u5236\u6210\u529f":"\u4e00\u952e\u590d\u5236"})})]})]}),Object(c.jsx)("div",{className:"flex1 ovy-auto mb-5",children:Object(c.jsx)(d.a,{language:"javascript",style:h,children:a})})]})}},{path:"/reducerdemo",exact:!0,component:function(){var e=Object(r.useReducer)(v,O,f),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"\u8f93\u5165 id \u641c\u7d22",onChange:function(e){return a({type:h.search,keyId:e.target.value.trim()})}}),Object(c.jsx)("ul",{className:"list-group my-4",children:n.map((function(e){return Object(c.jsxs)("li",{className:"list-group-item d-flex align-items-center justify-content-between",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"badge badge-info h5 mr-3",children:e.keyId}),e.text]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(){return a({type:h.add})},children:"\u65b0\u589e item"}),Object(c.jsx)("button",{className:"btn btn-primary ml-3",onClick:function(){return a({type:h.remove,keyId:e.keyId.trim()})},children:"\u79fb\u9664 item"})]})]},e.keyId)}))}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(){return a({type:h.reset})},children:"\u91cd\u7f6e item"})]})}},{path:"/",exact:!0,component:function(){var e=Object(r.useState)([{text:"React userReducer \u6df1\u5165\u8ba4\u77e5 \xbb",link:"/ReducerDemo"}]),t=Object(u.a)(e,1)[0];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{className:"mb-3 text-center",children:"\u6559\u7a0b\u793a\u4f8b"}),Object(c.jsx)("ul",{className:"list-group",children:Object(c.jsx)("li",{className:"list-group-item",children:t.map((function(e){return Object(c.jsx)(l.b,{to:e.link,children:e.text},e.text)}))})})]})}},{path:"",component:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h3",{children:"not found"})})}}];var y=function(){var e=Object(o.f)().pathname,t=Object(o.g)("/ReducerDemo");return Object(c.jsxs)("div",{className:"app container pt-3",children:[t?Object(c.jsxs)("div",{className:"text-right mb-3",children:[Object(c.jsx)("a",{href:"https://readme.codermore.com/2021/01/11/%E5%89%8D%E7%AB%AF%E5%8F%A3%E8%A2%8B%E5%B0%8F%E5%86%8C-%E7%AC%AC36%E6%9C%9F/",children:Object(c.jsx)("button",{className:"btn btn-primary mr-3",children:"\u6559\u7a0b\u8be6\u60c5"})}),Object(c.jsx)(l.b,{to:"codeview?origin=".concat(e.substr(1)),children:Object(c.jsx)("button",{className:"btn btn-primary",children:"\u67e5\u770b\u6e90\u7801"})})]}):null,Object(c.jsx)(o.c,{children:g.map((function(e){return Object(c.jsx)(o.a,{path:e.path,exact:e.exact,component:e.component},e.path)}))})]})},k=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,327)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(l.a,{children:Object(c.jsx)(y,{})})}),document.getElementById("root")),k()},64:function(e,t,n){},75:function(e,t,n){var c={"./ReducerDemo.source.js":[324,3]};function r(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(c)},r.id=75,e.exports=r}},[[323,1,2]]]);
//# sourceMappingURL=main.15a40453.chunk.js.map