import { Task, Project, ProjectList, TaskList, projectList, taskList, getCurrentProject } from './app.js';
import { renderAllTasks, closeProjectForm, closeTaskForm, taskModal, projectModal, addProjectButton, addTaskButton, addProjectForm, addTaskForm, renderProjects, renderTasks } from './view.js'

function createNewTask() {
    const taskTitle = document.getElementById('task-title-input').value;
    const taskDescription = document.getElementById('task-description-input').value;
    const taskTime = new Date (document.getElementById('task-time-input').value);
    const taskPriority = document.getElementById('task-Priority-input').value;

    const newTask = new Task (taskTitle, taskDescription, taskTime, taskPriority);
    taskList.addTask(newTask);

    const current = getCurrentProject();
    if (current) {
        current.addTask(newTask);
    }

    renderTasks(taskList.tasks);
};