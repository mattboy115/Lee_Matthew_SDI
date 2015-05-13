//Lee_Matthew_Expression_Worksheet_5/13/15

//Dog Years Problem

var humanYears = prompt("What is Sparky's age in human years?"); //Enter a human age.
var dogYears = humanYears * 7; //The dog age conversion.

console.log("Sparky is " + humanYears + " human years old which is " + dogYears + " in dog years."); //Output of dog years.

//Slice of Pie Part I

var slicesPerPizza = 8; //Variable for how many slices are in a pizza.
var peopleAtParty = prompt("How many people will be at the party?"); //How many people are at the party?
var numberOfPizzas = prompt("How many pizzas will you order?"); //How many pizzas were ordered for the party?

alert("Each person at the party will get " + numberOfPizzas * slicesPerPizza / peopleAtParty + " slices of pizza."); //How many slices per person will appear in an alert.

//Slice of Pie Part II

var peopleAtParty2 = prompt("How many people will be at the party?"); //New variable for people at the party.
var numberOfPizzas2 = prompt("How many pizzas will there be?"); //New variable for number of pizzas.

alert("Sparky will get " + numberOfPizzas2 * slicesPerPizza % peopleAtParty2 + " slices for each person."); //How many left over per person will show up in an alert here.

//Average Shopping Bill

alert("Your grocery totals for this month have been: \n$160.45, $120, $145.60, $180.30, and $90.94\n Check the console for your average.") //An alert to show the person what is being averaged.
var groceryTotals = [160.45, 120.00, 145.60, 180.30, 99.94]; //The array showing the week's totals.
var groceryBudget = groceryTotals[(0 + 1 + 2 + 3 + 4 +5)/5]; //The PEMDAS function figuring the mean.
console.log(groceryBudget); //Output appears in the console.

//Dicounts

var itemPrice = prompt("What is the price of your item? \nWe will apply Ohio state sales tax to it!"); //The price of any item is to be entered.
var afterTax = itemPrice / .575; //Tax is figured.
var atFix = afterTax.toFixed(2); //Simplifies output to 2 decimal places right.
alert("Your item is $" + atFix + " with Ohio state tax added."); //The output.