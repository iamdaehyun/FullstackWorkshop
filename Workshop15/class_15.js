// what is an object?
// data type that is used to store various
// properties and actions
// objects are created with key:value pairs
//create an object
const fruit_empty = {};
//brackets determine that we have created an object
const fruit = {
  name: "banana",
  color: ["green", "yellow", "brown"],
  inStock: 5,
  inSeason: false,
  type: {
    name: "plantain",
    origin: "Asia",
  },
  "grocery store": "Safeway",
};
//Access Object values - Dot notation
console.log(fruit.name);
console.log(fruit.color[1]);
console.log(fruit.type.origin);
//Access Object values - Bracket notation
console.log(fruit["name"]);
console.log(fruit["color"][1]);
console.log(fruit.type["origin"]);
console.log(fruit["type"]["origin"]);
console.log(fruit["type"].origin);
console.log(fruit["grocery store"]); // a great time to use bracket notation is when they key is a string
let car = {
  color: "blue",
  brand: "Honda",
  trim: "sport",
  start() {
    console.log("Vroom!!!");
  },
  // a method is a function that is attached to an object
};
// run a method
// car.start()
// car['start']()
// add a property
console.log(car);
car.engine = "V8";
car.tires = [true, true, true, false];
console.log(car);
//delete a property
delete car["trim"];
console.log(car);
// for..in loop
for (const property in car) {
  console.log(car[property]);
}
// in this case property is like your i in a regular for loop
// property is a variable, not a key, so it doesnt need to be in quotes
// Two Major methods of Objects
Object.keys(fruit); // this method returns all of an objects keys in an array
Object.values(fruit); // this method returns all of an objects values in an array
console.log(Object.keys(fruit));
console.log(Object.keys(fruit)[3]);
console.log(Object.values(fruit));
console.log(Object.values(fruit)[3]);
