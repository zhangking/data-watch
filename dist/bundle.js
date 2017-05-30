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
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_watch__ = __webpack_require__(3);


var data = {
    age: {
        number: 1
    }
};

var newData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_watch__["a" /* default */])(data, {
    sync: true,
    deep: true,
    immediate: false,
    callback: function callback(newVal, oldVal) {
        console.log(newVal, oldVal);
    }
});

newData.age.number = 2;

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = watch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__watcher__ = __webpack_require__(6);


function watch(target, config) {
  return new __WEBPACK_IMPORTED_MODULE_0__watcher__["a" /* default */](target, config)['value'];
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (value) {
    return Array.isArray(value) || Object.prototype.toString.call(value) === '[object Object]' && Object.isExtensible(value);
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noop; });
var noop = function noop() {};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shouldWatch__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




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
    if (this._config.immediate) {
      // this.run()
    }
  }

  _createClass(Watcher, [{
    key: 'cancel',
    value: function cancel() {}
  }, {
    key: 'run',
    value: function run(newVal, oldVal) {
      if (this._config.sync) {
        this._config.callback.call(null, newVal, oldVal);
      } else {
        //async

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
          console.log(Reflect.get(target, key, receiver));
          if (deep && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shouldWatch__["a" /* default */])(value)) {
            value = self.dataProxy(value);
          }
          Reflect.set(target, key, value, receiver);
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

/***/ })
/******/ ]);