const budget = 50;
const price1 = 20;
const price2 = 25;

function sumofGifts(gift1, gift2) {
  return gift1 + gift2;
}

const giftTotal = sumofGifts(price1, price2);

function addTax(giftTotal) {
  return giftTotal + giftTotal * 0.08;
}

const giftsWithTax = addTax(giftTotal);

function holidayShopping(budget, giftsWithTax) {
  return budget >= giftsWithTax;
}

console.log(holidayShopping(budget, giftsWithTax));
