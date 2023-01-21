// task. От 1 до 20
// Завершите функцию, чтобы она выводила в консоль числа от 1 до 20.
// Если браузер зависает, возможно, вы создали бесконечный цикл. В этом случае принудительно закройте вкладку, откройте ее снова.

function logOneToTwenty() {
  for (i = 1; i < 11; i++) console.log(i);
}

// Sample usage - do not modify
logOneToTwenty();

// ----------------------------------------------------------------------------

// ### task. Нечетные числа от 1 до 20
// Завершите функцию, чтобы она выводила в консоль нечетные числа от 1 до 20.

function logOneToTwentyOdd() {
  for (i = 1; i < 21; i += 2) console.log(i);
}

// Sample usage - do not modify
logOneToTwentyOdd();

// ### task. Сумма чисел
// Необходимо дописать функцию `sumNumbers` с использованием цикла `for...of`.
/**
 * @param {number[]} numbers
 */
function sumNumbers(numbers) {
  let sum = 0;
  for (number of numbers) sum += number;
  return sum;
}

// Sample usage - do not modify
console.log(sumNumbers([1, 2, 3, 4, 5])); // 15
console.log(sumNumbers([10, 4, 6, 3])); // 23

// --------------------------------------------------------------------------------------
/* ### task. Итерация по объекту
Выведите в консоль значения объекта через цикл `for...in` square.  Вывод должен быть таким:
square
[ 10, 10 ]
rectangle
[ 20, 15 ] */

function createShape(shape) {
  for (key in shape) {
    console.log(shape[key]);
  }
}

// Sample usage - do not modify
createShape({
  type: "square",
  dimensions: [10, 10],
});

createShape({
  type: "rectangle",
  dimensions: [20, 15],
});

