"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[5182],{75182:function(t,e,r){r.r(e),r.d(e,{executeForTopIds:function(){return a}});var n=r(74165),i=r(1413),o=r(15861),s=r(23084),u=r(88031),l=r(54307);function a(t,e,r){return p.apply(this,arguments)}function p(){return p=(0,o.Z)((0,n.Z)().mark((function t(e,r,o){var a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=(0,s.en)(e),t.next=3,(0,u.w7)(a,l.Z.from(r),(0,i.Z)({},o));case 3:return t.abrupt("return",t.sent.data.objectIds);case 4:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}},88031:function(t,e,r){r.d(e,{IJ:function(){return y},m5:function(){return m},vB:function(){return b},w7:function(){return v}});var n=r(74165),i=r(1413),o=r(15861),s=r(76200),u=r(35995),l=r(77981),a=r(91340),p=r(22585),d=r(68620),c="Layer does not support extent calculation.";function y(t,e,r,n){return f.apply(this,arguments)}function f(){return(f=(0,o.Z)((0,n.Z)().mark((function t(e,r,i,o){var s;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(e,r,"json",o);case 2:return s=t.sent,t.abrupt("return",((0,d.p)(r,i,s.data),s));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,e,r){return h.apply(this,arguments)}function h(){return(h=(0,o.Z)((0,n.Z)().mark((function t(e,r,i){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",null!=r.timeExtent&&r.timeExtent.isEmpty?{data:{objectIds:[]}}:F(e,r,"json",i,{returnIdsOnly:!0}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,e,r){return w.apply(this,arguments)}function w(){return(w=(0,o.Z)((0,n.Z)().mark((function t(e,r,i){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",null!=r.timeExtent&&r.timeExtent.isEmpty?{data:{count:0,extent:null}}:F(e,r,"json",i,{returnExtentOnly:!0,returnCountOnly:!0}).then((function(t){var e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(c);if(e.hasOwnProperty("count"))throw new Error(c);return t})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):F(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function F(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},d="string"==typeof t?(0,u.mN)(t):t,c=e.geometry?[e.geometry]:[];return n.responseType="pbf"===r?"array-buffer":"json",(0,a.aX)(c,null,n).then((function(t){var a=t&&t[0];null!=a&&((e=e.clone()).geometry=a);var c=(0,p.A)((0,i.Z)((0,i.Z)((0,i.Z)({},d.query),{},{f:r},o),function(t,e){var r,n,i=t.geometry,o=t.toJSON(),s=o;if(null!=i&&(s.geometry=JSON.stringify(i),s.geometryType=(0,l.Ji)(i),s.inSR=i.spatialReference.wkid||JSON.stringify(i.spatialReference)),null!==(r=o.topFilter)&&void 0!==r&&r.groupByFields&&(s.topFilter.groupByFields=o.topFilter.groupByFields.join(",")),null!==(n=o.topFilter)&&void 0!==n&&n.orderByFields&&(s.topFilter.orderByFields=o.topFilter.orderByFields.join(",")),o.topFilter&&(s.topFilter=JSON.stringify(s.topFilter)),o.objectIds&&(s.objectIds=o.objectIds.join(",")),o.orderByFields&&(s.orderByFields=o.orderByFields.join(",")),o.outFields&&!(null!==e&&void 0!==e&&e.returnCountOnly||null!==e&&void 0!==e&&e.returnExtentOnly||null!==e&&void 0!==e&&e.returnIdsOnly)?o.outFields.includes("*")?s.outFields="*":s.outFields=o.outFields.join(","):delete s.outFields,o.outSR?s.outSR=o.outSR.wkid||JSON.stringify(o.outSR):i&&o.returnGeometry&&(s.outSR=s.inSR),o.returnGeometry&&delete o.returnGeometry,o.timeExtent){var u=o.timeExtent,a=u.start,p=u.end;null==a&&null==p||(s.time=a===p?a:"".concat(null!==a&&void 0!==a?a:"null",",").concat(null!==p&&void 0!==p?p:"null")),delete o.timeExtent}return s}(e,o)));return(0,s.default)((0,u.v_)(d.path,"queryTopFeatures"),(0,i.Z)((0,i.Z)({},n),{},{query:(0,i.Z)((0,i.Z)({},c),n.query)}))}))}},54307:function(t,e,r){r.d(e,{Z:function(){return Z}});var n,i=r(15671),o=r(43144),s=r(60136),u=r(29388),l=r(27366),a=r(59486),p=r(62044),d=r(43404),c=r(46784),y=r(84652),f=r(49861),v=r(25243),h=r(69912),m=r(31201),w=r(77981),b=(r(63780),r(93169),n=function(t){(0,s.Z)(r,t);var e=(0,u.Z)(r);function r(t){var n;return(0,i.Z)(this,r),(n=e.call(this,t)).groupByFields=void 0,n.topCount=void 0,n.orderByFields=void 0,n}return(0,o.Z)(r,[{key:"clone",value:function(){return new n({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}}]),r}(c.wq));(0,l._)([(0,f.Cb)({type:[String],json:{write:!0}})],b.prototype,"groupByFields",void 0),(0,l._)([(0,f.Cb)({type:Number,json:{write:!0}})],b.prototype,"topCount",void 0),(0,l._)([(0,f.Cb)({type:[String],json:{write:!0}})],b.prototype,"orderByFields",void 0);var F,j=b=n=(0,l._)([(0,h.j)("esri.rest.support.TopFilter")],b),S=r(78952),g=new d.X({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),R=new d.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),C=F=function(t){(0,s.Z)(r,t);var e=(0,u.Z)(r);function r(t){var n;return(0,i.Z)(this,r),(n=e.call(this,t)).cacheHint=void 0,n.distance=void 0,n.geometry=null,n.geometryPrecision=void 0,n.maxAllowableOffset=void 0,n.num=void 0,n.objectIds=null,n.orderByFields=null,n.outFields=null,n.outSpatialReference=null,n.resultType=null,n.returnGeometry=!1,n.returnM=void 0,n.returnZ=void 0,n.start=void 0,n.spatialRelationship="intersects",n.timeExtent=null,n.topFilter=void 0,n.units=null,n.where="1=1",n}return(0,o.Z)(r,[{key:"writeStart",value:function(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10}},{key:"clone",value:function(){return new F((0,y.d9)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}}]),r}(c.wq);(0,l._)([(0,f.Cb)({type:Boolean,json:{write:!0}})],C.prototype,"cacheHint",void 0),(0,l._)([(0,f.Cb)({type:Number,json:{write:{overridePolicy:function(t){return{enabled:t>0}}}}})],C.prototype,"distance",void 0),(0,l._)([(0,f.Cb)({types:a.qM,json:{read:w.im,write:!0}})],C.prototype,"geometry",void 0),(0,l._)([(0,f.Cb)({type:Number,json:{write:!0}})],C.prototype,"geometryPrecision",void 0),(0,l._)([(0,f.Cb)({type:Number,json:{write:!0}})],C.prototype,"maxAllowableOffset",void 0),(0,l._)([(0,f.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],C.prototype,"num",void 0),(0,l._)([(0,f.Cb)({json:{write:!0}})],C.prototype,"objectIds",void 0),(0,l._)([(0,f.Cb)({type:[String],json:{write:!0}})],C.prototype,"orderByFields",void 0),(0,l._)([(0,f.Cb)({type:[String],json:{write:!0}})],C.prototype,"outFields",void 0),(0,l._)([(0,f.Cb)({type:S.Z,json:{read:{source:"outSR"},write:{target:"outSR"}}})],C.prototype,"outSpatialReference",void 0),(0,l._)([(0,f.Cb)({type:String,json:{write:!0}})],C.prototype,"resultType",void 0),(0,l._)([(0,f.Cb)({json:{write:!0}})],C.prototype,"returnGeometry",void 0),(0,l._)([(0,f.Cb)({type:Boolean,json:{write:{overridePolicy:function(t){return{enabled:t}}}}})],C.prototype,"returnM",void 0),(0,l._)([(0,f.Cb)({type:Boolean,json:{write:{overridePolicy:function(t){return{enabled:t}}}}})],C.prototype,"returnZ",void 0),(0,l._)([(0,f.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],C.prototype,"start",void 0),(0,l._)([(0,m.c)("start"),(0,m.c)("num")],C.prototype,"writeStart",null),(0,l._)([(0,f.Cb)({type:String,json:{read:{source:"spatialRel",reader:g.read},write:{target:"spatialRel",writer:g.write}}})],C.prototype,"spatialRelationship",void 0),(0,l._)([(0,f.Cb)({type:p.Z,json:{write:!0}})],C.prototype,"timeExtent",void 0),(0,l._)([(0,f.Cb)({type:j,json:{write:!0}})],C.prototype,"topFilter",void 0),(0,l._)([(0,f.Cb)({type:String,json:{read:R.read,write:{writer:R.write,overridePolicy:function(t){return{enabled:null!=t&&null!=this.distance&&this.distance>0}}}}})],C.prototype,"units",void 0),(0,l._)([(0,f.Cb)({type:String,json:{write:!0}})],C.prototype,"where",void 0),(C=F=(0,l._)([(0,h.j)("esri.rest.support.TopFeaturesQuery")],C)).from=(0,v.se)(C);var Z=C}}]);
//# sourceMappingURL=5182.1b71096f.chunk.js.map