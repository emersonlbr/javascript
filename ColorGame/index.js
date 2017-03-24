var colors = [
  "rgb(255,0,0)",
  "rgb(0,255,0)",
  "rgb(0,0,255)",
  "rgb(0,255,255)",
  "rgb(255,0,255)",
  "rgb(255,255,255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[i];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
}
