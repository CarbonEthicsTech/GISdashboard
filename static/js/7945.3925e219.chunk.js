"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[7945],{83040:function(e,t,i){i.d(t,{Z:function(){return _}});var n,r=i(15671),l=i(43144),a=i(60136),o=i(29388),u=i(27366),s=i(43404),d=i(46784),p=i(49861),y=i(25243),c=(i(63780),i(93169),i(27135)),v=i(38511),h=i(69912),f=i(66591),m=i(85249),g=new s.X({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"}),b=n=function(e){(0,a.Z)(i,e);var t=(0,o.Z)(i);function i(e){var n;return(0,r.Z)(this,i),(n=t.call(this,e)).alias=null,n.defaultValue=void 0,n.description=null,n.domain=null,n.editable=!0,n.length=-1,n.name=null,n.nullable=!0,n.type=null,n.valueType=null,n.visible=!0,n}return(0,l.Z)(i,[{key:"readDescription",value:function(e,t){var i,n,r=t.description,l=null;try{l=r?JSON.parse(r):null}catch(a){}return null!==(i=null===(n=l)||void 0===n?void 0:n.value)&&void 0!==i?i:null}},{key:"readValueType",value:function(e,t){var i=t.description,n=null;try{n=i?JSON.parse(i):null}catch(r){}return n?g.fromJSON(n.fieldValueType):null}},{key:"clone",value:function(){return new n({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}}]),i}(d.wq);(0,u._)([(0,p.Cb)({type:String,json:{write:!0}})],b.prototype,"alias",void 0),(0,u._)([(0,p.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],b.prototype,"defaultValue",void 0),(0,u._)([(0,p.Cb)()],b.prototype,"description",void 0),(0,u._)([(0,v.r)("description")],b.prototype,"readDescription",null),(0,u._)([(0,p.Cb)({types:f.V5,json:{read:{reader:f.im},write:!0}})],b.prototype,"domain",void 0),(0,u._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],b.prototype,"editable",void 0),(0,u._)([(0,p.Cb)({type:y.z8,json:{write:!0}})],b.prototype,"length",void 0),(0,u._)([(0,p.Cb)({type:String,json:{write:!0}})],b.prototype,"name",void 0),(0,u._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],b.prototype,"nullable",void 0),(0,u._)([(0,c.J)(m.v)],b.prototype,"type",void 0),(0,u._)([(0,p.Cb)()],b.prototype,"valueType",void 0),(0,u._)([(0,v.r)("valueType",["description"])],b.prototype,"readValueType",null),(0,u._)([(0,p.Cb)({type:Boolean,json:{read:!1}})],b.prototype,"visible",void 0);var _=b=n=(0,u._)([(0,h.j)("esri.layers.support.Field")],b)},52410:function(e,t,i){i.d(t,{Z:function(){return s}});var n=i(37762),r=i(15671),l=i(43144),a=i(37270);function o(e){return"oid"===e.type||"esriFieldTypeOID"===e.type}function u(e){return"global-id"===e.type||"esriFieldTypeGlobalID"===e.type}var s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if((0,r.Z)(this,e),this.fields=[],this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this.dateFields=[],this.numericFields=[],this._requiredFields=null,t){this.fields=t;var i,l,s=[],y=(0,n.Z)(t);try{for(y.s();!(i=y.n()).done;){var c=i.value,v=null===c||void 0===c?void 0:c.name,h=p(null===c||void 0===c?void 0:c.name);if(v&&h){var f=d(v);this._fieldsMap.set(v,c),this._fieldsMap.set(f,c),this._normalizedFieldsMap.set(h,c),s.push(f),"date"===(l=c).type||"esriFieldTypeDate"===l.type||"date-only"===l.type||"esriFieldTypeDateOnly"===l.type||"timestamp-offset"===l.type||"esriFieldTypeTimestampOffset"===l.type?(this.dateFields.push(c),this._dateFieldsSet.add(c)):(0,a.H7)(c)&&(this._numericFieldsSet.add(c),this.numericFields.push(c)),o(c)||u(c)||(c.editable=null==c.editable||!!c.editable,c.nullable=null==c.nullable||!!c.nullable)}}}catch(m){y.e(m)}finally{y.f()}s.sort(),this.uid=s.join(",")}}return(0,l.Z)(e,[{key:"destroy",value:function(){this._fieldsMap.clear()}},{key:"requiredFields",get:function(){if(!this._requiredFields){this._requiredFields=[];var e,t=(0,n.Z)(this.fields);try{for(t.s();!(e=t.n()).done;){var i=e.value;o(i)||u(i)||i.nullable||void 0!==(0,a.os)(i)||this._requiredFields.push(i)}}catch(r){t.e(r)}finally{t.f()}}return this._requiredFields}},{key:"has",value:function(e){return null!=this.get(e)}},{key:"get",value:function(e){var t;if(e){var i=this._fieldsMap.get(e);return i||((i=null!==(t=this._fieldsMap.get(d(e)))&&void 0!==t?t:this._normalizedFieldsMap.get(p(e)))&&this._fieldsMap.set(e,i),i)}}},{key:"isDateField",value:function(e){return this._dateFieldsSet.has(this.get(e))}},{key:"isNumericField",value:function(e){return this._numericFieldsSet.has(this.get(e))}},{key:"normalizeFieldName",value:function(e){var t,i=this.get(e);if(i)return null!==(t=i.name)&&void 0!==t?t:void 0}}]),e}();function d(e){return e.trim().toLowerCase()}function p(e){var t,i;return null!==(t=null===(i=(0,a.q6)(e))||void 0===i?void 0:i.toLowerCase())&&void 0!==t?t:""}},66591:function(e,t,i){i.d(t,{im:function(){return k},V5:function(){return C}});i(93169);var n,r=i(15671),l=i(43144),a=i(60136),o=i(29388),u=i(27366),s=i(84652),d=i(49861),p=(i(25243),i(27135)),y=i(69912),c=i(46784),v=(i(63780),n=function(e){(0,a.Z)(i,e);var t=(0,o.Z)(i);function i(e){var n;return(0,r.Z)(this,i),(n=t.call(this,e)).name=null,n.code=null,n}return(0,l.Z)(i,[{key:"clone",value:function(){return new n({name:this.name,code:this.code})}}]),i}(c.wq));(0,u._)([(0,d.Cb)({type:String,json:{write:!0}})],v.prototype,"name",void 0),(0,u._)([(0,d.Cb)({type:[String,Number],json:{write:!0}})],v.prototype,"code",void 0),v=n=(0,u._)([(0,y.j)("esri.layers.support.CodedValue")],v);var h=new(i(43404).X)({inherited:"inherited",codedValue:"coded-value",range:"range"}),f=function(e){(0,a.Z)(i,e);var t=(0,o.Z)(i);function i(e){var n;return(0,r.Z)(this,i),(n=t.call(this,e)).name=null,n.type=null,n}return(0,l.Z)(i)}(c.wq);(0,u._)([(0,d.Cb)({type:String,json:{write:!0}})],f.prototype,"name",void 0),(0,u._)([(0,p.J)(h)],f.prototype,"type",void 0);var m,g=f=(0,u._)([(0,y.j)("esri.layers.support.Domain")],f),b=m=function(e){(0,a.Z)(i,e);var t=(0,o.Z)(i);function i(e){var n;return(0,r.Z)(this,i),(n=t.call(this,e)).codedValues=null,n.type="coded-value",n}return(0,l.Z)(i,[{key:"getName",value:function(e){var t=null;if(this.codedValues){var i=String(e);this.codedValues.some((function(e){return String(e.code)===i&&(t=e.name),!!t}))}return t}},{key:"clone",value:function(){return new m({codedValues:(0,s.d9)(this.codedValues),name:this.name})}}]),i}(g);(0,u._)([(0,d.Cb)({type:[v],json:{write:!0}})],b.prototype,"codedValues",void 0),(0,u._)([(0,p.J)({codedValue:"coded-value"})],b.prototype,"type",void 0);var _,F=b=m=(0,u._)([(0,y.j)("esri.layers.support.CodedValueDomain")],b),w=(i(32718),i(10064),_=function(e){(0,a.Z)(i,e);var t=(0,o.Z)(i);function i(e){var n;return(0,r.Z)(this,i),(n=t.call(this,e)).type="inherited",n}return(0,l.Z)(i,[{key:"clone",value:function(){return new _}}]),i}(g));(0,u._)([(0,p.J)({inherited:"inherited"})],w.prototype,"type",void 0);var T,V=w=_=(0,u._)([(0,y.j)("esri.layers.support.InheritedDomain")],w),Z=T=function(e){(0,a.Z)(i,e);var t=(0,o.Z)(i);function i(e){var n;return(0,r.Z)(this,i),(n=t.call(this,e)).maxValue=null,n.minValue=null,n.type="range",n}return(0,l.Z)(i,[{key:"clone",value:function(){return new T({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}}]),i}(g);(0,u._)([(0,d.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:function(e,t){return t.range&&t.range[1]}},write:{enabled:!1,overridePolicy:function(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer:function(e,t,i){t[i]=[this.minValue||0,e]}}}})],Z.prototype,"maxValue",void 0),(0,u._)([(0,d.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:function(e,t){return t.range&&t.range[0]}},write:{target:"range",writer:function(e,t,i){t[i]=[e,this.maxValue||0]}}}})],Z.prototype,"minValue",void 0),(0,u._)([(0,p.J)({range:"range"})],Z.prototype,"type",void 0);var S=Z=T=(0,u._)([(0,y.j)("esri.layers.support.RangeDomain")],Z),C={key:"type",base:g,typeMap:{range:Z,"coded-value":F,inherited:V}};function k(e){if(!e||!e.type)return null;switch(e.type){case"range":return S.fromJSON(e);case"codedValue":return F.fromJSON(e);case"inherited":return V.fromJSON(e)}return null}},85249:function(e,t,i){i.d(t,{v:function(){return n}});var n=new(i(43404).X)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml",esriFieldTypeBigInteger:"big-integer",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"})}}]);
//# sourceMappingURL=7945.3925e219.chunk.js.map