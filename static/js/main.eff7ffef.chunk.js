(this.webpackJsonpcart=this.webpackJsonpcart||[]).push([[0],{10:function(e,c,s){},12:function(e,c,s){"use strict";s.r(c);var t=s(1),a=s.n(t),i=s(4),n=s.n(i),l=(s(9),s(2)),r=(s(10),s(0)),j=function(e){var c=Object(t.useState)(1),s=Object(l.a)(c,2),a=s[0],i=s[1];return Object(r.jsxs)("div",{className:"d-flex py-3 align-items-center product product".concat(e.id),children:[Object(r.jsx)("div",{className:"col-3",children:Object(r.jsx)("img",{src:"http://localhost:3000/Cart-ReactPractice/images/".concat(e.picName),className:"w-100",alt:""})}),Object(r.jsx)("div",{className:"col-3",children:e.name}),Object(r.jsxs)("div",{className:"col-3",children:[Object(r.jsx)("button",{onClick:function(){a>1?(i(a-1),e.setData(e.data-e.price),e.setSum(e.sum-1)):i(1)},children:Object(r.jsx)("i",{className:"fas fa-minus"})}),Object(r.jsx)("span",{className:"mx-3 count",children:a}),Object(r.jsx)("button",{onClick:function(){console.log("plus",a),i(a+1),e.setData(e.data+e.price),e.setSum(e.sum+1)},children:Object(r.jsx)("i",{className:"fas fa-plus"})})]}),Object(r.jsx)("div",{className:"col-2",children:Object(r.jsx)("div",{className:"price",children:e.price})}),Object(r.jsx)("div",{className:"col-1",children:Object(r.jsx)("button",{onClick:function(){var c=document.querySelector(".product".concat(e.id));console.log(c),e.setData(e.data-e.price),e.setSum(e.sum-1),c.remove()},children:Object(r.jsx)("i",{className:"fas fa-times"})})})]})},m=function(e){var c=e.data,s=e.setData,t=e.sum,a=e.setSum;return Object(r.jsxs)("div",{className:"col-9",children:[Object(r.jsxs)("div",{className:"title d-flex align-items-center mb-5",children:[Object(r.jsx)("h1",{children:"\u8a02\u8cfc\u55ae"}),Object(r.jsx)("p",{className:"m-0",children:"3\u7a2e\u5546\u54c1\u9805\u76ee"})]}),[{id:1,name:"New Balance shoes",price:3e3,picName:"NB.jpg",category:"shoes"},{id:2,name:"Nike shoes",price:4500,picName:"nike.jfif",category:"shoes"},{id:3,name:"solomon shoes",price:5e3,picName:"solomon.jpg",category:"shoes"}].map((function(e,i){return Object(r.jsx)(j,{id:e.id,name:e.name,price:e.price,setData:s,data:c,setSum:a,sum:t,picName:e.picName})}))]})},o=function(e){var c=e.data,s=e.sum;return Object(r.jsxs)("div",{className:"col-3 right px-5 mx-5",children:[Object(r.jsx)("h2",{children:"\u4ed8\u6b3e\u6458\u8981"}),Object(r.jsxs)("p",{className:"item",children:["\u5171",Object(r.jsxs)("span",{children:[" ",s," "]}),"\u9805\u76ee"]}),Object(r.jsxs)("p",{children:["\u7e3d\u50f9:",Object(r.jsxs)("span",{children:[" ",c," "]})]}),Object(r.jsx)("div",{className:"cash",children:"\u524d\u5f80\u4ed8\u6b3e"})]})};var d=function(){var e=Object(t.useState)(12500),c=Object(l.a)(e,2),s=c[0],a=c[1],i=Object(t.useState)(3),n=Object(l.a)(i,2),j=n[0],d=n[1];return Object(r.jsxs)("div",{className:"container d-flex mt-5 all",children:[Object(r.jsx)(m,{data:s,sum:j,setData:a,setSum:d}),Object(r.jsx)(o,{data:s,sum:j})]})};n.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(d,{})}),document.getElementById("root"))},9:function(e,c,s){}},[[12,1,2]]]);
//# sourceMappingURL=main.eff7ffef.chunk.js.map