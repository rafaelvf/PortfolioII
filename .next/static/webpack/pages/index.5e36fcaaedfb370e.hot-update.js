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

/***/ "./components/Wave.tsx":
/*!*****************************!*\
  !*** ./components/Wave.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Wave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Wave_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Wave.module.scss */ \"./styles/Wave.module.scss\");\n/* harmony import */ var _styles_Wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Wave_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);\nfunction Wave() {\n    _s();\n    const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", scrollProgress);\n    }, []);\n    const scrollProgress = ()=>{\n        const scrollpx = document.documentElement.scrollTop;\n        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n        const scrollLen = Math.ceil(scrollpx / winHeightPx * 100 / 0.69);\n        setScrolled(scrollLen);\n    };\n    //   useEffect(() => {\n    //     const videoContainer = document.querySelector(\".containerVideo\");\n    //     const videoTag = document.querySelector(\".video\");\n    //     gsap.to(\".video\", {\n    //       scrollTrigger: {\n    //         trigger: \".video\",\n    //         markers: true,\n    //         scrub: true,\n    //         start: \"top top\",\n    //         end: \"99% bottom\",\n    //         //pin: true,\n    //       },\n    //     });\n    //     //video animation\n    //     let accelamount = 0.1;\n    //     let scrollpos = 0;\n    //     let delay = 0;\n    //   });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container), \" containerVideo\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/frame_0_delay-1s.png\"\n        }, void 0, false, {\n            fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Wave.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Wave.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Wave, \"j04L/zmP5jgjVw6oy7xdUCKClbY=\");\n_c = Wave;\nvar _c;\n$RefreshReg$(_c, \"Wave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dhdmUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDcUI7QUFDSjtBQUN4QjtBQUNnQztBQUV4REksMkRBQW1CLENBQUNDLGtFQUFhQTtBQUVsQixTQUFTRSxPQUFPOztJQUM3QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFFekNDLGdEQUFTQSxDQUFDLElBQU07UUFDZFEsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVUM7SUFDcEMsR0FBRyxFQUFFO0lBRUwsTUFBTUEsaUJBQWlCLElBQU07UUFDM0IsTUFBTUMsV0FBV0MsU0FBU0MsZUFBZSxDQUFDQyxTQUFTO1FBQ25ELE1BQU1DLGNBQ0pILFNBQVNDLGVBQWUsQ0FBQ0csWUFBWSxHQUNyQ0osU0FBU0MsZUFBZSxDQUFDSSxZQUFZO1FBRXZDLE1BQU1DLFlBQVlDLEtBQUtDLElBQUksQ0FBQyxXQUFhTCxjQUFlLE1BQU87UUFDL0RSLFlBQVlXO0lBQ2Q7SUFDQSxzQkFBc0I7SUFDdEIsd0VBQXdFO0lBQ3hFLHlEQUF5RDtJQUV6RCwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxVQUFVO0lBRVYsd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFFBQVE7SUFDUixxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVyxHQUFvQixPQUFqQnJCLDJFQUFnQixFQUFDO2tCQVNsQyw0RUFBQ3VCO1lBQUlDLEtBQU07Ozs7Ozs7Ozs7O0FBR2pCLENBQUM7R0FqRHVCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYXZlLnRzeD84ZWQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvV2F2ZS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIjtcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2F2ZSgpIHtcbiAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxlZF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbFByb2dyZXNzKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNjcm9sbFByb2dyZXNzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbHB4ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICBjb25zdCB3aW5IZWlnaHRQeCA9XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC1cbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICBjb25zdCBzY3JvbGxMZW4gPSBNYXRoLmNlaWwoKChzY3JvbGxweCAvIHdpbkhlaWdodFB4KSAqIDEwMCkgLyAwLjY5KTtcbiAgICBzZXRTY3JvbGxlZChzY3JvbGxMZW4pO1xuICB9O1xuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgICBjb25zdCB2aWRlb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyVmlkZW9cIik7XG4gIC8vICAgICBjb25zdCB2aWRlb1RhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW9cIik7XG5cbiAgLy8gICAgIGdzYXAudG8oXCIudmlkZW9cIiwge1xuICAvLyAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gIC8vICAgICAgICAgdHJpZ2dlcjogXCIudmlkZW9cIixcbiAgLy8gICAgICAgICBtYXJrZXJzOiB0cnVlLFxuICAvLyAgICAgICAgIHNjcnViOiB0cnVlLFxuICAvLyAgICAgICAgIHN0YXJ0OiBcInRvcCB0b3BcIixcbiAgLy8gICAgICAgICBlbmQ6IFwiOTklIGJvdHRvbVwiLFxuICAvLyAgICAgICAgIC8vcGluOiB0cnVlLFxuICAvLyAgICAgICB9LFxuICAvLyAgICAgfSk7XG5cbiAgLy8gICAgIC8vdmlkZW8gYW5pbWF0aW9uXG4gIC8vICAgICBsZXQgYWNjZWxhbW91bnQgPSAwLjE7XG4gIC8vICAgICBsZXQgc2Nyb2xscG9zID0gMDtcbiAgLy8gICAgIGxldCBkZWxheSA9IDA7XG4gIC8vICAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9IGNvbnRhaW5lclZpZGVvYH0+XG4gICAgICB7LyogPHZpZGVvXG4gICAgICAgIC8vYXV0b1BsYXlcbiAgICAgICAgLy9tdXRlZFxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy52aWRlb30gdmlkZW9gfVxuICAgICAgICAvL2xvb3A9e3RydWV9XG4gICAgICA+XG4gICAgICAgIDxzb3VyY2Ugc3JjPVwiLzIuTVA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICA8L3ZpZGVvPiAqL31cbiAgICAgIDxpbWcgc3JjPXtgL2ZyYW1lXzBfZGVsYXktMXMucG5nYH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJyZWdpc3RlclBsdWdpbiIsIldhdmUiLCJzY3JvbGxlZCIsInNldFNjcm9sbGVkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFByb2dyZXNzIiwic2Nyb2xscHgiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsIndpbkhlaWdodFB4Iiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsTGVuIiwiTWF0aCIsImNlaWwiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Wave.tsx\n"));

/***/ })

});