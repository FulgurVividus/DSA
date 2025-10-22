"use strict";

// 7TH FILE

// Set pseudocode
// Create a variable which is the result of the get method at the index passed to the function
// If the get method returns a valid node, set the value of that node to be the value passed to the function
// Return true
// Otherwise, return false

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

  //#
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

  //#
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let count;
    let current;

    if (index <= this.length / 2) {
      count = 0;
      current = this.head;

      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;

      while (count !== index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  //# replaces the value of a node in a list
  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }

    return false;
  }
}

const list = new DoublyLinkedList();
list.push(10);
list.push(45);
list.push(99);

list.set(0, 15); // 10 is replaced by 15
