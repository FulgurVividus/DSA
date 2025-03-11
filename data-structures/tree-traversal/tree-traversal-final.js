"use strict";

// FINAL FILE

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
