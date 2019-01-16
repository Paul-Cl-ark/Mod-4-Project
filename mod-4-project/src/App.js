import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoContainer from './Containers/ToDoContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome to our To-Do List
        <ToDoContainer />
      </div>
    );
  }
}

export default App;
