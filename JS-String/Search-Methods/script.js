let txt = 'Hi, my name is Noyon Sarker. Hi Hi hi';

////////////////////// JavaScript String Search /////////////////

/////////////// indexOf() method return the index position.
console.log(txt.indexOf('m'));// it returns first index of 'm'.


/////////////// lastIndexOf() method return the last index position.
console.log(txt.lastIndexOf('m'));// It return the last index of 'm'.


//////////////// search() method searches a string from a string and it's return the index position.
console.log(txt.search('m'));
console.log(txt.search('is'));


//////////////// match(), matchAll() methods return an array
console.log(txt.match('i'));// First 'i' 
console.log(txt.match(/i/g));// All 'i' in the string. '/g' flag (global)
console.log(txt.match('Hi'));// First 'Hi'
console.log(txt.match(/Hi/g));// All 'Hi' in the string
console.log(txt.match(/hi/gi));// All 'Hi/hi'. There is no 'CASE-SENSITIVE'. /g(global), /i(insensitive)


//////////////// includes() method is CASE SENSITIVE. It returns true/false if a string/value contains string.
console.log(txt.includes('is'));// return true
console.log(txt.includes('Is'));// return false


/////////////// startsWith() & endsWith() methods return true/ false if it mathch. It also 'CASE-SENSITIVE'
console.log(txt.startsWith('Hi'));// return true
console.log(txt.startsWith('hi'));// return false

console.log(txt.endsWith('Hi'));// return false
console.log(txt.endsWith('hi'));// return true





