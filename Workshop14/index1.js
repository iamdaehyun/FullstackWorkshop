const numbers = [1, 2, 3, 4, 5, 6, 7];
const oddnumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddnumbers.push(numbers[i]);
  }
}

const result =
  oddnumbers.length > 1 ? oddnumbers : oddnumbers[0] ? [oddnumbers[0]] : [];

console.log(result);
