import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import './index.css';
import { BrowserRouter,Link } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
                <li><Link to='/list'>List</Link></li>
            </ul>
        </nav>
    </header>
)

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