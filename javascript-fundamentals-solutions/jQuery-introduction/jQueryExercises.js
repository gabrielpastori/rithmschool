$(document).ready(function(){
    //1
    console.log("Let's get ready to party with jQuery");
    //2
    $("article img").addClass("image-center");
    //3
    $("article").find("p").last().remove();
    //4
    $("h1#title").css("font-size",Math.random()*(100)+"px");
    //5
    $("ol").append($("<li>").text("a new li"));
    //6
    $("ol").empty();
    $("ol").append($("<p>").text("my apologize for the list's existence"));
    //7
    $(".form-control").on("keyup change",function(e){
        console.log(e.target);
        var $colors = $(".form-control");
        var red  = $colors.eq(0).val();
        var blue  = $colors.eq(1).val();
        var green  = $colors.eq(2).val();
        $("body").css("background-color","rgb("+red+","+green+","+blue+")");
    });
    //8
    $("img").on("click",function(e){
        $(e.target).remove();
    })

});