'use strict'

let numChildren = ['1', '2', '3', '4', '5'];
let partnerNames = ['Mark', 'Hazem', 'Tan', 'Tamino', 'Merie'];
let locations = ['LA, CA', 'Rotterdam', 'Berlin', 'Tokyo', 'Cairo'];
let jobs = ['Web Developer', 'Interior Designer', 'Recruiter', 'Graphic designer', 'UX Designer'];

// I console.log stuff along the way to make sure I'm on the right path 
// console.log(jobs[1]);

function tellFortune(number, name, location, job) {

    let randomChild = numChildren[Math.floor(Math.random() * numChildren.length)]
    let randomPartner = partnerNames[Math.floor(Math.random() * partnerNames.length)]
    let randomLocation = locations[Math.floor(Math.random() * locations.length)]
    let randomJob = jobs[Math.floor(Math.random() * jobs.length)]
    
    return 'You will be a '+ randomJob + ' in '+ randomLocation+ ', married to ' + randomPartner + ' with ' + randomChild + ' kids.'

};

console.log(tellFortune(numChildren, partnerNames, locations, jobs)) 
console.log(tellFortune(numChildren, partnerNames, locations, jobs)) 
console.log(tellFortune(numChildren, partnerNames, locations, jobs)) 
//console.log(tellFortune(numChildren, partnerNames, locations, jobs)) 
//console.log(tellFortune(numChildren, partnerNames, locations, jobs)) 
//console.log(tellFortune(numChildren, partnerNames, locations, jobs)) 
//console.log(tellFortune(numChildren, partnerNames, locations, jobs)) 
//console.log(tellFortune(numChildren, partnerNames, locations, jobs)) 
//console.log(tellFortune(numChildren, partnerNames, locations, jobs)) 
//console.log(tellFortune(numChildren, partnerNames, locations, jobs)) 
//console.log(tellFortune(numChildren, partnerNames, locations, jobs)) 
//console.log(tellFortune(numChildren, partnerNames, locations, jobs))
// As it seems, can't say I didn't enjoy it



