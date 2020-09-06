import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapper;
beforeAll(() => {
  wrapper = shallow(<App />);
});

it('show a comment box', () => {
  expect(wrapper.find(CommentBox).length).toBe(1);
});

it('show a comment list', () => {
  expect(wrapper.find(CommentList).length).toBe(1);
});
