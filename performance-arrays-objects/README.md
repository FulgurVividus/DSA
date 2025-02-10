# 🚀 Built-in Data Structures & Big O Notation

Understanding **Objects** & **Arrays** through the lens of **Big O Notation** 📊

---

## 🏗️ When to Use Objects

- ✔️ When you **don't need order** 📌
- ✔️ When you **need fast access, insertion, and removal** ⚡

### ⏳ Big O of Objects

| Operation | Complexity  |
| --------- | ----------- |
| Insertion | **O(1)** ✅ |
| Removal   | **O(1)** ✅ |
| Searching | **O(N)** 🔍 |
| Access    | **O(1)** ✅ |

📌 **Objects are excellent when order is not required!**

### ⚡ Big O of Object Methods

| Method             | Complexity  |
| ------------------ | ----------- |
| `Object.keys()`    | **O(N)** 🔍 |
| `Object.values()`  | **O(N)** 🔍 |
| `Object.entries()` | **O(N)** 🔍 |
| `hasOwnProperty()` | **O(1)** ✅ |

---

## 📋 When to Use Arrays

- ✔️ When you **need order** 📊
- ✔️ When you **need fast access, insertion, and removal** (sort of... 🤔)

### ⏳ Big O of Arrays

| Operation | Complexity        |
| --------- | ----------------- |
| Insertion | **Depends...** 🤷‍♂️ |
| Removal   | **Depends...** 🤷‍♂️ |
| Searching | **O(N)** 🔍       |
| Access    | **O(1)** ✅       |

### 🔥 Big O of Array Operations

| Operation                        | Complexity           |
| -------------------------------- | -------------------- |
| `push()`                         | **O(1)** ✅          |
| `pop()`                          | **O(1)** ✅          |
| `shift()`                        | **O(N)** ⚠️          |
| `unshift()`                      | **O(N)** ⚠️          |
| `concat()`                       | **O(N)** 🔄          |
| `slice()`                        | **O(N)** 🔪          |
| `splice()`                       | **O(N)** ✂️          |
| `sort()`                         | **O(N \* log N)** 🔄 |
| `forEach/map/filter/reduce/etc.` | **O(N)** 🔄          |

---

### ⚠️ Limitations of Arrays

🚨 **Inserting at the beginning** is not as efficient as it seems! There are **better data structures** for that! 🛠️

---

## 🎯 Summary

- **Use Objects** when order **doesn't matter** and you need **quick access**.
- **Use Arrays** when **order matters** and you're working with **sequential data**.
