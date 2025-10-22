//# Bubble Sort
//# Start looping from with a variable called i the end of the array towards the beginning
//# Start an inner loop with a variable called j from the beginning until i - 1
//# If arr[j] is greater than arr[j+1], swap those two values!
//# Return the sorted array

// optimized, time complexity O(n)
function bubbleSort(arr) {
  if (!arr) return;
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort([1, 4, 3, 6, 3, 8, 19, 14, 20, -4]));
