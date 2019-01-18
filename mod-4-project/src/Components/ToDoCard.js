import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react'

class ToDoCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="ToDoCard">
      <Card>
        <Card.Content>
          <Card.Header>{this.props.toDo.header}</Card.Header>
          <Card.Description>{this.props.toDo.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button className="ui red basic button" onClick={() => this.props.handleDelete(this.props.toDo)}>Delete</Button>
            <Button className="ui teal basic button">Edit</Button>
        </Card.Content>
      </Card>
      </div>
    );
  }
}

export default ToDoCard;
