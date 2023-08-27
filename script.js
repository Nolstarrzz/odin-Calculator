const table = document.querySelector('.calculations-table');
const display = document.querySelector('.display')
let number1 =  0;
let number2 = 0;
let answer = 0;
let operator = '';
 
table.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        let buttonText = event.target.textContent;
        if( buttonText === '1' || buttonText === '2'|| 
            buttonText === '3' || buttonText === '4' ||
            buttonText === '5' || buttonText === '6' ||
            buttonText === '7' || buttonText === '8' ||
            buttonText === '9' || buttonText === '0')
        {
            if(number1 === 0 || operator === '' && answer != 0)
            {
                display.textContent = display.textContent + buttonText;
                number1 = display.textContent;
                console.log(number1);
            }
            else
            {
                display.textContent = display.textContent + buttonText;
                number2 = display.textContent;
                console.log(number2)
            }
        }
        else if(buttonText === 'CLEAR')
        {
            display.textContent = '';
            number1 = 0;
            number2 = 0;
            operator = '';
        }
        else if(buttonText === 'DELETE')
        {
            const currentText = display.textContent;
            if (currentText.length > 0) {
                display.textContent = currentText.slice(0, -1);
            }
        }
        else if(buttonText === '+' || buttonText === '-' || 
                buttonText === '×' || buttonText === '÷')
        {
            operator = buttonText;
            display.textContent = '';
        }
        else if(buttonText === '=')
        {
            display.textContent = '';
            number2 = parseInt(number2)
            number1 = parseInt(number1)
            operate(number1, operator, number2)
            operator = '';
            equals(answer)
        }
    }
});

function operate(number1, operator, number2)
{
    if(operator === '+')
        add(number1, number2)
    else if(operator === '-')
        subtract(number1, number2)
    else if(operator === '×')
        multiply(number1, number2)
    else if(operator === '÷')
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

function equals(answer)
{
    display.textContent = '';
    display.textContent = answer;
    number1 = answer;
}