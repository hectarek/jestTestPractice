import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from '../components/App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to crate a shallow wrapper
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App/>);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
})

test('render count is displayed', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
})

test('counter display starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
})

test('clicking on the button increments the counter', () => {
  const wrapper = setup();
  // find button
  const button = findByTestAttr(wrapper, "increment-button");
  // click button
  button.simulate("click");
  // find display, test if number increases
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
})

test('Clicking the decrement button on 0 will throw error', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");
  const count = findByTestAttr(wrapper, 'counter-error').text();
  expect(count).toBe("Sorry, test can't go below zero");
})

