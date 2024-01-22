// Write a program that requests a number from a user and finds the summation of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10.
const userNumber = parseInt(prompt(20));
if (!isNaN(userNumber) && userNumber > 0) {
  let summation = 0;
  for (let i = 1; i <= userNumber; i++) {
    summation += i;
  }
  console.log(summation);
}

// Request two numbers and find only their largest common divisor.
function findGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
  }
  return a;
}
const num1 = parseInt(prompt(25));
const num2 = parseInt(prompt(10));
if (!isNaN(num1) && !isNaN(num2)) {
  const gcd = findGCD(Math.abs(num1), Math.abs(num2));
  console.log(gcd);
}

// Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.
const number = parseInt(prompt(10));
if (!isNaN(number) && !isNaN(number)) {
  for (let i = 1; i <= userNumber; i++) {
    if (userNumber % i === 0);
  }
}
// } Couldnt finish this one dont get ho to log it

// Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.
const numberUsed = prompt("Requested number", 1234);
if (!isNaN(numberUsed)) {
  const numberOfDigits = numberUsed.length;
  console.log(numberOfDigits);
}

// Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user.
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let oddCount = 0;
let evenCount = 0;
for (let i = 0; i < 10; i++) {
  const suggestedNumber = parseFloat(prompt("Suggested number ${i + 1}"));
  if (!isNaN(suggestedNumber)) {
    if (suggestedNumber > 0) {
      positiveCount++;
    } else if (suggestedNumber < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
    if (suggestedNumber % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  } else {
    console.log("Invalid input for number ${i + 1}");
  }
}
console.log(`Positive numbers: ${positiveCount}`);
console.log(`Negative numbers: ${negativeCount}`);
console.log(`Zeroes: ${zeroCount}`);
console.log(`Odd numbers: ${oddCount}`);
console.log(`Even numbers: ${evenCount}`);

// Display the multiplication table of all numbers from 2 to 9. Every number has to be multiplied by 1 to 10.
for (let i = 2; i <= 9; i++) {
  console.log("Multiplication table for ${i}");
  for (let j = 1; j <= 10; j++) {
    const result = i * j;
    console.log(`${i} * ${j} = ${result}`);
  }
  console.log();
}
