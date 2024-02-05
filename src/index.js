import css from "./file.css";

let projectList = []
let status = ''
let indexStatus = ''
const addNewProjectButton = document.getElementById("addNewProjectButton")
addNewProjectButton.addEventListener("click", (e) => {
    e.preventDefault
    let title = document.getElementById("projectTitle").value
    
    const newProjectAdd = project(title)

    addProject(newProjectAdd)
    console.log(projectList)

    populateProjectListDOM()
})

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


const DOMArea = document.getElementById('DOMArea')

const addToTaskArea = (id) => {

    for (let i= 0; i < projectList[id].tasks.length ; i++) { 
        const DOMArea = document.getElementById('DOMArea')
        let toDoContainer = document.createElement('div')
        let toDoPara = document.createElement('p')
        let toDoPara2 = document.createElement('p')
        let toDoPara3 = document.createElement('p')

        toDoPara.textContent = `${projectList[id].tasks[i].description}`
        toDoPara2.textContent = `${projectList[id].tasks[i].dueDate}`
        toDoPara3.textContent = `${projectList[id].tasks[i].priority}`

        toDoContainer.textContent = `${projectList[id].tasks[i].title}`
        DOMArea.appendChild(toDoContainer)
        
        let DOMAreaButton = document.createElement('button')
        DOMAreaButton.className = 'DOMAreaButton'
        DOMAreaButton.textContent = 'Delete'
        DOMAreaButton.setAttribute("dataindex", i)

        let DOMAreaEditButton = document.createElement('button')
        DOMAreaEditButton.className = 'DOMAreaEditButton'
        DOMAreaEditButton.textContent = 'Edit'
        DOMAreaEditButton.setAttribute("dataindex2", i)

        toDoContainer.appendChild(DOMAreaButton)
        toDoContainer.appendChild(toDoPara)
        toDoContainer.appendChild(toDoPara2)
        toDoContainer.appendChild(toDoPara3)
        toDoContainer.appendChild(DOMAreaButton)
        toDoContainer.appendChild(DOMAreaEditButton)

        


    }
    activateDelete(id)
    activateEdit(id)


}
const newTask = () => {

    const DOMCreateArea = document.getElementById('DOMCreateArea')
    DOMCreateArea.textContent = ''
    let newTaskButtonContainer = document.createElement('div')
    let newTaskButton = document.createElement('button')
       newTaskButton.textContent = 'Add'
   
       newTaskButton.id = 'newTaskButton'
       DOMCreateArea.appendChild(newTaskButtonContainer) 

       newTaskButtonContainer.appendChild(newTaskButton) 
   
   }
 //<div id="myModal" class="modal">


const listProjectTitles = () => {

 const projectTitleList = Array.from(document.getElementsByClassName('projectTitle'))
projectTitleList.forEach((project, i) => {

    project.addEventListener('click', () => {
        DOMArea.textContent = ''

    console.log(i)
        let id = i

    addToTaskArea(id)
    newTask()
    addModal(id)
    activateModal(id)

    })

    

}) 
}
listProjectTitles()
const deleteToDo = (id, indexRef) => {
    projectList[id].tasks.splice(indexRef, 1)

}

const activateDelete = (id) => {
        const deleteButtons = Array.from(document.getElementsByClassName('DOMAreaButton'))
            deleteButtons.forEach((element) => {
                let indexRef = element.getAttribute('dataindex').value
                     element.addEventListener('click', () => {
                     deleteToDo(id, indexRef)
                     DOMArea.textContent = ''
                     addToTaskArea(id)
                    })
            })


}

const activateEdit = (id) => {
    const editButtons = Array.from(document.getElementsByClassName('DOMAreaEditButton'))
        editButtons.forEach((element) => {
            
            let indexRef = element.getAttribute('dataindex2').value
                 element.addEventListener('click', () => {
                 editToDo(indexRef) 
                 DOMArea.textContent = ''
                 addToTaskArea(id)
                  console.log(id) 
                  const dialog = document.querySelector("dialog");
                 status = 'edit'
                 indexStatus = element.getAttribute('dataindex2')
                 console.log(status)
                 console.log(indexStatus)
                  dialog.showModal() 
                })
        })


}

const editToDo = (id) => {

}
const addModal = (id) => {
        
    const DOMCreateArea = document.getElementById('DOMCreateArea')

        const myModal = document.createElement('dialog')
             myModal.id = 'myModal'
             myModal.class = 'modal'
        
        const myModalContent = document.createElement('div')
            myModalContent.className = 'modal-content'
           
        const formContainer = document.createElement('p')
        
        const titleField = document.createElement('label')
            titleField.setAttribute("for", "title")
            titleField.textContent = "Title:"

        const titleInput = document.createElement('input')
            titleInput.setAttribute("type", "text")
            titleInput.id = 'title'

        const descriptionField = document.createElement('label')
            descriptionField.setAttribute("for", "description")
            descriptionField.textContent = "Description:"

        const descriptionInput = document.createElement('input')
        descriptionInput.setAttribute("type", "text")
        descriptionInput.id = 'description'

        const dueDateField = document.createElement('label')
            dueDateField.setAttribute("for", "dueDate")
            dueDateField.textContent = "Due Date:"

        const dueDateInput = document.createElement('input')
            dueDateInput.setAttribute("type", "text")
            dueDateInput.id = 'dueDate'

        const priorityField = document.createElement('label')
            priorityField.setAttribute("for", "priority")
            priorityField.textContent = "Priority:"

        const priorityInput = document.createElement('input')
        priorityInput.setAttribute("type", "text")
        priorityInput.id = 'priority'

        const modalText = document.createElement('p')
             modalText.textContent = `Add new task to '${projectList[id].title}'.`

        const modalSubmit = document.createElement('button')
            modalSubmit.textContent = 'Submit'
            modalSubmit.id = 'submit'
        const modalCancel = document.createElement('button')
            modalCancel.textContent = 'Cancel'
            modalCancel.id = 'cancel'
             DOMCreateArea.appendChild(myModal) 
             myModal.appendChild(myModalContent) 
             myModalContent.appendChild(modalText)
             myModalContent.appendChild(modalSubmit)
             myModalContent.appendChild(modalCancel)
             myModalContent.appendChild(formContainer)
             formContainer.appendChild(titleField)
             formContainer.appendChild(titleInput)
             formContainer.appendChild(descriptionField)
             formContainer.appendChild(descriptionInput)
             formContainer.appendChild(dueDateField)
             formContainer.appendChild(dueDateInput)
             formContainer.appendChild(priorityField)
             formContainer.appendChild(priorityInput)

        
   }

const activateModal = (id) => {
    const modalButton = document.getElementById('newTaskButton')
    const cancelButton = document.getElementById('cancel');
    const modalSubmit = document.getElementById('submit')
    const dialog = document.querySelector("dialog");

    modalSubmit.addEventListener('click', (event) => {
        event.preventDefault(); 
        dialog.close();
        if (status == 'add') {
        const title = document.getElementById("title");
        const description = document.getElementById("description")
        const dueDate = document.getElementById("dueDate")
        const priority = document.getElementById("priority")
        var addNewTask = new toDo(title.value, description.value, dueDate.value, priority.value)
        addTask(id, addNewTask)
        DOMArea.textContent = ''
        addToTaskArea(id)
    } else if (status == 'edit') {
        const title = document.getElementById("title");
        const description = document.getElementById("description")
        const dueDate = document.getElementById("dueDate")
        const priority = document.getElementById("priority")
        projectList[id].tasks[indexStatus].title = title.value
        projectList[id].tasks[indexStatus].description = description.value
        projectList[id].tasks[indexStatus].dueDate = dueDate.value
        projectList[id].tasks[indexStatus].priority = priority.value
        DOMArea.textContent = ''
        addToTaskArea(id)


    }

    })
    modalButton.addEventListener('click', () => {
        status = 'add'
        console.log(status)
        dialog.showModal();
    }) 
    cancelButton.addEventListener("click", () => {
        dialog.close();
      });

}
const activateProjectDeleteButtons = () => {
    let projectDeleteButtons = Array.from(document.getElementsByClassName('projectDeleteButtons'))
    projectDeleteButtons.forEach((button)  => {
        button.addEventListener('click', () => {
            sideBarContainer.textContent = ''
            
            let id = button.getAttribute('buttonindex')
            deleteProjectFunction(id)
            populateProjectListDOM(id)
            listProjectTitles()
            
        })
       
    }  )
    

}


const deleteProjectFunction = (id) => {
    projectList.splice(id, 1)
    console.log(id)
}



const populateProjectListDOM = (id) => {
    sideBarContainer.textContent = ""

projectList.forEach((element, i) =>
 {  

    const sideBarContainer = document.getElementById('sideBarContainer')
    const sideBarDivContainer = document.createElement('div')
    const sideBarContainer2 = document.createElement('div')
    const sideBarDivButton = document.createElement('button')
    sideBarDivButton.textContent = 'X'
    sideBarDivButton.setAttribute('buttonindex', i)
    sideBarDivButton.className = 'projectDeleteButtons'
    sideBarContainer2.id = `${i}`;
    sideBarContainer2.textContent = `${projectList[i].title}`;
    sideBarContainer2.className = `projectTitle`
    sideBarContainer.appendChild(sideBarDivContainer)
    sideBarDivContainer.appendChild(sideBarContainer2) 
    sideBarDivContainer.appendChild(sideBarDivButton)
   
   
})

activateProjectDeleteButtons()
listProjectTitles()
}

populateProjectListDOM()


