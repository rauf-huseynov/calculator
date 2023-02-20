function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    if (b === 0) {
        return "Division by zero"
    } else {
        return a/b;
    }
}

function percent(a, b) {
    return a*b/100;
}

function reciprocal(a) {
    return 1/a;
}

function squared(a) {
    return a**2;
}

function squareRoot(a) {
    if (a<0) {
        return "Negative number"
    } else {
        return Math.sqrt(a);
    }
}

const numberButtons = document.querySelectorAll('.numbers');
numberButtons.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
        value = parseInt(numberBtn.value);
        const main = document.querySelector('#main');
        if(main.textContent == 0) {
            main.textContent = value;
        } else {
            if(main.textContent.length < 15) {
                main.textContent+=value;
            }
        }
    })
})

const twoOperatorButtons = document.querySelectorAll('.twoOperators');
twoOperatorButtons.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', () => {
        const main = document.querySelector('#main');
        const value = operatorBtn.getAttribute('data-value');
        const secondary = document.querySelector('#secondary');
        if (secondary.textContent.length>0) {
            const a = parseInt(secondary.textContent);
            const b = parseInt(main.textContent);
            const operatorId = operatorBtn.getAttribute('id');
            switch(operatorId) {
                case "percent":
                    result = percent(a, b);
                    break;
                case "divide":
                    result = divide(a, b);
                    break;
                case "multiply":
                    result = multiply(a, b);
                    break;
                case "subtract":
                    result = subtract(a, b);
                    break;
                case "add":
                    result = add(a, b);
                    break;
            }
            if (typeof result === 'number') {
                secondary.textContent = result + value;
                main.textContent = 0;
            } else {
                secondary.textContent = "";
                main.textContent = result;
            }
        } else {
            if(main.textContent.length>0) {
                secondary.textContent = main.textContent + value;
                main.textContent = 0;
            }
        }
    })
})