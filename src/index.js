import css from "./file.css";

let projectList = []



class toDo {
    constructor(title, description, dueDate, priority,) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    
    }   


}


const project = (title) => {
    const tasks = []
    return {title, tasks}
}


const defaultProject = project('Today')
const defaultProject2 = project('Tomorrow')

function addProject(newProject) {
    projectList.push(newProject)
}

addProject(defaultProject)
addProject(defaultProject2)

function addTask(project,task) {
    projectList[project].tasks.push(task)
};

const defaultToDo = new toDo('brush teeth', 'brush em good', 'today', 'high')
const defaultToDo2 = new toDo('eat teeth', 'eat em good', 'today', 'high' )
const defaultToDo3 = new toDo('find teeth', 'eat em good', 'today', 'high' )


addTask(0,defaultToDo)
addTask(1,defaultToDo2)
addTask(1,defaultToDo3)
projectList.forEach((element, i) =>
 {  


    const sidebar = document.getElementById('sidebar')
    const sideBarContainer = document.createElement('div')
    
    sideBarContainer.id = `${i}`;
    sideBarContainer.textContent = `${projectList[i].title}`;
    sideBarContainer.className = `projectTitle`
    
    sidebar.appendChild(sideBarContainer) 
    
                  
   
})

const DOMArea = document.getElementById('DOMArea')

const addToTaskArea = (id) => {

    for (let i= 0; i < projectList[id].tasks.length ; i++) { 
        const DOMArea = document.getElementById('DOMArea')
        let toDoContainer = document.createElement('div')
        toDoContainer.textContent = `${projectList[id].tasks[i].title}`
        DOMArea.appendChild(toDoContainer)
        
        let DOMAreaButton = document.createElement('button')
        DOMAreaButton.className = 'DOMAreaButton'
        DOMAreaButton.textContent = 'Delete'
        DOMAreaButton.setAttribute("dataindex", i)

        toDoContainer.appendChild(DOMAreaButton)

    


    }
    activateDelete(id)


}

const projectTitleList = Array.from(document.getElementsByClassName('projectTitle'))
projectTitleList.forEach((project, i) => {

    let id = project.id
    project.addEventListener('click', () => {
        DOMArea.textContent = ''

    console.log(i)
    addToTaskArea(id)
    })
    
    

}) 
const deleteToDo = (id, indexRef) => {
    projectList[id].tasks.splice(indexRef, 1)

}

const activateDelete = (id) => {
        const deleteButtons = Array.from(document.getElementsByClassName('DOMAreaButton'))
            deleteButtons.forEach((element) => {
                let indexRef = element.dataindex
                     element.addEventListener('click', () => {
                     deleteToDo(id, indexRef)
                     DOMArea.textContent = ''
                     addToTaskArea(id)

                    })
            })


}
