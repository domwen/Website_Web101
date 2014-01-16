/*! JS Code for my groovy web project */

/* Very important function in all jquery projects */
$(document).ready(function() {
	console.log("hello world!");
	// Animation
	$("#addButton").hide().show("slowly"); 
	// Change color of button
	$("#addButton").removeClass('btn-primary').addClass('btn-warning');
	$("#addButton").click(calcSum);	
	$("#perc1Button").click(percalc1);	
	$("#perc2Button").click(percalc2);	
	$("#perc3Button").click(percalc3);
});


/* function check() {
	var errorMessage;
	
	if($('#number1').val == "" && $('#number2').val  == "")
		errorMessage = "Please enter numbers in both fields.";
	else if($('#number1').val  == "" && $('#number2').val  != "")
		errorMessage = "Please enter a number in field 1.";
	else if($('#number1').val != "" && $('#number2').val  == "")
		errorMessage = "Please enter a number in field 2.";
		
	if(errorMessage)
	{
		alert("Something went wrong: " + errorMessage);
		return;
	}
} */

function appendToHistory(resultText)
{
    $('#history').append('<li>' + resultText +'</li>');
}                         

function calcSum() {
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
	
	
	
var value1 = parseInt($('#number1').val(),10)/100;
var value2 = value1*parseInt($('#number2').val(),10);
	console.log("The result is " + value2);
	$("#result").html(value2);
	appendToHistory("n1% of n2 is " + value2);
    return false;
        


}

function percalc2(){
/*		var errorMessage2;
	
	if(document.form1.num3.value == "" && document.form1.num4.value == "")
		errorMessage2 = "Please enter numbers in both fields.";
	else if(document.form1.num3.value == "" && document.form1.num4.value != "")
		errorMessage2 = "Please enter a number in field 1.";
	else if(document.form1.num3.value != "" && document.form1.num4.value == "")
		errorMessage2 = "Please enter a number in field 2.";
		
	if(errorMessage2)
	{
		alert("Something went wrong: " + errorMessage2);
		return;
	} */
	
var value1 = parseInt($('#number1').val(),10);
var value2 = parseInt($('#number2').val(),10);
var value3 = (value1/value2)*100;
	console.log("The result is " + value3);
	$("#result").html(value3);
	appendToHistory("n1 is " + value3 + "% of n2");
    return false;
}
		
function percalc3(){
	/*		var errorMessage3;
	
	if(document.form1.num5.value == "" && document.form1.num6.value == "")
		errorMessage3 = "Please enter numbers in both fields.";
	else if(document.form1.num5.value == "" && document.form1.num6.value != "")
		errorMessage3 = "Please enter a number in field 1.";
	else if(document.form1.num5.value != "" && document.form1.num6.value == "")
		errorMessage3 = "Please enter a number in field 2.";
		
	if(errorMessage3)
	{
		alert("Something went wrong: " + errorMessage3);
		return;
	} */
var value1 = parseInt($('#number1').val(),10);
var value2 = parseInt($('#number2').val(),10)/100;
var value3 = value1/value2;
	console.log("The result is " + value3);
	$("#result").html(value3);
	appendToHistory("n1 is n2% of " + value3);
    return false;
}
