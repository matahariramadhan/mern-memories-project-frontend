import { CREATE, FETCH_ALL } from "../actions/constants";

const initState = [];

const postsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL:
      return payload;
    case CREATE:
      return [...state, payload];
    default:
      return state;
  }
};

export default postsReducer;
