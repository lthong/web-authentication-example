import * as cons from 'constants/comments';

export const addComment = (comment) => {
  return {
    type: cons.ADD_COMMENT,
    payload: comment,
  };
};
