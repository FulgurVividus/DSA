//# suppose we wanna write a function that calculates the sum of all numbers from 1 up to (and including) some number n

// 1 solution
function addUpTo_1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

let t1 = performance.now();
addUpTo_1(1_000_000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

// 2 solution
function addUpTo_2(n) {
  return (n * (n + 1)) / 2;
}

let t3 = performance.now();
addUpTo_2(1_000_000);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds`);
