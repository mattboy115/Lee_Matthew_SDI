//Lee_Matthew_5/13/15_Expressions_Assignment

var grassHeight = prompt("What would you say is the height of your grass in inches? \nI charge more if it's really tall."); //Prompt for the height of grass.
var yeardWidth = prompt("What is the width of your lawn in yards?"); //Prompt for the width of lawn.
var yardLength = prompt("How far back does your lawn go in yards?"); //Promot for the length of lawn.

console.log("Your yard is going to be $" + (yardLength * 0.5 + yeardWidth * 0.25 + grassHeight * 2) + " to cut."); //Output showing the cost of the lawn in US dollars.
