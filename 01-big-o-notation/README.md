# Big O Notation 🚀

## What is Big O Notation? 🤔

Big O Notation is a way to describe how the performance (time or space) of an algorithm changes as the input size grows.
In simple terms, it tells us: **"How does the algorithm scale?"** 📈

- It helps us **measure efficiency** 📏.
- Focuses on **worst-case scenarios** 🚨.
- Describes **time complexity** (execution speed) and **space complexity** (memory usage).

## Common Big O Complexities 🔥

| Big O      | Name             | Example            |
| ---------- | ---------------- | ------------------ |
| O(1)       | Constant Time    | Array indexing     |
| O(log n)   | Logarithmic Time | Binary search      |
| O(n)       | Linear Time      | Loop through array |
| O(n log n) | Quasilinear Time | Merge Sort         |
| O(n²)      | Quadratic Time   | Nested loops       |
| O(2ⁿ)      | Exponential Time | Fibonacci (naïve)  |
| O(n!)      | Factorial Time   | Traveling Salesman |

---

## Time Complexity 🧑‍💻

### 🟢 O(1) - Constant Time (Fastest ✅)

```js
function getFirstElement(arr) {
  return arr[0]; // Always takes the same time, regardless of array size
}
```

### 🟡 O(n) - Linear Time (Scales with Input Size 🏃)

```js
function printAllElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // Runs once per element
  }
}
```

### 🟠 O(n²) - Quadratic Time (Nested Loops! 😬)

```js
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]); // Nested loop makes it slow
    }
  }
}
```

### 🔴 O(2ⁿ) - Exponential Time (Terribly Slow 🐢)

```js
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursion grows exponentially
}
```

---

## Space Complexity 🧠

Space complexity measures the amount of **memory** an algorithm uses as input size grows. It includes:

- **Auxiliary space** (temporary variables, function calls, etc.)
- **Input space** (size of the input data itself)

### Space Complexity Examples 📦

### 🟢 O(1) - Constant Space (Uses fixed memory ✅)

```js
function sumTwoNumbers(a, b) {
  return a + b; // Only stores two numbers, so space is constant
}
```

### 🟡 O(n) - Linear Space (Scales with Input Size 📈)

```js
function createArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i); // Array grows with input size
  }
  return arr;
}
```

### 🟠 O(n) - Recursive Function (Stack Space 🏗️)

```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1); // Each call adds to the call stack
}
```

---

## Summary 🏁

✅ **O(1) is best** for both time and space <br>
⚠️ **Recursive algorithms can have high space complexity** due to call stack <br>
💡 **Optimize memory usage when possible**
