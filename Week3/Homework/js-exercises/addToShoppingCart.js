'use strict'

// Create an array called shoppingCart that holds the following strings: "bananas" and "milk"

let shoppingCart = ['milk', 'banana' ]
//  Write a function named addToShoppingCart
  function addToShoppingCart(item) {
    /* Add grocery item to shoppingCart. If the amount of items is more than 3 remove the first one in the array
    Loops through the array in order to list out the items */
     if (shoppingCart.length <= 2){
        shoppingCart.push(item)
//Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!"
         console.log('You bought '+ shoppingCart + '!');
     } else if (shoppingCart.length <= 3){
        shoppingCart.shift();
        shoppingCart.push(item)
         console.log('You bought ' + shoppingCart+'!')
     } 
 }

 addToShoppingCart('peanut butter');
 addToShoppingCart('ice cream');



  // this code is from the first attempt solving the problem. I ended up commenting it out.
  //function addToShoppingCart(item) {
    
  //if (shoppingCart.length <= 2
  //  let updatedShoppingCart = shoppingCart.push(addedItem);
  // console.log(shoppingCart)
  //  return 'You bought' + updatedShoppingCart + '!'
  //};

  //addToShoppingCart('cheese') 
