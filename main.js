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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domController\": () => (/* binding */ domController)\n/* harmony export */ });\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n\n\nconst domController = (() => {\n  const main = document.querySelector(\"main\");\n\n  const createProjectList = () => {\n    const sidebar = document.createElement(\"div\");\n    sidebar.id = \"sidebar\";\n\n    _projectList__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjects().forEach((project) => {\n      sidebar.appendChild(createProject(project));\n    });\n\n    const newProjectButton = document.createElement(\"button\");\n    newProjectButton.id = \"new-project\";\n    newProjectButton.textContent = \"Add Project\";\n    newProjectButton.addEventListener(\"click\", () => {\n      clearScreen();\n      _projectList__WEBPACK_IMPORTED_MODULE_0__.projectList.addProject(prompt(\"Enter project name\"));\n      displaySidebar();\n    });\n    sidebar.appendChild(newProjectButton);\n\n    return sidebar;\n  };\n\n  const createProject = (project) => {\n    const title = document.createElement(\"h2\");\n    title.className = \"title\";\n    title.textContent = project.getTitle();\n\n    const pendingTodos = document.createElement(\"h2\");\n    pendingTodos.className = \"pending-todos\";\n    pendingTodos.textContent = project.getTodos().length;\n\n    const projectDiv = document.createElement(\"div\");\n    projectDiv.className = \"project\";\n    projectDiv.addEventListener(\"click\", () =>\n      toggleTodos(projectDiv, project)\n    );\n\n    projectDiv.appendChild(title);\n    projectDiv.appendChild(pendingTodos);\n\n    return projectDiv;\n  };\n\n  const createTodos = (project) => {\n    const todosDiv = document.createElement(\"div\");\n    todosDiv.id = \"todos\";\n\n    project.getTodos().forEach((todo) => {\n      todosDiv.appendChild(createTodo(todo));\n    });\n\n    const newTodoButton = document.createElement(\"button\");\n    newTodoButton.id = \"new-todo\";\n    newTodoButton.textContent = \"Add Todo\";\n    newTodoButton.addEventListener(\"click\", () => {\n      clearScreen();\n      project.addTodo(\n        prompt(\"Enter todo name\"),\n        prompt(\"Enter description\"),\n        prompt(\"Enter due date\"),\n        prompt(\"Enter priority\")\n      );\n      displaySidebar();\n      displayTodos(project);\n    });\n    todosDiv.appendChild(newTodoButton);\n\n    return todosDiv;\n  };\n\n  const createTodo = (todo) => {\n    const todoElement = document.createElement(\"div\");\n    todoElement.className = \"todo\";\n    const title = document.createElement(\"h3\");\n    title.className = \"title\";\n    title.textContent = todo.getTitle();\n    todoElement.addEventListener(\"click\", () => toggleTodoDetails(todoElement));\n\n    todoElement.appendChild(title);\n    todoElement.appendChild(createTodoDetails(todo));\n\n    return todoElement;\n  };\n\n  const createTodoDetails = (todo) => {\n    const detailsDiv = document.createElement(\"div\");\n    detailsDiv.className = \"todo-details\";\n    detailsDiv.style.display = \"none\";\n    const description = document.createElement(\"p\");\n    description.textContent = todo.getDescription();\n    const dueDate = document.createElement(\"p\");\n    dueDate.textContent = todo.getDueDate();\n    const priority = document.createElement(\"p\");\n    priority.textContent = todo.getPriority();\n\n    detailsDiv.appendChild(description);\n    detailsDiv.appendChild(dueDate);\n    detailsDiv.appendChild(priority);\n\n    return detailsDiv;\n  };\n\n  const displaySidebar = () => {\n    main.appendChild(createProjectList());\n  };\n\n  const displayTodos = (project) => {\n    main.appendChild(createTodos(project));\n  };\n\n  const toggleTodos = (projectDiv, project) => {\n    clearScreen(\"todos\");\n    if (projectDiv.className == \"project\") {\n      Array.from(projectDiv.parentNode.children).forEach((child) =>\n        child.classList.remove(\"active\")\n      );\n      projectDiv.classList.add(\"active\");\n      displayTodos(project);\n    } else {\n      projectDiv.className = \"project\";\n    }\n  };\n\n  const toggleTodoDetails = (todoElement) => {\n    if (todoElement.lastChild.style.display == \"none\") {\n      todoElement.lastChild.style.display = \"block\";\n    } else {\n      todoElement.lastChild.style.display = \"none\";\n    }\n  }\n\n  const clearScreen = (parameter) => {\n    if (parameter == \"todos\") {\n      if (main.children.length > 1) {\n        main.removeChild(main.lastChild);\n      }\n    } else {\n      while (main.firstChild) main.removeChild(main.firstChild);\n    }\n  };\n\n  return { displaySidebar };\n})();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/domController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domController */ \"./src/domController.js\");\n\n\n_domController__WEBPACK_IMPORTED_MODULE_0__.domController.displaySidebar();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectList\": () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nconst projectList = (() => {\n  let projects = [];\n  const getProjects = () => projects;\n  const addProject = (title) => {\n    projects.push((0,_project__WEBPACK_IMPORTED_MODULE_0__.project)(title));\n  };\n  const removeProject = (project) => {\n    projects.forEach((currentProject) => {\n      if (project.getTitle() == currentProject.getTitle()) {\n        projects.splice(projects.indexOf(project), 1);\n      }\n    });\n  };\n\n  return { getProjects, addProject, removeProject };\n})();\n\nprojectList.addProject(\"Inbox\");\nprojectList.getProjects()[0].addTodo(\"These\", \"todos\", \"\", \"low\");\nprojectList.getProjects()[0].addTodo(\"Are\", \"not\", \"\", \"medium\");\nprojectList.getProjects()[0].addTodo(\"Placeholder\", \"random\", \"\", \"low\");\nprojectList.getProjects()[0].addTodo(\"Tasks\", \"\", \"\", \"high\");\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/projectList.js?");

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