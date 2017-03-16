window.addEventListener('load', function(e) {
  document.querySelector('#test').innerHTML = 'learn';
}, false);

var p = document.getElementsByTagName("p");
p[2].style.color = "green";


console.log("this shit doesnt work");

var body = document.getElementsByTagName("body");
body[0].style.backgroundColor = "black";


var x = document.getElementById("test");
x.style.color = "pink";
x.style.backgroundColor = "green";

alert("welcome to my webpage!");


console.log("okay now it does work");



var button = document.getElementsByClassName("button");

button.onclick = function(){
  body[0].style.backgroundColor = "grey";

}

var emerson = 12

console.log("This should work just fine!");

//changes the background color when click the button
