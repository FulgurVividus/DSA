# 📌 Singly Linked Lists

## 🔍 What is a Linked List?

A **linked list** is a dynamic data structure that consists of **nodes**, each containing:

- A **value** (data stored in the node)
- A **pointer** to the next node (or `null` if it's the last node)
- A **head** (starting node), **tail** (ending node), and a **length** property

## 🔄 Comparisons: Linked Lists vs. Arrays

### 📝 **Linked Lists**

- ✅ **No indexes!** Data is stored dynamically in nodes.
- ✅ **Nodes are connected** using a pointer (`next`).
- ✅ **Fast insertions/deletions** at the beginning (`O(1)`).
- ❌ **Slower access/searching** (`O(N)`).

### 📊 **Arrays**

- ✅ **Indexed structure** for fast access.
- ✅ **Efficient searching** (`O(1)` for direct access).
- ❌ **Expensive insertions/removals** at the beginning (`O(N)`).

## ⏳ **Big O Notation of Singly Linked Lists**

| Operation | Time Complexity                        |
| --------- | -------------------------------------- |
| Insertion | **O(1)**                               |
| Removal   | **O(1) or O(N)** (depends on position) |
| Searching | **O(N)**                               |
| Access    | **O(N)**                               |

## 🔥 **Why Use Singly Linked Lists?**

- 🔹 Great for scenarios where **frequent insertions/deletions** at the beginning are needed.
- 🔹 More memory-efficient than arrays for **dynamic data storage**.
- 🔹 Forms the foundation for **other data structures** like **Stacks and Queues**.
- 🔹 Eliminates the need for **contiguous memory allocation** like arrays.

🚀 **Use Cases**: Implementing **stacks, queues, memory management**, and **graph adjacency lists**.
