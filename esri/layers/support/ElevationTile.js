// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,h){Object.defineProperty(h,"__esModule",{value:!0});c=function(){function c(a,b){this.tile=a;b?(a=this.tile.extent,this.samplerData={pixelData:b.values,width:b.width,height:b.height,safeWidth:.99999999*(b.width-1),noDataValue:b.noDataValue,dx:(b.width-1)/(a[2]-a[0]),dy:(b.width-1)/(a[3]-a[1]),x0:a[0],y1:a[3]}):this.samplerData=null}c.prototype.sample=function(a,b){if(this.samplerData){var d;var e=this.samplerData,f=e.safeWidth,c=e.width,g=e.pixelData;d=e.noDataValue;
b=e.dy*(e.y1-b);b=0>b?0:b>f?f:b;a=e.dx*(a-e.x0);a=0>a?0:a>f?f:a;var f=Math.floor(b),e=Math.floor(a),k=f*c+e,h=k+c,l=g[k],c=g[h],k=g[k+1],g=g[h+1];l!==d&&c!==d&&k!==d&&g!==d?(d=a-e,a=l+(k-l)*d,d=a+(c+(g-c)*d-a)*(b-f)):d=void 0;return d}};return c}();h.ElevationTile=c;h.default=c});