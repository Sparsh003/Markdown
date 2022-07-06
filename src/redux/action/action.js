import axios from "axios";
import {
  POST_DATA_FAILURE,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  POST_COMMENT_SUCCESS,
  TITLE_WORD_COUNT,
  BODY_WORD_COUNT,
} from "./types";

export const fetchPostData = () => {
  return (dispatch) => {
    dispatch(fetchPostRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const data = response.data;
        dispatch(fetchPostSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchPostFailure(error.message));
      });
  };
};

export const fetchPostCommentData = (id) => {
  return (dispatch) => {
    dispatch(fetchPostRequest());
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => {
        const data = response.data;
        dispatch(fetchCommentSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchPostFailure(error.message));
      });
  };
};

export const fetchPostRequest = () => {
  return {
    type: POST_DATA_REQUEST,
  };
};

export const fetchPostSuccess = (data) => {
  return {
    type: POST_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchPostFailure = (error) => {
  return {
    type: POST_DATA_FAILURE,
    payload: error,
  };
};

export const fetchCommentSuccess = (data) => {
  return {
    type: POST_COMMENT_SUCCESS,
    payload: data,
  };
};

export const fetchTitleCount = (data) => {
  return {
    type: TITLE_WORD_COUNT,
    payload: data,
  };
};

export const fetchBodyCount = (data) => {
  return {
    type: BODY_WORD_COUNT,
    payload: data,
  };
};
