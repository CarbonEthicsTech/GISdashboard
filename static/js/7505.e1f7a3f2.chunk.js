"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[7505],{97642:function(e,r,i){i.d(r,{R:function(){return Z},w:function(){return M}});var t=i(37762),n=i(15671),a=i(43144),o=i(60136),s=i(29388),l=i(27366),u=i(7138),c=i(97326),y=i(92026),p=i(17099),v=i(93433),f=i(84652),d=i(25265),g=function(){function e(){(0,n.Z)(this,e),this._propertyOriginMap=new Map,this._originStores=new Array(d.kk),this._values=new Map,this.multipleOriginsSupported=!0}return(0,a.Z)(e,[{key:"clone",value:function(r){var i=this,t=new e,n=this._originStores[d.s3.DEFAULTS];n&&n.forEach((function(e,r){t.set(r,(0,f.d9)(e),d.s3.DEFAULTS)}));for(var a=function(e){var n=i._originStores[e];n&&n.forEach((function(i,n){r&&r.has(n)||t.set(n,(0,f.d9)(i),e)}))},o=d.s3.SERVICE;o<d.kk;o++)a(o);return t}},{key:"get",value:function(e,r){var i=void 0===r?this._values:this._originStores[r];return i?i.get(e):void 0}},{key:"keys",value:function(e){var r=null==e?this._values:this._originStores[e];return r?(0,v.Z)(r.keys()):[]}},{key:"set",value:function(e,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d.s3.USER,t=this._originStores[i];if(t||(t=new Map,this._originStores[i]=t),t.set(e,r),!this._values.has(e)||(0,y.j0)(this._propertyOriginMap.get(e))<=i){var n=this._values.get(e);return this._values.set(e,r),this._propertyOriginMap.set(e,i),n!==r}return!1}},{key:"delete",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.s3.USER,i=this._originStores[r];if(i){var t=i.get(e);if(i.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===r){this._values.delete(e);for(var n=r-1;n>=0;n--){var a=this._originStores[n];if(a&&a.has(e)){this._values.set(e,a.get(e)),this._propertyOriginMap.set(e,n);break}}}return t}}},{key:"has",value:function(e,r){var i=void 0===r?this._values:this._originStores[r];return!!i&&i.has(e)}},{key:"revert",value:function(e,r){for(;r>0&&!this.has(e,r);)--r;var i=this._originStores[r],t=i&&i.get(e),n=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),n!==t}},{key:"originOf",value:function(e){return this._propertyOriginMap.get(e)||d.s3.DEFAULTS}},{key:"forEach",value:function(e){this._values.forEach(e)}}]),e}(),S=i(92562),h=i(23879),w=i(69912),m=function(e){var r=function(e){(0,o.Z)(i,e);var r=(0,s.Z)(i);function i(){var e;(0,n.Z)(this,i);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];e=r.call.apply(r,[this].concat(a));var s=(0,y.j0)((0,h.vw)((0,c.Z)(e))),l=s.store,u=new g;return s.store=u,(0,p.M)(s,l,u),e}return(0,a.Z)(i,[{key:"read",value:function(e,r){(0,S.i)(this,e,r)}},{key:"getAtOrigin",value:function(e,r){var i=L(this),t=(0,d.M9)(r);if("string"==typeof e)return i.get(e,t);var n={};return e.forEach((function(e){n[e]=i.get(e,t)})),n}},{key:"originOf",value:function(e){return(0,d.x3)(this.originIdOf(e))}},{key:"originIdOf",value:function(e){return L(this).originOf(e)}},{key:"revert",value:function(e,r){var i=L(this),t=(0,d.M9)(r),n=(0,h.vw)(this);("string"==typeof e?"*"===e?i.keys(t):[e]:e).forEach((function(e){n.invalidate(e),i.revert(e,t),n.commit(e)}))}}]),i}(e);return r=(0,l._)([(0,w.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],r),r};function L(e){return(0,h.vw)(e).store}var b=function(e){(0,o.Z)(i,e);var r=(0,s.Z)(i);function i(){return(0,n.Z)(this,i),r.apply(this,arguments)}return(0,a.Z)(i)}(m(u.Z));b=(0,l._)([(0,w.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],b);var O=i(18987);function I(e){return(0,h.vw)(e).store}var Z=function(e){var r=function(e){(0,o.Z)(i,e);var r=(0,s.Z)(i);function i(){(0,n.Z)(this,i);for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.call.apply(r,[this].concat(t))}return(0,a.Z)(i)}(function(e){var r=function(e){(0,o.Z)(i,e);var r=(0,s.Z)(i);function i(){(0,n.Z)(this,i);for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r.call.apply(r,[this].concat(t))}return(0,a.Z)(i,[{key:"clear",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"user";return I(this).delete(e,(0,d.M9)(r))}},{key:"write",value:function(e,r){return(0,O.c)(this,e=e||{},r),e}},{key:"setAtOrigin",value:function(e,r,i){(0,h.vw)(this).setAtOrigin(e,r,(0,d.M9)(i))}},{key:"removeOrigin",value:function(e){var r,i=I(this),n=(0,d.M9)(e),a=i.keys(n),o=(0,t.Z)(a);try{for(o.s();!(r=o.n()).done;){var s=r.value;i.originOf(s)===n&&i.set(s,i.get(s,n),d.s3.USER)}}catch(l){o.e(l)}finally{o.f()}}},{key:"updateOrigin",value:function(e,r){for(var i=I(this),t=(0,d.M9)(r),n=this.get(e),a=t+1;a<d.kk;++a)i.delete(e,a);i.set(e,n,t)}},{key:"toJSON",value:function(e){return this.write({},e)}}]),i}(e);return(r=(0,l._)([(0,w.j)("esri.core.WriteableMultiOriginJSONSupport")],r)).prototype.toJSON.isDefaultToJSON=!0,r}(m(e)));return r=(0,l._)([(0,w.j)("esri.core.MultiOriginJSONSupport")],r)},M=function(e){(0,o.Z)(i,e);var r=(0,s.Z)(i);function i(){return(0,n.Z)(this,i),r.apply(this,arguments)}return(0,a.Z)(i)}(Z(u.Z));M=(0,l._)([(0,w.j)("esri.core.MultiOriginJSONSupport")],M)},6061:function(e,r,i){i.d(r,{q:function(){return O}});var t=i(1413),n=i(15671),a=i(43144),o=i(11752),s=i(61120),l=i(60136),u=i(29388),c=i(27366),y=i(10064),p=i(35995),v=i(49861),f=(i(25243),i(63780),i(93169),i(69912)),d=i(31201),g=i(92562),S=i(18987),h={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},w={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},m={ArcGISFeatureLayer:!0},L={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!0,LineOfSightLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":h,"web-map/basemap":w,"web-map/tables":m,"link-chart/operational-layers":(0,t.Z)((0,t.Z)({},h),{},{LinkChartLayer:!0}),"link-chart/basemap":w,"link-chart/tables":m,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0,OrientedImageryLayer:!0}},b=i(45948),O=function(e){var r=function(e){(0,l.Z)(i,e);var r=(0,u.Z)(i);function i(){var e;return(0,n.Z)(this,i),(e=r.apply(this,arguments)).title=null,e}return(0,a.Z)(i,[{key:"writeListMode",value:function(e,r,i,t){(t&&"ground"===t.layerContainerType||e&&(0,S.d)(this,i,{},t))&&(r[i]=e)}},{key:"writeOperationalLayerType",value:function(e,r,i,t){!e||t&&"tables"===t.layerContainerType||(r.layerType=e)}},{key:"writeTitle",value:function(e,r){r.title=null!==e&&void 0!==e?e:"Layer"}},{key:"read",value:function(e,r){var t=this;r&&(r.layer=this),(0,g.$)(this,e,(function(r){return(0,o.Z)((0,s.Z)(i.prototype),"read",t).call(t,e,r)}),r)}},{key:"write",value:function(e,r){var n;if(null!==r&&void 0!==r&&r.origin){var a,l="".concat(r.origin,"/").concat(r.layerContainerType||"operational-layers"),u=L[l],c=!(null===u||void 0===u||!u[this.operationalLayerType]);if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===l&&(c=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===l&&(c=!1),!c)return null!==(a=r.messages)&&void 0!==a&&a.push(new y.Z("layer:unsupported","Layers (".concat(this.title,", ").concat(this.id,") of type '").concat(this.declaredClass,"' are not supported in the context of '").concat(l,"'"),{layer:this})),null}var v=(0,o.Z)((0,s.Z)(i.prototype),"write",this).call(this,e,(0,t.Z)((0,t.Z)({},r),{},{layer:this})),f=!!r&&!!r.messages&&!!r.messages.filter((function(e){return e instanceof y.Z&&"web-document-write:property-required"===e.name})).length;return(0,p.jc)(null===v||void 0===v?void 0:v.url)?(null!==r&&void 0!==r&&null!==(n=r.messages)&&void 0!==n&&n.push(new y.Z("layer:invalid-url","Layer (".concat(this.title,", ").concat(this.id,") of type '").concat(this.declaredClass,"' using a Blob URL cannot be written to web scenes and web maps"),{layer:this})),null):!this.url&&f?null:v}},{key:"beforeSave",value:function(){}}]),i}(e);return(0,c._)([(0,v.Cb)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],r.prototype,"id",void 0),(0,c._)([(0,v.Cb)(b.rT)],r.prototype,"listMode",void 0),(0,c._)([(0,d.c)("listMode")],r.prototype,"writeListMode",null),(0,c._)([(0,v.Cb)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],r.prototype,"operationalLayerType",void 0),(0,c._)([(0,d.c)("operationalLayerType")],r.prototype,"writeOperationalLayerType",null),(0,c._)([(0,v.Cb)(b.Oh)],r.prototype,"opacity",void 0),(0,c._)([(0,v.Cb)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],r.prototype,"title",void 0),(0,c._)([(0,d.c)("title"),(0,d.c)(["web-scene"],"title")],r.prototype,"writeTitle",null),(0,c._)([(0,v.Cb)({type:Boolean,json:{name:"visibility"}})],r.prototype,"visible",void 0),r=(0,c._)([(0,f.j)("esri.layers.mixins.OperationalLayer")],r)}},45948:function(e,r,i){i.d(r,{qG:function(){return L},PV:function(){return g},id:function(){return O},iR:function(){return v},rn:function(){return d},rT:function(){return M},u1:function(){return Z},rO:function(){return I},Oh:function(){return w},bT:function(){return m},C_:function(){return p},Lx:function(){return S},vg:function(){return b},YI:function(){return y},HQ:function(){return f}});var t=i(1413),n=i(62044),a=i(53866),o=i(78952),s=i(53283),l=(i(63780),i(66978),i(86710));var u=i(64575),c=i(81219),y={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},p={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:function(e,r){return!r.disablePopup}},write:{enabled:!0,writer:function(e,r,i){r[i]=!e}}}},v={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:!0}},f={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:s.w}}},d={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},g={value:null,type:u.Z,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function S(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}var h={write:!0,read:!0},w={type:Number,json:{origins:{"web-document":h,"portal-item":{write:!0}}}},m=(0,t.Z)((0,t.Z)({},w),{},{json:(0,t.Z)((0,t.Z)({},w.json),{},{origins:{"web-document":(0,t.Z)((0,t.Z)({},h),{},{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(e,r,i){return i&&"service"!==i.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?(0,c.b)(r.layerDefinition.drawingInfo.transparency):void 0:(0,c.b)(r.drawingInfo.transparency)}}})}),L={type:n.Z,readOnly:!0,get:function(){var e,r;if(null===(e=this.layer)||void 0===e||!e.timeInfo)return null;var i=this.layer,t=i.datesInUnknownTimezone,a=i.timeOffset,o=i.useViewTime,s=null===(r=this.view)||void 0===r?void 0:r.timeExtent,u=this.layer.timeExtent;t&&(u=function(e){if(!e)return e;var r=e.start,i=e.end;return new n.Z({start:null!=r?(0,l.Nm)(r,r.getTimezoneOffset(),"minutes"):r,end:null!=i?(0,l.Nm)(i,i.getTimezoneOffset(),"minutes"):i})}(u));var c=o?s&&u?s.intersection(u):s||u:u;if(!c||c.isEmpty||c.isAllTime)return c;a&&(c=c.offset(-a.value,a.unit)),t&&(c=function(e){if(!e)return e;var r=e.start,i=e.end;return new n.Z({start:null!=r?(0,l.Nm)(r,-r.getTimezoneOffset(),"minutes"):r,end:null!=i?(0,l.Nm)(i,-i.getTimezoneOffset(),"minutes"):i})}(c));var y=this._get("timeExtent");return c.equals(y)?y:c}},b={type:a.Z,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:function(e,r){var i=a.Z.fromJSON(e);return null!=r.spatialReference&&"object"==typeof r.spatialReference&&(i.spatialReference=o.Z.fromJSON(r.spatialReference)),i}}}},read:!1}},O={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},I={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},Z={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}},M={json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}}}}]);
//# sourceMappingURL=7505.e1f7a3f2.chunk.js.map