import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react'
import EditModal from './EditModal'


class ToDoCard extends Component {

  render() {
    return (
      <div className="ToDoCard">
      <Card>
        <Card.Content>
          <Card.Header>{this.props.toDo.header}</Card.Header>
          <Card.Description>{this.props.toDo.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button className="ui red button" onClick={() => this.props.handleDelete(this.props.toDo)}>Delete</Button>
            <EditModal handleEdit={this.props.handleEdit} todo={this.props.toDo} changeViewToIndex={this.props.changeViewToIndex}/>
        </Card.Content>
      </Card>
      </div>
    );
  }
}

export default ToDoCard;
