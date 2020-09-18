'use strict'

     // Step 1 Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the title (string), author (string), and alreadyRead (boolean indicating if you read it yet).
let books  = [
    {
      title: 'The God Delusion',
      author: 'Richard Dawkins',
      alreadyRead: false,

    },

    {
        title: 'The Subtle Art of Not Giving a Fuck',
        author: 'Mark Manson',
        alreadyRead: true,
  
      },

      {
        title: 'The Selfish Gene',
        author: 'Richard Dawkins',
        alreadyRead: false,
    
      },
      
    ];
    // Step 2 Loop through the array of books.
    // Step 3 For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
    books.forEach((book)=>console.log(book.title + ' by ' + book.author));
    
   
    
    // Step 4 Create a conditional statement to change the log depending on whether you read it yet or not. If you read it, log a string like You already read "The Hobbit" right after the log of the book details
   //Object.keys(books).forEach(function(whatToRead) {
      //if (books.alreadyRead == true) {
        if (books.alreadyRead == true) {
        console.log('you already read ' + books.title);
        }
        else {
      console.log('you still need to read ' + books.title);
     }
    //} )

    // The program here gives me "you still need to read undefined" as a result for all three results. 
     // node readingList.js



     //console.log(
     // books.alreadyRead ? 'You already read' : 'You still need to read',
     //// );