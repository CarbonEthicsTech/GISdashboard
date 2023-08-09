"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[9532,7945],{9532:function(e,t,r){r.r(t),r.d(t,{default:function(){return se}});var i=r(74165),n=r(37762),o=r(15861),a=r(93433),l=r(1413),s=r(15671),u=r(43144),d=r(60136),p=r(29388),c=r(27366),y=r(44055),f=r(76200),v=r(10064),h=r(84652),m=r(32718),b=r(97642),g=r(18202),w=r(66978),Z=r(35995),_=r(49861),F=r(25243),C=r(38511),T=r(69912),I=r(31201),S=r(30651),k=r(27961),x=r(11936),j=r(6061),V=r(29598),N=r(56811),q=r(54395),O=r(27135),R=r(46784),P=(r(63780),r(93169),function(e){(0,d.Z)(r,e);var t=(0,p.Z)(r);function r(e){var i;return(0,s.Z)(this,r),(i=t.call(this,e)).field=null,i.type=null,i}return(0,u.Z)(r,[{key:"clone",value:function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}}]),r}(R.wq));(0,c._)([(0,_.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],P.prototype,"field",void 0),(0,c._)([(0,_.Cb)({readOnly:!0,nonNullable:!0,json:{read:!1}})],P.prototype,"type",void 0);var B,D=P=(0,c._)([(0,T.j)("esri.layers.pointCloudFilters.PointCloudFilter")],P),L=B=function(e){(0,d.Z)(r,e);var t=(0,p.Z)(r);function r(e){var i;return(0,s.Z)(this,r),(i=t.call(this,e)).requiredClearBits=null,i.requiredSetBits=null,i.type="bitfield",i}return(0,u.Z)(r,[{key:"clone",value:function(){return new B({field:this.field,requiredClearBits:(0,h.d9)(this.requiredClearBits),requiredSetBits:(0,h.d9)(this.requiredSetBits)})}}]),r}(D);(0,c._)([(0,_.Cb)({type:[F.z8],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],L.prototype,"requiredClearBits",void 0),(0,c._)([(0,_.Cb)({type:[F.z8],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],L.prototype,"requiredSetBits",void 0),(0,c._)([(0,O.J)({pointCloudBitfieldFilter:"bitfield"})],L.prototype,"type",void 0);var M,E=L=B=(0,c._)([(0,T.j)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],L),J=M=function(e){(0,d.Z)(r,e);var t=(0,p.Z)(r);function r(e){var i;return(0,s.Z)(this,r),(i=t.call(this,e)).includedReturns=[],i.type="return",i}return(0,u.Z)(r,[{key:"clone",value:function(){return new M({field:this.field,includedReturns:(0,h.d9)(this.includedReturns)})}}]),r}(D);(0,c._)([(0,_.Cb)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],J.prototype,"includedReturns",void 0),(0,c._)([(0,O.J)({pointCloudReturnFilter:"return"})],J.prototype,"type",void 0);var A,G=J=M=(0,c._)([(0,T.j)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],J),z=A=function(e){(0,d.Z)(r,e);var t=(0,p.Z)(r);function r(e){var i;return(0,s.Z)(this,r),(i=t.call(this,e)).mode="exclude",i.type="value",i.values=[],i}return(0,u.Z)(r,[{key:"clone",value:function(){return new A({field:this.field,mode:this.mode,values:(0,h.d9)(this.values)})}}]),r}(D);(0,c._)([(0,_.Cb)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"mode",void 0),(0,c._)([(0,O.J)({pointCloudValueFilter:"value"})],z.prototype,"type",void 0),(0,c._)([(0,_.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"values",void 0);var K,X={key:"type",base:D,typeMap:{value:z=A=(0,c._)([(0,T.j)("esri.layers.pointCloudFilters.PointCloudValueFilter")],z),bitfield:E,return:G}},U=r(45948),H=r(83040),$=r(25610),Q=r(89860),Y=r(21134),W=r(2632),ee=K=function(e){(0,d.Z)(r,e);var t=(0,p.Z)(r);function r(e){var i;return(0,s.Z)(this,r),(i=t.call(this,e)).type="point-cloud-rgb",i.field=null,i}return(0,u.Z)(r,[{key:"clone",value:function(){return new K((0,l.Z)((0,l.Z)({},this.cloneProperties()),{},{field:(0,h.d9)(this.field)}))}}]),r}(W.Z);(0,c._)([(0,O.J)({pointCloudRGBRenderer:"point-cloud-rgb"})],ee.prototype,"type",void 0),(0,c._)([(0,_.Cb)({type:String,json:{write:!0}})],ee.prototype,"field",void 0);var te=ee=K=(0,c._)([(0,T.j)("esri.renderers.PointCloudRGBRenderer")],ee),re=r(89431),ie=r(87005),ne={key:"type",base:W.Z,typeMap:{"point-cloud-class-breaks":Y.Z,"point-cloud-rgb":te,"point-cloud-stretch":re.Z,"point-cloud-unique-value":ie.Z},errorContext:"renderer"},oe=r(81085),ae=(0,$.v)(),le=function(e){(0,d.Z)(r,e);var t=(0,p.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).operationalLayerType="PointCloudLayer",e.popupEnabled=!0,e.popupTemplate=null,e.opacity=1,e.filters=[],e.fields=null,e.fieldsIndex=null,e.outFields=null,e.path=null,e.legendEnabled=!0,e.renderer=null,e.type="point-cloud",e}return(0,u.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,l.Z)({url:e},t):e}},{key:"defaultPopupTemplate",get:function(){return this.attributeStorageInfo?this.createPopupTemplate():null}},{key:"getFieldDomain",value:function(e){var t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}},{key:"readServiceFields",value:function(e,t,r){return Array.isArray(e)?e.map((function(e){var t=new H.Z;return"FieldTypeInteger"===e.type&&((e=(0,h.d9)(e)).type="esriFieldTypeInteger"),t.read(e,r),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((function(e){return new H.Z({name:e.name,type:"ELEVATION"===e.name?"double":"integer"})})):null}},{key:"elevationInfo",set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()}},{key:"writeRenderer",value:function(e,t,r,i){(0,g.RB)("layerDefinition.drawingInfo.renderer",e.write({},i),t)}},{key:"load",value:function(e){var t=this,r=null!=e?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(w.r9).then((function(){return t._fetchService(r)}));return this.addResolvingPromise(i),Promise.resolve(this)}},{key:"createPopupTemplate",value:function(e){var t=(0,oe.eZ)(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}},{key:"_formatPopupTemplateReturnsField",value:function(e){var t,r=this.fieldsIndex.get("RETURNS");if(r){var i=null===(t=e.fieldInfos)||void 0===t?void 0:t.find((function(e){return e.fieldName===r.name}));if(i){var n=new Q.Z({name:"pcl-returns-decoded",title:r.alias||r.name,expression:"\n        var returnValue = $feature.".concat(r.name,';\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      ')});e.expressionInfos=[].concat((0,a.Z)(e.expressionInfos||[]),[n]),i.fieldName="expression/pcl-returns-decoded"}}}},{key:"_formatPopupTemplateRGBField",value:function(e){var t,r=this.fieldsIndex.get("RGB");if(r){var i=null===(t=e.fieldInfos)||void 0===t?void 0:t.find((function(e){return e.fieldName===r.name}));if(i){var n=new Q.Z({name:"pcl-rgb-decoded",title:r.alias||r.name,expression:"\n        var rgb = $feature.".concat(r.name,';\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      ')});e.expressionInfos=[].concat((0,a.Z)(e.expressionInfos||[]),[n]),i.fieldName="expression/pcl-rgb-decoded"}}}},{key:"queryCachedStatistics",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var o,a,l,s,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load(r);case 2:if(this.attributeStorageInfo){e.next=4;break}throw new v.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");case 4:if(o=this.fieldsIndex.get(t)){e.next=7;break}throw new v.Z("pointcloudlayer:field-unexisting","Field '".concat(t,"' does not exist on the layer"));case 7:a=(0,n.Z)(this.attributeStorageInfo),e.prev=8,a.s();case 10:if((l=a.n()).done){e.next=17;break}if((s=l.value).name!==o.name){e.next=15;break}return u=(0,Z.v_)(this.parsedUrl.path,"./statistics/".concat(s.key)),e.abrupt("return",(0,f.default)(u,{query:{f:"json",token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((function(e){return e.data})));case 15:e.next=10;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(8),a.e(e.t0);case 22:return e.prev=22,a.f(),e.finish(22);case 25:throw new v.Z("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available");case 26:case"end":return e.stop()}}),e,this,[[8,19,22,25]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"saveAs",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(q.xp.SAVE_AS,(0,l.Z)((0,l.Z)({},r),{},{getTypeKeywords:function(){return n._getTypeKeywords()},portalItemLayerType:"point-cloud"}),t));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var t,r=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={getTypeKeywords:function(){return r._getTypeKeywords()},portalItemLayerType:"point-cloud"},e.abrupt("return",this._debouncedSaveOperations(q.xp.SAVE,t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"validateLayer",value:function(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new v.Z("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new v.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new v.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}},{key:"hasCachedStatistics",value:function(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((function(t){return t.name===e}))}},{key:"_getTypeKeywords",value:function(){return["PointCloud"]}},{key:"_validateElevationInfo",value:function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&m.Z.getLogger(this).warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&m.Z.getLogger(this).warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}}]),r}((0,q.Vt)((0,x.Y)((0,j.q)((0,V.I)((0,N.M)((0,b.R)((0,k.V)(S.Z))))))));(0,c._)([(0,_.Cb)({type:["PointCloudLayer"]})],le.prototype,"operationalLayerType",void 0),(0,c._)([(0,_.Cb)(U.C_)],le.prototype,"popupEnabled",void 0),(0,c._)([(0,_.Cb)({type:y.Z,json:{name:"popupInfo",write:!0}})],le.prototype,"popupTemplate",void 0),(0,c._)([(0,_.Cb)({readOnly:!0,json:{read:!1}})],le.prototype,"defaultPopupTemplate",null),(0,c._)([(0,_.Cb)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],le.prototype,"opacity",void 0),(0,c._)([(0,_.Cb)({type:["show","hide"]})],le.prototype,"listMode",void 0),(0,c._)([(0,_.Cb)({types:[X],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],le.prototype,"filters",void 0),(0,c._)([(0,_.Cb)({type:[H.Z]})],le.prototype,"fields",void 0),(0,c._)([(0,_.Cb)(ae.fieldsIndex)],le.prototype,"fieldsIndex",void 0),(0,c._)([(0,C.r)("service","fields",["fields","attributeStorageInfo"])],le.prototype,"readServiceFields",null),(0,c._)([(0,_.Cb)(ae.outFields)],le.prototype,"outFields",void 0),(0,c._)([(0,_.Cb)({readOnly:!0})],le.prototype,"attributeStorageInfo",void 0),(0,c._)([(0,_.Cb)(U.PV)],le.prototype,"elevationInfo",null),(0,c._)([(0,_.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],le.prototype,"path",void 0),(0,c._)([(0,_.Cb)(U.rn)],le.prototype,"legendEnabled",void 0),(0,c._)([(0,_.Cb)({types:ne,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:ne},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],le.prototype,"renderer",void 0),(0,c._)([(0,I.c)("renderer")],le.prototype,"writeRenderer",null),(0,c._)([(0,_.Cb)({json:{read:!1},readOnly:!0})],le.prototype,"type",void 0);var se=le=(0,c._)([(0,T.j)("esri.layers.PointCloudLayer")],le)},83040:function(e,t,r){r.d(t,{Z:function(){return w}});var i,n=r(15671),o=r(43144),a=r(60136),l=r(29388),s=r(27366),u=r(43404),d=r(46784),p=r(49861),c=r(25243),y=(r(63780),r(93169),r(27135)),f=r(38511),v=r(69912),h=r(66591),m=r(85249),b=new u.X({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"}),g=i=function(e){(0,a.Z)(r,e);var t=(0,l.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).alias=null,i.defaultValue=void 0,i.description=null,i.domain=null,i.editable=!0,i.length=-1,i.name=null,i.nullable=!0,i.type=null,i.valueType=null,i.visible=!0,i}return(0,o.Z)(r,[{key:"readDescription",value:function(e,t){var r,i,n=t.description,o=null;try{o=n?JSON.parse(n):null}catch(a){}return null!==(r=null===(i=o)||void 0===i?void 0:i.value)&&void 0!==r?r:null}},{key:"readValueType",value:function(e,t){var r=t.description,i=null;try{i=r?JSON.parse(r):null}catch(n){}return i?b.fromJSON(i.fieldValueType):null}},{key:"clone",value:function(){return new i({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}}]),r}(d.wq);(0,s._)([(0,p.Cb)({type:String,json:{write:!0}})],g.prototype,"alias",void 0),(0,s._)([(0,p.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],g.prototype,"defaultValue",void 0),(0,s._)([(0,p.Cb)()],g.prototype,"description",void 0),(0,s._)([(0,f.r)("description")],g.prototype,"readDescription",null),(0,s._)([(0,p.Cb)({types:h.V5,json:{read:{reader:h.im},write:!0}})],g.prototype,"domain",void 0),(0,s._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],g.prototype,"editable",void 0),(0,s._)([(0,p.Cb)({type:c.z8,json:{write:!0}})],g.prototype,"length",void 0),(0,s._)([(0,p.Cb)({type:String,json:{write:!0}})],g.prototype,"name",void 0),(0,s._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],g.prototype,"nullable",void 0),(0,s._)([(0,y.J)(m.v)],g.prototype,"type",void 0),(0,s._)([(0,p.Cb)()],g.prototype,"valueType",void 0),(0,s._)([(0,f.r)("valueType",["description"])],g.prototype,"readValueType",null),(0,s._)([(0,p.Cb)({type:Boolean,json:{read:!1}})],g.prototype,"visible",void 0);var w=g=i=(0,s._)([(0,v.j)("esri.layers.support.Field")],g)},52410:function(e,t,r){r.d(t,{Z:function(){return d}});var i=r(37762),n=r(15671),o=r(43144),a=r(37270);function l(e){return"date"===e.type||"esriFieldTypeDate"===e.type||"date-only"===e.type||"esriFieldTypeDateOnly"===e.type||"timestamp-offset"===e.type||"esriFieldTypeTimestampOffset"===e.type}function s(e){return"oid"===e.type||"esriFieldTypeOID"===e.type}function u(e){return"global-id"===e.type||"esriFieldTypeGlobalID"===e.type}var d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if((0,n.Z)(this,e),this.fields=[],this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this.dateFields=[],this.numericFields=[],this._requiredFields=null,t){this.fields=t;var r,o=[],d=(0,i.Z)(t);try{for(d.s();!(r=d.n()).done;){var y=r.value,f=null===y||void 0===y?void 0:y.name,v=c(null===y||void 0===y?void 0:y.name);if(f&&v){var h=p(f);this._fieldsMap.set(f,y),this._fieldsMap.set(h,y),this._normalizedFieldsMap.set(v,y),o.push(h),l(y)?(this.dateFields.push(y),this._dateFieldsSet.add(y)):(0,a.H7)(y)&&(this._numericFieldsSet.add(y),this.numericFields.push(y)),s(y)||u(y)||(y.editable=null==y.editable||!!y.editable,y.nullable=null==y.nullable||!!y.nullable)}}}catch(m){d.e(m)}finally{d.f()}o.sort(),this.uid=o.join(",")}}return(0,o.Z)(e,[{key:"destroy",value:function(){this._fieldsMap.clear()}},{key:"requiredFields",get:function(){if(!this._requiredFields){this._requiredFields=[];var e,t=(0,i.Z)(this.fields);try{for(t.s();!(e=t.n()).done;){var r=e.value;s(r)||u(r)||r.nullable||void 0!==(0,a.os)(r)||this._requiredFields.push(r)}}catch(n){t.e(n)}finally{t.f()}}return this._requiredFields}},{key:"has",value:function(e){return null!=this.get(e)}},{key:"get",value:function(e){var t;if(e){var r=this._fieldsMap.get(e);return r||((r=null!==(t=this._fieldsMap.get(p(e)))&&void 0!==t?t:this._normalizedFieldsMap.get(c(e)))&&this._fieldsMap.set(e,r),r)}}},{key:"isDateField",value:function(e){return this._dateFieldsSet.has(this.get(e))}},{key:"isNumericField",value:function(e){return this._numericFieldsSet.has(this.get(e))}},{key:"normalizeFieldName",value:function(e){var t,r=this.get(e);if(r)return null!==(t=r.name)&&void 0!==t?t:void 0}}]),e}();function p(e){return e.trim().toLowerCase()}function c(e){var t,r;return null!==(t=null===(r=(0,a.q6)(e))||void 0===r?void 0:r.toLowerCase())&&void 0!==t?t:""}},66591:function(e,t,r){r.d(t,{im:function(){return k},V5:function(){return S}});r(93169);var i,n=r(15671),o=r(43144),a=r(60136),l=r(29388),s=r(27366),u=r(84652),d=r(49861),p=(r(25243),r(27135)),c=r(69912),y=r(46784),f=(r(63780),i=function(e){(0,a.Z)(r,e);var t=(0,l.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).name=null,i.code=null,i}return(0,o.Z)(r,[{key:"clone",value:function(){return new i({name:this.name,code:this.code})}}]),r}(y.wq));(0,s._)([(0,d.Cb)({type:String,json:{write:!0}})],f.prototype,"name",void 0),(0,s._)([(0,d.Cb)({type:[String,Number],json:{write:!0}})],f.prototype,"code",void 0),f=i=(0,s._)([(0,c.j)("esri.layers.support.CodedValue")],f);var v=new(r(43404).X)({inherited:"inherited",codedValue:"coded-value",range:"range"}),h=function(e){(0,a.Z)(r,e);var t=(0,l.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).name=null,i.type=null,i}return(0,o.Z)(r)}(y.wq);(0,s._)([(0,d.Cb)({type:String,json:{write:!0}})],h.prototype,"name",void 0),(0,s._)([(0,p.J)(v)],h.prototype,"type",void 0);var m,b=h=(0,s._)([(0,c.j)("esri.layers.support.Domain")],h),g=m=function(e){(0,a.Z)(r,e);var t=(0,l.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).codedValues=null,i.type="coded-value",i}return(0,o.Z)(r,[{key:"getName",value:function(e){var t=null;if(this.codedValues){var r=String(e);this.codedValues.some((function(e){return String(e.code)===r&&(t=e.name),!!t}))}return t}},{key:"clone",value:function(){return new m({codedValues:(0,u.d9)(this.codedValues),name:this.name})}}]),r}(b);(0,s._)([(0,d.Cb)({type:[f],json:{write:!0}})],g.prototype,"codedValues",void 0),(0,s._)([(0,p.J)({codedValue:"coded-value"})],g.prototype,"type",void 0);var w,Z=g=m=(0,s._)([(0,c.j)("esri.layers.support.CodedValueDomain")],g),_=(r(32718),r(10064),w=function(e){(0,a.Z)(r,e);var t=(0,l.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).type="inherited",i}return(0,o.Z)(r,[{key:"clone",value:function(){return new w}}]),r}(b));(0,s._)([(0,p.J)({inherited:"inherited"})],_.prototype,"type",void 0);var F,C=_=w=(0,s._)([(0,c.j)("esri.layers.support.InheritedDomain")],_),T=F=function(e){(0,a.Z)(r,e);var t=(0,l.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).maxValue=null,i.minValue=null,i.type="range",i}return(0,o.Z)(r,[{key:"clone",value:function(){return new F({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}}]),r}(b);(0,s._)([(0,d.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:function(e,t){return t.range&&t.range[1]}},write:{enabled:!1,overridePolicy:function(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer:function(e,t,r){t[r]=[this.minValue||0,e]}}}})],T.prototype,"maxValue",void 0),(0,s._)([(0,d.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:function(e,t){return t.range&&t.range[0]}},write:{target:"range",writer:function(e,t,r){t[r]=[e,this.maxValue||0]}}}})],T.prototype,"minValue",void 0),(0,s._)([(0,p.J)({range:"range"})],T.prototype,"type",void 0);var I=T=F=(0,s._)([(0,c.j)("esri.layers.support.RangeDomain")],T),S={key:"type",base:b,typeMap:{range:T,"coded-value":Z,inherited:C}};function k(e){if(!e||!e.type)return null;switch(e.type){case"range":return I.fromJSON(e);case"codedValue":return Z.fromJSON(e);case"inherited":return C.fromJSON(e)}return null}},25610:function(e,t,r){r.d(t,{v:function(){return s}});var i=r(37762),n=r(32718),o=r(83040),a=r(52410),l=r(37270);function s(){return{fields:{type:[o.Z],value:null},fieldsIndex:{readOnly:!0,get:function(){return new a.Z(this.fields||[])}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){var e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;var t,r=(0,i.Z)(e);try{for(r.s();!(t=r.n()).done;){var o,a=t.value;(null===(o=this.fieldsIndex)||void 0===o?void 0:o.has(a))||n.Z.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field","Invalid field ".concat(a," found in outFields"),{layer:this,outFields:e})}}catch(s){r.e(s)}finally{r.f()}return(0,l.Q0)(this.fieldsIndex,e)}}}}},85249:function(e,t,r){r.d(t,{v:function(){return i}});var i=new(r(43404).X)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml",esriFieldTypeBigInteger:"big-integer",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"})},81085:function(e,t,r){r.d(t,{eZ:function(){return d}});var i=r(1413),n=r(44055),o=r(37270),a=r(26418),l=(r(23046),r(1374),r(39384),r(29230)),s=(r(29514),r(44051),r(98752),r(16698)),u=r(91738);function d(e,t){var r=e.displayField,i=e.editFieldsInfo,s=e.fields,u=e.objectIdField,d=e.title;if(!s)return null;var p=y({editFieldsInfo:i,fields:s,objectIdField:u},t);if(!p.length)return null;var c=function(e){var t=(0,o.O5)(e),r=e.titleBase;return t?"".concat(r,": {").concat(t.trim(),"}"):null!==r&&void 0!==r?r:""}({titleBase:d,fields:s,displayField:r}),f=[new l.Z,new a.Z];return new n.Z({title:c,content:f,fieldInfos:p})}var p=function(e,t){return t.visibleFieldNames?t.visibleFieldNames.has(e.name):(0,o.Fv)(e,t)};function c(e,t){return"oid"===e.type?-1:"oid"===t.type?1:v(e)?-1:v(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function y(e,t){var r,n=null===t||void 0===t?void 0:t.visibleFieldNames;return function(e,t){var r=e;return t&&(e=e.filter((function(e){return!t.includes(e.type)}))),e===r&&(e=e.slice()),e.sort(c),e}(null!==(r=e.fields)&&void 0!==r?r:[],(null===t||void 0===t?void 0:t.ignoreFieldTypes)||h).map((function(t){return new s.Z({fieldName:t.name,isEditable:(0,o.Hp)(t,e),label:t.alias,format:f(t),visible:p(t,(0,i.Z)((0,i.Z)({},e),{},{visibleFieldNames:n}))})}))}function f(e){switch(e.type){case"small-integer":case"integer":case"single":return new u.Z({digitSeparator:!0,places:0});case"double":return new u.Z({digitSeparator:!0,places:2});case"date":return new u.Z({dateFormat:"long-month-day-year"});default:return"string"===e.type&&(0,o.Ec)(e.name)?new u.Z({digitSeparator:!0,places:0}):null}}function v(e){return"name"===(e.name&&e.name.toLowerCase())||"name"===(e.alias&&e.alias.toLowerCase())}var h=["geometry","blob","raster","guid","xml"]}}]);
//# sourceMappingURL=9532.c1d822ea.chunk.js.map