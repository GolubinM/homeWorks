/* index.js */
import {getNumberOfChars, getLower, getUpper} from "../js/helpers.js";

let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");

let name = document.querySelector("#your-name");

name.addEventListener("keyup", () => {
  answer1.textContent = getNumberOfChars(name.value);
  answer2.textContent = getLower(name.value);
  answer3.textContent = getUpper(name.value);
});