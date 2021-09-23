import axios from "axios";

const url = "https://matahari-memories-app.herokuapp.com/posts";

export const fetchPostsApi = () => axios.get(url);
export const createPostApi = (newPost) => axios.post(url, newPost);
export const updatePostApi = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePostApi = (id) => axios.delete(`${url}/${id}`);
export const likePostApi = (id) => axios.patch(`${url}/${id}/likePost`);
