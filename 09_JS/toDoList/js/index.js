import { createTodo, addTodo, countTodos, exportTitles, firstTodoTitle, lastTodoTitle } from "./todo.js";

let form = document.querySelector("#todo-list-form");
let title = document.querySelector("#todo-title");
let completed = document.querySelector("#todo-completed");
let category = document.querySelector("#todo-category");
let list = document.querySelector("#todo-list");

let todos = [];

function render(todos) {
  list.innerHTML = `<h3>Todos (${countTodos(todos)})</h3>`;
  todos.forEach(function (todo) {
    list.insertAdjacentHTML("beforeend", `<li><div class="card">${todo.icon} &nbsp;<strong>${todo.title}</strong> - by ${todo.author.firstName} ${todo.author.lastName}</strong> in ${todo.category}</div></li>`);
  });
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
  todos = addTodo(todos, todo);
  render(todos);
  //reset form
  title.value = "";
  completed.checked = false;
  // Log the result of firstTodoTitle(), lastTodoTitle() and exportTitles()
  console.log("First todo title: " + firstTodoTitle(todos));
  console.log("Last todo title: " + lastTodoTitle(todos));

  console.log("Exported titles: ", exportTitles(todos));
});