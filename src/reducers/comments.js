import Im from 'immutable';
import * as cons from 'constants/comments';

const initialState = {
  comments: Im.List(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case cons.ADD_COMMENT:
      const comments = state.comments.push(action.payload);
      return {
        ...state,
        comments,
      };

    default:
      return state;
  }
};
