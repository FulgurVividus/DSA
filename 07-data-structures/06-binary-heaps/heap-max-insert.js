"use strict";

// 1ST FILE

// INSERT PSEUDOCODE
// Push the value into the values property on the heap
//   Bubble Up:
//   Create a variable called index which is the length of the values property - 1
//   Create a variable called parentIndex which is the floor of (index-1)/2
//   Keep looping as long as the values element at the parentIndex is less than the values element at the child index
//     Swap the value of the values element at the parentIndex with the value of the element property at the child index
//     Set the index to be the parentIndex, and start over!

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  //# insert
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  //# helper for insert
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element <= parent) break;

      // swap
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(55);

// [41, 39, 33, 18, 27, 12] (initial)
//   0  1   2   3   4   5

// [41, 39, 33, 18, 27, 12, 55] (inserted)
// [41, 39, 55, 18, 27, 12, 33]
// [55, 39, 41, 18, 27, 12, 33] (final)
