"use strict";

// 1ST FILE

//? PUSHING PSEUDOCODE
// The function should accept a value
// Create a new node with that value
// If there are no nodes in the stack, set the first and last property to be the newly created node
// If there is at least one node, create a variable that stores the current first property on the stack
// Reset the first property to be the newly created node
// Set the next property on the node to be the previously created variable
// Increment the size of the stack by 1

//? POP PSEUDOCODE
// If there are no nodes in the stack, return null
// Create a temporary variable to store the first property on the stack
// If there is only 1 node, set the first and last property to be null
// If there is more than one node, set the first property to be the next property on the current first
// Decrement the size by 1
// Return the value of the node removed

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //# adds a value to the top of the stack (LIFO)
  push(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    this.size++;
    return this.size;
  }

  //# removes a node from the top of stack (LIFO)
  remove() {
    if (!this.first) return null;
    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return temp.val;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

// 3, 2, 1

stack.remove(); // 3 is removed
