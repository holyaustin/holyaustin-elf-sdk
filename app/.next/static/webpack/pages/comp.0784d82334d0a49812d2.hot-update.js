/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/comp",{

/***/ "./pages/comp.js":
/*!***********************!*\
  !*** ./pages/comp.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ comp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _containers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @containers/index */ \"./containers/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/brahma/apps/hackmoney/difo/app/pages/comp.js\",\n    _s = $RefreshSig$();\n\n // State management\n\n // Layout wrapper\n\n // Web3 container\n\n // Page styles\n\n // Router\n\n\n\nvar useStyles = function useStyles() {\n  return {\n    root: {\n      display: \"flex\",\n      alignItems: \"center\",\n      justifyContent: \"center\"\n    },\n    icon: {\n      marginRight: theme.spacing(2)\n    },\n    heroContent: {\n      padding: theme.spacing(8, 0, 6)\n    },\n    cardGrid: {\n      paddingBottom: theme.spacing(8)\n    },\n    link: {\n      textDecoration: \"none\"\n    },\n    card: {\n      height: \"100%\",\n      display: \"flex\",\n      flexDirection: \"column\",\n      transition: \"transform 0.15s ease-in-out\"\n    },\n    cardHovered: {\n      transform: \"scale3d(1.05, 1.05, 1)\"\n    },\n    cardMedia: {\n      paddingTop: \"56.25%\" // 16:9\n\n    },\n    cardContent: {\n      flexGrow: 1\n    },\n    bold: {\n      fontWeight: 600\n    }\n  };\n};\n\nfunction comp() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); // Router navigation\n  // Global state\n\n  var _web3$useContainer = _containers_index__WEBPACK_IMPORTED_MODULE_3__.web3.useContainer(),\n      address = _web3$useContainer.address;\n\n  var deposit = function deposit() {};\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    children: !address ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Please authenticate\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 28\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 22\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"form-group\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"Status\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 15\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_5__.default, {\n        header: \"~10 NFTs\",\n        text: \"Minted on OURZ\",\n        add: \"Since March 2021\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 15\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: deposit,\n          className: \"btn btn-outline-warning\",\n          children: \"Deposit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 19\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 15\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, this);\n}\n\n_s(comp, \"YW1OcYnpVY+cqd4NamFT9qO6OT4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter, _containers_index__WEBPACK_IMPORTED_MODULE_3__.web3.useContainer];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcC5qcz85MTI1Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaWNvbiIsIm1hcmdpblJpZ2h0IiwidGhlbWUiLCJzcGFjaW5nIiwiaGVyb0NvbnRlbnQiLCJwYWRkaW5nIiwiY2FyZEdyaWQiLCJwYWRkaW5nQm90dG9tIiwibGluayIsInRleHREZWNvcmF0aW9uIiwiY2FyZCIsImhlaWdodCIsImZsZXhEaXJlY3Rpb24iLCJ0cmFuc2l0aW9uIiwiY2FyZEhvdmVyZWQiLCJ0cmFuc2Zvcm0iLCJjYXJkTWVkaWEiLCJwYWRkaW5nVG9wIiwiY2FyZENvbnRlbnQiLCJmbGV4R3JvdyIsImJvbGQiLCJmb250V2VpZ2h0IiwiY29tcCIsInJvdXRlciIsInVzZVJvdXRlciIsIndlYjMiLCJhZGRyZXNzIiwiZGVwb3NpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFrQzs7Q0FDTzs7Q0FDQzs7Q0FDYTs7Q0FDZDs7QUFDekM7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFPO0FBQ3JCQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE1BREw7QUFFSkMsZ0JBQVUsRUFBRSxRQUZSO0FBR0pDLG9CQUFjLEVBQUU7QUFIWixLQURlO0FBTXJCQyxRQUFJLEVBQUU7QUFDSkMsaUJBQVcsRUFBRUMsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZDtBQURULEtBTmU7QUFTckJDLGVBQVcsRUFBRTtBQUNYQyxhQUFPLEVBQUVILEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7QUFERSxLQVRRO0FBWXJCRyxZQUFRLEVBQUU7QUFDUkMsbUJBQWEsRUFBRUwsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZDtBQURQLEtBWlc7QUFlckJLLFFBQUksRUFBRTtBQUNKQyxvQkFBYyxFQUFFO0FBRFosS0FmZTtBQWtCckJDLFFBQUksRUFBRTtBQUNKQyxZQUFNLEVBQUUsTUFESjtBQUVKZCxhQUFPLEVBQUUsTUFGTDtBQUdKZSxtQkFBYSxFQUFFLFFBSFg7QUFJSkMsZ0JBQVUsRUFBRTtBQUpSLEtBbEJlO0FBd0JyQkMsZUFBVyxFQUFFO0FBQ1hDLGVBQVMsRUFBRTtBQURBLEtBeEJRO0FBMkJyQkMsYUFBUyxFQUFFO0FBQ1RDLGdCQUFVLEVBQUUsUUFESCxDQUNhOztBQURiLEtBM0JVO0FBOEJyQkMsZUFBVyxFQUFFO0FBQ1hDLGNBQVEsRUFBRTtBQURDLEtBOUJRO0FBaUNyQkMsUUFBSSxFQUFFO0FBQ0pDLGdCQUFVLEVBQUU7QUFEUjtBQWpDZSxHQUFQO0FBQUEsQ0FBbEI7O0FBc0NlLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QixDQUQ2QixDQUNEO0FBQzVCOztBQUY2QiwyQkFHUkMsZ0VBQUEsRUFIUTtBQUFBLE1BR3JCQyxPQUhxQixzQkFHckJBLE9BSHFCOztBQUs3QixNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNLENBRXJCLENBRkQ7O0FBSUEsc0JBQ0UsOERBQUMsdURBQUQ7QUFBQSxjQUNJLENBQUNELE9BQUQsZ0JBQWE7QUFBQSxtQ0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFiLGdCQUNFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUksOERBQUMscURBQUQ7QUFDRSxjQUFNLEVBQUMsVUFEVDtBQUVFLFlBQUksRUFBQyxnQkFGUDtBQUdFLFdBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQVFJO0FBQUEsK0JBQ0k7QUFBUSxpQkFBTyxFQUFFQyxPQUFqQjtBQUEwQixtQkFBUyxFQUFDLHlCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5QkQ7O0dBbEN1QkwsSTtVQUNQRSxrRCxFQUVNQyxnRSIsImZpbGUiOiIuL3BhZ2VzL2NvbXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiOyAvLyBTdGF0ZSBtYW5hZ2VtZW50XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9MYXlvdXRcIjsgLy8gTGF5b3V0IHdyYXBwZXJcbmltcG9ydCB7IHdlYjMgfSBmcm9tIFwiQGNvbnRhaW5lcnMvaW5kZXhcIjsgLy8gV2ViMyBjb250YWluZXJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkBzdHlsZXMvcGFnZXMvQ3JlYXRlLm1vZHVsZS5zY3NzXCI7IC8vIFBhZ2Ugc3R5bGVzXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjsgLy8gUm91dGVyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gKCkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgaGVyb0NvbnRlbnQ6IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOCwgMCwgNiksXG4gICAgfSxcbiAgICBjYXJkR3JpZDoge1xuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg4KSxcbiAgICB9LFxuICAgIGxpbms6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIGNhcmQ6IHtcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dFwiLFxuICAgIH0sXG4gICAgY2FyZEhvdmVyZWQ6IHtcbiAgICAgIHRyYW5zZm9ybTogXCJzY2FsZTNkKDEuMDUsIDEuMDUsIDEpXCIsXG4gICAgfSxcbiAgICBjYXJkTWVkaWE6IHtcbiAgICAgIHBhZGRpbmdUb3A6IFwiNTYuMjUlXCIsIC8vIDE2OjlcbiAgICB9LFxuICAgIGNhcmRDb250ZW50OiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICAgIGJvbGQ6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICB9LFxuICB9KTtcbiAgXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgLy8gUm91dGVyIG5hdmlnYXRpb25cbiAgLy8gR2xvYmFsIHN0YXRlXG4gIGNvbnN0IHsgYWRkcmVzcyAgfSA9IHdlYjMudXNlQ29udGFpbmVyKCk7XG5cbiAgY29uc3QgZGVwb3NpdCA9ICgpID0+IHtcblxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PiBcbiAgICAgIHsgIWFkZHJlc3MgPyAoIDxkaXY+IDxwPlBsZWFzZSBhdXRoZW50aWNhdGU8L3A+PC9kaXY+KSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGgyPlN0YXR1czwvaDI+XG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwifjEwIE5GVHNcIlxuICAgICAgICAgICAgICAgIHRleHQ9XCJNaW50ZWQgb24gT1VSWlwiXG4gICAgICAgICAgICAgICAgYWRkPVwiU2luY2UgTWFyY2ggMjAyMVwiXG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZGVwb3NpdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXdhcm5pbmdcIiBcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRGVwb3NpdFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvTGF5b3V0PlxuICApO1xuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/comp.js\n");

/***/ })

});