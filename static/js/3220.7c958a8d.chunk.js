"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[3220],{67077:function(e,t,r){function n(){return[0,0,0,0]}function i(e,t,r,n){return[e,t,r,n]}function a(e,t){return new Float64Array(e,t,4)}function o(){return[0,0,0,0]}function u(){return i(1,1,1,1)}function f(){return i(1,0,0,0)}function c(){return i(0,1,0,0)}function s(){return i(0,0,1,0)}function l(){return i(0,0,0,1)}r.d(t,{a:function(){return a},c:function(){return n},f:function(){return i}});var d=[0,0,0,0],h=u(),y=f(),p=c(),v=s(),w=l();Object.freeze(Object.defineProperty({__proto__:null,ONES:h,UNIT_W:w,UNIT_X:y,UNIT_Y:p,UNIT_Z:v,ZEROS:d,clone:function(e){return[e[0],e[1],e[2],e[3]]},create:n,createView:a,fromArray:function(e){for(var t=[0,0,0,0],r=Math.min(4,e.length),n=0;n<r;++n)t[n]=e[n];return t},fromValues:i,ones:u,unitW:l,unitX:f,unitY:c,unitZ:s,zeros:o},Symbol.toStringTag,{value:"Module"}))},27811:function(e,t,r){r.d(t,{AJ:function(){return s},If:function(){return p},QM:function(){return h},hy:function(){return y},k0:function(){return c},nu:function(){return f},uI:function(){return d},wx:function(){return v}});var n=r(37762),i=r(16889),a=r(17842),o=r(90045),u=r(67077),f=2.4;function c(e){return(0,a.Wz)(e*f)}function s(e){return(0,a.F2)(e)/f}function l(e,t,r,n){var a=t.color,u=t.ratio,f=r.color,c=r.ratio;if(c===u){var s=1e-6;1===c?u-=s:c+=s}var l=(0,i.uZ)((n-u)/(c-u),0,1);(0,o.l)(e,a.toArray(),f.toArray(),l)}function d(e){var t=new Uint8ClampedArray(2048);if(e=e.filter((function(e){var t=e.ratio;return t>=0&&t<=1})).sort((function(e,t){return e.ratio-t.ratio})).map((function(e){var t=e.color,r=e.ratio;return{color:t,ratio:Math.max(r,.001)}})),e.length<1)return t;for(var r=e[0],n=e[0],i=1,a=(0,u.c)(),o=0;o<512;o++){for(var f=(o+.5)/512;f>n.ratio&&i<e.length;)r=n,n=e[i++];l(a,r,n,f),t.set(a,4*o)}return t}function h(e,t,r,i){var o,u,f=t.radius,c=t.fieldOffset,s=t.field,l=Math.round((0,a.F2)(f)),d=new Float64Array(r*i),h=Number.NEGATIVE_INFINITY,y=function(e,t){return null!=e?"string"==typeof t?function(t){return-1*+t.readAttribute(e)}:function(r){return+r.readAttribute(e)+t}:function(e){return 1}}(s,c),v=new Set,w=(0,n.Z)(e);try{for(w.s();!(u=w.n()).done;)for(var m=u.value.getCursor();m.next();){var M=m.getObjectId();if(!v.has(M)){v.add(M);var k=m.readLegacyPointGeometry(),_=128;if(!(k.x<-_||k.x>=r+_||k.y<-_||k.y>i+_))for(var b=+y(m),Z=Math.max(0,Math.round(k.x)-l),g=Math.max(0,Math.round(k.y)-l),T=Math.min(i,Math.round(k.y)+l),I=Math.min(r,Math.round(k.x)+l),U=g;U<T;U++)for(var x=Z;x<I;x++){var O=U*r+x,S=p(k.x-x,k.y-U,l);(o=d[O]+=S*b)>h&&(h=o)}}}}catch(A){w.e(A)}finally{w.f()}return{matrix:d.buffer,max:h}}function y(e,t,r,n,a,o){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);var u=e.getImageData(0,0,t,t);r&&n&&u.data.set(new Uint8ClampedArray(function(e,t,r,n,a){for(var o=new Uint32Array(e*e),u=("buffer"in t?t:new Float64Array(t)),f=("buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer)),c=f.length/(a-n),s=0;s<u.length;s++){var l=u[s],d=Math.floor((l-n)*c);o[s]=f[(0,i.uZ)(d,0,f.length-1)]}return o.buffer}(t,r,n,a,o))),e.putImageData(u,0,0)}function p(e,t,r){var n=Math.sqrt(Math.pow(e,2)+Math.pow(t,2))/r;return n>1?0:3/(Math.PI*Math.pow(r,2))*Math.pow(1-Math.pow(n,2),2)}function v(e,t){return"function"==typeof e?e:e?"string"==typeof t?function(t){return-1*+t[e]}:function(r){return+r[e]+t}:function(){return 1}}},81735:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(15671),i=r(43144),a=r(60136),o=r(29388),u=r(27366),f=r(41691),c=r(49861),s=(r(25243),r(63780),r(93169),r(69912)),l=function(e){(0,a.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"initialize",value:function(){}},{key:"destroy",value:function(){}},{key:"supportsTileUpdates",get:function(){return!1}},{key:"spatialReference",get:function(){var e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}}]),r}(f.r);(0,u._)([(0,c.Cb)({readOnly:!0})],l.prototype,"supportsTileUpdates",null),(0,u._)([(0,c.Cb)({constructOnly:!0})],l.prototype,"remoteClient",void 0),(0,u._)([(0,c.Cb)({constructOnly:!0})],l.prototype,"service",void 0),(0,u._)([(0,c.Cb)()],l.prototype,"spatialReference",null),(0,u._)([(0,c.Cb)({constructOnly:!0})],l.prototype,"tileInfo",void 0),(0,u._)([(0,c.Cb)({constructOnly:!0})],l.prototype,"tileStore",void 0);var d=l=(0,u._)([(0,s.j)("esri.views.2d.layers.features.processors.BaseProcessor")],l)},63220:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(1413),i=r(29439),a=r(37762),o=r(74165),u=r(15861),f=r(60136),c=r(29388),s=r(43144),l=r(15671),d=r(27366),h=(r(93169),r(92026)),y=(r(32718),r(25243),r(63780),r(10064),r(69912)),p=r(48732),v=r(27811),w=r(94109),m=r(81735),M=r(35092),k=(0,s.Z)((function e(t,r){(0,l.Z)(this,e),this.offset=t,this.extent=r}));function _(e){var t=e.key,r=new Map,n=256,i=w.I_,a=e.tileInfoView.tileInfo.isWrappable;return r.set((0,M.M)(t,-1,-1,a).id,new k([-i,-i],[i-n,i-n,i,i])),r.set((0,M.M)(t,0,-1,a).id,new k([0,-i],[0,i-n,i,i])),r.set((0,M.M)(t,1,-1,a).id,new k([i,-i],[0,i-n,n,i])),r.set((0,M.M)(t,-1,0,a).id,new k([-i,0],[i-n,0,i,i])),r.set((0,M.M)(t,1,0,a).id,new k([i,0],[0,0,n,i])),r.set((0,M.M)(t,-1,1,a).id,new k([-i,i],[i-n,0,i,n])),r.set((0,M.M)(t,0,1,a).id,new k([0,i],[0,0,i,n])),r.set((0,M.M)(t,1,1,a).id,new k([i,i],[0,0,n,n])),r}var b=function(e){(0,f.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;return(0,l.Z)(this,r),(e=t.apply(this,arguments)).type="heatmap",e._tileKeyToFeatureSets=new Map,e}return(0,s.Z)(r,[{key:"initialize",value:function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}},{key:"update",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t,r){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("heatmap"===(n=r.schema.processors[0]).type){e.next=3;break}return e.abrupt("return");case 3:(0,p.Hg)(this._schema,n)&&(t.mesh=!0,this._schema=n);case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"onTileUpdate",value:function(e){var t,r=(0,a.Z)(e.removed);try{for(r.s();!(t=r.n()).done;){var n=t.value;this._tileKeyToFeatureSets.delete(n.key.id)}}catch(i){r.e(i)}finally{r.f()}}},{key:"onTileClear",value:function(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}},{key:"onTileMessage",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t,r,a){var u,f,c,s,l,d;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._tileKeyToFeatureSets.has(t.key.id)||this._tileKeyToFeatureSets.set(t.key.id,new Map),(u=this._tileKeyToFeatureSets.get(t.key.id))&&null!=r.addOrUpdate&&r.addOrUpdate.hasFeatures&&u.set(r.addOrUpdate.instance,r),!r.end){e.next=7;break}return f=[],c=_(t),this._tileKeyToFeatureSets.forEach((function(e,r){if(r===t.key.id)e.forEach((function(e){return(0,h.yw)(e.addOrUpdate,(function(e){return f.push(e)}))}));else if(c.has(r)){var n=c.get(r),a=(0,i.Z)(n.offset,2),o=a[0],u=a[1];e.forEach((function(e){return(0,h.yw)(e.addOrUpdate,(function(e){var t=e.transform(o,u,1,1);f.push(t)}))}))}})),s=(0,v.QM)(f,this._schema.mesh,512,512),l={tileKey:t.key.id,intensityInfo:s},d=[s.matrix],e.abrupt("return",this.remoteClient.invoke("tileRenderer.onTileData",l,(0,n.Z)((0,n.Z)({},a),{},{transferList:d})));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"onTileError",value:function(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)}}]),r}(m.Z),Z=b=(0,d._)([(0,y.j)("esri.views.2d.layers.features.processors.HeatmapProcessor")],b)},35092:function(e,t,r){function n(e,t,r,n){var i=e.clone(),a=1<<i.level,o=i.col+t,u=i.row+r;return n&&o<0?(i.col=o+a,i.world-=1):o>=a?(i.col=o-a,i.world+=1):i.col=o,i.row=u,i}r.d(t,{M:function(){return n}})}}]);
//# sourceMappingURL=3220.7c958a8d.chunk.js.map