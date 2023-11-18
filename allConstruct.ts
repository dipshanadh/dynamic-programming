/*
  Write a function `allConstructs(target, wordBank)` that accepts a target string and an array of strings.

  The function should return a 2D array containing all of the ways that the `target` can be constructsed by concatenating elements of the `wordBank` array.

  Each element of the 2D array should represent one combination that constructs the `target`.
  
  You may reuse elements of `wordBank` as many times as needed.
*/

const allConstructs = (
  target: string,
  wordBank: string[],
  memo: Record<string, string[][]> = {}
): string[][] => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  const constructs: string[][] = [];

  for (const prefix of wordBank) {
    if (target.startsWith(prefix)) {
      const suffix = target.slice(prefix.length);
      const suffixConstructs = allConstructs(suffix, wordBank, memo);

      // Now, prepend the prefix before each suffixConstruct
      const targetConstructs = suffixConstructs.map(construct => [
        prefix,
        ...construct,
      ]);

      constructs.push(...targetConstructs);
    }
  }

  memo[target] = constructs;

  return constructs;
};

console.log(allConstructs("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(allConstructs("abcdef", ["ab", "abc", "cd", "def", "abcd"]));

console.log(
  allConstructs("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  allConstructs("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  allConstructs("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e,",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
