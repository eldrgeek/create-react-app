import React from 'react';
import { hot } from 'react-hot-loader/root'
import './App.css';
import Dictation from './components/Dictation'
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
      <Dictation store={props.store}/>s
      </header>
    </div>
  );
}

export default process.env.NODE_ENV === "development" ? hot(App) : App
