window.onload = function() {

function getFloat() {
	document.getElementById("basic-num-1").innerHTML.value;
	document.getElementById("basic-num-2").innerHTML.value;
}

function getValue() {
	document.getElementById("basic-operation").innerHTML.value;
}

document.getElementById("basic-calc").addEventListener("click",basicCalc);

function basicCalc() {
var number1 = parseFloat(document.getElementById("basic-num-1").value);
var number2 = parseFloat(document.getElementById("basic-num-2").value);
var operation = document.getElementById("basic-operation").value;
var answer = null;

if (operation == "+") {
answer = number1 + number2;
}
else if (operation == "-") {
answer = number1 - number2;
}
else if (operation == "*") {
answer = number1 * number2;
}
else if (operation == "/") {
answer = number1 / number2;
}
document.getElementById("basic-answer-alert").innerHTML = answer;
}

// Trip calculation

function getFloatTrip() {
	document.getElementById("trip-distance").innerHTML.value;
	document.getElementById("trip-mpg").innerHTML.value;
	document.getElementById("trip-cost").innerHTML.value;
	document.getElementById("trip-speed").innerHTML.value;
}



document.getElementById("trip-calc").addEventListener("click",basicCalcTrip);

		function basicCalcTrip() {
			var dist = parseFloat(document.getElementById("trip-distance").value);
			var MPG = parseFloat(document.getElementById("trip-mpg").value);
			var costGallon = parseFloat(document.getElementById("trip-cost").value);
			var speed = parseFloat(document.getElementById("trip-speed").value);
			var answerTrip = null;  

			
				if (speed <= 60) {
					answerTrip = (dist / MPG * costGallon); //when the speed is less than 60, the formula is distance / mpg * cost 
				}
				else if (speed > 60) {
					answerTrip = dist / (MPG - (speed - 60) * 2) * costGallon; //when the speed is more than 60, the formula is `distance / (mpg - (speed - 60) * 2
				}
document.getElementById("trip-answer-alert").innerHTML = answerTrip;
		}

}