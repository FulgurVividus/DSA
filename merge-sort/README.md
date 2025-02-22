# 🚀 Why Learn Merge Sort?

- 🔥 The sorting algorithms we've learned so far **don't scale well**
- ⏳ Try running **Bubble Sort** on an array of **100,000 elements** – it will take quite some time!
- ⚡ We need to be able to **sort large arrays faster!**

## ⚡ Faster Sorting Algorithms

- There is a family of sorting algorithms that can improve time complexity from **O(n²) ➝ O(n log n)** 🚀
- 📉 There's a **tradeoff** between **efficiency and simplicity**
- 🧠 The **more efficient algorithms** are generally **harder to understand** at first

## 🔀 Merge Sort

- 🏗 Merge Sort is a combination of **merging** and **sorting**!
- ✅ It **exploits** the fact that arrays of **0 or 1 element** are always **sorted**
- 🔧 Works by **breaking** an array into smaller arrays, sorting them, and then **merging** back
- Merge Sort follows the **divide** and **conquer** approach

## 🔄 Merging Arrays (Key Step!)

- 🔹 To implement **Merge Sort**, we first need a helper function to **merge two sorted arrays**
- 🔹 Given two **sorted** arrays, this function should create a **new sorted array** with all elements
- 🔹 This function should run in **O(n + m) time** and **O(n + m) space**
- 🚫 It **should NOT modify** the input arrays!

## 📊 Big O Complexity of Merge Sort

| Time Complexity | Best 🏆    | Average 📊 | Worst 🚨   |
| --------------- | ---------- | ---------- | ---------- |
| **Merge Sort**  | O(n log n) | O(n log n) | O(n log n) |

🔹 **Space Complexity**: **O(n)** (due to auxiliary space for merging)

🚀 **Merge Sort is one of the most efficient sorting algorithms for large datasets!** 🎯
