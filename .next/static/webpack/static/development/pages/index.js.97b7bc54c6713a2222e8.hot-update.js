webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-media */ "./node_modules/react-media/esm/react-media.js");






var _this = undefined,
    _jsxFileName = "/home/natali/proyects/portfolio-next/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




 //import Cuadrados3D from '../components/Cuadrados3D'


 //
//

var loader = function loader() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 22
    }
  }, "Loading threejs...");
}; //
// a component that will be defered to be rendered only on client side.


var LoadableCuadrado = react_loadable__WEBPACK_IMPORTED_MODULE_9___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/Cuadrados3D.js */ "./components/Cuadrados3D.js"));
  },
  // imports the component with the three.js and allows use of it safely
  loading: loader
});
var StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a).withConfig({
  displayName: "pages__StyledLink",
  componentId: "sc-177axxk-0"
})(["color:var(--blue-line);font-family:'Alata',sans-serif;text-transform:uppercase;"]);
var SiteDescriptionSection = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].section.withConfig({
  displayName: "pages__SiteDescriptionSection",
  componentId: "sc-177axxk-1"
})(["font-family:'Alata',sans-serif;font-size:1.25rem;color:var(--orange);text-align:center;padding:1rem;margin:2rem 1rem;"]);
var FlexContainerColumnCenter = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__FlexContainerColumnCenter",
  componentId: "sc-177axxk-2"
})(["display:flex;justify-content:center;align-items:center;margin:3.5rem 0;overflow:hidden;div{margin:0 2rem;text-align:center;}h1{font-size:1.75rem;}h2{font-size:1.25rem;font-family:'Roboto';background-color:var(--yelow-line);}img{max-width:50%;}"]);
var CuadradosStyled = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__CuadradosStyled",
  componentId: "sc-177axxk-3"
})(["width:100vw !important;height:100vh !important;overflow:hidden !important;position:absolute !important;top:0 !important;left:0 !important;"]);
var Main = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__Main",
  componentId: "sc-177axxk-4"
})(["position:relative;width:99vw;height:99vh;overflow:hidden;"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__Text",
  componentId: "sc-177axxk-5"
})(["position:absolute;display:inline-block;top:50%;transform:translate3d(0,-50%,0);left:7%;z-index:200;font-size:6vw;color:var(--blue-line);@media (min-width:900px){font-size:5vw;left:15%;}"]);
var Center = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__Center",
  componentId: "sc-177axxk-6"
})(["text-align:center;"]);

var ProyectRepeat = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ProyectRepeat, _React$Component);

  var _super = _createSuper(ProyectRepeat);

  function ProyectRepeat() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProyectRepeat);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProyectRepeat, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(react_media__WEBPACK_IMPORTED_MODULE_10__["default"], {
        queries: {
          small: {
            maxWidth: 599
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 9
        }
      }, function (matches) {
        return matches.small ? __jsx("h1", {
          className: "portfolio",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 17
          }
        }, "Portfolio ", __jsx("br", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 53
          }
        })) : __jsx("h1", {
          className: "portfolio",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 17
          }
        }, "Portfolio ", __jsx("br", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 53
          }
        }), "Portfolio ", __jsx("br", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 69
          }
        }), " Portfolio ", __jsx("br", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 85
          }
        }));
      }));
    }
  }]);

  return ProyectRepeat;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var loaderProyect = function loaderProyect() {
  return __jsx("h1", {
    className: "portfolio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "Portfolio");
};

var LoadableRepeatProyect = react_loadable__WEBPACK_IMPORTED_MODULE_9___default()({
  loader: function loader() {
    return __jsx(ProyectRepeat, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    });
  },
  loading: loaderProyect
});

var PreviewProyectText = function PreviewProyectText(props) {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, props.title), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, props.tecn));
};

var GridIntro = function GridIntro() {
  //const {width} = useWindowSize();
  var isBrowser = true;
  return __jsx("section", {
    id: "me",
    className: "grid-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "name1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, " NATALI "), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 43
    }
  }), __jsx("h1", {
    className: "name2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, "PALACIO"), __jsx("h1", {
    className: "name3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, "PASTOR"), __jsx("div", {
    className: "red-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "blue-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "yellow-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }), isBrowser && __jsx(ProyectRepeat, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }), __jsx("section", {
    className: "me-description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, "Hi! I\u2019m a ", __jsx("span", {
    className: "bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 22
    }
  }, "Front End"), " web developer from Argentina, and I can help you build AWESOME web solutions. "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, "I search to balance function and form"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, "The technologies that I use are ", __jsx("span", {
    className: "bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 44
    }
  }, "React, Javascript, HTML, CSS"), " and ", __jsx("span", {
    className: "bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 107
    }
  }, "Figma.")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }, "Here you can see what i\u2019ve built. If you are interested, ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 69
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 90
    }
  }, __jsx("span", {
    className: "bold bold-blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 93
    }
  }, "let\u2019s talk!"))))));
};
/* export default function Home(props) {
  return (
    <div className="container">
      
      
    </div>
  )
} */


function Home(props) {
  var isBrowser = true;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(GridIntro, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }
  }), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }, "Some proyects"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "projects/la-mirada-vegetal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }, __jsx(FlexContainerColumnCenter, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 14
    }
  }, __jsx("img", {
    src: "/projects/la-mirada-vegetal.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }), __jsx(PreviewProyectText, {
    title: "La Mirada Vegetal",
    tecn: "React, Three.js, JS, CSS, HTML, Figma",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  })))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "projects/asistocovid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  }, __jsx(FlexContainerColumnCenter, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 14
    }
  }, __jsx(PreviewProyectText, {
    title: "Asistocovid",
    tecn: "React, Angular, JS, CSS, HTML, Figma",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }), __jsx("img", {
    src: "/projects/asistocovid.png",
    alt: "asistocovid-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  })))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "projects/animated-city-landing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }, __jsx(FlexContainerColumnCenter, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 14
    }
  }, __jsx("img", {
    src: "/projects/animated-city.png",
    alt: "animated-city-landing-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }), __jsx(PreviewProyectText, {
    title: "Animated City Landing",
    tecn: "JS, GSAP, CSS, HTML, Figma",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  })))), __jsx(Main, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }, isBrowser && __jsx(CuadradosStyled, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }, __jsx(LoadableCuadrado, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 15
    }
  })), __jsx(Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 11
    }
  }, __jsx(StyledLink, {
    href: "projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 45
    }
  }, "Click here to see all my proyects"))))), __jsx(SiteDescriptionSection, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }, "This site was built with NextJs, React, ThreeJs, CSS Grids and Flexbox!"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  }, "It's fully responsive and mobile-friendly")));
}
;

/***/ })

})
//# sourceMappingURL=index.js.97b7bc54c6713a2222e8.hot-update.js.map