// Array we will use to keep track of todoList content 
let todoList = [
]

// Constant references we will use to modify our html 
const listElement = document.getElementById("list")
const addButton = document.getElementById("add_button")
const deleteButton = document.getElementById("delete_button")


function updateTasks(){
    listElement.innerHTML = ""
    for (let i = 0; i < todoList.length; i++){
        let newTaskElement = document.createElement("li") //Creates new html list item (<li></li>) for each i
        newTaskElement.textContent = todoList[i]; //Sets the text content of the html list item to whatever is at index i in todoList Array
    
        //Lets make sure each added task has a delete button
        let deleteButton = document.createElement("button"); // create html button element
        deleteButton.textContent = "Remove"; // Add text content to html element 
        deleteButton.classList.add("deleteButton"); // Add the CSS class
        // Create onclick functionality for button:
        deleteButton.onclick = function(){
            todoList.splice(i, 1) // remove one item from todoList starting at index i
            updateTasks(); // Update HTML after removing task
        }

        newTaskElement.appendChild(deleteButton) //add delete button to newTaskElement html item
        listElement.appendChild(newTaskElement) // Adds the new HTML list item with the specified text content and delete button to the HTML via the const reference 
    }
}


// Function that takes in a taskName, adds it to todoList array and called updateTasks()
// updateTasks() will then go to the array and fetch the newest addition, adding it to the HTML 
function addTask(taskName){
    todoList.push(taskName)
    updateTasks();
}

//Add an event listener that reacts to the addButton being clicked
//On Click it will trigger the addTask_onclick function, defined below
addButton.addEventListener("click", addTask_onclick)

// This function will be triggered when addButton is clicked, and will bring up a prompt
// whatever text is input into the prompt will be passed to the previously defined addTask function
function addTask_onclick(){
    const taskName = prompt("Enter Task Name");
    addTask(taskName);
}