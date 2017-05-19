import React, {Component} from 'react';
//import axios from 'axios';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            names : ['Jake', 'Jon', 'Thruster']
        };
    }


    render() {

        var namesList = this.state.names.map(function(name){
            return <li>{name}</li>;
        })

        return (
            <ul>
                <li>uno</li>
                <li>dos</li>
                <li>tres</li>
                <li>{this.props.name}</li>
                <li>{this.state.date.toLocaleTimeString()}</li>
                {namesList}
            </ul>
        );
    }
}

export default List;
