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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/layout */ "./Components/layout.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _Components_Display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Display */ "./Components/Display.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/filter */ "./Components/filter.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");




var _jsxFileName = "C:\\Users\\monik\\SpaceX_Sapient\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();







 // const router = useRouter()

var Index = function Index(_ref) {
  _s();

  var data = _ref.data,
      launch = _ref.launch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      value = _useState[0],
      setValue = _useState[1];

  var handleSelect = function handleSelect(e) {
    console.log(e);
    setValue(e);
  };

  var dataList = data;
  var LaunchTrue = launch;
  var Parsed = JSON.Parse(data);

  if (value === true) {
    dataList = Parsed.filter(function (element) {
      return element.launch_success === true;
    });
    return dataList;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownButton"], {
        alignRight: true,
        title: "Successful Launch",
        id: "dropdown-menu-align-right",
        onSelect: handleSelect,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
          eventKey: true,
          children: "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
          eventKey: "false",
          children: "false"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
        children: ["You selected ", value]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        children: "Welcome to Space X Programs "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 8
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Components_Display__WEBPACK_IMPORTED_MODULE_5__["default"], {
        passedData: dataList,
        launch: LaunchTrue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 8
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYXRhIiwibGF1bmNoIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlU2VsZWN0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhTGlzdCIsIkxhdW5jaFRydWUiLCJQYXJzZWQiLCJKU09OIiwiUGFyc2UiLCJmaWx0ZXIiLCJlbGVtZW50IiwibGF1bmNoX3N1Y2Nlc3MiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQW9CO0FBQUE7O0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTs7QUFBQSxrQkFFWEMsc0RBQVEsQ0FBQyxFQUFELENBRkc7QUFBQSxNQUUzQkMsS0FGMkI7QUFBQSxNQUVyQkMsUUFGcUI7O0FBR2hDLE1BQUlDLFlBQVksR0FBQyxTQUFiQSxZQUFhLENBQUNDLENBQUQsRUFBSztBQUNwQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQUYsWUFBUSxDQUFDRSxDQUFELENBQVI7QUFDRCxHQUhEOztBQU1FLE1BQUlHLFFBQVEsR0FBR1QsSUFBZjtBQUNBLE1BQU1VLFVBQVUsR0FBR1QsTUFBbkI7QUFDQSxNQUFJVSxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXYixJQUFYLENBQWI7O0FBRUEsTUFBR0csS0FBSyxLQUFLLElBQWIsRUFBa0I7QUFFbEJNLFlBQVEsR0FBR0UsTUFBTSxDQUFDRyxNQUFQLENBQWMsVUFBQ0MsT0FBRDtBQUFBLGFBQVdBLE9BQU8sQ0FBQ0MsY0FBUixLQUEyQixJQUF0QztBQUFBLEtBQWQsQ0FBWDtBQUNBLFdBQU9QLFFBQVA7QUFDQzs7QUFDSyxzQkFDRixxRUFBQywwREFBRDtBQUFBLDJCQUNBO0FBQUEsOEJBQ0EscUVBQUMsOERBQUQ7QUFDRixrQkFBVSxNQURSO0FBRUYsYUFBSyxFQUFDLG1CQUZKO0FBR0YsVUFBRSxFQUFDLDJCQUhEO0FBSUgsZ0JBQVEsRUFBR0osWUFKUjtBQUFBLGdDQU1NLHFFQUFDLHdEQUFELENBQVUsSUFBVjtBQUFlLGtCQUFRLEVBQUUsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTk4sZUFPTSxxRUFBQyx3REFBRCxDQUFVLElBQVY7QUFBZSxrQkFBUSxFQUFDLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBVUY7QUFBQSxvQ0FBa0JGLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZFLGVBV0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYQyxlQWFELHFFQUFDLDJEQUFEO0FBQVMsa0JBQVUsRUFBR00sUUFBdEI7QUFBZ0MsY0FBTSxFQUFHQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURFO0FBcUJMLENBdkNMLEMsQ0F5Q0E7OztHQXpDTVgsSzs7S0FBQUEsSzs7QUEwQ05BLEtBQUssQ0FBQ2tCLGVBQU47QUFBQSwrTEFBd0IsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHSkMsS0FBSyxvREFIRDs7QUFBQTtBQUdoQkMsZUFIZ0I7QUFBQTtBQUFBLG1CQVVEQSxHQUFHLENBQUNDLElBQUosRUFWQzs7QUFBQTtBQVVkckIsZ0JBVmM7QUFBQSw2Q0FXYjtBQUFFQSxrQkFBSSxFQUFFQTtBQUFSLGFBWGE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsSSxDQWFBOzs7QUFHZUQsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzYwYzY4YmQ2Yjc1NDY5MTYzNGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vQ29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgRmV0Y2ggZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuaW1wb3J0IERpc3BsYXkgZnJvbSAnLi4vQ29tcG9uZW50cy9EaXNwbGF5JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZpbHRlciBmcm9tICcuLi9Db21wb25lbnRzL2ZpbHRlcic7XHJcbmltcG9ydHtEcm9wZG93bixEcm9wZG93bkJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcblxyXG4vLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuY29uc3QgSW5kZXggPSAoeyBkYXRhLGxhdW5jaCB9KT0+IHtcclxuICBcclxuICB2YXIgW3ZhbHVlLHNldFZhbHVlXT11c2VTdGF0ZShcIlwiKTtcclxuICB2YXIgaGFuZGxlU2VsZWN0PShlKT0+e1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICBzZXRWYWx1ZShlKVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgICB2YXIgZGF0YUxpc3QgPSBkYXRhO1xyXG4gICAgY29uc3QgTGF1bmNoVHJ1ZSA9IGxhdW5jaDtcclxuICAgIHZhciBQYXJzZWQgPSBKU09OLlBhcnNlKGRhdGEpO1xyXG5cclxuICAgIGlmKHZhbHVlID09PSB0cnVlKXtcclxuICAgIFxyXG4gICAgZGF0YUxpc3Q9ICBQYXJzZWQuZmlsdGVyKChlbGVtZW50KT0+ZWxlbWVudC5sYXVuY2hfc3VjY2VzcyA9PT0gdHJ1ZSlcclxuICAgIHJldHVybiBkYXRhTGlzdDtcclxuICAgIH1cclxuICAgICAgICAgIHJldHVybihcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPERyb3Bkb3duQnV0dG9uIFxyXG4gICAgICBhbGlnblJpZ2h0XHJcbiAgICAgIHRpdGxlPVwiU3VjY2Vzc2Z1bCBMYXVuY2hcIlxyXG4gICAgICBpZD1cImRyb3Bkb3duLW1lbnUtYWxpZ24tcmlnaHRcIlxyXG4gICAgIG9uU2VsZWN0ID17aGFuZGxlU2VsZWN0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBldmVudEtleT17dHJ1ZX0+dHJ1ZTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBldmVudEtleT1cImZhbHNlXCI+ZmFsc2U8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgIDwvRHJvcGRvd25CdXR0b24+XHJcbiAgICAgIDxoND5Zb3Ugc2VsZWN0ZWQge3ZhbHVlfTwvaDQ+XHJcbiAgICAgICA8aDE+V2VsY29tZSB0byBTcGFjZSBYIFByb2dyYW1zIDwvaDE+IFxyXG4gICAgICBcclxuICAgICAgIDxEaXNwbGF5IHBhc3NlZERhdGEgPXtkYXRhTGlzdH0gbGF1bmNoID17TGF1bmNoVHJ1ZX0gLz5cclxuICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgIClcclxuICAgIH1cclxuICAgXHJcbi8vIGlmKHt2YWx1ZX0gPT0gJycpIHtcclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCk9PntcclxuICBcclxuXHJcbiAgICB2YXIgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3YzL2xhdW5jaGVzP2xpbWl0PTEwMGApO1xyXG4gICAgXHJcbiAgICAvLyBpZihjdHgudmFsdWUgPT0ndHJ1ZScpXHJcbiAgICAvLyB7XHJcbiAgICAgIFxyXG4gICAgLy8gICByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjMvbGF1bmNoZXM/bGltaXQ9MTAwJmxhdW5jaF9zdWNjZXNzPXRydWUnKTsgXHJcbiAgICAvLyB9IFxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7ICBcclxuICAgIHJldHVybiB7IGRhdGE6IGRhdGEgfVxyXG59XHJcbi8vfVxyXG5cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==