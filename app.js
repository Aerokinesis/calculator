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
            return mod(num1, num2);
        default:
            return null;
    }
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function(event) {
        console.log(event.target.textContent);
        op = event.target.textContent;
    });
}


let numDigits = document.querySelectorAll(".digit");

for (let i = 0; i < numDigits.length; i++) {
    numDigits[i].addEventListener("click", function(event) {
            number1 += event.target.textContent;
            console.log(number1);
            display.textContent = `${number1}`;
    });
}

let allClearBtn = document.querySelector(".clear");

allClearBtn.addEventListener('click', function(e){

    display.textContent = "0";
    number1 = "";
    number2 = "";
    op = "";

    console.log("Cleared!");
});

let equals = document.querySelector(".equal");

equals.addEventListener("click", function (event) {
    // display.textContent = ""
    console.log(operate(number1, number2, op));
    console.log("Total!");
})