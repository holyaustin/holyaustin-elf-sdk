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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./containers/index.js":
/*!*****************************!*\
  !*** ./containers/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GlobalProvider; },\n/* harmony export */   \"web3\": function() { return /* reexport safe */ _containers_web3__WEBPACK_IMPORTED_MODULE_1__.default; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _containers_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @containers/web3 */ \"./containers/web3.js\");\n\nvar _jsxFileName = \"/home/brahma/apps/hackmoney/difo/app/containers/index.js\";\n // Web3 provider\n// Global state provider\n\nfunction GlobalProvider({\n  children\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_web3__WEBPACK_IMPORTED_MODULE_1__.default.Provider, {\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 10\n  }, this);\n} // Export individual containers\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9jb250YWluZXJzL2luZGV4LmpzP2NhNzMiXSwibmFtZXMiOlsiR2xvYmFsUHJvdmlkZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztDQUFxQztBQUVyQzs7QUFDZSxTQUFTQSxjQUFULENBQXdCO0FBQUVDO0FBQUYsQ0FBeEIsRUFBc0M7QUFDbkQsc0JBQU8sOERBQUMsOERBQUQ7QUFBQSxjQUFnQkE7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QsQyxDQUVEIiwiZmlsZSI6Ii4vY29udGFpbmVycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWIzIGZyb20gXCJAY29udGFpbmVycy93ZWIzXCI7IC8vIFdlYjMgcHJvdmlkZXJcblxuLy8gR2xvYmFsIHN0YXRlIHByb3ZpZGVyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHbG9iYWxQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIDx3ZWIzLlByb3ZpZGVyPntjaGlsZHJlbn08L3dlYjMuUHJvdmlkZXI+O1xufVxuXG4vLyBFeHBvcnQgaW5kaXZpZHVhbCBjb250YWluZXJzXG5leHBvcnQgeyB3ZWIzIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./containers/index.js\n");

/***/ }),

/***/ "./containers/web3.js":
/*!****************************!*\
  !*** ./containers/web3.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _zoralabs_zdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zoralabs/zdk */ \"@zoralabs/zdk\");\n/* harmony import */ var _zoralabs_zdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_zoralabs_zdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3modal */ \"web3modal\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! unstated-next */ \"unstated-next\");\n/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @walletconnect/web3-provider */ \"@walletconnect/web3-provider\");\n/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_6__);\n // Zora provider\n\n // axios requests\n\n // Web3Modal\n\n // Ethers\n\n\n // State management\n\n // Unstated-next containerization\n\n // WalletConnectProvider (Web3Modal)\n// Web3Modal provider options --set for RINKEBY\n\nconst providerOptions = {\n  walletconnect: {\n    package: (_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_6___default()),\n    options: {\n      // Inject Infura\n      infuraId: process.env.INFURA_ID\n    }\n  }\n};\n\nfunction useWeb3() {\n  const {\n    0: zora,\n    1: setZora\n  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null); //Zora provider\n\n  const {\n    0: modal,\n    1: setModal\n  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null); //Web3Modal\n\n  const {\n    0: address,\n    1: setAddress\n  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null); //ETH address\n\n  const {\n    0: provider,\n    1: setProvider\n  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n  /**\n   * Setup Web3Modal on page load (requires window)\n   */\n\n  const setupWeb3Modal = () => {\n    // Creaste new web3Modal\n    const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_2___default())({\n      //network: \"mainnet\",\n      network: \"rinkeby\",\n      cacheProvider: true,\n      providerOptions: providerOptions\n    }); // Set web3Modal\n\n    setModal(web3Modal);\n  };\n  /**\n   * Authenticate and store necessary items in global state\n   */\n\n\n  const authenticate = async () => {\n    // Initiate web3Modal\n    const web3Provider = await modal.connect();\n    await web3Provider.enable(); // Generate ethers provider\n\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.providers.Web3Provider(web3Provider);\n    setProvider(provider); // Collect address\n\n    const signer = provider.getSigner();\n    const address = await signer.getAddress();\n    setAddress(address); // Generate Zora provider\n\n    const zora = new _zoralabs_zdk__WEBPACK_IMPORTED_MODULE_0__.Zora(signer, 4);\n    setZora(zora);\n  };\n  /**\n   * Converts File to an ArrayBuffer for hashing preperation\n   * @param {File} file uploaded file\n   * @returns {ArrayBuffer} from file\n   */\n\n\n  const getFileBuffer = async file => {\n    return new Promise((res, rej) => {\n      // create file reader\n      let reader = new FileReader(); // register event listeners\n\n      reader.addEventListener(\"loadend\", e => res(e.target.result));\n      reader.addEventListener(\"error\", rej); // read file\n\n      reader.readAsArrayBuffer(file);\n    });\n  };\n  /**\n   * Mints media \n   * @param {File} file media to mint\n   * @param {String} name of media\n   * @param {String} description of media\n   * @param {Number} fee to share with previous owner\n   */\n\n\n  const mintMedia = async (file, name, description, fee) => {\n    // Generate metadataJSON\n    const metadataJSON = (0,_zoralabs_zdk__WEBPACK_IMPORTED_MODULE_0__.generateMetadata)(\"zora-20210101\", {\n      description: description ? description : \"\",\n      mimeType: file.type,\n      name: name,\n      version: \"zora-20210101\"\n    }); // Generate media buffer\n\n    const buffer = await getFileBuffer(file); // Generate content hashes\n\n    const contentHash = (0,_zoralabs_zdk__WEBPACK_IMPORTED_MODULE_0__.sha256FromBuffer)(Buffer.from(buffer));\n    const metadataHash = (0,_zoralabs_zdk__WEBPACK_IMPORTED_MODULE_0__.sha256FromBuffer)(Buffer.from(metadataJSON)); // Upload files to fleek\n\n    let formData = new FormData();\n    formData.append(\"upload\", file);\n    formData.append(\"name\", name);\n    formData.append(\"metadata\", metadataJSON); // Post upload endpoint\n\n    console.log('UPLOAD FILE...');\n    const upload = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"/api/upload\", formData, {\n      headers: {\n        \"Content-Type\": \"multipart/form-data\"\n      }\n    });\n    console.log('UPLOAD FILE completed........'); // Collect fileUrl and metadataUrl from Fleek\n\n    const {\n      fileUrl,\n      metadataUrl\n    } = upload.data;\n    console.log('web3.js UPLOAD FILE completed........', fileUrl, metadataUrl); // Construct mediaData object\n\n    const mediaData = (0,_zoralabs_zdk__WEBPACK_IMPORTED_MODULE_0__.constructMediaData)(fileUrl, metadataUrl, contentHash, metadataHash);\n    const bidShares = (0,_zoralabs_zdk__WEBPACK_IMPORTED_MODULE_0__.constructBidShares)(0, // Creator share\n    100 - parseFloat(fee), // Owner share\n    parseFloat(fee) // Previous owner share\n    ); // Make transaction\n\n    console.log('CALL ZORA MINT...');\n    const tx = await zora.mint(mediaData, bidShares);\n    await tx.wait(1); // Wait 1 confirmation and throw user to next screen\n  }; // On load events\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(setupWeb3Modal, []);\n  return {\n    address,\n    authenticate,\n    mintMedia\n  };\n} // Create unstate-next container\n\n\nconst web3 = (0,unstated_next__WEBPACK_IMPORTED_MODULE_5__.createContainer)(useWeb3);\n/* harmony default export */ __webpack_exports__[\"default\"] = (web3);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9jb250YWluZXJzL3dlYjMuanM/NTU4OCJdLCJuYW1lcyI6WyJwcm92aWRlck9wdGlvbnMiLCJ3YWxsZXRjb25uZWN0IiwicGFja2FnZSIsIldhbGxldENvbm5lY3RQcm92aWRlciIsIm9wdGlvbnMiLCJpbmZ1cmFJZCIsInByb2Nlc3MiLCJlbnYiLCJJTkZVUkFfSUQiLCJ1c2VXZWIzIiwiem9yYSIsInNldFpvcmEiLCJ1c2VTdGF0ZSIsIm1vZGFsIiwic2V0TW9kYWwiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsInByb3ZpZGVyIiwic2V0UHJvdmlkZXIiLCJzZXR1cFdlYjNNb2RhbCIsIndlYjNNb2RhbCIsIldlYjNNb2RhbCIsIm5ldHdvcmsiLCJjYWNoZVByb3ZpZGVyIiwiYXV0aGVudGljYXRlIiwid2ViM1Byb3ZpZGVyIiwiY29ubmVjdCIsImVuYWJsZSIsInByb3ZpZGVycyIsInNpZ25lciIsImdldFNpZ25lciIsImdldEFkZHJlc3MiLCJab3JhIiwiZ2V0RmlsZUJ1ZmZlciIsImZpbGUiLCJQcm9taXNlIiwicmVzIiwicmVqIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwicmVzdWx0IiwicmVhZEFzQXJyYXlCdWZmZXIiLCJtaW50TWVkaWEiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJmZWUiLCJtZXRhZGF0YUpTT04iLCJnZW5lcmF0ZU1ldGFkYXRhIiwibWltZVR5cGUiLCJ0eXBlIiwidmVyc2lvbiIsImJ1ZmZlciIsImNvbnRlbnRIYXNoIiwic2hhMjU2RnJvbUJ1ZmZlciIsIkJ1ZmZlciIsImZyb20iLCJtZXRhZGF0YUhhc2giLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsInVwbG9hZCIsImF4aW9zIiwiaGVhZGVycyIsImZpbGVVcmwiLCJtZXRhZGF0YVVybCIsImRhdGEiLCJtZWRpYURhdGEiLCJjb25zdHJ1Y3RNZWRpYURhdGEiLCJiaWRTaGFyZXMiLCJjb25zdHJ1Y3RCaWRTaGFyZXMiLCJwYXJzZUZsb2F0IiwidHgiLCJtaW50Iiwid2FpdCIsInVzZUVmZmVjdCIsIndlYjMiLCJjcmVhdGVDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztDQU13Qjs7Q0FDSzs7Q0FDUTs7Q0FDQzs7QUFDcEM7Q0FDNkM7O0NBQ0k7O0NBQ2lCO0FBRWxFOztBQUNBLE1BQU1BLGVBQWUsR0FBRztBQUN0QkMsZUFBYSxFQUFFO0FBQ2JDLFdBQU8sRUFBRUMscUVBREk7QUFFYkMsV0FBTyxFQUFFO0FBQ1A7QUFDQUMsY0FBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFGZjtBQUZJO0FBRE8sQ0FBeEI7O0FBVUEsU0FBU0MsT0FBVCxHQUFtQjtBQUNqQixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsSUFBRCxDQUFoQyxDQURpQixDQUN1Qjs7QUFDeEMsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CRiwrQ0FBUSxDQUFDLElBQUQsQ0FBbEMsQ0FGaUIsQ0FFeUI7O0FBQzFDLFFBQU07QUFBQSxPQUFDRyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkosK0NBQVEsQ0FBQyxJQUFELENBQXRDLENBSGlCLENBRzZCOztBQUM5QyxRQUFNO0FBQUEsT0FBQ0ssUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBeUJOLCtDQUFRLENBQUMsSUFBRCxDQUF2QztBQUVBO0FBQ0o7QUFDQTs7QUFDSSxRQUFNTyxjQUFjLEdBQUcsTUFBTTtBQUMzQjtBQUNBLFVBQU1DLFNBQVMsR0FBRyxJQUFJQyxrREFBSixDQUFjO0FBQzlCO0FBQ0FDLGFBQU8sRUFBRSxTQUZxQjtBQUc5QkMsbUJBQWEsRUFBRSxJQUhlO0FBSTlCdkIscUJBQWUsRUFBRUE7QUFKYSxLQUFkLENBQWxCLENBRjJCLENBUzNCOztBQUNBYyxZQUFRLENBQUNNLFNBQUQsQ0FBUjtB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K0J6RDs7QUFDQSxVQUFNO0FBQUVJLGFBQUY7QUFBV0M7QUFBWCxRQUEyQkosTUFBTSxDQUFDSyxJQUF4QztBQUNBUCxXQUFPLENBQUNDLEdBQVIsQ0FBWSx1Q0FBWixFQUFxREksT0FBckQsRUFBOERDLFdBQTlELEVBakN5RCxDQW1DekQ7O0FBQ0EsVUFBTUUsU0FBUyxHQUFHQyxpRUFBa0IsQ0FDbENKLE9BRGtDLEVBRWxDQyxXQUZrQyxFQUdsQ2QsV0FIa0MsRUFJbENJLFlBSmtDLENBQXBDO0FBT0EsVUFBTWMsU0FBUyxHQUFHQyxpRUFBa0IsQ0FDbEMsQ0FEa0MsRUFDL0I7QUFDSCxVQUFNQyxVQUFVLENBQUMzQixHQUFELENBRmtCLEVBRVg7QUFDdkIyQixjQUFVLENBQUMzQixHQUFELENBSHdCLENBR2xCO0FBSGtCLEtBQXBDLENBM0N5RCxDQWlEekQ7O0FBQ0FlLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0EsVUFBTVksRUFBRSxHQUFHLE1BQU1sRSxJQUFJLENBQUNtRSxJQUFMLENBQVVOLFNBQVYsRUFBcUJFLFNBQXJCLENBQWpCO0FBQ0EsVUFBTUcsRUFBRSxDQUFDRSxJQUFILENBQVEsQ0FBUixDQUFOLENBcER5RCxDQW9EdkM7QUFDbkIsR0FyREEsQ0ExRWdCLENBa0lqQjs7O0FBQ0FDLGtEQUFTLENBQUM1RCxjQUFELEVBQWlCLEVBQWpCLENBQVQ7QUFFQSxTQUFPO0FBQ0xKLFdBREs7QUFFTFMsZ0JBRks7QUFHTHFCO0FBSEssR0FBUDtBQU1ELEMsQ0FFRDs7O0FBQ0EsTUFBTW1DLElBQUksR0FBR0MsOERBQWUsQ0FBQ3hFLE9BQUQsQ0FBNUI7QUFDQSwrREFBZXVFLElBQWYiLCJmaWxlIjoiLi9jb250YWluZXJzL3dlYjMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBab3JhLFxuICBjb25zdHJ1Y3RNZWRpYURhdGEsXG4gIHNoYTI1NkZyb21CdWZmZXIsXG4gIGdlbmVyYXRlTWV0YWRhdGEsXG4gIGNvbnN0cnVjdEJpZFNoYXJlcyxcbn0gZnJvbSBcIkB6b3JhbGFicy96ZGtcIjsgLy8gWm9yYSBwcm92aWRlclxuICBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7IC8vIGF4aW9zIHJlcXVlc3RzXG4gIGltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiOyAvLyBXZWIzTW9kYWxcbiAgaW1wb3J0IHsgcHJvdmlkZXJzIH0gZnJvbSBcImV0aGVyc1wiOyAvLyBFdGhlcnNcbiAgaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuICBpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7IC8vIFN0YXRlIG1hbmFnZW1lbnRcbiAgaW1wb3J0IHsgY3JlYXRlQ29udGFpbmVyIH0gZnJvbSBcInVuc3RhdGVkLW5leHRcIjsgLy8gVW5zdGF0ZWQtbmV4dCBjb250YWluZXJpemF0aW9uXG4gIGltcG9ydCBXYWxsZXRDb25uZWN0UHJvdmlkZXIgZnJvbSBcIkB3YWxsZXRjb25uZWN0L3dlYjMtcHJvdmlkZXJcIjsgLy8gV2FsbGV0Q29ubmVjdFByb3ZpZGVyIChXZWIzTW9kYWwpXG4gIFxuICAvLyBXZWIzTW9kYWwgcHJvdmlkZXIgb3B0aW9ucyAtLXNldCBmb3IgUklOS0VCWVxuICBjb25zdCBwcm92aWRlck9wdGlvbnMgPSB7XG4gICAgd2FsbGV0Y29ubmVjdDoge1xuICAgICAgcGFja2FnZTogV2FsbGV0Q29ubmVjdFByb3ZpZGVyLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICAvLyBJbmplY3QgSW5mdXJhXG4gICAgICAgIGluZnVyYUlkOiBwcm9jZXNzLmVudi5JTkZVUkFfSUQsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgZnVuY3Rpb24gdXNlV2ViMygpIHtcbiAgICBjb25zdCBbem9yYSwgc2V0Wm9yYV0gPSB1c2VTdGF0ZShudWxsKTsgLy9ab3JhIHByb3ZpZGVyXG4gICAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShudWxsKTsgLy9XZWIzTW9kYWxcbiAgICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZShudWxsKTsgLy9FVEggYWRkcmVzc1xuICAgIGNvbnN0IFtwcm92aWRlciwgc2V0UHJvdmlkZXJdPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIC8qKlxuICAgICAqIFNldHVwIFdlYjNNb2RhbCBvbiBwYWdlIGxvYWQgKHJlcXVpcmVzIHdpbmRvdylcbiAgICAgKi9cbiAgICBjb25zdCBzZXR1cFdlYjNNb2RhbCA9ICgpID0+IHtcbiAgICAgIC8vIENyZWFzdGUgbmV3IHdlYjNNb2RhbFxuICAgICAgY29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCh7XG4gICAgICAgIC8vbmV0d29yazogXCJtYWlubmV0XCIsXG4gICAgICAgIG5ldHdvcms6IFwicmlua2VieVwiLFxuICAgICAgICBjYWNoZVByb3ZpZGVyOiB0cnVlLFxuICAgICAgICBwcm92aWRlck9wdGlvbnM6IHByb3ZpZGVyT3B0aW9ucyxcbiAgICAgIH0pO1xuICBcbiAgICAgIC8vIFNldCB3ZWIzTW9kYWxcbiAgICAgIHNldE1vZGFsKHdlYjNNb2RhbCk7XG4gICAgfTtcbiAgXG5cblxuICAgIC8qKlxuICAgICAqIEF1dGhlbnRpY2F0ZSBhbmQgc3RvcmUgbmVjZXNzYXJ5IGl0ZW1zIGluIGdsb2JhbCBzdGF0ZVxuICAgICAqL1xuICAgIGNvbnN0IGF1dGhlbnRpY2F0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIC8vIEluaXRpYXRlIHdlYjNNb2RhbFxuICAgICAgY29uc3Qgd2ViM1Byb3ZpZGVyID0gYXdhaXQgbW9kYWwuY29ubmVjdCgpO1xuICAgICAgYXdhaXQgd2ViM1Byb3ZpZGVyLmVuYWJsZSgpO1xuICBcbiAgICAgIC8vIEdlbmVyYXRlIGV0aGVycyBwcm92aWRlclxuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgcHJvdmlkZXJzLldlYjNQcm92aWRlcih3ZWIzUHJvdmlkZXIpO1xuICAgICAgc2V0UHJvdmlkZXIocHJvdmlkZXIpO1xuXG4gICAgICAvLyBDb2xsZWN0IGFkZHJlc3NcbiAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IHNpZ25lci5nZXRBZGRyZXNzKCk7XG4gICAgICBzZXRBZGRyZXNzKGFkZHJlc3MpO1xuXG4gICAgICAvLyBHZW5lcmF0ZSBab3JhIHByb3ZpZGVyXG4gICAgICBjb25zdCB6b3JhID0gbmV3IFpvcmEoc2lnbmVyLCA0KTtcbiAgICAgIHNldFpvcmEoem9yYSk7XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgRmlsZSB0byBhbiBBcnJheUJ1ZmZlciBmb3IgaGFzaGluZyBwcmVwZXJhdGlvblxuICAgICAqIEBwYXJhbSB7RmlsZX0gZmlsZSB1cGxvYWRlZCBmaWxlXG4gICAgICogQHJldHVybnMge0FycmF5QnVmZmVyfSBmcm9tIGZpbGVcbiAgICAgKi9cbiAgICAgY29uc3QgZ2V0RmlsZUJ1ZmZlciA9IGFzeW5jIChmaWxlKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgIC8vIGNyZWF0ZSBmaWxlIHJlYWRlclxuICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgXG4gICAgICAgIC8vIHJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwgKGUpID0+IHJlcyhlLnRhcmdldC5yZXN1bHQpKTtcbiAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCByZWopO1xuICBcbiAgICAgICAgLy8gcmVhZCBmaWxlXG4gICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIE1pbnRzIG1lZGlhIFxuICAgICAqIEBwYXJhbSB7RmlsZX0gZmlsZSBtZWRpYSB0byBtaW50XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgbWVkaWFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzY3JpcHRpb24gb2YgbWVkaWFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZmVlIHRvIHNoYXJlIHdpdGggcHJldmlvdXMgb3duZXJcbiAgICAgKi9cbiAgICAgY29uc3QgbWludE1lZGlhID0gYXN5bmMgKGZpbGUsIG5hbWUsIGRlc2NyaXB0aW9uLCBmZWUpID0+IHtcbiAgICAgIC8vIEdlbmVyYXRlIG1ldGFkYXRhSlNPTlxuICAgICAgY29uc3QgbWV0YWRhdGFKU09OID0gZ2VuZXJhdGVNZXRhZGF0YShcInpvcmEtMjAyMTAxMDFcIiwge1xuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gPyBkZXNjcmlwdGlvbiA6IFwiXCIsXG4gICAgICAgIG1pbWVUeXBlOiBmaWxlLnR5cGUsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHZlcnNpb246IFwiem9yYS0yMDIxMDEwMVwiLFxuICAgICAgfSk7XG4gIFxuICAgICAgLy8gR2VuZXJhdGUgbWVkaWEgYnVmZmVyXG4gICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBnZXRGaWxlQnVmZmVyKGZpbGUpO1xuICBcbiAgICAgIC8vIEdlbmVyYXRlIGNvbnRlbnQgaGFzaGVzXG4gICAgICBjb25zdCBjb250ZW50SGFzaCA9IHNoYTI1NkZyb21CdWZmZXIoQnVmZmVyLmZyb20oYnVmZmVyKSk7XG4gICAgICBjb25zdCBtZXRhZGF0YUhhc2ggPSBzaGEyNTZGcm9tQnVmZmVyKEJ1ZmZlci5mcm9tKG1ldGFkYXRhSlNPTikpO1xuICBcbiAgICAgIC8vIFVwbG9hZCBmaWxlcyB0byBmbGVla1xuICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWRcIiwgZmlsZSk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJuYW1lXCIsIG5hbWUpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwibWV0YWRhdGFcIiwgbWV0YWRhdGFKU09OKTtcbiAgICAgIFxuICAgICAgLy8gUG9zdCB1cGxvYWQgZW5kcG9pbnRcbiAgICAgIGNvbnNvbGUubG9nKCdVUExPQUQgRklMRS4uLicpXG4gICAgICBjb25zdCB1cGxvYWQgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS91cGxvYWRcIiwgZm9ybURhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdVUExPQUQgRklMRSBjb21wbGV0ZWQuLi4uLi4uLicpXG4gICAgICAvLyBDb2xsZWN0IGZpbGVVcmwgYW5kIG1ldGFkYXRhVXJsIGZyb20gRmxlZWtcbiAgICAgIGNvbnN0IHsgZmlsZVVybCwgbWV0YWRhdGFVcmwgfSA9IHVwbG9hZC5kYXRhO1xuICAgICAgY29uc29sZS5sb2coJ3dlYjMuanMgVVBMT0FEIEZJTEUgY29tcGxldGVkLi4uLi4uLi4nLCBmaWxlVXJsLCBtZXRhZGF0YVVybCApXG5cbiAgICAgIC8vIENvbnN0cnVjdCBtZWRpYURhdGEgb2JqZWN0XG4gICAgICBjb25zdCBtZWRpYURhdGEgPSBjb25zdHJ1Y3RNZWRpYURhdGEoXG4gICAgICAgIGZpbGVVcmwsXG4gICAgICAgIG1ldGFkYXRhVXJsLFxuICAgICAgICBjb250ZW50SGFzaCxcbiAgICAgICAgbWV0YWRhdGFIYXNoXG4gICAgICApO1xuXG4gICAgICBjb25zdCBiaWRTaGFyZXMgPSBjb25zdHJ1Y3RCaWRTaGFyZXMoXG4gICAgICAgIDAsIC8vIENyZWF0b3Igc2hhcmVcbiAgICAgICAgMTAwIC0gcGFyc2VGbG9hdChmZWUpLCAvLyBPd25lciBzaGFyZVxuICAgICAgICBwYXJzZUZsb2F0KGZlZSkgLy8gUHJldmlvdXMgb3duZXIgc2hhcmVcbiAgICAgICk7XG5cbiAgICAgIC8vIE1ha2UgdHJhbnNhY3Rpb25cbiAgICAgIGNvbnNvbGUubG9nKCdDQUxMIFpPUkEgTUlOVC4uLicpXG4gICAgICBjb25zdCB0eCA9IGF3YWl0IHpvcmEubWludChtZWRpYURhdGEsIGJpZFNoYXJlcyk7XG4gICAgICBhd2FpdCB0eC53YWl0KDEpOyAvLyBXYWl0IDEgY29uZmlybWF0aW9uIGFuZCB0aHJvdyB1c2VyIHRvIG5leHQgc2NyZWVuXG4gICAgfTtcblxuXG4gICAgLy8gT24gbG9hZCBldmVudHNcbiAgICB1c2VFZmZlY3Qoc2V0dXBXZWIzTW9kYWwsIFtdKTtcbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZHJlc3MsXG4gICAgICBhdXRoZW50aWNhdGUsXG4gICAgICBtaW50TWVkaWFcbiAgICB9O1xuICAgIFxuICB9XG4gIFxuICAvLyBDcmVhdGUgdW5zdGF0ZS1uZXh0IGNvbnRhaW5lclxuICBjb25zdCB3ZWIzID0gY3JlYXRlQ29udGFpbmVyKHVzZVdlYjMpO1xuICBleHBvcnQgZGVmYXVsdCB3ZWIzO1xuICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./containers/web3.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _containers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @containers/index */ \"./containers/index.js\");\n\nvar _jsxFileName = \"/home/brahma/apps/hackmoney/difo/app/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // Global styles\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return (\n    /*#__PURE__*/\n    // Wrap page in global state provider\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_index__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 7\n      }, this), \";\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }, this)\n  );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFpQzs7QUFDakM7QUFFZSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdEQ7QUFBQTtBQUNFO0FBQ0Esa0VBQUMsc0RBQUQ7QUFBQSw4QkFDRSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQU1EIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLnNjc3NcIjsgLy8gR2xvYmFsIHN0eWxlc1xuaW1wb3J0IEdsb2JhbFByb3ZpZGVyIGZyb20gXCJAY29udGFpbmVycy9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICAvLyBXcmFwIHBhZ2UgaW4gZ2xvYmFsIHN0YXRlIHByb3ZpZGVyXG4gICAgPEdsb2JhbFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcbiAgICA8L0dsb2JhbFByb3ZpZGVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (function() {



/***/ }),

/***/ "@walletconnect/web3-provider":
/*!***********************************************!*\
  !*** external "@walletconnect/web3-provider" ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@walletconnect/web3-provider");;

/***/ }),

/***/ "@zoralabs/zdk":
/*!********************************!*\
  !*** external "@zoralabs/zdk" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@zoralabs/zdk");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("ethers");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "unstated-next":
/*!********************************!*\
  !*** external "unstated-next" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("unstated-next");;

/***/ }),

/***/ "web3modal":
/*!****************************!*\
  !*** external "web3modal" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("web3modal");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();