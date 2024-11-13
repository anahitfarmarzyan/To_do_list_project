document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const newTask = document.createElement("li");

        newTask.innerHTML = `${taskText} <button class="deleteBtn">Delete</button>`;
        taskList.appendChild(newTask);

        taskInput.value = "";

        newTask.querySelector(".deleteBtn").addEventListener("click", () => {
            newTask.remove();
        });
    } else {
        alert("Please enter a task.");
    }
}
