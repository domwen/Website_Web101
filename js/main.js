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
	var value1 = parseInt($('#number1').val(),10);
	var value2 = parseInt($('#number2').val(),10);
    var number1 = §('#number1').val;
       if (number1.length == 0){
        alert("NOOO");
    }
        else{
		console.log("Values are " + value1 + " and " + value2);
	var sum = value1 + value2;
	console.log("Sum is " + sum);
	$("#sum").html(sum);
	return false;
        }
}


