JavaScript Variables Lab
---

## Objectives

- Practice using the `const` and `let` variables in JavaScript

## Instructions

In this lab, you'll need to declare some variables using `const` and `let`.

As usual, start by running the specs and reading the results.

Remember the workflow:

1. Run `learn-test`.

2. Read the errors; vocalize what they're asking you to do.

3. Write code; repeat steps 1 and 2 often until a test passes.

4. Repeat as needed for further tests.

5. Run `learnsubmit` when finished!


## Working Through The Problems

If you open up `test/indexTest.js`, you will see the tasks in front of you.

+ `companyName` - Inside the `test/indexTest`, look inside of the word `describe` where the tests are trying to indicate that this test is describing the `companyName` variable.  The `it` word that comes afterwords, tells us the features of `companyName`.  In the first `it` function call, it says that `it` (companyName) `is set as Scuber`.  In the next line, you can see that the test checks to make sure this occurs by seeing if `companyName` equals `Scuber`.  So this means that you need to go to your `index.js` file and declare a variable named `companyName` and set it equal to `Scuber`.  Once you do that, if `learn-test` is running, you will see the first test in this lab as passing.  

In the next `it` function call, we are still describing `companyName`.  This time, it says it `raises error if the companyName is changed`. The next line of code tests this.  It's ok if some of the code in that line are confusing.  Just know that the code attempts to change `companyName` to a different value, and that this reassignment to throw an error.  So you need to make sure that you are using the correct variable type such that reassigning the variable would throw an error.

+ `mostProfitableNeighborhood` - Here we need to declare another variable, `mostProfitableNeighborhood` and assign it to `Chelsea`.  In the next `it` function call, you can see that our tests ensure that `mostProfitableNeighborhood` does not throw an error when reassigned.  So you need to make sure that you are using the correct variable type such that reassigning the `mostProfitableNeighborhood` would not throw an error.

+ `companyCeo` - Here, we are getting more practice with declaring variables.  Once again, a reassignment should not throw an error.  

## Resources

- [MDN: Let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN: Const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

<p class='util--hide'>View <a href='https://learn.co/lessons/js-basics-variables-lab'>Javascript Variables Lab</a> on Learn.co and start learning to code for free.</p>
