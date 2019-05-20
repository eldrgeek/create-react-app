import React from "react"
import ReactDOM from "react-dom"
import styles from '../App.css';
// import ContainedButton from './ContainedButton'

import {connect} from 'react-redux'

class ConsoleLine extends React.Component {
  constructor(props) {
    super(props);
  }

   render() {
     let key = this.props.level + "." + this.props.index

    //   if(Array.isArray(this.props.line) ){
    //     return (
    //      <li key={key}><ul key={key + "UL"}>

    //       {this.props.line.map((line,ix) =>
    //       <ConsoleLine level={this.props.level+1} key={key + "." + ix} line={line}>

    //       </ConsoleLine>)}
    //        </ul></li>
    //            )

    //   } if(typeof this.props.line === 'object') {
    //     return (<li key={key}>
    //       "Object"
    // </li>)
    //   }else {
        return (<li key={key}>
          {this.props.level} {this.props.line}
    </li>)
      }


  }
// }

export default ConsoleLine;
