"use strict";

// 3RD FILE

// Popping pseudocode
// If there is no head, return undefined
// Store the current tail in a variable to return later
// If the length is 1, set the head and tail to be null
// Update the tail to be the previous Node.
// Set the newTail's next to null
// Decrement the length
// Return the value removed

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //#
  push(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  //# removes a node from the end of the list
  pop() {
    if (this.length === 0) return undefined;

    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }
}

const list = new DoublyLinkedList();
list.push(10);
list.push(45);
list.push(99);

list.pop(); // 99 is removed
