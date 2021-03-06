import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import RegisterForm from './RegisterForm'
import LogInForm from './LogInForm'
import FirebaseAuth from './FirebaseAuth'


class DividerExampleVerticalForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      signUpClicked: false,
      registerFormSubmitted: false,
    }
  }

  handleRegisterFormSubmitted = () => {
    this.setState({
      registerFormSubmitted: true
    })
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

  backToLogInForm = () => {
    this.setState({signUpClicked: false})
  }

  render() {
    const renderDivider = () => {
      return (<React.Fragment><Grid columns={2} relaxed='very' stackable>
        <Grid.Column>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input icon='envelope outline' iconPosition='left' label='Email' placeholder='Email' name="email" onChange={(event, data) => this.handleChange(data)} />
            <Form.Input icon='lock' iconPosition='left' label='Password' type='password' name="password" placeholder='Password' onChange={(event, data) => this.handleChange(data)} />

            <Button content='Login' primary />
          </Form>
          <FirebaseAuth logIn={this.props.logIn}/>
        </Grid.Column>

        <Grid.Column verticalAlign='middle'>
          <Button content='Sign up' icon='signup' size='big' onClick={() => this.setState({signUpClicked: true})} />
        </Grid.Column>
      </Grid>

      <Divider vertical>Or</Divider></React.Fragment>)
    }

    const renderRegisterForm = () => {
      return <RegisterForm handleRegisterFormSubmitted={this.handleRegisterFormSubmitted} logIn={this.props.logIn} backToLogInForm={this.backToLogInForm}/>
    }
    const renderLogInForm = () => {
      return <LogInForm logIn={this.props.logIn}/>
    }

    const ifElseRender = () =>{
      if (this.state.signUpClicked) { return renderRegisterForm()}else {return renderDivider()}
    }

    return(
      <Segment placeholder>
      {ifElseRender()}
      </Segment>
    )
  }
}

export default DividerExampleVerticalForm
