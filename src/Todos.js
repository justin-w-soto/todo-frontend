import React, { Component } from 'react';
import { getToDos, createTodo, updateTodo } from './GetTodos.js';

class ToDos extends Component {
    state = { 
        todos: [],
        newTodo: ''
    };

    componentDidMount =  () => {
        this.fetchTodos();
    };

    fetchTodos = async () => {
        const data = await getToDos(this.props.token);
        this.setState({ todos: data });
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        const data = await createTodo(this.props.token, {
            todo: this.state.newTodo,
            completed: false
        });
        
        this.setState({ newTodo: '' });
        this.setState((prevState) => ({
            todos: [...prevState.todos, data]
        }));
        
    };
    
    handleCompleted = async (todo) => {
        todo.completed = !todo.completed;
        const data = await updateTodo(this.props.token, todo);
        this.fetchTodos();
        console.log(data);
    };
    
    render() {
        return (

        <>
            <h1>TODO:</h1>

            <section className="todo-list">

            {this.state.todos.map((todo) => (
                <div className="todo-item" key={todo.id}>

                    <input type="checkbox" checked={todo.completed} 
                    onChange={() => this.handleCompleted(todo)}></input>

                        <label>{todo.todo}</label>
                </div>

                    ))}

            </section>

                <section className="new-todo">

                <form onSubmit={this.handleSubmit}>

                        <input value={this.state.newTodo} type="text"
                         onChange={(e) => this.setState({ newTodo: e.target.value })} />

                        <button>Add A To Do</button>

                </form>

                </section>
        </>

        );
    }
}

export default ToDos;