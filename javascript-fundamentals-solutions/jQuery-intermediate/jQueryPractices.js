$("document").ready(function(){
    $("li").each(function(idx,el){
        if($(el).text()[0]=='$'){
            $(el).css("color","green");
        }else{
            $(el).css("color","red");

        }
    });
    $("li").each(function(i,el){
        console.log("Day "+i+": "+$(el).text());
    });
    var summary = $("li").map(function(i,el){
        return $("<p>",{
            text:"On day "+i+" my result was: "+$(el).text()
        });
    });
    $("body").append(summary.get());
});

