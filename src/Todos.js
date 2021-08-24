import React, { Component } from 'react';

class ToDos extends Component {
    state = {};
    render() {
        console.log(this.props);
        return (
            <>
                <h1>TODO:</h1>
            </>
        );
    }
}

export default ToDos;