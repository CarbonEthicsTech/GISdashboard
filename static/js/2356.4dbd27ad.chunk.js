/*! For license information please see 2356.4dbd27ad.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[2356],{1843:function(t,e,n){n.d(e,{F:function(){return s}});var r=n(51554),i="calcite-floating-ui-arrow",o="calcite-floating-ui-arrow__stroke",a=12,c=6,u=1,s=function(t){var e=t.floatingLayout,n=t.key,s=t.ref,l=a,f=c,p=u,d=l/2,v="vertical"===e,m="M0,0"+" H".concat(l)+" L".concat(l-d,",").concat(f)+" Q".concat(d,",").concat(f," ").concat(d,",").concat(f)+" Z";return(0,r.h)("svg",{"aria-hidden":"true",class:i,height:l,key:n,ref:s,viewBox:"0 0 ".concat(l," ").concat(l+(v?0:p)),width:l+(v?p:0)},p>0&&(0,r.h)("path",{class:o,d:m,fill:"none","stroke-width":p+1}),(0,r.h)("path",{d:m,stroke:"none"}))}},76652:function(t,e,n){n.d(e,{S:function(){return a},a:function(){return x},b:function(){return m},c:function(){return h},d:function(){return C},f:function(){return r},i:function(){return Z},r:function(){return o}});var r="object"==typeof global&&global&&global.Object===Object&&global,i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")(),a=o.Symbol,c=Object.prototype,u=c.hasOwnProperty,s=c.toString,l=a?a.toStringTag:void 0;var f=Object.prototype.toString;var p="[object Null]",d="[object Undefined]",v=a?a.toStringTag:void 0;function m(t){return null==t?void 0===t?d:p:v&&v in Object(t)?function(t){var e=u.call(t,l),n=t[l];try{t[l]=void 0;var r=!0}catch(o){}var i=s.call(t);return r&&(e?t[l]=n:delete t[l]),i}(t):function(t){return f.call(t)}(t)}function h(t){return null!=t&&"object"==typeof t}var g="[object Symbol]";function x(t){return"symbol"==typeof t||h(t)&&m(t)==g}var y=/\s/;var b=/^\s+/;function w(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&y.test(t.charAt(e)););return e}(t)+1).replace(b,""):t}function Z(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var k=NaN,E=/^[-+]0x[0-9a-f]+$/i,T=/^0b[01]+$/i,L=/^0o[0-7]+$/i,R=parseInt;function P(t){if("number"==typeof t)return t;if(x(t))return k;if(Z(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Z(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=w(t);var n=T.test(t);return n||L.test(t)?R(t.slice(2),n?2:8):E.test(t)?k:+t}var O=function(){return o.Date.now()},A="Expected a function",S=Math.max,D=Math.min;function C(t,e,n){var r,i,o,a,c,u,s=0,l=!1,f=!1,p=!0;if("function"!=typeof t)throw new TypeError(A);function d(e){var n=r,o=i;return r=i=void 0,s=e,a=t.apply(o,n)}function v(t){var n=t-u;return void 0===u||n>=e||n<0||f&&t-s>=o}function m(){var t=O();if(v(t))return h(t);c=setTimeout(m,function(t){var n=e-(t-u);return f?D(n,o-(t-s)):n}(t))}function h(t){return c=void 0,p&&r?d(t):(r=i=void 0,a)}function g(){var t=O(),n=v(t);if(r=arguments,i=this,u=t,n){if(void 0===c)return function(t){return s=t,c=setTimeout(m,e),l?d(t):a}(u);if(f)return clearTimeout(c),c=setTimeout(m,e),d(u)}return void 0===c&&(c=setTimeout(m,e)),a}return e=P(e)||0,Z(n)&&(l=!!n.leading,o=(f="maxWait"in n)?S(P(n.maxWait)||0,e):o,p="trailing"in n?!!n.trailing:p),g.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=u=i=c=void 0},g.flush=function(){return void 0===c?a:h(O())},g}},65394:function(t,e,n){n.d(e,{F:function(){return Nt},a:function(){return Ut},b:function(){return Gt},c:function(){return Qt},f:function(){return Vt},r:function(){return It}});var r=n(29439),i=n(44925),o=n(93433),a=n(74165),c=n(4942),u=n(15861),s=n(1413),l=n(51554),f=n(92358),p=n(76652),d=["crossAxis","alignment","allowedPlacements","autoAlignment"],v=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],m=["strategy"],h=["mainAxis","crossAxis","limiter"],g=["top","right","bottom","left"],x=["start","end"],y=g.reduce((function(t,e){return t.concat(e,e+"-"+x[0],e+"-"+x[1])}),[]),b=Math.min,w=Math.max,Z=Math.round,k=Math.floor,E=function(t){return{x:t,y:t}},T={left:"right",right:"left",bottom:"top",top:"bottom"},L={start:"end",end:"start"};function R(t,e,n){return w(t,b(e,n))}function P(t,e){return"function"===typeof t?t(e):t}function O(t){return t.split("-")[0]}function A(t){return t.split("-")[1]}function S(t){return"x"===t?"y":"x"}function D(t){return"y"===t?"height":"width"}function C(t){return["top","bottom"].includes(O(t))?"y":"x"}function j(t){return S(C(t))}function F(t,e,n){void 0===n&&(n=!1);var r=A(t),i=j(t),o=D(i),a="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[o]>e.floating[o]&&(a=N(a)),[a,N(a)]}function B(t){var e=N(t);return[H(t),e,H(e)]}function H(t){return t.replace(/start|end/g,(function(t){return L[t]}))}function M(t,e,n,r){var i=A(t),o=function(t,e,n){var r=["left","right"],i=["right","left"];switch(t){case"top":case"bottom":return n?e?i:r:e?r:i;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(O(t),"start"===n,r);return i&&(o=o.map((function(t){return t+"-"+i})),e&&(o=o.concat(o.map(H)))),o}function N(t){return t.replace(/left|right|bottom|top/g,(function(t){return T[t]}))}function W(t){return"number"!==typeof t?function(t){return(0,s.Z)({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function V(t){return(0,s.Z)((0,s.Z)({},t),{},{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}function z(t,e,n){var r,i=t.reference,o=t.floating,a=C(e),c=j(e),u=D(c),s=O(e),l="y"===a,f=i.x+i.width/2-o.width/2,p=i.y+i.height/2-o.height/2,d=i[u]/2-o[u]/2;switch(s){case"top":r={x:f,y:i.y-o.height};break;case"bottom":r={x:f,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:p};break;case"left":r={x:i.x-o.width,y:p};break;default:r={x:i.x,y:i.y}}switch(A(e)){case"start":r[c]-=d*(n&&l?-1:1);break;case"end":r[c]+=d*(n&&l?-1:1)}return r}var I=function(){var t=(0,u.Z)((0,a.Z)().mark((function t(e,n,r){var i,o,u,l,f,p,d,v,m,h,g,x,y,b,w,Z,k,E,T,L,R,P,O,A,S,D;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r.placement,o=void 0===i?"bottom":i,u=r.strategy,l=void 0===u?"absolute":u,f=r.middleware,p=void 0===f?[]:f,d=r.platform,v=p.filter(Boolean),t.next=4,null==d.isRTL?void 0:d.isRTL(n);case 4:return m=t.sent,t.next=7,d.getElementRects({reference:e,floating:n,strategy:l});case 7:h=t.sent,g=z(h,o,m),x=g.x,y=g.y,b=o,w={},Z=0,k=0;case 13:if(!(k<v.length)){t.next=46;break}return E=v[k],T=E.name,L=E.fn,t.next=17,L({x:x,y:y,initialPlacement:o,placement:b,strategy:l,middlewareData:w,rects:h,platform:d,elements:{reference:e,floating:n}});case 17:if(R=t.sent,P=R.x,O=R.y,A=R.data,S=R.reset,x=null!=P?P:x,y=null!=O?O:y,w=(0,s.Z)((0,s.Z)({},w),{},(0,c.Z)({},T,(0,s.Z)((0,s.Z)({},w[T]),A))),!(S&&Z<=50)){t.next=43;break}if(Z++,"object"!==typeof S){t.next=41;break}if(S.placement&&(b=S.placement),!S.rects){t.next=38;break}if(!0!==S.rects){t.next=36;break}return t.next=33,d.getElementRects({reference:e,floating:n,strategy:l});case 33:t.t0=t.sent,t.next=37;break;case 36:t.t0=S.rects;case 37:h=t.t0;case 38:D=z(h,b,m),x=D.x,y=D.y;case 41:return k=-1,t.abrupt("continue",43);case 43:k++,t.next=13;break;case 46:return t.abrupt("return",{x:x,y:y,placement:b,strategy:l,middlewareData:w});case 47:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}();function _(t,e){return $.apply(this,arguments)}function $(){return $=(0,u.Z)((0,a.Z)().mark((function t(e,n){var r,i,o,c,u,l,f,p,d,v,m,h,g,x,y,b,w,Z,k,E,T,L,R,O,A;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===n&&(n={}),i=e.x,o=e.y,c=e.platform,u=e.rects,l=e.elements,f=e.strategy,p=P(n,e),d=p.boundary,v=void 0===d?"clippingAncestors":d,m=p.rootBoundary,h=void 0===m?"viewport":m,g=p.elementContext,x=void 0===g?"floating":g,y=p.altBoundary,b=void 0!==y&&y,w=p.padding,Z=W(void 0===w?0:w),k="floating"===x?"reference":"floating",E=l[b?k:x],t.t0=V,t.t1=c,t.next=10,null==c.isElement?void 0:c.isElement(E);case 10:if(t.t2=r=t.sent,null==t.t2){t.next=15;break}t.t3=r,t.next=16;break;case 15:t.t3=!0;case 16:if(!t.t3){t.next=20;break}t.t4=E,t.next=26;break;case 20:if(t.t5=E.contextElement,t.t5){t.next=25;break}return t.next=24,null==c.getDocumentElement?void 0:c.getDocumentElement(l.floating);case 24:t.t5=t.sent;case 25:t.t4=t.t5;case 26:return t.t6=t.t4,t.t7=v,t.t8=h,t.t9=f,t.t10={element:t.t6,boundary:t.t7,rootBoundary:t.t8,strategy:t.t9},t.next=33,t.t1.getClippingRect.call(t.t1,t.t10);case 33:return t.t11=t.sent,T=(0,t.t0)(t.t11),L="floating"===x?(0,s.Z)((0,s.Z)({},u.floating),{},{x:i,y:o}):u.reference,t.next=38,null==c.getOffsetParent?void 0:c.getOffsetParent(l.floating);case 38:return R=t.sent,t.next=41,null==c.isElement?void 0:c.isElement(R);case 41:if(!t.sent){t.next=50;break}return t.next=44,null==c.getScale?void 0:c.getScale(R);case 44:if(t.t13=t.sent,t.t13){t.next=47;break}t.t13={x:1,y:1};case 47:t.t12=t.t13,t.next=51;break;case 50:t.t12={x:1,y:1};case 51:if(O=t.t12,t.t14=V,!c.convertOffsetParentRelativeRectToViewportRelativeRect){t.next=59;break}return t.next=56,c.convertOffsetParentRelativeRectToViewportRelativeRect({rect:L,offsetParent:R,strategy:f});case 56:t.t15=t.sent,t.next=60;break;case 59:t.t15=L;case 60:return t.t16=t.t15,A=(0,t.t14)(t.t16),t.abrupt("return",{top:(T.top-A.top+Z.top)/O.y,bottom:(A.bottom-T.bottom+Z.bottom)/O.y,left:(T.left-A.left+Z.left)/O.x,right:(A.right-T.right+Z.right)/O.x});case 63:case"end":return t.stop()}}),t)}))),$.apply(this,arguments)}function Y(t,e,n){return(t?[].concat((0,o.Z)(n.filter((function(e){return A(e)===t}))),(0,o.Z)(n.filter((function(e){return A(e)!==t})))):n.filter((function(t){return O(t)===t}))).filter((function(n){return!t||(A(n)===t||!!e&&H(n)!==n)}))}var q=function(t){return void 0===t&&(t={}),{name:"flip",options:t,fn:function(e){return(0,u.Z)((0,a.Z)().mark((function n(){var r,c,u,s,l,f,p,d,m,h,g,x,y,b,w,Z,k,E,T,L,R,A,S,D,C,j,H,W,V,z,I,$,Y,q,X,Q;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=e.placement,u=e.middlewareData,s=e.rects,l=e.initialPlacement,f=e.platform,p=e.elements,d=P(t,e),m=d.mainAxis,h=void 0===m||m,g=d.crossAxis,x=void 0===g||g,y=d.fallbackPlacements,b=d.fallbackStrategy,w=void 0===b?"bestFit":b,Z=d.fallbackAxisSideDirection,k=void 0===Z?"none":Z,E=d.flipAlignment,T=void 0===E||E,L=(0,i.Z)(d,v),R=O(c),A=O(l)===l,n.next=6,null==f.isRTL?void 0:f.isRTL(p.floating);case 6:return S=n.sent,D=y||(A||!T?[N(l)]:B(l)),y||"none"===k||D.push.apply(D,(0,o.Z)(M(l,T,k,S))),C=[l].concat((0,o.Z)(D)),n.next=12,_(e,L);case 12:if(j=n.sent,H=[],W=(null==(r=u.flip)?void 0:r.overflows)||[],h&&H.push(j[R]),x&&(V=F(c,s,S),H.push(j[V[0]],j[V[1]])),W=[].concat((0,o.Z)(W),[{placement:c,overflows:H}]),H.every((function(t){return t<=0}))){n.next=35;break}if($=((null==(z=u.flip)?void 0:z.index)||0)+1,!(Y=C[$])){n.next=23;break}return n.abrupt("return",{data:{index:$,overflows:W},reset:{placement:Y}});case 23:if(q=null==(I=W.filter((function(t){return t.overflows[0]<=0})).sort((function(t,e){return t.overflows[1]-e.overflows[1]}))[0])?void 0:I.placement){n.next=33;break}n.t0=w,n.next="bestFit"===n.t0?28:"initialPlacement"===n.t0?31:33;break;case 28:return Q=null==(X=W.map((function(t){return[t.placement,t.overflows.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0)]})).sort((function(t,e){return t[1]-e[1]}))[0])?void 0:X[0],Q&&(q=Q),n.abrupt("break",33);case 31:return q=l,n.abrupt("break",33);case 33:if(c===q){n.next=35;break}return n.abrupt("return",{reset:{placement:q}});case 35:return n.abrupt("return",{});case 36:case"end":return n.stop()}}),n)})))()}}};function X(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Q(t){return g.some((function(e){return t[e]>=0}))}var U=function(t){return void 0===t&&(t={}),{name:"hide",options:t,fn:function(e){return(0,u.Z)((0,a.Z)().mark((function n(){var r,o,c,u,l,f,p,d,v;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=e.rects,o=P(t,e),c=o.strategy,u=void 0===c?"referenceHidden":c,l=(0,i.Z)(o,m),n.t0=u,n.next="referenceHidden"===n.t0?5:"escaped"===n.t0?10:15;break;case 5:return n.next=7,_(e,(0,s.Z)((0,s.Z)({},l),{},{elementContext:"reference"}));case 7:return f=n.sent,p=X(f,r.reference),n.abrupt("return",{data:{referenceHiddenOffsets:p,referenceHidden:Q(p)}});case 10:return n.next=12,_(e,(0,s.Z)((0,s.Z)({},l),{},{altBoundary:!0}));case 12:return d=n.sent,v=X(d,r.floating),n.abrupt("return",{data:{escapedOffsets:v,escaped:Q(v)}});case 15:return n.abrupt("return",{});case 16:case"end":return n.stop()}}),n)})))()}}};function G(t,e){return J.apply(this,arguments)}function J(){return J=(0,u.Z)((0,a.Z)().mark((function t(e,n){var r,i,o,c,u,l,f,p,d,v,m,h,g,x;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.placement,i=e.platform,o=e.elements,t.next=3,null==i.isRTL?void 0:i.isRTL(o.floating);case 3:return c=t.sent,u=O(r),l=A(r),f="y"===C(r),p=["left","top"].includes(u)?-1:1,d=c&&f?-1:1,v=P(n,e),m="number"===typeof v?{mainAxis:v,crossAxis:0,alignmentAxis:null}:(0,s.Z)({mainAxis:0,crossAxis:0,alignmentAxis:null},v),h=m.mainAxis,g=m.crossAxis,x=m.alignmentAxis,l&&"number"===typeof x&&(g="end"===l?-1*x:x),t.abrupt("return",f?{x:g*d,y:h*p}:{x:h*p,y:g*d});case 13:case"end":return t.stop()}}),t)}))),J.apply(this,arguments)}var K=function(t){return void 0===t&&(t=0),{name:"offset",options:t,fn:function(e){return(0,u.Z)((0,a.Z)().mark((function n(){var r,i,o;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.x,i=e.y,n.next=3,G(e,t);case 3:return o=n.sent,n.abrupt("return",{x:r+o.x,y:i+o.y,data:o});case 5:case"end":return n.stop()}}),n)})))()}}};function tt(t){return rt(t)?(t.nodeName||"").toLowerCase():"#document"}function et(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function nt(t){var e;return null==(e=(rt(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function rt(t){return t instanceof Node||t instanceof et(t).Node}function it(t){return t instanceof Element||t instanceof et(t).Element}function ot(t){return t instanceof HTMLElement||t instanceof et(t).HTMLElement}function at(t){return"undefined"!==typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof et(t).ShadowRoot)}function ct(t){var e=pt(t),n=e.overflow,r=e.overflowX,i=e.overflowY,o=e.display;return/auto|scroll|overlay|hidden|clip/.test(n+i+r)&&!["inline","contents"].includes(o)}function ut(t){return["table","td","th"].includes(tt(t))}function st(t){var e=lt(),n=pt(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((function(t){return(n.willChange||"").includes(t)}))||["paint","layout","strict","content"].some((function(t){return(n.contain||"").includes(t)}))}function lt(){return!("undefined"===typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function ft(t){return["html","body","#document"].includes(tt(t))}function pt(t){return et(t).getComputedStyle(t)}function dt(t){return it(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function vt(t){if("html"===tt(t))return t;var e=t.assignedSlot||t.parentNode||at(t)&&t.host||nt(t);return at(e)?e.host:e}function mt(t){var e=vt(t);return ft(e)?t.ownerDocument?t.ownerDocument.body:t.body:ot(e)&&ct(e)?e:mt(e)}function ht(t,e){var n;void 0===e&&(e=[]);var r=mt(t),i=r===(null==(n=t.ownerDocument)?void 0:n.body),o=et(r);return i?e.concat(o,o.visualViewport||[],ct(r)?r:[]):e.concat(r,ht(r))}function gt(t){var e=pt(t),n=parseFloat(e.width)||0,r=parseFloat(e.height)||0,i=ot(t),o=i?t.offsetWidth:n,a=i?t.offsetHeight:r,c=Z(n)!==o||Z(r)!==a;return c&&(n=o,r=a),{width:n,height:r,$:c}}function xt(t){return it(t)?t:t.contextElement}function yt(t){var e=xt(t);if(!ot(e))return E(1);var n=e.getBoundingClientRect(),r=gt(e),i=r.width,o=r.height,a=r.$,c=(a?Z(n.width):n.width)/i,u=(a?Z(n.height):n.height)/o;return c&&Number.isFinite(c)||(c=1),u&&Number.isFinite(u)||(u=1),{x:c,y:u}}var bt=E(0);function wt(t){var e=et(t);return lt()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:bt}function Zt(t,e,n,r){void 0===e&&(e=!1),void 0===n&&(n=!1);var i=t.getBoundingClientRect(),o=xt(t),a=E(1);e&&(r?it(r)&&(a=yt(r)):a=yt(t));var c=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==et(t))&&e}(o,n,r)?wt(o):E(0),u=(i.left+c.x)/a.x,s=(i.top+c.y)/a.y,l=i.width/a.x,f=i.height/a.y;if(o)for(var p=et(o),d=r&&it(r)?et(r):r,v=p.frameElement;v&&r&&d!==p;){var m=yt(v),h=v.getBoundingClientRect(),g=pt(v),x=h.left+(v.clientLeft+parseFloat(g.paddingLeft))*m.x,y=h.top+(v.clientTop+parseFloat(g.paddingTop))*m.y;u*=m.x,s*=m.y,l*=m.x,f*=m.y,u+=x,s+=y,v=et(v).frameElement}return V({width:l,height:f,x:u,y:s})}function kt(t){return Zt(nt(t)).left+dt(t).scrollLeft}function Et(t,e,n){var r;if("viewport"===e)r=function(t,e){var n=et(t),r=nt(t),i=n.visualViewport,o=r.clientWidth,a=r.clientHeight,c=0,u=0;if(i){o=i.width,a=i.height;var s=lt();(!s||s&&"fixed"===e)&&(c=i.offsetLeft,u=i.offsetTop)}return{width:o,height:a,x:c,y:u}}(t,n);else if("document"===e)r=function(t){var e=nt(t),n=dt(t),r=t.ownerDocument.body,i=w(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=w(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight),a=-n.scrollLeft+kt(t),c=-n.scrollTop;return"rtl"===pt(r).direction&&(a+=w(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:c}}(nt(t));else if(it(e))r=function(t,e){var n=Zt(t,!0,"fixed"===e),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=ot(t)?yt(t):E(1);return{width:t.clientWidth*o.x,height:t.clientHeight*o.y,x:i*o.x,y:r*o.y}}(e,n);else{var i=wt(t);r=(0,s.Z)((0,s.Z)({},e),{},{x:e.x-i.x,y:e.y-i.y})}return V(r)}function Tt(t,e){var n=vt(t);return!(n===e||!it(n)||ft(n))&&("fixed"===pt(n).position||Tt(n,e))}function Lt(t,e,n){var r=ot(e),i=nt(e),o="fixed"===n,a=Zt(t,!0,o,e),c={scrollLeft:0,scrollTop:0},u=E(0);if(r||!r&&!o)if(("body"!==tt(e)||ct(i))&&(c=dt(e)),r){var s=Zt(e,!0,o,e);u.x=s.x+e.clientLeft,u.y=s.y+e.clientTop}else i&&(u.x=kt(i));return{x:a.left+c.scrollLeft-u.x,y:a.top+c.scrollTop-u.y,width:a.width,height:a.height}}function Rt(t,e){return ot(t)&&"fixed"!==pt(t).position?e?e(t):t.offsetParent:null}function Pt(t,e){var n=et(t);if(!ot(t))return n;for(var r=Rt(t,e);r&&ut(r)&&"static"===pt(r).position;)r=Rt(r,e);return r&&("html"===tt(r)||"body"===tt(r)&&"static"===pt(r).position&&!st(r))?n:r||function(t){for(var e=vt(t);ot(e)&&!ft(e);){if(st(e))return e;e=vt(e)}return null}(t)||n}var Ot=function(){var t=(0,u.Z)((0,a.Z)().mark((function t(e){var n,r,i,o,c;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.reference,r=e.floating,i=e.strategy,o=this.getOffsetParent||Pt,c=this.getDimensions,t.t0=Lt,t.t1=n,t.next=7,o(r);case 7:return t.t2=t.sent,t.t3=i,t.t4=(0,t.t0)(t.t1,t.t2,t.t3),t.t5=s.Z,t.t6={x:0,y:0},t.next=14,c(r);case 14:return t.t7=t.sent,t.t8=(0,t.t5)(t.t6,t.t7),t.abrupt("return",{reference:t.t4,floating:t.t8});case 17:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}();var At={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){var e=t.rect,n=t.offsetParent,r=t.strategy,i=ot(n),o=nt(n);if(n===o)return e;var a={scrollLeft:0,scrollTop:0},c=E(1),u=E(0);if((i||!i&&"fixed"!==r)&&(("body"!==tt(n)||ct(o))&&(a=dt(n)),ot(n))){var s=Zt(n);c=yt(n),u.x=s.x+n.clientLeft,u.y=s.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-a.scrollLeft*c.x+u.x,y:e.y*c.y-a.scrollTop*c.y+u.y}},getDocumentElement:nt,getClippingRect:function(t){var e=t.element,n=t.boundary,r=t.rootBoundary,i=t.strategy,a="clippingAncestors"===n?function(t,e){var n=e.get(t);if(n)return n;for(var r=ht(t).filter((function(t){return it(t)&&"body"!==tt(t)})),i=null,o="fixed"===pt(t).position,a=o?vt(t):t;it(a)&&!ft(a);){var c=pt(a),u=st(a);u||"fixed"!==c.position||(i=null),(o?!u&&!i:!u&&"static"===c.position&&i&&["absolute","fixed"].includes(i.position)||ct(a)&&!u&&Tt(t,a))?r=r.filter((function(t){return t!==a})):i=c,a=vt(a)}return e.set(t,r),r}(e,this._c):[].concat(n),c=[].concat((0,o.Z)(a),[r]),u=c[0],s=c.reduce((function(t,n){var r=Et(e,n,i);return t.top=w(r.top,t.top),t.right=b(r.right,t.right),t.bottom=b(r.bottom,t.bottom),t.left=w(r.left,t.left),t}),Et(e,u,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:Pt,getElementRects:Ot,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return gt(t)},getScale:yt,isElement:it,isRTL:function(t){return"rtl"===pt(t).direction}};function St(t,e,n,i){void 0===i&&(i={});var a=i,c=a.ancestorScroll,u=void 0===c||c,l=a.ancestorResize,f=void 0===l||l,p=a.elementResize,d=void 0===p?"function"===typeof ResizeObserver:p,v=a.layoutShift,m=void 0===v?"function"===typeof IntersectionObserver:v,h=a.animationFrame,g=void 0!==h&&h,x=xt(t),y=u||f?[].concat((0,o.Z)(x?ht(x):[]),(0,o.Z)(ht(e))):[];y.forEach((function(t){u&&t.addEventListener("scroll",n,{passive:!0}),f&&t.addEventListener("resize",n)}));var Z,E=x&&m?function(t,e){var n,r=null,i=nt(t);function o(){clearTimeout(n),r&&r.disconnect(),r=null}return function a(c,u){void 0===c&&(c=!1),void 0===u&&(u=1),o();var l=t.getBoundingClientRect(),f=l.left,p=l.top,d=l.width,v=l.height;if(c||e(),d&&v){var m={rootMargin:-k(p)+"px "+-k(i.clientWidth-(f+d))+"px "+-k(i.clientHeight-(p+v))+"px "+-k(f)+"px",threshold:w(0,b(1,u))||1},h=!0;try{r=new IntersectionObserver(g,(0,s.Z)((0,s.Z)({},m),{},{root:i.ownerDocument}))}catch(x){r=new IntersectionObserver(g,m)}r.observe(t)}function g(t){var e=t[0].intersectionRatio;if(e!==u){if(!h)return a();e?a(!1,e):n=setTimeout((function(){a(!1,1e-7)}),100)}h=!1}}(!0),o}(x,n):null,T=-1,L=null;d&&(L=new ResizeObserver((function(t){var i=(0,r.Z)(t,1)[0];i&&i.target===x&&L&&(L.unobserve(e),cancelAnimationFrame(T),T=requestAnimationFrame((function(){L&&L.observe(e)}))),n()})),x&&!g&&L.observe(x),L.observe(e));var R=g?Zt(t):null;return g&&function e(){var r=Zt(t);!R||r.x===R.x&&r.y===R.y&&r.width===R.width&&r.height===R.height||n();R=r,Z=requestAnimationFrame(e)}(),n(),function(){y.forEach((function(t){u&&t.removeEventListener("scroll",n),f&&t.removeEventListener("resize",n)})),E&&E(),L&&L.disconnect(),L=null,g&&cancelAnimationFrame(Z)}}var Dt=function(t,e,n){var r=new Map,i=(0,s.Z)({platform:At},n),o=(0,s.Z)((0,s.Z)({},i.platform),{},{_c:r});return I(t,e,(0,s.Z)((0,s.Z)({},i),{},{platform:o}))};function Ct(t){return function(t){for(var e=t;e;e=jt(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(var n=jt(t);n;n=jt(n))if(n instanceof Element){var r=getComputedStyle(n);if("contents"!==r.display){if("static"!==r.position||"none"!==r.filter)return n;if("BODY"===n.tagName)return n}}return null}(t)}function jt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}!function(){if(l.Z5.isBrowser){var t=At.getOffsetParent;At.getOffsetParent=function(e){return t(e,Ct)}}}();var Ft=function(){var t=(0,u.Z)((0,a.Z)().mark((function t(e,n){var r,i,o,u,l,f,p,d,v,m,h,g,x,y,b,w,Z,k,E,T,L,R,P,O,A,S,D,C,j,F;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=n.referenceEl,o=n.floatingEl,u=n.overlayPositioning,l=void 0===u?"absolute":u,f=n.placement,p=n.flipDisabled,d=n.flipPlacements,v=n.offsetDistance,m=n.offsetSkidding,h=n.arrowEl,g=n.type,i&&o){t.next=3;break}return t.abrupt("return",null);case 3:return t.next=5,Dt(i,o,{strategy:l,placement:"auto"===f||"auto-start"===f||"auto-end"===f?void 0:zt(o,f),middleware:Wt({placement:f,flipDisabled:p,flipPlacements:d,offsetDistance:v,offsetSkidding:m,arrowEl:h,type:g})});case 5:x=t.sent,y=x.x,b=x.y,w=x.placement,Z=x.strategy,k=x.middlewareData,h&&k.arrow&&(T=k.arrow,L=T.x,R=T.y,P=w.split("-")[0],O=null!=L?"left":"top",A=Yt[P],S={left:"",top:"",bottom:"",right:""},"floatingLayout"in e&&(e.floatingLayout="left"===P||"right"===P?"horizontal":"vertical"),Object.assign(h.style,(0,s.Z)((0,s.Z)({},S),{},(E={},(0,c.Z)(E,O,"".concat("left"==O?L:R,"px")),(0,c.Z)(E,P,"100%"),(0,c.Z)(E,"transform",A),E)))),D=null===(r=k.hide)||void 0===r?void 0:r.referenceHidden,j=(C=D?"hidden":null)?"none":null,o.setAttribute(Bt,w),F="translate(".concat(Math.round(y),"px,").concat(Math.round(b),"px)"),Object.assign(o.style,{visibility:C,pointerEvents:j,position:Z,top:"0",left:"0",transform:F});case 18:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),Bt="data-placement",Ht=100,Mt=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"],Nt={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"};function Wt(t){var e,n=t.placement,r=t.flipDisabled,l=t.flipPlacements,f=t.offsetDistance,p=t.offsetSkidding,v=t.arrowEl,m=t.type,g=[(void 0===e&&(e={}),{name:"shift",options:e,fn:function(t){return(0,u.Z)((0,a.Z)().mark((function n(){var r,o,u,l,f,p,d,v,m,g,x,y,b,w,Z,k,E,T,L,A,D,j,F,B,H;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.x,u=t.y,l=t.placement,f=P(e,t),p=f.mainAxis,d=void 0===p||p,v=f.crossAxis,m=void 0!==v&&v,g=f.limiter,x=void 0===g?{fn:function(t){return{x:t.x,y:t.y}}}:g,y=(0,i.Z)(f,h),b={x:o,y:u},n.next=5,_(t,y);case 5:return w=n.sent,Z=C(O(l)),k=S(Z),E=b[k],T=b[Z],d&&(L="y"===k?"bottom":"right",A=E+w["y"===k?"top":"left"],D=E-w[L],E=R(A,E,D)),m&&(j="y"===Z?"bottom":"right",F=T+w["y"===Z?"top":"left"],B=T-w[j],T=R(F,T,B)),H=x.fn((0,s.Z)((0,s.Z)({},t),{},(r={},(0,c.Z)(r,k,E),(0,c.Z)(r,Z,T),r))),n.abrupt("return",(0,s.Z)((0,s.Z)({},H),{},{data:{x:H.x-o,y:H.y-u}}));case 14:case"end":return n.stop()}}),n)})))()}}),U()];if("menu"===m)return[].concat(g,[q({fallbackPlacements:l||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})]);if("popover"===m||"tooltip"===m){var x=[].concat(g,[K({mainAxis:"number"===typeof f?f:0,crossAxis:"number"===typeof p?p:0})]);return"auto"===n||"auto-start"===n||"auto-end"===n?x.push(function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,fn:function(e){return(0,u.Z)((0,a.Z)().mark((function n(){var r,c,u,s,l,f,p,v,m,h,g,x,b,w,Z,k,E,T,L,R,S,D,C,j,B,H,M,N;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=e.rects,l=e.middlewareData,f=e.placement,p=e.platform,v=e.elements,m=P(t,e),h=m.crossAxis,g=void 0!==h&&h,x=m.alignment,b=m.allowedPlacements,w=void 0===b?y:b,Z=m.autoAlignment,k=void 0===Z||Z,E=(0,i.Z)(m,d),T=void 0!==x||w===y?Y(x||null,k,w):w,n.next=5,_(e,E);case 5:if(L=n.sent,R=(null==(r=l.autoPlacement)?void 0:r.index)||0,null!=(S=T[R])){n.next=10;break}return n.abrupt("return",{});case 10:return n.t0=F,n.t1=S,n.t2=s,n.next=15,null==p.isRTL?void 0:p.isRTL(v.floating);case 15:if(n.t3=n.sent,D=(0,n.t0)(n.t1,n.t2,n.t3),f===S){n.next=19;break}return n.abrupt("return",{reset:{placement:T[0]}});case 19:if(C=[L[O(S)],L[D[0]],L[D[1]]],j=[].concat((0,o.Z)((null==(c=l.autoPlacement)?void 0:c.overflows)||[]),[{placement:S,overflows:C}]),!(B=T[R+1])){n.next=24;break}return n.abrupt("return",{data:{index:R+1,overflows:j},reset:{placement:B}});case 24:if(H=j.map((function(t){var e=A(t.placement);return[t.placement,e&&g?t.overflows.slice(0,2).reduce((function(t,e){return t+e}),0):t.overflows[0],t.overflows]})).sort((function(t,e){return t[1]-e[1]})),M=H.filter((function(t){return t[2].slice(0,A(t[0])?2:3).every((function(t){return t<=0}))})),(N=(null==(u=M[0])?void 0:u[0])||H[0][0])===f){n.next=29;break}return n.abrupt("return",{data:{index:R+1,overflows:j},reset:{placement:N}});case 29:return n.abrupt("return",{});case 30:case"end":return n.stop()}}),n)})))()}}}({alignment:"auto-start"===n?"start":"auto-end"===n?"end":null})):r||x.push(q(l?{fallbackPlacements:l}:{})),v&&x.push(function(t){return{name:"arrow",options:t,fn:function(e){return(0,u.Z)((0,a.Z)().mark((function n(){var r,i,o,u,s,l,f,p,d,v,m,h,g,x,y,w,Z,k,E,T,L,O,S,C,F,B,H,M,N,V,z,I,_,$,Y;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=e.x,u=e.y,s=e.placement,l=e.rects,f=e.platform,p=e.elements,d=P(t,e)||{},v=d.element,m=d.padding,h=void 0===m?0:m,null!=v){n.next=4;break}return n.abrupt("return",{});case 4:return g=W(h),x={x:o,y:u},y=j(s),w=D(y),n.next=10,f.getDimensions(v);case 10:return Z=n.sent,E=(k="y"===y)?"top":"left",T=k?"bottom":"right",L=k?"clientHeight":"clientWidth",O=l.reference[w]+l.reference[y]-x[y]-l.floating[w],S=x[y]-l.reference[y],n.next=19,null==f.getOffsetParent?void 0:f.getOffsetParent(v);case 19:if(C=n.sent,F=C?C[L]:0,n.t0=!F,n.t0){n.next=26;break}return n.next=25,null==f.isElement?void 0:f.isElement(C);case 25:n.t0=!n.sent;case 26:if(!n.t0){n.next=28;break}F=p.floating[L]||l.floating[w];case 28:return B=O/2-S/2,H=F/2-Z[w]/2-1,M=b(g[E],H),N=b(g[T],H),V=M,z=F-Z[w]-N,I=F/2-Z[w]/2+B,_=R(V,I,z),$=null!=A(s)&&I!=_&&l.reference[w]/2-(I<V?M:N)-Z[w]/2<0,Y=$?I<V?V-I:z-I:0,n.abrupt("return",(i={},(0,c.Z)(i,y,x[y]-Y),(0,c.Z)(i,"data",(r={},(0,c.Z)(r,y,_),(0,c.Z)(r,"centerOffset",I-_+Y),r)),i));case 39:case"end":return n.stop()}}),n)})))()}}}({element:v})),x}return[]}function Vt(t,e){var n=t.filter((function(t){return Mt.includes(t)}));return n.length!==t.length&&console.warn("".concat(e.tagName,": Invalid value found in: flipPlacements. Try any of these: ").concat(Mt.map((function(t){return'"'.concat(t,'"')})).join(", ").trim()),{el:e}),n}function zt(t,e){var n=["left","right"];return"rtl"===(0,f.b)(t)&&n.reverse(),e.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}function It(t,e){return _t.apply(this,arguments)}function _t(){return _t=(0,u.Z)((0,a.Z)().mark((function t(e,n){var r,i,o=arguments;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=o.length>2&&void 0!==o[2]&&o[2],e.open){t.next=3;break}return t.abrupt("return");case 3:return i=r?$t(e):Ft,t.abrupt("return",i(e,n));case 5:case"end":return t.stop()}}),t)}))),_t.apply(this,arguments)}function $t(t){var e=Xt.get(t);return e||(e=(0,p.d)(Ft,Ht,{leading:!0,maxWait:Ht}),Xt.set(t,e),e)}var Yt={top:"",left:"rotate(-90deg)",bottom:"rotate(180deg)",right:"rotate(90deg)"},qt=new WeakMap,Xt=new WeakMap;function Qt(t,e,n){if(n&&e){Ut(t,e,n),Object.assign(n.style,{visibility:"hidden",pointerEvents:"none",position:t.overlayPositioning,top:"0",left:"0"});var r=l.Z5.isBrowser?St:function(t,e,n){return n(),function(){}};qt.set(t,r(e,n,(function(){return t.reposition()})))}}function Ut(t,e,n){var r,i;n&&e&&(null===(r=qt.get(t))||void 0===r||r(),qt.delete(t),null===(i=Xt.get(t))||void 0===i||i.cancel(),Xt.delete(t))}var Gt=Math.ceil(Math.hypot(4,4))},27871:function(t,e,n){n.d(e,{o:function(){return o}});var r=n(51554);function i(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(e?t[t.transitionProp]:t.open)?t.onBeforeOpen():t.onBeforeClose(),(e?t[t.transitionProp]:t.open)?t.onOpen():t.onClose()}function o(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,r.wj)((function(){if(t.transitionEl){var n=function n(r){r.propertyName===t.openTransitionProp&&r.target===t.transitionEl&&(clearTimeout(u),t.transitionEl.removeEventListener("transitionstart",n),(e?t[t.transitionProp]:t.open)?t.onBeforeOpen():t.onBeforeClose())},r=function n(r){r.propertyName===t.openTransitionProp&&r.target===t.transitionEl&&((e?t[t.transitionProp]:t.open)?t.onOpen():t.onClose(),t.transitionEl.removeEventListener("transitionend",n),t.transitionEl.removeEventListener("transitioncancel",n))},o=getComputedStyle(t.transitionEl).transition.split(" "),a=o.findIndex((function(e){return e===t.openTransitionProp})),c=o[a+1];if("0s"===c)return void i(t,e);var u=setTimeout((function(){t.transitionEl.removeEventListener("transitionstart",n),t.transitionEl.removeEventListener("transitionend",r),t.transitionEl.removeEventListener("transitioncancel",r),i(t,e)}),1e3*parseFloat(c));t.transitionEl.addEventListener("transitionstart",n),t.transitionEl.addEventListener("transitionend",r),t.transitionEl.addEventListener("transitioncancel",r)}}))}}}]);
//# sourceMappingURL=2356.4dbd27ad.chunk.js.map