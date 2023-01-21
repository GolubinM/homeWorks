/* index.js */
import { getNumberOfGrades, getFirstGrade, getLastGrade } from "./stats.js";

const snackbar = require("snackbar");
const durationSnackbar = 2500; // Необходимо для контроля количества запусков snackbar. см.ниже стр. 32.
snackbar.duration = durationSnackbar;

const gradesForm = document.querySelector("#grades-form");
const yourGrade = document.querySelector("#your-grade");

let grades = [14, 9, 13, 15, 18];

function render(grades) {
  console.log("Grades: " + grades.join(", "));
  let tbody = document.querySelector("#stats-table tbody");
  tbody.innerHTML = `<tr>
  <td>${getNumberOfGrades(grades)}</td>
  <td>${getFirstGrade(grades)}</td>
  <td>${getLastGrade(grades)}</td>
  </tr>`;
}

let callSnackBar = 0; // Счетчик не отработанных вызовов snackbar()
const limitCallSnackbar = 1; // Максимальное количество накопленных вызовов snackbar()

gradesForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let newGrade = Number.parseInt(yourGrade.value, 10);
  grades.push(newGrade);
  yourGrade.value = "";

  // Данная конструкция предотвращает вывод snackbar более limitCallSnackbar раз.
  // Это избавляет от запоздалых появлений snackbar при быстром вводе значений.
  // Количество вызовов snackbar сохраняется в буфер(переменная callSnackBar).
  // Асинхронно запускается уменьшение счетчика вызовов. Которое происходит по
  //  истечению времени отображения snackbar, определенного переменной durationSnackbar.
  if (callSnackBar < limitCallSnackbar) {
    snackbar.show("Значение добавлено!");
    callSnackBar++;
    setTimeout(() => {callSnackBar--;}, durationSnackbar);
  }
  // -----------------------------------------------------------------------------
  render(grades);
});
render(grades);
