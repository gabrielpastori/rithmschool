$("document").ready(function(){
    var rating={
        sort:false
    };
    var title={
        sort:false
    };
    $('th').on('click',function(e){
        var aux=[];
        $('tr td:nth-child('+($(this).index()+1)+')').each(function(idx,val){
            aux.push($(val).text());
        })
        if($(this).text()=="Rating") {
            if(rating.sort){
                aux.sort(function(a, b) {
                    a = parseInt(a,10);
                    b = parseInt(b,10);
                    return a > b ? 1 : b > a ? -1 : 0;
                });
                aux.reverse();
            }else{
                aux.sort(function(a, b) {
                    a = parseInt(a,10);
                    b = parseInt(b,10);
                    return a > b ? 1 : b > a ? -1 : 0;
                });
            }
            rating.sort=!rating.sort;
        }
        if($(this).text()=="Title"){
            if(title.sort){
                aux.sort();
                aux.reverse();
            }else{
                aux.sort();
            }
            title.sort=!title.sort;
        }
        console.log(aux);
        $('tr td:nth-child('+($(this).index()+1)+')').each(function(idx,val){
            $(val).text(aux[idx]);
        })
        
    });
    $("#add").on("click",function(e){
        e.preventDefault();
        $("#myTable").append('<tr><td>'+$('#title').val()+'</td><td>'+$('#rating').val()+'</td></tr>')

    });
}
);