/* index.js */

import {
  getNumberOfGrades,
  getFirstGrade,
  getLastGrade,
  addGrade,
  isTestTooEasy,
  gradeExists,
  exportCSV,
} from "./stats.js";

const snackbar = require("snackbar");
const durationSnackbar = 2500; // Необходимо для контроля количества запусков snackbar. см.ниже стр. 55.
snackbar.duration = durationSnackbar;

const gradesForm = document.querySelector("#grades-form");
const yourGrade = document.querySelector("#your-grade");
const gradeToCheck = document.querySelector("#grade-to-check");

let grades = [14, 9, 13, 15, 18];

function render(grades) {
  console.log("Grades: " + grades.join(", "));
  let tbody = document.querySelector("#stats-table tbody");
  tbody.innerHTML = `<tr>
  <td>${getNumberOfGrades(grades)}</td>
  <td>${getFirstGrade(grades)}</td>
  <td>${getLastGrade(grades)}</td>
  </tr>`;

  let tbody2 = document.querySelector("#stats-table2 tbody");
  tbody2.innerHTML = `<tr>
  <td>${isTestTooEasy(grades)}</td>
  <td>${gradeExists(grades, Number.parseInt(gradeToCheck.value, 10))}</td>
  <td>${exportCSV(grades)}</td>
  </tr>`;
}

gradeToCheck.addEventListener("change", () => {
  render(grades);
});

//Инициализация флага вызова функции snackbar см.стр 55
let callSnackBar = 0;
// Установка максимального количества выводимых подряд сообщений snackbar при накоплении вызова функции
const limitCallSnackbar = 1;

gradesForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let newGrade = Number.parseInt(yourGrade.value, 10);
  grades = addGrade(grades, newGrade);
  yourGrade.value = "";

  // Данная конструкция предотвращает вывод snackbar более limitCallSnackbar раз.
  // Это избавляет от запоздалых появлений snackbar при быстром вводе значений.
  // Количество вызовов snackbar сохраняется в буфер(переменная callSnackBar).
  // Асинхронно запускается уменьшение счетчика вызовов. Которое происходит по
  //  истечению времени отображения snackbar, определенного переменной durationSnackbar.
  if (callSnackBar < limitCallSnackbar) {
    snackbar.show("Значение добавлено!");
    callSnackBar++;
    setTimeout(() => {
      callSnackBar--;
    }, durationSnackbar);
  }

  render(grades);
});

render(grades);
