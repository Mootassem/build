"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[6537],{56537:function(e,n,a){a.r(n),a.d(n,{default:function(){return G}});var t=a(47313),l=a(10499),i=a(1413),r=a(70885),s=a(43270),o=a(35188),d=a(23516),c=a(45788),u=a(63830),m=a(25803),f=a(94561),g=a(49384),p=a(46417);function h(e){var n=e.label,a=e.name,r=e.hint,o=e.externalErrorMessage,d=e.required,c=e.placeholder,u=e.isClearable,m=e.notFoundContent,h=(0,s.Gc)(),x=h.register,v=h.errors,b=h.formState,y=b.touched,j=b.isSubmitted,Z=h.setValue,N=h.watch,w=g.Z.errorMessage(a,v,y,j,o);(0,t.useEffect)((function(){x({name:a})}),[x,a]);var C=N(a),B=Boolean(w)?{control:function(e){return(0,i.Z)((0,i.Z)({},e),{},{borderColor:"red"})}}:void 0;return(0,p.jsxs)("div",{className:"form-group",children:[Boolean(n)&&(0,p.jsx)("label",{className:"col-form-label ".concat(d?"required":null),children:n}),(0,p.jsx)("br",{}),(0,p.jsx)(f.ZP,{className:"w-100",value:C&&C.length?C.map((function(e){return{value:e,label:e}})):[],onChange:function(n){if(!n||!n.length)return Z(a,null,{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange(null));var t=n.map((function(e){return e.value})).join(",").split(",");Z(a,t,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t)},onBlur:function(n){e.onBlur&&e.onBlur(n)},id:a,name:a,placeholder:c||"",isClearable:u,styles:B,isMulti:!0,formatCreateLabel:function(e){return e},loadingMessage:function(){return(0,l.ag)("autocomplete.loading")},noOptionsMessage:function(){return m||""}}),(0,p.jsx)("div",{className:"invalid-feedback",children:w}),Boolean(r)&&(0,p.jsx)("small",{className:"form-text text-muted",children:r})]})}h.defaultProps={required:!1,isClearable:!0};var x=h,v=a(47575),b=a(95748),y=a(69138),j=a(47590),Z=a(42277),N=a(31172),w=a(67357),C=a(13586),B=a(40846),L=Z.Ry().shape({timestampRange:j.Z.datetimeRange((0,l.ag)("auditLog.fields.timestampRange")),entityNames:j.Z.stringArray((0,l.ag)("auditLog.fields.entityNames")),entityId:j.Z.string((0,l.ag)("auditLog.fields.entityId")),action:j.Z.string((0,l.ag)("auditLog.fields.action")),createdByEmail:j.Z.email((0,l.ag)("auditLog.fields.createdByEmail"))}),k={timestampRange:[],entityNames:[],entityId:null,action:null,createdByEmail:null},E={timestampRange:{label:(0,l.ag)("auditLog.fields.timestampRange"),render:B.Z.datetimeRange()},entityNames:{label:(0,l.ag)("auditLog.fields.entityNames"),render:B.Z.stringArray()},entityId:{label:(0,l.ag)("auditLog.fields.entityId"),render:B.Z.generic()},action:{label:(0,l.ag)("auditLog.fields.action"),render:B.Z.generic()},createdByEmail:{label:(0,l.ag)("auditLog.fields.createdByEmail"),render:B.Z.generic()}};var R=function(e){var n=(0,c.v9)(d.Z.selectRawFilter),a=(0,c.I0)(),f=(0,u.TH)(),g=(0,t.useState)(!1),h=(0,r.Z)(g,2),j=h[0],Z=h[1],B=(0,t.useState)((function(){var e=(0,i.Z)((0,i.Z)({},k),n),a=N.parse(f.search);return e.entityNames=a.entityNames||e.entityNames,e.entityNames&&!Array.isArray(e.entityNames)&&(e.entityNames=[e.entityNames]),e.entityId=a.entityId||e.entityId,e.createdByEmail=a.createdByEmail||e.createdByEmail,e})),R=(0,r.Z)(B,1)[0],I=(0,s.cI)({resolver:(0,w.X)(L),defaultValues:R,mode:"all"});(0,t.useEffect)((function(){a(o.Z.doFetch(L.cast(R),n))}),[a]);var S=function(e){var n=I.getValues();a(o.Z.doFetch(e,n)),Z(!1)},M=e.loading;return(0,p.jsxs)(y.Z,{children:[(0,p.jsx)(C.Z,{onClick:function(){Z(!j)},renders:E,values:n,expanded:j,onRemove:function(e){return I.setValue(e,k[e]),I.handleSubmit(S)()}}),(0,p.jsx)("div",{className:"container",children:(0,p.jsx)("div",{className:"collapse ".concat(j?"show":""),children:(0,p.jsx)(s.RV,(0,i.Z)((0,i.Z)({},I),{},{children:(0,p.jsxs)("form",{onSubmit:I.handleSubmit(S),children:[(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-lg-6 col-12",children:(0,p.jsx)(m.Z,{name:"timestampRange",label:(0,l.ag)("auditLog.fields.timestampRange"),showTimeInput:!0})}),(0,p.jsx)("div",{className:"col-lg-6 col-12",children:(0,p.jsx)(v.Z,{name:"createdByEmail",label:(0,l.ag)("auditLog.fields.createdByEmail")})}),(0,p.jsx)("div",{className:"col-lg-6 col-12",children:(0,p.jsx)(x,{name:"entityNames",label:(0,l.ag)("auditLog.fields.entityNames"),notFoundContent:(0,l.ag)("auditLog.entityNamesHint")})}),(0,p.jsx)("div",{className:"col-lg-6 col-12",children:(0,p.jsx)(v.Z,{name:"entityId",label:(0,l.ag)("auditLog.fields.entityId")})}),(0,p.jsx)("div",{className:"col-lg-6 col-12",children:(0,p.jsx)(v.Z,{name:"action",label:(0,l.ag)("auditLog.fields.action")})})]}),(0,p.jsx)("div",{className:"row",children:(0,p.jsxs)("div",{className:"col-12 filter-buttons",children:[(0,p.jsxs)("button",{className:"btn btn-primary",type:"submit",children:[(0,p.jsx)(b.Z,{loading:M,iconClass:"fas fa-search"}),(0,l.ag)("common.search")]}),(0,p.jsxs)("button",{className:"btn btn-light",type:"button",onClick:function(){Object.keys(k).forEach((function(e){I.setValue(e,k[e])})),a(o.Z.doReset()),Z(!1)},children:[(0,p.jsx)(b.Z,{loading:M,iconClass:"fas fa-undo"}),(0,l.ag)("common.reset")]})]})})]})}))})})]})},I=a(61567),S=a(27216),M=a(97249),F=a(98848),V=a(70816),H=a.n(V);var q=function(e){var n=(0,c.I0)(),a=function(e){var a=u.field===e&&"ascend"===u.order?"descend":"ascend";n(o.Z.doChangeSort({field:e,order:a}))},t=(0,c.v9)(d.Z.selectLoading),i=(0,c.v9)(d.Z.selectRows),r=(0,c.v9)(d.Z.selectPagination),s=(0,c.v9)(d.Z.selectHasRows),u=(0,c.v9)(d.Z.selectSorter);return(0,p.jsxs)(S.Z,{children:[(0,p.jsx)("div",{className:"table-responsive",children:(0,p.jsxs)("table",{className:"table table-striped mt-2",children:[(0,p.jsx)("thead",{className:"thead",children:(0,p.jsxs)("tr",{children:[(0,p.jsx)(F.Z,{onSort:a,hasRows:s,sorter:u,name:"timestamp",label:(0,l.ag)("auditLog.fields.timestamp")}),(0,p.jsx)(F.Z,{onSort:a,hasRows:s,sorter:u,name:"createdByEmail",label:(0,l.ag)("auditLog.fields.createdByEmail")}),(0,p.jsx)(F.Z,{onSort:a,hasRows:s,sorter:u,name:"entityName",label:(0,l.ag)("auditLog.fields.entityName")}),(0,p.jsx)(F.Z,{onSort:a,hasRows:s,sorter:u,name:"action",label:(0,l.ag)("auditLog.fields.action")}),(0,p.jsx)(F.Z,{onSort:a,hasRows:s,sorter:u,name:"entityId",label:(0,l.ag)("auditLog.fields.entityId")}),(0,p.jsx)(F.Z,{className:"th-actions-sm"})]})}),(0,p.jsxs)("tbody",{children:[t&&(0,p.jsx)("tr",{children:(0,p.jsx)("td",{colSpan:100,children:(0,p.jsx)(I.Z,{})})}),!t&&!s&&(0,p.jsx)("tr",{children:(0,p.jsx)("td",{colSpan:100,children:(0,p.jsx)("div",{className:"d-flex justify-content-center",children:(0,l.ag)("table.noData")})})}),!t&&i.map((function(e){return(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:H()(e.timestamp).format("YYYY-MM-DD HH:mm")}),(0,p.jsx)("td",{children:e.createdByEmail}),(0,p.jsx)("td",{children:e.entityName}),(0,p.jsx)("td",{children:e.action}),(0,p.jsx)("td",{children:e.entityId}),(0,p.jsx)("td",{children:(0,p.jsx)("button",{className:"btn btn-link",type:"button",onClick:function(){return function(e){var n=JSON.stringify(e,null,2);window.open("","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400").document.write("<pre>".concat(n,"</pre>"))}(e.values)},children:(0,l.ag)("common.view")})})]},e.id)}))]})]})}),(0,p.jsx)(M.Z,{onChange:function(e){n(o.Z.doChangePagination(e))},disabled:t,pagination:r})]})},A=a(883),D=a(10419);var P=function(e){var n=(0,c.v9)(d.Z.selectLoading),a=(0,c.v9)(d.Z.selectExportLoading),t=(0,c.v9)(d.Z.selectHasRows),i=(0,c.I0)(),r=!t||n;return(0,p.jsxs)(D.Z,{children:[(0,p.jsx)("span",{"data-tip":(0,l.ag)("common.noDataToExport"),"data-tip-disable":!r,"data-for":"audit-log-toolbar-export-tooltip",children:(0,p.jsx)("button",{className:"btn btn-light",type:"button",disabled:r,onClick:function(){i(o.Z.doExport())},children:(0,p.jsx)(b.Z,{loading:a,iconClass:"far fa-file-excel"})})}),(0,p.jsx)(A.Z,{id:"audit-log-toolbar-export-tooltip"})]})},T=a(27829),O=a(53852),Y=a(75352);var G=function(e){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(O.Z,{items:[[(0,l.ag)("dashboard.menu"),"/"],[(0,l.ag)("auditLog.menu")]]}),(0,p.jsxs)(T.Z,{children:[(0,p.jsx)(Y.Z,{children:(0,l.ag)("auditLog.title")}),(0,p.jsx)(P,{}),(0,p.jsx)(R,{}),(0,p.jsx)(q,{})]})]})}},13586:function(e,n,a){a.d(n,{Z:function(){return i}});a(47313);var t=a(10499),l=a(46417);function i(e){var n=e.values,a=e.renders,i=e.onClick,r=e.onRemove,s=Object.keys(n||{}).map((function(e){return a[e]?{key:e,label:a[e].label,value:a[e].render(n[e])}:{value:null}})).filter((function(e){return e.value||0===e.value||!1===e.value}));return(0,l.jsxs)("div",{onClick:i,className:"filter-preview",children:[!s.length||e.expanded?(0,l.jsx)("div",{className:"filter-preview-left",children:(0,t.ag)("common.filters")}):(0,l.jsxs)("div",{className:"filter-preview-left",children:[(0,t.ag)("common.filters"),":",(0,l.jsx)("span",{className:"filter-preview-values",children:s.map((function(e){return(0,l.jsxs)("span",{className:"badge badge-dark",style:{cursor:"default"},onClick:function(e){e.stopPropagation()},children:["".concat(e.label,": ").concat(e.value),r&&(0,l.jsx)("i",{style:{marginLeft:4,backgroundColor:"rgba(0,0,0,0.5)",padding:2,borderRadius:999,cursor:"pointer"},onClick:r?function(){return r(e.key)}:void 0,className:"fas fa-times"})]},e.label)}))})]}),(0,l.jsx)("div",{className:"filter-preview-right",children:e.expanded?(0,l.jsx)("i",{className:"fas fa-chevron-up"},"fa-chevron-up"):(0,l.jsx)("i",{className:"fas fa-chevron-down"},"fa-chevron-down")})]})}},49384:function(e,n,a){a.d(n,{Z:function(){return i}});var t=a(15671),l=a(43144),i=function(){function e(){(0,t.Z)(this,e)}return(0,l.Z)(e,null,[{key:"errorMessage",value:function(e,n,a,t){var l,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!t&&!a[e])return null;var r=n[e];return(null===r||void 0===r||null===(l=r[0])||void 0===l?void 0:l.message)||(null===r||void 0===r?void 0:r.message)||r||null}}]),e}()},25803:function(e,n,a){var t=a(47313),l=a(43270),i=a(49384),r=a(61378),s=a.n(r),o=(a(72632),a(46417));function d(e){var n=e.label,a=e.name,r=e.hint,d=e.placeholder,c=e.autoFocus,u=e.required,m=e.showTimeInput,f=e.externalErrorMessage,g=(0,l.Gc)(),p=g.register,h=g.errors,x=g.formState,v=x.touched,b=x.isSubmitted,y=g.setValue,j=g.watch,Z=i.Z.errorMessage(a,h,v,b,f),N=j(a);(0,t.useEffect)((function(){p({name:a})}),[p,a]);var w=function(){return N?Array.isArray(!N)?null:N.length&&N[0]||null:null},C=function(){return N?Array.isArray(!N)||N.length<2?null:N[1]||null:null};return(0,o.jsxs)("div",{className:"form-group",children:[Boolean(n)&&(0,o.jsx)("label",{className:"col-form-label ".concat(u?"required":null),htmlFor:a,children:n}),(0,o.jsxs)("div",{style:{display:"flex",flexWrap:"nowrap",alignItems:"baseline"},children:[(0,o.jsx)(s(),{id:"".concat(a,"Start"),name:"".concat(a,"Start"),onChange:function(n){return function(n){y(a,[n,C()],{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange([n,C()])}(n)},onBlur:function(n){e.onBlur&&e.onBlur(n)},selected:w(),className:"form-control ".concat(Z?"is-invalid":""),showTimeInput:m,popperModifiers:{preventOverflow:{enabled:!0,escapeWithReference:!1,boundariesElement:"viewport"}},placeholderText:d||"",autoFocus:c||void 0,autoComplete:"off",dateFormat:m?"yyyy-MM-dd HH:mm":"yyyy-MM-dd",timeIntervals:15}),(0,o.jsx)("div",{style:{flexShrink:1,marginLeft:"8px",marginRight:"8px"},children:"~"}),(0,o.jsx)(s(),{id:"".concat(a,"End"),name:"".concat(a,"End"),onChange:function(n){return function(n){y(a,[w(),n],{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange([w(),n])}(n)},onBlur:function(n){e.onBlur&&e.onBlur(n)},selected:C(),className:"form-control ".concat(Z?"is-invalid":""),showTimeInput:m,placeholderText:d||"",autoFocus:c||void 0,autoComplete:"off",dateFormat:m?"yyyy-MM-dd HH:mm":"yyyy-MM-dd",timeIntervals:15,popperModifiers:{preventOverflow:{enabled:!0,escapeWithReference:!1,boundariesElement:"viewport"}}})]}),(0,o.jsx)("div",{className:"invalid-feedback",children:Z}),Boolean(r)&&(0,o.jsx)("small",{className:"form-text text-muted",children:r})]})}d.defaultProps={required:!1},n.Z=d},47575:function(e,n,a){a(47313);var t=a(43270),l=a(49384),i=a(46417);function r(e){var n=e.label,a=e.description,r=e.name,s=e.hint,o=e.type,d=e.placeholder,c=e.autoFocus,u=e.autoComplete,m=e.required,f=e.externalErrorMessage,g=e.disabled,p=e.endAdornment,h=(0,t.Gc)(),x=h.register,v=h.errors,b=h.formState,y=b.touched,j=b.isSubmitted,Z=l.Z.errorMessage(r,v,y,j,f);return(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsxs)("div",{className:p?"input-group":"",children:[Boolean(n)&&(0,i.jsx)("label",{className:"col-form-label ".concat(m?"required":null),htmlFor:r,children:n}),a,(0,i.jsx)("input",{id:r,name:r,type:o,ref:x,onChange:function(n){e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},placeholder:d||void 0,autoFocus:c||void 0,autoComplete:u||void 0,disabled:g,className:"form-control ".concat(Z?"is-invalid":"")}),p&&(0,i.jsx)("div",{className:"input-group-append",children:(0,i.jsx)("span",{className:"input-group-text",children:p})})]}),(0,i.jsx)("div",{className:"invalid-feedback",children:Z}),Boolean(s)&&(0,i.jsx)("small",{className:"form-text text-muted",children:s})]})}r.defaultProps={type:"text",required:!1},n.Z=r},69138:function(e,n,a){var t,l=a(30168),i=a(91876).ZP.div(t||(t=(0,l.Z)(["\n  border: 1px solid #e9e9e9;\n  border-radius: 5px;\n  margin-bottom: 8px;\n\n  .filter-preview {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n    padding-top: 16px;\n    padding-bottom: 16px;\n    padding-right: 15px;\n    padding-left: 15px;\n  }\n\n  .filter-preview-left {\n    display: flex;\n    align-items: center;\n  }\n\n  .filter-preview-values {\n    margin-left: 8px;\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  }\n\n  .filter-preview-values .badge {\n    margin: 4px;\n    padding: 0.5em 0.5em;\n  }\n\n  .react-datepicker-wrapper {\n    width: 100%;\n  }\n\n  .invalid-feedback {\n    display: block;\n  }\n\n  .filter-buttons {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    text-align: right;\n\n    .btn {\n      margin-left: 8px;\n      margin-bottom: 8px;\n    }\n  }\n"])));n.Z=i}}]);