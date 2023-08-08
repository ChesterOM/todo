import { Task, Project, ProjectList, TaskList, projectList, taskList, defaultProject, testTask } from './app.js';


const projectContainer = document.querySelector(".project-container");
const taskContainer = document.querySelector(".display-contents");

//remember to invoke these on index.js
const addProjectButton = () => {
   const btn = document.getElementById("new-project-btn");
   btn.addEventListener("click", addProjectForm);
};

const addTaskButton = () => {
    const btn = document.getElementById("add-task-btn");
    btn.addEventListener("click", addTaskForm);
 }


const renderProjects = (projectsArray) => {
    projectContainer.innerHTML = "";
    projectsArray.forEach(project => {
       
        const projectElement = document.createElement('div');
        projectElement.textContent = project.title;
        projectElement.classList.add('project');

        projectElement.addEventListener('click', () => {
            renderTasks(project);
        });

        projectContainer.appendChild(projectElement);
    });
};

const renderTasks = (project) => {
    taskContainer.innerHTML = "";
    project.tasks.forEach(task => {
        
        const taskDiv = document.createElement("div");
        taskDiv.classList.add('tasks');

        const leftDiv = document.createElement('div');
        leftDiv.classList.add('left')

        const tickIcon = document.createElement('i');
        tickIcon.classList.add('material-icons', 'tick');
        tickIcon.textContent = 'radio_button_unchecked';

        const taskText = document.createElement('p');
        taskText.textContent = task.title;

        leftDiv.appendChild(tickIcon);
        leftDiv.appendChild(taskText);


        const rightDiv = document.createElement('div');
        rightDiv.classList.add('right');

        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('material-icons', 'options');
        deleteIcon.textContent = 'delete';

        const editIcon = document.createElement('i');
        editIcon.classList.add('material-icons', 'options');
        editIcon.textContent = 'edit';

        const infoIcon = document.createElement('i');
        infoIcon.classList.add('material-icons', 'options');
        infoIcon.textContent = 'info';

        rightDiv.appendChild(deleteIcon);
        rightDiv.appendChild(editIcon);
        rightDiv.appendChild(infoIcon);

        taskDiv.appendChild(leftDiv);
        taskDiv.appendChild(rightDiv);

        taskContainer.appendChild(taskDiv);

    })
};

const addProjectForm = () => {

};

const addTaskForm = () => {

};