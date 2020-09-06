import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments?postId=1', {
    status: 200,
    response: [{ name: 'fetch comment 1' }, { name: 'fetch comment 2' }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );

  wrapper.find('.fetch-comments').simulate('click');
  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find('.comment-list').find('.item').length).toBe(2);
    done();
    wrapper.unmount();
  });
});
