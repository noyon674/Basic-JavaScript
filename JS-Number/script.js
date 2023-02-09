let number = 29.560;

////////////////// Number Methods/////////////////

console.log(number.toString());// toString() method returns a number as a string.

console.log(number.toExponential(2));

console.log(number.toFixed(2));// toFixed() method perameter define how many digit will be after floting point

console.log(number.toPrecision(3));// It returns a number written with specified length
console.log(number.toPrecision(2));

console.log(number.valueOf());


/////////////////// Number(), parseFloat(), parseInt() methods
let a = '30.5'
console.log(Number(a));// It returns a number. Here a is string.
console.log(parseFloat(a));// It allows floating point.
console.log(parseInt(a));// Its not allow floating point

