"use strict";
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
exports.id = "pages/pdf";
exports.ids = ["pages/pdf"];
exports.modules = {

/***/ "./components/PDFViewer.tsx":
/*!**********************************!*\
  !*** ./components/PDFViewer.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pdf */ \"react-pdf\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_pdf__WEBPACK_IMPORTED_MODULE_2__]);\nreact_pdf__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst PDFViewer = ({ pdfUrl  })=>{\n    //const [numPages, setNumPages] = useState(null);\n    const [pageNumber, setPageNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    //   function onDocumentLoadSuccess({ numPages }: any) {\n    //     setNumPages(numPages);\n    //   }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_pdf__WEBPACK_IMPORTED_MODULE_2__.Document, {\n            file: pdfUrl,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_pdf__WEBPACK_IMPORTED_MODULE_2__.Page, {\n                pageNumber: pageNumber\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/PDFViewer.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/PDFViewer.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/components/PDFViewer.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PDFViewer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BERlZpZXdlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDRztBQUUzQyxNQUFNSSxZQUFZLENBQUMsRUFBRUMsT0FBTSxFQUFPLEdBQUs7SUFDckMsaURBQWlEO0lBQ2pELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUU3Qyx3REFBd0Q7SUFDeEQsNkJBQTZCO0lBQzdCLE1BQU07SUFFTixxQkFDRSw4REFBQ087a0JBQ0MsNEVBQUNOLCtDQUFRQTtZQUFDTyxNQUFNSjtzQkFDZCw0RUFBQ0YsMkNBQUlBO2dCQUFDRyxZQUFZQTs7Ozs7Ozs7Ozs7Ozs7OztBQUkxQjtBQUVBLGlFQUFlRixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy9QREZWaWV3ZXIudHN4P2ViNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEb2N1bWVudCwgUGFnZSB9IGZyb20gXCJyZWFjdC1wZGZcIjtcblxuY29uc3QgUERGVmlld2VyID0gKHsgcGRmVXJsIH06IGFueSkgPT4ge1xuICAvL2NvbnN0IFtudW1QYWdlcywgc2V0TnVtUGFnZXNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwYWdlTnVtYmVyLCBzZXRQYWdlTnVtYmVyXSA9IHVzZVN0YXRlKDEpO1xuXG4gIC8vICAgZnVuY3Rpb24gb25Eb2N1bWVudExvYWRTdWNjZXNzKHsgbnVtUGFnZXMgfTogYW55KSB7XG4gIC8vICAgICBzZXROdW1QYWdlcyhudW1QYWdlcyk7XG4gIC8vICAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxEb2N1bWVudCBmaWxlPXtwZGZVcmx9PlxuICAgICAgICA8UGFnZSBwYWdlTnVtYmVyPXtwYWdlTnVtYmVyfSAvPlxuICAgICAgPC9Eb2N1bWVudD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBERlZpZXdlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRG9jdW1lbnQiLCJQYWdlIiwiUERGVmlld2VyIiwicGRmVXJsIiwicGFnZU51bWJlciIsInNldFBhZ2VOdW1iZXIiLCJkaXYiLCJmaWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PDFViewer.tsx\n");

/***/ }),

/***/ "./pages/pdf.tsx":
/*!***********************!*\
  !*** ./pages/pdf.tsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PDFViewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PDFViewer */ \"./components/PDFViewer.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_PDFViewer__WEBPACK_IMPORTED_MODULE_2__]);\n_components_PDFViewer__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst pdf = ()=>{\n    const pdfUrl = \"/RafaelViteriCV.pdf\"; // Replace with the actual path\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: pdfUrl,\n                target: \"_blank\",\n                rel: \"noopener noreferrer\",\n                children: \"View PDF\"\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/pdf.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PDFViewer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                pdfUrl: pdfUrl\n            }, void 0, false, {\n                fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/pdf.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaelviteri/Documents/Proyectos/Portfolio 2/PortfolioII/pages/pdf.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pdf);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wZGYudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ3NCO0FBRWhELE1BQU1FLE1BQU0sSUFBTTtJQUNoQixNQUFNQyxTQUFTLHVCQUF1QiwrQkFBK0I7SUFFckUscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7Z0JBQUVDLE1BQU1IO2dCQUFRSSxRQUFPO2dCQUFTQyxLQUFJOzBCQUFzQjs7Ozs7OzBCQUczRCw4REFBQ1AsNkRBQVNBO2dCQUFDRSxRQUFRQTs7Ozs7Ozs7Ozs7O0FBR3pCO0FBRUEsaUVBQWVELEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9wZGYudHN4P2U2ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBERlZpZXdlciBmcm9tIFwiLi4vY29tcG9uZW50cy9QREZWaWV3ZXJcIjtcblxuY29uc3QgcGRmID0gKCkgPT4ge1xuICBjb25zdCBwZGZVcmwgPSBcIi9SYWZhZWxWaXRlcmlDVi5wZGZcIjsgLy8gUmVwbGFjZSB3aXRoIHRoZSBhY3R1YWwgcGF0aFxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxhIGhyZWY9e3BkZlVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICBWaWV3IFBERlxuICAgICAgPC9hPlxuICAgICAgPFBERlZpZXdlciBwZGZVcmw9e3BkZlVybH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBkZjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBERlZpZXdlciIsInBkZiIsInBkZlVybCIsImRpdiIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/pdf.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-pdf":
/*!****************************!*\
  !*** external "react-pdf" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("react-pdf");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/pdf.tsx"));
module.exports = __webpack_exports__;

})();