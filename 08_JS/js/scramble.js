// ### Задача

// Реализуйте функцию `scramble(str1, str2)`, которая возвращает `true`, если символы параметра `str1` можно переставить так, чтобы они соответствовали символам параметра `str2`.
// Используются только строчные буквы. Знаки препинания или цифры не учитываем. Важна производительность решения.

// https://www.codewars.com/kata/reviews/55c04c11aa1e89cf9f000185/groups/63a42e5861e1080001ac9799

// 1. Для обеих строк с помощью функции lettersCounter() создаем объект содержащий объекты следующего вида:
// {key = символ из строки, value = количество данных символов};
// 2. Внутри цикла for in итерируем все символы(объекты) из строки str2, для каждого символа проверяем присутствие и наличие достаточного количества таких же символов в строке str1. Если символ из строки str2 отсутствует или символов в строке str1 меньше чем нужно для составления слова в строке str2 условный оператор возвращает false.

function scramble(str1, str2) {
  const lettersCounter = string => {
    return string.split("").reduce((count, letter) => {
      count[letter] = (count[letter] || 0) + 1;
      return count;
    }, {});
  }

  let lettersStr1 = lettersCounter(str1);
  let lettersStr2 = lettersCounter(str2);
  for (let letter in lettersStr2) {
    if ((lettersStr1[letter] ?? 0) < lettersStr2[letter]) return false;
  }
  return true;
}
console.log(scramble("rkqodlwww", "world")); // true
console.log(scramble("rkqodl", "world")); // false
console.log(scramble("cedewaraaossoqqyt", "codewars")); // true
console.log(scramble("katas", "steak")); // false
console.log(scramble("steak", "steaka")); // false
