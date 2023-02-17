//////////////// Creating Car Class
class Car {
    constructor(name, year){
        this.name = name;
        this.year = year
    }
    start(){
        console.log('Car is start');
    }
    Off(){
        console.log('Car is off');
    }
}

let car1 = new Car('Toyota', 2015);
let car2 = new Car('Hunda', 2020);
console.log(car1);
car1.start();
console.log(car2.name)

///////////////////// Inheritance
class Bike{
    constructor(year){
        this.Year = year;
    }
}

class Suzuki extends Bike{
    constructor(name, year){
        super(year);
        this.name = name;
    }
    show(){
        console.log(this.name+" "+this.Year);
    }
}

let S1 = new Suzuki('MonoTon', 2022);
S1.show();

/*/////////////////////////////////////////////////////////
Getter & Setter are not use like method. Its use like attribute
/////////////////////////////////////////////////////////*/
class Fruit{
    constructor(name){
        this.fruitName = name;
    }
    get getname(){
        console.log(this.fruitName);
    }
    set setname(x){
        this.fruitName = x;
    }
};

let f = new Fruit('Apple');
f.getname
f.setname = 'Mango';
f.getname

/*/////////////////////////////////////////////////////////
We can use function as like a constructor
/////////////////////////////////////////////////////////*/

//we create function but we can use as a constractor
function Student(name, age, roll){
    this.name = name;
    this.age = age;
    this.roll = roll;
    this.Detail = this.name+" "+this.age+" "+this.roll;
}

let s1 = new Student('Noyon', 23, 674);
let s2 = new Student('Purna', 22, 4327);
console.log(s1.Detail);
console.log(s2.Detail)