window.onload = function(){
    var $todoForm = $("#newTodoForm");
    var $todoList = $("#todoList");

    // retrieve from localStorage
    var savedTodos = JSON.parse(localStorage.getItem("todos")) || []
    for(var i=0; i < savedTodos.length; i++){
        var $newTodo = $("<li>");
        $newTodo.text(savedTodos[i].task);
        $newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
        if($newTodo.isCompleted) {
            $newTodo.css("text-decoration","line-through");
        }
        $todoList.append($newTodo);
    }

    $todoForm.on("submit", function(event){
        event.preventDefault();
        var $newTodo = $("<li>");
        var $taskValue = $("#task").val();
        $newTodo.text($taskValue);
        $newTodo.isCompleted = false;
        $todoForm[0].reset();
        $todoList.append($newTodo);

        // save to localStorage
        savedTodos.push({task: $newTodo.text(), isCompleted: false});
        localStorage.setItem("todos", JSON.stringify(savedTodos));
    })

    $todoList.on("click", function(event){
        var $clickedListItem = $(event.target);
        console.log($clickedListItem);
        if(!$clickedListItem.isCompleted) {
            $clickedListItem.css("text-decoration", "line-through");
            $clickedListItem.isCompleted = true;
        } else {
            $clickedListItem.css("text-decoration", "none");
            $clickedListItem.isCompleted = false;
        }

        // breaks for duplicates - another option is to have dynamic IDs
        for(var i=0; i < savedTodos.length; i++){
            if(savedTodos[i].task === $clickedListItem.text()){
                savedTodos[i].isCompleted = $clickedListItem.isCompleted;
                localStorage.setItem("todos", JSON.stringify(savedTodos));
            }
        }
    });
}