'use strict'

// Step 1 add the variable to your file.
let myString = 'hello,this,is,a,difficult,to,read,sentence';

// Step 2 Log the length of myString.
console.log(myString.length);


// Step 3 remove the commas from the string and replace them with spaces.
myString = myString.replace(/,/g, ' ');

// Anogher method using the .split and .join methods
myString = myString.split(',').join(' ');


// Step 4 After replacing the commas, log myString to see if you succeeded.
console.log(myString);