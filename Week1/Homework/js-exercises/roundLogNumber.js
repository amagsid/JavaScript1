'use strict'

// exercise 5 : round and log the number

// step 1 Declare a variable z and assign the number 7.25 to it.
let z = 7.25;   
// step 2 Write a console.log statement in which you log the value of z.
console.log(z);    
// step 3 Declare another variable a that has the value of z but rounded to the nearest integer.
let a = Math.round(z)
// step 4 Write a console.log statement in which you log the value of a.
console.log(a);
// step 5 find a way to compare the two values and store the highest of the two in a new variable.
let highestValue = Math.max(a,z);
// step 6 Write a console.log statement in which you log the value of the highest value.