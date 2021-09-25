import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
// const API = axios.create({ baseURL: "https://matahari-memories-app.herokuapp.com" });

export const fetchPostsApi = () => API.get("/posts");
export const createPostApi = (newPost) => API.post("/posts", newPost);
export const updatePostApi = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePostApi = (id) => API.delete(`/posts/${id}`);
export const likePostApi = (id) => API.patch(`/posts/${id}/likePost`);

export const signInApi = (FormData) => API.post("/user/signin", FormData);
export const signUpApi = (FormData) => API.post("/user/signup", FormData);
