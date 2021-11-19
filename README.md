## Javascript 101 Pizza Parlor

An introduction to JS data types, collections, iteration and DOM manipulation, with a dash of oregano.

In this example we took a look at 

- what it means to initialize a variable and assign it a value
- how let and const differ when it comes to reassigning a variable's value
- primitive data types in JS, like string, number, boolean, undefined and null
- complex types like arrays and objects
- various ways to define and populate arrays and objects with values
- looping over an array of objects to build an HTML representation of our data

Then, we look at functions and how to

- define a function without parameters
- define a function with parameter(s)
- call/execute/invoke a function
- pass data to a function
- use a variable to capture the returned value from a function

We used that as an opportunity to write a function that calculates an id for an object based on the existing id of the last object in array.

In our final session we added a makePizza function that

- creates a pizza object to store a size, topping and crust selection, plus the total price of the pizza
- assigns values for the size, crust and topping properties using the data passed into the function via three parameters
- loops over each collection ( toppings, crusts, sizes ) to find the individual price for the chosen ingredients and adds that to the total price of the pizza

We then invoked makePizza and captured the returned object in a variable
Finally, we built an HTML representation of the new pizza object and inserted into the DOM
