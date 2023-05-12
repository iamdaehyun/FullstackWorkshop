// Unit Test
// A function called "multiplication" that returns the product of the two input numbers.

// make a code for multiplication
function multiplication(a, b) {
  return a * b;
}

//test the "multiplication" function
//case 1
//expect(multiplication(2, 3)).toBe(6);
console.log(multiplication(2, 3));

//case 2
//expect(multiplication(5, 0)).toBe(0);
console.log(multiplication(5, 0));

//case 3
//expect(multiplacation("a",1)),toBe(error);
console.log(multiplication("a", 1));

//A function called "concatOdds" takes two arrays of integers as arguments.
//It should return a single array that only contains the odd numbers,
//in ascending order, from both of the arrays.

//make a code for concatOdds
function concatOdds(arr1, arr2) {
  const singleArray = arr1.concat(arr2);
  const oddNumber = singleArray.filter((num) => num % 2 !== 0);
  return oddNumber.sort((a, b) => a - b);
}

//test the concatOdds
//expect(concatOdds([3, 2, 1], [9,1,1,1,4,15,-1])).toBe([-1,1,3,9,15])
console.log(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]));

//What should happen with unexpected inputs?
//What kinds of unexpected inputs should we worry about?
//expect(concatOdds(0, [1,2,3])).toBe(error)
//console.log(concatOdds(0, [1, 2, 3]));

//expect(concatOdds([0,213], 0)).toBe([213])
console.log(concatOdds([0, 213], 0));

//What should happen when there are multiples of the same odd number in the arrays?
//expect(concatOdds([1,3,5,5,5,5], [100,11,23,14, 11, 11, 11, 13]).
//toBe([1,3,5,5,5,5,11,13])
console.log(concatOdds([1, 3, 5, 5, 5, 5], [100, 11, 23, 14, 11, 11, 11, 13]));

// Functional Tests: A shopping cart that allows a user to check out as a guest (without an account),
// or as a logged-in user. They should be allowed to do either,
// but should be asked if they want to create an account or log in
// if they check out as a guest.

// What should happen if the cart is empty?
// Empty cart:
// 1. the user should be notified that their cart is empty and prompted to add items
// before proceeding to checkout.
// 2. Checkout process be progress

// What needs to be shown to the user at each step of check out?
//1. Guest will get a notification if they want to create an account or log in.
//2. Ask the shipping address, contact number, payment method, etc...
//   if it is not provided by the user.
//3. Review the order summary and confirm the purchase

// What behaviors of this feature does the prompt miss or gloss over?
// The prompt does not a detail checkout process.
