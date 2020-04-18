// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../geometry ../request ../core/Error ../core/lang ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/string ../core/urlUtils ../core/urlUtils ../core/accessorSupport/decorators ./Layer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./support/LOD ./support/TileInfo ./support/WMTSLayerInfo".split(" "),
function(C,D,E,n,c,F,G,g,p,q,r,t,u,v,h,k,d,w,x,y,z,A,f,l,B){return function(m){function b(a,e){a=m.call(this,a)||this;a.copyright="";a.fullExtent=new g.Extent(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,g.SpatialReference.WebMercator);a.legendEnabled=!1;a.isReference=null;a.popupEnabled=!1;a.spatialReference=g.SpatialReference.WebMercator;a.subDomains=null;a.tileInfo=new l({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new g.Point({x:-2.0037508342787E7,
y:2.0037508342787E7,spatialReference:g.SpatialReference.WebMercator}),spatialReference:g.SpatialReference.WebMercator,lods:[new f({level:0,scale:5.91657527591555E8,resolution:156543.033928}),new f({level:1,scale:2.95828763795777E8,resolution:78271.5169639999}),new f({level:2,scale:1.47914381897889E8,resolution:39135.7584820001}),new f({level:3,scale:7.3957190948944E7,resolution:19567.8792409999}),new f({level:4,scale:3.6978595474472E7,resolution:9783.93962049996}),new f({level:5,scale:1.8489297737236E7,
resolution:4891.96981024998}),new f({level:6,scale:9244648.868618,resolution:2445.98490512499}),new f({level:7,scale:4622324.434309,resolution:1222.99245256249}),new f({level:8,scale:2311162.217155,resolution:611.49622628138}),new f({level:9,scale:1155581.108577,resolution:305.748113140558}),new f({level:10,scale:577790.554289,resolution:152.874056570411}),new f({level:11,scale:288895.277144,resolution:76.4370282850732}),new f({level:12,scale:144447.638572,resolution:38.2185141425366}),new f({level:13,
scale:72223.819286,resolution:19.1092570712683}),new f({level:14,scale:36111.909643,resolution:9.55462853563415}),new f({level:15,scale:18055.954822,resolution:4.77731426794937}),new f({level:16,scale:9027.977411,resolution:2.38865713397468}),new f({level:17,scale:4513.988705,resolution:1.19432856685505}),new f({level:18,scale:2256.994353,resolution:.597164283559817}),new f({level:19,scale:1128.497176,resolution:.298582141647617})]});a.type="web-tile";a.urlTemplate=null;a.wmtsInfo=null;return a}n(b,
m);b.prototype.normalizeCtorArgs=function(a,e){return"string"===typeof a?r.mixin({urlTemplate:a},e||{}):a};b.prototype.load=function(a){var e=this;a=this.loadFromPortal({supportedTypes:["WMTS"]},a).then(function(){var a="";if(e.urlTemplate)if(e.spatialReference.equals(e.tileInfo.spatialReference)){var b=new h.Url(e.urlTemplate);e.subDomains&&0<e.subDomains.length||-1===b.authority.indexOf("{subDomain}")||(a="is missing 'subDomains' property")}else a="spatialReference must match tileInfo.spatialReference";
else a="is missing the required 'urlTemplate' property value";if(a)throw new q("web-tile-layer:load","WebTileLayer (title: '"+e.title+"', id: '"+e.id+"') "+a);});this.addResolvingPromise(a);return u.resolve(this)};Object.defineProperty(b.prototype,"levelValues",{get:function(){var a=[];if(!this.tileInfo)return null;for(var e=0,b=this.tileInfo.lods;e<b.length;e++){var d=b[e];a[d.level]=d.levelValue||d.level}return a},enumerable:!0,configurable:!0});b.prototype.readSpatialReference=function(a,e){return a||
e.fullExtent&&e.fullExtent.spatialReference&&g.SpatialReference.fromJSON(e.fullExtent.spatialReference)};Object.defineProperty(b.prototype,"tileServers",{get:function(){if(!this.urlTemplate)return null;var a=[],e=this.subDomains,b=new h.Url(this.urlTemplate),d=b.scheme?b.scheme+"://":"//",c=d+b.authority+"/";if(-1===b.authority.indexOf("{subDomain}"))a.push(c);else if(e&&0<e.length&&1<b.authority.split(".").length)for(c=0;c<e.length;c++)a.push(d+b.authority.replace(/\{subDomain\}/gi,e[c])+"/");return a.map(function(a){"/"!==
a.charAt(a.length-1)&&(a+="/");return a})},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"urlPath",{get:function(){if(!this.urlTemplate)return null;var a=this.urlTemplate,b=new h.Url(a);return a.substring(((b.scheme?b.scheme+"://":"//")+b.authority+"/").length)},enumerable:!0,configurable:!0});b.prototype.readUrlTemplate=function(a,b){return a||b.templateUrl};b.prototype.writeUrlTemplate=function(a,b){a&&k.isProtocolRelative(a)&&(a="https:"+a);b.templateUrl=a?k.normalize(a):a};
b.prototype.fetchTile=function(a,b,d,c){void 0===c&&(c={});var e=c.signal,f=c.timestamp;a=this.getTileUrl(a,b,d);e={responseType:"image",signal:e};null!=f&&(e.query={_ts:c.timestamp});return p(a,e).then(function(a){return a.data})};b.prototype.getTileUrl=function(a,b,c){a=this.levelValues[a];var d=this.tileServers[b%this.tileServers.length]+v.replace(this.urlPath,{level:a,col:c,row:b});return d=d.replace(/\{level\}/gi,""+a).replace(/\{row\}/gi,""+b).replace(/\{col\}/gi,""+c)};c([d.property({type:String,
value:"",json:{write:!0}})],b.prototype,"copyright",void 0);c([d.property({type:g.Extent,json:{write:!0}})],b.prototype,"fullExtent",void 0);c([d.property({readOnly:!0,json:{read:!1,write:!1}})],b.prototype,"legendEnabled",void 0);c([d.property({type:["show","hide"]})],b.prototype,"listMode",void 0);c([d.property({dependsOn:["tileInfo"]})],b.prototype,"levelValues",null);c([d.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],b.prototype,"isReference",
void 0);c([d.property({type:["WebTiledLayer"],value:"WebTiledLayer"})],b.prototype,"operationalLayerType",void 0);c([d.property({readOnly:!0,json:{read:!1,write:!1}})],b.prototype,"popupEnabled",void 0);c([d.property({type:g.SpatialReference})],b.prototype,"spatialReference",void 0);c([d.reader("spatialReference",["spatialReference","fullExtent.spatialReference"])],b.prototype,"readSpatialReference",null);c([d.property({type:[String],json:{write:!0}})],b.prototype,"subDomains",void 0);c([d.property({type:l,
json:{write:!0}})],b.prototype,"tileInfo",void 0);c([d.property({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],b.prototype,"tileServers",null);c([d.property({json:{read:!1}})],b.prototype,"type",void 0);c([d.property({dependsOn:["urlTemplate"]})],b.prototype,"urlPath",null);c([d.property({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],b.prototype,"urlTemplate",void 0);c([d.reader("urlTemplate",["urlTemplate","templateUrl"])],b.prototype,"readUrlTemplate",null);c([d.writer("urlTemplate",
{templateUrl:{type:String}})],b.prototype,"writeUrlTemplate",null);c([d.property({type:B.default,json:{write:!0}})],b.prototype,"wmtsInfo",void 0);return b=c([d.subclass("esri.layers.WebTileLayer")],b)}(d.declared(z.RefreshableLayer(A.ScaleRangeLayer(x.OperationalLayer(y.PortalLayer(t.MultiOriginJSONMixin(w)))))))});