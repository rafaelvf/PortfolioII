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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Skills.module.scss */ \"./styles/Skills.module.scss\");\n/* harmony import */ var _styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n//import { initialTabs as tabs } from \"./ingredients\";\n\nconst tabs = [\n    {\n        title: \"Languages\",\n        stack: [\n            \"/typescript-icon-svgrepo-com.svg\",\n            \"/javascript-svgrepo-com.svg\",\n            \"/c.png\",\n            \"/sql-svgrepo-com.svg\",\n            \"/html-5-svgrepo-com.svg\",\n            \"/css-3-svgrepo-com.svg\"\n        ]\n    },\n    {\n        title: \"Frameworks\",\n        stack: [\n            \"/nextjs-svgrepo-com.svg\",\n            \"/express-svgrepo-com.svg\",\n            \"/tailwind-svgrepo-com.svg\"\n        ]\n    },\n    {\n        title: \"Libraries\",\n        stack: [\n            \"/react-javascript-js-framework-facebook-svgrepo-com.svg\",\n            \"/redux-svgrepo-com.svg\",\n            \"/node-js-svgrepo-com.svg\",\n            \"/mongoose.png\",\n            \"/gsap.svg\",\n            \"/framer-motion-seeklogo.com.svg\"\n        ]\n    },\n    {\n        title: \"Tools\",\n        stack: [\n            \"/git-svgrepo-com.svg\",\n            \"/github-color-svgrepo-com.svg\",\n            \"/scss2-svgrepo-com.svg\",\n            \"/powerbi-svgrepo-com.svg\"\n        ]\n    },\n    {\n        title: \"ORM\",\n        stack: [\n            \"/sequelize-svgrepo-com.svg\"\n        ]\n    },\n    {\n        title: \"Databases\",\n        stack: [\n            \"/postgressql.png\",\n            \"/mongodb-logo-svgrepo-com.svg\"\n        ]\n    }\n];\nfunction Skills() {\n    _s();\n    const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tabs[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: [\n                    \"Skills\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/build_FILL0_wght400_GRAD0_opsz48.svg\",\n                        className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().toolimg)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().window),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().nav),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().ul),\n                            children: tabs.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: item === selectedTab ? \"\".concat((_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().selected), \" \").concat((_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().li)) : \"\".concat((_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().li)),\n                                    onClick: ()=>setSelectedTab(item),\n                                    children: [\n                                        \"\".concat(item.title),\n                                        item === selectedTab ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                            className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().underline),\n                                            layoutId: \"underline\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, this) : null\n                                    ]\n                                }, item.title, true, {\n                                    fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().main),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                            exitBeforeEnter: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                initial: {\n                                    y: 10,\n                                    opacity: 0\n                                },\n                                animate: {\n                                    y: 0,\n                                    opacity: 1\n                                },\n                                exit: {\n                                    y: -10,\n                                    opacity: 0\n                                },\n                                transition: {\n                                    duration: 0.2\n                                },\n                                className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().logoContainer),\n                                children: selectedTab && selectedTab.stack.map((i, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: i,\n                                        className: (_styles_Skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default().logos)\n                                    }, key, false, {\n                                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 19\n                                    }, this))\n                            }, selectedTab ? selectedTab.title : \"empty\", false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Skills.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(Skills, \"72Ky/m28cK7TA0BsM8KFgzoTljo=\");\n_c = Skills;\nvar _c;\n$RefreshReg$(_c, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxscy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBa0Q7QUFDakI7QUFDakMsc0RBQXNEO0FBQ0U7QUFFeEQsTUFBTUksT0FBTztJQUNYO1FBQ0VDLE9BQU87UUFDUEMsT0FBTztZQUNMO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLE9BQU87WUFDTDtZQUNBO1lBQ0E7U0FDRDtJQUNIO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxPQUFPO1lBQ0w7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7SUFDSDtJQUNBO1FBQ0VELE9BQU87UUFDUEMsT0FBTztZQUNMO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7SUFDSDtJQUNBO1FBQ0VELE9BQU87UUFDUEMsT0FBTztZQUFDO1NBQTZCO0lBQ3ZDO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxPQUFPO1lBQUM7WUFBb0I7U0FBZ0M7SUFDOUQ7Q0FDRDtBQUVjLFNBQVNDLFNBQVM7O0lBQy9CLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBQ0csSUFBSSxDQUFDLEVBQUU7SUFDdEQscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVdYLDZFQUFnQjs7MEJBQzlCLDhEQUFDVTtnQkFBSUMsV0FBV1gseUVBQVk7O29CQUFFO2tDQUU1Qiw4REFBQ2E7d0JBQ0NDLEtBQUk7d0JBQ0pILFdBQVdYLDJFQUFjOzs7Ozs7Ozs7Ozs7MEJBRzdCLDhEQUFDVTtnQkFBSUMsV0FBV1gsMEVBQWE7O2tDQUMzQiw4REFBQ2lCO3dCQUFJTixXQUFXWCx1RUFBVTtrQ0FDeEIsNEVBQUNrQjs0QkFBR1AsV0FBV1gsc0VBQVM7c0NBQ3JCSSxLQUFLZSxHQUFHLENBQUMsQ0FBQ0MscUJBQ1QsOERBQUNDO29DQUVDVixXQUNFUyxTQUFTWixjQUNMLEdBQXNCUixPQUFuQkEsNEVBQWUsRUFBQyxLQUFhLE9BQVZBLHNFQUFTLElBQy9CLEdBQWEsT0FBVkEsc0VBQVMsQ0FBRTtvQ0FFcEJ1QixTQUFTLElBQU1kLGVBQWVXOzt3Q0FFNUIsR0FBYSxPQUFYQSxLQUFLZixLQUFLO3dDQUNiZSxTQUFTWiw0QkFDUiw4REFBQ04scURBQVU7NENBQ1RTLFdBQVdYLDZFQUFnQjs0Q0FDM0J5QixVQUFTOzs7OzttREFFVCxJQUFJOzttQ0FkSEwsS0FBS2YsS0FBSzs7Ozs7Ozs7Ozs7Ozs7O2tDQW1CdkIsOERBQUNLO3dCQUFJQyxXQUFXWCx3RUFBVztrQ0FDekIsNEVBQUNHLDBEQUFlQTs0QkFBQ3dCLGVBQWU7c0NBQzlCLDRFQUFDekIscURBQVU7Z0NBRVQwQixTQUFTO29DQUFFQyxHQUFHO29DQUFJQyxTQUFTO2dDQUFFO2dDQUM3QkMsU0FBUztvQ0FBRUYsR0FBRztvQ0FBR0MsU0FBUztnQ0FBRTtnQ0FDNUJFLE1BQU07b0NBQUVILEdBQUcsQ0FBQztvQ0FBSUMsU0FBUztnQ0FBRTtnQ0FDM0JHLFlBQVk7b0NBQUVDLFVBQVU7Z0NBQUk7Z0NBQzVCdkIsV0FBV1gsaUZBQW9COzBDQUU5QlEsZUFDQ0EsWUFBWUYsS0FBSyxDQUFDYSxHQUFHLENBQUMsQ0FBQ2lCLEdBQVFDLG9CQUM3Qiw4REFBQ3hCO3dDQUFJQyxLQUFLc0I7d0NBQUd6QixXQUFXWCx5RUFBWTt1Q0FBT3FDOzs7OzsrQkFUMUM3QixjQUFjQSxZQUFZSCxLQUFLLEdBQUcsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUI1RCxDQUFDO0dBdkR1QkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ta2lsbHMudHN4PzZhNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1NraWxscy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vaW1wb3J0IHsgaW5pdGlhbFRhYnMgYXMgdGFicyB9IGZyb20gXCIuL2luZ3JlZGllbnRzXCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IHRhYnMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJMYW5ndWFnZXNcIixcbiAgICBzdGFjazogW1xuICAgICAgXCIvdHlwZXNjcmlwdC1pY29uLXN2Z3JlcG8tY29tLnN2Z1wiLFxuICAgICAgXCIvamF2YXNjcmlwdC1zdmdyZXBvLWNvbS5zdmdcIixcbiAgICAgIFwiL2MucG5nXCIsXG4gICAgICBcIi9zcWwtc3ZncmVwby1jb20uc3ZnXCIsXG4gICAgICBcIi9odG1sLTUtc3ZncmVwby1jb20uc3ZnXCIsXG4gICAgICBcIi9jc3MtMy1zdmdyZXBvLWNvbS5zdmdcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRnJhbWV3b3Jrc1wiLFxuICAgIHN0YWNrOiBbXG4gICAgICBcIi9uZXh0anMtc3ZncmVwby1jb20uc3ZnXCIsXG4gICAgICBcIi9leHByZXNzLXN2Z3JlcG8tY29tLnN2Z1wiLFxuICAgICAgXCIvdGFpbHdpbmQtc3ZncmVwby1jb20uc3ZnXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxpYnJhcmllc1wiLFxuICAgIHN0YWNrOiBbXG4gICAgICBcIi9yZWFjdC1qYXZhc2NyaXB0LWpzLWZyYW1ld29yay1mYWNlYm9vay1zdmdyZXBvLWNvbS5zdmdcIixcbiAgICAgIFwiL3JlZHV4LXN2Z3JlcG8tY29tLnN2Z1wiLFxuICAgICAgXCIvbm9kZS1qcy1zdmdyZXBvLWNvbS5zdmdcIixcbiAgICAgIFwiL21vbmdvb3NlLnBuZ1wiLFxuICAgICAgXCIvZ3NhcC5zdmdcIixcbiAgICAgIFwiL2ZyYW1lci1tb3Rpb24tc2Vla2xvZ28uY29tLnN2Z1wiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJUb29sc1wiLFxuICAgIHN0YWNrOiBbXG4gICAgICBcIi9naXQtc3ZncmVwby1jb20uc3ZnXCIsXG4gICAgICBcIi9naXRodWItY29sb3Itc3ZncmVwby1jb20uc3ZnXCIsXG4gICAgICBcIi9zY3NzMi1zdmdyZXBvLWNvbS5zdmdcIixcbiAgICAgIFwiL3Bvd2VyYmktc3ZncmVwby1jb20uc3ZnXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk9STVwiLFxuICAgIHN0YWNrOiBbXCIvc2VxdWVsaXplLXN2Z3JlcG8tY29tLnN2Z1wiXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkRhdGFiYXNlc1wiLFxuICAgIHN0YWNrOiBbXCIvcG9zdGdyZXNzcWwucG5nXCIsIFwiL21vbmdvZGItbG9nby1zdmdyZXBvLWNvbS5zdmdcIl0sXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2lsbHMoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZFRhYiwgc2V0U2VsZWN0ZWRUYWJdID0gdXNlU3RhdGUodGFic1swXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgIFNraWxsc1xuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2J1aWxkX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Z1wiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudG9vbGltZ31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53aW5kb3d9PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnVsfT5cbiAgICAgICAgICAgIHt0YWJzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgIGl0ZW0gPT09IHNlbGVjdGVkVGFiXG4gICAgICAgICAgICAgICAgICAgID8gYCR7c3R5bGVzLnNlbGVjdGVkfSAke3N0eWxlcy5saX1gXG4gICAgICAgICAgICAgICAgICAgIDogYCR7c3R5bGVzLmxpfWBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRUYWIoaXRlbSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YCR7aXRlbS50aXRsZX1gfVxuICAgICAgICAgICAgICAgIHtpdGVtID09PSBzZWxlY3RlZFRhYiA/IChcbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnVuZGVybGluZX1cbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0SWQ9XCJ1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAga2V5PXtzZWxlY3RlZFRhYiA/IHNlbGVjdGVkVGFiLnRpdGxlIDogXCJlbXB0eVwifVxuICAgICAgICAgICAgICBpbml0aWFsPXt7IHk6IDEwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICBleGl0PXt7IHk6IC0xMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9nb0NvbnRhaW5lcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3NlbGVjdGVkVGFiICYmXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUYWIuc3RhY2subWFwKChpOiBhbnksIGtleTogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aX0gY2xhc3NOYW1lPXtzdHlsZXMubG9nb3N9IGtleT17a2V5fSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwidGFicyIsInRpdGxlIiwic3RhY2siLCJTa2lsbHMiLCJzZWxlY3RlZFRhYiIsInNldFNlbGVjdGVkVGFiIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaW1nIiwic3JjIiwidG9vbGltZyIsIndpbmRvdyIsIm5hdiIsInVsIiwibWFwIiwiaXRlbSIsImxpIiwic2VsZWN0ZWQiLCJvbkNsaWNrIiwidW5kZXJsaW5lIiwibGF5b3V0SWQiLCJtYWluIiwiZXhpdEJlZm9yZUVudGVyIiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJsb2dvQ29udGFpbmVyIiwiaSIsImtleSIsImxvZ29zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Skills.tsx\n"));

/***/ })

});