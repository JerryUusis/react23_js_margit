// const temperature = prompt("What's the weather outside?");

// if (parseInt(temperature) < 15) {
//     console.log('You should wear a jacket')
// } else {
//     console.log("Don't put a jacket on please");
// }

// let season = prompt("What is your favourite season?");

// switch (season.toLowerCase()) {
//     case "summer":
//         console.log("Sommertider hej hej!");
//         break;
//     case "autumn":
//         console.log("It's autumn");
//         break;
//     case "winter":
//         console.log("Winter is the coldest season");
//         break;
//     case "spring":
//         console.log("The awakening of nature")
//         break;
//     default:
//         console.log("Not a known season");
//         break;
// }

//Variable definitions for task2

// let hourlySalary = parseFloat(prompt("What is your hourly salary?"));
// let workingHours = parseFloat(prompt("How many hours did you work?"));

// let totalSalary = 0;

// const baseSalary = 7 * hourlySalary;

// if (workingHours < 8) {
//     totalSalary = workingHours * hourlySalary;
// }

// else if (workingHours > 7 && workingHours < 10) {
//     totalSalary = (workingHours - 7) * (hourlySalary * 1.5) + baseSalary;
// }

// else if (workingHours > 9) {
//     totalSalary = ((hourlySalary * 1.5) * 2) + ((workingHours - 9) * (hourlySalary * 2)) + baseSalary;
// }

// console.log("Days salary is " + totalSalary + " euros");

// Task - Random numbers

//Make a program that asks for three numbers from the user.
//The program prints out the sum of the numbers if any of the numbers are positive.
//If all the numbers are positive, also print out multiplication.
//If all numbers are negative, the text "only negatives" is printed.
//Handle zero as positive in this assignment

// const firstNumber = parseInt(prompt("Please give the first number:"));
// const secondNumber = parseInt(prompt("Please give the first second:"));
// const thirdNumber = parseInt(prompt("Please give the first third:"));

// function sumOfPrompts() {
//     return firstNumber + secondNumber + thirdNumber;
// }

// function multiplicationOfPrompts() {
//     return firstNumber * secondNumber * thirdNumber;
// }

// function taskFunctionsPrinter(firstNum, secondNum, thirdNum) {
//     if (isNaN(firstNum) || isNaN(secondNum) || isNaN(thirdNum)) {
//         console.log("Please enter a number");
//     }

//     if (firstNum >= 0 || secondNum >= 0 || thirdNum >= 0) {
//         console.log("Sum of numbers is " + sumOfPrompts());
//     }

//     if (firstNum > 0 && secondNum > 0 && thirdNum > 0) {
//         console.log("Multiplication of numbers is " + multiplicationOfPrompts());
//     }

//     if (firstNum < 0 && secondNum < 0 && thirdNum < 0) {
//         console.log("only negatives")
//     }
// }

// taskFunctionsPrinter(firstNumber, secondNumber, thirdNumber);

//Task - Odd or even?

//Make a program that asks for one number from the user.
//Then the program finds out if the number is positive and if the number is divisible by 2
//Message "number ... is even" is printed else "number ... is odd" is printed
//If number is negative "please enter positive number" is displayed and new prompt is displayed

// let userNumber = parseInt(prompt("Please give a number"));

// while (true) {
//   if (userNumber < 0 || isNaN(userNumber)) {
//     userNumber = prompt("Please enter a positive number or a valid number");
//   } else if (userNumber % 2 === 0) {
//     console.log(`number ${userNumber} is even`);
//     break;
//   } else {
//     console.log(`number ${userNumber} is odd`);
//     break;
//   }
// }
