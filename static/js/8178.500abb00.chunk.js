"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[8178],{58178:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(74165),u=n(37762),a=n(15861),i=n(15671),s=n(43144),o=n(14921),c=n(10064),l=n(32718),p=n(66978),h=n(92975),f=n(83406),d=n(97114),y=n(19995),v=n(27011),g=n(47615),m=n(68808),Z=n(12622),_=n(52410),w=function(){function e(){var t=this;(0,i.Z)(this,e),this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var a,i,s,o,c,l,d,v,_,w,x,k;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t._queryEngine.objectIdField,e.next=3,(0,Z.Bm)(null!==(a=t._getFeatureUrl)&&void 0!==a?a:"",t._featureType.typeName,t._getFeatureOutputFormat,{customParameters:t._customParameters,dateFields:t._queryEngine.fieldsIndex.dateFields.map((function(e){return e.name})),signal:n});case 3:return s=e.sent,e.next=6,(0,g.O3)(s);case 6:if((0,p.k_)(n),o=(0,g.lG)(s,{geometryType:t._queryEngine.geometryType,hasZ:!1,objectIdField:i}),!(0,h.fS)(t._queryEngine.spatialReference,h.Zn)){c=(0,u.Z)(o);try{for(c.s();!(l=c.n()).done;)null!=(d=l.value).geometry&&(d.geometry=(0,f.GH)((0,y.iV)((0,f.di)(d.geometry,t._queryEngine.geometryType,!1,!1),h.Zn,t._queryEngine.spatialReference)))}catch(r){c.e(r)}finally{c.f()}}v=1,_=(0,u.Z)(o);try{for(_.s();!(w=_.n()).done;)x=w.value,k={},(0,m.O0)(t._fieldsIndex,k,x.attributes,!0),x.attributes=k,null==x.attributes[i]&&(x.objectId=x.attributes[i]=v++)}catch(r){_.e(r)}finally{_.f()}return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return(0,s.Z)(e,[{key:"destroy",value:function(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=null}},{key:"load",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var u,a,i,s,o,c,l,h,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=t.getFeatureUrl,a=t.getFeatureOutputFormat,i=t.spatialReference,s=t.fields,o=t.geometryType,c=t.featureType,l=t.objectIdField,h=t.customParameters,this._featureType=c,this._customParameters=h,this._getFeatureUrl=u,this._getFeatureOutputFormat=a,this._fieldsIndex=new _.Z(s),e.next=8,this._checkProjection(i);case 8:return(0,p.k_)(n),this._queryEngine=new v.q({fields:s,geometryType:o,hasM:!1,hasZ:!1,objectIdField:l,spatialReference:i,timeInfo:null,featureStore:new d.Z({geometryType:o,hasM:!1,hasZ:!1})}),e.next=12,this._snapshotFeatures(n.signal);case 12:return f=e.sent,this._queryEngine.featureStore.addMany(f),e.next=16,this._queryEngine.fetchRecomputedExtents();case 16:return e.t0=e.sent.fullExtent,e.abrupt("return",{extent:e.t0});case 18:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new c.Z("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,u=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},n=u.length>1&&void 0!==u[1]?u[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQuery(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,u=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},n=u.length>1&&void 0!==u[1]?u[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForCount(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,u=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},n=u.length>1&&void 0!==u[1]?u[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForIds(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,u=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},n=u.length>1&&void 0!==u[1]?u[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForExtent(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,u=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},e.next=3,this._waitSnapshotComplete();case 3:return e.abrupt("return",this._queryEngine.executeQueryForSnapping(t,n.signal));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,u=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._customParameters=t,null!==(n=this._snapshotTask)&&void 0!==n&&n.abort(),this._snapshotTask=(0,o.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((function(e){u._queryEngine.featureStore.clear(),e&&u._queryEngine.featureStore.addMany(e)}),(function(e){u._queryEngine.featureStore.clear(),(0,p.D_)(e)||l.Z.getLogger("esri.layers.WFSLayer").error(new c.Z("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))})),e.next=6,this._waitSnapshotComplete();case 6:return e.next=8,this._queryEngine.fetchRecomputedExtents();case 8:return e.t0=e.sent.fullExtent,e.abrupt("return",{extent:e.t0});case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_waitSnapshotComplete",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._snapshotTask||this._snapshotTask.finished){e.next=9;break}return e.prev=1,e.next=4,this._snapshotTask.promise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.abrupt("return",this._waitSnapshotComplete());case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"_checkProjection",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,y._W)(h.Zn,t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new c.Z("unsupported-projection","Projection not supported",{spatialReference:t});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()},68808:function(e,t,n){n.d(t,{O0:function(){return g},av:function(){return h},b:function(){return x},d1:function(){return d},og:function(){return Z}});var r=n(74165),u=n(15861),a=n(37762),i=n(43144),s=n(15671),o=n(92975),c=n(37270),l=(0,i.Z)((function e(){(0,s.Z)(this,e),this.code=null,this.description=null})),p=(0,i.Z)((function e(t){(0,s.Z)(this,e),this.error=new l,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}));function h(e){return new p(e)}var f=(0,i.Z)((function e(t){(0,s.Z)(this,e),this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}));function d(e){return new f(e)}var y,v=new Set;function g(e,t,n){var r,u=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4?arguments[4]:void 0;for(var s in v.clear(),n){var o=e.get(s);if(o){var l=n[s],p=m(o,l);if(p!==l&&i&&i.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:o,originalValue:l,sanitizedValue:p}}),v.add(o.name),o&&(u||o.editable)){var f=(0,c.Qc)(o,p);if(f)return h((0,c.vP)(f,o,p));t[o.name]=p}}}var d,y=(0,a.Z)(null!==(r=null===e||void 0===e?void 0:e.requiredFields)&&void 0!==r?r:[]);try{for(y.s();!(d=y.n()).done;){var g=d.value;if(!v.has(g.name))return h('missing required field "'.concat(g.name,'"'))}}catch(Z){y.e(Z)}finally{y.f()}return null}function m(e,t){var n=t;return"string"==typeof t&&(0,c.H7)(e)?n=parseFloat(t):null!=t&&(0,c.qN)(e)&&"string"!=typeof t&&(n=String(t)),(0,c.Pz)(n)}function Z(e,t){if(!e||!(0,o.JY)(t))return e;if("rings"in e||"paths"in e){if(null==y)throw new TypeError("geometry engine not loaded");return y.simplify(t,e)}return e}function _(){return w.apply(this,arguments)}function w(){return(w=(0,u.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=null==y,!e.t0){e.next=5;break}return e.next=4,Promise.all([n.e(9058),n.e(3645)]).then(n.bind(n,50309));case 4:y=e.sent;case 5:return e.abrupt("return",y);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return k.apply(this,arguments)}function k(){return(k=(0,u.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!(0,o.JY)(t)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n,e.t0){e.next=4;break}return e.next=4,_();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=8178.500abb00.chunk.js.map