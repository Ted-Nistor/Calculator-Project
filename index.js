"use strict";
const display = document.querySelector(".display");
display.textContent = "";
console.log(display);
const numButton = document.querySelectorAll(".btn-val");
const removeButton = document.querySelector(".remove");
const clear = document.querySelector(".clear");
const operation = document.querySelectorAll(".btn-operation");
let firstNum = [];
let secondNum = [];
let basicOperationSymbol = ["+", "━" || "-", "X" || "*", "/", "="];
let advancedOperationSymbol = ["n!", "XY", "√ X", "1/X"];

// const inputNumber = function (e, input) {
//   input.push(e.target.textContent.replaceAll(/[^0-9]/g, ""));
//   display.textContent = input.join("");
//   input = +display.textContent;
//   //   console.log((input = +display.textContent));

// };

// numButton.forEach((btn) =>
//   btn.addEventListener("click", function (e) {
//     inputNumber(e, firstNum);
//     console.log(+firstNum.join(""));
//   })
// );

const inputNumber = function (input) {
  numButton.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      input.push(e.target.textContent.replaceAll(/[^0-9]/g, ""));
      display.textContent = input.join("");

      //   console.log(+input.join(""));
      return +input.join("");
    });
  });
};

inputNumber(firstNum);

removeButton.addEventListener("click", function () {
  firstNum.pop();
  display.textContent = firstNum.join("");
  console.log(+display.textContent);
});

clear.addEventListener("click", function () {
  location.reload();
});

// const basicOperation = function (a, symb, b) {
//   return a + symb + b;
// };
