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
    url: props.siteUrl + props.pathname,
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
  }, ".layout.jsx-268197766{overflow-x:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:100vh;}.content.jsx-268197766{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}@media (min-width:768px){.content.jsx-268197766{-webkit-box-flex:none;-webkit-flex-grow:none;-ms-flex-positive:none;flex-grow:none;width:70vw;margin-left:15vw;margin-right:15vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9tYXNoYWVzc2xlL1Byb2plY3RzL2NyZWF0aW9uc2JkYi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJTLEFBRytCLEFBTU4sQUFJSyxrQkFUSixxREFNZixZQUllLFNBVFMsRUFVSCxpQkFDQyxrQkFDcEIseUNBWGlCLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvdGhvbWFzaGFlc3NsZS9Qcm9qZWN0cy9jcmVhdGlvbnNiZGIvc3JjL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcblxuaW1wb3J0IE1ldGEgZnJvbSAnLi9NZXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgIDxNZXRhXG4gICAgICAgIHNpdGVUaXRsZT17cHJvcHMuc2l0ZVRpdGxlfVxuICAgICAgICBzaXRlRGVzY3JpcHRpb249e3Byb3BzLnNpdGVEZXNjcmlwdGlvbn1cbiAgICAgICAgdXJsPXtwcm9wcy5zaXRlVXJsICsgcHJvcHMucGF0aG5hbWV9XG4gICAgICAvPlxuICAgICAgPEhlYWRlciBzaXRlVGl0bGU9e3Byb3BzLnNpdGVUaXRsZX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgIDxGb290ZXJcbiAgICAgICAgZmFjZWJvb2s9e3Byb3BzLmZhY2Vib29rfVxuICAgICAgICBpbnN0YWdyYW09e3Byb3BzLmluc3RhZ3JhbX1cbiAgICAgICAgZW1haWw9e3Byb3BzLmVtYWlsfVxuICAgICAgLz5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmxheW91dCB7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICBmbGV4LWdyb3c6IG5vbmU7XG4gICAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTV2dztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXZ3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/thomashaessle/Projects/creationsbdb/src/components/Layout.js */"));
}

/***/ })

})
//# sourceMappingURL=catalog.js.d3c77d3a1334ccdf8c4d.hot-update.js.map