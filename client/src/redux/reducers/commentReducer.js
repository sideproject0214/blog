import {
  COMMENT_LOADING_REQUEST,
  COMMENT_LOADING_SUCCESS,
  COMMENT_LOADING_FAILURE,
  COMMENT_UPLOADING_REQUEST,
  COMMENT_UPLOADING_SUCCESS,
  COMMENT_UPLOADING_FAILURE,
} from "../types";

const initialState = {
  comments: [],
  creatorId: "",
  loading: false,
  isAuthenticated: false,
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_LOADING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMMENT_LOADING_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
      };
    case COMMENT_LOADING_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case COMMENT_UPLOADING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMMENT_UPLOADING_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        isAuthenticated: true,
        loading: false,
      };
    case COMMENT_UPLOADING_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default commentReducer;
