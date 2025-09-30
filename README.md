#### 1) What is the difference between var, let, and const?
---
**Var** is the old way to declare variables. It is function-scoped and can be redeclared and updated of the code. It is Avoid to using in modern code

**Let** is the modern way to declare variables that can change. It is block-scoped and can be updated but not redeclared in the same scope.

**const** is the modern way to declare constants that shouldn't change. It is block-scoped and cannot be updated or redeclared. Use it by default unless need to reassign the variable.

---

#### 2) What is the difference between map(), forEach(), and filter()? <br/>

---
**forEach()** loops over each element of an array and applies a function. It does not to return anything, so it is mainly used for side effects, such as logging or updating a value outside.

**map()** processes of each element and returns a new array. it is perfect for transforming data without changing the original array.

**filter()** works of each element and returns a new array of only those elements that meet a certain condition. It is used when you need to find a subset.

---


#### 3) What are arrow functions in ES6? <br/>

---

**Arrow functions** are a short and clean way to write functions. The big advantage is that they automatically inherit the 'this' value from the surrounding context, which is very convenient for callbacks or small operations.

---

#### 4) How does destructuring assignment work in ES6? <br/>

---

**Destructuring** can be extract values ​​from an array or object and assign them to variables in one line. It keeps the code neat and readable, because variables can be created directly by specifying the position of an array or the name of an object's property.

---

#### 5) Explain template literals in ES6. How are they different from string concatenation?

---
**Template literals** use backticks (``). It can directly place variables or expressions inside `${...}`. It allows to easily create multi-line strings and use inline calculations or function results.

**String concatenation** requires adding text and variables using quotes and "+". It can be large for multi-line strings or complex expressions

---