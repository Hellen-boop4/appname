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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [characters, setCharacters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://hp-api.onrender.com/api/characters\").then((response)=>response.json()).then((data)=>setCharacters(data));\n    }, []);\n    const filteredCharacters = characters.filter((character)=>character.name.toLowerCase().includes(searchQuery.toLowerCase()) || character.house.toLowerCase().includes(searchQuery.toLowerCase()));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-2 gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Search by name or house\",\n                        value: searchQuery,\n                        onChange: (e)=>setSearchQuery(e.target.value),\n                        className: \"p-4 pr-6 rounded-md border shadow-sm focus:ring focus:ring-blue-300\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    searchQuery && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer\",\n                        onClick: ()=>setSearchQuery(\"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"h-4 w-4 text-gray-500\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: 2,\n                                d: \"M6 18L18 6M6 6l12 12\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 gap-4\",\n                children: filteredCharacters.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"col-span-2 text-center text-red-500\",\n                    children: \"No results found.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, this) : filteredCharacters.map((character)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/characters/\".concat(character.name),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white p-4 shadow-md rounded-md cursor-pointer hover:bg-gray-100 transition\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-semibold\",\n                                    children: character.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600\",\n                                    children: [\n                                        \"Date of Birth: \",\n                                        character.dateOfBirth\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, this),\n                                character.wand && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mt-2 text-sm text-gray-500\",\n                                    children: [\n                                        \"Wand: \",\n                                        character.wand.wood,\n                                        \", \",\n                                        character.wand.core,\n                                        \", \",\n                                        character.wand.length\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                            lineNumber: 60,\n                            columnNumber: 15\n                        }, this)\n                    }, character.name, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\source\\\\repos\\\\my-apppoop\\\\pages\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"I2csLrlSreH7Ehjqsaxgf4iQkz4=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDdEI7QUFFN0IsU0FBU0k7O0lBQ1AsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFDL0MsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBRS9DQyxnREFBU0EsQ0FBQztRQUNSTyxNQUFNLDhDQUNIQyxJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLElBQUksSUFDOUJGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUVAsY0FBY087SUFDaEMsR0FBRyxFQUFFO0lBRUwsTUFBTUMscUJBQXFCVCxXQUFXVSxNQUFNLENBQzFDQyxDQUFBQSxZQUNFQSxVQUFVQyxJQUFJLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDWixZQUFZVyxXQUFXLE9BQzdERixVQUFVSSxLQUFLLENBQUNGLFdBQVcsR0FBR0MsUUFBUSxDQUFDWixZQUFZVyxXQUFXO0lBR2xFLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBT25CO3dCQUNQb0IsVUFBVUMsQ0FBQUEsSUFBS3BCLGVBQWVvQixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQzVDSixXQUFVOzs7Ozs7b0JBRVhmLDZCQUNDLDhEQUFDdUI7d0JBQ0NSLFdBQVU7d0JBQ1ZTLFNBQVMsSUFBTXZCLGVBQWU7a0NBRTlCLDRFQUFDd0I7NEJBQ0NDLE9BQU07NEJBQ05YLFdBQVU7NEJBQ1ZZLE1BQUs7NEJBQ0xDLFNBQVE7NEJBQ1JDLFFBQU87c0NBRVAsNEVBQUNDO2dDQUNDQyxlQUFjO2dDQUNkQyxnQkFBZTtnQ0FDZkMsYUFBYTtnQ0FDYkMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNWiw4REFBQ3BCO2dCQUFJQyxXQUFVOzBCQUNaUixtQkFBbUI0QixNQUFNLEtBQUssa0JBQzdCLDhEQUFDQztvQkFBRXJCLFdBQVU7OEJBQXNDOzs7OzsyQkFJbkRSLG1CQUFtQjhCLEdBQUcsQ0FBQzVCLENBQUFBLDBCQUNyQiw4REFBQ2Isa0RBQUlBO3dCQUFzQjBDLE1BQU0sZUFBOEIsT0FBZjdCLFVBQVVDLElBQUk7a0NBQzVELDRFQUFDSTs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUN3QjtvQ0FBR3hCLFdBQVU7OENBQXlCTixVQUFVQyxJQUFJOzs7Ozs7OENBQ3JELDhEQUFDMEI7b0NBQUVyQixXQUFVOzt3Q0FBZ0I7d0NBQWdCTixVQUFVK0IsV0FBVzs7Ozs7OztnQ0FFakUvQixVQUFVZ0MsSUFBSSxrQkFDYiw4REFBQ0w7b0NBQUVyQixXQUFVOzt3Q0FBNkI7d0NBQ2pDTixVQUFVZ0MsSUFBSSxDQUFDQyxJQUFJO3dDQUFDO3dDQUFHakMsVUFBVWdDLElBQUksQ0FBQ0UsSUFBSTt3Q0FBQzt3Q0FBR2xDLFVBQVVnQyxJQUFJLENBQUNOLE1BQU07Ozs7Ozs7Ozs7Ozs7dUJBUHZFMUIsVUFBVUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQWlCckM7R0F4RVNiO0tBQUFBO0FBMEVULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY2hhcmFjdGVycywgc2V0Q2hhcmFjdGVyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goJ2h0dHBzOi8vaHAtYXBpLm9ucmVuZGVyLmNvbS9hcGkvY2hhcmFjdGVycycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHNldENoYXJhY3RlcnMoZGF0YSkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZmlsdGVyZWRDaGFyYWN0ZXJzID0gY2hhcmFjdGVycy5maWx0ZXIoXG4gICAgY2hhcmFjdGVyID0+XG4gICAgICBjaGFyYWN0ZXIubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICBjaGFyYWN0ZXIuaG91c2UudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBuYW1lIG9yIGhvdXNlXCJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtNCBwci02IHJvdW5kZWQtbWQgYm9yZGVyIHNoYWRvdy1zbSBmb2N1czpyaW5nIGZvY3VzOnJpbmctYmx1ZS0zMDBcIlxuICAgICAgICAvPlxuICAgICAgICB7c2VhcmNoUXVlcnkgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgcmlnaHQtMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2hRdWVyeSgnJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgIHtmaWx0ZXJlZENoYXJhY3RlcnMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgdGV4dC1jZW50ZXIgdGV4dC1yZWQtNTAwXCI+XG4gICAgICAgICAgICBObyByZXN1bHRzIGZvdW5kLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBmaWx0ZXJlZENoYXJhY3RlcnMubWFwKGNoYXJhY3RlciA9PiAoXG4gICAgICAgICAgICA8TGluayBrZXk9e2NoYXJhY3Rlci5uYW1lfSBocmVmPXtgL2NoYXJhY3RlcnMvJHtjaGFyYWN0ZXIubmFtZX1gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgc2hhZG93LW1kIHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctZ3JheS0xMDAgdHJhbnNpdGlvblwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj57Y2hhcmFjdGVyLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+RGF0ZSBvZiBCaXJ0aDoge2NoYXJhY3Rlci5kYXRlT2ZCaXJ0aH08L3A+XG4gICAgICAgICAgICAgICAgey8qIERpc3BsYXkgd2FuZCBkZXRhaWxzICovfVxuICAgICAgICAgICAgICAgIHtjaGFyYWN0ZXIud2FuZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICBXYW5kOiB7Y2hhcmFjdGVyLndhbmQud29vZH0sIHtjaGFyYWN0ZXIud2FuZC5jb3JlfSwge2NoYXJhY3Rlci53YW5kLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJIb21lIiwiY2hhcmFjdGVycyIsInNldENoYXJhY3RlcnMiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImZpbHRlcmVkQ2hhcmFjdGVycyIsImZpbHRlciIsImNoYXJhY3RlciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaG91c2UiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwibGVuZ3RoIiwicCIsIm1hcCIsImhyZWYiLCJoMiIsImRhdGVPZkJpcnRoIiwid2FuZCIsIndvb2QiLCJjb3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});