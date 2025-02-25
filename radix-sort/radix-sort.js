"use strict";

// RADIX SORT PSEUDOCODE

// Define a function that accepts list of numbers
// Figure out how many digits the largest number has
// Loop from k = 0 up to this largest number of digits

// For each iteration of the loop:
// Create buckets for each digit (0 to 9)
// place each number in the corresponding bucket based on its kth digit
// Replace our existing array with values in our buckets, starting with 0 and going up to 9
// return list at the end!

//* Helpers

// returns the digit in num at the given place (i) value
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// this function counts how many digits a number has
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Given an array of numbers, returns the number of digits in the largest numbers in the list
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

//* Radix

function radixSort(nums) {
  if (!nums) return;

  // This determines how many times we need to loop. If the largest number has 5 digits, we will go from the 1st digit to the 5th digit
  let maxDigitCount = mostDigits(nums);

  // We create 10 empty buckets (arrays) to store numbers based on their current digit (0-9)
  // This repeats for each digit (from the least significant digit to the most significant one)
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    // We extract the digit at position k from each number and place it in the corresponding bucket
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }

    // We flatten all buckets back into one array, keeping the numbers in their new order
    nums = [].concat(...digitBuckets);
  }

  return nums;
}

console.log(radixSort([234, 34, 32, 5, 34546, 9]));
