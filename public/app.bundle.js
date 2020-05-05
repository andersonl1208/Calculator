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

/***/ "./client/components/AnswerBox.jsx":
/*!*****************************************!*\
  !*** ./client/components/AnswerBox.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnswerBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    display: {
      padding: '5px 10px'
    }
  };
});
function AnswerBox(props) {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    elevation: 4,
    className: classes.display
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h3"
  }, "".concat(props.currentEquation, " = ").concat(props.value)));
}
AnswerBox.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  currentEquation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./client/components/Banner.jsx":
/*!**************************************!*\
  !*** ./client/components/Banner.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles/useTheme */ "./node_modules/@material-ui/styles/esm/useTheme/index.js");







var useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5___default()(function (theme) {
  return {
    title: {
      flexGrow: 1
    }
  };
});
function Banner(props) {
  var classes = useStyles();
  var theme = Object(_material_ui_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var color = 'primary';

  if (theme.palette.type === 'dark') {
    color = 'inherit';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "static",
    color: color
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "dense"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    className: classes.title
  }, props.title), props.children));
}
Banner.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
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
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_styles_makeStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles.js */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles_makeStyles_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ButtonSection_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ButtonSection.jsx */ "./client/components/ButtonSection.jsx");
/* harmony import */ var _InputButton_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InputButton.jsx */ "./client/components/InputButton.jsx");







var useStyles = _material_ui_core_styles_makeStyles_js__WEBPACK_IMPORTED_MODULE_4___default()(function (theme) {
  return {
    root: {
      padding: '5px'
    }
  };
});
function ButtonGrid(props) {
  var classes = useStyles();

  var createButton = function createButton(value) {
    var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InputButton_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      value: value,
      title: text,
      handleButtonClick: props.handleButtonClick
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    elevation: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    className: classes.root,
    spacing: 1,
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    spacing: 1,
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonSection_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    spacing: 1
  }, createButton('0'), createButton('1'), createButton('2'), createButton('3'), createButton('4')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonSection_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    spacing: 1
  }, createButton('5'), createButton('6'), createButton('7'), createButton('8'), createButton('9')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    spacing: 1,
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonSection_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    spacing: 1
  }, createButton('+'), createButton('-'), createButton('*'), createButton('/'), createButton('^(', '^')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonSection_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    spacing: 1
  }, createButton('^(1/2)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u221A")), createButton('pi', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u03C0")), createButton('7', 'e'), createButton('8', 'ln'), createButton('9', 'log')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    spacing: 1,
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonSection_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    spacing: 1
  }, createButton('sin(', 'sin'), createButton('cos(', 'cos'), createButton('tan(', 'tan')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonSection_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    spacing: 1
  }, createButton('asin(', 'arcsin'), createButton('acos(', 'arccos'), createButton('atan(', 'arctan')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonSection_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    spacing: 1
  }, createButton('x'), createButton('('), createButton(')'))))));
}
ButtonGrid.propTypes = {
  handleButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./client/components/ButtonSection.jsx":
/*!*********************************************!*\
  !*** ./client/components/ButtonSection.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles/makeStyles */ "./node_modules/@material-ui/styles/esm/makeStyles/index.js");




var useStyles = Object(_material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
  return {
    root: {
      flexWrap: 'nowrap'
    }
  };
});
function ButtonSection(props) {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: props.spacing,
    className: classes.root
  }, props.children));
}
ButtonSection.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
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
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _EntryGrid_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EntryGrid.jsx */ "./client/components/EntryGrid.jsx");
/* harmony import */ var _GraphGrid_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GraphGrid.jsx */ "./client/components/GraphGrid.jsx");
/* harmony import */ var _Banner_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Banner.jsx */ "./client/components/Banner.jsx");
/* harmony import */ var _SettingsList_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SettingsList.jsx */ "./client/components/SettingsList.jsx");
/* harmony import */ var _parser_equationParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../parser/equationParser.js */ "./client/parser/equationParser.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var originalEquation = 'x';
var originalTree = Object(_parser_equationParser_js__WEBPACK_IMPORTED_MODULE_9__["processFunction"])(originalEquation);
var originalValue = Object(_parser_equationParser_js__WEBPACK_IMPORTED_MODULE_9__["evaluateFunction"])(originalTree, 1).toString();
var useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default()(function (theme) {
  return {
    grid: {
      padding: '0.75em'
    }
  };
});
function Calculator() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(originalEquation),
      _useState2 = _slicedToArray(_useState, 2),
      currentEquation = _useState2[0],
      setCurrentEquation = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(originalTree),
      _useState4 = _slicedToArray(_useState3, 2),
      currentTree = _useState4[0],
      setCurrentTree = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(originalValue),
      _useState6 = _slicedToArray(_useState5, 2),
      currentValue = _useState6[0],
      setCurrentValue = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      useDarkTheme = _useState8[0],
      setUseDarkTheme = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      initialDarkThemeSet = _useState10[0],
      setUseInitialDarkTheme = _useState10[1];

  var handleEquationChange = function handleEquationChange(newEquation) {
    setCurrentEquation(newEquation);
    var tree = Object(_parser_equationParser_js__WEBPACK_IMPORTED_MODULE_9__["processFunction"])(newEquation);
    setCurrentTree(tree);

    if (tree !== null) {
      setCurrentValue(Object(_parser_equationParser_js__WEBPACK_IMPORTED_MODULE_9__["evaluateFunction"])(tree, 1).toString());
    }
  };

  var handleEquationBoxChange = function handleEquationBoxChange(event) {
    handleEquationChange(event.target.value);
  };

  var handleButtonClick = function handleButtonClick(event) {
    handleEquationChange(currentEquation + event.currentTarget.value);
  };

  var setEquation = function setEquation(value) {
    handleEquationChange(value);
  };

  var handleSettingsButtonClick = function handleSettingsButtonClick(event) {
    if (event.currentTarget.value === 'theme') {
      setUseDarkTheme(!useDarkTheme);
    }
  };

  if (Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__["default"])('(prefers-color-scheme: dark)') && !initialDarkThemeSet) {
    setUseDarkTheme(true);
    setUseInitialDarkTheme(true);
  }

  var themeType = useDarkTheme ? 'dark' : 'light';
  var theme = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function () {
    return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])({
      palette: {
        type: themeType
      }
    });
  }, [themeType]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CssBaseline"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Banner_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: 'Calculator'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SettingsList_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    handleButtonClick: handleSettingsButtonClick
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.grid,
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GraphGrid_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    currentEquation: currentEquation,
    tree: currentTree,
    value: currentValue,
    theme: themeType
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EntryGrid_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    currentEquation: currentEquation,
    handleEquationChange: handleEquationBoxChange,
    handleButtonClick: handleButtonClick,
    currentValue: currentValue,
    setCurrentEquation: setEquation
  })));
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//     <canvas id="screen" ></canvas>
//     <textarea id="userString" rows="5" cols="85">x</textarea><br/>
//     <button type="button" onClick="graphFunction()">Graph</button>
//     <div id="result"></div><br/>



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%',
      // backgroundColor: theme.palette.background.paper,
      overflow: 'auto',
      maxHeight: 300,
      height: 300
    },
    textField: {
      width: '100%'
    },
    entry: {
      marginBottom: '-1.5em'
    },
    result: {
      textAlign: 'right'
    }
  };
});
function EntryField(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      entriesList = _useState2[0],
      setEntriesList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      resultsList = _useState4[0],
      setResultsList = _useState4[1];

  var onKeyPress = function onKeyPress(event) {
    if (event.key === 'Enter') {
      setEntriesList(entriesList.concat(props.currentEntry));

      if (props.currentValue !== undefined) {
        setResultsList(resultsList.concat(props.currentValue));
      } else {
        setResultsList(resultsList.concat('undefined'));
      }

      props.setCurrentEntry('');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.getElementById('textFieldEntryBox').scrollIntoView(false);
  }, [entriesList]);
  var entryTiles = [];

  for (var i = 0; i < entriesList.length; i++) {
    entryTiles.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      key: i * 2,
      className: classes.entry
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
      primary: entriesList[i]
    })));
    entryTiles.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      key: i * 2 + 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
      primary: resultsList[i],
      className: classes.result
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], null)));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    elevation: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    className: classes.root,
    dense: true
  }, entryTiles, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    id: "textFieldEntryBox",
    className: classes.textField,
    value: props.currentEntry,
    onChange: props.onEntryChange,
    onKeyPress: onKeyPress
  }))));
}
EntryField.propTypes = {
  currentEntry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onEntryChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  currentValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setCurrentEntry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./client/components/EntryGrid.jsx":
/*!*****************************************!*\
  !*** ./client/components/EntryGrid.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EntryGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _EntryField_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EntryField.jsx */ "./client/components/EntryField.jsx");
/* harmony import */ var _ButtonGrid_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ButtonGrid.jsx */ "./client/components/ButtonGrid.jsx");





function EntryGrid(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    md: 6,
    lg: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 2,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EntryField_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currentEntry: props.currentEquation,
    onEntryChange: props.handleEquationChange,
    currentValue: props.currentValue,
    setCurrentEntry: props.setCurrentEquation
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonGrid_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleButtonClick: props.handleButtonClick
  }))));
}
EntryGrid.propTypes = {
  currentEquation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  handleEquationChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  currentValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setCurrentEquation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
//     <canvas id="screen" ></canvas>
//     <textarea id="userString" rows="5" cols="85">x</textarea><br/>
//     <button type="button" onClick="graphFunction()">Graph</button>
//     <div id="result"></div><br/>




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    canvas: {
      width: '100%',
      height: 'auto'
    }
  };
});
function Graph(props) {
  var classes = useStyles();
  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_webgl_drawGraph_js__WEBPACK_IMPORTED_MODULE_1__["default"])(props.tree, canvasRef.current, props.theme);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    elevation: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
    className: classes.canvas,
    width: "500px",
    height: "500px",
    ref: canvasRef
  }));
}
Graph.propTypes = {
  tree: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
Graph.defaultProps = {
  tree: null,
  theme: 'light'
};

/***/ }),

/***/ "./client/components/GraphGrid.jsx":
/*!*****************************************!*\
  !*** ./client/components/GraphGrid.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _Graph_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Graph.jsx */ "./client/components/Graph.jsx");
/* harmony import */ var _AnswerBox_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnswerBox.jsx */ "./client/components/AnswerBox.jsx");





function GraphGrid(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    md: 6,
    lg: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Graph_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tree: props.tree,
    theme: props.theme
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AnswerBox_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: props.value,
    currentEquation: props.currentEquation
  }));
}
GraphGrid.propTypes = {
  currentEquation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tree: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./client/components/InputButton.jsx":
/*!*******************************************!*\
  !*** ./client/components/InputButton.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles/makeStyles */ "./node_modules/@material-ui/styles/esm/makeStyles/index.js");






var useStyles = Object(_material_ui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(function (theme) {
  return {
    button: {
      textTransform: 'none'
    }
  };
});
function InputButton(props) {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.button,
    variant: "contained",
    color: "primary",
    size: "large",
    onClick: props.handleButtonClick,
    value: props.value
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], null, props.title)));
}
InputButton.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  handleButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
InputButton.defaultProps = {
  value: '',
  title: '',
  handleButtonClick: function handleButtonClick() {}
};

/***/ }),

/***/ "./client/components/SettingsList.jsx":
/*!********************************************!*\
  !*** ./client/components/SettingsList.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_icons_Brightness4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Brightness4 */ "./node_modules/@material-ui/icons/Brightness4.js");
/* harmony import */ var _material_ui_icons_Brightness4__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Brightness4__WEBPACK_IMPORTED_MODULE_4__);





function SettingsGrid(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Toggle Dark Mode"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "inherit",
    onClick: props.handleButtonClick,
    value: "theme"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Brightness4__WEBPACK_IMPORTED_MODULE_4___default.a, null)));
}
SettingsGrid.propTypes = {
  handleButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
SettingsGrid.defaultPropTypes = {
  handleButtonClick: function handleButtonClick() {}
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
  if (tree === null) {
    return null;
  } // Should make this into a switch


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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* eslint no-unused-vars: ["warn",{ "varsIgnorePattern": "graphFunction"}] */

/**
 * Code for a vertex shader. Contains attribute position that takes the position of the vertex.
 */

var vertexShaderSource = "\n    attribute vec4 position;\n    uniform vec4 color;\n\n    varying mediump vec4 fragColor;\n\n    void main() {\n        gl_Position = position;\n        fragColor = color;\n    }\n";
/**
 * Default fragment shader for a model
 */

var defaultFragmentShader = "\n    precision mediump float;\n    varying mediump vec4 fragColor;\n\n    void main() {\n        gl_FragColor = fragColor;\n    }\n";
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


function draw(tree, drawWindow, theme) {
  try {
    /** @type {WebGLRenderingContext} */
    var gl = drawWindow.getContext('webgl'); // drawWindow.width = drawWindow.clientWidth
    // drawWindow.height = drawWindow.clientHeight

    gl.viewport(0, 0, drawWindow.width, drawWindow.height);
    var colors = {
      clear: [1.0, 1.0, 1.0, 1.0],
      axes: [0, 0, 0, 1],
      polynomial: [0.5, 0, 0.5, 1]
    };

    if (theme === 'dark') {
      colors.clear = [0.259, 0.259, 0.259, 1.0];
      colors.axes = [1, 1, 1, 1];
      colors.polynomial = [0, 1, 0.251, 1];
    }

    gl.clearColor.apply(gl, _toConsumableArray(colors.clear));
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    var axisBuffer = createAxises(gl);
    var tickMarkBuffer = createTickMarks(gl, 20, 20);
    var polynomialBuffer = createPolynomial(gl, tree);
    drawLines(gl, axisBuffer, new Float32Array(colors.axes));
    drawLines(gl, tickMarkBuffer, new Float32Array(colors.axes));
    drawLineStrip(gl, polynomialBuffer, new Float32Array(colors.polynomial));
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
 */


function drawLines(gl, data, color) {
  var program = makeProgram(gl, vertexShaderSource, defaultFragmentShader);
  gl.bindBuffer(gl.ARRAY_BUFFER, data.buffer);
  var position = gl.getAttribLocation(program, 'position');
  gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(position);
  gl.useProgram(program);
  var col = gl.getUniformLocation(program, 'color');
  gl.uniform4fv(col, color);
  gl.drawArrays(gl.LINES, 0, data.numVertices);
}
/**
 * Draws triangles using the vertices contained in the data object
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 * @param {*} data JSON object holding the buffer and the number of vertices
 */


function drawLineStrip(gl, data, color) {
  var program = makeProgram(gl, vertexShaderSource, defaultFragmentShader);
  gl.bindBuffer(gl.ARRAY_BUFFER, data.buffer);
  var position = gl.getAttribLocation(program, 'position');
  gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(position);
  gl.useProgram(program);
  var col = gl.getUniformLocation(program, 'color');
  gl.uniform4fv(col, color);
  gl.drawArrays(gl.LINE_STRIP, 0, data.numVertices);
}
/**
 * Called when the user clicks the graph function button. Processes and draws the function if it is valid.
 */


function graphFunction(tree, drawWindow, theme) {
  try {
    if (tree !== null) {
      draw(tree, drawWindow, theme);
    }
  } catch (e) {
    console.error("Graph function failed for ".concat(tree, " with drawWindow ").concat(drawWindow));
    console.error(e);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (graphFunction);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvQW5zd2VyQm94LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9CYW5uZXIuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0J1dHRvbkdyaWQuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0J1dHRvblNlY3Rpb24uanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0NhbGN1bGF0b3IuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0VudHJ5RmllbGQuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0VudHJ5R3JpZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvR3JhcGguanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0dyYXBoR3JpZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSW5wdXRCdXR0b24uanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1NldHRpbmdzTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhcnNlci9FeHByZXNzaW9uVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFyc2VyL1Rva2VuLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYXJzZXIvVG9rZW5MaXN0LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYXJzZXIvVG9rZW5UeXBlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYXJzZXIvVHJlZU5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhcnNlci9lcXVhdGlvblBhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFyc2VyL2ltcGxpY2l0LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYXJzZXIvcGFyc2VUcmVlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYXJzZXIvdG9rZW5pemVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYXJzZXIvdmFsaWRhdGVGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvd2ViZ2wvZHJhd0dyYXBoLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiZGlzcGxheSIsInBhZGRpbmciLCJBbnN3ZXJCb3giLCJwcm9wcyIsImNsYXNzZXMiLCJjdXJyZW50RXF1YXRpb24iLCJ2YWx1ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsInRpdGxlIiwiZmxleEdyb3ciLCJCYW5uZXIiLCJ1c2VUaGVtZSIsImNvbG9yIiwicGFsZXR0ZSIsInR5cGUiLCJjaGlsZHJlbiIsIm5vZGUiLCJyb290IiwiQnV0dG9uR3JpZCIsImNyZWF0ZUJ1dHRvbiIsInRleHQiLCJoYW5kbGVCdXR0b25DbGljayIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZmxleFdyYXAiLCJCdXR0b25TZWN0aW9uIiwic3BhY2luZyIsIm51bWJlciIsIm9yaWdpbmFsRXF1YXRpb24iLCJvcmlnaW5hbFRyZWUiLCJwcm9jZXNzRnVuY3Rpb24iLCJvcmlnaW5hbFZhbHVlIiwiZXZhbHVhdGVGdW5jdGlvbiIsInRvU3RyaW5nIiwiZ3JpZCIsIkNhbGN1bGF0b3IiLCJ1c2VTdGF0ZSIsInNldEN1cnJlbnRFcXVhdGlvbiIsImN1cnJlbnRUcmVlIiwic2V0Q3VycmVudFRyZWUiLCJjdXJyZW50VmFsdWUiLCJzZXRDdXJyZW50VmFsdWUiLCJ1c2VEYXJrVGhlbWUiLCJzZXRVc2VEYXJrVGhlbWUiLCJpbml0aWFsRGFya1RoZW1lU2V0Iiwic2V0VXNlSW5pdGlhbERhcmtUaGVtZSIsImhhbmRsZUVxdWF0aW9uQ2hhbmdlIiwibmV3RXF1YXRpb24iLCJ0cmVlIiwiaGFuZGxlRXF1YXRpb25Cb3hDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJzZXRFcXVhdGlvbiIsImhhbmRsZVNldHRpbmdzQnV0dG9uQ2xpY2siLCJ1c2VNZWRpYVF1ZXJ5IiwidGhlbWVUeXBlIiwiUmVhY3QiLCJ1c2VNZW1vIiwiY3JlYXRlTXVpVGhlbWUiLCJ3aWR0aCIsIm92ZXJmbG93IiwibWF4SGVpZ2h0IiwiaGVpZ2h0IiwidGV4dEZpZWxkIiwiZW50cnkiLCJtYXJnaW5Cb3R0b20iLCJyZXN1bHQiLCJ0ZXh0QWxpZ24iLCJFbnRyeUZpZWxkIiwiZW50cmllc0xpc3QiLCJzZXRFbnRyaWVzTGlzdCIsInJlc3VsdHNMaXN0Iiwic2V0UmVzdWx0c0xpc3QiLCJvbktleVByZXNzIiwia2V5IiwiY29uY2F0IiwiY3VycmVudEVudHJ5IiwidW5kZWZpbmVkIiwic2V0Q3VycmVudEVudHJ5IiwidXNlRWZmZWN0Iiwic2Nyb2xsSW50b1ZpZXciLCJlbnRyeVRpbGVzIiwiaSIsImxlbmd0aCIsInB1c2giLCJvbkVudHJ5Q2hhbmdlIiwiRW50cnlHcmlkIiwiY2FudmFzIiwiR3JhcGgiLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJkcmF3R3JhcGgiLCJjdXJyZW50Iiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiR3JhcGhHcmlkIiwiYnV0dG9uIiwidGV4dFRyYW5zZm9ybSIsIklucHV0QnV0dG9uIiwiU2V0dGluZ3NHcmlkIiwiZGVmYXVsdFByb3BUeXBlcyIsIkV4cHJlc3Npb25UeXBlIiwiT2JqZWN0IiwiZnJlZXplIiwiRVhQIiwiTUVYUCIsIk5FWFAiLCJFRVhQIiwiUEVYUCIsIlRva2VuIiwidG9rZW4iLCJuZXh0IiwicHJldmlvdXMiLCJ0b2tlblR5cGUiLCJUb2tlblR5cGUiLCJWQUxVRSIsIk9QRU5fUEFSQU5USEVTRVMiLCJDTE9TRV9QQVJBTlRIRVNFUyIsIkFERElUSU9OIiwiTkVHQVRJT04iLCJNVUxUSVBMSUNBVElPTiIsIlBPV0VSIiwiRV9PUEVOX1BBUkFOVEhFU0VTIiwic3Vic3RyIiwiVG9rZW5MaXN0IiwiaGVhZCIsInRhaWwiLCJUcmVlTm9kZSIsImxlZnRDaGlsZCIsInJpZ2h0Q2hpbGQiLCJwYXJlbnQiLCJpbXBsaWNpdEFkZGVkRnVuYyIsInByb2Nlc3NJbXBsaWNpdCIsImNyZWF0ZVBhcnNlVHJlZSIsImUiLCJ4IiwiTnVtYmVyIiwibnVtZXJhdG9yIiwiZGVub21pbmF0b3IiLCJJbmZpbml0eSIsIk1hdGgiLCJwb3ciLCJjb3MiLCJzaW4iLCJ0YW4iLCJhY29zIiwiYXNpbiIsImF0YW4iLCJsb2cxMCIsIkUiLCJQSSIsInJ1bkltcGxpY2l0RnVuY3Rpb25zIiwiaW5wdXQiLCJoYW5kbGVJbXBsaWNpdEFkZGl0aW9uIiwiaGFuZGxlSW1wbGljaXRNdWx0aXBsaWNhdGlvbiIsInJlbW92ZVdoaXRlc3BhY2UiLCJyZXBsYWNlIiwiY3JlYXRlUGFyc2VUcmVlTm9kZXMiLCJleHByZXNzaW9uVHlwZSIsInN0YXJ0VG9rZW4iLCJlbmRUb2tlbiIsImFUb2tlbiIsImZpbmRTcGxpdFRva2VuIiwiY3JlYXRlTGVmdENoaWxkIiwiY3JlYXRlUmlnaHRDaGlsZCIsIm1Ub2tlbiIsImVUb2tlbiIsImZpbmRFRVhQU3BsaXRUb2tlbiIsInRva2VuTGlzdCIsInRva2VuaXplIiwicHJpbnRQYXJzZVRyZWUiLCJ0b2tlblJldHJpZXZlciIsIm1hdGNoZWRTdHJpbmciLCJzYXZlZFRva2VuIiwiYWRkIiwiZXJyb3IiLCJjdXJyZW50VG9rZW4iLCJjbG9zZVBhcmFudGhlc2VzIiwidGVybWluYWxMaXN0IiwibWFwIiwiUyIsIiQiLCJBIiwiVCIsIkIiLCJSIiwidmFsaWRhdGVQcm9wZXJGdW5jdGlvbiIsInJlZ2V4Q29udmVydCIsImludmFsaWRDaGFyYWN0ZXJzIiwic2VhcmNoIiwiaXNWYWxpZEZ1bmN0aW9uIiwibnVtYmVyUmVtb3ZlciIsIm5lZ2F0aXZlUmVtb3ZlciIsImVuaGFuY2VkUGFyYW50aGVzZXNSZW1vdmVyIiwiY2hhclN0YWNrIiwicG9pbnQiLCJmYWlsZWQiLCJjdXJyZW50RWxlbSIsInBvcCIsImluY2x1ZGVzIiwiZm9yRWFjaCIsImMiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJkZWZhdWx0RnJhZ21lbnRTaGFkZXIiLCJtYWtlU2hhZGVyIiwiZ2wiLCJzb3VyY2UiLCJzaGFkZXIiLCJjcmVhdGVTaGFkZXIiLCJzaGFkZXJTb3VyY2UiLCJjb21waWxlU2hhZGVyIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIiwiQ09NUElMRV9TVEFUVVMiLCJnZXRTaGFkZXJJbmZvTG9nIiwiZGVsZXRlU2hhZGVyIiwibWFrZVByb2dyYW0iLCJ2ZXJ0ZXhTb3VyY2UiLCJmcmFnbWVudFNvdXJjZSIsInZlcnRleFNoYWRlciIsIlZFUlRFWF9TSEFERVIiLCJmcmFnbWVudFNoYWRlciIsIkZSQUdNRU5UX1NIQURFUiIsInByb2dyYW0iLCJjcmVhdGVQcm9ncmFtIiwiYXR0YWNoU2hhZGVyIiwibGlua1Byb2dyYW0iLCJnZXRQcm9ncmFtUGFyYW1ldGVyIiwiTElOS19TVEFUVVMiLCJnZXRQcm9ncmFtSW5mb0xvZyIsImRlbGV0ZVByb2dyYW0iLCJkcmF3IiwiZHJhd1dpbmRvdyIsImdldENvbnRleHQiLCJ2aWV3cG9ydCIsImNvbG9ycyIsImNsZWFyIiwiYXhlcyIsInBvbHlub21pYWwiLCJjbGVhckNvbG9yIiwiQ09MT1JfQlVGRkVSX0JJVCIsIkRFUFRIX0JVRkZFUl9CSVQiLCJheGlzQnVmZmVyIiwiY3JlYXRlQXhpc2VzIiwidGlja01hcmtCdWZmZXIiLCJjcmVhdGVUaWNrTWFya3MiLCJwb2x5bm9taWFsQnVmZmVyIiwiY3JlYXRlUG9seW5vbWlhbCIsImRyYXdMaW5lcyIsIkZsb2F0MzJBcnJheSIsImRyYXdMaW5lU3RyaXAiLCJtYWtlU3RhdGljRHJhd0FycmF5QnVmZmVyIiwidmVydGljZUFycmF5IiwibnVtVmVydGljZXMiLCJidWZmZXIiLCJjcmVhdGVCdWZmZXIiLCJiaW5kQnVmZmVyIiwiQVJSQVlfQlVGRkVSIiwiYnVmZmVyRGF0YSIsIlNUQVRJQ19EUkFXIiwiZGF0YSIsInhpIiwieWkiLCJudW1YIiwibnVtWSIsImoiLCJwb3NpdGlvbiIsImdldEF0dHJpYkxvY2F0aW9uIiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJ1c2VQcm9ncmFtIiwiY29sIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwidW5pZm9ybTRmdiIsImRyYXdBcnJheXMiLCJMSU5FUyIsIkxJTkVfU1RSSVAiLCJncmFwaEZ1bmN0aW9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUFFLENBQUNtRSxrQkFBSCxDQUFzQmxELE9BQXRCLEVBQStCLE9BQS9CLENBQVo7QUFDQWpCLElBQUUsQ0FBQ29FLFVBQUgsQ0FBY0YsR0FBZCxFQUFtQnBRLEtBQW5CO0FBRUFrTSxJQUFFLENBQUNxRSxVQUFILENBQWNyRSxFQUFFLENBQUN1RSxVQUFqQixFQUE2QixDQUE3QixFQUFnQ2pCLElBQUksQ0FBQ1AsV0FBckM7QUFDRDtBQUVEOzs7OztBQUdBLFNBQVN5QixhQUFULENBQXdCdE8sSUFBeEIsRUFBOEJ3TCxVQUE5QixFQUEwQzNPLEtBQTFDLEVBQWlEO0FBQy9DLE1BQUk7QUFDRixRQUFJbUQsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakJ1TCxVQUFJLENBQUN2TCxJQUFELEVBQU93TCxVQUFQLEVBQW1CM08sS0FBbkIsQ0FBSjtBQUNEO0FBQ0YsR0FKRCxDQUlFLE9BQU8wSSxDQUFQLEVBQVU7QUFDVm5KLFdBQU8sQ0FBQzRMLEtBQVIscUNBQTJDaEksSUFBM0MsOEJBQW1Fd0wsVUFBbkU7QUFDQXBQLFdBQU8sQ0FBQzRMLEtBQVIsQ0FBY3pDLENBQWQ7QUFDRDtBQUNGOztBQUVjK0ksNEVBQWYsRSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vY2xpZW50L2NhbGN1bGF0b3IuanNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBMb2FkIFJlYWN0IGxpYnJhcmllc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcblxuLy8gTG9hZCBjb21wb25lbnRcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzeCdcblxuY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTk9ERV9FTlYpXG5cbi8vIFJlbmRlcmluZyB0aGUgY29tcG9uZW50IGludG8gdGhlIHBhZ2VcblJlYWN0RE9NLnJlbmRlcihcbiAgPENhbGN1bGF0b3IgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSwgQ2FyZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgZGlzcGxheToge1xuICAgIHBhZGRpbmc6ICc1cHggMTBweCdcbiAgfVxufSkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuc3dlckJveCAocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBlbGV2YXRpb249ezR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXNwbGF5fT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPntgJHtwcm9wcy5jdXJyZW50RXF1YXRpb259ID0gJHtwcm9wcy52YWx1ZX1gfTwvVHlwb2dyYXBoeT5cbiAgICA8L0NhcmQ+XG4gIClcbn1cblxuQW5zd2VyQm94LnByb3BUeXBlcyA9IHtcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGN1cnJlbnRFcXVhdGlvbjogUHJvcFR5cGVzLnN0cmluZ1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcidcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXMnXG5pbXBvcnQgdXNlVGhlbWUgZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcy91c2VUaGVtZSdcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHRpdGxlOiB7XG4gICAgZmxleEdyb3c6IDFcbiAgfVxufSkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhbm5lciAocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuICBsZXQgY29sb3IgPSAncHJpbWFyeSdcbiAgaWYgKHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnKSB7XG4gICAgY29sb3IgPSAnaW5oZXJpdCdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNvbG9yPXtjb2xvcn0+XG4gICAgICA8VG9vbGJhciB2YXJpYW50PVwiZGVuc2VcIj5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9Ub29sYmFyPlxuICAgIDwvQXBwQmFyPlxuICApXG59XG5cbkJhbm5lci5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJ1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcbmltcG9ydCBtYWtlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzLmpzJ1xuXG5pbXBvcnQgQnV0dG9uU2VjdGlvbiBmcm9tICcuL0J1dHRvblNlY3Rpb24uanN4J1xuaW1wb3J0IElucHV0QnV0dG9uIGZyb20gJy4vSW5wdXRCdXR0b24uanN4J1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6ICc1cHgnXG4gIH1cbn0pKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25HcmlkIChwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICBjb25zdCBjcmVhdGVCdXR0b24gPSAodmFsdWUsIHRleHQgPSB2YWx1ZSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8SW5wdXRCdXR0b24gdmFsdWU9e3ZhbHVlfSB0aXRsZT17dGV4dH0gaGFuZGxlQnV0dG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUJ1dHRvbkNsaWNrfS8+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgZWxldmF0aW9uPXs0fSA+XG4gICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHNwYWNpbmc9ezF9IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8QnV0dG9uU2VjdGlvbiBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAge2NyZWF0ZUJ1dHRvbignMCcpfVxuICAgICAgICAgICAgICB7Y3JlYXRlQnV0dG9uKCcxJyl9XG4gICAgICAgICAgICAgIHtjcmVhdGVCdXR0b24oJzInKX1cbiAgICAgICAgICAgICAge2NyZWF0ZUJ1dHRvbignMycpfVxuICAgICAgICAgICAgICB7Y3JlYXRlQnV0dG9uKCc0Jyl9XG4gICAgICAgICAgICA8L0J1dHRvblNlY3Rpb24+XG4gICAgICAgICAgICA8QnV0dG9uU2VjdGlvbiBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAge2NyZWF0ZUJ1dHRvbignNScpfVxuICAgICAgICAgICAgICB7Y3JlYXRlQnV0dG9uKCc2Jyl9XG4gICAgICAgICAgICAgIHtjcmVhdGVCdXR0b24oJzcnKX1cbiAgICAgICAgICAgICAge2NyZWF0ZUJ1dHRvbignOCcpfVxuICAgICAgICAgICAgICB7Y3JlYXRlQnV0dG9uKCc5Jyl9XG4gICAgICAgICAgICA8L0J1dHRvblNlY3Rpb24+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0ganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEJ1dHRvblNlY3Rpb24gc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgIHtjcmVhdGVCdXR0b24oJysnKX1cbiAgICAgICAgICAgICAge2NyZWF0ZUJ1dHRvbignLScpfVxuICAgICAgICAgICAgICB7Y3JlYXRlQnV0dG9uKCcqJyl9XG4gICAgICAgICAgICAgIHtjcmVhdGVCdXR0b24oJy8nKX1cbiAgICAgICAgICAgICAge2NyZWF0ZUJ1dHRvbignXignLCAnXicpfVxuICAgICAgICAgICAgPC9CdXR0b25TZWN0aW9uPlxuICAgICAgICAgICAgPEJ1dHRvblNlY3Rpb24gc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgIHtjcmVhdGVCdXR0b24oJ14oMS8yKScsIDxzcGFuPiZyYWRpYzs8L3NwYW4+KX1cbiAgICAgICAgICAgICAge2NyZWF0ZUJ1dHRvbigncGknLCA8c3Bhbj4mcGk7PC9zcGFuPil9XG4gICAgICAgICAgICAgIHtjcmVhdGVCdXR0b24oJzcnLCAnZScpfVxuICAgICAgICAgICAgICB7Y3JlYXRlQnV0dG9uKCc4JywgJ2xuJyl9XG4gICAgICAgICAgICAgIHtjcmVhdGVCdXR0b24oJzknLCAnbG9nJyl9XG4gICAgICAgICAgICA8L0J1dHRvblNlY3Rpb24+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8QnV0dG9uU2VjdGlvbiBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgICAge2NyZWF0ZUJ1dHRvbignc2luKCcsICdzaW4nKX1cbiAgICAgICAgICAgICAge2NyZWF0ZUJ1dHRvbignY29zKCcsICdjb3MnKX1cbiAgICAgICAgICAgICAge2NyZWF0ZUJ1dHRvbigndGFuKCcsICd0YW4nKX1cbiAgICAgICAgICAgIDwvQnV0dG9uU2VjdGlvbj5cbiAgICAgICAgICAgIDxCdXR0b25TZWN0aW9uIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICB7Y3JlYXRlQnV0dG9uKCdhc2luKCcsICdhcmNzaW4nKX1cbiAgICAgICAgICAgICAge2NyZWF0ZUJ1dHRvbignYWNvcygnLCAnYXJjY29zJyl9XG4gICAgICAgICAgICAgIHtjcmVhdGVCdXR0b24oJ2F0YW4oJywgJ2FyY3RhbicpfVxuICAgICAgICAgICAgPC9CdXR0b25TZWN0aW9uPlxuICAgICAgICAgICAgPEJ1dHRvblNlY3Rpb24gc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgIHtjcmVhdGVCdXR0b24oJ3gnKX1cbiAgICAgICAgICAgICAge2NyZWF0ZUJ1dHRvbignKCcpfVxuICAgICAgICAgICAgICB7Y3JlYXRlQnV0dG9uKCcpJyl9XG4gICAgICAgICAgICA8L0J1dHRvblNlY3Rpb24+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9QYXBlcj5cbiAgKVxufVxuXG5CdXR0b25HcmlkLnByb3BUeXBlcyA9IHtcbiAgaGFuZGxlQnV0dG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcbmltcG9ydCBtYWtlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMvbWFrZVN0eWxlcydcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleFdyYXA6ICdub3dyYXAnXG4gIH1cbn0pKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25TZWN0aW9uIChwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgcmV0dXJuIChcbiAgICA8R3JpZCBpdGVtPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e3Byb3BzLnNwYWNpbmd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKVxufVxuXG5CdXR0b25TZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBzcGFjaW5nOiBQcm9wVHlwZXMubnVtYmVyXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lLCBUaGVtZVByb3ZpZGVyLCBDc3NCYXNlbGluZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSdcbmltcG9ydCBtYWtlU3R5bGVzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzJ1xuXG5pbXBvcnQgRW50cnlHcmlkIGZyb20gJy4vRW50cnlHcmlkLmpzeCdcbmltcG9ydCBHcmFwaEdyaWQgZnJvbSAnLi9HcmFwaEdyaWQuanN4J1xuaW1wb3J0IEJhbm5lciBmcm9tICcuL0Jhbm5lci5qc3gnXG5pbXBvcnQgU2V0dGluZ3NMaXN0IGZyb20gJy4vU2V0dGluZ3NMaXN0LmpzeCdcblxuaW1wb3J0IHsgcHJvY2Vzc0Z1bmN0aW9uLCBldmFsdWF0ZUZ1bmN0aW9uIH0gZnJvbSAnLi4vcGFyc2VyL2VxdWF0aW9uUGFyc2VyLmpzJ1xuXG5jb25zdCBvcmlnaW5hbEVxdWF0aW9uID0gJ3gnXG5jb25zdCBvcmlnaW5hbFRyZWUgPSBwcm9jZXNzRnVuY3Rpb24ob3JpZ2luYWxFcXVhdGlvbilcbmNvbnN0IG9yaWdpbmFsVmFsdWUgPSBldmFsdWF0ZUZ1bmN0aW9uKG9yaWdpbmFsVHJlZSwgMSkudG9TdHJpbmcoKVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgZ3JpZDoge1xuICAgIHBhZGRpbmc6ICcwLjc1ZW0nXG4gIH1cbn0pKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxjdWxhdG9yICgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgY29uc3QgW2N1cnJlbnRFcXVhdGlvbiwgc2V0Q3VycmVudEVxdWF0aW9uXSA9IHVzZVN0YXRlKG9yaWdpbmFsRXF1YXRpb24pXG4gIGNvbnN0IFtjdXJyZW50VHJlZSwgc2V0Q3VycmVudFRyZWVdID0gdXNlU3RhdGUob3JpZ2luYWxUcmVlKVxuICBjb25zdCBbY3VycmVudFZhbHVlLCBzZXRDdXJyZW50VmFsdWVdID0gdXNlU3RhdGUob3JpZ2luYWxWYWx1ZSlcbiAgY29uc3QgW3VzZURhcmtUaGVtZSwgc2V0VXNlRGFya1RoZW1lXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaW5pdGlhbERhcmtUaGVtZVNldCwgc2V0VXNlSW5pdGlhbERhcmtUaGVtZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBoYW5kbGVFcXVhdGlvbkNoYW5nZSA9IChuZXdFcXVhdGlvbikgPT4ge1xuICAgIHNldEN1cnJlbnRFcXVhdGlvbihuZXdFcXVhdGlvbilcbiAgICBjb25zdCB0cmVlID0gcHJvY2Vzc0Z1bmN0aW9uKG5ld0VxdWF0aW9uKVxuICAgIHNldEN1cnJlbnRUcmVlKHRyZWUpXG4gICAgaWYgKHRyZWUgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRWYWx1ZShldmFsdWF0ZUZ1bmN0aW9uKHRyZWUsIDEpLnRvU3RyaW5nKCkpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRXF1YXRpb25Cb3hDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBoYW5kbGVFcXVhdGlvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9IChldmVudCkgPT4ge1xuICAgIGhhbmRsZUVxdWF0aW9uQ2hhbmdlKGN1cnJlbnRFcXVhdGlvbiArIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBzZXRFcXVhdGlvbiA9ICh2YWx1ZSkgPT4ge1xuICAgIGhhbmRsZUVxdWF0aW9uQ2hhbmdlKHZhbHVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU2V0dGluZ3NCdXR0b25DbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlID09PSAndGhlbWUnKSB7XG4gICAgICBzZXRVc2VEYXJrVGhlbWUoIXVzZURhcmtUaGVtZSlcbiAgICB9XG4gIH1cblxuICBpZiAodXNlTWVkaWFRdWVyeSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpICYmICFpbml0aWFsRGFya1RoZW1lU2V0KSB7XG4gICAgc2V0VXNlRGFya1RoZW1lKHRydWUpXG4gICAgc2V0VXNlSW5pdGlhbERhcmtUaGVtZSh0cnVlKVxuICB9XG5cbiAgY29uc3QgdGhlbWVUeXBlID0gdXNlRGFya1RoZW1lID8gJ2RhcmsnIDogJ2xpZ2h0J1xuXG4gIGNvbnN0IHRoZW1lID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgY3JlYXRlTXVpVGhlbWUoe1xuICAgICAgICBwYWxldHRlOiB7XG4gICAgICAgICAgdHlwZTogdGhlbWVUeXBlXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgIFt0aGVtZVR5cGVdXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgIDxCYW5uZXIgdGl0bGU9eydDYWxjdWxhdG9yJ30+XG4gICAgICAgIDxTZXR0aW5nc0xpc3QgaGFuZGxlQnV0dG9uQ2xpY2s9e2hhbmRsZVNldHRpbmdzQnV0dG9uQ2xpY2t9IC8+XG4gICAgICA8L0Jhbm5lcj5cblxuICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9IGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAgPEdyYXBoR3JpZCBjdXJyZW50RXF1YXRpb249e2N1cnJlbnRFcXVhdGlvbn0gdHJlZT17Y3VycmVudFRyZWV9IHZhbHVlPXtjdXJyZW50VmFsdWV9IHRoZW1lPXt0aGVtZVR5cGV9PjwvR3JhcGhHcmlkPlxuICAgICAgICA8RW50cnlHcmlkIGN1cnJlbnRFcXVhdGlvbj17Y3VycmVudEVxdWF0aW9ufSBoYW5kbGVFcXVhdGlvbkNoYW5nZT17aGFuZGxlRXF1YXRpb25Cb3hDaGFuZ2V9XG4gICAgICAgICAgaGFuZGxlQnV0dG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfSBjdXJyZW50VmFsdWU9e2N1cnJlbnRWYWx1ZX0gc2V0Q3VycmVudEVxdWF0aW9uPXtzZXRFcXVhdGlvbn0vPlxuICAgICAgPC9HcmlkPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKVxufVxuIiwiLy8gICAgIDxjYW52YXMgaWQ9XCJzY3JlZW5cIiA+PC9jYW52YXM+XG4vLyAgICAgPHRleHRhcmVhIGlkPVwidXNlclN0cmluZ1wiIHJvd3M9XCI1XCIgY29scz1cIjg1XCI+eDwvdGV4dGFyZWE+PGJyLz5cbi8vICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPVwiZ3JhcGhGdW5jdGlvbigpXCI+R3JhcGg8L2J1dHRvbj5cbi8vICAgICA8ZGl2IGlkPVwicmVzdWx0XCI+PC9kaXY+PGJyLz5cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHsgTGlzdCwgTGlzdEl0ZW0sIFRleHRGaWVsZCwgTGlzdEl0ZW1UZXh0LCBtYWtlU3R5bGVzLCBQYXBlciwgRGl2aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICBtYXhIZWlnaHQ6IDMwMCxcbiAgICBoZWlnaHQ6IDMwMFxuICB9LFxuXG4gIHRleHRGaWVsZDoge1xuICAgIHdpZHRoOiAnMTAwJSdcbiAgfSxcblxuICBlbnRyeToge1xuICAgIG1hcmdpbkJvdHRvbTogJy0xLjVlbSdcbiAgfSxcblxuICByZXN1bHQ6IHtcbiAgICB0ZXh0QWxpZ246ICdyaWdodCdcbiAgfVxufSkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVudHJ5RmllbGQgKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gIGNvbnN0IFtlbnRyaWVzTGlzdCwgc2V0RW50cmllc0xpc3RdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtyZXN1bHRzTGlzdCwgc2V0UmVzdWx0c0xpc3RdID0gdXNlU3RhdGUoW10pXG5cbiAgY29uc3Qgb25LZXlQcmVzcyA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHNldEVudHJpZXNMaXN0KGVudHJpZXNMaXN0LmNvbmNhdChwcm9wcy5jdXJyZW50RW50cnkpKVxuICAgICAgaWYgKHByb3BzLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNldFJlc3VsdHNMaXN0KHJlc3VsdHNMaXN0LmNvbmNhdChwcm9wcy5jdXJyZW50VmFsdWUpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0UmVzdWx0c0xpc3QocmVzdWx0c0xpc3QuY29uY2F0KCd1bmRlZmluZWQnKSlcbiAgICAgIH1cbiAgICAgIHByb3BzLnNldEN1cnJlbnRFbnRyeSgnJylcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RmllbGRFbnRyeUJveCcpLnNjcm9sbEludG9WaWV3KGZhbHNlKVxuICB9LCBbZW50cmllc0xpc3RdKVxuXG4gIGNvbnN0IGVudHJ5VGlsZXMgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgZW50cnlUaWxlcy5wdXNoKFxuICAgICAgPExpc3RJdGVtIGtleT17aSAqIDJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5lbnRyeX0+XG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17ZW50cmllc0xpc3RbaV19PlxuICAgICAgICA8L0xpc3RJdGVtVGV4dD5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgKVxuICAgIGVudHJ5VGlsZXMucHVzaChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaXN0SXRlbSBrZXk9e2kgKiAyICsgMX0+XG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtyZXN1bHRzTGlzdFtpXX0gY2xhc3NOYW1lPXtjbGFzc2VzLnJlc3VsdH0+XG4gICAgICAgICAgPC9MaXN0SXRlbVRleHQ+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxQYXBlciBlbGV2YXRpb249ezR9PlxuICAgICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGRlbnNlPXt0cnVlfT5cbiAgICAgICAge2VudHJ5VGlsZXN9XG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VGV4dEZpZWxkIGlkPSd0ZXh0RmllbGRFbnRyeUJveCcgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH0gdmFsdWU9e3Byb3BzLmN1cnJlbnRFbnRyeX0gb25DaGFuZ2U9e3Byb3BzLm9uRW50cnlDaGFuZ2V9IG9uS2V5UHJlc3M9e29uS2V5UHJlc3N9Lz5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgIDwvTGlzdD5cbiAgICA8L1BhcGVyPlxuICApXG59XG5cbkVudHJ5RmllbGQucHJvcFR5cGVzID0ge1xuICBjdXJyZW50RW50cnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uRW50cnlDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBjdXJyZW50VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNldEN1cnJlbnRFbnRyeTogUHJvcFR5cGVzLmZ1bmNcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcblxuaW1wb3J0IEVudHJ5RmllbGQgZnJvbSAnLi9FbnRyeUZpZWxkLmpzeCdcbmltcG9ydCBCdXR0b25HcmlkIGZyb20gJy4vQnV0dG9uR3JpZC5qc3gnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVudHJ5R3JpZCAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8R3JpZCBpdGVtIHhzPXsgMTIgfSBtZD17IDYgfSBsZz17OH0+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgPEVudHJ5RmllbGQgY3VycmVudEVudHJ5PXtwcm9wcy5jdXJyZW50RXF1YXRpb259IG9uRW50cnlDaGFuZ2U9e3Byb3BzLmhhbmRsZUVxdWF0aW9uQ2hhbmdlfVxuICAgICAgICAgICAgY3VycmVudFZhbHVlPXtwcm9wcy5jdXJyZW50VmFsdWV9IHNldEN1cnJlbnRFbnRyeT17cHJvcHMuc2V0Q3VycmVudEVxdWF0aW9ufS8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8QnV0dG9uR3JpZCBoYW5kbGVCdXR0b25DbGljaz17cHJvcHMuaGFuZGxlQnV0dG9uQ2xpY2t9IC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gIClcbn1cblxuRW50cnlHcmlkLnByb3BUeXBlcyA9IHtcbiAgY3VycmVudEVxdWF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGhhbmRsZUVxdWF0aW9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVCdXR0b25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY3VycmVudFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZXRDdXJyZW50RXF1YXRpb246IFByb3BUeXBlcy5mdW5jXG59XG4iLCIvLyAgICAgPGNhbnZhcyBpZD1cInNjcmVlblwiID48L2NhbnZhcz5cbi8vICAgICA8dGV4dGFyZWEgaWQ9XCJ1c2VyU3RyaW5nXCIgcm93cz1cIjVcIiBjb2xzPVwiODVcIj54PC90ZXh0YXJlYT48YnIvPlxuLy8gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9XCJncmFwaEZ1bmN0aW9uKClcIj5HcmFwaDwvYnV0dG9uPlxuLy8gICAgIDxkaXYgaWQ9XCJyZXN1bHRcIj48L2Rpdj48YnIvPlxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBkcmF3R3JhcGggZnJvbSAnLi4vd2ViZ2wvZHJhd0dyYXBoLmpzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBDYXJkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBjYW52YXM6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJ2F1dG8nXG4gIH1cbn0pKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmFwaCAocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkcmF3R3JhcGgocHJvcHMudHJlZSwgY2FudmFzUmVmLmN1cnJlbnQsIHByb3BzLnRoZW1lKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPENhcmQgZWxldmF0aW9uPXs0fSA+PGNhbnZhcyBjbGFzc05hbWU9e2NsYXNzZXMuY2FudmFzfSB3aWR0aD0nNTAwcHgnIGhlaWdodD0nNTAwcHgnIHJlZj17IGNhbnZhc1JlZiB9PjwvY2FudmFzPjwvQ2FyZD5cbiAgKVxufVxuXG5HcmFwaC5wcm9wVHlwZXMgPSB7XG4gIHRyZWU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHRoZW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbkdyYXBoLmRlZmF1bHRQcm9wcyA9IHtcbiAgdHJlZTogbnVsbCxcbiAgdGhlbWU6ICdsaWdodCdcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcblxuaW1wb3J0IEdyYXBoIGZyb20gJy4vR3JhcGguanN4J1xuaW1wb3J0IEFuc3dlckJveCBmcm9tICcuL0Fuc3dlckJveC5qc3gnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyYXBoR3JpZCAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8R3JpZCBpdGVtIHhzPXsgMTIgfSBtZD17IDYgfSBsZz17NH0+XG4gICAgICA8R3JhcGggdHJlZT17cHJvcHMudHJlZX0gdGhlbWU9e3Byb3BzLnRoZW1lfSAvPjxiciAvPlxuICAgICAgPEFuc3dlckJveCB2YWx1ZT17cHJvcHMudmFsdWV9IGN1cnJlbnRFcXVhdGlvbj17cHJvcHMuY3VycmVudEVxdWF0aW9ufSAvPlxuICAgIDwvR3JpZD5cbiAgKVxufVxuXG5HcmFwaEdyaWQucHJvcFR5cGVzID0ge1xuICBjdXJyZW50RXF1YXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRyZWU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aGVtZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcy9tYWtlU3R5bGVzJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgYnV0dG9uOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnXG4gIH1cbn0pKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEJ1dHRvbiAocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gIHJldHVybiAoXG4gICAgPEdyaWQgaXRlbT5cbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCJsYXJnZVwiIG9uQ2xpY2s9eyBwcm9wcy5oYW5kbGVCdXR0b25DbGljayB9IHZhbHVlPXsgcHJvcHMudmFsdWUgfT5cbiAgICAgICAgPFR5cG9ncmFwaHk+e3Byb3BzLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvR3JpZD5cbiAgKVxufVxuXG5JbnB1dEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gIGhhbmRsZUJ1dHRvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5JbnB1dEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHZhbHVlOiAnJyxcbiAgdGl0bGU6ICcnLFxuICBoYW5kbGVCdXR0b25DbGljazogKCkgPT4ge31cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbidcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnXG5cbmltcG9ydCBCcmlnaHRuZXNzNCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmdzR3JpZCAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8VG9vbHRpcCB0aXRsZT1cIlRvZ2dsZSBEYXJrIE1vZGVcIj5cbiAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9eyBwcm9wcy5oYW5kbGVCdXR0b25DbGljayB9IHZhbHVlPSd0aGVtZSc+PEJyaWdodG5lc3M0IC8+PC9JY29uQnV0dG9uPlxuICAgIDwvVG9vbHRpcD5cbiAgKVxufVxuXG5TZXR0aW5nc0dyaWQucHJvcFR5cGVzID0ge1xuICBoYW5kbGVCdXR0b25DbGljazogUHJvcFR5cGVzLmZ1bmNcbn1cblxuU2V0dGluZ3NHcmlkLmRlZmF1bHRQcm9wVHlwZXMgPSB7XG4gIGhhbmRsZUJ1dHRvbkNsaWNrOiAoKSA9PiB7fVxufVxuIiwiLyoqXG4gKiBFbnVtIHRvIGhvbGQgYW4gZXhwcmVzc2lvbiB0eXBlLiBVc2VkIGZvciB0dXJuaW5nIGEgZnVuY3Rpb24gc3RyaW5nIGludG8gYSB0cmVlLlxuICogQ2FuIGJlIEVYUCAoRXhwcmVzc2lvbiksIE1FWFAgKE11bHRpcGxpY2F0aW9uIEV4cHJlc3Npb24pLCBvciBQRVhQIChQYXJhbnRoZXNlcyBFeHByZXNzaW9uKS5cbiAqL1xuY29uc3QgRXhwcmVzc2lvblR5cGUgPSBPYmplY3QuZnJlZXplKHtcbiAgRVhQOiAxLFxuICBNRVhQOiAyLFxuICBORVhQOiAzLFxuICBFRVhQOiA0LFxuICBQRVhQOiA1XG59KVxuXG5leHBvcnQgZGVmYXVsdCBFeHByZXNzaW9uVHlwZVxuIiwiaW1wb3J0IFRva2VuVHlwZSBmcm9tICcuL1Rva2VuVHlwZS5qcydcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSB0b2tlbiBpbiBhIGZ1bmN0aW9uLiBTdXBwb3J0cyAoLCApLCArLCAtLCAqLCAvLiBFdmVyeXRoaW5nIGVsc2UgZGVmYXVsdHMgdG8gdmFsdWVzLlxuICogQ29udGFpbnMgcHJvcGVydGllcyBuZXh0LCBwcmV2aW91cywgdmFsdWUsIGFuZCB0b2tlblR5cGUuIFByZXZpb3VzIGFuZCBuZXh0IGFyZSB1c2VkIHRvIHBvaW50IHRvIHRoZSBuZXh0XG4gKiBhbmQgcHJldmlvdXMgdmFsdWVzIGluIGEgbGlzdCBvZiB0b2tlbnMsIHdoaWxlIHZhbHVlIGNvbnRhaW5zIHRoZSB0b2tlbiBkYXRhLiBUaGUgdG9rZW5UeXBlIGlzIGEgVG9rZW5UeXBlXG4gKiB2YXJpYWJsZSB0aGF0IGlzIHNldCB0byB0aGUgY29ycmVzcG9uZGluZyBUb2tlblR5cGUgdmFsdWUgZGVwZW5kaW5nIG9uIHRoZSB0b2tlbiB2YWx1ZS4gSXQgaXMgc2V0IHRvXG4gKiBUb2tlblR5cGUuVkFMVUUgYXMgYSBkZWZhdWx0LlxuICovXG5jbGFzcyBUb2tlbiB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBuZXh0IGFuZCBwcmV2aW91cyB0byBudWxsLCB2YWx1ZSB0byB0b2tlbiwgYW5kIHRva2VuVHlwZSB0byB0aGUgY29ycmVjdCBUb2tlblR5cGUgdmFsdWUgZm9yXG4gICAqIHRoZSB0b2tlbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRva2VuIFRoZSB0b2tlbiB0byBzZXQgdGhlIHZhbHVlIHByb3BlcnR5IHRvIGFuZCB0aGF0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSB0b2tlblR5cGUuXG4gICAqL1xuICBjb25zdHJ1Y3RvciAodG9rZW4pIHtcbiAgICB0aGlzLnZhbHVlID0gdG9rZW5cbiAgICB0aGlzLm5leHQgPSBudWxsXG4gICAgdGhpcy5wcmV2aW91cyA9IG51bGxcbiAgICB0aGlzLnRva2VuVHlwZSA9IFRva2VuVHlwZS5WQUxVRVxuXG4gICAgaWYgKHRva2VuID09PSAnKCcpIHtcbiAgICAgIHRoaXMudG9rZW5UeXBlID0gVG9rZW5UeXBlLk9QRU5fUEFSQU5USEVTRVNcbiAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnKScpIHtcbiAgICAgIHRoaXMudG9rZW5UeXBlID0gVG9rZW5UeXBlLkNMT1NFX1BBUkFOVEhFU0VTXG4gICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJysnKSB7XG4gICAgICB0aGlzLnRva2VuVHlwZSA9IFRva2VuVHlwZS5BRERJVElPTlxuICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICctJykge1xuICAgICAgdGhpcy50b2tlblR5cGUgPSBUb2tlblR5cGUuTkVHQVRJT05cbiAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnKicgfHwgdG9rZW4gPT09ICcvJykge1xuICAgICAgdGhpcy50b2tlblR5cGUgPSBUb2tlblR5cGUuTVVMVElQTElDQVRJT05cbiAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnXicpIHtcbiAgICAgIHRoaXMudG9rZW5UeXBlID0gVG9rZW5UeXBlLlBPV0VSXG4gICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ2NvcygnIHx8IHRva2VuID09PSAnc2luKCcgfHwgdG9rZW4gPT09ICd0YW4oJyB8fCB0b2tlbiA9PT0gJ2Fjb3MoJyB8fCB0b2tlbiA9PT0gJ2FzaW4oJyB8fFxuICAgICAgICAgICAgICAgIHRva2VuID09PSAnYXRhbignIHx8IHRva2VuID09PSAnbG9nKCcgfHwgdG9rZW4gPT09ICdsbignKSB7XG4gICAgICB0aGlzLnRva2VuVHlwZSA9IFRva2VuVHlwZS5FX09QRU5fUEFSQU5USEVTRVNcbiAgICAgIHRoaXMudmFsdWUgPSB0b2tlbi5zdWJzdHIoMCwgMilcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9rZW5cbiIsIi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgdG9rZW4gbGlzdCwgY29udGFpbmluZyBwcm9wZXJ0aWVzIGhvbGRpbmcgdGhlIGhlYWQgYW5kIHRoZSB0YWlsIGFuZCBhIGZ1bmN0aW9uIHRvXG4gKiBhZGQgYSBuZXcgdG9rZW4uIEVhY2ggdG9rZW4gaW4gdGhlIGxpc3QgbXVzdCBoYXZlIHByZXZpb3VzIGFuZCBuZXh0IHByb3BlcnRpZXMuXG4gKi9cbmNsYXNzIFRva2VuTGlzdCB7XG4gIC8qKlxuICAgICAqIEluaXRpdGlhbGl6ZXMgdGhlIGhlYWQgYW5kIHRhaWwgcHJvcGVydGllcyB0byBudWxsLlxuICAgICAqL1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5oZWFkID0gbnVsbFxuICAgIHRoaXMudGFpbCA9IG51bGxcbiAgfVxuXG4gIC8qKlxuICAgICAqIEFkZHMgYSB0b2tlbiB0byB0aGUgZW5kIG9mIHRoZSBUb2tlbkxpc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHRva2VuIEEgdG9rZW4gdG8gYWRkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuIE11c3QgY29udGFpbiBwcm9wZXJ0aWVzIG5leHQgYW5kIHByZXZpb3VzLlxuICAgICAqL1xuICBhZGQgKHRva2VuKSB7XG4gICAgaWYgKHRoaXMuaGVhZCA9PSBudWxsKSB7XG4gICAgICB0aGlzLmhlYWQgPSB0b2tlblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhaWwubmV4dCA9IHRva2VuXG4gICAgICB0b2tlbi5wcmV2aW91cyA9IHRoaXMudGFpbFxuICAgIH1cbiAgICB0aGlzLnRhaWwgPSB0b2tlblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRva2VuTGlzdFxuIiwiLyoqXG4gKiBFbnVtIHRvIGhvbGQgbWF0aGVtYXRpY2FsIHRva2VuIHR5cGVzLiBDYW4gYmUgT1BFTl9QQVJOVEhFU0VTLCBDTE9TRV9QQVJBTlRIRVNFUywgVkFMVUUsIEFERElUSU9OLCBvciBNVUxUSVBMSUNBVElPTi5cbiAqL1xuY29uc3QgVG9rZW5UeXBlID0gT2JqZWN0LmZyZWV6ZSh7XG4gIE9QRU5fUEFSQU5USEVTRVM6IDEsXG4gIENMT1NFX1BBUkFOVEhFU0VTOiAyLFxuICBWQUxVRTogMyxcbiAgQURESVRJT046IDQsXG4gIE1VTFRJUExJQ0FUSU9OOiA1LFxuICBORUdBVElPTjogNixcbiAgUE9XRVI6IDcsXG4gIEVfT1BFTl9QQVJBTlRIRVNFUzogOFxufSlcblxuZXhwb3J0IGRlZmF1bHQgVG9rZW5UeXBlXG4iLCIvKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIG5vZGUgb2YgYSBiaW5hcnkgdHJlZSB3aXRoIGEgdG9rZW4uIENvbnRhaW5zIHZhbHVlLCBsZWZ0Q2hpbGQsIHJpZ2h0Q2hpbGQsXG4gKiBhbmQgcGFyZW50IHByb3BlcnRpZXMsIGFzIHdlbGwgYXMgY3JlYXRlTGVmdENoaWxkIGFuZCBjcmVhdGVSaWdodENoaWxkIGZ1bmN0aW9ucy4gTGVmdCBjaGlsZCxcbiAqIHJpZ2h0IGNoaWxkLCBhbmQgcGFyZW50IHByb3BlcnRpZXMgYXJlIGF1dG9tYXRpY2FsbHkgc2V0IGFuZCBzaG91bGQgdXN1YWxseSBvbmx5IGJlIGdvdHRlbi5cbiAqL1xuY2xhc3MgVHJlZU5vZGUge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHZhbHVlLCBsZWZ0Q2hpbGQsIHJpZ2h0Q2hpbGQsIGFuZCBwYXJlbnQgdmFyaWFibGVzIHRvIG51bGwuXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy52YWx1ZSA9IG51bGxcbiAgICB0aGlzLmxlZnRDaGlsZCA9IG51bGxcbiAgICB0aGlzLnJpZ2h0Q2hpbGQgPSBudWxsXG4gICAgdGhpcy5wYXJlbnQgPSBudWxsXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyB0cmVlIG5vZGUgYW5kIGFzc2lnbnMgaXQgdG8gdGhlIGxlZnQgY2hpbGQgb2YgdGhpcyB0cmVlIG5vZGUuXG4gICAqIFNldHMgdGhlIG5ldyB0cmVlIG5vZGUncyBwYXJlbnQgdG8gdGhpcyB0cmVlIG5vZGUuXG4gICAqL1xuICBjcmVhdGVMZWZ0Q2hpbGQgKCkge1xuICAgIHRoaXMubGVmdENoaWxkID0gbmV3IFRyZWVOb2RlKClcbiAgICB0aGlzLmxlZnRDaGlsZC5wYXJlbnQgPSB0aGlzXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyB0cmVlIG5vZGUgYW5kIGFzc2lnbnMgaXQgdG8gdGhlIHJpZ2h0IGNoaWxkIG9mIHRoaXMgdHJlZSBub2RlLlxuICAgKiBTZXRzIHRoZSBuZXcgdHJlZSBub2RlJ3MgcGFyZW50IHRvIHRoaXMgdHJlZSBub2RlLlxuICAgKi9cbiAgY3JlYXRlUmlnaHRDaGlsZCAoKSB7XG4gICAgdGhpcy5yaWdodENoaWxkID0gbmV3IFRyZWVOb2RlKClcbiAgICB0aGlzLnJpZ2h0Q2hpbGQucGFyZW50ID0gdGhpc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWVOb2RlXG4iLCJpbXBvcnQgY3JlYXRlUGFyc2VUcmVlIGZyb20gJy4vcGFyc2VUcmVlLmpzJ1xuaW1wb3J0IHByb2Nlc3NJbXBsaWNpdCBmcm9tICcuL2ltcGxpY2l0LmpzJ1xuaW1wb3J0IHZhbGlkYXRlRnVuY3Rpb24gZnJvbSAnLi92YWxpZGF0ZUZ1bmN0aW9uLmpzJ1xuXG4vKipcbiAqIFByb2Nlc3NlcyBhIHN0cmluZyBjb250YWluaW5nIGEgZnVuY3Rpb24uIFJlbW92ZXMgd2hpdGVzcGFjZSwgaGFuZGxlcyBpbXBsaWNpdCBtdWx0aXBsaWNhdGlvbiwgY2hlY2tzXG4gKiB0aGF0IHRoZSBmdW5jdGlvbiBpcyB2YWxpZCwgYW5kIGNvbnZlcnRzIGl0IGludG8gYSBmdW5jdGlvbiBwYXJzZSB0cmVlIHRoYXQgaXMgcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKlxuICogQHJldHVybnMge1RyZWVOb2RlfSBUaGUgcGFyc2UgdHJlZSByZXByZXNlbnRpbmcgdGhlIGZ1bmN0aW9uIHRoYXQgd2FzIGNyZWF0ZWQuIFJldHVybnMgbnVsbCBpZiB0aGVcbiAqICBmdW5jdGlvbiB3YXMgaW52YWxpZC5cbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc0Z1bmN0aW9uIChmdW5jKSB7XG4gIGNvbnNvbGUubG9nKCdFbnRlcmluZyBwcm9jZXNzRnVuY3Rpb24nKVxuICB0cnkge1xuICAgIGNvbnN0IGltcGxpY2l0QWRkZWRGdW5jID0gcHJvY2Vzc0ltcGxpY2l0KGZ1bmMpXG5cbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JykuaW5uZXJIVE1MID0gaW1wbGljaXRBZGRlZEZ1bmNcblxuICAgIGxldCB0cmVlID0gbnVsbFxuXG4gICAgLy8gICBpZiAodmFsaWRhdGVGdW5jdGlvbihpbXBsaWNpdEFkZGVkRnVuYykpIHtcbiAgICAvLyAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBmdW5jdGlvbiEnKVxuICAgIC8vICAgfSBlbHNlIHtcbiAgICB0cmVlID0gY3JlYXRlUGFyc2VUcmVlKGltcGxpY2l0QWRkZWRGdW5jKVxuXG4gICAgY29uc29sZS5sb2coZXZhbHVhdGVGdW5jdGlvbih0cmVlLCAxKSlcbiAgICAvLyAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdFeGl0aW5nIHByb2Nlc3NGdW5jdGlvbicpXG4gICAgcmV0dXJuIHRyZWVcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGBQcm9jZXNzIGZ1bmN0aW9uIGZhaWxlZCBmb3IgJHtmdW5jfWApXG4gICAgY29uc29sZS5sb2coZSlcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIC8vIGNvbnZlcnQgdG8gbG93ZXJjYXNlPyBEZXBlbmRzIG9uIGlmIHdlIHJlcGxhY2UgdGhpbmdzIGxpa2UgY29zKCkgd2l0aCBzb21lIHRlbXBvcmFyeSB2YXJcbn1cblxuLyoqXG4gKiBFdmFsdWF0ZXMgdGhlIHZhbHVlIG9mIGEgZnVuY3Rpb24gaW4gdHJlZSBmb3JtIGF0IHRoZSBwb2ludCB4LiBIYW5kbGVzICssIC0sICosIC8sICgsICksIHgsIGFuZCBudW1iZXJzLlxuICpcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHRyZWUgVGhlIHJvb3Qgbm9kZSBvZiB0aGUgZnVuY3Rpb24gcGFyc2UgdHJlZSB0byBldmFsdWF0ZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFRoZSB2YWx1ZSBvZiB0aGUgdmFyaWFibGUgeCBpbiB0aGUgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IGYoeCkgKHRoZSBhbnN3ZXIgdG8gdGhlIGZ1bmN0aW9uIGF0IHgpLlxuICovXG5mdW5jdGlvbiBldmFsdWF0ZUZ1bmN0aW9uICh0cmVlLCB4KSB7XG4gIGlmICh0cmVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICAvLyBTaG91bGQgbWFrZSB0aGlzIGludG8gYSBzd2l0Y2hcbiAgaWYgKHRyZWUudmFsdWUgPT09ICcqJykge1xuICAgIHJldHVybiBOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLmxlZnRDaGlsZCwgeCkpICogTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5yaWdodENoaWxkLCB4KSlcbiAgfSBlbHNlIGlmICh0cmVlLnZhbHVlID09PSAnLycpIHtcbiAgICBjb25zdCBudW1lcmF0b3IgPSBOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLmxlZnRDaGlsZCwgeCkpXG4gICAgY29uc3QgZGVub21pbmF0b3IgPSBOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLnJpZ2h0Q2hpbGQsIHgpKVxuICAgIGlmIChkZW5vbWluYXRvciA9PT0gMCkge1xuICAgICAgaWYgKG51bWVyYXRvciA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgICByZXR1cm4gSW5maW5pdHkgKiBudW1lcmF0b3JcbiAgICB9XG4gICAgcmV0dXJuIG51bWVyYXRvciAvIGRlbm9taW5hdG9yXG4gIH0gZWxzZSBpZiAodHJlZS52YWx1ZSA9PT0gJysnKSB7XG4gICAgcmV0dXJuIE51bWJlcihldmFsdWF0ZUZ1bmN0aW9uKHRyZWUubGVmdENoaWxkLCB4KSkgKyBOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLnJpZ2h0Q2hpbGQsIHgpKVxuICB9IGVsc2UgaWYgKHRyZWUudmFsdWUgPT09ICctJykge1xuICAgIHJldHVybiAtMSAqIE51bWJlcihldmFsdWF0ZUZ1bmN0aW9uKHRyZWUucmlnaHRDaGlsZCwgeCkpIC8vIE51bWJlcihldmFsdWF0ZUZ1bmN0aW9uKHRyZWUubGVmdENoaWxkLCB4KSlcbiAgfSBlbHNlIGlmICh0cmVlLnZhbHVlID09PSAnXicpIHtcbiAgICByZXR1cm4gTWF0aC5wb3coTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5sZWZ0Q2hpbGQsIHgpKSwgTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5yaWdodENoaWxkLCB4KSkpXG4gIH0gZWxzZSBpZiAodHJlZS52YWx1ZSA9PT0gJ2NvJykge1xuICAgIHJldHVybiBNYXRoLmNvcyhOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLnJpZ2h0Q2hpbGQsIHgpKSlcbiAgfSBlbHNlIGlmICh0cmVlLnZhbHVlID09PSAnc2knKSB7XG4gICAgcmV0dXJuIE1hdGguc2luKE51bWJlcihldmFsdWF0ZUZ1bmN0aW9uKHRyZWUucmlnaHRDaGlsZCwgeCkpKVxuICB9IGVsc2UgaWYgKHRyZWUudmFsdWUgPT09ICd0YScpIHtcbiAgICByZXR1cm4gTWF0aC50YW4oTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5yaWdodENoaWxkLCB4KSkpXG4gIH0gZWxzZSBpZiAodHJlZS52YWx1ZSA9PT0gJ2FjJykge1xuICAgIHJldHVybiBNYXRoLmFjb3MoTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5yaWdodENoaWxkLCB4KSkpXG4gIH0gZWxzZSBpZiAodHJlZS52YWx1ZSA9PT0gJ2FzJykge1xuICAgIHJldHVybiBNYXRoLmFzaW4oTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5yaWdodENoaWxkLCB4KSkpXG4gIH0gZWxzZSBpZiAodHJlZS52YWx1ZSA9PT0gJ2F0Jykge1xuICAgIHJldHVybiBNYXRoLmF0YW4oTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5yaWdodENoaWxkLCB4KSkpXG4gIH0gZWxzZSBpZiAodHJlZS52YWx1ZSA9PT0gJ2xuJykge1xuICAgIHJldHVybiBNYXRoLmxvZyhOdW1iZXIoZXZhbHVhdGVGdW5jdGlvbih0cmVlLnJpZ2h0Q2hpbGQsIHgpKSlcbiAgfSBlbHNlIGlmICh0cmVlLnZhbHVlID09PSAnbG8nKSB7XG4gICAgcmV0dXJuIE1hdGgubG9nMTAoTnVtYmVyKGV2YWx1YXRlRnVuY3Rpb24odHJlZS5yaWdodENoaWxkLCB4KSkpXG4gIH0gZWxzZSB7XG4gICAgaWYgKHRyZWUudmFsdWUgPT09ICd4Jykge1xuICAgICAgcmV0dXJuIHhcbiAgICB9IGVsc2UgaWYgKHRyZWUudmFsdWUgPT09ICdlJykge1xuICAgICAgcmV0dXJuIE1hdGguRVxuICAgIH0gZWxzZSBpZiAodHJlZS52YWx1ZSA9PT0gJ3BpJykge1xuICAgICAgcmV0dXJuIE1hdGguUElcbiAgICB9XG5cbiAgICByZXR1cm4gdHJlZS52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIHByb2Nlc3NGdW5jdGlvbixcbiAgZXZhbHVhdGVGdW5jdGlvblxufVxuLy8gTkVYVCBTVEVQUzpcbi8vIFJlZG8gZG9jdW1lbnRhdGlvbiBmb3IgbmVnYXRpdmUgbnVtYmVycyBhbmQgcG93ZXJzXG4vLyBJbXBsZW1lbnQgcG93ZXJzIGludG8gdmFsaWRhdGVQcm9wZXJGdW5jdGlvblxuLy8gV3JpdGUgZG9jdW1lbnRhdGlvbiBmb3IgdmFsaWRhdGVQcm9wZXJGdW5jdGlvblxuLy8gSW1wbGVtZW50IG1vcmUgdHJpZ29ub21ldHJ5XG4vLyBJbXBsZW1lbnQgLm51bWJlclxuLy8gRW5oYW5jZSBncmFwaGluZyB3aGVuIGZhciBlbm91Z2ggaW4gY2xhc3Ncbi8vIEltcGxlbWVudCBhYnNvbHV0ZSB2YWx1ZVxuLy8gSW1wbGVtZW50IGZsb29yIGFuZCBjZWlsaW5nP1xuLy8gSW1wbGVtZW50IGh5cGVyYm9saWNzP1xuLy8gSW1wbGVtZW50IHNxcnQ/XG4iLCIvKipcbiAqIFJ1bnMgdGhlIG90aGVyIGZ1bmN0aW9ucyBpbiBpbXBsaWNpdC5qcyBvbiBhIHN0cmluZy4gUmVtb3ZlcyB3aGl0ZXNwYWNlIGFuZCB0aGVuIGFkZHMgYWRkaXRpb24vbXVsdGlwbGljYXRpb24gc3ltYm9sc1xuICogd2hlcmV2ZXIgaW1wbGljaXQgYWRkaXRpb24vbXVsdGlwbGljYXRpb24gb2NjdXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIHRvIHByb2Nlc3NcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcHJvY2Vzc2VkIHN0cmluZ1xuICovXG5mdW5jdGlvbiBydW5JbXBsaWNpdEZ1bmN0aW9ucyAoaW5wdXQpIHtcbiAgcmV0dXJuIGhhbmRsZUltcGxpY2l0QWRkaXRpb24oaGFuZGxlSW1wbGljaXRNdWx0aXBsaWNhdGlvbihyZW1vdmVXaGl0ZXNwYWNlKGlucHV0KSkpXG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgd2hpdGVzcGFjZSBmcm9tIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIHRvIHJlbW92ZSB3aGl0ZXNwYWNlIGZyb20uXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHN0cmluZyB3aXRoIGFsbCB3aGl0ZXNwYWNlIHJlbW92ZWQuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZVdoaXRlc3BhY2UgKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXHMrL2csICcnKVxufVxuXG4vKipcbiAqIEFkZHMgbXVsdGlwbGljYXRpb24gc3ltYm9scyB0byBhIHN0cmluZyBjb250YWluaW5nIGEgZnVuY3Rpb24gd2hlcmV2ZXIgaW1wbGljaXQgbXVsdGlwbGljYXRpb24gb2NjdXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmdW5jIEEgZnVuY3Rpb24gKHdpdGggbm8gd2hpdGVzcGFjZSkgdG8gYWRkIG11bHRpcGxpY2F0aW9uIHN5bWJvbHMgdG8uXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZ1bmN0aW9uIHdpdGggbXVsdGlwbGljYXRpb24gc3ltYm9scyBhZGRlZCB3aGVyZXZlciBpbXBsaWNpdCBtdWx0aXBsaWNhdGlvbiBvY2N1cmVkLlxuICovXG5mdW5jdGlvbiBoYW5kbGVJbXBsaWNpdE11bHRpcGxpY2F0aW9uIChmdW5jKSB7XG4gIHJldHVybiBmdW5jLnJlcGxhY2UoLyhcXCl8eHxwaXxlfFxcZCg/PVxcRCkpKD89XFwofHh8XFxkfGN8c3x0fGF8cHxlfGwpL2csICckMSonKVxufVxuXG4vKipcbiAqIEFkZHMgYWRkaXRpb24gc3ltYm9scyB0byBhIHN0cmluZyBjb250YWluaW5nIGEgZnVuY3Rpb24gd2hlcmV2ZXIgXCJpbXBsaWNpdCBhZGRpdGlvblwiIG9jY3Vycy4gXCJJbXBsaWNpdCBhZGRpdGlvblwiIGlzXG4gKiBkZWZpbmVkIGFzIHN1YnRyYWN0aW9uIG9mIGFuIGV4cHJlc3Npb24sIHdoZXJlIHdoYXQgaXMgaGFwcGVuaW5nIGlzIGFkZGl0aW9uIG9mIGEgbmVnYXRpdmUgZXhwcmVzc2lvbi5cbiAqIEV4OiAxMC0zIHdpbGwgYmUgcmV3cml0dGVuIGFzIDEwKy0zIGFuZCAoeCsxMCktKHgrMykgd2lsbCBiZSByZXdyaXR0ZW4gYXMgKHgrMTApKy0oeCszKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZnVuYyBBIGZ1bmN0aW9uICh3aXRoIG5vIHdoaXRlc3BhY2UpIHRvIGFkZCBhZGRpdGlvbiBzeW1ib2xzIHRvLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmdW5jdGlvbiB3aXRoIGFkZGl0aW9uIHN5bWJvbHMgYWRkZWQgd2hlcmV2ZXIgaW1wbGljaXQgYWRkaXRpb24gb2NjdXJlZC5cbiAqL1xuZnVuY3Rpb24gaGFuZGxlSW1wbGljaXRBZGRpdGlvbiAoZnVuYykge1xuICByZXR1cm4gZnVuYy5yZXBsYWNlKC8oW15cXC0oKi8rXl0pLS9nLCAnJDErLScpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJ1bkltcGxpY2l0RnVuY3Rpb25zXG4iLCJpbXBvcnQgeyB0b2tlbml6ZSwgZmluZEVFWFBTcGxpdFRva2VuLCBmaW5kU3BsaXRUb2tlbiB9IGZyb20gJy4vdG9rZW5pemVyLmpzJ1xuaW1wb3J0IEV4cHJlc3Npb25UeXBlIGZyb20gJy4vRXhwcmVzc2lvblR5cGUuanMnXG5pbXBvcnQgVG9rZW5UeXBlIGZyb20gJy4vVG9rZW5UeXBlLmpzJ1xuaW1wb3J0IFRyZWVOb2RlIGZyb20gJy4vVHJlZU5vZGUuanMnXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlIHRyZWUgZm9yIGEgdG9rZW5pemVkIGZ1bmN0aW9uLiBJdCBzaG91bGQgYmUgcmVhZCBmcm9tIHRoZSBib3R0b20tbGVmdCB0byB0aGUgdG9wLXJpZ2h0LlxuICpcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHJvb3QgVGhlIHJvb3Qgb2YgdGhlIHRyZWUgdG8gYWRkIHRoZSBub2RlcyB0by5cbiAqIEBwYXJhbSB7RXhwcmVzc2lvblR5cGV9IGV4cHJlc3Npb25UeXBlIFRoZSB0eXBlIG9mIGV4cHJlc3Npb24uIFVzdWFsbHkgRXhwcmVzc2lvblR5cGUuRVhQLlxuICogQHBhcmFtIHtUb2tlbn0gc3RhcnQgVGhlIGZpcnN0IHRva2VuIGluIHRoZSB0b2tlbiBsaXN0IHRvIHBhcnNlLiBTaG91bGQgcHJvYmFibHkgYmUgVG9rZW5MaXN0LmhlYWQuXG4gKiBAcGFyYW0ge1Rva2VufSBlbmQgVGhlIGZpbmFsIHRva2VuIGluIHRoZSB0b2tlbiBsaXN0IHRvIHBhcnNlLiBTaG91bGQgcHJvYmFibHkgYmUgVG9rZW5MaXN0LnRhaWwuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBhcnNlVHJlZU5vZGVzIChyb290LCBleHByZXNzaW9uVHlwZSwgc3RhcnRUb2tlbiwgZW5kVG9rZW4pIHtcbiAgLypcbiAgICBBbGdvcml0aG0gaW5mb3JtYXRpb246XG5cbiAgICBUaGlzIGFsZ29yaXRobSByZWxpZXMgb24gdGhlIGZvbGxvd2luZyBCYWNrdXMtTmF1ciBmb3JtIChCTkYpIGNvbnRleHQgZnJlZSBncmFtbWFyOlxuICAgIDxFWFA+IDo6PSA8RVhQPis8TUVYUD4gfCA8RVhQPi08TUVYUD4gfCA8TUVYUD5cbiAgICA8TUVYUD4gOjo9IDxNRVhQPio8UEVYUD4gfCA8TUVYUD4vPFBFWFA+IHwgPFBFWFA+XG4gICAgPFBFWFA+IDo6PSAoPEVYUD4pIHwgPE5VTUJFUj5cbiAgICA8TlVNQkVSPiA6Oj0gYW55IG51bWJlciBvciB2YXJpYWJsZVxuICAgIE5vdGU6IEVYUCBzdGFuZHMgZm9yIGV4cHJlc3Npb24sIE1FWFAgc3RhbmRzIGZvciBtdWx0aXBsaWNhdGlvbiBleHByZXNzaW9uLCBhbmQgPFBFWFA+IHN0YW5kc1xuICAgIGZvciBwYXJhbnRoZXNlcyBleHByZXNzaW9uLlxuXG4gICAgSXQgaW1wbGVtZW50cyB0aGlzIGJ5IHN0YXJ0aW5nIHdpdGggYW4gPEVYUD4sIGFuZCBzZWFyY2hpbmcgdGhlIHRva2VuIGxpc3QgZm9yIHRoZSBsYXN0IG9jY3VyZW5jZVxuICAgIHdoZXJlIHRoZSBwYXJhbnRoZXNlcyBhcmUgYmFsYW5jZWQgYW5kIGEgKyBvciAtIGNoYXJhY3RlciBpcyBmb3VuZCAoSWYgdGhpcyBkb2VzIG5vdCBvY2N1ciwgaXRcbiAgICBzd2l0Y2hlcyB0byBhIDxNRVhQPiBleHByZXNzaW9uIGFuZCBsb29wcykuIE5leHQsIGl0IHNldHMgdGhlIGNoYXJhY3RlciBvZiB0aGUgY3VycmVudCBub2RlIHRvIHRoaXNcbiAgICBjaGFyYWN0ZXIgYW5kIHJlY3Vyc2l2ZWx5IGNhbGxzIHRoZSBmdW5jdGlvbiBvbiB0aGUgbGVmdCBhbmQgcmlnaHQgcG9ydGlvbnMgb2YgdGhlIHRva2VuIGxpc3QgdXNpbmdcbiAgICB0aGUgbGVmdCAoRVhQKSBhbmQgcmlnaHQgKE1FWFApIGNoaWxkcmVuIGFzIHRoZSByb290cy4gRWFjaCA8RVhQPiB0b2tlbiByZXBlYXRzIHRoaXMgcHJvY2Vzcy4gQVxuICAgIDxNRVhQPiBleHByZXNpb24gc2VhcmNoZXMgdGhlIHRva2VuIGxpc3QgZm9yIHRoZSBsYXN0IG9jY3VyZW5jZSB3aGVyZSB0aGUgcGFyYW50aGVzZXMgYXJlIGJhbGFuY2VkXG4gICAgYW5kIGEgKiBvciAvIGNoYXJhY3RlciBpcyBmb3VuZCAoSWYgdGhpcyBkb2VzIG5vdCBvY2N1ciwgaXQgc3dpdGNoZXMgdG8gYSA8UEVYUD4gZXhwcmVzc2lvbiBhbmRcbiAgICBsb29wcykuIE5leHQsIGl0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBjdXJyZW50IG5vZGUgdG8gdGhpcyBcInNwbGl0XCIgdG9rZW4gYW5kIHJlY3Vyc2l2ZWx5IGNhbGxzIHRoZVxuICAgIGZ1bmN0aW9uIG9uIHRoZSBsZWZ0IGFuZCByaWdodCBwb3J0aW9ucyBvZiB0aGUgdG9rZW4gbGlzdCB1c2luZyB0aGUgbGVmdCAoTUVYUCkgYW5kIHJpZ2h0IChQRVhQKSxcbiAgICBjaGlsZHJlbiBhcyB0aGUgcm9vdHMuIEZvciBhIDxQRVhQPiBleHByZXNzaW9uLCBpdCBjaGVja3Mgd2hldGhlciBpdCBpcyBlbmNsb3NlZCBieSBwYXJhbnRoZXNlcy4gSWZcbiAgICBpdCBpcywgaXQgcmVtb3ZlcyB0aG9zZSBwYXJhbnRoZXNlcyBmcm9tIHRoZSB0b2tlbiBsaXN0YW5kIGxvb3BzIGJhY2sgdG8gYW4gPEVYUD4gZXhwcmVzc2lvbi5cbiAgICBPdGhlcndpc2UsIHRoZXJlIGNhbiBvbmx5IGJlIG9uZSB0b2tlbiBsZWZ0IGluIHRoZSBsaXN0IGFuZCBpdCBzZXRzIHRoZSB2YWx1ZW9mIHRlIGN1cnJlbnQgbm9kZSB0b1xuICAgIHRoaXMgdG9rZW4uXG5cbiAgICBUaGlzIHdvcmtzIGJlY2F1c2UgZm9yIGFuIDxFWFA+IGV4cHJlc3Npb24sIHRoZSByaWdodCBzaWRlIGlzIG9ubHkgYSA8TUVYUD4gZXhwcmVzc2lvbiBpZiBpdCBjb250YWluc1xuICAgIE5PICsgb3IgLSB0b2tlbiB3aXRoIGJhbGFuY2VkIHBhcmFudGhlc2VzLCBidXQgd2UgbXVzdCBzZWFyY2ggdW50aWwgd2UgZmluZCBvbmUgdG8gbWVldCB0aGVcbiAgICByZXF1aXJlbWVudCAodW5sZXNzIG5vIHRva2VuIGRvZXMsIGluIHdoaWNoIGNhc2Ugd2UganVzdCBzd2l0Y2ggdG8gYSA8TUVYUD4gZXhwcmVzc2lvbiwgYmFzaWNhbGx5XG4gICAgZG9pbmcgdGhlIGVxdWl2YWxlbnQgb2YgaWdub3JpbmcgdGhlIGxlZnQgc2lkZSkuIFRoZSBzYW1lIGlkZWEgaG9sZHMgZm9yIGEgPE1FWFA+IGV4cHJlc3Npb24uIEZvclxuICAgIGEgPFBFWFA+IGV4cHJlc3Npb24sIHdlIGtub3cgdGhhdCB0aGVyZSBhcmUgbm8gKywgLSwgKiwgb3IgLyBzeW1ib2xzIG91dHNpZGUgcGFyYW50aGVzZXMgYnkgdGhlXG4gICAgcHJldmlvdXMgdHdvIHBhcnRzLiBUaHVzLCBlaXRoZXIgd2UgaGF2ZSBhIHNpbmdsZSBjaGFyYWN0ZXIgb3Igc29tZSBleHByZXNzaW9uIHN1cnJvdW5kZWQgYnlcbiAgICBwYXJhbnRoZXNlcy5cbiAgKi9cblxuICAvLyBJdGVyYXRlIHdoaWxlIHdlIGhhdmUgbm90IHNldCB0aGUgcm9vdCB2YWx1ZS5cbiAgd2hpbGUgKHJvb3QudmFsdWUgPT0gbnVsbCkge1xuICAgIGlmIChleHByZXNzaW9uVHlwZSA9PT0gRXhwcmVzc2lvblR5cGUuRVhQKSB7XG4gICAgICAvLyBTZWFyY2ggZm9yIGEgKyBvciAtIHRva2VuIHdpdGggYmFsYW5jZWQgcGFyYW50aGVzZXMuXG4gICAgICBjb25zdCBhVG9rZW4gPSBmaW5kU3BsaXRUb2tlbihleHByZXNzaW9uVHlwZSwgc3RhcnRUb2tlbiwgZW5kVG9rZW4pXG4gICAgICAvLyBJZiBubyBzdWNoIHRva2VuIHdhcyBmb3VuZCwgc3dpdGNoIHRvIGEgTUVYUCBleHByZXNzaW9uIGFuZCBsb29wIGFnYWluICh0aGlzIGhlbHBzIHRvIGtlZXBcbiAgICAgIC8vIHVubmVjY2Vzc2FyeSBub2RlcyBmcm9tIGJ1aWxkaW5nIHVwIHdoaWNoIHdvdWxkIGhhcHBlbiB3aXRoIGEgcmVjdXJzaXZlIGNhbGwgaW4gdGhpcyBzaXR1YXRpb24pLlxuICAgICAgaWYgKGFUb2tlbiA9PSBudWxsKSB7XG4gICAgICAgIGV4cHJlc3Npb25UeXBlID0gRXhwcmVzc2lvblR5cGUuTUVYUFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgcmVwZWF0IHRoaXMgcHJvY2VzcyBmb3IgdGhlIGxlZnQgYW5kIHJpZ2h0IGNoaWxkcmVuIGFuZCBzZXQgdGhlIHRva2VuIHRvIHRoZSBzcGxpdCB0b2tlbi5cbiAgICAgICAgcm9vdC5jcmVhdGVMZWZ0Q2hpbGQoKVxuICAgICAgICByb290LmNyZWF0ZVJpZ2h0Q2hpbGQoKVxuICAgICAgICBjcmVhdGVQYXJzZVRyZWVOb2Rlcyhyb290LmxlZnRDaGlsZCwgRXhwcmVzc2lvblR5cGUuRVhQLCBzdGFydFRva2VuLCBhVG9rZW4ucHJldmlvdXMpXG4gICAgICAgIGNyZWF0ZVBhcnNlVHJlZU5vZGVzKHJvb3QucmlnaHRDaGlsZCwgRXhwcmVzc2lvblR5cGUuTUVYUCwgYVRva2VuLm5leHQsIGVuZFRva2VuKVxuICAgICAgICByb290LnZhbHVlID0gYVRva2VuLnZhbHVlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXhwcmVzc2lvblR5cGUgPT09IEV4cHJlc3Npb25UeXBlLk1FWFApIHtcbiAgICAgIC8vIFNlYXJjaCBmb3IgYSAqIG9yIC8gdG9rZW4gd2l0aCBiYWxhbmNlZCBwYXJhbnRoZXNlc1xuICAgICAgY29uc3QgbVRva2VuID0gZmluZFNwbGl0VG9rZW4oZXhwcmVzc2lvblR5cGUsIHN0YXJ0VG9rZW4sIGVuZFRva2VuKVxuICAgICAgLy8gSWYgbm8gc3VjaCB0b2tlbiB3YXMgZm91bmQsIHN3aXRjaCB0byBhIFBFWFAgZXhwcmVzc2lvbiBhbmQgbG9vcCBhZ2FpbiAodGhpcyBoZWxwcyB0byBrZWVwXG4gICAgICAvLyB1bm5lY2Nlc3Nhcnkgbm9kZXMgZnJvbSBidWlsZGluZyB1cCB3aGljaCB3b3VsZCBoYXBwZW4gd2l0aCBhIHJlY3Vyc2l2ZSBjYWxsIGluIHRoaXMgc2l0dWF0aW9uKS5cbiAgICAgIGlmIChtVG9rZW4gPT0gbnVsbCkge1xuICAgICAgICBleHByZXNzaW9uVHlwZSA9IEV4cHJlc3Npb25UeXBlLk5FWFBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IHJlcGVhdCB0aGlzIHByb2Nlc3MgZm9yIHRoZSBsZWZ0IGFuZCByaWdodCBjaGlsZHJlbiBhbmQgc2V0IHRoZSB0b2tlbiB0byB0aGUgc3BsaXQgdG9rZW4uXG4gICAgICAgIHJvb3QuY3JlYXRlTGVmdENoaWxkKClcbiAgICAgICAgcm9vdC5jcmVhdGVSaWdodENoaWxkKClcbiAgICAgICAgY3JlYXRlUGFyc2VUcmVlTm9kZXMocm9vdC5sZWZ0Q2hpbGQsIEV4cHJlc3Npb25UeXBlLk1FWFAsIHN0YXJ0VG9rZW4sIG1Ub2tlbi5wcmV2aW91cylcbiAgICAgICAgY3JlYXRlUGFyc2VUcmVlTm9kZXMocm9vdC5yaWdodENoaWxkLCBFeHByZXNzaW9uVHlwZS5ORVhQLCBtVG9rZW4ubmV4dCwgZW5kVG9rZW4pXG4gICAgICAgIHJvb3QudmFsdWUgPSBtVG9rZW4udmFsdWVcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChleHByZXNzaW9uVHlwZSA9PT0gRXhwcmVzc2lvblR5cGUuTkVYUCkge1xuICAgICAgaWYgKHN0YXJ0VG9rZW4udG9rZW5UeXBlID09PSBUb2tlblR5cGUuTkVHQVRJT04pIHtcbiAgICAgICAgcm9vdC52YWx1ZSA9IHN0YXJ0VG9rZW4udmFsdWVcbiAgICAgICAgcm9vdC5jcmVhdGVSaWdodENoaWxkKClcbiAgICAgICAgY3JlYXRlUGFyc2VUcmVlTm9kZXMocm9vdC5yaWdodENoaWxkLCBFeHByZXNzaW9uVHlwZS5ORVhQLCBzdGFydFRva2VuLm5leHQsIGVuZFRva2VuKVxuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV4cHJlc3Npb25UeXBlID0gRXhwcmVzc2lvblR5cGUuRUVYUFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXhwcmVzc2lvblR5cGUgPT09IEV4cHJlc3Npb25UeXBlLkVFWFApIHtcbiAgICAgIGNvbnN0IGVUb2tlbiA9IGZpbmRFRVhQU3BsaXRUb2tlbihzdGFydFRva2VuLCBlbmRUb2tlbilcbiAgICAgIGlmIChlVG9rZW4gPT0gbnVsbCkge1xuICAgICAgICBleHByZXNzaW9uVHlwZSA9IEV4cHJlc3Npb25UeXBlLlBFWFBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuY3JlYXRlTGVmdENoaWxkKClcbiAgICAgICAgcm9vdC5jcmVhdGVSaWdodENoaWxkKClcbiAgICAgICAgY3JlYXRlUGFyc2VUcmVlTm9kZXMocm9vdC5sZWZ0Q2hpbGQsIEV4cHJlc3Npb25UeXBlLlBFWFAsIHN0YXJ0VG9rZW4sIGVUb2tlbi5wcmV2aW91cylcbiAgICAgICAgY3JlYXRlUGFyc2VUcmVlTm9kZXMocm9vdC5yaWdodENoaWxkLCBFeHByZXNzaW9uVHlwZS5ORVhQLCBlVG9rZW4ubmV4dCwgZW5kVG9rZW4pXG4gICAgICAgIHJvb3QudmFsdWUgPSBlVG9rZW4udmFsdWVcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSBmaXJzdCB0b2tlbiBpcyBhICgsIHRoZW4gdGhlIGxhc3QgdG9rZW4gbXVzdCBiZSBhICkuIFRoZXkgY2FuIGJvdGggYmUgcmVtb3ZlZCBhbmQgdGhlIGV4cHJlc3Npb25cbiAgICAgIC8vIHR5cGUgY2hhbmdlZCB0byBFWFAuIEFnYWluLCBubyByZWN1cnNpdmUgY2FsbCBpcyBkb25lIHRvIGVsaW1pbmF0ZSB1bm5lY2Nlc3Nhcnkgbm9kZXMuXG4gICAgICBpZiAoc3RhcnRUb2tlbi50b2tlblR5cGUgPT09IFRva2VuVHlwZS5PUEVOX1BBUkFOVEhFU0VTKSB7XG4gICAgICAgIGV4cHJlc3Npb25UeXBlID0gRXhwcmVzc2lvblR5cGUuRVhQXG4gICAgICAgIHN0YXJ0VG9rZW4gPSBzdGFydFRva2VuLm5leHRcbiAgICAgICAgZW5kVG9rZW4gPSBlbmRUb2tlbi5wcmV2aW91c1xuICAgICAgfSBlbHNlIGlmIChzdGFydFRva2VuLnRva2VuVHlwZSA9PT0gVG9rZW5UeXBlLkVfT1BFTl9QQVJBTlRIRVNFUykge1xuICAgICAgICByb290LmNyZWF0ZVJpZ2h0Q2hpbGQoKVxuICAgICAgICBjcmVhdGVQYXJzZVRyZWVOb2Rlcyhyb290LnJpZ2h0Q2hpbGQsIEV4cHJlc3Npb25UeXBlLkVYUCwgc3RhcnRUb2tlbi5uZXh0LCBlbmRUb2tlbi5wcmV2aW91cylcbiAgICAgICAgcm9vdC52YWx1ZSA9IHN0YXJ0VG9rZW4udmFsdWVcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2UgeyAvLyBPdGhlcndpc2UsIHdlIHNob3VsZCBoYXZlIGEgc2luZ2xlIHRva2VuIGFuZCB0aGlzIHRva2VuIGlzIHNldCB0byBpdC5cbiAgICAgICAgcm9vdC52YWx1ZSA9IHN0YXJ0VG9rZW4udmFsdWVcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVG9rZW5pemVzIHRoZSBpbnB1dCBhbmQgY3JlYXRlcyBhIGZ1bmN0aW9uIHBhcnNlIHRyZWUgZnJvbSBpdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgQSBmdW5jdGlvbiB0aGF0IGhhcyBiZWVuIHZhbGlkYXRlZCB0byB0dXJuIGludG8gYSBwYXJzZSB0cmVlLlxuICogQHJldHVybiB7VHJlZU5vZGV9IFRoZSBmdW5jdGlvbiBwYXJzZSB0cmVlIHRoYXQgd2FzIGNyZWF0ZWQuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBhcnNlVHJlZSAoaW5wdXQpIHtcbiAgY29uc29sZS5sb2coJ0VudGVyaW5nIGNyZWF0ZVBhcnNlVHJlZSB3aXRoIGlucHV0OiAnICsgaW5wdXQpXG4gIGNvbnN0IHRva2VuTGlzdCA9IHRva2VuaXplKGlucHV0KVxuICBjb25zdCB0cmVlID0gbmV3IFRyZWVOb2RlKClcblxuICBjcmVhdGVQYXJzZVRyZWVOb2Rlcyh0cmVlLCBFeHByZXNzaW9uVHlwZS5FWFAsIHRva2VuTGlzdC5oZWFkLCB0b2tlbkxpc3QudGFpbClcbiAgY29uc29sZS5sb2cocHJpbnRQYXJzZVRyZWUodHJlZSkpXG4gIGNvbnNvbGUubG9nKCdFeGl0aW5nIGNyZWF0ZVBhcnNlVHJlZScpXG4gIHJldHVybiB0cmVlXG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcGFyc2UgdHJlZS4gSW50ZW5kZWQgZm9yIHRlc3RpbmcgdGhhdCB0aGUgcGFyc2UgdHJlZSB3YXMgY3JlYXRlZFxuICogY29ycmVjdGx5LiBTZWFyY2hlcyBmcm9tIHRoZSBsZWZ0IHRvIHRoZSByaWdodCBhbmQgcHJpbnRzIGVhY2ggdG9rZW4gdmFsdWUgaXQgZmluZHMuXG4gKlxuICogQHBhcmFtIHtUcmVlTm9kZX0gdHJlZSBUaGUgcm9vdCBub2RlIG9mIHRoZSB0cmVlIHRvIHByaW50LlxuICpcbiAqIEByZXR1cm4ge3N0cmluZ30gUmVwcmVzZW50YXRpb24gb2YgdGhlIHBhcnNlIHRyZWUuXG4gKi9cbmZ1bmN0aW9uIHByaW50UGFyc2VUcmVlICh0cmVlKSB7XG4gIGlmICh0cmVlID09IG51bGwpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIHJldHVybiBwcmludFBhcnNlVHJlZSh0cmVlLmxlZnRDaGlsZCkgKyB0cmVlLnZhbHVlICsgcHJpbnRQYXJzZVRyZWUodHJlZS5yaWdodENoaWxkKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYXJzZVRyZWVcbiIsImltcG9ydCBUb2tlbkxpc3QgZnJvbSAnLi9Ub2tlbkxpc3QuanMnXG5pbXBvcnQgVG9rZW4gZnJvbSAnLi9Ub2tlbi5qcydcbmltcG9ydCBFeHByZXNzaW9uVHlwZSBmcm9tICcuL0V4cHJlc3Npb25UeXBlLmpzJ1xuaW1wb3J0IFRva2VuVHlwZSBmcm9tICcuL1Rva2VuVHlwZS5qcydcblxuLyoqXG4gKiBUdXJucyB0aGUgaW5wdXQgc3RyaW5nIGludG8gYSBUb2tlbkxpc3Qgb2YgVG9rZW5zLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIHRvIHRva2VuaXplLiBTaG91bGQgb25seSBjb250YWluICssIC0sIC8sICosICgsICksIHgsIGFuZCBudW1iZXJzLlxuICpcbiAqIEByZXR1cm4ge1Rva2VuTGlzdH0gUmV0dXJucyBhIGxpc3Qgb2YgVG9rZW5zLlxuICovXG5mdW5jdGlvbiB0b2tlbml6ZSAoaW5wdXQpIHtcbiAgY29uc29sZS5sb2coJ0VudGVyaW5nIHRva2VuaXplIHdpdGggaW5wdXQ6ICcgKyBpbnB1dClcbiAgLy8gVGhpcyBtYXkgbmVlZCBhZGRpdGlvbmFsIHdvcmsuIEl0IGZhaWxzIGZvciAuMzIgb3Igc29tZXRoaW5nIHNpbWlsYXIgKG11c3QgZG8gMC4zMikuXG4gIGNvbnN0IHRva2VuUmV0cmlldmVyID0gLyhcXGQrKFxcLlxcZCspP3xlfHBpfGE/KHNpbnxjb3N8dGFuKVxcKHwobG58bG9nKVxcKHxbK1xcLSoveCgpXl0pL1xuICBjb25zdCB0b2tlbkxpc3QgPSBuZXcgVG9rZW5MaXN0KClcblxuICB3aGlsZSAoaW5wdXQubGVuZ3RoKSB7XG4gICAgbGV0IHRva2VuID0gJydcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UodG9rZW5SZXRyaWV2ZXIsIChtYXRjaGVkU3RyaW5nLCBzYXZlZFRva2VuKSA9PiB7IHRva2VuID0gc2F2ZWRUb2tlbjsgcmV0dXJuICcnIH0pXG4gICAgdG9rZW5MaXN0LmFkZChuZXcgVG9rZW4odG9rZW4pKVxuICAgIGlmICh0b2tlbiA9PT0gJycpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGZvdW5kIHdoZW4gdG9rZW5pemluZycpXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdFeGl0aW5nIHRva2VuaXplJylcbiAgcmV0dXJuIHRva2VuTGlzdFxufVxuXG4vKipcbiAqIEZpbmRzIHRoZSB0b2tlbiB0aGF0IHRoZSBmdW5jdGlvbiBwYXJzZSB0cmVlIHNob3VsZCBiZSBzcGxpdCBhdC4gU2VhcmNoZXMgZnJvbSB0aGUgZW5kVG9rZW4gdG8gdGhlIHN0YXJ0VG9rZW5cbiAqIGxvb2tpbmcgZm9yIHRoZSBmaXJzdCB0b2tlbiB3aXRoIFRva2VuVHlwZS5BRERJVElPTiAoaWYgRXhwcmVzc2lvblR5cGUuRVhQKSBvciBUb2tlblR5cGUuTVVMVElQTElDQVRJT04gKGlmXG4gKiBFeHByZXNzaW9uVHlwZS5NRVhQKSB3aGVyZSB0aGUgcGFyYW50aGVzZXMgYXJlIGJhbGFuY2VkLiBSZXR1cm5zIG51bGwgaWYgbm8gdG9rZW4gbWVldHMgdGhlIHJlcXVpcmVtZW50LlxuICogTk9URTogc3RhcnRUb2tlbiBhbmQgZW5kVG9rZW4gZG9uJ3QgaGF2ZSB0byBiZSB0aGUgZmlyc3QgYW5kIGxhc3QgdG9rZW5zIGluIHRoZSB0b2tlbiBsaXN0LlxuICpcbiAqIEBwYXJhbSB7RXhwcmVzc2lvblR5cGV9IGV4cHJlc3Npb25UeXBlIFRoZSB0eXBlIG9mIGV4cHJlc3Npb24uIFNob3VsZCBiZSBlaXRoZXIgRXhwcmVzc2lvblR5cGUuTUVYUCBvclxuICogIEV4cHJlc3Npb25UeXBlLkVYUC5cbiAqIEBwYXJhbSB7VG9rZW59IHN0YXJ0VG9rZW4gVGhlIGZpcnN0IHRva2VuIGluIHRoZSB0b2tlbiBsaXN0IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7VG9rZW59IGVuZFRva2VuIFRoZSBmaW5hbCB0b2tlbiBpbiB0aGUgdG9rZW4gbGlzdCB0byBzZWFyY2guXG4gKlxuICogQHJldHVybiB7VG9rZW59IFRoZSB0b2tlbiB0byBzcGxpdCBhdC4gUmV0dXJucyBudWxsIGlmIHRoZXJlIHdhcyBubyBzcGxpdCB0b2tlbiBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gZmluZFNwbGl0VG9rZW4gKGV4cHJlc3Npb25UeXBlLCBzdGFydFRva2VuLCBlbmRUb2tlbikge1xuICBsZXQgY3VycmVudFRva2VuID0gZW5kVG9rZW5cblxuICBsZXQgdG9rZW5UeXBlID0gVG9rZW5UeXBlLkFERElUSU9OXG5cbiAgaWYgKGV4cHJlc3Npb25UeXBlID09PSBFeHByZXNzaW9uVHlwZS5NRVhQKSB7XG4gICAgdG9rZW5UeXBlID0gVG9rZW5UeXBlLk1VTFRJUExJQ0FUSU9OXG4gIH1cblxuICBsZXQgY2xvc2VQYXJhbnRoZXNlcyA9IDBcblxuICB3aGlsZSAoY3VycmVudFRva2VuICE9PSBzdGFydFRva2VuICYmIGN1cnJlbnRUb2tlbiAhPT0gc3RhcnRUb2tlbi5wcmV2aW91cykge1xuICAgIGlmIChjdXJyZW50VG9rZW4udG9rZW5UeXBlID09PSB0b2tlblR5cGUgJiYgY2xvc2VQYXJhbnRoZXNlcyA9PT0gMCkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRUb2tlblxuICAgIH1cbiAgICBpZiAoY3VycmVudFRva2VuLnRva2VuVHlwZSA9PT0gVG9rZW5UeXBlLk9QRU5fUEFSQU5USEVTRVMgfHxcbiAgICAgICAgICAgIGN1cnJlbnRUb2tlbi50b2tlblR5cGUgPT09IFRva2VuVHlwZS5FX09QRU5fUEFSQU5USEVTRVMpIHtcbiAgICAgIGNsb3NlUGFyYW50aGVzZXMtLVxuICAgIH0gZWxzZSBpZiAoY3VycmVudFRva2VuLnRva2VuVHlwZSA9PT0gVG9rZW5UeXBlLkNMT1NFX1BBUkFOVEhFU0VTKSB7XG4gICAgICBjbG9zZVBhcmFudGhlc2VzKytcbiAgICB9XG5cbiAgICBjdXJyZW50VG9rZW4gPSBjdXJyZW50VG9rZW4ucHJldmlvdXNcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIGZpbmRFRVhQU3BsaXRUb2tlbiAoc3RhcnRUb2tlbiwgZW5kVG9rZW4pIHtcbiAgbGV0IGN1cnJlbnRUb2tlbiA9IHN0YXJ0VG9rZW5cblxuICBsZXQgY2xvc2VQYXJhbnRoZXNlcyA9IDBcblxuICB3aGlsZSAoY3VycmVudFRva2VuICE9PSBlbmRUb2tlbiAmJiBjdXJyZW50VG9rZW4gIT09IGVuZFRva2VuLm5leHQpIHtcbiAgICBpZiAoY3VycmVudFRva2VuLnRva2VuVHlwZSA9PT0gVG9rZW5UeXBlLlBPV0VSICYmIGNsb3NlUGFyYW50aGVzZXMgPT09IDApIHtcbiAgICAgIHJldHVybiBjdXJyZW50VG9rZW5cbiAgICB9XG4gICAgaWYgKGN1cnJlbnRUb2tlbi50b2tlblR5cGUgPT09IFRva2VuVHlwZS5PUEVOX1BBUkFOVEhFU0VTIHx8XG4gICAgICAgICAgICBjdXJyZW50VG9rZW4udG9rZW5UeXBlID09PSBUb2tlblR5cGUuRV9PUEVOX1BBUkFOVEhFU0VTKSB7XG4gICAgICBjbG9zZVBhcmFudGhlc2VzLS1cbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRUb2tlbi50b2tlblR5cGUgPT09IFRva2VuVHlwZS5DTE9TRV9QQVJBTlRIRVNFUykge1xuICAgICAgY2xvc2VQYXJhbnRoZXNlcysrXG4gICAgfVxuXG4gICAgY3VycmVudFRva2VuID0gY3VycmVudFRva2VuLm5leHRcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCB7XG4gIHRva2VuaXplLFxuICBmaW5kRUVYUFNwbGl0VG9rZW4sXG4gIGZpbmRTcGxpdFRva2VuXG59XG4iLCJjb25zdCB0ZXJtaW5hbExpc3QgPSBbJysnLCAnLScsICcqJywgJy8nLCAneCcsICcoJywgJyknLCAnJCddXG5cbmNvbnN0IG1hcCA9IHtcbiAgUzogeyAnKyc6ICchJywgJy0nOiAnIScsICcqJzogJyEnLCAnLyc6ICchJywgeDogJ0FUJywgJygnOiAnQVQnLCAnKSc6ICchJywgJDogJyEnIH0sXG4gIEE6IHsgJysnOiAnQVQrJywgJy0nOiAnQVQtJywgJyonOiAnIScsICcvJzogJyEnLCB4OiAnIScsICcoJzogJyEnLCAnKSc6ICcnLCAkOiAnJyB9LCAvLyBTJ1xuICBUOiB7ICcrJzogJyEnLCAnLSc6ICchJywgJyonOiAnIScsICcvJzogJyEnLCB4OiAnQlInLCAnKCc6ICdCUicsICcpJzogJyEnLCAkOiAnIScgfSxcbiAgQjogeyAnKyc6ICcnLCAnLSc6ICcnLCAnKic6ICdCUionLCAnLyc6ICdCUi8nLCB4OiAnIScsICcoJzogJyEnLCAnKSc6ICcnLCAkOiAnJyB9LCAvLyAgIFQnXG4gIFI6IHsgJysnOiAnIScsICctJzogJyEnLCAnKic6ICchJywgJy8nOiAnIScsIHg6ICd4JywgJygnOiAnKVMoJywgJyknOiAnIScsICQ6ICchJyB9XG59XG5cbi8qKlxuICogVmFsaWRhdGVzIHRoYXQgYSBmdW5jdGlvbiBpcyB2YWxpZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZnVuYyBTdHJpbmcgY29udGFpbmluZyB0aGUgZnVuY3Rpb24gdG8gdmFsaWRhdGUuIEl0IHNob3VsZCBoYXZlIG5vIHdoaXRlc3BhY2Ugb3IgaW1wbGljaXRcbiAqICBtdWx0aXBsaWNhdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgZnVuY3Rpb24gaXMgdmFsaWQgYW5kIGZhbHNlIGlmIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVQcm9wZXJGdW5jdGlvbiAoZnVuYykge1xuICBjb25zb2xlLmxvZygnRW50ZXJpbmcgdmFsaWRhdGVQcm9wZXJGdW5jdGlvbiB3aXRoIGZ1bmN0aW9uOiAnICsgZnVuYylcblxuICBmdW5jID0gcmVnZXhDb252ZXJ0KGZ1bmMpXG5cbiAgY29uc3QgaW52YWxpZENoYXJhY3RlcnMgPSAvW14rXFwtKi94KCleXS9nXG4gIGlmIChmdW5jLmxlbmd0aCA9PT0gMCB8fCBmdW5jLnNlYXJjaChpbnZhbGlkQ2hhcmFjdGVycykgIT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gaXNWYWxpZEZ1bmN0aW9uKGZ1bmMpXG59XG5cbmZ1bmN0aW9uIHJlZ2V4Q29udmVydCAoZnVuYykge1xuICAvLyBUaGlzIG1heSBuZWVkIGFkZGl0aW9uYWwgd29yay4gSXQgZmFpbHMgZm9yIC4zMiBvciBzb21ldGhpbmcgc2ltaWxhciAobXVzdCBkbyAwLjMyKS5cbiAgLy8gQWxzbyBuZWVlZCB0byBjb25zaWRlciBuZWdhdGl2ZSBudW1iZXJzIG1vcmUuXG4gIGNvbnN0IG51bWJlclJlbW92ZXIgPSAvXFxkKyhcXC5cXGQrKT98ZXxwaS9nXG4gIGZ1bmMgPSBmdW5jLnJlcGxhY2UobnVtYmVyUmVtb3ZlciwgJ3gnKVxuXG4gIC8vIENoZWNrIGZvciBhbnkgbnVtYmVyIG9mIG5lZ2F0aXZlcyBkaXJlY3RseSBwcmVjZWRlZCBieSBhICosIC8sICsgYW5kIHJlbW92ZSB0aGVtLlxuICAvLyBBc28gbmVlZCB0byBjaGVjayBmb3Igc2l0dWF0aW9ucyBzdWNoIGFzIC01KzMgb3IgeCooLTQrMykgQW55dGhpbmcgTk9UIHByZWNlZGVkIGJ5IGFuIHg/XG4gIGNvbnN0IG5lZ2F0aXZlUmVtb3ZlciA9IC8oXnxbXnhdKS0rL2dcbiAgZnVuYy5yZXBsYWNlKG5lZ2F0aXZlUmVtb3ZlciwgJyQxJylcblxuICBjb25zdCBlbmhhbmNlZFBhcmFudGhlc2VzUmVtb3ZlciA9IC8oKGE/KGNvc3xzaW58dGFuKSl8bG58bG9nKVxcKC9nXG4gIGZ1bmMucmVwbGFjZShlbmhhbmNlZFBhcmFudGhlc2VzUmVtb3ZlciwgJygnKVxuXG4gIGNvbnNvbGUubG9nKGZ1bmMpXG5cbiAgcmV0dXJuIGZ1bmNcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEZ1bmN0aW9uIChmdW5jKSB7XG4gIGZ1bmMgKz0gJyQnXG5cbiAgY29uc3QgY2hhclN0YWNrID0gWydTJ11cbiAgbGV0IHBvaW50ID0gMFxuICBsZXQgZmFpbGVkID0gZmFsc2VcbiAgLy8gbWFwW1wiU1wiXVtcIitcIl07XG5cbiAgd2hpbGUgKHBvaW50IDwgZnVuYy5sZW5ndGggJiYgIWZhaWxlZCkge1xuICAgIC8vICBpZiAoY2hhclN0YWNrLmVtcHR5KCkpXG4gICAgLy8gIHtcbiAgICAvLyAgICAgIGNvdXQgPDwgXCJTdHJpbmcgbm90IGFjY2VwdGVkXFxuXCI7IC8vcHJpbnQgc3RyaW5nIGNvbnRlbnRzP1xuICAgIC8vICAgICAgYnJlYWs7XG4gICAgLy8gIH1cbiAgICBsZXQgY3VycmVudEVsZW0gPSBjaGFyU3RhY2sucG9wKClcblxuICAgIHdoaWxlICghdGVybWluYWxMaXN0LmluY2x1ZGVzKGN1cnJlbnRFbGVtKSkge1xuICAgICAgaWYgKG1hcFtjdXJyZW50RWxlbV1bZnVuY1twb2ludF1dID09PSAnIScpIHtcbiAgICAgICAgZmFpbGVkID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgICAvLyBwcmludCBlcnJvcj9cbiAgICAgIH1cblxuICAgICAgWy4uLm1hcFtjdXJyZW50RWxlbV1bZnVuY1twb2ludF1dXS5mb3JFYWNoKGMgPT4gY2hhclN0YWNrLnB1c2goYykpXG5cbiAgICAgIGlmICghY2hhclN0YWNrLmxlbmd0aCkgeyAvLyBpZiB0aGUgYXJyYXkgaXMgZW1wdHlcbiAgICAgICAgaWYgKGZ1bmNbcG9pbnRdICE9PSAnJCcpIHtcbiAgICAgICAgICBmYWlsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gcHJpbnQgZXJyb3I/XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY3VycmVudEVsZW0gPSBjaGFyU3RhY2sucG9wKClcbiAgICB9XG5cbiAgICBwb2ludCsrXG4gIH1cblxuICBpZiAoY2hhclN0YWNrLmxlbmd0aCB8fCBmYWlsZWQpIHtcbiAgICBjb25zb2xlLmxvZygnQ2hhciBzdGFjazogJyArIGNoYXJTdGFjaylcbiAgICBjb25zb2xlLmxvZygnUmVtYWlubmcgc3RyaW5nIGNoYXJhY3RlcnM6ICcgKyBmdW5jLnN1YnN0cihwb2ludCkpXG4gIH1cbiAgY29uc29sZS5sb2coJ0V4aXRpbmcgdmFsaWRhdGVQcm9wZXJGdW5jdGlvbicpXG5cbiAgcmV0dXJuICFjaGFyU3RhY2subGVuZ3RoICYmICFmYWlsZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGVQcm9wZXJGdW5jdGlvblxuIiwiaW1wb3J0IHsgcHJvY2Vzc0Z1bmN0aW9uLCBldmFsdWF0ZUZ1bmN0aW9uIH0gZnJvbSAnLi4vcGFyc2VyL2VxdWF0aW9uUGFyc2VyLmpzJ1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFtcIndhcm5cIix7IFwidmFyc0lnbm9yZVBhdHRlcm5cIjogXCJncmFwaEZ1bmN0aW9uXCJ9XSAqL1xuXG4vKipcbiAqIENvZGUgZm9yIGEgdmVydGV4IHNoYWRlci4gQ29udGFpbnMgYXR0cmlidXRlIHBvc2l0aW9uIHRoYXQgdGFrZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSB2ZXJ0ZXguXG4gKi9cbmNvbnN0IHZlcnRleFNoYWRlclNvdXJjZSA9IGBcbiAgICBhdHRyaWJ1dGUgdmVjNCBwb3NpdGlvbjtcbiAgICB1bmlmb3JtIHZlYzQgY29sb3I7XG5cbiAgICB2YXJ5aW5nIG1lZGl1bXAgdmVjNCBmcmFnQ29sb3I7XG5cbiAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgIGdsX1Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIGZyYWdDb2xvciA9IGNvbG9yO1xuICAgIH1cbmBcblxuLyoqXG4gKiBEZWZhdWx0IGZyYWdtZW50IHNoYWRlciBmb3IgYSBtb2RlbFxuICovXG5jb25zdCBkZWZhdWx0RnJhZ21lbnRTaGFkZXIgPSBgXG4gICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG4gICAgdmFyeWluZyBtZWRpdW1wIHZlYzQgZnJhZ0NvbG9yO1xuXG4gICAgdm9pZCBtYWluKCkge1xuICAgICAgICBnbF9GcmFnQ29sb3IgPSBmcmFnQ29sb3I7XG4gICAgfVxuYFxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMIGNvbnRleHRcbiAqIEBwYXJhbSB7Kn0gdHlwZSBUaGUgdHlwZSBvZiBzaGFkZXIgKHNob3VsZCBiZSBlaXRoZXIgZ2wuVkVSVEVYX1NIQURFUiBvciBnbC5GUkFHTUVOVF9TSEFERVIpXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIFRoZSBzb3VyY2UgY29kZSBvZiB0aGUgc2hhZGVyXG4gKi9cbmZ1bmN0aW9uIG1ha2VTaGFkZXIgKGdsLCB0eXBlLCBzb3VyY2UpIHtcbiAgbGV0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKVxuXG4gIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSlcbiAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpXG5cbiAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICBjb25zb2xlLmVycm9yKGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSlcblxuICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpXG4gICAgc2hhZGVyID0gbnVsbFxuICB9XG5cbiAgcmV0dXJuIHNoYWRlclxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMIGNvbnRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0ZXhTb3VyY2UgVGhlIHNvdXJjZSBjb2RlIGZvciB0aGUgdmVydGV4IHNoYWRlclxuICogQHBhcmFtIHtzdHJpbmd9IGZyYWdtZW50U291cmNlIFRoZSBzb3VyY2UgY29kZSBmb3IgdGhlIGZyYWdtZW50IHNoYWRlclxuICovXG5mdW5jdGlvbiBtYWtlUHJvZ3JhbSAoZ2wsIHZlcnRleFNvdXJjZSwgZnJhZ21lbnRTb3VyY2UpIHtcbiAgY29uc3QgdmVydGV4U2hhZGVyID0gbWFrZVNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdmVydGV4U291cmNlKVxuICBjb25zdCBmcmFnbWVudFNoYWRlciA9IG1ha2VTaGFkZXIoZ2wsIGdsLkZSQUdNRU5UX1NIQURFUiwgZnJhZ21lbnRTb3VyY2UpXG5cbiAgbGV0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKClcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcilcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKVxuXG4gIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pXG5cbiAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpXG5cbiAgICBnbC5kZWxldGVQcm9ncmFtKHByb2dyYW0pXG4gICAgcHJvZ3JhbSA9IG51bGxcbiAgfVxuXG4gIHJldHVybiBwcm9ncmFtXG59XG5cbi8qKlxuICpcbiAqL1xuZnVuY3Rpb24gZHJhdyAodHJlZSwgZHJhd1dpbmRvdywgdGhlbWUpIHtcbiAgdHJ5IHtcbiAgICAvKiogQHR5cGUge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gKi9cbiAgICBjb25zdCBnbCA9IGRyYXdXaW5kb3cuZ2V0Q29udGV4dCgnd2ViZ2wnKVxuXG4gICAgLy8gZHJhd1dpbmRvdy53aWR0aCA9IGRyYXdXaW5kb3cuY2xpZW50V2lkdGhcbiAgICAvLyBkcmF3V2luZG93LmhlaWdodCA9IGRyYXdXaW5kb3cuY2xpZW50SGVpZ2h0XG4gICAgZ2wudmlld3BvcnQoMCwgMCwgZHJhd1dpbmRvdy53aWR0aCwgZHJhd1dpbmRvdy5oZWlnaHQpXG5cbiAgICBjb25zdCBjb2xvcnMgPSB7XG4gICAgICBjbGVhcjogWzEuMCwgMS4wLCAxLjAsIDEuMF0sXG4gICAgICBheGVzOiBbMCwgMCwgMCwgMV0sXG4gICAgICBwb2x5bm9taWFsOiBbMC41LCAwLCAwLjUsIDFdXG4gICAgfVxuXG4gICAgaWYgKHRoZW1lID09PSAnZGFyaycpIHtcbiAgICAgIGNvbG9ycy5jbGVhciA9IFswLjI1OSwgMC4yNTksIDAuMjU5LCAxLjBdXG4gICAgICBjb2xvcnMuYXhlcyA9IFsxLCAxLCAxLCAxXVxuICAgICAgY29sb3JzLnBvbHlub21pYWwgPSBbMCwgMSwgMC4yNTEsIDFdXG4gICAgfVxuXG4gICAgZ2wuY2xlYXJDb2xvciguLi5jb2xvcnMuY2xlYXIpXG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpXG5cbiAgICBjb25zdCBheGlzQnVmZmVyID0gY3JlYXRlQXhpc2VzKGdsKVxuICAgIGNvbnN0IHRpY2tNYXJrQnVmZmVyID0gY3JlYXRlVGlja01hcmtzKGdsLCAyMCwgMjApXG4gICAgY29uc3QgcG9seW5vbWlhbEJ1ZmZlciA9IGNyZWF0ZVBvbHlub21pYWwoZ2wsIHRyZWUpXG5cbiAgICBkcmF3TGluZXMoZ2wsIGF4aXNCdWZmZXIsIG5ldyBGbG9hdDMyQXJyYXkoY29sb3JzLmF4ZXMpKVxuICAgIGRyYXdMaW5lcyhnbCwgdGlja01hcmtCdWZmZXIsIG5ldyBGbG9hdDMyQXJyYXkoY29sb3JzLmF4ZXMpKVxuICAgIGRyYXdMaW5lU3RyaXAoZ2wsIHBvbHlub21pYWxCdWZmZXIsIG5ldyBGbG9hdDMyQXJyYXkoY29sb3JzLnBvbHlub21pYWwpKVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihgRHJhdyBmYWlsZWQgd2l0aCBkcmF3V2luZG93ICR7ZHJhd1dpbmRvd31gKVxuICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlU3RhdGljRHJhd0FycmF5QnVmZmVyIChnbCwgdmVydGljZUFycmF5LCBudW1WZXJ0aWNlcykge1xuICBjb25zdCBidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKVxuICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKVxuICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlQXJyYXkpLCBnbC5TVEFUSUNfRFJBVylcblxuICBjb25zdCBkYXRhID0ge1xuICAgIGJ1ZmZlcjogYnVmZmVyLFxuICAgIG51bVZlcnRpY2VzOiBudW1WZXJ0aWNlc1xuICB9XG5cbiAgcmV0dXJuIGRhdGFcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTCBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBvbHlub21pYWwgKGdsLCB0cmVlKSB7XG4gIGNvbnNvbGUubG9nKCdFbnRlcmluZyBjcmVhdGVQb2x5bm9taWFsJylcbiAgY29uc3QgbnVtVmVydGljZXMgPSAyMDFcblxuICBjb25zdCB2ZXJ0aWNlQXJyYXkgPSBbXVxuXG4gIGZvciAobGV0IHggPSAtMTAwOyB4IDw9IDEwMDsgeCsrKSB7XG4gICAgY29uc3QgeGkgPSB4IC8gMTBcbiAgICBjb25zdCB5aSA9IGV2YWx1YXRlRnVuY3Rpb24odHJlZSwgeGkpXG4gICAgdmVydGljZUFycmF5LnB1c2goeGkgLyAxMCwgeWkgLyAxMCwgMC4wKVxuICB9XG5cbiAgY29uc29sZS5sb2coJ0V4aXRpbmcgY3JlYXRlUG9seW5vbWlhbCcpXG4gIHJldHVybiBtYWtlU3RhdGljRHJhd0FycmF5QnVmZmVyKGdsLCB2ZXJ0aWNlQXJyYXksIG51bVZlcnRpY2VzKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgM0QgdmVydGljZXMgdG8gZGVmaW5lIHggYW5kIHkgYXhpc2VzIGNlbnRlcmVkIG9uIHRoZSBzY3JlZW4gYW5kIGFkZHMgdGhlbSB0byBhIGJ1ZmZlci4gVGhlIHZlcnRpY2VzXG4gKiBzaG91bGQgYmUgZHJhd24gd2l0aCBnbC5MSU5FUy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMIGNvbnRleHRcbiAqXG4gKiBAcmV0dXJucyB7Kn0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHZlcnRpY2UgYnVmZmVyIChhcyAnYnVmZmVyJykgYW5kIHRoZSBudW1iZXIgb2YgdmVydGljZXMgaW4gdGhlIGJ1ZmZlciAoYXNcbiAqICAnbnVtVmVydGljZXMnKS5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXhpc2VzIChnbCkge1xuICBjb25zdCBudW1WZXJ0aWNlcyA9IDRcbiAgY29uc3QgdmVydGljZUFycmF5ID0gW1xuICAgIC0xLCAwLCAwLFxuICAgIDEsIDAsIDAsXG4gICAgMCwgMSwgMCxcbiAgICAwLCAtMSwgMFxuICBdXG4gIHJldHVybiBtYWtlU3RhdGljRHJhd0FycmF5QnVmZmVyKGdsLCB2ZXJ0aWNlQXJyYXksIG51bVZlcnRpY2VzKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUaWNrTWFya3MgKGdsLCBudW1YLCBudW1ZKSB7XG4gIGNvbnN0IHZlcnRpY2VBcnJheSA9IFtdXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1YOyBpKyspIHtcbiAgICB2ZXJ0aWNlQXJyYXkucHVzaCgyIC8gbnVtWCAqIGkgLSAxLCAtMC4wMiwgMCwgMiAvIG51bVggKiBpIC0gMSwgMC4wMiwgMClcbiAgfVxuXG4gIGZvciAobGV0IGogPSAwOyBqIDw9IG51bVk7IGorKykge1xuICAgIHZlcnRpY2VBcnJheS5wdXNoKC0wLjAyLCAyIC8gbnVtWSAqIGogLSAxLCAwLCAwLjAyLCAyIC8gbnVtWSAqIGogLSAxLCAwKVxuICB9XG4gIHJldHVybiBtYWtlU3RhdGljRHJhd0FycmF5QnVmZmVyKGdsLCB2ZXJ0aWNlQXJyYXksIDIgKiAobnVtWCArIG51bVkpKVxufVxuXG4vKipcbiAqIERyYXdzIGxpbmVzIHVzaW5nIHRoZSB2ZXJ0aWNlcyBjb250YWluZWQgaW4gdGhlIGRhdGEgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTCBjb250ZXh0XG4gKiBAcGFyYW0geyp9IGRhdGEgSlNPTiBvYmplY3QgaG9sZGluZyB0aGUgYnVmZmVyIGFuZCB0aGUgbnVtYmVyIG9mIHZlcnRpY2VzXG4gKi9cbmZ1bmN0aW9uIGRyYXdMaW5lcyAoZ2wsIGRhdGEsIGNvbG9yKSB7XG4gIGNvbnN0IHByb2dyYW0gPSBtYWtlUHJvZ3JhbShnbCwgdmVydGV4U2hhZGVyU291cmNlLCBkZWZhdWx0RnJhZ21lbnRTaGFkZXIpXG5cbiAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGRhdGEuYnVmZmVyKVxuXG4gIGNvbnN0IHBvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ3Bvc2l0aW9uJylcbiAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihwb3NpdGlvbiwgMywgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKVxuICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb3NpdGlvbilcblxuICBnbC51c2VQcm9ncmFtKHByb2dyYW0pXG5cbiAgY29uc3QgY29sID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICdjb2xvcicpXG4gIGdsLnVuaWZvcm00ZnYoY29sLCBjb2xvcilcblxuICBnbC5kcmF3QXJyYXlzKGdsLkxJTkVTLCAwLCBkYXRhLm51bVZlcnRpY2VzKVxufVxuXG4vKipcbiAqIERyYXdzIHRyaWFuZ2xlcyB1c2luZyB0aGUgdmVydGljZXMgY29udGFpbmVkIGluIHRoZSBkYXRhIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dFxuICogQHBhcmFtIHsqfSBkYXRhIEpTT04gb2JqZWN0IGhvbGRpbmcgdGhlIGJ1ZmZlciBhbmQgdGhlIG51bWJlciBvZiB2ZXJ0aWNlc1xuICovXG5mdW5jdGlvbiBkcmF3TGluZVN0cmlwIChnbCwgZGF0YSwgY29sb3IpIHtcbiAgY29uc3QgcHJvZ3JhbSA9IG1ha2VQcm9ncmFtKGdsLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGRlZmF1bHRGcmFnbWVudFNoYWRlcilcblxuICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgZGF0YS5idWZmZXIpXG5cbiAgY29uc3QgcG9zaXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAncG9zaXRpb24nKVxuICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHBvc2l0aW9uLCAzLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApXG4gIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvc2l0aW9uKVxuXG4gIGdsLnVzZVByb2dyYW0ocHJvZ3JhbSlcblxuICBjb25zdCBjb2wgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ2NvbG9yJylcbiAgZ2wudW5pZm9ybTRmdihjb2wsIGNvbG9yKVxuXG4gIGdsLmRyYXdBcnJheXMoZ2wuTElORV9TVFJJUCwgMCwgZGF0YS5udW1WZXJ0aWNlcylcbn1cblxuLyoqXG4gKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBjbGlja3MgdGhlIGdyYXBoIGZ1bmN0aW9uIGJ1dHRvbi4gUHJvY2Vzc2VzIGFuZCBkcmF3cyB0aGUgZnVuY3Rpb24gaWYgaXQgaXMgdmFsaWQuXG4gKi9cbmZ1bmN0aW9uIGdyYXBoRnVuY3Rpb24gKHRyZWUsIGRyYXdXaW5kb3csIHRoZW1lKSB7XG4gIHRyeSB7XG4gICAgaWYgKHRyZWUgIT09IG51bGwpIHtcbiAgICAgIGRyYXcodHJlZSwgZHJhd1dpbmRvdywgdGhlbWUpXG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihgR3JhcGggZnVuY3Rpb24gZmFpbGVkIGZvciAke3RyZWV9IHdpdGggZHJhd1dpbmRvdyAke2RyYXdXaW5kb3d9YClcbiAgICBjb25zb2xlLmVycm9yKGUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhGdW5jdGlvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==