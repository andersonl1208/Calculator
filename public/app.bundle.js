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


console.log("development"); // Rendering the component into the page

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
//     <canvas id="screen" ></canvas>
//     <textarea id="userString" rows="5" cols="85">x</textarea><br/>
//     <button type="button" onClick="graphFunction()">Graph</button>
//     <div id="result"></div><br/>


function Button(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: props.onclick
  }, props.name);
}
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

/***/ }),

/***/ "./client/components/ButtonGrid.jsx":
/*!******************************************!*\
  !*** ./client/components/ButtonGrid.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
//     <canvas id="screen" ></canvas>
//     <textarea id="userString" rows="5" cols="85">x</textarea><br/>
//     <button type="button" onClick="graphFunction()">Graph</button>
//     <div id="result"></div><br/>


function ButtonGrid() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
}
ButtonGrid.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
ButtonGrid.defaultProps = {
  title: 'Banner Title'
};

/***/ }),

/***/ "./client/components/Calculator.jsx":
/*!******************************************!*\
  !*** ./client/components/Calculator.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calculator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Graph_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Graph.jsx */ "./client/components/Graph.jsx");
/* harmony import */ var _EntryField_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EntryField.jsx */ "./client/components/EntryField.jsx");
/* harmony import */ var _ButtonGrid_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ButtonGrid.jsx */ "./client/components/ButtonGrid.jsx");
/* harmony import */ var _Button_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button.jsx */ "./client/components/Button.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Calculator() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('x'),
      _useState2 = _slicedToArray(_useState, 2),
      currentEquation = _useState2[0],
      setCurrentEquation = _useState2[1];

  var handleEquationChange = function handleEquationChange(event) {
    console.log(event.target.value);
    setCurrentEquation(event.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Graph_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    currentEquation: currentEquation
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EntryField_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    currentEntry: currentEquation,
    onEntryChange: handleEquationChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonGrid_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rows: 1,
    columns: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Submit",
    onclick: function onclick() {}
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonGrid_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}

/***/ }),

/***/ "./client/components/EntryField.jsx":
/*!******************************************!*\
  !*** ./client/components/EntryField.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EntryField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
//     <canvas id="screen" ></canvas>
//     <textarea id="userString" rows="5" cols="85">x</textarea><br/>
//     <button type="button" onClick="graphFunction()">Graph</button>
//     <div id="result"></div><br/>


function EntryField(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    rows: "5",
    cols: "85",
    value: props.currentEntry,
    onChange: props.onEntryChange
  });
}
EntryField.propTypes = {
  currentEntry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onEntryChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./client/components/Graph.jsx":
/*!*************************************!*\
  !*** ./client/components/Graph.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Graph; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _webgl_drawGraph_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl/drawGraph.js */ "./client/webgl/drawGraph.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
//     <canvas id="screen" ></canvas>
//     <textarea id="userString" rows="5" cols="85">x</textarea><br/>
//     <button type="button" onClick="graphFunction()">Graph</button>
//     <div id="result"></div><br/>



function Graph(props) {
  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_webgl_drawGraph_js__WEBPACK_IMPORTED_MODULE_1__["default"])(props.currentEquation, canvasRef.current);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
    width: 500,
    height: 500,
    ref: canvasRef
  });
}
Graph.propTypes = {
  currentEquation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
Graph.defaultProps = {
  currentEquation: ''
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9CdXR0b25HcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9FbnRyeUZpZWxkLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9HcmFwaC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhcnNlci9FeHByZXNzaW9uVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFyc2VyL1Rva2VuLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYXJzZXIvVG9rZW5MaXN0LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYXJzZXIvVG9rZW5UeXBlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYXJzZXIvVHJlZU5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhcnNlci9lcXVhdGlvblBhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFyc2VyL2ltcGxpY2l0LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYXJzZXIvcGFyc2VUcmVlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYXJzZXIvdG9rZW5pemVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYXJzZXIvdmFsaWRhdGVGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvd2ViZ2wvZHJhd0dyYXBoLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQnV0dG9uIiwicHJvcHMiLCJvbmNsaWNrIiwibmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJlIiwicHJldmVudERlZmF1bHQiLCJCdXR0b25HcmlkIiwidGl0bGUiLCJjaGlsZHJlbiIsIm5vZGUiLCJDYWxjdWxhdG9yIiwidXNlU3RhdGUiLCJjdXJyZW50RXF1YXRpb24iLCJzZXRDdXJyZW50RXF1YXRpb24iLCJoYW5kbGVFcXVhdGlvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJFbnRyeUZpZWxkIiwiY3VycmVudEVudHJ5Iiwib25FbnRyeUNoYW5nZSIsIkdyYXBoIiwiY2FudmFzUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZHJhd0dyYXBoIiwiY3VycmVudCIsIkV4cHJlc3Npb25UeXBlIiwiT2JqZWN0IiwiZnJlZXplIiwiRVhQIiwiTUVYUCIsIk5FWFAiLCJFRVhQIiwiUEVYUCIsIlRva2VuIiwidG9rZW4iLCJuZXh0IiwicHJldmlvdXMiLCJ0b2tlblR5cGUiLCJUb2tlblR5cGUiLCJWQUxVRSIsIk9QRU5fUEFSQU5USEVTRVMiLCJDTE9TRV9QQVJBTlRIRVNFUyIsIkFERElUSU9OIiwiTkVHQVRJT04iLCJNVUxUSVBMSUNBVElPTiIsIlBPV0VSIiwiRV9PUEVOX1BBUkFOVEhFU0VTIiwic3Vic3RyIiwiVG9rZW5MaXN0IiwiaGVhZCIsInRhaWwiLCJUcmVlTm9kZSIsImxlZnRDaGlsZCIsInJpZ2h0Q2hpbGQiLCJwYXJlbnQiLCJwcm9jZXNzRnVuY3Rpb24iLCJpbXBsaWNpdEFkZGVkRnVuYyIsInByb2Nlc3NJbXBsaWNpdCIsInRyZWUiLCJjcmVhdGVQYXJzZVRyZWUiLCJldmFsdWF0ZUZ1bmN0aW9uIiwieCIsIk51bWJlciIsIm51bWVyYXRvciIsImRlbm9taW5hdG9yIiwidW5kZWZpbmVkIiwiSW5maW5pdHkiLCJNYXRoIiwicG93IiwiY29zIiwic2luIiwidGFuIiwiYWNvcyIsImFzaW4iLCJhdGFuIiwibG9nMTAiLCJFIiwiUEkiLCJydW5JbXBsaWNpdEZ1bmN0aW9ucyIsImlucHV0IiwiaGFuZGxlSW1wbGljaXRBZGRpdGlvbiIsImhhbmRsZUltcGxpY2l0TXVsdGlwbGljYXRpb24iLCJyZW1vdmVXaGl0ZXNwYWNlIiwicmVwbGFjZSIsImNyZWF0ZVBhcnNlVHJlZU5vZGVzIiwicm9vdCIsImV4cHJlc3Npb25UeXBlIiwic3RhcnRUb2tlbiIsImVuZFRva2VuIiwiYVRva2VuIiwiZmluZFNwbGl0VG9rZW4iLCJjcmVhdGVMZWZ0Q2hpbGQiLCJjcmVhdGVSaWdodENoaWxkIiwibVRva2VuIiwiZVRva2VuIiwiZmluZEVFWFBTcGxpdFRva2VuIiwidG9rZW5MaXN0IiwidG9rZW5pemUiLCJwcmludFBhcnNlVHJlZSIsInRva2VuUmV0cmlldmVyIiwibGVuZ3RoIiwibWF0Y2hlZFN0cmluZyIsInNhdmVkVG9rZW4iLCJhZGQiLCJlcnJvciIsImN1cnJlbnRUb2tlbiIsImNsb3NlUGFyYW50aGVzZXMiLCJ0ZXJtaW5hbExpc3QiLCJtYXAiLCJTIiwiJCIsIkEiLCJUIiwiQiIsIlIiLCJ2YWxpZGF0ZVByb3BlckZ1bmN0aW9uIiwicmVnZXhDb252ZXJ0IiwiaW52YWxpZENoYXJhY3RlcnMiLCJzZWFyY2giLCJpc1ZhbGlkRnVuY3Rpb24iLCJudW1iZXJSZW1vdmVyIiwibmVnYXRpdmVSZW1vdmVyIiwiZW5oYW5jZWRQYXJhbnRoZXNlc1JlbW92ZXIiLCJjaGFyU3RhY2siLCJwb2ludCIsImZhaWxlZCIsImN1cnJlbnRFbGVtIiwicG9wIiwiaW5jbHVkZXMiLCJmb3JFYWNoIiwiYyIsInB1c2giLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJwdXJwbGVGcmFnbWVudFNoYWRlclNvdXJjZSIsImF4aXNTaGFkZXIiLCJtYWtlU2hhZGVyIiwiZ2wiLCJ0eXBlIiwic291cmNlIiwic2hhZGVyIiwiY3JlYXRlU2hhZGVyIiwic2hhZGVyU291cmNlIiwiY29tcGlsZVNoYWRlciIsImdldFNoYWRlclBhcmFtZXRlciIsIkNPTVBJTEVfU1RBVFVTIiwiZ2V0U2hhZGVySW5mb0xvZyIsImRlbGV0ZVNoYWRlciIsIm1ha2VQcm9ncmFtIiwidmVydGV4U291cmNlIiwiZnJhZ21lbnRTb3VyY2UiLCJ2ZXJ0ZXhTaGFkZXIiLCJWRVJURVhfU0hBREVSIiwiZnJhZ21lbnRTaGFkZXIiLCJGUkFHTUVOVF9TSEFERVIiLCJwcm9ncmFtIiwiY3JlYXRlUHJvZ3JhbSIsImF0dGFjaFNoYWRlciIsImxpbmtQcm9ncmFtIiwiZ2V0UHJvZ3JhbVBhcmFtZXRlciIsIkxJTktfU1RBVFVTIiwiZ2V0UHJvZ3JhbUluZm9Mb2ciLCJkZWxldGVQcm9ncmFtIiwiZHJhdyIsImRyYXdXaW5kb3ciLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsInZpZXdwb3J0IiwiY2xlYXJDb2xvciIsImNsZWFyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIkRFUFRIX0JVRkZFUl9CSVQiLCJheGlzQnVmZmVyIiwiY3JlYXRlQXhpc2VzIiwidGlja01hcmtCdWZmZXIiLCJjcmVhdGVUaWNrTWFya3MiLCJwb2x5bm9taWFsQnVmZmVyIiwiY3JlYXRlUG9seW5vbWlhbCIsImRyYXdMaW5lcyIsImRyYXdMaW5lU3RyaXAiLCJtYWtlU3RhdGljRHJhd0FycmF5QnVmZmVyIiwidmVydGljZUFycmF5IiwibnVtVmVydGljZXMiLCJidWZmZXIiLCJjcmVhdGVCdWZmZXIiLCJiaW5kQnVmZmVyIiwiQVJSQVlfQlVGRkVSIiwiYnVmZmVyRGF0YSIsIkZsb2F0MzJBcnJheSIsIlNUQVRJQ19EUkFXIiwiZGF0YSIsInhpIiwieWkiLCJudW1YIiwibnVtWSIsImkiLCJqIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJwb3NpdGlvbiIsImdldEF0dHJpYkxvY2F0aW9uIiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJ1c2VQcm9ncmFtIiwiZHJhd0FycmF5cyIsIkxJTkVTIiwiTElORV9TVFJJUCIsImdyYXBo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LElBQUUsQ0FBQ21ELFVBQUgsQ0FBY25ELEVBQUUsQ0FBQ29ELFlBQWpCLEVBQStCSSxJQUFJLENBQUNQLE1BQXBDO0FBRUEsTUFBTWUsUUFBUSxHQUFHaEUsRUFBRSxDQUFDaUUsaUJBQUgsQ0FBcUIvQyxPQUFyQixFQUE4QixVQUE5QixDQUFqQjtBQUNBbEIsSUFBRSxDQUFDa0UsbUJBQUgsQ0FBdUJGLFFBQXZCLEVBQWlDLENBQWpDLEVBQW9DaEUsRUFBRSxDQUFDbUUsS0FBdkMsRUFBOEMsS0FBOUMsRUFBcUQsQ0FBckQsRUFBd0QsQ0FBeEQ7QUFDQW5FLElBQUUsQ0FBQ29FLHVCQUFILENBQTJCSixRQUEzQjtBQUVBaEUsSUFBRSxDQUFDcUUsVUFBSCxDQUFjbkQsT0FBZDtBQUVBbEIsSUFBRSxDQUFDc0UsVUFBSCxDQUFjdEUsRUFBRSxDQUFDd0UsVUFBakIsRUFBNkIsQ0FBN0IsRUFBZ0NoQixJQUFJLENBQUNSLFdBQXJDO0FBQ0Q7QUFFRDs7Ozs7QUFHQSxTQUFTeUIsYUFBVCxDQUF3QmpOLElBQXhCLEVBQThCbUssVUFBOUIsRUFBMEM7QUFDeEMsTUFBSTtBQUNGLFFBQU16RyxJQUFJLEdBQUdILGlGQUFlLENBQUN2RCxJQUFELENBQTVCOztBQUNBLFFBQUkwRCxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQndHLFVBQUksQ0FBQ3hHLElBQUQsRUFBT3lHLFVBQVAsQ0FBSjtBQUNEO0FBQ0YsR0FMRCxDQUtFLE9BQU9qSyxDQUFQLEVBQVU7QUFDVmhCLFdBQU8sQ0FBQ3NILEtBQVIscUNBQTJDeEcsSUFBM0MsOEJBQW1FbUssVUFBbkU7QUFDQWpMLFdBQU8sQ0FBQ3NILEtBQVIsQ0FBY3RHLENBQWQ7QUFDRDtBQUNGOztBQUVjK00sNEVBQWYsRSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vY2xpZW50L2NhbGN1bGF0b3IuanNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBMb2FkIFJlYWN0IGxpYnJhcmllc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcblxuLy8gTG9hZCBjb21wb25lbnRcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzeCdcblxuY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTk9ERV9FTlYpXG5cbi8vIFJlbmRlcmluZyB0aGUgY29tcG9uZW50IGludG8gdGhlIHBhZ2VcblJlYWN0RE9NLnJlbmRlcihcbiAgPENhbGN1bGF0b3IgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbilcbiIsIi8vICAgICA8Y2FudmFzIGlkPVwic2NyZWVuXCIgPjwvY2FudmFzPlxuLy8gICAgIDx0ZXh0YXJlYSBpZD1cInVzZXJTdHJpbmdcIiByb3dzPVwiNVwiIGNvbHM9XCI4NVwiPng8L3RleHRhcmVhPjxici8+XG4vLyAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz1cImdyYXBoRnVuY3Rpb24oKVwiPkdyYXBoPC9idXR0b24+XG4vLyAgICAgPGRpdiBpZD1cInJlc3VsdFwiPjwvZGl2Pjxici8+XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uIChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uY2xpY2t9Pntwcm9wcy5uYW1lfTwvYnV0dG9uPlxuICApXG59XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uY2xpY2s6IFByb3BUeXBlcy5mdW5jXG59XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIG5hbWU6ICcnLFxuICBvbmNsaWNrOiAoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCkgfVxufVxuIiwiLy8gICAgIDxjYW52YXMgaWQ9XCJzY3JlZW5cIiA+PC9jYW52YXM+XG4vLyAgICAgPHRleHRhcmVhIGlkPVwidXNlclN0cmluZ1wiIHJvd3M9XCI1XCIgY29scz1cIjg1XCI+eDwvdGV4dGFyZWE+PGJyLz5cbi8vICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPVwiZ3JhcGhGdW5jdGlvbigpXCI+R3JhcGg8L2J1dHRvbj5cbi8vICAgICA8ZGl2IGlkPVwicmVzdWx0XCI+PC9kaXY+PGJyLz5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25HcmlkICgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PjwvZGl2PlxuICApXG59XG5cbkJ1dHRvbkdyaWQucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59XG5cbkJ1dHRvbkdyaWQuZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogJ0Jhbm5lciBUaXRsZSdcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgR3JhcGggZnJvbSAnLi9HcmFwaC5qc3gnXG5pbXBvcnQgRW50cnlGaWVsZCBmcm9tICcuL0VudHJ5RmllbGQuanN4J1xuaW1wb3J0IEJ1dHRvbkdyaWQgZnJvbSAnLi9CdXR0b25HcmlkLmpzeCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24uanN4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxjdWxhdG9yICgpIHtcbiAgY29uc3QgW2N1cnJlbnRFcXVhdGlvbiwgc2V0Q3VycmVudEVxdWF0aW9uXSA9IHVzZVN0YXRlKCd4JylcblxuICBjb25zdCBoYW5kbGVFcXVhdGlvbkNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICBzZXRDdXJyZW50RXF1YXRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEdyYXBoIGN1cnJlbnRFcXVhdGlvbj17Y3VycmVudEVxdWF0aW9ufS8+XG4gICAgICA8RW50cnlGaWVsZCBjdXJyZW50RW50cnk9e2N1cnJlbnRFcXVhdGlvbn0gb25FbnRyeUNoYW5nZT17aGFuZGxlRXF1YXRpb25DaGFuZ2V9IC8+PGJyIC8+XG4gICAgICA8QnV0dG9uR3JpZCByb3dzPXsxfSBjb2x1bW5zPXsxfSA+XG4gICAgICAgIDxCdXR0b24gbmFtZT0nU3VibWl0JyBvbmNsaWNrPXsoKSA9PiB7fX0+PC9CdXR0b24+XG4gICAgICA8L0J1dHRvbkdyaWQ+XG4gICAgICA8QnV0dG9uR3JpZD48L0J1dHRvbkdyaWQ+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIi8vICAgICA8Y2FudmFzIGlkPVwic2NyZWVuXCIgPjwvY2FudmFzPlxuLy8gICAgIDx0ZXh0YXJlYSBpZD1cInVzZXJTdHJpbmdcIiByb3dzPVwiNVwiIGNvbHM9XCI4NVwiPng8L3RleHRhcmVhPjxici8+XG4vLyAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz1cImdyYXBoRnVuY3Rpb24oKVwiPkdyYXBoPC9idXR0b24+XG4vLyAgICAgPGRpdiBpZD1cInJlc3VsdFwiPjwvZGl2Pjxici8+XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRW50cnlGaWVsZCAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8dGV4dGFyZWEgcm93cz1cIjVcIiBjb2xzPVwiODVcIiB2YWx1ZT17cHJvcHMuY3VycmVudEVudHJ5fSBvbkNoYW5nZT17cHJvcHMub25FbnRyeUNoYW5nZX0+PC90ZXh0YXJlYT5cbiAgKVxufVxuXG5FbnRyeUZpZWxkLnByb3BUeXBlcyA9IHtcbiAgY3VycmVudEVudHJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkVudHJ5Q2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xufVxuIiwiLy8gICAgIDxjYW52YXMgaWQ9XCJzY3JlZW5cIiA+PC9jYW52YXM+XG4vLyAgICAgPHRleHRhcmVhIGlkPVwidXNlclN0cmluZ1wiIHJvd3M9XCI1XCIgY29scz1cIjg1XCI+eDwvdGV4dGFyZWE+PGJyLz5cbi8vICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPVwiZ3JhcGhGdW5jdGlvbigpXCI+R3JhcGg8L2J1dHRvbj5cbi8vICAgICA8ZGl2IGlkPVwicmVzdWx0XCI+PC9kaXY+PGJyLz5cblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZHJhd0dyYXBoIGZyb20gJy4uL3dlYmdsL2RyYXdHcmFwaC5qcydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JhcGggKHByb3BzKSB7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZHJhd0dyYXBoKHByb3BzLmN1cnJlbnRFcXVhdGlvbiwgY2FudmFzUmVmLmN1cnJlbnQpXG4gIH0pXG5cbiAgcmV0dXJuIDxjYW52YXMgd2lkdGg9ezUwMH0gaGVpZ2h0PXs1MDB9IHJlZj17IGNhbnZhc1JlZiB9PjwvY2FudmFzPlxufVxuXG5HcmFwaC5wcm9wVHlwZXMgPSB7XG4gIGN1cnJlbnRFcXVhdGlvbjogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5HcmFwaC5kZWZhdWx0UHJvcHMgPSB7XG4gIGN1cnJlbnRFcXVhdGlvbjogJydcbn1cbiIsIi8qKlxuICogRW51bSB0byBob2xkIGFuIGV4cHJlc3Npb24gdHlwZS4gVXNlZCBmb3IgdHVybmluZyBhIGZ1bmN0aW9uIHN0cmluZyBpbnRvIGEgdHJlZS5cbiAqIENhbiBiZSBFWFAgKEV4cHJlc3Npb24pLCBNRVhQIChNdWx0aXBsaWNhdGlvbiBFeHByZXNzaW9uKSwgb3IgUEVYUCAoUGFyYW50aGVzZXMgRXhwcmVzc2lvbikuXG4gKi9cbmNvbnN0IEV4cHJlc3Npb25UeXBlID0gT2JqZWN0LmZyZWV6ZSh7XG4gIEVYUDogMSxcbiAgTUVYUDogMixcbiAgTkVYUDogMyxcbiAgRUVYUDogNCxcbiAgUEVYUDogNVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRXhwcmVzc2lvblR5cGVcbiIsImltcG9ydCBUb2tlblR5cGUgZnJvbSAnLi9Ub2tlblR5cGUuanMnXG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgdG9rZW4gaW4gYSBmdW5jdGlvbi4gU3VwcG9ydHMgKCwgKSwgKywgLSwgKiwgLy4gRXZlcnl0aGluZyBlbHNlIGRlZmF1bHRzIHRvIHZhbHVlcy5cbiAqIENvbnRhaW5zIHByb3BlcnRpZXMgbmV4dCwgcHJldmlvdXMsIHZhbHVlLCBhbmQgdG9rZW5UeXBlLiBQcmV2aW91cyBhbmQgbmV4dCBhcmUgdXNlZCB0byBwb2ludCB0byB0aGUgbmV4dFxuICogYW5kIHByZXZpb3VzIHZhbHVlcyBpbiBhIGxpc3Qgb2YgdG9rZW5zLCB3aGlsZSB2YWx1ZSBjb250YWlucyB0aGUgdG9rZW4gZGF0YS4gVGhlIHRva2VuVHlwZSBpcyBhIFRva2VuVHlwZVxuICogdmFyaWFibGUgdGhhdCBpcyBzZXQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgVG9rZW5UeXBlIHZhbHVlIGRlcGVuZGluZyBvbiB0aGUgdG9rZW4gdmFsdWUuIEl0IGlzIHNldCB0b1xuICogVG9rZW5UeXBlLlZBTFVFIGFzIGEgZGVmYXVsdC5cbiAqL1xuY2xhc3MgVG9rZW4ge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgbmV4dCBhbmQgcHJldmlvdXMgdG8gbnVsbCwgdmFsdWUgdG8gdG9rZW4sIGFuZCB0b2tlblR5cGUgdG8gdGhlIGNvcnJlY3QgVG9rZW5UeXBlIHZhbHVlIGZvclxuICAgKiB0aGUgdG9rZW4uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b2tlbiBUaGUgdG9rZW4gdG8gc2V0IHRoZSB2YWx1ZSBwcm9wZXJ0eSB0byBhbmQgdGhhdCBpcyB1c2VkIHRvIGRldGVybWluZSB0aGUgdG9rZW5UeXBlLlxuICAgKi9cbiAgY29uc3RydWN0b3IgKHRva2VuKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRva2VuXG4gICAgdGhpcy5uZXh0ID0gbnVsbFxuICAgIHRoaXMucHJldmlvdXMgPSBudWxsXG4gICAgdGhpcy50b2tlblR5cGUgPSBUb2tlblR5cGUuVkFMVUVcblxuICAgIGlmICh0b2tlbiA9PT0gJygnKSB7XG4gICAgICB0aGlzLnRva2VuVHlwZSA9IFRva2VuVHlwZS5PUEVOX1BBUkFOVEhFU0VTXG4gICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJyknKSB7XG4gICAgICB0aGlzLnRva2VuVHlwZSA9IFRva2VuVHlwZS5DTE9TRV9QQVJBTlRIRVNFU1xuICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICcrJykge1xuICAgICAgdGhpcy50b2tlblR5cGUgPSBUb2tlblR5cGUuQURESVRJT05cbiAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnLScpIHtcbiAgICAgIHRoaXMudG9rZW5UeXBlID0gVG9rZW5UeXBlLk5FR0FUSU9OXG4gICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJyonIHx8IHRva2VuID09PSAnLycpIHtcbiAgICAgIHRoaXMudG9rZW5UeXBlID0gVG9rZW5UeXBlLk1VTFRJUExJQ0FUSU9OXG4gICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ14nKSB7XG4gICAgICB0aGlzLnRva2VuVHlwZSA9IFRva2VuVHlwZS5QT1dFUlxuICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICdjb3MoJyB8fCB0b2tlbiA9PT0gJ3NpbignIHx8IHRva2VuID09PSAndGFuKCcgfHwgdG9rZW4gPT09ICdhY29zKCcgfHwgdG9rZW4gPT09ICdhc2luKCcgfHxcbiAgICAgICAgICAgICAgICB0b2tlbiA9PT0gJ2F0YW4oJyB8fCB0b2tlbiA9PT0gJ2xvZygnIHx8IHRva2VuID09PSAnbG4oJykge1xuICAgICAgdGhpcy50b2tlblR5cGUgPSBUb2tlblR5cGUuRV9PUEVOX1BBUkFOVEhFU0VTXG4gICAgICB0aGlzLnZhbHVlID0gdG9rZW4uc3Vic3RyKDAsIDIpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRva2VuXG4iLCIvKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIHRva2VuIGxpc3QsIGNvbnRhaW5pbmcgcHJvcGVydGllcyBob2xkaW5nIHRoZSBoZWFkIGFuZCB0aGUgdGFpbCBhbmQgYSBmdW5jdGlvbiB0b1xuICogYWRkIGEgbmV3IHRva2VuLiBFYWNoIHRva2VuIGluIHRoZSBsaXN0IG11c3QgaGF2ZSBwcmV2aW91cyBhbmQgbmV4dCBwcm9wZXJ0aWVzLlxuICovXG5jbGFzcyBUb2tlbkxpc3Qge1xuICAvKipcbiAgICAgKiBJbml0aXRpYWxpemVzIHRoZSBoZWFkIGFuZCB0YWlsIHByb3BlcnRpZXMgdG8gbnVsbC5cbiAgICAgKi9cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuaGVhZCA9IG51bGxcbiAgICB0aGlzLnRhaWwgPSBudWxsXG4gIH1cblxuICAvKipcbiAgICAgKiBBZGRzIGEgdG9rZW4gdG8gdGhlIGVuZCBvZiB0aGUgVG9rZW5MaXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSB0b2tlbiBBIHRva2VuIHRvIGFkZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LiBNdXN0IGNvbnRhaW4gcHJvcGVydGllcyBuZXh0IGFuZCBwcmV2aW91cy5cbiAgICAgKi9cbiAgYWRkICh0b2tlbikge1xuICAgIGlmICh0aGlzLmhlYWQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5oZWFkID0gdG9rZW5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWlsLm5leHQgPSB0b2tlblxuICAgICAgdG9rZW4ucHJldmlvdXMgPSB0aGlzLnRhaWxcbiAgICB9XG4gICAgdGhpcy50YWlsID0gdG9rZW5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2tlbkxpc3RcbiIsIi8qKlxuICogRW51bSB0byBob2xkIG1hdGhlbWF0aWNhbCB0b2tlbiB0eXBlcy4gQ2FuIGJlIE9QRU5fUEFSTlRIRVNFUywgQ0xPU0VfUEFSQU5USEVTRVMsIFZBTFVFLCBBRERJVElPTiwgb3IgTVVMVElQTElDQVRJT04uXG4gKi9cbmNvbnN0IFRva2VuVHlwZSA9IE9iamVjdC5mcmVlemUoe1xuICBPUEVOX1BBUkFOVEhFU0VTOiAxLFxuICBDTE9TRV9QQVJBTlRIRVNFUzogMixcbiAgVkFMVUU6IDMsXG4gIEFERElUSU9OOiA0LFxuICBNVUxUSVBMSUNBVElPTjogNSxcbiAgTkVHQVRJT046IDYsXG4gIFBPV0VSOiA3LFxuICBFX09QRU5fUEFSQU5USEVTRVM6IDhcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFRva2VuVHlwZVxuIiwiLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBub2RlIG9mIGEgYmluYXJ5IHRyZWUgd2l0aCBhIHRva2VuLiBDb250YWlucyB2YWx1ZSwgbGVmdENoaWxkLCByaWdodENoaWxkLFxuICogYW5kIHBhcmVudCBwcm9wZXJ0aWVzLCBhcyB3ZWxsIGFzIGNyZWF0ZUxlZnRDaGlsZCBhbmQgY3JlYXRlUmlnaHRDaGlsZCBmdW5jdGlvbnMuIExlZnQgY2hpbGQsXG4gKiByaWdodCBjaGlsZCwgYW5kIHBhcmVudCBwcm9wZXJ0aWVzIGFyZSBhdXRvbWF0aWNhbGx5IHNldCBhbmQgc2hvdWxkIHVzdWFsbHkgb25seSBiZSBnb3R0ZW4uXG4gKi9cbmNsYXNzIFRyZWVOb2RlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSB2YWx1ZSwgbGVmdENoaWxkLCByaWdodENoaWxkLCBhbmQgcGFyZW50IHZhcmlhYmxlcyB0byBudWxsLlxuICAgKi9cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMudmFsdWUgPSBudWxsXG4gICAgdGhpcy5sZWZ0Q2hpbGQgPSBudWxsXG4gICAgdGhpcy5yaWdodENoaWxkID0gbnVsbFxuICAgIHRoaXMucGFyZW50ID0gbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgdHJlZSBub2RlIGFuZCBhc3NpZ25zIGl0IHRvIHRoZSBsZWZ0IGNoaWxkIG9mIHRoaXMgdHJlZSBub2RlLlxuICAgKiBTZXRzIHRoZSBuZXcgdHJlZSBub2RlJ3MgcGFyZW50IHRvIHRoaXMgdHJlZSBub2RlLlxuICAgKi9cbiAgY3JlYXRlTGVmdENoaWxkICgpIHtcbiAgICB0aGlzLmxlZnRDaGlsZCA9IG5ldyBUcmVlTm9kZSgpXG4gICAgdGhpcy5sZWZ0Q2hpbGQucGFyZW50ID0gdGhpc1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgdHJlZSBub2RlIGFuZCBhc3NpZ25zIGl0IHRvIHRoZSByaWdodCBjaGlsZCBvZiB0aGlzIHRyZWUgbm9kZS5cbiAgICogU2V0cyB0aGUgbmV3IHRyZWUgbm9kZSdzIHBhcmVudCB0byB0aGlzIHRyZWUgbm9kZS5cbiAgICovXG4gIGNyZWF0ZVJpZ2h0Q2hpbGQgKCkge1xuICAgIHRoaXMucmlnaHRDaGlsZCA9IG5ldyBUcmVlTm9kZSgpXG4gICAgdGhpcy5yaWdodENoaWxkLnBhcmVudCA9IHRoaXNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmVlTm9kZVxuIiwiaW1wb3J0IGNyZWF0ZVBhcnNlVHJlZSBmcm9tICcuL3BhcnNlVHJlZS5qcydcbmltcG9ydCBwcm9jZXNzSW1wbGljaXQgZnJvbSAnLi9pbXBsaWNpdC5qcydcbmltcG9ydCB2YWxpZGF0ZUZ1bmN0aW9uIGZyb20gJy4vdmFsaWRhdGVGdW5jdGlvbi5qcydcblxuLyoqXG4gKiBQcm9jZXNzZXMgYSBzdHJpbmcgY29udGFpbmluZyBhIGZ1bmN0aW9uLiBSZW1vdmVzIHdoaXRlc3BhY2UsIGhhbmRsZXMgaW1wbGljaXQgbXVsdGlwbGljYXRpb24sIGNoZWNrc1xuICogdGhhdCB0aGUgZnVuY3Rpb24gaXMgdmFsaWQsIGFuZCBjb252ZXJ0cyBpdCBpbnRvIGEgZnVuY3Rpb24gcGFyc2UgdHJlZSB0aGF0IGlzIHJldHVybmVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICpcbiAqIEByZXR1cm5zIHtUcmVlTm9kZX0gVGhlIHBhcnNlIHRyZWUgcmVwcmVzZW50aW5nIHRoZSBmdW5jdGlvbiB0aGF0IHdhcyBjcmVhdGVkLiBSZXR1cm5zIG51bGwgaWYgdGhlXG4gKiAgZnVuY3Rpb24gd2FzIGludmFsaWQuXG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NGdW5jdGlvbiAoZnVuYykge1xuICBjb25zb2xlLmxvZygnRW50ZXJpbmcgcHJvY2Vzc0Z1bmN0aW9uJylcbiAgdHJ5IHtcbiAgICBjb25zdCBpbXBsaWNpdEFkZGVkRnVuYyA9IHByb2Nlc3NJbXBsaWNpdChmdW5jKVxuXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpLmlubmVySFRNTCA9IGltcGxpY2l0QWRkZWRGdW5jXG5cbiAgICBsZXQgdHJlZSA9IG51bGxcblxuICAgIC8vICAgaWYgKHZhbGlkYXRlRnVuY3Rpb24oaW1wbGljaXRBZGRlZEZ1bmMpKSB7XG4gICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgZnVuY3Rpb24hJylcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgdHJlZSA9IGNyZWF0ZVBhcnNlVHJlZShpbXBsaWNpdEFkZGVkRnVuYylcblxuICAgIGNvbnNvbGUubG9nKGV2YWx1YXRlRnVuY3Rpb24odHJlZSwgMSkpXG4gICAgLy8gICB9XG5cbiAgICBjb25zb2xlLmxvZygnRXhpdGluZyBwcm9jZXNzRnVuY3Rpb24nKVxuICAgIHJldHVybiB0cmVlXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhgUHJvY2VzcyBmdW5jdGlvbiBmYWlsZWQgZm9yICR7ZnVuY31gKVxuICAgIGNvbnNvbGUubG9nKGUpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICAvLyBjb252ZXJ0IHRvIGxvd2VyY2FzZT8gRGVwZW5kcyBvbiBpZiB3ZSByZXBsYWNlIHRoaW5ncyBsaWtlIGNvcygpIHdpdGggc29tZSB0ZW1wb3JhcnkgdmFyXG59XG5cbi8qKlxuICogRXZhbHVhdGVzIHRoZSB2YWx1ZSBvZiBhIGZ1bmN0aW9uIGluIHRyZWUgZm9ybSBhdCB0aGUgcG9pbnQgeC4gSGFuZGxlcyArLCAtLCAqLCAvLCAoLCApLCB4LCBhbmQgbnVtYmVycy5cbiAqXG4gKiBAcGFyYW0ge1RyZWVOb2RlfSB0cmVlIFRoZSByb290IG5vZGUgb2YgdGhlIGZ1bmN0aW9uIHBhcnNlIHRyZWUgdG8gZXZhbHVhdGUuXG4gKiBAcGFyYW0ge051bWJlcn0geCBUaGUgdmFsdWUgb2YgdGhlIHZhcmlhYmxlIHggaW4gdGhlIGZ1bmN0aW9uLlxuICogQHJldHVybiB7TnVtYmVyfSBmKHgpICh0aGUgYW5zd2VyIHRvIHRoZSBmdW5jdGlvbiBhdCB4KS5cbiAqL1xuZnVuY3Rpb24gZXZhbHVhdGVGdW5jdGlvbiAodHJlZSwgeCkge1xuICAvLyBTaG91bGQgbWFrZSB0aGlzIGludG8gYSBzd2l0Y2hcbiAgaWYgKHRyZWUudmFsdWUgPT09ICcqJykge1xuICAgIHJldHVybiBOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLmxlZnRDaGlsZCwgeCkpICogTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5yaWdodENoaWxkLCB4KSlcbiAgfSBlbHNlIGlmICh0cmVlLnZhbHVlID09PSAnLycpIHtcbiAgICBjb25zdCBudW1lcmF0b3IgPSBOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLmxlZnRDaGlsZCwgeCkpXG4gICAgY29uc3QgZGVub21pbmF0b3IgPSBOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLnJpZ2h0Q2hpbGQsIHgpKVxuICAgIGlmIChkZW5vbWluYXRvciA9PT0gMCkge1xuICAgICAgaWYgKG51bWVyYXRvciA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgICByZXR1cm4gSW5maW5pdHkgKiBudW1lcmF0b3JcbiAgICB9XG4gICAgcmV0dXJuIG51bWVyYXRvciAvIGRlbm9taW5hdG9yXG4gIH0gZWxzZSBpZiAodHJlZS52YWx1ZSA9PT0gJysnKSB7XG4gICAgcmV0dXJuIE51bWJlcihldmFsdWF0ZUZ1bmN0aW9uKHRyZWUubGVmdENoaWxkLCB4KSkgKyBOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLnJpZ2h0Q2hpbGQsIHgpKVxuICB9IGVsc2UgaWYgKHRyZWUudmFsdWUgPT09ICctJykge1xuICAgIHJldHVybiAtMSAqIE51bWJlcihldmFsdWF0ZUZ1bmN0aW9uKHRyZWUucmlnaHRDaGlsZCwgeCkpIC8vIE51bWJlcihldmFsdWF0ZUZ1bmN0aW9uKHRyZWUubGVmdENoaWxkLCB4KSlcbiAgfSBlbHNlIGlmICh0cmVlLnZhbHVlID09PSAnXicpIHtcbiAgICByZXR1cm4gTWF0aC5wb3coTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5sZWZ0Q2hpbGQsIHgpKSwgTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5yaWdodENoaWxkLCB4KSkpXG4gIH0gZWxzZSBpZiAodHJlZS52YWx1ZSA9PT0gJ2NvJykge1xuICAgIHJldHVybiBNYXRoLmNvcyhOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLnJpZ2h0Q2hpbGQsIHgpKSlcbiAgfSBlbHNlIGlmICh0cmVlLnZhbHVlID09PSAnc2knKSB7XG4gICAgcmV0dXJuIE1hdGguc2luKE51bWJlcihldmFsdWF0ZUZ1bmN0aW9uKHRyZWUucmlnaHRDaGlsZCwgeCkpKVxuICB9IGVsc2UgaWYgKHRyZWUudmFsdWUgPT09ICd0YScpIHtcbiAgICByZXR1cm4gTWF0aC50YW4oTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5yaWdodENoaWxkLCB4KSkpXG4gIH0gZWxzZSBpZiAodHJlZS52YWx1ZSA9PT0gJ2FjJykge1xuICAgIHJldHVybiBNYXRoLmFjb3MoTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5yaWdodENoaWxkLCB4KSkpXG4gIH0gZWxzZSBpZiAodHJlZS52YWx1ZSA9PT0gJ2FzJykge1xuICAgIHJldHVybiBNYXRoLmFzaW4oTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5yaWdodENoaWxkLCB4KSkpXG4gIH0gZWxzZSBpZiAodHJlZS52YWx1ZSA9PT0gJ2F0Jykge1xuICAgIHJldHVybiBNYXRoLmF0YW4oTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5yaWdodENoaWxkLCB4KSkpXG4gIH0gZWxzZSBpZiAodHJlZS52YWx1ZSA9PT0gJ2xuJykge1xuICAgIHJldHVybiBNYXRoLmxvZyhOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLnJpZ2h0Q2hpbGQsIHgpKSlcbiAgfSBlbHNlIGlmICh0cmVlLnZhbHVlID09PSAnbG8nKSB7XG4gICAgcmV0dXJuIE1hdGgubG9nMTAoTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5yaWdodENoaWxkLCB4KSkpXG4gIH0gZWxzZSB7XG4gICAgaWYgKHRyZWUudmFsdWUgPT09ICd4Jykge1xuICAgICAgcmV0dXJuIHhcbiAgICB9IGVsc2UgaWYgKHRyZWUudmFsdWUgPT09ICdlJykge1xuICAgICAgcmV0dXJuIE1hdGguRVxuICAgIH0gZWxzZSBpZiAodHJlZS52YWx1ZSA9PT0gJ3BpJykge1xuICAgICAgcmV0dXJuIE1hdGguUElcbiAgICB9XG5cbiAgICByZXR1cm4gdHJlZS52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIHByb2Nlc3NGdW5jdGlvbixcbiAgZXZhbHVhdGVGdW5jdGlvblxufVxuLy8gTkVYVCBTVEVQUzpcbi8vIFJlZG8gZG9jdW1lbnRhdGlvbiBmb3IgbmVnYXRpdmUgbnVtYmVycyBhbmQgcG93ZXJzXG4vLyBJbXBsZW1lbnQgcG93ZXJzIGludG8gdmFsaWRhdGVQcm9wZXJGdW5jdGlvblxuLy8gV3JpdGUgZG9jdW1lbnRhdGlvbiBmb3IgdmFsaWRhdGVQcm9wZXJGdW5jdGlvblxuLy8gSW1wbGVtZW50IG1vcmUgdHJpZ29ub21ldHJ5XG4vLyBJbXBsZW1lbnQgLm51bWJlclxuLy8gRW5oYW5jZSBncmFwaGluZyB3aGVuIGZhciBlbm91Z2ggaW4gY2xhc3Ncbi8vIEltcGxlbWVudCBhYnNvbHV0ZSB2YWx1ZVxuLy8gSW1wbGVtZW50IGZsb29yIGFuZCBjZWlsaW5nP1xuLy8gSW1wbGVtZW50IGh5cGVyYm9saWNzP1xuLy8gSW1wbGVtZW50IHNxcnQ/XG4iLCIvKipcbiAqIFJ1bnMgdGhlIG90aGVyIGZ1bmN0aW9ucyBpbiBpbXBsaWNpdC5qcyBvbiBhIHN0cmluZy4gUmVtb3ZlcyB3aGl0ZXNwYWNlIGFuZCB0aGVuIGFkZHMgYWRkaXRpb24vbXVsdGlwbGljYXRpb24gc3ltYm9sc1xuICogd2hlcmV2ZXIgaW1wbGljaXQgYWRkaXRpb24vbXVsdGlwbGljYXRpb24gb2NjdXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIHRvIHByb2Nlc3NcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcHJvY2Vzc2VkIHN0cmluZ1xuICovXG5mdW5jdGlvbiBydW5JbXBsaWNpdEZ1bmN0aW9ucyAoaW5wdXQpIHtcbiAgcmV0dXJuIGhhbmRsZUltcGxpY2l0QWRkaXRpb24oaGFuZGxlSW1wbGljaXRNdWx0aXBsaWNhdGlvbihyZW1vdmVXaGl0ZXNwYWNlKGlucHV0KSkpXG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgd2hpdGVzcGFjZSBmcm9tIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIHRvIHJlbW92ZSB3aGl0ZXNwYWNlIGZyb20uXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHN0cmluZyB3aXRoIGFsbCB3aGl0ZXNwYWNlIHJlbW92ZWQuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZVdoaXRlc3BhY2UgKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXHMrL2csICcnKVxufVxuXG4vKipcbiAqIEFkZHMgbXVsdGlwbGljYXRpb24gc3ltYm9scyB0byBhIHN0cmluZyBjb250YWluaW5nIGEgZnVuY3Rpb24gd2hlcmV2ZXIgaW1wbGljaXQgbXVsdGlwbGljYXRpb24gb2NjdXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmdW5jIEEgZnVuY3Rpb24gKHdpdGggbm8gd2hpdGVzcGFjZSkgdG8gYWRkIG11bHRpcGxpY2F0aW9uIHN5bWJvbHMgdG8uXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZ1bmN0aW9uIHdpdGggbXVsdGlwbGljYXRpb24gc3ltYm9scyBhZGRlZCB3aGVyZXZlciBpbXBsaWNpdCBtdWx0aXBsaWNhdGlvbiBvY2N1cmVkLlxuICovXG5mdW5jdGlvbiBoYW5kbGVJbXBsaWNpdE11bHRpcGxpY2F0aW9uIChmdW5jKSB7XG4gIHJldHVybiBmdW5jLnJlcGxhY2UoLyhcXCl8eHxwaXxlfFxcZCg/PVxcRCkpKD89XFwofHh8XFxkfGN8c3x0fGF8cHxlfGwpL2csICckMSonKVxufVxuXG4vKipcbiAqIEFkZHMgYWRkaXRpb24gc3ltYm9scyB0byBhIHN0cmluZyBjb250YWluaW5nIGEgZnVuY3Rpb24gd2hlcmV2ZXIgXCJpbXBsaWNpdCBhZGRpdGlvblwiIG9jY3Vycy4gXCJJbXBsaWNpdCBhZGRpdGlvblwiIGlzXG4gKiBkZWZpbmVkIGFzIHN1YnRyYWN0aW9uIG9mIGFuIGV4cHJlc3Npb24sIHdoZXJlIHdoYXQgaXMgaGFwcGVuaW5nIGlzIGFkZGl0aW9uIG9mIGEgbmVnYXRpdmUgZXhwcmVzc2lvbi5cbiAqIEV4OiAxMC0zIHdpbGwgYmUgcmV3cml0dGVuIGFzIDEwKy0zIGFuZCAoeCsxMCktKHgrMykgd2lsbCBiZSByZXdyaXR0ZW4gYXMgKHgrMTApKy0oeCszKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZnVuYyBBIGZ1bmN0aW9uICh3aXRoIG5vIHdoaXRlc3BhY2UpIHRvIGFkZCBhZGRpdGlvbiBzeW1ib2xzIHRvLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmdW5jdGlvbiB3aXRoIGFkZGl0aW9uIHN5bWJvbHMgYWRkZWQgd2hlcmV2ZXIgaW1wbGljaXQgYWRkaXRpb24gb2NjdXJlZC5cbiAqL1xuZnVuY3Rpb24gaGFuZGxlSW1wbGljaXRBZGRpdGlvbiAoZnVuYykge1xuICByZXR1cm4gZnVuYy5yZXBsYWNlKC8oW15cXC0oKi8rXl0pLS9nLCAnJDErLScpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJ1bkltcGxpY2l0RnVuY3Rpb25zXG4iLCJpbXBvcnQgeyB0b2tlbml6ZSwgZmluZEVFWFBTcGxpdFRva2VuLCBmaW5kU3BsaXRUb2tlbiB9IGZyb20gJy4vdG9rZW5pemVyLmpzJ1xuaW1wb3J0IEV4cHJlc3Npb25UeXBlIGZyb20gJy4vRXhwcmVzc2lvblR5cGUuanMnXG5pbXBvcnQgVG9rZW5UeXBlIGZyb20gJy4vVG9rZW5UeXBlLmpzJ1xuaW1wb3J0IFRyZWVOb2RlIGZyb20gJy4vVHJlZU5vZGUuanMnXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlIHRyZWUgZm9yIGEgdG9rZW5pemVkIGZ1bmN0aW9uLiBJdCBzaG91bGQgYmUgcmVhZCBmcm9tIHRoZSBib3R0b20tbGVmdCB0byB0aGUgdG9wLXJpZ2h0LlxuICpcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHJvb3QgVGhlIHJvb3Qgb2YgdGhlIHRyZWUgdG8gYWRkIHRoZSBub2RlcyB0by5cbiAqIEBwYXJhbSB7RXhwcmVzc2lvblR5cGV9IGV4cHJlc3Npb25UeXBlIFRoZSB0eXBlIG9mIGV4cHJlc3Npb24uIFVzdWFsbHkgRXhwcmVzc2lvblR5cGUuRVhQLlxuICogQHBhcmFtIHtUb2tlbn0gc3RhcnQgVGhlIGZpcnN0IHRva2VuIGluIHRoZSB0b2tlbiBsaXN0IHRvIHBhcnNlLiBTaG91bGQgcHJvYmFibHkgYmUgVG9rZW5MaXN0LmhlYWQuXG4gKiBAcGFyYW0ge1Rva2VufSBlbmQgVGhlIGZpbmFsIHRva2VuIGluIHRoZSB0b2tlbiBsaXN0IHRvIHBhcnNlLiBTaG91bGQgcHJvYmFibHkgYmUgVG9rZW5MaXN0LnRhaWwuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBhcnNlVHJlZU5vZGVzIChyb290LCBleHByZXNzaW9uVHlwZSwgc3RhcnRUb2tlbiwgZW5kVG9rZW4pIHtcbiAgLypcbiAgICBBbGdvcml0aG0gaW5mb3JtYXRpb246XG5cbiAgICBUaGlzIGFsZ29yaXRobSByZWxpZXMgb24gdGhlIGZvbGxvd2luZyBCYWNrdXMtTmF1ciBmb3JtIChCTkYpIGNvbnRleHQgZnJlZSBncmFtbWFyOlxuICAgIDxFWFA+IDo6PSA8RVhQPis8TUVYUD4gfCA8RVhQPi08TUVYUD4gfCA8TUVYUD5cbiAgICA8TUVYUD4gOjo9IDxNRVhQPio8UEVYUD4gfCA8TUVYUD4vPFBFWFA+IHwgPFBFWFA+XG4gICAgPFBFWFA+IDo6PSAoPEVYUD4pIHwgPE5VTUJFUj5cbiAgICA8TlVNQkVSPiA6Oj0gYW55IG51bWJlciBvciB2YXJpYWJsZVxuICAgIE5vdGU6IEVYUCBzdGFuZHMgZm9yIGV4cHJlc3Npb24sIE1FWFAgc3RhbmRzIGZvciBtdWx0aXBsaWNhdGlvbiBleHByZXNzaW9uLCBhbmQgPFBFWFA+IHN0YW5kc1xuICAgIGZvciBwYXJhbnRoZXNlcyBleHByZXNzaW9uLlxuXG4gICAgSXQgaW1wbGVtZW50cyB0aGlzIGJ5IHN0YXJ0aW5nIHdpdGggYW4gPEVYUD4sIGFuZCBzZWFyY2hpbmcgdGhlIHRva2VuIGxpc3QgZm9yIHRoZSBsYXN0IG9jY3VyZW5jZVxuICAgIHdoZXJlIHRoZSBwYXJhbnRoZXNlcyBhcmUgYmFsYW5jZWQgYW5kIGEgKyBvciAtIGNoYXJhY3RlciBpcyBmb3VuZCAoSWYgdGhpcyBkb2VzIG5vdCBvY2N1ciwgaXRcbiAgICBzd2l0Y2hlcyB0byBhIDxNRVhQPiBleHByZXNzaW9uIGFuZCBsb29wcykuIE5leHQsIGl0IHNldHMgdGhlIGNoYXJhY3RlciBvZiB0aGUgY3VycmVudCBub2RlIHRvIHRoaXNcbiAgICBjaGFyYWN0ZXIgYW5kIHJlY3Vyc2l2ZWx5IGNhbGxzIHRoZSBmdW5jdGlvbiBvbiB0aGUgbGVmdCBhbmQgcmlnaHQgcG9ydGlvbnMgb2YgdGhlIHRva2VuIGxpc3QgdXNpbmdcbiAgICB0aGUgbGVmdCAoRVhQKSBhbmQgcmlnaHQgKE1FWFApIGNoaWxkcmVuIGFzIHRoZSByb290cy4gRWFjaCA8RVhQPiB0b2tlbiByZXBlYXRzIHRoaXMgcHJvY2Vzcy4gQVxuICAgIDxNRVhQPiBleHByZXNpb24gc2VhcmNoZXMgdGhlIHRva2VuIGxpc3QgZm9yIHRoZSBsYXN0IG9jY3VyZW5jZSB3aGVyZSB0aGUgcGFyYW50aGVzZXMgYXJlIGJhbGFuY2VkXG4gICAgYW5kIGEgKiBvciAvIGNoYXJhY3RlciBpcyBmb3VuZCAoSWYgdGhpcyBkb2VzIG5vdCBvY2N1ciwgaXQgc3dpdGNoZXMgdG8gYSA8UEVYUD4gZXhwcmVzc2lvbiBhbmRcbiAgICBsb29wcykuIE5leHQsIGl0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBjdXJyZW50IG5vZGUgdG8gdGhpcyBcInNwbGl0XCIgdG9rZW4gYW5kIHJlY3Vyc2l2ZWx5IGNhbGxzIHRoZVxuICAgIGZ1bmN0aW9uIG9uIHRoZSBsZWZ0IGFuZCByaWdodCBwb3J0aW9ucyBvZiB0aGUgdG9rZW4gbGlzdCB1c2luZyB0aGUgbGVmdCAoTUVYUCkgYW5kIHJpZ2h0IChQRVhQKSxcbiAgICBjaGlsZHJlbiBhcyB0aGUgcm9vdHMuIEZvciBhIDxQRVhQPiBleHByZXNzaW9uLCBpdCBjaGVja3Mgd2hldGhlciBpdCBpcyBlbmNsb3NlZCBieSBwYXJhbnRoZXNlcy4gSWZcbiAgICBpdCBpcywgaXQgcmVtb3ZlcyB0aG9zZSBwYXJhbnRoZXNlcyBmcm9tIHRoZSB0b2tlbiBsaXN0YW5kIGxvb3BzIGJhY2sgdG8gYW4gPEVYUD4gZXhwcmVzc2lvbi5cbiAgICBPdGhlcndpc2UsIHRoZXJlIGNhbiBvbmx5IGJlIG9uZSB0b2tlbiBsZWZ0IGluIHRoZSBsaXN0IGFuZCBpdCBzZXRzIHRoZSB2YWx1ZW9mIHRlIGN1cnJlbnQgbm9kZSB0b1xuICAgIHRoaXMgdG9rZW4uXG5cbiAgICBUaGlzIHdvcmtzIGJlY2F1c2UgZm9yIGFuIDxFWFA+IGV4cHJlc3Npb24sIHRoZSByaWdodCBzaWRlIGlzIG9ubHkgYSA8TUVYUD4gZXhwcmVzc2lvbiBpZiBpdCBjb250YWluc1xuICAgIE5PICsgb3IgLSB0b2tlbiB3aXRoIGJhbGFuY2VkIHBhcmFudGhlc2VzLCBidXQgd2UgbXVzdCBzZWFyY2ggdW50aWwgd2UgZmluZCBvbmUgdG8gbWVldCB0aGVcbiAgICByZXF1aXJlbWVudCAodW5sZXNzIG5vIHRva2VuIGRvZXMsIGluIHdoaWNoIGNhc2Ugd2UganVzdCBzd2l0Y2ggdG8gYSA8TUVYUD4gZXhwcmVzc2lvbiwgYmFzaWNhbGx5XG4gICAgZG9pbmcgdGhlIGVxdWl2YWxlbnQgb2YgaWdub3JpbmcgdGhlIGxlZnQgc2lkZSkuIFRoZSBzYW1lIGlkZWEgaG9sZHMgZm9yIGEgPE1FWFA+IGV4cHJlc3Npb24uIEZvclxuICAgIGEgPFBFWFA+IGV4cHJlc3Npb24sIHdlIGtub3cgdGhhdCB0aGVyZSBhcmUgbm8gKywgLSwgKiwgb3IgLyBzeW1ib2xzIG91dHNpZGUgcGFyYW50aGVzZXMgYnkgdGhlXG4gICAgcHJldmlvdXMgdHdvIHBhcnRzLiBUaHVzLCBlaXRoZXIgd2UgaGF2ZSBhIHNpbmdsZSBjaGFyYWN0ZXIgb3Igc29tZSBleHByZXNzaW9uIHN1cnJvdW5kZWQgYnlcbiAgICBwYXJhbnRoZXNlcy5cbiAgKi9cblxuICAvLyBJdGVyYXRlIHdoaWxlIHdlIGhhdmUgbm90IHNldCB0aGUgcm9vdCB2YWx1ZS5cbiAgd2hpbGUgKHJvb3QudmFsdWUgPT0gbnVsbCkge1xuICAgIGlmIChleHByZXNzaW9uVHlwZSA9PT0gRXhwcmVzc2lvblR5cGUuRVhQKSB7XG4gICAgICAvLyBTZWFyY2ggZm9yIGEgKyBvciAtIHRva2VuIHdpdGggYmFsYW5jZWQgcGFyYW50aGVzZXMuXG4gICAgICBjb25zdCBhVG9rZW4gPSBmaW5kU3BsaXRUb2tlbihleHByZXNzaW9uVHlwZSwgc3RhcnRUb2tlbiwgZW5kVG9rZW4pXG4gICAgICAvLyBJZiBubyBzdWNoIHRva2VuIHdhcyBmb3VuZCwgc3dpdGNoIHRvIGEgTUVYUCBleHByZXNzaW9uIGFuZCBsb29wIGFnYWluICh0aGlzIGhlbHBzIHRvIGtlZXBcbiAgICAgIC8vIHVubmVjY2Vzc2FyeSBub2RlcyBmcm9tIGJ1aWxkaW5nIHVwIHdoaWNoIHdvdWxkIGhhcHBlbiB3aXRoIGEgcmVjdXJzaXZlIGNhbGwgaW4gdGhpcyBzaXR1YXRpb24pLlxuICAgICAgaWYgKGFUb2tlbiA9PSBudWxsKSB7XG4gICAgICAgIGV4cHJlc3Npb25UeXBlID0gRXhwcmVzc2lvblR5cGUuTUVYUFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgcmVwZWF0IHRoaXMgcHJvY2VzcyBmb3IgdGhlIGxlZnQgYW5kIHJpZ2h0IGNoaWxkcmVuIGFuZCBzZXQgdGhlIHRva2VuIHRvIHRoZSBzcGxpdCB0b2tlbi5cbiAgICAgICAgcm9vdC5jcmVhdGVMZWZ0Q2hpbGQoKVxuICAgICAgICByb290LmNyZWF0ZVJpZ2h0Q2hpbGQoKVxuICAgICAgICBjcmVhdGVQYXJzZVRyZWVOb2Rlcyhyb290LmxlZnRDaGlsZCwgRXhwcmVzc2lvblR5cGUuRVhQLCBzdGFydFRva2VuLCBhVG9rZW4ucHJldmlvdXMpXG4gICAgICAgIGNyZWF0ZVBhcnNlVHJlZU5vZGVzKHJvb3QucmlnaHRDaGlsZCwgRXhwcmVzc2lvblR5cGUuTUVYUCwgYVRva2VuLm5leHQsIGVuZFRva2VuKVxuICAgICAgICByb290LnZhbHVlID0gYVRva2VuLnZhbHVlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXhwcmVzc2lvblR5cGUgPT09IEV4cHJlc3Npb25UeXBlLk1FWFApIHtcbiAgICAgIC8vIFNlYXJjaCBmb3IgYSAqIG9yIC8gdG9rZW4gd2l0aCBiYWxhbmNlZCBwYXJhbnRoZXNlc1xuICAgICAgY29uc3QgbVRva2VuID0gZmluZFNwbGl0VG9rZW4oZXhwcmVzc2lvblR5cGUsIHN0YXJ0VG9rZW4sIGVuZFRva2VuKVxuICAgICAgLy8gSWYgbm8gc3VjaCB0b2tlbiB3YXMgZm91bmQsIHN3aXRjaCB0byBhIFBFWFAgZXhwcmVzc2lvbiBhbmQgbG9vcCBhZ2FpbiAodGhpcyBoZWxwcyB0byBrZWVwXG4gICAgICAvLyB1bm5lY2Nlc3Nhcnkgbm9kZXMgZnJvbSBidWlsZGluZyB1cCB3aGljaCB3b3VsZCBoYXBwZW4gd2l0aCBhIHJlY3Vyc2l2ZSBjYWxsIGluIHRoaXMgc2l0dWF0aW9uKS5cbiAgICAgIGlmIChtVG9rZW4gPT0gbnVsbCkge1xuICAgICAgICBleHByZXNzaW9uVHlwZSA9IEV4cHJlc3Npb25UeXBlLk5FWFBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IHJlcGVhdCB0aGlzIHByb2Nlc3MgZm9yIHRoZSBsZWZ0IGFuZCByaWdodCBjaGlsZHJlbiBhbmQgc2V0IHRoZSB0b2tlbiB0byB0aGUgc3BsaXQgdG9rZW4uXG4gICAgICAgIHJvb3QuY3JlYXRlTGVmdENoaWxkKClcbiAgICAgICAgcm9vdC5jcmVhdGVSaWdodENoaWxkKClcbiAgICAgICAgY3JlYXRlUGFyc2VUcmVlTm9kZXMocm9vdC5sZWZ0Q2hpbGQsIEV4cHJlc3Npb25UeXBlLk1FWFAsIHN0YXJ0VG9rZW4sIG1Ub2tlbi5wcmV2aW91cylcbiAgICAgICAgY3JlYXRlUGFyc2VUcmVlTm9kZXMocm9vdC5yaWdodENoaWxkLCBFeHByZXNzaW9uVHlwZS5ORVhQLCBtVG9rZW4ubmV4dCwgZW5kVG9rZW4pXG4gICAgICAgIHJvb3QudmFsdWUgPSBtVG9rZW4udmFsdWVcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChleHByZXNzaW9uVHlwZSA9PT0gRXhwcmVzc2lvblR5cGUuTkVYUCkge1xuICAgICAgaWYgKHN0YXJ0VG9rZW4udG9rZW5UeXBlID09PSBUb2tlblR5cGUuTkVHQVRJT04pIHtcbiAgICAgICAgcm9vdC52YWx1ZSA9IHN0YXJ0VG9rZW4udmFsdWVcbiAgICAgICAgcm9vdC5jcmVhdGVSaWdodENoaWxkKClcbiAgICAgICAgY3JlYXRlUGFyc2VUcmVlTm9kZXMocm9vdC5yaWdodENoaWxkLCBFeHByZXNzaW9uVHlwZS5ORVhQLCBzdGFydFRva2VuLm5leHQsIGVuZFRva2VuKVxuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV4cHJlc3Npb25UeXBlID0gRXhwcmVzc2lvblR5cGUuRUVYUFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXhwcmVzc2lvblR5cGUgPT09IEV4cHJlc3Npb25UeXBlLkVFWFApIHtcbiAgICAgIGNvbnN0IGVUb2tlbiA9IGZpbmRFRVhQU3BsaXRUb2tlbihzdGFydFRva2VuLCBlbmRUb2tlbilcbiAgICAgIGlmIChlVG9rZW4gPT0gbnVsbCkge1xuICAgICAgICBleHByZXNzaW9uVHlwZSA9IEV4cHJlc3Npb25UeXBlLlBFWFBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuY3JlYXRlTGVmdENoaWxkKClcbiAgICAgICAgcm9vdC5jcmVhdGVSaWdodENoaWxkKClcbiAgICAgICAgY3JlYXRlUGFyc2VUcmVlTm9kZXMocm9vdC5sZWZ0Q2hpbGQsIEV4cHJlc3Npb25UeXBlLlBFWFAsIHN0YXJ0VG9rZW4sIGVUb2tlbi5wcmV2aW91cylcbiAgICAgICAgY3JlYXRlUGFyc2VUcmVlTm9kZXMocm9vdC5yaWdodENoaWxkLCBFeHByZXNzaW9uVHlwZS5ORVhQLCBlVG9rZW4ubmV4dCwgZW5kVG9rZW4pXG4gICAgICAgIHJvb3QudmFsdWUgPSBlVG9rZW4udmFsdWVcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSBmaXJzdCB0b2tlbiBpcyBhICgsIHRoZW4gdGhlIGxhc3QgdG9rZW4gbXVzdCBiZSBhICkuIFRoZXkgY2FuIGJvdGggYmUgcmVtb3ZlZCBhbmQgdGhlIGV4cHJlc3Npb25cbiAgICAgIC8vIHR5cGUgY2hhbmdlZCB0byBFWFAuIEFnYWluLCBubyByZWN1cnNpdmUgY2FsbCBpcyBkb25lIHRvIGVsaW1pbmF0ZSB1bm5lY2Nlc3Nhcnkgbm9kZXMuXG4gICAgICBpZiAoc3RhcnRUb2tlbi50b2tlblR5cGUgPT09IFRva2VuVHlwZS5PUEVOX1BBUkFOVEhFU0VTKSB7XG4gICAgICAgIGV4cHJlc3Npb25UeXBlID0gRXhwcmVzc2lvblR5cGUuRVhQXG4gICAgICAgIHN0YXJ0VG9rZW4gPSBzdGFydFRva2VuLm5leHRcbiAgICAgICAgZW5kVG9rZW4gPSBlbmRUb2tlbi5wcmV2aW91c1xuICAgICAgfSBlbHNlIGlmIChzdGFydFRva2VuLnRva2VuVHlwZSA9PT0gVG9rZW5UeXBlLkVfT1BFTl9QQVJBTlRIRVNFUykge1xuICAgICAgICByb290LmNyZWF0ZVJpZ2h0Q2hpbGQoKVxuICAgICAgICBjcmVhdGVQYXJzZVRyZWVOb2Rlcyhyb290LnJpZ2h0Q2hpbGQsIEV4cHJlc3Npb25UeXBlLkVYUCwgc3RhcnRUb2tlbi5uZXh0LCBlbmRUb2tlbi5wcmV2aW91cylcbiAgICAgICAgcm9vdC52YWx1ZSA9IHN0YXJ0VG9rZW4udmFsdWVcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2UgeyAvLyBPdGhlcndpc2UsIHdlIHNob3VsZCBoYXZlIGEgc2luZ2xlIHRva2VuIGFuZCB0aGlzIHRva2VuIGlzIHNldCB0byBpdC5cbiAgICAgICAgcm9vdC52YWx1ZSA9IHN0YXJ0VG9rZW4udmFsdWVcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVG9rZW5pemVzIHRoZSBpbnB1dCBhbmQgY3JlYXRlcyBhIGZ1bmN0aW9uIHBhcnNlIHRyZWUgZnJvbSBpdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgQSBmdW5jdGlvbiB0aGF0IGhhcyBiZWVuIHZhbGlkYXRlZCB0byB0dXJuIGludG8gYSBwYXJzZSB0cmVlLlxuICogQHJldHVybiB7VHJlZU5vZGV9IFRoZSBmdW5jdGlvbiBwYXJzZSB0cmVlIHRoYXQgd2FzIGNyZWF0ZWQuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBhcnNlVHJlZSAoaW5wdXQpIHtcbiAgY29uc29sZS5sb2coJ0VudGVyaW5nIGNyZWF0ZVBhcnNlVHJlZSB3aXRoIGlucHV0OiAnICsgaW5wdXQpXG4gIGNvbnN0IHRva2VuTGlzdCA9IHRva2VuaXplKGlucHV0KVxuICBjb25zdCB0cmVlID0gbmV3IFRyZWVOb2RlKClcblxuICBjcmVhdGVQYXJzZVRyZWVOb2Rlcyh0cmVlLCBFeHByZXNzaW9uVHlwZS5FWFAsIHRva2VuTGlzdC5oZWFkLCB0b2tlbkxpc3QudGFpbClcbiAgY29uc29sZS5sb2cocHJpbnRQYXJzZVRyZWUodHJlZSkpXG4gIGNvbnNvbGUubG9nKCdFeGl0aW5nIGNyZWF0ZVBhcnNlVHJlZScpXG4gIHJldHVybiB0cmVlXG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcGFyc2UgdHJlZS4gSW50ZW5kZWQgZm9yIHRlc3RpbmcgdGhhdCB0aGUgcGFyc2UgdHJlZSB3YXMgY3JlYXRlZFxuICogY29ycmVjdGx5LiBTZWFyY2hlcyBmcm9tIHRoZSBsZWZ0IHRvIHRoZSByaWdodCBhbmQgcHJpbnRzIGVhY2ggdG9rZW4gdmFsdWUgaXQgZmluZHMuXG4gKlxuICogQHBhcmFtIHtUcmVlTm9kZX0gdHJlZSBUaGUgcm9vdCBub2RlIG9mIHRoZSB0cmVlIHRvIHByaW50LlxuICpcbiAqIEByZXR1cm4ge3N0cmluZ30gUmVwcmVzZW50YXRpb24gb2YgdGhlIHBhcnNlIHRyZWUuXG4gKi9cbmZ1bmN0aW9uIHByaW50UGFyc2VUcmVlICh0cmVlKSB7XG4gIGlmICh0cmVlID09IG51bGwpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIHJldHVybiBwcmludFBhcnNlVHJlZSh0cmVlLmxlZnRDaGlsZCkgKyB0cmVlLnZhbHVlICsgcHJpbnRQYXJzZVRyZWUodHJlZS5yaWdodENoaWxkKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYXJzZVRyZWVcbiIsImltcG9ydCBUb2tlbkxpc3QgZnJvbSAnLi9Ub2tlbkxpc3QuanMnXG5pbXBvcnQgVG9rZW4gZnJvbSAnLi9Ub2tlbi5qcydcbmltcG9ydCBFeHByZXNzaW9uVHlwZSBmcm9tICcuL0V4cHJlc3Npb25UeXBlLmpzJ1xuaW1wb3J0IFRva2VuVHlwZSBmcm9tICcuL1Rva2VuVHlwZS5qcydcblxuLyoqXG4gKiBUdXJucyB0aGUgaW5wdXQgc3RyaW5nIGludG8gYSBUb2tlbkxpc3Qgb2YgVG9rZW5zLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIHRvIHRva2VuaXplLiBTaG91bGQgb25seSBjb250YWluICssIC0sIC8sICosICgsICksIHgsIGFuZCBudW1iZXJzLlxuICpcbiAqIEByZXR1cm4ge1Rva2VuTGlzdH0gUmV0dXJucyBhIGxpc3Qgb2YgVG9rZW5zLlxuICovXG5mdW5jdGlvbiB0b2tlbml6ZSAoaW5wdXQpIHtcbiAgY29uc29sZS5sb2coJ0VudGVyaW5nIHRva2VuaXplIHdpdGggaW5wdXQ6ICcgKyBpbnB1dClcbiAgLy8gVGhpcyBtYXkgbmVlZCBhZGRpdGlvbmFsIHdvcmsuIEl0IGZhaWxzIGZvciAuMzIgb3Igc29tZXRoaW5nIHNpbWlsYXIgKG11c3QgZG8gMC4zMikuXG4gIGNvbnN0IHRva2VuUmV0cmlldmVyID0gLyhcXGQrKFxcLlxcZCspP3xlfHBpfGE/KHNpbnxjb3N8dGFuKVxcKHwobG58bG9nKVxcKHxbK1xcLSoveCgpXl0pL1xuICBjb25zdCB0b2tlbkxpc3QgPSBuZXcgVG9rZW5MaXN0KClcblxuICB3aGlsZSAoaW5wdXQubGVuZ3RoKSB7XG4gICAgbGV0IHRva2VuID0gJydcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UodG9rZW5SZXRyaWV2ZXIsIChtYXRjaGVkU3RyaW5nLCBzYXZlZFRva2VuKSA9PiB7IHRva2VuID0gc2F2ZWRUb2tlbjsgcmV0dXJuICcnIH0pXG4gICAgdG9rZW5MaXN0LmFkZChuZXcgVG9rZW4odG9rZW4pKVxuICAgIGlmICh0b2tlbiA9PT0gJycpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGZvdW5kIHdoZW4gdG9rZW5pemluZycpXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdFeGl0aW5nIHRva2VuaXplJylcbiAgcmV0dXJuIHRva2VuTGlzdFxufVxuXG4vKipcbiAqIEZpbmRzIHRoZSB0b2tlbiB0aGF0IHRoZSBmdW5jdGlvbiBwYXJzZSB0cmVlIHNob3VsZCBiZSBzcGxpdCBhdC4gU2VhcmNoZXMgZnJvbSB0aGUgZW5kVG9rZW4gdG8gdGhlIHN0YXJ0VG9rZW5cbiAqIGxvb2tpbmcgZm9yIHRoZSBmaXJzdCB0b2tlbiB3aXRoIFRva2VuVHlwZS5BRERJVElPTiAoaWYgRXhwcmVzc2lvblR5cGUuRVhQKSBvciBUb2tlblR5cGUuTVVMVElQTElDQVRJT04gKGlmXG4gKiBFeHByZXNzaW9uVHlwZS5NRVhQKSB3aGVyZSB0aGUgcGFyYW50aGVzZXMgYXJlIGJhbGFuY2VkLiBSZXR1cm5zIG51bGwgaWYgbm8gdG9rZW4gbWVldHMgdGhlIHJlcXVpcmVtZW50LlxuICogTk9URTogc3RhcnRUb2tlbiBhbmQgZW5kVG9rZW4gZG9uJ3QgaGF2ZSB0byBiZSB0aGUgZmlyc3QgYW5kIGxhc3QgdG9rZW5zIGluIHRoZSB0b2tlbiBsaXN0LlxuICpcbiAqIEBwYXJhbSB7RXhwcmVzc2lvblR5cGV9IGV4cHJlc3Npb25UeXBlIFRoZSB0eXBlIG9mIGV4cHJlc3Npb24uIFNob3VsZCBiZSBlaXRoZXIgRXhwcmVzc2lvblR5cGUuTUVYUCBvclxuICogIEV4cHJlc3Npb25UeXBlLkVYUC5cbiAqIEBwYXJhbSB7VG9rZW59IHN0YXJ0VG9rZW4gVGhlIGZpcnN0IHRva2VuIGluIHRoZSB0b2tlbiBsaXN0IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7VG9rZW59IGVuZFRva2VuIFRoZSBmaW5hbCB0b2tlbiBpbiB0aGUgdG9rZW4gbGlzdCB0byBzZWFyY2guXG4gKlxuICogQHJldHVybiB7VG9rZW59IFRoZSB0b2tlbiB0byBzcGxpdCBhdC4gUmV0dXJucyBudWxsIGlmIHRoZXJlIHdhcyBubyBzcGxpdCB0b2tlbiBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gZmluZFNwbGl0VG9rZW4gKGV4cHJlc3Npb25UeXBlLCBzdGFydFRva2VuLCBlbmRUb2tlbikge1xuICBsZXQgY3VycmVudFRva2VuID0gZW5kVG9rZW5cblxuICBsZXQgdG9rZW5UeXBlID0gVG9rZW5UeXBlLkFERElUSU9OXG5cbiAgaWYgKGV4cHJlc3Npb25UeXBlID09PSBFeHByZXNzaW9uVHlwZS5NRVhQKSB7XG4gICAgdG9rZW5UeXBlID0gVG9rZW5UeXBlLk1VTFRJUExJQ0FUSU9OXG4gIH1cblxuICBsZXQgY2xvc2VQYXJhbnRoZXNlcyA9IDBcblxuICB3aGlsZSAoY3VycmVudFRva2VuICE9PSBzdGFydFRva2VuICYmIGN1cnJlbnRUb2tlbiAhPT0gc3RhcnRUb2tlbi5wcmV2aW91cykge1xuICAgIGlmIChjdXJyZW50VG9rZW4udG9rZW5UeXBlID09PSB0b2tlblR5cGUgJiYgY2xvc2VQYXJhbnRoZXNlcyA9PT0gMCkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRUb2tlblxuICAgIH1cbiAgICBpZiAoY3VycmVudFRva2VuLnRva2VuVHlwZSA9PT0gVG9rZW5UeXBlLk9QRU5fUEFSQU5USEVTRVMgfHxcbiAgICAgICAgICAgIGN1cnJlbnRUb2tlbi50b2tlblR5cGUgPT09IFRva2VuVHlwZS5FX09QRU5fUEFSQU5USEVTRVMpIHtcbiAgICAgIGNsb3NlUGFyYW50aGVzZXMtLVxuICAgIH0gZWxzZSBpZiAoY3VycmVudFRva2VuLnRva2VuVHlwZSA9PT0gVG9rZW5UeXBlLkNMT1NFX1BBUkFOVEhFU0VTKSB7XG4gICAgICBjbG9zZVBhcmFudGhlc2VzKytcbiAgICB9XG5cbiAgICBjdXJyZW50VG9rZW4gPSBjdXJyZW50VG9rZW4ucHJldmlvdXNcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIGZpbmRFRVhQU3BsaXRUb2tlbiAoc3RhcnRUb2tlbiwgZW5kVG9rZW4pIHtcbiAgbGV0IGN1cnJlbnRUb2tlbiA9IHN0YXJ0VG9rZW5cblxuICBsZXQgY2xvc2VQYXJhbnRoZXNlcyA9IDBcblxuICB3aGlsZSAoY3VycmVudFRva2VuICE9PSBlbmRUb2tlbiAmJiBjdXJyZW50VG9rZW4gIT09IGVuZFRva2VuLm5leHQpIHtcbiAgICBpZiAoY3VycmVudFRva2VuLnRva2VuVHlwZSA9PT0gVG9rZW5UeXBlLlBPV0VSICYmIGNsb3NlUGFyYW50aGVzZXMgPT09IDApIHtcbiAgICAgIHJldHVybiBjdXJyZW50VG9rZW5cbiAgICB9XG4gICAgaWYgKGN1cnJlbnRUb2tlbi50b2tlblR5cGUgPT09IFRva2VuVHlwZS5PUEVOX1BBUkFOVEhFU0VTIHx8XG4gICAgICAgICAgICBjdXJyZW50VG9rZW4udG9rZW5UeXBlID09PSBUb2tlblR5cGUuRV9PUEVOX1BBUkFOVEhFU0VTKSB7XG4gICAgICBjbG9zZVBhcmFudGhlc2VzLS1cbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRUb2tlbi50b2tlblR5cGUgPT09IFRva2VuVHlwZS5DTE9TRV9QQVJBTlRIRVNFUykge1xuICAgICAgY2xvc2VQYXJhbnRoZXNlcysrXG4gICAgfVxuXG4gICAgY3VycmVudFRva2VuID0gY3VycmVudFRva2VuLm5leHRcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCB7XG4gIHRva2VuaXplLFxuICBmaW5kRUVYUFNwbGl0VG9rZW4sXG4gIGZpbmRTcGxpdFRva2VuXG59XG4iLCJjb25zdCB0ZXJtaW5hbExpc3QgPSBbJysnLCAnLScsICcqJywgJy8nLCAneCcsICcoJywgJyknLCAnJCddXG5cbmNvbnN0IG1hcCA9IHtcbiAgUzogeyAnKyc6ICchJywgJy0nOiAnIScsICcqJzogJyEnLCAnLyc6ICchJywgeDogJ0FUJywgJygnOiAnQVQnLCAnKSc6ICchJywgJDogJyEnIH0sXG4gIEE6IHsgJysnOiAnQVQrJywgJy0nOiAnQVQtJywgJyonOiAnIScsICcvJzogJyEnLCB4OiAnIScsICcoJzogJyEnLCAnKSc6ICcnLCAkOiAnJyB9LCAvLyBTJ1xuICBUOiB7ICcrJzogJyEnLCAnLSc6ICchJywgJyonOiAnIScsICcvJzogJyEnLCB4OiAnQlInLCAnKCc6ICdCUicsICcpJzogJyEnLCAkOiAnIScgfSxcbiAgQjogeyAnKyc6ICcnLCAnLSc6ICcnLCAnKic6ICdCUionLCAnLyc6ICdCUi8nLCB4OiAnIScsICcoJzogJyEnLCAnKSc6ICcnLCAkOiAnJyB9LCAvLyAgIFQnXG4gIFI6IHsgJysnOiAnIScsICctJzogJyEnLCAnKic6ICchJywgJy8nOiAnIScsIHg6ICd4JywgJygnOiAnKVMoJywgJyknOiAnIScsICQ6ICchJyB9XG59XG5cbi8qKlxuICogVmFsaWRhdGVzIHRoYXQgYSBmdW5jdGlvbiBpcyB2YWxpZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZnVuYyBTdHJpbmcgY29udGFpbmluZyB0aGUgZnVuY3Rpb24gdG8gdmFsaWRhdGUuIEl0IHNob3VsZCBoYXZlIG5vIHdoaXRlc3BhY2Ugb3IgaW1wbGljaXRcbiAqICBtdWx0aXBsaWNhdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgZnVuY3Rpb24gaXMgdmFsaWQgYW5kIGZhbHNlIGlmIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVQcm9wZXJGdW5jdGlvbiAoZnVuYykge1xuICBjb25zb2xlLmxvZygnRW50ZXJpbmcgdmFsaWRhdGVQcm9wZXJGdW5jdGlvbiB3aXRoIGZ1bmN0aW9uOiAnICsgZnVuYylcblxuICBmdW5jID0gcmVnZXhDb252ZXJ0KGZ1bmMpXG5cbiAgY29uc3QgaW52YWxpZENoYXJhY3RlcnMgPSAvW14rXFwtKi94KCleXS9nXG4gIGlmIChmdW5jLmxlbmd0aCA9PT0gMCB8fCBmdW5jLnNlYXJjaChpbnZhbGlkQ2hhcmFjdGVycykgIT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gaXNWYWxpZEZ1bmN0aW9uKGZ1bmMpXG59XG5cbmZ1bmN0aW9uIHJlZ2V4Q29udmVydCAoZnVuYykge1xuICAvLyBUaGlzIG1heSBuZWVkIGFkZGl0aW9uYWwgd29yay4gSXQgZmFpbHMgZm9yIC4zMiBvciBzb21ldGhpbmcgc2ltaWxhciAobXVzdCBkbyAwLjMyKS5cbiAgLy8gQWxzbyBuZWVlZCB0byBjb25zaWRlciBuZWdhdGl2ZSBudW1iZXJzIG1vcmUuXG4gIGNvbnN0IG51bWJlclJlbW92ZXIgPSAvXFxkKyhcXC5cXGQrKT98ZXxwaS9nXG4gIGZ1bmMgPSBmdW5jLnJlcGxhY2UobnVtYmVyUmVtb3ZlciwgJ3gnKVxuXG4gIC8vIENoZWNrIGZvciBhbnkgbnVtYmVyIG9mIG5lZ2F0aXZlcyBkaXJlY3RseSBwcmVjZWRlZCBieSBhICosIC8sICsgYW5kIHJlbW92ZSB0aGVtLlxuICAvLyBBc28gbmVlZCB0byBjaGVjayBmb3Igc2l0dWF0aW9ucyBzdWNoIGFzIC01KzMgb3IgeCooLTQrMykgQW55dGhpbmcgTk9UIHByZWNlZGVkIGJ5IGFuIHg/XG4gIGNvbnN0IG5lZ2F0aXZlUmVtb3ZlciA9IC8oXnxbXnhdKS0rL2dcbiAgZnVuYy5yZXBsYWNlKG5lZ2F0aXZlUmVtb3ZlciwgJyQxJylcblxuICBjb25zdCBlbmhhbmNlZFBhcmFudGhlc2VzUmVtb3ZlciA9IC8oKGE/KGNvc3xzaW58dGFuKSl8bG58bG9nKVxcKC9nXG4gIGZ1bmMucmVwbGFjZShlbmhhbmNlZFBhcmFudGhlc2VzUmVtb3ZlciwgJygnKVxuXG4gIGNvbnNvbGUubG9nKGZ1bmMpXG5cbiAgcmV0dXJuIGZ1bmNcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEZ1bmN0aW9uIChmdW5jKSB7XG4gIGZ1bmMgKz0gJyQnXG5cbiAgY29uc3QgY2hhclN0YWNrID0gWydTJ11cbiAgbGV0IHBvaW50ID0gMFxuICBsZXQgZmFpbGVkID0gZmFsc2VcbiAgLy8gbWFwW1wiU1wiXVtcIitcIl07XG5cbiAgd2hpbGUgKHBvaW50IDwgZnVuYy5sZW5ndGggJiYgIWZhaWxlZCkge1xuICAgIC8vICBpZiAoY2hhclN0YWNrLmVtcHR5KCkpXG4gICAgLy8gIHtcbiAgICAvLyAgICAgIGNvdXQgPDwgXCJTdHJpbmcgbm90IGFjY2VwdGVkXFxuXCI7IC8vcHJpbnQgc3RyaW5nIGNvbnRlbnRzP1xuICAgIC8vICAgICAgYnJlYWs7XG4gICAgLy8gIH1cbiAgICBsZXQgY3VycmVudEVsZW0gPSBjaGFyU3RhY2sucG9wKClcblxuICAgIHdoaWxlICghdGVybWluYWxMaXN0LmluY2x1ZGVzKGN1cnJlbnRFbGVtKSkge1xuICAgICAgaWYgKG1hcFtjdXJyZW50RWxlbV1bZnVuY1twb2ludF1dID09PSAnIScpIHtcbiAgICAgICAgZmFpbGVkID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgICAvLyBwcmludCBlcnJvcj9cbiAgICAgIH1cblxuICAgICAgWy4uLm1hcFtjdXJyZW50RWxlbV1bZnVuY1twb2ludF1dXS5mb3JFYWNoKGMgPT4gY2hhclN0YWNrLnB1c2goYykpXG5cbiAgICAgIGlmICghY2hhclN0YWNrLmxlbmd0aCkgeyAvLyBpZiB0aGUgYXJyYXkgaXMgZW1wdHlcbiAgICAgICAgaWYgKGZ1bmNbcG9pbnRdICE9PSAnJCcpIHtcbiAgICAgICAgICBmYWlsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gcHJpbnQgZXJyb3I/XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY3VycmVudEVsZW0gPSBjaGFyU3RhY2sucG9wKClcbiAgICB9XG5cbiAgICBwb2ludCsrXG4gIH1cblxuICBpZiAoY2hhclN0YWNrLmxlbmd0aCB8fCBmYWlsZWQpIHtcbiAgICBjb25zb2xlLmxvZygnQ2hhciBzdGFjazogJyArIGNoYXJTdGFjaylcbiAgICBjb25zb2xlLmxvZygnUmVtYWlubmcgc3RyaW5nIGNoYXJhY3RlcnM6ICcgKyBmdW5jLnN1YnN0cihwb2ludCkpXG4gIH1cbiAgY29uc29sZS5sb2coJ0V4aXRpbmcgdmFsaWRhdGVQcm9wZXJGdW5jdGlvbicpXG5cbiAgcmV0dXJuICFjaGFyU3RhY2subGVuZ3RoICYmICFmYWlsZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGVQcm9wZXJGdW5jdGlvblxuIiwiaW1wb3J0IHsgcHJvY2Vzc0Z1bmN0aW9uLCBldmFsdWF0ZUZ1bmN0aW9uIH0gZnJvbSAnLi4vcGFyc2VyL2VxdWF0aW9uUGFyc2VyLmpzJ1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFtcIndhcm5cIix7IFwidmFyc0lnbm9yZVBhdHRlcm5cIjogXCJncmFwaEZ1bmN0aW9uXCJ9XSAqL1xuXG4vKipcbiAqIENvZGUgZm9yIGEgdmVydGV4IHNoYWRlci4gQ29udGFpbnMgYXR0cmlidXRlIHBvc2l0aW9uIHRoYXQgdGFrZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSB2ZXJ0ZXguXG4gKi9cbmNvbnN0IHZlcnRleFNoYWRlclNvdXJjZSA9IGBcbiAgICBhdHRyaWJ1dGUgdmVjNCBwb3NpdGlvbjtcblxuICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgZ2xfUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB9XG5gXG5cbi8qKlxuICogQ29kZSBmb3IgYSBmcmFnbWVudCBzaGFkZXIuIENvbG9ycyB0aGUgZnJhZ21lbnQgcHVycGxlLlxuICovXG5jb25zdCBwdXJwbGVGcmFnbWVudFNoYWRlclNvdXJjZSA9IGBcbiAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMC41LCAwLjAsIDAuNSwgMS4wKTtcbiAgICB9XG5gXG5cbi8qKlxuICogQ29kZSBmb3IgYSBmcmFnbWVudCBzaGFkZXIuIENvbG9ycyB0aGUgZnJhZ21lbnQgYmxhY2suIEludGVuZGVkIHNwZWNpZmljYWxseSBmb3Igc2hhZGluZyBheGlzIGZyYWdtZW50cy5cbiAqL1xuY29uc3QgYXhpc1NoYWRlciA9IGBcbiAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMC4wLCAwLjAsIDAuMCwgMS4wKTtcbiAgICB9XG5gXG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dFxuICogQHBhcmFtIHsqfSB0eXBlIFRoZSB0eXBlIG9mIHNoYWRlciAoc2hvdWxkIGJlIGVpdGhlciBnbC5WRVJURVhfU0hBREVSIG9yIGdsLkZSQUdNRU5UX1NIQURFUilcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBjb2RlIG9mIHRoZSBzaGFkZXJcbiAqL1xuZnVuY3Rpb24gbWFrZVNoYWRlciAoZ2wsIHR5cGUsIHNvdXJjZSkge1xuICBsZXQgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpXG5cbiAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKVxuICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcilcblxuICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKVxuXG4gICAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcilcbiAgICBzaGFkZXIgPSBudWxsXG4gIH1cblxuICByZXR1cm4gc2hhZGVyXG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dFxuICogQHBhcmFtIHtzdHJpbmd9IHZlcnRleFNvdXJjZSBUaGUgc291cmNlIGNvZGUgZm9yIHRoZSB2ZXJ0ZXggc2hhZGVyXG4gKiBAcGFyYW0ge3N0cmluZ30gZnJhZ21lbnRTb3VyY2UgVGhlIHNvdXJjZSBjb2RlIGZvciB0aGUgZnJhZ21lbnQgc2hhZGVyXG4gKi9cbmZ1bmN0aW9uIG1ha2VQcm9ncmFtIChnbCwgdmVydGV4U291cmNlLCBmcmFnbWVudFNvdXJjZSkge1xuICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBtYWtlU2hhZGVyKGdsLCBnbC5WRVJURVhfU0hBREVSLCB2ZXJ0ZXhTb3VyY2UpXG4gIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gbWFrZVNoYWRlcihnbCwgZ2wuRlJBR01FTlRfU0hBREVSLCBmcmFnbWVudFNvdXJjZSlcblxuICBsZXQgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKVxuICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKVxuICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpXG5cbiAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSlcblxuICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgY29uc29sZS5lcnJvcihnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKSlcblxuICAgIGdsLmRlbGV0ZVByb2dyYW0ocHJvZ3JhbSlcbiAgICBwcm9ncmFtID0gbnVsbFxuICB9XG5cbiAgcmV0dXJuIHByb2dyYW1cbn1cblxuLyoqXG4gKlxuICovXG5mdW5jdGlvbiBkcmF3ICh0cmVlLCBkcmF3V2luZG93KSB7XG4gIHRyeSB7XG4gICAgLyoqIEB0eXBlIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9ICovXG4gICAgY29uc3QgZ2wgPSBkcmF3V2luZG93LmdldENvbnRleHQoJ3dlYmdsJylcblxuICAgIGRyYXdXaW5kb3cud2lkdGggPSBkcmF3V2luZG93LmNsaWVudFdpZHRoXG4gICAgZHJhd1dpbmRvdy5oZWlnaHQgPSBkcmF3V2luZG93LmNsaWVudEhlaWdodFxuICAgIGdsLnZpZXdwb3J0KDAsIDAsIGRyYXdXaW5kb3cud2lkdGgsIGRyYXdXaW5kb3cuaGVpZ2h0KVxuXG4gICAgZ2wuY2xlYXJDb2xvcigxLjAsIDEuMCwgMS4wLCAxKVxuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKVxuXG4gICAgY29uc3QgYXhpc0J1ZmZlciA9IGNyZWF0ZUF4aXNlcyhnbClcbiAgICBjb25zdCB0aWNrTWFya0J1ZmZlciA9IGNyZWF0ZVRpY2tNYXJrcyhnbCwgMjAsIDIwKVxuICAgIGNvbnN0IHBvbHlub21pYWxCdWZmZXIgPSBjcmVhdGVQb2x5bm9taWFsKGdsLCB0cmVlKVxuXG4gICAgZHJhd0xpbmVzKGdsLCBheGlzQnVmZmVyLCBheGlzU2hhZGVyKVxuICAgIGRyYXdMaW5lcyhnbCwgdGlja01hcmtCdWZmZXIsIGF4aXNTaGFkZXIpXG4gICAgZHJhd0xpbmVTdHJpcChnbCwgcG9seW5vbWlhbEJ1ZmZlciwgcHVycGxlRnJhZ21lbnRTaGFkZXJTb3VyY2UpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGBEcmF3IGZhaWxlZCB3aXRoIGRyYXdXaW5kb3cgJHtkcmF3V2luZG93fWApXG4gICAgY29uc29sZS5lcnJvcihlKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VTdGF0aWNEcmF3QXJyYXlCdWZmZXIgKGdsLCB2ZXJ0aWNlQXJyYXksIG51bVZlcnRpY2VzKSB7XG4gIGNvbnN0IGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpXG4gIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIpXG4gIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VBcnJheSksIGdsLlNUQVRJQ19EUkFXKVxuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgYnVmZmVyOiBidWZmZXIsXG4gICAgbnVtVmVydGljZXM6IG51bVZlcnRpY2VzXG4gIH1cblxuICByZXR1cm4gZGF0YVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMIGNvbnRleHRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUG9seW5vbWlhbCAoZ2wsIHRyZWUpIHtcbiAgY29uc29sZS5sb2coJ0VudGVyaW5nIGNyZWF0ZVBvbHlub21pYWwnKVxuICBjb25zdCBudW1WZXJ0aWNlcyA9IDIwMVxuXG4gIGNvbnN0IHZlcnRpY2VBcnJheSA9IFtdXG5cbiAgZm9yIChsZXQgeCA9IC0xMDA7IHggPD0gMTAwOyB4KyspIHtcbiAgICBjb25zdCB4aSA9IHggLyAxMFxuICAgIGNvbnN0IHlpID0gZXZhbHVhdGVGdW5jdGlvbih0cmVlLCB4aSlcbiAgICB2ZXJ0aWNlQXJyYXkucHVzaCh4aSAvIDEwLCB5aSAvIDEwLCAwLjApXG4gIH1cblxuICBjb25zb2xlLmxvZygnRXhpdGluZyBjcmVhdGVQb2x5bm9taWFsJylcbiAgcmV0dXJuIG1ha2VTdGF0aWNEcmF3QXJyYXlCdWZmZXIoZ2wsIHZlcnRpY2VBcnJheSwgbnVtVmVydGljZXMpXG59XG5cbi8qKlxuICogQ3JlYXRlcyAzRCB2ZXJ0aWNlcyB0byBkZWZpbmUgeCBhbmQgeSBheGlzZXMgY2VudGVyZWQgb24gdGhlIHNjcmVlbiBhbmQgYWRkcyB0aGVtIHRvIGEgYnVmZmVyLiBUaGUgdmVydGljZXNcbiAqIHNob3VsZCBiZSBkcmF3biB3aXRoIGdsLkxJTkVTLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dFxuICpcbiAqIEByZXR1cm5zIHsqfSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgdmVydGljZSBidWZmZXIgKGFzICdidWZmZXInKSBhbmQgdGhlIG51bWJlciBvZiB2ZXJ0aWNlcyBpbiB0aGUgYnVmZmVyIChhc1xuICogICdudW1WZXJ0aWNlcycpLlxuICovXG5mdW5jdGlvbiBjcmVhdGVBeGlzZXMgKGdsKSB7XG4gIGNvbnN0IG51bVZlcnRpY2VzID0gNFxuICBjb25zdCB2ZXJ0aWNlQXJyYXkgPSBbXG4gICAgLTEsIDAsIDAsXG4gICAgMSwgMCwgMCxcbiAgICAwLCAxLCAwLFxuICAgIDAsIC0xLCAwXG4gIF1cbiAgcmV0dXJuIG1ha2VTdGF0aWNEcmF3QXJyYXlCdWZmZXIoZ2wsIHZlcnRpY2VBcnJheSwgbnVtVmVydGljZXMpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpY2tNYXJrcyAoZ2wsIG51bVgsIG51bVkpIHtcbiAgY29uc3QgdmVydGljZUFycmF5ID0gW11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVg7IGkrKykge1xuICAgIHZlcnRpY2VBcnJheS5wdXNoKDIgLyBudW1YICogaSAtIDEsIC0wLjAyLCAwLCAyIC8gbnVtWCAqIGkgLSAxLCAwLjAyLCAwKVxuICB9XG5cbiAgZm9yIChsZXQgaiA9IDA7IGogPD0gbnVtWTsgaisrKSB7XG4gICAgdmVydGljZUFycmF5LnB1c2goLTAuMDIsIDIgLyBudW1ZICogaiAtIDEsIDAsIDAuMDIsIDIgLyBudW1ZICogaiAtIDEsIDApXG4gIH1cbiAgcmV0dXJuIG1ha2VTdGF0aWNEcmF3QXJyYXlCdWZmZXIoZ2wsIHZlcnRpY2VBcnJheSwgMiAqIChudW1YICsgbnVtWSkpXG59XG5cbi8qKlxuICogRHJhd3MgbGluZXMgdXNpbmcgdGhlIHZlcnRpY2VzIGNvbnRhaW5lZCBpbiB0aGUgZGF0YSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMIGNvbnRleHRcbiAqIEBwYXJhbSB7Kn0gZGF0YSBKU09OIG9iamVjdCBob2xkaW5nIHRoZSBidWZmZXIgYW5kIHRoZSBudW1iZXIgb2YgdmVydGljZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBmcmFnbWVudFNoYWRlclNvdXJjZSBUaGUgc291cmNlIGNvZGUgb2YgdGhlIGZyYWdtZW50IHNoYWRlclxuICovXG5mdW5jdGlvbiBkcmF3TGluZXMgKGdsLCBkYXRhLCBmcmFnbWVudFNoYWRlclNvdXJjZSkge1xuICBjb25zdCBwcm9ncmFtID0gbWFrZVByb2dyYW0oZ2wsIHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpXG5cbiAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGRhdGEuYnVmZmVyKVxuXG4gIGNvbnN0IHBvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ3Bvc2l0aW9uJylcbiAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihwb3NpdGlvbiwgMywgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKVxuICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb3NpdGlvbilcblxuICBnbC51c2VQcm9ncmFtKHByb2dyYW0pXG5cbiAgZ2wuZHJhd0FycmF5cyhnbC5MSU5FUywgMCwgZGF0YS5udW1WZXJ0aWNlcylcbn1cblxuLyoqXG4gKiBEcmF3cyB0cmlhbmdsZXMgdXNpbmcgdGhlIHZlcnRpY2VzIGNvbnRhaW5lZCBpbiB0aGUgZGF0YSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMIGNvbnRleHRcbiAqIEBwYXJhbSB7Kn0gZGF0YSBKU09OIG9iamVjdCBob2xkaW5nIHRoZSBidWZmZXIgYW5kIHRoZSBudW1iZXIgb2YgdmVydGljZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBmcmFnbWVudFNoYWRlclNvdXJjZSBUaGUgc291cmNlIGNvZGUgb2YgdGhlIGZyYWdtZW50IHNoYWRlclxuICovXG5mdW5jdGlvbiBkcmF3TGluZVN0cmlwIChnbCwgZGF0YSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpIHtcbiAgY29uc3QgcHJvZ3JhbSA9IG1ha2VQcm9ncmFtKGdsLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlKVxuXG4gIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBkYXRhLmJ1ZmZlcilcblxuICBjb25zdCBwb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICdwb3NpdGlvbicpXG4gIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIocG9zaXRpb24sIDMsIGdsLkZMT0FULCBmYWxzZSwgMCwgMClcbiAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9zaXRpb24pXG5cbiAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKVxuXG4gIGdsLmRyYXdBcnJheXMoZ2wuTElORV9TVFJJUCwgMCwgZGF0YS5udW1WZXJ0aWNlcylcbn1cblxuLyoqXG4gKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBjbGlja3MgdGhlIGdyYXBoIGZ1bmN0aW9uIGJ1dHRvbi4gUHJvY2Vzc2VzIGFuZCBkcmF3cyB0aGUgZnVuY3Rpb24gaWYgaXQgaXMgdmFsaWQuXG4gKi9cbmZ1bmN0aW9uIGdyYXBoRnVuY3Rpb24gKGZ1bmMsIGRyYXdXaW5kb3cpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0cmVlID0gcHJvY2Vzc0Z1bmN0aW9uKGZ1bmMpXG4gICAgaWYgKHRyZWUgIT09IG51bGwpIHtcbiAgICAgIGRyYXcodHJlZSwgZHJhd1dpbmRvdylcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGBHcmFwaCBmdW5jdGlvbiBmYWlsZWQgZm9yICR7ZnVuY30gd2l0aCBkcmF3V2luZG93ICR7ZHJhd1dpbmRvd31gKVxuICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBncmFwaEZ1bmN0aW9uXG4iXSwic291cmNlUm9vdCI6IiJ9