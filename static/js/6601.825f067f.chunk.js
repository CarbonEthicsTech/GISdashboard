"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[6601],{56601:function(e,t,d){d.d(t,{jF:function(){return F},lQ:function(){return v},o1:function(){return m}});var r=d(43144),a=d(15671),n=d(60136),l=d(29388),i=d(27366),u=d(91505),s=d(84652),c=d(66978),o=(d(32718),d(25243),d(10064),d(93169),d(69912)),h=new u.Z.EventEmitter;function F(e,t){var d=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=(0,c.hh)();return d=null==t||d,h.emit("apply-edits",{serviceUrl:e,layerId:t,mayReceiveServiceEdits:d,result:r.promise}),r}var b="esri.layers.mixins.EditBusLayer",f=Symbol(b);function v(e){return null!=e&&"object"==typeof e&&f in e}var m=function(e){var t,d=function(e){(0,n.Z)(i,e);var d=(0,l.Z)(i);function i(){var e;(0,a.Z)(this,i);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=d.call.apply(d,[this].concat(n)))[t]=!0,e.when().then((function(){e.own([h.on("apply-edits",(function(t){var d=t.serviceUrl,r=t.layerId,a=t.mayReceiveServiceEdits,n=t.result,l=d===e.url,i=null!=r&&null!=e.layerId&&r===e.layerId;if(l&&(i||a)){var u=n.then((function(t){var d;if(i&&(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length))return e.emit("edits",(0,s.d9)(t)),t;var r=null===(d=t.editedFeatures)||void 0===d?void 0:d.find((function(t){return t.layerId===e.layerId}));if(r){var a=r.editedFeatures,n=a.adds,l=a.updates,u=a.deletes,c={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:n?n.map((function(t){var d=t.attributes;return{objectId:e.objectIdField&&d[e.objectIdField],globalId:e.globalIdField&&d[e.globalIdField]}})):[],deletedFeatures:u?u.map((function(t){var d=t.attributes;return{objectId:e.objectIdField&&d[e.objectIdField],globalId:e.globalIdField&&d[e.globalIdField]}})):[],updatedFeatures:l?l.map((function(t){var d=t.current.attributes;return{objectId:e.objectIdField&&d[e.objectIdField],globalId:e.globalIdField&&d[e.globalIdField]}})):[],editedFeatures:(0,s.d9)(t.editedFeatures),exceededTransferLimit:!1};return e.emit("edits",c),c}return{edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:(0,s.d9)(t.editedFeatures),exceededTransferLimit:!1}}));e.emit("apply-edits",{result:u})}}))])}),(function(){})),e}return(0,r.Z)(i)}(e);return t=f,d=(0,i._)([(0,o.j)(b)],d)}}}]);
//# sourceMappingURL=6601.825f067f.chunk.js.map