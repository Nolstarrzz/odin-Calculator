const table = document.querySelector('.calculations-table');
const display = document.querySelector('.display')
let number1 =  0;
let number2 = 0;
let answer = 0;
let operator = '';
let decimal = false;
let error = false;

 
table.addEventListener('click', (event) => {
    if(error === true)
        display.textContent = '';
        error = false;
    if (event.target.tagName === 'BUTTON') {
        let buttonText = event.target.textContent;
        if( buttonText === '1' || buttonText === '2'|| 
            buttonText === '3' || buttonText === '4' ||
            buttonText === '5' || buttonText === '6' ||
            buttonText === '7' || buttonText === '8' ||
            buttonText === '9' || buttonText === '0')
        {
            if(number1 === 0 || operator === '')
            {
                display.textContent = display.textContent + buttonText;
                number1 = display.textContent;
                /*if(decimal)
                {
                    number1 = parseFloat(number1)
                    console.log(number1)
                }*/
                    number1 = parseInt(number1)

            }
            else
            {
                display.textContent = display.textContent + buttonText;
                number2 = display.textContent;
                /*if(decimal)
                {
                    number2 = parseFloat(number2)
                    console.log(number2)
                }*/
                number2 = parseInt(number2)
            }
        }
        else if(buttonText === 'CLEAR')
        {
            display.textContent = '';
            number1 = 0;
            number2 = 0;
            operator = '';
            decimal = false;
        }
        else if(buttonText === 'DELETE')
        {
            let ifNum1 = false;
            let nums = display.textContent;
            nums = parseInt(nums)
            if(nums === number1)
                ifNum1 = true;
            let currentText = display.textContent;
            if (currentText.length > 0) 
            {
                display.textContent = currentText.slice(0, -1);
                nums = display.textContent;
            }
            if(ifNum1 === true)
            {
                number1 = nums;
                display.textContent = number1;
            }
            else{
                number2 = nums;
                display.textContent = number2;
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
            number1 = parseInt(number1)
            number2 = parseInt(number2)
            operate(number1, operator, number2)
            operator = '';
            equals(answer)
        }
        else if(buttonText === '.')
        {
            /*decimal = true;
            if(!display.textContent.includes('.'))
                display.textContent += '.';
                number1 += '.'
                number2 += '.'
                console.log(number1)
                console.log(number2)*/
        }

    }
});

/*function deleter()
{
    let currentText = display.textContent;
    if (currentText.length > 0) {
        display.textContent = currentText.slice(0, -1);
        nums = display.textContent;
        console.log(nums)
    }
}*/

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
    if(number1 === 0 || number2 === 0)
    {
        alert("YOU DING DONG, YOU TRIED DIVIDING BY 0")
        error = true;
        return;
    }
    else if(Number.isInteger(number1 / number2))
        answer = number1 / number2
    else
    {
        answer = number1 / number2
        answer = Math.round(answer * 100) / 1000;
    }
    return answer;
}

function equals(answer)
{
    display.textContent = '';
    display.textContent = answer;
    number1 = answer;
}