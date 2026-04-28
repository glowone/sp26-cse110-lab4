# Part 2: Variable Scope in Loops

## Question 1: What will happen at line 12 and why? If the code causes an error, explain why.

**Answer:** The code prints `3`

**Explanation:** Line 12 executes `console.log(i);` and prints the value of `i`, which is `3`.

Here's why: The variable `i` is declared with `var` in the for loop initialization (line 6). Because `var` has **function scope** rather than block scope, the variable `i` is accessible outside of the for loop throughout the entire function. 

When the function is called with `discountPrices([100, 200, 300], 0.5);`:
- The array has 3 elements, so the loop iterates with `i = 0`, `i = 1`, and `i = 2`
- After the last iteration, `i` is incremented to `3`
- The condition `i < prices.length` (which is `3 < 3`) becomes false, so the loop exits
- At this point, `i` still has the value `3` in the function scope

Therefore, line 12 prints `3` - not an error, but a demonstration of how `var` leaks out of the loop block scope. This is another reason to prefer `let` or `const`, as they would keep `i` confined to the loop block.

---

## Question 2: What will happen at line 13 and why? If the code causes an error, explain why.

**Answer:** The code prints `150`

**Explanation:** Line 13 executes `console.log(discountedPrice);` and prints the value of `discountedPrice`, which is `150`.

Similar to the previous question, `discountedPrice` is declared with `var` on line 7 inside the for loop. Because `var` has **function scope**, the variable remains accessible outside the loop and retains the value from the last iteration.

When the function is called with `discountPrices([100, 200, 300], 0.5);`:
- Loop iteration 0: `discountedPrice = 100 * (1 - 0.5) = 50`
- Loop iteration 1: `discountedPrice = 200 * (1 - 0.5) = 100`
- Loop iteration 2: `discountedPrice = 300 * (1 - 0.5) = 150`
- After the loop exits, `discountedPrice` still has the value `150` from the last iteration

Therefore, line 13 prints `150`. This again demonstrates how `var` variables leak out of block scope and can lead to unexpected behavior. Using `let` or `const` would prevent this variable from being accessible outside the loop, making the code safer and more predictable.

---

## Question 3: What will happen at line 14 and why? If the code causes an error, explain why.

**Answer:** The code prints `150`

**Explanation:** Line 14 executes `console.log(finalPrice);` and prints the value of `finalPrice`, which is `150`.

The variable `finalPrice` is declared with `var` on line 4 at the beginning of the function with an initial value of `0`. Because `var` has **function scope**, it is accessible throughout the entire function, including after the loop.

Inside the loop (line 8), `finalPrice` is reassigned each iteration with the rounded discount price:
- Loop iteration 0: `finalPrice = Math.round(50 * 100) / 100 = 50.00`
- Loop iteration 1: `finalPrice = Math.round(100 * 100) / 100 = 100.00`
- Loop iteration 2: `finalPrice = Math.round(150 * 100) / 100 = 150.00`

After the loop exits, `finalPrice` retains the value from the last iteration, which is `150`.

Therefore, line 14 prints `150`. This is the final example of how `var` persists with its last assigned value from the loop. All three questions (lines 12, 13, and 14) demonstrate the same problem: `var` variables leak out of loop block scope and retain their final iteration values, making code unpredictable and error-prone.

---

## Question 4: What will this function return? Give a brief explanation why. If the code causes an error, explain why.

**Answer:** The function returns `[50, 100, 150]`

**Explanation:** The function returns the `discounted` array on line 16, which was initialized as an empty array on line 3.

When the function is called with `discountPrices([100, 200, 300], 0.5);`, the loop pushes each discounted price to the `discounted` array:
- Loop iteration 0: `finalPrice = Math.round(50 * 100) / 100 = 50`, `discounted = [50]`
- Loop iteration 1: `finalPrice = Math.round(100 * 100) / 100 = 100`, `discounted = [50, 100]`
- Loop iteration 2: `finalPrice = Math.round(150 * 100) / 100 = 150`, `discounted = [50, 100, 150]`

After the loop completes, the function returns the fully populated `discounted` array: `[50, 100, 150]`.

No error occurs. The function works as intended, returning an array of discounted prices. This demonstrates that despite all the scope issues with `var` (which we saw in the previous questions), the core functionality of the function still works correctly—it calculates discounted prices and returns them in an array.

---

## Question 5: What will happen at line 12 and why? If the code causes an error, explain why.

**Answer:** **The code returns a ReferenceError**: `i is not defined`

**Explanation:** This is a crucial difference between `let` and `var`. On line 6, the variable `i` is declared with `let` inside the for loop: `for (let i = 0; i < prices.length; i++)`. Because `let` has **block scope**, the variable `i` only exists within the for loop block (lines 6-10).

Once the loop exits at line 10, the variable `i` goes out of scope and is no longer accessible. When line 12 tries to execute `console.log(i);`, it throws a **ReferenceError: i is not defined** because `i` no longer exists in the function scope.

**Comparison to Question 4 (with `var`):** In the previous question with `var`, line 12 printed `3` because `var` has function scope. With `let`, line 12 throws an error because `let` respects block scope boundaries. This is the desired behavior—it prevents accidental access to loop variables outside the loop, making the code safer and more predictable. This is another key reason why `let` is preferred over `var`.

---

## Question 6: What will happen at line 13 and why? If the code causes an error, explain why.

**Answer:** **The code returns a ReferenceError**: `discountedPrice is not defined`

**Explanation:** On line 7, `discountedPrice` is declared with `let` inside the for loop: `let discountedPrice = prices[i] * (1 - discount);`. Because `let` has **block scope**, the variable `discountedPrice` only exists within the for loop block (lines 6-10).

Once the loop exits at line 10, the variable `discountedPrice` goes out of scope and is no longer accessible. When line 13 tries to execute `console.log(discountedPrice);`, it throws a **ReferenceError: discountedPrice is not defined** because `discountedPrice` no longer exists in the function scope.

**Comparison to Question 2 (with `var`):** In the previous question with `var`, line 13 printed `150` because `var` has function scope and persists outside the loop. With `let`, line 13 throws an error because `let` respects block scope boundaries. Once again, this demonstrates why `let` is superior to `var`—it prevents variables from accidentally being used outside their intended scope, making the code more reliable and maintainable.

---

## Question 7: What will happen at line 14 and why? If the code causes an error, explain why.

**Answer:** The code prints `150`

**Explanation:** On line 4, `finalPrice` is declared with `let` at the **function level**: `let finalPrice = 0;`. Because this variable is declared at the function level (not inside the loop), it is accessible throughout the entire function, even after the loop exits.

Inside the loop (line 8), `finalPrice` is reassigned each iteration:
- Loop iteration 0: `finalPrice = Math.round(50 * 100) / 100 = 50`
- Loop iteration 1: `finalPrice = Math.round(100 * 100) / 100 = 100`
- Loop iteration 2: `finalPrice = Math.round(150 * 100) / 100 = 150`

After the loop exits, `finalPrice` retains the value from the last iteration, which is `150`. Since it was declared at the function level with `let`, it remains accessible at line 14.

**Key Distinction:** This shows an important distinction with `let`: variables declared at the function level are accessible throughout the function, just like with `var`. The key difference is that `let` prevents variables declared inside blocks (like loops or if statements) from leaking out, while variables declared at function level are naturally accessible throughout. This is the correct and safe behavior—it gives developers control over scope while preventing unintended variable leakage.

---

## Question 8: What will this function return? Give a brief explanation. If the code causes an error, explain why.

**Answer:** The function returns `[50, 100, 150]`

**Explanation:** The function returns the `discounted` array on line 16, which was initialized as an empty array on line 3.

When the function is called with `discountPrices([100, 200, 300], 0.5);`, the loop pushes each discounted price to the `discounted` array:
- Loop iteration 0: `discountedPrice = 100 * (1 - 0.5) = 50`, `finalPrice = 50`, pushed to array
- Loop iteration 1: `discountedPrice = 200 * (1 - 0.5) = 100`, `finalPrice = 100`, pushed to array
- Loop iteration 2: `discountedPrice = 300 * (1 - 0.5) = 150`, `finalPrice = 150`, pushed to array

After the loop completes, the function returns the fully populated `discounted` array: `[50, 100, 150]`.

**Comparison:** Despite the different scope behaviors with `var` vs `let` shown in Questions 1-7 (which affected whether variables were accessible outside the loop), the core functionality of the function is identical in both versions. The function correctly calculates and returns the array of discounted prices. This demonstrates that `let` is a safer alternative to `var` without changing the intended behavior of the code—it just prevents accidental variable leakage outside the intended scope.

---

## Question 9: What will happen at line 11 and why? If the code causes an error, explain why.

**Answer:** **The code returns a ReferenceError**: `i is not defined`

**Explanation:** On line 6, the variable `i` is declared with `let` inside the for loop: `for (let i = 0; i < length; i++)`. Because `let` has **block scope**, the variable `i` only exists within the for loop block (lines 6-9).

Once the loop exits at line 9, the variable `i` goes out of scope and is no longer accessible. When line 11 tries to execute `console.log(i);`, it throws a **ReferenceError: i is not defined** because `i` no longer exists in the function scope.

**Key Insight:** This is the desired and safe behavior. By using `let` instead of `var`, we prevent the loop variable `i` from persisting outside the loop where it shouldn't be accessible. This is especially important in nested loops or complex functions where unintended access to loop variables can cause bugs. Using `const` would be even safer here, as it would prevent accidental reassignment: `for (const i = 0; i < length; i++)` (though this specific case doesn't work with `const` since `i` needs to be incremented).

---

## Question 10: What will happen at line 12 and why? If the code causes an error, explain why.

**Answer:** The code prints `3`

**Explanation:** On line 4, `length` is declared with `const` at the **function level**: `const length = prices.length;`. Because this variable is declared at the function level (not inside the loop), it is accessible throughout the entire function.

When the function is called with `discountPrices([100, 200, 300], 0.5);`, the `prices` array has 3 elements, so `length = 3`.

After the loop exits, line 12 executes `console.log(length);` and prints `3` because `length` is still accessible and retains the value it was assigned on line 4.

**Key Distinction with `const`:** Like `let`, `const` has block scope. However, since `length` is declared at the function level (not inside a block like the for loop), it remains accessible throughout the function. The key advantage of using `const` here is that it prevents accidental reassignment—`length` cannot be modified after initialization, which is exactly what we want for this variable. This makes the code more predictable and less error-prone than using `let` or `var`.

---

## Question 11: What will this function return? Give a brief explanation. If the code causes an error, explain why.

**Answer:** The function returns `[50, 100, 150]`

**Explanation:** The function returns the `discounted` array on line 14, which was initialized as an empty array on line 3.

When the function is called with `discountPrices([100, 200, 300], 0.5);`, the loop pushes each discounted price to the `discounted` array:
- Loop iteration 0: `discountedPrice = 100 * (1 - 0.5) = 50`, `discounted = [50]`
- Loop iteration 1: `discountedPrice = 200 * (1 - 0.5) = 100`, `discounted = [50, 100]`
- Loop iteration 2: `discountedPrice = 300 * (1 - 0.5) = 150`, `discounted = [50, 100, 150]`

After the loop completes, the function returns the fully populated `discounted` array: `[50, 100, 150]`.

**Summary:** This version of the function demonstrates best practices by using `const` and `let` instead of `var`. The code correctly calculates and returns the array of discounted prices, with proper variable scoping that prevents accidental variable leakage. All variables are declared at appropriate scope levels:
- `discounted` and `length`: function-level (accessible throughout)
- `i`: loop-level with `let` (only accessible inside the loop)
- `discountedPrice`: loop-level with `const` (only accessible inside the loop, cannot be reassigned)

This is the safest and most maintainable version of the function.

---

## Part 2 Continued: Object Property Access

Given the following object:
```javascript
let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() { console.log('Hello!'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};
```

### 1. Accessing the value of the name property in the student object

**Notation:** `student.name`

**Result:** `'Sarah'`

**Explanation:** Using dot notation, we access the `name` property directly from the student object.

---

### 2. Accessing the value of the Grad Year property in the student object

**Notation:** `student['Grad Year']`

**Result:** `'2022'`

**Explanation:** Because the property name contains a space (`'Grad Year'`), we must use bracket notation instead of dot notation. Bracket notation allows us to access properties with special characters or spaces.

---

### 3. Calling the function for the greeting property in the student object

**Notation:** `student.greeting()`

**Result:** Logs `'Hello!'` to the console

**Explanation:** The `greeting` property contains a function. We access it with dot notation and add parentheses `()` to invoke/call the function.

---

### 4. Accessing the name property of the object in the Favorite Teacher property in student

**Notation:** `student['Favorite Teacher'].name`

**Result:** `'Thomas Powell'`

**Explanation:** This is nested property access. First, we use bracket notation to access the `'Favorite Teacher'` object (because of the space in the property name). Then we use dot notation to access the `name` property of that nested object.

---

### 5. Access index zero in the array of the courseLoad property of the student object

**Notation:** `student.courseLoad[0]`

**Result:** `'CSE 110'`

**Explanation:** The `courseLoad` property is an array. We access it using dot notation (`student.courseLoad`), then use bracket notation with the index `[0]` to access the first element in the array.

---

## Part 2 Continued: Basic Operators & Type Conversion

### Arithmetic Operations

#### 1. `'3' + 2`

**Output:** `'32'`

**Explanation:** When adding a string and a number with the `+` operator, JavaScript converts the number to a string and concatenates them. The string `'3'` and number `2` become `'3'` and `'2'`, resulting in `'32'`.

---

#### 2. `'3' - 2`

**Output:** `1`

**Explanation:** The `-` operator is used for subtraction, not string concatenation. JavaScript converts the string `'3'` to the number `3`, then performs the arithmetic operation: `3 - 2 = 1`.

---

#### 3. `3 + null`

**Output:** `3`

**Explanation:** `null` is converted to the number `0` in arithmetic operations. Therefore: `3 + 0 = 3`.

---

#### 4. `'3' + null`

**Output:** `'3null'`

**Explanation:** The `+` operator triggers string concatenation when either operand is a string. `null` is converted to the string `'null'`, so the result is `'3' + 'null' = '3null'`.

---

#### 5. `true + 3`

**Output:** `4`

**Explanation:** The boolean `true` is converted to the number `1` in arithmetic operations. Therefore: `1 + 3 = 4`.

---

#### 6. `false + null`

**Output:** `0`

**Explanation:** Both `false` and `null` are converted to `0` in arithmetic operations. Therefore: `0 + 0 = 0`.

---

#### 7. `'3' + undefined`

**Output:** `'3undefined'`

**Explanation:** The `+` operator triggers string concatenation when either operand is a string. `undefined` is converted to the string `'undefined'`, so the result is `'3' + 'undefined' = '3undefined'`.

---

#### 8. `'3' - undefined`

**Output:** `NaN`

**Explanation:** The `-` operator is used for subtraction. JavaScript attempts to convert `'3'` to `3` and `undefined` to a number. However, `undefined` cannot be meaningfully converted to a number, resulting in `NaN` (Not a Number). The operation becomes `3 - NaN = NaN`.

---

### Comparison Operations

#### 1. `'2' > 1`

**Output:** `true`

**Explanation:** When comparing a string and a number, JavaScript converts the string to a number. `'2'` becomes `2`, so the comparison is `2 > 1`, which is `true`.

---

#### 2. `'2' < '12'`

**Output:** `false`

**Explanation:** When comparing two strings, JavaScript performs a lexicographical (alphabetical) comparison, not a numerical one. Comparing character by character: `'2'` vs `'1'`. Since `'2'` comes after `'1'` in ASCII, `'2' < '12'` is `false`.

---

#### 3. `2 == '2'`

**Output:** `true`

**Explanation:** The `==` operator performs loose equality comparison with type coercion. The string `'2'` is converted to the number `2`, so the comparison becomes `2 == 2`, which is `true`.

---

#### 4. `2 === '2'`

**Output:** `false`

**Explanation:** The `===` operator performs strict equality comparison without type coercion. It checks both value and type. `2` (number) is not strictly equal to `'2'` (string) because they have different types, so the result is `false`.

---

#### 5. `true == 2`

**Output:** `false`

**Explanation:** The `==` operator uses type coercion. `true` is converted to `1`, not `2`. Therefore: `1 == 2` is `false`.

---

#### 6. `true === Boolean(2)`

**Output:** `true`

**Explanation:** The `===` operator performs strict comparison. `Boolean(2)` converts the number `2` to a boolean. Since `2` is a truthy value, `Boolean(2)` returns `true`. Therefore: `true === true` is `true`.

---

### Difference between `==` and `===`

**`==` (Loose Equality):**
- Compares values with type coercion
- JavaScript automatically converts types to compare values
- Example: `2 == '2'` is `true` because the string is converted to a number
- Less predictable and can cause unexpected results

**`===` (Strict Equality):**
- Compares both value AND type without any coercion
- Both the value and the data type must match exactly
- Example: `2 === '2'` is `false` because one is a number and one is a string
- More predictable and is the recommended approach

**Best Practice:** Use `===` and `!==` in your code instead of `==` and `!=` to avoid unexpected type coercion bugs and make your code more predictable and maintainable.

---

## Part 2 Continued: Callbacks and Higher-Order Functions

### Question 17: Callback Function Result

Given the following code:
```javascript
function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    return newArr;
}

function doSomething(num) {
    return num * 2;
}

modifyArray([1,2,3], doSomething);
```

**Result:** `[2, 4, 6]`

**Walkthrough:**

1. `modifyArray([1,2,3], doSomething)` is called
   - `array = [1, 2, 3]`
   - `callback = doSomething` (the function is passed as a parameter)

2. Inside `modifyArray`, `newArr = []` is initialized

3. **First iteration (i=0):**
   - `callback(array[0])` → `doSomething(1)` → returns `1 * 2 = 2`
   - `newArr.push(2)` → `newArr = [2]`

4. **Second iteration (i=1):**
   - `callback(array[1])` → `doSomething(2)` → returns `2 * 2 = 4`
   - `newArr.push(4)` → `newArr = [2, 4]`

5. **Third iteration (i=2):**
   - `callback(array[2])` → `doSomething(3)` → returns `3 * 2 = 6`
   - `newArr.push(6)` → `newArr = [2, 4, 6]`

6. Loop ends and `return newArr` returns `[2, 4, 6]`

**Key Concept - Callbacks:**

A **callback function** is a function that is passed as an argument to another function, and is executed within that function. In this example, `doSomething` is a callback function passed to `modifyArray`.

**Advantages of Callbacks:**
- Allows code reusability: `modifyArray` can work with any callback function
- Enables functional programming patterns
- Essential for asynchronous operations in JavaScript

**Example:** You could pass a different callback to `modifyArray`:
```javascript
function addOne(num) {
    return num + 1;
}
modifyArray([1,2,3], addOne); // Returns [2, 3, 4]
```

Callbacks are heavily used in frontend JavaScript development for event handling, asynchronous operations, and functional programming. You're encouraged to experiment with creating different callback functions!

---

## Part 2 Continued: Understanding the Event Loop and setTimeout

### Question 18: setTimeout and Asynchronous Execution

Given the following code:
```javascript
function printNums() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
}

printNums();
```

**Output:**
```
1
4
3
2
```

**Explanation - How the Event Loop Works:**

This code demonstrates the JavaScript event loop and how asynchronous operations are handled. Here's the step-by-step execution:

1. **Call Stack (Synchronous):**
   - `console.log(1)` executes immediately → prints `1`
   - `setTimeout(function() { console.log(2); }, 1000)` is registered (but not executed)
   - `setTimeout(function() { console.log(3); }, 0)` is registered (but not executed)
   - `console.log(4)` executes immediately → prints `4`

2. **Event Loop (Asynchronous):**
   - After all synchronous code completes, the event loop checks the callback queue
   - The `setTimeout` with `0ms` delay has finished waiting and its callback is moved to the queue
   - `console.log(3)` executes → prints `3`
   - After approximately 1000ms, the first `setTimeout` callback finishes waiting
   - `console.log(2)` executes → prints `2`

**Key Concepts:**

- **Synchronous Code:** `console.log(1)` and `console.log(4)` execute immediately in the order they appear
- **Asynchronous Code:** `setTimeout` callbacks don't execute immediately; they are scheduled for later
- **Event Loop:** JavaScript has a single-threaded event loop that processes synchronous code first, then checks the callback queue for asynchronous code
- **setTimeout(callback, 0):** Even with `0ms` delay, the callback doesn't execute immediately—it must wait for the call stack to clear

**Important Note:** The `0` in `setTimeout(..., 0)` doesn't mean "execute immediately." It means "execute as soon as possible after the current synchronous code finishes." This is why `3` prints before `2`, even though it was scheduled after.


