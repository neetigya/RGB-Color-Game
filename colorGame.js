var numSquares = 6;
var color = GenerateRandomColors(numSquares);	


var squares =  document.querySelectorAll(".square");
var colorDisplay  = document.getElementById("colorDisplay"); 
var pickedColor  = pickColor();
var message = document.getElementById("message");
var resetButton  =  document.querySelector("#reset");
var easyButton = document.getElementById("easyBtn");
var hardButton = document.getElementById("hardBtn");

easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares = 3;
	color = GenerateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		if(color[i]){
			squares[i].style.background = color[i];
		}
		else{
			squares[i].style.display ="none";
		}
	}
	document.querySelector("h1").style.background = "#232323";

})

hardBtn.addEventListener("click", function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numSquares = 6;
	color = GenerateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		
			squares[i].style.background = color[i];
			squares[i].style.display ="block";
		
	}
	document.querySelector("h1").style.background = "#232323";
})



resetButton.addEventListener("click",function(){
	//generate all new colors
		color =GenerateRandomColors(numSquares);
		
	//pick a new random color from array
		pickedColor = pickColor(); 
		colorDisplay.textContent = pickedColor;
		this.textContent = "New Colors"
		message.textContent = "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
	//color the background of the square
	squares[i].style.background = color[i];}
	document.querySelector("h1").style.background = "steelblue";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//color the background of the square
	squares[i].style.background = color[i];

	//pick the clicked color

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		//compare color

		if (clickedColor=== pickedColor) {
			message.textContent = "Correct";
			changeColor(pickedColor);
			resetButton.textContent = "Play Again!"
			document.querySelector("h1").style.background = pickedColor;

		} else {

			this.style.background = "#232323";
			message.textContent = "Try Again";
		}
	});
} 

function changeColor (color){

	for (var i = 0; i <squares.length; i++) {
		squares[i].style.background = color;	
	}
} 

function pickColor(){

	var random = Math.floor(Math.random() * color.length);
	return color[random];
}

function GenerateRandomColors(num){

	arr = [];

	for (var i = 0; i < num; i++) {
			
		arr.push(randomColor());
}
	return arr;
}

function randomColor(){
	//pick a red
	var r = Math.floor(Math.random() * 256);
	//green
	var g = Math.floor(Math.random() * 256);
	//blue
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")"	;
}

