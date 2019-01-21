import React, { Component } from 'react';
import LogInForm from './LogInForm'
import RegisterForm from './RegisterForm'

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>This is Paul and Paolo's To-Do app written in React.js</p>
        <LogInForm />
        <RegisterForm />
      </div>
    );
  }
}

export default Home;