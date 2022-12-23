// ### task. Возраст пользователя

// Завершите функцию `getAge`, чтобы она возвращала возраст пользователя. Если возраст не определен, по умолчанию показывается строка `"unknown"`. Попробуйте вызывать функцию без какого-либо аргумента, попробуйте исправить ошибку `TypeError: Cannot read properties of undefined`. В этом случае, функция должна возвращать строку `"unknown"`.

/**
 * @param {object} user
 * @param {number} [user.age]
 */
const getAge = user => {
	return user?.age ?? 'unknown'}

// Sample usage - do not modify
console.log(getAge({ age: 19 })); // 19
console.log(getAge({})); // "unknown"
console.log(getAge()); // "unknown"

//------------------------------------------------------------------------

const translations = {
    welcome: {
      dutch: "Welkom",
      french: "Bienvenue",
      english: "Welcome"
    }
  }
  
/**
 * @param {string} language
 */
const getTranslation = language => {
	return `${(translations?.welcome[language] ?? 'Welcome')}`
}

console.log(getTranslation('dutch'));
console.log(getTranslation('french'));
console.log(getTranslation({}));
console.log(getTranslation());


//------------------------------------------------------------------------
// ### task. Получить полное имя

// Завершите функцию `getFullName`, чтобы она возвращала полное имя пользователя, если данный ключ есть в объекте. В противном случае верните `"N/A"`.
/**
 * @param {object} user
 * @param {object} [user.info]
 * @param {last} [user.info.name]
 */
const getFullName = user => {
	return `${user?.info?.name ?? 'N/A'}`}

// Sample usage - do not modify
console.log(getFullName({ info: { name: "Sam" } })); // "Sam"
console.log(getFullName({ info: null })); // "N/A"
console.log(getFullName({})); // "N/A"

//------------------------------------------------------------------------

// ### task. Имя объекта в нижнем регистре

// Завершите функцию `getFullName`, чтобы она возвращала полное имя в нижнем регистре, если данный ключ есть в объекте. В противном случае верните строку `"user"`.


/**
 * @param {object} user
 * @param {object} [user.info]
 * @param {last} [user.info.name]
 */
const getFullName2 = user => {
	return `${user?.info?.name?.toLowerCase() ?? 'user'}`
}

// Sample usage - do not modify
console.log(getFullName2({ info: { name: "ALEX" } })); // "alex"
console.log(getFullName2({ info: null })); // "user"
console.log(getFullName2({})); // "user"

//------------------------------------------------------------------------

// ### task. Рефакторинг кода
// Перепишите функцию с использованием объектов, которая принимает на вход три параметра `operation`, `value1`, `value2` и выдает результат в зависимости от входных параметров.

const basicOp = (operation, value1, value2) => {
  if  (value1===undefined || value2===undefined) return 0; 
  const formula = {
    "+": value1 + value2,
    "-": value1 - value2,
    "*": value1 * value2,
    "/": value1 / value2,
  };
  return formula[operation] ?? 0 
}

console.log(basicOp("+", 4, 7)); // 11
console.log(basicOp("-", 15, 18)); // -3
console.log(basicOp("*", 5, 5)); // 25
console.log(basicOp("/", 49, 7)); // 7
console.log(basicOp("", 49, 7)); // 0
console.log(basicOp("/", 49, )); // 0
console.log(basicOp("*")); // 0
console.log(basicOp("+",5,0)); // 5

// //------------------------------------------------------------------------
// ### task. Рефакторинг камень, ножницы, бумага

// Вы должны вернуть строку с именем игрока, который выиграл. В случае ничьи верните строку `Draw!`.


const rps = (p1, p2) => {
	const message = {
  paperrock: "Player 1 won",
  scissorspaper: "Player 1 won",
  rockscissor: "Player 1 won",
  rockpaper: "Player 2 won",
  paperscissors: "Player 2 won",
  scissorsrock: "Player 2 won",
  paperpaper: "Draw",
  rockrock: "Draw",
  scissorsscissors: "Draw",
  };
  let select = p1+p2;
  return `${message[select] ?? "I don't know"}!`
};


console.log(rps("paper", "rock")); // Player 1 won!
console.log(rps("scissors", "rock")); // Player 2 won!
console.log(rps("rock", "rock")); // Draw!
console.log(rps("paper", "scissors")); // Draw!
console.log(rps("paper", "sci")); // I don't know!