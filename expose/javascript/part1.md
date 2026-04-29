# Part 1: Variable Scope (var, let, const)

## Question 1: What is printed by line 9? If the code returns an error, explain why.

**Answer:** The code prints `values added: 20`

---

## Question 2: What is printed by line 13? If the code returns an error, explain why.

**Answer:** The code prints `final result: 20`

---

## Question 3: Why should you not use var? Explain why.

**Answer:** You should avoid using `var` because `let` and `const` provide a better block scope which in turn keeps variables from leaking out their intended scope, it also allows for code to be easier to maintain. 


---

## Question 4: What is printed by line 9? If the code returns an error, explain why.

**Answer:** The code prints `values added: 20`

**Explanation:** When `sumValues(10, 10, true)` is called with the `let` keyword, line 5 declares `let result = 0` inside the if block. Then line 7 assigns `result = num1 + num2 = 20`. Line 9 executes and logs "values added: " followed by the value of `result`, which is 20. No error occurs because line 9 is still within the if block scope where `result` is accessible.

---

## Question 5: What is printed by line 13? If the code returns an error, explain why.

**Answer:** **The code returns a ReferenceError**: `result is not defined`

**Explanation:** The difference between `let` and `var` is displayed pretty well here. While `var` has a function scope, `let` has a **block scope** .

---

## Question 6: What is printed by line 9? If the code returns an error, explain why.

**Answer:** **The code returns a TypeError**: `Assignment to constant variable.`

---

## Question 7: What is printed by line 13? If the code returns an error, explain why.

**Answer:** **The code returns a TypeError**: `Assignment to constant variable.`
