'strict mode';
//One of the most important and widely used method for iterating over an array in js

//it filters out one or more items from a larger collection of items based on some conditions/preferences

//filter() creates a new array filled with elements that pass a test provided by a condition

//filter() does not execute d function for empty elements and does not change the original array.

//filter() creates a new array that contains only items from an existing array that meet a specific condition.

//filter() takes out elements based on a callbackfunction which should return true/false for each item. Items that are true get included in the new array and false are excluded

//filter() it allows us extract specific items based on a defined criteria - it does this without making any changes to the original array.

//EXAMPLE
const numbers = [1, 2, 3, 4, 5, 6];

//filter even numbers
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

//filter is called on the numbers array. The callbackfunction takes each number as input and checks if it is divisible by 2. if this is true, the number is considered an evenNumber and then it is included in the array

const names = [
  'Mogena',
  'Godwin',
  'Tomide',
  'Kamsy',
  'Deji',
  'Keji',
  'Charlse',
  'Fiyin',
];

//let us filter names with more than 5 characters
const maxCharacter = 5;
const newNames = names.filter(function (name) {
  return name.length > maxCharacter;
});
console.log(names); //the initial is untouched
console.log(newNames); //NICE ONE
//.
//
