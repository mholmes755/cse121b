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

/* Function Expression - Subtract Numbers */
function subtract(number1, number2)
{
    return number1 - number2;
}

function subtractNumbers()
{
    let subtractnumber1 = Number(document.querySelector('#subtract1').value);
    let subtractnumber2  = Number(document.querySelector('#subtract').value);

    document.querySelector('#difference').value = subtract(subtractnumber1, subtractnumber2)
}

/* Arrow Function - Multiply Numbers */
let muliply = (number1, number2) => number1*number2;


let muliplyNumbers = () =>
{
    let mulitpynumber1 = Number(document.querySelector('#factor1').value);
    let multipynumber2  = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = mulitply(multipynumber1, mulitplynumber2)
};
 

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1/number2;


let divideNumbers = () =>
{
    let dividenumber1 = Number(document.querySelector('#dividend').value);
    let dividenumber2  = Number(document.querySelector('#divisor').value);

    document.querySelector('#qoutient').value = divide(dividenumber1,dividenumber2)
};


/* Decision Structure */
var totalButtonElement = document.getElementById("getTotal");

totalButtonElement.addEventListener("click", function()
{
    var memberButtonElement = document.getElementById('member');
    memberButtonElement.addNumber("click", function()
    {
        if (memberButtonElement.checked)
        {
            totalButtonElement = totalButtonElement * .85;
        }
    }
    )
    console.log("Button Clicked");
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13];
myArray = document.querySelector('#array').value;

/* Output Odds Only Array */
// #3
document.querySelector('#evens').innerHTML = myArray.filter(number => number %2 >=1);


/* Output Evens Only Array */
// #4
document.querySelector('#evens').innerHTML = myArray.filter(number => number %2 ===0);



/* Output Sum of Org. Array */
// #5
document.querySelector('#sumOfArray').innerHTML = myarray.reduce((sum,number) => sum + number);


/* Output Multiplied by 2 Array */
// #6

const numbersTimesTwo = myArray.map(num => num * 2);
numbersTimesTwo = Number(document.querySelector('#multiplied').innerHTML); // Number may not be right

// document.querySelector('#mulitiplied').innerHTML = myArray.map(number => number * 2);


/* Output Sum of Multiplied by 2 Array */
// #7


const sumOfNumbersTimesTwo = numbersTimesTwo.reduce((acc, val) => acc+ val, 0);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfNumbersTimesTwo;

