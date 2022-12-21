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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Basketball; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Basketball.module.scss */ \"./styles/Basketball.module.scss\");\n/* harmony import */ var _styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Basketball() {\n    _s();\n    const constraintsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [goal, setGoal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleClick = (e)=>{\n        e.preventDefault();\n        router.push(\"/work\");\n    };\n    function handleDragEnd(event, info) {\n        var _document_getElementById;\n        let hooppos = (_document_getElementById = document.getElementById(\"hoop\")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.getBoundingClientRect();\n        let top = hooppos === null || hooppos === void 0 ? void 0 : hooppos.top;\n        let left = hooppos === null || hooppos === void 0 ? void 0 : hooppos.left;\n        let right = hooppos === null || hooppos === void 0 ? void 0 : hooppos.right;\n        let bottom = hooppos === null || hooppos === void 0 ? void 0 : hooppos.bottom;\n        if (//@ts-ignore\n        info.point.x > left && //@ts-ignore\n        info.point.x < right && //@ts-ignore\n        info.point.y > top && //@ts-ignore\n        info.point.y < bottom) {\n            setGoal(true);\n            handleClick(event);\n        } else setGoal(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: goal ? \"/work\" : \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"hoop\",\n                    className: (_styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hoop)\n                }, void 0, false, {\n                    fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                ref: constraintsRef,\n                className: (_styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_4___default().position),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        id: \"ball\",\n                        drag: true,\n                        dragConstraints: constraintsRef,\n                        onDragEnd: handleDragEnd,\n                        className: (_styles_Basketball_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ball),\n                        dragSnapToOrigin: false,\n                        whileDrag: {\n                            scale: 1.2\n                        },\n                        children: \"Work\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Basketball.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Basketball, \"fJunXnB0hZd0FwIBRUu7p5FBY7Y=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Basketball;\nvar _c;\n$RefreshReg$(_c, \"Basketball\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jhc2tldGJhbGwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUErQjtBQUNVO0FBQ0Y7QUFDZTtBQUN6QjtBQUNXO0FBRXpCLFNBQVNPLGFBQWE7O0lBQ25DLE1BQU1DLGlCQUFpQlAsNkNBQU1BLENBQUMsSUFBSTtJQUNsQyxNQUFNLENBQUNRLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUN0QyxNQUFNUyxTQUFTTCxzREFBU0E7SUFFeEIsTUFBTU0sY0FBYyxDQUFDQyxJQUFXO1FBQzlCQSxFQUFFQyxjQUFjO1FBQ2hCSCxPQUFPSSxJQUFJLENBQUM7SUFDZDtJQUVBLFNBQVNDLGNBQWNDLEtBQVUsRUFBRUMsSUFBUyxFQUFFO1lBQzlCQztRQUFkLElBQUlDLFVBQVVELENBQUFBLDJCQUFBQSxTQUFTRSxjQUFjLENBQUMscUJBQXhCRixzQ0FBQUEsS0FBQUEsSUFBQUEseUJBQWlDRztRQUMvQyxJQUFJQyxNQUFNSCxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNHLEdBQUc7UUFDdEIsSUFBSUMsT0FBT0osb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTSSxJQUFJO1FBQ3hCLElBQUlDLFFBQVFMLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0ssS0FBSztRQUMxQixJQUFJQyxTQUFTTixvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNNLE1BQU07UUFFNUIsSUFDRSxZQUFZO1FBQ1pSLEtBQUtTLEtBQUssQ0FBQ0MsQ0FBQyxHQUFHSixRQUNmLFlBQVk7UUFDWk4sS0FBS1MsS0FBSyxDQUFDQyxDQUFDLEdBQUdILFNBQ2YsWUFBWTtRQUNaUCxLQUFLUyxLQUFLLENBQUNFLENBQUMsR0FBR04sT0FDZixZQUFZO1FBQ1pMLEtBQUtTLEtBQUssQ0FBQ0UsQ0FBQyxHQUFHSCxRQUNmO1lBQ0FoQixRQUFRLElBQUk7WUFDWkUsWUFBWUs7UUFDZCxPQUFPUCxRQUFRLEtBQUs7SUFDdEI7SUFFQSxxQkFDRSw4REFBQ29COzswQkFDQyw4REFBQ3pCLGtEQUFJQTtnQkFBQzBCLE1BQU10QixPQUFPLFVBQVUsRUFBRTswQkFDN0IsNEVBQUNxQjtvQkFBSUUsSUFBRztvQkFBT0MsV0FBVzdCLDRFQUFXOzs7Ozs7Ozs7OzswQkFFdkMsOERBQUNELHFEQUFVO2dCQUFDZ0MsS0FBSzNCO2dCQUFnQnlCLFdBQVc3QixpRkFBZ0I7MEJBQzFELDRFQUFDMEI7b0JBQUlHLFdBQVc3QixnRkFBZTs4QkFDN0IsNEVBQUNELHFEQUFVO3dCQUNUNkIsSUFBRzt3QkFDSE0sSUFBSTt3QkFDSkMsaUJBQWlCL0I7d0JBQ2pCZ0MsV0FBV3hCO3dCQUNYaUIsV0FBVzdCLDRFQUFXO3dCQUN0QnNDLGtCQUFrQixLQUFLO3dCQUN2QkMsV0FBVzs0QkFBRUMsT0FBTzt3QkFBSTtrQ0FDekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWCxDQUFDO0dBdER1QnJDOztRQUdQRCxrREFBU0E7OztLQUhGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jhc2tldGJhbGwudHN4PzlhZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0Jhc2tldGJhbGwubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXNrZXRiYWxsKCkge1xuICBjb25zdCBjb25zdHJhaW50c1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW2dvYWwsIHNldEdvYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcm91dGVyLnB1c2goXCIvd29ya1wiKTtcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVEcmFnRW5kKGV2ZW50OiBhbnksIGluZm86IGFueSkge1xuICAgIGxldCBob29wcG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob29wXCIpPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgdG9wID0gaG9vcHBvcz8udG9wO1xuICAgIGxldCBsZWZ0ID0gaG9vcHBvcz8ubGVmdDtcbiAgICBsZXQgcmlnaHQgPSBob29wcG9zPy5yaWdodDtcbiAgICBsZXQgYm90dG9tID0gaG9vcHBvcz8uYm90dG9tO1xuXG4gICAgaWYgKFxuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBpbmZvLnBvaW50LnggPiBsZWZ0ICYmXG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIGluZm8ucG9pbnQueCA8IHJpZ2h0ICYmXG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIGluZm8ucG9pbnQueSA+IHRvcCAmJlxuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBpbmZvLnBvaW50LnkgPCBib3R0b21cbiAgICApIHtcbiAgICAgIHNldEdvYWwodHJ1ZSk7XG4gICAgICBoYW5kbGVDbGljayhldmVudCk7XG4gICAgfSBlbHNlIHNldEdvYWwoZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPExpbmsgaHJlZj17Z29hbCA/IFwiL3dvcmtcIiA6IFwiXCJ9PlxuICAgICAgICA8ZGl2IGlkPVwiaG9vcFwiIGNsYXNzTmFtZT17c3R5bGVzLmhvb3B9PjwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgICAgPG1vdGlvbi5kaXYgcmVmPXtjb25zdHJhaW50c1JlZn0gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3NpdGlvbn0+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGlkPVwiYmFsbFwiXG4gICAgICAgICAgICBkcmFnXG4gICAgICAgICAgICBkcmFnQ29uc3RyYWludHM9e2NvbnN0cmFpbnRzUmVmfVxuICAgICAgICAgICAgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH1cbiAgICAgICAgICAgIGRyYWdTbmFwVG9PcmlnaW49e2ZhbHNlfVxuICAgICAgICAgICAgd2hpbGVEcmFnPXt7IHNjYWxlOiAxLjIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBXb3JrXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwibW90aW9uIiwic3R5bGVzIiwiTGluayIsInVzZVJvdXRlciIsIkJhc2tldGJhbGwiLCJjb25zdHJhaW50c1JlZiIsImdvYWwiLCJzZXRHb2FsIiwicm91dGVyIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiaGFuZGxlRHJhZ0VuZCIsImV2ZW50IiwiaW5mbyIsImRvY3VtZW50IiwiaG9vcHBvcyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwicG9pbnQiLCJ4IiwieSIsImRpdiIsImhyZWYiLCJpZCIsImNsYXNzTmFtZSIsImhvb3AiLCJyZWYiLCJjb250YWluZXIiLCJwb3NpdGlvbiIsImRyYWciLCJkcmFnQ29uc3RyYWludHMiLCJvbkRyYWdFbmQiLCJiYWxsIiwiZHJhZ1NuYXBUb09yaWdpbiIsIndoaWxlRHJhZyIsInNjYWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Basketball.tsx\n"));

/***/ })

});