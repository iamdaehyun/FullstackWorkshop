//import coffee_data.js here
const coffeeMenu = require("./coffee_data");

//Print an array of all the drinks on the menu.
const printName = (drinks) => {
  return drinks.name;
};
console.log(coffeeMenu.map(printName));

//Print an array of drinks that cost 5 and under.
const underFive = (drinks) => {
  return drinks.price <= 5;
};
const drinksUnderFive = coffeeMenu.filter(underFive);
console.log(drinksUnderFive);

//Print an array of drinks that are priced at an even number.
const evenNumber = (drinks) => {
  return drinks.price % 2;
};
const drinksEvenNumber = coffeeMenu.filter(evenNumber);
console.log(drinksEvenNumber);

//Print the total if you were to order one of every drink.
//const sumTotalPrice = coffeeMenu.price.reduce
//    (accumulator, currentValue) => accumulator + currentValue,
//console.log(sumTotalPrice);

//Print an array with all the drinks that are seasonal.
const seasonalMenu = (drinks) => {
  if ((drinks.seasonal = true));
};
const seasonalMenuArray = coffeeMenu.filter(seasonalMenu);
console.log(seasonalMenuArray);

//Print all the seasonal drinks with the words "with imported beans"
//after the item name.
