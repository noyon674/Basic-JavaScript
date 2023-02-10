//////////////////////// JavaScript Math ///////////////////

//////////// Math Property
console.log(Math.PI);// return 'PI' value
console.log(Math.SQRT2);// return the square root of 2
console.log(Math.LN2);// returns natural logarithm of 2
console.log(Math.LN10);// return natural logarithm of 10
console.log(Math.LOG2E);// return 2 base logarithm of E
console.log(Math.LOG10E);// return 10 base logarithm E


//////////// Math Methods
// round() returns the nearest integer
console.log(Math.round(4.6));// returns 5
console.log(Math.round(4.5));// returns 5
console.log(Math.round(4.4));// returns 4

// ceil() returns the rounded 'UP' to its nearest integer
console.log(Math.ceil(4.6));// returns 5
console.log(Math.ceil(4.5));// returns 5
console.log(Math.ceil(4.4));// returns 5

// floor() returns the rounded 'DOWN' to its nearest integer
console.log(Math.floor(4.6));// returns 4
console.log(Math.floor(4.5));// returns 4
console.log(Math.floor(4.4));// returns 4

// trunc(x) returns the integer part of 'x'
console.log(Math.trunc(6.7));// return 6
console.log(Math.trunc(7.5));// returns 7
console.log(Math.trunc(8.4));// returns 8


console.log(Math.pow(4,5));// returns of 4 to the power of 5
console.log(Math.sqrt(64));// returns the square root of 64
console.log(Math.abs(-30));// returns the positive value of -30
console.log(Math.sign(90));// returns angular value of 'sign'
console.log(Math.cos(0));// return angular value of 'cos'
console.log(Math.max(2,4,7,2,5,46,2));// returns maximum value
console.log(Math.min(2,4,7,2,5,46,2));// returns minimum value


//////////////// random() method returns random value '(0> value <1)' every time. 
console.log(Math.random());
for(let i=1; i<=10; i++){
    console.log('Value: '+Math.random());
}


///////////// Log() methods
console.log(Math.log(20));// log(x) method returns the natural logarithm of 'x'
console.log(Math.log10(20));// return 10 base logaritm value of 20
console.log(Math.log2(20));// return 2 base logaritm value of 20

/*
Notice: Math.E & Math.log() are twins
*/


//////////////////// Return random integer from btween min & max value
function getValue(min, max){
    return Math.floor(Math.random()*(max-min));
}
console.log(getValue(1,10));
