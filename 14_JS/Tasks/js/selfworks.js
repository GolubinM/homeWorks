//------------------------------------------------------------------------
// // ### task. **Получение уведомления**
// // Завершите функцию, чтобы она делала `fetch` запрос к **[API](https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json)**, преобразовывала ответ в формат **JSON** и возвращала результат.

const checkForNewNotifications2 = () => {
	// your code
    const url = "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
    const result = fetch(url).then(response => response.json())
    .then(data=>console.log(`данные JSON ${data}`));
    console.log(`Сперва выводиться promise от response.json() ${result} \nи только после обработки промиса данные JSON:`);
}
// Sample usage - do not modify
checkForNewNotifications2();