//Simple JavaScript Objects

// Formatiing for an object with maltiple properties.
let myObject = {
    "name": "Ed",
    address: "123 Some City, CA, 99999",
    "salary": 170000, 
};

// acceptabe format for an object with a single property.
let myOtherObject = {"isTrue": true};


let employee1 = {
    "address": "some place",
    "salary": 800000
}


//Classes, "fancy" objects.

class Car {
    constructor(age, valueOfMileage, valueOfColor, valueOfHP){
        this.age = age; 
        this.mileage = valueOfMileage;
        this.color = valueOfColor;
        this.hp = valueOfHP
    }

    isWorking(){
        console.log("the car is working and currently is " + this.age + " years old.")
    }
}

let someNumber = 190;

let myFirstCar = new Car(50, 60000, "white", 25); 
let mySecondCar = new Car(someNumber);
let soldCar = new Car(12);

console.log(Car.version);

// If a function belongs to a class, its called a method
Math.random()

// let myFirstCar = {};

console.log(myFirstCar, mySecondCar, soldCar);

