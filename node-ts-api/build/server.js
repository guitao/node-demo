"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiGetPosts_1 = require("./api/posts/apiGetPosts");
const apiCreatePost_1 = require("./api/posts/apiCreatePost");
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get('/', function (req, res, next) {
    res.send('api is working....!!!!');
});
app.get('/posts', apiGetPosts_1.apiGetPosts);
app.get('/posts/:id', apiGetPosts_1.apiGetPostsDetail);
app.post('/posts', apiCreatePost_1.apiCreatePost);
app.listen(process.env.PORT || 8091, () => {
    console.log("Server is started...");
});
