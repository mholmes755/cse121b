/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2)
{
    return number1 + number2;
}

function addNumbers()
{
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber);
    }

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
function subtract(number1, number2)
{
    return number1 - number2;
}

function subtractNumbers()
{
    let subtractnumber1 = Number(document.querySelector('#subtract1').value);
    let subtractnumber2  = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractnumber1, subtractnumber2)
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */

let multiply = (number1, number2) => {
    return number1 * number2;
};

let multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
};


document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
 

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => {
    let result = number1/number2;
    return result;
};


let divideNumbers = () =>
{
    let dividenumber1 = Number(document.querySelector('#dividend').value);
    let dividenumber2  = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividenumber1,dividenumber2)
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)


/* Decision Structure */

document.querySelector('#getTotal').addEventListener('click', calculateTotal);

function calculateTotal() {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let isClubMember = document.querySelector('#member').checked;

    if (isClubMember) {
        subtotal *= 0.85;
    }

    document.querySelector('#total').textContent = `$${subtotal.toFixed(2)}`;
}


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13];
document.querySelector('#array').innerHTML = myArray.join(', ');


/* Output Odds Only Array */
// #3
document.querySelector('#odds').innerHTML = myArray.filter(number => number %2 !==0);


/* Output Evens Only Array */
// #4
document.querySelector('#evens').innerHTML = myArray.filter(number => number %2 ===0);



/* Output Sum of Org. Array */
// #5
document.querySelector('#sumOfArray').innerHTML = myArray.reduce((sum, number) => sum + number, 0);


/* Output Multiplied by 2 Array */
// #6

const numbersTimesTwo = myArray.map(num => num * 2);
document.querySelector('#multiplied').innerHTML = numbersTimesTwo.join(', '); // Number may not be right


/* Output Sum of Multiplied by 2 Array */
// #7


const sumOfNumbersTimesTwo = numbersTimesTwo.reduce((acc, val) => acc+ val, 0);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfNumbersTimesTwo;

