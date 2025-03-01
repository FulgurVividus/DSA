// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// If the "minimum" is not the value (index) you initially began with, swap the two values.
// Repeat this with the next element until the array is sorted.

function selectionSort(arr) {
  if (!arr.length) return;

  for (let i = 0; i < arr.length; i++) {
    let smallest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallest] > arr[j]) {
        smallest = j;
      }
    }

    // swap
    if (arr[i] > arr[smallest]) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([5, 3, 4, 1, 2]));
