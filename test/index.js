import jsdom from 'jsdom';

global.document = require('jsdom').jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;

require('./balance.js');
require('./ledger.js');
require('./transaction.js');
require('./reducerAndActions.js');
