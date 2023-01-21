/* index.js */
import { addItem, exportLowerCasedCSV } from "./shopping.js";

let form = document.querySelector("#shopping-list-form");
let itemName = document.querySelector("#item-name");
let list = document.querySelector("#shopping-list");
const exportedJson = document.querySelector("#exported-json");

let items = [];

function render(items) {
  console.log("Items: " + items.join(", "));
  list.innerHTML = "";
  items.forEach(function (item) {
    list.insertAdjacentHTML(
      "beforeend",
      `<li><div class="card">${item}</div></li>`
    );
  });
  exportedJson.textContent = exportLowerCasedCSV(items);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  items = addItem(items, itemName.value);
  itemName.value = "";
  render(items);
});

render(items);
