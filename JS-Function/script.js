// Function Expressions
const add = function(a, b){
    return a+b;
}
console.log(add(10, 20));


// Using Function keyword
function sub(a, b){
    return a-b;
}
console.log(sub(20, 5));


// Self invoking Function
(function (){
    console.log('My name is Noyon Sarker.')
} ());


// Arrow Function
///First
const x = (a, b)=>{
    return a*b;
};
console.log(x(5, 3));
/// Second
const y = (m, n)=> m/n;
console.log(y(20, 2));


