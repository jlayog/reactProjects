const express = require('express'),
      app = express(),
      todoRoutes = require('./routes/todos');



app.use('/api/todos', todoRoutes);

app.listen(3000, () => {
	console.log('Server listening on port 3000');
});