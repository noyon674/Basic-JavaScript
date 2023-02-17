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