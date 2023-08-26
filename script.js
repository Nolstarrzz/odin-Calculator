const table = document.querySelector('.calculations-table');
let number1 = 1;
let number2 = 6;
let operator = "*";
let answer = 0;
 
/*table.addEventListener()
{

}*/

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

console.log(operate(number1, operator, number2))