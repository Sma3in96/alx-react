import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

const wrapper = shallow(<Header />);

it('renders without crashing', () => {
  shallow(<Header />);
});

it('renders header', () => {
  expect(wrapper.find('header.header').exists()).toEqual(true);
});

it('renders img', () => {
  expect(wrapper.find('img').exists()).toEqual(true);
})

it('renders h1', () => {
  expect(wrapper.find('h1').exists()).toEqual(true);
})
