/*
  Write a function `countConstructs(target, wordBank)` that accepts a target string and an array of strings.

  The function should return the number of ways that the `target` can be Constructsed by concatenating elements of the `wordBank` array.

  You may reuse the elements of `wordBank` as many times as needed.
*/

const countConstructs = (
  target: string,
  wordBank: string[],
  memo: Record<string, number> = {}
): number => {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let count: number = 0;

  for (const word of wordBank) {
    if (target.startsWith(word)) {
      const waysForSmall = countConstructs(
        target.slice(word.length),
        wordBank,
        memo
      );

      count += waysForSmall;
    }
  }

  memo[target] = count;

  return memo[target];
};

console.log(countConstructs("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(countConstructs("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1

console.log(
  countConstructs(" skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]) // 0
);
console.log(
  countConstructs("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]) // 4
);
console.log(
  countConstructs("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e,",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ]) // 0
);
