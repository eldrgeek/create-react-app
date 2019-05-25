import React from 'react'
// import PropTypes from 'prop-types'
// import { ReactReduxContext } from 'react-redux'
import "../Dictation.css"
import init from "../DictationController.js"

const Dictation = function(props) {
    let initStore = () => {init(props.store)}
    return <div className="container">
        <div className="text-box" id="text" >

            <textarea className="textarea" id="textarea" />

        </div>
        <div id="footer">
            <button id="start" onClick={initStore}>Starting</button>
            <button id="stop">Stop</button>
            <i className="fa fa-microphone"></i>
            <p className="status" id="status" contentEditable="true" />
        </div>
    </div>
}
export default Dictation;