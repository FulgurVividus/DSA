# 🌐 Graph Traversal

Traversing a graph means **visiting, updating, or checking** each vertex in a graph. There are two main approaches: **Depth-First Search (DFS)** and **Breadth-First Search (BFS)**.

---

## 🚀 Why is Graph Traversal Important?

Graph traversal is widely used in various real-world applications, including:

- 🔗 **Peer-to-Peer Networking** (e.g., torrent networks)
- 🌍 **Web Crawlers** (search engines indexing websites)
- 🔍 **Finding Closest Matches & Recommendations** (e.g., Netflix, Spotify, Amazon)
- 🛣️ **Shortest Path Problems**:
  - 🚗 **GPS Navigation** (finding the fastest route)
  - 🏁 **AI Algorithms** (pathfinding in games, robotics, etc.)
  - 🌀 **Maze Solving** (finding the exit efficiently)

---

## 🔥 Graph Traversal Methods

### 📌 **Depth-First Search (DFS)**

DFS explores a graph **as far as possible** along one branch before backtracking.

✔️ **Approach:**

- Start from a node.
- Visit the deepest unvisited neighbor first.
- Backtrack when necessary.

✔️ **Implementation Methods:**

- **Recursively** (using the call stack)
- **Iteratively** (using a stack)

🛠️ **Best for:**

- Exploring paths
- Checking for cycles in a graph
- Solving puzzles (e.g., mazes, sudoku)

---

### 🔍 **Breadth-First Search (BFS)**

BFS explores **all neighbors at the current depth** before moving deeper into the graph.

✔️ **Approach:**

- Start from a node.
- Visit all its neighbors first before moving to the next level.
- Use a queue to keep track of nodes.

🛠️ **Best for:**

- Finding the **shortest path** in an unweighted graph
- Social networking suggestions (e.g., "People You May Know")
- AI & Game Development (finding the fastest route to a goal)

---

🚀 **DFS vs BFS: Which One to Use?**
| Feature | DFS | BFS |
|---------|-----|-----|
| Uses | Path exploration, cycles detection | Shortest path, level-wise traversal |
| Space Complexity | O(V) (Recursive calls) | O(V) (Queue storage) |
| Works best when | The solution is deep in the tree | The solution is close to the root |

📝 **Key Takeaways:**

- Both **DFS** and **BFS** are fundamental graph traversal techniques.
- **DFS** is great for **deep exploration** and problems like **topological sorting**.
- **BFS** is excellent for **shortest path problems** and **level-order traversal**.
