$(document).ready(function(){
    $("article").on("click",function(e){
        console.log($(e.target).val);
        var $firstLi = $("li")[0];
        $($firstLi).text();
    });

});