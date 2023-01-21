// project. Конвертер километров в мили
/* index.js */
import { convertKMtoMiles } from "../js/convert.js";
import { convertCelsiusToFahrenheit } from "../js/convert.js";

const kmInput = document.querySelector("#km-input");
const milesOutput = document.querySelector("#miles-output");

kmInput.addEventListener("keyup", () => {
  milesOutput.value = convertKMtoMiles(kmInput.value);
});

const cInput = document.querySelector("#c-input");
const fOutput = document.querySelector("#f-output");

cInput.addEventListener("keyup", () => {
  fOutput.value = convertCelsiusToFahrenheit(cInput.value);
});

const button = document.querySelector("#app-button");
const startOutput = document.querySelector("#game-started");
const analyticOutput = document.querySelector("#log-analytics");


let counterStart=0;
let counterAnalytics=0;

let startGameNotPlayed = true;

button.addEventListener("click", function () {
	if (startGameNotPlayed) {
    startGame();
    startGameNotPlayed = false;
  };
  logAnalytics();
});

// do not modify
function startGame() {
  console.log("game started!");
//   var elem = document.getElementById('game-started');
  counterStart++ ;
  startOutput.value = counterStart;
}

// do not modify
function logAnalytics() {
  console.log("log analytics");
//   var elem = document.getElementById('log-analytics');
  counterAnalytics++; 
  analyticOutput.value = counterAnalytics;
}
