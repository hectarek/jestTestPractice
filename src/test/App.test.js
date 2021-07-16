import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from '../components/App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<App/>);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {

})

test('render count is displayed', () => {
  
})

test('counter display starts at 0', () => {
  
})

test('clicking on the button increments the counter', () => {
  
})