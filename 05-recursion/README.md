# 🔄 Recursion: The Art of Self-Calling Functions

## 🔍 What is Recursion?

Recursion is a **process** where a function **calls itself** until a certain condition is met.

---

## 🛠 How Recursive Functions Work

✅ **Invoke** the same function with a **different input** until you reach the **Base Case**!

### 🛑 Base Case

- The condition **when recursion stops**.
- **Most important** concept in recursion!

### 🔄 Two Essential Parts of a Recursive Function:

- 1️⃣ **Base Case** (Stopping Condition) 🛑
- 2️⃣ **Different Input** (Progress Toward the Base Case) 🔽

---

## ⚠️ Where Things Go Wrong

- ❌ No base case → **Infinite recursion** (Stack Overflow!) 💥
- ❌ Forgetting to return a value 🫠
- ❌ Returning the wrong thing 🤦‍♂️

---

## 🏗️ Helper Method Recursion (Pattern)

A helper function **inside another function** to maintain state.

```js
function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    if (helperInput <= 0) return; // Base case
    outerScopedVariable.push(helperInput);
    helper(helperInput - 1); // Recursive call with different input
  }

  helper(input);
  return outerScopedVariable;
}

console.log(outer(5)); // [5, 4, 3, 2, 1]
```

---

## ✨ Pure Recursion Tips

- 🟢 **For Arrays** → Use `.slice()`, spread `[...]`, or `.concat()` to **avoid mutation**.
- 🟢 **For Strings** → Use `.slice()`, `.substr()`, or `.substring()` since **strings are immutable**.
- 🟢 **For Objects** → Use `Object.assign({}, obj)` or `{ ...obj }` to **copy objects**.

---

## 📏 Measuring Recursion in Big O

- 📌 **Time Complexity** → Count **recursive calls** relative to input size.
- 📌 **Space Complexity** → Count **max function calls** in the **call stack** (since each call requires memory).
