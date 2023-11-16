/*
  Write a function that takes in a targetSum and an array of numbers as arguments.
  
  The function should return a boolean indicating whether or not it
  is possible to generate the targetSum using numbers from the array.
 
  You may use an element Of the array as many times as needed.
  You may assume that all input numbers are nonnegative.
*/

const canSum = (
  targetSum: number,
  numbers: Array<number>,
  memo: Record<number, boolean> = {}
) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (const num of numbers) {
    const remainder = targetSum - num;

    if (canSum(remainder, numbers, memo)) {
      memo[targetSum] = true;

      return true;
    }
  }

  memo[targetSum] = false;

  return false;
};

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
