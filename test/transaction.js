import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Transaction from '../src/components/Transaction';

const withdrawButton = sinon.spy();
const depositButton = sinon.spy();

test('It should render the Transaction component', () => {
    const wrapper = shallow(<Transaction withdraw={withdrawButton} deposit={depositButton}/>);
    expect(wrapper.find(Transaction)).to.exist;
});

test('It should render with two buttons', () => {
    const wrapper = mount(<Transaction withdraw={withdrawButton} deposit={depositButton}/>);
    expect(wrapper.find('.ui.button.red')).to.exist;
    expect(wrapper.find('.ui.button.green')).to.exist;
});

test('Simulating a withdrawl click', () => {
    const wrapper = mount(<Transaction withdraw={withdrawButton} deposit={depositButton}/>);
    const input = wrapper.find('input').get(0);
    input.value = 3;
    wrapper.find('.ui.red.button').simulate('click');
    expect(withdrawButton.calledOnce).to.equal(true);
});

test('Simulating a deposit click', () => {
    const wrapper = mount(<Transaction withdraw={withdrawButton} deposit={depositButton}/>);
    const input = wrapper.find('input').get(0);
    input.value = 3;
    wrapper.find('.ui.green.button').simulate('click');
    expect(depositButton.calledOnce).to.equal(true);
});

test('The input should be blanked on a button click', () => {
    const buttonClick = sinon.spy();
    const wrapper = mount(<Transaction withdraw={withdrawButton} deposit={buttonClick}/>);
    const input = wrapper.find('input').get(0);
    input.value = 3;
    wrapper.find('.ui.green.button').simulate('click');
    expect(wrapper.find('input').get(0).value).to.equal('');
});
