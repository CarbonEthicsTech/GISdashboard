"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[5838],{96866:function(e,t,r){r.d(t,{B:function(){return v}});var n=r(74165),i=r(15861),o=r(1413),a=r(37762),s=r(80292),l=r(35995),u=r(71907),p=r(33397),c=r(25265),d=r(49861),y=r(22892),f=r(53283);function v(e){var t,r=null!==(t=null===e||void 0===e?void 0:e.origins)&&void 0!==t?t:[void 0];return function(t,n){var i,u=function(e,t,r){var n;if("resource"===(null===e||void 0===e?void 0:e.type))return function(e,t,r){var n=(0,p.Oe)(t,r);return{type:String,read:function(e,t,r){var i=(0,f.r)(e,t,r);return n.type===String?i:"function"==typeof n.type?new n.type({url:i}):void 0},write:{writer:function(t,i,a,u){if(!u||!u.resources)return"string"==typeof t?void(i[a]=(0,f.t)(t,u)):void(i[a]=t.write({},u));var p=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),d=(0,f.t)(p,(0,o.Z)((0,o.Z)({},u),{},{verifyItemRelativeUrls:u&&u.verifyItemRelativeUrls?{writtenUrls:u.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0}),f.M.NO),v=n.type!==String&&(!(0,s.l)(this)||u&&u.origin&&this.originIdOf(r)>(0,c.M9)(u.origin)),b={object:this,propertyName:r,value:t,targetUrl:d,dest:i,targetPropertyName:a,context:u,params:e};u&&u.portalItem&&d&&!(0,l.YP)(d)?v?function(e){var t,r=e.context,n=e.targetUrl,i=e.params,a=e.value,s=e.dest,u=e.targetPropertyName;if(!r.portalItem)return;var p=r.portalItem.resourceFromPath(n),c=m(a,n,r),d=(0,y.B)(c),f=(0,l.Ml)(p.path),v=null!==(t=null===i||void 0===i?void 0:i.compress)&&void 0!==t&&t;d===f?(r.resources&&g((0,o.Z)((0,o.Z)({},e),{},{resource:p,content:c,compress:v,updates:r.resources.toUpdate})),s[u]=n):h(e)}(b):function(e){var t=e.context,r=e.targetUrl,n=e.dest,i=e.targetPropertyName;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),n[i]=r)}(b):u&&u.portalItem&&(null==d||null!=(0,f.i)(d)||(0,l.jc)(d)||v)?h(b):i[a]=d}}}}(e,t,r);switch(null!==(n=null===e||void 0===e?void 0:e.type)&&void 0!==n?n:"other"){case"other":return{read:!0,write:!0};case"url":return{read:f.a.read,write:f.a.write}}}(e,t,n),v=(0,a.Z)(r);try{for(v.s();!(i=v.n()).done;){var b=i.value,w=(0,d.CJ)(t,b,n);for(var _ in u)w[_]=u[_]}}catch(I){v.e(I)}finally{v.f()}}}function h(e){var t,r,n,i=e.targetUrl,a=e.params,s=e.value,p=e.context,c=e.dest,d=e.targetPropertyName;if(p.portalItem){var v=(0,f.p)(i),h=null!==(t=null===v||void 0===v?void 0:v.filename)&&void 0!==t?t:(0,u.D)(),w=null!==(r=null===a||void 0===a?void 0:a.prefix)&&void 0!==r?r:null===v||void 0===v?void 0:v.prefix,_=m(s,i,p),I=(0,l.v_)(w,h),Z="".concat(I,".").concat((0,y.B)(_)),k=p.portalItem.resourceFromPath(Z);(0,l.jc)(i)&&p.resources&&p.resources.pendingOperations.push(function(e){return b.apply(this,arguments)}(i).then((function(e){k.path="".concat(I,".").concat((0,y.B)(e)),c[d]=k.itemRelativeUrl})).catch((function(){})));var x=null!==(n=null===a||void 0===a?void 0:a.compress)&&void 0!==n&&n;p.resources&&g((0,o.Z)((0,o.Z)({},e),{},{resource:k,content:_,compress:x,updates:p.resources.toAdd})),c[d]=k.itemRelativeUrl}}function g(e){var t=e.object,r=e.propertyName,n=e.updates,i=e.resource,o=e.content,a=e.compress;n.push({resource:i,content:o,compress:a,finish:function(e){!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(t,r,e)}})}function m(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}function b(){return(b=(0,i.Z)((0,n.Z)().mark((function e(t){var i,o,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(r.bind(r,76200));case 2:return i=e.sent.default,e.next=5,i(t,{responseType:"blob"});case 5:return o=e.sent,a=o.data,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},5838:function(e,t,r){r.r(t),r.d(t,{default:function(){return xe}});var n=r(37762),i=r(74165),o=r(15861),a=r(1413),s=r(15671),l=r(43144),u=r(11752),p=r(61120),c=r(60136),d=r(29388),y=r(27366),f=r(52639),v=r(44055),h=(r(94931),r(78451),r(98689),r(57823),r(32066),r(30505),r(34999),r(28189),r(9014),r(40464)),g=r(76200),m=r(11582),b=r(40281),w=r(10064),_=r(32718),I=r(97642),Z=r(66978),k=r(94172),x=r(35995),S=r(49861),L=(r(25243),r(63780),r(93169),r(23879)),C=r(38511),F=r(69912),j=r(25265),O=r(30651),E=r(27961),A=r(11936),P=r(56601),T=r(6061),R=r(29598),N=r(56811),D=r(54395),U=r(25899),q=r(96978),G=r(45948),Q=r(87562),V=r(10536),J=r(34785),M=r(25610),B=r(52410),z=r(37270),K=r(34207),W=r(77748),Y=r(85116),H=r(71065),X=r(46784),$=function(e){(0,c.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).name=null,e.field=null,e.currentRangeExtent=null,e.fullRangeExtent=null,e.type="rangeInfo",e}return(0,l.Z)(r)}(X.wq);(0,y._)([(0,S.Cb)({type:String,json:{read:!0,write:!0}})],$.prototype,"name",void 0),(0,y._)([(0,S.Cb)({type:String,json:{read:!0,write:!0}})],$.prototype,"field",void 0),(0,y._)([(0,S.Cb)({type:[Number],json:{read:!0,write:!0}})],$.prototype,"currentRangeExtent",void 0),(0,y._)([(0,S.Cb)({type:[Number],json:{read:!0,write:!0}})],$.prototype,"fullRangeExtent",void 0),(0,y._)([(0,S.Cb)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],$.prototype,"type",void 0),$=(0,y._)([(0,F.j)("esri.layers.support.RangeInfo")],$);var ee,te,re=r(100),ne=r(84652),ie=r(96866),oe=r(51370),ae=r(80885),se=r(52587),le=ee=function(e){(0,c.Z)(r,e);var t=(0,d.Z)(r);function r(e){return(0,s.Z)(this,r),t.call(this,e)}return(0,l.Z)(r,[{key:"clone",value:function(){return new ee(this.items.map((function(e){return e.clone()})))}},{key:"write",value:function(e,t){return this.toJSON(t)}},{key:"toJSON",value:function(e){var t,r=this,n=null===e||void 0===e||null===(t=e.layer)||void 0===t?void 0:t.spatialReference;return n?this.toArray().map((function(t){if(!n.equals(t.spatialReference)){if(!(0,se.canProjectWithoutEngine)(t.spatialReference,n))return e&&e.messages&&e.messages.push(new oe.Z("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:r,spatialReference:e.layer.spatialReference,context:e})),null;var i=new ae.Z;(0,se.projectPolygon)(t,i,n),t=i}var o=t.toJSON(e);return delete o.spatialReference,o})).filter((function(e){return null!=e})):(null!==e&&void 0!==e&&e.messages&&e.messages.push(new oe.Z("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((function(t){return t.toJSON(e)})))}}],[{key:"fromJSON",value:function(e,t){var r=new ee;return e.forEach((function(e){return r.add(ae.Z.fromJSON(e,t))})),r}}]),r}((0,X.eC)(b.Z.ofType(ae.Z))),ue=le=ee=(0,y._)([(0,F.j)("esri.layers.support.PolygonCollection")],le),pe=r(53283),ce=te=function(e){(0,c.Z)(r,e);var t=(0,d.Z)(r);function r(e){var n;return(0,s.Z)(this,r),(n=t.call(this,e)).spatialRelationship="disjoint",n.geometries=new ue,n._geometriesSource=null,n._handles=new re.Z,n}return(0,l.Z)(r,[{key:"initialize",value:function(){var e=this;this._handles.add((0,k.on)((function(){return e.geometries}),"after-changes",(function(){return e.geometries=e.geometries}),k.Z_))}},{key:"destroy",value:function(){this._handles.destroy()}},{key:"readGeometries",value:function(e,t,r){Array.isArray(e)?this.geometries=ue.fromJSON(e,r):this._geometriesSource={url:(0,pe.f)(e,r),context:r}}},{key:"loadGeometries",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n,o,s,l,u,p;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=this._geometriesSource){e.next=2;break}return e.abrupt("return");case 2:return n=this._geometriesSource,o=n.url,s=n.context,e.next=7,(0,g.default)(o,{responseType:"json",signal:null===r||void 0===r?void 0:r.signal});case 7:l=e.sent,u=t.toJSON(),p=l.data.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{spatialReference:u})})),this.geometries=ue.fromJSON(p,s),this._geometriesSource=null;case 11:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"clone",value:function(){var e=new te({geometries:(0,ne.d9)(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}}]),r}(X.wq);(0,y._)([(0,S.Cb)({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],ce.prototype,"spatialRelationship",void 0),(0,y._)([(0,S.Cb)({type:ue,nonNullable:!0,json:{write:!0}}),(0,ie.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],ce.prototype,"geometries",void 0),(0,y._)([(0,C.r)(["web-scene","portal-item"],"geometries")],ce.prototype,"readGeometries",null);var de=ce=te=(0,y._)([(0,F.j)("esri.layers.support.SceneFilter")],ce),ye=r(21371),fe=r(86638),ve=r(28554),he=r(81085),ge=r(55664),me=r(24405),be=r(81219),we=["3DObject","Point"],_e=(0,M.v)(),Ie=function(e){(0,c.Z)(y,e);var t=(0,d.Z)(y);function y(){var e;(0,s.Z)(this,y);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).featureReduction=null,e.rangeInfos=null,e.operationalLayerType="ArcGISSceneServiceLayer",e.type="scene",e.fields=null,e.floorInfo=null,e.outFields=null,e.nodePages=null,e.materialDefinitions=null,e.textureSetDefinitions=null,e.geometryDefinitions=null,e.serviceUpdateTimeStamp=null,e.excludeObjectIds=new b.Z,e.definitionExpression=null,e.filter=null,e.path=null,e.labelsVisible=!0,e.labelingInfo=null,e.legendEnabled=!0,e.priority=null,e.semantic=null,e.cachedDrawingInfo={color:!1},e.popupEnabled=!0,e.popupTemplate=null,e.objectIdField=null,e.globalIdField=null,e._fieldUsageInfo={},e.screenSizePerspectiveEnabled=!0,e}return(0,l.Z)(y,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,a.Z)({url:e},t):e}},{key:"destroy",value:function(){this._set("renderer",null)}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFieldDomain",value:function(e,t){var r,n,i,o=null===(r=this.getFeatureType(null===t||void 0===t?void 0:t.feature))||void 0===r||null===(r=r.domains)||void 0===r?void 0:r[e];return o&&"inherited"!==o.type?o:null!==(n=null===(i=this.getField(e))||void 0===i?void 0:i.domain)&&void 0!==n?n:null}},{key:"getFeatureType",value:function(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}},{key:"types",get:function(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.types)&&void 0!==e?e:[]}},{key:"typeIdField",get:function(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.typeIdField)&&void 0!==e?e:null}},{key:"templates",get:function(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.templates)&&void 0!==e?e:null}},{key:"formTemplate",get:function(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.formTemplate)&&void 0!==e?e:null}},{key:"fieldsIndex",get:function(){return new B.Z(this.fields)}},{key:"readNodePages",value:function(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:K.U4.fromJSON(e,r)}},{key:"elevationInfo",set:function(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}},{key:"geometryType",get:function(){return ke[this.profile]||"mesh"}},{key:"renderer",set:function(e){(0,z.YN)(e,this.fieldsIndex),this._set("renderer",e)}},{key:"readCachedDrawingInfo",value:function(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}},{key:"capabilities",get:function(){var e,t,r,n=null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.capabilities)&&void 0!==e?e:q.C,i=n.query,o=n.editing,a=o.supportsGlobalId,s=o.supportsRollbackOnFailure,l=o.supportsUploadWithItemId,u=o.supportsGeometryUpdate,p=o.supportsReturnServiceEditsInSourceSpatialReference,c=n.data,d=c.supportsZ,y=c.supportsM,f=c.isVersioned,v=c.supportsAttachment,h=n.operations,g=h.supportsEditing,m=h.supportsAdd,b=h.supportsUpdate,w=h.supportsDelete,_=h.supportsQuery,I=h.supportsQueryAttachments,Z=h.supportsAsyncConvert3D,k=n.operations.supportsChangeTracking,x=!(null===(r=this.associatedLayer)||void 0===r||!r.infoFor3D)&&(0,ve.Rx)();return{query:i,editing:{supportsGlobalId:a,supportsReturnServiceEditsInSourceSpatialReference:p,supportsRollbackOnFailure:s,supportsGeometryUpdate:x&&u,supportsUploadWithItemId:l},data:{supportsAttachment:v,supportsZ:d,supportsM:y,isVersioned:f},operations:{supportsQuery:_,supportsQueryAttachments:I,supportsEditing:g&&k,supportsAdd:x&&m&&k,supportsDelete:x&&w&&k,supportsUpdate:b&&k,supportsAsyncConvert3D:Z}}}},{key:"editingEnabled",get:function(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges},set:function(e){this._overrideIfSome("editingEnabled",e)}},{key:"infoFor3D",get:function(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.infoFor3D)&&void 0!==e?e:null}},{key:"defaultPopupTemplate",get:function(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}},{key:"readObjectIdField",value:function(e,t){return!e&&t.fields&&t.fields.some((function(t){return"esriFieldTypeOID"===t.type&&(e=t.name),!!e})),e||void 0}},{key:"readGlobalIdField",value:function(e,t){return!e&&t.fields&&t.fields.some((function(t){return"esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e})),e||void 0}},{key:"displayField",get:function(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.displayField)&&void 0!==e?e:null}},{key:"readProfile",value:function(e,t){var r=t.store.profile;return null!=r&&Ze[r]?Ze[r]:(_.Z.getLogger(this).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}},{key:"load",value:function(e){var t=this,r=null!=e?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Z.r9).then((function(){return t._fetchService(r)})).then((function(){return Promise.all([t._fetchIndexAndUpdateExtent(t.nodePages,r),t._setAssociatedFeatureLayer(r),t._loadFilterGeometries()])})).then((function(){return t._validateElevationInfo()})).then((function(){return t._applyAssociatedLayerOverrides()})).then((function(){return t._populateFieldUsageInfo()})).then((function(){return(0,ye.y)(t,{origin:"service"},r)})).then((function(){return(0,z.YN)(t.renderer,t.fieldsIndex)})).then((function(){return t.finishLoadEditablePortalLayer(e)}));return this.addResolvingPromise(n),Promise.resolve(this)}},{key:"beforeSave",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=null!=this.filter,!e.t0){e.next=5;break}return this.filter=this.filter.clone(),e.next=5,this.load();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_loadFilterGeometries",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.filter){e.next=9;break}return e.prev=1,e.next=4,this.filter.loadGeometries(this.spatialReference);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),_.Z.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e.t0}),this.filter=null;case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"createQuery",value:function(){var e=new fe.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}},{key:"queryExtent",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(n){return n.queryExtent(e||r.createQuery(),t)}))}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(n){return n.queryFeatureCount(e||r.createQuery(),t)}))}},{key:"queryFeatures",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(n){return n.queryFeatures(e||r.createQuery(),t)})).then((function(e){if(null!==e&&void 0!==e&&e.features){var t,i=(0,n.Z)(e.features);try{for(i.s();!(t=i.n()).done;){var o=t.value;o.layer=r,o.sourceLayer=r}}catch(a){i.e(a)}finally{i.f()}}return e}))}},{key:"queryCachedAttributes",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=z.Lk,e.t1=this.fieldsIndex,e.next=4,(0,me.e7)(this,(0,me.V5)(this));case 4:return e.t2=e.sent,o=(0,e.t0)(e.t1,e.t2),e.abrupt("return",(0,ge.xe)(this.parsedUrl.path,null!==(n=this.attributeStorageInfo)&&void 0!==n?n:[],t,r,o));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryCachedFeature",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.queryCachedAttributes(t,[r]);case 2:if((n=e.sent)&&0!==n.length){e.next=5;break}throw new w.Z("scenelayer:feature-not-in-cached-data","Feature not found in cached data");case 5:return o=new f.Z,e.abrupt("return",(o.attributes=n[0],o.layer=this,o.sourceLayer=this,o));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(n){return n.queryObjectIds(e||r.createQuery(),t)}))}},{key:"queryAttachments",value:function(e,t){return this._getAssociatedLayerForQuery().then((function(r){return r.queryAttachments(e,t)}))}},{key:"getFieldUsageInfo",value:function(e){var t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(_.Z.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}},{key:"createPopupTemplate",value:function(e){return(0,he.eZ)(this,e)}},{key:"_getAssociatedLayerForQuery",value:function(){var e=this.associatedLayer;return null!==e&&void 0!==e&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}},{key:"_loadAssociatedLayerForQuery",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(this.associatedLayer){e.next=4;break}throw new w.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});case 4:return e.prev=4,e.next=7,this.associatedLayer.load();case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(4),new w.Z("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e.t0});case 12:return e.abrupt("return",this.associatedLayer);case 13:case"end":return e.stop()}}),e,this,[[4,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"hasCachedStatistics",value:function(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((function(t){return t.name===e}))}},{key:"queryCachedStatistics",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var o,a,s,l,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load(r);case 2:if(this.statisticsInfo){e.next=4;break}throw new w.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");case 4:if(o=this.fieldsIndex.get(t)){e.next=7;break}throw new w.Z("scenelayer:field-unexisting","Field '".concat(t,"' does not exist on the layer"));case 7:a=(0,n.Z)(this.statisticsInfo),e.prev=8,a.s();case 10:if((s=a.n()).done){e.next=17;break}if((l=s.value).name!==o.name){e.next=15;break}return u=(0,x.v_)(this.parsedUrl.path,l.href),e.abrupt("return",(0,g.default)(u,{query:{f:"json",token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((function(e){return e.data})));case 15:e.next=10;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(8),a.e(e.t0);case 22:return e.prev=22,a.f(),e.finish(22);case 25:throw new w.Z("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available");case 26:case"end":return e.stop()}}),e,this,[[8,19,22,25]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"saveAs",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(D.xp.SAVE_AS,(0,a.Z)((0,a.Z)({},r),{},{getTypeKeywords:function(){return n._getTypeKeywords()},portalItemLayerType:"scene"}),t));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var t,r=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={getTypeKeywords:function(){return r._getTypeKeywords()},portalItemLayerType:"scene"},e.abrupt("return",this._debouncedSaveOperations(D.xp.SAVE,t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,n){var o,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(1340),r.e(9887)]).then(r.bind(r,29887));case 2:return o=e.sent,a=o.applyEdits,e.next=6,this.load();case 6:if(this.associatedLayer){e.next=8;break}throw new w.Z("".concat(this.type,"-layer:not-editable"),"Service is not editable");case 8:return e.next=10,this.associatedLayer.load();case 10:return e.abrupt("return",a(this,this.associatedLayer.source,t,n));case 11:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"uploadAssets",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(null!=this.associatedLayer){e.next=4;break}throw new w.Z("".concat(this.type,"-layer:not-editable"),"Service is not editable");case 4:return e.next=6,this.associatedLayer.load();case 6:return e.abrupt("return",this.associatedLayer.uploadAssets(t,r));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"on",value:function(e,t){return(0,u.Z)((0,p.Z)(y.prototype),"on",this).call(this,e,t)}},{key:"validateLayer",value:function(e){if(e.layerType&&!we.includes(e.layerType))throw new w.Z("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new w.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new w.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function(e,t){var r=!1,n=!1;if(null==e)r=!0,n=!0;else{var i=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,n=i;break;case"vertex-reference-frame":r=!0,n=!i;break;default:r=!1}}if(!r)throw new w.Z("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!n)throw new w.Z("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}},{key:"_getTypeKeywords",value:function(){var e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new w.Z("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}},{key:"_populateFieldUsageInfo",value:function(){var e=this;if(this._fieldUsageInfo={},this.fields){var t,r=(0,n.Z)(this.fields);try{var i=function(){var r,n=t.value,i=!(!e.attributeStorageInfo||!e.attributeStorageInfo.some((function(e){return e.name===n.name}))),o=!(null===(r=e.associatedLayer)||void 0===r||null===(r=r.fields)||void 0===r||!r.some((function(e){return e&&n.name===e.name}))),a={supportsLabelingInfo:i,supportsRenderer:i,supportsPopupTemplate:i||o,supportsLayerQuery:o};e._fieldUsageInfo[n.name]=a};for(r.s();!(t=r.n()).done;)i()}catch(o){r.e(o)}finally{r.f()}}}},{key:"_applyAssociatedLayerOverrides",value:function(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride()}},{key:"_applyAssociatedLayerFieldsOverrides",value:function(){var e;if(null!==(e=this.associatedLayer)&&void 0!==e&&e.fields){var t,r=null,i=(0,n.Z)(this.associatedLayer.fields);try{for(i.s();!(t=i.n()).done;){var o=t.value,a=this.getField(o.name);a?(!a.domain&&o.domain&&(a.domain=o.domain.clone()),a.editable=o.editable,a.nullable=o.nullable,a.length=o.length):(r||(r=this.fields?this.fields.slice():[]),r.push(o.clone()))}}catch(s){i.e(s)}finally{i.f()}r&&this._set("fields",r)}}},{key:"_applyAssociatedLayerPopupOverrides",value:function(){if(this.associatedLayer)for(var e=["popupTemplate","popupEnabled"],t=(0,L.vw)(this),r=0;r<e.length;r++){var n=e[r],i=this.originIdOf(n),o=this.associatedLayer.originIdOf(n);i<o&&(o===j.s3.SERVICE||o===j.s3.PORTAL_ITEM)&&t.setAtOrigin(n,this.associatedLayer[n],o)}}},{key:"_applyAssociatedLayerExtentOverride",value:function(){var e,t,r,n,i,o,a=null===(e=this.associatedLayer)||void 0===e||null===(e=e.editingInfo)||void 0===e?void 0:e.lastEditDate,s=null===(t=this.associatedLayer)||void 0===t?void 0:t.serverGens,l=null===(r=this.associatedLayer)||void 0===r?void 0:r.getAtOrigin("fullExtent","service");(0,ve.Rx)()&&null!=(null===(n=this.associatedLayer)||void 0===n?void 0:n.infoFor3D)&&l&&(0,U.M8)(null===(i=this.associatedLayer)||void 0===i?void 0:i.url)&&a&&(null===(o=this.serviceUpdateTimeStamp)||void 0===o?void 0:o.lastUpdate)!==a.getTime()&&(this.serviceUpdateTimeStamp||(null===s||void 0===s?void 0:s.minServerGen)!==(null===s||void 0===s?void 0:s.serverGen))&&(0,L.vw)(this).setAtOrigin("fullExtent",l.clone(),j.s3.SERVICE)}},{key:"_setAssociatedFeatureLayer",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(["mesh-pyramids","points"].includes(this.profile)){e.next=2;break}return e.abrupt("return");case 2:return r=new J.W(this.parsedUrl,this.portalItem,this.apiKey,t),e.prev=3,e.next=6,r.fetch();case 6:this.associatedLayer=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),(0,Z.D_)(e.t0)||this._logWarningOnPopupEnabled();case 12:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_logWarningOnPopupEnabled",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var t,r=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,k.N1)((function(){return r.popupEnabled&&null!=r.popupTemplate}));case 2:t="this SceneLayer: ".concat(this.title),null==this.attributeStorageInfo?_.Z.getLogger(this).warn("Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ".concat(t)):_.Z.getLogger(this).info("Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ".concat(t));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_validateElevationInfo",value:function(){var e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"relative-to-scene"===e.mode&&_.Z.getLogger(this).warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&_.Z.getLogger(this).warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}}]),y}((0,P.o1)((0,D.Vt)((0,A.Y)((0,T.q)((0,R.I)((0,N.M)((0,I.R)((0,E.V)((0,m.J)(O.Z))))))))));(0,y._)([(0,S.Cb)({types:{key:"type",base:Q.B,typeMap:{selection:V.Z}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],Ie.prototype,"featureReduction",void 0),(0,y._)([(0,S.Cb)({type:[$],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],Ie.prototype,"rangeInfos",void 0),(0,y._)([(0,S.Cb)({json:{read:!1}})],Ie.prototype,"associatedLayer",void 0),(0,y._)([(0,S.Cb)({type:["show","hide"]})],Ie.prototype,"listMode",void 0),(0,y._)([(0,S.Cb)({type:["ArcGISSceneServiceLayer"]})],Ie.prototype,"operationalLayerType",void 0),(0,y._)([(0,S.Cb)({json:{read:!1},readOnly:!0})],Ie.prototype,"type",void 0),(0,y._)([(0,S.Cb)((0,a.Z)((0,a.Z)({},_e.fields),{},{readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}}))],Ie.prototype,"fields",void 0),(0,y._)([(0,S.Cb)()],Ie.prototype,"types",null),(0,y._)([(0,S.Cb)()],Ie.prototype,"typeIdField",null),(0,y._)([(0,S.Cb)()],Ie.prototype,"templates",null),(0,y._)([(0,S.Cb)()],Ie.prototype,"formTemplate",null),(0,y._)([(0,S.Cb)({readOnly:!0})],Ie.prototype,"fieldsIndex",null),(0,y._)([(0,S.Cb)({type:H.Z,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],Ie.prototype,"floorInfo",void 0),(0,y._)([(0,S.Cb)(_e.outFields)],Ie.prototype,"outFields",void 0),(0,y._)([(0,S.Cb)({type:K.U4,readOnly:!0,json:{read:!1}})],Ie.prototype,"nodePages",void 0),(0,y._)([(0,C.r)("service","nodePages",["nodePages","pointNodePages"])],Ie.prototype,"readNodePages",null),(0,y._)([(0,S.Cb)({type:[K.QI],readOnly:!0})],Ie.prototype,"materialDefinitions",void 0),(0,y._)([(0,S.Cb)({type:[K.Yh],readOnly:!0})],Ie.prototype,"textureSetDefinitions",void 0),(0,y._)([(0,S.Cb)({type:[K.H3],readOnly:!0})],Ie.prototype,"geometryDefinitions",void 0),(0,y._)([(0,S.Cb)({readOnly:!0})],Ie.prototype,"serviceUpdateTimeStamp",void 0),(0,y._)([(0,S.Cb)({readOnly:!0})],Ie.prototype,"attributeStorageInfo",void 0),(0,y._)([(0,S.Cb)({readOnly:!0})],Ie.prototype,"statisticsInfo",void 0),(0,y._)([(0,S.Cb)({type:b.Z.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],Ie.prototype,"excludeObjectIds",void 0),(0,y._)([(0,S.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],Ie.prototype,"definitionExpression",void 0),(0,y._)([(0,S.Cb)({type:de,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],Ie.prototype,"filter",void 0),(0,y._)([(0,S.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],Ie.prototype,"path",void 0),(0,y._)([(0,S.Cb)(G.PV)],Ie.prototype,"elevationInfo",null),(0,y._)([(0,S.Cb)({type:String})],Ie.prototype,"geometryType",null),(0,y._)([(0,S.Cb)(G.iR)],Ie.prototype,"labelsVisible",void 0),(0,y._)([(0,S.Cb)({type:[W.Z],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:Y.r},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Y.r},write:!0}})],Ie.prototype,"labelingInfo",void 0),(0,y._)([(0,S.Cb)(G.rn)],Ie.prototype,"legendEnabled",void 0),(0,y._)([(0,S.Cb)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader:function(e,t){var r;if("number"==typeof e&&e>=0&&e<=1)return e;var n=null===(r=t.layerDefinition)||void 0===r||null===(r=r.drawingInfo)||void 0===r?void 0:r.transparency;return void 0!==n?(0,be.b)(n):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],Ie.prototype,"opacity",void 0),(0,y._)([(0,S.Cb)({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],Ie.prototype,"priority",void 0),(0,y._)([(0,S.Cb)({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],Ie.prototype,"semantic",void 0),(0,y._)([(0,S.Cb)({types:h.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],Ie.prototype,"renderer",null),(0,y._)([(0,S.Cb)({json:{read:!1}})],Ie.prototype,"cachedDrawingInfo",void 0),(0,y._)([(0,C.r)("service","cachedDrawingInfo")],Ie.prototype,"readCachedDrawingInfo",null),(0,y._)([(0,S.Cb)({readOnly:!0,json:{read:!1}})],Ie.prototype,"capabilities",null),(0,y._)([(0,S.Cb)({type:Boolean,json:{read:!1}})],Ie.prototype,"editingEnabled",null),(0,y._)([(0,S.Cb)({readOnly:!0,json:{write:!1,read:!1}})],Ie.prototype,"infoFor3D",null),(0,y._)([(0,S.Cb)(G.C_)],Ie.prototype,"popupEnabled",void 0),(0,y._)([(0,S.Cb)({type:v.Z,json:{name:"popupInfo",write:!0}})],Ie.prototype,"popupTemplate",void 0),(0,y._)([(0,S.Cb)({readOnly:!0,json:{read:!1}})],Ie.prototype,"defaultPopupTemplate",null),(0,y._)([(0,S.Cb)({type:String,json:{read:!1}})],Ie.prototype,"objectIdField",void 0),(0,y._)([(0,C.r)("service","objectIdField",["objectIdField","fields"])],Ie.prototype,"readObjectIdField",null),(0,y._)([(0,S.Cb)({type:String,json:{read:!1}})],Ie.prototype,"globalIdField",void 0),(0,y._)([(0,C.r)("service","globalIdField",["globalIdField","fields"])],Ie.prototype,"readGlobalIdField",null),(0,y._)([(0,S.Cb)({readOnly:!0,type:String,json:{read:!1}})],Ie.prototype,"displayField",null),(0,y._)([(0,S.Cb)({type:String,json:{read:!1}})],Ie.prototype,"profile",void 0),(0,y._)([(0,C.r)("service","profile",["store.profile"])],Ie.prototype,"readProfile",null),(0,y._)([(0,S.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],Ie.prototype,"normalReferenceFrame",void 0),(0,y._)([(0,S.Cb)(G.YI)],Ie.prototype,"screenSizePerspectiveEnabled",void 0),Ie=(0,y._)([(0,F.j)("esri.layers.SceneLayer")],Ie);var Ze={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},ke={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},xe=Ie},22892:function(e,t,r){r.d(t,{B:function(){return i}});var n=r(35995);function i(e){return o[function(e){return e instanceof Blob?e.type:function(e){var t=(0,n.Ml)(e);return l[t]||a}(e.url)}(e)]||s}var o={},a="text/plain",s=o[a],l={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(var u in l)o[l[u]]=u}}]);
//# sourceMappingURL=5838.a71b28eb.chunk.js.map