import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('has a text area and two buttons', () => {
  expect(wrapper.find('textarea').length).toBe(1);
  expect(wrapper.find('input').length).toBe(2);
});

describe('test the change and submit event in the form', () => {
  beforeEach(() => {
    wrapper
      .find('textarea')
      .simulate('change', { target: { value: 'new comment' } });
    // wrapper.update();
  });

  it('has a text area that users can type in', () => {
    expect(wrapper.find('textarea').prop('value')).toBe('new comment');
  });

  it('when form is submitted, text area gets emptied', () => {
    wrapper.find('form').simulate('submit');
    // wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toBe('');
  });
});
