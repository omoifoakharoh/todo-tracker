let todo = [];
const taskInputEL = document.getElementById("taskInput");
const dueDateEL = document.getElementById("dueDate");
document.getElementById("addTask").addEventListener("click", addTask);
let taskItemEL = document.getElementById("taskItem");
let titleEL = document.getElementById("title");

function addTask () {
    taskInputEL.value;
    dueDateEL.value;
     renderTask(); 
}

function renderTask () {
    const li = document.createElement("li");
   const div = document.createElement("div");
   const paraTask = document.createElement("p");
   paraTask.innerText= `Task: ${taskInputEL.value}`; 
   const paraDueDate = document.createElement("p");
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

