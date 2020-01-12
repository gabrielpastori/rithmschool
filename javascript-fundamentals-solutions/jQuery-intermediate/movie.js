
$("document").ready(function(){
    $("#myTable").tablesort()
    $("#add").on("click",function(e){
        e.preventDefault();
        var inputVal =parseInt($('#rating').val());
        if(inputVal<0 || inputVal>10) alert("Rating value must be between 0 and 10")
        else {
            $("tbody").append('<tr><td>'+$('#title').val()+'</td><td>'+$('#rating').val()+'</td><td class="tdDelete"><button class="delete">delete</button></td></tr>')
            $('#title').val("");
            $('#rating').val("");

        }
        
    });
    $("#myTable").on('click','.delete',function(){
        $(this).parent().parent().remove();
    });
}
);