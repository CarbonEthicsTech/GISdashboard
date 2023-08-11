"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[255],{50255:function(e,t,r){r.r(t),r.d(t,{default:function(){return Le}});var n=r(37762),i=r(74165),o=r(15861),a=r(1413),u=r(15671),s=r(43144),l=r(11752),p=r(61120),d=r(60136),c=r(29388),y=r(27366),f=r(40281),v=r(10064),h=r(41691),b=r(93002),m=r(97642),g=r(66978),w=r(94172),k=r(76672),Z=r(35995),C=r(49861),_=(r(25243),r(63780),r(93169),r(38511)),x=r(69912),F=r(25265),S=r(30651),I=r(27961),O=r(11936),j=r(6693),E=r(46671),T=r(56601),L=r(32526),P=r(6061),A=r(29598),G=r(71684),D=r(56811),R=r(99063),q=r(25899),V=r(45948),N=r(62594),U=r(25610),M=r(37270),Q=r(46784),H=r(31201),J=r(66591),B=function(e){(0,d.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;return(0,u.Z)(this,r),(e=t.apply(this,arguments)).code=null,e.defaultValues={},e.domains=null,e.name=null,e}return(0,s.Z)(r,[{key:"readDomains",value:function(e){if(!e)return null;for(var t={},r=0,n=Object.keys(e);r<n.length;r++){var i=n[r];t[i]=(0,J.im)(e[i])}return t}},{key:"writeDomains",value:function(e,t){if(e){for(var r={},n=0,i=Object.keys(e);n<i.length;n++){var o,a=i[n];e[a]&&(r[a]=null===(o=e[a])||void 0===o?void 0:o.toJSON())}t.domains=r}}}]),r}(Q.wq);(0,y._)([(0,C.Cb)({type:Number,json:{write:!0}})],B.prototype,"code",void 0),(0,y._)([(0,C.Cb)({type:Object,json:{write:!0}})],B.prototype,"defaultValues",void 0),(0,y._)([(0,C.Cb)({json:{write:!0}})],B.prototype,"domains",void 0),(0,y._)([(0,_.r)("domains")],B.prototype,"readDomains",null),(0,y._)([(0,H.c)("domains")],B.prototype,"writeDomains",null),(0,y._)([(0,C.Cb)({type:String,json:{write:!0}})],B.prototype,"name",void 0);var Y=B=(0,y._)([(0,x.j)("esri.layers.support.Subtype")],B),z=r(44055),K=r(94931),X=(r(78451),r(98689),r(57823),r(32066),r(49018)),W=r(34999),$=r(28189),ee=(r(9014),r(79056)),te=r(84652),re=r(54472),ne=r(32718),ie=r(18202),oe=r(47492),ae=r(40743),ue=r(12224),se=r(77748),le=r(85116),pe=r(21149),de=r(81085),ce=r(61574),ye=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],fe={key:"type",base:X.Z,errorContext:"renderer",typeMap:{simple:W.Z,"unique-value":$.Z,"class-breaks":K.Z}},ve=(0,U.v)(),he=(0,oe.d)({types:fe}),be=0;function me(e){var t=e.json.write;return"object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function ge(e){switch(e){case"point":case"multipoint":return ce.xA.clone();case"polyline":return ce.CJ.clone();case"polygon":case"multipatch":return ce.z3.clone();default:return null}}function we(e,t){var r;return null==e?null:null===(r=t.subtypes)||void 0===r?void 0:r.find((function(t){return t.code===e}))}function ke(e,t){var r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}var n={},i=we(e,t);if(null!=i){var o=i.defaultValues;for(var a in o)n[a]=o[a]}return n[t.subtypeField]=e,new ue.Z({name:"New Feature",drawingTool:r,prototype:{attributes:n}})}var Ze="esri.layers.support.SubtypeSublayer",Ce=function(e){(0,d.Z)(r,e);var t=(0,c.Z)(r);function r(e){var n;return(0,u.Z)(this,r),(n=t.call(this,e)).charts=null,n.editingEnabled=!0,n.fieldOverrides=null,n.fieldsIndex=null,n.formTemplate=null,n.id="".concat(Date.now().toString(16),"-subtype-sublayer-").concat(be++),n.type="subtype-sublayer",n.labelsVisible=!0,n.labelingInfo=null,n.layerType="ArcGISFeatureLayer",n.legendEnabled=!0,n.listMode="show",n.minScale=0,n.maxScale=0,n.opacity=1,n.parent=null,n.popupEnabled=!0,n.popupTemplate=null,n.subtypeCode=null,n.templates=null,n.title=null,n.visible=!0,n}return(0,s.Z)(r,[{key:"capabilities",get:function(){var e;return null===(e=this.parent)||void 0===e?void 0:e.capabilities}},{key:"effectiveCapabilities",get:function(){var e;return null===(e=this.parent)||void 0===e?void 0:e.effectiveCapabilities}},{key:"effectiveEditingEnabled",get:function(){var e=this.parent;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}},{key:"elevationInfo",get:function(){var e;return null===(e=this.parent)||void 0===e?void 0:e.elevationInfo}},{key:"writeFieldOverrides",value:function(e,t,r){var n,i,o=this.fields,a=this.parent;if(o){i=[];var u=0;o.forEach((function(e){var t,r=e.name,n=e.alias,o=e.editable;if(e.visible){var s=null===a||void 0===a||null===(t=a.fields)||void 0===t?void 0:t.find((function(e){return e.name===r}));if(s){var l={name:r},p=!1;n!==s.alias&&(l.alias=n,p=!0),o!==s.editable&&(l.editable=o,p=!0),i.push(l),p&&u++}}})),0===u&&i.length===o.length&&(i=null)}else i=(0,te.d9)(e);(null===(n=i)||void 0===n?void 0:n.length)&&(0,ie.RB)(r,i,t)}},{key:"fields",get:function(){var e=this.parent,t=this.fieldOverrides,r=this.subtypeCode,i=null===e||void 0===e?void 0:e.fields;if(!e||null===i||void 0===i||!i.length)return null;var o,a=e.subtypes,u=e.subtypeField,s=null===a||void 0===a?void 0:a.find((function(e){return e.code===r})),l=null===s||void 0===s?void 0:s.defaultValues,p=null===s||void 0===s?void 0:s.domains,d=[],c=(0,n.Z)(i);try{var y=function(){var e,n,i=o.value.clone(),a=i.name,s=null===t||void 0===t?void 0:t.find((function(e){return e.name===a}));if(i.visible=!t||!!s,s){var c=s.alias,y=s.editable;c&&(i.alias=c),!1===y&&(i.editable=!1)}var f=null!==(e=null===l||void 0===l?void 0:l[a])&&void 0!==e?e:null;i.defaultValue=a===u?r:f;var v=null!==(n=null===p||void 0===p?void 0:p[a])&&void 0!==n?n:null;i.domain=a===u?null:v?"inherited"===v.type?i.domain:v.clone():null,d.push(i)};for(c.s();!(o=c.n()).done;)y()}catch(f){c.e(f)}finally{c.f()}return d}},{key:"floorInfo",get:function(){var e;return null===(e=this.parent)||void 0===e?void 0:e.floorInfo}},{key:"geometryType",get:function(){var e;return null===(e=this.parent)||void 0===e?void 0:e.geometryType}},{key:"effectiveScaleRange",get:function(){return{minScale:this.minScale,maxScale:this.maxScale}}},{key:"objectIdField",get:function(){var e;return this.parent||ne.Z.getLogger(Ze).error(xe("objectIdField")),null===(e=this.parent)||void 0===e?void 0:e.objectIdField}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"renderer",get:function(){if(this._isOverridden("renderer"))return this._get("renderer");var e=this.parent;return e&&!e.isTable&&"mesh"!==e.geometryType?function(e){return new W.Z({symbol:ge(e)})}(e.geometryType):null},set:function(e){(0,M.YN)(e,this.fieldsIndex),this._override("renderer",e)}},{key:"readRendererFromService",value:function(e,t,r){var n,i;if("Table"===t.type)return null;var o,a=null===(n=t.drawingInfo)||void 0===n?void 0:n.renderer,u=he(a,t,r),s=this.subtypeCode;if(null!=s&&function(e,t){return!!t&&"unique-value"===(null===e||void 0===e?void 0:e.type)&&"string"==typeof e.field&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}(u,t.subtypeField)){var l,p=null===(l=u.uniqueValueInfos)||void 0===l?void 0:l.find((function(e){var t=e.value;return(t="number"==typeof t?String(t):t)===String(s)}));p&&(o=new W.Z({symbol:p.symbol}))}else"simple"!==(null===u||void 0===u?void 0:u.type)||(null===(i=u.visualVariables)||void 0===i?void 0:i.length)||(o=u);return o}},{key:"readRenderer",value:function(e,t,r){var n,i,o=null===t||void 0===t||null===(n=t.layerDefinition)||void 0===n||null===(n=n.drawingInfo)||void 0===n?void 0:n.renderer;if(o){var a=null===(i=o.visualVariables)||void 0===i?void 0:i.some((function(e){return"rotationInfo"!==e.type}));return a?void 0:he(o,t,r)||void 0}}},{key:"spatialReference",get:function(){var e;return null===(e=this.parent)||void 0===e?void 0:e.spatialReference}},{key:"readTemplatesFromService",value:function(e,t){return[ke(this.subtypeCode,t)]}},{key:"readTitleFromService",value:function(e,t){var r=we(this.subtypeCode,t);return null!=r?r.name:null}},{key:"url",get:function(){var e;return null===(e=this.parent)||void 0===e?void 0:e.url}},{key:"userHasUpdateItemPrivileges",get:function(){var e;return!(null===(e=this.parent)||void 0===e||!e.userHasUpdateItemPrivileges)}},{key:"addAttachment",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.parent){e.next=3;break}throw xe("addAttachment");case 3:if(t.getAttribute(n.subtypeField)===this.subtypeCode){e.next=5;break}throw new v.Z("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");case 5:return e.abrupt("return",n.addAttachment(t,r));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"updateAttachment",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r,n){var o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.parent){e.next=3;break}throw xe("updateAttachment");case 3:if(t.getAttribute(o.subtypeField)===this.subtypeCode){e.next=5;break}throw new v.Z("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");case 5:return e.abrupt("return",o.updateAttachment(t,r,n));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"deleteAttachments",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.parent){e.next=3;break}throw xe("deleteAttachments");case 3:if(t.getAttribute(n.subtypeField)===this.subtypeCode){e.next=5;break}throw new v.Z("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");case 5:return e.abrupt("return",n.deleteAttachments(t,r));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.parent){e.next=2;break}throw xe("applyEdits");case 2:return e.abrupt("return",this.parent.applyEdits(t,r));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"createPopupTemplate",value:function(e){var t=this,r=this.parent,n=this.fields,i=this.title;r&&(t={displayField:r.displayField,editFieldsInfo:r.editFieldsInfo,fields:n,objectIdField:r.objectIdField,title:i});return(0,de.eZ)(t,e)}},{key:"createQuery",value:function(){if(!this.parent)throw xe("createQuery");var e=(0,N.rP)(this.parent),t="".concat(this.parent.subtypeField,"=").concat(this.subtypeCode);return e.where=(0,k._)(t,this.parent.definitionExpression),e}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFieldDomain",value:function(e){return this._getLayerDomain(e)}},{key:"hasUserOverrides",value:function(){var e=this;return ye.some((function(t){return e.originIdOf(t)===F.s3.USER}))}},{key:"queryAttachments",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if((n=e.sent).parent){e.next=5;break}throw xe("queryAttachments");case 5:return o=t.clone(),e.abrupt("return",(o.where=_e(o.where,n.parent.subtypeField,n.subtypeCode),n.parent.queryAttachments(t,r)));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n,o,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if((o=e.sent).parent){e.next=5;break}throw xe("queryFeatures");case 5:return a=null!==(n=pe.Z.from(t))&&void 0!==n?n:o.createQuery(),e.abrupt("return",(null!=t&&(a.where=_e(a.where,o.parent.subtypeField,o.subtypeCode)),o.parent.queryFeatures(a,r)));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_getLayerDomain",value:function(e){var t=this.fieldsIndex.get(e);return t?t.domain:null}}]),r}((0,h.p)((0,m.R)((0,ee.IG)(re.Z))));(0,y._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],Ce.prototype,"capabilities",null),(0,y._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],Ce.prototype,"effectiveCapabilities",null),(0,y._)([(0,C.Cb)({json:{write:{ignoreOrigin:!0}}})],Ce.prototype,"charts",void 0),(0,y._)([(0,C.Cb)({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],Ce.prototype,"editingEnabled",void 0),(0,y._)([(0,C.Cb)({type:Boolean,readOnly:!0})],Ce.prototype,"effectiveEditingEnabled",null),(0,y._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],Ce.prototype,"elevationInfo",null),(0,y._)([(0,C.Cb)({readOnly:!0,json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],Ce.prototype,"fieldOverrides",void 0),(0,y._)([(0,H.c)("fieldOverrides")],Ce.prototype,"writeFieldOverrides",null),(0,y._)([(0,C.Cb)((0,a.Z)((0,a.Z)({},ve.fields),{},{readOnly:!0,json:{read:!1}}))],Ce.prototype,"fields",null),(0,y._)([(0,C.Cb)(ve.fieldsIndex)],Ce.prototype,"fieldsIndex",void 0),(0,y._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],Ce.prototype,"floorInfo",null),(0,y._)([(0,C.Cb)({type:ae.Z,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],Ce.prototype,"formTemplate",void 0),(0,y._)([(0,C.Cb)({type:String,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],Ce.prototype,"id",void 0),(0,y._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],Ce.prototype,"geometryType",null),(0,y._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],Ce.prototype,"type",void 0),(0,y._)([(0,C.Cb)(me((0,te.d9)(V.iR)))],Ce.prototype,"labelsVisible",void 0),(0,y._)([(0,C.Cb)({type:[se.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:le.r},write:{ignoreOrigin:!0}}})],Ce.prototype,"labelingInfo",void 0),(0,y._)([(0,C.Cb)({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],Ce.prototype,"layerType",void 0),(0,y._)([(0,C.Cb)(me((0,te.d9)(V.rn)))],Ce.prototype,"legendEnabled",void 0),(0,y._)([(0,C.Cb)({type:["show","hide"]})],Ce.prototype,"listMode",void 0),(0,y._)([(0,C.Cb)(function(){var e=(0,te.d9)(V.rO);return e.json.origins.service.read=!1,me(e)}())],Ce.prototype,"minScale",void 0),(0,y._)([(0,C.Cb)(function(){var e=(0,te.d9)(V.u1);return e.json.origins.service.read=!1,me(e)}())],Ce.prototype,"maxScale",void 0),(0,y._)([(0,C.Cb)({readOnly:!0})],Ce.prototype,"effectiveScaleRange",null),(0,y._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],Ce.prototype,"objectIdField",null),(0,y._)([(0,C.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],Ce.prototype,"opacity",void 0),(0,y._)([(0,C.Cb)()],Ce.prototype,"parent",void 0),(0,y._)([(0,C.Cb)(me((0,te.d9)(V.C_)))],Ce.prototype,"popupEnabled",void 0),(0,y._)([(0,C.Cb)({type:z.Z,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],Ce.prototype,"popupTemplate",void 0),(0,y._)([(0,C.Cb)({readOnly:!0})],Ce.prototype,"defaultPopupTemplate",null),(0,y._)([(0,C.Cb)({types:fe,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],Ce.prototype,"renderer",null),(0,y._)([(0,_.r)("service","renderer",["drawingInfo.renderer","subtypeField","type"])],Ce.prototype,"readRendererFromService",null),(0,y._)([(0,_.r)("renderer",["layerDefinition.drawingInfo.renderer"])],Ce.prototype,"readRenderer",null),(0,y._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],Ce.prototype,"spatialReference",null),(0,y._)([(0,C.Cb)({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],Ce.prototype,"subtypeCode",void 0),(0,y._)([(0,C.Cb)({type:[ue.Z],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],Ce.prototype,"templates",void 0),(0,y._)([(0,_.r)("service","templates",["geometryType","subtypeField","subtypes","type"])],Ce.prototype,"readTemplatesFromService",null),(0,y._)([(0,C.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],Ce.prototype,"title",void 0),(0,y._)([(0,_.r)("service","title",["subtypes"])],Ce.prototype,"readTitleFromService",null),(0,y._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],Ce.prototype,"url",null),(0,y._)([(0,C.Cb)({readOnly:!0})],Ce.prototype,"userHasUpdateItemPrivileges",null),(0,y._)([(0,C.Cb)({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],Ce.prototype,"visible",void 0),Ce=(0,y._)([(0,x.j)(Ze)],Ce);var _e=function(e,t,r){var n=new RegExp("".concat(t,"\\s*=\\s*\\d+")),i="".concat(t,"=").concat(r),o=null!==e&&void 0!==e?e:"";return n.test(o)?o.replace(n,i):(0,k._)(i,o)},xe=function(e){return new v.Z("This sublayer must have a parent SubtypeGroupLayer in order to use ".concat(e))},Fe=Ce,Se=r(57370),Ie=r(26704),Oe="SubtypeGroupLayer";function je(e,t){return new v.Z("layer:unsupported","Layer (".concat(e.title,", ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t),{layer:e})}var Ee=(0,U.v)(),Te=function(e){(0,d.Z)(y,e);var t=(0,c.Z)(y);function y(){var e;(0,u.Z)(this,y);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n)))._sublayersCollectionChanged=!1,e._sublayerLookup=new Map,e.fields=null,e.fieldsIndex=null,e.outFields=null,e.subtypes=null,e.sublayers=new(f.Z.ofType(Fe)),e.timeInfo=null,e.title="Layer",e.type="subtype-group",e.addHandles((0,w.YP)((function(){return e.sublayers}),(function(t,r){return e._handleSublayersChange(t,r)}),w.Z_)),e}return(0,s.Z)(y,[{key:"destroy",value:function(){var e;null===(e=this.source)||void 0===e||e.destroy()}},{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,a.Z)({url:e},t):e}},{key:"load",value:function(e){var t=this,r=null!=e?e.signal:null,n=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(g.r9).then((0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url){e.next=2;break}throw new v.Z("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");case 2:if(null!=t.layerId){e.next=4;break}throw new v.Z("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");case 4:return e.t0=t,e.next=7,t.createGraphicsSource(r);case 7:return e.t1=e.sent,e.abrupt("return",e.t0._initLayerProperties.call(e.t0,e.t1));case 9:case"end":return e.stop()}}),e)})))).then((function(){return t._setUserPrivileges(t.serviceItemId,e)})).then((function(){return(0,N.nU)(t,e)}));return this.addResolvingPromise(n),Promise.resolve(this)}},{key:"createQueryVersion",get:function(){var e;return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(null!==(e=this._get("createQueryVersion"))&&void 0!==e?e:0)+1}},{key:"editingEnabled",get:function(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}},{key:"effectiveEditingEnabled",get:function(){return(0,N.sX)(this)}},{key:"parsedUrl",get:function(){var e=(0,Z.mN)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,Z.v_)(e.path,this.layerId.toString())),e}},{key:"source",set:function(e){this._get("source")!==e&&this._set("source",e)}},{key:"readTitleFromService",value:function(e,t){var r=t.name;return this.url?(0,q.a7)(this.url,r):r}},{key:"addAttachment",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,N.JD)(this,t,r,Oe));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"updateAttachment",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r,n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,N.Y5)(this,t,r,n,Oe));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,N.Jj)(this,t,r));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"on",value:function(e,t){return(0,l.Z)((0,p.Z)(y.prototype),"on",this).call(this,e,t)}},{key:"createGraphicsSource",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var n,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.Hl)(Promise.all([r.e(3406),r.e(7607),r.e(7946),r.e(9623),r.e(9887),r.e(8734)]).then(r.bind(r,68734)),t);case 2:return n=e.sent,o=n.default,e.abrupt("return",new o({layer:this}).load({signal:t}));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createQuery",value:function(){var e=(0,N.rP)(this),t=this.sublayers.map((function(e){return e.subtypeCode}));return e.where=(0,k._)("".concat(this.subtypeField," IN (").concat(t.join(","),")"),this.definitionExpression),e}},{key:"deleteAttachments",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,N.FV)(this,t,r,Oe));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"fetchRecomputedExtents",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,N.Ci)(this,t,Oe));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"findSublayerForFeature",value:function(e){var t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}},{key:"findSublayerForSubtypeCode",value:function(e){return this._sublayerLookup.get(e)}},{key:"getFieldDomain",value:function(e,t){return this._getLayerDomain(e)}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"loadAll",value:function(){var e=this;return(0,b.G)(this,(function(t){t(e.sublayers)}))}},{key:"queryAttachments",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,N.SU)(this,t,r,Oe));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var o,a,u,s,l,p,d,c,y;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return u=e.sent,s=null!==(o=pe.Z.from(t))&&void 0!==o?o:u.createQuery(),(l=null!==(a=s.outFields)&&void 0!==a?a:[]).includes(this.subtypeField)||(l.push(this.subtypeField),s.outFields=l),e.next=8,u.source.queryFeatures(s,r);case 8:if(null!==(p=e.sent)&&void 0!==p&&p.features){d=(0,n.Z)(p.features);try{for(d.s();!(c=d.n()).done;)(y=c.value).layer=y.sourceLayer=this.findSublayerForFeature(y)}catch(i){d.e(i)}finally{d.f()}}return e.abrupt("return",p);case 11:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,N.tD)(this,t,r,Oe));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,N.VG)(this,t,r,Oe));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,N.KE)(this,t,r,Oe));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryRelatedFeatures",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,N.kp)(this,t,r,Oe));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryRelatedFeaturesCount",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,N.C9)(this,t,r,Oe));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"write",value:function(e,t){var r,n=t.origin,i=t.layerContainerType,o=t.messages;if(this.isTable){if("web-scene"===n||"web-map"===n&&"tables"!==i)return null!==o&&void 0!==o&&o.push(je(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===n&&"tables"===i)return null!==o&&void 0!==o&&o.push(je(this,"using a non-table source cannot be written to tables in web maps")),null;return null!==(r=this.sublayers)&&void 0!==r&&r.length?(0,l.Z)((0,p.Z)(y.prototype),"write",this).call(this,e,t):(null!==o&&void 0!==o&&o.push(new v.Z("web-document-write:invalid-property","Layer (".concat(this.title,", ").concat(this.id,") of type '").concat(this.declaredClass,"' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer"),{layer:this})),null)}},{key:"serviceSupportsSpatialReference",value:function(e){return!!this.loaded&&(0,Ie.D)(this,e)}},{key:"_getLayerDomain",value:function(e){var t=this.fieldsIndex.get(e);return t?t.domain:null}},{key:"_initLayerProperties",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var r,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._set("source",t),(n=t.sourceJSON)&&(this.sourceJSON=n,this.read(n,{origin:"service",url:this.parsedUrl})),!this.isTable){e.next=4;break}throw new v.Z("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");case 4:if(null!==(r=this.subtypes)&&void 0!==r&&r.length){e.next=6;break}throw new v.Z("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");case 6:this._verifyFields(),(0,M.UF)(this.timeInfo,this.fieldsIndex);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"hasDataChanged",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,N.gG)(this));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_verifyFields",value:function(){var e,t,r,n=null!==(e=null===(t=this.parsedUrl)||void 0===t?void 0:t.path)&&void 0!==e?e:"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+n+")"),this.isTable||-1!==n.search(/\/FeatureServer\//i)||(null===(r=this.fields)||void 0===r?void 0:r.some((function(e){return"geometry"===e.type})))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+n+")")}},{key:"_handleSublayersChange",value:function(e,t){var r=this;t&&(t.forEach((function(e){e.parent=null})),this.handles.remove("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach((function(e){e.parent=r,r._sublayerLookup.set(e.subtypeCode,e)})),this._sublayersCollectionChanged=!1,this.handles.add([e.on("after-add",(function(e){var t=e.item;t.parent=r,r._sublayerLookup.set(t.subtypeCode,t)})),e.on("after-remove",(function(e){var t=e.item;t.parent=null,r._sublayerLookup.delete(t.subtypeCode)})),e.on("after-changes",(function(){r._sublayersCollectionChanged=!0}))],"sublayers-owner"))}}]),y}((0,L.B)((0,T.o1)((0,j.h)((0,R.n)((0,D.M)((0,G.Q)((0,O.Y)((0,P.q)((0,A.I)((0,m.R)((0,E.N)((0,I.V)((0,h.p)(S.Z))))))))))))));(0,y._)([(0,C.Cb)({readOnly:!0})],Te.prototype,"createQueryVersion",null),(0,y._)([(0,C.Cb)({readOnly:!0})],Te.prototype,"editingEnabled",null),(0,y._)([(0,C.Cb)({readOnly:!0})],Te.prototype,"effectiveEditingEnabled",null),(0,y._)([(0,C.Cb)((0,a.Z)((0,a.Z)({},Ee.fields),{},{readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}))],Te.prototype,"fields",void 0),(0,y._)([(0,C.Cb)(Ee.fieldsIndex)],Te.prototype,"fieldsIndex",void 0),(0,y._)([(0,C.Cb)(V.id)],Te.prototype,"id",void 0),(0,y._)([(0,C.Cb)({type:["show","hide","hide-children"]})],Te.prototype,"listMode",void 0),(0,y._)([(0,C.Cb)({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"]})],Te.prototype,"operationalLayerType",void 0),(0,y._)([(0,C.Cb)(Ee.outFields)],Te.prototype,"outFields",void 0),(0,y._)([(0,C.Cb)({readOnly:!0})],Te.prototype,"parsedUrl",null),(0,y._)([(0,C.Cb)()],Te.prototype,"source",null),(0,y._)([(0,C.Cb)({type:[Y],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],Te.prototype,"subtypes",void 0),(0,y._)([(0,C.Cb)({type:f.Z.ofType(Fe),json:{origins:{service:{read:{source:"subtypes",reader:function(e,t,r){var n=e.map((function(e){var n=e.code,i=new Fe({subtypeCode:n});return i.read(t,r),i}));return new(f.Z.ofType(Fe))(n)}}}},name:"layers",write:{overridePolicy:function(e,t,r){var n=this.originOf("sublayers"),i=F.s3.PORTAL_ITEM,o=!0;if((0,F.M9)(n)===i&&(0,F.M9)(r.origin)>i){var a=e.some((function(e){return e.hasUserOverrides()}));o=this._sublayersCollectionChanged||a}return{enabled:o,ignoreOrigin:!0}}}}})],Te.prototype,"sublayers",void 0),(0,y._)([(0,C.Cb)({type:Se.Z})],Te.prototype,"timeInfo",void 0),(0,y._)([(0,C.Cb)({json:{origins:{"portal-item":{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],Te.prototype,"title",void 0),(0,y._)([(0,_.r)("service","title",["name"])],Te.prototype,"readTitleFromService",null),(0,y._)([(0,C.Cb)({json:{read:!1}})],Te.prototype,"type",void 0);var Le=Te=(0,y._)([(0,x.j)("esri.layers.SubtypeGroupLayer")],Te)}}]);
//# sourceMappingURL=255.20e69e62.chunk.js.map