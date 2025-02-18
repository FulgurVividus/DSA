// Javascript program for insertion sort

function insertionSort(arr) {
  if (!arr.length) return;

  // we start from the 2nd element in the array (i=1)
  for (let i = 1; i < arr.length; i++) {
    let currElement = arr[i]; // current element we wanna insert into correct place
    let j = i - 1; // the last element of the sorted part (i-1)

    // Move elements of arr[0..i-1], that are greater than currElement, to one position ahead of their current position
    while (j >= 0 && arr[j] > currElement) {
      // j >= 0 - ensures we don't go out of bounds
      // arr[j] > currElement - only shift if the previous element is bigger than currElement

      // shift the element to the right to make space for currElement
      arr[j + 1] = arr[j];
      // move j one step backward to keep checking
      j = j - 1;
    }
    // after shifting, place currElement in the correct position
    arr[j + 1] = currElement;
  }

  return arr;
}

console.log(insertionSort([12, 11, 13, 5, 6]));
