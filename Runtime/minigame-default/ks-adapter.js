/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _window2 = __webpack_require__(1);

	var _window = _interopRequireWildcard(_window2);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var global = GameGlobal;

	function inject() {
	  _window.addEventListener = function (type, listener) {
	    _window.document.addEventListener(type, listener);
	  };
	  _window.removeEventListener = function (type, listener) {
	    _window.document.removeEventListener(type, listener);
	  };

	  if (_window.canvas) {
	    _window.canvas.addEventListener = _window.addEventListener;
	    _window.canvas.removeEventListener = _window.removeEventListener;
	  }

	  var _ks$getSystemInfoSync = ks.getSystemInfoSync(),
	      platform = _ks$getSystemInfoSync.platform;

	  // 开发者工具无法重定义 window


	  if (platform === 'devtools') {
	    for (var key in _window) {
	      var descriptor = Object.getOwnPropertyDescriptor(global, key);

	      if (!descriptor || descriptor.configurable === true) {
	        Object.defineProperty(window, key, {
	          value: _window[key]
	        });
	      }
	    }

	    for (var _key in _window.document) {
	      var _descriptor = Object.getOwnPropertyDescriptor(global.document, _key);

	      if (!_descriptor || _descriptor.configurable === true) {
	        Object.defineProperty(global.document, _key, {
	          value: _window.document[_key]
	        });
	      }
	    }
	    window.parent = window;
	  } else {
	    for (var _key2 in _window) {
	      global[_key2] = _window[_key2];
	    }
	    global.window = _window;
	    window = global;
	    window.top = window.parent = window;
        window.documentAdapter = {...window.document};
	  }
	}

	if (!GameGlobal.__isAdapterInjected) {
	  GameGlobal.__isAdapterInjected = true;
	  inject();
	}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.cancelAnimationFrame = exports.requestAnimationFrame = exports.clearInterval = exports.clearTimeout = exports.setInterval = exports.setTimeout = exports.canvas = exports.location = exports.localStorage = exports.HTMLElement = exports.FileReader = exports.Audio = exports.Image = exports.WebSocket = exports.XMLHttpRequest = exports.navigator = exports.document = undefined;

	var _WindowProperties = __webpack_require__(2);

	Object.keys(_WindowProperties).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _WindowProperties[key];
	        }
	    });
	});

	var _constructor = __webpack_require__(3);

	Object.keys(_constructor).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _constructor[key];
	        }
	    });
	});

	var _Fetch = __webpack_require__(9);

	Object.keys(_Fetch).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _Fetch[key];
	        }
	    });
	});

	var _Canvas = __webpack_require__(10);

	var _Canvas2 = _interopRequireDefault(_Canvas);

	var _document2 = __webpack_require__(11);

	var _document3 = _interopRequireDefault(_document2);

	var _navigator2 = __webpack_require__(18);

	var _navigator3 = _interopRequireDefault(_navigator2);

	var _XMLHttpRequest2 = __webpack_require__(19);

	var _XMLHttpRequest3 = _interopRequireDefault(_XMLHttpRequest2);

	var _WebSocket2 = __webpack_require__(20);

	var _WebSocket3 = _interopRequireDefault(_WebSocket2);

	var _Image2 = __webpack_require__(12);

	var _Image3 = _interopRequireDefault(_Image2);

	var _Audio2 = __webpack_require__(13);

	var _Audio3 = _interopRequireDefault(_Audio2);

	var _FileReader2 = __webpack_require__(21);

	var _FileReader3 = _interopRequireDefault(_FileReader2);

	var _HTMLElement2 = __webpack_require__(4);

	var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);

	var _localStorage2 = __webpack_require__(22);

	var _localStorage3 = _interopRequireDefault(_localStorage2);

	var _location2 = __webpack_require__(23);

	var _location3 = _interopRequireDefault(_location2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.document = _document3.default;
	exports.navigator = _navigator3.default;
	exports.XMLHttpRequest = _XMLHttpRequest3.default;
	exports.WebSocket = _WebSocket3.default;
	exports.Image = _Image3.default;
	exports.Audio = _Audio3.default;
	exports.FileReader = _FileReader3.default;
	exports.HTMLElement = _HTMLElement3.default;
	exports.localStorage = _localStorage3.default;
	exports.location = _location3.default;


	// 暴露全局的 canvas
	var canvas = new _Canvas2.default();

	exports.canvas = canvas;
	exports.setTimeout = setTimeout;
	exports.setInterval = setInterval;
	exports.clearTimeout = clearTimeout;
	exports.clearInterval = clearInterval;
	exports.requestAnimationFrame = requestAnimationFrame;
	exports.cancelAnimationFrame = cancelAnimationFrame;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ks$getSystemInfoSync = ks.getSystemInfoSync(),
	    screenWidth = _ks$getSystemInfoSync.screenWidth,
	    screenHeight = _ks$getSystemInfoSync.screenHeight,
	    devicePixelRatio = _ks$getSystemInfoSync.devicePixelRatio;

	var innerWidth = exports.innerWidth = screenWidth;
	var innerHeight = exports.innerHeight = screenHeight;
	exports.devicePixelRatio = devicePixelRatio;
	var screen = exports.screen = {
	  availWidth: innerWidth,
	  availHeight: innerHeight
	};
	var ontouchstart = exports.ontouchstart = null;
	var ontouchmove = exports.ontouchmove = null;
	var ontouchend = exports.ontouchend = null;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HTMLCanvasElement = exports.HTMLImageElement = undefined;

	var _HTMLElement3 = __webpack_require__(4);

	var _HTMLElement4 = _interopRequireDefault(_HTMLElement3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HTMLImageElement = exports.HTMLImageElement = function (_HTMLElement) {
	  _inherits(HTMLImageElement, _HTMLElement);

	  function HTMLImageElement() {
	    _classCallCheck(this, HTMLImageElement);

	    return _possibleConstructorReturn(this, (HTMLImageElement.__proto__ || Object.getPrototypeOf(HTMLImageElement)).call(this, 'img'));
	  }

	  return HTMLImageElement;
	}(_HTMLElement4.default);

	var HTMLCanvasElement = exports.HTMLCanvasElement = function (_HTMLElement2) {
	  _inherits(HTMLCanvasElement, _HTMLElement2);

	  function HTMLCanvasElement() {
	    _classCallCheck(this, HTMLCanvasElement);

	    return _possibleConstructorReturn(this, (HTMLCanvasElement.__proto__ || Object.getPrototypeOf(HTMLCanvasElement)).call(this, 'canvas'));
	  }

	  return HTMLCanvasElement;
	}(_HTMLElement4.default);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Element2 = __webpack_require__(5);

	var _Element3 = _interopRequireDefault(_Element2);

	var _util = __webpack_require__(8);

	var _WindowProperties = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HTMLElement = function (_Element) {
	  _inherits(HTMLElement, _Element);

	  function HTMLElement() {
	    var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	    _classCallCheck(this, HTMLElement);

	    var _this = _possibleConstructorReturn(this, (HTMLElement.__proto__ || Object.getPrototypeOf(HTMLElement)).call(this));

	    _this.className = '';
	    _this.childern = [];
	    _this.style = {
	      width: _WindowProperties.innerWidth + 'px',
	      height: _WindowProperties.innerHeight + 'px'
	    };
	    _this.insertBefore = _util.noop;
	    _this.innerHTML = '';

	    _this.tagName = tagName.toUpperCase();
	    return _this;
	  }

	  _createClass(HTMLElement, [{
	    key: 'setAttribute',
	    value: function setAttribute(name, value) {
	      this[name] = value;
	    }
	  }, {
	    key: 'getAttribute',
	    value: function getAttribute(name) {
	      return this[name];
	    }
	  }, {
	    key: 'getBoundingClientRect',
	    value: function getBoundingClientRect() {
	      return {
	        top: 0,
	        left: 0,
	        width: _WindowProperties.innerWidth,
	        height: _WindowProperties.innerHeight
	      };
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {}
	  }, {
	    key: 'clientWidth',
	    get: function get() {
	      var ret = parseInt(this.style.fontSize, 10) * this.innerHTML.length;

	      return Number.isNaN(ret) ? 0 : ret;
	    }
	  }, {
	    key: 'clientHeight',
	    get: function get() {
	      var ret = parseInt(this.style.fontSize, 10);

	      return Number.isNaN(ret) ? 0 : ret;
	    }
	  }]);

	  return HTMLElement;
	}(_Element3.default);

	exports.default = HTMLElement;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Node2 = __webpack_require__(6);

	var _Node3 = _interopRequireDefault(_Node2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ELement = function (_Node) {
	  _inherits(ELement, _Node);

	  function ELement() {
	    _classCallCheck(this, ELement);

	    var _this = _possibleConstructorReturn(this, (ELement.__proto__ || Object.getPrototypeOf(ELement)).call(this));

	    _this.className = '';
	    _this.children = [];
	    return _this;
	  }

	  return ELement;
	}(_Node3.default);

	exports.default = ELement;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _EventTarget2 = __webpack_require__(7);

	var _EventTarget3 = _interopRequireDefault(_EventTarget2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Node = function (_EventTarget) {
	  _inherits(Node, _EventTarget);

	  function Node() {
	    _classCallCheck(this, Node);

	    var _this = _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this));

	    _this.childNodes = [];
	    return _this;
	  }

	  _createClass(Node, [{
	    key: 'appendChild',
	    value: function appendChild(node) {
	      if (node instanceof Node) {
	        this.childNodes.push(node);
	      } else {
	        throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');
	      }
	    }
	  }, {
	    key: 'cloneNode',
	    value: function cloneNode() {
	      var copyNode = Object.create(this);

	      Object.assign(copyNode, this);
	      return copyNode;
	    }
	  }, {
	    key: 'removeChild',
	    value: function removeChild(node) {
	      var index = this.childNodes.findIndex(function (child) {
	        return child === node;
	      });

	      if (index > -1) {
	        return this.childNodes.splice(index, 1);
	      }
	      return null;
	    }
	  }]);

	  return Node;
	}(_EventTarget3.default);

	exports.default = Node;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _events = new WeakMap();

	var EventTarget = function () {
	  function EventTarget() {
	    _classCallCheck(this, EventTarget);

	    _events.set(this, {});
	  }

	  _createClass(EventTarget, [{
	    key: 'addEventListener',
	    value: function addEventListener(type, listener) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var events = _events.get(this);

	      if (!events) {
	        events = {};
	        _events.set(this, events);
	      }
	      if (!events[type]) {
	        events[type] = [];
	      }
	      events[type].push(listener);

	      if (options.capture) {
	        console.warn('EventTarget.addEventListener: options.capture is not implemented.');
	      }
	      if (options.once) {
	        console.warn('EventTarget.addEventListener: options.once is not implemented.');
	      }
	      if (options.passive) {
	        console.warn('EventTarget.addEventListener: options.passive is not implemented.');
	      }
	    }
	  }, {
	    key: 'removeEventListener',
	    value: function removeEventListener(type, listener) {
	      if (!_events || !_events.get(this)) {
	        console.warn('EventTarget.removeEventListener: _events is undefined');
	        return;
	      }
	      var listeners = _events.get(this)[type];

	      if (listeners && listeners.length > 0) {
	        for (var i = listeners.length; i--; i > 0) {
	          if (listeners[i] === listener) {
	            listeners.splice(i, 1);
	            break;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'dispatchEvent',
	    value: function dispatchEvent() {
	      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      var listeners = _events.get(this)[event.type];

	      if (listeners) {
	        for (var i = 0; i < listeners.length; i++) {
	          listeners[i](event);
	        }
	      }
	    }
	  }]);

	  return EventTarget;
	}();

	exports.default = EventTarget;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.noop = noop;
	function noop() {}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.fetch = fetch;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _headersStore = new WeakMap();
	var _responseStore = new WeakMap();

	var FetchError = function (_Error) {
	  _inherits(FetchError, _Error);

	  function FetchError(message, type) {
	    _classCallCheck(this, FetchError);

	    var _this = _possibleConstructorReturn(this, (FetchError.__proto__ || Object.getPrototypeOf(FetchError)).call(this, message));

	    _this.type = type;
	    return _this;
	  }

	  return FetchError;
	}(Error);

	var Headers = exports.Headers = function () {
	  function Headers() {
	    var _this2 = this;

	    var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, Headers);

	    var headerMap = Object.create(null);

	    _headersStore.set(this, headerMap);
	    Object.entries(init).forEach(function (_ref) {
	      var _ref2 = _slicedToArray(_ref, 2),
	          k = _ref2[0],
	          v = _ref2[1];

	      return _this2.set(k, v);
	    });
	  }

	  _createClass(Headers, [{
	    key: 'append',
	    value: function append(name, value) {
	      var key = name.toLowerCase();
	      var store = _headersStore.get(this);

	      store[key] = store[key] ? store[key] + ', ' + value : String(value);
	    }
	  }, {
	    key: 'delete',
	    value: function _delete(name) {
	      delete _headersStore.get(this)[name.toLowerCase()];
	    }
	  }, {
	    key: 'get',
	    value: function get(name) {
	      return _headersStore.get(this)[name.toLowerCase()] || null;
	    }
	  }, {
	    key: 'has',
	    value: function has(name) {
	      return name.toLowerCase() in _headersStore.get(this);
	    }
	  }, {
	    key: 'set',
	    value: function set(name, value) {
	      _headersStore.get(this)[name.toLowerCase()] = String(value).replace(/[\n\r]/g, '');
	    }
	  }, {
	    key: 'forEach',
	    value: function forEach(callback) {
	      var store = _headersStore.get(this);

	      Object.entries(store).forEach(function (_ref3) {
	        var _ref4 = _slicedToArray(_ref3, 2),
	            name = _ref4[0],
	            value = _ref4[1];

	        callback(value, name);
	      });
	    }
	  }, {
	    key: 'entries',
	    value: function entries() {
	      var store = _headersStore.get(this);
	      var keys = Object.keys(store);
	      var index = 0;

	      return {
	        next: function next() {
	          if (index < keys.length) {
	            var key = keys[index++];

	            return {
	              value: [key, store[key]],
	              done: false
	            };
	          }
	          return {
	            done: true
	          };
	        }
	      };
	    }
	  }]);

	  return Headers;
	}();

	var Response = exports.Response = function () {
	  function Response(body) {
	    var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, Response);

	    _responseStore.set(this, {
	      _body: body instanceof ArrayBuffer ? body : null,
	      status: init.status || 200,
	      statusText: init.statusText || 'OK',
	      headers: init.headers || new Headers(),
	      url: init.url || '',
	      bodyUsed: false
	    });
	  }

	  _createClass(Response, [{
	    key: 'arrayBuffer',
	    value: function arrayBuffer() {
	      var store = _responseStore.get(this);

	      return new Promise(function (resolve, reject) {
	        if (store.bodyUsed) {
	          reject(new Error('Body already consumed'));
	          return;
	        }
	        store.bodyUsed = true;
	        resolve(store._body);
	      });
	    }
	  }, {
	    key: 'text',
	    value: function text() {
	      return this.arrayBuffer().then(function (buffer) {
	        var decoder = new TextDecoder('utf-8');

	        return decoder.decode(new Uint8Array(buffer));
	      });
	    }
	  }, {
	    key: 'json',
	    value: function json() {
	      return this.text().then(function (text) {
	        return JSON.parse(text);
	      });
	    }
	  }, {
	    key: 'headers',
	    get: function get() {
	      return _responseStore.get(this).headers;
	    }
	  }, {
	    key: 'status',
	    get: function get() {
	      return _responseStore.get(this).status;
	    }
	  }, {
	    key: 'ok',
	    get: function get() {
	      return this.status >= 200 && this.status < 300;
	    }
	  }]);

	  return Response;
	}();

	function fetch(input) {
	  var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  return new Promise(function (resolve, reject) {
	    var url = typeof input === 'string' ? input : input.url;
	    var options = {
	      url: url,
	      method: (init.method || 'GET').toUpperCase(),
	      header: {},
	      responseType: 'arraybuffer',
	      timeout: init.timeout || 60000
	    };

	    var processedBody = init.body;
	    var contentTypeHeader = '';

	    if (typeof init.body === 'string' && !options.header['Content-Type']) {
	      contentTypeHeader = 'text/plain';
	    } else if (init.body instanceof ArrayBuffer || ArrayBuffer.isView(init.body) && init.body.buffer instanceof ArrayBuffer) {
	      var buffer = ArrayBuffer.isView(init.body) ? init.body.buffer : init.body;
	      var bytes = new Uint8Array(buffer);

	      processedBody = btoa(String.fromCharCode.apply(String, _toConsumableArray(bytes)));
	      contentTypeHeader = 'application/octet-stream';
	    } else if (_typeof(init.body) === 'object') {
	      processedBody = JSON.stringify(init.body);
	      contentTypeHeader = 'application/json';
	    }

	    if (!options.header['Content-Type'] && contentTypeHeader) {
	      options.header['Content-Type'] = contentTypeHeader;
	    }
	    options.data = processedBody;

	    if (init.headers) {
	      var headers = new Headers(init.headers);

	      headers.forEach(function (value, name) {
	        options.header[name] = value;
	      });
	    }

	    if (init.credentials === 'include') {
	      options.header.cookie = ks.getStorageSync('cookie') || '';
	    }

	    var requestTask = ks.request(_extends({}, options, {
	      success: function success(res) {
	        var headers = new Headers();

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = Object.entries(res.header || {})[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var _step$value = _slicedToArray(_step.value, 2),
	                key = _step$value[0],
	                value = _step$value[1];

	            headers.append(key, value);
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }

	        var response = new Response(res.data, {
	          status: res.statusCode,
	          statusText: res.statusText,
	          url: res.responseURL,
	          headers: headers
	        });

	        resolve(response);
	      },
	      fail: function fail(err) {
	        var errorType = err.errMsg.includes('CORS') ? 'cors' : err.errMsg.includes('timeout') ? 'timeout' : 'network';

	        reject(new FetchError(err.errMsg, errorType));
	      }
	    }));

	    if (init.signal) {
	      init.signal.addEventListener('abort', function () {
	        requestTask.abort();
	        reject(new FetchError('Request aborted', 'abort'));
	      });
	    }
	  });
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Canvas;

	var _constructor = __webpack_require__(3);

	var _HTMLElement = __webpack_require__(4);

	var _HTMLElement2 = _interopRequireDefault(_HTMLElement);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hasModifiedCanvasPrototype = false;
	var hasInit2DContextConstructor = false;
	var hasInitWebGLContextConstructor = false;

	function Canvas() {
	  var canvas = ks.createCanvas();

	  canvas.type = 'canvas';

	  canvas.__proto__.__proto__ = new _HTMLElement2.default('canvas');

	  var _getContext = canvas.getContext;

	  canvas.getBoundingClientRect = function () {
	    var ret = {
	      top: 0,
	      left: 0,
	      width: window.innerWidth,
	      height: window.innerHeight
	    };
	    return ret;
	  };

	  return canvas;
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _window = __webpack_require__(1);

	var window = _interopRequireWildcard(_window);

	var _HTMLElement = __webpack_require__(4);

	var _HTMLElement2 = _interopRequireDefault(_HTMLElement);

	var _Image = __webpack_require__(12);

	var _Image2 = _interopRequireDefault(_Image);

	var _Audio = __webpack_require__(13);

	var _Audio2 = _interopRequireDefault(_Audio);

	var _Canvas = __webpack_require__(10);

	var _Canvas2 = _interopRequireDefault(_Canvas);

	__webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var events = {};

	var document = {
	  readyState: 'complete',
	  visibilityState: 'visible',
	  documentElement: window,
	  hidden: false,
	  style: {},
	  location: window.location,
	  ontouchstart: null,
	  ontouchmove: null,
	  ontouchend: null,

	  head: new _HTMLElement2.default('head'),
	  body: new _HTMLElement2.default('body'),

	  createElement: function createElement(tagName) {
	    if (tagName === 'canvas') {
	      return new _Canvas2.default();
	    } else if (tagName === 'audio') {
	      return new _Audio2.default();
	    } else if (tagName === 'img') {
	      return new _Image2.default();
	    }

	    return new _HTMLElement2.default(tagName);
	  },
	  getElementById: function getElementById(id) {
	    if (id === window.canvas.id) {
	      return window.canvas;
	    }
	    return null;
	  },
	  getElementsByTagName: function getElementsByTagName(tagName) {
	    if (tagName === 'head') {
	      return [document.head];
	    } else if (tagName === 'body') {
	      return [document.body];
	    } else if (tagName === 'canvas') {
	      return [window.canvas];
	    }
	    return [];
	  },
	  getElementsByName: function getElementsByName(tagName) {
	    if (tagName === 'head') {
	      return [document.head];
	    } else if (tagName === 'body') {
	      return [document.body];
	    } else if (tagName === 'canvas') {
	      return [window.canvas];
	    }
	    return [];
	  },
	  querySelector: function querySelector(query) {
	    if (query === 'head') {
	      return document.head;
	    } else if (query === 'body') {
	      return document.body;
	    } else if (query === 'canvas') {
	      return window.canvas;
	    } else if (query === '#' + window.canvas.id) {
	      return window.canvas;
	    }
	    return null;
	  },
	  querySelectorAll: function querySelectorAll(query) {
	    if (query === 'head') {
	      return [document.head];
	    } else if (query === 'body') {
	      return [document.body];
	    } else if (query === 'canvas') {
	      return [window.canvas];
	    }
	    return [];
	  },
	  addEventListener: function addEventListener(type, listener) {
	    if (!events[type]) {
	      events[type] = [];
	    }
	    events[type].push(listener);
	  },
	  removeEventListener: function removeEventListener(type, listener) {
	    if (!events) {
	      console.warn('EventTarget.removeEventListener: events is undefined');
	      return;
	    }
	    var listeners = events[type];

	    if (listeners && listeners.length > 0) {
	      for (var i = listeners.length; i--; i > 0) {
	        if (listeners[i] === listener) {
	          listeners.splice(i, 1);
	          break;
	        }
	      }
	    }
	  },
	  dispatchEvent: function dispatchEvent(event) {
	    var listeners = events[event.type];

	    if (listeners) {
	      for (var i = 0; i < listeners.length; i++) {
	        listeners[i](event);
	      }
	    }
	  }
	};

	exports.default = document;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Image;
	function Image() {
	  var image = ks.createImage();

	  return image;
	}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _HTMLAudioElement2 = __webpack_require__(14);

	var _HTMLAudioElement3 = _interopRequireDefault(_HTMLAudioElement2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HAVE_NOTHING = 0;
	var HAVE_METADATA = 1;
	var HAVE_CURRENT_DATA = 2;
	var HAVE_FUTURE_DATA = 3;
	var HAVE_ENOUGH_DATA = 4;

	var _innerAudioContext = new WeakMap();
	var _src = new WeakMap();
	var _loop = new WeakMap();
	var _autoplay = new WeakMap();

	var Audio = function (_HTMLAudioElement) {
	  _inherits(Audio, _HTMLAudioElement);

	  function Audio(url) {
	    _classCallCheck(this, Audio);

	    var _this = _possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).call(this));

	    _this.HAVE_NOTHING = HAVE_NOTHING;
	    _this.HAVE_METADATA = HAVE_METADATA;
	    _this.HAVE_CURRENT_DATA = HAVE_CURRENT_DATA;
	    _this.HAVE_FUTURE_DATA = HAVE_FUTURE_DATA;
	    _this.HAVE_ENOUGH_DATA = HAVE_ENOUGH_DATA;
	    _this.readyState = HAVE_NOTHING;


	    _src.set(_this, '');

	    var innerAudioContext = ks.createInnerAudioContext();

	    _innerAudioContext.set(_this, innerAudioContext);

	    innerAudioContext.onCanplay(function () {
	      _this.dispatchEvent({ type: 'load' });
	      _this.dispatchEvent({ type: 'loadend' });
	      _this.dispatchEvent({ type: 'canplay' });
	      _this.dispatchEvent({ type: 'canplaythrough' });
	      _this.dispatchEvent({ type: 'loadedmetadata' });
	      _this.readyState = HAVE_CURRENT_DATA;
	    });
	    innerAudioContext.onPlay(function () {
	      _this.dispatchEvent({ type: 'play' });
	    });
	    innerAudioContext.onPause(function () {
	      _this.dispatchEvent({ type: 'pause' });
	    });
	    innerAudioContext.onEnded(function () {
	      _this.dispatchEvent({ type: 'ended' });
	      _this.readyState = HAVE_ENOUGH_DATA;
	    });
	    innerAudioContext.onError(function () {
	      _this.dispatchEvent({ type: 'error' });
	    });

	    if (url) {
	      _innerAudioContext.get(_this).src = url;
	    }
	    return _this;
	  }

	  _createClass(Audio, [{
	    key: 'load',
	    value: function load() {
	      console.warn('HTMLAudioElement.load() is not implemented.');
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      _innerAudioContext.get(this).play();
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      _innerAudioContext.get(this).pause();
	    }
	  }, {
	    key: 'canPlayType',
	    value: function canPlayType() {
	      var mediaType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	      if (typeof mediaType !== 'string') {
	        return '';
	      }

	      if (mediaType.indexOf('audio/mpeg') > -1 || mediaType.indexOf('audio/mp4')) {
	        return 'probably';
	      }
	      return '';
	    }
	  }, {
	    key: 'cloneNode',
	    value: function cloneNode() {
	      var newAudio = new Audio();

	      newAudio.loop = _innerAudioContext.get(this).loop;
	      newAudio.autoplay = _innerAudioContext.get(this).autoplay;
	      newAudio.src = this.src;
	      return newAudio;
	    }
	  }, {
	    key: 'currentTime',
	    get: function get() {
	      return _innerAudioContext.get(this).currentTime;
	    },
	    set: function set(value) {
	      _innerAudioContext.get(this).seek(value);
	    }
	  }, {
	    key: 'src',
	    get: function get() {
	      return _src.get(this);
	    },
	    set: function set(value) {
	      _src.set(this, value);
	      _innerAudioContext.get(this).src = value;
	    }
	  }, {
	    key: 'loop',
	    get: function get() {
	      return _innerAudioContext.get(this).loop;
	    },
	    set: function set(value) {
	      _innerAudioContext.get(this).loop = value;
	    }
	  }, {
	    key: 'autoplay',
	    get: function get() {
	      return _innerAudioContext.get(this).autoplay;
	    },
	    set: function set(value) {
	      _innerAudioContext.get(this).autoplay = value;
	    }
	  }, {
	    key: 'paused',
	    get: function get() {
	      return _innerAudioContext.get(this).paused;
	    }
	  }]);

	  return Audio;
	}(_HTMLAudioElement3.default);

	exports.default = Audio;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _HTMLMediaElement2 = __webpack_require__(15);

	var _HTMLMediaElement3 = _interopRequireDefault(_HTMLMediaElement2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HTMLAudioElement = function (_HTMLMediaElement) {
	  _inherits(HTMLAudioElement, _HTMLMediaElement);

	  function HTMLAudioElement() {
	    _classCallCheck(this, HTMLAudioElement);

	    return _possibleConstructorReturn(this, (HTMLAudioElement.__proto__ || Object.getPrototypeOf(HTMLAudioElement)).call(this, 'audio'));
	  }

	  return HTMLAudioElement;
	}(_HTMLMediaElement3.default);

	exports.default = HTMLAudioElement;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _HTMLElement2 = __webpack_require__(4);

	var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HTMLMediaElement = function (_HTMLElement) {
	  _inherits(HTMLMediaElement, _HTMLElement);

	  function HTMLMediaElement(type) {
	    _classCallCheck(this, HTMLMediaElement);

	    return _possibleConstructorReturn(this, (HTMLMediaElement.__proto__ || Object.getPrototypeOf(HTMLMediaElement)).call(this, type));
	  }

	  _createClass(HTMLMediaElement, [{
	    key: 'addTextTrack',
	    value: function addTextTrack() {}
	  }, {
	    key: 'captureStream',
	    value: function captureStream() {}
	  }, {
	    key: 'fastSeek',
	    value: function fastSeek() {}
	  }, {
	    key: 'load',
	    value: function load() {}
	  }, {
	    key: 'pause',
	    value: function pause() {}
	  }, {
	    key: 'play',
	    value: function play() {}
	  }]);

	  return HTMLMediaElement;
	}(_HTMLElement3.default);

	exports.default = HTMLMediaElement;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(17);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CustomEvent = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _window = __webpack_require__(1);

	var window = _interopRequireWildcard(_window);

	var _document = __webpack_require__(11);

	var _document2 = _interopRequireDefault(_document);

	var _util = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var identifierCache = [];
	var clearIdTicker = {};

	function formatIdentifier(identifier, eventType) {
	  var changed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	  if (changed && clearIdTicker[identifier]) {
	    clearTimeout(clearIdTicker[identifier]);
	    delete clearIdTicker[identifier];
	  }
	  var id = identifierCache.indexOf(identifier);

	  if (id <= -1) {
	    for (var key = 0; key < identifierCache.length; key++) {
	      if (identifierCache[key] === null) {
	        identifierCache[key] = identifier;
	        id = key;
	        break;
	      }
	    }
	  }
	  if (id <= -1) {
	    identifierCache.push(identifier);
	    id = identifierCache.length - 1;
	  }
	  if (changed && (eventType === 'touchend' || eventType === 'touchcancel')) {
	    clearIdTicker[identifier] = setTimeout(function () {
	      identifierCache[id] = null;
	      delete clearIdTicker[identifier];
	    }, 50);
	  }
	  return id;
	}

	function formatTouchEvent(v, type, changed) {
	  return _extends({}, v, {
	    identifier: formatIdentifier(v.identifier, type, changed)
	  });
	}

	var TouchEvent = function TouchEvent(type) {
	  _classCallCheck(this, TouchEvent);

	  this.target = window.canvas;
	  this.currentTarget = window.canvas;
	  this.touches = [];
	  this.targetTouches = [];
	  this.changedTouches = [];
	  this.preventDefault = _util.noop;
	  this.stopPropagation = _util.noop;

	  this.type = type;
	};

	function touchEventHandlerFactory(type) {
	  return function (event) {
	    var touchEvent = new TouchEvent(type);

	    touchEvent.touches = event.touches.map(function (v) {
	      return formatTouchEvent(v, event.type);
	    });
	    touchEvent.targetTouches = Array.prototype.slice.call(event.touches).map(function (v) {
	      return formatTouchEvent(v, event.type);
	    });
	    touchEvent.changedTouches = event.changedTouches.map(function (v) {
	      return formatTouchEvent(v, event.type);
	    });
	    touchEvent.timeStamp = event.timeStamp;
	    _document2.default.dispatchEvent(touchEvent);
	  };
	}

	ks.onTouchStart(touchEventHandlerFactory('touchstart'));
	ks.onTouchMove(touchEventHandlerFactory('touchmove'));
	ks.onTouchEnd(touchEventHandlerFactory('touchend'));
	ks.onTouchCancel(touchEventHandlerFactory('touchcancel'));

	function CustomEvent(event, params) {
	  params = params || {
	    bubbles: false,
	    cancelable: false,
	    detail: undefined
	  };
	  var evt = {
	    type: event,
	    bubbles: params.bubbles,
	    cancelable: params.cancelable,
	    detail: params.detail
	  };

	  return evt;
	}

	exports.CustomEvent = CustomEvent;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(8);

	// TODO 需要 ks.getSystemInfo 获取更详细信息
	var _ks$getSystemInfoSync = ks.getSystemInfoSync(),
	    platform = _ks$getSystemInfoSync.platform;

	var navigator = {
	  platform: platform,
	  language: 'zh-cn',
	  appVersion: '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
	  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN',
	  onLine: true, // TODO 用 ks.getNetworkStateChange 和 ks.onNetworkStateChange 来返回真实的状态

	  // TODO 用 ks.getLocation 来封装 geolocation
	  geolocation: {
	    getCurrentPosition: _util.noop,
	    watchPosition: _util.noop,
	    clearWatch: _util.noop
	  }
	};

	exports.default = navigator;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _url = new WeakMap();
	var _method = new WeakMap();
	var _requestHeader = new WeakMap();
	var _responseHeader = new WeakMap();
	var _requestTask = new WeakMap();

	function _triggerEvent(type) {
	  if (typeof this['on' + type] === 'function') {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    this['on' + type].apply(this, args);
	  }
	}

	function _changeReadyState(readyState) {
	  this.readyState = readyState;
	  _triggerEvent.call(this, 'readystatechange');
	}

	var XMLHttpRequest = function () {

	  /*
	   * TODO 这一批事件应该是在 XMLHttpRequestEventTarget.prototype 上面的
	   */
	  function XMLHttpRequest() {
	    _classCallCheck(this, XMLHttpRequest);

	    this.onabort = null;
	    this.onerror = null;
	    this.onload = null;
	    this.onloadstart = null;
	    this.onprogress = null;
	    this.ontimeout = null;
	    this.onloadend = null;
	    this.onreadystatechange = null;
	    this.readyState = 0;
	    this.response = null;
	    this.responseText = null;
	    this.responseType = '';
	    this.responseXML = null;
	    this.status = 0;
	    this.statusText = '';
	    this.upload = {};
	    this.withCredentials = false;
	    this.timeout = 60000;

	    _requestHeader.set(this, {
	      'content-type': 'application/x-www-form-urlencoded'
	    });
	    _responseHeader.set(this, {});
	  }
	  // TODO 没法模拟 HEADERS_RECEIVED 和 LOADING 两个状态


	  _createClass(XMLHttpRequest, [{
	    key: 'abort',
	    value: function abort() {
	      var myRequestTask = _requestTask.get(this);

	      if (myRequestTask) {
	        myRequestTask.abort();
	      }
	    }
	  }, {
	    key: 'getAllResponseHeaders',
	    value: function getAllResponseHeaders() {
	      var responseHeader = _responseHeader.get(this);

	      return Object.keys(responseHeader).map(function (header) {
	        return header + ': ' + responseHeader[header];
	      }).join('\n');
	    }
	  }, {
	    key: 'getResponseHeader',
	    value: function getResponseHeader(header) {
	      return _responseHeader.get(this)[header];
	    }
	  }, {
	    key: 'open',
	    value: function open(method, url /* async, user, password 这几个参数在小程序内不支持*/) {
	      _method.set(this, method);
	      _url.set(this, url);
	      _changeReadyState.call(this, XMLHttpRequest.OPENED);
	    }
	  }, {
	    key: 'overrideMimeType',
	    value: function overrideMimeType() {}
	  }, {
	    key: 'send',
	    value: function send() {
	      var _this = this;

	      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	      if (this.readyState !== XMLHttpRequest.OPENED) {
	        throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
	      } else {
	        if (data instanceof Uint8Array) {
	          data = Uint8Array.from(data).buffer;
	        }
	        var responseType = this.responseType;

	        ks.request({
	          data: data,
	          url: _url.get(this),
	          method: _method.get(this),
	          header: _requestHeader.get(this),
	          responseType: this.responseType,
	          enableHttp2: true,
	          enableQuic: true,
	          timeout: this.timeout ? this.timeout : 60000,
	          success: function success(_ref) {
	            var data = _ref.data,
	                statusCode = _ref.statusCode,
	                header = _ref.header,
	                profile = _ref.profile;

	            if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {
	              try {
	                data = JSON.stringify(data);
	              } catch (e) {
	                data = data;
	              }
	            }

	            _this.status = statusCode;
	            _responseHeader.set(_this, header);
	            _triggerEvent.call(_this, 'loadstart');
	            _changeReadyState.call(_this, XMLHttpRequest.HEADERS_RECEIVED);
	            _changeReadyState.call(_this, XMLHttpRequest.LOADING);

	            _this.response = data;

	            _this.profile = profile;
	            if (responseType === 'text') {
	              if (data instanceof ArrayBuffer) {
	                _this.responseText = '';
	                var bytes = new Uint8Array(data);
	                var len = bytes.byteLength;

	                for (var i = 0; i < len; i++) {
	                  _this.responseText += String.fromCharCode(bytes[i]);
	                }
	              } else {
	                _this.responseText = data;
	              }
	            }
	            _changeReadyState.call(_this, XMLHttpRequest.DONE);
	            _triggerEvent.call(_this, 'load');
	            _triggerEvent.call(_this, 'loadend');
	          },
	          fail: function fail(_ref2) {
	            var errMsg = _ref2.errMsg;

	            // TODO 规范错误
	            if (errMsg.indexOf('abort') !== -1) {
	              _triggerEvent.call(_this, 'abort');
	            } else {
	              _triggerEvent.call(_this, 'error', errMsg);
	            }
	            _triggerEvent.call(_this, 'loadend');
	          }
	        });
	      }
	    }
	  }, {
	    key: 'setRequestHeader',
	    value: function setRequestHeader(header, value) {
	      var myHeader = _requestHeader.get(this);

	      myHeader[header] = value;
	      _requestHeader.set(this, myHeader);
	    }
	  }]);

	  return XMLHttpRequest;
	}();

	XMLHttpRequest.UNSEND = 0;
	XMLHttpRequest.OPENED = 1;
	XMLHttpRequest.HEADERS_RECEIVED = 2;
	XMLHttpRequest.LOADING = 3;
	XMLHttpRequest.DONE = 4;
	exports.default = XMLHttpRequest;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _socketTask = new WeakMap();

	var WebSocket = function () {
	  // TODO 更新 binaryType
	  // The connection is in the process of closing.
	  // The connection is not yet open.
	  function WebSocket(url) {
	    var _this = this;

	    var protocols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	    _classCallCheck(this, WebSocket);

	    this.binaryType = '';
	    this.bufferedAmount = 0;
	    this.extensions = '';
	    this.onclose = null;
	    this.onerror = null;
	    this.onmessage = null;
	    this.onopen = null;
	    this.protocol = '';
	    this.readyState = 3;

	    if (typeof url !== 'string' || !/(^ws:\/\/)|(^wss:\/\/)/.test(url)) {
	      throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + url + '\' is invalid');
	    }

	    this.url = url;
	    this.readyState = WebSocket.CONNECTING;

	    var socketTask = ks.connectSocket({
	      url: url,
	      protocols: Array.isArray(protocols) ? protocols : [protocols]
	    });

	    _socketTask.set(this, socketTask);

	    socketTask.onClose(function (res) {
	      _this.readyState = WebSocket.CLOSED;
	      if (typeof _this.onclose === 'function') {
	        _this.onclose(res);
	      }
	    });

	    socketTask.onMessage(function (res) {
	      if (typeof _this.onmessage === 'function') {
	        _this.onmessage(res);
	      }
	    });

	    socketTask.onOpen(function () {
	      _this.readyState = WebSocket.OPEN;
	      if (typeof _this.onopen === 'function') {
	        _this.onopen();
	      }
	    });

	    socketTask.onError(function (res) {
	      if (typeof _this.onerror === 'function') {
	        _this.onerror(new Error(res.errMsg));
	      }
	    });

	    return this;
	  } // TODO 小程序内目前获取不到，实际上需要根据服务器选择的 sub-protocol 返回
	  // TODO 更新 bufferedAmount
	  // The connection is closed or couldn't be opened.

	  // The connection is open and ready to communicate.


	  _createClass(WebSocket, [{
	    key: 'close',
	    value: function close(code, reason) {
	      this.readyState = WebSocket.CLOSING;
	      var socketTask = _socketTask.get(this);

	      socketTask.close({
	        code: code,
	        reason: reason
	      });
	    }
	  }, {
	    key: 'send',
	    value: function send(data) {
	      if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {
	        throw new TypeError('Failed to send message: The data ' + data + ' is invalid');
	      }

	      var socketTask = _socketTask.get(this);

	      socketTask.send({
	        data: data
	      });
	    }
	  }]);

	  return WebSocket;
	}();

	WebSocket.CONNECTING = 0;
	WebSocket.OPEN = 1;
	WebSocket.CLOSING = 2;
	WebSocket.CLOSED = 3;
	exports.default = WebSocket;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * TODO 使用 ks.readFile 来封装 FileReader
	 */
	var FileReader = function () {
	  function FileReader() {
	    _classCallCheck(this, FileReader);
	  }

	  _createClass(FileReader, [{
	    key: "construct",
	    value: function construct() {}
	  }]);

	  return FileReader;
	}();

	exports.default = FileReader;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var localStorage = {
	  get length() {
	    var _ks$getStorageInfoSyn = ks.getStorageInfoSync(),
	        keys = _ks$getStorageInfoSyn.keys;

	    return keys.length;
	  },

	  key: function key(n) {
	    var _ks$getStorageInfoSyn2 = ks.getStorageInfoSync(),
	        keys = _ks$getStorageInfoSyn2.keys;

	    return keys[n];
	  },
	  getItem: function getItem(key) {
	    return ks.getStorageSync(key);
	  },
	  setItem: function setItem(key, value) {
	    return ks.setStorageSync(key, value);
	  },
	  removeItem: function removeItem(key) {
	    ks.removeStorageSync(key);
	  },
	  clear: function clear() {
	    ks.clearStorageSync();
	  }
	};

	exports.default = localStorage;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var location = {
	  href: 'game.js',
	  reload: function reload() {}
	};

	exports.default = location;

/***/ })
/******/ ]);