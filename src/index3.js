// const { isToday, isTomorrow } = require("date-fns")
//import {showDefaultUI} from './interface.js'
//export {projectListDOM}
//export {todoListDOM}
import css from "./file.css";
let projectList = []

export {projectList}

//import './interface.js'



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
const defaultProject = project('Today')
const defaultProject2 = project('Tomorrow')
// basic add task function
function addTask(task) {
    defaultProject.tasks.push(task)
};

// default todo test
const defaultToDo = new toDo('brush teeth', 'brush em good', 'today', 'high')
const defaultToDo2 = new toDo('eat teeth', 'eat em good', 'today', 'high' )

// create test todo add
addTask(defaultToDo)
addTask(defaultToDo2)


// function to test add project to projectList
function addProject(newProject) {
    projectList.push(newProject)
}

// add project to projectlist
addProject(defaultProject)
addProject(defaultProject2)

// add in forEach of array or for... loop
function deleteProject(index) {
    projectList.splice(index, 1)
}
// let projectListDOM = projectList[0].title
//console.log(projectList[0])
//let todoListDOM = [projectList[0].tasks[0].title, projectList[0].tasks[0].description, projectList[0].tasks[0].dueDate, projectList[0].tasks[0].priority]
//showDefaultUI(projectListDOM)



/*

SEPERATE THE APPLICATION LOGIC =============== FROM THE MODULES 

*/



//function listProjects(element) {
    
 
 
 
 //}
 
 
projectList.forEach((element, i) =>
 {


    const sidebar = document.getElementById('sidebar')
    const sideBarContainer = document.createElement('div')
    
    sideBarContainer.id = `${i}`;
    sideBarContainer.textContent = `${projectList[i].title}`;
    const sideBarButton = document.createElement('button');
   
    sidebar.appendChild(sideBarContainer) 
    
    sideBarButton.textContent = '+'
    sideBarButton.className = 'sideBarButtons'
    sideBarButton.setAttribute("buttonIndex", i)
    sideBarContainer.appendChild(sideBarButton)
 
 
                  
   
})

const sideBarButtons = Array.from(document.getElementsByClassName('sideBarButtons'))
sideBarButtons.forEach((element, i) => {
    let indexRef = i


    element.addEventListener('click', () => {
        DOMArea.textContent = ''
        for (let i= 0; i < projectList.length ; i++) { 
            
            writeToDoDiv(i, indexRef)
        }   
        deleteButtonFunc()


    })



})



const writeToDoDiv = (i, indexRef) => 
{
    let DOMArea = document.getElementById('DOMArea')
    let DOMAreaButton = document.createElement('button')
    DOMAreaButton.className = 'DOMAreaButton'
    DOMAreaButton.textContent = 'Delete'
    let toDoContainer = document.createElement('div')
    toDoContainer.setAttribute("dataindex", i)
    
    toDoContainer.textContent = `${[projectList[indexRef].tasks[i].title,  projectList[indexRef].tasks[i].description, projectList[indexRef].tasks[i].dueDate, projectList[indexRef].tasks[i].priority]}`
   
   
    DOMArea.appendChild(toDoContainer)
    toDoContainer.appendChild(DOMAreaButton)
}



const deleteButtonFunc = () => 
{ 
    const deleteButtons = Array.from(document.getElementsByClassName('DOMAreaButton'))
    deleteButtons.forEach((element, i) => {
        let indexRef = i

            element.addEventListener('click', () => {
            deleteToDo(i)
            console.log(`${i}`)

            })
    })

}    


const deleteToDo = () => {
    projectList[0].tasks.splice(0, 1)
    
}
/* NEXT TO DO

FUNCTION TO ADD TO SPECIFIC OBJECT IN THE ARRAY
FUNCTION TO SHOW TODO BASED ON WHAT IS SELECTED ON THE LEFT
MAKE THE LEFT LIST TITLES (TODAY TOMORROW ETC) ACT AS CLICKABLE BUTTONS
WRAP FOR EACH PROJECTLIST INTO RENDER/WIPE FUNCTION
 ,....START THINKING ABOUT ADDING BUTTONS ETC ON CREATION
 */