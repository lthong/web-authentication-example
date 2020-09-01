import * as cons from 'constants/comments';
import commentsReducer from 'reducers/comments';
import Im from 'immutable';

const initState = {
  comments: Im.List(),
};

it('handles action of the type ADD_COMMENT', () => {
  const action = {
    type: cons.ADD_COMMENT,
    payload: 'new comment',
  };

  const newState = commentsReducer(initState, action);

  expect(newState).toEqual({
    comments: Im.fromJS(['new comment']),
  });
});

it('handles action with unknow type', () => {
  const newState = commentsReducer(initState, { type: 'unknow action' });
  expect(newState).toEqual(initState);
});
