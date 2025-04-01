# 🚀 Dynamic Programming (A Light Introduction)

## 🤔 What is Dynamic Programming (DP)?

> "A method for solving complex problems by breaking them into simpler subproblems, solving each subproblem once, and storing their solutions to avoid redundant work."

### 🔥 When Can We Use DP?

DP is only effective if the problem has these two properties:

1. **Optimal Substructure** 🏗️

   - A problem exhibits optimal substructure if an optimal solution can be built from optimal solutions of its subproblems.

2. **Overlapping Subproblems** 🔄
   - If a problem can be broken down into smaller subproblems that are solved multiple times, then it has overlapping subproblems.

## ⚡ Key DP Techniques

### 📌 Memoization (Top-Down Approach)

> Storing the results of expensive function calls and returning the cached result when the same inputs occur again.

- Uses **recursion** + caching 📝
- Solves only necessary subproblems ✅
- Ideal for problems with deep recursion trees 🌳

### 📌 Tabulation (Bottom-Up Approach)

> Storing results in a structured table (like an array) and building solutions iteratively.

- Uses **iteration** 🔄 instead of recursion
- Often results in better **space complexity** 📏
- Efficient for **iterative** DP problems 🚀

## 🤓 Recap

- ✔️ DP breaks down a problem into smaller, reusable subproblems 🧩
- ✔️ Requires **optimal substructure** and **overlapping subproblems** 🔗
- ✔️ **Memoization** (top-down) and **Tabulation** (bottom-up) are two primary techniques ⚖️
- ✔️ **Greedy Algorithms** are more aggressive but not always optimal 😈
- ✔️ **Backtracking** is useful when solving problems with restrictive conditions 🔄
