# 🌲 Binary Heaps

## 🔍 What is a Binary Heap?

A **Binary Heap** is similar to a Binary Search Tree but follows different rules:

- **Max Binary Heap**: Parent nodes are always larger than child nodes.
- **Min Binary Heap**: Parent nodes are always smaller than child nodes.

## 🔥 Max Binary Heap Properties

- Each parent has at most **two child nodes**.
- The **value of each parent node** is always **greater** than its child nodes.
- **Sibling nodes** have no defined order.
- A **binary heap is as compact as possible**—children fill from left to right.

---

## 🧐 Why Do We Need Binary Heaps?

- **Used to implement Priority Queues** (very common data structures).
- **Essential for graph traversal algorithms** like **Dijkstra's Algorithm**.

---

## 🗂️ Easy Storage: Using Arrays 📚

Binary Heaps can be stored efficiently in **arrays**!

For any node at index `n`:

- **Left child** → Stored at `2n + 1`
- **Right child** → Stored at `2n + 2`

If we have a child node at index `n`:

- **Parent** → Located at `(n-1)/2` (floored).

---

## 🎯 What is a Priority Queue?

A **Priority Queue** is a data structure where elements are assigned a priority. Higher priority elements are served before lower priority elements.

---

## ⏳ Big O Complexity of Binary Heaps

| Operation     | Time Complexity |
| ------------- | --------------- |
| **Insertion** | `O(log N)`      |
| **Removal**   | `O(log N)`      |
| **Search**    | `O(N)`          |

---

## 🚀 Recap

- ✅ **Binary Heaps** are widely used for **sorting** and building other data structures like **Priority Queues**.
- ✅ **MaxBinaryHeap** → Parents are **greater** than children.
- ✅ **MinBinaryHeap** → Parents are **smaller** than children.
- ✅ With simple **math calculations**, we can efficiently represent **heaps using arrays**! 📊
