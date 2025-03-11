"use strict";

//? BFS
// Steps - Iteratively
// Create a queue (this can be an array) and a variable to store the values of nodes visited
// Place the root node in the queue
// Loop as long as there is anything in the queue
//   Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
//   If there is a left property on the node dequeued - add it to the queue
//   If there is a right property on the node dequeued - add it to the queue
// Return the variable that stores the values

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //#
  insert(val) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (val === current.val) return undefined;

        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (current.right === null) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  //#
  find(val) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  //# BFS (advantages from FIFO)
  bfs() {
    let node = this.root;
    const visited = [];
    const queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      visited.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

//      ->  10
//   ->  6   ->  15
//  -> 3   8  ->     20

tree.bfs(); // [10, 6, 15, 3, 8, 20]
