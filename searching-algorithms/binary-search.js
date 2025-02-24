//# Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// Examples
// binarySearch([1,2,3,4,5],2) => 1
// binarySearch([1,2,3,4,5],3) => 2
// binarySearch([1,2,3,4,5],5) => 4
// binarySearch([1,2,3,4,5],6) => -1

function binarySearch(arr, val) {
  if (arr.length === 0) return;

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === val) return middle;

    if (val > arr[middle]) {
      start = middle + 1;
    }

    if (val < arr[middle]) {
      end = middle - 1;
    }
  }

  return -1;
}

console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
);
