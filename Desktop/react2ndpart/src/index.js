import React from "react"
import ReactDom from "react-dom"
import * as serviceWorker from './serviceWorker'
import './App.css'
import App from "./App"

ReactDom.render(<App/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
