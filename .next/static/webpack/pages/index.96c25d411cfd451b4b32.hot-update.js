webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/adam/Code/ascii-demo-master/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\nvar web3;\n\nvar Index = function Index(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('hello web3'),\n      body = _useState[0],\n      setBody = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    Object(_Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _Users_adam_Code_ascii_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!window.ethereum) {\n                _context.next = 12;\n                break;\n              }\n\n              // Modern DApp browsers\n              web3 = new web3__WEBPACK_IMPORTED_MODULE_4___default.a(window.ethereum);\n              _context.prev = 2;\n              _context.next = 5;\n              return window.ethereum.enable();\n\n            case 5:\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](2);\n              // User denied account access\n              console.log(_context.t0);\n\n            case 10:\n              _context.next = 13;\n              break;\n\n            case 12:\n              if (window.web3) {\n                // Legacy dapp browsers\n                web3 = new web3__WEBPACK_IMPORTED_MODULE_4___default.a(window.web3.currentProvider);\n              } else {\n                // Non-dapp browsers\n                console.log(\"Non-Ethereum browser detected. You should consider trying MetaMask!\");\n              }\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[2, 7]]);\n    }))();\n  }, []);\n\n  var deploy = function deploy(text) {\n    // console.log(solc)\n    // var input = {\n    //   language: 'Solidity',\n    //   sources: {\n    //     'test.sol': '////hello world\\ncontract x { function f() public { } }',\n    //     // 'foo.sol': text,\n    //     // 'IAsciiArt.sol': iascii,\n    //   },\n    // };\n    // let jsonContractSource = JSON.stringify({\n    //   language: 'Solidity',\n    //   sources: {\n    //     'Task': {\n    //       content: 'contract x { function f() public { } }',\n    //     },\n    //   },\n    //   settings: {\n    //     outputSelection: {\n    //       '*': {\n    //         '*': ['abi',\"evm.bytecode\"]\n    //       },\n    //     },\n    //   },\n    // });\n    // let result = solc.compile(input);\n    // console.log(result)\n    // const ntrfc = JSON.parse(result.contracts.x.interface);\n    // console.log(ntrfc);\n    var factory = new web3.eth.Contract([{\n      \"anonymous\": false,\n      \"inputs\": [{\n        \"indexed\": false,\n        \"internalType\": \"address\",\n        \"name\": \"tokenAddress\",\n        \"type\": \"address\"\n      }],\n      \"name\": \"ERC721TokenCreated\",\n      \"type\": \"event\"\n    }, {\n      \"inputs\": [{\n        \"internalType\": \"string\",\n        \"name\": \"name\",\n        \"type\": \"string\"\n      }, {\n        \"internalType\": \"string\",\n        \"name\": \"symbol\",\n        \"type\": \"string\"\n      }],\n      \"name\": \"deployNewERC721Token\",\n      \"outputs\": [{\n        \"internalType\": \"address\",\n        \"name\": \"\",\n        \"type\": \"address\"\n      }],\n      \"stateMutability\": \"nonpayable\",\n      \"type\": \"function\"\n    }], \"0xf7fb9B9D6136D8AA533510fCEa5499ddF238bC70\");\n    console.log(factory.methods.deployNewERC721Token()); // factory.methods.deployNewERC721Token().send();\n    // myContract.deploy({\n    //   data: result.contracts.x.bytecode,\n    //   arguments: []\n    // })\n    //   .send({\n    //     from: web3.currentProvider.selectedAddress,\n    //     gas: 1000000,\n    //     gasPrice: '20000000000'\n    //   }, (error, transactionHash) => {\n    //     console.log(\"done?\", error, transactionHash);\n    //   })\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }\n  }, __jsx(\"meta\", {\n    httpEquiv: \"x-ua-compatible\",\n    content: \"ie=edge\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1, shrink-to-fit=no\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 9\n    }\n  })), __jsx(\"main\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"text-2xl\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 9\n    }\n  }, __jsx(\"textarea\", {\n    style: {\n      margin: 'auto',\n      display: 'block'\n    },\n    rows: 10,\n    cols: 50,\n    onChange: function onChange(e) {\n      return setBody(e.target.value);\n    },\n    value: body,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick(e) {\n      return deploy(body);\n    },\n    style: {\n      margin: 'auto',\n      display: 'block'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 11\n    }\n  }, \"submit\"))));\n};\n\n_s(Index, \"o8PLKx4jnB6AnxtVT0GMO6RV7K4=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsid2ViMyIsIkluZGV4IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImJvZHkiLCJzZXRCb2R5IiwidXNlRWZmZWN0Iiwid2luZG93IiwiZXRoZXJldW0iLCJXZWIzIiwiZW5hYmxlIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRQcm92aWRlciIsImRlcGxveSIsInRleHQiLCJmYWN0b3J5IiwiZXRoIiwiQ29udHJhY3QiLCJtZXRob2RzIiwiZGVwbG95TmV3RVJDNzIxVG9rZW4iLCJtYXJnaW4iLCJkaXNwbGF5IiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxJQUFKOztBQUdBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBZ0I7QUFBQTs7QUFBQSxrQkFFSkMsc0RBQVEsQ0FBQyxZQUFELENBRko7QUFBQSxNQUVyQkMsSUFGcUI7QUFBQSxNQUVmQyxPQUZlOztBQUk1QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsbVJBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNLQyxNQUFNLENBQUNDLFFBRFo7QUFBQTtBQUFBO0FBQUE7O0FBRUc7QUFDQVIsa0JBQUksR0FBRyxJQUFJUywyQ0FBSixDQUFTRixNQUFNLENBQUNDLFFBQWhCLENBQVA7QUFISDtBQUFBO0FBQUEscUJBS1dELE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkUsTUFBaEIsRUFMWDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBT0s7QUFDQUMscUJBQU8sQ0FBQ0MsR0FBUjs7QUFSTDtBQUFBO0FBQUE7O0FBQUE7QUFXTSxrQkFBSUwsTUFBTSxDQUFDUCxJQUFYLEVBQWlCO0FBQ3BCO0FBQ0FBLG9CQUFJLEdBQUcsSUFBSVMsMkNBQUosQ0FBU0YsTUFBTSxDQUFDUCxJQUFQLENB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QUFBQSxjQVRGLENBREYsQ0FSRixDQURGO0FBOEJELENBaktEOztHQUFNckIsSzs7S0FBQUEsSztBQW1LU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5cbmxldCB3ZWIzO1xuZGVjbGFyZSB2YXIgd2luZG93OiBhbnlcblxuY29uc3QgSW5kZXggPSAocHJvcHM6IGFueSkgPT4ge1xuXG4gIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKCdoZWxsbyB3ZWIzJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgICAvLyBNb2Rlcm4gREFwcCBicm93c2Vyc1xuICAgICAgICB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gVXNlciBkZW5pZWQgYWNjb3VudCBhY2Nlc3NcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHdpbmRvdy53ZWIzKSB7XG4gICAgICAgIC8vIExlZ2FjeSBkYXBwIGJyb3dzZXJzXG4gICAgICAgIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIE5vbi1kYXBwIGJyb3dzZXJzXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm9uLUV0aGVyZXVtIGJyb3dzZXIgZGV0ZWN0ZWQuIFlvdSBzaG91bGQgY29uc2lkZXIgdHJ5aW5nIE1ldGFNYXNrIVwiKTtcbiAgICAgIH1cbiAgICAgIC8vIHdpbmRvdy5Ccm93c2VyU29sYy5nZXRWZXJzaW9ucyhmdW5jdGlvbiAoc29sanNvblNvdXJjZXMsIHNvbGpzb25SZWxlYXNlcykge1xuICAgICAgLy8gICAvLyBjb25zb2xlLmxvZyhzb2xqc29uUmVsZWFzZXNbJzAuNi4wJ10gKVxuXG4gICAgICAvLyAgIHdpbmRvdy5Ccm93c2VyU29sYy5sb2FkVmVyc2lvbihzb2xqc29uUmVsZWFzZXNbJzAuNC42J10sIGZ1bmN0aW9uIChjKSB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coJ1NvbGMgbG9hZGVkIScpXG4gICAgICAvLyAgICAgc29sYyA9IGM7XG4gICAgICAvLyAgIH0pXG5cbiAgICAgIC8vIH0pXG5cbiAgICB9KSgpO1xuICB9LCBbXSk7XG5cblxuXG4gIGNvbnN0IGRlcGxveSA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcblxuICAgIC8vIGNvbnNvbGUubG9nKHNvbGMpXG5cbiAgICAvLyB2YXIgaW5wdXQgPSB7XG4gICAgLy8gICBsYW5ndWFnZTogJ1NvbGlkaXR5JyxcbiAgICAvLyAgIHNvdXJjZXM6IHtcbiAgICAvLyAgICAgJ3Rlc3Quc29sJzogJy8vLy9oZWxsbyB3b3JsZFxcbmNvbnRyYWN0IHggeyBmdW5jdGlvbiBmKCkgcHVibGljIHsgfSB9JyxcbiAgICAvLyAgICAgLy8gJ2Zvby5zb2wnOiB0ZXh0LFxuICAgIC8vICAgICAvLyAnSUFzY2lpQXJ0LnNvbCc6IGlhc2NpaSxcbiAgICAvLyAgIH0sXG4gICAgLy8gfTtcblxuICAgIC8vIGxldCBqc29uQ29udHJhY3RTb3VyY2UgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgLy8gICBsYW5ndWFnZTogJ1NvbGlkaXR5JyxcbiAgICAvLyAgIHNvdXJjZXM6IHtcbiAgICAvLyAgICAgJ1Rhc2snOiB7XG4gICAgLy8gICAgICAgY29udGVudDogJ2NvbnRyYWN0IHggeyBmdW5jdGlvbiBmKCkgcHVibGljIHsgfSB9JyxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgIH0sXG4gICAgLy8gICBzZXR0aW5nczoge1xuICAgIC8vICAgICBvdXRwdXRTZWxlY3Rpb246IHtcbiAgICAvLyAgICAgICAnKic6IHtcbiAgICAvLyAgICAgICAgICcqJzogWydhYmknLFwiZXZtLmJ5dGVjb2RlXCJdXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgIH0sXG4gICAgLy8gfSk7XG5cblxuICAgIC8vIGxldCByZXN1bHQgPSBzb2xjLmNvbXBpbGUoaW5wdXQpO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdClcblxuICAgIC8vIGNvbnN0IG50cmZjID0gSlNPTi5wYXJzZShyZXN1bHQuY29udHJhY3RzLnguaW50ZXJmYWNlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhudHJmYyk7XG4gICAgdmFyIGZhY3RvcnkgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoW1xuICAgICAge1xuICAgICAgICBcImFub255bW91c1wiOiBmYWxzZSxcbiAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW5kZXhlZFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwidG9rZW5BZGRyZXNzXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwibmFtZVwiOiBcIkVSQzcyMVRva2VuQ3JlYXRlZFwiLFxuICAgICAgICBcInR5cGVcIjogXCJldmVudFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwic3ltYm9sXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJuYW1lXCI6IFwiZGVwbG95TmV3RVJDNzIxVG9rZW5cIixcbiAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICAgICAgfVxuICAgIF0sIGAweGY3ZmI5QjlENjEzNkQ4QUE1MzM1MTBmQ0VhNTQ5OWRkRjIzOGJDNzBgKTtcblxuICAgIGNvbnNvbGUubG9nKGZhY3RvcnkubWV0aG9kcy5kZXBsb3lOZXdFUkM3MjFUb2tlbigpKVxuICAgIC8vIGZhY3RvcnkubWV0aG9kcy5kZXBsb3lOZXdFUkM3MjFUb2tlbigpLnNlbmQoKTtcblxuICAgIC8vIG15Q29udHJhY3QuZGVwbG95KHtcbiAgICAvLyAgIGRhdGE6IHJlc3VsdC5jb250cmFjdHMueC5ieXRlY29kZSxcbiAgICAvLyAgIGFyZ3VtZW50czogW11cbiAgICAvLyB9KVxuICAgIC8vICAgLnNlbmQoe1xuICAgIC8vICAgICBmcm9tOiB3ZWIzLmN1cnJlbnRQcm92aWRlci5zZWxlY3RlZEFkZHJlc3MsXG4gICAgLy8gICAgIGdhczogMTAwMDAwMCxcbiAgICAvLyAgICAgZ2FzUHJpY2U6ICcyMDAwMDAwMDAwMCdcbiAgICAvLyAgIH0sIChlcnJvciwgdHJhbnNhY3Rpb25IYXNoKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZG9uZT9cIiwgZXJyb3IsIHRyYW5zYWN0aW9uSGFzaCk7XG4gICAgLy8gICB9KVxuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwieC11YS1jb21wYXRpYmxlXCIgY29udGVudD1cImllPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsXCI+XG4gICAgICAgICAgPHRleHRhcmVhIHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgICAgICB9fSByb3dzPXsxMH0gY29scz17NTB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJvZHkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e2JvZHl9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGRlcGxveShib2R5KX0gc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICAgIH19PlxuICAgICAgICAgICAgc3VibWl0XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})