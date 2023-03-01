"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./pages/projects.tsx":
/*!****************************!*\
  !*** ./pages/projects.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProjectCard */ \"./components/ProjectCard.tsx\");\n/* harmony import */ var _styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/ProjectsPage.module.scss */ \"./styles/ProjectsPage.module.scss\");\n/* harmony import */ var _styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ \"./data/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProjectsPage() {\n    _s();\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"All\");\n    const [grid, setGrid] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const filteredArray = filter === \"All\" ? _data__WEBPACK_IMPORTED_MODULE_2__.projectsInfo : _data__WEBPACK_IMPORTED_MODULE_2__.projectsInfo.filter((i)=>i.tag === filter);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filterContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter),\n                        onClick: ()=>setFilter(\"All\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filterInner)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"All\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter),\n                        onClick: ()=>setFilter(\"Long Lost Friends\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filterInner2)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"Long Lost Friends\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter),\n                        onClick: ()=>setFilter(\"Side project\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filterInner3)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"Side-projects\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter),\n                        onClick: ()=>setFilter(\"Freelance\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filterInner4)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"Freelance\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filterList),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: grid ? \"\".concat((_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().iconContainer), \" \").concat((_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().iconContainerTrue)) : (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().iconContainer),\n                                onClick: ()=>setGrid(true),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/grid_view_FILL0_wght400_GRAD0_opsz48.svg\",\n                                    className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icon)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().iconContainer),\n                                onClick: ()=>setGrid(false),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/list_FILL0_wght400_GRAD0_opsz48.svg\",\n                                    className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icon)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContainer),\n                children: filteredArray.map((i, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        website: i.website,\n                        github: i.github,\n                        title: i.title,\n                        text: i.text,\n                        stack: i.stack,\n                        tag: i.tag\n                    }, key, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectsPage, \"juThQYj0tJDaAwoo2lgevjVbZ98=\");\n_c = ProjectsPage;\nvar _c;\n$RefreshReg$(_c, \"ProjectsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW9EO0FBQ0k7QUFDakI7QUFDTjtBQUNsQixTQUFTSSxlQUFlOztJQUNyQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDSSxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDLElBQUk7SUFFckMsTUFBTU0sZ0JBQ0pKLFdBQVcsUUFDUEgsK0NBQVlBLEdBQ1pBLHNEQUFtQixDQUFDLENBQUNRLElBQVdBLEVBQUVDLEdBQUcsS0FBS04sT0FBTztJQUV2RCxxQkFDRSw4REFBQ087UUFBSUMsV0FBV1osbUZBQWdCOzswQkFDOUIsOERBQUNXO2dCQUFJQyxXQUFXWiwrRUFBWTswQkFBRTs7Ozs7OzBCQUM5Qiw4REFBQ1c7Z0JBQUlDLFdBQVdaLHlGQUFzQjs7a0NBQ3BDLDhEQUFDVzt3QkFBSUMsV0FBV1osZ0ZBQWE7d0JBQUVnQixTQUFTLElBQU1YLFVBQVU7OzBDQUN0RCw4REFBQ007Z0NBQUlDLFdBQVdaLHFGQUFrQjs7Ozs7OzBDQUNsQyw4REFBQ2tCO2dDQUFFQyxNQUFLOzBDQUFJOzs7Ozs7Ozs7Ozs7a0NBRWQsOERBQUNSO3dCQUNDQyxXQUFXWixnRkFBYTt3QkFDeEJnQixTQUFTLElBQU1YLFVBQVU7OzBDQUV6Qiw4REFBQ007Z0NBQUlDLFdBQVdaLHNGQUFtQjs7Ozs7OzBDQUNuQyw4REFBQ2tCO2dDQUFFQyxNQUFLOzBDQUFJOzs7Ozs7Ozs7Ozs7a0NBRWQsOERBQUNSO3dCQUNDQyxXQUFXWixnRkFBYTt3QkFDeEJnQixTQUFTLElBQU1YLFVBQVU7OzBDQUV6Qiw4REFBQ007Z0NBQUlDLFdBQVdaLHNGQUFtQjs7Ozs7OzBDQUNuQyw4REFBQ2tCO2dDQUFFQyxNQUFLOzBDQUFJOzs7Ozs7Ozs7Ozs7a0NBRWQsOERBQUNSO3dCQUFJQyxXQUFXWixnRkFBYTt3QkFBRWdCLFNBQVMsSUFBTVgsVUFBVTs7MENBQ3RELDhEQUFDTTtnQ0FBSUMsV0FBV1osc0ZBQW1COzs7Ozs7MENBQ25DLDhEQUFDa0I7Z0NBQUVDLE1BQUs7MENBQUk7Ozs7Ozs7Ozs7OztrQ0FFZCw4REFBQ1I7d0JBQUlDLFdBQVdaLG9GQUFpQjs7MENBQy9CLDhEQUFDVztnQ0FDQ0MsV0FDRU4sT0FDSSxHQUEyQk4sT0FBeEJBLHVGQUFvQixFQUFDLEtBQTRCLE9BQXpCQSwyRkFBd0IsSUFDbkRBLHVGQUFvQjtnQ0FFMUJnQixTQUFTLElBQU1ULFFBQVEsSUFBSTswQ0FFM0IsNEVBQUNtQjtvQ0FDQ0MsS0FBSTtvQ0FDSmYsV0FBV1osOEVBQVc7Ozs7Ozs7Ozs7OzBDQUcxQiw4REFBQ1c7Z0NBQUlDLFdBQVdaLHVGQUFvQjtnQ0FBRWdCLFNBQVMsSUFBTVQsUUFBUSxLQUFLOzBDQUNoRSw0RUFBQ21CO29DQUNDQyxLQUFJO29DQUNKZixXQUFXWiw4RUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzlCLDhEQUFDVztnQkFBSUMsV0FBV1osdUZBQW9COzBCQUNqQ1EsY0FBY3NCLEdBQUcsQ0FBQyxDQUFDckIsR0FBUXNCLG9CQUMxQiw4REFBQ2hDLCtEQUFXQTt3QkFDVmlDLFNBQVN2QixFQUFFdUIsT0FBTzt3QkFDbEJDLFFBQVF4QixFQUFFd0IsTUFBTTt3QkFDaEJuQixPQUFPTCxFQUFFSyxLQUFLO3dCQUNkb0IsTUFBTXpCLEVBQUV5QixJQUFJO3dCQUNaQyxPQUFPMUIsRUFBRTBCLEtBQUs7d0JBQ2R6QixLQUFLRCxFQUFFQyxHQUFHO3VCQUNMcUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakIsQ0FBQztHQXhFdUI1QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0cy50c3g/NjM1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvamVjdENhcmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Qcm9qZWN0c1BhZ2UubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHByb2plY3RzSW5mbyB9IGZyb20gXCIuLi9kYXRhXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHNQYWdlKCkge1xuICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoXCJBbGxcIik7XG4gIGNvbnN0IFtncmlkLCBzZXRHcmlkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGZpbHRlcmVkQXJyYXkgPVxuICAgIGZpbHRlciA9PT0gXCJBbGxcIlxuICAgICAgPyBwcm9qZWN0c0luZm9cbiAgICAgIDogcHJvamVjdHNJbmZvLmZpbHRlcigoaTogYW55KSA9PiBpLnRhZyA9PT0gZmlsdGVyKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlByb2plY3RzPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyfSBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoXCJBbGxcIil9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVySW5uZXJ9PjwvZGl2PlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+QWxsPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoXCJMb25nIExvc3QgRnJpZW5kc1wiKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVySW5uZXIyfT48L2Rpdj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkxvbmcgTG9zdCBGcmllbmRzPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoXCJTaWRlIHByb2plY3RcIil9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcklubmVyM30+PC9kaXY+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5TaWRlLXByb2plY3RzPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJ9IG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcihcIkZyZWVsYW5jZVwiKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJJbm5lcjR9PjwvZGl2PlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RnJlZWxhbmNlPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJMaXN0fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBncmlkXG4gICAgICAgICAgICAgICAgPyBgJHtzdHlsZXMuaWNvbkNvbnRhaW5lcn0gJHtzdHlsZXMuaWNvbkNvbnRhaW5lclRydWV9YFxuICAgICAgICAgICAgICAgIDogc3R5bGVzLmljb25Db250YWluZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEdyaWQodHJ1ZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvZ3JpZF92aWV3X0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Z1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkNvbnRhaW5lcn0gb25DbGljaz17KCkgPT4gc2V0R3JpZChmYWxzZSl9PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvbGlzdF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRhaW5lcn0+XG4gICAgICAgIHtmaWx0ZXJlZEFycmF5Lm1hcCgoaTogYW55LCBrZXk6IGFueSkgPT4gKFxuICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgd2Vic2l0ZT17aS53ZWJzaXRlfVxuICAgICAgICAgICAgZ2l0aHViPXtpLmdpdGh1Yn1cbiAgICAgICAgICAgIHRpdGxlPXtpLnRpdGxlfVxuICAgICAgICAgICAgdGV4dD17aS50ZXh0fVxuICAgICAgICAgICAgc3RhY2s9e2kuc3RhY2t9XG4gICAgICAgICAgICB0YWc9e2kudGFnfVxuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJQcm9qZWN0Q2FyZCIsInN0eWxlcyIsInByb2plY3RzSW5mbyIsInVzZVN0YXRlIiwiUHJvamVjdHNQYWdlIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwiZ3JpZCIsInNldEdyaWQiLCJmaWx0ZXJlZEFycmF5IiwiaSIsInRhZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwiZmlsdGVyQ29udGFpbmVyIiwib25DbGljayIsImZpbHRlcklubmVyIiwiYSIsImhyZWYiLCJmaWx0ZXJJbm5lcjIiLCJmaWx0ZXJJbm5lcjMiLCJmaWx0ZXJJbm5lcjQiLCJmaWx0ZXJMaXN0IiwiaWNvbkNvbnRhaW5lciIsImljb25Db250YWluZXJUcnVlIiwiaW1nIiwic3JjIiwiaWNvbiIsImNhcmRDb250YWluZXIiLCJtYXAiLCJrZXkiLCJ3ZWJzaXRlIiwiZ2l0aHViIiwidGV4dCIsInN0YWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects.tsx\n"));

/***/ })

});