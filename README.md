## Description

In this assignment, you will be using ReactJS to create a **Hexadecimal Calculator**. This assignment is designed to help you practice creating **components** in React, and getting you all to think in terms of organizing your website/app into components and breaking it down into reusable parts.

---

### 1) Calculator Buttons & UI

```text
AS a USER 
WHEN I view the app
I SHOULD be presented with a clean user interface that represents a Hexadecimal Calculator
AND I SHOULD see buttons 0 - F for hexadecimal value input
AND I SHOULD see buttons "+", "-", "*", "/" for arithmetic operation input
AND I should see a "=" button to evaluate the current input
AND I should see a "Clear" button to clear out the current input
```

```text
AS a USER
WHEN I view the app
I SHOULD be presented with a clean user interface that represents a Hexadecimal Calculator
AND I SHOULD see an input display bar that shows the current input state of the calculator
```

### 2) Calculator Input State Functionality
```text
AS a USER
WHEN I INITIALLY interact with the app
I SHOULD have the value 0 as the initial state of my input
AND I SHOULD see this state being displayed
```

```text
AS a USER
WHEN I interact with the app
AND I click on any of the hexadecimal value input buttons
I SHOULD see my input state display update with the values I entered
```

```text
AS a USER
WHEN I interact with the app
AND I click on any of the arithmetic operation buttons
I SHOULD keep track of this arithmetic operation in my input state
AND I should perform this arithmetic operation between two successive input values
```

```text
AS a USER
WHEN I interact with the app
AND I click on the "=" button
I SHOULD evaluate my current input state
AND I should see the input display being updated with the evaluated value
```

```text
AS a USER
WHEN I interact with the app
AND I click on the "Clear" button
I SHOULD clear my current input state, and reset back to 0
AND I should see the input display being updated to this reset value.
```

### 3) Error Handling Input State
```text
AS a USER
WHEN I interact with the app
AND I perform an illegal arithmetic operation between to numbers
I SHOULD have my input state evaluate to an error value
AND I should see this error updated in the input state display
```

```text
AS a USER
WHEN I interact with the app
AND I perform an action that causes a number overflow (MAX/MIN)
I SHOULD have my input state evaluate to an error value
AND I should see this error updated in the input state display
```

### 4) Code Organizing
```text
AS a DEVELOPER
WHEN I checkout and navigate your source code
I SHOULD see the code organized in a logical manner
AND I should see all my component files listed in their own `components` directory
AND I should see all my styling files listed in their own `styles` directory
```
