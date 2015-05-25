//Lee_Matthew_Functions_Worksheet_5/24/2015

//Circumference

var piRound = 3.14; //Pi rounded to the hundreths place. This variable is outside the functions because it's a contol and will always be the same.

function calcCirc() {  //Function for figuring circumference.
	var diaOfCircle = prompt("What is the diameter of your circle?"); //User input for diameter of the circle
	var circumference = piRound * diaOfCircle; //Variable figuring the circumference.
	console.log(circumference); //Console prints out the result, being the variable circumference.
}

function calcArea() {  //Function for area just because.
	var radOfCircle = prompt("What is the radius of your circle?"); //User input for radius of the circle.
	var area = piRound * math.pow(radOfCircle, 2); //Variable figuring the area of a circle.
	console.log(area); //Console prints out the result, being the variable area.

}

calcCirc * calcArea

//Stung

