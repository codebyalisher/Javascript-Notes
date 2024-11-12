import render from "./app.js";
import storeProxy from "./store.js";
import { addtodo, deletetodo, togglecompleted } from "./store.js";

window.addEventListener("todochanged", () => {
  render();
});

const storedTodos = JSON.parse(localStorage.getItem("store"));
if (storedTodos?.todos.length >= 0) {
  storeProxy.todos = storedTodos.todos;
} else {
  localStorage.setItem("store", JSON.stringify(storeProxy));
  render();
}

const form = document.querySelector("#form");
const todoTitleInput = document.querySelector(".todo-title-input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todotitle = todoTitleInput.value;
  const newTodo = {
    id: crypto.randomUUID(),
    title: todotitle,
    completed: false,
  };
  addtodo(newTodo);
  todoTitleInput.value = ""; // Clear the input field after adding the todo
});

const todosContainer = document.querySelector(".todos");
todosContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-todo-button")) {
    const id = e.target.closest(".todo").dataset.id;
    deletetodo(id);
  }
});

todosContainer.addEventListener("change", (e) => {
  if (e.target.classList.contains("todo-checkbox")) {
    const id = e.target.closest(".todo").dataset.id;
    const completed = e.target.checked;
    togglecompleted(id, completed);
  }
});
