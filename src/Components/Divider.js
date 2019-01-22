import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

class DividerExampleVerticalForm extends React.Component {
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
    return(
      <Segment placeholder>
      <Grid columns={2} relaxed='very' stackable>
        <Grid.Column>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input icon='envelope outline' iconPosition='left' label='Email' placeholder='Email' name="email" onChange={(event, data) => this.handleChange(data)} />
            <Form.Input icon='lock' iconPosition='left' label='Password' type='password' name="password" onChange={(event, data) => this.handleChange(data)} />

            <Button content='Login' primary />
          </Form>
        </Grid.Column>

        <Grid.Column verticalAlign='middle'>
          <Button content='Sign up' icon='signup' size='big' />
        </Grid.Column>
      </Grid>

      <Divider vertical>Or</Divider>
    </Segment>
    )
  }
}

export default DividerExampleVerticalForm
