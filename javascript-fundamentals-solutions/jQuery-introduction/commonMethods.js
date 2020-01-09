$(document).ready(function(){
    $("article").on("click",function(e){
        console.log($(e.target).val);
    });

});