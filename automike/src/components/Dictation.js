import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ReactReduxContext } from 'react-redux'
import "../Dictation.css"
import init from "../DictationController.js"
const Dictation = function(props) {
    setTimeout(init,1000);
    return <div class="container">
        <div class="text-box" id="text" contenteditable="true">

            <textarea class="textarea" id="textarea" prompt="Talk here">
                To begin here boy OK:
    </textarea>
        </div>
        <div id="footer">
            <button id="start">Starting</button>
            <button id="stop">Stop</button>
            <i class="fa fa-microphone"></i>
            <p class="status" id="status" contenteditable="true" />
        </div>
    </div>
}
export default Dictation;