// Задача
// Вам дан массив чисел. Все числа равны, кроме одного. Попробуйте найти! Известно, что массив содержит не менее 3 чисел.
// Данное решение на ~80% производительней чем решения с использованием arr.sort()
// Сравнительный тест https://jsbench.me/0olbqkbll4/2



function findUniq(arr) {
    const preNotUnic = arr[0];
    const preUnic = arr.reduce((total, item) => total + item) - preNotUnic * (arr.length - 1);
    if (arr.includes(preUnic)) return preUnic;
    return preNotUnic;
  }
  
  console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
  console.log(findUniq([0, 0, 0.55, 0, 0])); // 0.55
  console.log(findUniq([6, 0, 0, 0, 0])); //6
  console.log(findUniq([1, 5, 5, 5, 5])); //1
  console.log(findUniq([-6, -7, -7, -7, -7])); //-6
  