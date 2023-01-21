// ### task. Удалить **event listener**

// Завершите выполнение кода, чтобы прослушиватель событий `click` удалялся через 1.5 секунды.

const button = document.querySelector("#my-button");

const myEvent = (event) => {
  console.log(event.currentTarget.textContent);
};

button.addEventListener("click", myEvent);

setTimeout(() => {
  button.removeEventListener("click", myEvent);
  console.log(`EventListener был удален`);
  // TODO: remove the event listener from above
}, 1500);
