/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "./pages/api/upload.js":
/*!*****************************!*\
  !*** ./pages/api/upload.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": function() { return /* binding */ config; }\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fleekhq_fleek_storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fleekhq/fleek-storage-js */ \"@fleekhq/fleek-storage-js\");\n/* harmony import */ var _fleekhq_fleek_storage_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fleekhq_fleek_storage_js__WEBPACK_IMPORTED_MODULE_4__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // Filesystem\n\n // Promisify fs\n\n // UUID generation\n\n // Formidable form handling\n\n // Fleek storage\n// Fleek authentication\n\nconst fleekAuth = {\n  apiKey: process.env.FLEEK_API_KEY,\n  apiSecret: process.env.FLEEK_API_SECRET\n}; // Async readFile operation\n\nconst readFileAsync = (0,util__WEBPACK_IMPORTED_MODULE_1__.promisify)((fs__WEBPACK_IMPORTED_MODULE_0___default().readFile));\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  // Setup incoming form data\n  const form = new (formidable__WEBPACK_IMPORTED_MODULE_3___default().IncomingForm)({\n    keepExtensions: true\n  }); // Collect data from form\n\n  const data = await new Promise((res, rej) => {\n    // Parse form data\n    form.parse(req, (err, fields, files) => {\n      // if error, reject promise\n      if (err) return rej(err); // Else, return fields and files\n\n      res({\n        fields,\n        files\n      });\n    });\n  }); // Collect file and metadataJSON from POST request\n\n  const {\n    name,\n    metadata\n  } = data.fields; // Collect uploaded media\n\n  const {\n    upload: file\n  } = data.files;\n  const fileData = await readFileAsync(file.path); // If file, name, and metadata provided\n\n  if (fileData && name && metadata) {\n    // Upload media to Fleek\n    const {\n      publicUrl: fileUrl\n    } = await _fleekhq_fleek_storage_js__WEBPACK_IMPORTED_MODULE_4___default().upload(_objectSpread(_objectSpread({}, fleekAuth), {}, {\n      key: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n      data: fileData\n    })); // Upload metdata to Fleek\n\n    const {\n      publicUrl: metadataUrl\n    } = await _fleekhq_fleek_storage_js__WEBPACK_IMPORTED_MODULE_4___default().upload(_objectSpread(_objectSpread({}, fleekAuth), {}, {\n      key: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n      data: metadata\n    })); // Return fileUrl and metadataUrl\n\n    res.send({\n      fileUrl,\n      metadataUrl\n    });\n  } else {\n    // Else, return 501\n    res.status(501);\n  } // End\n\n\n  res.end();\n}); // Remove bodyParser from endpoint\n\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9hcGkvdXBsb2FkLmpzP2M2MjEiXSwibmFtZXMiOlsiZmxlZWtBdXRoIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkZMRUVLX0FQSV9LRVkiLCJhcGlTZWNyZXQiLCJGTEVFS19BUElfU0VDUkVUIiwicmVhZEZpbGVBc3luYyIsInByb21pc2lmeSIsImZzIiwicmVxIiwicmVzIiwiZm9ybSIsImZvcm1pZGFibGUiLCJrZWVwRXh0ZW5zaW9ucyIsImRhdGEiLCJQcm9taXNlIiwicmVqIiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsIm5hbWUiLCJtZXRhZGF0YSIsInVwbG9hZCIsImZpbGUiLCJmaWxlRGF0YSIsInBhdGgiLCJwdWJsaWNVcmwiLCJmaWxlVXJsIiwiZmxlZWtTdG9yYWdlIiwia2V5IiwidXVpZCIsIm1ldGFkYXRhVXJsIiwic2VuZCIsInN0YXR1cyIsImVuZCIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQXFCOztDQUNhOztDQUNDOztDQUNFOztDQUNpQjtBQUV0RDs7QUFDQSxNQUFNQSxTQUFTLEdBQUc7QUFDaEJDLFFBQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGFBREo7QUFFaEJDLFdBQVMsRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHO0FBRlAsQ0FBbEIsQyxDQUtBOztBQUNBLE1BQU1DLGFBQWEsR0FBR0MsK0NBQVMsQ0FBQ0Msb0RBQUQsQ0FBL0I7QUFFQSwrREFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakM7QUFDQSxRQUFNQyxJQUFJLEdBQUcsSUFBSUMsZ0VBQUosQ0FBNEI7QUFBRUMsa0JBQWMsRUFBRTtBQUFsQixHQUE1QixDQUFiLENBRmlDLENBSWpDOztBQUNBLFFBQU1DLElBQUksR0FBRyxNQUFNLElBQUlDLE9BQUosQ0FBWSxDQUFDTCxHQUFELEVBQU1NLEdBQU4sS0FBYztBQUMzQztBQUNBTCxRQUFJLENBQUNNLEtBQUwsQ0FBV1IsR0FBWCxFQUFnQixDQUFDUyxHQUFELEVBQU1DLE1BQU4sRUFBY0MsS0FBZCxLQUF3QjtBQUN0QztBQUNBLFVBQUlGLEdBQUosRUFBUyxPQUFPRixHQUFHLENBQUNFLEdBQUQsQ0FBVixDQUY2QixDQUd0Qzs7QUFDQVIsU0FBRyxDQUFDO0FBQUVTLGNBQUY7QUFBVUM7QUFBVixPQUFELENBQUg7QUFDRCxLQUxEO0FBTUQsR0FSa0IsQ0FBbkIsQ0FMaUMsQ0FlakM7O0FBQ0EsUUFBTTtBQUFFQyxRQUFGO0FBQVFDO0FBQVIsTUFBcUJSLElBQUksQ0FBQ0ssTUFBaEMsQ0FoQmlDLENBa0JqQzs7QUFDQSxRQUFNO0FBQUVJLFVBQU0sRUFBRUM7QUFBVixNQUFtQlYsSUFBSSxDQUFDTSxLQUE5QjtBQUNBLFFBQU1LLFFBQVEsR0FBRyxNQUFNbkIsYUFBYSxDQUFDa0IsSUFBSSxDQUFDRSxJQUFOLENBQXBDLENBcEJpQyxDQXNCakM7O0FBQ0EsTUFBSUQsUUFBUSxJQUFJSixJQUFaLElBQW9CQyxRQUF4QixFQUFrQztBQUNoQztBQUNBLFVBQU07QUFBRUssZUFBUyxFQUFFQztBQUFiLFFBQXlCLE1BQU1DLHVFQUFBLGlDQUNoQzlCLFNBRGdDO0FBRW5DK0IsU0FBRyxFQUFFQyx3Q0FBSSxFQUYwQjtBQUduQ2pCLFVBQUksRUFBRVc7QUFINkIsT0FBckMsQ0FGZ0MsQ0FRaEM7O0FBQ0EsVUFBTTtBQUFFRSxlQUFTLEVBQUVLO0FBQWIsUUFBNkIsTUFBTUgsdUVBQUEsaUNBQ3BDOUIsU0FEb0M7QUFFdkMrQixTQUFHLEVBQUVDLHdDQUFJLEVBRjhCO0FBR3ZDakIsVUFBSSxFQUFFUTtBQUhpQyxPQUF6QyxDQVRnQyxDQWVoQzs7QUFDQVosT0FBRyxDQUFDdUIsSUFBSixDQUFTO0FBQUVMLGFBQUY7QUFBV0k7QUFBWCxLQUFUO0FBQ0QsR0FqQkQsTUFpQk87QUFDTDtBQUNBdEIsT0FBRyxDQUFDd0IsTUFBSixDQUFXLEdBQVg7QUFDRCxHQTNDZ0MsQ0E2Q2pDOzs7QUFDQXhCLEtBQUcsQ0FBQ3lCLEdBQUo7QUFDRCxDQS9DRCxFLENBaURBOztBQUNPLE1BQU1DLE1BQU0sR0FBRztBQUNwQkMsS0FBRyxFQUFFO0FBQ0hDLGNBQVUsRUFBRTtBQURUO0FBRGUsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS91cGxvYWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7IC8vIEZpbGVzeXN0ZW1cbmltcG9ydCB7IHByb21pc2lmeSB9IGZyb20gXCJ1dGlsXCI7IC8vIFByb21pc2lmeSBmc1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gXCJ1dWlkXCI7IC8vIFVVSUQgZ2VuZXJhdGlvblxuaW1wb3J0IGZvcm1pZGFibGUgZnJvbSBcImZvcm1pZGFibGVcIjsgLy8gRm9ybWlkYWJsZSBmb3JtIGhhbmRsaW5nXG5pbXBvcnQgZmxlZWtTdG9yYWdlIGZyb20gXCJAZmxlZWtocS9mbGVlay1zdG9yYWdlLWpzXCI7IC8vIEZsZWVrIHN0b3JhZ2VcblxuLy8gRmxlZWsgYXV0aGVudGljYXRpb25cbmNvbnN0IGZsZWVrQXV0aCA9IHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5GTEVFS19BUElfS0VZLFxuICBhcGlTZWNyZXQ6IHByb2Nlc3MuZW52LkZMRUVLX0FQSV9TRUNSRVQsXG59O1xuXG4vLyBBc3luYyByZWFkRmlsZSBvcGVyYXRpb25cbmNvbnN0IHJlYWRGaWxlQXN5bmMgPSBwcm9taXNpZnkoZnMucmVhZEZpbGUpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgLy8gU2V0dXAgaW5jb21pbmcgZm9ybSBkYXRhXG4gIGNvbnN0IGZvcm0gPSBuZXcgZm9ybWlkYWJsZS5JbmNvbWluZ0Zvcm0oeyBrZWVwRXh0ZW5zaW9uczogdHJ1ZSB9KTtcblxuICAvLyBDb2xsZWN0IGRhdGEgZnJvbSBmb3JtXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAvLyBQYXJzZSBmb3JtIGRhdGFcbiAgICBmb3JtLnBhcnNlKHJlcSwgKGVyciwgZmllbGRzLCBmaWxlcykgPT4ge1xuICAgICAgLy8gaWYgZXJyb3IsIHJlamVjdCBwcm9taXNlXG4gICAgICBpZiAoZXJyKSByZXR1cm4gcmVqKGVycik7XG4gICAgICAvLyBFbHNlLCByZXR1cm4gZmllbGRzIGFuZCBmaWxlc1xuICAgICAgcmVzKHsgZmllbGRzLCBmaWxlcyB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gQ29sbGVjdCBmaWxlIGFuZCBtZXRhZGF0YUpTT04gZnJvbSBQT1NUIHJlcXVlc3RcbiAgY29uc3QgeyBuYW1lLCBtZXRhZGF0YSB9ID0gZGF0YS5maWVsZHM7XG5cbiAgLy8gQ29sbGVjdCB1cGxvYWRlZCBtZWRpYVxuICBjb25zdCB7IHVwbG9hZDogZmlsZSB9ID0gZGF0YS5maWxlcztcbiAgY29uc3QgZmlsZURhdGEgPSBhd2FpdCByZWFkRmlsZUFzeW5jKGZpbGUucGF0aCk7XG5cbiAgLy8gSWYgZmlsZSwgbmFtZSwgYW5kIG1ldGFkYXRhIHByb3ZpZGVkXG4gIGlmIChmaWxlRGF0YSAmJiBuYW1lICYmIG1ldGFkYXRhKSB7XG4gICAgLy8gVXBsb2FkIG1lZGlhIHRvIEZsZWVrXG4gICAgY29uc3QgeyBwdWJsaWNVcmw6IGZpbGVVcmwgfSA9IGF3YWl0IGZsZWVrU3RvcmFnZS51cGxvYWQoe1xuICAgICAgLi4uZmxlZWtBdXRoLFxuICAgICAga2V5OiB1dWlkKCksXG4gICAgICBkYXRhOiBmaWxlRGF0YSxcbiAgICB9KTtcblxuICAgIC8vIFVwbG9hZCBtZXRkYXRhIHRvIEZsZWVrXG4gICAgY29uc3QgeyBwdWJsaWNVcmw6IG1ldGFkYXRhVXJsIH0gPSBhd2FpdCBmbGVla1N0b3JhZ2UudXBsb2FkKHtcbiAgICAgIC4uLmZsZWVrQXV0aCxcbiAgICAgIGtleTogdXVpZCgpLFxuICAgICAgZGF0YTogbWV0YWRhdGEsXG4gICAgfSk7XG5cbiAgICAvLyBSZXR1cm4gZmlsZVVybCBhbmQgbWV0YWRhdGFVcmxcbiAgICByZXMuc2VuZCh7IGZpbGVVcmwsIG1ldGFkYXRhVXJsIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIEVsc2UsIHJldHVybiA1MDFcbiAgICByZXMuc3RhdHVzKDUwMSk7XG4gIH1cblxuICAvLyBFbmRcbiAgcmVzLmVuZCgpO1xufTtcblxuLy8gUmVtb3ZlIGJvZHlQYXJzZXIgZnJvbSBlbmRwb2ludFxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgYm9keVBhcnNlcjogZmFsc2UsXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/upload.js\n");

/***/ }),

/***/ "@fleekhq/fleek-storage-js":
/*!********************************************!*\
  !*** external "@fleekhq/fleek-storage-js" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fleekhq/fleek-storage-js");;

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("formidable");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/upload.js"));
module.exports = __webpack_exports__;

})();