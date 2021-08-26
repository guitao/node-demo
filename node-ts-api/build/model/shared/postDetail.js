"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDetail = void 0;
const postSunmmary_1 = require("./postSunmmary");
const todo_1 = require("./todo");
class PostDetail extends postSunmmary_1.PostSunmmary {
    constructor(postData, todoData) {
        super(postData);
        this.price = postData.price;
        this.currency = postData.currency;
        this.todos = todoData.map((item) => new todo_1.Todo(item));
    }
}
exports.PostDetail = PostDetail;
