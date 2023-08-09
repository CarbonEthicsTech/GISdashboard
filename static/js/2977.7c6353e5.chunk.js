"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[2977],{42977:function(e,r,t){t.r(r),t.d(r,{default:function(){return q}});var n,a=t(74165),i=t(15861),l=t(1413),o=t(15671),s=t(43144),u=t(60136),c=t(29388),p=t(27366),v=t(76200),d=t(10064),f=t(41691),h=t(93002),y=t(97642),m=t(66978),_=t(35995),b=t(49861),g=t(89125),S=(t(63780),t(93169),t(38511)),k=t(69912),Z=t(31201),w=t(78952),T=t(30651),C=t(27961),O=t(17775),L=t(6741),x=t(11936),D=t(6693),I=t(46671),A=t(6061),M=t(29598),R=t(71684),U=t(56811),j=t(18870),B=t(25899),W=t(45948),P=t(83690),N=t(77990),G=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"],J=n=function(e){(0,u.Z)(t,e);var r=(0,c.Z)(t);function t(){var e;(0,o.Z)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=r.call.apply(r,[this].concat(a))).listMode="show",e.isReference=null,e.operationalLayerType="ArcGISTiledMapServiceLayer",e.resampling=!0,e.sourceJSON=null,e.spatialReference=null,e.path=null,e.sublayers=null,e.type="tile",e.url=null,e}return(0,s.Z)(t,[{key:"normalizeCtorArgs",value:function(e,r){return"string"==typeof e?(0,l.Z)({url:e},r):e}},{key:"load",value:function(e){var r=this,t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(m.r9).then((function(){return r._fetchService(t)}))),Promise.resolve(this)}},{key:"attributionDataUrl",get:function(){var e,r=null===(e=this.parsedUrl)||void 0===e?void 0:e.path.toLowerCase();return r?this._getDefaultAttribution(this._getMapName(r)):null}},{key:"readSpatialReference",value:function(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&w.Z.fromJSON(e)}},{key:"writeSublayers",value:function(e,r,t,n){if(this.loaded&&e){var a=e.slice().reverse().flatten((function(e){var r=e.sublayers;return r&&r.toArray().reverse()})).toArray(),i=[],o=(0,l.Z)({writeSublayerStructure:!1},n);a.forEach((function(e){var r=e.write({},o);i.push(r)})),i.some((function(e){return Object.keys(e).length>1}))&&(r.layers=i)}}},{key:"tileServers",get:function(){var e;return this._getDefaultTileServers(null===(e=this.parsedUrl)||void 0===e?void 0:e.path)}},{key:"castTileServers",value:function(e){return Array.isArray(e)?e.map((function(e){return(0,_.mN)(e).path})):null}},{key:"fetchTile",value:function(e,r,t){var n=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).signal,a=this.getTileUrl(e,r,t),i={responseType:"image",signal:n,query:(0,l.Z)({},this.refreshParameters)};return(0,v.default)(a,i).then((function(e){return e.data}))}},{key:"fetchImageBitmapTile",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r,t,i){var o,s,u,c,p,d,f,h=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=(o=h.length>3&&void 0!==h[3]?h[3]:{}).signal,this.fetchTile===n.prototype.fetchTile){e.next=7;break}return e.next=5,this.fetchTile(r,t,i,o);case 5:return u=e.sent,e.abrupt("return",(0,P.V)(u,r,t,i,s));case 7:return c=this.getTileUrl(r,t,i),p={responseType:"blob",signal:s,query:(0,l.Z)({},this.refreshParameters)},e.next=11,(0,v.default)(c,p);case 11:return d=e.sent,f=d.data,e.abrupt("return",(0,P.V)(f,r,t,i,s));case 14:case"end":return e.stop()}}),e,this)})));return function(r,t,n){return e.apply(this,arguments)}}()},{key:"getTileUrl",value:function(e,r,t){var n,a,i=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,o=(0,_.B7)((0,l.Z)((0,l.Z)((0,l.Z)({},null===(n=this.parsedUrl)||void 0===n?void 0:n.query),{},{blankTile:!i&&null},this.customParameters),{},{token:this.apiKey})),s=this.tileServers;return"".concat(s&&s.length?s[r%s.length]:null===(a=this.parsedUrl)||void 0===a?void 0:a.path,"/tile/").concat(e,"/").concat(r,"/").concat(t).concat(o?"?"+o:"")}},{key:"loadAll",value:function(){var e=this;return(0,h.G)(this,(function(r){r(e.allSublayers)}))}},{key:"_fetchService",value:function(e){var r=this;return new Promise((function(t,n){if(r.sourceJSON){if(null!=r.sourceJSON.bandCount&&null!=r.sourceJSON.pixelSizeX)throw new d.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");t({data:r.sourceJSON})}else{if(!r.parsedUrl)throw new d.Z("tile-layer:undefined-url","layer's url is not defined");var a=(0,B.Qc)(r.parsedUrl.path);if(null!=a&&"ImageServer"===a.serverType)throw new d.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,v.default)(r.parsedUrl.path,{query:(0,l.Z)((0,l.Z)((0,l.Z)({f:"json"},r.parsedUrl.query),r.customParameters),{},{token:r.apiKey}),responseType:"json",signal:e}).then(t,n)}})).then((function(t){var n=r.url;if(t.ssl&&(n=r.url=n.replace(/^http:/i,"https:")),r.sourceJSON=t.data,r.read(t.data,{origin:"service",url:r.parsedUrl}),10.1===r.version&&!(0,B.M8)(n))return r._fetchServerVersion(n,e).then((function(e){r.read({currentVersion:e})})).catch((function(){}))}))}},{key:"_fetchServerVersion",value:function(e,r){if(!(0,B.B5)(e))return Promise.reject();var t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,v.default)(t,{query:(0,l.Z)((0,l.Z)({f:"json"},this.customParameters),{},{token:this.apiKey}),responseType:"json",signal:r}).then((function(e){if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new d.Z("tile-layer:version-not-available")}))}},{key:"_getMapName",value:function(e){var r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r?r[2]:void 0}},{key:"_getDefaultAttribution",value:function(e){if(null==e)return null;var r;e=e.toLowerCase();for(var t=0,n=G.length;t<n;t++)if((r=G[t]).toLowerCase().includes(e))return(0,_.hF)("//static.arcgis.com/attribution/"+r);return null}},{key:"_getDefaultTileServers",value:function(e){if(null==e)return[];var r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}},{key:"hasOverriddenFetchTile",get:function(){return!this.fetchTile[V]}}]),t}((0,D.h)((0,U.M)((0,j.x)((0,O.Z)((0,L.O)((0,A.q)((0,M.I)((0,x.Y)((0,y.R)((0,f.p)((0,R.Q)((0,C.V)((0,I.N)(T.Z))))))))))))));(0,p._)([(0,b.Cb)({readOnly:!0})],J.prototype,"attributionDataUrl",null),(0,p._)([(0,b.Cb)({type:["show","hide","hide-children"]})],J.prototype,"listMode",void 0),(0,p._)([(0,b.Cb)({json:{read:!0,write:!0}})],J.prototype,"blendMode",void 0),(0,p._)([(0,b.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],J.prototype,"isReference",void 0),(0,p._)([(0,b.Cb)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],J.prototype,"operationalLayerType",void 0),(0,p._)([(0,b.Cb)({type:Boolean})],J.prototype,"resampling",void 0),(0,p._)([(0,b.Cb)()],J.prototype,"sourceJSON",void 0),(0,p._)([(0,b.Cb)({type:w.Z})],J.prototype,"spatialReference",void 0),(0,p._)([(0,S.r)("spatialReference",["spatialReference","tileInfo"])],J.prototype,"readSpatialReference",null),(0,p._)([(0,b.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],J.prototype,"path",void 0),(0,p._)([(0,b.Cb)({readOnly:!0})],J.prototype,"sublayers",void 0),(0,p._)([(0,Z.c)("sublayers",{layers:{type:[N.Z]}})],J.prototype,"writeSublayers",null),(0,p._)([(0,b.Cb)({json:{read:!1,write:!1}})],J.prototype,"popupEnabled",void 0),(0,p._)([(0,b.Cb)()],J.prototype,"tileServers",null),(0,p._)([(0,g.p)("tileServers")],J.prototype,"castTileServers",null),(0,p._)([(0,b.Cb)({readOnly:!0,json:{read:!1}})],J.prototype,"type",void 0),(0,p._)([(0,b.Cb)(W.HQ)],J.prototype,"url",void 0),J=n=(0,p._)([(0,k.j)("esri.layers.TileLayer")],J);var V=Symbol("default-fetch-tile");J.prototype.fetchTile[V]=!0;var q=J},17775:function(e,r,t){t.d(r,{Z:function(){return y}});var n=t(37762),a=t(15671),i=t(43144),l=t(60136),o=t(29388),s=t(27366),u=(t(59486),t(49861)),c=(t(25243),t(63780),t(93169),t(38511)),p=t(69912),v=t(22824),d=t(53184),f=t(34810),h=t(78952),y=function(e){var r=function(e){(0,l.Z)(t,e);var r=(0,o.Z)(t);function t(){var e;return(0,a.Z)(this,t),(e=r.apply(this,arguments)).copyright=null,e.minScale=0,e.maxScale=0,e.spatialReference=null,e.tileInfo=null,e.tilemapCache=null,e}return(0,i.Z)(t,[{key:"destroy",value:function(){var e,r;null===(e=this.tilemapCache)||void 0===e||null===(r=e.destroy)||void 0===r||r.call(e)}},{key:"readMinScale",value:function(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}},{key:"readMaxScale",value:function(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}},{key:"supportsBlankTile",get:function(){return this.version>=10.2}},{key:"readTilemapCache",value:function(e,r,t){var a,i=null===(a=r.capabilities)||void 0===a?void 0:a.includes("Tilemap"),l=r.minLOD,o=r.maxLOD,s=r.minScale,u=r.maxScale;if(null==l&&null==o&&0!==s&&0!==u){var c=function(e){return Math.round(1e4*e)/1e4};s=c(s||r.tileInfo.lods[0].scale),u=c(u||r.tileInfo.lods[r.tileInfo.lods.length-1].scale);var p,h=(0,n.Z)(r.tileInfo.lods);try{for(h.s();!(p=h.n()).done;){var y=p.value,m=c(y.scale);l=m>=s?y.level:l,o=m>=u?y.level:o}}catch(b){h.e(b)}finally{h.f()}}if(i)return new f.y({layer:this,minLOD:l,maxLOD:o});if(r.tileInfo){var _=new v.Z;return _.read(r.tileInfo,t),new d.Z(_,l,o)}return null}}]),t}(e);return(0,s._)([(0,u.Cb)({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),(0,s._)([(0,u.Cb)()],r.prototype,"minScale",void 0),(0,s._)([(0,c.r)("service","minScale")],r.prototype,"readMinScale",null),(0,s._)([(0,u.Cb)()],r.prototype,"maxScale",void 0),(0,s._)([(0,c.r)("service","maxScale")],r.prototype,"readMaxScale",null),(0,s._)([(0,u.Cb)({type:h.Z})],r.prototype,"spatialReference",void 0),(0,s._)([(0,u.Cb)({readOnly:!0})],r.prototype,"supportsBlankTile",null),(0,s._)([(0,u.Cb)({type:v.Z})],r.prototype,"tileInfo",void 0),(0,s._)([(0,u.Cb)()],r.prototype,"tilemapCache",void 0),(0,s._)([(0,c.r)("service","tilemapCache",["capabilities","tileInfo"])],r.prototype,"readTilemapCache",null),(0,s._)([(0,u.Cb)()],r.prototype,"version",void 0),r=(0,s._)([(0,p.j)("esri.layers.mixins.ArcGISCachedService")],r)}},53184:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(74165),a=t(15861),i=t(15671),l=t(43144),o=t(10064),s=t(66978),u=function(){function e(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.lods[r.lods.length-1].level;(0,i.Z)(this,e),this.tileInfo=r,this.minLOD=t,this.maxLOD=n,r.lodAt(t)||(this.minLOD=r.lods[0].level),r.lodAt(n)||(this.maxLOD=r.lods[r.lods.length-1].level)}return(0,l.Z)(e,[{key:"effectiveMinLOD",get:function(){var e;return null!==(e=this.minLOD)&&void 0!==e?e:this.tileInfo.lods[0].level}},{key:"effectiveMaxLOD",get:function(){var e;return null!==(e=this.maxLOD)&&void 0!==e?e:this.tileInfo.lods[this.tileInfo.lods.length-1].level}},{key:"getAvailability",value:function(e,r,t){var n,a=null===(n=this.tileInfo)||void 0===n?void 0:n.lodAt(e);return!a||e<this.minLOD||e>this.maxLOD?"unavailable":a.cols&&a.rows?t>=a.cols[0]&&t<=a.cols[1]&&r>=a.rows[0]&&r<=a.rows[1]?"unknown":"unavailable":"unknown"}},{key:"fetchAvailability",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t,a,i){var l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Yn)(i);case 2:if("unavailable"!==(l=this.getAvailability(r,t,a))){e.next=5;break}throw new o.Z("tile-map:tile-unavailable","Tile is not available",{level:r,row:t,col:a});case 5:return e.abrupt("return",l);case 6:case"end":return e.stop()}}),e,this)})));return function(r,t,n,a){return e.apply(this,arguments)}}()},{key:"fetchAvailabilityUpsample",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t,a,i,l){var o,u=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Yn)(l);case 2:return i.level=r,i.row=t,i.col=a,o=this.tileInfo,e.abrupt("return",(o.updateTileInfo(i),this.fetchAvailability(r,t,a,l).catch((function(e){if((0,s.D_)(e))throw e;if(o.upsampleTile(i))return u.fetchAvailabilityUpsample(i.level,i.row,i.col,i,l);throw e}))));case 7:case"end":return e.stop()}}),e,this)})));return function(r,t,n,a,i){return e.apply(this,arguments)}}()}]),e}()}}]);
//# sourceMappingURL=2977.7c6353e5.chunk.js.map