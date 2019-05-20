import React from "react"
import ReactDOM from "react-dom"
import styles from '../App.css';
// import ContainedButton from './ContainedButton'

import {connect} from 'react-redux'
import ConsoleLine from './ConsoleLine'

class Console extends React.Component {
  constructor(props) {
    super(props);
    //if(typeof window !== 'undefined') setInterval(this.fetch.bind(this), 2000)
    this.counter = 0
     this.clearMessages =this.clearMessages.bind(this)
  }

  clearMessages(message){
    this.props.store.dispatch({type:'CLEAR'})
  }

  render(){

    let contents = this.props.store.getState().logs;
    // contents = [["this stuff here"]]
    return <div>



    {contents.map((line,index) => <ConsoleLine key={this.counter} level={this.counter++} index={index} line={line}></ConsoleLine>)}

    </div>
  }
}

// const mapStateToProps = state => {
//   return {
//     consoleContents : state.consoleContents
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     setContents : (contents) => dispatch({
//       type : 'SET_CONTENTS',
//       contents
//     })
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Console);
export default Console;