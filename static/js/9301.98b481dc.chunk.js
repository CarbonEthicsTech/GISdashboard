"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[9301],{59301:function(t,n,e){e.r(n),e.d(n,{executeAttachmentQuery:function(){return y},fetchAttachments:function(){return h},processAttachmentQueryResult:function(){return f}});var r=e(74165),o=e(15861),a=e(1413),i=e(37762),u=e(19545),l=e(76200),d=e(35995),s=e(22585),c=e(11812);function p(t){var n=t.toJSON();return n.attachmentTypes&&(n.attachmentTypes=n.attachmentTypes.join(",")),n.keywords&&(n.keywords=n.keywords.join(",")),n.globalIds&&(n.globalIds=n.globalIds.join(",")),n.objectIds&&(n.objectIds=n.objectIds.join(",")),n.size&&(n.size=n.size.join(",")),n}function f(t,n){var e,r={},o=(0,i.Z)(n);try{for(o.s();!(e=o.n()).done;){var a,l=e.value,s=l.parentObjectId,p=l.parentGlobalId,f=l.attachmentInfos,y=(0,i.Z)(f);try{for(y.s();!(a=y.n()).done;){var h=a.value,b=h.id,m=(0,d.qg)((0,u.Dp)("".concat(t.path,"/").concat(s,"/attachments/").concat(b))),I=c.Z.fromJSON(h);I.set({url:m,parentObjectId:s,parentGlobalId:p}),r[s]?r[s].push(I):r[s]=[I]}}catch(v){y.e(v)}finally{y.f()}}}catch(v){o.e(v)}finally{o.f()}return r}function y(t,n,e){var r={query:(0,s.A)((0,a.Z)((0,a.Z)({},t.query),{},{f:"json"},p(n)))};return e&&(r=(0,a.Z)((0,a.Z)((0,a.Z)({},e),r),{},{query:(0,a.Z)((0,a.Z)({},e.query),r.query)})),(0,l.default)(t.path+"/queryAttachments",r).then((function(t){return t.data.attachmentGroups}))}function h(t,n,e){return b.apply(this,arguments)}function b(){return b=(0,o.Z)((0,r.Z)().mark((function t(n,e,o){var a,u,d,s,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.objectIds,u=[],d=(0,i.Z)(a);try{for(d.s();!(s=d.n()).done;)c=s.value,u.push((0,l.default)(n.path+"/"+c+"/attachments",o))}catch(r){d.e(r)}finally{d.f()}return t.abrupt("return",Promise.all(u).then((function(t){return a.map((function(n,e){return{parentObjectId:n,attachmentInfos:t[e].data.attachmentInfos}}))})));case 4:case"end":return t.stop()}}),t)}))),b.apply(this,arguments)}},11812:function(t,n,e){e.d(n,{Z:function(){return b}});var r,o=e(15671),a=e(43144),i=e(60136),u=e(29388),l=e(27366),d=e(46784),s=e(49861),c=e(25243),p=(e(63780),e(93169),e(69912));function f(t){var n=t.exifInfo,e=t.exifName,r=t.tagName;if(!n||!e||!r)return null;var o=n.find((function(t){return t.name===e}));return o?function(t){var n=t.tagName,e=t.tags;if(!e||!n)return null;var r=e.find((function(t){return t.name===n}));return r&&r.value||null}({tagName:r,tags:o.tags}):null}var y={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}},h=r=function(t){(0,i.Z)(e,t);var n=(0,u.Z)(e);function e(t){var r;return(0,o.Z)(this,e),(r=n.call(this,t)).contentType=null,r.exifInfo=null,r.id=null,r.globalId=null,r.keywords=null,r.name=null,r.parentGlobalId=null,r.parentObjectId=null,r.size=null,r.url=null,r}return(0,a.Z)(e,[{key:"orientationInfo",get:function(){var t=f({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:this.exifInfo});return y[t]||null}},{key:"clone",value:function(){return new r({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}}]),e}(d.wq);(0,l._)([(0,s.Cb)({type:String})],h.prototype,"contentType",void 0),(0,l._)([(0,s.Cb)()],h.prototype,"exifInfo",void 0),(0,l._)([(0,s.Cb)({readOnly:!0})],h.prototype,"orientationInfo",null),(0,l._)([(0,s.Cb)({type:c.z8})],h.prototype,"id",void 0),(0,l._)([(0,s.Cb)({type:String})],h.prototype,"globalId",void 0),(0,l._)([(0,s.Cb)({type:String})],h.prototype,"keywords",void 0),(0,l._)([(0,s.Cb)({type:String})],h.prototype,"name",void 0),(0,l._)([(0,s.Cb)({json:{read:!1}})],h.prototype,"parentGlobalId",void 0),(0,l._)([(0,s.Cb)({json:{read:!1}})],h.prototype,"parentObjectId",void 0),(0,l._)([(0,s.Cb)({type:c.z8})],h.prototype,"size",void 0),(0,l._)([(0,s.Cb)({json:{read:!1}})],h.prototype,"url",void 0);var b=h=r=(0,l._)([(0,p.j)("esri.layers.support.AttachmentInfo")],h)}}]);
//# sourceMappingURL=9301.98b481dc.chunk.js.map