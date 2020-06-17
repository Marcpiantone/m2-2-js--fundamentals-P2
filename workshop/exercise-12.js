// Q12
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here
function calculateLetterAverage (grades) {
    let sum = 0 ;
    grades.forEach(function(grade){
        sum = sum + grade
    })
    let numericalGrade = Math.round(sum/grades.length)
    if(numericalGrade<60) return "F"
    if(numericalGrade<70 && numericalGrade>=60)return "D"
    if(numericalGrade<80 && numericalGrade>=70)return "C"
    if(numericalGrade<90 && numericalGrade>=80)return "B"
    if(numericalGrade<=100 && numericalGrade>=90)return "A"
    return numericalGrade}

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]
console.log(calculateLetterAverage([48, 95, 65, 48, 59, 78, 72, 65]));
// Try with other values as well
console.log(calculateLetterAverage([23, 37, 19, 50, 59, 64, 72, 65]));
