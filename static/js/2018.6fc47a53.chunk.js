"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[2018],{81346:function(n,e,t){var r={selectLoading:(0,t(76747).P1)([function(n){return n.gallery.destroy}],(function(n){return Boolean(n.loading)}))};e.Z=r},4697:function(n,e,t){var r=t(76747),a=t(86495),o=t(26319),i=t(71945),s=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(n,e){return new o.Z(n,e).match(i.Z.values.galleryRead)})),c=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(n,e){return new o.Z(n,e).match(i.Z.values.galleryEdit)})),l=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(n,e){return new o.Z(n,e).match(i.Z.values.galleryCreate)})),d=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(n,e){return new o.Z(n,e).match(i.Z.values.galleryImport)})),u={selectPermissionToRead:s,selectPermissionToEdit:c,selectPermissionToCreate:l,selectPermissionToDestroy:(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(n,e){return new o.Z(n,e).match(i.Z.values.galleryDestroy)})),selectPermissionToImport:d};e.Z=u},6891:function(n,e,t){t.d(e,{Z:function(){return h}});var r=t(70885),a=t(15861),o=t(15671),i=t(43144),s=t(87757),c=t.n(s),l=t(99811),d=t.n(l),u=t(10499),m=t(63922),p=t(71351),f=t(81384),b=t(31881),g=t.n(b),h=function(){function n(){(0,o.Z)(this,n)}return(0,i.Z)(n,null,[{key:"validate",value:function(n,e){if(e){if(e.image&&!n.type.startsWith("image"))throw new Error((0,u.ag)("fileUploader.image"));if(e.storage.maxSizeInBytes&&n.size>e.storage.maxSizeInBytes)throw new Error((0,u.ag)("fileUploader.size",d()(e.storage.maxSizeInBytes)));var t=x(n.name);if(e.formats&&!e.formats.includes(t))throw new Error((0,u.ag)("fileUploader.formats",e.formats.join(", ")))}}},{key:"upload",value:function(){var n=(0,a.Z)(c().mark((function n(e,t){var r,a,o,i,s,l,d;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.prev=0,this.validate(e,t),n.next=7;break;case 4:return n.prev=4,n.t0=n.catch(0),n.abrupt("return",Promise.reject(n.t0));case 7:return r=x(e.name),a=(0,p.Z)(),o="".concat(a,".").concat(r),n.next=12,this.fetchFileCredentials(o,t);case 12:return i=n.sent,s=i.uploadCredentials,l=i.downloadUrl,d=i.privateUrl,n.next=18,this.uploadToServer(e,s);case 18:return n.abrupt("return",{id:a,name:e.name,sizeInBytes:e.size,publicUrl:s&&s.publicUrl?s.publicUrl:null,privateUrl:d,downloadUrl:l,new:!0});case 19:case"end":return n.stop()}}),n,this,[[0,4]])})));return function(e,t){return n.apply(this,arguments)}}()},{key:"fetchFileCredentials",value:function(){var n=(0,a.Z)(c().mark((function n(e,t){var r,a,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=f.Z.get(),n.next=3,m.Z.get("/tenant/".concat(r,"/file/credentials"),{params:{filename:e,storageId:t.storage.id}});case 3:return a=n.sent,o=a.data,n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},{key:"uploadToServer",value:function(){var n=(0,a.Z)(c().mark((function n(e,t){var a,o,i,s,l,d,u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(n.prev=0,a=t.url,o=new FormData,i=0,s=Object.entries(t.fields||{});i<s.length;i++)l=(0,r.Z)(s[i],2),d=l[0],u=l[1],o.append(d,u);return o.append("file",e),n.abrupt("return",g().post(a,o,{headers:{"Content-Type":"multipart/form-data"}}));case 8:throw n.prev=8,n.t0=n.catch(0),console.error(n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}()}]),n}();function x(n){if(!n)return null;var e=/(?:\.([^.]+))?$/.exec(n);return e?e[1]:null}},12018:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r=t(47313),a=t(45788),o=t(63830),i=t(10499),s=t(99540),c=t(76747),l=function(n){return n.gallery.view},d=(0,c.P1)([l],(function(n){return n.record})),u={selectLoading:(0,c.P1)([l],(function(n){return Boolean(n.loading)})),selectRecord:d,selectRaw:l},m=t(61567),p=t(25969),f=t(69727),b=t(46417);var g=function(n){var e=n.record;return n.loading||!e?(0,b.jsx)(m.Z,{}):(0,b.jsx)(p.Z,{children:(0,b.jsx)(f.Z,{label:(0,i.ag)("entities.gallery.fields.photos"),value:e.photos})})},h=t(70885),x=t(28303),v=t(23516),y=t(4697),Z=t(44625),w=t(81346),j=t(44587),C=t(10419),k=t(95748);var N=function(n){var e=(0,r.useState)(!1),t=(0,h.Z)(e,2),o=t[0],s=t[1],c=(0,a.I0)(),l=n.match.params.id,d=(0,a.v9)(v.Z.selectPermissionToRead),u=(0,a.v9)(y.Z.selectPermissionToEdit),m=(0,a.v9)(y.Z.selectPermissionToDestroy),p=(0,a.v9)(w.Z.selectLoading),f=function(){s(!1)};return(0,b.jsxs)(C.Z,{children:[u&&(0,b.jsx)(x.rU,{to:"/gallery/".concat(l,"/edit"),children:(0,b.jsxs)("button",{className:"btn btn-primary",type:"button",children:[(0,b.jsx)(k.Z,{iconClass:"fas fa-edit"}),(0,i.ag)("common.edit")]})}),m&&(0,b.jsxs)("button",{className:"btn btn-primary",type:"button",disabled:p,onClick:function(){s(!0)},children:[(0,b.jsx)(k.Z,{loading:p,iconClass:"fas fa-trash-alt"}),(0,i.ag)("common.destroy")]}),d&&(0,b.jsx)(x.rU,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:(0,b.jsxs)("button",{className:"btn btn-light",type:"button",children:[(0,b.jsx)(k.Z,{iconClass:"fas fa-history"}),(0,i.ag)("auditLog.menu")]})}),o&&(0,b.jsx)(j.Z,{title:(0,i.ag)("common.areYouSure"),onConfirm:function(){return f(),void c(Z.Z.doDestroy(l))},onClose:function(){return f()},okText:(0,i.ag)("common.yes"),cancelText:(0,i.ag)("common.no")})]})},B=t(27829),P=t(53852),T=t(75352);var U=function(){var n=(0,a.I0)(),e=(0,o.$B)(),t=(0,a.v9)(u.selectLoading),c=(0,a.v9)(u.selectRecord);return(0,r.useEffect)((function(){n(s.Z.doFind(e.params.id))}),[n,e.params.id]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(P.Z,{items:[[(0,i.ag)("dashboard.menu"),"/"],[(0,i.ag)("entities.gallery.menu"),"/gallery"],[(0,i.ag)("entities.gallery.view.title")]]}),(0,b.jsxs)(B.Z,{children:[(0,b.jsx)(T.Z,{children:(0,i.ag)("entities.gallery.view.title")}),(0,b.jsx)(N,{match:e}),(0,b.jsx)(g,{loading:t,record:c})]})]})}},27829:function(n,e,t){var r,a=t(30168),o=t(91876).ZP.div(r||(r=(0,a.Z)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n  .card-stats .card-body {\n    padding: 15px !important;\n  }\n  .text-center {\n    text-align: center !important;\n  }\n  .card-stats .icon-big.icon-danger, .card-stats .icon-big.icon-default, .card-stats .icon-big.icon-info, .card-stats .icon-big.icon-primary, .card-stats .icon-big.icon-secondary, .card-stats .icon-big.icon-success, .card-stats .icon-big.icon-warning {\n    border-radius: 5px;\n}\n.card-stats .icon-big.icon-danger i, .card-stats .icon-big.icon-default i, .card-stats .icon-big.icon-info i, .card-stats .icon-big.icon-primary i, .card-stats .icon-big.icon-secondary i, .card-stats .icon-big.icon-success i, .card-stats .icon-big.icon-warning i {\n  color: #fff!important;\n}\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n  .d-inline-block {\n    display: inline-block !important;\n  }\n  .pl-3, .px-3 {\n    padding-left: 1rem !important;\n  }\n  .card-stats .icon-big {\n    width: 100%;\n    height: 100%;\n    font-size: 2.2em;\n    min-height: 64px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  \n  }\n  .bubble-shadow-small {\n  position: relative; \n  }\n\n  .card-title {\n    margin: 0;\n    color: #575962;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.6;\n  }\n  .card-stats .icon-big.icon-primary {\n    background: #177dff;\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n  "])));e.Z=o},53852:function(n,e,t){var r,a=t(30168),o=(t(47313),t(28303)),i=t(91876),s=t(46417),c=i.ZP.nav(r||(r=(0,a.Z)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"])));e.Z=function(n){var e=function(n){return n.length>1};return(0,s.jsx)(c,{children:(0,s.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(t,r){return(0,s.jsx)("li",{className:"breadcrumb-item ".concat(n.items.length-1===r?"active":""),children:e(t)?(0,s.jsx)(o.rU,{to:t[1],children:t[0]}):t[0]},t[0])}))})})}},95748:function(n,e,t){t(47313);var r=t(46417);e.Z=function(n){return n.loading?(0,r.jsx)("span",{className:"spinner-border spinner-border-sm"}):n.iconClass?(0,r.jsx)("i",{className:n.iconClass}):null}},61567:function(n,e,t){t(47313);var r=t(46417);e.Z=function(){return(0,r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,r.jsx)("div",{className:"spinner-border text-primary"})})}},44587:function(n,e,t){var r=t(47313),a=t(1168),o=t(46417);e.Z=function(n){var e=(0,r.useRef)();(0,r.useEffect)((function(){window.$(e.current).modal("show"),window.$(e.current).on("hidden.bs.modal",n.onClose)}),[]);return a.createPortal((0,o.jsx)("div",{ref:e,className:"modal",tabIndex:-1,children:(0,o.jsx)("div",{className:"modal-dialog modal-sm",children:(0,o.jsxs)("div",{className:"modal-content",children:[(0,o.jsxs)("div",{className:"modal-header",children:[(0,o.jsx)("h5",{className:"modal-title",children:n.title}),(0,o.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:(0,o.jsx)("span",{children:"\xd7"})})]}),(0,o.jsxs)("div",{className:"modal-footer",children:[(0,o.jsx)("button",{type:"button",className:"btn btn-light btn-sm","data-dismiss":"modal",children:n.cancelText}),(0,o.jsx)("button",{type:"button",onClick:function(){return window.$(e.current).modal("hide"),n.onConfirm()},className:"btn btn-primary btn-sm",children:n.okText})]})]})})}),document.getElementById("modal-root"))}},75352:function(n,e,t){var r,a=t(30168),o=t(91876).ZP.h1(r||(r=(0,a.Z)(["\n  margin-bottom: 24px;\n"])));e.Z=o},10419:function(n,e,t){var r,a=t(30168),o=t(91876).ZP.div(r||(r=(0,a.Z)(["\n  margin-bottom: 8px;\n\n  .btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));e.Z=o},25969:function(n,e,t){var r,a=t(30168),o=t(91876).ZP.div(r||(r=(0,a.Z)(["\n  .btn.btn-link {\n    padding-left: 0;\n  }\n"])));e.Z=o},89722:function(n,e,t){t.d(e,{Z:function(){return Z}});var r,a,o=t(42982),i=t(15861),s=t(70885),c=t(87757),l=t.n(c),d=t(47313),u=t(6891),m=t(33512),p=t(10499),f=t(30168),b=t(91876),g=b.ZP.div(r||(r=(0,f.Z)(["\n  .img-card:hover .img-buttons {\n    display: block;\n  }\n\n  .img-buttons {\n    display: none;\n    position: relative;\n    bottom: 2.1rem;\n    width: calc(100px);\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n\n  .img-buttons * {\n    color: white;\n  }\n"]))),h=t(46417),x=b.ZP.div(a||(a=(0,f.Z)(["\n  /* The Modal (background) */\n  .modal {\n    display: block;\n    position: fixed; /* Stay in place */\n    z-index: 9999; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0, 0, 0); /* Fallback color */\n    background-color: rgba(\n      0,\n      0,\n      0,\n      0.9\n    ); /* Black w/ opacity */\n  }\n\n  /* Modal Content (Image) */\n  .modal-content {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n  }\n\n  /* Caption of Modal Image (Image Text) - Same Width as the Image */\n  #caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n  }\n\n  /* Add Animation - Zoom in the Modal */\n  .modal-content,\n  #caption {\n    animation-name: zoom;\n    animation-duration: 0.6s;\n  }\n\n  @keyframes zoom {\n    from {\n      transform: scale(0);\n    }\n    to {\n      transform: scale(1);\n    }\n  }\n\n  /* The Close Button */\n  .close {\n    position: absolute;\n    top: 15px;\n    right: 35px;\n    color: #f1f1f1;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n  }\n\n  .close:hover,\n  .close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n  /* 100% Image Width on Smaller Screens */\n  @media only screen and (max-width: 700px) {\n    .modal-content {\n      width: 100%;\n    }\n  }\n"])));var v=function(n){return(0,h.jsx)(x,{children:(0,h.jsxs)("div",{className:"modal",children:[(0,h.jsx)("span",{className:"close",onClick:n.onClose,children:"\xd7"}),(0,h.jsx)("img",{className:"modal-content",src:n.src,alt:n.alt})]})})},y=t(95748);var Z=function(n){var e=(0,d.useState)(!1),t=(0,s.Z)(e,2),r=t[0],a=t[1],c=(0,d.useState)(null),f=(0,s.Z)(c,2),b=f[0],x=f[1],Z=(0,d.useRef)(),w=function(){var e=n.value;return e?Array.isArray(e)?e:[e]:[]},j=function(){var e=(0,i.Z)(l().mark((function e(t){var r,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(r=t.target.files)&&r.length){e.next=4;break}return e.abrupt("return");case 4:return i=r[0],u.Z.validate(i,{storage:n.storage,image:!0}),a(!0),e.next=9,u.Z.upload(i,{storage:n.storage,image:!0});case 9:i=e.sent,Z.current.value="",a(!1),n.onChange([].concat((0,o.Z)(w()),[i])),e.next=21;break;case 15:e.prev=15,e.t0=e.catch(0),Z.current.value="",console.error(e.t0),a(!1),m.Z.showMessage(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(n){return e.apply(this,arguments)}}(),C=n.max,k=n.readonly,N=(0,h.jsxs)("label",{className:"btn btn-outline-secondary px-4 mb-2",style:{cursor:"pointer"},children:[(0,h.jsx)(y.Z,{loading:r,iconClass:"fas fa-plus"}),(0,p.ag)("fileUploader.upload"),(0,h.jsx)("input",{style:{display:"none"},disabled:r||k,accept:"image/*",type:"file",onChange:j,ref:Z})]});return(0,h.jsxs)(g,{children:[k||C&&w().map((function(n){return{uid:n.id||void 0,name:n.name,status:"done",url:n.downloadUrl}})).length>=C?null:N,w()&&w().length?(0,h.jsx)("div",{className:"d-flex flex-row flex-wrap",children:w().map((function(e){return(0,h.jsxs)("div",{className:"mr-2 mb-2 img-card",style:{height:"100px"},children:[(0,h.jsx)("img",{alt:e.name,src:e.downloadUrl,className:"img-thumbnail",style:{width:"100px",height:"100px",objectFit:"cover"}}),(0,h.jsxs)("div",{className:"img-buttons rounded-bottom",children:[(0,h.jsx)("button",{type:"button",className:"btn btn-link",onClick:function(){return function(n){x({src:n.downloadUrl,alt:n.name})}(e)},children:(0,h.jsx)("i",{className:"fas fa-search"})}),!k&&(0,h.jsx)("button",{type:"button",className:"btn btn-link ml-2",onClick:function(){return t=e.id,void n.onChange(w().filter((function(n){return n.id!==t})));var t},children:(0,h.jsx)("i",{className:"fas fa-times"})})]})]},e.id)}))}):null,b&&(0,h.jsx)(v,{src:b.src,alt:b.alt,onClose:function(){x(null)}})]})}},69727:function(n,e,t){t(47313);var r=t(89722),a=t(46417);e.Z=function(n){var e=function(){var e=n.value;return e?Array.isArray(e)?e:[e]:[]};return e().length?(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{className:"col-form-label",children:n.label}),(0,a.jsx)("br",{}),(0,a.jsx)(r.Z,{readonly:!0,value:e()})]}):null}},99811:function(n,e,t){!function(e){var t=/^(b|B)$/,r={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},a={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]};function o(n){var e,o,i,s,c,l,d,u,m,p,f,b,g,h,x,v=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},y=[],Z=0,w=void 0,j=void 0;if(isNaN(n))throw new TypeError("Invalid number");return o=!0===v.bits,f=!0===v.unix,e=v.base||2,p=void 0!==v.round?v.round:f?1:2,l=void 0!==v.locale?v.locale:"",d=v.localeOptions||{},b=void 0!==v.separator?v.separator:"",g=void 0!==v.spacer?v.spacer:f?"":" ",x=v.symbols||{},h=2===e&&v.standard||"jedec",m=v.output||"string",s=!0===v.fullform,c=v.fullforms instanceof Array?v.fullforms:[],w=void 0!==v.exponent?v.exponent:-1,i=2<e?1e3:1024,(u=(j=Number(n))<0)&&(j=-j),(-1===w||isNaN(w))&&(w=Math.floor(Math.log(j)/Math.log(i)))<0&&(w=0),8<w&&(w=8),"exponent"===m?w:(0===j?(y[0]=0,y[1]=f?"":r[h][o?"bits":"bytes"][w]):(Z=j/(2===e?Math.pow(2,10*w):Math.pow(1e3,w)),o&&i<=(Z*=8)&&w<8&&(Z/=i,w++),y[0]=Number(Z.toFixed(0<w?p:0)),y[0]===i&&w<8&&void 0===v.exponent&&(y[0]=1,w++),y[1]=10===e&&1===w?o?"kb":"kB":r[h][o?"bits":"bytes"][w],f&&(y[1]="jedec"===h?y[1].charAt(0):0<w?y[1].replace(/B$/,""):y[1],t.test(y[1])&&(y[0]=Math.floor(y[0]),y[1]=""))),u&&(y[0]=-y[0]),y[1]=x[y[1]]||y[1],!0===l?y[0]=y[0].toLocaleString():0<l.length?y[0]=y[0].toLocaleString(l,d):0<b.length&&(y[0]=y[0].toString().replace(".",b)),"array"===m?y:(s&&(y[1]=c[w]?c[w]:a[h][w]+(o?"bit":"byte")+(1===y[0]?"":"s")),"object"===m?{value:y[0],symbol:y[1],exponent:w}:y.join(g)))}o.partial=function(n){return function(e){return o(e,n)}},n.exports=o}("undefined"!=typeof window?window:t.g)},71351:function(n,e,t){t.d(e,{Z:function(){return l}});var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),a=new Uint8Array(16);function o(){if(!r)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}for(var i=[],s=0;s<256;++s)i[s]=(s+256).toString(16).substr(1);var c=function(n,e){var t=e||0,r=i;return[r[n[t++]],r[n[t++]],r[n[t++]],r[n[t++]],"-",r[n[t++]],r[n[t++]],"-",r[n[t++]],r[n[t++]],"-",r[n[t++]],r[n[t++]],"-",r[n[t++]],r[n[t++]],r[n[t++]],r[n[t++]],r[n[t++]],r[n[t++]]].join("")};var l=function(n,e,t){var r=e&&t||0;"string"==typeof n&&(e="binary"===n?new Array(16):null,n=null);var a=(n=n||{}).random||(n.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e)for(var i=0;i<16;++i)e[r+i]=a[i];return e||c(a)}}}]);