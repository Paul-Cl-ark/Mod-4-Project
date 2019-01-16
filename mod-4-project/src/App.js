import React, { Component } from 'react';
import './App.css';
import ToDoContainer from './Containers/ToDoContainer'
import ToDoForm from './Components/ToDoForm'


class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome to our To-Do List
        <ToDoContainer />
        <ToDoForm />
      </div>
    );
  }
}

export default App;
