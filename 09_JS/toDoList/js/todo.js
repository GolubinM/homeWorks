/**
 * @typedef {{title: String, isCompleted: Boolean, icon: String, category: String, author: Object}} Todo
 *
 * @param {object} data
 */
export function createTodo(data) {
  return {
    title: data.todoTitle,
    isCompleted: data.completed,
    icon: data.completed ? "✅" : "⏳",
    category: data.chosenCategory,
    author: {
      firstName: data.user.first,
      lastName: data.user.last,
    },
  };
}

/**
 * @param {Todo[]} todos
 * @param {Todo} todo
 */
export function addTodo(todos, todo) {
  todos.push(todo);
  return todos;
}

/**
 * @param {Todo[]} todos
 */
export function countTodos(todos) {
  return todos.length;
}

/**
 * @param {Todo[]} todos
 */
export function firstTodoTitle(todos) {
  return todos[0].title;
}

/**
 * @param {Todo[]} todos
 */
export function lastTodoTitle(todos) {
  return todos.at(-1).title;
}

/**
 * @param {Todo[]} todos
 */
export function exportTitles(todos) {
  return todos.map((todo) => todo.title);
}
