import React from 'react';
import ReactDOM from 'react-dom';
import Sub from './components/Sub'
import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'jquery/src/jquery'

const Application = () => {
    return (
        <div className='mainContent wrapper-mainContent'>
            < Sub />
            < App />
        </div>
    )
}


ReactDOM.render(<Application />, document.getElementById('app'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
