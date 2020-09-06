import React from 'react';
import { mount } from 'enzyme';
import Im from 'immutable';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapper;
beforeEach(() => {
  const initState = {
    comments: {
      comments: Im.fromJS(['comment1', 'comment2']),
    },
  };
  wrapper = mount(
    <Root initState={initState}>
      <CommentList />
    </Root>
  );
});

it('creates one <div className="item"> per comment', () => {
  expect(wrapper.find('.comment-list').find('.item').length).toEqual(2);
});
