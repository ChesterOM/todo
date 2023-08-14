import { Task, Project, ProjectList, TaskList, projectList, taskList, currentProject, setCurrentProject, getCurrentProject } from './app.js';
import { renderAllTasks, closeProjectForm, closeTaskForm, taskModal, projectModal, addProjectButton, addTaskButton, addProjectForm, addTaskForm, renderProjects, renderTasks } from './view.js'
import { submitTaskForm, submitProjectForm } from './controller.js'
import { loadData } from './storage.js'

(() => {
    loadData(); 
    addTaskButton()
    addProjectButton()
    renderProjects()
    renderTasks(taskList.tasks)
    renderAllTasks()


    const taskSubmit = document.getElementById('task-submit');
    taskSubmit.addEventListener('click', submitTaskForm);

    const projectSubmit = document.getElementById('project-submit');
    projectSubmit.addEventListener('click', submitProjectForm);
})();