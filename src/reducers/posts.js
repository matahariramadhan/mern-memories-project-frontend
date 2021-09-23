import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from "../actions/constants";

const initState = [];

const postsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL:
      return payload;
    case CREATE:
      return [...state, payload];
    case UPDATE:
    case LIKE:
      return state.map((s) => (s._id === payload._id ? payload : s));
    case DELETE:
      return state.filter((s) => s._id !== payload);
    default:
      return state;
  }
};

export default postsReducer;
