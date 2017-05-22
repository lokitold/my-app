import React from 'react';
import ReactDOM from 'react-dom';
import List from './Components/List';
import './index.css';
import { BrowserRouter,Switch,Route,Link } from 'react-router-dom'


const Home = () => (
    <div>
        <h1>Welcome to the Tornadoes Website!</h1>
    </div>
)

const Roster = () => (
    <Switch>
        <h1>Welcome to Roster</h1>
    </Switch>
)

const Schedule = () => (
    <div>
        <ul>
            <li>6/5 @ Evergreens</li>
            <li>6/8 vs Kickers</li>
            <li>6/14 @ United</li>
        </ul>
    </div>
)

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
        </nav>
    </header>
)

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/roster' component={Roster}/>
            <Route path='/schedule' component={Schedule}/>
        </Switch>
    </main>
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
), document.getElementById('root2'));


ReactDOM.render((
    <BrowserRouter>
        <List name="sara" />
    </BrowserRouter>
    ), document.getElementById('root'));
