"use strict";

// 5TH FILE

// Unshifting pseudocode
// Create a new node with the value passed to the function
// If the length is 0
//   Set the head to be the new node
//   Set the tail to be the new node
// Otherwise
//   Set the prev property on the head of the list to be the new node
//   Set the next property on the new node to be the head property
//   Update the head to be the new node
// Increment the length
// Return the list

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

  //#
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

  //#
  shift() {
    if (this.length === 0) return undefined;

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  //# adds a node to the beginning of the list
  unshift(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
}

const list = new DoublyLinkedList();
list.push(10);
list.push(45);
list.push(99);

list.unshift(5); // 5 is added to the beginning
