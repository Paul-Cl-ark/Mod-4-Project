import React from 'react'
import { Form , Container} from 'semantic-ui-react'


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
      const token = localStorage.getItem('token')
      event.preventDefault()
      fetch('http://localhost:3000/api/v1/to_dos', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': token
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

        <Container>
        <h3>Add a To Do!</h3>
        <Form onSubmit={this.handleSubmit}>

          <Form.Input onChange={(event, data) => this.handleChange(data)} label="Title" placeholder="Title" name="header" />

          <Form.TextArea onChange={(event, data) => this.handleChange(data)} label="Description" placeholder="Description" name="description" />


          <Form.Button>Submit</Form.Button>
        </Form>
        </Container>

    )
  }
}

export default ToDoForm
