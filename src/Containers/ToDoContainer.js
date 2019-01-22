import React, { Component } from 'react';
import ToDoCard from '../Components/ToDoCard'
import {Container} from 'semantic-ui-react'

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
    this.props.changeViewToHome()
    this.props.changeViewToAllTodos()
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    fetch('http://localhost:3000/api/v1/to_dos', {
      headers: {'Authorization': token}
    })
      .then(r => r.json())
      .then(data => this.setState({toDos: data}))
  }

  renderToDos = () => {
    const items = this.state.toDos
    items.sort(function(a,b){
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
    return new Date(b["created_at"]) - new Date(a["created_at"]);
    });
    return items.map(toDo => <ToDoCard key={toDo.id} toDo={toDo} handleDelete={this.handleDelete} handleEdit={this.handleEdit} changeViewToIndex={this.changeViewToIndex}/>)
  }

  handleDelete = (toDo) => {
    const token = localStorage.getItem('token')
    const upDatedToDos = [...this.state.toDos]
    const toDoToDelete = upDatedToDos.indexOf(toDo)
    upDatedToDos.splice(toDoToDelete, 1)
    this.setState({toDos: upDatedToDos})
    fetch(`http://localhost:3000/api/v1/to_dos/${toDo.id}`, {
      headers: {'Authorization': token},
      method: "DELETE"
    })
  }

  render() {
    return (
      <Container>

        {this.renderToDos()}

      </Container>
    );
  }
}

export default ToDoContainer;
