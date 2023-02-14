////////////////////////////////////////// JavaScript Sets: Set is a collection of unique values
const number = new Set([2,3,5,6,7,2,5,7,80,46]);
console.log(number);

console.log(number.size);// return size of unique values
// adding new unique value
number.add(100);
console.log(number);

//delete(): removes an element
number.delete(2);
console.log(number);

// has(): return boolean value if a value exists or not
let check = number.has(100);
console.log(check);

// forEach(value, index, array): It is a iteration mathod
number.forEach(function(v, i, a){
    console.log(v);
});


/*///////////////////////////////////////////////////////////////////////////////////////
Maps: Map hold key-value pairs
///////////////////////////////////////////////////////////////////////////////////////*/
const fruits = new Map([
    ['Apple', 200],
    ['Mango', 500],
    ['Banana', 100]
]);
console.log(fruits);

//// set() method:
fruits.set('Lichi', 150);
console.log(fruits);

//// get() method:
console.log(fruits.get('Lichi'));// returns '150'

//// has() method: return boolean value
console.log(fruits.has('Apple'));// return 'true'
console.log(fruits.has('Lemon'));// return 'false'

//// delete():
fruits.delete('Mango');
console.log(fruits);

//// Map Iteration
fruits.forEach(function(value, key){
    console.log(key+'is: '+value);
});
//////////////////////////////
for(let i of fruits.entries()){
    console.log(i)
}

