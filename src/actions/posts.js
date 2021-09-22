import { CREATE, FETCH_ALL } from "./constants";
import * as api from "../api/index.js";

export const getPosts = () => async (dispatch) => {
  try {
    const {data} = await api.fetchPostsApi();
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

// export const createPost = (postData) => {
//   return { type: CREATE, payload: postData };
// };

// export const getPosts = (data) => {
//     return { type: FETCH_ALL, payload: data}
// }
