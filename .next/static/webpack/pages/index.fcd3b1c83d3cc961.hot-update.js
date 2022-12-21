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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Basketball; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Basketball.module.scss */ \"./styles/Basketball.module.scss\");\n/* harmony import */ var _styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\nfunction Basketball() {\n    _s();\n    const constraintsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [goal, setGoal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handleDragEnd(event, info) {\n        var _document_getElementById;\n        let hooppos = (_document_getElementById = document.getElementById(\"hoop\")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.getBoundingClientRect();\n        let top = hooppos === null || hooppos === void 0 ? void 0 : hooppos.top;\n        let left = hooppos === null || hooppos === void 0 ? void 0 : hooppos.left;\n        let right = hooppos === null || hooppos === void 0 ? void 0 : hooppos.right;\n        let bottom = hooppos === null || hooppos === void 0 ? void 0 : hooppos.bottom;\n        console.log(top, bottom, left, right, \"top,left\");\n        console.log(info.point.x, info.point.y, \"end\");\n        if (//@ts-ignore\n        info.point.x > left && //@ts-ignore\n        info.point.x < right && //@ts-ignore\n        info.point.y > top && //@ts-ignore\n        info.point.y < bottom) {\n            console.log(\"hola\");\n            setGoal(true);\n        } else setGoal(false);\n    }\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        if (goal) {\n            const handleClick = (e)=>{\n                e.preventDefault();\n                router.push(\"/work\");\n            };\n        }\n    }, [\n        goal\n    ]);\n    console.log(goal, \"goal\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: goal ? \"/work\" : \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"hoop\",\n                    className: (_styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hoop)\n                }, void 0, false, {\n                    fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                ref: constraintsRef,\n                className: (_styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    id: \"ball\",\n                    drag: true,\n                    dragConstraints: constraintsRef,\n                    onDragEnd: handleDragEnd,\n                    className: (_styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ball),\n                    dragSnapToOrigin: false,\n                    whileDrag: {\n                        scale: 1.2\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Basketball, \"eb0U/2T+gcKWQrmfQHipcopaRus=\");\n_c = Basketball;\nvar _c;\n$RefreshReg$(_c, \"Basketball\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jhc2tldGJhbGwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUErQjtBQUNVO0FBQ0Y7QUFDZTtBQUN6QjtBQUNXO0FBQ3hDLE1BQU1PLFNBQVNELHNEQUFTQTtBQUVULFNBQVNFLGFBQWE7O0lBQ25DLE1BQU1DLGlCQUFpQlIsNkNBQU1BLENBQUMsSUFBSTtJQUNsQyxNQUFNLENBQUNTLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUV0QyxTQUFTVSxjQUFjQyxLQUFVLEVBQUVDLElBQVMsRUFBRTtZQUM5QkM7UUFBZCxJQUFJQyxVQUFVRCxDQUFBQSwyQkFBQUEsU0FBU0UsY0FBYyxDQUFDLHFCQUF4QkYsc0NBQUFBLEtBQUFBLElBQUFBLHlCQUFpQ0c7UUFDL0MsSUFBSUMsTUFBTUgsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTRyxHQUFHO1FBQ3RCLElBQUlDLE9BQU9KLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0ksSUFBSTtRQUN4QixJQUFJQyxRQUFRTCxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNLLEtBQUs7UUFDMUIsSUFBSUMsU0FBU04sb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTTSxNQUFNO1FBQzVCQyxRQUFRQyxHQUFHLENBQUNMLEtBQUtHLFFBQVFGLE1BQU1DLE9BQU87UUFDdENFLFFBQVFDLEdBQUcsQ0FBQ1YsS0FBS1csS0FBSyxDQUFDQyxDQUFDLEVBQUVaLEtBQUtXLEtBQUssQ0FBQ0UsQ0FBQyxFQUFFO1FBRXhDLElBQ0UsWUFBWTtRQUNaYixLQUFLVyxLQUFLLENBQUNDLENBQUMsR0FBR04sUUFDZixZQUFZO1FBQ1pOLEtBQUtXLEtBQUssQ0FBQ0MsQ0FBQyxHQUFHTCxTQUNmLFlBQVk7UUFDWlAsS0FBS1csS0FBSyxDQUFDRSxDQUFDLEdBQUdSLE9BQ2YsWUFBWTtRQUNaTCxLQUFLVyxLQUFLLENBQUNFLENBQUMsR0FBR0wsUUFDZjtZQUNBQyxRQUFRQyxHQUFHLENBQUM7WUFDWmIsUUFBUSxJQUFJO1FBQ2QsT0FBT0EsUUFBUSxLQUFLO0lBQ3RCO0lBRUFYLDRDQUFlLENBQUMsSUFBTTtRQUNwQixJQUFJVSxNQUFNO1lBQ1IsTUFBTW1CLGNBQWMsQ0FBQ0MsSUFBVztnQkFDOUJBLEVBQUVDLGNBQWM7Z0JBQ2hCeEIsT0FBT3lCLElBQUksQ0FBQztZQUNkO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ3RCO0tBQUs7SUFDVGEsUUFBUUMsR0FBRyxDQUFDZCxNQUFNO0lBQ2xCLHFCQUNFLDhEQUFDdUI7OzBCQUNDLDhEQUFDNUIsa0RBQUlBO2dCQUFDNkIsTUFBTXhCLE9BQU8sVUFBVSxFQUFFOzBCQUM3Qiw0RUFBQ3VCO29CQUFJRSxJQUFHO29CQUFPQyxXQUFXaEMsNEVBQVc7Ozs7Ozs7Ozs7OzBCQUV2Qyw4REFBQ0QscURBQVU7Z0JBQUNtQyxLQUFLN0I7Z0JBQWdCMkIsV0FBV2hDLGlGQUFnQjswQkFDMUQsNEVBQUNELHFEQUFVO29CQUNUZ0MsSUFBRztvQkFDSEssSUFBSTtvQkFDSkMsaUJBQWlCaEM7b0JBQ2pCaUMsV0FBVzlCO29CQUNYd0IsV0FBV2hDLDRFQUFXO29CQUN0QndDLGtCQUFrQixLQUFLO29CQUN2QkMsV0FBVzt3QkFBRUMsT0FBTztvQkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmxDLENBQUM7R0FwRXVCdEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYXNrZXRiYWxsLnRzeD85YWYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9CYXNrZXRiYWxsLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXNrZXRiYWxsKCkge1xuICBjb25zdCBjb25zdHJhaW50c1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW2dvYWwsIHNldEdvYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZURyYWdFbmQoZXZlbnQ6IGFueSwgaW5mbzogYW55KSB7XG4gICAgbGV0IGhvb3Bwb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvb3BcIik/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCB0b3AgPSBob29wcG9zPy50b3A7XG4gICAgbGV0IGxlZnQgPSBob29wcG9zPy5sZWZ0O1xuICAgIGxldCByaWdodCA9IGhvb3Bwb3M/LnJpZ2h0O1xuICAgIGxldCBib3R0b20gPSBob29wcG9zPy5ib3R0b207XG4gICAgY29uc29sZS5sb2codG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0LCBcInRvcCxsZWZ0XCIpO1xuICAgIGNvbnNvbGUubG9nKGluZm8ucG9pbnQueCwgaW5mby5wb2ludC55LCBcImVuZFwiKTtcblxuICAgIGlmIChcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgaW5mby5wb2ludC54ID4gbGVmdCAmJlxuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBpbmZvLnBvaW50LnggPCByaWdodCAmJlxuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBpbmZvLnBvaW50LnkgPiB0b3AgJiZcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgaW5mby5wb2ludC55IDwgYm90dG9tXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImhvbGFcIik7XG4gICAgICBzZXRHb2FsKHRydWUpO1xuICAgIH0gZWxzZSBzZXRHb2FsKGZhbHNlKTtcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGdvYWwpIHtcbiAgICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGU6IGFueSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3dvcmtcIik7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2dvYWxdKTtcbiAgY29uc29sZS5sb2coZ29hbCwgXCJnb2FsXCIpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGluayBocmVmPXtnb2FsID8gXCIvd29ya1wiIDogXCJcIn0+XG4gICAgICAgIDxkaXYgaWQ9XCJob29wXCIgY2xhc3NOYW1lPXtzdHlsZXMuaG9vcH0+PC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgICA8bW90aW9uLmRpdiByZWY9e2NvbnN0cmFpbnRzUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGlkPVwiYmFsbFwiXG4gICAgICAgICAgZHJhZ1xuICAgICAgICAgIGRyYWdDb25zdHJhaW50cz17Y29uc3RyYWludHNSZWZ9XG4gICAgICAgICAgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9XG4gICAgICAgICAgZHJhZ1NuYXBUb09yaWdpbj17ZmFsc2V9XG4gICAgICAgICAgd2hpbGVEcmFnPXt7IHNjYWxlOiAxLjIgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgey8qIDxMaW5rIGhyZWY9XCIvd29ya1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICB0b3A6IFwiNDAwcHhcIixcbiAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIGFwbGFzdGFtZVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsInN0eWxlcyIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJyb3V0ZXIiLCJCYXNrZXRiYWxsIiwiY29uc3RyYWludHNSZWYiLCJnb2FsIiwic2V0R29hbCIsImhhbmRsZURyYWdFbmQiLCJldmVudCIsImluZm8iLCJkb2N1bWVudCIsImhvb3Bwb3MiLCJnZXRFbGVtZW50QnlJZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImNvbnNvbGUiLCJsb2ciLCJwb2ludCIsIngiLCJ5IiwidXNlRWZmZWN0IiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiZGl2IiwiaHJlZiIsImlkIiwiY2xhc3NOYW1lIiwiaG9vcCIsInJlZiIsImNvbnRhaW5lciIsImRyYWciLCJkcmFnQ29uc3RyYWludHMiLCJvbkRyYWdFbmQiLCJiYWxsIiwiZHJhZ1NuYXBUb09yaWdpbiIsIndoaWxlRHJhZyIsInNjYWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Basketball.tsx\n"));

/***/ })

});