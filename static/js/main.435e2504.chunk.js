(this["webpackJsonpreadme-react-go"]=this["webpackJsonpreadme-react-go"]||[]).push([[0],{325:function(e,t,n){"use strict";n.r(t);var c=n(0),a=(n(66),n(1)),r=n.n(a),s=n(56),i=n.n(s),o=n(2),l=n(11),j=n(35),d=n.n(j),b=n(57),u=n(3),m=n(327),h=n(39),x=n(38),O=n(22);function p(e){var t=e.show,n=void 0!==t&&t,a=e.onCancel,r=e.content;return Object(c.jsx)("div",{className:["modal",n?"d-block":""].join(" "),tabIndex:-1,role:"dialog",children:Object(c.jsx)("div",{className:"modal-dialog",children:Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsxs)("div",{className:"modal-header",children:[Object(c.jsx)("h5",{className:"modal-title",children:"Modal title"}),Object(c.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:a,children:Object(c.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(c.jsx)("div",{className:"modal-body",children:Object(c.jsx)("p",{children:r})}),Object(c.jsxs)("div",{className:"modal-footer",children:[Object(c.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",onClick:a,children:"Close"}),Object(c.jsx)("button",{type:"button",className:"btn btn-primary",children:"Save changes"})]})]})})})}var f,v=n(63),y=n(13);!function(e){e[e.add=0]="add",e[e.remove=1]="remove",e[e.reset=2]="reset",e[e.search=3]="search"}(f||(f={}));var g=[];function N(e){return["\u5173\u4e8e react/fre","egg.js \u4e2dgrpc\u7684\u6b63\u786e\u4f7f\u7528\u65b9\u5f0f\u662f\u4ec0\u4e48\uff1f","\u6df1\u5165\u7406\u89e3\u51fd\u6570\u8c03\u7528\u539f\u7406"].map((function(e){return{text:e,keyId:Object(y.a)(5)}}))}function k(e,t){var n=Object(v.a)(e);switch(t.type){case f.add:n.unshift({text:Object(y.a)(),keyId:Object(y.a)(5)});break;case f.remove:n=n.filter((function(e){return e.keyId!==t.keyId}));break;case f.search:n=t.keyId?n.filter((function(e){return e.keyId===t.keyId})):N();break;case f.reset:n=N();break;default:throw new Error("".concat(t.type," \u9519\u8bef"))}return n}var C=[4,5,6,7,8,9,10].map((function(e){return e.toString()})),w=C.map((function(e){return{key:e,value:"".concat(e," \u4f4d\u968f\u673a\u6570")}}));var S=[{path:"/randomid",exact:!0,component:function(){var e=Object(a.useState)((function(){return w})),t=Object(u.a)(e,1)[0],n=Object(a.useState)(C[2]),r=Object(u.a)(n,2),s=r[0],i=r[1],o=Object(a.useState)(""),l=Object(u.a)(o,2),j=l[0],d=l[1],b=Object(a.useState)(!1),m=Object(u.a)(b,2),h=m[0],x=m[1];return Object(a.useEffect)((function(){d(Object(y.a)(+s))}),[s]),Object(a.useLayoutEffect)((function(){document.title="\u968f\u673a\u5b57\u7b26\u4e32\u751f\u6210"}),[]),Object(c.jsxs)("div",{className:"pt-3",children:[Object(c.jsx)("h4",{className:"text-center mb-5",children:"\u968f\u673a\u5b57\u7b26\u4e32\u751f\u6210"}),Object(c.jsx)("select",{className:"form-control w-auto ml-auto mr-auto",onChange:function(e){var t=e.target.value;console.log(t),i(t)},value:s,children:t.map((function(e){return Object(c.jsx)("option",{value:e.key,children:e.value},e.key)}))}),Object(c.jsx)("p",{className:"text-info mb-0 text-center my-4",children:Object(c.jsx)("span",{className:"border d-inline-block px-4 py-2",children:j})}),Object(c.jsxs)("div",{className:"d-flex justify-content-center mt-2 align-items-center",children:[Object(c.jsx)(O.CopyToClipboard,{text:j,onCopy:function(e,t){x(t),setTimeout((function(){x(!1)}),500)},children:Object(c.jsx)("button",{className:["btn btn-sm",h?"btn-warning":"btn-primary"].join(" "),children:h?"\u590d\u5236\u6210\u529f":"\u70b9\u51fb\u590d\u5236"})}),Object(c.jsx)("button",{className:"btn btn-primary btn-sm ml-3",onClick:function(){return d(Object(y.a)(+s))},children:"\u91cd\u65b0\u751f\u6210"})]})]})}},{path:"/qrfollow",exact:!0,component:function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("div",{className:"text-center pt-3",children:[Object(c.jsx)("button",{onClick:function(){r((function(e){return!e}))},className:"btn btn-primary",children:"\u70b9\u51fb\u4e0b\u8f7d"}),n?Object(c.jsx)("div",{className:"d-flex justify-content-center",children:Object(c.jsx)("div",{className:"card mt-3",children:Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsxs)("p",{className:"card-text",children:["\u626b\u4e8c\u7ef4\u7801\uff0c\u56de\u590d ",Object(c.jsx)("span",{className:"text-info",children:"goland"})," \u83b7\u53d6\u4e0b\u8f7d\u94fe\u63a5"]}),Object(c.jsx)("img",{src:"https://cos.ap-beijing.myqcloud.com/readme-1254963092/logo/wechat.jpeg",alt:""})]})})}):null]})}},{path:"/hookdemo",exact:!0,component:function(){var e=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)("dsd"),i=Object(u.a)(s,2),o=i[0],l=i[1],j=function(e){r(!n),console.log(e),"function"===typeof e&&e()};return[Object(c.jsx)(p,{content:o,show:n,onCancel:j}),{onCancel:j,onShow:function(){r(!n)},setContent:l}]}(),t=Object(u.a)(e,2),n=t[0],r=t[1],s=r.onShow,i=r.setContent;return Object(c.jsxs)(c.Fragment,{children:[n,Object(c.jsx)("h3",{children:" Hook Modal "}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:s,children:"\u6253\u5f00 Moal"}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(){return i("3233ss")},children:"\u4fee\u6539\u5185\u5bb9"})]})}},{path:"/codeview",exact:!0,component:function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(h.a),i=Object(u.a)(s,2),l=i[0],j=i[1],p=Object(a.useState)("okaidia"),f=Object(u.a)(p,2),v=f[0],y=f[1],g=Object(a.useState)(!1),N=Object(u.a)(g,2),k=N[0],C=N[1],w=Object(o.f)().search,S=new URLSearchParams(w).get("origin"),I=new URLSearchParams(w).get("suffix")||"tsx";return Object(a.useEffect)((function(){function e(){return(e=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cos.ap-beijing.myqcloud.com/public-data-1254963092/readme-source/".concat(S,".").concat(I));case 2:return t=e.sent,e.next=5,t.text();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[S,I]),Object(c.jsxs)("div",{className:"d-flex flex-column h100p overflow-hidden",children:[Object(c.jsxs)("div",{className:"d-flex pb-2 align-items-center justify-content-between",children:[Object(c.jsx)("h4",{children:"\u6e90\u7801\u6f14\u793a"}),Object(c.jsxs)("div",{className:"d-flex align-items-center",children:[Object(c.jsxs)("div",{className:"input-group ",children:[Object(c.jsx)("div",{className:"input-group-prepend",children:Object(c.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"\u5f53\u524d\u4e3b\u9898\uff1a"})}),Object(c.jsx)("select",{className:"form-control w-auto",defaultValue:v,onChange:function(e){var t=e.target.value;y(t),j(x[t])},children:Object.keys(x).map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))})]}),Object(c.jsx)(O.CopyToClipboard,{text:n,onCopy:function(){C(!0),setTimeout((function(){C(!1)}),800)},children:Object(c.jsx)("button",{className:["btn ml-5 nowrap",k?"btn-success":"btn-primary"].join(" "),disabled:k,children:k?"\u590d\u5236\u6210\u529f":"\u4e00\u952e\u590d\u5236"})})]})]}),Object(c.jsx)("div",{className:"flex1 ovy-auto mb-5",children:Object(c.jsx)(m.a,{language:"javascript",style:l,children:n})})]})}},{path:"/reducerdemo",exact:!0,component:function(){var e=Object(a.useReducer)(k,g,N),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"\u8f93\u5165 id \u641c\u7d22",onChange:function(e){return r({type:f.search,keyId:e.target.value.trim()})}}),Object(c.jsx)("ul",{className:"list-group my-4",children:n.map((function(e){return Object(c.jsxs)("li",{className:"list-group-item d-flex align-items-center justify-content-between",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"badge badge-info h5 mr-3",children:e.keyId}),e.text]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(){return r({type:f.add})},children:"\u65b0\u589e item"}),Object(c.jsx)("button",{className:"btn btn-primary ml-3",onClick:function(){return r({type:f.remove,keyId:e.keyId.trim()})},children:"\u79fb\u9664 item"})]})]},e.keyId)}))}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(){return r({type:f.reset})},children:"\u91cd\u7f6e item"})]})}},{path:"/",exact:!0,component:function(){var e=Object(a.useState)([{text:"React userReducer \u6df1\u5165\u8ba4\u77e5 \xbb",link:"/ReducerDemo"},{text:"\u968f\u673a\u5b57\u7b26\u4e32\u751f\u6210 \xbb",link:"/randomid"}]),t=Object(u.a)(e,1)[0];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{className:"mb-3 text-center",children:"\u6559\u7a0b\u793a\u4f8b"}),Object(c.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(c.jsx)("li",{className:"list-group-item",children:Object(c.jsx)(l.b,{to:e.link,children:e.text})},e.text)}))})]})}},{path:"",component:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h3",{children:"not found"})})}}];var I=function(){var e=Object(o.f)().pathname,t=Object(o.g)("/ReducerDemo");return Object(c.jsxs)("div",{className:"app container pt-3",children:[t?Object(c.jsxs)("div",{className:"text-right mb-3",children:[Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://readme.codermore.com/2021/01/11/%E5%89%8D%E7%AB%AF%E5%8F%A3%E8%A2%8B%E5%B0%8F%E5%86%8C-%E7%AC%AC36%E6%9C%9F/",children:Object(c.jsx)("button",{className:"btn btn-primary mr-3",children:"\u6559\u7a0b\u8be6\u60c5"})}),Object(c.jsx)(l.b,{to:"codeview?origin=".concat(e.substr(1)),children:Object(c.jsx)("button",{className:"btn btn-primary",children:"\u67e5\u770b\u6e90\u7801"})})]}):null,Object(c.jsx)(o.c,{children:S.map((function(e){return Object(c.jsx)(o.a,{path:e.path,exact:e.exact,component:e.component},e.path)}))})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,328)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(l.a,{children:Object(c.jsx)(I,{})})}),document.getElementById("root")),E()},66:function(e,t,n){}},[[325,1,2]]]);
//# sourceMappingURL=main.435e2504.chunk.js.map