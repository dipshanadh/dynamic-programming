/*
  Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.

  The function should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` array.

  You may reuse the elements of `wordBank` as many times as needed.
*/

const canConstruct = (
  target: string,
  wordBank: string[],
  memo: Record<string, boolean> = {}
) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (const word of wordBank) {
    if (target.startsWith(word)) {
      const smallWord = target.slice(word.length);

      if (canConstruct(smallWord, wordBank, memo)) {
        memo[target] = true;

        return memo[target];
      }
    }
  }

  memo[target] = false;

  return memo[target];
};

console.log(
  canConstruct("abcdef", ["a", "ab", "abc", "cd", "def", "abcd", "f"]) // true
);
console.log(
  canConstruct(" skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]) // false
);
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]) // true
);
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e,",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ]) // false
);
