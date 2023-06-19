class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep.";
    }
    toString() {
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}


let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); 
myFirstVehicle.toString();

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
myFirstCar.numWheels;  // 4

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!";
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels;  // 2


class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    
    add(newVehicle){
        if(this.vehicles.size < this.capacity){
            if((newVehicle instanceof Vehicle)){
                this.vehicles.push(newVehicle);
                console.log("Vehicle added!")
            }else{
                console.log("Only vehicles are allowed in here!");
            }
        }else{
            console.log("Sorry, we're full!");
        }
    }
}