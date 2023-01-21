// task. Удалить элемент массива
// Завершите функцию removeFirstApp, чтобы она удалила первый элемент массива и вернула новый массив.

/**
 * @param {array} apps
 */
function removeFirstApp(apps) {
  apps.splice(0, 1);
  return apps;
}

// Sample usage - do not modify
const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"];
console.log(removeFirstApp(apps)); // ["Whatsapp", "Chrome", "Firefox"]

// ---------------------------------------------------------------------------------------------------
// ### task. Удаление второго элемента массива
// Завершите функцию `removeSecondApp`, чтобы она удалила второй элемент из массива и вернула новый массив.

/**
 * @param {array} apps
 */
function removeSecondApp(apps) {
  apps.splice(1, 1);
  return apps;
}

// Sample usage
const apps2 = ["Calculator", "Whatsapp", "Chrome", "Firefox"];
console.log(removeSecondApp(apps2)); // ["Calculator", "Chrome", "Firefox"]

// ---------------------------------------------------------------------------------------------------
// Дополнительно

/* function findUniq(arr) {
  const preFoundItem = arr.reduce((total, item) => total + item) - arr[0] * (arr.length - 1);
  return arr.includes(preFoundItem) ? preFoundItem : arr[0];
} */

function findUniq(arr) {
  const preNotUnic = arr[0]; 
  const preUnic =
    arr.reduce((total, item) => total + item) - preNotUnic * (arr.length - 1);
  if (arr.includes(preUnic)) return preUnic;
  return preNotUnic;
}


console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([0, 0, 0.55, 0, 0])); // 0.55
console.log(findUniq([6, 0, 0, 0, 0])); //6
console.log(findUniq([1, 5, 5, 5, 5])); //1
console.log(findUniq([-6, -7, -7, -7, -7])); //-6
