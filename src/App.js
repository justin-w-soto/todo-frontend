import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import './App.css';
import Auth from './Auth.js';
import Todos from './Todos.js';


class Home extends Component {
    render() {  
        return <h1>Welcome to your todo list. Please sign in or sign up to get things done. </h1>;
    }
}
class App extends Component {
    state = { 
        token: localStorage.getItem('TOKEN'),
     };
     setToken = (value) => {
         this.setState({ token: value });
     }

    render() { 
        return ( 

        <BrowserRouter>
            <header>

                <NavLink exact to="/" >Home</NavLink>
                <NavLink to="signin">Sign In</NavLink>
                <NavLink to="signup">Sign Up</NavLink>

            </header>
            <section className="main">
                <Switch>

                    <Route exact path="/" component={Home} />
                    <Route path="/signin" render={(routerProps) => (
                        <Auth setToken={this.setToken} type="signin" {...routerProps} /> )} />

                    <Route path="/signup" render={(routerProps) => (
                        <Auth setToken={this.setToken} type="signup" {...routerProps} /> )} />

                    <Route path="/todos" render={(routerProps) => this.state.token ? (
                        <Todos {...routerProps} token= {this.state.token}  /> ) : (<Redirect to="/signin" /> )} />    

               </Switch>
            </section>
<div className="appt"> APP TOKEN: { this.state.token && this.state.token.toString() }</div>
        </BrowserRouter>
         );
    }
}

export default App;



