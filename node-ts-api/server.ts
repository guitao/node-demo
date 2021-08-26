import express from 'express'
import { apiGetPosts, apiGetPostsDetail } from './api/posts/apiGetPosts'
import { apiCreatePost } from './api/posts/apiCreatePost'

import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res, next) {
  res.send('api is working....!!!!')
})


app.get('/posts', apiGetPosts)
app.get('/posts/:id', apiGetPostsDetail)

app.post('/posts', apiCreatePost)



app.listen(process.env.PORT || 8091, () => {
  console.log("Server is started...")
})