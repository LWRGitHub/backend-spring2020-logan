class Airplane extends Vehicle {
    constructor(manufacturer, model, color, topSpeedMPH, seats, model, engineCount, maxCapacityLB, fuelEconomy) {
        super(manufacturer, model, color, topSpeedMPH);
        this.engineCount = engineCount;
        this.maxCapacityLB = maxCapacityLB;
        this.fuelEconomy = fuelEconomy;
    }
}
