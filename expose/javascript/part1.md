# Part 1: Variable Scope (var, let, const)

## Question 1: What is printed by line 9? If the code returns an error, explain why.

**Answer:** The code prints `values added: 20`

**Explanation:** When `sumValues(10, 10, true)` is called, the `add` parameter is `true`, so the code enters the if block. Inside the if block, `result` is declared with `var result = 0` and then assigned `num1 + num2`, which equals `10 + 10 = 20`. Line 9 executes and logs "values added: " followed by the value of `result`, which is 20. No error occurs.

---

## Question 2: What is printed by line 13? If the code returns an error, explain why.

**Answer:** The code prints `final result: 20`

**Explanation:** This is where variable scope with `var` becomes important. Even though `result` was declared inside the if block (line 5), the `var` keyword has **function scope**, not block scope. This means `result` is hoisted to the function level and is accessible throughout the entire function. After the if block completes, line 13 can still access `result` because `var` declarations are function-scoped. Therefore, `result` still has the value 20 and prints `final result: 20`. No error occurs.

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

**Explanation:** The difference between `let` and `var` is displayed pretty wel here. While `var` has a function scope, `let` has a **block scope** .

---

## Question 6: What is printed by line 9? If the code returns an error, explain why.

**Answer:** **The code returns a TypeError**: `Assignment to constant variable.`

**Explanation:** When `sumValues(10, 10, true)` is called with the `const` keyword, line 5 declares `const result = 0`. However, line 7 attempts to reassign this variable with `result = num1 + num2` which throws a **TypeError** because `const` variables are constants and cannot be reassigned after initialization. Line 9 never executes. 

---

## Question 7: What is printed by line 13? If the code returns an error, explain why.

**Answer:** **The code returns a TypeError**: `Assignment to constant variable.`

**Explanation:** Since the error occurs on line 7 (attempting to reassign the `const` variable), the program halts execution so nothing is printed. 