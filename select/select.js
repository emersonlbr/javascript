// selecting the html
var h1 = document.querySelector("h1");

//manipulating the object
h1.style.color = "green";


// simple animation

var body = document.querySelector("body"); //select
var isBlue = false;

setInterval(function(){
  if (isBlue) {
    body.style.background = "white";
  } else {
      body.style.background = "#333";
    }
  }, 1000);
