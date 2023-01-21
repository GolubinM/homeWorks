// ### task1. Погода
// Функция `willItRain` получает строку **JSON** от фиктивного **API** погоды. Завершите функцию, чтобы она возвращала значение `true`, когда прогноз погоды показывает, что пойдет дождь и `false` в остальных случаях.

/**
 * @param {string} weatherApiResponse
 */
const willItRain = (weatherApiResponse) => {
  // your code
  // РЕШЕНИЕ 1.
  // работает для первых двух JSON строк(строки из задания), но не работает в "остальных случаях"
  console.log(JSON.parse(weatherApiResponse).now.rainExpected);

  // РЕШЕНИЕ 2.
  // С учетом "остальных случаев" - 4 дополнительных JSON строки:
  if (JSON.parse(weatherApiResponse).now.rainExpected === true) {
    console.log(`с учетом "остальных случаев" - ${true}`);
  } else console.log(`с учетом "остальных случаев" - ${false}`);
};

// Sample usage - do not modify
willItRain('{"now":{"temperature":18,"humidity":"30%","rainExpected":true}}'); // true
willItRain('{"now":{"temperature":25,"humidity":"90%","rainExpected":false}}'); // false

//-остальные случаи--(4 дополнительных JSON строки)-------------------------
willItRain('{"now":{"temperature":25,"humidity":"90%","rainExpected":"more or less"}}'); // false
willItRain('{"now":{"temperature":25,"humidity":"90%","rainExpected":"undefined"}}'); // false
willItRain('{"now":{"temperature":25,"humidity":"90%","rainExpected":"sometimes"}}'); // false
willItRain('{"now":{"temperature":25,"humidity":"90%","rainExpected":"rainy"}}'); // false

//------------------------------------------------------------------------
// ### task2. Отправка сообщения
// Функция `prepareStatus` вызывается перед отправкой статуса пользователя в социальной сети.
// Завершите функцию, чтобы она возвращала строку содержащую `userId`, `status` и `location`, из объекта `data`.
/**
 * @param {string} status
 * @param {string} location
 */
const prepareStatus = (status, location) => {
  const userId = 42;
  const data = {
    userId,
    status,
    location,
  };

  // your code
  console.log(JSON.stringify(data));
};

// Sample usage - do not modify
prepareStatus("My first post!", "Amsterdam");
// '{"userId":42,"status":"My first post!","location":"Amsterdam"}'

prepareStatus("Hello World!", "Berlin");
// '{"userId":42,"status":"Hello World!","location":"Berlin"}'

//------------------------------------------------------------------------
//   ### task3. Получение уведомления
// Завершите функцию, чтобы она сделала `fetch` запрос к [**API**](https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json) и вернула результат.
// Вы должны увидеть `Promise` в консоли.

const checkForNewNotifications = () => {
  // your code
  console.log(
    fetch(
      "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
    )
  );
};
// Sample usage - do not modify
const result = checkForNewNotifications(); // Promise{<pending>}


//------------------------------------------------------------------------
// ### task4. Получение уведомлений
// Завершите функцию, чтобы она делала `fetch` запрос к [API](https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json), преобразовывала ответ в формат **JSON** и записывала полученные `data` в консоль.

const checkForNewNotifications3 = () => {
  // your code
  const url =
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json";
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(`Answer 4 is ${JSON.stringify(data)}`));
};

// Sample usage - do not modify
checkForNewNotifications3(); //Answer 4 is..<полученные JSON данные приведенные из объекта к строке>.


//------------------------------------------------------------------------
// ### task5. Показать новые уведомления
// Завершите функцию, чтобы она извлекла данные из **[API](https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json)**, а затем вызвала функцию `showNewNotifications` с количеством непрочитанных уведомлений.

const checkForNewNotifications5 = () => {
  // your code
  const url2 =
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json";
  fetch(url2)
    .then((response) => response.json())
    .then((data) => {
      showNewNotifications(data.count);
    });
};

// do NOT modify this function
function showNewNotifications(count) {
  console.log(`You have ${count} new notifications. Would you like to read them?`);
}
// Sample usage - do not modify
checkForNewNotifications5(); // You have 3 new notifications. Would you like to read them?
//------------------------------------------------------------------------
