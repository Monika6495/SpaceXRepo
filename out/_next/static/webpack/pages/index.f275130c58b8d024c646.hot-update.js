webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/layout */ "./Components/layout.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _Components_Display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Display */ "./Components/Display.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Components_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/filter */ "./Components/filter.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");





var _jsxFileName = "C:\\Users\\monik\\SpaceX_Sapient\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();







 // const router = useRouter()

var Index = function Index(_ref) {
  _s();

  var data = _ref.data,
      launch = _ref.launch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(""),
      value = _useState[0],
      setValue = _useState[1];

  var handleSelect = function handleSelect(e) {
    console.log(e);
    setValue(e);
  };

  var dataList = data;
  var LaunchTrue = launch;

  if (value == true) {
    console.log("Inside If Statement");
    dataList = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("dataList"), data.filter(function (data) {
      return data.launch_success == true;
    }));
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["DropdownButton"], {
        alignRight: true,
        title: "Successful Launch",
        id: "dropdown-menu-align-right",
        onSelect: handleSelect,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Dropdown"].Item, {
          eventKey: true,
          children: "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Dropdown"].Item, {
          eventKey: "false",
          children: "false"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h4", {
        children: ["You selected ", value]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
        children: "Welcome to Space X Programs "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 8
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Components_Display__WEBPACK_IMPORTED_MODULE_6__["default"], {
        passedData: dataList,
        launch: LaunchTrue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 8
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, _this);
}; // if({value} == '') {


_s(Index, "WHwJV1oCj9Db/p/UQjU4Iu9CdI4=");

_c = Index;

Index.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://api.spacexdata.com/v3/launches?limit=100");

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", {
              data: data
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}(); //}


/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYXRhIiwibGF1bmNoIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlU2VsZWN0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhTGlzdCIsIkxhdW5jaFRydWUiLCJmaWx0ZXIiLCJsYXVuY2hfc3VjY2VzcyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZldGNoIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxJQUFpQixRQUFqQkEsSUFBaUI7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7O0FBQUEsa0JBRVhDLHNEQUFRLENBQUMsRUFBRCxDQUZHO0FBQUEsTUFFM0JDLEtBRjJCO0FBQUEsTUFFckJDLFFBRnFCOztBQUdoQyxNQUFJQyxZQUFZLEdBQUMsU0FBYkEsWUFBYSxDQUFDQyxDQUFELEVBQUs7QUFDcEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0FGLFlBQVEsQ0FBQ0UsQ0FBRCxDQUFSO0FBQ0QsR0FIRDs7QUFNRSxNQUFNRyxRQUFRLEdBQUdULElBQWpCO0FBQ0EsTUFBTVUsVUFBVSxHQUFHVCxNQUFuQjs7QUFFQSxNQUFHRSxLQUFLLElBQUksSUFBWixFQUFpQjtBQUNmSSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNGQyxZQUFRLDBHQUFHVCxJQUFJLENBQUNXLE1BQUwsQ0FBWSxVQUFDWCxJQUFEO0FBQUEsYUFBUUEsSUFBSSxDQUFDWSxjQUFMLElBQXVCLElBQS9CO0FBQUEsS0FBWixDQUFILENBQVI7QUFDQzs7QUFDSyxzQkFDRixxRUFBQywwREFBRDtBQUFBLDJCQUNBO0FBQUEsOEJBQ0EscUVBQUMsK0RBQUQ7QUFDRixrQkFBVSxNQURSO0FBRUYsYUFBSyxFQUFDLG1CQUZKO0FBR0YsVUFBRSxFQUFDLDJCQUhEO0FBSUgsZ0JBQVEsRUFBR1AsWUFKUjtBQUFBLGdDQU1NLHFFQUFDLHlEQUFELENBQVUsSUFBVjtBQUFlLGtCQUFRLEVBQUUsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTk4sZUFPTSxxRUFBQyx5REFBRCxDQUFVLElBQVY7QUFBZSxrQkFBUSxFQUFDLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBVUY7QUFBQSxvQ0FBa0JGLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZFLGVBV0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYQyxlQWFELHFFQUFDLDJEQUFEO0FBQVMsa0JBQVUsRUFBR00sUUFBdEI7QUFBZ0MsY0FBTSxFQUFHQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURFO0FBcUJMLENBckNMLEMsQ0F1Q0E7OztHQXZDTVgsSzs7S0FBQUEsSzs7QUF3Q05BLEtBQUssQ0FBQ2MsZUFBTjtBQUFBLCtMQUF3QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdKQyxLQUFLLG9EQUhEOztBQUFBO0FBR2hCQyxlQUhnQjtBQUFBO0FBQUEsbUJBVURBLEdBQUcsQ0FBQ0MsSUFBSixFQVZDOztBQUFBO0FBVWRqQixnQkFWYztBQUFBLDZDQVdiO0FBQUVBLGtCQUFJLEVBQUVBO0FBQVIsYUFYYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJLENBYUE7OztBQUdlRCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMjc1MTMwYzU4YjhkMDI0YzY0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9Db21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBGZXRjaCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5pbXBvcnQgRGlzcGxheSBmcm9tICcuLi9Db21wb25lbnRzL0Rpc3BsYXknO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uL0NvbXBvbmVudHMvZmlsdGVyJztcclxuaW1wb3J0e0Ryb3Bkb3duLERyb3Bkb3duQnV0dG9ufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuXHJcbi8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG5jb25zdCBJbmRleCA9ICh7IGRhdGEsbGF1bmNoIH0pPT4ge1xyXG4gIFxyXG4gIHZhciBbdmFsdWUsc2V0VmFsdWVdPXVzZVN0YXRlKFwiXCIpO1xyXG4gIHZhciBoYW5kbGVTZWxlY3Q9KGUpPT57XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIHNldFZhbHVlKGUpXHJcbiAgfVxyXG5cclxuICBcclxuICAgIGNvbnN0IGRhdGFMaXN0ID0gZGF0YTtcclxuICAgIGNvbnN0IExhdW5jaFRydWUgPSBsYXVuY2g7XHJcblxyXG4gICAgaWYodmFsdWUgPT0gdHJ1ZSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSW5zaWRlIElmIFN0YXRlbWVudFwiKVxyXG4gICAgZGF0YUxpc3Q9ICBkYXRhLmZpbHRlcigoZGF0YSk9PmRhdGEubGF1bmNoX3N1Y2Nlc3MgPT0gdHJ1ZSlcclxuICAgIH1cclxuICAgICAgICAgIHJldHVybihcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPERyb3Bkb3duQnV0dG9uIFxyXG4gICAgICBhbGlnblJpZ2h0XHJcbiAgICAgIHRpdGxlPVwiU3VjY2Vzc2Z1bCBMYXVuY2hcIlxyXG4gICAgICBpZD1cImRyb3Bkb3duLW1lbnUtYWxpZ24tcmlnaHRcIlxyXG4gICAgIG9uU2VsZWN0ID17aGFuZGxlU2VsZWN0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBldmVudEtleT17dHJ1ZX0+dHJ1ZTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBldmVudEtleT1cImZhbHNlXCI+ZmFsc2U8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgIDwvRHJvcGRvd25CdXR0b24+XHJcbiAgICAgIDxoND5Zb3Ugc2VsZWN0ZWQge3ZhbHVlfTwvaDQ+XHJcbiAgICAgICA8aDE+V2VsY29tZSB0byBTcGFjZSBYIFByb2dyYW1zIDwvaDE+IFxyXG4gICAgICBcclxuICAgICAgIDxEaXNwbGF5IHBhc3NlZERhdGEgPXtkYXRhTGlzdH0gbGF1bmNoID17TGF1bmNoVHJ1ZX0gLz5cclxuICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgIClcclxuICAgIH1cclxuICAgXHJcbi8vIGlmKHt2YWx1ZX0gPT0gJycpIHtcclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCk9PntcclxuICBcclxuXHJcbiAgICB2YXIgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3YzL2xhdW5jaGVzP2xpbWl0PTEwMGApO1xyXG4gICAgXHJcbiAgICAvLyBpZihjdHgudmFsdWUgPT0ndHJ1ZScpXHJcbiAgICAvLyB7XHJcbiAgICAgIFxyXG4gICAgLy8gICByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjMvbGF1bmNoZXM/bGltaXQ9MTAwJmxhdW5jaF9zdWNjZXNzPXRydWUnKTsgXHJcbiAgICAvLyB9IFxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7ICBcclxuICAgIHJldHVybiB7IGRhdGE6IGRhdGEgfVxyXG59XHJcbi8vfVxyXG5cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==