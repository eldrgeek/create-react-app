import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import rootReducer from './redux/reducers'
const store = configureStore()

const render = () => {
    ReactDOM.render(
    <Provider store={store}>
        <App store={store} />
    </Provider>
    , document.getElementById('root'))
};

render();

store.subscribe(render);


if (module.hot) {
  module.hot.accept('./App', () => {
   render();
  })
}

if (module.hot) {
      module.hot.accept('./redux/reducers', () => {
        store.replaceReducer(rootReducer)
      })
    }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
