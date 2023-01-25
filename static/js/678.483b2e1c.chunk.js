"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[678],{47306:function(n,t,i){i.r(t),i.d(t,{default:function(){return h}});var r=i(70885),e=i(47313),a=i(45788),o=i(63830),s=i(10499),c=i(11628),d=i(76747),u=function(n){return n.attributes.form},p=(0,d.P1)([u],(function(n){return n.record})),l={selectInitLoading:(0,d.P1)([u],(function(n){return Boolean(n.initLoading)})),selectSaveLoading:(0,d.P1)([u],(function(n){return Boolean(n.saveLoading)})),selectRecord:p,selectRaw:u},m=i(59436),g=i(62719),f=i(27829),b=i(53852),v=i(61567),x=i(75352),y=i(46417);var h=function(n){var t,i=(0,e.useState)(!1),d=(0,r.Z)(i,2),u=d[0],p=d[1],h=(0,a.I0)(),Z=(0,o.$B)(),j=null===(t=Z.params)||void 0===t?void 0:t.name,w=(0,a.v9)(l.selectInitLoading),C=(0,a.v9)(l.selectSaveLoading),k=(0,a.v9)(l.selectRecord),L=Boolean(Z.params.id),R=L?(0,s.ag)("entities.attributes.edit.title"):(0,s.ag)("entities.attributes.new.title");return(0,e.useEffect)((function(){h(c.Z.doInit(Z.params.id)),p(!0)}),[h,Z.params.id]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(b.Z,{items:[[(0,s.ag)("dashboard.menu"),"/"],[(0,s.ag)("entities.attributes.menu"),"/attributes"],[R]]}),(0,y.jsxs)(f.Z,{children:[(0,y.jsx)(x.Z,{children:R}),w&&(0,y.jsx)(v.Z,{}),u&&!w&&(0,y.jsx)(g.Z,{saveLoading:C,initLoading:w,record:k,isEditing:L,onSubmit:function(n,t){h(L?c.Z.doUpdate(n,t):c.Z.doCreate(t))},onCancel:function(){return(0,m.s1)().push("/attributes")},itemId:j})]})]})}},27829:function(n,t,i){var r,e=i(30168),a=i(91876).ZP.div(r||(r=(0,e.Z)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n  .card-stats .card-body {\n    padding: 15px !important;\n  }\n  .text-center {\n    text-align: center !important;\n  }\n  .card-stats .icon-big.icon-danger, .card-stats .icon-big.icon-default, .card-stats .icon-big.icon-info, .card-stats .icon-big.icon-primary, .card-stats .icon-big.icon-secondary, .card-stats .icon-big.icon-success, .card-stats .icon-big.icon-warning {\n    border-radius: 5px;\n}\n.card-stats .icon-big.icon-danger i, .card-stats .icon-big.icon-default i, .card-stats .icon-big.icon-info i, .card-stats .icon-big.icon-primary i, .card-stats .icon-big.icon-secondary i, .card-stats .icon-big.icon-success i, .card-stats .icon-big.icon-warning i {\n  color: #fff!important;\n}\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n  .d-inline-block {\n    display: inline-block !important;\n  }\n  .pl-3, .px-3 {\n    padding-left: 1rem !important;\n  }\n  .card-stats .icon-big {\n    width: 100%;\n    height: 100%;\n    font-size: 2.2em;\n    min-height: 64px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  \n  }\n  .bubble-shadow-small {\n  position: relative; \n  }\n\n  .card-title {\n    margin: 0;\n    color: #575962;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.6;\n  }\n  .card-stats .icon-big.icon-primary {\n    background: #177dff;\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n  "])));t.Z=a},53852:function(n,t,i){var r,e=i(30168),a=(i(47313),i(28303)),o=i(91876),s=i(46417),c=o.ZP.nav(r||(r=(0,e.Z)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"])));t.Z=function(n){var t=function(n){return n.length>1};return(0,s.jsx)(c,{children:(0,s.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(i,r){return(0,s.jsx)("li",{className:"breadcrumb-item ".concat(n.items.length-1===r?"active":""),children:t(i)?(0,s.jsx)(a.rU,{to:i[1],children:i[0]}):i[0]},i[0])}))})})}},95748:function(n,t,i){i(47313);var r=i(46417);t.Z=function(n){return n.loading?(0,r.jsx)("span",{className:"spinner-border spinner-border-sm"}):n.iconClass?(0,r.jsx)("i",{className:n.iconClass}):null}},61567:function(n,t,i){i(47313);var r=i(46417);t.Z=function(){return(0,r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,r.jsx)("div",{className:"spinner-border text-primary"})})}},75352:function(n,t,i){var r,e=i(30168),a=i(91876).ZP.h1(r||(r=(0,e.Z)(["\n  margin-bottom: 24px;\n"])));t.Z=a},71351:function(n,t,i){i.d(t,{Z:function(){return d}});var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),e=new Uint8Array(16);function a(){if(!r)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(e)}for(var o=[],s=0;s<256;++s)o[s]=(s+256).toString(16).substr(1);var c=function(n,t){var i=t||0,r=o;return[r[n[i++]],r[n[i++]],r[n[i++]],r[n[i++]],"-",r[n[i++]],r[n[i++]],"-",r[n[i++]],r[n[i++]],"-",r[n[i++]],r[n[i++]],"-",r[n[i++]],r[n[i++]],r[n[i++]],r[n[i++]],r[n[i++]],r[n[i++]]].join("")};var d=function(n,t,i){var r=t&&i||0;"string"==typeof n&&(t="binary"===n?new Array(16):null,n=null);var e=(n=n||{}).random||(n.rng||a)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,t)for(var o=0;o<16;++o)t[r+o]=e[o];return t||c(e)}}}]);