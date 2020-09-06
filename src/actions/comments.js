import * as cons from 'constants/comments';
import axios from 'axios';

export const addComment = (comment) => {
  return {
    type: cons.ADD_COMMENT,
    payload: comment,
  };
};

export const deleteComment = (index) => {
  return {
    type: cons.DELETE_COMMENT,
    index,
  };
};

export const fetchComments = () => {
  const payload = axios.get(
    'https://jsonplaceholder.typicode.com/comments?postId=1'
  );
  return {
    type: cons.FETCH_COMMENTS,
    payload,
  };
};
