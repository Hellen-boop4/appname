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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [characters, setCharacters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://hp-api.onrender.com/api/characters\").then((response)=>response.json()).then((data)=>setCharacters(data));\n    }, []);\n    const filteredCharacters = characters.filter((character)=>character.name.toLowerCase().includes(searchQuery.toLowerCase()) || character.house.toLowerCase().includes(searchQuery.toLowerCase()));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-2 gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Search by name or house\",\n                        value: searchQuery,\n                        onChange: (e)=>setSearchQuery(e.target.value),\n                        className: \"p-4 pr-6 rounded-md border shadow-sm focus:ring focus:ring-blue-300\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    searchQuery && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer\",\n                        onClick: ()=>setSearchQuery(\"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"h-4 w-4 text-gray-500\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: 2,\n                                d: \"M6 18L18 6M6 6l12 12\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            filteredCharacters.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"col-span-2 text-center text-red-500\",\n                children: \"No results found.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, this) : filteredCharacters.map((character)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/characters/\".concat(character.name),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white p-4 shadow-md rounded-md cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-semibold\",\n                                children: character.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                                lineNumber: 60,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Date of Birth: \",\n                                    character.dateOfBirth\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, this)\n                }, character.name, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"I2csLrlSreH7Ehjqsaxgf4iQkz4=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDdEI7QUFFN0IsU0FBU0k7O0lBQ1AsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFDL0MsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBRS9DQyxnREFBU0EsQ0FBQztRQUNSTyxNQUFNLDhDQUNIQyxJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLElBQUksSUFDOUJGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUVAsY0FBY087SUFDaEMsR0FBRyxFQUFFO0lBRUwsTUFBTUMscUJBQXFCVCxXQUFXVSxNQUFNLENBQzFDQyxDQUFBQSxZQUNFQSxVQUFVQyxJQUFJLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDWixZQUFZVyxXQUFXLE9BQzdERixVQUFVSSxLQUFLLENBQUNGLFdBQVcsR0FBR0MsUUFBUSxDQUFDWixZQUFZVyxXQUFXO0lBR2xFLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBT25CO3dCQUNQb0IsVUFBVUMsQ0FBQUEsSUFBS3BCLGVBQWVvQixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQzVDSixXQUFVOzs7Ozs7b0JBRVhmLDZCQUNDLDhEQUFDdUI7d0JBQ0NSLFdBQVU7d0JBQ1ZTLFNBQVMsSUFBTXZCLGVBQWU7a0NBRTlCLDRFQUFDd0I7NEJBQ0NDLE9BQU07NEJBQ05YLFdBQVU7NEJBQ1ZZLE1BQUs7NEJBQ0xDLFNBQVE7NEJBQ1JDLFFBQU87c0NBRVAsNEVBQUNDO2dDQUNDQyxlQUFjO2dDQUNkQyxnQkFBZTtnQ0FDZkMsYUFBYTtnQ0FDYkMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1YM0IsbUJBQW1CNEIsTUFBTSxLQUFLLGtCQUM3Qiw4REFBQ0M7Z0JBQUVyQixXQUFVOzBCQUFzQzs7Ozs7dUJBSW5EUixtQkFBbUI4QixHQUFHLENBQUM1QixDQUFBQSwwQkFDckIsOERBQUNiLGtEQUFJQTtvQkFBc0IwQyxNQUFNLGVBQThCLE9BQWY3QixVQUFVQyxJQUFJOzhCQUM1RCw0RUFBQ0k7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDd0I7Z0NBQUd4QixXQUFVOzBDQUF5Qk4sVUFBVUMsSUFBSTs7Ozs7OzBDQUNyRCw4REFBQzBCOztvQ0FBRTtvQ0FBZ0IzQixVQUFVK0IsV0FBVzs7Ozs7Ozs7Ozs7OzttQkFIakMvQixVQUFVQyxJQUFJOzs7Ozs7Ozs7OztBQVVuQztHQWhFU2I7S0FBQUE7QUFrRVQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjaGFyYWN0ZXJzLCBzZXRDaGFyYWN0ZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCgnaHR0cHM6Ly9ocC1hcGkub25yZW5kZXIuY29tL2FwaS9jaGFyYWN0ZXJzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4gc2V0Q2hhcmFjdGVycyhkYXRhKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBmaWx0ZXJlZENoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzLmZpbHRlcihcbiAgICBjaGFyYWN0ZXIgPT5cbiAgICAgIGNoYXJhY3Rlci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgIGNoYXJhY3Rlci5ob3VzZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IG5hbWUgb3IgaG91c2VcIlxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicC00IHByLTYgcm91bmRlZC1tZCBib3JkZXIgc2hhZG93LXNtIGZvY3VzOnJpbmcgZm9jdXM6cmluZy1ibHVlLTMwMFwiXG4gICAgICAgIC8+XG4gICAgICAgIHtzZWFyY2hRdWVyeSAmJiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiByaWdodC0yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlYXJjaFF1ZXJ5KCcnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtZ3JheS01MDBcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7ZmlsdGVyZWRDaGFyYWN0ZXJzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiB0ZXh0LWNlbnRlciB0ZXh0LXJlZC01MDBcIj5cbiAgICAgICAgICBObyByZXN1bHRzIGZvdW5kLlxuICAgICAgICA8L3A+XG4gICAgICApIDogKFxuICAgICAgICBmaWx0ZXJlZENoYXJhY3RlcnMubWFwKGNoYXJhY3RlciA9PiAoXG4gICAgICAgICAgPExpbmsga2V5PXtjaGFyYWN0ZXIubmFtZX0gaHJlZj17YC9jaGFyYWN0ZXJzLyR7Y2hhcmFjdGVyLm5hbWV9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCBzaGFkb3ctbWQgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+e2NoYXJhY3Rlci5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgIDxwPkRhdGUgb2YgQmlydGg6IHtjaGFyYWN0ZXIuZGF0ZU9mQmlydGh9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKVxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIkhvbWUiLCJjaGFyYWN0ZXJzIiwic2V0Q2hhcmFjdGVycyIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZmlsdGVyZWRDaGFyYWN0ZXJzIiwiZmlsdGVyIiwiY2hhcmFjdGVyIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJob3VzZSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJsZW5ndGgiLCJwIiwibWFwIiwiaHJlZiIsImgyIiwiZGF0ZU9mQmlydGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});