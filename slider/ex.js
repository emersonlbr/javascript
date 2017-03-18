var images = [
  "http://s2.glbimg.com/zG5ZQbRqORjh21Pr_xBWv8EQMQQ=/620x0/top/s.glbimg.com/jo/eg/f/original/2014/03/21/dani_bolina_sexy_231.jpg",
  "http://estadiovip.com.br/img/fotogalerias/legacy/n8356.jpg",
   ""];

var num = 0;

function next(){
 var slider = document.getElementById("slider");
num++;
if (num>=images.length){
  num=0;
}
slider.src=images[num];
}

function prev() {
var slider = document.getElementById("slider");
num--;
if (num > 0){
  num = images.length-1;
}
slider.src = images[num];
}
