import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from "./constants";
import * as api from "../api/index.js";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPostsApi();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (postData) => async (dispatch) => {
  try {
    const { data } = await api.createPostApi(postData);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, postData) => async (dispatch) => {
  try {
    const { data } = await api.updatePostApi(id, postData);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePostApi(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePostApi(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
// export const createPost = (postData) => {
//   return { type: CREATE, payload: postData };
// };

// export const getPosts = (data) => {
//     return { type: FETCH_ALL, payload: data}
// }
