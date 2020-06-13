parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RzVW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports._streamHandler=exports._eventHandler=exports._paused=exports._running=void 0;var e=Symbol();exports._running=e;var r=Symbol();exports._paused=r;var t=Symbol();exports._eventHandler=t;var o=Symbol();exports._streamHandler=o;
},{}],"d0lR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=["dblclick","mousemove","mousedown","mouseup","scroll"];exports.default=e;
},{}],"xx9Q":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./events"));function t(e){return e&&e.__esModule?e:{default:e}}var r={stream:null,trackEvents:e.default,defer:!1,dimensions:{}};exports.default=r;
},{"./events":"d0lR"}],"rMii":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={events:[],since:null,document:null};exports.default=e;
},{}],"b3TB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var e=require("../constants/symbols"),t=s(require("../store"));function s(e){return e&&e.__esModule?e:{default:e}}function u(s){this[e._paused]||t.default.events.push({type:"event",eventType:s.type,x:s.clientX,y:s.clientY})}
},{"../constants/symbols":"RzVW","../store":"rMii"}],"B8pU":[function(require,module,exports) {
"use strict";function t(t,e){if("function"!=typeof t)throw new Error("".concat(e||""," must be a function").trimLeft())}Object.defineProperty(exports,"__esModule",{value:!0}),exports.assertFunction=t;
},{}],"Vb8e":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s;var e=require("./assert"),t=require("../constants/symbols");function s(s){this[t._paused]||((0,e.assertFunction)(this.config.stream),this.config.stream({type:"event",eventType:s.type,x:s.clientX,y:s.clientY}))}
},{"./assert":"B8pU","../constants/symbols":"RzVW"}],"qbri":[function(require,module,exports) {
"use strict";var e=require("./constants/symbols"),t=u(require("./constants/config")),n=u(require("./utils/event-handler")),r=u(require("./store")),i=u(require("./utils/stream-handler"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}var d=function(){function u(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c(this,u),this.config=a(a({},t.default),o),this[e._eventHandler]=n.default.bind(this),this[e._streamHandler]=i.default.bind(this),this[e._paused]=!1,this[e._running]=!1,r.default.document=document.documentElement.cloneNode(!0),r.default.dimensions={width:window.innerWidth,height:window.innerHeight},r.default.since=Date.now(),this.config.defer||this.start(),this}return l(u,[{key:"start",value:function(){var t=this;if(!this[e._running]){var n="function"==typeof this.config.stream;return n&&this.config.stream(a({type:"config"},r.default)),this.config.trackEvents.forEach(function(r){return document.addEventListener(r,n?t[e._streamHandler]:t[e._eventHandler])}),this}}},{key:"pause",value:function(){return this[e._paused]=!0,this}},{key:"resume",value:function(){return this[e._paused]=!1,this}},{key:"stop",value:function(){var t=this;return this.config.trackEvents.forEach(function(n){document.removeEventListener(n,t[e._streamHandler]),document.removeEventListener(n,t[e._eventHandler])}),this}},{key:"peekEvents",value:function(){return r.default.events}},{key:"dump",value:function(){return r.default}}]),u}();module.exports=d;
},{"./constants/symbols":"RzVW","./constants/config":"xx9Q","./utils/event-handler":"b3TB","./store":"rMii","./utils/stream-handler":"Vb8e"}]},{},["qbri"], "$w")
//# sourceMappingURL=/wiki-events.js.map