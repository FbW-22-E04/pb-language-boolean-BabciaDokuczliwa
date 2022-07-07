
const number1 = 40;
const number2 = 80;
console.log((number1 >= 40 && number1 <= 60 || number1 >= 70 && number1 <= 100) && (number2 >= 40 && number2 <= 60 || number2 >= 70 && number2 <= 100));

const specifiedNumber = 8;

console.log(specifiedNumber < 19 ? 19 - specifiedNumber : (specifiedNumber-19)*3)

const numberOne = 34
const numberTwo = 16

console.log(numberOne === 50 || numberTwo === 50 || numberOne + numberTwo === 50)


const check = (num1, num2) => {
    console.log(num1 === 50 || num2 === 50 || num1 + num2 === 50)
}
check(34, 16)

const numA = 2
const numB = 4

console.log((numA > 0 && numB < 0) || (numB > 0 && numA < 0) ? 'Yes' : 'No')

const customString = 'apepe'

console.log(customString.startsWith('Py') ? customString : `Py${customString}`)

const string1 = `aword`
const string2 = string1.slice(-3);
console.log(string2);
console.log(string2 + string1 + string2);


const num4 = 70;
const num5 = 80;
console.log(100 - num4 < 100 - num5 ? num4 : num5);
