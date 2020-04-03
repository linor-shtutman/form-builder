import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import App from './components/App'

export const customHistory = createBrowserHistory()

ReactDOM.render(
    <Router history={customHistory}>
        <App />
    </Router>,
    document.querySelector('#root')
)
