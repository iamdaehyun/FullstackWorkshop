const concatOdds = (arr1, arr2) => {
  //combine both arrey
  const bothArr = arr1.concat(arr2);
  console.log(bothArr);
  //get odd numbers from combined array
  const oddNumber = bothArr.filter((num) => num % 2 !== 0);
  console.log(oddNumber);
  //order the odd numbers in ascending order
  return oddNumber.sort((a, b) => a - b);
};

const arr1 = [5, 8, 11];
const arr2 = [7, 2, 5, 6, 3, 17, -3];
console.log(concatOdds);
