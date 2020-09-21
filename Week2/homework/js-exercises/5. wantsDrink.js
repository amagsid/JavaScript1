'use strict'
// step 1 Declare a variable that holds an empty array, called drinkTray.
let drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];
let count = 0;

// step 2 Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable. The drinkTray can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.
for (let i = 0; i < 5; i++) {
    //console.log(i)
    if (i % 2 === 0) {
        count++
    }
    drinkTray.push(drinkTypes[count-1])
};

console.log('Hey guys, I brought a ' + drinkTray + '!' );


//Another solution

//* const drinkTypes = ['cola', 'lemonade', 'water'];
// for (let i = 0; i < 5; i++ ) {
// for (let j =0; j <=1; j++) {
// if (drinkTray.length < 5) {
//        drinkTray.push(drinkTypes[i])
//       }
//      }
//    }; 


