module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/adam/Code/ascii-demo-master/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nlet web3;\n\nconst Index = props => {\n  const {\n    0: body,\n    1: setBody\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('hello web3');\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    (async () => {\n      if (window.ethereum) {\n        // Modern DApp browsers\n        web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(window.ethereum);\n\n        try {\n          await window.ethereum.enable();\n        } catch (error) {\n          // User denied account access\n          console.log(error);\n        }\n      } else if (window.web3) {\n        // Legacy dapp browsers\n        web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(window.web3.currentProvider);\n      } else {\n        // Non-dapp browsers\n        console.log(\"Non-Ethereum browser detected. You should consider trying MetaMask!\");\n      } // window.BrowserSolc.getVersions(function (soljsonSources, soljsonReleases) {\n      //   // console.log(soljsonReleases['0.6.0'] )\n      //   window.BrowserSolc.loadVersion(soljsonReleases['0.4.6'], function (c) {\n      //     console.log('Solc loaded!')\n      //     solc = c;\n      //   })\n      // })\n\n    })();\n  }, []);\n\n  const deploy = async text => {\n    // console.log(solc)\n    // var input = {\n    //   language: 'Solidity',\n    //   sources: {\n    //     'test.sol': '////hello world\\ncontract x { function f() public { } }',\n    //     // 'foo.sol': text,\n    //     // 'IAsciiArt.sol': iascii,\n    //   },\n    // };\n    // let jsonContractSource = JSON.stringify({\n    //   language: 'Solidity',\n    //   sources: {\n    //     'Task': {\n    //       content: 'contract x { function f() public { } }',\n    //     },\n    //   },\n    //   settings: {\n    //     outputSelection: {\n    //       '*': {\n    //         '*': ['abi',\"evm.bytecode\"]\n    //       },\n    //     },\n    //   },\n    // });\n    // let result = solc.compile(input);\n    // console.log(result)\n    // const ntrfc = JSON.parse(result.contracts.x.interface);\n    // console.log(ntrfc);\n    var factory = new web3.eth.Contract([{\n      \"anonymous\": false,\n      \"inputs\": [{\n        \"indexed\": false,\n        \"internalType\": \"address\",\n        \"name\": \"tokenAddress\",\n        \"type\": \"address\"\n      }],\n      \"name\": \"ERC721TokenCreated\",\n      \"type\": \"event\"\n    }, {\n      \"inputs\": [{\n        \"internalType\": \"string\",\n        \"name\": \"name\",\n        \"type\": \"string\"\n      }, {\n        \"internalType\": \"string\",\n        \"name\": \"symbol\",\n        \"type\": \"string\"\n      }],\n      \"name\": \"deployNewERC721Token\",\n      \"outputs\": [{\n        \"internalType\": \"address\",\n        \"name\": \"\",\n        \"type\": \"address\"\n      }],\n      \"stateMutability\": \"nonpayable\",\n      \"type\": \"function\"\n    }], `0xf7fb9B9D6136D8AA533510fCEa5499ddF238bC70`);\n    const t = await factory.methods.deployNewERC721Token(\"Demo ERC721 Token\", \"DEMO721\").send({\n      from: web3.currentProvider.selectedAddress\n    });\n    console.log(t); // factory.methods.deployNewERC721Token().send();\n    // myContract.deploy({\n    //   data: result.contracts.x.bytecode,\n    //   arguments: []\n    // })\n    //   .send({\n    //     from: web3.currentProvider.selectedAddress,\n    //     gas: 1000000,\n    //     gasPrice: '20000000000'\n    //   }, (error, transactionHash) => {\n    //     console.log(\"done?\", error, transactionHash);\n    //   })\n  };\n\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 7\n    }\n  }, __jsx(\"meta\", {\n    httpEquiv: \"x-ua-compatible\",\n    content: \"ie=edge\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1, shrink-to-fit=no\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 9\n    }\n  })), __jsx(\"main\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"text-2xl\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 9\n    }\n  }, __jsx(\"textarea\", {\n    style: {\n      margin: 'auto',\n      display: 'block'\n    },\n    rows: 10,\n    cols: 50,\n    onChange: e => setBody(e.target.value),\n    value: body,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    onClick: e => deploy(body),\n    style: {\n      margin: 'auto',\n      display: 'block'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 11\n    }\n  }, \"submit\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJ3ZWIzIiwiSW5kZXgiLCJwcm9wcyIsImJvZHkiLCJzZXRCb2R5IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJldGhlcmV1bSIsIldlYjMiLCJlbmFibGUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50UHJvdmlkZXIiLCJkZXBsb3kiLCJ0ZXh0IiwiZmFjdG9yeSIsImV0aCIsIkNvbnRyYWN0IiwidCIsIm1ldGhvZHMiLCJkZXBsb3lOZXdFUkM3MjFUb2tlbiIsInNlbmQiLCJmcm9tIiwic2VsZWN0ZWRBZGRyZXNzIiwibWFyZ2luIiwiZGlzcGxheSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsSUFBSjs7QUFHQSxNQUFNQyxLQUFLLEdBQUtDLEtBQUQsSUFBZ0I7QUFFN0IsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLFlBQUQsQ0FBaEM7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsS0FBQyxZQUFZO0FBQ1gsVUFBSUMsTUFBTSxDQUFDQyxRQUFYLEVBQXFCO0FBQ25CO0FBQ0FSLFlBQUksR0FBRyxJQUFJUywyQ0FBSixDQUFTRixNQUFNLENBQUNDLFFBQWhCLENBQVA7O0FBQ0EsWUFBSTtBQUNGLGdCQUFNRCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JFLE1BQWhCLEVBQU47QUFDRCxTQUZELENBRUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2Q7QUFDQUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFDRixPQVRELE1BVUssSUFBSUosTUFBTSxDQUFDUCxJQUFYLEVBQWlCO0FBQ3BCO0FBQ0FBLFlBQUksR0FBRyxJQUFJUywyQ0FBSixDQUFTRixNQUFNLENBQUNQLElBQVAsQ0FBWWMsZUFBckIsQ0FB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LEVBQUU7QUFDM0N1QixZQUFNLEVBQUUsTUFEbUM7QUFFM0NDLGFBQU8sRUFBRTtBQUZrQyxLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsQ0FERixDQVJGLENBREY7QUE4QkQsQ0FwS0Q7O0FBc0tlMUIsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5cbmxldCB3ZWIzO1xuZGVjbGFyZSB2YXIgd2luZG93OiBhbnlcblxuY29uc3QgSW5kZXggPSAgKHByb3BzOiBhbnkpID0+IHtcblxuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSgnaGVsbG8gd2ViMycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgLy8gTW9kZXJuIERBcHAgYnJvd3NlcnNcbiAgICAgICAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIFVzZXIgZGVuaWVkIGFjY291bnQgYWNjZXNzXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh3aW5kb3cud2ViMykge1xuICAgICAgICAvLyBMZWdhY3kgZGFwcCBicm93c2Vyc1xuICAgICAgICB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBOb24tZGFwcCBicm93c2Vyc1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vbi1FdGhlcmV1bSBicm93c2VyIGRldGVjdGVkLiBZb3Ugc2hvdWxkIGNvbnNpZGVyIHRyeWluZyBNZXRhTWFzayFcIik7XG4gICAgICB9XG4gICAgICAvLyB3aW5kb3cuQnJvd3NlclNvbGMuZ2V0VmVyc2lvbnMoZnVuY3Rpb24gKHNvbGpzb25Tb3VyY2VzLCBzb2xqc29uUmVsZWFzZXMpIHtcbiAgICAgIC8vICAgLy8gY29uc29sZS5sb2coc29sanNvblJlbGVhc2VzWycwLjYuMCddIClcblxuICAgICAgLy8gICB3aW5kb3cuQnJvd3NlclNvbGMubG9hZFZlcnNpb24oc29sanNvblJlbGVhc2VzWycwLjQuNiddLCBmdW5jdGlvbiAoYykge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdTb2xjIGxvYWRlZCEnKVxuICAgICAgLy8gICAgIHNvbGMgPSBjO1xuICAgICAgLy8gICB9KVxuXG4gICAgICAvLyB9KVxuXG4gICAgfSkoKTtcbiAgfSwgW10pO1xuXG5cblxuICBjb25zdCBkZXBsb3kgPSBhc3luYyAodGV4dDogc3RyaW5nKSA9PiB7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzb2xjKVxuXG4gICAgLy8gdmFyIGlucHV0ID0ge1xuICAgIC8vICAgbGFuZ3VhZ2U6ICdTb2xpZGl0eScsXG4gICAgLy8gICBzb3VyY2VzOiB7XG4gICAgLy8gICAgICd0ZXN0LnNvbCc6ICcvLy8vaGVsbG8gd29ybGRcXG5jb250cmFjdCB4IHsgZnVuY3Rpb24gZigpIHB1YmxpYyB7IH0gfScsXG4gICAgLy8gICAgIC8vICdmb28uc29sJzogdGV4dCxcbiAgICAvLyAgICAgLy8gJ0lBc2NpaUFydC5zb2wnOiBpYXNjaWksXG4gICAgLy8gICB9LFxuICAgIC8vIH07XG5cbiAgICAvLyBsZXQganNvbkNvbnRyYWN0U291cmNlID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgIC8vICAgbGFuZ3VhZ2U6ICdTb2xpZGl0eScsXG4gICAgLy8gICBzb3VyY2VzOiB7XG4gICAgLy8gICAgICdUYXNrJzoge1xuICAgIC8vICAgICAgIGNvbnRlbnQ6ICdjb250cmFjdCB4IHsgZnVuY3Rpb24gZigpIHB1YmxpYyB7IH0gfScsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9LFxuICAgIC8vICAgc2V0dGluZ3M6IHtcbiAgICAvLyAgICAgb3V0cHV0U2VsZWN0aW9uOiB7XG4gICAgLy8gICAgICAgJyonOiB7XG4gICAgLy8gICAgICAgICAnKic6IFsnYWJpJyxcImV2bS5ieXRlY29kZVwiXVxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9LFxuICAgIC8vIH0pO1xuXG5cbiAgICAvLyBsZXQgcmVzdWx0ID0gc29sYy5jb21waWxlKGlucHV0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpXG5cbiAgICAvLyBjb25zdCBudHJmYyA9IEpTT04ucGFyc2UocmVzdWx0LmNvbnRyYWN0cy54LmludGVyZmFjZSk7XG4gICAgLy8gY29uc29sZS5sb2cobnRyZmMpO1xuICAgIHZhciBmYWN0b3J5ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFtcbiAgICAgIHtcbiAgICAgICAgXCJhbm9ueW1vdXNcIjogZmFsc2UsXG4gICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImluZGV4ZWRcIjogZmFsc2UsXG4gICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInRva2VuQWRkcmVzc1wiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm5hbWVcIjogXCJFUkM3MjFUb2tlbkNyZWF0ZWRcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiZXZlbnRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInN5bWJvbFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwibmFtZVwiOiBcImRlcGxveU5ld0VSQzcyMVRva2VuXCIsXG4gICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJub25wYXlhYmxlXCIsXG4gICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgICAgIH1cbiAgICBdLCBgMHhmN2ZiOUI5RDYxMzZEOEFBNTMzNTEwZkNFYTU0OTlkZEYyMzhiQzcwYCk7XG5cbiAgICBjb25zdCB0ID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmRlcGxveU5ld0VSQzcyMVRva2VuKFwiRGVtbyBFUkM3MjEgVG9rZW5cIixcIkRFTU83MjFcIikuc2VuZCh7XG4gICAgICBmcm9tOiB3ZWIzLmN1cnJlbnRQcm92aWRlci5zZWxlY3RlZEFkZHJlc3NcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0KTtcbiAgICAvLyBmYWN0b3J5Lm1ldGhvZHMuZGVwbG95TmV3RVJDNzIxVG9rZW4oKS5zZW5kKCk7XG5cbiAgICAvLyBteUNvbnRyYWN0LmRlcGxveSh7XG4gICAgLy8gICBkYXRhOiByZXN1bHQuY29udHJhY3RzLnguYnl0ZWNvZGUsXG4gICAgLy8gICBhcmd1bWVudHM6IFtdXG4gICAgLy8gfSlcbiAgICAvLyAgIC5zZW5kKHtcbiAgICAvLyAgICAgZnJvbTogd2ViMy5jdXJyZW50UHJvdmlkZXIuc2VsZWN0ZWRBZGRyZXNzLFxuICAgIC8vICAgICBnYXM6IDEwMDAwMDAsXG4gICAgLy8gICAgIGdhc1ByaWNlOiAnMjAwMDAwMDAwMDAnXG4gICAgLy8gICB9LCAoZXJyb3IsIHRyYW5zYWN0aW9uSGFzaCkgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImRvbmU/XCIsIGVycm9yLCB0cmFuc2FjdGlvbkhhc2gpO1xuICAgIC8vICAgfSlcblxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIngtdWEtY29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJpZT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPlxuICAgICAgICAgIDx0ZXh0YXJlYSBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICAgICAgfX0gcm93cz17MTB9IGNvbHM9ezUwfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCb2R5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHZhbHVlPXtib2R5fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBkZXBsb3koYm9keSl9IHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHN1Ym1pdFxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"web3\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzXCI/NjFiNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///web3\n");

/***/ })

/******/ });