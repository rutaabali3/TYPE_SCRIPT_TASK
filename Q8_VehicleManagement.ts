class Vehicle {
  constructor(
    public vehicleNumber: string,
    public brand: string,
    public model: string,
    public fuelType: string
  ) {}

  displayDetails(): void {
    console.log(`Vehicle Number: ${this.vehicleNumber}`);
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
    console.log(`Fuel Type: ${this.fuelType}`);
  }

  startEngine(): void {
    console.log(`${this.brand} ${this.model} engine started.`);
  }

  stopEngine(): void {
    console.log(`${this.brand} ${this.model} engine stopped.`);
  }
}

const vehicles: Vehicle[] = [
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
