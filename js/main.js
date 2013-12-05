/*! JS Code for my groovy web project */

/* Very important function in all jquery projects */
$(document).ready(function() {
	console.log("hello world!");
	// Animation
	$("#singlebutton").hide().show("slowly"); 
	// Change color of button
	$("#singlebutton").removeClass('btn-primary').addClass('btn-warning');
	$("#singlebutton").click(outputValue);	
});


/*
* This is an example function
*/
function outputValue() {
	var value1 = $('#number1').val();
	var value2 = $('#number2').val();
	console.log("Values are " + value1 + " and " + value2);
	return false;
}
