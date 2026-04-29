# Lab 4 DevTools - Part 2: JavaScript Debugging

## Debugging the Sum Calculator Program

## Debugging Analysis

### What was the bug?

The bug was related to **type coercion** in JavaScript.

**Example:**
- Input 1: "2" (string)
- Input 2: "3" (string)
- Expected result: 5 (number)
- Actual result: "23" (string concatenation)

---

### How would you fix it?

The fix involves **converting the input strings to numbers** before performing the addition operation.

Using `parseInt()` or `parseFloat()`**
```javascript
const num1 = parseInt(document.getElementById('num1').value);
const num2 = parseInt(document.getElementById('num2').value);
const result = num1 + num2;
```

---

## Debugging Techniques Used

1. **Breakpoints:** 
2. **Watch Expressions:** 
3. **Step Through Code:** 
4. **Type Inspection:** 

---
