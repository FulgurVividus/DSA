# 🚀 Insertion Sort

**Insertion Sort** builds up the sorted portion of the array by gradually expanding a left half that is always sorted.

**Insertion sort** is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is like sorting playing cards in your hands. You split the cards into two groups: the sorted cards and the unsorted cards. Then, you pick a card from the unsorted group and put it in the right place in the sorted group.

- We start with second element of the array as first element in the array is assumed to be sorted.
- Compare second element with the first element and check if the second element is smaller then swap them.
- Move to the third element and compare it with the first two elements and put at its correct position
- Repeat until the entire array is sorted.

## 📊 Big O Complexity of Sorting Algorithms

| Algorithm          | Best Case 🟢 | Average Case 🔵 | Worst Case 🔴 | Space Complexity 💾 |
| ------------------ | ------------ | --------------- | ------------- | ------------------- |
| **Bubble Sort**    | O(n)         | O(n²)           | O(n²)         | O(1)                |
| **Insertion Sort** | O(n)         | O(n²)           | O(n²)         | O(1)                |
| **Selection Sort** | O(n²)        | O(n²)           | O(n²)         | O(1)                |

## 🔥 Recap

- ✅ Sorting is a **fundamental** concept in computer science!
- ✅ Bubble Sort, Selection Sort, and Insertion Sort are all **basic sorting algorithms**.
- ✅ These sorting algorithms have **quadratic** average time complexity (O(n²)), making them inefficient for large datasets.

🚀 We can do **better** with more advanced algorithms like **Merge Sort, Quick Sort, and Radix Sort!**
