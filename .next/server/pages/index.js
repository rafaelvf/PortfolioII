/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__nLjiQ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz8yNTRkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./styles/Wave.module.scss":
/*!*********************************!*\
  !*** ./styles/Wave.module.scss ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Wave_container__H0lF7\",\n\t\"video\": \"Wave_video__GNHrt\",\n\t\"imgWave\": \"Wave_imgWave__kXmR1\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvV2F2ZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zdHlsZXMvV2F2ZS5tb2R1bGUuc2Nzcz8yNWJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIldhdmVfY29udGFpbmVyX19IMGxGN1wiLFxuXHRcInZpZGVvXCI6IFwiV2F2ZV92aWRlb19fR05IcnRcIixcblx0XCJpbWdXYXZlXCI6IFwiV2F2ZV9pbWdXYXZlX19rWG1SMVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Wave.module.scss\n");

/***/ }),

/***/ "./components/Wave.tsx":
/*!*****************************!*\
  !*** ./components/Wave.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wave)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Wave_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Wave.module.scss */ \"./styles/Wave.module.scss\");\n/* harmony import */ var _styles_Wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Wave_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"gsap\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"gsap/dist/ScrollTrigger\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_2___default().registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);\nfunction Wave() {\n    const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", scrollProgress);\n    }, []);\n    const scrollProgress = ()=>{\n        const scrollpx = document.documentElement.scrollTop;\n        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n        const scrollLen = Math.ceil(scrollpx / winHeightPx * 8);\n        setScrolled(scrollLen);\n        console.log(scrollpx, \"px\");\n        console.log(winHeightPx, \"win\");\n    };\n    console.log(scrolled, \"scrolled\");\n    //   useEffect(() => {\n    //     const videoContainer = document.querySelector(\".containerVideo\");\n    //     const videoTag = document.querySelector(\".video\");\n    //     gsap.to(\".video\", {\n    //       scrollTrigger: {\n    //         trigger: \".video\",\n    //         markers: true,\n    //         scrub: true,\n    //         start: \"top top\",\n    //         end: \"99% bottom\",\n    //         //pin: true,\n    //       },\n    //     });\n    //     //video animation\n    //     let accelamount = 0.1;\n    //     let scrollpos = 0;\n    //     let delay = 0;\n    //   });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `${(_styles_Wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container)} containerVideo`,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: `/frame_${scrolled.toString()}_delay-1s.png`,\n            className: (_styles_Wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imgWave)\n        }, void 0, false, {\n            fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Wave.tsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/Wave.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dhdmUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDcUI7QUFDSjtBQUN4QjtBQUNnQztBQUV4REksMERBQW1CLENBQUNDLGtFQUFhQTtBQUVsQixTQUFTRSxPQUFPO0lBQzdCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV6Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkUSxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVQztJQUNwQyxHQUFHLEVBQUU7SUFFTCxNQUFNQSxpQkFBaUIsSUFBTTtRQUMzQixNQUFNQyxXQUFXQyxTQUFTQyxlQUFlLENBQUNDLFNBQVM7UUFDbkQsTUFBTUMsY0FDSkgsU0FBU0MsZUFBZSxDQUFDRyxZQUFZLEdBQ3JDSixTQUFTQyxlQUFlLENBQUNJLFlBQVk7UUFFdkMsTUFBTUMsWUFBWUMsS0FBS0MsSUFBSSxDQUFDLFdBQVlMLGNBQWU7UUFDdkRSLFlBQVlXO1FBQ1pHLFFBQVFDLEdBQUcsQ0FBQ1gsVUFBVTtRQUN0QlUsUUFBUUMsR0FBRyxDQUFDUCxhQUFhO0lBQzNCO0lBQ0FNLFFBQVFDLEdBQUcsQ0FBQ2hCLFVBQVU7SUFFdEIsc0JBQXNCO0lBQ3RCLHdFQUF3RTtJQUN4RSx5REFBeUQ7SUFFekQsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtJQUVWLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixRQUFRO0lBQ1IscUJBQ0UsOERBQUNpQjtRQUFJQyxXQUFXLENBQUMsRUFBRXZCLDJFQUFnQixDQUFDLGVBQWUsQ0FBQztrQkFTbEQsNEVBQUN5QjtZQUNDQyxLQUFLLENBQUMsT0FBTyxFQUFFckIsU0FBU3NCLFFBQVEsR0FBRyxhQUFhLENBQUM7WUFDakRKLFdBQVd2Qix5RUFBYzs7Ozs7Ozs7Ozs7QUFJakMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvV2F2ZS50c3g/OGVkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1dhdmUubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhdmUoKSB7XG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsZWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxQcm9ncmVzcyk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzY3JvbGxQcm9ncmVzcyA9ICgpID0+IHtcbiAgICBjb25zdCBzY3JvbGxweCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgY29uc3Qgd2luSGVpZ2h0UHggPVxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgY29uc3Qgc2Nyb2xsTGVuID0gTWF0aC5jZWlsKChzY3JvbGxweCAvIHdpbkhlaWdodFB4KSAqIDgpO1xuICAgIHNldFNjcm9sbGVkKHNjcm9sbExlbik7XG4gICAgY29uc29sZS5sb2coc2Nyb2xscHgsIFwicHhcIik7XG4gICAgY29uc29sZS5sb2cod2luSGVpZ2h0UHgsIFwid2luXCIpO1xuICB9O1xuICBjb25zb2xlLmxvZyhzY3JvbGxlZCwgXCJzY3JvbGxlZFwiKTtcblxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgICBjb25zdCB2aWRlb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyVmlkZW9cIik7XG4gIC8vICAgICBjb25zdCB2aWRlb1RhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW9cIik7XG5cbiAgLy8gICAgIGdzYXAudG8oXCIudmlkZW9cIiwge1xuICAvLyAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gIC8vICAgICAgICAgdHJpZ2dlcjogXCIudmlkZW9cIixcbiAgLy8gICAgICAgICBtYXJrZXJzOiB0cnVlLFxuICAvLyAgICAgICAgIHNjcnViOiB0cnVlLFxuICAvLyAgICAgICAgIHN0YXJ0OiBcInRvcCB0b3BcIixcbiAgLy8gICAgICAgICBlbmQ6IFwiOTklIGJvdHRvbVwiLFxuICAvLyAgICAgICAgIC8vcGluOiB0cnVlLFxuICAvLyAgICAgICB9LFxuICAvLyAgICAgfSk7XG5cbiAgLy8gICAgIC8vdmlkZW8gYW5pbWF0aW9uXG4gIC8vICAgICBsZXQgYWNjZWxhbW91bnQgPSAwLjE7XG4gIC8vICAgICBsZXQgc2Nyb2xscG9zID0gMDtcbiAgLy8gICAgIGxldCBkZWxheSA9IDA7XG4gIC8vICAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9IGNvbnRhaW5lclZpZGVvYH0+XG4gICAgICB7LyogPHZpZGVvXG4gICAgICAgIC8vYXV0b1BsYXlcbiAgICAgICAgLy9tdXRlZFxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy52aWRlb30gdmlkZW9gfVxuICAgICAgICAvL2xvb3A9e3RydWV9XG4gICAgICA+XG4gICAgICAgIDxzb3VyY2Ugc3JjPVwiLzIuTVA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICA8L3ZpZGVvPiAqL31cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtgL2ZyYW1lXyR7c2Nyb2xsZWQudG9TdHJpbmcoKX1fZGVsYXktMXMucG5nYH1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nV2F2ZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwicmVnaXN0ZXJQbHVnaW4iLCJXYXZlIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGxlZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxQcm9ncmVzcyIsInNjcm9sbHB4IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJ3aW5IZWlnaHRQeCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsInNjcm9sbExlbiIsIk1hdGgiLCJjZWlsIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImltZyIsInNyYyIsInRvU3RyaW5nIiwiaW1nV2F2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Wave.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Wave */ \"./components/Wave.tsx\");\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Rafael Viter\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wave__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQVFNQTtBQVJ1QjtBQUdrQjtBQUdUO0FBSXZCLFNBQVNJLE9BQU87SUFDN0IscUJBQ0U7OzBCQUNFLDhEQUFDSCxrREFBSUE7O2tDQUNILDhEQUFDSTtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQztnQkFBS0MsV0FBV1gscUVBQVc7MEJBRzFCLDRFQUFDQyx3REFBSUE7Ozs7Ozs7Ozs7OztBQUliLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIkBuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgU3F1YXJlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9TcXVhcmVzXCI7XG5pbXBvcnQgQmFza2V0YmFsbCBmcm9tIFwiLi4vY29tcG9uZW50cy9CYXNrZXRiYWxsXCI7XG5pbXBvcnQgV2F2ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9XYXZlXCI7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SYWZhZWwgVml0ZXI8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICB7LyogPFNxdWFyZXMgLz4gKi99XG4gICAgICAgIHsvKiA8QmFza2V0YmFsbCAvPiAqL31cbiAgICAgICAgPFdhdmUgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkhlYWQiLCJzdHlsZXMiLCJXYXZlIiwiSG9tZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ "gsap/dist/ScrollTrigger":
/*!******************************************!*\
  !*** external "gsap/dist/ScrollTrigger" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();