console.log(3 == `3`);

/* == is used for comparison between two variables irrespective of the datatype of variable. */


console.log(3 === `3`);

/* === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values */

console.log('Which of the following is used to ASSIGN a value to a variable? 9.=');


let myVar = true;

console.log(!myVar ? 'good morning' : 'good evening' );

/* 3. Short Circuit
 */
let firstName = '' || 'John' ||  0;


let emptyStr  = '' && false && 'Hello World'

let zero  = '' || false || 0

let seven = 75 && 'nine' && 7

console.log(firstName)
console.log(emptyStr)
console.log(zero);
console.log(seven);


console.log(firstName,zero,emptyStr,seven);