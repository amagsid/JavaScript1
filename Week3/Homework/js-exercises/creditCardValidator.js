'use strict'

function validateCreditNumber(cardNum){

    //declaring the repetetive part of the output
    let successStatement = 'Success! The input ' + cardNum + ' is a valid credit card number'
    let invalidStatement = 'Invalid! The input '

    //creating an array of integers from the card number
    let cardNumArr = []

    for (let i of cardNum) {
        cardNumArr.push(parseInt(i))
    }

    // 1. check if input is 16 characters
    if (cardNumArr.length !== 16 ) {
        return invalidStatement + cardNum +  ' shouldn\'t be less than 16 characters'
    }
    //end of first check 

    // 2. All characters must be numbers
    for (let i of cardNumArr ) {
        if (!isFinite(i)) {
            return invalidStatement + cardNum + ' should contain only numbers'
        }
    }

  // 3. At least two different numbers should be represented
    let allTheSame = true 

  for (let i of cardNumArr ) {
      if ( i !== cardNumArr[0] ) {
        allTheSame = false
      }
    }
    if (allTheSame) {
        return invalidStatement + cardNum + ' should have at least 2 different numbers '
    }

    // 4. The last number must be even
    if (cardNumArr[cardNumArr.length -1] % 2 !== 0) {
        return invalidStatement + cardNum + ' must have an even last number'
    }

    // 5. The sum of all the numbers must be greater than 16
    let sum = 0
    for (let i of cardNumArr ) {
        sum +=  i
        }
        if (sum <= 16) {
            return invalidStatement + cardNum + ' should have a sum that is greater than 16'
    }
   return successStatement
};

//testing the function
console.log(validateCreditNumber('1234567890'))
console.log(validateCreditNumber('123456789012345r'))
console.log(validateCreditNumber('6666666666666666'))
console.log(validateCreditNumber('1234567890123455'))
console.log(validateCreditNumber('1000000000000012'))
console.log(validateCreditNumber('1234567890123455'))
console.log(validateCreditNumber('1234567890123456'))


