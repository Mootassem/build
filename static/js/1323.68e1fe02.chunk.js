"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[1323],{51914:function(n,e,t){var r=t(76747),o=function(n){return n.product.form},a=(0,r.P1)([o],(function(n){return n.record})),i={selectInitLoading:(0,r.P1)([o],(function(n){return Boolean(n.initLoading)})),selectSaveLoading:(0,r.P1)([o],(function(n){return Boolean(n.saveLoading)})),selectRecord:a,selectRaw:o};e.Z=i},27829:function(n,e,t){var r,o=t(30168),a=t(91876).ZP.div(r||(r=(0,o.Z)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n  .card-stats .card-body {\n    padding: 15px !important;\n  }\n  .text-center {\n    text-align: center !important;\n  }\n  .card-stats .icon-big.icon-danger, .card-stats .icon-big.icon-default, .card-stats .icon-big.icon-info, .card-stats .icon-big.icon-primary, .card-stats .icon-big.icon-secondary, .card-stats .icon-big.icon-success, .card-stats .icon-big.icon-warning {\n    border-radius: 5px;\n}\n.card-stats .icon-big.icon-danger i, .card-stats .icon-big.icon-default i, .card-stats .icon-big.icon-info i, .card-stats .icon-big.icon-primary i, .card-stats .icon-big.icon-secondary i, .card-stats .icon-big.icon-success i, .card-stats .icon-big.icon-warning i {\n  color: #fff!important;\n}\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n  .d-inline-block {\n    display: inline-block !important;\n  }\n  .pl-3, .px-3 {\n    padding-left: 1rem !important;\n  }\n  .card-stats .icon-big {\n    width: 100%;\n    height: 100%;\n    font-size: 2.2em;\n    min-height: 64px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  \n  }\n  .bubble-shadow-small {\n  position: relative; \n  }\n\n  .card-title {\n    margin: 0;\n    color: #575962;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.6;\n  }\n  .card-stats .icon-big.icon-primary {\n    background: #177dff;\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n  "])));e.Z=a},29860:function(n,e,t){t.r(e);var r=t(70885),o=t(47313),a=t(45788),i=t(63830),l=t(10499),s=t(35533),u=t(51914),c=t(59436),d=t(84672),m=t(27829),p=t(53852),f=t(61567),g=t(75352),h=t(46417);e.default=function(n){var e,t=(0,o.useState)(!1),v=(0,r.Z)(t,2),b=v[0],x=v[1],y=(0,a.I0)(),C=(0,i.$B)(),Z=null===(e=C.params)||void 0===e?void 0:e.name,j=(0,a.v9)(u.Z.selectInitLoading),N=(0,a.v9)(u.Z.selectSaveLoading),B=(0,a.v9)(u.Z.selectRecord),w=Boolean(C.params.id),k=w?(0,l.ag)("entities.product.edit.title"):(0,l.ag)("entities.product.new.title");return(0,o.useEffect)((function(){y(s.Z.doInit(C.params.id)),x(!0)}),[y,C.params.id]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p.Z,{items:[[(0,l.ag)("dashboard.menu"),"/"],[(0,l.ag)("entities.product.menu"),"/product"],[k]]}),(0,h.jsxs)(m.Z,{children:[(0,h.jsx)(g.Z,{children:k}),j&&(0,h.jsx)(f.Z,{}),b&&!j&&(0,h.jsx)(d.Z,{saveLoading:N,initLoading:j,record:B,isEditing:w,nameForm:Z,onSubmit:function(n,e){y(w?s.Z.doUpdate(n,e):s.Z.doCreate(e))},onCancel:function(){return(0,c.s1)().push("/product")}})]})]})}},53852:function(n,e,t){var r,o=t(30168),a=(t(47313),t(28303)),i=t(91876),l=t(46417),s=i.ZP.nav(r||(r=(0,o.Z)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"])));e.Z=function(n){var e=function(n){return n.length>1};return(0,l.jsx)(s,{children:(0,l.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(t,r){return(0,l.jsx)("li",{className:"breadcrumb-item ".concat(n.items.length-1===r?"active":""),children:e(t)?(0,l.jsx)(a.rU,{to:t[1],children:t[0]}):t[0]},t[0])}))})})}},95748:function(n,e,t){t(47313);var r=t(46417);e.Z=function(n){return n.loading?(0,r.jsx)("span",{className:"spinner-border spinner-border-sm"}):n.iconClass?(0,r.jsx)("i",{className:n.iconClass}):null}},61567:function(n,e,t){t(47313);var r=t(46417);e.Z=function(){return(0,r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,r.jsx)("div",{className:"spinner-border text-primary"})})}},49513:function(n,e,t){var r=t(1413),o=t(42982),a=t(15861),i=t(70885),l=t(87757),s=t.n(l),u=t(47313),c=t(49384),d=t(73622),m=t(10499),p=t(43270),f=t(35487),g=t.n(f),h=t(46417);function v(n){var e=(0,p.Gc)(),t=e.errors,l=e.watch,f=e.setValue,v=e.register,b=e.formState,x=b.touched,y=b.isSubmitted,C=n.label,Z=n.name,j=n.hint,N=n.placeholder,B=n.autoFocus,w=n.externalErrorMessage,k=n.mode,S=n.required,V=n.isClearable,M=n.mapper,P=n.fetchFn,q=n.election,F=l(Z),E=(0,u.useState)([]),L=(0,i.Z)(E,2),D=L[0],R=L[1],A=(0,u.useState)(!1),I=(0,i.Z)(A,2),O=I[0],G=I[1];(0,u.useEffect)((function(){v({name:Z})}),[v,Z]),(0,u.useEffect)((function(){var n=function(){var n=(0,a.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return G(!0),n.prev=1,n.next=4,P();case 4:e=(e=n.sent).map((function(n){return M.toAutocomplete(n)})),R(e),G(!1),n.next=16;break;case 10:return n.prev=10,n.t0=n.catch(1),console.error(n.t0),R([]),G(!1),n.abrupt("return",[]);case 16:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(){return n.apply(this,arguments)}}();n().then((function(){}))}),[]);var z=function(n){return(D||[]).find((function(e){return e.value===n.value}))||n},U=function(){return"multiple"===k?T():_()},T=function(){return F?F.map((function(n){return z(M.toAutocomplete(n))})):[]},_=function(){return F?z(M.toAutocomplete(F)):null},$=function(e){if(!e)return f(Z,[],{shouldValidate:!0,shouldDirty:!0}),void(n.onChange&&n.onChange([]));var t=e.map((function(n){return M.toValue(n)}));f(Z,t,{shouldValidate:!0,shouldDirty:!0}),n.onChange&&n.onChange(t)},H=function(e){if(!e)return f(Z,null,{shouldValidate:!0,shouldDirty:!0}),void(n.onChange&&n.onChange(null));var t=M.toValue(e);f(Z,t,{shouldValidate:!0,shouldDirty:!0}),n.onChange&&n.onChange(t)},J=O?(0,m.ag)("autocomplete.loading"):j,K=c.Z.errorMessage(Z,t,x,y,w),Q=Boolean(K)?{control:function(n){return(0,r.Z)((0,r.Z)({},n),{},{borderColor:"red"})}}:void 0;return(0,h.jsxs)("div",{className:"form-group",children:[Boolean(C)&&(0,h.jsx)("label",{className:"col-form-label ".concat(S?"required":null),htmlFor:Z,children:C}),(0,h.jsxs)("div",{style:{display:"flex"},children:[(0,h.jsx)(d.ZP,{className:"w-100",styles:Q,id:Z,name:Z,isMulti:"multiple"===k,placeholder:N||"",autoFocus:B||void 0,onChange:function(n){return"multiple"===k?$(n):H(n)},value:U(),isClearable:V,options:function(){var e=n.mode;return D?U()?"multiple"===e?g()([].concat((0,o.Z)(D),(0,o.Z)(U())),"value"):g()([].concat((0,o.Z)(D),[U()]),"value"):D:[]}(),onBlur:function(e){n.onBlur&&n.onBlur(e)},loadingMessage:function(){return(0,m.ag)("autocomplete.loading")},noOptionsMessage:function(){return(0,m.ag)("autocomplete.noOptions")}}),q&&n.showCreate&&n.hasPermissionToCreate?(0,h.jsx)("button",{style:{marginLeft:"16px",flexShrink:0},className:"btn btn-primary",type:"button",onClick:n.onOpenModal,children:(0,h.jsx)("i",{className:"fas fa-plus"})}):null]}),(0,h.jsx)("div",{className:"invalid-feedback",children:K}),Boolean(J)&&(0,h.jsx)("small",{className:"form-text text-muted",children:J})]})}v.defaultProps={isClearable:!0,mode:"default",required:!1},e.Z=v},47575:function(n,e,t){t(47313);var r=t(43270),o=t(49384),a=t(46417);function i(n){var e=n.label,t=n.description,i=n.name,l=n.hint,s=n.type,u=n.placeholder,c=n.autoFocus,d=n.autoComplete,m=n.required,p=n.externalErrorMessage,f=n.disabled,g=n.endAdornment,h=(0,r.Gc)(),v=h.register,b=h.errors,x=h.formState,y=x.touched,C=x.isSubmitted,Z=o.Z.errorMessage(i,b,y,C,p);return(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("div",{className:g?"input-group":"",children:[Boolean(e)&&(0,a.jsx)("label",{className:"col-form-label ".concat(m?"required":null),htmlFor:i,children:e}),t,(0,a.jsx)("input",{id:i,name:i,type:s,ref:v,onChange:function(e){n.onChange&&n.onChange(e.target.value)},onBlur:function(e){n.onBlur&&n.onBlur(e)},placeholder:u||void 0,autoFocus:c||void 0,autoComplete:d||void 0,disabled:f,className:"form-control ".concat(Z?"is-invalid":"")}),g&&(0,a.jsx)("div",{className:"input-group-append",children:(0,a.jsx)("span",{className:"input-group-text",children:g})})]}),(0,a.jsx)("div",{className:"invalid-feedback",children:Z}),Boolean(l)&&(0,a.jsx)("small",{className:"form-text text-muted",children:l})]})}i.defaultProps={type:"text",required:!1},e.Z=i},21538:function(n,e,t){t(47313);var r=t(43270),o=t(49384),a=t(46417);function i(n){var e=n.label,t=n.name,i=n.hint,l=n.type,s=n.placeholder,u=n.autoFocus,c=n.autoComplete,d=n.required,m=n.externalErrorMessage,p=n.disabled,f=(0,r.Gc)(),g=f.register,h=f.errors,v=f.formState,b=v.touched,x=v.isSubmitted,y=o.Z.errorMessage(t,h,b,x,m);return(0,a.jsxs)("div",{className:"form-group",children:[Boolean(e)&&(0,a.jsx)("label",{className:"col-form-label ".concat(d?"required":null),htmlFor:t,children:e}),(0,a.jsx)("input",{id:t,name:t,type:l,ref:g,onChange:function(e){n.onChange&&n.onChange(e.target.value)},onBlur:function(e){n.onBlur&&n.onBlur(e)},placeholder:s||void 0,autoFocus:u||void 0,autoComplete:c||void 0,disabled:p,className:"form-control ".concat(y?"is-invalid":"")}),(0,a.jsx)("div",{className:"invalid-feedback",children:y}),Boolean(i)&&(0,a.jsx)("small",{className:"form-text text-muted",children:i})]})}i.defaultProps={type:"number",required:!1},e.Z=i},5544:function(n,e,t){var r=t(1413),o=t(47313),a=t(73622),i=t(10499),l=t(43270),s=t(49384),u=t(46417);function c(n){var e=n.label,t=n.name,c=n.hint,d=n.options,m=n.required,p=n.mode,f=n.placeholder,g=n.isClearable,h=n.externalErrorMessage,v=(0,l.Gc)(),b=v.register,x=v.errors,y=v.formState,C=y.touched,Z=y.isSubmitted,j=v.setValue,N=v.watch,B=s.Z.errorMessage(t,x,C,Z,h),w=N(t);(0,o.useEffect)((function(){b({name:t})}),[b,t]);var k=function(){return w?w.map((function(n){return d.find((function(e){return e.value===n}))})):[]},S=function(){var e=n.options;return null!=w?e.find((function(n){return n.value===w})):null},V=function(e){if(!e)return j(t,[],{shouldValidate:!0,shouldDirty:!0}),void(n.onChange&&n.onChange([]));var r=e.map((function(n){return n?n.value:n})).filter((function(n){return null!=n}));j(t,r,{shouldValidate:!0,shouldDirty:!0}),n.onChange&&n.onChange(r)},M=function(e){if(!e)return j(t,null,{shouldValidate:!0,shouldDirty:!0}),void(n.onChange&&n.onChange(null));j(t,e.value,{shouldValidate:!0,shouldDirty:!0}),n.onChange&&n.onChange(e.value)},P=Boolean(B)?{container:function(n){return(0,r.Z)((0,r.Z)({},n),{},{color:"hsl(0,0%,20%)"})},control:function(n){return(0,r.Z)((0,r.Z)({},n),{},{borderColor:"red"})}}:{container:function(n){return(0,r.Z)((0,r.Z)({},n),{},{color:"hsl(0,0%,20%)"})}};return(0,u.jsxs)("div",{className:"form-group",children:[Boolean(e)&&(0,u.jsx)("label",{className:"col-form-label ".concat(m?"required":null),children:e}),(0,u.jsx)("br",{}),(0,u.jsx)(a.ZP,{className:"w-100",value:"multiple"===n.mode?k():S(),onChange:function(e){return"multiple"===n.mode?V(e):M(e)},onBlur:function(e){n.onBlur&&n.onBlur(e)},id:t,name:t,options:d,isMulti:"multiple"===p,placeholder:f||"",isClearable:g,styles:P,loadingMessage:function(){return(0,i.ag)("autocomplete.loading")},noOptionsMessage:function(){return(0,i.ag)("autocomplete.noOptions")}}),(0,u.jsx)("div",{className:"invalid-feedback",children:B}),Boolean(c)&&(0,u.jsx)("small",{className:"form-text text-muted",children:c})]})}c.defaultProps={required:!1,isClearable:!0},e.Z=c},75352:function(n,e,t){var r,o=t(30168),a=t(91876).ZP.h1(r||(r=(0,o.Z)(["\n  margin-bottom: 24px;\n"])));e.Z=a},71351:function(n,e,t){t.d(e,{Z:function(){return u}});var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),o=new Uint8Array(16);function a(){if(!r)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}for(var i=[],l=0;l<256;++l)i[l]=(l+256).toString(16).substr(1);var s=function(n,e){var t=e||0,r=i;return[r[n[t++]],r[n[t++]],r[n[t++]],r[n[t++]],"-",r[n[t++]],r[n[t++]],"-",r[n[t++]],r[n[t++]],"-",r[n[t++]],r[n[t++]],"-",r[n[t++]],r[n[t++]],r[n[t++]],r[n[t++]],r[n[t++]],r[n[t++]]].join("")};var u=function(n,e,t){var r=e&&t||0;"string"==typeof n&&(e="binary"===n?new Array(16):null,n=null);var o=(n=n||{}).random||(n.rng||a)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e)for(var i=0;i<16;++i)e[r+i]=o[i];return e||s(o)}}}]);