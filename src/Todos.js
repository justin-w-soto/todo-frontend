import React, { Component } from 'react';
import { getToDos } from './GetTodos.js';

class ToDos extends Component {
    state = { 
        todos: [],
        completed: false
    }
    componentDidMount = async () => {
      const toDoz = await getToDos();
    //   console.log(toDoz);
      this.setState({todos: toDoz})
    }
    render() {
        console.log(this.props);
        return (
            <>
                <h1>TODO: </h1>
                 <div className="tod" >

                     {this.state.todos.map((todO) => (
                     <p key={todO.id}>{todO.todo}</p>))}

                     </div>;
               
            </>
        );
    }
}

export default ToDos;