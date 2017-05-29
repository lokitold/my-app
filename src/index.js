import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import Header from './Components/Header';
import './index.css';
import { BrowserRouter,Link } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';


const App = () => (
    <div>
        <Header />
        <Main />
    </div>
);


ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();