// Merge Sort Pseudocode
// Break up the array into halves until you have arrays that are empty or have one element
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// Once the array has been merged back together, return the merged (and sorted!) array

//# merge function
function merge(arr1, arr2) {
  let results = [];
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  // Compare elements from both arrays and push the smaller one
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++; // Move forward in arr1
    } else {
      results.push(arr2[j]);
      j++; // Move forward in arr2
    }
  }

  // If any elements remain in arr1, add them to "results"
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++; // Move forward in arr1
  }
  // If any elements remain in arr2, add them to "results"
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++; // Move forward in arr2
  }

  return results; // Return the merged sorted array
}

//# merge sort function
function mergeSort(arr) {
  if (arr.length <= 1) return arr; // Base case

  let mid = Math.floor(arr.length / 2); // Find the middle index
  let left = mergeSort(arr.slice(0, mid)); // Recursively sort left half
  let right = mergeSort(arr.slice(mid)); // Recursively sort right half

  return merge(left, right); // Merge the sorted halves
}

console.log(mergeSort([10, 24, 1, 9, 76, 73]));
