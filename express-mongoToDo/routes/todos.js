const express = require('express'),
      router = express.Router(),
      // code for our todo model in the db variable
      helpers = require('../helpers/todos');


// List + create todos (refactored)
router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodos);

// Retrieve todo - find specific todo ID and display it, update/delete
router.route('/:todoId')
    .get(helpers.retrieveTodos)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);



// Routes
/*
Verb - Route  -    Description
GET - /api/todos - List all todos
POST - /api/todos - Create new todo
GET - /api/todo/:todoId - Retrieve a todo
PUT - /api/todo/:todoId - Update a todo
DELETE - /api/todo/:todoId - Delete a todo
*/


module.exports = router;