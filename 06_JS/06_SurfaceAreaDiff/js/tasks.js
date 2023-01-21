// ----------------------------------------------------------------------------------------------

/* task. Температуры
Завершите функцию `incrementFirstTemperature`, чтобы она увеличивала первый элемент
массива на единицу и вернула измененный массив температур.
 */

function incrementFirstTemperature(temperatures) {
  temperatures[0]++;
  return temperatures;
}
console.log("task. Температуры");
// Sample usage
console.log(incrementFirstTemperature([3, 5, 4, 7])); // [ 4, 5, 4, 7 ]
console.log(incrementFirstTemperature([-5, 12, 15, 18, 13])); // [ -4, 12, 15, 18, 13 ]

// ----------------------------------------------------------------------------------------------

// task. Количество элементов
// Завершите функцию `getMessage`, чтобы она вернула следующую строку:
// You have X items, где X - количество элементов в параметре `items`.

/**
 * @param {array} items
 */
function getMessage(items) {
  return `You have ${items.length} items`; // your code
}
console.log("\ntask. Количество элементов");
// Sample usage - do not modify
console.log(getMessage([-5, 12, 15])); // "You have 3 items"
console.log(getMessage([13, 10])); // "You have 2 items"
console.log(getMessage([])); // "You have 0 items"

// ----------------------------------------------------------------------------------------------

/* ### task. Сообщение о температуре погоды

Завершите функцию `getLastTemperatureMessage`, чтобы она возвращала строку:
 The last temperature is at position X, где X - число,
 равное последнему элементу массива. */

/**
 * @param {array} temperatures
 */
function getLastTemperatureMessage(temperatures) {
  return temperatures?.at(-1) ?? "I need some data";
}

console.log("\ntask. Сообщение о температуре погоды");
// Sample usage - do not modify
console.log(getLastTemperatureMessage([-5, 12, 15])); // "The last temperature is 15"
console.log(getLastTemperatureMessage([13, 10])); // "The last temperature is 10"
console.log(getLastTemperatureMessage([]));
console.log(getLastTemperatureMessage());
