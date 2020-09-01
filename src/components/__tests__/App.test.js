import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;
beforeAll(() => {
  wrapped = shallow(<App />);
});

it('show a comment box', () => {
  expect(wrapped.find(CommentBox).length).toBe(1);
});

it('show a comment list', () => {
  expect(wrapped.find(CommentList).length).toBe(1);
});
