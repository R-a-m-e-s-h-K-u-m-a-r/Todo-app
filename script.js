const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

document.getElementById("add-btn").addEventListener("click", addTask);
addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("You must write something!!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    li.style.color = "#ff00ff";
    let span = document.createElement("span");
    span.innerHTML = "<i class='fa-solid fa-trash'></i>";
    li.appendChild(span);
    listContainer.appendChild(li);
    saveData();
  }
  inputBox.value = "";
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toUpperCase() === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName.toUpperCase() === "SPAN" || e.target.tagName.toUpperCase() === "I") {
    e.target.closest('li').remove();
    saveData();
  }
});

function showTask() {
  const data = localStorage.getItem("data");
  if (data) {
    listContainer.innerHTML = data;
  }
}

showTask();