//# Bubble Sort
//# Start looping from with a variable called i the end of the array towards the beginning
//# Start an inner loop with a variable called j from the beginning until i - 1
//# If arr[j] is greater than arr[j+1], swap those two values!
//# Return the sorted array

// not optimized, time complexity is O(n^2)
function bubbleSort(arr) {
  if (!arr) return;

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log(bubbleSort([1, 4, 3, 6, 3, 8, 19, 14, 20, -4]));
