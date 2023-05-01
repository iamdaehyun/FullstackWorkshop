//copy and paste customer objects

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

//function calculate total
function calculateTotal(customer) {
  //refill total is pricePerRefill x refills
  let refillTotal = customer.pricePerRefill * customer.refills;
  //if subscription true, then will get 25% off.
  let subscriptionDiscount = customer.subscription ? refillTotal * 0.25 : 0;
  //if coupon is true, then $10 discount.
  let couponDiscount = customer.coupon ? 10 : 0;
  //the final amount will be refill total - subscription - coupon
  let finalAmount = refillTotal - subscriptionDiscount - couponDiscount;
  return `Your grand total is $${finalAmount}.`;
}

//total calculation of timmy, sarah, rocky
console.log(calculateTotal(timmy));
console.log(calculateTotal(sarah));
console.log(calculateTotal(rocky));
