const Vehicle = require("./Vehicle.js");

class Car extends Vehicle.vehicle {
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