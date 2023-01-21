/* index.js  */
import { sum, subtract, multiply, divide } from "./calculator.js";

let output = document.querySelector("#output");

let firstNumber = 0;
let operation = null;
let resetAfterOperation = false;
let MemCell = 0;
let mem_button = document.getElementById("mem-logo");

document.querySelectorAll("#calculator .number").forEach((button) => {
  button.addEventListener("click", (event) => {
    let value = event.currentTarget.textContent;
    if (resetAfterOperation) {
      output.value = value;
      resetAfterOperation = false;
    } else {
      output.value += value;
    }
  });
});

document.querySelectorAll("#calculator .plus-minus").forEach((button) => {
  button.addEventListener("click", (event) => {
    {
      if (!resetAfterOperation) {
        output.value = -output.value;
      // resetAfterOperation = false;
    }}
  });
});

document.querySelectorAll("#calculator .operation").forEach((button) => {
  button.addEventListener("click", (event) => {
    firstNumber = Number.parseInt(output.value, 10);
    operation = event.currentTarget.dataset.action;
    resetAfterOperation = true;
    if (operation === "clear") {
      output.value = "";
    } else if (operation === "clear-all") {
      output.value = "";
      MemCell = "";
      mem_button.style.display = "none";
    } else if (operation === "to-memory") {
      output.value = "";
      MemCell = firstNumber;
      mem_button.style.display = "block";
    } else if (operation === "from-memory") {
      output.value = MemCell;
      MemCell = "";
      mem_button.style.display = "none";
      // } else if (operation === "changeSigne") {
      //   output.value = -output.value;
      //   resetAfterOperation = false;
    }
  });
});

const equal = document.querySelector("#calculator .equal");
equal.addEventListener("click", () => {
  if (!operation) {
    return;
  }
  resetAfterOperation = true;
  let secondNumber = Number.parseInt(output.value, 10);

  if (operation === "sum") {
    output.value = sum(firstNumber, secondNumber);
  } else if (operation === "subtract") {
    output.value = subtract(firstNumber, secondNumber);
  } else if (operation === "multiply") {
    output.value = multiply(firstNumber, secondNumber);
  } else if (operation === "divide") {
    if (secondNumber == 0) {
      output.value = "Error - divide by 0";
    } else {
      output.value = divide(firstNumber, secondNumber);
    }
  }
  //reset operation
  operation = null;
});
