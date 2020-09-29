'use strict'

//step 1
function giveCompliment(name) {
    let compliments = ['great', 'awesome', 'perfect', 'the boss', 'the man', 'outstanding', 'one of kind!', 'Wonderful', 'beautiful', 'Excellent' ]
    let randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    //console.log(randomCompliment);
    return `you are `+ randomCompliment +', ' + name;
    }
    console.log(giveCompliment('Ahmad'));