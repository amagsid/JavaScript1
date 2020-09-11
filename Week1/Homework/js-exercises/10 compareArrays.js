'use strict'

// exercise 10 : compare arrays

// step 1 Declare 2 variables, that each hold an array. The first array should have 4 items, the second 7 items


let newMusic = ['Jaguar', 'How Deep is Too Deep', 'Abstract Poetic', 'Beginning of Time']
let favoriteGenres = ['electronic rock', 'alternative', 'house', 'ambient', 'dubstep', 'new wave', 'electronic']

// step 2 Find out how to get the length of each array. Write a console.log statement that shows the length of each array
console.log('The length of the newMusic array is: ' + newMusic.length);
console.log('The length of the favoriteGenres array is: ' + favoriteGenres.length);

// step 3 Write a conditional statement that checks if both are of equal length. If they are, log to the console They are the same!, if not log Two different sizes

if (newMusic.length == favoriteGenres.length ) {
    console.log('They are the same!');
} else {
    console.log('Two different sizes');
}

