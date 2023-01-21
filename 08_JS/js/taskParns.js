// **Задача со скобками
// Использование кодов символов '(' = 40 и ')' = 41 сокращает время выполнения функции на 14-25%%
// по сравнению с условным оператором if (a[i] ==='(') 1...
// Суммирование разницы между числом 40.5 и значением кода символа (40 || 41) накапливает
// результат, только вместо 1 и -1 складываются 0,5 и -0,5 . При достижении отрицательного значения алгоритм выдает false.
// Если по окончанию цикла result > 0 то не все скобки закрыты и возвращается false, иначе result == 0 значит все скобки закрыты.

//https://www.codewars.com/users/Mihail%20Golubin/completed_solutions
//https://jsbench.me/iplbv4h5ql/1

function validParentheses(parens) {
  let result = 0;
  for (i = 0; i < parens.length; i++) {
    result += 40.5 - parens.charCodeAt(i);
    if (result < 0) return false;
  }
  return result ? false : true;
}

console.log(validParentheses("()")); //true
console.log(validParentheses(")(()))")); //false
console.log(validParentheses("(")); //false
console.log(validParentheses("(())((()())())")); //true
