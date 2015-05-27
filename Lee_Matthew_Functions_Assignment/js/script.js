//Lee_Matthew_Functions_Assignment_5/26/2015

//Main Function

function theConjurer() {
	prompt("Hi! This is my shape dimension calculator! I have three different shapes in this version but I can always add more! For now I have these three:\nCircle Area\nSphere Volume\nRectangular Prism Volume\n\nEnjoy!!!")

	if("Circle") {
		
	}
}

//Function for Dimensions of a Circle

var pi = 3.14; //pi rounded down to the hudredths place.
var radius = prompt("Do you know the diameter of your sphere? Just half that is your radius! What's the radius?") //User input for the shape's radius.

calcCircleArea(pi, radius);

function calcCircleArea(p, r) {
	var circleArea = p * Math.pow(r, 2);
	console.log("The circle you've entered is " + circleArea + " square units!")
}

//calcCircleArea; Invoke the circle area function

//Function for Volume of a Sphere

var fourThirds = (4/3);

calcSphereVolume(fourThirds, pi, radius);

function calcSphereVolume(f, p, r) {
	var sphereVolume = f * p * Math.pow(r, 3);
	console.log("Your sphere is " sphereVolume " cubed units! Congradulations!")
}

//calcSphereVolume; //Invoke the sphere volume function.

//Function for Dimensions of a Rectangular Prism

var length = prompt("What's the length of this prism?"); //User input for the shape's length.
var width = prompt("What's the width?"); //User input for the shape's width.
var height = prompt("What is the height?"); //User input for the shape's height.

calcPrismVolume(length, width, height); //Storage for the above three variables.

function calcPrismVolume(l, w, h) { //Function and its parameters.
	var prismVolume = l * w * h; //New variable made from multiplying those parameters.
	console.log("Your prism is " + prismVolume + " cubed units!"); //Output of shape's area.
}

//calcPrismVolume; //Invoke the prism function.