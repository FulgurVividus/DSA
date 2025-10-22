"use strict";

// 1ST FILE

// piece of data - val
// reference to the next node - next

class Node {
  constructor(val) {
    this.val = val;
    // at the beginning there's noting that comes after it
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

// const first = new Node("Hi");
// first.next = new Node("there!");
// first.next.next = new Node("How");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you?");
