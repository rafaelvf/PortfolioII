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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Basketball; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Basketball.module.scss */ \"./styles/Basketball.module.scss\");\n/* harmony import */ var _styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Basketball() {\n    _s();\n    const constraintsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [goal, setGoal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //   React.useEffect(() => {\n    //     let ballDiv = document.getElementById(\"ball\");\n    //     //@ts-ignore\n    //     let pos = (ballDiv.style.transform = \"translate(456px,536px)\");\n    //     //@ts-ignore\n    //     setBallPosition(ballDiv.style.transform);\n    //     //@ts-ignore\n    //     console.log(ballDiv);\n    //     //@ts-ignore\n    //     if (ballDiv.style.transform === \"translate(466px,136px)\") {\n    //       setGoal(true);\n    //     } else setGoal(false);\n    //   });\n    function handleDrag(event, info) {\n        console.log(info.offset.x, info.offset.y);\n        if (info.offset.y > 60 && info.offset.y < 220 && info.offset.x > 430 && info.offset.x < 600) {\n            console.log(\"holahola\");\n            setGoal(true);\n        }\n    }\n    function handleDragEnd(event, info) {\n        if (info.offset.y > 60 && info.offset.y < 220 && info.offset.x > 430 && info.offset.x < 600) {\n            console.log(\"hola\");\n            setGoal(true);\n        }\n    }\n    console.log(goal, \"goal\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_2___default().hoop)\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                ref: constraintsRef,\n                className: (_styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    id: \"ball\",\n                    drag: true,\n                    dragConstraints: constraintsRef,\n                    onDrag: handleDrag,\n                    onDragEnd: handleDragEnd,\n                    className: (_styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_2___default().ball),\n                    dragSnapToOrigin: false,\n                    whileDrag: {\n                        scale: 1.2\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Basketball, \"hh7szC+aTHDBMbrb7yOiz+XCD2I=\");\n_c = Basketball;\nvar _c;\n$RefreshReg$(_c, \"Basketball\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jhc2tldGJhbGwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQStCO0FBQ1U7QUFDRjtBQUNlO0FBRXZDLFNBQVNLLGFBQWE7O0lBQ25DLE1BQU1DLGlCQUFpQkwsNkNBQU1BLENBQUMsSUFBSTtJQUNsQyxNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUMsS0FBSztJQUV0Qyw0QkFBNEI7SUFDNUIscURBQXFEO0lBQ3JELG1CQUFtQjtJQUNuQixzRUFBc0U7SUFDdEUsbUJBQW1CO0lBQ25CLGdEQUFnRDtJQUNoRCxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixrRUFBa0U7SUFDbEUsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixRQUFRO0lBQ1IsU0FBU08sV0FBV0MsS0FBVSxFQUFFQyxJQUFTLEVBQUU7UUFDekNDLFFBQVFDLEdBQUcsQ0FBQ0YsS0FBS0csTUFBTSxDQUFDQyxDQUFDLEVBQUVKLEtBQUtHLE1BQU0sQ0FBQ0UsQ0FBQztRQUN4QyxJQUNFTCxLQUFLRyxNQUFNLENBQUNFLENBQUMsR0FBRyxNQUNoQkwsS0FBS0csTUFBTSxDQUFDRSxDQUFDLEdBQUcsT0FDaEJMLEtBQUtHLE1BQU0sQ0FBQ0MsQ0FBQyxHQUFHLE9BQ2hCSixLQUFLRyxNQUFNLENBQUNDLENBQUMsR0FBRyxLQUNoQjtZQUNBSCxRQUFRQyxHQUFHLENBQUM7WUFDWkwsUUFBUSxJQUFJO1FBQ2QsQ0FBQztJQUNIO0lBQ0EsU0FBU1MsY0FBY1AsS0FBVSxFQUFFQyxJQUFTLEVBQUU7UUFDNUMsSUFDRUEsS0FBS0csTUFBTSxDQUFDRSxDQUFDLEdBQUcsTUFDaEJMLEtBQUtHLE1BQU0sQ0FBQ0UsQ0FBQyxHQUFHLE9BQ2hCTCxLQUFLRyxNQUFNLENBQUNDLENBQUMsR0FBRyxPQUNoQkosS0FBS0csTUFBTSxDQUFDQyxDQUFDLEdBQUcsS0FDaEI7WUFDQUgsUUFBUUMsR0FBRyxDQUFDO1lBQ1pMLFFBQVEsSUFBSTtRQUNkLENBQUM7SUFDSDtJQUVBSSxRQUFRQyxHQUFHLENBQUNOLE1BQU07SUFDbEIscUJBQ0UsOERBQUNXOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVdmLDRFQUFXOzs7Ozs7MEJBQzNCLDhEQUFDRCxxREFBVTtnQkFBQ2tCLEtBQUtmO2dCQUFnQmEsV0FBV2YsaUZBQWdCOzBCQUMxRCw0RUFBQ0QscURBQVU7b0JBQ1RvQixJQUFHO29CQUNIQyxJQUFJO29CQUNKQyxpQkFBaUJuQjtvQkFDakJvQixRQUFRakI7b0JBQ1JrQixXQUFXVjtvQkFDWEUsV0FBV2YsNEVBQVc7b0JBQ3RCeUIsa0JBQWtCLEtBQUs7b0JBQ3ZCQyxXQUFXO3dCQUFFQyxPQUFPO29CQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQyxDQUFDO0dBM0R1QjFCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmFza2V0YmFsbC50c3g/OWFmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQmFza2V0YmFsbC5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXNrZXRiYWxsKCkge1xuICBjb25zdCBjb25zdHJhaW50c1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW2dvYWwsIHNldEdvYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgIGxldCBiYWxsRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWxsXCIpO1xuICAvLyAgICAgLy9AdHMtaWdub3JlXG4gIC8vICAgICBsZXQgcG9zID0gKGJhbGxEaXYuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoNDU2cHgsNTM2cHgpXCIpO1xuICAvLyAgICAgLy9AdHMtaWdub3JlXG4gIC8vICAgICBzZXRCYWxsUG9zaXRpb24oYmFsbERpdi5zdHlsZS50cmFuc2Zvcm0pO1xuICAvLyAgICAgLy9AdHMtaWdub3JlXG4gIC8vICAgICBjb25zb2xlLmxvZyhiYWxsRGl2KTtcbiAgLy8gICAgIC8vQHRzLWlnbm9yZVxuICAvLyAgICAgaWYgKGJhbGxEaXYuc3R5bGUudHJhbnNmb3JtID09PSBcInRyYW5zbGF0ZSg0NjZweCwxMzZweClcIikge1xuICAvLyAgICAgICBzZXRHb2FsKHRydWUpO1xuICAvLyAgICAgfSBlbHNlIHNldEdvYWwoZmFsc2UpO1xuICAvLyAgIH0pO1xuICBmdW5jdGlvbiBoYW5kbGVEcmFnKGV2ZW50OiBhbnksIGluZm86IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGluZm8ub2Zmc2V0LngsIGluZm8ub2Zmc2V0LnkpO1xuICAgIGlmIChcbiAgICAgIGluZm8ub2Zmc2V0LnkgPiA2MCAmJlxuICAgICAgaW5mby5vZmZzZXQueSA8IDIyMCAmJlxuICAgICAgaW5mby5vZmZzZXQueCA+IDQzMCAmJlxuICAgICAgaW5mby5vZmZzZXQueCA8IDYwMFxuICAgICkge1xuICAgICAgY29uc29sZS5sb2coXCJob2xhaG9sYVwiKTtcbiAgICAgIHNldEdvYWwodHJ1ZSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZURyYWdFbmQoZXZlbnQ6IGFueSwgaW5mbzogYW55KSB7XG4gICAgaWYgKFxuICAgICAgaW5mby5vZmZzZXQueSA+IDYwICYmXG4gICAgICBpbmZvLm9mZnNldC55IDwgMjIwICYmXG4gICAgICBpbmZvLm9mZnNldC54ID4gNDMwICYmXG4gICAgICBpbmZvLm9mZnNldC54IDwgNjAwXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImhvbGFcIik7XG4gICAgICBzZXRHb2FsKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKGdvYWwsIFwiZ29hbFwiKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob29wfT48L2Rpdj5cbiAgICAgIDxtb3Rpb24uZGl2IHJlZj17Y29uc3RyYWludHNSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgaWQ9XCJiYWxsXCJcbiAgICAgICAgICBkcmFnXG4gICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXtjb25zdHJhaW50c1JlZn1cbiAgICAgICAgICBvbkRyYWc9e2hhbmRsZURyYWd9XG4gICAgICAgICAgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9XG4gICAgICAgICAgZHJhZ1NuYXBUb09yaWdpbj17ZmFsc2V9XG4gICAgICAgICAgd2hpbGVEcmFnPXt7IHNjYWxlOiAxLjIgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwibW90aW9uIiwic3R5bGVzIiwiQmFza2V0YmFsbCIsImNvbnN0cmFpbnRzUmVmIiwiZ29hbCIsInNldEdvYWwiLCJoYW5kbGVEcmFnIiwiZXZlbnQiLCJpbmZvIiwiY29uc29sZSIsImxvZyIsIm9mZnNldCIsIngiLCJ5IiwiaGFuZGxlRHJhZ0VuZCIsImRpdiIsImNsYXNzTmFtZSIsImhvb3AiLCJyZWYiLCJjb250YWluZXIiLCJpZCIsImRyYWciLCJkcmFnQ29uc3RyYWludHMiLCJvbkRyYWciLCJvbkRyYWdFbmQiLCJiYWxsIiwiZHJhZ1NuYXBUb09yaWdpbiIsIndoaWxlRHJhZyIsInNjYWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Basketball.tsx\n"));

/***/ })

});