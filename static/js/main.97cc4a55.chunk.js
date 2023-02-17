(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var a=c(7),s=c.n(a),n=c(4),r=c(2),l=c(3),o=c.n(l),i=c(1),d=c.n(i),j=c(8),u=(c(16),c(17),c(5)),b=c.n(u),h=c(0),O=d.a.memo((function(e){var t=e.todos,c=e.showModal,a=e.selectedTodo;return Object(h.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){var t=e.id,s=e.title,n=e.completed,r=(null===a||void 0===a?void 0:a.id)===t;return Object(h.jsxs)("tr",{"data-cy":"todo",className:b()({"has-background-info-light":r}),children:[Object(h.jsx)("td",{className:"is-vcentered",children:t}),Object(h.jsx)("td",{className:"is-vcentered",children:n&&Object(h.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("td",{className:"is-vcentered is-expanded",children:Object(h.jsx)("p",{className:b()({"has-text-success":n,"has-text-danger":!n}),children:s})}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:b()("far",{"fa-eye":!r,"fa-eye-slash":r})})})})})]},t)}))})]})})),m=d.a.memo((function(e){var t=e.handleSelect,c=e.query,a=e.handleInput,s=e.clearInput;return Object(h.jsxs)("form",{className:"field has-addons",children:[Object(h.jsx)("p",{className:"control",children:Object(h.jsx)("span",{className:"select",children:Object(h.jsxs)("select",{"data-cy":"statusSelect",onChange:t,children:[Object(h.jsx)("option",{value:"all",children:"All"}),Object(h.jsx)("option",{value:"active",children:"Active"}),Object(h.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(h.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:a}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(h.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(h.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:s})})]})]})}));function x(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var p,f=function(){var e=Object(n.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("/users/".concat(t));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Oops: ".concat(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),v=(c(19),d.a.memo((function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}))),N=d.a.memo((function(e){var t=e.todo,c=e.closeModal,a=Object(i.useState)(null),s=Object(r.a)(a,2),l=s[0],d=s[1],j=Object(i.useState)(!1),u=Object(r.a)(j,2),b=u[0],O=u[1],m=t.title,x=t.id,p=t.completed,N=t.userId;return Object(i.useEffect)((function(){var e=function(){var e=Object(n.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(N);case 3:t=e.sent,d(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),O(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(h.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(h.jsx)("div",{className:"modal-background"}),l?Object(h.jsxs)("div",{className:"modal-card",children:[Object(h.jsxs)("header",{className:"modal-card-head",children:[Object(h.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(x)}),Object(h.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(h.jsxs)("div",{className:"modal-card-body",children:[Object(h.jsx)("p",{className:"block","data-cy":"modal-title",children:m}),b?Object(h.jsx)("span",{children:"No user on server"}):Object(h.jsxs)("p",{className:"block","data-cy":"modal-user",children:[p?Object(h.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(h.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(h.jsx)("a",{href:"mailto:".concat(l.email),children:l.name})]})]})]}):Object(h.jsx)(v,{})]})}));!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(p||(p={}));var y=function(){var e=Object(i.useState)(!0),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)([]),l=Object(r.a)(s,2),d=l[0],u=l[1],b=Object(i.useState)(null),f=Object(r.a)(b,2),y=f[0],k=f[1],g=Object(i.useState)(p.ALL),w=Object(r.a)(g,2),C=w[0],S=w[1],E=Object(i.useState)(""),L=Object(r.a)(E,2),I=L[0],T=L[1],A=Object(i.useState)(""),M=Object(r.a)(A,2),_=M[0],P=M[1],B=Object(i.useState)(!1),D=Object(r.a)(B,2),q=D[0],J=D[1],V=Object(i.useCallback)(Object(j.debounce)(P,1e3),[]),F=Object(i.useCallback)((function(){T(""),P("")}),[]),z=Object(i.useCallback)((function(e){T(e.target.value),V(e.target.value)}),[]),G=Object(i.useMemo)((function(){return function(e,t,c){var a=e.filter((function(e){switch(t){case p.ACTIVE:return!e.completed;case p.COMPLETED:return e.completed;case p.ALL:return!0;default:throw new Error("Invalid filter property")}}));return c&&(a=a.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}))),a}(d,C,_)}),[C,_,d]),H=Object(i.useCallback)((function(e){return S(e.target.value)}),[]);Object(i.useEffect)((function(){var e=function(){var e=Object(n.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("/todos");case 3:t=e.sent,a(!1),u(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),J(!0),a(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var K=Object(i.useCallback)((function(e){return k(e)}),[]),Q=Object(i.useCallback)((function(){return k(null)}),[]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("h1",{className:"title",children:"Todos:"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(m,{handleSelect:H,query:I,handleInput:z,clearInput:F})}),q?Object(h.jsx)("span",{children:" No todos from server"}):Object(h.jsx)("div",{className:"block",children:c?Object(h.jsx)(v,{}):Object(h.jsx)(O,{todos:G,showModal:K,selectedTodo:y})})]})})}),y&&Object(h.jsx)(N,{todo:y,closeModal:Q})]})};s.a.render(Object(h.jsx)(y,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.97cc4a55.chunk.js.map