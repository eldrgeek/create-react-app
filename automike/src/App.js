import React from 'react';
import logo from './logo.svg';
import Counter from "./components/Counter"
// import StyledButton from "./components/StyledButton"
import Console from "./components/Console"
import { hot } from 'react-hot-loader/root'
import './App.css';
import ContainedButton from './components/ContainedButton'
console.log("App is loaded");
if (module.hot) {
    console.log("App is hot!")
    module.hot.accept()
}
function App(props) {
  console.log("App is called")
  return (
    <div className="App">
      <header className="App-header">

        <ContainedButton
          onClick={() => props.store.dispatch({type: "LOG", text:'logged1'})}

        />
         <ContainedButton
          onClick={() => props.store.dispatch({type: "LOG", text:'logged34'})}

        />
        <Console store={props.store}/>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter
     value={props.store.getState().counter}
        onIncrement={() => {props.store.dispatch({type:'MESSAGE', text: 'testings'}); props.store.dispatch({ type: 'INCREMENT' })}}
    onDecrement={() => props.store.dispatch({ type: 'DECREMENT' })}
  />

        <p>
          Edit the <code>src/App.js</code> and then you can reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Do ths
          React
        </a>
      </header>
    </div>
  );
}

export default process.env.NODE_ENV === "development" ? hot(App) : App
