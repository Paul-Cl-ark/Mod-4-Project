import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'


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
    return <Card.Group items={items} />
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
