/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./client/calculator.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/calculator.js":
/*!******************************!*\
  !*** ./client/calculator.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Calculator_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Calculator.jsx */ "./client/components/Calculator.jsx");
// Load React libraries

 // Load component

 // Rendering the component into the page

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Calculator_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));

/***/ }),

/***/ "./client/components/Button.jsx":
/*!**************************************!*\
  !*** ./client/components/Button.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

//     <canvas id="screen" ></canvas>
//     <textarea id="userString" rows="5" cols="85">x</textarea><br/>
//     <button type="button" onClick="graphFunction()">Graph</button>
//     <div id="result"></div><br/>



var Button = /*#__PURE__*/function (_React$Component) {
  _inherits(Button, _React$Component);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.apply(this, arguments);
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: this.props.onclick
      }, this.props.name);
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Button.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onclick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Button.defaultProps = {
  name: '',
  onclick: function onclick(e) {
    e.preventDefault();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./client/components/ButtonGrid.jsx":
/*!******************************************!*\
  !*** ./client/components/ButtonGrid.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

//     <canvas id="screen" ></canvas>
//     <textarea id="userString" rows="5" cols="85">x</textarea><br/>
//     <button type="button" onClick="graphFunction()">Graph</button>
//     <div id="result"></div><br/>



var ButtonGrid = /*#__PURE__*/function (_React$Component) {
  _inherits(ButtonGrid, _React$Component);

  var _super = _createSuper(ButtonGrid);

  function ButtonGrid() {
    _classCallCheck(this, ButtonGrid);

    return _super.apply(this, arguments);
  }

  _createClass(ButtonGrid, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
    }
  }]);

  return ButtonGrid;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ButtonGrid.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
ButtonGrid.defaultProps = {
  title: 'Banner Title'
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonGrid);

/***/ }),

/***/ "./client/components/Calculator.jsx":
/*!******************************************!*\
  !*** ./client/components/Calculator.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Graph_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Graph.jsx */ "./client/components/Graph.jsx");
/* harmony import */ var _EntryField_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EntryField.jsx */ "./client/components/EntryField.jsx");
/* harmony import */ var _ButtonGrid_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ButtonGrid.jsx */ "./client/components/ButtonGrid.jsx");
/* harmony import */ var _Button_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button.jsx */ "./client/components/Button.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Calculator = /*#__PURE__*/function (_React$Component) {
  _inherits(Calculator, _React$Component);

  var _super = _createSuper(Calculator);

  function Calculator(props) {
    var _this;

    _classCallCheck(this, Calculator);

    _this = _super.call(this, props);
    _this.handleEquationChange = _this.handleEquationChange.bind(_assertThisInitialized(_this));
    _this.state = {
      currentEquation: 'x'
    };
    return _this;
  }

  _createClass(Calculator, [{
    key: "handleEquationChange",
    value: function handleEquationChange(event) {
      console.log(event.target.value);
      this.setState({
        currentEquation: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Graph_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        currentEquation: this.state.currentEquation
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EntryField_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        currentEntry: this.state.currentEquation,
        onEntryChange: this.handleEquationChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonGrid_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        rows: 1,
        columns: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "Submit",
        onclick: this.handleGraphClick
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonGrid_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    }
  }]);

  return Calculator;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Calculator);

/***/ }),

/***/ "./client/components/EntryField.jsx":
/*!******************************************!*\
  !*** ./client/components/EntryField.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

//     <canvas id="screen" ></canvas>
//     <textarea id="userString" rows="5" cols="85">x</textarea><br/>
//     <button type="button" onClick="graphFunction()">Graph</button>
//     <div id="result"></div><br/>


var EntryField = /*#__PURE__*/function (_React$Component) {
  _inherits(EntryField, _React$Component);

  var _super = _createSuper(EntryField);

  function EntryField() {
    _classCallCheck(this, EntryField);

    return _super.apply(this, arguments);
  }

  _createClass(EntryField, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        rows: "5",
        cols: "85",
        value: this.props.currentEntry,
        onChange: this.props.onEntryChange
      });
    }
  }]);

  return EntryField;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EntryField);

/***/ }),

/***/ "./client/components/Graph.jsx":
/*!*************************************!*\
  !*** ./client/components/Graph.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _webgl_drawGraph_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl/drawGraph.js */ "./client/webgl/drawGraph.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

//     <canvas id="screen" ></canvas>
//     <textarea id="userString" rows="5" cols="85">x</textarea><br/>
//     <button type="button" onClick="graphFunction()">Graph</button>
//     <div id="result"></div><br/>




var Graph = /*#__PURE__*/function (_React$Component) {
  _inherits(Graph, _React$Component);

  var _super = _createSuper(Graph);

  function Graph(props) {
    var _this;

    _classCallCheck(this, Graph);

    _this = _super.call(this, props);
    _this.canvasRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  } // initial draw


  _createClass(Graph, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_webgl_drawGraph_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.props.currentEquation, this.canvasRef.current);
    }
  }, {
    key: "render",
    value: function render() {
      var canvas = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
        width: 500,
        height: 500,
        ref: this.canvasRef
      });

      if (this.canvasRef.current !== null) {
        Object(_webgl_drawGraph_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.props.currentEquation, this.canvasRef.current);
      }

      return canvas;
    }
  }]);

  return Graph;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Graph.propTypes = {
  currentEquation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
Graph.defaultProps = {
  currentEquation: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Graph);

/***/ }),

/***/ "./client/parser/ExpressionType.js":
/*!*****************************************!*\
  !*** ./client/parser/ExpressionType.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Enum to hold an expression type. Used for turning a function string into a tree.
 * Can be EXP (Expression), MEXP (Multiplication Expression), or PEXP (Parantheses Expression).
 */
var ExpressionType = Object.freeze({
  EXP: 1,
  MEXP: 2,
  NEXP: 3,
  EEXP: 4,
  PEXP: 5
});
/* harmony default export */ __webpack_exports__["default"] = (ExpressionType);

/***/ }),

/***/ "./client/parser/Token.js":
/*!********************************!*\
  !*** ./client/parser/Token.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TokenType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TokenType.js */ "./client/parser/TokenType.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


/**
 * Class representing a token in a function. Supports (, ), +, -, *, /. Everything else defaults to values.
 * Contains properties next, previous, value, and tokenType. Previous and next are used to point to the next
 * and previous values in a list of tokens, while value contains the token data. The tokenType is a TokenType
 * variable that is set to the corresponding TokenType value depending on the token value. It is set to
 * TokenType.VALUE as a default.
 */

var Token =
/**
 * Initializes next and previous to null, value to token, and tokenType to the correct TokenType value for
 * the token.
 *
 * @param {string} token The token to set the value property to and that is used to determine the tokenType.
 */
function Token(token) {
  _classCallCheck(this, Token);

  this.value = token;
  this.next = null;
  this.previous = null;
  this.tokenType = _TokenType_js__WEBPACK_IMPORTED_MODULE_0__["default"].VALUE;

  if (token === '(') {
    this.tokenType = _TokenType_js__WEBPACK_IMPORTED_MODULE_0__["default"].OPEN_PARANTHESES;
  } else if (token === ')') {
    this.tokenType = _TokenType_js__WEBPACK_IMPORTED_MODULE_0__["default"].CLOSE_PARANTHESES;
  } else if (token === '+') {
    this.tokenType = _TokenType_js__WEBPACK_IMPORTED_MODULE_0__["default"].ADDITION;
  } else if (token === '-') {
    this.tokenType = _TokenType_js__WEBPACK_IMPORTED_MODULE_0__["default"].NEGATION;
  } else if (token === '*' || token === '/') {
    this.tokenType = _TokenType_js__WEBPACK_IMPORTED_MODULE_0__["default"].MULTIPLICATION;
  } else if (token === '^') {
    this.tokenType = _TokenType_js__WEBPACK_IMPORTED_MODULE_0__["default"].POWER;
  } else if (token === 'cos(' || token === 'sin(' || token === 'tan(' || token === 'acos(' || token === 'asin(' || token === 'atan(' || token === 'log(' || token === 'ln(') {
    this.tokenType = _TokenType_js__WEBPACK_IMPORTED_MODULE_0__["default"].E_OPEN_PARANTHESES;
    this.value = token.substr(0, 2);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Token);

/***/ }),

/***/ "./client/parser/TokenList.js":
/*!************************************!*\
  !*** ./client/parser/TokenList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class representing a token list, containing properties holding the head and the tail and a function to
 * add a new token. Each token in the list must have previous and next properties.
 */
var TokenList = /*#__PURE__*/function () {
  /**
     * Inititializes the head and tail properties to null.
     */
  function TokenList() {
    _classCallCheck(this, TokenList);

    this.head = null;
    this.tail = null;
  }
  /**
     * Adds a token to the end of the TokenList.
     *
     * @param {*} token A token to add to the end of the list. Must contain properties next and previous.
     */


  _createClass(TokenList, [{
    key: "add",
    value: function add(token) {
      if (this.head == null) {
        this.head = token;
      } else {
        this.tail.next = token;
        token.previous = this.tail;
      }

      this.tail = token;
    }
  }]);

  return TokenList;
}();

/* harmony default export */ __webpack_exports__["default"] = (TokenList);

/***/ }),

/***/ "./client/parser/TokenType.js":
/*!************************************!*\
  !*** ./client/parser/TokenType.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Enum to hold mathematical token types. Can be OPEN_PARNTHESES, CLOSE_PARANTHESES, VALUE, ADDITION, or MULTIPLICATION.
 */
var TokenType = Object.freeze({
  OPEN_PARANTHESES: 1,
  CLOSE_PARANTHESES: 2,
  VALUE: 3,
  ADDITION: 4,
  MULTIPLICATION: 5,
  NEGATION: 6,
  POWER: 7,
  E_OPEN_PARANTHESES: 8
});
/* harmony default export */ __webpack_exports__["default"] = (TokenType);

/***/ }),

/***/ "./client/parser/TreeNode.js":
/*!***********************************!*\
  !*** ./client/parser/TreeNode.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class representing a node of a binary tree with a token. Contains value, leftChild, rightChild,
 * and parent properties, as well as createLeftChild and createRightChild functions. Left child,
 * right child, and parent properties are automatically set and should usually only be gotten.
 */
var TreeNode = /*#__PURE__*/function () {
  /**
   * Initializes the value, leftChild, rightChild, and parent variables to null.
   */
  function TreeNode() {
    _classCallCheck(this, TreeNode);

    this.value = null;
    this.leftChild = null;
    this.rightChild = null;
    this.parent = null;
  }
  /**
   * Creates a new tree node and assigns it to the left child of this tree node.
   * Sets the new tree node's parent to this tree node.
   */


  _createClass(TreeNode, [{
    key: "createLeftChild",
    value: function createLeftChild() {
      this.leftChild = new TreeNode();
      this.leftChild.parent = this;
    }
    /**
     * Creates a new tree node and assigns it to the right child of this tree node.
     * Sets the new tree node's parent to this tree node.
     */

  }, {
    key: "createRightChild",
    value: function createRightChild() {
      this.rightChild = new TreeNode();
      this.rightChild.parent = this;
    }
  }]);

  return TreeNode;
}();

/* harmony default export */ __webpack_exports__["default"] = (TreeNode);

/***/ }),

/***/ "./client/parser/equationParser.js":
/*!*****************************************!*\
  !*** ./client/parser/equationParser.js ***!
  \*****************************************/
/*! exports provided: processFunction, evaluateFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processFunction", function() { return processFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evaluateFunction", function() { return evaluateFunction; });
/* harmony import */ var _parseTree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseTree.js */ "./client/parser/parseTree.js");
/* harmony import */ var _implicit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./implicit.js */ "./client/parser/implicit.js");
/* harmony import */ var _validateFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validateFunction.js */ "./client/parser/validateFunction.js");



/**
 * Processes a string containing a function. Removes whitespace, handles implicit multiplication, checks
 * that the function is valid, and converts it into a function parse tree that is returned.
 *
 * @param {string} func The function to process.
 *
 * @returns {TreeNode} The parse tree representing the function that was created. Returns null if the
 *  function was invalid.
 */

function processFunction(func) {
  console.log('Entering processFunction');

  try {
    var implicitAddedFunc = Object(_implicit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func); // document.getElementById('result').innerHTML = implicitAddedFunc

    var tree = null; //   if (validateFunction(implicitAddedFunc)) {
    //     console.error('Invalid function!')
    //   } else {

    tree = Object(_parseTree_js__WEBPACK_IMPORTED_MODULE_0__["default"])(implicitAddedFunc);
    console.log(evaluateFunction(tree, 1)); //   }

    console.log('Exiting processFunction');
    return tree;
  } catch (e) {
    console.log("Process function failed for ".concat(func));
    console.log(e);
    return null;
  } // convert to lowercase? Depends on if we replace things like cos() with some temporary var

}
/**
 * Evaluates the value of a function in tree form at the point x. Handles +, -, *, /, (, ), x, and numbers.
 *
 * @param {TreeNode} tree The root node of the function parse tree to evaluate.
 * @param {Number} x The value of the variable x in the function.
 * @return {Number} f(x) (the answer to the function at x).
 */


function evaluateFunction(tree, x) {
  // Should make this into a switch
  if (tree.value === '*') {
    return Number(evaluateFunction(tree.leftChild, x)) * Number(evaluateFunction(tree.rightChild, x));
  } else if (tree.value === '/') {
    var numerator = Number(evaluateFunction(tree.leftChild, x));
    var denominator = Number(evaluateFunction(tree.rightChild, x));

    if (denominator === 0) {
      if (numerator === 0) {
        return undefined;
      }

      return Infinity * numerator;
    }

    return numerator / denominator;
  } else if (tree.value === '+') {
    return Number(evaluateFunction(tree.leftChild, x)) + Number(evaluateFunction(tree.rightChild, x));
  } else if (tree.value === '-') {
    return -1 * Number(evaluateFunction(tree.rightChild, x)); // Number(evaluateFunction(tree.leftChild, x))
  } else if (tree.value === '^') {
    return Math.pow(Number(evaluateFunction(tree.leftChild, x)), Number(evaluateFunction(tree.rightChild, x)));
  } else if (tree.value === 'co') {
    return Math.cos(Number(evaluateFunction(tree.rightChild, x)));
  } else if (tree.value === 'si') {
    return Math.sin(Number(evaluateFunction(tree.rightChild, x)));
  } else if (tree.value === 'ta') {
    return Math.tan(Number(evaluateFunction(tree.rightChild, x)));
  } else if (tree.value === 'ac') {
    return Math.acos(Number(evaluateFunction(tree.rightChild, x)));
  } else if (tree.value === 'as') {
    return Math.asin(Number(evaluateFunction(tree.rightChild, x)));
  } else if (tree.value === 'at') {
    return Math.atan(Number(evaluateFunction(tree.rightChild, x)));
  } else if (tree.value === 'ln') {
    return Math.log(Number(evaluateFunction(tree.rightChild, x)));
  } else if (tree.value === 'lo') {
    return Math.log10(Number(evaluateFunction(tree.rightChild, x)));
  } else {
    if (tree.value === 'x') {
      return x;
    } else if (tree.value === 'e') {
      return Math.E;
    } else if (tree.value === 'pi') {
      return Math.PI;
    }

    return tree.value;
  }
}

 // NEXT STEPS:
// Redo documentation for negative numbers and powers
// Implement powers into validateProperFunction
// Write documentation for validateProperFunction
// Implement more trigonometry
// Implement .number
// Enhance graphing when far enough in class
// Implement absolute value
// Implement floor and ceiling?
// Implement hyperbolics?
// Implement sqrt?

/***/ }),

/***/ "./client/parser/implicit.js":
/*!***********************************!*\
  !*** ./client/parser/implicit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Runs the other functions in implicit.js on a string. Removes whitespace and then adds addition/multiplication symbols
 * wherever implicit addition/multiplication occurs.
 *
 * @param {string} input The string to process
 *
 * @returns {string} The processed string
 */
function runImplicitFunctions(input) {
  return handleImplicitAddition(handleImplicitMultiplication(removeWhitespace(input)));
}
/**
 * Removes all whitespace from a string.
 *
 * @param {string} input The string to remove whitespace from.
 *
 * @returns {string} The string with all whitespace removed.
 */


function removeWhitespace(input) {
  return input.replace(/\s+/g, '');
}
/**
 * Adds multiplication symbols to a string containing a function wherever implicit multiplication occurs.
 *
 * @param {string} func A function (with no whitespace) to add multiplication symbols to.
 *
 * @returns {string} The function with multiplication symbols added wherever implicit multiplication occured.
 */


function handleImplicitMultiplication(func) {
  return func.replace(/(\)|x|pi|e|\d(?=\D))(?=\(|x|\d|c|s|t|a|p|e|l)/g, '$1*');
}
/**
 * Adds addition symbols to a string containing a function wherever "implicit addition" occurs. "Implicit addition" is
 * defined as subtraction of an expression, where what is happening is addition of a negative expression.
 * Ex: 10-3 will be rewritten as 10+-3 and (x+10)-(x+3) will be rewritten as (x+10)+-(x+3).
 *
 * @param {string} func A function (with no whitespace) to add addition symbols to.
 *
 * @returns {string} The function with addition symbols added wherever implicit addition occured.
 */


function handleImplicitAddition(func) {
  return func.replace(/([^\-(*/+^])-/g, '$1+-');
}

/* harmony default export */ __webpack_exports__["default"] = (runImplicitFunctions);

/***/ }),

/***/ "./client/parser/parseTree.js":
/*!************************************!*\
  !*** ./client/parser/parseTree.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenizer.js */ "./client/parser/tokenizer.js");
/* harmony import */ var _ExpressionType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpressionType.js */ "./client/parser/ExpressionType.js");
/* harmony import */ var _TokenType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TokenType.js */ "./client/parser/TokenType.js");
/* harmony import */ var _TreeNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TreeNode.js */ "./client/parser/TreeNode.js");




/**
 * Creates a parse tree for a tokenized function. It should be read from the bottom-left to the top-right.
 *
 * @param {TreeNode} root The root of the tree to add the nodes to.
 * @param {ExpressionType} expressionType The type of expression. Usually ExpressionType.EXP.
 * @param {Token} start The first token in the token list to parse. Should probably be TokenList.head.
 * @param {Token} end The final token in the token list to parse. Should probably be TokenList.tail.
 */

function createParseTreeNodes(root, expressionType, startToken, endToken) {
  /*
    Algorithm information:
     This algorithm relies on the following Backus-Naur form (BNF) context free grammar:
    <EXP> ::= <EXP>+<MEXP> | <EXP>-<MEXP> | <MEXP>
    <MEXP> ::= <MEXP>*<PEXP> | <MEXP>/<PEXP> | <PEXP>
    <PEXP> ::= (<EXP>) | <NUMBER>
    <NUMBER> ::= any number or variable
    Note: EXP stands for expression, MEXP stands for multiplication expression, and <PEXP> stands
    for parantheses expression.
     It implements this by starting with an <EXP>, and searching the token list for the last occurence
    where the parantheses are balanced and a + or - character is found (If this does not occur, it
    switches to a <MEXP> expression and loops). Next, it sets the character of the current node to this
    character and recursively calls the function on the left and right portions of the token list using
    the left (EXP) and right (MEXP) children as the roots. Each <EXP> token repeats this process. A
    <MEXP> expresion searches the token list for the last occurence where the parantheses are balanced
    and a * or / character is found (If this does not occur, it switches to a <PEXP> expression and
    loops). Next, it sets the value of the current node to this "split" token and recursively calls the
    function on the left and right portions of the token list using the left (MEXP) and right (PEXP),
    children as the roots. For a <PEXP> expression, it checks whether it is enclosed by parantheses. If
    it is, it removes those parantheses from the token listand loops back to an <EXP> expression.
    Otherwise, there can only be one token left in the list and it sets the valueof te current node to
    this token.
     This works because for an <EXP> expression, the right side is only a <MEXP> expression if it contains
    NO + or - token with balanced parantheses, but we must search until we find one to meet the
    requirement (unless no token does, in which case we just switch to a <MEXP> expression, basically
    doing the equivalent of ignoring the left side). The same idea holds for a <MEXP> expression. For
    a <PEXP> expression, we know that there are no +, -, *, or / symbols outside parantheses by the
    previous two parts. Thus, either we have a single character or some expression surrounded by
    parantheses.
  */
  // Iterate while we have not set the root value.
  while (root.value == null) {
    if (expressionType === _ExpressionType_js__WEBPACK_IMPORTED_MODULE_1__["default"].EXP) {
      // Search for a + or - token with balanced parantheses.
      var aToken = Object(_tokenizer_js__WEBPACK_IMPORTED_MODULE_0__["findSplitToken"])(expressionType, startToken, endToken); // If no such token was found, switch to a MEXP expression and loop again (this helps to keep
      // unneccessary nodes from building up which would happen with a recursive call in this situation).

      if (aToken == null) {
        expressionType = _ExpressionType_js__WEBPACK_IMPORTED_MODULE_1__["default"].MEXP;
      } else {
        // Recursively repeat this process for the left and right children and set the token to the split token.
        root.createLeftChild();
        root.createRightChild();
        createParseTreeNodes(root.leftChild, _ExpressionType_js__WEBPACK_IMPORTED_MODULE_1__["default"].EXP, startToken, aToken.previous);
        createParseTreeNodes(root.rightChild, _ExpressionType_js__WEBPACK_IMPORTED_MODULE_1__["default"].MEXP, aToken.next, endToken);
        root.value = aToken.value;
        return;
      }
    } else if (expressionType === _ExpressionType_js__WEBPACK_IMPORTED_MODULE_1__["default"].MEXP) {
      // Search for a * or / token with balanced parantheses
      var mToken = Object(_tokenizer_js__WEBPACK_IMPORTED_MODULE_0__["findSplitToken"])(expressionType, startToken, endToken); // If no such token was found, switch to a PEXP expression and loop again (this helps to keep
      // unneccessary nodes from building up which would happen with a recursive call in this situation).

      if (mToken == null) {
        expressionType = _ExpressionType_js__WEBPACK_IMPORTED_MODULE_1__["default"].NEXP;
      } else {
        // Recursively repeat this process for the left and right children and set the token to the split token.
        root.createLeftChild();
        root.createRightChild();
        createParseTreeNodes(root.leftChild, _ExpressionType_js__WEBPACK_IMPORTED_MODULE_1__["default"].MEXP, startToken, mToken.previous);
        createParseTreeNodes(root.rightChild, _ExpressionType_js__WEBPACK_IMPORTED_MODULE_1__["default"].NEXP, mToken.next, endToken);
        root.value = mToken.value;
        return;
      }
    } else if (expressionType === _ExpressionType_js__WEBPACK_IMPORTED_MODULE_1__["default"].NEXP) {
      if (startToken.tokenType === _TokenType_js__WEBPACK_IMPORTED_MODULE_2__["default"].NEGATION) {
        root.value = startToken.value;
        root.createRightChild();
        createParseTreeNodes(root.rightChild, _ExpressionType_js__WEBPACK_IMPORTED_MODULE_1__["default"].NEXP, startToken.next, endToken);
        return;
      } else {
        expressionType = _ExpressionType_js__WEBPACK_IMPORTED_MODULE_1__["default"].EEXP;
      }
    } else if (expressionType === _ExpressionType_js__WEBPACK_IMPORTED_MODULE_1__["default"].EEXP) {
      var eToken = Object(_tokenizer_js__WEBPACK_IMPORTED_MODULE_0__["findEEXPSplitToken"])(startToken, endToken);

      if (eToken == null) {
        expressionType = _ExpressionType_js__WEBPACK_IMPORTED_MODULE_1__["default"].PEXP;
      } else {
        root.createLeftChild();
        root.createRightChild();
        createParseTreeNodes(root.leftChild, _ExpressionType_js__WEBPACK_IMPORTED_MODULE_1__["default"].PEXP, startToken, eToken.previous);
        createParseTreeNodes(root.rightChild, _ExpressionType_js__WEBPACK_IMPORTED_MODULE_1__["default"].NEXP, eToken.next, endToken);
        root.value = eToken.value;
        return;
      }
    } else {
      // If the first token is a (, then the last token must be a ). They can both be removed and the expression
      // type changed to EXP. Again, no recursive call is done to eliminate unneccessary nodes.
      if (startToken.tokenType === _TokenType_js__WEBPACK_IMPORTED_MODULE_2__["default"].OPEN_PARANTHESES) {
        expressionType = _ExpressionType_js__WEBPACK_IMPORTED_MODULE_1__["default"].EXP;
        startToken = startToken.next;
        endToken = endToken.previous;
      } else if (startToken.tokenType === _TokenType_js__WEBPACK_IMPORTED_MODULE_2__["default"].E_OPEN_PARANTHESES) {
        root.createRightChild();
        createParseTreeNodes(root.rightChild, _ExpressionType_js__WEBPACK_IMPORTED_MODULE_1__["default"].EXP, startToken.next, endToken.previous);
        root.value = startToken.value;
        return;
      } else {
        // Otherwise, we should have a single token and this token is set to it.
        root.value = startToken.value;
        return;
      }
    }
  }
}
/**
 * Tokenizes the input and creates a function parse tree from it.
 *
 * @param {string} input A function that has been validated to turn into a parse tree.
 * @return {TreeNode} The function parse tree that was created.
 */


function createParseTree(input) {
  console.log('Entering createParseTree with input: ' + input);
  var tokenList = Object(_tokenizer_js__WEBPACK_IMPORTED_MODULE_0__["tokenize"])(input);
  var tree = new _TreeNode_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
  createParseTreeNodes(tree, _ExpressionType_js__WEBPACK_IMPORTED_MODULE_1__["default"].EXP, tokenList.head, tokenList.tail);
  console.log(printParseTree(tree));
  console.log('Exiting createParseTree');
  return tree;
}
/**
 * Returns a string representation of the parse tree. Intended for testing that the parse tree was created
 * correctly. Searches from the left to the right and prints each token value it finds.
 *
 * @param {TreeNode} tree The root node of the tree to print.
 *
 * @return {string} Representation of the parse tree.
 */


function printParseTree(tree) {
  if (tree == null) {
    return '';
  }

  return printParseTree(tree.leftChild) + tree.value + printParseTree(tree.rightChild);
}

/* harmony default export */ __webpack_exports__["default"] = (createParseTree);

/***/ }),

/***/ "./client/parser/tokenizer.js":
/*!************************************!*\
  !*** ./client/parser/tokenizer.js ***!
  \************************************/
/*! exports provided: tokenize, findEEXPSplitToken, findSplitToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return tokenize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findEEXPSplitToken", function() { return findEEXPSplitToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findSplitToken", function() { return findSplitToken; });
/* harmony import */ var _TokenList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TokenList.js */ "./client/parser/TokenList.js");
/* harmony import */ var _Token_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Token.js */ "./client/parser/Token.js");
/* harmony import */ var _ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpressionType.js */ "./client/parser/ExpressionType.js");
/* harmony import */ var _TokenType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TokenType.js */ "./client/parser/TokenType.js");




/**
 * Turns the input string into a TokenList of Tokens.
 *
 * @param {string} input The string to tokenize. Should only contain +, -, /, *, (, ), x, and numbers.
 *
 * @return {TokenList} Returns a list of Tokens.
 */

function tokenize(input) {
  console.log('Entering tokenize with input: ' + input); // This may need additional work. It fails for .32 or something similar (must do 0.32).

  var tokenRetriever = /(\d+(\.\d+)?|e|pi|a?(sin|cos|tan)\(|(ln|log)\(|[+\-*/x()^])/;
  var tokenList = new _TokenList_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

  while (input.length) {
    var token = '';
    input = input.replace(tokenRetriever, function (matchedString, savedToken) {
      token = savedToken;
      return '';
    });
    tokenList.add(new _Token_js__WEBPACK_IMPORTED_MODULE_1__["default"](token));

    if (token === '') {
      console.error('Invalid character found when tokenizing');
      break;
    }
  }

  console.log('Exiting tokenize');
  return tokenList;
}
/**
 * Finds the token that the function parse tree should be split at. Searches from the endToken to the startToken
 * looking for the first token with TokenType.ADDITION (if ExpressionType.EXP) or TokenType.MULTIPLICATION (if
 * ExpressionType.MEXP) where the parantheses are balanced. Returns null if no token meets the requirement.
 * NOTE: startToken and endToken don't have to be the first and last tokens in the token list.
 *
 * @param {ExpressionType} expressionType The type of expression. Should be either ExpressionType.MEXP or
 *  ExpressionType.EXP.
 * @param {Token} startToken The first token in the token list to search.
 * @param {Token} endToken The final token in the token list to search.
 *
 * @return {Token} The token to split at. Returns null if there was no split token found.
 */


function findSplitToken(expressionType, startToken, endToken) {
  var currentToken = endToken;
  var tokenType = _TokenType_js__WEBPACK_IMPORTED_MODULE_3__["default"].ADDITION;

  if (expressionType === _ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__["default"].MEXP) {
    tokenType = _TokenType_js__WEBPACK_IMPORTED_MODULE_3__["default"].MULTIPLICATION;
  }

  var closeParantheses = 0;

  while (currentToken !== startToken && currentToken !== startToken.previous) {
    if (currentToken.tokenType === tokenType && closeParantheses === 0) {
      return currentToken;
    }

    if (currentToken.tokenType === _TokenType_js__WEBPACK_IMPORTED_MODULE_3__["default"].OPEN_PARANTHESES || currentToken.tokenType === _TokenType_js__WEBPACK_IMPORTED_MODULE_3__["default"].E_OPEN_PARANTHESES) {
      closeParantheses--;
    } else if (currentToken.tokenType === _TokenType_js__WEBPACK_IMPORTED_MODULE_3__["default"].CLOSE_PARANTHESES) {
      closeParantheses++;
    }

    currentToken = currentToken.previous;
  }

  return null;
}

function findEEXPSplitToken(startToken, endToken) {
  var currentToken = startToken;
  var closeParantheses = 0;

  while (currentToken !== endToken && currentToken !== endToken.next) {
    if (currentToken.tokenType === _TokenType_js__WEBPACK_IMPORTED_MODULE_3__["default"].POWER && closeParantheses === 0) {
      return currentToken;
    }

    if (currentToken.tokenType === _TokenType_js__WEBPACK_IMPORTED_MODULE_3__["default"].OPEN_PARANTHESES || currentToken.tokenType === _TokenType_js__WEBPACK_IMPORTED_MODULE_3__["default"].E_OPEN_PARANTHESES) {
      closeParantheses--;
    } else if (currentToken.tokenType === _TokenType_js__WEBPACK_IMPORTED_MODULE_3__["default"].CLOSE_PARANTHESES) {
      closeParantheses++;
    }

    currentToken = currentToken.next;
  }

  return null;
}



/***/ }),

/***/ "./client/parser/validateFunction.js":
/*!*******************************************!*\
  !*** ./client/parser/validateFunction.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var terminalList = ['+', '-', '*', '/', 'x', '(', ')', '$'];
var map = {
  S: {
    '+': '!',
    '-': '!',
    '*': '!',
    '/': '!',
    x: 'AT',
    '(': 'AT',
    ')': '!',
    $: '!'
  },
  A: {
    '+': 'AT+',
    '-': 'AT-',
    '*': '!',
    '/': '!',
    x: '!',
    '(': '!',
    ')': '',
    $: ''
  },
  // S'
  T: {
    '+': '!',
    '-': '!',
    '*': '!',
    '/': '!',
    x: 'BR',
    '(': 'BR',
    ')': '!',
    $: '!'
  },
  B: {
    '+': '',
    '-': '',
    '*': 'BR*',
    '/': 'BR/',
    x: '!',
    '(': '!',
    ')': '',
    $: ''
  },
  //   T'
  R: {
    '+': '!',
    '-': '!',
    '*': '!',
    '/': '!',
    x: 'x',
    '(': ')S(',
    ')': '!',
    $: '!'
  }
};
/**
 * Validates that a function is valid.
 *
 * @param {string} func String containing the function to validate. It should have no whitespace or implicit
 *  multiplication.
 *
 * @returns {boolean} True if the function is valid and false if it is not.
 */

function validateProperFunction(func) {
  console.log('Entering validateProperFunction with function: ' + func);
  func = regexConvert(func);
  var invalidCharacters = /[^+\-*/x()^]/g;

  if (func.length === 0 || func.search(invalidCharacters) !== -1) {
    return false;
  }

  return isValidFunction(func);
}

function regexConvert(func) {
  // This may need additional work. It fails for .32 or something similar (must do 0.32).
  // Also neeed to consider negative numbers more.
  var numberRemover = /\d+(\.\d+)?|e|pi/g;
  func = func.replace(numberRemover, 'x'); // Check for any number of negatives directly preceded by a *, /, + and remove them.
  // Aso need to check for situations such as -5+3 or x*(-4+3) Anything NOT preceded by an x?

  var negativeRemover = /(^|[^x])-+/g;
  func.replace(negativeRemover, '$1');
  var enhancedParanthesesRemover = /((a?(cos|sin|tan))|ln|log)\(/g;
  func.replace(enhancedParanthesesRemover, '(');
  console.log(func);
  return func;
}

function isValidFunction(func) {
  func += '$';
  var charStack = ['S'];
  var point = 0;
  var failed = false; // map["S"]["+"];

  while (point < func.length && !failed) {
    //  if (charStack.empty())
    //  {
    //      cout << "String not accepted\n"; //print string contents?
    //      break;
    //  }
    var currentElem = charStack.pop();

    while (!terminalList.includes(currentElem)) {
      if (map[currentElem][func[point]] === '!') {
        failed = true;
        break; // print error?
      }

      _toConsumableArray(map[currentElem][func[point]]).forEach(function (c) {
        return charStack.push(c);
      });

      if (!charStack.length) {
        // if the array is empty
        if (func[point] !== '$') {
          failed = true; // print error?
        }

        break;
      }

      currentElem = charStack.pop();
    }

    point++;
  }

  if (charStack.length || failed) {
    console.log('Char stack: ' + charStack);
    console.log('Remainng string characters: ' + func.substr(point));
  }

  console.log('Exiting validateProperFunction');
  return !charStack.length && !failed;
}

/* harmony default export */ __webpack_exports__["default"] = (validateProperFunction);

/***/ }),

/***/ "./client/webgl/drawGraph.js":
/*!***********************************!*\
  !*** ./client/webgl/drawGraph.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parser_equationParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parser/equationParser.js */ "./client/parser/equationParser.js");

/* eslint no-unused-vars: ["warn",{ "varsIgnorePattern": "graphFunction"}] */

/**
 * Code for a vertex shader. Contains attribute position that takes the position of the vertex.
 */

var vertexShaderSource = "\n    attribute vec4 position;\n\n    void main() {\n        gl_Position = position;\n    }\n";
/**
 * Code for a fragment shader. Colors the fragment purple.
 */

var purpleFragmentShaderSource = "\n    void main() {\n        gl_FragColor = vec4(0.5, 0.0, 0.5, 1.0);\n    }\n";
/**
 * Code for a fragment shader. Colors the fragment black. Intended specifically for shading axis fragments.
 */

var axisShader = "\n    void main() {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n    }\n";
/**
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 * @param {*} type The type of shader (should be either gl.VERTEX_SHADER or gl.FRAGMENT_SHADER)
 * @param {string} source The source code of the shader
 */

function makeShader(gl, type, source) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    shader = null;
  }

  return shader;
}
/**
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 * @param {string} vertexSource The source code for the vertex shader
 * @param {string} fragmentSource The source code for the fragment shader
 */


function makeProgram(gl, vertexSource, fragmentSource) {
  var vertexShader = makeShader(gl, gl.VERTEX_SHADER, vertexSource);
  var fragmentShader = makeShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    program = null;
  }

  return program;
}
/**
 *
 */


function draw(tree, drawWindow) {
  try {
    /** @type {WebGLRenderingContext} */
    var gl = drawWindow.getContext('webgl');
    drawWindow.width = drawWindow.clientWidth;
    drawWindow.height = drawWindow.clientHeight;
    gl.viewport(0, 0, drawWindow.width, drawWindow.height);
    gl.clearColor(1.0, 1.0, 1.0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    var axisBuffer = createAxises(gl);
    var tickMarkBuffer = createTickMarks(gl, 20, 20);
    var polynomialBuffer = createPolynomial(gl, tree);
    drawLines(gl, axisBuffer, axisShader);
    drawLines(gl, tickMarkBuffer, axisShader);
    drawLineStrip(gl, polynomialBuffer, purpleFragmentShaderSource);
  } catch (e) {
    console.error("Draw failed with drawWindow ".concat(drawWindow));
    console.error(e);
  }
}

function makeStaticDrawArrayBuffer(gl, verticeArray, numVertices) {
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticeArray), gl.STATIC_DRAW);
  var data = {
    buffer: buffer,
    numVertices: numVertices
  };
  return data;
}
/**
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 */


function createPolynomial(gl, tree) {
  console.log('Entering createPolynomial');
  var numVertices = 201;
  var verticeArray = [];

  for (var x = -100; x <= 100; x++) {
    var xi = x / 10;
    var yi = Object(_parser_equationParser_js__WEBPACK_IMPORTED_MODULE_0__["evaluateFunction"])(tree, xi);
    verticeArray.push(xi / 10, yi / 10, 0.0);
  }

  console.log('Exiting createPolynomial');
  return makeStaticDrawArrayBuffer(gl, verticeArray, numVertices);
}
/**
 * Creates 3D vertices to define x and y axises centered on the screen and adds them to a buffer. The vertices
 * should be drawn with gl.LINES.
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 *
 * @returns {*} An object containing the vertice buffer (as 'buffer') and the number of vertices in the buffer (as
 *  'numVertices').
 */


function createAxises(gl) {
  var numVertices = 4;
  var verticeArray = [-1, 0, 0, 1, 0, 0, 0, 1, 0, 0, -1, 0];
  return makeStaticDrawArrayBuffer(gl, verticeArray, numVertices);
}

function createTickMarks(gl, numX, numY) {
  var verticeArray = [];

  for (var i = 0; i < numX; i++) {
    verticeArray.push(2 / numX * i - 1, -0.02, 0, 2 / numX * i - 1, 0.02, 0);
  }

  for (var j = 0; j <= numY; j++) {
    verticeArray.push(-0.02, 2 / numY * j - 1, 0, 0.02, 2 / numY * j - 1, 0);
  }

  return makeStaticDrawArrayBuffer(gl, verticeArray, 2 * (numX + numY));
}
/**
 * Draws lines using the vertices contained in the data object
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 * @param {*} data JSON object holding the buffer and the number of vertices
 * @param {string} fragmentShaderSource The source code of the fragment shader
 */


function drawLines(gl, data, fragmentShaderSource) {
  var program = makeProgram(gl, vertexShaderSource, fragmentShaderSource);
  gl.bindBuffer(gl.ARRAY_BUFFER, data.buffer);
  var position = gl.getAttribLocation(program, 'position');
  gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(position);
  gl.useProgram(program);
  gl.drawArrays(gl.LINES, 0, data.numVertices);
}
/**
 * Draws triangles using the vertices contained in the data object
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 * @param {*} data JSON object holding the buffer and the number of vertices
 * @param {string} fragmentShaderSource The source code of the fragment shader
 */


function drawLineStrip(gl, data, fragmentShaderSource) {
  var program = makeProgram(gl, vertexShaderSource, fragmentShaderSource);
  gl.bindBuffer(gl.ARRAY_BUFFER, data.buffer);
  var position = gl.getAttribLocation(program, 'position');
  gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(position);
  gl.useProgram(program);
  gl.drawArrays(gl.LINE_STRIP, 0, data.numVertices);
}
/**
 * Called when the user clicks the graph function button. Processes and draws the function if it is valid.
 */


function graphFunction(func, drawWindow) {
  try {
    var tree = Object(_parser_equationParser_js__WEBPACK_IMPORTED_MODULE_0__["processFunction"])(func);

    if (tree !== null) {
      draw(tree, drawWindow);
    }
  } catch (e) {
    console.error("Graph function failed for ".concat(func, " with drawWindow ").concat(drawWindow));
    console.error(e);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (graphFunction);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9CdXR0b25HcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9FbnRyeUZpZWxkLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9HcmFwaC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhcnNlci9FeHByZXNzaW9uVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFyc2VyL1Rva2VuLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYXJzZXIvVG9rZW5MaXN0LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYXJzZXIvVG9rZW5UeXBlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYXJzZXIvVHJlZU5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhcnNlci9lcXVhdGlvblBhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFyc2VyL2ltcGxpY2l0LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYXJzZXIvcGFyc2VUcmVlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYXJzZXIvdG9rZW5pemVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYXJzZXIvdmFsaWRhdGVGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvd2ViZ2wvZHJhd0dyYXBoLmpzIl0sIm5hbWVzIjpbIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkJ1dHRvbiIsInByb3BzIiwib25jbGljayIsIm5hbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJlIiwicHJldmVudERlZmF1bHQiLCJCdXR0b25HcmlkIiwidGl0bGUiLCJjaGlsZHJlbiIsIm5vZGUiLCJDYWxjdWxhdG9yIiwiaGFuZGxlRXF1YXRpb25DaGFuZ2UiLCJiaW5kIiwic3RhdGUiLCJjdXJyZW50RXF1YXRpb24iLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiaGFuZGxlR3JhcGhDbGljayIsIkVudHJ5RmllbGQiLCJjdXJyZW50RW50cnkiLCJvbkVudHJ5Q2hhbmdlIiwiR3JhcGgiLCJjYW52YXNSZWYiLCJjcmVhdGVSZWYiLCJkcmF3R3JhcGgiLCJjdXJyZW50IiwiY2FudmFzIiwiRXhwcmVzc2lvblR5cGUiLCJPYmplY3QiLCJmcmVlemUiLCJFWFAiLCJNRVhQIiwiTkVYUCIsIkVFWFAiLCJQRVhQIiwiVG9rZW4iLCJ0b2tlbiIsIm5leHQiLCJwcmV2aW91cyIsInRva2VuVHlwZSIsIlRva2VuVHlwZSIsIlZBTFVFIiwiT1BFTl9QQVJBTlRIRVNFUyIsIkNMT1NFX1BBUkFOVEhFU0VTIiwiQURESVRJT04iLCJORUdBVElPTiIsIk1VTFRJUExJQ0FUSU9OIiwiUE9XRVIiLCJFX09QRU5fUEFSQU5USEVTRVMiLCJzdWJzdHIiLCJUb2tlbkxpc3QiLCJoZWFkIiwidGFpbCIsIlRyZWVOb2RlIiwibGVmdENoaWxkIiwicmlnaHRDaGlsZCIsInBhcmVudCIsInByb2Nlc3NGdW5jdGlvbiIsImltcGxpY2l0QWRkZWRGdW5jIiwicHJvY2Vzc0ltcGxpY2l0IiwidHJlZSIsImNyZWF0ZVBhcnNlVHJlZSIsImV2YWx1YXRlRnVuY3Rpb24iLCJ4IiwiTnVtYmVyIiwibnVtZXJhdG9yIiwiZGVub21pbmF0b3IiLCJ1bmRlZmluZWQiLCJJbmZpbml0eSIsIk1hdGgiLCJwb3ciLCJjb3MiLCJzaW4iLCJ0YW4iLCJhY29zIiwiYXNpbiIsImF0YW4iLCJsb2cxMCIsIkUiLCJQSSIsInJ1bkltcGxpY2l0RnVuY3Rpb25zIiwiaW5wdXQiLCJoYW5kbGVJbXBsaWNpdEFkZGl0aW9uIiwiaGFuZGxlSW1wbGljaXRNdWx0aXBsaWNhdGlvbiIsInJlbW92ZVdoaXRlc3BhY2UiLCJyZXBsYWNlIiwiY3JlYXRlUGFyc2VUcmVlTm9kZXMiLCJyb290IiwiZXhwcmVzc2lvblR5cGUiLCJzdGFydFRva2VuIiwiZW5kVG9rZW4iLCJhVG9rZW4iLCJmaW5kU3BsaXRUb2tlbiIsImNyZWF0ZUxlZnRDaGlsZCIsImNyZWF0ZVJpZ2h0Q2hpbGQiLCJtVG9rZW4iLCJlVG9rZW4iLCJmaW5kRUVYUFNwbGl0VG9rZW4iLCJ0b2tlbkxpc3QiLCJ0b2tlbml6ZSIsInByaW50UGFyc2VUcmVlIiwidG9rZW5SZXRyaWV2ZXIiLCJsZW5ndGgiLCJtYXRjaGVkU3RyaW5nIiwic2F2ZWRUb2tlbiIsImFkZCIsImVycm9yIiwiY3VycmVudFRva2VuIiwiY2xvc2VQYXJhbnRoZXNlcyIsInRlcm1pbmFsTGlzdCIsIm1hcCIsIlMiLCIkIiwiQSIsIlQiLCJCIiwiUiIsInZhbGlkYXRlUHJvcGVyRnVuY3Rpb24iLCJyZWdleENvbnZlcnQiLCJpbnZhbGlkQ2hhcmFjdGVycyIsInNlYXJjaCIsImlzVmFsaWRGdW5jdGlvbiIsIm51bWJlclJlbW92ZXIiLCJuZWdhdGl2ZVJlbW92ZXIiLCJlbmhhbmNlZFBhcmFudGhlc2VzUmVtb3ZlciIsImNoYXJTdGFjayIsInBvaW50IiwiZmFpbGVkIiwiY3VycmVudEVsZW0iLCJwb3AiLCJpbmNsdWRlcyIsImZvckVhY2giLCJjIiwicHVzaCIsInZlcnRleFNoYWRlclNvdXJjZSIsInB1cnBsZUZyYWdtZW50U2hhZGVyU291cmNlIiwiYXhpc1NoYWRlciIsIm1ha2VTaGFkZXIiLCJnbCIsInR5cGUiLCJzb3VyY2UiLCJzaGFkZXIiLCJjcmVhdGVTaGFkZXIiLCJzaGFkZXJTb3VyY2UiLCJjb21waWxlU2hhZGVyIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIiwiQ09NUElMRV9TVEFUVVMiLCJnZXRTaGFkZXJJbmZvTG9nIiwiZGVsZXRlU2hhZGVyIiwibWFrZVByb2dyYW0iLCJ2ZXJ0ZXhTb3VyY2UiLCJmcmFnbWVudFNvdXJjZSIsInZlcnRleFNoYWRlciIsIlZFUlRFWF9TSEFERVIiLCJmcmFnbWVudFNoYWRlciIsIkZSQUdNRU5UX1NIQURFUiIsInByb2dyYW0iLCJjcmVhdGVQcm9ncmFtIiwiYXR0YWNoU2hhZGVyIiwibGlua1Byb2dyYW0iLCJnZXRQcm9ncmFtUGFyYW1ldGVyIiwiTElOS19TVEFUVVMiLCJnZXRQcm9ncmFtSW5mb0xvZyIsImRlbGV0ZVByb2dyYW0iLCJkcmF3IiwiZHJhd1dpbmRvdyIsImdldENvbnRleHQiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwidmlld3BvcnQiLCJjbGVhckNvbG9yIiwiY2xlYXIiLCJDT0xPUl9CVUZGRVJfQklUIiwiREVQVEhfQlVGRkVSX0JJVCIsImF4aXNCdWZmZXIiLCJjcmVhdGVBeGlzZXMiLCJ0aWNrTWFya0J1ZmZlciIsImNyZWF0ZVRpY2tNYXJrcyIsInBvbHlub21pYWxCdWZmZXIiLCJjcmVhdGVQb2x5bm9taWFsIiwiZHJhd0xpbmVzIiwiZHJhd0xpbmVTdHJpcCIsIm1ha2VTdGF0aWNEcmF3QXJyYXlCdWZmZXIiLCJ2ZXJ0aWNlQXJyYXkiLCJudW1WZXJ0aWNlcyIsImJ1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsImJpbmRCdWZmZXIiLCJBUlJBWV9CVUZGRVIiLCJidWZmZXJEYXRhIiwiRmxvYXQzMkFycmF5IiwiU1RBVElDX0RSQVciLCJkYXRhIiwieGkiLCJ5aSIsIm51bVgiLCJudW1ZIiwiaSIsImoiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsInBvc2l0aW9uIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJ2ZXJ0ZXhBdHRyaWJQb2ludGVyIiwiRkxPQVQiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsInVzZVByb2dyYW0iLCJkcmF3QXJyYXlzIiwiTElO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QUMzRCxJQUFELENBQTVCOztBQUNBLFFBQUk4RCxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQndHLFVBQUksQ0FBQ3hHLElBQUQsRUFBT3lHLFVBQVAsQ0FBSjtBQUNEO0FBQ0YsR0FMRCxDQUtFLE9BQU9ySyxDQUFQLEVBQVU7QUFDVlksV0FBTyxDQUFDOEYsS0FBUixxQ0FBMkM1RyxJQUEzQyw4QkFBbUV1SyxVQUFuRTtBQUNBekosV0FBTyxDQUFDOEYsS0FBUixDQUFjMUcsQ0FBZDtBQUNEO0FBQ0Y7O0FBRWNtTiw0RUFBZixFIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9jbGllbnQvY2FsY3VsYXRvci5qc1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIExvYWQgUmVhY3QgbGlicmFyaWVzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuXG4vLyBMb2FkIGNvbXBvbmVudFxuaW1wb3J0IENhbGN1bGF0b3IgZnJvbSAnLi9jb21wb25lbnRzL0NhbGN1bGF0b3IuanN4J1xuXG4vLyBSZW5kZXJpbmcgdGhlIGNvbXBvbmVudCBpbnRvIHRoZSBwYWdlXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxDYWxjdWxhdG9yIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pXG4iLCIvLyAgICAgPGNhbnZhcyBpZD1cInNjcmVlblwiID48L2NhbnZhcz5cbi8vICAgICA8dGV4dGFyZWEgaWQ9XCJ1c2VyU3RyaW5nXCIgcm93cz1cIjVcIiBjb2xzPVwiODVcIj54PC90ZXh0YXJlYT48YnIvPlxuLy8gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9XCJncmFwaEZ1bmN0aW9uKClcIj5HcmFwaDwvYnV0dG9uPlxuLy8gICAgIDxkaXYgaWQ9XCJyZXN1bHRcIj48L2Rpdj48YnIvPlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25jbGlja30+e3RoaXMucHJvcHMubmFtZX08L2J1dHRvbj5cbiAgICApXG4gIH1cbn1cblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25jbGljazogUHJvcFR5cGVzLmZ1bmNcbn1cblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgbmFtZTogJycsXG4gIG9uY2xpY2s6IChlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIiwiLy8gICAgIDxjYW52YXMgaWQ9XCJzY3JlZW5cIiA+PC9jYW52YXM+XG4vLyAgICAgPHRleHRhcmVhIGlkPVwidXNlclN0cmluZ1wiIHJvd3M9XCI1XCIgY29scz1cIjg1XCI+eDwvdGV4dGFyZWE+PGJyLz5cbi8vICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPVwiZ3JhcGhGdW5jdGlvbigpXCI+R3JhcGg8L2J1dHRvbj5cbi8vICAgICA8ZGl2IGlkPVwicmVzdWx0XCI+PC9kaXY+PGJyLz5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jbGFzcyBCdXR0b25HcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj48L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuQnV0dG9uR3JpZC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn1cblxuQnV0dG9uR3JpZC5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiAnQmFubmVyIFRpdGxlJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25HcmlkXG4iLCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEdyYXBoIGZyb20gJy4vR3JhcGguanN4J1xuaW1wb3J0IEVudHJ5RmllbGQgZnJvbSAnLi9FbnRyeUZpZWxkLmpzeCdcbmltcG9ydCBCdXR0b25HcmlkIGZyb20gJy4vQnV0dG9uR3JpZC5qc3gnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uLmpzeCdcblxuY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5oYW5kbGVFcXVhdGlvbkNoYW5nZSA9IHRoaXMuaGFuZGxlRXF1YXRpb25DaGFuZ2UuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnRFcXVhdGlvbjogJ3gnXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRXF1YXRpb25DaGFuZ2UgKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50RXF1YXRpb246IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEdyYXBoIGN1cnJlbnRFcXVhdGlvbj17dGhpcy5zdGF0ZS5jdXJyZW50RXF1YXRpb259Lz5cbiAgICAgICAgPEVudHJ5RmllbGQgY3VycmVudEVudHJ5PXt0aGlzLnN0YXRlLmN1cnJlbnRFcXVhdGlvbn0gb25FbnRyeUNoYW5nZT17dGhpcy5oYW5kbGVFcXVhdGlvbkNoYW5nZX0gLz48YnIgLz5cbiAgICAgICAgPEJ1dHRvbkdyaWQgcm93cz17MX0gY29sdW1ucz17MX0gPlxuICAgICAgICAgIDxCdXR0b24gbmFtZT0nU3VibWl0JyBvbmNsaWNrPXt0aGlzLmhhbmRsZUdyYXBoQ2xpY2t9PjwvQnV0dG9uPlxuICAgICAgICA8L0J1dHRvbkdyaWQ+XG4gICAgICAgIDxCdXR0b25HcmlkPjwvQnV0dG9uR3JpZD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yXG4iLCIvLyAgICAgPGNhbnZhcyBpZD1cInNjcmVlblwiID48L2NhbnZhcz5cbi8vICAgICA8dGV4dGFyZWEgaWQ9XCJ1c2VyU3RyaW5nXCIgcm93cz1cIjVcIiBjb2xzPVwiODVcIj54PC90ZXh0YXJlYT48YnIvPlxuLy8gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9XCJncmFwaEZ1bmN0aW9uKClcIj5HcmFwaDwvYnV0dG9uPlxuLy8gICAgIDxkaXYgaWQ9XCJyZXN1bHRcIj48L2Rpdj48YnIvPlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIEVudHJ5RmllbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGV4dGFyZWEgcm93cz1cIjVcIiBjb2xzPVwiODVcIiB2YWx1ZT17dGhpcy5wcm9wcy5jdXJyZW50RW50cnl9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uRW50cnlDaGFuZ2V9PjwvdGV4dGFyZWE+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudHJ5RmllbGRcbiIsIi8vICAgICA8Y2FudmFzIGlkPVwic2NyZWVuXCIgPjwvY2FudmFzPlxuLy8gICAgIDx0ZXh0YXJlYSBpZD1cInVzZXJTdHJpbmdcIiByb3dzPVwiNVwiIGNvbHM9XCI4NVwiPng8L3RleHRhcmVhPjxici8+XG4vLyAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz1cImdyYXBoRnVuY3Rpb24oKVwiPkdyYXBoPC9idXR0b24+XG4vLyAgICAgPGRpdiBpZD1cInJlc3VsdFwiPjwvZGl2Pjxici8+XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBkcmF3R3JhcGggZnJvbSAnLi4vd2ViZ2wvZHJhd0dyYXBoLmpzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jbGFzcyBHcmFwaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuY2FudmFzUmVmID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgfVxuXG4gIC8vIGluaXRpYWwgZHJhd1xuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgZHJhd0dyYXBoKHRoaXMucHJvcHMuY3VycmVudEVxdWF0aW9uLCB0aGlzLmNhbnZhc1JlZi5jdXJyZW50KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBjYW52YXMgPSA8Y2FudmFzIHdpZHRoPXs1MDB9IGhlaWdodD17NTAwfSByZWY9eyB0aGlzLmNhbnZhc1JlZiB9PjwvY2FudmFzPlxuXG4gICAgaWYgKHRoaXMuY2FudmFzUmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgIGRyYXdHcmFwaCh0aGlzLnByb3BzLmN1cnJlbnRFcXVhdGlvbiwgdGhpcy5jYW52YXNSZWYuY3VycmVudClcbiAgICB9XG5cbiAgICByZXR1cm4gY2FudmFzXG4gIH1cbn1cblxuR3JhcGgucHJvcFR5cGVzID0ge1xuICBjdXJyZW50RXF1YXRpb246IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuR3JhcGguZGVmYXVsdFByb3BzID0ge1xuICBjdXJyZW50RXF1YXRpb246ICcnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmFwaFxuIiwiLyoqXG4gKiBFbnVtIHRvIGhvbGQgYW4gZXhwcmVzc2lvbiB0eXBlLiBVc2VkIGZvciB0dXJuaW5nIGEgZnVuY3Rpb24gc3RyaW5nIGludG8gYSB0cmVlLlxuICogQ2FuIGJlIEVYUCAoRXhwcmVzc2lvbiksIE1FWFAgKE11bHRpcGxpY2F0aW9uIEV4cHJlc3Npb24pLCBvciBQRVhQIChQYXJhbnRoZXNlcyBFeHByZXNzaW9uKS5cbiAqL1xuY29uc3QgRXhwcmVzc2lvblR5cGUgPSBPYmplY3QuZnJlZXplKHtcbiAgRVhQOiAxLFxuICBNRVhQOiAyLFxuICBORVhQOiAzLFxuICBFRVhQOiA0LFxuICBQRVhQOiA1XG59KVxuXG5leHBvcnQgZGVmYXVsdCBFeHByZXNzaW9uVHlwZVxuIiwiaW1wb3J0IFRva2VuVHlwZSBmcm9tICcuL1Rva2VuVHlwZS5qcydcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSB0b2tlbiBpbiBhIGZ1bmN0aW9uLiBTdXBwb3J0cyAoLCApLCArLCAtLCAqLCAvLiBFdmVyeXRoaW5nIGVsc2UgZGVmYXVsdHMgdG8gdmFsdWVzLlxuICogQ29udGFpbnMgcHJvcGVydGllcyBuZXh0LCBwcmV2aW91cywgdmFsdWUsIGFuZCB0b2tlblR5cGUuIFByZXZpb3VzIGFuZCBuZXh0IGFyZSB1c2VkIHRvIHBvaW50IHRvIHRoZSBuZXh0XG4gKiBhbmQgcHJldmlvdXMgdmFsdWVzIGluIGEgbGlzdCBvZiB0b2tlbnMsIHdoaWxlIHZhbHVlIGNvbnRhaW5zIHRoZSB0b2tlbiBkYXRhLiBUaGUgdG9rZW5UeXBlIGlzIGEgVG9rZW5UeXBlXG4gKiB2YXJpYWJsZSB0aGF0IGlzIHNldCB0byB0aGUgY29ycmVzcG9uZGluZyBUb2tlblR5cGUgdmFsdWUgZGVwZW5kaW5nIG9uIHRoZSB0b2tlbiB2YWx1ZS4gSXQgaXMgc2V0IHRvXG4gKiBUb2tlblR5cGUuVkFMVUUgYXMgYSBkZWZhdWx0LlxuICovXG5jbGFzcyBUb2tlbiB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBuZXh0IGFuZCBwcmV2aW91cyB0byBudWxsLCB2YWx1ZSB0byB0b2tlbiwgYW5kIHRva2VuVHlwZSB0byB0aGUgY29ycmVjdCBUb2tlblR5cGUgdmFsdWUgZm9yXG4gICAqIHRoZSB0b2tlbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRva2VuIFRoZSB0b2tlbiB0byBzZXQgdGhlIHZhbHVlIHByb3BlcnR5IHRvIGFuZCB0aGF0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSB0b2tlblR5cGUuXG4gICAqL1xuICBjb25zdHJ1Y3RvciAodG9rZW4pIHtcbiAgICB0aGlzLnZhbHVlID0gdG9rZW5cbiAgICB0aGlzLm5leHQgPSBudWxsXG4gICAgdGhpcy5wcmV2aW91cyA9IG51bGxcbiAgICB0aGlzLnRva2VuVHlwZSA9IFRva2VuVHlwZS5WQUxVRVxuXG4gICAgaWYgKHRva2VuID09PSAnKCcpIHtcbiAgICAgIHRoaXMudG9rZW5UeXBlID0gVG9rZW5UeXBlLk9QRU5fUEFSQU5USEVTRVNcbiAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnKScpIHtcbiAgICAgIHRoaXMudG9rZW5UeXBlID0gVG9rZW5UeXBlLkNMT1NFX1BBUkFOVEhFU0VTXG4gICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJysnKSB7XG4gICAgICB0aGlzLnRva2VuVHlwZSA9IFRva2VuVHlwZS5BRERJVElPTlxuICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICctJykge1xuICAgICAgdGhpcy50b2tlblR5cGUgPSBUb2tlblR5cGUuTkVHQVRJT05cbiAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnKicgfHwgdG9rZW4gPT09ICcvJykge1xuICAgICAgdGhpcy50b2tlblR5cGUgPSBUb2tlblR5cGUuTVVMVElQTElDQVRJT05cbiAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnXicpIHtcbiAgICAgIHRoaXMudG9rZW5UeXBlID0gVG9rZW5UeXBlLlBPV0VSXG4gICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ2NvcygnIHx8IHRva2VuID09PSAnc2luKCcgfHwgdG9rZW4gPT09ICd0YW4oJyB8fCB0b2tlbiA9PT0gJ2Fjb3MoJyB8fCB0b2tlbiA9PT0gJ2FzaW4oJyB8fFxuICAgICAgICAgICAgICAgIHRva2VuID09PSAnYXRhbignIHx8IHRva2VuID09PSAnbG9nKCcgfHwgdG9rZW4gPT09ICdsbignKSB7XG4gICAgICB0aGlzLnRva2VuVHlwZSA9IFRva2VuVHlwZS5FX09QRU5fUEFSQU5USEVTRVNcbiAgICAgIHRoaXMudmFsdWUgPSB0b2tlbi5zdWJzdHIoMCwgMilcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9rZW5cbiIsIi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgdG9rZW4gbGlzdCwgY29udGFpbmluZyBwcm9wZXJ0aWVzIGhvbGRpbmcgdGhlIGhlYWQgYW5kIHRoZSB0YWlsIGFuZCBhIGZ1bmN0aW9uIHRvXG4gKiBhZGQgYSBuZXcgdG9rZW4uIEVhY2ggdG9rZW4gaW4gdGhlIGxpc3QgbXVzdCBoYXZlIHByZXZpb3VzIGFuZCBuZXh0IHByb3BlcnRpZXMuXG4gKi9cbmNsYXNzIFRva2VuTGlzdCB7XG4gIC8qKlxuICAgICAqIEluaXRpdGlhbGl6ZXMgdGhlIGhlYWQgYW5kIHRhaWwgcHJvcGVydGllcyB0byBudWxsLlxuICAgICAqL1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5oZWFkID0gbnVsbFxuICAgIHRoaXMudGFpbCA9IG51bGxcbiAgfVxuXG4gIC8qKlxuICAgICAqIEFkZHMgYSB0b2tlbiB0byB0aGUgZW5kIG9mIHRoZSBUb2tlbkxpc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHRva2VuIEEgdG9rZW4gdG8gYWRkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuIE11c3QgY29udGFpbiBwcm9wZXJ0aWVzIG5leHQgYW5kIHByZXZpb3VzLlxuICAgICAqL1xuICBhZGQgKHRva2VuKSB7XG4gICAgaWYgKHRoaXMuaGVhZCA9PSBudWxsKSB7XG4gICAgICB0aGlzLmhlYWQgPSB0b2tlblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhaWwubmV4dCA9IHRva2VuXG4gICAgICB0b2tlbi5wcmV2aW91cyA9IHRoaXMudGFpbFxuICAgIH1cbiAgICB0aGlzLnRhaWwgPSB0b2tlblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRva2VuTGlzdFxuIiwiLyoqXG4gKiBFbnVtIHRvIGhvbGQgbWF0aGVtYXRpY2FsIHRva2VuIHR5cGVzLiBDYW4gYmUgT1BFTl9QQVJOVEhFU0VTLCBDTE9TRV9QQVJBTlRIRVNFUywgVkFMVUUsIEFERElUSU9OLCBvciBNVUxUSVBMSUNBVElPTi5cbiAqL1xuY29uc3QgVG9rZW5UeXBlID0gT2JqZWN0LmZyZWV6ZSh7XG4gIE9QRU5fUEFSQU5USEVTRVM6IDEsXG4gIENMT1NFX1BBUkFOVEhFU0VTOiAyLFxuICBWQUxVRTogMyxcbiAgQURESVRJT046IDQsXG4gIE1VTFRJUExJQ0FUSU9OOiA1LFxuICBORUdBVElPTjogNixcbiAgUE9XRVI6IDcsXG4gIEVfT1BFTl9QQVJBTlRIRVNFUzogOFxufSlcblxuZXhwb3J0IGRlZmF1bHQgVG9rZW5UeXBlXG4iLCIvKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIG5vZGUgb2YgYSBiaW5hcnkgdHJlZSB3aXRoIGEgdG9rZW4uIENvbnRhaW5zIHZhbHVlLCBsZWZ0Q2hpbGQsIHJpZ2h0Q2hpbGQsXG4gKiBhbmQgcGFyZW50IHByb3BlcnRpZXMsIGFzIHdlbGwgYXMgY3JlYXRlTGVmdENoaWxkIGFuZCBjcmVhdGVSaWdodENoaWxkIGZ1bmN0aW9ucy4gTGVmdCBjaGlsZCxcbiAqIHJpZ2h0IGNoaWxkLCBhbmQgcGFyZW50IHByb3BlcnRpZXMgYXJlIGF1dG9tYXRpY2FsbHkgc2V0IGFuZCBzaG91bGQgdXN1YWxseSBvbmx5IGJlIGdvdHRlbi5cbiAqL1xuY2xhc3MgVHJlZU5vZGUge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHZhbHVlLCBsZWZ0Q2hpbGQsIHJpZ2h0Q2hpbGQsIGFuZCBwYXJlbnQgdmFyaWFibGVzIHRvIG51bGwuXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy52YWx1ZSA9IG51bGxcbiAgICB0aGlzLmxlZnRDaGlsZCA9IG51bGxcbiAgICB0aGlzLnJpZ2h0Q2hpbGQgPSBudWxsXG4gICAgdGhpcy5wYXJlbnQgPSBudWxsXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyB0cmVlIG5vZGUgYW5kIGFzc2lnbnMgaXQgdG8gdGhlIGxlZnQgY2hpbGQgb2YgdGhpcyB0cmVlIG5vZGUuXG4gICAqIFNldHMgdGhlIG5ldyB0cmVlIG5vZGUncyBwYXJlbnQgdG8gdGhpcyB0cmVlIG5vZGUuXG4gICAqL1xuICBjcmVhdGVMZWZ0Q2hpbGQgKCkge1xuICAgIHRoaXMubGVmdENoaWxkID0gbmV3IFRyZWVOb2RlKClcbiAgICB0aGlzLmxlZnRDaGlsZC5wYXJlbnQgPSB0aGlzXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyB0cmVlIG5vZGUgYW5kIGFzc2lnbnMgaXQgdG8gdGhlIHJpZ2h0IGNoaWxkIG9mIHRoaXMgdHJlZSBub2RlLlxuICAgKiBTZXRzIHRoZSBuZXcgdHJlZSBub2RlJ3MgcGFyZW50IHRvIHRoaXMgdHJlZSBub2RlLlxuICAgKi9cbiAgY3JlYXRlUmlnaHRDaGlsZCAoKSB7XG4gICAgdGhpcy5yaWdodENoaWxkID0gbmV3IFRyZWVOb2RlKClcbiAgICB0aGlzLnJpZ2h0Q2hpbGQucGFyZW50ID0gdGhpc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWVOb2RlXG4iLCJpbXBvcnQgY3JlYXRlUGFyc2VUcmVlIGZyb20gJy4vcGFyc2VUcmVlLmpzJ1xuaW1wb3J0IHByb2Nlc3NJbXBsaWNpdCBmcm9tICcuL2ltcGxpY2l0LmpzJ1xuaW1wb3J0IHZhbGlkYXRlRnVuY3Rpb24gZnJvbSAnLi92YWxpZGF0ZUZ1bmN0aW9uLmpzJ1xuXG4vKipcbiAqIFByb2Nlc3NlcyBhIHN0cmluZyBjb250YWluaW5nIGEgZnVuY3Rpb24uIFJlbW92ZXMgd2hpdGVzcGFjZSwgaGFuZGxlcyBpbXBsaWNpdCBtdWx0aXBsaWNhdGlvbiwgY2hlY2tzXG4gKiB0aGF0IHRoZSBmdW5jdGlvbiBpcyB2YWxpZCwgYW5kIGNvbnZlcnRzIGl0IGludG8gYSBmdW5jdGlvbiBwYXJzZSB0cmVlIHRoYXQgaXMgcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKlxuICogQHJldHVybnMge1RyZWVOb2RlfSBUaGUgcGFyc2UgdHJlZSByZXByZXNlbnRpbmcgdGhlIGZ1bmN0aW9uIHRoYXQgd2FzIGNyZWF0ZWQuIFJldHVybnMgbnVsbCBpZiB0aGVcbiAqICBmdW5jdGlvbiB3YXMgaW52YWxpZC5cbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc0Z1bmN0aW9uIChmdW5jKSB7XG4gIGNvbnNvbGUubG9nKCdFbnRlcmluZyBwcm9jZXNzRnVuY3Rpb24nKVxuICB0cnkge1xuICAgIGNvbnN0IGltcGxpY2l0QWRkZWRGdW5jID0gcHJvY2Vzc0ltcGxpY2l0KGZ1bmMpXG5cbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JykuaW5uZXJIVE1MID0gaW1wbGljaXRBZGRlZEZ1bmNcblxuICAgIGxldCB0cmVlID0gbnVsbFxuXG4gICAgLy8gICBpZiAodmFsaWRhdGVGdW5jdGlvbihpbXBsaWNpdEFkZGVkRnVuYykpIHtcbiAgICAvLyAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBmdW5jdGlvbiEnKVxuICAgIC8vICAgfSBlbHNlIHtcbiAgICB0cmVlID0gY3JlYXRlUGFyc2VUcmVlKGltcGxpY2l0QWRkZWRGdW5jKVxuXG4gICAgY29uc29sZS5sb2coZXZhbHVhdGVGdW5jdGlvbih0cmVlLCAxKSlcbiAgICAvLyAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdFeGl0aW5nIHByb2Nlc3NGdW5jdGlvbicpXG4gICAgcmV0dXJuIHRyZWVcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGBQcm9jZXNzIGZ1bmN0aW9uIGZhaWxlZCBmb3IgJHtmdW5jfWApXG4gICAgY29uc29sZS5sb2coZSlcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIC8vIGNvbnZlcnQgdG8gbG93ZXJjYXNlPyBEZXBlbmRzIG9uIGlmIHdlIHJlcGxhY2UgdGhpbmdzIGxpa2UgY29zKCkgd2l0aCBzb21lIHRlbXBvcmFyeSB2YXJcbn1cblxuLyoqXG4gKiBFdmFsdWF0ZXMgdGhlIHZhbHVlIG9mIGEgZnVuY3Rpb24gaW4gdHJlZSBmb3JtIGF0IHRoZSBwb2ludCB4LiBIYW5kbGVzICssIC0sICosIC8sICgsICksIHgsIGFuZCBudW1iZXJzLlxuICpcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHRyZWUgVGhlIHJvb3Qgbm9kZSBvZiB0aGUgZnVuY3Rpb24gcGFyc2UgdHJlZSB0byBldmFsdWF0ZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFRoZSB2YWx1ZSBvZiB0aGUgdmFyaWFibGUgeCBpbiB0aGUgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IGYoeCkgKHRoZSBhbnN3ZXIgdG8gdGhlIGZ1bmN0aW9uIGF0IHgpLlxuICovXG5mdW5jdGlvbiBldmFsdWF0ZUZ1bmN0aW9uICh0cmVlLCB4KSB7XG4gIC8vIFNob3VsZCBtYWtlIHRoaXMgaW50byBhIHN3aXRjaFxuICBpZiAodHJlZS52YWx1ZSA9PT0gJyonKSB7XG4gICAgcmV0dXJuIE51bWJlcihldmFsdWF0ZUZ1bmN0aW9uKHRyZWUubGVmdENoaWxkLCB4KSkgKiBOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLnJpZ2h0Q2hpbGQsIHgpKVxuICB9IGVsc2UgaWYgKHRyZWUudmFsdWUgPT09ICcvJykge1xuICAgIGNvbnN0IG51bWVyYXRvciA9IE51bWJlcihldmFsdWF0ZUZ1bmN0aW9uKHRyZWUubGVmdENoaWxkLCB4KSlcbiAgICBjb25zdCBkZW5vbWluYXRvciA9IE51bWJlcihldmFsdWF0ZUZ1bmN0aW9uKHRyZWUucmlnaHRDaGlsZCwgeCkpXG4gICAgaWYgKGRlbm9taW5hdG9yID09PSAwKSB7XG4gICAgICBpZiAobnVtZXJhdG9yID09PSAwKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICAgIHJldHVybiBJbmZpbml0eSAqIG51bWVyYXRvclxuICAgIH1cbiAgICByZXR1cm4gbnVtZXJhdG9yIC8gZGVub21pbmF0b3JcbiAgfSBlbHNlIGlmICh0cmVlLnZhbHVlID09PSAnKycpIHtcbiAgICByZXR1cm4gTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5sZWZ0Q2hpbGQsIHgpKSArIE51bWJlcihldmFsdWF0ZUZ1bmN0aW9uKHRyZWUucmlnaHRDaGlsZCwgeCkpXG4gIH0gZWxzZSBpZiAodHJlZS52YWx1ZSA9PT0gJy0nKSB7XG4gICAgcmV0dXJuIC0xICogTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5yaWdodENoaWxkLCB4KSkgLy8gTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5sZWZ0Q2hpbGQsIHgpKVxuICB9IGVsc2UgaWYgKHRyZWUudmFsdWUgPT09ICdeJykge1xuICAgIHJldHVybiBNYXRoLnBvdyhOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLmxlZnRDaGlsZCwgeCkpLCBOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLnJpZ2h0Q2hpbGQsIHgpKSlcbiAgfSBlbHNlIGlmICh0cmVlLnZhbHVlID09PSAnY28nKSB7XG4gICAgcmV0dXJuIE1hdGguY29zKE51bWJlcihldmFsdWF0ZUZ1bmN0aW9uKHRyZWUucmlnaHRDaGlsZCwgeCkpKVxuICB9IGVsc2UgaWYgKHRyZWUudmFsdWUgPT09ICdzaScpIHtcbiAgICByZXR1cm4gTWF0aC5zaW4oTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5yaWdodENoaWxkLCB4KSkpXG4gIH0gZWxzZSBpZiAodHJlZS52YWx1ZSA9PT0gJ3RhJykge1xuICAgIHJldHVybiBNYXRoLnRhbihOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLnJpZ2h0Q2hpbGQsIHgpKSlcbiAgfSBlbHNlIGlmICh0cmVlLnZhbHVlID09PSAnYWMnKSB7XG4gICAgcmV0dXJuIE1hdGguYWNvcyhOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLnJpZ2h0Q2hpbGQsIHgpKSlcbiAgfSBlbHNlIGlmICh0cmVlLnZhbHVlID09PSAnYXMnKSB7XG4gICAgcmV0dXJuIE1hdGguYXNpbihOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLnJpZ2h0Q2hpbGQsIHgpKSlcbiAgfSBlbHNlIGlmICh0cmVlLnZhbHVlID09PSAnYXQnKSB7XG4gICAgcmV0dXJuIE1hdGguYXRhbihOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLnJpZ2h0Q2hpbGQsIHgpKSlcbiAgfSBlbHNlIGlmICh0cmVlLnZhbHVlID09PSAnbG4nKSB7XG4gICAgcmV0dXJuIE1hdGgubG9nKE51bWJlcihldmFsdWF0ZUZ1bmN0aW9uKHRyZWUucmlnaHRDaGlsZCwgeCkpKVxuICB9IGVsc2UgaWYgKHRyZWUudmFsdWUgPT09ICdsbycpIHtcbiAgICByZXR1cm4gTWF0aC5sb2cxMChOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLnJpZ2h0Q2hpbGQsIHgpKSlcbiAgfSBlbHNlIHtcbiAgICBpZiAodHJlZS52YWx1ZSA9PT0gJ3gnKSB7XG4gICAgICByZXR1cm4geFxuICAgIH0gZWxzZSBpZiAodHJlZS52YWx1ZSA9PT0gJ2UnKSB7XG4gICAgICByZXR1cm4gTWF0aC5FXG4gICAgfSBlbHNlIGlmICh0cmVlLnZhbHVlID09PSAncGknKSB7XG4gICAgICByZXR1cm4gTWF0aC5QSVxuICAgIH1cblxuICAgIHJldHVybiB0cmVlLnZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgcHJvY2Vzc0Z1bmN0aW9uLFxuICBldmFsdWF0ZUZ1bmN0aW9uXG59XG4vLyBORVhUIFNURVBTOlxuLy8gUmVkbyBkb2N1bWVudGF0aW9uIGZvciBuZWdhdGl2ZSBudW1iZXJzIGFuZCBwb3dlcnNcbi8vIEltcGxlbWVudCBwb3dlcnMgaW50byB2YWxpZGF0ZVByb3BlckZ1bmN0aW9uXG4vLyBXcml0ZSBkb2N1bWVudGF0aW9uIGZvciB2YWxpZGF0ZVByb3BlckZ1bmN0aW9uXG4vLyBJbXBsZW1lbnQgbW9yZSB0cmlnb25vbWV0cnlcbi8vIEltcGxlbWVudCAubnVtYmVyXG4vLyBFbmhhbmNlIGdyYXBoaW5nIHdoZW4gZmFyIGVub3VnaCBpbiBjbGFzc1xuLy8gSW1wbGVtZW50IGFic29sdXRlIHZhbHVlXG4vLyBJbXBsZW1lbnQgZmxvb3IgYW5kIGNlaWxpbmc/XG4vLyBJbXBsZW1lbnQgaHlwZXJib2xpY3M/XG4vLyBJbXBsZW1lbnQgc3FydD9cbiIsIi8qKlxuICogUnVucyB0aGUgb3RoZXIgZnVuY3Rpb25zIGluIGltcGxpY2l0LmpzIG9uIGEgc3RyaW5nLiBSZW1vdmVzIHdoaXRlc3BhY2UgYW5kIHRoZW4gYWRkcyBhZGRpdGlvbi9tdWx0aXBsaWNhdGlvbiBzeW1ib2xzXG4gKiB3aGVyZXZlciBpbXBsaWNpdCBhZGRpdGlvbi9tdWx0aXBsaWNhdGlvbiBvY2N1cnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IFRoZSBzdHJpbmcgdG8gcHJvY2Vzc1xuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBwcm9jZXNzZWQgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIHJ1bkltcGxpY2l0RnVuY3Rpb25zIChpbnB1dCkge1xuICByZXR1cm4gaGFuZGxlSW1wbGljaXRBZGRpdGlvbihoYW5kbGVJbXBsaWNpdE11bHRpcGxpY2F0aW9uKHJlbW92ZVdoaXRlc3BhY2UoaW5wdXQpKSlcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCB3aGl0ZXNwYWNlIGZyb20gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IFRoZSBzdHJpbmcgdG8gcmVtb3ZlIHdoaXRlc3BhY2UgZnJvbS5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc3RyaW5nIHdpdGggYWxsIHdoaXRlc3BhY2UgcmVtb3ZlZC5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlV2hpdGVzcGFjZSAoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xccysvZywgJycpXG59XG5cbi8qKlxuICogQWRkcyBtdWx0aXBsaWNhdGlvbiBzeW1ib2xzIHRvIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSBmdW5jdGlvbiB3aGVyZXZlciBpbXBsaWNpdCBtdWx0aXBsaWNhdGlvbiBvY2N1cnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZ1bmMgQSBmdW5jdGlvbiAod2l0aCBubyB3aGl0ZXNwYWNlKSB0byBhZGQgbXVsdGlwbGljYXRpb24gc3ltYm9scyB0by5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZnVuY3Rpb24gd2l0aCBtdWx0aXBsaWNhdGlvbiBzeW1ib2xzIGFkZGVkIHdoZXJldmVyIGltcGxpY2l0IG11bHRpcGxpY2F0aW9uIG9jY3VyZWQuXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZUltcGxpY2l0TXVsdGlwbGljYXRpb24gKGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmMucmVwbGFjZSgvKFxcKXx4fHBpfGV8XFxkKD89XFxEKSkoPz1cXCh8eHxcXGR8Y3xzfHR8YXxwfGV8bCkvZywgJyQxKicpXG59XG5cbi8qKlxuICogQWRkcyBhZGRpdGlvbiBzeW1ib2xzIHRvIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSBmdW5jdGlvbiB3aGVyZXZlciBcImltcGxpY2l0IGFkZGl0aW9uXCIgb2NjdXJzLiBcIkltcGxpY2l0IGFkZGl0aW9uXCIgaXNcbiAqIGRlZmluZWQgYXMgc3VidHJhY3Rpb24gb2YgYW4gZXhwcmVzc2lvbiwgd2hlcmUgd2hhdCBpcyBoYXBwZW5pbmcgaXMgYWRkaXRpb24gb2YgYSBuZWdhdGl2ZSBleHByZXNzaW9uLlxuICogRXg6IDEwLTMgd2lsbCBiZSByZXdyaXR0ZW4gYXMgMTArLTMgYW5kICh4KzEwKS0oeCszKSB3aWxsIGJlIHJld3JpdHRlbiBhcyAoeCsxMCkrLSh4KzMpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmdW5jIEEgZnVuY3Rpb24gKHdpdGggbm8gd2hpdGVzcGFjZSkgdG8gYWRkIGFkZGl0aW9uIHN5bWJvbHMgdG8uXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZ1bmN0aW9uIHdpdGggYWRkaXRpb24gc3ltYm9scyBhZGRlZCB3aGVyZXZlciBpbXBsaWNpdCBhZGRpdGlvbiBvY2N1cmVkLlxuICovXG5mdW5jdGlvbiBoYW5kbGVJbXBsaWNpdEFkZGl0aW9uIChmdW5jKSB7XG4gIHJldHVybiBmdW5jLnJlcGxhY2UoLyhbXlxcLSgqLyteXSktL2csICckMSstJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgcnVuSW1wbGljaXRGdW5jdGlvbnNcbiIsImltcG9ydCB7IHRva2VuaXplLCBmaW5kRUVYUFNwbGl0VG9rZW4sIGZpbmRTcGxpdFRva2VuIH0gZnJvbSAnLi90b2tlbml6ZXIuanMnXG5pbXBvcnQgRXhwcmVzc2lvblR5cGUgZnJvbSAnLi9FeHByZXNzaW9uVHlwZS5qcydcbmltcG9ydCBUb2tlblR5cGUgZnJvbSAnLi9Ub2tlblR5cGUuanMnXG5pbXBvcnQgVHJlZU5vZGUgZnJvbSAnLi9UcmVlTm9kZS5qcydcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2UgdHJlZSBmb3IgYSB0b2tlbml6ZWQgZnVuY3Rpb24uIEl0IHNob3VsZCBiZSByZWFkIGZyb20gdGhlIGJvdHRvbS1sZWZ0IHRvIHRoZSB0b3AtcmlnaHQuXG4gKlxuICogQHBhcmFtIHtUcmVlTm9kZX0gcm9vdCBUaGUgcm9vdCBvZiB0aGUgdHJlZSB0byBhZGQgdGhlIG5vZGVzIHRvLlxuICogQHBhcmFtIHtFeHByZXNzaW9uVHlwZX0gZXhwcmVzc2lvblR5cGUgVGhlIHR5cGUgb2YgZXhwcmVzc2lvbi4gVXN1YWxseSBFeHByZXNzaW9uVHlwZS5FWFAuXG4gKiBAcGFyYW0ge1Rva2VufSBzdGFydCBUaGUgZmlyc3QgdG9rZW4gaW4gdGhlIHRva2VuIGxpc3QgdG8gcGFyc2UuIFNob3VsZCBwcm9iYWJseSBiZSBUb2tlbkxpc3QuaGVhZC5cbiAqIEBwYXJhbSB7VG9rZW59IGVuZCBUaGUgZmluYWwgdG9rZW4gaW4gdGhlIHRva2VuIGxpc3QgdG8gcGFyc2UuIFNob3VsZCBwcm9iYWJseSBiZSBUb2tlbkxpc3QudGFpbC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUGFyc2VUcmVlTm9kZXMgKHJvb3QsIGV4cHJlc3Npb25UeXBlLCBzdGFydFRva2VuLCBlbmRUb2tlbikge1xuICAvKlxuICAgIEFsZ29yaXRobSBpbmZvcm1hdGlvbjpcblxuICAgIFRoaXMgYWxnb3JpdGhtIHJlbGllcyBvbiB0aGUgZm9sbG93aW5nIEJhY2t1cy1OYXVyIGZvcm0gKEJORikgY29udGV4dCBmcmVlIGdyYW1tYXI6XG4gICAgPEVYUD4gOjo9IDxFWFA+KzxNRVhQPiB8IDxFWFA+LTxNRVhQPiB8IDxNRVhQPlxuICAgIDxNRVhQPiA6Oj0gPE1FWFA+KjxQRVhQPiB8IDxNRVhQPi88UEVYUD4gfCA8UEVYUD5cbiAgICA8UEVYUD4gOjo9ICg8RVhQPikgfCA8TlVNQkVSPlxuICAgIDxOVU1CRVI+IDo6PSBhbnkgbnVtYmVyIG9yIHZhcmlhYmxlXG4gICAgTm90ZTogRVhQIHN0YW5kcyBmb3IgZXhwcmVzc2lvbiwgTUVYUCBzdGFuZHMgZm9yIG11bHRpcGxpY2F0aW9uIGV4cHJlc3Npb24sIGFuZCA8UEVYUD4gc3RhbmRzXG4gICAgZm9yIHBhcmFudGhlc2VzIGV4cHJlc3Npb24uXG5cbiAgICBJdCBpbXBsZW1lbnRzIHRoaXMgYnkgc3RhcnRpbmcgd2l0aCBhbiA8RVhQPiwgYW5kIHNlYXJjaGluZyB0aGUgdG9rZW4gbGlzdCBmb3IgdGhlIGxhc3Qgb2NjdXJlbmNlXG4gICAgd2hlcmUgdGhlIHBhcmFudGhlc2VzIGFyZSBiYWxhbmNlZCBhbmQgYSArIG9yIC0gY2hhcmFjdGVyIGlzIGZvdW5kIChJZiB0aGlzIGRvZXMgbm90IG9jY3VyLCBpdFxuICAgIHN3aXRjaGVzIHRvIGEgPE1FWFA+IGV4cHJlc3Npb24gYW5kIGxvb3BzKS4gTmV4dCwgaXQgc2V0cyB0aGUgY2hhcmFjdGVyIG9mIHRoZSBjdXJyZW50IG5vZGUgdG8gdGhpc1xuICAgIGNoYXJhY3RlciBhbmQgcmVjdXJzaXZlbHkgY2FsbHMgdGhlIGZ1bmN0aW9uIG9uIHRoZSBsZWZ0IGFuZCByaWdodCBwb3J0aW9ucyBvZiB0aGUgdG9rZW4gbGlzdCB1c2luZ1xuICAgIHRoZSBsZWZ0IChFWFApIGFuZCByaWdodCAoTUVYUCkgY2hpbGRyZW4gYXMgdGhlIHJvb3RzLiBFYWNoIDxFWFA+IHRva2VuIHJlcGVhdHMgdGhpcyBwcm9jZXNzLiBBXG4gICAgPE1FWFA+IGV4cHJlc2lvbiBzZWFyY2hlcyB0aGUgdG9rZW4gbGlzdCBmb3IgdGhlIGxhc3Qgb2NjdXJlbmNlIHdoZXJlIHRoZSBwYXJhbnRoZXNlcyBhcmUgYmFsYW5jZWRcbiAgICBhbmQgYSAqIG9yIC8gY2hhcmFjdGVyIGlzIGZvdW5kIChJZiB0aGlzIGRvZXMgbm90IG9jY3VyLCBpdCBzd2l0Y2hlcyB0byBhIDxQRVhQPiBleHByZXNzaW9uIGFuZFxuICAgIGxvb3BzKS4gTmV4dCwgaXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGN1cnJlbnQgbm9kZSB0byB0aGlzIFwic3BsaXRcIiB0b2tlbiBhbmQgcmVjdXJzaXZlbHkgY2FsbHMgdGhlXG4gICAgZnVuY3Rpb24gb24gdGhlIGxlZnQgYW5kIHJpZ2h0IHBvcnRpb25zIG9mIHRoZSB0b2tlbiBsaXN0IHVzaW5nIHRoZSBsZWZ0IChNRVhQKSBhbmQgcmlnaHQgKFBFWFApLFxuICAgIGNoaWxkcmVuIGFzIHRoZSByb290cy4gRm9yIGEgPFBFWFA+IGV4cHJlc3Npb24sIGl0IGNoZWNrcyB3aGV0aGVyIGl0IGlzIGVuY2xvc2VkIGJ5IHBhcmFudGhlc2VzLiBJZlxuICAgIGl0IGlzLCBpdCByZW1vdmVzIHRob3NlIHBhcmFudGhlc2VzIGZyb20gdGhlIHRva2VuIGxpc3RhbmQgbG9vcHMgYmFjayB0byBhbiA8RVhQPiBleHByZXNzaW9uLlxuICAgIE90aGVyd2lzZSwgdGhlcmUgY2FuIG9ubHkgYmUgb25lIHRva2VuIGxlZnQgaW4gdGhlIGxpc3QgYW5kIGl0IHNldHMgdGhlIHZhbHVlb2YgdGUgY3VycmVudCBub2RlIHRvXG4gICAgdGhpcyB0b2tlbi5cblxuICAgIFRoaXMgd29ya3MgYmVjYXVzZSBmb3IgYW4gPEVYUD4gZXhwcmVzc2lvbiwgdGhlIHJpZ2h0IHNpZGUgaXMgb25seSBhIDxNRVhQPiBleHByZXNzaW9uIGlmIGl0IGNvbnRhaW5zXG4gICAgTk8gKyBvciAtIHRva2VuIHdpdGggYmFsYW5jZWQgcGFyYW50aGVzZXMsIGJ1dCB3ZSBtdXN0IHNlYXJjaCB1bnRpbCB3ZSBmaW5kIG9uZSB0byBtZWV0IHRoZVxuICAgIHJlcXVpcmVtZW50ICh1bmxlc3Mgbm8gdG9rZW4gZG9lcywgaW4gd2hpY2ggY2FzZSB3ZSBqdXN0IHN3aXRjaCB0byBhIDxNRVhQPiBleHByZXNzaW9uLCBiYXNpY2FsbHlcbiAgICBkb2luZyB0aGUgZXF1aXZhbGVudCBvZiBpZ25vcmluZyB0aGUgbGVmdCBzaWRlKS4gVGhlIHNhbWUgaWRlYSBob2xkcyBmb3IgYSA8TUVYUD4gZXhwcmVzc2lvbi4gRm9yXG4gICAgYSA8UEVYUD4gZXhwcmVzc2lvbiwgd2Uga25vdyB0aGF0IHRoZXJlIGFyZSBubyArLCAtLCAqLCBvciAvIHN5bWJvbHMgb3V0c2lkZSBwYXJhbnRoZXNlcyBieSB0aGVcbiAgICBwcmV2aW91cyB0d28gcGFydHMuIFRodXMsIGVpdGhlciB3ZSBoYXZlIGEgc2luZ2xlIGNoYXJhY3RlciBvciBzb21lIGV4cHJlc3Npb24gc3Vycm91bmRlZCBieVxuICAgIHBhcmFudGhlc2VzLlxuICAqL1xuXG4gIC8vIEl0ZXJhdGUgd2hpbGUgd2UgaGF2ZSBub3Qgc2V0IHRoZSByb290IHZhbHVlLlxuICB3aGlsZSAocm9vdC52YWx1ZSA9PSBudWxsKSB7XG4gICAgaWYgKGV4cHJlc3Npb25UeXBlID09PSBFeHByZXNzaW9uVHlwZS5FWFApIHtcbiAgICAgIC8vIFNlYXJjaCBmb3IgYSArIG9yIC0gdG9rZW4gd2l0aCBiYWxhbmNlZCBwYXJhbnRoZXNlcy5cbiAgICAgIGNvbnN0IGFUb2tlbiA9IGZpbmRTcGxpdFRva2VuKGV4cHJlc3Npb25UeXBlLCBzdGFydFRva2VuLCBlbmRUb2tlbilcbiAgICAgIC8vIElmIG5vIHN1Y2ggdG9rZW4gd2FzIGZvdW5kLCBzd2l0Y2ggdG8gYSBNRVhQIGV4cHJlc3Npb24gYW5kIGxvb3AgYWdhaW4gKHRoaXMgaGVscHMgdG8ga2VlcFxuICAgICAgLy8gdW5uZWNjZXNzYXJ5IG5vZGVzIGZyb20gYnVpbGRpbmcgdXAgd2hpY2ggd291bGQgaGFwcGVuIHdpdGggYSByZWN1cnNpdmUgY2FsbCBpbiB0aGlzIHNpdHVhdGlvbikuXG4gICAgICBpZiAoYVRva2VuID09IG51bGwpIHtcbiAgICAgICAgZXhwcmVzc2lvblR5cGUgPSBFeHByZXNzaW9uVHlwZS5NRVhQXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZWN1cnNpdmVseSByZXBlYXQgdGhpcyBwcm9jZXNzIGZvciB0aGUgbGVmdCBhbmQgcmlnaHQgY2hpbGRyZW4gYW5kIHNldCB0aGUgdG9rZW4gdG8gdGhlIHNwbGl0IHRva2VuLlxuICAgICAgICByb290LmNyZWF0ZUxlZnRDaGlsZCgpXG4gICAgICAgIHJvb3QuY3JlYXRlUmlnaHRDaGlsZCgpXG4gICAgICAgIGNyZWF0ZVBhcnNlVHJlZU5vZGVzKHJvb3QubGVmdENoaWxkLCBFeHByZXNzaW9uVHlwZS5FWFAsIHN0YXJ0VG9rZW4sIGFUb2tlbi5wcmV2aW91cylcbiAgICAgICAgY3JlYXRlUGFyc2VUcmVlTm9kZXMocm9vdC5yaWdodENoaWxkLCBFeHByZXNzaW9uVHlwZS5NRVhQLCBhVG9rZW4ubmV4dCwgZW5kVG9rZW4pXG4gICAgICAgIHJvb3QudmFsdWUgPSBhVG9rZW4udmFsdWVcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChleHByZXNzaW9uVHlwZSA9PT0gRXhwcmVzc2lvblR5cGUuTUVYUCkge1xuICAgICAgLy8gU2VhcmNoIGZvciBhICogb3IgLyB0b2tlbiB3aXRoIGJhbGFuY2VkIHBhcmFudGhlc2VzXG4gICAgICBjb25zdCBtVG9rZW4gPSBmaW5kU3BsaXRUb2tlbihleHByZXNzaW9uVHlwZSwgc3RhcnRUb2tlbiwgZW5kVG9rZW4pXG4gICAgICAvLyBJZiBubyBzdWNoIHRva2VuIHdhcyBmb3VuZCwgc3dpdGNoIHRvIGEgUEVYUCBleHByZXNzaW9uIGFuZCBsb29wIGFnYWluICh0aGlzIGhlbHBzIHRvIGtlZXBcbiAgICAgIC8vIHVubmVjY2Vzc2FyeSBub2RlcyBmcm9tIGJ1aWxkaW5nIHVwIHdoaWNoIHdvdWxkIGhhcHBlbiB3aXRoIGEgcmVjdXJzaXZlIGNhbGwgaW4gdGhpcyBzaXR1YXRpb24pLlxuICAgICAgaWYgKG1Ub2tlbiA9PSBudWxsKSB7XG4gICAgICAgIGV4cHJlc3Npb25UeXBlID0gRXhwcmVzc2lvblR5cGUuTkVYUFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgcmVwZWF0IHRoaXMgcHJvY2VzcyBmb3IgdGhlIGxlZnQgYW5kIHJpZ2h0IGNoaWxkcmVuIGFuZCBzZXQgdGhlIHRva2VuIHRvIHRoZSBzcGxpdCB0b2tlbi5cbiAgICAgICAgcm9vdC5jcmVhdGVMZWZ0Q2hpbGQoKVxuICAgICAgICByb290LmNyZWF0ZVJpZ2h0Q2hpbGQoKVxuICAgICAgICBjcmVhdGVQYXJzZVRyZWVOb2Rlcyhyb290LmxlZnRDaGlsZCwgRXhwcmVzc2lvblR5cGUuTUVYUCwgc3RhcnRUb2tlbiwgbVRva2VuLnByZXZpb3VzKVxuICAgICAgICBjcmVhdGVQYXJzZVRyZWVOb2Rlcyhyb290LnJpZ2h0Q2hpbGQsIEV4cHJlc3Npb25UeXBlLk5FWFAsIG1Ub2tlbi5uZXh0LCBlbmRUb2tlbilcbiAgICAgICAgcm9vdC52YWx1ZSA9IG1Ub2tlbi52YWx1ZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGV4cHJlc3Npb25UeXBlID09PSBFeHByZXNzaW9uVHlwZS5ORVhQKSB7XG4gICAgICBpZiAoc3RhcnRUb2tlbi50b2tlblR5cGUgPT09IFRva2VuVHlwZS5ORUdBVElPTikge1xuICAgICAgICByb290LnZhbHVlID0gc3RhcnRUb2tlbi52YWx1ZVxuICAgICAgICByb290LmNyZWF0ZVJpZ2h0Q2hpbGQoKVxuICAgICAgICBjcmVhdGVQYXJzZVRyZWVOb2Rlcyhyb290LnJpZ2h0Q2hpbGQsIEV4cHJlc3Npb25UeXBlLk5FWFAsIHN0YXJ0VG9rZW4ubmV4dCwgZW5kVG9rZW4pXG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhwcmVzc2lvblR5cGUgPSBFeHByZXNzaW9uVHlwZS5FRVhQXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChleHByZXNzaW9uVHlwZSA9PT0gRXhwcmVzc2lvblR5cGUuRUVYUCkge1xuICAgICAgY29uc3QgZVRva2VuID0gZmluZEVFWFBTcGxpdFRva2VuKHN0YXJ0VG9rZW4sIGVuZFRva2VuKVxuICAgICAgaWYgKGVUb2tlbiA9PSBudWxsKSB7XG4gICAgICAgIGV4cHJlc3Npb25UeXBlID0gRXhwcmVzc2lvblR5cGUuUEVYUFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5jcmVhdGVMZWZ0Q2hpbGQoKVxuICAgICAgICByb290LmNyZWF0ZVJpZ2h0Q2hpbGQoKVxuICAgICAgICBjcmVhdGVQYXJzZVRyZWVOb2Rlcyhyb290LmxlZnRDaGlsZCwgRXhwcmVzc2lvblR5cGUuUEVYUCwgc3RhcnRUb2tlbiwgZVRva2VuLnByZXZpb3VzKVxuICAgICAgICBjcmVhdGVQYXJzZVRyZWVOb2Rlcyhyb290LnJpZ2h0Q2hpbGQsIEV4cHJlc3Npb25UeXBlLk5FWFAsIGVUb2tlbi5uZXh0LCBlbmRUb2tlbilcbiAgICAgICAgcm9vdC52YWx1ZSA9IGVUb2tlbi52YWx1ZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIGZpcnN0IHRva2VuIGlzIGEgKCwgdGhlbiB0aGUgbGFzdCB0b2tlbiBtdXN0IGJlIGEgKS4gVGhleSBjYW4gYm90aCBiZSByZW1vdmVkIGFuZCB0aGUgZXhwcmVzc2lvblxuICAgICAgLy8gdHlwZSBjaGFuZ2VkIHRvIEVYUC4gQWdhaW4sIG5vIHJlY3Vyc2l2ZSBjYWxsIGlzIGRvbmUgdG8gZWxpbWluYXRlIHVubmVjY2Vzc2FyeSBub2Rlcy5cbiAgICAgIGlmIChzdGFydFRva2VuLnRva2VuVHlwZSA9PT0gVG9rZW5UeXBlLk9QRU5fUEFSQU5USEVTRVMpIHtcbiAgICAgICAgZXhwcmVzc2lvblR5cGUgPSBFeHByZXNzaW9uVHlwZS5FWFBcbiAgICAgICAgc3RhcnRUb2tlbiA9IHN0YXJ0VG9rZW4ubmV4dFxuICAgICAgICBlbmRUb2tlbiA9IGVuZFRva2VuLnByZXZpb3VzXG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0VG9rZW4udG9rZW5UeXBlID09PSBUb2tlblR5cGUuRV9PUEVOX1BBUkFOVEhFU0VTKSB7XG4gICAgICAgIHJvb3QuY3JlYXRlUmlnaHRDaGlsZCgpXG4gICAgICAgIGNyZWF0ZVBhcnNlVHJlZU5vZGVzKHJvb3QucmlnaHRDaGlsZCwgRXhwcmVzc2lvblR5cGUuRVhQLCBzdGFydFRva2VuLm5leHQsIGVuZFRva2VuLnByZXZpb3VzKVxuICAgICAgICByb290LnZhbHVlID0gc3RhcnRUb2tlbi52YWx1ZVxuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSB7IC8vIE90aGVyd2lzZSwgd2Ugc2hvdWxkIGhhdmUgYSBzaW5nbGUgdG9rZW4gYW5kIHRoaXMgdG9rZW4gaXMgc2V0IHRvIGl0LlxuICAgICAgICByb290LnZhbHVlID0gc3RhcnRUb2tlbi52YWx1ZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUb2tlbml6ZXMgdGhlIGlucHV0IGFuZCBjcmVhdGVzIGEgZnVuY3Rpb24gcGFyc2UgdHJlZSBmcm9tIGl0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBBIGZ1bmN0aW9uIHRoYXQgaGFzIGJlZW4gdmFsaWRhdGVkIHRvIHR1cm4gaW50byBhIHBhcnNlIHRyZWUuXG4gKiBAcmV0dXJuIHtUcmVlTm9kZX0gVGhlIGZ1bmN0aW9uIHBhcnNlIHRyZWUgdGhhdCB3YXMgY3JlYXRlZC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUGFyc2VUcmVlIChpbnB1dCkge1xuICBjb25zb2xlLmxvZygnRW50ZXJpbmcgY3JlYXRlUGFyc2VUcmVlIHdpdGggaW5wdXQ6ICcgKyBpbnB1dClcbiAgY29uc3QgdG9rZW5MaXN0ID0gdG9rZW5pemUoaW5wdXQpXG4gIGNvbnN0IHRyZWUgPSBuZXcgVHJlZU5vZGUoKVxuXG4gIGNyZWF0ZVBhcnNlVHJlZU5vZGVzKHRyZWUsIEV4cHJlc3Npb25UeXBlLkVYUCwgdG9rZW5MaXN0LmhlYWQsIHRva2VuTGlzdC50YWlsKVxuICBjb25zb2xlLmxvZyhwcmludFBhcnNlVHJlZSh0cmVlKSlcbiAgY29uc29sZS5sb2coJ0V4aXRpbmcgY3JlYXRlUGFyc2VUcmVlJylcbiAgcmV0dXJuIHRyZWVcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwYXJzZSB0cmVlLiBJbnRlbmRlZCBmb3IgdGVzdGluZyB0aGF0IHRoZSBwYXJzZSB0cmVlIHdhcyBjcmVhdGVkXG4gKiBjb3JyZWN0bHkuIFNlYXJjaGVzIGZyb20gdGhlIGxlZnQgdG8gdGhlIHJpZ2h0IGFuZCBwcmludHMgZWFjaCB0b2tlbiB2YWx1ZSBpdCBmaW5kcy5cbiAqXG4gKiBAcGFyYW0ge1RyZWVOb2RlfSB0cmVlIFRoZSByb290IG5vZGUgb2YgdGhlIHRyZWUgdG8gcHJpbnQuXG4gKlxuICogQHJldHVybiB7c3RyaW5nfSBSZXByZXNlbnRhdGlvbiBvZiB0aGUgcGFyc2UgdHJlZS5cbiAqL1xuZnVuY3Rpb24gcHJpbnRQYXJzZVRyZWUgKHRyZWUpIHtcbiAgaWYgKHRyZWUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgcmV0dXJuIHByaW50UGFyc2VUcmVlKHRyZWUubGVmdENoaWxkKSArIHRyZWUudmFsdWUgKyBwcmludFBhcnNlVHJlZSh0cmVlLnJpZ2h0Q2hpbGQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBhcnNlVHJlZVxuIiwiaW1wb3J0IFRva2VuTGlzdCBmcm9tICcuL1Rva2VuTGlzdC5qcydcbmltcG9ydCBUb2tlbiBmcm9tICcuL1Rva2VuLmpzJ1xuaW1wb3J0IEV4cHJlc3Npb25UeXBlIGZyb20gJy4vRXhwcmVzc2lvblR5cGUuanMnXG5pbXBvcnQgVG9rZW5UeXBlIGZyb20gJy4vVG9rZW5UeXBlLmpzJ1xuXG4vKipcbiAqIFR1cm5zIHRoZSBpbnB1dCBzdHJpbmcgaW50byBhIFRva2VuTGlzdCBvZiBUb2tlbnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IFRoZSBzdHJpbmcgdG8gdG9rZW5pemUuIFNob3VsZCBvbmx5IGNvbnRhaW4gKywgLSwgLywgKiwgKCwgKSwgeCwgYW5kIG51bWJlcnMuXG4gKlxuICogQHJldHVybiB7VG9rZW5MaXN0fSBSZXR1cm5zIGEgbGlzdCBvZiBUb2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHRva2VuaXplIChpbnB1dCkge1xuICBjb25zb2xlLmxvZygnRW50ZXJpbmcgdG9rZW5pemUgd2l0aCBpbnB1dDogJyArIGlucHV0KVxuICAvLyBUaGlzIG1heSBuZWVkIGFkZGl0aW9uYWwgd29yay4gSXQgZmFpbHMgZm9yIC4zMiBvciBzb21ldGhpbmcgc2ltaWxhciAobXVzdCBkbyAwLjMyKS5cbiAgY29uc3QgdG9rZW5SZXRyaWV2ZXIgPSAvKFxcZCsoXFwuXFxkKyk/fGV8cGl8YT8oc2lufGNvc3x0YW4pXFwofChsbnxsb2cpXFwofFsrXFwtKi94KCleXSkvXG4gIGNvbnN0IHRva2VuTGlzdCA9IG5ldyBUb2tlbkxpc3QoKVxuXG4gIHdoaWxlIChpbnB1dC5sZW5ndGgpIHtcbiAgICBsZXQgdG9rZW4gPSAnJ1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSh0b2tlblJldHJpZXZlciwgKG1hdGNoZWRTdHJpbmcsIHNhdmVkVG9rZW4pID0+IHsgdG9rZW4gPSBzYXZlZFRva2VuOyByZXR1cm4gJycgfSlcbiAgICB0b2tlbkxpc3QuYWRkKG5ldyBUb2tlbih0b2tlbikpXG4gICAgaWYgKHRva2VuID09PSAnJykge1xuICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgZm91bmQgd2hlbiB0b2tlbml6aW5nJylcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgY29uc29sZS5sb2coJ0V4aXRpbmcgdG9rZW5pemUnKVxuICByZXR1cm4gdG9rZW5MaXN0XG59XG5cbi8qKlxuICogRmluZHMgdGhlIHRva2VuIHRoYXQgdGhlIGZ1bmN0aW9uIHBhcnNlIHRyZWUgc2hvdWxkIGJlIHNwbGl0IGF0LiBTZWFyY2hlcyBmcm9tIHRoZSBlbmRUb2tlbiB0byB0aGUgc3RhcnRUb2tlblxuICogbG9va2luZyBmb3IgdGhlIGZpcnN0IHRva2VuIHdpdGggVG9rZW5UeXBlLkFERElUSU9OIChpZiBFeHByZXNzaW9uVHlwZS5FWFApIG9yIFRva2VuVHlwZS5NVUxUSVBMSUNBVElPTiAoaWZcbiAqIEV4cHJlc3Npb25UeXBlLk1FWFApIHdoZXJlIHRoZSBwYXJhbnRoZXNlcyBhcmUgYmFsYW5jZWQuIFJldHVybnMgbnVsbCBpZiBubyB0b2tlbiBtZWV0cyB0aGUgcmVxdWlyZW1lbnQuXG4gKiBOT1RFOiBzdGFydFRva2VuIGFuZCBlbmRUb2tlbiBkb24ndCBoYXZlIHRvIGJlIHRoZSBmaXJzdCBhbmQgbGFzdCB0b2tlbnMgaW4gdGhlIHRva2VuIGxpc3QuXG4gKlxuICogQHBhcmFtIHtFeHByZXNzaW9uVHlwZX0gZXhwcmVzc2lvblR5cGUgVGhlIHR5cGUgb2YgZXhwcmVzc2lvbi4gU2hvdWxkIGJlIGVpdGhlciBFeHByZXNzaW9uVHlwZS5NRVhQIG9yXG4gKiAgRXhwcmVzc2lvblR5cGUuRVhQLlxuICogQHBhcmFtIHtUb2tlbn0gc3RhcnRUb2tlbiBUaGUgZmlyc3QgdG9rZW4gaW4gdGhlIHRva2VuIGxpc3QgdG8gc2VhcmNoLlxuICogQHBhcmFtIHtUb2tlbn0gZW5kVG9rZW4gVGhlIGZpbmFsIHRva2VuIGluIHRoZSB0b2tlbiBsaXN0IHRvIHNlYXJjaC5cbiAqXG4gKiBAcmV0dXJuIHtUb2tlbn0gVGhlIHRva2VuIHRvIHNwbGl0IGF0LiBSZXR1cm5zIG51bGwgaWYgdGhlcmUgd2FzIG5vIHNwbGl0IHRva2VuIGZvdW5kLlxuICovXG5mdW5jdGlvbiBmaW5kU3BsaXRUb2tlbiAoZXhwcmVzc2lvblR5cGUsIHN0YXJ0VG9rZW4sIGVuZFRva2VuKSB7XG4gIGxldCBjdXJyZW50VG9rZW4gPSBlbmRUb2tlblxuXG4gIGxldCB0b2tlblR5cGUgPSBUb2tlblR5cGUuQURESVRJT05cblxuICBpZiAoZXhwcmVzc2lvblR5cGUgPT09IEV4cHJlc3Npb25UeXBlLk1FWFApIHtcbiAgICB0b2tlblR5cGUgPSBUb2tlblR5cGUuTVVMVElQTElDQVRJT05cbiAgfVxuXG4gIGxldCBjbG9zZVBhcmFudGhlc2VzID0gMFxuXG4gIHdoaWxlIChjdXJyZW50VG9rZW4gIT09IHN0YXJ0VG9rZW4gJiYgY3VycmVudFRva2VuICE9PSBzdGFydFRva2VuLnByZXZpb3VzKSB7XG4gICAgaWYgKGN1cnJlbnRUb2tlbi50b2tlblR5cGUgPT09IHRva2VuVHlwZSAmJiBjbG9zZVBhcmFudGhlc2VzID09PSAwKSB7XG4gICAgICByZXR1cm4gY3VycmVudFRva2VuXG4gICAgfVxuICAgIGlmIChjdXJyZW50VG9rZW4udG9rZW5UeXBlID09PSBUb2tlblR5cGUuT1BFTl9QQVJBTlRIRVNFUyB8fFxuICAgICAgICAgICAgY3VycmVudFRva2VuLnRva2VuVHlwZSA9PT0gVG9rZW5UeXBlLkVfT1BFTl9QQVJBTlRIRVNFUykge1xuICAgICAgY2xvc2VQYXJhbnRoZXNlcy0tXG4gICAgfSBlbHNlIGlmIChjdXJyZW50VG9rZW4udG9rZW5UeXBlID09PSBUb2tlblR5cGUuQ0xPU0VfUEFSQU5USEVTRVMpIHtcbiAgICAgIGNsb3NlUGFyYW50aGVzZXMrK1xuICAgIH1cblxuICAgIGN1cnJlbnRUb2tlbiA9IGN1cnJlbnRUb2tlbi5wcmV2aW91c1xuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gZmluZEVFWFBTcGxpdFRva2VuIChzdGFydFRva2VuLCBlbmRUb2tlbikge1xuICBsZXQgY3VycmVudFRva2VuID0gc3RhcnRUb2tlblxuXG4gIGxldCBjbG9zZVBhcmFudGhlc2VzID0gMFxuXG4gIHdoaWxlIChjdXJyZW50VG9rZW4gIT09IGVuZFRva2VuICYmIGN1cnJlbnRUb2tlbiAhPT0gZW5kVG9rZW4ubmV4dCkge1xuICAgIGlmIChjdXJyZW50VG9rZW4udG9rZW5UeXBlID09PSBUb2tlblR5cGUuUE9XRVIgJiYgY2xvc2VQYXJhbnRoZXNlcyA9PT0gMCkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRUb2tlblxuICAgIH1cbiAgICBpZiAoY3VycmVudFRva2VuLnRva2VuVHlwZSA9PT0gVG9rZW5UeXBlLk9QRU5fUEFSQU5USEVTRVMgfHxcbiAgICAgICAgICAgIGN1cnJlbnRUb2tlbi50b2tlblR5cGUgPT09IFRva2VuVHlwZS5FX09QRU5fUEFSQU5USEVTRVMpIHtcbiAgICAgIGNsb3NlUGFyYW50aGVzZXMtLVxuICAgIH0gZWxzZSBpZiAoY3VycmVudFRva2VuLnRva2VuVHlwZSA9PT0gVG9rZW5UeXBlLkNMT1NFX1BBUkFOVEhFU0VTKSB7XG4gICAgICBjbG9zZVBhcmFudGhlc2VzKytcbiAgICB9XG5cbiAgICBjdXJyZW50VG9rZW4gPSBjdXJyZW50VG9rZW4ubmV4dFxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IHtcbiAgdG9rZW5pemUsXG4gIGZpbmRFRVhQU3BsaXRUb2tlbixcbiAgZmluZFNwbGl0VG9rZW5cbn1cbiIsImNvbnN0IHRlcm1pbmFsTGlzdCA9IFsnKycsICctJywgJyonLCAnLycsICd4JywgJygnLCAnKScsICckJ11cblxuY29uc3QgbWFwID0ge1xuICBTOiB7ICcrJzogJyEnLCAnLSc6ICchJywgJyonOiAnIScsICcvJzogJyEnLCB4OiAnQVQnLCAnKCc6ICdBVCcsICcpJzogJyEnLCAkOiAnIScgfSxcbiAgQTogeyAnKyc6ICdBVCsnLCAnLSc6ICdBVC0nLCAnKic6ICchJywgJy8nOiAnIScsIHg6ICchJywgJygnOiAnIScsICcpJzogJycsICQ6ICcnIH0sIC8vIFMnXG4gIFQ6IHsgJysnOiAnIScsICctJzogJyEnLCAnKic6ICchJywgJy8nOiAnIScsIHg6ICdCUicsICcoJzogJ0JSJywgJyknOiAnIScsICQ6ICchJyB9LFxuICBCOiB7ICcrJzogJycsICctJzogJycsICcqJzogJ0JSKicsICcvJzogJ0JSLycsIHg6ICchJywgJygnOiAnIScsICcpJzogJycsICQ6ICcnIH0sIC8vICAgVCdcbiAgUjogeyAnKyc6ICchJywgJy0nOiAnIScsICcqJzogJyEnLCAnLyc6ICchJywgeDogJ3gnLCAnKCc6ICcpUygnLCAnKSc6ICchJywgJDogJyEnIH1cbn1cblxuLyoqXG4gKiBWYWxpZGF0ZXMgdGhhdCBhIGZ1bmN0aW9uIGlzIHZhbGlkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmdW5jIFN0cmluZyBjb250YWluaW5nIHRoZSBmdW5jdGlvbiB0byB2YWxpZGF0ZS4gSXQgc2hvdWxkIGhhdmUgbm8gd2hpdGVzcGFjZSBvciBpbXBsaWNpdFxuICogIG11bHRpcGxpY2F0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBmdW5jdGlvbiBpcyB2YWxpZCBhbmQgZmFsc2UgaWYgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BlckZ1bmN0aW9uIChmdW5jKSB7XG4gIGNvbnNvbGUubG9nKCdFbnRlcmluZyB2YWxpZGF0ZVByb3BlckZ1bmN0aW9uIHdpdGggZnVuY3Rpb246ICcgKyBmdW5jKVxuXG4gIGZ1bmMgPSByZWdleENvbnZlcnQoZnVuYylcblxuICBjb25zdCBpbnZhbGlkQ2hhcmFjdGVycyA9IC9bXitcXC0qL3goKV5dL2dcbiAgaWYgKGZ1bmMubGVuZ3RoID09PSAwIHx8IGZ1bmMuc2VhcmNoKGludmFsaWRDaGFyYWN0ZXJzKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBpc1ZhbGlkRnVuY3Rpb24oZnVuYylcbn1cblxuZnVuY3Rpb24gcmVnZXhDb252ZXJ0IChmdW5jKSB7XG4gIC8vIFRoaXMgbWF5IG5lZWQgYWRkaXRpb25hbCB3b3JrLiBJdCBmYWlscyBmb3IgLjMyIG9yIHNvbWV0aGluZyBzaW1pbGFyIChtdXN0IGRvIDAuMzIpLlxuICAvLyBBbHNvIG5lZWVkIHRvIGNvbnNpZGVyIG5lZ2F0aXZlIG51bWJlcnMgbW9yZS5cbiAgY29uc3QgbnVtYmVyUmVtb3ZlciA9IC9cXGQrKFxcLlxcZCspP3xlfHBpL2dcbiAgZnVuYyA9IGZ1bmMucmVwbGFjZShudW1iZXJSZW1vdmVyLCAneCcpXG5cbiAgLy8gQ2hlY2sgZm9yIGFueSBudW1iZXIgb2YgbmVnYXRpdmVzIGRpcmVjdGx5IHByZWNlZGVkIGJ5IGEgKiwgLywgKyBhbmQgcmVtb3ZlIHRoZW0uXG4gIC8vIEFzbyBuZWVkIHRvIGNoZWNrIGZvciBzaXR1YXRpb25zIHN1Y2ggYXMgLTUrMyBvciB4KigtNCszKSBBbnl0aGluZyBOT1QgcHJlY2VkZWQgYnkgYW4geD9cbiAgY29uc3QgbmVnYXRpdmVSZW1vdmVyID0gLyhefFteeF0pLSsvZ1xuICBmdW5jLnJlcGxhY2UobmVnYXRpdmVSZW1vdmVyLCAnJDEnKVxuXG4gIGNvbnN0IGVuaGFuY2VkUGFyYW50aGVzZXNSZW1vdmVyID0gLygoYT8oY29zfHNpbnx0YW4pKXxsbnxsb2cpXFwoL2dcbiAgZnVuYy5yZXBsYWNlKGVuaGFuY2VkUGFyYW50aGVzZXNSZW1vdmVyLCAnKCcpXG5cbiAgY29uc29sZS5sb2coZnVuYylcblxuICByZXR1cm4gZnVuY1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRnVuY3Rpb24gKGZ1bmMpIHtcbiAgZnVuYyArPSAnJCdcblxuICBjb25zdCBjaGFyU3RhY2sgPSBbJ1MnXVxuICBsZXQgcG9pbnQgPSAwXG4gIGxldCBmYWlsZWQgPSBmYWxzZVxuICAvLyBtYXBbXCJTXCJdW1wiK1wiXTtcblxuICB3aGlsZSAocG9pbnQgPCBmdW5jLmxlbmd0aCAmJiAhZmFpbGVkKSB7XG4gICAgLy8gIGlmIChjaGFyU3RhY2suZW1wdHkoKSlcbiAgICAvLyAge1xuICAgIC8vICAgICAgY291dCA8PCBcIlN0cmluZyBub3QgYWNjZXB0ZWRcXG5cIjsgLy9wcmludCBzdHJpbmcgY29udGVudHM/XG4gICAgLy8gICAgICBicmVhaztcbiAgICAvLyAgfVxuICAgIGxldCBjdXJyZW50RWxlbSA9IGNoYXJTdGFjay5wb3AoKVxuXG4gICAgd2hpbGUgKCF0ZXJtaW5hbExpc3QuaW5jbHVkZXMoY3VycmVudEVsZW0pKSB7XG4gICAgICBpZiAobWFwW2N1cnJlbnRFbGVtXVtmdW5jW3BvaW50XV0gPT09ICchJykge1xuICAgICAgICBmYWlsZWQgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICAgIC8vIHByaW50IGVycm9yP1xuICAgICAgfVxuXG4gICAgICBbLi4ubWFwW2N1cnJlbnRFbGVtXVtmdW5jW3BvaW50XV1dLmZvckVhY2goYyA9PiBjaGFyU3RhY2sucHVzaChjKSlcblxuICAgICAgaWYgKCFjaGFyU3RhY2subGVuZ3RoKSB7IC8vIGlmIHRoZSBhcnJheSBpcyBlbXB0eVxuICAgICAgICBpZiAoZnVuY1twb2ludF0gIT09ICckJykge1xuICAgICAgICAgIGZhaWxlZCA9IHRydWVcbiAgICAgICAgICAvLyBwcmludCBlcnJvcj9cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50RWxlbSA9IGNoYXJTdGFjay5wb3AoKVxuICAgIH1cblxuICAgIHBvaW50KytcbiAgfVxuXG4gIGlmIChjaGFyU3RhY2subGVuZ3RoIHx8IGZhaWxlZCkge1xuICAgIGNvbnNvbGUubG9nKCdDaGFyIHN0YWNrOiAnICsgY2hhclN0YWNrKVxuICAgIGNvbnNvbGUubG9nKCdSZW1haW5uZyBzdHJpbmcgY2hhcmFjdGVyczogJyArIGZ1bmMuc3Vic3RyKHBvaW50KSlcbiAgfVxuICBjb25zb2xlLmxvZygnRXhpdGluZyB2YWxpZGF0ZVByb3BlckZ1bmN0aW9uJylcblxuICByZXR1cm4gIWNoYXJTdGFjay5sZW5ndGggJiYgIWZhaWxlZFxufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZVByb3BlckZ1bmN0aW9uXG4iLCJpbXBvcnQgeyBwcm9jZXNzRnVuY3Rpb24sIGV2YWx1YXRlRnVuY3Rpb24gfSBmcm9tICcuLi9wYXJzZXIvZXF1YXRpb25QYXJzZXIuanMnXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogW1wid2FyblwiLHsgXCJ2YXJzSWdub3JlUGF0dGVyblwiOiBcImdyYXBoRnVuY3Rpb25cIn1dICovXG5cbi8qKlxuICogQ29kZSBmb3IgYSB2ZXJ0ZXggc2hhZGVyLiBDb250YWlucyBhdHRyaWJ1dGUgcG9zaXRpb24gdGhhdCB0YWtlcyB0aGUgcG9zaXRpb24gb2YgdGhlIHZlcnRleC5cbiAqL1xuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gYFxuICAgIGF0dHJpYnV0ZSB2ZWM0IHBvc2l0aW9uO1xuXG4gICAgdm9pZCBtYWluKCkge1xuICAgICAgICBnbF9Qb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIH1cbmBcblxuLyoqXG4gKiBDb2RlIGZvciBhIGZyYWdtZW50IHNoYWRlci4gQ29sb3JzIHRoZSBmcmFnbWVudCBwdXJwbGUuXG4gKi9cbmNvbnN0IHB1cnBsZUZyYWdtZW50U2hhZGVyU291cmNlID0gYFxuICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgwLjUsIDAuMCwgMC41LCAxLjApO1xuICAgIH1cbmBcblxuLyoqXG4gKiBDb2RlIGZvciBhIGZyYWdtZW50IHNoYWRlci4gQ29sb3JzIHRoZSBmcmFnbWVudCBibGFjay4gSW50ZW5kZWQgc3BlY2lmaWNhbGx5IGZvciBzaGFkaW5nIGF4aXMgZnJhZ21lbnRzLlxuICovXG5jb25zdCBheGlzU2hhZGVyID0gYFxuICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgwLjAsIDAuMCwgMC4wLCAxLjApO1xuICAgIH1cbmBcblxuLyoqXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTCBjb250ZXh0XG4gKiBAcGFyYW0geyp9IHR5cGUgVGhlIHR5cGUgb2Ygc2hhZGVyIChzaG91bGQgYmUgZWl0aGVyIGdsLlZFUlRFWF9TSEFERVIgb3IgZ2wuRlJBR01FTlRfU0hBREVSKVxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIGNvZGUgb2YgdGhlIHNoYWRlclxuICovXG5mdW5jdGlvbiBtYWtlU2hhZGVyIChnbCwgdHlwZSwgc291cmNlKSB7XG4gIGxldCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSlcblxuICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpXG4gIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKVxuXG4gIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgY29uc29sZS5lcnJvcihnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpXG5cbiAgICBnbC5kZWxldGVTaGFkZXIoc2hhZGVyKVxuICAgIHNoYWRlciA9IG51bGxcbiAgfVxuXG4gIHJldHVybiBzaGFkZXJcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTCBjb250ZXh0XG4gKiBAcGFyYW0ge3N0cmluZ30gdmVydGV4U291cmNlIFRoZSBzb3VyY2UgY29kZSBmb3IgdGhlIHZlcnRleCBzaGFkZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmcmFnbWVudFNvdXJjZSBUaGUgc291cmNlIGNvZGUgZm9yIHRoZSBmcmFnbWVudCBzaGFkZXJcbiAqL1xuZnVuY3Rpb24gbWFrZVByb2dyYW0gKGdsLCB2ZXJ0ZXhTb3VyY2UsIGZyYWdtZW50U291cmNlKSB7XG4gIGNvbnN0IHZlcnRleFNoYWRlciA9IG1ha2VTaGFkZXIoZ2wsIGdsLlZFUlRFWF9TSEFERVIsIHZlcnRleFNvdXJjZSlcbiAgY29uc3QgZnJhZ21lbnRTaGFkZXIgPSBtYWtlU2hhZGVyKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIGZyYWdtZW50U291cmNlKVxuXG4gIGxldCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpXG4gIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpXG4gIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcilcblxuICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKVxuXG4gIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcbiAgICBjb25zb2xlLmVycm9yKGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pKVxuXG4gICAgZ2wuZGVsZXRlUHJvZ3JhbShwcm9ncmFtKVxuICAgIHByb2dyYW0gPSBudWxsXG4gIH1cblxuICByZXR1cm4gcHJvZ3JhbVxufVxuXG4vKipcbiAqXG4gKi9cbmZ1bmN0aW9uIGRyYXcgKHRyZWUsIGRyYXdXaW5kb3cpIHtcbiAgdHJ5IHtcbiAgICAvKiogQHR5cGUge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gKi9cbiAgICBjb25zdCBnbCA9IGRyYXdXaW5kb3cuZ2V0Q29udGV4dCgnd2ViZ2wnKVxuXG4gICAgZHJhd1dpbmRvdy53aWR0aCA9IGRyYXdXaW5kb3cuY2xpZW50V2lkdGhcbiAgICBkcmF3V2luZG93LmhlaWdodCA9IGRyYXdXaW5kb3cuY2xpZW50SGVpZ2h0XG4gICAgZ2wudmlld3BvcnQoMCwgMCwgZHJhd1dpbmRvdy53aWR0aCwgZHJhd1dpbmRvdy5oZWlnaHQpXG5cbiAgICBnbC5jbGVhckNvbG9yKDEuMCwgMS4wLCAxLjAsIDEpXG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpXG5cbiAgICBjb25zdCBheGlzQnVmZmVyID0gY3JlYXRlQXhpc2VzKGdsKVxuICAgIGNvbnN0IHRpY2tNYXJrQnVmZmVyID0gY3JlYXRlVGlja01hcmtzKGdsLCAyMCwgMjApXG4gICAgY29uc3QgcG9seW5vbWlhbEJ1ZmZlciA9IGNyZWF0ZVBvbHlub21pYWwoZ2wsIHRyZWUpXG5cbiAgICBkcmF3TGluZXMoZ2wsIGF4aXNCdWZmZXIsIGF4aXNTaGFkZXIpXG4gICAgZHJhd0xpbmVzKGdsLCB0aWNrTWFya0J1ZmZlciwgYXhpc1NoYWRlcilcbiAgICBkcmF3TGluZVN0cmlwKGdsLCBwb2x5bm9taWFsQnVmZmVyLCBwdXJwbGVGcmFnbWVudFNoYWRlclNvdXJjZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYERyYXcgZmFpbGVkIHdpdGggZHJhd1dpbmRvdyAke2RyYXdXaW5kb3d9YClcbiAgICBjb25zb2xlLmVycm9yKGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZVN0YXRpY0RyYXdBcnJheUJ1ZmZlciAoZ2wsIHZlcnRpY2VBcnJheSwgbnVtVmVydGljZXMpIHtcbiAgY29uc3QgYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKClcbiAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcilcbiAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkodmVydGljZUFycmF5KSwgZ2wuU1RBVElDX0RSQVcpXG5cbiAgY29uc3QgZGF0YSA9IHtcbiAgICBidWZmZXI6IGJ1ZmZlcixcbiAgICBudW1WZXJ0aWNlczogbnVtVmVydGljZXNcbiAgfVxuXG4gIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dFxuICovXG5mdW5jdGlvbiBjcmVhdGVQb2x5bm9taWFsIChnbCwgdHJlZSkge1xuICBjb25zb2xlLmxvZygnRW50ZXJpbmcgY3JlYXRlUG9seW5vbWlhbCcpXG4gIGNvbnN0IG51bVZlcnRpY2VzID0gMjAxXG5cbiAgY29uc3QgdmVydGljZUFycmF5ID0gW11cblxuICBmb3IgKGxldCB4ID0gLTEwMDsgeCA8PSAxMDA7IHgrKykge1xuICAgIGNvbnN0IHhpID0geCAvIDEwXG4gICAgY29uc3QgeWkgPSBldmFsdWF0ZUZ1bmN0aW9uKHRyZWUsIHhpKVxuICAgIHZlcnRpY2VBcnJheS5wdXNoKHhpIC8gMTAsIHlpIC8gMTAsIDAuMClcbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdFeGl0aW5nIGNyZWF0ZVBvbHlub21pYWwnKVxuICByZXR1cm4gbWFrZVN0YXRpY0RyYXdBcnJheUJ1ZmZlcihnbCwgdmVydGljZUFycmF5LCBudW1WZXJ0aWNlcylcbn1cblxuLyoqXG4gKiBDcmVhdGVzIDNEIHZlcnRpY2VzIHRvIGRlZmluZSB4IGFuZCB5IGF4aXNlcyBjZW50ZXJlZCBvbiB0aGUgc2NyZWVuIGFuZCBhZGRzIHRoZW0gdG8gYSBidWZmZXIuIFRoZSB2ZXJ0aWNlc1xuICogc2hvdWxkIGJlIGRyYXduIHdpdGggZ2wuTElORVMuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTCBjb250ZXh0XG4gKlxuICogQHJldHVybnMgeyp9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSB2ZXJ0aWNlIGJ1ZmZlciAoYXMgJ2J1ZmZlcicpIGFuZCB0aGUgbnVtYmVyIG9mIHZlcnRpY2VzIGluIHRoZSBidWZmZXIgKGFzXG4gKiAgJ251bVZlcnRpY2VzJykuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUF4aXNlcyAoZ2wpIHtcbiAgY29uc3QgbnVtVmVydGljZXMgPSA0XG4gIGNvbnN0IHZlcnRpY2VBcnJheSA9IFtcbiAgICAtMSwgMCwgMCxcbiAgICAxLCAwLCAwLFxuICAgIDAsIDEsIDAsXG4gICAgMCwgLTEsIDBcbiAgXVxuICByZXR1cm4gbWFrZVN0YXRpY0RyYXdBcnJheUJ1ZmZlcihnbCwgdmVydGljZUFycmF5LCBudW1WZXJ0aWNlcylcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGlja01hcmtzIChnbCwgbnVtWCwgbnVtWSkge1xuICBjb25zdCB2ZXJ0aWNlQXJyYXkgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtWDsgaSsrKSB7XG4gICAgdmVydGljZUFycmF5LnB1c2goMiAvIG51bVggKiBpIC0gMSwgLTAuMDIsIDAsIDIgLyBudW1YICogaSAtIDEsIDAuMDIsIDApXG4gIH1cblxuICBmb3IgKGxldCBqID0gMDsgaiA8PSBudW1ZOyBqKyspIHtcbiAgICB2ZXJ0aWNlQXJyYXkucHVzaCgtMC4wMiwgMiAvIG51bVkgKiBqIC0gMSwgMCwgMC4wMiwgMiAvIG51bVkgKiBqIC0gMSwgMClcbiAgfVxuICByZXR1cm4gbWFrZVN0YXRpY0RyYXdBcnJheUJ1ZmZlcihnbCwgdmVydGljZUFycmF5LCAyICogKG51bVggKyBudW1ZKSlcbn1cblxuLyoqXG4gKiBEcmF3cyBsaW5lcyB1c2luZyB0aGUgdmVydGljZXMgY29udGFpbmVkIGluIHRoZSBkYXRhIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dFxuICogQHBhcmFtIHsqfSBkYXRhIEpTT04gb2JqZWN0IGhvbGRpbmcgdGhlIGJ1ZmZlciBhbmQgdGhlIG51bWJlciBvZiB2ZXJ0aWNlc1xuICogQHBhcmFtIHtzdHJpbmd9IGZyYWdtZW50U2hhZGVyU291cmNlIFRoZSBzb3VyY2UgY29kZSBvZiB0aGUgZnJhZ21lbnQgc2hhZGVyXG4gKi9cbmZ1bmN0aW9uIGRyYXdMaW5lcyAoZ2wsIGRhdGEsIGZyYWdtZW50U2hhZGVyU291cmNlKSB7XG4gIGNvbnN0IHByb2dyYW0gPSBtYWtlUHJvZ3JhbShnbCwgdmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSlcblxuICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgZGF0YS5idWZmZXIpXG5cbiAgY29uc3QgcG9zaXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAncG9zaXRpb24nKVxuICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHBvc2l0aW9uLCAzLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApXG4gIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvc2l0aW9uKVxuXG4gIGdsLnVzZVByb2dyYW0ocHJvZ3JhbSlcblxuICBnbC5kcmF3QXJyYXlzKGdsLkxJTkVTLCAwLCBkYXRhLm51bVZlcnRpY2VzKVxufVxuXG4vKipcbiAqIERyYXdzIHRyaWFuZ2xlcyB1c2luZyB0aGUgdmVydGljZXMgY29udGFpbmVkIGluIHRoZSBkYXRhIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dFxuICogQHBhcmFtIHsqfSBkYXRhIEpTT04gb2JqZWN0IGhvbGRpbmcgdGhlIGJ1ZmZlciBhbmQgdGhlIG51bWJlciBvZiB2ZXJ0aWNlc1xuICogQHBhcmFtIHtzdHJpbmd9IGZyYWdtZW50U2hhZGVyU291cmNlIFRoZSBzb3VyY2UgY29kZSBvZiB0aGUgZnJhZ21lbnQgc2hhZGVyXG4gKi9cbmZ1bmN0aW9uIGRyYXdMaW5lU3RyaXAgKGdsLCBkYXRhLCBmcmFnbWVudFNoYWRlclNvdXJjZSkge1xuICBjb25zdCBwcm9ncmFtID0gbWFrZVByb2dyYW0oZ2wsIHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpXG5cbiAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGRhdGEuYnVmZmVyKVxuXG4gIGNvbnN0IHBvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ3Bvc2l0aW9uJylcbiAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihwb3NpdGlvbiwgMywgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKVxuICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb3NpdGlvbilcblxuICBnbC51c2VQcm9ncmFtKHByb2dyYW0pXG5cbiAgZ2wuZHJhd0FycmF5cyhnbC5MSU5FX1NUUklQLCAwLCBkYXRhLm51bVZlcnRpY2VzKVxufVxuXG4vKipcbiAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyB0aGUgZ3JhcGggZnVuY3Rpb24gYnV0dG9uLiBQcm9jZXNzZXMgYW5kIGRyYXdzIHRoZSBmdW5jdGlvbiBpZiBpdCBpcyB2YWxpZC5cbiAqL1xuZnVuY3Rpb24gZ3JhcGhGdW5jdGlvbiAoZnVuYywgZHJhd1dpbmRvdykge1xuICB0cnkge1xuICAgIGNvbnN0IHRyZWUgPSBwcm9jZXNzRnVuY3Rpb24oZnVuYylcbiAgICBpZiAodHJlZSAhPT0gbnVsbCkge1xuICAgICAgZHJhdyh0cmVlLCBkcmF3V2luZG93KVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYEdyYXBoIGZ1bmN0aW9uIGZhaWxlZCBmb3IgJHtmdW5jfSB3aXRoIGRyYXdXaW5kb3cgJHtkcmF3V2luZG93fWApXG4gICAgY29uc29sZS5lcnJvcihlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBoRnVuY3Rpb25cbiJdLCJzb3VyY2VSb290IjoiIn0=