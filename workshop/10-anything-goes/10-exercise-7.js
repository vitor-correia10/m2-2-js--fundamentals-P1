// The purpose of this exercise is to re-implement standard array methods
// Do not use the array methods .map, .filter and .every
// You can use for loops to implement your logic

// Q7
// map returns an array with the same number of elements as lst
// if lst = [a1, a2, a3, a4, a5] then map(lst, f) returns [f(a1), f(a2), f(a3), f(a4), f(a5)]
// map returns a new array created by applying func to the elements of the original array
//
// Example:
// function toUpperCase(str) { return str.toUpperCase(); }
// map(["bob", "susie"], toUpperCase) returns ["BOB", "SUSIE"]

function map(lst, func) {
    // lst is an array and f is a function

}



// Q8
// filter(lst, func) returns a list with all the elements of lst that does not satisfy f removed
// filter(lst, func) has fewer elements than lst
// if lst_ = filter(lst, f) and x is an element of lst_ it means that:
//     x is an element of lst
//     f(x) is true
//
// Example:
// function isEven(x) {return x % 2 === 0;}
// filter([1, 2, 3, 4, 5], isEven) returns [2,4];

function filter(lst, func) {
    // lst is an array and f is a function
    // func takes one argument and returns a boolean (true or false)
}



// Q9
// every(lst, f) returns a true if func returns true for every element of lst
//
// Example:
// every([2,4,12], x => x % 2 === 0) returns true
// every([2,3,12], x => x % 2 === 0) returns false

function every(lst, func) {
    // lst is an array and f is a function
    // func takes 1 argument and returns a boolean

}
