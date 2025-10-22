# 🔗 Doubly Linked Lists

## What are Doubly Linked Lists? 🤔

A **Doubly Linked List (DLL)** is similar to a **Singly Linked List (SLL)**, but with a key difference:

- Each **node** contains **two pointers**:
  - **One** pointing to the **next node**
  - **One** pointing to the **previous node**

This additional pointer makes **traversal in both directions possible!** 🔄

---

## 🔍 Singly vs. Doubly Linked Lists

| Feature                | Singly Linked List 🟢        | Doubly Linked List 🟡               |
| ---------------------- | ---------------------------- | ----------------------------------- |
| **Memory Usage**       | Less ✅                      | More ❌ (Extra pointer required)    |
| **Traversal**          | Forward only ⏩              | Forward & Backward ⏪⏩             |
| **Insertion/Deletion** | Faster at head/tail 🚀       | More flexible for all operations 🔄 |
| **Use Cases**          | Simple dynamic structures ✅ | Complex data manipulations ✅✅     |

**More Memory = More Flexibility!** 📈

---

## 📊 Big O Notation

| Operation     | Time Complexity ⏳ |
| ------------- | ------------------ |
| **Insertion** | `O(1)` ⚡          |
| **Removal**   | `O(1)` ⚡          |
| **Searching** | `O(N)` 🔎          |
| **Access**    | `O(N)` 📜          |

**Fun Fact:** Searching can technically take `O(N/2)`, but in Big O notation, it's still `O(N)`. 🤓

---

## 🔥 RECAP!

- ✅ **Doubly Linked Lists** are like **Singly Linked Lists**, but with an **extra pointer** to the **previous node**.
- ✅ They are **faster** than SLLs when **searching** because they can move **both forward and backward**.
- ✅ **More memory is needed**, but in return, **operations become more flexible**.
- ✅ DLLs are commonly used in **complex data structures** (like LRU caches) where **bidirectional traversal** is useful.

---

🚀 **Doubly Linked Lists: More Power, More Flexibility!** 🔗⚡
