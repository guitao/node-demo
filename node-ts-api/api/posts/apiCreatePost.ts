import { DataStore } from '../../data/data'
import { RequestHandler } from 'express'

import { v4 as uuidv4 } from "uuid";

import { NewPost } from "../../interface/newPost";

export const apiCreatePost: RequestHandler = (req, res) => {
  const newPost: NewPost = {
    id: uuidv4(),
    userId: req.body.userId,
    title: req.body.title,
    body: req.body.body,
    price: req.body.price,
    currency: req.body.currency
  }

  DataStore.posts.push(newPost)
}
