// Implement insertionSort  . Given an array, both algorithms will sort the values in the array. The functions take 2 parameters: an array and an optional comparator function. The comparator function is a callback that will take two values from the array to be compared. The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

//* Start by picking the second element in the array (we will assume the first element is the start of the "sorted" portion)
//# Now compare the second element with the one before it and swap if necessary.
//? Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.
// Repeat until the array is sorted.Implement insertion sort. Your function should accept an array and return an array of sorted values.

// Examples
// insertionSort([4, 20, 12, 10, 7, 9]); ==> [4, 7, 9, 10, 12, 20]
// insertionSort([0, -10, 7, 4]); ==> [-10, 0, 4, 7]
// insertionSort([1, 2, 3]); ==> [1, 2, 3]

function insertionSort(arr, comparatorFn) {
  if (!arr.length) return [];

  if (typeof comparatorFn !== "function") {
    comparatorFn = (a, b) => a - b;
  }

  for (let i = 1; i < arr.length; i++) {
    let currElement = arr[i];
    let j = i - 1;

    while (j >= 0 && comparatorFn(arr[j], currElement) > 0) {
      //
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = currElement;
  }

  return arr;
}

console.log(insertionSort([4, 20, 12, 10, 7, 9]));
