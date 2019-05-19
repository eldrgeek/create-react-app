import React from 'react';
import logo from './logo.svg';
import Counter from "./components/Counter"
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter
    value={props.store.getState()}
        onIncrement={() => {console.log("inc"); props.store.dispatch({ type: 'INCREMENT' })}}
    onDecrement={() => props.store.dispatch({ type: 'DECREMENT' })}
  />

        <p>
          Edit <code>src/App.js</code> and then you can reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Do ths React
        </a>
      </header>
    </div>
  );
}

export default App;
