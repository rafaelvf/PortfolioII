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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProjectCard */ \"./components/ProjectCard.tsx\");\n/* harmony import */ var _styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/ProjectsPage.module.scss */ \"./styles/ProjectsPage.module.scss\");\n/* harmony import */ var _styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ \"./data/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProjectsPage() {\n    _s();\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"All\");\n    const filteredArray = filter === \"All\" ? _data__WEBPACK_IMPORTED_MODULE_2__.projectsInfo : _data__WEBPACK_IMPORTED_MODULE_2__.projectsInfo.filter((i)=>i.tag === filter);\n    console.log(filter, \"filter\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filterContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter),\n                        onClick: ()=>setFilter(\"All\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filterInner)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"All\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter),\n                        onClick: ()=>setFilter(\"Long Lost Friends\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filterInner2)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"Long Lost Friends\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter),\n                        onClick: ()=>setFilter(\"Side project\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filterInner3)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"Side-projects\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filter),\n                        onClick: ()=>setFilter(\"Freelance\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filterInner4)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"Freelance\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filterList),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().iconContainer),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/grid_view_FILL0_wght400_GRAD0_opsz48.svg\",\n                                    className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icon)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().iconContainer),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/list_FILL0_wght400_GRAD0_opsz48.svg\",\n                                    className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icon)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContainer),\n                children: filteredArray.map((i, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        website: i.website,\n                        github: i.github,\n                        title: i.title,\n                        text: i.text,\n                        stack: i.stack,\n                        tag: i.tag\n                    }, key, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectsPage, \"aTTAYHvTVp56ZKAOh1/oGfK1+4g=\");\n_c = ProjectsPage;\nvar _c;\n$RefreshReg$(_c, \"ProjectsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW9EO0FBQ0k7QUFDakI7QUFDTjtBQUNsQixTQUFTSSxlQUFlOztJQUNyQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUM7SUFFckMsTUFBTUksZ0JBQ0pGLFdBQVcsUUFDUEgsK0NBQVlBLEdBQ1pBLHNEQUFtQixDQUFDLENBQUNNLElBQVdBLEVBQUVDLEdBQUcsS0FBS0osT0FBTztJQUV2REssUUFBUUMsR0FBRyxDQUFDTixRQUFRO0lBQ3BCLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFXWixtRkFBZ0I7OzBCQUM5Qiw4REFBQ1c7Z0JBQUlDLFdBQVdaLCtFQUFZOzBCQUFFOzs7Ozs7MEJBQzlCLDhEQUFDVztnQkFBSUMsV0FBV1oseUZBQXNCOztrQ0FDcEMsOERBQUNXO3dCQUFJQyxXQUFXWixnRkFBYTt3QkFBRWdCLFNBQVMsSUFBTVgsVUFBVTs7MENBQ3RELDhEQUFDTTtnQ0FBSUMsV0FBV1oscUZBQWtCOzs7Ozs7MENBQ2xDLDhEQUFDa0I7Z0NBQUVDLE1BQUs7MENBQUk7Ozs7Ozs7Ozs7OztrQ0FFZCw4REFBQ1I7d0JBQ0NDLFdBQVdaLGdGQUFhO3dCQUN4QmdCLFNBQVMsSUFBTVgsVUFBVTs7MENBRXpCLDhEQUFDTTtnQ0FBSUMsV0FBV1osc0ZBQW1COzs7Ozs7MENBQ25DLDhEQUFDa0I7Z0NBQUVDLE1BQUs7MENBQUk7Ozs7Ozs7Ozs7OztrQ0FFZCw4REFBQ1I7d0JBQ0NDLFdBQVdaLGdGQUFhO3dCQUN4QmdCLFNBQVMsSUFBTVgsVUFBVTs7MENBRXpCLDhEQUFDTTtnQ0FBSUMsV0FBV1osc0ZBQW1COzs7Ozs7MENBQ25DLDhEQUFDa0I7Z0NBQUVDLE1BQUs7MENBQUk7Ozs7Ozs7Ozs7OztrQ0FFZCw4REFBQ1I7d0JBQUlDLFdBQVdaLGdGQUFhO3dCQUFFZ0IsU0FBUyxJQUFNWCxVQUFVOzswQ0FDdEQsOERBQUNNO2dDQUFJQyxXQUFXWixzRkFBbUI7Ozs7OzswQ0FDbkMsOERBQUNrQjtnQ0FBRUMsTUFBSzswQ0FBSTs7Ozs7Ozs7Ozs7O2tDQUVkLDhEQUFDUjt3QkFBSUMsV0FBV1osb0ZBQWlCOzswQ0FDL0IsOERBQUNXO2dDQUFJQyxXQUFXWix1RkFBb0I7MENBQ2xDLDRFQUFDeUI7b0NBQ0NDLEtBQUk7b0NBQ0pkLFdBQVdaLDhFQUFXOzs7Ozs7Ozs7OzswQ0FHMUIsOERBQUNXO2dDQUFJQyxXQUFXWix1RkFBb0I7MENBQ2xDLDRFQUFDeUI7b0NBQ0NDLEtBQUk7b0NBQ0pkLFdBQVdaLDhFQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLOUIsOERBQUNXO2dCQUFJQyxXQUFXWix1RkFBb0I7MEJBQ2pDTSxjQUFjdUIsR0FBRyxDQUFDLENBQUN0QixHQUFRdUIsb0JBQzFCLDhEQUFDL0IsK0RBQVdBO3dCQUNWZ0MsU0FBU3hCLEVBQUV3QixPQUFPO3dCQUNsQkMsUUFBUXpCLEVBQUV5QixNQUFNO3dCQUNoQmxCLE9BQU9QLEVBQUVPLEtBQUs7d0JBQ2RtQixNQUFNMUIsRUFBRTBCLElBQUk7d0JBQ1pDLE9BQU8zQixFQUFFMkIsS0FBSzt3QkFDZDFCLEtBQUtELEVBQUVDLEdBQUc7dUJBQ0xzQjs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQixDQUFDO0dBakV1QjNCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3RzLnRzeD82MzUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0Q2FyZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1Byb2plY3RzUGFnZS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgcHJvamVjdHNJbmZvIH0gZnJvbSBcIi4uL2RhdGFcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0c1BhZ2UoKSB7XG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZShcIkFsbFwiKTtcblxuICBjb25zdCBmaWx0ZXJlZEFycmF5ID1cbiAgICBmaWx0ZXIgPT09IFwiQWxsXCJcbiAgICAgID8gcHJvamVjdHNJbmZvXG4gICAgICA6IHByb2plY3RzSW5mby5maWx0ZXIoKGk6IGFueSkgPT4gaS50YWcgPT09IGZpbHRlcik7XG5cbiAgY29uc29sZS5sb2coZmlsdGVyLCBcImZpbHRlclwiKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Qcm9qZWN0czwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJDb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcn0gb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKFwiQWxsXCIpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcklubmVyfT48L2Rpdj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkFsbDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKFwiTG9uZyBMb3N0IEZyaWVuZHNcIil9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcklubmVyMn0+PC9kaXY+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5Mb25nIExvc3QgRnJpZW5kczwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKFwiU2lkZSBwcm9qZWN0XCIpfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJJbm5lcjN9PjwvZGl2PlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+U2lkZS1wcm9qZWN0czwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyfSBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoXCJGcmVlbGFuY2VcIil9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVySW5uZXI0fT48L2Rpdj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkZyZWVsYW5jZTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyTGlzdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL2dyaWRfdmlld19GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25Db250YWluZXJ9PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvbGlzdF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRhaW5lcn0+XG4gICAgICAgIHtmaWx0ZXJlZEFycmF5Lm1hcCgoaTogYW55LCBrZXk6IGFueSkgPT4gKFxuICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgd2Vic2l0ZT17aS53ZWJzaXRlfVxuICAgICAgICAgICAgZ2l0aHViPXtpLmdpdGh1Yn1cbiAgICAgICAgICAgIHRpdGxlPXtpLnRpdGxlfVxuICAgICAgICAgICAgdGV4dD17aS50ZXh0fVxuICAgICAgICAgICAgc3RhY2s9e2kuc3RhY2t9XG4gICAgICAgICAgICB0YWc9e2kudGFnfVxuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJQcm9qZWN0Q2FyZCIsInN0eWxlcyIsInByb2plY3RzSW5mbyIsInVzZVN0YXRlIiwiUHJvamVjdHNQYWdlIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwiZmlsdGVyZWRBcnJheSIsImkiLCJ0YWciLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJmaWx0ZXJDb250YWluZXIiLCJvbkNsaWNrIiwiZmlsdGVySW5uZXIiLCJhIiwiaHJlZiIsImZpbHRlcklubmVyMiIsImZpbHRlcklubmVyMyIsImZpbHRlcklubmVyNCIsImZpbHRlckxpc3QiLCJpY29uQ29udGFpbmVyIiwiaW1nIiwic3JjIiwiaWNvbiIsImNhcmRDb250YWluZXIiLCJtYXAiLCJrZXkiLCJ3ZWJzaXRlIiwiZ2l0aHViIiwidGV4dCIsInN0YWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects.tsx\n"));

/***/ })

});