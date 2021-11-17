console.log("hello, world")

// The right side of an assignment is evaulated first foo's value will be 6
const foo = 2 + 4
const bar = "doggo"
const nuttin = null
const yessirno = true
// primitive data types

let foobar;

const favecolors = []


favecolors.push("orange")

foobar = "These are my favorite colors: "

console.log( "foobar 1", foobar )

foobar = 786

console.log( foo, bar, "foobar:", foobar)


// Our Pizza App!
const toppings = []

const crusts = [
  {
    id: 1,
    type: "deep dish",
    price: 2
  },
  {
    id: 2,
    type: "NY style",
    price: 1
  },
  {
    id: 3,
    type: "traditional hand-tossed",
    price: 0
  }
]

const sizes = [
  {
    id: 1,
    circumference: 12,
    price: 7
  },
  {
    id: 2,
    circumference: 14,
    price: 10
  },
  {
    id: 3,
    circumference: 16,
    price: 12
  }
]

// Biulding an object can be done in different ways based on your particular situation
const pep = {}
pep.name = "pepperoni"
pep.price = 1.5
pep.flavor = "greasy"
pep.id = 1 

// You can even assign a new property without giving it a value at the same time
pep.foo

// You can reassign the value of a property 
pep.name = "roni"
pep.foo = "bar"

// Take a look at what we have created in the dev tools' console tab
console.log("our pepperoni object", pep)
// This wil display {name: 'roni', price: 1.5, flavor: 'greasy', id: 1, foo: 'bar'}

// Dot notation works in both directions. Earlier we used it to assign a value. Here, we use it to read a value
console.log("How much is pepperoni?", pep.price)
// This will display 1.5

// Add our topping obj to our array of toppings objects
toppings.push(pep)

// How to display the price of the pep object in our toppings array
console.log(toppings[0].price)

const blackOlives = {
  name: "black olives",
  price: 1.25,
  flavor: {descriptions: ["gross", "yuck"]},
  id: 2
}

// Entering the MadLibs zone!
console.log(`The flavors of blackOlives are ${blackOlives.flavor.descriptions}`)

toppings.push(blackOlives)

// Build a string of HTML to represent our toppings data
let toppingMenu = `<h3>Here at Mama Leoni's Pizza Place you can add the following toppings to your pizza</h3><ul>`

for (const currentTopping of toppings ) {
  // do this to each thing in the array
  toppingMenu += `<li class="topping_name">${currentTopping.name}</li>`
}

toppingMenu += "</ul>"

document.querySelector("#toppings_list").innerHTML = toppingMenu





