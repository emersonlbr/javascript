$("input").keypress(function(event){
  // key 13 is the "enter key"
if(event.which === 13){
	alert("bitch");
}
});

$("h1").on("click", function(){
  $(this).css("color", "purple");
});

$("input").on("keypress", function(){
  // event shows the kew pressed
  console.log(event);
});

$("button").on("mouseover", function(){
  console.log("GET OUT");
  // this refers to the button that the mouse is over
  // the others won't be affected
  $(this).css("color", "red");
});

$("button").on("mouseleave", function(){
  console.log("COME BACK!");
  $(this).css("color", "green");
});

// effects to de divs
// $("#lol").on("click", function(){
//   $(".main").fadeOut(2000, function(){
//     console.log("fade completed");
//     $(this).remove();
//     $("#lol").remove();
//   });
// });

$("#lol").on("click", function(){
  $(".main").slideToggle(5000);
});


// $("#lmao").on("click", function(){
//   $(".notmain").fadeIn(200, function(){
//     console.log("fade completed");
//     // $(this).remove();
//   });
// });

$("#lmao").on("click", function(){
  $(".notmain").fadeToggle(200, function(){
    console.log("fade completed");
    // $(this).remove();
  });
});
