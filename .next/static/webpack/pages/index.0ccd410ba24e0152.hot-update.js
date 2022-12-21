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

/***/ "./components/Basketball.tsx":
/*!***********************************!*\
  !*** ./components/Basketball.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Basketball; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Basketball.module.scss */ \"./styles/Basketball.module.scss\");\n/* harmony import */ var _styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Basketball() {\n    _s();\n    const constraintsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [goal, setGoal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handleDragEnd(event, info) {\n        var _document_getElementById;\n        let hooppos = (_document_getElementById = document.getElementById(\"hoop\")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.getBoundingClientRect();\n        let top = hooppos === null || hooppos === void 0 ? void 0 : hooppos.top;\n        let left = hooppos === null || hooppos === void 0 ? void 0 : hooppos.left;\n        let right = hooppos === null || hooppos === void 0 ? void 0 : hooppos.right;\n        let bottom = hooppos === null || hooppos === void 0 ? void 0 : hooppos.bottom;\n        console.log(top, bottom, left, right, \"top,left\");\n        console.log(info.point.x, info.point.y, \"end\");\n        if (//@ts-ignore\n        info.point.x > left && //@ts-ignore\n        info.point.x < right && //@ts-ignore\n        info.point.y > top && //@ts-ignore\n        info.point.y < bottom) {\n            console.log(\"hola\");\n            setGoal(true);\n        } else setGoal(false);\n    }\n    //   React.useEffect(() => {\n    //     if (goal) {\n    //       <Link href=\"/work\" />;\n    //     }\n    //   }, [goal]);\n    console.log(goal, \"goal\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/work\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"hoop\",\n                    className: (_styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hoop)\n                }, void 0, false, {\n                    fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                ref: constraintsRef,\n                className: (_styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    id: \"ball\",\n                    drag: true,\n                    dragConstraints: constraintsRef,\n                    onDragEnd: handleDragEnd,\n                    className: (_styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_3___default().ball),\n                    dragSnapToOrigin: false,\n                    whileDrag: {\n                        scale: 1.2\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Basketball, \"hh7szC+aTHDBMbrb7yOiz+XCD2I=\");\n_c = Basketball;\nvar _c;\n$RefreshReg$(_c, \"Basketball\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jhc2tldGJhbGwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDVTtBQUNGO0FBQ2U7QUFDekI7QUFFZCxTQUFTTSxhQUFhOztJQUNuQyxNQUFNQyxpQkFBaUJOLDZDQUFNQSxDQUFDLElBQUk7SUFDbEMsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDLEtBQUs7SUFFdEMsU0FBU1EsY0FBY0MsS0FBVSxFQUFFQyxJQUFTLEVBQUU7WUFDOUJDO1FBQWQsSUFBSUMsVUFBVUQsQ0FBQUEsMkJBQUFBLFNBQVNFLGNBQWMsQ0FBQyxxQkFBeEJGLHNDQUFBQSxLQUFBQSxJQUFBQSx5QkFBaUNHO1FBQy9DLElBQUlDLE1BQU1ILG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0csR0FBRztRQUN0QixJQUFJQyxPQUFPSixvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNJLElBQUk7UUFDeEIsSUFBSUMsUUFBUUwsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTSyxLQUFLO1FBQzFCLElBQUlDLFNBQVNOLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU00sTUFBTTtRQUM1QkMsUUFBUUMsR0FBRyxDQUFDTCxLQUFLRyxRQUFRRixNQUFNQyxPQUFPO1FBQ3RDRSxRQUFRQyxHQUFHLENBQUNWLEtBQUtXLEtBQUssQ0FBQ0MsQ0FBQyxFQUFFWixLQUFLVyxLQUFLLENBQUNFLENBQUMsRUFBRTtRQUV4QyxJQUNFLFlBQVk7UUFDWmIsS0FBS1csS0FBSyxDQUFDQyxDQUFDLEdBQUdOLFFBQ2YsWUFBWTtRQUNaTixLQUFLVyxLQUFLLENBQUNDLENBQUMsR0FBR0wsU0FDZixZQUFZO1FBQ1pQLEtBQUtXLEtBQUssQ0FBQ0UsQ0FBQyxHQUFHUixPQUNmLFlBQVk7UUFDWkwsS0FBS1csS0FBSyxDQUFDRSxDQUFDLEdBQUdMLFFBQ2Y7WUFDQUMsUUFBUUMsR0FBRyxDQUFDO1lBQ1piLFFBQVEsSUFBSTtRQUNkLE9BQU9BLFFBQVEsS0FBSztJQUN0QjtJQUNBLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEJZLFFBQVFDLEdBQUcsQ0FBQ2QsTUFBTTtJQUNsQixxQkFDRSw4REFBQ2tCOzswQkFDQyw4REFBQ3JCLGtEQUFJQTtnQkFBQ3NCLE1BQUs7MEJBQ1QsNEVBQUNEO29CQUFJRSxJQUFHO29CQUFPQyxXQUFXekIsNEVBQVc7Ozs7Ozs7Ozs7OzBCQUV2Qyw4REFBQ0QscURBQVU7Z0JBQUM0QixLQUFLeEI7Z0JBQWdCc0IsV0FBV3pCLGlGQUFnQjswQkFDMUQsNEVBQUNELHFEQUFVO29CQUNUeUIsSUFBRztvQkFDSEssSUFBSTtvQkFDSkMsaUJBQWlCM0I7b0JBQ2pCNEIsV0FBV3pCO29CQUNYbUIsV0FBV3pCLDRFQUFXO29CQUN0QmlDLGtCQUFrQixLQUFLO29CQUN2QkMsV0FBVzt3QkFBRUMsT0FBTztvQkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEMsQ0FBQztHQW5EdUJqQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jhc2tldGJhbGwudHN4PzlhZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0Jhc2tldGJhbGwubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFza2V0YmFsbCgpIHtcbiAgY29uc3QgY29uc3RyYWludHNSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtnb2FsLCBzZXRHb2FsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiBoYW5kbGVEcmFnRW5kKGV2ZW50OiBhbnksIGluZm86IGFueSkge1xuICAgIGxldCBob29wcG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob29wXCIpPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgdG9wID0gaG9vcHBvcz8udG9wO1xuICAgIGxldCBsZWZ0ID0gaG9vcHBvcz8ubGVmdDtcbiAgICBsZXQgcmlnaHQgPSBob29wcG9zPy5yaWdodDtcbiAgICBsZXQgYm90dG9tID0gaG9vcHBvcz8uYm90dG9tO1xuICAgIGNvbnNvbGUubG9nKHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCwgXCJ0b3AsbGVmdFwiKTtcbiAgICBjb25zb2xlLmxvZyhpbmZvLnBvaW50LngsIGluZm8ucG9pbnQueSwgXCJlbmRcIik7XG5cbiAgICBpZiAoXG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIGluZm8ucG9pbnQueCA+IGxlZnQgJiZcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgaW5mby5wb2ludC54IDwgcmlnaHQgJiZcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgaW5mby5wb2ludC55ID4gdG9wICYmXG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIGluZm8ucG9pbnQueSA8IGJvdHRvbVxuICAgICkge1xuICAgICAgY29uc29sZS5sb2coXCJob2xhXCIpO1xuICAgICAgc2V0R29hbCh0cnVlKTtcbiAgICB9IGVsc2Ugc2V0R29hbChmYWxzZSk7XG4gIH1cbiAgLy8gICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgICAgaWYgKGdvYWwpIHtcbiAgLy8gICAgICAgPExpbmsgaHJlZj1cIi93b3JrXCIgLz47XG4gIC8vICAgICB9XG4gIC8vICAgfSwgW2dvYWxdKTtcbiAgY29uc29sZS5sb2coZ29hbCwgXCJnb2FsXCIpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGluayBocmVmPVwiL3dvcmtcIj5cbiAgICAgICAgPGRpdiBpZD1cImhvb3BcIiBjbGFzc05hbWU9e3N0eWxlcy5ob29wfT48L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxtb3Rpb24uZGl2IHJlZj17Y29uc3RyYWludHNSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgaWQ9XCJiYWxsXCJcbiAgICAgICAgICBkcmFnXG4gICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXtjb25zdHJhaW50c1JlZn1cbiAgICAgICAgICBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH1cbiAgICAgICAgICBkcmFnU25hcFRvT3JpZ2luPXtmYWxzZX1cbiAgICAgICAgICB3aGlsZURyYWc9e3sgc2NhbGU6IDEuMiB9fVxuICAgICAgICAvPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJtb3Rpb24iLCJzdHlsZXMiLCJMaW5rIiwiQmFza2V0YmFsbCIsImNvbnN0cmFpbnRzUmVmIiwiZ29hbCIsInNldEdvYWwiLCJoYW5kbGVEcmFnRW5kIiwiZXZlbnQiLCJpbmZvIiwiZG9jdW1lbnQiLCJob29wcG9zIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJjb25zb2xlIiwibG9nIiwicG9pbnQiLCJ4IiwieSIsImRpdiIsImhyZWYiLCJpZCIsImNsYXNzTmFtZSIsImhvb3AiLCJyZWYiLCJjb250YWluZXIiLCJkcmFnIiwiZHJhZ0NvbnN0cmFpbnRzIiwib25EcmFnRW5kIiwiYmFsbCIsImRyYWdTbmFwVG9PcmlnaW4iLCJ3aGlsZURyYWciLCJzY2FsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Basketball.tsx\n"));

/***/ })

});