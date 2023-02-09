let cars = ['Volvo', 'BMW', 'Toyota', 'Honda'];

////////////////// Array Methods /////////////////////
console.log(cars);
console.log(typeof cars.toString());// toString() method convert arry to string


///////////////////// push() method add new element to an array at the end.
cars.push('Tesla');
cars.push('Nissan');
console.log(cars);


///////////////////// pop() method delete element from an array at the end.
cars.pop();
console.log(cars);


///////////////////// unshift() method add new element to an array at the start.
cars.unshift('Audi');
cars.unshift('Suzuki');
console.log(cars);


//////////////////// shift() method delete element from an array at the start.
cars.shift();
console.log(cars);


//////////////////// we can delete a specific index's value from an array
let number = [3,5,7,3,4,9,0];
delete number[2];// Here the value of index 2 will remove
console.log(number);


///////////////////// join() method also joins an array element into a string
let person = ['Noyon', 'Purna', 'Ope', 'Riz'];
console.log(person.join());
console.log(typeof person.join());
console.log(person.join(':'));// Every element will be joined by ':'. It's like string Joinner.

