"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[394],{80394:function(e,n,r){r.d(n,{Hq:function(){return X},Mk:function(){return d},P_:function(){return K},Qp:function(){return H},VO:function(){return T},Wt:function(){return F},_D:function(){return Z},kZ:function(){return V},kr:function(){return $},nF:function(){return _},tB:function(){return B},ut:function(){return q},vF:function(){return ee},zD:function(){return N}});var t,i,a=r(74165),o=r(1413),l=r(29439),u=r(15861),s=(r(59486),r(63780)),f=r(10064),c=r(68860),h=r(15075),x=r(52587),v=r(53866),m=r(585),p=r(80885),g=r(78952);function d(e,n,r){return!(0,x.canProjectWithoutEngine)(e,n,r)}function y(e,n,r){var t=d(e,n,r);if(t&&!(0,x.isLoaded)())throw new f.Z("rasterprojectionhelper-project","projection engine is not loaded");return t}(i=t||(t={}))[i.None=0]="None",i[i.North=1]="North",i[i.South=2]="South",i[i.Both=3]="Both";var M=function(e,n,r){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(1===r[0])return[0,0];for(var i=1,a=-1,o=1,l=-1,u=0;u<e.length;u+=2)isNaN(e[u])||(i=i>e[u]?e[u]:i,a=a>e[u]?a:e[u],o=o>e[u+1]?e[u+1]:o,l=l>e[u+1]?l:e[u+1]);for(var s=n.cols,f=n.rows,c=(a-i)/s/r[0],h=(l-o)/f/r[1],x=2*t,v=0,m=!1,p=[0,0],g=0;g<s-3;g++){for(var d=0;d<f-3;d++){var y=g*f*2+2*d,M=(e[y]+e[y+4]+e[y+4*f]+e[y+4*f+4])/4,w=(e[y+1]+e[y+5]+e[y+4*f+1]+e[y+4*f+5])/4,R=Math.abs((M-e[y+2*f+2])/c),b=Math.abs((w-e[y+2*f+3])/h);if(R+b>v&&(v=R+b,p=[R,b]),x&&v>x){m=!0;break}}if(m)break}return p},w={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},R=32,b=4,P=b,S=new Map,k=new Map,G=500;function N(){return E.apply(this,arguments)}function E(){return(E=(0,u.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=(0,x.isLoaded)(),e.t0){e.next=4;break}return e.next=4,(0,x.load)();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,n,r){return y(e.spatialReference,n),r?(0,x.getTransformation)(n,e.spatialReference,e):(0,x.getTransformation)(e.spatialReference,n,e)}function T(e,n,r){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=e.spatialReference;if(i.equals(n))return e;y(i,n,t);var a,o=r.center,l=new v.Z({xmin:o.x-e.x/2,xmax:o.x+e.x/2,ymin:o.y-e.y/2,ymax:o.y+e.y/2,spatialReference:i}),u=(0,x.project)(l,n,t),s=q(n);if(null==u||null!=s&&u.width>=s){var f=(0,c.c9)(i)/(0,c.c9)(n);a={x:e.x*f,y:e.y*f}}else a={x:u.width,y:u.height};return a}function C(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01;return(0,c.c9)(e)?n/(0,c.c9)(e):0}function _(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=e.spatialReference;if(i.equals(n))return e;y(i,n,r);var a=(0,x.project)(e,n,r);return t&&a?(j([e],[a],i,n),a):a}function j(e,n,r,t){var i=J(r,!0),a=J(t,!0),o=C(r,G),l=C(t,G);if(o&&null!=i&&null!=a)for(var u=0;u<e.length;u++){var s=n[u];if(s){var f=e[u].x,c=s.x;c>=a[1]-l&&Math.abs(f-i[0])<o?s.x-=a[1]-a[0]:c<=a[0]+l&&Math.abs(f-i[1])<o&&(s.x+=a[1]-a[0])}}}function z(e){var n=e.inSR,r=e.outSR,t=e.datumTransformation,i=e.preferPE;if(n.equals(r))return I(e,null).points;if(n.isWebMercator&&r.isWGS84||n.isWGS84&&r.isWebMercator)return function(e){var n=e.cols,r=e.rows,t=e.xres,i=e.yres,a=e.usePixelCenter,o=e.inSR,l=e.outSR,u=e.xmin,s=e.ymax;a&&(u+=t/2,s-=i/2);for(var f=[],c=[],h=Math.max(n,r),v=0;v<h;v++){var p=u+t*Math.min(n,v),g=s-i*Math.min(r,v),d=(0,x.project)(new m.Z({x:p,y:g,spatialReference:o}),l);v<=n&&f.push(d.x),v<=r&&c.push(d.y)}for(var y=[],M=0;M<n;M++)for(var w=0;w<r;w++)y.push([f[M],c[w]]);return y}(e);if(y(n,r,t)&&i){if(n.isGeographic)return L(e);if(null!=W(n))return L(e)}return function(e){var n=I(e,null),r=n.points,t=e.inSR,i=e.outSR,a=e.datumTransformation,o=r.map((function(e){return new m.Z(e[0],e[1],t)})),l=(0,x.project)(o,i,a);return a&&j(o,l,t,i),l.map((function(e){return e?[e.x,e.y]:[NaN,NaN]}))}(e)}function L(e){var n=e.inSR,r=e.outSR,t=e.datumTransformation,i=I(e,W(n)),a=i.points,o=i.mask;if(!n.isGeographic){var u=n.wkid?h.e.coordsys(n.wkid):h.e.fromString(n.isGeographic?h.f.PE_TYPE_GEOGCS:h.f.PE_TYPE_PROJCS,n.wkt);h.g.projToGeog(u,a.length,a)}if(null!=t&&t.steps.length){var s,f=179.9955;if(r.isGeographic&&(s=a.map((function(e){var n=(0,l.Z)(e,1)[0];return n>f?1:n<-f?-1:0}))),t.steps.forEach((function(e){var n=e.wkid?h.e.geogtran(e.wkid):h.e.fromString(h.f.PE_TYPE_GEOGTRAN,e.wkt);h.h.geogToGeog(n,a.length,a,null,e.isInverse?h.f.PE_TRANSFORM_2_TO_1:h.f.PE_TRANSFORM_1_TO_2)})),s)for(var c=0;c<a.length;c++){var x=s[c],v=a[c][0],m=v>f?1:v<-f?-1:0;x&&m&&x!==m&&(a[c][0]=x>0?v+360:v-360)}}if(!r.isGeographic){var p=W(r,!0),g=null!=p&&p.isEnvelope?[p.bbox[1],p.bbox[3]]:[-90,90];!function(e,n){for(var r=(0,l.Z)(n,2),t=r[0],i=r[1],a=0;a<e.length;a++){var o=e[a][1];(o<t||o>i)&&(e[a]=[NaN,NaN])}}(a,g);var d=r.wkid?h.e.coordsys(r.wkid):h.e.fromString(r.isGeographic?h.f.PE_TYPE_GEOGCS:h.f.PE_TYPE_PROJCS,r.wkt);h.g.geogToProj(d,a.length,a)}var y=a;if(o&&a.length!==o.length){y=[];for(var M=0,w=0;M<o.length;M++)o[M]?y.push(a[w++]):y.push([NaN,NaN])}return y}function W(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e.wkid||e.wkt;if(!r||e.isGeographic)return null;if(r=String(r),S.has(r)){var t=S.get(r);return n?null===t||void 0===t?void 0:t.gcs:null===t||void 0===t?void 0:t.pcs}var i=e.wkid?h.e.coordsys(e.wkid):h.e.fromString(e.isGeographic?h.f.PE_TYPE_GEOGCS:h.f.PE_TYPE_PROJCS,e.wkt),a=O(i,C(e,1e-4)),o=O(i,0,!0);return S.set(r,{pcs:a,gcs:o}),n?o:a}function O(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],t=h.j.generate(e),i=r?e.horizonGcsGenerate():e.horizonPcsGenerate();if(!t||null===i||void 0===i||!i.length)return null;var a=!1,o=i.find((function(e){return 1===e.getInclusive()&&1===e.getKind()}));if(!o){if(o=i.find((function(e){return 1===e.getInclusive()&&0===e.getKind()})),!o)return null;a=!0}var u=r?0:(2===t.getNorthPoleLocation()?1:0)|(2===t.getSouthPoleLocation()?2:0),s=t.isPannableRectangle(),f=o.getCoord();if(a)return{isEnvelope:a,isPannable:s,vertices:f,coef:null,bbox:[f[0][0]-n,f[0][1]-n,f[1][0]+n,f[1][1]+n],poleLocation:u};for(var c=0,x=[],v=(0,l.Z)(f[0],2),m=v[0],p=v[1],g=(0,l.Z)(f[0],2),d=g[0],y=g[1],M=0,w=f.length;M<w;M++){++c===w&&(c=0);var R=(0,l.Z)(f[M],2),b=R[0],P=R[1],S=(0,l.Z)(f[c],2),k=S[0],G=S[1];if(G===P)x.push([b,k,P,G,2]);else{var N=(k-b)/(G-P||1e-4),E=b-N*P;P<G?x.push([N,E,P,G,0]):x.push([N,E,G,P,1])}m=m<b?m:b,p=p<P?p:P,d=d>b?d:b,y=y>P?y:P}return{isEnvelope:!1,isPannable:s,vertices:f,coef:x,bbox:[m,p,d,y],poleLocation:u}}function I(e,n){var r=[],t=e.cols,i=e.rows,a=e.xres,o=e.yres,u=e.usePixelCenter,s=e.xmin,f=e.ymax;if(u&&(s+=a/2,f-=o/2),null==n){for(var c=0;c<t;c++)for(var h=0;h<i;h++)r.push([s+a*c,f-o*h]);return{points:r}}var x=new Uint8Array(t*i);if(n.isEnvelope){for(var v=(0,l.Z)(n.bbox,4),m=v[0],p=v[1],g=v[2],d=v[3],y=0,M=0;y<t;y++)for(var w=s+a*y,R=n.isPannable||w>=m&&w<=g,b=0;b<i;b++,M++){var P=f-o*b;R&&P>=p&&P<=d&&(r.push([w,P]),x[M]=1)}return{points:r,mask:x}}for(var S=n.coef,k=[],G=0;G<i;G++){for(var N=f-o*G,E=[],Z=[],T=0;T<S.length;T++){var C=(0,l.Z)(S[T],5),_=C[0],j=C[1],z=C[2],L=C[3],W=C[4];if(N===z&&z===L)E.push(_),E.push(j),Z.push(2),Z.push(2);else if(N>=z&&N<=L){var O=_*N+j;E.push(O),Z.push(W)}}var I=E;if(E.length>2){var A=2===Z[0]?0:Z[0],B=E[0];I=[];for(var F=1;F<Z.length;F++)2===Z[F]&&F!==Z.length-1||(Z[F]!==A&&(I.push(0===A?Math.min(B,E[F-1]):Math.max(B,E[F-1])),A=Z[F],B=E[F]),F===Z.length-1&&I.push(0===Z[F]?Math.min(B,E[F]):Math.max(B,E[F])));I.sort((function(e,n){return e-n}))}else E[0]>E[1]&&(I=[E[1],E[0]]);k.push(I)}for(var Y=0,q=0;Y<t;Y++)for(var J=s+a*Y,D=0;D<i;D++,q++){var X=f-o*D,K=k[D];if(2===K.length)J>=K[0]&&J<=K[1]&&(r.push([J,X]),x[q]=1);else if(K.length>2){for(var H=!1,Q=0;Q<K.length;Q+=2)if(J>=K[Q]&&J<=K[Q+1]){H=!0;break}H&&(r.push([J,X]),x[q]=1)}}return{points:r,mask:x}}function A(e){var n=q(e[0].spatialReference);if(e.length<2||null==n)return e[0];var r=C(e[0].spatialReference);if(1===(e=e.filter((function(e){return e.width>r}))).length)return e[0];for(var t=e[0],i=t.xmin,a=t.xmax,o=t.ymin,l=t.ymax,u=1;u<e.length;u++){var s=e[u];a=s.xmax+n*u,o=Math.min(o,s.ymin),l=Math.max(l,s.ymax)}return new v.Z({xmin:i,xmax:a,ymin:o,ymax:l,spatialReference:e[0].spatialReference})}function B(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=e.spatialReference;if(a.equals(n))return e;var o=X(e),l=q(a,!0),u=q(n);if(0===o||null==l||null==u){var f=Y(e,n,r,i);if(null==l&&null!=u&&Math.abs(f.width-u)<C(n)&&(0,x.isLoaded)()){var c=W(a);if(null!=c&&c.poleLocation===t.None&&e.width<(c.bbox[2]-c.bbox[0])/2)return function(e,n){var r=q(n);if(null==r)return null;var t=e.xmin,i=e.ymin,a=e.xmax,o=e.ymax,l=e.spatialReference,u=new p.Z({spatialReference:l,rings:[[[t,i],[a,i],[a,o],[t,o],[t,i]]]}),s=(0,x.project)(u,n);if(2!==s.rings.length||!s.rings[0].length||!s.rings[1].length)return null;for(var f=s.rings,c=C(l),h=new v.Z({spatialReference:n}),m=0;m<2;m++){t=a=f[m][0][0],i=o=f[m][0][1];for(var g=0;g<f[m].length;g++)t=t>f[m][g][0]?f[m][g][0]:t,a=a<f[m][g][0]?f[m][g][0]:a,i=i>f[m][g][1]?f[m][g][1]:i,o=o<f[m][g][1]?f[m][g][1]:o;if(0===m)h.ymin=i,h.ymax=o,h.xmin=t,h.xmax=a;else if(h.ymin=Math.min(h.ymin,i),h.ymax=Math.max(h.ymax,o),Math.abs(a-r/2)<c)h.xmin=t,h.xmax=h.xmax+r;else{if(!(Math.abs(t+r/2)<c))return null;h.xmax=a+r}}return h}(e,n)||f}return f}var h=e.clone().normalize();if(1===h.length&&e.xmax<l&&e.xmax-l/2>C(a))for(var m=e.xmin,g=e.xmax,d=0;d<=o;d++){var y=0===d?m:-l/2,M=d===o?g-l*d:l/2;h[d]=new v.Z({xmin:y,xmax:M,ymin:e.ymin,ymax:e.ymax,spatialReference:a})}return A(h.map((function(e){return Y(e,n,r,i)})).filter(s.pC))}function F(e,n,r){if("extent"===e.type){var t=e,i=t.xmin,a=t.ymin,o=t.xmax,l=t.ymax,u=t.spatialReference;e=new p.Z({rings:[[[i,l],[o,l],[o,a],[i,a],[i,l]]],spatialReference:u})}return e.spatialReference.equals(n)?e:(y(e.spatialReference,n,r),(0,x.project)(e,n,r))}function Y(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=e.spatialReference;if(a.equals(n)||!n)return e;y(a,n,r);var o=(0,x.project)(e,n,r);if(i&&n.isWebMercator&&o&&(o.ymax=Math.min(20037508.342787,o.ymax),o.ymin=Math.max(-20037508.342787,o.ymin),o.ymin>=o.ymax))return null;if(!t||!o)return o;var l=J(a,!0),u=J(n,!0);if(null==l||null==u)return o;var s=C(a,.001),f=C(a,G),c=C(n,.001);if(Math.abs(o.xmin-u[0])<c&&Math.abs(o.xmax-u[1])<c){var h=Math.abs(e.xmin-l[0]),v=Math.abs(l[1]-e.xmax);if(h<s&&v>f){o.xmin=u[0];var p=[];p.push(new m.Z(e.xmax,e.ymin,a)),p.push(new m.Z(e.xmax,(e.ymin+e.ymax)/2,a)),p.push(new m.Z(e.xmax,e.ymax,a));var g=p.map((function(e){return _(e,n,r)})).filter((function(e){return!isNaN(null===e||void 0===e?void 0:e.x)})).map((function(e){return e.x}));o.xmax=Math.max.apply(null,g)}if(v<s&&h>f){o.xmax=u[1];var d=[];d.push(new m.Z(e.xmin,e.ymin,a)),d.push(new m.Z(e.xmin,(e.ymin+e.ymax)/2,a)),d.push(new m.Z(e.xmin,e.ymax,a));var M=d.map((function(e){return _(e,n,r)})).filter((function(e){return!isNaN(null===e||void 0===e?void 0:e.x)})).map((function(e){return e.x}));o.xmin=Math.min.apply(null,M)}}else{var w=C(n,.001);Math.abs(o.xmin-u[0])<w&&(o.xmin=u[0]),Math.abs(o.xmax-u[1])<w&&(o.xmax=u[1])}return o}function q(e){if(!e)return null;var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?20037508.342787:20037508.342788905;return e.isWebMercator?2*n:e.wkid&&e.isGeographic?360:2*w[e.wkid]||null}function J(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.isGeographic)return[-180,180];var r=q(e,n);return null!=r?[-r/2,r/2]:null}function D(e,n,r,t){var i=(e-n)/r;return i-Math.floor(i)!=0?i=Math.floor(i):t&&(i-=1),i}function X(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=q(e.spatialReference);if(null==r)return 0;var t=n?0:-r/2,i=C(e.spatialReference),a=!n&&Math.abs(e.xmax-r/2)<i?r/2:e.xmax,o=!n&&Math.abs(e.xmin+r/2)<i?-r/2:e.xmin;return D(a,t,r,!0)-D(o,t,r,!1)}function K(e){var n=e.storageInfo.origin.x,r=q(e.spatialReference,!0);if(null==r)return{originX:n,halfWorldWidth:null,pyramidsInfo:null};for(var t=r/2,i=e.nativePixelSize,a=e.storageInfo,o=e.extent,l=a.maximumPyramidLevel,u=a.blockWidth,s=a.pyramidScalingFactor,f=i.x,c=[],h=null!=e.transform&&"gcs-shift"===e.transform.type,x=n+(h?0:t),v=h?r-n:t-n,m=0;m<=l;m++){var p=(o.xmax-n)/f/u,g=p-Math.floor(p)==0?p:Math.ceil(p),d=v/f/u,y=d-Math.floor(d)==0?d:Math.ceil(d),M=Math.floor(x/f/u),w=Math.round(x/f)%u,R=(u-Math.round(v/f)%u)%u;c.push({resolutionX:f,blockWidth:u,datsetColumnCount:g,worldColumnCountFromOrigin:y,leftMargin:w,rightPadding:R,originColumnOffset:M}),f*=s}return{originX:n,halfWorldWidth:t,pyramidsInfo:c,hasGCSSShiftTransform:h}}function H(e){var n=e.isAdaptive&&null==e.spacing,r=e.spacing||[R,R],t=Q(e),i={cols:t.size[0]+1,rows:t.size[1]+1},a=t.outofBoundPointCount>0&&t.outofBoundPointCount<t.offsets.length/2,l=t.outofBoundPointCount===t.offsets.length/2||n&&a?[0,0]:M(t.offsets,i,r,P),u=(l[0]+l[1])/2,s=e.projectedExtent.spatialReference,f=e.srcBufferExtent.spatialReference;if(n&&(a||u>P)&&(d(s,f,e.datumTransformation)&&(s.isGeographic||W(s)),r=[b,b],i={cols:(t=Q((0,o.Z)((0,o.Z)({},e),{},{spacing:r}))).size[0]+1,rows:t.size[1]+1},l=M(t.offsets,i,r,P)),t.error=l,r[0]>1&&(t.coefficients=U(t.offsets,i,a)),e.includeGCSGrid&&!s.isGeographic&&!s.isWebMercator)if(f.isGeographic)t.gcsGrid={offsets:t.offsets,coefficients:t.coefficients,spacing:r};else{var c=W(s);if(null!=c&&!c.isEnvelope){var x=function(e){if(!e||e.isGeographic)return e;var n,r=String(e.wkid||e.wkt);return k.has(r)?n=k.get(r):(n=(e.wkid?h.e.coordsys(e.wkid):h.e.fromString(h.f.PE_TYPE_PROJCS,e.wkt)).getGeogcs().getCode(),k.set(r,n)),new g.Z({wkid:n})}(s),v=B(e.projectedExtent,x),m=Q((0,o.Z)((0,o.Z)({},e),{},{srcBufferExtent:v,spacing:r})).offsets,p=U(m,i,a);t.gcsGrid={offsets:m,coefficients:p,spacing:r}}}return t}function Q(e){var n,r=e.projectedExtent,t=e.srcBufferExtent,i=e.pixelSize,a=e.datumTransformation,o=e.rasterTransform,l=r.spatialReference,u=t.spatialReference,s=y(l,u),f=r.xmin,c=r.ymin,h=r.xmax,x=r.ymax,v=q(u),p=null!=v&&(e.hasWrapAround||"gcs-shift"===(null===o||void 0===o?void 0:o.type)),g=e.spacing||[R,R],d=g[0]*i.x,M=g[1]*i.y,w=1===g[0],P=Math.ceil((h-f)/d-.1/g[0])+(w?0:1),S=Math.ceil((x-c)/M-.1/g[1])+(w?0:1),k=z({cols:P,rows:S,xmin:f,ymax:x,xres:d,yres:M,inSR:l,outSR:u,datumTransformation:a,preferPE:g[0]<=b,usePixelCenter:w}),N=[],E=0,Z=w?-1:NaN,T=t.xmin,_=t.xmax,j=t.ymax,L=t.width,O=t.height,I=C(u,G),A=null!=v&&T>0&&_>v/2,B=!1;if(s){var F=W(l);B=null!=F&&F.poleLocation>0}for(var Y=0;Y<P;Y++){for(var J=[],D=0;D<S;D++){var X=k[Y*S+D];if(p&&X[0]>_&&X[0]>v/2-I?X[0]-=v:p&&0===Y&&X[0]<0&&A&&!o&&(X[0]+=v),!X||isNaN(X[0])||isNaN(X[1]))N.push(Z),N.push(Z),J.push(null),E++;else{if(o){var K=o.inverseTransform(new m.Z({x:X[0],y:X[1],spatialReference:u}));X=[K.x,K.y]}J.push(X),Y>0&&p&&n[D]&&X[0]<n[D][0]&&(X[0]+=v,B&&X[0]>_&&X[0]>v&&(X[0]-=v)),N.push((X[0]-T)/L),N.push((j-X[1])/O)}}n=J}return{offsets:N,error:null,coefficients:null,outofBoundPointCount:E,spacing:g,size:w?[P,S]:[P-1,S-1]}}function U(e,n,r){for(var t=n.cols,i=n.rows,a=new Float32Array((t-1)*(i-1)*2*6),o=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),l=new Float32Array([-1,1,0,0,-1,1,1,0,0]),u=0;u<t-1;u++){for(var s=0;s<i-1;s++){for(var f=u*i*2+2*s,c=e[f],h=e[f+1],x=e[f+2],v=e[f+3],m=e[f+=2*i],p=e[f+1],g=e[f+2],d=e[f+3],y=0,M=12*(s*(t-1)+u),w=0;w<3;w++)a[M++]=o[y++]*c+o[y++]*x+o[y++]*g;y=0;for(var R=0;R<3;R++)a[M++]=o[y++]*h+o[y++]*v+o[y++]*d;y=0;for(var b=0;b<3;b++)a[M++]=l[y++]*c+l[y++]*m+l[y++]*g;y=0;for(var P=0;P<3;P++)a[M++]=l[y++]*h+l[y++]*p+l[y++]*d}if(r)for(var S=0;S<a.length;S++)isNaN(a[S])&&(a[S]=-1)}return a}function V(e){var n=e.clone().normalize();return 1===n.length?n[0]:A(n)}function $(e,n,r){var t,i=n.storageInfo,a=n.pixelSize,o=0,l=!1,u=i.pyramidResolutions,s="mixed"===(null===(t=i.tileInfo.format)||void 0===t?void 0:t.toLowerCase())?Math.max(1,Math.min(3,i.tileInfo.dpi/96)):1,f=(e.x+e.y)/2/s;if(null!=u&&u.length){var h=u[u.length-1],x=(h.x+h.y)/2,v=(a.x+a.y)/2;if(f<=v)o=0;else if(f>=x)o=u.length,l=f/x>8;else for(var p,g=v,d=1;d<=u.length;d++){if(f<=(p=(u[d-1].x+u[d-1].y)/2)){f===p?o=d:"down"===r?(o=d-1,l=f/g>8):o="up"===r||f-g>p-f||f/g>2?d:d-1;break}g=p}var y=0===o?a:u[o-1];return l&&Math.min(y.x,y.y)*(0,c.c9)(n.spatialReference)>19567&&(l=!1),{pyramidLevel:o,pyramidResolution:new m.Z({x:y.x,y:y.y,spatialReference:n.spatialReference}),excessiveReading:l}}var M=Math.log(e.x/a.x)/Math.LN2,w=Math.log(e.y/a.y)/Math.LN2,R=n.storageInfo.maximumPyramidLevel||0;(o="down"===r?Math.floor(Math.min(M,w)):"up"===r?Math.ceil(Math.max(M,w)):Math.round((M+w)/2))<0?o=0:o>R&&(l=o>R+3,o=R);var b=Math.pow(2,o);return{pyramidLevel:o,pyramidResolution:new m.Z({x:b*n.nativePixelSize.x,y:b*n.nativePixelSize.y,spatialReference:n.spatialReference}),excessiveReading:l}}function ee(e,n,r){var t,i,a,o=null!==(t=null===r||void 0===r?void 0:r.tileSize)&&void 0!==t?t:512,l=null===(i=null===r||void 0===r?void 0:r.alignGlobalDatasetWithAGOL)||void 0===i||i,u=!(null===r||void 0===r||!r.limitToSrcResolution),s=e.extent,f=e.spatialReference,h=e.pixelSize,x=T(new m.Z({x:h.x,y:h.y,spatialReference:f}),n,s);if(null==x)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};var v=(x.x+x.y)/2,p=(0,c.c9)(n),g=v*p*96*39.37,d=n.isGeographic?256/o*295828763.7958547:256/o*591657527.591555,y="vector-magdir"===e.dataType||"vector-uv"===e.dataType,M=B(s,n),w=Math.min(Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2),Math.ceil(Math.log(d/2/g)/Math.LN2));if(!y&&l&&(n.isGeographic||n.isWebMercator)&&(!(y=M.xmin*M.xmax<0)&&w<3)){var R=q(n);if(null!=R){var b=Math.pow(2,w)*v*o,P=Math.ceil(R/b);y=1===P||2===P&&R/2-M.xmax<b}}var S,k=g,G=1.001,N=Math.min(2,Math.max(1.414,(null===(a=e.storageInfo)||void 0===a?void 0:a.pyramidScalingFactor)||2));if(y){k=d;var E=n.isGeographic?1341104507446289e-21:.29858214164761665,Z=E*(96*p*39.37),C=n.isGeographic?4326:3857;(S=T(new m.Z({x:E,y:E,spatialReference:{wkid:C}}),f,M)).x*=k/Z,S.y*=k/Z}else{S={x:h.x,y:h.y};for(var _=0;k<d*(G/2)&&_<w;)_++,k*=N,S.x*=N,S.y*=N;Math.max(k,d)/Math.min(k,d)<=G&&(k=d)}for(var j=[k],z=[{x:S.x,y:S.y}],L=Math.min(70.5310735,g)/G;k>=L;)k/=N,S.x/=N,S.y/=N,j.push(k),z.push({x:S.x,y:S.y});if(u){var W=.001*h.x,O=z.findIndex((function(e){return e.x>=h.x-W&&e.x<=h.x+W}));O>-1?(z.length=O+1,j.length=O+1):(O=z.findIndex((function(e){return e.x<=h.x+W})),O>0&&(z.length=O,j.length=O))}return{projectedPixelSize:x,scales:j,srcResolutions:z,isCustomTilingScheme:!y}}}}]);
//# sourceMappingURL=394.5e64f334.chunk.js.map