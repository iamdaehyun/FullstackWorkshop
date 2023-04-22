// if the value is truthy, print true;
// if the value is falsy, print these;
// "The boolean value false is falsy";
// "The null value is falsy";
// "undefined is falsy";
// "The number 0 is falsy (the only falsy number)";
// "The empty string is falsy (the only falsy string)";

const myvalue = "I am a string";
const boolean = false;
const value2 = null;
const value3 = undefined;
const value4 = 0;
const value5 = "";

if (myvalue === "I am a string") {
  console.log("true");
}
if (boolean === false) {
  console.log("The boolean value false is falsy");
}
if (value2 === null) {
  console.log("The null value is falsy");
}
if (value3 === undefined) {
  console.log("undefined is falsy");
}
if (value4 === 0) {
  console.log("The number 0 is false(the only falsy number");
}
if (value5 === "") {
  console.log("The empty string is falsy(the only falsy string");
}
