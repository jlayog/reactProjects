$(document).ready(function() {
    // request api/todos
    $.getJSON("/api/todos")
    .then(addTodos)
    $('#todoInput').keypress(function(event) {
        if(event.which == 13) {
            createTodo();
        }
    })
    $('.list').on('click', 'li', function() {
        updateTodo($(this));
    })
    // add listener to ul, but then specifying span to be clicked
    $('.list').on('click', 'span', function(event) {
        event.stopPropagation();
        removeTodo($(this).parent());
    }) 
});

function addTodos(todos) {
    // add todos
    todos.forEach(function(todo) {
        addTodo(todo);
    });
}

function addTodo(todo) {
    let newTodo = $('<li class="task">'+ todo.name + ' <span>X</span></li>');
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    if(todo.completed) {
        todo.addClass("done");
    }
    $('.list').append(newTodo);
}

function createTodo() {
    // send request to create new todo
    let usrInput = $('#todoInput').val();
    $.post('/api/todos', { name: usrInput })
    .then(function(newTodo) {
        $('#todoInput').val('');
        addTodo(newTodo);
    })
    .catch(function(err) {
        console.log(err);
    })
}

function removeTodo(todo) {
    let clickedId = todo.data('id');
    let deleteUrl = '/api/todos/' + clickedId;
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
    .then(function(data) {
        todo.remove();
    })
    .catch(function(err) {
        console.log(err);
    })
}

function updateTodo(todo) {
    let updateUrl = '/api/todos/' + todo.data('id');
    let isCompleted = !todo.data('completed');
    let updateData = {completed: isCompleted};
    console.log(updateData);
    $.ajax({
        method: 'PUT',
        url: updateUrl,
        completed: updateData
    })
    .then(function(updatedTodo) {
        todo.toggleClass('done');
        todo.data('completed', isCompleted);
    })
}