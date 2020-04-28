// Q5
// Write a JavaScript program to find ALL the Armstrong
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer
// such that the sum of the cubes of its digits is equal
// to the number itself. For example,
// 371 is an Armstrong number:
// 3 ** 3 + 7 ** 3 + 1 ** 3
// = 27   + 343    + 1
// = 371

let armstrongNumbers = [];

// write your loop here...
for (i = 0; i <= 999; i++) {
    let digit = i.toString().split('');
    let sum = 0;
    for (x = 0; x < digit.length; x++) {
        let num = Number(digit[x]);
        sum += num ** 3;
    }
    if (sum === i) {
        armstrongNumbers.push(i);
    }
}
console.log(armstrongNumbers);
