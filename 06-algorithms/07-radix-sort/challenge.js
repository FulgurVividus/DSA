"use strict";

// Radix Sort

// Finally, you're ready to implement Radix Sort! Write a function called radixSort  which accepts an array of numbers and sorts them in ascending order.
// You'll need to make use of the helper functions from the previous exercises here. Good luck!

//* Helpers

//
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//
function digitCount(nums) {
  let result = 0;

  while (nums > 0) {
    nums = Math.floor(nums / 10);
    result++;
  }

  return result;
}

//
function mostDigits(nums) {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

//* Radix Sort function

function radixSort(nums) {
  if (!nums) return [];

  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }

    nums = [].concat(...digitBuckets);
  }

  return nums;
}
