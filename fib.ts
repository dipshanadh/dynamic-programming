/*
  Problem description:

  Write a function `fib(n)` that takes in a number as an argument. 
  The function should return the n-th number of the Fibonacci sequence.

  The 1st and 2nd number of the sequence is 1.
  To generate the next number of the sequence, we sum the previous two.
*/

const fib = (n: number, memo: Record<number, number> = {}): number => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

  return memo[n];
};

console.log(fib(3));
console.log(fib(9));
console.log(fib(27));
console.log(fib(81));
