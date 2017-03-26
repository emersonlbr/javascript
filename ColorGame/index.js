var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function(){
    var clikedColor = this.style.backgroundColor;
    if(clikedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      changeColors(clikedColor);
      console.log(clikedColor);
      console.log(pickedColor);
    }
    else {
      // alert("wrong");
      console.log(clikedColor);
      console.log(pickedColor);
      this.style.background = "#232323";
      messageDisplay.textContent = "Try again!";
    }

  })
}

function changeColors(color){
  //loop through all  squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  //gives a random number
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}
