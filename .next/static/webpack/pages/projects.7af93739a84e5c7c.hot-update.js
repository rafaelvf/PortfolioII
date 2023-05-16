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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProjectCard */ \"./components/ProjectCard.tsx\");\n/* harmony import */ var _styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/ProjectsPage.module.scss */ \"./styles/ProjectsPage.module.scss\");\n/* harmony import */ var _styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ \"./data/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ProjectsPage() {\n    _s();\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"All\");\n    const [grid, setGrid] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const filteredArray = filter === \"All\" ? _data__WEBPACK_IMPORTED_MODULE_2__.projectsInfo : _data__WEBPACK_IMPORTED_MODULE_2__.projectsInfo.filter((i)=>i.tag === filter);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().filterContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().filter),\n                        onClick: ()=>setFilter(\"All\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().filterInner)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"All\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().filter),\n                        onClick: ()=>setFilter(\"Long Lost Friends\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().filterInner2)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"Long Lost Friends\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().filter),\n                        onClick: ()=>setFilter(\"ParagonsNFT\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().filterInner2)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"ParagonsNFT\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().filter),\n                        onClick: ()=>setFilter(\"Side project\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().filterInner3)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"Side-projects\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().filter),\n                        onClick: ()=>setFilter(\"Freelance\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().filterInner4)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: \"Freelance\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().filterList),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: grid ? \"\".concat((_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().iconContainer), \" \").concat((_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().iconContainerTrue)) : (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().iconContainer),\n                                onClick: ()=>setGrid(true),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/grid_view_FILL0_wght400_GRAD0_opsz48.svg\",\n                                    className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: !grid ? \"\".concat((_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().iconContainer), \" \").concat((_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().iconContainerTrue)) : (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().iconContainer),\n                                onClick: ()=>setGrid(false),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/list_FILL0_wght400_GRAD0_opsz48.svg\",\n                                    className: (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: grid ? (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cardContainer) : (_styles_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cardContainerList),\n                children: filteredArray.map((i, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        website: i.website,\n                        github: i.github,\n                        title: i.title,\n                        text: i.text,\n                        stack: i.stack,\n                        tag: i.tag,\n                        grid: grid\n                    }, key, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/projects.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectsPage, \"juThQYj0tJDaAwoo2lgevjVbZ98=\");\n_c = ProjectsPage;\nvar _c;\n$RefreshReg$(_c, \"ProjectsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixLQUFLO3dCQUNkMUIsS0FBS0QsRUFBRUMsR0FBRzt3QkFDVkosTUFBTUE7dUJBQ0QwQjs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQixDQUFDO0dBdEZ1QjdCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3RzLnRzeD82MzUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0Q2FyZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1Byb2plY3RzUGFnZS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgcHJvamVjdHNJbmZvIH0gZnJvbSBcIi4uL2RhdGFcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL05hdlwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0c1BhZ2UoKSB7XG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZShcIkFsbFwiKTtcbiAgY29uc3QgW2dyaWQsIHNldEdyaWRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9XG4gICAgZmlsdGVyID09PSBcIkFsbFwiXG4gICAgICA/IHByb2plY3RzSW5mb1xuICAgICAgOiBwcm9qZWN0c0luZm8uZmlsdGVyKChpOiBhbnkpID0+IGkudGFnID09PSBmaWx0ZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPE5hdiAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Qcm9qZWN0czwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJDb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcn0gb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKFwiQWxsXCIpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcklubmVyfT48L2Rpdj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkFsbDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKFwiTG9uZyBMb3N0IEZyaWVuZHNcIil9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcklubmVyMn0+PC9kaXY+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5Mb25nIExvc3QgRnJpZW5kczwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyfSBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoXCJQYXJhZ29uc05GVFwiKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJJbm5lcjJ9PjwvZGl2PlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+UGFyYWdvbnNORlQ8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcihcIlNpZGUgcHJvamVjdFwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVySW5uZXIzfT48L2Rpdj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlNpZGUtcHJvamVjdHM8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcn0gb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKFwiRnJlZWxhbmNlXCIpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcklubmVyNH0+PC9kaXY+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5GcmVlbGFuY2U8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckxpc3R9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIGdyaWRcbiAgICAgICAgICAgICAgICA/IGAke3N0eWxlcy5pY29uQ29udGFpbmVyfSAke3N0eWxlcy5pY29uQ29udGFpbmVyVHJ1ZX1gXG4gICAgICAgICAgICAgICAgOiBzdHlsZXMuaWNvbkNvbnRhaW5lclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0R3JpZCh0cnVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9ncmlkX3ZpZXdfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgIWdyaWRcbiAgICAgICAgICAgICAgICA/IGAke3N0eWxlcy5pY29uQ29udGFpbmVyfSAke3N0eWxlcy5pY29uQ29udGFpbmVyVHJ1ZX1gXG4gICAgICAgICAgICAgICAgOiBzdHlsZXMuaWNvbkNvbnRhaW5lclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0R3JpZChmYWxzZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvbGlzdF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtncmlkID8gc3R5bGVzLmNhcmRDb250YWluZXIgOiBzdHlsZXMuY2FyZENvbnRhaW5lckxpc3R9PlxuICAgICAgICB7ZmlsdGVyZWRBcnJheS5tYXAoKGk6IGFueSwga2V5OiBhbnkpID0+IChcbiAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgIHdlYnNpdGU9e2kud2Vic2l0ZX1cbiAgICAgICAgICAgIGdpdGh1Yj17aS5naXRodWJ9XG4gICAgICAgICAgICB0aXRsZT17aS50aXRsZX1cbiAgICAgICAgICAgIHRleHQ9e2kudGV4dH1cbiAgICAgICAgICAgIHN0YWNrPXtpLnN0YWNrfVxuICAgICAgICAgICAgdGFnPXtpLnRhZ31cbiAgICAgICAgICAgIGdyaWQ9e2dyaWR9XG4gICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlByb2plY3RDYXJkIiwic3R5bGVzIiwicHJvamVjdHNJbmZvIiwidXNlU3RhdGUiLCJOYXYiLCJQcm9qZWN0c1BhZ2UiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJncmlkIiwic2V0R3JpZCIsImZpbHRlcmVkQXJyYXkiLCJpIiwidGFnIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJmaWx0ZXJDb250YWluZXIiLCJvbkNsaWNrIiwiZmlsdGVySW5uZXIiLCJhIiwiaHJlZiIsImZpbHRlcklubmVyMiIsImZpbHRlcklubmVyMyIsImZpbHRlcklubmVyNCIsImZpbHRlckxpc3QiLCJpY29uQ29udGFpbmVyIiwiaWNvbkNvbnRhaW5lclRydWUiLCJpbWciLCJzcmMiLCJpY29uIiwiY2FyZENvbnRhaW5lciIsImNhcmRDb250YWluZXJMaXN0IiwibWFwIiwia2V5Iiwid2Vic2l0ZSIsImdpdGh1YiIsInRleHQiLCJzdGFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects.tsx\n"));

/***/ })

});