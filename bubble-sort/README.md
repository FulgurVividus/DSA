# 📌 Sorting in JavaScript

## 🔍 What is Sorting?

Sorting is the process of **rearranging items** in a collection (e.g., an array) so that they follow a specific order.

### 🎯 Examples:

- Sorting numbers from **smallest to largest** 🔢
- Sorting names **alphabetically** 🔤
- Sorting movies based on **release year** 🎬
- Sorting movies based on **revenue** 💰

---

## ❓ Why Learn Sorting?

- ✅ Sorting is a **common task**, so it's good to understand how it works.
- ✅ There are **many different sorting techniques**, each with its own pros and cons.
- ✅ Sorting has **quirks**, so knowing how to handle them is crucial.

---

## 🚀 JavaScript's Built-in `.sort()` Method

Yes, JavaScript **has a built-in sorting method**... but it doesn't always work as expected! 🤯

```js
["Steele", "Colt", "Data Structures", "Algorithms"].sort();
// [ "Algorithms", "Colt", "Data Structures", "Steele" ] ✅
```

```js
[6, 4, 15, 10].sort();
// [ 10, 15, 4, 6 ] ❌ (Not what we expected!)
```

### 🛠 Why does this happen?

By default, JavaScript **sorts elements as strings**, not numbers. To fix this, we need a **comparator function**.

---

## 📝 Telling JavaScript How to Sort

JavaScript's `.sort()` method **accepts a comparator function**, which defines the sorting order.

### 🔢 Sorting Numbers Correctly:

```js
function numberCompare(num1, num2) {
  return num1 - num2; // Ascending order
}

[6, 4, 15, 10].sort(numberCompare);
// [ 4, 6, 10, 15 ] ✅
```

### 🔤 Sorting by String Length:

```js
function compareByLen(str1, str2) {
  return str1.length - str2.length; // Shortest to longest
}

["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen);
// [ "Colt", "Steele", "Algorithms", "Data Structures" ] ✅
```

---

## 🌊 Bubble Sort

A **sorting algorithm** where the **largest values bubble up** to the top! 🏔️

### 🔄 Before We Sort, We Must Swap!

Many sorting algorithms involve swapping elements to put them in order.

#### 🔁 Swap Function (ES5 Version)

```js
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
```

#### ⚡ Swap Function (ES6 Version)

```js
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
```
