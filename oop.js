let Vehicle = function(make, model, year) {
    this.make = make,
    this.model = model,
    this.year = year,
    honk() = function(){
        console.log('beep');
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); 

const Car extends Vehicle = function() {}