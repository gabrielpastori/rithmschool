$(window).on("load",function(){
    $("#submitInput").on("click",function(e){
        e.preventDefault();
        var term=$("#searchInput").val();
        $.getJSON("https://api.giphy.com/v1/gifs/search?q="+term+"&api_key=dc6zaTOxFJmzC").then(function(response){
        console.log(response.data[0].images.original.url);   
        $("#images").append($("<img>").attr("src",response.data[0].images.original.url)
        .css("width","400px")
        .css("height","400px"));
           
        });
       
    })
    $("#deleteButton").on("click",function(e){
        e.preventDefault();
        $("#images").empty();
    })
}
);