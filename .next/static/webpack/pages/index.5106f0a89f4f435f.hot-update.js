"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Projects.tsx":
/*!*********************************!*\
  !*** ./components/Projects.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Projects.module.scss */ \"./styles/Projects.module.scss\");\n/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);\nfunction Projects() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const snap = gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timeline({\n            scrollTrigger: {\n                trigger: \".container\",\n                start: \"-50% center\",\n                end: \"bottom center\",\n                markers: true,\n                scrub: true\n            }\n        });\n        snap.fromTo(\".title\", {\n            x: \"-50%\"\n        }, {\n            x: \"50%\"\n        });\n        snap.fromTo(\".number\", {\n            opacity: 0\n        }, {\n            opacity: 1\n        });\n        snap.fromTo(\".projectTitle\", {\n            opacity: 0\n        }, {\n            opacity: 1\n        });\n        snap.fromTo(\".projectPosition\", {\n            opacity: 0\n        }, {\n            opacity: 1\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container), \" container\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title), \" title\"),\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Projects.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_4___default().projectInfo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_4___default().number), \" number\"),\n                        children: \"01\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Projects.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_4___default().projectTitle), \" projectTitle\"),\n                        children: \"GQ Magazine\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Projects.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_4___default().projectPosition), \" projectPosition\"),\n                        children: \"Front end\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Projects.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_4___default().projectDescription),\n                        children: [\n                            \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Projects.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Projects.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Projects.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(Projects, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQStCO0FBQ3FCO0FBQ0E7QUFDNUI7QUFDZ0M7QUFFeERHLDJEQUFtQixDQUFDQyxrRUFBYUE7QUFFbEIsU0FBU0UsV0FBVzs7SUFDakNMLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNTSxPQUFPSixxREFBYSxDQUFDO1lBQ3pCTSxlQUFlO2dCQUNiQyxTQUFTO2dCQUNUQyxPQUFPO2dCQUNQQyxLQUFLO2dCQUNMQyxTQUFTLElBQUk7Z0JBQ2JDLE9BQU8sSUFBSTtZQUNiO1FBQ0Y7UUFDQVAsS0FBS1EsTUFBTSxDQUNULFVBQ0E7WUFDRUMsR0FBRztRQUNMLEdBQ0E7WUFDRUEsR0FBRztRQUNMO1FBRUZULEtBQUtRLE1BQU0sQ0FDVCxXQUNBO1lBQ0VFLFNBQVM7UUFDWCxHQUNBO1lBQ0VBLFNBQVM7UUFDWDtRQUVGVixLQUFLUSxNQUFNLENBQ1QsaUJBQ0E7WUFDRUUsU0FBUztRQUNYLEdBQ0E7WUFDRUEsU0FBUztRQUNYO1FBRUZWLEtBQUtRLE1BQU0sQ0FDVCxvQkFDQTtZQUNFRSxTQUFTO1FBQ1gsR0FDQTtZQUNFQSxTQUFTO1FBQ1g7SUFFSixHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVyxHQUFvQixPQUFqQmpCLCtFQUFnQixFQUFDOzswQkFDbEMsOERBQUNnQjtnQkFBSUMsV0FBVyxHQUFnQixPQUFiakIsMkVBQVksRUFBQzswQkFBUzs7Ozs7OzBCQUN6Qyw4REFBQ2dCO2dCQUFJQyxXQUFXakIsaUZBQWtCOztrQ0FDaEMsOERBQUNnQjt3QkFBSUMsV0FBVyxHQUFpQixPQUFkakIsNEVBQWEsRUFBQztrQ0FBVTs7Ozs7O2tDQUMzQyw4REFBQ2dCO3dCQUFJQyxXQUFXLEdBQXVCLE9BQXBCakIsa0ZBQW1CLEVBQUM7a0NBQWdCOzs7Ozs7a0NBQ3ZELDhEQUFDZ0I7d0JBQUlDLFdBQVcsR0FBMEIsT0FBdkJqQixxRkFBc0IsRUFBQztrQ0FBbUI7Ozs7OztrQ0FHN0QsOERBQUNnQjt3QkFBSUMsV0FBV2pCLHdGQUF5Qjs7NEJBQUU7NEJBR087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUQsQ0FBQztHQWpFdUJJO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdHMudHN4P2YzZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Qcm9qZWN0cy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIjtcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc25hcCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBcIi5jb250YWluZXJcIixcbiAgICAgICAgc3RhcnQ6IFwiLTUwJSBjZW50ZXJcIixcbiAgICAgICAgZW5kOiBcImJvdHRvbSBjZW50ZXJcIixcbiAgICAgICAgbWFya2VyczogdHJ1ZSxcbiAgICAgICAgc2NydWI6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHNuYXAuZnJvbVRvKFxuICAgICAgXCIudGl0bGVcIixcbiAgICAgIHtcbiAgICAgICAgeDogXCItNTAlXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB4OiBcIjUwJVwiLFxuICAgICAgfVxuICAgICk7XG4gICAgc25hcC5mcm9tVG8oXG4gICAgICBcIi5udW1iZXJcIixcbiAgICAgIHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB9XG4gICAgKTtcbiAgICBzbmFwLmZyb21UbyhcbiAgICAgIFwiLnByb2plY3RUaXRsZVwiLFxuICAgICAge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgIH1cbiAgICApO1xuICAgIHNuYXAuZnJvbVRvKFxuICAgICAgXCIucHJvamVjdFBvc2l0aW9uXCIsXG4gICAgICB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgfVxuICAgICk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gY29udGFpbmVyYH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnRpdGxlfSB0aXRsZWB9PlByb2plY3RzPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RJbmZvfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5udW1iZXJ9IG51bWJlcmB9PjAxPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMucHJvamVjdFRpdGxlfSBwcm9qZWN0VGl0bGVgfT5HUSBNYWdhemluZTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnByb2plY3RQb3NpdGlvbn0gcHJvamVjdFBvc2l0aW9uYH0+XG4gICAgICAgICAgRnJvbnQgZW5kXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3REZXNjcmlwdGlvbn0+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXG4gICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZFxuICAgICAgICAgIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNve1wiIFwifVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJyZWdpc3RlclBsdWdpbiIsIlByb2plY3RzIiwic25hcCIsInRpbWVsaW5lIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJzdGFydCIsImVuZCIsIm1hcmtlcnMiLCJzY3J1YiIsImZyb21UbyIsIngiLCJvcGFjaXR5IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJwcm9qZWN0SW5mbyIsIm51bWJlciIsInByb2plY3RUaXRsZSIsInByb2plY3RQb3NpdGlvbiIsInByb2plY3REZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Projects.tsx\n"));

/***/ })

});