# 🚀 HASH TABLES (MAP)

## 🔍 What is a Hash Table?

- Hash tables store **key-value** pairs.
- They are like **arrays**, but the keys are **unordered**.
- Unlike arrays, hash tables are **fast** for:
  - ✅ Finding values
  - ✅ Adding new values
  - ✅ Removing values

## 🤔 Why Should I Care?

- Most programming languages have built-in **hash tables**.
- Their **speed** makes them one of the most commonly used data structures!

## ⚡ The "Hash" Part

- Hash tables use an **array** to store data.
- We need a way to **convert keys** into valid array indices.
- A function that does this is called a **hash function**.

## 🔑 What Makes a Good Hash Function?

- **Fast** (Constant time ⚡ `O(1)`)
- **Uniform distribution** (No clustering!)
- **Deterministic** (Same input → Same output)

---

## 💥 Dealing with Collisions

Even with a **great hash function**, **collisions** (two keys mapping to the same index) are inevitable. Two common ways to handle collisions:

### 🔗 1. Separate Chaining

- At each index, store multiple values using another data structure (e.g., an array or linked list).
- Allows multiple key-value pairs at the same index.

### 📍 2. Linear Probing

- If a collision occurs, search for the **next empty slot**.
- Only one key-value pair per index.

---

## ⏳ Big O Complexity of Hash Tables

| Operation | Time Complexity |
| --------- | --------------- |
| Insert    | 🟢 `O(1)`       |
| Delete    | 🟢 `O(1)`       |
| Access    | 🟢 `O(1)`       |

---

## 📌 Recap

- ✅ Hash tables store **key-value** pairs efficiently.
- ✅ They provide **fast lookup, insertion, and deletion**.
- ✅ Data is stored in a **large array**, indexed using a **hash function**.
- ✅ A **good hash function** is **fast**, **uniform**, and **deterministic**.
- ✅ **Separate chaining** and **linear probing** handle collisions.
- ✅ When in doubt, **use a hash table**! 🚀🔥
