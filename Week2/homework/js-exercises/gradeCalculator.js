'use strict'

     // declaring a grade to insert variable (grades) in.
     let score = '90';
     // calculating percentage and assigning it to a variable.
     let percentage = '(' + ((score / 100) * 100) + '%' + ')'
      // to avoid repeating code, I assigned part of the sentence to a variable
     let statement = "You got a ";
     let result = '';

     // if/else statement with the score and the corrosponding grade 
     if (score > 100 || score < 0) {
         result = "Please enter a valid grade between 0 and 100";
     } else if (score >= 90) {
         result = "A ";
     } else if (score >= 80) {
         result = "B ";
     } else if (score >= 70) {
         result = "C ";
     } else if (score >= 60) {
         result = "D ";
     } else if (score >= 50) {
         result = "E ";
     } else if (score <= 49) {
         result = "F ";
     }
     // else statement with a warning to enter score in numbers if any other value was passed
     else {
          result = "please enter score in numbers";
     }
     console.log(statement + result + percentage + '!'); 


//node gradeCalculator.js