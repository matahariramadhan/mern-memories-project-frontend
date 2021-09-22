import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPostsApi = () => axios.get(url);
export const createPostApi = (newPost) => axios.post(url, newPost);
