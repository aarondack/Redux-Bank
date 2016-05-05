import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Ledger from '../src/components/Ledger';

const ledger = [1,2,3,4];

test('It should render the Ledger component', () => {
  const wrapper = shallow(<Ledger ledger={ledger}/>);
  expect(wrapper.find(Ledger)).to.exist;
});

test('It should render the list item', () => {
  const wrapper = shallow(<Ledger ledger={ledger}/>);
  expect(wrapper.find('.ui.list')).to.have.length(1);
});

test('It should render the correct children', () => {
  const wrapper = mount(<Ledger ledger={ledger}/>);
  expect(wrapper.find('.ui.list').children()).to.have.length(4);
});
