// Creating an object
let Person = {
    firstName: 'Noyon',
    lastName: 'Sarker',
    age: 23,
    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
};

//print object
console.log(Person);

//print specific property of an object
console.log(Person.firstName);
console.log(Person.fullName());

//Changing value of property
Person['firstName'] = 'Farzana'; // Bracket Notation
Person.lastName = ' Purna'; // Dot Notation

// print after changing
console.log(Person.fullName());


