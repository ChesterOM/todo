import { Task, Project, ProjectList, TaskList, projectList, taskList, currentProject, setCurrentProject, getCurrentProject } from './app.js';
import { submitTaskForm, submitProjectForm, setIsEditMode, setTaskToEdit, isEditMode, taskToEdit, toggleEditMode } from './controller.js'



    const taskModal = document.querySelector('.task-modal');
    const projectModal = document.querySelector('.project-modal');
    const infoModal = document.querySelector('.info-modal');
    const projectContainer = document.querySelector(".project-container");
    const taskContainer = document.querySelector(".display-contents");
    const close = document.querySelectorAll('.close');
    const allTasksBtn = document.querySelector('.all-tasks');
    const addTaskBtn = document.getElementById("add-task-btn");
    const projectForm = document.querySelector('.project-modal form');
    const taskForm = document.querySelector('.task-modal form');
    const infoTitle = document.getElementById('info-title');
    const infoDescription = document.getElementById('info-description');
    const infoDate = document.getElementById('info-date');
    const infoPriority = document.getElementById('info-priority');
    

const addProjectButton = () => {
   const btn = document.getElementById("new-project-btn");
   btn.addEventListener("click", addProjectForm);
};

const addTaskButton = () => {
    const btn = document.getElementById("add-task-btn");
    btn.addEventListener("click", () => {
        setIsEditMode(false)
        updateModalButtonText()
        addTaskForm()
    });
 }


const renderProjects = () => {
    projectContainer.innerHTML = "";
    projectList.projects.forEach(project => {
       
        const projectElement = document.createElement('div');
        projectElement.textContent = project.title;
        projectElement.classList.add('project');

        projectElement.addEventListener('click', () => {
            setCurrentProject(project);
            renderTasks(project);
        });

        projectContainer.appendChild(projectElement);
    });
};

const renderTasks = (input) => {
    taskContainer.innerHTML = "";
    const tasksArray = Array.isArray(input) ? input : input.tasks;
    tasksArray.forEach(task => {
        
        const taskDiv = document.createElement("div");
        taskDiv.classList.add('tasks');

        const leftDiv = document.createElement('div');
        leftDiv.classList.add('left')

        const tickIcon = document.createElement('i');
        tickIcon.classList.add('material-icons', 'tick');

        const taskText = document.createElement('p');
        taskText.textContent = task.title;

        if (task.completed) {
            tickIcon.textContent = 'check_circle';
            taskText.style.textDecoration = 'line-through';
        } else {
            tickIcon.textContent = 'radio_button_unchecked';
        }

        leftDiv.appendChild(tickIcon);
        leftDiv.appendChild(taskText);


        const rightDiv = document.createElement('div');
        rightDiv.classList.add('right');

        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('material-icons', 'options');
        deleteIcon.id = 'delete';
        deleteIcon.textContent = 'delete';

        const editIcon = document.createElement('i');
        editIcon.classList.add('material-icons', 'options');
        editIcon.id = 'edit';
        editIcon.textContent = 'edit';
        editIcon.addEventListener('click', () => {
            setIsEditMode(true); 
            setTaskToEdit(task); 
            prefillModal(task);
            updateModalButtonText()
            taskModal.setAttribute('style', 'display: flex'); 
            closeTaskForm()
        });

        const infoIcon = document.createElement('i');
        infoIcon.classList.add('material-icons', 'options');
        infoIcon.id = 'info';
        infoIcon.textContent = 'info';
        infoIcon.addEventListener('click', () => {
            renderInfo(task)
            addInfoForm()
            closeInfoForm()
        });

        rightDiv.appendChild(deleteIcon);
        rightDiv.appendChild(editIcon);
        rightDiv.appendChild(infoIcon);

        taskDiv.appendChild(leftDiv);
        taskDiv.appendChild(rightDiv);

        taskContainer.appendChild(taskDiv);
        attachDeleteTaskEvent(task.id, taskDiv);

        leftDiv.addEventListener('click', () => {
            task.markComplete();
            renderTasks(getCurrentProject() ? getCurrentProject().tasks : taskList.tasks);
        });

    });

    if (getCurrentProject()) {
        addTaskBtn.style.display = 'flex'; 
    } else {
        addTaskBtn.style.display = 'none';
    }
};

const renderInfo = (task) => {

  infoTitle.textContent = task.title

  infoDescription.textContent = task.description
  
  if(task.dueDate) {
    infoDate.textContent = task.dueDate.toLocaleDateString()  
  } else {
    infoDate.textContent = "No date selected."
  }

  infoPriority.textContent = task.priority

}

const renderAllTasks = () => {
    allTasksBtn.addEventListener('click', () => {
        setCurrentProject(null);
        renderTasks(taskList.tasks);
        addTaskBtn.style.display = 'none';
    });
}


const addProjectForm = () => {
    projectModal.setAttribute('style', 'display: flex');
    closeProjectForm()
    submitProjectForm
};

const addTaskForm = () => {
    taskModal.setAttribute('style', 'display: flex');
    closeTaskForm()
    submitTaskForm
};

const addInfoForm = () => {
    infoModal.setAttribute('style', 'display: flex');
};

const closeProjectForm = () => {
    close.forEach(closeBtn => {
        closeBtn.addEventListener('click', ()=> {
            projectModal.setAttribute('style', 'display: none');
        });
    });
};

const closeTaskForm = () => {
    close.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            taskModal.setAttribute('style', 'display: none');
        });
    });
};

const closeInfoForm = () => {
    close.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            infoModal.setAttribute('style', 'display: none');
        });
    });
};

function attachDeleteTaskEvent(taskId, taskDiv) {
    const deleteBtn = taskDiv.querySelector('#delete');
    deleteBtn.addEventListener('click', function() {
        
        taskList.deleteTask(taskId);

        projectList.projects.forEach(project => {
            project.removeTask(taskId)
        });

        const current = getCurrentProject();
        renderTasks(current ? current.tasks : taskList.tasks);
    });
};

function prefillModal(task) {
    document.getElementById('task-title-input').value = task.title;
    document.getElementById('task-description-input').value = task.description;
    // error when implemented. 
    /* document.getElementById('task-time-input').value = task.dueDate.toISOString().split('T')[0]; */ 
    document.getElementById('task-priority-input').value = task.priority;
}

function updateTask() {
    if (taskToEdit) {
        taskToEdit.title = document.getElementById('task-title-input').value;
        taskToEdit.description = document.getElementById('task-description-input').value;
        taskToEdit.dueDate = new Date(document.getElementById('task-time-input').value);
        taskToEdit.priority = document.getElementById('task-priority-input').value;

        const current = getCurrentProject();
        renderTasks(current ? current.tasks : taskList.tasks);

        toggleEditMode()
        setIsEditMode(null)
    }
}

function updateModalButtonText() {
    const buttonText = isEditMode ? "Edit Task" : "Add Task";
    document.getElementById('task-submit').innerText = buttonText;
}


export { renderAllTasks, updateTask, closeProjectForm, closeTaskForm, projectModal,taskModal, taskForm, projectForm, addProjectButton, addTaskButton, addProjectForm, addTaskForm, renderProjects, renderTasks };  