'use strict'

//引入mongoose
const mongoose = require('mongoose');

//链接到数据库
mongoose.connect('mongodb://todoapp:todoapp123@ds245772.mlab.com:45772/todo-app');

//创建图表
let todoSchema = new mongoose.Schema({
    item: String
});

//往数据库中存储数据
let Todo = mongoose.model('Todo', todoSchema);

Todo({ item: 'helo world!' }).save((err, data) => {
    if (err) throw err;
    console.log('Item saved!');
})

const bodyParser = require('body-parser');
//对数据进行解析
let urlencodeParser = bodyParser.urlencoded({
    extended: false
});

// var data = [{
//         item: "欢迎大家来到蓝鸥课堂!"
//     },
//     {
//         item: "希望大家能够喜欢我们的课程!"
//     },
//     {
//         item: "在课程中能够学到真实知识!"
//     }
// ];

module.exports = function(app) {
    //获取数据
    app.get('/todo', (req, res) => {
        Todo.find({}, (err, data) => {
            if (err) throw err;
            res.render('todo', { todos: data });
        })

    })

    //传递数据
    app.post('/todo', urlencodeParser, (req, res) => {
        // console.log(req.body);
        Todo(req.body).save((err, data) => {
                if (err) throw err;
                res.json(data);
            })
            // data.push(req.body);
    })

    // 删除数据
    app.delete('/todo/:text', (req, res) => {
        Todo.find({ item: req.params.text }).remove((err, data) => {
            if (err) throw err;
            res.json(data);
        })

        // console.log(req.params.text)
        // data = data.filter((todo) => {
        //     return req.params.text !== todo.item;
        // })

        // res.json(data);
    })
}