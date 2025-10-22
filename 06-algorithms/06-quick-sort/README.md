# 🚀 Quick Sort

Quick Sort is an efficient, divide-and-conquer sorting algorithm that, like Merge Sort, exploits the fact that arrays of size 0 or 1 are always sorted. It works by selecting a **pivot** and organizing elements around it.

## 🔥 How Quick Sort Works

1️⃣ Select a **pivot** element.
2️⃣ **Partition** the array so that:

- All elements **less than** the pivot move to the left.
- All elements **greater than** the pivot move to the right.

3️⃣ Recursively apply **Quick Sort** to the left and right partitions until the entire array is sorted.

---

## ⚡ Pivot Helper Function

To implement Quick Sort efficiently, we first need a **helper function** that:

- ✔️ **Chooses a pivot** (we'll use the first element for simplicity).
- ✔️ **Rearranges** the array so that smaller values are on the left and larger values are on the right.
- ✔️ **Returns the pivot's final index** after partitioning.
- ✔️ **Modifies the array in place** (no extra arrays used!).

---

## 🎯 Choosing a Pivot

The efficiency of Quick Sort depends on selecting a good pivot:

- ✅ **Best case:** The pivot is **near the median**, leading to balanced partitions.
- ❌ **Worst case:** The pivot is the **smallest or largest** element, leading to unbalanced partitions and slower performance.

For simplicity, we'll **always pick the first element** as the pivot for now (but this isn't always optimal!).

---

## 📊 Big O Complexity

| Case       | Time Complexity                     |
| ---------- | ----------------------------------- |
| 🏆 Best    | **O(n log n)**                      |
| ⚖️ Average | **O(n log n)**                      |
| 🚨 Worst   | **O(n²)** (when poorly partitioned) |
| 💾 Space   | **O(log n)** (due to recursion)     |

---

## 💡 Why Quick Sort?

- **Faster than Bubble Sort & Insertion Sort** for large datasets.
- **Efficient for in-place sorting** (uses less memory than Merge Sort).
- **Commonly used in real-world applications** like database indexing and language library implementations.
