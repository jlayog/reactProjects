const express = require('express'),
      app = express(),
      todoRoutes = require('./routes/todos'),
      bodyParser = require('body-parser');


// Allow access to the request body that comes in from a POST/PUT request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// using __dirname makes sure that it always use the current directory
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/client/public'));



app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);

app.listen(3000, () => {
	console.log('Server listening on port 3000');
});