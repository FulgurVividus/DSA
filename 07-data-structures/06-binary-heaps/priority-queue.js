"use strict";

// 4TH FILE

// OUR PRIORITY QUEUE
// Write a Min Binary Heap - lower number means higher priority.
// Each Node has a val and a priority.  Use the priority to build the heap.
// Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
// Dequeue method removes root element, returns it, and rearranges heap using priority.

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  //#
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  //#
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element.priority >= parent.priority) break;

      // swap
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  //#
  dequeue() {
    // swap
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      // sink down
      this.sinkDown();
    }

    return min;
  }

  //#
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;

      let leftChild;
      let rightChild;
      let swap = null;

      // left
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      // right
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

const hospital = new PriorityQueue();

hospital.enqueue("common cold", 5);
hospital.enqueue("gunshot wound", 1);
hospital.enqueue("high fever", 4);
hospital.enqueue("broken arm", 2);
hospital.enqueue("glass in foot", 3);

hospital.dequeue(); // "gunshot wound" is removed first
