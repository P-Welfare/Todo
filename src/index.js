const { isToday, isTomorrow } = require("date-fns")

projectList = [] 

class toDo {
    constructor(title, description, dueDate, priority,) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    }   


}
// construct project
const project = (title) => {
    const tasks = []
    return {title, tasks}
};
// create test project
defaultProject = project('Today')

// basic add task function
function addTask(task) {
    defaultProject.tasks.push(task)
};

// default todo test
defaultToDo = new toDo('brush teeth', 'brush em good', 'today', 'high')


// create test todo add
addTask(defaultToDo)

function addProject(newProject) {
    projectList.push(newProject)
}

addProject(defaultProject)

/*
default array of todos 
CRUD 
option to change array (project) todo


add new array of todos 
CRUD 
option to change array (project) of todo


SEPERATE THE APPLICATION LOGIC =============== FROM THE MODULES 

*/




