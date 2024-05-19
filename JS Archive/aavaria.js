// the same variable can be declared twice
// or re-declared with VAR
var a = 12
var a = 12
var a = 45
var a = 101

// dynamically typed language => variables types are being assigned at runtime based on the their value at the time (opposite: statically)
// loosely (weakly) typed language => a language that doesn't require a variable to be explicitely defined (opposite: strongly)
let numberOrString = 'not number'
numberOrString = 123456789

// ternary operator
let number = 23
let result = number > 30 ? 'ok' : 'not ok'
console.log(result)
