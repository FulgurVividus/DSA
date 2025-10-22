"use strict";

// 1ST FILE

//? DFS(vertex):
//   if vertex is empty
//     return (this is base case)
//   add vertex to results list
//   mark vertex as visited
//   for each neighbor in vertex's neighbors:
//      if neighbor is not visited:
//        recursively call DFS on neighbor

//? DEPTH FIRST TRAVERSAL
// The function should accept a starting node
// Create a list to store the end result, to be returned at the very end
// Create an object to store visited vertices
// Create a helper function which accepts a vertex
//   The helper function should return early if the vertex is empty
//   The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
//   Loop over all of the values in the adjacencyList for that vertex
//   If any of those values have not been visited, recursively invoke the helper function with that vertex
// Invoke the helper function with the starting vertex
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

graph.depthFirstSearchRecursive("A"); // ["A", "B", "D", "E", "C", "F"]
