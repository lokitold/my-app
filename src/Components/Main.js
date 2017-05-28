import React, {Component} from 'react';
import List from './List';
import BasicExamle from './BasicExample';
import { Switch,Route } from 'react-router-dom'

const Home = () => (
    <div>
        <h1>Welcome to the Tornadoes Website!</h1>
    </div>
)

const Roster = () => (
    <div>
        <h1>Welcome to Roster</h1>
    </div>
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

const Status = ({ code, children }) => (
    <Route render={({ staticContext }) => {
    if (staticContext)
      staticContext.status = code
    return children
  }}/>
)

const NotFound = () => (
    <Status code={404}>
        <div>
            <h1>Sorry, can’t find that.</h1>
        </div>
    </Status>
)

class Main extends Component {

    render() {
        return (
            <main>
                <hr/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/roster' component={Roster}/>
                    <Route path='/schedule' component={Schedule}/>
                    <Route path='/basic-example-route' component={BasicExamle}/>
                    <Route path='/list' component={() => (<List name="Sara" />)}/>
                    <Route component={NotFound}/>
                </Switch>
            </main>
        );
    }
}

export default Main;
