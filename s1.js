Car.prototype.getCar = function() {
    console.log('Hello');

}

Car.prototype = Vehicle.prototype;
const car = new Car();
car.getCar();