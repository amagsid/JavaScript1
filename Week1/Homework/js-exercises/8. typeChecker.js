'use strict'

// exercise 8 : Type checker

// Declare 4 variables: 2 must be strings and 2 must be objects
let name = 'Ahmad';
let bio = 'Aspiring web developer with passion for design, art and sports';
let interests = ['astronomy', 'photography', 'sport',]
let charachtarestics = {
    height: '177cm',
    weight: '76kg',
    ethnicity:"Middle eastern",
    homeCountry: "Egypt",
    currentCity: "Rotterdam, NL",
};

// Create 6 conditional statements, where for each you check if the data type of one variable is the same as the other
if (typeof name == typeof bio) {
    console.log('SAME TYPE');
} 
else console.log('Not the same...')

if (typeof name == typeof interests) {
    console.log('SAME TYPE');
} 
else console.log('Not the same...')

if (typeof name == typeof charachtarestics) {
    console.log('SAME TYPE');
}
else console.log('Not the same...')

if (typeof bio == typeof name) {
    console.log('SAME TYPE');
} 
else console.log('Not the same...')

if (typeof bio == typeof interests) {
    console.log('SAME TYPE');
} 
else console.log('Not the same...')


if (typeof bio == typeof charachtarestics) {
    console.log('SAME TYPE');
}
else console.log('Not the same...')



// Write 2 console.log statements to log the type of 2 variables, each with a different data type
console.log(typeof name);
console.log(typeof interests);






