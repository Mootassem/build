(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[3116],{67228:function(e){e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t},e.exports.__esModule=!0,e.exports.default=e.exports},22858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},23646:function(e,r,n){var t=n(67228);e.exports=function(e){if(Array.isArray(e))return t(e)},e.exports.__esModule=!0,e.exports.default=e.exports},43269:function(e,r,n){var t=n(60379);e.exports=function(e,r){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=t(e))||r&&e&&"number"===typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){u=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw i}}}},e.exports.__esModule=!0,e.exports.default=e.exports},46860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},13884:function(e){e.exports=function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(a.push(t.value),!r||a.length!==r);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},80521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},63038:function(e,r,n){var t=n(22858),o=n(13884),a=n(60379),i=n(80521);e.exports=function(e,r){return t(e)||o(e,r)||a(e,r)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,r,n){var t=n(23646),o=n(46860),a=n(60379),i=n(98206);e.exports=function(e){return t(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},60379:function(e,r,n){var t=n(67228);e.exports=function(e,r){if(e){if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},89994:function(e,r,n){"use strict";var t=n(42982),o=n(42277),a=n(10499),i=n(70816),l=n.n(i),u={generic:function(e){return o.nK().label(e)},string:function(e,r){r=r||{};var n=o.Z_().transform((function(e,r){return""===r?null:e})).nullable(!0).trim().label(e);return r.required&&(n=n.required()),(r.min||0===r.min)&&(n=n.min(r.min)),r.max&&(n=n.max(r.max)),r.matches&&(n=n.matches(r.matches)),n},boolean:function(e,r){return o.Xg().default(!1).label(e)},relationToOne:function(e,r){r=r||{};var n=o.nK().nullable(!0).label(e).transform((function(e,r){return r?r.id:null}));return r.required&&(n=n.required()),n},stringArray:function(e,r){r=r||{};var n=o.IX().compact().ensure().of(o.Z_().transform((function(e,r){return""===r?null:e})).trim()).label(e);return(r.required||r.min)&&(n=n.required()),r.min||0===r.min?n=n.min(r.min):r.required&&(n=n.min(1)),r.max&&(n=n.max(r.max)),n},relationToMany:function(e,r){r=r||{};var n=o.IX().nullable(!0).label(e).transform((function(e,r){return r&&r.length?r.map((function(e){return e.id})):[]}));return(r.required||r.min)&&(n=n.required()),r.min||0===r.min?n=n.min(r.min):r.required&&(n=n.min(1)),r.max&&(n=n.max(r.max)),n},integer:function(e,r){r=r||{};var n=o.Rx().transform((function(e,r){return""===r?null:e})).integer().nullable(!0).label(e);return r.required&&(n=n.required()),(r.min||0===r.min)&&(n=n.min(r.min)),r.max&&(n=n.max(r.max)),n},images:function(e,r){r=r||{};var n=o.IX().nullable(!0).label(e);return(r.required||r.min)&&(n=n.required()),r.min||0===r.min?n=n.min(r.min):r.required&&(n=n.min(1)),r.max&&(n=n.max(r.max)),n},files:function(e,r){r=r||{};var n=o.IX().compact().ensure().nullable(!0).label(e);return(r.required||r.min)&&(n=n.required()),r.min||0===r.min?n=n.min(r.min):r.required&&(n=n.min(1)),r.max&&(n=n.max(r.max)),n},enumerator:function(e,r){r=r||{};var n=o.Z_().transform((function(e,r){return""===r?null:e})).label(e).nullable(!0).oneOf([null].concat((0,t.Z)(r.options||[])));return r.required&&(n=n.required((0,a.ag)("validation.string.selected"))),n},email:function(e,r){r=r||{};var n=o.Z_().transform((function(e,r){return""===r?null:e})).nullable(!0).trim().label(e).email();return r.required&&(n=n.required()),(r.min||0===r.min)&&(n=n.min(r.min)),r.max&&(n=n.max(r.max)),r.matches&&(n=n.matches(r.matches)),n},decimal:function(e,r){r=r||{};var n=o.Rx().transform((function(e,r){return""===r?null:e})).nullable(!0).label(e);return r.required&&(n=n.required()),(r.min||0===r.min)&&(n=n.min(r.min)),r.max&&(n=n.max(r.max)),n},datetime:function(e,r){r=r||{};var n=o.nK().nullable(!0).label(e).transform((function(e,r){return e?l()(r,"YYYY-MM-DD HH:mm").toISOString():null}));return r.required&&(n=n.required()),n},date:function(e,r){r=r||{};var n=o.nK().nullable(!0).label(e).test("is-date",(0,a.ag)("validation.mixed.default"),(function(e){return!e||l()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?l()(e).format("YYYY-MM-DD"):null}));return r.required&&(n=n.required()),n}};r.Z=u},33116:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return A}});var t,o=n(1413),a=n(70885),i=n(47313),l=n(43270),u=n(45788),s=n(28303),c=n(10499),f=n(926),d=n(86495),m=n(89994),p=n(32377),x=n(37078),g=n(11581),h=n(94827),b=n(15576),v=n(30168),y=n(91876),j=y.ZP.div(t||(t=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin-top: 24px;\n\n  img {\n    margin-right: 8px;\n    cursor: pointer;\n  }\n"]))),Z=n(46417);var w,k=function(e){return(0,Z.jsx)(j,{children:(0,c.Vb)().map((function(e){return(0,Z.jsx)("img",{alt:e.label,title:e.label,src:e.flag,onClick:function(){return function(e){b.Z.doChangeLanguage(e)}(e.id)}},e.id)}))})},q=n(95748),M=n(47575),S=n(42277),N=n(67357),C=y.ZP.div(w||(w=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 24px;\n\n  i {\n    margin-left: 16px;\n    margin-right: 16px;\n    font-size: 36px;\n    cursor: pointer;\n  }\n"]))),_=n(86430),I=n(63830),E=n(31172),F=n(14122),O=S.Ry().shape({email:m.Z.string((0,c.ag)("user.fields.email"),{required:!0}),password:m.Z.string((0,c.ag)("user.fields.password"),{required:!0}),rememberMe:m.Z.boolean((0,c.ag)("user.fields.rememberMe"))});var A=function(){var e=(0,I.TH)(),r=(0,u.I0)(),n=(0,u.v9)(d.Z.selectLoading),t=E.parse(e.search).socialErrorCode,m=(0,u.v9)(d.Z.selectErrorMessage),b=(0,u.v9)(d.Z.selectBackgroundImageUrl),v=(0,u.v9)(d.Z.selectLogoUrl);(0,i.useEffect)((function(){r(f.Z.doClearErrorMessage())}),[r]),(0,i.useEffect)((function(){t&&("generic"===t?F.Z.error((0,c.ag)("errors.defaultErrorMessage")):F.Z.error((0,c.ag)("auth.social.errors.".concat(t))))}),[]);var y=(0,i.useState)({email:"",password:"",rememberMe:!0}),j=(0,a.Z)(y,1)[0],w=(0,l.cI)({resolver:(0,N.X)(O),mode:"onSubmit",defaultValues:j});return(0,Z.jsx)(h.Z,{style:{backgroundImage:"url(".concat(b||"/images/signin.jpg",")")},children:(0,Z.jsxs)(p.Z,{children:[(0,Z.jsx)(x.Z,{children:v?(0,Z.jsx)("img",{src:v,width:"240px",alt:(0,c.ag)("app.title")}):(0,Z.jsx)("h1",{children:(0,c.ag)("app.title")})}),(0,Z.jsx)(l.RV,(0,o.Z)((0,o.Z)({},w),{},{children:(0,Z.jsxs)("form",{onSubmit:w.handleSubmit((function(e){var n=e.email,t=e.password,o=e.rememberMe;r(f.Z.doSigninWithEmailAndPassword(n,t,o))})),children:[(0,Z.jsx)(M.Z,{name:"email",placeholder:(0,c.ag)("user.fields.email"),autoComplete:"email",autoFocus:!0,externalErrorMessage:m}),(0,Z.jsx)(M.Z,{name:"password",placeholder:(0,c.ag)("user.fields.password"),autoComplete:"password",type:"password"}),(0,Z.jsxs)("div",{className:"d-flex form-group",children:[(0,Z.jsxs)("div",{className:"form-check col-6",children:[(0,Z.jsx)("input",{className:"form-check-input",type:"checkbox",id:"rememberMe",name:"rememberMe",ref:w.register}),(0,Z.jsx)("label",{className:"form-check-label",htmlFor:"rememberMe",children:(0,c.ag)("user.fields.rememberMe")})]}),(0,Z.jsx)("div",{className:"col-6 pr-0",children:(0,Z.jsx)(s.rU,{className:"btn btn-sm btn-link",style:{float:"right"},to:"/auth/forgot-password",children:(0,c.ag)("auth.forgotPassword")})})]}),(0,Z.jsxs)("button",{className:"btn btn-primary btn-block",type:"submit",disabled:n,children:[(0,Z.jsx)(q.Z,{loading:n}),(0,c.ag)("auth.signin")]}),(0,Z.jsxs)(C,{children:[(0,Z.jsx)("a",{href:"".concat(_.Z.backendUrl,"/auth/social/facebook"),children:(0,Z.jsx)("i",{className:"fab fa-facebook",style:{color:"#3B5998"}})}),(0,Z.jsx)("a",{href:"".concat(_.Z.backendUrl,"/auth/social/google"),children:(0,Z.jsx)("i",{className:"fab fa-google",style:{color:"#DB4437"}})})]}),(0,Z.jsx)(g.Z,{children:(0,Z.jsx)(s.rU,{className:"btn btn-sm btn-link",to:"/auth/signup",children:(0,c.ag)("auth.createAnAccount")})}),(0,Z.jsx)(k,{style:{marginTop:"24px"}})]})}))]})})}},32377:function(e,r,n){"use strict";var t,o=n(30168),a=n(91876).ZP.div(t||(t=(0,o.Z)(["\n  width: 500px;\n  height: 100%;\n  min-height: 100%;\n  overflow-y: auto;\n  z-index: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 56px 40px;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: white;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  a,\n  a:hover {\n    color: white;\n  }\n\n  .btn-link,\n  .btn-link:hover {\n    color: white;\n  }\n\n  .invalid-feedback {\n    display: block;\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n"])));r.Z=a},37078:function(e,r,n){"use strict";var t,o=n(30168),a=n(91876).ZP.div(t||(t=(0,o.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 48px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  color: white;\n\n  h1 {\n    margin-bottom: 0;\n  }\n"])));r.Z=a},11581:function(e,r,n){"use strict";var t,o=n(30168),a=n(91876).ZP.div(t||(t=(0,o.Z)(["\n  margin-top: 24px;\n  text-align: center;\n"])));r.Z=a},94827:function(e,r,n){"use strict";var t,o=n(30168),a=n(91876).ZP.div(t||(t=(0,o.Z)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n  }\n"])));r.Z=a},95748:function(e,r,n){"use strict";n(47313);var t=n(46417);r.Z=function(e){return e.loading?(0,t.jsx)("span",{className:"spinner-border spinner-border-sm"}):e.iconClass?(0,t.jsx)("i",{className:e.iconClass}):null}},49384:function(e,r,n){"use strict";n.d(r,{Z:function(){return a}});var t=n(15671),o=n(43144),a=function(){function e(){(0,t.Z)(this,e)}return(0,o.Z)(e,null,[{key:"errorMessage",value:function(e,r,n,t){var o,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(a)return a;if(!t&&!n[e])return null;var i=r[e];return(null===i||void 0===i||null===(o=i[0])||void 0===o?void 0:o.message)||(null===i||void 0===i?void 0:i.message)||i||null}}]),e}()},47575:function(e,r,n){"use strict";n(47313);var t=n(43270),o=n(49384),a=n(46417);function i(e){var r=e.label,n=e.description,i=e.name,l=e.hint,u=e.type,s=e.placeholder,c=e.autoFocus,f=e.autoComplete,d=e.required,m=e.externalErrorMessage,p=e.disabled,x=e.endAdornment,g=(0,t.Gc)(),h=g.register,b=g.errors,v=g.formState,y=v.touched,j=v.isSubmitted,Z=o.Z.errorMessage(i,b,y,j,m);return(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("div",{className:x?"input-group":"",children:[Boolean(r)&&(0,a.jsx)("label",{className:"col-form-label ".concat(d?"required":null),htmlFor:i,children:r}),n,(0,a.jsx)("input",{id:i,name:i,type:u,ref:h,onChange:function(r){e.onChange&&e.onChange(r.target.value)},onBlur:function(r){e.onBlur&&e.onBlur(r)},placeholder:s||void 0,autoFocus:c||void 0,autoComplete:f||void 0,disabled:p,className:"form-control ".concat(Z?"is-invalid":"")}),x&&(0,a.jsx)("div",{className:"input-group-append",children:(0,a.jsx)("span",{className:"input-group-text",children:x})})]}),(0,a.jsx)("div",{className:"invalid-feedback",children:Z}),Boolean(l)&&(0,a.jsx)("small",{className:"form-text text-muted",children:l})]})}i.defaultProps={type:"text",required:!1},r.Z=i},8271:function(e){"use strict";var r="%[a-f0-9]{2}",n=new RegExp(r,"gi"),t=new RegExp("("+r+")+","gi");function o(e,r){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;r=r||1;var n=e.slice(0,r),t=e.slice(r);return Array.prototype.concat.call([],o(n),o(t))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var r=e.match(n),t=1;t<r.length;t++)r=(e=o(r,t).join("")).match(n);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(r){return function(e){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},o=t.exec(e);o;){try{n[o[0]]=decodeURIComponent(o[0])}catch(r){var i=a(o[0]);i!==o[0]&&(n[o[0]]=i)}o=t.exec(e)}n["%C2"]="\ufffd";for(var l=Object.keys(n),u=0;u<l.length;u++){var s=l[u];e=e.replace(new RegExp(s,"g"),n[s])}return e}(e)}}},31172:function(e,r,n){"use strict";var t=n(63038).default,o=n(43269).default,a=n(319).default,i=n(82376),l=n(8271),u=n(94266);function s(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function c(e,r){return r.encode?r.strict?i(e):encodeURIComponent(e):e}function f(e,r){return r.decode?l(e):e}function d(e){return Array.isArray(e)?e.sort():"object"===typeof e?d(Object.keys(e)).sort((function(e,r){return Number(e)-Number(r)})).map((function(r){return e[r]})):e}function m(e){var r=e.indexOf("#");return-1!==r&&(e=e.slice(0,r)),e}function p(e){var r=(e=m(e)).indexOf("?");return-1===r?"":e.slice(r+1)}function x(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!r.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function g(e,r){s((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);var n=function(e){var r;switch(e.arrayFormat){case"index":return function(e,n,t){r=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),r?(void 0===t[e]&&(t[e]={}),t[e][r[1]]=n):t[e]=n};case"bracket":return function(e,n,t){r=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),r?void 0!==t[e]?t[e]=[].concat(t[e],n):t[e]=[n]:t[e]=n};case"comma":case"separator":return function(r,n,t){var o="string"===typeof n&&n.includes(e.arrayFormatSeparator),a="string"===typeof n&&!o&&f(n,e).includes(e.arrayFormatSeparator);n=a?f(n,e):n;var i=o||a?n.split(e.arrayFormatSeparator).map((function(r){return f(r,e)})):null===n?n:f(n,e);t[r]=i};default:return function(e,r,n){void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=r}}}(r),a=Object.create(null);if("string"!==typeof e)return a;if(!(e=e.trim().replace(/^[?#&]/,"")))return a;var i,l=o(e.split("&"));try{for(l.s();!(i=l.n()).done;){var c=i.value,m=u(r.decode?c.replace(/\+/g," "):c,"="),p=t(m,2),g=p[0],h=p[1];h=void 0===h?null:["comma","separator"].includes(r.arrayFormat)?h:f(h,r),n(f(g,r),h,a)}}catch(q){l.e(q)}finally{l.f()}for(var b=0,v=Object.keys(a);b<v.length;b++){var y=v[b],j=a[y];if("object"===typeof j&&null!==j)for(var Z=0,w=Object.keys(j);Z<w.length;Z++){var k=w[Z];j[k]=x(j[k],r)}else a[y]=x(j,r)}return!1===r.sort?a:(!0===r.sort?Object.keys(a).sort():Object.keys(a).sort(r.sort)).reduce((function(e,r){var n=a[r];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?e[r]=d(n):e[r]=n,e}),Object.create(null))}r.extract=p,r.parse=g,r.stringify=function(e,r){if(!e)return"";s((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);for(var n=function(n){return r.skipNull&&(null===(t=e[n])||void 0===t)||r.skipEmptyString&&""===e[n];var t},t=function(e){switch(e.arrayFormat){case"index":return function(r){return function(n,t){var o=n.length;return void 0===t||e.skipNull&&null===t||e.skipEmptyString&&""===t?n:[].concat(a(n),null===t?[[c(r,e),"[",o,"]"].join("")]:[[c(r,e),"[",c(o,e),"]=",c(t,e)].join("")])}};case"bracket":return function(r){return function(n,t){return void 0===t||e.skipNull&&null===t||e.skipEmptyString&&""===t?n:[].concat(a(n),null===t?[[c(r,e),"[]"].join("")]:[[c(r,e),"[]=",c(t,e)].join("")])}};case"comma":case"separator":return function(r){return function(n,t){return null===t||void 0===t||0===t.length?n:0===n.length?[[c(r,e),"=",c(t,e)].join("")]:[[n,c(t,e)].join(e.arrayFormatSeparator)]}};default:return function(r){return function(n,t){return void 0===t||e.skipNull&&null===t||e.skipEmptyString&&""===t?n:[].concat(a(n),null===t?[c(r,e)]:[[c(r,e),"=",c(t,e)].join("")])}}}}(r),o={},i=0,l=Object.keys(e);i<l.length;i++){var u=l[i];n(u)||(o[u]=e[u])}var f=Object.keys(o);return!1!==r.sort&&f.sort(r.sort),f.map((function(n){var o=e[n];return void 0===o?"":null===o?c(n,r):Array.isArray(o)?o.reduce(t(n),[]).join("&"):c(n,r)+"="+c(o,r)})).filter((function(e){return e.length>0})).join("&")},r.parseUrl=function(e,r){r=Object.assign({decode:!0},r);var n=u(e,"#"),o=t(n,2),a=o[0],i=o[1];return Object.assign({url:a.split("?")[0]||"",query:g(p(e),r)},r&&r.parseFragmentIdentifier&&i?{fragmentIdentifier:f(i,r)}:{})},r.stringifyUrl=function(e,n){n=Object.assign({encode:!0,strict:!0},n);var t=m(e.url).split("?")[0]||"",o=r.extract(e.url),a=r.parse(o,{sort:!1}),i=Object.assign(a,e.query),l=r.stringify(i,n);l&&(l="?".concat(l));var u=function(e){var r="",n=e.indexOf("#");return-1!==n&&(r=e.slice(n)),r}(e.url);return e.fragmentIdentifier&&(u="#".concat(c(e.fragmentIdentifier,n))),"".concat(t).concat(l).concat(u)}},94266:function(e){"use strict";e.exports=function(e,r){if("string"!==typeof e||"string"!==typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[e];var n=e.indexOf(r);return-1===n?[e]:[e.slice(0,n),e.slice(n+r.length)]}},82376:function(e){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}}}]);