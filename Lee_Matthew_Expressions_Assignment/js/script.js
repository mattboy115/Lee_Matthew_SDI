//Lee_Matthew_5/13/15_Expressions_Assignment

var grassHeight = prompt("What would you say is the height of your grass in inches? \nI charge more if it's really tall."); //Prompt for the height of grass.
var yeardWidth = prompt("What is the width of your lawn in yards?"); //Prompt for the width of lawn.
var yardLength = prompt("How far back does your lawn go in yards?"); //Promot for the length of lawn.

alert("Your yard will cost $" + (yardLength * 0.5 + yeardWidth * 0.25 + grassHeight * 2) + " to cut."); //Output showing the cost of the lawn in dollars.

//I typed in 1, 40, and 50 and got $37.
//I've tried 3, 200, and 340 and got $226.
//I also tried 13, 35 and 60 and I got $64.75.

//Looks like it works.