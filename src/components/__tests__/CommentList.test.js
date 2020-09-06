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

it('the text of each comment is correct', () => {
  // console.log(wrapper.render().text()); // print out: comment1comment2
  expect(wrapper.render().text()).toContain('comment1');
  expect(wrapper.render().text()).toContain('comment2');
});
