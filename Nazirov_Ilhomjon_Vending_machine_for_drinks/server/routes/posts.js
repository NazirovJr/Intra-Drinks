import express from 'express';

import { createPost, getPosts, deletePost, getPostsBySearch, getPost, updatePost } from '../controllers/posts.js';

const router = express.Router();

// request for searching posts
router.get('/search', getPostsBySearch);

// request for getting posts
router.get('/', getPosts);

// request for getting post
router.get('/:id', getPost);

// request for creating post
router.post('/',  createPost);

// request for updating information about post
router.patch('/:id', updatePost);

// request for deleting post
router.delete('/:id', deletePost);

export default router;