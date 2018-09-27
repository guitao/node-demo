'use strict'
const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const users = require('./routes/api/users');

const db = require('./config/keys').mongoURL;

mongoose.connect(db)
    .then(() => console.log("MongoDB Connected"));

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
})

//使用bodyparser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Sever running in ${port}`);
})