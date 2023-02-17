//// callback: I will call you later

// function sequance contron
//// use one function for one operation
function display(x){
    console.log(x);
}
function sum(a, b){
    return a+b;
}
let result = sum(4,5);
display(result);

////////////////////// callBack

function Display(some){
    console.log(some);
}
function calculation(a, b, callback){
    let sum = a+b;
    if(callback){
        Display(sum);
    }
}
calculation(10,5, Display);

///////////// without name function called anonimus function
function Add(x, y, callback){
    let sum = x + y;
    callback(sum);
    
}
Add(20, 50, function(result){
    console.log(result)
});

/*/////////////////////////////////////////////////////////////////////////////////////
Asynchronous function: setTimeOut(), setInterval()
////////////////////////////////////////////////////////////////////////////////////*/
function result1(){
    console.log('1 is display');
}
function result2(){
    console.log('2 is display');
}
function result3(){
    console.log('3 is display');
}
function result4(){
    console.log('4 is display');
}
/*
setTimeOut function run just one time
*/
result1(); // synchronous function no time taken
setTimeout(result2, 2000);// asynchronous function time taken 2s
result3();// synchronous function no time taken
setTimeout(result4, 1000);// asynchronous function time taken 1s

/*
setInterval function run continueously 
*/
setInterval(function(){
    console.log('Set Interval running');
}, 1000);
