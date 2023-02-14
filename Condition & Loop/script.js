////////////////// Conditional Statement
/*
If-Else Condition
*/
let a = 81;
if(a >= 80){
    console.log('You got A+');
}
else if(a >= 70){
    console.log('You got A');
}
else if(a >= 50){
    console.log('You just pass the exam.');
}
else{
    console.log('You are not eligible to next semester.');
}


/*
Switch-Case
*/
let  gpa = 5;

if(gpa <= 5){
    switch(gpa){
        case 1:
        case 2:
            console.log('Need Improvment.');
            break;
        case 3:
            console.log('Satisfactory.');
            break;
        case 4:
            console.log('Good.');
            break;
        case 5:
            console.log('Very Good.');
            break;
        default:
            console.log('You are not Eligible.')
    }
}
else{
    console.log('Range over.')
}


/*
Ternary operation
*/

let num = 23;
let result = (num%2 == 0)? 'Even number.' : 'Odd number.';
console.log(result);


/*//////////////////////////////////////////////////////////////////////////////////////////////////////////
Loops
////////////////////////////////////////////////////////////////////////////////////////////////////////*/

// For Loop
for(let i=0; i<=10; i++){
    console.log(i);
}

//// For-In Loop: loops through the properties of an object
const person = {
    name: 'Noyon',
    age: 23
};

for(let i in person){
    console.log(i);
}

//// For-Of Loop: loops through the values of an iterable object
let cars = ['BMW', 'Toyoya', 'Hunda'];
for (const j of cars) {
    console.log(j);
}

//// While Loop:
let counter = 10;
while(counter != 0){
    console.log(counter);
    counter--;
}

//// Do While Loop:

let x = 0;
do{
    console.log('Hello World.');
}
while(x > 0);

/*/////////////////////////////////////////////////////////////////////////////////////////////////
Break & Continue
///////////////////////////////////////////////////////////////////////////////////////////////*/

for(let x=0; x<10; x++){  // Break
    if(x < 5){
        console.log(x);
    }
    else{
       break; 
    }
}

for(let x=0; x<10; x++){
    if(x < 5){
        continue;
    }
    else{
        console.log('Hi: '+x);
    }
}


