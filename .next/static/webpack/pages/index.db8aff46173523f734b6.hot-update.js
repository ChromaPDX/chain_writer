webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _build_contracts_Factory_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../build/contracts/Factory.json */ \"./build/contracts/Factory.json\");\nvar _build_contracts_Factory_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../build/contracts/Factory.json */ \"./build/contracts/Factory.json\", 1);\n/* harmony import */ var _build_contractAddress_txt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../build/contractAddress.txt */ \"./build/contractAddress.txt\");\n/* harmony import */ var _build_contracts_ERC721Token_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../build/contracts/ERC721Token.json */ \"./build/contracts/ERC721Token.json\");\nvar _build_contracts_ERC721Token_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../build/contracts/ERC721Token.json */ \"./build/contracts/ERC721Token.json\", 1);\n\n\n\nvar _jsxFileName = \"/Users/adam/Code/ascii-demo-master/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n // import ERC721TokenAddress from \"../build/ERC721TokenAddress.txt\";\n\nconsole.log(_build_contracts_Factory_json__WEBPACK_IMPORTED_MODULE_5__.abi, _build_contractAddress_txt__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nvar web3;\n\nvar Index = function Index(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('hello web3'),\n      body = _useState[0],\n      setBody = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    Object(_Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!window.ethereum) {\n                _context.next = 12;\n                break;\n              }\n\n              // Modern DApp browsers\n              web3 = new web3__WEBPACK_IMPORTED_MODULE_4___default.a(window.ethereum);\n              _context.prev = 2;\n              _context.next = 5;\n              return window.ethereum.enable();\n\n            case 5:\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](2);\n              // User denied account access\n              console.log(_context.t0);\n\n            case 10:\n              _context.next = 13;\n              break;\n\n            case 12:\n              if (window.web3) {\n                // Legacy dapp browsers\n                web3 = new web3__WEBPACK_IMPORTED_MODULE_4___default.a(window.web3.currentProvider);\n              } else {\n                // Non-dapp browsers\n                console.log(\"Non-Ethereum browser detected. You should consider trying MetaMask!\");\n              }\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[2, 7]]);\n    }))();\n  }, []);\n\n  var deploy = /*#__PURE__*/function () {\n    var _ref2 = Object(_Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(text) {\n      var factory, tokenAddress, token, x;\n      return _Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              factory = new web3.eth.Contract(_build_contracts_Factory_json__WEBPACK_IMPORTED_MODULE_5__.abi, _build_contractAddress_txt__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n              _context2.next = 3;\n              return factory.methods.deployNewERC721Token(\"Demo ERC721 Token\", \"DEMO721\").send({\n                from: web3.currentProvider.selectedAddress,\n                gasPrice: '1000000000000',\n                gas: 5000000\n              });\n\n            case 3:\n              tokenAddress = _context2.sent;\n              console.log(\"tokenAddress\", tokenAddress);\n              _context2.next = 7;\n              return new web3.eth.Contract(_build_contracts_ERC721Token_json__WEBPACK_IMPORTED_MODULE_7__.abi, tokenAddress.to);\n\n            case 7:\n              token = _context2.sent;\n              _context2.next = 10;\n              return token.methods.awardItem(web3.currentProvider.selectedAddress, text).call();\n\n            case 10:\n              x = _context2.sent;\n              console.log(x);\n\n            case 12:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function deploy(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, __jsx(\"meta\", {\n    httpEquiv: \"x-ua-compatible\",\n    content: \"ie=edge\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1, shrink-to-fit=no\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  })), __jsx(\"main\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"text-2xl\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(\"textarea\", {\n    style: {\n      margin: 'auto',\n      display: 'block'\n    },\n    rows: 10,\n    cols: 50,\n    onChange: function onChange(e) {\n      return setBody(e.target.value);\n    },\n    value: body,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick(e) {\n      return deploy(body);\n    },\n    style: {\n      margin: 'auto',\n      display: 'block'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, \"submit\"))));\n};\n\n_s(Index, \"o8PLKx4jnB6AnxtVT0GMO6RV7K4=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIkZhY3RvcnlKc29uIiwiYWJpIiwiRmFjdG9yeUFkZHJlc3MiLCJ3ZWIzIiwiSW5kZXgiLCJwcm9wcyIsInVzZVN0YXRlIiwiYm9keSIsInNldEJvZHkiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJldGhlcmV1bSIsIldlYjMiLCJlbmFibGUiLCJjdXJyZW50UHJvdmlkZXIiLCJkZXBsb3kiLCJ0ZXh0IiwiZmFjdG9yeSIsImV0aCIsIkNvbnRyYWN0IiwibWV0aG9kcyIsImRlcGxveU5ld0VSQzcyMVRva2VuIiwic2VuZCIsImZyb20iLCJzZWxlY3RlZEFkZHJlc3MiLCJnYXNQcmljZSIsImdhcyIsInRva2VuQWRkcmVzcyIsIkVSQzcyMVRva2VuSnNvbiIsInRvIiwidG9rZW4iLCJhd2FyZEl0ZW0iLCJjYWxsIiwieCIsIm1hcmdpbiIsImRpc3BsYXkiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtDQUVBOztBQUVBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsMERBQVcsQ0FBQ0MsR0FBeEIsRUFBNkJDLGtFQUE3QjtBQUVBLElBQUlDLElBQUo7O0FBR0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFnQjtBQUFBOztBQUFBLGtCQUVKQyxzREFBUSxDQUFDLFlBQUQsQ0FGSjtBQUFBLE1BRXJCQyxJQUZxQjtBQUFBLE1BRWZDLE9BRmU7O0FBSTVCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxtUkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0tDLE1BQU0sQ0FBQ0MsUUFEWjtBQUFBO0FBQUE7QUFBQTs7QUFFRztBQUNBUixrQkFBSSxHQUFHLElBQUlTLDJDQUFKLENBQVNGLE1BQU0sQ0FBQ0MsUUFBaEIs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QTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBU0U7QUFBUSxXQUFPLEVBQUUsaUJBQUM2QixDQUFEO0FBQUEsYUFBT3JCLE1BQU0sQ0FBQ1IsSUFBRCxDQUFiO0FBQUEsS0FBakI7QUFBc0MsU0FBSyxFQUFFO0FBQzNDMkIsWUFBTSxFQUFFLE1BRG1DO0FBRTNDQyxhQUFPLEVBQUU7QUFGa0MsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLENBREYsQ0FSRixDQURGO0FBOEJELENBNUVEOztHQUFNL0IsSzs7S0FBQUEsSztBQThFU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5cbmltcG9ydCBGYWN0b3J5SnNvbiBmcm9tIFwiLi4vYnVpbGQvY29udHJhY3RzL0ZhY3RvcnkuanNvblwiO1xuaW1wb3J0IEZhY3RvcnlBZGRyZXNzIGZyb20gXCIuLi9idWlsZC9jb250cmFjdEFkZHJlc3MudHh0XCI7XG5pbXBvcnQgRVJDNzIxVG9rZW5Kc29uIGZyb20gXCIuLi9idWlsZC9jb250cmFjdHMvRVJDNzIxVG9rZW4uanNvblwiO1xuLy8gaW1wb3J0IEVSQzcyMVRva2VuQWRkcmVzcyBmcm9tIFwiLi4vYnVpbGQvRVJDNzIxVG9rZW5BZGRyZXNzLnR4dFwiO1xuXG5jb25zb2xlLmxvZyhGYWN0b3J5SnNvbi5hYmksIEZhY3RvcnlBZGRyZXNzKVxuXG5sZXQgd2ViMztcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzOiBhbnkpID0+IHtcblxuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSgnaGVsbG8gd2ViMycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgLy8gTW9kZXJuIERBcHAgYnJvd3NlcnNcbiAgICAgICAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIFVzZXIgZGVuaWVkIGFjY291bnQgYWNjZXNzXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh3aW5kb3cud2ViMykge1xuICAgICAgICAvLyBMZWdhY3kgZGFwcCBicm93c2Vyc1xuICAgICAgICB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBOb24tZGFwcCBicm93c2Vyc1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vbi1FdGhlcmV1bSBicm93c2VyIGRldGVjdGVkLiBZb3Ugc2hvdWxkIGNvbnNpZGVyIHRyeWluZyBNZXRhTWFzayFcIik7XG4gICAgICB9XG5cbiAgICB9KSgpO1xuICB9LCBbXSk7XG5cblxuICBjb25zdCBkZXBsb3kgPSBhc3luYyAodGV4dDogc3RyaW5nKSA9PiB7XG5cbiAgICB2YXIgZmFjdG9yeSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChGYWN0b3J5SnNvbi5hYmksIEZhY3RvcnlBZGRyZXNzKTtcblxuICAgIGNvbnN0IHRva2VuQWRkcmVzcyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5kZXBsb3lOZXdFUkM3MjFUb2tlbihcIkRlbW8gRVJDNzIxIFRva2VuXCIsIFwiREVNTzcyMVwiKS5zZW5kKHtcbiAgICAgIGZyb206IHdlYjMuY3VycmVudFByb3ZpZGVyLnNlbGVjdGVkQWRkcmVzcyxcbiAgICAgIGdhc1ByaWNlOiAnMTAwMDAwMDAwMDAwMCcsXG4gICAgICBnYXM6IDUwMDAwMDBcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcInRva2VuQWRkcmVzc1wiLCB0b2tlbkFkZHJlc3MpO1xuXG4gICAgdmFyIHRva2VuID0gYXdhaXQgbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEVSQzcyMVRva2VuSnNvbi5hYmksIHRva2VuQWRkcmVzcy50byk7XG4gICAgY29uc3QgeCA9IGF3YWl0IHRva2VuLm1ldGhvZHMuYXdhcmRJdGVtKHdlYjMuY3VycmVudFByb3ZpZGVyLnNlbGVjdGVkQWRkcmVzcywgdGV4dCkuY2FsbCgpO1xuICAgIGNvbnNvbGUubG9nKHgpXG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJ4LXVhLWNvbXBhdGlibGVcIiBjb250ZW50PVwiaWU9ZWRnZVwiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5cbiAgICAgICAgICA8dGV4dGFyZWEgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICAgIH19IHJvd3M9ezEwfSBjb2xzPXs1MH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Qm9keShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICB2YWx1ZT17Ym9keX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gZGVwbG95KGJvZHkpfSBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICBzdWJtaXRcbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})