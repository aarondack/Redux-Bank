import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Balance from '../src/components/Balance';

test('It should render the Balance component', () => {
  const wrapper = shallow(<Balance money={5}/>);
  expect(wrapper.find(Balance)).to.exist;
});

test('It should render a green value when the value is below zero', () => {
  const wrapper = shallow(<Balance money={5}/>);
  expect(wrapper.find('.ui.green.header')).to.have.length(1);
});

test('It should render a red value when the value is above or equal to zero', () => {
  const wrapper = shallow(<Balance money={-5}/>);
  expect(wrapper.find('.ui.red.header')).to.have.length(1);
});
