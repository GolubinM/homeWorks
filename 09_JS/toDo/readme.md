## project. Todo

Важно изучить работу данного проекта (как отрисовывается содержимое, как добавляются элементы, что происходит по клику). Позанимайтесь отладкой кода в браузере, т.к. дипломная работа будет содержать аналогичные задачи.

Функция `createTodo` получает объект `data` в качестве параметра.

Завершите функцию `createTodo`, чтобы она возвращала объект `todo` следующей структуры:


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


Цель задачи - вернуть объект, аналогичный показанному выше, но значения должны исходить из параметра `data`.