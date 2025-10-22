// FREQUENCY COUNTER PATTERN

//# Write a function called "same", which accepts 2 arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of the values must be the same.

// same([1, 2, 3], [4, 1, 9]) => true
// same([1, 2, 3], [1, 9]) => false
// same([1, 2, 1], [4, 4, 1]) => false (must be same frequency)

// O(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));

////////////////////////////////////////////////////////////////////////////

// refactored

// two separate loops are better, than two nested loops
// O(n)
function sameRefactored(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const element of arr1) {
    frequencyCounter1[element] = (frequencyCounter1[element] || 0) + 1;
  }
  for (const element of arr2) {
    frequencyCounter2[element] = (frequencyCounter2[element] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameRefactored([1, 2, 3], [4, 1, 9]));
