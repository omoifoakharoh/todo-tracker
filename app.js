let todo = [];
// Get the html elements from index.html
const taskInputEL = document.getElementById("taskInput");
const dueDateEL = document.getElementById("dueDate");
// Add a click event listener to this button using a function called addTask
document.getElementById("addTask").addEventListener("click", addTask);
let taskItemEL = document.getElementById("taskItem");
let titleEL = document.getElementById("title");

// Create a function that acts as the event listener
function addTask () {
    // Get the value from the input fields
    taskInputEL.value;
    dueDateEL.value;
    // Calling  the function that creates the tasjs
     renderTask(); 
}

// The function that creates the task
function renderTask () {
// Dynamically creating a list and a div and a checkbox
   const li = document.createElement("li");
   const div = document.createElement("div");
   const paraTask = document.createElement("p");
   // displays the tasks on the screen
   paraTask.innerText= `Task: ${taskInputEL.value}`; 
   const paraDueDate = document.createElement("p");
   // displays the tasks on the screen
   paraDueDate.innerText = `Due: ${dueDateEL.value}`;
   const label = document.createElement("label");
   label.setAttribute("for", "Complete");
   label.innerText = "Complete";
   const checkbox = document.createElement("input");
   checkbox.setAttribute("type", "checkbox");
   checkbox.setAttribute("id", "done");
   
   div.appendChild(paraTask);
   div.appendChild(paraDueDate);
   div.appendChild(label);
   div.appendChild(checkbox);
   li.appendChild(div);
   // ties everything beautifully to the list
   taskItemEL.appendChild(li);
  
    taskInputEL.value = "";
    dueDateEL.value = "";
}

// THIS CODE VERSION 1.1 WORKED VERY FINE
// let getTodoFromLocalStorage = JSON.parse(localStorage.getItem("myTodo"));
// console.log(getTodoFromLocalStorage);
// localStorage.clear()

// addTaskEL.addEventListener("click", function () {
//     todo.push(taskInputEL.value);
//     taskInputEL.value = ""
//     localStorage.setItem("myTodo", JSON.stringify(todo));
//     displayTodo();
      
// });


// function displayTodo () {
//     let todoItem = "";
//     for (let i = 0; i < todo.length; i++) {
//         todoItem += `
//         <li><input type="radio">
//             ${todo[i]}
//         </li>`
//     }
//     taskItemEL.innerHTML = todoItem;
//     titleEL.textContent = `Todo ${todo.length} tasks `;
// }

