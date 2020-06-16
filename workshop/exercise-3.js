// Q3.1
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

let compareMax = function(num1,num2){
    return Math.max(num1,num2)
}
console.log(compareMax(32,373))

// Q3.2
// Without changing the function at all,
// Can you figure out how we could use it to determine the greater number between 4 integers?

console.log(compareMax(compareMax(32,98),compareMax(175,3)))

// Q3.3
// Would this work with more integers?

console.log(compareMax(compareMax(compareMax(132,76),compareMax(152,1987)),compareMax(175,3)))