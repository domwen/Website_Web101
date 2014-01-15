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


function calc1(){
	
	var errorMessage;
	
	if("$form1.num1.value == "" && document.form1.num2.value == "")
		errorMessage = "Please enter numbers in both fields.";
	else if(document.form1.num1.value == "" && document.form1.num2.value != "")
		errorMessage = "Please enter a number in field 1.";
	else if(document.form1.num1.value != "" && document.form1.num2.value == "")
		errorMessage = "Please enter a number in field 2.";
		
	if(errorMessage)
	{
		alert("Something went wrong: " + errorMessage);
		return;
	}
	
v1 = $("#number1").val/100;
v2 = v1*$("#number2").val;
document.form1.result1.value = v2
}

function calc2(){
		var errorMessage2;
	
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
	}
	
v1 = document.form1.num3.value;
v2 = document.form1.num4.value;
v3 = v1/v2;
document.form1.result2.value = v3*100;
}
		
function calc3(){
			var errorMessage3;
	
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
	}
v1 = document.form1.num5.value;
v2 = document.form1.num6.value/100;
document.form1.result3.value = v1/v2;
}
