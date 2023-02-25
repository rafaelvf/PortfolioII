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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProjectCard */ \"./components/ProjectCard.tsx\");\n/* harmony import */ var _styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/ProjectsPage.module.scss */ \"./styles/ProjectsPage.module.scss\");\n/* harmony import */ var _styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ \"./data/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProjectsPage() {\n    _s();\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"All\");\n    const filteredArray = filter === \"All\" ? _data__WEBPACK_IMPORTED_MODULE_2__.projectsInfo : _data__WEBPACK_IMPORTED_MODULE_2__.projectsInfo.filter((i)=>i.tag === filter);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filterContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filterInner),\n                                onClick: ()=>setFilter(\"All\")\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"All\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filterInner2),\n                                onClick: ()=>setFilter(\"Long Lost Friends\")\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"Long Lost Friends\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filterInner3),\n                                onClick: ()=>setFilter(\"Side projects\")\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"Side-projects\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filterInner4),\n                                onClick: ()=>setFilter(\"Freelance\")\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"Freelance\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContainer),\n                children: filteredArray.map((i, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        website: i.website,\n                        title: i.title,\n                        text: i.text,\n                        stack: i.stack,\n                        tag: i.tag\n                    }, key, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectsPage, \"aTTAYHvTVp56ZKAOh1/oGfK1+4g=\");\n_c = ProjectsPage;\nvar _c;\n$RefreshReg$(_c, \"ProjectsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW9EO0FBQ0k7QUFDakI7QUFDTjtBQUNsQixTQUFTSSxlQUFlOztJQUNyQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUM7SUFFckMsTUFBTUksZ0JBQ0pGLFdBQVcsUUFDUEgsK0NBQVlBLEdBQ1pBLHNEQUFtQixDQUFDLENBQUNNLElBQVdBLEVBQUVDLEdBQUcsS0FBS0osT0FBTztJQUN2RCxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBV1YsbUZBQWdCOzswQkFDOUIsOERBQUNTO2dCQUFJQyxXQUFXViwrRUFBWTswQkFBRTs7Ozs7OzBCQUM5Qiw4REFBQ1M7Z0JBQUlDLFdBQVdWLHlGQUFzQjs7a0NBQ3BDLDhEQUFDUzt3QkFBSUMsV0FBV1YsZ0ZBQWE7OzBDQUMzQiw4REFBQ1M7Z0NBQ0NDLFdBQVdWLHFGQUFrQjtnQ0FDN0JlLFNBQVMsSUFBTVYsVUFBVTs7Ozs7OzBDQUUzQiw4REFBQ1c7Z0NBQUVDLE1BQUs7MENBQUk7Ozs7Ozs7Ozs7OztrQ0FFZCw4REFBQ1I7d0JBQUlDLFdBQVdWLGdGQUFhOzswQ0FDM0IsOERBQUNTO2dDQUNDQyxXQUFXVixzRkFBbUI7Z0NBQzlCZSxTQUFTLElBQU1WLFVBQVU7Ozs7OzswQ0FFM0IsOERBQUNXO2dDQUFFQyxNQUFLOzBDQUFJOzs7Ozs7Ozs7Ozs7a0NBRWQsOERBQUNSO3dCQUFJQyxXQUFXVixnRkFBYTs7MENBQzNCLDhEQUFDUztnQ0FDQ0MsV0FBV1Ysc0ZBQW1CO2dDQUM5QmUsU0FBUyxJQUFNVixVQUFVOzs7Ozs7MENBRTNCLDhEQUFDVztnQ0FBRUMsTUFBSzswQ0FBSTs7Ozs7Ozs7Ozs7O2tDQUVkLDhEQUFDUjt3QkFBSUMsV0FBV1YsZ0ZBQWE7OzBDQUMzQiw4REFBQ1M7Z0NBQ0NDLFdBQVdWLHNGQUFtQjtnQ0FDOUJlLFNBQVMsSUFBTVYsVUFBVTs7Ozs7OzBDQUUzQiw4REFBQ1c7Z0NBQUVDLE1BQUs7MENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHaEIsOERBQUNSO2dCQUFJQyxXQUFXVix1RkFBb0I7MEJBQ2pDTSxjQUFjZ0IsR0FBRyxDQUFDLENBQUNmLEdBQVFnQixvQkFDMUIsOERBQUN4QiwrREFBV0E7d0JBQ1Z5QixTQUFTakIsRUFBRWlCLE9BQU87d0JBQ2xCWixPQUFPTCxFQUFFSyxLQUFLO3dCQUNkYSxNQUFNbEIsRUFBRWtCLElBQUk7d0JBQ1pDLE9BQU9uQixFQUFFbUIsS0FBSzt3QkFDZGxCLEtBQUtELEVBQUVDLEdBQUc7dUJBQ0xlOzs7Ozs7Ozs7Ozs7Ozs7O0FBTWpCLENBQUM7R0F0RHVCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMudHN4PzYzNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2plY3RDYXJkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUHJvamVjdHNQYWdlLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0luZm8gfSBmcm9tIFwiLi4vZGF0YVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzUGFnZSgpIHtcbiAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKFwiQWxsXCIpO1xuXG4gIGNvbnN0IGZpbHRlcmVkQXJyYXkgPVxuICAgIGZpbHRlciA9PT0gXCJBbGxcIlxuICAgICAgPyBwcm9qZWN0c0luZm9cbiAgICAgIDogcHJvamVjdHNJbmZvLmZpbHRlcigoaTogYW55KSA9PiBpLnRhZyA9PT0gZmlsdGVyKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Qcm9qZWN0czwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJDb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcn0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVySW5uZXJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoXCJBbGxcIil9XG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+QWxsPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJ9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcklubmVyMn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcihcIkxvbmcgTG9zdCBGcmllbmRzXCIpfVxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkxvbmcgTG9zdCBGcmllbmRzPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJ9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcklubmVyM31cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcihcIlNpZGUgcHJvamVjdHNcIil9XG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+U2lkZS1wcm9qZWN0czwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyfT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJJbm5lcjR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoXCJGcmVlbGFuY2VcIil9XG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RnJlZWxhbmNlPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGFpbmVyfT5cbiAgICAgICAge2ZpbHRlcmVkQXJyYXkubWFwKChpOiBhbnksIGtleTogYW55KSA9PiAoXG4gICAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgICB3ZWJzaXRlPXtpLndlYnNpdGV9XG4gICAgICAgICAgICB0aXRsZT17aS50aXRsZX1cbiAgICAgICAgICAgIHRleHQ9e2kudGV4dH1cbiAgICAgICAgICAgIHN0YWNrPXtpLnN0YWNrfVxuICAgICAgICAgICAgdGFnPXtpLnRhZ31cbiAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUHJvamVjdENhcmQiLCJzdHlsZXMiLCJwcm9qZWN0c0luZm8iLCJ1c2VTdGF0ZSIsIlByb2plY3RzUGFnZSIsImZpbHRlciIsInNldEZpbHRlciIsImZpbHRlcmVkQXJyYXkiLCJpIiwidGFnIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJmaWx0ZXJDb250YWluZXIiLCJmaWx0ZXJJbm5lciIsIm9uQ2xpY2siLCJhIiwiaHJlZiIsImZpbHRlcklubmVyMiIsImZpbHRlcklubmVyMyIsImZpbHRlcklubmVyNCIsImNhcmRDb250YWluZXIiLCJtYXAiLCJrZXkiLCJ3ZWJzaXRlIiwidGV4dCIsInN0YWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects.tsx\n"));

/***/ })

});