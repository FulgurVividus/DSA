"use strict";

// RADIX SORT HELPERS

// Helper 1

// - getDigit(num, place) - returns the digit in num at the given place value
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log(getDigit(7323, 0));

// Helper 2

// - digitCount(num) - this function counts how many digits a number has
function digitCount(num) {
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(134435));

// Helper 3

// mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list
function mostDigits(nums) {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

console.log(mostDigits([23, 34534, 3, 122]));
