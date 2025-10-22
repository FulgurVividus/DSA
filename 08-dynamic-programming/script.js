"use strict";

// fibonacci

//# Big O - O(2^n)
function fibBad(n) {
  if (n <= 2) return 1;

  return fibBad(n - 1) + fibBad(n - 2);
}

//# Big O - O(n)
function fibBetter(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;

  const res = fibBetter(n - 1, memo) | fibBetter(n - 2, memo);
  memo[n] = res;
  return res;
}

// The better solution is much faster and performant because it uses Memoization strategy
