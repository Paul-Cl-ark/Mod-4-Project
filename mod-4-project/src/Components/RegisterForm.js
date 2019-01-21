import React from 'react'
import { Form } from 'semantic-ui-react'

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
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
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
        }
      )
    })
  }

  render() {
    return (
      <div>
        <h3>Register</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="firstName" placeholder="First name" name="firstName" />
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="lastName" placeholder="Last name" name="lastName" />
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="email" placeholder="Email" name="email" />
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="password" placeholder="Password" name="password" />
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="passwordConfirmation" placeholder="Confirm password" name="passwordConfirmation" />
          </Form.Group>
          <Form.Button>Register</Form.Button>
        </Form>
      </div>
    )
  }
}

export default RegisterForm
