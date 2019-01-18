import React, { Component } from 'react';
import ToDoCard from '../Components/ToDoCard'

class ToDoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDos: [],
    }
  }
  changeViewToIndex = (editToDo) =>{
    const newArray = [...this.state.toDos]
    const indexOfeditToDo = newArray.indexOf(editToDo)
    newArray[indexOfeditToDo] = editToDo
    this.setState({toDos: newArray})
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/to_dos')
      .then(r => r.json())
      .then(data => this.setState({toDos: data}))
  }

  renderToDos = () => {
    const items = this.state.toDos
    return items.map(toDo => <ToDoCard key={toDo.id} toDo={toDo} handleDelete={this.handleDelete} handleEdit={this.handleEdit} changeViewToIndex={this.changeViewToIndex}/>)
  }

  handleDelete = (toDo) => {
    const upDatedToDos = [...this.state.toDos]
    const toDoToDelete = upDatedToDos.indexOf(toDo)
    upDatedToDos.splice(toDoToDelete, 1)
    this.setState({toDos: upDatedToDos})
    fetch(`http://localhost:3000/api/v1/to_dos/${toDo.id}`, {
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
