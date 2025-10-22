"use strict";

//? DFS PRE-ORDER
// Steps - Recursively
// Create a variable to store the values of nodes visited
// Store the root of the BST in a variable called current
// Write a helper function which accepts a node
//   Push the value of the node to the variable that stores the values
//   If the node has a left property, call the helper function with the left property on the node
//   If the node has a right property, call the helper function with the right property on the node
// Invoke the helper function with the current variable
// Return the array of values

//? DFS POST-ORDER
// Steps - Recursively
// Create a variable to store the values of nodes visited
// Store the root of the BST in a variable called current
// Write a helper function which accepts a node
//   If the node has a left property, call the helper function with the left property on the node
//   If the node has a right property, call the helper function with the right property on the node
//   Push the value of the node to the variable that stores the values
//   Invoke the helper function with the current variable
// Return the array of values

//? DFS IN-ORDER
// Steps - Recursively
// Create a variable to store the values of nodes visited
// Store the root of the BST in a variable called current
// Write a helper function which accepts a node
// If the node has a left property, call the helper function with the left property on the node
// Push the value of the node to the variable that stores the values
// If the node has a right property, call the helper function with the right property on the node
// Invoke the helper function with the current variable
// Return the array of values

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

  //# DFS (pre order)
  dfsPreOrder() {
    const visited = [];
    let current = this.root;

    function traverse(node) {
      visited.push(node.val);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);

    return visited;
  }

  //# DFS (post order)
  dfsPostOrder() {
    const visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      visited.push(node.val);
    }
    traverse(current);

    return visited;
  }

  //# DFS (in order)
  dfsInOrder() {
    const visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(current);

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

//        10
//     6     15
//   3   8       20

tree.dfsPreOrder(); // [10, 6, 3, 8, 15, 20]

tree.dfsPostOrder(); // [3, 8, 6, 20, 15, 10]

tree.dfsInOrder(); // [3, 6, 8, 10, 15, 20]
