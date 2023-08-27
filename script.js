const table = document.querySelector('.calculations-table');
const display = document.querySelector('.display')
let number1 = 1;
let number2 = 6;
let operator = "*";
let answer = 0;
 
table.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const buttonText = event.target.textContent;
        if( buttonText === '1' || buttonText === '2'|| 
            buttonText === '3' || buttonText === '4' ||
            buttonText === '5' || buttonText === '6' ||
            buttonText === '7' || buttonText === '8' ||
            buttonText === '9')
        {
            display.textContent = display.textContent + buttonText;
        }
        else if(buttonText === 'CLEAR')
        {
            display.textContent = '';
        }
        else if(buttonText === 'DELETE')
        {
            const currentText = display.textContent;
            if (currentText.length > 0) {
                display.textContent = currentText.slice(0, -1);
            }
        }
    }
});

function operate(number1, operator, number2)
{
    if(operator === '+')
        add(number1, number2)
    else if(operator === '-')
        subtract(number1, number2)
    else if(operator === '*')
        multiply(number1, number2)
    else if(operator === '/')
        divide(number1, number2)
    return answer;
}

//all operators
function add(number1, number2)
{
    return answer = number1 + number2;
}

function subtract(number1, number2)
{
    return answer = number1 - number2;
}

function multiply(number1, number2)
{
    return answer = number1 * number2;
}

function divide(number1, number2)
{
    return answer = number1 / number2;
}