"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    constructor(data) {
        this.postId = data.postId;
        this.todoTitle = data.todoTitle;
        this.todoText = data.todoText;
        this.star = data.star;
    }
}
exports.Todo = Todo;
