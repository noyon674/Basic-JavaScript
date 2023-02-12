///////////////// random() method:

for(let i=0; i<5; i++){
    console.log(Math.random())
} // This loop gives random value at 5 times. range of random value is '0 > x < 1'

let a = Math.random() // It provides random value btween '0 > x < 1'
console.log(Math.floor(a)) // It provide '0'. floor() method return down nearest integer value.

////////////// print random integer value btween 0 to 9
console.log(Math.floor(Math.random()*10)); // our bigest number will be 9.9, But we use floor mathod(). That's why our max value will be print 9.


//////////////// print random value btween min(include) & max(exclude)
a = 5;// Min
b = 10;// max
console.log(Math.floor(Math.random()*(b-a))+a)


//////////////// print random value btween min(included) & max(included)
console.log(Math.floor(Math.random()*(b-a+1)+a))