import { DataStore } from '../../data/data'
import { RequestHandler } from 'express'
import {PostSunmmary}  from '../../model/shared/postSunmmary'

import { PostDetail } from "../../model/shared/postDetail";

export const apiGetPosts: RequestHandler = (req, res) => {
  res.json(DataStore.posts.map((item: any) => new PostSunmmary(item)))
}

export const apiGetPostsDetail: RequestHandler = (req, res) => {

  const selectedPost = DataStore.posts.find((item: any) => item.id == req.params.id)

  if(selectedPost) {
    const selectedTodos = DataStore.todos.filter((item: any) => item.postId == req.params.id)
    res.json(new PostDetail(selectedPost, selectedTodos))
  } else {
    res.status(404).json({
      status: 'failed',
      message: 'post not found'
    })
  }
}