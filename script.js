'use strict';
// MAP METHOD
// map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.

//Map() returns an array

// const newArr = array.map(function); //BASIC SYNTAX

//example
const numbers = [4, 9, 16, 25];
//find the square root of every value in the numbers array
const squareRoot = numbers.map(Math.sqrt); //square root
console.log(numbers, squareRoot);
//lets multiply all values within the array with 10

// const timesTen = numbers.map(multiplication function); we need to create a function for the multiplication

function multiply(num) {
  return num * 10;
}
//Does the function neccessarily come first?
const timesTen = numbers.map(multiply);
console.log(timesTen); //NIIICEEEE

//REAL LIFE EXAMPLE
// Get the full name for each person
const persons = [
  { firstname: 'Kamsiyonna', lastname: 'Etiobi' },
  { firstname: 'MoJeezy', lastname: 'Abdulai' },
  { firstname: 'Tomide', lastname: 'Alonge' },
];
function getFullName(person) {
  return `${person.firstname} ${person.lastname}`;
}
const fullName = persons.map(getFullName);
console.log(fullName);

//Firstly, we have an array called 'persons' - it contains 3 objects and these 3 objects contain two properties : firstname and lastname.
//We simply want an array showing their full name (first + last name)
//Map method creates an array and passes a function for each object within an array - exactly what we need.
//the basic syntax for this would look like this

// const fullName = persons.map(a function to get the full name)

//the getfullname function is passed as an argument to the map method. It will then be called with each 'person' object as an argument.

//EXTRAS
//map does exactly the same thing as what the for loop does, except that map creates a new array with the result of calling a provided function on every element in the calling array.

//The 'map' function will always return an array while the 'for loop' approach you define the return value — if there is any. As you can see, it's not quicker because of the callback function that is called on every item, but the code is cleaner, quicker to implement and more powerful.

//Looping method
let loop = [3, 4, 5, 6];

for (let i = 0; i < loop.length; i++) {
  loop[i] = loop[i] * 3;
}
console.log(loop); // [9, 12, 15, 18]

//Map method
let arr = [3, 4, 5, 6];

// let modifiedArr = arr.map(function (element) {
//   return element * 3;
// });
//OR
let modifiedArr = arr.map(element => element * 3);

console.log(modifiedArr); // [9, 12, 15, 18]

//THE COMPLETE MAP() METHOD SYNTAX
// arr.map(function(element, index, array){  }, this);
let arr2 = [2, 3, 5, 7];

arr2.map(function (element, index, array) {
  console.log(this); // 80 This refers to the context in which the function is executed.

  //we can also console log other parameters
  console.log(
    ` this ${element} is in ${index} position within the ${array} array`
  );
  //   console.log(array);
}, 80); //we set 'this' to 80

//The function is called on each array element and the map method passes the current element, the index of the element and the entire array object to it.
// in the example above the map functio  does not modify the aray or return any new values, instead in logs the value of 'this' which is 80 for each element

//'this' isnt so clear ust yet but no time
