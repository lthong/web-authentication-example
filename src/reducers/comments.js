import Im from 'immutable';
import * as cons from 'constants/comments';

const initialState = {
  comments: Im.List(['Hello React!']),
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
    case cons.FETCH_COMMENTS:
      return {
        ...state,
        comments: Im.fromJS(
          action.payload.data.reduce(
            (acc, comment) => acc.push(comment.name),
            state.comments
          )
        ),
      };

    default:
      return state;
  }
};
