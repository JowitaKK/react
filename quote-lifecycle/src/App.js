import React, { Component } from 'react'
import ZenQuote from './ZenQuote';
import GithubUserinfo from './GithubUserInfo';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <ZenQuote/>
      {/* <GithubUserinfo username="facebook"/>
      <GithubUserinfo username="Jowita"/>
      <GithubUserinfo username="colt"/>
      <GithubUserinfo username="marta"/> */}
    </div>
    );
  } 
}
export default App;
