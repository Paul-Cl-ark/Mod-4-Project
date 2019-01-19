import React from 'react'
import { Form } from 'semantic-ui-react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (data) => {
    this.setState({
      [data.name]: data.value
    })
  }

  handleSubmit = (event) => {
      event.preventDefault()
      fetch('http://localhost:3000/api/v1/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            email: this.state.email,
            password: this.state.password,
          }
        )
      })
  }

  render() {
    return (
      <div>
        <h3>Log In</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="email" placeholder="Email" name="email" />
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="password" placeholder="Password" name="password" />
          </Form.Group>
          <Form.Button>Log in</Form.Button>
        </Form>
      </div>
    )
  }
}

export default LoginForm
