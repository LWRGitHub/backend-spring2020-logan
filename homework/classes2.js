class Vehicle {
    constructor(manufacturer, color, fuelType, fuelCapacityGallons, mpg, topSpeedMPH, seats) {
        // super calls the parent's constructor when we build a car object.
        super(manufacturer, color, topSpeedMPH);
        this.seats = seats;
        this.fuelType = fuelType;
        this.maxTankGallons = fuelCapacityGallons;
        this.currentTankGallons = fuelCapacityGallons / 2;
        this.model = model;
        this.mpg = mpg;
    }
}

// Fill out a "functional" airplane class and create 2 Airplane object with methods on them being used.
class Airplane extends Vehicle {
    constructor(manufacturer, model, color, fuelType, fuelCapacityGallons, mpg, topSpeedMPH, seats, model, engineCount, maxCapacityLB, fuelEconomy) {
        super(manufacturer, model, color, fuelType, fuelCapacityGallons, mpg, topSpeedMPH, seats);
        this.engineCount = engineCount;
        this.maxCapacityLB = maxCapacityLB;
        this.fuelEconomy = fuelEconomy;
    }
}

let air1 = new Airplane("Big Jet", "C4", "White", "gasoline", 194.7, 1000, 2000, 300, 1000, "N963RD4BJ", 4, 9000, "The Best");

console.log(air1);