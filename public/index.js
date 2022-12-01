"use strict";

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const clearButton = document.querySelector("[data-clear]");
const prevOperandTextElement = document.querySelector("[data-previous]");
const currentOperandTextElement = document.querySelector("[data-current]");
const advOperations = ["sqr X", "n!", "1/X"];

class Calculator {
  constructor(prevOperandTextElement, currentOperandTextElement) {
    this.prevOperandTextElement = prevOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = "";
  }
  del() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
  inputNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;

    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  mathOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }
  compute() {
    let result;
    const prev = +this.previousOperand;
    const current = +this.currentOperand;
    if (isNaN(prev)) return;
    switch (this.operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      case "XY":
        result = Math.pow(prev, current);
        break;
      case "1/X":
        result = 1 / prev;
        break;
      case "sqr X":
        result = Math.sqrt(prev);
        break;
      case "n!":
        result = this.factorialize(prev);
        break;

      default:
        return;
    }
    this.currentOperand = result;
    this.operation = "";
    this.previousOperand = "";
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    if (this.operation !== null) {
      this.prevOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
    }
    if (advOperations.includes(this.operation)) {
      this.prevOperandTextElement.innerText = "";
      this.currentOperandTextElement.innerText = "Press =";
    }
  }
  factorialize(num) {
    if (num === 0) return 1;
    return num * this.factorialize(num - 1);
  }
}

const calculator = new Calculator(
  prevOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((btn) =>
  btn.addEventListener("click", function () {
    calculator.inputNumber(btn.innerText);
    calculator.updateDisplay();
  })
);

operationButtons.forEach((btn) =>
  btn.addEventListener("click", function () {
    calculator.mathOperation(btn.innerText);
    calculator.updateDisplay();
  })
);

equalsButton.addEventListener("click", function () {
  calculator.compute();
  calculator.updateDisplay();
});

clearButton.addEventListener("click", function () {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", function () {
  calculator.del();
  calculator.updateDisplay();
});
