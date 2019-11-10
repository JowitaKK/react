import React, { Component } from 'react';
import {Route, Switch, NavLink /*Link*/ } from "react-router-dom";
import About from './About';
import Dog from './Dog';
import Contact from './Contact';
import './App.css';

const Lover = () => <h1>I do like dogs</h1>

class App extends Component {
  render() {
    return(
      <div className= 'App'>
        <nav className = 'App-nav'>
        <NavLink exact activeClassName='active-link' to='/'>About</NavLink>
        <NavLink exact activeClassName='active-link' to='/dog'>Dog</NavLink>
        <NavLink exact activeClassName='active-link' to='/contact'>Contact</NavLink>
          {/* 
          <Link to= '/'>About</Link>
          <Link to= '/dog'>Dog</Link>
          <Link to= '/contact'>Contact</Link> */}

          
          {/* 
          <a href='/dog'>Dog</a>
          <a href='/contact'>Contact</a>
          <a href= '/'>About</a> */}

        </nav>
      <Switch>
        <Route exact path='/' component = {About} />
        <Route exact path='/dog' component = {() => <Dog name= 'Jac'/>} />
        { /* or 
        <Route exact path='/dog' render={() => <Dog name = 'Bicuits' />} /> */}
        <Route exact path='/dog/lover' component = {Lover} />
        <Route exact path='/contact' component = {Contact} />
      </Switch>
      </div>

    )
  }
} 
export default App;
