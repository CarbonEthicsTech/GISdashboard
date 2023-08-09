"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[8101],{97642:function(t,e,r){r.d(e,{R:function(){return E},w:function(){return I}});var i=r(37762),n=r(15671),o=r(43144),u=r(60136),s=r(29388),a=r(27366),l=r(7138),v=r(97326),f=r(92026),c=r(17099),h=r(93433),p=r(84652),y=r(25265),g=function(){function t(){(0,n.Z)(this,t),this._propertyOriginMap=new Map,this._originStores=new Array(y.kk),this._values=new Map,this.multipleOriginsSupported=!0}return(0,o.Z)(t,[{key:"clone",value:function(e){var r=this,i=new t,n=this._originStores[y.s3.DEFAULTS];n&&n.forEach((function(t,e){i.set(e,(0,p.d9)(t),y.s3.DEFAULTS)}));for(var o=function(t){var n=r._originStores[t];n&&n.forEach((function(r,n){e&&e.has(n)||i.set(n,(0,p.d9)(r),t)}))},u=y.s3.SERVICE;u<y.kk;u++)o(u);return i}},{key:"get",value:function(t,e){var r=void 0===e?this._values:this._originStores[e];return r?r.get(t):void 0}},{key:"keys",value:function(t){var e=null==t?this._values:this._originStores[t];return e?(0,h.Z)(e.keys()):[]}},{key:"set",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y.s3.USER,i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,e),!this._values.has(t)||(0,f.j0)(this._propertyOriginMap.get(t))<=r){var n=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),n!==e}return!1}},{key:"delete",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.s3.USER,r=this._originStores[e];if(r){var i=r.get(t);if(r.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===e){this._values.delete(t);for(var n=e-1;n>=0;n--){var o=this._originStores[n];if(o&&o.has(t)){this._values.set(t,o.get(t)),this._propertyOriginMap.set(t,n);break}}}return i}}},{key:"has",value:function(t,e){var r=void 0===e?this._values:this._originStores[e];return!!r&&r.has(t)}},{key:"revert",value:function(t,e){for(;e>0&&!this.has(t,e);)--e;var r=this._originStores[e],i=r&&r.get(t),n=this._values.get(t);return this._values.set(t,i),this._propertyOriginMap.set(t,e),n!==i}},{key:"originOf",value:function(t){return this._propertyOriginMap.get(t)||y.s3.DEFAULTS}},{key:"forEach",value:function(t){this._values.forEach(t)}}]),t}(),d=r(92562),_=r(23879),k=r(69912),O=function(t){var e=function(t){(0,u.Z)(r,t);var e=(0,s.Z)(r);function r(){var t;(0,n.Z)(this,r);for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];t=e.call.apply(e,[this].concat(o));var s=(0,f.j0)((0,_.vw)((0,v.Z)(t))),a=s.store,l=new g;return s.store=l,(0,c.M)(s,a,l),t}return(0,o.Z)(r,[{key:"read",value:function(t,e){(0,d.i)(this,t,e)}},{key:"getAtOrigin",value:function(t,e){var r=Z(this),i=(0,y.M9)(e);if("string"==typeof t)return r.get(t,i);var n={};return t.forEach((function(t){n[t]=r.get(t,i)})),n}},{key:"originOf",value:function(t){return(0,y.x3)(this.originIdOf(t))}},{key:"originIdOf",value:function(t){return Z(this).originOf(t)}},{key:"revert",value:function(t,e){var r=Z(this),i=(0,y.M9)(e),n=(0,_.vw)(this);("string"==typeof t?"*"===t?r.keys(i):[t]:t).forEach((function(t){n.invalidate(t),r.revert(t,i),n.commit(t)}))}}]),r}(t);return e=(0,a._)([(0,k.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],e),e};function Z(t){return(0,_.vw)(t).store}var S=function(t){(0,u.Z)(r,t);var e=(0,s.Z)(r);function r(){return(0,n.Z)(this,r),e.apply(this,arguments)}return(0,o.Z)(r)}(O(l.Z));S=(0,a._)([(0,k.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],S);var w=r(18987);function M(t){return(0,_.vw)(t).store}var E=function(t){var e=function(t){(0,u.Z)(r,t);var e=(0,s.Z)(r);function r(){(0,n.Z)(this,r);for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return e.call.apply(e,[this].concat(i))}return(0,o.Z)(r)}(function(t){var e=function(t){(0,u.Z)(r,t);var e=(0,s.Z)(r);function r(){(0,n.Z)(this,r);for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return e.call.apply(e,[this].concat(i))}return(0,o.Z)(r,[{key:"clear",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"user";return M(this).delete(t,(0,y.M9)(e))}},{key:"write",value:function(t,e){return(0,w.c)(this,t=t||{},e),t}},{key:"setAtOrigin",value:function(t,e,r){(0,_.vw)(this).setAtOrigin(t,e,(0,y.M9)(r))}},{key:"removeOrigin",value:function(t){var e,r=M(this),n=(0,y.M9)(t),o=r.keys(n),u=(0,i.Z)(o);try{for(u.s();!(e=u.n()).done;){var s=e.value;r.originOf(s)===n&&r.set(s,r.get(s,n),y.s3.USER)}}catch(a){u.e(a)}finally{u.f()}}},{key:"updateOrigin",value:function(t,e){for(var r=M(this),i=(0,y.M9)(e),n=this.get(t),o=i+1;o<y.kk;++o)r.delete(t,o);r.set(t,n,i)}},{key:"toJSON",value:function(t){return this.write({},t)}}]),r}(t);return(e=(0,a._)([(0,k.j)("esri.core.WriteableMultiOriginJSONSupport")],e)).prototype.toJSON.isDefaultToJSON=!0,e}(O(t)));return e=(0,a._)([(0,k.j)("esri.core.MultiOriginJSONSupport")],e)},I=function(t){(0,u.Z)(r,t);var e=(0,s.Z)(r);function r(){return(0,n.Z)(this,r),e.apply(this,arguments)}return(0,o.Z)(r)}(E(l.Z));I=(0,a._)([(0,k.j)("esri.core.MultiOriginJSONSupport")],I)},88101:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var i=r(15671),n=r(43144),o=r(11752),u=r(61120),s=r(60136),a=r(29388),l=r(27366),v=r(10064),f=r(97642),c=r(99346),h=r(49861),p=(r(25243),r(63780),r(93169),r(69912)),y=r(30651),g=function(t){(0,s.Z)(r,t);var e=(0,a.Z)(r);function r(t){var n;return(0,i.Z)(this,r),(n=e.call(this,t)).resourceInfo=null,n.type="unsupported",n}return(0,n.Z)(r,[{key:"initialize",value:function(){var t=this;this.addResolvingPromise(new Promise((function(e,r){(0,c.Os)((function(){var e=t.resourceInfo&&(t.resourceInfo.layerType||t.resourceInfo.type),i="Unsupported layer type";e&&(i+=" "+e),r(new v.Z("layer:unsupported-layer-type",i,{layerType:e}))}))})))}},{key:"read",value:function(t,e){var i={resourceInfo:t};null!=t.id&&(i.id=t.id),null!=t.title&&(i.title=t.title),(0,o.Z)((0,u.Z)(r.prototype),"read",this).call(this,i,e)}},{key:"write",value:function(t,e){return Object.assign(t||{},this.resourceInfo,{id:this.id})}}]),r}((0,r(29598).I)((0,f.R)(y.Z)));(0,l._)([(0,h.Cb)({readOnly:!0})],g.prototype,"resourceInfo",void 0),(0,l._)([(0,h.Cb)({type:["show","hide"]})],g.prototype,"listMode",void 0),(0,l._)([(0,h.Cb)({json:{read:!1},readOnly:!0,value:"unsupported"})],g.prototype,"type",void 0);var d=g=(0,l._)([(0,p.j)("esri.layers.UnsupportedLayer")],g)}}]);
//# sourceMappingURL=8101.c4db18fe.chunk.js.map