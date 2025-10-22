"use strict";

// 3RD FILE

// Finding a Node in a BST
// Steps - Iteratively or Recursively
//   Starting at the root
//   Check if there is a root, if not - we're done searching!
//   If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
//   If not, check to see if the value is greater than or less than the value of the root
//   If it is greater
//    Check to see if there is a node to the right
//      If there is, move to that node and repeat these steps
//      If there is not, we're done searching!
//   If it is less
//    Check to see if there is a node to the left
//      If there is, move to that node and repeat these steps
//      If there is not, we're done searching!

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
}

const tree = new BinarySearchTree();

tree.insert(10); // will be the root

tree.insert(5);
tree.insert(2);
tree.insert(7);

tree.insert(13);
tree.insert(11);
tree.insert(16);

//        10
//    5        13
//  2  7    11   16

tree.find(16); // returns true
