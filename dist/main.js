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

/***/ "./src/domController.js":
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domController\": () => (/* binding */ domController)\n/* harmony export */ });\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n\n\nconst domController = (() => {\n  const main = document.querySelector(\"main\");\n\n  const createSidebar = () => {\n    const title = document.createElement(\"h1\");\n    title.id = \"title\";\n    title.textContent = \"Todo List\";\n\n    const projects = document.createElement(\"div\");\n    projects.id = \"projects\";\n    _projectList__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjects().forEach((project) => {\n      projects.appendChild(createProject(project));\n    });\n\n    const newProjectButton = createNewProjectButton();\n\n    const sidebar = document.createElement(\"div\");\n    sidebar.id = \"sidebar\";\n\n    sidebar.appendChild(title);\n    sidebar.appendChild(projects);\n    sidebar.appendChild(newProjectButton);\n\n    return sidebar;\n  };\n\n  const createProject = (project) => {\n    const title = document.createElement(\"h1\");\n    title.className = \"project-title\";\n    title.textContent = project.getTitle();\n\n    const todoCount = document.createElement(\"h1\");\n    todoCount.className = \"todo-count\";\n    todoCount.textContent = project.getTodos().length;\n\n    const projectDiv = document.createElement(\"div\");\n    projectDiv.className = \"project\";\n    projectDiv.addEventListener(\"click\", () => {\n      if (projectDiv.className == \"project\") {\n        projectDiv.classList.add(\"active\");\n        displayContent(project);\n      } else {\n        projectDiv.className = \"project\";\n        clearScreen();\n        displaySidebar();\n      }\n    });\n\n    projectDiv.appendChild(title);\n    projectDiv.appendChild(todoCount);\n\n    return projectDiv;\n  };\n\n  const createNewProjectButton = () => {\n    const newProjectButton = document.createElement(\"button\");\n    newProjectButton.id = \"new-project\";\n    newProjectButton.textContent = \"+ Add Project\";\n    newProjectButton.addEventListener(\"click\", () => {\n      _projectList__WEBPACK_IMPORTED_MODULE_0__.projectList.addProject(prompt(\"Enter Project Name\"));\n      clearScreen();\n      displaySidebar();\n    });\n\n    return newProjectButton;\n  };\n\n  const createContent = (project) => {\n    const heading = document.createElement(\"h2\");\n    heading.id = \"content-heading\";\n    heading.textContent = project.getTitle();\n\n    const todos = document.createElement(\"div\");\n    todos.id = \"todos\";\n    project.getTodos().forEach((todo) => {\n      todos.appendChild(createTodo(todo));\n    });\n\n    const newTodoButton = createNewTodoButton(project);\n\n    const content = document.createElement(\"div\");\n    content.id = \"content\";\n\n    content.appendChild(heading);\n    content.appendChild(todos);\n    content.appendChild(newTodoButton);\n\n    return content;\n  };\n\n  const createTodo = (todo) => {\n    const checkbox = document.createElement(\"input\");\n    checkbox.className = \"checkbox\";\n    checkbox.type = \"checkbox\";\n    checkbox.name = \"checkbox\";\n\n    const label = document.createElement(\"label\");\n    label.className = \"todo-title\";\n    label.htmlFor = \"checkbox\";\n    label.textContent = todo.getTitle();\n\n    const expandButton = createExpandButton();\n\n    const heading = document.createElement(\"div\");\n    heading.className = \"todo-heading\";\n\n    heading.appendChild(checkbox);\n    heading.appendChild(label);\n    heading.appendChild(expandButton);\n\n    const description = document.createElement(\"p\");\n    description.className = \"description\";\n    description.textContent = todo.getDescription();\n\n    const dueDate = document.createElement(\"p\");\n    dueDate.className = \"due-date\";\n    dueDate.textContent = todo.getDueDate();\n\n    const details = document.createElement(\"div\");\n    details.className = \"todo-details\";\n\n    details.appendChild(description);\n    details.appendChild(dueDate);\n\n    const todoDiv = document.createElement(\"div\");\n    todoDiv.className = `todo ${todo.getPriority()}`;\n\n    todoDiv.appendChild(heading);\n    todoDiv.appendChild(details);\n\n    return todoDiv;\n  };\n\n  const createExpandButton = () => {\n    const expandButton = document.createElement(\"button\");\n    expandButton.className = \"expand-button\";\n    const span = document.createElement(\"span\");\n    span.className = \"material-icons-outlined\";\n    span.textContent = \"expand_more\";\n\n    expandButton.appendChild(span);\n\n    expandButton.addEventListener(\"click\", () => {\n      const details = expandButton.parentElement.parentElement.lastChild;\n      if (details.style.display == \"none\") {\n        details.style.display = \"flex\";\n        span.textContent = \"expand_less\";\n      } else {\n        details.style.display = \"none\";\n        span.textContent = \"expand_more\";\n      }\n    });\n\n    return expandButton;\n  };\n\n  const createNewTodoButton = (project) => {\n    const newTodoButton = document.createElement(\"button\");\n    newTodoButton.id = \"new-todo\";\n    newTodoButton.textContent = \"+ Add Todo\";\n    newTodoButton.addEventListener(\"click\", () => {\n      project.addTodo(\n        prompt(\"Title\"),\n        prompt(\"Description\"),\n        prompt(\"Due Date\"),\n        prompt(\"Priority\")\n      );\n      clearScreen();\n      displaySidebar();\n    });\n\n    return newTodoButton;\n  };\n\n  const clearScreen = () => {\n    while (main.firstChild) main.removeChild(main.firstChild);\n  };\n\n  const displaySidebar = () => {\n    main.appendChild(createSidebar());\n  };\n\n  const displayContent = (project) => {\n    main.appendChild(createContent(project));\n  };\n\n  return { displaySidebar };\n})();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/domController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domController */ \"./src/domController.js\");\n\n\n_domController__WEBPACK_IMPORTED_MODULE_0__.domController.displaySidebar();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectList\": () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nconst projectList = (() => {\n  let projects = [];\n  const getProjects = () => projects;\n  const addProject = (title) => {\n    projects.push((0,_project__WEBPACK_IMPORTED_MODULE_0__.project)(title));\n  };\n  const removeProject = (project) => {\n    projects.forEach((currentProject) => {\n      if (project.getTitle() == currentProject.getTitle()) {\n        projects.splice(projects.indexOf(project), 1);\n      }\n    });\n  };\n\n  return { getProjects, addProject, removeProject };\n})();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/projectList.js?");

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