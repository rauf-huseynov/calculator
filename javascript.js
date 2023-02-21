function add(a, b) {
    const x = parseFloat(a);
    const y = parseFloat (b);
    let result = x+y;
    if(!Number.isInteger(result)) {
        result = parseFloat(result.toFixed(5));
    }
    return result.toString();
}

function subtract(a, b) {
    const x = parseFloat(a);
    const y = parseFloat (b);
    let result = x-y;
    if(!Number.isInteger(result)) {
        result = parseFloat(result.toFixed(5));
    }
    return result.toString();
}

function multiply(a, b) {
    const x = parseFloat(a);
    const y = parseFloat (b);
    let result = x*y;
    if(!Number.isInteger(result)) {
        result = parseFloat(result.toFixed(5));
    }
    return result.toString();
}

function divide(a, b) {
    const x = parseFloat(a);
    const y = parseFloat (b);
    if (y === 0) {
        return "Divide by zero"
    } else {
        let result = x/y;
        if(!Number.isInteger(result)) {
            result = parseFloat(result.toFixed(5));
        }
        return result.toString();
    }
}

function percent (a, b) {
    const x = parseFloat(a);
    const y = parseFloat(b);
    let percentValue = a*b/100;
    if (!Number.isInteger(percentValue)) {
        percentValue = parseFloat(percentValue.toFixed(5));
    }
    return percentValue;
}

function reciprocal(a) {
    a = parseFloat(a);
    let result = 1/a;
    if (!Number.isInteger(result)) {
        result = parseFloat(result.toFixed(5));
    }
    return result.toString();
}

function squared(a) {
    a = parseFloat(a);
    let result = a**2;
    if (!Number.isInteger(result)) {
        result = parseFloat(result.toFixed(5));
    }
    return result.toString();
}

function squareRoot(a) {
    a = parseFloat(a);
    if (a < 0) {
        result = "Negative number";
    } else {
        result = Math.sqrt(a);
        if(!Number.isInteger(result)) {
            result = parseFloat(result.toFixed(5));
        }
    }
    return result.toString();
}

const main = document.querySelector('#main');
const secondary = document.querySelector('#secondary');
const operatorDisplay = document.querySelector('#operatorDisplay');
let firstNumber = 0;
let secondNumber = '';
let operatorSign = '';
main.textContent = firstNumber;
secondary.textContent = secondNumber;

const numberButtons = document.querySelectorAll('.numbers');
numberButtons.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
        value = numberBtn.value.toString();
        if(main.textContent === "0" || main.textContent == "Divide by zero" || main.textContent == "Negative number") {
            firstNumber = value;
            main.textContent = firstNumber;
        } else {
            if(main.textContent.length < 15) {
                firstNumber+=value;
                main.textContent = firstNumber;
            }
        }
    })
})



function operate(operator, first, second) {
    first = parseFloat(first);
    second = parseFloat(second);
    switch (operator) {
        case 'add':
            return add(first, second);
            break;
        case 'subtract':
            return subtract(first, second);
            break;
        case 'multiply':
            return multiply(first, second);
            break;
        case 'divide':
            return divide(first, second);
            break;
    }
}



const clearEntry = document.querySelector('#clearEntry');
clearEntry.addEventListener('click', () => {
    firstNumber = 0;
    main.textContent = firstNumber;
})

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    secondNumber = '';
    firstNumber = 0;
    main.textContent = firstNumber;
    secondary.textContent = secondNumber;
    operatorSign = '';
    operatorDisplay.textContent = '';
})

const basicOperatorsButtons = document.querySelectorAll('.basicOperators');
basicOperatorsButtons.forEach (basicOperatorBtn => {
    basicOperatorBtn.addEventListener('click', () => {
      if (main.textContent != "Divide by zero" && main.textContent != "Negative number") {   
        if (secondNumber == '') {
            secondNumber = firstNumber;
            operatorDisplay.textContent = basicOperatorBtn.getAttribute('data-value');
            firstNumber = 0;
            main.textContent = firstNumber;
            secondary.textContent = secondNumber;
            operatorSign = basicOperatorBtn.id;
        } else {
            let result = operate(operatorSign, secondNumber, firstNumber);
            secondNumber = '';
            secondary.textContent = secondNumber;
            firstNumber = result;
            main.textContent = firstNumber;
            operatorDisplay.textContent = '';
        }
    }
    })
})

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    if (operatorDisplay.textContent != '') {
        let result = operate (operatorSign, secondNumber, firstNumber);
        secondNumber = '';
        secondary.textContent = secondNumber;
        firstNumber = result;
        main.textContent = firstNumber;
        operatorDisplay.textContent = '';
    }
})

const backspaceBtn = document.querySelector('#backspace');
backspaceBtn.addEventListener('click', () => {
    if (firstNumber.length > 1) {
        firstNumber = firstNumber.toString().slice(0, -1);
        main.textContent = firstNumber;
    } else if (firstNumber.length = 1) {
        firstNumber = 0;
        main.textContent = firstNumber;
    }
})

const percentBtn = document.querySelector('#percent');
percentBtn.addEventListener('click', () => {
    if (operatorDisplay.textContent != '') {
       firstNumber = percent(secondNumber, firstNumber);
       let result = operate(operatorSign, secondNumber, firstNumber);
       secondNumber = '';
       secondary.textContent = secondNumber;
       firstNumber = result;
       main.textContent = firstNumber;
       operatorDisplay.textContent = '';
    }
})

const reciprocalBtn = document.querySelector('#reciprocal');
reciprocalBtn.addEventListener('click', () => {
    if (firstNumber == 0) {
        main.textContent = "Divide by zero";
    }
    else if (operatorDisplay.textContent === '' && firstNumber != 0) {
        let result = reciprocal(firstNumber);
        firstNumber = result;
        main.textContent = firstNumber;
    } else {
        let result = operate(operatorSign, secondNumber, firstNumber);
        secondNumber = '';
        secondary.textContent = secondNumber;
        firstNumber = result;
        main.textContent = firstNumber;
        operatorDisplay.textContent = '';
    }
})

const squaredBtn = document.querySelector('#squared');
squaredBtn.addEventListener('click', () => {
        if (operatorDisplay.textContent === '') {
            let result = squared(firstNumber);
            firstNumber = result;
            main.textContent = firstNumber;
        } else {
            let result = operate(operatorSign, secondNumber, firstNumber);
            secondNumber = '';
            secondary.textContent = secondNumber;
            firstNumber = result;
            main.textContent = firstNumber;
            operatorDisplay.textContent = '';
        }
})

const squareRootBtn = document.querySelector('#squareRoot');
squareRootBtn.addEventListener('click', () => {
    if (operatorDisplay.textContent === '') {
        let result = squareRoot(firstNumber);
        firstNumber = result;
        main.textContent = firstNumber;
    } else {
        let result = operate(operatorSign, secondNumber, firstNumber);
        secondNumber = '';
        secondary.textContent = secondNumber;
        firstNumber = result;
        main.textContent = firstNumber;
        operatorDisplay.textContent = '';
    }
})

const plusMinusBtn = document.querySelector('#plusMinusSign');
plusMinusBtn.addEventListener('click', () => {
    if (main.textContent != "Divide by zero" || main.textContent != "Negative number") {
        firstNumber = firstNumber * (-1);
        main.textContent = firstNumber;
    }
})

const dotBtn = document.querySelector('#dot');
dotBtn.addEventListener('click', () => {
    if(!firstNumber.toString().includes(".")) {
        firstNumber = firstNumber.toString() + ".";
        main.textContent = firstNumber;
    }
})

