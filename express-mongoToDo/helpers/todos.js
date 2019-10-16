const db = require('../models')



// List all todos
exports.getTodos = function(req, res) {
    db.Todo.find()
    .then(function(todos) {
        res.json(todos);
    })
    .catch(function(err) {
        res.send(err);
    })
};

// create todos
exports.createTodos = function(req, res) {
    // bodyParser allows 'body' to be referenced
    db.Todo.create(req.body)
    .then(function(newTodo) {
        res.status(201).json(newTodo);
    })
    .catch(function(err) {
        res.send(err);
    })
};

// Retrieve
exports.retrieveTodos = function(req, res) {
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err) {
        res.send(err);
    })
};


// Update
exports.updateTodo = function(req, res) {
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(todo) {
        res.json(todo);
    })
    .catch(function(err) {
        res.send(err);
    })
};

// Delete
exports.deleteTodo = function(req, res) {
    db.Todo.remove({_id: req.params.todoId})
    .then(function() {
        res.json({message: 'Todo deleted.'})
    })
    .catch(function(err) {
        res.send(err);
    })
};

module.exports = exports;