# 🚀 Comparison Sorts vs. Radix Sort

## 📊 Average Time Complexity of Sorting Algorithms

| Sorting Algorithm     | Average Time Complexity |
| --------------------- | ----------------------- |
| 🔵 **Bubble Sort**    | O(n²)                   |
| 🔴 **Insertion Sort** | O(n²)                   |
| 🟡 **Selection Sort** | O(n²)                   |
| 🟢 **Quick Sort**     | O(n log n)              |
| 🔵 **Merge Sort**     | O(n log n)              |

## 🔢 What is Radix Sort?

Radix Sort is a special sorting algorithm that works **only on numbers**. Instead of comparing elements directly, it takes advantage of the **number of digits** to sort items efficiently. More digits mean bigger numbers! 📏

✅ **Key Features:**

- **Non-comparative** sorting algorithm 🛑❌🔄
- Sorts numbers **digit by digit** 📊
- Particularly **efficient for large datasets** when `k` (number of digits) is small

---

## 🛠 Radix Sort Helper Functions

Before implementing Radix Sort, let's build some helper functions to make things easier! 🏗

### 1️⃣ `getDigit(num, place)` – Extracts a digit at a specific place

```js
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

getDigit(12345, 0); // 5
getDigit(12345, 1); // 4
getDigit(12345, 2); // 3
getDigit(12345, 3); // 2
getDigit(12345, 4); // 1
getDigit(12345, 5); // 0
```

### 2️⃣ `digitCount(num)` – Counts the number of digits in a number

```js
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

digitCount(1); // 1
digitCount(25); // 2
digitCount(314); // 3
```

### 3️⃣ `mostDigits(nums)` – Finds the largest number of digits in an array

```js
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

mostDigits([1234, 56, 7]); // 4
mostDigits([1, 1, 11111, 1]); // 5
mostDigits([12, 34, 56, 78]); // 2
```

---

## ⏳ Radix Sort Time Complexity

| Complexity Type         | Time Complexity |
| ----------------------- | --------------- |
| ⚡ **Best Case**        | O(nk)           |
| 🔥 **Average Case**     | O(nk)           |
| 🛑 **Worst Case**       | O(nk)           |
| 💾 **Space Complexity** | O(n + k)        |

📝 **Where:**

- `n` = Length of the array 📏
- `k` = Number of digits (average) 🔢

✅ **Radix Sort is highly efficient** when `k` is small compared to `n`, making it an excellent choice for sorting numbers quickly! 🔥⚡
