webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _build_contracts_Factory_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../build/contracts/Factory.json */ \"./build/contracts/Factory.json\");\nvar _build_contracts_Factory_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../build/contracts/Factory.json */ \"./build/contracts/Factory.json\", 1);\n/* harmony import */ var _build_contractAddress_txt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../build/contractAddress.txt */ \"./build/contractAddress.txt\");\n/* harmony import */ var _build_contracts_ERC721Token_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../build/contracts/ERC721Token.json */ \"./build/contracts/ERC721Token.json\");\nvar _build_contracts_ERC721Token_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../build/contracts/ERC721Token.json */ \"./build/contracts/ERC721Token.json\", 1);\n\n\n\nvar _jsxFileName = \"/Users/adam/Code/ascii-demo-master/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n // import ERC721TokenAddress from \"../build/ERC721TokenAddress.txt\";\n\nconsole.log(_build_contracts_Factory_json__WEBPACK_IMPORTED_MODULE_5__.abi, _build_contractAddress_txt__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nvar web3;\n\nvar Index = function Index(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('hello web3'),\n      body = _useState[0],\n      setBody = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    Object(_Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!window.ethereum) {\n                _context.next = 12;\n                break;\n              }\n\n              // Modern DApp browsers\n              web3 = new web3__WEBPACK_IMPORTED_MODULE_4___default.a(window.ethereum);\n              _context.prev = 2;\n              _context.next = 5;\n              return window.ethereum.enable();\n\n            case 5:\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](2);\n              // User denied account access\n              console.log(_context.t0);\n\n            case 10:\n              _context.next = 13;\n              break;\n\n            case 12:\n              if (window.web3) {\n                // Legacy dapp browsers\n                web3 = new web3__WEBPACK_IMPORTED_MODULE_4___default.a(window.web3.currentProvider);\n              } else {\n                // Non-dapp browsers\n                console.log(\"Non-Ethereum browser detected. You should consider trying MetaMask!\");\n              }\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[2, 7]]);\n    }))();\n  }, []);\n\n  var deploy = /*#__PURE__*/function () {\n    var _ref2 = Object(_Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(text) {\n      var factory, tokenAddress, token, x;\n      return _Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              factory = new web3.eth.Contract(_build_contracts_Factory_json__WEBPACK_IMPORTED_MODULE_5__.abi, _build_contractAddress_txt__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n              _context2.next = 3;\n              return factory.methods.deployNewERC721Token(\"Demo ERC721 Token\", \"DEMO721\").call({\n                from: web3.currentProvider.selectedAddress,\n                gasPrice: '1000000000000',\n                gas: 5000000\n              });\n\n            case 3:\n              tokenAddress = _context2.sent;\n              console.log(\"tokenAddress\", tokenAddress);\n              _context2.next = 7;\n              return new web3.eth.Contract(_build_contracts_ERC721Token_json__WEBPACK_IMPORTED_MODULE_7__.abi, tokenAddress.to);\n\n            case 7:\n              token = _context2.sent;\n              _context2.next = 10;\n              return token.methods.awardItem(web3.currentProvider.selectedAddress, text);\n\n            case 10:\n              x = _context2.sent;\n              console.log(x);\n\n            case 12:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function deploy(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, __jsx(\"meta\", {\n    httpEquiv: \"x-ua-compatible\",\n    content: \"ie=edge\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1, shrink-to-fit=no\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  })), __jsx(\"main\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"text-2xl\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(\"textarea\", {\n    style: {\n      margin: 'auto',\n      display: 'block'\n    },\n    rows: 10,\n    cols: 50,\n    onChange: function onChange(e) {\n      return setBody(e.target.value);\n    },\n    value: body,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick(e) {\n      return deploy(body);\n    },\n    style: {\n      margin: 'auto',\n      display: 'block'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, \"submit\"))));\n};\n\n_s(Index, \"o8PLKx4jnB6AnxtVT0GMO6RV7K4=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIkZhY3RvcnlKc29uIiwiYWJpIiwiRmFjdG9yeUFkZHJlc3MiLCJ3ZWIzIiwiSW5kZXgiLCJwcm9wcyIsInVzZVN0YXRlIiwiYm9keSIsInNldEJvZHkiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJldGhlcmV1bSIsIldlYjMiLCJlbmFibGUiLCJjdXJyZW50UHJvdmlkZXIiLCJkZXBsb3kiLCJ0ZXh0IiwiZmFjdG9yeSIsImV0aCIsIkNvbnRyYWN0IiwibWV0aG9kcyIsImRlcGxveU5ld0VSQzcyMVRva2VuIiwiY2FsbCIsImZyb20iLCJzZWxlY3RlZEFkZHJlc3MiLCJnYXNQcmljZSIsImdhcyIsInRva2VuQWRkcmVzcyIsIkVSQzcyMVRva2VuSnNvbiIsInRvIiwidG9rZW4iLCJhd2FyZEl0ZW0iLCJ4IiwibWFyZ2luIiwiZGlzcGxheSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0NBRUE7O0FBRUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQywwREFBVyxDQUFDQyxHQUF4QixFQUE2QkMsa0VBQTdCO0FBRUEsSUFBSUMsSUFBSjs7QUFHQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQWdCO0FBQUE7O0FBQUEsa0JBRUpDLHNEQUFRLENBQUMsWUFBRCxDQUZKO0FBQUEsTUFFckJDLElBRnFCO0FBQUEsTUFFZkMsT0FGZTs7QUFJNUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLG1SQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDS0MsTUFBTSxDQUFDQyxRQURaO0FBQUE7QUFBQTtBQUFBOztBQUVHO0FBQ0FSLGtCQUFJLEdBQUcsSUFBSVMsMkNBQUosQ0FBU0YsTUFBTSxDQUFDQyxRQUFoQixDQUFQO0FBSEg7QUFBQTtBQUFBLHFCQUtXRCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JFLE1BQWhCLEVBTFg7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU9LO0FBQ0FmLHFCQUFPLENBQUNDLEdBQVI7O0FBUkw7QUFBQTtBQUFBOztBQUFBO0FBV00sa0JBQUlXLE1BQU0sQ0FBQ1AsSUFBWCxFQUFpQjtBQUNwQjtBQUNBQSxvQkFBSSxHQUFHLElBQUlTLDJDQUFKLENBQVNGLE1BQU0sQ0FBQ1AsSUFBUCxDQUFZVyxlQUFyQixDQUFQO0FBQ0QsZUFISSxNQUlBO0FBQ0g7QUFDQWhCLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxxRUFBWjtBQUNEOztBQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEO0FBcUJELEdBdEJRLEVBc0JOLEVBdEJNLENBQVQ7O0FBeUJBLE1BQU1nQixNQUFNO0FBQUEsK1JBQUcsa0JBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVRDLHFCQUZTLEdBRUMsSUFBSWQsSUFBSSxDQUFDZSxHQUFMLENBQVNDLFFBQWIsQ0FBc0JuQiwwREFBVyxDQUFDQyxHQUFsQyxFQUF1Q0Msa0VBQXZDLENBRkQ7QUFBQTtBQUFBLHFCQUljZSxPQUFPLENBQUNHLE9BQVIsQ0FBZ0JDLG9CQUFoQixDQUFxQyxtQkFBckMsRUFBMEQsU0FBMUQsRUFBcUVDLElBQXJFLENBQTBFO0FBQ25HQyxvQkFBSSxFQUFFcEIsSUFBSSxDQUFDVyxlQUFMLENBQXFCVSxlQUR3RTtBQUVuR0Msd0JBQVEsRUFBRSxlQUZ5RjtBQUduR0MsbUJBQUcsRUFBRTtBQUg4RixlQUExRSxDQUpkOztBQUFBO0FBSVBDLDBCQUpPO0FBU2I3QixxQkFBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QjRCLFlBQTVCO0FBVGE7QUFBQSxxQkFXSyxJQUFJeEIsSUFBSSxDQUFDZSxHQUFMLENBQVNDLFFBQWIsQ0FBc0JTLDhEQUFlLENBQUMzQixHQUF0QyxFQUEyQzBCLFlBQVksQ0FBQ0UsRUFBeEQsQ0FYTDs7QUFBQTtBQVdUQyxtQkFYUztBQUFBO0FBQUEscUJBWUdBLEtBQUssQ0FBQ1YsT0FBTixDQUFjVyxTQUFkLENBQXdCNUIsSUFBSSxDQUFDVyxlQUFMLENBQXFCVSxlQUE3QyxFQUE4RFIsSUFBOUQsQ0FaSDs7QUFBQTtBQVlQZ0IsZUFaTztBQWFibEMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZaUMsQ0FBWjs7QUFiYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFOakIsTUFBTTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQWlCQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxpQkFBaEI7QUFBa0MsV0FBTyxFQUFDLFNBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLFVBRFA7QUFFRSxXQUFPLEVBQUMsdURBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBVSxTQUFLLEVBQUU7QUFDZmtCLFlBQU0sRUFBRSxNQURPO0FBRWZDLGFBQU8sRUFBRTtBQUZNLEtBQWpCO0FBR0csUUFBSSxFQUFFLEVBSFQ7QUFHYSxRQUFJLEVBQUUsRUFIbkI7QUFJRSxZQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxhQUFPM0IsT0FBTyxDQUFDMkIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBLEtBSlo7QUFLRSxTQUFLLEVBQUU5QixJQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVNFO0FBQVEsV0FBTyxFQUFFLGlCQUFDNEIsQ0FBRDtBQUFBLGFBQU9wQixNQUFNLENBQUNSLElBQUQsQ0FBYjtBQUFBLEtBQWpCO0FBQXNDLFNBQUssRUFBRTtBQUMzQzBCLFlBQU0sRUFBRSxNQURtQztBQUUzQ0MsYUFBTyxFQUFFO0FBRmtDLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixDQURGLENBUkYsQ0FERjtBQThCRCxDQTVFRDs7R0FBTTlCLEs7O0tBQUFBLEs7QUE4RVNBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuXG5pbXBvcnQgRmFjdG9yeUpzb24gZnJvbSBcIi4uL2J1aWxkL2NvbnRyYWN0cy9GYWN0b3J5Lmpzb25cIjtcbmltcG9ydCBGYWN0b3J5QWRkcmVzcyBmcm9tIFwiLi4vYnVpbGQvY29udHJhY3RBZGRyZXNzLnR4dFwiO1xuaW1wb3J0IEVSQzcyMVRva2VuSnNvbiBmcm9tIFwiLi4vYnVpbGQvY29udHJhY3RzL0VSQzcyMVRva2VuLmpzb25cIjtcbi8vIGltcG9ydCBFUkM3MjFUb2tlbkFkZHJlc3MgZnJvbSBcIi4uL2J1aWxkL0VSQzcyMVRva2VuQWRkcmVzcy50eHRcIjtcblxuY29uc29sZS5sb2coRmFjdG9yeUpzb24uYWJpLCBGYWN0b3J5QWRkcmVzcylcblxubGV0IHdlYjM7XG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueVxuXG5jb25zdCBJbmRleCA9IChwcm9wczogYW55KSA9PiB7XG5cbiAgY29uc3QgW2JvZHksIHNldEJvZHldID0gdXNlU3RhdGUoJ2hlbGxvIHdlYjMnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICAgIC8vIE1vZGVybiBEQXBwIGJyb3dzZXJzXG4gICAgICAgIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyBVc2VyIGRlbmllZCBhY2NvdW50IGFjY2Vzc1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAod2luZG93LndlYjMpIHtcbiAgICAgICAgLy8gTGVnYWN5IGRhcHAgYnJvd3NlcnNcbiAgICAgICAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gTm9uLWRhcHAgYnJvd3NlcnNcbiAgICAgICAgY29uc29sZS5sb2coXCJOb24tRXRoZXJldW0gYnJvd3NlciBkZXRlY3RlZC4gWW91IHNob3VsZCBjb25zaWRlciB0cnlpbmcgTWV0YU1hc2shXCIpO1xuICAgICAgfVxuXG4gICAgfSkoKTtcbiAgfSwgW10pO1xuXG5cbiAgY29uc3QgZGVwbG95ID0gYXN5bmMgKHRleHQ6IHN0cmluZykgPT4ge1xuXG4gICAgdmFyIGZhY3RvcnkgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoRmFjdG9yeUpzb24uYWJpLCBGYWN0b3J5QWRkcmVzcyk7XG5cbiAgICBjb25zdCB0b2tlbkFkZHJlc3MgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZGVwbG95TmV3RVJDNzIxVG9rZW4oXCJEZW1vIEVSQzcyMSBUb2tlblwiLCBcIkRFTU83MjFcIikuY2FsbCh7XG4gICAgICBmcm9tOiB3ZWIzLmN1cnJlbnRQcm92aWRlci5zZWxlY3RlZEFkZHJlc3MsXG4gICAgICBnYXNQcmljZTogJzEwMDAwMDAwMDAwMDAnLFxuICAgICAgZ2FzOiA1MDAwMDAwXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJ0b2tlbkFkZHJlc3NcIiwgdG9rZW5BZGRyZXNzKTtcblxuICAgIHZhciB0b2tlbiA9IGF3YWl0IG5ldyB3ZWIzLmV0aC5Db250cmFjdChFUkM3MjFUb2tlbkpzb24uYWJpLCB0b2tlbkFkZHJlc3MudG8pO1xuICAgIGNvbnN0IHggPSBhd2FpdCB0b2tlbi5tZXRob2RzLmF3YXJkSXRlbSh3ZWIzLmN1cnJlbnRQcm92aWRlci5zZWxlY3RlZEFkZHJlc3MsIHRleHQpO1xuICAgIGNvbnNvbGUubG9nKHgpXG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJ4LXVhLWNvbXBhdGlibGVcIiBjb250ZW50PVwiaWU9ZWRnZVwiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5cbiAgICAgICAgICA8dGV4dGFyZWEgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICAgIH19IHJvd3M9ezEwfSBjb2xzPXs1MH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Qm9keShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICB2YWx1ZT17Ym9keX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gZGVwbG95KGJvZHkpfSBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICBzdWJtaXRcbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})