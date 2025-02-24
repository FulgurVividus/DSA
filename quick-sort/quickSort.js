// Quicksort Pseudocode
// Call the pivot helper on the array
// When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
// Your base case occurs when you consider a subarray with less than 2 elements

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start]; // Chose the pivot (1st element)
  let swapIndex = start; // Tracks the final pivot position

  function swap(arr, indx1, indx2) {
    [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]; // Swaps two elements
  }

  // Loop through the array
  for (let i = start + 1; i <= end; i++) {
    // If current element is smaller than pivot:
    if (pivot > arr[i]) {
      // Move the swapIndex forward
      swapIndex++;
      // Swap current element with swapIndex position
      swap(arr, swapIndex, i);
    }
  }
  // Swap pivot with its final position
  swap(arr, start, swapIndex);

  // Return the final index of the pivot
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (!arr.length) return; // Edge case: if array is empty

  // Continue only if there is more than one element
  if (left < right) {
    // Get pivot index
    let pivotIndex = pivot(arr, left, right);

    // Recursively sort the left side
    quickSort(arr, left, pivotIndex - 1);
    // Recursively sort the right side
    quickSort(arr, pivotIndex + 1, right);
  }

  // Return final sorted array
  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
