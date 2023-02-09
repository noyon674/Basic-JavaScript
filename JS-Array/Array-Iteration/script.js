let number = [2,39,14,25,15,17,35, 29, 34, 12];

////////////////////// JavaScript Array Iteration ///////////////////////

//// forEach() method:
number.forEach(function(value, index, array){
    console.log(value);// It gives every single element
});


//// map() method:
let a = number.map(function(value, index, array){
    return value * 2;
});
console.log(a);// It is used for do something using the values


//// filter() method:
let b = number.filter(function(a, b, c){
    return a>10;
});
console.log(b);// It is used for Filtering


//// reduce() method:
let c = number.reduce(function(total, value, index, array){
    return total+value;
});
console.log(c);// It is used for reducing array & for a single value.



//// every() method:
let d = number.every(function(v, i, a){
    return v > 10;
});
console.log(d);/* every() method checks if all array values pass a test.
It gives a boolean value. Here every value is not greater than 10 that's
 why it gives 'false' */



 let p = number.some(function(v, i, a){
    return v < 10;
 });
 console.log(p);/* some() method checks if any array values pass a test.
 It gives a boolean value. Here we have 2 & its pass the test. that's why
 it gives 'true' */



///////// find() method:
 let z =number.find(function(a){
    return a>10;
 });
 console.log(z);// If it passes the test. then it gives a first element according to the test.



 //////////// create an array from a string
 let name = 'noyon sarker';
 console.log(Array.from(name));
 console.log(Array.from('Bangladesh'));
