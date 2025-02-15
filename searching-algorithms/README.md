# 🧐 How do we search?

Given an array, the simplest way to search for a value is to check each element one by one.

## 🚀 JavaScript has built-in search methods!

There are many different search methods available in JavaScript:

- 🔢 `indexOf` – Returns the index of the element if found, otherwise `-1`.
- ✅ `includes` – Checks if an element exists in the array, returns `true` or `false`.
- 🔍 `find` – Returns the **first** matching element.
- 📍 `findIndex` – Returns the **index** of the first matching element.

## 🔴 Linear Search

- A simple searching algorithm that checks each element **one by one**.
- Does **not** require the array to be sorted.
- **Time Complexity:** O(N) – Worst case: searches through all elements.
- Best for **small or unsorted datasets** where simplicity is preferred.
- ❌ Less efficient than binary search for large datasets but works on **any** type of data structure!

## ⚡ Binary Search

- A much **faster** search algorithm!
- Instead of eliminating **one element at a time**, it eliminates **half** of the remaining elements at a time.
- **Works only on sorted arrays!** 📊
- **Time Complexity:** O(log N) – Much better for large datasets!

## 🔠 Naïve String Search

- Suppose you want to count the number of times a **smaller string** appears in a **longer string**.
- A straightforward approach involves **checking pairs of characters individually**.
- Useful for **pattern matching** and **basic substring search**.
