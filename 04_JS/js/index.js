import { convertCelsiusToFahrenheit } from "../js/convert.js";
import { convertToUppercaseTrim } from "../js/convert.js";

import party from "party-js";

// task. Имя без пробелов в верхний регистр
const inputText1 = document.querySelector("#inputName-1");
const textFormatted1 = document.querySelector("#textFormatted-1");
const countFormatted = document.querySelector("#counterFormatted-1");
const countUnFormatted = document.querySelector("#counterUnFormatted-1");
const countDeletedSpace1 = document.querySelector("#counterDeletedSpace-1");

inputText1.addEventListener("keyup", () => {
  textFormatted1.value = convertToUppercaseTrim(inputText1.value);
  countUnFormatted.textContent = inputText1.value.length;
  countFormatted.textContent = textFormatted1.value.length;
  countDeletedSpace1.textContent =
    inputText1.value.length - textFormatted1.value.length;
});

// task. Градусы из цельсия в фаренгейты.
const cInput = document.querySelector("#c-input");
const fOutput = document.querySelector("#f-output");

cInput.addEventListener("keyup", () => {
  fOutput.value = convertCelsiusToFahrenheit(cInput.value);
});

// task. Closures game
// каждое нажатие увеличивает счетчик статистики на 1 и выстреливает конфети
// после 5и нажатий  на "start game" срабатывает счетчик игр и выстреливают сердцами и конфети
// сердца вылетают из объекта определенного аргументом функции myHeartGoOn()
// плавно меняется прозрачность картинки фона при каждом нажатии на кнопку

const button = document.querySelector("#app-button");
const startOutput = document.querySelector("#game-started");
const analyticOutput = document.querySelector("#log-analytics");
const pressRequest = document.querySelector("#press-request");

let opacityLevel = 0.05;

// ---------------По домашнему заданию-------------------
let countToNewGame = 0;
let counterStart = 0;
let counterAnalytics = 0;

button.addEventListener("click", function () {
  if (countToNewGame == 0) {
    startGame();
    countToNewGame = 5;
  }
  logAnalytics();
});

// ---------------Конец по домашнему заданию------------

// do not modify too much
function startGame() {
  console.log("game started!");
  counterStart++;
  startOutput.value = counterStart;
  myHeartGoOn(button);
  changeOpacity(0.05);
}

// do not modify too much
function logAnalytics() {
  console.log("log analytics");
  counterAnalytics++;
  analyticOutput.value = counterAnalytics;
  countToNewGame--;
  pressRequest.textContent = countToNewGame + 1 + " ";
  party.confetti(button, {
    count: party.variation.range(5, 15),
  });
  opacityLevel = (4 - countToNewGame) / 20;
  changeOpacity(opacityLevel);
}

function myHeartGoOn(pushBtn) {
  const heartPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  heartPath.setAttribute(
    "d",
    "M316.722,29.761c66.852,0,121.053,54.202,121.053,121.041c0,110.478-218.893,257.212-218.893,257.212S0,266.569,0,150.801 C0,67.584,54.202,29.761,121.041,29.761c40.262,0,75.827,19.745,97.841,49.976C240.899,49.506,276.47,29.761,316.722,29.761z"
  );
  const heartShape = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  heartShape.setAttribute("viewBox", "0 0 512 512");
  heartShape.setAttribute("height", "20");
  heartShape.setAttribute("width", "20");
  heartShape.appendChild(heartPath);
  party.scene.current.createEmitter({
    emitterOptions: {
      loops: 1,
      useGravity: false,
      modules: [
        new party.ModuleBuilder()
          .drive("size")
          .by((t) => 0.5 + 0.3 * (Math.cos(t * 10) + 1))
          .build(),
        new party.ModuleBuilder()
          .drive("rotation")
          .by((t) => new party.Vector(0, 0, 100).scale(t))
          .relative()
          .build(),
      ],
    },
    emissionOptions: {
      rate: 0,
      bursts: [{ time: 0, count: party.variation.skew(20, 10) }],
      sourceSampler: party.sources.dynamicSource(pushBtn),
      angle: party.variation.range(0, 360),
      initialSpeed: 400,
      initialColor: party.variation.gradientSample(
        party.Gradient.simple(
          party.Color.fromHex("#ffa68d"),
          party.Color.fromHex("#fd3a84")
        )
      ),
    },
    rendererOptions: {
      shapeFactory: heartShape,
      applyLighting: undefined,
    },
  });
}

//функция changeOpacity() устанавливает значение прозрачности в переменную '--sq-opacity'
//для изменения изображения фона, определенного псевдоэлементом '#hearts-nav:before'.
//Переменная задается в родительском блоке '#hearts-nav'

function changeOpacity(opacityLevel) {
  document
    .querySelector("#hearts-nav")
    .style.setProperty("--sq-opacity", opacityLevel);
}
