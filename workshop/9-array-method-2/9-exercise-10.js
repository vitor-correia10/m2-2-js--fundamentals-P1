// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here


 
// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well

function calculateAverage(grades) {
    let sum = 0;

    grades.forEach(function(score) {
        sum += score;
    });

    return Math.round(sum/ grades.length);
}

function letterGrade(score) {
    if (score < 60) {
        return '<60 is F'
    } else if (score < 70) {
        return '<70 is D'
    } else if (score < 80) {
        return '<80 is C'
    } else if (score < 90) {
        return '<90 is B'
    } else {
        return 'A'
    }
}


console.log(letterGrade(calculateAverage([98, 45, 45, 88, 89, 78, 92, 65])));

