"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[7941],{70804:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(71002),i=n(89611),a=n(60136);function o(){o=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,a){var o=new RegExp(e,r);return t.set(o,a||t.get(e)),(0,i.Z)(o,n.prototype)}function u(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){var i=r[n];if("number"==typeof i)t[n]=e[i];else{for(var a=0;void 0===e[i[a]]&&a+1<i.length;)a++;t[n]=e[i[a]]}return t}),Object.create(null))}return(0,a.Z)(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);if(n){n.groups=u(n,this);var r=n.indices;r&&(r.groups=u(r,this))}return n},n.prototype[Symbol.replace]=function(n,i){if("string"==typeof i){var a=t.get(this);return e[Symbol.replace].call(this,n,i.replace(/\$<([^>]+)>/g,(function(e,t){var n=a[t];return"$"+(Array.isArray(n)?n.join("$"):n)})))}if("function"==typeof i){var o=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!=(0,r.Z)(e[e.length-1])&&(e=[].slice.call(e)).push(u(e,o)),i.apply(this,e)}))}return e[Symbol.replace].call(this,n,i)},o.apply(this,arguments)}},48732:function(e,t,n){n.d(t,{Hg:function(){return v},V7:function(){return m},uD:function(){return y}});var r=n(4942),i=n(37762),a=n(7138),o=n(40281),u=n(23879),l=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function s(e){return e instanceof a.Z}function c(e){return e instanceof o.Z?Object.keys(e.items):s(e)?(0,u.vw)(e).keys():e?Object.keys(e):[]}function p(e,t){return e instanceof o.Z?e.items[t]:e[t]}function d(e){return e?e.declaredClass:null}function f(e,t){var n=e.diff;if(n&&"function"==typeof n)return n(e,t);var a=c(e),o=c(t);if(0!==a.length||0!==o.length){if(!a.length||!o.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(e,t))return{type:"complete",oldValue:e,newValue:t};var u,y=o.filter((function(e){return!a.includes(e)})),m=a.filter((function(e){return!o.includes(e)})),v=a.filter((function(n){return o.includes(n)&&p(e,n)!==p(t,n)})).concat(y,m).sort(),g=d(e);if(g&&l.includes(g)&&v.length)return{type:"complete",oldValue:e,newValue:t};var h,b=s(e)&&s(t),w=(0,i.Z)(v);try{for(w.s();!(h=w.n()).done;){var Z=h.value,S=p(e,Z),k=p(t,Z),x=void 0;if((b||"function"!=typeof S&&"function"!=typeof k)&&S!==k&&(null!=S||null!=k)){var F;if(n&&n[Z]&&"function"==typeof n[Z])x=null===(F=n[Z])||void 0===F?void 0:F.call(n,S,k);else if(S instanceof Date&&k instanceof Date){if(S.getTime()===k.getTime())continue;x={type:"complete",oldValue:S,newValue:k}}else x="object"==typeof S&&"object"==typeof k&&d(S)===d(k)?f(S,k):{type:"complete",oldValue:S,newValue:k};null!=x&&(null!=u?u.diff[Z]=x:u={type:"partial",diff:(0,r.Z)({},Z,x)})}}}catch(T){w.e(T)}finally{w.f()}return u}}function y(e,t){if(null==e)return!1;var n,r=t.split("."),a=e,o=(0,i.Z)(r);try{for(o.s();!(n=o.n()).done;){var u=n.value;if("complete"===a.type)return!0;if("partial"!==a.type)return!1;var l=a.diff[u];if(!l)return!1;a=l}}catch(s){o.e(s)}finally{o.f()}return!0}function m(e,t){var n,r=(0,i.Z)(t);try{for(r.s();!(n=r.n()).done;){if(y(e,n.value))return!0}}catch(a){r.e(a)}finally{r.f()}return!1}function v(e,t){if("function"!=typeof e&&"function"!=typeof t&&(null!=e||null!=t))return null==e||null==t||"object"==typeof e&&"object"==typeof t&&d(e)!==d(t)?{type:"complete",oldValue:e,newValue:t}:f(e,t)}},47615:function(e,t,n){n.d(t,{O3:function(){return F},lG:function(){return j},my:function(){return T},q9:function(){return f}});var r=n(29439),i=n(74165),a=n(37762),o=n(10064),u=n(3182),l=n(80457),s=n(37270),c=(0,i.Z)().mark(y),p=(0,i.Z)().mark(m),d={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function f(e){return d[e]}function y(e){var t,n,r;return(0,i.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:i.t0=e.type,i.next="Feature"===i.t0?3:"FeatureCollection"===i.t0?6:25;break;case 3:return i.next=5,e;case 5:return i.abrupt("break",25);case 6:t=(0,a.Z)(e.features),i.prev=7,t.s();case 9:if((n=t.n()).done){i.next=17;break}if(r=n.value,i.t1=r,!i.t1){i.next=15;break}return i.next=15,r;case 15:i.next=9;break;case 17:i.next=22;break;case 19:i.prev=19,i.t2=i.catch(7),t.e(i.t2);case 22:return i.prev=22,t.f(),i.finish(22);case 25:case"end":return i.stop()}}),c,null,[[7,19,22,25]])}function m(e){var t,n,r,o,u,l,s,c,d;return(0,i.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!e){i.next=57;break}i.t0=e.type,i.next="Point"===i.t0?4:"LineString"===i.t0||"MultiPoint"===i.t0?7:"MultiLineString"===i.t0||"Polygon"===i.t0?9:"MultiPolygon"===i.t0?26:57;break;case 4:return i.next=6,e.coordinates;case 6:return i.abrupt("break",57);case 7:return i.delegateYield(e.coordinates,"t1",8);case 8:return i.abrupt("break",57);case 9:t=(0,a.Z)(e.coordinates),i.prev=10,t.s();case 12:if((n=t.n()).done){i.next=17;break}return r=n.value,i.delegateYield(r,"t2",15);case 15:i.next=12;break;case 17:i.next=22;break;case 19:i.prev=19,i.t3=i.catch(10),t.e(i.t3);case 22:return i.prev=22,t.f(),i.finish(22);case 25:return i.abrupt("break",57);case 26:o=(0,a.Z)(e.coordinates),i.prev=27,o.s();case 29:if((u=o.n()).done){i.next=49;break}l=u.value,s=(0,a.Z)(l),i.prev=32,s.s();case 34:if((c=s.n()).done){i.next=39;break}return d=c.value,i.delegateYield(d,"t4",37);case 37:i.next=34;break;case 39:i.next=44;break;case 41:i.prev=41,i.t5=i.catch(32),s.e(i.t5);case 44:return i.prev=44,s.f(),i.finish(44);case 47:i.next=29;break;case 49:i.next=54;break;case 51:i.prev=51,i.t6=i.catch(27),o.e(i.t6);case 54:return i.prev=54,o.f(),i.finish(54);case 57:case"end":return i.stop()}}),p,null,[[10,19,22,25],[27,51,54,57],[32,41,44,47]])}function v(e){for(var t=0,n=0;n<e.length;n++){var r=e[n],i=e[(n+1)%e.length];t+=r[0]*i[1]-i[0]*r[1]}return t<=0}function g(e){var t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function h(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return Z(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){var r,i=(0,a.Z)(t.coordinates);try{for(i.s();!(r=i.n()).done;){Z(e,r.value,n)}}catch(o){i.e(o)}finally{i.f()}return e}(e,t,n);case"MultiPolygon":return function(e,t,n){var r,i=(0,a.Z)(t.coordinates);try{for(i.s();!(r=i.n()).done;){var o=r.value;b(e,o[0],n);for(var u=1;u<o.length;u++)w(e,o[u],n)}}catch(l){i.e(l)}finally{i.f()}return e}(e,t,n);case"Point":return function(e,t,n){return k(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){var r=t.coordinates;b(e,r[0],n);for(var i=1;i<r.length;i++)w(e,r[i],n);return e}(e,t,n)}}function b(e,t,n){var r=g(t);!function(e){return!v(e)}(r)?Z(e,r,n):S(e,r,n)}function w(e,t,n){var r=g(t);!function(e){return v(e)}(r)?Z(e,r,n):S(e,r,n)}function Z(e,t,n){var r,i=(0,a.Z)(t);try{for(i.s();!(r=i.n()).done;){k(e,r.value,n)}}catch(o){i.e(o)}finally{i.f()}e.lengths.push(t.length)}function S(e,t,n){for(var r=t.length-1;r>=0;r--)k(e,t[r],n);e.lengths.push(t.length)}function k(e,t,n){var i=(0,r.Z)(t,3),a=i[0],o=i[1],u=i[2];e.coords.push(a,o),n.hasZ&&e.coords.push(u||0)}function x(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function F(e){if(!e)throw new o.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new o.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});var t=e.crs;if(t){var n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!r.test(n))throw new o.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}}function T(e){var t,n,r,i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=[],l=new Set,c=new Set,p=!1,d=null,v=!1,g=o.geometryType,h=void 0===g?null:g,b=!1,w=(0,a.Z)(y(e));try{var Z=function(){var e=i.value,t=e.geometry,n=e.properties,o=e.id;if((!t||(h||(h=f(t.type)),f(t.type)===h))&&(p||(p=function(e){var t,n=(0,a.Z)(e);try{for(n.s();!(t=n.n()).done;)if(t.value.length>2)return!0}catch(r){n.e(r)}finally{n.f()}return!1}(m(t))),v||(v=null!=o)&&(r=typeof o,n&&(d=Object.keys(n).filter((function(e){return n[e]===o})))),n&&d&&v&&null!=o&&(d.length>1?d=d.filter((function(e){return n[e]===o})):1===d.length&&(d=n[d[0]]===o?d:[])),!b&&n)){var y=!0;for(var g in n)if(!l.has(g)){var w=n[g];if(null!=w){var Z=x(w);if("unknown"!==Z){c.delete(g),l.add(g);var S=(0,s.q6)(g);S&&u.push({name:S,alias:g,type:Z})}else c.add(g)}else y=!1,c.add(g)}b=y}};for(w.s();!(i=w.n()).done;)Z()}catch(j){w.e(j)}finally{w.f()}var S=null!==(t=(0,s.q6)(1===(null===(n=d)||void 0===n?void 0:n.length)&&d[0]||null))&&void 0!==t?t:void 0;if(S){var k,F=(0,a.Z)(u);try{for(F.s();!(k=F.n()).done;){var T=k.value;if(T.name===S&&(0,s.H7)(T)){T.type="esriFieldTypeOID";break}}}catch(j){F.e(j)}finally{F.f()}}return{fields:u,geometryType:h,hasZ:p,objectIdFieldName:S,objectIdFieldType:r,unknownFields:Array.from(c)}}function j(e,t){return Array.from(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,i.Z)().mark((function n(){var r,o,s,c,p,d,y,m,v,g,b,w;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.geometryType,o=t.objectIdField,s=(0,a.Z)(e),n.prev=2,s.s();case 4:if((c=s.n()).done){n.next=17;break}if(d=c.value,y=d.geometry,m=d.properties,v=d.id,!y||f(y.type)===r){n.next=9;break}return n.abrupt("continue",15);case 9:return g=m||{},b=void 0,o&&(b=g[o],null==v||b||(g[o]=b=v)),w=new u.u_(y?h(new l.Z,y,t):null,g,null,null!==(p=b)&&void 0!==p?p:void 0),n.next=15,w;case 15:n.next=4;break;case 17:n.next=22;break;case 19:n.prev=19,n.t0=n.catch(2),s.e(n.t0);case 22:return n.prev=22,s.f(),n.finish(22);case 25:case"end":return n.stop()}}),n,null,[[2,19,22,25]])}))()}(y(e),t))}},63543:function(e,t,n){n.d(t,{Dm:function(){return d},Hq:function(){return f},MS:function(){return y},bU:function(){return s}});var r=n(4942),i=n(1413),a=n(93169),o=n(84652),u=n(60480),l=n(76115);function s(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?l.I4:"esriGeometryPolyline"===e?l.ET:l.lF}}}var c=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,p=1;function d(e,t){if((0,a.Z)("esri-csp-restrictions"))return function(){return(0,i.Z)((0,r.Z)({},t,null),e)};try{var n="this.".concat(t," = null;");for(var o in e)n+="this".concat(c.test(o)?".".concat(o):'["'.concat(o,'"]')," = ").concat(JSON.stringify(e[o]),";");var u=new Function("\n      return class AttributesClass$".concat(p++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return function(){return new u}}catch(l){return function(){return(0,i.Z)((0,r.Z)({},t,null),e)}}}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,o.d9)(e)}}]}function y(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:u.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1}}}},67213:function(e,t,n){n.d(t,{$9:function(){return S},G4:function(){return j},Lu:function(){return Z},WW:function(){return G},d:function(){return N},eS:function(){return O},gp:function(){return V},j:function(){return F},w9:function(){return k},yN:function(){return _}});var r=n(74165),i=n(37762),a=n(1413),o=n(70804),u=n(15861),l=(n(59486),n(76200)),s=n(10064),c=n(32718),p=n(92975),d=n(81753),f=n(83406),y=n(6908),m=n(47615),v=n(63543),g=n(52410),h=n(85249),b=n(78952),w=c.Z.getLogger("esri.layers.graphics.sources.ogcfeature"),Z="http://www.opengis.net/def/crs/",S="".concat(Z,"OGC/1.3/CRS84");function k(e,t){return x.apply(this,arguments)}function x(){return x=(0,u.Z)((0,r.Z)().mark((function e(t,n){var o,u,c,p,d,f,y,b,Z,S,k,x,F,T,j,I,V,C,O,P,N,_=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=_.length>2&&void 0!==_[2]?_[2]:{},u=_.length>3&&void 0!==_[3]?_[3]:5,c=t.links,null!=(p=W(c,"items","application/geo+json")||W(c,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json"))){e.next=5;break}throw new s.Z("ogc-feature-layer:missing-items-page","Missing items url");case 5:return e.next=7,(0,l.default)(p.href,{signal:o.signal,query:(0,a.Z)((0,a.Z)({limit:u},o.customParameters),{},{token:o.apiKey}),headers:{accept:"application/geo+json"}});case 7:return d=e.sent,f=d.data,e.next=11,(0,m.O3)(f);case 11:if(y=(0,m.my)(f,{geometryType:n.geometryType}),b=n.fields||y.fields||[],Z=null!=n.hasZ?n.hasZ:y.hasZ,S=y.geometryType,k=n.objectIdField||y.objectIdFieldName||"OBJECTID",x=n.timeInfo,!(F=b.find((function(e){return e.name===k})))){e.next=18;break}F.editable=!1,F.nullable=!1,e.next=21;break;case 18:if(y.objectIdFieldType){e.next=20;break}throw new s.Z("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");case 20:b.unshift({name:k,alias:k,type:"number"===y.objectIdFieldType?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1});case 21:k!==y.objectIdFieldName&&(T=b.find((function(e){return e.name===y.objectIdFieldName})))&&(T.type="esriFieldTypeInteger"),b===y.fields&&y.unknownFields.length>0&&w.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:y.unknownFields}}),j=(0,i.Z)(b),e.prev=24,j.s();case 26:if((I=j.n()).done){e.next=34;break}if(null==(V=I.value).name&&(V.name=V.alias),null==V.alias&&(V.alias=V.name),"esriFieldTypeOID"!==V.type&&"esriFieldTypeGlobalID"!==V.type&&(V.editable=null==V.editable||!!V.editable,V.nullable=null==V.nullable||!!V.nullable),V.name){e.next=30;break}throw new s.Z("ogc-feature-layer:invalid-field-name","field name is missing",{field:V});case 30:if(h.v.jsonValues.includes(V.type)){e.next=32;break}throw new s.Z("ogc-feature-layer:invalid-field-type",'invalid type for field "'.concat(V.name,'"'),{field:V});case 32:e.next=26;break;case 34:e.next=39;break;case 36:e.prev=36,e.t0=e.catch(24),j.e(e.t0);case 39:return e.prev=39,j.f(),e.finish(39);case 42:return x&&(C=new g.Z(b),x.startTimeField&&((O=C.get(x.startTimeField))?(x.startTimeField=O.name,O.type="esriFieldTypeDate"):x.startTimeField=null),x.endTimeField&&((P=C.get(x.endTimeField))?(x.endTimeField=P.name,P.type="esriFieldTypeDate"):x.endTimeField=null),x.trackIdField&&((N=C.get(x.trackIdField))?x.trackIdField=N.name:(x.trackIdField=null,w.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:x}}))),x.startTimeField||x.endTimeField||(w.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:x}}),x=null)),e.abrupt("return",{drawingInfo:S?(0,v.bU)(S):null,extent:J(t),geometryType:S,fields:b,hasZ:!!Z,objectIdField:k,timeInfo:x});case 44:case"end":return e.stop()}}),e,null,[[24,36,39,42]])}))),x.apply(this,arguments)}function F(e){return T.apply(this,arguments)}function T(){return T=(0,u.Z)((0,r.Z)().mark((function e(t){var n,i,o,u,c,p,d,f,y=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=y.length>1&&void 0!==y[1]?y[1]:{},i=t.links,null!=(o=W(i,"data","application/json")||W(i,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json"))){e.next=4;break}throw new s.Z("ogc-feature-layer:missing-collections-page","Missing collections url");case 4:return u=n.apiKey,c=n.customParameters,p=n.signal,e.next=9,(0,l.default)(o.href,{signal:p,headers:{accept:"application/json"},query:(0,a.Z)((0,a.Z)({},c),{},{token:u})});case 9:return d=e.sent,f=d.data,e.abrupt("return",f);case 12:case"end":return e.stop()}}),e)}))),T.apply(this,arguments)}function j(e){return I.apply(this,arguments)}function I(){return I=(0,u.Z)((0,r.Z)().mark((function e(t){var n,i,o,u,c,p,d,f,y=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=y.length>1&&void 0!==y[1]?y[1]:{},i=t.links,null!=(o=W(i,"conformance","application/json")||W(i,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json"))){e.next=4;break}throw new s.Z("ogc-feature-layer:missing-conformance-page","Missing conformance url");case 4:return u=n.apiKey,c=n.customParameters,p=n.signal,e.next=9,(0,l.default)(o.href,{signal:p,headers:{accept:"application/json"},query:(0,a.Z)((0,a.Z)({},c),{},{token:u})});case 9:return d=e.sent,f=d.data,e.abrupt("return",f);case 12:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function V(e){return C.apply(this,arguments)}function C(){return C=(0,u.Z)((0,r.Z)().mark((function e(t){var n,i,o,u,s,c,p=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(n=p.length>1&&void 0!==p[1]?p[1]:{}).apiKey,o=n.customParameters,u=n.signal,e.next=6,(0,l.default)(t,{signal:u,headers:{accept:"application/json"},query:(0,a.Z)((0,a.Z)({},o),{},{token:i})});case 6:return s=e.sent,c=s.data,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function O(e){return P.apply(this,arguments)}function P(){return P=(0,u.Z)((0,r.Z)().mark((function e(t){var n,i,o,u,s,c,p,d,f=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=f.length>1&&void 0!==f[1]?f[1]:{},i="application/vnd.oai.openapi+json;version=3.0",null!=(o=W(t.links,"service-desc",i))){e.next=4;break}return e.abrupt("return",(w.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null));case 4:return u=n.apiKey,s=n.customParameters,c=n.signal,e.next=9,(0,l.default)(o.href,{signal:c,headers:{accept:i},query:(0,a.Z)((0,a.Z)({},s),{},{token:u})});case 9:return p=e.sent,d=p.data,e.abrupt("return",d);case 12:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function N(e){var t=(0,o.Z)(/^http:\/\/www\.opengis.net\/def\/crs\/(.*)\/(.*)\/(.*)$/i,{authority:1,version:2,code:3}).exec(e),n=null===t||void 0===t?void 0:t.groups;if(!n)return null;var r=n.authority,i=n.code;switch(r.toLowerCase()){case"ogc":switch(i.toLowerCase()){case"crs27":return b.Z.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return b.Z.WGS84.wkid;default:return null}case"esri":case"epsg":var a=Number.parseInt(i,10);return Number.isNaN(a)?null:a;default:return null}}function _(e,t,n){return D.apply(this,arguments)}function D(){return(D=(0,u.Z)((0,r.Z)().mark((function e(t,n,i){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t,n,i);case 2:return a=e.sent,e.abrupt("return",(0,f.cn)(a));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e,t,n){return M.apply(this,arguments)}function M(){return M=(0,u.Z)((0,r.Z)().mark((function e(t,n,o){var u,c,v,g,h,w,Z,S,k,x,F,T,j,I,V,C,O,P,N,_,D,G,M,q,J,E,z,B,$,U,H,K,Q,X,Y,ee,te,ne,re,ie,ae;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.collection,v=t.layerDefinition,g=t.maxRecordCount,h=t.queryParameters,w=h.apiKey,Z=h.customParameters,S=t.spatialReference,k=t.supportedCrs,x=c.links,null!=(F=W(x,"items","application/geo+json")||W(x,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json"))){e.next=3;break}throw new s.Z("ogc-feature-layer:missing-items-page","Missing items url");case 3:if(T=n.geometry,j=n.num,I=n.start,V=n.timeExtent,C=n.where,!n.objectIds){e.next=6;break}throw new s.Z("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");case 6:return O=b.Z.fromJSON(S),P=null!==(u=n.outSpatialReference)&&void 0!==u?u:O,N=P.isWGS84?null:A(P,k),_=L(T,k),D=R(V),G=null!=(r=C)&&r&&"1=1"!==r?r:null,M=null!==j&&void 0!==j?j:null!=I&&void 0!==I?10:g,e.next=15,(0,l.default)(F.href,(0,a.Z)((0,a.Z)({},o),{},{query:(0,a.Z)((0,a.Z)((0,a.Z)({},Z),_),{},{crs:N,datetime:D,query:G,limit:M,startindex:I,token:w}),headers:{accept:"application/geo+json"}}));case 15:if(q=e.sent,J=q.data,E=!1,J.links&&(z=J.links.find((function(e){return"next"===e.rel})),E=!!z),!E&&Number.isInteger(J.numberMatched)&&Number.isInteger(J.numberReturned)&&(E=J.numberReturned<J.numberMatched),B=v.fields,$=v.geometryType,U=v.hasZ,H=v.objectIdField,K=(0,m.lG)(J,{geometryType:$,hasZ:U,objectIdField:H}),!N&&P.isWebMercator){Q=(0,i.Z)(K);try{for(Q.s();!(X=Q.n()).done;)null!=(Y=X.value).geometry&&null!=$&&((ee=(0,f.di)(Y.geometry,$,U,!1)).spatialReference=b.Z.WGS84,Y.geometry=(0,f.GH)((0,d.iV)(ee,P)))}catch(oe){Q.e(oe)}finally{Q.f()}}te=(0,i.Z)(K);try{for(te.s();!(ne=te.n()).done;)(re=ne.value).objectId=re.attributes[H]}catch(oe){te.e(oe)}finally{te.f()}return ie=N||!N&&P.isWebMercator?P.toJSON():p.Zn,ae=new y.Z,e.abrupt("return",(ae.exceededTransferLimit=E,ae.features=K,ae.fields=B,ae.geometryType=$,ae.hasZ=U,ae.objectIdFieldName=H,ae.spatialReference=ie,ae));case 26:case"end":return e.stop()}var r}),e)}))),M.apply(this,arguments)}function A(e,t){var n,r,i,a=e.isWebMercator;if(!e.wkid)return null;var o=a?null!==(n=null!==(r=null!==(i=t[3857])&&void 0!==i?i:t[102100])&&void 0!==r?r:t[102113])&&void 0!==n?n:t[900913]:t[e.wkid];return o?"".concat(Z).concat(o):null}function q(e){if(null==e)return"";var t=e.xmin,n=e.ymin,r=e.xmax,i=e.ymax;return"".concat(t,",").concat(n,",").concat(r,",").concat(i)}function R(e){if(null==e)return null;var t=e.start,n=e.end;return"".concat(null!=t?t.toISOString():"..","/").concat(null!=n?n.toISOString():"..")}function L(e,t){if(!function(e){return null!=e&&"extent"===e.type}(e))return null;var n=e.spatialReference;if(!n||n.isWGS84)return{bbox:q(e)};var r=A(n,t);return null!=r?{bbox:q(e),"bbox-crs":r}:n.isWebMercator?{bbox:q((0,d.iV)(e,b.Z.WGS84))}:null}function J(e){var t,n=null===(t=e.extent)||void 0===t?void 0:t.spatial;if(!n)return null;var r=n.bbox[0],i=4===r.length,a=r[0],o=r[1],u=i?void 0:r[2];return{xmin:a,ymin:o,xmax:i?r[2]:r[3],ymax:i?r[3]:r[4],zmin:u,zmax:i?void 0:r[5],spatialReference:b.Z.WGS84.toJSON()}}function W(e,t,n){return e.find((function(e){return e.rel===t&&e.type===n}))||e.find((function(e){return e.rel===t&&!e.type}))}},83040:function(e,t,n){n.d(t,{Z:function(){return w}});var r,i=n(15671),a=n(43144),o=n(60136),u=n(29388),l=n(27366),s=n(43404),c=n(46784),p=n(49861),d=n(25243),f=(n(63780),n(93169),n(27135)),y=n(38511),m=n(69912),v=n(66591),g=n(85249),h=new s.X({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"}),b=r=function(e){(0,o.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).alias=null,r.defaultValue=void 0,r.description=null,r.domain=null,r.editable=!0,r.length=-1,r.name=null,r.nullable=!0,r.type=null,r.valueType=null,r.visible=!0,r}return(0,a.Z)(n,[{key:"readDescription",value:function(e,t){var n,r,i=t.description,a=null;try{a=i?JSON.parse(i):null}catch(o){}return null!==(n=null===(r=a)||void 0===r?void 0:r.value)&&void 0!==n?n:null}},{key:"readValueType",value:function(e,t){var n=t.description,r=null;try{r=n?JSON.parse(n):null}catch(i){}return r?h.fromJSON(r.fieldValueType):null}},{key:"clone",value:function(){return new r({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}}]),n}(c.wq);(0,l._)([(0,p.Cb)({type:String,json:{write:!0}})],b.prototype,"alias",void 0),(0,l._)([(0,p.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],b.prototype,"defaultValue",void 0),(0,l._)([(0,p.Cb)()],b.prototype,"description",void 0),(0,l._)([(0,y.r)("description")],b.prototype,"readDescription",null),(0,l._)([(0,p.Cb)({types:v.V5,json:{read:{reader:v.im},write:!0}})],b.prototype,"domain",void 0),(0,l._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],b.prototype,"editable",void 0),(0,l._)([(0,p.Cb)({type:d.z8,json:{write:!0}})],b.prototype,"length",void 0),(0,l._)([(0,p.Cb)({type:String,json:{write:!0}})],b.prototype,"name",void 0),(0,l._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],b.prototype,"nullable",void 0),(0,l._)([(0,f.J)(g.v)],b.prototype,"type",void 0),(0,l._)([(0,p.Cb)()],b.prototype,"valueType",void 0),(0,l._)([(0,y.r)("valueType",["description"])],b.prototype,"readValueType",null),(0,l._)([(0,p.Cb)({type:Boolean,json:{read:!1}})],b.prototype,"visible",void 0);var w=b=r=(0,l._)([(0,m.j)("esri.layers.support.Field")],b)},66591:function(e,t,n){n.d(t,{im:function(){return I},V5:function(){return j}});n(93169);var r,i=n(15671),a=n(43144),o=n(60136),u=n(29388),l=n(27366),s=n(84652),c=n(49861),p=(n(25243),n(27135)),d=n(69912),f=n(46784),y=(n(63780),r=function(e){(0,o.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).name=null,r.code=null,r}return(0,a.Z)(n,[{key:"clone",value:function(){return new r({name:this.name,code:this.code})}}]),n}(f.wq));(0,l._)([(0,c.Cb)({type:String,json:{write:!0}})],y.prototype,"name",void 0),(0,l._)([(0,c.Cb)({type:[String,Number],json:{write:!0}})],y.prototype,"code",void 0),y=r=(0,l._)([(0,d.j)("esri.layers.support.CodedValue")],y);var m=new(n(43404).X)({inherited:"inherited",codedValue:"coded-value",range:"range"}),v=function(e){(0,o.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).name=null,r.type=null,r}return(0,a.Z)(n)}(f.wq);(0,l._)([(0,c.Cb)({type:String,json:{write:!0}})],v.prototype,"name",void 0),(0,l._)([(0,p.J)(m)],v.prototype,"type",void 0);var g,h=v=(0,l._)([(0,d.j)("esri.layers.support.Domain")],v),b=g=function(e){(0,o.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).codedValues=null,r.type="coded-value",r}return(0,a.Z)(n,[{key:"getName",value:function(e){var t=null;if(this.codedValues){var n=String(e);this.codedValues.some((function(e){return String(e.code)===n&&(t=e.name),!!t}))}return t}},{key:"clone",value:function(){return new g({codedValues:(0,s.d9)(this.codedValues),name:this.name})}}]),n}(h);(0,l._)([(0,c.Cb)({type:[y],json:{write:!0}})],b.prototype,"codedValues",void 0),(0,l._)([(0,p.J)({codedValue:"coded-value"})],b.prototype,"type",void 0);var w,Z=b=g=(0,l._)([(0,d.j)("esri.layers.support.CodedValueDomain")],b),S=(n(32718),n(10064),w=function(e){(0,o.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).type="inherited",r}return(0,a.Z)(n,[{key:"clone",value:function(){return new w}}]),n}(h));(0,l._)([(0,p.J)({inherited:"inherited"})],S.prototype,"type",void 0);var k,x=S=w=(0,l._)([(0,d.j)("esri.layers.support.InheritedDomain")],S),F=k=function(e){(0,o.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).maxValue=null,r.minValue=null,r.type="range",r}return(0,a.Z)(n,[{key:"clone",value:function(){return new k({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}}]),n}(h);(0,l._)([(0,c.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:function(e,t){return t.range&&t.range[1]}},write:{enabled:!1,overridePolicy:function(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer:function(e,t,n){t[n]=[this.minValue||0,e]}}}})],F.prototype,"maxValue",void 0),(0,l._)([(0,c.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:function(e,t){return t.range&&t.range[0]}},write:{target:"range",writer:function(e,t,n){t[n]=[e,this.maxValue||0]}}}})],F.prototype,"minValue",void 0),(0,l._)([(0,p.J)({range:"range"})],F.prototype,"type",void 0);var T=F=k=(0,l._)([(0,d.j)("esri.layers.support.RangeDomain")],F),j={key:"type",base:h,typeMap:{range:F,"coded-value":Z,inherited:x}};function I(e){if(!e||!e.type)return null;switch(e.type){case"range":return T.fromJSON(e);case"codedValue":return Z.fromJSON(e);case"inherited":return x.fromJSON(e)}return null}},85249:function(e,t,n){n.d(t,{v:function(){return r}});var r=new(n(43404).X)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml",esriFieldTypeBigInteger:"big-integer",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"})},76115:function(e,t,n){n.d(t,{ET:function(){return a},I4:function(){return i},eG:function(){return l},lF:function(){return o},lj:function(){return c},qP:function(){return u},wW:function(){return s}});var r=[252,146,31,255],i={type:"esriSMS",style:"esriSMSCircle",size:6,color:r,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},a={type:"esriSLS",style:"esriSLSSolid",width:.75,color:r},o={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},u={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},l={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},s={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},c={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}}]);
//# sourceMappingURL=7941.e0b242e6.chunk.js.map