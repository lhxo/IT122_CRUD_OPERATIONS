import express from 'express'
import {getPosts, createPost, updatePost, deletePost} from '../controllers/posts.js'

//initialize our express router
const Router = express.Router();

//
Router.get('/', getPosts);
Router.post('/', createPost);
Router.patch('/:id', updatePost)
Router.delete('/:id', deletePost)

export default Router