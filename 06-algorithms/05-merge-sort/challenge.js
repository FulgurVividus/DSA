// Sorting Exercise - merge helper

//# Given two sorted arrays, write a function called merge which accepts two SORTED arrays and returns a new array with both of the values from each array sorted.
//? This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.
//* As before, the function should default to sorting numbers in ascending order. If you pass in a comparator function as a third argument, this comparator is what will be used. (Note that the input arrays will always be sorted according to the comparator!)
// Also, do not use the built in .sort method! We're going to use this helper to implement a sort, so the helper itself shouldn't depend on a sort.

function merge(arr1, arr2, comparatorFn) {
  if (typeof comparatorFn !== "function") {
    comparatorFn = (a, b) => a - b;
  }

  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (comparatorFn(arr1[i], arr2[j]) < 0) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

// Merge Sort

//# Implement the merge sort algorithm. Given an array, this algorithm will sort the values in the array. The functions take 2 parameters: an array and an optional comparator function.
//? The comparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal.
//* The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.
//# Here's some guidance for how merge sort should work:
//? Break up the array into halves until you can compare one value with another
//* Once you have smaller sorted arrays, merge those arrays with other sorted pairs until you are back at the full length of the array
//# Once the array has been merged back together, return the merged (and sorted!) array
//? In order to implement this function, you'll also need to implement a merge function that takes in two sorted arrays and a comparator and returns a new sorted array. You implemented this function in the previous exercise, so copy and paste that code here.

function mergeSort(arr, comparatorFn) {
  if (arr.length <= 1) return arr;

  if (typeof comparatorFn !== "function") {
    comparatorFn = (a, b) => a - b;
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right, comparatorFn);
}

console.log(mergeSort([10, 24, 1, 9, 76, 73, 45, 7, 8, 19, 21, 100]));
