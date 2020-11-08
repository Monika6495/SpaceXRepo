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
    dataList = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("dataList"), JSON.parse(dataList).filter(function (element) {
      return element.launch_success == true;
    }));
    return dataList;
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
          lineNumber: 39,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Dropdown"].Item, {
          eventKey: "false",
          children: "false"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h4", {
        children: ["You selected ", value]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
        children: "Welcome to Space X Programs "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 8
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Components_Display__WEBPACK_IMPORTED_MODULE_6__["default"], {
        passedData: dataList,
        launch: LaunchTrue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 8
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYXRhIiwibGF1bmNoIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlU2VsZWN0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhTGlzdCIsIkxhdW5jaFRydWUiLCJKU09OIiwicGFyc2UiLCJmaWx0ZXIiLCJlbGVtZW50IiwibGF1bmNoX3N1Y2Nlc3MiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsSUFBaUIsUUFBakJBLElBQWlCO0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUFBLGtCQUVYQyxzREFBUSxDQUFDLEVBQUQsQ0FGRztBQUFBLE1BRTNCQyxLQUYyQjtBQUFBLE1BRXJCQyxRQUZxQjs7QUFHaEMsTUFBSUMsWUFBWSxHQUFDLFNBQWJBLFlBQWEsQ0FBQ0MsQ0FBRCxFQUFLO0FBQ3BCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBRixZQUFRLENBQUNFLENBQUQsQ0FBUjtBQUNELEdBSEQ7O0FBTUUsTUFBTUcsUUFBUSxHQUFHVCxJQUFqQjtBQUNBLE1BQU1VLFVBQVUsR0FBR1QsTUFBbkI7O0FBRUEsTUFBR0UsS0FBSyxJQUFJLElBQVosRUFBaUI7QUFDZkksV0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDRkMsWUFBUSwwR0FBR0UsSUFBSSxDQUFDQyxLQUFMLENBQVdILFFBQVgsRUFBcUJJLE1BQXJCLENBQTRCLFVBQUNDLE9BQUQ7QUFBQSxhQUFXQSxPQUFPLENBQUNDLGNBQVIsSUFBMEIsSUFBckM7QUFBQSxLQUE1QixDQUFILENBQVI7QUFDQSxXQUFPTixRQUFQO0FBQ0M7O0FBQ0ssc0JBQ0YscUVBQUMsMERBQUQ7QUFBQSwyQkFDQTtBQUFBLDhCQUNBLHFFQUFDLCtEQUFEO0FBQ0Ysa0JBQVUsTUFEUjtBQUVGLGFBQUssRUFBQyxtQkFGSjtBQUdGLFVBQUUsRUFBQywyQkFIRDtBQUlILGdCQUFRLEVBQUdKLFlBSlI7QUFBQSxnQ0FNTSxxRUFBQyx5REFBRCxDQUFVLElBQVY7QUFBZSxrQkFBUSxFQUFFLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5OLGVBT00scUVBQUMseURBQUQsQ0FBVSxJQUFWO0FBQWUsa0JBQVEsRUFBQyxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQVVGO0FBQUEsb0NBQWtCRixLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRSxlQVdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEMsZUFhRCxxRUFBQywyREFBRDtBQUFTLGtCQUFVLEVBQUdNLFFBQXRCO0FBQWdDLGNBQU0sRUFBR0M7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERTtBQXFCTCxDQXRDTCxDLENBd0NBOzs7R0F4Q01YLEs7O0tBQUFBLEs7O0FBeUNOQSxLQUFLLENBQUNpQixlQUFOO0FBQUEsK0xBQXdCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBR0pDLEtBQUssb0RBSEQ7O0FBQUE7QUFHaEJDLGVBSGdCO0FBQUE7QUFBQSxtQkFVREEsR0FBRyxDQUFDQyxJQUFKLEVBVkM7O0FBQUE7QUFVZHBCLGdCQVZjO0FBQUEsNkNBV2I7QUFBRUEsa0JBQUksRUFBRUE7QUFBUixhQVhhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBLEksQ0FhQTs7O0FBR2VELG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE2MGY2MDVlMTZjZWM0NWRjOTI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL0NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IEZldGNoIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmltcG9ydCBEaXNwbGF5IGZyb20gJy4uL0NvbXBvbmVudHMvRGlzcGxheSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9maWx0ZXInO1xyXG5pbXBvcnR7RHJvcGRvd24sRHJvcGRvd25CdXR0b259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5cclxuLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbmNvbnN0IEluZGV4ID0gKHsgZGF0YSxsYXVuY2ggfSk9PiB7XHJcbiAgXHJcbiAgdmFyIFt2YWx1ZSxzZXRWYWx1ZV09dXNlU3RhdGUoXCJcIik7XHJcbiAgdmFyIGhhbmRsZVNlbGVjdD0oZSk9PntcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgc2V0VmFsdWUoZSlcclxuICB9XHJcblxyXG4gIFxyXG4gICAgY29uc3QgZGF0YUxpc3QgPSBkYXRhO1xyXG4gICAgY29uc3QgTGF1bmNoVHJ1ZSA9IGxhdW5jaDtcclxuXHJcbiAgICBpZih2YWx1ZSA9PSB0cnVlKXtcclxuICAgICAgY29uc29sZS5sb2coXCJJbnNpZGUgSWYgU3RhdGVtZW50XCIpXHJcbiAgICBkYXRhTGlzdD0gIEpTT04ucGFyc2UoZGF0YUxpc3QpLmZpbHRlcigoZWxlbWVudCk9PmVsZW1lbnQubGF1bmNoX3N1Y2Nlc3MgPT0gdHJ1ZSlcclxuICAgIHJldHVybiBkYXRhTGlzdDtcclxuICAgIH1cclxuICAgICAgICAgIHJldHVybihcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPERyb3Bkb3duQnV0dG9uIFxyXG4gICAgICBhbGlnblJpZ2h0XHJcbiAgICAgIHRpdGxlPVwiU3VjY2Vzc2Z1bCBMYXVuY2hcIlxyXG4gICAgICBpZD1cImRyb3Bkb3duLW1lbnUtYWxpZ24tcmlnaHRcIlxyXG4gICAgIG9uU2VsZWN0ID17aGFuZGxlU2VsZWN0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBldmVudEtleT17dHJ1ZX0+dHJ1ZTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBldmVudEtleT1cImZhbHNlXCI+ZmFsc2U8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgIDwvRHJvcGRvd25CdXR0b24+XHJcbiAgICAgIDxoND5Zb3Ugc2VsZWN0ZWQge3ZhbHVlfTwvaDQ+XHJcbiAgICAgICA8aDE+V2VsY29tZSB0byBTcGFjZSBYIFByb2dyYW1zIDwvaDE+IFxyXG4gICAgICBcclxuICAgICAgIDxEaXNwbGF5IHBhc3NlZERhdGEgPXtkYXRhTGlzdH0gbGF1bmNoID17TGF1bmNoVHJ1ZX0gLz5cclxuICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgIClcclxuICAgIH1cclxuICAgXHJcbi8vIGlmKHt2YWx1ZX0gPT0gJycpIHtcclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCk9PntcclxuICBcclxuXHJcbiAgICB2YXIgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3YzL2xhdW5jaGVzP2xpbWl0PTEwMGApO1xyXG4gICAgXHJcbiAgICAvLyBpZihjdHgudmFsdWUgPT0ndHJ1ZScpXHJcbiAgICAvLyB7XHJcbiAgICAgIFxyXG4gICAgLy8gICByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjMvbGF1bmNoZXM/bGltaXQ9MTAwJmxhdW5jaF9zdWNjZXNzPXRydWUnKTsgXHJcbiAgICAvLyB9IFxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7ICBcclxuICAgIHJldHVybiB7IGRhdGE6IGRhdGEgfVxyXG59XHJcbi8vfVxyXG5cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==