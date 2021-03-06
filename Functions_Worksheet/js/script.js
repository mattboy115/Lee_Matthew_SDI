//Lee_Matthew_Functions_Worksheet_5/24/2015

//CIRCUMFERENCE

var piRound = 3.14; //Pi rounded to the hundreths place. This variable is outside the functions because it's a contol and will always be the same.
var diaOfCircle = prompt("What is the diameter of your circle?"); //User input for diameter of the circle

calcCirc(piRound, diaOfCircle);

function calcCirc(p, d) {  //Function for figuring circumference.
	var circumference = p * d; //Variable figuring the circumference.
	console.log(circumference); //Console prints out the result, being the variable circumference.
}

function calcArea() {  //Function for area just because I felt like it.
	var radOfCircle = prompt("What is the radius of your circle?"); //User input for radius of the circle.
	var area = piRound * Math.pow(radOfCircle, 2); //Variable figuring the area of a circle.
	console.log(area); //Console prints out the result, being the variable area.

}

calcCirc(); //Circumference function invoked.
calcArea(); //Area function invoked.

//I've tested out these two functions: 8 for the first one, getting 25.12 as an answer, and 4 for the other, getting 50.254 as an answer.
//Checking those on the calculator, I am seeing they are correct.

//STUNG

var stingsPerPound = 8.666666667; //Number of stings per pound to kill an animal.
var weightOfAnimal = prompt("What is the weight of the animal in lbs?"); //Input weight of animal.

stingsToKill(stingsPerPound, weightOfAnimal); //Variable declaration

function stingsToKill(s, w) { //Function for figuring how many stings would kill the animal with the input weight
	var totalStings = s * w; //Code ran for figuring the number of stings
	console.log("It would take " + totalStings + " bee stings to kill that animal.") //Prints out the value of totalStings.
}