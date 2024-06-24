const inputBox = document.getElementById("input_box");
const list = document.getElementById("list-container");


function Add() {
    if (inputBox.value === '') {
        alert("enter the todolist");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
}

list.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }

}, false);

function saveData() {
    localStorage.setItem("data", list.innerHTML)
}

function showList() {
    list.innerHTML = localStorage.getItem("data");
}

showList();