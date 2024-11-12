const store = {
  todos: [
    {
      id: "1",
      title: "completed task a",
      completed: false,
    },
    {
      id: "2",
      title: "Read book",
      completed: true,
    },
    {
      id: "3",
      title: "write code",
      completed: true,
    },
  ],
};

const storeHandler = {
  get(target, property) {
    return target[property];
  },
  set(target, property, value) {
    target[property] = value;
    if (property === "todos") {
      window.dispatchEvent(new Event("todochanged"));
    }
    localStorage.setItem("store", JSON.stringify(target));
    return true;
  },
};

const storeProxy = new Proxy(store, storeHandler);

function addtodo(newTodo) {
  storeProxy.todos = [...storeProxy.todos, newTodo];
}

function deletetodo(id) {
  storeProxy.todos = storeProxy.todos.filter((todo) => todo.id !== id);
}

function togglecompleted(id, completed) {
  storeProxy.todos = storeProxy.todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: completed };
    } else {
      return todo;
    }
  });
}

export { addtodo, deletetodo, togglecompleted };
export default storeProxy;
