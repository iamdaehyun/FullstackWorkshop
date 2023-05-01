// What is a function?
// Functions are blocks of code created to perform a particular task
// comment short cut - Cmd + / or Ctrl + /
/*
Functions are:
- Reusable
- facilitate organization
- building blocks
- used in EVERY programming language
*/
// Creating a function
function nameOfFunction() {
  // code you want to execute
}
console.log(" this is a test");
function sayHello() {
  console.log("Hi Im Gabby");
}
sayHello(); // a function will not run without being called
// Using Parameters
// parameters are labels for incoming values
// they are listed within the parenthesis
// a function can have parameters
// a function can also have as many parameters as you need
function add(x, y) {
  console.log(x + y);
}
function subtract(x, y) {
  console.log(x - y);
}
add(5, 4);
// 5 and 4 are called arguments
// arguments are actual values you are passing into parameters
//what happens if I do this?
subtract(); // prints out NaN = Not A Number
//what happens if I do this?
sayHello("Bruce"); // no error; ignored the parameter
// Another Example
function rectangleArea(length, width) {
  console.log(length * width);
}
function triangleArea(length, height) {
  console.log((length * height) / 2);
}
rectangleArea(4, 7);
triangleArea(3, 8);
// using data types + functions
let myNameIs = "Gabby";
function sayHi(name) {
  console.log("Hi my name is " + name);
}
sayHi(myNameIs); // myNameIs passes "Gabby" to name parameter
function sayHiAgain() {
  // because myNameIs does not exist within the function, it will look outside of it
  console.log("Hi my name is " + myNameIs);
}
sayHiAgain();
// another example using data types + functions
let randomArray = ["blue", 7, false];
// Will this work?
// let randomArray = "hello"
// let randomArray = 2
function printRandom(arr, index) {
  //arr is short for array
  console.log("this is your random value");
  console.log(arr[index]);
  // this is the same as:
  // console.log(randomArray[1])
}
printRandom(randomArray, 1);
// Arrow functions
// making functions simpler; sometimes one line
// Lets turn this into an arrow function
// function sayHello() {
//     console.log("Hi Im Gabby")
// }
const sayHelloArrow = () => console.log("Hi Im Gabby");
// sayHelloArrow()
// arrow function with parameters
const sayHiArrow = (name) => console.log("Hi, I'm " + name);
sayHiArrow("Bruce");
const car = {
  type: "Honda",
  "4-wheels": true,
  go: () => console.log("vroom vroom"),
  /* 
    How we learned it in the objects lesson:
    go () {
        console.log("vroom vroom")
    }*/
};
// Return Keyword
console.log(); // --> just a method for printing
// The return keyword DOES not print
// the return keyword allows you to pass data from one section or function to another
function add2(x, y) {
  return x + y;
}
add2(5, 10); // this wont print
console.log(add2(5, 10)); // this will
let sum = add2(10, 10);
console.log(sum);
// BIG RULE - a function stops running after a return is executed
function testReturn() {
  console.log("in the return function");
  return "closing out the function";
  // the code below will not run
  console.log("is this on?");
}
testReturn(); // wont print return statement
console.log(testReturn());
function testReturn2() {
  if (false) {
    // this wont run
    return "this is false";
  }
  if (true) {
    return "this is true";
  }
}
// Return Example Btwn functions
function area(length, width) {
  return length * width;
}
function triangleArea2(length, height) {
  console.log(area(length, height) / 2);
  // we call the area function
  // pass length values
  // pass height value
  // calculate area
  // return to console.log
}
triangleArea2(3, 8);
