import { saveData, loadData } from './storage'

let taskIdCounter = 0;
let projectIdCounter = 0;
let currentProject = null

class Task {
    constructor(title, description, dueDate, priority) {
        this.id = taskIdCounter++;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    };
    
    markComplete() {
        this.completed = !this.completed;
        saveData()
    };

    updatePriority(newPriority){
        this.priority = newPriority;
        saveData()
    };

    updateTaskInfo(newTitle, newDescription, newDueDate, newPriority){
        this.title = newTitle;
        this.description = newDescription;
        this.dueDate = newDueDate;
        this.priority = newPriority;
        saveData()
    }
    
    static setIdCounter(id) {
        taskIdCounter = id;
    }
};

class Project {
    constructor(title) {
        this.id = projectIdCounter++;
        this.title = title;
        this.tasks = [];
    };

    addTask(task) {
        this.tasks.push(task);
        saveData()
    };

    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        saveData()
    };
    static setIdCounter(id) {
        projectIdCounter = id;
    }
}

class ProjectList {
    constructor(){
        this.projects = [];
    };
    
    addProject(project) {
        this.projects.push(project);
        saveData()
    };

    deleteProject(projectId) {
        this.projects = this.projects.filter(project => project.id !== projectId);
        saveData()
    };

    getProject(projectId) {
        return this.projects.find(project => project.id === projectId);
    }
}

class TaskList {
    constructor(){
        this.tasks = [];
    }

    addTask(task){
        this.tasks.push(task);
        saveData()
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        saveData()
    }

    markTaskComplete(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.markComplete();
        }
        saveData()
    }
}

function setCurrentProject(project) {
    currentProject = project;
};

function getCurrentProject() {
    return currentProject;
};



const projectList = new ProjectList();
const taskList = new TaskList();

/* const defaultProject = new Project("Default Project");
projectList.addProject(defaultProject); */

/* const testTask = new Task("Test Task", "This is a test task", new Date(), "low");
defaultProject.addTask(testTask);
taskList.addTask(testTask); */

export { Task, Project, ProjectList, TaskList, projectList, taskList, setCurrentProject, getCurrentProject, currentProject};