//Lee_Matthew_Conditionals_Assignment_5/21/2015

var howManyPhones = prompt("How many phones will you put on your plan? The initial cost is 20 dollars plus 50 dollars per phone.\nWe will add up to 5 phones per line!"); //Asks how many phones will be put on your bill.
var billBeforeData = howManyPhones * 50 + 20; //Bill with the number phones added



if(howManyPhones <= 5 && howManyPhones >= 1) {
	addData = prompt("You have added " + howManyPhones + " to your line. Your bill before data is $" + billBeforeData + "."); //What happens when an acceptable value is entered.
}

if(howManyPhones == "" || isNaN(howManyPhones)) {
	howManyPhones = prompt("We're sorry. You're going to have to enter a whole number."); //What happense when a non number value is entered.
}

else {
	howManyPhonesm = prompt("We're sorry. That's not an option we offer.")
}

if(addData = "Yes" || "yes" || "y" || "Y") {
	var howMuchData = prompt("We offer up to 8gb of data per month for our customers. How much data would you like?\n 1gb: $10\n3gb: $20\n5gb: ");
}

var finalBill = howManyPhones + howMuchData;

console.log("Your final bill is $" + finalBill + ".");