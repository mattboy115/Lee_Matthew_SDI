//Lee_Matthew_Conditionals_Assignment_5/21/2015

var howManyPhones = prompt("How many phones will you put on your plan? The initial cost is 20 dollars plus 50 dollars per phone.\nWe will add up to 5 phones per line!"); //Asks how many phones will be put on your bill.
var billBeforeData = howManyPhones * 50 + 20; //Bill with the number phones added



if(howManyPhones <= 5 && howManyPhones >= 1) {
	addData = prompt("You have added " + howManyPhones + " phones to your line. Your bill before data is $" + billBeforeData + ". Will you add data to your plan?"); //What happens when an acceptable value is entered.
}

else {
	howManyPhones = prompt("That's not an option we offer. Try again!"); //What happens when it's any other numerical value.
}

if(howManyPhones == "" || isNaN(howManyPhones)) {
	howManyPhones = prompt("We're sorry. You're going to have to enter a whole number."); //What happense when a non number value or blank is entered.
}

if(addData == "No" ) {
	console.log("Your final bill is " + billBeforeData + ".") //If the answer to the data question is "No". This code runs.
}

if(addData == "Yes" ) {
	var howMuchData = prompt("We offer up to 8gb of data per month for our customers. How much data would you like?\n 1gb: $10\n3gb: $20\n5gb: $40\n8gb: $50"); //If the answer is "yes", then this code runs.
}

else {
	var howMuchData = prompt("That's not an answer we're looking for."); //If the answer is anything else this code runs.
}

if(howMuchData == 1) {
	finalBill = billBeforeData + 10;
	console.log("Your final bill is $" + finalBill + "."); //The 
}

if(howMuchData == 3) {
	finalBill = billBeforeData + 20;
	console.log("Your final bill is $" + finalBill + ".");
}
if(howMuchData == 5) {
	finalBill = billBeforeData + 40;
	console.log("Your final bill is $" + finalBill + ".");
}
if(howMuchData == 8) {
	finalBill = billBeforeData + 50;
	console.log("Your final bill is $" + finalBill + ".");
}

else{

}
