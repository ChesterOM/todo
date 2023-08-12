import { Task, Project, ProjectList, TaskList, projectList, taskList, getCurrentProject } from './app.js';
import { renderAllTasks, closeProjectForm, closeTaskForm, updateTask, taskModal, projectModal,taskForm, projectForm, addProjectButton, addTaskButton, addProjectForm, addTaskForm, renderProjects, renderTasks } from './view.js'


let isEditMode = false;
let taskToEdit = null;

function setIsEditMode(mode) {
    isEditMode = mode;
}

function setTaskToEdit(task) {
    taskToEdit = task;
}

function toggleEditMode() {
    isEditMode = !isEditMode;
}

function createNewTask() {
    
    const taskTitle = document.getElementById('task-title-input').value;
    const taskDescription = document.getElementById('task-description-input').value;
    const taskTime = new Date (document.getElementById('task-time-input').value);
    const taskPriority = document.getElementById('task-priority-input').value;

    if (!taskTitle.trim()) {
        console.log("Task title is blank. Task was not created.");
        return
    }
    const newTask = new Task (taskTitle, taskDescription, taskTime, taskPriority);
    taskList.addTask(newTask);

    const current = getCurrentProject();
    if (current) {
        current.addTask(newTask);
        renderTasks(current.tasks);
    }
    else {
        console.log("No current project selected. Task added to global task list but not to any project.")
    }
    
};

function createNewProject() {
    const projectName = document.getElementById('project-name-input').value;

    if (!projectName.trim()) {
        console.log("Task title is blank. Task was not created.");
        return
    }

    const newProject = new Project(projectName);
    projectList.addProject(newProject);

    renderProjects()
};

const submitTaskForm = () => {
    if (isEditMode) {
        updateTask();
    } else {
        createNewTask();
    }
    taskModal.setAttribute('style', 'display: none'); 
    taskForm.reset();
};

const submitProjectForm = () => {
        createNewProject()
        projectModal.setAttribute('style', 'display: none');
        projectForm.reset() 
};

export { submitTaskForm, submitProjectForm, setIsEditMode, setTaskToEdit, isEditMode, taskToEdit, toggleEditMode }