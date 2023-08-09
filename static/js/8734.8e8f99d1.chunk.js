"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[8734],{81949:function(e,t,r){function n(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function a(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function u(e,t){return new Float64Array(e,t,16)}r.d(t,{I:function(){return s},a:function(){return u},b:function(){return a},c:function(){return n}});var s=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:a,create:n,createView:u,fromValues:function(e,t,r,n,a,u,s,i,o,c,l,p,d,f,h,y){return[e,t,r,n,a,u,s,i,o,c,l,p,d,f,h,y]}},Symbol.toStringTag,{value:"Module"}))},32035:function(e,t,r){r.d(t,{a:function(){return i},b:function(){return s},c:function(){return a},d:function(){return l},e:function(){return o},n:function(){return p},s:function(){return c},t:function(){return u}});var n=r(77873);function a(e,t,r){u(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function u(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:a;if(e.length/a!==Math.ceil(t.length/u))return n.c.error("source and destination buffers need to have the same number of elements"),e;for(var s=e.length/a,i=r[0],o=r[1],c=r[2],l=r[4],p=r[5],d=r[6],f=r[8],h=r[9],y=r[10],v=r[12],m=r[13],g=r[14],b=0,Z=0,x=0;x<s;x++){var k=t[b],S=t[b+1],R=t[b+2];e[Z]=i*k+l*S+f*R+v,e[Z+1]=o*k+p*S+h*R+m,e[Z+2]=c*k+d*S+y*R+g,b+=u,Z+=a}return e}function s(e,t,r){i(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function i(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:a;if(e.length/a===Math.ceil(t.length/u))for(var s=e.length/a,i=r[0],o=r[1],c=r[2],l=r[3],p=r[4],d=r[5],f=r[6],h=r[7],y=r[8],v=0,m=0,g=0;g<s;g++){var b=t[v],Z=t[v+1],x=t[v+2];e[m]=i*b+l*Z+f*x,e[m+1]=o*b+p*Z+h*x,e[m+2]=c*b+d*Z+y*x,v+=u,m+=a}else n.c.error("source and destination buffers need to have the same number of elements")}function o(e,t,r){c(e.typedBuffer,t,r,e.typedBufferStride)}function c(e,t,r){for(var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,a=Math.min(e.length/n,t.count),u=t.typedBuffer,s=t.typedBufferStride,i=0,o=0,c=0;c<a;c++)e[o]=r*u[i],e[o+1]=r*u[i+1],e[o+2]=r*u[i+2],i+=s,o+=n}function l(e,t){p(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function p(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r,a=Math.min(e.length/r,t.length/n),u=0,s=0,i=0;i<a;i++){var o=t[u],c=t[u+1],l=t[u+2],p=o*o+c*c+l*l;if(p>0){var d=1/Math.sqrt(p);e[s]=d*o,e[s+1]=d*c,e[s+2]=d*l}u+=n,s+=r}}Object.freeze(Object.defineProperty({__proto__:null,normalize:p,normalizeView:l,scale:c,scaleView:o,shiftRight:function(e,t,r){for(var n=Math.min(e.count,t.count),a=e.typedBuffer,u=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,o=0,c=0,l=0;l<n;l++)a[c]=s[o]>>r,a[c+1]=s[o+1]>>r,a[c+2]=s[o+2]>>r,o+=i,c+=u},transformMat3:i,transformMat3View:s,transformMat4:u,transformMat4View:a},Symbol.toStringTag,{value:"Module"}))},80880:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(29439),a=r(15671),u=r(43144),s=r(60136),i=r(29388),o=r(27366),c=r(11582),l=r(46784),p=r(49861),d=(r(25243),r(63780),r(93169),r(27135)),f=r(69912),h=r(71353),y=r(585),v=function(e){(0,s.Z)(r,e);var t=(0,i.Z)(r);function r(e){var n;return(0,a.Z)(this,r),(n=t.call(this,e)).type="georeferenced-relative",n.isRelative=!0,n.isGeoreferenced=!0,n.origin=(0,h.c)(),n}return(0,u.Z)(r,[{key:"getOriginPoint",value:function(e){var t=(0,n.Z)(this.origin,3),r=t[0],a=t[1],u=t[2];return new y.Z({x:r,y:a,z:u,spatialReference:e})}},{key:"setOriginFormPoint",value:function(e){var t=e.x,r=e.y,n=e.z;this.origin=(0,h.f)(t,r,null!==n&&void 0!==n?n:0)}}]),r}((0,c.J)(l.wq));(0,o._)([(0,d.J)({georeferencedRelative:"georeferenced-relative"},{readOnly:!0})],v.prototype,"type",void 0),(0,o._)([(0,p.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],v.prototype,"origin",void 0);var m=v=(0,o._)([(0,f.j)("esri.geometry.support.MeshGeoreferencedRelativeVertexSpace")],v)},77873:function(e,t,r){r.d(t,{c:function(){return n}});var n=r(32718).Z.getLogger("esri.views.3d.support.buffer.math")},17493:function(e,t,r){r.d(t,{CP:function(){return f},JG:function(){return Z},LL:function(){return h},NZ:function(){return y},fV:function(){return x},vj:function(){return S},yT:function(){return w},zE:function(){return R}});var n=r(93433),a=r(74165),u=r(15861),s=r(37762),i=r(15671),o=r(43144),c=r(76200),l=r(63780),p=r(66978),d=r(18277),f=function(){function e(t,r,n){(0,i.Z)(this,e),this.assetName=t,this.assetMimeType=r,this.parts=n}return(0,o.Z)(e,[{key:"equals",value:function(e){return this===e||this.assetName===e.assetName&&this.assetMimeType===e.assetMimeType&&(0,l.fS)(this.parts,e.parts,(function(e,t){return e.equals(t)}))}},{key:"isOnService",value:function(e){return this.parts.every((function(t){return t.isOnService(e)}))}},{key:"makeHash",value:function(){var e,t="",r=(0,s.Z)(this.parts);try{for(r.s();!(e=r.n()).done;){t+=e.value.partHash}}catch(n){r.e(n)}finally{r.f()}return t}},{key:"toBlob",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var r,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==(r=this.parts).length){e.next=3;break}return e.abrupt("return",r[0].toBlob(t));case 3:return e.next=5,Promise.all(r.map((function(e){return e.toBlob(t)})));case 5:return n=e.sent,e.abrupt("return",((0,p.k_)(t),new Blob(n)));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),h=function(){function e(t,r){(0,i.Z)(this,e),this.partUrl=t,this.partHash=r}return(0,o.Z)(e,[{key:"equals",value:function(e){return this===e||this.partUrl===e.partUrl&&this.partHash===e.partHash}},{key:"isOnService",value:function(e){return this.partUrl.startsWith("".concat(e.path,"/assets/"))}},{key:"toBlob",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var r,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.default)(this.partUrl,{responseType:"blob"});case 2:return r=e.sent,n=r.data,e.abrupt("return",((0,p.k_)(t),n));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function y(e){return function(e){if(!e)return!1;if(Array.isArray(e))return e.some(b);return b(e)}(null===e||void 0===e?void 0:e.source)}function v(e){return!!Array.isArray(e)&&e.every((function(e){return e instanceof f}))}var m=/^(model\/gltf\+json)|(model\/gltf-binary)$/,g=/\.(gltf|glb)/i;function b(e){if(e instanceof File){var t=e.type,r=e.name;return m.test(t)||g.test(r)}return m.test(e.assetMimeType)||g.test(e.assetName)}function Z(e,t){return!!e&&function(e,t){if(Array.isArray(e))return e.every((function(e){return k(e,t)}));return k(e,t)}(e.source,t)}function x(e,t){if(e===t)return!0;var r=e.source,a=t.source;if(r===a)return!0;if(v(r)&&v(a)){if(r.length!==a.length)return!1;for(var u=function(e,t){return e.assetName<t.assetName?-1:e.assetName>t.assetName?1:0},s=(0,n.Z)(r).sort(u),i=(0,n.Z)(a).sort(u),o=0;o<s.length;++o)if(!s[o].equals(i[o]))return!1;return!0}return!1}function k(e,t){return e instanceof f&&e.isOnService(t)}function S(e,t){var r,n;return e instanceof File?null!==(r=(0,d.Ow)(e.name,t))&&void 0!==r?r:(0,d.S0)(e.type,t):null!==(n=(0,d.S0)(e.assetMimeType,t))&&void 0!==n?n:(0,d.Ow)(e.assetName,t)}function R(e){return Array.isArray(e)?e:[e]}function w(e){return!!e.original}},60480:function(e,t,r){r.d(t,{g:function(){return n}});var n={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},68734:function(e,t,r){r.r(t),r.d(t,{default:function(){return te}});var n=r(29439),a=r(37762),u=r(93433),s=r(1413),i=r(74165),o=r(15861),c=r(15671),l=r(43144),p=r(60136),d=r(29388),f=r(27366),h=(r(59486),r(52639)),y=r(19545),v=r(76200),m=r(62044),g=r(63780),b=r(10064),Z=r(93169),x=r(43404),k=r(54472),S=r(32718),R=r(18202),w=r(66978),F=r(68860),A=r(35995),_=r(71907),O=r(49861),q=(r(25243),r(69912)),E=r(53866),I=r(52587),T=r(77981),M=r(14226),N=r(81949),C=r(80880),J=r(32035);function B(e){if(e.vertexSpace.isRelative)return e.clone();var t=e.anchor.clone(),r=(0,M.f)(P,[-t.x,-t.y,-t.z]),n=new C.Z({origin:[t.x,t.y,t.z]}),a=e.cloneWithVertexSpace(n),u=a.vertexAttributes.position;return a.vertexAttributes.position=(0,J.t)(new Float64Array(u.length),u,r),a.vertexAttributesChanged(),a}var P=(0,N.c)(),j=r(17493),U=r(29887),D=r(63543),Q=r(89623),G=r(25899),L=r(18277),z=r(77946),V=r(62204),H=r(86638),W=r(78952),X=new x.X({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),$=new Set(["Feature Layer","Oriented Imagery Layer","Table"]),Y=new x.X({Started:"published",Publishing:"publishing",Stopped:"unavailable"}),K=function(e){(0,p.Z)(f,e);var t=(0,d.Z)(f);function f(){var e;return(0,c.Z)(this,f),(e=t.apply(this,arguments)).type="feature-layer",e.refresh=(0,w.Ds)((0,o.Z)((0,i.Z)().mark((function t(){var r,n,a,u;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.load();case 2:if(null!=(a=null===(r=e.sourceJSON.editingInfo)||void 0===r?void 0:r.lastEditDate)){t.next=5;break}return t.abrupt("return",{dataChanged:!0,updates:{}});case 5:return t.prev=5,t.next=8,e._fetchService(null);case 8:t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(5),t.abrupt("return",{dataChanged:!0,updates:{}});case 13:return u=a!==(null===(n=e.sourceJSON.editingInfo)||void 0===n?void 0:n.lastEditDate),t.abrupt("return",{dataChanged:u,updates:u?{editingInfo:e.sourceJSON.editingInfo,extent:e.sourceJSON.extent}:null});case 15:case"end":return t.stop()}}),t,null,[[5,10]])})))),e._ongoingAssetUploads=new Map,e}return(0,l.Z)(f,[{key:"load",value:function(e){var t=null!=e?e.signal:null,r=this.layer.sourceJSON;return this.addResolvingPromise(this._fetchService(r,t)),Promise.resolve(this)}},{key:"queryTask",get:function(){var e,t,r=this.layer,n=r.capabilities,a=r.parsedUrl,u=r.dynamicDataSource,s=r.infoFor3D,i=r.gdbVersion,o=r.spatialReference,c=r.fieldsIndex,l=(0,Z.Z)("featurelayer-pbf")&&(null===n||void 0===n?void 0:n.query.supportsFormatPBF)&&null==s,p=null!==(e=null===n||void 0===n||null===(t=n.operations)||void 0===t?void 0:t.supportsQueryAttachments)&&void 0!==e&&e;return new Q.Z({url:a.path,pbfSupported:l,fieldsIndex:c,infoFor3D:s,dynamicDataSource:u,gdbVersion:i,sourceSpatialReference:o,queryAttachmentsSupported:p})}},{key:"addAttachment",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n,a,u,s,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return n=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+n+"/addAttachment",u=this._getLayerRequestOptions(),s=this._getFormDataForAttachment(r,u.query),e.prev=3,e.next=6,(0,v.default)(a,{body:s});case 6:return o=e.sent,e.abrupt("return",this._createFeatureEditResult(o.data.addAttachmentResult));case 10:throw e.prev=10,e.t0=e.catch(3),this._createAttachmentErrorResult(n,e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"updateAttachment",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r,n){var a,u,s,o,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return a=t.attributes[this.layer.objectIdField],u=this.layer.parsedUrl.path+"/"+a+"/updateAttachment",s=this._getLayerRequestOptions({query:{attachmentId:r}}),o=this._getFormDataForAttachment(n,s.query),e.prev=3,e.next=6,(0,v.default)(u,{body:o});case 6:return c=e.sent,e.abrupt("return",this._createFeatureEditResult(c.data.updateAttachmentResult));case 10:throw e.prev=10,e.t0=e.catch(3),this._createAttachmentErrorResult(a,e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n,a,u,s,o,c,l,p,d,f,h,m,b,Z,x,k,S,R,w,F,A,_,O,q,E=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(p=this.layer,d=p.infoFor3D,h=(f=null!=d)||null!==(n=null===r||void 0===r?void 0:r.globalIdUsed)&&void 0!==n&&n,!f){e.next=12;break}return e.next=9,this._uploadMeshesAndGetAssetMapEditsJSON(t);case 9:e.t0=e.sent,e.next=13;break;case 12:e.t0=null;case 13:return m=e.t0,b=null!==(a=null===(u=t.addFeatures)||void 0===u?void 0:u.map((function(e){return E._getFeatureJSON(e,d)})))&&void 0!==a?a:[],e.next=17,Promise.all(b);case 17:return Z=e.sent.filter(g.pC),x=null!==(s=null===(o=t.updateFeatures)||void 0===o?void 0:o.map((function(e){return E._getFeatureJSON(e,d)})))&&void 0!==s?s:[],e.next=21,Promise.all(x);case 21:return k=e.sent.filter(g.pC),S=this._getFeatureIds(t.deleteFeatures,h),(0,V.P)(Z,k,p.spatialReference),e.next=26,this._getAttachmentEditsJSON(t);case 26:if(R=e.sent,w=p.capabilities.editing.supportsAsyncApplyEdits&&f,F={gdbVersion:(null===r||void 0===r?void 0:r.gdbVersion)||p.gdbVersion,rollbackOnFailure:null===r||void 0===r?void 0:r.rollbackOnFailureEnabled,useGlobalIds:h,returnEditMoment:null===r||void 0===r?void 0:r.returnEditMoment,usePreviousEditMoment:null===r||void 0===r?void 0:r.usePreviousEditMoment,sessionId:null===r||void 0===r?void 0:r.sessionId,async:w},null!==r&&void 0!==r&&r.returnServiceEditsOption?(F.edits=JSON.stringify([{id:p.layerId,adds:Z,updates:k,deletes:S,attachments:R,assetMaps:m}]),F.returnServiceEditsOption=X.toJSON(null===r||void 0===r?void 0:r.returnServiceEditsOption),F.returnServiceEditsInSourceSR=null===r||void 0===r?void 0:r.returnServiceEditsInSourceSR):(F.adds=Z.length?JSON.stringify(Z):null,F.updates=k.length?JSON.stringify(k):null,F.deletes=S.length?h?JSON.stringify(S):S.join(","):null,F.attachments=R&&JSON.stringify(R),F.assetMaps=null!=m?JSON.stringify(m):void 0),A=this._getLayerRequestOptions({method:"post",query:F}),_=null!==r&&void 0!==r&&r.returnServiceEditsOption?p.url:p.parsedUrl.path,!w){e.next=38;break}return e.next=35,this._asyncApplyEdits(_+"/applyEdits",A);case 35:e.t1=e.sent,e.next=41;break;case 38:return e.next=40,(0,v.default)(_+"/applyEdits",A);case 40:e.t1=e.sent;case 41:if(O=e.t1,null!==(c=p.capabilities.operations)&&void 0!==c&&c.supportsEditing||null===(l=p.effectiveCapabilities)||void 0===l||null===(l=l.operations)||void 0===l||!l.supportsEditing){e.next=46;break}return q=null===y.id||void 0===y.id?void 0:y.id.findCredential(p.url),e.next=46,null===q||void 0===q?void 0:q.refreshToken();case 46:return e.abrupt("return",this._createEditsResult(O));case 47:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"deleteAttachments",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return n=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+n+"/deleteAttachments",e.prev=3,e.next=6,(0,v.default)(a,this._getLayerRequestOptions({query:{attachmentIds:r.join(",")},method:"post"}));case 6:return e.abrupt("return",e.sent.data.deleteAttachmentResults.map(this._createFeatureEditResult));case 9:throw e.prev=9,e.t0=e.catch(3),this._createAttachmentErrorResult(n,e.t0);case 12:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"fetchRecomputedExtents",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.signal;return this.load({signal:r}).then((0,o.Z)((0,i.Z)().mark((function r(){var n,a,u,o,c,l,p,d,f,h,y;return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e._getLayerRequestOptions((0,s.Z)((0,s.Z)({},t),{},{query:{returnUpdates:!0}})),a=e.layer,u=a.layerId,o=a.url,r.next=6,(0,v.default)("".concat(o,"/").concat(u),n);case 6:return c=r.sent,l=c.data,p=l.id,d=l.extent,f=l.fullExtent,h=l.timeExtent,y=d||f,r.abrupt("return",{id:p,fullExtent:y&&E.Z.fromJSON(y),timeExtent:h&&m.Z.fromJSON({start:h[0],end:h[1]})});case 14:case"end":return r.stop()}}),r)}))))}},{key:"queryAttachments",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var r,n,a=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},e.next=3,this.load();case 3:return n=this._getLayerRequestOptions(r),e.abrupt("return",this.queryTask.executeAttachmentQuery(t,n));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.execute(t,(0,s.Z)((0,s.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryFeaturesJSON",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeJSON(t,(0,s.Z)((0,s.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForIds(t,(0,s.Z)((0,s.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForCount(t,(0,s.Z)((0,s.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForExtent(t,(0,s.Z)((0,s.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryRelatedFeatures",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeRelationshipQuery(t,(0,s.Z)((0,s.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryRelatedFeaturesCount",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeRelationshipQueryForCount(t,(0,s.Z)((0,s.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryTopFeatures",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeTopFeaturesQuery(t,(0,s.Z)((0,s.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryTopObjectIds",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForTopIds(t,(0,s.Z)((0,s.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryTopExtents",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForTopExtents(t,(0,s.Z)((0,s.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryTopCount",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForTopCount(t,(0,s.Z)((0,s.Z)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"fetchPublishingStatus",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var t,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,G.M8)(this.layer.url)){e.next=2;break}return e.abrupt("return","unavailable");case 2:return t=(0,A.v_)(this.layer.url,"status"),e.next=5,(0,v.default)(t,{query:{f:"json"}});case 5:return r=e.sent,e.abrupt("return",Y.fromJSON(r.data.status));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"uploadAssets",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,n){var a,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(5532).then(r.bind(r,25532));case 2:return a=e.sent,u=a.uploadAssets,e.abrupt("return",u(t,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},n));case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_asyncApplyEdits",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.default)(t,r);case 2:n=e.sent.data.statusUrl;case 3:return e.next=5,(0,v.default)(n,{query:{f:"json"},responseType:"json"});case 5:a=e.sent.data,e.t0=a.status,e.next="Completed"===e.t0?9:"CompletedWithErrors"===e.t0?10:"Failed ImportChanges"===e.t0||"InProgress"===e.t0||"Pending"===e.t0||"ExportAttachments"===e.t0||"ExportChanges"===e.t0||"ExportingData"===e.t0||"ExportingSnapshot"===e.t0||"ImportAttachments"===e.t0||"ProvisioningReplica"===e.t0||"UnRegisteringReplica"===e.t0?11:12;break;case 9:return e.abrupt("return",(0,v.default)(a.resultUrl,{query:{f:"json"},responseType:"json"}));case 10:throw new b.Z("async-applyEdits-failed","asynchronous applyEdits call failed.");case 11:return e.abrupt("break",13);case 12:throw new b.Z("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)");case 13:return e.next=15,(0,w.e4)(ee);case 15:e.next=3;break;case 17:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_createRequestQueryOptions",value:function(e){var t=(0,s.Z)((0,s.Z)({},this.layer.customParameters),{},{token:this.layer.apiKey},null===e||void 0===e?void 0:e.query);return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}},{key:"_fetchService",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n,a,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=6;break}return e.next=3,(0,v.default)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:(0,Z.Z)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:r}));case 3:n=e.sent,a=n.data,t=a;case 6:return e.next=8,this._patchServiceJSON(t,r);case 8:if(this.sourceJSON=e.sent,u=t.type,$.has(u)){e.next=12;break}throw new b.Z("feature-layer-source:unsupported-type",'Source type "'.concat(u,'" is not supported'));case 12:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_patchServiceJSON",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n,a,u,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Table"===t.type||!t.geometryType||null!==t&&void 0!==t&&null!==(n=t.drawingInfo)&&void 0!==n&&n.renderer||t.defaultSymbol||(a=(0,D.bU)(t.geometryType).renderer,(0,R.RB)("drawingInfo.renderer",a,t)),"esriGeometryMultiPatch"===t.geometryType&&t.infoFor3D&&(t.geometryType="mesh"),null!=t.extent){e.next=13;break}return e.prev=2,e.next=5,(0,v.default)(this.layer.url,this._getLayerRequestOptions({signal:r}));case 5:u=e.sent,(s=u.data).spatialReference&&(t.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:s.spatialReference}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),(0,w.r9)(e.t0);case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}}),e,this,[[2,10]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_getFeatureJSON",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n,a,u,o,c,l,p,d,f,h,y,v,m,g;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.geometry,a=(0,s.Z)({},t.attributes),null==r||"mesh"!==(null===n||void 0===n?void 0:n.type)){e.next=8;break}return o=r.transformFieldRoles,c=n.origin,l=n.spatialReference,p=n.transform,d=this.layer.spatialReference,e.next=5,(0,I.initializeProjection)(l,d);case 5:return f=(0,I.project)(c,d),a[o.originX]=f.x,a[o.originY]=f.y,a[o.originZ]=null!==(u=f.z)&&void 0!==u?u:0,null!=p&&(h=p.translation,y=p.scale,v=p.rotation,m=n.vertexSpace,g=m.isGeoreferenced?1:(0,F.r6)(l)/(0,F.r6)(d),a[o.translationX]=h[0]*g,a[o.translationY]=-h[2]*g,a[o.translationZ]=h[1]*g,a[o.scaleX]=y[0],a[o.scaleY]=y[2],a[o.scaleZ]=y[1],a[o.rotationX]=v[0],a[o.rotationY]=v[2],a[o.rotationZ]=v[1],a[o.rotationDeg]=v[3]),e.abrupt("return",{geometry:null,attributes:a});case 8:return e.abrupt("return",null==n?{attributes:a}:"mesh"===n.type||"extent"===n.type?null:{geometry:n.toJSON(),attributes:a});case 9:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_getAttachmentEditsJSON",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var r,n,a,s,o,c,l=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all((null!==(r=t.addAttachments)&&void 0!==r?r:[]).map((function(e){return l._getAttachmentEditJSON(e)})));case 2:return s=e.sent,e.next=5,Promise.all((null!==(n=t.updateAttachments)&&void 0!==n?n:[]).map((function(e){return l._getAttachmentEditJSON(e)})));case 5:return o=e.sent,c=null!==(a=t.deleteAttachments)&&void 0!==a?a:[],e.abrupt("return",s.length||o.length||c.length?{adds:s,updates:o,deletes:(0,u.Z)(c)}:null);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getAttachmentEditJSON",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var r,n,a,u,s,o,c,l,p;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.feature,n=t.attachment,a=n.globalId,u=n.name,s=n.contentType,o=n.data,c=n.uploadId,l={globalId:a,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null},r&&(l.parentGlobalId="attributes"in r?r.attributes&&r.attributes[this.layer.globalIdField]:r.globalId),!c){e.next=5;break}l.uploadId=c,e.next=10;break;case 5:if(!o){e.next=10;break}return e.next=8,(0,A.IR)(o);case 8:(p=e.sent)&&(l.contentType=p.mediaType,l.data=p.data),o instanceof File&&(l.name=o.name);case 10:return e.abrupt("return",(u&&(l.name=u),s&&(l.contentType=s),l));case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_uploadMeshesAndGetAssetMapEditsJSON",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var r,u,s,o,c,l,p,d,f,h,y,v,m;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(r=t.addAssetFeatures)&&void 0!==r&&r.length){e.next=3;break}return e.abrupt("return",null);case 3:return e.next=5,this._filterRedundantAssetMaps(r);case 5:if(u=e.sent,null!==r&&void 0!==r&&r.length){e.next=8;break}return e.abrupt("return",null);case 8:s=new Array,o=new Map,c=(0,a.Z)(u);try{for(c.s();!(l=c.n()).done;)p=l.value,d=p.geometry,d.vertexSpace.isRelative?s.push(d):(f=B(d),o.set(f,d),p.geometry=f,s.push(f))}catch(i){c.e(i)}finally{c.f()}return e.next=13,this.uploadAssets(s);case 13:h=(0,a.Z)(o);try{for(h.s();!(y=h.n()).done;)v=(0,n.Z)(y.value,2),m=v[0],v[1].addExternalSources(m.metadata.externalSources.items)}catch(i){h.e(i)}finally{h.f()}return e.abrupt("return",{adds:this._getAssetMapEditsJSON(u),updates:[],deletes:[]});case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getAssetMapEditsJSON",value:function(e){var t,r=new Array,n=this.layer.globalIdField,u=this.layer.parsedUrl,s=(0,a.Z)(e);try{for(s.s();!(t=s.n()).done;){var i,o=t.value,c=o.geometry,l=c.metadata.getExternalSourcesOnService(u),p=o.getAttribute(n);if(0!==l.length){var d,f=(null!==(i=l.find(j.yT))&&void 0!==i?i:l[0]).source,h=c.vertexSpace.isGeoreferenced?["PROJECT_VERTICES"]:[],y=(0,a.Z)(f);try{for(y.s();!(d=y.n()).done;){var v=d.value;1===v.parts.length?r.push({globalId:(0,_.z)(),parentGlobalId:p,assetName:v.assetName,assetHash:v.parts[0].partHash,flags:h}):S.Z.getLogger(this).error("Skipping asset ".concat(v.assetName,". It does not have exactly one part, so we cannot map it to a feature."))}}catch(m){y.e(m)}finally{y.f()}}else S.Z.getLogger(this).error("Skipping feature ".concat(p,". The mesh it is associated with has not been uploaded to the service and cannot be mapped to it."))}}catch(m){s.e(m)}finally{s.f()}return r}},{key:"_getFeatureIds",value:function(e,t){if(!e||0===e.length)return[];if(t&&(0,U.isFeatureIdentifierArrayWithGlobalId)(e))return e.map((function(e){return e.globalId}));if((0,U.isFeatureIdentifierArrayWithObjectId)(e))return e.map((function(e){return e.objectId}));var r=this.layer,n=t?r.globalIdField:r.objectIdField;return n?e.map((function(e){return e.getAttribute(n)})):[]}},{key:"_createEditsResult",value:function(e){var t,r,n,u,s,i,o,c,l,p=this,d=e.data,f=this.layer.layerId,h=[],y=null;if(Array.isArray(d)){var v,m=(0,a.Z)(d);try{for(m.s();!(v=m.n()).done;){var g,b,Z,x=v.value;h.push({id:x.id,editedFeatures:x.editedFeatures}),x.id===f&&(y={addResults:null!==(g=x.addResults)&&void 0!==g?g:[],updateResults:null!==(b=x.updateResults)&&void 0!==b?b:[],deleteResults:null!==(Z=x.deleteResults)&&void 0!==Z?Z:[],attachments:x.attachments,editMoment:x.editMoment})}}catch(N){m.e(N)}finally{m.f()}}else y=d;var k=null===(t=y)||void 0===t?void 0:t.assetMaps;if(k){var R,w=(0,a.Z)(k.addResults);try{for(w.s();!(R=w.n()).done;){var F=R.value;F.success||S.Z.getLogger(this).error("Failed to map asset to feature with globalId ".concat(F.globalId,"."))}}catch(N){w.e(N)}finally{w.f()}var A,_=(0,a.Z)(k.updateResults);try{for(_.s();!(A=_.n()).done;){var O=A.value;O.success||S.Z.getLogger(this).error("Failed to map asset to feature with globalId ".concat(O.globalId,"."))}}catch(N){_.e(N)}finally{_.f()}}var q=null===(r=y)||void 0===r?void 0:r.attachments,E={addFeatureResults:null!==(n=null===(u=y)||void 0===u||null===(u=u.addResults)||void 0===u?void 0:u.map(this._createFeatureEditResult,this))&&void 0!==n?n:[],updateFeatureResults:null!==(s=null===(i=y)||void 0===i||null===(i=i.updateResults)||void 0===i?void 0:i.map(this._createFeatureEditResult,this))&&void 0!==s?s:[],deleteFeatureResults:null!==(o=null===(c=y)||void 0===c||null===(c=c.deleteResults)||void 0===c?void 0:c.map(this._createFeatureEditResult,this))&&void 0!==o?o:[],addAttachmentResults:q&&q.addResults?q.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:q&&q.updateResults?q.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:q&&q.deleteResults?q.deleteResults.map(this._createFeatureEditResult,this):[]};if(null!==(l=y)&&void 0!==l&&l.editMoment&&(E.editMoment=y.editMoment),h.length>0){E.editedFeatureResults=[];var I,T=(0,a.Z)(h);try{var M=function(){var e,t,r,n=I.value,a=n.editedFeatures,u=null!==a&&void 0!==a&&a.spatialReference?new W.Z(a.spatialReference):null;E.editedFeatureResults.push({layerId:n.id,editedFeatures:{adds:(null===a||void 0===a||null===(e=a.adds)||void 0===e?void 0:e.map((function(e){return p._createEditedFeature(e,u)})))||[],updates:(null===a||void 0===a||null===(t=a.updates)||void 0===t?void 0:t.map((function(e){return{original:p._createEditedFeature(e[0],u),current:p._createEditedFeature(e[1],u)}})))||[],deletes:(null===a||void 0===a||null===(r=a.deletes)||void 0===r?void 0:r.map((function(e){return p._createEditedFeature(e,u)})))||[],spatialReference:u}})};for(T.s();!(I=T.n()).done;)M()}catch(N){T.e(N)}finally{T.f()}}return E}},{key:"_createEditedFeature",value:function(e,t){return new h.Z({attributes:e.attributes,geometry:(0,T.im)((0,s.Z)((0,s.Z)({},e.geometry),{},{spatialReference:t}))})}},{key:"_createFeatureEditResult",value:function(e){var t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new b.Z("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}},{key:"_createAttachmentErrorResult",value:function(e,t){var r=t.details.messages&&t.details.messages[0]||t.message,n=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new b.Z("feature-layer-source:attachment-failure",r,{code:n})}}},{key:"_getFormDataForAttachment",value:function(e,t){var r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(var n in t){var a=t[n];null!=a&&(r.set?r.set(n,a):r.append(n,a))}return r}},{key:"_getLayerRequestOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.layer,r=t.parsedUrl,n=t.gdbVersion,a=t.dynamicDataSource;return(0,s.Z)((0,s.Z)({},e),{},{query:(0,s.Z)((0,s.Z)({gdbVersion:n,layer:a?JSON.stringify({source:a}):void 0},r.query),{},{f:"json"},this._createRequestQueryOptions(e)),responseType:"json"})}},{key:"_filterRedundantAssetMaps",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var r,n,s,o,c,l,p,d,f,h,y,v,m,b,Z,x,k,S;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.layer,n=r.globalIdField,s=r.infoFor3D,o=r.parsedUrl,null!=s&&null!=n){e.next=3;break}return e.abrupt("return",t);case 3:if(null!=(c=(0,L.$6)(s))){e.next=6;break}return e.abrupt("return",t);case 6:l=(0,A.v_)(o.path,"../".concat(c.id)),p=new Array,d=new Array,f=(0,a.Z)(t);try{for(f.s();!(h=f.n()).done;)(y=h.value).geometry.metadata.getExternalSourcesOnService(o).length>0?d.push(y):p.push(y)}catch(i){f.e(i)}finally{f.f()}if(v=d.map((function(e){return e.getAttribute(n)})).filter(g.pC),0!==v.length){e.next=12;break}return e.abrupt("return",t);case 12:return m=s.assetMapFieldRoles,b=m.parentGlobalId,Z=m.assetHash,(x=new H.Z).where="".concat(b," IN (").concat(v.map((function(e){return"'".concat(e,"'")})),")"),x.outFields=[Z,b],x.returnGeometry=!1,e.next=16,(0,z.e)(l,x);case 16:return k=e.sent,S=k.features,e.abrupt("return",0===S.length?t:[].concat(p,(0,u.Z)(d.filter((function(e){var t=e.getAttribute(n);if(!t)return!0;var r=e.geometry.metadata,a=S.filter((function(e){return e.getAttribute(b)===t}));if(0===a.length)return!0;var u=a.map((function(e){return e.getAttribute(Z)}));return r.getExternalSourcesOnService(o).flatMap((function(e){return e.source.flatMap((function(e){return e.parts.map((function(e){return e.partHash}))}))})).some((function(e){return u.every((function(t){return e!==t}))}))})))));case 19:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),f}(k.Z);(0,f._)([(0,O.Cb)()],K.prototype,"type",void 0),(0,f._)([(0,O.Cb)({constructOnly:!0})],K.prototype,"layer",void 0),(0,f._)([(0,O.Cb)({readOnly:!0})],K.prototype,"queryTask",null),K=(0,f._)([(0,q.j)("esri.layers.graphics.sources.FeatureLayerSource")],K);var ee=1e3,te=K},63543:function(e,t,r){r.d(t,{Dm:function(){return d},Hq:function(){return f},MS:function(){return h},bU:function(){return c}});var n=r(4942),a=r(1413),u=r(93169),s=r(84652),i=r(60480),o=r(76115);function c(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}var l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,p=1;function d(e,t){if((0,u.Z)("esri-csp-restrictions"))return function(){return(0,a.Z)((0,n.Z)({},t,null),e)};try{var r="this.".concat(t," = null;");for(var s in e)r+="this".concat(l.test(s)?".".concat(s):'["'.concat(s,'"]')," = ").concat(JSON.stringify(e[s]),";");var i=new Function("\n      return class AttributesClass$".concat(p++," {\n        constructor() {\n          ").concat(r,";\n        }\n      }\n    "))();return function(){return new i}}catch(o){return function(){return(0,a.Z)((0,n.Z)({},t,null),e)}}}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function h(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:i.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1}}}}}]);
//# sourceMappingURL=8734.8e8f99d1.chunk.js.map