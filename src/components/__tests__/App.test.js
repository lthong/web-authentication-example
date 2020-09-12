import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Root from 'Root';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

it('show a comment box', () => {
  const wrapper = mount(
    <Root>
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    </Root>
  );
  expect(wrapper.find(CommentBox).length).toBe(1);
  wrapper.unmount();
});

it('show a comment list', () => {
  const wrapper = mount(
    <Root>
      <MemoryRouter initialEntries={['/comments']}>
        <App />
      </MemoryRouter>
    </Root>
  );
  expect(wrapper.find(CommentList).length).toBe(1);
  wrapper.unmount();
});
