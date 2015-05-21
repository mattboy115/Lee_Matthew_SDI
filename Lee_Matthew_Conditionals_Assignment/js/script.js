//Lee_Matthew_Conditionals_Assignment_5/21/2015

var howManyPhones = prompt("How many phones will you put on your plan? The initial cost is 20 dollars plus 50 dollars per phone.\nWe will add up to 5 phones per line!"); //Asks how many phones will be put on your bill.
var billBeforeData = howManyPhones * 50 + 20; //Bill with the number phones added



if(howManyPhones <= 5) {
	alert("You have added " + howManyPhones + " to your line. Your bill before data is $" + billBeforeData + "."); //What happens when an acceptable value is entered.
}

if(howManyPhones <= 0) {
	howManyPhones = prompt("I'm sorry. We can't add negative phones to our data plans yet. Try next year perhaps."); //What happense if 0 or a negative number is entered.
}
if(isNaN(howManyPhones)) {
	howManyPhones = prompt("We're sorry. You're going to have to enter a whole number."); //What happense when a non number value is entered.
}

if(howManyPhones == " ") {
	howManyPhones = prompt("You can't leave that space blank. Sorry.");
}

var howMuchData = prompt("We offer up to 8gb of data per month for our customers. How much data would you like?\n 1gb: $10\n3gb: $20\n5gb: ");

var finalBill = howManyPhones + howMuchData;

console.log("Your final bill is $" + finalBill + ".");