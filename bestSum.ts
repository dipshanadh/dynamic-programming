/*
  Write a function that takes in a targetSum and an array of numbers as arguments.

  The function should return an araay containing the shortest combination of numbers that add up to te exactly the targetSum.

  If there is a tie for the shortest combination, you may return any one of the shortest.
*/

const bestSum = (
  targetSum: number,
  numbers: number[],
  memo: Record<number, number[] | null> = {}
): number[] | null => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let currentSum: number[] | null = null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = bestSum(remainder, numbers, memo);

    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];

      if (currentSum === null || remainderResult.length < currentSum.length) {
        currentSum = memo[targetSum];
      }
    }
  }

  return currentSum;
};

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
