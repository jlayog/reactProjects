const express = require('express'),
      router = express.Router(),
      // code for our todo model in the db variable
      db = require('../models');

router.get('/', function(req, res) {
    db.Todo.find()
    .then(function(todos) {
        res.json(todos);
    })
    .catch(function(err) {
        res.send(err);
    })
});

// Routes
/*
Verb - Route  -    Description
GET - /api/todos - List all todos
POST - /api/todos - Create new todo
GET - /api/todo/:todoId - REtrieve a todo
PUT - /api/todo/:todoId - Update a todo
DELETE - /api/todo/:todoId - Delete a todo
*/


module.exports = router;