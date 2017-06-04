
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import BotApp from './reducers';
import Root from './components/Root';

let store = createStore(BotApp);

render(
  <Root store={store} />,
  document.getElementById('root')
);
