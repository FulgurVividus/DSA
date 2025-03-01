//# Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

//# Don't use indexOf to implement this function!

// Examples:
// linearSearch([10, 15, 20, 25, 30], 15) => at index 1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) => at index 5
// linearSearch([100], 100) => at index 0
// linearSearch([1,2,3,4,5], 6) => at index -1

// O(n)
function linearSearch(arr, val) {
  if (arr.length === 0) return;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}

console.log(linearSearch([12, 4, 6], 6));
