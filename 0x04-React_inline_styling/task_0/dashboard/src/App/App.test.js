import { shallow } from 'enzyme';
import React from 'react';

import App from './App';

describe('<App />', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<App />);
  });

  test('contain Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  test('contain Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  test('contain Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  test('contain Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  test('CourseList', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  test('isLoggedIn true', () => {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.find('Login')).toHaveLength(0);
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });

  test('logOut', () => {
    const logOut = jest.fn(() => undefined);
    const wrapper = shallow(<App logOut={logOut} />);
    const alert = jest.spyOn(global, 'alert');
    expect(alert);
    expect(logOut);
    jest.restoreAllMocks();
  });
});
