
const numberButtons = document.querySelectorAll('[data-number]');
const currentScreen = document.getElementById('currentOperationScreen');
const lastScreen = document.getElementById('lastOperationScreen');
const equalsButton = document.getElementById('equals');
const decimalButton = document.getElementById('decimal-point');
const deleteButton = document.getElementById('delete-btn');
const acButton = document.getElementById('ac-btn');
const operatorButtons = document.querySelectorAll('[data-operator]')

//status variables
let shouldResetScreen = false; // should we clear current screen after entering first values and operations
let currentOperation = null;

//add event listener functions
decimalButton.addEventListener('click', () => {appendDecimalPoint()});
deleteButton.addEventListener('click', () => {deleteNumber()});
acButton.addEventListener('click',()=>{clearAll()});
numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        appendNumber(button.textContent)
    })
});
operatorButtons.forEach(button => {
    button.addEventListener('click',() =>{
        //currentOperation = button.textContent;
        //console.log(`current operator ${button.textContent}`)
        setOperator(button.textContent);
    })
})

function setOperator(operator){
    if(currentOperation !== null) operate()
    currentOperation = operator;
    currentOperand = currentScreen.textContent
    lastScreen.textContent = `${currentOperand}${currentOperation}`
    shouldResetScreen = true;
}

//button functions
function clearAll(){
    currentScreen.textContent = '0';
    lastScreen.textContent = '';
    currentOperation = null;
    shouldResetScreen = false;
}

function appendNumber(value){
    
    if(currentScreen.textContent === '0' || shouldResetScreen){
        console.log("reset screen");
        resetScreen();
    }
    currentScreen.textContent += value;
    
}

function resetScreen(){
    currentScreen.textContent = '';
    shouldResetScreen = false;
}

function appendDecimalPoint(){
    if (currentScreen.textContent.includes('.')){
        return;
    } 
    currentScreen.textContent += '.';

}

function deleteNumber(){
    currentScreen.textContent = currentScreen.textContent.slice(0,-1);
}

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
