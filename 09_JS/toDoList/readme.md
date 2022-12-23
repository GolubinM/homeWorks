## project. Todo list

Выполните функции в `todo.js`:

- **createTodo**. Завершите функцию `createTodo`, чтобы она возвращала объект следующей структуры:

{
  title: "The title from data",
  isCompleted: "whether the todo is completed or not",
  icon: "✅ when completed, ⏳ otherwise",
  category: "The chosen category",
  author: {
    firstName: "The user's first name",
    lastName: "The user's last name"
  }
}
```

- **addTodo**. Данная функция добавляет список дел в массив.
- **countTodos**. Данная функция возвращает количество задач.
- **firstTodoTitle**. Возвращает название первой задачи.
- **lastTodoTitle**. Возвращает название последней задачи.
- **exportTitles.** Должен возвращать массив, содержащий все заголовки `todos`.