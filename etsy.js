// // // //I was trying to understand how to grab the # out of the object in items by declaring a variable before the var of total (and the function). I understood how to get total. avgPrice took me a second.
// //
var total = items.reduce(function(previous, current) {
    return {price: previous.price + current.price}
}, {price:0})
//
var avgPrice = (total.price / items.length)

console.log('The average price is' +' $'+ avgPrice.toFixed(2))

// //
// // //I'm not really understanding this method. I was relentlessly trying to use if and else statements to return a boolean answer AND then if true, print the title name. Sighhhhh....
var movies = items.filter(function(item){
     return item.price >= 14 && item.price <= 18
})
console.log('Items that cost between $14.00 USD and $18.00 USD:', movies)

// //
var titles = items.filter(function(item){
     return item.currency_code === "GBP"
})
titles.forEach(function(director){
    console.log(director.title + ' costs ' + director.price)
})
//
var woodThings = items.filter(function(woodThing) {
    return woodThing.materials.includes('wood')
})
woodThings.forEach(function(materialDescription){
    console.log(materialDescription.title)
})


var materialsCount = items.filter(function(item) {
    return item.materials.length > 8
})
var eightMore = materialsCount.map(function(eight) {
    return '\n' + eight.title +' has '+ eight.materials.length+ ' materials ' + '\n' + eight.materials.join('\n')
})
console.log(eightMore.join(', '))

var whoMadeIt = items.filter(function(item) {
    return item.who_made === 'i_did'
})
console.log(whoMadeIt.length + ' were made by their sellers')
