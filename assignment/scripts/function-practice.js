console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Keegan'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log(addNumbers(2, 3));

// 4. Function to multiply three numbers & return the result
function multiplyThree(intA, intB, intC) {
  return intA * intB * intC;
}

console.log(multiplyThree(2, 3, 4));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let lastItem = [1, 2, 3, 4, 5, 6, 7, 8];
function getLast(array) {
  return array[array.length - 1];
}

console.log(getLast(lastItem));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(find(3, lastItem));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      return true;
    }
  }
  return false;
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sumAll(lastItem));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
const input = [1, 2, -5, 0, 5, 6];

function intChecker(array) {
  let positiveInts = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveInts.push(array[i]);
    }
  }
  return positiveInts;
}

console.log(intChecker(input));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//Given an array of integers nums and an integer target.
//return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution
//and you may not use the same element twice.
//You can return the answer in any order.

const nums = [3, 3];
let solvedArray = [];

function twoSum(target, array) {
  let j = 0;

  for (let i = 0; i < array.length; i++) {
    let k = 0;
    let goal = target - array[i];

    for (let i = 0; i < array.length; i++) {
      if (goal === array[k + 1]) {
        solvedArray.push(j, k + 1);
        return solvedArray;
      }
      k++;
    }
    j++;
  }
}

console.log(twoSum(6, nums));
