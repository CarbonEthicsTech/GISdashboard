"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[3518],{79347:function(e,t,n){n.d(t,{e:function(){return s}});var r,i,a,o=n(84397),u={exports:{}};r=u,i=function(){function e(e,n,i){i=i||2;var a,o,u,v,c,l,f,h=n&&n.length,y=h?n[0]*i:e.length,x=t(e,0,y,i,!0),p=[];if(!x||x.next===x.prev)return p;if(h&&(x=s(e,n,x,i)),e.length>80*i){a=u=e[0],o=v=e[1];for(var S=i;S<y;S+=i)(c=e[S])<a&&(a=c),(l=e[S+1])<o&&(o=l),c>u&&(u=c),l>v&&(v=l);f=0!==(f=Math.max(u-a,v-o))?1/f:0}return r(x,p,i,a,o,f),p}function t(e,t,n,r,i){var a,o;if(i===M(e,t,n,r)>0)for(a=t;a<n;a+=r)o=T(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=T(a,e[a],e[a+1],o);if(o&&Z(o,o.next)){var u=o.next;z(o),o=u}return o}function n(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!Z(r,r.next)&&0!==g(r.prev,r,r.next))r=r.next;else{var i=r.prev;if(z(r),(r=t=i)===r.next)break;n=!0}}while(n||r!==t);return t}function r(e,t,s,v,c,l,f){if(e){!f&&l&&h(e,v,c,l);for(var y,x,p=e;e.prev!==e.next;)if(y=e.prev,x=e.next,l?a(e,v,c,l):i(e))t.push(y.i/s),t.push(e.i/s),t.push(x.i/s),z(e),e=x.next,p=x.next;else if((e=x)===p){f?1===f?r(e=o(n(e),t,s),t,s,v,c,l,2):2===f&&u(e,t,s,v,c,l):r(n(e),t,s,v,c,l,1);break}}}function i(e){var t=e.prev,n=e,r=e.next;if(g(t,n,r)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(p(t.x,t.y,n.x,n.y,r.x,r.y,i.x,i.y)&&g(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function a(e,t,n,r){var i=e.prev,a=e,o=e.next;if(g(i,a,o)>=0)return!1;for(var u=i.x<a.x?i.x<o.x?i.x:o.x:a.x<o.x?a.x:o.x,s=i.y<a.y?i.y<o.y?i.y:o.y:a.y<o.y?a.y:o.y,v=i.x>a.x?i.x>o.x?i.x:o.x:a.x>o.x?a.x:o.x,c=i.y>a.y?i.y>o.y?i.y:o.y:a.y>o.y?a.y:o.y,l=y(u,s,t,n,r),f=y(v,c,t,n,r),h=e.prevZ,x=e.nextZ;h&&h.z>=l&&x&&x.z<=f;){if(h!==e.prev&&h!==e.next&&p(i.x,i.y,a.x,a.y,o.x,o.y,h.x,h.y)&&g(h.prev,h,h.next)>=0)return!1;if(h=h.prevZ,x!==e.prev&&x!==e.next&&p(i.x,i.y,a.x,a.y,o.x,o.y,x.x,x.y)&&g(x.prev,x,x.next)>=0)return!1;x=x.nextZ}for(;h&&h.z>=l;){if(h!==e.prev&&h!==e.next&&p(i.x,i.y,a.x,a.y,o.x,o.y,h.x,h.y)&&g(h.prev,h,h.next)>=0)return!1;h=h.prevZ}for(;x&&x.z<=f;){if(x!==e.prev&&x!==e.next&&p(i.x,i.y,a.x,a.y,o.x,o.y,x.x,x.y)&&g(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function o(e,t,r){var i=e;do{var a=i.prev,o=i.next.next;!Z(a,o)&&d(a,i,i.next,o)&&V(a,o)&&V(o,a)&&(t.push(a.i/r),t.push(i.i/r),t.push(o.i/r),z(i),z(i.next),i=e=o),i=i.next}while(i!==e);return n(i)}function u(e,t,i,a,o,u){var s=e;do{for(var v=s.next.next;v!==s.prev;){if(s.i!==v.i&&S(s,v)){var c=b(s,v);return s=n(s,s.next),c=n(c,c.next),r(s,t,i,a,o,u),void r(c,t,i,a,o,u)}v=v.next}s=s.next}while(s!==e)}function s(e,r,i,a){var o,u,s,c=[];for(o=0,u=r.length;o<u;o++)(s=t(e,r[o]*a,o<u-1?r[o+1]*a:e.length,a,!1))===s.next&&(s.steiner=!0),c.push(x(s));for(c.sort(v),o=0;o<c.length;o++)i=n(i=l(c[o],i),i.next);return i}function v(e,t){return e.x-t.x}function c(e){if(e.next.prev===e)return e;for(var t=e;;){var n=t.next;if(n.prev===t||n===t||n===e)break;t=n}return t}function l(e,t){var r=function(e,t){var n,r=t,i=e.x,a=e.y,o=-1/0;do{if(a<=r.y&&a>=r.next.y&&r.next.y!==r.y){var u=r.x+(a-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(u<=i&&u>o){if(o=u,u===i){if(a===r.y)return r;if(a===r.next.y)return r.next}n=r.x<r.next.x?r:r.next}}r=r.next}while(r!==t);if(!n)return null;if(i===o)return n;var s,v=n,c=n.x,l=n.y,h=1/0;r=n;do{i>=r.x&&r.x>=c&&i!==r.x&&p(a<l?i:o,a,c,l,a<l?o:i,a,r.x,r.y)&&(s=Math.abs(a-r.y)/(i-r.x),V(r,e)&&(s<h||s===h&&(r.x>n.x||r.x===n.x&&f(n,r)))&&(n=r,h=s)),r=r.next}while(r!==v);return n}(e,t);if(!r)return t;var i=b(r,e),a=n(r,r.next),o=c(i);return n(o,o.next),a=c(a),c(t===r?a:t)}function f(e,t){return g(e.prev,e,t.prev)<0&&g(t.next,e,e.next)<0}function h(e,t,n,r){var i=e;do{null===i.z&&(i.z=y(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,function(e){var t,n,r,i,a,o,u,s,v=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,u=0,t=0;t<v&&(u++,r=r.nextZ);t++);for(s=v;u>0||s>0&&r;)0!==u&&(0===s||!r||n.z<=r.z)?(i=n,n=n.nextZ,u--):(i=r,r=r.nextZ,s--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,v*=2}while(o>1)}(i)}function y(e,t,n,r,i){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*i)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function x(e){var t=e,n=e;do{(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next}while(t!==e);return n}function p(e,t,n,r,i,a,o,u){return(i-o)*(t-u)-(e-o)*(a-u)>=0&&(e-o)*(r-u)-(n-o)*(t-u)>=0&&(n-o)*(a-u)-(i-o)*(r-u)>=0}function S(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&d(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}(e,t)&&(V(e,t)&&V(t,e)&&function(e,t){var n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do{n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==e);return r}(e,t)&&(g(e.prev,e,t.prev)||g(e,t.prev,t))||Z(e,t)&&g(e.prev,e,e.next)>0&&g(t.prev,t,t.next)>0)}function g(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Z(e,t){return e.x===t.x&&e.y===t.y}function d(e,t,n,r){var i=m(g(e,t,n)),a=m(g(e,t,r)),o=m(g(n,r,e)),u=m(g(n,r,t));return i!==a&&o!==u||!(0!==i||!L(e,n,t))||!(0!==a||!L(e,r,t))||!(0!==o||!L(n,e,r))||!(0!==u||!L(n,t,r))}function L(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function m(e){return e>0?1:e<0?-1:0}function V(e,t){return g(e.prev,e,e.next)<0?g(e,t,e.next)>=0&&g(e,e.prev,t)>=0:g(e,t,e.prev)<0||g(e,e.next,t)<0}function b(e,t){var n=new k(e.i,e.x,e.y),r=new k(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function T(e,t,n,r){var i=new k(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function z(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function k(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function M(e,t,n,r){for(var i=0,a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}return e.deviation=function(e,t,n,r){var i=t&&t.length,a=i?t[0]*n:e.length,o=Math.abs(M(e,0,a,n));if(i)for(var u=0,s=t.length;u<s;u++){var v=t[u]*n,c=u<s-1?t[u+1]*n:e.length;o-=Math.abs(M(e,v,c,n))}var l=0;for(u=0;u<r.length;u+=3){var f=r[u]*n,h=r[u+1]*n,y=r[u+2]*n;l+=Math.abs((e[f]-e[y])*(e[h+1]-e[f+1])-(e[f]-e[h])*(e[y+1]-e[f+1]))}return 0===o&&0===l?0:Math.abs((l-o)/o)},e.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,i=0;i<e.length;i++){for(var a=0;a<e[i].length;a++)for(var o=0;o<t;o++)n.vertices.push(e[i][a][o]);i>0&&(r+=e[i-1].length,n.holes.push(r))}return n},e},void 0!==(a=i())&&(r.exports=a);var s=(0,o.g)(u.exports)},13200:function(e,t,n){n.d(t,{k3:function(){return u},s5:function(){return o}});Math.PI;var r=256/360,i=1/Math.LN2;function a(e,t){return(e%=t)>=0?e:e+t}function o(e){return a(e*r,256)}function u(e){return Math.log(e)*i}},38999:function(e,t,n){var r,i;function a(e){switch(e){case"left":return r.Left;case"right":return r.Right;case"center":return r.Center}}function o(e){switch(e){case"top":return i.Top;case"middle":return i.Center;case"baseline":return i.Baseline;case"bottom":return i.Bottom}}function u(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[r.Right,i.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[r.Center,i.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[r.Left,i.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[r.Right,i.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[r.Center,i.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[r.Left,i.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[r.Right,i.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[r.Center,i.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[r.Left,i.Top];default:return console.debug("Found invalid placement type ".concat(e)),[r.Center,i.Center]}}function s(e){switch(e){case r.Right:return-1;case r.Center:return 0;case r.Left:return 1;default:return console.debug("Found invalid horizontal alignment ".concat(e)),0}}function v(e){switch(e){case i.Top:return 1;case i.Center:return 0;case i.Bottom:case i.Baseline:return-1;default:return console.debug("Found invalid vertical alignment ".concat(e)),0}}function c(e){switch(e){case"left":return r.Left;case"right":return r.Right;case"center":return r.Center}}function l(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}n.d(t,{Hd:function(){return c},M7:function(){return r},NS:function(){return l},TR:function(){return i},b7:function(){return o},g:function(){return s},kH:function(){return a},qv:function(){return u},tf:function(){return v}}),function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(r||(r={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(i||(i={}))},54815:function(e,t,n){n.d(t,{CA:function(){return S},Gq:function(){return w},Xp:function(){return p},a:function(){return k},dk:function(){return T},hF:function(){return Z},jj:function(){return g},jy:function(){return x},m2:function(){return d},mE:function(){return z},qr:function(){return M}});var r=n(11752),i=n(61120),a=n(60136),o=n(29388),u=n(15671),s=n(43144),v=n(4942),c=n(1413),l=n(10064),f=n(38999),h=n(80613);var y=Object.keys(h.mD).filter((function(e){return"number"==typeof h.mD[e]})).reduce((function(e,t){return(0,c.Z)((0,c.Z)({},e),{},(0,v.Z)({},t,h.mD[t]))}),{});function x(e){return e===h.mD.OUTLINE_FILL||e===h.mD.OUTLINE_FILL_SIMPLE}function p(e){return function(e){return e===h.mD.SIMPLE||e===h.mD.OUTLINE_FILL_SIMPLE}(e.symbologyType)}function S(e){return x(e.symbologyType)}function g(e,t){switch(e){case h.LW.FILL:return T.from(t);case h.LW.LINE:return k.from(t);case h.LW.MARKER:return z.from(t);case h.LW.TEXT:return M.from(t);case h.LW.LABEL:return w.from(t);default:throw new Error("Unable to createMaterialKey for unknown geometryType ".concat(e))}}function Z(e){switch(d.load(e).geometryType){case h.LW.MARKER:return new z(e);case h.LW.FILL:return new T(e);case h.LW.LINE:return new k(e);case h.LW.TEXT:return new M(e);case h.LW.LABEL:return new w(e)}}var d=function(){function e(t){(0,u.Z)(this,e),this._data=0,this._data=t}return(0,s.Z)(e,[{key:"data",get:function(){return this._data},set:function(e){this._data=null!==e&&void 0!==e?e:0}},{key:"geometryType",get:function(){return this.bits(8,11)},set:function(e){this.setBits(e,8,11)}},{key:"mapAligned",get:function(){return!!this.bit(20)},set:function(e){this.setBit(20,e)}},{key:"sdf",get:function(){return!!this.bit(11)},set:function(e){this.setBit(11,null!==e&&void 0!==e&&e)}},{key:"pattern",get:function(){return!!this.bit(12)},set:function(e){this.setBit(12,e)}},{key:"textureBinding",get:function(){return this.bits(0,8)},set:function(e){this.setBits(e,0,8)}},{key:"symbologyType",get:function(){return this.bits(21,26)},set:function(e){this.setBits(e,21,26)}},{key:"geometryTypeString",get:function(){switch(this.geometryType){case h.LW.FILL:return"fill";case h.LW.MARKER:return"marker";case h.LW.LINE:return"line";case h.LW.TEXT:return"text";case h.LW.LABEL:return"label";default:throw new l.Z("Unable to handle unknown geometryType: ".concat(this.geometryType))}}},{key:"setBit",value:function(e,t){var n=1<<e;t?this._data|=n:this._data&=~n}},{key:"bit",value:function(e){return(this._data&1<<e)>>e}},{key:"setBits",value:function(e,t,n){for(var r=t,i=0;r<n;r++,i++)this.setBit(r,0!=(e&1<<i))}},{key:"bits",value:function(e,t){for(var n=0,r=e,i=0;r<t;r++,i++)n|=this.bit(r)<<i;return n}},{key:"hasVV",value:function(){return!1}},{key:"setVV",value:function(e,t){}},{key:"getVariation",value:function(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf,symbologyType:{value:h.mD[this.symbologyType],options:y,namespace:"SYMBOLOGY_TYPE"}}}},{key:"getVariationHash",value:function(){return this._data&~(7&this.textureBinding)}}],[{key:"load",value:function(e){var t=this.shared;return t.data=e,t}}]),e}();d.shared=new d(0);var L=function(e){return function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,u.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"vvSizeMinMaxValue",get:function(){return 0!==this.bit(16)},set:function(e){this.setBit(16,e)}},{key:"vvSizeScaleStops",get:function(){return 0!==this.bit(17)},set:function(e){this.setBit(17,e)}},{key:"vvSizeFieldStops",get:function(){return 0!==this.bit(18)},set:function(e){this.setBit(18,e)}},{key:"vvSizeUnitValue",get:function(){return 0!==this.bit(19)},set:function(e){this.setBit(19,e)}},{key:"hasSizeVV",value:function(){return this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}},{key:"hasVV",value:function(){return(0,r.Z)((0,i.Z)(n.prototype),"hasVV",this).call(this)||this.hasSizeVV()}},{key:"setVV",value:function(e,t){(0,r.Z)((0,i.Z)(n.prototype),"setVV",this).call(this,e,t);var a=function(e,t,n){var r=h.X.SIZE_FIELD_STOPS|h.X.SIZE_MINMAX_VALUE|h.X.SIZE_SCALE_STOPS|h.X.SIZE_UNIT_VALUE,i=(t&(h.mf.FIELD_TARGETS_OUTLINE|h.mf.MINMAX_TARGETS_OUTLINE|h.mf.SCALE_TARGETS_OUTLINE|h.mf.UNIT_TARGETS_OUTLINE))>>>4;return e===h.LW.LINE&&n.isOutline||e===h.LW.FILL&&x(n.symbologyType)?r&i:r&~i}(this.geometryType,e,t)&e;this.vvSizeMinMaxValue=!!(a&h.X.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(a&h.X.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(a&h.X.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(a&h.X.SIZE_SCALE_STOPS)}}]),n}(e)},m=function(e){return function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,u.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"vvRotation",get:function(){return 0!==this.bit(15)},set:function(e){this.setBit(15,e)}},{key:"hasVV",value:function(){return(0,r.Z)((0,i.Z)(n.prototype),"hasVV",this).call(this)||this.vvRotation}},{key:"setVV",value:function(e,t){(0,r.Z)((0,i.Z)(n.prototype),"setVV",this).call(this,e,t),this.vvRotation=!t.isOutline&&!!(e&h.X.ROTATION)}}]),n}(e)},V=function(e){return function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,u.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"vvColor",get:function(){return 0!==this.bit(13)},set:function(e){this.setBit(13,e)}},{key:"hasVV",value:function(){return(0,r.Z)((0,i.Z)(n.prototype),"hasVV",this).call(this)||this.vvColor}},{key:"setVV",value:function(e,t){(0,r.Z)((0,i.Z)(n.prototype),"setVV",this).call(this,e,t),this.vvColor=!t.isOutline&&!!(e&h.X.COLOR)}}]),n}(e)},b=function(e){return function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,u.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"vvOpacity",get:function(){return 0!==this.bit(14)},set:function(e){this.setBit(14,e)}},{key:"hasVV",value:function(){return(0,r.Z)((0,i.Z)(n.prototype),"hasVV",this).call(this)||this.vvOpacity}},{key:"setVV",value:function(e,t){(0,r.Z)((0,i.Z)(n.prototype),"setVV",this).call(this,e,t),this.vvOpacity=!t.isOutline&&!!(e&h.X.OPACITY)}}]),n}(e)},T=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,u.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"getVariation",value:function(){return(0,c.Z)((0,c.Z)({},(0,r.Z)((0,i.Z)(n.prototype),"getVariation",this).call(this)),{},{vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}],[{key:"load",value:function(e){var t=this.shared;return t.data=e,t}},{key:"from",value:function(e){var t=e.symbologyType,n=e.vvFlags,r=this.load(0);return r.geometryType=h.LW.FILL,r.symbologyType=t,t!==h.mD.DOT_DENSITY&&r.setVV(n,e),r.data}}]),n}(V(b(L(d))));T.shared=new T(0);var z=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,u.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"getVariation",value:function(){return(0,c.Z)((0,c.Z)({},(0,r.Z)((0,i.Z)(n.prototype),"getVariation",this).call(this)),{},{vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}],[{key:"load",value:function(e){var t=this.shared;return t.data=e,t}},{key:"from",value:function(e){var t=e.symbologyType,n=e.vvFlags,r=this.load(0);return r.geometryType=h.LW.MARKER,r.symbologyType=t,t!==h.mD.HEATMAP&&r.setVV(n,e),r.data}}]),n}(V(b(m(L(d)))));z.shared=new z(0);var k=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,u.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"getVariation",value:function(){return(0,c.Z)((0,c.Z)({},(0,r.Z)((0,i.Z)(n.prototype),"getVariation",this).call(this)),{},{vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}],[{key:"load",value:function(e){var t=this.shared;return t.data=e,t}},{key:"from",value:function(e){var t=this.load(0);return t.geometryType=h.LW.LINE,t.symbologyType=e.symbologyType,t.setVV(e.vvFlags,e),t.data}}]),n}(V(b(L(d))));k.shared=new k(0);var M=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,u.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"getVariation",value:function(){return(0,c.Z)((0,c.Z)({},(0,r.Z)((0,i.Z)(n.prototype),"getVariation",this).call(this)),{},{vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}],[{key:"load",value:function(e){var t=this.shared;return t.data=e,t}},{key:"from",value:function(e){var t=this.load(0);return t.geometryType=h.LW.TEXT,t.symbologyType=e.symbologyType,t.setVV(e.vvFlags,e),t.data}}]),n}(V(b(m(L(d)))));M.shared=new M(0);var w=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,u.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"getVariation",value:function(){return(0,c.Z)((0,c.Z)({},(0,r.Z)((0,i.Z)(n.prototype),"getVariation",this).call(this)),{},{vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}],[{key:"load",value:function(e){var t=this.shared;return t.data=e,t}},{key:"from",value:function(e){var t=this.load(0);return t.geometryType=h.LW.LABEL,t.symbologyType=e.symbologyType,t.setVV(e.vvFlags,e),t.mapAligned=(0,f.NS)(e.placement),t.data}}]),n}(L(d));w.shared=new w(0)}}]);
//# sourceMappingURL=3518.4f45e479.chunk.js.map