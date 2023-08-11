"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[5687],{85687:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(1413),i=n(15671),o=n(43144),a=n(37762),s=n(41644),u=n(95439),l=n(78952),h=n(93501),f=n(65618),c=n(83406),d=n(83040);function y(e,t){return t}function p(e,t,n,r){switch(n){case 0:return g(e,t+r,0);case 1:return"lowerLeft"===e.originPosition?g(e,t+r,1):function(e,t,n){var r=e.translate,i=e.scale;return r[n]-t*i[n]}(e,t+r,1)}}function _(e,t,n,r){return 2===n?g(e,t,2):p(e,t,n,r)}function m(e,t,n,r){return 2===n?g(e,t,3):p(e,t,n,r)}function v(e,t,n,r){return 3===n?g(e,t,3):_(e,t,n,r)}function g(e,t,n){var r=e.translate,i=e.scale;return r[n]+t*i[n]}var k=function(){function e(t){(0,i.Z)(this,e),this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=y,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=function(){return(0,o.Z)((function e(){(0,i.Z)(this,e)}))}()}return(0,o.Z)(e,[{key:"createFeatureResult",value:function(){return new f.Pj}},{key:"finishFeatureResult",value:function(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=function(){return(0,o.Z)((function e(){(0,i.Z)(this,e)}))}(),this._coordinateBuffer=null,this._lengths.length=0,e.hasZ){var t=(0,h.k)(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(null!=t){var n,r=(0,a.Z)(e.features);try{for(r.s();!(n=r.n()).done;){t(n.value.geometry)}}catch(s){r.e(s)}finally{r.f()}}}}},{key:"createSpatialReference",value:function(){return new l.Z}},{key:"addField",value:function(e,t){e.fields.push(d.Z.fromJSON(t));var n=e.fields.map((function(e){return e.name}));this._attributesConstructor=function(){var e,t=(0,a.Z)(n);try{for(t.s();!(e=t.n()).done;){this[e.value]=null}}catch(r){t.e(r)}finally{t.f()}}}},{key:"addFeature",value:function(e,t){var n,r=null!==(n=this._options.maxStringAttributeLength)&&void 0!==n?n:0;if(r>0)for(var i in t.attributes){var o=t.attributes[i];"string"==typeof o&&o.length>r&&(t.attributes[i]="")}e.features.push(t)}},{key:"addQueryGeometry",value:function(e,t){var n=t.queryGeometry,r=t.queryGeometryType,i=(0,c.$g)(n.clone(),n,!1,!1,this._transform),o=(0,c.di)(i,r,!1,!1),a=null;switch(r){case"esriGeometryPoint":a="point";break;case"esriGeometryPolygon":a="polygon";break;case"esriGeometryPolyline":a="polyline";break;case"esriGeometryMultipoint":a="multipoint"}o.type=a,e.queryGeometryType=r,e.queryGeometry=o}},{key:"prepareFeatures",value:function(e){var t,n=this;switch(this._transform=null!==(t=e.transform)&&void 0!==t?t:null,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++,e.geometryType){case"point":this.addCoordinate=function(e,t,r){return n.addCoordinatePoint(e,t,r)},this.createGeometry=function(e){return n.createPointGeometry(e)};break;case"polygon":this.addCoordinate=function(e,t,r){return n._addCoordinatePolygon(e,t,r)},this.createGeometry=function(e){return n._createPolygonGeometry(e)};break;case"polyline":this.addCoordinate=function(e,t,r){return n._addCoordinatePolyline(e,t,r)},this.createGeometry=function(e){return n._createPolylineGeometry(e)};break;case"multipoint":this.addCoordinate=function(e,t,r){return n._addCoordinateMultipoint(e,t,r)},this.createGeometry=function(e){return n._createMultipointGeometry(e)};break;case"mesh":case"extent":break;default:(0,s.Bg)(e.geometryType)}}},{key:"createFeature",value:function(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new f.Wh((0,u.D)(),null,new this._attributesConstructor)}},{key:"allocateCoordinates",value:function(){var e=this._lengths.reduce((function(e,t){return e+t}),0);this._coordinateBuffer=new Float64Array(e*this._vertexDimension),this._coordinateBufferPtr=0}},{key:"addLength",value:function(e,t){0===this._lengths.length&&(this._toAddInCurrentPath=t),this._lengths.push(t)}},{key:"createPointGeometry",value:function(e){var t={type:"point",x:0,y:0,spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM};return t.hasZ&&(t.z=0),t.hasM&&(t.m=0),t}},{key:"addCoordinatePoint",value:function(e,t,n){var r=this._transform?this._applyTransform(this._transform,t,n,0):t;if(null!=r)switch(n){case 0:e.x=r;break;case 1:e.y=r;break;case 2:e.hasZ?e.z=r:e.m=r;break;case 3:e.m=r}}},{key:"_transformPathLikeValue",value:function(e,t){var n=0;return t<=1&&(n=this._previousCoordinate[t],this._previousCoordinate[t]+=e),this._transform?this._applyTransform(this._transform,e,t,n):e}},{key:"_addCoordinatePolyline",value:function(e,t,n){this._dehydratedAddPointsCoordinate(e.paths,t,n)}},{key:"_addCoordinatePolygon",value:function(e,t,n){this._dehydratedAddPointsCoordinate(e.rings,t,n)}},{key:"_addCoordinateMultipoint",value:function(e,t,n){0===n&&e.points.push([]);var r=this._transformPathLikeValue(t,n);e.points[e.points.length-1].push(r)}},{key:"_createPolygonGeometry",value:function(e){return{type:"polygon",rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}},{key:"_createPolylineGeometry",value:function(e){return{type:"polyline",paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}},{key:"_createMultipointGeometry",value:function(e){return{type:"multipoint",points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}},{key:"_dehydratedAddPointsCoordinate",value:function(e,t,n){0===n&&0==this._toAddInCurrentPath--&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);var r=this._transformPathLikeValue(t,n),i=e[e.length-1],o=this._coordinateBuffer;if(o){if(0===n){var a=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;i.push(new Float64Array(o.buffer,a,this._vertexDimension))}o[this._coordinateBufferPtr++]=r}}},{key:"_deriveApplyTransform",value:function(e){var t=e.hasZ,n=e.hasM;return t&&n?v:t?_:n?m:p}}]),e}(),C=n(27607),P=function(){function e(){(0,i.Z)(this,e)}return(0,o.Z)(e,[{key:"_parseFeatureQuery",value:function(e){var t,n=(0,C.C)(e.buffer,new k(e.options)),i=(0,r.Z)((0,r.Z)({},n),{},{spatialReference:null===(t=n.spatialReference)||void 0===t?void 0:t.toJSON(),fields:n.fields?n.fields.map((function(e){return e.toJSON()})):void 0});return Promise.resolve(i)}}]),e}();function Z(){return new P}}}]);
//# sourceMappingURL=5687.037bbe3d.chunk.js.map