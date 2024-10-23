// >>>>>>>>>>>>>>>>>>>>>>>  COMPARISION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

console.log( 5  > 12);
console.log( 5  < 12);
console.log( 5  >= 12);
console.log( 5  <= 12);
console.log( 5  == 12);
console.log( 5  != 12);

// Comparision Operators (<, > , <=, >=, ==, != ) take two values and check the condition.
// In some cases values could be same data type or both are different.
// For Example

let score = 10;
let points = "10";

console.log(score == points); // => true
console.log(score >= points); // => true

// Here one data type is string and other one is number. But result is TRUE.

let total = 10;
let totalPoints = "10";
// Here we use the strict Comparision Operator (===) that checks the value along with its data type. 
//  In this comparision both value should have the same data type.

console.log(score === points); // => false

console.log(total === score); // => true
console.log(total === totalPoints); // => true


// >>>>>>>>>>>>>>>>>>>>>>>> NULL & UNDEFINED <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


console.log(null > 0); // => false
console.log(null < 0); // => false
console.log(null == 0); // => false
console.log(null >= 0); // => true
console.log(null <= 0); // => true
console.log(null != 0); // => true

console.log(undefined < 0); // => false
console.log(undefined == 0); // => false
console.log(undefined >= 0); // => false
console.log(undefined <= 0); // => false
console.log(undefined > 0); // => false
console.log(undefined != 0); // => true


console.log(null); // => null
console.log(undefined); // => undefined
