// function add(a, b) {
//     return a+b;
// }

// function subtract(a, b) {
//     return a-b;
// }

// function multiply(a, b) {
//     return a*b;
// }

// function divide(a, b) {
//     if (b === 0) {
//         return "Division by zero"
//     } else {
//         return a/b;
//     }
// }

// function percent(a, b) {
//     return a*b/100;
// }

// function reciprocal(a) {
//     return 1/a;
// }

// function squared(a) {
//     return a**2;
// }

// function squareRoot(a) {
//     if (a<0) {
//         return "Negative number"
//     } else {
//         return Math.sqrt(a);
//     }
// }


// const main = document.querySelector('#main');
// const secondary = document.querySelector('#secondary');

// const numberButtons = document.querySelectorAll('.numbers');
// numberButtons.forEach(numberBtn => {
//     numberBtn.addEventListener('click', () => {
//         value = parseInt(numberBtn.value);
//         if(main.textContent == 0) {
//             main.textContent = value;
//         } else {
//             if(main.textContent.length < 15) {
//                 main.textContent+=value;
//             }
//         }
//     })
// })

// const twoOperatorButtons = document.querySelectorAll('.basicOperators');
// twoOperatorButtons.forEach(operatorBtn => {
//     operatorBtn.addEventListener('click', () => {
//         const value = operatorBtn.getAttribute('data-value');
//         if (secondary.textContent.length>0) {
//             a = parseInt(secondary.textContent);
//             b = parseInt(main.textContent);
//             const operatorId = operatorBtn.getAttribute('id');
//             let result;
//             switch(operatorId) {
//                 case "divide":
//                     result = divide(a, b);
//                     operation = operatorId;
//                     break;
//                 case "multiply":
//                     result = multiply(a, b);
//                     operation = operatorId;
//                     break;
//                 case "subtract":
//                     result = subtract(a, b);
//                     operation = operatorId;
//                     break;
//                 case "add":
//                     result = add(a, b);
//                     operation = operatorId;
//                     break;
//             }
//             if (typeof result === 'number') {
//                 secondary.textContent = result + value;
//                 main.textContent = 0;
//             } else {
//                 secondary.textContent = "";
//                 main.textContent = result;
//             }
//         } else {
//             if(main.textContent.length>0) {
//                 secondary.textContent = main.textContent + value;
//                 main.textContent = 0;
//             }
//         }
//     })
// })

// const clearEntry = document.querySelector('#clearEntry');
// clearEntry.addEventListener('click', () => {
//     main.textContent = 0;
// })

// const clear = document.querySelector('#clear');
// clear.addEventListener('click', () => {
//     main.textContent = 0;
//     secondary.textContent = "";
// })

// const equal = document.querySelector('#equal');
// equal.addEventListener('click', () => {
//     let result;
//     switch(operation) {
//         case "divide":
//             result = divide(a, b);
//             operation = operatorId;
//             break;
//         case "multiply":
//             result = multiply(a, b);
//             operation = operatorId;
//             break;
//         case "subtract":
//             result = subtract(a, b);
//             operation = operatorId;
//             break;
//         case "add":
//             result = add(a, b);
//             operation = operatorId;
//             break; 
//     }
//     main.textContent = result;
//     secondary.textContent ="";
// })

//_____________________________________________________________________________________________________

const main = document.querySelector('#main');
const secondary = document.querySelector('#secondary');
const operatorDisplay = document.querySelector('#operatorDisplay');
let firstNumber = 0;
let secondNumber = "";
main.textContent = firstNumber;
secondary.textContent = secondNumber;

const numberButtons = document.querySelectorAll('.numbers');
numberButtons.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
        value = numberBtn.value;
        if(main.textContent == 0) {
            firstNumber = value;
            main.textContent = value;
        } else {
            if(main.textContent.length < 15) {
                firstNumber+=value;
                main.textContent += value;;
            }
        }
    })
})



function operate(operator, first, second) {
    switch (operator) {
        case 'add':
            add(first, second);
            break;
        case 'subtract':
            subtract(first, second);
            break;
        case 'multiply':
            multiply(first, second);
            break;
        case 'divide':
            divide(first, second);
            break;
    }
}



const clearEntry = document.querySelector('#clearEntry');
clearEntry.addEventListener('click', () => {
    main.textContent = 0;
})

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    main.textContent = 0;
    secondary.textContent = "";
    operatorDisplay.textContent = "";
})

