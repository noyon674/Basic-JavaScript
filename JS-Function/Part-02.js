///////////////// Return number of arguments
function add(a,b,c){
    return arguments.length;
};

console.log(add(4,6,3));

///////////////////// Perameter defult value
function sum(x, y){
    if(y == undefined){
        y = 10;
    }
    return x+y;
};
console.log(sum(10,20));
console.log(sum(5, ));

/////////////////////// rest perameter
function multiple(...args){
    let result=1;
    for(let i of args){
        result *= i;
    }
    return result;
};

let x = multiple(2,4,6,8);
console.log(x);

/*////////////////////////////////
call() method: call method copy the all attribute from another function
////////////////////////////////*/

let person = {
    fullName: function(){
        return this.fName+" "+this.lName;
    },
    detail: function(city){
        return this.fName+" "+this.lName+" "+city;
    }
}
let person1 = {
    fName : "Noyon",
    lName : "Sarker"

}
console.log(person.fullName.call(person1));
console.log(person.detail.call(person1, "Bangladesh"));

/*//////////////////////////////////////////
apply() method: Apply method simillar to call method
Applay method take arguments as a array
///////////////////////////////////////////*/
