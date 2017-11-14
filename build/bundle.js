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
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(5);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @Author: Harsha Attray <harsha>
 * @Date:   2017-11-13T16:29:15+05:30
 * @Filename: index.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-11-14T16:57:45+05:30
 * @License: Apache License v2.0
 */
//common JS module syntax

var app = (0, _express2.default)();

//Root route of the application
app.use(_express2.default.static('public'));

app.get('/', function (req, res) {

  res.send((0, _renderer2.default)(req));
});

app.listen(7000, function () {
  console.log('listening to your port');
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      'Stuff rendered from server',
      _react2.default.createElement(
        'button',
        { onClick: function onClick() {
            return console.log('Print this');
          } },
        'Press this!!'
      )
    )
  );
}; /**
    * @Author: Harsha Attray <harsha>
    * @Date:   2017-11-13T16:32:35+05:30
    * @Filename: Home.js
    * @Last modified by:   harsha
    * @Last modified time: 2017-11-14T12:41:08+05:30
    * @License: Apache License v2.0
    */
exports.default = Home;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(3);

var _server2 = _interopRequireDefault(_server);

var _reactRouterDom = __webpack_require__(6);

var _Routes = __webpack_require__(7);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @Author: Harsha Attray <harsha>
 * @Date:   2017-11-14T15:50:40+05:30
 * @Filename: renderer.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-11-14T16:59:04+05:30
 * @License: Apache License v2.0
 */

exports.default = function (req) {
  var content = (0, _server2.default)(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { location: req.path, context: {} },
    ' // fetching the url from  the request param of the express server',
    _react2.default.createElement(_Routes2.default, null)
  ));

  return '<html><head></head><body><div id="root">' + content + '</div><script src="bundle.js"></script></body></html>';
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _Home = __webpack_require__(4);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default })
  );
}; /**
    * @Author: Harsha Attray <harsha>
    * @Date:   2017-11-14T16:16:38+05:30
    * @Filename: Routes.js
    * @Last modified by:   harsha
    * @Last modified time: 2017-11-14T16:25:15+05:30
    * @License: Apache License v2.0
    */

/***/ })
/******/ ]);