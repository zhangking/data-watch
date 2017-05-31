/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = watch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__watcher__ = __webpack_require__(4);


function watch(target, config) {
  return new __WEBPACK_IMPORTED_MODULE_0__watcher__["a" /* default */](target, config)['value'];
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_watch__ = __webpack_require__(0);


var data = {
    age: {
        number: 1
    }
};

var newData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_watch__["a" /* default */])(data, {
    sync: false,
    deep: true,
    immediate: false,
    callback: function callback(value) {
        console.log(value);
    }
});

newData.age.number = 2;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noop; });
var noop = function noop() {};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (value) {
    return Array.isArray(value) || Object.prototype.toString.call(value) === '[object Object]' && Object.isExtensible(value);
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shouldWatch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__queue__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var uid = 0;

var Watcher = function () {
  function Watcher(target, config) {
    _classCallCheck(this, Watcher);

    this._config = Object.assign({
      sync: false,
      deep: true,
      immediate: false,
      callback: __WEBPACK_IMPORTED_MODULE_1__common__["a" /* noop */]
    }, config);
    this.value = this.dataProxy(target, true);
    this.canceled = false;
    this.id = ++uid;
    if (this._config.immediate) {
      this.run();
    }
  }

  _createClass(Watcher, [{
    key: 'cancel',
    value: function cancel() {
      this.canceled = true;
      // cancel __dataproxy__
      // to do 
    }
  }, {
    key: '_run',
    value: function _run() {
      try {
        this._config.callback.call(null, this.value);
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: 'run',
    value: function run() {
      if (this._config.sync) {
        this._run();
      } else {
        //async
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__queue__["a" /* queueWatcher */])(this);
      }
    }
  }, {
    key: 'dataProxy',
    value: function dataProxy(target, init) {
      var proxy = new Proxy(target, this.getHandler(init || this._config.deep));
      Object.defineProperty(target, '__dataproxy__', {
        value: proxy,
        enumerable: false,
        writable: false,
        configurable: true
      });
      return proxy;
    }
  }, {
    key: 'getHandler',
    value: function getHandler(deep) {
      var self = this;
      return {
        get: function get(target, key, receiver) {
          var value = Reflect.get(target, key, receiver);

          if (key === '__dataproxy__') return value;
          if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shouldWatch__["a" /* default */])(value)) {
            if (value.hasOwnProperty('__dataproxy__')) {
              return value['__dataproxy__'];
            } else if (deep) {
              return self.dataProxy(value);
            }
          }

          return value;
        },
        set: function set(target, key, value, receiver) {
          if (deep && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shouldWatch__["a" /* default */])(value)) {
            value = self.dataProxy(value);
          }
          Reflect.set(target, key, value, receiver);
          self.run();
          return true;
        },
        deleteProperty: function deleteProperty(target, propKey) {
          Reflect.deleteProperty(target, propKey);
          self.run();
          return true;
        }
      };
    }
  }]);

  return Watcher;
}();

/* harmony default export */ __webpack_exports__["a"] = (Watcher);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = queueWatcher;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nextTick__ = __webpack_require__(7);



var queue = [];
var has = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState() {
  queue.length = 0;
  has = {};
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue() {
  flushing = true;
  var watcher = void 0,
      id = void 0,
      vm = void 0;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) {
    return a.id - b.id;
  });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher._run();
  }

  // call updated hooks
  index = queue.length;
  while (index--) {
    watcher = queue[index];
    vm = watcher.vm;
  }
  resetSchedulerState();
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i >= 0 && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(Math.max(i, index) + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__nextTick__["a" /* nextTick */])(flushSchedulerQueue);
    }
  }
}

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export inBrowser */
/* unused harmony export UA */
/* unused harmony export isIE */
/* unused harmony export isIE9 */
/* unused harmony export isEdge */
/* unused harmony export isAndroid */
/* unused harmony export isIOS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nextTick; });
/* unused harmony export _Set */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* globals MutationObserver */



// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

function isNative(Ctor) {
  return (/native code/.test(Ctor.toString())
  );
}

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = function () {
  var callbacks = [];
  var pending = false;
  var timerFunc = void 0;

  function nextTickHandler() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function logError(err) {
      console.error(err);
    };
    timerFunc = function timerFunc() {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) setTimeout(__WEBPACK_IMPORTED_MODULE_0__common__["a" /* noop */]);
    };
  } else if (typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]')) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function timerFunc() {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    timerFunc = function timerFunc() {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick(cb, ctx) {
    var _resolve = void 0;
    callbacks.push(function () {
      if (cb) cb.call(ctx);
      if (_resolve) _resolve(ctx);
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      });
    }
  };
}();

var _Set = void 0;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = function () {
    function Set() {
      _classCallCheck(this, Set);

      this.set = Object.create(null);
    }

    _createClass(Set, [{
      key: 'has',
      value: function has(key) {
        return this.set[key] === true;
      }
    }, {
      key: 'add',
      value: function add(key) {
        this.set[key] = true;
      }
    }, {
      key: 'clear',
      value: function clear() {
        this.set = Object.create(null);
      }
    }]);

    return Set;
  }();
}



/***/ })
/******/ ]);