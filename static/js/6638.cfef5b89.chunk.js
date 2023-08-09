"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[6638],{64020:function(e,t,r){r.d(t,{n:function(){return N}});var i,o,n=r(15671),a=r(43144),s=r(60136),l=r(29388),u=r(27366),p=r(43404),c=r(46784),y=r(49861),d=r(89125),v=r(27135),m=r(38511),b=r(69912),h=r(25243),f=r(47492),w=r(83040),S=r(23505),_=(r(59486),r(63780),r(93169),r(78952)),g=r(27823),C=i=function(e){(0,s.Z)(r,e);var t=(0,l.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).type="query-table",i}return(0,a.Z)(r,[{key:"clone",value:function(){var e,t=this.workspaceId,r=this.query,o=this.oidFields,n=this.spatialReference,a=this.geometryType,s={workspaceId:t,query:r,oidFields:o,spatialReference:null!==(e=null===n||void 0===n?void 0:n.clone())&&void 0!==e?e:void 0,geometryType:a};return new i(s)}}]),r}(c.wq);(0,u._)([(0,v.J)({queryTable:"query-table"})],C.prototype,"type",void 0),(0,u._)([(0,y.Cb)({type:String,json:{write:!0}})],C.prototype,"workspaceId",void 0),(0,u._)([(0,y.Cb)({type:String,json:{write:!0}})],C.prototype,"query",void 0),(0,u._)([(0,y.Cb)({type:String,json:{write:!0}})],C.prototype,"oidFields",void 0),(0,u._)([(0,y.Cb)({type:_.Z,json:{write:!0}})],C.prototype,"spatialReference",void 0),(0,u._)([(0,v.J)(g.M)],C.prototype,"geometryType",void 0),C=i=(0,u._)([(0,b.j)("esri.layers.support.source.QueryTableDataSource")],C);var j,T=o=function(e){(0,s.Z)(r,e);var t=(0,l.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).type="raster",i}return(0,a.Z)(r,[{key:"clone",value:function(){var e=this.workspaceId,t=this.dataSourceName;return new o({workspaceId:e,dataSourceName:t})}}]),r}(c.wq);(0,u._)([(0,v.J)({raster:"raster"})],T.prototype,"type",void 0),(0,u._)([(0,y.Cb)({type:String,json:{write:!0}})],T.prototype,"dataSourceName",void 0),(0,u._)([(0,y.Cb)({type:String,json:{write:!0}})],T.prototype,"workspaceId",void 0),T=o=(0,u._)([(0,b.j)("esri.layers.support.source.RasterDataSource")],T);var R,x,Z=j=function(e){(0,s.Z)(r,e);var t=(0,l.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).type="table",i}return(0,a.Z)(r,[{key:"clone",value:function(){var e=this.workspaceId,t=this.gdbVersion,r=this.dataSourceName;return new j({workspaceId:e,gdbVersion:t,dataSourceName:r})}}]),r}(c.wq);(0,u._)([(0,v.J)({table:"table"})],Z.prototype,"type",void 0),(0,u._)([(0,y.Cb)({type:String,json:{write:!0}})],Z.prototype,"workspaceId",void 0),(0,u._)([(0,y.Cb)({type:String,json:{write:!0}})],Z.prototype,"gdbVersion",void 0),(0,u._)([(0,y.Cb)({type:String,json:{write:!0}})],Z.prototype,"dataSourceName",void 0),Z=j=(0,u._)([(0,b.j)("esri.layers.support.source.TableDataSource")],Z);var F=(0,p.w)()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"}),k=R=function(e){(0,s.Z)(r,e);var t=(0,l.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).type="join-table",i}return(0,a.Z)(r,[{key:"readLeftTableSource",value:function(e,t,r){return O()(e,t,r)}},{key:"castLeftTableSource",value:function(e){return(0,h.N7)(D(),e)}},{key:"readRightTableSource",value:function(e,t,r){return O()(e,t,r)}},{key:"castRightTableSource",value:function(e){return(0,h.N7)(D(),e)}},{key:"clone",value:function(){var e,t,r=this.leftTableKey,i=this.rightTableKey,o=this.leftTableSource,n=this.rightTableSource,a=this.joinType,s={leftTableKey:r,rightTableKey:i,leftTableSource:null!==(e=null===o||void 0===o?void 0:o.clone())&&void 0!==e?e:void 0,rightTableSource:null!==(t=null===n||void 0===n?void 0:n.clone())&&void 0!==t?t:void 0,joinType:a};return new R(s)}}]),r}(c.wq);(0,u._)([(0,v.J)({joinTable:"join-table"})],k.prototype,"type",void 0),(0,u._)([(0,y.Cb)({type:String,json:{write:!0}})],k.prototype,"leftTableKey",void 0),(0,u._)([(0,y.Cb)({type:String,json:{write:!0}})],k.prototype,"rightTableKey",void 0),(0,u._)([(0,y.Cb)({json:{write:!0}})],k.prototype,"leftTableSource",void 0),(0,u._)([(0,m.r)("leftTableSource")],k.prototype,"readLeftTableSource",null),(0,u._)([(0,d.p)("leftTableSource")],k.prototype,"castLeftTableSource",null),(0,u._)([(0,y.Cb)({json:{write:!0}})],k.prototype,"rightTableSource",void 0),(0,u._)([(0,m.r)("rightTableSource")],k.prototype,"readRightTableSource",null),(0,u._)([(0,d.p)("rightTableSource")],k.prototype,"castRightTableSource",null),(0,u._)([(0,v.J)(F)],k.prototype,"joinType",void 0),k=R=(0,u._)([(0,b.j)("esri.layers.support.source.JoinTableDataSource")],k);var P=null;function O(){return P||(P=(0,f.d)({types:D()})),P}var V=null;function D(){return V||(V={key:"type",base:null,typeMap:{"data-layer":N,"map-layer":S.R}}),V}var M={key:"type",base:null,typeMap:{"join-table":k,"query-table":C,raster:T,table:Z}},N=x=function(e){(0,s.Z)(r,e);var t=(0,l.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).type="data-layer",i}return(0,a.Z)(r,[{key:"clone",value:function(){var e=this.fields,t=this.dataSource;return new x({fields:e,dataSource:t})}}]),r}(c.wq);(0,u._)([(0,v.J)({dataLayer:"data-layer"})],N.prototype,"type",void 0),(0,u._)([(0,y.Cb)({type:[w.Z],json:{write:!0}})],N.prototype,"fields",void 0),(0,u._)([(0,y.Cb)({types:M,json:{write:!0}})],N.prototype,"dataSource",void 0),(N=x=(0,u._)([(0,b.j)("esri.layers.support.source.DataLayerSource")],N)).from=(0,h.se)(N)},23505:function(e,t,r){r.d(t,{R:function(){return v}});var i,o=r(15671),n=r(43144),a=r(60136),s=r(29388),l=r(27366),u=r(46784),p=r(49861),c=r(25243),y=(r(63780),r(93169),r(27135)),d=r(69912),v=i=function(e){(0,a.Z)(r,e);var t=(0,s.Z)(r);function r(e){var i;return(0,o.Z)(this,r),(i=t.call(this,e)).type="map-layer",i}return(0,n.Z)(r,[{key:"clone",value:function(){var e=this.mapLayerId,t=this.gdbVersion;return new i({mapLayerId:e,gdbVersion:t})}}]),r}(u.wq);(0,l._)([(0,y.J)({mapLayer:"map-layer"})],v.prototype,"type",void 0),(0,l._)([(0,p.Cb)({type:c.z8,json:{write:!0}})],v.prototype,"mapLayerId",void 0),(0,l._)([(0,p.Cb)({type:String,json:{write:!0}})],v.prototype,"gdbVersion",void 0),v=i=(0,l._)([(0,d.j)("esri.layers.support.source.MapLayerSource")],v)},86638:function(e,t,r){r.d(t,{Z:function(){return O}});var i=r(15671),o=r(43144),n=r(60136),a=r(29388),s=r(27366),l=r(59486),u=r(62044),p=r(43404),c=r(46784),y=r(84652),d=r(49861),v=r(89125),m=r(27135),b=r(69912),h=r(31201),f=r(25243),w=r(77981),S=r(64020),_=r(11582),g=(r(63780),r(93169),function(e){(0,n.Z)(r,e);var t=(0,a.Z)(r);function r(e){var o;return(0,i.Z)(this,r),(o=t.call(this,e)).onFields=null,o.operator=null,o.searchTerm=null,o.searchType=null,o}return(0,o.Z)(r)}((0,_.J)(c.wq)));(0,s._)([(0,d.Cb)({type:[String],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:null!=this.onFields&&this.onFields.length>0}}}}})],g.prototype,"onFields",void 0),(0,s._)([(0,d.Cb)({type:String,json:{write:!0}})],g.prototype,"operator",void 0),(0,s._)([(0,d.Cb)({type:String,json:{write:!0}})],g.prototype,"searchTerm",void 0),(0,s._)([(0,d.Cb)({type:String,json:{write:!0}})],g.prototype,"searchType",void 0);var C,j=g=(0,s._)([(0,b.j)("esri.rest.support.FullTextSearch")],g),T=r(94618),R=r(33997),x=r(78952),Z=r(585),F=new p.X({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),k=new p.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),P=C=function(e){(0,n.Z)(r,e);var t=(0,a.Z)(r);function r(e){var o;return(0,i.Z)(this,r),(o=t.call(this,e)).aggregateIds=null,o.cacheHint=void 0,o.compactGeometryEnabled=!1,o.datumTransformation=null,o.defaultSpatialReferenceEnabled=!1,o.distance=void 0,o.dynamicDataSource=void 0,o.formatOf3DObjects=null,o.fullText=null,o.gdbVersion=null,o.geometry=null,o.geometryPrecision=void 0,o.groupByFieldsForStatistics=null,o.having=null,o.historicMoment=null,o.maxAllowableOffset=void 0,o.maxRecordCountFactor=1,o.multipatchOption=null,o.num=void 0,o.objectIds=null,o.orderByFields=null,o.outFields=null,o.outSpatialReference=null,o.outStatistics=null,o.parameterValues=null,o.pixelSize=null,o.quantizationParameters=null,o.rangeValues=null,o.relationParameter=null,o.resultType=null,o.returnCentroid=!1,o.returnDistinctValues=!1,o.returnExceededLimitFeatures=!0,o.returnGeometry=!1,o.returnQueryGeometry=!1,o.returnM=void 0,o.returnZ=void 0,o.sourceSpatialReference=null,o.spatialRelationship="intersects",o.start=void 0,o.sqlFormat=null,o.text=null,o.timeExtent=null,o.timeReferenceUnknownClient=!1,o.units=null,o.where=null,o}return(0,o.Z)(r,[{key:"castDatumTransformation",value:function(e){return"number"==typeof e||"object"==typeof e?e:null}},{key:"writeHistoricMoment",value:function(e,t){t.historicMoment=e&&e.getTime()}},{key:"writeParameterValues",value:function(e,t){if(e){var r={};for(var i in e){var o=e[i];Array.isArray(o)?r[i]=o.map((function(e){return e instanceof Date?e.getTime():e})):o instanceof Date?r[i]=o.getTime():r[i]=o}t.parameterValues=r}}},{key:"writeStart",value:function(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,t.where="1=1"}},{key:"writeWhere",value:function(e,t){t.where=e||"1=1"}},{key:"clone",value:function(){return new C((0,y.d9)({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,compactGeometryEnabled:this.compactGeometryEnabled,datumTransformation:this.datumTransformation,defaultSpatialReferenceEnabled:this.defaultSpatialReferenceEnabled,distance:this.distance,fullText:this.fullText,formatOf3DObjects:this.formatOf3DObjects,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:null!=this.historicMoment?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}}],[{key:"from",value:function(e){return(0,f.TJ)(C,e)}}]),r}(c.wq);P.MAX_MAX_RECORD_COUNT_FACTOR=5,(0,s._)([(0,d.Cb)({json:{write:!0}})],P.prototype,"aggregateIds",void 0),(0,s._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],P.prototype,"cacheHint",void 0),(0,s._)([(0,d.Cb)({type:Boolean,json:{default:!1,write:!0}})],P.prototype,"compactGeometryEnabled",void 0),(0,s._)([(0,d.Cb)({json:{write:!0}})],P.prototype,"datumTransformation",void 0),(0,s._)([(0,v.p)("datumTransformation")],P.prototype,"castDatumTransformation",null),(0,s._)([(0,d.Cb)({type:Boolean,json:{default:!1,write:!0}})],P.prototype,"defaultSpatialReferenceEnabled",void 0),(0,s._)([(0,d.Cb)({type:Number,json:{write:{overridePolicy:function(e){return{enabled:e>0}}}}})],P.prototype,"distance",void 0),(0,s._)([(0,d.Cb)({type:S.n,json:{write:!0}})],P.prototype,"dynamicDataSource",void 0),(0,s._)([(0,d.Cb)({type:String,json:{write:!0}})],P.prototype,"formatOf3DObjects",void 0),(0,s._)([(0,d.Cb)({type:[j],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:null!=this.fullText&&this.fullText.length>0}}}}})],P.prototype,"fullText",void 0),(0,s._)([(0,d.Cb)({type:String,json:{write:!0}})],P.prototype,"gdbVersion",void 0),(0,s._)([(0,d.Cb)({types:l.qM,json:{read:w.im,write:!0}})],P.prototype,"geometry",void 0),(0,s._)([(0,d.Cb)({type:Number,json:{write:!0}})],P.prototype,"geometryPrecision",void 0),(0,s._)([(0,d.Cb)({type:[String],json:{write:!0}})],P.prototype,"groupByFieldsForStatistics",void 0),(0,s._)([(0,d.Cb)({type:String,json:{write:!0}})],P.prototype,"having",void 0),(0,s._)([(0,d.Cb)({type:Date})],P.prototype,"historicMoment",void 0),(0,s._)([(0,h.c)("historicMoment")],P.prototype,"writeHistoricMoment",null),(0,s._)([(0,d.Cb)({type:Number,json:{write:!0}})],P.prototype,"maxAllowableOffset",void 0),(0,s._)([(0,d.Cb)({type:Number,cast:function(e){return e<1?1:e>C.MAX_MAX_RECORD_COUNT_FACTOR?C.MAX_MAX_RECORD_COUNT_FACTOR:e},json:{write:{overridePolicy:function(e){return{enabled:e>1}}}}})],P.prototype,"maxRecordCountFactor",void 0),(0,s._)([(0,d.Cb)({type:["xyFootprint"],json:{write:!0}})],P.prototype,"multipatchOption",void 0),(0,s._)([(0,d.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],P.prototype,"num",void 0),(0,s._)([(0,d.Cb)({json:{write:!0}})],P.prototype,"objectIds",void 0),(0,s._)([(0,d.Cb)({type:[String],json:{write:!0}})],P.prototype,"orderByFields",void 0),(0,s._)([(0,d.Cb)({type:[String],json:{write:!0}})],P.prototype,"outFields",void 0),(0,s._)([(0,d.Cb)({type:x.Z,json:{name:"outSR",write:!0}})],P.prototype,"outSpatialReference",void 0),(0,s._)([(0,d.Cb)({type:[R.Z],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:null!=this.outStatistics&&this.outStatistics.length>0}}}}})],P.prototype,"outStatistics",void 0),(0,s._)([(0,d.Cb)({json:{write:!0}})],P.prototype,"parameterValues",void 0),(0,s._)([(0,h.c)("parameterValues")],P.prototype,"writeParameterValues",null),(0,s._)([(0,d.Cb)({type:Z.Z,json:{write:!0}})],P.prototype,"pixelSize",void 0),(0,s._)([(0,d.Cb)({type:T.Z,json:{write:!0}})],P.prototype,"quantizationParameters",void 0),(0,s._)([(0,d.Cb)({type:[Object],json:{write:!0}})],P.prototype,"rangeValues",void 0),(0,s._)([(0,d.Cb)({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy:function(){return{enabled:"relation"===this.spatialRelationship}}}}})],P.prototype,"relationParameter",void 0),(0,s._)([(0,d.Cb)({type:String,json:{write:!0}})],P.prototype,"resultType",void 0),(0,s._)([(0,d.Cb)({type:Boolean,json:{default:!1,write:!0}})],P.prototype,"returnCentroid",void 0),(0,s._)([(0,d.Cb)({type:Boolean,json:{default:!1,write:!0}})],P.prototype,"returnDistinctValues",void 0),(0,s._)([(0,d.Cb)({type:Boolean,json:{default:!0,write:!0}})],P.prototype,"returnExceededLimitFeatures",void 0),(0,s._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],P.prototype,"returnGeometry",void 0),(0,s._)([(0,d.Cb)({type:Boolean,json:{default:!1,write:!0}})],P.prototype,"returnQueryGeometry",void 0),(0,s._)([(0,d.Cb)({type:Boolean,json:{default:!1,write:!0}})],P.prototype,"returnM",void 0),(0,s._)([(0,d.Cb)({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],P.prototype,"returnZ",void 0),(0,s._)([(0,d.Cb)({type:x.Z,json:{write:!0}})],P.prototype,"sourceSpatialReference",void 0),(0,s._)([(0,m.J)(F,{ignoreUnknown:!1,name:"spatialRel"})],P.prototype,"spatialRelationship",void 0),(0,s._)([(0,d.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],P.prototype,"start",void 0),(0,s._)([(0,h.c)("start"),(0,h.c)("num")],P.prototype,"writeStart",null),(0,s._)([(0,d.Cb)({type:String,json:{write:!0}})],P.prototype,"sqlFormat",void 0),(0,s._)([(0,d.Cb)({type:String,json:{write:!0}})],P.prototype,"text",void 0),(0,s._)([(0,d.Cb)({type:u.Z,json:{write:!0}})],P.prototype,"timeExtent",void 0),(0,s._)([(0,d.Cb)({type:Boolean,json:{default:!1,write:!0}})],P.prototype,"timeReferenceUnknownClient",void 0),(0,s._)([(0,m.J)(k,{ignoreUnknown:!1}),(0,d.Cb)({json:{write:{overridePolicy:function(e){return{enabled:!!e&&null!=this.distance&&this.distance>0}}}}})],P.prototype,"units",void 0),(0,s._)([(0,d.Cb)({type:String,json:{write:{overridePolicy:function(e){return{enabled:null!=e||null!=this.start&&this.start>0}}}}})],P.prototype,"where",void 0),(0,s._)([(0,h.c)("where")],P.prototype,"writeWhere",null);var O=P=C=(0,s._)([(0,b.j)("esri.rest.support.Query")],P)},33997:function(e,t,r){r.d(t,{Z:function(){return h}});var i,o=r(15671),n=r(43144),a=r(60136),s=r(29388),l=r(27366),u=r(43404),p=r(46784),c=r(84652),y=r(49861),d=(r(25243),r(69912)),v=r(31201),m=new u.X({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete",EnvelopeAggregate:"envelope-aggregate",CentroidAggregate:"centroid-aggregate",ConvexHullAggregate:"convex-hull-aggregate"}),b=i=function(e){(0,a.Z)(r,e);var t=(0,s.Z)(r);function r(e){var i;return(0,o.Z)(this,r),(i=t.call(this,e)).maxPointCount=void 0,i.maxRecordCount=void 0,i.maxVertexCount=void 0,i.onStatisticField=null,i.outStatisticFieldName=null,i.statisticType=null,i.statisticParameters=null,i}return(0,n.Z)(r,[{key:"writeStatisticParameters",value:function(e,t){"percentile-continuous"!==this.statisticType&&"percentile-discrete"!==this.statisticType||(t.statisticParameters=(0,c.d9)(e))}},{key:"clone",value:function(){return new i({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:(0,c.d9)(this.statisticParameters)})}}]),r}(p.wq);(0,l._)([(0,y.Cb)({type:Number,json:{write:!0}})],b.prototype,"maxPointCount",void 0),(0,l._)([(0,y.Cb)({type:Number,json:{write:!0}})],b.prototype,"maxRecordCount",void 0),(0,l._)([(0,y.Cb)({type:Number,json:{write:!0}})],b.prototype,"maxVertexCount",void 0),(0,l._)([(0,y.Cb)({type:String,json:{write:!0}})],b.prototype,"onStatisticField",void 0),(0,l._)([(0,y.Cb)({type:String,json:{write:!0}})],b.prototype,"outStatisticFieldName",void 0),(0,l._)([(0,y.Cb)({type:String,json:{read:{source:"statisticType",reader:m.read},write:{target:"statisticType",writer:m.write}}})],b.prototype,"statisticType",void 0),(0,l._)([(0,y.Cb)({type:Object})],b.prototype,"statisticParameters",void 0),(0,l._)([(0,v.c)("statisticParameters")],b.prototype,"writeStatisticParameters",null);var h=b=i=(0,l._)([(0,d.j)("esri.rest.support.StatisticDefinition")],b)}}]);
//# sourceMappingURL=6638.cfef5b89.chunk.js.map