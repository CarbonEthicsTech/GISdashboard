"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[165],{60165:function(e,t,r){r.r(t),r.d(t,{default:function(){return P}});var n,a=r(74165),i=r(15861),o=r(15671),s=r(43144),l=r(60136),u=r(29388),c=r(27366),p=(r(59486),r(76200)),d=r(10064),h=r(43404),f=r(97642),y=r(49861),v=(r(25243),r(63780),r(93169),r(69912)),g=r(78952),b=r(1413),Z=r(53866),m=r(65156),w=r(30651),k=r(6693),M=r(71684),_=r(56811),C=r(83690),T=r(22824),x=new(r(87960).f)("0/0/0",0,0,0,void 0),I=n=function(e){(0,l.Z)(r,e);var t=(0,u.Z)(r);function r(){var e;return(0,o.Z)(this,r),(e=t.apply(this,arguments)).tileInfo=T.Z.create({spatialReference:g.Z.WebMercator,size:256}),e.type="base-tile",e.fullExtent=new Z.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,g.Z.WebMercator),e.spatialReference=g.Z.WebMercator,e}return(0,s.Z)(r,[{key:"getTileBounds",value:function(e,t,r,n){var a=n||(0,m.Ue)();return x.level=e,x.row=t,x.col=r,x.extent=a,this.tileInfo.updateTileInfo(x),x.extent=void 0,a}},{key:"fetchTile",value:function(e,t,r){var n=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).signal,a=this.getTileUrl(e,t,r),i={responseType:"image",signal:n,query:(0,b.Z)({},this.refreshParameters)};return(0,p.default)(null!==a&&void 0!==a?a:"",i).then((function(e){return e.data}))}},{key:"fetchImageBitmapTile",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t,r,i){var o,s,l,u,c,d,h,f,y=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=(s=y.length>3&&void 0!==y[3]?y[3]:{}).signal,this.fetchTile===n.prototype.fetchTile){e.next=7;break}return e.next=5,this.fetchTile(t,r,i,s);case 5:return u=e.sent,e.abrupt("return",(0,C.V)(u,t,r,i,l));case 7:return c=null!==(o=this.getTileUrl(t,r,i))&&void 0!==o?o:"",d={responseType:"blob",signal:l,query:(0,b.Z)({},this.refreshParameters)},e.next=11,(0,p.default)(c,d);case 11:return h=e.sent,f=h.data,e.abrupt("return",(0,C.V)(f,t,r,i,l));case 14:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"getTileUrl",value:function(){throw new d.Z("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}}]),r}((0,k.h)((0,_.M)((0,M.Q)(w.Z))));(0,c._)([(0,y.Cb)({type:T.Z})],I.prototype,"tileInfo",void 0),(0,c._)([(0,y.Cb)({type:["show","hide"]})],I.prototype,"listMode",void 0),(0,c._)([(0,y.Cb)({readOnly:!0,value:"base-tile"})],I.prototype,"type",void 0),(0,c._)([(0,y.Cb)({nonNullable:!0})],I.prototype,"fullExtent",void 0),(0,c._)([(0,y.Cb)()],I.prototype,"spatialReference",void 0);var j=I=n=(0,c._)([(0,v.j)("esri.layers.BaseTileLayer")],I),S=r(6061),U=r(59068),B=r(585),R=new h.X({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),D=function(e){(0,l.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).type="bing-maps",n.tileInfo=new T.Z({size:[256,256],dpi:96,origin:new B.Z({x:-20037508.342787,y:20037508.342787,spatialReference:g.Z.WebMercator}),spatialReference:g.Z.WebMercator,lods:[new U.Z({level:1,resolution:78271.5169639999,scale:295828763.795777}),new U.Z({level:2,resolution:39135.7584820001,scale:147914381.897889}),new U.Z({level:3,resolution:19567.8792409999,scale:73957190.948944}),new U.Z({level:4,resolution:9783.93962049996,scale:36978595.474472}),new U.Z({level:5,resolution:4891.96981024998,scale:18489297.737236}),new U.Z({level:6,resolution:2445.98490512499,scale:9244648.868618}),new U.Z({level:7,resolution:1222.99245256249,scale:4622324.434309}),new U.Z({level:8,resolution:611.49622628138,scale:2311162.217155}),new U.Z({level:9,resolution:305.748113140558,scale:1155581.108577}),new U.Z({level:10,resolution:152.874056570411,scale:577790.554289}),new U.Z({level:11,resolution:76.4370282850732,scale:288895.277144}),new U.Z({level:12,resolution:38.2185141425366,scale:144447.638572}),new U.Z({level:13,resolution:19.1092570712683,scale:72223.819286}),new U.Z({level:14,resolution:9.55462853563415,scale:36111.909643}),new U.Z({level:15,resolution:4.77731426794937,scale:18055.954822}),new U.Z({level:16,resolution:2.38865713397468,scale:9027.977411}),new U.Z({level:17,resolution:1.19432856685505,scale:4513.988705}),new U.Z({level:18,resolution:.597164283559817,scale:2256.994353}),new U.Z({level:19,resolution:.298582141647617,scale:1128.497176}),new U.Z({level:20,resolution:.1492910708238085,scale:564.248588})]}),n.key=null,n.style="road",n.culture="en-US",n.region=null,n.portalUrl=null,n.hasAttributionData=!0,n}return(0,s.Z)(r,[{key:"bingMetadata",get:function(){return this._get("bingMetadata")},set:function(e){this._set("bingMetadata",e)}},{key:"copyright",get:function(){return null!=this.bingMetadata?this.bingMetadata.copyright:null}},{key:"operationalLayerType",get:function(){return R.toJSON(this.style)}},{key:"bingLogo",get:function(){return null!=this.bingMetadata?this.bingMetadata.brandLogoUri:null}},{key:"load",value:function(e){var t=this;return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((function(){return t._getMetadata()}))):this.addResolvingPromise(Promise.reject(new d.Z("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}},{key:"getTileUrl",value:function(e,t,r){if(!this.loaded||null==this.bingMetadata)return null;var n=this.bingMetadata.resourceSets[0].resources[0],a=n.imageUrlSubdomains[t%n.imageUrlSubdomains.length],i=this._getQuadKey(e,t,r);return n.imageUrl.replace("{subdomain}",a).replace("{quadkey}",i)}},{key:"fetchAttributionData",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.load().then((function(){return null==t.bingMetadata?null:{contributors:t.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((function(e){return{attribution:e.attribution,coverageAreas:e.coverageAreas.map((function(e){return{zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]}}))}}))}})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_getMetadata",value:function(){var e=this,t={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return(0,p.default)("".concat("https://dev.virtualearth.net","/REST/v1/Imagery/Metadata/").concat(t),{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((function(t){var r=t.data;if(200!==r.statusCode)throw new d.Z("bingmapslayer:getmetadata",r.statusDescription);if(e.bingMetadata=r,0===e.bingMetadata.resourceSets.length)throw new d.Z("bingmapslayer:getmetadata","no bing resourcesets");if(0===e.bingMetadata.resourceSets[0].resources.length)throw new d.Z("bingmapslayer:getmetadata","no bing resources")})).catch((function(e){throw new d.Z("bingmapslayer:getmetadata",e.message)}))}},{key:"_getPortalBingKey",value:function(){var e,t=this;return(0,p.default)(null!==(e=this.portalUrl)&&void 0!==e?e:"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((function(e){if(!e.data.bingKey)throw new d.Z("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");t.key=e.data.bingKey})).catch((function(e){throw new d.Z("bingmapslayer:getportalbingkey",e.message)}))}},{key:"_getQuadKey",value:function(e,t,r){for(var n="",a=e;a>0;a--){var i=0,o=1<<a-1;0!=(r&o)&&(i+=1),0!=(t&o)&&(i+=2),n+=i.toString()}return n}}]),r}((0,k.h)((0,S.q)((0,f.R)(j))));(0,c._)([(0,y.Cb)({json:{read:!1,write:!1},value:null})],D.prototype,"bingMetadata",null),(0,c._)([(0,y.Cb)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],D.prototype,"type",void 0),(0,c._)([(0,y.Cb)({type:T.Z})],D.prototype,"tileInfo",void 0),(0,c._)([(0,y.Cb)({type:String,readOnly:!0,json:{read:!1,write:!1}})],D.prototype,"copyright",null),(0,c._)([(0,y.Cb)({type:String,json:{write:!1,read:!1}})],D.prototype,"key",void 0),(0,c._)([(0,y.Cb)({type:R.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:R.read}}})],D.prototype,"style",void 0),(0,c._)([(0,y.Cb)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],D.prototype,"operationalLayerType",null),(0,c._)([(0,y.Cb)({type:String,json:{write:!1,read:!1}})],D.prototype,"culture",void 0),(0,c._)([(0,y.Cb)({type:String,json:{write:!1,read:!1}})],D.prototype,"region",void 0),(0,c._)([(0,y.Cb)({type:String,json:{write:!0,read:!0}})],D.prototype,"portalUrl",void 0),(0,c._)([(0,y.Cb)({type:Boolean,json:{write:!1,read:!1}})],D.prototype,"hasAttributionData",void 0),(0,c._)([(0,y.Cb)({type:String,readOnly:!0})],D.prototype,"bingLogo",null);var P=D=(0,c._)([(0,v.j)("esri.layers.BingMapsLayer")],D)},71684:function(e,t,r){r.d(t,{Q:function(){return C}});var n=r(74165),a=r(15861),i=r(15671),o=r(43144),s=r(97326),l=r(60136),u=r(29388),c=r(27366),p=r(32718),d=r(66978),h=r(49861),f=(r(25243),r(63780),r(93169),r(69912)),y=r(37762),v=r(40281),g=(r(10064),r(2173),r(27088)),b=new v.Z,Z=new WeakMap;function m(e){return null!=e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function w(e,t){return Number.isFinite(e)&&Number.isFinite(t)?t<=0?e:w(t,e%t):0}var k=0,M=0;function _(){var e,t=Date.now(),r=(0,y.Z)(b);try{for(r.s();!(e=r.n()).done;){var n,a=e.value;if(a.refreshInterval)t-(null!==(n=Z.get(a))&&void 0!==n?n:0)+5>=6e4*a.refreshInterval&&(Z.set(a,t),a.refresh(t))}}catch(i){r.e(i)}finally{r.f()}}(0,g.EH)((function(){var e,t=Date.now(),r=0,n=(0,y.Z)(b);try{for(n.s();!(e=n.n()).done;){var a=e.value;r=w(Math.round(6e4*a.refreshInterval),r),a.refreshInterval?Z.get(a)||Z.set(a,t):Z.delete(a)}}catch(i){n.e(i)}finally{n.f()}if(r!==M){if(M=r,clearInterval(k),0===M)return void(k=0);k=setInterval(_,M)}}));var C=function(e){var t=function(e){(0,l.Z)(r,e);var t=(0,u.Z)(r);function r(){var e;(0,i.Z)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).refreshInterval=0,e.refreshTimestamp=0,e._debounceHasDataChanged=(0,d.Ds)((function(){return e.hasDataChanged()})),e.when().then((function(){e.destroyed||function(e){m(e)&&b.push(e)}((0,s.Z)(e))}),(function(){})),e}return(0,o.Z)(r,[{key:"destroy",value:function(){var e;m(e=this)&&b.includes(e)&&b.remove(e)}},{key:"refreshParameters",get:function(){return{_ts:this.refreshTimestamp||null}}},{key:"refresh",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now();(0,d.R8)(this._debounceHasDataChanged()).then((function(r){r&&e._set("refreshTimestamp",t),e.emit("refresh",{dataChanged:r})}),(function(t){p.Z.getLogger(e).error(t),e.emit("refresh",{dataChanged:!1,error:t})}))}},{key:"hasDataChanged",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),r}(e);return(0,c._)([(0,h.Cb)({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0}})],t.prototype,"refreshInterval",void 0),(0,c._)([(0,h.Cb)({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),(0,c._)([(0,h.Cb)()],t.prototype,"refreshParameters",null),t=(0,c._)([(0,f.j)("esri.layers.mixins.RefreshableLayer")],t),t}},83690:function(e,t,r){r.d(t,{V:function(){return u},g:function(){return s}});var n=r(74165),a=r(15861),i=r(10064),o=r(66978);function s(e,t,r){return l.apply(this,arguments)}function l(){return l=(0,a.Z)((0,n.Z)().mark((function e(t,r,a){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,createImageBitmap(t);case 3:s=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new i.Z("request:server","Unable to load ".concat(r),{url:r,error:e.t0});case 9:return e.abrupt("return",((0,o.k_)(a),s));case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),l.apply(this,arguments)}function u(e,t,r,n,a){return c.apply(this,arguments)}function c(){return c=(0,a.Z)((0,n.Z)().mark((function e(t,r,a,s,l){var u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,createImageBitmap(t);case 3:u=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new i.Z("request:server","Unable to load tile ".concat(r,"/").concat(a,"/").concat(s),{error:e.t0,level:r,row:a,col:s});case 9:return e.abrupt("return",((0,o.k_)(l),u));case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),c.apply(this,arguments)}}}]);
//# sourceMappingURL=165.579b3c00.chunk.js.map