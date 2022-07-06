import {
  POST_DATA_FAILURE,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  POST_COMMENT_SUCCESS,
  TITLE_WORD_COUNT,
  BODY_WORD_COUNT,
} from "../action/types";

const initialState = {
  loading: true,
  data: [],
  comment: [],
  bodyCount: 0,
  error: "",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case POST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case POST_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comment: action.payload,
      };
    case TITLE_WORD_COUNT:
      return {
        ...state,
        loading: false,
        titleCount: action.payload,
      };
    case BODY_WORD_COUNT:
      return {
        ...state,
        loading: false,
        bodyCount: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
