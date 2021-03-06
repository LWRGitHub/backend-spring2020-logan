
class Vehicle {
    constructor(manufacturer, color, topSpeedMPH) {
        this.topSpeedMPH = topSpeedMPH;
        this.color = color;
        this.manufacturer = manufacturer;

    }
}

class Car extends Vehicle {
    constructor(manufacturer, model, color, fuelType, fuelCapacityGallons, mpg, topSpeedMPH, seats) {

        super(manufacturer, color, topSpeedMPH);
        this.seats = seats;
        this.fuelType = fuelType;
        this.maxTankGallons = fuelCapacityGallons;
        this.currentTankGallons = fuelCapacityGallons / 2;
        this.license = null;
        this.model = model;
        this.mpg = mpg;
    }

    setLicense(licenseNumber) {
        this.license = licenseNumber;
        console.log(`The license of the ${this.manufacturer} ${this.model} was updated to ${licenseNumber}`);
    }

    getCurrentFuel() {
        console.log(`${this.manufacturer} ${this.model} has a total of ${this.currentTankGallons} gallons of gas left.`);

        return this.currentTankGallons;
    }

    setCurentFuel(fuelValue){
        this.currentTankGallons = fuelValue;
    }

    refuel(gallons) {
        let availableSpace = this.maxTankGallons - this.currentTankGallons;

        if (gallons > availableSpace) {
            console.log("There is not enough room in the gas tank to fill it with that many gallons!");
        } else {
            this.currentTankGallons = this.currentTankGallons + gallons;

            console.log(`The gas tank now has ${this.currentTankGallons} gallons of gas.`);
        } 
    }

    range() {
        console.log(`The ${this.manufacturer} ${this.model} can go a total of ${(this.maxTankGallons * this.mpg)} miles before refueling.`);
    }

    travel(distanceToTravelMiles) {
        let gallonsToBurn = distanceToTravelMiles / this.mpg;

        if (gallonsToBurn <= this.currentTankGallons) {
            console.log(`${this.manufacturer} ${this.model} has traveled ${distanceToTravelMiles} miles.`);

            this.currentTankGallons = this.currentTankGallons - gallonsToBurn;
        } else {
            console.log(`${this.manufacturer} ${this.model} cannot go that far! It doesn't have enough fuel.`);
        }
    }

    //Homework: Allow me to customize how many gallons I want to transfer. Currently I only transfer 1 gallon as it is written within the code.
    refuelUsing(car, num){

        

            if(car.getCurrentFuel() > num){
                console.log(`${this.manufacturer} ${this.model} already has fuel, we don't need to take ${car.manufacturer} ${car.model}'s fuel!`);
            } else {
                this.setLicense(1);
                car.setCurentFuel(car.getCurrentFuel() - 1);
                console.log(`${car.manufacturer} ${car.model} only has ${car.getCurrentFuel()} please ask for a number that is less than ${car.getCurrentFuel()}.`)
            }
        
    }

}

class ElectricCar extends Vehicle {
    constructor() {
        super();
        this.seats = null;
        this.capacityKWH = null;
        this.vin = null;
        this.brand = null;
        this.MPKW = null;
    }
}

class Airplane extends Vehicle {
    constructor(manufacturer, model, color, topSpeedMPH, seats, model, engineCount, maxCapacityLB, fuelEconomy) {
        super(manufacturer, model, color, topSpeedMPH);
        this.engineCount = engineCount;
        this.maxCapacityLB = maxCapacityLB;
        this.fuelEconomy = fuelEconomy;
    }
}

let air1 = new Airplane("Big Jet", "C4", "White", "gasoline", 194.7, 1000, 2000, 300, 1000, "N963RD4BJ", 4, 9000, "The Best");

console.log(air1);

let firstCar = new Car("Honda", "Accord", "black", "gasoline", 14.8, 25, 155, 5);


firstCar.setLicense("8HEX859");

console.log(firstCar);

firstCar.range();

firstCar.travel(2);

firstCar.travel(200);
firstCar.getCurrentFuel();
firstCar.refuel(10);
firstCar.refuel(5);
firstCar.travel(100);
firstCar.getCurrentFuel();


let secondCar = new Car("BMW", "328i", "blue", "gasoline", 15, 20, 110, 4);


console.log(secondCar);

secondCar.travel(50);
secondCar.getCurrentFuel();


secondCar.setCurentFuel(0);

secondCar.refuelUsing(firstCar);

firstCar.setCurentFuel();
secondCar.getCurrentFuel();




