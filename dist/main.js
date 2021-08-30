/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ \"./src/page.js\");\n\n\n(0,_page__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n\n\nconst displayTodos = (project) => {\n  const body = document.querySelector(\"main\");\n  const todosDiv = document.createElement(\"div\");\n  todosDiv.id = \"taskview\";\n\n  project.getTodos().forEach((todo) => {\n    let title = document.createElement(\"h3\");\n    title.className = \"todo\";\n    title.textContent = todo.getTitle();\n    \n    todosDiv.appendChild(title);\n  })\n\n  body.appendChild(todosDiv);\n};\n\nconst displayProject = (project) => {\n  let title = document.createElement(\"h2\");\n  title.className = \"project\";\n  title.textContent = `${project.getTitle()} ${project.getTodos().length}`;\n  title.addEventListener(\"click\", () => {\n    displayTodos(project);\n  });\n\n  return title;\n};\n\nconst displayProjectList = () => {\n  const projectsDiv = document.createElement(\"div\");\n  projectsDiv.id = \"sidebar\";\n\n  _projectList__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjects().forEach((project) => {\n    projectsDiv.appendChild(displayProject(project));\n  });\n\n  return projectsDiv;\n};\n\nconst loadPage = () => {\n  const body = document.querySelector(\"main\");\n\n  body.appendChild(displayProjectList());\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/page.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"project\": () => (/* binding */ project)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\nconst project = (title) => {\n  let todos = [];\n  const getTitle = () => title;\n  const getTodos = () => todos;\n  const addTodo = (title, description, dueDate, priority) => {\n    todos.push((0,_todo__WEBPACK_IMPORTED_MODULE_0__.todo)(title, description, dueDate, priority));\n  };\n  const removeTodo = (todo) => {\n    todos.forEach((item) => {\n      if (item.title == todo.title) {\n        todos.splice(todos.indexOf(item), 1);\n      }\n    });\n  };\n  return { getTitle, getTodos, addTodo, removeTodo };\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/projectList.js":
/*!****************************!*\
  !*** ./src/projectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectList\": () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nconst projectList = (() => {\n  let projects = [];\n  const getProjects = () => projects;\n  const addProject = (title) => {\n    projects.push((0,_project__WEBPACK_IMPORTED_MODULE_0__.project)(title));\n  };\n  const removeProject = (project) => {\n    projects.forEach((currentProject) => {\n      if (project.getTitle() == currentProject.getTitle()) {\n        projects.splice(projects.indexOf(project), 1);\n      }\n    });\n  };\n\n  return { getProjects, addProject, removeProject };\n})();\n\nprojectList.addProject(\"Inbox\");\nprojectList.getProjects()[0].addTodo(\"These\", \"\", \"\", \"low\");\nprojectList.getProjects()[0].addTodo(\"Are\", \"\", \"\", \"low\");\nprojectList.getProjects()[0].addTodo(\"Placeholder\", \"\", \"\", \"low\");\nprojectList.getProjects()[0].addTodo(\"Tasks\", \"\", \"\", \"low\");\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/projectList.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todo\": () => (/* binding */ todo)\n/* harmony export */ });\nconst todo = (title, description, dueDate, priority) => {\n  let status = \"pending\";\n  const getTitle = () => title;\n  const getDescription = () => description;\n  const getDueDate = () => dueDate;\n  const getPriority = () => priority;\n  const getStatus = () => status;\n  const changePriority = (newPriority) => {\n    priority = newPriority;\n  };\n  const toggleStatus = () => {\n    status = status == \"pending\" ? \"complete\" : \"pending\";\n  };\n  return {\n    getTitle,\n    getDescription,\n    getDueDate,\n    getPriority,\n    changePriority,\n    getStatus,\n    toggleStatus,\n  };\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;