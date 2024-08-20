function add (num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function subtract (num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

function multiply (num1, num2) {
    return parseInt(num1) * parseInt(num2);
}

function divide (num1, num2) {
    let decimal = parseFloat((num1 / num2).toFixed(8));
    if (decimal == Infinity) {
        return "Can't divide by zero";
    } else {
        return decimal;
    }
}

function mod (num1, num2) {
    return parseInt(num1) % parseInt(num2);
}

function toggleSign (num){
    if (num.startsWith("-")) {
        return num.slice(1);
    } else {
        return "-" + num;
    }
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

let plusMinusBtn = document.querySelector(".plus-or-minus");

plusMinusBtn.addEventListener(("click"), function(event) {
    if (op == "") {
        number1 = toggleSign(number1);
        display.textContent = number1;
    } else if (number2 != ""){
        number2 = toggleSign(number2);
        display.textContent = number2;
    }
});

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function(event) {
        console.log(event.target.textContent);
        if (op == "") {
            op = event.target.textContent;
        } else if (op != "") {
            number1 = operate(number1, number2, op);
            display.textContent = `${number1}`;
            number2 = "";
        }
        
    });
}


let numDigits = document.querySelectorAll(".digit");

for (let i = 0; i < numDigits.length; i++) {
    numDigits[i].addEventListener("click", function(event) {
        const digit = event.target.textContent;

        if (op == "") {
            // Prevent multiple zeros at the start
            if (number1 === "0" && digit === "0") {
                return; // Do nothing if 0 is pressed repeatedly
            } else if (number1 === "0" && digit !== "0") {
                number1 = digit; // Replace the initial 0 with the new digit
            } else {
                number1 += digit; // Add the digit as usual
            }
            display.textContent = number1; // Update display
        } else if (op != "") {
            // Prevent multiple zeros at the start of number2
            if (number2 === "0" && digit === "0") {
                return; // Do nothing if 0 is pressed repeatedly
            } else if (number2 === "0" && digit !== "0") {
                number2 = digit; // Replace the initial 0 with the new digit
            } else {
                number2 += digit; // Add the digit as usual
            }
            display.textContent = number2; // Update display
        }
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
    if (number1 == "" || number2 == "" || op == "") {
        if (number1 != "") {
            display.textContent = number1;
        }
    } else {
        const result = operate(number1, number2, op);
        display.textContent = result;
        number1 = result.toString(); // Retain the result for future operations
        number2 = ""; // Reset number2 to allow for new input
        op = ""; // Reset the operator for a new operation
        console.log("Total!");
    }
});