'strict mode';
//REDUCE METHOD
//reduce() executes a reducer function for an array element

//reduce() returns a single value: accumulated result

//reduce() does not execute the function for empty array elements/

//reduce() does not change the original array

//examples
const dollars = [10, 20, 30];
const sum = dollars.reduce(function (a, b) {
  return a + b;
});
console.log(sum);
//In this example, reduce accepts two parameters - a and b.
//it loops through each number in the array and takes the first element as the first parameter, then second as the second.
//it then adds these numbers and gets a single element as the total.
//When this happens, the new value takes the parameter a and the second parameter changes to the one beside it.
//so its New a plus old c which is now b
//The method is carried out again using the new elements. This runs until there are no more numbers left in the array and then it returns the final value
