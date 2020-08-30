import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and two buttons', () => {
  expect(wrapped.find('textarea').length).toBe(1);
  expect(wrapped.find('input').length).toBe(2);
});

describe('test the change and submit event in the form', () => {
  beforeEach(() => {
    wrapped
      .find('textarea')
      .simulate('change', { target: { value: 'new comment' } });
    // wrapped.update();
    wrapped.setProps({ comment: 'new comment' });
  });

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toBe('new comment');
  });

  it('when form is submitted, text area gets emptied', () => {
    wrapped.find('form').simulate('submit');
    // wrapped.update();
    wrapped.setProps({ comment: '' });
    expect(wrapped.find('textarea').prop('value')).toBe('');
  });
});
