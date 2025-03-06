"use strict";

// 1ST FILE

// Node has:
// -val
// -next
// -prev

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

// Doubly Linked List
// -head
// -tail
// -length

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
