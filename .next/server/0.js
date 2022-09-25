exports.ids = [0];
exports.modules = {

/***/ "./components/Cuadrados3D.js":
/*!***********************************!*\
  !*** ./components/Cuadrados3D.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cuadrados3D; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-three-fiber */ "react-three-fiber");
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spring_three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring/three */ "react-spring/three");
/* harmony import */ var react_spring_three__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spring_three__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/natali/proyects/portfolio-next/components/Cuadrados3D.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const number = 35;
const colors = ['#f7ed4c', '#f96766', '#509bd5', '#4c4c4d', '#fefffa'];

const random = i => {
  const r = Math.random();
  return {
    position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 14, 1 + r * 14, 1],
    rotation: [0, 0, three__WEBPACK_IMPORTED_MODULE_0__["Math"].degToRad(Math.round(Math.random()) * 45)]
  };
};

const data = new Array(number).fill().map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10]
  };
});

function Content() {
  const [springs, set] = Object(react_spring_three__WEBPACK_IMPORTED_MODULE_3__["useSprings"])(number, i => _objectSpread({
    from: random(i)
  }, random(i), {
    config: {
      mass: 20,
      tension: 150,
      friction: 50
    }
  }));
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => void setInterval(() => set(i => _objectSpread({}, random(i), {
    delay: i * 40
  })), 3000), []);
  return data.map((d, index) => __jsx(react_spring_three__WEBPACK_IMPORTED_MODULE_3__["a"].mesh, _extends({
    key: index
  }, springs[index], {
    castShadow: true,
    receiveShadow: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), __jsx("boxBufferGeometry", {
    attach: "geometry",
    args: d.args,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx(react_spring_three__WEBPACK_IMPORTED_MODULE_3__["a"].meshStandardMaterial, {
    attach: "material",
    color: springs[index].color,
    roughness: 0.75,
    metalness: 0.5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  })));
}

function Lights() {
  return __jsx("group", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("pointLight", {
    intensity: 0.3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx("ambientLight", {
    intensity: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx("spotLight", {
    castShadow: true,
    intensity: 0.2,
    angle: Math.PI / 7,
    position: [150, 150, 250],
    penumbra: 1,
    "shadow-mapSize-width": 2048,
    "shadow-mapSize-height": 2048,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }));
}

function Cuadrados3D() {
  const isBrowser = false;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, isBrowser && __jsx(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["Canvas"], {
    shadowMap: true,
    camera: {
      position: [0, 0, 100],
      fov: 100
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(Lights, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }), __jsx(Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  })));
}

/***/ })

};;
//# sourceMappingURL=0.js.map