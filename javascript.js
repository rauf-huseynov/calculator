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