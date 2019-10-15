const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo Atlas

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true }) // removing deprication warning
    .then(() => console.log('Database connected.'))
    .catch(err => console.log(err));

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));