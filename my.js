const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const emptyState = document.getElementById("emptyState");
const clearBtn = document.getElementById("clearBtn");

function updateUI() {
    const tasks = taskList.querySelectorAll("li");

    taskCount.textContent = tasks.length;

    if (tasks.length === 0) {
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
    }
}

function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        taskInput.focus();
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("div");
    checkbox.className = "checkbox";

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    checkbox.addEventListener("click", () => {
        checkbox.classList.toggle("checked");
        taskText.classList.toggle("completed");
    });

    taskText.addEventListener("click", () => {
        checkbox.classList.toggle("checked");
        taskText.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
        updateUI();
    });

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

    taskInput.focus();

    updateUI();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

clearBtn.addEventListener("click", () => {
    const completedTasks = document.querySelectorAll(".task-text.completed");

    completedTasks.forEach((task) => {
        task.parentElement.remove();
    });

    updateUI();
});

updateUI();