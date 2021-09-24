//functions for operations
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a*b;
}
//check for valid input i.e. dividing by zero before calling these functions
function divide(a,b){
    return a / b
}
//pass operator as a string
function operate(operator,a,b){
    //change arguments to numerical values
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/': 
            if(b === 0){
                return null;
            }
            return divide(a,b);
        default:
            return null;
    }
}
