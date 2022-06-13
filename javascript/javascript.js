const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

function operate(operator, a, b){
    if (operator == '+'){
        return add(a, b);
    } else if (operator == '-'){
        return subtract(a, b);
    } else if (operator == '*'){
        return multiply(a, b);
    } else if (operator == '/'){
        return divide(a, b);
    } else {
        return 'Error, operator not valid.'
    }
}

//Create calculator
let z = 1;
const cont = document.querySelector('#btnContainer');
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