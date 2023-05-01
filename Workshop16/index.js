//customer objects

const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

function calculateTotal(customer) {
  let refillTotal = customer.pricePerRefill * customer.refills;
  let subscriptionDiscount = customer.subscription ? refillTotal * 0.25 : 0;
  let couponDiscount = customer.coupon ? 10 : 0;
  let finalAmount = refillTotal - subscriptionDiscount - couponDiscount;
  return `Your grand total is $${finalAmount}.`;
}

console.log(calculateTotal(timmy));
console.log(calculateTotal(sarah));
console.log(calculateTotal(rocky));
