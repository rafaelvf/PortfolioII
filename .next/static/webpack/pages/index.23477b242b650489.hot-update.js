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

/***/ "./components/Skills.tsx":
/*!*******************************!*\
  !*** ./components/Skills.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Skills.module.scss */ \"./styles/Skills.module.scss\");\n/* harmony import */ var _styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n//import { initialTabs as tabs } from \"./ingredients\";\n\nconst tabs = [\n    \"Languages\",\n    \"Frameworks\",\n    \"Libraries\",\n    \"Tools\"\n];\nfunction Skills() {\n    _s();\n    const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tabs[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: \"SKILLS\"\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().window),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().nav),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().ul),\n                            children: tabs.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    id: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().id),\n                                    className: item === selectedTab ? \"selected\" : \"\",\n                                    onClick: ()=>setSelectedTab(item),\n                                    children: [\n                                        \"\".concat(item),\n                                        item === selectedTab ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                            className: \"underline\",\n                                            layoutId: \"underline\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                                            lineNumber: 25,\n                                            columnNumber: 19\n                                        }, this) : null\n                                    ]\n                                }, item, true, {\n                                    fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().main),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                            exitBeforeEnter: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                initial: {\n                                    y: 10,\n                                    opacity: 0\n                                },\n                                animate: {\n                                    y: 0,\n                                    opacity: 1\n                                },\n                                exit: {\n                                    y: -10,\n                                    opacity: 0\n                                },\n                                transition: {\n                                    duration: 0.2\n                                },\n                                children: selectedTab ? selectedTab : \"\\uD83D\\uDE0B\"\n                            }, selectedTab ? selectedTab : \"empty\", false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Skills, \"72Ky/m28cK7TA0BsM8KFgzoTljo=\");\n_c = Skills;\nvar _c;\n$RefreshReg$(_c, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxscy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBa0Q7QUFDakI7QUFDakMsc0RBQXNEO0FBQ0U7QUFFeEQsTUFBTUksT0FBTztJQUFDO0lBQWE7SUFBYztJQUFhO0NBQVE7QUFFL0MsU0FBU0MsU0FBUzs7SUFDL0IsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDRyxJQUFJLENBQUMsRUFBRTtJQUN0RCxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBV1QsNkVBQWdCOzswQkFDOUIsOERBQUNRO2dCQUFJQyxXQUFXVCx5RUFBWTswQkFBRTs7Ozs7OzBCQUM5Qiw4REFBQ1E7Z0JBQUlDLFdBQVdULDBFQUFhOztrQ0FDM0IsOERBQUNhO3dCQUFJSixXQUFXVCx1RUFBVTtrQ0FDeEIsNEVBQUNjOzRCQUFHTCxXQUFXVCxzRUFBUztzQ0FDckJJLEtBQUtXLEdBQUcsQ0FBQyxDQUFDQyxxQkFDVCw4REFBQ0M7b0NBRUNDLElBQUlsQixzRUFBUztvQ0FDYlMsV0FBV08sU0FBU1YsY0FBYyxhQUFhLEVBQUU7b0NBQ2pEYSxTQUFTLElBQU1aLGVBQWVTOzt3Q0FFNUIsR0FBTyxPQUFMQTt3Q0FDSEEsU0FBU1YsNEJBQ1IsOERBQUNKLHFEQUFVOzRDQUFDTyxXQUFVOzRDQUFZVyxVQUFTOzs7OzttREFDekMsSUFBSTs7bUNBUkhKOzs7Ozs7Ozs7Ozs7Ozs7a0NBYWIsOERBQUNSO3dCQUFJQyxXQUFXVCx3RUFBVztrQ0FDekIsNEVBQUNHLDBEQUFlQTs0QkFBQ21CLGVBQWU7c0NBQzlCLDRFQUFDcEIscURBQVU7Z0NBRVRxQixTQUFTO29DQUFFQyxHQUFHO29DQUFJQyxTQUFTO2dDQUFFO2dDQUM3QkMsU0FBUztvQ0FBRUYsR0FBRztvQ0FBR0MsU0FBUztnQ0FBRTtnQ0FDNUJFLE1BQU07b0NBQUVILEdBQUcsQ0FBQztvQ0FBSUMsU0FBUztnQ0FBRTtnQ0FDM0JHLFlBQVk7b0NBQUVDLFVBQVU7Z0NBQUk7MENBRTNCdkIsY0FBY0EsY0FBYyxjQUFJOytCQU41QkEsY0FBY0EsY0FBYyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhdEQsQ0FBQztHQXZDdUJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2tpbGxzLnRzeD82YTQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ta2lsbHMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vL2ltcG9ydCB7IGluaXRpYWxUYWJzIGFzIHRhYnMgfSBmcm9tIFwiLi9pbmdyZWRpZW50c1wiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCB0YWJzID0gW1wiTGFuZ3VhZ2VzXCIsIFwiRnJhbWV3b3Jrc1wiLCBcIkxpYnJhcmllc1wiLCBcIlRvb2xzXCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2lsbHMoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZFRhYiwgc2V0U2VsZWN0ZWRUYWJdID0gdXNlU3RhdGUodGFic1swXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+U0tJTExTPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndpbmRvd30+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMudWx9PlxuICAgICAgICAgICAge3RhYnMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17aXRlbX1cbiAgICAgICAgICAgICAgICBpZD17c3R5bGVzLmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbSA9PT0gc2VsZWN0ZWRUYWIgPyBcInNlbGVjdGVkXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkVGFiKGl0ZW0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2Ake2l0ZW19YH1cbiAgICAgICAgICAgICAgICB7aXRlbSA9PT0gc2VsZWN0ZWRUYWIgPyAoXG4gICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIiBsYXlvdXRJZD1cInVuZGVybGluZVwiIC8+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlcj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGtleT17c2VsZWN0ZWRUYWIgPyBzZWxlY3RlZFRhYiA6IFwiZW1wdHlcIn1cbiAgICAgICAgICAgICAgaW5pdGlhbD17eyB5OiAxMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgZXhpdD17eyB5OiAtMTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4yIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzZWxlY3RlZFRhYiA/IHNlbGVjdGVkVGFiIDogXCLwn5iLXCJ9XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJ0YWJzIiwiU2tpbGxzIiwic2VsZWN0ZWRUYWIiLCJzZXRTZWxlY3RlZFRhYiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwid2luZG93IiwibmF2IiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJpZCIsIm9uQ2xpY2siLCJsYXlvdXRJZCIsIm1haW4iLCJleGl0QmVmb3JlRW50ZXIiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Skills.tsx\n"));

/***/ })

});