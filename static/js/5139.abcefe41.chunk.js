"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[5139],{67593:function(e,t,r){r.d(t,{E:function(){return f},H:function(){return d}});var n=r(29439),i=r(22753),a=r(11873),s=r(88396),l=r(11186),o=(0,r(71353).c)(),u=(0,a.c)(),c=(0,a.c)(),h=(0,a.c)();function d(e,t,r){return(0,l.s)(o,t[0],t[1],1),(0,l.t)(o,o,(0,i.t)(u,r)),0===o[2]?(0,s.s)(e,o[0],o[1]):(0,s.s)(e,o[0]/o[2],o[1]/o[2])}function f(e,t,r){return v(c,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),v(h,r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7]),(0,i.m)(e,(0,i.a)(c,c),h),0!==e[8]&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function v(e,t,r,a,s,c,h,d,f){(0,i.s)(e,t,a,c,r,s,h,1,1,1),(0,l.s)(o,d,f,1),(0,i.a)(u,e);var v=(0,l.t)(o,o,(0,i.t)(u,u)),p=(0,n.Z)(v,3),y=p[0],m=p[1],_=p[2];return(0,i.s)(u,y,0,0,0,m,0,0,0,_),(0,i.m)(e,u,e)}},59568:function(e,t,r){r.d(t,{L:function(){return p}});var n=r(15671),i=r(43144),a=r(60136),s=r(29388),l=r(27366),o=r(7138),u=r(49861),c=(r(25243),r(63780),r(93169),r(69912)),h=r(80885),d=r(79803),f=r(65156),v=r(47991),p=function(e){(0,a.Z)(r,e);var t=(0,s.Z)(r);function r(e){return(0,n.Z)(this,r),t.call(this,e)}return(0,i.Z)(r,[{key:"bounds",get:function(){var e=this.coords;return null==e||null==e.extent?null:(0,f.oJ)(e.extent)}},{key:"coords",get:function(){var e,t=null===(e=this.element.georeference)||void 0===e?void 0:e.coords;return(0,d.projectOrLoad)(t,this.spatialReference).geometry}},{key:"normalizedCoords",get:function(){return h.Z.fromJSON((0,v.Ui)(this.coords))}},{key:"normalizedBounds",get:function(){var e=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=e?(0,f.oJ)(e):null}}]),r}(o.Z);(0,l._)([(0,u.Cb)()],p.prototype,"spatialReference",void 0),(0,l._)([(0,u.Cb)()],p.prototype,"element",void 0),(0,l._)([(0,u.Cb)()],p.prototype,"bounds",null),(0,l._)([(0,u.Cb)()],p.prototype,"coords",null),(0,l._)([(0,u.Cb)()],p.prototype,"normalizedCoords",null),(0,l._)([(0,u.Cb)()],p.prototype,"normalizedBounds",null),p=(0,l._)([(0,c.j)("esri.layers.support.MediaElementView")],p)},45139:function(e,t,r){r.r(t),r.d(t,{default:function(){return ce}});var n=r(29439),i=r(74165),a=r(37762),s=r(15861),l=r(15671),o=r(43144),u=r(11752),c=r(61120),h=r(60136),d=r(29388),f=r(27366),v=(r(59486),r(52639),r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(28189),r(9014),r(51508),r(40281)),p=(r(93169),r(32718)),y=r(77427),m=r(66978),_=r(94172),g=r(49861),w=(r(25243),r(63780),r(69912)),Z=r(65156),k=r(34066),b=r(66504),C=r(59568),x=r(10064),R=(r(99346),r(76200),r(42265),r(52522),r(35995),r(47191),r(41978),r(87422)),E=(r(3453),r(39484),r(80613)),M=(r(13594),r(151),r(84319),r(52120),r(8548)),T=(r(37825),r(83826)),S=(r(3667),r(94109),r(84936),r(54815),r(10435),r(30575),r(41768),r(78020),r(44070)),V=(r(53634),r(46888),r(57808)),q=r(45412),A=(r(64337),r(61441),r(86909),r(82386),r(16889)),G=(r(73271),r(21391),r(15245)),z=(r(10106),r(34052),r(53456),r(54711),r(62013),r(92841),r(23174),r(93985),r(13163),r(36207),r(98634),r(46228),r(78041),r(39416),r(70812),r(77318),r(86741),r(26885),r(79347),r(83406),r(68860),r(49229),r(8229)),P=r(91340),D=(r(91908),r(14921),r(69610),r(5131),r(37995),r(73828),r(32344)),U=r(85269),O=r(98928),L=r(92026),W=r(67593),j=r(11873),H=r(88396),I=r(6394),B=r(52311),Q=(0,j.c)(),J=function(e){(0,h.Z)(r,e);var t=(0,d.Z)(r);function r(e){var n;return(0,l.Z)(this,r),(n=t.call(this)).elementView=e,n.isWrapAround=!1,n.perspectiveTransform=(0,I.a)(),n._vertices=new Float32Array(20),n._handles=[],n._handles.push((0,_.YP)((function(){return n.elementView.element.opacity}),(function(e){return n.opacity=e}),_.nn),(0,_.YP)((function(){return[n.elementView.coords]}),(function(){n.requestRender()}),_.nn),(0,_.gx)((function(){return n.elementView.element.loaded}),(function(){var e=n.elementView.element;n.ready(),"video"===e.type&&null!=e.content&&n._handles.push((0,O.on)(e.content,"play",(function(){return n.requestRender()})))}),_.nn)),e.element.load().catch((function(t){p.Z.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new x.Z("element-load-error","Element cannot be displayed",{element:e,error:t}))})),n}return(0,o.Z)(r,[{key:"destroy",value:function(){this._handles.forEach((function(e){return e.remove()})),this.texture=(0,L.M2)(this.texture)}},{key:"dvsMat3",get:function(){return this.parent.dvsMat3}},{key:"beforeRender",value:function(e){var t=e.context,n=this.elementView.element.content;if(null!=n){var i=n instanceof HTMLImageElement,a=n instanceof HTMLVideoElement,s=i?n.naturalWidth:a?n.videoWidth:n.width,l=i?n.naturalHeight:a?n.videoHeight:n.height;if(this._updatePerspectiveTransform(s,l),this.texture)a&&!n.paused&&(this.texture.setData(n),this.requestRender(),(t.type===T.zO.WEBGL2||(0,A.wt)(s)&&(0,A.wt)(l))&&this.texture.generateMipmap());else{var o=new B.X;o.wrapMode=M.e8.CLAMP_TO_EDGE,o.preMultiplyAlpha=!0,o.width=s,o.height=l,this.texture=new V.x(t,o,n),(t.type===T.zO.WEBGL2||(0,A.wt)(s)&&(0,A.wt)(l))&&this.texture.generateMipmap(),a&&!n.paused&&this.requestRender()}}(0,u.Z)((0,c.Z)(r.prototype),"beforeRender",this).call(this,e)}},{key:"_createTransforms",value:function(){return null}},{key:"updateDrawCoords",value:function(e,t){var r=this.elementView.coords;if(null!=r){var i=(0,n.Z)(r.rings[0],4),a=i[0],s=i[1],l=i[2],o=i[3],u=this._vertices,c=e.x,h=e.y,d=0!==t;d?u.set([s[0]-c,s[1]-h,a[0]-c,a[1]-h,l[0]-c,l[1]-h,o[0]-c,o[1]-h,o[0]-c,o[1]-h,s[0]+t-c,s[1]-h,s[0]+t-c,s[1]-h,a[0]+t-c,a[1]-h,l[0]+t-c,l[1]-h,o[0]+t-c,o[1]-h]):u.set([s[0]-c,s[1]-h,a[0]-c,a[1]-h,l[0]-c,l[1]-h,o[0]-c,o[1]-h]),this.isWrapAround=d}}},{key:"getVAO",value:function(e,t,r){if(null==this.elementView.coords)return null;var n=this._vertices;if(this._vao)this._geometryVbo.setData(n);else{this._geometryVbo=S.f.createVertex(e,M.l1.DYNAMIC_DRAW,n);var i=S.f.createVertex(e,M.l1.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new q.U(e,r,t,{geometry:this._geometryVbo,tex:i})}return this._vao}},{key:"_updatePerspectiveTransform",value:function(e,t){var r=this._vertices;(0,W.E)(Q,[0,0,e,0,0,t,e,t],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),(0,H.s)(this.perspectiveTransform,Q[6]/Q[8]*e,Q[7]/Q[8]*t)}}]),r}(R.s),N=r(93433),Y=r(17842),F=r(22753),X=r(23588),K=r(92975),$=r(86226),ee=r(62272),te=function(e){(0,h.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,l.Z)(this,r),(e=t.apply(this,arguments))._localOrigin=(0,Y.vW)(0,0),e._viewStateId=-1,e._dvsMat3=(0,X.c)(),e.requiresDedicatedFBO=!1,e}return(0,o.Z)(r,[{key:"dvsMat3",get:function(){return this._dvsMat3}},{key:"beforeRender",value:function(e){this._updateMatrices(e),this._updateOverlays(e,this.children);var t,r=(0,a.Z)(this.children);try{for(r.s();!(t=r.n()).done;){t.value.beforeRender(e)}}catch(n){r.e(n)}finally{r.f()}}},{key:"prepareRenderPasses",value:function(e){var t=this,n=e.registerRenderPass({name:"overlay",brushes:[ee.U.overlay],target:function(){return t.children},drawPhase:E.jx.MAP});return[].concat((0,N.Z)((0,u.Z)((0,c.Z)(r.prototype),"prepareRenderPasses",this).call(this,e)),[n])}},{key:"_updateMatrices",value:function(e){var t=e.state,r=t.id,n=t.size,i=t.pixelRatio,a=t.resolution,s=t.rotation,l=t.viewpoint,o=t.displayMat3;if(this._viewStateId!==r){var u=Math.PI/180*s,c=i*n[0],h=i*n[1],d=l.targetGeometry,f=d.x,v=d.y,p=(0,P.or)(f,t.spatialReference);this._localOrigin.x=p,this._localOrigin.y=v;var y=a*c,m=a*h,_=(0,F.g)(this._dvsMat3);(0,F.m)(_,_,o),(0,F.h)(_,_,(0,G.f)(c/2,h/2)),(0,F.d)(_,_,(0,z.f)(c/y,-h/m,1)),(0,F.r)(_,_,-u),this._viewStateId=r}}},{key:"_updateOverlays",value:function(e,t){var r=e.state,i=r.rotation,s=r.spatialReference,l=r.worldScreenWidth,o=r.size,u=r.viewpoint,c=this._localOrigin,h=0,d=(0,K.C5)(s);if(d&&s.isWrappable){var f=o[0],v=o[1],p=180/Math.PI*i,y=Math.abs(Math.cos(p)),m=Math.abs(Math.sin(p)),_=Math.round(f*y+v*m),g=(0,n.Z)(d.valid,2),w=g[0],Z=g[1],k=(0,$.ut)(s),b=u.targetGeometry,C=b.x,x=[C,b.y],R=[0,0];r.toScreen(R,x);var E,M=[0,0];E=_>l?.5*l:.5*_;var T=Math.floor((C+.5*k)/k),S=w+T*k,V=Z+T*k,q=[R[0]+E,0];r.toMap(M,q),M[0]>V&&(h=k),q[0]=R[0]-E,r.toMap(M,q),M[0]<S&&(h=-k);var A,G=(0,a.Z)(t);try{for(G.s();!(A=G.n()).done;){var z=A.value,P=z.elementView.bounds;if(null!=P){var D=(0,n.Z)(P,3),U=D[0],O=D[2];U<w&&O>w?z.updateDrawCoords(c,k):O>Z&&U<Z?z.updateDrawCoords(c,-k):z.updateDrawCoords(c,h)}}}catch(j){G.e(j)}finally{G.f()}}else{var L,W=(0,a.Z)(t);try{for(W.s();!(L=W.n()).done;){L.value.updateDrawCoords(c,h)}}catch(j){W.e(j)}finally{W.f()}}}}]),r}(r(64510).Z),re=r(95986),ne=r(67581),ie=r(53866),ae=function(e){(0,h.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,l.Z)(this,r),(e=t.apply(this,arguments))._overlayContainer=null,e._fetchQueue=null,e._tileStrategy=null,e._elementReferences=new Map,e._debugGraphicsView=null,e.layer=null,e.elements=new v.Z,e}return(0,o.Z)(r,[{key:"attach",value:function(){var e=this;this.addAttachHandles([(0,_.on)((function(){return e.layer.effectiveSource}),"refresh",(function(){e._tileStrategy.refresh((function(t){return e._updateTile(t)})),e.requestUpdate()})),(0,_.on)((function(){return e.layer.effectiveSource}),"change",(function(t){var r=t.element;return e._elementUpdateHandler(r)}))]),this._overlayContainer=new te,this.container.addChild(this._overlayContainer),this._fetchQueue=new D.Z({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:function(t,r){return e._queryElements(t,r)}}),this._tileStrategy=new U.Z({cachePolicy:"purge",resampling:!0,acquireTile:function(t){return e._acquireTile(t)},releaseTile:function(t){return e._releaseTile(t)},tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}},{key:"detach",value:function(){var e;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),null===(e=this._debugGraphicsView)||void 0===e||e.destroy()}},{key:"supportsSpatialReference",value:function(e){return!0}},{key:"moveStart",value:function(){this.requestUpdate()}},{key:"viewChange",value:function(){this.requestUpdate()}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"update",value:function(e){var t;this._tileStrategy.update(e),null===(t=this._debugGraphicsView)||void 0===t||t.update(e)}},{key:"hitTest",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t,r){var n,s,l,o,u,c,h,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],s=t.normalize(),l=[s.x,s.y],o=(0,a.Z)(this._elementReferences.values());try{for(o.s();!(u=o.n()).done;)c=u.value.projectedElement,h=c.normalizedCoords,d=c.element,null!=h&&(0,k.wP)(h.rings,l)&&n.push({type:"media",element:d,layer:this.layer,mapPoint:t})}catch(r){o.e(r)}finally{o.f()}return e.abrupt("return",n.reverse());case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){return null!=this.layer.source&&(0,u.Z)((0,c.Z)(r.prototype),"canResume",this).call(this)}},{key:"doRefresh",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._fetchQueue.reset(),this._tileStrategy.refresh((function(e){return t._updateTile(e)}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_acquireTile",value:function(e){var t=new ue(e.clone());return this._updateTile(t),t}},{key:"_updateTile",value:function(e){var t=this;this.updatingHandles.addPromise(this._fetchQueue.push(e.key).then((function(r){var i=e.setElements(r),a=(0,n.Z)(i,2),s=a[0],l=a[1];t._referenceElements(e,s),t._dereferenceElements(e,l),t.requestUpdate()}),(function(e){(0,m.D_)(e)||p.Z.getLogger(t).error(e)})))}},{key:"_releaseTile",value:function(e){this._fetchQueue.abort(e.key.id),e.elements&&this._dereferenceElements(e,e.elements),this.requestUpdate()}},{key:"_queryElements",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t,r){var n,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(n=this.layer.effectiveSource)){e.next=3;break}return e.abrupt("return",[]);case 3:return this.view.featuresTilingScheme.getTileBounds(se,t,!0),a=new ie.Z({xmin:se[0],ymin:se[1],xmax:se[2],ymax:se[3],spatialReference:this.view.spatialReference}),e.abrupt("return",n.queryElements(a,r));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_referenceElements",value:function(e,t){if(null!=this.layer.source){var r,n=(0,a.Z)(t);try{for(n.s();!(r=n.n()).done;){var i=r.value;this._referenceElement(e,i)}}catch(s){n.e(s)}finally{n.f()}}}},{key:"_referenceElement",value:function(e,t){var r=this;(0,y.s1)(this._elementReferences,t.uid,(function(){var e=new C.L({element:t,spatialReference:r.view.spatialReference}),n=new J(e);r._overlayContainer.addChild(n),r.elements.add(t);return{tiles:new Set,projectedElement:e,overlay:n,debugGraphic:null}})).tiles.add(e)}},{key:"_dereferenceElements",value:function(e,t){var r,n=(0,a.Z)(t);try{for(n.s();!(r=n.n()).done;){var i=r.value;this._dereferenceElement(e,i)}}catch(s){n.e(s)}finally{n.f()}}},{key:"_dereferenceElement",value:function(e,t){var r,n=this._elementReferences.get(t.uid);n.tiles.delete(e),n.tiles.size||(this._overlayContainer.removeChild(n.overlay),n.overlay.destroy(),n.projectedElement.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),null===(r=this._debugGraphicsView)||void 0===r||r.graphics.remove(n.debugGraphic))}},{key:"_elementUpdateHandler",value:function(e){var t=this._elementReferences.get(e.uid);if(t){var r,n,i=t.projectedElement.normalizedCoords;if(null==i)return this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),void(null===(r=this._debugGraphicsView)||void 0===r||r.graphics.remove(t.debugGraphic));var s,l=[],o=[],u=(0,a.Z)(this._tileStrategy.tiles);try{for(u.s();!(s=u.n()).done;){var c=s.value,h=oe(this.view.featuresTilingScheme,c,i);t.tiles.has(c)?h||o.push(c):h&&l.push(c)}}catch(k){u.e(k)}finally{u.f()}for(var d=0,f=l;d<f.length;d++){var v=f[d];this._referenceElement(v,e)}for(var p=0,y=o;p<y.length;p++){var m=y[p];this._dereferenceElement(m,e)}(null===(n=t=this._elementReferences.get(e.uid))||void 0===n?void 0:n.debugGraphic)&&(t.debugGraphic.geometry=t.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:t.debugGraphic,property:"geometry"}))}else{var _=new C.L({element:e,spatialReference:this.view.spatialReference}).normalizedCoords;if(null!=_){var g,w=(0,a.Z)(this._tileStrategy.tiles);try{for(w.s();!(g=w.n()).done;){var Z=g.value;oe(this.view.featuresTilingScheme,Z,_)&&this._referenceElement(Z,e)}}catch(k){w.e(k)}finally{w.f()}}}}}]),r}((0,re.y)(ne.Z));(0,f._)([(0,g.Cb)()],ae.prototype,"_fetchQueue",void 0),(0,f._)([(0,g.Cb)()],ae.prototype,"layer",void 0),(0,f._)([(0,g.Cb)({readOnly:!0})],ae.prototype,"elements",void 0),ae=(0,f._)([(0,w.j)("esri.views.2d.layers.MediaLayerView2D")],ae);var se=(0,Z.Ue)(),le={xmin:0,ymin:0,xmax:0,ymax:0};function oe(e,t,r){return e.getTileBounds(se,t.key,!0),le.xmin=se[0],le.ymin=se[1],le.xmax=se[2],le.ymax=se[3],(0,b.Nl)(le,r)}var ue=function(){function e(t){(0,l.Z)(this,e),this.key=t,this.elements=null,this.isReady=!1,this.visible=!0}return(0,o.Z)(e,[{key:"setElements",value:function(e){var t=[],r=new Set(this.elements);this.elements=e;var n,i=(0,a.Z)(e);try{for(i.s();!(n=i.n()).done;){var s=n.value;r.has(s)?r.delete(s):t.push(s)}}catch(l){i.e(l)}finally{i.f()}return this.isReady=!0,[t,Array.from(r)]}},{key:"destroy",value:function(){}}]),e}(),ce=ae}}]);
//# sourceMappingURL=5139.abcefe41.chunk.js.map