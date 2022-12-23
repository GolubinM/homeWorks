import { createTodo } from "./todo.js";

let form = document.querySelector("#todo-list-form");
let title = document.querySelector("#todo-title");
let completed = document.querySelector("#todo-completed");
let category = document.querySelector("#todo-category");
let list = document.querySelector("#todo-list");

function render(todo) {
  list.innerHTML = `<li><div class="card">${todo.icon} &nbsp;<strong>${todo.title}</strong> - by ${todo.author.firstName} ${todo.author.lastName}</strong> in ${todo.category}</div></li>`;
}

form.addEventListener("submit", event => {
  event.preventDefault();
  let author = {
    first: "Sam",
    last: "Blue"
  };
  let values = {
    todoTitle: title.value,
    completed: completed.checked,
    chosenCategory: category.value,
    user: author
  };
  let todo = createTodo(values);
  title.value = "";
  render(todo);
});