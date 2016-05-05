import test from 'ava';
import { actionTest, reducerTest } from 'redux-ava';
import reducer from '../src/reducers/reducers.js';
import { withdrawMoney, depositMoney } from '../src/actions';
import { expect } from 'chai';

test('It sends a withdrawl action', actionTest(withdrawMoney, 5, {
  type: 'WITHDRAW_MONEY',
  withdrawl: 5
}));

test('It sends a deposit action', actionTest(depositMoney, 5, {
  type: 'DEPOSIT_MONEY',
  deposit: 5
}));

test('It should return the initial state', t => (
  t.deepEqual(reducer(undefined, {}),{ balance: 0, ledger: [] })
));

test('It handles a withdrawl', reducerTest(
  reducer,
  { balance: 0, ledger: []},
  withdrawMoney(5),
  { balance: -5, ledger: [-5]}
));

test('It handles a deposit', reducerTest(
  reducer,
  { balance: 0, ledger: []},
  depositMoney(5),
  { balance: 5, ledger: [5]}
));

test('It handles multiple withdrawls', reducerTest(
  reducer,
  { balance: 0, ledger: []},
  withdrawMoney(5),
  {balance: -5, ledger: [-5]},
  withdrawMoney(10),
  {balance: -15, ledger: [-5,-15]}
));

test('It handles multiple deposits', reducerTest(
  reducer,
  { balance: 0, ledger: []},
  depositMoney(5),
  {balance: 5, ledger: [5]},
  depositMoney(10),
  {balance: 15, ledger: [5,15]}
));

test('It handles a withdrawl and then a deposit', reducerTest(
  reducer,
  {balance: 0, ledger: []},
  depositMoney(5),
  {balance: 5, ledger: [5]},
  withdrawMoney(5),
  {balance: 0, ledger: [0]}
));
