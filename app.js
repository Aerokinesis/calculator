function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function mod (num1, num2) {
    return num1 % num2;
}

let number1 = '';
let number2 = '';
let op = "";
let operators = document.querySelectorAll(".operator");
let display = document.querySelector(".display");

display.textContent = "0";

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        case '%':
            return remainder(num1, num2);
        default:
            return null;
    }
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function(event) {
        display.textContent = event.target.textContent;
    });
}


let numDigits = document.querySelectorAll(".digit");

for (let i = 0; i < numDigits.length; i++) {
    numDigits[i].addEventListener("click", function(event) {
        display.textContent = event.target.textContent;
    });
}

let allClearBtn = document.querySelector(".clear");

allClearBtn.addEventListener('click', function(e){

    display.textContent = "0";
    number1 = "0";
    number2 = "0";
    op = "";

    console.log("Cleared!");
});

let equals = document.querySelector(".equal");

equals.addEventListener("click", function (event) {
    // display.textContent = ""
    display.textContent = operate(number1, number2, operatorInput);
    console.log("Total!");
})