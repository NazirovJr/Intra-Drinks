import axios from 'axios';

// base setting of axios
const API = axios.create({ baseURL: 'http://localhost:5000' });

// request for getting post
export const fetchPost = (id) => API.get(`/posts/${id}`);

// request for getting posts
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);

// request for getting result of searching
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}`);

// request for creating post
export const createPost = (newPost) => API.post('/posts', newPost);

// request for updating post
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

// request for deleting post
export const deletePost = (id) => API.delete(`/posts/${id}`);

// request for getting information about machine coins
export const fetchCoins = () => API.get(`/coins`);

// request for updating machine coins
export const updateCoins = (updatedCoins) => API.patch(`/coins`, updatedCoins);
