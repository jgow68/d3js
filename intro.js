// Console commands for d3.js

// create svg object (circle in purple) option 1
d3.select("body")
.append("svg")
.attr("width", 50)
.attr("height", 50)
.append("circle")
.attr("cx", 25)
.attr("cy", 25)
.attr("r", 25)
.style("fill", "purple");

// create svg object (circle in purple) option 2

var bodySelection = d3.select("body");

var svgSelection = bodySelection.append("svg")
.attr("width", 50)
.attr("height", 50);

var circleSelection = svgSelection.append("circle")
.attr("cx", 25)
.attr("cy", 25)
.attr("r", 25)
.style("fill", "purple");
		
// binding data to DOM element 

var theData = [1, 2, 3]

var p = d3.select("body").selectAll("p") // CSS selectors to grab elements
	.data(theData) // joins array of data with the current selection
	.enter() // 3 virtual selections for data operator: enter/update/exit.
	// enter contains placeholders for our <p> elements
	.append("p") // for each placefolder inserted previously, we create "p" HTML paragraph elements
	.text("hello"); // sets text content on all selected elements

	
// using data bound to DOM elements	


