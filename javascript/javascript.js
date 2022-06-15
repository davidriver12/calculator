const decimalCount = num =>  {
    const numStr = String(num);
    if (numStr.includes('.')){
        return numStr.split('.')[1].length;
    } else {
        return 0;
    }
}

function toggleDot (){
    let dotBtn = document.querySelector('#btn14');
    if (dotOn){
        dotBtn.replaceWith(dotBtn.cloneNode(true));
        dotOn = false;
    } else {
        dotBtn.addEventListener('click', function(){
            displayValue = addToDisplay(dotBtn.textContent, displayValue);
            display.textContent = displayValue;
            toggleDot();
        })
        dotOn = true;
    }
}
    
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

function operate(operator, a, b){
    let result;
    if (operator == '+'){
        result = add(a, b);
    } else if (operator == '-'){
        result = subtract(a, b);
    } else if (operator == 'x'){
        result = multiply(a, b);
    } else if (operator == '/'){
        result = divide(a, b);
    } else {
        return 'Error, operator not valid.'
    } 
    if (decimalCount(result) <= 2){
        return result;
    } else {
        return parseFloat(result.toFixed(2));
    }

}

function addToDisplay(value, display){
    display += value;
    return display;
}

function clearDisplay(){
    displayValue = '';
    display.textContent = displayValue;
    miniDisplayValue = '';
    miniDisplay.textContent = miniDisplayValue;
    tempNum1 = undefined;
    tempNum2 = undefined;
    tempOperator = undefined;
    tempResult = undefined;
}

function deleteLast(){
    displayValue = displayValue.slice(0, -1);
    display.textContent = displayValue;
}

function operatorClicked(operator){
    if (!tempNum1){
        tempNum1 = parseFloat(displayValue);
        tempOperator = operator.textContent;
        miniDisplayValue = displayValue + ' ' + operator.textContent;
        miniDisplay.textContent = miniDisplayValue;
        displayValue = '';
        display.textContent = displayValue;
    } else {
        tempNum2 = parseFloat(displayValue);
        tempResult = operate(tempOperator, tempNum1, tempNum2);
        tempOperator = operator.textContent;
        tempNum1 = tempResult;
        miniDisplayValue = tempResult + ' ' + operator.textContent;
        miniDisplay.textContent = miniDisplayValue;
        displayValue = '';
        display.textContent = displayValue;
    }
}

function equalClicked(){
    tempNum2 = parseFloat(displayValue);
    tempResult = operate(tempOperator, tempNum1, tempNum2);
    displayValue = tempResult;
    display.textContent = displayValue;
    miniDisplayValue = '';
    miniDisplay.textContent = miniDisplayValue;
    tempNum1 = undefined;
    tempNum2 = undefined;
    tempOperator = undefined;
}

let dotOn = true;
const display = document.querySelector('#mainDisplay');
const miniDisplay = document.querySelector('#miniDisplay');
let tempNum1, tempNum2, tempOperator, tempResult;

//Create calculator
let z = 1;
const cont = document.querySelector('#btnContainer');
let firstLine = document.createElement('div')
firstLine.className = 'line';
firstLine.setAttribute('id', 'firstLine');
btnContainer.appendChild(firstLine);
clearBtn = document.createElement('button');
clearBtn.className = 'key';
clearBtn.setAttribute('id', 'clearBtn');
clearBtn.textContent = 'clear';
clearBtn.addEventListener('click', function(){
    clearDisplay();
    toggleDot();
});
firstLine.appendChild(clearBtn);
delBtn = document.createElement('button');
delBtn.className = 'key';
delBtn.setAttribute('id', 'delBtn');
delBtn.textContent = 'delete';
delBtn.addEventListener('click', function(){
    deleteLast();
})
firstLine.appendChild(delBtn);

for (let x=0; x<4; x++){
    let line = document.createElement('div');
    line.className = 'line';
    line.setAttribute('id', `line${x+1}`);
    btnContainer.appendChild(line);
    for(let y=0; y<4; y++){
        let button = document.createElement('button');
        button.className = 'key';
        button.setAttribute('id', `btn${z}`);
        z++;
        button.addEventListener('click', function(){
            if (isNaN(button.textContent) && button.textContent != '.'){
                if (button.textContent == '='){
                    if (miniDisplay.textContent){
                        equalClicked();
                        if (!dotOn){
                            toggleDot();
                        }
                    }
                } else {
                    operatorClicked(button);
                    if (!dotOn){
                        toggleDot();
                    }
                }
            } else {
                displayValue = addToDisplay(button.textContent, displayValue);
                display.textContent = displayValue;
                if (button.textContent == '.'){
                    toggleDot();
                }
            }
        })
        line.appendChild(button);
    }
}
btn1.textContent = '7';
btn2.textContent = '8';
btn3.textContent = '9';
btn4.textContent = '/';
btn5.textContent = '4';
btn6.textContent = '5';
btn7.textContent = '6';
btn8.textContent = 'x';
btn9.textContent = '1';
btn10.textContent = '2';
btn11.textContent = '3';
btn12.textContent = '-';
btn13.textContent = '0';
btn14.textContent = '.';
btn15.textContent = '+';
btn16.textContent = '=';

displayValue = '';

document.onkeydown = function (e) {
    switch (e.which) {
        case 67 : clearBtn.click();
            break;
        case 8 : delBtn.click();
            break;
        case 55 : btn1.click();
            break;
        case 56 : btn2.click();
            break;
        case 57 : btn3.click();
            break;
        case 191 : btn4.click();
            break;
        case 52 : btn5.click();
            break;
        case 53 : btn6.click();
            break;
        case 54 : btn7.click();
            break;
        case 88 : btn8.click();
            break;
        case 49 : btn9.click();
            break;
        case 50 : btn10.click();
            break;
        case 51 : btn11.click();
            break;
        case 109 : btn12.click();
            break;
        case 48 : btn13.click();
            break;
        case 190 : btn14.click();
            break;
        case 107 : btn15.click();
            break;
        case 13 : btn16.click();
            break;
    }
  }