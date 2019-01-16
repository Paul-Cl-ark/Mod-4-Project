import React, { Component } from 'react';
import ToDo from '../Components/ToDo'

class ToDoContainer extends Component {
  render() {
    return (
      <div className="ToDoContainer">
        To-Do Container
        <ToDo />
      </div>
    );
  }
}

export default ToDoContainer;
