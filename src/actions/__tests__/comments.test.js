import { addComment } from 'actions/comments';
import * as cons from 'constants/comments';

describe('add comments', () => {
  it('has the correct type', () => {
    const action = addComment();
    expect(action.type).toBe(cons.ADD_COMMENT);
  });

  it('has the correct payload', () => {
    const action = addComment('new comment');
    expect(action.payload).toBe('new comment');
  });
});
