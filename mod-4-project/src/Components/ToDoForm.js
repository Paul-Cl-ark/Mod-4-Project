import React from 'react'
import { Form } from 'semantic-ui-react'

class ToDoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      header: '',
      description: ''
    }
  }

  handleChange = (data) => {
    this.setState({
      [data.name]: data.value
    })
  }

  handleSubmit = (event) => {
      event.preventDefault()
      fetch('http://localhost:3000/to-dos', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            header: this.state.header,
            description: this.state.description,
          }
        )
      })
        .then(r => console.log(r))
        .then(toDos => this.props.changeViewToAllTodos())

  }

  render() {
    return (
      <div>
        <h3>Add a To Do!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="header" placeholder="header" name="header" />
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="description" placeholder="description" name="description" />

          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default ToDoForm
