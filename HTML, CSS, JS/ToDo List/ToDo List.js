window.setTimeout(function() {
  var todos = [];
  var input = prompt("What would you like to do?");

  while (input !== "quit") {
    if (input === "new") {
      var newTodo = prompt("Enter new todo");
      todos.push(newTodo);
      console.log("You've added a todo!");
    }else if (input === "list") {
      console.log("***************");
      todos.forEach(function(todo,i) {
        console.log(i + ": " + todo);
      })
      console.log("***************");
    }else if (input === "delete") {
      var deleteTodo = prompt("Enter index of todo to delete");
      todos.splice(deleteTodo,1);
      console.log("You've deleted a todo!");
    }
    input = prompt("What would you like to do?");
  }
  console.log("You've quit the Todo List!");
}, 1000);
