//Write code that defines a class of Car with a constructor
//that takes the following properties: make, model, and year.

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  //Add a method called getDescription to the Car prototype,
  //which returns a string containing information about the car.

  getDescription() {
    return `This is a ${this.year} ${this.make} ${this.model}.`;
  }
}

const myCar = new Car("Toyota", "Camry", 2022);
console.log(myCar.getDescription());

//Define the ElectricCar function as a subclass of Car. Include
//an additional property called range that represents the range of
//the electric car in miles.

class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }

  getDescription() {
    return `${super.getDescription()} It has a range of ${this.range} miles.`;
  }
}

//Create an instance of ElectricCar with the make "Tesla", model
//"Model S", year 2019, and range 300, and the getDescription method is called
//on the instance. The output will be a string containing
//the make, model, year, and range of the electric car.

const myElectricCar = new ElectricCar("Tesla", "Model S", 2019, 300);
console.log(myElectricCar.getDescription());
