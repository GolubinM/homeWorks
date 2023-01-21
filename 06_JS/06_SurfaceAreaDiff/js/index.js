/* index.js */
import calculateDifference from "./surface-difference.js";

const width1 = document.querySelector("#width1");
const length1 = document.querySelector("#length1");
const surface1 = document.querySelector("#surface1");

const width2 = document.querySelector("#width2");
const length2 = document.querySelector("#length2");
const surface2 = document.querySelector("#surface2");

const output = document.querySelector("#output");
const calculate = document.querySelector("#calculate");
let anyValue = 0;

let isBtnCalculateDisable = true;
calculate.disabled = isBtnCalculateDisable;

let isSurface1NotEmpty = false;
let isSurface2NotEmpty = false;

calculate.addEventListener("click", () => {
  const firstRectangle = [
    parseAnyValue(width1.value),
    parseAnyValue(length1.value),
  ];
  const secondRectangle = [
    parseAnyValue(width2.value),
    parseAnyValue(length2.value),
  ];
  output.value = calculateDifference(firstRectangle, secondRectangle);
});

function calculateSurface1() {
  surface1.value = parseAnyValue(width1.value) * parseAnyValue(length1.value);
  // Установка одного из двух флагов для активации/деактивации кнопки calculate
  isSurface1NotEmpty = +surface1.value || false;
  // Проверка обоих флагов деактивации, если каждое из полей Surface <> 0 сделать кнопку calculate доступной
  calculate.disabled = !(isSurface1NotEmpty && isSurface2NotEmpty);
  // при изменении данных в поле ввода очищать поле вывода результата во избежании отображения результата из предыдущего вычисления
  output.value = "";
}

width1.addEventListener("keyup", calculateSurface1);
length1.addEventListener("keyup", calculateSurface1);

function calculateSurface2() {
  surface2.value = parseAnyValue(width2.value) * parseAnyValue(length2.value);
  // Установка одного из двух флагов для активации/деактивации кнопки calculate
  isSurface2NotEmpty = +surface2.value || false;
  // Проверка обоих флагов деактивации, если каждое из полей Surface <> 0 сделать кнопку calculate доступной
  calculate.disabled = !(isSurface1NotEmpty && isSurface2NotEmpty);
  // при изменении данных в поле ввода очищать поле вывода результата во избежании отображения результата из предыдущего вычисления
  output.value = "";
}

width2.addEventListener("keyup", calculateSurface2);
length2.addEventListener("keyup", calculateSurface2);

function parseAnyValue(anyValue) {
  // Обрабатываем аргумент функции на возможное значение пустой строки
  // return Number.parseInt(anyValue==="" ? 0 : anyValue, 10);
  // те-же результаты даст привидение типов путем вычитания 0 из anyValue (или делением на 1, или умноженим на 1)
  return Number.parseInt(anyValue - 0, 10);
  // или просто неявное приведение типов
  // return anyValue-0
}
