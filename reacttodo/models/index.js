var mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.connect('mongodb+srv://jlayog:catheryn@mern-stack-l14bq.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}).then(() => {
	console.log('MongoDB Atlas connected.');
}).catch(err => {
	console.log('ERROR: ', err.message);
});

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');