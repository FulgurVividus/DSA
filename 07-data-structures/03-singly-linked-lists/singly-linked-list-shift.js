"use strict";

// 4TH FILE

// Shifting pseudocode
// If there are no nodes, return undefined
// Store the current head property in a variable
// Set the head property to be the current head's next property
// Decrement the length by 1
// Return the value of the node removed

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //#
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  //#
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  //# removes a new node from the beginning
  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    currentHead = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead; // it's no more current head
  }
}

const list = new SinglyLinkedList();
list.push("Hello");
list.push("there");
list.push("!");

list.shift(); // "Hello" is removed
