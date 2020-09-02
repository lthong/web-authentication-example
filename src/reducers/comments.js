import Im from 'immutable';
import * as cons from 'constants/comments';

const initialState = {
  comments: Im.List(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case cons.ADD_COMMENT:
      return {
        ...state,
        comments: state.comments.push(action.payload),
      };
    case cons.DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.delete(action.index),
      };

    default:
      return state;
  }
};
