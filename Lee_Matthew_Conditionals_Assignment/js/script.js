var howManyPhones = prompt("How many phones will you put on your plan? The initial cost is 20 dollars plus 50 dollars per phone.\nWe will add up to 5 phones per line!");
var billBeforeData = howManyPhones * 50 + 20;



if(howManyPhones <= 5) {
	alert("You have added " howManyPhones " to your line. Your bill before data is $"billBeforeData".");
}

if(howManyPhones < 1) {
	alert("I'm sorry. We can't add negative phones to our data plans yet. Try next year perhaps.");
}
if(howManyPhones === NaN) {
	alert("We're sorry. You're going to have to enter a whole number.");
}

else {
	alert("We're sorry. That's not an available option right now.");
}

var howMuchData = prompt("We offer up to 8gb of data per month for our customers. How much data would you like?\n 1gb: $10\n3gb: $20\n5gb: ");