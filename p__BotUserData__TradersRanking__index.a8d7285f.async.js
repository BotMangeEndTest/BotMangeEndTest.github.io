"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[45],{20776:function(ce,Z,s){s.r(Z),s.d(Z,{default:function(){return T}});var G=s(15009),l=s.n(G),j=s(99289),d=s.n(j),F=s(5574),f=s.n(F),h=s(34157),_=s(65763),R=s(90930),P=s(38521),U=s(94272),b=s(2453),W=s(83622),A=s(78957),V=s(74656),$=s(26915),X=s(85265),y=s(67294),Y=s(20040),I=s(44886),H=s(96074),L=s(86738),v=s(12095),o=s(37476),g=s(5966),t=s(85893),r=[{label:"Solana",value:"solana"},{label:"BSC",value:"bsc"},{label:"ETH",value:"eth"},{label:"Base",value:"base"},{label:"Core",value:"core"},{label:"TON",value:"ton"},{label:"Tron",value:"tron"},{label:"SUI",value:"sui"}],c=function(pe){var Q,q=pe.guid,ae=(0,y.useState)("solana"),te=f()(ae,2),se=te[0],ne=te[1],ee=(0,I.t)("@@initialState"),J=ee.initialState,fe=(J==null||(Q=J.userInfo)===null||Q===void 0?void 0:Q.role)=="superAdmin",ue=(0,y.useState)(),ie=f()(ue,2),D=ie[0],me=ie[1],le=b.ZP.useMessage(),K=f()(le,2),re=K[0],_e=K[1],E=(0,U.useIntl)(),ge=(0,y.useRef)(),Ce=(0,y.useState)(!1),de=f()(Ce,2),oe=de[0],ve=de[1],be=(0,y.useRef)(),N=[{title:"Guid",render:function(i,a){return a.user.guid}},{title:"Tg Username",render:function(i,a){return a.user.tgUsername}},{title:"Email",render:function(i,a){return a.user.email}},{title:E.formatMessage({id:"pages.vipList.refCode"}),render:function(i,a){return a.user.refCode}},{title:E.formatMessage({id:"pages.vipList.vipLevel"}),render:function(i,a){return a.user.vip}},{},{title:E.formatMessage({id:"pages.vipList.remark"}),render:function(i,a){return a.user.remark}},{},{title:E.formatMessage({id:"pages.vipList.ref1Guid"}),render:function(i,a){var n;return(n=a.up)===null||n===void 0?void 0:n.guid}},{title:E.formatMessage({id:"pages.vipList.ref1TgUsername"}),render:function(i,a){var n;return(n=a.up)===null||n===void 0?void 0:n.tgUsername}},{title:E.formatMessage({id:"pages.vipList.ref1Email"}),render:function(i,a){var n;return(n=a.up)===null||n===void 0?void 0:n.email}},{title:E.formatMessage({id:"pages.vipList.ref1RefCode"}),render:function(i,a){var n;return(n=a.up)===null||n===void 0?void 0:n.refCode}},{title:E.formatMessage({id:"pages.vipList.ref1VipLevel"}),render:function(i,a){var n;return(n=a.up)===null||n===void 0?void 0:n.vip}},{},{title:E.formatMessage({id:"pages.vipList.ref1Remark"}),render:function(i,a){var n;return(n=a.up)===null||n===void 0?void 0:n.remark}}],he=[{title:"ID",dataIndex:"id",hideInSearch:!0,hidden:!0},{title:E.formatMessage({id:"date"}),dataIndex:"date",hideInSearch:!0},{title:"Chain",dataIndex:"chain",hideInSearch:!0},{title:"Txns",dataIndex:"txns",hideInSearch:!0},{title:"Vol",dataIndex:"vol",hideInSearch:!0,renderText:function(i,a,n,B){return"$"+(0,_.B)(i,3)}}],k=function(){var p=d()(l()().mark(function i(a){var n;return l()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,v.Jb)(a);case 2:n=m.sent,n.code==0?b.ZP.success(E.formatMessage({id:"pages.vipList.update.success"})):b.ZP.error(E.formatMessage({id:"pages.vipList.update.error"}));case 4:case"end":return m.stop()}},i)}));return function(a){return p.apply(this,arguments)}}(),O=function(){var p=d()(l()().mark(function i(a){var n;return l()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,v.JL)(a);case 2:n=m.sent,n.code==0?b.ZP.success(E.formatMessage({id:"pages.vipList.update.success"})):b.ZP.error(E.formatMessage({id:"pages.vipList.update.error"}));case 4:case"end":return m.stop()}},i)}));return function(a){return p.apply(this,arguments)}}(),S=function(){var p=d()(l()().mark(function i(a){var n,B;return l()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:if(D){M.next=2;break}return M.abrupt("return");case 2:if(n=/^[a-zA-Z]{1,10}$/,n.test(a.refCode)){M.next=6;break}return b.ZP.error(E.formatMessage({id:"pages.vipList.refCode.verity.error"})),M.abrupt("return");case 6:return M.next=8,(0,v.We)(D==null?void 0:D.user.guid,a.refCode);case 8:B=M.sent,B.code==0?b.ZP.success(E.formatMessage({id:"pages.vipList.update.success"})):b.ZP.error(E.formatMessage({id:"pages.vipList.update.error"}));case 10:case"end":return M.stop()}},i)}));return function(a){return p.apply(this,arguments)}}();return(0,y.useEffect)(function(){var p=function(){var i=d()(l()().mark(function a(){var n;return l()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return re.loading("load..."),m.prev=1,m.next=4,(0,h.$P)(q);case 4:n=m.sent,me(n.data),m.next=11;break;case 8:m.prev=8,m.t0=m.catch(1),b.ZP.error(E.formatMessage({id:"pages.vipList.getVipDetail.error"}));case 11:re.destroy();case 12:case"end":return m.stop()}},a,null,[[1,8]])}));return function(){return i.apply(this,arguments)}}();p()},[]),(0,t.jsxs)("div",{children:[D&&(0,t.jsx)(Y.ZP,{column:2,title:"View",dataSource:D,columns:N}),(0,t.jsx)(H.Z,{}),fe&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{marginBottom:10},children:"\u64CD\u4F5C"}),D&&(0,t.jsxs)("div",{children:[D.user.tgUid&&(0,t.jsx)(L.Z,{title:"\u6E05\u9664bot\u5B89\u5168\u5BC6\u7801",description:"\u4F60\u786E\u5B9A\u8981\u6E05\u9664".concat(D.user.guid,"\u7684bot\u5B89\u5168\u5BC6\u7801\u5417?\u6B64\u64CD\u4F5C\u5C06\u65E0\u6CD5\u56DE\u9000"),onConfirm:d()(l()().mark(function p(){return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k(D.user.guid);case 2:case"end":return a.stop()}},p)})),children:(0,t.jsx)(W.ZP,{style:{marginRight:10},children:"\u6E05\u9664bot\u5B89\u5168\u5BC6\u7801"})}),(0,t.jsx)(L.Z,{title:"\u6E05\u9664google\u9A8C\u8BC1\u5668",description:"\u4F60\u786E\u5B9A\u8981\u6E05\u9664".concat(D.user.guid,"\u7684google\u9A8C\u8BC1\u5668\u5417?\u6B64\u64CD\u4F5C\u5C06\u65E0\u6CD5\u56DE\u9000"),onConfirm:d()(l()().mark(function p(){return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O(D.user.guid);case 2:case"end":return a.stop()}},p)})),children:(0,t.jsx)(W.ZP,{style:{marginRight:10},children:"\u6E05\u9664google\u9A8C\u8BC1\u5668"})}),(0,t.jsx)(W.ZP,{onClick:function(){ve(!0)},children:"\u4FEE\u6539RefCode"}),(0,t.jsx)(o.Y,{formRef:be,title:"\u4FEE\u6539RefCode",open:oe,onFinish:S,onOpenChange:ve,children:(0,t.jsx)(g.Z,{name:"refCode",label:"RefCode",fieldProps:{maxLength:10,defaultValue:D.user.refCode}})})]})]}),(0,t.jsx)(H.Z,{})]}),(0,t.jsx)("div",{children:"\u7528\u6237\u6BCF\u65E5\u5404\u94FE\u4EA4\u6613"}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",marginTop:10},children:[(0,t.jsx)("div",{style:{marginRight:10},children:"Chain:"}),(0,t.jsx)(V.Z,{options:r,onChange:function(i){var a;ne(i),(a=ge.current)===null||a===void 0||a.reload()},value:se})]}),(0,t.jsx)(P.Z,{actionRef:ge,rowKey:"id",search:!1,pagination:{pageSize:10,pageSizeOptions:[10]},request:function(){var p=d()(l()().mark(function i(a){var n,B,m,M,x;return l()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return a.page=a==null?void 0:a.current,delete a.current,z.next=4,(0,h.pE)(q,se,a.page);case 4:return x=z.sent,console.log({data:(n=x.data)===null||n===void 0?void 0:n.list,success:x.code==0,total:(B=x.data)===null||B===void 0?void 0:B.total}),z.abrupt("return",{data:(m=x.data)===null||m===void 0?void 0:m.list,success:x.code==0,total:(M=x.data)===null||M===void 0?void 0:M.total});case 7:case"end":return z.stop()}},i)}));return function(i){return p.apply(this,arguments)}}(),columns:he})]})},e=c,C=[{label:"RefCode",value:"refCode"},{label:"Guid",value:"guid"},{label:"Email",value:"email"},{label:"TgUsername",value:"tgUsername"},{label:"Evm Addrress",value:"evmAddress"},{label:"Solana Address",value:"solanaAddress"}],u=function(){var pe=(0,y.useRef)(),Q=(0,y.useState)("refCode"),q=f()(Q,2),ae=q[0],te=q[1],se=(0,y.useState)(""),ne=f()(se,2),ee=ne[0],J=ne[1],fe=(0,y.useState)(!1),ue=f()(fe,2),ie=ue[0],D=ue[1],me=(0,y.useState)(),le=f()(me,2),K=le[0],re=le[1],_e=(0,y.useState)(),E=f()(_e,2),ge=E[0],Ce=E[1],de=b.ZP.useMessage(),oe=f()(de,2),ve=oe[0],be=oe[1],N=(0,U.useIntl)(),he=[{title:N.formatMessage({id:"rank"}),dataIndex:"rank",hideInSearch:!0},{title:N.formatMessage({id:"name"}),hideInSearch:!0,render:function(O,S){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(W.ZP,{type:"link",onClick:function(){re(S),D(!0)},children:S.name})})}},{title:"24H Volume(Txns/Vol)",hideInSearch:!0,render:function(O,S){return S.totalTxns+"/$"+(0,_.B)(S.totalVol,3)}},{title:"Ref1 Name",dataIndex:"ref1Name",hideInSearch:!0},{renderFormItem:function(){return(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,t.jsx)("div",{style:{marginRight:10,whiteSpace:"nowrap"},children:N.formatMessage({id:"pages.searchUser"})}),(0,t.jsxs)(A.Z.Compact,{children:[(0,t.jsx)(V.Z,{style:{width:160},options:C,onChange:function(S){te(S)},value:ae}),(0,t.jsx)($.Z,{style:{width:240},value:ee,onChange:function(S){J(S.target.value)}})]})]})}}];return(0,t.jsxs)(R._z,{children:[(0,t.jsx)(P.Z,{actionRef:pe,rowKey:"rank",headerTitle:N.formatMessage({id:"menu.botUserData.tradersRanking"}),pagination:!1,request:d()(l()().mark(function k(){var O,S,p,i;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return p={},ee.length>0&&(p[ae]=ee),n.next=4,(0,h.HJ)(p);case 4:return i=n.sent,console.log({data:i.data,success:i.code==0,total:(O=i.data)===null||O===void 0?void 0:O.length}),n.abrupt("return",{data:i.data,success:i.code==0,total:(S=i.data)===null||S===void 0?void 0:S.length});case 7:case"end":return n.stop()}},k)})),columns:he,onReset:function(){J("")}}),(0,t.jsx)(X.Z,{width:600,open:ie,onClose:function(){re(void 0),D(!1)},closable:!1,children:K&&(0,t.jsx)(e,{guid:K==null?void 0:K.guid})})]})},T=u},12095:function(ce,Z,s){s.d(Z,{DJ:function(){return W},JL:function(){return v},Jb:function(){return H},Nq:function(){return X},V8:function(){return R},We:function(){return g},fA:function(){return V},ig:function(){return Y},zc:function(){return U}});var G=s(97857),l=s.n(G),j=s(15009),d=s.n(j),F=s(99289),f=s.n(F),h=s(94272),_="https://ref.gao.link";function R(r){return P.apply(this,arguments)}function P(){return P=f()(d()().mark(function r(c){var e;return d()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,h.request)(_+"/api/user/getUserByRef",{method:"GET",params:{refCode:c}});case 2:if(e=u.sent,e.code===0){u.next=5;break}throw e.msg;case 5:return u.abrupt("return",e.data);case 6:case"end":return u.stop()}},r)})),P.apply(this,arguments)}function U(r,c,e){return b.apply(this,arguments)}function b(){return b=f()(d()().mark(function r(c,e,C){var u;return d()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return e&&(c.sortField=e,c.sortDesc=C),w.next=3,(0,h.request)(_+"/api/user/getVipPageList",{method:"GET",params:l()({},c)});case 3:if(u=w.sent,u.code===0){w.next=6;break}throw u.msg;case 6:return w.abrupt("return",u);case 7:case"end":return w.stop()}},r)})),b.apply(this,arguments)}function W(r){return A.apply(this,arguments)}function A(){return A=f()(d()().mark(function r(c){var e;return d()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,h.request)(_+"/api/user/getVipDetail",{method:"GET",params:{guid:c}});case 2:if(e=u.sent,e.code===0){u.next=5;break}throw e.msg;case 5:return u.abrupt("return",e.data);case 6:case"end":return u.stop()}},r)})),A.apply(this,arguments)}function V(r,c,e){return $.apply(this,arguments)}function $(){return $=f()(d()().mark(function r(c,e,C){var u;return d()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,(0,h.request)(_+"/api/user/addSvip",{method:"POST",data:{guid:c,vip:e,remark:C}});case 2:if(u=w.sent,u.code===0){w.next=5;break}throw u.msg;case 5:return w.abrupt("return");case 6:case"end":return w.stop()}},r)})),$.apply(this,arguments)}function X(r,c){return y.apply(this,arguments)}function y(){return y=f()(d()().mark(function r(c,e){var C;return d()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,(0,h.request)(_+"/api/user/updateUser",{method:"POST",data:l()({guid:c},e)});case 2:return C=T.sent,T.abrupt("return",C);case 4:case"end":return T.stop()}},r)})),y.apply(this,arguments)}function Y(){return I.apply(this,arguments)}function I(){return I=f()(d()().mark(function r(){var c;return d()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,(0,h.request)(_+"/api/overall/data",{method:"GET"});case 2:if(c=C.sent,c.code===0){C.next=5;break}throw c.msg;case 5:return C.abrupt("return",c.data);case 6:case"end":return C.stop()}},r)})),I.apply(this,arguments)}function H(r){return L.apply(this,arguments)}function L(){return L=f()(d()().mark(function r(c){var e;return d()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,h.request)(_+"/api/user/resetBotSecurityPassword",{method:"POST",data:{guid:c}});case 2:return e=u.sent,u.abrupt("return",e);case 4:case"end":return u.stop()}},r)})),L.apply(this,arguments)}function v(r){return o.apply(this,arguments)}function o(){return o=f()(d()().mark(function r(c){var e;return d()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,h.request)(_+"/api/user/resetGoogleSecurityPassword",{method:"POST",data:{guid:c}});case 2:return e=u.sent,u.abrupt("return",e);case 4:case"end":return u.stop()}},r)})),o.apply(this,arguments)}function g(r,c){return t.apply(this,arguments)}function t(){return t=f()(d()().mark(function r(c,e){var C;return d()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,(0,h.request)(_+"/api/user/editRefCode",{method:"POST",data:{guid:c,refCode:e}});case 2:return C=T.sent,T.abrupt("return",C);case 4:case"end":return T.stop()}},r)})),t.apply(this,arguments)}},34157:function(ce,Z,s){s.d(Z,{$P:function(){return X},HJ:function(){return V},Ul:function(){return W},_y:function(){return U},h0:function(){return R},oX:function(){return Y},pE:function(){return H}});var G=s(15009),l=s.n(G),j=s(97857),d=s.n(j),F=s(99289),f=s.n(F),h=s(94272),_="https://ref.gao.link";function R(v,o,g){return P.apply(this,arguments)}function P(){return P=f()(l()().mark(function v(o,g,t){var r;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g&&(o.sortField=g,o.sortDesc=t),e.next=3,(0,h.request)(_+"/api/userData/getNewUserList",{method:"GET",params:d()({},o)});case 3:if(r=e.sent,r.code===0){e.next=6;break}throw r.msg;case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}},v)})),P.apply(this,arguments)}function U(v,o,g){return b.apply(this,arguments)}function b(){return b=f()(l()().mark(function v(o,g,t){var r;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g&&(o.sortField=g,o.sortDesc=t),e.next=3,(0,h.request)(_+"/api/userData/getChannelTrafficList",{method:"GET",params:d()({},o)});case 3:if(r=e.sent,r.code===0){e.next=6;break}throw r.msg;case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}},v)})),b.apply(this,arguments)}function W(v,o,g){return A.apply(this,arguments)}function A(){return A=f()(l()().mark(function v(o,g,t){var r;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g&&(o.sortField=g,o.sortDesc=t),e.next=3,(0,h.request)(_+"/api/userData/getTradersList",{method:"GET",params:d()({},o)});case 3:if(r=e.sent,r.code===0){e.next=6;break}throw r.msg;case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}},v)})),A.apply(this,arguments)}function V(v,o,g){return $.apply(this,arguments)}function $(){return $=f()(l()().mark(function v(o,g,t){var r;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.request)(_+"/api/userData/get24HTraderRanking",{method:"GET",params:d()({},o)});case 2:if(r=e.sent,r.code===0){e.next=5;break}throw r.msg;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}},v)})),$.apply(this,arguments)}function X(v){return y.apply(this,arguments)}function y(){return y=f()(l()().mark(function v(o){var g;return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,h.request)(_+"/api/userData/getUserAndUpInfo",{method:"GET",params:{guid:o}});case 2:if(g=r.sent,g.code===0){r.next=5;break}throw g.msg;case 5:return r.abrupt("return",g);case 6:case"end":return r.stop()}},v)})),y.apply(this,arguments)}function Y(){return I.apply(this,arguments)}function I(){return I=f()(l()().mark(function v(){var o;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,h.request)(_+"/api/userData/getAllChainTradersList",{method:"GET"});case 2:if(o=t.sent,o.code===0){t.next=5;break}throw o.msg;case 5:return t.abrupt("return",o);case 6:case"end":return t.stop()}},v)})),I.apply(this,arguments)}function H(v,o,g){return L.apply(this,arguments)}function L(){return L=f()(l()().mark(function v(o,g,t){var r;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.request)(_+"/api/userData/getUserDailyTradingPageList",{method:"GET",params:{guid:o,chain:g,page:t}});case 2:if(r=e.sent,r.code===0){e.next=5;break}throw r.msg;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}},v)})),L.apply(this,arguments)}},65763:function(ce,Z,s){s.d(Z,{B:function(){return l}});var G=s(90482);function l(j,d){if(!j)return"";var F=new G.Z(j),f=j.split(".");if(f.length!==2)return j;for(var h=f[0],_=f[1],R=0,P="",U=0;U<_.length;U++){var b=_[U];if(P.length>=d)break;b=="0"&&P.length==0?R=R+1:P=P+b}return R>3?h+".0{"+R+"}"+P:h+"."+"0".repeat(R)+P}}}]);
