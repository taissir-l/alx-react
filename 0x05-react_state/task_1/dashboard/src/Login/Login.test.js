import React from 'react';
import Login from './Login';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

describe("test Login component", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = mount(<Login />);
  });

  it("should renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("should renders 3 input tags", () => {
    expect(wrapper.find("input")).toHaveLength(3);
  });

  it("should renders 2 label tags", () => {
    expect(wrapper.find("label")).toHaveLength(2);
  });

  it("should submit button is disabled by default", () => {
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
  });

  it("should changing the value of the two inputs after verifing, the button is enabled", () => {
    wrapper.find("#email").simulate('change', {target: {value: 't'}});
    wrapper.find("#password").simulate('change', {target: {value: 't'}});
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(false);
  });
});
