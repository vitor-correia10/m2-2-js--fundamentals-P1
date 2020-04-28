// Q2a
// Write a function that accepts two integers and *returns*
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

function max(num1, num2) {
    return (Math.max(num1,num2));
}
console.log('A2a ', (10, 20) );
// Q2b
// What if we wanted to figure out the max of 4 integers, instead of 2?

// STRETCH
// What if we wanted to write a function which took an unlimited number of
// integers, and returned the largest one?

// All of the following calls should be valid:
maxValue(4, 2); // 4
maxValue(4, 2, 8, 1, 5, 10); // 10
maxValue(4, 2, 8, 1, 5, 10, 1, 64, 2, 8, -100, 54); // 64

// HINT: You'll want to use "rest parameters".
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
function maxValue(...numArray) {
  return Math.max(...numArray);
}

  console.log('A2.b ', maxValue(4, 2, 8, 1, 5, 10, 1, 64, 2, 8, -100, 54));