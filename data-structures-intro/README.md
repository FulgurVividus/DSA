# 📚 Data Structures

## 📌 What Do They Do?

Data structures are **collections of values**, the **relationships among them**, and the **functions or operations** that can be applied to the data.

## 🤔 Why So Many?

Different data structures **excel at different tasks**:

- Some are highly **specialized** for specific problems.
- Others, like **arrays**, are more **general-purpose**.

## 🎯 Why Should You Care?

- As a **developer**, you'll inevitably need to use them.
- You've **already used** many of them without realizing it!
- And of course... **coding interviews** 👀

---

## 🚀 There is No "Best" Data Structure

Each structure shines in **different scenarios**:

| **Use Case**                                                                         | **Best Data Structure** |
| ------------------------------------------------------------------------------------ | ----------------------- |
| 🌍 Working with **map/location data**?                                               | **Graph** 📍            |
| 📜 Need an **ordered list** with fast **inserts/removals** at the beginning and end? | **Linked List** 🔗      |
| 🌐 Web scraping **nested HTML**?                                                     | **Tree** 🌳             |
| ⏳ Need to write a **scheduler**?                                                    | **Binary Heap** 🏗️      |

---

## 🏗️ What is a Class?

A **blueprint** for creating objects with **pre-defined properties** and **methods**.

### ❓ Does JavaScript Really Have Them?

**Ehh... not really.** JavaScript uses **prototypes**, but ES6 introduced **class syntax** to make things cleaner.

### 🧐 Why Learn This?

We’ll be implementing **data structures as classes!**

---

## 🛠️ How We'll Use Classes

```js
class DataStructure {
  constructor() {
    // What default properties should it have?
  }
  someInstanceMethod() {
    // What should each object created from this class be able to do?
  }
}
```

We will be using **constructors** and **instance methods** a lot! 🚀

❌ **We will almost never use static methods.**

---

## ⚠️ One Gotcha with `this`

Inside all **instance methods** and the **constructor**, the keyword **`this`** refers to **the object created from that class** (also known as an **instance**).
