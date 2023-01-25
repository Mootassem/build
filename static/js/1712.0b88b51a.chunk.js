(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[1712],{89994:function(n,r,t){"use strict";var e=t(42982),i=t(42277),a=t(10499),o=t(70816),c=t.n(o),u={generic:function(n){return i.nK().label(n)},string:function(n,r){r=r||{};var t=i.Z_().transform((function(n,r){return""===r?null:n})).nullable(!0).trim().label(n);return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),r.matches&&(t=t.matches(r.matches)),t},boolean:function(n,r){return i.Xg().default(!1).label(n)},relationToOne:function(n,r){r=r||{};var t=i.nK().nullable(!0).label(n).transform((function(n,r){return r?r.id:null}));return r.required&&(t=t.required()),t},stringArray:function(n,r){r=r||{};var t=i.IX().compact().ensure().of(i.Z_().transform((function(n,r){return""===r?null:n})).trim()).label(n);return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},relationToMany:function(n,r){r=r||{};var t=i.IX().nullable(!0).label(n).transform((function(n,r){return r&&r.length?r.map((function(n){return n.id})):[]}));return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},integer:function(n,r){r=r||{};var t=i.Rx().transform((function(n,r){return""===r?null:n})).integer().nullable(!0).label(n);return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),t},images:function(n,r){r=r||{};var t=i.IX().nullable(!0).label(n);return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},files:function(n,r){r=r||{};var t=i.IX().compact().ensure().nullable(!0).label(n);return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},enumerator:function(n,r){r=r||{};var t=i.Z_().transform((function(n,r){return""===r?null:n})).label(n).nullable(!0).oneOf([null].concat((0,e.Z)(r.options||[])));return r.required&&(t=t.required((0,a.ag)("validation.string.selected"))),t},email:function(n,r){r=r||{};var t=i.Z_().transform((function(n,r){return""===r?null:n})).nullable(!0).trim().label(n).email();return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),r.matches&&(t=t.matches(r.matches)),t},decimal:function(n,r){r=r||{};var t=i.Rx().transform((function(n,r){return""===r?null:n})).nullable(!0).label(n);return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),t},datetime:function(n,r){r=r||{};var t=i.nK().nullable(!0).label(n).transform((function(n,r){return n?c()(r,"YYYY-MM-DD HH:mm").toISOString():null}));return r.required&&(t=t.required()),t},date:function(n,r){r=r||{};var t=i.nK().nullable(!0).label(n).test("is-date",(0,a.ag)("validation.mixed.default"),(function(n){return!n||c()(n,"YYYY-MM-DD").isValid()})).transform((function(n){return n?c()(n).format("YYYY-MM-DD"):null}));return r.required&&(t=t.required()),t}};r.Z=u},47921:function(n,r,t){"use strict";var e=t(76747),i=function(n){return n.user.form},a=(0,e.P1)([i],(function(n){return n.user})),o={selectInitLoading:(0,e.P1)([i],(function(n){return Boolean(n.initLoading)})),selectSaveLoading:(0,e.P1)([i],(function(n){return Boolean(n.saveLoading)})),selectUser:a,selectRaw:i};r.Z=o},27829:function(n,r,t){"use strict";var e,i=t(30168),a=t(91876).ZP.div(e||(e=(0,i.Z)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n  .card-stats .card-body {\n    padding: 15px !important;\n  }\n  .text-center {\n    text-align: center !important;\n  }\n  .card-stats .icon-big.icon-danger, .card-stats .icon-big.icon-default, .card-stats .icon-big.icon-info, .card-stats .icon-big.icon-primary, .card-stats .icon-big.icon-secondary, .card-stats .icon-big.icon-success, .card-stats .icon-big.icon-warning {\n    border-radius: 5px;\n}\n.card-stats .icon-big.icon-danger i, .card-stats .icon-big.icon-default i, .card-stats .icon-big.icon-info i, .card-stats .icon-big.icon-primary i, .card-stats .icon-big.icon-secondary i, .card-stats .icon-big.icon-success i, .card-stats .icon-big.icon-warning i {\n  color: #fff!important;\n}\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n  .d-inline-block {\n    display: inline-block !important;\n  }\n  .pl-3, .px-3 {\n    padding-left: 1rem !important;\n  }\n  .card-stats .icon-big {\n    width: 100%;\n    height: 100%;\n    font-size: 2.2em;\n    min-height: 64px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  \n  }\n  .bubble-shadow-small {\n  position: relative; \n  }\n\n  .card-title {\n    margin: 0;\n    color: #575962;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.6;\n  }\n  .card-stats .icon-big.icon-primary {\n    background: #177dff;\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n  "])));r.Z=a},53852:function(n,r,t){"use strict";var e,i=t(30168),a=(t(47313),t(28303)),o=t(91876),c=t(46417),u=o.ZP.nav(e||(e=(0,i.Z)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"])));r.Z=function(n){var r=function(n){return n.length>1};return(0,c.jsx)(u,{children:(0,c.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(t,e){return(0,c.jsx)("li",{className:"breadcrumb-item ".concat(n.items.length-1===e?"active":""),children:r(t)?(0,c.jsx)(a.rU,{to:t[1],children:t[0]}):t[0]},t[0])}))})})}},95748:function(n,r,t){"use strict";t(47313);var e=t(46417);r.Z=function(n){return n.loading?(0,e.jsx)("span",{className:"spinner-border spinner-border-sm"}):n.iconClass?(0,e.jsx)("i",{className:n.iconClass}):null}},49384:function(n,r,t){"use strict";t.d(r,{Z:function(){return a}});var e=t(15671),i=t(43144),a=function(){function n(){(0,e.Z)(this,n)}return(0,i.Z)(n,null,[{key:"errorMessage",value:function(n,r,t,e){var i,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(a)return a;if(!e&&!t[n])return null;var o=r[n];return(null===o||void 0===o||null===(i=o[0])||void 0===i?void 0:i.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),n}()},68160:function(n,r,t){"use strict";var e,i=t(30168),a=t(91876).ZP.div(e||(e=(0,i.Z)(["\n  padding-top: 0;\n  padding-bottom: 0;\n\n  label.required::before {\n    display: inline-block;\n    margin-right: 4px;\n    content: '*';\n    line-height: 1;\n    font-size: 13px;\n    color: #f5222d;\n  }\n  .app__specification {\n    padding: 14px;\n  }\n  .react-datepicker-wrapper {\n    width: 100%;\n  }\n  i {\n    padding-right: 4px;\n    font-size: 14px;\n  }\n  .adherent-control {\n    z-index: 0;\n  }\n\n  .invalid-feedback {\n    display: block;\n  }\n\n  .form-buttons {\n    padding-top: 16px;\n\n    .btn {\n      margin-right: 8px;\n      margin-bottom: 8px;\n    }\n  }\n"])));r.Z=a},75352:function(n,r,t){"use strict";var e,i=t(30168),a=t(91876).ZP.h1(e||(e=(0,i.Z)(["\n  margin-bottom: 24px;\n"])));r.Z=a},34405:function(n,r,t){var e=t(99038);n.exports=function(n,r){return!!(null==n?0:n.length)&&e(n,r,0)>-1}},86722:function(n){n.exports=function(n,r,t){for(var e=-1,i=null==n?0:n.length;++e<i;)if(t(r,n[e]))return!0;return!1}},93527:function(n){n.exports=function(n,r,t,e){for(var i=n.length,a=t+(e?1:-1);e?a--:++a<i;)if(r(n[a],a,n))return a;return-1}},99038:function(n,r,t){var e=t(93527),i=t(57700),a=t(13245);n.exports=function(n,r,t){return r===r?a(n,r,t):e(n,i,t)}},57700:function(n){n.exports=function(n){return n!==n}},7579:function(n,r,t){var e=t(44526),i=t(34405),a=t(86722),o=t(88905),c=t(56946),u=t(73671);n.exports=function(n,r,t){var s=-1,l=i,f=n.length,m=!0,d=[],p=d;if(t)m=!1,l=a;else if(f>=200){var b=r?null:c(n);if(b)return u(b);m=!1,l=o,p=new e}else p=r?[]:d;n:for(;++s<f;){var g=n[s],x=r?r(g):g;if(g=t||0!==g?g:0,m&&x===x){for(var v=p.length;v--;)if(p[v]===x)continue n;r&&p.push(x),d.push(g)}else l(p,x,t)||(p!==d&&p.push(x),d.push(g))}return d}},56946:function(n,r,t){var e=t(4199),i=t(8568),a=t(73671),o=e&&1/a(new e([,-0]))[1]==1/0?function(n){return new e(n)}:i;n.exports=o},13245:function(n){n.exports=function(n,r,t){for(var e=t-1,i=n.length;++e<i;)if(n[e]===r)return e;return-1}},8568:function(n){n.exports=function(){}},35487:function(n,r,t){var e=t(81186),i=t(7579);n.exports=function(n,r){return n&&n.length?i(n,e(r,2)):[]}},31616:function(n,r,t){"use strict";var e=t(70885),i=t(1413),a=t(45987),o=t(46123),c=t.n(o),u=t(47313),s=t(68524),l=t(46417),f=["as","bsPrefix","className"],m=["className"];var d=u.forwardRef((function(n,r){var t=function(n){var r=n.as,t=n.bsPrefix,e=n.className,o=(0,a.Z)(n,f);t=(0,s.vE)(t,"col");var u=(0,s.pi)(),l=[],m=[];return u.forEach((function(n){var r,e,i,a=o[n];delete o[n],"object"===typeof a&&null!=a?(r=a.span,e=a.offset,i=a.order):r=a;var c="xs"!==n?"-".concat(n):"";r&&l.push(!0===r?"".concat(t).concat(c):"".concat(t).concat(c,"-").concat(r)),null!=i&&m.push("order".concat(c,"-").concat(i)),null!=e&&m.push("offset".concat(c,"-").concat(e))})),[(0,i.Z)((0,i.Z)({},o),{},{className:c().apply(void 0,[e].concat(l,m))}),{as:r,bsPrefix:t,spans:l}]}(n),o=(0,e.Z)(t,2),u=o[0],d=u.className,p=(0,a.Z)(u,m),b=o[1],g=b.as,x=void 0===g?"div":g,v=b.bsPrefix,h=b.spans;return(0,l.jsx)(x,(0,i.Z)((0,i.Z)({},p),{},{ref:r,className:c()(d,!h.length&&v)}))}));d.displayName="Col",r.Z=d},63849:function(n,r,t){"use strict";var e=t(1413),i=t(45987),a=t(46123),o=t.n(a),c=t(47313),u=t(68524),s=t(46417),l=["bsPrefix","className","as"],f=c.forwardRef((function(n,r){var t=n.bsPrefix,a=n.className,c=n.as,f=void 0===c?"div":c,m=(0,i.Z)(n,l),d=(0,u.vE)(t,"row"),p=(0,u.pi)(),b="".concat(d,"-cols"),g=[];return p.forEach((function(n){var r,t=m[n];delete m[n],r=null!=t&&"object"===typeof t?t.cols:t;var e="xs"!==n?"-".concat(n):"";null!=r&&g.push("".concat(b).concat(e,"-").concat(r))})),(0,s.jsx)(f,(0,e.Z)((0,e.Z)({ref:r},m),{},{className:o().apply(void 0,[a,d].concat(g))}))}));f.displayName="Row",r.Z=f},73622:function(n,r,t){"use strict";var e=t(15671),i=t(43144),a=t(60136),o=t(82963),c=t(61120),u=t(47313),s=t(16912),l=t(46383),f=(t(1168),t(82423)),m=(t(96312),t(71902),t(87201)),d=t(70342);function p(n){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,e=(0,c.Z)(n);if(r){var i=(0,c.Z)(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return(0,o.Z)(this,t)}}u.Component;var b=(0,m.m)(f.S);r.ZP=b},72632:function(){}}]);