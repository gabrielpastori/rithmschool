$(document).ready(function(){
    $(".items").click(function() {
      $("li").animate({
        // what properties to manipulate
        opacity: 0.5,
        marginLeft: "+=100",
      }, 5000, function() {
        // this code will be executed when the animation is complete
        $("p").css("font-size","+=5");
      });
    });
  });