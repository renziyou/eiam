/*
 * eiam-console - Employee Identity and Access Management Program
 * Copyright © 2020-2023 TopIAM (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
"use strict";(self.webpackChunktopiam_console=self.webpackChunktopiam_console||[]).push([[1098],{28058:function(V,T,r){r.d(T,{Z:function(){return o}});var d=r(1413),M=r(67294),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}}]},name:"warning",theme:"outlined"},O=f,h=r(84089),n=function(C,R){return M.createElement(h.Z,(0,d.Z)((0,d.Z)({},C),{},{ref:R,icon:O}))};n.displayName="WarningOutlined";var o=M.forwardRef(n)},31199:function(V,T,r){var d=r(1413),M=r(91),f=r(85893),O=r(67294),h=r(7772),n=["fieldProps","min","proFieldProps","max"],o=function(C,R){var Z=C.fieldProps,D=C.min,p=C.proFieldProps,s=C.max,t=(0,M.Z)(C,n);return(0,f.jsx)(h.Z,(0,d.Z)({valueType:"digit",fieldProps:(0,d.Z)({min:D,max:s},Z),ref:R,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:p},t))};T.Z=O.forwardRef(o)},86615:function(V,T,r){var d=r(1413),M=r(91),f=r(85893),O=r(22270),h=r(78045),n=r(67294),o=r(90789),g=r(7772),C=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],R=n.forwardRef(function(s,t){var W=s.fieldProps,F=s.options,I=s.radioType,A=s.layout,x=s.proFieldProps,m=s.valueEnum,L=(0,M.Z)(s,C);return(0,f.jsx)(g.Z,(0,d.Z)((0,d.Z)({valueType:I==="button"?"radioButton":"radio",ref:t,valueEnum:(0,O.h)(m,void 0)},L),{},{fieldProps:(0,d.Z)({options:F,layout:A},W),proFieldProps:x,filedConfig:{customLightMode:!0}}))}),Z=n.forwardRef(function(s,t){var W=s.fieldProps,F=s.children;return(0,f.jsx)(h.ZP,(0,d.Z)((0,d.Z)({},W),{},{ref:t,children:F}))}),D=(0,o.G)(Z,{valuePropName:"checked",ignoreWidth:!0}),p=D;p.Group=R,p.Button=h.ZP.Button,p.displayName="ProFormComponent",T.Z=p},64317:function(V,T,r){var d=r(1413),M=r(91),f=r(85893),O=r(22270),h=r(67294),n=r(66758),o=r(7772),g=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],C=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],R=h.forwardRef(function(t,W){var F=t.fieldProps,I=t.children,A=t.params,x=t.proFieldProps,m=t.mode,L=t.valueEnum,z=t.request,G=t.showSearch,$=t.options,w=(0,M.Z)(t,g),N=(0,h.useContext)(n.Z);return(0,f.jsx)(o.Z,(0,d.Z)((0,d.Z)({valueEnum:(0,O.h)(L),request:z,params:A,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,d.Z)({options:$,mode:m,showSearch:G,getPopupContainer:N.getPopupContainer},F),ref:W,proFieldProps:x},w),{},{children:I}))}),Z=h.forwardRef(function(t,W){var F=t.fieldProps,I=t.children,A=t.params,x=t.proFieldProps,m=t.mode,L=t.valueEnum,z=t.request,G=t.options,$=(0,M.Z)(t,C),w=(0,d.Z)({options:G,mode:m||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},F),N=(0,h.useContext)(n.Z);return(0,f.jsx)(o.Z,(0,d.Z)((0,d.Z)({valueEnum:(0,O.h)(L),request:z,params:A,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,d.Z)({getPopupContainer:N.getPopupContainer},w),ref:W,proFieldProps:x},$),{},{children:I}))}),D=R,p=Z,s=D;s.SearchSelect=p,s.displayName="ProFormComponent",T.Z=s},52688:function(V,T,r){var d=r(1413),M=r(91),f=r(85893),O=r(67294),h=r(7772),n=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],o=O.forwardRef(function(g,C){var R=g.fieldProps,Z=g.unCheckedChildren,D=g.checkedChildren,p=g.proFieldProps,s=(0,M.Z)(g,n);return(0,f.jsx)(h.Z,(0,d.Z)({valueType:"switch",fieldProps:(0,d.Z)({unCheckedChildren:Z,checkedChildren:D},R),ref:C,valuePropName:"checked",proFieldProps:p,filedConfig:{valuePropName:"checked",ignoreWidth:!0}},s))});T.Z=o},5966:function(V,T,r){var d=r(1413),M=r(91),f=r(85893),O=r(7772),h=["fieldProps","proFieldProps"],n=["fieldProps","proFieldProps"],o="text",g=function(D){var p=D.fieldProps,s=D.proFieldProps,t=(0,M.Z)(D,h);return(0,f.jsx)(O.Z,(0,d.Z)({valueType:o,fieldProps:p,filedConfig:{valueType:o},proFieldProps:s},t))},C=function(D){var p=D.fieldProps,s=D.proFieldProps,t=(0,M.Z)(D,n);return(0,f.jsx)(O.Z,(0,d.Z)({valueType:"password",fieldProps:p,proFieldProps:s,filedConfig:{valueType:o}},t))},R=g;R.Password=C,R.displayName="ProFormComponent",T.Z=R},50727:function(V,T,r){var d=r(4942),M=r(97685),f=r(91),O=r(74165),h=r(15861),n=r(1413),o=r(85893),g=r(24969),C=r(97462),R=r(952),Z=r(73964),D=r(26369),p=r(22270),s=r(48171),t=r(60249),W=r(71577),F=r(43825),I=r(60869),A=r(94787),x=r(20059),m=r(67294),L=r(1914),z=["onTableChange","maxLength","formItemProps","recordCreatorProps","rowKey","controlled","defaultValue","onChange","editableFormRef"],G=["record","position","creatorButtonText","newRecordType","parentKey","style"],$=m.createContext(void 0);function w(e){var B=e.children,H=e.record,re=e.position,ne=e.newRecordType,J=e.parentKey,X=(0,m.useContext)($);return m.cloneElement(B,(0,n.Z)((0,n.Z)({},B.props),{},{onClick:function(){var Y=(0,h.Z)((0,O.Z)().mark(function oe(te){var k,q,y,U;return(0,O.Z)().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,(k=(q=B.props).onClick)===null||k===void 0?void 0:k.call(q,te);case 2:if(U=E.sent,U!==!1){E.next=5;break}return E.abrupt("return");case 5:X==null||(y=X.current)===null||y===void 0||y.addEditRecord(H,{position:re,newRecordType:ne,parentKey:J});case 6:case"end":return E.stop()}},oe)}));function b(oe){return Y.apply(this,arguments)}return b}()}))}function N(e){var B,H,re=(0,Z.YB)(),ne=e.onTableChange,J=e.maxLength,X=e.formItemProps,Y=e.recordCreatorProps,b=e.rowKey,oe=e.controlled,te=e.defaultValue,k=e.onChange,q=e.editableFormRef,y=(0,f.Z)(e,z),U=(0,D.D)(e.value),ee=(0,m.useRef)(),E=(0,m.useRef)();(0,m.useImperativeHandle)(y.actionRef,function(){return ee.current});var ce=(0,I.Z)(function(){return e.value||te||[]},{value:e.value,onChange:e.onChange}),se=(0,M.Z)(ce,2),_=se[0],Pe=se[1],j=m.useMemo(function(){return typeof b=="function"?b:function(c,a){return c[b]||a}},[b]),_e=function(a){if(typeof a=="number"&&!e.name){if(a>=_.length)return a;var l=_&&_[a];return j==null?void 0:j(l,a)}if((typeof a=="string"||a>=_.length)&&e.name){var i=_.findIndex(function(u,v){var P;return(j==null||(P=j(u,v))===null||P===void 0?void 0:P.toString())===(a==null?void 0:a.toString())});return i}return a};(0,m.useImperativeHandle)(q,function(){var c=function(i){var u,v;if(i==null)throw new Error("rowIndex is required");var P=_e(i),K=[e.name,(u=P==null?void 0:P.toString())!==null&&u!==void 0?u:""].flat(1).filter(Boolean);return(v=E.current)===null||v===void 0?void 0:v.getFieldValue(K)},a=function(){var i,u=[e.name].flat(1).filter(Boolean);if(Array.isArray(u)&&u.length===0){var v,P=(v=E.current)===null||v===void 0?void 0:v.getFieldsValue();return Array.isArray(P)?P:Object.keys(P).map(function(K){return P[K]})}return(i=E.current)===null||i===void 0?void 0:i.getFieldValue(u)};return(0,n.Z)((0,n.Z)({},E.current),{},{getRowData:c,getRowsData:a,setRowData:function(i,u){var v,P,K,ie;if(i==null)throw new Error("rowIndex is required");var de=_e(i),Oe=[e.name,(v=de==null?void 0:de.toString())!==null&&v!==void 0?v:""].flat(1).filter(Boolean),ge=((P=E.current)===null||P===void 0||(K=P.getFieldsValue)===null||K===void 0?void 0:K.call(P))||{},Re=(0,x.Z)(ge,Oe,(0,n.Z)((0,n.Z)({},c(i)),u||{}));return(ie=E.current)===null||ie===void 0||ie.setFieldsValue(Re),!0}})}),(0,m.useEffect)(function(){!e.controlled||_.forEach(function(c,a){var l;(l=E.current)===null||l===void 0||l.setFieldsValue((0,d.Z)({},j(c,a),c))},{})},[_,e.controlled]),(0,m.useEffect)(function(){if(e.name){var c;E.current=e==null||(c=e.editable)===null||c===void 0?void 0:c.form}},[(B=e.editable)===null||B===void 0?void 0:B.form,e.name]);var S=Y||{},me=S.record,ae=S.position,Ee=S.creatorButtonText,fe=S.newRecordType,he=S.parentKey,Ce=S.style,De=(0,f.Z)(S,G),ve=ae==="top",Q=(0,m.useMemo)(function(){return J&&J<=(_==null?void 0:_.length)?!1:Y!==!1&&(0,o.jsx)(w,{record:(0,p.h)(me,_==null?void 0:_.length,_)||{},position:ae,parentKey:(0,p.h)(he,_==null?void 0:_.length,_),newRecordType:fe,children:(0,o.jsx)(W.Z,(0,n.Z)((0,n.Z)({type:"dashed",style:(0,n.Z)({display:"block",margin:"10px 0",width:"100%"},Ce),icon:(0,o.jsx)(g.Z,{})},De),{},{children:Ee||re.getMessage("editableTable.action.add","\u6DFB\u52A0\u4E00\u884C\u6570\u636E")}))})},[Y,J,_==null?void 0:_.length]),pe=(0,m.useMemo)(function(){return Q?ve?{components:{header:{wrapper:function(a){var l,i=a.className,u=a.children;return(0,o.jsxs)("thead",{className:i,children:[u,(0,o.jsxs)("tr",{style:{position:"relative"},children:[(0,o.jsx)("td",{colSpan:0,style:{visibility:"hidden"},children:Q}),(0,o.jsx)("td",{style:{position:"absolute",left:0,width:"100%"},colSpan:(l=y.columns)===null||l===void 0?void 0:l.length,children:Q})]})]})}}}}:{tableViewRender:function(a,l){var i,u;return(0,o.jsxs)(o.Fragment,{children:[(i=(u=e.tableViewRender)===null||u===void 0?void 0:u.call(e,a,l))!==null&&i!==void 0?i:l,Q]})}}:{}},[ve,Q]),le=(0,n.Z)({},e.editable),Me=(0,s.J)(function(c,a){var l,i,u;if((l=e.editable)===null||l===void 0||(i=l.onValuesChange)===null||i===void 0||i.call(l,c,a),(u=e.onValuesChange)===null||u===void 0||u.call(e,a,c),e.controlled){var v;e==null||(v=e.onChange)===null||v===void 0||v.call(e,a)}});return((e==null?void 0:e.onValuesChange)||((H=e.editable)===null||H===void 0?void 0:H.onValuesChange)||e.controlled&&(e==null?void 0:e.onChange))&&(le.onValuesChange=Me),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)($.Provider,{value:ee,children:(0,o.jsx)(L.Z,(0,n.Z)((0,n.Z)((0,n.Z)({search:!1,options:!1,pagination:!1,rowKey:b,revalidateOnFocus:!1},y),pe),{},{tableLayout:"fixed",actionRef:ee,onChange:ne,editable:(0,n.Z)((0,n.Z)({},le),{},{formProps:(0,n.Z)({formRef:E},le.formProps)}),dataSource:_,onDataSourceChange:function(a){if(Pe(a),e.name&&ae==="top"){var l,i=(0,x.Z)({},[e.name].flat(1).filter(Boolean),a);(l=E.current)===null||l===void 0||l.setFieldsValue(i)}}}))}),e.name?(0,o.jsx)(C.Z,{name:[e.name],children:function(a){var l,i,u=(0,A.default)(a,[e.name].flat(1)),v=u==null?void 0:u.find(function(P,K){return!(0,t.A)(P,U==null?void 0:U[K])});return v&&U&&(e==null||(l=e.editable)===null||l===void 0||(i=l.onValuesChange)===null||i===void 0||i.call(l,v,u)),null}}):null]})}function ue(e){var B=R.ZP.useFormInstance();return e.name?(0,o.jsx)(F.Z.Item,(0,n.Z)((0,n.Z)({style:{maxWidth:"100%"}},e==null?void 0:e.formItemProps),{},{name:e.name,children:(0,o.jsx)(N,(0,n.Z)((0,n.Z)({},e),{},{editable:(0,n.Z)((0,n.Z)({},e.editable),{},{form:B})}))})):(0,o.jsx)(N,(0,n.Z)({},e))}ue.RecordCreator=w,T.Z=ue}}]);
