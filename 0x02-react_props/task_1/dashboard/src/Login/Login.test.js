import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

const wrapper = shallow(<Login />);

it('renders without crashing', () => {
  shallow(<Login />);
});
it('renders login', () => {
  expect(wrapper.find('main.login').exists()).toEqual(true);
});

it('renders 2 inputs and 2 labels', () => {
  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('label')).toHaveLength(2);
});
