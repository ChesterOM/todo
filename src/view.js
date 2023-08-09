import { Task, Project, ProjectList, TaskList, projectList, taskList } from './app.js';

    const taskModal = document.querySelector('.task-modal');
    const projectModal = document.querySelector('.project-modal');
    const projectContainer = document.querySelector(".project-container");
    const taskContainer = document.querySelector(".display-contents");
    const close = document.querySelectorAll('.close');


//remember to invoke these on index.js
const addProjectButton = () => {
   const btn = document.getElementById("new-project-btn");
   btn.addEventListener("click", addProjectForm);
};

const addTaskButton = () => {
    const btn = document.getElementById("add-task-btn");
    btn.addEventListener("click", addTaskForm);
 }


const renderProjects = () => {
    projectContainer.innerHTML = "";
    projectList.projects.forEach(project => {
       
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
    projectModal.setAttribute('style', 'display: flex');
    closeProjectForm()
};

const addTaskForm = () => {
    taskModal.setAttribute('style', 'display: flex');
    closeTaskForm()
};

const closeProjectForm = () => {
    close.forEach(closeBtn => {
        closeBtn.addEventListener('click', ()=> {
            projectModal.setAttribute('style', 'display: none');
        });
    });
}

const closeTaskForm = () => {
    close.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            taskModal.setAttribute('style', 'display: none');
        });
    });
}

export { closeProjectForm, closeTaskForm, projectModal,taskModal, addProjectButton, addTaskButton, addProjectForm, addTaskForm, renderProjects, renderTasks };  