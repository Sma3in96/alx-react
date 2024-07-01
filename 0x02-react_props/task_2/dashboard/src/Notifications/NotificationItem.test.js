import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    shallow(<NotificationItem />);
  });

  it ('renders correct html', () => {
    const wrapper = shallow(<NotificationItem type='default' value={'test'} />);
    expect(wrapper.find('li[data-notification-type="default"]').text()).toEqual('test');
  });

  it ('renders correct html', () => {
    const wrapper = shallow(<NotificationItem html={{__html : '<u>testing</u>'}} />);
    expect(wrapper.find('li').html()).toEqual('<li><u>testing</u></li>');
  });
});
