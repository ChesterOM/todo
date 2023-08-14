import { Task, Project } from './app'

import { projectList, taskList } from "./app";

function saveData() {
    try {
        localStorage.setItem('projectList', JSON.stringify(projectList));
        localStorage.setItem('taskList', JSON.stringify(taskList));
    } catch (e) {
        console.log('Failed to save to local storage:', e);
    }
};

function loadData() {
    let loadedProjectList, loadedTaskList;

    try {
        loadedProjectList = JSON.parse(localStorage.getItem('projectList'), dateReviver);
        loadedTaskList = JSON.parse(localStorage.getItem('taskList'), dateReviver);
    } catch (e) {
        console.log('Failed to parse data from local storage:', e);
        return;
    }

    if (loadedTaskList && loadedTaskList.tasks) {
        taskList.tasks = loadedTaskList.tasks.map(taskData => {
            const task = new Task(taskData.title, taskData.description, new Date(taskData.dueDate), taskData.priority);
            task.id = taskData.id; 
            task.completed = taskData.completed; 
            return task;
        });

        if (taskList.tasks.length) {
            const maxTaskId = Math.max(...taskList.tasks.map(t => t.id));
            Task.setIdCounter(maxTaskId + 1);  
        }
    }

    if (loadedProjectList && loadedProjectList.projects) {
        projectList.projects = loadedProjectList.projects.map(projectData => {
            const project = new Project(projectData.title);
            project.id = projectData.id; 
            project.tasks = projectData.tasks; 
            return project;
        });

        if (projectList.projects.length) {
            const maxProjectId = Math.max(...projectList.projects.map(p => p.id));
            Project.setIdCounter(maxProjectId + 1);  
        }
    }
};

function dateReviver(key, value) {
    if (typeof value === "string" && /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)) {
        return new Date(value);
    }
    return value;
}

export { saveData, loadData };