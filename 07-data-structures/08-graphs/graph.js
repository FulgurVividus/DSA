"use strict";

// 1ST FILE (final)

//? ADDING A VERTEX
// Write a method called addVertex, which accepts a name of a vertex
// It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
// Example:
// g.addVertex("Tokyo")
// {
//     "Tokyo": []
// }

//? ADDING AN EDGE
// This function should accept two vertices, we can call them vertex1 and vertex2
// The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
// The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
// Don't worry about handling errors/invalid vertices

//? REMOVING AN EDGE
// This function should accept two vertices, we'll call them vertex1 and vertex2
// The function should reassign the key of vertex1 to be an array that does not contain vertex2
// The function should reassign the key of vertex2 to be an array that does not contain vertex1
// Don't worry about handling errors/invalid vertices

//? REMOVING A VERTEX
// The function should accept a vertex to remove
// The function should loop as long as there are any other vertices in the adjacency list for that vertex
// Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
// delete the key in the adjacency list for that vertex

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
}

const graph = new Graph();

graph.addVertex("Tokyo");
graph.addVertex("New York");
graph.addVertex("Chicago");

// {
//     "Tokyo": [],
//     "New York": [],
//     "Chicago": []
// }

graph.addEdge("Tokyo", "New York"); // result below

// {
//     "Tokyo": ["New York"],
//     "New York": ["Tokyo"],
//     "Chicago": []
// }

graph.removeEdge("Tokyo", "New York"); // result below

// {
//     "Tokyo": [],
//     "New York": [],
//     "Chicago": []
// }

graph.removeVertex("Chicago"); // result below

// {
//     "Tokyo": [],
//     "New York": [],
// }
