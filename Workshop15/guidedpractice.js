// I ate cheeseburger $12
// Jonah had steak $20
// Amy had soup $8
// Mateo had mac&cheese $14
// Cheyenne had soup&salad $16

const dinner = {
  Cheeseburger: 12,
  Steak: 20,
  Soup: 8,
  macandcheese: 14,
  soupandsalad: 16,
};

console.log(Object.keys(dinner));
console.log(Object.values(dinner));

//let totalcost = 0;
//for (const individualmeal in dinner) {
//  totalcost += dinner[individualmeal];
// }
// console.log(totalcost);

const prices = Object.values(dinner);
let totalCost = 0;

for (let i = 0; i < prices.length; i++) {
  totalCost += prices[i];
}

console.log(totalCost);
