import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import rootReducer from './redux/reducers'
console.log("Index loaded")
if (module.hot) {
    console.log("index is hot")
}
let store = configureStore()

const render = (App) => {
    ReactDOM.render(
    <Provider store={store}>
        <App store={store} />
    </Provider>
    , document.getElementById('root'))
};

render(App);
console.log("testing")

const renderApp = () => render(App);

store.subscribe(renderApp);


if (module.hot) {
  module.hot.accept('./App', () => {
   console.log("New App")
   render(App);
  })
}
if (module.hot) {
      module.hot.accept('./redux/configureStore', () => {
        console.log("hot configurestore")
        console.log("before", store)
        // configureStore = require('./redux/configureStore')
        store = configureStore(store.getState());
        console.log("after", store)
        store.subscribe(renderApp);
        render(App)
      })
    }
if (module.hot) {
      module.hot.accept('./redux/reducers', () => {
        console.log("New reducers in index")
        store.replaceReducer(rootReducer)
      })
    }


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
