"use strict";

// 2ND FILE

//? DFS-iterative(start):
//   let S be a stack
//   S.push(start)
//   while S is not empty
//     vertex = S.pop()
//     if vertex is not labeled as discovered:
//       visit vertex (add to result list)
//       label vertex as discovered
//       for each of vertex's neighbors, N do
//         S.push(N)

//? DEPTH FIRST TRAVERSAL
// The function should accept a starting node
// Create a stack to help use keep track of vertices (use a list/array)
// Create a list to store the end result, to be returned at the very end
// Create an object to store visited vertices
// Add the starting vertex to the stack, and mark it visited
// While the stack has something in it:
//   Pop the next vertex from the stack
//   If that vertex hasn't been visited yet:
//     ​Mark it as visited
//     Add it to the result list
//     Push all of its neighbors into the stack
// Return the result array

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  //# add vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  //# add edge
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  //# remove edge
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  //# remove vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  //# DFS recursive
  depthFirstSearchRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }

  //# DFS iterative
  depthFirstSearchIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

//          A
//        /   \
//       B     C
//       \     /
//        D -- E
//        \    /
//           F

graph.depthFirstSearchIterative("A"); // ["A", "C", "E", "F", "D", "B"]
