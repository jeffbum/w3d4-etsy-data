//standard way to create an array or lists
var invites = ['Matt', 'Susan', 'Jessica', 'John']

var tasks = new Array(3)
tasks[0] = 'Buy food'
tasks[1] = 'Feed pets'
tasks[2] = 'Cook food'

var inbox = new Array('Water bill', 'Pay check', 'Greeting card') //new is a keyword meaning make a copy of whatever comes after

inbox[3] = 'You have rich uncle that wants to give you money.'

tasks.push('Do homework')//pushes something onto the end of the lists
tasks.unshift('Watch Netflix')//pushes something to the beginning of the list

var thingsIGotRidOf = tasks.shift ()//cannot take any arguements//shows what was push out

// tasks[0] = 'Watch Hulu'//wipes out what was already in the 0 position

tasks.pop()//take something off the end of an array//removes the last item
//console.log(tasks)
var payCheck = inbox.slice(1,2)//start at index 1 in the array, and end at index 2 (chunks of an array). Have to assign a variable to it to see what we did.

//console.log(payCheck)

inbox.splice(1, 0, 'Your Are Hired', 'Job Offer')//1st number is placement, and second is what do you want to get rid of. Will modify array

//console.log(inbox)

// delete inbox[0]//deletes input, but not the index. so now there's undefined in index 0 in the inbox array.
// delete inbox //look into this and why it didnt work
// console.log(inbox)

inbox[inbox.length] = 'Invite to Spotify' //same result as push
// console.log(inbox.length)//how many objects are in array.
// console.log(inbox)

var hasJobOffer = inbox.includes('Job Offer')//Boolean, EXACT match, case sensitive
//console.log(hasJobOffer)

//var jobOfferIndex = inbox.indexOf('Job Offer')//returns index # of the item we specify
//var jobOfferIndex = inbox.indexOf('Job Salary')//returns -1 if it can't find a match
inbox.push('Job Salary')

// if (inbox.indexOf('Job Salary') === -1) {
//     console.log('No salary yet.')
// }
// else {
//     console.log('Its finally here!')
// }
// console.log(jobOfferIndex)

//console.log(inbox)

var matches = inbox.find(function(item){// Find only finds the first match. single string returned
    return item.includes('Job')
})

function checkForJob(item){ //anonymous function.
    return item.includes('Job')
}

var matches = inbox.filter(checkForJob)
//console.log(matches)
var matches = []
for (var i = 0; i < inbox.length; i++) {
    //console.log(i + '. ' + inbox[i])
    var hasJob = checkForJob(inbox[i])
    if (hasJob) {
        matches.push(inbox[i])
    }
}
//console.log(matches)
// var reverseInbox = inbox.reverse()
// console.log(reverseInbox)
// //console.log(inbox.reverse())//reverses array order immutably.

// inbox = inbox.reverse()//shorter path to reverse the path
// console.log(inbox)

var fruit = ['Apple', 'Banana', 'Cherry', 'Watermelon']
fruit.forEach(function(item) {

    //console.log(item.toUpperCase())//similar to the for loop. don't have to make variables or any of the other none sense. forEach is declaring
})

//map transforms an array of items, one item at a time.
var upperCaseFruit = fruit.map(function(item) {
    return `<div>${item}<div>`//changes its to each item has divs wrapped around it
    //return item.toUpperCase()//mutating the array to all caps
})
//console.log(upperCaseFruit)
fruit = fruit.map(function(item, i) {
    if (i === 2) {
        return `<section>${item.toUpperCase()}<section>`
    }
    else {
        return `<div>${item}<div>`
    }
})

//console.log(fruit)

var prices = [
    {price: 7.98},
    {price: 14.99},
    {price: 2.30},
    {price: 12.80},

]

var total = prices.reduce(function(previous, current) {
    return {price: previous.price + current.price}
},{price: 0})//making our first value 0.
console.log(total)
console.log(total.price / prices.length)//<--average of the array items
