			//Lee_Matthew_Functions_Assignment_5/26/2015

			//Main Function

			function theConjurer() {
				firstQuestion = prompt("Hi! This is my shape dimension calculator! I have three different shapes in this version but I can always add more! For now I have these three:\nCircle Area\nSphere Volume\nRectangular Prism Volume\n\nEnjoy!!!");
					return firstQuestion.toLowerCase(); //The answer to this prompt is supposed to spring one of the functions below.

				if(firstQuestion === "Circle" || firstQuestion === "Circle Area") { //If the answer is one of these strings, then it triggers the circle area function.
					console.log("You've slected Circle!")
					calcCircleArea();
				}

				else if(firstQuestion === "Sphere" || firstQuestion === "Sphere Volume") { //This one triggers the sphere volume function.
					console.log("You've slected Sphere!")
					calcSphereVolume();
				}

				else if(firstQuestion === "Prism" || firstQuestion === "Rectangular Prism" || firstQuestion === "Prism Volume" || firstQuestion === "Rectangular Prism Volume") { //This one is for volume of a rectangular prism.
					console.log("You've slected Rectangular Prism!")
					calcPrismVolume();
				}

				else {  //Anything else just brings up another prompt for the same answers.
					firstQuestion = prompt("Sorry, that's not one of the options I have right now. Try again!");
				}
			}

			theConjurer(); //To automatically bring up the starting function.


			//Function for Dimensions of a Circle

			var pi = 3.14; //pi rounded down to the hudredths place.
			var circleRadius = prompt("What is the radius of your circle?")

			calcCircleArea(pi, circleRadius); //Variable declarations.

			function calcCircleArea(p, r) { //
				var circleArea = p * Math.pow(r, 2);
				console.log("The circle you've entered is " + circleArea + " square units!");
			}


			//Function for Volume of a Sphere

			var fourThirds = (4/3);
			var radius = prompt("Do you know the diameter of your sphere? Just half that is your radius! What's the radius?"); //User input for the shape's radius.
			
			calcSphereVolume(fourThirds, pi, radius);
				
			function calcSphereVolume(f, p, r) {
				var sphereVolume = f * p * Math.pow(r, 3);
				console.log("Your sphere is " + sphereVolume + " cubed units! Congradulations!");
			}

			//Function for Dimensions of a Rectangular Prism

			var length = prompt("What's the length of this prism?"); //User input for the shape's length.
			var width = prompt("What's the width?"); //User input for the shape's width.
			var height = prompt("What is the height?"); //User input for the shape's height.

			calcPrismVolume(length, width, height); //Storage for the above three variables.

			function calcPrismVolume(l, w, h) { //Function and its parameters.
				var prismVolume = l * w * h; //New variable made from multiplying those parameters.
				console.log("Your prism is " + prismVolume + " cubed units!"); //Output of shape's area.
			}