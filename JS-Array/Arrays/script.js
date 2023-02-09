////////// Creating an Array
let cars = ['Saab', 'Volvo', 'BMW', 'Tesla', 'Toyota', 'Honda']; // This array storing strings
let number = [4,6,3,7,9,0];// This array storing numbers

////////////// Person Array storing Objects
let person = [
    {
        name: 'noyon',
        age: 23
    },
    {
        name: 'Purna',
        age: 22
    }
]

console.log(cars);// print array
console.log(cars.concat(number));// Here two arrays are joining into another array.
console.log(cars.length);// It returns length of array


///////////////////// Array accessing
console.log(cars[2]);// It returns the value of index number '2';


///////////////////// isArray() & instanceof() methods returns boolean value
console.log(Array.isArray(number));
console.log(number instanceof Array);


//In one array can store string, number & object in one Array
let car = ['Saab', 'Volvo', 'BMW', 'Tesla', 'Toyota', 'Honda', 4, 5, 37, 78,{name: 'Noyon', age: 23}];

