import React from 'react'
import { Form } from 'semantic-ui-react'

class LogInForm extends React.Component {
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
      fetch('http://localhost:3000/api/v1/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            user:
              {
                email: this.state.email,
                password: this.state.password
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
      }
    })
  }

  render() {
    return (
      <div>
        <h3>Log In</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="Email" placeholder="Email" name="email" />
            <Form.Input onChange={(event, data) => this.handleChange(data)} fluid label="Password" placeholder="Password" name="password" type='password'/>
          </Form.Group>
          <Form.Button>Log in</Form.Button>
        </Form>
      </div>
    )
  }
}

export default LogInForm
