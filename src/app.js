
class Todo {
    constructor(title, description,dueDate,priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    };
    
    markComplete() {
        this.completed = true;
    }

    updatePriority(newPriority){
        this.priority = newPriority;
    }
}

class Project {
    constructor(title, localTodo) {
        this.title = title;
    }
}

class ProjectList {
    constructor(){
        this.projects = []
    }
    //add methods to add and delete
}

class TodoList{
    constructor(){
        this.todos = [];
    }
    //methods to add and delete
}

const projectList = new ProjectList();
const todoList = new TodoList();

projectList.addProject(new Project("Default Project"));
todoList.addTodo(new Todo("this is a test", "test description", "test date", "low priority"));