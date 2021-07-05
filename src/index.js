import ReactDom from 'react-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import "./Main.css";
import "./Global.scss";
import './index.css';

ReactDom.render(
    <div>
        <App/>
    </div>
    , document.getElementById('root'));
