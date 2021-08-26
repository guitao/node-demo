"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiCreatePost = void 0;
const data_1 = require("../../data/data");
const uuid_1 = require("uuid");
const apiCreatePost = (req, res) => {
    const newPost = {
        id: uuid_1.v4(),
        userId: req.body.userId,
        title: req.body.title,
        body: req.body.body,
        price: req.body.price,
        currency: req.body.currency
    };
    data_1.DataStore.posts.push(newPost);
};
exports.apiCreatePost = apiCreatePost;
