import React, { Component } from 'react';
import ToDoCard from '../Components/ToDoCard'

class ToDoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDos: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/to-dos')
      .then(r => r.json())
      .then(data => this.setState({toDos: data}))
  }

  renderToDos = () => {
    const items = this.state.toDos
    return items.map(toDo => <ToDoCard key={toDo.id} toDo={toDo} handleDelete={this.handleDelete}/>)
  }

  handleDelete = (toDo) => {
    const upDatedToDos = [...this.state.toDos]
    const toDoToDelete = upDatedToDos.indexOf(toDo)
    upDatedToDos.splice(toDoToDelete, 1)
    this.setState({toDos: upDatedToDos})
    fetch(`http://localhost:3000/to-dos/${toDo.id}`, {
      method: "DELETE"
    })
  }

  render() {
    return (
      <div className="ToDoContainer">
        {this.renderToDos()}
      </div>
    );
  }
}

export default ToDoContainer;
