var userChoice = prompt("Please input a number.");

var computerNumber = Math.floor((Math.random() *50) + 1);

if (userChoice < computerNumber) {
	alert("Your number is lower!")
}
else if (userChoice > computerNumber) {
	alert("Your number is higher!")
}
else {
	alert("You tied!")
}
