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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Birds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Birds */ \"./components/Birds.tsx\");\n/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Skills */ \"./components/Skills.tsx\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Contact */ \"./components/Contact.tsx\");\n/* harmony import */ var _components_ProjectsFramer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ProjectsFramer */ \"./components/ProjectsFramer.tsx\");\n/* harmony import */ var _components_ProjectsMobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ProjectsMobile */ \"./components/ProjectsMobile.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const isMobile = ()=>{\n        if (false) {} // Check if running on the server\n        return window.matchMedia(\"(max-width: 767px)\").matches;\n    };\n    const isSafari = ()=>{\n        if (false) {} // Check if running on the server\n        return isMobile() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);\n    };\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const { scrollY , scrollYProgress  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useScroll)({\n        target: ref,\n        offset: [\n            \"start end\",\n            \"end start\"\n        ]\n    });\n    const opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform)(scrollY, [\n        100,\n        200,\n        450,\n        495\n    ], [\n        0,\n        1,\n        1,\n        0\n    ]);\n    const scale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform)(scrollY, [\n        0,\n        100\n    ], [\n        1,\n        0\n    ]);\n    const scale2 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform)(scrollY, [\n        100,\n        250,\n        450,\n        495\n    ], [\n        0,\n        1,\n        1,\n        0\n    ]);\n    const width = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform)(scrollY, [\n        200,\n        400\n    ], [\n        300,\n        500\n    ]);\n    const translate = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform)(scrollY, [\n        250,\n        400\n    ], [\n        0,\n        100\n    ]);\n    const height = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform)(scrollY, [\n        400,\n        500\n    ], [\n        200,\n        0\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Rafael Viter\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                ref: ref,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().heroContainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Birds__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().videoContainer),\n                                children: isSafari() ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.video, {\n                                    style: {\n                                        scale: scale\n                                    },\n                                    muted: true,\n                                    playsInline: true,\n                                    autoPlay: true,\n                                    preload: \"auto\",\n                                    loop: true,\n                                    // controls={true}\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().title),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                        src: \"/video2.mp4\",\n                                        type: \"video/mp4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.img, {\n                                    style: {\n                                        scale: scale\n                                    },\n                                    src: \"/video2.png\",\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().title)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/expand_more_FILL0_wght400_GRAD0_opsz48.svg\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().arrow)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().textContainer),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                    style: {\n                                        opacity,\n                                        scale: scale2,\n                                        height\n                                    },\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().text),\n                                    children: [\n                                        \"I'm a developer who loves to create good user experiences. My goal is to build innovative digital products that have a positive impact on society.\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectsFramer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectsMobile__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Skills__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"E1ajWaXnAbnkEqoUpfAaenGPxxQ=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_8__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_8__.useTransform\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxxRUFBVzs7d0NBQ3ZCO3dDQUdvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU16Qiw4REFBQ0ssa0VBQWNBOzs7OztrQ0FDZiw4REFBQ0Msa0VBQWNBOzs7OztrQ0FDZiw4REFBQ0gsMERBQU1BOzs7OztrQ0FDUCw4REFBQ0MsMkRBQU9BOzs7Ozs7Ozs7Ozs7O0FBSWhCLENBQUM7R0E1RnVCTTs7UUFjZUYsb0RBQVNBO1FBSTlCQyx1REFBWUE7UUFDZEEsdURBQVlBO1FBQ1hBLHVEQUFZQTtRQUNiQSx1REFBWUE7UUFDUkEsdURBQVlBO1FBQ2ZBLHVEQUFZQTs7O0tBdkJMQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIkBuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2UsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCaXJkcyBmcm9tIFwiLi4vY29tcG9uZW50cy9CaXJkc1wiO1xuaW1wb3J0IFNraWxscyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ta2lsbHNcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhY3RcIjtcbmltcG9ydCBQcm9qZWN0c0ZyYW1lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0c0ZyYW1lclwiO1xuaW1wb3J0IFByb2plY3RzTW9iaWxlIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2plY3RzTW9iaWxlXCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCwgdXNlVHJhbnNmb3JtIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBpc01vYmlsZSA9ICgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGZhbHNlOyAvLyBDaGVjayBpZiBydW5uaW5nIG9uIHRoZSBzZXJ2ZXJcbiAgICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIikubWF0Y2hlcztcbiAgfTtcblxuICBjb25zdCBpc1NhZmFyaSA9ICgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGZhbHNlOyAvLyBDaGVjayBpZiBydW5uaW5nIG9uIHRoZSBzZXJ2ZXJcbiAgICByZXR1cm4gKFxuICAgICAgaXNNb2JpbGUoKSAmJiAvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHsgc2Nyb2xsWSwgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xuICAgIHRhcmdldDogcmVmLFxuICAgIG9mZnNldDogW1wic3RhcnQgZW5kXCIsIFwiZW5kIHN0YXJ0XCJdLFxuICB9KTtcbiAgY29uc3Qgb3BhY2l0eSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZLCBbMTAwLCAyMDAsIDQ1MCwgNDk1XSwgWzAsIDEsIDEsIDBdKTtcbiAgY29uc3Qgc2NhbGUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWSwgWzAsIDEwMF0sIFsxLCAwXSk7XG4gIGNvbnN0IHNjYWxlMiA9IHVzZVRyYW5zZm9ybShzY3JvbGxZLCBbMTAwLCAyNTAsIDQ1MCwgNDk1XSwgWzAsIDEsIDEsIDBdKTtcbiAgY29uc3Qgd2lkdGggPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWSwgWzIwMCwgNDAwXSwgWzMwMCwgNTAwXSk7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZLCBbMjUwLCA0MDBdLCBbMCwgMTAwXSk7XG4gIGNvbnN0IGhlaWdodCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZLCBbNDAwLCA1MDBdLCBbMjAwLCAwXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SYWZhZWwgVml0ZXI8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIHJlZj17cmVmfSBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgey8qIDxTcXVhcmVzIC8+ICovfVxuICAgICAgICB7LyogPEJhc2tldGJhbGwgLz4gKi99XG4gICAgICAgIHsvKiA8ZGl2XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UmVhbExpZmUoIXJlYWxMaWZlKX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25SZWFsfVxuICAgICAgICA+XG4gICAgICAgICAge3JlYWxMaWZlID8gXCJQcmVzcyBmb3IgYW5pbWF0ZWQgd2F2ZVwiIDogXCIgUHJlc3MgZm9yIFJlYWwgTGlmZSB3YXZlXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7cmVhbExpZmUgPyA8V2F2ZVJlYWwgLz4gOiA8V2F2ZSAvPn0gKi99XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvQ29udGFpbmVyfT5cbiAgICAgICAgICA8QmlyZHMgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvQ29udGFpbmVyfT5cbiAgICAgICAgICAgIHtpc1NhZmFyaSgpID8gKFxuICAgICAgICAgICAgICA8bW90aW9uLnZpZGVvXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgc2NhbGU6IHNjYWxlIH19XG4gICAgICAgICAgICAgICAgbXV0ZWRcbiAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxuICAgICAgICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgICAgICAgcHJlbG9hZD1cImF1dG9cIlxuICAgICAgICAgICAgICAgIGxvb3A9e3RydWV9XG4gICAgICAgICAgICAgICAgLy8gY29udHJvbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c291cmNlIHNyYz1cIi92aWRlbzIubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgICAgICAgIDwvbW90aW9uLnZpZGVvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBzY2FsZTogc2NhbGUgfX1cbiAgICAgICAgICAgICAgICBzcmM9XCIvdmlkZW8yLnBuZ1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9leHBhbmRfbW9yZV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmdcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3d9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRDb250YWluZXJ9PlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eSwgc2NhbGU6IHNjYWxlMiwgaGVpZ2h0IH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEknbSBhIGRldmVsb3BlciB3aG8gbG92ZXMgdG8gY3JlYXRlIGdvb2QgdXNlciBleHBlcmllbmNlcy4gTXkgZ29hbFxuICAgICAgICAgICAgICBpcyB0byBidWlsZCBpbm5vdmF0aXZlIGRpZ2l0YWwgcHJvZHVjdHMgdGhhdCBoYXZlIGEgcG9zaXRpdmVcbiAgICAgICAgICAgICAgaW1wYWN0IG9uIHNvY2lldHkue1wiIFwifVxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5GSVhFUzwvZGl2PiAqL31cbiAgICAgICAgICB7LyogPE11c2ljUGxheWVyIC8+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFByb2plY3RzRnJhbWVyIC8+XG4gICAgICAgIDxQcm9qZWN0c01vYmlsZSAvPlxuICAgICAgICA8U2tpbGxzIC8+XG4gICAgICAgIDxDb250YWN0IC8+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwic3R5bGVzIiwidXNlUmVmIiwiQmlyZHMiLCJTa2lsbHMiLCJDb250YWN0IiwiUHJvamVjdHNGcmFtZXIiLCJQcm9qZWN0c01vYmlsZSIsIm1vdGlvbiIsInVzZVNjcm9sbCIsInVzZVRyYW5zZm9ybSIsIkhvbWUiLCJpc01vYmlsZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiaXNTYWZhcmkiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwicmVmIiwic2Nyb2xsWSIsInNjcm9sbFlQcm9ncmVzcyIsInRhcmdldCIsIm9mZnNldCIsIm9wYWNpdHkiLCJzY2FsZSIsInNjYWxlMiIsIndpZHRoIiwidHJhbnNsYXRlIiwiaGVpZ2h0IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoZXJvQ29udGFpbmVyIiwidmlkZW9Db250YWluZXIiLCJ2aWRlbyIsInN0eWxlIiwibXV0ZWQiLCJwbGF5c0lubGluZSIsImF1dG9QbGF5IiwicHJlbG9hZCIsImxvb3AiLCJzb3VyY2UiLCJzcmMiLCJ0eXBlIiwiaW1nIiwiYXJyb3ciLCJ0ZXh0Q29udGFpbmVyIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});