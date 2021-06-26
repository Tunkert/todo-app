const form = document.querySelector("form");
const submit = document.querySelector("button");
const input = document.querySelector("input");
let tasks=[];
const taskList = document.getElementById("listTasks");


form.addEventListener("submit", (e) => {
  if(input.value === "" || input.value === null) {
    e.preventDefault();
    console.log("You haven't entered a task.");
  } else {
    e.preventDefault();
    console.log("task entered successfully.");
    localStorage.setItem('task', input.value);
    let currentTask = localStorage.getItem('task');
    if(currentTask !== "" && currentTask !== null) {
      tasks.push(currentTask);
      input.value="";
    }
    console.log(tasks);
  }
});

let orderedTaskList = document.getElementById("orderedTaskList");

taskList.addEventListener("click", function() {
  taskList.disabled = true;
  console.log("hello")
  for(let i = 0; i < tasks.length; i++) {
    const taskItem = document.createElement("li");
    taskItem.innerText = tasks[i];
    orderedTaskList.appendChild(taskItem);
    taskItem.addEventListener("click", function() {
      orderedTaskList.removeChild(taskItem);
      console.log("click");
    });
  }
});

function permanentlyRemove() {
  location.reload();
}