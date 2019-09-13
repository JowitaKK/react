import React, { Component } from 'react'
import Box from './Box';
import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <Box height={100} width={20} color="green" />
        <Box height={150} width={10} color="yellow"/>
      </div>

    );
  }
}


export default App;
