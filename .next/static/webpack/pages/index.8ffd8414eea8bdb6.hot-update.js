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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Wave; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Wave_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Wave.module.scss */ \"./styles/Wave.module.scss\");\n/* harmony import */ var _styles_Wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Wave_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);\nfunction Wave() {\n    _s();\n    const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", scrollProgress);\n    }, []);\n    const scrollProgress = ()=>{\n        const scrollpx = document.documentElement.scrollTop;\n        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n        const scrollLen = Math.ceil(scrollpx / winHeightPx * 100 / 0.69);\n        setScrolled(scrollLen);\n    };\n    //   useEffect(() => {\n    //     const videoContainer = document.querySelector(\".containerVideo\");\n    //     const videoTag = document.querySelector(\".video\");\n    //     gsap.to(\".video\", {\n    //       scrollTrigger: {\n    //         trigger: \".video\",\n    //         markers: true,\n    //         scrub: true,\n    //         start: \"top top\",\n    //         end: \"99% bottom\",\n    //         //pin: true,\n    //       },\n    //     });\n    //     //video animation\n    //     let accelamount = 0.1;\n    //     let scrollpos = 0;\n    //     let delay = 0;\n    //   });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container), \" containerVideo\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/frame_\".concat(scrolled.toString().padStart(4, \"0\"), \"_delay-1s.png\"),\n            className: (_styles_Wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imgWave)\n        }, void 0, false, {\n            fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Wave.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Wave.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Wave, \"j04L/zmP5jgjVw6oy7xdUCKClbY=\");\n_c = Wave;\nvar _c;\n$RefreshReg$(_c, \"Wave\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dhdmUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDcUI7QUFDSjtBQUN4QjtBQUNnQztBQUV4REksMkRBQW1CLENBQUNDLGtFQUFhQTtBQUVsQixTQUFTRSxPQUFPOztJQUM3QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFFekNDLGdEQUFTQSxDQUFDLElBQU07UUFDZFEsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVUM7SUFDcEMsR0FBRyxFQUFFO0lBRUwsTUFBTUEsaUJBQWlCLElBQU07UUFDM0IsTUFBTUMsV0FBV0MsU0FBU0MsZUFBZSxDQUFDQyxTQUFTO1FBQ25ELE1BQU1DLGNBQ0pILFNBQVNDLGVBQWUsQ0FBQ0csWUFBWSxHQUNyQ0osU0FBU0MsZUFBZSxDQUFDSSxZQUFZO1FBRXZDLE1BQU1DLFlBQVlDLEtBQUtDLElBQUksQ0FBQyxXQUFhTCxjQUFlLE1BQU87UUFDL0RSLFlBQVlXO0lBQ2Q7SUFDQSxzQkFBc0I7SUFDdEIsd0VBQXdFO0lBQ3hFLHlEQUF5RDtJQUV6RCwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxVQUFVO0lBRVYsd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFFBQVE7SUFDUixxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVyxHQUFvQixPQUFqQnJCLDJFQUFnQixFQUFDO2tCQVNsQyw0RUFBQ3VCO1lBQ0NDLEtBQUssVUFBK0MsT0FBckNuQixTQUFTb0IsUUFBUSxHQUFHQyxRQUFRLENBQUMsR0FBRyxNQUFLO1lBQ3BETCxXQUFXckIseUVBQWM7Ozs7Ozs7Ozs7O0FBSWpDLENBQUM7R0FwRHVCSTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1dhdmUudHN4PzhlZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9XYXZlLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL2Rpc3QvU2Nyb2xsVHJpZ2dlclwiO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYXZlKCkge1xuICBjb25zdCBbc2Nyb2xsZWQsIHNldFNjcm9sbGVkXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsUHJvZ3Jlc3MpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2Nyb2xsUHJvZ3Jlc3MgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xscHggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHdpbkhlaWdodFB4ID1cbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLVxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIGNvbnN0IHNjcm9sbExlbiA9IE1hdGguY2VpbCgoKHNjcm9sbHB4IC8gd2luSGVpZ2h0UHgpICogMTAwKSAvIDAuNjkpO1xuICAgIHNldFNjcm9sbGVkKHNjcm9sbExlbik7XG4gIH07XG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgIGNvbnN0IHZpZGVvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJWaWRlb1wiKTtcbiAgLy8gICAgIGNvbnN0IHZpZGVvVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlb1wiKTtcblxuICAvLyAgICAgZ3NhcC50byhcIi52aWRlb1wiLCB7XG4gIC8vICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgLy8gICAgICAgICB0cmlnZ2VyOiBcIi52aWRlb1wiLFxuICAvLyAgICAgICAgIG1hcmtlcnM6IHRydWUsXG4gIC8vICAgICAgICAgc2NydWI6IHRydWUsXG4gIC8vICAgICAgICAgc3RhcnQ6IFwidG9wIHRvcFwiLFxuICAvLyAgICAgICAgIGVuZDogXCI5OSUgYm90dG9tXCIsXG4gIC8vICAgICAgICAgLy9waW46IHRydWUsXG4gIC8vICAgICAgIH0sXG4gIC8vICAgICB9KTtcblxuICAvLyAgICAgLy92aWRlbyBhbmltYXRpb25cbiAgLy8gICAgIGxldCBhY2NlbGFtb3VudCA9IDAuMTtcbiAgLy8gICAgIGxldCBzY3JvbGxwb3MgPSAwO1xuICAvLyAgICAgbGV0IGRlbGF5ID0gMDtcbiAgLy8gICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gY29udGFpbmVyVmlkZW9gfT5cbiAgICAgIHsvKiA8dmlkZW9cbiAgICAgICAgLy9hdXRvUGxheVxuICAgICAgICAvL211dGVkXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnZpZGVvfSB2aWRlb2B9XG4gICAgICAgIC8vbG9vcD17dHJ1ZX1cbiAgICAgID5cbiAgICAgICAgPHNvdXJjZSBzcmM9XCIvMi5NUDRcIiB0eXBlPVwidmlkZW8vbXA0XCIgLz5cbiAgICAgIDwvdmlkZW8+ICovfVxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e2AvZnJhbWVfJHtzY3JvbGxlZC50b1N0cmluZygpLnBhZFN0YXJ0KDQsIFwiMFwiKX1fZGVsYXktMXMucG5nYH1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nV2F2ZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwicmVnaXN0ZXJQbHVnaW4iLCJXYXZlIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGxlZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxQcm9ncmVzcyIsInNjcm9sbHB4IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJ3aW5IZWlnaHRQeCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsInNjcm9sbExlbiIsIk1hdGgiLCJjZWlsIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaW1nIiwic3JjIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImltZ1dhdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Wave.tsx\n"));

/***/ })

});