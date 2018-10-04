jQuery(document).ready(function($) {

  $.getJSON("/api/todos")
    .then(addTodos)

  $("#todoInput").keypress(function(event) {
    if (event.which == 13) {
      createTodo();
    }
  });

});

// Einträge anzeigen mithilfe einer ForEach-Schleife
function addTodos(todos) {
  todos.forEach(function(todo) {
    addTodo(todo);
  });
}

// Auslagern der Funktion für die ForEach-Schleife addTodos
function addTodo(todo) {
  var newTodo = $("<li class='task'>" + todo.name + "</li>");
  if (todo.completed) {
    newTodo.addClass("done");
  }
  $(".list").append(newTodo);
}

// einen EIntrag erstellen und in eine Funktion packen
function createTodo() {
  var usrInput = $("#todoInput").val();
  $.post("/api/todos", {
      name: usrInput
    })
    .then(function(newTodo) {
      $("#todoInput").val("");
      addTodo(newTodo);
    })
    .catch(function(err) {
      console.log(err);
    })
}

// $.ajax({
// url: 'http://192.168.0.7:3000/api/todos',
//  type: 'GET',
//  dataType: 'json',
// })
// .done(function(data) {
//     $("#text").text(data.name);
// })
// .fail(function() {
//     console.log("error");
// })
