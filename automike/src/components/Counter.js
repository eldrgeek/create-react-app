import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ReactReduxContext } from 'react-redux'
console.log("Counter is now loaded")
if (module.hot) {
    console.log("counter is hot")
}
class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
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
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
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
