import { Task, Project, ProjectList, TaskList, projectList, taskList } from './app.js';
import { closeProjectForm, closeTaskForm, taskModal, projectModal, addProjectButton, addTaskButton, addProjectForm, addTaskForm, renderProjects, renderTasks } from './view.js'


(() => {
    
    
    const task1 = new Task("Task 1", "First task", new Date(), "high");
    const task2 = new Task("Task 2", "Second task", new Date(), "medium");
    const task3 = new Task("Task 3", "Third task", new Date(), "low");
    
    taskList.addTask(task1);
    taskList.addTask(task2);
    taskList.addTask(task3);
    
    // 2. Create Projects and Add Tasks to Them
    const project1 = new Project("Project 1");
    const project2 = new Project("Project 2");
    
    projectList.addProject(project1);
    projectList.addProject(project2);
    
    project1.addTask(task1);
    project1.addTask(task2);
    project2.addTask(task3);
    
    // 3. Mark Tasks as Complete
    taskList.markTaskComplete(task1.id);
    
    // 4. Display Projects and Their Tasks
    projectList.projects.forEach(project => {
        console.log(`Project: ${project.title}`);
        project.tasks.forEach(task => {
            console.log(`   Task: ${task.title} | Status: ${task.completed ? 'Complete' : 'Incomplete'}`);
        });
        console.log('-------------------');
    });



    addTaskButton()
    addProjectButton()

    renderProjects()
   /*  renderTasks()  */  




    
})();