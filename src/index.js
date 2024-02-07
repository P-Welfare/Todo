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
    populateStorage()

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
const defaultToDo2 = new toDo('eat teeth', 'eat em good', 'today', 'medium' )
const defaultToDo3 = new toDo('find teeth', 'eat em good', 'today', 'low' )


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
        toDoContainer.id = projectList[id].tasks[i].priority
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
    activateEdit(id)
    activateDelete(id)
    populateStorage()

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
                     element.addEventListener('click', () => {
                        let indexRef = element.getAttribute('dataindex')
                        console.log(indexRef)
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
            dueDateInput.setAttribute("type", "date")
            dueDateInput.id = 'dueDate'

            const divPriorityContainer = document.createElement('div')
            formContainer.appendChild(divPriorityContainer)
        
        const priorityField = document.createElement('label')
            priorityField.setAttribute("for", "low")
            priorityField.textContent = "low"
        const priorityInput = document.createElement("INPUT")
            priorityInput.setAttribute("type", "radio")
            priorityInput.id = 'low'
            priorityInput.value = 'low'
            priorityInput.name = 'priority'
       
        divPriorityContainer.appendChild(priorityField)
        divPriorityContainer.appendChild(priorityInput)

        
        
        const divPriorityContainer2 = document.createElement('div')
            formContainer.appendChild(divPriorityContainer2)
        const priorityField2 = document.createElement('label')
            priorityField2.setAttribute("for", "medium")
            priorityField2.textContent = "medium"    
        const priorityInput2 = document.createElement("INPUT")
            priorityInput2.setAttribute("type", "radio")
            priorityInput2.id = 'medium'
            priorityInput2.value = 'medium'
            priorityInput2.name = 'priority'
        
            divPriorityContainer2.appendChild(priorityField2)
            divPriorityContainer2.appendChild(priorityInput2)
        

        const divPriorityContainer3 = document.createElement('div')
            formContainer.appendChild(divPriorityContainer3)
        const priorityField3 = document.createElement('label')
            priorityField3.setAttribute("for", "high")
            priorityField3.textContent = "high"
            const priorityInput3 = document.createElement("INPUT")
            priorityInput3.setAttribute("type", "radio")
            priorityInput3.id = 'high'
            priorityInput3.value = 'high'
            priorityInput3.name = 'priority'
        
            divPriorityContainer3.appendChild(priorityField3)
            divPriorityContainer3.appendChild(priorityInput3)

      


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
        const priority = document.querySelector('input[name="priority"]:checked').value
        var addNewTask = new toDo(title.value, description.value, dueDate.value, priority)
        addTask(id, addNewTask)
        DOMArea.textContent = ''
        addToTaskArea(id)
        populateStorage()

    } else if (status == 'edit') {
        const title = document.getElementById("title");
        const description = document.getElementById("description")
        const dueDate = document.getElementById("dueDate")
        const priority = document.querySelector('input[name="priority"]:checked').value
        projectList[id].tasks[indexStatus].title = title.value
        projectList[id].tasks[indexStatus].description = description.value
        projectList[id].tasks[indexStatus].dueDate = dueDate.value
        projectList[id].tasks[indexStatus].priority = priority
        DOMArea.textContent = ''
        addToTaskArea(id)
        populateStorage()


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
            populateStorage()

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
activateDelete(id)

}



function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }


if (storageAvailable("localStorage")) {
    console.log("Local Storage Available")
    
    
 
    function checkLocalStorage() {
        if (!localStorage.getItem("projectList")) {
            populateStorage()
            } else {    
        getProjectList();
      } 
    } 
    checkLocalStorage()

      } else {
        console.log("No local storage available")
        }

        function getProjectList() {
            let stringProjectList = localStorage.getItem("projectList")
            let stringProjectList2 = JSON.parse(stringProjectList)
           console.log(stringProjectList2)
           projectList = stringProjectList2
           console.log(projectList)
           
       }
       function populateStorage() {
           let myJSON = JSON.stringify(projectList)
           console.log(myJSON)
           localStorage.setItem("projectList", myJSON);
       }


       populateProjectListDOM()

