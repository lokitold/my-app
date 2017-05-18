import React, {Component} from 'react';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }


    render() {
        return (
            <ul>
                <li>uno</li>
                <li>dos</li>
                <li>tres</li>
                <li>{this.props.name}</li>
                <li>{this.state.date.toLocaleTimeString()}</li>
            </ul>
        );
    }
}

export default List;
