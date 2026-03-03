const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const taskCounter = document.getElementById("taskCounter");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
        return;
    }

    let li = document.createElement("li");
    li.innerText = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    inputBox.value = "";

    updateCounter();
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        updateCounter();
        saveData();
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        updateCounter();
        saveData();
    }
}, false);

function updateCounter() {
    let total = document.querySelectorAll("#list-container li").length;
    let completed = document.querySelectorAll("#list-container li.checked").length;
    let remaining = total - completed;

    taskCounter.innerText =
        "Total: " + total +
        " | Completed: " + completed +
        " | Remaining: " + remaining;
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

showTask();
updateCounter();
