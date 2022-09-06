import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store} from './store'
import App from './App';

// store -> object containing multiple methods ( get state, change state using dispatch and subscribe to change state )
// dispatch -> action is transferred
// state -> object, array or primitive. Store data
// action -> object with a required field type. Which determines how the state will change. const action = {type: '', payload: '?'}
// reducer -> pure function, takes state and action. Logic: what action was passed to the function. Created with switch case, default return state.

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

