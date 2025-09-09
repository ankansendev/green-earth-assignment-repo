<!-- 01 -->
There are three ways to declare variables in JavaScript: var, let, and const. However, their scope, hoisting behaviour, and re-assignment rules are different.

 Var: Allows for re-declaration and updates within the same scope and declares variables with a function or global scope.
 Variables with block scope are declared using let; updates are permitted but not re-declarations within the same block.
 const: Indicates block-scoped variables that, once assigned, cannot be changed.
 <!-- 02 -->
 The forEach() function returns undefined and runs the same code on each entry in an array without altering the array.

 Example: To loop over an array of foods and record that we would want to consume each one, we would use the forEach() function in the example below.

 let food = ['mango','rice','pepper','pear'];
food.forEach(function(foodItem){ console.log('I want to eat '+foodItem);
}); 
 
 map() returns a new array with the changed elements after running the same function over each element in the array.

 Example: To assign our new array with the updated cost to the variable newCost, we would loop over the items of the cost array using.map and divide each element by 10.

 let cost = [100,400,300,700];
let newCost = cost.map(function(costItem){ return costItem / 10;
});
console.log(newCost);

A new array containing the elements that return truthy for the criteria is returned by the filter function, which examines each member in an array to see whether it satisfies a set of criteria.

 Example: To return results that are less than 200, we would use the.filter in the example below.

 let cost = [100,400,50,40,700];
let smallCost = cost.filter(function(costItem){ return costItem < 200
});
console.log(smallCost);

<!-- 03 -->
We may construct functions with a shorter and simpler syntax thanks to ES6 Arrow functions, which also help to structure and make our code easier to read.  The ES6 version introduces the arrow functions.  We can write JavaScript functions more precisely with the help of arrow functions.

 JavaScript's Arrow Function
 Arrow functions are anonymous, meaning they don't have a name and aren't restricted by an identifier.  Arrow functions can be declared without the function keyword and do not return any value.  Another name for them is Lambda Functions.

 Arrow functions lack the prototype properties of super, arguments, and this.
 The new keyword does not work with arrow functions.
 It is not possible to utilise arrow functions as constructors.

 <!-- 04 -->
  Instead of utilising the array's index, array destructuring makes it simple to extract values from an array and assign them to variables.
 Object destructuring makes your code easier to read and comprehend by allowing you to retrieve properties from an object and store them in variables.
 Default Values: When destructuring variables, you can specify a fallback value.  The default will be applied in the event that something is absent or undefined.
 Skipping Items: When destructuring arrays, you have the option to disregard some values and concentrate just on the ones you require.
 Code can be made shorter and more efficient by using nested destructuring, which allows you to pull data from arrays or objects inside of arrays or objects in a single operation.
 <!-- 05 -->
 A new feature in ECMAScript6 is template literals, which provide a straightforward way to create multiline strings and execute string interpolation.

 Prior to ES6, the template literals were known as template strings.  The backtick (` ') character denotes Template Literals, which are present starting with ES6 (ECMAScript 6).  The placeholders denoted by the '$' symbol and the {} braces, like in (${expression}), can also be stored in template literals.
 Backticks (`) are used to encapsulate template literals instead of single or double quotes.  They make it simple to write multiline strings, incorporate variables, and even use functions to process strings.  Template literals simplify the process of concatenating strings with variables and improve readability.