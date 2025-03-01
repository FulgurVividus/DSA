// Sorting Exercise - pivot helper
//# In this exercise, your goal is to implement a function called pivot . This function contains nearly all of the logic you'll need in order to implement Quick Sort in the next exercise.

//? The pivot  function is responsible for taking an array, setting the pivot value, and mutating the array so that all values less than the pivot wind up to the left of it, and all values greater than the pivot wind up to the right of it. It's also helpful if this helper returns the index of where the pivot value winds up.

// For example, if we decide the pivot will always be the first element in the array, it should behave in the following way:

//* var arr = [4, 2, 5, 3, 6];
//* pivot(arr); // 2
//* arr; // [3, 2, 4, 5, 6];

//# In this code, the specifics of how the arr  variable gets mutated are not important. All that matters is that 4 winds up at index 2, with 3 and 2 to the left of it (in any order), and with 5 and 6 to the right of it (in any order).
//? Hint: When we get to Quick Sort, it will be helpful for the pivot  helper to accept not only an array an an optional comparator, but also an optional start and end index. These should default to 0 and the array length minus 1, respectively. We've provided these to you in the starter code, but their utility may not be apparent yet. That's okay! When you get to implementing Quick Sort, their usefulness will become clearer.

function pivot(arr, comparatorFn, start = 0, end = arr.length - 1) {
  if (!arr.length) return [];

  if (typeof comparatorFn !== "function") {
    comparatorFn = (a, b) => a - b;
  }

  let pivot = arr[start];
  let swapIndex = start;

  function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }

  for (let i = start + 1; i <= end; i++) {
    if (comparatorFn(arr[i], pivot) < 0) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);

  return swapIndex;
}

// Quick Sort
//# The algorithm is as follows:

//* Pick an element in the array and designate it as the "pivot". While there are quite a few options for choosing the pivot. We'll make things simple to start, and will choose the pivot as the first element. This is not an ideal choice, but it makes the algorithm easier to understand for now.

//* Next, compare every other element in the array to the pivot.

//* If it's less than the pivot value, move it to the left of the pivot.

//* If it's greater, move it to the right.

//* Once you have finished comparing, the pivot will be in the right place.

//* Next, recursively call quicksort again with the left and right halves from the pivot until the array is sorted.

//? It's easiest to implement Quick Sort with the aid of your pivot  helper from the earlier exercise. This function is responsible for taking an array, setting the pivot value, and mutating the array so that all values less than the pivot wind up to the left of it, and all values greater than the pivot wind up to the right of it. It's also helpful if this helper returns the index of where the pivot value winds up.

//# The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

function quickSort(arr, comparatorFn, left = 0, right = arr.length - 1) {
  if (!arr.length) return [];

  if (typeof comparatorFn !== "function") {
    comparatorFn = (a, b) => a - b;
  }

  if (left < right) {
    let pivotIndex = pivot(arr, comparatorFn, left, right);

    quickSort(arr, comparatorFn, left, pivotIndex - 1);
    quickSort(arr, comparatorFn, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([4, 1, 2, 8, 5, 7, 6, 3]));
