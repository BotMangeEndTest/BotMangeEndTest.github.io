"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[401],{64487:function(Y,y,r){r.r(y);var j=r(15009),f=r.n(j),b=r(99289),u=r.n(b),k=r(5574),v=r.n(k),g=r(12095),d=r(65763),L=r(90930),D=r(38521),B=r(37476),C=r(5966),K=r(20040),S=r(94272),T=r(2453),R=r(83622),x=r(96068),w=r(85265),O=r(67294),P=r(85893),F=function(){var Z=(0,O.useState)(!1),A=v()(Z,2),G=A[0],W=A[1],n=(0,O.useState)(),s=v()(n,2),a=s[0],i=s[1],e=(0,O.useState)(),c=v()(e,2),m=c[0],Q=c[1],se=T.ZP.useMessage(),X=v()(se,2),q=X[0],me=X[1],ne=(0,O.useState)(!1),ee=v()(ne,2),ie=ee[0],te=ee[1],re=(0,O.useRef)(),ae=(0,O.useRef)(),o=(0,S.useIntl)(),ue=function(){var h=u()(f()().mark(function _(t){var E,M;return f()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(a){l.next=2;break}return l.abrupt("return",!1);case 2:return l.prev=2,l.next=5,(0,g.Nq)(a.guid,t);case 5:if(M=l.sent,M.code===0){l.next=11;break}if(M.code!=-2){l.next=10;break}return T.ZP.error(M.msg),l.abrupt("return",!1);case 10:throw M.msg;case 11:return T.ZP.success(o.formatMessage({id:"pages.vipList.update.success"})),(E=re.current)===null||E===void 0||E.reload(),i(void 0),l.abrupt("return",!0);case 17:return l.prev=17,l.t0=l.catch(2),T.ZP.error(o.formatMessage({id:"pages.vipList.update.error"})),l.abrupt("return",!1);case 21:case"end":return l.stop()}},_,null,[[2,17]])}));return function(t){return h.apply(this,arguments)}}(),le=function(){var h=u()(f()().mark(function _(t){var E;return f()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return i(t),q.loading("load..."),p.prev=2,p.next=5,(0,g.DJ)(t.guid);case 5:E=p.sent,Q(E),te(!0),p.next=14;break;case 10:p.prev=10,p.t0=p.catch(2),T.ZP.error(o.formatMessage({id:"pages.vipList.getVipDetail.error"})),i(void 0);case 14:q.destroy();case 15:case"end":return p.stop()}},_,null,[[2,10]])}));return function(t){return h.apply(this,arguments)}}(),de=[{title:"",dataIndex:"type",key:"type"},{title:o.formatMessage({id:"pages.vipList.total"}),dataIndex:"total",key:"total"},{title:"1",dataIndex:"level1",key:"level1"},{title:"2",dataIndex:"level2",key:"level2"},{title:"3",dataIndex:"level3",key:"level3"},{title:"4",dataIndex:"level4",key:"level4"},{title:"5",dataIndex:"level5",key:"level5"}],oe=[{title:"ID",dataIndex:"id",hideInSearch:!0,sorter:!0},{title:"Tg Username",dataIndex:"tgUsername"},{title:"Email",dataIndex:"email"},{title:o.formatMessage({id:"pages.vipList.refCode"}),dataIndex:"refCode"},{title:"Guid",dataIndex:"guid"},{title:o.formatMessage({id:"pages.vipList.vipLevel"}),dataIndex:"vip",valueEnum:{vip1:{text:"VIP1",color:"#000000"},vip2:{text:"VIP2",color:"#CD7F32"},vip3:{text:"VIP3",color:"#FFD700"},svip:{text:"SVIP",color:"#87CEFA"}}},{title:o.formatMessage({id:"pages.vipList.invitee1Count"}),dataIndex:"invitee1Count",hideInSearch:!0,hideInDescriptions:!0,sorter:!0},{title:o.formatMessage({id:"pages.vipList.invitee1Count24"}),dataIndex:"invitee1Count24",hideInSearch:!0,hideInDescriptions:!0,sorter:!0},{title:o.formatMessage({id:"pages.vipList.invitee1Volume24"}),dataIndex:"invitee1Volume24",hideInSearch:!0,hideInDescriptions:!0,sorter:!0,renderText:function(_){return"$"+(0,d.B)(_,3)}},{title:o.formatMessage({id:"pages.vipList.commission"}),dataIndex:"commission",hideInSearch:!0,hideInDescriptions:!0,renderText:function(_){return"$"+(0,d.B)(_,3)}},{title:o.formatMessage({id:"pages.vipList.remark"}),dataIndex:"remark",hideInSearch:!0},{title:o.formatMessage({id:"pages.vipList.options"}),dataIndex:"option",valueType:"option",hideInDescriptions:!0,render:function(_,t){var E=[(0,P.jsx)(R.ZP,{type:"link",onClick:function(){var p;i(t),(p=ae.current)===null||p===void 0||p.setFieldValue("remark",t.remark),requestAnimationFrame(function(){W(!0)})},children:o.formatMessage({id:"pages.vipList.editRemark"})}),(0,P.jsx)(R.ZP,{type:"link",onClick:u()(f()().mark(function M(){return f()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,le(t);case 2:case"end":return l.stop()}},M)})),children:o.formatMessage({id:"pages.vipList.detail"})},"view")];return E}}],_e=[{title:"Guid",dataIndex:"guid"},{title:"Tg Username",dataIndex:"tgUsername"},{title:"Email",dataIndex:"email"},{title:o.formatMessage({id:"pages.vipList.refCode"}),dataIndex:"refCode"},{title:o.formatMessage({id:"pages.vipList.vipLevel"}),dataIndex:"vip",valueEnum:{vip1:{text:"VIP1",color:"#000000"},vip2:{text:"VIP2",color:"#CD7F32"},vip3:{text:"VIP3",color:"#FFD700"},svip:{text:"SVIP",color:"#87CEFA"}}},{},{title:o.formatMessage({id:"pages.vipList.remark"}),dataIndex:"remark",span:2},{title:o.formatMessage({id:"pages.vipList.commission"}),dataIndex:"commission",renderText:function(_){return"$"+(0,d.B)(_,6)}},{title:o.formatMessage({id:"pages.vipList.unclaimedCommission"}),dataIndex:"unclaimedCommission",renderText:function(_){return"$"+(0,d.B)(_,6)}},{title:o.formatMessage({id:"pages.vipList.claimedCommission"}),dataIndex:"claimedCommission",renderText:function(_){return"$"+(0,d.B)(_,6)}},{},{span:2,render:function(_,t){if(!t||!t.inviteeCountList||!t.inviteeVolume24HList||t.inviteeCountList.length!==5||t.inviteeVolume24HList.length!==5)return(0,P.jsx)("div",{});var E=[{type:o.formatMessage({id:"pages.vipList.invitee"}),total:t.totalInviteeCount+"",level1:t.inviteeCountList[0]+"",level2:t.inviteeCountList[1]+"",level3:t.inviteeCountList[2]+"",level4:t.inviteeCountList[3]+"",level5:t.inviteeCountList[4]+""},{type:o.formatMessage({id:"pages.vipList.volume24H"}),total:"$"+(0,d.B)(t.totalInviteeVolume24H,6),level1:"$"+(0,d.B)(t.inviteeVolume24HList[0],6),level2:"$"+(0,d.B)(t.inviteeVolume24HList[1],6),level3:"$"+(0,d.B)(t.inviteeVolume24HList[2],6),level4:"$"+(0,d.B)(t.inviteeVolume24HList[3],6),level5:"$"+(0,d.B)(t.inviteeVolume24HList[4],6)}];return(0,P.jsx)(x.Z,{columns:de,dataSource:E,pagination:!1})}}];return(0,P.jsxs)(L._z,{children:[(0,P.jsx)(D.Z,{actionRef:re,rowKey:"guid",search:{labelWidth:120},request:function(){var h=u()(f()().mark(function _(t,E){var M,p,l,H,J,z,N,V,U;return f()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:J=!1,z="",I.t0=f()().keys(E);case 3:if((I.t1=I.t0()).done){I.next=11;break}return N=I.t1.value,z=N,V=E[N],(V==null?void 0:V.toString())=="descend"&&(J=!0),I.abrupt("break",11);case 11:return t.page=t==null?void 0:t.current,delete t.current,I.next=15,(0,g.zc)(t,z,J);case 15:return U=I.sent,console.log({data:(M=U.data)===null||M===void 0?void 0:M.list,success:U.code==0,total:(p=U.data)===null||p===void 0?void 0:p.total}),I.abrupt("return",{data:(l=U.data)===null||l===void 0?void 0:l.list,success:U.code==0,total:(H=U.data)===null||H===void 0?void 0:H.total});case 18:case"end":return I.stop()}},_)}));return function(_,t){return h.apply(this,arguments)}}(),columns:oe}),(0,P.jsx)(B.Y,{formRef:ae,title:o.formatMessage({id:"pages.vipList.editRemark"}),open:G,onFinish:ue,onOpenChange:W,children:(0,P.jsx)(C.Z,{name:"remark",fieldProps:{maxLength:64}})}),(0,P.jsx)(w.Z,{width:600,open:ie,onClose:function(){i(void 0),Q(void 0),te(!1)},closable:!1,children:(0,P.jsx)(K.ZP,{column:2,title:o.formatMessage({id:"pages.vipList.detail.view"}),request:u()(f()().mark(function h(){return f()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{data:m||{}});case 1:case"end":return t.stop()}},h)})),params:{guid:m==null?void 0:m.guid},columns:_e})})]})};y.default=F},12095:function(Y,y,r){r.d(y,{DJ:function(){return K},JL:function(){return Z},Jb:function(){return F},Nq:function(){return x},V8:function(){return L},We:function(){return G},fA:function(){return T},ig:function(){return O},zc:function(){return B}});var j=r(97857),f=r.n(j),b=r(15009),u=r.n(b),k=r(99289),v=r.n(k),g=r(94272),d="https://ref.gao.link";function L(n){return D.apply(this,arguments)}function D(){return D=v()(u()().mark(function n(s){var a;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.request)(d+"/api/user/getUserByRef",{method:"GET",params:{refCode:s}});case 2:if(a=e.sent,a.code===0){e.next=5;break}throw a.msg;case 5:return e.abrupt("return",a.data);case 6:case"end":return e.stop()}},n)})),D.apply(this,arguments)}function B(n,s,a){return C.apply(this,arguments)}function C(){return C=v()(u()().mark(function n(s,a,i){var e;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return a&&(s.sortField=a,s.sortDesc=i),m.next=3,(0,g.request)(d+"/api/user/getVipPageList",{method:"GET",params:f()({},s)});case 3:if(e=m.sent,e.code===0){m.next=6;break}throw e.msg;case 6:return m.abrupt("return",e);case 7:case"end":return m.stop()}},n)})),C.apply(this,arguments)}function K(n){return S.apply(this,arguments)}function S(){return S=v()(u()().mark(function n(s){var a;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.request)(d+"/api/user/getVipDetail",{method:"GET",params:{guid:s}});case 2:if(a=e.sent,a.code===0){e.next=5;break}throw a.msg;case 5:return e.abrupt("return",a.data);case 6:case"end":return e.stop()}},n)})),S.apply(this,arguments)}function T(n,s,a){return R.apply(this,arguments)}function R(){return R=v()(u()().mark(function n(s,a,i){var e;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,g.request)(d+"/api/user/addSvip",{method:"POST",data:{guid:s,vip:a,remark:i}});case 2:if(e=m.sent,e.code===0){m.next=5;break}throw e.msg;case 5:return m.abrupt("return");case 6:case"end":return m.stop()}},n)})),R.apply(this,arguments)}function x(n,s){return w.apply(this,arguments)}function w(){return w=v()(u()().mark(function n(s,a){var i;return u()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,g.request)(d+"/api/user/updateUser",{method:"POST",data:f()({guid:s},a)});case 2:return i=c.sent,c.abrupt("return",i);case 4:case"end":return c.stop()}},n)})),w.apply(this,arguments)}function O(){return P.apply(this,arguments)}function P(){return P=v()(u()().mark(function n(){var s;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,g.request)(d+"/api/overall/data",{method:"GET"});case 2:if(s=i.sent,s.code===0){i.next=5;break}throw s.msg;case 5:return i.abrupt("return",s.data);case 6:case"end":return i.stop()}},n)})),P.apply(this,arguments)}function F(n){return $.apply(this,arguments)}function $(){return $=v()(u()().mark(function n(s){var a;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.request)(d+"/api/user/resetBotSecurityPassword",{method:"POST",data:{guid:s}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},n)})),$.apply(this,arguments)}function Z(n){return A.apply(this,arguments)}function A(){return A=v()(u()().mark(function n(s){var a;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.request)(d+"/api/user/resetGoogleSecurityPassword",{method:"POST",data:{guid:s}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},n)})),A.apply(this,arguments)}function G(n,s){return W.apply(this,arguments)}function W(){return W=v()(u()().mark(function n(s,a){var i;return u()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,g.request)(d+"/api/user/editRefCode",{method:"POST",data:{guid:s,refCode:a}});case 2:return i=c.sent,c.abrupt("return",i);case 4:case"end":return c.stop()}},n)})),W.apply(this,arguments)}},65763:function(Y,y,r){r.d(y,{B:function(){return f}});var j=r(90482);function f(b,u){if(!b)return"";var k=new j.Z(b),v=b.split(".");if(v.length!==2)return b;for(var g=v[0],d=v[1],L=0,D="",B=0;B<d.length;B++){var C=d[B];if(D.length>=u)break;C=="0"&&D.length==0?L=L+1:D=D+C}return L>3?g+".0{"+L+"}"+D:g+"."+"0".repeat(L)+D}}}]);
