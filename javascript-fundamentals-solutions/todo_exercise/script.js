var ul = document.querySelector("ul");
ul.style.marginTop="10vh";
var bt = document.querySelector("#insertbt");

function createButton(src,hint,bt){
    bt.type="image";
    bt.src=src;
    bt.style.width="13px";
    bt.style.height="13px";
    bt.title=hint;
    bt.style.marginLeft="12px";
    return bt;
}
bt.addEventListener("click",function(){
        var input = document.querySelector("#insertInput").value;
        if(input!=""){
            var span = document.createElement('span');
        
            var text = document.createTextNode(input);
            span.appendChild(text);
            var li=document.createElement("li");
            var btDelete = document.createElement("input");
            var btComplete = document.createElement("input");
            btDelete = createButton("delete.png","Delete task",btDelete);
            btComplete = createButton("complete.png","Mark as complete",btComplete);
            li.appendChild(span);
            li.appendChild(btDelete);
            li.appendChild(btComplete);
           
            ul.appendChild(li);
        }
    }
);
ul.addEventListener("click",function(){
    var li = event.target;
    
    console.log(li.parentElement);
}
);