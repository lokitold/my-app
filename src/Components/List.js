import React, {Component} from 'react';
import axios from 'axios';

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            names: ['Jake', 'Jon', 'Thruster']
        };
    }

    componentDidMount() {
        axios.get('https://m7s0kugbb6.execute-api.us-east-1.amazonaws.com/dev/todos')
            .then(response => {
                this.setState({
                    posts: response
                });
                //console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }


    render() {

        var namesList = this.state.names.map(function (name) {
            return <li key={name}>{name}</li>;
        });

        var postList = [];
        if (this.state.posts !== undefined) {
            //console.log(this.state.posts);
            postList = Object.keys(this.state.posts.data).map((key)  => {
                return <li key={key}>{this.state.posts.data[key].body}</li>;
            })
        }

        return (
            <ul>
                <li>uno</li>
                <li>dos</li>
                <li>tres</li>
                <li>{this.props.name}</li>
                <li>{this.state.date.toLocaleTimeString()}</li>
                {namesList}
                {postList}
            </ul>
        );
    }
}

export default List;
