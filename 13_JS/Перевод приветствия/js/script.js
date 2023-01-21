import { getTranslation } from "./helpers.js";

document.querySelector("#languages-list").addEventListener("change", (event) => {
  document.querySelector("#output-text").textContent = getTranslation(event.target.value);
});