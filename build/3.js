webpackJsonp([3,5],{41:function(t,e,r){"use strict";function n(){return a++}function i(t,e){var r=t.aabb(),n=e.aabb();return r.cx>n.cx?["w","e"]:["e","w"]}function o(t){return new f(t)}Object.defineProperty(e,"__esModule",{value:!0});var s=r(13),u=(r.n(s),r(42));r.d(e,"LinksRenderer",function(){return f}),e.create=o;var a=0,c=s.svg.line(),f=function(){function t(t){this.visses=[],this.observing=s.map(),this.$parent=s.select(t),this.$div=this.$parent.append("div").attr({class:"layer layer1 links"}),this.$svg=this.$div.append("svg").attr({width:"100%",height:"100%"})}return t.prototype.register=function(t){function e(){r.update(t)}var r=this;return t.on("select",e),{idtype:t,l:e,visses:[],push:function(t,e){this.visses.push({vis:t,dim:e,id:n()})},remove:function(t){var e,r=this.visses;for(e=r.length-1;e>=0;--e)r[e].vis===t&&r.splice(e,1)}}},t.prototype.unregister=function(t){t.idtype.off("select",t.l)},t.prototype.push=function(t){var e=this;this.visses.push(t);var r=this.observing;t.data.forEach(function(n,i){if(r.has(n.name))r.get(n.name).push(t,i);else{var o=e.register(n);o.push(t,i),r.set(n.name,o),e.updateIDTypes()}}),this.update()},t.prototype.remove=function(t){var e=this,r=this.visses.indexOf(t);r>=0&&this.visses.splice(r,1);var n=this.observing;t.data.forEach(function(r){var i=n.get(r.name);i.remove(t),0===i.visses.length&&(e.unregister(i),n.remove(r.name),e.updateIDTypes())}),this.update()},t.prototype.update=function(t){function e(t,e){var r,n,i,o,s=[],u=t.visses.length;for(r=0;r<u;++r)for(i=t.visses[r].id,n=0;n<r;++n)o=t.visses[n].id,s.push(Math.min(i,o)+"-"+Math.max(i,o));var a=e.selectAll("g").data(s);a.enter().append("g"),a.exit().remove(),a.attr("data-id",String)}function n(t,e,r,n){0!==t.length&&t.forEach(function(t){var o=e>t.id,s=Math.min(e,t.id)+"-"+Math.max(e,t.id),u=n.select('g[data-id="'+s+'"]'),a=[];r.forEach(function(e,r){if(e&&t.locs[r]){var n=i(e,t.locs[r]),s=[e.corner(n[0]),t.locs[r].corner(n[1])];a.push(o?s.reverse():s)}});var f=u.selectAll("path").data(a);f.enter().append("path").attr("class","phovea-select-selected"),f.exit().remove(),f.attr("d",function(t){return c(t)})})}function o(t){var i=this.$svg.select('g[data-idtype="'+t.idtype.name+'"]');if(t.visses.length<=1)return void i.selectAll("*").remove();var o=t.idtype.selections();if(o.isNone)return void i.selectAll("*").remove();console.log(t.idtype.name,o.toString()),e(t,i);var s=[];t.visses.forEach(function(t){var e=t.id;t.vis.data.ids().then(function(a){var c=a.dim(t.dim),f=[],p=[];o.dim(0).iter().forEach(function(t){var e=c.indexOf(t);e<0?f.push(-1):(f.push(p.length),p.push(r.i(u.d)(e)))}),0!==p.length&&t.vis.locate.apply(t.vis,p).then(function(t){var r;r=1===p.length?f.map(function(e){return e<0?void 0:t}):f.map(function(e){return t[e]}),n(s,e,r,i),s.push({id:e,locs:r})})})})}t?o.call(this,this.observing.get(t.name)):this.observing.values().forEach(o,this)},t.prototype.updateIDTypes=function(){var t=this.$svg.selectAll("g").data(this.observing.values());t.enter().append("g"),t.exit().remove(),t.attr("data-idtype",function(t){return t.idtype.name})},t}()},42:function(t,e,r){"use strict";function n(t,e){return t<0?e+1+t:t}function i(t){return new x("unnamed","gray",t)}function o(t,e){return new A(t,e)}function s(t){if(1===t.length)return t[0];var e=t[0].iter().asList();return t.slice(1).forEach(function(t){t.iter().forEach(function(t){e.indexOf(t)<0&&e.push(t)})}),O.from(e)}function u(){return new j}function a(){var t=new j;return t.dims=[O.none(),O.none()],t}function c(){if(0===arguments.length)return u();var t=new j;return Array.isArray(arguments[0])&&r.i(d.h)(arguments).forEach(function(e,r){0!==e.length&&t.dim(r).setSlice(e[0],e[1],e[2])}),"number"==typeof arguments[0]&&t.dim(0).setSlice(arguments[0],arguments[1],arguments[2]),t}function f(){if(0===arguments.length)return u();var t=new j,e=arguments[0];return Array.isArray(e)||(e=r.i(d.h)(arguments)),t.dims=e.map(function(t){return t.dim(0)}),t}function p(){if(0===arguments.length)return u();var t=new j;return Array.isArray(arguments[0])&&arguments[0][0]instanceof O?t.dims=arguments[0]:Array.isArray(arguments[0])?r.i(d.h)(arguments).forEach(function(e,r){e instanceof O?t.dims[r]=e:t.dim(r).setList(e)}):"number"==typeof arguments[0]?t.dim(0).setList(r.i(d.h)(arguments)):arguments[0]instanceof O&&(t.dims=r.i(d.h)(arguments)),t}function h(t){var e,r,n=0,i=new Array;for(t=t.trim();n<t.length;)switch(e=t.charAt(n)){case'"':r=l(t,n),n=r.act+1,i.push(r.dim);break;case",":n++,i.push(O.all());break;default:e.match(/\s/)?n++:(r=y(t,n),n=r.act+1,i.push(r.dim))}return","===t.charAt(t.length-1)&&i.push(O.all()),new j(i)}function l(t,e){e+=1;var r,n=t.indexOf('"',e),i=t.slice(e,n);switch(e=n+1,t.charAt(e)){case'"':return n=t.indexOf('"',e+1),r=y(t,n+1),{dim:new x(i,t.slice(e+1,n),r.dim),act:r.act};case"{":for(var o=[];"}"!==t.charAt(e);)r=l(t,e+1),o.push(r.dim),e=r.act;return{dim:new A(i,o),act:r.act+1};default:return{dim:O.all(),act:e}}}function y(t,e){var r,n=new O;switch(t.charAt(e)){case",":case"}":r=e,n=O.all();break;case"(":r=t.indexOf(")",e),r>e+1&&n.push.apply(n,t.slice(e+1,r).split(",").map(b.parse)),r+=1;break;default:r=t.indexOf("}",e);var i=t.indexOf(",",e);r>=0&&i>=0?r=Math.min(r,i):r<0&&(r=i),r<0&&(r=t.length),n=new O([b.parse(t.slice(e,r))])}return{act:r,dim:n}}function g(t){return void 0===t&&(t=null),null===t?u():t instanceof j?t:Array.isArray(t)?Array.isArray(t[0])?p.apply(void 0,t):p(t):h(r.i(d.h)(arguments).map(String).join(","))}var m=r(3),d=r(1),v=r(45);r.d(e,"h",function(){return O}),r.d(e,"j",function(){return x}),e.b=i,e.k=o,r.d(e,"a",function(){return A}),r.d(e,"g",function(){return j}),e.c=u,e.e=a,e.l=c,e.i=f,e.d=p,e.f=g;var b=function(){function t(t,e,r){void 0===e&&(e=-1),void 0===r&&(r=1),this.from=t,this.to=e,this.step=r}return Object.defineProperty(t.prototype,"isAll",{get:function(){return 0===this.from&&-1===this.to&&1===this.step},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isSingle",{get:function(){return this.from+this.step===this.to},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isUnbound",{get:function(){return this.from<0||this.to<0},enumerable:!0,configurable:!0}),t.all=function(){return new t(0,-1,1)},t.none=function(){return new t(0,0,1)},t.single=function(t){return new w(t)},t.range=function(e,r,n){return void 0===r&&(r=-1),void 0===n&&(n=1),e+n===r?t.single(e):new t(e,r,n)},t.prototype.size=function(t){var e=n(this.to,t),r=n(this.from,t);if(1===this.step)return Math.max(e-r,0);if(-1===this.step)return Math.max(r-e,0);var i=this.step>0?e-r+1:r-e+1,o=Math.abs(this.step);return i<=0?0:Math.floor(i/o)},t.prototype.clone=function(){return new t(this.from,this.to,this.step)},t.prototype.reverse=function(){var e=this.from<0?this.from:this.from+1;return new t(this.to<0?this.to:this.to-1,e,-this.step)},t.prototype.invert=function(t,e){return this.isAll?t:n(this.from,e)+t*this.step},t.prototype.iter=function(t){return r.i(v.a)(n(this.from,t),n(this.to,t),this.step)},Object.defineProperty(t.prototype,"__iterator__",{get:function(){return this.iter()},enumerable:!0,configurable:!0}),t.prototype.contains=function(t,e){var r=n(this.from,e),i=n(this.to,e);return-1===this.step?t<=r&&t>i:t>=r&&t<i},t.prototype.toString=function(){if(this.isAll)return"";if(this.isSingle)return this.from.toString();var t=this.from+":"+this.to;return 1!==this.step&&(t+=":"+this.step),t},t.parse=function(e){if(0===e.length)return t.all();var r=e.split(":");return 1===r.length?t.single(parseFloat(r[0])):2===r.length?new t(parseFloat(r[0]),parseFloat(r[1])):new t(parseFloat(r[0]),parseFloat(r[1]),parseFloat(r[2]))},t}(),w=function(){function t(t){this.from=t}return Object.defineProperty(t.prototype,"step",{get:function(){return 1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"to",{get:function(){return this.from+1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isAll",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isSingle",{get:function(){return!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isUnbound",{get:function(){return!1},enumerable:!0,configurable:!0}),t.prototype.size=function(t){return 1},t.prototype.clone=function(){return new t(this.from)},t.prototype.contains=function(t,e){return n(this.from,e)===t},t.prototype.reverse=function(){return this.clone()},t.prototype.invert=function(t,e){return n(this.from,e)+t},t.prototype.iter=function(t){return r.i(v.b)(n(this.from,t))},Object.defineProperty(t.prototype,"__iterator__",{get:function(){return this.iter()},enumerable:!0,configurable:!0}),t.prototype.toString=function(){return this.from.toString()},t}(),O=function(){function t(e){e instanceof t?this.arr=e.arr:Array.isArray(e)?this.arr=e:this.arr=[]}return Object.defineProperty(t.prototype,"length",{get:function(){return this.size()},enumerable:!0,configurable:!0}),t.all=function(){return new t([b.all()])},t.single=function(e){return new t([b.single(e)])},t.none=function(){return new t},t.from=function(e){return new t(t.compress(e))},t.compress=function(t){if(0===t.length)return[];if(1===t.length)return[b.single(t[0])];for(var e=new Array,r=t.slice(1).map(function(e,r){return e-t[r]}),n=0,i=1,o=0;i<t.length;){for(;r[n]===r[i-1]&&i<t.length;)i++;if(i===n+1)e.push(b.single(t[n]));else if(1===Math.abs(r[n]))e.push(b.range(t[n],t[i-1]+r[n],r[n]));else for(o=n;o<i;o++)e.push(b.single(t[o]));n=i,i+=1}for(;n<t.length;)e.push(b.single(t[n++]));return e},Object.defineProperty(t.prototype,"isAll",{get:function(){return 1===this.arr.length&&this.at(0).isAll},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isNone",{get:function(){return 0===this.arr.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isUnbound",{get:function(){return this.arr.some(function(t){return t.isUnbound})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isList",{get:function(){return this.arr.every(function(t){return t.isSingle})},enumerable:!0,configurable:!0}),t.prototype.push=function(){function t(t){return"string"==typeof t?b.parse(t.toString()):"number"==typeof t?b.single(t):Array.isArray(t)?new b(t[0],t[1],t[2]):t}for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return this.arr.push.apply(this.arr,e.map(t))},t.prototype.pushSlice=function(t,e,r){void 0===e&&(e=-1),void 0===r&&(r=1),this.arr.push(new b(t,e,r))},t.prototype.pushList=function(e){this.arr.push.apply(this.arr,t.compress(e))},t.prototype.setSlice=function(t,e,r){void 0===e&&(e=-1),void 0===r&&(r=1),this.arr.length=0,this.pushSlice(t,e,r)},t.prototype.setList=function(t){this.arr.length=0,this.pushList(t)},t.prototype.at=function(t){return t<0&&(t+=this.length),t<0||t>=this.arr.length?b.none():this.arr[t]},t.prototype.size=function(t){return this.arr.map(function(e){return e.size(t)}).reduce(function(t,e){return t+e},0)},Object.defineProperty(t.prototype,"isIdentityRange",{get:function(){return 1===this.arr.length&&0===this.arr[0].from&&1===this.arr[0].step},enumerable:!0,configurable:!0}),t.prototype.repeat=function(e){if(void 0===e&&(e=1),1===e)return this;for(var r=this.arr.slice(),n=1;n<e;++n)r.push.apply(r,this.arr);return new t(r)},t.prototype.preMultiply=function(e,r){if(this.isAll)return e.clone();if(e.isAll)return this.clone();if(e.isNone||this.isNone)return t.none();if(this.isIdentityRange)return e.clone();var n=this.iter(r).asList(),i=function(t){var e=t.iter(n.length),r=[];return e.forEach(function(t){t>=0&&t<n.length&&r.push(n[t])}),t.fromLike(r)};return e instanceof A?o(e.name,e.groups.map(i)):i(e)},t.prototype.union=function(t,e){if(this.isAll||t.isNone)return this.clone();if(t.isAll||this.isNone)return t.clone();var r=this.iter(e).asList();return t.iter(e).forEach(function(t){r.indexOf(t)<0&&r.push(t)}),t.fromLike(r.sort())},t.prototype.intersect=function(e,r){if(this.isNone||e.isNone)return t.none();if(this.isAll)return e.clone();if(e.isAll)return this.clone();var n=this.iter(r).asList(),i=e.iter(r),o=[];return i.forEach(function(t){n.indexOf(t)>=0&&o.push(t)}),e.fromLike(o.sort())},t.prototype.toSet=function(t){return this.removeDuplicates(t)},t.prototype.without=function(e,r){if(this.isNone||e.isNone)return this.clone();if(e.isAll)return t.none();var n=this.iter(r),i=e.iter(r).asList(),o=[];return n.forEach(function(t){i.indexOf(t)<0&&o.push(t)}),t.from(o.sort())},t.prototype.clone=function(){return new t(this.arr.map(function(t){return t.clone()}))},t.prototype.invert=function(t,e){if(this.isAll)return t;if(this.isNone)return-1;for(var r=0,n=this.arr[0].size(e),i=n;i>t&&r<this.length;)r++,n=this.arr[r].size(e),i+=n;return r>=this.arr.length?-1:this.arr[r-1].invert(t-i+n,e)},t.prototype.indexOf=function(){if(arguments[0]instanceof j)return this.indexRangeOf(arguments[0],arguments[1]);var t,e=this.iter().asList();if(1===arguments.length){if("number"==typeof arguments[0])return e.indexOf(arguments[0]);t=arguments[0]}else t=r.i(d.h)(arguments);return 0===t.length?[]:t.map(function(t,r){return e.indexOf(t)})},t.prototype.indexRangeOf=function(e,r){if(e.isNone||this.isNone)return e.fromLike([]);if(e.isAll)return t.all();var n;if(this.isIdentityRange){var i=this.arr[0].to;n=function(t,e){t>=0&&t<i&&e.push(t)}}else{var s=this.iter().asList();n=function(t,e){var r=s.indexOf(t);r>=0&&e.push(r)}}if(e instanceof A)return o(e.name,e.groups.map(function(t){var e=[];return t.forEach(function(t){return n(t,e)}),t.fromLike(e)}));var u=[];return e.forEach(function(t){return n(t,u)}),e.fromLike(u)},t.prototype.filter=function(t,e,r){if(void 0===r&&(r=d.i),this.isAll)return t.map(r);var n=this.iter(e);if(n.byOne&&n instanceof v.c)return t.slice(n.from,n.to).map(r);for(var i=[];n.hasNext();)i.push(r(t[n.next()]));return i},t.prototype.iter=function(t){if(this.isList)return r.i(v.d)(this.arr.map(function(t){return t.from}));var e=this.arr.map(function(e){return e.iter(t)});return v.e.apply(null,e)},Object.defineProperty(t.prototype,"__iterator__",{get:function(){return this.iter()},enumerable:!0,configurable:!0}),t.prototype.asList=function(t){return this.iter(t).asList()},Object.defineProperty(t.prototype,"first",{get:function(){return this.isNone?null:this.arr[0].from},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"last",{get:function(){return this.isNone?null:this.arr[this.arr.length-1].from},enumerable:!0,configurable:!0}),t.prototype.forEach=function(t,e){return this.iter().forEach(t,e)},t.prototype.contains=function(t,e){return this.arr.some(function(r){return r.contains(t,e)})},t.prototype.sort=function(t){void 0===t&&(t=function(t,e){return t-e});var e=this.iter().asList(),r=e.sort(t);return this.fromLike(r)},t.prototype.removeDuplicates=function(e){var r=this.iter().asList();return r=r.sort(),r=r.filter(function(t,e){return t!==r[e-1]}),t.from(r)},t.prototype.reverse=function(){var e=this.arr.map(function(t){return t.reverse()});return e.reverse(),new t(e)},t.prototype.toString=function(){return this.isAll?"":1===this.length?this.arr[0].toString():"("+this.arr.join(",")+")"},t.prototype.eq=function(t){return!!(this===t||this.isAll&&t.isAll||this.isNone&&t.isNone)||this.toString()===t.toString()},t.prototype.fromLike=function(e){return t.from(e)},t}(),x=function(t){function e(e,r,n){var i=t.call(this,n)||this;return i.name=e,i.color=r,i}return m.a(e,t),e.prototype.preMultiply=function(r,n){var i=t.prototype.preMultiply.call(this,r,n);return new e(this.name,this.color,i)},e.prototype.union=function(r,n){var i=t.prototype.union.call(this,r,n);return new e(this.name,this.color,i)},e.prototype.intersect=function(r,n){var i=t.prototype.intersect.call(this,r,n);return new e(this.name,this.color,i)},e.prototype.without=function(r,n){var i=t.prototype.without.call(this,r,n);return new e(this.name,this.color,i)},e.prototype.clone=function(){return new e(this.name,this.color,t.prototype.clone.call(this))},e.prototype.toString=function(){return'"'+this.name+'""'+this.color+'"'+t.prototype.toString.call(this)},e.prototype.toSet=function(r){return new e(this.name,this.color,t.prototype.toSet.call(this,r))},e.prototype.fromLike=function(r){return new e(this.name,this.color,t.prototype.fromLike.call(this,r))},e}(O),A=function(t){function e(e,r,n){var i=t.call(this,n||s(r))||this;return i.name=e,i.groups=r,i}return m.a(e,t),e.prototype.preMultiply=function(r,n){var i=this.groups.length>1?t.prototype.preMultiply.call(this,r,n):void 0;return new e(this.name,this.groups.map(function(t){return t.preMultiply(r,n)}),i)},e.prototype.union=function(r,n){var i=this.groups.length>1?t.prototype.union.call(this,r,n):void 0;return new e(this.name,this.groups.map(function(t){return t.union(r,n)}),i)},e.prototype.intersect=function(r,n){var i=this.groups.length>1?t.prototype.intersect.call(this,r,n):void 0;return new e(this.name,this.groups.map(function(t){return t.intersect(r,n)}),i)},e.prototype.without=function(r,n){var i=this.groups.length>1?t.prototype.without.call(this,r,n):void 0;return new e(this.name,this.groups.map(function(t){return t.without(r,n)}),i)},e.prototype.clone=function(){var r=this.groups.length>1?t.prototype.clone.call(this):void 0;return new e(name,this.groups.map(function(t){return t.clone()}),r)},e.prototype.sort=function(r){var n=this.groups.length>1?t.prototype.sort.call(this,r):void 0;return new e(this.name,this.groups.map(function(t){return t.sort(r)}),n)},e.prototype.toSet=function(r){var n=this.groups.length>1?t.prototype.toSet.call(this,r):void 0;return new e(this.name,this.groups.map(function(t){return t.toSet(r)}),n)},e.prototype.toString=function(){return'"'+this.name+'"{'+this.groups.join(",")+"}"},e}(O),j=function(){function t(t){void 0===t&&(t=new Array),this.dims=t}return Object.defineProperty(t.prototype,"isAll",{get:function(){return this.dims.every(function(t){return t.isAll})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isNone",{get:function(){return this.dims.every(function(t){return t.isNone})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isUnbound",{get:function(){return this.dims.some(function(t){return t.isUnbound})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"first",{get:function(){return this.dim(0).first},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"last",{get:function(){return this.dim(0).last},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ndim",{get:function(){return this.dims.length},enumerable:!0,configurable:!0}),t.prototype.eq=function(t){return!!(this===t||this.isAll&&t.isAll||this.isNone&&t.isNone)||this.toString()===t.toString()},t.prototype.preMultiply=function(e,r){if(this.isAll)return e.clone();if(e.isAll)return this.clone();var n=new t;return this.dims.forEach(function(t,i){n.dims[i]=t.preMultiply(e.dim(i),r?r[i]:void 0)}),n},t.prototype.union=function(e,r){if(this.isAll||e.isNone)return this.clone();if(e.isAll||this.isNone)return e.clone();var n=new t;return this.dims.forEach(function(t,i){n.dims[i]=t.union(e.dim(i),r?r[i]:void 0)}),n},t.prototype.intersect=function(e,r){if(this.isNone||e.isNone)return a();if(this.isAll)return e.clone();if(e.isAll)return this.clone();var n=new t;return this.dims.forEach(function(t,i){n.dims[i]=t.intersect(e.dim(i),r?r[i]:void 0)}),n},t.prototype.without=function(e,r){if(this.isNone||e.isNone)return this.clone();if(e.isAll)return a();var n=new t;return this.dims.forEach(function(t,i){n.dims[i]=t.without(e.dim(i),r?r[i]:void 0)}),n},t.prototype.clone=function(){var e=new t;return this.dims.forEach(function(t,r){e.dims[r]=t.clone()}),e},t.prototype.swap=function(){var e=new t;return e.dims=this.dims.map(function(t){return t.clone()}).reverse(),e},t.prototype.filter=function(t,e){function r(t){if(t>=n)return d.i;var o=i.dim(t),s=r(t+1),u=e?e[t]:void 0;return function(t){return Array.isArray(t)?o.filter(t,u,s):t}}if(this.isAll)return t;var n=this.ndim,i=this;return r(0)(t)},t.prototype.dim=function(t){var e=this.dims[t];return e||(this.dims[t]=O.all(),this.dims[t])},t.prototype.invert=function(t,e){var r=this;return this.isAll?t:t.map(function(t,n){return r.dim(n).invert(t,e?e[n]:void 0)})},t.prototype.indexRangeOf=function(e,r){return e.isNone||this.isNone?a():this.isNone||e.isAll?this.clone():new t(this.dims.map(function(t,n){return t.indexRangeOf(e.dim(n),r?r[n]:void 0)}))},t.prototype.indexOf=function(){var e=this;if(arguments[0]instanceof t)return this.indexRangeOf(arguments[0],arguments[1]);var n;if(1===arguments.length){if("number"==typeof arguments[0])return this.dim(0).indexOf(arguments[0]);n=arguments[0]}else n=r.i(d.h)(arguments);return 0===n.length?[]:n.map(function(t,r){return e.dim(r).indexOf(t)})},t.prototype.size=function(t){return this.isAll?t:this.dims.map(function(e,r){return e.size(t?t[r]:void 0)})},t.prototype.split=function(){return this.dims.map(function(e){return new t([e])})},t.prototype.product=function(t,e){var r=this,n=this.ndim,i=function(o){var s=o.length;if(s<n){r.dims[s].iter(e?e[s]:null).forEach(function(t){o.push(t),i(o),o.pop()})}else t(o.slice())};i([])},t.prototype.toString=function(){return this.dims.map(function(t){return t.toString()}).join(",")},t}()},45:function(t,e,r){"use strict";function n(){return new y}function i(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?n():1===t.length?t[0]:new l(t)}function o(t,e,r){return new f(t,e,r)}function s(t){return new h(t)}function u(t){return new p(t)}var a=r(3);r.d(e,"c",function(){return f}),e.e=i,e.a=o,e.b=s,e.d=u;var c=function(){function t(){}return t.prototype.hasNext=function(){return!1},t.prototype.next=function(){return null},t.prototype.forEach=function(t,e){for(var r=0;this.hasNext();)t.call(e,this.next(),r++)},t.prototype.map=function(t,e){return new g(this,t,e)},t.prototype.asList=function(){for(var t=[];this.hasNext();)t.push(this.next());return t},Object.defineProperty(t.prototype,"isIncreasing",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isDecreasing",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"byOne",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"byMinusOne",{get:function(){return!1},enumerable:!0,configurable:!0}),t}(),f=function(t){function e(e,r,n){var i=t.call(this)||this;return i.from=e,i.to=r,i.step=n,i.act=i.from,i}return a.a(e,t),e.prototype.hasNext=function(){return this.act!==this.to&&(this.step>0&&this.act<this.to||this.step<0&&this.act>this.to)},e.prototype.next=function(){if(!this.hasNext())throw new RangeError("end of iterator");var t=this.act;return this.act+=this.step,this.step<0&&this.act<this.to?this.act=this.to:this.step>0&&this.act>this.to&&(this.act=this.to),t},Object.defineProperty(e.prototype,"isIncreasing",{get:function(){return this.step>0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isDecreasing",{get:function(){return this.step<0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"byOne",{get:function(){return 1===this.step},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"byMinusOne",{get:function(){return-1===this.step},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){if(this.byOne)return Math.max(this.to-this.from,0);if(this.byMinusOne)return Math.max(this.from-this.to,0);var t=this.isIncreasing?this.to-this.from+1:this.from-this.to+1,e=Math.abs(this.step);return t<=0?0:Math.floor(t/e)},enumerable:!0,configurable:!0}),e}(c),p=function(t){function e(e){var r=t.call(this)||this;return r.arr=e,r.it=new f(0,e.length,1),r}return a.a(e,t),e.prototype.hasNext=function(){return this.it.hasNext()},e.prototype.next=function(){if(!this.hasNext())throw new RangeError("end of iterator");return this.arr[this.it.next()]},e.prototype.asList=function(){return this.arr.slice()},e}(c),h=function(t){function e(e){var r=t.call(this)||this;return r.value=e,r.delivered=!1,r}return a.a(e,t),e.prototype.hasNext=function(){return!this.delivered},e.prototype.next=function(){if(!this.hasNext())throw new RangeError("end of iterator");return this.delivered=!0,this.value},e.prototype.asList=function(){return[this.value]},Object.defineProperty(e.prototype,"isIncreasing",{get:function(){return!0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isDecreasing",{get:function(){return!0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"byOne",{get:function(){return!0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"byMinusOne",{get:function(){return!0},enumerable:!0,configurable:!0}),e}(c),l=function(t){function e(e){var r=t.call(this)||this;return r.its=e,r.act=e.shift(),r}return a.a(e,t),e.prototype.hasNext=function(){for(var t=!1;!(t=this.act.hasNext())&&this.its.length>0;)this.act=this.its.shift();return t},e.prototype.next=function(){if(!this.hasNext())throw new RangeError("end of iterator");return this.act.next()},e.prototype.asList=function(){for(var t=[];this.hasNext();)t.push(this.next());return t},Object.defineProperty(e.prototype,"isIncreasing",{get:function(){return this.its.every(function(t){return t.isIncreasing})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isDecreasing",{get:function(){return this.its.every(function(t){return t.isDecreasing})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"byOne",{get:function(){return this.its.every(function(t){return t.byOne})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"byMinusOne",{get:function(){return this.its.every(function(t){return t.byMinusOne})},enumerable:!0,configurable:!0}),e}(c),y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isIncreasing=!1,e.isDecreasing=!1,e.byOne=!1,e.byMinusOne=!1,e}return a.a(e,t),e.prototype.hasNext=function(){return!1},e.prototype.next=function(){throw new RangeError("end of iterator")},e.prototype.asList=function(){return[]},e}(c),g=function(t){function e(e,r,n){var i=t.call(this)||this;return i.it=e,i.f=r,i.thisArg=n,i}return a.a(e,t),e.prototype.hasNext=function(){return this.it.hasNext()},e.prototype.next=function(){if(!this.hasNext())throw new RangeError("end of iterator");return this.f.call(this.thisArg,this.it.next())},Object.defineProperty(e.prototype,"isIncreasing",{get:function(){return this.it.isIncreasing},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isDecreasing",{get:function(){return this.it.isDecreasing},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"byOne",{get:function(){return this.it.byOne},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"byMinusOne",{get:function(){return this.it.byMinusOne},enumerable:!0,configurable:!0}),e}(c)}});