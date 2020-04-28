/**
 * NOTE: For the exercises in this section, you are not allowed to use the
 * `for` or `while` loops.
 *
 * You must solve them using array methods like filter, map, forEach, etc.
 *
 * You will also need to verify that your functions work as expected.
 * Be sure to test them. :)
 */

// Q6
// Adds "Hello " to every element of greet
// For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]

function greet(lst) {
  // lst is an array of strings
  let greeting = lst.map(function(firstName){
    return `Hello ${firstName}`
  })

  return greeting;
}

console.log('Q6 greet()', greet(['David', 'Billy', 'Lisa', 'Jennifer']));
