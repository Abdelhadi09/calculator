function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) { 
    if (b == 0) {
        return "can't divide by zero"
    }
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) { 
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return ("not  a valid operator");
    }
}
let currentInput = "";
let operator = "";

let result = document.querySelector(".display")
let buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click" , () => {
        let value = button.id
        if (value === "C") {
            currentInput = "";
            operator = "";
            result.value = "";
          } else if (value === "=") {
            if (currentInput && operator) {
              const num1 = parseFloat(result.value);
              const num2 = parseFloat(currentInput);
              const calculatedValue = operate(operator, num1, num2);
              result.value = calculatedValue;
              currentInput = "";
              operator = "";
            }
          } else if (value === "." && !currentInput.includes(".")) {
            currentInput += value;
            result.value = currentInput;
          } else if (["+", "-", "*", "/"].includes(value)) {
            if (currentInput) {
              operator = value;
              result.value += ` ${value} `;
              currentInput = "";
            }
          } else {
            currentInput += value;
            result.value = currentInput;
          }
    })
})
