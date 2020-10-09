'use strict'


let cartForParty = {
    beer : 4.55,
    wine : 5,
    cheese : 2.60,
    crackers : 3.25,
    Pizza: 10,
}
//console.log(Object.keys(cartForParty))
//onsole.log(Object.values(cartForParty));

function calculateTotalPrice(obj) {

    let sum = 0;

    for (let key in cartForParty) {
        //sum += Object.keys(cartForParty);
        //console.log(cartForParty[key])
        sum += parseInt(cartForParty[key]);
      }
      console.log(sum); 
    return 'Total: €' + sum
    };

   


    console.log(calculateTotalPrice(cartForParty));



