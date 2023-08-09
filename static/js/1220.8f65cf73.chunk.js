"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[1220],{62204:function(e,t,r){r.d(t,{P:function(){return l}});var n=r(37762),i=r(68860),a=r(92975);function o(e,t,r){if(null==e.hasM||e.hasZ){var i,a=(0,n.Z)(t);try{for(a.s();!(i=a.n()).done;){var o,l=i.value,u=(0,n.Z)(l);try{for(u.s();!(o=u.n()).done;){var s=o.value;s.length>2&&(s[2]*=r)}}catch(f){u.e(f)}finally{u.f()}}}catch(f){a.e(f)}finally{a.f()}}}function l(e,t,r){if((e||t)&&r){var n=(0,i._R)(r);u(e,r,n),u(t,r,n)}}function u(e,t,r){if(e){var i,a=(0,n.Z)(e);try{for(a.s();!(i=a.n()).done;){s(i.value.geometry,t,r)}}catch(o){a.e(o)}finally{a.f()}}}function s(e,t,r){if(null!=e&&e.spatialReference&&!(0,a.fS)(e.spatialReference,t)){var l=(0,i._R)(e.spatialReference)/r;if(1!==l)if("x"in e)null!=e.z&&(e.z*=l);else if("rings"in e)o(e,e.rings,l);else if("paths"in e)o(e,e.paths,l);else if("points"in e&&(null==e.hasM||e.hasZ)){var u,s=(0,n.Z)(e.points);try{for(s.s();!(u=s.n()).done;){var f=u.value;f.length>2&&(f[2]*=l)}}catch(y){s.e(y)}finally{s.f()}}}}},68620:function(e,t,r){r.d(t,{p:function(){return a}});var n=r(37762),i=r(93501);function a(e,t,r){if(r&&r.features&&r.hasZ){var a=(0,i.k)(r.geometryType,t,e.outSpatialReference);if(null!=a){var o,l=(0,n.Z)(r.features);try{for(l.s();!(o=l.n()).done;){a(o.value.geometry)}}catch(u){l.e(u)}finally{l.f()}}}}},49818:function(e,t,r){r.d(t,{Z:function(){return k}});var n,i=r(29439),a=r(37762),o=r(15671),l=r(43144),u=r(60136),s=r(29388),f=r(27366),y=r(59486),p=r(52639),v=r(43404),c=r(46784),h=r(84652),m=r(49861),d=(r(25243),r(38511)),g=r(69912),Z=r(31201),x=r(78952),R=r(77981),_=r(83040),w=new v.X({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null}),b=n=function(e){(0,u.Z)(r,e);var t=(0,s.Z)(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).displayFieldName=null,n.exceededTransferLimit=!1,n.features=[],n.fields=null,n.geometryType=null,n.hasM=!1,n.hasZ=!1,n.queryGeometry=null,n.spatialReference=null,n}return(0,l.Z)(r,[{key:"readFeatures",value:function(e,t){for(var r=x.Z.fromJSON(t.spatialReference),n=[],i=0;i<e.length;i++){var a=e[i],o=p.Z.fromJSON(a),l=a.geometry&&a.geometry.spatialReference;null==o.geometry||l||(o.geometry.spatialReference=r);var u=a.aggregateGeometries,s=o.aggregateGeometries;if(u&&null!=s)for(var f in s){var y=s[f],v=u[f],c=null===v||void 0===v?void 0:v.spatialReference;null==y||c||(y.spatialReference=r)}n.push(o)}return n}},{key:"writeGeometryType",value:function(e,t,r,n){if(e)w.write(e,t,r,n);else{var i=this.features;if(i){var o,l=(0,a.Z)(i);try{for(l.s();!(o=l.n()).done;){var u=o.value;if(u&&null!=u.geometry)return void w.write(u.geometry.type,t,r,n)}}catch(s){l.e(s)}finally{l.f()}}}}},{key:"readQueryGeometry",value:function(e,t){if(!e)return null;var r=!!e.spatialReference,n=(0,R.im)(e);return n&&!r&&t.spatialReference&&(n.spatialReference=x.Z.fromJSON(t.spatialReference)),n}},{key:"writeSpatialReference",value:function(e,t){if(e)t.spatialReference=e.toJSON();else{var r=this.features;if(r){var n,i=(0,a.Z)(r);try{for(i.s();!(n=i.n()).done;){var o=n.value;if(o&&null!=o.geometry&&o.geometry.spatialReference)return void(t.spatialReference=o.geometry.spatialReference.toJSON())}}catch(l){i.e(l)}finally{i.f()}}}}},{key:"clone",value:function(){return new n(this.cloneProperties())}},{key:"cloneProperties",value:function(){return(0,h.d9)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}},{key:"toJSON",value:function(e){var t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(var r=0;r<t.features.length;r++){var n=t.features[r];if(n.geometry){var i=e&&e[r];n.geometry=i&&i.toJSON()||n.geometry}}return t}},{key:"quantize",value:function(e){for(var t=(0,i.Z)(e.scale,2),r=t[0],n=t[1],a=(0,i.Z)(e.translate,2),o=a[0],l=a[1],u=this.features,s=this._getQuantizationFunction(this.geometryType,(function(e){return Math.round((e-o)/r)}),(function(e){return Math.round((l-e)/n)})),f=0,y=u.length;f<y;f++)(null===s||void 0===s?void 0:s(u[f].geometry))||(u.splice(f,1),f--,y--);return this.transform=e,this}},{key:"unquantize",value:function(){var e,t,r=this.geometryType,n=this.features,o=this.transform;if(!o)return this;var l=(0,i.Z)(o.translate,2),u=l[0],s=l[1],f=(0,i.Z)(o.scale,2),y=f[0],p=f[1],v=null,c=null;if(this.hasZ&&null!=(null===o||void 0===o||null===(e=o.scale)||void 0===e?void 0:e[2])){var h=(0,i.Z)(o.translate,3)[2],m=(0,i.Z)(o.scale,3)[2];v=function(e){return e*m+h}}if(this.hasM&&null!=(null===o||void 0===o||null===(t=o.scale)||void 0===t?void 0:t[3])){var d=(0,i.Z)(o.translate,4)[3],g=(0,i.Z)(o.scale,4)[3];c=function(e){return null==e?e:e*g+d}}var Z,x=this._getHydrationFunction(r,(function(e){return e*y+u}),(function(e){return s-e*p}),v,c),R=(0,a.Z)(n);try{for(R.s();!(Z=R.n()).done;){var _=Z.value.geometry;null!=_&&x&&x(_)}}catch(w){R.e(w)}finally{R.f()}return this.transform=null,this}},{key:"_quantizePoints",value:function(e,t,r){for(var n,i,a=[],o=0,l=e.length;o<l;o++){var u=e[o];if(o>0){var s=t(u[0]),f=r(u[1]);s===n&&f===i||(a.push([s-n,f-i]),n=s,i=f)}else n=t(u[0]),i=r(u[1]),a.push([n,i])}return a.length>0?a:null}},{key:"_getQuantizationFunction",value:function(e,t,r){var n=this;return"point"===e?function(e){return e.x=t(e.x),e.y=r(e.y),e}:"polyline"===e||"polygon"===e?function(e){for(var i=(0,R.oU)(e)?e.rings:e.paths,a=[],o=0,l=i.length;o<l;o++){var u=i[o],s=n._quantizePoints(u,t,r);s&&a.push(s)}return a.length>0?((0,R.oU)(e)?e.rings=a:e.paths=a,e):null}:"multipoint"===e?function(e){var i=n._quantizePoints(e.points,t,r);return i&&i.length>0?(e.points=i,e):null}:"extent"===e?function(e){return e}:null}},{key:"_getHydrationFunction",value:function(e,t,r,n,i){return"point"===e?function(e){e.x=t(e.x),e.y=r(e.y),n&&(e.z=n(e.z))}:"polyline"===e||"polygon"===e?function(e){for(var a,o,l=(0,R.oU)(e)?e.rings:e.paths,u=0,s=l.length;u<s;u++)for(var f=l[u],y=0,p=f.length;y<p;y++){var v=f[y];y>0?(a+=v[0],o+=v[1]):(a=v[0],o=v[1]),v[0]=t(a),v[1]=r(o)}if(n&&i)for(var c=0,h=l.length;c<h;c++)for(var m=l[c],d=0,g=m.length;d<g;d++){var Z=m[d];Z[2]=n(Z[2]),Z[3]=i(Z[3])}else if(n)for(var x=0,_=l.length;x<_;x++)for(var w=l[x],b=0,k=w.length;b<k;b++){var z=w[b];z[2]=n(z[2])}else if(i)for(var G=0,S=l.length;G<S;G++)for(var T=l[G],N=0,q=T.length;N<q;N++){var C=T[N];C[2]=i(C[2])}}:"extent"===e?function(e){e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax),n&&null!=e.zmax&&null!=e.zmin&&(e.zmax=n(e.zmax),e.zmin=n(e.zmin)),i&&null!=e.mmax&&null!=e.mmin&&(e.mmax=i(e.mmax),e.mmin=i(e.mmin))}:"multipoint"===e?function(e){for(var a,o,l=e.points,u=0,s=l.length;u<s;u++){var f=l[u];u>0?(a+=f[0],o+=f[1]):(a=f[0],o=f[1]),f[0]=t(a),f[1]=r(o)}if(n&&i)for(var y=0,p=l.length;y<p;y++){var v=l[y];v[2]=n(v[2]),v[3]=i(v[3])}else if(n)for(var c=0,h=l.length;c<h;c++){var m=l[c];m[2]=n(m[2])}else if(i)for(var d=0,g=l.length;d<g;d++){var Z=l[d];Z[2]=i(Z[2])}}:null}}]),r}(c.wq);(0,f._)([(0,m.Cb)({type:String,json:{write:!0}})],b.prototype,"displayFieldName",void 0),(0,f._)([(0,m.Cb)({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],b.prototype,"exceededTransferLimit",void 0),(0,f._)([(0,m.Cb)({type:[p.Z],json:{write:!0}})],b.prototype,"features",void 0),(0,f._)([(0,d.r)("features")],b.prototype,"readFeatures",null),(0,f._)([(0,m.Cb)({type:[_.Z],json:{write:!0}})],b.prototype,"fields",void 0),(0,f._)([(0,m.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:w.read}}})],b.prototype,"geometryType",void 0),(0,f._)([(0,Z.c)("geometryType")],b.prototype,"writeGeometryType",null),(0,f._)([(0,m.Cb)({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],b.prototype,"hasM",void 0),(0,f._)([(0,m.Cb)({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],b.prototype,"hasZ",void 0),(0,f._)([(0,m.Cb)({types:y.qM,json:{write:!0}})],b.prototype,"queryGeometry",void 0),(0,f._)([(0,d.r)("queryGeometry")],b.prototype,"readQueryGeometry",null),(0,f._)([(0,m.Cb)({type:x.Z,json:{write:!0}})],b.prototype,"spatialReference",void 0),(0,f._)([(0,Z.c)("spatialReference")],b.prototype,"writeSpatialReference",null),(0,f._)([(0,m.Cb)({json:{write:!0}})],b.prototype,"transform",void 0),(b=n=(0,f._)([(0,g.j)("esri.rest.support.FeatureSet")],b)).prototype.toJSON.isDefaultToJSON=!0;var k=b}}]);
//# sourceMappingURL=1220.8f65cf73.chunk.js.map