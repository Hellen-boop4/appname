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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [characters, setCharacters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://hp-api.onrender.com/api/characters\").then((response)=>response.json()).then((data)=>setCharacters(data));\n    }, []);\n    const filteredCharacters = characters.filter((character)=>character.name.toLowerCase().includes(searchQuery.toLowerCase()) || character.house.toLowerCase().includes(searchQuery.toLowerCase()));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-2 gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Search by name or house\",\n                value: searchQuery && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"absolute top-1/2 right-2 transform -translate-y-1/2\",\n                    onClick: ()=>setSearchQuery(\"\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        className: \"h-4 w-4 text-gray-500\",\n                        fill: \"none\",\n                        viewBox: \"0 0 24 24\",\n                        stroke: \"currentColor\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            strokeLinecap: \"round\",\n                            strokeLinejoin: \"round\",\n                            strokeWidth: 1,\n                            d: \"M6 18L18 6M6 6l12 12\"\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0)\n                }, void 0, false, void 0, void 0),\n                //onChange={e => setSearchQuery(e.target.value)}\n                //className=\"p-2 rounded-md border\"\n                onChange: (e)=>setSearchQuery(e.target.value),\n                className: \"p-4 pr-6 rounded-md border shadow-sm focus:ring focus:ring-blue-300\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            filteredCharacters.map((character)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/characters/\".concat(character.name),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" p-4 shadow-md rounded-md cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-semibold\",\n                                children: character.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Date of Birth: \",\n                                    character.dateOfBirth\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this)\n                }, character.name, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"I2csLrlSreH7Ehjqsaxgf4iQkz4=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDdEI7QUFFN0IsU0FBU0k7O0lBQ1AsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFDL0MsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBRS9DQyxnREFBU0EsQ0FBQztRQUNSTyxNQUFNLDhDQUNIQyxJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLElBQUksSUFDOUJGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUVAsY0FBY087SUFDaEMsR0FBRyxFQUFFO0lBRUwsTUFBTUMscUJBQXFCVCxXQUFXVSxNQUFNLENBQzFDQyxDQUFBQSxZQUNFQSxVQUFVQyxJQUFJLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDWixZQUFZVyxXQUFXLE9BQzdERixVQUFVSSxLQUFLLENBQUNGLFdBQVcsR0FBR0MsUUFBUSxDQUFDWixZQUFZVyxXQUFXO0lBR2xFLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLE9BQU9uQiw2QkFDTCw4REFBQ29CO29CQUNDTCxXQUFVO29CQUNWTSxTQUFTLElBQU1wQixlQUFlOzhCQUU5Qiw0RUFBQ3FCO3dCQUNDQyxPQUFNO3dCQUNOUixXQUFVO3dCQUNWUyxNQUFLO3dCQUNMQyxTQUFRO3dCQUNSQyxRQUFPO2tDQUVQLDRFQUFDQzs0QkFDQ0MsZUFBYzs0QkFDZEMsZ0JBQWU7NEJBQ2ZDLGFBQWE7NEJBQ2JDLEdBQUU7Ozs7Z0JBS1YsZ0RBQWdEO2dCQUNqRCxtQ0FBbUM7Z0JBQ25DQyxVQUFVQyxDQUFBQSxJQUFLaEMsZUFBZWdDLEVBQUVDLE1BQU0sQ0FBQ2YsS0FBSztnQkFDL0NKLFdBQVU7Ozs7OztZQUdQUixtQkFBbUI0QixHQUFHLENBQUMxQixDQUFBQSwwQkFDdEIsOERBQUNiLGtEQUFJQTtvQkFBc0J3QyxNQUFNLGVBQThCLE9BQWYzQixVQUFVQyxJQUFJOzhCQUM1RCw0RUFBQ0k7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDc0I7Z0NBQUd0QixXQUFVOzBDQUF5Qk4sVUFBVUMsSUFBSTs7Ozs7OzBDQUNyRCw4REFBQzRCOztvQ0FBRTtvQ0FBZ0I3QixVQUFVOEIsV0FBVzs7Ozs7Ozs7Ozs7OzttQkFIakM5QixVQUFVQyxJQUFJOzs7Ozs7Ozs7OztBQVNqQztHQTFEU2I7S0FBQUE7QUE0RFQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjaGFyYWN0ZXJzLCBzZXRDaGFyYWN0ZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCgnaHR0cHM6Ly9ocC1hcGkub25yZW5kZXIuY29tL2FwaS9jaGFyYWN0ZXJzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4gc2V0Q2hhcmFjdGVycyhkYXRhKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBmaWx0ZXJlZENoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzLmZpbHRlcihcbiAgICBjaGFyYWN0ZXIgPT5cbiAgICAgIGNoYXJhY3Rlci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgIGNoYXJhY3Rlci5ob3VzZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IG5hbWUgb3IgaG91c2VcIlxuICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnkgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgcmlnaHQtMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMlwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2hRdWVyeSgnJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsxfVxuICAgICAgICAgICAgICAgIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAgLy9vbkNoYW5nZT17ZSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgLy9jbGFzc05hbWU9XCJwLTIgcm91bmRlZC1tZCBib3JkZXJcIlxuICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICBjbGFzc05hbWU9XCJwLTQgcHItNiByb3VuZGVkLW1kIGJvcmRlciBzaGFkb3ctc20gZm9jdXM6cmluZyBmb2N1czpyaW5nLWJsdWUtMzAwXCJcbiAgXG4gICAgICAvPlxuICAgICAge2ZpbHRlcmVkQ2hhcmFjdGVycy5tYXAoY2hhcmFjdGVyID0+IChcbiAgICAgICAgPExpbmsga2V5PXtjaGFyYWN0ZXIubmFtZX0gaHJlZj17YC9jaGFyYWN0ZXJzLyR7Y2hhcmFjdGVyLm5hbWV9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcC00IHNoYWRvdy1tZCByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+e2NoYXJhY3Rlci5uYW1lfTwvaDI+XG4gICAgICAgICAgICA8cD5EYXRlIG9mIEJpcnRoOiB7Y2hhcmFjdGVyLmRhdGVPZkJpcnRofTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIkhvbWUiLCJjaGFyYWN0ZXJzIiwic2V0Q2hhcmFjdGVycyIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZmlsdGVyZWRDaGFyYWN0ZXJzIiwiZmlsdGVyIiwiY2hhcmFjdGVyIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJob3VzZSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJtYXAiLCJocmVmIiwiaDIiLCJwIiwiZGF0ZU9mQmlydGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});