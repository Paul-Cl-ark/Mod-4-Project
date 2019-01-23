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
    fetch('http://localhost:3000/api/v1/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          user: {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
          }
        }
      )
    })
    .then(r => r.json())
    .then(data => {
      if (data.error) {
      alert(data.error)
    } else {
      this.props.logIn(data.user, data.token)
    }})
  }

  render() {
    return (
      <div>
        <h3>Register</h3>
        <Form onSubmit={(e)=>{
            this.handleSubmit(e)
            this.props.handleRegisterFormSubmitted()
          }}>
          <Form.Group widths="equal">
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="First name" placeholder="First name" name="firstName" icon='hand point right outline' iconPosition='left' />
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="Last name" placeholder="Last name" name="lastName" icon='hand point right outline' iconPosition='left' />
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="Email" placeholder="Email" name="email" icon='envelope outline' iconPosition='left' />
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="Password" placeholder="Password" name="password" type='password' icon='lock' iconPosition='left' />
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="Confirm password" placeholder="Password" name="passwordConfirmation" type='password' icon='lock' iconPosition='left' />
          </Form.Group>
          <Form.Button>Register</Form.Button>
          <Form.Button onClick={this.props.backToLogInForm}>Back to Login</Form.Button>
        </Form>
      </div>
    )
  }
}

export default RegisterForm
