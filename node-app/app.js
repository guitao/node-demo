'use strict'
const express = require('express');

//自定义模块todoController
const todoController = require('./controller/tofoController');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

todoController(app);

app.listen(2000, function() {
    console.log('Example app listening on port 2000!');
});