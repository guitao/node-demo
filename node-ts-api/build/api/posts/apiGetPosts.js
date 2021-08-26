"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGetPostsDetail = exports.apiGetPosts = void 0;
const data_1 = require("../../data/data");
const postSunmmary_1 = require("../../model/shared/postSunmmary");
const postDetail_1 = require("../../model/shared/postDetail");
const apiGetPosts = (req, res) => {
    res.json(data_1.DataStore.posts.map((item) => new postSunmmary_1.PostSunmmary(item)));
};
exports.apiGetPosts = apiGetPosts;
const apiGetPostsDetail = (req, res) => {
    const selectedPost = data_1.DataStore.posts.find((item) => item.id == req.params.id);
    if (selectedPost) {
        const selectedTodos = data_1.DataStore.todos.filter((item) => item.postId == req.params.id);
        res.json(new postDetail_1.PostDetail(selectedPost, selectedTodos));
    }
    else {
        res.status(404).json({
            status: 'failed',
            message: 'post not found'
        });
    }
};
exports.apiGetPostsDetail = apiGetPostsDetail;
