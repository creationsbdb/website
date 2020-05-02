webpackHotUpdate("static/development/pages/catalog.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
var _jsxFileName = "/Users/thomashaessle/Projects/creationsbdb/src/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Layout(props) {
  return __jsx("div", {
    className: "jsx-268197766" + " " + "layout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_Meta__WEBPACK_IMPORTED_MODULE_4__["default"], {
    siteTitle: props.siteTitle,
    siteDescription: props.siteDescription,
    siteUrl: props.siteUrl + props.pathname,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    siteTitle: props.siteTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-268197766" + " " + "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, props.children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    facebook: props.facebook,
    instagram: props.instagram,
    email: props.email,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "268197766",
    __self: this
  }, ".layout.jsx-268197766{overflow-x:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:100vh;}.content.jsx-268197766{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}@media (min-width:768px){.content.jsx-268197766{-webkit-box-flex:none;-webkit-flex-grow:none;-ms-flex-positive:none;flex-grow:none;width:70vw;margin-left:15vw;margin-right:15vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9tYXNoYWVzc2xlL1Byb2plY3RzL2NyZWF0aW9uc2JkYi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJTLEFBRytCLEFBTU4sQUFJSyxrQkFUSixxREFNZixZQUllLFNBVFMsRUFVSCxpQkFDQyxrQkFDcEIseUNBWGlCLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvdGhvbWFzaGFlc3NsZS9Qcm9qZWN0cy9jcmVhdGlvbnNiZGIvc3JjL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcblxuaW1wb3J0IE1ldGEgZnJvbSAnLi9NZXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgIDxNZXRhXG4gICAgICAgIHNpdGVUaXRsZT17cHJvcHMuc2l0ZVRpdGxlfVxuICAgICAgICBzaXRlRGVzY3JpcHRpb249e3Byb3BzLnNpdGVEZXNjcmlwdGlvbn1cbiAgICAgICAgc2l0ZVVybD17cHJvcHMuc2l0ZVVybCArIHByb3BzLnBhdGhuYW1lfVxuICAgICAgLz5cbiAgICAgIDxIZWFkZXIgc2l0ZVRpdGxlPXtwcm9wcy5zaXRlVGl0bGV9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICA8Rm9vdGVyXG4gICAgICAgIGZhY2Vib29rPXtwcm9wcy5mYWNlYm9va31cbiAgICAgICAgaW5zdGFncmFtPXtwcm9wcy5pbnN0YWdyYW19XG4gICAgICAgIGVtYWlsPXtwcm9wcy5lbWFpbH1cbiAgICAgIC8+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgZmxleC1ncm93OiBub25lO1xuICAgICAgICAgICAgICB3aWR0aDogNzB2dztcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1dnc7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTV2dztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/thomashaessle/Projects/creationsbdb/src/components/Layout.js */"));
}

/***/ })

})
//# sourceMappingURL=catalog.js.b651b5bc25af8cccc296.hot-update.js.map