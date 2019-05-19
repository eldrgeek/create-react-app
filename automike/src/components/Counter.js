import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ReactReduxContext } from 'react-redux'
console.log("Counter is now loaded")
if (module.hot) {
    console.log("counter is hot")
}
class Counter extends Component {
  constructor(props) {
    console.log("counter consructed");
    super(props);
    if(module.hot){ console.log ("hotter constructor")}
    this.state = {count:0}


    this.incrementLocal = this.incrementLocal.bind(this);
    this.incrementAsyncLocal = this.incrementAsyncLocal.bind(this);
  }

  incrementLocal() {
   this.setState({count:this.state.count+1})
  }

  incrementAsyncLocal() {
    setTimeout(this.incrementLocal, 1000)
  }

  render() {
    console.log("Counter rendered")
    const { value, onIncrement, onDecrement } = this.props
    return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        // do something with the store here

      return <div>
      <p>message {store.getState().message}</p>
        Clicked: {store.getState().counter} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementLocal}>
          Increment Locally {this.state.count}
        </button>
        {' '}
        <button onClick={this.incrementAsyncLocal}>
          Increment async Local
        </button>
      </div>
      }}
     </ReactReduxContext.Consumer>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
