const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const taskCounter = document.getElementById("taskCounter");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    updateCounter();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        updateCounter();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        updateCounter();
    }
}, false);

function updateCounter() {
    let total = document.querySelectorAll("#list-container li").length;
    let completed = document.querySelectorAll("#list-container li.checked").length;
    let remaining = total - completed;

    taskCounter.innerText =
        "Total " + total +
        " | Completed: " + completed +
        " | Remaining: " + remaining;
}
