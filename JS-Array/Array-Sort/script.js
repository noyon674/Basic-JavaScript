let number = [2,4,6,0,19,30,50,2,3];
let cars = ['Tesla', 'Volvo', 'BMW', 'Honda', 'Audi', 'Toyota'];

/////////////////////////// String Array Sorting
cars.sort();
console.log(cars);// Ascending order
cars.reverse();
console.log(cars);// Descending order


//////////////////////////// Numeric Array Sorting
//// Ascending order
number.sort(function(a,b){
    return a-b;
});
console.log(number);

//// Descending order
number.sort(function(a,b){
    return b-a;
});
console.log(number);

/*
The process of numeric Array:
If function returns negative value, then 'a' is sorted before 'b'.
If function returns positive value, then 'b' is sorted before 'a'
*/



/*
Find the 'Minimum || Maximum' value from an Array.
There are two way:
1. First sort an array then find.
2. Apply Methods
*/

console.log(Math.min.apply(null, number));// It gives a minimum value from an array
console.log(Math.max.apply(null, number));// It gives a maximum value from an array

//////////// person is an array. It stored objects
////////////// Objects Array Sorting
let person = [
    {
        name: 'Noyon',
        age: 32
    },
    {
        name: 'Purna',
        age: 23
    },
    {
        name: 'Bipul',
        age: 27
    }
];

///////////////// Sorting by it's 'Name' order /////////////////////////
person.sort(function(a,b){
    let x = a.name;
    let y = b.name;
/////// Ascending order
    if(x<y) {return -1}
    if(x>y) {return 01}
});
console.log(person);

person.sort(function(a,b){
    let x = a.name;
    let y = b.name;
/////// Descending order
    if(x>y) {return -1}
    if(x<y) {return 01}
});
console.log(person);



///////////////// Sorting by it's 'Age' order /////////////////////////
person.sort(function(a,b){
///////  Ascending order 
    return a.age - b.age;
});
console.log(person);

person.sort(function(a,b){
    ///////  Descending order 
        return b.age - a.age;
    });
    console.log(person);
