var pizza = new Object()
pizza.meat = 'Sausage' //meat is a property. doesn't do anything
pizza.cheese = 'Cheddar'
pizza.veggies = 'Olives'

//more common way of writing in Javascript
var pizza = {
    meat: 'Sausage',
    cheese: 'Cheddar',
    veggies:'Olives',
}
pizza.meat = 'Pepperoni'
//console.log(pizza.meat)

//dynamic property
var topping = 'cheese'
//console.log(pizza[topping])

//loop through properties
var props = Object.keys(pizza)//keys pull properties. key === property

props.forEach(function(prop) {
    //console.log(pizza[prop])//must use square brackets to dynamically grab properties

})

//console.log(props)

//don't worry about order in lists for objects, only an array cares about order

//arrays of objects are commonly used
var movies = [
    {
        title: 'Star Wars',
        genre: 'Sci Fi',
        year: 1977,
        directors: [
            {
                name: 'George Lucas'
            },
            {
                name: 'JarJar'
            }
        ]
    },
    {
        title: 'Forest Gump',
        genre: 'Drama',
        year: 1995,
        directors: [
            {
                name: 'Robert Zemechas'
            }
        ]
    }
]

var directors = movie.directors.map(function(director) {
    return director.name
})
directors = directors.join(', ')

console.log(movie.title + ' - ' + movie.genre + '('+ movie.year +') - Directed By' + directors)//movie.directors[0].name)

// movies.forEach(function(movie){
//     console.log(movie.title + ' - ' + movie.genre + '('+ movie.year +')' + movie.directors[0].name)
// })


var movie1 = {
    title: 'Star Wars',
    genre: 'Sci Fi',
    year: 1977
}

var movie2 = {
    title: 'Forest Gump',
    genre: 'Drama',
    year: 1995
}
