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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   ProjectList: () => (/* binding */ ProjectList),\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   TaskList: () => (/* binding */ TaskList),\n/* harmony export */   currentProject: () => (/* binding */ currentProject),\n/* harmony export */   getCurrentProject: () => (/* binding */ getCurrentProject),\n/* harmony export */   projectList: () => (/* binding */ projectList),\n/* harmony export */   setCurrentProject: () => (/* binding */ setCurrentProject),\n/* harmony export */   taskList: () => (/* binding */ taskList)\n/* harmony export */ });\nlet taskIdCounter = 0;\nlet projectIdCounter = 0;\nlet currentProject = null\n\nclass Task {\n    constructor(title, description, dueDate, priority) {\n        this.id = taskIdCounter++;\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.completed = false;\n    };\n    \n    markComplete() {\n        this.completed = true;\n    };\n\n    updatePriority(newPriority){\n        this.priority = newPriority;\n    };\n};\n\nclass Project {\n    constructor(title) {\n        this.id = projectIdCounter++;\n        this.title = title;\n        this.tasks = [];\n    };\n\n    addTask(task) {\n        this.tasks.push(task);\n    };\n\n    removeTask(taskId) {\n        this.tasks = this.tasks.filter(task => task.id !== taskId);\n    };\n}\n\nclass ProjectList {\n    constructor(){\n        this.projects = [];\n    };\n    \n    addProject(project) {\n        this.projects.push(project);\n    };\n\n    deleteProject(projectId) {\n        this.projects = this.projects.filter(project => project.id !== projectId);\n    };\n\n    getProject(projectId) {\n        return this.projects.find(project => project.id === projectId);\n    }\n}\n\nclass TaskList {\n    constructor(){\n        this.tasks = [];\n    }\n\n    addTask(task){\n        this.tasks.push(task);\n    }\n\n    deleteTask(taskId) {\n        this.tasks = this.tasks.filter(task => task.id !== taskId);\n    }\n\n    markTaskComplete(taskId) {\n        const task = this.tasks.find(task => task.id === taskId);\n        if (task) {\n            task.markComplete();\n        }\n    }\n}\n\nfunction setCurrentProject(project) {\n    currentProject = project;\n};\n\nfunction getCurrentProject() {\n    return currentProject;\n};\n\n\n\nconst projectList = new ProjectList();\nconst taskList = new TaskList();\n\n/* const defaultProject = new Project(\"Default Project\");\nprojectList.addProject(defaultProject); */\n\n/* const testTask = new Task(\"Test Task\", \"This is a test task\", new Date(), \"low\");\ndefaultProject.addTask(testTask);\ntaskList.addTask(testTask); */\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/app.js?");

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   submitProjectForm: () => (/* binding */ submitProjectForm),\n/* harmony export */   submitTaskForm: () => (/* binding */ submitTaskForm)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ \"./src/view.js\");\n\n\n\n\n\n\n\nfunction createNewTask() {\n    \n    const taskTitle = document.getElementById('task-title-input').value;\n    const taskDescription = document.getElementById('task-description-input').value;\n    const taskTime = new Date (document.getElementById('task-time-input').value);\n    const taskPriority = document.getElementById('task-priority-input').value;\n\n    if (!taskTitle.trim()) {\n        console.log(\"Task title is blank. Task was not created.\");\n        return\n    }\n    const newTask = new _app_js__WEBPACK_IMPORTED_MODULE_0__.Task (taskTitle, taskDescription, taskTime, taskPriority);\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.taskList.addTask(newTask);\n\n    const current = (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)();\n    if (current) {\n        current.addTask(newTask);\n        (0,_view_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(current.tasks);\n    }\n    else {\n        console.log(\"No current project selected. Task added to global task list but not to any project.\")\n    }\n    \n};\n\nfunction createNewProject() {\n    const projectName = document.getElementById('project-name-input').value;\n\n    if (!projectName.trim()) {\n        console.log(\"Task title is blank. Task was not created.\");\n        return\n    }\n\n    const newProject = new _app_js__WEBPACK_IMPORTED_MODULE_0__.Project(projectName);\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.projectList.addProject(newProject);\n\n    (0,_view_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)()\n};\n\nconst submitTaskForm = () => {\n        createNewTask()\n        _view_js__WEBPACK_IMPORTED_MODULE_1__.taskModal.setAttribute('style', 'display: none'); \n        _view_js__WEBPACK_IMPORTED_MODULE_1__.taskForm.reset()\n};\n\nconst submitProjectForm = () => {\n        createNewProject()\n        _view_js__WEBPACK_IMPORTED_MODULE_1__.projectModal.setAttribute('style', 'display: none');\n        _view_js__WEBPACK_IMPORTED_MODULE_1__.projectForm.reset() \n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ \"./src/view.js\");\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller.js */ \"./src/controller.js\");\n\n\n\n\n(() => {\n    \n\n    \n    const task1 = new _app_js__WEBPACK_IMPORTED_MODULE_0__.Task(\"Task 1\", \"First task\", new Date(), \"high\");\n    const task2 = new _app_js__WEBPACK_IMPORTED_MODULE_0__.Task(\"Task 2\", \"Second task\", new Date(), \"medium\");\n    const task3 = new _app_js__WEBPACK_IMPORTED_MODULE_0__.Task(\"Task 3\", \"Third task\", new Date(), \"low\");\n    \n    _app_js__WEBPACK_IMPORTED_MODULE_0__.taskList.addTask(task1);\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.taskList.addTask(task2);\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.taskList.addTask(task3);\n    \n    // 2. Create Projects and Add Tasks to Them\n    const project1 = new _app_js__WEBPACK_IMPORTED_MODULE_0__.Project(\"Project 1\");\n    const project2 = new _app_js__WEBPACK_IMPORTED_MODULE_0__.Project(\"Project 2\");\n    \n    _app_js__WEBPACK_IMPORTED_MODULE_0__.projectList.addProject(project1);\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.projectList.addProject(project2);\n    \n    project1.addTask(task1);\n    project1.addTask(task2);\n    project2.addTask(task3);\n    \n    // 3. Mark Tasks as Complete\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.taskList.markTaskComplete(task1.id);\n    \n    // 4. Display Projects and Their Tasks\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.projectList.projects.forEach(project => {\n        console.log(`Project: ${project.title}`);\n        project.tasks.forEach(task => {\n            console.log(`   Task: ${task.title} | Status: ${task.completed ? 'Complete' : 'Incomplete'}`);\n        });\n        console.log('-------------------');\n    });\n\n\n\n    (0,_view_js__WEBPACK_IMPORTED_MODULE_1__.addTaskButton)()\n    ;(0,_view_js__WEBPACK_IMPORTED_MODULE_1__.addProjectButton)()\n\n    ;(0,_view_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)()\n    ;(0,_view_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(_app_js__WEBPACK_IMPORTED_MODULE_0__.taskList.tasks)\n    \n    ;(0,_view_js__WEBPACK_IMPORTED_MODULE_1__.renderAllTasks)()\n\n\n    const taskSubmit = document.getElementById('task-submit');\n    taskSubmit.addEventListener('click', _controller_js__WEBPACK_IMPORTED_MODULE_2__.submitTaskForm);\n\n    const projectSubmit = document.getElementById('project-submit');\n    projectSubmit.addEventListener('click', _controller_js__WEBPACK_IMPORTED_MODULE_2__.submitProjectForm);\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectButton: () => (/* binding */ addProjectButton),\n/* harmony export */   addProjectForm: () => (/* binding */ addProjectForm),\n/* harmony export */   addTaskButton: () => (/* binding */ addTaskButton),\n/* harmony export */   addTaskForm: () => (/* binding */ addTaskForm),\n/* harmony export */   closeProjectForm: () => (/* binding */ closeProjectForm),\n/* harmony export */   closeTaskForm: () => (/* binding */ closeTaskForm),\n/* harmony export */   projectForm: () => (/* binding */ projectForm),\n/* harmony export */   projectModal: () => (/* binding */ projectModal),\n/* harmony export */   renderAllTasks: () => (/* binding */ renderAllTasks),\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects),\n/* harmony export */   renderTasks: () => (/* binding */ renderTasks),\n/* harmony export */   taskForm: () => (/* binding */ taskForm),\n/* harmony export */   taskModal: () => (/* binding */ taskModal)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ \"./src/controller.js\");\n\n\n\n\n    const taskModal = document.querySelector('.task-modal');\n    const projectModal = document.querySelector('.project-modal');\n    const projectContainer = document.querySelector(\".project-container\");\n    const taskContainer = document.querySelector(\".display-contents\");\n    const close = document.querySelectorAll('.close');\n    const allTasksBtn = document.querySelector('.all-tasks');\n    const addTaskBtn = document.getElementById(\"add-task-btn\");\n    const projectForm = document.querySelector('.project-modal form');\n    const taskForm = document.querySelector('.task-modal form');\n\nconst addProjectButton = () => {\n   const btn = document.getElementById(\"new-project-btn\");\n   btn.addEventListener(\"click\", addProjectForm);\n};\n\nconst addTaskButton = () => {\n    const btn = document.getElementById(\"add-task-btn\");\n    btn.addEventListener(\"click\", addTaskForm);\n }\n\n\nconst renderProjects = () => {\n    projectContainer.innerHTML = \"\";\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.projectList.projects.forEach(project => {\n       \n        const projectElement = document.createElement('div');\n        projectElement.textContent = project.title;\n        projectElement.classList.add('project');\n\n        projectElement.addEventListener('click', () => {\n            (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(project);\n            renderTasks(project);\n        });\n\n        projectContainer.appendChild(projectElement);\n    });\n};\n\nconst renderTasks = (input) => {\n    taskContainer.innerHTML = \"\";\n    const tasksArray = Array.isArray(input) ? input : input.tasks;\n    tasksArray.forEach(task => {\n        \n        const taskDiv = document.createElement(\"div\");\n        taskDiv.classList.add('tasks');\n\n        const leftDiv = document.createElement('div');\n        leftDiv.classList.add('left')\n\n        const tickIcon = document.createElement('i');\n        tickIcon.classList.add('material-icons', 'tick');\n        tickIcon.textContent = 'radio_button_unchecked';\n\n        const taskText = document.createElement('p');\n        taskText.textContent = task.title;\n\n        leftDiv.appendChild(tickIcon);\n        leftDiv.appendChild(taskText);\n\n\n        const rightDiv = document.createElement('div');\n        rightDiv.classList.add('right');\n\n        const deleteIcon = document.createElement('i');\n        deleteIcon.classList.add('material-icons', 'options');\n        deleteIcon.textContent = 'delete';\n\n        const editIcon = document.createElement('i');\n        editIcon.classList.add('material-icons', 'options');\n        editIcon.textContent = 'edit';\n\n        const infoIcon = document.createElement('i');\n        infoIcon.classList.add('material-icons', 'options');\n        infoIcon.textContent = 'info';\n\n        rightDiv.appendChild(deleteIcon);\n        rightDiv.appendChild(editIcon);\n        rightDiv.appendChild(infoIcon);\n\n        taskDiv.appendChild(leftDiv);\n        taskDiv.appendChild(rightDiv);\n\n        taskContainer.appendChild(taskDiv);\n\n    })\n\n    if ((0,_app_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)()) {\n        addTaskBtn.style.display = 'flex'; \n    } else {\n        addTaskBtn.style.display = 'none';\n    }\n};\n\n\nconst renderAllTasks = () => {\n    allTasksBtn.addEventListener('click', () => {\n        (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(null);\n        renderTasks(_app_js__WEBPACK_IMPORTED_MODULE_0__.taskList.tasks);\n        addTaskBtn.style.display = 'none';\n    });\n}\n\n\nconst addProjectForm = () => {\n    projectModal.setAttribute('style', 'display: flex');\n    closeProjectForm()\n    _controller_js__WEBPACK_IMPORTED_MODULE_1__.submitProjectForm\n};\n\nconst addTaskForm = () => {\n    taskModal.setAttribute('style', 'display: flex');\n    closeTaskForm()\n    _controller_js__WEBPACK_IMPORTED_MODULE_1__.submitTaskForm\n};\n\nconst closeProjectForm = () => {\n    close.forEach(closeBtn => {\n        closeBtn.addEventListener('click', ()=> {\n            projectModal.setAttribute('style', 'display: none');\n        });\n    });\n};\n\nconst closeTaskForm = () => {\n    close.forEach(closeBtn => {\n        closeBtn.addEventListener('click', () => {\n            taskModal.setAttribute('style', 'display: none');\n        });\n    });\n};\n\n\n\n\n\n  \n\n//# sourceURL=webpack://restaurant-page/./src/view.js?");

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