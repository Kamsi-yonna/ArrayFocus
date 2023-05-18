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

//SOMETHING MORE ADVANCE
let people = [
  { name: 'Kamsy', age: 24 },
  { name: 'Tomide', age: 38 },
  { name: 'Deji', age: 46 },
  { name: 'Mogena', age: 23 },
  { name: 'Leye', age: 30 },
  { name: 'Keji', age: 20 },
];

//Let us filter out every person who is old
const youngAge = 25;
let adults = people.filter(function (person) {
  return person.age > youngAge;
});
console.log(adults); //this returns the original array but filters according to our condition.
//THE FILTER METHOD IS NOT INTENDED FOR LOGGING OR PERFORMING ACTIONS DIRECTLY ON THE ELEMENTS OF THE ARRAY. hmmmm I can see that now

// in order to console.log the results of the filter, I would use the for each method.
//Adults is the new array with filtered elements.
adults.forEach(function (person) {
  console.log(`${person.name} is ${person.age}`);
});

//If we wanted to create an array for just the filtered adults, we could use this
let adultNames = adults.map(function (person) {
  return person.name;
});
console.log(adultNames);

//ANOTHER ADVANCE EXAMPLE
let team = [
  { name: 'Kamsy', position: 'developer' },
  { name: 'Tomide', position: 'developer' },
  { name: 'Fiyin', position: 'designer' },
  { name: 'Mogena', position: 'developer' },
  { name: 'Charles', position: 'Co-founder' },
  { name: 'Godwin', position: 'designer' },
];

// let us filter out the developers
let developers = team.filter(function (member) {
  return member.position == 'developer';
});
console.log(developers);

//lets create a separate array for the developers
let frontDev = developers.map(function (dev) {
  return dev.name;
});
console.log(frontDev);

//Let's console log a string to let us know them
developers.forEach(function (team) {
  console.log(`${team.name} is a ${team.position}`); //NNIIIICCCEEEE
});

//GLORIOUS
//
