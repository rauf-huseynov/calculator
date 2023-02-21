function add(a, b) {
    const x = parseFloat(a);
    const y = parseFloat (b);
    let result = x+y;
    if(!Number.isInteger(result)) {
        result = parseFloat(result.toFixed(5));
    }
    return result;
}

function subtract(a, b) {
    const x = parseFloat(a);
    const y = parseFloat (b);
    let result = x-y;
    if(!Number.isInteger(result)) {
        result = parseFloat(result.toFixed(5));
    }
    return result;
}

function multiply(a, b) {
    const x = parseFloat(a);
    const y = parseFloat (b);
    let result = x*y;
    if(!Number.isInteger(result)) {
        result = parseFloat(result.toFixed(5));
    }
    return result;
}

function divide(a, b) {
    const x = parseFloat(a);
    const y = parseFloat (b);
    if (y === 0) {
        return "Division by zero"
    } else {
        let result = x/y;
        if(!Number.isInteger(result)) {
            result = parseFloat(result.toFixed(5));
        }
        return result;
    }
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
        value = numberBtn.value;
        if(main.textContent == 0 || main.textContent == 'Division by zero') {
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

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => {
    if (firstNumber.length > 1) {
        firstNumber = firstNumber.toString().slice(0, -1);
        main.textContent = firstNumber;
    } else if (firstNumber.length = 1) {
        firstNumber = 0;
        main.textContent = firstNumber;
    }
})