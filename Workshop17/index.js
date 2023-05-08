//import coffee_data.js here
const coffeeMenu = require("./coffee_data");

//Print an array of all the drinks on the menu.
const drinkNames = coffeeMenu.map((drink) => drink.name);
console.log(drinkNames);

//Print an array of drinks that cost 5 and under.
const underFive = coffeeMenu.filter((drink) => drink.price <= 5);
console.log(underFive);

//Print an array of drinks that are priced at an even number.
const evenPrice = coffeeMenu.filter((drink) => drink.price % 2 === 0);
console.log(evenPrice);

//Print the total if you were to order one of every drink.
const totalPrice = coffeeMenu.reduce((total, drink) => total + drink.price, 0);
console.log("Total price if you were to order one of every drink:", totalPrice);

//Print an array with all the drinks that are seasonal.
const seasonalDrinks = coffeeMenu.filter((drink) => drink.seasonal);
console.log(seasonalDrinks);

//Print all the seasonal drinks with the words "with imported beans"
//after the item name.

const seasonalDrinksWithImportedBeans = coffeeMenu
  .filter((drink) => drink.seasonal)
  .map((drink) => drink.name + " with imported beans");

console.log(seasonalDrinksWithImportedBeans);
