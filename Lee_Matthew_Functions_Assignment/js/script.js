//Lee_Matthew_Functions_Assignment_5/26/2015

//Function for Dimensions of a Sphere

var pi = 3.14; //pi rounded down to the hudredths place.
var radius = prompt("Do you know the diameter of your sphere? Just half that is your radius! What's the radius?") //User input for the shape's radius.

calcSphereVolume(pi, radius);

function calcSphereVolume(p, r) {
	var sphereArea = p * Math.pow(radius, 2);
}

//Function for Dimensions of a Rectangular Prism

alert

var length = prompt("What's the length of this prism?"); //User input for the shape's length.
var width = prompt("What's the width?"); //User input for the shape's width.
var height = prompt("What is the height?"); //User input for the shape's height.

calcPrismVolume(length, width, height); //Storage for the above three variables.

function calcPrismVolume(l, w, h) { //Function and its parameters.
	var prismArea = l * w * h; //New variable made from multiplying those parameters.
	console.log("Your prism is " + prismArea + " square units!"); //Output of shape's area.
}

calcPrismVolume; //Invoke the prism function.