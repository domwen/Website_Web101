/*! JS Code for my groovy web project */

/* Very important function in all jquery projects */
$(document).ready(function() {
	$("#addButton").click(calcSum);	
	$("#perc1Button").click(percalc1);	
	$("#perc2Button").click(percalc2);	
	$("#perc3Button").click(percalc3);
});


function checkForEmptyInputs() {
	var errorMessage;
	if ($('#number1').val() == "" || $('#number2').val()  == "") {
		// Show error message
		alert('Error: Both fields must contain a number');
		return true;
	} else {
		return false;
	}
}

function appendToHistory(resultText) {
    $('#history').append('<li>' + resultText +'</li>');
}                         

function calcSum() {
	if (checkForEmptyInputs()) {
		return false;
	}		
	var value1 = parseInt($('#number1').val(),10);
	var value2 = parseInt($('#number2').val(),10);
    /* var number1 = $('#number1').val;
       if (number1.length == 0){
        alert("NOOO");
    }
        else{
		console.log("Values are " + value1 + " and " + value2); */
	var sum = value1 + value2;
	console.log("Sum is " + sum);
	$("#result").html(sum);
	appendToHistory("The sum is " + sum);
	return false; 
}



function percalc1(){
	if (checkForEmptyInputs()) {
		return;
	}		
	var value1 = parseInt($('#number1').val(),10)/100;
	var value2 = value1*parseInt($('#number2').val(),10);
	console.log("The result is " + value2);
	$("#result").html(value2);
	appendToHistory("n1% of n2 is " + value2);
    return false;
}

function percalc2(){
	if (checkForEmptyInputs()) {
		return;
	}		
	var value1 = parseInt($('#number1').val(),10);
	var value2 = parseInt($('#number2').val(),10);
	var value3 = (value1/value2)*100;
	console.log("The result is " + value3);
	$("#result").html(value3);
	appendToHistory("n1 is " + value3 + "% of n2");
    return false;
}
		
function percalc3(){
	if (checkForEmptyInputs()) {
		return;
	}		
	var value1 = parseInt($('#number1').val(),10);
	var value2 = parseInt($('#number2').val(),10)/100;
	var value3 = value1/value2;
	console.log("The result is " + value3);
	$("#result").html(value3);
	appendToHistory("n1 is n2% of " + value3);
    return false;
}
