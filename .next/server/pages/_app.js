(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 421:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(675);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function MyApp({
  Component,
  pageProps
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), null, __jsx("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), __jsx("title", null, "PERMA")), __jsx("body", {
    style: {
      backgroundColor: "#f7f7f7"
    }
  }, __jsx("main", null, __jsx("div", {
    className: "grid grid-cols-1 p-8 h-full",
    style: {
      backgroundColor: "#f7f7f7"
    }
  }, __jsx("div", {
    className: "md:flex md:items-center md:justify-between"
  }, __jsx("div", {
    className: "flex-1 min-w-0"
  }, __jsx("h2", {
    className: "text-center"
  }, __jsx("div", null, __jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
    src: "/perma.png",
    width: "272",
    height: "58"
  })), __jsx("div", {
    className: "ml-4"
  }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
    src: "/ball.png",
    width: "168",
    height: "152",
    className: "mt-4"
  }))))), __jsx("div", {
    className: "grid grid-cols-1 md:grid-cols-3 ml-8 mr-8"
  }, __jsx("div", null), __jsx(Component, pageProps), __jsx("div", null))))));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [297,675], function() { return __webpack_exec__(421); });
module.exports = __webpack_exports__;

})();