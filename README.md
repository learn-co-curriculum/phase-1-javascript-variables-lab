# JavaScript Variables Lab

## Problem Statement

We've covered a lot of JavaScript concepts, but now it's time to put the concepts in to practice. We'll start with variables.

## Objectives

1. Practice using the `const` and `let` variables in JavaScript

## Instructions

You might notice a few new things in this lesson that we haven't encountered
before. Don't worry, we'll walk you through them.

### Tests

When we want to run an experiment, we need to develop a hypothesis and we need
to test it. In programming, we run tests to verify that programs behave the way
we think they do. Tests help us identify bugs and judge how healthy our
applications are.

We use tests to describe the program's behavior, just as you would in a
professional coding environment, and we also use them as teaching tools. You are
in charge of getting the tests to pass.

### Structure

The structure of this lab — where its files and folders are located — looks
roughly like the following:

```
├── CONTRIBUTING.md
├── LICENSE.md
├── README.md
├── index.js
├── node_modules/
├── package.json
└── test
    └── indexTest.js
```

All labs will more or less have the same structure. (And non-lab lessons, for
that matter, will still have CONTRIBUTING.md, LICENSE.md, and README.md files.)

### Code Along

Open up `index.js` in your text editor. If you're using the Learn IDE, click the
blue "Open" button in the top right hand corner of the lesson. If you open up
that `js-basics-variables-lab/` directory, you'll see a list of files (along
with a `test/` directory). Click `index.js`, and it will open in the editor.

In `index.js`, you should see, well, nothing. We'll fix that soon.

Now open up `test/indexTest.js`. Hey, there's something! What's all of this
stuff doing?

**Note:** The `test/indexTest.js` has great info that we want to look at, but do
not edit this file otherwise you may have extra difficulty passing this lab.

A few lines down in the `test/indexTest.js` file you will see:

```js
describe('index.js', function () {
  // there's stuff in here, too
});
```

`describe` is a function provided by our test library, Mocha, and it's used to
hold our tests. After the word `describe` is information about our tests. Tests
are used as a way to document the behavior of a function to developers. For
example, the next word `describe` is followed by the word `companyName` name.
Here the test is telling us that the tests that come afterwards will be about
`companyName`. Then comes the word `it`, where you see the following:

```js
it('is set as Scuber', function () {
  // tests are here
});
```

This is telling us that the `companyName` should be set to `Scuber`. Finally,
filling in the missing part of the `it` code, we see:

```js
it('is set as Scuber', function () {
  expect(companyName).to.equal('Scuber');
});
```

This example shows that the test expects `companyName` to equal `Scuber`. That
`expect` and `to.equal` are essentially doing the same thing as `companyName ==
'Scuber'`. In other words, `expect(companyName).to.equal('Scuber')` is running
code that will have this first test pass if `companyName` equals `Scuber` and
fail if it does not.

Don't worry too much yet if it's hard to understand what is happening inside of
the `test/indexTest.js` file. But it's a good idea to open up the file, and
gather the information that you can. We will also provide instructions in the
`README.md` file that will allow you to complete the lab.

## Running the Tests

To run the tests, type `learn` in the terminal part of the Learn IDE.
(The terminal is the part below where you've been coding.)

Running the `learn` command will open up a new tab on your browser, showing the
current status of the tests. For the moment, all of the tests fail. Let's figure
out how to get one of them passing! (The rest will be up to you.)

To get our first test to pass, we can open up our `index.js` file, and write the
following:

```js
let companyName = 'Scuber';
```

Great, our first test is now passing. However, the second test that is also about
`companyName` is not yet passing. It's not passing because, it expects a change to
`companyName` to throw a `TypeError`. It sounds like it wants `companyName` to
be declared using a different keyword than the `let` keyword - it needs a
keyword that is used for variables that can't be changed...

Continue to work through the problems below. Keep in mind the general workflow
for a lab:

1. Run `learn`.
2. Read the errors; vocalize what they're asking you to do.
3. Write code; repeat steps 1 and 2 often until a test passes.
4. Repeat as needed for further tests.
5. Run `learn submit` when finished!

## Working Through the Problems

If you open up `test/indexTest.js`, you will see the tasks in front of you:

+ `companyName` - Inside the `test/indexTest.js` file, look inside of the word `describe` where the tests are trying to indicate that this test is describing the `companyName` variable. The `it` word that comes afterwards, tells us the features of `companyName`. In the first `it` function call, it says that `it` (companyName) `is set as Scuber`. In the next line, you can see that the test checks to make sure this occurs by seeing if `companyName` equals `Scuber`. So this means that you need to go to your `index.js` file and declare a variable named `companyName` and set it equal to `Scuber`. Once you do that, if `learn` is running, you will see the first test in this lab as passing.
+ In the next `it` function call, we are still describing `companyName`. This time, it says it `raises error if the companyName is changed`. The next line of code tests this. It's ok if some of the code in that line is confusing. Just know that the code attempts to change `companyName` to a different value, and that this reassignment should throw an error. So you need to make sure that you are using the correct type of variable declaration such that attempting to reassign the variable throws an error.
+ `mostProfitableNeighborhood` - Here we need to declare another variable, `mostProfitableNeighborhood` and assign to it the string `'Chelsea'`. In the next `it` function call, you can see that our tests ensure that `mostProfitableNeighborhood` does not throw an error when reassigned. So you need to make sure that you are using the correct type of variable declaration such that assigning a new value to `mostProfitableNeighborhood` doesn't throw an error.
+ `companyCeo` - Here, we are getting more practice with declaring variables. Once again, a reassignment should not throw an error.

## Resources
- [MDN: Let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN: Const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

<p class='util--hide'>View <a href='https://learn.co/lessons/js-basics-variables-lab'>Variables Lab</a> on Learn.co and start learning to code for free.</p>
