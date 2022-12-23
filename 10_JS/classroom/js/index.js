/* index.js */
import { getSumGrades, getPassingGrades, getFailingGrades, getNumberOfGrades, getAverageValue, getRaisedGrades } from "./classroom.js";

const gradesForm = document.querySelector("#grades-form");
const yourGrade = document.querySelector("#your-grade");

const grades = [12, 19, 10, 4, 15, 9];

const renderStats2Table = grades => {
  const tbody = document.querySelector("#stats-table2 tbody");
  tbody.innerHTML = `<tr>
    <td>${getPassingGrades(grades)}</td>
    <td>${getFailingGrades(grades)}</td>
    <td>${getRaisedGrades(grades)}</td>
  </tr>`;
}

const renderStatsTable = grades => {
  const tbody = document.querySelector("#stats-table tbody");
  tbody.innerHTML = `<tr>
    <td>${getNumberOfGrades(grades)}</td>
    <td>${getSumGrades(grades)}</td>
    <td>${getAverageValue(grades)}</td>
  </tr>`;
}

const render = grades => {
  console.log("Grades: " + grades.join(', '));
  renderStatsTable(grades);
  renderStats2Table(grades);
}

gradesForm.addEventListener("submit", event => {
  event.preventDefault();
  const newGrade = Number.parseInt(yourGrade.value, 10);
  grades.push(newGrade);
  yourGrade.value = "";
  render(grades);
});

render(grades);