(this.webpackJsonpojt=this.webpackJsonpojt||[]).push([[0],{65:function(t,e,n){},66:function(t,e,n){},73:function(t,e,n){},93:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(24),i=n.n(r),o=(n(65),n(66),n(119)),s=n(120),u=n(121),j=n(129),l=n(117),d=n(18),b=n(2),h=Object(l.a)((function(t){return{text:{color:"orange",flexGrow:1},root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}}})),p=function(){var t=h();return Object(b.jsx)("div",{className:t.root,children:Object(b.jsx)(o.a,{position:"static",children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(u.a,{variant:"h5",component:"p",className:t.text,children:"Stock Management"}),Object(b.jsxs)("div",{style:{marginRight:"2rem",color:"white"},children:[Object(b.jsx)(j.a,{style:{borderRadius:10,color:"white",padding:"15px ",fontSize:"15px",textTransform:"capitalize"},variant:"text",component:d.b,to:"/",color:"default",children:"Dashboard"}),Object(b.jsx)(j.a,{style:{borderRadius:10,color:"white",padding:"15px ",fontSize:"15px",textTransform:"capitalize"},variant:"text",component:d.b,to:"/add",color:"default",children:"Add-Stock"}),Object(b.jsx)(j.a,{style:{borderRadius:10,color:"#ffd662ff",padding:"15px ",fontSize:"15px"},variant:"text",component:d.b,to:"/login",children:"Log-in"})]})]})})})},x=(n(73),n(8)),O=n.n(x),m=n(15),f=n(27),v=n(34),y=n.n(v),g="https://my-json-server.typicode.com/Saurabhmagicsw/datbase/stock",k=function(){var t=Object(m.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=e||"",t.next=3,y.a.get("".concat(g,"/").concat(e));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=Object(m.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.post("".concat(g),e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(){var t=Object(m.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.delete("".concat(g,"/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(m.a)(O.a.mark((function t(e,n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.put("".concat(g,"/").concat(e),n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),F=n(5),N=n(125),z=n(127),A=n(122),E=n(124),I=n(126),T=n(123),R=n(94),B=Object(F.a)((function(t){return{head:{backgroundColor:t.palette.common.black,color:t.palette.common.white},body:{fontSize:14}}}))(A.a),M=Object(F.a)((function(t){return{root:{"&:nth-of-type(odd)":{backgroundColor:t.palette.action.hover}}}}))(T.a),D=Object(l.a)({table:{minWidth:0}}),G=function(){var t=Object(a.useState)([]),e=Object(f.a)(t,2),n=e[0],c=e[1],r=D();Object(a.useEffect)((function(){o(),console.log("useeffectdsa")}),[]);var i=function(){var t=Object(m.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:o();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=Object(m.a)(O.a.mark((function t(){var e;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k();case 2:e=t.sent,console.log(e.data),c(e.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsx)(E.a,{component:R.a,children:Object(b.jsxs)(N.a,{className:r.table,"aria-label":"customized table",children:[Object(b.jsx)(I.a,{children:Object(b.jsxs)(T.a,{children:[Object(b.jsx)(B,{children:"Id"}),Object(b.jsx)(B,{children:"Item Name"}),Object(b.jsx)(B,{children:"Item Name"}),Object(b.jsx)(B,{children:"Stock"}),Object(b.jsx)(B,{children:"In Stock"}),Object(b.jsx)(B,{children:"Type"}),Object(b.jsx)(B,{style:{textAlign:"center"},children:"Actions"})]})}),Object(b.jsx)(z.a,{children:n.map((function(t,e){return Object(b.jsxs)(M,{children:[Object(b.jsxs)(B,{children:[" ",e+1]}),Object(b.jsx)(B,{children:t.name}),Object(b.jsx)(B,{children:t.total}),Object(b.jsx)(B,{children:t.inStock}),Object(b.jsx)(B,{children:t.cat}),Object(b.jsx)(B,{children:t.brand}),Object(b.jsxs)(B,{style:{textAlign:"center"},children:[Object(b.jsx)(j.a,{color:"primary",variant:"contained",style:{margin:5},component:d.b,to:"/edit/".concat(t.id),children:"Edit"}),Object(b.jsx)(j.a,{color:"primary",variant:"contained",style:{margin:5},component:d.b,to:"/edit/".concat(t.id),children:"Details"}),Object(b.jsx)(j.a,{style:{margin:5},color:"secondary",variant:"contained",onClick:function(){return i(t.id)},children:"Delete"})]})]},e+1)}))})]})})},J=n(25),Q=n(29),L=n(128),W=n(131),q=n(130),H=n(132),K=n(133),P=n(9),U={name:"",total:"",inStock:"",cat:"",brand:"",details:""},V=Object(l.a)({container:{width:"50%",margin:"5% 0 0 25%","& > *":{marginTop:20}}}),X=function(){var t=Object(a.useState)(U),e=Object(f.a)(t,2),n=e[0],c=e[1],r=n.name,i=n.total,o=n.inStock,s=n.cat,l=n.brand,d=n.details,h=V(),p=Object(P.f)(),x=function(t){console.log(t.target.value),c(Object(Q.a)(Object(Q.a)({},n),{},Object(J.a)({},t.target.name,t.target.value)))},v=function(){var t=Object(m.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(n);case 2:p.push("./");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)(L.a,{className:h.container,children:[Object(b.jsx)(u.a,{variant:"h4",children:"Add Stock"}),Object(b.jsxs)(W.a,{children:[Object(b.jsx)(q.a,{htmlFor:"my-input1",children:"Name"}),Object(b.jsx)(H.a,{onChange:function(t){return x(t)},name:"name",value:r,id:"my-input1"})]}),Object(b.jsxs)(W.a,{children:[Object(b.jsx)(q.a,{htmlFor:"my-input11",children:"Total Quantity"}),Object(b.jsx)(H.a,{onChange:function(t){return x(t)},name:"total",value:i,id:"my-input11"})]}),Object(b.jsxs)(W.a,{children:[Object(b.jsx)(q.a,{htmlFor:"my-input111",children:"In Stock"}),Object(b.jsx)(H.a,{onChange:function(t){return x(t)},name:"inStock",value:o,id:"my-input111"})]}),Object(b.jsxs)(W.a,{children:[Object(b.jsx)(q.a,{htmlFor:"my-input1111",children:"Cat"}),Object(b.jsx)(H.a,{onChange:function(t){return x(t)},name:"cat",value:s,id:"my-input1111"})]}),Object(b.jsxs)(W.a,{children:[Object(b.jsx)(q.a,{htmlFor:"my-input11111",children:"Brand"}),Object(b.jsx)(H.a,{onChange:function(t){return x(t)},name:"brand",value:l,id:"my-input11111"})]}),Object(b.jsx)(W.a,{children:Object(b.jsx)(K.a,{placeholder:"Enter details",rowsMin:3,onChange:function(t){return x(t)},name:"details",value:d,id:"my-input111111"})}),Object(b.jsxs)(W.a,{children:[Object(b.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){return v()},children:"Add Stock"}),Object(b.jsx)("hr",{})]})]})},Y=function(){return Object(b.jsx)("div",{children:"i m log in"})},Z={name:"",total:"",inStock:"",cat:"",brand:"",details:""},$=Object(l.a)({container:{width:"50%",margin:"5% 0 0 25%","& > *":{marginTop:20}}}),_=function(){var t=Object(a.useState)(Z),e=Object(f.a)(t,2),n=e[0],c=e[1],r=n.name,i=n.total,o=n.inStock,s=n.cat,l=n.brand,d=n.details,h=Object(P.g)().id,p=$(),x=Object(P.f)();Object(a.useEffect)((function(){v(),console.log("useeffect")}),[]);var v=function(){var t=Object(m.a)(O.a.mark((function t(){var e;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(h);case 2:e=t.sent,c(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(m.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(h,n);case 2:x.push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(t){console.log(t.target.value),c(Object(Q.a)(Object(Q.a)({},n),{},Object(J.a)({},t.target.name,t.target.value)))};return Object(b.jsxs)(L.a,{className:p.container,children:[Object(b.jsx)(u.a,{variant:"h4",children:"Edit Stock"}),Object(b.jsxs)(W.a,{children:[Object(b.jsx)(q.a,{htmlFor:"my-input1",children:"Name"}),Object(b.jsx)(H.a,{onChange:function(t){return g(t)},name:"name",value:r,id:"my-input1"})]}),Object(b.jsxs)(W.a,{children:[Object(b.jsx)(q.a,{htmlFor:"my-input11",children:"Total Quantity"}),Object(b.jsx)(H.a,{onChange:function(t){return g(t)},name:"total",value:i,id:"my-input11"})]}),Object(b.jsxs)(W.a,{children:[Object(b.jsx)(q.a,{htmlFor:"my-input111",children:"In Stock"}),Object(b.jsx)(H.a,{onChange:function(t){return g(t)},name:"inStock",value:o,id:"my-input111"})]}),Object(b.jsxs)(W.a,{children:[Object(b.jsx)(q.a,{htmlFor:"my-input1111",children:"Cat"}),Object(b.jsx)(H.a,{onChange:function(t){return g(t)},name:"cat",value:s,id:"my-input1111"})]}),Object(b.jsxs)(W.a,{children:[Object(b.jsx)(q.a,{htmlFor:"my-input11111",children:"Brand"}),Object(b.jsx)(H.a,{onChange:function(t){return g(t)},name:"brand",value:l,id:"my-input11111"})]}),Object(b.jsx)(W.a,{children:Object(b.jsx)(K.a,{rowsMin:3,onChange:function(t){return g(t)},name:"details",value:d,id:"my-input111111"})}),Object(b.jsxs)(W.a,{children:[Object(b.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){return y()},children:"Edit Stock"}),Object(b.jsx)("hr",{})]})]})};var tt=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(p,{}),Object(b.jsxs)(P.c,{children:[Object(b.jsx)(P.a,{exact:!0,path:"/",component:G}),Object(b.jsx)(P.a,{exact:!0,path:"/add",component:X}),Object(b.jsx)(P.a,{exact:!0,path:"/login",component:Y}),Object(b.jsx)(P.a,{exact:!0,path:"/edit/:id",component:_}),Object(b.jsx)(P.a,{component:G})]})]})})};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(tt,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.3a04c31b.chunk.js.map