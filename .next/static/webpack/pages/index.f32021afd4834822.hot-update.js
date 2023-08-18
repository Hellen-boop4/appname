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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [characters, setCharacters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://hp-api.onrender.com/api/characters\").then((response)=>response.json()).then((data)=>setCharacters(data));\n    }, []);\n    const filteredCharacters = characters.filter((character)=>character.name.toLowerCase().includes(searchQuery.toLowerCase()) || character.house.toLowerCase().includes(searchQuery.toLowerCase()));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 sm:grid-cols-2 gap-4 p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Search by name or house\",\n                        value: searchQuery,\n                        onChange: (e)=>setSearchQuery(e.target.value),\n                        className: \"p-4 pr-12 rounded-md border shadow-sm focus:ring focus:ring-blue-300 w-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    searchQuery && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer\",\n                        onClick: ()=>setSearchQuery(\"\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 gap-4\",\n                children: filteredCharacters.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"col-span-2 text-center text-red-500\",\n                    children: \"No results found.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this) : filteredCharacters.map((character)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/characters/\".concat(character.name),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white p-4 shadow-md rounded-md cursor-pointer hover:bg-gray-100 transition\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-semibold\",\n                                    children: character.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600\",\n                                    children: [\n                                        \"Date of Birth: \",\n                                        character.dateOfBirth\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 17\n                                }, this),\n                                character.wand && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mt-2 text-sm text-gray-500\",\n                                    children: [\n                                        \"Wand: \",\n                                        character.wand.wood,\n                                        \", \",\n                                        character.wand.core,\n                                        \", \",\n                                        character.wand.length\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, this)\n                    }, character.name, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"I2csLrlSreH7Ehjqsaxgf4iQkz4=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDdEI7QUFFN0IsU0FBU0k7O0lBQ1AsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFDL0MsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBRS9DQyxnREFBU0EsQ0FBQztRQUNSTyxNQUFNLDhDQUNIQyxJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLElBQUksSUFDOUJGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUVAsY0FBY087SUFDaEMsR0FBRyxFQUFFO0lBRUwsTUFBTUMscUJBQXFCVCxXQUFXVSxNQUFNLENBQzFDQyxDQUFBQSxZQUNFQSxVQUFVQyxJQUFJLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDWixZQUFZVyxXQUFXLE9BQzdERixVQUFVSSxLQUFLLENBQUNGLFdBQVcsR0FBR0MsUUFBUSxDQUFDWixZQUFZVyxXQUFXO0lBR2xFLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBT25CO3dCQUNQb0IsVUFBVUMsQ0FBQUEsSUFBS3BCLGVBQWVvQixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQzVDSixXQUFVOzs7Ozs7b0JBRVhmLDZCQUNDLDhEQUFDdUI7d0JBQ0NSLFdBQVU7d0JBQ1ZTLFNBQVMsSUFBTXZCLGVBQWU7Ozs7Ozs7Ozs7OzswQkFNcEMsOERBQUNhO2dCQUFJQyxXQUFVOzBCQUNaUixtQkFBbUJrQixNQUFNLEtBQUssa0JBQzdCLDhEQUFDQztvQkFBRVgsV0FBVTs4QkFBc0M7Ozs7OzJCQUluRFIsbUJBQW1Cb0IsR0FBRyxDQUFDbEIsQ0FBQUEsMEJBQ3JCLDhEQUFDYixrREFBSUE7d0JBQXNCZ0MsTUFBTSxlQUE4QixPQUFmbkIsVUFBVUMsSUFBSTtrQ0FDNUQsNEVBQUNJOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ2M7b0NBQUdkLFdBQVU7OENBQXlCTixVQUFVQyxJQUFJOzs7Ozs7OENBQ3JELDhEQUFDZ0I7b0NBQUVYLFdBQVU7O3dDQUFnQjt3Q0FBZ0JOLFVBQVVxQixXQUFXOzs7Ozs7O2dDQUVqRXJCLFVBQVVzQixJQUFJLGtCQUNiLDhEQUFDTDtvQ0FBRVgsV0FBVTs7d0NBQTZCO3dDQUNqQ04sVUFBVXNCLElBQUksQ0FBQ0MsSUFBSTt3Q0FBQzt3Q0FBR3ZCLFVBQVVzQixJQUFJLENBQUNFLElBQUk7d0NBQUM7d0NBQUd4QixVQUFVc0IsSUFBSSxDQUFDTixNQUFNOzs7Ozs7Ozs7Ozs7O3VCQVB2RWhCLFVBQVVDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnJDO0dBM0RTYjtLQUFBQTtBQTZEVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2NoYXJhY3RlcnMsIHNldENoYXJhY3RlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCdodHRwczovL2hwLWFwaS5vbnJlbmRlci5jb20vYXBpL2NoYXJhY3RlcnMnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiBzZXRDaGFyYWN0ZXJzKGRhdGEpKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZpbHRlcmVkQ2hhcmFjdGVycyA9IGNoYXJhY3RlcnMuZmlsdGVyKFxuICAgIGNoYXJhY3RlciA9PlxuICAgICAgY2hhcmFjdGVyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgY2hhcmFjdGVyLmhvdXNlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSlcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBnYXAtNCBwLTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IG5hbWUgb3IgaG91c2VcIlxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicC00IHByLTEyIHJvdW5kZWQtbWQgYm9yZGVyIHNoYWRvdy1zbSBmb2N1czpyaW5nIGZvY3VzOnJpbmctYmx1ZS0zMDAgdy1mdWxsXCJcbiAgICAgICAgLz5cbiAgICAgICAge3NlYXJjaFF1ZXJ5ICYmIChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIHJpZ2h0LTIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VhcmNoUXVlcnkoJycpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiBZb3VyIFNWRyBjb2RlIGZvciB0aGUgY2xlYXIgYnV0dG9uICovfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAge2ZpbHRlcmVkQ2hhcmFjdGVycy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiB0ZXh0LWNlbnRlciB0ZXh0LXJlZC01MDBcIj5cbiAgICAgICAgICAgIE5vIHJlc3VsdHMgZm91bmQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICApIDogKFxuICAgICAgICAgIGZpbHRlcmVkQ2hhcmFjdGVycy5tYXAoY2hhcmFjdGVyID0+IChcbiAgICAgICAgICAgIDxMaW5rIGtleT17Y2hhcmFjdGVyLm5hbWV9IGhyZWY9e2AvY2hhcmFjdGVycy8ke2NoYXJhY3Rlci5uYW1lfWB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCBzaGFkb3ctbWQgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTEwMCB0cmFuc2l0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZFwiPntjaGFyYWN0ZXIubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5EYXRlIG9mIEJpcnRoOiB7Y2hhcmFjdGVyLmRhdGVPZkJpcnRofTwvcD5cbiAgICAgICAgICAgICAgICB7LyogRGlzcGxheSB3YW5kIGRldGFpbHMgKi99XG4gICAgICAgICAgICAgICAge2NoYXJhY3Rlci53YW5kICYmIChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIFdhbmQ6IHtjaGFyYWN0ZXIud2FuZC53b29kfSwge2NoYXJhY3Rlci53YW5kLmNvcmV9LCB7Y2hhcmFjdGVyLndhbmQubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIkhvbWUiLCJjaGFyYWN0ZXJzIiwic2V0Q2hhcmFjdGVycyIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZmlsdGVyZWRDaGFyYWN0ZXJzIiwiZmlsdGVyIiwiY2hhcmFjdGVyIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJob3VzZSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwibGVuZ3RoIiwicCIsIm1hcCIsImhyZWYiLCJoMiIsImRhdGVPZkJpcnRoIiwid2FuZCIsIndvb2QiLCJjb3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});