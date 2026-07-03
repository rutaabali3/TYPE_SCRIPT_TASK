"use strict";
class Vehicle {
    vehicleNumber;
    brand;
    model;
    fuelType;
    constructor(vehicleNumber, brand, model, fuelType) {
        this.vehicleNumber = vehicleNumber;
        this.brand = brand;
        this.model = model;
        this.fuelType = fuelType;
    }
    displayDetails() {
        console.log(`Vehicle Number: ${this.vehicleNumber}`);
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Fuel Type: ${this.fuelType}`);
    }
    startEngine() {
        console.log(`${this.brand} ${this.model} engine started.`);
    }
    stopEngine() {
        console.log(`${this.brand} ${this.model} engine stopped.`);
    }
}
const vehicles = [
    new Vehicle("ABC-123", "Toyota", "Corolla", "Petrol"),
    new Vehicle("XYZ-456", "Honda", "Civic", "Petrol"),
    new Vehicle("EV-789", "Hyundai", "Ioniq", "Electric"),
];
vehicles.forEach((vehicle, index) => {
    console.log(`Vehicle ${index + 1}:`);
    vehicle.displayDetails();
    vehicle.startEngine();
    vehicle.stopEngine();
    console.log("----------------------");
});
