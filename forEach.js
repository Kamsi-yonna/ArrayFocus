'strict mode';

//The difference between a callback function and any other function is how it's used. A callback function is specifically built to be used as argument of another function.

//FOREACH METHOD
//forEach() is also a way to loop through the elements within an array

//forEach() method calls a function 'ONCE' for each element in an array.
//WHATS UP WITH THE ONCE?

//forEach() method calls a function for each element in an array.

//forEach() is mainly used to update variables as it does not create a new array. hmmmmm

//FOReCH() MODIFIES THE ORIGINAL ARRAY WHILE MAP IS USED TO PERFORM TRANSFORMATIONS ON AN ARRAY AND COLLECT THE RESULT.

//BASIC SYNTAX
//array.forEach(callbackfunction)
//array.forEach(callbackfunction, thisValue)

//Examples
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'orange', 'cherry'];

numbers.forEach(function (element, index) {
  console.log(` ${index} : ${element} `);
});
fruits.forEach(function (element, index) {
  console.log(` ${index} : ${element} `);
});

//Lets add all elements in the numbers array
let sum = 0; //we have to create an initail variable when working with forEach method. The foreach method will not create a new variable/array, but simply update an existing one.
function addValue(num) {
  sum += num;
}
numbers.forEach(addValue);
console.log(sum); //Deep
//
//
//
//Lets multiply each element in the numbers array
function multiplyValue(element, index, arr) {
  arr[index] = element * 10;
}
numbers.forEach(multiplyValue);
console.log(numbers);
//For this,we need to update the array and change the original numbers. When each element is multiplied by 10, we need to store it back into the array using arr[index]

//Its quite different from Map Method
function multiply(num) {
  return num * 10;
}
const timesTen = numbers.map(multiply);
console.log(timesTen); //timesTen is the new variable
//
//
//
//
//BIGGER EXAMPLE
const persons = [
  {
    firstname: 'Kamsiyonna',
    lastname: 'Etiobi',
    salary: 1000,
    currency: 'USD',
  },
  { firstname: 'MoJeezy', lastname: 'Abdulai', salary: 2000, currency: 'USD' },
  { firstname: 'Tomide', lastname: 'Alonge', salary: 10000, currency: 'USD' },
];

persons.forEach(function (person) {
  let details = `${person.firstname} earns ${person.salary}${person.currency} and that is why he is proud`;
  console.log(details); //
});
// console.log(persons); //Not sure I understand thissss

//USING THE MAP METHOD
function getFullName(person) {
  return `${person.firstname} ${person.lastname}`;
}
const fullName = persons.map(getFullName);
console.log(fullName); //WE created a new variable
//
//
//
//ANOTHER ONE
const staffDetails = [
  {
    firstname: 'Kamsiyonna',
    lastname: 'Etiobi',
    salary: 1000,
    currency: 'USD',
  },
  { firstname: 'MoJeezy', lastname: 'Abdulai', salary: 2000, currency: 'USD' },
  { firstname: 'Tomide', lastname: 'Alonge', salary: 10000, currency: 'USD' },
];

staffDetails.forEach((staff, index, array) => {
  console.log(array); //this also
});

let scores = [12, 55, 70];
scores.forEach((score, index, array) => {
  console.log(array);
});
//
//
//
//CLASSWORK
//add all these values in an array of numbers using forEach()
scores = [12, 55, 70, 47];
//first we create a variable where the sum would be stored and updated
let total = 0; //store the initial variable(can it be empty??)
scores.forEach(score => {
  total += score;
});
console.log(total);

//Let us add the staff member's salaries together
let totalSalary = 0;
staffDetails.forEach(({ salary }) => {
  totalSalary += salary; //Not sure bout this
});
console.log(totalSalary);

//USING CONDITIONALS IN forEach()

//We can check for specific conditions (I think this is similar to the continue and break function..IT IS NOT 💀)

//Let us get the salaries of people who earn above 5000USD
const maxSalary = 5000; //FACTORING
staffDetails.forEach(({ firstname, salary }) => {
  if (salary >= maxSalary) {
    console.log(`IDAN ${firstname} earns above ${maxSalary} `); //WOAH 😲
  }
});

//Break and continue do not work the same way with forEach()
const goals = [12, 55, 70, 47];
let highGoal = 55;
goals.forEach(score => {
  if (score === highGoal)
    //break; //Having this break/continue here will show an error
    console.log(score);
});

// Loop method
for (i = 0; i < goals.length; i++) {
  if (goals[i] === highGoal) continue;
  console.log(goals[i]);
} //Niceeee

//for loop returns undefined where there are missing values.
//forEach skips them completely
